

// Command handlers & doers
WireResult HandleAdapterRequestDevice(DeserializeBuffer* deserializeBuffer);
WireResult DoAdapterRequestDevice(Known<WGPUAdapter> adapterId, Known<WGPUInstance> instanceId, Future future, ObjectHandle deviceObjectHandle, Future deviceLostFuture, DeviceDescriptor const * descriptor);

WireResult HandleBindGroupLayoutSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoBindGroupLayoutSetLabel(detail::BindGroupLayout* self, StringView label);

WireResult HandleBindGroupSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoBindGroupSetLabel(detail::BindGroup* self, StringView label);

WireResult HandleBufferCreateTexelView(DeserializeBuffer* deserializeBuffer);
WireResult DoBufferCreateTexelView(detail::Buffer* self, TexelBufferViewDescriptor const * descriptor, WGPUTexelBufferView* result);

WireResult HandleBufferDestroy(DeserializeBuffer* deserializeBuffer);
WireResult DoBufferDestroy(detail::Buffer* self);

WireResult HandleBufferMapAsync(DeserializeBuffer* deserializeBuffer);
WireResult DoBufferMapAsync(Known<WGPUBuffer> bufferId, Known<WGPUInstance> instanceId, Future future, wgpu::MapMode mode, size_t offset, size_t size);

WireResult HandleBufferSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoBufferSetLabel(detail::Buffer* self, StringView label);

WireResult HandleBufferUnmap(DeserializeBuffer* deserializeBuffer);
WireResult DoBufferUnmap(detail::Buffer* self);

WireResult HandleBufferUpdateMappedData(DeserializeBuffer* deserializeBuffer);
WireResult DoBufferUpdateMappedData(Known<WGPUBuffer> bufferId, dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>> dataUpdateInfo, size_t offset, size_t size);

WireResult HandleCommandBufferSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoCommandBufferSetLabel(detail::CommandBuffer* self, StringView label);

WireResult HandleCommandEncoderBeginComputePass(DeserializeBuffer* deserializeBuffer);
WireResult DoCommandEncoderBeginComputePass(detail::CommandEncoder* self, ComputePassDescriptor const * descriptor, WGPUComputePassEncoder* result);

WireResult HandleCommandEncoderBeginRenderPass(DeserializeBuffer* deserializeBuffer);
WireResult DoCommandEncoderBeginRenderPass(detail::CommandEncoder* self, RenderPassDescriptor const * descriptor, WGPURenderPassEncoder* result);

WireResult HandleCommandEncoderClearBuffer(DeserializeBuffer* deserializeBuffer);
WireResult DoCommandEncoderClearBuffer(detail::CommandEncoder* self, detail::Buffer* buffer, uint64_t offset, uint64_t size);

WireResult HandleCommandEncoderCopyBufferToBuffer(DeserializeBuffer* deserializeBuffer);
WireResult DoCommandEncoderCopyBufferToBuffer(detail::CommandEncoder* self, detail::Buffer* source, uint64_t sourceOffset, detail::Buffer* destination, uint64_t destinationOffset, uint64_t size);

WireResult HandleCommandEncoderCopyBufferToTexture(DeserializeBuffer* deserializeBuffer);
WireResult DoCommandEncoderCopyBufferToTexture(detail::CommandEncoder* self, TexelCopyBufferInfo const * source, TexelCopyTextureInfo const * destination, Extent3D const * copySize);

WireResult HandleCommandEncoderCopyTextureToBuffer(DeserializeBuffer* deserializeBuffer);
WireResult DoCommandEncoderCopyTextureToBuffer(detail::CommandEncoder* self, TexelCopyTextureInfo const * source, TexelCopyBufferInfo const * destination, Extent3D const * copySize);

WireResult HandleCommandEncoderCopyTextureToTexture(DeserializeBuffer* deserializeBuffer);
WireResult DoCommandEncoderCopyTextureToTexture(detail::CommandEncoder* self, TexelCopyTextureInfo const * source, TexelCopyTextureInfo const * destination, Extent3D const * copySize);

