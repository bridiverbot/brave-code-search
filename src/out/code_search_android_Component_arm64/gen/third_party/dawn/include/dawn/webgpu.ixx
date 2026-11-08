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

module;
#include "webgpu/webgpu_cpp.h"
export module wgpu;

export namespace wgpu {
// constants
using wgpu::kArrayLayerCountUndefined;
using wgpu::kCopyStrideUndefined;
using wgpu::kDepthClearValueUndefined;
using wgpu::kDepthSliceUndefined;
using wgpu::kInvalidBinding;
using wgpu::kLimitU32Undefined;
using wgpu::kLimitU64Undefined;
using wgpu::kMipLevelCountUndefined;
using wgpu::kQuerySetIndexUndefined;
using wgpu::kStrlen;
using wgpu::kWholeMapSize;
using wgpu::kWholeSize;

// enums
using wgpu::AdapterType;
using wgpu::AddressMode;
using wgpu::AlphaMode;
using wgpu::BackendType;
using wgpu::BlendFactor;
using wgpu::BlendOperation;
using wgpu::BufferBindingType;
using wgpu::BufferMapState;
using wgpu::CallbackMode;
using wgpu::CallbackStatus;
using wgpu::ColorSpacePrimariesDawn;
using wgpu::ColorSpaceTransferDawn;
using wgpu::ColorSpaceYCbCrMatrixDawn;
using wgpu::ColorSpaceYCbCrRangeDawn;
using wgpu::CompareFunction;
using wgpu::CompilationInfoRequestStatus;
using wgpu::CompilationMessageType;
using wgpu::ComponentSwizzle;
using wgpu::CompositeAlphaMode;
using wgpu::CreatePipelineAsyncStatus;
using wgpu::CullMode;
using wgpu::DeviceLostReason;
using wgpu::ErrorFilter;
using wgpu::ErrorType;
using wgpu::ExternalTextureRotation;
using wgpu::FeatureLevel;
using wgpu::FeatureName;
using wgpu::FilterMode;
using wgpu::FrontFace;
using wgpu::IndexFormat;
using wgpu::InstanceFeatureName;
using wgpu::LoadOp;
using wgpu::LoggingType;
using wgpu::MapAsyncStatus;
using wgpu::MipmapFilterMode;
using wgpu::PopErrorScopeStatus;
using wgpu::PowerPreference;
using wgpu::PredefinedColorSpace;
using wgpu::PresentMode;
using wgpu::PrimitiveTopology;
using wgpu::QueryType;
using wgpu::QueueWorkDoneStatus;
using wgpu::RequestAdapterStatus;
using wgpu::RequestDeviceStatus;
using wgpu::SamplerBindingType;
using wgpu::SharedFenceType;
using wgpu::Status;
using wgpu::StencilOperation;
using wgpu::StorageTextureAccess;
using wgpu::StoreOp;
using wgpu::SType;
using wgpu::SubgroupMatrixComponentType;
using wgpu::SurfaceGetCurrentTextureStatus;
using wgpu::TexelBufferAccess;
using wgpu::TextureAspect;
using wgpu::TextureDimension;
using wgpu::TextureFormat;
using wgpu::TextureSampleType;
using wgpu::TextureViewDimension;
using wgpu::ToneMappingMode;
using wgpu::VertexFormat;
using wgpu::VertexStepMode;
using wgpu::WaitStatus;
using wgpu::WGSLLanguageFeatureName;

// bitmasks
using wgpu::BufferUsage;
using wgpu::ColorWriteMask;
using wgpu::HeapProperty;
using wgpu::MapMode;
using wgpu::ShaderStage;
using wgpu::TextureUsage;

WGPU_IMPORT_BITMASK_OPERATORS

using wgpu::IsWGPUBitmask;
using wgpu::LowerBitmask;
using wgpu::BoolConvertible;

// callbacks
using wgpu::BufferMapCallback;
using wgpu::CompilationInfoCallback;
using wgpu::CreateComputePipelineAsyncCallback;
using wgpu::CreateRenderPipelineAsyncCallback;
using wgpu::DawnLoadCacheDataCallback;
using wgpu::DawnStoreCacheDataCallback;
using wgpu::DeviceLostCallback;
using wgpu::DisposeCallback;
using wgpu::LoggingCallback;
using wgpu::PopErrorScopeCallback;
using wgpu::QueueWorkDoneCallback;
using wgpu::RequestAdapterCallback;
using wgpu::RequestDeviceCallback;
using wgpu::UncapturedErrorCallback;

// classes
using wgpu::Adapter;
using wgpu::BindGroup;
using wgpu::BindGroupLayout;
using wgpu::Buffer;
using wgpu::CommandBuffer;
using wgpu::CommandEncoder;
using wgpu::ComputePipeline;
using wgpu::Device;
using wgpu::ExternalTexture;
using wgpu::Instance;
using wgpu::PipelineLayout;
using wgpu::QuerySet;
using wgpu::Queue;
using wgpu::RenderBundle;
using wgpu::RenderPipeline;
using wgpu::ResourceTable;
using wgpu::Sampler;
using wgpu::ShaderModule;
using wgpu::SharedBufferMemory;
using wgpu::SharedFence;
using wgpu::SharedTextureMemory;
using wgpu::Surface;
using wgpu::TexelBufferView;
using wgpu::Texture;
using wgpu::TextureView;
using wgpu::ComputePassEncoder;
using wgpu::RenderBundleEncoder;
using wgpu::RenderPassEncoder;

// structs
using wgpu::StringView;
using wgpu::AdapterPropertiesD3D;
using wgpu::AdapterPropertiesDrm;
using wgpu::AdapterPropertiesVk;
using wgpu::AdapterPropertiesWGPU;
using wgpu::BindingResource;
using wgpu::BlendComponent;
using wgpu::BufferBindingLayout;
using wgpu::BufferHostMappedPointer;
using wgpu::Color;
using wgpu::ColorSpaceDawn;
using wgpu::ColorTargetStateExpandResolveTextureDawn;
using wgpu::CommandBufferDescriptor;
using wgpu::CompatibilityModeLimits;
using wgpu::ConstantEntry;
using wgpu::CopyTextureForBrowserOptions;
using wgpu::DawnAdapterPropertiesPowerPreference;
using wgpu::DawnBufferDescriptorErrorInfoFromWireClient;
using wgpu::DawnCacheDeviceDescriptor;
using wgpu::DawnCompilationMessageUtf16;
using wgpu::DawnConsumeAdapterDescriptor;
using wgpu::DawnDeviceAllocatorControl;
using wgpu::DawnDrmFormatProperties;
using wgpu::DawnEncoderInternalUsageDescriptor;
using wgpu::DawnFakeBufferOOMForTesting;
using wgpu::DawnFakeDeviceInitializeErrorForTesting;
using wgpu::DawnHostMappedPointerLimits;
using wgpu::DawnInjectedInvalidSType;
using wgpu::DawnRenderPassSampleCount;
using wgpu::DawnShaderModuleSPIRVOptionsDescriptor;
using wgpu::DawnShaderSourceSPIRV;
using wgpu::DawnTexelCopyBufferRowAlignmentLimits;
using wgpu::DawnTextureInternalUsageDescriptor;
using wgpu::DawnTogglesDescriptor;
using wgpu::DawnWGSLBlocklist;
using wgpu::DawnWireWGSLControl;
using wgpu::Extent2D;
using wgpu::Extent3D;
using wgpu::ExternalTextureBindingEntry;
using wgpu::ExternalTextureBindingLayout;
using wgpu::Future;
using wgpu::InstanceLimits;
using wgpu::MemoryHeapInfo;
using wgpu::MultisampleState;
using wgpu::Origin2D;
using wgpu::Origin3D;
using wgpu::PassTimestampWrites;
using wgpu::PipelineLayoutResourceTable;
using wgpu::PipelineLayoutStorageAttachment;
using wgpu::PrimitiveState;
using wgpu::QuerySetDescriptor;
using wgpu::QueueDescriptor;
using wgpu::RenderBundleDescriptor;
using wgpu::RenderBundleEncoderResourceTable;
using wgpu::RenderPassDepthStencilAttachment;
using wgpu::RenderPassDescriptorResolveRect;
using wgpu::RenderPassMaxDrawCount;
using wgpu::RequestAdapterWebGPUBackendOptions;
using wgpu::RequestAdapterWebXROptions;
using wgpu::ResourceTableDescriptor;
using wgpu::SamplerBindingLayout;
using wgpu::ShaderModuleCompilationOptions;
using wgpu::ShaderSourceSPIRV;
using wgpu::ShaderSourceWGSL;
using wgpu::SharedBufferMemoryBeginAccessDescriptor;
using wgpu::SharedBufferMemoryEndAccessState;
using wgpu::SharedBufferMemoryFromWindowsHandleDescriptor;
using wgpu::SharedBufferMemoryHostPointerDescriptor;
using wgpu::SharedBufferMemoryProperties;
using wgpu::SharedFenceDXGISharedHandleDescriptor;
using wgpu::SharedFenceDXGISharedHandleExportInfo;
using wgpu::SharedFenceEGLSyncDescriptor;
using wgpu::SharedFenceEGLSyncExportInfo;
using wgpu::SharedFenceMTLSharedEventDescriptor;
using wgpu::SharedFenceMTLSharedEventExportInfo;
using wgpu::SharedFenceSyncFDDescriptor;
using wgpu::SharedFenceSyncFDExportInfo;
using wgpu::SharedFenceVkSemaphoreOpaqueFDDescriptor;
using wgpu::SharedFenceVkSemaphoreOpaqueFDExportInfo;
using wgpu::SharedFenceVkSemaphoreZirconHandleDescriptor;
using wgpu::SharedFenceVkSemaphoreZirconHandleExportInfo;
using wgpu::SharedTextureMemoryAHardwareBufferDescriptor;
using wgpu::SharedTextureMemoryD3D11BeginState;
using wgpu::SharedTextureMemoryD3DSwapchainBeginState;
using wgpu::SharedTextureMemoryDmaBufPlane;
using wgpu::SharedTextureMemoryDXGISharedHandleDescriptor;
using wgpu::SharedTextureMemoryEGLImageDescriptor;
using wgpu::SharedTextureMemoryIOSurfaceDescriptor;
using wgpu::SharedTextureMemoryOpaqueFDDescriptor;
using wgpu::SharedTextureMemoryVkDedicatedAllocationDescriptor;
using wgpu::SharedTextureMemoryVkImageLayoutBeginState;
using wgpu::SharedTextureMemoryVkImageLayoutEndState;
using wgpu::SharedTextureMemoryZirconHandleDescriptor;
using wgpu::StaticSamplerBindingLayout;
using wgpu::StencilFaceState;
using wgpu::StorageTextureBindingLayout;
using wgpu::SubgroupMatrixConfig;
using wgpu::SupportedFeatures;
using wgpu::SupportedInstanceFeatures;
using wgpu::SupportedWGSLLanguageFeatures;
using wgpu::SurfaceCapabilities;
using wgpu::SurfaceColorManagement;
using wgpu::SurfaceConfiguration;
using wgpu::SurfaceDescriptorFromWindowsCoreWindow;
using wgpu::SurfaceDescriptorFromWindowsUWPSwapChainPanel;
using wgpu::SurfaceDescriptorFromWindowsWinUISwapChainPanel;
using wgpu::SurfaceSourceAndroidNativeWindow;
using wgpu::SurfaceSourceMetalLayer;
using wgpu::SurfaceSourceWaylandSurface;
using wgpu::SurfaceSourceWindowsHWND;
using wgpu::SurfaceSourceXCBWindow;
using wgpu::SurfaceSourceXlibWindow;
using wgpu::SurfaceTexture;
using wgpu::TexelBufferBindingEntry;
using wgpu::TexelBufferBindingLayout;
using wgpu::TexelBufferViewDescriptor;
using wgpu::TexelCopyBufferLayout;
using wgpu::TextureBindingLayout;
using wgpu::TextureBindingViewDimension;
using wgpu::TextureComponentSwizzle;
using wgpu::VertexAttribute;
using wgpu::YCbCrVkDescriptor;
using wgpu::AdapterPropertiesMemoryHeaps;
using wgpu::AdapterPropertiesSubgroupMatrixConfigs;
using wgpu::AHardwareBufferProperties;
using wgpu::BindGroupEntry;
using wgpu::BindGroupLayoutEntry;
using wgpu::BlendState;
using wgpu::BufferDescriptor;
using wgpu::CommandEncoderDescriptor;
using wgpu::CompilationMessage;
using wgpu::ComputePassDescriptor;
using wgpu::ComputeState;
using wgpu::DawnDrmFormatCapabilities;
using wgpu::DepthStencilState;
using wgpu::ExternalTextureDescriptor;
using wgpu::FutureWaitInfo;
using wgpu::ImageCopyExternalTexture;
using wgpu::InstanceDescriptor;
using wgpu::Limits;
using wgpu::PipelineLayoutPixelLocalStorage;
using wgpu::RenderBundleEncoderDescriptor;
using wgpu::RenderPassColorAttachment;
using wgpu::RenderPassRenderAreaRect;
using wgpu::RenderPassStorageAttachment;
using wgpu::RequestAdapterOptions;
using wgpu::SamplerDescriptor;
using wgpu::ShaderModuleDescriptor;
using wgpu::SharedBufferMemoryDescriptor;
using wgpu::SharedFenceDescriptor;
using wgpu::SharedFenceExportInfo;
using wgpu::SharedTextureMemoryAHardwareBufferProperties;
using wgpu::SharedTextureMemoryBeginAccessDescriptor;
using wgpu::SharedTextureMemoryDmaBufDescriptor;
using wgpu::SharedTextureMemoryMetalEndAccessState;
using wgpu::SurfaceDescriptor;
using wgpu::TexelCopyBufferInfo;
using wgpu::TexelCopyTextureInfo;
using wgpu::TextureComponentSwizzleDescriptor;
using wgpu::TextureDescriptor;
using wgpu::VertexBufferLayout;
using wgpu::AdapterInfo;
using wgpu::BindGroupDescriptor;
using wgpu::BindGroupLayoutDescriptor;
using wgpu::ColorTargetState;
using wgpu::CompilationInfo;
using wgpu::ComputePipelineDescriptor;
using wgpu::DawnFormatCapabilities;
using wgpu::DeviceDescriptor;
using wgpu::PipelineLayoutDescriptor;
using wgpu::RenderPassPixelLocalStorage;
using wgpu::SharedTextureMemoryDescriptor;
using wgpu::SharedTextureMemoryEndAccessState;
using wgpu::SharedTextureMemoryProperties;
using wgpu::TextureViewDescriptor;
using wgpu::VertexState;
using wgpu::FragmentState;
using wgpu::RenderPassDescriptor;
using wgpu::RenderPipelineDescriptor;

// Free Functions
using wgpu::CreateInstance;
using wgpu::GetInstanceFeatures;
using wgpu::GetInstanceLimits;
using wgpu::HasInstanceFeature;
using wgpu::GetProcAddress;

}
