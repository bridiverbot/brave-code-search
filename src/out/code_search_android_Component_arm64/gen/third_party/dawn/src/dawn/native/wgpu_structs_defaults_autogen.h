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

#ifndef DAWNNATIVE_WGPU_STRUCTS_DEFAULTS_H_
#define DAWNNATIVE_WGPU_STRUCTS_DEFAULTS_H_

#include "dawn/native/wgpu_structs_autogen.h"

namespace dawn::native {

// These functions make a copy of the struct, then, for any enum members with trivial defaulting
// (where something like "Undefined" is replaced with a default), applies all of the defaults for
// the struct, and recursively its by-value substructs (but NOT by-pointer substructs since they
// are const*). It must be called in an appropriate place in Dawn.
[[nodiscard]] BlendComponent WithTrivialFrontendDefaults(const BlendComponent& in);
[[nodiscard]] BufferBindingLayout WithTrivialFrontendDefaults(const BufferBindingLayout& in);
[[nodiscard]] PrimitiveState WithTrivialFrontendDefaults(const PrimitiveState& in);
[[nodiscard]] SamplerBindingLayout WithTrivialFrontendDefaults(const SamplerBindingLayout& in);
[[nodiscard]] StencilFaceState WithTrivialFrontendDefaults(const StencilFaceState& in);
[[nodiscard]] StorageTextureBindingLayout WithTrivialFrontendDefaults(const StorageTextureBindingLayout& in);
[[nodiscard]] SurfaceConfiguration WithTrivialFrontendDefaults(const SurfaceConfiguration& in);
[[nodiscard]] TexelBufferBindingLayout WithTrivialFrontendDefaults(const TexelBufferBindingLayout& in);
[[nodiscard]] TextureBindingLayout WithTrivialFrontendDefaults(const TextureBindingLayout& in);
[[nodiscard]] TextureComponentSwizzle WithTrivialFrontendDefaults(const TextureComponentSwizzle& in);
[[nodiscard]] YCbCrVkDescriptor WithTrivialFrontendDefaults(const YCbCrVkDescriptor& in);
[[nodiscard]] AHardwareBufferProperties WithTrivialFrontendDefaults(const AHardwareBufferProperties& in);
[[nodiscard]] BindGroupLayoutEntry WithTrivialFrontendDefaults(const BindGroupLayoutEntry& in);
[[nodiscard]] BlendState WithTrivialFrontendDefaults(const BlendState& in);
[[nodiscard]] DepthStencilState WithTrivialFrontendDefaults(const DepthStencilState& in);
[[nodiscard]] RequestAdapterOptions WithTrivialFrontendDefaults(const RequestAdapterOptions& in);
[[nodiscard]] SamplerDescriptor WithTrivialFrontendDefaults(const SamplerDescriptor& in);
[[nodiscard]] SharedTextureMemoryAHardwareBufferProperties WithTrivialFrontendDefaults(const SharedTextureMemoryAHardwareBufferProperties& in);
[[nodiscard]] TexelCopyTextureInfo WithTrivialFrontendDefaults(const TexelCopyTextureInfo& in);
[[nodiscard]] TextureComponentSwizzleDescriptor WithTrivialFrontendDefaults(const TextureComponentSwizzleDescriptor& in);
[[nodiscard]] TextureDescriptor WithTrivialFrontendDefaults(const TextureDescriptor& in);
[[nodiscard]] TextureViewDescriptor WithTrivialFrontendDefaults(const TextureViewDescriptor& in);
[[nodiscard]] RenderPipelineDescriptor WithTrivialFrontendDefaults(const RenderPipelineDescriptor& in);

} // namespace dawn::native

#endif  // DAWNNATIVE_WGPU_STRUCTS_DEFAULTS_H_