WireResult HandleCommandEncoderFinish(DeserializeBuffer* deserializeBuffer);
WireResult DoCommandEncoderFinish(detail::CommandEncoder* self, CommandBufferDescriptor const * descriptor, WGPUCommandBuffer* result);

WireResult HandleCommandEncoderInjectValidationError(DeserializeBuffer* deserializeBuffer);
WireResult DoCommandEncoderInjectValidationError(detail::CommandEncoder* self, StringView message);

WireResult HandleCommandEncoderInsertDebugMarker(DeserializeBuffer* deserializeBuffer);
WireResult DoCommandEncoderInsertDebugMarker(detail::CommandEncoder* self, StringView markerLabel);

WireResult HandleCommandEncoderPopDebugGroup(DeserializeBuffer* deserializeBuffer);
WireResult DoCommandEncoderPopDebugGroup(detail::CommandEncoder* self);

WireResult HandleCommandEncoderPushDebugGroup(DeserializeBuffer* deserializeBuffer);
WireResult DoCommandEncoderPushDebugGroup(detail::CommandEncoder* self, StringView groupLabel);

WireResult HandleCommandEncoderResolveQuerySet(DeserializeBuffer* deserializeBuffer);
WireResult DoCommandEncoderResolveQuerySet(detail::CommandEncoder* self, detail::QuerySet* querySet, uint32_t firstQuery, uint32_t queryCount, detail::Buffer* destination, uint64_t destinationOffset);

WireResult HandleCommandEncoderSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoCommandEncoderSetLabel(detail::CommandEncoder* self, StringView label);

WireResult HandleCommandEncoderWriteBuffer(DeserializeBuffer* deserializeBuffer);
WireResult DoCommandEncoderWriteBuffer(detail::CommandEncoder* self, detail::Buffer* buffer, uint64_t bufferOffset, dawn::ityp::span<size_t, volatile std::byte const, dawn::detail::DynamicExtent<size_t>> data);

WireResult HandleCommandEncoderWriteTimestamp(DeserializeBuffer* deserializeBuffer);
WireResult DoCommandEncoderWriteTimestamp(detail::CommandEncoder* self, detail::QuerySet* querySet, uint32_t queryIndex);

WireResult HandleComputePassEncoderDispatchWorkgroups(DeserializeBuffer* deserializeBuffer);
WireResult DoComputePassEncoderDispatchWorkgroups(detail::ComputePassEncoder* self, uint32_t workgroupCountX, uint32_t workgroupCountY, uint32_t workgroupCountZ);

WireResult HandleComputePassEncoderDispatchWorkgroupsIndirect(DeserializeBuffer* deserializeBuffer);
WireResult DoComputePassEncoderDispatchWorkgroupsIndirect(detail::ComputePassEncoder* self, detail::Buffer* indirectBuffer, uint64_t indirectOffset);

WireResult HandleComputePassEncoderEnd(DeserializeBuffer* deserializeBuffer);
WireResult DoComputePassEncoderEnd(detail::ComputePassEncoder* self);

WireResult HandleComputePassEncoderInsertDebugMarker(DeserializeBuffer* deserializeBuffer);
WireResult DoComputePassEncoderInsertDebugMarker(detail::ComputePassEncoder* self, StringView markerLabel);

WireResult HandleComputePassEncoderPopDebugGroup(DeserializeBuffer* deserializeBuffer);
WireResult DoComputePassEncoderPopDebugGroup(detail::ComputePassEncoder* self);

WireResult HandleComputePassEncoderPushDebugGroup(DeserializeBuffer* deserializeBuffer);
WireResult DoComputePassEncoderPushDebugGroup(detail::ComputePassEncoder* self, StringView groupLabel);

