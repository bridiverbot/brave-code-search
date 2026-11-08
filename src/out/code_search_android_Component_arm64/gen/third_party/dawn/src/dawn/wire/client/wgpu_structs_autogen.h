
#ifndef DAWNWIRE_CLIENT_WGPU_STRUCTS_AUTOGEN_H_
#define DAWNWIRE_CLIENT_WGPU_STRUCTS_AUTOGEN_H_

#include "absl/strings/string_view.h"
#include "dawn/webgpu_cpp.h"
#include "src/utils/span.h"

#include <cmath>
#include <optional>
#include <string_view>

namespace dawn::wire::client {

class Adapter;
struct BindGroup;
struct BindGroupLayout;
class Buffer;
struct CommandBuffer;
struct CommandEncoder;
struct ComputePipeline;
class Device;
struct ExternalTexture;
class Instance;
struct PipelineLayout;
class QuerySet;
class Queue;
struct RenderBundle;
struct RenderPipeline;
class ResourceTable;
struct Sampler;
class ShaderModule;
class Surface;
struct TexelBufferView;
class Texture;
struct TextureView;
struct ComputePassEncoder;
struct RenderBundleEncoder;
struct RenderPassEncoder;

namespace detail {
using Adapter = Adapter;
using BindGroup = BindGroup;
using BindGroupLayout = BindGroupLayout;
using Buffer = Buffer;
using CommandBuffer = CommandBuffer;
using CommandEncoder = CommandEncoder;
using ComputePipeline = ComputePipeline;
using Device = Device;
using ExternalTexture = ExternalTexture;
using Instance = Instance;
using PipelineLayout = PipelineLayout;
using QuerySet = QuerySet;
using Queue = Queue;
using RenderBundle = RenderBundle;
using RenderPipeline = RenderPipeline;
using ResourceTable = ResourceTable;
using Sampler = Sampler;
using ShaderModule = ShaderModule;
using Surface = Surface;
using TexelBufferView = TexelBufferView;
using Texture = Texture;
using TextureView = TextureView;
using ComputePassEncoder = ComputePassEncoder;
using RenderBundleEncoder = RenderBundleEncoder;
using RenderPassEncoder = RenderPassEncoder;
}

using wgpu::ChainedStruct;
using wgpu::ChainedStructOut;

struct StringView {
    char const * data = nullptr;
    size_t length = WGPU_STRLEN;

    inline constexpr StringView() noexcept = default;
    explicit(false) inline constexpr StringView(const std::string_view& sv) noexcept {
        this->data = sv.data();
        this->length = sv.length();
    }
    explicit(false) inline constexpr StringView(const char* s) {
        this->data = s;
        this->length = WGPU_STRLEN;  // use strlen
    }
    explicit(false) inline constexpr StringView(WGPUStringView s) {
        this->data = s.data;
        this->length = s.length;
    }
    inline constexpr StringView(const char* data, size_t length) {
        this->data = data;
        this->length = length;
    }
    explicit(false) inline constexpr StringView(std::nullptr_t) {
        this->data = nullptr;
        this->length = WGPU_STRLEN;
    }
    explicit(false) inline constexpr StringView(std::nullopt_t) {
        this->data = nullptr;
        this->length = WGPU_STRLEN;
    }

    bool IsUndefined() const {
        return this->data == nullptr && this->length == wgpu::kStrlen;
    }

    // NOLINTNEXTLINE(google-explicit-constructor)
    operator std::string_view() const {
        if (this->length == wgpu::kStrlen) {
            if (IsUndefined()) {
                return {};
            }
            return {this->data};
        }
        return {this->data, this->length};
    }
    #ifndef ABSL_USES_STD_STRING_VIEW
    // NOLINTNEXTLINE(google-explicit-constructor)
    operator absl::string_view() const {
        if (this->length == wgpu::kStrlen) {
            if (IsUndefined()) {
                return {};
            }
            return {this->data};
        }
        return {this->data, this->length};
    }
    #endif

    template <typename View,
              typename = std::enable_if_t<std::is_constructible_v<View, const char*, size_t>>>
    explicit operator View() const {
        if (this->length == wgpu::kStrlen) {
            if (IsUndefined()) {
                return {};
            }
            return {this->data};
        }
        return {this->data, this->length};
    }

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const StringView& rhs) const;
};

// NOLINTBEGIN(bugprone-invalid-enum-default-initialization)

struct AdapterPropertiesD3D : ChainedStructOut {
    AdapterPropertiesD3D() {
        sType = wgpu::SType::AdapterPropertiesD3D;
    }

    alignas(wgpu::AdapterPropertiesD3D::kFirstMemberAlignment)
    uint32_t shaderModel = {};
    uint32_t adapterLUIDLowPart = {};
    uint32_t adapterLUIDHighPart = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const AdapterPropertiesD3D& rhs) const;
};

struct AdapterPropertiesVk : ChainedStructOut {
    AdapterPropertiesVk() {
        sType = wgpu::SType::AdapterPropertiesVk;
    }

    alignas(wgpu::AdapterPropertiesVk::kFirstMemberAlignment)
    uint32_t driverVersion = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const AdapterPropertiesVk& rhs) const;
};

struct AdapterPropertiesWGPU : ChainedStructOut {
    AdapterPropertiesWGPU() {
        sType = wgpu::SType::AdapterPropertiesWGPU;
    }

    alignas(wgpu::AdapterPropertiesWGPU::kFirstMemberAlignment)
    wgpu::BackendType backendType = wgpu::BackendType::Undefined;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const AdapterPropertiesWGPU& rhs) const;
};

struct BindingResource {
    ChainedStruct const * nextInChain = nullptr;

    detail::Buffer* buffer = {};
    uint64_t offset = 0;
    uint64_t size = wgpu::kWholeSize;
    detail::Sampler* sampler = {};
    detail::TextureView* textureView = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const BindingResource& rhs) const;
};

struct BlendComponent {

    wgpu::BlendOperation operation = wgpu::BlendOperation::Add;
    wgpu::BlendFactor srcFactor = wgpu::BlendFactor::One;
    wgpu::BlendFactor dstFactor = wgpu::BlendFactor::Zero;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const BlendComponent& rhs) const;
};

struct BufferBindingLayout {
    ChainedStruct const * nextInChain = nullptr;

    wgpu::BufferBindingType type = wgpu::BufferBindingType::Uniform;
    wgpu::Bool hasDynamicOffset = false;
    uint64_t minBindingSize = 0;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const BufferBindingLayout& rhs) const;
};

struct BufferHostMappedPointer : ChainedStruct {
    BufferHostMappedPointer() {
        sType = wgpu::SType::BufferHostMappedPointer;
    }

    alignas(wgpu::BufferHostMappedPointer::kFirstMemberAlignment)
    void * pointer = {};
    WGPUCallback disposeCallback = {};
    void * userdata = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const BufferHostMappedPointer& rhs) const;
};

struct Color {

    double r = {};
    double g = {};
    double b = {};
    double a = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const Color& rhs) const;
};

struct ColorSpaceDawn {
    ChainedStruct const * nextInChain = nullptr;

    wgpu::ColorSpacePrimariesDawn primaries = {};
    wgpu::ColorSpaceTransferDawn transfer = wgpu::ColorSpaceTransferDawn::Identity;
    wgpu::ColorSpaceYCbCrRangeDawn yCbCrRange = wgpu::ColorSpaceYCbCrRangeDawn::Identity;
    wgpu::ColorSpaceYCbCrMatrixDawn yCbCrMatrix = wgpu::ColorSpaceYCbCrMatrixDawn::Identity;
    float hdrReferenceWhiteLuminance = 0;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const ColorSpaceDawn& rhs) const;
};

