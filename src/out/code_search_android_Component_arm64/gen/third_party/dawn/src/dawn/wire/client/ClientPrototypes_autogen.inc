

// Command handlers & doers
WireResult HandleAdapterRequestDeviceCallback(DeserializeBuffer* deserializeBuffer);
WireResult DoAdapterRequestDeviceCallback(ObjectId instanceId, Future future, wgpu::RequestDeviceStatus status, StringView message, Limits const * limits, dawn::ityp::span<size_t, wgpu::FeatureName const, dawn::detail::DynamicExtent<size_t>> features);

WireResult HandleBufferMapAsyncCallback(DeserializeBuffer* deserializeBuffer);
WireResult DoBufferMapAsyncCallback(ObjectId instanceId, Future future, wgpu::MapAsyncStatus status, StringView message, dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>> readDataUpdateInfo);

WireResult HandleDeviceCreateComputePipelineAsyncCallback(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateComputePipelineAsyncCallback(ObjectId instanceId, Future future, wgpu::CreatePipelineAsyncStatus status, StringView message);

WireResult HandleDeviceCreateRenderPipelineAsyncCallback(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceCreateRenderPipelineAsyncCallback(ObjectId instanceId, Future future, wgpu::CreatePipelineAsyncStatus status, StringView message);

WireResult HandleDeviceLoggingCallback(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceLoggingCallback(Device* device, wgpu::LoggingType type, StringView message);

WireResult HandleDeviceLostCallback(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceLostCallback(ObjectId instanceId, Future future, wgpu::DeviceLostReason reason, StringView message);

WireResult HandleDevicePopErrorScopeCallback(DeserializeBuffer* deserializeBuffer);
WireResult DoDevicePopErrorScopeCallback(ObjectId instanceId, Future future, wgpu::PopErrorScopeStatus status, wgpu::ErrorType type, StringView message);

WireResult HandleDeviceUncapturedErrorCallback(DeserializeBuffer* deserializeBuffer);
WireResult DoDeviceUncapturedErrorCallback(Device* device, wgpu::ErrorType type, StringView message);

WireResult HandleInstanceRequestAdapterCallback(DeserializeBuffer* deserializeBuffer);
WireResult DoInstanceRequestAdapterCallback(ObjectId instanceId, Future future, wgpu::RequestAdapterStatus status, StringView message, AdapterInfo const * info, Limits const * limits, dawn::ityp::span<size_t, wgpu::FeatureName const, dawn::detail::DynamicExtent<size_t>> features);

WireResult HandleQueueWorkDoneCallback(DeserializeBuffer* deserializeBuffer);
WireResult DoQueueWorkDoneCallback(ObjectId instanceId, Future future, wgpu::QueueWorkDoneStatus status, StringView message);

WireResult HandleShaderModuleGetCompilationInfoCallback(DeserializeBuffer* deserializeBuffer);
WireResult DoShaderModuleGetCompilationInfoCallback(ObjectId instanceId, Future future, wgpu::CompilationInfoRequestStatus status, CompilationInfo const * info);