WireResult HandleComputePassEncoderSetBindGroup(DeserializeBuffer* deserializeBuffer);
WireResult DoComputePassEncoderSetBindGroup(detail::ComputePassEncoder* self, uint32_t groupIndex, detail::BindGroup* group, dawn::ityp::span<size_t, uint32_t const, dawn::detail::DynamicExtent<size_t>> dynamicOffsets);

WireResult HandleComputePassEncoderSetImmediates(DeserializeBuffer* deserializeBuffer);
WireResult DoComputePassEncoderSetImmediates(detail::ComputePassEncoder* self, uint32_t offset, dawn::ityp::span<size_t, volatile std::byte const, dawn::detail::DynamicExtent<size_t>> data);

WireResult HandleComputePassEncoderSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoComputePassEncoderSetLabel(detail::ComputePassEncoder* self, StringView label);

WireResult HandleComputePassEncoderSetPipeline(DeserializeBuffer* deserializeBuffer);
WireResult DoComputePassEncoderSetPipeline(detail::ComputePassEncoder* self, detail::ComputePipeline* pipeline);

WireResult HandleComputePassEncoderSetResourceTable(DeserializeBuffer* deserializeBuffer);
WireResult DoComputePassEncoderSetResourceTable(detail::ComputePassEncoder* self, detail::ResourceTable* table);

WireResult HandleComputePassEncoderWriteTimestamp(DeserializeBuffer* deserializeBuffer);
WireResult DoComputePassEncoderWriteTimestamp(detail::ComputePassEncoder* self, detail::QuerySet* querySet, uint32_t queryIndex);

WireResult HandleComputePipelineGetBindGroupLayout(DeserializeBuffer* deserializeBuffer);
WireResult DoComputePipelineGetBindGroupLayout(detail::ComputePipeline* self, uint32_t groupIndex, WGPUBindGroupLayout* result);

WireResult HandleComputePipelineSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoComputePipelineSetLabel(detail::ComputePipeline* self, StringView label);

