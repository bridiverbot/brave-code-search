// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
#include "Player.h"

using namespace Microsoft::WRL;

class ScopedCall final
{
public:
    explicit ScopedCall(void (*callback)()) noexcept
        : callback_(callback)
    {
    }

    ~ScopedCall() noexcept
    {
        if (callback_ != nullptr)
        {
            callback_();
        }
    }

    ScopedCall(const ScopedCall&) = delete;
    ScopedCall& operator=(const ScopedCall&) = delete;

private:
    void (*callback_)() = nullptr;
};

HRESULT Player::Initialize(PlayerEvents* callback)
{
    callback_ = callback;
    feedThread_ = std::thread([this]() { _FeedThreadMain(); });
  
    constexpr DWORD kFeedInitTimeoutMs = 15'000;
    return _WaitForFeedInitialization(kFeedInitTimeoutMs);
}

void Player::Shutdown()
{
    {
        std::lock_guard<std::mutex> lock(playbackMutex_);
        playing_ = false;
    }

    stopFeedThread_.store(true);
    if (feedThread_.joinable())
    {
        feedThread_.join();
    }

    audioStream_.Reset();
    videoStream_.Reset();
    session_.Reset();
    redirector_.Reset();
    eventHandler_.Reset();
    client_.Reset();
    audioProvider_.reset();
    videoProvider_.reset();
}

HRESULT Player::Play()
{
    std::lock_guard<std::mutex> lock(playbackMutex_);
    HRESULT hr = session_->Play();
    if (FAILED(hr))
    {
        return hr;
    }
    playing_ = true;
    return S_OK;
}

HRESULT Player::Pause()
{
    std::lock_guard<std::mutex> lock(playbackMutex_);
    HRESULT hr = session_->Pause();
    if(FAILED(hr))
    {
        return hr;
    }
    playing_ = false;
    return S_OK;
}

HRESULT Player::Seek(LONGLONG targetTime)
{
    std::lock_guard<std::mutex> lock(playbackMutex_);

    // SetCurrentTime will set the time of the remote player.  After this point, the
    // streams will need data starting at that time.  Video and audio need to start
    // from a clean point (IDR frame, for example).
    HRESULT hr = session_->SetCurrentTime(targetTime);
    if (FAILED(hr))
    {
        return hr;
    }

    videoProvider_->Seek(targetTime);
    audioProvider_->Seek(targetTime);

    videoBufferedUntil100ns_ = targetTime;
    audioBufferedUntil100ns_ = targetTime;
    currentTimestamp100ns_ = targetTime;
    eventHandler_->Seek(targetTime);
    return S_OK;
}

LONGLONG Player::GetCurrentTime() const
{
    std::lock_guard<std::mutex> lock(playbackMutex_);
    return currentTimestamp100ns_;
}

bool Player::IsPlaying() const
{
    std::lock_guard<std::mutex> lock(playbackMutex_);
    return playing_;
}

HRESULT Player::SetVideoRect(
    HWND hwnd,
    UINT32 x,
    UINT32 y,
    UINT32 width,
    UINT32 height)
{
    return videoStream_->SetVideoRect(hwnd, x, y, width, height);
}

HRESULT Player::GetVideoReplacementImage(
    _Out_writes_bytes_(stride* height * 4) BYTE* imageData,
    _In_ UINT32 width,
    _In_ UINT32 height,
    _In_ UINT32 stride)
{
    return session_->GetVideoReplacementImage(imageData, width, height, stride);
}

HRESULT Player::_WaitForFeedInitialization(DWORD timeoutMs)
{
    std::unique_lock<std::mutex> lock(playbackMutex_);
    const bool initialized = feedInitializationCv_.wait_for(
        lock,
        std::chrono::milliseconds(timeoutMs),
        [this]() { return feedInitialized_; });
    if (!initialized)
    {
        return HRESULT_FROM_WIN32(WAIT_TIMEOUT);
    }

    return feedInitializationResult_;
}