struct ColorTargetStateExpandResolveTextureDawn : ChainedStruct {
    ColorTargetStateExpandResolveTextureDawn() {
        sType = wgpu::SType::ColorTargetStateExpandResolveTextureDawn;
    }

    alignas(wgpu::ColorTargetStateExpandResolveTextureDawn::kFirstMemberAlignment)
    wgpu::Bool enabled = false;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const ColorTargetStateExpandResolveTextureDawn& rhs) const;
};

struct CommandBufferDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const CommandBufferDescriptor& rhs) const;
};

struct CompatibilityModeLimits : ChainedStructOut {
    CompatibilityModeLimits() {
        sType = wgpu::SType::CompatibilityModeLimits;
    }

    alignas(wgpu::CompatibilityModeLimits::kFirstMemberAlignment)
    uint32_t maxStorageBuffersInVertexStage = wgpu::kLimitU32Undefined;
    uint32_t maxStorageTexturesInVertexStage = wgpu::kLimitU32Undefined;
    uint32_t maxStorageBuffersInFragmentStage = wgpu::kLimitU32Undefined;
    uint32_t maxStorageTexturesInFragmentStage = wgpu::kLimitU32Undefined;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const CompatibilityModeLimits& rhs) const;
};

struct ConstantEntry {
    ChainedStruct const * nextInChain = nullptr;

    StringView key = {};
    double value = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const ConstantEntry& rhs) const;
};

struct CopyTextureForBrowserOptions {
    ChainedStruct const * nextInChain = nullptr;

    wgpu::Bool flipY = false;
    wgpu::Bool needsColorSpaceConversion = false;
    wgpu::AlphaMode srcAlphaMode = wgpu::AlphaMode::Unpremultiplied;
    dawn::ityp::span<size_t, float const, 7> srcTransferFunctionParameters = {};
    dawn::ityp::span<size_t, float const, 9> conversionMatrix = {};
    dawn::ityp::span<size_t, float const, 7> dstTransferFunctionParameters = {};
    wgpu::AlphaMode dstAlphaMode = wgpu::AlphaMode::Unpremultiplied;
    wgpu::Bool internalUsage = false;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const CopyTextureForBrowserOptions& rhs) const;
};

struct DawnAdapterPropertiesPowerPreference : ChainedStructOut {
    DawnAdapterPropertiesPowerPreference() {
        sType = wgpu::SType::DawnAdapterPropertiesPowerPreference;
    }

    alignas(wgpu::DawnAdapterPropertiesPowerPreference::kFirstMemberAlignment)
    wgpu::PowerPreference powerPreference = wgpu::PowerPreference::Undefined;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const DawnAdapterPropertiesPowerPreference& rhs) const;
};

struct DawnBufferDescriptorErrorInfoFromWireClient : ChainedStruct {
    DawnBufferDescriptorErrorInfoFromWireClient() {
        sType = wgpu::SType::DawnBufferDescriptorErrorInfoFromWireClient;
    }

    alignas(wgpu::DawnBufferDescriptorErrorInfoFromWireClient::kFirstMemberAlignment)
    wgpu::Bool outOfMemory = false;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const DawnBufferDescriptorErrorInfoFromWireClient& rhs) const;
};

struct DawnCompilationMessageUtf16 : ChainedStruct {
    DawnCompilationMessageUtf16() {
        sType = wgpu::SType::DawnCompilationMessageUtf16;
    }

    alignas(wgpu::DawnCompilationMessageUtf16::kFirstMemberAlignment)
    uint64_t linePos = {};
    uint64_t offset = {};
    uint64_t length = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const DawnCompilationMessageUtf16& rhs) const;
};

struct DawnConsumeAdapterDescriptor : ChainedStruct {
    DawnConsumeAdapterDescriptor() {
        sType = wgpu::SType::DawnConsumeAdapterDescriptor;
    }

    alignas(wgpu::DawnConsumeAdapterDescriptor::kFirstMemberAlignment)
    wgpu::Bool consumeAdapter = false;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const DawnConsumeAdapterDescriptor& rhs) const;
};

struct DawnDeviceAllocatorControl : ChainedStruct {
    DawnDeviceAllocatorControl() {
        sType = wgpu::SType::DawnDeviceAllocatorControl;
    }

    alignas(wgpu::DawnDeviceAllocatorControl::kFirstMemberAlignment)
    size_t allocatorHeapBlockSize = 0;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const DawnDeviceAllocatorControl& rhs) const;
};

struct DawnDrmFormatProperties {

    uint64_t modifier = {};
    uint32_t modifierPlaneCount = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const DawnDrmFormatProperties& rhs) const;
};

struct DawnEncoderInternalUsageDescriptor : ChainedStruct {
    DawnEncoderInternalUsageDescriptor() {
        sType = wgpu::SType::DawnEncoderInternalUsageDescriptor;
    }

    alignas(wgpu::DawnEncoderInternalUsageDescriptor::kFirstMemberAlignment)
    wgpu::Bool useInternalUsages = false;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const DawnEncoderInternalUsageDescriptor& rhs) const;
};

struct DawnFakeBufferOOMForTesting : ChainedStruct {
    DawnFakeBufferOOMForTesting() {
        sType = wgpu::SType::DawnFakeBufferOOMForTesting;
    }

    alignas(wgpu::DawnFakeBufferOOMForTesting::kFirstMemberAlignment)
    wgpu::Bool fakeOOMAtWireClientMap = {};
    wgpu::Bool fakeOOMAtNativeMap = {};
    wgpu::Bool fakeOOMAtDevice = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const DawnFakeBufferOOMForTesting& rhs) const;
};

struct DawnFakeDeviceInitializeErrorForTesting : ChainedStruct {
    DawnFakeDeviceInitializeErrorForTesting() {
        sType = wgpu::SType::DawnFakeDeviceInitializeErrorForTesting;
    }


    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const DawnFakeDeviceInitializeErrorForTesting& rhs) const;
};

struct DawnHostMappedPointerLimits : ChainedStructOut {
    DawnHostMappedPointerLimits() {
        sType = wgpu::SType::DawnHostMappedPointerLimits;
    }

    alignas(wgpu::DawnHostMappedPointerLimits::kFirstMemberAlignment)
    uint32_t hostMappedPointerAlignment = wgpu::kLimitU32Undefined;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const DawnHostMappedPointerLimits& rhs) const;
};

struct DawnInjectedInvalidSType : ChainedStruct {
    DawnInjectedInvalidSType() {
        sType = wgpu::SType::DawnInjectedInvalidSType;
    }

    alignas(wgpu::DawnInjectedInvalidSType::kFirstMemberAlignment)
    wgpu::SType invalidSType = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const DawnInjectedInvalidSType& rhs) const;
};

struct DawnRenderPassSampleCount : ChainedStruct {
    DawnRenderPassSampleCount() {
        sType = wgpu::SType::DawnRenderPassSampleCount;
    }

    alignas(wgpu::DawnRenderPassSampleCount::kFirstMemberAlignment)
    uint32_t sampleCount = 1;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const DawnRenderPassSampleCount& rhs) const;
};

struct DawnShaderModuleSPIRVOptionsDescriptor : ChainedStruct {
    DawnShaderModuleSPIRVOptionsDescriptor() {
        sType = wgpu::SType::DawnShaderModuleSPIRVOptionsDescriptor;
    }

    alignas(wgpu::DawnShaderModuleSPIRVOptionsDescriptor::kFirstMemberAlignment)
    wgpu::Bool allowNonUniformDerivatives = false;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const DawnShaderModuleSPIRVOptionsDescriptor& rhs) const;
};

struct DawnShaderSourceSPIRV : ChainedStruct {
    DawnShaderSourceSPIRV() {
        sType = wgpu::SType::DawnShaderSourceSPIRV;
    }