WireResult HandleDeviceCreateBindGroup(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateBindGroup(detail::Device* self, BindGroupDescriptor const * descriptor, WGPUBindGroup* result);

WireResult HandleDeviceCreateBindGroupLayout(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateBindGroupLayout(detail::Device* self, BindGroupLayoutDescriptor const * descriptor, WGPUBindGroupLayout* result);

WireResult HandleDeviceCreateBuffer(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateBuffer(Known<WGPUDevice> deviceId, BufferDescriptor const * descriptor, ObjectHandle result, dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>> memoryHandleCreateInfo);

WireResult HandleDeviceCreateCommandEncoder(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateCommandEncoder(detail::Device* self, CommandEncoderDescriptor const * descriptor, WGPUCommandEncoder* result);

WireResult HandleDeviceCreateComputePipeline(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateComputePipeline(detail::Device* self, ComputePipelineDescriptor const * descriptor, WGPUComputePipeline* result);

WireResult HandleDeviceCreateComputePipelineAsync(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateComputePipelineAsync(Known<WGPUDevice> deviceId, Known<WGPUInstance> instanceId, Future future, ObjectHandle pipelineObjectHandle, ComputePipelineDescriptor const * descriptor);

WireResult HandleDeviceCreateErrorBuffer(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateErrorBuffer(detail::Device* self, BufferDescriptor const * descriptor, WGPUBuffer* result);

WireResult HandleDeviceCreateErrorComputePipeline(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateErrorComputePipeline(detail::Device* self, StringView label, WGPUComputePipeline* result);

WireResult HandleDeviceCreateErrorExternalTexture(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateErrorExternalTexture(detail::Device* self, WGPUExternalTexture* result);

WireResult HandleDeviceCreateErrorRenderPipeline(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateErrorRenderPipeline(detail::Device* self, StringView label, WGPURenderPipeline* result);

WireResult HandleDeviceCreateErrorShaderModule(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateErrorShaderModule(detail::Device* self, ShaderModuleDescriptor const * descriptor, StringView errorMessage, WGPUShaderModule* result);

WireResult HandleDeviceCreateErrorTexture(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateErrorTexture(detail::Device* self, TextureDescriptor const * descriptor, WGPUTexture* result);

WireResult HandleDeviceCreateExternalTexture(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateExternalTexture(detail::Device* self, ExternalTextureDescriptor const * externalTextureDescriptor, WGPUExternalTexture* result);

WireResult HandleDeviceCreatePipelineLayout(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreatePipelineLayout(detail::Device* self, PipelineLayoutDescriptor const * descriptor, WGPUPipelineLayout* result);

WireResult HandleDeviceCreateQuerySet(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateQuerySet(detail::Device* self, QuerySetDescriptor const * descriptor, WGPUQuerySet* result);

WireResult HandleDeviceCreateRenderBundleEncoder(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateRenderBundleEncoder(detail::Device* self, RenderBundleEncoderDescriptor const * descriptor, WGPURenderBundleEncoder* result);

WireResult HandleDeviceCreateRenderPipeline(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateRenderPipeline(detail::Device* self, RenderPipelineDescriptor const * descriptor, WGPURenderPipeline* result);

WireResult HandleDeviceCreateRenderPipelineAsync(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateRenderPipelineAsync(Known<WGPUDevice> deviceId, Known<WGPUInstance> instanceId, Future future, ObjectHandle pipelineObjectHandle, RenderPipelineDescriptor const * descriptor);

WireResult HandleDeviceCreateResourceTable(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateResourceTable(detail::Device* self, ResourceTableDescriptor const * descriptor, WGPUResourceTable* result);

WireResult HandleDeviceCreateSampler(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateSampler(detail::Device* self, SamplerDescriptor const * descriptor, WGPUSampler* result);

WireResult HandleDeviceCreateShaderModule(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateShaderModule(detail::Device* self, ShaderModuleDescriptor const * descriptor, WGPUShaderModule* result);

WireResult HandleDeviceCreateTexture(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateTexture(detail::Device* self, TextureDescriptor const * descriptor, WGPUTexture* result);

WireResult HandleDeviceDestroy(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceDestroy(detail::Device* self);

WireResult HandleDeviceForceLoss(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceForceLoss(detail::Device* self, wgpu::DeviceLostReason type, StringView message);

WireResult HandleDeviceGetQueue(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceGetQueue(detail::Device* self, WGPUQueue* result);

WireResult HandleDeviceInjectError(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceInjectError(detail::Device* self, wgpu::ErrorType type, StringView message);

WireResult HandleDevicePopErrorScope(DeserializeBuffer* deserializeBuffer);
WireResult DoDevicePopErrorScope(Known<WGPUDevice> deviceId, Known<WGPUInstance> instanceId, Future future);

WireResult HandleDevicePushErrorScope(DeserializeBuffer* deserializeBuffer);
WireResult DoDevicePushErrorScope(detail::Device* self, wgpu::ErrorFilter filter);

WireResult HandleDeviceSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceSetLabel(detail::Device* self, StringView label);

WireResult HandleDeviceTick(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceTick(detail::Device* self);

WireResult HandleDeviceValidateTextureDescriptor(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceValidateTextureDescriptor(detail::Device* self, TextureDescriptor const * descriptor);

WireResult HandleExternalTextureDestroy(DeserializeBuffer* deserializeBuffer);
WireResult DoExternalTextureDestroy(detail::ExternalTexture* self);

WireResult HandleExternalTextureExpire(DeserializeBuffer* deserializeBuffer);
WireResult DoExternalTextureExpire(detail::ExternalTexture* self);

WireResult HandleExternalTextureRefresh(DeserializeBuffer* deserializeBuffer);
WireResult DoExternalTextureRefresh(detail::ExternalTexture* self);

WireResult HandleExternalTextureSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoExternalTextureSetLabel(detail::ExternalTexture* self, StringView label);

WireResult HandleInstanceProcessEvents(DeserializeBuffer* deserializeBuffer);
WireResult DoInstanceProcessEvents(detail::Instance* self);

WireResult HandleInstanceRequestAdapter(DeserializeBuffer* deserializeBuffer);
WireResult DoInstanceRequestAdapter(Known<WGPUInstance> instanceId, Future future, ObjectHandle adapterObjectHandle, RequestAdapterOptions const * options);

WireResult HandlePipelineLayoutSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoPipelineLayoutSetLabel(detail::PipelineLayout* self, StringView label);

WireResult HandleQuerySetDestroy(DeserializeBuffer* deserializeBuffer);
WireResult DoQuerySetDestroy(detail::QuerySet* self);

WireResult HandleQuerySetSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoQuerySetSetLabel(detail::QuerySet* self, StringView label);

WireResult HandleQueueCopyExternalTextureForBrowser(DeserializeBuffer* deserializeBuffer);
WireResult DoQueueCopyExternalTextureForBrowser(detail::Queue* self, ImageCopyExternalTexture const * source, TexelCopyTextureInfo const * destination, Extent3D const * copySize, CopyTextureForBrowserOptions const * options);

WireResult HandleQueueCopyTextureForBrowser(DeserializeBuffer* deserializeBuffer);
WireResult DoQueueCopyTextureForBrowser(detail::Queue* self, TexelCopyTextureInfo const * source, TexelCopyTextureInfo const * destination, Extent3D const * copySize, CopyTextureForBrowserOptions const * options);

WireResult HandleQueueOnSubmittedWorkDone(DeserializeBuffer* deserializeBuffer);
WireResult DoQueueOnSubmittedWorkDone(Known<WGPUQueue> queueId, Known<WGPUInstance> instanceId, Future future);

WireResult HandleQueueSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoQueueSetLabel(detail::Queue* self, StringView label);

WireResult HandleQueueSubmit(DeserializeBuffer* deserializeBuffer);
WireResult DoQueueSubmit(detail::Queue* self, dawn::ityp::span<size_t, detail::CommandBuffer* const, dawn::detail::DynamicExtent<size_t>> commands);

WireResult HandleQueueWriteBuffer(DeserializeBuffer* deserializeBuffer);
WireResult DoQueueWriteBuffer(Known<WGPUQueue> queueId, Known<WGPUBuffer> bufferId, uint64_t bufferOffset, dawn::ityp::span<size_t, volatile std::byte const, dawn::detail::DynamicExtent<size_t>> data);

WireResult HandleQueueWriteBufferXl(DeserializeBuffer* deserializeBuffer);
WireResult DoQueueWriteBufferXl(Known<WGPUQueue> queueId, Known<WGPUBuffer> bufferId, uint64_t bufferOffset, size_t size, dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>> memoryHandleCreateInfo, dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>> memoryDataUpdateInfo);

WireResult HandleQueueWriteTexture(DeserializeBuffer* deserializeBuffer);
WireResult DoQueueWriteTexture(Known<WGPUQueue> queueId, TexelCopyTextureInfo const * destination, dawn::ityp::span<size_t, volatile std::byte const, dawn::detail::DynamicExtent<size_t>> data, TexelCopyBufferLayout const * dataLayout, Extent3D const * writeSize);

WireResult HandleQueueWriteTextureXl(DeserializeBuffer* deserializeBuffer);
WireResult DoQueueWriteTextureXl(Known<WGPUQueue> queueId, TexelCopyTextureInfo const * destination, size_t dataSize, TexelCopyBufferLayout const * dataLayout, Extent3D const * writeSize, dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>> memoryHandleCreateInfo, dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>> memoryDataUpdateInfo);

WireResult HandleRenderBundleEncoderDraw(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderBundleEncoderDraw(detail::RenderBundleEncoder* self, uint32_t vertexCount, uint32_t instanceCount, uint32_t firstVertex, uint32_t firstInstance);

WireResult HandleRenderBundleEncoderDrawIndexed(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderBundleEncoderDrawIndexed(detail::RenderBundleEncoder* self, uint32_t indexCount, uint32_t instanceCount, uint32_t firstIndex, int32_t baseVertex, uint32_t firstInstance);

WireResult HandleRenderBundleEncoderDrawIndexedIndirect(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderBundleEncoderDrawIndexedIndirect(detail::RenderBundleEncoder* self, detail::Buffer* indirectBuffer, uint64_t indirectOffset);

WireResult HandleRenderBundleEncoderDrawIndirect(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderBundleEncoderDrawIndirect(detail::RenderBundleEncoder* self, detail::Buffer* indirectBuffer, uint64_t indirectOffset);

WireResult HandleRenderBundleEncoderFinish(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderBundleEncoderFinish(detail::RenderBundleEncoder* self, RenderBundleDescriptor const * descriptor, WGPURenderBundle* result);

WireResult HandleRenderBundleEncoderInsertDebugMarker(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderBundleEncoderInsertDebugMarker(detail::RenderBundleEncoder* self, StringView markerLabel);

WireResult HandleRenderBundleEncoderPopDebugGroup(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderBundleEncoderPopDebugGroup(detail::RenderBundleEncoder* self);

WireResult HandleRenderBundleEncoderPushDebugGroup(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderBundleEncoderPushDebugGroup(detail::RenderBundleEncoder* self, StringView groupLabel);

WireResult HandleRenderBundleEncoderSetBindGroup(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderBundleEncoderSetBindGroup(detail::RenderBundleEncoder* self, uint32_t groupIndex, detail::BindGroup* group, dawn::ityp::span<size_t, uint32_t const, dawn::detail::DynamicExtent<size_t>> dynamicOffsets);

WireResult HandleRenderBundleEncoderSetImmediates(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderBundleEncoderSetImmediates(detail::RenderBundleEncoder* self, uint32_t offset, dawn::ityp::span<size_t, volatile std::byte const, dawn::detail::DynamicExtent<size_t>> data);

WireResult HandleRenderBundleEncoderSetIndexBuffer(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderBundleEncoderSetIndexBuffer(detail::RenderBundleEncoder* self, detail::Buffer* buffer, wgpu::IndexFormat format, uint64_t offset, uint64_t size);

WireResult HandleRenderBundleEncoderSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderBundleEncoderSetLabel(detail::RenderBundleEncoder* self, StringView label);

WireResult HandleRenderBundleEncoderSetPipeline(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderBundleEncoderSetPipeline(detail::RenderBundleEncoder* self, detail::RenderPipeline* pipeline);

WireResult HandleRenderBundleEncoderSetVertexBuffer(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderBundleEncoderSetVertexBuffer(detail::RenderBundleEncoder* self, uint32_t slot, detail::Buffer* buffer, uint64_t offset, uint64_t size);

WireResult HandleRenderBundleSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderBundleSetLabel(detail::RenderBundle* self, StringView label);

WireResult HandleRenderPassEncoderBeginOcclusionQuery(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderBeginOcclusionQuery(detail::RenderPassEncoder* self, uint32_t queryIndex);

WireResult HandleRenderPassEncoderDraw(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderDraw(detail::RenderPassEncoder* self, uint32_t vertexCount, uint32_t instanceCount, uint32_t firstVertex, uint32_t firstInstance);

WireResult HandleRenderPassEncoderDrawIndexed(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderDrawIndexed(detail::RenderPassEncoder* self, uint32_t indexCount, uint32_t instanceCount, uint32_t firstIndex, int32_t baseVertex, uint32_t firstInstance);

WireResult HandleRenderPassEncoderDrawIndexedIndirect(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderDrawIndexedIndirect(detail::RenderPassEncoder* self, detail::Buffer* indirectBuffer, uint64_t indirectOffset);

WireResult HandleRenderPassEncoderDrawIndirect(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderDrawIndirect(detail::RenderPassEncoder* self, detail::Buffer* indirectBuffer, uint64_t indirectOffset);

WireResult HandleRenderPassEncoderEnd(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderEnd(detail::RenderPassEncoder* self);

WireResult HandleRenderPassEncoderEndOcclusionQuery(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderEndOcclusionQuery(detail::RenderPassEncoder* self);

WireResult HandleRenderPassEncoderExecuteBundles(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderExecuteBundles(detail::RenderPassEncoder* self, dawn::ityp::span<size_t, detail::RenderBundle* const, dawn::detail::DynamicExtent<size_t>> bundles);

WireResult HandleRenderPassEncoderInsertDebugMarker(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderInsertDebugMarker(detail::RenderPassEncoder* self, StringView markerLabel);

WireResult HandleRenderPassEncoderMultiDrawIndexedIndirect(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderMultiDrawIndexedIndirect(detail::RenderPassEncoder* self, detail::Buffer* indirectBuffer, uint64_t indirectOffset, uint32_t maxDrawCount, detail::Buffer* drawCountBuffer, uint64_t drawCountBufferOffset);

WireResult HandleRenderPassEncoderMultiDrawIndirect(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderMultiDrawIndirect(detail::RenderPassEncoder* self, detail::Buffer* indirectBuffer, uint64_t indirectOffset, uint32_t maxDrawCount, detail::Buffer* drawCountBuffer, uint64_t drawCountBufferOffset);

WireResult HandleRenderPassEncoderPixelLocalStorageBarrier(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderPixelLocalStorageBarrier(detail::RenderPassEncoder* self);

WireResult HandleRenderPassEncoderPopDebugGroup(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderPopDebugGroup(detail::RenderPassEncoder* self);

WireResult HandleRenderPassEncoderPushDebugGroup(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderPushDebugGroup(detail::RenderPassEncoder* self, StringView groupLabel);

WireResult HandleRenderPassEncoderSetBindGroup(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderSetBindGroup(detail::RenderPassEncoder* self, uint32_t groupIndex, detail::BindGroup* group, dawn::ityp::span<size_t, uint32_t const, dawn::detail::DynamicExtent<size_t>> dynamicOffsets);

WireResult HandleRenderPassEncoderSetBlendConstant(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderSetBlendConstant(detail::RenderPassEncoder* self, Color const * color);

WireResult HandleRenderPassEncoderSetImmediates(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderSetImmediates(detail::RenderPassEncoder* self, uint32_t offset, dawn::ityp::span<size_t, volatile std::byte const, dawn::detail::DynamicExtent<size_t>> data);

WireResult HandleRenderPassEncoderSetIndexBuffer(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderSetIndexBuffer(detail::RenderPassEncoder* self, detail::Buffer* buffer, wgpu::IndexFormat format, uint64_t offset, uint64_t size);

WireResult HandleRenderPassEncoderSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderSetLabel(detail::RenderPassEncoder* self, StringView label);

WireResult HandleRenderPassEncoderSetPipeline(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderSetPipeline(detail::RenderPassEncoder* self, detail::RenderPipeline* pipeline);

WireResult HandleRenderPassEncoderSetResourceTable(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderSetResourceTable(detail::RenderPassEncoder* self, detail::ResourceTable* table);

WireResult HandleRenderPassEncoderSetScissorRect(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderSetScissorRect(detail::RenderPassEncoder* self, uint32_t x, uint32_t y, uint32_t width, uint32_t height);

WireResult HandleRenderPassEncoderSetStencilReference(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderSetStencilReference(detail::RenderPassEncoder* self, uint32_t reference);

WireResult HandleRenderPassEncoderSetVertexBuffer(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderSetVertexBuffer(detail::RenderPassEncoder* self, uint32_t slot, detail::Buffer* buffer, uint64_t offset, uint64_t size);

WireResult HandleRenderPassEncoderSetViewport(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderSetViewport(detail::RenderPassEncoder* self, float x, float y, float width, float height, float minDepth, float maxDepth);

WireResult HandleRenderPassEncoderWriteTimestamp(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPassEncoderWriteTimestamp(detail::RenderPassEncoder* self, detail::QuerySet* querySet, uint32_t queryIndex);

WireResult HandleRenderPipelineGetBindGroupLayout(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPipelineGetBindGroupLayout(detail::RenderPipeline* self, uint32_t groupIndex, WGPUBindGroupLayout* result);

WireResult HandleRenderPipelineSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoRenderPipelineSetLabel(detail::RenderPipeline* self, StringView label);

WireResult HandleResourceTableDestroy(DeserializeBuffer* deserializeBuffer);
WireResult DoResourceTableDestroy(detail::ResourceTable* self);

WireResult HandleResourceTableRemove(DeserializeBuffer* deserializeBuffer);
WireResult DoResourceTableRemove(detail::ResourceTable* self, uint32_t slot);

WireResult HandleResourceTableSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoResourceTableSetLabel(detail::ResourceTable* self, StringView label);

WireResult HandleResourceTableUpdate(DeserializeBuffer* deserializeBuffer);
WireResult DoResourceTableUpdate(detail::ResourceTable* self, uint32_t slot, BindingResource const * resource);

WireResult HandleSamplerSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoSamplerSetLabel(detail::Sampler* self, StringView label);

WireResult HandleShaderModuleGetCompilationInfo(DeserializeBuffer* deserializeBuffer);
WireResult DoShaderModuleGetCompilationInfo(Known<WGPUShaderModule> shaderModuleId, Known<WGPUInstance> instanceId, Future future);

WireResult HandleShaderModuleSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoShaderModuleSetLabel(detail::ShaderModule* self, StringView label);

WireResult HandleSurfaceConfigure(DeserializeBuffer* deserializeBuffer);
WireResult DoSurfaceConfigure(detail::Surface* self, SurfaceConfiguration const * config);

WireResult HandleSurfaceGetCurrentTexture(DeserializeBuffer* deserializeBuffer);
WireResult DoSurfaceGetCurrentTexture(Known<WGPUSurface> surfaceId, Known<WGPUDevice> configuredDeviceId, ObjectHandle textureHandle);

WireResult HandleSurfacePresent(DeserializeBuffer* deserializeBuffer);
WireResult DoSurfacePresent(detail::Surface* self);

WireResult HandleSurfaceSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoSurfaceSetLabel(detail::Surface* self, StringView label);

WireResult HandleSurfaceUnconfigure(DeserializeBuffer* deserializeBuffer);
WireResult DoSurfaceUnconfigure(detail::Surface* self);

WireResult HandleTexelBufferViewSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoTexelBufferViewSetLabel(detail::TexelBufferView* self, StringView label);

WireResult HandleTextureCreateErrorView(DeserializeBuffer* deserializeBuffer);
WireResult DoTextureCreateErrorView(detail::Texture* self, TextureViewDescriptor const * descriptor, WGPUTextureView* result);

WireResult HandleTextureCreateView(DeserializeBuffer* deserializeBuffer);
WireResult DoTextureCreateView(detail::Texture* self, TextureViewDescriptor const * descriptor, WGPUTextureView* result);

WireResult HandleTextureDestroy(DeserializeBuffer* deserializeBuffer);
WireResult DoTextureDestroy(detail::Texture* self);

WireResult HandleTextureSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoTextureSetLabel(detail::Texture* self, StringView label);

WireResult HandleTextureViewSetLabel(DeserializeBuffer* deserializeBuffer);
WireResult DoTextureViewSetLabel(detail::TextureView* self, StringView label);

WireResult HandleUnregisterObject(DeserializeBuffer* deserializeBuffer);
WireResult DoUnregisterObject(ObjectType objectType, ObjectId objectId);


WireResult PreHandleDeviceCreateErrorBuffer(const DeviceCreateErrorBufferCmd& cmd);
WireResult PreHandleBufferDestroy(const BufferDestroyCmd& cmd);
WireResult PreHandleBufferUnmap(const BufferUnmapCmd& cmd);
