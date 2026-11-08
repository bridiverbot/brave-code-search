
#include <algorithm>
#include <vector>

#include "absl/base/no_destructor.h"
#include "absl/container/flat_hash_map.h"
#include "src/dawn/native/dawn_platform.h"
#include "dawn/native/DawnNative.h"
#include "dawn/dawn_version.h"
#include "src/utils/numeric.h"
#include "src/utils/span.h"

#include "src/dawn/native/Adapter.h"
#include "src/dawn/native/BindGroup.h"
#include "src/dawn/native/BindGroupLayout.h"
#include "src/dawn/native/Buffer.h"
#include "src/dawn/native/CommandBuffer.h"
#include "src/dawn/native/CommandEncoder.h"
#include "src/dawn/native/ComputePipeline.h"
#include "src/dawn/native/Device.h"
#include "src/dawn/native/ExternalTexture.h"
#include "src/dawn/native/Instance.h"
#include "src/dawn/native/PipelineLayout.h"
#include "src/dawn/native/QuerySet.h"
#include "src/dawn/native/Queue.h"
#include "src/dawn/native/RenderBundle.h"
#include "src/dawn/native/RenderPipeline.h"
#include "src/dawn/native/ResourceTable.h"
#include "src/dawn/native/Sampler.h"
#include "src/dawn/native/ShaderModule.h"
#include "src/dawn/native/SharedBufferMemory.h"
#include "src/dawn/native/SharedFence.h"
#include "src/dawn/native/SharedTextureMemory.h"
#include "src/dawn/native/Surface.h"
#include "src/dawn/native/TexelBufferView.h"
#include "src/dawn/native/Texture.h"
#include "src/dawn/native/ComputePassEncoder.h"
#include "src/dawn/native/RenderBundleEncoder.h"
#include "src/dawn/native/RenderPassEncoder.h"


namespace dawn::native {

    WGPUDevice NativeAdapterCreateDevice(WGPUAdapter cSelf, WGPUDeviceDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateDevice(descriptor_);
return ToAPI(result);

    }

    void NativeAdapterGetFeatures(WGPUAdapter cSelf, WGPUSupportedFeatures * features) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto features_ = FromAPI(features);

self->APIGetFeatures(features_);

    }

    WGPUStatus NativeAdapterGetFormatCapabilities(WGPUAdapter cSelf, WGPUTextureFormat format, WGPUDawnFormatCapabilities * capabilities) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto format_ = FromAPI(format);
auto capabilities_ = FromAPI(capabilities);

auto result =self->APIGetFormatCapabilities(format_, capabilities_);
return ToAPI(result);

    }

    WGPUStatus NativeAdapterGetInfo(WGPUAdapter cSelf, WGPUAdapterInfo * info) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto info_ = FromAPI(info);

auto result =self->APIGetInfo(info_);
return ToAPI(result);

    }

    WGPUInstance NativeAdapterGetInstance(WGPUAdapter cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
auto result =self->APIGetInstance();
return ToAPI(result);

    }

    WGPUStatus NativeAdapterGetLimits(WGPUAdapter cSelf, WGPULimits * limits) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto limits_ = FromAPI(limits);

auto result =self->APIGetLimits(limits_);
return ToAPI(result);

    }

    WGPUBool NativeAdapterHasFeature(WGPUAdapter cSelf, WGPUFeatureName feature) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto feature_ = FromAPI(feature);

auto result =self->APIHasFeature(feature_);
return ToAPI(result);

    }

    WGPUFuture NativeAdapterRequestDevice(WGPUAdapter cSelf, WGPUDeviceDescriptor const * descriptor, WGPURequestDeviceCallbackInfo callbackInfo) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto descriptor_ = FromAPI(descriptor);
auto callbackInfo_ = callbackInfo;

auto result =self->APIRequestDevice(descriptor_, callbackInfo_);
return ToAPI(result);

    }

    void NativeAdapterAddRef(WGPUAdapter cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeAdapterRelease(WGPUAdapter cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    void NativeAdapterInfoFreeMembers(WGPUAdapterInfo cSelf) {
        
        
APIAdapterInfoFreeMembers(cSelf);

    }

    void NativeAdapterPropertiesMemoryHeapsFreeMembers(WGPUAdapterPropertiesMemoryHeaps cSelf) {
        
        
APIAdapterPropertiesMemoryHeapsFreeMembers(cSelf);

    }

    void NativeAdapterPropertiesSubgroupMatrixConfigsFreeMembers(WGPUAdapterPropertiesSubgroupMatrixConfigs cSelf) {
        
        
APIAdapterPropertiesSubgroupMatrixConfigsFreeMembers(cSelf);

    }

    void NativeBindGroupSetLabel(WGPUBindGroup cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeBindGroupAddRef(WGPUBindGroup cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeBindGroupRelease(WGPUBindGroup cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    void NativeBindGroupLayoutSetLabel(WGPUBindGroupLayout cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeBindGroupLayoutAddRef(WGPUBindGroupLayout cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeBindGroupLayoutRelease(WGPUBindGroupLayout cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    WGPUTexelBufferView NativeBufferCreateTexelView(WGPUBuffer cSelf, WGPUTexelBufferViewDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateTexelView(descriptor_);
return ToAPI(result);

    }

    void NativeBufferDestroy(WGPUBuffer cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIDestroy();

    }

    void const * NativeBufferGetConstMappedRange(WGPUBuffer cSelf, size_t offset, size_t size) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto offset_ = FromAPI(offset);
auto size_ = FromAPI(size);

auto result =self->APIGetConstMappedRange(offset_, size_);
return ToAPI(result);

    }

    void * NativeBufferGetMappedRange(WGPUBuffer cSelf, size_t offset, size_t size) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto offset_ = FromAPI(offset);
auto size_ = FromAPI(size);

auto result =self->APIGetMappedRange(offset_, size_);
return ToAPI(result);

    }

    WGPUBufferMapState NativeBufferGetMapState(WGPUBuffer cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
auto result =self->APIGetMapState();
return ToAPI(result);

    }

    uint64_t NativeBufferGetSize(WGPUBuffer cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
auto result =self->APIGetSize();
return ToAPI(result);

    }

    WGPUBufferUsage NativeBufferGetUsage(WGPUBuffer cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
auto result =self->APIGetUsage();
return ToAPI(result);

    }

    WGPUFuture NativeBufferMapAsync(WGPUBuffer cSelf, WGPUMapMode mode, size_t offset, size_t size, WGPUBufferMapCallbackInfo callbackInfo) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto mode_ = static_cast<wgpu::MapMode>(mode);
auto offset_ = FromAPI(offset);
auto size_ = FromAPI(size);
auto callbackInfo_ = callbackInfo;

auto result =self->APIMapAsync(mode_, offset_, size_, callbackInfo_);
return ToAPI(result);

    }

    WGPUStatus NativeBufferReadMappedRange(WGPUBuffer cSelf, size_t offset, void * data, size_t size) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto offset_ = FromAPI(offset);
// SAFETY: The webgpu.h user is required to pass valid ranges of objects.
auto data_ = DAWN_UNSAFE_BUFFERS(dawn::ityp::span<size_t, std::byte, dawn::detail::DynamicExtent<size_t>>(FromAPI(data), dawn::checked_cast<size_t>(size)));

auto result =self->APIReadMappedRange(offset_, data_);
return ToAPI(result);

    }

    void NativeBufferSetLabel(WGPUBuffer cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeBufferUnmap(WGPUBuffer cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIUnmap();

    }

    WGPUStatus NativeBufferWriteMappedRange(WGPUBuffer cSelf, size_t offset, void const * data, size_t size) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto offset_ = FromAPI(offset);
// SAFETY: The webgpu.h user is required to pass valid ranges of objects.
auto data_ = DAWN_UNSAFE_BUFFERS(dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>>(FromAPI(data), dawn::checked_cast<size_t>(size)));

auto result =self->APIWriteMappedRange(offset_, data_);
return ToAPI(result);

    }

    void NativeBufferAddRef(WGPUBuffer cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeBufferRelease(WGPUBuffer cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    void NativeCommandBufferSetLabel(WGPUCommandBuffer cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeCommandBufferAddRef(WGPUCommandBuffer cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeCommandBufferRelease(WGPUCommandBuffer cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    WGPUComputePassEncoder NativeCommandEncoderBeginComputePass(WGPUCommandEncoder cSelf, WGPUComputePassDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APIBeginComputePass(descriptor_);
return ToAPI(result);

    }

    WGPURenderPassEncoder NativeCommandEncoderBeginRenderPass(WGPUCommandEncoder cSelf, WGPURenderPassDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APIBeginRenderPass(descriptor_);
return ToAPI(result);

    }

    void NativeCommandEncoderClearBuffer(WGPUCommandEncoder cSelf, WGPUBuffer buffer, uint64_t offset, uint64_t size) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto buffer_ = FromAPI(buffer);
auto offset_ = FromAPI(offset);
auto size_ = FromAPI(size);

self->APIClearBuffer(buffer_, offset_, size_);

    }

    void NativeCommandEncoderCopyBufferToBuffer(WGPUCommandEncoder cSelf, WGPUBuffer source, uint64_t sourceOffset, WGPUBuffer destination, uint64_t destinationOffset, uint64_t size) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto source_ = FromAPI(source);
auto sourceOffset_ = FromAPI(sourceOffset);
auto destination_ = FromAPI(destination);
auto destinationOffset_ = FromAPI(destinationOffset);
auto size_ = FromAPI(size);

self->APICopyBufferToBuffer(source_, sourceOffset_, destination_, destinationOffset_, size_);

    }

    void NativeCommandEncoderCopyBufferToTexture(WGPUCommandEncoder cSelf, WGPUTexelCopyBufferInfo const * source, WGPUTexelCopyTextureInfo const * destination, WGPUExtent3D const * copySize) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto source_ = FromAPI(source);
auto destination_ = FromAPI(destination);
auto copySize_ = FromAPI(copySize);

self->APICopyBufferToTexture(source_, destination_, copySize_);

    }

    void NativeCommandEncoderCopyTextureToBuffer(WGPUCommandEncoder cSelf, WGPUTexelCopyTextureInfo const * source, WGPUTexelCopyBufferInfo const * destination, WGPUExtent3D const * copySize) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto source_ = FromAPI(source);
auto destination_ = FromAPI(destination);
auto copySize_ = FromAPI(copySize);

self->APICopyTextureToBuffer(source_, destination_, copySize_);

    }

    void NativeCommandEncoderCopyTextureToTexture(WGPUCommandEncoder cSelf, WGPUTexelCopyTextureInfo const * source, WGPUTexelCopyTextureInfo const * destination, WGPUExtent3D const * copySize) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto source_ = FromAPI(source);
auto destination_ = FromAPI(destination);
auto copySize_ = FromAPI(copySize);

self->APICopyTextureToTexture(source_, destination_, copySize_);

    }

    WGPUCommandBuffer NativeCommandEncoderFinish(WGPUCommandEncoder cSelf, WGPUCommandBufferDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APIFinish(descriptor_);
return ToAPI(result);

    }

    void NativeCommandEncoderInjectValidationError(WGPUCommandEncoder cSelf, WGPUStringView message) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto message_ = FromAPI(message);

self->APIInjectValidationError(message_);

    }

    void NativeCommandEncoderInsertDebugMarker(WGPUCommandEncoder cSelf, WGPUStringView markerLabel) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto markerLabel_ = FromAPI(markerLabel);

self->APIInsertDebugMarker(markerLabel_);

    }

    void NativeCommandEncoderPopDebugGroup(WGPUCommandEncoder cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIPopDebugGroup();

    }

    void NativeCommandEncoderPushDebugGroup(WGPUCommandEncoder cSelf, WGPUStringView groupLabel) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto groupLabel_ = FromAPI(groupLabel);

self->APIPushDebugGroup(groupLabel_);

    }

    void NativeCommandEncoderResolveQuerySet(WGPUCommandEncoder cSelf, WGPUQuerySet querySet, uint32_t firstQuery, uint32_t queryCount, WGPUBuffer destination, uint64_t destinationOffset) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto querySet_ = FromAPI(querySet);
auto firstQuery_ = FromAPI(firstQuery);
auto queryCount_ = FromAPI(queryCount);
auto destination_ = FromAPI(destination);
auto destinationOffset_ = FromAPI(destinationOffset);

self->APIResolveQuerySet(querySet_, firstQuery_, queryCount_, destination_, destinationOffset_);

    }

    void NativeCommandEncoderSetLabel(WGPUCommandEncoder cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeCommandEncoderWriteBuffer(WGPUCommandEncoder cSelf, WGPUBuffer buffer, uint64_t bufferOffset, void const * data, size_t size) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto buffer_ = FromAPI(buffer);
auto bufferOffset_ = FromAPI(bufferOffset);
// SAFETY: The webgpu.h user is required to pass valid ranges of objects.
auto data_ = DAWN_UNSAFE_BUFFERS(dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>>(FromAPI(data), dawn::checked_cast<size_t>(size)));

self->APIWriteBuffer(buffer_, bufferOffset_, data_);

    }

    void NativeCommandEncoderWriteTimestamp(WGPUCommandEncoder cSelf, WGPUQuerySet querySet, uint32_t queryIndex) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto querySet_ = FromAPI(querySet);
auto queryIndex_ = FromAPI(queryIndex);

self->APIWriteTimestamp(querySet_, queryIndex_);

    }

    void NativeCommandEncoderAddRef(WGPUCommandEncoder cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeCommandEncoderRelease(WGPUCommandEncoder cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    void NativeComputePassEncoderDispatchWorkgroups(WGPUComputePassEncoder cSelf, uint32_t workgroupCountX, uint32_t workgroupCountY, uint32_t workgroupCountZ) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto workgroupCountX_ = FromAPI(workgroupCountX);
auto workgroupCountY_ = FromAPI(workgroupCountY);
auto workgroupCountZ_ = FromAPI(workgroupCountZ);

self->APIDispatchWorkgroups(workgroupCountX_, workgroupCountY_, workgroupCountZ_);

    }

    void NativeComputePassEncoderDispatchWorkgroupsIndirect(WGPUComputePassEncoder cSelf, WGPUBuffer indirectBuffer, uint64_t indirectOffset) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto indirectBuffer_ = FromAPI(indirectBuffer);
auto indirectOffset_ = FromAPI(indirectOffset);

self->APIDispatchWorkgroupsIndirect(indirectBuffer_, indirectOffset_);

    }

    void NativeComputePassEncoderEnd(WGPUComputePassEncoder cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIEnd();

    }

    void NativeComputePassEncoderInsertDebugMarker(WGPUComputePassEncoder cSelf, WGPUStringView markerLabel) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto markerLabel_ = FromAPI(markerLabel);

self->APIInsertDebugMarker(markerLabel_);

    }

    void NativeComputePassEncoderPopDebugGroup(WGPUComputePassEncoder cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIPopDebugGroup();

    }

    void NativeComputePassEncoderPushDebugGroup(WGPUComputePassEncoder cSelf, WGPUStringView groupLabel) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto groupLabel_ = FromAPI(groupLabel);

self->APIPushDebugGroup(groupLabel_);

    }

    void NativeComputePassEncoderSetBindGroup(WGPUComputePassEncoder cSelf, uint32_t groupIndex, WGPUBindGroup group, size_t dynamicOffsetCount, uint32_t const * dynamicOffsets) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto groupIndex_ = FromAPI(groupIndex);
