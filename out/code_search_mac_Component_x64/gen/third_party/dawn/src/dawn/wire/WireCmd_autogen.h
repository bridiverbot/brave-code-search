
#ifndef DAWNWIRE_WIRECMD_AUTOGEN_H_
#define DAWNWIRE_WIRECMD_AUTOGEN_H_

#include <webgpu/webgpu.h>

#include <optional>

#include "dawn/wire/ObjectType_autogen.h"
#include "dawn/wire/dawn_platform.h"
#include "src/dawn/wire/BufferConsumer.h"
#include "src/dawn/wire/ObjectHandle.h"
#include "src/dawn/wire/WireResult.h"
#include "src/utils/span.h"


namespace dawn::wire {

    // Interface to allocate more space to deserialize pointed-to data.
    // nullptr is treated as an error.
    class DeserializeAllocator {
        public:
            virtual ~DeserializeAllocator() = default;
            virtual std::optional<Span<std::byte>> TryGetSpace(size_t size) = 0;
    };

    // Interface to convert an ID to a server object, if possible.
    // Methods return FatalError if the ID is for a non-existent object and Success otherwise.
    class ObjectIdResolver {
        public:
            virtual ~ObjectIdResolver() = default;
            virtual WireResult GetFromId(ObjectId id, WGPUAdapter* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPUAdapter* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPUBindGroup* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPUBindGroup* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPUBindGroupLayout* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPUBindGroupLayout* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPUBuffer* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPUBuffer* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPUCommandBuffer* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPUCommandBuffer* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPUCommandEncoder* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPUCommandEncoder* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPUComputePipeline* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPUComputePipeline* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPUDevice* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPUDevice* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPUExternalTexture* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPUExternalTexture* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPUInstance* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPUInstance* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPUPipelineLayout* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPUPipelineLayout* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPUQuerySet* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPUQuerySet* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPUQueue* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPUQueue* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPURenderBundle* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPURenderBundle* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPURenderPipeline* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPURenderPipeline* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPUResourceTable* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPUResourceTable* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPUSampler* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPUSampler* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPUShaderModule* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPUShaderModule* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPUSurface* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPUSurface* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPUTexelBufferView* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPUTexelBufferView* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPUTexture* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPUTexture* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPUTextureView* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPUTextureView* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPUComputePassEncoder* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPUComputePassEncoder* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPURenderBundleEncoder* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPURenderBundleEncoder* out) const = 0;
            virtual WireResult GetFromId(ObjectId id, WGPURenderPassEncoder* out) const = 0;
            virtual WireResult GetOptionalFromId(ObjectId id, WGPURenderPassEncoder* out) const = 0;
    };

    // Interface to convert a client object to its ID for the wiring.
    class ObjectIdProvider {
        public:
            virtual ~ObjectIdProvider() = default;
            virtual WireResult GetId(WGPUAdapter object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPUAdapter object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPUBindGroup object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPUBindGroup object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPUBindGroupLayout object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPUBindGroupLayout object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPUBuffer object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPUBuffer object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPUCommandBuffer object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPUCommandBuffer object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPUCommandEncoder object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPUCommandEncoder object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPUComputePipeline object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPUComputePipeline object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPUDevice object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPUDevice object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPUExternalTexture object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPUExternalTexture object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPUInstance object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPUInstance object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPUPipelineLayout object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPUPipelineLayout object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPUQuerySet object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPUQuerySet object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPUQueue object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPUQueue object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPURenderBundle object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPURenderBundle object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPURenderPipeline object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPURenderPipeline object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPUResourceTable object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPUResourceTable object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPUSampler object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPUSampler object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPUShaderModule object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPUShaderModule object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPUSurface object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPUSurface object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPUTexelBufferView object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPUTexelBufferView object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPUTexture object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPUTexture object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPUTextureView object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPUTextureView object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPUComputePassEncoder object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPUComputePassEncoder object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPURenderBundleEncoder object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPURenderBundleEncoder object, volatile ObjectId* out) const = 0;
            virtual WireResult GetId(WGPURenderPassEncoder object, volatile ObjectId* out) const = 0;
            virtual WireResult GetOptionalId(WGPURenderPassEncoder object, volatile ObjectId* out) const = 0;
    };

    enum class WireCmd : uint32_t {
        // Enums used in special wire commands.
        ChunkedCommand,

