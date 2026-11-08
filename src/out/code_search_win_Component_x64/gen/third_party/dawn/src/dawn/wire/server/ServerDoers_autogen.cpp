
#include "src/dawn/wire/server/Server.h"
#include "dawn/wire/dawn_platform.h"
#include "src/utils/assert.h"


namespace dawn::wire::server {


    WireResult Server::DoBindGroupLayoutSetLabel(detail::BindGroupLayout* self, StringView label) {
        
        
        mProcs->bindGroupLayoutSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }

    WireResult Server::DoBindGroupSetLabel(detail::BindGroup* self, StringView label) {
        
        
        mProcs->bindGroupSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }

    WireResult Server::DoBufferCreateTexelView(detail::Buffer* self, TexelBufferViewDescriptor const * descriptor, WGPUTexelBufferView* result) {
        *result =
        mProcs->bufferCreateTexelView(ToAPI(self), ToAPI(descriptor));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoBufferDestroy(detail::Buffer* self) {
        
        
        mProcs->bufferDestroy(ToAPI(self));


        return WireResult::Success;
    }


    WireResult Server::DoBufferSetLabel(detail::Buffer* self, StringView label) {
        
        
        mProcs->bufferSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }

    WireResult Server::DoBufferUnmap(detail::Buffer* self) {
        
        
        mProcs->bufferUnmap(ToAPI(self));


        return WireResult::Success;
    }


    WireResult Server::DoCommandBufferSetLabel(detail::CommandBuffer* self, StringView label) {
        
        
        mProcs->commandBufferSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }

    WireResult Server::DoCommandEncoderBeginComputePass(detail::CommandEncoder* self, ComputePassDescriptor const * descriptor, WGPUComputePassEncoder* result) {
        *result =
        mProcs->commandEncoderBeginComputePass(ToAPI(self), ToAPI(descriptor));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoCommandEncoderBeginRenderPass(detail::CommandEncoder* self, RenderPassDescriptor const * descriptor, WGPURenderPassEncoder* result) {
        *result =
        mProcs->commandEncoderBeginRenderPass(ToAPI(self), ToAPI(descriptor));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoCommandEncoderClearBuffer(detail::CommandEncoder* self, detail::Buffer* buffer, uint64_t offset, uint64_t size) {
        
        
        mProcs->commandEncoderClearBuffer(ToAPI(self), ToAPI(buffer), ToAPI(offset), ToAPI(size));


        return WireResult::Success;
    }

    WireResult Server::DoCommandEncoderCopyBufferToBuffer(detail::CommandEncoder* self, detail::Buffer* source, uint64_t sourceOffset, detail::Buffer* destination, uint64_t destinationOffset, uint64_t size) {
        
        
        mProcs->commandEncoderCopyBufferToBuffer(ToAPI(self), ToAPI(source), ToAPI(sourceOffset), ToAPI(destination), ToAPI(destinationOffset), ToAPI(size));


        return WireResult::Success;
    }

    WireResult Server::DoCommandEncoderCopyBufferToTexture(detail::CommandEncoder* self, TexelCopyBufferInfo const * source, TexelCopyTextureInfo const * destination, Extent3D const * copySize) {
        
        
        mProcs->commandEncoderCopyBufferToTexture(ToAPI(self), ToAPI(source), ToAPI(destination), ToAPI(copySize));


        return WireResult::Success;
    }

    WireResult Server::DoCommandEncoderCopyTextureToBuffer(detail::CommandEncoder* self, TexelCopyTextureInfo const * source, TexelCopyBufferInfo const * destination, Extent3D const * copySize) {
        
        
        mProcs->commandEncoderCopyTextureToBuffer(ToAPI(self), ToAPI(source), ToAPI(destination), ToAPI(copySize));


        return WireResult::Success;
    }

    WireResult Server::DoCommandEncoderCopyTextureToTexture(detail::CommandEncoder* self, TexelCopyTextureInfo const * source, TexelCopyTextureInfo const * destination, Extent3D const * copySize) {
        
        
        mProcs->commandEncoderCopyTextureToTexture(ToAPI(self), ToAPI(source), ToAPI(destination), ToAPI(copySize));


        return WireResult::Success;
    }

    WireResult Server::DoCommandEncoderFinish(detail::CommandEncoder* self, CommandBufferDescriptor const * descriptor, WGPUCommandBuffer* result) {
        *result =
        mProcs->commandEncoderFinish(ToAPI(self), ToAPI(descriptor));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoCommandEncoderInjectValidationError(detail::CommandEncoder* self, StringView message) {
        
        
        mProcs->commandEncoderInjectValidationError(ToAPI(self), ToAPI(message));


        return WireResult::Success;
    }

    WireResult Server::DoCommandEncoderInsertDebugMarker(detail::CommandEncoder* self, StringView markerLabel) {
        
        
        mProcs->commandEncoderInsertDebugMarker(ToAPI(self), ToAPI(markerLabel));


        return WireResult::Success;
    }

    WireResult Server::DoCommandEncoderPopDebugGroup(detail::CommandEncoder* self) {
        
        
        mProcs->commandEncoderPopDebugGroup(ToAPI(self));


        return WireResult::Success;
    }

    WireResult Server::DoCommandEncoderPushDebugGroup(detail::CommandEncoder* self, StringView groupLabel) {
        
        
        mProcs->commandEncoderPushDebugGroup(ToAPI(self), ToAPI(groupLabel));


        return WireResult::Success;
    }

    WireResult Server::DoCommandEncoderResolveQuerySet(detail::CommandEncoder* self, detail::QuerySet* querySet, uint32_t firstQuery, uint32_t queryCount, detail::Buffer* destination, uint64_t destinationOffset) {
        
        
        mProcs->commandEncoderResolveQuerySet(ToAPI(self), ToAPI(querySet), ToAPI(firstQuery), ToAPI(queryCount), ToAPI(destination), ToAPI(destinationOffset));


        return WireResult::Success;
    }

    WireResult Server::DoCommandEncoderSetLabel(detail::CommandEncoder* self, StringView label) {
        
        
        mProcs->commandEncoderSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }

    WireResult Server::DoCommandEncoderWriteBuffer(detail::CommandEncoder* self, detail::Buffer* buffer, uint64_t bufferOffset, dawn::ityp::span<size_t, volatile std::byte const, dawn::detail::DynamicExtent<size_t>> data) {
        
        
        mProcs->commandEncoderWriteBuffer(ToAPI(self), ToAPI(buffer), ToAPI(bufferOffset),             const_cast<const std::byte*>(data.data()), data.size());


        return WireResult::Success;
    }

    WireResult Server::DoCommandEncoderWriteTimestamp(detail::CommandEncoder* self, detail::QuerySet* querySet, uint32_t queryIndex) {
        
        
        mProcs->commandEncoderWriteTimestamp(ToAPI(self), ToAPI(querySet), ToAPI(queryIndex));


        return WireResult::Success;
    }

    WireResult Server::DoComputePassEncoderDispatchWorkgroups(detail::ComputePassEncoder* self, uint32_t workgroupCountX, uint32_t workgroupCountY, uint32_t workgroupCountZ) {
        
        
        mProcs->computePassEncoderDispatchWorkgroups(ToAPI(self), ToAPI(workgroupCountX), ToAPI(workgroupCountY), ToAPI(workgroupCountZ));


        return WireResult::Success;
    }

    WireResult Server::DoComputePassEncoderDispatchWorkgroupsIndirect(detail::ComputePassEncoder* self, detail::Buffer* indirectBuffer, uint64_t indirectOffset) {
        
        
        mProcs->computePassEncoderDispatchWorkgroupsIndirect(ToAPI(self), ToAPI(indirectBuffer), ToAPI(indirectOffset));


        return WireResult::Success;
    }

    WireResult Server::DoComputePassEncoderEnd(detail::ComputePassEncoder* self) {
        
        
        mProcs->computePassEncoderEnd(ToAPI(self));


        return WireResult::Success;
    }

    WireResult Server::DoComputePassEncoderInsertDebugMarker(detail::ComputePassEncoder* self, StringView markerLabel) {
        
        
        mProcs->computePassEncoderInsertDebugMarker(ToAPI(self), ToAPI(markerLabel));


        return WireResult::Success;
    }

    WireResult Server::DoComputePassEncoderPopDebugGroup(detail::ComputePassEncoder* self) {
        
        
        mProcs->computePassEncoderPopDebugGroup(ToAPI(self));


        return WireResult::Success;
    }

    WireResult Server::DoComputePassEncoderPushDebugGroup(detail::ComputePassEncoder* self, StringView groupLabel) {
        
        
        mProcs->computePassEncoderPushDebugGroup(ToAPI(self), ToAPI(groupLabel));


        return WireResult::Success;
    }

    WireResult Server::DoComputePassEncoderSetBindGroup(detail::ComputePassEncoder* self, uint32_t groupIndex, detail::BindGroup* group, dawn::ityp::span<size_t, uint32_t const, dawn::detail::DynamicExtent<size_t>> dynamicOffsets) {
        
        
        mProcs->computePassEncoderSetBindGroup(ToAPI(self), ToAPI(groupIndex), ToAPI(group), dynamicOffsets.size(), ToAPI(dynamicOffsets.data()));


        return WireResult::Success;
    }

    WireResult Server::DoComputePassEncoderSetImmediates(detail::ComputePassEncoder* self, uint32_t offset, dawn::ityp::span<size_t, volatile std::byte const, dawn::detail::DynamicExtent<size_t>> data) {
        
        
        mProcs->computePassEncoderSetImmediates(ToAPI(self), ToAPI(offset),             const_cast<const std::byte*>(data.data()), data.size());


        return WireResult::Success;
    }

    WireResult Server::DoComputePassEncoderSetLabel(detail::ComputePassEncoder* self, StringView label) {
        
        
        mProcs->computePassEncoderSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }

    WireResult Server::DoComputePassEncoderSetPipeline(detail::ComputePassEncoder* self, detail::ComputePipeline* pipeline) {
        
        
        mProcs->computePassEncoderSetPipeline(ToAPI(self), ToAPI(pipeline));


        return WireResult::Success;
    }

    WireResult Server::DoComputePassEncoderSetResourceTable(detail::ComputePassEncoder* self, detail::ResourceTable* table) {
        
        
        mProcs->computePassEncoderSetResourceTable(ToAPI(self), ToAPI(table));


        return WireResult::Success;
    }

    WireResult Server::DoComputePassEncoderWriteTimestamp(detail::ComputePassEncoder* self, detail::QuerySet* querySet, uint32_t queryIndex) {
        
        
        mProcs->computePassEncoderWriteTimestamp(ToAPI(self), ToAPI(querySet), ToAPI(queryIndex));


        return WireResult::Success;
    }

    WireResult Server::DoComputePipelineGetBindGroupLayout(detail::ComputePipeline* self, uint32_t groupIndex, WGPUBindGroupLayout* result) {
        *result =
        mProcs->computePipelineGetBindGroupLayout(ToAPI(self), ToAPI(groupIndex));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoComputePipelineSetLabel(detail::ComputePipeline* self, StringView label) {
        
        
        mProcs->computePipelineSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }

    WireResult Server::DoDeviceCreateBindGroup(detail::Device* self, BindGroupDescriptor const * descriptor, WGPUBindGroup* result) {
        *result =
        mProcs->deviceCreateBindGroup(ToAPI(self), ToAPI(descriptor));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoDeviceCreateBindGroupLayout(detail::Device* self, BindGroupLayoutDescriptor const * descriptor, WGPUBindGroupLayout* result) {
        *result =
        mProcs->deviceCreateBindGroupLayout(ToAPI(self), ToAPI(descriptor));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }


    WireResult Server::DoDeviceCreateCommandEncoder(detail::Device* self, CommandEncoderDescriptor const * descriptor, WGPUCommandEncoder* result) {
        *result =
        mProcs->deviceCreateCommandEncoder(ToAPI(self), ToAPI(descriptor));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoDeviceCreateComputePipeline(detail::Device* self, ComputePipelineDescriptor const * descriptor, WGPUComputePipeline* result) {
        *result =
        mProcs->deviceCreateComputePipeline(ToAPI(self), ToAPI(descriptor));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }


    WireResult Server::DoDeviceCreateErrorBuffer(detail::Device* self, BufferDescriptor const * descriptor, WGPUBuffer* result) {
        *result =
        mProcs->deviceCreateErrorBuffer(ToAPI(self), ToAPI(descriptor));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoDeviceCreateErrorComputePipeline(detail::Device* self, StringView label, WGPUComputePipeline* result) {
        *result =
        mProcs->deviceCreateErrorComputePipeline(ToAPI(self), ToAPI(label));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoDeviceCreateErrorExternalTexture(detail::Device* self, WGPUExternalTexture* result) {
        *result =
        mProcs->deviceCreateErrorExternalTexture(ToAPI(self));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoDeviceCreateErrorRenderPipeline(detail::Device* self, StringView label, WGPURenderPipeline* result) {
        *result =
        mProcs->deviceCreateErrorRenderPipeline(ToAPI(self), ToAPI(label));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoDeviceCreateErrorShaderModule(detail::Device* self, ShaderModuleDescriptor const * descriptor, StringView errorMessage, WGPUShaderModule* result) {
        *result =
        mProcs->deviceCreateErrorShaderModule(ToAPI(self), ToAPI(descriptor), ToAPI(errorMessage));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoDeviceCreateErrorTexture(detail::Device* self, TextureDescriptor const * descriptor, WGPUTexture* result) {
        *result =
        mProcs->deviceCreateErrorTexture(ToAPI(self), ToAPI(descriptor));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoDeviceCreateExternalTexture(detail::Device* self, ExternalTextureDescriptor const * externalTextureDescriptor, WGPUExternalTexture* result) {
        *result =
        mProcs->deviceCreateExternalTexture(ToAPI(self), ToAPI(externalTextureDescriptor));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoDeviceCreatePipelineLayout(detail::Device* self, PipelineLayoutDescriptor const * descriptor, WGPUPipelineLayout* result) {
        *result =
        mProcs->deviceCreatePipelineLayout(ToAPI(self), ToAPI(descriptor));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoDeviceCreateQuerySet(detail::Device* self, QuerySetDescriptor const * descriptor, WGPUQuerySet* result) {
        *result =
        mProcs->deviceCreateQuerySet(ToAPI(self), ToAPI(descriptor));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoDeviceCreateRenderBundleEncoder(detail::Device* self, RenderBundleEncoderDescriptor const * descriptor, WGPURenderBundleEncoder* result) {
        *result =
        mProcs->deviceCreateRenderBundleEncoder(ToAPI(self), ToAPI(descriptor));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoDeviceCreateRenderPipeline(detail::Device* self, RenderPipelineDescriptor const * descriptor, WGPURenderPipeline* result) {
        *result =
        mProcs->deviceCreateRenderPipeline(ToAPI(self), ToAPI(descriptor));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }


    WireResult Server::DoDeviceCreateResourceTable(detail::Device* self, ResourceTableDescriptor const * descriptor, WGPUResourceTable* result) {
        *result =
        mProcs->deviceCreateResourceTable(ToAPI(self), ToAPI(descriptor));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoDeviceCreateSampler(detail::Device* self, SamplerDescriptor const * descriptor, WGPUSampler* result) {
        *result =
        mProcs->deviceCreateSampler(ToAPI(self), ToAPI(descriptor));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoDeviceCreateShaderModule(detail::Device* self, ShaderModuleDescriptor const * descriptor, WGPUShaderModule* result) {
        *result =
        mProcs->deviceCreateShaderModule(ToAPI(self), ToAPI(descriptor));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoDeviceCreateTexture(detail::Device* self, TextureDescriptor const * descriptor, WGPUTexture* result) {
        *result =
        mProcs->deviceCreateTexture(ToAPI(self), ToAPI(descriptor));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoDeviceDestroy(detail::Device* self) {
        
        
        mProcs->deviceDestroy(ToAPI(self));


        return WireResult::Success;
    }

    WireResult Server::DoDeviceForceLoss(detail::Device* self, wgpu::DeviceLostReason type, StringView message) {
        
        
        mProcs->deviceForceLoss(ToAPI(self), ToAPI(type), ToAPI(message));


        return WireResult::Success;
    }

    WireResult Server::DoDeviceGetQueue(detail::Device* self, WGPUQueue* result) {
        *result =
        mProcs->deviceGetQueue(ToAPI(self));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoDeviceInjectError(detail::Device* self, wgpu::ErrorType type, StringView message) {
        
        
        mProcs->deviceInjectError(ToAPI(self), ToAPI(type), ToAPI(message));


        return WireResult::Success;
    }


    WireResult Server::DoDevicePushErrorScope(detail::Device* self, wgpu::ErrorFilter filter) {
        
        
        mProcs->devicePushErrorScope(ToAPI(self), ToAPI(filter));


        return WireResult::Success;
    }

    WireResult Server::DoDeviceSetLabel(detail::Device* self, StringView label) {
        
        
        mProcs->deviceSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }

    WireResult Server::DoDeviceTick(detail::Device* self) {
        
        
        mProcs->deviceTick(ToAPI(self));


        return WireResult::Success;
    }

    WireResult Server::DoDeviceValidateTextureDescriptor(detail::Device* self, TextureDescriptor const * descriptor) {
        
        
        mProcs->deviceValidateTextureDescriptor(ToAPI(self), ToAPI(descriptor));


        return WireResult::Success;
    }

    WireResult Server::DoExternalTextureDestroy(detail::ExternalTexture* self) {
        
        
        mProcs->externalTextureDestroy(ToAPI(self));


        return WireResult::Success;
    }

    WireResult Server::DoExternalTextureExpire(detail::ExternalTexture* self) {
        
        
        mProcs->externalTextureExpire(ToAPI(self));


        return WireResult::Success;
    }

    WireResult Server::DoExternalTextureRefresh(detail::ExternalTexture* self) {
        
        
        mProcs->externalTextureRefresh(ToAPI(self));


        return WireResult::Success;
    }

    WireResult Server::DoExternalTextureSetLabel(detail::ExternalTexture* self, StringView label) {
        
        
        mProcs->externalTextureSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }

    WireResult Server::DoInstanceProcessEvents(detail::Instance* self) {
        
        
        mProcs->instanceProcessEvents(ToAPI(self));


        return WireResult::Success;
    }


    WireResult Server::DoPipelineLayoutSetLabel(detail::PipelineLayout* self, StringView label) {
        
        
        mProcs->pipelineLayoutSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }

    WireResult Server::DoQuerySetDestroy(detail::QuerySet* self) {
        
        
        mProcs->querySetDestroy(ToAPI(self));


        return WireResult::Success;
    }

    WireResult Server::DoQuerySetSetLabel(detail::QuerySet* self, StringView label) {
        
        
        mProcs->querySetSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }

    WireResult Server::DoQueueCopyExternalTextureForBrowser(detail::Queue* self, ImageCopyExternalTexture const * source, TexelCopyTextureInfo const * destination, Extent3D const * copySize, CopyTextureForBrowserOptions const * options) {
        
        
        mProcs->queueCopyExternalTextureForBrowser(ToAPI(self), ToAPI(source), ToAPI(destination), ToAPI(copySize), ToAPI(options));


        return WireResult::Success;
    }

    WireResult Server::DoQueueCopyTextureForBrowser(detail::Queue* self, TexelCopyTextureInfo const * source, TexelCopyTextureInfo const * destination, Extent3D const * copySize, CopyTextureForBrowserOptions const * options) {
        
        
        mProcs->queueCopyTextureForBrowser(ToAPI(self), ToAPI(source), ToAPI(destination), ToAPI(copySize), ToAPI(options));


        return WireResult::Success;
    }


    WireResult Server::DoQueueSetLabel(detail::Queue* self, StringView label) {
        
        
        mProcs->queueSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }

    WireResult Server::DoQueueSubmit(detail::Queue* self, dawn::ityp::span<size_t, detail::CommandBuffer* const, dawn::detail::DynamicExtent<size_t>> commands) {
        
        
        mProcs->queueSubmit(ToAPI(self), commands.size(), ToAPI(commands.data()));


        return WireResult::Success;
    }





    WireResult Server::DoRenderBundleEncoderDraw(detail::RenderBundleEncoder* self, uint32_t vertexCount, uint32_t instanceCount, uint32_t firstVertex, uint32_t firstInstance) {
        
        
        mProcs->renderBundleEncoderDraw(ToAPI(self), ToAPI(vertexCount), ToAPI(instanceCount), ToAPI(firstVertex), ToAPI(firstInstance));


        return WireResult::Success;
    }

    WireResult Server::DoRenderBundleEncoderDrawIndexed(detail::RenderBundleEncoder* self, uint32_t indexCount, uint32_t instanceCount, uint32_t firstIndex, int32_t baseVertex, uint32_t firstInstance) {
        
        
        mProcs->renderBundleEncoderDrawIndexed(ToAPI(self), ToAPI(indexCount), ToAPI(instanceCount), ToAPI(firstIndex), ToAPI(baseVertex), ToAPI(firstInstance));


        return WireResult::Success;
    }

    WireResult Server::DoRenderBundleEncoderDrawIndexedIndirect(detail::RenderBundleEncoder* self, detail::Buffer* indirectBuffer, uint64_t indirectOffset) {
        
        
        mProcs->renderBundleEncoderDrawIndexedIndirect(ToAPI(self), ToAPI(indirectBuffer), ToAPI(indirectOffset));


        return WireResult::Success;
    }

    WireResult Server::DoRenderBundleEncoderDrawIndirect(detail::RenderBundleEncoder* self, detail::Buffer* indirectBuffer, uint64_t indirectOffset) {
        
        
        mProcs->renderBundleEncoderDrawIndirect(ToAPI(self), ToAPI(indirectBuffer), ToAPI(indirectOffset));


        return WireResult::Success;
    }

    WireResult Server::DoRenderBundleEncoderFinish(detail::RenderBundleEncoder* self, RenderBundleDescriptor const * descriptor, WGPURenderBundle* result) {
        *result =
        mProcs->renderBundleEncoderFinish(ToAPI(self), ToAPI(descriptor));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoRenderBundleEncoderInsertDebugMarker(detail::RenderBundleEncoder* self, StringView markerLabel) {
        
        
        mProcs->renderBundleEncoderInsertDebugMarker(ToAPI(self), ToAPI(markerLabel));


        return WireResult::Success;
    }

    WireResult Server::DoRenderBundleEncoderPopDebugGroup(detail::RenderBundleEncoder* self) {
        
        
        mProcs->renderBundleEncoderPopDebugGroup(ToAPI(self));


        return WireResult::Success;
    }

    WireResult Server::DoRenderBundleEncoderPushDebugGroup(detail::RenderBundleEncoder* self, StringView groupLabel) {
        
        
        mProcs->renderBundleEncoderPushDebugGroup(ToAPI(self), ToAPI(groupLabel));


        return WireResult::Success;
    }

    WireResult Server::DoRenderBundleEncoderSetBindGroup(detail::RenderBundleEncoder* self, uint32_t groupIndex, detail::BindGroup* group, dawn::ityp::span<size_t, uint32_t const, dawn::detail::DynamicExtent<size_t>> dynamicOffsets) {
        
        
        mProcs->renderBundleEncoderSetBindGroup(ToAPI(self), ToAPI(groupIndex), ToAPI(group), dynamicOffsets.size(), ToAPI(dynamicOffsets.data()));


        return WireResult::Success;
    }

    WireResult Server::DoRenderBundleEncoderSetImmediates(detail::RenderBundleEncoder* self, uint32_t offset, dawn::ityp::span<size_t, volatile std::byte const, dawn::detail::DynamicExtent<size_t>> data) {
        
        
        mProcs->renderBundleEncoderSetImmediates(ToAPI(self), ToAPI(offset),             const_cast<const std::byte*>(data.data()), data.size());


        return WireResult::Success;
    }

    WireResult Server::DoRenderBundleEncoderSetIndexBuffer(detail::RenderBundleEncoder* self, detail::Buffer* buffer, wgpu::IndexFormat format, uint64_t offset, uint64_t size) {
        
        
        mProcs->renderBundleEncoderSetIndexBuffer(ToAPI(self), ToAPI(buffer), ToAPI(format), ToAPI(offset), ToAPI(size));


        return WireResult::Success;
    }

    WireResult Server::DoRenderBundleEncoderSetLabel(detail::RenderBundleEncoder* self, StringView label) {
        
        
        mProcs->renderBundleEncoderSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }

    WireResult Server::DoRenderBundleEncoderSetPipeline(detail::RenderBundleEncoder* self, detail::RenderPipeline* pipeline) {
        
        
        mProcs->renderBundleEncoderSetPipeline(ToAPI(self), ToAPI(pipeline));


        return WireResult::Success;
    }

    WireResult Server::DoRenderBundleEncoderSetVertexBuffer(detail::RenderBundleEncoder* self, uint32_t slot, detail::Buffer* buffer, uint64_t offset, uint64_t size) {
        
        
        mProcs->renderBundleEncoderSetVertexBuffer(ToAPI(self), ToAPI(slot), ToAPI(buffer), ToAPI(offset), ToAPI(size));


        return WireResult::Success;
    }

    WireResult Server::DoRenderBundleSetLabel(detail::RenderBundle* self, StringView label) {
        
        
        mProcs->renderBundleSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderBeginOcclusionQuery(detail::RenderPassEncoder* self, uint32_t queryIndex) {
        
        
        mProcs->renderPassEncoderBeginOcclusionQuery(ToAPI(self), ToAPI(queryIndex));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderDraw(detail::RenderPassEncoder* self, uint32_t vertexCount, uint32_t instanceCount, uint32_t firstVertex, uint32_t firstInstance) {
        
        
        mProcs->renderPassEncoderDraw(ToAPI(self), ToAPI(vertexCount), ToAPI(instanceCount), ToAPI(firstVertex), ToAPI(firstInstance));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderDrawIndexed(detail::RenderPassEncoder* self, uint32_t indexCount, uint32_t instanceCount, uint32_t firstIndex, int32_t baseVertex, uint32_t firstInstance) {
        
        
        mProcs->renderPassEncoderDrawIndexed(ToAPI(self), ToAPI(indexCount), ToAPI(instanceCount), ToAPI(firstIndex), ToAPI(baseVertex), ToAPI(firstInstance));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderDrawIndexedIndirect(detail::RenderPassEncoder* self, detail::Buffer* indirectBuffer, uint64_t indirectOffset) {
        
        
        mProcs->renderPassEncoderDrawIndexedIndirect(ToAPI(self), ToAPI(indirectBuffer), ToAPI(indirectOffset));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderDrawIndirect(detail::RenderPassEncoder* self, detail::Buffer* indirectBuffer, uint64_t indirectOffset) {
        
        
        mProcs->renderPassEncoderDrawIndirect(ToAPI(self), ToAPI(indirectBuffer), ToAPI(indirectOffset));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderEnd(detail::RenderPassEncoder* self) {
        
        
        mProcs->renderPassEncoderEnd(ToAPI(self));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderEndOcclusionQuery(detail::RenderPassEncoder* self) {
        
        
        mProcs->renderPassEncoderEndOcclusionQuery(ToAPI(self));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderExecuteBundles(detail::RenderPassEncoder* self, dawn::ityp::span<size_t, detail::RenderBundle* const, dawn::detail::DynamicExtent<size_t>> bundles) {
        
        
        mProcs->renderPassEncoderExecuteBundles(ToAPI(self), bundles.size(), ToAPI(bundles.data()));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderInsertDebugMarker(detail::RenderPassEncoder* self, StringView markerLabel) {
        
        
        mProcs->renderPassEncoderInsertDebugMarker(ToAPI(self), ToAPI(markerLabel));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderMultiDrawIndexedIndirect(detail::RenderPassEncoder* self, detail::Buffer* indirectBuffer, uint64_t indirectOffset, uint32_t maxDrawCount, detail::Buffer* drawCountBuffer, uint64_t drawCountBufferOffset) {
        
        
        mProcs->renderPassEncoderMultiDrawIndexedIndirect(ToAPI(self), ToAPI(indirectBuffer), ToAPI(indirectOffset), ToAPI(maxDrawCount), ToAPI(drawCountBuffer), ToAPI(drawCountBufferOffset));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderMultiDrawIndirect(detail::RenderPassEncoder* self, detail::Buffer* indirectBuffer, uint64_t indirectOffset, uint32_t maxDrawCount, detail::Buffer* drawCountBuffer, uint64_t drawCountBufferOffset) {
        
        
        mProcs->renderPassEncoderMultiDrawIndirect(ToAPI(self), ToAPI(indirectBuffer), ToAPI(indirectOffset), ToAPI(maxDrawCount), ToAPI(drawCountBuffer), ToAPI(drawCountBufferOffset));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderPixelLocalStorageBarrier(detail::RenderPassEncoder* self) {
        
        
        mProcs->renderPassEncoderPixelLocalStorageBarrier(ToAPI(self));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderPopDebugGroup(detail::RenderPassEncoder* self) {
        
        
        mProcs->renderPassEncoderPopDebugGroup(ToAPI(self));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderPushDebugGroup(detail::RenderPassEncoder* self, StringView groupLabel) {
        
        
        mProcs->renderPassEncoderPushDebugGroup(ToAPI(self), ToAPI(groupLabel));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderSetBindGroup(detail::RenderPassEncoder* self, uint32_t groupIndex, detail::BindGroup* group, dawn::ityp::span<size_t, uint32_t const, dawn::detail::DynamicExtent<size_t>> dynamicOffsets) {
        
        
        mProcs->renderPassEncoderSetBindGroup(ToAPI(self), ToAPI(groupIndex), ToAPI(group), dynamicOffsets.size(), ToAPI(dynamicOffsets.data()));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderSetBlendConstant(detail::RenderPassEncoder* self, Color const * color) {
        
        
        mProcs->renderPassEncoderSetBlendConstant(ToAPI(self), ToAPI(color));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderSetImmediates(detail::RenderPassEncoder* self, uint32_t offset, dawn::ityp::span<size_t, volatile std::byte const, dawn::detail::DynamicExtent<size_t>> data) {
        
        
        mProcs->renderPassEncoderSetImmediates(ToAPI(self), ToAPI(offset),             const_cast<const std::byte*>(data.data()), data.size());


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderSetIndexBuffer(detail::RenderPassEncoder* self, detail::Buffer* buffer, wgpu::IndexFormat format, uint64_t offset, uint64_t size) {
        
        
        mProcs->renderPassEncoderSetIndexBuffer(ToAPI(self), ToAPI(buffer), ToAPI(format), ToAPI(offset), ToAPI(size));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderSetLabel(detail::RenderPassEncoder* self, StringView label) {
        
        
        mProcs->renderPassEncoderSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderSetPipeline(detail::RenderPassEncoder* self, detail::RenderPipeline* pipeline) {
        
        
        mProcs->renderPassEncoderSetPipeline(ToAPI(self), ToAPI(pipeline));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderSetResourceTable(detail::RenderPassEncoder* self, detail::ResourceTable* table) {
        
        
        mProcs->renderPassEncoderSetResourceTable(ToAPI(self), ToAPI(table));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderSetScissorRect(detail::RenderPassEncoder* self, uint32_t x, uint32_t y, uint32_t width, uint32_t height) {
        
        
        mProcs->renderPassEncoderSetScissorRect(ToAPI(self), ToAPI(x), ToAPI(y), ToAPI(width), ToAPI(height));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderSetStencilReference(detail::RenderPassEncoder* self, uint32_t reference) {
        
        
        mProcs->renderPassEncoderSetStencilReference(ToAPI(self), ToAPI(reference));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderSetVertexBuffer(detail::RenderPassEncoder* self, uint32_t slot, detail::Buffer* buffer, uint64_t offset, uint64_t size) {
        
        
        mProcs->renderPassEncoderSetVertexBuffer(ToAPI(self), ToAPI(slot), ToAPI(buffer), ToAPI(offset), ToAPI(size));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderSetViewport(detail::RenderPassEncoder* self, float x, float y, float width, float height, float minDepth, float maxDepth) {
        
        
        mProcs->renderPassEncoderSetViewport(ToAPI(self), ToAPI(x), ToAPI(y), ToAPI(width), ToAPI(height), ToAPI(minDepth), ToAPI(maxDepth));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPassEncoderWriteTimestamp(detail::RenderPassEncoder* self, detail::QuerySet* querySet, uint32_t queryIndex) {
        
        
        mProcs->renderPassEncoderWriteTimestamp(ToAPI(self), ToAPI(querySet), ToAPI(queryIndex));


        return WireResult::Success;
    }

    WireResult Server::DoRenderPipelineGetBindGroupLayout(detail::RenderPipeline* self, uint32_t groupIndex, WGPUBindGroupLayout* result) {
        *result =
        mProcs->renderPipelineGetBindGroupLayout(ToAPI(self), ToAPI(groupIndex));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoRenderPipelineSetLabel(detail::RenderPipeline* self, StringView label) {
        
        
        mProcs->renderPipelineSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }

    WireResult Server::DoResourceTableDestroy(detail::ResourceTable* self) {
        
        
        mProcs->resourceTableDestroy(ToAPI(self));


        return WireResult::Success;
    }

    WireResult Server::DoResourceTableRemove(detail::ResourceTable* self, uint32_t slot) {
        WGPUStatus status =
        mProcs->resourceTableRemove(ToAPI(self), ToAPI(slot));

        if (status != WGPUStatus_Success) {
            return WireResult::FatalError;
        }

        return WireResult::Success;
    }

    WireResult Server::DoResourceTableSetLabel(detail::ResourceTable* self, StringView label) {
        
        
        mProcs->resourceTableSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }

    WireResult Server::DoResourceTableUpdate(detail::ResourceTable* self, uint32_t slot, BindingResource const * resource) {
        WGPUStatus status =
        mProcs->resourceTableUpdate(ToAPI(self), ToAPI(slot), ToAPI(resource));

        if (status != WGPUStatus_Success) {
            return WireResult::FatalError;
        }

        return WireResult::Success;
    }

    WireResult Server::DoSamplerSetLabel(detail::Sampler* self, StringView label) {
        
        
        mProcs->samplerSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }


    WireResult Server::DoShaderModuleSetLabel(detail::ShaderModule* self, StringView label) {
        
        
        mProcs->shaderModuleSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }

    WireResult Server::DoSurfaceConfigure(detail::Surface* self, SurfaceConfiguration const * config) {
        
        
        mProcs->surfaceConfigure(ToAPI(self), ToAPI(config));


        return WireResult::Success;
    }


    WireResult Server::DoSurfacePresent(detail::Surface* self) {
        WGPUStatus status =
        mProcs->surfacePresent(ToAPI(self));

        if (status != WGPUStatus_Success) {
            return WireResult::FatalError;
        }

        return WireResult::Success;
    }

    WireResult Server::DoSurfaceSetLabel(detail::Surface* self, StringView label) {
        
        
        mProcs->surfaceSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }

    WireResult Server::DoSurfaceUnconfigure(detail::Surface* self) {
        
        
        mProcs->surfaceUnconfigure(ToAPI(self));


        return WireResult::Success;
    }

    WireResult Server::DoTexelBufferViewSetLabel(detail::TexelBufferView* self, StringView label) {
        
        
        mProcs->texelBufferViewSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }

    WireResult Server::DoTextureCreateErrorView(detail::Texture* self, TextureViewDescriptor const * descriptor, WGPUTextureView* result) {
        *result =
        mProcs->textureCreateErrorView(ToAPI(self), ToAPI(descriptor));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoTextureCreateView(detail::Texture* self, TextureViewDescriptor const * descriptor, WGPUTextureView* result) {
        *result =
        mProcs->textureCreateView(ToAPI(self), ToAPI(descriptor));
        DAWN_ASSERT(*result != nullptr);


        return WireResult::Success;
    }

    WireResult Server::DoTextureDestroy(detail::Texture* self) {
        
        
        mProcs->textureDestroy(ToAPI(self));


        return WireResult::Success;
    }

    WireResult Server::DoTextureSetLabel(detail::Texture* self, StringView label) {
        
        
        mProcs->textureSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }

    WireResult Server::DoTextureViewSetLabel(detail::TextureView* self, StringView label) {
        
        
        mProcs->textureViewSetLabel(ToAPI(self), ToAPI(label));


        return WireResult::Success;
    }


    WireResult Server::DoUnregisterObject(ObjectType objectType, ObjectId objectId) {
        switch(objectType) {
            case ObjectType::Adapter: {
                WGPUAdapter handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPUAdapter> data;
                    WIRE_TRY(Free<WGPUAdapter>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::BindGroup: {
                WGPUBindGroup handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPUBindGroup> data;
                    WIRE_TRY(Free<WGPUBindGroup>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::BindGroupLayout: {
                WGPUBindGroupLayout handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPUBindGroupLayout> data;
                    WIRE_TRY(Free<WGPUBindGroupLayout>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::Buffer: {
                WGPUBuffer handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPUBuffer> data;
                    WIRE_TRY(Free<WGPUBuffer>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::CommandBuffer: {
                WGPUCommandBuffer handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPUCommandBuffer> data;
                    WIRE_TRY(Free<WGPUCommandBuffer>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::CommandEncoder: {
                WGPUCommandEncoder handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPUCommandEncoder> data;
                    WIRE_TRY(Free<WGPUCommandEncoder>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::ComputePipeline: {
                WGPUComputePipeline handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPUComputePipeline> data;
                    WIRE_TRY(Free<WGPUComputePipeline>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::Device: {
                WGPUDevice handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPUDevice> data;
                    WIRE_TRY(Free<WGPUDevice>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                    if (state == AllocationState::Allocated) {
                        mProcs->deviceDestroy(handle);
                    }
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::ExternalTexture: {
                WGPUExternalTexture handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPUExternalTexture> data;
                    WIRE_TRY(Free<WGPUExternalTexture>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::Instance: {
                WGPUInstance handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPUInstance> data;
                    WIRE_TRY(Free<WGPUInstance>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::PipelineLayout: {
                WGPUPipelineLayout handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPUPipelineLayout> data;
                    WIRE_TRY(Free<WGPUPipelineLayout>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::QuerySet: {
                WGPUQuerySet handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPUQuerySet> data;
                    WIRE_TRY(Free<WGPUQuerySet>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::Queue: {
                WGPUQueue handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPUQueue> data;
                    WIRE_TRY(Free<WGPUQueue>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::RenderBundle: {
                WGPURenderBundle handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPURenderBundle> data;
                    WIRE_TRY(Free<WGPURenderBundle>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::RenderPipeline: {
                WGPURenderPipeline handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPURenderPipeline> data;
                    WIRE_TRY(Free<WGPURenderPipeline>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::ResourceTable: {
                WGPUResourceTable handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPUResourceTable> data;
                    WIRE_TRY(Free<WGPUResourceTable>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::Sampler: {
                WGPUSampler handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPUSampler> data;
                    WIRE_TRY(Free<WGPUSampler>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::ShaderModule: {
                WGPUShaderModule handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPUShaderModule> data;
                    WIRE_TRY(Free<WGPUShaderModule>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::Surface: {
                WGPUSurface handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPUSurface> data;
                    WIRE_TRY(Free<WGPUSurface>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::TexelBufferView: {
                WGPUTexelBufferView handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPUTexelBufferView> data;
                    WIRE_TRY(Free<WGPUTexelBufferView>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::Texture: {
                WGPUTexture handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPUTexture> data;
                    WIRE_TRY(Free<WGPUTexture>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::TextureView: {
                WGPUTextureView handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPUTextureView> data;
                    WIRE_TRY(Free<WGPUTextureView>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::ComputePassEncoder: {
                WGPUComputePassEncoder handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPUComputePassEncoder> data;
                    WIRE_TRY(Free<WGPUComputePassEncoder>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::RenderBundleEncoder: {
                WGPURenderBundleEncoder handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPURenderBundleEncoder> data;
                    WIRE_TRY(Free<WGPURenderBundleEncoder>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            case ObjectType::RenderPassEncoder: {
                WGPURenderPassEncoder handle = nullptr;
                AllocationState state = AllocationState::Free;
                {
                    ObjectData<WGPURenderPassEncoder> data;
                    WIRE_TRY(Free<WGPURenderPassEncoder>(objectId, &data));
                    handle = data.handle;
                    state = data.state;
                }
                if (state == AllocationState::Allocated) {
                    DAWN_ASSERT(handle != nullptr);
                    Release(handle);
                }
                return WireResult::Success;
            }
            default:
                return WireResult::FatalError;
        }
    }

}  // namespace dawn::wire::server
