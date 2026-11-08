
#include <algorithm>
#include <cstring>
#include <string_view>
#include <type_traits>
#include <utility>
#include <vector>

#include "absl/base/no_destructor.h"
#include "absl/container/flat_hash_map.h"
#include "dawn/wire/client/dawn_platform.h"
#include "dawn/wire/client/webgpu.h"
#include "dawn/dawn_version.h"
#include "src/dawn/wire/client/Client.h"
#include "src/utils/numeric.h"
#include "src/utils/span.h"


namespace dawn::wire::client {

    // Template function for constexpr branching when creating new objects.
    template <typename Parent, typename Child, typename... Args>
    Child* Create(Parent p, Args... args) {
        if constexpr (std::is_constructible_v<Child, const ObjectBaseParams&, decltype(args)...>) {
            return p->GetClient()->template Make<Child>(args...).Detach();
        } else if constexpr (std::is_constructible_v<Child, const ObjectBaseParams&, Ref<Instance>, decltype(args)...>) {
            return p->GetClient()->template Make<Child>(p->GetInstance(), args...).Detach();
        } else {
            if constexpr (std::is_base_of_v<ObjectWithEventsBase, Child>) {
                return p->GetClient()->template Make<Child>(p->GetInstance()).Detach();
            } else {
                return p->GetClient()->template Make<Child>().Detach();
            }
        }
    }

}  // namespace dawn::wire::client

namespace {
// Alias the dawn::wire::client namespace in because we need a lot of the helpers, structures, and
// types, and currently the client wgpu* implementations need to be in global namespace. This is
// ok because this is an implementation file, and we alias the namespace into an anonymous
// namespace in this case.
using namespace dawn::wire::client;
}  // namespace