void Player::_FeedThreadMain()
{
    HRESULT hr = CoInitializeEx(nullptr, COINIT_MULTITHREADED);
    if (FAILED(hr))
    {
        _CompleteFeedThreadInit(hr);
        return;
    }

    ScopedCall coUninitializeScope(&CoUninitialize);

    hr = _InitializeStreaming();
    _CompleteFeedThreadInit(hr);
    if (FAILED(hr))
    {
        return;
    }

    while (!stopFeedThread_.load())
    {
        {
            std::lock_guard<std::mutex> lock(playbackMutex_);
            if (playing_)
            {
                LONGLONG remotePlaybackTime = std::max<LONGLONG>(0, eventHandler_->GetLastTimeUpdate());
                currentTimestamp100ns_ = remotePlaybackTime;

                // Provide stream data to MMR about 5 seconds ahead of the current remote playback time.
                // The remote client needs some data ahead of its time to ensure smooth playback.  If it
                // does not, playback will stop and IMMREventHandler::OnBufferingStateChanged will get
                // called.
                constexpr LONGLONG kFeedLeadTime100ns = 5LL * kOneSecond100ns;
                const LONGLONG targetTimestamp =
                    std::min(kTimelineDuration100ns, remotePlaybackTime + kFeedLeadTime100ns);
                hr = _FeedStreamsToTargetLocked(targetTimestamp);
                if (FAILED(hr))
                {
                    TraceFailure(L"FeedStreamsToTarget", hr);
                    playing_ = false;
                }
            }
        }

        // A better design might be to trigger feeding frames based on time update events, but a sleep
        // here makes for a simple frame feeding loop.
        constexpr DWORD kFeedThreadSleepMs = 500;
        Sleep(kFeedThreadSleepMs);
    }
}

void Player::_CompleteFeedThreadInit(HRESULT hr)
{
    {
        std::lock_guard<std::mutex> lock(playbackMutex_);
        feedInitialized_ = true;
        feedInitializationResult_ = hr;
    }
    
    feedInitializationCv_.notify_all();
}

