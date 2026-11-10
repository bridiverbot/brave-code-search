// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
#include "FrameProvider.h"

#include <assert.h>

#include <algorithm>
#include <cmath>
#include <cstring>

#include <codecapi.h>
#include <mfapi.h>
#include <mferror.h>
#include <mfidl.h>
#include <mftransform.h>

namespace simplestreamer
{
namespace
{
HRESULT CopyEncodedOutput(IMFSample* sample, std::queue<EncodedFrame>* encodedFrames)
{
    if (sample == nullptr || encodedFrames == nullptr)
    {
        return E_INVALIDARG;
    }

    Microsoft::WRL::ComPtr<IMFMediaBuffer> buffer;
    HRESULT hr = sample->ConvertToContiguousBuffer(&buffer);
    if (FAILED(hr))
    {
        return hr;
    }

    BYTE* data = nullptr;
    DWORD currentLength = 0;
    hr = buffer->Lock(&data, nullptr, &currentLength);
    if (FAILED(hr))
    {
        return hr;
    }

    EncodedFrame frame = {};
    frame.data.assign(data, data + currentLength);
    buffer->Unlock();

    hr = sample->GetSampleTime(&frame.timestamp);
    if (FAILED(hr))
    {
        frame.timestamp = 0;
    }

    hr = sample->GetSampleDuration(&frame.duration);
    if (FAILED(hr))
    {
        frame.duration = 0;
    }

    UINT32 cleanPoint = FALSE;
    hr = sample->GetUINT32(MFSampleExtension_CleanPoint, &cleanPoint);
    frame.isKeyFrame = SUCCEEDED(hr) && cleanPoint != FALSE;

    encodedFrames->push(std::move(frame));
    return S_OK;
}
} // namespace

Encoder::~Encoder() = default;

HRESULT Encoder::CreateEncoder(REFGUID category, REFGUID majorType, REFGUID subtype)
{
    MFT_REGISTER_TYPE_INFO outputType = { majorType, subtype };
    IMFActivate** activates = nullptr;
    UINT32 activateCount = 0;

    HRESULT hr = MFTEnumEx(
        category,
        MFT_ENUM_FLAG_SYNCMFT | MFT_ENUM_FLAG_SORTANDFILTER,
        nullptr,
        &outputType,
        &activates,
        &activateCount);
    if (FAILED(hr))
    {
        return hr;
    }

    if (activateCount == 0)
    {
        CoTaskMemFree(activates);
        return MF_E_TOPO_CODEC_NOT_FOUND;
    }

    hr = activates[0]->ActivateObject(IID_PPV_ARGS(&encoder_));
    for (UINT32 i = 0; i < activateCount; ++i)
    {
        activates[i]->Release();
    }
    CoTaskMemFree(activates);

    return hr;
}

HRESULT Encoder::Encode(IMFSample* inputSample)
{
    if (encoder_ == nullptr || inputSample == nullptr)
    {
        return E_POINTER;
    }

    HRESULT hr = encoder_->ProcessInput(0, inputSample, 0);
    if (FAILED(hr))
    {
        return hr;
    }

    MFT_OUTPUT_STREAM_INFO streamInfo = {};
    hr = encoder_->GetOutputStreamInfo(0, &streamInfo);
    if (FAILED(hr))
    {
        return hr;
    }

    const bool encoderProvidesSamples =
        (streamInfo.dwFlags & MFT_OUTPUT_STREAM_PROVIDES_SAMPLES) != 0;

    while (true)
    {
        MFT_OUTPUT_DATA_BUFFER outputData = {};
        Microsoft::WRL::ComPtr<IMFSample> outputSample;

        if (!encoderProvidesSamples)
        {
            DWORD outputBufferSize = streamInfo.cbSize > 0 ? streamInfo.cbSize : (1024 * 1024);
            Microsoft::WRL::ComPtr<IMFMediaBuffer> outputBuffer;
            hr = MFCreateMemoryBuffer(outputBufferSize, &outputBuffer);
            if (FAILED(hr))
            {
                return hr;
            }

            hr = MFCreateSample(&outputSample);
            if (FAILED(hr))
            {
                return hr;
            }

            hr = outputSample->AddBuffer(outputBuffer.Get());
            if (FAILED(hr))
            {
                return hr;
            }

            outputData.pSample = outputSample.Get();
        }

        DWORD processStatus = 0;
        hr = encoder_->ProcessOutput(0, 1, &outputData, &processStatus);
        if (hr == MF_E_TRANSFORM_NEED_MORE_INPUT)
        {
            if (outputData.pEvents != nullptr)
            {
                outputData.pEvents->Release();
            }
            return S_OK;
        }

        if (FAILED(hr))
        {
            if (outputData.pEvents != nullptr)
            {
                outputData.pEvents->Release();
            }
            if (encoderProvidesSamples && outputData.pSample != nullptr)
            {
                outputData.pSample->Release();
            }
            return hr;
        }

        IMFSample* result = encoderProvidesSamples ? outputData.pSample : outputSample.Get();
        if (result != nullptr)
        {
            hr = CopyEncodedOutput(result, &encodedFrames_);
            if (FAILED(hr))
            {
                if (outputData.pEvents != nullptr)
                {
                    outputData.pEvents->Release();
                }
                if (encoderProvidesSamples && outputData.pSample != nullptr)
                {
                    outputData.pSample->Release();
                }
                return hr;
            }
        }

        if (encoderProvidesSamples && outputData.pSample != nullptr)
        {
            outputData.pSample->Release();
        }
        if (outputData.pEvents != nullptr)
        {
            outputData.pEvents->Release();
        }
    }
}

bool Encoder::HasOutput() const
{
    return !encodedFrames_.empty();
}

HRESULT Encoder::GetNextOutput(EncodedFrame* output)
{
    if (output == nullptr)
    {
        return E_POINTER;
    }

    if (encodedFrames_.empty())
    {
        return MF_E_TRANSFORM_NEED_MORE_INPUT;
    }

    *output = std::move(encodedFrames_.front());
    encodedFrames_.pop();
    return S_OK;
}

std::vector<uint8_t> Encoder::GetUserData() const
{
    if (encoder_ == nullptr)
    {
        return {};
    }

    Microsoft::WRL::ComPtr<IMFMediaType> outputType;
    HRESULT hr = encoder_->GetOutputCurrentType(0, &outputType);
    if (FAILED(hr))
    {
        return {};
    }

    UINT32 blobSize = 0;
    hr = outputType->GetBlobSize(MF_MT_USER_DATA, &blobSize);
    if (FAILED(hr) || blobSize == 0)
    {
        return {};
    }

    std::vector<uint8_t> userData(blobSize);
    hr = outputType->GetBlob(MF_MT_USER_DATA, userData.data(), blobSize, nullptr);
    if (FAILED(hr))
    {
        return {};
    }

    return userData;
}

void Encoder::Flush()
{
    while (!encodedFrames_.empty())
    {
        encodedFrames_.pop();
    }

    if (encoder_ != nullptr)
    {
        (void)encoder_->ProcessMessage(MFT_MESSAGE_COMMAND_FLUSH, 0);
    }
}

HRESULT H264Encoder::Initialize(UINT32 width, UINT32 height, UINT32 fps)
{
    HRESULT hr = CreateEncoder(MFT_CATEGORY_VIDEO_ENCODER, MFMediaType_Video, MFVideoFormat_H264);
    if (FAILED(hr))
    {
        return hr;
    }

    Microsoft::WRL::ComPtr<IMFMediaType> outputType;
    hr = MFCreateMediaType(&outputType);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = outputType->SetGUID(MF_MT_MAJOR_TYPE, MFMediaType_Video);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = outputType->SetGUID(MF_MT_SUBTYPE, MFVideoFormat_H264);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = MFSetAttributeSize(outputType.Get(), MF_MT_FRAME_SIZE, width, height);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = MFSetAttributeRatio(outputType.Get(), MF_MT_FRAME_RATE, fps, 1);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = outputType->SetUINT32(MF_MT_AVG_BITRATE, 1'500'000);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = outputType->SetUINT32(MF_MT_INTERLACE_MODE, MFVideoInterlace_Progressive);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = outputType->SetUINT32(MF_MT_MPEG2_PROFILE, eAVEncH264VProfile_Base);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = encoder_->SetOutputType(0, outputType.Get(), 0);
    if (FAILED(hr))
    {
        return hr;
    }

    Microsoft::WRL::ComPtr<IMFMediaType> inputType;
    hr = MFCreateMediaType(&inputType);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = inputType->SetGUID(MF_MT_MAJOR_TYPE, MFMediaType_Video);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = inputType->SetGUID(MF_MT_SUBTYPE, MFVideoFormat_NV12);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = MFSetAttributeSize(inputType.Get(), MF_MT_FRAME_SIZE, width, height);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = MFSetAttributeRatio(inputType.Get(), MF_MT_FRAME_RATE, fps, 1);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = inputType->SetUINT32(MF_MT_INTERLACE_MODE, MFVideoInterlace_Progressive);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = encoder_->SetInputType(0, inputType.Get(), 0);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = encoder_->ProcessMessage(MFT_MESSAGE_NOTIFY_BEGIN_STREAMING, 0);
    if (FAILED(hr))
    {
        return hr;
    }

    return encoder_->ProcessMessage(MFT_MESSAGE_NOTIFY_START_OF_STREAM, 0);
}

HRESULT AACEncoder::Initialize(UINT32 sampleRate, UINT32 channels, UINT32 bitsPerSample)
{
    HRESULT hr = CreateEncoder(MFT_CATEGORY_AUDIO_ENCODER, MFMediaType_Audio, MFAudioFormat_AAC);
    if (FAILED(hr))
    {
        return hr;
    }

    Microsoft::WRL::ComPtr<IMFMediaType> outputType;
    for (DWORD index = 0;; ++index)
    {
        Microsoft::WRL::ComPtr<IMFMediaType> candidate;
        hr = encoder_->GetOutputAvailableType(0, index, &candidate);
        if (hr == MF_E_NO_MORE_TYPES)
        {
            break;
        }
        if (FAILED(hr))
        {
            return hr;
        }

        UINT32 outputSampleRate = 0;
        UINT32 outputChannels = 0;
        (void)candidate->GetUINT32(MF_MT_AUDIO_SAMPLES_PER_SECOND, &outputSampleRate);
        (void)candidate->GetUINT32(MF_MT_AUDIO_NUM_CHANNELS, &outputChannels);
        if (outputSampleRate == sampleRate && outputChannels == channels)
        {
            outputType = candidate;
            break;
        }
    }

    if (outputType == nullptr)
    {
        hr = encoder_->GetOutputAvailableType(0, 0, &outputType);
        if (FAILED(hr))
        {
            return hr;
        }
    }

    hr = encoder_->SetOutputType(0, outputType.Get(), 0);
    if (FAILED(hr))
    {
        return hr;
    }

    Microsoft::WRL::ComPtr<IMFMediaType> inputType;
    hr = MFCreateMediaType(&inputType);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = inputType->SetGUID(MF_MT_MAJOR_TYPE, MFMediaType_Audio);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = inputType->SetGUID(MF_MT_SUBTYPE, MFAudioFormat_PCM);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = inputType->SetUINT32(MF_MT_AUDIO_SAMPLES_PER_SECOND, sampleRate);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = inputType->SetUINT32(MF_MT_AUDIO_NUM_CHANNELS, channels);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = inputType->SetUINT32(MF_MT_AUDIO_BITS_PER_SAMPLE, bitsPerSample);
    if (FAILED(hr))
    {
        return hr;
    }

    const UINT32 blockAlign = channels * bitsPerSample / 8;
    hr = inputType->SetUINT32(MF_MT_AUDIO_BLOCK_ALIGNMENT, blockAlign);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = inputType->SetUINT32(MF_MT_AUDIO_AVG_BYTES_PER_SECOND, sampleRate * blockAlign);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = encoder_->SetInputType(0, inputType.Get(), 0);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = encoder_->ProcessMessage(MFT_MESSAGE_NOTIFY_BEGIN_STREAMING, 0);
    if (FAILED(hr))
    {
        return hr;
    }

    return encoder_->ProcessMessage(MFT_MESSAGE_NOTIFY_START_OF_STREAM, 0);
}

VideoFrameSource::VideoFrameSource(UINT32 width, UINT32 height)
    : width_(width), height_(height)
{
}

HRESULT VideoFrameSource::GetSample(LONGLONG timestamp, LONGLONG duration, IMFSample** sample)
{
    if (sample == nullptr)
    {
        return E_POINTER;
    }
    *sample = nullptr;

    const UINT32 yPlaneSize = width_ * height_;
    const UINT32 uvPlaneSize = yPlaneSize / 2;
    std::vector<BYTE> frameData(yPlaneSize + uvPlaneSize, 0);

    const BYTE lumaPhase = static_cast<BYTE>((timestamp / 100000) & 0xFF);
    for (UINT32 y = 0; y < height_; ++y)
    {
        for (UINT32 x = 0; x < width_; ++x)
        {
            frameData[y * width_ + x] = static_cast<BYTE>((x + y + lumaPhase) & 0xFF);
        }
    }
    std::fill(frameData.begin() + yPlaneSize, frameData.end(), static_cast<BYTE>(128));

    Microsoft::WRL::ComPtr<IMFMediaBuffer> mediaBuffer;
    HRESULT hr = MFCreateMemoryBuffer(static_cast<DWORD>(frameData.size()), &mediaBuffer);
    if (FAILED(hr))
    {
        return hr;
    }

    BYTE* destination = nullptr;
    hr = mediaBuffer->Lock(&destination, nullptr, nullptr);
    if (FAILED(hr))
    {
        return hr;
    }

    std::memcpy(destination, frameData.data(), frameData.size());
    mediaBuffer->Unlock();

    hr = mediaBuffer->SetCurrentLength(static_cast<DWORD>(frameData.size()));
    if (FAILED(hr))
    {
        return hr;
    }

    Microsoft::WRL::ComPtr<IMFSample> mediaSample;
    hr = MFCreateSample(&mediaSample);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = mediaSample->AddBuffer(mediaBuffer.Get());
    if (FAILED(hr))
    {
        return hr;
    }

    hr = mediaSample->SetSampleTime(timestamp);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = mediaSample->SetSampleDuration(duration);
    if (FAILED(hr))
    {
        return hr;
    }

    *sample = mediaSample.Detach();
    return S_OK;
}

AudioFrameSource::AudioFrameSource(UINT32 sampleRate, UINT32 channels, UINT32 bitsPerSample)
    : sampleRate_(sampleRate), channels_(channels), bitsPerSample_(bitsPerSample)
{
    constexpr double kTwoPi = 6.28318530717958647692;
    constexpr double kFrequencyHz = 440.0;
    phaseIncrement_ = sampleRate_ > 0 ? (kTwoPi * kFrequencyHz / static_cast<double>(sampleRate_)) : 0.0;
}

HRESULT AudioFrameSource::GetSample(LONGLONG timestamp, LONGLONG duration, IMFSample** sample)
{
    if (sample == nullptr)
    {
        return E_POINTER;
    }
    *sample = nullptr;

    const UINT32 bytesPerSample = bitsPerSample_ / 8;
    const UINT32 blockAlign = channels_ * bytesPerSample;
    if (bytesPerSample == 0 || blockAlign == 0 || sampleRate_ == 0)
    {
        return E_INVALIDARG;
    }

    const UINT32 frameCount = static_cast<UINT32>(
        (duration * static_cast<LONGLONG>(sampleRate_) + 5'000'000LL) / 10'000'000LL);
    const UINT32 totalBytes = frameCount * blockAlign;
    std::vector<BYTE> pcm(totalBytes, 0);

    constexpr double kTwoPi = 6.28318530717958647692;
    constexpr double kAmplitude = 0.25;

    for (UINT32 frame = 0; frame < frameCount; ++frame)
    {
        const double sampleValue = std::sin(phase_) * kAmplitude;
        phase_ += phaseIncrement_;
        if (phase_ >= kTwoPi)
        {
            phase_ -= kTwoPi;
        }

        for (UINT32 channel = 0; channel < channels_; ++channel)
        {
            BYTE* destination = pcm.data() + (frame * blockAlign) + (channel * bytesPerSample);
            if (bitsPerSample_ == 16)
            {
                const short value = static_cast<short>(sampleValue * 32767.0);
                std::memcpy(destination, &value, sizeof(value));
            }
            else if (bitsPerSample_ == 8)
            {
                const unsigned char value = static_cast<unsigned char>((sampleValue * 127.0) + 128.0);
                std::memcpy(destination, &value, sizeof(value));
            }
        }
    }

    Microsoft::WRL::ComPtr<IMFMediaBuffer> mediaBuffer;
    HRESULT hr = MFCreateMemoryBuffer(totalBytes, &mediaBuffer);
    if (FAILED(hr))
    {
        return hr;
    }

    BYTE* destination = nullptr;
    hr = mediaBuffer->Lock(&destination, nullptr, nullptr);
    if (FAILED(hr))
    {
        return hr;
    }

    std::memcpy(destination, pcm.data(), pcm.size());
    mediaBuffer->Unlock();

    hr = mediaBuffer->SetCurrentLength(totalBytes);
    if (FAILED(hr))
    {
        return hr;
    }

    Microsoft::WRL::ComPtr<IMFSample> mediaSample;
    hr = MFCreateSample(&mediaSample);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = mediaSample->AddBuffer(mediaBuffer.Get());
    if (FAILED(hr))
    {
        return hr;
    }

    hr = mediaSample->SetSampleTime(timestamp);
    if (FAILED(hr))
    {
        return hr;
    }

    hr = mediaSample->SetSampleDuration(duration);
    if (FAILED(hr))
    {
        return hr;
    }

    *sample = mediaSample.Detach();
    return S_OK;
}

FrameProvider::FrameProvider(std::unique_ptr<Encoder> encoder, std::unique_ptr<FrameSource> source, LONGLONG frameDuration)
    : encoder_(std::move(encoder)), source_(std::move(source)), frameDuration_(frameDuration)
{
}

HRESULT FrameProvider::GetNextFrame(EncodedFrame* frame)
{
    if (frame == nullptr)
    {
        return E_POINTER;
    }

    if (encoder_ == nullptr || source_ == nullptr)
    {
        return E_UNEXPECTED;
    }

    while (true)
    {
        Microsoft::WRL::ComPtr<IMFSample> sample;
        HRESULT hr = source_->GetSample(timestamp_, frameDuration_, &sample);
        if (FAILED(hr))
        {
            return hr;
        }
        timestamp_ += frameDuration_;

        hr = encoder_->Encode(sample.Get());
        if (FAILED(hr))
        {
            return hr;
        }

        if (!encoder_->HasOutput())
        {
            continue;
        }

        return encoder_->GetNextOutput(frame);
    }
}

void FrameProvider::Seek(LONGLONG timestamp)
{
    timestamp_ = std::max<LONGLONG>(0, timestamp);
    if (encoder_ != nullptr)
    {
        encoder_->Flush();
    }
}
} // namespace simplestreamer