    alignas(wgpu::DawnShaderSourceSPIRV::kFirstMemberAlignment)
    dawn::ityp::span<size_t, uint32_t const, dawn::detail::DynamicExtent<size_t>> code = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const DawnShaderSourceSPIRV& rhs) const;
};

struct DawnTexelCopyBufferRowAlignmentLimits : ChainedStructOut {
    DawnTexelCopyBufferRowAlignmentLimits() {
        sType = wgpu::SType::DawnTexelCopyBufferRowAlignmentLimits;
    }

    alignas(wgpu::DawnTexelCopyBufferRowAlignmentLimits::kFirstMemberAlignment)
    uint32_t minTexelCopyBufferRowAlignment = wgpu::kLimitU32Undefined;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const DawnTexelCopyBufferRowAlignmentLimits& rhs) const;
};

struct DawnTextureInternalUsageDescriptor : ChainedStruct {
    DawnTextureInternalUsageDescriptor() {
        sType = wgpu::SType::DawnTextureInternalUsageDescriptor;
    }

    alignas(wgpu::DawnTextureInternalUsageDescriptor::kFirstMemberAlignment)
    wgpu::TextureUsage internalUsage = wgpu::TextureUsage::None;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const DawnTextureInternalUsageDescriptor& rhs) const;
};

struct DawnWGSLBlocklist : ChainedStruct {
    DawnWGSLBlocklist() {
        sType = wgpu::SType::DawnWGSLBlocklist;
    }

    alignas(wgpu::DawnWGSLBlocklist::kFirstMemberAlignment)
    dawn::ityp::span<size_t, const char* const, dawn::detail::DynamicExtent<size_t>> blocklistedFeatures = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const DawnWGSLBlocklist& rhs) const;
};

struct DawnWireWGSLControl : ChainedStruct {
    DawnWireWGSLControl() {
        sType = wgpu::SType::DawnWireWGSLControl;
    }

    alignas(wgpu::DawnWireWGSLControl::kFirstMemberAlignment)
    wgpu::Bool enableExperimental = false;
    wgpu::Bool enableUnsafe = false;
    wgpu::Bool enableTesting = false;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const DawnWireWGSLControl& rhs) const;
};

struct Extent2D {

    uint32_t width = {};
    uint32_t height = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const Extent2D& rhs) const;
};

struct Extent3D {

    uint32_t width = {};
    uint32_t height = 1;
    uint32_t depthOrArrayLayers = 1;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const Extent3D& rhs) const;
};

struct ExternalTextureBindingEntry : ChainedStruct {
    ExternalTextureBindingEntry() {
        sType = wgpu::SType::ExternalTextureBindingEntry;
    }

    alignas(wgpu::ExternalTextureBindingEntry::kFirstMemberAlignment)
    detail::ExternalTexture* externalTexture = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const ExternalTextureBindingEntry& rhs) const;
};

struct ExternalTextureBindingLayout : ChainedStruct {
    ExternalTextureBindingLayout() {
        sType = wgpu::SType::ExternalTextureBindingLayout;
    }


    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const ExternalTextureBindingLayout& rhs) const;
};

struct Future {

    uint64_t id = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const Future& rhs) const;
};

struct InstanceLimits {
    ChainedStructOut * nextInChain = nullptr;

    size_t timedWaitAnyMaxCount = 0;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const InstanceLimits& rhs) const;
};

struct MemoryHeapInfo {

    wgpu::HeapProperty properties = wgpu::HeapProperty::None;
    uint64_t size = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const MemoryHeapInfo& rhs) const;
};

struct MultisampleState {
    ChainedStruct const * nextInChain = nullptr;

    uint32_t count = 1;
    uint32_t mask = 0xFFFFFFFF;
    wgpu::Bool alphaToCoverageEnabled = false;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const MultisampleState& rhs) const;
};

struct Origin2D {

    uint32_t x = 0;
    uint32_t y = 0;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const Origin2D& rhs) const;
};

struct Origin3D {

    uint32_t x = 0;
    uint32_t y = 0;
    uint32_t z = 0;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const Origin3D& rhs) const;
};

struct PassTimestampWrites {
    ChainedStruct const * nextInChain = nullptr;

    detail::QuerySet* querySet = {};
    uint32_t beginningOfPassWriteIndex = wgpu::kQuerySetIndexUndefined;
    uint32_t endOfPassWriteIndex = wgpu::kQuerySetIndexUndefined;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const PassTimestampWrites& rhs) const;
};

struct PipelineLayoutResourceTable : ChainedStruct {
    PipelineLayoutResourceTable() {
        sType = wgpu::SType::PipelineLayoutResourceTable;
    }

    alignas(wgpu::PipelineLayoutResourceTable::kFirstMemberAlignment)
    wgpu::Bool usesResourceTable = false;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const PipelineLayoutResourceTable& rhs) const;
};

struct PipelineLayoutStorageAttachment {
    ChainedStruct const * nextInChain = nullptr;

    uint64_t offset = 0;
    wgpu::TextureFormat format = wgpu::TextureFormat::Undefined;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const PipelineLayoutStorageAttachment& rhs) const;
};

struct PrimitiveState {
    ChainedStruct const * nextInChain = nullptr;

    wgpu::PrimitiveTopology topology = wgpu::PrimitiveTopology::TriangleList;
    wgpu::IndexFormat stripIndexFormat = wgpu::IndexFormat::Undefined;
    wgpu::FrontFace frontFace = wgpu::FrontFace::CCW;
    wgpu::CullMode cullMode = wgpu::CullMode::None;
    wgpu::Bool unclippedDepth = false;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const PrimitiveState& rhs) const;
};

struct QuerySetDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};
    wgpu::QueryType type = {};
    uint32_t count = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const QuerySetDescriptor& rhs) const;
};

struct QueueDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const QueueDescriptor& rhs) const;
};

struct RenderBundleDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const RenderBundleDescriptor& rhs) const;
};

struct RenderBundleEncoderResourceTable : ChainedStruct {
    RenderBundleEncoderResourceTable() {
        sType = wgpu::SType::RenderBundleEncoderResourceTable;
    }

    alignas(wgpu::RenderBundleEncoderResourceTable::kFirstMemberAlignment)
    wgpu::Bool usesResourceTable = false;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const RenderBundleEncoderResourceTable& rhs) const;
};

struct RenderPassDepthStencilAttachment {
    ChainedStruct const * nextInChain = nullptr;

    detail::TextureView* view = {};
    wgpu::LoadOp depthLoadOp = wgpu::LoadOp::Undefined;
    wgpu::StoreOp depthStoreOp = wgpu::StoreOp::Undefined;
    float depthClearValue = wgpu::kDepthClearValueUndefined;
    wgpu::Bool depthReadOnly = false;
    wgpu::LoadOp stencilLoadOp = wgpu::LoadOp::Undefined;
    wgpu::StoreOp stencilStoreOp = wgpu::StoreOp::Undefined;
    uint32_t stencilClearValue = 0;
    wgpu::Bool stencilReadOnly = false;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const RenderPassDepthStencilAttachment& rhs) const;
};

struct RenderPassDescriptorResolveRect : ChainedStruct {
    RenderPassDescriptorResolveRect() {
        sType = wgpu::SType::RenderPassDescriptorResolveRect;
    }

    alignas(wgpu::RenderPassDescriptorResolveRect::kFirstMemberAlignment)
    uint32_t colorOffsetX = {};
    uint32_t colorOffsetY = {};
    uint32_t resolveOffsetX = {};
    uint32_t resolveOffsetY = {};
    uint32_t width = {};
    uint32_t height = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const RenderPassDescriptorResolveRect& rhs) const;
};

struct RenderPassMaxDrawCount : ChainedStruct {
    RenderPassMaxDrawCount() {
        sType = wgpu::SType::RenderPassMaxDrawCount;
    }