HRESULT Player::_InitializeStreaming()
{
    constexpr UINT32 kVideoWidth = 640;
    constexpr UINT32 kVideoHeight = 360;
    constexpr UINT32 kVideoFps = 30;
    constexpr UINT32 kAudioSampleRate = 44100;
    constexpr UINT32 kAudioChannels = 2;
    constexpr UINT32 kAudioBitsPerSample = 16;

    auto h264Encoder = std::make_unique<simplestreamer::H264Encoder>();
    HRESULT hr = h264Encoder->Initialize(kVideoWidth, kVideoHeight, kVideoFps);
    if (FAILED(hr))
    {
        return hr;
    }
    std::vector<uint8_t> h264UserData = h264Encoder->GetUserData();

    videoProvider_ = std::make_unique<simplestreamer::FrameProvider>(
        std::move(h264Encoder),
        std::make_unique<simplestreamer::VideoFrameSource>(kVideoWidth, kVideoHeight),
        kOneSecond100ns / kVideoFps);

    auto aacEncoder = std::make_unique<simplestreamer::AACEncoder>();
    hr = aacEncoder->Initialize(kAudioSampleRate, kAudioChannels, kAudioBitsPerSample);
    if (FAILED(hr))
    {
        return hr;
    }
    std::vector<uint8_t> aacUserData = aacEncoder->GetUserData();

    audioProvider_ = std::make_unique<simplestreamer::FrameProvider>(
        std::move(aacEncoder),
        std::make_unique<simplestreamer::AudioFrameSource>(kAudioSampleRate, kAudioChannels, kAudioBitsPerSample),
        1024LL * kOneSecond100ns / kAudioSampleRate);

    ComPtr<IMultimediaRedirectorFactory> redirectorFactory;
    hr = CoCreateInstance(
        CLSID_MultimediaRedirectorFactory,
        nullptr,
        CLSCTX_INPROC_SERVER,
        IID_PPV_ARGS(&redirectorFactory));
    if (FAILED(hr))
    {
        return hr;
    }

    client_ = Make<SimpleMmrClient>();
    if (client_ == nullptr)
    {
        return E_OUTOFMEMORY;
    }

    hr = redirectorFactory->CreateMultimediaRedirector(client_.Get(), &redirector_);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = redirector_->BeginCreateRemoteSession();
    if (FAILED(hr))
    {
        return hr;
    }

    hr = client_->WaitForSession(10'000, &session_);
    if (FAILED(hr) || session_ == nullptr)
    {
        return FAILED(hr) ? hr : E_FAIL;
    }

    eventHandler_ = Make<SimpleMmrEventHandler>(callback_);
    if (eventHandler_ == nullptr)
    {
        return E_OUTOFMEMORY;
    }

    hr = session_->SetEventHandler(eventHandler_.Get());
    if (FAILED(hr))
    {
        return hr;
    }

    MMR_AUDIO_DECODER_CONFIG audioConfig = {};
    audioConfig.codec = MMR_AUDIO_CODEC_AAC;
    audioConfig.sampleFormat = MMR_AUDIO_SAMPLE_FORMAT_S16;
    audioConfig.channelLayout = MMR_AUDIO_CHANNEL_LAYOUT_STEREO;
    audioConfig.samplesPerSecond = kAudioSampleRate;
    audioConfig.seekPrerollUsec = 0;
    audioConfig.codecDelay = 0;
    audioConfig.encryptionScheme = { 0, 0, 0 };

    BYTE* aacExtraData = aacUserData.empty() ? nullptr : aacUserData.data();
    hr = session_->CreateAudioStream(
        audioConfig,
        aacExtraData,
        static_cast<UINT32>(aacUserData.size()),
        &audioStream_);
    if (FAILED(hr))
    {
        return hr;
    }

    MMR_VIDEO_DECODER_CONFIG videoConfig = {};
    videoConfig.codec = MMR_VIDEO_CODEC_H264;
    videoConfig.profile = MMR_VIDEO_CODEC_PROFILE_H264_BASELINE;
    videoConfig.format = MMR_VIDEO_PIXEL_FORMAT_NV12;
    videoConfig.colorSpace = MMR_VIDEO_COLOR_SPACE_UNSPECIFIED;
    videoConfig.codedSize = { kVideoWidth, kVideoHeight };
    videoConfig.visibleRect = { 0, 0, static_cast<INT32>(kVideoWidth), static_cast<INT32>(kVideoHeight) };
    videoConfig.naturalSize = { kVideoWidth, kVideoHeight };
    videoConfig.encryptionScheme = { 0, 0, 0 };

    // If codec initialization data is not supplied, the video stream may fail to decode on the client.
    // For H264, this is the sequence header (SPS/PPS).  Media Foundation helpfully provides this
    // from the encoder in the MF_MT_USER_DATA attribute of the output type.
    // H264 - SPS/PPS
    // HEVC - VPS/SPS/PPS
    // AV1 - AV1CodecConfigurationRecord
    // VP9 - Not needed
    BYTE* h264ExtraData = h264UserData.empty() ? nullptr : h264UserData.data();
    hr = session_->CreateVideoStream(
        videoConfig,
        h264ExtraData,
        static_cast<UINT32>(h264UserData.size()),
        &videoStream_);
    if (FAILED(hr))
    {
        return hr;
    }

    // Once all streams have been created, call BeginRemoting to signal that everything is ready to stream.
    hr = session_->BeginRemoting();
    if (FAILED(hr))
    {
        return hr;
    }

    const bool remotingInitialized = eventHandler_->WaitForRemotingInitialized(10'000);
    if (!remotingInitialized)
    {
        return HRESULT_FROM_WIN32(WAIT_TIMEOUT);
    }

    if (!eventHandler_->RemotingSucceeded())
    {
        return E_FAIL;
    }

    videoBufferedUntil100ns_ = 0;
    audioBufferedUntil100ns_ = 0;
    currentTimestamp100ns_ = 0;
    return S_OK;
}

HRESULT Player::_FeedStreamsToTargetLocked(LONGLONG targetTimestamp100ns)
{
    // 
    while (videoBufferedUntil100ns_ < targetTimestamp100ns || audioBufferedUntil100ns_ < targetTimestamp100ns)
    {
        HRESULT hr = S_OK;
        if (videoBufferedUntil100ns_ < targetTimestamp100ns)
        {
            hr = _FeedOneVideoFrameLocked();
            if (FAILED(hr))
            {
                return hr;
            }
        }

        if (videoBufferedUntil100ns_ >= kTimelineDuration100ns)
        {
            hr = videoStream_->EndOfStream();
            if (FAILED(hr))
            {
                return hr;
            }
        }

        if (audioBufferedUntil100ns_ < targetTimestamp100ns)
        {
            hr = _FeedOneAudioFrameLocked();
            if (FAILED(hr))
            {
                return hr;
            }
        }

        if (audioBufferedUntil100ns_ >= kTimelineDuration100ns)
        {
            hr = audioStream_->EndOfStream();
            if (FAILED(hr))
            {
                return hr;
            }
        }
    }

    return S_OK;
}

HRESULT Player::_FeedOneVideoFrameLocked()
{
    simplestreamer::EncodedFrame videoFrame;
    HRESULT hr = videoProvider_->GetNextFrame(&videoFrame);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = videoStream_->AppendBuffer(
        videoFrame.data.data(),
        static_cast<UINT32>(videoFrame.data.size()),
        videoFrame.timestamp,
        videoFrame.duration,
        videoFrame.isKeyFrame ? TRUE : FALSE);
    if (FAILED(hr))
    {
        return hr;
    }

    videoBufferedUntil100ns_ = videoFrame.timestamp + videoFrame.duration;
    return S_OK;
}

HRESULT Player::_FeedOneAudioFrameLocked()
{
    simplestreamer::EncodedFrame audioFrame;
    HRESULT hr = audioProvider_->GetNextFrame(&audioFrame);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = audioStream_->AppendBuffer(
        audioFrame.data.data(),
        static_cast<UINT32>(audioFrame.data.size()),
        audioFrame.timestamp,
        audioFrame.duration,
        audioFrame.isKeyFrame ? TRUE : FALSE);
    if (FAILED(hr))
    {
        return hr;
    }

    audioBufferedUntil100ns_ = audioFrame.timestamp + audioFrame.duration;
    return S_OK;
}