auto group_ = FromAPI(group);
// SAFETY: The webgpu.h user is required to pass valid ranges of objects.
auto dynamicOffsets_ = DAWN_UNSAFE_BUFFERS(dawn::ityp::span<BindingIndex, uint32_t const, dawn::detail::DynamicExtent<BindingIndex>>(FromAPI(dynamicOffsets), dawn::checked_cast<BindingIndex>(dynamicOffsetCount)));

self->APISetBindGroup(groupIndex_, group_, dynamicOffsets_);

    }

    void NativeComputePassEncoderSetImmediates(WGPUComputePassEncoder cSelf, uint32_t offset, void const * data, size_t size) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto offset_ = FromAPI(offset);
// SAFETY: The webgpu.h user is required to pass valid ranges of objects.
auto data_ = DAWN_UNSAFE_BUFFERS(dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>>(FromAPI(data), dawn::checked_cast<size_t>(size)));

self->APISetImmediates(offset_, data_);

    }

    void NativeComputePassEncoderSetLabel(WGPUComputePassEncoder cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeComputePassEncoderSetPipeline(WGPUComputePassEncoder cSelf, WGPUComputePipeline pipeline) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto pipeline_ = FromAPI(pipeline);

self->APISetPipeline(pipeline_);

    }

    void NativeComputePassEncoderSetResourceTable(WGPUComputePassEncoder cSelf, WGPUResourceTable table) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto table_ = FromAPI(table);

self->APISetResourceTable(table_);

    }

    void NativeComputePassEncoderWriteTimestamp(WGPUComputePassEncoder cSelf, WGPUQuerySet querySet, uint32_t queryIndex) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto querySet_ = FromAPI(querySet);
auto queryIndex_ = FromAPI(queryIndex);

self->APIWriteTimestamp(querySet_, queryIndex_);

    }

    void NativeComputePassEncoderAddRef(WGPUComputePassEncoder cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeComputePassEncoderRelease(WGPUComputePassEncoder cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    WGPUBindGroupLayout NativeComputePipelineGetBindGroupLayout(WGPUComputePipeline cSelf, uint32_t groupIndex) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto groupIndex_ = FromAPI(groupIndex);

auto result =self->APIGetBindGroupLayout(groupIndex_);
return ToAPI(result);

    }

    void NativeComputePipelineSetLabel(WGPUComputePipeline cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeComputePipelineAddRef(WGPUComputePipeline cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeComputePipelineRelease(WGPUComputePipeline cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    void NativeDawnDrmFormatCapabilitiesFreeMembers(WGPUDawnDrmFormatCapabilities cSelf) {
        
        
APIDawnDrmFormatCapabilitiesFreeMembers(cSelf);

    }

    WGPUBindGroup NativeDeviceCreateBindGroup(WGPUDevice cSelf, WGPUBindGroupDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateBindGroup(descriptor_);
return ToAPI(result);

    }

    WGPUBindGroupLayout NativeDeviceCreateBindGroupLayout(WGPUDevice cSelf, WGPUBindGroupLayoutDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateBindGroupLayout(descriptor_);
return ToAPI(result);

    }

    WGPUBuffer NativeDeviceCreateBuffer(WGPUDevice cSelf, WGPUBufferDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateBuffer(descriptor_);
return ToAPI(result);

    }

    WGPUCommandEncoder NativeDeviceCreateCommandEncoder(WGPUDevice cSelf, WGPUCommandEncoderDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        auto device = self;
        auto deviceGuard = device->GetGuard();

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateCommandEncoder(descriptor_);
return ToAPI(result);

    }

    WGPUComputePipeline NativeDeviceCreateComputePipeline(WGPUDevice cSelf, WGPUComputePipelineDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateComputePipeline(descriptor_);
return ToAPI(result);

    }

    WGPUFuture NativeDeviceCreateComputePipelineAsync(WGPUDevice cSelf, WGPUComputePipelineDescriptor const * descriptor, WGPUCreateComputePipelineAsyncCallbackInfo callbackInfo) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto descriptor_ = FromAPI(descriptor);
auto callbackInfo_ = callbackInfo;

auto result =self->APICreateComputePipelineAsync(descriptor_, callbackInfo_);
return ToAPI(result);

    }

    WGPUBuffer NativeDeviceCreateErrorBuffer(WGPUDevice cSelf, WGPUBufferDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        auto device = self;
        auto deviceGuard = device->GetGuard();

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateErrorBuffer(descriptor_);
return ToAPI(result);

    }

    WGPUComputePipeline NativeDeviceCreateErrorComputePipeline(WGPUDevice cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        auto device = self;
        auto deviceGuard = device->GetGuard();

        auto label_ = FromAPI(label);

auto result =self->APICreateErrorComputePipeline(label_);
return ToAPI(result);

    }

    WGPUExternalTexture NativeDeviceCreateErrorExternalTexture(WGPUDevice cSelf) {
        auto self = FromAPI(cSelf);

        auto device = self;
        auto deviceGuard = device->GetGuard();

        
auto result =self->APICreateErrorExternalTexture();
return ToAPI(result);

    }

    WGPURenderPipeline NativeDeviceCreateErrorRenderPipeline(WGPUDevice cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        auto device = self;
        auto deviceGuard = device->GetGuard();

        auto label_ = FromAPI(label);

auto result =self->APICreateErrorRenderPipeline(label_);
return ToAPI(result);

    }

    WGPUShaderModule NativeDeviceCreateErrorShaderModule(WGPUDevice cSelf, WGPUShaderModuleDescriptor const * descriptor, WGPUStringView errorMessage) {
        auto self = FromAPI(cSelf);

        auto device = self;
        auto deviceGuard = device->GetGuard();

        auto descriptor_ = FromAPI(descriptor);
auto errorMessage_ = FromAPI(errorMessage);

auto result =self->APICreateErrorShaderModule(descriptor_, errorMessage_);
return ToAPI(result);

    }

    WGPUTexture NativeDeviceCreateErrorTexture(WGPUDevice cSelf, WGPUTextureDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        auto device = self;
        auto deviceGuard = device->GetGuard();

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateErrorTexture(descriptor_);
return ToAPI(result);

    }

    WGPUExternalTexture NativeDeviceCreateExternalTexture(WGPUDevice cSelf, WGPUExternalTextureDescriptor const * externalTextureDescriptor) {
        auto self = FromAPI(cSelf);

        auto device = self;
        auto deviceGuard = device->GetGuard();

        auto externalTextureDescriptor_ = FromAPI(externalTextureDescriptor);

auto result =self->APICreateExternalTexture(externalTextureDescriptor_);
return ToAPI(result);

    }

    WGPUPipelineLayout NativeDeviceCreatePipelineLayout(WGPUDevice cSelf, WGPUPipelineLayoutDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        auto device = self;
        auto deviceGuard = device->GetGuard();

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreatePipelineLayout(descriptor_);
return ToAPI(result);

    }

    WGPUQuerySet NativeDeviceCreateQuerySet(WGPUDevice cSelf, WGPUQuerySetDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        auto device = self;
        auto deviceGuard = device->GetGuard();

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateQuerySet(descriptor_);
return ToAPI(result);

    }

    WGPURenderBundleEncoder NativeDeviceCreateRenderBundleEncoder(WGPUDevice cSelf, WGPURenderBundleEncoderDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        auto device = self;
        auto deviceGuard = device->GetGuard();

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateRenderBundleEncoder(descriptor_);
return ToAPI(result);

    }

    WGPURenderPipeline NativeDeviceCreateRenderPipeline(WGPUDevice cSelf, WGPURenderPipelineDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateRenderPipeline(descriptor_);
return ToAPI(result);

    }

    WGPUFuture NativeDeviceCreateRenderPipelineAsync(WGPUDevice cSelf, WGPURenderPipelineDescriptor const * descriptor, WGPUCreateRenderPipelineAsyncCallbackInfo callbackInfo) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto descriptor_ = FromAPI(descriptor);
auto callbackInfo_ = callbackInfo;

auto result =self->APICreateRenderPipelineAsync(descriptor_, callbackInfo_);
return ToAPI(result);

    }

    WGPUResourceTable NativeDeviceCreateResourceTable(WGPUDevice cSelf, WGPUResourceTableDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        auto device = self;
        auto deviceGuard = device->GetGuard();

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateResourceTable(descriptor_);
return ToAPI(result);

    }

    WGPUSampler NativeDeviceCreateSampler(WGPUDevice cSelf, WGPUSamplerDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateSampler(descriptor_);
return ToAPI(result);

    }

    WGPUShaderModule NativeDeviceCreateShaderModule(WGPUDevice cSelf, WGPUShaderModuleDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateShaderModule(descriptor_);
return ToAPI(result);

    }

    WGPUTexture NativeDeviceCreateTexture(WGPUDevice cSelf, WGPUTextureDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateTexture(descriptor_);
return ToAPI(result);

    }

    void NativeDeviceDestroy(WGPUDevice cSelf) {
        auto self = FromAPI(cSelf);

        auto device = self;
        auto deviceGuard = device->GetGuard();

        
self->APIDestroy();

    }

    void NativeDeviceForceLoss(WGPUDevice cSelf, WGPUDeviceLostReason type, WGPUStringView message) {
        auto self = FromAPI(cSelf);

        auto device = self;
        auto deviceGuard = device->GetGuard();

        auto type_ = FromAPI(type);
auto message_ = FromAPI(message);

self->APIForceLoss(type_, message_);

    }

    WGPUAdapter NativeDeviceGetAdapter(WGPUDevice cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
auto result =self->APIGetAdapter();
return ToAPI(result);

    }

    WGPUStatus NativeDeviceGetAdapterInfo(WGPUDevice cSelf, WGPUAdapterInfo * adapterInfo) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto adapterInfo_ = FromAPI(adapterInfo);

auto result =self->APIGetAdapterInfo(adapterInfo_);
return ToAPI(result);

    }

    WGPUStatus NativeDeviceGetAHardwareBufferProperties(WGPUDevice cSelf, void * handle, WGPUAHardwareBufferProperties * properties) {
        auto self = FromAPI(cSelf);

        auto device = self;
        auto deviceGuard = device->GetGuard();

        auto handle_ = FromAPI(handle);
auto properties_ = FromAPI(properties);

auto result =self->APIGetAHardwareBufferProperties(handle_, properties_);
return ToAPI(result);

    }

    void NativeDeviceGetFeatures(WGPUDevice cSelf, WGPUSupportedFeatures * features) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto features_ = FromAPI(features);

self->APIGetFeatures(features_);

    }

    WGPUStatus NativeDeviceGetLimits(WGPUDevice cSelf, WGPULimits * limits) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto limits_ = FromAPI(limits);

auto result =self->APIGetLimits(limits_);
return ToAPI(result);

    }

    WGPUFuture NativeDeviceGetLostFuture(WGPUDevice cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
auto result =self->APIGetLostFuture();
return ToAPI(result);

    }

    WGPUQueue NativeDeviceGetQueue(WGPUDevice cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
auto result =self->APIGetQueue();
return ToAPI(result);

    }

    WGPUBool NativeDeviceHasFeature(WGPUDevice cSelf, WGPUFeatureName feature) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto feature_ = FromAPI(feature);

auto result =self->APIHasFeature(feature_);
return ToAPI(result);

    }

    WGPUSharedBufferMemory NativeDeviceImportSharedBufferMemory(WGPUDevice cSelf, WGPUSharedBufferMemoryDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        auto device = self;
        auto deviceGuard = device->GetGuard();

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APIImportSharedBufferMemory(descriptor_);
return ToAPI(result);

    }

    WGPUSharedFence NativeDeviceImportSharedFence(WGPUDevice cSelf, WGPUSharedFenceDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        auto device = self;
        auto deviceGuard = device->GetGuard();

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APIImportSharedFence(descriptor_);
return ToAPI(result);

    }

    WGPUSharedTextureMemory NativeDeviceImportSharedTextureMemory(WGPUDevice cSelf, WGPUSharedTextureMemoryDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        auto device = self;
        auto deviceGuard = device->GetGuard();

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APIImportSharedTextureMemory(descriptor_);
return ToAPI(result);

    }

    void NativeDeviceInjectError(WGPUDevice cSelf, WGPUErrorType type, WGPUStringView message) {
        auto self = FromAPI(cSelf);

        auto device = self;
        auto deviceGuard = device->GetGuard();

        auto type_ = FromAPI(type);
auto message_ = FromAPI(message);

self->APIInjectError(type_, message_);

    }

    WGPUFuture NativeDevicePopErrorScope(WGPUDevice cSelf, WGPUPopErrorScopeCallbackInfo callbackInfo) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto callbackInfo_ = callbackInfo;

auto result =self->APIPopErrorScope(callbackInfo_);
return ToAPI(result);

    }

    void NativeDevicePushErrorScope(WGPUDevice cSelf, WGPUErrorFilter filter) {
        auto self = FromAPI(cSelf);

        auto device = self;
        auto deviceGuard = device->GetGuard();

        auto filter_ = FromAPI(filter);

self->APIPushErrorScope(filter_);

    }

    void NativeDeviceSetLabel(WGPUDevice cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        auto device = self;
        auto deviceGuard = device->GetGuard();

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeDeviceSetLoggingCallback(WGPUDevice cSelf, WGPULoggingCallbackInfo callbackInfo) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto callbackInfo_ = callbackInfo;

self->APISetLoggingCallback(callbackInfo_);

    }

    void NativeDeviceTick(WGPUDevice cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APITick();

    }

    void NativeDeviceValidateTextureDescriptor(WGPUDevice cSelf, WGPUTextureDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        auto device = self;
        auto deviceGuard = device->GetGuard();

        auto descriptor_ = FromAPI(descriptor);

self->APIValidateTextureDescriptor(descriptor_);

    }

    void NativeDeviceAddRef(WGPUDevice cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeDeviceRelease(WGPUDevice cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    void NativeExternalTextureDestroy(WGPUExternalTexture cSelf) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        
self->APIDestroy();

    }

    void NativeExternalTextureExpire(WGPUExternalTexture cSelf) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        
self->APIExpire();

    }

    void NativeExternalTextureRefresh(WGPUExternalTexture cSelf) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        
self->APIRefresh();

    }

    void NativeExternalTextureSetLabel(WGPUExternalTexture cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeExternalTextureAddRef(WGPUExternalTexture cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeExternalTextureRelease(WGPUExternalTexture cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    WGPUSurface NativeInstanceCreateSurface(WGPUInstance cSelf, WGPUSurfaceDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateSurface(descriptor_);
return ToAPI(result);

    }

    void NativeInstanceGetWGSLLanguageFeatures(WGPUInstance cSelf, WGPUSupportedWGSLLanguageFeatures * features) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto features_ = FromAPI(features);

self->APIGetWGSLLanguageFeatures(features_);

    }

    WGPUBool NativeInstanceHasWGSLLanguageFeature(WGPUInstance cSelf, WGPUWGSLLanguageFeatureName feature) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto feature_ = FromAPI(feature);

auto result =self->APIHasWGSLLanguageFeature(feature_);
return ToAPI(result);

    }

    void NativeInstanceProcessEvents(WGPUInstance cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIProcessEvents();

    }

    WGPUFuture NativeInstanceRequestAdapter(WGPUInstance cSelf, WGPURequestAdapterOptions const * options, WGPURequestAdapterCallbackInfo callbackInfo) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto options_ = FromAPI(options);
auto callbackInfo_ = callbackInfo;

auto result =self->APIRequestAdapter(options_, callbackInfo_);
return ToAPI(result);

    }

    WGPUWaitStatus NativeInstanceWaitAny(WGPUInstance cSelf, size_t futureCount, WGPUFutureWaitInfo * futures, uint64_t timeoutNS) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        // SAFETY: The webgpu.h user is required to pass valid ranges of objects.