    alignas(wgpu::RenderPassMaxDrawCount::kFirstMemberAlignment)
    uint64_t maxDrawCount = 50000000;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const RenderPassMaxDrawCount& rhs) const;
};

struct RequestAdapterWebXROptions : ChainedStruct {
    RequestAdapterWebXROptions() {
        sType = wgpu::SType::RequestAdapterWebXROptions;
    }

    alignas(wgpu::RequestAdapterWebXROptions::kFirstMemberAlignment)
    wgpu::Bool xrCompatible = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const RequestAdapterWebXROptions& rhs) const;
};

struct ResourceTableDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};
    uint32_t size = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const ResourceTableDescriptor& rhs) const;
};

struct SamplerBindingLayout {
    ChainedStruct const * nextInChain = nullptr;

    wgpu::SamplerBindingType type = wgpu::SamplerBindingType::Filtering;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const SamplerBindingLayout& rhs) const;
};

struct ShaderModuleCompilationOptions : ChainedStruct {
    ShaderModuleCompilationOptions() {
        sType = wgpu::SType::ShaderModuleCompilationOptions;
    }

    alignas(wgpu::ShaderModuleCompilationOptions::kFirstMemberAlignment)
    wgpu::Bool strictMath = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const ShaderModuleCompilationOptions& rhs) const;
};

struct ShaderSourceSPIRV : ChainedStruct {
    ShaderSourceSPIRV() {
        sType = wgpu::SType::ShaderSourceSPIRV;
    }

    alignas(wgpu::ShaderSourceSPIRV::kFirstMemberAlignment)
    dawn::ityp::span<size_t, uint32_t const, dawn::detail::DynamicExtent<size_t>> code = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const ShaderSourceSPIRV& rhs) const;
};

struct ShaderSourceWGSL : ChainedStruct {
    ShaderSourceWGSL() {
        sType = wgpu::SType::ShaderSourceWGSL;
    }

    alignas(wgpu::ShaderSourceWGSL::kFirstMemberAlignment)
    StringView code = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const ShaderSourceWGSL& rhs) const;
};

struct StaticSamplerBindingLayout : ChainedStruct {
    StaticSamplerBindingLayout() {
        sType = wgpu::SType::StaticSamplerBindingLayout;
    }

    alignas(wgpu::StaticSamplerBindingLayout::kFirstMemberAlignment)
    detail::Sampler* sampler = {};
    uint32_t sampledTextureBinding = wgpu::kLimitU32Undefined;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const StaticSamplerBindingLayout& rhs) const;
};

struct StencilFaceState {

    wgpu::CompareFunction compare = wgpu::CompareFunction::Always;
    wgpu::StencilOperation failOp = wgpu::StencilOperation::Keep;
    wgpu::StencilOperation depthFailOp = wgpu::StencilOperation::Keep;
    wgpu::StencilOperation passOp = wgpu::StencilOperation::Keep;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const StencilFaceState& rhs) const;
};

struct StorageTextureBindingLayout {
    ChainedStruct const * nextInChain = nullptr;

    wgpu::StorageTextureAccess access = wgpu::StorageTextureAccess::WriteOnly;
    wgpu::TextureFormat format = wgpu::TextureFormat::Undefined;
    wgpu::TextureViewDimension viewDimension = wgpu::TextureViewDimension::e2D;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const StorageTextureBindingLayout& rhs) const;
};

struct SubgroupMatrixConfig {

    wgpu::SubgroupMatrixComponentType componentType = {};
    wgpu::SubgroupMatrixComponentType resultComponentType = {};
    uint32_t M = {};
    uint32_t N = {};
    uint32_t K = {};
    uint32_t minSubgroupSize = {};
    uint32_t maxSubgroupSize = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const SubgroupMatrixConfig& rhs) const;
};

struct SupportedFeatures {
    SupportedFeatures() = default;
    ~SupportedFeatures();
    SupportedFeatures(const SupportedFeatures&) = delete;
    SupportedFeatures& operator=(const SupportedFeatures&) = delete;
    SupportedFeatures(SupportedFeatures&&);
    SupportedFeatures& operator=(SupportedFeatures&&);


    dawn::ityp::span<size_t, wgpu::FeatureName const, dawn::detail::DynamicExtent<size_t>> features = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const SupportedFeatures& rhs) const;

    private:
      inline void FreeMembers();
};

struct SupportedInstanceFeatures {
    SupportedInstanceFeatures() = default;
    ~SupportedInstanceFeatures();
    SupportedInstanceFeatures(const SupportedInstanceFeatures&) = delete;
    SupportedInstanceFeatures& operator=(const SupportedInstanceFeatures&) = delete;
    SupportedInstanceFeatures(SupportedInstanceFeatures&&);
    SupportedInstanceFeatures& operator=(SupportedInstanceFeatures&&);


    dawn::ityp::span<size_t, wgpu::InstanceFeatureName const, dawn::detail::DynamicExtent<size_t>> features = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const SupportedInstanceFeatures& rhs) const;

    private:
      inline void FreeMembers();
};

struct SupportedWGSLLanguageFeatures {
    SupportedWGSLLanguageFeatures() = default;
    ~SupportedWGSLLanguageFeatures();
    SupportedWGSLLanguageFeatures(const SupportedWGSLLanguageFeatures&) = delete;
    SupportedWGSLLanguageFeatures& operator=(const SupportedWGSLLanguageFeatures&) = delete;
    SupportedWGSLLanguageFeatures(SupportedWGSLLanguageFeatures&&);
    SupportedWGSLLanguageFeatures& operator=(SupportedWGSLLanguageFeatures&&);


    dawn::ityp::span<size_t, wgpu::WGSLLanguageFeatureName const, dawn::detail::DynamicExtent<size_t>> features = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const SupportedWGSLLanguageFeatures& rhs) const;

    private:
      inline void FreeMembers();
};

struct SurfaceCapabilities {
    SurfaceCapabilities() = default;
    ~SurfaceCapabilities();
    SurfaceCapabilities(const SurfaceCapabilities&) = delete;
    SurfaceCapabilities& operator=(const SurfaceCapabilities&) = delete;
    SurfaceCapabilities(SurfaceCapabilities&&);
    SurfaceCapabilities& operator=(SurfaceCapabilities&&);

    ChainedStructOut * nextInChain = nullptr;

    wgpu::TextureUsage usages = wgpu::TextureUsage::None;
    dawn::ityp::span<size_t, wgpu::TextureFormat const, dawn::detail::DynamicExtent<size_t>> formats = {};
    dawn::ityp::span<size_t, wgpu::PresentMode const, dawn::detail::DynamicExtent<size_t>> presentModes = {};
    dawn::ityp::span<size_t, wgpu::CompositeAlphaMode const, dawn::detail::DynamicExtent<size_t>> alphaModes = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const SurfaceCapabilities& rhs) const;

    private:
      inline void FreeMembers();
};

struct SurfaceColorManagement : ChainedStruct {
    SurfaceColorManagement() {
        sType = wgpu::SType::SurfaceColorManagement;
    }

    alignas(wgpu::SurfaceColorManagement::kFirstMemberAlignment)
    wgpu::PredefinedColorSpace colorSpace = {};
    wgpu::ToneMappingMode toneMappingMode = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const SurfaceColorManagement& rhs) const;
};

struct SurfaceConfiguration {
    ChainedStruct const * nextInChain = nullptr;

    detail::Device* device = {};
    wgpu::TextureFormat format = wgpu::TextureFormat::Undefined;
    wgpu::TextureUsage usage = wgpu::TextureUsage::RenderAttachment;
    uint32_t width = {};
    uint32_t height = {};
    dawn::ityp::span<size_t, wgpu::TextureFormat const, dawn::detail::DynamicExtent<size_t>> viewFormats = {};
    wgpu::CompositeAlphaMode alphaMode = wgpu::CompositeAlphaMode::Auto;
    wgpu::PresentMode presentMode = wgpu::PresentMode::Fifo;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const SurfaceConfiguration& rhs) const;
};