        // Enums used on the wire format.
        AdapterRequestDevice,
        BindGroupLayoutSetLabel,
        BindGroupSetLabel,
        BufferCreateTexelView,
        BufferDestroy,
        BufferMapAsync,
        BufferSetLabel,
        BufferUnmap,
        BufferUpdateMappedData,
        CommandBufferSetLabel,
        CommandEncoderBeginComputePass,
        CommandEncoderBeginRenderPass,
        CommandEncoderClearBuffer,
        CommandEncoderCopyBufferToBuffer,
        CommandEncoderCopyBufferToTexture,
        CommandEncoderCopyTextureToBuffer,
        CommandEncoderCopyTextureToTexture,
        CommandEncoderFinish,
        CommandEncoderInjectValidationError,
        CommandEncoderInsertDebugMarker,
        CommandEncoderPopDebugGroup,
        CommandEncoderPushDebugGroup,
        CommandEncoderResolveQuerySet,
        CommandEncoderSetLabel,
        CommandEncoderWriteBuffer,
        CommandEncoderWriteTimestamp,
        ComputePassEncoderDispatchWorkgroups,
        ComputePassEncoderDispatchWorkgroupsIndirect,
        ComputePassEncoderEnd,
        ComputePassEncoderInsertDebugMarker,
        ComputePassEncoderPopDebugGroup,
        ComputePassEncoderPushDebugGroup,
        ComputePassEncoderSetBindGroup,
        ComputePassEncoderSetImmediates,
        ComputePassEncoderSetLabel,
        ComputePassEncoderSetPipeline,
        ComputePassEncoderSetResourceTable,
        ComputePassEncoderWriteTimestamp,
        ComputePipelineGetBindGroupLayout,
        ComputePipelineSetLabel,
        DeviceCreateBindGroup,
        DeviceCreateBindGroupLayout,
        DeviceCreateBuffer,
        DeviceCreateCommandEncoder,
        DeviceCreateComputePipeline,
        DeviceCreateComputePipelineAsync,
        DeviceCreateErrorBuffer,
        DeviceCreateErrorComputePipeline,
        DeviceCreateErrorExternalTexture,
        DeviceCreateErrorRenderPipeline,
        DeviceCreateErrorShaderModule,
        DeviceCreateErrorTexture,
        DeviceCreateExternalTexture,
        DeviceCreatePipelineLayout,
        DeviceCreateQuerySet,
        DeviceCreateRenderBundleEncoder,
        DeviceCreateRenderPipeline,
        DeviceCreateRenderPipelineAsync,
        DeviceCreateResourceTable,
        DeviceCreateSampler,
        DeviceCreateShaderModule,
        DeviceCreateTexture,
        DeviceDestroy,
        DeviceForceLoss,
        DeviceGetQueue,
        DeviceInjectError,
        DevicePopErrorScope,
        DevicePushErrorScope,
        DeviceSetLabel,
        DeviceTick,
        DeviceValidateTextureDescriptor,
        ExternalTextureDestroy,
        ExternalTextureExpire,
        ExternalTextureRefresh,
        ExternalTextureSetLabel,
        InstanceProcessEvents,
        InstanceRequestAdapter,
        PipelineLayoutSetLabel,
        QuerySetDestroy,
        QuerySetSetLabel,
        QueueCopyExternalTextureForBrowser,
        QueueCopyTextureForBrowser,
        QueueOnSubmittedWorkDone,
        QueueSetLabel,
        QueueSubmit,
        QueueWriteBuffer,
        QueueWriteBufferXl,
        QueueWriteTexture,
        QueueWriteTextureXl,
        RenderBundleEncoderDraw,
        RenderBundleEncoderDrawIndexed,
        RenderBundleEncoderDrawIndexedIndirect,
        RenderBundleEncoderDrawIndirect,
        RenderBundleEncoderFinish,
        RenderBundleEncoderInsertDebugMarker,
        RenderBundleEncoderPopDebugGroup,
        RenderBundleEncoderPushDebugGroup,
        RenderBundleEncoderSetBindGroup,
        RenderBundleEncoderSetImmediates,
        RenderBundleEncoderSetIndexBuffer,
        RenderBundleEncoderSetLabel,
        RenderBundleEncoderSetPipeline,
        RenderBundleEncoderSetVertexBuffer,
        RenderBundleSetLabel,
        RenderPassEncoderBeginOcclusionQuery,
        RenderPassEncoderDraw,
        RenderPassEncoderDrawIndexed,
        RenderPassEncoderDrawIndexedIndirect,
        RenderPassEncoderDrawIndirect,
        RenderPassEncoderEnd,
        RenderPassEncoderEndOcclusionQuery,
        RenderPassEncoderExecuteBundles,
        RenderPassEncoderInsertDebugMarker,
        RenderPassEncoderMultiDrawIndexedIndirect,
        RenderPassEncoderMultiDrawIndirect,
        RenderPassEncoderPixelLocalStorageBarrier,
        RenderPassEncoderPopDebugGroup,
        RenderPassEncoderPushDebugGroup,
        RenderPassEncoderSetBindGroup,
        RenderPassEncoderSetBlendConstant,
        RenderPassEncoderSetImmediates,
        RenderPassEncoderSetIndexBuffer,
        RenderPassEncoderSetLabel,
        RenderPassEncoderSetPipeline,
        RenderPassEncoderSetResourceTable,
        RenderPassEncoderSetScissorRect,
        RenderPassEncoderSetStencilReference,
        RenderPassEncoderSetVertexBuffer,
        RenderPassEncoderSetViewport,
        RenderPassEncoderWriteTimestamp,
        RenderPipelineGetBindGroupLayout,
        RenderPipelineSetLabel,
        ResourceTableDestroy,
        ResourceTableRemove,
        ResourceTableSetLabel,
        ResourceTableUpdate,
        SamplerSetLabel,
        ShaderModuleGetCompilationInfo,
        ShaderModuleSetLabel,
        SurfaceConfigure,
        SurfaceGetCurrentTexture,
        SurfacePresent,
        SurfaceSetLabel,
        SurfaceUnconfigure,
        TexelBufferViewSetLabel,
        TextureCreateErrorView,
        TextureCreateView,
        TextureDestroy,
        TextureSetLabel,
        TextureViewSetLabel,
        UnregisterObject,