auto futures_ = DAWN_UNSAFE_BUFFERS(dawn::ityp::span<size_t, FutureWaitInfo, dawn::detail::DynamicExtent<size_t>>(FromAPI(futures), dawn::checked_cast<size_t>(futureCount)));
auto timeoutNS_ = FromAPI(timeoutNS);

auto result =self->APIWaitAny(futures_, timeoutNS_);
return ToAPI(result);

    }

    void NativeInstanceAddRef(WGPUInstance cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeInstanceRelease(WGPUInstance cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    void NativePipelineLayoutSetLabel(WGPUPipelineLayout cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativePipelineLayoutAddRef(WGPUPipelineLayout cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativePipelineLayoutRelease(WGPUPipelineLayout cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    void NativeQuerySetDestroy(WGPUQuerySet cSelf) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        
self->APIDestroy();

    }

    uint32_t NativeQuerySetGetCount(WGPUQuerySet cSelf) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        
auto result =self->APIGetCount();
return ToAPI(result);

    }

    WGPUQueryType NativeQuerySetGetType(WGPUQuerySet cSelf) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        
auto result =self->APIGetType();
return ToAPI(result);

    }

    void NativeQuerySetSetLabel(WGPUQuerySet cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeQuerySetAddRef(WGPUQuerySet cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeQuerySetRelease(WGPUQuerySet cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    void NativeQueueCopyExternalTextureForBrowser(WGPUQueue cSelf, WGPUImageCopyExternalTexture const * source, WGPUTexelCopyTextureInfo const * destination, WGPUExtent3D const * copySize, WGPUCopyTextureForBrowserOptions const * options) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        auto source_ = FromAPI(source);
auto destination_ = FromAPI(destination);
auto copySize_ = FromAPI(copySize);
auto options_ = FromAPI(options);

self->APICopyExternalTextureForBrowser(source_, destination_, copySize_, options_);

    }

    void NativeQueueCopyTextureForBrowser(WGPUQueue cSelf, WGPUTexelCopyTextureInfo const * source, WGPUTexelCopyTextureInfo const * destination, WGPUExtent3D const * copySize, WGPUCopyTextureForBrowserOptions const * options) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        auto source_ = FromAPI(source);
auto destination_ = FromAPI(destination);
auto copySize_ = FromAPI(copySize);
auto options_ = FromAPI(options);

self->APICopyTextureForBrowser(source_, destination_, copySize_, options_);

    }

    WGPUFuture NativeQueueOnSubmittedWorkDone(WGPUQueue cSelf, WGPUQueueWorkDoneCallbackInfo callbackInfo) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto callbackInfo_ = callbackInfo;

auto result =self->APIOnSubmittedWorkDone(callbackInfo_);
return ToAPI(result);

    }

    void NativeQueueSetLabel(WGPUQueue cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeQueueSubmit(WGPUQueue cSelf, size_t commandCount, WGPUCommandBuffer const * commands) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        // SAFETY: The webgpu.h user is required to pass valid ranges of objects.
auto commands_ = DAWN_UNSAFE_BUFFERS(dawn::ityp::span<size_t, detail::CommandBuffer* const, dawn::detail::DynamicExtent<size_t>>(FromAPI(commands), dawn::checked_cast<size_t>(commandCount)));

self->APISubmit(commands_);

    }

    void NativeQueueWriteBuffer(WGPUQueue cSelf, WGPUBuffer buffer, uint64_t bufferOffset, void const * data, size_t size) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        auto buffer_ = FromAPI(buffer);
auto bufferOffset_ = FromAPI(bufferOffset);
// SAFETY: The webgpu.h user is required to pass valid ranges of objects.
auto data_ = DAWN_UNSAFE_BUFFERS(dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>>(FromAPI(data), dawn::checked_cast<size_t>(size)));

self->APIWriteBuffer(buffer_, bufferOffset_, data_);

    }

    void NativeQueueWriteTexture(WGPUQueue cSelf, WGPUTexelCopyTextureInfo const * destination, void const * data, size_t dataSize, WGPUTexelCopyBufferLayout const * dataLayout, WGPUExtent3D const * writeSize) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        auto destination_ = FromAPI(destination);
// SAFETY: The webgpu.h user is required to pass valid ranges of objects.
auto data_ = DAWN_UNSAFE_BUFFERS(dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>>(FromAPI(data), dawn::checked_cast<size_t>(dataSize)));
auto dataLayout_ = FromAPI(dataLayout);
auto writeSize_ = FromAPI(writeSize);

self->APIWriteTexture(destination_, data_, dataLayout_, writeSize_);

    }

    void NativeQueueAddRef(WGPUQueue cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeQueueRelease(WGPUQueue cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    void NativeRenderBundleSetLabel(WGPURenderBundle cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeRenderBundleAddRef(WGPURenderBundle cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeRenderBundleRelease(WGPURenderBundle cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    void NativeRenderBundleEncoderDraw(WGPURenderBundleEncoder cSelf, uint32_t vertexCount, uint32_t instanceCount, uint32_t firstVertex, uint32_t firstInstance) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto vertexCount_ = FromAPI(vertexCount);
auto instanceCount_ = FromAPI(instanceCount);
auto firstVertex_ = FromAPI(firstVertex);
auto firstInstance_ = FromAPI(firstInstance);

self->APIDraw(vertexCount_, instanceCount_, firstVertex_, firstInstance_);

    }

    void NativeRenderBundleEncoderDrawIndexed(WGPURenderBundleEncoder cSelf, uint32_t indexCount, uint32_t instanceCount, uint32_t firstIndex, int32_t baseVertex, uint32_t firstInstance) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto indexCount_ = FromAPI(indexCount);
auto instanceCount_ = FromAPI(instanceCount);
auto firstIndex_ = FromAPI(firstIndex);
auto baseVertex_ = FromAPI(baseVertex);
auto firstInstance_ = FromAPI(firstInstance);

self->APIDrawIndexed(indexCount_, instanceCount_, firstIndex_, baseVertex_, firstInstance_);

    }

    void NativeRenderBundleEncoderDrawIndexedIndirect(WGPURenderBundleEncoder cSelf, WGPUBuffer indirectBuffer, uint64_t indirectOffset) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto indirectBuffer_ = FromAPI(indirectBuffer);
auto indirectOffset_ = FromAPI(indirectOffset);

self->APIDrawIndexedIndirect(indirectBuffer_, indirectOffset_);

    }

    void NativeRenderBundleEncoderDrawIndirect(WGPURenderBundleEncoder cSelf, WGPUBuffer indirectBuffer, uint64_t indirectOffset) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto indirectBuffer_ = FromAPI(indirectBuffer);
auto indirectOffset_ = FromAPI(indirectOffset);

self->APIDrawIndirect(indirectBuffer_, indirectOffset_);

    }

    WGPURenderBundle NativeRenderBundleEncoderFinish(WGPURenderBundleEncoder cSelf, WGPURenderBundleDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APIFinish(descriptor_);
return ToAPI(result);

    }

    void NativeRenderBundleEncoderInsertDebugMarker(WGPURenderBundleEncoder cSelf, WGPUStringView markerLabel) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto markerLabel_ = FromAPI(markerLabel);

self->APIInsertDebugMarker(markerLabel_);

    }

    void NativeRenderBundleEncoderPopDebugGroup(WGPURenderBundleEncoder cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIPopDebugGroup();

    }

    void NativeRenderBundleEncoderPushDebugGroup(WGPURenderBundleEncoder cSelf, WGPUStringView groupLabel) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto groupLabel_ = FromAPI(groupLabel);

self->APIPushDebugGroup(groupLabel_);

    }

    void NativeRenderBundleEncoderSetBindGroup(WGPURenderBundleEncoder cSelf, uint32_t groupIndex, WGPUBindGroup group, size_t dynamicOffsetCount, uint32_t const * dynamicOffsets) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto groupIndex_ = FromAPI(groupIndex);
auto group_ = FromAPI(group);
// SAFETY: The webgpu.h user is required to pass valid ranges of objects.
auto dynamicOffsets_ = DAWN_UNSAFE_BUFFERS(dawn::ityp::span<BindingIndex, uint32_t const, dawn::detail::DynamicExtent<BindingIndex>>(FromAPI(dynamicOffsets), dawn::checked_cast<BindingIndex>(dynamicOffsetCount)));

self->APISetBindGroup(groupIndex_, group_, dynamicOffsets_);

    }

    void NativeRenderBundleEncoderSetImmediates(WGPURenderBundleEncoder cSelf, uint32_t offset, void const * data, size_t size) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto offset_ = FromAPI(offset);
// SAFETY: The webgpu.h user is required to pass valid ranges of objects.
auto data_ = DAWN_UNSAFE_BUFFERS(dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>>(FromAPI(data), dawn::checked_cast<size_t>(size)));

self->APISetImmediates(offset_, data_);

    }

    void NativeRenderBundleEncoderSetIndexBuffer(WGPURenderBundleEncoder cSelf, WGPUBuffer buffer, WGPUIndexFormat format, uint64_t offset, uint64_t size) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto buffer_ = FromAPI(buffer);
auto format_ = FromAPI(format);
auto offset_ = FromAPI(offset);
auto size_ = FromAPI(size);

self->APISetIndexBuffer(buffer_, format_, offset_, size_);

    }

    void NativeRenderBundleEncoderSetLabel(WGPURenderBundleEncoder cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeRenderBundleEncoderSetPipeline(WGPURenderBundleEncoder cSelf, WGPURenderPipeline pipeline) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto pipeline_ = FromAPI(pipeline);

self->APISetPipeline(pipeline_);

    }

    void NativeRenderBundleEncoderSetVertexBuffer(WGPURenderBundleEncoder cSelf, uint32_t slot, WGPUBuffer buffer, uint64_t offset, uint64_t size) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto slot_ = FromAPI(slot);
auto buffer_ = FromAPI(buffer);
auto offset_ = FromAPI(offset);
auto size_ = FromAPI(size);

self->APISetVertexBuffer(slot_, buffer_, offset_, size_);

    }

    void NativeRenderBundleEncoderAddRef(WGPURenderBundleEncoder cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeRenderBundleEncoderRelease(WGPURenderBundleEncoder cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    void NativeRenderPassEncoderBeginOcclusionQuery(WGPURenderPassEncoder cSelf, uint32_t queryIndex) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto queryIndex_ = FromAPI(queryIndex);

self->APIBeginOcclusionQuery(queryIndex_);

    }

    void NativeRenderPassEncoderDraw(WGPURenderPassEncoder cSelf, uint32_t vertexCount, uint32_t instanceCount, uint32_t firstVertex, uint32_t firstInstance) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto vertexCount_ = FromAPI(vertexCount);
auto instanceCount_ = FromAPI(instanceCount);
auto firstVertex_ = FromAPI(firstVertex);
auto firstInstance_ = FromAPI(firstInstance);

self->APIDraw(vertexCount_, instanceCount_, firstVertex_, firstInstance_);

    }

    void NativeRenderPassEncoderDrawIndexed(WGPURenderPassEncoder cSelf, uint32_t indexCount, uint32_t instanceCount, uint32_t firstIndex, int32_t baseVertex, uint32_t firstInstance) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto indexCount_ = FromAPI(indexCount);
auto instanceCount_ = FromAPI(instanceCount);
auto firstIndex_ = FromAPI(firstIndex);
auto baseVertex_ = FromAPI(baseVertex);
auto firstInstance_ = FromAPI(firstInstance);

self->APIDrawIndexed(indexCount_, instanceCount_, firstIndex_, baseVertex_, firstInstance_);

    }

    void NativeRenderPassEncoderDrawIndexedIndirect(WGPURenderPassEncoder cSelf, WGPUBuffer indirectBuffer, uint64_t indirectOffset) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto indirectBuffer_ = FromAPI(indirectBuffer);
auto indirectOffset_ = FromAPI(indirectOffset);

self->APIDrawIndexedIndirect(indirectBuffer_, indirectOffset_);

    }

    void NativeRenderPassEncoderDrawIndirect(WGPURenderPassEncoder cSelf, WGPUBuffer indirectBuffer, uint64_t indirectOffset) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto indirectBuffer_ = FromAPI(indirectBuffer);
auto indirectOffset_ = FromAPI(indirectOffset);

self->APIDrawIndirect(indirectBuffer_, indirectOffset_);

    }

    void NativeRenderPassEncoderEnd(WGPURenderPassEncoder cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIEnd();

    }

    void NativeRenderPassEncoderEndOcclusionQuery(WGPURenderPassEncoder cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIEndOcclusionQuery();

    }

    void NativeRenderPassEncoderExecuteBundles(WGPURenderPassEncoder cSelf, size_t bundleCount, WGPURenderBundle const * bundles) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        // SAFETY: The webgpu.h user is required to pass valid ranges of objects.
auto bundles_ = DAWN_UNSAFE_BUFFERS(dawn::ityp::span<size_t, detail::RenderBundle* const, dawn::detail::DynamicExtent<size_t>>(FromAPI(bundles), dawn::checked_cast<size_t>(bundleCount)));

self->APIExecuteBundles(bundles_);

    }

    void NativeRenderPassEncoderInsertDebugMarker(WGPURenderPassEncoder cSelf, WGPUStringView markerLabel) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto markerLabel_ = FromAPI(markerLabel);

self->APIInsertDebugMarker(markerLabel_);

    }

    void NativeRenderPassEncoderMultiDrawIndexedIndirect(WGPURenderPassEncoder cSelf, WGPUBuffer indirectBuffer, uint64_t indirectOffset, uint32_t maxDrawCount, WGPUBuffer drawCountBuffer, uint64_t drawCountBufferOffset) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto indirectBuffer_ = FromAPI(indirectBuffer);
auto indirectOffset_ = FromAPI(indirectOffset);
auto maxDrawCount_ = FromAPI(maxDrawCount);
auto drawCountBuffer_ = FromAPI(drawCountBuffer);
auto drawCountBufferOffset_ = FromAPI(drawCountBufferOffset);

self->APIMultiDrawIndexedIndirect(indirectBuffer_, indirectOffset_, maxDrawCount_, drawCountBuffer_, drawCountBufferOffset_);

    }

    void NativeRenderPassEncoderMultiDrawIndirect(WGPURenderPassEncoder cSelf, WGPUBuffer indirectBuffer, uint64_t indirectOffset, uint32_t maxDrawCount, WGPUBuffer drawCountBuffer, uint64_t drawCountBufferOffset) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto indirectBuffer_ = FromAPI(indirectBuffer);
auto indirectOffset_ = FromAPI(indirectOffset);
auto maxDrawCount_ = FromAPI(maxDrawCount);
auto drawCountBuffer_ = FromAPI(drawCountBuffer);
auto drawCountBufferOffset_ = FromAPI(drawCountBufferOffset);

self->APIMultiDrawIndirect(indirectBuffer_, indirectOffset_, maxDrawCount_, drawCountBuffer_, drawCountBufferOffset_);

    }

    void NativeRenderPassEncoderPixelLocalStorageBarrier(WGPURenderPassEncoder cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIPixelLocalStorageBarrier();

    }

    void NativeRenderPassEncoderPopDebugGroup(WGPURenderPassEncoder cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIPopDebugGroup();

    }

    void NativeRenderPassEncoderPushDebugGroup(WGPURenderPassEncoder cSelf, WGPUStringView groupLabel) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto groupLabel_ = FromAPI(groupLabel);