struct SurfaceDescriptorFromWindowsCoreWindow : ChainedStruct {
    SurfaceDescriptorFromWindowsCoreWindow() {
        sType = wgpu::SType::SurfaceDescriptorFromWindowsCoreWindow;
    }

    alignas(wgpu::SurfaceDescriptorFromWindowsCoreWindow::kFirstMemberAlignment)
    void * coreWindow = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const SurfaceDescriptorFromWindowsCoreWindow& rhs) const;
};

struct SurfaceDescriptorFromWindowsUWPSwapChainPanel : ChainedStruct {
    SurfaceDescriptorFromWindowsUWPSwapChainPanel() {
        sType = wgpu::SType::SurfaceDescriptorFromWindowsUWPSwapChainPanel;
    }

    alignas(wgpu::SurfaceDescriptorFromWindowsUWPSwapChainPanel::kFirstMemberAlignment)
    void * swapChainPanel = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const SurfaceDescriptorFromWindowsUWPSwapChainPanel& rhs) const;
};

struct SurfaceDescriptorFromWindowsWinUISwapChainPanel : ChainedStruct {
    SurfaceDescriptorFromWindowsWinUISwapChainPanel() {
        sType = wgpu::SType::SurfaceDescriptorFromWindowsWinUISwapChainPanel;
    }

    alignas(wgpu::SurfaceDescriptorFromWindowsWinUISwapChainPanel::kFirstMemberAlignment)
    void * swapChainPanel = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const SurfaceDescriptorFromWindowsWinUISwapChainPanel& rhs) const;
};

struct SurfaceTexture {
    ChainedStructOut * nextInChain = nullptr;

    detail::Texture* texture = {};
    wgpu::SurfaceGetCurrentTextureStatus status = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const SurfaceTexture& rhs) const;
};

struct TexelBufferBindingEntry : ChainedStruct {
    TexelBufferBindingEntry() {
        sType = wgpu::SType::TexelBufferBindingEntry;
    }

    alignas(wgpu::TexelBufferBindingEntry::kFirstMemberAlignment)
    detail::TexelBufferView* texelBufferView = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const TexelBufferBindingEntry& rhs) const;
};

struct TexelBufferBindingLayout : ChainedStruct {
    TexelBufferBindingLayout() {
        sType = wgpu::SType::TexelBufferBindingLayout;
    }

    alignas(wgpu::TexelBufferBindingLayout::kFirstMemberAlignment)
    wgpu::TexelBufferAccess access = wgpu::TexelBufferAccess::ReadWrite;
    wgpu::TextureFormat format = wgpu::TextureFormat::Undefined;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const TexelBufferBindingLayout& rhs) const;
};

struct TexelBufferViewDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};
    wgpu::TextureFormat format = wgpu::TextureFormat::Undefined;
    uint64_t offset = 0;
    uint64_t size = wgpu::kWholeSize;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const TexelBufferViewDescriptor& rhs) const;
};

struct TexelCopyBufferLayout {

    uint64_t offset = 0;
    uint32_t bytesPerRow = wgpu::kCopyStrideUndefined;
    uint32_t rowsPerImage = wgpu::kCopyStrideUndefined;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const TexelCopyBufferLayout& rhs) const;
};

struct TextureBindingLayout {
    ChainedStruct const * nextInChain = nullptr;

    wgpu::TextureSampleType sampleType = wgpu::TextureSampleType::Float;
    wgpu::TextureViewDimension viewDimension = wgpu::TextureViewDimension::e2D;
    wgpu::Bool multisampled = false;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const TextureBindingLayout& rhs) const;
};

struct TextureBindingViewDimension : ChainedStruct {
    TextureBindingViewDimension() {
        sType = wgpu::SType::TextureBindingViewDimension;
    }

    alignas(wgpu::TextureBindingViewDimension::kFirstMemberAlignment)
    wgpu::TextureViewDimension textureBindingViewDimension = wgpu::TextureViewDimension::Undefined;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const TextureBindingViewDimension& rhs) const;
};

struct TextureComponentSwizzle {

    wgpu::ComponentSwizzle r = wgpu::ComponentSwizzle::R;
    wgpu::ComponentSwizzle g = wgpu::ComponentSwizzle::G;
    wgpu::ComponentSwizzle b = wgpu::ComponentSwizzle::B;
    wgpu::ComponentSwizzle a = wgpu::ComponentSwizzle::A;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const TextureComponentSwizzle& rhs) const;
};

struct VertexAttribute {
    ChainedStruct const * nextInChain = nullptr;

    wgpu::VertexFormat format = {};
    uint64_t offset = {};
    uint32_t shaderLocation = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const VertexAttribute& rhs) const;
};

struct YCbCrVkDescriptor : ChainedStruct {
    YCbCrVkDescriptor() {
        sType = wgpu::SType::YCbCrVkDescriptor;
    }

    alignas(wgpu::YCbCrVkDescriptor::kFirstMemberAlignment)
    uint32_t vkFormat = 0;
    uint32_t vkYCbCrModel = 0;
    uint32_t vkYCbCrRange = 0;
    uint32_t vkComponentSwizzleRed = 0;
    uint32_t vkComponentSwizzleGreen = 0;
    uint32_t vkComponentSwizzleBlue = 0;
    uint32_t vkComponentSwizzleAlpha = 0;
    uint32_t vkXChromaOffset = 0;
    uint32_t vkYChromaOffset = 0;
    wgpu::FilterMode vkChromaFilter = wgpu::FilterMode::Nearest;
    wgpu::Bool forceExplicitReconstruction = false;
    uint64_t externalFormat = 0;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const YCbCrVkDescriptor& rhs) const;
};

struct AdapterPropertiesMemoryHeaps : ChainedStructOut {
    AdapterPropertiesMemoryHeaps() {
        sType = wgpu::SType::AdapterPropertiesMemoryHeaps;
    }
    ~AdapterPropertiesMemoryHeaps();
    AdapterPropertiesMemoryHeaps(const AdapterPropertiesMemoryHeaps&) = delete;
    AdapterPropertiesMemoryHeaps& operator=(const AdapterPropertiesMemoryHeaps&) = delete;
    AdapterPropertiesMemoryHeaps(AdapterPropertiesMemoryHeaps&&);
    AdapterPropertiesMemoryHeaps& operator=(AdapterPropertiesMemoryHeaps&&);


    alignas(wgpu::AdapterPropertiesMemoryHeaps::kFirstMemberAlignment)
    dawn::ityp::span<size_t, MemoryHeapInfo const, dawn::detail::DynamicExtent<size_t>> heapInfo = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const AdapterPropertiesMemoryHeaps& rhs) const;

    private:
      inline void FreeMembers();
};

struct AdapterPropertiesSubgroupMatrixConfigs : ChainedStructOut {
    AdapterPropertiesSubgroupMatrixConfigs() {
        sType = wgpu::SType::AdapterPropertiesSubgroupMatrixConfigs;
    }
    ~AdapterPropertiesSubgroupMatrixConfigs();
    AdapterPropertiesSubgroupMatrixConfigs(const AdapterPropertiesSubgroupMatrixConfigs&) = delete;
    AdapterPropertiesSubgroupMatrixConfigs& operator=(const AdapterPropertiesSubgroupMatrixConfigs&) = delete;
    AdapterPropertiesSubgroupMatrixConfigs(AdapterPropertiesSubgroupMatrixConfigs&&);
    AdapterPropertiesSubgroupMatrixConfigs& operator=(AdapterPropertiesSubgroupMatrixConfigs&&);