DAWN_WIRE_EXPORT WGPUDevice wgpuDawnWireClientAdapterCreateDevice(WGPUAdapter cSelf, WGPUDeviceDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateDevice(descriptor_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientAdapterGetFeatures(WGPUAdapter cSelf, WGPUSupportedFeatures * features) {
    auto self = FromAPI(cSelf);
    auto features_ = FromAPI(features);

self->APIGetFeatures(features_);

}

DAWN_WIRE_EXPORT WGPUStatus wgpuDawnWireClientAdapterGetFormatCapabilities(WGPUAdapter cSelf, WGPUTextureFormat format, WGPUDawnFormatCapabilities * capabilities) {
    auto self = FromAPI(cSelf);
    auto format_ = FromAPI(format);
auto capabilities_ = FromAPI(capabilities);

auto result =self->APIGetFormatCapabilities(format_, capabilities_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUStatus wgpuDawnWireClientAdapterGetInfo(WGPUAdapter cSelf, WGPUAdapterInfo * info) {
    auto self = FromAPI(cSelf);
    auto info_ = FromAPI(info);

auto result =self->APIGetInfo(info_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUInstance wgpuDawnWireClientAdapterGetInstance(WGPUAdapter cSelf) {
    auto self = FromAPI(cSelf);
    
auto result =self->APIGetInstance();
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUStatus wgpuDawnWireClientAdapterGetLimits(WGPUAdapter cSelf, WGPULimits * limits) {
    auto self = FromAPI(cSelf);
    auto limits_ = FromAPI(limits);

auto result =self->APIGetLimits(limits_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUBool wgpuDawnWireClientAdapterHasFeature(WGPUAdapter cSelf, WGPUFeatureName feature) {
    auto self = FromAPI(cSelf);
    auto feature_ = FromAPI(feature);

auto result =self->APIHasFeature(feature_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUFuture wgpuDawnWireClientAdapterRequestDevice(WGPUAdapter cSelf, WGPUDeviceDescriptor const * descriptor, WGPURequestDeviceCallbackInfo callbackInfo) {
    auto self = FromAPI(cSelf);
    auto descriptor_ = FromAPI(descriptor);
auto callbackInfo_ = callbackInfo;

auto result =self->APIRequestDevice(descriptor_, callbackInfo_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientAdapterAddRef(WGPUAdapter cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientAdapterRelease(WGPUAdapter cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT void wgpuDawnWireClientAdapterInfoFreeMembers(WGPUAdapterInfo cSelf) {
    return APIAdapterInfoFreeMembers(cSelf);
}


DAWN_WIRE_EXPORT void wgpuDawnWireClientAdapterPropertiesMemoryHeapsFreeMembers(WGPUAdapterPropertiesMemoryHeaps cSelf) {
    return APIAdapterPropertiesMemoryHeapsFreeMembers(cSelf);
}


DAWN_WIRE_EXPORT void wgpuDawnWireClientAdapterPropertiesSubgroupMatrixConfigsFreeMembers(WGPUAdapterPropertiesSubgroupMatrixConfigs cSelf) {
    return APIAdapterPropertiesSubgroupMatrixConfigsFreeMembers(cSelf);
}


DAWN_WIRE_EXPORT void wgpuDawnWireClientBindGroupSetLabel(WGPUBindGroup cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::BindGroupSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientBindGroupAddRef(WGPUBindGroup cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientBindGroupRelease(WGPUBindGroup cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT void wgpuDawnWireClientBindGroupLayoutSetLabel(WGPUBindGroupLayout cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::BindGroupLayoutSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientBindGroupLayoutAddRef(WGPUBindGroupLayout cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientBindGroupLayoutRelease(WGPUBindGroupLayout cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT WGPUTexelBufferView wgpuDawnWireClientBufferCreateTexelView(WGPUBuffer cSelf, WGPUTexelBufferViewDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    dawn::wire::BufferCreateTexelViewCmd cmd;

    cmd.self = cSelf;

    TexelBufferView* returnObject = Create<Buffer*, TexelBufferView>(self, descriptor);
    cmd.result = returnObject->GetWireHandle(self->GetClient());

    
    cmd.descriptor = dawn::wire::FromAPI(descriptor);

    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT void wgpuDawnWireClientBufferDestroy(WGPUBuffer cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIDestroy();

}

DAWN_WIRE_EXPORT void const * wgpuDawnWireClientBufferGetConstMappedRange(WGPUBuffer cSelf, size_t offset, size_t size) {
    auto self = FromAPI(cSelf);
    auto offset_ = FromAPI(offset);
auto size_ = FromAPI(size);

auto result =self->APIGetConstMappedRange(offset_, size_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT void * wgpuDawnWireClientBufferGetMappedRange(WGPUBuffer cSelf, size_t offset, size_t size) {
    auto self = FromAPI(cSelf);
    auto offset_ = FromAPI(offset);
auto size_ = FromAPI(size);

auto result =self->APIGetMappedRange(offset_, size_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUBufferMapState wgpuDawnWireClientBufferGetMapState(WGPUBuffer cSelf) {
    auto self = FromAPI(cSelf);
    
auto result =self->APIGetMapState();
return ToAPI(result);

}

DAWN_WIRE_EXPORT uint64_t wgpuDawnWireClientBufferGetSize(WGPUBuffer cSelf) {
    auto self = FromAPI(cSelf);
    
auto result =self->APIGetSize();
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUBufferUsage wgpuDawnWireClientBufferGetUsage(WGPUBuffer cSelf) {
    auto self = FromAPI(cSelf);
    
auto result =self->APIGetUsage();
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUFuture wgpuDawnWireClientBufferMapAsync(WGPUBuffer cSelf, WGPUMapMode mode, size_t offset, size_t size, WGPUBufferMapCallbackInfo callbackInfo) {
    auto self = FromAPI(cSelf);
    auto mode_ = static_cast<wgpu::MapMode>(mode);
auto offset_ = FromAPI(offset);
auto size_ = FromAPI(size);
auto callbackInfo_ = callbackInfo;

auto result =self->APIMapAsync(mode_, offset_, size_, callbackInfo_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUStatus wgpuDawnWireClientBufferReadMappedRange(WGPUBuffer cSelf, size_t offset, void * data, size_t size) {
    auto self = FromAPI(cSelf);
    auto offset_ = FromAPI(offset);
// SAFETY: The webgpu.h user is required to pass valid ranges of objects.
auto data_ = DAWN_UNSAFE_BUFFERS(dawn::ityp::span<size_t, std::byte, dawn::detail::DynamicExtent<size_t>>(FromAPI(data), dawn::checked_cast<size_t>(size)));

auto result =self->APIReadMappedRange(offset_, data_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientBufferSetLabel(WGPUBuffer cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::BufferSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientBufferUnmap(WGPUBuffer cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIUnmap();

}

DAWN_WIRE_EXPORT WGPUStatus wgpuDawnWireClientBufferWriteMappedRange(WGPUBuffer cSelf, size_t offset, void const * data, size_t size) {
    auto self = FromAPI(cSelf);
    auto offset_ = FromAPI(offset);
// SAFETY: The webgpu.h user is required to pass valid ranges of objects.
auto data_ = DAWN_UNSAFE_BUFFERS(dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>>(FromAPI(data), dawn::checked_cast<size_t>(size)));

auto result =self->APIWriteMappedRange(offset_, data_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientBufferAddRef(WGPUBuffer cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientBufferRelease(WGPUBuffer cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT void wgpuDawnWireClientCommandBufferSetLabel(WGPUCommandBuffer cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::CommandBufferSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientCommandBufferAddRef(WGPUCommandBuffer cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientCommandBufferRelease(WGPUCommandBuffer cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT WGPUComputePassEncoder wgpuDawnWireClientCommandEncoderBeginComputePass(WGPUCommandEncoder cSelf, WGPUComputePassDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    dawn::wire::CommandEncoderBeginComputePassCmd cmd;

    cmd.self = cSelf;

    ComputePassEncoder* returnObject = Create<CommandEncoder*, ComputePassEncoder>(self, descriptor);
    cmd.result = returnObject->GetWireHandle(self->GetClient());

    
    cmd.descriptor = dawn::wire::FromAPI(descriptor);

    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT WGPURenderPassEncoder wgpuDawnWireClientCommandEncoderBeginRenderPass(WGPUCommandEncoder cSelf, WGPURenderPassDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    dawn::wire::CommandEncoderBeginRenderPassCmd cmd;

    cmd.self = cSelf;

    RenderPassEncoder* returnObject = Create<CommandEncoder*, RenderPassEncoder>(self, descriptor);
    cmd.result = returnObject->GetWireHandle(self->GetClient());

    
    cmd.descriptor = dawn::wire::FromAPI(descriptor);

    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT void wgpuDawnWireClientCommandEncoderClearBuffer(WGPUCommandEncoder cSelf, WGPUBuffer buffer, uint64_t offset, uint64_t size) {
    auto self = FromAPI(cSelf);
    dawn::wire::CommandEncoderClearBufferCmd cmd;

    cmd.self = cSelf;


    
    cmd.buffer = dawn::wire::FromAPI(buffer);
    
    cmd.offset = dawn::wire::FromAPI(offset);
    
    cmd.size = dawn::wire::FromAPI(size);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientCommandEncoderCopyBufferToBuffer(WGPUCommandEncoder cSelf, WGPUBuffer source, uint64_t sourceOffset, WGPUBuffer destination, uint64_t destinationOffset, uint64_t size) {
    auto self = FromAPI(cSelf);
    dawn::wire::CommandEncoderCopyBufferToBufferCmd cmd;

    cmd.self = cSelf;


    
    cmd.source = dawn::wire::FromAPI(source);
    
    cmd.sourceOffset = dawn::wire::FromAPI(sourceOffset);
    
    cmd.destination = dawn::wire::FromAPI(destination);
    
    cmd.destinationOffset = dawn::wire::FromAPI(destinationOffset);
    
    cmd.size = dawn::wire::FromAPI(size);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientCommandEncoderCopyBufferToTexture(WGPUCommandEncoder cSelf, WGPUTexelCopyBufferInfo const * source, WGPUTexelCopyTextureInfo const * destination, WGPUExtent3D const * copySize) {
    auto self = FromAPI(cSelf);
    dawn::wire::CommandEncoderCopyBufferToTextureCmd cmd;

    cmd.self = cSelf;


    
    cmd.source = dawn::wire::FromAPI(source);
    
    cmd.destination = dawn::wire::FromAPI(destination);
    
    cmd.copySize = dawn::wire::FromAPI(copySize);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientCommandEncoderCopyTextureToBuffer(WGPUCommandEncoder cSelf, WGPUTexelCopyTextureInfo const * source, WGPUTexelCopyBufferInfo const * destination, WGPUExtent3D const * copySize) {
    auto self = FromAPI(cSelf);
    dawn::wire::CommandEncoderCopyTextureToBufferCmd cmd;

    cmd.self = cSelf;


    
    cmd.source = dawn::wire::FromAPI(source);
    
    cmd.destination = dawn::wire::FromAPI(destination);
    
    cmd.copySize = dawn::wire::FromAPI(copySize);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientCommandEncoderCopyTextureToTexture(WGPUCommandEncoder cSelf, WGPUTexelCopyTextureInfo const * source, WGPUTexelCopyTextureInfo const * destination, WGPUExtent3D const * copySize) {
    auto self = FromAPI(cSelf);
    dawn::wire::CommandEncoderCopyTextureToTextureCmd cmd;

    cmd.self = cSelf;


    
    cmd.source = dawn::wire::FromAPI(source);
    
    cmd.destination = dawn::wire::FromAPI(destination);
    
    cmd.copySize = dawn::wire::FromAPI(copySize);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT WGPUCommandBuffer wgpuDawnWireClientCommandEncoderFinish(WGPUCommandEncoder cSelf, WGPUCommandBufferDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    dawn::wire::CommandEncoderFinishCmd cmd;

    cmd.self = cSelf;

    CommandBuffer* returnObject = Create<CommandEncoder*, CommandBuffer>(self, descriptor);
    cmd.result = returnObject->GetWireHandle(self->GetClient());

    
    cmd.descriptor = dawn::wire::FromAPI(descriptor);

    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT void wgpuDawnWireClientCommandEncoderInjectValidationError(WGPUCommandEncoder cSelf, WGPUStringView message) {
    auto self = FromAPI(cSelf);
    dawn::wire::CommandEncoderInjectValidationErrorCmd cmd;

    cmd.self = cSelf;


    
    cmd.message = dawn::wire::FromAPI(message);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientCommandEncoderInsertDebugMarker(WGPUCommandEncoder cSelf, WGPUStringView markerLabel) {
    auto self = FromAPI(cSelf);
    dawn::wire::CommandEncoderInsertDebugMarkerCmd cmd;

    cmd.self = cSelf;


    
    cmd.markerLabel = dawn::wire::FromAPI(markerLabel);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientCommandEncoderPopDebugGroup(WGPUCommandEncoder cSelf) {
    auto self = FromAPI(cSelf);
    dawn::wire::CommandEncoderPopDebugGroupCmd cmd;

    cmd.self = cSelf;



    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientCommandEncoderPushDebugGroup(WGPUCommandEncoder cSelf, WGPUStringView groupLabel) {
    auto self = FromAPI(cSelf);
    dawn::wire::CommandEncoderPushDebugGroupCmd cmd;

    cmd.self = cSelf;


    
    cmd.groupLabel = dawn::wire::FromAPI(groupLabel);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientCommandEncoderResolveQuerySet(WGPUCommandEncoder cSelf, WGPUQuerySet querySet, uint32_t firstQuery, uint32_t queryCount, WGPUBuffer destination, uint64_t destinationOffset) {
    auto self = FromAPI(cSelf);
    dawn::wire::CommandEncoderResolveQuerySetCmd cmd;

    cmd.self = cSelf;


    
    cmd.querySet = dawn::wire::FromAPI(querySet);
    
    cmd.firstQuery = dawn::wire::FromAPI(firstQuery);
    
    cmd.queryCount = dawn::wire::FromAPI(queryCount);
    
    cmd.destination = dawn::wire::FromAPI(destination);
    
    cmd.destinationOffset = dawn::wire::FromAPI(destinationOffset);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientCommandEncoderSetLabel(WGPUCommandEncoder cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::CommandEncoderSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientCommandEncoderWriteBuffer(WGPUCommandEncoder cSelf, WGPUBuffer buffer, uint64_t bufferOffset, void const * data, size_t size) {
    auto self = FromAPI(cSelf);
    dawn::wire::CommandEncoderWriteBufferCmd cmd;

    cmd.self = cSelf;


    
    cmd.buffer = dawn::wire::FromAPI(buffer);
    
    cmd.bufferOffset = dawn::wire::FromAPI(bufferOffset);
    
    using dataSpanT = std::remove_pointer_t<std::byte const *>;
    auto* dataPtr = reinterpret_cast<dataSpanT*>(dawn::wire::FromAPI(data));
    size_t dataSizeV = dawn::checked_cast<size_t>(size);
    // SAFETY: The webgpu.h user is required to pass valid ranges of objects.
    cmd.data = DAWN_UNSAFE_BUFFERS(dawn::Span<dataSpanT>(dataPtr, dataSizeV));
    

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientCommandEncoderWriteTimestamp(WGPUCommandEncoder cSelf, WGPUQuerySet querySet, uint32_t queryIndex) {
    auto self = FromAPI(cSelf);
    dawn::wire::CommandEncoderWriteTimestampCmd cmd;

    cmd.self = cSelf;


    
    cmd.querySet = dawn::wire::FromAPI(querySet);
    
    cmd.queryIndex = dawn::wire::FromAPI(queryIndex);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientCommandEncoderAddRef(WGPUCommandEncoder cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientCommandEncoderRelease(WGPUCommandEncoder cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT void wgpuDawnWireClientComputePassEncoderDispatchWorkgroups(WGPUComputePassEncoder cSelf, uint32_t workgroupCountX, uint32_t workgroupCountY, uint32_t workgroupCountZ) {
    auto self = FromAPI(cSelf);
    dawn::wire::ComputePassEncoderDispatchWorkgroupsCmd cmd;

    cmd.self = cSelf;


    
    cmd.workgroupCountX = dawn::wire::FromAPI(workgroupCountX);
    
    cmd.workgroupCountY = dawn::wire::FromAPI(workgroupCountY);
    
    cmd.workgroupCountZ = dawn::wire::FromAPI(workgroupCountZ);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientComputePassEncoderDispatchWorkgroupsIndirect(WGPUComputePassEncoder cSelf, WGPUBuffer indirectBuffer, uint64_t indirectOffset) {
    auto self = FromAPI(cSelf);
    dawn::wire::ComputePassEncoderDispatchWorkgroupsIndirectCmd cmd;

    cmd.self = cSelf;


    
    cmd.indirectBuffer = dawn::wire::FromAPI(indirectBuffer);
    
    cmd.indirectOffset = dawn::wire::FromAPI(indirectOffset);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientComputePassEncoderEnd(WGPUComputePassEncoder cSelf) {
    auto self = FromAPI(cSelf);
    dawn::wire::ComputePassEncoderEndCmd cmd;

    cmd.self = cSelf;



    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientComputePassEncoderInsertDebugMarker(WGPUComputePassEncoder cSelf, WGPUStringView markerLabel) {
    auto self = FromAPI(cSelf);
    dawn::wire::ComputePassEncoderInsertDebugMarkerCmd cmd;

    cmd.self = cSelf;


    
    cmd.markerLabel = dawn::wire::FromAPI(markerLabel);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientComputePassEncoderPopDebugGroup(WGPUComputePassEncoder cSelf) {
    auto self = FromAPI(cSelf);
    dawn::wire::ComputePassEncoderPopDebugGroupCmd cmd;

    cmd.self = cSelf;



    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientComputePassEncoderPushDebugGroup(WGPUComputePassEncoder cSelf, WGPUStringView groupLabel) {
    auto self = FromAPI(cSelf);
    dawn::wire::ComputePassEncoderPushDebugGroupCmd cmd;

    cmd.self = cSelf;


    
    cmd.groupLabel = dawn::wire::FromAPI(groupLabel);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientComputePassEncoderSetBindGroup(WGPUComputePassEncoder cSelf, uint32_t groupIndex, WGPUBindGroup group, size_t dynamicOffsetCount, uint32_t const * dynamicOffsets) {
    auto self = FromAPI(cSelf);
    dawn::wire::ComputePassEncoderSetBindGroupCmd cmd;

    cmd.self = cSelf;


    
    cmd.groupIndex = dawn::wire::FromAPI(groupIndex);
    
    cmd.group = dawn::wire::FromAPI(group);
    
    
    using dynamicOffsetsSpanT = std::remove_pointer_t<uint32_t const *>;
    auto* dynamicOffsetsPtr = reinterpret_cast<dynamicOffsetsSpanT*>(dawn::wire::FromAPI(dynamicOffsets));
    size_t dynamicOffsetsSizeV = dawn::checked_cast<size_t>(dynamicOffsetCount);
    // SAFETY: The webgpu.h user is required to pass valid ranges of objects.
    cmd.dynamicOffsets = DAWN_UNSAFE_BUFFERS(dawn::Span<dynamicOffsetsSpanT>(dynamicOffsetsPtr, dynamicOffsetsSizeV));

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientComputePassEncoderSetImmediates(WGPUComputePassEncoder cSelf, uint32_t offset, void const * data, size_t size) {
    auto self = FromAPI(cSelf);
    dawn::wire::ComputePassEncoderSetImmediatesCmd cmd;

    cmd.self = cSelf;


    
    cmd.offset = dawn::wire::FromAPI(offset);
    
    using dataSpanT = std::remove_pointer_t<std::byte const *>;
    auto* dataPtr = reinterpret_cast<dataSpanT*>(dawn::wire::FromAPI(data));
    size_t dataSizeV = dawn::checked_cast<size_t>(size);
    // SAFETY: The webgpu.h user is required to pass valid ranges of objects.
    cmd.data = DAWN_UNSAFE_BUFFERS(dawn::Span<dataSpanT>(dataPtr, dataSizeV));
    

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientComputePassEncoderSetLabel(WGPUComputePassEncoder cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::ComputePassEncoderSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientComputePassEncoderSetPipeline(WGPUComputePassEncoder cSelf, WGPUComputePipeline pipeline) {
    auto self = FromAPI(cSelf);
    dawn::wire::ComputePassEncoderSetPipelineCmd cmd;

    cmd.self = cSelf;


    
    cmd.pipeline = dawn::wire::FromAPI(pipeline);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientComputePassEncoderSetResourceTable(WGPUComputePassEncoder cSelf, WGPUResourceTable table) {
    auto self = FromAPI(cSelf);
    dawn::wire::ComputePassEncoderSetResourceTableCmd cmd;

    cmd.self = cSelf;


    
    cmd.table = dawn::wire::FromAPI(table);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientComputePassEncoderWriteTimestamp(WGPUComputePassEncoder cSelf, WGPUQuerySet querySet, uint32_t queryIndex) {
    auto self = FromAPI(cSelf);
    dawn::wire::ComputePassEncoderWriteTimestampCmd cmd;

    cmd.self = cSelf;


    
    cmd.querySet = dawn::wire::FromAPI(querySet);
    
    cmd.queryIndex = dawn::wire::FromAPI(queryIndex);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientComputePassEncoderAddRef(WGPUComputePassEncoder cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientComputePassEncoderRelease(WGPUComputePassEncoder cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT WGPUBindGroupLayout wgpuDawnWireClientComputePipelineGetBindGroupLayout(WGPUComputePipeline cSelf, uint32_t groupIndex) {
    auto self = FromAPI(cSelf);
    dawn::wire::ComputePipelineGetBindGroupLayoutCmd cmd;

    cmd.self = cSelf;

    BindGroupLayout* returnObject = Create<ComputePipeline*, BindGroupLayout>(self, groupIndex);
    cmd.result = returnObject->GetWireHandle(self->GetClient());

    
    cmd.groupIndex = dawn::wire::FromAPI(groupIndex);

    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT void wgpuDawnWireClientComputePipelineSetLabel(WGPUComputePipeline cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::ComputePipelineSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientComputePipelineAddRef(WGPUComputePipeline cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientComputePipelineRelease(WGPUComputePipeline cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT void wgpuDawnWireClientDawnDrmFormatCapabilitiesFreeMembers(WGPUDawnDrmFormatCapabilities cSelf) {
    return APIDawnDrmFormatCapabilitiesFreeMembers(cSelf);
}


DAWN_WIRE_EXPORT WGPUBindGroup wgpuDawnWireClientDeviceCreateBindGroup(WGPUDevice cSelf, WGPUBindGroupDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    dawn::wire::DeviceCreateBindGroupCmd cmd;

    cmd.self = cSelf;

    BindGroup* returnObject = Create<Device*, BindGroup>(self, descriptor);
    cmd.result = returnObject->GetWireHandle(self->GetClient());

    
    cmd.descriptor = dawn::wire::FromAPI(descriptor);

    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT WGPUBindGroupLayout wgpuDawnWireClientDeviceCreateBindGroupLayout(WGPUDevice cSelf, WGPUBindGroupLayoutDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    dawn::wire::DeviceCreateBindGroupLayoutCmd cmd;

    cmd.self = cSelf;

    BindGroupLayout* returnObject = Create<Device*, BindGroupLayout>(self, descriptor);
    cmd.result = returnObject->GetWireHandle(self->GetClient());

    
    cmd.descriptor = dawn::wire::FromAPI(descriptor);

    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT WGPUBuffer wgpuDawnWireClientDeviceCreateBuffer(WGPUDevice cSelf, WGPUBufferDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateBuffer(descriptor_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUCommandEncoder wgpuDawnWireClientDeviceCreateCommandEncoder(WGPUDevice cSelf, WGPUCommandEncoderDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    dawn::wire::DeviceCreateCommandEncoderCmd cmd;

    cmd.self = cSelf;

    CommandEncoder* returnObject = Create<Device*, CommandEncoder>(self, descriptor);
    cmd.result = returnObject->GetWireHandle(self->GetClient());

    
    cmd.descriptor = dawn::wire::FromAPI(descriptor);

    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT WGPUComputePipeline wgpuDawnWireClientDeviceCreateComputePipeline(WGPUDevice cSelf, WGPUComputePipelineDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    dawn::wire::DeviceCreateComputePipelineCmd cmd;

    cmd.self = cSelf;

    ComputePipeline* returnObject = Create<Device*, ComputePipeline>(self, descriptor);
    cmd.result = returnObject->GetWireHandle(self->GetClient());

    
    cmd.descriptor = dawn::wire::FromAPI(descriptor);

    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT WGPUFuture wgpuDawnWireClientDeviceCreateComputePipelineAsync(WGPUDevice cSelf, WGPUComputePipelineDescriptor const * descriptor, WGPUCreateComputePipelineAsyncCallbackInfo callbackInfo) {
    auto self = FromAPI(cSelf);
    auto descriptor_ = FromAPI(descriptor);
auto callbackInfo_ = callbackInfo;

auto result =self->APICreateComputePipelineAsync(descriptor_, callbackInfo_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUBuffer wgpuDawnWireClientDeviceCreateErrorBuffer(WGPUDevice cSelf, WGPUBufferDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateErrorBuffer(descriptor_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUComputePipeline wgpuDawnWireClientDeviceCreateErrorComputePipeline(WGPUDevice cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::DeviceCreateErrorComputePipelineCmd cmd;

    cmd.self = cSelf;

    ComputePipeline* returnObject = Create<Device*, ComputePipeline>(self, label);
    cmd.result = returnObject->GetWireHandle(self->GetClient());

    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT WGPUExternalTexture wgpuDawnWireClientDeviceCreateErrorExternalTexture(WGPUDevice cSelf) {
    auto self = FromAPI(cSelf);
    dawn::wire::DeviceCreateErrorExternalTextureCmd cmd;

    cmd.self = cSelf;

    ExternalTexture* returnObject = Create<Device*, ExternalTexture>(self);
    cmd.result = returnObject->GetWireHandle(self->GetClient());


    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT WGPURenderPipeline wgpuDawnWireClientDeviceCreateErrorRenderPipeline(WGPUDevice cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::DeviceCreateErrorRenderPipelineCmd cmd;

    cmd.self = cSelf;

    RenderPipeline* returnObject = Create<Device*, RenderPipeline>(self, label);
    cmd.result = returnObject->GetWireHandle(self->GetClient());

    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT WGPUShaderModule wgpuDawnWireClientDeviceCreateErrorShaderModule(WGPUDevice cSelf, WGPUShaderModuleDescriptor const * descriptor, WGPUStringView errorMessage) {
    auto self = FromAPI(cSelf);
    dawn::wire::DeviceCreateErrorShaderModuleCmd cmd;

    cmd.self = cSelf;

    ShaderModule* returnObject = Create<Device*, ShaderModule>(self, descriptor, errorMessage);
    cmd.result = returnObject->GetWireHandle(self->GetClient());

    
    cmd.descriptor = dawn::wire::FromAPI(descriptor);
    
    cmd.errorMessage = dawn::wire::FromAPI(errorMessage);

    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT WGPUTexture wgpuDawnWireClientDeviceCreateErrorTexture(WGPUDevice cSelf, WGPUTextureDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateErrorTexture(descriptor_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUExternalTexture wgpuDawnWireClientDeviceCreateExternalTexture(WGPUDevice cSelf, WGPUExternalTextureDescriptor const * externalTextureDescriptor) {
    auto self = FromAPI(cSelf);
    dawn::wire::DeviceCreateExternalTextureCmd cmd;

    cmd.self = cSelf;

    ExternalTexture* returnObject = Create<Device*, ExternalTexture>(self, externalTextureDescriptor);
    cmd.result = returnObject->GetWireHandle(self->GetClient());

    
    cmd.externalTextureDescriptor = dawn::wire::FromAPI(externalTextureDescriptor);

    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT WGPUPipelineLayout wgpuDawnWireClientDeviceCreatePipelineLayout(WGPUDevice cSelf, WGPUPipelineLayoutDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    dawn::wire::DeviceCreatePipelineLayoutCmd cmd;

    cmd.self = cSelf;

    PipelineLayout* returnObject = Create<Device*, PipelineLayout>(self, descriptor);
    cmd.result = returnObject->GetWireHandle(self->GetClient());

    
    cmd.descriptor = dawn::wire::FromAPI(descriptor);

    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT WGPUQuerySet wgpuDawnWireClientDeviceCreateQuerySet(WGPUDevice cSelf, WGPUQuerySetDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    dawn::wire::DeviceCreateQuerySetCmd cmd;

    cmd.self = cSelf;

    QuerySet* returnObject = Create<Device*, QuerySet>(self, descriptor);
    cmd.result = returnObject->GetWireHandle(self->GetClient());

    
    cmd.descriptor = dawn::wire::FromAPI(descriptor);

    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT WGPURenderBundleEncoder wgpuDawnWireClientDeviceCreateRenderBundleEncoder(WGPUDevice cSelf, WGPURenderBundleEncoderDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    dawn::wire::DeviceCreateRenderBundleEncoderCmd cmd;

    cmd.self = cSelf;

    RenderBundleEncoder* returnObject = Create<Device*, RenderBundleEncoder>(self, descriptor);
    cmd.result = returnObject->GetWireHandle(self->GetClient());

    
    cmd.descriptor = dawn::wire::FromAPI(descriptor);

    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT WGPURenderPipeline wgpuDawnWireClientDeviceCreateRenderPipeline(WGPUDevice cSelf, WGPURenderPipelineDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    dawn::wire::DeviceCreateRenderPipelineCmd cmd;

    cmd.self = cSelf;

    RenderPipeline* returnObject = Create<Device*, RenderPipeline>(self, descriptor);
    cmd.result = returnObject->GetWireHandle(self->GetClient());

    
    cmd.descriptor = dawn::wire::FromAPI(descriptor);

    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT WGPUFuture wgpuDawnWireClientDeviceCreateRenderPipelineAsync(WGPUDevice cSelf, WGPURenderPipelineDescriptor const * descriptor, WGPUCreateRenderPipelineAsyncCallbackInfo callbackInfo) {
    auto self = FromAPI(cSelf);
    auto descriptor_ = FromAPI(descriptor);
auto callbackInfo_ = callbackInfo;

auto result =self->APICreateRenderPipelineAsync(descriptor_, callbackInfo_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUResourceTable wgpuDawnWireClientDeviceCreateResourceTable(WGPUDevice cSelf, WGPUResourceTableDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateResourceTable(descriptor_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUSampler wgpuDawnWireClientDeviceCreateSampler(WGPUDevice cSelf, WGPUSamplerDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    dawn::wire::DeviceCreateSamplerCmd cmd;

    cmd.self = cSelf;

    Sampler* returnObject = Create<Device*, Sampler>(self, descriptor);
    cmd.result = returnObject->GetWireHandle(self->GetClient());

    
    cmd.descriptor = dawn::wire::FromAPI(descriptor);

    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT WGPUShaderModule wgpuDawnWireClientDeviceCreateShaderModule(WGPUDevice cSelf, WGPUShaderModuleDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateShaderModule(descriptor_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUTexture wgpuDawnWireClientDeviceCreateTexture(WGPUDevice cSelf, WGPUTextureDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateTexture(descriptor_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientDeviceDestroy(WGPUDevice cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIDestroy();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientDeviceForceLoss(WGPUDevice cSelf, WGPUDeviceLostReason type, WGPUStringView message) {
    auto self = FromAPI(cSelf);
    dawn::wire::DeviceForceLossCmd cmd;

    cmd.self = cSelf;


    
    cmd.type = dawn::wire::FromAPI(type);
    
    cmd.message = dawn::wire::FromAPI(message);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT WGPUAdapter wgpuDawnWireClientDeviceGetAdapter(WGPUDevice cSelf) {
    auto self = FromAPI(cSelf);
    
auto result =self->APIGetAdapter();
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUStatus wgpuDawnWireClientDeviceGetAdapterInfo(WGPUDevice cSelf, WGPUAdapterInfo * adapterInfo) {
    auto self = FromAPI(cSelf);
    auto adapterInfo_ = FromAPI(adapterInfo);

auto result =self->APIGetAdapterInfo(adapterInfo_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientDeviceGetFeatures(WGPUDevice cSelf, WGPUSupportedFeatures * features) {
    auto self = FromAPI(cSelf);
    auto features_ = FromAPI(features);

self->APIGetFeatures(features_);

}

DAWN_WIRE_EXPORT WGPUStatus wgpuDawnWireClientDeviceGetLimits(WGPUDevice cSelf, WGPULimits * limits) {
    auto self = FromAPI(cSelf);
    auto limits_ = FromAPI(limits);

auto result =self->APIGetLimits(limits_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUFuture wgpuDawnWireClientDeviceGetLostFuture(WGPUDevice cSelf) {
    auto self = FromAPI(cSelf);
    
auto result =self->APIGetLostFuture();
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUQueue wgpuDawnWireClientDeviceGetQueue(WGPUDevice cSelf) {
    auto self = FromAPI(cSelf);
    
auto result =self->APIGetQueue();
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUBool wgpuDawnWireClientDeviceHasFeature(WGPUDevice cSelf, WGPUFeatureName feature) {
    auto self = FromAPI(cSelf);
    auto feature_ = FromAPI(feature);

auto result =self->APIHasFeature(feature_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientDeviceInjectError(WGPUDevice cSelf, WGPUErrorType type, WGPUStringView message) {
    auto self = FromAPI(cSelf);
    auto type_ = FromAPI(type);
auto message_ = FromAPI(message);

self->APIInjectError(type_, message_);

}

DAWN_WIRE_EXPORT WGPUFuture wgpuDawnWireClientDevicePopErrorScope(WGPUDevice cSelf, WGPUPopErrorScopeCallbackInfo callbackInfo) {
    auto self = FromAPI(cSelf);
    auto callbackInfo_ = callbackInfo;

auto result =self->APIPopErrorScope(callbackInfo_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientDevicePushErrorScope(WGPUDevice cSelf, WGPUErrorFilter filter) {
    auto self = FromAPI(cSelf);
    dawn::wire::DevicePushErrorScopeCmd cmd;

    cmd.self = cSelf;


    
    cmd.filter = dawn::wire::FromAPI(filter);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientDeviceSetLabel(WGPUDevice cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::DeviceSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientDeviceSetLoggingCallback(WGPUDevice cSelf, WGPULoggingCallbackInfo callbackInfo) {
    auto self = FromAPI(cSelf);
    auto callbackInfo_ = callbackInfo;

self->APISetLoggingCallback(callbackInfo_);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientDeviceTick(WGPUDevice cSelf) {
    auto self = FromAPI(cSelf);
    dawn::wire::DeviceTickCmd cmd;

    cmd.self = cSelf;



    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientDeviceValidateTextureDescriptor(WGPUDevice cSelf, WGPUTextureDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    dawn::wire::DeviceValidateTextureDescriptorCmd cmd;

    cmd.self = cSelf;


    
    cmd.descriptor = dawn::wire::FromAPI(descriptor);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientDeviceAddRef(WGPUDevice cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientDeviceRelease(WGPUDevice cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT void wgpuDawnWireClientExternalTextureDestroy(WGPUExternalTexture cSelf) {
    auto self = FromAPI(cSelf);
    dawn::wire::ExternalTextureDestroyCmd cmd;

    cmd.self = cSelf;



    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientExternalTextureExpire(WGPUExternalTexture cSelf) {
    auto self = FromAPI(cSelf);
    dawn::wire::ExternalTextureExpireCmd cmd;

    cmd.self = cSelf;



    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientExternalTextureRefresh(WGPUExternalTexture cSelf) {
    auto self = FromAPI(cSelf);
    dawn::wire::ExternalTextureRefreshCmd cmd;

    cmd.self = cSelf;



    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientExternalTextureSetLabel(WGPUExternalTexture cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::ExternalTextureSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientExternalTextureAddRef(WGPUExternalTexture cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientExternalTextureRelease(WGPUExternalTexture cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT WGPUSurface wgpuDawnWireClientInstanceCreateSurface(WGPUInstance cSelf, WGPUSurfaceDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    auto descriptor_ = FromAPI(descriptor);

auto result =self->APICreateSurface(descriptor_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientInstanceGetWGSLLanguageFeatures(WGPUInstance cSelf, WGPUSupportedWGSLLanguageFeatures * features) {
    auto self = FromAPI(cSelf);
    auto features_ = FromAPI(features);

self->APIGetWGSLLanguageFeatures(features_);

}

DAWN_WIRE_EXPORT WGPUBool wgpuDawnWireClientInstanceHasWGSLLanguageFeature(WGPUInstance cSelf, WGPUWGSLLanguageFeatureName feature) {
    auto self = FromAPI(cSelf);
    auto feature_ = FromAPI(feature);

auto result =self->APIHasWGSLLanguageFeature(feature_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientInstanceProcessEvents(WGPUInstance cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIProcessEvents();

}

DAWN_WIRE_EXPORT WGPUFuture wgpuDawnWireClientInstanceRequestAdapter(WGPUInstance cSelf, WGPURequestAdapterOptions const * options, WGPURequestAdapterCallbackInfo callbackInfo) {
    auto self = FromAPI(cSelf);
    auto options_ = FromAPI(options);
auto callbackInfo_ = callbackInfo;

auto result =self->APIRequestAdapter(options_, callbackInfo_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUWaitStatus wgpuDawnWireClientInstanceWaitAny(WGPUInstance cSelf, size_t futureCount, WGPUFutureWaitInfo * futures, uint64_t timeoutNS) {
    auto self = FromAPI(cSelf);
    // SAFETY: The webgpu.h user is required to pass valid ranges of objects.
auto futures_ = DAWN_UNSAFE_BUFFERS(dawn::ityp::span<size_t, FutureWaitInfo, dawn::detail::DynamicExtent<size_t>>(FromAPI(futures), dawn::checked_cast<size_t>(futureCount)));
auto timeoutNS_ = FromAPI(timeoutNS);

auto result =self->APIWaitAny(futures_, timeoutNS_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientInstanceAddRef(WGPUInstance cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientInstanceRelease(WGPUInstance cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT void wgpuDawnWireClientPipelineLayoutSetLabel(WGPUPipelineLayout cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::PipelineLayoutSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientPipelineLayoutAddRef(WGPUPipelineLayout cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientPipelineLayoutRelease(WGPUPipelineLayout cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT void wgpuDawnWireClientQuerySetDestroy(WGPUQuerySet cSelf) {
    auto self = FromAPI(cSelf);
    dawn::wire::QuerySetDestroyCmd cmd;

    cmd.self = cSelf;



    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT uint32_t wgpuDawnWireClientQuerySetGetCount(WGPUQuerySet cSelf) {
    auto self = FromAPI(cSelf);
    
auto result =self->APIGetCount();
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUQueryType wgpuDawnWireClientQuerySetGetType(WGPUQuerySet cSelf) {
    auto self = FromAPI(cSelf);
    
auto result =self->APIGetType();
return ToAPI(result);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientQuerySetSetLabel(WGPUQuerySet cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::QuerySetSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientQuerySetAddRef(WGPUQuerySet cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientQuerySetRelease(WGPUQuerySet cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT void wgpuDawnWireClientQueueCopyExternalTextureForBrowser(WGPUQueue cSelf, WGPUImageCopyExternalTexture const * source, WGPUTexelCopyTextureInfo const * destination, WGPUExtent3D const * copySize, WGPUCopyTextureForBrowserOptions const * options) {
    auto self = FromAPI(cSelf);
    dawn::wire::QueueCopyExternalTextureForBrowserCmd cmd;

    cmd.self = cSelf;


    
    cmd.source = dawn::wire::FromAPI(source);
    
    cmd.destination = dawn::wire::FromAPI(destination);
    
    cmd.copySize = dawn::wire::FromAPI(copySize);
    
    cmd.options = dawn::wire::FromAPI(options);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientQueueCopyTextureForBrowser(WGPUQueue cSelf, WGPUTexelCopyTextureInfo const * source, WGPUTexelCopyTextureInfo const * destination, WGPUExtent3D const * copySize, WGPUCopyTextureForBrowserOptions const * options) {
    auto self = FromAPI(cSelf);
    dawn::wire::QueueCopyTextureForBrowserCmd cmd;

    cmd.self = cSelf;


    
    cmd.source = dawn::wire::FromAPI(source);
    
    cmd.destination = dawn::wire::FromAPI(destination);
    
    cmd.copySize = dawn::wire::FromAPI(copySize);
    
    cmd.options = dawn::wire::FromAPI(options);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT WGPUFuture wgpuDawnWireClientQueueOnSubmittedWorkDone(WGPUQueue cSelf, WGPUQueueWorkDoneCallbackInfo callbackInfo) {
    auto self = FromAPI(cSelf);
    auto callbackInfo_ = callbackInfo;

auto result =self->APIOnSubmittedWorkDone(callbackInfo_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientQueueSetLabel(WGPUQueue cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::QueueSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientQueueSubmit(WGPUQueue cSelf, size_t commandCount, WGPUCommandBuffer const * commands) {
    auto self = FromAPI(cSelf);
    // SAFETY: The webgpu.h user is required to pass valid ranges of objects.
auto commands_ = DAWN_UNSAFE_BUFFERS(dawn::ityp::span<size_t, detail::CommandBuffer* const, dawn::detail::DynamicExtent<size_t>>(FromAPI(commands), dawn::checked_cast<size_t>(commandCount)));

self->APISubmit(commands_);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientQueueWriteBuffer(WGPUQueue cSelf, WGPUBuffer buffer, uint64_t bufferOffset, void const * data, size_t size) {
    auto self = FromAPI(cSelf);
    auto buffer_ = FromAPI(buffer);
auto bufferOffset_ = FromAPI(bufferOffset);
// SAFETY: The webgpu.h user is required to pass valid ranges of objects.
auto data_ = DAWN_UNSAFE_BUFFERS(dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>>(FromAPI(data), dawn::checked_cast<size_t>(size)));

self->APIWriteBuffer(buffer_, bufferOffset_, data_);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientQueueWriteTexture(WGPUQueue cSelf, WGPUTexelCopyTextureInfo const * destination, void const * data, size_t dataSize, WGPUTexelCopyBufferLayout const * dataLayout, WGPUExtent3D const * writeSize) {
    auto self = FromAPI(cSelf);
    auto destination_ = FromAPI(destination);
// SAFETY: The webgpu.h user is required to pass valid ranges of objects.
auto data_ = DAWN_UNSAFE_BUFFERS(dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>>(FromAPI(data), dawn::checked_cast<size_t>(dataSize)));
auto dataLayout_ = FromAPI(dataLayout);
auto writeSize_ = FromAPI(writeSize);

self->APIWriteTexture(destination_, data_, dataLayout_, writeSize_);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientQueueAddRef(WGPUQueue cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientQueueRelease(WGPUQueue cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderBundleSetLabel(WGPURenderBundle cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderBundleSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderBundleAddRef(WGPURenderBundle cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderBundleRelease(WGPURenderBundle cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderBundleEncoderDraw(WGPURenderBundleEncoder cSelf, uint32_t vertexCount, uint32_t instanceCount, uint32_t firstVertex, uint32_t firstInstance) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderBundleEncoderDrawCmd cmd;

    cmd.self = cSelf;


    
    cmd.vertexCount = dawn::wire::FromAPI(vertexCount);
    
    cmd.instanceCount = dawn::wire::FromAPI(instanceCount);
    
    cmd.firstVertex = dawn::wire::FromAPI(firstVertex);
    
    cmd.firstInstance = dawn::wire::FromAPI(firstInstance);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderBundleEncoderDrawIndexed(WGPURenderBundleEncoder cSelf, uint32_t indexCount, uint32_t instanceCount, uint32_t firstIndex, int32_t baseVertex, uint32_t firstInstance) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderBundleEncoderDrawIndexedCmd cmd;

    cmd.self = cSelf;


    
    cmd.indexCount = dawn::wire::FromAPI(indexCount);
    
    cmd.instanceCount = dawn::wire::FromAPI(instanceCount);
    
    cmd.firstIndex = dawn::wire::FromAPI(firstIndex);
    
    cmd.baseVertex = dawn::wire::FromAPI(baseVertex);
    
    cmd.firstInstance = dawn::wire::FromAPI(firstInstance);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderBundleEncoderDrawIndexedIndirect(WGPURenderBundleEncoder cSelf, WGPUBuffer indirectBuffer, uint64_t indirectOffset) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderBundleEncoderDrawIndexedIndirectCmd cmd;

    cmd.self = cSelf;


    
    cmd.indirectBuffer = dawn::wire::FromAPI(indirectBuffer);
    
    cmd.indirectOffset = dawn::wire::FromAPI(indirectOffset);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderBundleEncoderDrawIndirect(WGPURenderBundleEncoder cSelf, WGPUBuffer indirectBuffer, uint64_t indirectOffset) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderBundleEncoderDrawIndirectCmd cmd;

    cmd.self = cSelf;


    
    cmd.indirectBuffer = dawn::wire::FromAPI(indirectBuffer);
    
    cmd.indirectOffset = dawn::wire::FromAPI(indirectOffset);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT WGPURenderBundle wgpuDawnWireClientRenderBundleEncoderFinish(WGPURenderBundleEncoder cSelf, WGPURenderBundleDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderBundleEncoderFinishCmd cmd;

    cmd.self = cSelf;

    RenderBundle* returnObject = Create<RenderBundleEncoder*, RenderBundle>(self, descriptor);
    cmd.result = returnObject->GetWireHandle(self->GetClient());

    
    cmd.descriptor = dawn::wire::FromAPI(descriptor);

    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderBundleEncoderInsertDebugMarker(WGPURenderBundleEncoder cSelf, WGPUStringView markerLabel) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderBundleEncoderInsertDebugMarkerCmd cmd;

    cmd.self = cSelf;


    
    cmd.markerLabel = dawn::wire::FromAPI(markerLabel);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderBundleEncoderPopDebugGroup(WGPURenderBundleEncoder cSelf) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderBundleEncoderPopDebugGroupCmd cmd;

    cmd.self = cSelf;



    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderBundleEncoderPushDebugGroup(WGPURenderBundleEncoder cSelf, WGPUStringView groupLabel) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderBundleEncoderPushDebugGroupCmd cmd;

    cmd.self = cSelf;


    
    cmd.groupLabel = dawn::wire::FromAPI(groupLabel);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderBundleEncoderSetBindGroup(WGPURenderBundleEncoder cSelf, uint32_t groupIndex, WGPUBindGroup group, size_t dynamicOffsetCount, uint32_t const * dynamicOffsets) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderBundleEncoderSetBindGroupCmd cmd;

    cmd.self = cSelf;


    
    cmd.groupIndex = dawn::wire::FromAPI(groupIndex);
    
    cmd.group = dawn::wire::FromAPI(group);
    
    
    using dynamicOffsetsSpanT = std::remove_pointer_t<uint32_t const *>;
    auto* dynamicOffsetsPtr = reinterpret_cast<dynamicOffsetsSpanT*>(dawn::wire::FromAPI(dynamicOffsets));
    size_t dynamicOffsetsSizeV = dawn::checked_cast<size_t>(dynamicOffsetCount);
    // SAFETY: The webgpu.h user is required to pass valid ranges of objects.
    cmd.dynamicOffsets = DAWN_UNSAFE_BUFFERS(dawn::Span<dynamicOffsetsSpanT>(dynamicOffsetsPtr, dynamicOffsetsSizeV));

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderBundleEncoderSetImmediates(WGPURenderBundleEncoder cSelf, uint32_t offset, void const * data, size_t size) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderBundleEncoderSetImmediatesCmd cmd;

    cmd.self = cSelf;


    
    cmd.offset = dawn::wire::FromAPI(offset);
    
    using dataSpanT = std::remove_pointer_t<std::byte const *>;
    auto* dataPtr = reinterpret_cast<dataSpanT*>(dawn::wire::FromAPI(data));
    size_t dataSizeV = dawn::checked_cast<size_t>(size);
    // SAFETY: The webgpu.h user is required to pass valid ranges of objects.
    cmd.data = DAWN_UNSAFE_BUFFERS(dawn::Span<dataSpanT>(dataPtr, dataSizeV));
    

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderBundleEncoderSetIndexBuffer(WGPURenderBundleEncoder cSelf, WGPUBuffer buffer, WGPUIndexFormat format, uint64_t offset, uint64_t size) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderBundleEncoderSetIndexBufferCmd cmd;

    cmd.self = cSelf;


    
    cmd.buffer = dawn::wire::FromAPI(buffer);
    
    cmd.format = dawn::wire::FromAPI(format);
    
    cmd.offset = dawn::wire::FromAPI(offset);
    
    cmd.size = dawn::wire::FromAPI(size);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderBundleEncoderSetLabel(WGPURenderBundleEncoder cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderBundleEncoderSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderBundleEncoderSetPipeline(WGPURenderBundleEncoder cSelf, WGPURenderPipeline pipeline) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderBundleEncoderSetPipelineCmd cmd;

    cmd.self = cSelf;


    
    cmd.pipeline = dawn::wire::FromAPI(pipeline);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderBundleEncoderSetVertexBuffer(WGPURenderBundleEncoder cSelf, uint32_t slot, WGPUBuffer buffer, uint64_t offset, uint64_t size) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderBundleEncoderSetVertexBufferCmd cmd;

    cmd.self = cSelf;


    
    cmd.slot = dawn::wire::FromAPI(slot);
    
    cmd.buffer = dawn::wire::FromAPI(buffer);
    
    cmd.offset = dawn::wire::FromAPI(offset);
    
    cmd.size = dawn::wire::FromAPI(size);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderBundleEncoderAddRef(WGPURenderBundleEncoder cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderBundleEncoderRelease(WGPURenderBundleEncoder cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderBeginOcclusionQuery(WGPURenderPassEncoder cSelf, uint32_t queryIndex) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderBeginOcclusionQueryCmd cmd;

    cmd.self = cSelf;


    
    cmd.queryIndex = dawn::wire::FromAPI(queryIndex);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderDraw(WGPURenderPassEncoder cSelf, uint32_t vertexCount, uint32_t instanceCount, uint32_t firstVertex, uint32_t firstInstance) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderDrawCmd cmd;

    cmd.self = cSelf;


    
    cmd.vertexCount = dawn::wire::FromAPI(vertexCount);
    
    cmd.instanceCount = dawn::wire::FromAPI(instanceCount);
    
    cmd.firstVertex = dawn::wire::FromAPI(firstVertex);
    
    cmd.firstInstance = dawn::wire::FromAPI(firstInstance);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderDrawIndexed(WGPURenderPassEncoder cSelf, uint32_t indexCount, uint32_t instanceCount, uint32_t firstIndex, int32_t baseVertex, uint32_t firstInstance) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderDrawIndexedCmd cmd;

    cmd.self = cSelf;


    
    cmd.indexCount = dawn::wire::FromAPI(indexCount);
    
    cmd.instanceCount = dawn::wire::FromAPI(instanceCount);
    
    cmd.firstIndex = dawn::wire::FromAPI(firstIndex);
    
    cmd.baseVertex = dawn::wire::FromAPI(baseVertex);
    
    cmd.firstInstance = dawn::wire::FromAPI(firstInstance);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderDrawIndexedIndirect(WGPURenderPassEncoder cSelf, WGPUBuffer indirectBuffer, uint64_t indirectOffset) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderDrawIndexedIndirectCmd cmd;

    cmd.self = cSelf;


    
    cmd.indirectBuffer = dawn::wire::FromAPI(indirectBuffer);
    
    cmd.indirectOffset = dawn::wire::FromAPI(indirectOffset);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderDrawIndirect(WGPURenderPassEncoder cSelf, WGPUBuffer indirectBuffer, uint64_t indirectOffset) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderDrawIndirectCmd cmd;

    cmd.self = cSelf;


    
    cmd.indirectBuffer = dawn::wire::FromAPI(indirectBuffer);
    
    cmd.indirectOffset = dawn::wire::FromAPI(indirectOffset);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderEnd(WGPURenderPassEncoder cSelf) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderEndCmd cmd;

    cmd.self = cSelf;



    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderEndOcclusionQuery(WGPURenderPassEncoder cSelf) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderEndOcclusionQueryCmd cmd;

    cmd.self = cSelf;



    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderExecuteBundles(WGPURenderPassEncoder cSelf, size_t bundleCount, WGPURenderBundle const * bundles) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderExecuteBundlesCmd cmd;

    cmd.self = cSelf;


    
    
    using bundlesSpanT = std::remove_pointer_t<WGPURenderBundle const *>;
    auto* bundlesPtr = reinterpret_cast<bundlesSpanT*>(dawn::wire::FromAPI(bundles));
    size_t bundlesSizeV = dawn::checked_cast<size_t>(bundleCount);
    // SAFETY: The webgpu.h user is required to pass valid ranges of objects.
    cmd.bundles = DAWN_UNSAFE_BUFFERS(dawn::Span<bundlesSpanT>(bundlesPtr, bundlesSizeV));

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderInsertDebugMarker(WGPURenderPassEncoder cSelf, WGPUStringView markerLabel) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderInsertDebugMarkerCmd cmd;

    cmd.self = cSelf;


    
    cmd.markerLabel = dawn::wire::FromAPI(markerLabel);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderMultiDrawIndexedIndirect(WGPURenderPassEncoder cSelf, WGPUBuffer indirectBuffer, uint64_t indirectOffset, uint32_t maxDrawCount, WGPUBuffer drawCountBuffer, uint64_t drawCountBufferOffset) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderMultiDrawIndexedIndirectCmd cmd;

    cmd.self = cSelf;


    
    cmd.indirectBuffer = dawn::wire::FromAPI(indirectBuffer);
    
    cmd.indirectOffset = dawn::wire::FromAPI(indirectOffset);
    
    cmd.maxDrawCount = dawn::wire::FromAPI(maxDrawCount);
    
    cmd.drawCountBuffer = dawn::wire::FromAPI(drawCountBuffer);
    
    cmd.drawCountBufferOffset = dawn::wire::FromAPI(drawCountBufferOffset);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderMultiDrawIndirect(WGPURenderPassEncoder cSelf, WGPUBuffer indirectBuffer, uint64_t indirectOffset, uint32_t maxDrawCount, WGPUBuffer drawCountBuffer, uint64_t drawCountBufferOffset) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderMultiDrawIndirectCmd cmd;

    cmd.self = cSelf;


    
    cmd.indirectBuffer = dawn::wire::FromAPI(indirectBuffer);
    
    cmd.indirectOffset = dawn::wire::FromAPI(indirectOffset);
    
    cmd.maxDrawCount = dawn::wire::FromAPI(maxDrawCount);
    
    cmd.drawCountBuffer = dawn::wire::FromAPI(drawCountBuffer);
    
    cmd.drawCountBufferOffset = dawn::wire::FromAPI(drawCountBufferOffset);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderPixelLocalStorageBarrier(WGPURenderPassEncoder cSelf) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderPixelLocalStorageBarrierCmd cmd;

    cmd.self = cSelf;



    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderPopDebugGroup(WGPURenderPassEncoder cSelf) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderPopDebugGroupCmd cmd;

    cmd.self = cSelf;



    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderPushDebugGroup(WGPURenderPassEncoder cSelf, WGPUStringView groupLabel) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderPushDebugGroupCmd cmd;

    cmd.self = cSelf;


    
    cmd.groupLabel = dawn::wire::FromAPI(groupLabel);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderSetBindGroup(WGPURenderPassEncoder cSelf, uint32_t groupIndex, WGPUBindGroup group, size_t dynamicOffsetCount, uint32_t const * dynamicOffsets) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderSetBindGroupCmd cmd;

    cmd.self = cSelf;


    
    cmd.groupIndex = dawn::wire::FromAPI(groupIndex);
    
    cmd.group = dawn::wire::FromAPI(group);
    
    
    using dynamicOffsetsSpanT = std::remove_pointer_t<uint32_t const *>;
    auto* dynamicOffsetsPtr = reinterpret_cast<dynamicOffsetsSpanT*>(dawn::wire::FromAPI(dynamicOffsets));
    size_t dynamicOffsetsSizeV = dawn::checked_cast<size_t>(dynamicOffsetCount);
    // SAFETY: The webgpu.h user is required to pass valid ranges of objects.
    cmd.dynamicOffsets = DAWN_UNSAFE_BUFFERS(dawn::Span<dynamicOffsetsSpanT>(dynamicOffsetsPtr, dynamicOffsetsSizeV));

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderSetBlendConstant(WGPURenderPassEncoder cSelf, WGPUColor const * color) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderSetBlendConstantCmd cmd;

    cmd.self = cSelf;


    
    cmd.color = dawn::wire::FromAPI(color);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderSetImmediates(WGPURenderPassEncoder cSelf, uint32_t offset, void const * data, size_t size) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderSetImmediatesCmd cmd;

    cmd.self = cSelf;


    
    cmd.offset = dawn::wire::FromAPI(offset);
    
    using dataSpanT = std::remove_pointer_t<std::byte const *>;
    auto* dataPtr = reinterpret_cast<dataSpanT*>(dawn::wire::FromAPI(data));
    size_t dataSizeV = dawn::checked_cast<size_t>(size);
    // SAFETY: The webgpu.h user is required to pass valid ranges of objects.
    cmd.data = DAWN_UNSAFE_BUFFERS(dawn::Span<dataSpanT>(dataPtr, dataSizeV));
    

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderSetIndexBuffer(WGPURenderPassEncoder cSelf, WGPUBuffer buffer, WGPUIndexFormat format, uint64_t offset, uint64_t size) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderSetIndexBufferCmd cmd;

    cmd.self = cSelf;


    
    cmd.buffer = dawn::wire::FromAPI(buffer);
    
    cmd.format = dawn::wire::FromAPI(format);
    
    cmd.offset = dawn::wire::FromAPI(offset);
    
    cmd.size = dawn::wire::FromAPI(size);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderSetLabel(WGPURenderPassEncoder cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderSetPipeline(WGPURenderPassEncoder cSelf, WGPURenderPipeline pipeline) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderSetPipelineCmd cmd;

    cmd.self = cSelf;


    
    cmd.pipeline = dawn::wire::FromAPI(pipeline);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderSetResourceTable(WGPURenderPassEncoder cSelf, WGPUResourceTable table) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderSetResourceTableCmd cmd;

    cmd.self = cSelf;


    
    cmd.table = dawn::wire::FromAPI(table);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderSetScissorRect(WGPURenderPassEncoder cSelf, uint32_t x, uint32_t y, uint32_t width, uint32_t height) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderSetScissorRectCmd cmd;

    cmd.self = cSelf;


    
    cmd.x = dawn::wire::FromAPI(x);
    
    cmd.y = dawn::wire::FromAPI(y);
    
    cmd.width = dawn::wire::FromAPI(width);
    
    cmd.height = dawn::wire::FromAPI(height);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderSetStencilReference(WGPURenderPassEncoder cSelf, uint32_t reference) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderSetStencilReferenceCmd cmd;

    cmd.self = cSelf;


    
    cmd.reference = dawn::wire::FromAPI(reference);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderSetVertexBuffer(WGPURenderPassEncoder cSelf, uint32_t slot, WGPUBuffer buffer, uint64_t offset, uint64_t size) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderSetVertexBufferCmd cmd;

    cmd.self = cSelf;


    
    cmd.slot = dawn::wire::FromAPI(slot);
    
    cmd.buffer = dawn::wire::FromAPI(buffer);
    
    cmd.offset = dawn::wire::FromAPI(offset);
    
    cmd.size = dawn::wire::FromAPI(size);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderSetViewport(WGPURenderPassEncoder cSelf, float x, float y, float width, float height, float minDepth, float maxDepth) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderSetViewportCmd cmd;

    cmd.self = cSelf;


    
    cmd.x = dawn::wire::FromAPI(x);
    
    cmd.y = dawn::wire::FromAPI(y);
    
    cmd.width = dawn::wire::FromAPI(width);
    
    cmd.height = dawn::wire::FromAPI(height);
    
    cmd.minDepth = dawn::wire::FromAPI(minDepth);
    
    cmd.maxDepth = dawn::wire::FromAPI(maxDepth);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderWriteTimestamp(WGPURenderPassEncoder cSelf, WGPUQuerySet querySet, uint32_t queryIndex) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPassEncoderWriteTimestampCmd cmd;

    cmd.self = cSelf;


    
    cmd.querySet = dawn::wire::FromAPI(querySet);
    
    cmd.queryIndex = dawn::wire::FromAPI(queryIndex);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderAddRef(WGPURenderPassEncoder cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPassEncoderRelease(WGPURenderPassEncoder cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT WGPUBindGroupLayout wgpuDawnWireClientRenderPipelineGetBindGroupLayout(WGPURenderPipeline cSelf, uint32_t groupIndex) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPipelineGetBindGroupLayoutCmd cmd;

    cmd.self = cSelf;

    BindGroupLayout* returnObject = Create<RenderPipeline*, BindGroupLayout>(self, groupIndex);
    cmd.result = returnObject->GetWireHandle(self->GetClient());

    
    cmd.groupIndex = dawn::wire::FromAPI(groupIndex);

    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPipelineSetLabel(WGPURenderPipeline cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::RenderPipelineSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPipelineAddRef(WGPURenderPipeline cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientRenderPipelineRelease(WGPURenderPipeline cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT void wgpuDawnWireClientResourceTableDestroy(WGPUResourceTable cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIDestroy();

}

DAWN_WIRE_EXPORT uint32_t wgpuDawnWireClientResourceTableGetSize(WGPUResourceTable cSelf) {
    auto self = FromAPI(cSelf);
    
auto result =self->APIGetSize();
return ToAPI(result);

}

DAWN_WIRE_EXPORT uint32_t wgpuDawnWireClientResourceTableInsert(WGPUResourceTable cSelf, WGPUBindingResource const * resource) {
    auto self = FromAPI(cSelf);
    auto resource_ = FromAPI(resource);

auto result =self->APIInsert(resource_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUStatus wgpuDawnWireClientResourceTableRemove(WGPUResourceTable cSelf, uint32_t slot) {
    auto self = FromAPI(cSelf);
    auto slot_ = FromAPI(slot);

auto result =self->APIRemove(slot_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientResourceTableSetLabel(WGPUResourceTable cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::ResourceTableSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT WGPUStatus wgpuDawnWireClientResourceTableUpdate(WGPUResourceTable cSelf, uint32_t slot, WGPUBindingResource const * resource) {
    auto self = FromAPI(cSelf);
    auto slot_ = FromAPI(slot);
auto resource_ = FromAPI(resource);

auto result =self->APIUpdate(slot_, resource_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientResourceTableAddRef(WGPUResourceTable cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientResourceTableRelease(WGPUResourceTable cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT void wgpuDawnWireClientSamplerSetLabel(WGPUSampler cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::SamplerSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientSamplerAddRef(WGPUSampler cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientSamplerRelease(WGPUSampler cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT WGPUFuture wgpuDawnWireClientShaderModuleGetCompilationInfo(WGPUShaderModule cSelf, WGPUCompilationInfoCallbackInfo callbackInfo) {
    auto self = FromAPI(cSelf);
    auto callbackInfo_ = callbackInfo;

auto result =self->APIGetCompilationInfo(callbackInfo_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientShaderModuleSetLabel(WGPUShaderModule cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::ShaderModuleSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientShaderModuleAddRef(WGPUShaderModule cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientShaderModuleRelease(WGPUShaderModule cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT void wgpuDawnWireClientSupportedFeaturesFreeMembers(WGPUSupportedFeatures cSelf) {
    return APISupportedFeaturesFreeMembers(cSelf);
}


DAWN_WIRE_EXPORT void wgpuDawnWireClientSupportedInstanceFeaturesFreeMembers(WGPUSupportedInstanceFeatures cSelf) {
    return APISupportedInstanceFeaturesFreeMembers(cSelf);
}


DAWN_WIRE_EXPORT void wgpuDawnWireClientSupportedWGSLLanguageFeaturesFreeMembers(WGPUSupportedWGSLLanguageFeatures cSelf) {
    return APISupportedWGSLLanguageFeaturesFreeMembers(cSelf);
}


DAWN_WIRE_EXPORT void wgpuDawnWireClientSurfaceConfigure(WGPUSurface cSelf, WGPUSurfaceConfiguration const * config) {
    auto self = FromAPI(cSelf);
    auto config_ = FromAPI(config);

self->APIConfigure(config_);

}

DAWN_WIRE_EXPORT WGPUStatus wgpuDawnWireClientSurfaceGetCapabilities(WGPUSurface cSelf, WGPUAdapter adapter, WGPUSurfaceCapabilities * capabilities) {
    auto self = FromAPI(cSelf);
    auto adapter_ = FromAPI(adapter);
auto capabilities_ = FromAPI(capabilities);

auto result =self->APIGetCapabilities(adapter_, capabilities_);
return ToAPI(result);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientSurfaceGetCurrentTexture(WGPUSurface cSelf, WGPUSurfaceTexture * surfaceTexture) {
    auto self = FromAPI(cSelf);
    auto surfaceTexture_ = FromAPI(surfaceTexture);

self->APIGetCurrentTexture(surfaceTexture_);

}

DAWN_WIRE_EXPORT WGPUStatus wgpuDawnWireClientSurfacePresent(WGPUSurface cSelf) {
    auto self = FromAPI(cSelf);
    
auto result =self->APIPresent();
return ToAPI(result);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientSurfaceSetLabel(WGPUSurface cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::SurfaceSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientSurfaceUnconfigure(WGPUSurface cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIUnconfigure();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientSurfaceAddRef(WGPUSurface cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientSurfaceRelease(WGPUSurface cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT void wgpuDawnWireClientSurfaceCapabilitiesFreeMembers(WGPUSurfaceCapabilities cSelf) {
    return APISurfaceCapabilitiesFreeMembers(cSelf);
}


DAWN_WIRE_EXPORT void wgpuDawnWireClientTexelBufferViewSetLabel(WGPUTexelBufferView cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::TexelBufferViewSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientTexelBufferViewAddRef(WGPUTexelBufferView cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientTexelBufferViewRelease(WGPUTexelBufferView cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT WGPUTextureView wgpuDawnWireClientTextureCreateErrorView(WGPUTexture cSelf, WGPUTextureViewDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    dawn::wire::TextureCreateErrorViewCmd cmd;

    cmd.self = cSelf;

    TextureView* returnObject = Create<Texture*, TextureView>(self, descriptor);
    cmd.result = returnObject->GetWireHandle(self->GetClient());

    
    cmd.descriptor = dawn::wire::FromAPI(descriptor);

    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT WGPUTextureView wgpuDawnWireClientTextureCreateView(WGPUTexture cSelf, WGPUTextureViewDescriptor const * descriptor) {
    auto self = FromAPI(cSelf);
    dawn::wire::TextureCreateViewCmd cmd;

    cmd.self = cSelf;

    TextureView* returnObject = Create<Texture*, TextureView>(self, descriptor);
    cmd.result = returnObject->GetWireHandle(self->GetClient());

    
    cmd.descriptor = dawn::wire::FromAPI(descriptor);

    self->GetClient()->SerializeCommand(std::move(cmd));

    return ToAPI(returnObject);
}

DAWN_WIRE_EXPORT void wgpuDawnWireClientTextureDestroy(WGPUTexture cSelf) {
    auto self = FromAPI(cSelf);
    dawn::wire::TextureDestroyCmd cmd;

    cmd.self = cSelf;



    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT uint32_t wgpuDawnWireClientTextureGetDepthOrArrayLayers(WGPUTexture cSelf) {
    auto self = FromAPI(cSelf);
    
auto result =self->APIGetDepthOrArrayLayers();
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUTextureDimension wgpuDawnWireClientTextureGetDimension(WGPUTexture cSelf) {
    auto self = FromAPI(cSelf);
    
auto result =self->APIGetDimension();
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUTextureFormat wgpuDawnWireClientTextureGetFormat(WGPUTexture cSelf) {
    auto self = FromAPI(cSelf);
    
auto result =self->APIGetFormat();
return ToAPI(result);

}

DAWN_WIRE_EXPORT uint32_t wgpuDawnWireClientTextureGetHeight(WGPUTexture cSelf) {
    auto self = FromAPI(cSelf);
    
auto result =self->APIGetHeight();
return ToAPI(result);

}

DAWN_WIRE_EXPORT uint32_t wgpuDawnWireClientTextureGetMipLevelCount(WGPUTexture cSelf) {
    auto self = FromAPI(cSelf);
    
auto result =self->APIGetMipLevelCount();
return ToAPI(result);

}

DAWN_WIRE_EXPORT uint32_t wgpuDawnWireClientTextureGetSampleCount(WGPUTexture cSelf) {
    auto self = FromAPI(cSelf);
    
auto result =self->APIGetSampleCount();
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUTextureViewDimension wgpuDawnWireClientTextureGetTextureBindingViewDimension(WGPUTexture cSelf) {
    auto self = FromAPI(cSelf);
    
auto result =self->APIGetTextureBindingViewDimension();
return ToAPI(result);

}

DAWN_WIRE_EXPORT WGPUTextureUsage wgpuDawnWireClientTextureGetUsage(WGPUTexture cSelf) {
    auto self = FromAPI(cSelf);
    
auto result =self->APIGetUsage();
return ToAPI(result);

}

DAWN_WIRE_EXPORT uint32_t wgpuDawnWireClientTextureGetWidth(WGPUTexture cSelf) {
    auto self = FromAPI(cSelf);
    
auto result =self->APIGetWidth();
return ToAPI(result);

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientTextureSetLabel(WGPUTexture cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::TextureSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientTextureAddRef(WGPUTexture cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientTextureRelease(WGPUTexture cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT void wgpuDawnWireClientTextureViewSetLabel(WGPUTextureView cSelf, WGPUStringView label) {
    auto self = FromAPI(cSelf);
    dawn::wire::TextureViewSetLabelCmd cmd;

    cmd.self = cSelf;


    
    cmd.label = dawn::wire::FromAPI(label);

    self->GetClient()->SerializeCommand(std::move(cmd));

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientTextureViewAddRef(WGPUTextureView cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIAddRef();

}

DAWN_WIRE_EXPORT void wgpuDawnWireClientTextureViewRelease(WGPUTextureView cSelf) {
    auto self = FromAPI(cSelf);
    
self->APIRelease();

}


DAWN_WIRE_EXPORT WGPUProc wgpuDawnWireClientGetProcAddress(WGPUStringView cProcName) {
    if (cProcName.data == nullptr) {
        return nullptr;
    }

    static const absl::NoDestructor<absl::flat_hash_map<std::string_view, WGPUProc>> sProcMap(
        absl::flat_hash_map<std::string_view, WGPUProc>{
            {"wgpuAdapterAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientAdapterAddRef)},
            {"wgpuAdapterCreateDevice", reinterpret_cast<WGPUProc>(wgpuDawnWireClientAdapterCreateDevice)},
            {"wgpuAdapterGetFeatures", reinterpret_cast<WGPUProc>(wgpuDawnWireClientAdapterGetFeatures)},
            {"wgpuAdapterGetFormatCapabilities", reinterpret_cast<WGPUProc>(wgpuDawnWireClientAdapterGetFormatCapabilities)},
            {"wgpuAdapterGetInfo", reinterpret_cast<WGPUProc>(wgpuDawnWireClientAdapterGetInfo)},
            {"wgpuAdapterGetInstance", reinterpret_cast<WGPUProc>(wgpuDawnWireClientAdapterGetInstance)},
            {"wgpuAdapterGetLimits", reinterpret_cast<WGPUProc>(wgpuDawnWireClientAdapterGetLimits)},
            {"wgpuAdapterHasFeature", reinterpret_cast<WGPUProc>(wgpuDawnWireClientAdapterHasFeature)},
            {"wgpuAdapterInfoFreeMembers", reinterpret_cast<WGPUProc>(wgpuDawnWireClientAdapterInfoFreeMembers)},
            {"wgpuAdapterPropertiesMemoryHeapsFreeMembers", reinterpret_cast<WGPUProc>(wgpuDawnWireClientAdapterPropertiesMemoryHeapsFreeMembers)},
            {"wgpuAdapterPropertiesSubgroupMatrixConfigsFreeMembers", reinterpret_cast<WGPUProc>(wgpuDawnWireClientAdapterPropertiesSubgroupMatrixConfigsFreeMembers)},
            {"wgpuAdapterRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientAdapterRelease)},
            {"wgpuAdapterRequestDevice", reinterpret_cast<WGPUProc>(wgpuDawnWireClientAdapterRequestDevice)},
            {"wgpuBindGroupAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientBindGroupAddRef)},
            {"wgpuBindGroupLayoutAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientBindGroupLayoutAddRef)},
            {"wgpuBindGroupLayoutRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientBindGroupLayoutRelease)},
            {"wgpuBindGroupLayoutSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientBindGroupLayoutSetLabel)},
            {"wgpuBindGroupRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientBindGroupRelease)},
            {"wgpuBindGroupSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientBindGroupSetLabel)},
            {"wgpuBufferAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientBufferAddRef)},
            {"wgpuBufferCreateTexelView", reinterpret_cast<WGPUProc>(wgpuDawnWireClientBufferCreateTexelView)},
            {"wgpuBufferDestroy", reinterpret_cast<WGPUProc>(wgpuDawnWireClientBufferDestroy)},
            {"wgpuBufferGetConstMappedRange", reinterpret_cast<WGPUProc>(wgpuDawnWireClientBufferGetConstMappedRange)},
            {"wgpuBufferGetMapState", reinterpret_cast<WGPUProc>(wgpuDawnWireClientBufferGetMapState)},
            {"wgpuBufferGetMappedRange", reinterpret_cast<WGPUProc>(wgpuDawnWireClientBufferGetMappedRange)},
            {"wgpuBufferGetSize", reinterpret_cast<WGPUProc>(wgpuDawnWireClientBufferGetSize)},
            {"wgpuBufferGetUsage", reinterpret_cast<WGPUProc>(wgpuDawnWireClientBufferGetUsage)},
            {"wgpuBufferMapAsync", reinterpret_cast<WGPUProc>(wgpuDawnWireClientBufferMapAsync)},
            {"wgpuBufferReadMappedRange", reinterpret_cast<WGPUProc>(wgpuDawnWireClientBufferReadMappedRange)},
            {"wgpuBufferRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientBufferRelease)},
            {"wgpuBufferSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientBufferSetLabel)},
            {"wgpuBufferUnmap", reinterpret_cast<WGPUProc>(wgpuDawnWireClientBufferUnmap)},
            {"wgpuBufferWriteMappedRange", reinterpret_cast<WGPUProc>(wgpuDawnWireClientBufferWriteMappedRange)},
            {"wgpuCommandBufferAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientCommandBufferAddRef)},
            {"wgpuCommandBufferRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientCommandBufferRelease)},
            {"wgpuCommandBufferSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientCommandBufferSetLabel)},
            {"wgpuCommandEncoderAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientCommandEncoderAddRef)},
            {"wgpuCommandEncoderBeginComputePass", reinterpret_cast<WGPUProc>(wgpuDawnWireClientCommandEncoderBeginComputePass)},
            {"wgpuCommandEncoderBeginRenderPass", reinterpret_cast<WGPUProc>(wgpuDawnWireClientCommandEncoderBeginRenderPass)},
            {"wgpuCommandEncoderClearBuffer", reinterpret_cast<WGPUProc>(wgpuDawnWireClientCommandEncoderClearBuffer)},
            {"wgpuCommandEncoderCopyBufferToBuffer", reinterpret_cast<WGPUProc>(wgpuDawnWireClientCommandEncoderCopyBufferToBuffer)},
            {"wgpuCommandEncoderCopyBufferToTexture", reinterpret_cast<WGPUProc>(wgpuDawnWireClientCommandEncoderCopyBufferToTexture)},
            {"wgpuCommandEncoderCopyTextureToBuffer", reinterpret_cast<WGPUProc>(wgpuDawnWireClientCommandEncoderCopyTextureToBuffer)},
            {"wgpuCommandEncoderCopyTextureToTexture", reinterpret_cast<WGPUProc>(wgpuDawnWireClientCommandEncoderCopyTextureToTexture)},
            {"wgpuCommandEncoderFinish", reinterpret_cast<WGPUProc>(wgpuDawnWireClientCommandEncoderFinish)},
            {"wgpuCommandEncoderInjectValidationError", reinterpret_cast<WGPUProc>(wgpuDawnWireClientCommandEncoderInjectValidationError)},
            {"wgpuCommandEncoderInsertDebugMarker", reinterpret_cast<WGPUProc>(wgpuDawnWireClientCommandEncoderInsertDebugMarker)},
            {"wgpuCommandEncoderPopDebugGroup", reinterpret_cast<WGPUProc>(wgpuDawnWireClientCommandEncoderPopDebugGroup)},
            {"wgpuCommandEncoderPushDebugGroup", reinterpret_cast<WGPUProc>(wgpuDawnWireClientCommandEncoderPushDebugGroup)},
            {"wgpuCommandEncoderRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientCommandEncoderRelease)},
            {"wgpuCommandEncoderResolveQuerySet", reinterpret_cast<WGPUProc>(wgpuDawnWireClientCommandEncoderResolveQuerySet)},
            {"wgpuCommandEncoderSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientCommandEncoderSetLabel)},
            {"wgpuCommandEncoderWriteBuffer", reinterpret_cast<WGPUProc>(wgpuDawnWireClientCommandEncoderWriteBuffer)},
            {"wgpuCommandEncoderWriteTimestamp", reinterpret_cast<WGPUProc>(wgpuDawnWireClientCommandEncoderWriteTimestamp)},
            {"wgpuComputePassEncoderAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientComputePassEncoderAddRef)},
            {"wgpuComputePassEncoderDispatchWorkgroups", reinterpret_cast<WGPUProc>(wgpuDawnWireClientComputePassEncoderDispatchWorkgroups)},
            {"wgpuComputePassEncoderDispatchWorkgroupsIndirect", reinterpret_cast<WGPUProc>(wgpuDawnWireClientComputePassEncoderDispatchWorkgroupsIndirect)},
            {"wgpuComputePassEncoderEnd", reinterpret_cast<WGPUProc>(wgpuDawnWireClientComputePassEncoderEnd)},
            {"wgpuComputePassEncoderInsertDebugMarker", reinterpret_cast<WGPUProc>(wgpuDawnWireClientComputePassEncoderInsertDebugMarker)},
            {"wgpuComputePassEncoderPopDebugGroup", reinterpret_cast<WGPUProc>(wgpuDawnWireClientComputePassEncoderPopDebugGroup)},
            {"wgpuComputePassEncoderPushDebugGroup", reinterpret_cast<WGPUProc>(wgpuDawnWireClientComputePassEncoderPushDebugGroup)},
            {"wgpuComputePassEncoderRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientComputePassEncoderRelease)},
            {"wgpuComputePassEncoderSetBindGroup", reinterpret_cast<WGPUProc>(wgpuDawnWireClientComputePassEncoderSetBindGroup)},
            {"wgpuComputePassEncoderSetImmediates", reinterpret_cast<WGPUProc>(wgpuDawnWireClientComputePassEncoderSetImmediates)},
            {"wgpuComputePassEncoderSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientComputePassEncoderSetLabel)},
            {"wgpuComputePassEncoderSetPipeline", reinterpret_cast<WGPUProc>(wgpuDawnWireClientComputePassEncoderSetPipeline)},
            {"wgpuComputePassEncoderSetResourceTable", reinterpret_cast<WGPUProc>(wgpuDawnWireClientComputePassEncoderSetResourceTable)},
            {"wgpuComputePassEncoderWriteTimestamp", reinterpret_cast<WGPUProc>(wgpuDawnWireClientComputePassEncoderWriteTimestamp)},
            {"wgpuComputePipelineAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientComputePipelineAddRef)},
            {"wgpuComputePipelineGetBindGroupLayout", reinterpret_cast<WGPUProc>(wgpuDawnWireClientComputePipelineGetBindGroupLayout)},
            {"wgpuComputePipelineRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientComputePipelineRelease)},
            {"wgpuComputePipelineSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientComputePipelineSetLabel)},
            {"wgpuCreateInstance", reinterpret_cast<WGPUProc>(wgpuDawnWireClientCreateInstance)},
            {"wgpuDawnDrmFormatCapabilitiesFreeMembers", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDawnDrmFormatCapabilitiesFreeMembers)},
            {"wgpuDeviceAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceAddRef)},
            {"wgpuDeviceCreateBindGroup", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceCreateBindGroup)},
            {"wgpuDeviceCreateBindGroupLayout", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceCreateBindGroupLayout)},
            {"wgpuDeviceCreateBuffer", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceCreateBuffer)},
            {"wgpuDeviceCreateCommandEncoder", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceCreateCommandEncoder)},
            {"wgpuDeviceCreateComputePipeline", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceCreateComputePipeline)},
            {"wgpuDeviceCreateComputePipelineAsync", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceCreateComputePipelineAsync)},
            {"wgpuDeviceCreateErrorBuffer", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceCreateErrorBuffer)},
            {"wgpuDeviceCreateErrorComputePipeline", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceCreateErrorComputePipeline)},
            {"wgpuDeviceCreateErrorExternalTexture", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceCreateErrorExternalTexture)},
            {"wgpuDeviceCreateErrorRenderPipeline", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceCreateErrorRenderPipeline)},
            {"wgpuDeviceCreateErrorShaderModule", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceCreateErrorShaderModule)},
            {"wgpuDeviceCreateErrorTexture", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceCreateErrorTexture)},
            {"wgpuDeviceCreateExternalTexture", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceCreateExternalTexture)},
            {"wgpuDeviceCreatePipelineLayout", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceCreatePipelineLayout)},
            {"wgpuDeviceCreateQuerySet", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceCreateQuerySet)},
            {"wgpuDeviceCreateRenderBundleEncoder", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceCreateRenderBundleEncoder)},
            {"wgpuDeviceCreateRenderPipeline", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceCreateRenderPipeline)},
            {"wgpuDeviceCreateRenderPipelineAsync", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceCreateRenderPipelineAsync)},
            {"wgpuDeviceCreateResourceTable", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceCreateResourceTable)},
            {"wgpuDeviceCreateSampler", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceCreateSampler)},
            {"wgpuDeviceCreateShaderModule", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceCreateShaderModule)},
            {"wgpuDeviceCreateTexture", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceCreateTexture)},
            {"wgpuDeviceDestroy", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceDestroy)},
            {"wgpuDeviceForceLoss", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceForceLoss)},
            {"wgpuDeviceGetAdapter", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceGetAdapter)},
            {"wgpuDeviceGetAdapterInfo", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceGetAdapterInfo)},
            {"wgpuDeviceGetFeatures", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceGetFeatures)},
            {"wgpuDeviceGetLimits", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceGetLimits)},
            {"wgpuDeviceGetLostFuture", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceGetLostFuture)},
            {"wgpuDeviceGetQueue", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceGetQueue)},
            {"wgpuDeviceHasFeature", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceHasFeature)},
            {"wgpuDeviceInjectError", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceInjectError)},
            {"wgpuDevicePopErrorScope", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDevicePopErrorScope)},
            {"wgpuDevicePushErrorScope", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDevicePushErrorScope)},
            {"wgpuDeviceRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceRelease)},
            {"wgpuDeviceSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceSetLabel)},
            {"wgpuDeviceSetLoggingCallback", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceSetLoggingCallback)},
            {"wgpuDeviceTick", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceTick)},
            {"wgpuDeviceValidateTextureDescriptor", reinterpret_cast<WGPUProc>(wgpuDawnWireClientDeviceValidateTextureDescriptor)},
            {"wgpuExternalTextureAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientExternalTextureAddRef)},
            {"wgpuExternalTextureDestroy", reinterpret_cast<WGPUProc>(wgpuDawnWireClientExternalTextureDestroy)},
            {"wgpuExternalTextureExpire", reinterpret_cast<WGPUProc>(wgpuDawnWireClientExternalTextureExpire)},
            {"wgpuExternalTextureRefresh", reinterpret_cast<WGPUProc>(wgpuDawnWireClientExternalTextureRefresh)},
            {"wgpuExternalTextureRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientExternalTextureRelease)},
            {"wgpuExternalTextureSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientExternalTextureSetLabel)},
            {"wgpuGetInstanceFeatures", reinterpret_cast<WGPUProc>(wgpuDawnWireClientGetInstanceFeatures)},
            {"wgpuGetInstanceLimits", reinterpret_cast<WGPUProc>(wgpuDawnWireClientGetInstanceLimits)},
            {"wgpuGetProcAddress", reinterpret_cast<WGPUProc>(wgpuDawnWireClientGetProcAddress)},
            {"wgpuHasInstanceFeature", reinterpret_cast<WGPUProc>(wgpuDawnWireClientHasInstanceFeature)},
            {"wgpuInstanceAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientInstanceAddRef)},
            {"wgpuInstanceCreateSurface", reinterpret_cast<WGPUProc>(wgpuDawnWireClientInstanceCreateSurface)},
            {"wgpuInstanceGetWGSLLanguageFeatures", reinterpret_cast<WGPUProc>(wgpuDawnWireClientInstanceGetWGSLLanguageFeatures)},
            {"wgpuInstanceHasWGSLLanguageFeature", reinterpret_cast<WGPUProc>(wgpuDawnWireClientInstanceHasWGSLLanguageFeature)},
            {"wgpuInstanceProcessEvents", reinterpret_cast<WGPUProc>(wgpuDawnWireClientInstanceProcessEvents)},
            {"wgpuInstanceRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientInstanceRelease)},
            {"wgpuInstanceRequestAdapter", reinterpret_cast<WGPUProc>(wgpuDawnWireClientInstanceRequestAdapter)},
            {"wgpuInstanceWaitAny", reinterpret_cast<WGPUProc>(wgpuDawnWireClientInstanceWaitAny)},
            {"wgpuPipelineLayoutAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientPipelineLayoutAddRef)},
            {"wgpuPipelineLayoutRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientPipelineLayoutRelease)},
            {"wgpuPipelineLayoutSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientPipelineLayoutSetLabel)},
            {"wgpuQuerySetAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientQuerySetAddRef)},
            {"wgpuQuerySetDestroy", reinterpret_cast<WGPUProc>(wgpuDawnWireClientQuerySetDestroy)},
            {"wgpuQuerySetGetCount", reinterpret_cast<WGPUProc>(wgpuDawnWireClientQuerySetGetCount)},
            {"wgpuQuerySetGetType", reinterpret_cast<WGPUProc>(wgpuDawnWireClientQuerySetGetType)},
            {"wgpuQuerySetRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientQuerySetRelease)},
            {"wgpuQuerySetSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientQuerySetSetLabel)},
            {"wgpuQueueAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientQueueAddRef)},
            {"wgpuQueueCopyExternalTextureForBrowser", reinterpret_cast<WGPUProc>(wgpuDawnWireClientQueueCopyExternalTextureForBrowser)},
            {"wgpuQueueCopyTextureForBrowser", reinterpret_cast<WGPUProc>(wgpuDawnWireClientQueueCopyTextureForBrowser)},
            {"wgpuQueueOnSubmittedWorkDone", reinterpret_cast<WGPUProc>(wgpuDawnWireClientQueueOnSubmittedWorkDone)},
            {"wgpuQueueRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientQueueRelease)},
            {"wgpuQueueSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientQueueSetLabel)},
            {"wgpuQueueSubmit", reinterpret_cast<WGPUProc>(wgpuDawnWireClientQueueSubmit)},
            {"wgpuQueueWriteBuffer", reinterpret_cast<WGPUProc>(wgpuDawnWireClientQueueWriteBuffer)},
            {"wgpuQueueWriteTexture", reinterpret_cast<WGPUProc>(wgpuDawnWireClientQueueWriteTexture)},
            {"wgpuRenderBundleAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderBundleAddRef)},
            {"wgpuRenderBundleEncoderAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderBundleEncoderAddRef)},
            {"wgpuRenderBundleEncoderDraw", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderBundleEncoderDraw)},
            {"wgpuRenderBundleEncoderDrawIndexed", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderBundleEncoderDrawIndexed)},
            {"wgpuRenderBundleEncoderDrawIndexedIndirect", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderBundleEncoderDrawIndexedIndirect)},
            {"wgpuRenderBundleEncoderDrawIndirect", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderBundleEncoderDrawIndirect)},
            {"wgpuRenderBundleEncoderFinish", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderBundleEncoderFinish)},
            {"wgpuRenderBundleEncoderInsertDebugMarker", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderBundleEncoderInsertDebugMarker)},
            {"wgpuRenderBundleEncoderPopDebugGroup", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderBundleEncoderPopDebugGroup)},
            {"wgpuRenderBundleEncoderPushDebugGroup", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderBundleEncoderPushDebugGroup)},
            {"wgpuRenderBundleEncoderRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderBundleEncoderRelease)},
            {"wgpuRenderBundleEncoderSetBindGroup", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderBundleEncoderSetBindGroup)},
            {"wgpuRenderBundleEncoderSetImmediates", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderBundleEncoderSetImmediates)},
            {"wgpuRenderBundleEncoderSetIndexBuffer", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderBundleEncoderSetIndexBuffer)},
            {"wgpuRenderBundleEncoderSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderBundleEncoderSetLabel)},
            {"wgpuRenderBundleEncoderSetPipeline", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderBundleEncoderSetPipeline)},
            {"wgpuRenderBundleEncoderSetVertexBuffer", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderBundleEncoderSetVertexBuffer)},
            {"wgpuRenderBundleRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderBundleRelease)},
            {"wgpuRenderBundleSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderBundleSetLabel)},
            {"wgpuRenderPassEncoderAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderAddRef)},
            {"wgpuRenderPassEncoderBeginOcclusionQuery", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderBeginOcclusionQuery)},
            {"wgpuRenderPassEncoderDraw", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderDraw)},
            {"wgpuRenderPassEncoderDrawIndexed", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderDrawIndexed)},
            {"wgpuRenderPassEncoderDrawIndexedIndirect", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderDrawIndexedIndirect)},
            {"wgpuRenderPassEncoderDrawIndirect", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderDrawIndirect)},
            {"wgpuRenderPassEncoderEnd", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderEnd)},
            {"wgpuRenderPassEncoderEndOcclusionQuery", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderEndOcclusionQuery)},
            {"wgpuRenderPassEncoderExecuteBundles", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderExecuteBundles)},
            {"wgpuRenderPassEncoderInsertDebugMarker", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderInsertDebugMarker)},
            {"wgpuRenderPassEncoderMultiDrawIndexedIndirect", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderMultiDrawIndexedIndirect)},
            {"wgpuRenderPassEncoderMultiDrawIndirect", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderMultiDrawIndirect)},
            {"wgpuRenderPassEncoderPixelLocalStorageBarrier", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderPixelLocalStorageBarrier)},
            {"wgpuRenderPassEncoderPopDebugGroup", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderPopDebugGroup)},
            {"wgpuRenderPassEncoderPushDebugGroup", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderPushDebugGroup)},
            {"wgpuRenderPassEncoderRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderRelease)},
            {"wgpuRenderPassEncoderSetBindGroup", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderSetBindGroup)},
            {"wgpuRenderPassEncoderSetBlendConstant", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderSetBlendConstant)},
            {"wgpuRenderPassEncoderSetImmediates", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderSetImmediates)},
            {"wgpuRenderPassEncoderSetIndexBuffer", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderSetIndexBuffer)},
            {"wgpuRenderPassEncoderSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderSetLabel)},
            {"wgpuRenderPassEncoderSetPipeline", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderSetPipeline)},
            {"wgpuRenderPassEncoderSetResourceTable", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderSetResourceTable)},
            {"wgpuRenderPassEncoderSetScissorRect", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderSetScissorRect)},
            {"wgpuRenderPassEncoderSetStencilReference", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderSetStencilReference)},
            {"wgpuRenderPassEncoderSetVertexBuffer", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderSetVertexBuffer)},
            {"wgpuRenderPassEncoderSetViewport", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderSetViewport)},
            {"wgpuRenderPassEncoderWriteTimestamp", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPassEncoderWriteTimestamp)},
            {"wgpuRenderPipelineAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPipelineAddRef)},
            {"wgpuRenderPipelineGetBindGroupLayout", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPipelineGetBindGroupLayout)},
            {"wgpuRenderPipelineRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPipelineRelease)},
            {"wgpuRenderPipelineSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientRenderPipelineSetLabel)},
            {"wgpuResourceTableAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientResourceTableAddRef)},
            {"wgpuResourceTableDestroy", reinterpret_cast<WGPUProc>(wgpuDawnWireClientResourceTableDestroy)},
            {"wgpuResourceTableGetSize", reinterpret_cast<WGPUProc>(wgpuDawnWireClientResourceTableGetSize)},
            {"wgpuResourceTableInsert", reinterpret_cast<WGPUProc>(wgpuDawnWireClientResourceTableInsert)},
            {"wgpuResourceTableRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientResourceTableRelease)},
            {"wgpuResourceTableRemove", reinterpret_cast<WGPUProc>(wgpuDawnWireClientResourceTableRemove)},
            {"wgpuResourceTableSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientResourceTableSetLabel)},
            {"wgpuResourceTableUpdate", reinterpret_cast<WGPUProc>(wgpuDawnWireClientResourceTableUpdate)},
            {"wgpuSamplerAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientSamplerAddRef)},
            {"wgpuSamplerRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientSamplerRelease)},
            {"wgpuSamplerSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientSamplerSetLabel)},
            {"wgpuShaderModuleAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientShaderModuleAddRef)},
            {"wgpuShaderModuleGetCompilationInfo", reinterpret_cast<WGPUProc>(wgpuDawnWireClientShaderModuleGetCompilationInfo)},
            {"wgpuShaderModuleRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientShaderModuleRelease)},
            {"wgpuShaderModuleSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientShaderModuleSetLabel)},
            {"wgpuSupportedFeaturesFreeMembers", reinterpret_cast<WGPUProc>(wgpuDawnWireClientSupportedFeaturesFreeMembers)},
            {"wgpuSupportedInstanceFeaturesFreeMembers", reinterpret_cast<WGPUProc>(wgpuDawnWireClientSupportedInstanceFeaturesFreeMembers)},
            {"wgpuSupportedWGSLLanguageFeaturesFreeMembers", reinterpret_cast<WGPUProc>(wgpuDawnWireClientSupportedWGSLLanguageFeaturesFreeMembers)},
            {"wgpuSurfaceAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientSurfaceAddRef)},
            {"wgpuSurfaceCapabilitiesFreeMembers", reinterpret_cast<WGPUProc>(wgpuDawnWireClientSurfaceCapabilitiesFreeMembers)},
            {"wgpuSurfaceConfigure", reinterpret_cast<WGPUProc>(wgpuDawnWireClientSurfaceConfigure)},
            {"wgpuSurfaceGetCapabilities", reinterpret_cast<WGPUProc>(wgpuDawnWireClientSurfaceGetCapabilities)},
            {"wgpuSurfaceGetCurrentTexture", reinterpret_cast<WGPUProc>(wgpuDawnWireClientSurfaceGetCurrentTexture)},
            {"wgpuSurfacePresent", reinterpret_cast<WGPUProc>(wgpuDawnWireClientSurfacePresent)},
            {"wgpuSurfaceRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientSurfaceRelease)},
            {"wgpuSurfaceSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientSurfaceSetLabel)},
            {"wgpuSurfaceUnconfigure", reinterpret_cast<WGPUProc>(wgpuDawnWireClientSurfaceUnconfigure)},
            {"wgpuTexelBufferViewAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientTexelBufferViewAddRef)},
            {"wgpuTexelBufferViewRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientTexelBufferViewRelease)},
            {"wgpuTexelBufferViewSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientTexelBufferViewSetLabel)},
            {"wgpuTextureAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientTextureAddRef)},
            {"wgpuTextureCreateErrorView", reinterpret_cast<WGPUProc>(wgpuDawnWireClientTextureCreateErrorView)},
            {"wgpuTextureCreateView", reinterpret_cast<WGPUProc>(wgpuDawnWireClientTextureCreateView)},
            {"wgpuTextureDestroy", reinterpret_cast<WGPUProc>(wgpuDawnWireClientTextureDestroy)},
            {"wgpuTextureGetDepthOrArrayLayers", reinterpret_cast<WGPUProc>(wgpuDawnWireClientTextureGetDepthOrArrayLayers)},
            {"wgpuTextureGetDimension", reinterpret_cast<WGPUProc>(wgpuDawnWireClientTextureGetDimension)},
            {"wgpuTextureGetFormat", reinterpret_cast<WGPUProc>(wgpuDawnWireClientTextureGetFormat)},
            {"wgpuTextureGetHeight", reinterpret_cast<WGPUProc>(wgpuDawnWireClientTextureGetHeight)},
            {"wgpuTextureGetMipLevelCount", reinterpret_cast<WGPUProc>(wgpuDawnWireClientTextureGetMipLevelCount)},
            {"wgpuTextureGetSampleCount", reinterpret_cast<WGPUProc>(wgpuDawnWireClientTextureGetSampleCount)},
            {"wgpuTextureGetTextureBindingViewDimension", reinterpret_cast<WGPUProc>(wgpuDawnWireClientTextureGetTextureBindingViewDimension)},
            {"wgpuTextureGetUsage", reinterpret_cast<WGPUProc>(wgpuDawnWireClientTextureGetUsage)},
            {"wgpuTextureGetWidth", reinterpret_cast<WGPUProc>(wgpuDawnWireClientTextureGetWidth)},
            {"wgpuTextureRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientTextureRelease)},
            {"wgpuTextureSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientTextureSetLabel)},
            {"wgpuTextureViewAddRef", reinterpret_cast<WGPUProc>(wgpuDawnWireClientTextureViewAddRef)},
            {"wgpuTextureViewRelease", reinterpret_cast<WGPUProc>(wgpuDawnWireClientTextureViewRelease)},
            {"wgpuTextureViewSetLabel", reinterpret_cast<WGPUProc>(wgpuDawnWireClientTextureViewSetLabel)},
        });

    std::string_view procName(cProcName.data, cProcName.length != WGPU_STRLEN ? cProcName.length : strlen(cProcName.data));
    auto it = sProcMap->find(procName);
    return it != sProcMap->end() ? it->second : nullptr;
}

namespace dawn::wire::client {


    constexpr DawnProcTable MakeProcTable() {
        DawnProcTable procs = {};
        std::ranges::copy(dawn::kDawnVersion, procs.version);
        procs.createInstance = wgpuDawnWireClientCreateInstance;
        procs.getInstanceFeatures = wgpuDawnWireClientGetInstanceFeatures;
        procs.getInstanceLimits = wgpuDawnWireClientGetInstanceLimits;
        procs.hasInstanceFeature = wgpuDawnWireClientHasInstanceFeature;
        procs.getProcAddress = wgpuDawnWireClientGetProcAddress;
        procs.adapterCreateDevice = wgpuDawnWireClientAdapterCreateDevice;
        procs.adapterGetFeatures = wgpuDawnWireClientAdapterGetFeatures;
        procs.adapterGetFormatCapabilities = wgpuDawnWireClientAdapterGetFormatCapabilities;
        procs.adapterGetInfo = wgpuDawnWireClientAdapterGetInfo;
        procs.adapterGetInstance = wgpuDawnWireClientAdapterGetInstance;
        procs.adapterGetLimits = wgpuDawnWireClientAdapterGetLimits;
        procs.adapterHasFeature = wgpuDawnWireClientAdapterHasFeature;
        procs.adapterRequestDevice = wgpuDawnWireClientAdapterRequestDevice;
        procs.adapterAddRef = wgpuDawnWireClientAdapterAddRef;
        procs.adapterRelease = wgpuDawnWireClientAdapterRelease;
        procs.adapterInfoFreeMembers = wgpuDawnWireClientAdapterInfoFreeMembers;
        procs.adapterPropertiesMemoryHeapsFreeMembers = wgpuDawnWireClientAdapterPropertiesMemoryHeapsFreeMembers;
        procs.adapterPropertiesSubgroupMatrixConfigsFreeMembers = wgpuDawnWireClientAdapterPropertiesSubgroupMatrixConfigsFreeMembers;
        procs.bindGroupSetLabel = wgpuDawnWireClientBindGroupSetLabel;
        procs.bindGroupAddRef = wgpuDawnWireClientBindGroupAddRef;
        procs.bindGroupRelease = wgpuDawnWireClientBindGroupRelease;
        procs.bindGroupLayoutSetLabel = wgpuDawnWireClientBindGroupLayoutSetLabel;
        procs.bindGroupLayoutAddRef = wgpuDawnWireClientBindGroupLayoutAddRef;
        procs.bindGroupLayoutRelease = wgpuDawnWireClientBindGroupLayoutRelease;
        procs.bufferCreateTexelView = wgpuDawnWireClientBufferCreateTexelView;
        procs.bufferDestroy = wgpuDawnWireClientBufferDestroy;
        procs.bufferGetConstMappedRange = wgpuDawnWireClientBufferGetConstMappedRange;
        procs.bufferGetMappedRange = wgpuDawnWireClientBufferGetMappedRange;
        procs.bufferGetMapState = wgpuDawnWireClientBufferGetMapState;
        procs.bufferGetSize = wgpuDawnWireClientBufferGetSize;
        procs.bufferGetUsage = wgpuDawnWireClientBufferGetUsage;
        procs.bufferMapAsync = wgpuDawnWireClientBufferMapAsync;
        procs.bufferReadMappedRange = wgpuDawnWireClientBufferReadMappedRange;
        procs.bufferSetLabel = wgpuDawnWireClientBufferSetLabel;
        procs.bufferUnmap = wgpuDawnWireClientBufferUnmap;
        procs.bufferWriteMappedRange = wgpuDawnWireClientBufferWriteMappedRange;
        procs.bufferAddRef = wgpuDawnWireClientBufferAddRef;
        procs.bufferRelease = wgpuDawnWireClientBufferRelease;
        procs.commandBufferSetLabel = wgpuDawnWireClientCommandBufferSetLabel;
        procs.commandBufferAddRef = wgpuDawnWireClientCommandBufferAddRef;
        procs.commandBufferRelease = wgpuDawnWireClientCommandBufferRelease;
        procs.commandEncoderBeginComputePass = wgpuDawnWireClientCommandEncoderBeginComputePass;
        procs.commandEncoderBeginRenderPass = wgpuDawnWireClientCommandEncoderBeginRenderPass;
        procs.commandEncoderClearBuffer = wgpuDawnWireClientCommandEncoderClearBuffer;
        procs.commandEncoderCopyBufferToBuffer = wgpuDawnWireClientCommandEncoderCopyBufferToBuffer;
        procs.commandEncoderCopyBufferToTexture = wgpuDawnWireClientCommandEncoderCopyBufferToTexture;
        procs.commandEncoderCopyTextureToBuffer = wgpuDawnWireClientCommandEncoderCopyTextureToBuffer;
        procs.commandEncoderCopyTextureToTexture = wgpuDawnWireClientCommandEncoderCopyTextureToTexture;
        procs.commandEncoderFinish = wgpuDawnWireClientCommandEncoderFinish;
        procs.commandEncoderInjectValidationError = wgpuDawnWireClientCommandEncoderInjectValidationError;
        procs.commandEncoderInsertDebugMarker = wgpuDawnWireClientCommandEncoderInsertDebugMarker;
        procs.commandEncoderPopDebugGroup = wgpuDawnWireClientCommandEncoderPopDebugGroup;
        procs.commandEncoderPushDebugGroup = wgpuDawnWireClientCommandEncoderPushDebugGroup;
        procs.commandEncoderResolveQuerySet = wgpuDawnWireClientCommandEncoderResolveQuerySet;
        procs.commandEncoderSetLabel = wgpuDawnWireClientCommandEncoderSetLabel;
        procs.commandEncoderWriteBuffer = wgpuDawnWireClientCommandEncoderWriteBuffer;
        procs.commandEncoderWriteTimestamp = wgpuDawnWireClientCommandEncoderWriteTimestamp;
        procs.commandEncoderAddRef = wgpuDawnWireClientCommandEncoderAddRef;
        procs.commandEncoderRelease = wgpuDawnWireClientCommandEncoderRelease;
        procs.computePassEncoderDispatchWorkgroups = wgpuDawnWireClientComputePassEncoderDispatchWorkgroups;
        procs.computePassEncoderDispatchWorkgroupsIndirect = wgpuDawnWireClientComputePassEncoderDispatchWorkgroupsIndirect;
        procs.computePassEncoderEnd = wgpuDawnWireClientComputePassEncoderEnd;
        procs.computePassEncoderInsertDebugMarker = wgpuDawnWireClientComputePassEncoderInsertDebugMarker;
        procs.computePassEncoderPopDebugGroup = wgpuDawnWireClientComputePassEncoderPopDebugGroup;
        procs.computePassEncoderPushDebugGroup = wgpuDawnWireClientComputePassEncoderPushDebugGroup;
        procs.computePassEncoderSetBindGroup = wgpuDawnWireClientComputePassEncoderSetBindGroup;
        procs.computePassEncoderSetImmediates = wgpuDawnWireClientComputePassEncoderSetImmediates;
        procs.computePassEncoderSetLabel = wgpuDawnWireClientComputePassEncoderSetLabel;
        procs.computePassEncoderSetPipeline = wgpuDawnWireClientComputePassEncoderSetPipeline;
        procs.computePassEncoderSetResourceTable = wgpuDawnWireClientComputePassEncoderSetResourceTable;
        procs.computePassEncoderWriteTimestamp = wgpuDawnWireClientComputePassEncoderWriteTimestamp;
        procs.computePassEncoderAddRef = wgpuDawnWireClientComputePassEncoderAddRef;
        procs.computePassEncoderRelease = wgpuDawnWireClientComputePassEncoderRelease;
        procs.computePipelineGetBindGroupLayout = wgpuDawnWireClientComputePipelineGetBindGroupLayout;
        procs.computePipelineSetLabel = wgpuDawnWireClientComputePipelineSetLabel;
        procs.computePipelineAddRef = wgpuDawnWireClientComputePipelineAddRef;
        procs.computePipelineRelease = wgpuDawnWireClientComputePipelineRelease;
        procs.dawnDrmFormatCapabilitiesFreeMembers = wgpuDawnWireClientDawnDrmFormatCapabilitiesFreeMembers;
        procs.deviceCreateBindGroup = wgpuDawnWireClientDeviceCreateBindGroup;
        procs.deviceCreateBindGroupLayout = wgpuDawnWireClientDeviceCreateBindGroupLayout;
        procs.deviceCreateBuffer = wgpuDawnWireClientDeviceCreateBuffer;
        procs.deviceCreateCommandEncoder = wgpuDawnWireClientDeviceCreateCommandEncoder;
        procs.deviceCreateComputePipeline = wgpuDawnWireClientDeviceCreateComputePipeline;
        procs.deviceCreateComputePipelineAsync = wgpuDawnWireClientDeviceCreateComputePipelineAsync;
        procs.deviceCreateErrorBuffer = wgpuDawnWireClientDeviceCreateErrorBuffer;
        procs.deviceCreateErrorComputePipeline = wgpuDawnWireClientDeviceCreateErrorComputePipeline;
        procs.deviceCreateErrorExternalTexture = wgpuDawnWireClientDeviceCreateErrorExternalTexture;
        procs.deviceCreateErrorRenderPipeline = wgpuDawnWireClientDeviceCreateErrorRenderPipeline;
        procs.deviceCreateErrorShaderModule = wgpuDawnWireClientDeviceCreateErrorShaderModule;
        procs.deviceCreateErrorTexture = wgpuDawnWireClientDeviceCreateErrorTexture;
        procs.deviceCreateExternalTexture = wgpuDawnWireClientDeviceCreateExternalTexture;
        procs.deviceCreatePipelineLayout = wgpuDawnWireClientDeviceCreatePipelineLayout;
        procs.deviceCreateQuerySet = wgpuDawnWireClientDeviceCreateQuerySet;
        procs.deviceCreateRenderBundleEncoder = wgpuDawnWireClientDeviceCreateRenderBundleEncoder;
        procs.deviceCreateRenderPipeline = wgpuDawnWireClientDeviceCreateRenderPipeline;
        procs.deviceCreateRenderPipelineAsync = wgpuDawnWireClientDeviceCreateRenderPipelineAsync;
        procs.deviceCreateResourceTable = wgpuDawnWireClientDeviceCreateResourceTable;
        procs.deviceCreateSampler = wgpuDawnWireClientDeviceCreateSampler;
        procs.deviceCreateShaderModule = wgpuDawnWireClientDeviceCreateShaderModule;
        procs.deviceCreateTexture = wgpuDawnWireClientDeviceCreateTexture;
        procs.deviceDestroy = wgpuDawnWireClientDeviceDestroy;
        procs.deviceForceLoss = wgpuDawnWireClientDeviceForceLoss;
        procs.deviceGetAdapter = wgpuDawnWireClientDeviceGetAdapter;
        procs.deviceGetAdapterInfo = wgpuDawnWireClientDeviceGetAdapterInfo;
        procs.deviceGetFeatures = wgpuDawnWireClientDeviceGetFeatures;
        procs.deviceGetLimits = wgpuDawnWireClientDeviceGetLimits;
        procs.deviceGetLostFuture = wgpuDawnWireClientDeviceGetLostFuture;
        procs.deviceGetQueue = wgpuDawnWireClientDeviceGetQueue;
        procs.deviceHasFeature = wgpuDawnWireClientDeviceHasFeature;
        procs.deviceInjectError = wgpuDawnWireClientDeviceInjectError;
        procs.devicePopErrorScope = wgpuDawnWireClientDevicePopErrorScope;
        procs.devicePushErrorScope = wgpuDawnWireClientDevicePushErrorScope;
        procs.deviceSetLabel = wgpuDawnWireClientDeviceSetLabel;
        procs.deviceSetLoggingCallback = wgpuDawnWireClientDeviceSetLoggingCallback;
        procs.deviceTick = wgpuDawnWireClientDeviceTick;
        procs.deviceValidateTextureDescriptor = wgpuDawnWireClientDeviceValidateTextureDescriptor;
        procs.deviceAddRef = wgpuDawnWireClientDeviceAddRef;
        procs.deviceRelease = wgpuDawnWireClientDeviceRelease;
        procs.externalTextureDestroy = wgpuDawnWireClientExternalTextureDestroy;
        procs.externalTextureExpire = wgpuDawnWireClientExternalTextureExpire;
        procs.externalTextureRefresh = wgpuDawnWireClientExternalTextureRefresh;
        procs.externalTextureSetLabel = wgpuDawnWireClientExternalTextureSetLabel;
        procs.externalTextureAddRef = wgpuDawnWireClientExternalTextureAddRef;
        procs.externalTextureRelease = wgpuDawnWireClientExternalTextureRelease;
        procs.instanceCreateSurface = wgpuDawnWireClientInstanceCreateSurface;
        procs.instanceGetWGSLLanguageFeatures = wgpuDawnWireClientInstanceGetWGSLLanguageFeatures;
        procs.instanceHasWGSLLanguageFeature = wgpuDawnWireClientInstanceHasWGSLLanguageFeature;
        procs.instanceProcessEvents = wgpuDawnWireClientInstanceProcessEvents;
        procs.instanceRequestAdapter = wgpuDawnWireClientInstanceRequestAdapter;
        procs.instanceWaitAny = wgpuDawnWireClientInstanceWaitAny;
        procs.instanceAddRef = wgpuDawnWireClientInstanceAddRef;
        procs.instanceRelease = wgpuDawnWireClientInstanceRelease;
        procs.pipelineLayoutSetLabel = wgpuDawnWireClientPipelineLayoutSetLabel;
        procs.pipelineLayoutAddRef = wgpuDawnWireClientPipelineLayoutAddRef;
        procs.pipelineLayoutRelease = wgpuDawnWireClientPipelineLayoutRelease;
        procs.querySetDestroy = wgpuDawnWireClientQuerySetDestroy;
        procs.querySetGetCount = wgpuDawnWireClientQuerySetGetCount;
        procs.querySetGetType = wgpuDawnWireClientQuerySetGetType;
        procs.querySetSetLabel = wgpuDawnWireClientQuerySetSetLabel;
        procs.querySetAddRef = wgpuDawnWireClientQuerySetAddRef;
        procs.querySetRelease = wgpuDawnWireClientQuerySetRelease;
        procs.queueCopyExternalTextureForBrowser = wgpuDawnWireClientQueueCopyExternalTextureForBrowser;
        procs.queueCopyTextureForBrowser = wgpuDawnWireClientQueueCopyTextureForBrowser;
        procs.queueOnSubmittedWorkDone = wgpuDawnWireClientQueueOnSubmittedWorkDone;
        procs.queueSetLabel = wgpuDawnWireClientQueueSetLabel;
        procs.queueSubmit = wgpuDawnWireClientQueueSubmit;
        procs.queueWriteBuffer = wgpuDawnWireClientQueueWriteBuffer;
        procs.queueWriteTexture = wgpuDawnWireClientQueueWriteTexture;
        procs.queueAddRef = wgpuDawnWireClientQueueAddRef;
        procs.queueRelease = wgpuDawnWireClientQueueRelease;
        procs.renderBundleSetLabel = wgpuDawnWireClientRenderBundleSetLabel;
        procs.renderBundleAddRef = wgpuDawnWireClientRenderBundleAddRef;
        procs.renderBundleRelease = wgpuDawnWireClientRenderBundleRelease;
        procs.renderBundleEncoderDraw = wgpuDawnWireClientRenderBundleEncoderDraw;
        procs.renderBundleEncoderDrawIndexed = wgpuDawnWireClientRenderBundleEncoderDrawIndexed;
        procs.renderBundleEncoderDrawIndexedIndirect = wgpuDawnWireClientRenderBundleEncoderDrawIndexedIndirect;
        procs.renderBundleEncoderDrawIndirect = wgpuDawnWireClientRenderBundleEncoderDrawIndirect;
        procs.renderBundleEncoderFinish = wgpuDawnWireClientRenderBundleEncoderFinish;
        procs.renderBundleEncoderInsertDebugMarker = wgpuDawnWireClientRenderBundleEncoderInsertDebugMarker;
        procs.renderBundleEncoderPopDebugGroup = wgpuDawnWireClientRenderBundleEncoderPopDebugGroup;
        procs.renderBundleEncoderPushDebugGroup = wgpuDawnWireClientRenderBundleEncoderPushDebugGroup;
        procs.renderBundleEncoderSetBindGroup = wgpuDawnWireClientRenderBundleEncoderSetBindGroup;
        procs.renderBundleEncoderSetImmediates = wgpuDawnWireClientRenderBundleEncoderSetImmediates;
        procs.renderBundleEncoderSetIndexBuffer = wgpuDawnWireClientRenderBundleEncoderSetIndexBuffer;
        procs.renderBundleEncoderSetLabel = wgpuDawnWireClientRenderBundleEncoderSetLabel;
        procs.renderBundleEncoderSetPipeline = wgpuDawnWireClientRenderBundleEncoderSetPipeline;
        procs.renderBundleEncoderSetVertexBuffer = wgpuDawnWireClientRenderBundleEncoderSetVertexBuffer;
        procs.renderBundleEncoderAddRef = wgpuDawnWireClientRenderBundleEncoderAddRef;
        procs.renderBundleEncoderRelease = wgpuDawnWireClientRenderBundleEncoderRelease;
        procs.renderPassEncoderBeginOcclusionQuery = wgpuDawnWireClientRenderPassEncoderBeginOcclusionQuery;
        procs.renderPassEncoderDraw = wgpuDawnWireClientRenderPassEncoderDraw;
        procs.renderPassEncoderDrawIndexed = wgpuDawnWireClientRenderPassEncoderDrawIndexed;
        procs.renderPassEncoderDrawIndexedIndirect = wgpuDawnWireClientRenderPassEncoderDrawIndexedIndirect;
        procs.renderPassEncoderDrawIndirect = wgpuDawnWireClientRenderPassEncoderDrawIndirect;
        procs.renderPassEncoderEnd = wgpuDawnWireClientRenderPassEncoderEnd;
        procs.renderPassEncoderEndOcclusionQuery = wgpuDawnWireClientRenderPassEncoderEndOcclusionQuery;
        procs.renderPassEncoderExecuteBundles = wgpuDawnWireClientRenderPassEncoderExecuteBundles;
        procs.renderPassEncoderInsertDebugMarker = wgpuDawnWireClientRenderPassEncoderInsertDebugMarker;
        procs.renderPassEncoderMultiDrawIndexedIndirect = wgpuDawnWireClientRenderPassEncoderMultiDrawIndexedIndirect;
        procs.renderPassEncoderMultiDrawIndirect = wgpuDawnWireClientRenderPassEncoderMultiDrawIndirect;
        procs.renderPassEncoderPixelLocalStorageBarrier = wgpuDawnWireClientRenderPassEncoderPixelLocalStorageBarrier;
        procs.renderPassEncoderPopDebugGroup = wgpuDawnWireClientRenderPassEncoderPopDebugGroup;
        procs.renderPassEncoderPushDebugGroup = wgpuDawnWireClientRenderPassEncoderPushDebugGroup;
        procs.renderPassEncoderSetBindGroup = wgpuDawnWireClientRenderPassEncoderSetBindGroup;
        procs.renderPassEncoderSetBlendConstant = wgpuDawnWireClientRenderPassEncoderSetBlendConstant;
        procs.renderPassEncoderSetImmediates = wgpuDawnWireClientRenderPassEncoderSetImmediates;
        procs.renderPassEncoderSetIndexBuffer = wgpuDawnWireClientRenderPassEncoderSetIndexBuffer;
        procs.renderPassEncoderSetLabel = wgpuDawnWireClientRenderPassEncoderSetLabel;
        procs.renderPassEncoderSetPipeline = wgpuDawnWireClientRenderPassEncoderSetPipeline;
        procs.renderPassEncoderSetResourceTable = wgpuDawnWireClientRenderPassEncoderSetResourceTable;
        procs.renderPassEncoderSetScissorRect = wgpuDawnWireClientRenderPassEncoderSetScissorRect;
        procs.renderPassEncoderSetStencilReference = wgpuDawnWireClientRenderPassEncoderSetStencilReference;
        procs.renderPassEncoderSetVertexBuffer = wgpuDawnWireClientRenderPassEncoderSetVertexBuffer;
        procs.renderPassEncoderSetViewport = wgpuDawnWireClientRenderPassEncoderSetViewport;
        procs.renderPassEncoderWriteTimestamp = wgpuDawnWireClientRenderPassEncoderWriteTimestamp;
        procs.renderPassEncoderAddRef = wgpuDawnWireClientRenderPassEncoderAddRef;
        procs.renderPassEncoderRelease = wgpuDawnWireClientRenderPassEncoderRelease;
        procs.renderPipelineGetBindGroupLayout = wgpuDawnWireClientRenderPipelineGetBindGroupLayout;
        procs.renderPipelineSetLabel = wgpuDawnWireClientRenderPipelineSetLabel;
        procs.renderPipelineAddRef = wgpuDawnWireClientRenderPipelineAddRef;
        procs.renderPipelineRelease = wgpuDawnWireClientRenderPipelineRelease;
        procs.resourceTableDestroy = wgpuDawnWireClientResourceTableDestroy;
        procs.resourceTableGetSize = wgpuDawnWireClientResourceTableGetSize;
        procs.resourceTableInsert = wgpuDawnWireClientResourceTableInsert;
        procs.resourceTableRemove = wgpuDawnWireClientResourceTableRemove;
        procs.resourceTableSetLabel = wgpuDawnWireClientResourceTableSetLabel;
        procs.resourceTableUpdate = wgpuDawnWireClientResourceTableUpdate;
        procs.resourceTableAddRef = wgpuDawnWireClientResourceTableAddRef;
        procs.resourceTableRelease = wgpuDawnWireClientResourceTableRelease;
        procs.samplerSetLabel = wgpuDawnWireClientSamplerSetLabel;
        procs.samplerAddRef = wgpuDawnWireClientSamplerAddRef;
        procs.samplerRelease = wgpuDawnWireClientSamplerRelease;
        procs.shaderModuleGetCompilationInfo = wgpuDawnWireClientShaderModuleGetCompilationInfo;
        procs.shaderModuleSetLabel = wgpuDawnWireClientShaderModuleSetLabel;
        procs.shaderModuleAddRef = wgpuDawnWireClientShaderModuleAddRef;
        procs.shaderModuleRelease = wgpuDawnWireClientShaderModuleRelease;
        procs.supportedFeaturesFreeMembers = wgpuDawnWireClientSupportedFeaturesFreeMembers;
        procs.supportedInstanceFeaturesFreeMembers = wgpuDawnWireClientSupportedInstanceFeaturesFreeMembers;
        procs.supportedWGSLLanguageFeaturesFreeMembers = wgpuDawnWireClientSupportedWGSLLanguageFeaturesFreeMembers;
        procs.surfaceConfigure = wgpuDawnWireClientSurfaceConfigure;
        procs.surfaceGetCapabilities = wgpuDawnWireClientSurfaceGetCapabilities;
        procs.surfaceGetCurrentTexture = wgpuDawnWireClientSurfaceGetCurrentTexture;
        procs.surfacePresent = wgpuDawnWireClientSurfacePresent;
        procs.surfaceSetLabel = wgpuDawnWireClientSurfaceSetLabel;
        procs.surfaceUnconfigure = wgpuDawnWireClientSurfaceUnconfigure;
        procs.surfaceAddRef = wgpuDawnWireClientSurfaceAddRef;
        procs.surfaceRelease = wgpuDawnWireClientSurfaceRelease;
        procs.surfaceCapabilitiesFreeMembers = wgpuDawnWireClientSurfaceCapabilitiesFreeMembers;
        procs.texelBufferViewSetLabel = wgpuDawnWireClientTexelBufferViewSetLabel;
        procs.texelBufferViewAddRef = wgpuDawnWireClientTexelBufferViewAddRef;
        procs.texelBufferViewRelease = wgpuDawnWireClientTexelBufferViewRelease;
        procs.textureCreateErrorView = wgpuDawnWireClientTextureCreateErrorView;
        procs.textureCreateView = wgpuDawnWireClientTextureCreateView;
        procs.textureDestroy = wgpuDawnWireClientTextureDestroy;
        procs.textureGetDepthOrArrayLayers = wgpuDawnWireClientTextureGetDepthOrArrayLayers;
        procs.textureGetDimension = wgpuDawnWireClientTextureGetDimension;
        procs.textureGetFormat = wgpuDawnWireClientTextureGetFormat;
        procs.textureGetHeight = wgpuDawnWireClientTextureGetHeight;
        procs.textureGetMipLevelCount = wgpuDawnWireClientTextureGetMipLevelCount;
        procs.textureGetSampleCount = wgpuDawnWireClientTextureGetSampleCount;
        procs.textureGetTextureBindingViewDimension = wgpuDawnWireClientTextureGetTextureBindingViewDimension;
        procs.textureGetUsage = wgpuDawnWireClientTextureGetUsage;
        procs.textureGetWidth = wgpuDawnWireClientTextureGetWidth;
        procs.textureSetLabel = wgpuDawnWireClientTextureSetLabel;
        procs.textureAddRef = wgpuDawnWireClientTextureAddRef;
        procs.textureRelease = wgpuDawnWireClientTextureRelease;
        procs.textureViewSetLabel = wgpuDawnWireClientTextureViewSetLabel;
        procs.textureViewAddRef = wgpuDawnWireClientTextureViewAddRef;
        procs.textureViewRelease = wgpuDawnWireClientTextureViewRelease;
        return procs;
    }

    static DawnProcTable gProcTable = MakeProcTable();

    const DawnProcTable& GetProcs() {
        return gProcTable;
    }

}  // namespace dawn::wire::client
