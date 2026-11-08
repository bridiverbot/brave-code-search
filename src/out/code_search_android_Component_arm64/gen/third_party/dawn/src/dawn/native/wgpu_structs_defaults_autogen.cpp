// Copyright 2026 The Dawn & Tint Authors
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this
//    list of conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice,
//    this list of conditions and the following disclaimer in the documentation
//    and/or other materials provided with the distribution.
//
// 3. Neither the name of the copyright holder nor the names of its
//    contributors may be used to endorse or promote products derived from
//    this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
// DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

#include "dawn/native/wgpu_structs_defaults_autogen.h"

namespace dawn::native {

BlendComponent WithTrivialFrontendDefaults(const BlendComponent& in) {
    BlendComponent copy;
    copy.operation = (in.operation == wgpu::BlendOperation::Undefined)
        ? wgpu::BlendOperation::Add
        : in.operation;
    copy.srcFactor = (in.srcFactor == wgpu::BlendFactor::Undefined)
        ? wgpu::BlendFactor::One
        : in.srcFactor;
    copy.dstFactor = (in.dstFactor == wgpu::BlendFactor::Undefined)
        ? wgpu::BlendFactor::Zero
        : in.dstFactor;
    return copy;
}

BufferBindingLayout WithTrivialFrontendDefaults(const BufferBindingLayout& in) {
    BufferBindingLayout copy;
    copy.nextInChain = in.nextInChain;
    copy.type = (in.type == wgpu::BufferBindingType::Undefined)
        ? wgpu::BufferBindingType::Uniform
        : in.type;
    copy.hasDynamicOffset = in.hasDynamicOffset;
    copy.minBindingSize = in.minBindingSize;
    return copy;
}

PrimitiveState WithTrivialFrontendDefaults(const PrimitiveState& in) {
    PrimitiveState copy;
    copy.nextInChain = in.nextInChain;
    copy.topology = (in.topology == wgpu::PrimitiveTopology::Undefined)
        ? wgpu::PrimitiveTopology::TriangleList
        : in.topology;
    copy.stripIndexFormat = in.stripIndexFormat;
    copy.frontFace = (in.frontFace == wgpu::FrontFace::Undefined)
        ? wgpu::FrontFace::CCW
        : in.frontFace;
    copy.cullMode = (in.cullMode == wgpu::CullMode::Undefined)
        ? wgpu::CullMode::None
        : in.cullMode;
    copy.unclippedDepth = in.unclippedDepth;
    return copy;
}

SamplerBindingLayout WithTrivialFrontendDefaults(const SamplerBindingLayout& in) {
    SamplerBindingLayout copy;
    copy.nextInChain = in.nextInChain;
    copy.type = (in.type == wgpu::SamplerBindingType::Undefined)
        ? wgpu::SamplerBindingType::Filtering
        : in.type;
    return copy;
}

StencilFaceState WithTrivialFrontendDefaults(const StencilFaceState& in) {
    StencilFaceState copy;
    copy.compare = (in.compare == wgpu::CompareFunction::Undefined)
        ? wgpu::CompareFunction::Always
        : in.compare;
    copy.failOp = (in.failOp == wgpu::StencilOperation::Undefined)
        ? wgpu::StencilOperation::Keep
        : in.failOp;
    copy.depthFailOp = (in.depthFailOp == wgpu::StencilOperation::Undefined)
        ? wgpu::StencilOperation::Keep
        : in.depthFailOp;
    copy.passOp = (in.passOp == wgpu::StencilOperation::Undefined)
        ? wgpu::StencilOperation::Keep
        : in.passOp;
    return copy;
}

StorageTextureBindingLayout WithTrivialFrontendDefaults(const StorageTextureBindingLayout& in) {
    StorageTextureBindingLayout copy;
    copy.nextInChain = in.nextInChain;
    copy.access = (in.access == wgpu::StorageTextureAccess::Undefined)
        ? wgpu::StorageTextureAccess::WriteOnly
        : in.access;
    copy.format = in.format;
    copy.viewDimension = (in.viewDimension == wgpu::TextureViewDimension::Undefined)
        ? wgpu::TextureViewDimension::e2D
        : in.viewDimension;
    return copy;
}

SurfaceConfiguration WithTrivialFrontendDefaults(const SurfaceConfiguration& in) {
    SurfaceConfiguration copy;
    copy.nextInChain = in.nextInChain;
    copy.device = in.device;
    copy.format = in.format;
    copy.usage = in.usage;
    copy.width = in.width;
    copy.height = in.height;
    copy.viewFormats = in.viewFormats;
    copy.alphaMode = in.alphaMode;
    copy.presentMode = (in.presentMode == wgpu::PresentMode::Undefined)
        ? wgpu::PresentMode::Fifo
        : in.presentMode;
    return copy;
}

TexelBufferBindingLayout WithTrivialFrontendDefaults(const TexelBufferBindingLayout& in) {
    TexelBufferBindingLayout copy;
    copy.nextInChain = in.nextInChain;
    copy.sType = in.sType;
    copy.access = (in.access == wgpu::TexelBufferAccess::Undefined)
        ? wgpu::TexelBufferAccess::ReadWrite
        : in.access;
    copy.format = in.format;
    return copy;
}

TextureBindingLayout WithTrivialFrontendDefaults(const TextureBindingLayout& in) {
    TextureBindingLayout copy;
    copy.nextInChain = in.nextInChain;
    copy.sampleType = (in.sampleType == wgpu::TextureSampleType::Undefined)
        ? wgpu::TextureSampleType::Float
        : in.sampleType;
    copy.viewDimension = (in.viewDimension == wgpu::TextureViewDimension::Undefined)
        ? wgpu::TextureViewDimension::e2D
        : in.viewDimension;
    copy.multisampled = in.multisampled;
    return copy;
}

TextureComponentSwizzle WithTrivialFrontendDefaults(const TextureComponentSwizzle& in) {
    TextureComponentSwizzle copy;
    copy.r = (in.r == wgpu::ComponentSwizzle::Undefined)
        ? wgpu::ComponentSwizzle::R
        : in.r;
    copy.g = (in.g == wgpu::ComponentSwizzle::Undefined)
        ? wgpu::ComponentSwizzle::G
        : in.g;
    copy.b = (in.b == wgpu::ComponentSwizzle::Undefined)
        ? wgpu::ComponentSwizzle::B
        : in.b;
    copy.a = (in.a == wgpu::ComponentSwizzle::Undefined)
        ? wgpu::ComponentSwizzle::A
        : in.a;
    return copy;
}

YCbCrVkDescriptor WithTrivialFrontendDefaults(const YCbCrVkDescriptor& in) {
    YCbCrVkDescriptor copy;
    copy.nextInChain = in.nextInChain;
    copy.sType = in.sType;
    copy.vkFormat = in.vkFormat;
    copy.vkYCbCrModel = in.vkYCbCrModel;
    copy.vkYCbCrRange = in.vkYCbCrRange;
    copy.vkComponentSwizzleRed = in.vkComponentSwizzleRed;
    copy.vkComponentSwizzleGreen = in.vkComponentSwizzleGreen;
    copy.vkComponentSwizzleBlue = in.vkComponentSwizzleBlue;
    copy.vkComponentSwizzleAlpha = in.vkComponentSwizzleAlpha;
    copy.vkXChromaOffset = in.vkXChromaOffset;
    copy.vkYChromaOffset = in.vkYChromaOffset;
    copy.vkChromaFilter = (in.vkChromaFilter == wgpu::FilterMode::Undefined)
        ? wgpu::FilterMode::Nearest
        : in.vkChromaFilter;
    copy.forceExplicitReconstruction = in.forceExplicitReconstruction;
    copy.externalFormat = in.externalFormat;
    return copy;
}

AHardwareBufferProperties WithTrivialFrontendDefaults(const AHardwareBufferProperties& in) {
    AHardwareBufferProperties copy;
    copy.yCbCrInfo = WithTrivialFrontendDefaults(in.yCbCrInfo);
    return copy;
}

BindGroupLayoutEntry WithTrivialFrontendDefaults(const BindGroupLayoutEntry& in) {
    BindGroupLayoutEntry copy;
    copy.nextInChain = in.nextInChain;
    copy.binding = in.binding;
    copy.visibility = in.visibility;
    copy.bindingArraySize = in.bindingArraySize;
    copy.buffer = WithTrivialFrontendDefaults(in.buffer);
    copy.sampler = WithTrivialFrontendDefaults(in.sampler);
    copy.texture = WithTrivialFrontendDefaults(in.texture);
    copy.storageTexture = WithTrivialFrontendDefaults(in.storageTexture);
    return copy;
}

BlendState WithTrivialFrontendDefaults(const BlendState& in) {
    BlendState copy;
    copy.color = WithTrivialFrontendDefaults(in.color);
    copy.alpha = WithTrivialFrontendDefaults(in.alpha);
    return copy;
}

DepthStencilState WithTrivialFrontendDefaults(const DepthStencilState& in) {
    DepthStencilState copy;
    copy.nextInChain = in.nextInChain;
    copy.format = in.format;
    copy.depthWriteEnabled = in.depthWriteEnabled;
    copy.depthCompare = in.depthCompare;
    copy.stencilFront = WithTrivialFrontendDefaults(in.stencilFront);
    copy.stencilBack = WithTrivialFrontendDefaults(in.stencilBack);
    copy.stencilReadMask = in.stencilReadMask;
    copy.stencilWriteMask = in.stencilWriteMask;
    copy.depthBias = in.depthBias;
    copy.depthBiasSlopeScale = in.depthBiasSlopeScale;
    copy.depthBiasClamp = in.depthBiasClamp;
    return copy;
}

RequestAdapterOptions WithTrivialFrontendDefaults(const RequestAdapterOptions& in) {
    RequestAdapterOptions copy;
    copy.nextInChain = in.nextInChain;
    copy.featureLevel = (in.featureLevel == wgpu::FeatureLevel::Undefined)
        ? wgpu::FeatureLevel::Core
        : in.featureLevel;
    copy.powerPreference = in.powerPreference;
    copy.forceFallbackAdapter = in.forceFallbackAdapter;
    copy.backendType = in.backendType;
    copy.compatibleSurface = in.compatibleSurface;
    return copy;
}

SamplerDescriptor WithTrivialFrontendDefaults(const SamplerDescriptor& in) {
    SamplerDescriptor copy;
    copy.nextInChain = in.nextInChain;
    copy.label = in.label;
    copy.addressModeU = (in.addressModeU == wgpu::AddressMode::Undefined)
        ? wgpu::AddressMode::ClampToEdge
        : in.addressModeU;
    copy.addressModeV = (in.addressModeV == wgpu::AddressMode::Undefined)
        ? wgpu::AddressMode::ClampToEdge
        : in.addressModeV;
    copy.addressModeW = (in.addressModeW == wgpu::AddressMode::Undefined)
        ? wgpu::AddressMode::ClampToEdge
        : in.addressModeW;
    copy.magFilter = (in.magFilter == wgpu::FilterMode::Undefined)
        ? wgpu::FilterMode::Nearest
        : in.magFilter;
    copy.minFilter = (in.minFilter == wgpu::FilterMode::Undefined)
        ? wgpu::FilterMode::Nearest
        : in.minFilter;
    copy.mipmapFilter = (in.mipmapFilter == wgpu::MipmapFilterMode::Undefined)
        ? wgpu::MipmapFilterMode::Nearest
        : in.mipmapFilter;
    copy.lodMinClamp = in.lodMinClamp;
    copy.lodMaxClamp = in.lodMaxClamp;
    copy.compare = in.compare;
    copy.maxAnisotropy = in.maxAnisotropy;
    return copy;
}

SharedTextureMemoryAHardwareBufferProperties WithTrivialFrontendDefaults(const SharedTextureMemoryAHardwareBufferProperties& in) {
    SharedTextureMemoryAHardwareBufferProperties copy;
    copy.nextInChain = in.nextInChain;
    copy.sType = in.sType;
    copy.yCbCrInfo = WithTrivialFrontendDefaults(in.yCbCrInfo);
    return copy;
}

TexelCopyTextureInfo WithTrivialFrontendDefaults(const TexelCopyTextureInfo& in) {
    TexelCopyTextureInfo copy;
    copy.texture = in.texture;
    copy.mipLevel = in.mipLevel;
    copy.origin = in.origin;
    copy.aspect = (in.aspect == wgpu::TextureAspect::Undefined)
        ? wgpu::TextureAspect::All
        : in.aspect;
    return copy;
}

TextureComponentSwizzleDescriptor WithTrivialFrontendDefaults(const TextureComponentSwizzleDescriptor& in) {
    TextureComponentSwizzleDescriptor copy;
    copy.nextInChain = in.nextInChain;
    copy.sType = in.sType;
    copy.swizzle = WithTrivialFrontendDefaults(in.swizzle);
    return copy;
}

TextureDescriptor WithTrivialFrontendDefaults(const TextureDescriptor& in) {
    TextureDescriptor copy;
    copy.nextInChain = in.nextInChain;
    copy.label = in.label;
    copy.usage = in.usage;
    copy.dimension = (in.dimension == wgpu::TextureDimension::Undefined)
        ? wgpu::TextureDimension::e2D
        : in.dimension;
    copy.size = in.size;
    copy.format = in.format;
    copy.mipLevelCount = in.mipLevelCount;
    copy.sampleCount = in.sampleCount;
    copy.viewFormats = in.viewFormats;
    return copy;
}

TextureViewDescriptor WithTrivialFrontendDefaults(const TextureViewDescriptor& in) {
    TextureViewDescriptor copy;
    copy.nextInChain = in.nextInChain;
    copy.label = in.label;
    copy.format = in.format;
    copy.dimension = in.dimension;
    copy.baseMipLevel = in.baseMipLevel;
    copy.mipLevelCount = in.mipLevelCount;
    copy.baseArrayLayer = in.baseArrayLayer;
    copy.arrayLayerCount = in.arrayLayerCount;
    copy.aspect = (in.aspect == wgpu::TextureAspect::Undefined)
        ? wgpu::TextureAspect::All
        : in.aspect;
    copy.usage = in.usage;
    return copy;
}

RenderPipelineDescriptor WithTrivialFrontendDefaults(const RenderPipelineDescriptor& in) {
    RenderPipelineDescriptor copy;
    copy.nextInChain = in.nextInChain;
    copy.label = in.label;
    copy.layout = in.layout;
    copy.vertex = in.vertex;
    copy.primitive = WithTrivialFrontendDefaults(in.primitive);
    copy.depthStencil = in.depthStencil;
    copy.multisample = in.multisample;
    copy.fragment = in.fragment;
    return copy;
}

} // namespace dawn::native