    alignas(wgpu::AdapterPropertiesSubgroupMatrixConfigs::kFirstMemberAlignment)
    dawn::ityp::span<size_t, SubgroupMatrixConfig const, dawn::detail::DynamicExtent<size_t>> configs = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const AdapterPropertiesSubgroupMatrixConfigs& rhs) const;

    private:
      inline void FreeMembers();
};

struct BindGroupEntry {
    ChainedStruct const * nextInChain = nullptr;

    uint32_t binding = {};
    detail::Buffer* buffer = {};
    uint64_t offset = 0;
    uint64_t size = wgpu::kWholeSize;
    detail::Sampler* sampler = {};
    detail::TextureView* textureView = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const BindGroupEntry& rhs) const;
};

struct BindGroupLayoutEntry {
    ChainedStruct const * nextInChain = nullptr;

    uint32_t binding = {};
    wgpu::ShaderStage visibility = wgpu::ShaderStage::None;
    uint32_t bindingArraySize = 0;
    BufferBindingLayout buffer = { nullptr, wgpu::BufferBindingType::BindingNotUsed, false, 0 };
    SamplerBindingLayout sampler = { nullptr, wgpu::SamplerBindingType::BindingNotUsed };
    TextureBindingLayout texture = { nullptr, wgpu::TextureSampleType::BindingNotUsed, wgpu::TextureViewDimension::e2D, false };
    StorageTextureBindingLayout storageTexture = { nullptr, wgpu::StorageTextureAccess::BindingNotUsed, wgpu::TextureFormat::Undefined, wgpu::TextureViewDimension::e2D };

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const BindGroupLayoutEntry& rhs) const;
};

struct BlendState {

    BlendComponent color = {};
    BlendComponent alpha = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const BlendState& rhs) const;
};

struct BufferDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};
    wgpu::BufferUsage usage = wgpu::BufferUsage::None;
    uint64_t size = {};
    wgpu::Bool mappedAtCreation = false;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const BufferDescriptor& rhs) const;
};

struct CommandEncoderDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const CommandEncoderDescriptor& rhs) const;
};

struct CompilationMessage {
    ChainedStruct const * nextInChain = nullptr;

    StringView message = {};
    wgpu::CompilationMessageType type = {};
    uint64_t lineNum = {};
    uint64_t linePos = {};
    uint64_t offset = {};
    uint64_t length = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const CompilationMessage& rhs) const;
};

struct ComputePassDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};
    PassTimestampWrites const * timestampWrites = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const ComputePassDescriptor& rhs) const;
};

struct ComputeState {
    ChainedStruct const * nextInChain = nullptr;

    detail::ShaderModule* module = {};
    StringView entryPoint = {};
    dawn::ityp::span<size_t, ConstantEntry const, dawn::detail::DynamicExtent<size_t>> constants = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const ComputeState& rhs) const;
};

struct DawnDrmFormatCapabilities : ChainedStructOut {
    DawnDrmFormatCapabilities() {
        sType = wgpu::SType::DawnDrmFormatCapabilities;
    }
    ~DawnDrmFormatCapabilities();
    DawnDrmFormatCapabilities(const DawnDrmFormatCapabilities&) = delete;
    DawnDrmFormatCapabilities& operator=(const DawnDrmFormatCapabilities&) = delete;
    DawnDrmFormatCapabilities(DawnDrmFormatCapabilities&&);
    DawnDrmFormatCapabilities& operator=(DawnDrmFormatCapabilities&&);


    alignas(wgpu::DawnDrmFormatCapabilities::kFirstMemberAlignment)
    dawn::ityp::span<size_t, DawnDrmFormatProperties const, dawn::detail::DynamicExtent<size_t>> properties = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const DawnDrmFormatCapabilities& rhs) const;

    private:
      inline void FreeMembers();
};

struct DepthStencilState {
    ChainedStruct const * nextInChain = nullptr;

    wgpu::TextureFormat format = wgpu::TextureFormat::Undefined;
    wgpu::OptionalBool depthWriteEnabled = wgpu::OptionalBool::Undefined;
    wgpu::CompareFunction depthCompare = wgpu::CompareFunction::Undefined;
    StencilFaceState stencilFront = {};
    StencilFaceState stencilBack = {};
    uint32_t stencilReadMask = 0xFFFFFFFF;
    uint32_t stencilWriteMask = 0xFFFFFFFF;
    int32_t depthBias = 0;
    float depthBiasSlopeScale = 0.f;
    float depthBiasClamp = 0.f;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const DepthStencilState& rhs) const;
};

struct ExternalTextureDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};
    detail::TextureView* plane0 = {};
    detail::TextureView* plane1 = {};
    Origin2D cropOrigin = {};
    Extent2D cropSize = {};
    Extent2D apparentSize = {};
    wgpu::Bool doYuvToRgbConversionOnly = false;
    dawn::ityp::span<size_t, float const, 12> yuvToRgbConversionMatrix = {};
    dawn::ityp::span<size_t, float const, 7> srcTransferFunctionParameters = {};
    dawn::ityp::span<size_t, float const, 7> dstTransferFunctionParameters = {};
    dawn::ityp::span<size_t, float const, 9> gamutConversionMatrix = {};
    wgpu::Bool mirrored = false;
    wgpu::ExternalTextureRotation rotation = wgpu::ExternalTextureRotation::Rotate0Degrees;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const ExternalTextureDescriptor& rhs) const;
};

struct FutureWaitInfo {

    Future future = {};
    wgpu::Bool completed = false;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const FutureWaitInfo& rhs) const;
};

struct ImageCopyExternalTexture {
    ChainedStruct const * nextInChain = nullptr;

    detail::ExternalTexture* externalTexture = {};
    Origin3D origin = {};
    Extent2D naturalSize = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const ImageCopyExternalTexture& rhs) const;
};

struct InstanceDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    dawn::ityp::span<size_t, wgpu::InstanceFeatureName const, dawn::detail::DynamicExtent<size_t>> requiredFeatures = {};
    InstanceLimits const * requiredLimits = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const InstanceDescriptor& rhs) const;
};

struct Limits {
    ChainedStructOut * nextInChain = nullptr;

    uint32_t maxTextureDimension1D = wgpu::kLimitU32Undefined;
    uint32_t maxTextureDimension2D = wgpu::kLimitU32Undefined;
    uint32_t maxTextureDimension3D = wgpu::kLimitU32Undefined;
    uint32_t maxTextureArrayLayers = wgpu::kLimitU32Undefined;
    uint32_t maxBindGroups = wgpu::kLimitU32Undefined;
    uint32_t maxBindGroupsPlusVertexBuffers = wgpu::kLimitU32Undefined;
    uint32_t maxBindingsPerBindGroup = wgpu::kLimitU32Undefined;
    uint32_t maxDynamicUniformBuffersPerPipelineLayout = wgpu::kLimitU32Undefined;
    uint32_t maxDynamicStorageBuffersPerPipelineLayout = wgpu::kLimitU32Undefined;
    uint32_t maxSampledTexturesPerShaderStage = wgpu::kLimitU32Undefined;
    uint32_t maxSamplersPerShaderStage = wgpu::kLimitU32Undefined;
    uint32_t maxStorageBuffersPerShaderStage = wgpu::kLimitU32Undefined;
    uint32_t maxStorageTexturesPerShaderStage = wgpu::kLimitU32Undefined;
    uint32_t maxUniformBuffersPerShaderStage = wgpu::kLimitU32Undefined;
    uint64_t maxUniformBufferBindingSize = wgpu::kLimitU64Undefined;
    uint64_t maxStorageBufferBindingSize = wgpu::kLimitU64Undefined;
    uint32_t minUniformBufferOffsetAlignment = wgpu::kLimitU32Undefined;
    uint32_t minStorageBufferOffsetAlignment = wgpu::kLimitU32Undefined;
    uint32_t maxVertexBuffers = wgpu::kLimitU32Undefined;
    uint64_t maxBufferSize = wgpu::kLimitU64Undefined;
    uint32_t maxVertexAttributes = wgpu::kLimitU32Undefined;
    uint32_t maxVertexBufferArrayStride = wgpu::kLimitU32Undefined;
    uint32_t maxInterStageShaderVariables = wgpu::kLimitU32Undefined;
    uint32_t maxColorAttachments = wgpu::kLimitU32Undefined;
    uint32_t maxColorAttachmentBytesPerSample = wgpu::kLimitU32Undefined;
    uint32_t maxComputeWorkgroupStorageSize = wgpu::kLimitU32Undefined;
    uint32_t maxComputeInvocationsPerWorkgroup = wgpu::kLimitU32Undefined;
    uint32_t maxComputeWorkgroupSizeX = wgpu::kLimitU32Undefined;
    uint32_t maxComputeWorkgroupSizeY = wgpu::kLimitU32Undefined;
    uint32_t maxComputeWorkgroupSizeZ = wgpu::kLimitU32Undefined;
    uint32_t maxComputeWorkgroupsPerDimension = wgpu::kLimitU32Undefined;
    uint32_t maxImmediateSize = wgpu::kLimitU32Undefined;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const Limits& rhs) const;
};

