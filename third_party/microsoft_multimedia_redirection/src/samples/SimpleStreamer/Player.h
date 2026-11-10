// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
#pragma once

#include <atomic>
#include <condition_variable>
#include <mutex>
#include <thread>

#include <wrl\client.h>
#include <wrl\implements.h>

#include <Mmr_h.h>

#include "FrameProvider.h"

constexpr LONGLONG kOneSecond100ns = 10'000'000LL;
constexpr int kTimelineDurationMs = 60'000;
constexpr LONGLONG kTimelineDuration100ns = 60LL * kOneSecond100ns;

void TraceFailure(const wchar_t* context, HRESULT hr);

class PlayerEvents
{
public:
    virtual void OnTimeUpdate(LONGLONG time100ns) = 0;
};

class SimpleMmrClient final
    : public Microsoft::WRL::RuntimeClass<Microsoft::WRL::RuntimeClassFlags<Microsoft::WRL::ClassicCom>, IMMRClient>
{
public:
    STDMETHODIMP OnSessionCreated(IMMRSession* session) override
    {
        {
            std::lock_guard<std::mutex> lock(mutex_);
            session_ = session;
            result_ = S_OK;
            completed_ = true;
        }
        cv_.notify_all();
        return S_OK;
    }

    STDMETHODIMP OnSessionCreationFailed(HRESULT errorCode) override
    {
        {
            std::lock_guard<std::mutex> lock(mutex_);
            session_.Reset();
            result_ = errorCode;
            completed_ = true;
        }
        cv_.notify_all();
        return S_OK;
    }

    STDMETHODIMP OnRemoteClientDisconnected() override
    {
        return S_OK;
    }

    STDMETHODIMP OnRemoteClientConnected() override
    {
        return S_OK;
    }

    STDMETHODIMP OnAsyncError(HRESULT errorCode) override
    {
        TraceFailure(L"IMMRClient::OnAsyncError", errorCode);
        return S_OK;
    }

    HRESULT WaitForSession(DWORD timeoutMs, Microsoft::WRL::ComPtr<IMMRSession>* session)
    {
        if (session == nullptr)
        {
            return E_POINTER;
        }

        std::unique_lock<std::mutex> lock(mutex_);
        const bool signaled = cv_.wait_for(
            lock,
            std::chrono::milliseconds(timeoutMs),
            [this]() { return completed_; });
        if (!signaled)
        {
            return HRESULT_FROM_WIN32(WAIT_TIMEOUT);
        }

        *session = session_;
        return result_;
    }

private:
    std::mutex mutex_;
    std::condition_variable cv_;
    Microsoft::WRL::ComPtr<IMMRSession> session_;
    HRESULT result_ = E_PENDING;
    bool completed_ = false;
};