        // Enums used on the return wire format.
        ReturnAdapterRequestDeviceCallback,
        ReturnBufferMapAsyncCallback,
        ReturnDeviceCreateComputePipelineAsyncCallback,
        ReturnDeviceCreateRenderPipelineAsyncCallback,
        ReturnDeviceLoggingCallback,
        ReturnDeviceLostCallback,
        ReturnDevicePopErrorScopeCallback,
        ReturnDeviceUncapturedErrorCallback,
        ReturnInstanceRequestAdapterCallback,
        ReturnQueueWorkDoneCallback,
        ReturnShaderModuleGetCompilationInfoCallback,
    };

    struct CmdHeader {
        WireCmd commandId{};

        CmdHeader() = default;
        CmdHeader(const CmdHeader&) = default;
        CmdHeader(CmdHeader&&) = default;

        // Volatile constructors and assignment operators are never expected to be called at
        // runtime when handling wire commands. They exist solely to satisfy C++20 iterator and
        // std::span requirements (e.g. std::indirectly_readable) when constructing views over
        // volatile shared memory buffers.
        [[noreturn]] CmdHeader(const volatile CmdHeader& other) {
            DAWN_UNREACHABLE();
        }
        [[noreturn]] CmdHeader(volatile CmdHeader&& other) {
            DAWN_UNREACHABLE();
        }
        [[noreturn]] CmdHeader(const volatile CmdHeader&& other) {
            DAWN_UNREACHABLE();
        }
        [[noreturn]] CmdHeader& operator=(const volatile CmdHeader& other) {
            DAWN_UNREACHABLE();
        }
    };