struct PipelineLayoutPixelLocalStorage : ChainedStruct {
    PipelineLayoutPixelLocalStorage() {
        sType = wgpu::SType::PipelineLayoutPixelLocalStorage;
    }

    alignas(wgpu::PipelineLayoutPixelLocalStorage::kFirstMemberAlignment)
    uint64_t totalPixelLocalStorageSize = {};
    dawn::ityp::span<size_t, PipelineLayoutStorageAttachment const, dawn::detail::DynamicExtent<size_t>> storageAttachments = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const PipelineLayoutPixelLocalStorage& rhs) const;
};

struct RenderBundleEncoderDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};
    dawn::ityp::span<size_t, wgpu::TextureFormat const, dawn::detail::DynamicExtent<size_t>> colorFormats = {};
    wgpu::TextureFormat depthStencilFormat = wgpu::TextureFormat::Undefined;
    uint32_t sampleCount = 1;
    wgpu::Bool depthReadOnly = false;
    wgpu::Bool stencilReadOnly = false;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const RenderBundleEncoderDescriptor& rhs) const;
};

struct RenderPassColorAttachment {
    ChainedStruct const * nextInChain = nullptr;

    detail::TextureView* view = {};
    uint32_t depthSlice = wgpu::kDepthSliceUndefined;
    detail::TextureView* resolveTarget = {};
    wgpu::LoadOp loadOp = wgpu::LoadOp::Undefined;
    wgpu::StoreOp storeOp = wgpu::StoreOp::Undefined;
    Color clearValue = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const RenderPassColorAttachment& rhs) const;
};

struct RenderPassRenderAreaRect : ChainedStruct {
    RenderPassRenderAreaRect() {
        sType = wgpu::SType::RenderPassRenderAreaRect;
    }

    alignas(wgpu::RenderPassRenderAreaRect::kFirstMemberAlignment)
    Origin2D origin = {};
    Extent2D size = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const RenderPassRenderAreaRect& rhs) const;
};

struct RenderPassStorageAttachment {
    ChainedStruct const * nextInChain = nullptr;

    uint64_t offset = 0;
    detail::TextureView* storage = {};
    wgpu::LoadOp loadOp = wgpu::LoadOp::Undefined;
    wgpu::StoreOp storeOp = wgpu::StoreOp::Undefined;
    Color clearValue = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const RenderPassStorageAttachment& rhs) const;
};

struct RequestAdapterOptions {
    ChainedStruct const * nextInChain = nullptr;

    wgpu::FeatureLevel featureLevel = wgpu::FeatureLevel::Core;
    wgpu::PowerPreference powerPreference = wgpu::PowerPreference::Undefined;
    wgpu::Bool forceFallbackAdapter = false;
    wgpu::BackendType backendType = wgpu::BackendType::Undefined;
    detail::Surface* compatibleSurface = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const RequestAdapterOptions& rhs) const;
};

struct SamplerDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};
    wgpu::AddressMode addressModeU = wgpu::AddressMode::ClampToEdge;
    wgpu::AddressMode addressModeV = wgpu::AddressMode::ClampToEdge;
    wgpu::AddressMode addressModeW = wgpu::AddressMode::ClampToEdge;
    wgpu::FilterMode magFilter = wgpu::FilterMode::Nearest;
    wgpu::FilterMode minFilter = wgpu::FilterMode::Nearest;
    wgpu::MipmapFilterMode mipmapFilter = wgpu::MipmapFilterMode::Nearest;
    float lodMinClamp = 0.f;
    float lodMaxClamp = 32.f;
    wgpu::CompareFunction compare = wgpu::CompareFunction::Undefined;
    uint16_t maxAnisotropy = 1;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const SamplerDescriptor& rhs) const;
};

struct ShaderModuleDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const ShaderModuleDescriptor& rhs) const;
};

struct SurfaceDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const SurfaceDescriptor& rhs) const;
};

struct TexelCopyBufferInfo {

    TexelCopyBufferLayout layout = {};
    detail::Buffer* buffer = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const TexelCopyBufferInfo& rhs) const;
};

struct TexelCopyTextureInfo {

    detail::Texture* texture = {};
    uint32_t mipLevel = 0;
    Origin3D origin = {};
    wgpu::TextureAspect aspect = wgpu::TextureAspect::All;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const TexelCopyTextureInfo& rhs) const;
};

struct TextureComponentSwizzleDescriptor : ChainedStruct {
    TextureComponentSwizzleDescriptor() {
        sType = wgpu::SType::TextureComponentSwizzleDescriptor;
    }

    alignas(wgpu::TextureComponentSwizzleDescriptor::kFirstMemberAlignment)
    TextureComponentSwizzle swizzle = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const TextureComponentSwizzleDescriptor& rhs) const;
};

struct TextureDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};
    wgpu::TextureUsage usage = wgpu::TextureUsage::None;
    wgpu::TextureDimension dimension = wgpu::TextureDimension::e2D;
    Extent3D size = {};
    wgpu::TextureFormat format = wgpu::TextureFormat::Undefined;
    uint32_t mipLevelCount = 1;
    uint32_t sampleCount = 1;
    dawn::ityp::span<size_t, wgpu::TextureFormat const, dawn::detail::DynamicExtent<size_t>> viewFormats = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const TextureDescriptor& rhs) const;
};

struct VertexBufferLayout {
    ChainedStruct const * nextInChain = nullptr;

    wgpu::VertexStepMode stepMode = wgpu::VertexStepMode::Undefined;
    uint64_t arrayStride = {};
    dawn::ityp::span<size_t, VertexAttribute const, dawn::detail::DynamicExtent<size_t>> attributes = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const VertexBufferLayout& rhs) const;
};

struct AdapterInfo {
    AdapterInfo() = default;
    ~AdapterInfo();
    AdapterInfo(const AdapterInfo&) = delete;
    AdapterInfo& operator=(const AdapterInfo&) = delete;
    AdapterInfo(AdapterInfo&&);
    AdapterInfo& operator=(AdapterInfo&&);

    ChainedStructOut * nextInChain = nullptr;

    StringView vendor = {};
    StringView architecture = {};
    StringView device = {};
    StringView description = {};
    wgpu::BackendType backendType = wgpu::BackendType::Undefined;
    wgpu::AdapterType adapterType = {};
    uint32_t vendorID = {};
    uint32_t deviceID = {};
    uint32_t subgroupMinSize = {};
    uint32_t subgroupMaxSize = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const AdapterInfo& rhs) const;

    private:
      inline void FreeMembers();
};

