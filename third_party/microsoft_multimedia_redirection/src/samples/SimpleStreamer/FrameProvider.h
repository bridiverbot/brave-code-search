// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
#pragma once

#include <windows.h>

#include <cstdint>
#include <memory>
#include <queue>
#include <vector>

#include <mftransform.h>
#include <wrl/client.h>

struct IMFSample;

namespace simplestreamer
{
struct EncodedFrame
{
    LONGLONG timestamp = 0;
    LONGLONG duration = 0;
    bool isKeyFrame = false;
    std::vector<uint8_t> data;
};

class Encoder
{
public:
    virtual ~Encoder();

    HRESULT CreateEncoder(REFGUID category, REFGUID majorType, REFGUID subtype);
    HRESULT Encode(IMFSample* inputSample);
    bool HasOutput() const;
    HRESULT GetNextOutput(EncodedFrame* output);
    std::vector<uint8_t> GetUserData() const;
    void Flush();

protected:
    Microsoft::WRL::ComPtr<IMFTransform> encoder_;
    std::queue<EncodedFrame> encodedFrames_;
};

class H264Encoder final : public Encoder
{
public:
    HRESULT Initialize(UINT32 width, UINT32 height, UINT32 fps);
};

class AACEncoder final : public Encoder
{
public:
    HRESULT Initialize(UINT32 sampleRate, UINT32 channels, UINT32 bitsPerSample);
};

class FrameSource
{
public:
    virtual ~FrameSource() = default;
    virtual HRESULT GetSample(LONGLONG timestamp, LONGLONG duration, IMFSample** sample) = 0;
};

class VideoFrameSource final : public FrameSource
{
public:
    VideoFrameSource(UINT32 width, UINT32 height);
    HRESULT GetSample(LONGLONG timestamp, LONGLONG duration, IMFSample** sample) override;

private:
    UINT32 width_;
    UINT32 height_;
};

class AudioFrameSource final : public FrameSource
{
public:
    AudioFrameSource(UINT32 sampleRate, UINT32 channels, UINT32 bitsPerSample);
    HRESULT GetSample(LONGLONG timestamp, LONGLONG duration, IMFSample** sample) override;

private:
    UINT32 sampleRate_;
    UINT32 channels_;
    UINT32 bitsPerSample_;
    double phase_ = 0.0;
    double phaseIncrement_ = 0.0;
};

class FrameProvider
{
public:
    FrameProvider(std::unique_ptr<Encoder> encoder, std::unique_ptr<FrameSource> source, LONGLONG frameDuration);

    HRESULT GetNextFrame(EncodedFrame* frame);
    void Seek(LONGLONG timestamp);

private:
    std::unique_ptr<Encoder> encoder_;
    std::unique_ptr<FrameSource> source_;
    LONGLONG frameDuration_;
    LONGLONG timestamp_ = 0;
};
} // namespace simplestreamer