    struct ChunkedCommandCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    uint64_t id{};
    size_t size{};
    dawn::ityp::span<size_t, volatile std::byte const, dawn::detail::DynamicExtent<size_t>> chunkData{};
};


    struct AdapterRequestDeviceCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId adapterId{};
    ObjectId instanceId{};
    Future future{};
    ObjectHandle deviceObjectHandle{};
    Future deviceLostFuture{};
    DeviceDescriptor const * descriptor{};
};

    struct BindGroupLayoutSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::BindGroupLayout* self{};
    StringView label{};
};

    struct BindGroupSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::BindGroup* self{};
    StringView label{};
};

    struct BufferCreateTexelViewCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Buffer* self{};
    TexelBufferViewDescriptor const * descriptor{};
    ObjectHandle result{};
};

    struct BufferDestroyCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Buffer* self{};
};

    struct BufferMapAsyncCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId bufferId{};
    ObjectId instanceId{};
    Future future{};
    wgpu::MapMode mode{};
    size_t offset{};
    size_t size{};
};

    struct BufferSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Buffer* self{};
    StringView label{};
};

    struct BufferUnmapCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Buffer* self{};
};

    struct BufferUpdateMappedDataCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId bufferId{};
    dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>> dataUpdateInfo{};
    size_t offset{};
    size_t size{};
};

    struct CommandBufferSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::CommandBuffer* self{};
    StringView label{};
};

    struct CommandEncoderBeginComputePassCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::CommandEncoder* self{};
    ComputePassDescriptor const * descriptor{};
    ObjectHandle result{};
};

    struct CommandEncoderBeginRenderPassCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::CommandEncoder* self{};
    RenderPassDescriptor const * descriptor{};
    ObjectHandle result{};
};

    struct CommandEncoderClearBufferCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::CommandEncoder* self{};
    detail::Buffer* buffer{};
    uint64_t offset{};
    uint64_t size{};
};

    struct CommandEncoderCopyBufferToBufferCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::CommandEncoder* self{};
    detail::Buffer* source{};
    uint64_t sourceOffset{};
    detail::Buffer* destination{};
    uint64_t destinationOffset{};
    uint64_t size{};
};

    struct CommandEncoderCopyBufferToTextureCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::CommandEncoder* self{};
    TexelCopyBufferInfo const * source{};
    TexelCopyTextureInfo const * destination{};
    Extent3D const * copySize{};
};

    struct CommandEncoderCopyTextureToBufferCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::CommandEncoder* self{};
    TexelCopyTextureInfo const * source{};
    TexelCopyBufferInfo const * destination{};
    Extent3D const * copySize{};
};

    struct CommandEncoderCopyTextureToTextureCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::CommandEncoder* self{};
    TexelCopyTextureInfo const * source{};
    TexelCopyTextureInfo const * destination{};
    Extent3D const * copySize{};
};

    struct CommandEncoderFinishCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::CommandEncoder* self{};
    CommandBufferDescriptor const * descriptor{};
    ObjectHandle result{};
};

    struct CommandEncoderInjectValidationErrorCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::CommandEncoder* self{};
    StringView message{};
};

    struct CommandEncoderInsertDebugMarkerCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::CommandEncoder* self{};
    StringView markerLabel{};
};

    struct CommandEncoderPopDebugGroupCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::CommandEncoder* self{};
};

    struct CommandEncoderPushDebugGroupCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::CommandEncoder* self{};
    StringView groupLabel{};
};

    struct CommandEncoderResolveQuerySetCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::CommandEncoder* self{};
    detail::QuerySet* querySet{};
    uint32_t firstQuery{};
    uint32_t queryCount{};
    detail::Buffer* destination{};
    uint64_t destinationOffset{};
};

    struct CommandEncoderSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::CommandEncoder* self{};
    StringView label{};
};

    struct CommandEncoderWriteBufferCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::CommandEncoder* self{};
    detail::Buffer* buffer{};
    uint64_t bufferOffset{};
    dawn::ityp::span<size_t, volatile std::byte const, dawn::detail::DynamicExtent<size_t>> data{};
};

    struct CommandEncoderWriteTimestampCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::CommandEncoder* self{};
    detail::QuerySet* querySet{};
    uint32_t queryIndex{};
};

    struct ComputePassEncoderDispatchWorkgroupsCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ComputePassEncoder* self{};
    uint32_t workgroupCountX{};
    uint32_t workgroupCountY{};
    uint32_t workgroupCountZ{};
};

    struct ComputePassEncoderDispatchWorkgroupsIndirectCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ComputePassEncoder* self{};
    detail::Buffer* indirectBuffer{};
    uint64_t indirectOffset{};
};

    struct ComputePassEncoderEndCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ComputePassEncoder* self{};
};

    struct ComputePassEncoderInsertDebugMarkerCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ComputePassEncoder* self{};
    StringView markerLabel{};
};

    struct ComputePassEncoderPopDebugGroupCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ComputePassEncoder* self{};
};

    struct ComputePassEncoderPushDebugGroupCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ComputePassEncoder* self{};
    StringView groupLabel{};
};

    struct ComputePassEncoderSetBindGroupCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ComputePassEncoder* self{};
    uint32_t groupIndex{};
    detail::BindGroup* group{};
    dawn::ityp::span<size_t, uint32_t const, dawn::detail::DynamicExtent<size_t>> dynamicOffsets{};
};

    struct ComputePassEncoderSetImmediatesCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ComputePassEncoder* self{};
    uint32_t offset{};
    dawn::ityp::span<size_t, volatile std::byte const, dawn::detail::DynamicExtent<size_t>> data{};
};

    struct ComputePassEncoderSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ComputePassEncoder* self{};
    StringView label{};
};

    struct ComputePassEncoderSetPipelineCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ComputePassEncoder* self{};
    detail::ComputePipeline* pipeline{};
};

    struct ComputePassEncoderSetResourceTableCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ComputePassEncoder* self{};
    detail::ResourceTable* table{};
};

    struct ComputePassEncoderWriteTimestampCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ComputePassEncoder* self{};
    detail::QuerySet* querySet{};
    uint32_t queryIndex{};
};

    struct ComputePipelineGetBindGroupLayoutCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ComputePipeline* self{};
    uint32_t groupIndex{};
    ObjectHandle result{};
};

    struct ComputePipelineSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ComputePipeline* self{};
    StringView label{};
};

    struct DeviceCreateBindGroupCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    BindGroupDescriptor const * descriptor{};
    ObjectHandle result{};
};

    struct DeviceCreateBindGroupLayoutCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    BindGroupLayoutDescriptor const * descriptor{};
    ObjectHandle result{};
};

    struct DeviceCreateBufferCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId deviceId{};
    BufferDescriptor const * descriptor{};
    ObjectHandle result{};
    dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>> memoryHandleCreateInfo{};
};

    struct DeviceCreateCommandEncoderCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    CommandEncoderDescriptor const * descriptor{};
    ObjectHandle result{};
};

    struct DeviceCreateComputePipelineCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    ComputePipelineDescriptor const * descriptor{};
    ObjectHandle result{};
};

    struct DeviceCreateComputePipelineAsyncCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId deviceId{};
    ObjectId instanceId{};
    Future future{};
    ObjectHandle pipelineObjectHandle{};
    ComputePipelineDescriptor const * descriptor{};
};

    struct DeviceCreateErrorBufferCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    BufferDescriptor const * descriptor{};
    ObjectHandle result{};
};

    struct DeviceCreateErrorComputePipelineCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    StringView label{};
    ObjectHandle result{};
};

    struct DeviceCreateErrorExternalTextureCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    ObjectHandle result{};
};

    struct DeviceCreateErrorRenderPipelineCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    StringView label{};
    ObjectHandle result{};
};

    struct DeviceCreateErrorShaderModuleCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    ShaderModuleDescriptor const * descriptor{};
    StringView errorMessage{};
    ObjectHandle result{};
};

    struct DeviceCreateErrorTextureCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    TextureDescriptor const * descriptor{};
    ObjectHandle result{};
};

    struct DeviceCreateExternalTextureCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    ExternalTextureDescriptor const * externalTextureDescriptor{};
    ObjectHandle result{};
};

    struct DeviceCreatePipelineLayoutCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    PipelineLayoutDescriptor const * descriptor{};
    ObjectHandle result{};
};

    struct DeviceCreateQuerySetCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    QuerySetDescriptor const * descriptor{};
    ObjectHandle result{};
};

    struct DeviceCreateRenderBundleEncoderCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    RenderBundleEncoderDescriptor const * descriptor{};
    ObjectHandle result{};
};

    struct DeviceCreateRenderPipelineCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    RenderPipelineDescriptor const * descriptor{};
    ObjectHandle result{};
};

    struct DeviceCreateRenderPipelineAsyncCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId deviceId{};
    ObjectId instanceId{};
    Future future{};
    ObjectHandle pipelineObjectHandle{};
    RenderPipelineDescriptor const * descriptor{};
};

    struct DeviceCreateResourceTableCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    ResourceTableDescriptor const * descriptor{};
    ObjectHandle result{};
};

    struct DeviceCreateSamplerCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    SamplerDescriptor const * descriptor{};
    ObjectHandle result{};
};

    struct DeviceCreateShaderModuleCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    ShaderModuleDescriptor const * descriptor{};
    ObjectHandle result{};
};

    struct DeviceCreateTextureCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    TextureDescriptor const * descriptor{};
    ObjectHandle result{};
};

    struct DeviceDestroyCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
};

    struct DeviceForceLossCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    wgpu::DeviceLostReason type{};
    StringView message{};
};

    struct DeviceGetQueueCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    ObjectHandle result{};
};

    struct DeviceInjectErrorCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    wgpu::ErrorType type{};
    StringView message{};
};

    struct DevicePopErrorScopeCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId deviceId{};
    ObjectId instanceId{};
    Future future{};
};

    struct DevicePushErrorScopeCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    wgpu::ErrorFilter filter{};
};

    struct DeviceSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    StringView label{};
};

    struct DeviceTickCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
};

    struct DeviceValidateTextureDescriptorCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Device* self{};
    TextureDescriptor const * descriptor{};
};

    struct ExternalTextureDestroyCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ExternalTexture* self{};
};

    struct ExternalTextureExpireCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ExternalTexture* self{};
};

    struct ExternalTextureRefreshCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ExternalTexture* self{};
};

    struct ExternalTextureSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ExternalTexture* self{};
    StringView label{};
};

    struct InstanceProcessEventsCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Instance* self{};
};

    struct InstanceRequestAdapterCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId instanceId{};
    Future future{};
    ObjectHandle adapterObjectHandle{};
    RequestAdapterOptions const * options{};
};

    struct PipelineLayoutSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::PipelineLayout* self{};
    StringView label{};
};

    struct QuerySetDestroyCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::QuerySet* self{};
};

    struct QuerySetSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::QuerySet* self{};
    StringView label{};
};

    struct QueueCopyExternalTextureForBrowserCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Queue* self{};
    ImageCopyExternalTexture const * source{};
    TexelCopyTextureInfo const * destination{};
    Extent3D const * copySize{};
    CopyTextureForBrowserOptions const * options{};
};

    struct QueueCopyTextureForBrowserCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Queue* self{};
    TexelCopyTextureInfo const * source{};
    TexelCopyTextureInfo const * destination{};
    Extent3D const * copySize{};
    CopyTextureForBrowserOptions const * options{};
};

    struct QueueOnSubmittedWorkDoneCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId queueId{};
    ObjectId instanceId{};
    Future future{};
};

    struct QueueSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Queue* self{};
    StringView label{};
};

    struct QueueSubmitCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Queue* self{};
    dawn::ityp::span<size_t, detail::CommandBuffer* const, dawn::detail::DynamicExtent<size_t>> commands{};
};

    struct QueueWriteBufferCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId queueId{};
    ObjectId bufferId{};
    uint64_t bufferOffset{};
    dawn::ityp::span<size_t, volatile std::byte const, dawn::detail::DynamicExtent<size_t>> data{};
};

    struct QueueWriteBufferXlCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId queueId{};
    ObjectId bufferId{};
    uint64_t bufferOffset{};
    size_t size{};
    dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>> memoryHandleCreateInfo{};
    dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>> memoryDataUpdateInfo{};
};

    struct QueueWriteTextureCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId queueId{};
    TexelCopyTextureInfo const * destination{};
    dawn::ityp::span<size_t, volatile std::byte const, dawn::detail::DynamicExtent<size_t>> data{};
    TexelCopyBufferLayout const * dataLayout{};
    Extent3D const * writeSize{};
};

    struct QueueWriteTextureXlCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId queueId{};
    TexelCopyTextureInfo const * destination{};
    size_t dataSize{};
    TexelCopyBufferLayout const * dataLayout{};
    Extent3D const * writeSize{};
    dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>> memoryHandleCreateInfo{};
    dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>> memoryDataUpdateInfo{};
};

    struct RenderBundleEncoderDrawCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderBundleEncoder* self{};
    uint32_t vertexCount{};
    uint32_t instanceCount{};
    uint32_t firstVertex{};
    uint32_t firstInstance{};
};

    struct RenderBundleEncoderDrawIndexedCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderBundleEncoder* self{};
    uint32_t indexCount{};
    uint32_t instanceCount{};
    uint32_t firstIndex{};
    int32_t baseVertex{};
    uint32_t firstInstance{};
};

    struct RenderBundleEncoderDrawIndexedIndirectCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderBundleEncoder* self{};
    detail::Buffer* indirectBuffer{};
    uint64_t indirectOffset{};
};

    struct RenderBundleEncoderDrawIndirectCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderBundleEncoder* self{};
    detail::Buffer* indirectBuffer{};
    uint64_t indirectOffset{};
};

    struct RenderBundleEncoderFinishCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderBundleEncoder* self{};
    RenderBundleDescriptor const * descriptor{};
    ObjectHandle result{};
};

    struct RenderBundleEncoderInsertDebugMarkerCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderBundleEncoder* self{};
    StringView markerLabel{};
};

    struct RenderBundleEncoderPopDebugGroupCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderBundleEncoder* self{};
};

    struct RenderBundleEncoderPushDebugGroupCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderBundleEncoder* self{};
    StringView groupLabel{};
};

    struct RenderBundleEncoderSetBindGroupCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderBundleEncoder* self{};
    uint32_t groupIndex{};
    detail::BindGroup* group{};
    dawn::ityp::span<size_t, uint32_t const, dawn::detail::DynamicExtent<size_t>> dynamicOffsets{};
};

    struct RenderBundleEncoderSetImmediatesCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderBundleEncoder* self{};
    uint32_t offset{};
    dawn::ityp::span<size_t, volatile std::byte const, dawn::detail::DynamicExtent<size_t>> data{};
};

    struct RenderBundleEncoderSetIndexBufferCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderBundleEncoder* self{};
    detail::Buffer* buffer{};
    wgpu::IndexFormat format{};
    uint64_t offset{};
    uint64_t size{};
};

    struct RenderBundleEncoderSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderBundleEncoder* self{};
    StringView label{};
};

    struct RenderBundleEncoderSetPipelineCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderBundleEncoder* self{};
    detail::RenderPipeline* pipeline{};
};

    struct RenderBundleEncoderSetVertexBufferCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderBundleEncoder* self{};
    uint32_t slot{};
    detail::Buffer* buffer{};
    uint64_t offset{};
    uint64_t size{};
};

    struct RenderBundleSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderBundle* self{};
    StringView label{};
};

    struct RenderPassEncoderBeginOcclusionQueryCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
    uint32_t queryIndex{};
};

    struct RenderPassEncoderDrawCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
    uint32_t vertexCount{};
    uint32_t instanceCount{};
    uint32_t firstVertex{};
    uint32_t firstInstance{};
};

    struct RenderPassEncoderDrawIndexedCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
    uint32_t indexCount{};
    uint32_t instanceCount{};
    uint32_t firstIndex{};
    int32_t baseVertex{};
    uint32_t firstInstance{};
};

    struct RenderPassEncoderDrawIndexedIndirectCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
    detail::Buffer* indirectBuffer{};
    uint64_t indirectOffset{};
};

    struct RenderPassEncoderDrawIndirectCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
    detail::Buffer* indirectBuffer{};
    uint64_t indirectOffset{};
};

    struct RenderPassEncoderEndCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
};

    struct RenderPassEncoderEndOcclusionQueryCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
};

    struct RenderPassEncoderExecuteBundlesCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
    dawn::ityp::span<size_t, detail::RenderBundle* const, dawn::detail::DynamicExtent<size_t>> bundles{};
};

    struct RenderPassEncoderInsertDebugMarkerCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
    StringView markerLabel{};
};

    struct RenderPassEncoderMultiDrawIndexedIndirectCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
    detail::Buffer* indirectBuffer{};
    uint64_t indirectOffset{};
    uint32_t maxDrawCount{};
    detail::Buffer* drawCountBuffer{};
    uint64_t drawCountBufferOffset{};
};

    struct RenderPassEncoderMultiDrawIndirectCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
    detail::Buffer* indirectBuffer{};
    uint64_t indirectOffset{};
    uint32_t maxDrawCount{};
    detail::Buffer* drawCountBuffer{};
    uint64_t drawCountBufferOffset{};
};

    struct RenderPassEncoderPixelLocalStorageBarrierCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
};

    struct RenderPassEncoderPopDebugGroupCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
};

    struct RenderPassEncoderPushDebugGroupCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
    StringView groupLabel{};
};

    struct RenderPassEncoderSetBindGroupCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
    uint32_t groupIndex{};
    detail::BindGroup* group{};
    dawn::ityp::span<size_t, uint32_t const, dawn::detail::DynamicExtent<size_t>> dynamicOffsets{};
};

    struct RenderPassEncoderSetBlendConstantCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
    Color const * color{};
};

    struct RenderPassEncoderSetImmediatesCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
    uint32_t offset{};
    dawn::ityp::span<size_t, volatile std::byte const, dawn::detail::DynamicExtent<size_t>> data{};
};

    struct RenderPassEncoderSetIndexBufferCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
    detail::Buffer* buffer{};
    wgpu::IndexFormat format{};
    uint64_t offset{};
    uint64_t size{};
};

    struct RenderPassEncoderSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
    StringView label{};
};

    struct RenderPassEncoderSetPipelineCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
    detail::RenderPipeline* pipeline{};
};

    struct RenderPassEncoderSetResourceTableCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
    detail::ResourceTable* table{};
};

    struct RenderPassEncoderSetScissorRectCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
    uint32_t x{};
    uint32_t y{};
    uint32_t width{};
    uint32_t height{};
};

    struct RenderPassEncoderSetStencilReferenceCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
    uint32_t reference{};
};

    struct RenderPassEncoderSetVertexBufferCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
    uint32_t slot{};
    detail::Buffer* buffer{};
    uint64_t offset{};
    uint64_t size{};
};

    struct RenderPassEncoderSetViewportCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
    float x{};
    float y{};
    float width{};
    float height{};
    float minDepth{};
    float maxDepth{};
};

    struct RenderPassEncoderWriteTimestampCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPassEncoder* self{};
    detail::QuerySet* querySet{};
    uint32_t queryIndex{};
};

    struct RenderPipelineGetBindGroupLayoutCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPipeline* self{};
    uint32_t groupIndex{};
    ObjectHandle result{};
};

    struct RenderPipelineSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::RenderPipeline* self{};
    StringView label{};
};

    struct ResourceTableDestroyCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ResourceTable* self{};
};

    struct ResourceTableRemoveCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ResourceTable* self{};
    uint32_t slot{};
};

    struct ResourceTableSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ResourceTable* self{};
    StringView label{};
};

    struct ResourceTableUpdateCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ResourceTable* self{};
    uint32_t slot{};
    BindingResource const * resource{};
};

    struct SamplerSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Sampler* self{};
    StringView label{};
};

    struct ShaderModuleGetCompilationInfoCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId shaderModuleId{};
    ObjectId instanceId{};
    Future future{};
};

    struct ShaderModuleSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::ShaderModule* self{};
    StringView label{};
};

    struct SurfaceConfigureCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Surface* self{};
    SurfaceConfiguration const * config{};
};

    struct SurfaceGetCurrentTextureCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId surfaceId{};
    ObjectId configuredDeviceId{};
    ObjectHandle textureHandle{};
};

    struct SurfacePresentCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Surface* self{};
};

    struct SurfaceSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Surface* self{};
    StringView label{};
};

    struct SurfaceUnconfigureCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Surface* self{};
};

    struct TexelBufferViewSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::TexelBufferView* self{};
    StringView label{};
};

    struct TextureCreateErrorViewCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Texture* self{};
    TextureViewDescriptor const * descriptor{};
    ObjectHandle result{};
};

    struct TextureCreateViewCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Texture* self{};
    TextureViewDescriptor const * descriptor{};
    ObjectHandle result{};
};

    struct TextureDestroyCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Texture* self{};
};

    struct TextureSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::Texture* self{};
    StringView label{};
};

    struct TextureViewSetLabelCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);

    ObjectId selfId = 0;

    detail::TextureView* self{};
    StringView label{};
};

    struct UnregisterObjectCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectType objectType{};
    ObjectId objectId{};
};


    struct ReturnAdapterRequestDeviceCallbackCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId instanceId{};
    Future future{};
    wgpu::RequestDeviceStatus status{};
    StringView message{};
    Limits const * limits{};
    dawn::ityp::span<size_t, wgpu::FeatureName const, dawn::detail::DynamicExtent<size_t>> features{};
};

    struct ReturnBufferMapAsyncCallbackCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId instanceId{};
    Future future{};
    wgpu::MapAsyncStatus status{};
    StringView message{};
    dawn::ityp::span<size_t, std::byte const, dawn::detail::DynamicExtent<size_t>> readDataUpdateInfo{};
};

    struct ReturnDeviceCreateComputePipelineAsyncCallbackCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId instanceId{};
    Future future{};
    wgpu::CreatePipelineAsyncStatus status{};
    StringView message{};
};

    struct ReturnDeviceCreateRenderPipelineAsyncCallbackCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId instanceId{};
    Future future{};
    wgpu::CreatePipelineAsyncStatus status{};
    StringView message{};
};

    struct ReturnDeviceLoggingCallbackCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectHandle device{};
    wgpu::LoggingType type{};
    StringView message{};
};

    struct ReturnDeviceLostCallbackCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId instanceId{};
    Future future{};
    wgpu::DeviceLostReason reason{};
    StringView message{};
};

    struct ReturnDevicePopErrorScopeCallbackCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId instanceId{};
    Future future{};
    wgpu::PopErrorScopeStatus status{};
    wgpu::ErrorType type{};
    StringView message{};
};

    struct ReturnDeviceUncapturedErrorCallbackCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectHandle device{};
    wgpu::ErrorType type{};
    StringView message{};
};

    struct ReturnInstanceRequestAdapterCallbackCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId instanceId{};
    Future future{};
    wgpu::RequestAdapterStatus status{};
    StringView message{};
    AdapterInfo const * info{};
    Limits const * limits{};
    dawn::ityp::span<size_t, wgpu::FeatureName const, dawn::detail::DynamicExtent<size_t>> features{};
};

    struct ReturnQueueWorkDoneCallbackCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId instanceId{};
    Future future{};
    wgpu::QueueWorkDoneStatus status{};
    StringView message{};
};

    struct ReturnShaderModuleGetCompilationInfoCallbackCmd {
    size_t GetRequiredSize() const;

    WireResult Serialize(SerializeBuffer* serializeBuffer, const ObjectIdProvider& objectIdProvider) const;
    // Override which produces a FatalError if any object is used.
    WireResult Serialize(SerializeBuffer* serializeBuffer) const;

    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator, const ObjectIdResolver& resolver);
    // Override which produces a FatalError if any object is used.
    WireResult Deserialize(DeserializeBuffer* deserializeBuffer, DeserializeAllocator* allocator);


    ObjectId instanceId{};
    Future future{};
    wgpu::CompilationInfoRequestStatus status{};
    CompilationInfo const * info{};
};


}  // namespace dawn::wire

#endif // DAWNWIRE_WIRECMD_AUTOGEN_H_