struct BindGroupDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};
    detail::BindGroupLayout* layout = {};
    dawn::ityp::span<size_t, BindGroupEntry const, dawn::detail::DynamicExtent<size_t>> entries = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const BindGroupDescriptor& rhs) const;
};

struct BindGroupLayoutDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};
    dawn::ityp::span<size_t, BindGroupLayoutEntry const, dawn::detail::DynamicExtent<size_t>> entries = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const BindGroupLayoutDescriptor& rhs) const;
};

struct ColorTargetState {
    ChainedStruct const * nextInChain = nullptr;

    wgpu::TextureFormat format = wgpu::TextureFormat::Undefined;
    BlendState const * blend = {};
    wgpu::ColorWriteMask writeMask = wgpu::ColorWriteMask::All;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const ColorTargetState& rhs) const;
};

struct CompilationInfo {
    ChainedStruct const * nextInChain = nullptr;

    dawn::ityp::span<size_t, CompilationMessage const, dawn::detail::DynamicExtent<size_t>> messages = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const CompilationInfo& rhs) const;
};

struct ComputePipelineDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};
    detail::PipelineLayout* layout = {};
    ComputeState compute = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const ComputePipelineDescriptor& rhs) const;
};

struct DawnFormatCapabilities {
    ChainedStructOut * nextInChain = nullptr;


    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const DawnFormatCapabilities& rhs) const;
};

struct DeviceDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};
    dawn::ityp::span<size_t, wgpu::FeatureName const, dawn::detail::DynamicExtent<size_t>> requiredFeatures = {};
    Limits const * requiredLimits = {};
    QueueDescriptor defaultQueue = {};
    WGPUDeviceLostCallbackInfo deviceLostCallbackInfo = WGPU_DEVICE_LOST_CALLBACK_INFO_INIT;
    WGPUUncapturedErrorCallbackInfo uncapturedErrorCallbackInfo = WGPU_UNCAPTURED_ERROR_CALLBACK_INFO_INIT;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const DeviceDescriptor& rhs) const;
};

struct PipelineLayoutDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};
    dawn::ityp::span<size_t, detail::BindGroupLayout* const, dawn::detail::DynamicExtent<size_t>> bindGroupLayouts = {};
    uint32_t immediateSize = 0;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const PipelineLayoutDescriptor& rhs) const;
};

struct RenderPassPixelLocalStorage : ChainedStruct {
    RenderPassPixelLocalStorage() {
        sType = wgpu::SType::RenderPassPixelLocalStorage;
    }

    alignas(wgpu::RenderPassPixelLocalStorage::kFirstMemberAlignment)
    uint64_t totalPixelLocalStorageSize = {};
    dawn::ityp::span<size_t, RenderPassStorageAttachment const, dawn::detail::DynamicExtent<size_t>> storageAttachments = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const RenderPassPixelLocalStorage& rhs) const;
};

struct TextureViewDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};
    wgpu::TextureFormat format = wgpu::TextureFormat::Undefined;
    wgpu::TextureViewDimension dimension = wgpu::TextureViewDimension::Undefined;
    uint32_t baseMipLevel = 0;
    uint32_t mipLevelCount = wgpu::kMipLevelCountUndefined;
    uint32_t baseArrayLayer = 0;
    uint32_t arrayLayerCount = wgpu::kArrayLayerCountUndefined;
    wgpu::TextureAspect aspect = wgpu::TextureAspect::All;
    wgpu::TextureUsage usage = wgpu::TextureUsage::None;

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const TextureViewDescriptor& rhs) const;
};

struct VertexState {
    ChainedStruct const * nextInChain = nullptr;

    detail::ShaderModule* module = {};
    StringView entryPoint = {};
    dawn::ityp::span<size_t, ConstantEntry const, dawn::detail::DynamicExtent<size_t>> constants = {};
    dawn::ityp::span<size_t, VertexBufferLayout const, dawn::detail::DynamicExtent<size_t>> buffers = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const VertexState& rhs) const;
};

struct FragmentState {
    ChainedStruct const * nextInChain = nullptr;

    detail::ShaderModule* module = {};
    StringView entryPoint = {};
    dawn::ityp::span<size_t, ConstantEntry const, dawn::detail::DynamicExtent<size_t>> constants = {};
    dawn::ityp::span<size_t, ColorTargetState const, dawn::detail::DynamicExtent<size_t>> targets = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const FragmentState& rhs) const;
};

struct RenderPassDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};
    dawn::ityp::span<size_t, RenderPassColorAttachment const, dawn::detail::DynamicExtent<size_t>> colorAttachments = {};
    RenderPassDepthStencilAttachment const * depthStencilAttachment = {};
    detail::QuerySet* occlusionQuerySet = {};
    PassTimestampWrites const * timestampWrites = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const RenderPassDescriptor& rhs) const;
};

struct RenderPipelineDescriptor {
    ChainedStruct const * nextInChain = nullptr;

    StringView label = {};
    detail::PipelineLayout* layout = {};
    VertexState vertex = {};
    PrimitiveState primitive = {};
    DepthStencilState const * depthStencil = {};
    MultisampleState multisample = {};
    FragmentState const * fragment = {};

    // Equality operators, mostly for testing. Note that this tests
    // strict pointer-pointer equality if the struct contains member pointers.
    bool operator==(const RenderPipelineDescriptor& rhs) const;
};

// NOLINTEND(bugprone-invalid-enum-default-initialization)

// Fully qualify FreeMember function names for the generated code.
void APISupportedFeaturesFreeMembers(WGPUSupportedFeatures);
void APISupportedInstanceFeaturesFreeMembers(WGPUSupportedInstanceFeatures);
void APISupportedWGSLLanguageFeaturesFreeMembers(WGPUSupportedWGSLLanguageFeatures);
void APISurfaceCapabilitiesFreeMembers(WGPUSurfaceCapabilities);
void APIAdapterPropertiesMemoryHeapsFreeMembers(WGPUAdapterPropertiesMemoryHeaps);
void APIAdapterPropertiesSubgroupMatrixConfigsFreeMembers(WGPUAdapterPropertiesSubgroupMatrixConfigs);
void APIDawnDrmFormatCapabilitiesFreeMembers(WGPUDawnDrmFormatCapabilities);
void APIAdapterInfoFreeMembers(WGPUAdapterInfo);

// Aliased FreeMember functions for templated code.
inline void APIFreeMembers(WGPUSupportedFeatures s) {
    APISupportedFeaturesFreeMembers(s);
}
inline void APIFreeMembers(WGPUSupportedInstanceFeatures s) {
    APISupportedInstanceFeaturesFreeMembers(s);
}
inline void APIFreeMembers(WGPUSupportedWGSLLanguageFeatures s) {
    APISupportedWGSLLanguageFeaturesFreeMembers(s);
}
inline void APIFreeMembers(WGPUSurfaceCapabilities s) {
    APISurfaceCapabilitiesFreeMembers(s);
}
inline void APIFreeMembers(WGPUAdapterPropertiesMemoryHeaps s) {
    APIAdapterPropertiesMemoryHeapsFreeMembers(s);
}
inline void APIFreeMembers(WGPUAdapterPropertiesSubgroupMatrixConfigs s) {
    APIAdapterPropertiesSubgroupMatrixConfigsFreeMembers(s);
}
inline void APIFreeMembers(WGPUDawnDrmFormatCapabilities s) {
    APIDawnDrmFormatCapabilitiesFreeMembers(s);
}
inline void APIFreeMembers(WGPUAdapterInfo s) {
    APIAdapterInfoFreeMembers(s);
}

} // namespace dawn::wire::client

#endif  // DAWNWIRE_CLIENT_WGPU_STRUCTS_AUTOGEN_H_