self->APIPushDebugGroup(groupLabel_);

    }

    void NativeRenderPassEncoderSetBindGroup(WGPURenderPassEncoder cSelf, uint32_t groupIndex, WGPUBindGroup group, size_t dynamicOffsetCount, uint32_t const * dynamicOffsets) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto groupIndex_ = FromAPI(groupIndex);
auto group_ = FromAPI(group);
// SAFETY: The webgpu.h user is required to pass valid ranges of objects.
auto dynamicOffsets_ = DAWN_UNSAFE_BUFFERS(dawn::ityp::span<BindingIndex, uint32_t const, dawn::detail::DynamicExtent<BindingIndex>>(FromAPI(dynamicOffsets), dawn::checked_cast<BindingIndex>(dynamicOffsetCount)));

self->APISetBindGroup(groupIndex_, group_, dynamicOffsets_);

    }

    void NativeRenderPassEncoderSetBlendConstant(WGPURenderPassEncoder cSelf, WGPUColor const * color) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto color_ = FromAPI(color);

self->APISetBlendConstant(color_);

    }

    void NativeRenderPassEncoderSetImmediates(WGPURenderPassEncoder cSelf, uint32_t offset, void const * data, size_t size) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto offset_ = FromAPI(offset);
// SAFETY: The webgpu.h user is required to pass valid ranges of objects.
auto data_ = DAWN_UNSAFE_BUFFERS(dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>>(FromAPI(data), dawn::checked_cast<size_t>(size)));

self->APISetImmediates(offset_, data_);

    }

    void NativeRenderPassEncoderSetIndexBuffer(WGPURenderPassEncoder cSelf, WGPUBuffer buffer, WGPUIndexFormat format, uint64_t offset, uint64_t size) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto buffer_ = FromAPI(buffer);
auto format_ = FromAPI(format);
auto offset_ = FromAPI(offset);
auto size_ = FromAPI(size);

self->APISetIndexBuffer(buffer_, format_, offset_, size_);

    }

    void NativeRenderPassEncoderSetLabel(WGPURenderPassEncoder cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeRenderPassEncoderSetPipeline(WGPURenderPassEncoder cSelf, WGPURenderPipeline pipeline) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto pipeline_ = FromAPI(pipeline);

self->APISetPipeline(pipeline_);

    }

    void NativeRenderPassEncoderSetResourceTable(WGPURenderPassEncoder cSelf, WGPUResourceTable table) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto table_ = FromAPI(table);

self->APISetResourceTable(table_);

    }

    void NativeRenderPassEncoderSetScissorRect(WGPURenderPassEncoder cSelf, uint32_t x, uint32_t y, uint32_t width, uint32_t height) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto x_ = FromAPI(x);
auto y_ = FromAPI(y);
auto width_ = FromAPI(width);
auto height_ = FromAPI(height);

self->APISetScissorRect(x_, y_, width_, height_);

    }

    void NativeRenderPassEncoderSetStencilReference(WGPURenderPassEncoder cSelf, uint32_t reference) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto reference_ = FromAPI(reference);

self->APISetStencilReference(reference_);

    }

    void NativeRenderPassEncoderSetVertexBuffer(WGPURenderPassEncoder cSelf, uint32_t slot, WGPUBuffer buffer, uint64_t offset, uint64_t size) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto slot_ = FromAPI(slot);
auto buffer_ = FromAPI(buffer);
auto offset_ = FromAPI(offset);
auto size_ = FromAPI(size);

self->APISetVertexBuffer(slot_, buffer_, offset_, size_);

    }

    void NativeRenderPassEncoderSetViewport(WGPURenderPassEncoder cSelf, float x, float y, float width, float height, float minDepth, float maxDepth) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto x_ = FromAPI(x);
auto y_ = FromAPI(y);
auto width_ = FromAPI(width);
auto height_ = FromAPI(height);
auto minDepth_ = FromAPI(minDepth);
auto maxDepth_ = FromAPI(maxDepth);

self->APISetViewport(x_, y_, width_, height_, minDepth_, maxDepth_);

    }

    void NativeRenderPassEncoderWriteTimestamp(WGPURenderPassEncoder cSelf, WGPUQuerySet querySet, uint32_t queryIndex) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto querySet_ = FromAPI(querySet);
auto queryIndex_ = FromAPI(queryIndex);