class SimpleMmrEventHandler final
    : public Microsoft::WRL::RuntimeClass<Microsoft::WRL::RuntimeClassFlags<Microsoft::WRL::ClassicCom>, IMMREventHandler>
{
public:
    SimpleMmrEventHandler(PlayerEvents* callback)
        : callback_(callback)
    {}

    STDMETHODIMP OnRemotingInitialized(BOOL succeeded) override
    {
        {
            std::lock_guard<std::mutex> lock(mutex_);
            remotingInitialized_ = true;
            remotingSucceeded_ = (succeeded != FALSE);
        }
        cv_.notify_all();
        return S_OK;
    }

    STDMETHODIMP OnBufferingStateChanged(BOOL buffering) override
    {
        // If the client has started buffering, this is a good time
        // to check if enough data has been provided to the MMR streams.
        UNREFERENCED_PARAMETER(buffering);
        return S_OK;
    }

    STDMETHODIMP OnError(LPCWSTR errorMessage, HRESULT errorCode) override
    {
        // This is a fatal error.  For apps that support local playback, this
        // would be a trigger to fall back to local playback
        UNREFERENCED_PARAMETER(errorMessage);
        TraceFailure(L"IMMREventHandler::OnError", errorCode);
        return S_OK;
    }

    STDMETHODIMP OnTimeUpdate(LONGLONG currentTime) override
    {
        // The client sends this periodically as playback progresses.  Like
        // the HTML5 video element timeupdate event, the cadence of this
        // event can vary based upon system load but it should occur at least
        // once a second.  This can be a good time to check if new data
        // needs to be provided to streams and update timeline-based UI.
        {
            std::lock_guard<std::mutex> lock(mutex_);
            lastTimeUpdate_ = currentTime;
        }
        callback_->OnTimeUpdate(currentTime);
        return S_OK;
    }

    STDMETHODIMP OnEnded() override
    {
        // The client has finished playback (all streams have played all
        // data on the client up until the EndOfStream call).
        return S_OK;
    }

    STDMETHODIMP OnSeeked() override
    {
        // The client has completed a seek.  It is a good practice to wait
        // for this completion before starting a new seek, or the app and
        // the client may become desynchronized about the current playback
        // position.  The app must always provide data for the current time
        // on the client.
        return S_OK;
    }

    bool WaitForRemotingInitialized(DWORD timeoutMs)
    {
        // Once this event has been received, remote streams have been set
        // up and the app can start feeding data to the streams.
        std::unique_lock<std::mutex> lock(mutex_);
        return cv_.wait_for(
            lock,
            std::chrono::milliseconds(timeoutMs),
            [this]() { return remotingInitialized_; });
    }

    bool RemotingSucceeded() const
    {
        std::lock_guard<std::mutex> lock(mutex_);
        return remotingSucceeded_;
    }

    LONGLONG GetLastTimeUpdate() const
    {
        std::lock_guard<std::mutex> lock(mutex_);
        return lastTimeUpdate_;
    }

    void Seek(LONGLONG targetTime)
    {
        std::lock_guard<std::mutex> lock(mutex_);
        lastTimeUpdate_ = targetTime;
    }

private:
    PlayerEvents* callback_ = nullptr;
    mutable std::mutex mutex_;
    std::condition_variable cv_;
    bool remotingInitialized_ = false;
    bool remotingSucceeded_ = false;
    LONGLONG lastTimeUpdate_ = 0;
};

class Player
{
public:
    HRESULT Initialize(PlayerEvents* callback);
    void Shutdown();

    HRESULT Play();
    HRESULT Pause();
    HRESULT Seek(LONGLONG targetTime);
    LONGLONG GetCurrentTime() const;
    bool IsPlaying() const;

    HRESULT SetVideoRect(
        HWND hwnd,
        UINT32 x,
        UINT32 y,
        UINT32 width,
        UINT32 height);
    HRESULT GetVideoReplacementImage(
        _Out_writes_bytes_(stride* height * 4) BYTE* imageData, 
        _In_ UINT32 width, 
        _In_ UINT32 height, 
        _In_ UINT32 stride);

protected:
    HRESULT _WaitForFeedInitialization(DWORD timeoutMs);
    void _FeedThreadMain();
    void _CompleteFeedThreadInit(HRESULT hr);
    HRESULT _InitializeStreaming();
    HRESULT _FeedStreamsToTargetLocked(LONGLONG targetTimestamp100ns);
    HRESULT _FeedOneVideoFrameLocked();
    HRESULT _FeedOneAudioFrameLocked();

private:
    std::condition_variable feedInitializationCv_;
    bool feedInitialized_ = false;
    HRESULT feedInitializationResult_ = E_PENDING;
    std::thread feedThread_;
    std::atomic<bool> stopFeedThread_ = false;
    mutable std::mutex playbackMutex_;

    bool playing_ = false;

    std::unique_ptr<simplestreamer::FrameProvider> audioProvider_;
    std::unique_ptr<simplestreamer::FrameProvider> videoProvider_;

    LONGLONG currentTimestamp100ns_ = 0;
    LONGLONG videoBufferedUntil100ns_ = 0;
    LONGLONG audioBufferedUntil100ns_ = 0;

    PlayerEvents* callback_ = nullptr;
    Microsoft::WRL::ComPtr<SimpleMmrClient> client_;
    Microsoft::WRL::ComPtr<SimpleMmrEventHandler> eventHandler_;
    Microsoft::WRL::ComPtr<IMultimediaRedirector> redirector_;
    Microsoft::WRL::ComPtr<IMMRSession> session_;
    Microsoft::WRL::ComPtr<IMMRStream> audioStream_;
    Microsoft::WRL::ComPtr<IMMRStream> videoStream_;
};