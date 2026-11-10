
#ifndef BACKEND_VALIDATIONUTILS_H_
#define BACKEND_VALIDATIONUTILS_H_

#include "dawn/webgpu_cpp.h"

#include "src/dawn/native/Error.h"

namespace dawn::native {

    // Helper functions to check the value of enums and bitmasks
    MaybeValError ValidateAdapterType(wgpu::AdapterType value);
    MaybeValError ValidateAddressMode(wgpu::AddressMode value);
    MaybeValError ValidateAlphaMode(wgpu::AlphaMode value);
    MaybeValError ValidateBackendType(wgpu::BackendType value);
    MaybeValError ValidateBlendFactor(wgpu::BlendFactor value);
    MaybeValError ValidateBlendOperation(wgpu::BlendOperation value);
    MaybeValError ValidateBufferBindingType(wgpu::BufferBindingType value);
    MaybeValError ValidateBufferMapState(wgpu::BufferMapState value);
    MaybeValError ValidateCallbackMode(wgpu::CallbackMode value);
    MaybeValError ValidateCallbackStatus(wgpu::CallbackStatus value);
    MaybeValError ValidateColorSpacePrimariesDawn(wgpu::ColorSpacePrimariesDawn value);
    MaybeValError ValidateColorSpaceTransferDawn(wgpu::ColorSpaceTransferDawn value);
    MaybeValError ValidateColorSpaceYCbCrMatrixDawn(wgpu::ColorSpaceYCbCrMatrixDawn value);
    MaybeValError ValidateColorSpaceYCbCrRangeDawn(wgpu::ColorSpaceYCbCrRangeDawn value);
    MaybeValError ValidateCompareFunction(wgpu::CompareFunction value);
    MaybeValError ValidateCompilationInfoRequestStatus(wgpu::CompilationInfoRequestStatus value);
    MaybeValError ValidateCompilationMessageType(wgpu::CompilationMessageType value);
    MaybeValError ValidateComponentSwizzle(wgpu::ComponentSwizzle value);
    MaybeValError ValidateCompositeAlphaMode(wgpu::CompositeAlphaMode value);
    MaybeValError ValidateCreatePipelineAsyncStatus(wgpu::CreatePipelineAsyncStatus value);
    MaybeValError ValidateCullMode(wgpu::CullMode value);
    MaybeValError ValidateDeviceLostReason(wgpu::DeviceLostReason value);
    MaybeValError ValidateErrorFilter(wgpu::ErrorFilter value);
    MaybeValError ValidateErrorType(wgpu::ErrorType value);
    MaybeValError ValidateExternalTextureRotation(wgpu::ExternalTextureRotation value);
    MaybeValError ValidateFeatureLevel(wgpu::FeatureLevel value);
    MaybeValError ValidateFeatureName(wgpu::FeatureName value);
    MaybeValError ValidateFilterMode(wgpu::FilterMode value);
    MaybeValError ValidateFrontFace(wgpu::FrontFace value);
    MaybeValError ValidateIndexFormat(wgpu::IndexFormat value);
    MaybeValError ValidateInstanceFeatureName(wgpu::InstanceFeatureName value);
    MaybeValError ValidateLoadOp(wgpu::LoadOp value);
    MaybeValError ValidateLoggingType(wgpu::LoggingType value);
    MaybeValError ValidateMapAsyncStatus(wgpu::MapAsyncStatus value);
    MaybeValError ValidateMipmapFilterMode(wgpu::MipmapFilterMode value);
    MaybeValError ValidateOptionalBool(wgpu::OptionalBool value);
    MaybeValError ValidatePopErrorScopeStatus(wgpu::PopErrorScopeStatus value);
    MaybeValError ValidatePowerPreference(wgpu::PowerPreference value);
    MaybeValError ValidatePredefinedColorSpace(wgpu::PredefinedColorSpace value);
    MaybeValError ValidatePresentMode(wgpu::PresentMode value);
    MaybeValError ValidatePrimitiveTopology(wgpu::PrimitiveTopology value);
    MaybeValError ValidateQueryType(wgpu::QueryType value);
    MaybeValError ValidateQueueWorkDoneStatus(wgpu::QueueWorkDoneStatus value);
    MaybeValError ValidateRequestAdapterStatus(wgpu::RequestAdapterStatus value);
    MaybeValError ValidateRequestDeviceStatus(wgpu::RequestDeviceStatus value);
    MaybeValError ValidateSamplerBindingType(wgpu::SamplerBindingType value);
    MaybeValError ValidateSharedFenceType(wgpu::SharedFenceType value);
    MaybeValError ValidateStatus(wgpu::Status value);
    MaybeValError ValidateStencilOperation(wgpu::StencilOperation value);
    MaybeValError ValidateStorageTextureAccess(wgpu::StorageTextureAccess value);
    MaybeValError ValidateStoreOp(wgpu::StoreOp value);
    MaybeValError ValidateSType(wgpu::SType value);
    MaybeValError ValidateSubgroupMatrixComponentType(wgpu::SubgroupMatrixComponentType value);
    MaybeValError ValidateSurfaceGetCurrentTextureStatus(wgpu::SurfaceGetCurrentTextureStatus value);
    MaybeValError ValidateTexelBufferAccess(wgpu::TexelBufferAccess value);
    MaybeValError ValidateTextureAspect(wgpu::TextureAspect value);
    MaybeValError ValidateTextureDimension(wgpu::TextureDimension value);
    MaybeValError ValidateTextureFormat(wgpu::TextureFormat value);
    MaybeValError ValidateTextureSampleType(wgpu::TextureSampleType value);
    MaybeValError ValidateTextureViewDimension(wgpu::TextureViewDimension value);
    MaybeValError ValidateToneMappingMode(wgpu::ToneMappingMode value);
    MaybeValError ValidateVertexFormat(wgpu::VertexFormat value);
    MaybeValError ValidateVertexStepMode(wgpu::VertexStepMode value);
    MaybeValError ValidateWaitStatus(wgpu::WaitStatus value);
    MaybeValError ValidateWGSLLanguageFeatureName(wgpu::WGSLLanguageFeatureName value);
    MaybeValError ValidateBufferUsage(wgpu::BufferUsage value);
    MaybeValError ValidateColorWriteMask(wgpu::ColorWriteMask value);
    MaybeValError ValidateHeapProperty(wgpu::HeapProperty value);
    MaybeValError ValidateMapMode(wgpu::MapMode value);
    MaybeValError ValidateShaderStage(wgpu::ShaderStage value);
    MaybeValError ValidateTextureUsage(wgpu::TextureUsage value);

} // namespace dawn::native

#endif  // BACKEND_VALIDATIONUTILS_H_