self->APIWriteTimestamp(querySet_, queryIndex_);

    }

    void NativeRenderPassEncoderAddRef(WGPURenderPassEncoder cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeRenderPassEncoderRelease(WGPURenderPassEncoder cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    WGPUBindGroupLayout NativeRenderPipelineGetBindGroupLayout(WGPURenderPipeline cSelf, uint32_t groupIndex) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto groupIndex_ = FromAPI(groupIndex);

auto result =self->APIGetBindGroupLayout(groupIndex_);
return ToAPI(result);

    }

    void NativeRenderPipelineSetLabel(WGPURenderPipeline cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeRenderPipelineAddRef(WGPURenderPipeline cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeRenderPipelineRelease(WGPURenderPipeline cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    void NativeResourceTableDestroy(WGPUResourceTable cSelf) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        
self->APIDestroy();

    }

    uint32_t NativeResourceTableGetSize(WGPUResourceTable cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
auto result =self->APIGetSize();
return ToAPI(result);

    }

    uint32_t NativeResourceTableInsert(WGPUResourceTable cSelf, WGPUBindingResource const * resource) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        auto resource_ = FromAPI(resource);

auto result =self->APIInsert(resource_);
return ToAPI(result);

    }

    WGPUStatus NativeResourceTableRemove(WGPUResourceTable cSelf, uint32_t slot) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        auto slot_ = FromAPI(slot);

auto result =self->APIRemove(slot_);
return ToAPI(result);

    }

    void NativeResourceTableSetLabel(WGPUResourceTable cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    WGPUStatus NativeResourceTableUpdate(WGPUResourceTable cSelf, uint32_t slot, WGPUBindingResource const * resource) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        auto slot_ = FromAPI(slot);
auto resource_ = FromAPI(resource);

auto result =self->APIUpdate(slot_, resource_);
return ToAPI(result);

    }

    void NativeResourceTableAddRef(WGPUResourceTable cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeResourceTableRelease(WGPUResourceTable cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    void NativeSamplerSetLabel(WGPUSampler cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeSamplerAddRef(WGPUSampler cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeSamplerRelease(WGPUSampler cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    WGPUFuture NativeShaderModuleGetCompilationInfo(WGPUShaderModule cSelf, WGPUCompilationInfoCallbackInfo callbackInfo) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto callbackInfo_ = callbackInfo;

auto result =self->APIGetCompilationInfo(callbackInfo_);
return ToAPI(result);

    }

    void NativeShaderModuleSetLabel(WGPUShaderModule cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeShaderModuleAddRef(WGPUShaderModule cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeShaderModuleRelease(WGPUShaderModule cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    WGPUStatus NativeSharedBufferMemoryBeginAccess(WGPUSharedBufferMemory cSelf, WGPUBuffer buffer, WGPUSharedBufferMemoryBeginAccessDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        auto buffer_ = FromAPI(buffer);
auto descriptor_ = FromAPI(descriptor);

auto result =self->APIBeginAccess(buffer_, descriptor_);
return ToAPI(result);

    }

    WGPUBuffer NativeSharedBufferMemoryCreateBuffer(WGPUSharedBufferMemory cSelf, WGPUBufferDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateBuffer(descriptor_);
return ToAPI(result);

    }

    WGPUStatus NativeSharedBufferMemoryEndAccess(WGPUSharedBufferMemory cSelf, WGPUBuffer buffer, WGPUSharedBufferMemoryEndAccessState * descriptor) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        auto buffer_ = FromAPI(buffer);
auto descriptor_ = FromAPI(descriptor);

auto result =self->APIEndAccess(buffer_, descriptor_);
return ToAPI(result);

    }

    WGPUStatus NativeSharedBufferMemoryGetProperties(WGPUSharedBufferMemory cSelf, WGPUSharedBufferMemoryProperties * properties) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        auto properties_ = FromAPI(properties);

auto result =self->APIGetProperties(properties_);
return ToAPI(result);

    }

    WGPUBool NativeSharedBufferMemoryIsDeviceLost(WGPUSharedBufferMemory cSelf) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        
auto result =self->APIIsDeviceLost();
return ToAPI(result);

    }

    void NativeSharedBufferMemorySetLabel(WGPUSharedBufferMemory cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeSharedBufferMemoryAddRef(WGPUSharedBufferMemory cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeSharedBufferMemoryRelease(WGPUSharedBufferMemory cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    void NativeSharedBufferMemoryEndAccessStateFreeMembers(WGPUSharedBufferMemoryEndAccessState cSelf) {
        
        
APISharedBufferMemoryEndAccessStateFreeMembers(cSelf);

    }

    void NativeSharedFenceExportInfo(WGPUSharedFence cSelf, WGPUSharedFenceExportInfo * info) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        auto info_ = FromAPI(info);

self->APIExportInfo(info_);

    }

    void NativeSharedFenceSetLabel(WGPUSharedFence cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeSharedFenceAddRef(WGPUSharedFence cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeSharedFenceRelease(WGPUSharedFence cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    WGPUStatus NativeSharedTextureMemoryBeginAccess(WGPUSharedTextureMemory cSelf, WGPUTexture texture, WGPUSharedTextureMemoryBeginAccessDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        auto texture_ = FromAPI(texture);
auto descriptor_ = FromAPI(descriptor);

auto result =self->APIBeginAccess(texture_, descriptor_);
return ToAPI(result);

    }

    WGPUTexture NativeSharedTextureMemoryCreateTexture(WGPUSharedTextureMemory cSelf, WGPUTextureDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateTexture(descriptor_);
return ToAPI(result);

    }

    WGPUStatus NativeSharedTextureMemoryEndAccess(WGPUSharedTextureMemory cSelf, WGPUTexture texture, WGPUSharedTextureMemoryEndAccessState * descriptor) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        auto texture_ = FromAPI(texture);
auto descriptor_ = FromAPI(descriptor);

auto result =self->APIEndAccess(texture_, descriptor_);
return ToAPI(result);

    }

    WGPUStatus NativeSharedTextureMemoryGetProperties(WGPUSharedTextureMemory cSelf, WGPUSharedTextureMemoryProperties * properties) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        auto properties_ = FromAPI(properties);

auto result =self->APIGetProperties(properties_);
return ToAPI(result);

    }

    WGPUBool NativeSharedTextureMemoryIsDeviceLost(WGPUSharedTextureMemory cSelf) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        
auto result =self->APIIsDeviceLost();
return ToAPI(result);

    }

    void NativeSharedTextureMemorySetLabel(WGPUSharedTextureMemory cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeSharedTextureMemoryAddRef(WGPUSharedTextureMemory cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeSharedTextureMemoryRelease(WGPUSharedTextureMemory cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    void NativeSharedTextureMemoryEndAccessStateFreeMembers(WGPUSharedTextureMemoryEndAccessState cSelf) {
        
        
APISharedTextureMemoryEndAccessStateFreeMembers(cSelf);

    }

    void NativeSupportedFeaturesFreeMembers(WGPUSupportedFeatures cSelf) {
        
        
APISupportedFeaturesFreeMembers(cSelf);

    }

    void NativeSupportedInstanceFeaturesFreeMembers(WGPUSupportedInstanceFeatures cSelf) {
        
        
APISupportedInstanceFeaturesFreeMembers(cSelf);

    }

    void NativeSupportedWGSLLanguageFeaturesFreeMembers(WGPUSupportedWGSLLanguageFeatures cSelf) {
        
        
APISupportedWGSLLanguageFeaturesFreeMembers(cSelf);

    }

    void NativeSurfaceConfigure(WGPUSurface cSelf, WGPUSurfaceConfiguration const * config) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto config_ = FromAPI(config);

self->APIConfigure(config_);

    }

    WGPUStatus NativeSurfaceGetCapabilities(WGPUSurface cSelf, WGPUAdapter adapter, WGPUSurfaceCapabilities * capabilities) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto adapter_ = FromAPI(adapter);
auto capabilities_ = FromAPI(capabilities);

auto result =self->APIGetCapabilities(adapter_, capabilities_);
return ToAPI(result);

    }

    void NativeSurfaceGetCurrentTexture(WGPUSurface cSelf, WGPUSurfaceTexture * surfaceTexture) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto surfaceTexture_ = FromAPI(surfaceTexture);

self->APIGetCurrentTexture(surfaceTexture_);

    }

    WGPUStatus NativeSurfacePresent(WGPUSurface cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
auto result =self->APIPresent();
return ToAPI(result);

    }

    void NativeSurfaceSetLabel(WGPUSurface cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeSurfaceUnconfigure(WGPUSurface cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIUnconfigure();

    }

    void NativeSurfaceAddRef(WGPUSurface cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeSurfaceRelease(WGPUSurface cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    void NativeSurfaceCapabilitiesFreeMembers(WGPUSurfaceCapabilities cSelf) {
        
        
APISurfaceCapabilitiesFreeMembers(cSelf);

    }

    void NativeTexelBufferViewSetLabel(WGPUTexelBufferView cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeTexelBufferViewAddRef(WGPUTexelBufferView cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeTexelBufferViewRelease(WGPUTexelBufferView cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    WGPUTextureView NativeTextureCreateErrorView(WGPUTexture cSelf, WGPUTextureViewDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateErrorView(descriptor_);
return ToAPI(result);

    }

    WGPUTextureView NativeTextureCreateView(WGPUTexture cSelf, WGPUTextureViewDescriptor const * descriptor) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateView(descriptor_);
return ToAPI(result);

    }

    void NativeTextureDestroy(WGPUTexture cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIDestroy();

    }

    uint32_t NativeTextureGetDepthOrArrayLayers(WGPUTexture cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
auto result =self->APIGetDepthOrArrayLayers();
return ToAPI(result);

    }

    WGPUTextureDimension NativeTextureGetDimension(WGPUTexture cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
auto result =self->APIGetDimension();
return ToAPI(result);

    }

    WGPUTextureFormat NativeTextureGetFormat(WGPUTexture cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
auto result =self->APIGetFormat();
return ToAPI(result);

    }

    uint32_t NativeTextureGetHeight(WGPUTexture cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
auto result =self->APIGetHeight();
return ToAPI(result);

    }

    uint32_t NativeTextureGetMipLevelCount(WGPUTexture cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
auto result =self->APIGetMipLevelCount();
return ToAPI(result);

    }

    uint32_t NativeTextureGetSampleCount(WGPUTexture cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
auto result =self->APIGetSampleCount();
return ToAPI(result);

    }

    WGPUTextureViewDimension NativeTextureGetTextureBindingViewDimension(WGPUTexture cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
auto result =self->APIGetTextureBindingViewDimension();
return ToAPI(result);

    }

    WGPUTextureUsage NativeTextureGetUsage(WGPUTexture cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
auto result =self->APIGetUsage();
return ToAPI(result);

    }

    uint32_t NativeTextureGetWidth(WGPUTexture cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
auto result =self->APIGetWidth();
return ToAPI(result);

    }

    void NativeTextureSetLabel(WGPUTexture cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeTextureSetOwnershipForMemoryDump(WGPUTexture cSelf, uint64_t ownerGuid) {
        auto self = FromAPI(cSelf);

        auto device = self->GetDevice();
        auto deviceGuard = device->GetGuard();

        auto ownerGuid_ = FromAPI(ownerGuid);

self->APISetOwnershipForMemoryDump(ownerGuid_);

    }

    void NativeTextureAddRef(WGPUTexture cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeTextureRelease(WGPUTexture cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    void NativeTextureViewSetLabel(WGPUTextureView cSelf, WGPUStringView label) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        auto label_ = FromAPI(label);

self->APISetLabel(label_);

    }

    void NativeTextureViewAddRef(WGPUTextureView cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIAddRef();

    }

    void NativeTextureViewRelease(WGPUTextureView cSelf) {
        auto self = FromAPI(cSelf);

        // This method is specified to not use AutoLock in json script or it returns a future.

        
self->APIRelease();

    }

    WGPUInstance NativeCreateInstance(WGPUInstanceDescriptor const * descriptor) {
        auto descriptor_ = FromAPI(descriptor);

auto result =APICreateInstance(descriptor_);
return ToAPI(result);

    }
    void NativeGetInstanceFeatures(WGPUSupportedInstanceFeatures * features) {
        auto features_ = FromAPI(features);

APIGetInstanceFeatures(features_);

    }
    WGPUStatus NativeGetInstanceLimits(WGPUInstanceLimits * limits) {
        auto limits_ = FromAPI(limits);

auto result =APIGetInstanceLimits(limits_);
return ToAPI(result);

    }
    WGPUBool NativeHasInstanceFeature(WGPUInstanceFeatureName feature) {
        auto feature_ = FromAPI(feature);

auto result =APIHasInstanceFeature(feature_);
return ToAPI(result);

    }

    WGPUProc NativeGetProcAddress(WGPUStringView cProcName) {
        if (cProcName.data == nullptr) {
            return nullptr;
        }

        static const absl::NoDestructor<absl::flat_hash_map<std::string_view, WGPUProc>> sProcMap(
            absl::flat_hash_map<std::string_view, WGPUProc>{
                {"wgpuAdapterAddRef", reinterpret_cast<WGPUProc>(NativeAdapterAddRef)},
                {"wgpuAdapterCreateDevice", reinterpret_cast<WGPUProc>(NativeAdapterCreateDevice)},
                {"wgpuAdapterGetFeatures", reinterpret_cast<WGPUProc>(NativeAdapterGetFeatures)},
                {"wgpuAdapterGetFormatCapabilities", reinterpret_cast<WGPUProc>(NativeAdapterGetFormatCapabilities)},
                {"wgpuAdapterGetInfo", reinterpret_cast<WGPUProc>(NativeAdapterGetInfo)},
                {"wgpuAdapterGetInstance", reinterpret_cast<WGPUProc>(NativeAdapterGetInstance)},
                {"wgpuAdapterGetLimits", reinterpret_cast<WGPUProc>(NativeAdapterGetLimits)},
                {"wgpuAdapterHasFeature", reinterpret_cast<WGPUProc>(NativeAdapterHasFeature)},
                {"wgpuAdapterInfoFreeMembers", reinterpret_cast<WGPUProc>(NativeAdapterInfoFreeMembers)},
                {"wgpuAdapterPropertiesMemoryHeapsFreeMembers", reinterpret_cast<WGPUProc>(NativeAdapterPropertiesMemoryHeapsFreeMembers)},
                {"wgpuAdapterPropertiesSubgroupMatrixConfigsFreeMembers", reinterpret_cast<WGPUProc>(NativeAdapterPropertiesSubgroupMatrixConfigsFreeMembers)},
                {"wgpuAdapterRelease", reinterpret_cast<WGPUProc>(NativeAdapterRelease)},
                {"wgpuAdapterRequestDevice", reinterpret_cast<WGPUProc>(NativeAdapterRequestDevice)},
                {"wgpuBindGroupAddRef", reinterpret_cast<WGPUProc>(NativeBindGroupAddRef)},
                {"wgpuBindGroupLayoutAddRef", reinterpret_cast<WGPUProc>(NativeBindGroupLayoutAddRef)},
                {"wgpuBindGroupLayoutRelease", reinterpret_cast<WGPUProc>(NativeBindGroupLayoutRelease)},
                {"wgpuBindGroupLayoutSetLabel", reinterpret_cast<WGPUProc>(NativeBindGroupLayoutSetLabel)},
                {"wgpuBindGroupRelease", reinterpret_cast<WGPUProc>(NativeBindGroupRelease)},
                {"wgpuBindGroupSetLabel", reinterpret_cast<WGPUProc>(NativeBindGroupSetLabel)},
                {"wgpuBufferAddRef", reinterpret_cast<WGPUProc>(NativeBufferAddRef)},
                {"wgpuBufferCreateTexelView", reinterpret_cast<WGPUProc>(NativeBufferCreateTexelView)},
                {"wgpuBufferDestroy", reinterpret_cast<WGPUProc>(NativeBufferDestroy)},
                {"wgpuBufferGetConstMappedRange", reinterpret_cast<WGPUProc>(NativeBufferGetConstMappedRange)},
                {"wgpuBufferGetMapState", reinterpret_cast<WGPUProc>(NativeBufferGetMapState)},
                {"wgpuBufferGetMappedRange", reinterpret_cast<WGPUProc>(NativeBufferGetMappedRange)},
                {"wgpuBufferGetSize", reinterpret_cast<WGPUProc>(NativeBufferGetSize)},
                {"wgpuBufferGetUsage", reinterpret_cast<WGPUProc>(NativeBufferGetUsage)},
                {"wgpuBufferMapAsync", reinterpret_cast<WGPUProc>(NativeBufferMapAsync)},
                {"wgpuBufferReadMappedRange", reinterpret_cast<WGPUProc>(NativeBufferReadMappedRange)},
                {"wgpuBufferRelease", reinterpret_cast<WGPUProc>(NativeBufferRelease)},
                {"wgpuBufferSetLabel", reinterpret_cast<WGPUProc>(NativeBufferSetLabel)},
                {"wgpuBufferUnmap", reinterpret_cast<WGPUProc>(NativeBufferUnmap)},
                {"wgpuBufferWriteMappedRange", reinterpret_cast<WGPUProc>(NativeBufferWriteMappedRange)},
                {"wgpuCommandBufferAddRef", reinterpret_cast<WGPUProc>(NativeCommandBufferAddRef)},
                {"wgpuCommandBufferRelease", reinterpret_cast<WGPUProc>(NativeCommandBufferRelease)},
                {"wgpuCommandBufferSetLabel", reinterpret_cast<WGPUProc>(NativeCommandBufferSetLabel)},
                {"wgpuCommandEncoderAddRef", reinterpret_cast<WGPUProc>(NativeCommandEncoderAddRef)},
                {"wgpuCommandEncoderBeginComputePass", reinterpret_cast<WGPUProc>(NativeCommandEncoderBeginComputePass)},
                {"wgpuCommandEncoderBeginRenderPass", reinterpret_cast<WGPUProc>(NativeCommandEncoderBeginRenderPass)},
                {"wgpuCommandEncoderClearBuffer", reinterpret_cast<WGPUProc>(NativeCommandEncoderClearBuffer)},
                {"wgpuCommandEncoderCopyBufferToBuffer", reinterpret_cast<WGPUProc>(NativeCommandEncoderCopyBufferToBuffer)},
                {"wgpuCommandEncoderCopyBufferToTexture", reinterpret_cast<WGPUProc>(NativeCommandEncoderCopyBufferToTexture)},
                {"wgpuCommandEncoderCopyTextureToBuffer", reinterpret_cast<WGPUProc>(NativeCommandEncoderCopyTextureToBuffer)},
                {"wgpuCommandEncoderCopyTextureToTexture", reinterpret_cast<WGPUProc>(NativeCommandEncoderCopyTextureToTexture)},
                {"wgpuCommandEncoderFinish", reinterpret_cast<WGPUProc>(NativeCommandEncoderFinish)},
                {"wgpuCommandEncoderInjectValidationError", reinterpret_cast<WGPUProc>(NativeCommandEncoderInjectValidationError)},
                {"wgpuCommandEncoderInsertDebugMarker", reinterpret_cast<WGPUProc>(NativeCommandEncoderInsertDebugMarker)},
                {"wgpuCommandEncoderPopDebugGroup", reinterpret_cast<WGPUProc>(NativeCommandEncoderPopDebugGroup)},
                {"wgpuCommandEncoderPushDebugGroup", reinterpret_cast<WGPUProc>(NativeCommandEncoderPushDebugGroup)},
                {"wgpuCommandEncoderRelease", reinterpret_cast<WGPUProc>(NativeCommandEncoderRelease)},
                {"wgpuCommandEncoderResolveQuerySet", reinterpret_cast<WGPUProc>(NativeCommandEncoderResolveQuerySet)},
                {"wgpuCommandEncoderSetLabel", reinterpret_cast<WGPUProc>(NativeCommandEncoderSetLabel)},
                {"wgpuCommandEncoderWriteBuffer", reinterpret_cast<WGPUProc>(NativeCommandEncoderWriteBuffer)},
                {"wgpuCommandEncoderWriteTimestamp", reinterpret_cast<WGPUProc>(NativeCommandEncoderWriteTimestamp)},
                {"wgpuComputePassEncoderAddRef", reinterpret_cast<WGPUProc>(NativeComputePassEncoderAddRef)},
                {"wgpuComputePassEncoderDispatchWorkgroups", reinterpret_cast<WGPUProc>(NativeComputePassEncoderDispatchWorkgroups)},
                {"wgpuComputePassEncoderDispatchWorkgroupsIndirect", reinterpret_cast<WGPUProc>(NativeComputePassEncoderDispatchWorkgroupsIndirect)},
                {"wgpuComputePassEncoderEnd", reinterpret_cast<WGPUProc>(NativeComputePassEncoderEnd)},
                {"wgpuComputePassEncoderInsertDebugMarker", reinterpret_cast<WGPUProc>(NativeComputePassEncoderInsertDebugMarker)},
                {"wgpuComputePassEncoderPopDebugGroup", reinterpret_cast<WGPUProc>(NativeComputePassEncoderPopDebugGroup)},
                {"wgpuComputePassEncoderPushDebugGroup", reinterpret_cast<WGPUProc>(NativeComputePassEncoderPushDebugGroup)},
                {"wgpuComputePassEncoderRelease", reinterpret_cast<WGPUProc>(NativeComputePassEncoderRelease)},
                {"wgpuComputePassEncoderSetBindGroup", reinterpret_cast<WGPUProc>(NativeComputePassEncoderSetBindGroup)},
                {"wgpuComputePassEncoderSetImmediates", reinterpret_cast<WGPUProc>(NativeComputePassEncoderSetImmediates)},
                {"wgpuComputePassEncoderSetLabel", reinterpret_cast<WGPUProc>(NativeComputePassEncoderSetLabel)},
                {"wgpuComputePassEncoderSetPipeline", reinterpret_cast<WGPUProc>(NativeComputePassEncoderSetPipeline)},
                {"wgpuComputePassEncoderSetResourceTable", reinterpret_cast<WGPUProc>(NativeComputePassEncoderSetResourceTable)},
                {"wgpuComputePassEncoderWriteTimestamp", reinterpret_cast<WGPUProc>(NativeComputePassEncoderWriteTimestamp)},
                {"wgpuComputePipelineAddRef", reinterpret_cast<WGPUProc>(NativeComputePipelineAddRef)},
                {"wgpuComputePipelineGetBindGroupLayout", reinterpret_cast<WGPUProc>(NativeComputePipelineGetBindGroupLayout)},
                {"wgpuComputePipelineRelease", reinterpret_cast<WGPUProc>(NativeComputePipelineRelease)},
                {"wgpuComputePipelineSetLabel", reinterpret_cast<WGPUProc>(NativeComputePipelineSetLabel)},
                {"wgpuCreateInstance", reinterpret_cast<WGPUProc>(NativeCreateInstance)},
                {"wgpuDawnDrmFormatCapabilitiesFreeMembers", reinterpret_cast<WGPUProc>(NativeDawnDrmFormatCapabilitiesFreeMembers)},
                {"wgpuDeviceAddRef", reinterpret_cast<WGPUProc>(NativeDeviceAddRef)},
                {"wgpuDeviceCreateBindGroup", reinterpret_cast<WGPUProc>(NativeDeviceCreateBindGroup)},
                {"wgpuDeviceCreateBindGroupLayout", reinterpret_cast<WGPUProc>(NativeDeviceCreateBindGroupLayout)},
                {"wgpuDeviceCreateBuffer", reinterpret_cast<WGPUProc>(NativeDeviceCreateBuffer)},
                {"wgpuDeviceCreateCommandEncoder", reinterpret_cast<WGPUProc>(NativeDeviceCreateCommandEncoder)},
                {"wgpuDeviceCreateComputePipeline", reinterpret_cast<WGPUProc>(NativeDeviceCreateComputePipeline)},
                {"wgpuDeviceCreateComputePipelineAsync", reinterpret_cast<WGPUProc>(NativeDeviceCreateComputePipelineAsync)},
                {"wgpuDeviceCreateErrorBuffer", reinterpret_cast<WGPUProc>(NativeDeviceCreateErrorBuffer)},
                {"wgpuDeviceCreateErrorComputePipeline", reinterpret_cast<WGPUProc>(NativeDeviceCreateErrorComputePipeline)},
                {"wgpuDeviceCreateErrorExternalTexture", reinterpret_cast<WGPUProc>(NativeDeviceCreateErrorExternalTexture)},
                {"wgpuDeviceCreateErrorRenderPipeline", reinterpret_cast<WGPUProc>(NativeDeviceCreateErrorRenderPipeline)},
                {"wgpuDeviceCreateErrorShaderModule", reinterpret_cast<WGPUProc>(NativeDeviceCreateErrorShaderModule)},
                {"wgpuDeviceCreateErrorTexture", reinterpret_cast<WGPUProc>(NativeDeviceCreateErrorTexture)},
                {"wgpuDeviceCreateExternalTexture", reinterpret_cast<WGPUProc>(NativeDeviceCreateExternalTexture)},
                {"wgpuDeviceCreatePipelineLayout", reinterpret_cast<WGPUProc>(NativeDeviceCreatePipelineLayout)},
                {"wgpuDeviceCreateQuerySet", reinterpret_cast<WGPUProc>(NativeDeviceCreateQuerySet)},
                {"wgpuDeviceCreateRenderBundleEncoder", reinterpret_cast<WGPUProc>(NativeDeviceCreateRenderBundleEncoder)},
                {"wgpuDeviceCreateRenderPipeline", reinterpret_cast<WGPUProc>(NativeDeviceCreateRenderPipeline)},
                {"wgpuDeviceCreateRenderPipelineAsync", reinterpret_cast<WGPUProc>(NativeDeviceCreateRenderPipelineAsync)},
                {"wgpuDeviceCreateResourceTable", reinterpret_cast<WGPUProc>(NativeDeviceCreateResourceTable)},
                {"wgpuDeviceCreateSampler", reinterpret_cast<WGPUProc>(NativeDeviceCreateSampler)},
                {"wgpuDeviceCreateShaderModule", reinterpret_cast<WGPUProc>(NativeDeviceCreateShaderModule)},
                {"wgpuDeviceCreateTexture", reinterpret_cast<WGPUProc>(NativeDeviceCreateTexture)},
                {"wgpuDeviceDestroy", reinterpret_cast<WGPUProc>(NativeDeviceDestroy)},
                {"wgpuDeviceForceLoss", reinterpret_cast<WGPUProc>(NativeDeviceForceLoss)},
                {"wgpuDeviceGetAHardwareBufferProperties", reinterpret_cast<WGPUProc>(NativeDeviceGetAHardwareBufferProperties)},
                {"wgpuDeviceGetAdapter", reinterpret_cast<WGPUProc>(NativeDeviceGetAdapter)},
                {"wgpuDeviceGetAdapterInfo", reinterpret_cast<WGPUProc>(NativeDeviceGetAdapterInfo)},
                {"wgpuDeviceGetFeatures", reinterpret_cast<WGPUProc>(NativeDeviceGetFeatures)},
                {"wgpuDeviceGetLimits", reinterpret_cast<WGPUProc>(NativeDeviceGetLimits)},
                {"wgpuDeviceGetLostFuture", reinterpret_cast<WGPUProc>(NativeDeviceGetLostFuture)},
                {"wgpuDeviceGetQueue", reinterpret_cast<WGPUProc>(NativeDeviceGetQueue)},
                {"wgpuDeviceHasFeature", reinterpret_cast<WGPUProc>(NativeDeviceHasFeature)},
                {"wgpuDeviceImportSharedBufferMemory", reinterpret_cast<WGPUProc>(NativeDeviceImportSharedBufferMemory)},
                {"wgpuDeviceImportSharedFence", reinterpret_cast<WGPUProc>(NativeDeviceImportSharedFence)},
                {"wgpuDeviceImportSharedTextureMemory", reinterpret_cast<WGPUProc>(NativeDeviceImportSharedTextureMemory)},
                {"wgpuDeviceInjectError", reinterpret_cast<WGPUProc>(NativeDeviceInjectError)},
                {"wgpuDevicePopErrorScope", reinterpret_cast<WGPUProc>(NativeDevicePopErrorScope)},
                {"wgpuDevicePushErrorScope", reinterpret_cast<WGPUProc>(NativeDevicePushErrorScope)},
                {"wgpuDeviceRelease", reinterpret_cast<WGPUProc>(NativeDeviceRelease)},
                {"wgpuDeviceSetLabel", reinterpret_cast<WGPUProc>(NativeDeviceSetLabel)},
                {"wgpuDeviceSetLoggingCallback", reinterpret_cast<WGPUProc>(NativeDeviceSetLoggingCallback)},
                {"wgpuDeviceTick", reinterpret_cast<WGPUProc>(NativeDeviceTick)},
                {"wgpuDeviceValidateTextureDescriptor", reinterpret_cast<WGPUProc>(NativeDeviceValidateTextureDescriptor)},
                {"wgpuExternalTextureAddRef", reinterpret_cast<WGPUProc>(NativeExternalTextureAddRef)},
                {"wgpuExternalTextureDestroy", reinterpret_cast<WGPUProc>(NativeExternalTextureDestroy)},
                {"wgpuExternalTextureExpire", reinterpret_cast<WGPUProc>(NativeExternalTextureExpire)},
                {"wgpuExternalTextureRefresh", reinterpret_cast<WGPUProc>(NativeExternalTextureRefresh)},
                {"wgpuExternalTextureRelease", reinterpret_cast<WGPUProc>(NativeExternalTextureRelease)},
                {"wgpuExternalTextureSetLabel", reinterpret_cast<WGPUProc>(NativeExternalTextureSetLabel)},
                {"wgpuGetInstanceFeatures", reinterpret_cast<WGPUProc>(NativeGetInstanceFeatures)},
                {"wgpuGetInstanceLimits", reinterpret_cast<WGPUProc>(NativeGetInstanceLimits)},
                {"wgpuGetProcAddress", reinterpret_cast<WGPUProc>(NativeGetProcAddress)},
                {"wgpuHasInstanceFeature", reinterpret_cast<WGPUProc>(NativeHasInstanceFeature)},
                {"wgpuInstanceAddRef", reinterpret_cast<WGPUProc>(NativeInstanceAddRef)},
                {"wgpuInstanceCreateSurface", reinterpret_cast<WGPUProc>(NativeInstanceCreateSurface)},
                {"wgpuInstanceGetWGSLLanguageFeatures", reinterpret_cast<WGPUProc>(NativeInstanceGetWGSLLanguageFeatures)},
                {"wgpuInstanceHasWGSLLanguageFeature", reinterpret_cast<WGPUProc>(NativeInstanceHasWGSLLanguageFeature)},
                {"wgpuInstanceProcessEvents", reinterpret_cast<WGPUProc>(NativeInstanceProcessEvents)},
                {"wgpuInstanceRelease", reinterpret_cast<WGPUProc>(NativeInstanceRelease)},
                {"wgpuInstanceRequestAdapter", reinterpret_cast<WGPUProc>(NativeInstanceRequestAdapter)},
                {"wgpuInstanceWaitAny", reinterpret_cast<WGPUProc>(NativeInstanceWaitAny)},
                {"wgpuPipelineLayoutAddRef", reinterpret_cast<WGPUProc>(NativePipelineLayoutAddRef)},
                {"wgpuPipelineLayoutRelease", reinterpret_cast<WGPUProc>(NativePipelineLayoutRelease)},
                {"wgpuPipelineLayoutSetLabel", reinterpret_cast<WGPUProc>(NativePipelineLayoutSetLabel)},
                {"wgpuQuerySetAddRef", reinterpret_cast<WGPUProc>(NativeQuerySetAddRef)},
                {"wgpuQuerySetDestroy", reinterpret_cast<WGPUProc>(NativeQuerySetDestroy)},
                {"wgpuQuerySetGetCount", reinterpret_cast<WGPUProc>(NativeQuerySetGetCount)},
                {"wgpuQuerySetGetType", reinterpret_cast<WGPUProc>(NativeQuerySetGetType)},
                {"wgpuQuerySetRelease", reinterpret_cast<WGPUProc>(NativeQuerySetRelease)},
                {"wgpuQuerySetSetLabel", reinterpret_cast<WGPUProc>(NativeQuerySetSetLabel)},
                {"wgpuQueueAddRef", reinterpret_cast<WGPUProc>(NativeQueueAddRef)},
                {"wgpuQueueCopyExternalTextureForBrowser", reinterpret_cast<WGPUProc>(NativeQueueCopyExternalTextureForBrowser)},
                {"wgpuQueueCopyTextureForBrowser", reinterpret_cast<WGPUProc>(NativeQueueCopyTextureForBrowser)},
                {"wgpuQueueOnSubmittedWorkDone", reinterpret_cast<WGPUProc>(NativeQueueOnSubmittedWorkDone)},
                {"wgpuQueueRelease", reinterpret_cast<WGPUProc>(NativeQueueRelease)},
                {"wgpuQueueSetLabel", reinterpret_cast<WGPUProc>(NativeQueueSetLabel)},
                {"wgpuQueueSubmit", reinterpret_cast<WGPUProc>(NativeQueueSubmit)},
                {"wgpuQueueWriteBuffer", reinterpret_cast<WGPUProc>(NativeQueueWriteBuffer)},
                {"wgpuQueueWriteTexture", reinterpret_cast<WGPUProc>(NativeQueueWriteTexture)},
                {"wgpuRenderBundleAddRef", reinterpret_cast<WGPUProc>(NativeRenderBundleAddRef)},
                {"wgpuRenderBundleEncoderAddRef", reinterpret_cast<WGPUProc>(NativeRenderBundleEncoderAddRef)},
                {"wgpuRenderBundleEncoderDraw", reinterpret_cast<WGPUProc>(NativeRenderBundleEncoderDraw)},
                {"wgpuRenderBundleEncoderDrawIndexed", reinterpret_cast<WGPUProc>(NativeRenderBundleEncoderDrawIndexed)},
                {"wgpuRenderBundleEncoderDrawIndexedIndirect", reinterpret_cast<WGPUProc>(NativeRenderBundleEncoderDrawIndexedIndirect)},
                {"wgpuRenderBundleEncoderDrawIndirect", reinterpret_cast<WGPUProc>(NativeRenderBundleEncoderDrawIndirect)},
                {"wgpuRenderBundleEncoderFinish", reinterpret_cast<WGPUProc>(NativeRenderBundleEncoderFinish)},
                {"wgpuRenderBundleEncoderInsertDebugMarker", reinterpret_cast<WGPUProc>(NativeRenderBundleEncoderInsertDebugMarker)},
                {"wgpuRenderBundleEncoderPopDebugGroup", reinterpret_cast<WGPUProc>(NativeRenderBundleEncoderPopDebugGroup)},
                {"wgpuRenderBundleEncoderPushDebugGroup", reinterpret_cast<WGPUProc>(NativeRenderBundleEncoderPushDebugGroup)},
                {"wgpuRenderBundleEncoderRelease", reinterpret_cast<WGPUProc>(NativeRenderBundleEncoderRelease)},
                {"wgpuRenderBundleEncoderSetBindGroup", reinterpret_cast<WGPUProc>(NativeRenderBundleEncoderSetBindGroup)},
                {"wgpuRenderBundleEncoderSetImmediates", reinterpret_cast<WGPUProc>(NativeRenderBundleEncoderSetImmediates)},
                {"wgpuRenderBundleEncoderSetIndexBuffer", reinterpret_cast<WGPUProc>(NativeRenderBundleEncoderSetIndexBuffer)},
                {"wgpuRenderBundleEncoderSetLabel", reinterpret_cast<WGPUProc>(NativeRenderBundleEncoderSetLabel)},
                {"wgpuRenderBundleEncoderSetPipeline", reinterpret_cast<WGPUProc>(NativeRenderBundleEncoderSetPipeline)},
                {"wgpuRenderBundleEncoderSetVertexBuffer", reinterpret_cast<WGPUProc>(NativeRenderBundleEncoderSetVertexBuffer)},
                {"wgpuRenderBundleRelease", reinterpret_cast<WGPUProc>(NativeRenderBundleRelease)},
                {"wgpuRenderBundleSetLabel", reinterpret_cast<WGPUProc>(NativeRenderBundleSetLabel)},
                {"wgpuRenderPassEncoderAddRef", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderAddRef)},
                {"wgpuRenderPassEncoderBeginOcclusionQuery", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderBeginOcclusionQuery)},
                {"wgpuRenderPassEncoderDraw", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderDraw)},
                {"wgpuRenderPassEncoderDrawIndexed", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderDrawIndexed)},
                {"wgpuRenderPassEncoderDrawIndexedIndirect", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderDrawIndexedIndirect)},
                {"wgpuRenderPassEncoderDrawIndirect", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderDrawIndirect)},
                {"wgpuRenderPassEncoderEnd", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderEnd)},
                {"wgpuRenderPassEncoderEndOcclusionQuery", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderEndOcclusionQuery)},
                {"wgpuRenderPassEncoderExecuteBundles", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderExecuteBundles)},
                {"wgpuRenderPassEncoderInsertDebugMarker", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderInsertDebugMarker)},
                {"wgpuRenderPassEncoderMultiDrawIndexedIndirect", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderMultiDrawIndexedIndirect)},
                {"wgpuRenderPassEncoderMultiDrawIndirect", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderMultiDrawIndirect)},
                {"wgpuRenderPassEncoderPixelLocalStorageBarrier", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderPixelLocalStorageBarrier)},
                {"wgpuRenderPassEncoderPopDebugGroup", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderPopDebugGroup)},
                {"wgpuRenderPassEncoderPushDebugGroup", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderPushDebugGroup)},
                {"wgpuRenderPassEncoderRelease", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderRelease)},
                {"wgpuRenderPassEncoderSetBindGroup", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderSetBindGroup)},
                {"wgpuRenderPassEncoderSetBlendConstant", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderSetBlendConstant)},
                {"wgpuRenderPassEncoderSetImmediates", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderSetImmediates)},
                {"wgpuRenderPassEncoderSetIndexBuffer", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderSetIndexBuffer)},
                {"wgpuRenderPassEncoderSetLabel", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderSetLabel)},
                {"wgpuRenderPassEncoderSetPipeline", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderSetPipeline)},
                {"wgpuRenderPassEncoderSetResourceTable", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderSetResourceTable)},
                {"wgpuRenderPassEncoderSetScissorRect", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderSetScissorRect)},
                {"wgpuRenderPassEncoderSetStencilReference", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderSetStencilReference)},
                {"wgpuRenderPassEncoderSetVertexBuffer", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderSetVertexBuffer)},
                {"wgpuRenderPassEncoderSetViewport", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderSetViewport)},
                {"wgpuRenderPassEncoderWriteTimestamp", reinterpret_cast<WGPUProc>(NativeRenderPassEncoderWriteTimestamp)},
                {"wgpuRenderPipelineAddRef", reinterpret_cast<WGPUProc>(NativeRenderPipelineAddRef)},
                {"wgpuRenderPipelineGetBindGroupLayout", reinterpret_cast<WGPUProc>(NativeRenderPipelineGetBindGroupLayout)},
                {"wgpuRenderPipelineRelease", reinterpret_cast<WGPUProc>(NativeRenderPipelineRelease)},
                {"wgpuRenderPipelineSetLabel", reinterpret_cast<WGPUProc>(NativeRenderPipelineSetLabel)},
                {"wgpuResourceTableAddRef", reinterpret_cast<WGPUProc>(NativeResourceTableAddRef)},
                {"wgpuResourceTableDestroy", reinterpret_cast<WGPUProc>(NativeResourceTableDestroy)},
                {"wgpuResourceTableGetSize", reinterpret_cast<WGPUProc>(NativeResourceTableGetSize)},
                {"wgpuResourceTableInsert", reinterpret_cast<WGPUProc>(NativeResourceTableInsert)},
                {"wgpuResourceTableRelease", reinterpret_cast<WGPUProc>(NativeResourceTableRelease)},
                {"wgpuResourceTableRemove", reinterpret_cast<WGPUProc>(NativeResourceTableRemove)},
                {"wgpuResourceTableSetLabel", reinterpret_cast<WGPUProc>(NativeResourceTableSetLabel)},
                {"wgpuResourceTableUpdate", reinterpret_cast<WGPUProc>(NativeResourceTableUpdate)},
                {"wgpuSamplerAddRef", reinterpret_cast<WGPUProc>(NativeSamplerAddRef)},
                {"wgpuSamplerRelease", reinterpret_cast<WGPUProc>(NativeSamplerRelease)},
                {"wgpuSamplerSetLabel", reinterpret_cast<WGPUProc>(NativeSamplerSetLabel)},
                {"wgpuShaderModuleAddRef", reinterpret_cast<WGPUProc>(NativeShaderModuleAddRef)},
                {"wgpuShaderModuleGetCompilationInfo", reinterpret_cast<WGPUProc>(NativeShaderModuleGetCompilationInfo)},
                {"wgpuShaderModuleRelease", reinterpret_cast<WGPUProc>(NativeShaderModuleRelease)},
                {"wgpuShaderModuleSetLabel", reinterpret_cast<WGPUProc>(NativeShaderModuleSetLabel)},
                {"wgpuSharedBufferMemoryAddRef", reinterpret_cast<WGPUProc>(NativeSharedBufferMemoryAddRef)},
                {"wgpuSharedBufferMemoryBeginAccess", reinterpret_cast<WGPUProc>(NativeSharedBufferMemoryBeginAccess)},
                {"wgpuSharedBufferMemoryCreateBuffer", reinterpret_cast<WGPUProc>(NativeSharedBufferMemoryCreateBuffer)},
                {"wgpuSharedBufferMemoryEndAccess", reinterpret_cast<WGPUProc>(NativeSharedBufferMemoryEndAccess)},
                {"wgpuSharedBufferMemoryEndAccessStateFreeMembers", reinterpret_cast<WGPUProc>(NativeSharedBufferMemoryEndAccessStateFreeMembers)},
                {"wgpuSharedBufferMemoryGetProperties", reinterpret_cast<WGPUProc>(NativeSharedBufferMemoryGetProperties)},
                {"wgpuSharedBufferMemoryIsDeviceLost", reinterpret_cast<WGPUProc>(NativeSharedBufferMemoryIsDeviceLost)},
                {"wgpuSharedBufferMemoryRelease", reinterpret_cast<WGPUProc>(NativeSharedBufferMemoryRelease)},
                {"wgpuSharedBufferMemorySetLabel", reinterpret_cast<WGPUProc>(NativeSharedBufferMemorySetLabel)},
                {"wgpuSharedFenceAddRef", reinterpret_cast<WGPUProc>(NativeSharedFenceAddRef)},
                {"wgpuSharedFenceExportInfo", reinterpret_cast<WGPUProc>(NativeSharedFenceExportInfo)},
                {"wgpuSharedFenceRelease", reinterpret_cast<WGPUProc>(NativeSharedFenceRelease)},
                {"wgpuSharedFenceSetLabel", reinterpret_cast<WGPUProc>(NativeSharedFenceSetLabel)},
                {"wgpuSharedTextureMemoryAddRef", reinterpret_cast<WGPUProc>(NativeSharedTextureMemoryAddRef)},
                {"wgpuSharedTextureMemoryBeginAccess", reinterpret_cast<WGPUProc>(NativeSharedTextureMemoryBeginAccess)},
                {"wgpuSharedTextureMemoryCreateTexture", reinterpret_cast<WGPUProc>(NativeSharedTextureMemoryCreateTexture)},
                {"wgpuSharedTextureMemoryEndAccess", reinterpret_cast<WGPUProc>(NativeSharedTextureMemoryEndAccess)},
                {"wgpuSharedTextureMemoryEndAccessStateFreeMembers", reinterpret_cast<WGPUProc>(NativeSharedTextureMemoryEndAccessStateFreeMembers)},
                {"wgpuSharedTextureMemoryGetProperties", reinterpret_cast<WGPUProc>(NativeSharedTextureMemoryGetProperties)},
                {"wgpuSharedTextureMemoryIsDeviceLost", reinterpret_cast<WGPUProc>(NativeSharedTextureMemoryIsDeviceLost)},
                {"wgpuSharedTextureMemoryRelease", reinterpret_cast<WGPUProc>(NativeSharedTextureMemoryRelease)},
                {"wgpuSharedTextureMemorySetLabel", reinterpret_cast<WGPUProc>(NativeSharedTextureMemorySetLabel)},
                {"wgpuSupportedFeaturesFreeMembers", reinterpret_cast<WGPUProc>(NativeSupportedFeaturesFreeMembers)},
                {"wgpuSupportedInstanceFeaturesFreeMembers", reinterpret_cast<WGPUProc>(NativeSupportedInstanceFeaturesFreeMembers)},
                {"wgpuSupportedWGSLLanguageFeaturesFreeMembers", reinterpret_cast<WGPUProc>(NativeSupportedWGSLLanguageFeaturesFreeMembers)},
                {"wgpuSurfaceAddRef", reinterpret_cast<WGPUProc>(NativeSurfaceAddRef)},
                {"wgpuSurfaceCapabilitiesFreeMembers", reinterpret_cast<WGPUProc>(NativeSurfaceCapabilitiesFreeMembers)},
                {"wgpuSurfaceConfigure", reinterpret_cast<WGPUProc>(NativeSurfaceConfigure)},
                {"wgpuSurfaceGetCapabilities", reinterpret_cast<WGPUProc>(NativeSurfaceGetCapabilities)},
                {"wgpuSurfaceGetCurrentTexture", reinterpret_cast<WGPUProc>(NativeSurfaceGetCurrentTexture)},
                {"wgpuSurfacePresent", reinterpret_cast<WGPUProc>(NativeSurfacePresent)},
                {"wgpuSurfaceRelease", reinterpret_cast<WGPUProc>(NativeSurfaceRelease)},
                {"wgpuSurfaceSetLabel", reinterpret_cast<WGPUProc>(NativeSurfaceSetLabel)},
                {"wgpuSurfaceUnconfigure", reinterpret_cast<WGPUProc>(NativeSurfaceUnconfigure)},
                {"wgpuTexelBufferViewAddRef", reinterpret_cast<WGPUProc>(NativeTexelBufferViewAddRef)},
                {"wgpuTexelBufferViewRelease", reinterpret_cast<WGPUProc>(NativeTexelBufferViewRelease)},
                {"wgpuTexelBufferViewSetLabel", reinterpret_cast<WGPUProc>(NativeTexelBufferViewSetLabel)},
                {"wgpuTextureAddRef", reinterpret_cast<WGPUProc>(NativeTextureAddRef)},
                {"wgpuTextureCreateErrorView", reinterpret_cast<WGPUProc>(NativeTextureCreateErrorView)},
                {"wgpuTextureCreateView", reinterpret_cast<WGPUProc>(NativeTextureCreateView)},
                {"wgpuTextureDestroy", reinterpret_cast<WGPUProc>(NativeTextureDestroy)},
                {"wgpuTextureGetDepthOrArrayLayers", reinterpret_cast<WGPUProc>(NativeTextureGetDepthOrArrayLayers)},
                {"wgpuTextureGetDimension", reinterpret_cast<WGPUProc>(NativeTextureGetDimension)},
                {"wgpuTextureGetFormat", reinterpret_cast<WGPUProc>(NativeTextureGetFormat)},
                {"wgpuTextureGetHeight", reinterpret_cast<WGPUProc>(NativeTextureGetHeight)},
                {"wgpuTextureGetMipLevelCount", reinterpret_cast<WGPUProc>(NativeTextureGetMipLevelCount)},
                {"wgpuTextureGetSampleCount", reinterpret_cast<WGPUProc>(NativeTextureGetSampleCount)},
                {"wgpuTextureGetTextureBindingViewDimension", reinterpret_cast<WGPUProc>(NativeTextureGetTextureBindingViewDimension)},
                {"wgpuTextureGetUsage", reinterpret_cast<WGPUProc>(NativeTextureGetUsage)},
                {"wgpuTextureGetWidth", reinterpret_cast<WGPUProc>(NativeTextureGetWidth)},
                {"wgpuTextureRelease", reinterpret_cast<WGPUProc>(NativeTextureRelease)},
                {"wgpuTextureSetLabel", reinterpret_cast<WGPUProc>(NativeTextureSetLabel)},
                {"wgpuTextureSetOwnershipForMemoryDump", reinterpret_cast<WGPUProc>(NativeTextureSetOwnershipForMemoryDump)},
                {"wgpuTextureViewAddRef", reinterpret_cast<WGPUProc>(NativeTextureViewAddRef)},
                {"wgpuTextureViewRelease", reinterpret_cast<WGPUProc>(NativeTextureViewRelease)},
                {"wgpuTextureViewSetLabel", reinterpret_cast<WGPUProc>(NativeTextureViewSetLabel)},
            });

        std::string_view procName(cProcName.data, cProcName.length != WGPU_STRLEN ? cProcName.length : strlen(cProcName.data));
        auto it = sProcMap->find(procName);
        return it != sProcMap->end() ? it->second : nullptr;
    }

    constexpr DawnProcTable MakeProcTable() {
        DawnProcTable procs = {};
        std::ranges::copy(dawn::kDawnVersion, procs.version);
        procs.createInstance = NativeCreateInstance;
        procs.getInstanceFeatures = NativeGetInstanceFeatures;
        procs.getInstanceLimits = NativeGetInstanceLimits;
        procs.hasInstanceFeature = NativeHasInstanceFeature;
        procs.getProcAddress = NativeGetProcAddress;
        procs.adapterCreateDevice = NativeAdapterCreateDevice;
        procs.adapterGetFeatures = NativeAdapterGetFeatures;
        procs.adapterGetFormatCapabilities = NativeAdapterGetFormatCapabilities;
        procs.adapterGetInfo = NativeAdapterGetInfo;
        procs.adapterGetInstance = NativeAdapterGetInstance;
        procs.adapterGetLimits = NativeAdapterGetLimits;
        procs.adapterHasFeature = NativeAdapterHasFeature;
        procs.adapterRequestDevice = NativeAdapterRequestDevice;
        procs.adapterAddRef = NativeAdapterAddRef;
        procs.adapterRelease = NativeAdapterRelease;
        procs.adapterInfoFreeMembers = NativeAdapterInfoFreeMembers;
        procs.adapterPropertiesMemoryHeapsFreeMembers = NativeAdapterPropertiesMemoryHeapsFreeMembers;
        procs.adapterPropertiesSubgroupMatrixConfigsFreeMembers = NativeAdapterPropertiesSubgroupMatrixConfigsFreeMembers;
        procs.bindGroupSetLabel = NativeBindGroupSetLabel;
        procs.bindGroupAddRef = NativeBindGroupAddRef;
        procs.bindGroupRelease = NativeBindGroupRelease;
        procs.bindGroupLayoutSetLabel = NativeBindGroupLayoutSetLabel;
        procs.bindGroupLayoutAddRef = NativeBindGroupLayoutAddRef;
        procs.bindGroupLayoutRelease = NativeBindGroupLayoutRelease;
        procs.bufferCreateTexelView = NativeBufferCreateTexelView;
        procs.bufferDestroy = NativeBufferDestroy;
        procs.bufferGetConstMappedRange = NativeBufferGetConstMappedRange;
        procs.bufferGetMappedRange = NativeBufferGetMappedRange;
        procs.bufferGetMapState = NativeBufferGetMapState;
        procs.bufferGetSize = NativeBufferGetSize;
        procs.bufferGetUsage = NativeBufferGetUsage;
        procs.bufferMapAsync = NativeBufferMapAsync;
        procs.bufferReadMappedRange = NativeBufferReadMappedRange;
        procs.bufferSetLabel = NativeBufferSetLabel;
        procs.bufferUnmap = NativeBufferUnmap;
        procs.bufferWriteMappedRange = NativeBufferWriteMappedRange;
        procs.bufferAddRef = NativeBufferAddRef;
        procs.bufferRelease = NativeBufferRelease;
        procs.commandBufferSetLabel = NativeCommandBufferSetLabel;
        procs.commandBufferAddRef = NativeCommandBufferAddRef;
        procs.commandBufferRelease = NativeCommandBufferRelease;
        procs.commandEncoderBeginComputePass = NativeCommandEncoderBeginComputePass;
        procs.commandEncoderBeginRenderPass = NativeCommandEncoderBeginRenderPass;
        procs.commandEncoderClearBuffer = NativeCommandEncoderClearBuffer;
        procs.commandEncoderCopyBufferToBuffer = NativeCommandEncoderCopyBufferToBuffer;
        procs.commandEncoderCopyBufferToTexture = NativeCommandEncoderCopyBufferToTexture;
        procs.commandEncoderCopyTextureToBuffer = NativeCommandEncoderCopyTextureToBuffer;
        procs.commandEncoderCopyTextureToTexture = NativeCommandEncoderCopyTextureToTexture;
        procs.commandEncoderFinish = NativeCommandEncoderFinish;
        procs.commandEncoderInjectValidationError = NativeCommandEncoderInjectValidationError;
        procs.commandEncoderInsertDebugMarker = NativeCommandEncoderInsertDebugMarker;
        procs.commandEncoderPopDebugGroup = NativeCommandEncoderPopDebugGroup;
        procs.commandEncoderPushDebugGroup = NativeCommandEncoderPushDebugGroup;
        procs.commandEncoderResolveQuerySet = NativeCommandEncoderResolveQuerySet;
        procs.commandEncoderSetLabel = NativeCommandEncoderSetLabel;
        procs.commandEncoderWriteBuffer = NativeCommandEncoderWriteBuffer;
        procs.commandEncoderWriteTimestamp = NativeCommandEncoderWriteTimestamp;
        procs.commandEncoderAddRef = NativeCommandEncoderAddRef;
        procs.commandEncoderRelease = NativeCommandEncoderRelease;
        procs.computePassEncoderDispatchWorkgroups = NativeComputePassEncoderDispatchWorkgroups;
        procs.computePassEncoderDispatchWorkgroupsIndirect = NativeComputePassEncoderDispatchWorkgroupsIndirect;
        procs.computePassEncoderEnd = NativeComputePassEncoderEnd;
        procs.computePassEncoderInsertDebugMarker = NativeComputePassEncoderInsertDebugMarker;
        procs.computePassEncoderPopDebugGroup = NativeComputePassEncoderPopDebugGroup;
        procs.computePassEncoderPushDebugGroup = NativeComputePassEncoderPushDebugGroup;
        procs.computePassEncoderSetBindGroup = NativeComputePassEncoderSetBindGroup;
        procs.computePassEncoderSetImmediates = NativeComputePassEncoderSetImmediates;
        procs.computePassEncoderSetLabel = NativeComputePassEncoderSetLabel;
        procs.computePassEncoderSetPipeline = NativeComputePassEncoderSetPipeline;
        procs.computePassEncoderSetResourceTable = NativeComputePassEncoderSetResourceTable;
        procs.computePassEncoderWriteTimestamp = NativeComputePassEncoderWriteTimestamp;
        procs.computePassEncoderAddRef = NativeComputePassEncoderAddRef;
        procs.computePassEncoderRelease = NativeComputePassEncoderRelease;
        procs.computePipelineGetBindGroupLayout = NativeComputePipelineGetBindGroupLayout;
        procs.computePipelineSetLabel = NativeComputePipelineSetLabel;
        procs.computePipelineAddRef = NativeComputePipelineAddRef;
        procs.computePipelineRelease = NativeComputePipelineRelease;
        procs.dawnDrmFormatCapabilitiesFreeMembers = NativeDawnDrmFormatCapabilitiesFreeMembers;
        procs.deviceCreateBindGroup = NativeDeviceCreateBindGroup;
        procs.deviceCreateBindGroupLayout = NativeDeviceCreateBindGroupLayout;
        procs.deviceCreateBuffer = NativeDeviceCreateBuffer;
        procs.deviceCreateCommandEncoder = NativeDeviceCreateCommandEncoder;
        procs.deviceCreateComputePipeline = NativeDeviceCreateComputePipeline;
        procs.deviceCreateComputePipelineAsync = NativeDeviceCreateComputePipelineAsync;
        procs.deviceCreateErrorBuffer = NativeDeviceCreateErrorBuffer;
        procs.deviceCreateErrorComputePipeline = NativeDeviceCreateErrorComputePipeline;
        procs.deviceCreateErrorExternalTexture = NativeDeviceCreateErrorExternalTexture;
        procs.deviceCreateErrorRenderPipeline = NativeDeviceCreateErrorRenderPipeline;
        procs.deviceCreateErrorShaderModule = NativeDeviceCreateErrorShaderModule;
        procs.deviceCreateErrorTexture = NativeDeviceCreateErrorTexture;
        procs.deviceCreateExternalTexture = NativeDeviceCreateExternalTexture;
        procs.deviceCreatePipelineLayout = NativeDeviceCreatePipelineLayout;
        procs.deviceCreateQuerySet = NativeDeviceCreateQuerySet;
        procs.deviceCreateRenderBundleEncoder = NativeDeviceCreateRenderBundleEncoder;
        procs.deviceCreateRenderPipeline = NativeDeviceCreateRenderPipeline;
        procs.deviceCreateRenderPipelineAsync = NativeDeviceCreateRenderPipelineAsync;
        procs.deviceCreateResourceTable = NativeDeviceCreateResourceTable;
        procs.deviceCreateSampler = NativeDeviceCreateSampler;
        procs.deviceCreateShaderModule = NativeDeviceCreateShaderModule;
        procs.deviceCreateTexture = NativeDeviceCreateTexture;
        procs.deviceDestroy = NativeDeviceDestroy;
        procs.deviceForceLoss = NativeDeviceForceLoss;
        procs.deviceGetAdapter = NativeDeviceGetAdapter;
        procs.deviceGetAdapterInfo = NativeDeviceGetAdapterInfo;
        procs.deviceGetAHardwareBufferProperties = NativeDeviceGetAHardwareBufferProperties;
        procs.deviceGetFeatures = NativeDeviceGetFeatures;
        procs.deviceGetLimits = NativeDeviceGetLimits;
        procs.deviceGetLostFuture = NativeDeviceGetLostFuture;
        procs.deviceGetQueue = NativeDeviceGetQueue;
        procs.deviceHasFeature = NativeDeviceHasFeature;
        procs.deviceImportSharedBufferMemory = NativeDeviceImportSharedBufferMemory;
        procs.deviceImportSharedFence = NativeDeviceImportSharedFence;
        procs.deviceImportSharedTextureMemory = NativeDeviceImportSharedTextureMemory;
        procs.deviceInjectError = NativeDeviceInjectError;
        procs.devicePopErrorScope = NativeDevicePopErrorScope;
        procs.devicePushErrorScope = NativeDevicePushErrorScope;
        procs.deviceSetLabel = NativeDeviceSetLabel;
        procs.deviceSetLoggingCallback = NativeDeviceSetLoggingCallback;
        procs.deviceTick = NativeDeviceTick;
        procs.deviceValidateTextureDescriptor = NativeDeviceValidateTextureDescriptor;
        procs.deviceAddRef = NativeDeviceAddRef;
        procs.deviceRelease = NativeDeviceRelease;
        procs.externalTextureDestroy = NativeExternalTextureDestroy;
        procs.externalTextureExpire = NativeExternalTextureExpire;
        procs.externalTextureRefresh = NativeExternalTextureRefresh;
        procs.externalTextureSetLabel = NativeExternalTextureSetLabel;
        procs.externalTextureAddRef = NativeExternalTextureAddRef;
        procs.externalTextureRelease = NativeExternalTextureRelease;
        procs.instanceCreateSurface = NativeInstanceCreateSurface;
        procs.instanceGetWGSLLanguageFeatures = NativeInstanceGetWGSLLanguageFeatures;
        procs.instanceHasWGSLLanguageFeature = NativeInstanceHasWGSLLanguageFeature;
        procs.instanceProcessEvents = NativeInstanceProcessEvents;
        procs.instanceRequestAdapter = NativeInstanceRequestAdapter;
        procs.instanceWaitAny = NativeInstanceWaitAny;
        procs.instanceAddRef = NativeInstanceAddRef;
        procs.instanceRelease = NativeInstanceRelease;
        procs.pipelineLayoutSetLabel = NativePipelineLayoutSetLabel;
        procs.pipelineLayoutAddRef = NativePipelineLayoutAddRef;
        procs.pipelineLayoutRelease = NativePipelineLayoutRelease;
        procs.querySetDestroy = NativeQuerySetDestroy;
        procs.querySetGetCount = NativeQuerySetGetCount;
        procs.querySetGetType = NativeQuerySetGetType;
        procs.querySetSetLabel = NativeQuerySetSetLabel;
        procs.querySetAddRef = NativeQuerySetAddRef;
        procs.querySetRelease = NativeQuerySetRelease;
        procs.queueCopyExternalTextureForBrowser = NativeQueueCopyExternalTextureForBrowser;
        procs.queueCopyTextureForBrowser = NativeQueueCopyTextureForBrowser;
        procs.queueOnSubmittedWorkDone = NativeQueueOnSubmittedWorkDone;
        procs.queueSetLabel = NativeQueueSetLabel;
        procs.queueSubmit = NativeQueueSubmit;
        procs.queueWriteBuffer = NativeQueueWriteBuffer;
        procs.queueWriteTexture = NativeQueueWriteTexture;
        procs.queueAddRef = NativeQueueAddRef;
        procs.queueRelease = NativeQueueRelease;
        procs.renderBundleSetLabel = NativeRenderBundleSetLabel;
        procs.renderBundleAddRef = NativeRenderBundleAddRef;
        procs.renderBundleRelease = NativeRenderBundleRelease;
        procs.renderBundleEncoderDraw = NativeRenderBundleEncoderDraw;
        procs.renderBundleEncoderDrawIndexed = NativeRenderBundleEncoderDrawIndexed;
        procs.renderBundleEncoderDrawIndexedIndirect = NativeRenderBundleEncoderDrawIndexedIndirect;
        procs.renderBundleEncoderDrawIndirect = NativeRenderBundleEncoderDrawIndirect;
        procs.renderBundleEncoderFinish = NativeRenderBundleEncoderFinish;
        procs.renderBundleEncoderInsertDebugMarker = NativeRenderBundleEncoderInsertDebugMarker;
        procs.renderBundleEncoderPopDebugGroup = NativeRenderBundleEncoderPopDebugGroup;
        procs.renderBundleEncoderPushDebugGroup = NativeRenderBundleEncoderPushDebugGroup;
        procs.renderBundleEncoderSetBindGroup = NativeRenderBundleEncoderSetBindGroup;
        procs.renderBundleEncoderSetImmediates = NativeRenderBundleEncoderSetImmediates;
        procs.renderBundleEncoderSetIndexBuffer = NativeRenderBundleEncoderSetIndexBuffer;
        procs.renderBundleEncoderSetLabel = NativeRenderBundleEncoderSetLabel;
        procs.renderBundleEncoderSetPipeline = NativeRenderBundleEncoderSetPipeline;
        procs.renderBundleEncoderSetVertexBuffer = NativeRenderBundleEncoderSetVertexBuffer;
        procs.renderBundleEncoderAddRef = NativeRenderBundleEncoderAddRef;
        procs.renderBundleEncoderRelease = NativeRenderBundleEncoderRelease;
        procs.renderPassEncoderBeginOcclusionQuery = NativeRenderPassEncoderBeginOcclusionQuery;
        procs.renderPassEncoderDraw = NativeRenderPassEncoderDraw;
        procs.renderPassEncoderDrawIndexed = NativeRenderPassEncoderDrawIndexed;
        procs.renderPassEncoderDrawIndexedIndirect = NativeRenderPassEncoderDrawIndexedIndirect;
        procs.renderPassEncoderDrawIndirect = NativeRenderPassEncoderDrawIndirect;
        procs.renderPassEncoderEnd = NativeRenderPassEncoderEnd;
        procs.renderPassEncoderEndOcclusionQuery = NativeRenderPassEncoderEndOcclusionQuery;
        procs.renderPassEncoderExecuteBundles = NativeRenderPassEncoderExecuteBundles;
        procs.renderPassEncoderInsertDebugMarker = NativeRenderPassEncoderInsertDebugMarker;
        procs.renderPassEncoderMultiDrawIndexedIndirect = NativeRenderPassEncoderMultiDrawIndexedIndirect;
        procs.renderPassEncoderMultiDrawIndirect = NativeRenderPassEncoderMultiDrawIndirect;
        procs.renderPassEncoderPixelLocalStorageBarrier = NativeRenderPassEncoderPixelLocalStorageBarrier;
        procs.renderPassEncoderPopDebugGroup = NativeRenderPassEncoderPopDebugGroup;
        procs.renderPassEncoderPushDebugGroup = NativeRenderPassEncoderPushDebugGroup;
        procs.renderPassEncoderSetBindGroup = NativeRenderPassEncoderSetBindGroup;
        procs.renderPassEncoderSetBlendConstant = NativeRenderPassEncoderSetBlendConstant;
        procs.renderPassEncoderSetImmediates = NativeRenderPassEncoderSetImmediates;
        procs.renderPassEncoderSetIndexBuffer = NativeRenderPassEncoderSetIndexBuffer;
        procs.renderPassEncoderSetLabel = NativeRenderPassEncoderSetLabel;
        procs.renderPassEncoderSetPipeline = NativeRenderPassEncoderSetPipeline;
        procs.renderPassEncoderSetResourceTable = NativeRenderPassEncoderSetResourceTable;
        procs.renderPassEncoderSetScissorRect = NativeRenderPassEncoderSetScissorRect;
        procs.renderPassEncoderSetStencilReference = NativeRenderPassEncoderSetStencilReference;
        procs.renderPassEncoderSetVertexBuffer = NativeRenderPassEncoderSetVertexBuffer;
        procs.renderPassEncoderSetViewport = NativeRenderPassEncoderSetViewport;
        procs.renderPassEncoderWriteTimestamp = NativeRenderPassEncoderWriteTimestamp;
        procs.renderPassEncoderAddRef = NativeRenderPassEncoderAddRef;
        procs.renderPassEncoderRelease = NativeRenderPassEncoderRelease;
        procs.renderPipelineGetBindGroupLayout = NativeRenderPipelineGetBindGroupLayout;
        procs.renderPipelineSetLabel = NativeRenderPipelineSetLabel;
        procs.renderPipelineAddRef = NativeRenderPipelineAddRef;
        procs.renderPipelineRelease = NativeRenderPipelineRelease;
        procs.resourceTableDestroy = NativeResourceTableDestroy;
        procs.resourceTableGetSize = NativeResourceTableGetSize;
        procs.resourceTableInsert = NativeResourceTableInsert;
        procs.resourceTableRemove = NativeResourceTableRemove;
        procs.resourceTableSetLabel = NativeResourceTableSetLabel;
        procs.resourceTableUpdate = NativeResourceTableUpdate;
        procs.resourceTableAddRef = NativeResourceTableAddRef;
        procs.resourceTableRelease = NativeResourceTableRelease;
        procs.samplerSetLabel = NativeSamplerSetLabel;
        procs.samplerAddRef = NativeSamplerAddRef;
        procs.samplerRelease = NativeSamplerRelease;
        procs.shaderModuleGetCompilationInfo = NativeShaderModuleGetCompilationInfo;
        procs.shaderModuleSetLabel = NativeShaderModuleSetLabel;
        procs.shaderModuleAddRef = NativeShaderModuleAddRef;
        procs.shaderModuleRelease = NativeShaderModuleRelease;
        procs.sharedBufferMemoryBeginAccess = NativeSharedBufferMemoryBeginAccess;
        procs.sharedBufferMemoryCreateBuffer = NativeSharedBufferMemoryCreateBuffer;
        procs.sharedBufferMemoryEndAccess = NativeSharedBufferMemoryEndAccess;
        procs.sharedBufferMemoryGetProperties = NativeSharedBufferMemoryGetProperties;
        procs.sharedBufferMemoryIsDeviceLost = NativeSharedBufferMemoryIsDeviceLost;
        procs.sharedBufferMemorySetLabel = NativeSharedBufferMemorySetLabel;
        procs.sharedBufferMemoryAddRef = NativeSharedBufferMemoryAddRef;
        procs.sharedBufferMemoryRelease = NativeSharedBufferMemoryRelease;
        procs.sharedBufferMemoryEndAccessStateFreeMembers = NativeSharedBufferMemoryEndAccessStateFreeMembers;
        procs.sharedFenceExportInfo = NativeSharedFenceExportInfo;
        procs.sharedFenceSetLabel = NativeSharedFenceSetLabel;
        procs.sharedFenceAddRef = NativeSharedFenceAddRef;
        procs.sharedFenceRelease = NativeSharedFenceRelease;
        procs.sharedTextureMemoryBeginAccess = NativeSharedTextureMemoryBeginAccess;
        procs.sharedTextureMemoryCreateTexture = NativeSharedTextureMemoryCreateTexture;
        procs.sharedTextureMemoryEndAccess = NativeSharedTextureMemoryEndAccess;
        procs.sharedTextureMemoryGetProperties = NativeSharedTextureMemoryGetProperties;
        procs.sharedTextureMemoryIsDeviceLost = NativeSharedTextureMemoryIsDeviceLost;
        procs.sharedTextureMemorySetLabel = NativeSharedTextureMemorySetLabel;
        procs.sharedTextureMemoryAddRef = NativeSharedTextureMemoryAddRef;
        procs.sharedTextureMemoryRelease = NativeSharedTextureMemoryRelease;
        procs.sharedTextureMemoryEndAccessStateFreeMembers = NativeSharedTextureMemoryEndAccessStateFreeMembers;
        procs.supportedFeaturesFreeMembers = NativeSupportedFeaturesFreeMembers;
        procs.supportedInstanceFeaturesFreeMembers = NativeSupportedInstanceFeaturesFreeMembers;
        procs.supportedWGSLLanguageFeaturesFreeMembers = NativeSupportedWGSLLanguageFeaturesFreeMembers;
        procs.surfaceConfigure = NativeSurfaceConfigure;
        procs.surfaceGetCapabilities = NativeSurfaceGetCapabilities;
        procs.surfaceGetCurrentTexture = NativeSurfaceGetCurrentTexture;
        procs.surfacePresent = NativeSurfacePresent;
        procs.surfaceSetLabel = NativeSurfaceSetLabel;
        procs.surfaceUnconfigure = NativeSurfaceUnconfigure;
        procs.surfaceAddRef = NativeSurfaceAddRef;
        procs.surfaceRelease = NativeSurfaceRelease;
        procs.surfaceCapabilitiesFreeMembers = NativeSurfaceCapabilitiesFreeMembers;
        procs.texelBufferViewSetLabel = NativeTexelBufferViewSetLabel;
        procs.texelBufferViewAddRef = NativeTexelBufferViewAddRef;
        procs.texelBufferViewRelease = NativeTexelBufferViewRelease;
        procs.textureCreateErrorView = NativeTextureCreateErrorView;
        procs.textureCreateView = NativeTextureCreateView;
        procs.textureDestroy = NativeTextureDestroy;
        procs.textureGetDepthOrArrayLayers = NativeTextureGetDepthOrArrayLayers;
        procs.textureGetDimension = NativeTextureGetDimension;
        procs.textureGetFormat = NativeTextureGetFormat;
        procs.textureGetHeight = NativeTextureGetHeight;
        procs.textureGetMipLevelCount = NativeTextureGetMipLevelCount;
        procs.textureGetSampleCount = NativeTextureGetSampleCount;
        procs.textureGetTextureBindingViewDimension = NativeTextureGetTextureBindingViewDimension;
        procs.textureGetUsage = NativeTextureGetUsage;
        procs.textureGetWidth = NativeTextureGetWidth;
        procs.textureSetLabel = NativeTextureSetLabel;
        procs.textureSetOwnershipForMemoryDump = NativeTextureSetOwnershipForMemoryDump;
        procs.textureAddRef = NativeTextureAddRef;
        procs.textureRelease = NativeTextureRelease;
        procs.textureViewSetLabel = NativeTextureViewSetLabel;
        procs.textureViewAddRef = NativeTextureViewAddRef;
        procs.textureViewRelease = NativeTextureViewRelease;
        return procs;
    }

    static DawnProcTable gProcTable = MakeProcTable();

    const DawnProcTable& GetProcsAutogen() {
        return gProcTable;
    }
}
