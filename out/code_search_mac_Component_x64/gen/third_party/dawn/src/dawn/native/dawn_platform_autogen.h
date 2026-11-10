
#ifndef DAWNNATIVE_DAWN_PLATFORM_AUTOGEN_H_
#define DAWNNATIVE_DAWN_PLATFORM_AUTOGEN_H_

#include "dawn/native/wgpu_structs_autogen.h"

namespace dawn::native {

inline const WGPUChainedStruct* ToAPI(const ChainedStruct* rhs) {
        return reinterpret_cast<const WGPUChainedStruct*>(rhs);
    }
    inline WGPUChainedStruct* ToAPI(ChainedStruct* rhs) {
        return reinterpret_cast<WGPUChainedStruct*>(rhs);
    }
    inline const WGPUChainedStruct* ToAPI(const WGPUChainedStruct* rhs) {
        return rhs;
    }
    inline WGPUChainedStruct* ToAPI(WGPUChainedStruct* rhs) {
        return rhs;
    }
    inline const ChainedStruct* FromAPI(const WGPUChainedStruct* rhs) {
        return reinterpret_cast<const ChainedStruct*>(rhs);
    }
    inline ChainedStruct* FromAPI(WGPUChainedStruct* rhs) {
        return reinterpret_cast<ChainedStruct*>(rhs);
    }
    inline const ChainedStruct* FromAPI(const ChainedStruct* rhs) {
        return rhs;
    }
    inline ChainedStruct* FromAPI(ChainedStruct* rhs) {
        return rhs;
    }
    inline const wgpu::ChainedStruct* ToCppAPI(const ChainedStruct* rhs) {
        return reinterpret_cast<const wgpu::ChainedStruct*>(rhs);
    }
    inline wgpu::ChainedStruct* ToCppAPI(ChainedStruct* rhs) {
        return reinterpret_cast<wgpu::ChainedStruct*>(rhs);
    }
    inline const ChainedStruct* FromCppAPI(const wgpu::ChainedStruct* rhs) {
        return reinterpret_cast<const ChainedStruct*>(rhs);
    }
    inline ChainedStruct* FromCppAPI(wgpu::ChainedStruct* rhs) {
        return reinterpret_cast<ChainedStruct*>(rhs);
    }
inline const ChainedStruct& FromAPI(const WGPUChainedStruct& rhs) {
        return *reinterpret_cast<const ChainedStruct*>(&rhs);
    }
    inline ChainedStruct& FromAPI(WGPUChainedStruct& rhs) {
        return *reinterpret_cast<ChainedStruct*>(&rhs);
    }
    inline const ChainedStruct& FromAPI(const ChainedStruct& rhs) {
        return rhs;
    }
    inline ChainedStruct& FromAPI(ChainedStruct& rhs) {
        return rhs;
    }

inline const WGPUStringView* ToAPI(const StringView* rhs) {
        return reinterpret_cast<const WGPUStringView*>(rhs);
    }
    inline WGPUStringView* ToAPI(StringView* rhs) {
        return reinterpret_cast<WGPUStringView*>(rhs);
    }
    inline const WGPUStringView* ToAPI(const WGPUStringView* rhs) {
        return rhs;
    }
    inline WGPUStringView* ToAPI(WGPUStringView* rhs) {
        return rhs;
    }
    inline const StringView* FromAPI(const WGPUStringView* rhs) {
        return reinterpret_cast<const StringView*>(rhs);
    }
    inline StringView* FromAPI(WGPUStringView* rhs) {
        return reinterpret_cast<StringView*>(rhs);
    }
    inline const StringView* FromAPI(const StringView* rhs) {
        return rhs;
    }
    inline StringView* FromAPI(StringView* rhs) {
        return rhs;
    }
    inline const wgpu::StringView* ToCppAPI(const StringView* rhs) {
        return reinterpret_cast<const wgpu::StringView*>(rhs);
    }
    inline wgpu::StringView* ToCppAPI(StringView* rhs) {
        return reinterpret_cast<wgpu::StringView*>(rhs);
    }
    inline const StringView* FromCppAPI(const wgpu::StringView* rhs) {
        return reinterpret_cast<const StringView*>(rhs);
    }
    inline StringView* FromCppAPI(wgpu::StringView* rhs) {
        return reinterpret_cast<StringView*>(rhs);
    }
inline WGPUStringView ToAPI(StringView rhs) {
        return *reinterpret_cast<const WGPUStringView*>(&rhs);
    }
    inline WGPUStringView ToAPI(WGPUStringView rhs) {
        return rhs;
    }
    inline StringView FromAPI(WGPUStringView rhs) {
        return *reinterpret_cast<const StringView*>(&rhs);
    }
    inline StringView FromAPI(StringView rhs) {
        return rhs;
    }
inline const WGPUAdapterPropertiesD3D* ToAPI(const AdapterPropertiesD3D* rhs) {
        return reinterpret_cast<const WGPUAdapterPropertiesD3D*>(rhs);
    }
    inline WGPUAdapterPropertiesD3D* ToAPI(AdapterPropertiesD3D* rhs) {
        return reinterpret_cast<WGPUAdapterPropertiesD3D*>(rhs);
    }
    inline const WGPUAdapterPropertiesD3D* ToAPI(const WGPUAdapterPropertiesD3D* rhs) {
        return rhs;
    }
    inline WGPUAdapterPropertiesD3D* ToAPI(WGPUAdapterPropertiesD3D* rhs) {
        return rhs;
    }
    inline const AdapterPropertiesD3D* FromAPI(const WGPUAdapterPropertiesD3D* rhs) {
        return reinterpret_cast<const AdapterPropertiesD3D*>(rhs);
    }
    inline AdapterPropertiesD3D* FromAPI(WGPUAdapterPropertiesD3D* rhs) {
        return reinterpret_cast<AdapterPropertiesD3D*>(rhs);
    }
    inline const AdapterPropertiesD3D* FromAPI(const AdapterPropertiesD3D* rhs) {
        return rhs;
    }
    inline AdapterPropertiesD3D* FromAPI(AdapterPropertiesD3D* rhs) {
        return rhs;
    }
    inline const wgpu::AdapterPropertiesD3D* ToCppAPI(const AdapterPropertiesD3D* rhs) {
        return reinterpret_cast<const wgpu::AdapterPropertiesD3D*>(rhs);
    }
    inline wgpu::AdapterPropertiesD3D* ToCppAPI(AdapterPropertiesD3D* rhs) {
        return reinterpret_cast<wgpu::AdapterPropertiesD3D*>(rhs);
    }
    inline const AdapterPropertiesD3D* FromCppAPI(const wgpu::AdapterPropertiesD3D* rhs) {
        return reinterpret_cast<const AdapterPropertiesD3D*>(rhs);
    }
    inline AdapterPropertiesD3D* FromCppAPI(wgpu::AdapterPropertiesD3D* rhs) {
        return reinterpret_cast<AdapterPropertiesD3D*>(rhs);
    }
inline const AdapterPropertiesD3D& FromAPI(const WGPUAdapterPropertiesD3D& rhs) {
        return *reinterpret_cast<const AdapterPropertiesD3D*>(&rhs);
    }
    inline AdapterPropertiesD3D& FromAPI(WGPUAdapterPropertiesD3D& rhs) {
        return *reinterpret_cast<AdapterPropertiesD3D*>(&rhs);
    }
    inline const AdapterPropertiesD3D& FromAPI(const AdapterPropertiesD3D& rhs) {
        return rhs;
    }
    inline AdapterPropertiesD3D& FromAPI(AdapterPropertiesD3D& rhs) {
        return rhs;
    }
inline const WGPUAdapterPropertiesDrm* ToAPI(const AdapterPropertiesDrm* rhs) {
        return reinterpret_cast<const WGPUAdapterPropertiesDrm*>(rhs);
    }
    inline WGPUAdapterPropertiesDrm* ToAPI(AdapterPropertiesDrm* rhs) {
        return reinterpret_cast<WGPUAdapterPropertiesDrm*>(rhs);
    }
    inline const WGPUAdapterPropertiesDrm* ToAPI(const WGPUAdapterPropertiesDrm* rhs) {
        return rhs;
    }
    inline WGPUAdapterPropertiesDrm* ToAPI(WGPUAdapterPropertiesDrm* rhs) {
        return rhs;
    }
    inline const AdapterPropertiesDrm* FromAPI(const WGPUAdapterPropertiesDrm* rhs) {
        return reinterpret_cast<const AdapterPropertiesDrm*>(rhs);
    }
    inline AdapterPropertiesDrm* FromAPI(WGPUAdapterPropertiesDrm* rhs) {
        return reinterpret_cast<AdapterPropertiesDrm*>(rhs);
    }
    inline const AdapterPropertiesDrm* FromAPI(const AdapterPropertiesDrm* rhs) {
        return rhs;
    }
    inline AdapterPropertiesDrm* FromAPI(AdapterPropertiesDrm* rhs) {
        return rhs;
    }
    inline const wgpu::AdapterPropertiesDrm* ToCppAPI(const AdapterPropertiesDrm* rhs) {
        return reinterpret_cast<const wgpu::AdapterPropertiesDrm*>(rhs);
    }
    inline wgpu::AdapterPropertiesDrm* ToCppAPI(AdapterPropertiesDrm* rhs) {
        return reinterpret_cast<wgpu::AdapterPropertiesDrm*>(rhs);
    }
    inline const AdapterPropertiesDrm* FromCppAPI(const wgpu::AdapterPropertiesDrm* rhs) {
        return reinterpret_cast<const AdapterPropertiesDrm*>(rhs);
    }
    inline AdapterPropertiesDrm* FromCppAPI(wgpu::AdapterPropertiesDrm* rhs) {
        return reinterpret_cast<AdapterPropertiesDrm*>(rhs);
    }
inline const AdapterPropertiesDrm& FromAPI(const WGPUAdapterPropertiesDrm& rhs) {
        return *reinterpret_cast<const AdapterPropertiesDrm*>(&rhs);
    }
    inline AdapterPropertiesDrm& FromAPI(WGPUAdapterPropertiesDrm& rhs) {
        return *reinterpret_cast<AdapterPropertiesDrm*>(&rhs);
    }
    inline const AdapterPropertiesDrm& FromAPI(const AdapterPropertiesDrm& rhs) {
        return rhs;
    }
    inline AdapterPropertiesDrm& FromAPI(AdapterPropertiesDrm& rhs) {
        return rhs;
    }
inline const WGPUAdapterPropertiesVk* ToAPI(const AdapterPropertiesVk* rhs) {
        return reinterpret_cast<const WGPUAdapterPropertiesVk*>(rhs);
    }
    inline WGPUAdapterPropertiesVk* ToAPI(AdapterPropertiesVk* rhs) {
        return reinterpret_cast<WGPUAdapterPropertiesVk*>(rhs);
    }
    inline const WGPUAdapterPropertiesVk* ToAPI(const WGPUAdapterPropertiesVk* rhs) {
        return rhs;
    }
    inline WGPUAdapterPropertiesVk* ToAPI(WGPUAdapterPropertiesVk* rhs) {
        return rhs;
    }
    inline const AdapterPropertiesVk* FromAPI(const WGPUAdapterPropertiesVk* rhs) {
        return reinterpret_cast<const AdapterPropertiesVk*>(rhs);
    }
    inline AdapterPropertiesVk* FromAPI(WGPUAdapterPropertiesVk* rhs) {
        return reinterpret_cast<AdapterPropertiesVk*>(rhs);
    }
    inline const AdapterPropertiesVk* FromAPI(const AdapterPropertiesVk* rhs) {
        return rhs;
    }
    inline AdapterPropertiesVk* FromAPI(AdapterPropertiesVk* rhs) {
        return rhs;
    }
    inline const wgpu::AdapterPropertiesVk* ToCppAPI(const AdapterPropertiesVk* rhs) {
        return reinterpret_cast<const wgpu::AdapterPropertiesVk*>(rhs);
    }
    inline wgpu::AdapterPropertiesVk* ToCppAPI(AdapterPropertiesVk* rhs) {
        return reinterpret_cast<wgpu::AdapterPropertiesVk*>(rhs);
    }
    inline const AdapterPropertiesVk* FromCppAPI(const wgpu::AdapterPropertiesVk* rhs) {
        return reinterpret_cast<const AdapterPropertiesVk*>(rhs);
    }
    inline AdapterPropertiesVk* FromCppAPI(wgpu::AdapterPropertiesVk* rhs) {
        return reinterpret_cast<AdapterPropertiesVk*>(rhs);
    }
inline const AdapterPropertiesVk& FromAPI(const WGPUAdapterPropertiesVk& rhs) {
        return *reinterpret_cast<const AdapterPropertiesVk*>(&rhs);
    }
    inline AdapterPropertiesVk& FromAPI(WGPUAdapterPropertiesVk& rhs) {
        return *reinterpret_cast<AdapterPropertiesVk*>(&rhs);
    }
    inline const AdapterPropertiesVk& FromAPI(const AdapterPropertiesVk& rhs) {
        return rhs;
    }
    inline AdapterPropertiesVk& FromAPI(AdapterPropertiesVk& rhs) {
        return rhs;
    }
inline const WGPUAdapterPropertiesWGPU* ToAPI(const AdapterPropertiesWGPU* rhs) {
        return reinterpret_cast<const WGPUAdapterPropertiesWGPU*>(rhs);
    }
    inline WGPUAdapterPropertiesWGPU* ToAPI(AdapterPropertiesWGPU* rhs) {
        return reinterpret_cast<WGPUAdapterPropertiesWGPU*>(rhs);
    }
    inline const WGPUAdapterPropertiesWGPU* ToAPI(const WGPUAdapterPropertiesWGPU* rhs) {
        return rhs;
    }
    inline WGPUAdapterPropertiesWGPU* ToAPI(WGPUAdapterPropertiesWGPU* rhs) {
        return rhs;
    }
    inline const AdapterPropertiesWGPU* FromAPI(const WGPUAdapterPropertiesWGPU* rhs) {
        return reinterpret_cast<const AdapterPropertiesWGPU*>(rhs);
    }
    inline AdapterPropertiesWGPU* FromAPI(WGPUAdapterPropertiesWGPU* rhs) {
        return reinterpret_cast<AdapterPropertiesWGPU*>(rhs);
    }
    inline const AdapterPropertiesWGPU* FromAPI(const AdapterPropertiesWGPU* rhs) {
        return rhs;
    }
    inline AdapterPropertiesWGPU* FromAPI(AdapterPropertiesWGPU* rhs) {
        return rhs;
    }
    inline const wgpu::AdapterPropertiesWGPU* ToCppAPI(const AdapterPropertiesWGPU* rhs) {
        return reinterpret_cast<const wgpu::AdapterPropertiesWGPU*>(rhs);
    }
    inline wgpu::AdapterPropertiesWGPU* ToCppAPI(AdapterPropertiesWGPU* rhs) {
        return reinterpret_cast<wgpu::AdapterPropertiesWGPU*>(rhs);
    }
    inline const AdapterPropertiesWGPU* FromCppAPI(const wgpu::AdapterPropertiesWGPU* rhs) {
        return reinterpret_cast<const AdapterPropertiesWGPU*>(rhs);
    }
    inline AdapterPropertiesWGPU* FromCppAPI(wgpu::AdapterPropertiesWGPU* rhs) {
        return reinterpret_cast<AdapterPropertiesWGPU*>(rhs);
    }
inline const AdapterPropertiesWGPU& FromAPI(const WGPUAdapterPropertiesWGPU& rhs) {
        return *reinterpret_cast<const AdapterPropertiesWGPU*>(&rhs);
    }
    inline AdapterPropertiesWGPU& FromAPI(WGPUAdapterPropertiesWGPU& rhs) {
        return *reinterpret_cast<AdapterPropertiesWGPU*>(&rhs);
    }
    inline const AdapterPropertiesWGPU& FromAPI(const AdapterPropertiesWGPU& rhs) {
        return rhs;
    }
    inline AdapterPropertiesWGPU& FromAPI(AdapterPropertiesWGPU& rhs) {
        return rhs;
    }
inline const WGPUBindingResource* ToAPI(const BindingResource* rhs) {
        return reinterpret_cast<const WGPUBindingResource*>(rhs);
    }
    inline WGPUBindingResource* ToAPI(BindingResource* rhs) {
        return reinterpret_cast<WGPUBindingResource*>(rhs);
    }
    inline const WGPUBindingResource* ToAPI(const WGPUBindingResource* rhs) {
        return rhs;
    }
    inline WGPUBindingResource* ToAPI(WGPUBindingResource* rhs) {
        return rhs;
    }
    inline const BindingResource* FromAPI(const WGPUBindingResource* rhs) {
        return reinterpret_cast<const BindingResource*>(rhs);
    }
    inline BindingResource* FromAPI(WGPUBindingResource* rhs) {
        return reinterpret_cast<BindingResource*>(rhs);
    }
    inline const BindingResource* FromAPI(const BindingResource* rhs) {
        return rhs;
    }
    inline BindingResource* FromAPI(BindingResource* rhs) {
        return rhs;
    }
    inline const wgpu::BindingResource* ToCppAPI(const BindingResource* rhs) {
        return reinterpret_cast<const wgpu::BindingResource*>(rhs);
    }
    inline wgpu::BindingResource* ToCppAPI(BindingResource* rhs) {
        return reinterpret_cast<wgpu::BindingResource*>(rhs);
    }
    inline const BindingResource* FromCppAPI(const wgpu::BindingResource* rhs) {
        return reinterpret_cast<const BindingResource*>(rhs);
    }
    inline BindingResource* FromCppAPI(wgpu::BindingResource* rhs) {
        return reinterpret_cast<BindingResource*>(rhs);
    }
inline const BindingResource& FromAPI(const WGPUBindingResource& rhs) {
        return *reinterpret_cast<const BindingResource*>(&rhs);
    }
    inline BindingResource& FromAPI(WGPUBindingResource& rhs) {
        return *reinterpret_cast<BindingResource*>(&rhs);
    }
    inline const BindingResource& FromAPI(const BindingResource& rhs) {
        return rhs;
    }
    inline BindingResource& FromAPI(BindingResource& rhs) {
        return rhs;
    }
inline const WGPUBlendComponent* ToAPI(const BlendComponent* rhs) {
        return reinterpret_cast<const WGPUBlendComponent*>(rhs);
    }
    inline WGPUBlendComponent* ToAPI(BlendComponent* rhs) {
        return reinterpret_cast<WGPUBlendComponent*>(rhs);
    }
    inline const WGPUBlendComponent* ToAPI(const WGPUBlendComponent* rhs) {
        return rhs;
    }
    inline WGPUBlendComponent* ToAPI(WGPUBlendComponent* rhs) {
        return rhs;
    }
    inline const BlendComponent* FromAPI(const WGPUBlendComponent* rhs) {
        return reinterpret_cast<const BlendComponent*>(rhs);
    }
    inline BlendComponent* FromAPI(WGPUBlendComponent* rhs) {
        return reinterpret_cast<BlendComponent*>(rhs);
    }
    inline const BlendComponent* FromAPI(const BlendComponent* rhs) {
        return rhs;
    }
    inline BlendComponent* FromAPI(BlendComponent* rhs) {
        return rhs;
    }
    inline const wgpu::BlendComponent* ToCppAPI(const BlendComponent* rhs) {
        return reinterpret_cast<const wgpu::BlendComponent*>(rhs);
    }
    inline wgpu::BlendComponent* ToCppAPI(BlendComponent* rhs) {
        return reinterpret_cast<wgpu::BlendComponent*>(rhs);
    }
    inline const BlendComponent* FromCppAPI(const wgpu::BlendComponent* rhs) {
        return reinterpret_cast<const BlendComponent*>(rhs);
    }
    inline BlendComponent* FromCppAPI(wgpu::BlendComponent* rhs) {
        return reinterpret_cast<BlendComponent*>(rhs);
    }
inline const BlendComponent& FromAPI(const WGPUBlendComponent& rhs) {
        return *reinterpret_cast<const BlendComponent*>(&rhs);
    }
    inline BlendComponent& FromAPI(WGPUBlendComponent& rhs) {
        return *reinterpret_cast<BlendComponent*>(&rhs);
    }
    inline const BlendComponent& FromAPI(const BlendComponent& rhs) {
        return rhs;
    }
    inline BlendComponent& FromAPI(BlendComponent& rhs) {
        return rhs;
    }
inline const WGPUBufferBindingLayout* ToAPI(const BufferBindingLayout* rhs) {
        return reinterpret_cast<const WGPUBufferBindingLayout*>(rhs);
    }
    inline WGPUBufferBindingLayout* ToAPI(BufferBindingLayout* rhs) {
        return reinterpret_cast<WGPUBufferBindingLayout*>(rhs);
    }
    inline const WGPUBufferBindingLayout* ToAPI(const WGPUBufferBindingLayout* rhs) {
        return rhs;
    }
    inline WGPUBufferBindingLayout* ToAPI(WGPUBufferBindingLayout* rhs) {
        return rhs;
    }
    inline const BufferBindingLayout* FromAPI(const WGPUBufferBindingLayout* rhs) {
        return reinterpret_cast<const BufferBindingLayout*>(rhs);
    }
    inline BufferBindingLayout* FromAPI(WGPUBufferBindingLayout* rhs) {
        return reinterpret_cast<BufferBindingLayout*>(rhs);
    }
    inline const BufferBindingLayout* FromAPI(const BufferBindingLayout* rhs) {
        return rhs;
    }
    inline BufferBindingLayout* FromAPI(BufferBindingLayout* rhs) {
        return rhs;
    }
    inline const wgpu::BufferBindingLayout* ToCppAPI(const BufferBindingLayout* rhs) {
        return reinterpret_cast<const wgpu::BufferBindingLayout*>(rhs);
    }
    inline wgpu::BufferBindingLayout* ToCppAPI(BufferBindingLayout* rhs) {
        return reinterpret_cast<wgpu::BufferBindingLayout*>(rhs);
    }
    inline const BufferBindingLayout* FromCppAPI(const wgpu::BufferBindingLayout* rhs) {
        return reinterpret_cast<const BufferBindingLayout*>(rhs);
    }
    inline BufferBindingLayout* FromCppAPI(wgpu::BufferBindingLayout* rhs) {
        return reinterpret_cast<BufferBindingLayout*>(rhs);
    }
inline const BufferBindingLayout& FromAPI(const WGPUBufferBindingLayout& rhs) {
        return *reinterpret_cast<const BufferBindingLayout*>(&rhs);
    }
    inline BufferBindingLayout& FromAPI(WGPUBufferBindingLayout& rhs) {
        return *reinterpret_cast<BufferBindingLayout*>(&rhs);
    }
    inline const BufferBindingLayout& FromAPI(const BufferBindingLayout& rhs) {
        return rhs;
    }
    inline BufferBindingLayout& FromAPI(BufferBindingLayout& rhs) {
        return rhs;
    }
inline const WGPUBufferHostMappedPointer* ToAPI(const BufferHostMappedPointer* rhs) {
        return reinterpret_cast<const WGPUBufferHostMappedPointer*>(rhs);
    }
    inline WGPUBufferHostMappedPointer* ToAPI(BufferHostMappedPointer* rhs) {
        return reinterpret_cast<WGPUBufferHostMappedPointer*>(rhs);
    }
    inline const WGPUBufferHostMappedPointer* ToAPI(const WGPUBufferHostMappedPointer* rhs) {
        return rhs;
    }
    inline WGPUBufferHostMappedPointer* ToAPI(WGPUBufferHostMappedPointer* rhs) {
        return rhs;
    }
    inline const BufferHostMappedPointer* FromAPI(const WGPUBufferHostMappedPointer* rhs) {
        return reinterpret_cast<const BufferHostMappedPointer*>(rhs);
    }
    inline BufferHostMappedPointer* FromAPI(WGPUBufferHostMappedPointer* rhs) {
        return reinterpret_cast<BufferHostMappedPointer*>(rhs);
    }
    inline const BufferHostMappedPointer* FromAPI(const BufferHostMappedPointer* rhs) {
        return rhs;
    }
    inline BufferHostMappedPointer* FromAPI(BufferHostMappedPointer* rhs) {
        return rhs;
    }
    inline const wgpu::BufferHostMappedPointer* ToCppAPI(const BufferHostMappedPointer* rhs) {
        return reinterpret_cast<const wgpu::BufferHostMappedPointer*>(rhs);
    }
    inline wgpu::BufferHostMappedPointer* ToCppAPI(BufferHostMappedPointer* rhs) {
        return reinterpret_cast<wgpu::BufferHostMappedPointer*>(rhs);
    }
    inline const BufferHostMappedPointer* FromCppAPI(const wgpu::BufferHostMappedPointer* rhs) {
        return reinterpret_cast<const BufferHostMappedPointer*>(rhs);
    }
    inline BufferHostMappedPointer* FromCppAPI(wgpu::BufferHostMappedPointer* rhs) {
        return reinterpret_cast<BufferHostMappedPointer*>(rhs);
    }
inline const BufferHostMappedPointer& FromAPI(const WGPUBufferHostMappedPointer& rhs) {
        return *reinterpret_cast<const BufferHostMappedPointer*>(&rhs);
    }
    inline BufferHostMappedPointer& FromAPI(WGPUBufferHostMappedPointer& rhs) {
        return *reinterpret_cast<BufferHostMappedPointer*>(&rhs);
    }
    inline const BufferHostMappedPointer& FromAPI(const BufferHostMappedPointer& rhs) {
        return rhs;
    }
    inline BufferHostMappedPointer& FromAPI(BufferHostMappedPointer& rhs) {
        return rhs;
    }
inline const WGPUColor* ToAPI(const Color* rhs) {
        return reinterpret_cast<const WGPUColor*>(rhs);
    }
    inline WGPUColor* ToAPI(Color* rhs) {
        return reinterpret_cast<WGPUColor*>(rhs);
    }
    inline const WGPUColor* ToAPI(const WGPUColor* rhs) {
        return rhs;
    }
    inline WGPUColor* ToAPI(WGPUColor* rhs) {
        return rhs;
    }
    inline const Color* FromAPI(const WGPUColor* rhs) {
        return reinterpret_cast<const Color*>(rhs);
    }
    inline Color* FromAPI(WGPUColor* rhs) {
        return reinterpret_cast<Color*>(rhs);
    }
    inline const Color* FromAPI(const Color* rhs) {
        return rhs;
    }
    inline Color* FromAPI(Color* rhs) {
        return rhs;
    }
    inline const wgpu::Color* ToCppAPI(const Color* rhs) {
        return reinterpret_cast<const wgpu::Color*>(rhs);
    }
    inline wgpu::Color* ToCppAPI(Color* rhs) {
        return reinterpret_cast<wgpu::Color*>(rhs);
    }
    inline const Color* FromCppAPI(const wgpu::Color* rhs) {
        return reinterpret_cast<const Color*>(rhs);
    }
    inline Color* FromCppAPI(wgpu::Color* rhs) {
        return reinterpret_cast<Color*>(rhs);
    }
inline const Color& FromAPI(const WGPUColor& rhs) {
        return *reinterpret_cast<const Color*>(&rhs);
    }
    inline Color& FromAPI(WGPUColor& rhs) {
        return *reinterpret_cast<Color*>(&rhs);
    }
    inline const Color& FromAPI(const Color& rhs) {
        return rhs;
    }
    inline Color& FromAPI(Color& rhs) {
        return rhs;
    }
inline const WGPUColorSpaceDawn* ToAPI(const ColorSpaceDawn* rhs) {
        return reinterpret_cast<const WGPUColorSpaceDawn*>(rhs);
    }
    inline WGPUColorSpaceDawn* ToAPI(ColorSpaceDawn* rhs) {
        return reinterpret_cast<WGPUColorSpaceDawn*>(rhs);
    }
    inline const WGPUColorSpaceDawn* ToAPI(const WGPUColorSpaceDawn* rhs) {
        return rhs;
    }
    inline WGPUColorSpaceDawn* ToAPI(WGPUColorSpaceDawn* rhs) {
        return rhs;
    }
    inline const ColorSpaceDawn* FromAPI(const WGPUColorSpaceDawn* rhs) {
        return reinterpret_cast<const ColorSpaceDawn*>(rhs);
    }
    inline ColorSpaceDawn* FromAPI(WGPUColorSpaceDawn* rhs) {
        return reinterpret_cast<ColorSpaceDawn*>(rhs);
    }
    inline const ColorSpaceDawn* FromAPI(const ColorSpaceDawn* rhs) {
        return rhs;
    }
    inline ColorSpaceDawn* FromAPI(ColorSpaceDawn* rhs) {
        return rhs;
    }
    inline const wgpu::ColorSpaceDawn* ToCppAPI(const ColorSpaceDawn* rhs) {
        return reinterpret_cast<const wgpu::ColorSpaceDawn*>(rhs);
    }
    inline wgpu::ColorSpaceDawn* ToCppAPI(ColorSpaceDawn* rhs) {
        return reinterpret_cast<wgpu::ColorSpaceDawn*>(rhs);
    }
    inline const ColorSpaceDawn* FromCppAPI(const wgpu::ColorSpaceDawn* rhs) {
        return reinterpret_cast<const ColorSpaceDawn*>(rhs);
    }
    inline ColorSpaceDawn* FromCppAPI(wgpu::ColorSpaceDawn* rhs) {
        return reinterpret_cast<ColorSpaceDawn*>(rhs);
    }
inline const ColorSpaceDawn& FromAPI(const WGPUColorSpaceDawn& rhs) {
        return *reinterpret_cast<const ColorSpaceDawn*>(&rhs);
    }
    inline ColorSpaceDawn& FromAPI(WGPUColorSpaceDawn& rhs) {
        return *reinterpret_cast<ColorSpaceDawn*>(&rhs);
    }
    inline const ColorSpaceDawn& FromAPI(const ColorSpaceDawn& rhs) {
        return rhs;
    }
    inline ColorSpaceDawn& FromAPI(ColorSpaceDawn& rhs) {
        return rhs;
    }
inline const WGPUColorTargetStateExpandResolveTextureDawn* ToAPI(const ColorTargetStateExpandResolveTextureDawn* rhs) {
        return reinterpret_cast<const WGPUColorTargetStateExpandResolveTextureDawn*>(rhs);
    }
    inline WGPUColorTargetStateExpandResolveTextureDawn* ToAPI(ColorTargetStateExpandResolveTextureDawn* rhs) {
        return reinterpret_cast<WGPUColorTargetStateExpandResolveTextureDawn*>(rhs);
    }
    inline const WGPUColorTargetStateExpandResolveTextureDawn* ToAPI(const WGPUColorTargetStateExpandResolveTextureDawn* rhs) {
        return rhs;
    }
    inline WGPUColorTargetStateExpandResolveTextureDawn* ToAPI(WGPUColorTargetStateExpandResolveTextureDawn* rhs) {
        return rhs;
    }
    inline const ColorTargetStateExpandResolveTextureDawn* FromAPI(const WGPUColorTargetStateExpandResolveTextureDawn* rhs) {
        return reinterpret_cast<const ColorTargetStateExpandResolveTextureDawn*>(rhs);
    }
    inline ColorTargetStateExpandResolveTextureDawn* FromAPI(WGPUColorTargetStateExpandResolveTextureDawn* rhs) {
        return reinterpret_cast<ColorTargetStateExpandResolveTextureDawn*>(rhs);
    }
    inline const ColorTargetStateExpandResolveTextureDawn* FromAPI(const ColorTargetStateExpandResolveTextureDawn* rhs) {
        return rhs;
    }
    inline ColorTargetStateExpandResolveTextureDawn* FromAPI(ColorTargetStateExpandResolveTextureDawn* rhs) {
        return rhs;
    }
    inline const wgpu::ColorTargetStateExpandResolveTextureDawn* ToCppAPI(const ColorTargetStateExpandResolveTextureDawn* rhs) {
        return reinterpret_cast<const wgpu::ColorTargetStateExpandResolveTextureDawn*>(rhs);
    }
    inline wgpu::ColorTargetStateExpandResolveTextureDawn* ToCppAPI(ColorTargetStateExpandResolveTextureDawn* rhs) {
        return reinterpret_cast<wgpu::ColorTargetStateExpandResolveTextureDawn*>(rhs);
    }
    inline const ColorTargetStateExpandResolveTextureDawn* FromCppAPI(const wgpu::ColorTargetStateExpandResolveTextureDawn* rhs) {
        return reinterpret_cast<const ColorTargetStateExpandResolveTextureDawn*>(rhs);
    }
    inline ColorTargetStateExpandResolveTextureDawn* FromCppAPI(wgpu::ColorTargetStateExpandResolveTextureDawn* rhs) {
        return reinterpret_cast<ColorTargetStateExpandResolveTextureDawn*>(rhs);
    }
inline const ColorTargetStateExpandResolveTextureDawn& FromAPI(const WGPUColorTargetStateExpandResolveTextureDawn& rhs) {
        return *reinterpret_cast<const ColorTargetStateExpandResolveTextureDawn*>(&rhs);
    }
    inline ColorTargetStateExpandResolveTextureDawn& FromAPI(WGPUColorTargetStateExpandResolveTextureDawn& rhs) {
        return *reinterpret_cast<ColorTargetStateExpandResolveTextureDawn*>(&rhs);
    }
    inline const ColorTargetStateExpandResolveTextureDawn& FromAPI(const ColorTargetStateExpandResolveTextureDawn& rhs) {
        return rhs;
    }
    inline ColorTargetStateExpandResolveTextureDawn& FromAPI(ColorTargetStateExpandResolveTextureDawn& rhs) {
        return rhs;
    }
inline const WGPUCommandBufferDescriptor* ToAPI(const CommandBufferDescriptor* rhs) {
        return reinterpret_cast<const WGPUCommandBufferDescriptor*>(rhs);
    }
    inline WGPUCommandBufferDescriptor* ToAPI(CommandBufferDescriptor* rhs) {
        return reinterpret_cast<WGPUCommandBufferDescriptor*>(rhs);
    }
    inline const WGPUCommandBufferDescriptor* ToAPI(const WGPUCommandBufferDescriptor* rhs) {
        return rhs;
    }
    inline WGPUCommandBufferDescriptor* ToAPI(WGPUCommandBufferDescriptor* rhs) {
        return rhs;
    }
    inline const CommandBufferDescriptor* FromAPI(const WGPUCommandBufferDescriptor* rhs) {
        return reinterpret_cast<const CommandBufferDescriptor*>(rhs);
    }
    inline CommandBufferDescriptor* FromAPI(WGPUCommandBufferDescriptor* rhs) {
        return reinterpret_cast<CommandBufferDescriptor*>(rhs);
    }
    inline const CommandBufferDescriptor* FromAPI(const CommandBufferDescriptor* rhs) {
        return rhs;
    }
    inline CommandBufferDescriptor* FromAPI(CommandBufferDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::CommandBufferDescriptor* ToCppAPI(const CommandBufferDescriptor* rhs) {
        return reinterpret_cast<const wgpu::CommandBufferDescriptor*>(rhs);
    }
    inline wgpu::CommandBufferDescriptor* ToCppAPI(CommandBufferDescriptor* rhs) {
        return reinterpret_cast<wgpu::CommandBufferDescriptor*>(rhs);
    }
    inline const CommandBufferDescriptor* FromCppAPI(const wgpu::CommandBufferDescriptor* rhs) {
        return reinterpret_cast<const CommandBufferDescriptor*>(rhs);
    }
    inline CommandBufferDescriptor* FromCppAPI(wgpu::CommandBufferDescriptor* rhs) {
        return reinterpret_cast<CommandBufferDescriptor*>(rhs);
    }
inline const CommandBufferDescriptor& FromAPI(const WGPUCommandBufferDescriptor& rhs) {
        return *reinterpret_cast<const CommandBufferDescriptor*>(&rhs);
    }
    inline CommandBufferDescriptor& FromAPI(WGPUCommandBufferDescriptor& rhs) {
        return *reinterpret_cast<CommandBufferDescriptor*>(&rhs);
    }
    inline const CommandBufferDescriptor& FromAPI(const CommandBufferDescriptor& rhs) {
        return rhs;
    }
    inline CommandBufferDescriptor& FromAPI(CommandBufferDescriptor& rhs) {
        return rhs;
    }
inline const WGPUCompatibilityModeLimits* ToAPI(const CompatibilityModeLimits* rhs) {
        return reinterpret_cast<const WGPUCompatibilityModeLimits*>(rhs);
    }
    inline WGPUCompatibilityModeLimits* ToAPI(CompatibilityModeLimits* rhs) {
        return reinterpret_cast<WGPUCompatibilityModeLimits*>(rhs);
    }
    inline const WGPUCompatibilityModeLimits* ToAPI(const WGPUCompatibilityModeLimits* rhs) {
        return rhs;
    }
    inline WGPUCompatibilityModeLimits* ToAPI(WGPUCompatibilityModeLimits* rhs) {
        return rhs;
    }
    inline const CompatibilityModeLimits* FromAPI(const WGPUCompatibilityModeLimits* rhs) {
        return reinterpret_cast<const CompatibilityModeLimits*>(rhs);
    }
    inline CompatibilityModeLimits* FromAPI(WGPUCompatibilityModeLimits* rhs) {
        return reinterpret_cast<CompatibilityModeLimits*>(rhs);
    }
    inline const CompatibilityModeLimits* FromAPI(const CompatibilityModeLimits* rhs) {
        return rhs;
    }
    inline CompatibilityModeLimits* FromAPI(CompatibilityModeLimits* rhs) {
        return rhs;
    }
    inline const wgpu::CompatibilityModeLimits* ToCppAPI(const CompatibilityModeLimits* rhs) {
        return reinterpret_cast<const wgpu::CompatibilityModeLimits*>(rhs);
    }
    inline wgpu::CompatibilityModeLimits* ToCppAPI(CompatibilityModeLimits* rhs) {
        return reinterpret_cast<wgpu::CompatibilityModeLimits*>(rhs);
    }
    inline const CompatibilityModeLimits* FromCppAPI(const wgpu::CompatibilityModeLimits* rhs) {
        return reinterpret_cast<const CompatibilityModeLimits*>(rhs);
    }
    inline CompatibilityModeLimits* FromCppAPI(wgpu::CompatibilityModeLimits* rhs) {
        return reinterpret_cast<CompatibilityModeLimits*>(rhs);
    }
inline const CompatibilityModeLimits& FromAPI(const WGPUCompatibilityModeLimits& rhs) {
        return *reinterpret_cast<const CompatibilityModeLimits*>(&rhs);
    }
    inline CompatibilityModeLimits& FromAPI(WGPUCompatibilityModeLimits& rhs) {
        return *reinterpret_cast<CompatibilityModeLimits*>(&rhs);
    }
    inline const CompatibilityModeLimits& FromAPI(const CompatibilityModeLimits& rhs) {
        return rhs;
    }
    inline CompatibilityModeLimits& FromAPI(CompatibilityModeLimits& rhs) {
        return rhs;
    }
inline const WGPUConstantEntry* ToAPI(const ConstantEntry* rhs) {
        return reinterpret_cast<const WGPUConstantEntry*>(rhs);
    }
    inline WGPUConstantEntry* ToAPI(ConstantEntry* rhs) {
        return reinterpret_cast<WGPUConstantEntry*>(rhs);
    }
    inline const WGPUConstantEntry* ToAPI(const WGPUConstantEntry* rhs) {
        return rhs;
    }
    inline WGPUConstantEntry* ToAPI(WGPUConstantEntry* rhs) {
        return rhs;
    }
    inline const ConstantEntry* FromAPI(const WGPUConstantEntry* rhs) {
        return reinterpret_cast<const ConstantEntry*>(rhs);
    }
    inline ConstantEntry* FromAPI(WGPUConstantEntry* rhs) {
        return reinterpret_cast<ConstantEntry*>(rhs);
    }
    inline const ConstantEntry* FromAPI(const ConstantEntry* rhs) {
        return rhs;
    }
    inline ConstantEntry* FromAPI(ConstantEntry* rhs) {
        return rhs;
    }
    inline const wgpu::ConstantEntry* ToCppAPI(const ConstantEntry* rhs) {
        return reinterpret_cast<const wgpu::ConstantEntry*>(rhs);
    }
    inline wgpu::ConstantEntry* ToCppAPI(ConstantEntry* rhs) {
        return reinterpret_cast<wgpu::ConstantEntry*>(rhs);
    }
    inline const ConstantEntry* FromCppAPI(const wgpu::ConstantEntry* rhs) {
        return reinterpret_cast<const ConstantEntry*>(rhs);
    }
    inline ConstantEntry* FromCppAPI(wgpu::ConstantEntry* rhs) {
        return reinterpret_cast<ConstantEntry*>(rhs);
    }
inline const ConstantEntry& FromAPI(const WGPUConstantEntry& rhs) {
        return *reinterpret_cast<const ConstantEntry*>(&rhs);
    }
    inline ConstantEntry& FromAPI(WGPUConstantEntry& rhs) {
        return *reinterpret_cast<ConstantEntry*>(&rhs);
    }
    inline const ConstantEntry& FromAPI(const ConstantEntry& rhs) {
        return rhs;
    }
    inline ConstantEntry& FromAPI(ConstantEntry& rhs) {
        return rhs;
    }
inline const WGPUCopyTextureForBrowserOptions* ToAPI(const CopyTextureForBrowserOptions* rhs) {
        return reinterpret_cast<const WGPUCopyTextureForBrowserOptions*>(rhs);
    }
    inline WGPUCopyTextureForBrowserOptions* ToAPI(CopyTextureForBrowserOptions* rhs) {
        return reinterpret_cast<WGPUCopyTextureForBrowserOptions*>(rhs);
    }
    inline const WGPUCopyTextureForBrowserOptions* ToAPI(const WGPUCopyTextureForBrowserOptions* rhs) {
        return rhs;
    }
    inline WGPUCopyTextureForBrowserOptions* ToAPI(WGPUCopyTextureForBrowserOptions* rhs) {
        return rhs;
    }
    inline const CopyTextureForBrowserOptions* FromAPI(const WGPUCopyTextureForBrowserOptions* rhs) {
        return reinterpret_cast<const CopyTextureForBrowserOptions*>(rhs);
    }
    inline CopyTextureForBrowserOptions* FromAPI(WGPUCopyTextureForBrowserOptions* rhs) {
        return reinterpret_cast<CopyTextureForBrowserOptions*>(rhs);
    }
    inline const CopyTextureForBrowserOptions* FromAPI(const CopyTextureForBrowserOptions* rhs) {
        return rhs;
    }
    inline CopyTextureForBrowserOptions* FromAPI(CopyTextureForBrowserOptions* rhs) {
        return rhs;
    }
    inline const wgpu::CopyTextureForBrowserOptions* ToCppAPI(const CopyTextureForBrowserOptions* rhs) {
        return reinterpret_cast<const wgpu::CopyTextureForBrowserOptions*>(rhs);
    }
    inline wgpu::CopyTextureForBrowserOptions* ToCppAPI(CopyTextureForBrowserOptions* rhs) {
        return reinterpret_cast<wgpu::CopyTextureForBrowserOptions*>(rhs);
    }
    inline const CopyTextureForBrowserOptions* FromCppAPI(const wgpu::CopyTextureForBrowserOptions* rhs) {
        return reinterpret_cast<const CopyTextureForBrowserOptions*>(rhs);
    }
    inline CopyTextureForBrowserOptions* FromCppAPI(wgpu::CopyTextureForBrowserOptions* rhs) {
        return reinterpret_cast<CopyTextureForBrowserOptions*>(rhs);
    }
inline const CopyTextureForBrowserOptions& FromAPI(const WGPUCopyTextureForBrowserOptions& rhs) {
        return *reinterpret_cast<const CopyTextureForBrowserOptions*>(&rhs);
    }
    inline CopyTextureForBrowserOptions& FromAPI(WGPUCopyTextureForBrowserOptions& rhs) {
        return *reinterpret_cast<CopyTextureForBrowserOptions*>(&rhs);
    }
    inline const CopyTextureForBrowserOptions& FromAPI(const CopyTextureForBrowserOptions& rhs) {
        return rhs;
    }
    inline CopyTextureForBrowserOptions& FromAPI(CopyTextureForBrowserOptions& rhs) {
        return rhs;
    }
inline const WGPUDawnAdapterPropertiesPowerPreference* ToAPI(const DawnAdapterPropertiesPowerPreference* rhs) {
        return reinterpret_cast<const WGPUDawnAdapterPropertiesPowerPreference*>(rhs);
    }
    inline WGPUDawnAdapterPropertiesPowerPreference* ToAPI(DawnAdapterPropertiesPowerPreference* rhs) {
        return reinterpret_cast<WGPUDawnAdapterPropertiesPowerPreference*>(rhs);
    }
    inline const WGPUDawnAdapterPropertiesPowerPreference* ToAPI(const WGPUDawnAdapterPropertiesPowerPreference* rhs) {
        return rhs;
    }
    inline WGPUDawnAdapterPropertiesPowerPreference* ToAPI(WGPUDawnAdapterPropertiesPowerPreference* rhs) {
        return rhs;
    }
    inline const DawnAdapterPropertiesPowerPreference* FromAPI(const WGPUDawnAdapterPropertiesPowerPreference* rhs) {
        return reinterpret_cast<const DawnAdapterPropertiesPowerPreference*>(rhs);
    }
    inline DawnAdapterPropertiesPowerPreference* FromAPI(WGPUDawnAdapterPropertiesPowerPreference* rhs) {
        return reinterpret_cast<DawnAdapterPropertiesPowerPreference*>(rhs);
    }
    inline const DawnAdapterPropertiesPowerPreference* FromAPI(const DawnAdapterPropertiesPowerPreference* rhs) {
        return rhs;
    }
    inline DawnAdapterPropertiesPowerPreference* FromAPI(DawnAdapterPropertiesPowerPreference* rhs) {
        return rhs;
    }
    inline const wgpu::DawnAdapterPropertiesPowerPreference* ToCppAPI(const DawnAdapterPropertiesPowerPreference* rhs) {
        return reinterpret_cast<const wgpu::DawnAdapterPropertiesPowerPreference*>(rhs);
    }
    inline wgpu::DawnAdapterPropertiesPowerPreference* ToCppAPI(DawnAdapterPropertiesPowerPreference* rhs) {
        return reinterpret_cast<wgpu::DawnAdapterPropertiesPowerPreference*>(rhs);
    }
    inline const DawnAdapterPropertiesPowerPreference* FromCppAPI(const wgpu::DawnAdapterPropertiesPowerPreference* rhs) {
        return reinterpret_cast<const DawnAdapterPropertiesPowerPreference*>(rhs);
    }
    inline DawnAdapterPropertiesPowerPreference* FromCppAPI(wgpu::DawnAdapterPropertiesPowerPreference* rhs) {
        return reinterpret_cast<DawnAdapterPropertiesPowerPreference*>(rhs);
    }
inline const DawnAdapterPropertiesPowerPreference& FromAPI(const WGPUDawnAdapterPropertiesPowerPreference& rhs) {
        return *reinterpret_cast<const DawnAdapterPropertiesPowerPreference*>(&rhs);
    }
    inline DawnAdapterPropertiesPowerPreference& FromAPI(WGPUDawnAdapterPropertiesPowerPreference& rhs) {
        return *reinterpret_cast<DawnAdapterPropertiesPowerPreference*>(&rhs);
    }
    inline const DawnAdapterPropertiesPowerPreference& FromAPI(const DawnAdapterPropertiesPowerPreference& rhs) {
        return rhs;
    }
    inline DawnAdapterPropertiesPowerPreference& FromAPI(DawnAdapterPropertiesPowerPreference& rhs) {
        return rhs;
    }
inline const WGPUDawnBufferDescriptorErrorInfoFromWireClient* ToAPI(const DawnBufferDescriptorErrorInfoFromWireClient* rhs) {
        return reinterpret_cast<const WGPUDawnBufferDescriptorErrorInfoFromWireClient*>(rhs);
    }
    inline WGPUDawnBufferDescriptorErrorInfoFromWireClient* ToAPI(DawnBufferDescriptorErrorInfoFromWireClient* rhs) {
        return reinterpret_cast<WGPUDawnBufferDescriptorErrorInfoFromWireClient*>(rhs);
    }
    inline const WGPUDawnBufferDescriptorErrorInfoFromWireClient* ToAPI(const WGPUDawnBufferDescriptorErrorInfoFromWireClient* rhs) {
        return rhs;
    }
    inline WGPUDawnBufferDescriptorErrorInfoFromWireClient* ToAPI(WGPUDawnBufferDescriptorErrorInfoFromWireClient* rhs) {
        return rhs;
    }
    inline const DawnBufferDescriptorErrorInfoFromWireClient* FromAPI(const WGPUDawnBufferDescriptorErrorInfoFromWireClient* rhs) {
        return reinterpret_cast<const DawnBufferDescriptorErrorInfoFromWireClient*>(rhs);
    }
    inline DawnBufferDescriptorErrorInfoFromWireClient* FromAPI(WGPUDawnBufferDescriptorErrorInfoFromWireClient* rhs) {
        return reinterpret_cast<DawnBufferDescriptorErrorInfoFromWireClient*>(rhs);
    }
    inline const DawnBufferDescriptorErrorInfoFromWireClient* FromAPI(const DawnBufferDescriptorErrorInfoFromWireClient* rhs) {
        return rhs;
    }
    inline DawnBufferDescriptorErrorInfoFromWireClient* FromAPI(DawnBufferDescriptorErrorInfoFromWireClient* rhs) {
        return rhs;
    }
    inline const wgpu::DawnBufferDescriptorErrorInfoFromWireClient* ToCppAPI(const DawnBufferDescriptorErrorInfoFromWireClient* rhs) {
        return reinterpret_cast<const wgpu::DawnBufferDescriptorErrorInfoFromWireClient*>(rhs);
    }
    inline wgpu::DawnBufferDescriptorErrorInfoFromWireClient* ToCppAPI(DawnBufferDescriptorErrorInfoFromWireClient* rhs) {
        return reinterpret_cast<wgpu::DawnBufferDescriptorErrorInfoFromWireClient*>(rhs);
    }
    inline const DawnBufferDescriptorErrorInfoFromWireClient* FromCppAPI(const wgpu::DawnBufferDescriptorErrorInfoFromWireClient* rhs) {
        return reinterpret_cast<const DawnBufferDescriptorErrorInfoFromWireClient*>(rhs);
    }
    inline DawnBufferDescriptorErrorInfoFromWireClient* FromCppAPI(wgpu::DawnBufferDescriptorErrorInfoFromWireClient* rhs) {
        return reinterpret_cast<DawnBufferDescriptorErrorInfoFromWireClient*>(rhs);
    }
inline const DawnBufferDescriptorErrorInfoFromWireClient& FromAPI(const WGPUDawnBufferDescriptorErrorInfoFromWireClient& rhs) {
        return *reinterpret_cast<const DawnBufferDescriptorErrorInfoFromWireClient*>(&rhs);
    }
    inline DawnBufferDescriptorErrorInfoFromWireClient& FromAPI(WGPUDawnBufferDescriptorErrorInfoFromWireClient& rhs) {
        return *reinterpret_cast<DawnBufferDescriptorErrorInfoFromWireClient*>(&rhs);
    }
    inline const DawnBufferDescriptorErrorInfoFromWireClient& FromAPI(const DawnBufferDescriptorErrorInfoFromWireClient& rhs) {
        return rhs;
    }
    inline DawnBufferDescriptorErrorInfoFromWireClient& FromAPI(DawnBufferDescriptorErrorInfoFromWireClient& rhs) {
        return rhs;
    }
inline const WGPUDawnCacheDeviceDescriptor* ToAPI(const DawnCacheDeviceDescriptor* rhs) {
        return reinterpret_cast<const WGPUDawnCacheDeviceDescriptor*>(rhs);
    }
    inline WGPUDawnCacheDeviceDescriptor* ToAPI(DawnCacheDeviceDescriptor* rhs) {
        return reinterpret_cast<WGPUDawnCacheDeviceDescriptor*>(rhs);
    }
    inline const WGPUDawnCacheDeviceDescriptor* ToAPI(const WGPUDawnCacheDeviceDescriptor* rhs) {
        return rhs;
    }
    inline WGPUDawnCacheDeviceDescriptor* ToAPI(WGPUDawnCacheDeviceDescriptor* rhs) {
        return rhs;
    }
    inline const DawnCacheDeviceDescriptor* FromAPI(const WGPUDawnCacheDeviceDescriptor* rhs) {
        return reinterpret_cast<const DawnCacheDeviceDescriptor*>(rhs);
    }
    inline DawnCacheDeviceDescriptor* FromAPI(WGPUDawnCacheDeviceDescriptor* rhs) {
        return reinterpret_cast<DawnCacheDeviceDescriptor*>(rhs);
    }
    inline const DawnCacheDeviceDescriptor* FromAPI(const DawnCacheDeviceDescriptor* rhs) {
        return rhs;
    }
    inline DawnCacheDeviceDescriptor* FromAPI(DawnCacheDeviceDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::DawnCacheDeviceDescriptor* ToCppAPI(const DawnCacheDeviceDescriptor* rhs) {
        return reinterpret_cast<const wgpu::DawnCacheDeviceDescriptor*>(rhs);
    }
    inline wgpu::DawnCacheDeviceDescriptor* ToCppAPI(DawnCacheDeviceDescriptor* rhs) {
        return reinterpret_cast<wgpu::DawnCacheDeviceDescriptor*>(rhs);
    }
    inline const DawnCacheDeviceDescriptor* FromCppAPI(const wgpu::DawnCacheDeviceDescriptor* rhs) {
        return reinterpret_cast<const DawnCacheDeviceDescriptor*>(rhs);
    }
    inline DawnCacheDeviceDescriptor* FromCppAPI(wgpu::DawnCacheDeviceDescriptor* rhs) {
        return reinterpret_cast<DawnCacheDeviceDescriptor*>(rhs);
    }
inline const DawnCacheDeviceDescriptor& FromAPI(const WGPUDawnCacheDeviceDescriptor& rhs) {
        return *reinterpret_cast<const DawnCacheDeviceDescriptor*>(&rhs);
    }
    inline DawnCacheDeviceDescriptor& FromAPI(WGPUDawnCacheDeviceDescriptor& rhs) {
        return *reinterpret_cast<DawnCacheDeviceDescriptor*>(&rhs);
    }
    inline const DawnCacheDeviceDescriptor& FromAPI(const DawnCacheDeviceDescriptor& rhs) {
        return rhs;
    }
    inline DawnCacheDeviceDescriptor& FromAPI(DawnCacheDeviceDescriptor& rhs) {
        return rhs;
    }
inline const WGPUDawnCompilationMessageUtf16* ToAPI(const DawnCompilationMessageUtf16* rhs) {
        return reinterpret_cast<const WGPUDawnCompilationMessageUtf16*>(rhs);
    }
    inline WGPUDawnCompilationMessageUtf16* ToAPI(DawnCompilationMessageUtf16* rhs) {
        return reinterpret_cast<WGPUDawnCompilationMessageUtf16*>(rhs);
    }
    inline const WGPUDawnCompilationMessageUtf16* ToAPI(const WGPUDawnCompilationMessageUtf16* rhs) {
        return rhs;
    }
    inline WGPUDawnCompilationMessageUtf16* ToAPI(WGPUDawnCompilationMessageUtf16* rhs) {
        return rhs;
    }
    inline const DawnCompilationMessageUtf16* FromAPI(const WGPUDawnCompilationMessageUtf16* rhs) {
        return reinterpret_cast<const DawnCompilationMessageUtf16*>(rhs);
    }
    inline DawnCompilationMessageUtf16* FromAPI(WGPUDawnCompilationMessageUtf16* rhs) {
        return reinterpret_cast<DawnCompilationMessageUtf16*>(rhs);
    }
    inline const DawnCompilationMessageUtf16* FromAPI(const DawnCompilationMessageUtf16* rhs) {
        return rhs;
    }
    inline DawnCompilationMessageUtf16* FromAPI(DawnCompilationMessageUtf16* rhs) {
        return rhs;
    }
    inline const wgpu::DawnCompilationMessageUtf16* ToCppAPI(const DawnCompilationMessageUtf16* rhs) {
        return reinterpret_cast<const wgpu::DawnCompilationMessageUtf16*>(rhs);
    }
    inline wgpu::DawnCompilationMessageUtf16* ToCppAPI(DawnCompilationMessageUtf16* rhs) {
        return reinterpret_cast<wgpu::DawnCompilationMessageUtf16*>(rhs);
    }
    inline const DawnCompilationMessageUtf16* FromCppAPI(const wgpu::DawnCompilationMessageUtf16* rhs) {
        return reinterpret_cast<const DawnCompilationMessageUtf16*>(rhs);
    }
    inline DawnCompilationMessageUtf16* FromCppAPI(wgpu::DawnCompilationMessageUtf16* rhs) {
        return reinterpret_cast<DawnCompilationMessageUtf16*>(rhs);
    }
inline const DawnCompilationMessageUtf16& FromAPI(const WGPUDawnCompilationMessageUtf16& rhs) {
        return *reinterpret_cast<const DawnCompilationMessageUtf16*>(&rhs);
    }
    inline DawnCompilationMessageUtf16& FromAPI(WGPUDawnCompilationMessageUtf16& rhs) {
        return *reinterpret_cast<DawnCompilationMessageUtf16*>(&rhs);
    }
    inline const DawnCompilationMessageUtf16& FromAPI(const DawnCompilationMessageUtf16& rhs) {
        return rhs;
    }
    inline DawnCompilationMessageUtf16& FromAPI(DawnCompilationMessageUtf16& rhs) {
        return rhs;
    }
inline const WGPUDawnConsumeAdapterDescriptor* ToAPI(const DawnConsumeAdapterDescriptor* rhs) {
        return reinterpret_cast<const WGPUDawnConsumeAdapterDescriptor*>(rhs);
    }
    inline WGPUDawnConsumeAdapterDescriptor* ToAPI(DawnConsumeAdapterDescriptor* rhs) {
        return reinterpret_cast<WGPUDawnConsumeAdapterDescriptor*>(rhs);
    }
    inline const WGPUDawnConsumeAdapterDescriptor* ToAPI(const WGPUDawnConsumeAdapterDescriptor* rhs) {
        return rhs;
    }
    inline WGPUDawnConsumeAdapterDescriptor* ToAPI(WGPUDawnConsumeAdapterDescriptor* rhs) {
        return rhs;
    }
    inline const DawnConsumeAdapterDescriptor* FromAPI(const WGPUDawnConsumeAdapterDescriptor* rhs) {
        return reinterpret_cast<const DawnConsumeAdapterDescriptor*>(rhs);
    }
    inline DawnConsumeAdapterDescriptor* FromAPI(WGPUDawnConsumeAdapterDescriptor* rhs) {
        return reinterpret_cast<DawnConsumeAdapterDescriptor*>(rhs);
    }
    inline const DawnConsumeAdapterDescriptor* FromAPI(const DawnConsumeAdapterDescriptor* rhs) {
        return rhs;
    }
    inline DawnConsumeAdapterDescriptor* FromAPI(DawnConsumeAdapterDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::DawnConsumeAdapterDescriptor* ToCppAPI(const DawnConsumeAdapterDescriptor* rhs) {
        return reinterpret_cast<const wgpu::DawnConsumeAdapterDescriptor*>(rhs);
    }
    inline wgpu::DawnConsumeAdapterDescriptor* ToCppAPI(DawnConsumeAdapterDescriptor* rhs) {
        return reinterpret_cast<wgpu::DawnConsumeAdapterDescriptor*>(rhs);
    }
    inline const DawnConsumeAdapterDescriptor* FromCppAPI(const wgpu::DawnConsumeAdapterDescriptor* rhs) {
        return reinterpret_cast<const DawnConsumeAdapterDescriptor*>(rhs);
    }
    inline DawnConsumeAdapterDescriptor* FromCppAPI(wgpu::DawnConsumeAdapterDescriptor* rhs) {
        return reinterpret_cast<DawnConsumeAdapterDescriptor*>(rhs);
    }
inline const DawnConsumeAdapterDescriptor& FromAPI(const WGPUDawnConsumeAdapterDescriptor& rhs) {
        return *reinterpret_cast<const DawnConsumeAdapterDescriptor*>(&rhs);
    }
    inline DawnConsumeAdapterDescriptor& FromAPI(WGPUDawnConsumeAdapterDescriptor& rhs) {
        return *reinterpret_cast<DawnConsumeAdapterDescriptor*>(&rhs);
    }
    inline const DawnConsumeAdapterDescriptor& FromAPI(const DawnConsumeAdapterDescriptor& rhs) {
        return rhs;
    }
    inline DawnConsumeAdapterDescriptor& FromAPI(DawnConsumeAdapterDescriptor& rhs) {
        return rhs;
    }
inline const WGPUDawnDeviceAllocatorControl* ToAPI(const DawnDeviceAllocatorControl* rhs) {
        return reinterpret_cast<const WGPUDawnDeviceAllocatorControl*>(rhs);
    }
    inline WGPUDawnDeviceAllocatorControl* ToAPI(DawnDeviceAllocatorControl* rhs) {
        return reinterpret_cast<WGPUDawnDeviceAllocatorControl*>(rhs);
    }
    inline const WGPUDawnDeviceAllocatorControl* ToAPI(const WGPUDawnDeviceAllocatorControl* rhs) {
        return rhs;
    }
    inline WGPUDawnDeviceAllocatorControl* ToAPI(WGPUDawnDeviceAllocatorControl* rhs) {
        return rhs;
    }
    inline const DawnDeviceAllocatorControl* FromAPI(const WGPUDawnDeviceAllocatorControl* rhs) {
        return reinterpret_cast<const DawnDeviceAllocatorControl*>(rhs);
    }
    inline DawnDeviceAllocatorControl* FromAPI(WGPUDawnDeviceAllocatorControl* rhs) {
        return reinterpret_cast<DawnDeviceAllocatorControl*>(rhs);
    }
    inline const DawnDeviceAllocatorControl* FromAPI(const DawnDeviceAllocatorControl* rhs) {
        return rhs;
    }
    inline DawnDeviceAllocatorControl* FromAPI(DawnDeviceAllocatorControl* rhs) {
        return rhs;
    }
    inline const wgpu::DawnDeviceAllocatorControl* ToCppAPI(const DawnDeviceAllocatorControl* rhs) {
        return reinterpret_cast<const wgpu::DawnDeviceAllocatorControl*>(rhs);
    }
    inline wgpu::DawnDeviceAllocatorControl* ToCppAPI(DawnDeviceAllocatorControl* rhs) {
        return reinterpret_cast<wgpu::DawnDeviceAllocatorControl*>(rhs);
    }
    inline const DawnDeviceAllocatorControl* FromCppAPI(const wgpu::DawnDeviceAllocatorControl* rhs) {
        return reinterpret_cast<const DawnDeviceAllocatorControl*>(rhs);
    }
    inline DawnDeviceAllocatorControl* FromCppAPI(wgpu::DawnDeviceAllocatorControl* rhs) {
        return reinterpret_cast<DawnDeviceAllocatorControl*>(rhs);
    }
inline const DawnDeviceAllocatorControl& FromAPI(const WGPUDawnDeviceAllocatorControl& rhs) {
        return *reinterpret_cast<const DawnDeviceAllocatorControl*>(&rhs);
    }
    inline DawnDeviceAllocatorControl& FromAPI(WGPUDawnDeviceAllocatorControl& rhs) {
        return *reinterpret_cast<DawnDeviceAllocatorControl*>(&rhs);
    }
    inline const DawnDeviceAllocatorControl& FromAPI(const DawnDeviceAllocatorControl& rhs) {
        return rhs;
    }
    inline DawnDeviceAllocatorControl& FromAPI(DawnDeviceAllocatorControl& rhs) {
        return rhs;
    }
inline const WGPUDawnDrmFormatProperties* ToAPI(const DawnDrmFormatProperties* rhs) {
        return reinterpret_cast<const WGPUDawnDrmFormatProperties*>(rhs);
    }
    inline WGPUDawnDrmFormatProperties* ToAPI(DawnDrmFormatProperties* rhs) {
        return reinterpret_cast<WGPUDawnDrmFormatProperties*>(rhs);
    }
    inline const WGPUDawnDrmFormatProperties* ToAPI(const WGPUDawnDrmFormatProperties* rhs) {
        return rhs;
    }
    inline WGPUDawnDrmFormatProperties* ToAPI(WGPUDawnDrmFormatProperties* rhs) {
        return rhs;
    }
    inline const DawnDrmFormatProperties* FromAPI(const WGPUDawnDrmFormatProperties* rhs) {
        return reinterpret_cast<const DawnDrmFormatProperties*>(rhs);
    }
    inline DawnDrmFormatProperties* FromAPI(WGPUDawnDrmFormatProperties* rhs) {
        return reinterpret_cast<DawnDrmFormatProperties*>(rhs);
    }
    inline const DawnDrmFormatProperties* FromAPI(const DawnDrmFormatProperties* rhs) {
        return rhs;
    }
    inline DawnDrmFormatProperties* FromAPI(DawnDrmFormatProperties* rhs) {
        return rhs;
    }
    inline const wgpu::DawnDrmFormatProperties* ToCppAPI(const DawnDrmFormatProperties* rhs) {
        return reinterpret_cast<const wgpu::DawnDrmFormatProperties*>(rhs);
    }
    inline wgpu::DawnDrmFormatProperties* ToCppAPI(DawnDrmFormatProperties* rhs) {
        return reinterpret_cast<wgpu::DawnDrmFormatProperties*>(rhs);
    }
    inline const DawnDrmFormatProperties* FromCppAPI(const wgpu::DawnDrmFormatProperties* rhs) {
        return reinterpret_cast<const DawnDrmFormatProperties*>(rhs);
    }
    inline DawnDrmFormatProperties* FromCppAPI(wgpu::DawnDrmFormatProperties* rhs) {
        return reinterpret_cast<DawnDrmFormatProperties*>(rhs);
    }
inline const DawnDrmFormatProperties& FromAPI(const WGPUDawnDrmFormatProperties& rhs) {
        return *reinterpret_cast<const DawnDrmFormatProperties*>(&rhs);
    }
    inline DawnDrmFormatProperties& FromAPI(WGPUDawnDrmFormatProperties& rhs) {
        return *reinterpret_cast<DawnDrmFormatProperties*>(&rhs);
    }
    inline const DawnDrmFormatProperties& FromAPI(const DawnDrmFormatProperties& rhs) {
        return rhs;
    }
    inline DawnDrmFormatProperties& FromAPI(DawnDrmFormatProperties& rhs) {
        return rhs;
    }
inline const WGPUDawnEncoderInternalUsageDescriptor* ToAPI(const DawnEncoderInternalUsageDescriptor* rhs) {
        return reinterpret_cast<const WGPUDawnEncoderInternalUsageDescriptor*>(rhs);
    }
    inline WGPUDawnEncoderInternalUsageDescriptor* ToAPI(DawnEncoderInternalUsageDescriptor* rhs) {
        return reinterpret_cast<WGPUDawnEncoderInternalUsageDescriptor*>(rhs);
    }
    inline const WGPUDawnEncoderInternalUsageDescriptor* ToAPI(const WGPUDawnEncoderInternalUsageDescriptor* rhs) {
        return rhs;
    }
    inline WGPUDawnEncoderInternalUsageDescriptor* ToAPI(WGPUDawnEncoderInternalUsageDescriptor* rhs) {
        return rhs;
    }
    inline const DawnEncoderInternalUsageDescriptor* FromAPI(const WGPUDawnEncoderInternalUsageDescriptor* rhs) {
        return reinterpret_cast<const DawnEncoderInternalUsageDescriptor*>(rhs);
    }
    inline DawnEncoderInternalUsageDescriptor* FromAPI(WGPUDawnEncoderInternalUsageDescriptor* rhs) {
        return reinterpret_cast<DawnEncoderInternalUsageDescriptor*>(rhs);
    }
    inline const DawnEncoderInternalUsageDescriptor* FromAPI(const DawnEncoderInternalUsageDescriptor* rhs) {
        return rhs;
    }
    inline DawnEncoderInternalUsageDescriptor* FromAPI(DawnEncoderInternalUsageDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::DawnEncoderInternalUsageDescriptor* ToCppAPI(const DawnEncoderInternalUsageDescriptor* rhs) {
        return reinterpret_cast<const wgpu::DawnEncoderInternalUsageDescriptor*>(rhs);
    }
    inline wgpu::DawnEncoderInternalUsageDescriptor* ToCppAPI(DawnEncoderInternalUsageDescriptor* rhs) {
        return reinterpret_cast<wgpu::DawnEncoderInternalUsageDescriptor*>(rhs);
    }
    inline const DawnEncoderInternalUsageDescriptor* FromCppAPI(const wgpu::DawnEncoderInternalUsageDescriptor* rhs) {
        return reinterpret_cast<const DawnEncoderInternalUsageDescriptor*>(rhs);
    }
    inline DawnEncoderInternalUsageDescriptor* FromCppAPI(wgpu::DawnEncoderInternalUsageDescriptor* rhs) {
        return reinterpret_cast<DawnEncoderInternalUsageDescriptor*>(rhs);
    }
inline const DawnEncoderInternalUsageDescriptor& FromAPI(const WGPUDawnEncoderInternalUsageDescriptor& rhs) {
        return *reinterpret_cast<const DawnEncoderInternalUsageDescriptor*>(&rhs);
    }
    inline DawnEncoderInternalUsageDescriptor& FromAPI(WGPUDawnEncoderInternalUsageDescriptor& rhs) {
        return *reinterpret_cast<DawnEncoderInternalUsageDescriptor*>(&rhs);
    }
    inline const DawnEncoderInternalUsageDescriptor& FromAPI(const DawnEncoderInternalUsageDescriptor& rhs) {
        return rhs;
    }
    inline DawnEncoderInternalUsageDescriptor& FromAPI(DawnEncoderInternalUsageDescriptor& rhs) {
        return rhs;
    }
inline const WGPUDawnFakeBufferOOMForTesting* ToAPI(const DawnFakeBufferOOMForTesting* rhs) {
        return reinterpret_cast<const WGPUDawnFakeBufferOOMForTesting*>(rhs);
    }
    inline WGPUDawnFakeBufferOOMForTesting* ToAPI(DawnFakeBufferOOMForTesting* rhs) {
        return reinterpret_cast<WGPUDawnFakeBufferOOMForTesting*>(rhs);
    }
    inline const WGPUDawnFakeBufferOOMForTesting* ToAPI(const WGPUDawnFakeBufferOOMForTesting* rhs) {
        return rhs;
    }
    inline WGPUDawnFakeBufferOOMForTesting* ToAPI(WGPUDawnFakeBufferOOMForTesting* rhs) {
        return rhs;
    }
    inline const DawnFakeBufferOOMForTesting* FromAPI(const WGPUDawnFakeBufferOOMForTesting* rhs) {
        return reinterpret_cast<const DawnFakeBufferOOMForTesting*>(rhs);
    }
    inline DawnFakeBufferOOMForTesting* FromAPI(WGPUDawnFakeBufferOOMForTesting* rhs) {
        return reinterpret_cast<DawnFakeBufferOOMForTesting*>(rhs);
    }
    inline const DawnFakeBufferOOMForTesting* FromAPI(const DawnFakeBufferOOMForTesting* rhs) {
        return rhs;
    }
    inline DawnFakeBufferOOMForTesting* FromAPI(DawnFakeBufferOOMForTesting* rhs) {
        return rhs;
    }
    inline const wgpu::DawnFakeBufferOOMForTesting* ToCppAPI(const DawnFakeBufferOOMForTesting* rhs) {
        return reinterpret_cast<const wgpu::DawnFakeBufferOOMForTesting*>(rhs);
    }
    inline wgpu::DawnFakeBufferOOMForTesting* ToCppAPI(DawnFakeBufferOOMForTesting* rhs) {
        return reinterpret_cast<wgpu::DawnFakeBufferOOMForTesting*>(rhs);
    }
    inline const DawnFakeBufferOOMForTesting* FromCppAPI(const wgpu::DawnFakeBufferOOMForTesting* rhs) {
        return reinterpret_cast<const DawnFakeBufferOOMForTesting*>(rhs);
    }
    inline DawnFakeBufferOOMForTesting* FromCppAPI(wgpu::DawnFakeBufferOOMForTesting* rhs) {
        return reinterpret_cast<DawnFakeBufferOOMForTesting*>(rhs);
    }
inline const DawnFakeBufferOOMForTesting& FromAPI(const WGPUDawnFakeBufferOOMForTesting& rhs) {
        return *reinterpret_cast<const DawnFakeBufferOOMForTesting*>(&rhs);
    }
    inline DawnFakeBufferOOMForTesting& FromAPI(WGPUDawnFakeBufferOOMForTesting& rhs) {
        return *reinterpret_cast<DawnFakeBufferOOMForTesting*>(&rhs);
    }
    inline const DawnFakeBufferOOMForTesting& FromAPI(const DawnFakeBufferOOMForTesting& rhs) {
        return rhs;
    }
    inline DawnFakeBufferOOMForTesting& FromAPI(DawnFakeBufferOOMForTesting& rhs) {
        return rhs;
    }
inline const WGPUDawnFakeDeviceInitializeErrorForTesting* ToAPI(const DawnFakeDeviceInitializeErrorForTesting* rhs) {
        return reinterpret_cast<const WGPUDawnFakeDeviceInitializeErrorForTesting*>(rhs);
    }
    inline WGPUDawnFakeDeviceInitializeErrorForTesting* ToAPI(DawnFakeDeviceInitializeErrorForTesting* rhs) {
        return reinterpret_cast<WGPUDawnFakeDeviceInitializeErrorForTesting*>(rhs);
    }
    inline const WGPUDawnFakeDeviceInitializeErrorForTesting* ToAPI(const WGPUDawnFakeDeviceInitializeErrorForTesting* rhs) {
        return rhs;
    }
    inline WGPUDawnFakeDeviceInitializeErrorForTesting* ToAPI(WGPUDawnFakeDeviceInitializeErrorForTesting* rhs) {
        return rhs;
    }
    inline const DawnFakeDeviceInitializeErrorForTesting* FromAPI(const WGPUDawnFakeDeviceInitializeErrorForTesting* rhs) {
        return reinterpret_cast<const DawnFakeDeviceInitializeErrorForTesting*>(rhs);
    }
    inline DawnFakeDeviceInitializeErrorForTesting* FromAPI(WGPUDawnFakeDeviceInitializeErrorForTesting* rhs) {
        return reinterpret_cast<DawnFakeDeviceInitializeErrorForTesting*>(rhs);
    }
    inline const DawnFakeDeviceInitializeErrorForTesting* FromAPI(const DawnFakeDeviceInitializeErrorForTesting* rhs) {
        return rhs;
    }
    inline DawnFakeDeviceInitializeErrorForTesting* FromAPI(DawnFakeDeviceInitializeErrorForTesting* rhs) {
        return rhs;
    }
    inline const wgpu::DawnFakeDeviceInitializeErrorForTesting* ToCppAPI(const DawnFakeDeviceInitializeErrorForTesting* rhs) {
        return reinterpret_cast<const wgpu::DawnFakeDeviceInitializeErrorForTesting*>(rhs);
    }
    inline wgpu::DawnFakeDeviceInitializeErrorForTesting* ToCppAPI(DawnFakeDeviceInitializeErrorForTesting* rhs) {
        return reinterpret_cast<wgpu::DawnFakeDeviceInitializeErrorForTesting*>(rhs);
    }
    inline const DawnFakeDeviceInitializeErrorForTesting* FromCppAPI(const wgpu::DawnFakeDeviceInitializeErrorForTesting* rhs) {
        return reinterpret_cast<const DawnFakeDeviceInitializeErrorForTesting*>(rhs);
    }
    inline DawnFakeDeviceInitializeErrorForTesting* FromCppAPI(wgpu::DawnFakeDeviceInitializeErrorForTesting* rhs) {
        return reinterpret_cast<DawnFakeDeviceInitializeErrorForTesting*>(rhs);
    }
inline const DawnFakeDeviceInitializeErrorForTesting& FromAPI(const WGPUDawnFakeDeviceInitializeErrorForTesting& rhs) {
        return *reinterpret_cast<const DawnFakeDeviceInitializeErrorForTesting*>(&rhs);
    }
    inline DawnFakeDeviceInitializeErrorForTesting& FromAPI(WGPUDawnFakeDeviceInitializeErrorForTesting& rhs) {
        return *reinterpret_cast<DawnFakeDeviceInitializeErrorForTesting*>(&rhs);
    }
    inline const DawnFakeDeviceInitializeErrorForTesting& FromAPI(const DawnFakeDeviceInitializeErrorForTesting& rhs) {
        return rhs;
    }
    inline DawnFakeDeviceInitializeErrorForTesting& FromAPI(DawnFakeDeviceInitializeErrorForTesting& rhs) {
        return rhs;
    }
inline const WGPUDawnHostMappedPointerLimits* ToAPI(const DawnHostMappedPointerLimits* rhs) {
        return reinterpret_cast<const WGPUDawnHostMappedPointerLimits*>(rhs);
    }
    inline WGPUDawnHostMappedPointerLimits* ToAPI(DawnHostMappedPointerLimits* rhs) {
        return reinterpret_cast<WGPUDawnHostMappedPointerLimits*>(rhs);
    }
    inline const WGPUDawnHostMappedPointerLimits* ToAPI(const WGPUDawnHostMappedPointerLimits* rhs) {
        return rhs;
    }
    inline WGPUDawnHostMappedPointerLimits* ToAPI(WGPUDawnHostMappedPointerLimits* rhs) {
        return rhs;
    }
    inline const DawnHostMappedPointerLimits* FromAPI(const WGPUDawnHostMappedPointerLimits* rhs) {
        return reinterpret_cast<const DawnHostMappedPointerLimits*>(rhs);
    }
    inline DawnHostMappedPointerLimits* FromAPI(WGPUDawnHostMappedPointerLimits* rhs) {
        return reinterpret_cast<DawnHostMappedPointerLimits*>(rhs);
    }
    inline const DawnHostMappedPointerLimits* FromAPI(const DawnHostMappedPointerLimits* rhs) {
        return rhs;
    }
    inline DawnHostMappedPointerLimits* FromAPI(DawnHostMappedPointerLimits* rhs) {
        return rhs;
    }
    inline const wgpu::DawnHostMappedPointerLimits* ToCppAPI(const DawnHostMappedPointerLimits* rhs) {
        return reinterpret_cast<const wgpu::DawnHostMappedPointerLimits*>(rhs);
    }
    inline wgpu::DawnHostMappedPointerLimits* ToCppAPI(DawnHostMappedPointerLimits* rhs) {
        return reinterpret_cast<wgpu::DawnHostMappedPointerLimits*>(rhs);
    }
    inline const DawnHostMappedPointerLimits* FromCppAPI(const wgpu::DawnHostMappedPointerLimits* rhs) {
        return reinterpret_cast<const DawnHostMappedPointerLimits*>(rhs);
    }
    inline DawnHostMappedPointerLimits* FromCppAPI(wgpu::DawnHostMappedPointerLimits* rhs) {
        return reinterpret_cast<DawnHostMappedPointerLimits*>(rhs);
    }
inline const DawnHostMappedPointerLimits& FromAPI(const WGPUDawnHostMappedPointerLimits& rhs) {
        return *reinterpret_cast<const DawnHostMappedPointerLimits*>(&rhs);
    }
    inline DawnHostMappedPointerLimits& FromAPI(WGPUDawnHostMappedPointerLimits& rhs) {
        return *reinterpret_cast<DawnHostMappedPointerLimits*>(&rhs);
    }
    inline const DawnHostMappedPointerLimits& FromAPI(const DawnHostMappedPointerLimits& rhs) {
        return rhs;
    }
    inline DawnHostMappedPointerLimits& FromAPI(DawnHostMappedPointerLimits& rhs) {
        return rhs;
    }
inline const WGPUDawnInjectedInvalidSType* ToAPI(const DawnInjectedInvalidSType* rhs) {
        return reinterpret_cast<const WGPUDawnInjectedInvalidSType*>(rhs);
    }
    inline WGPUDawnInjectedInvalidSType* ToAPI(DawnInjectedInvalidSType* rhs) {
        return reinterpret_cast<WGPUDawnInjectedInvalidSType*>(rhs);
    }
    inline const WGPUDawnInjectedInvalidSType* ToAPI(const WGPUDawnInjectedInvalidSType* rhs) {
        return rhs;
    }
    inline WGPUDawnInjectedInvalidSType* ToAPI(WGPUDawnInjectedInvalidSType* rhs) {
        return rhs;
    }
    inline const DawnInjectedInvalidSType* FromAPI(const WGPUDawnInjectedInvalidSType* rhs) {
        return reinterpret_cast<const DawnInjectedInvalidSType*>(rhs);
    }
    inline DawnInjectedInvalidSType* FromAPI(WGPUDawnInjectedInvalidSType* rhs) {
        return reinterpret_cast<DawnInjectedInvalidSType*>(rhs);
    }
    inline const DawnInjectedInvalidSType* FromAPI(const DawnInjectedInvalidSType* rhs) {
        return rhs;
    }
    inline DawnInjectedInvalidSType* FromAPI(DawnInjectedInvalidSType* rhs) {
        return rhs;
    }
    inline const wgpu::DawnInjectedInvalidSType* ToCppAPI(const DawnInjectedInvalidSType* rhs) {
        return reinterpret_cast<const wgpu::DawnInjectedInvalidSType*>(rhs);
    }
    inline wgpu::DawnInjectedInvalidSType* ToCppAPI(DawnInjectedInvalidSType* rhs) {
        return reinterpret_cast<wgpu::DawnInjectedInvalidSType*>(rhs);
    }
    inline const DawnInjectedInvalidSType* FromCppAPI(const wgpu::DawnInjectedInvalidSType* rhs) {
        return reinterpret_cast<const DawnInjectedInvalidSType*>(rhs);
    }
    inline DawnInjectedInvalidSType* FromCppAPI(wgpu::DawnInjectedInvalidSType* rhs) {
        return reinterpret_cast<DawnInjectedInvalidSType*>(rhs);
    }
inline const DawnInjectedInvalidSType& FromAPI(const WGPUDawnInjectedInvalidSType& rhs) {
        return *reinterpret_cast<const DawnInjectedInvalidSType*>(&rhs);
    }
    inline DawnInjectedInvalidSType& FromAPI(WGPUDawnInjectedInvalidSType& rhs) {
        return *reinterpret_cast<DawnInjectedInvalidSType*>(&rhs);
    }
    inline const DawnInjectedInvalidSType& FromAPI(const DawnInjectedInvalidSType& rhs) {
        return rhs;
    }
    inline DawnInjectedInvalidSType& FromAPI(DawnInjectedInvalidSType& rhs) {
        return rhs;
    }
inline const WGPUDawnRenderPassSampleCount* ToAPI(const DawnRenderPassSampleCount* rhs) {
        return reinterpret_cast<const WGPUDawnRenderPassSampleCount*>(rhs);
    }
    inline WGPUDawnRenderPassSampleCount* ToAPI(DawnRenderPassSampleCount* rhs) {
        return reinterpret_cast<WGPUDawnRenderPassSampleCount*>(rhs);
    }
    inline const WGPUDawnRenderPassSampleCount* ToAPI(const WGPUDawnRenderPassSampleCount* rhs) {
        return rhs;
    }
    inline WGPUDawnRenderPassSampleCount* ToAPI(WGPUDawnRenderPassSampleCount* rhs) {
        return rhs;
    }
    inline const DawnRenderPassSampleCount* FromAPI(const WGPUDawnRenderPassSampleCount* rhs) {
        return reinterpret_cast<const DawnRenderPassSampleCount*>(rhs);
    }
    inline DawnRenderPassSampleCount* FromAPI(WGPUDawnRenderPassSampleCount* rhs) {
        return reinterpret_cast<DawnRenderPassSampleCount*>(rhs);
    }
    inline const DawnRenderPassSampleCount* FromAPI(const DawnRenderPassSampleCount* rhs) {
        return rhs;
    }
    inline DawnRenderPassSampleCount* FromAPI(DawnRenderPassSampleCount* rhs) {
        return rhs;
    }
    inline const wgpu::DawnRenderPassSampleCount* ToCppAPI(const DawnRenderPassSampleCount* rhs) {
        return reinterpret_cast<const wgpu::DawnRenderPassSampleCount*>(rhs);
    }
    inline wgpu::DawnRenderPassSampleCount* ToCppAPI(DawnRenderPassSampleCount* rhs) {
        return reinterpret_cast<wgpu::DawnRenderPassSampleCount*>(rhs);
    }
    inline const DawnRenderPassSampleCount* FromCppAPI(const wgpu::DawnRenderPassSampleCount* rhs) {
        return reinterpret_cast<const DawnRenderPassSampleCount*>(rhs);
    }
    inline DawnRenderPassSampleCount* FromCppAPI(wgpu::DawnRenderPassSampleCount* rhs) {
        return reinterpret_cast<DawnRenderPassSampleCount*>(rhs);
    }
inline const DawnRenderPassSampleCount& FromAPI(const WGPUDawnRenderPassSampleCount& rhs) {
        return *reinterpret_cast<const DawnRenderPassSampleCount*>(&rhs);
    }
    inline DawnRenderPassSampleCount& FromAPI(WGPUDawnRenderPassSampleCount& rhs) {
        return *reinterpret_cast<DawnRenderPassSampleCount*>(&rhs);
    }
    inline const DawnRenderPassSampleCount& FromAPI(const DawnRenderPassSampleCount& rhs) {
        return rhs;
    }
    inline DawnRenderPassSampleCount& FromAPI(DawnRenderPassSampleCount& rhs) {
        return rhs;
    }
inline const WGPUDawnShaderModuleSPIRVOptionsDescriptor* ToAPI(const DawnShaderModuleSPIRVOptionsDescriptor* rhs) {
        return reinterpret_cast<const WGPUDawnShaderModuleSPIRVOptionsDescriptor*>(rhs);
    }
    inline WGPUDawnShaderModuleSPIRVOptionsDescriptor* ToAPI(DawnShaderModuleSPIRVOptionsDescriptor* rhs) {
        return reinterpret_cast<WGPUDawnShaderModuleSPIRVOptionsDescriptor*>(rhs);
    }
    inline const WGPUDawnShaderModuleSPIRVOptionsDescriptor* ToAPI(const WGPUDawnShaderModuleSPIRVOptionsDescriptor* rhs) {
        return rhs;
    }
    inline WGPUDawnShaderModuleSPIRVOptionsDescriptor* ToAPI(WGPUDawnShaderModuleSPIRVOptionsDescriptor* rhs) {
        return rhs;
    }
    inline const DawnShaderModuleSPIRVOptionsDescriptor* FromAPI(const WGPUDawnShaderModuleSPIRVOptionsDescriptor* rhs) {
        return reinterpret_cast<const DawnShaderModuleSPIRVOptionsDescriptor*>(rhs);
    }
    inline DawnShaderModuleSPIRVOptionsDescriptor* FromAPI(WGPUDawnShaderModuleSPIRVOptionsDescriptor* rhs) {
        return reinterpret_cast<DawnShaderModuleSPIRVOptionsDescriptor*>(rhs);
    }
    inline const DawnShaderModuleSPIRVOptionsDescriptor* FromAPI(const DawnShaderModuleSPIRVOptionsDescriptor* rhs) {
        return rhs;
    }
    inline DawnShaderModuleSPIRVOptionsDescriptor* FromAPI(DawnShaderModuleSPIRVOptionsDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::DawnShaderModuleSPIRVOptionsDescriptor* ToCppAPI(const DawnShaderModuleSPIRVOptionsDescriptor* rhs) {
        return reinterpret_cast<const wgpu::DawnShaderModuleSPIRVOptionsDescriptor*>(rhs);
    }
    inline wgpu::DawnShaderModuleSPIRVOptionsDescriptor* ToCppAPI(DawnShaderModuleSPIRVOptionsDescriptor* rhs) {
        return reinterpret_cast<wgpu::DawnShaderModuleSPIRVOptionsDescriptor*>(rhs);
    }
    inline const DawnShaderModuleSPIRVOptionsDescriptor* FromCppAPI(const wgpu::DawnShaderModuleSPIRVOptionsDescriptor* rhs) {
        return reinterpret_cast<const DawnShaderModuleSPIRVOptionsDescriptor*>(rhs);
    }
    inline DawnShaderModuleSPIRVOptionsDescriptor* FromCppAPI(wgpu::DawnShaderModuleSPIRVOptionsDescriptor* rhs) {
        return reinterpret_cast<DawnShaderModuleSPIRVOptionsDescriptor*>(rhs);
    }
inline const DawnShaderModuleSPIRVOptionsDescriptor& FromAPI(const WGPUDawnShaderModuleSPIRVOptionsDescriptor& rhs) {
        return *reinterpret_cast<const DawnShaderModuleSPIRVOptionsDescriptor*>(&rhs);
    }
    inline DawnShaderModuleSPIRVOptionsDescriptor& FromAPI(WGPUDawnShaderModuleSPIRVOptionsDescriptor& rhs) {
        return *reinterpret_cast<DawnShaderModuleSPIRVOptionsDescriptor*>(&rhs);
    }
    inline const DawnShaderModuleSPIRVOptionsDescriptor& FromAPI(const DawnShaderModuleSPIRVOptionsDescriptor& rhs) {
        return rhs;
    }
    inline DawnShaderModuleSPIRVOptionsDescriptor& FromAPI(DawnShaderModuleSPIRVOptionsDescriptor& rhs) {
        return rhs;
    }
inline const WGPUDawnShaderSourceSPIRV* ToAPI(const DawnShaderSourceSPIRV* rhs) {
        return reinterpret_cast<const WGPUDawnShaderSourceSPIRV*>(rhs);
    }
    inline WGPUDawnShaderSourceSPIRV* ToAPI(DawnShaderSourceSPIRV* rhs) {
        return reinterpret_cast<WGPUDawnShaderSourceSPIRV*>(rhs);
    }
    inline const WGPUDawnShaderSourceSPIRV* ToAPI(const WGPUDawnShaderSourceSPIRV* rhs) {
        return rhs;
    }
    inline WGPUDawnShaderSourceSPIRV* ToAPI(WGPUDawnShaderSourceSPIRV* rhs) {
        return rhs;
    }
    inline const DawnShaderSourceSPIRV* FromAPI(const WGPUDawnShaderSourceSPIRV* rhs) {
        return reinterpret_cast<const DawnShaderSourceSPIRV*>(rhs);
    }
    inline DawnShaderSourceSPIRV* FromAPI(WGPUDawnShaderSourceSPIRV* rhs) {
        return reinterpret_cast<DawnShaderSourceSPIRV*>(rhs);
    }
    inline const DawnShaderSourceSPIRV* FromAPI(const DawnShaderSourceSPIRV* rhs) {
        return rhs;
    }
    inline DawnShaderSourceSPIRV* FromAPI(DawnShaderSourceSPIRV* rhs) {
        return rhs;
    }
    inline const wgpu::DawnShaderSourceSPIRV* ToCppAPI(const DawnShaderSourceSPIRV* rhs) {
        return reinterpret_cast<const wgpu::DawnShaderSourceSPIRV*>(rhs);
    }
    inline wgpu::DawnShaderSourceSPIRV* ToCppAPI(DawnShaderSourceSPIRV* rhs) {
        return reinterpret_cast<wgpu::DawnShaderSourceSPIRV*>(rhs);
    }
    inline const DawnShaderSourceSPIRV* FromCppAPI(const wgpu::DawnShaderSourceSPIRV* rhs) {
        return reinterpret_cast<const DawnShaderSourceSPIRV*>(rhs);
    }
    inline DawnShaderSourceSPIRV* FromCppAPI(wgpu::DawnShaderSourceSPIRV* rhs) {
        return reinterpret_cast<DawnShaderSourceSPIRV*>(rhs);
    }
inline const DawnShaderSourceSPIRV& FromAPI(const WGPUDawnShaderSourceSPIRV& rhs) {
        return *reinterpret_cast<const DawnShaderSourceSPIRV*>(&rhs);
    }
    inline DawnShaderSourceSPIRV& FromAPI(WGPUDawnShaderSourceSPIRV& rhs) {
        return *reinterpret_cast<DawnShaderSourceSPIRV*>(&rhs);
    }
    inline const DawnShaderSourceSPIRV& FromAPI(const DawnShaderSourceSPIRV& rhs) {
        return rhs;
    }
    inline DawnShaderSourceSPIRV& FromAPI(DawnShaderSourceSPIRV& rhs) {
        return rhs;
    }
inline const WGPUDawnTexelCopyBufferRowAlignmentLimits* ToAPI(const DawnTexelCopyBufferRowAlignmentLimits* rhs) {
        return reinterpret_cast<const WGPUDawnTexelCopyBufferRowAlignmentLimits*>(rhs);
    }
    inline WGPUDawnTexelCopyBufferRowAlignmentLimits* ToAPI(DawnTexelCopyBufferRowAlignmentLimits* rhs) {
        return reinterpret_cast<WGPUDawnTexelCopyBufferRowAlignmentLimits*>(rhs);
    }
    inline const WGPUDawnTexelCopyBufferRowAlignmentLimits* ToAPI(const WGPUDawnTexelCopyBufferRowAlignmentLimits* rhs) {
        return rhs;
    }
    inline WGPUDawnTexelCopyBufferRowAlignmentLimits* ToAPI(WGPUDawnTexelCopyBufferRowAlignmentLimits* rhs) {
        return rhs;
    }
    inline const DawnTexelCopyBufferRowAlignmentLimits* FromAPI(const WGPUDawnTexelCopyBufferRowAlignmentLimits* rhs) {
        return reinterpret_cast<const DawnTexelCopyBufferRowAlignmentLimits*>(rhs);
    }
    inline DawnTexelCopyBufferRowAlignmentLimits* FromAPI(WGPUDawnTexelCopyBufferRowAlignmentLimits* rhs) {
        return reinterpret_cast<DawnTexelCopyBufferRowAlignmentLimits*>(rhs);
    }
    inline const DawnTexelCopyBufferRowAlignmentLimits* FromAPI(const DawnTexelCopyBufferRowAlignmentLimits* rhs) {
        return rhs;
    }
    inline DawnTexelCopyBufferRowAlignmentLimits* FromAPI(DawnTexelCopyBufferRowAlignmentLimits* rhs) {
        return rhs;
    }
    inline const wgpu::DawnTexelCopyBufferRowAlignmentLimits* ToCppAPI(const DawnTexelCopyBufferRowAlignmentLimits* rhs) {
        return reinterpret_cast<const wgpu::DawnTexelCopyBufferRowAlignmentLimits*>(rhs);
    }
    inline wgpu::DawnTexelCopyBufferRowAlignmentLimits* ToCppAPI(DawnTexelCopyBufferRowAlignmentLimits* rhs) {
        return reinterpret_cast<wgpu::DawnTexelCopyBufferRowAlignmentLimits*>(rhs);
    }
    inline const DawnTexelCopyBufferRowAlignmentLimits* FromCppAPI(const wgpu::DawnTexelCopyBufferRowAlignmentLimits* rhs) {
        return reinterpret_cast<const DawnTexelCopyBufferRowAlignmentLimits*>(rhs);
    }
    inline DawnTexelCopyBufferRowAlignmentLimits* FromCppAPI(wgpu::DawnTexelCopyBufferRowAlignmentLimits* rhs) {
        return reinterpret_cast<DawnTexelCopyBufferRowAlignmentLimits*>(rhs);
    }
inline const DawnTexelCopyBufferRowAlignmentLimits& FromAPI(const WGPUDawnTexelCopyBufferRowAlignmentLimits& rhs) {
        return *reinterpret_cast<const DawnTexelCopyBufferRowAlignmentLimits*>(&rhs);
    }
    inline DawnTexelCopyBufferRowAlignmentLimits& FromAPI(WGPUDawnTexelCopyBufferRowAlignmentLimits& rhs) {
        return *reinterpret_cast<DawnTexelCopyBufferRowAlignmentLimits*>(&rhs);
    }
    inline const DawnTexelCopyBufferRowAlignmentLimits& FromAPI(const DawnTexelCopyBufferRowAlignmentLimits& rhs) {
        return rhs;
    }
    inline DawnTexelCopyBufferRowAlignmentLimits& FromAPI(DawnTexelCopyBufferRowAlignmentLimits& rhs) {
        return rhs;
    }
inline const WGPUDawnTextureInternalUsageDescriptor* ToAPI(const DawnTextureInternalUsageDescriptor* rhs) {
        return reinterpret_cast<const WGPUDawnTextureInternalUsageDescriptor*>(rhs);
    }
    inline WGPUDawnTextureInternalUsageDescriptor* ToAPI(DawnTextureInternalUsageDescriptor* rhs) {
        return reinterpret_cast<WGPUDawnTextureInternalUsageDescriptor*>(rhs);
    }
    inline const WGPUDawnTextureInternalUsageDescriptor* ToAPI(const WGPUDawnTextureInternalUsageDescriptor* rhs) {
        return rhs;
    }
    inline WGPUDawnTextureInternalUsageDescriptor* ToAPI(WGPUDawnTextureInternalUsageDescriptor* rhs) {
        return rhs;
    }
    inline const DawnTextureInternalUsageDescriptor* FromAPI(const WGPUDawnTextureInternalUsageDescriptor* rhs) {
        return reinterpret_cast<const DawnTextureInternalUsageDescriptor*>(rhs);
    }
    inline DawnTextureInternalUsageDescriptor* FromAPI(WGPUDawnTextureInternalUsageDescriptor* rhs) {
        return reinterpret_cast<DawnTextureInternalUsageDescriptor*>(rhs);
    }
    inline const DawnTextureInternalUsageDescriptor* FromAPI(const DawnTextureInternalUsageDescriptor* rhs) {
        return rhs;
    }
    inline DawnTextureInternalUsageDescriptor* FromAPI(DawnTextureInternalUsageDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::DawnTextureInternalUsageDescriptor* ToCppAPI(const DawnTextureInternalUsageDescriptor* rhs) {
        return reinterpret_cast<const wgpu::DawnTextureInternalUsageDescriptor*>(rhs);
    }
    inline wgpu::DawnTextureInternalUsageDescriptor* ToCppAPI(DawnTextureInternalUsageDescriptor* rhs) {
        return reinterpret_cast<wgpu::DawnTextureInternalUsageDescriptor*>(rhs);
    }
    inline const DawnTextureInternalUsageDescriptor* FromCppAPI(const wgpu::DawnTextureInternalUsageDescriptor* rhs) {
        return reinterpret_cast<const DawnTextureInternalUsageDescriptor*>(rhs);
    }
    inline DawnTextureInternalUsageDescriptor* FromCppAPI(wgpu::DawnTextureInternalUsageDescriptor* rhs) {
        return reinterpret_cast<DawnTextureInternalUsageDescriptor*>(rhs);
    }
inline const DawnTextureInternalUsageDescriptor& FromAPI(const WGPUDawnTextureInternalUsageDescriptor& rhs) {
        return *reinterpret_cast<const DawnTextureInternalUsageDescriptor*>(&rhs);
    }
    inline DawnTextureInternalUsageDescriptor& FromAPI(WGPUDawnTextureInternalUsageDescriptor& rhs) {
        return *reinterpret_cast<DawnTextureInternalUsageDescriptor*>(&rhs);
    }
    inline const DawnTextureInternalUsageDescriptor& FromAPI(const DawnTextureInternalUsageDescriptor& rhs) {
        return rhs;
    }
    inline DawnTextureInternalUsageDescriptor& FromAPI(DawnTextureInternalUsageDescriptor& rhs) {
        return rhs;
    }
inline const WGPUDawnTogglesDescriptor* ToAPI(const DawnTogglesDescriptor* rhs) {
        return reinterpret_cast<const WGPUDawnTogglesDescriptor*>(rhs);
    }
    inline WGPUDawnTogglesDescriptor* ToAPI(DawnTogglesDescriptor* rhs) {
        return reinterpret_cast<WGPUDawnTogglesDescriptor*>(rhs);
    }
    inline const WGPUDawnTogglesDescriptor* ToAPI(const WGPUDawnTogglesDescriptor* rhs) {
        return rhs;
    }
    inline WGPUDawnTogglesDescriptor* ToAPI(WGPUDawnTogglesDescriptor* rhs) {
        return rhs;
    }
    inline const DawnTogglesDescriptor* FromAPI(const WGPUDawnTogglesDescriptor* rhs) {
        return reinterpret_cast<const DawnTogglesDescriptor*>(rhs);
    }
    inline DawnTogglesDescriptor* FromAPI(WGPUDawnTogglesDescriptor* rhs) {
        return reinterpret_cast<DawnTogglesDescriptor*>(rhs);
    }
    inline const DawnTogglesDescriptor* FromAPI(const DawnTogglesDescriptor* rhs) {
        return rhs;
    }
    inline DawnTogglesDescriptor* FromAPI(DawnTogglesDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::DawnTogglesDescriptor* ToCppAPI(const DawnTogglesDescriptor* rhs) {
        return reinterpret_cast<const wgpu::DawnTogglesDescriptor*>(rhs);
    }
    inline wgpu::DawnTogglesDescriptor* ToCppAPI(DawnTogglesDescriptor* rhs) {
        return reinterpret_cast<wgpu::DawnTogglesDescriptor*>(rhs);
    }
    inline const DawnTogglesDescriptor* FromCppAPI(const wgpu::DawnTogglesDescriptor* rhs) {
        return reinterpret_cast<const DawnTogglesDescriptor*>(rhs);
    }
    inline DawnTogglesDescriptor* FromCppAPI(wgpu::DawnTogglesDescriptor* rhs) {
        return reinterpret_cast<DawnTogglesDescriptor*>(rhs);
    }
inline const DawnTogglesDescriptor& FromAPI(const WGPUDawnTogglesDescriptor& rhs) {
        return *reinterpret_cast<const DawnTogglesDescriptor*>(&rhs);
    }
    inline DawnTogglesDescriptor& FromAPI(WGPUDawnTogglesDescriptor& rhs) {
        return *reinterpret_cast<DawnTogglesDescriptor*>(&rhs);
    }
    inline const DawnTogglesDescriptor& FromAPI(const DawnTogglesDescriptor& rhs) {
        return rhs;
    }
    inline DawnTogglesDescriptor& FromAPI(DawnTogglesDescriptor& rhs) {
        return rhs;
    }
inline const WGPUDawnWGSLBlocklist* ToAPI(const DawnWGSLBlocklist* rhs) {
        return reinterpret_cast<const WGPUDawnWGSLBlocklist*>(rhs);
    }
    inline WGPUDawnWGSLBlocklist* ToAPI(DawnWGSLBlocklist* rhs) {
        return reinterpret_cast<WGPUDawnWGSLBlocklist*>(rhs);
    }
    inline const WGPUDawnWGSLBlocklist* ToAPI(const WGPUDawnWGSLBlocklist* rhs) {
        return rhs;
    }
    inline WGPUDawnWGSLBlocklist* ToAPI(WGPUDawnWGSLBlocklist* rhs) {
        return rhs;
    }
    inline const DawnWGSLBlocklist* FromAPI(const WGPUDawnWGSLBlocklist* rhs) {
        return reinterpret_cast<const DawnWGSLBlocklist*>(rhs);
    }
    inline DawnWGSLBlocklist* FromAPI(WGPUDawnWGSLBlocklist* rhs) {
        return reinterpret_cast<DawnWGSLBlocklist*>(rhs);
    }
    inline const DawnWGSLBlocklist* FromAPI(const DawnWGSLBlocklist* rhs) {
        return rhs;
    }
    inline DawnWGSLBlocklist* FromAPI(DawnWGSLBlocklist* rhs) {
        return rhs;
    }
    inline const wgpu::DawnWGSLBlocklist* ToCppAPI(const DawnWGSLBlocklist* rhs) {
        return reinterpret_cast<const wgpu::DawnWGSLBlocklist*>(rhs);
    }
    inline wgpu::DawnWGSLBlocklist* ToCppAPI(DawnWGSLBlocklist* rhs) {
        return reinterpret_cast<wgpu::DawnWGSLBlocklist*>(rhs);
    }
    inline const DawnWGSLBlocklist* FromCppAPI(const wgpu::DawnWGSLBlocklist* rhs) {
        return reinterpret_cast<const DawnWGSLBlocklist*>(rhs);
    }
    inline DawnWGSLBlocklist* FromCppAPI(wgpu::DawnWGSLBlocklist* rhs) {
        return reinterpret_cast<DawnWGSLBlocklist*>(rhs);
    }
inline const DawnWGSLBlocklist& FromAPI(const WGPUDawnWGSLBlocklist& rhs) {
        return *reinterpret_cast<const DawnWGSLBlocklist*>(&rhs);
    }
    inline DawnWGSLBlocklist& FromAPI(WGPUDawnWGSLBlocklist& rhs) {
        return *reinterpret_cast<DawnWGSLBlocklist*>(&rhs);
    }
    inline const DawnWGSLBlocklist& FromAPI(const DawnWGSLBlocklist& rhs) {
        return rhs;
    }
    inline DawnWGSLBlocklist& FromAPI(DawnWGSLBlocklist& rhs) {
        return rhs;
    }
inline const WGPUDawnWireWGSLControl* ToAPI(const DawnWireWGSLControl* rhs) {
        return reinterpret_cast<const WGPUDawnWireWGSLControl*>(rhs);
    }
    inline WGPUDawnWireWGSLControl* ToAPI(DawnWireWGSLControl* rhs) {
        return reinterpret_cast<WGPUDawnWireWGSLControl*>(rhs);
    }
    inline const WGPUDawnWireWGSLControl* ToAPI(const WGPUDawnWireWGSLControl* rhs) {
        return rhs;
    }
    inline WGPUDawnWireWGSLControl* ToAPI(WGPUDawnWireWGSLControl* rhs) {
        return rhs;
    }
    inline const DawnWireWGSLControl* FromAPI(const WGPUDawnWireWGSLControl* rhs) {
        return reinterpret_cast<const DawnWireWGSLControl*>(rhs);
    }
    inline DawnWireWGSLControl* FromAPI(WGPUDawnWireWGSLControl* rhs) {
        return reinterpret_cast<DawnWireWGSLControl*>(rhs);
    }
    inline const DawnWireWGSLControl* FromAPI(const DawnWireWGSLControl* rhs) {
        return rhs;
    }
    inline DawnWireWGSLControl* FromAPI(DawnWireWGSLControl* rhs) {
        return rhs;
    }
    inline const wgpu::DawnWireWGSLControl* ToCppAPI(const DawnWireWGSLControl* rhs) {
        return reinterpret_cast<const wgpu::DawnWireWGSLControl*>(rhs);
    }
    inline wgpu::DawnWireWGSLControl* ToCppAPI(DawnWireWGSLControl* rhs) {
        return reinterpret_cast<wgpu::DawnWireWGSLControl*>(rhs);
    }
    inline const DawnWireWGSLControl* FromCppAPI(const wgpu::DawnWireWGSLControl* rhs) {
        return reinterpret_cast<const DawnWireWGSLControl*>(rhs);
    }
    inline DawnWireWGSLControl* FromCppAPI(wgpu::DawnWireWGSLControl* rhs) {
        return reinterpret_cast<DawnWireWGSLControl*>(rhs);
    }
inline const DawnWireWGSLControl& FromAPI(const WGPUDawnWireWGSLControl& rhs) {
        return *reinterpret_cast<const DawnWireWGSLControl*>(&rhs);
    }
    inline DawnWireWGSLControl& FromAPI(WGPUDawnWireWGSLControl& rhs) {
        return *reinterpret_cast<DawnWireWGSLControl*>(&rhs);
    }
    inline const DawnWireWGSLControl& FromAPI(const DawnWireWGSLControl& rhs) {
        return rhs;
    }
    inline DawnWireWGSLControl& FromAPI(DawnWireWGSLControl& rhs) {
        return rhs;
    }
inline const WGPUExtent2D* ToAPI(const Extent2D* rhs) {
        return reinterpret_cast<const WGPUExtent2D*>(rhs);
    }
    inline WGPUExtent2D* ToAPI(Extent2D* rhs) {
        return reinterpret_cast<WGPUExtent2D*>(rhs);
    }
    inline const WGPUExtent2D* ToAPI(const WGPUExtent2D* rhs) {
        return rhs;
    }
    inline WGPUExtent2D* ToAPI(WGPUExtent2D* rhs) {
        return rhs;
    }
    inline const Extent2D* FromAPI(const WGPUExtent2D* rhs) {
        return reinterpret_cast<const Extent2D*>(rhs);
    }
    inline Extent2D* FromAPI(WGPUExtent2D* rhs) {
        return reinterpret_cast<Extent2D*>(rhs);
    }
    inline const Extent2D* FromAPI(const Extent2D* rhs) {
        return rhs;
    }
    inline Extent2D* FromAPI(Extent2D* rhs) {
        return rhs;
    }
    inline const wgpu::Extent2D* ToCppAPI(const Extent2D* rhs) {
        return reinterpret_cast<const wgpu::Extent2D*>(rhs);
    }
    inline wgpu::Extent2D* ToCppAPI(Extent2D* rhs) {
        return reinterpret_cast<wgpu::Extent2D*>(rhs);
    }
    inline const Extent2D* FromCppAPI(const wgpu::Extent2D* rhs) {
        return reinterpret_cast<const Extent2D*>(rhs);
    }
    inline Extent2D* FromCppAPI(wgpu::Extent2D* rhs) {
        return reinterpret_cast<Extent2D*>(rhs);
    }
inline const Extent2D& FromAPI(const WGPUExtent2D& rhs) {
        return *reinterpret_cast<const Extent2D*>(&rhs);
    }
    inline Extent2D& FromAPI(WGPUExtent2D& rhs) {
        return *reinterpret_cast<Extent2D*>(&rhs);
    }
    inline const Extent2D& FromAPI(const Extent2D& rhs) {
        return rhs;
    }
    inline Extent2D& FromAPI(Extent2D& rhs) {
        return rhs;
    }
inline const WGPUExtent3D* ToAPI(const Extent3D* rhs) {
        return reinterpret_cast<const WGPUExtent3D*>(rhs);
    }
    inline WGPUExtent3D* ToAPI(Extent3D* rhs) {
        return reinterpret_cast<WGPUExtent3D*>(rhs);
    }
    inline const WGPUExtent3D* ToAPI(const WGPUExtent3D* rhs) {
        return rhs;
    }
    inline WGPUExtent3D* ToAPI(WGPUExtent3D* rhs) {
        return rhs;
    }
    inline const Extent3D* FromAPI(const WGPUExtent3D* rhs) {
        return reinterpret_cast<const Extent3D*>(rhs);
    }
    inline Extent3D* FromAPI(WGPUExtent3D* rhs) {
        return reinterpret_cast<Extent3D*>(rhs);
    }
    inline const Extent3D* FromAPI(const Extent3D* rhs) {
        return rhs;
    }
    inline Extent3D* FromAPI(Extent3D* rhs) {
        return rhs;
    }
    inline const wgpu::Extent3D* ToCppAPI(const Extent3D* rhs) {
        return reinterpret_cast<const wgpu::Extent3D*>(rhs);
    }
    inline wgpu::Extent3D* ToCppAPI(Extent3D* rhs) {
        return reinterpret_cast<wgpu::Extent3D*>(rhs);
    }
    inline const Extent3D* FromCppAPI(const wgpu::Extent3D* rhs) {
        return reinterpret_cast<const Extent3D*>(rhs);
    }
    inline Extent3D* FromCppAPI(wgpu::Extent3D* rhs) {
        return reinterpret_cast<Extent3D*>(rhs);
    }
inline const Extent3D& FromAPI(const WGPUExtent3D& rhs) {
        return *reinterpret_cast<const Extent3D*>(&rhs);
    }
    inline Extent3D& FromAPI(WGPUExtent3D& rhs) {
        return *reinterpret_cast<Extent3D*>(&rhs);
    }
    inline const Extent3D& FromAPI(const Extent3D& rhs) {
        return rhs;
    }
    inline Extent3D& FromAPI(Extent3D& rhs) {
        return rhs;
    }
inline const WGPUExternalTextureBindingEntry* ToAPI(const ExternalTextureBindingEntry* rhs) {
        return reinterpret_cast<const WGPUExternalTextureBindingEntry*>(rhs);
    }
    inline WGPUExternalTextureBindingEntry* ToAPI(ExternalTextureBindingEntry* rhs) {
        return reinterpret_cast<WGPUExternalTextureBindingEntry*>(rhs);
    }
    inline const WGPUExternalTextureBindingEntry* ToAPI(const WGPUExternalTextureBindingEntry* rhs) {
        return rhs;
    }
    inline WGPUExternalTextureBindingEntry* ToAPI(WGPUExternalTextureBindingEntry* rhs) {
        return rhs;
    }
    inline const ExternalTextureBindingEntry* FromAPI(const WGPUExternalTextureBindingEntry* rhs) {
        return reinterpret_cast<const ExternalTextureBindingEntry*>(rhs);
    }
    inline ExternalTextureBindingEntry* FromAPI(WGPUExternalTextureBindingEntry* rhs) {
        return reinterpret_cast<ExternalTextureBindingEntry*>(rhs);
    }
    inline const ExternalTextureBindingEntry* FromAPI(const ExternalTextureBindingEntry* rhs) {
        return rhs;
    }
    inline ExternalTextureBindingEntry* FromAPI(ExternalTextureBindingEntry* rhs) {
        return rhs;
    }
    inline const wgpu::ExternalTextureBindingEntry* ToCppAPI(const ExternalTextureBindingEntry* rhs) {
        return reinterpret_cast<const wgpu::ExternalTextureBindingEntry*>(rhs);
    }
    inline wgpu::ExternalTextureBindingEntry* ToCppAPI(ExternalTextureBindingEntry* rhs) {
        return reinterpret_cast<wgpu::ExternalTextureBindingEntry*>(rhs);
    }
    inline const ExternalTextureBindingEntry* FromCppAPI(const wgpu::ExternalTextureBindingEntry* rhs) {
        return reinterpret_cast<const ExternalTextureBindingEntry*>(rhs);
    }
    inline ExternalTextureBindingEntry* FromCppAPI(wgpu::ExternalTextureBindingEntry* rhs) {
        return reinterpret_cast<ExternalTextureBindingEntry*>(rhs);
    }
inline const ExternalTextureBindingEntry& FromAPI(const WGPUExternalTextureBindingEntry& rhs) {
        return *reinterpret_cast<const ExternalTextureBindingEntry*>(&rhs);
    }
    inline ExternalTextureBindingEntry& FromAPI(WGPUExternalTextureBindingEntry& rhs) {
        return *reinterpret_cast<ExternalTextureBindingEntry*>(&rhs);
    }
    inline const ExternalTextureBindingEntry& FromAPI(const ExternalTextureBindingEntry& rhs) {
        return rhs;
    }
    inline ExternalTextureBindingEntry& FromAPI(ExternalTextureBindingEntry& rhs) {
        return rhs;
    }
inline const WGPUExternalTextureBindingLayout* ToAPI(const ExternalTextureBindingLayout* rhs) {
        return reinterpret_cast<const WGPUExternalTextureBindingLayout*>(rhs);
    }
    inline WGPUExternalTextureBindingLayout* ToAPI(ExternalTextureBindingLayout* rhs) {
        return reinterpret_cast<WGPUExternalTextureBindingLayout*>(rhs);
    }
    inline const WGPUExternalTextureBindingLayout* ToAPI(const WGPUExternalTextureBindingLayout* rhs) {
        return rhs;
    }
    inline WGPUExternalTextureBindingLayout* ToAPI(WGPUExternalTextureBindingLayout* rhs) {
        return rhs;
    }
    inline const ExternalTextureBindingLayout* FromAPI(const WGPUExternalTextureBindingLayout* rhs) {
        return reinterpret_cast<const ExternalTextureBindingLayout*>(rhs);
    }
    inline ExternalTextureBindingLayout* FromAPI(WGPUExternalTextureBindingLayout* rhs) {
        return reinterpret_cast<ExternalTextureBindingLayout*>(rhs);
    }
    inline const ExternalTextureBindingLayout* FromAPI(const ExternalTextureBindingLayout* rhs) {
        return rhs;
    }
    inline ExternalTextureBindingLayout* FromAPI(ExternalTextureBindingLayout* rhs) {
        return rhs;
    }
    inline const wgpu::ExternalTextureBindingLayout* ToCppAPI(const ExternalTextureBindingLayout* rhs) {
        return reinterpret_cast<const wgpu::ExternalTextureBindingLayout*>(rhs);
    }
    inline wgpu::ExternalTextureBindingLayout* ToCppAPI(ExternalTextureBindingLayout* rhs) {
        return reinterpret_cast<wgpu::ExternalTextureBindingLayout*>(rhs);
    }
    inline const ExternalTextureBindingLayout* FromCppAPI(const wgpu::ExternalTextureBindingLayout* rhs) {
        return reinterpret_cast<const ExternalTextureBindingLayout*>(rhs);
    }
    inline ExternalTextureBindingLayout* FromCppAPI(wgpu::ExternalTextureBindingLayout* rhs) {
        return reinterpret_cast<ExternalTextureBindingLayout*>(rhs);
    }
inline const ExternalTextureBindingLayout& FromAPI(const WGPUExternalTextureBindingLayout& rhs) {
        return *reinterpret_cast<const ExternalTextureBindingLayout*>(&rhs);
    }
    inline ExternalTextureBindingLayout& FromAPI(WGPUExternalTextureBindingLayout& rhs) {
        return *reinterpret_cast<ExternalTextureBindingLayout*>(&rhs);
    }
    inline const ExternalTextureBindingLayout& FromAPI(const ExternalTextureBindingLayout& rhs) {
        return rhs;
    }
    inline ExternalTextureBindingLayout& FromAPI(ExternalTextureBindingLayout& rhs) {
        return rhs;
    }
inline const WGPUFuture* ToAPI(const Future* rhs) {
        return reinterpret_cast<const WGPUFuture*>(rhs);
    }
    inline WGPUFuture* ToAPI(Future* rhs) {
        return reinterpret_cast<WGPUFuture*>(rhs);
    }
    inline const WGPUFuture* ToAPI(const WGPUFuture* rhs) {
        return rhs;
    }
    inline WGPUFuture* ToAPI(WGPUFuture* rhs) {
        return rhs;
    }
    inline const Future* FromAPI(const WGPUFuture* rhs) {
        return reinterpret_cast<const Future*>(rhs);
    }
    inline Future* FromAPI(WGPUFuture* rhs) {
        return reinterpret_cast<Future*>(rhs);
    }
    inline const Future* FromAPI(const Future* rhs) {
        return rhs;
    }
    inline Future* FromAPI(Future* rhs) {
        return rhs;
    }
    inline const wgpu::Future* ToCppAPI(const Future* rhs) {
        return reinterpret_cast<const wgpu::Future*>(rhs);
    }
    inline wgpu::Future* ToCppAPI(Future* rhs) {
        return reinterpret_cast<wgpu::Future*>(rhs);
    }
    inline const Future* FromCppAPI(const wgpu::Future* rhs) {
        return reinterpret_cast<const Future*>(rhs);
    }
    inline Future* FromCppAPI(wgpu::Future* rhs) {
        return reinterpret_cast<Future*>(rhs);
    }
inline WGPUFuture ToAPI(Future rhs) {
        return *reinterpret_cast<const WGPUFuture*>(&rhs);
    }
    inline WGPUFuture ToAPI(WGPUFuture rhs) {
        return rhs;
    }
    inline Future FromAPI(WGPUFuture rhs) {
        return *reinterpret_cast<const Future*>(&rhs);
    }
    inline Future FromAPI(Future rhs) {
        return rhs;
    }
inline const WGPUInstanceLimits* ToAPI(const InstanceLimits* rhs) {
        return reinterpret_cast<const WGPUInstanceLimits*>(rhs);
    }
    inline WGPUInstanceLimits* ToAPI(InstanceLimits* rhs) {
        return reinterpret_cast<WGPUInstanceLimits*>(rhs);
    }
    inline const WGPUInstanceLimits* ToAPI(const WGPUInstanceLimits* rhs) {
        return rhs;
    }
    inline WGPUInstanceLimits* ToAPI(WGPUInstanceLimits* rhs) {
        return rhs;
    }
    inline const InstanceLimits* FromAPI(const WGPUInstanceLimits* rhs) {
        return reinterpret_cast<const InstanceLimits*>(rhs);
    }
    inline InstanceLimits* FromAPI(WGPUInstanceLimits* rhs) {
        return reinterpret_cast<InstanceLimits*>(rhs);
    }
    inline const InstanceLimits* FromAPI(const InstanceLimits* rhs) {
        return rhs;
    }
    inline InstanceLimits* FromAPI(InstanceLimits* rhs) {
        return rhs;
    }
    inline const wgpu::InstanceLimits* ToCppAPI(const InstanceLimits* rhs) {
        return reinterpret_cast<const wgpu::InstanceLimits*>(rhs);
    }
    inline wgpu::InstanceLimits* ToCppAPI(InstanceLimits* rhs) {
        return reinterpret_cast<wgpu::InstanceLimits*>(rhs);
    }
    inline const InstanceLimits* FromCppAPI(const wgpu::InstanceLimits* rhs) {
        return reinterpret_cast<const InstanceLimits*>(rhs);
    }
    inline InstanceLimits* FromCppAPI(wgpu::InstanceLimits* rhs) {
        return reinterpret_cast<InstanceLimits*>(rhs);
    }
inline const InstanceLimits& FromAPI(const WGPUInstanceLimits& rhs) {
        return *reinterpret_cast<const InstanceLimits*>(&rhs);
    }
    inline InstanceLimits& FromAPI(WGPUInstanceLimits& rhs) {
        return *reinterpret_cast<InstanceLimits*>(&rhs);
    }
    inline const InstanceLimits& FromAPI(const InstanceLimits& rhs) {
        return rhs;
    }
    inline InstanceLimits& FromAPI(InstanceLimits& rhs) {
        return rhs;
    }
inline const WGPUMemoryHeapInfo* ToAPI(const MemoryHeapInfo* rhs) {
        return reinterpret_cast<const WGPUMemoryHeapInfo*>(rhs);
    }
    inline WGPUMemoryHeapInfo* ToAPI(MemoryHeapInfo* rhs) {
        return reinterpret_cast<WGPUMemoryHeapInfo*>(rhs);
    }
    inline const WGPUMemoryHeapInfo* ToAPI(const WGPUMemoryHeapInfo* rhs) {
        return rhs;
    }
    inline WGPUMemoryHeapInfo* ToAPI(WGPUMemoryHeapInfo* rhs) {
        return rhs;
    }
    inline const MemoryHeapInfo* FromAPI(const WGPUMemoryHeapInfo* rhs) {
        return reinterpret_cast<const MemoryHeapInfo*>(rhs);
    }
    inline MemoryHeapInfo* FromAPI(WGPUMemoryHeapInfo* rhs) {
        return reinterpret_cast<MemoryHeapInfo*>(rhs);
    }
    inline const MemoryHeapInfo* FromAPI(const MemoryHeapInfo* rhs) {
        return rhs;
    }
    inline MemoryHeapInfo* FromAPI(MemoryHeapInfo* rhs) {
        return rhs;
    }
    inline const wgpu::MemoryHeapInfo* ToCppAPI(const MemoryHeapInfo* rhs) {
        return reinterpret_cast<const wgpu::MemoryHeapInfo*>(rhs);
    }
    inline wgpu::MemoryHeapInfo* ToCppAPI(MemoryHeapInfo* rhs) {
        return reinterpret_cast<wgpu::MemoryHeapInfo*>(rhs);
    }
    inline const MemoryHeapInfo* FromCppAPI(const wgpu::MemoryHeapInfo* rhs) {
        return reinterpret_cast<const MemoryHeapInfo*>(rhs);
    }
    inline MemoryHeapInfo* FromCppAPI(wgpu::MemoryHeapInfo* rhs) {
        return reinterpret_cast<MemoryHeapInfo*>(rhs);
    }
inline const MemoryHeapInfo& FromAPI(const WGPUMemoryHeapInfo& rhs) {
        return *reinterpret_cast<const MemoryHeapInfo*>(&rhs);
    }
    inline MemoryHeapInfo& FromAPI(WGPUMemoryHeapInfo& rhs) {
        return *reinterpret_cast<MemoryHeapInfo*>(&rhs);
    }
    inline const MemoryHeapInfo& FromAPI(const MemoryHeapInfo& rhs) {
        return rhs;
    }
    inline MemoryHeapInfo& FromAPI(MemoryHeapInfo& rhs) {
        return rhs;
    }
inline const WGPUMultisampleState* ToAPI(const MultisampleState* rhs) {
        return reinterpret_cast<const WGPUMultisampleState*>(rhs);
    }
    inline WGPUMultisampleState* ToAPI(MultisampleState* rhs) {
        return reinterpret_cast<WGPUMultisampleState*>(rhs);
    }
    inline const WGPUMultisampleState* ToAPI(const WGPUMultisampleState* rhs) {
        return rhs;
    }
    inline WGPUMultisampleState* ToAPI(WGPUMultisampleState* rhs) {
        return rhs;
    }
    inline const MultisampleState* FromAPI(const WGPUMultisampleState* rhs) {
        return reinterpret_cast<const MultisampleState*>(rhs);
    }
    inline MultisampleState* FromAPI(WGPUMultisampleState* rhs) {
        return reinterpret_cast<MultisampleState*>(rhs);
    }
    inline const MultisampleState* FromAPI(const MultisampleState* rhs) {
        return rhs;
    }
    inline MultisampleState* FromAPI(MultisampleState* rhs) {
        return rhs;
    }
    inline const wgpu::MultisampleState* ToCppAPI(const MultisampleState* rhs) {
        return reinterpret_cast<const wgpu::MultisampleState*>(rhs);
    }
    inline wgpu::MultisampleState* ToCppAPI(MultisampleState* rhs) {
        return reinterpret_cast<wgpu::MultisampleState*>(rhs);
    }
    inline const MultisampleState* FromCppAPI(const wgpu::MultisampleState* rhs) {
        return reinterpret_cast<const MultisampleState*>(rhs);
    }
    inline MultisampleState* FromCppAPI(wgpu::MultisampleState* rhs) {
        return reinterpret_cast<MultisampleState*>(rhs);
    }
inline const MultisampleState& FromAPI(const WGPUMultisampleState& rhs) {
        return *reinterpret_cast<const MultisampleState*>(&rhs);
    }
    inline MultisampleState& FromAPI(WGPUMultisampleState& rhs) {
        return *reinterpret_cast<MultisampleState*>(&rhs);
    }
    inline const MultisampleState& FromAPI(const MultisampleState& rhs) {
        return rhs;
    }
    inline MultisampleState& FromAPI(MultisampleState& rhs) {
        return rhs;
    }
inline const WGPUOrigin2D* ToAPI(const Origin2D* rhs) {
        return reinterpret_cast<const WGPUOrigin2D*>(rhs);
    }
    inline WGPUOrigin2D* ToAPI(Origin2D* rhs) {
        return reinterpret_cast<WGPUOrigin2D*>(rhs);
    }
    inline const WGPUOrigin2D* ToAPI(const WGPUOrigin2D* rhs) {
        return rhs;
    }
    inline WGPUOrigin2D* ToAPI(WGPUOrigin2D* rhs) {
        return rhs;
    }
    inline const Origin2D* FromAPI(const WGPUOrigin2D* rhs) {
        return reinterpret_cast<const Origin2D*>(rhs);
    }
    inline Origin2D* FromAPI(WGPUOrigin2D* rhs) {
        return reinterpret_cast<Origin2D*>(rhs);
    }
    inline const Origin2D* FromAPI(const Origin2D* rhs) {
        return rhs;
    }
    inline Origin2D* FromAPI(Origin2D* rhs) {
        return rhs;
    }
    inline const wgpu::Origin2D* ToCppAPI(const Origin2D* rhs) {
        return reinterpret_cast<const wgpu::Origin2D*>(rhs);
    }
    inline wgpu::Origin2D* ToCppAPI(Origin2D* rhs) {
        return reinterpret_cast<wgpu::Origin2D*>(rhs);
    }
    inline const Origin2D* FromCppAPI(const wgpu::Origin2D* rhs) {
        return reinterpret_cast<const Origin2D*>(rhs);
    }
    inline Origin2D* FromCppAPI(wgpu::Origin2D* rhs) {
        return reinterpret_cast<Origin2D*>(rhs);
    }
inline const Origin2D& FromAPI(const WGPUOrigin2D& rhs) {
        return *reinterpret_cast<const Origin2D*>(&rhs);
    }
    inline Origin2D& FromAPI(WGPUOrigin2D& rhs) {
        return *reinterpret_cast<Origin2D*>(&rhs);
    }
    inline const Origin2D& FromAPI(const Origin2D& rhs) {
        return rhs;
    }
    inline Origin2D& FromAPI(Origin2D& rhs) {
        return rhs;
    }
inline const WGPUOrigin3D* ToAPI(const Origin3D* rhs) {
        return reinterpret_cast<const WGPUOrigin3D*>(rhs);
    }
    inline WGPUOrigin3D* ToAPI(Origin3D* rhs) {
        return reinterpret_cast<WGPUOrigin3D*>(rhs);
    }
    inline const WGPUOrigin3D* ToAPI(const WGPUOrigin3D* rhs) {
        return rhs;
    }
    inline WGPUOrigin3D* ToAPI(WGPUOrigin3D* rhs) {
        return rhs;
    }
    inline const Origin3D* FromAPI(const WGPUOrigin3D* rhs) {
        return reinterpret_cast<const Origin3D*>(rhs);
    }
    inline Origin3D* FromAPI(WGPUOrigin3D* rhs) {
        return reinterpret_cast<Origin3D*>(rhs);
    }
    inline const Origin3D* FromAPI(const Origin3D* rhs) {
        return rhs;
    }
    inline Origin3D* FromAPI(Origin3D* rhs) {
        return rhs;
    }
    inline const wgpu::Origin3D* ToCppAPI(const Origin3D* rhs) {
        return reinterpret_cast<const wgpu::Origin3D*>(rhs);
    }
    inline wgpu::Origin3D* ToCppAPI(Origin3D* rhs) {
        return reinterpret_cast<wgpu::Origin3D*>(rhs);
    }
    inline const Origin3D* FromCppAPI(const wgpu::Origin3D* rhs) {
        return reinterpret_cast<const Origin3D*>(rhs);
    }
    inline Origin3D* FromCppAPI(wgpu::Origin3D* rhs) {
        return reinterpret_cast<Origin3D*>(rhs);
    }
inline const Origin3D& FromAPI(const WGPUOrigin3D& rhs) {
        return *reinterpret_cast<const Origin3D*>(&rhs);
    }
    inline Origin3D& FromAPI(WGPUOrigin3D& rhs) {
        return *reinterpret_cast<Origin3D*>(&rhs);
    }
    inline const Origin3D& FromAPI(const Origin3D& rhs) {
        return rhs;
    }
    inline Origin3D& FromAPI(Origin3D& rhs) {
        return rhs;
    }
inline const WGPUPassTimestampWrites* ToAPI(const PassTimestampWrites* rhs) {
        return reinterpret_cast<const WGPUPassTimestampWrites*>(rhs);
    }
    inline WGPUPassTimestampWrites* ToAPI(PassTimestampWrites* rhs) {
        return reinterpret_cast<WGPUPassTimestampWrites*>(rhs);
    }
    inline const WGPUPassTimestampWrites* ToAPI(const WGPUPassTimestampWrites* rhs) {
        return rhs;
    }
    inline WGPUPassTimestampWrites* ToAPI(WGPUPassTimestampWrites* rhs) {
        return rhs;
    }
    inline const PassTimestampWrites* FromAPI(const WGPUPassTimestampWrites* rhs) {
        return reinterpret_cast<const PassTimestampWrites*>(rhs);
    }
    inline PassTimestampWrites* FromAPI(WGPUPassTimestampWrites* rhs) {
        return reinterpret_cast<PassTimestampWrites*>(rhs);
    }
    inline const PassTimestampWrites* FromAPI(const PassTimestampWrites* rhs) {
        return rhs;
    }
    inline PassTimestampWrites* FromAPI(PassTimestampWrites* rhs) {
        return rhs;
    }
    inline const wgpu::PassTimestampWrites* ToCppAPI(const PassTimestampWrites* rhs) {
        return reinterpret_cast<const wgpu::PassTimestampWrites*>(rhs);
    }
    inline wgpu::PassTimestampWrites* ToCppAPI(PassTimestampWrites* rhs) {
        return reinterpret_cast<wgpu::PassTimestampWrites*>(rhs);
    }
    inline const PassTimestampWrites* FromCppAPI(const wgpu::PassTimestampWrites* rhs) {
        return reinterpret_cast<const PassTimestampWrites*>(rhs);
    }
    inline PassTimestampWrites* FromCppAPI(wgpu::PassTimestampWrites* rhs) {
        return reinterpret_cast<PassTimestampWrites*>(rhs);
    }
inline const PassTimestampWrites& FromAPI(const WGPUPassTimestampWrites& rhs) {
        return *reinterpret_cast<const PassTimestampWrites*>(&rhs);
    }
    inline PassTimestampWrites& FromAPI(WGPUPassTimestampWrites& rhs) {
        return *reinterpret_cast<PassTimestampWrites*>(&rhs);
    }
    inline const PassTimestampWrites& FromAPI(const PassTimestampWrites& rhs) {
        return rhs;
    }
    inline PassTimestampWrites& FromAPI(PassTimestampWrites& rhs) {
        return rhs;
    }
inline const WGPUPipelineLayoutResourceTable* ToAPI(const PipelineLayoutResourceTable* rhs) {
        return reinterpret_cast<const WGPUPipelineLayoutResourceTable*>(rhs);
    }
    inline WGPUPipelineLayoutResourceTable* ToAPI(PipelineLayoutResourceTable* rhs) {
        return reinterpret_cast<WGPUPipelineLayoutResourceTable*>(rhs);
    }
    inline const WGPUPipelineLayoutResourceTable* ToAPI(const WGPUPipelineLayoutResourceTable* rhs) {
        return rhs;
    }
    inline WGPUPipelineLayoutResourceTable* ToAPI(WGPUPipelineLayoutResourceTable* rhs) {
        return rhs;
    }
    inline const PipelineLayoutResourceTable* FromAPI(const WGPUPipelineLayoutResourceTable* rhs) {
        return reinterpret_cast<const PipelineLayoutResourceTable*>(rhs);
    }
    inline PipelineLayoutResourceTable* FromAPI(WGPUPipelineLayoutResourceTable* rhs) {
        return reinterpret_cast<PipelineLayoutResourceTable*>(rhs);
    }
    inline const PipelineLayoutResourceTable* FromAPI(const PipelineLayoutResourceTable* rhs) {
        return rhs;
    }
    inline PipelineLayoutResourceTable* FromAPI(PipelineLayoutResourceTable* rhs) {
        return rhs;
    }
    inline const wgpu::PipelineLayoutResourceTable* ToCppAPI(const PipelineLayoutResourceTable* rhs) {
        return reinterpret_cast<const wgpu::PipelineLayoutResourceTable*>(rhs);
    }
    inline wgpu::PipelineLayoutResourceTable* ToCppAPI(PipelineLayoutResourceTable* rhs) {
        return reinterpret_cast<wgpu::PipelineLayoutResourceTable*>(rhs);
    }
    inline const PipelineLayoutResourceTable* FromCppAPI(const wgpu::PipelineLayoutResourceTable* rhs) {
        return reinterpret_cast<const PipelineLayoutResourceTable*>(rhs);
    }
    inline PipelineLayoutResourceTable* FromCppAPI(wgpu::PipelineLayoutResourceTable* rhs) {
        return reinterpret_cast<PipelineLayoutResourceTable*>(rhs);
    }
inline const PipelineLayoutResourceTable& FromAPI(const WGPUPipelineLayoutResourceTable& rhs) {
        return *reinterpret_cast<const PipelineLayoutResourceTable*>(&rhs);
    }
    inline PipelineLayoutResourceTable& FromAPI(WGPUPipelineLayoutResourceTable& rhs) {
        return *reinterpret_cast<PipelineLayoutResourceTable*>(&rhs);
    }
    inline const PipelineLayoutResourceTable& FromAPI(const PipelineLayoutResourceTable& rhs) {
        return rhs;
    }
    inline PipelineLayoutResourceTable& FromAPI(PipelineLayoutResourceTable& rhs) {
        return rhs;
    }
inline const WGPUPipelineLayoutStorageAttachment* ToAPI(const PipelineLayoutStorageAttachment* rhs) {
        return reinterpret_cast<const WGPUPipelineLayoutStorageAttachment*>(rhs);
    }
    inline WGPUPipelineLayoutStorageAttachment* ToAPI(PipelineLayoutStorageAttachment* rhs) {
        return reinterpret_cast<WGPUPipelineLayoutStorageAttachment*>(rhs);
    }
    inline const WGPUPipelineLayoutStorageAttachment* ToAPI(const WGPUPipelineLayoutStorageAttachment* rhs) {
        return rhs;
    }
    inline WGPUPipelineLayoutStorageAttachment* ToAPI(WGPUPipelineLayoutStorageAttachment* rhs) {
        return rhs;
    }
    inline const PipelineLayoutStorageAttachment* FromAPI(const WGPUPipelineLayoutStorageAttachment* rhs) {
        return reinterpret_cast<const PipelineLayoutStorageAttachment*>(rhs);
    }
    inline PipelineLayoutStorageAttachment* FromAPI(WGPUPipelineLayoutStorageAttachment* rhs) {
        return reinterpret_cast<PipelineLayoutStorageAttachment*>(rhs);
    }
    inline const PipelineLayoutStorageAttachment* FromAPI(const PipelineLayoutStorageAttachment* rhs) {
        return rhs;
    }
    inline PipelineLayoutStorageAttachment* FromAPI(PipelineLayoutStorageAttachment* rhs) {
        return rhs;
    }
    inline const wgpu::PipelineLayoutStorageAttachment* ToCppAPI(const PipelineLayoutStorageAttachment* rhs) {
        return reinterpret_cast<const wgpu::PipelineLayoutStorageAttachment*>(rhs);
    }
    inline wgpu::PipelineLayoutStorageAttachment* ToCppAPI(PipelineLayoutStorageAttachment* rhs) {
        return reinterpret_cast<wgpu::PipelineLayoutStorageAttachment*>(rhs);
    }
    inline const PipelineLayoutStorageAttachment* FromCppAPI(const wgpu::PipelineLayoutStorageAttachment* rhs) {
        return reinterpret_cast<const PipelineLayoutStorageAttachment*>(rhs);
    }
    inline PipelineLayoutStorageAttachment* FromCppAPI(wgpu::PipelineLayoutStorageAttachment* rhs) {
        return reinterpret_cast<PipelineLayoutStorageAttachment*>(rhs);
    }
inline const PipelineLayoutStorageAttachment& FromAPI(const WGPUPipelineLayoutStorageAttachment& rhs) {
        return *reinterpret_cast<const PipelineLayoutStorageAttachment*>(&rhs);
    }
    inline PipelineLayoutStorageAttachment& FromAPI(WGPUPipelineLayoutStorageAttachment& rhs) {
        return *reinterpret_cast<PipelineLayoutStorageAttachment*>(&rhs);
    }
    inline const PipelineLayoutStorageAttachment& FromAPI(const PipelineLayoutStorageAttachment& rhs) {
        return rhs;
    }
    inline PipelineLayoutStorageAttachment& FromAPI(PipelineLayoutStorageAttachment& rhs) {
        return rhs;
    }
inline const WGPUPrimitiveState* ToAPI(const PrimitiveState* rhs) {
        return reinterpret_cast<const WGPUPrimitiveState*>(rhs);
    }
    inline WGPUPrimitiveState* ToAPI(PrimitiveState* rhs) {
        return reinterpret_cast<WGPUPrimitiveState*>(rhs);
    }
    inline const WGPUPrimitiveState* ToAPI(const WGPUPrimitiveState* rhs) {
        return rhs;
    }
    inline WGPUPrimitiveState* ToAPI(WGPUPrimitiveState* rhs) {
        return rhs;
    }
    inline const PrimitiveState* FromAPI(const WGPUPrimitiveState* rhs) {
        return reinterpret_cast<const PrimitiveState*>(rhs);
    }
    inline PrimitiveState* FromAPI(WGPUPrimitiveState* rhs) {
        return reinterpret_cast<PrimitiveState*>(rhs);
    }
    inline const PrimitiveState* FromAPI(const PrimitiveState* rhs) {
        return rhs;
    }
    inline PrimitiveState* FromAPI(PrimitiveState* rhs) {
        return rhs;
    }
    inline const wgpu::PrimitiveState* ToCppAPI(const PrimitiveState* rhs) {
        return reinterpret_cast<const wgpu::PrimitiveState*>(rhs);
    }
    inline wgpu::PrimitiveState* ToCppAPI(PrimitiveState* rhs) {
        return reinterpret_cast<wgpu::PrimitiveState*>(rhs);
    }
    inline const PrimitiveState* FromCppAPI(const wgpu::PrimitiveState* rhs) {
        return reinterpret_cast<const PrimitiveState*>(rhs);
    }
    inline PrimitiveState* FromCppAPI(wgpu::PrimitiveState* rhs) {
        return reinterpret_cast<PrimitiveState*>(rhs);
    }
inline const PrimitiveState& FromAPI(const WGPUPrimitiveState& rhs) {
        return *reinterpret_cast<const PrimitiveState*>(&rhs);
    }
    inline PrimitiveState& FromAPI(WGPUPrimitiveState& rhs) {
        return *reinterpret_cast<PrimitiveState*>(&rhs);
    }
    inline const PrimitiveState& FromAPI(const PrimitiveState& rhs) {
        return rhs;
    }
    inline PrimitiveState& FromAPI(PrimitiveState& rhs) {
        return rhs;
    }
inline const WGPUQuerySetDescriptor* ToAPI(const QuerySetDescriptor* rhs) {
        return reinterpret_cast<const WGPUQuerySetDescriptor*>(rhs);
    }
    inline WGPUQuerySetDescriptor* ToAPI(QuerySetDescriptor* rhs) {
        return reinterpret_cast<WGPUQuerySetDescriptor*>(rhs);
    }
    inline const WGPUQuerySetDescriptor* ToAPI(const WGPUQuerySetDescriptor* rhs) {
        return rhs;
    }
    inline WGPUQuerySetDescriptor* ToAPI(WGPUQuerySetDescriptor* rhs) {
        return rhs;
    }
    inline const QuerySetDescriptor* FromAPI(const WGPUQuerySetDescriptor* rhs) {
        return reinterpret_cast<const QuerySetDescriptor*>(rhs);
    }
    inline QuerySetDescriptor* FromAPI(WGPUQuerySetDescriptor* rhs) {
        return reinterpret_cast<QuerySetDescriptor*>(rhs);
    }
    inline const QuerySetDescriptor* FromAPI(const QuerySetDescriptor* rhs) {
        return rhs;
    }
    inline QuerySetDescriptor* FromAPI(QuerySetDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::QuerySetDescriptor* ToCppAPI(const QuerySetDescriptor* rhs) {
        return reinterpret_cast<const wgpu::QuerySetDescriptor*>(rhs);
    }
    inline wgpu::QuerySetDescriptor* ToCppAPI(QuerySetDescriptor* rhs) {
        return reinterpret_cast<wgpu::QuerySetDescriptor*>(rhs);
    }
    inline const QuerySetDescriptor* FromCppAPI(const wgpu::QuerySetDescriptor* rhs) {
        return reinterpret_cast<const QuerySetDescriptor*>(rhs);
    }
    inline QuerySetDescriptor* FromCppAPI(wgpu::QuerySetDescriptor* rhs) {
        return reinterpret_cast<QuerySetDescriptor*>(rhs);
    }
inline const QuerySetDescriptor& FromAPI(const WGPUQuerySetDescriptor& rhs) {
        return *reinterpret_cast<const QuerySetDescriptor*>(&rhs);
    }
    inline QuerySetDescriptor& FromAPI(WGPUQuerySetDescriptor& rhs) {
        return *reinterpret_cast<QuerySetDescriptor*>(&rhs);
    }
    inline const QuerySetDescriptor& FromAPI(const QuerySetDescriptor& rhs) {
        return rhs;
    }
    inline QuerySetDescriptor& FromAPI(QuerySetDescriptor& rhs) {
        return rhs;
    }
inline const WGPUQueueDescriptor* ToAPI(const QueueDescriptor* rhs) {
        return reinterpret_cast<const WGPUQueueDescriptor*>(rhs);
    }
    inline WGPUQueueDescriptor* ToAPI(QueueDescriptor* rhs) {
        return reinterpret_cast<WGPUQueueDescriptor*>(rhs);
    }
    inline const WGPUQueueDescriptor* ToAPI(const WGPUQueueDescriptor* rhs) {
        return rhs;
    }
    inline WGPUQueueDescriptor* ToAPI(WGPUQueueDescriptor* rhs) {
        return rhs;
    }
    inline const QueueDescriptor* FromAPI(const WGPUQueueDescriptor* rhs) {
        return reinterpret_cast<const QueueDescriptor*>(rhs);
    }
    inline QueueDescriptor* FromAPI(WGPUQueueDescriptor* rhs) {
        return reinterpret_cast<QueueDescriptor*>(rhs);
    }
    inline const QueueDescriptor* FromAPI(const QueueDescriptor* rhs) {
        return rhs;
    }
    inline QueueDescriptor* FromAPI(QueueDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::QueueDescriptor* ToCppAPI(const QueueDescriptor* rhs) {
        return reinterpret_cast<const wgpu::QueueDescriptor*>(rhs);
    }
    inline wgpu::QueueDescriptor* ToCppAPI(QueueDescriptor* rhs) {
        return reinterpret_cast<wgpu::QueueDescriptor*>(rhs);
    }
    inline const QueueDescriptor* FromCppAPI(const wgpu::QueueDescriptor* rhs) {
        return reinterpret_cast<const QueueDescriptor*>(rhs);
    }
    inline QueueDescriptor* FromCppAPI(wgpu::QueueDescriptor* rhs) {
        return reinterpret_cast<QueueDescriptor*>(rhs);
    }
inline const QueueDescriptor& FromAPI(const WGPUQueueDescriptor& rhs) {
        return *reinterpret_cast<const QueueDescriptor*>(&rhs);
    }
    inline QueueDescriptor& FromAPI(WGPUQueueDescriptor& rhs) {
        return *reinterpret_cast<QueueDescriptor*>(&rhs);
    }
    inline const QueueDescriptor& FromAPI(const QueueDescriptor& rhs) {
        return rhs;
    }
    inline QueueDescriptor& FromAPI(QueueDescriptor& rhs) {
        return rhs;
    }
inline const WGPURenderBundleDescriptor* ToAPI(const RenderBundleDescriptor* rhs) {
        return reinterpret_cast<const WGPURenderBundleDescriptor*>(rhs);
    }
    inline WGPURenderBundleDescriptor* ToAPI(RenderBundleDescriptor* rhs) {
        return reinterpret_cast<WGPURenderBundleDescriptor*>(rhs);
    }
    inline const WGPURenderBundleDescriptor* ToAPI(const WGPURenderBundleDescriptor* rhs) {
        return rhs;
    }
    inline WGPURenderBundleDescriptor* ToAPI(WGPURenderBundleDescriptor* rhs) {
        return rhs;
    }
    inline const RenderBundleDescriptor* FromAPI(const WGPURenderBundleDescriptor* rhs) {
        return reinterpret_cast<const RenderBundleDescriptor*>(rhs);
    }
    inline RenderBundleDescriptor* FromAPI(WGPURenderBundleDescriptor* rhs) {
        return reinterpret_cast<RenderBundleDescriptor*>(rhs);
    }
    inline const RenderBundleDescriptor* FromAPI(const RenderBundleDescriptor* rhs) {
        return rhs;
    }
    inline RenderBundleDescriptor* FromAPI(RenderBundleDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::RenderBundleDescriptor* ToCppAPI(const RenderBundleDescriptor* rhs) {
        return reinterpret_cast<const wgpu::RenderBundleDescriptor*>(rhs);
    }
    inline wgpu::RenderBundleDescriptor* ToCppAPI(RenderBundleDescriptor* rhs) {
        return reinterpret_cast<wgpu::RenderBundleDescriptor*>(rhs);
    }
    inline const RenderBundleDescriptor* FromCppAPI(const wgpu::RenderBundleDescriptor* rhs) {
        return reinterpret_cast<const RenderBundleDescriptor*>(rhs);
    }
    inline RenderBundleDescriptor* FromCppAPI(wgpu::RenderBundleDescriptor* rhs) {
        return reinterpret_cast<RenderBundleDescriptor*>(rhs);
    }
inline const RenderBundleDescriptor& FromAPI(const WGPURenderBundleDescriptor& rhs) {
        return *reinterpret_cast<const RenderBundleDescriptor*>(&rhs);
    }
    inline RenderBundleDescriptor& FromAPI(WGPURenderBundleDescriptor& rhs) {
        return *reinterpret_cast<RenderBundleDescriptor*>(&rhs);
    }
    inline const RenderBundleDescriptor& FromAPI(const RenderBundleDescriptor& rhs) {
        return rhs;
    }
    inline RenderBundleDescriptor& FromAPI(RenderBundleDescriptor& rhs) {
        return rhs;
    }
inline const WGPURenderBundleEncoderResourceTable* ToAPI(const RenderBundleEncoderResourceTable* rhs) {
        return reinterpret_cast<const WGPURenderBundleEncoderResourceTable*>(rhs);
    }
    inline WGPURenderBundleEncoderResourceTable* ToAPI(RenderBundleEncoderResourceTable* rhs) {
        return reinterpret_cast<WGPURenderBundleEncoderResourceTable*>(rhs);
    }
    inline const WGPURenderBundleEncoderResourceTable* ToAPI(const WGPURenderBundleEncoderResourceTable* rhs) {
        return rhs;
    }
    inline WGPURenderBundleEncoderResourceTable* ToAPI(WGPURenderBundleEncoderResourceTable* rhs) {
        return rhs;
    }
    inline const RenderBundleEncoderResourceTable* FromAPI(const WGPURenderBundleEncoderResourceTable* rhs) {
        return reinterpret_cast<const RenderBundleEncoderResourceTable*>(rhs);
    }
    inline RenderBundleEncoderResourceTable* FromAPI(WGPURenderBundleEncoderResourceTable* rhs) {
        return reinterpret_cast<RenderBundleEncoderResourceTable*>(rhs);
    }
    inline const RenderBundleEncoderResourceTable* FromAPI(const RenderBundleEncoderResourceTable* rhs) {
        return rhs;
    }
    inline RenderBundleEncoderResourceTable* FromAPI(RenderBundleEncoderResourceTable* rhs) {
        return rhs;
    }
    inline const wgpu::RenderBundleEncoderResourceTable* ToCppAPI(const RenderBundleEncoderResourceTable* rhs) {
        return reinterpret_cast<const wgpu::RenderBundleEncoderResourceTable*>(rhs);
    }
    inline wgpu::RenderBundleEncoderResourceTable* ToCppAPI(RenderBundleEncoderResourceTable* rhs) {
        return reinterpret_cast<wgpu::RenderBundleEncoderResourceTable*>(rhs);
    }
    inline const RenderBundleEncoderResourceTable* FromCppAPI(const wgpu::RenderBundleEncoderResourceTable* rhs) {
        return reinterpret_cast<const RenderBundleEncoderResourceTable*>(rhs);
    }
    inline RenderBundleEncoderResourceTable* FromCppAPI(wgpu::RenderBundleEncoderResourceTable* rhs) {
        return reinterpret_cast<RenderBundleEncoderResourceTable*>(rhs);
    }
inline const RenderBundleEncoderResourceTable& FromAPI(const WGPURenderBundleEncoderResourceTable& rhs) {
        return *reinterpret_cast<const RenderBundleEncoderResourceTable*>(&rhs);
    }
    inline RenderBundleEncoderResourceTable& FromAPI(WGPURenderBundleEncoderResourceTable& rhs) {
        return *reinterpret_cast<RenderBundleEncoderResourceTable*>(&rhs);
    }
    inline const RenderBundleEncoderResourceTable& FromAPI(const RenderBundleEncoderResourceTable& rhs) {
        return rhs;
    }
    inline RenderBundleEncoderResourceTable& FromAPI(RenderBundleEncoderResourceTable& rhs) {
        return rhs;
    }
inline const WGPURenderPassDepthStencilAttachment* ToAPI(const RenderPassDepthStencilAttachment* rhs) {
        return reinterpret_cast<const WGPURenderPassDepthStencilAttachment*>(rhs);
    }
    inline WGPURenderPassDepthStencilAttachment* ToAPI(RenderPassDepthStencilAttachment* rhs) {
        return reinterpret_cast<WGPURenderPassDepthStencilAttachment*>(rhs);
    }
    inline const WGPURenderPassDepthStencilAttachment* ToAPI(const WGPURenderPassDepthStencilAttachment* rhs) {
        return rhs;
    }
    inline WGPURenderPassDepthStencilAttachment* ToAPI(WGPURenderPassDepthStencilAttachment* rhs) {
        return rhs;
    }
    inline const RenderPassDepthStencilAttachment* FromAPI(const WGPURenderPassDepthStencilAttachment* rhs) {
        return reinterpret_cast<const RenderPassDepthStencilAttachment*>(rhs);
    }
    inline RenderPassDepthStencilAttachment* FromAPI(WGPURenderPassDepthStencilAttachment* rhs) {
        return reinterpret_cast<RenderPassDepthStencilAttachment*>(rhs);
    }
    inline const RenderPassDepthStencilAttachment* FromAPI(const RenderPassDepthStencilAttachment* rhs) {
        return rhs;
    }
    inline RenderPassDepthStencilAttachment* FromAPI(RenderPassDepthStencilAttachment* rhs) {
        return rhs;
    }
    inline const wgpu::RenderPassDepthStencilAttachment* ToCppAPI(const RenderPassDepthStencilAttachment* rhs) {
        return reinterpret_cast<const wgpu::RenderPassDepthStencilAttachment*>(rhs);
    }
    inline wgpu::RenderPassDepthStencilAttachment* ToCppAPI(RenderPassDepthStencilAttachment* rhs) {
        return reinterpret_cast<wgpu::RenderPassDepthStencilAttachment*>(rhs);
    }
    inline const RenderPassDepthStencilAttachment* FromCppAPI(const wgpu::RenderPassDepthStencilAttachment* rhs) {
        return reinterpret_cast<const RenderPassDepthStencilAttachment*>(rhs);
    }
    inline RenderPassDepthStencilAttachment* FromCppAPI(wgpu::RenderPassDepthStencilAttachment* rhs) {
        return reinterpret_cast<RenderPassDepthStencilAttachment*>(rhs);
    }
inline const RenderPassDepthStencilAttachment& FromAPI(const WGPURenderPassDepthStencilAttachment& rhs) {
        return *reinterpret_cast<const RenderPassDepthStencilAttachment*>(&rhs);
    }
    inline RenderPassDepthStencilAttachment& FromAPI(WGPURenderPassDepthStencilAttachment& rhs) {
        return *reinterpret_cast<RenderPassDepthStencilAttachment*>(&rhs);
    }
    inline const RenderPassDepthStencilAttachment& FromAPI(const RenderPassDepthStencilAttachment& rhs) {
        return rhs;
    }
    inline RenderPassDepthStencilAttachment& FromAPI(RenderPassDepthStencilAttachment& rhs) {
        return rhs;
    }
inline const WGPURenderPassDescriptorResolveRect* ToAPI(const RenderPassDescriptorResolveRect* rhs) {
        return reinterpret_cast<const WGPURenderPassDescriptorResolveRect*>(rhs);
    }
    inline WGPURenderPassDescriptorResolveRect* ToAPI(RenderPassDescriptorResolveRect* rhs) {
        return reinterpret_cast<WGPURenderPassDescriptorResolveRect*>(rhs);
    }
    inline const WGPURenderPassDescriptorResolveRect* ToAPI(const WGPURenderPassDescriptorResolveRect* rhs) {
        return rhs;
    }
    inline WGPURenderPassDescriptorResolveRect* ToAPI(WGPURenderPassDescriptorResolveRect* rhs) {
        return rhs;
    }
    inline const RenderPassDescriptorResolveRect* FromAPI(const WGPURenderPassDescriptorResolveRect* rhs) {
        return reinterpret_cast<const RenderPassDescriptorResolveRect*>(rhs);
    }
    inline RenderPassDescriptorResolveRect* FromAPI(WGPURenderPassDescriptorResolveRect* rhs) {
        return reinterpret_cast<RenderPassDescriptorResolveRect*>(rhs);
    }
    inline const RenderPassDescriptorResolveRect* FromAPI(const RenderPassDescriptorResolveRect* rhs) {
        return rhs;
    }
    inline RenderPassDescriptorResolveRect* FromAPI(RenderPassDescriptorResolveRect* rhs) {
        return rhs;
    }
    inline const wgpu::RenderPassDescriptorResolveRect* ToCppAPI(const RenderPassDescriptorResolveRect* rhs) {
        return reinterpret_cast<const wgpu::RenderPassDescriptorResolveRect*>(rhs);
    }
    inline wgpu::RenderPassDescriptorResolveRect* ToCppAPI(RenderPassDescriptorResolveRect* rhs) {
        return reinterpret_cast<wgpu::RenderPassDescriptorResolveRect*>(rhs);
    }
    inline const RenderPassDescriptorResolveRect* FromCppAPI(const wgpu::RenderPassDescriptorResolveRect* rhs) {
        return reinterpret_cast<const RenderPassDescriptorResolveRect*>(rhs);
    }
    inline RenderPassDescriptorResolveRect* FromCppAPI(wgpu::RenderPassDescriptorResolveRect* rhs) {
        return reinterpret_cast<RenderPassDescriptorResolveRect*>(rhs);
    }
inline const RenderPassDescriptorResolveRect& FromAPI(const WGPURenderPassDescriptorResolveRect& rhs) {
        return *reinterpret_cast<const RenderPassDescriptorResolveRect*>(&rhs);
    }
    inline RenderPassDescriptorResolveRect& FromAPI(WGPURenderPassDescriptorResolveRect& rhs) {
        return *reinterpret_cast<RenderPassDescriptorResolveRect*>(&rhs);
    }
    inline const RenderPassDescriptorResolveRect& FromAPI(const RenderPassDescriptorResolveRect& rhs) {
        return rhs;
    }
    inline RenderPassDescriptorResolveRect& FromAPI(RenderPassDescriptorResolveRect& rhs) {
        return rhs;
    }
inline const WGPURenderPassMaxDrawCount* ToAPI(const RenderPassMaxDrawCount* rhs) {
        return reinterpret_cast<const WGPURenderPassMaxDrawCount*>(rhs);
    }
    inline WGPURenderPassMaxDrawCount* ToAPI(RenderPassMaxDrawCount* rhs) {
        return reinterpret_cast<WGPURenderPassMaxDrawCount*>(rhs);
    }
    inline const WGPURenderPassMaxDrawCount* ToAPI(const WGPURenderPassMaxDrawCount* rhs) {
        return rhs;
    }
    inline WGPURenderPassMaxDrawCount* ToAPI(WGPURenderPassMaxDrawCount* rhs) {
        return rhs;
    }
    inline const RenderPassMaxDrawCount* FromAPI(const WGPURenderPassMaxDrawCount* rhs) {
        return reinterpret_cast<const RenderPassMaxDrawCount*>(rhs);
    }
    inline RenderPassMaxDrawCount* FromAPI(WGPURenderPassMaxDrawCount* rhs) {
        return reinterpret_cast<RenderPassMaxDrawCount*>(rhs);
    }
    inline const RenderPassMaxDrawCount* FromAPI(const RenderPassMaxDrawCount* rhs) {
        return rhs;
    }
    inline RenderPassMaxDrawCount* FromAPI(RenderPassMaxDrawCount* rhs) {
        return rhs;
    }
    inline const wgpu::RenderPassMaxDrawCount* ToCppAPI(const RenderPassMaxDrawCount* rhs) {
        return reinterpret_cast<const wgpu::RenderPassMaxDrawCount*>(rhs);
    }
    inline wgpu::RenderPassMaxDrawCount* ToCppAPI(RenderPassMaxDrawCount* rhs) {
        return reinterpret_cast<wgpu::RenderPassMaxDrawCount*>(rhs);
    }
    inline const RenderPassMaxDrawCount* FromCppAPI(const wgpu::RenderPassMaxDrawCount* rhs) {
        return reinterpret_cast<const RenderPassMaxDrawCount*>(rhs);
    }
    inline RenderPassMaxDrawCount* FromCppAPI(wgpu::RenderPassMaxDrawCount* rhs) {
        return reinterpret_cast<RenderPassMaxDrawCount*>(rhs);
    }
inline const RenderPassMaxDrawCount& FromAPI(const WGPURenderPassMaxDrawCount& rhs) {
        return *reinterpret_cast<const RenderPassMaxDrawCount*>(&rhs);
    }
    inline RenderPassMaxDrawCount& FromAPI(WGPURenderPassMaxDrawCount& rhs) {
        return *reinterpret_cast<RenderPassMaxDrawCount*>(&rhs);
    }
    inline const RenderPassMaxDrawCount& FromAPI(const RenderPassMaxDrawCount& rhs) {
        return rhs;
    }
    inline RenderPassMaxDrawCount& FromAPI(RenderPassMaxDrawCount& rhs) {
        return rhs;
    }
inline const WGPURequestAdapterWebGPUBackendOptions* ToAPI(const RequestAdapterWebGPUBackendOptions* rhs) {
        return reinterpret_cast<const WGPURequestAdapterWebGPUBackendOptions*>(rhs);
    }
    inline WGPURequestAdapterWebGPUBackendOptions* ToAPI(RequestAdapterWebGPUBackendOptions* rhs) {
        return reinterpret_cast<WGPURequestAdapterWebGPUBackendOptions*>(rhs);
    }
    inline const WGPURequestAdapterWebGPUBackendOptions* ToAPI(const WGPURequestAdapterWebGPUBackendOptions* rhs) {
        return rhs;
    }
    inline WGPURequestAdapterWebGPUBackendOptions* ToAPI(WGPURequestAdapterWebGPUBackendOptions* rhs) {
        return rhs;
    }
    inline const RequestAdapterWebGPUBackendOptions* FromAPI(const WGPURequestAdapterWebGPUBackendOptions* rhs) {
        return reinterpret_cast<const RequestAdapterWebGPUBackendOptions*>(rhs);
    }
    inline RequestAdapterWebGPUBackendOptions* FromAPI(WGPURequestAdapterWebGPUBackendOptions* rhs) {
        return reinterpret_cast<RequestAdapterWebGPUBackendOptions*>(rhs);
    }
    inline const RequestAdapterWebGPUBackendOptions* FromAPI(const RequestAdapterWebGPUBackendOptions* rhs) {
        return rhs;
    }
    inline RequestAdapterWebGPUBackendOptions* FromAPI(RequestAdapterWebGPUBackendOptions* rhs) {
        return rhs;
    }
    inline const wgpu::RequestAdapterWebGPUBackendOptions* ToCppAPI(const RequestAdapterWebGPUBackendOptions* rhs) {
        return reinterpret_cast<const wgpu::RequestAdapterWebGPUBackendOptions*>(rhs);
    }
    inline wgpu::RequestAdapterWebGPUBackendOptions* ToCppAPI(RequestAdapterWebGPUBackendOptions* rhs) {
        return reinterpret_cast<wgpu::RequestAdapterWebGPUBackendOptions*>(rhs);
    }
    inline const RequestAdapterWebGPUBackendOptions* FromCppAPI(const wgpu::RequestAdapterWebGPUBackendOptions* rhs) {
        return reinterpret_cast<const RequestAdapterWebGPUBackendOptions*>(rhs);
    }
    inline RequestAdapterWebGPUBackendOptions* FromCppAPI(wgpu::RequestAdapterWebGPUBackendOptions* rhs) {
        return reinterpret_cast<RequestAdapterWebGPUBackendOptions*>(rhs);
    }
inline const RequestAdapterWebGPUBackendOptions& FromAPI(const WGPURequestAdapterWebGPUBackendOptions& rhs) {
        return *reinterpret_cast<const RequestAdapterWebGPUBackendOptions*>(&rhs);
    }
    inline RequestAdapterWebGPUBackendOptions& FromAPI(WGPURequestAdapterWebGPUBackendOptions& rhs) {
        return *reinterpret_cast<RequestAdapterWebGPUBackendOptions*>(&rhs);
    }
    inline const RequestAdapterWebGPUBackendOptions& FromAPI(const RequestAdapterWebGPUBackendOptions& rhs) {
        return rhs;
    }
    inline RequestAdapterWebGPUBackendOptions& FromAPI(RequestAdapterWebGPUBackendOptions& rhs) {
        return rhs;
    }
inline const WGPURequestAdapterWebXROptions* ToAPI(const RequestAdapterWebXROptions* rhs) {
        return reinterpret_cast<const WGPURequestAdapterWebXROptions*>(rhs);
    }
    inline WGPURequestAdapterWebXROptions* ToAPI(RequestAdapterWebXROptions* rhs) {
        return reinterpret_cast<WGPURequestAdapterWebXROptions*>(rhs);
    }
    inline const WGPURequestAdapterWebXROptions* ToAPI(const WGPURequestAdapterWebXROptions* rhs) {
        return rhs;
    }
    inline WGPURequestAdapterWebXROptions* ToAPI(WGPURequestAdapterWebXROptions* rhs) {
        return rhs;
    }
    inline const RequestAdapterWebXROptions* FromAPI(const WGPURequestAdapterWebXROptions* rhs) {
        return reinterpret_cast<const RequestAdapterWebXROptions*>(rhs);
    }
    inline RequestAdapterWebXROptions* FromAPI(WGPURequestAdapterWebXROptions* rhs) {
        return reinterpret_cast<RequestAdapterWebXROptions*>(rhs);
    }
    inline const RequestAdapterWebXROptions* FromAPI(const RequestAdapterWebXROptions* rhs) {
        return rhs;
    }
    inline RequestAdapterWebXROptions* FromAPI(RequestAdapterWebXROptions* rhs) {
        return rhs;
    }
    inline const wgpu::RequestAdapterWebXROptions* ToCppAPI(const RequestAdapterWebXROptions* rhs) {
        return reinterpret_cast<const wgpu::RequestAdapterWebXROptions*>(rhs);
    }
    inline wgpu::RequestAdapterWebXROptions* ToCppAPI(RequestAdapterWebXROptions* rhs) {
        return reinterpret_cast<wgpu::RequestAdapterWebXROptions*>(rhs);
    }
    inline const RequestAdapterWebXROptions* FromCppAPI(const wgpu::RequestAdapterWebXROptions* rhs) {
        return reinterpret_cast<const RequestAdapterWebXROptions*>(rhs);
    }
    inline RequestAdapterWebXROptions* FromCppAPI(wgpu::RequestAdapterWebXROptions* rhs) {
        return reinterpret_cast<RequestAdapterWebXROptions*>(rhs);
    }
inline const RequestAdapterWebXROptions& FromAPI(const WGPURequestAdapterWebXROptions& rhs) {
        return *reinterpret_cast<const RequestAdapterWebXROptions*>(&rhs);
    }
    inline RequestAdapterWebXROptions& FromAPI(WGPURequestAdapterWebXROptions& rhs) {
        return *reinterpret_cast<RequestAdapterWebXROptions*>(&rhs);
    }
    inline const RequestAdapterWebXROptions& FromAPI(const RequestAdapterWebXROptions& rhs) {
        return rhs;
    }
    inline RequestAdapterWebXROptions& FromAPI(RequestAdapterWebXROptions& rhs) {
        return rhs;
    }
inline const WGPUResourceTableDescriptor* ToAPI(const ResourceTableDescriptor* rhs) {
        return reinterpret_cast<const WGPUResourceTableDescriptor*>(rhs);
    }
    inline WGPUResourceTableDescriptor* ToAPI(ResourceTableDescriptor* rhs) {
        return reinterpret_cast<WGPUResourceTableDescriptor*>(rhs);
    }
    inline const WGPUResourceTableDescriptor* ToAPI(const WGPUResourceTableDescriptor* rhs) {
        return rhs;
    }
    inline WGPUResourceTableDescriptor* ToAPI(WGPUResourceTableDescriptor* rhs) {
        return rhs;
    }
    inline const ResourceTableDescriptor* FromAPI(const WGPUResourceTableDescriptor* rhs) {
        return reinterpret_cast<const ResourceTableDescriptor*>(rhs);
    }
    inline ResourceTableDescriptor* FromAPI(WGPUResourceTableDescriptor* rhs) {
        return reinterpret_cast<ResourceTableDescriptor*>(rhs);
    }
    inline const ResourceTableDescriptor* FromAPI(const ResourceTableDescriptor* rhs) {
        return rhs;
    }
    inline ResourceTableDescriptor* FromAPI(ResourceTableDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::ResourceTableDescriptor* ToCppAPI(const ResourceTableDescriptor* rhs) {
        return reinterpret_cast<const wgpu::ResourceTableDescriptor*>(rhs);
    }
    inline wgpu::ResourceTableDescriptor* ToCppAPI(ResourceTableDescriptor* rhs) {
        return reinterpret_cast<wgpu::ResourceTableDescriptor*>(rhs);
    }
    inline const ResourceTableDescriptor* FromCppAPI(const wgpu::ResourceTableDescriptor* rhs) {
        return reinterpret_cast<const ResourceTableDescriptor*>(rhs);
    }
    inline ResourceTableDescriptor* FromCppAPI(wgpu::ResourceTableDescriptor* rhs) {
        return reinterpret_cast<ResourceTableDescriptor*>(rhs);
    }
inline const ResourceTableDescriptor& FromAPI(const WGPUResourceTableDescriptor& rhs) {
        return *reinterpret_cast<const ResourceTableDescriptor*>(&rhs);
    }
    inline ResourceTableDescriptor& FromAPI(WGPUResourceTableDescriptor& rhs) {
        return *reinterpret_cast<ResourceTableDescriptor*>(&rhs);
    }
    inline const ResourceTableDescriptor& FromAPI(const ResourceTableDescriptor& rhs) {
        return rhs;
    }
    inline ResourceTableDescriptor& FromAPI(ResourceTableDescriptor& rhs) {
        return rhs;
    }
inline const WGPUSamplerBindingLayout* ToAPI(const SamplerBindingLayout* rhs) {
        return reinterpret_cast<const WGPUSamplerBindingLayout*>(rhs);
    }
    inline WGPUSamplerBindingLayout* ToAPI(SamplerBindingLayout* rhs) {
        return reinterpret_cast<WGPUSamplerBindingLayout*>(rhs);
    }
    inline const WGPUSamplerBindingLayout* ToAPI(const WGPUSamplerBindingLayout* rhs) {
        return rhs;
    }
    inline WGPUSamplerBindingLayout* ToAPI(WGPUSamplerBindingLayout* rhs) {
        return rhs;
    }
    inline const SamplerBindingLayout* FromAPI(const WGPUSamplerBindingLayout* rhs) {
        return reinterpret_cast<const SamplerBindingLayout*>(rhs);
    }
    inline SamplerBindingLayout* FromAPI(WGPUSamplerBindingLayout* rhs) {
        return reinterpret_cast<SamplerBindingLayout*>(rhs);
    }
    inline const SamplerBindingLayout* FromAPI(const SamplerBindingLayout* rhs) {
        return rhs;
    }
    inline SamplerBindingLayout* FromAPI(SamplerBindingLayout* rhs) {
        return rhs;
    }
    inline const wgpu::SamplerBindingLayout* ToCppAPI(const SamplerBindingLayout* rhs) {
        return reinterpret_cast<const wgpu::SamplerBindingLayout*>(rhs);
    }
    inline wgpu::SamplerBindingLayout* ToCppAPI(SamplerBindingLayout* rhs) {
        return reinterpret_cast<wgpu::SamplerBindingLayout*>(rhs);
    }
    inline const SamplerBindingLayout* FromCppAPI(const wgpu::SamplerBindingLayout* rhs) {
        return reinterpret_cast<const SamplerBindingLayout*>(rhs);
    }
    inline SamplerBindingLayout* FromCppAPI(wgpu::SamplerBindingLayout* rhs) {
        return reinterpret_cast<SamplerBindingLayout*>(rhs);
    }
inline const SamplerBindingLayout& FromAPI(const WGPUSamplerBindingLayout& rhs) {
        return *reinterpret_cast<const SamplerBindingLayout*>(&rhs);
    }
    inline SamplerBindingLayout& FromAPI(WGPUSamplerBindingLayout& rhs) {
        return *reinterpret_cast<SamplerBindingLayout*>(&rhs);
    }
    inline const SamplerBindingLayout& FromAPI(const SamplerBindingLayout& rhs) {
        return rhs;
    }
    inline SamplerBindingLayout& FromAPI(SamplerBindingLayout& rhs) {
        return rhs;
    }
inline const WGPUShaderModuleCompilationOptions* ToAPI(const ShaderModuleCompilationOptions* rhs) {
        return reinterpret_cast<const WGPUShaderModuleCompilationOptions*>(rhs);
    }
    inline WGPUShaderModuleCompilationOptions* ToAPI(ShaderModuleCompilationOptions* rhs) {
        return reinterpret_cast<WGPUShaderModuleCompilationOptions*>(rhs);
    }
    inline const WGPUShaderModuleCompilationOptions* ToAPI(const WGPUShaderModuleCompilationOptions* rhs) {
        return rhs;
    }
    inline WGPUShaderModuleCompilationOptions* ToAPI(WGPUShaderModuleCompilationOptions* rhs) {
        return rhs;
    }
    inline const ShaderModuleCompilationOptions* FromAPI(const WGPUShaderModuleCompilationOptions* rhs) {
        return reinterpret_cast<const ShaderModuleCompilationOptions*>(rhs);
    }
    inline ShaderModuleCompilationOptions* FromAPI(WGPUShaderModuleCompilationOptions* rhs) {
        return reinterpret_cast<ShaderModuleCompilationOptions*>(rhs);
    }
    inline const ShaderModuleCompilationOptions* FromAPI(const ShaderModuleCompilationOptions* rhs) {
        return rhs;
    }
    inline ShaderModuleCompilationOptions* FromAPI(ShaderModuleCompilationOptions* rhs) {
        return rhs;
    }
    inline const wgpu::ShaderModuleCompilationOptions* ToCppAPI(const ShaderModuleCompilationOptions* rhs) {
        return reinterpret_cast<const wgpu::ShaderModuleCompilationOptions*>(rhs);
    }
    inline wgpu::ShaderModuleCompilationOptions* ToCppAPI(ShaderModuleCompilationOptions* rhs) {
        return reinterpret_cast<wgpu::ShaderModuleCompilationOptions*>(rhs);
    }
    inline const ShaderModuleCompilationOptions* FromCppAPI(const wgpu::ShaderModuleCompilationOptions* rhs) {
        return reinterpret_cast<const ShaderModuleCompilationOptions*>(rhs);
    }
    inline ShaderModuleCompilationOptions* FromCppAPI(wgpu::ShaderModuleCompilationOptions* rhs) {
        return reinterpret_cast<ShaderModuleCompilationOptions*>(rhs);
    }
inline const ShaderModuleCompilationOptions& FromAPI(const WGPUShaderModuleCompilationOptions& rhs) {
        return *reinterpret_cast<const ShaderModuleCompilationOptions*>(&rhs);
    }
    inline ShaderModuleCompilationOptions& FromAPI(WGPUShaderModuleCompilationOptions& rhs) {
        return *reinterpret_cast<ShaderModuleCompilationOptions*>(&rhs);
    }
    inline const ShaderModuleCompilationOptions& FromAPI(const ShaderModuleCompilationOptions& rhs) {
        return rhs;
    }
    inline ShaderModuleCompilationOptions& FromAPI(ShaderModuleCompilationOptions& rhs) {
        return rhs;
    }
inline const WGPUShaderSourceSPIRV* ToAPI(const ShaderSourceSPIRV* rhs) {
        return reinterpret_cast<const WGPUShaderSourceSPIRV*>(rhs);
    }
    inline WGPUShaderSourceSPIRV* ToAPI(ShaderSourceSPIRV* rhs) {
        return reinterpret_cast<WGPUShaderSourceSPIRV*>(rhs);
    }
    inline const WGPUShaderSourceSPIRV* ToAPI(const WGPUShaderSourceSPIRV* rhs) {
        return rhs;
    }
    inline WGPUShaderSourceSPIRV* ToAPI(WGPUShaderSourceSPIRV* rhs) {
        return rhs;
    }
    inline const ShaderSourceSPIRV* FromAPI(const WGPUShaderSourceSPIRV* rhs) {
        return reinterpret_cast<const ShaderSourceSPIRV*>(rhs);
    }
    inline ShaderSourceSPIRV* FromAPI(WGPUShaderSourceSPIRV* rhs) {
        return reinterpret_cast<ShaderSourceSPIRV*>(rhs);
    }
    inline const ShaderSourceSPIRV* FromAPI(const ShaderSourceSPIRV* rhs) {
        return rhs;
    }
    inline ShaderSourceSPIRV* FromAPI(ShaderSourceSPIRV* rhs) {
        return rhs;
    }
    inline const wgpu::ShaderSourceSPIRV* ToCppAPI(const ShaderSourceSPIRV* rhs) {
        return reinterpret_cast<const wgpu::ShaderSourceSPIRV*>(rhs);
    }
    inline wgpu::ShaderSourceSPIRV* ToCppAPI(ShaderSourceSPIRV* rhs) {
        return reinterpret_cast<wgpu::ShaderSourceSPIRV*>(rhs);
    }
    inline const ShaderSourceSPIRV* FromCppAPI(const wgpu::ShaderSourceSPIRV* rhs) {
        return reinterpret_cast<const ShaderSourceSPIRV*>(rhs);
    }
    inline ShaderSourceSPIRV* FromCppAPI(wgpu::ShaderSourceSPIRV* rhs) {
        return reinterpret_cast<ShaderSourceSPIRV*>(rhs);
    }
inline const ShaderSourceSPIRV& FromAPI(const WGPUShaderSourceSPIRV& rhs) {
        return *reinterpret_cast<const ShaderSourceSPIRV*>(&rhs);
    }
    inline ShaderSourceSPIRV& FromAPI(WGPUShaderSourceSPIRV& rhs) {
        return *reinterpret_cast<ShaderSourceSPIRV*>(&rhs);
    }
    inline const ShaderSourceSPIRV& FromAPI(const ShaderSourceSPIRV& rhs) {
        return rhs;
    }
    inline ShaderSourceSPIRV& FromAPI(ShaderSourceSPIRV& rhs) {
        return rhs;
    }
inline const WGPUShaderSourceWGSL* ToAPI(const ShaderSourceWGSL* rhs) {
        return reinterpret_cast<const WGPUShaderSourceWGSL*>(rhs);
    }
    inline WGPUShaderSourceWGSL* ToAPI(ShaderSourceWGSL* rhs) {
        return reinterpret_cast<WGPUShaderSourceWGSL*>(rhs);
    }
    inline const WGPUShaderSourceWGSL* ToAPI(const WGPUShaderSourceWGSL* rhs) {
        return rhs;
    }
    inline WGPUShaderSourceWGSL* ToAPI(WGPUShaderSourceWGSL* rhs) {
        return rhs;
    }
    inline const ShaderSourceWGSL* FromAPI(const WGPUShaderSourceWGSL* rhs) {
        return reinterpret_cast<const ShaderSourceWGSL*>(rhs);
    }
    inline ShaderSourceWGSL* FromAPI(WGPUShaderSourceWGSL* rhs) {
        return reinterpret_cast<ShaderSourceWGSL*>(rhs);
    }
    inline const ShaderSourceWGSL* FromAPI(const ShaderSourceWGSL* rhs) {
        return rhs;
    }
    inline ShaderSourceWGSL* FromAPI(ShaderSourceWGSL* rhs) {
        return rhs;
    }
    inline const wgpu::ShaderSourceWGSL* ToCppAPI(const ShaderSourceWGSL* rhs) {
        return reinterpret_cast<const wgpu::ShaderSourceWGSL*>(rhs);
    }
    inline wgpu::ShaderSourceWGSL* ToCppAPI(ShaderSourceWGSL* rhs) {
        return reinterpret_cast<wgpu::ShaderSourceWGSL*>(rhs);
    }
    inline const ShaderSourceWGSL* FromCppAPI(const wgpu::ShaderSourceWGSL* rhs) {
        return reinterpret_cast<const ShaderSourceWGSL*>(rhs);
    }
    inline ShaderSourceWGSL* FromCppAPI(wgpu::ShaderSourceWGSL* rhs) {
        return reinterpret_cast<ShaderSourceWGSL*>(rhs);
    }
inline const ShaderSourceWGSL& FromAPI(const WGPUShaderSourceWGSL& rhs) {
        return *reinterpret_cast<const ShaderSourceWGSL*>(&rhs);
    }
    inline ShaderSourceWGSL& FromAPI(WGPUShaderSourceWGSL& rhs) {
        return *reinterpret_cast<ShaderSourceWGSL*>(&rhs);
    }
    inline const ShaderSourceWGSL& FromAPI(const ShaderSourceWGSL& rhs) {
        return rhs;
    }
    inline ShaderSourceWGSL& FromAPI(ShaderSourceWGSL& rhs) {
        return rhs;
    }
inline const WGPUSharedBufferMemoryBeginAccessDescriptor* ToAPI(const SharedBufferMemoryBeginAccessDescriptor* rhs) {
        return reinterpret_cast<const WGPUSharedBufferMemoryBeginAccessDescriptor*>(rhs);
    }
    inline WGPUSharedBufferMemoryBeginAccessDescriptor* ToAPI(SharedBufferMemoryBeginAccessDescriptor* rhs) {
        return reinterpret_cast<WGPUSharedBufferMemoryBeginAccessDescriptor*>(rhs);
    }
    inline const WGPUSharedBufferMemoryBeginAccessDescriptor* ToAPI(const WGPUSharedBufferMemoryBeginAccessDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSharedBufferMemoryBeginAccessDescriptor* ToAPI(WGPUSharedBufferMemoryBeginAccessDescriptor* rhs) {
        return rhs;
    }
    inline const SharedBufferMemoryBeginAccessDescriptor* FromAPI(const WGPUSharedBufferMemoryBeginAccessDescriptor* rhs) {
        return reinterpret_cast<const SharedBufferMemoryBeginAccessDescriptor*>(rhs);
    }
    inline SharedBufferMemoryBeginAccessDescriptor* FromAPI(WGPUSharedBufferMemoryBeginAccessDescriptor* rhs) {
        return reinterpret_cast<SharedBufferMemoryBeginAccessDescriptor*>(rhs);
    }
    inline const SharedBufferMemoryBeginAccessDescriptor* FromAPI(const SharedBufferMemoryBeginAccessDescriptor* rhs) {
        return rhs;
    }
    inline SharedBufferMemoryBeginAccessDescriptor* FromAPI(SharedBufferMemoryBeginAccessDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SharedBufferMemoryBeginAccessDescriptor* ToCppAPI(const SharedBufferMemoryBeginAccessDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SharedBufferMemoryBeginAccessDescriptor*>(rhs);
    }
    inline wgpu::SharedBufferMemoryBeginAccessDescriptor* ToCppAPI(SharedBufferMemoryBeginAccessDescriptor* rhs) {
        return reinterpret_cast<wgpu::SharedBufferMemoryBeginAccessDescriptor*>(rhs);
    }
    inline const SharedBufferMemoryBeginAccessDescriptor* FromCppAPI(const wgpu::SharedBufferMemoryBeginAccessDescriptor* rhs) {
        return reinterpret_cast<const SharedBufferMemoryBeginAccessDescriptor*>(rhs);
    }
    inline SharedBufferMemoryBeginAccessDescriptor* FromCppAPI(wgpu::SharedBufferMemoryBeginAccessDescriptor* rhs) {
        return reinterpret_cast<SharedBufferMemoryBeginAccessDescriptor*>(rhs);
    }
inline const SharedBufferMemoryBeginAccessDescriptor& FromAPI(const WGPUSharedBufferMemoryBeginAccessDescriptor& rhs) {
        return *reinterpret_cast<const SharedBufferMemoryBeginAccessDescriptor*>(&rhs);
    }
    inline SharedBufferMemoryBeginAccessDescriptor& FromAPI(WGPUSharedBufferMemoryBeginAccessDescriptor& rhs) {
        return *reinterpret_cast<SharedBufferMemoryBeginAccessDescriptor*>(&rhs);
    }
    inline const SharedBufferMemoryBeginAccessDescriptor& FromAPI(const SharedBufferMemoryBeginAccessDescriptor& rhs) {
        return rhs;
    }
    inline SharedBufferMemoryBeginAccessDescriptor& FromAPI(SharedBufferMemoryBeginAccessDescriptor& rhs) {
        return rhs;
    }
inline const WGPUSharedBufferMemoryEndAccessState* ToAPI(const SharedBufferMemoryEndAccessState* rhs) {
        return reinterpret_cast<const WGPUSharedBufferMemoryEndAccessState*>(rhs);
    }
    inline WGPUSharedBufferMemoryEndAccessState* ToAPI(SharedBufferMemoryEndAccessState* rhs) {
        return reinterpret_cast<WGPUSharedBufferMemoryEndAccessState*>(rhs);
    }
    inline const WGPUSharedBufferMemoryEndAccessState* ToAPI(const WGPUSharedBufferMemoryEndAccessState* rhs) {
        return rhs;
    }
    inline WGPUSharedBufferMemoryEndAccessState* ToAPI(WGPUSharedBufferMemoryEndAccessState* rhs) {
        return rhs;
    }
    inline const SharedBufferMemoryEndAccessState* FromAPI(const WGPUSharedBufferMemoryEndAccessState* rhs) {
        return reinterpret_cast<const SharedBufferMemoryEndAccessState*>(rhs);
    }
    inline SharedBufferMemoryEndAccessState* FromAPI(WGPUSharedBufferMemoryEndAccessState* rhs) {
        return reinterpret_cast<SharedBufferMemoryEndAccessState*>(rhs);
    }
    inline const SharedBufferMemoryEndAccessState* FromAPI(const SharedBufferMemoryEndAccessState* rhs) {
        return rhs;
    }
    inline SharedBufferMemoryEndAccessState* FromAPI(SharedBufferMemoryEndAccessState* rhs) {
        return rhs;
    }
    inline const wgpu::SharedBufferMemoryEndAccessState* ToCppAPI(const SharedBufferMemoryEndAccessState* rhs) {
        return reinterpret_cast<const wgpu::SharedBufferMemoryEndAccessState*>(rhs);
    }
    inline wgpu::SharedBufferMemoryEndAccessState* ToCppAPI(SharedBufferMemoryEndAccessState* rhs) {
        return reinterpret_cast<wgpu::SharedBufferMemoryEndAccessState*>(rhs);
    }
    inline const SharedBufferMemoryEndAccessState* FromCppAPI(const wgpu::SharedBufferMemoryEndAccessState* rhs) {
        return reinterpret_cast<const SharedBufferMemoryEndAccessState*>(rhs);
    }
    inline SharedBufferMemoryEndAccessState* FromCppAPI(wgpu::SharedBufferMemoryEndAccessState* rhs) {
        return reinterpret_cast<SharedBufferMemoryEndAccessState*>(rhs);
    }
inline const SharedBufferMemoryEndAccessState& FromAPI(const WGPUSharedBufferMemoryEndAccessState& rhs) {
        return *reinterpret_cast<const SharedBufferMemoryEndAccessState*>(&rhs);
    }
    inline SharedBufferMemoryEndAccessState& FromAPI(WGPUSharedBufferMemoryEndAccessState& rhs) {
        return *reinterpret_cast<SharedBufferMemoryEndAccessState*>(&rhs);
    }
    inline const SharedBufferMemoryEndAccessState& FromAPI(const SharedBufferMemoryEndAccessState& rhs) {
        return rhs;
    }
    inline SharedBufferMemoryEndAccessState& FromAPI(SharedBufferMemoryEndAccessState& rhs) {
        return rhs;
    }
inline const WGPUSharedBufferMemoryFromWindowsHandleDescriptor* ToAPI(const SharedBufferMemoryFromWindowsHandleDescriptor* rhs) {
        return reinterpret_cast<const WGPUSharedBufferMemoryFromWindowsHandleDescriptor*>(rhs);
    }
    inline WGPUSharedBufferMemoryFromWindowsHandleDescriptor* ToAPI(SharedBufferMemoryFromWindowsHandleDescriptor* rhs) {
        return reinterpret_cast<WGPUSharedBufferMemoryFromWindowsHandleDescriptor*>(rhs);
    }
    inline const WGPUSharedBufferMemoryFromWindowsHandleDescriptor* ToAPI(const WGPUSharedBufferMemoryFromWindowsHandleDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSharedBufferMemoryFromWindowsHandleDescriptor* ToAPI(WGPUSharedBufferMemoryFromWindowsHandleDescriptor* rhs) {
        return rhs;
    }
    inline const SharedBufferMemoryFromWindowsHandleDescriptor* FromAPI(const WGPUSharedBufferMemoryFromWindowsHandleDescriptor* rhs) {
        return reinterpret_cast<const SharedBufferMemoryFromWindowsHandleDescriptor*>(rhs);
    }
    inline SharedBufferMemoryFromWindowsHandleDescriptor* FromAPI(WGPUSharedBufferMemoryFromWindowsHandleDescriptor* rhs) {
        return reinterpret_cast<SharedBufferMemoryFromWindowsHandleDescriptor*>(rhs);
    }
    inline const SharedBufferMemoryFromWindowsHandleDescriptor* FromAPI(const SharedBufferMemoryFromWindowsHandleDescriptor* rhs) {
        return rhs;
    }
    inline SharedBufferMemoryFromWindowsHandleDescriptor* FromAPI(SharedBufferMemoryFromWindowsHandleDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SharedBufferMemoryFromWindowsHandleDescriptor* ToCppAPI(const SharedBufferMemoryFromWindowsHandleDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SharedBufferMemoryFromWindowsHandleDescriptor*>(rhs);
    }
    inline wgpu::SharedBufferMemoryFromWindowsHandleDescriptor* ToCppAPI(SharedBufferMemoryFromWindowsHandleDescriptor* rhs) {
        return reinterpret_cast<wgpu::SharedBufferMemoryFromWindowsHandleDescriptor*>(rhs);
    }
    inline const SharedBufferMemoryFromWindowsHandleDescriptor* FromCppAPI(const wgpu::SharedBufferMemoryFromWindowsHandleDescriptor* rhs) {
        return reinterpret_cast<const SharedBufferMemoryFromWindowsHandleDescriptor*>(rhs);
    }
    inline SharedBufferMemoryFromWindowsHandleDescriptor* FromCppAPI(wgpu::SharedBufferMemoryFromWindowsHandleDescriptor* rhs) {
        return reinterpret_cast<SharedBufferMemoryFromWindowsHandleDescriptor*>(rhs);
    }
inline const SharedBufferMemoryFromWindowsHandleDescriptor& FromAPI(const WGPUSharedBufferMemoryFromWindowsHandleDescriptor& rhs) {
        return *reinterpret_cast<const SharedBufferMemoryFromWindowsHandleDescriptor*>(&rhs);
    }
    inline SharedBufferMemoryFromWindowsHandleDescriptor& FromAPI(WGPUSharedBufferMemoryFromWindowsHandleDescriptor& rhs) {
        return *reinterpret_cast<SharedBufferMemoryFromWindowsHandleDescriptor*>(&rhs);
    }
    inline const SharedBufferMemoryFromWindowsHandleDescriptor& FromAPI(const SharedBufferMemoryFromWindowsHandleDescriptor& rhs) {
        return rhs;
    }
    inline SharedBufferMemoryFromWindowsHandleDescriptor& FromAPI(SharedBufferMemoryFromWindowsHandleDescriptor& rhs) {
        return rhs;
    }
inline const WGPUSharedBufferMemoryHostPointerDescriptor* ToAPI(const SharedBufferMemoryHostPointerDescriptor* rhs) {
        return reinterpret_cast<const WGPUSharedBufferMemoryHostPointerDescriptor*>(rhs);
    }
    inline WGPUSharedBufferMemoryHostPointerDescriptor* ToAPI(SharedBufferMemoryHostPointerDescriptor* rhs) {
        return reinterpret_cast<WGPUSharedBufferMemoryHostPointerDescriptor*>(rhs);
    }
    inline const WGPUSharedBufferMemoryHostPointerDescriptor* ToAPI(const WGPUSharedBufferMemoryHostPointerDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSharedBufferMemoryHostPointerDescriptor* ToAPI(WGPUSharedBufferMemoryHostPointerDescriptor* rhs) {
        return rhs;
    }
    inline const SharedBufferMemoryHostPointerDescriptor* FromAPI(const WGPUSharedBufferMemoryHostPointerDescriptor* rhs) {
        return reinterpret_cast<const SharedBufferMemoryHostPointerDescriptor*>(rhs);
    }
    inline SharedBufferMemoryHostPointerDescriptor* FromAPI(WGPUSharedBufferMemoryHostPointerDescriptor* rhs) {
        return reinterpret_cast<SharedBufferMemoryHostPointerDescriptor*>(rhs);
    }
    inline const SharedBufferMemoryHostPointerDescriptor* FromAPI(const SharedBufferMemoryHostPointerDescriptor* rhs) {
        return rhs;
    }
    inline SharedBufferMemoryHostPointerDescriptor* FromAPI(SharedBufferMemoryHostPointerDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SharedBufferMemoryHostPointerDescriptor* ToCppAPI(const SharedBufferMemoryHostPointerDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SharedBufferMemoryHostPointerDescriptor*>(rhs);
    }
    inline wgpu::SharedBufferMemoryHostPointerDescriptor* ToCppAPI(SharedBufferMemoryHostPointerDescriptor* rhs) {
        return reinterpret_cast<wgpu::SharedBufferMemoryHostPointerDescriptor*>(rhs);
    }
    inline const SharedBufferMemoryHostPointerDescriptor* FromCppAPI(const wgpu::SharedBufferMemoryHostPointerDescriptor* rhs) {
        return reinterpret_cast<const SharedBufferMemoryHostPointerDescriptor*>(rhs);
    }
    inline SharedBufferMemoryHostPointerDescriptor* FromCppAPI(wgpu::SharedBufferMemoryHostPointerDescriptor* rhs) {
        return reinterpret_cast<SharedBufferMemoryHostPointerDescriptor*>(rhs);
    }
inline const SharedBufferMemoryHostPointerDescriptor& FromAPI(const WGPUSharedBufferMemoryHostPointerDescriptor& rhs) {
        return *reinterpret_cast<const SharedBufferMemoryHostPointerDescriptor*>(&rhs);
    }
    inline SharedBufferMemoryHostPointerDescriptor& FromAPI(WGPUSharedBufferMemoryHostPointerDescriptor& rhs) {
        return *reinterpret_cast<SharedBufferMemoryHostPointerDescriptor*>(&rhs);
    }
    inline const SharedBufferMemoryHostPointerDescriptor& FromAPI(const SharedBufferMemoryHostPointerDescriptor& rhs) {
        return rhs;
    }
    inline SharedBufferMemoryHostPointerDescriptor& FromAPI(SharedBufferMemoryHostPointerDescriptor& rhs) {
        return rhs;
    }
inline const WGPUSharedBufferMemoryProperties* ToAPI(const SharedBufferMemoryProperties* rhs) {
        return reinterpret_cast<const WGPUSharedBufferMemoryProperties*>(rhs);
    }
    inline WGPUSharedBufferMemoryProperties* ToAPI(SharedBufferMemoryProperties* rhs) {
        return reinterpret_cast<WGPUSharedBufferMemoryProperties*>(rhs);
    }
    inline const WGPUSharedBufferMemoryProperties* ToAPI(const WGPUSharedBufferMemoryProperties* rhs) {
        return rhs;
    }
    inline WGPUSharedBufferMemoryProperties* ToAPI(WGPUSharedBufferMemoryProperties* rhs) {
        return rhs;
    }
    inline const SharedBufferMemoryProperties* FromAPI(const WGPUSharedBufferMemoryProperties* rhs) {
        return reinterpret_cast<const SharedBufferMemoryProperties*>(rhs);
    }
    inline SharedBufferMemoryProperties* FromAPI(WGPUSharedBufferMemoryProperties* rhs) {
        return reinterpret_cast<SharedBufferMemoryProperties*>(rhs);
    }
    inline const SharedBufferMemoryProperties* FromAPI(const SharedBufferMemoryProperties* rhs) {
        return rhs;
    }
    inline SharedBufferMemoryProperties* FromAPI(SharedBufferMemoryProperties* rhs) {
        return rhs;
    }
    inline const wgpu::SharedBufferMemoryProperties* ToCppAPI(const SharedBufferMemoryProperties* rhs) {
        return reinterpret_cast<const wgpu::SharedBufferMemoryProperties*>(rhs);
    }
    inline wgpu::SharedBufferMemoryProperties* ToCppAPI(SharedBufferMemoryProperties* rhs) {
        return reinterpret_cast<wgpu::SharedBufferMemoryProperties*>(rhs);
    }
    inline const SharedBufferMemoryProperties* FromCppAPI(const wgpu::SharedBufferMemoryProperties* rhs) {
        return reinterpret_cast<const SharedBufferMemoryProperties*>(rhs);
    }
    inline SharedBufferMemoryProperties* FromCppAPI(wgpu::SharedBufferMemoryProperties* rhs) {
        return reinterpret_cast<SharedBufferMemoryProperties*>(rhs);
    }
inline const SharedBufferMemoryProperties& FromAPI(const WGPUSharedBufferMemoryProperties& rhs) {
        return *reinterpret_cast<const SharedBufferMemoryProperties*>(&rhs);
    }
    inline SharedBufferMemoryProperties& FromAPI(WGPUSharedBufferMemoryProperties& rhs) {
        return *reinterpret_cast<SharedBufferMemoryProperties*>(&rhs);
    }
    inline const SharedBufferMemoryProperties& FromAPI(const SharedBufferMemoryProperties& rhs) {
        return rhs;
    }
    inline SharedBufferMemoryProperties& FromAPI(SharedBufferMemoryProperties& rhs) {
        return rhs;
    }
inline const WGPUSharedFenceDXGISharedHandleDescriptor* ToAPI(const SharedFenceDXGISharedHandleDescriptor* rhs) {
        return reinterpret_cast<const WGPUSharedFenceDXGISharedHandleDescriptor*>(rhs);
    }
    inline WGPUSharedFenceDXGISharedHandleDescriptor* ToAPI(SharedFenceDXGISharedHandleDescriptor* rhs) {
        return reinterpret_cast<WGPUSharedFenceDXGISharedHandleDescriptor*>(rhs);
    }
    inline const WGPUSharedFenceDXGISharedHandleDescriptor* ToAPI(const WGPUSharedFenceDXGISharedHandleDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSharedFenceDXGISharedHandleDescriptor* ToAPI(WGPUSharedFenceDXGISharedHandleDescriptor* rhs) {
        return rhs;
    }
    inline const SharedFenceDXGISharedHandleDescriptor* FromAPI(const WGPUSharedFenceDXGISharedHandleDescriptor* rhs) {
        return reinterpret_cast<const SharedFenceDXGISharedHandleDescriptor*>(rhs);
    }
    inline SharedFenceDXGISharedHandleDescriptor* FromAPI(WGPUSharedFenceDXGISharedHandleDescriptor* rhs) {
        return reinterpret_cast<SharedFenceDXGISharedHandleDescriptor*>(rhs);
    }
    inline const SharedFenceDXGISharedHandleDescriptor* FromAPI(const SharedFenceDXGISharedHandleDescriptor* rhs) {
        return rhs;
    }
    inline SharedFenceDXGISharedHandleDescriptor* FromAPI(SharedFenceDXGISharedHandleDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SharedFenceDXGISharedHandleDescriptor* ToCppAPI(const SharedFenceDXGISharedHandleDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SharedFenceDXGISharedHandleDescriptor*>(rhs);
    }
    inline wgpu::SharedFenceDXGISharedHandleDescriptor* ToCppAPI(SharedFenceDXGISharedHandleDescriptor* rhs) {
        return reinterpret_cast<wgpu::SharedFenceDXGISharedHandleDescriptor*>(rhs);
    }
    inline const SharedFenceDXGISharedHandleDescriptor* FromCppAPI(const wgpu::SharedFenceDXGISharedHandleDescriptor* rhs) {
        return reinterpret_cast<const SharedFenceDXGISharedHandleDescriptor*>(rhs);
    }
    inline SharedFenceDXGISharedHandleDescriptor* FromCppAPI(wgpu::SharedFenceDXGISharedHandleDescriptor* rhs) {
        return reinterpret_cast<SharedFenceDXGISharedHandleDescriptor*>(rhs);
    }
inline const SharedFenceDXGISharedHandleDescriptor& FromAPI(const WGPUSharedFenceDXGISharedHandleDescriptor& rhs) {
        return *reinterpret_cast<const SharedFenceDXGISharedHandleDescriptor*>(&rhs);
    }
    inline SharedFenceDXGISharedHandleDescriptor& FromAPI(WGPUSharedFenceDXGISharedHandleDescriptor& rhs) {
        return *reinterpret_cast<SharedFenceDXGISharedHandleDescriptor*>(&rhs);
    }
    inline const SharedFenceDXGISharedHandleDescriptor& FromAPI(const SharedFenceDXGISharedHandleDescriptor& rhs) {
        return rhs;
    }
    inline SharedFenceDXGISharedHandleDescriptor& FromAPI(SharedFenceDXGISharedHandleDescriptor& rhs) {
        return rhs;
    }
inline const WGPUSharedFenceDXGISharedHandleExportInfo* ToAPI(const SharedFenceDXGISharedHandleExportInfo* rhs) {
        return reinterpret_cast<const WGPUSharedFenceDXGISharedHandleExportInfo*>(rhs);
    }
    inline WGPUSharedFenceDXGISharedHandleExportInfo* ToAPI(SharedFenceDXGISharedHandleExportInfo* rhs) {
        return reinterpret_cast<WGPUSharedFenceDXGISharedHandleExportInfo*>(rhs);
    }
    inline const WGPUSharedFenceDXGISharedHandleExportInfo* ToAPI(const WGPUSharedFenceDXGISharedHandleExportInfo* rhs) {
        return rhs;
    }
    inline WGPUSharedFenceDXGISharedHandleExportInfo* ToAPI(WGPUSharedFenceDXGISharedHandleExportInfo* rhs) {
        return rhs;
    }
    inline const SharedFenceDXGISharedHandleExportInfo* FromAPI(const WGPUSharedFenceDXGISharedHandleExportInfo* rhs) {
        return reinterpret_cast<const SharedFenceDXGISharedHandleExportInfo*>(rhs);
    }
    inline SharedFenceDXGISharedHandleExportInfo* FromAPI(WGPUSharedFenceDXGISharedHandleExportInfo* rhs) {
        return reinterpret_cast<SharedFenceDXGISharedHandleExportInfo*>(rhs);
    }
    inline const SharedFenceDXGISharedHandleExportInfo* FromAPI(const SharedFenceDXGISharedHandleExportInfo* rhs) {
        return rhs;
    }
    inline SharedFenceDXGISharedHandleExportInfo* FromAPI(SharedFenceDXGISharedHandleExportInfo* rhs) {
        return rhs;
    }
    inline const wgpu::SharedFenceDXGISharedHandleExportInfo* ToCppAPI(const SharedFenceDXGISharedHandleExportInfo* rhs) {
        return reinterpret_cast<const wgpu::SharedFenceDXGISharedHandleExportInfo*>(rhs);
    }
    inline wgpu::SharedFenceDXGISharedHandleExportInfo* ToCppAPI(SharedFenceDXGISharedHandleExportInfo* rhs) {
        return reinterpret_cast<wgpu::SharedFenceDXGISharedHandleExportInfo*>(rhs);
    }
    inline const SharedFenceDXGISharedHandleExportInfo* FromCppAPI(const wgpu::SharedFenceDXGISharedHandleExportInfo* rhs) {
        return reinterpret_cast<const SharedFenceDXGISharedHandleExportInfo*>(rhs);
    }
    inline SharedFenceDXGISharedHandleExportInfo* FromCppAPI(wgpu::SharedFenceDXGISharedHandleExportInfo* rhs) {
        return reinterpret_cast<SharedFenceDXGISharedHandleExportInfo*>(rhs);
    }
inline const SharedFenceDXGISharedHandleExportInfo& FromAPI(const WGPUSharedFenceDXGISharedHandleExportInfo& rhs) {
        return *reinterpret_cast<const SharedFenceDXGISharedHandleExportInfo*>(&rhs);
    }
    inline SharedFenceDXGISharedHandleExportInfo& FromAPI(WGPUSharedFenceDXGISharedHandleExportInfo& rhs) {
        return *reinterpret_cast<SharedFenceDXGISharedHandleExportInfo*>(&rhs);
    }
    inline const SharedFenceDXGISharedHandleExportInfo& FromAPI(const SharedFenceDXGISharedHandleExportInfo& rhs) {
        return rhs;
    }
    inline SharedFenceDXGISharedHandleExportInfo& FromAPI(SharedFenceDXGISharedHandleExportInfo& rhs) {
        return rhs;
    }
inline const WGPUSharedFenceEGLSyncDescriptor* ToAPI(const SharedFenceEGLSyncDescriptor* rhs) {
        return reinterpret_cast<const WGPUSharedFenceEGLSyncDescriptor*>(rhs);
    }
    inline WGPUSharedFenceEGLSyncDescriptor* ToAPI(SharedFenceEGLSyncDescriptor* rhs) {
        return reinterpret_cast<WGPUSharedFenceEGLSyncDescriptor*>(rhs);
    }
    inline const WGPUSharedFenceEGLSyncDescriptor* ToAPI(const WGPUSharedFenceEGLSyncDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSharedFenceEGLSyncDescriptor* ToAPI(WGPUSharedFenceEGLSyncDescriptor* rhs) {
        return rhs;
    }
    inline const SharedFenceEGLSyncDescriptor* FromAPI(const WGPUSharedFenceEGLSyncDescriptor* rhs) {
        return reinterpret_cast<const SharedFenceEGLSyncDescriptor*>(rhs);
    }
    inline SharedFenceEGLSyncDescriptor* FromAPI(WGPUSharedFenceEGLSyncDescriptor* rhs) {
        return reinterpret_cast<SharedFenceEGLSyncDescriptor*>(rhs);
    }
    inline const SharedFenceEGLSyncDescriptor* FromAPI(const SharedFenceEGLSyncDescriptor* rhs) {
        return rhs;
    }
    inline SharedFenceEGLSyncDescriptor* FromAPI(SharedFenceEGLSyncDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SharedFenceEGLSyncDescriptor* ToCppAPI(const SharedFenceEGLSyncDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SharedFenceEGLSyncDescriptor*>(rhs);
    }
    inline wgpu::SharedFenceEGLSyncDescriptor* ToCppAPI(SharedFenceEGLSyncDescriptor* rhs) {
        return reinterpret_cast<wgpu::SharedFenceEGLSyncDescriptor*>(rhs);
    }
    inline const SharedFenceEGLSyncDescriptor* FromCppAPI(const wgpu::SharedFenceEGLSyncDescriptor* rhs) {
        return reinterpret_cast<const SharedFenceEGLSyncDescriptor*>(rhs);
    }
    inline SharedFenceEGLSyncDescriptor* FromCppAPI(wgpu::SharedFenceEGLSyncDescriptor* rhs) {
        return reinterpret_cast<SharedFenceEGLSyncDescriptor*>(rhs);
    }
inline const SharedFenceEGLSyncDescriptor& FromAPI(const WGPUSharedFenceEGLSyncDescriptor& rhs) {
        return *reinterpret_cast<const SharedFenceEGLSyncDescriptor*>(&rhs);
    }
    inline SharedFenceEGLSyncDescriptor& FromAPI(WGPUSharedFenceEGLSyncDescriptor& rhs) {
        return *reinterpret_cast<SharedFenceEGLSyncDescriptor*>(&rhs);
    }
    inline const SharedFenceEGLSyncDescriptor& FromAPI(const SharedFenceEGLSyncDescriptor& rhs) {
        return rhs;
    }
    inline SharedFenceEGLSyncDescriptor& FromAPI(SharedFenceEGLSyncDescriptor& rhs) {
        return rhs;
    }
inline const WGPUSharedFenceEGLSyncExportInfo* ToAPI(const SharedFenceEGLSyncExportInfo* rhs) {
        return reinterpret_cast<const WGPUSharedFenceEGLSyncExportInfo*>(rhs);
    }
    inline WGPUSharedFenceEGLSyncExportInfo* ToAPI(SharedFenceEGLSyncExportInfo* rhs) {
        return reinterpret_cast<WGPUSharedFenceEGLSyncExportInfo*>(rhs);
    }
    inline const WGPUSharedFenceEGLSyncExportInfo* ToAPI(const WGPUSharedFenceEGLSyncExportInfo* rhs) {
        return rhs;
    }
    inline WGPUSharedFenceEGLSyncExportInfo* ToAPI(WGPUSharedFenceEGLSyncExportInfo* rhs) {
        return rhs;
    }
    inline const SharedFenceEGLSyncExportInfo* FromAPI(const WGPUSharedFenceEGLSyncExportInfo* rhs) {
        return reinterpret_cast<const SharedFenceEGLSyncExportInfo*>(rhs);
    }
    inline SharedFenceEGLSyncExportInfo* FromAPI(WGPUSharedFenceEGLSyncExportInfo* rhs) {
        return reinterpret_cast<SharedFenceEGLSyncExportInfo*>(rhs);
    }
    inline const SharedFenceEGLSyncExportInfo* FromAPI(const SharedFenceEGLSyncExportInfo* rhs) {
        return rhs;
    }
    inline SharedFenceEGLSyncExportInfo* FromAPI(SharedFenceEGLSyncExportInfo* rhs) {
        return rhs;
    }
    inline const wgpu::SharedFenceEGLSyncExportInfo* ToCppAPI(const SharedFenceEGLSyncExportInfo* rhs) {
        return reinterpret_cast<const wgpu::SharedFenceEGLSyncExportInfo*>(rhs);
    }
    inline wgpu::SharedFenceEGLSyncExportInfo* ToCppAPI(SharedFenceEGLSyncExportInfo* rhs) {
        return reinterpret_cast<wgpu::SharedFenceEGLSyncExportInfo*>(rhs);
    }
    inline const SharedFenceEGLSyncExportInfo* FromCppAPI(const wgpu::SharedFenceEGLSyncExportInfo* rhs) {
        return reinterpret_cast<const SharedFenceEGLSyncExportInfo*>(rhs);
    }
    inline SharedFenceEGLSyncExportInfo* FromCppAPI(wgpu::SharedFenceEGLSyncExportInfo* rhs) {
        return reinterpret_cast<SharedFenceEGLSyncExportInfo*>(rhs);
    }
inline const SharedFenceEGLSyncExportInfo& FromAPI(const WGPUSharedFenceEGLSyncExportInfo& rhs) {
        return *reinterpret_cast<const SharedFenceEGLSyncExportInfo*>(&rhs);
    }
    inline SharedFenceEGLSyncExportInfo& FromAPI(WGPUSharedFenceEGLSyncExportInfo& rhs) {
        return *reinterpret_cast<SharedFenceEGLSyncExportInfo*>(&rhs);
    }
    inline const SharedFenceEGLSyncExportInfo& FromAPI(const SharedFenceEGLSyncExportInfo& rhs) {
        return rhs;
    }
    inline SharedFenceEGLSyncExportInfo& FromAPI(SharedFenceEGLSyncExportInfo& rhs) {
        return rhs;
    }
inline const WGPUSharedFenceMTLSharedEventDescriptor* ToAPI(const SharedFenceMTLSharedEventDescriptor* rhs) {
        return reinterpret_cast<const WGPUSharedFenceMTLSharedEventDescriptor*>(rhs);
    }
    inline WGPUSharedFenceMTLSharedEventDescriptor* ToAPI(SharedFenceMTLSharedEventDescriptor* rhs) {
        return reinterpret_cast<WGPUSharedFenceMTLSharedEventDescriptor*>(rhs);
    }
    inline const WGPUSharedFenceMTLSharedEventDescriptor* ToAPI(const WGPUSharedFenceMTLSharedEventDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSharedFenceMTLSharedEventDescriptor* ToAPI(WGPUSharedFenceMTLSharedEventDescriptor* rhs) {
        return rhs;
    }
    inline const SharedFenceMTLSharedEventDescriptor* FromAPI(const WGPUSharedFenceMTLSharedEventDescriptor* rhs) {
        return reinterpret_cast<const SharedFenceMTLSharedEventDescriptor*>(rhs);
    }
    inline SharedFenceMTLSharedEventDescriptor* FromAPI(WGPUSharedFenceMTLSharedEventDescriptor* rhs) {
        return reinterpret_cast<SharedFenceMTLSharedEventDescriptor*>(rhs);
    }
    inline const SharedFenceMTLSharedEventDescriptor* FromAPI(const SharedFenceMTLSharedEventDescriptor* rhs) {
        return rhs;
    }
    inline SharedFenceMTLSharedEventDescriptor* FromAPI(SharedFenceMTLSharedEventDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SharedFenceMTLSharedEventDescriptor* ToCppAPI(const SharedFenceMTLSharedEventDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SharedFenceMTLSharedEventDescriptor*>(rhs);
    }
    inline wgpu::SharedFenceMTLSharedEventDescriptor* ToCppAPI(SharedFenceMTLSharedEventDescriptor* rhs) {
        return reinterpret_cast<wgpu::SharedFenceMTLSharedEventDescriptor*>(rhs);
    }
    inline const SharedFenceMTLSharedEventDescriptor* FromCppAPI(const wgpu::SharedFenceMTLSharedEventDescriptor* rhs) {
        return reinterpret_cast<const SharedFenceMTLSharedEventDescriptor*>(rhs);
    }
    inline SharedFenceMTLSharedEventDescriptor* FromCppAPI(wgpu::SharedFenceMTLSharedEventDescriptor* rhs) {
        return reinterpret_cast<SharedFenceMTLSharedEventDescriptor*>(rhs);
    }
inline const SharedFenceMTLSharedEventDescriptor& FromAPI(const WGPUSharedFenceMTLSharedEventDescriptor& rhs) {
        return *reinterpret_cast<const SharedFenceMTLSharedEventDescriptor*>(&rhs);
    }
    inline SharedFenceMTLSharedEventDescriptor& FromAPI(WGPUSharedFenceMTLSharedEventDescriptor& rhs) {
        return *reinterpret_cast<SharedFenceMTLSharedEventDescriptor*>(&rhs);
    }
    inline const SharedFenceMTLSharedEventDescriptor& FromAPI(const SharedFenceMTLSharedEventDescriptor& rhs) {
        return rhs;
    }
    inline SharedFenceMTLSharedEventDescriptor& FromAPI(SharedFenceMTLSharedEventDescriptor& rhs) {
        return rhs;
    }
inline const WGPUSharedFenceMTLSharedEventExportInfo* ToAPI(const SharedFenceMTLSharedEventExportInfo* rhs) {
        return reinterpret_cast<const WGPUSharedFenceMTLSharedEventExportInfo*>(rhs);
    }
    inline WGPUSharedFenceMTLSharedEventExportInfo* ToAPI(SharedFenceMTLSharedEventExportInfo* rhs) {
        return reinterpret_cast<WGPUSharedFenceMTLSharedEventExportInfo*>(rhs);
    }
    inline const WGPUSharedFenceMTLSharedEventExportInfo* ToAPI(const WGPUSharedFenceMTLSharedEventExportInfo* rhs) {
        return rhs;
    }
    inline WGPUSharedFenceMTLSharedEventExportInfo* ToAPI(WGPUSharedFenceMTLSharedEventExportInfo* rhs) {
        return rhs;
    }
    inline const SharedFenceMTLSharedEventExportInfo* FromAPI(const WGPUSharedFenceMTLSharedEventExportInfo* rhs) {
        return reinterpret_cast<const SharedFenceMTLSharedEventExportInfo*>(rhs);
    }
    inline SharedFenceMTLSharedEventExportInfo* FromAPI(WGPUSharedFenceMTLSharedEventExportInfo* rhs) {
        return reinterpret_cast<SharedFenceMTLSharedEventExportInfo*>(rhs);
    }
    inline const SharedFenceMTLSharedEventExportInfo* FromAPI(const SharedFenceMTLSharedEventExportInfo* rhs) {
        return rhs;
    }
    inline SharedFenceMTLSharedEventExportInfo* FromAPI(SharedFenceMTLSharedEventExportInfo* rhs) {
        return rhs;
    }
    inline const wgpu::SharedFenceMTLSharedEventExportInfo* ToCppAPI(const SharedFenceMTLSharedEventExportInfo* rhs) {
        return reinterpret_cast<const wgpu::SharedFenceMTLSharedEventExportInfo*>(rhs);
    }
    inline wgpu::SharedFenceMTLSharedEventExportInfo* ToCppAPI(SharedFenceMTLSharedEventExportInfo* rhs) {
        return reinterpret_cast<wgpu::SharedFenceMTLSharedEventExportInfo*>(rhs);
    }
    inline const SharedFenceMTLSharedEventExportInfo* FromCppAPI(const wgpu::SharedFenceMTLSharedEventExportInfo* rhs) {
        return reinterpret_cast<const SharedFenceMTLSharedEventExportInfo*>(rhs);
    }
    inline SharedFenceMTLSharedEventExportInfo* FromCppAPI(wgpu::SharedFenceMTLSharedEventExportInfo* rhs) {
        return reinterpret_cast<SharedFenceMTLSharedEventExportInfo*>(rhs);
    }
inline const SharedFenceMTLSharedEventExportInfo& FromAPI(const WGPUSharedFenceMTLSharedEventExportInfo& rhs) {
        return *reinterpret_cast<const SharedFenceMTLSharedEventExportInfo*>(&rhs);
    }
    inline SharedFenceMTLSharedEventExportInfo& FromAPI(WGPUSharedFenceMTLSharedEventExportInfo& rhs) {
        return *reinterpret_cast<SharedFenceMTLSharedEventExportInfo*>(&rhs);
    }
    inline const SharedFenceMTLSharedEventExportInfo& FromAPI(const SharedFenceMTLSharedEventExportInfo& rhs) {
        return rhs;
    }
    inline SharedFenceMTLSharedEventExportInfo& FromAPI(SharedFenceMTLSharedEventExportInfo& rhs) {
        return rhs;
    }
inline const WGPUSharedFenceSyncFDDescriptor* ToAPI(const SharedFenceSyncFDDescriptor* rhs) {
        return reinterpret_cast<const WGPUSharedFenceSyncFDDescriptor*>(rhs);
    }
    inline WGPUSharedFenceSyncFDDescriptor* ToAPI(SharedFenceSyncFDDescriptor* rhs) {
        return reinterpret_cast<WGPUSharedFenceSyncFDDescriptor*>(rhs);
    }
    inline const WGPUSharedFenceSyncFDDescriptor* ToAPI(const WGPUSharedFenceSyncFDDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSharedFenceSyncFDDescriptor* ToAPI(WGPUSharedFenceSyncFDDescriptor* rhs) {
        return rhs;
    }
    inline const SharedFenceSyncFDDescriptor* FromAPI(const WGPUSharedFenceSyncFDDescriptor* rhs) {
        return reinterpret_cast<const SharedFenceSyncFDDescriptor*>(rhs);
    }
    inline SharedFenceSyncFDDescriptor* FromAPI(WGPUSharedFenceSyncFDDescriptor* rhs) {
        return reinterpret_cast<SharedFenceSyncFDDescriptor*>(rhs);
    }
    inline const SharedFenceSyncFDDescriptor* FromAPI(const SharedFenceSyncFDDescriptor* rhs) {
        return rhs;
    }
    inline SharedFenceSyncFDDescriptor* FromAPI(SharedFenceSyncFDDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SharedFenceSyncFDDescriptor* ToCppAPI(const SharedFenceSyncFDDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SharedFenceSyncFDDescriptor*>(rhs);
    }
    inline wgpu::SharedFenceSyncFDDescriptor* ToCppAPI(SharedFenceSyncFDDescriptor* rhs) {
        return reinterpret_cast<wgpu::SharedFenceSyncFDDescriptor*>(rhs);
    }
    inline const SharedFenceSyncFDDescriptor* FromCppAPI(const wgpu::SharedFenceSyncFDDescriptor* rhs) {
        return reinterpret_cast<const SharedFenceSyncFDDescriptor*>(rhs);
    }
    inline SharedFenceSyncFDDescriptor* FromCppAPI(wgpu::SharedFenceSyncFDDescriptor* rhs) {
        return reinterpret_cast<SharedFenceSyncFDDescriptor*>(rhs);
    }
inline const SharedFenceSyncFDDescriptor& FromAPI(const WGPUSharedFenceSyncFDDescriptor& rhs) {
        return *reinterpret_cast<const SharedFenceSyncFDDescriptor*>(&rhs);
    }
    inline SharedFenceSyncFDDescriptor& FromAPI(WGPUSharedFenceSyncFDDescriptor& rhs) {
        return *reinterpret_cast<SharedFenceSyncFDDescriptor*>(&rhs);
    }
    inline const SharedFenceSyncFDDescriptor& FromAPI(const SharedFenceSyncFDDescriptor& rhs) {
        return rhs;
    }
    inline SharedFenceSyncFDDescriptor& FromAPI(SharedFenceSyncFDDescriptor& rhs) {
        return rhs;
    }
inline const WGPUSharedFenceSyncFDExportInfo* ToAPI(const SharedFenceSyncFDExportInfo* rhs) {
        return reinterpret_cast<const WGPUSharedFenceSyncFDExportInfo*>(rhs);
    }
    inline WGPUSharedFenceSyncFDExportInfo* ToAPI(SharedFenceSyncFDExportInfo* rhs) {
        return reinterpret_cast<WGPUSharedFenceSyncFDExportInfo*>(rhs);
    }
    inline const WGPUSharedFenceSyncFDExportInfo* ToAPI(const WGPUSharedFenceSyncFDExportInfo* rhs) {
        return rhs;
    }
    inline WGPUSharedFenceSyncFDExportInfo* ToAPI(WGPUSharedFenceSyncFDExportInfo* rhs) {
        return rhs;
    }
    inline const SharedFenceSyncFDExportInfo* FromAPI(const WGPUSharedFenceSyncFDExportInfo* rhs) {
        return reinterpret_cast<const SharedFenceSyncFDExportInfo*>(rhs);
    }
    inline SharedFenceSyncFDExportInfo* FromAPI(WGPUSharedFenceSyncFDExportInfo* rhs) {
        return reinterpret_cast<SharedFenceSyncFDExportInfo*>(rhs);
    }
    inline const SharedFenceSyncFDExportInfo* FromAPI(const SharedFenceSyncFDExportInfo* rhs) {
        return rhs;
    }
    inline SharedFenceSyncFDExportInfo* FromAPI(SharedFenceSyncFDExportInfo* rhs) {
        return rhs;
    }
    inline const wgpu::SharedFenceSyncFDExportInfo* ToCppAPI(const SharedFenceSyncFDExportInfo* rhs) {
        return reinterpret_cast<const wgpu::SharedFenceSyncFDExportInfo*>(rhs);
    }
    inline wgpu::SharedFenceSyncFDExportInfo* ToCppAPI(SharedFenceSyncFDExportInfo* rhs) {
        return reinterpret_cast<wgpu::SharedFenceSyncFDExportInfo*>(rhs);
    }
    inline const SharedFenceSyncFDExportInfo* FromCppAPI(const wgpu::SharedFenceSyncFDExportInfo* rhs) {
        return reinterpret_cast<const SharedFenceSyncFDExportInfo*>(rhs);
    }
    inline SharedFenceSyncFDExportInfo* FromCppAPI(wgpu::SharedFenceSyncFDExportInfo* rhs) {
        return reinterpret_cast<SharedFenceSyncFDExportInfo*>(rhs);
    }
inline const SharedFenceSyncFDExportInfo& FromAPI(const WGPUSharedFenceSyncFDExportInfo& rhs) {
        return *reinterpret_cast<const SharedFenceSyncFDExportInfo*>(&rhs);
    }
    inline SharedFenceSyncFDExportInfo& FromAPI(WGPUSharedFenceSyncFDExportInfo& rhs) {
        return *reinterpret_cast<SharedFenceSyncFDExportInfo*>(&rhs);
    }
    inline const SharedFenceSyncFDExportInfo& FromAPI(const SharedFenceSyncFDExportInfo& rhs) {
        return rhs;
    }
    inline SharedFenceSyncFDExportInfo& FromAPI(SharedFenceSyncFDExportInfo& rhs) {
        return rhs;
    }
inline const WGPUSharedFenceVkSemaphoreOpaqueFDDescriptor* ToAPI(const SharedFenceVkSemaphoreOpaqueFDDescriptor* rhs) {
        return reinterpret_cast<const WGPUSharedFenceVkSemaphoreOpaqueFDDescriptor*>(rhs);
    }
    inline WGPUSharedFenceVkSemaphoreOpaqueFDDescriptor* ToAPI(SharedFenceVkSemaphoreOpaqueFDDescriptor* rhs) {
        return reinterpret_cast<WGPUSharedFenceVkSemaphoreOpaqueFDDescriptor*>(rhs);
    }
    inline const WGPUSharedFenceVkSemaphoreOpaqueFDDescriptor* ToAPI(const WGPUSharedFenceVkSemaphoreOpaqueFDDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSharedFenceVkSemaphoreOpaqueFDDescriptor* ToAPI(WGPUSharedFenceVkSemaphoreOpaqueFDDescriptor* rhs) {
        return rhs;
    }
    inline const SharedFenceVkSemaphoreOpaqueFDDescriptor* FromAPI(const WGPUSharedFenceVkSemaphoreOpaqueFDDescriptor* rhs) {
        return reinterpret_cast<const SharedFenceVkSemaphoreOpaqueFDDescriptor*>(rhs);
    }
    inline SharedFenceVkSemaphoreOpaqueFDDescriptor* FromAPI(WGPUSharedFenceVkSemaphoreOpaqueFDDescriptor* rhs) {
        return reinterpret_cast<SharedFenceVkSemaphoreOpaqueFDDescriptor*>(rhs);
    }
    inline const SharedFenceVkSemaphoreOpaqueFDDescriptor* FromAPI(const SharedFenceVkSemaphoreOpaqueFDDescriptor* rhs) {
        return rhs;
    }
    inline SharedFenceVkSemaphoreOpaqueFDDescriptor* FromAPI(SharedFenceVkSemaphoreOpaqueFDDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SharedFenceVkSemaphoreOpaqueFDDescriptor* ToCppAPI(const SharedFenceVkSemaphoreOpaqueFDDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SharedFenceVkSemaphoreOpaqueFDDescriptor*>(rhs);
    }
    inline wgpu::SharedFenceVkSemaphoreOpaqueFDDescriptor* ToCppAPI(SharedFenceVkSemaphoreOpaqueFDDescriptor* rhs) {
        return reinterpret_cast<wgpu::SharedFenceVkSemaphoreOpaqueFDDescriptor*>(rhs);
    }
    inline const SharedFenceVkSemaphoreOpaqueFDDescriptor* FromCppAPI(const wgpu::SharedFenceVkSemaphoreOpaqueFDDescriptor* rhs) {
        return reinterpret_cast<const SharedFenceVkSemaphoreOpaqueFDDescriptor*>(rhs);
    }
    inline SharedFenceVkSemaphoreOpaqueFDDescriptor* FromCppAPI(wgpu::SharedFenceVkSemaphoreOpaqueFDDescriptor* rhs) {
        return reinterpret_cast<SharedFenceVkSemaphoreOpaqueFDDescriptor*>(rhs);
    }
inline const SharedFenceVkSemaphoreOpaqueFDDescriptor& FromAPI(const WGPUSharedFenceVkSemaphoreOpaqueFDDescriptor& rhs) {
        return *reinterpret_cast<const SharedFenceVkSemaphoreOpaqueFDDescriptor*>(&rhs);
    }
    inline SharedFenceVkSemaphoreOpaqueFDDescriptor& FromAPI(WGPUSharedFenceVkSemaphoreOpaqueFDDescriptor& rhs) {
        return *reinterpret_cast<SharedFenceVkSemaphoreOpaqueFDDescriptor*>(&rhs);
    }
    inline const SharedFenceVkSemaphoreOpaqueFDDescriptor& FromAPI(const SharedFenceVkSemaphoreOpaqueFDDescriptor& rhs) {
        return rhs;
    }
    inline SharedFenceVkSemaphoreOpaqueFDDescriptor& FromAPI(SharedFenceVkSemaphoreOpaqueFDDescriptor& rhs) {
        return rhs;
    }
inline const WGPUSharedFenceVkSemaphoreOpaqueFDExportInfo* ToAPI(const SharedFenceVkSemaphoreOpaqueFDExportInfo* rhs) {
        return reinterpret_cast<const WGPUSharedFenceVkSemaphoreOpaqueFDExportInfo*>(rhs);
    }
    inline WGPUSharedFenceVkSemaphoreOpaqueFDExportInfo* ToAPI(SharedFenceVkSemaphoreOpaqueFDExportInfo* rhs) {
        return reinterpret_cast<WGPUSharedFenceVkSemaphoreOpaqueFDExportInfo*>(rhs);
    }
    inline const WGPUSharedFenceVkSemaphoreOpaqueFDExportInfo* ToAPI(const WGPUSharedFenceVkSemaphoreOpaqueFDExportInfo* rhs) {
        return rhs;
    }
    inline WGPUSharedFenceVkSemaphoreOpaqueFDExportInfo* ToAPI(WGPUSharedFenceVkSemaphoreOpaqueFDExportInfo* rhs) {
        return rhs;
    }
    inline const SharedFenceVkSemaphoreOpaqueFDExportInfo* FromAPI(const WGPUSharedFenceVkSemaphoreOpaqueFDExportInfo* rhs) {
        return reinterpret_cast<const SharedFenceVkSemaphoreOpaqueFDExportInfo*>(rhs);
    }
    inline SharedFenceVkSemaphoreOpaqueFDExportInfo* FromAPI(WGPUSharedFenceVkSemaphoreOpaqueFDExportInfo* rhs) {
        return reinterpret_cast<SharedFenceVkSemaphoreOpaqueFDExportInfo*>(rhs);
    }
    inline const SharedFenceVkSemaphoreOpaqueFDExportInfo* FromAPI(const SharedFenceVkSemaphoreOpaqueFDExportInfo* rhs) {
        return rhs;
    }
    inline SharedFenceVkSemaphoreOpaqueFDExportInfo* FromAPI(SharedFenceVkSemaphoreOpaqueFDExportInfo* rhs) {
        return rhs;
    }
    inline const wgpu::SharedFenceVkSemaphoreOpaqueFDExportInfo* ToCppAPI(const SharedFenceVkSemaphoreOpaqueFDExportInfo* rhs) {
        return reinterpret_cast<const wgpu::SharedFenceVkSemaphoreOpaqueFDExportInfo*>(rhs);
    }
    inline wgpu::SharedFenceVkSemaphoreOpaqueFDExportInfo* ToCppAPI(SharedFenceVkSemaphoreOpaqueFDExportInfo* rhs) {
        return reinterpret_cast<wgpu::SharedFenceVkSemaphoreOpaqueFDExportInfo*>(rhs);
    }
    inline const SharedFenceVkSemaphoreOpaqueFDExportInfo* FromCppAPI(const wgpu::SharedFenceVkSemaphoreOpaqueFDExportInfo* rhs) {
        return reinterpret_cast<const SharedFenceVkSemaphoreOpaqueFDExportInfo*>(rhs);
    }
    inline SharedFenceVkSemaphoreOpaqueFDExportInfo* FromCppAPI(wgpu::SharedFenceVkSemaphoreOpaqueFDExportInfo* rhs) {
        return reinterpret_cast<SharedFenceVkSemaphoreOpaqueFDExportInfo*>(rhs);
    }
inline const SharedFenceVkSemaphoreOpaqueFDExportInfo& FromAPI(const WGPUSharedFenceVkSemaphoreOpaqueFDExportInfo& rhs) {
        return *reinterpret_cast<const SharedFenceVkSemaphoreOpaqueFDExportInfo*>(&rhs);
    }
    inline SharedFenceVkSemaphoreOpaqueFDExportInfo& FromAPI(WGPUSharedFenceVkSemaphoreOpaqueFDExportInfo& rhs) {
        return *reinterpret_cast<SharedFenceVkSemaphoreOpaqueFDExportInfo*>(&rhs);
    }
    inline const SharedFenceVkSemaphoreOpaqueFDExportInfo& FromAPI(const SharedFenceVkSemaphoreOpaqueFDExportInfo& rhs) {
        return rhs;
    }
    inline SharedFenceVkSemaphoreOpaqueFDExportInfo& FromAPI(SharedFenceVkSemaphoreOpaqueFDExportInfo& rhs) {
        return rhs;
    }
inline const WGPUSharedFenceVkSemaphoreZirconHandleDescriptor* ToAPI(const SharedFenceVkSemaphoreZirconHandleDescriptor* rhs) {
        return reinterpret_cast<const WGPUSharedFenceVkSemaphoreZirconHandleDescriptor*>(rhs);
    }
    inline WGPUSharedFenceVkSemaphoreZirconHandleDescriptor* ToAPI(SharedFenceVkSemaphoreZirconHandleDescriptor* rhs) {
        return reinterpret_cast<WGPUSharedFenceVkSemaphoreZirconHandleDescriptor*>(rhs);
    }
    inline const WGPUSharedFenceVkSemaphoreZirconHandleDescriptor* ToAPI(const WGPUSharedFenceVkSemaphoreZirconHandleDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSharedFenceVkSemaphoreZirconHandleDescriptor* ToAPI(WGPUSharedFenceVkSemaphoreZirconHandleDescriptor* rhs) {
        return rhs;
    }
    inline const SharedFenceVkSemaphoreZirconHandleDescriptor* FromAPI(const WGPUSharedFenceVkSemaphoreZirconHandleDescriptor* rhs) {
        return reinterpret_cast<const SharedFenceVkSemaphoreZirconHandleDescriptor*>(rhs);
    }
    inline SharedFenceVkSemaphoreZirconHandleDescriptor* FromAPI(WGPUSharedFenceVkSemaphoreZirconHandleDescriptor* rhs) {
        return reinterpret_cast<SharedFenceVkSemaphoreZirconHandleDescriptor*>(rhs);
    }
    inline const SharedFenceVkSemaphoreZirconHandleDescriptor* FromAPI(const SharedFenceVkSemaphoreZirconHandleDescriptor* rhs) {
        return rhs;
    }
    inline SharedFenceVkSemaphoreZirconHandleDescriptor* FromAPI(SharedFenceVkSemaphoreZirconHandleDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SharedFenceVkSemaphoreZirconHandleDescriptor* ToCppAPI(const SharedFenceVkSemaphoreZirconHandleDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SharedFenceVkSemaphoreZirconHandleDescriptor*>(rhs);
    }
    inline wgpu::SharedFenceVkSemaphoreZirconHandleDescriptor* ToCppAPI(SharedFenceVkSemaphoreZirconHandleDescriptor* rhs) {
        return reinterpret_cast<wgpu::SharedFenceVkSemaphoreZirconHandleDescriptor*>(rhs);
    }
    inline const SharedFenceVkSemaphoreZirconHandleDescriptor* FromCppAPI(const wgpu::SharedFenceVkSemaphoreZirconHandleDescriptor* rhs) {
        return reinterpret_cast<const SharedFenceVkSemaphoreZirconHandleDescriptor*>(rhs);
    }
    inline SharedFenceVkSemaphoreZirconHandleDescriptor* FromCppAPI(wgpu::SharedFenceVkSemaphoreZirconHandleDescriptor* rhs) {
        return reinterpret_cast<SharedFenceVkSemaphoreZirconHandleDescriptor*>(rhs);
    }
inline const SharedFenceVkSemaphoreZirconHandleDescriptor& FromAPI(const WGPUSharedFenceVkSemaphoreZirconHandleDescriptor& rhs) {
        return *reinterpret_cast<const SharedFenceVkSemaphoreZirconHandleDescriptor*>(&rhs);
    }
    inline SharedFenceVkSemaphoreZirconHandleDescriptor& FromAPI(WGPUSharedFenceVkSemaphoreZirconHandleDescriptor& rhs) {
        return *reinterpret_cast<SharedFenceVkSemaphoreZirconHandleDescriptor*>(&rhs);
    }
    inline const SharedFenceVkSemaphoreZirconHandleDescriptor& FromAPI(const SharedFenceVkSemaphoreZirconHandleDescriptor& rhs) {
        return rhs;
    }
    inline SharedFenceVkSemaphoreZirconHandleDescriptor& FromAPI(SharedFenceVkSemaphoreZirconHandleDescriptor& rhs) {
        return rhs;
    }
inline const WGPUSharedFenceVkSemaphoreZirconHandleExportInfo* ToAPI(const SharedFenceVkSemaphoreZirconHandleExportInfo* rhs) {
        return reinterpret_cast<const WGPUSharedFenceVkSemaphoreZirconHandleExportInfo*>(rhs);
    }
    inline WGPUSharedFenceVkSemaphoreZirconHandleExportInfo* ToAPI(SharedFenceVkSemaphoreZirconHandleExportInfo* rhs) {
        return reinterpret_cast<WGPUSharedFenceVkSemaphoreZirconHandleExportInfo*>(rhs);
    }
    inline const WGPUSharedFenceVkSemaphoreZirconHandleExportInfo* ToAPI(const WGPUSharedFenceVkSemaphoreZirconHandleExportInfo* rhs) {
        return rhs;
    }
    inline WGPUSharedFenceVkSemaphoreZirconHandleExportInfo* ToAPI(WGPUSharedFenceVkSemaphoreZirconHandleExportInfo* rhs) {
        return rhs;
    }
    inline const SharedFenceVkSemaphoreZirconHandleExportInfo* FromAPI(const WGPUSharedFenceVkSemaphoreZirconHandleExportInfo* rhs) {
        return reinterpret_cast<const SharedFenceVkSemaphoreZirconHandleExportInfo*>(rhs);
    }
    inline SharedFenceVkSemaphoreZirconHandleExportInfo* FromAPI(WGPUSharedFenceVkSemaphoreZirconHandleExportInfo* rhs) {
        return reinterpret_cast<SharedFenceVkSemaphoreZirconHandleExportInfo*>(rhs);
    }
    inline const SharedFenceVkSemaphoreZirconHandleExportInfo* FromAPI(const SharedFenceVkSemaphoreZirconHandleExportInfo* rhs) {
        return rhs;
    }
    inline SharedFenceVkSemaphoreZirconHandleExportInfo* FromAPI(SharedFenceVkSemaphoreZirconHandleExportInfo* rhs) {
        return rhs;
    }
    inline const wgpu::SharedFenceVkSemaphoreZirconHandleExportInfo* ToCppAPI(const SharedFenceVkSemaphoreZirconHandleExportInfo* rhs) {
        return reinterpret_cast<const wgpu::SharedFenceVkSemaphoreZirconHandleExportInfo*>(rhs);
    }
    inline wgpu::SharedFenceVkSemaphoreZirconHandleExportInfo* ToCppAPI(SharedFenceVkSemaphoreZirconHandleExportInfo* rhs) {
        return reinterpret_cast<wgpu::SharedFenceVkSemaphoreZirconHandleExportInfo*>(rhs);
    }
    inline const SharedFenceVkSemaphoreZirconHandleExportInfo* FromCppAPI(const wgpu::SharedFenceVkSemaphoreZirconHandleExportInfo* rhs) {
        return reinterpret_cast<const SharedFenceVkSemaphoreZirconHandleExportInfo*>(rhs);
    }
    inline SharedFenceVkSemaphoreZirconHandleExportInfo* FromCppAPI(wgpu::SharedFenceVkSemaphoreZirconHandleExportInfo* rhs) {
        return reinterpret_cast<SharedFenceVkSemaphoreZirconHandleExportInfo*>(rhs);
    }
inline const SharedFenceVkSemaphoreZirconHandleExportInfo& FromAPI(const WGPUSharedFenceVkSemaphoreZirconHandleExportInfo& rhs) {
        return *reinterpret_cast<const SharedFenceVkSemaphoreZirconHandleExportInfo*>(&rhs);
    }
    inline SharedFenceVkSemaphoreZirconHandleExportInfo& FromAPI(WGPUSharedFenceVkSemaphoreZirconHandleExportInfo& rhs) {
        return *reinterpret_cast<SharedFenceVkSemaphoreZirconHandleExportInfo*>(&rhs);
    }
    inline const SharedFenceVkSemaphoreZirconHandleExportInfo& FromAPI(const SharedFenceVkSemaphoreZirconHandleExportInfo& rhs) {
        return rhs;
    }
    inline SharedFenceVkSemaphoreZirconHandleExportInfo& FromAPI(SharedFenceVkSemaphoreZirconHandleExportInfo& rhs) {
        return rhs;
    }
inline const WGPUSharedTextureMemoryAHardwareBufferDescriptor* ToAPI(const SharedTextureMemoryAHardwareBufferDescriptor* rhs) {
        return reinterpret_cast<const WGPUSharedTextureMemoryAHardwareBufferDescriptor*>(rhs);
    }
    inline WGPUSharedTextureMemoryAHardwareBufferDescriptor* ToAPI(SharedTextureMemoryAHardwareBufferDescriptor* rhs) {
        return reinterpret_cast<WGPUSharedTextureMemoryAHardwareBufferDescriptor*>(rhs);
    }
    inline const WGPUSharedTextureMemoryAHardwareBufferDescriptor* ToAPI(const WGPUSharedTextureMemoryAHardwareBufferDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSharedTextureMemoryAHardwareBufferDescriptor* ToAPI(WGPUSharedTextureMemoryAHardwareBufferDescriptor* rhs) {
        return rhs;
    }
    inline const SharedTextureMemoryAHardwareBufferDescriptor* FromAPI(const WGPUSharedTextureMemoryAHardwareBufferDescriptor* rhs) {
        return reinterpret_cast<const SharedTextureMemoryAHardwareBufferDescriptor*>(rhs);
    }
    inline SharedTextureMemoryAHardwareBufferDescriptor* FromAPI(WGPUSharedTextureMemoryAHardwareBufferDescriptor* rhs) {
        return reinterpret_cast<SharedTextureMemoryAHardwareBufferDescriptor*>(rhs);
    }
    inline const SharedTextureMemoryAHardwareBufferDescriptor* FromAPI(const SharedTextureMemoryAHardwareBufferDescriptor* rhs) {
        return rhs;
    }
    inline SharedTextureMemoryAHardwareBufferDescriptor* FromAPI(SharedTextureMemoryAHardwareBufferDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SharedTextureMemoryAHardwareBufferDescriptor* ToCppAPI(const SharedTextureMemoryAHardwareBufferDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SharedTextureMemoryAHardwareBufferDescriptor*>(rhs);
    }
    inline wgpu::SharedTextureMemoryAHardwareBufferDescriptor* ToCppAPI(SharedTextureMemoryAHardwareBufferDescriptor* rhs) {
        return reinterpret_cast<wgpu::SharedTextureMemoryAHardwareBufferDescriptor*>(rhs);
    }
    inline const SharedTextureMemoryAHardwareBufferDescriptor* FromCppAPI(const wgpu::SharedTextureMemoryAHardwareBufferDescriptor* rhs) {
        return reinterpret_cast<const SharedTextureMemoryAHardwareBufferDescriptor*>(rhs);
    }
    inline SharedTextureMemoryAHardwareBufferDescriptor* FromCppAPI(wgpu::SharedTextureMemoryAHardwareBufferDescriptor* rhs) {
        return reinterpret_cast<SharedTextureMemoryAHardwareBufferDescriptor*>(rhs);
    }
inline const SharedTextureMemoryAHardwareBufferDescriptor& FromAPI(const WGPUSharedTextureMemoryAHardwareBufferDescriptor& rhs) {
        return *reinterpret_cast<const SharedTextureMemoryAHardwareBufferDescriptor*>(&rhs);
    }
    inline SharedTextureMemoryAHardwareBufferDescriptor& FromAPI(WGPUSharedTextureMemoryAHardwareBufferDescriptor& rhs) {
        return *reinterpret_cast<SharedTextureMemoryAHardwareBufferDescriptor*>(&rhs);
    }
    inline const SharedTextureMemoryAHardwareBufferDescriptor& FromAPI(const SharedTextureMemoryAHardwareBufferDescriptor& rhs) {
        return rhs;
    }
    inline SharedTextureMemoryAHardwareBufferDescriptor& FromAPI(SharedTextureMemoryAHardwareBufferDescriptor& rhs) {
        return rhs;
    }
inline const WGPUSharedTextureMemoryD3D11BeginState* ToAPI(const SharedTextureMemoryD3D11BeginState* rhs) {
        return reinterpret_cast<const WGPUSharedTextureMemoryD3D11BeginState*>(rhs);
    }
    inline WGPUSharedTextureMemoryD3D11BeginState* ToAPI(SharedTextureMemoryD3D11BeginState* rhs) {
        return reinterpret_cast<WGPUSharedTextureMemoryD3D11BeginState*>(rhs);
    }
    inline const WGPUSharedTextureMemoryD3D11BeginState* ToAPI(const WGPUSharedTextureMemoryD3D11BeginState* rhs) {
        return rhs;
    }
    inline WGPUSharedTextureMemoryD3D11BeginState* ToAPI(WGPUSharedTextureMemoryD3D11BeginState* rhs) {
        return rhs;
    }
    inline const SharedTextureMemoryD3D11BeginState* FromAPI(const WGPUSharedTextureMemoryD3D11BeginState* rhs) {
        return reinterpret_cast<const SharedTextureMemoryD3D11BeginState*>(rhs);
    }
    inline SharedTextureMemoryD3D11BeginState* FromAPI(WGPUSharedTextureMemoryD3D11BeginState* rhs) {
        return reinterpret_cast<SharedTextureMemoryD3D11BeginState*>(rhs);
    }
    inline const SharedTextureMemoryD3D11BeginState* FromAPI(const SharedTextureMemoryD3D11BeginState* rhs) {
        return rhs;
    }
    inline SharedTextureMemoryD3D11BeginState* FromAPI(SharedTextureMemoryD3D11BeginState* rhs) {
        return rhs;
    }
    inline const wgpu::SharedTextureMemoryD3D11BeginState* ToCppAPI(const SharedTextureMemoryD3D11BeginState* rhs) {
        return reinterpret_cast<const wgpu::SharedTextureMemoryD3D11BeginState*>(rhs);
    }
    inline wgpu::SharedTextureMemoryD3D11BeginState* ToCppAPI(SharedTextureMemoryD3D11BeginState* rhs) {
        return reinterpret_cast<wgpu::SharedTextureMemoryD3D11BeginState*>(rhs);
    }
    inline const SharedTextureMemoryD3D11BeginState* FromCppAPI(const wgpu::SharedTextureMemoryD3D11BeginState* rhs) {
        return reinterpret_cast<const SharedTextureMemoryD3D11BeginState*>(rhs);
    }
    inline SharedTextureMemoryD3D11BeginState* FromCppAPI(wgpu::SharedTextureMemoryD3D11BeginState* rhs) {
        return reinterpret_cast<SharedTextureMemoryD3D11BeginState*>(rhs);
    }
inline const SharedTextureMemoryD3D11BeginState& FromAPI(const WGPUSharedTextureMemoryD3D11BeginState& rhs) {
        return *reinterpret_cast<const SharedTextureMemoryD3D11BeginState*>(&rhs);
    }
    inline SharedTextureMemoryD3D11BeginState& FromAPI(WGPUSharedTextureMemoryD3D11BeginState& rhs) {
        return *reinterpret_cast<SharedTextureMemoryD3D11BeginState*>(&rhs);
    }
    inline const SharedTextureMemoryD3D11BeginState& FromAPI(const SharedTextureMemoryD3D11BeginState& rhs) {
        return rhs;
    }
    inline SharedTextureMemoryD3D11BeginState& FromAPI(SharedTextureMemoryD3D11BeginState& rhs) {
        return rhs;
    }
inline const WGPUSharedTextureMemoryD3DSwapchainBeginState* ToAPI(const SharedTextureMemoryD3DSwapchainBeginState* rhs) {
        return reinterpret_cast<const WGPUSharedTextureMemoryD3DSwapchainBeginState*>(rhs);
    }
    inline WGPUSharedTextureMemoryD3DSwapchainBeginState* ToAPI(SharedTextureMemoryD3DSwapchainBeginState* rhs) {
        return reinterpret_cast<WGPUSharedTextureMemoryD3DSwapchainBeginState*>(rhs);
    }
    inline const WGPUSharedTextureMemoryD3DSwapchainBeginState* ToAPI(const WGPUSharedTextureMemoryD3DSwapchainBeginState* rhs) {
        return rhs;
    }
    inline WGPUSharedTextureMemoryD3DSwapchainBeginState* ToAPI(WGPUSharedTextureMemoryD3DSwapchainBeginState* rhs) {
        return rhs;
    }
    inline const SharedTextureMemoryD3DSwapchainBeginState* FromAPI(const WGPUSharedTextureMemoryD3DSwapchainBeginState* rhs) {
        return reinterpret_cast<const SharedTextureMemoryD3DSwapchainBeginState*>(rhs);
    }
    inline SharedTextureMemoryD3DSwapchainBeginState* FromAPI(WGPUSharedTextureMemoryD3DSwapchainBeginState* rhs) {
        return reinterpret_cast<SharedTextureMemoryD3DSwapchainBeginState*>(rhs);
    }
    inline const SharedTextureMemoryD3DSwapchainBeginState* FromAPI(const SharedTextureMemoryD3DSwapchainBeginState* rhs) {
        return rhs;
    }
    inline SharedTextureMemoryD3DSwapchainBeginState* FromAPI(SharedTextureMemoryD3DSwapchainBeginState* rhs) {
        return rhs;
    }
    inline const wgpu::SharedTextureMemoryD3DSwapchainBeginState* ToCppAPI(const SharedTextureMemoryD3DSwapchainBeginState* rhs) {
        return reinterpret_cast<const wgpu::SharedTextureMemoryD3DSwapchainBeginState*>(rhs);
    }
    inline wgpu::SharedTextureMemoryD3DSwapchainBeginState* ToCppAPI(SharedTextureMemoryD3DSwapchainBeginState* rhs) {
        return reinterpret_cast<wgpu::SharedTextureMemoryD3DSwapchainBeginState*>(rhs);
    }
    inline const SharedTextureMemoryD3DSwapchainBeginState* FromCppAPI(const wgpu::SharedTextureMemoryD3DSwapchainBeginState* rhs) {
        return reinterpret_cast<const SharedTextureMemoryD3DSwapchainBeginState*>(rhs);
    }
    inline SharedTextureMemoryD3DSwapchainBeginState* FromCppAPI(wgpu::SharedTextureMemoryD3DSwapchainBeginState* rhs) {
        return reinterpret_cast<SharedTextureMemoryD3DSwapchainBeginState*>(rhs);
    }
inline const SharedTextureMemoryD3DSwapchainBeginState& FromAPI(const WGPUSharedTextureMemoryD3DSwapchainBeginState& rhs) {
        return *reinterpret_cast<const SharedTextureMemoryD3DSwapchainBeginState*>(&rhs);
    }
    inline SharedTextureMemoryD3DSwapchainBeginState& FromAPI(WGPUSharedTextureMemoryD3DSwapchainBeginState& rhs) {
        return *reinterpret_cast<SharedTextureMemoryD3DSwapchainBeginState*>(&rhs);
    }
    inline const SharedTextureMemoryD3DSwapchainBeginState& FromAPI(const SharedTextureMemoryD3DSwapchainBeginState& rhs) {
        return rhs;
    }
    inline SharedTextureMemoryD3DSwapchainBeginState& FromAPI(SharedTextureMemoryD3DSwapchainBeginState& rhs) {
        return rhs;
    }
inline const WGPUSharedTextureMemoryDmaBufPlane* ToAPI(const SharedTextureMemoryDmaBufPlane* rhs) {
        return reinterpret_cast<const WGPUSharedTextureMemoryDmaBufPlane*>(rhs);
    }
    inline WGPUSharedTextureMemoryDmaBufPlane* ToAPI(SharedTextureMemoryDmaBufPlane* rhs) {
        return reinterpret_cast<WGPUSharedTextureMemoryDmaBufPlane*>(rhs);
    }
    inline const WGPUSharedTextureMemoryDmaBufPlane* ToAPI(const WGPUSharedTextureMemoryDmaBufPlane* rhs) {
        return rhs;
    }
    inline WGPUSharedTextureMemoryDmaBufPlane* ToAPI(WGPUSharedTextureMemoryDmaBufPlane* rhs) {
        return rhs;
    }
    inline const SharedTextureMemoryDmaBufPlane* FromAPI(const WGPUSharedTextureMemoryDmaBufPlane* rhs) {
        return reinterpret_cast<const SharedTextureMemoryDmaBufPlane*>(rhs);
    }
    inline SharedTextureMemoryDmaBufPlane* FromAPI(WGPUSharedTextureMemoryDmaBufPlane* rhs) {
        return reinterpret_cast<SharedTextureMemoryDmaBufPlane*>(rhs);
    }
    inline const SharedTextureMemoryDmaBufPlane* FromAPI(const SharedTextureMemoryDmaBufPlane* rhs) {
        return rhs;
    }
    inline SharedTextureMemoryDmaBufPlane* FromAPI(SharedTextureMemoryDmaBufPlane* rhs) {
        return rhs;
    }
    inline const wgpu::SharedTextureMemoryDmaBufPlane* ToCppAPI(const SharedTextureMemoryDmaBufPlane* rhs) {
        return reinterpret_cast<const wgpu::SharedTextureMemoryDmaBufPlane*>(rhs);
    }
    inline wgpu::SharedTextureMemoryDmaBufPlane* ToCppAPI(SharedTextureMemoryDmaBufPlane* rhs) {
        return reinterpret_cast<wgpu::SharedTextureMemoryDmaBufPlane*>(rhs);
    }
    inline const SharedTextureMemoryDmaBufPlane* FromCppAPI(const wgpu::SharedTextureMemoryDmaBufPlane* rhs) {
        return reinterpret_cast<const SharedTextureMemoryDmaBufPlane*>(rhs);
    }
    inline SharedTextureMemoryDmaBufPlane* FromCppAPI(wgpu::SharedTextureMemoryDmaBufPlane* rhs) {
        return reinterpret_cast<SharedTextureMemoryDmaBufPlane*>(rhs);
    }
inline const SharedTextureMemoryDmaBufPlane& FromAPI(const WGPUSharedTextureMemoryDmaBufPlane& rhs) {
        return *reinterpret_cast<const SharedTextureMemoryDmaBufPlane*>(&rhs);
    }
    inline SharedTextureMemoryDmaBufPlane& FromAPI(WGPUSharedTextureMemoryDmaBufPlane& rhs) {
        return *reinterpret_cast<SharedTextureMemoryDmaBufPlane*>(&rhs);
    }
    inline const SharedTextureMemoryDmaBufPlane& FromAPI(const SharedTextureMemoryDmaBufPlane& rhs) {
        return rhs;
    }
    inline SharedTextureMemoryDmaBufPlane& FromAPI(SharedTextureMemoryDmaBufPlane& rhs) {
        return rhs;
    }
inline const WGPUSharedTextureMemoryDXGISharedHandleDescriptor* ToAPI(const SharedTextureMemoryDXGISharedHandleDescriptor* rhs) {
        return reinterpret_cast<const WGPUSharedTextureMemoryDXGISharedHandleDescriptor*>(rhs);
    }
    inline WGPUSharedTextureMemoryDXGISharedHandleDescriptor* ToAPI(SharedTextureMemoryDXGISharedHandleDescriptor* rhs) {
        return reinterpret_cast<WGPUSharedTextureMemoryDXGISharedHandleDescriptor*>(rhs);
    }
    inline const WGPUSharedTextureMemoryDXGISharedHandleDescriptor* ToAPI(const WGPUSharedTextureMemoryDXGISharedHandleDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSharedTextureMemoryDXGISharedHandleDescriptor* ToAPI(WGPUSharedTextureMemoryDXGISharedHandleDescriptor* rhs) {
        return rhs;
    }
    inline const SharedTextureMemoryDXGISharedHandleDescriptor* FromAPI(const WGPUSharedTextureMemoryDXGISharedHandleDescriptor* rhs) {
        return reinterpret_cast<const SharedTextureMemoryDXGISharedHandleDescriptor*>(rhs);
    }
    inline SharedTextureMemoryDXGISharedHandleDescriptor* FromAPI(WGPUSharedTextureMemoryDXGISharedHandleDescriptor* rhs) {
        return reinterpret_cast<SharedTextureMemoryDXGISharedHandleDescriptor*>(rhs);
    }
    inline const SharedTextureMemoryDXGISharedHandleDescriptor* FromAPI(const SharedTextureMemoryDXGISharedHandleDescriptor* rhs) {
        return rhs;
    }
    inline SharedTextureMemoryDXGISharedHandleDescriptor* FromAPI(SharedTextureMemoryDXGISharedHandleDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SharedTextureMemoryDXGISharedHandleDescriptor* ToCppAPI(const SharedTextureMemoryDXGISharedHandleDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SharedTextureMemoryDXGISharedHandleDescriptor*>(rhs);
    }
    inline wgpu::SharedTextureMemoryDXGISharedHandleDescriptor* ToCppAPI(SharedTextureMemoryDXGISharedHandleDescriptor* rhs) {
        return reinterpret_cast<wgpu::SharedTextureMemoryDXGISharedHandleDescriptor*>(rhs);
    }
    inline const SharedTextureMemoryDXGISharedHandleDescriptor* FromCppAPI(const wgpu::SharedTextureMemoryDXGISharedHandleDescriptor* rhs) {
        return reinterpret_cast<const SharedTextureMemoryDXGISharedHandleDescriptor*>(rhs);
    }
    inline SharedTextureMemoryDXGISharedHandleDescriptor* FromCppAPI(wgpu::SharedTextureMemoryDXGISharedHandleDescriptor* rhs) {
        return reinterpret_cast<SharedTextureMemoryDXGISharedHandleDescriptor*>(rhs);
    }
inline const SharedTextureMemoryDXGISharedHandleDescriptor& FromAPI(const WGPUSharedTextureMemoryDXGISharedHandleDescriptor& rhs) {
        return *reinterpret_cast<const SharedTextureMemoryDXGISharedHandleDescriptor*>(&rhs);
    }
    inline SharedTextureMemoryDXGISharedHandleDescriptor& FromAPI(WGPUSharedTextureMemoryDXGISharedHandleDescriptor& rhs) {
        return *reinterpret_cast<SharedTextureMemoryDXGISharedHandleDescriptor*>(&rhs);
    }
    inline const SharedTextureMemoryDXGISharedHandleDescriptor& FromAPI(const SharedTextureMemoryDXGISharedHandleDescriptor& rhs) {
        return rhs;
    }
    inline SharedTextureMemoryDXGISharedHandleDescriptor& FromAPI(SharedTextureMemoryDXGISharedHandleDescriptor& rhs) {
        return rhs;
    }
inline const WGPUSharedTextureMemoryEGLImageDescriptor* ToAPI(const SharedTextureMemoryEGLImageDescriptor* rhs) {
        return reinterpret_cast<const WGPUSharedTextureMemoryEGLImageDescriptor*>(rhs);
    }
    inline WGPUSharedTextureMemoryEGLImageDescriptor* ToAPI(SharedTextureMemoryEGLImageDescriptor* rhs) {
        return reinterpret_cast<WGPUSharedTextureMemoryEGLImageDescriptor*>(rhs);
    }
    inline const WGPUSharedTextureMemoryEGLImageDescriptor* ToAPI(const WGPUSharedTextureMemoryEGLImageDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSharedTextureMemoryEGLImageDescriptor* ToAPI(WGPUSharedTextureMemoryEGLImageDescriptor* rhs) {
        return rhs;
    }
    inline const SharedTextureMemoryEGLImageDescriptor* FromAPI(const WGPUSharedTextureMemoryEGLImageDescriptor* rhs) {
        return reinterpret_cast<const SharedTextureMemoryEGLImageDescriptor*>(rhs);
    }
    inline SharedTextureMemoryEGLImageDescriptor* FromAPI(WGPUSharedTextureMemoryEGLImageDescriptor* rhs) {
        return reinterpret_cast<SharedTextureMemoryEGLImageDescriptor*>(rhs);
    }
    inline const SharedTextureMemoryEGLImageDescriptor* FromAPI(const SharedTextureMemoryEGLImageDescriptor* rhs) {
        return rhs;
    }
    inline SharedTextureMemoryEGLImageDescriptor* FromAPI(SharedTextureMemoryEGLImageDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SharedTextureMemoryEGLImageDescriptor* ToCppAPI(const SharedTextureMemoryEGLImageDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SharedTextureMemoryEGLImageDescriptor*>(rhs);
    }
    inline wgpu::SharedTextureMemoryEGLImageDescriptor* ToCppAPI(SharedTextureMemoryEGLImageDescriptor* rhs) {
        return reinterpret_cast<wgpu::SharedTextureMemoryEGLImageDescriptor*>(rhs);
    }
    inline const SharedTextureMemoryEGLImageDescriptor* FromCppAPI(const wgpu::SharedTextureMemoryEGLImageDescriptor* rhs) {
        return reinterpret_cast<const SharedTextureMemoryEGLImageDescriptor*>(rhs);
    }
    inline SharedTextureMemoryEGLImageDescriptor* FromCppAPI(wgpu::SharedTextureMemoryEGLImageDescriptor* rhs) {
        return reinterpret_cast<SharedTextureMemoryEGLImageDescriptor*>(rhs);
    }
inline const SharedTextureMemoryEGLImageDescriptor& FromAPI(const WGPUSharedTextureMemoryEGLImageDescriptor& rhs) {
        return *reinterpret_cast<const SharedTextureMemoryEGLImageDescriptor*>(&rhs);
    }
    inline SharedTextureMemoryEGLImageDescriptor& FromAPI(WGPUSharedTextureMemoryEGLImageDescriptor& rhs) {
        return *reinterpret_cast<SharedTextureMemoryEGLImageDescriptor*>(&rhs);
    }
    inline const SharedTextureMemoryEGLImageDescriptor& FromAPI(const SharedTextureMemoryEGLImageDescriptor& rhs) {
        return rhs;
    }
    inline SharedTextureMemoryEGLImageDescriptor& FromAPI(SharedTextureMemoryEGLImageDescriptor& rhs) {
        return rhs;
    }
inline const WGPUSharedTextureMemoryIOSurfaceDescriptor* ToAPI(const SharedTextureMemoryIOSurfaceDescriptor* rhs) {
        return reinterpret_cast<const WGPUSharedTextureMemoryIOSurfaceDescriptor*>(rhs);
    }
    inline WGPUSharedTextureMemoryIOSurfaceDescriptor* ToAPI(SharedTextureMemoryIOSurfaceDescriptor* rhs) {
        return reinterpret_cast<WGPUSharedTextureMemoryIOSurfaceDescriptor*>(rhs);
    }
    inline const WGPUSharedTextureMemoryIOSurfaceDescriptor* ToAPI(const WGPUSharedTextureMemoryIOSurfaceDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSharedTextureMemoryIOSurfaceDescriptor* ToAPI(WGPUSharedTextureMemoryIOSurfaceDescriptor* rhs) {
        return rhs;
    }
    inline const SharedTextureMemoryIOSurfaceDescriptor* FromAPI(const WGPUSharedTextureMemoryIOSurfaceDescriptor* rhs) {
        return reinterpret_cast<const SharedTextureMemoryIOSurfaceDescriptor*>(rhs);
    }
    inline SharedTextureMemoryIOSurfaceDescriptor* FromAPI(WGPUSharedTextureMemoryIOSurfaceDescriptor* rhs) {
        return reinterpret_cast<SharedTextureMemoryIOSurfaceDescriptor*>(rhs);
    }
    inline const SharedTextureMemoryIOSurfaceDescriptor* FromAPI(const SharedTextureMemoryIOSurfaceDescriptor* rhs) {
        return rhs;
    }
    inline SharedTextureMemoryIOSurfaceDescriptor* FromAPI(SharedTextureMemoryIOSurfaceDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SharedTextureMemoryIOSurfaceDescriptor* ToCppAPI(const SharedTextureMemoryIOSurfaceDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SharedTextureMemoryIOSurfaceDescriptor*>(rhs);
    }
    inline wgpu::SharedTextureMemoryIOSurfaceDescriptor* ToCppAPI(SharedTextureMemoryIOSurfaceDescriptor* rhs) {
        return reinterpret_cast<wgpu::SharedTextureMemoryIOSurfaceDescriptor*>(rhs);
    }
    inline const SharedTextureMemoryIOSurfaceDescriptor* FromCppAPI(const wgpu::SharedTextureMemoryIOSurfaceDescriptor* rhs) {
        return reinterpret_cast<const SharedTextureMemoryIOSurfaceDescriptor*>(rhs);
    }
    inline SharedTextureMemoryIOSurfaceDescriptor* FromCppAPI(wgpu::SharedTextureMemoryIOSurfaceDescriptor* rhs) {
        return reinterpret_cast<SharedTextureMemoryIOSurfaceDescriptor*>(rhs);
    }
inline const SharedTextureMemoryIOSurfaceDescriptor& FromAPI(const WGPUSharedTextureMemoryIOSurfaceDescriptor& rhs) {
        return *reinterpret_cast<const SharedTextureMemoryIOSurfaceDescriptor*>(&rhs);
    }
    inline SharedTextureMemoryIOSurfaceDescriptor& FromAPI(WGPUSharedTextureMemoryIOSurfaceDescriptor& rhs) {
        return *reinterpret_cast<SharedTextureMemoryIOSurfaceDescriptor*>(&rhs);
    }
    inline const SharedTextureMemoryIOSurfaceDescriptor& FromAPI(const SharedTextureMemoryIOSurfaceDescriptor& rhs) {
        return rhs;
    }
    inline SharedTextureMemoryIOSurfaceDescriptor& FromAPI(SharedTextureMemoryIOSurfaceDescriptor& rhs) {
        return rhs;
    }
inline const WGPUSharedTextureMemoryOpaqueFDDescriptor* ToAPI(const SharedTextureMemoryOpaqueFDDescriptor* rhs) {
        return reinterpret_cast<const WGPUSharedTextureMemoryOpaqueFDDescriptor*>(rhs);
    }
    inline WGPUSharedTextureMemoryOpaqueFDDescriptor* ToAPI(SharedTextureMemoryOpaqueFDDescriptor* rhs) {
        return reinterpret_cast<WGPUSharedTextureMemoryOpaqueFDDescriptor*>(rhs);
    }
    inline const WGPUSharedTextureMemoryOpaqueFDDescriptor* ToAPI(const WGPUSharedTextureMemoryOpaqueFDDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSharedTextureMemoryOpaqueFDDescriptor* ToAPI(WGPUSharedTextureMemoryOpaqueFDDescriptor* rhs) {
        return rhs;
    }
    inline const SharedTextureMemoryOpaqueFDDescriptor* FromAPI(const WGPUSharedTextureMemoryOpaqueFDDescriptor* rhs) {
        return reinterpret_cast<const SharedTextureMemoryOpaqueFDDescriptor*>(rhs);
    }
    inline SharedTextureMemoryOpaqueFDDescriptor* FromAPI(WGPUSharedTextureMemoryOpaqueFDDescriptor* rhs) {
        return reinterpret_cast<SharedTextureMemoryOpaqueFDDescriptor*>(rhs);
    }
    inline const SharedTextureMemoryOpaqueFDDescriptor* FromAPI(const SharedTextureMemoryOpaqueFDDescriptor* rhs) {
        return rhs;
    }
    inline SharedTextureMemoryOpaqueFDDescriptor* FromAPI(SharedTextureMemoryOpaqueFDDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SharedTextureMemoryOpaqueFDDescriptor* ToCppAPI(const SharedTextureMemoryOpaqueFDDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SharedTextureMemoryOpaqueFDDescriptor*>(rhs);
    }
    inline wgpu::SharedTextureMemoryOpaqueFDDescriptor* ToCppAPI(SharedTextureMemoryOpaqueFDDescriptor* rhs) {
        return reinterpret_cast<wgpu::SharedTextureMemoryOpaqueFDDescriptor*>(rhs);
    }
    inline const SharedTextureMemoryOpaqueFDDescriptor* FromCppAPI(const wgpu::SharedTextureMemoryOpaqueFDDescriptor* rhs) {
        return reinterpret_cast<const SharedTextureMemoryOpaqueFDDescriptor*>(rhs);
    }
    inline SharedTextureMemoryOpaqueFDDescriptor* FromCppAPI(wgpu::SharedTextureMemoryOpaqueFDDescriptor* rhs) {
        return reinterpret_cast<SharedTextureMemoryOpaqueFDDescriptor*>(rhs);
    }
inline const SharedTextureMemoryOpaqueFDDescriptor& FromAPI(const WGPUSharedTextureMemoryOpaqueFDDescriptor& rhs) {
        return *reinterpret_cast<const SharedTextureMemoryOpaqueFDDescriptor*>(&rhs);
    }
    inline SharedTextureMemoryOpaqueFDDescriptor& FromAPI(WGPUSharedTextureMemoryOpaqueFDDescriptor& rhs) {
        return *reinterpret_cast<SharedTextureMemoryOpaqueFDDescriptor*>(&rhs);
    }
    inline const SharedTextureMemoryOpaqueFDDescriptor& FromAPI(const SharedTextureMemoryOpaqueFDDescriptor& rhs) {
        return rhs;
    }
    inline SharedTextureMemoryOpaqueFDDescriptor& FromAPI(SharedTextureMemoryOpaqueFDDescriptor& rhs) {
        return rhs;
    }
inline const WGPUSharedTextureMemoryVkDedicatedAllocationDescriptor* ToAPI(const SharedTextureMemoryVkDedicatedAllocationDescriptor* rhs) {
        return reinterpret_cast<const WGPUSharedTextureMemoryVkDedicatedAllocationDescriptor*>(rhs);
    }
    inline WGPUSharedTextureMemoryVkDedicatedAllocationDescriptor* ToAPI(SharedTextureMemoryVkDedicatedAllocationDescriptor* rhs) {
        return reinterpret_cast<WGPUSharedTextureMemoryVkDedicatedAllocationDescriptor*>(rhs);
    }
    inline const WGPUSharedTextureMemoryVkDedicatedAllocationDescriptor* ToAPI(const WGPUSharedTextureMemoryVkDedicatedAllocationDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSharedTextureMemoryVkDedicatedAllocationDescriptor* ToAPI(WGPUSharedTextureMemoryVkDedicatedAllocationDescriptor* rhs) {
        return rhs;
    }
    inline const SharedTextureMemoryVkDedicatedAllocationDescriptor* FromAPI(const WGPUSharedTextureMemoryVkDedicatedAllocationDescriptor* rhs) {
        return reinterpret_cast<const SharedTextureMemoryVkDedicatedAllocationDescriptor*>(rhs);
    }
    inline SharedTextureMemoryVkDedicatedAllocationDescriptor* FromAPI(WGPUSharedTextureMemoryVkDedicatedAllocationDescriptor* rhs) {
        return reinterpret_cast<SharedTextureMemoryVkDedicatedAllocationDescriptor*>(rhs);
    }
    inline const SharedTextureMemoryVkDedicatedAllocationDescriptor* FromAPI(const SharedTextureMemoryVkDedicatedAllocationDescriptor* rhs) {
        return rhs;
    }
    inline SharedTextureMemoryVkDedicatedAllocationDescriptor* FromAPI(SharedTextureMemoryVkDedicatedAllocationDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SharedTextureMemoryVkDedicatedAllocationDescriptor* ToCppAPI(const SharedTextureMemoryVkDedicatedAllocationDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SharedTextureMemoryVkDedicatedAllocationDescriptor*>(rhs);
    }
    inline wgpu::SharedTextureMemoryVkDedicatedAllocationDescriptor* ToCppAPI(SharedTextureMemoryVkDedicatedAllocationDescriptor* rhs) {
        return reinterpret_cast<wgpu::SharedTextureMemoryVkDedicatedAllocationDescriptor*>(rhs);
    }
    inline const SharedTextureMemoryVkDedicatedAllocationDescriptor* FromCppAPI(const wgpu::SharedTextureMemoryVkDedicatedAllocationDescriptor* rhs) {
        return reinterpret_cast<const SharedTextureMemoryVkDedicatedAllocationDescriptor*>(rhs);
    }
    inline SharedTextureMemoryVkDedicatedAllocationDescriptor* FromCppAPI(wgpu::SharedTextureMemoryVkDedicatedAllocationDescriptor* rhs) {
        return reinterpret_cast<SharedTextureMemoryVkDedicatedAllocationDescriptor*>(rhs);
    }
inline const SharedTextureMemoryVkDedicatedAllocationDescriptor& FromAPI(const WGPUSharedTextureMemoryVkDedicatedAllocationDescriptor& rhs) {
        return *reinterpret_cast<const SharedTextureMemoryVkDedicatedAllocationDescriptor*>(&rhs);
    }
    inline SharedTextureMemoryVkDedicatedAllocationDescriptor& FromAPI(WGPUSharedTextureMemoryVkDedicatedAllocationDescriptor& rhs) {
        return *reinterpret_cast<SharedTextureMemoryVkDedicatedAllocationDescriptor*>(&rhs);
    }
    inline const SharedTextureMemoryVkDedicatedAllocationDescriptor& FromAPI(const SharedTextureMemoryVkDedicatedAllocationDescriptor& rhs) {
        return rhs;
    }
    inline SharedTextureMemoryVkDedicatedAllocationDescriptor& FromAPI(SharedTextureMemoryVkDedicatedAllocationDescriptor& rhs) {
        return rhs;
    }
inline const WGPUSharedTextureMemoryVkImageLayoutBeginState* ToAPI(const SharedTextureMemoryVkImageLayoutBeginState* rhs) {
        return reinterpret_cast<const WGPUSharedTextureMemoryVkImageLayoutBeginState*>(rhs);
    }
    inline WGPUSharedTextureMemoryVkImageLayoutBeginState* ToAPI(SharedTextureMemoryVkImageLayoutBeginState* rhs) {
        return reinterpret_cast<WGPUSharedTextureMemoryVkImageLayoutBeginState*>(rhs);
    }
    inline const WGPUSharedTextureMemoryVkImageLayoutBeginState* ToAPI(const WGPUSharedTextureMemoryVkImageLayoutBeginState* rhs) {
        return rhs;
    }
    inline WGPUSharedTextureMemoryVkImageLayoutBeginState* ToAPI(WGPUSharedTextureMemoryVkImageLayoutBeginState* rhs) {
        return rhs;
    }
    inline const SharedTextureMemoryVkImageLayoutBeginState* FromAPI(const WGPUSharedTextureMemoryVkImageLayoutBeginState* rhs) {
        return reinterpret_cast<const SharedTextureMemoryVkImageLayoutBeginState*>(rhs);
    }
    inline SharedTextureMemoryVkImageLayoutBeginState* FromAPI(WGPUSharedTextureMemoryVkImageLayoutBeginState* rhs) {
        return reinterpret_cast<SharedTextureMemoryVkImageLayoutBeginState*>(rhs);
    }
    inline const SharedTextureMemoryVkImageLayoutBeginState* FromAPI(const SharedTextureMemoryVkImageLayoutBeginState* rhs) {
        return rhs;
    }
    inline SharedTextureMemoryVkImageLayoutBeginState* FromAPI(SharedTextureMemoryVkImageLayoutBeginState* rhs) {
        return rhs;
    }
    inline const wgpu::SharedTextureMemoryVkImageLayoutBeginState* ToCppAPI(const SharedTextureMemoryVkImageLayoutBeginState* rhs) {
        return reinterpret_cast<const wgpu::SharedTextureMemoryVkImageLayoutBeginState*>(rhs);
    }
    inline wgpu::SharedTextureMemoryVkImageLayoutBeginState* ToCppAPI(SharedTextureMemoryVkImageLayoutBeginState* rhs) {
        return reinterpret_cast<wgpu::SharedTextureMemoryVkImageLayoutBeginState*>(rhs);
    }
    inline const SharedTextureMemoryVkImageLayoutBeginState* FromCppAPI(const wgpu::SharedTextureMemoryVkImageLayoutBeginState* rhs) {
        return reinterpret_cast<const SharedTextureMemoryVkImageLayoutBeginState*>(rhs);
    }
    inline SharedTextureMemoryVkImageLayoutBeginState* FromCppAPI(wgpu::SharedTextureMemoryVkImageLayoutBeginState* rhs) {
        return reinterpret_cast<SharedTextureMemoryVkImageLayoutBeginState*>(rhs);
    }
inline const SharedTextureMemoryVkImageLayoutBeginState& FromAPI(const WGPUSharedTextureMemoryVkImageLayoutBeginState& rhs) {
        return *reinterpret_cast<const SharedTextureMemoryVkImageLayoutBeginState*>(&rhs);
    }
    inline SharedTextureMemoryVkImageLayoutBeginState& FromAPI(WGPUSharedTextureMemoryVkImageLayoutBeginState& rhs) {
        return *reinterpret_cast<SharedTextureMemoryVkImageLayoutBeginState*>(&rhs);
    }
    inline const SharedTextureMemoryVkImageLayoutBeginState& FromAPI(const SharedTextureMemoryVkImageLayoutBeginState& rhs) {
        return rhs;
    }
    inline SharedTextureMemoryVkImageLayoutBeginState& FromAPI(SharedTextureMemoryVkImageLayoutBeginState& rhs) {
        return rhs;
    }
inline const WGPUSharedTextureMemoryVkImageLayoutEndState* ToAPI(const SharedTextureMemoryVkImageLayoutEndState* rhs) {
        return reinterpret_cast<const WGPUSharedTextureMemoryVkImageLayoutEndState*>(rhs);
    }
    inline WGPUSharedTextureMemoryVkImageLayoutEndState* ToAPI(SharedTextureMemoryVkImageLayoutEndState* rhs) {
        return reinterpret_cast<WGPUSharedTextureMemoryVkImageLayoutEndState*>(rhs);
    }
    inline const WGPUSharedTextureMemoryVkImageLayoutEndState* ToAPI(const WGPUSharedTextureMemoryVkImageLayoutEndState* rhs) {
        return rhs;
    }
    inline WGPUSharedTextureMemoryVkImageLayoutEndState* ToAPI(WGPUSharedTextureMemoryVkImageLayoutEndState* rhs) {
        return rhs;
    }
    inline const SharedTextureMemoryVkImageLayoutEndState* FromAPI(const WGPUSharedTextureMemoryVkImageLayoutEndState* rhs) {
        return reinterpret_cast<const SharedTextureMemoryVkImageLayoutEndState*>(rhs);
    }
    inline SharedTextureMemoryVkImageLayoutEndState* FromAPI(WGPUSharedTextureMemoryVkImageLayoutEndState* rhs) {
        return reinterpret_cast<SharedTextureMemoryVkImageLayoutEndState*>(rhs);
    }
    inline const SharedTextureMemoryVkImageLayoutEndState* FromAPI(const SharedTextureMemoryVkImageLayoutEndState* rhs) {
        return rhs;
    }
    inline SharedTextureMemoryVkImageLayoutEndState* FromAPI(SharedTextureMemoryVkImageLayoutEndState* rhs) {
        return rhs;
    }
    inline const wgpu::SharedTextureMemoryVkImageLayoutEndState* ToCppAPI(const SharedTextureMemoryVkImageLayoutEndState* rhs) {
        return reinterpret_cast<const wgpu::SharedTextureMemoryVkImageLayoutEndState*>(rhs);
    }
    inline wgpu::SharedTextureMemoryVkImageLayoutEndState* ToCppAPI(SharedTextureMemoryVkImageLayoutEndState* rhs) {
        return reinterpret_cast<wgpu::SharedTextureMemoryVkImageLayoutEndState*>(rhs);
    }
    inline const SharedTextureMemoryVkImageLayoutEndState* FromCppAPI(const wgpu::SharedTextureMemoryVkImageLayoutEndState* rhs) {
        return reinterpret_cast<const SharedTextureMemoryVkImageLayoutEndState*>(rhs);
    }
    inline SharedTextureMemoryVkImageLayoutEndState* FromCppAPI(wgpu::SharedTextureMemoryVkImageLayoutEndState* rhs) {
        return reinterpret_cast<SharedTextureMemoryVkImageLayoutEndState*>(rhs);
    }
inline const SharedTextureMemoryVkImageLayoutEndState& FromAPI(const WGPUSharedTextureMemoryVkImageLayoutEndState& rhs) {
        return *reinterpret_cast<const SharedTextureMemoryVkImageLayoutEndState*>(&rhs);
    }
    inline SharedTextureMemoryVkImageLayoutEndState& FromAPI(WGPUSharedTextureMemoryVkImageLayoutEndState& rhs) {
        return *reinterpret_cast<SharedTextureMemoryVkImageLayoutEndState*>(&rhs);
    }
    inline const SharedTextureMemoryVkImageLayoutEndState& FromAPI(const SharedTextureMemoryVkImageLayoutEndState& rhs) {
        return rhs;
    }
    inline SharedTextureMemoryVkImageLayoutEndState& FromAPI(SharedTextureMemoryVkImageLayoutEndState& rhs) {
        return rhs;
    }
inline const WGPUSharedTextureMemoryZirconHandleDescriptor* ToAPI(const SharedTextureMemoryZirconHandleDescriptor* rhs) {
        return reinterpret_cast<const WGPUSharedTextureMemoryZirconHandleDescriptor*>(rhs);
    }
    inline WGPUSharedTextureMemoryZirconHandleDescriptor* ToAPI(SharedTextureMemoryZirconHandleDescriptor* rhs) {
        return reinterpret_cast<WGPUSharedTextureMemoryZirconHandleDescriptor*>(rhs);
    }
    inline const WGPUSharedTextureMemoryZirconHandleDescriptor* ToAPI(const WGPUSharedTextureMemoryZirconHandleDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSharedTextureMemoryZirconHandleDescriptor* ToAPI(WGPUSharedTextureMemoryZirconHandleDescriptor* rhs) {
        return rhs;
    }
    inline const SharedTextureMemoryZirconHandleDescriptor* FromAPI(const WGPUSharedTextureMemoryZirconHandleDescriptor* rhs) {
        return reinterpret_cast<const SharedTextureMemoryZirconHandleDescriptor*>(rhs);
    }
    inline SharedTextureMemoryZirconHandleDescriptor* FromAPI(WGPUSharedTextureMemoryZirconHandleDescriptor* rhs) {
        return reinterpret_cast<SharedTextureMemoryZirconHandleDescriptor*>(rhs);
    }
    inline const SharedTextureMemoryZirconHandleDescriptor* FromAPI(const SharedTextureMemoryZirconHandleDescriptor* rhs) {
        return rhs;
    }
    inline SharedTextureMemoryZirconHandleDescriptor* FromAPI(SharedTextureMemoryZirconHandleDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SharedTextureMemoryZirconHandleDescriptor* ToCppAPI(const SharedTextureMemoryZirconHandleDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SharedTextureMemoryZirconHandleDescriptor*>(rhs);
    }
    inline wgpu::SharedTextureMemoryZirconHandleDescriptor* ToCppAPI(SharedTextureMemoryZirconHandleDescriptor* rhs) {
        return reinterpret_cast<wgpu::SharedTextureMemoryZirconHandleDescriptor*>(rhs);
    }
    inline const SharedTextureMemoryZirconHandleDescriptor* FromCppAPI(const wgpu::SharedTextureMemoryZirconHandleDescriptor* rhs) {
        return reinterpret_cast<const SharedTextureMemoryZirconHandleDescriptor*>(rhs);
    }
    inline SharedTextureMemoryZirconHandleDescriptor* FromCppAPI(wgpu::SharedTextureMemoryZirconHandleDescriptor* rhs) {
        return reinterpret_cast<SharedTextureMemoryZirconHandleDescriptor*>(rhs);
    }
inline const SharedTextureMemoryZirconHandleDescriptor& FromAPI(const WGPUSharedTextureMemoryZirconHandleDescriptor& rhs) {
        return *reinterpret_cast<const SharedTextureMemoryZirconHandleDescriptor*>(&rhs);
    }
    inline SharedTextureMemoryZirconHandleDescriptor& FromAPI(WGPUSharedTextureMemoryZirconHandleDescriptor& rhs) {
        return *reinterpret_cast<SharedTextureMemoryZirconHandleDescriptor*>(&rhs);
    }
    inline const SharedTextureMemoryZirconHandleDescriptor& FromAPI(const SharedTextureMemoryZirconHandleDescriptor& rhs) {
        return rhs;
    }
    inline SharedTextureMemoryZirconHandleDescriptor& FromAPI(SharedTextureMemoryZirconHandleDescriptor& rhs) {
        return rhs;
    }
inline const WGPUStaticSamplerBindingLayout* ToAPI(const StaticSamplerBindingLayout* rhs) {
        return reinterpret_cast<const WGPUStaticSamplerBindingLayout*>(rhs);
    }
    inline WGPUStaticSamplerBindingLayout* ToAPI(StaticSamplerBindingLayout* rhs) {
        return reinterpret_cast<WGPUStaticSamplerBindingLayout*>(rhs);
    }
    inline const WGPUStaticSamplerBindingLayout* ToAPI(const WGPUStaticSamplerBindingLayout* rhs) {
        return rhs;
    }
    inline WGPUStaticSamplerBindingLayout* ToAPI(WGPUStaticSamplerBindingLayout* rhs) {
        return rhs;
    }
    inline const StaticSamplerBindingLayout* FromAPI(const WGPUStaticSamplerBindingLayout* rhs) {
        return reinterpret_cast<const StaticSamplerBindingLayout*>(rhs);
    }
    inline StaticSamplerBindingLayout* FromAPI(WGPUStaticSamplerBindingLayout* rhs) {
        return reinterpret_cast<StaticSamplerBindingLayout*>(rhs);
    }
    inline const StaticSamplerBindingLayout* FromAPI(const StaticSamplerBindingLayout* rhs) {
        return rhs;
    }
    inline StaticSamplerBindingLayout* FromAPI(StaticSamplerBindingLayout* rhs) {
        return rhs;
    }
    inline const wgpu::StaticSamplerBindingLayout* ToCppAPI(const StaticSamplerBindingLayout* rhs) {
        return reinterpret_cast<const wgpu::StaticSamplerBindingLayout*>(rhs);
    }
    inline wgpu::StaticSamplerBindingLayout* ToCppAPI(StaticSamplerBindingLayout* rhs) {
        return reinterpret_cast<wgpu::StaticSamplerBindingLayout*>(rhs);
    }
    inline const StaticSamplerBindingLayout* FromCppAPI(const wgpu::StaticSamplerBindingLayout* rhs) {
        return reinterpret_cast<const StaticSamplerBindingLayout*>(rhs);
    }
    inline StaticSamplerBindingLayout* FromCppAPI(wgpu::StaticSamplerBindingLayout* rhs) {
        return reinterpret_cast<StaticSamplerBindingLayout*>(rhs);
    }
inline const StaticSamplerBindingLayout& FromAPI(const WGPUStaticSamplerBindingLayout& rhs) {
        return *reinterpret_cast<const StaticSamplerBindingLayout*>(&rhs);
    }
    inline StaticSamplerBindingLayout& FromAPI(WGPUStaticSamplerBindingLayout& rhs) {
        return *reinterpret_cast<StaticSamplerBindingLayout*>(&rhs);
    }
    inline const StaticSamplerBindingLayout& FromAPI(const StaticSamplerBindingLayout& rhs) {
        return rhs;
    }
    inline StaticSamplerBindingLayout& FromAPI(StaticSamplerBindingLayout& rhs) {
        return rhs;
    }
inline const WGPUStencilFaceState* ToAPI(const StencilFaceState* rhs) {
        return reinterpret_cast<const WGPUStencilFaceState*>(rhs);
    }
    inline WGPUStencilFaceState* ToAPI(StencilFaceState* rhs) {
        return reinterpret_cast<WGPUStencilFaceState*>(rhs);
    }
    inline const WGPUStencilFaceState* ToAPI(const WGPUStencilFaceState* rhs) {
        return rhs;
    }
    inline WGPUStencilFaceState* ToAPI(WGPUStencilFaceState* rhs) {
        return rhs;
    }
    inline const StencilFaceState* FromAPI(const WGPUStencilFaceState* rhs) {
        return reinterpret_cast<const StencilFaceState*>(rhs);
    }
    inline StencilFaceState* FromAPI(WGPUStencilFaceState* rhs) {
        return reinterpret_cast<StencilFaceState*>(rhs);
    }
    inline const StencilFaceState* FromAPI(const StencilFaceState* rhs) {
        return rhs;
    }
    inline StencilFaceState* FromAPI(StencilFaceState* rhs) {
        return rhs;
    }
    inline const wgpu::StencilFaceState* ToCppAPI(const StencilFaceState* rhs) {
        return reinterpret_cast<const wgpu::StencilFaceState*>(rhs);
    }
    inline wgpu::StencilFaceState* ToCppAPI(StencilFaceState* rhs) {
        return reinterpret_cast<wgpu::StencilFaceState*>(rhs);
    }
    inline const StencilFaceState* FromCppAPI(const wgpu::StencilFaceState* rhs) {
        return reinterpret_cast<const StencilFaceState*>(rhs);
    }
    inline StencilFaceState* FromCppAPI(wgpu::StencilFaceState* rhs) {
        return reinterpret_cast<StencilFaceState*>(rhs);
    }
inline const StencilFaceState& FromAPI(const WGPUStencilFaceState& rhs) {
        return *reinterpret_cast<const StencilFaceState*>(&rhs);
    }
    inline StencilFaceState& FromAPI(WGPUStencilFaceState& rhs) {
        return *reinterpret_cast<StencilFaceState*>(&rhs);
    }
    inline const StencilFaceState& FromAPI(const StencilFaceState& rhs) {
        return rhs;
    }
    inline StencilFaceState& FromAPI(StencilFaceState& rhs) {
        return rhs;
    }
inline const WGPUStorageTextureBindingLayout* ToAPI(const StorageTextureBindingLayout* rhs) {
        return reinterpret_cast<const WGPUStorageTextureBindingLayout*>(rhs);
    }
    inline WGPUStorageTextureBindingLayout* ToAPI(StorageTextureBindingLayout* rhs) {
        return reinterpret_cast<WGPUStorageTextureBindingLayout*>(rhs);
    }
    inline const WGPUStorageTextureBindingLayout* ToAPI(const WGPUStorageTextureBindingLayout* rhs) {
        return rhs;
    }
    inline WGPUStorageTextureBindingLayout* ToAPI(WGPUStorageTextureBindingLayout* rhs) {
        return rhs;
    }
    inline const StorageTextureBindingLayout* FromAPI(const WGPUStorageTextureBindingLayout* rhs) {
        return reinterpret_cast<const StorageTextureBindingLayout*>(rhs);
    }
    inline StorageTextureBindingLayout* FromAPI(WGPUStorageTextureBindingLayout* rhs) {
        return reinterpret_cast<StorageTextureBindingLayout*>(rhs);
    }
    inline const StorageTextureBindingLayout* FromAPI(const StorageTextureBindingLayout* rhs) {
        return rhs;
    }
    inline StorageTextureBindingLayout* FromAPI(StorageTextureBindingLayout* rhs) {
        return rhs;
    }
    inline const wgpu::StorageTextureBindingLayout* ToCppAPI(const StorageTextureBindingLayout* rhs) {
        return reinterpret_cast<const wgpu::StorageTextureBindingLayout*>(rhs);
    }
    inline wgpu::StorageTextureBindingLayout* ToCppAPI(StorageTextureBindingLayout* rhs) {
        return reinterpret_cast<wgpu::StorageTextureBindingLayout*>(rhs);
    }
    inline const StorageTextureBindingLayout* FromCppAPI(const wgpu::StorageTextureBindingLayout* rhs) {
        return reinterpret_cast<const StorageTextureBindingLayout*>(rhs);
    }
    inline StorageTextureBindingLayout* FromCppAPI(wgpu::StorageTextureBindingLayout* rhs) {
        return reinterpret_cast<StorageTextureBindingLayout*>(rhs);
    }
inline const StorageTextureBindingLayout& FromAPI(const WGPUStorageTextureBindingLayout& rhs) {
        return *reinterpret_cast<const StorageTextureBindingLayout*>(&rhs);
    }
    inline StorageTextureBindingLayout& FromAPI(WGPUStorageTextureBindingLayout& rhs) {
        return *reinterpret_cast<StorageTextureBindingLayout*>(&rhs);
    }
    inline const StorageTextureBindingLayout& FromAPI(const StorageTextureBindingLayout& rhs) {
        return rhs;
    }
    inline StorageTextureBindingLayout& FromAPI(StorageTextureBindingLayout& rhs) {
        return rhs;
    }
inline const WGPUSubgroupMatrixConfig* ToAPI(const SubgroupMatrixConfig* rhs) {
        return reinterpret_cast<const WGPUSubgroupMatrixConfig*>(rhs);
    }
    inline WGPUSubgroupMatrixConfig* ToAPI(SubgroupMatrixConfig* rhs) {
        return reinterpret_cast<WGPUSubgroupMatrixConfig*>(rhs);
    }
    inline const WGPUSubgroupMatrixConfig* ToAPI(const WGPUSubgroupMatrixConfig* rhs) {
        return rhs;
    }
    inline WGPUSubgroupMatrixConfig* ToAPI(WGPUSubgroupMatrixConfig* rhs) {
        return rhs;
    }
    inline const SubgroupMatrixConfig* FromAPI(const WGPUSubgroupMatrixConfig* rhs) {
        return reinterpret_cast<const SubgroupMatrixConfig*>(rhs);
    }
    inline SubgroupMatrixConfig* FromAPI(WGPUSubgroupMatrixConfig* rhs) {
        return reinterpret_cast<SubgroupMatrixConfig*>(rhs);
    }
    inline const SubgroupMatrixConfig* FromAPI(const SubgroupMatrixConfig* rhs) {
        return rhs;
    }
    inline SubgroupMatrixConfig* FromAPI(SubgroupMatrixConfig* rhs) {
        return rhs;
    }
    inline const wgpu::SubgroupMatrixConfig* ToCppAPI(const SubgroupMatrixConfig* rhs) {
        return reinterpret_cast<const wgpu::SubgroupMatrixConfig*>(rhs);
    }
    inline wgpu::SubgroupMatrixConfig* ToCppAPI(SubgroupMatrixConfig* rhs) {
        return reinterpret_cast<wgpu::SubgroupMatrixConfig*>(rhs);
    }
    inline const SubgroupMatrixConfig* FromCppAPI(const wgpu::SubgroupMatrixConfig* rhs) {
        return reinterpret_cast<const SubgroupMatrixConfig*>(rhs);
    }
    inline SubgroupMatrixConfig* FromCppAPI(wgpu::SubgroupMatrixConfig* rhs) {
        return reinterpret_cast<SubgroupMatrixConfig*>(rhs);
    }
inline const SubgroupMatrixConfig& FromAPI(const WGPUSubgroupMatrixConfig& rhs) {
        return *reinterpret_cast<const SubgroupMatrixConfig*>(&rhs);
    }
    inline SubgroupMatrixConfig& FromAPI(WGPUSubgroupMatrixConfig& rhs) {
        return *reinterpret_cast<SubgroupMatrixConfig*>(&rhs);
    }
    inline const SubgroupMatrixConfig& FromAPI(const SubgroupMatrixConfig& rhs) {
        return rhs;
    }
    inline SubgroupMatrixConfig& FromAPI(SubgroupMatrixConfig& rhs) {
        return rhs;
    }
inline const WGPUSupportedFeatures* ToAPI(const SupportedFeatures* rhs) {
        return reinterpret_cast<const WGPUSupportedFeatures*>(rhs);
    }
    inline WGPUSupportedFeatures* ToAPI(SupportedFeatures* rhs) {
        return reinterpret_cast<WGPUSupportedFeatures*>(rhs);
    }
    inline const WGPUSupportedFeatures* ToAPI(const WGPUSupportedFeatures* rhs) {
        return rhs;
    }
    inline WGPUSupportedFeatures* ToAPI(WGPUSupportedFeatures* rhs) {
        return rhs;
    }
    inline const SupportedFeatures* FromAPI(const WGPUSupportedFeatures* rhs) {
        return reinterpret_cast<const SupportedFeatures*>(rhs);
    }
    inline SupportedFeatures* FromAPI(WGPUSupportedFeatures* rhs) {
        return reinterpret_cast<SupportedFeatures*>(rhs);
    }
    inline const SupportedFeatures* FromAPI(const SupportedFeatures* rhs) {
        return rhs;
    }
    inline SupportedFeatures* FromAPI(SupportedFeatures* rhs) {
        return rhs;
    }
    inline const wgpu::SupportedFeatures* ToCppAPI(const SupportedFeatures* rhs) {
        return reinterpret_cast<const wgpu::SupportedFeatures*>(rhs);
    }
    inline wgpu::SupportedFeatures* ToCppAPI(SupportedFeatures* rhs) {
        return reinterpret_cast<wgpu::SupportedFeatures*>(rhs);
    }
    inline const SupportedFeatures* FromCppAPI(const wgpu::SupportedFeatures* rhs) {
        return reinterpret_cast<const SupportedFeatures*>(rhs);
    }
    inline SupportedFeatures* FromCppAPI(wgpu::SupportedFeatures* rhs) {
        return reinterpret_cast<SupportedFeatures*>(rhs);
    }
inline const SupportedFeatures& FromAPI(const WGPUSupportedFeatures& rhs) {
        return *reinterpret_cast<const SupportedFeatures*>(&rhs);
    }
    inline SupportedFeatures& FromAPI(WGPUSupportedFeatures& rhs) {
        return *reinterpret_cast<SupportedFeatures*>(&rhs);
    }
    inline const SupportedFeatures& FromAPI(const SupportedFeatures& rhs) {
        return rhs;
    }
    inline SupportedFeatures& FromAPI(SupportedFeatures& rhs) {
        return rhs;
    }
inline const WGPUSupportedInstanceFeatures* ToAPI(const SupportedInstanceFeatures* rhs) {
        return reinterpret_cast<const WGPUSupportedInstanceFeatures*>(rhs);
    }
    inline WGPUSupportedInstanceFeatures* ToAPI(SupportedInstanceFeatures* rhs) {
        return reinterpret_cast<WGPUSupportedInstanceFeatures*>(rhs);
    }
    inline const WGPUSupportedInstanceFeatures* ToAPI(const WGPUSupportedInstanceFeatures* rhs) {
        return rhs;
    }
    inline WGPUSupportedInstanceFeatures* ToAPI(WGPUSupportedInstanceFeatures* rhs) {
        return rhs;
    }
    inline const SupportedInstanceFeatures* FromAPI(const WGPUSupportedInstanceFeatures* rhs) {
        return reinterpret_cast<const SupportedInstanceFeatures*>(rhs);
    }
    inline SupportedInstanceFeatures* FromAPI(WGPUSupportedInstanceFeatures* rhs) {
        return reinterpret_cast<SupportedInstanceFeatures*>(rhs);
    }
    inline const SupportedInstanceFeatures* FromAPI(const SupportedInstanceFeatures* rhs) {
        return rhs;
    }
    inline SupportedInstanceFeatures* FromAPI(SupportedInstanceFeatures* rhs) {
        return rhs;
    }
    inline const wgpu::SupportedInstanceFeatures* ToCppAPI(const SupportedInstanceFeatures* rhs) {
        return reinterpret_cast<const wgpu::SupportedInstanceFeatures*>(rhs);
    }
    inline wgpu::SupportedInstanceFeatures* ToCppAPI(SupportedInstanceFeatures* rhs) {
        return reinterpret_cast<wgpu::SupportedInstanceFeatures*>(rhs);
    }
    inline const SupportedInstanceFeatures* FromCppAPI(const wgpu::SupportedInstanceFeatures* rhs) {
        return reinterpret_cast<const SupportedInstanceFeatures*>(rhs);
    }
    inline SupportedInstanceFeatures* FromCppAPI(wgpu::SupportedInstanceFeatures* rhs) {
        return reinterpret_cast<SupportedInstanceFeatures*>(rhs);
    }
inline const SupportedInstanceFeatures& FromAPI(const WGPUSupportedInstanceFeatures& rhs) {
        return *reinterpret_cast<const SupportedInstanceFeatures*>(&rhs);
    }
    inline SupportedInstanceFeatures& FromAPI(WGPUSupportedInstanceFeatures& rhs) {
        return *reinterpret_cast<SupportedInstanceFeatures*>(&rhs);
    }
    inline const SupportedInstanceFeatures& FromAPI(const SupportedInstanceFeatures& rhs) {
        return rhs;
    }
    inline SupportedInstanceFeatures& FromAPI(SupportedInstanceFeatures& rhs) {
        return rhs;
    }
inline const WGPUSupportedWGSLLanguageFeatures* ToAPI(const SupportedWGSLLanguageFeatures* rhs) {
        return reinterpret_cast<const WGPUSupportedWGSLLanguageFeatures*>(rhs);
    }
    inline WGPUSupportedWGSLLanguageFeatures* ToAPI(SupportedWGSLLanguageFeatures* rhs) {
        return reinterpret_cast<WGPUSupportedWGSLLanguageFeatures*>(rhs);
    }
    inline const WGPUSupportedWGSLLanguageFeatures* ToAPI(const WGPUSupportedWGSLLanguageFeatures* rhs) {
        return rhs;
    }
    inline WGPUSupportedWGSLLanguageFeatures* ToAPI(WGPUSupportedWGSLLanguageFeatures* rhs) {
        return rhs;
    }
    inline const SupportedWGSLLanguageFeatures* FromAPI(const WGPUSupportedWGSLLanguageFeatures* rhs) {
        return reinterpret_cast<const SupportedWGSLLanguageFeatures*>(rhs);
    }
    inline SupportedWGSLLanguageFeatures* FromAPI(WGPUSupportedWGSLLanguageFeatures* rhs) {
        return reinterpret_cast<SupportedWGSLLanguageFeatures*>(rhs);
    }
    inline const SupportedWGSLLanguageFeatures* FromAPI(const SupportedWGSLLanguageFeatures* rhs) {
        return rhs;
    }
    inline SupportedWGSLLanguageFeatures* FromAPI(SupportedWGSLLanguageFeatures* rhs) {
        return rhs;
    }
    inline const wgpu::SupportedWGSLLanguageFeatures* ToCppAPI(const SupportedWGSLLanguageFeatures* rhs) {
        return reinterpret_cast<const wgpu::SupportedWGSLLanguageFeatures*>(rhs);
    }
    inline wgpu::SupportedWGSLLanguageFeatures* ToCppAPI(SupportedWGSLLanguageFeatures* rhs) {
        return reinterpret_cast<wgpu::SupportedWGSLLanguageFeatures*>(rhs);
    }
    inline const SupportedWGSLLanguageFeatures* FromCppAPI(const wgpu::SupportedWGSLLanguageFeatures* rhs) {
        return reinterpret_cast<const SupportedWGSLLanguageFeatures*>(rhs);
    }
    inline SupportedWGSLLanguageFeatures* FromCppAPI(wgpu::SupportedWGSLLanguageFeatures* rhs) {
        return reinterpret_cast<SupportedWGSLLanguageFeatures*>(rhs);
    }
inline const SupportedWGSLLanguageFeatures& FromAPI(const WGPUSupportedWGSLLanguageFeatures& rhs) {
        return *reinterpret_cast<const SupportedWGSLLanguageFeatures*>(&rhs);
    }
    inline SupportedWGSLLanguageFeatures& FromAPI(WGPUSupportedWGSLLanguageFeatures& rhs) {
        return *reinterpret_cast<SupportedWGSLLanguageFeatures*>(&rhs);
    }
    inline const SupportedWGSLLanguageFeatures& FromAPI(const SupportedWGSLLanguageFeatures& rhs) {
        return rhs;
    }
    inline SupportedWGSLLanguageFeatures& FromAPI(SupportedWGSLLanguageFeatures& rhs) {
        return rhs;
    }
inline const WGPUSurfaceCapabilities* ToAPI(const SurfaceCapabilities* rhs) {
        return reinterpret_cast<const WGPUSurfaceCapabilities*>(rhs);
    }
    inline WGPUSurfaceCapabilities* ToAPI(SurfaceCapabilities* rhs) {
        return reinterpret_cast<WGPUSurfaceCapabilities*>(rhs);
    }
    inline const WGPUSurfaceCapabilities* ToAPI(const WGPUSurfaceCapabilities* rhs) {
        return rhs;
    }
    inline WGPUSurfaceCapabilities* ToAPI(WGPUSurfaceCapabilities* rhs) {
        return rhs;
    }
    inline const SurfaceCapabilities* FromAPI(const WGPUSurfaceCapabilities* rhs) {
        return reinterpret_cast<const SurfaceCapabilities*>(rhs);
    }
    inline SurfaceCapabilities* FromAPI(WGPUSurfaceCapabilities* rhs) {
        return reinterpret_cast<SurfaceCapabilities*>(rhs);
    }
    inline const SurfaceCapabilities* FromAPI(const SurfaceCapabilities* rhs) {
        return rhs;
    }
    inline SurfaceCapabilities* FromAPI(SurfaceCapabilities* rhs) {
        return rhs;
    }
    inline const wgpu::SurfaceCapabilities* ToCppAPI(const SurfaceCapabilities* rhs) {
        return reinterpret_cast<const wgpu::SurfaceCapabilities*>(rhs);
    }
    inline wgpu::SurfaceCapabilities* ToCppAPI(SurfaceCapabilities* rhs) {
        return reinterpret_cast<wgpu::SurfaceCapabilities*>(rhs);
    }
    inline const SurfaceCapabilities* FromCppAPI(const wgpu::SurfaceCapabilities* rhs) {
        return reinterpret_cast<const SurfaceCapabilities*>(rhs);
    }
    inline SurfaceCapabilities* FromCppAPI(wgpu::SurfaceCapabilities* rhs) {
        return reinterpret_cast<SurfaceCapabilities*>(rhs);
    }
inline const SurfaceCapabilities& FromAPI(const WGPUSurfaceCapabilities& rhs) {
        return *reinterpret_cast<const SurfaceCapabilities*>(&rhs);
    }
    inline SurfaceCapabilities& FromAPI(WGPUSurfaceCapabilities& rhs) {
        return *reinterpret_cast<SurfaceCapabilities*>(&rhs);
    }
    inline const SurfaceCapabilities& FromAPI(const SurfaceCapabilities& rhs) {
        return rhs;
    }
    inline SurfaceCapabilities& FromAPI(SurfaceCapabilities& rhs) {
        return rhs;
    }
inline const WGPUSurfaceColorManagement* ToAPI(const SurfaceColorManagement* rhs) {
        return reinterpret_cast<const WGPUSurfaceColorManagement*>(rhs);
    }
    inline WGPUSurfaceColorManagement* ToAPI(SurfaceColorManagement* rhs) {
        return reinterpret_cast<WGPUSurfaceColorManagement*>(rhs);
    }
    inline const WGPUSurfaceColorManagement* ToAPI(const WGPUSurfaceColorManagement* rhs) {
        return rhs;
    }
    inline WGPUSurfaceColorManagement* ToAPI(WGPUSurfaceColorManagement* rhs) {
        return rhs;
    }
    inline const SurfaceColorManagement* FromAPI(const WGPUSurfaceColorManagement* rhs) {
        return reinterpret_cast<const SurfaceColorManagement*>(rhs);
    }
    inline SurfaceColorManagement* FromAPI(WGPUSurfaceColorManagement* rhs) {
        return reinterpret_cast<SurfaceColorManagement*>(rhs);
    }
    inline const SurfaceColorManagement* FromAPI(const SurfaceColorManagement* rhs) {
        return rhs;
    }
    inline SurfaceColorManagement* FromAPI(SurfaceColorManagement* rhs) {
        return rhs;
    }
    inline const wgpu::SurfaceColorManagement* ToCppAPI(const SurfaceColorManagement* rhs) {
        return reinterpret_cast<const wgpu::SurfaceColorManagement*>(rhs);
    }
    inline wgpu::SurfaceColorManagement* ToCppAPI(SurfaceColorManagement* rhs) {
        return reinterpret_cast<wgpu::SurfaceColorManagement*>(rhs);
    }
    inline const SurfaceColorManagement* FromCppAPI(const wgpu::SurfaceColorManagement* rhs) {
        return reinterpret_cast<const SurfaceColorManagement*>(rhs);
    }
    inline SurfaceColorManagement* FromCppAPI(wgpu::SurfaceColorManagement* rhs) {
        return reinterpret_cast<SurfaceColorManagement*>(rhs);
    }
inline const SurfaceColorManagement& FromAPI(const WGPUSurfaceColorManagement& rhs) {
        return *reinterpret_cast<const SurfaceColorManagement*>(&rhs);
    }
    inline SurfaceColorManagement& FromAPI(WGPUSurfaceColorManagement& rhs) {
        return *reinterpret_cast<SurfaceColorManagement*>(&rhs);
    }
    inline const SurfaceColorManagement& FromAPI(const SurfaceColorManagement& rhs) {
        return rhs;
    }
    inline SurfaceColorManagement& FromAPI(SurfaceColorManagement& rhs) {
        return rhs;
    }
inline const WGPUSurfaceConfiguration* ToAPI(const SurfaceConfiguration* rhs) {
        return reinterpret_cast<const WGPUSurfaceConfiguration*>(rhs);
    }
    inline WGPUSurfaceConfiguration* ToAPI(SurfaceConfiguration* rhs) {
        return reinterpret_cast<WGPUSurfaceConfiguration*>(rhs);
    }
    inline const WGPUSurfaceConfiguration* ToAPI(const WGPUSurfaceConfiguration* rhs) {
        return rhs;
    }
    inline WGPUSurfaceConfiguration* ToAPI(WGPUSurfaceConfiguration* rhs) {
        return rhs;
    }
    inline const SurfaceConfiguration* FromAPI(const WGPUSurfaceConfiguration* rhs) {
        return reinterpret_cast<const SurfaceConfiguration*>(rhs);
    }
    inline SurfaceConfiguration* FromAPI(WGPUSurfaceConfiguration* rhs) {
        return reinterpret_cast<SurfaceConfiguration*>(rhs);
    }
    inline const SurfaceConfiguration* FromAPI(const SurfaceConfiguration* rhs) {
        return rhs;
    }
    inline SurfaceConfiguration* FromAPI(SurfaceConfiguration* rhs) {
        return rhs;
    }
    inline const wgpu::SurfaceConfiguration* ToCppAPI(const SurfaceConfiguration* rhs) {
        return reinterpret_cast<const wgpu::SurfaceConfiguration*>(rhs);
    }
    inline wgpu::SurfaceConfiguration* ToCppAPI(SurfaceConfiguration* rhs) {
        return reinterpret_cast<wgpu::SurfaceConfiguration*>(rhs);
    }
    inline const SurfaceConfiguration* FromCppAPI(const wgpu::SurfaceConfiguration* rhs) {
        return reinterpret_cast<const SurfaceConfiguration*>(rhs);
    }
    inline SurfaceConfiguration* FromCppAPI(wgpu::SurfaceConfiguration* rhs) {
        return reinterpret_cast<SurfaceConfiguration*>(rhs);
    }
inline const SurfaceConfiguration& FromAPI(const WGPUSurfaceConfiguration& rhs) {
        return *reinterpret_cast<const SurfaceConfiguration*>(&rhs);
    }
    inline SurfaceConfiguration& FromAPI(WGPUSurfaceConfiguration& rhs) {
        return *reinterpret_cast<SurfaceConfiguration*>(&rhs);
    }
    inline const SurfaceConfiguration& FromAPI(const SurfaceConfiguration& rhs) {
        return rhs;
    }
    inline SurfaceConfiguration& FromAPI(SurfaceConfiguration& rhs) {
        return rhs;
    }
inline const WGPUSurfaceDescriptorFromWindowsCoreWindow* ToAPI(const SurfaceDescriptorFromWindowsCoreWindow* rhs) {
        return reinterpret_cast<const WGPUSurfaceDescriptorFromWindowsCoreWindow*>(rhs);
    }
    inline WGPUSurfaceDescriptorFromWindowsCoreWindow* ToAPI(SurfaceDescriptorFromWindowsCoreWindow* rhs) {
        return reinterpret_cast<WGPUSurfaceDescriptorFromWindowsCoreWindow*>(rhs);
    }
    inline const WGPUSurfaceDescriptorFromWindowsCoreWindow* ToAPI(const WGPUSurfaceDescriptorFromWindowsCoreWindow* rhs) {
        return rhs;
    }
    inline WGPUSurfaceDescriptorFromWindowsCoreWindow* ToAPI(WGPUSurfaceDescriptorFromWindowsCoreWindow* rhs) {
        return rhs;
    }
    inline const SurfaceDescriptorFromWindowsCoreWindow* FromAPI(const WGPUSurfaceDescriptorFromWindowsCoreWindow* rhs) {
        return reinterpret_cast<const SurfaceDescriptorFromWindowsCoreWindow*>(rhs);
    }
    inline SurfaceDescriptorFromWindowsCoreWindow* FromAPI(WGPUSurfaceDescriptorFromWindowsCoreWindow* rhs) {
        return reinterpret_cast<SurfaceDescriptorFromWindowsCoreWindow*>(rhs);
    }
    inline const SurfaceDescriptorFromWindowsCoreWindow* FromAPI(const SurfaceDescriptorFromWindowsCoreWindow* rhs) {
        return rhs;
    }
    inline SurfaceDescriptorFromWindowsCoreWindow* FromAPI(SurfaceDescriptorFromWindowsCoreWindow* rhs) {
        return rhs;
    }
    inline const wgpu::SurfaceDescriptorFromWindowsCoreWindow* ToCppAPI(const SurfaceDescriptorFromWindowsCoreWindow* rhs) {
        return reinterpret_cast<const wgpu::SurfaceDescriptorFromWindowsCoreWindow*>(rhs);
    }
    inline wgpu::SurfaceDescriptorFromWindowsCoreWindow* ToCppAPI(SurfaceDescriptorFromWindowsCoreWindow* rhs) {
        return reinterpret_cast<wgpu::SurfaceDescriptorFromWindowsCoreWindow*>(rhs);
    }
    inline const SurfaceDescriptorFromWindowsCoreWindow* FromCppAPI(const wgpu::SurfaceDescriptorFromWindowsCoreWindow* rhs) {
        return reinterpret_cast<const SurfaceDescriptorFromWindowsCoreWindow*>(rhs);
    }
    inline SurfaceDescriptorFromWindowsCoreWindow* FromCppAPI(wgpu::SurfaceDescriptorFromWindowsCoreWindow* rhs) {
        return reinterpret_cast<SurfaceDescriptorFromWindowsCoreWindow*>(rhs);
    }
inline const SurfaceDescriptorFromWindowsCoreWindow& FromAPI(const WGPUSurfaceDescriptorFromWindowsCoreWindow& rhs) {
        return *reinterpret_cast<const SurfaceDescriptorFromWindowsCoreWindow*>(&rhs);
    }
    inline SurfaceDescriptorFromWindowsCoreWindow& FromAPI(WGPUSurfaceDescriptorFromWindowsCoreWindow& rhs) {
        return *reinterpret_cast<SurfaceDescriptorFromWindowsCoreWindow*>(&rhs);
    }
    inline const SurfaceDescriptorFromWindowsCoreWindow& FromAPI(const SurfaceDescriptorFromWindowsCoreWindow& rhs) {
        return rhs;
    }
    inline SurfaceDescriptorFromWindowsCoreWindow& FromAPI(SurfaceDescriptorFromWindowsCoreWindow& rhs) {
        return rhs;
    }
inline const WGPUSurfaceDescriptorFromWindowsUWPSwapChainPanel* ToAPI(const SurfaceDescriptorFromWindowsUWPSwapChainPanel* rhs) {
        return reinterpret_cast<const WGPUSurfaceDescriptorFromWindowsUWPSwapChainPanel*>(rhs);
    }
    inline WGPUSurfaceDescriptorFromWindowsUWPSwapChainPanel* ToAPI(SurfaceDescriptorFromWindowsUWPSwapChainPanel* rhs) {
        return reinterpret_cast<WGPUSurfaceDescriptorFromWindowsUWPSwapChainPanel*>(rhs);
    }
    inline const WGPUSurfaceDescriptorFromWindowsUWPSwapChainPanel* ToAPI(const WGPUSurfaceDescriptorFromWindowsUWPSwapChainPanel* rhs) {
        return rhs;
    }
    inline WGPUSurfaceDescriptorFromWindowsUWPSwapChainPanel* ToAPI(WGPUSurfaceDescriptorFromWindowsUWPSwapChainPanel* rhs) {
        return rhs;
    }
    inline const SurfaceDescriptorFromWindowsUWPSwapChainPanel* FromAPI(const WGPUSurfaceDescriptorFromWindowsUWPSwapChainPanel* rhs) {
        return reinterpret_cast<const SurfaceDescriptorFromWindowsUWPSwapChainPanel*>(rhs);
    }
    inline SurfaceDescriptorFromWindowsUWPSwapChainPanel* FromAPI(WGPUSurfaceDescriptorFromWindowsUWPSwapChainPanel* rhs) {
        return reinterpret_cast<SurfaceDescriptorFromWindowsUWPSwapChainPanel*>(rhs);
    }
    inline const SurfaceDescriptorFromWindowsUWPSwapChainPanel* FromAPI(const SurfaceDescriptorFromWindowsUWPSwapChainPanel* rhs) {
        return rhs;
    }
    inline SurfaceDescriptorFromWindowsUWPSwapChainPanel* FromAPI(SurfaceDescriptorFromWindowsUWPSwapChainPanel* rhs) {
        return rhs;
    }
    inline const wgpu::SurfaceDescriptorFromWindowsUWPSwapChainPanel* ToCppAPI(const SurfaceDescriptorFromWindowsUWPSwapChainPanel* rhs) {
        return reinterpret_cast<const wgpu::SurfaceDescriptorFromWindowsUWPSwapChainPanel*>(rhs);
    }
    inline wgpu::SurfaceDescriptorFromWindowsUWPSwapChainPanel* ToCppAPI(SurfaceDescriptorFromWindowsUWPSwapChainPanel* rhs) {
        return reinterpret_cast<wgpu::SurfaceDescriptorFromWindowsUWPSwapChainPanel*>(rhs);
    }
    inline const SurfaceDescriptorFromWindowsUWPSwapChainPanel* FromCppAPI(const wgpu::SurfaceDescriptorFromWindowsUWPSwapChainPanel* rhs) {
        return reinterpret_cast<const SurfaceDescriptorFromWindowsUWPSwapChainPanel*>(rhs);
    }
    inline SurfaceDescriptorFromWindowsUWPSwapChainPanel* FromCppAPI(wgpu::SurfaceDescriptorFromWindowsUWPSwapChainPanel* rhs) {
        return reinterpret_cast<SurfaceDescriptorFromWindowsUWPSwapChainPanel*>(rhs);
    }
inline const SurfaceDescriptorFromWindowsUWPSwapChainPanel& FromAPI(const WGPUSurfaceDescriptorFromWindowsUWPSwapChainPanel& rhs) {
        return *reinterpret_cast<const SurfaceDescriptorFromWindowsUWPSwapChainPanel*>(&rhs);
    }
    inline SurfaceDescriptorFromWindowsUWPSwapChainPanel& FromAPI(WGPUSurfaceDescriptorFromWindowsUWPSwapChainPanel& rhs) {
        return *reinterpret_cast<SurfaceDescriptorFromWindowsUWPSwapChainPanel*>(&rhs);
    }
    inline const SurfaceDescriptorFromWindowsUWPSwapChainPanel& FromAPI(const SurfaceDescriptorFromWindowsUWPSwapChainPanel& rhs) {
        return rhs;
    }
    inline SurfaceDescriptorFromWindowsUWPSwapChainPanel& FromAPI(SurfaceDescriptorFromWindowsUWPSwapChainPanel& rhs) {
        return rhs;
    }
inline const WGPUSurfaceDescriptorFromWindowsWinUISwapChainPanel* ToAPI(const SurfaceDescriptorFromWindowsWinUISwapChainPanel* rhs) {
        return reinterpret_cast<const WGPUSurfaceDescriptorFromWindowsWinUISwapChainPanel*>(rhs);
    }
    inline WGPUSurfaceDescriptorFromWindowsWinUISwapChainPanel* ToAPI(SurfaceDescriptorFromWindowsWinUISwapChainPanel* rhs) {
        return reinterpret_cast<WGPUSurfaceDescriptorFromWindowsWinUISwapChainPanel*>(rhs);
    }
    inline const WGPUSurfaceDescriptorFromWindowsWinUISwapChainPanel* ToAPI(const WGPUSurfaceDescriptorFromWindowsWinUISwapChainPanel* rhs) {
        return rhs;
    }
    inline WGPUSurfaceDescriptorFromWindowsWinUISwapChainPanel* ToAPI(WGPUSurfaceDescriptorFromWindowsWinUISwapChainPanel* rhs) {
        return rhs;
    }
    inline const SurfaceDescriptorFromWindowsWinUISwapChainPanel* FromAPI(const WGPUSurfaceDescriptorFromWindowsWinUISwapChainPanel* rhs) {
        return reinterpret_cast<const SurfaceDescriptorFromWindowsWinUISwapChainPanel*>(rhs);
    }
    inline SurfaceDescriptorFromWindowsWinUISwapChainPanel* FromAPI(WGPUSurfaceDescriptorFromWindowsWinUISwapChainPanel* rhs) {
        return reinterpret_cast<SurfaceDescriptorFromWindowsWinUISwapChainPanel*>(rhs);
    }
    inline const SurfaceDescriptorFromWindowsWinUISwapChainPanel* FromAPI(const SurfaceDescriptorFromWindowsWinUISwapChainPanel* rhs) {
        return rhs;
    }
    inline SurfaceDescriptorFromWindowsWinUISwapChainPanel* FromAPI(SurfaceDescriptorFromWindowsWinUISwapChainPanel* rhs) {
        return rhs;
    }
    inline const wgpu::SurfaceDescriptorFromWindowsWinUISwapChainPanel* ToCppAPI(const SurfaceDescriptorFromWindowsWinUISwapChainPanel* rhs) {
        return reinterpret_cast<const wgpu::SurfaceDescriptorFromWindowsWinUISwapChainPanel*>(rhs);
    }
    inline wgpu::SurfaceDescriptorFromWindowsWinUISwapChainPanel* ToCppAPI(SurfaceDescriptorFromWindowsWinUISwapChainPanel* rhs) {
        return reinterpret_cast<wgpu::SurfaceDescriptorFromWindowsWinUISwapChainPanel*>(rhs);
    }
    inline const SurfaceDescriptorFromWindowsWinUISwapChainPanel* FromCppAPI(const wgpu::SurfaceDescriptorFromWindowsWinUISwapChainPanel* rhs) {
        return reinterpret_cast<const SurfaceDescriptorFromWindowsWinUISwapChainPanel*>(rhs);
    }
    inline SurfaceDescriptorFromWindowsWinUISwapChainPanel* FromCppAPI(wgpu::SurfaceDescriptorFromWindowsWinUISwapChainPanel* rhs) {
        return reinterpret_cast<SurfaceDescriptorFromWindowsWinUISwapChainPanel*>(rhs);
    }
inline const SurfaceDescriptorFromWindowsWinUISwapChainPanel& FromAPI(const WGPUSurfaceDescriptorFromWindowsWinUISwapChainPanel& rhs) {
        return *reinterpret_cast<const SurfaceDescriptorFromWindowsWinUISwapChainPanel*>(&rhs);
    }
    inline SurfaceDescriptorFromWindowsWinUISwapChainPanel& FromAPI(WGPUSurfaceDescriptorFromWindowsWinUISwapChainPanel& rhs) {
        return *reinterpret_cast<SurfaceDescriptorFromWindowsWinUISwapChainPanel*>(&rhs);
    }
    inline const SurfaceDescriptorFromWindowsWinUISwapChainPanel& FromAPI(const SurfaceDescriptorFromWindowsWinUISwapChainPanel& rhs) {
        return rhs;
    }
    inline SurfaceDescriptorFromWindowsWinUISwapChainPanel& FromAPI(SurfaceDescriptorFromWindowsWinUISwapChainPanel& rhs) {
        return rhs;
    }
inline const WGPUSurfaceSourceAndroidNativeWindow* ToAPI(const SurfaceSourceAndroidNativeWindow* rhs) {
        return reinterpret_cast<const WGPUSurfaceSourceAndroidNativeWindow*>(rhs);
    }
    inline WGPUSurfaceSourceAndroidNativeWindow* ToAPI(SurfaceSourceAndroidNativeWindow* rhs) {
        return reinterpret_cast<WGPUSurfaceSourceAndroidNativeWindow*>(rhs);
    }
    inline const WGPUSurfaceSourceAndroidNativeWindow* ToAPI(const WGPUSurfaceSourceAndroidNativeWindow* rhs) {
        return rhs;
    }
    inline WGPUSurfaceSourceAndroidNativeWindow* ToAPI(WGPUSurfaceSourceAndroidNativeWindow* rhs) {
        return rhs;
    }
    inline const SurfaceSourceAndroidNativeWindow* FromAPI(const WGPUSurfaceSourceAndroidNativeWindow* rhs) {
        return reinterpret_cast<const SurfaceSourceAndroidNativeWindow*>(rhs);
    }
    inline SurfaceSourceAndroidNativeWindow* FromAPI(WGPUSurfaceSourceAndroidNativeWindow* rhs) {
        return reinterpret_cast<SurfaceSourceAndroidNativeWindow*>(rhs);
    }
    inline const SurfaceSourceAndroidNativeWindow* FromAPI(const SurfaceSourceAndroidNativeWindow* rhs) {
        return rhs;
    }
    inline SurfaceSourceAndroidNativeWindow* FromAPI(SurfaceSourceAndroidNativeWindow* rhs) {
        return rhs;
    }
    inline const wgpu::SurfaceSourceAndroidNativeWindow* ToCppAPI(const SurfaceSourceAndroidNativeWindow* rhs) {
        return reinterpret_cast<const wgpu::SurfaceSourceAndroidNativeWindow*>(rhs);
    }
    inline wgpu::SurfaceSourceAndroidNativeWindow* ToCppAPI(SurfaceSourceAndroidNativeWindow* rhs) {
        return reinterpret_cast<wgpu::SurfaceSourceAndroidNativeWindow*>(rhs);
    }
    inline const SurfaceSourceAndroidNativeWindow* FromCppAPI(const wgpu::SurfaceSourceAndroidNativeWindow* rhs) {
        return reinterpret_cast<const SurfaceSourceAndroidNativeWindow*>(rhs);
    }
    inline SurfaceSourceAndroidNativeWindow* FromCppAPI(wgpu::SurfaceSourceAndroidNativeWindow* rhs) {
        return reinterpret_cast<SurfaceSourceAndroidNativeWindow*>(rhs);
    }
inline const SurfaceSourceAndroidNativeWindow& FromAPI(const WGPUSurfaceSourceAndroidNativeWindow& rhs) {
        return *reinterpret_cast<const SurfaceSourceAndroidNativeWindow*>(&rhs);
    }
    inline SurfaceSourceAndroidNativeWindow& FromAPI(WGPUSurfaceSourceAndroidNativeWindow& rhs) {
        return *reinterpret_cast<SurfaceSourceAndroidNativeWindow*>(&rhs);
    }
    inline const SurfaceSourceAndroidNativeWindow& FromAPI(const SurfaceSourceAndroidNativeWindow& rhs) {
        return rhs;
    }
    inline SurfaceSourceAndroidNativeWindow& FromAPI(SurfaceSourceAndroidNativeWindow& rhs) {
        return rhs;
    }
inline const WGPUSurfaceSourceMetalLayer* ToAPI(const SurfaceSourceMetalLayer* rhs) {
        return reinterpret_cast<const WGPUSurfaceSourceMetalLayer*>(rhs);
    }
    inline WGPUSurfaceSourceMetalLayer* ToAPI(SurfaceSourceMetalLayer* rhs) {
        return reinterpret_cast<WGPUSurfaceSourceMetalLayer*>(rhs);
    }
    inline const WGPUSurfaceSourceMetalLayer* ToAPI(const WGPUSurfaceSourceMetalLayer* rhs) {
        return rhs;
    }
    inline WGPUSurfaceSourceMetalLayer* ToAPI(WGPUSurfaceSourceMetalLayer* rhs) {
        return rhs;
    }
    inline const SurfaceSourceMetalLayer* FromAPI(const WGPUSurfaceSourceMetalLayer* rhs) {
        return reinterpret_cast<const SurfaceSourceMetalLayer*>(rhs);
    }
    inline SurfaceSourceMetalLayer* FromAPI(WGPUSurfaceSourceMetalLayer* rhs) {
        return reinterpret_cast<SurfaceSourceMetalLayer*>(rhs);
    }
    inline const SurfaceSourceMetalLayer* FromAPI(const SurfaceSourceMetalLayer* rhs) {
        return rhs;
    }
    inline SurfaceSourceMetalLayer* FromAPI(SurfaceSourceMetalLayer* rhs) {
        return rhs;
    }
    inline const wgpu::SurfaceSourceMetalLayer* ToCppAPI(const SurfaceSourceMetalLayer* rhs) {
        return reinterpret_cast<const wgpu::SurfaceSourceMetalLayer*>(rhs);
    }
    inline wgpu::SurfaceSourceMetalLayer* ToCppAPI(SurfaceSourceMetalLayer* rhs) {
        return reinterpret_cast<wgpu::SurfaceSourceMetalLayer*>(rhs);
    }
    inline const SurfaceSourceMetalLayer* FromCppAPI(const wgpu::SurfaceSourceMetalLayer* rhs) {
        return reinterpret_cast<const SurfaceSourceMetalLayer*>(rhs);
    }
    inline SurfaceSourceMetalLayer* FromCppAPI(wgpu::SurfaceSourceMetalLayer* rhs) {
        return reinterpret_cast<SurfaceSourceMetalLayer*>(rhs);
    }
inline const SurfaceSourceMetalLayer& FromAPI(const WGPUSurfaceSourceMetalLayer& rhs) {
        return *reinterpret_cast<const SurfaceSourceMetalLayer*>(&rhs);
    }
    inline SurfaceSourceMetalLayer& FromAPI(WGPUSurfaceSourceMetalLayer& rhs) {
        return *reinterpret_cast<SurfaceSourceMetalLayer*>(&rhs);
    }
    inline const SurfaceSourceMetalLayer& FromAPI(const SurfaceSourceMetalLayer& rhs) {
        return rhs;
    }
    inline SurfaceSourceMetalLayer& FromAPI(SurfaceSourceMetalLayer& rhs) {
        return rhs;
    }
inline const WGPUSurfaceSourceWaylandSurface* ToAPI(const SurfaceSourceWaylandSurface* rhs) {
        return reinterpret_cast<const WGPUSurfaceSourceWaylandSurface*>(rhs);
    }
    inline WGPUSurfaceSourceWaylandSurface* ToAPI(SurfaceSourceWaylandSurface* rhs) {
        return reinterpret_cast<WGPUSurfaceSourceWaylandSurface*>(rhs);
    }
    inline const WGPUSurfaceSourceWaylandSurface* ToAPI(const WGPUSurfaceSourceWaylandSurface* rhs) {
        return rhs;
    }
    inline WGPUSurfaceSourceWaylandSurface* ToAPI(WGPUSurfaceSourceWaylandSurface* rhs) {
        return rhs;
    }
    inline const SurfaceSourceWaylandSurface* FromAPI(const WGPUSurfaceSourceWaylandSurface* rhs) {
        return reinterpret_cast<const SurfaceSourceWaylandSurface*>(rhs);
    }
    inline SurfaceSourceWaylandSurface* FromAPI(WGPUSurfaceSourceWaylandSurface* rhs) {
        return reinterpret_cast<SurfaceSourceWaylandSurface*>(rhs);
    }
    inline const SurfaceSourceWaylandSurface* FromAPI(const SurfaceSourceWaylandSurface* rhs) {
        return rhs;
    }
    inline SurfaceSourceWaylandSurface* FromAPI(SurfaceSourceWaylandSurface* rhs) {
        return rhs;
    }
    inline const wgpu::SurfaceSourceWaylandSurface* ToCppAPI(const SurfaceSourceWaylandSurface* rhs) {
        return reinterpret_cast<const wgpu::SurfaceSourceWaylandSurface*>(rhs);
    }
    inline wgpu::SurfaceSourceWaylandSurface* ToCppAPI(SurfaceSourceWaylandSurface* rhs) {
        return reinterpret_cast<wgpu::SurfaceSourceWaylandSurface*>(rhs);
    }
    inline const SurfaceSourceWaylandSurface* FromCppAPI(const wgpu::SurfaceSourceWaylandSurface* rhs) {
        return reinterpret_cast<const SurfaceSourceWaylandSurface*>(rhs);
    }
    inline SurfaceSourceWaylandSurface* FromCppAPI(wgpu::SurfaceSourceWaylandSurface* rhs) {
        return reinterpret_cast<SurfaceSourceWaylandSurface*>(rhs);
    }
inline const SurfaceSourceWaylandSurface& FromAPI(const WGPUSurfaceSourceWaylandSurface& rhs) {
        return *reinterpret_cast<const SurfaceSourceWaylandSurface*>(&rhs);
    }
    inline SurfaceSourceWaylandSurface& FromAPI(WGPUSurfaceSourceWaylandSurface& rhs) {
        return *reinterpret_cast<SurfaceSourceWaylandSurface*>(&rhs);
    }
    inline const SurfaceSourceWaylandSurface& FromAPI(const SurfaceSourceWaylandSurface& rhs) {
        return rhs;
    }
    inline SurfaceSourceWaylandSurface& FromAPI(SurfaceSourceWaylandSurface& rhs) {
        return rhs;
    }
inline const WGPUSurfaceSourceWindowsHWND* ToAPI(const SurfaceSourceWindowsHWND* rhs) {
        return reinterpret_cast<const WGPUSurfaceSourceWindowsHWND*>(rhs);
    }
    inline WGPUSurfaceSourceWindowsHWND* ToAPI(SurfaceSourceWindowsHWND* rhs) {
        return reinterpret_cast<WGPUSurfaceSourceWindowsHWND*>(rhs);
    }
    inline const WGPUSurfaceSourceWindowsHWND* ToAPI(const WGPUSurfaceSourceWindowsHWND* rhs) {
        return rhs;
    }
    inline WGPUSurfaceSourceWindowsHWND* ToAPI(WGPUSurfaceSourceWindowsHWND* rhs) {
        return rhs;
    }
    inline const SurfaceSourceWindowsHWND* FromAPI(const WGPUSurfaceSourceWindowsHWND* rhs) {
        return reinterpret_cast<const SurfaceSourceWindowsHWND*>(rhs);
    }
    inline SurfaceSourceWindowsHWND* FromAPI(WGPUSurfaceSourceWindowsHWND* rhs) {
        return reinterpret_cast<SurfaceSourceWindowsHWND*>(rhs);
    }
    inline const SurfaceSourceWindowsHWND* FromAPI(const SurfaceSourceWindowsHWND* rhs) {
        return rhs;
    }
    inline SurfaceSourceWindowsHWND* FromAPI(SurfaceSourceWindowsHWND* rhs) {
        return rhs;
    }
    inline const wgpu::SurfaceSourceWindowsHWND* ToCppAPI(const SurfaceSourceWindowsHWND* rhs) {
        return reinterpret_cast<const wgpu::SurfaceSourceWindowsHWND*>(rhs);
    }
    inline wgpu::SurfaceSourceWindowsHWND* ToCppAPI(SurfaceSourceWindowsHWND* rhs) {
        return reinterpret_cast<wgpu::SurfaceSourceWindowsHWND*>(rhs);
    }
    inline const SurfaceSourceWindowsHWND* FromCppAPI(const wgpu::SurfaceSourceWindowsHWND* rhs) {
        return reinterpret_cast<const SurfaceSourceWindowsHWND*>(rhs);
    }
    inline SurfaceSourceWindowsHWND* FromCppAPI(wgpu::SurfaceSourceWindowsHWND* rhs) {
        return reinterpret_cast<SurfaceSourceWindowsHWND*>(rhs);
    }
inline const SurfaceSourceWindowsHWND& FromAPI(const WGPUSurfaceSourceWindowsHWND& rhs) {
        return *reinterpret_cast<const SurfaceSourceWindowsHWND*>(&rhs);
    }
    inline SurfaceSourceWindowsHWND& FromAPI(WGPUSurfaceSourceWindowsHWND& rhs) {
        return *reinterpret_cast<SurfaceSourceWindowsHWND*>(&rhs);
    }
    inline const SurfaceSourceWindowsHWND& FromAPI(const SurfaceSourceWindowsHWND& rhs) {
        return rhs;
    }
    inline SurfaceSourceWindowsHWND& FromAPI(SurfaceSourceWindowsHWND& rhs) {
        return rhs;
    }
inline const WGPUSurfaceSourceXCBWindow* ToAPI(const SurfaceSourceXCBWindow* rhs) {
        return reinterpret_cast<const WGPUSurfaceSourceXCBWindow*>(rhs);
    }
    inline WGPUSurfaceSourceXCBWindow* ToAPI(SurfaceSourceXCBWindow* rhs) {
        return reinterpret_cast<WGPUSurfaceSourceXCBWindow*>(rhs);
    }
    inline const WGPUSurfaceSourceXCBWindow* ToAPI(const WGPUSurfaceSourceXCBWindow* rhs) {
        return rhs;
    }
    inline WGPUSurfaceSourceXCBWindow* ToAPI(WGPUSurfaceSourceXCBWindow* rhs) {
        return rhs;
    }
    inline const SurfaceSourceXCBWindow* FromAPI(const WGPUSurfaceSourceXCBWindow* rhs) {
        return reinterpret_cast<const SurfaceSourceXCBWindow*>(rhs);
    }
    inline SurfaceSourceXCBWindow* FromAPI(WGPUSurfaceSourceXCBWindow* rhs) {
        return reinterpret_cast<SurfaceSourceXCBWindow*>(rhs);
    }
    inline const SurfaceSourceXCBWindow* FromAPI(const SurfaceSourceXCBWindow* rhs) {
        return rhs;
    }
    inline SurfaceSourceXCBWindow* FromAPI(SurfaceSourceXCBWindow* rhs) {
        return rhs;
    }
    inline const wgpu::SurfaceSourceXCBWindow* ToCppAPI(const SurfaceSourceXCBWindow* rhs) {
        return reinterpret_cast<const wgpu::SurfaceSourceXCBWindow*>(rhs);
    }
    inline wgpu::SurfaceSourceXCBWindow* ToCppAPI(SurfaceSourceXCBWindow* rhs) {
        return reinterpret_cast<wgpu::SurfaceSourceXCBWindow*>(rhs);
    }
    inline const SurfaceSourceXCBWindow* FromCppAPI(const wgpu::SurfaceSourceXCBWindow* rhs) {
        return reinterpret_cast<const SurfaceSourceXCBWindow*>(rhs);
    }
    inline SurfaceSourceXCBWindow* FromCppAPI(wgpu::SurfaceSourceXCBWindow* rhs) {
        return reinterpret_cast<SurfaceSourceXCBWindow*>(rhs);
    }
inline const SurfaceSourceXCBWindow& FromAPI(const WGPUSurfaceSourceXCBWindow& rhs) {
        return *reinterpret_cast<const SurfaceSourceXCBWindow*>(&rhs);
    }
    inline SurfaceSourceXCBWindow& FromAPI(WGPUSurfaceSourceXCBWindow& rhs) {
        return *reinterpret_cast<SurfaceSourceXCBWindow*>(&rhs);
    }
    inline const SurfaceSourceXCBWindow& FromAPI(const SurfaceSourceXCBWindow& rhs) {
        return rhs;
    }
    inline SurfaceSourceXCBWindow& FromAPI(SurfaceSourceXCBWindow& rhs) {
        return rhs;
    }
inline const WGPUSurfaceSourceXlibWindow* ToAPI(const SurfaceSourceXlibWindow* rhs) {
        return reinterpret_cast<const WGPUSurfaceSourceXlibWindow*>(rhs);
    }
    inline WGPUSurfaceSourceXlibWindow* ToAPI(SurfaceSourceXlibWindow* rhs) {
        return reinterpret_cast<WGPUSurfaceSourceXlibWindow*>(rhs);
    }
    inline const WGPUSurfaceSourceXlibWindow* ToAPI(const WGPUSurfaceSourceXlibWindow* rhs) {
        return rhs;
    }
    inline WGPUSurfaceSourceXlibWindow* ToAPI(WGPUSurfaceSourceXlibWindow* rhs) {
        return rhs;
    }
    inline const SurfaceSourceXlibWindow* FromAPI(const WGPUSurfaceSourceXlibWindow* rhs) {
        return reinterpret_cast<const SurfaceSourceXlibWindow*>(rhs);
    }
    inline SurfaceSourceXlibWindow* FromAPI(WGPUSurfaceSourceXlibWindow* rhs) {
        return reinterpret_cast<SurfaceSourceXlibWindow*>(rhs);
    }
    inline const SurfaceSourceXlibWindow* FromAPI(const SurfaceSourceXlibWindow* rhs) {
        return rhs;
    }
    inline SurfaceSourceXlibWindow* FromAPI(SurfaceSourceXlibWindow* rhs) {
        return rhs;
    }
    inline const wgpu::SurfaceSourceXlibWindow* ToCppAPI(const SurfaceSourceXlibWindow* rhs) {
        return reinterpret_cast<const wgpu::SurfaceSourceXlibWindow*>(rhs);
    }
    inline wgpu::SurfaceSourceXlibWindow* ToCppAPI(SurfaceSourceXlibWindow* rhs) {
        return reinterpret_cast<wgpu::SurfaceSourceXlibWindow*>(rhs);
    }
    inline const SurfaceSourceXlibWindow* FromCppAPI(const wgpu::SurfaceSourceXlibWindow* rhs) {
        return reinterpret_cast<const SurfaceSourceXlibWindow*>(rhs);
    }
    inline SurfaceSourceXlibWindow* FromCppAPI(wgpu::SurfaceSourceXlibWindow* rhs) {
        return reinterpret_cast<SurfaceSourceXlibWindow*>(rhs);
    }
inline const SurfaceSourceXlibWindow& FromAPI(const WGPUSurfaceSourceXlibWindow& rhs) {
        return *reinterpret_cast<const SurfaceSourceXlibWindow*>(&rhs);
    }
    inline SurfaceSourceXlibWindow& FromAPI(WGPUSurfaceSourceXlibWindow& rhs) {
        return *reinterpret_cast<SurfaceSourceXlibWindow*>(&rhs);
    }
    inline const SurfaceSourceXlibWindow& FromAPI(const SurfaceSourceXlibWindow& rhs) {
        return rhs;
    }
    inline SurfaceSourceXlibWindow& FromAPI(SurfaceSourceXlibWindow& rhs) {
        return rhs;
    }
inline const WGPUSurfaceTexture* ToAPI(const SurfaceTexture* rhs) {
        return reinterpret_cast<const WGPUSurfaceTexture*>(rhs);
    }
    inline WGPUSurfaceTexture* ToAPI(SurfaceTexture* rhs) {
        return reinterpret_cast<WGPUSurfaceTexture*>(rhs);
    }
    inline const WGPUSurfaceTexture* ToAPI(const WGPUSurfaceTexture* rhs) {
        return rhs;
    }
    inline WGPUSurfaceTexture* ToAPI(WGPUSurfaceTexture* rhs) {
        return rhs;
    }
    inline const SurfaceTexture* FromAPI(const WGPUSurfaceTexture* rhs) {
        return reinterpret_cast<const SurfaceTexture*>(rhs);
    }
    inline SurfaceTexture* FromAPI(WGPUSurfaceTexture* rhs) {
        return reinterpret_cast<SurfaceTexture*>(rhs);
    }
    inline const SurfaceTexture* FromAPI(const SurfaceTexture* rhs) {
        return rhs;
    }
    inline SurfaceTexture* FromAPI(SurfaceTexture* rhs) {
        return rhs;
    }
    inline const wgpu::SurfaceTexture* ToCppAPI(const SurfaceTexture* rhs) {
        return reinterpret_cast<const wgpu::SurfaceTexture*>(rhs);
    }
    inline wgpu::SurfaceTexture* ToCppAPI(SurfaceTexture* rhs) {
        return reinterpret_cast<wgpu::SurfaceTexture*>(rhs);
    }
    inline const SurfaceTexture* FromCppAPI(const wgpu::SurfaceTexture* rhs) {
        return reinterpret_cast<const SurfaceTexture*>(rhs);
    }
    inline SurfaceTexture* FromCppAPI(wgpu::SurfaceTexture* rhs) {
        return reinterpret_cast<SurfaceTexture*>(rhs);
    }
inline const SurfaceTexture& FromAPI(const WGPUSurfaceTexture& rhs) {
        return *reinterpret_cast<const SurfaceTexture*>(&rhs);
    }
    inline SurfaceTexture& FromAPI(WGPUSurfaceTexture& rhs) {
        return *reinterpret_cast<SurfaceTexture*>(&rhs);
    }
    inline const SurfaceTexture& FromAPI(const SurfaceTexture& rhs) {
        return rhs;
    }
    inline SurfaceTexture& FromAPI(SurfaceTexture& rhs) {
        return rhs;
    }
inline const WGPUTexelBufferBindingEntry* ToAPI(const TexelBufferBindingEntry* rhs) {
        return reinterpret_cast<const WGPUTexelBufferBindingEntry*>(rhs);
    }
    inline WGPUTexelBufferBindingEntry* ToAPI(TexelBufferBindingEntry* rhs) {
        return reinterpret_cast<WGPUTexelBufferBindingEntry*>(rhs);
    }
    inline const WGPUTexelBufferBindingEntry* ToAPI(const WGPUTexelBufferBindingEntry* rhs) {
        return rhs;
    }
    inline WGPUTexelBufferBindingEntry* ToAPI(WGPUTexelBufferBindingEntry* rhs) {
        return rhs;
    }
    inline const TexelBufferBindingEntry* FromAPI(const WGPUTexelBufferBindingEntry* rhs) {
        return reinterpret_cast<const TexelBufferBindingEntry*>(rhs);
    }
    inline TexelBufferBindingEntry* FromAPI(WGPUTexelBufferBindingEntry* rhs) {
        return reinterpret_cast<TexelBufferBindingEntry*>(rhs);
    }
    inline const TexelBufferBindingEntry* FromAPI(const TexelBufferBindingEntry* rhs) {
        return rhs;
    }
    inline TexelBufferBindingEntry* FromAPI(TexelBufferBindingEntry* rhs) {
        return rhs;
    }
    inline const wgpu::TexelBufferBindingEntry* ToCppAPI(const TexelBufferBindingEntry* rhs) {
        return reinterpret_cast<const wgpu::TexelBufferBindingEntry*>(rhs);
    }
    inline wgpu::TexelBufferBindingEntry* ToCppAPI(TexelBufferBindingEntry* rhs) {
        return reinterpret_cast<wgpu::TexelBufferBindingEntry*>(rhs);
    }
    inline const TexelBufferBindingEntry* FromCppAPI(const wgpu::TexelBufferBindingEntry* rhs) {
        return reinterpret_cast<const TexelBufferBindingEntry*>(rhs);
    }
    inline TexelBufferBindingEntry* FromCppAPI(wgpu::TexelBufferBindingEntry* rhs) {
        return reinterpret_cast<TexelBufferBindingEntry*>(rhs);
    }
inline const TexelBufferBindingEntry& FromAPI(const WGPUTexelBufferBindingEntry& rhs) {
        return *reinterpret_cast<const TexelBufferBindingEntry*>(&rhs);
    }
    inline TexelBufferBindingEntry& FromAPI(WGPUTexelBufferBindingEntry& rhs) {
        return *reinterpret_cast<TexelBufferBindingEntry*>(&rhs);
    }
    inline const TexelBufferBindingEntry& FromAPI(const TexelBufferBindingEntry& rhs) {
        return rhs;
    }
    inline TexelBufferBindingEntry& FromAPI(TexelBufferBindingEntry& rhs) {
        return rhs;
    }
inline const WGPUTexelBufferBindingLayout* ToAPI(const TexelBufferBindingLayout* rhs) {
        return reinterpret_cast<const WGPUTexelBufferBindingLayout*>(rhs);
    }
    inline WGPUTexelBufferBindingLayout* ToAPI(TexelBufferBindingLayout* rhs) {
        return reinterpret_cast<WGPUTexelBufferBindingLayout*>(rhs);
    }
    inline const WGPUTexelBufferBindingLayout* ToAPI(const WGPUTexelBufferBindingLayout* rhs) {
        return rhs;
    }
    inline WGPUTexelBufferBindingLayout* ToAPI(WGPUTexelBufferBindingLayout* rhs) {
        return rhs;
    }
    inline const TexelBufferBindingLayout* FromAPI(const WGPUTexelBufferBindingLayout* rhs) {
        return reinterpret_cast<const TexelBufferBindingLayout*>(rhs);
    }
    inline TexelBufferBindingLayout* FromAPI(WGPUTexelBufferBindingLayout* rhs) {
        return reinterpret_cast<TexelBufferBindingLayout*>(rhs);
    }
    inline const TexelBufferBindingLayout* FromAPI(const TexelBufferBindingLayout* rhs) {
        return rhs;
    }
    inline TexelBufferBindingLayout* FromAPI(TexelBufferBindingLayout* rhs) {
        return rhs;
    }
    inline const wgpu::TexelBufferBindingLayout* ToCppAPI(const TexelBufferBindingLayout* rhs) {
        return reinterpret_cast<const wgpu::TexelBufferBindingLayout*>(rhs);
    }
    inline wgpu::TexelBufferBindingLayout* ToCppAPI(TexelBufferBindingLayout* rhs) {
        return reinterpret_cast<wgpu::TexelBufferBindingLayout*>(rhs);
    }
    inline const TexelBufferBindingLayout* FromCppAPI(const wgpu::TexelBufferBindingLayout* rhs) {
        return reinterpret_cast<const TexelBufferBindingLayout*>(rhs);
    }
    inline TexelBufferBindingLayout* FromCppAPI(wgpu::TexelBufferBindingLayout* rhs) {
        return reinterpret_cast<TexelBufferBindingLayout*>(rhs);
    }
inline const TexelBufferBindingLayout& FromAPI(const WGPUTexelBufferBindingLayout& rhs) {
        return *reinterpret_cast<const TexelBufferBindingLayout*>(&rhs);
    }
    inline TexelBufferBindingLayout& FromAPI(WGPUTexelBufferBindingLayout& rhs) {
        return *reinterpret_cast<TexelBufferBindingLayout*>(&rhs);
    }
    inline const TexelBufferBindingLayout& FromAPI(const TexelBufferBindingLayout& rhs) {
        return rhs;
    }
    inline TexelBufferBindingLayout& FromAPI(TexelBufferBindingLayout& rhs) {
        return rhs;
    }
inline const WGPUTexelBufferViewDescriptor* ToAPI(const TexelBufferViewDescriptor* rhs) {
        return reinterpret_cast<const WGPUTexelBufferViewDescriptor*>(rhs);
    }
    inline WGPUTexelBufferViewDescriptor* ToAPI(TexelBufferViewDescriptor* rhs) {
        return reinterpret_cast<WGPUTexelBufferViewDescriptor*>(rhs);
    }
    inline const WGPUTexelBufferViewDescriptor* ToAPI(const WGPUTexelBufferViewDescriptor* rhs) {
        return rhs;
    }
    inline WGPUTexelBufferViewDescriptor* ToAPI(WGPUTexelBufferViewDescriptor* rhs) {
        return rhs;
    }
    inline const TexelBufferViewDescriptor* FromAPI(const WGPUTexelBufferViewDescriptor* rhs) {
        return reinterpret_cast<const TexelBufferViewDescriptor*>(rhs);
    }
    inline TexelBufferViewDescriptor* FromAPI(WGPUTexelBufferViewDescriptor* rhs) {
        return reinterpret_cast<TexelBufferViewDescriptor*>(rhs);
    }
    inline const TexelBufferViewDescriptor* FromAPI(const TexelBufferViewDescriptor* rhs) {
        return rhs;
    }
    inline TexelBufferViewDescriptor* FromAPI(TexelBufferViewDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::TexelBufferViewDescriptor* ToCppAPI(const TexelBufferViewDescriptor* rhs) {
        return reinterpret_cast<const wgpu::TexelBufferViewDescriptor*>(rhs);
    }
    inline wgpu::TexelBufferViewDescriptor* ToCppAPI(TexelBufferViewDescriptor* rhs) {
        return reinterpret_cast<wgpu::TexelBufferViewDescriptor*>(rhs);
    }
    inline const TexelBufferViewDescriptor* FromCppAPI(const wgpu::TexelBufferViewDescriptor* rhs) {
        return reinterpret_cast<const TexelBufferViewDescriptor*>(rhs);
    }
    inline TexelBufferViewDescriptor* FromCppAPI(wgpu::TexelBufferViewDescriptor* rhs) {
        return reinterpret_cast<TexelBufferViewDescriptor*>(rhs);
    }
inline const TexelBufferViewDescriptor& FromAPI(const WGPUTexelBufferViewDescriptor& rhs) {
        return *reinterpret_cast<const TexelBufferViewDescriptor*>(&rhs);
    }
    inline TexelBufferViewDescriptor& FromAPI(WGPUTexelBufferViewDescriptor& rhs) {
        return *reinterpret_cast<TexelBufferViewDescriptor*>(&rhs);
    }
    inline const TexelBufferViewDescriptor& FromAPI(const TexelBufferViewDescriptor& rhs) {
        return rhs;
    }
    inline TexelBufferViewDescriptor& FromAPI(TexelBufferViewDescriptor& rhs) {
        return rhs;
    }
inline const WGPUTexelCopyBufferLayout* ToAPI(const TexelCopyBufferLayout* rhs) {
        return reinterpret_cast<const WGPUTexelCopyBufferLayout*>(rhs);
    }
    inline WGPUTexelCopyBufferLayout* ToAPI(TexelCopyBufferLayout* rhs) {
        return reinterpret_cast<WGPUTexelCopyBufferLayout*>(rhs);
    }
    inline const WGPUTexelCopyBufferLayout* ToAPI(const WGPUTexelCopyBufferLayout* rhs) {
        return rhs;
    }
    inline WGPUTexelCopyBufferLayout* ToAPI(WGPUTexelCopyBufferLayout* rhs) {
        return rhs;
    }
    inline const TexelCopyBufferLayout* FromAPI(const WGPUTexelCopyBufferLayout* rhs) {
        return reinterpret_cast<const TexelCopyBufferLayout*>(rhs);
    }
    inline TexelCopyBufferLayout* FromAPI(WGPUTexelCopyBufferLayout* rhs) {
        return reinterpret_cast<TexelCopyBufferLayout*>(rhs);
    }
    inline const TexelCopyBufferLayout* FromAPI(const TexelCopyBufferLayout* rhs) {
        return rhs;
    }
    inline TexelCopyBufferLayout* FromAPI(TexelCopyBufferLayout* rhs) {
        return rhs;
    }
    inline const wgpu::TexelCopyBufferLayout* ToCppAPI(const TexelCopyBufferLayout* rhs) {
        return reinterpret_cast<const wgpu::TexelCopyBufferLayout*>(rhs);
    }
    inline wgpu::TexelCopyBufferLayout* ToCppAPI(TexelCopyBufferLayout* rhs) {
        return reinterpret_cast<wgpu::TexelCopyBufferLayout*>(rhs);
    }
    inline const TexelCopyBufferLayout* FromCppAPI(const wgpu::TexelCopyBufferLayout* rhs) {
        return reinterpret_cast<const TexelCopyBufferLayout*>(rhs);
    }
    inline TexelCopyBufferLayout* FromCppAPI(wgpu::TexelCopyBufferLayout* rhs) {
        return reinterpret_cast<TexelCopyBufferLayout*>(rhs);
    }
inline const TexelCopyBufferLayout& FromAPI(const WGPUTexelCopyBufferLayout& rhs) {
        return *reinterpret_cast<const TexelCopyBufferLayout*>(&rhs);
    }
    inline TexelCopyBufferLayout& FromAPI(WGPUTexelCopyBufferLayout& rhs) {
        return *reinterpret_cast<TexelCopyBufferLayout*>(&rhs);
    }
    inline const TexelCopyBufferLayout& FromAPI(const TexelCopyBufferLayout& rhs) {
        return rhs;
    }
    inline TexelCopyBufferLayout& FromAPI(TexelCopyBufferLayout& rhs) {
        return rhs;
    }
inline const WGPUTextureBindingLayout* ToAPI(const TextureBindingLayout* rhs) {
        return reinterpret_cast<const WGPUTextureBindingLayout*>(rhs);
    }
    inline WGPUTextureBindingLayout* ToAPI(TextureBindingLayout* rhs) {
        return reinterpret_cast<WGPUTextureBindingLayout*>(rhs);
    }
    inline const WGPUTextureBindingLayout* ToAPI(const WGPUTextureBindingLayout* rhs) {
        return rhs;
    }
    inline WGPUTextureBindingLayout* ToAPI(WGPUTextureBindingLayout* rhs) {
        return rhs;
    }
    inline const TextureBindingLayout* FromAPI(const WGPUTextureBindingLayout* rhs) {
        return reinterpret_cast<const TextureBindingLayout*>(rhs);
    }
    inline TextureBindingLayout* FromAPI(WGPUTextureBindingLayout* rhs) {
        return reinterpret_cast<TextureBindingLayout*>(rhs);
    }
    inline const TextureBindingLayout* FromAPI(const TextureBindingLayout* rhs) {
        return rhs;
    }
    inline TextureBindingLayout* FromAPI(TextureBindingLayout* rhs) {
        return rhs;
    }
    inline const wgpu::TextureBindingLayout* ToCppAPI(const TextureBindingLayout* rhs) {
        return reinterpret_cast<const wgpu::TextureBindingLayout*>(rhs);
    }
    inline wgpu::TextureBindingLayout* ToCppAPI(TextureBindingLayout* rhs) {
        return reinterpret_cast<wgpu::TextureBindingLayout*>(rhs);
    }
    inline const TextureBindingLayout* FromCppAPI(const wgpu::TextureBindingLayout* rhs) {
        return reinterpret_cast<const TextureBindingLayout*>(rhs);
    }
    inline TextureBindingLayout* FromCppAPI(wgpu::TextureBindingLayout* rhs) {
        return reinterpret_cast<TextureBindingLayout*>(rhs);
    }
inline const TextureBindingLayout& FromAPI(const WGPUTextureBindingLayout& rhs) {
        return *reinterpret_cast<const TextureBindingLayout*>(&rhs);
    }
    inline TextureBindingLayout& FromAPI(WGPUTextureBindingLayout& rhs) {
        return *reinterpret_cast<TextureBindingLayout*>(&rhs);
    }
    inline const TextureBindingLayout& FromAPI(const TextureBindingLayout& rhs) {
        return rhs;
    }
    inline TextureBindingLayout& FromAPI(TextureBindingLayout& rhs) {
        return rhs;
    }
inline const WGPUTextureBindingViewDimension* ToAPI(const TextureBindingViewDimension* rhs) {
        return reinterpret_cast<const WGPUTextureBindingViewDimension*>(rhs);
    }
    inline WGPUTextureBindingViewDimension* ToAPI(TextureBindingViewDimension* rhs) {
        return reinterpret_cast<WGPUTextureBindingViewDimension*>(rhs);
    }
    inline const WGPUTextureBindingViewDimension* ToAPI(const WGPUTextureBindingViewDimension* rhs) {
        return rhs;
    }
    inline WGPUTextureBindingViewDimension* ToAPI(WGPUTextureBindingViewDimension* rhs) {
        return rhs;
    }
    inline const TextureBindingViewDimension* FromAPI(const WGPUTextureBindingViewDimension* rhs) {
        return reinterpret_cast<const TextureBindingViewDimension*>(rhs);
    }
    inline TextureBindingViewDimension* FromAPI(WGPUTextureBindingViewDimension* rhs) {
        return reinterpret_cast<TextureBindingViewDimension*>(rhs);
    }
    inline const TextureBindingViewDimension* FromAPI(const TextureBindingViewDimension* rhs) {
        return rhs;
    }
    inline TextureBindingViewDimension* FromAPI(TextureBindingViewDimension* rhs) {
        return rhs;
    }
    inline const wgpu::TextureBindingViewDimension* ToCppAPI(const TextureBindingViewDimension* rhs) {
        return reinterpret_cast<const wgpu::TextureBindingViewDimension*>(rhs);
    }
    inline wgpu::TextureBindingViewDimension* ToCppAPI(TextureBindingViewDimension* rhs) {
        return reinterpret_cast<wgpu::TextureBindingViewDimension*>(rhs);
    }
    inline const TextureBindingViewDimension* FromCppAPI(const wgpu::TextureBindingViewDimension* rhs) {
        return reinterpret_cast<const TextureBindingViewDimension*>(rhs);
    }
    inline TextureBindingViewDimension* FromCppAPI(wgpu::TextureBindingViewDimension* rhs) {
        return reinterpret_cast<TextureBindingViewDimension*>(rhs);
    }
inline const TextureBindingViewDimension& FromAPI(const WGPUTextureBindingViewDimension& rhs) {
        return *reinterpret_cast<const TextureBindingViewDimension*>(&rhs);
    }
    inline TextureBindingViewDimension& FromAPI(WGPUTextureBindingViewDimension& rhs) {
        return *reinterpret_cast<TextureBindingViewDimension*>(&rhs);
    }
    inline const TextureBindingViewDimension& FromAPI(const TextureBindingViewDimension& rhs) {
        return rhs;
    }
    inline TextureBindingViewDimension& FromAPI(TextureBindingViewDimension& rhs) {
        return rhs;
    }
inline const WGPUTextureComponentSwizzle* ToAPI(const TextureComponentSwizzle* rhs) {
        return reinterpret_cast<const WGPUTextureComponentSwizzle*>(rhs);
    }
    inline WGPUTextureComponentSwizzle* ToAPI(TextureComponentSwizzle* rhs) {
        return reinterpret_cast<WGPUTextureComponentSwizzle*>(rhs);
    }
    inline const WGPUTextureComponentSwizzle* ToAPI(const WGPUTextureComponentSwizzle* rhs) {
        return rhs;
    }
    inline WGPUTextureComponentSwizzle* ToAPI(WGPUTextureComponentSwizzle* rhs) {
        return rhs;
    }
    inline const TextureComponentSwizzle* FromAPI(const WGPUTextureComponentSwizzle* rhs) {
        return reinterpret_cast<const TextureComponentSwizzle*>(rhs);
    }
    inline TextureComponentSwizzle* FromAPI(WGPUTextureComponentSwizzle* rhs) {
        return reinterpret_cast<TextureComponentSwizzle*>(rhs);
    }
    inline const TextureComponentSwizzle* FromAPI(const TextureComponentSwizzle* rhs) {
        return rhs;
    }
    inline TextureComponentSwizzle* FromAPI(TextureComponentSwizzle* rhs) {
        return rhs;
    }
    inline const wgpu::TextureComponentSwizzle* ToCppAPI(const TextureComponentSwizzle* rhs) {
        return reinterpret_cast<const wgpu::TextureComponentSwizzle*>(rhs);
    }
    inline wgpu::TextureComponentSwizzle* ToCppAPI(TextureComponentSwizzle* rhs) {
        return reinterpret_cast<wgpu::TextureComponentSwizzle*>(rhs);
    }
    inline const TextureComponentSwizzle* FromCppAPI(const wgpu::TextureComponentSwizzle* rhs) {
        return reinterpret_cast<const TextureComponentSwizzle*>(rhs);
    }
    inline TextureComponentSwizzle* FromCppAPI(wgpu::TextureComponentSwizzle* rhs) {
        return reinterpret_cast<TextureComponentSwizzle*>(rhs);
    }
inline const TextureComponentSwizzle& FromAPI(const WGPUTextureComponentSwizzle& rhs) {
        return *reinterpret_cast<const TextureComponentSwizzle*>(&rhs);
    }
    inline TextureComponentSwizzle& FromAPI(WGPUTextureComponentSwizzle& rhs) {
        return *reinterpret_cast<TextureComponentSwizzle*>(&rhs);
    }
    inline const TextureComponentSwizzle& FromAPI(const TextureComponentSwizzle& rhs) {
        return rhs;
    }
    inline TextureComponentSwizzle& FromAPI(TextureComponentSwizzle& rhs) {
        return rhs;
    }
inline const WGPUVertexAttribute* ToAPI(const VertexAttribute* rhs) {
        return reinterpret_cast<const WGPUVertexAttribute*>(rhs);
    }
    inline WGPUVertexAttribute* ToAPI(VertexAttribute* rhs) {
        return reinterpret_cast<WGPUVertexAttribute*>(rhs);
    }
    inline const WGPUVertexAttribute* ToAPI(const WGPUVertexAttribute* rhs) {
        return rhs;
    }
    inline WGPUVertexAttribute* ToAPI(WGPUVertexAttribute* rhs) {
        return rhs;
    }
    inline const VertexAttribute* FromAPI(const WGPUVertexAttribute* rhs) {
        return reinterpret_cast<const VertexAttribute*>(rhs);
    }
    inline VertexAttribute* FromAPI(WGPUVertexAttribute* rhs) {
        return reinterpret_cast<VertexAttribute*>(rhs);
    }
    inline const VertexAttribute* FromAPI(const VertexAttribute* rhs) {
        return rhs;
    }
    inline VertexAttribute* FromAPI(VertexAttribute* rhs) {
        return rhs;
    }
    inline const wgpu::VertexAttribute* ToCppAPI(const VertexAttribute* rhs) {
        return reinterpret_cast<const wgpu::VertexAttribute*>(rhs);
    }
    inline wgpu::VertexAttribute* ToCppAPI(VertexAttribute* rhs) {
        return reinterpret_cast<wgpu::VertexAttribute*>(rhs);
    }
    inline const VertexAttribute* FromCppAPI(const wgpu::VertexAttribute* rhs) {
        return reinterpret_cast<const VertexAttribute*>(rhs);
    }
    inline VertexAttribute* FromCppAPI(wgpu::VertexAttribute* rhs) {
        return reinterpret_cast<VertexAttribute*>(rhs);
    }
inline const VertexAttribute& FromAPI(const WGPUVertexAttribute& rhs) {
        return *reinterpret_cast<const VertexAttribute*>(&rhs);
    }
    inline VertexAttribute& FromAPI(WGPUVertexAttribute& rhs) {
        return *reinterpret_cast<VertexAttribute*>(&rhs);
    }
    inline const VertexAttribute& FromAPI(const VertexAttribute& rhs) {
        return rhs;
    }
    inline VertexAttribute& FromAPI(VertexAttribute& rhs) {
        return rhs;
    }
inline const WGPUYCbCrVkDescriptor* ToAPI(const YCbCrVkDescriptor* rhs) {
        return reinterpret_cast<const WGPUYCbCrVkDescriptor*>(rhs);
    }
    inline WGPUYCbCrVkDescriptor* ToAPI(YCbCrVkDescriptor* rhs) {
        return reinterpret_cast<WGPUYCbCrVkDescriptor*>(rhs);
    }
    inline const WGPUYCbCrVkDescriptor* ToAPI(const WGPUYCbCrVkDescriptor* rhs) {
        return rhs;
    }
    inline WGPUYCbCrVkDescriptor* ToAPI(WGPUYCbCrVkDescriptor* rhs) {
        return rhs;
    }
    inline const YCbCrVkDescriptor* FromAPI(const WGPUYCbCrVkDescriptor* rhs) {
        return reinterpret_cast<const YCbCrVkDescriptor*>(rhs);
    }
    inline YCbCrVkDescriptor* FromAPI(WGPUYCbCrVkDescriptor* rhs) {
        return reinterpret_cast<YCbCrVkDescriptor*>(rhs);
    }
    inline const YCbCrVkDescriptor* FromAPI(const YCbCrVkDescriptor* rhs) {
        return rhs;
    }
    inline YCbCrVkDescriptor* FromAPI(YCbCrVkDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::YCbCrVkDescriptor* ToCppAPI(const YCbCrVkDescriptor* rhs) {
        return reinterpret_cast<const wgpu::YCbCrVkDescriptor*>(rhs);
    }
    inline wgpu::YCbCrVkDescriptor* ToCppAPI(YCbCrVkDescriptor* rhs) {
        return reinterpret_cast<wgpu::YCbCrVkDescriptor*>(rhs);
    }
    inline const YCbCrVkDescriptor* FromCppAPI(const wgpu::YCbCrVkDescriptor* rhs) {
        return reinterpret_cast<const YCbCrVkDescriptor*>(rhs);
    }
    inline YCbCrVkDescriptor* FromCppAPI(wgpu::YCbCrVkDescriptor* rhs) {
        return reinterpret_cast<YCbCrVkDescriptor*>(rhs);
    }
inline const YCbCrVkDescriptor& FromAPI(const WGPUYCbCrVkDescriptor& rhs) {
        return *reinterpret_cast<const YCbCrVkDescriptor*>(&rhs);
    }
    inline YCbCrVkDescriptor& FromAPI(WGPUYCbCrVkDescriptor& rhs) {
        return *reinterpret_cast<YCbCrVkDescriptor*>(&rhs);
    }
    inline const YCbCrVkDescriptor& FromAPI(const YCbCrVkDescriptor& rhs) {
        return rhs;
    }
    inline YCbCrVkDescriptor& FromAPI(YCbCrVkDescriptor& rhs) {
        return rhs;
    }
inline const WGPUAdapterPropertiesMemoryHeaps* ToAPI(const AdapterPropertiesMemoryHeaps* rhs) {
        return reinterpret_cast<const WGPUAdapterPropertiesMemoryHeaps*>(rhs);
    }
    inline WGPUAdapterPropertiesMemoryHeaps* ToAPI(AdapterPropertiesMemoryHeaps* rhs) {
        return reinterpret_cast<WGPUAdapterPropertiesMemoryHeaps*>(rhs);
    }
    inline const WGPUAdapterPropertiesMemoryHeaps* ToAPI(const WGPUAdapterPropertiesMemoryHeaps* rhs) {
        return rhs;
    }
    inline WGPUAdapterPropertiesMemoryHeaps* ToAPI(WGPUAdapterPropertiesMemoryHeaps* rhs) {
        return rhs;
    }
    inline const AdapterPropertiesMemoryHeaps* FromAPI(const WGPUAdapterPropertiesMemoryHeaps* rhs) {
        return reinterpret_cast<const AdapterPropertiesMemoryHeaps*>(rhs);
    }
    inline AdapterPropertiesMemoryHeaps* FromAPI(WGPUAdapterPropertiesMemoryHeaps* rhs) {
        return reinterpret_cast<AdapterPropertiesMemoryHeaps*>(rhs);
    }
    inline const AdapterPropertiesMemoryHeaps* FromAPI(const AdapterPropertiesMemoryHeaps* rhs) {
        return rhs;
    }
    inline AdapterPropertiesMemoryHeaps* FromAPI(AdapterPropertiesMemoryHeaps* rhs) {
        return rhs;
    }
    inline const wgpu::AdapterPropertiesMemoryHeaps* ToCppAPI(const AdapterPropertiesMemoryHeaps* rhs) {
        return reinterpret_cast<const wgpu::AdapterPropertiesMemoryHeaps*>(rhs);
    }
    inline wgpu::AdapterPropertiesMemoryHeaps* ToCppAPI(AdapterPropertiesMemoryHeaps* rhs) {
        return reinterpret_cast<wgpu::AdapterPropertiesMemoryHeaps*>(rhs);
    }
    inline const AdapterPropertiesMemoryHeaps* FromCppAPI(const wgpu::AdapterPropertiesMemoryHeaps* rhs) {
        return reinterpret_cast<const AdapterPropertiesMemoryHeaps*>(rhs);
    }
    inline AdapterPropertiesMemoryHeaps* FromCppAPI(wgpu::AdapterPropertiesMemoryHeaps* rhs) {
        return reinterpret_cast<AdapterPropertiesMemoryHeaps*>(rhs);
    }
inline const AdapterPropertiesMemoryHeaps& FromAPI(const WGPUAdapterPropertiesMemoryHeaps& rhs) {
        return *reinterpret_cast<const AdapterPropertiesMemoryHeaps*>(&rhs);
    }
    inline AdapterPropertiesMemoryHeaps& FromAPI(WGPUAdapterPropertiesMemoryHeaps& rhs) {
        return *reinterpret_cast<AdapterPropertiesMemoryHeaps*>(&rhs);
    }
    inline const AdapterPropertiesMemoryHeaps& FromAPI(const AdapterPropertiesMemoryHeaps& rhs) {
        return rhs;
    }
    inline AdapterPropertiesMemoryHeaps& FromAPI(AdapterPropertiesMemoryHeaps& rhs) {
        return rhs;
    }
inline const WGPUAdapterPropertiesSubgroupMatrixConfigs* ToAPI(const AdapterPropertiesSubgroupMatrixConfigs* rhs) {
        return reinterpret_cast<const WGPUAdapterPropertiesSubgroupMatrixConfigs*>(rhs);
    }
    inline WGPUAdapterPropertiesSubgroupMatrixConfigs* ToAPI(AdapterPropertiesSubgroupMatrixConfigs* rhs) {
        return reinterpret_cast<WGPUAdapterPropertiesSubgroupMatrixConfigs*>(rhs);
    }
    inline const WGPUAdapterPropertiesSubgroupMatrixConfigs* ToAPI(const WGPUAdapterPropertiesSubgroupMatrixConfigs* rhs) {
        return rhs;
    }
    inline WGPUAdapterPropertiesSubgroupMatrixConfigs* ToAPI(WGPUAdapterPropertiesSubgroupMatrixConfigs* rhs) {
        return rhs;
    }
    inline const AdapterPropertiesSubgroupMatrixConfigs* FromAPI(const WGPUAdapterPropertiesSubgroupMatrixConfigs* rhs) {
        return reinterpret_cast<const AdapterPropertiesSubgroupMatrixConfigs*>(rhs);
    }
    inline AdapterPropertiesSubgroupMatrixConfigs* FromAPI(WGPUAdapterPropertiesSubgroupMatrixConfigs* rhs) {
        return reinterpret_cast<AdapterPropertiesSubgroupMatrixConfigs*>(rhs);
    }
    inline const AdapterPropertiesSubgroupMatrixConfigs* FromAPI(const AdapterPropertiesSubgroupMatrixConfigs* rhs) {
        return rhs;
    }
    inline AdapterPropertiesSubgroupMatrixConfigs* FromAPI(AdapterPropertiesSubgroupMatrixConfigs* rhs) {
        return rhs;
    }
    inline const wgpu::AdapterPropertiesSubgroupMatrixConfigs* ToCppAPI(const AdapterPropertiesSubgroupMatrixConfigs* rhs) {
        return reinterpret_cast<const wgpu::AdapterPropertiesSubgroupMatrixConfigs*>(rhs);
    }
    inline wgpu::AdapterPropertiesSubgroupMatrixConfigs* ToCppAPI(AdapterPropertiesSubgroupMatrixConfigs* rhs) {
        return reinterpret_cast<wgpu::AdapterPropertiesSubgroupMatrixConfigs*>(rhs);
    }
    inline const AdapterPropertiesSubgroupMatrixConfigs* FromCppAPI(const wgpu::AdapterPropertiesSubgroupMatrixConfigs* rhs) {
        return reinterpret_cast<const AdapterPropertiesSubgroupMatrixConfigs*>(rhs);
    }
    inline AdapterPropertiesSubgroupMatrixConfigs* FromCppAPI(wgpu::AdapterPropertiesSubgroupMatrixConfigs* rhs) {
        return reinterpret_cast<AdapterPropertiesSubgroupMatrixConfigs*>(rhs);
    }
inline const AdapterPropertiesSubgroupMatrixConfigs& FromAPI(const WGPUAdapterPropertiesSubgroupMatrixConfigs& rhs) {
        return *reinterpret_cast<const AdapterPropertiesSubgroupMatrixConfigs*>(&rhs);
    }
    inline AdapterPropertiesSubgroupMatrixConfigs& FromAPI(WGPUAdapterPropertiesSubgroupMatrixConfigs& rhs) {
        return *reinterpret_cast<AdapterPropertiesSubgroupMatrixConfigs*>(&rhs);
    }
    inline const AdapterPropertiesSubgroupMatrixConfigs& FromAPI(const AdapterPropertiesSubgroupMatrixConfigs& rhs) {
        return rhs;
    }
    inline AdapterPropertiesSubgroupMatrixConfigs& FromAPI(AdapterPropertiesSubgroupMatrixConfigs& rhs) {
        return rhs;
    }
inline const WGPUAHardwareBufferProperties* ToAPI(const AHardwareBufferProperties* rhs) {
        return reinterpret_cast<const WGPUAHardwareBufferProperties*>(rhs);
    }
    inline WGPUAHardwareBufferProperties* ToAPI(AHardwareBufferProperties* rhs) {
        return reinterpret_cast<WGPUAHardwareBufferProperties*>(rhs);
    }
    inline const WGPUAHardwareBufferProperties* ToAPI(const WGPUAHardwareBufferProperties* rhs) {
        return rhs;
    }
    inline WGPUAHardwareBufferProperties* ToAPI(WGPUAHardwareBufferProperties* rhs) {
        return rhs;
    }
    inline const AHardwareBufferProperties* FromAPI(const WGPUAHardwareBufferProperties* rhs) {
        return reinterpret_cast<const AHardwareBufferProperties*>(rhs);
    }
    inline AHardwareBufferProperties* FromAPI(WGPUAHardwareBufferProperties* rhs) {
        return reinterpret_cast<AHardwareBufferProperties*>(rhs);
    }
    inline const AHardwareBufferProperties* FromAPI(const AHardwareBufferProperties* rhs) {
        return rhs;
    }
    inline AHardwareBufferProperties* FromAPI(AHardwareBufferProperties* rhs) {
        return rhs;
    }
    inline const wgpu::AHardwareBufferProperties* ToCppAPI(const AHardwareBufferProperties* rhs) {
        return reinterpret_cast<const wgpu::AHardwareBufferProperties*>(rhs);
    }
    inline wgpu::AHardwareBufferProperties* ToCppAPI(AHardwareBufferProperties* rhs) {
        return reinterpret_cast<wgpu::AHardwareBufferProperties*>(rhs);
    }
    inline const AHardwareBufferProperties* FromCppAPI(const wgpu::AHardwareBufferProperties* rhs) {
        return reinterpret_cast<const AHardwareBufferProperties*>(rhs);
    }
    inline AHardwareBufferProperties* FromCppAPI(wgpu::AHardwareBufferProperties* rhs) {
        return reinterpret_cast<AHardwareBufferProperties*>(rhs);
    }
inline const AHardwareBufferProperties& FromAPI(const WGPUAHardwareBufferProperties& rhs) {
        return *reinterpret_cast<const AHardwareBufferProperties*>(&rhs);
    }
    inline AHardwareBufferProperties& FromAPI(WGPUAHardwareBufferProperties& rhs) {
        return *reinterpret_cast<AHardwareBufferProperties*>(&rhs);
    }
    inline const AHardwareBufferProperties& FromAPI(const AHardwareBufferProperties& rhs) {
        return rhs;
    }
    inline AHardwareBufferProperties& FromAPI(AHardwareBufferProperties& rhs) {
        return rhs;
    }
inline const WGPUBindGroupEntry* ToAPI(const BindGroupEntry* rhs) {
        return reinterpret_cast<const WGPUBindGroupEntry*>(rhs);
    }
    inline WGPUBindGroupEntry* ToAPI(BindGroupEntry* rhs) {
        return reinterpret_cast<WGPUBindGroupEntry*>(rhs);
    }
    inline const WGPUBindGroupEntry* ToAPI(const WGPUBindGroupEntry* rhs) {
        return rhs;
    }
    inline WGPUBindGroupEntry* ToAPI(WGPUBindGroupEntry* rhs) {
        return rhs;
    }
    inline const BindGroupEntry* FromAPI(const WGPUBindGroupEntry* rhs) {
        return reinterpret_cast<const BindGroupEntry*>(rhs);
    }
    inline BindGroupEntry* FromAPI(WGPUBindGroupEntry* rhs) {
        return reinterpret_cast<BindGroupEntry*>(rhs);
    }
    inline const BindGroupEntry* FromAPI(const BindGroupEntry* rhs) {
        return rhs;
    }
    inline BindGroupEntry* FromAPI(BindGroupEntry* rhs) {
        return rhs;
    }
    inline const wgpu::BindGroupEntry* ToCppAPI(const BindGroupEntry* rhs) {
        return reinterpret_cast<const wgpu::BindGroupEntry*>(rhs);
    }
    inline wgpu::BindGroupEntry* ToCppAPI(BindGroupEntry* rhs) {
        return reinterpret_cast<wgpu::BindGroupEntry*>(rhs);
    }
    inline const BindGroupEntry* FromCppAPI(const wgpu::BindGroupEntry* rhs) {
        return reinterpret_cast<const BindGroupEntry*>(rhs);
    }
    inline BindGroupEntry* FromCppAPI(wgpu::BindGroupEntry* rhs) {
        return reinterpret_cast<BindGroupEntry*>(rhs);
    }
inline const BindGroupEntry& FromAPI(const WGPUBindGroupEntry& rhs) {
        return *reinterpret_cast<const BindGroupEntry*>(&rhs);
    }
    inline BindGroupEntry& FromAPI(WGPUBindGroupEntry& rhs) {
        return *reinterpret_cast<BindGroupEntry*>(&rhs);
    }
    inline const BindGroupEntry& FromAPI(const BindGroupEntry& rhs) {
        return rhs;
    }
    inline BindGroupEntry& FromAPI(BindGroupEntry& rhs) {
        return rhs;
    }
inline const WGPUBindGroupLayoutEntry* ToAPI(const BindGroupLayoutEntry* rhs) {
        return reinterpret_cast<const WGPUBindGroupLayoutEntry*>(rhs);
    }
    inline WGPUBindGroupLayoutEntry* ToAPI(BindGroupLayoutEntry* rhs) {
        return reinterpret_cast<WGPUBindGroupLayoutEntry*>(rhs);
    }
    inline const WGPUBindGroupLayoutEntry* ToAPI(const WGPUBindGroupLayoutEntry* rhs) {
        return rhs;
    }
    inline WGPUBindGroupLayoutEntry* ToAPI(WGPUBindGroupLayoutEntry* rhs) {
        return rhs;
    }
    inline const BindGroupLayoutEntry* FromAPI(const WGPUBindGroupLayoutEntry* rhs) {
        return reinterpret_cast<const BindGroupLayoutEntry*>(rhs);
    }
    inline BindGroupLayoutEntry* FromAPI(WGPUBindGroupLayoutEntry* rhs) {
        return reinterpret_cast<BindGroupLayoutEntry*>(rhs);
    }
    inline const BindGroupLayoutEntry* FromAPI(const BindGroupLayoutEntry* rhs) {
        return rhs;
    }
    inline BindGroupLayoutEntry* FromAPI(BindGroupLayoutEntry* rhs) {
        return rhs;
    }
    inline const wgpu::BindGroupLayoutEntry* ToCppAPI(const BindGroupLayoutEntry* rhs) {
        return reinterpret_cast<const wgpu::BindGroupLayoutEntry*>(rhs);
    }
    inline wgpu::BindGroupLayoutEntry* ToCppAPI(BindGroupLayoutEntry* rhs) {
        return reinterpret_cast<wgpu::BindGroupLayoutEntry*>(rhs);
    }
    inline const BindGroupLayoutEntry* FromCppAPI(const wgpu::BindGroupLayoutEntry* rhs) {
        return reinterpret_cast<const BindGroupLayoutEntry*>(rhs);
    }
    inline BindGroupLayoutEntry* FromCppAPI(wgpu::BindGroupLayoutEntry* rhs) {
        return reinterpret_cast<BindGroupLayoutEntry*>(rhs);
    }
inline const BindGroupLayoutEntry& FromAPI(const WGPUBindGroupLayoutEntry& rhs) {
        return *reinterpret_cast<const BindGroupLayoutEntry*>(&rhs);
    }
    inline BindGroupLayoutEntry& FromAPI(WGPUBindGroupLayoutEntry& rhs) {
        return *reinterpret_cast<BindGroupLayoutEntry*>(&rhs);
    }
    inline const BindGroupLayoutEntry& FromAPI(const BindGroupLayoutEntry& rhs) {
        return rhs;
    }
    inline BindGroupLayoutEntry& FromAPI(BindGroupLayoutEntry& rhs) {
        return rhs;
    }
inline const WGPUBlendState* ToAPI(const BlendState* rhs) {
        return reinterpret_cast<const WGPUBlendState*>(rhs);
    }
    inline WGPUBlendState* ToAPI(BlendState* rhs) {
        return reinterpret_cast<WGPUBlendState*>(rhs);
    }
    inline const WGPUBlendState* ToAPI(const WGPUBlendState* rhs) {
        return rhs;
    }
    inline WGPUBlendState* ToAPI(WGPUBlendState* rhs) {
        return rhs;
    }
    inline const BlendState* FromAPI(const WGPUBlendState* rhs) {
        return reinterpret_cast<const BlendState*>(rhs);
    }
    inline BlendState* FromAPI(WGPUBlendState* rhs) {
        return reinterpret_cast<BlendState*>(rhs);
    }
    inline const BlendState* FromAPI(const BlendState* rhs) {
        return rhs;
    }
    inline BlendState* FromAPI(BlendState* rhs) {
        return rhs;
    }
    inline const wgpu::BlendState* ToCppAPI(const BlendState* rhs) {
        return reinterpret_cast<const wgpu::BlendState*>(rhs);
    }
    inline wgpu::BlendState* ToCppAPI(BlendState* rhs) {
        return reinterpret_cast<wgpu::BlendState*>(rhs);
    }
    inline const BlendState* FromCppAPI(const wgpu::BlendState* rhs) {
        return reinterpret_cast<const BlendState*>(rhs);
    }
    inline BlendState* FromCppAPI(wgpu::BlendState* rhs) {
        return reinterpret_cast<BlendState*>(rhs);
    }
inline const BlendState& FromAPI(const WGPUBlendState& rhs) {
        return *reinterpret_cast<const BlendState*>(&rhs);
    }
    inline BlendState& FromAPI(WGPUBlendState& rhs) {
        return *reinterpret_cast<BlendState*>(&rhs);
    }
    inline const BlendState& FromAPI(const BlendState& rhs) {
        return rhs;
    }
    inline BlendState& FromAPI(BlendState& rhs) {
        return rhs;
    }
inline const WGPUBufferDescriptor* ToAPI(const BufferDescriptor* rhs) {
        return reinterpret_cast<const WGPUBufferDescriptor*>(rhs);
    }
    inline WGPUBufferDescriptor* ToAPI(BufferDescriptor* rhs) {
        return reinterpret_cast<WGPUBufferDescriptor*>(rhs);
    }
    inline const WGPUBufferDescriptor* ToAPI(const WGPUBufferDescriptor* rhs) {
        return rhs;
    }
    inline WGPUBufferDescriptor* ToAPI(WGPUBufferDescriptor* rhs) {
        return rhs;
    }
    inline const BufferDescriptor* FromAPI(const WGPUBufferDescriptor* rhs) {
        return reinterpret_cast<const BufferDescriptor*>(rhs);
    }
    inline BufferDescriptor* FromAPI(WGPUBufferDescriptor* rhs) {
        return reinterpret_cast<BufferDescriptor*>(rhs);
    }
    inline const BufferDescriptor* FromAPI(const BufferDescriptor* rhs) {
        return rhs;
    }
    inline BufferDescriptor* FromAPI(BufferDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::BufferDescriptor* ToCppAPI(const BufferDescriptor* rhs) {
        return reinterpret_cast<const wgpu::BufferDescriptor*>(rhs);
    }
    inline wgpu::BufferDescriptor* ToCppAPI(BufferDescriptor* rhs) {
        return reinterpret_cast<wgpu::BufferDescriptor*>(rhs);
    }
    inline const BufferDescriptor* FromCppAPI(const wgpu::BufferDescriptor* rhs) {
        return reinterpret_cast<const BufferDescriptor*>(rhs);
    }
    inline BufferDescriptor* FromCppAPI(wgpu::BufferDescriptor* rhs) {
        return reinterpret_cast<BufferDescriptor*>(rhs);
    }
inline const BufferDescriptor& FromAPI(const WGPUBufferDescriptor& rhs) {
        return *reinterpret_cast<const BufferDescriptor*>(&rhs);
    }
    inline BufferDescriptor& FromAPI(WGPUBufferDescriptor& rhs) {
        return *reinterpret_cast<BufferDescriptor*>(&rhs);
    }
    inline const BufferDescriptor& FromAPI(const BufferDescriptor& rhs) {
        return rhs;
    }
    inline BufferDescriptor& FromAPI(BufferDescriptor& rhs) {
        return rhs;
    }
inline const WGPUCommandEncoderDescriptor* ToAPI(const CommandEncoderDescriptor* rhs) {
        return reinterpret_cast<const WGPUCommandEncoderDescriptor*>(rhs);
    }
    inline WGPUCommandEncoderDescriptor* ToAPI(CommandEncoderDescriptor* rhs) {
        return reinterpret_cast<WGPUCommandEncoderDescriptor*>(rhs);
    }
    inline const WGPUCommandEncoderDescriptor* ToAPI(const WGPUCommandEncoderDescriptor* rhs) {
        return rhs;
    }
    inline WGPUCommandEncoderDescriptor* ToAPI(WGPUCommandEncoderDescriptor* rhs) {
        return rhs;
    }
    inline const CommandEncoderDescriptor* FromAPI(const WGPUCommandEncoderDescriptor* rhs) {
        return reinterpret_cast<const CommandEncoderDescriptor*>(rhs);
    }
    inline CommandEncoderDescriptor* FromAPI(WGPUCommandEncoderDescriptor* rhs) {
        return reinterpret_cast<CommandEncoderDescriptor*>(rhs);
    }
    inline const CommandEncoderDescriptor* FromAPI(const CommandEncoderDescriptor* rhs) {
        return rhs;
    }
    inline CommandEncoderDescriptor* FromAPI(CommandEncoderDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::CommandEncoderDescriptor* ToCppAPI(const CommandEncoderDescriptor* rhs) {
        return reinterpret_cast<const wgpu::CommandEncoderDescriptor*>(rhs);
    }
    inline wgpu::CommandEncoderDescriptor* ToCppAPI(CommandEncoderDescriptor* rhs) {
        return reinterpret_cast<wgpu::CommandEncoderDescriptor*>(rhs);
    }
    inline const CommandEncoderDescriptor* FromCppAPI(const wgpu::CommandEncoderDescriptor* rhs) {
        return reinterpret_cast<const CommandEncoderDescriptor*>(rhs);
    }
    inline CommandEncoderDescriptor* FromCppAPI(wgpu::CommandEncoderDescriptor* rhs) {
        return reinterpret_cast<CommandEncoderDescriptor*>(rhs);
    }
inline const CommandEncoderDescriptor& FromAPI(const WGPUCommandEncoderDescriptor& rhs) {
        return *reinterpret_cast<const CommandEncoderDescriptor*>(&rhs);
    }
    inline CommandEncoderDescriptor& FromAPI(WGPUCommandEncoderDescriptor& rhs) {
        return *reinterpret_cast<CommandEncoderDescriptor*>(&rhs);
    }
    inline const CommandEncoderDescriptor& FromAPI(const CommandEncoderDescriptor& rhs) {
        return rhs;
    }
    inline CommandEncoderDescriptor& FromAPI(CommandEncoderDescriptor& rhs) {
        return rhs;
    }
inline const WGPUCompilationMessage* ToAPI(const CompilationMessage* rhs) {
        return reinterpret_cast<const WGPUCompilationMessage*>(rhs);
    }
    inline WGPUCompilationMessage* ToAPI(CompilationMessage* rhs) {
        return reinterpret_cast<WGPUCompilationMessage*>(rhs);
    }
    inline const WGPUCompilationMessage* ToAPI(const WGPUCompilationMessage* rhs) {
        return rhs;
    }
    inline WGPUCompilationMessage* ToAPI(WGPUCompilationMessage* rhs) {
        return rhs;
    }
    inline const CompilationMessage* FromAPI(const WGPUCompilationMessage* rhs) {
        return reinterpret_cast<const CompilationMessage*>(rhs);
    }
    inline CompilationMessage* FromAPI(WGPUCompilationMessage* rhs) {
        return reinterpret_cast<CompilationMessage*>(rhs);
    }
    inline const CompilationMessage* FromAPI(const CompilationMessage* rhs) {
        return rhs;
    }
    inline CompilationMessage* FromAPI(CompilationMessage* rhs) {
        return rhs;
    }
    inline const wgpu::CompilationMessage* ToCppAPI(const CompilationMessage* rhs) {
        return reinterpret_cast<const wgpu::CompilationMessage*>(rhs);
    }
    inline wgpu::CompilationMessage* ToCppAPI(CompilationMessage* rhs) {
        return reinterpret_cast<wgpu::CompilationMessage*>(rhs);
    }
    inline const CompilationMessage* FromCppAPI(const wgpu::CompilationMessage* rhs) {
        return reinterpret_cast<const CompilationMessage*>(rhs);
    }
    inline CompilationMessage* FromCppAPI(wgpu::CompilationMessage* rhs) {
        return reinterpret_cast<CompilationMessage*>(rhs);
    }
inline const CompilationMessage& FromAPI(const WGPUCompilationMessage& rhs) {
        return *reinterpret_cast<const CompilationMessage*>(&rhs);
    }
    inline CompilationMessage& FromAPI(WGPUCompilationMessage& rhs) {
        return *reinterpret_cast<CompilationMessage*>(&rhs);
    }
    inline const CompilationMessage& FromAPI(const CompilationMessage& rhs) {
        return rhs;
    }
    inline CompilationMessage& FromAPI(CompilationMessage& rhs) {
        return rhs;
    }
inline const WGPUComputePassDescriptor* ToAPI(const ComputePassDescriptor* rhs) {
        return reinterpret_cast<const WGPUComputePassDescriptor*>(rhs);
    }
    inline WGPUComputePassDescriptor* ToAPI(ComputePassDescriptor* rhs) {
        return reinterpret_cast<WGPUComputePassDescriptor*>(rhs);
    }
    inline const WGPUComputePassDescriptor* ToAPI(const WGPUComputePassDescriptor* rhs) {
        return rhs;
    }
    inline WGPUComputePassDescriptor* ToAPI(WGPUComputePassDescriptor* rhs) {
        return rhs;
    }
    inline const ComputePassDescriptor* FromAPI(const WGPUComputePassDescriptor* rhs) {
        return reinterpret_cast<const ComputePassDescriptor*>(rhs);
    }
    inline ComputePassDescriptor* FromAPI(WGPUComputePassDescriptor* rhs) {
        return reinterpret_cast<ComputePassDescriptor*>(rhs);
    }
    inline const ComputePassDescriptor* FromAPI(const ComputePassDescriptor* rhs) {
        return rhs;
    }
    inline ComputePassDescriptor* FromAPI(ComputePassDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::ComputePassDescriptor* ToCppAPI(const ComputePassDescriptor* rhs) {
        return reinterpret_cast<const wgpu::ComputePassDescriptor*>(rhs);
    }
    inline wgpu::ComputePassDescriptor* ToCppAPI(ComputePassDescriptor* rhs) {
        return reinterpret_cast<wgpu::ComputePassDescriptor*>(rhs);
    }
    inline const ComputePassDescriptor* FromCppAPI(const wgpu::ComputePassDescriptor* rhs) {
        return reinterpret_cast<const ComputePassDescriptor*>(rhs);
    }
    inline ComputePassDescriptor* FromCppAPI(wgpu::ComputePassDescriptor* rhs) {
        return reinterpret_cast<ComputePassDescriptor*>(rhs);
    }
inline const ComputePassDescriptor& FromAPI(const WGPUComputePassDescriptor& rhs) {
        return *reinterpret_cast<const ComputePassDescriptor*>(&rhs);
    }
    inline ComputePassDescriptor& FromAPI(WGPUComputePassDescriptor& rhs) {
        return *reinterpret_cast<ComputePassDescriptor*>(&rhs);
    }
    inline const ComputePassDescriptor& FromAPI(const ComputePassDescriptor& rhs) {
        return rhs;
    }
    inline ComputePassDescriptor& FromAPI(ComputePassDescriptor& rhs) {
        return rhs;
    }
inline const WGPUComputeState* ToAPI(const ComputeState* rhs) {
        return reinterpret_cast<const WGPUComputeState*>(rhs);
    }
    inline WGPUComputeState* ToAPI(ComputeState* rhs) {
        return reinterpret_cast<WGPUComputeState*>(rhs);
    }
    inline const WGPUComputeState* ToAPI(const WGPUComputeState* rhs) {
        return rhs;
    }
    inline WGPUComputeState* ToAPI(WGPUComputeState* rhs) {
        return rhs;
    }
    inline const ComputeState* FromAPI(const WGPUComputeState* rhs) {
        return reinterpret_cast<const ComputeState*>(rhs);
    }
    inline ComputeState* FromAPI(WGPUComputeState* rhs) {
        return reinterpret_cast<ComputeState*>(rhs);
    }
    inline const ComputeState* FromAPI(const ComputeState* rhs) {
        return rhs;
    }
    inline ComputeState* FromAPI(ComputeState* rhs) {
        return rhs;
    }
    inline const wgpu::ComputeState* ToCppAPI(const ComputeState* rhs) {
        return reinterpret_cast<const wgpu::ComputeState*>(rhs);
    }
    inline wgpu::ComputeState* ToCppAPI(ComputeState* rhs) {
        return reinterpret_cast<wgpu::ComputeState*>(rhs);
    }
    inline const ComputeState* FromCppAPI(const wgpu::ComputeState* rhs) {
        return reinterpret_cast<const ComputeState*>(rhs);
    }
    inline ComputeState* FromCppAPI(wgpu::ComputeState* rhs) {
        return reinterpret_cast<ComputeState*>(rhs);
    }
inline const ComputeState& FromAPI(const WGPUComputeState& rhs) {
        return *reinterpret_cast<const ComputeState*>(&rhs);
    }
    inline ComputeState& FromAPI(WGPUComputeState& rhs) {
        return *reinterpret_cast<ComputeState*>(&rhs);
    }
    inline const ComputeState& FromAPI(const ComputeState& rhs) {
        return rhs;
    }
    inline ComputeState& FromAPI(ComputeState& rhs) {
        return rhs;
    }
inline const WGPUDawnDrmFormatCapabilities* ToAPI(const DawnDrmFormatCapabilities* rhs) {
        return reinterpret_cast<const WGPUDawnDrmFormatCapabilities*>(rhs);
    }
    inline WGPUDawnDrmFormatCapabilities* ToAPI(DawnDrmFormatCapabilities* rhs) {
        return reinterpret_cast<WGPUDawnDrmFormatCapabilities*>(rhs);
    }
    inline const WGPUDawnDrmFormatCapabilities* ToAPI(const WGPUDawnDrmFormatCapabilities* rhs) {
        return rhs;
    }
    inline WGPUDawnDrmFormatCapabilities* ToAPI(WGPUDawnDrmFormatCapabilities* rhs) {
        return rhs;
    }
    inline const DawnDrmFormatCapabilities* FromAPI(const WGPUDawnDrmFormatCapabilities* rhs) {
        return reinterpret_cast<const DawnDrmFormatCapabilities*>(rhs);
    }
    inline DawnDrmFormatCapabilities* FromAPI(WGPUDawnDrmFormatCapabilities* rhs) {
        return reinterpret_cast<DawnDrmFormatCapabilities*>(rhs);
    }
    inline const DawnDrmFormatCapabilities* FromAPI(const DawnDrmFormatCapabilities* rhs) {
        return rhs;
    }
    inline DawnDrmFormatCapabilities* FromAPI(DawnDrmFormatCapabilities* rhs) {
        return rhs;
    }
    inline const wgpu::DawnDrmFormatCapabilities* ToCppAPI(const DawnDrmFormatCapabilities* rhs) {
        return reinterpret_cast<const wgpu::DawnDrmFormatCapabilities*>(rhs);
    }
    inline wgpu::DawnDrmFormatCapabilities* ToCppAPI(DawnDrmFormatCapabilities* rhs) {
        return reinterpret_cast<wgpu::DawnDrmFormatCapabilities*>(rhs);
    }
    inline const DawnDrmFormatCapabilities* FromCppAPI(const wgpu::DawnDrmFormatCapabilities* rhs) {
        return reinterpret_cast<const DawnDrmFormatCapabilities*>(rhs);
    }
    inline DawnDrmFormatCapabilities* FromCppAPI(wgpu::DawnDrmFormatCapabilities* rhs) {
        return reinterpret_cast<DawnDrmFormatCapabilities*>(rhs);
    }
inline const DawnDrmFormatCapabilities& FromAPI(const WGPUDawnDrmFormatCapabilities& rhs) {
        return *reinterpret_cast<const DawnDrmFormatCapabilities*>(&rhs);
    }
    inline DawnDrmFormatCapabilities& FromAPI(WGPUDawnDrmFormatCapabilities& rhs) {
        return *reinterpret_cast<DawnDrmFormatCapabilities*>(&rhs);
    }
    inline const DawnDrmFormatCapabilities& FromAPI(const DawnDrmFormatCapabilities& rhs) {
        return rhs;
    }
    inline DawnDrmFormatCapabilities& FromAPI(DawnDrmFormatCapabilities& rhs) {
        return rhs;
    }
inline const WGPUDepthStencilState* ToAPI(const DepthStencilState* rhs) {
        return reinterpret_cast<const WGPUDepthStencilState*>(rhs);
    }
    inline WGPUDepthStencilState* ToAPI(DepthStencilState* rhs) {
        return reinterpret_cast<WGPUDepthStencilState*>(rhs);
    }
    inline const WGPUDepthStencilState* ToAPI(const WGPUDepthStencilState* rhs) {
        return rhs;
    }
    inline WGPUDepthStencilState* ToAPI(WGPUDepthStencilState* rhs) {
        return rhs;
    }
    inline const DepthStencilState* FromAPI(const WGPUDepthStencilState* rhs) {
        return reinterpret_cast<const DepthStencilState*>(rhs);
    }
    inline DepthStencilState* FromAPI(WGPUDepthStencilState* rhs) {
        return reinterpret_cast<DepthStencilState*>(rhs);
    }
    inline const DepthStencilState* FromAPI(const DepthStencilState* rhs) {
        return rhs;
    }
    inline DepthStencilState* FromAPI(DepthStencilState* rhs) {
        return rhs;
    }
    inline const wgpu::DepthStencilState* ToCppAPI(const DepthStencilState* rhs) {
        return reinterpret_cast<const wgpu::DepthStencilState*>(rhs);
    }
    inline wgpu::DepthStencilState* ToCppAPI(DepthStencilState* rhs) {
        return reinterpret_cast<wgpu::DepthStencilState*>(rhs);
    }
    inline const DepthStencilState* FromCppAPI(const wgpu::DepthStencilState* rhs) {
        return reinterpret_cast<const DepthStencilState*>(rhs);
    }
    inline DepthStencilState* FromCppAPI(wgpu::DepthStencilState* rhs) {
        return reinterpret_cast<DepthStencilState*>(rhs);
    }
inline const DepthStencilState& FromAPI(const WGPUDepthStencilState& rhs) {
        return *reinterpret_cast<const DepthStencilState*>(&rhs);
    }
    inline DepthStencilState& FromAPI(WGPUDepthStencilState& rhs) {
        return *reinterpret_cast<DepthStencilState*>(&rhs);
    }
    inline const DepthStencilState& FromAPI(const DepthStencilState& rhs) {
        return rhs;
    }
    inline DepthStencilState& FromAPI(DepthStencilState& rhs) {
        return rhs;
    }
inline const WGPUExternalTextureDescriptor* ToAPI(const ExternalTextureDescriptor* rhs) {
        return reinterpret_cast<const WGPUExternalTextureDescriptor*>(rhs);
    }
    inline WGPUExternalTextureDescriptor* ToAPI(ExternalTextureDescriptor* rhs) {
        return reinterpret_cast<WGPUExternalTextureDescriptor*>(rhs);
    }
    inline const WGPUExternalTextureDescriptor* ToAPI(const WGPUExternalTextureDescriptor* rhs) {
        return rhs;
    }
    inline WGPUExternalTextureDescriptor* ToAPI(WGPUExternalTextureDescriptor* rhs) {
        return rhs;
    }
    inline const ExternalTextureDescriptor* FromAPI(const WGPUExternalTextureDescriptor* rhs) {
        return reinterpret_cast<const ExternalTextureDescriptor*>(rhs);
    }
    inline ExternalTextureDescriptor* FromAPI(WGPUExternalTextureDescriptor* rhs) {
        return reinterpret_cast<ExternalTextureDescriptor*>(rhs);
    }
    inline const ExternalTextureDescriptor* FromAPI(const ExternalTextureDescriptor* rhs) {
        return rhs;
    }
    inline ExternalTextureDescriptor* FromAPI(ExternalTextureDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::ExternalTextureDescriptor* ToCppAPI(const ExternalTextureDescriptor* rhs) {
        return reinterpret_cast<const wgpu::ExternalTextureDescriptor*>(rhs);
    }
    inline wgpu::ExternalTextureDescriptor* ToCppAPI(ExternalTextureDescriptor* rhs) {
        return reinterpret_cast<wgpu::ExternalTextureDescriptor*>(rhs);
    }
    inline const ExternalTextureDescriptor* FromCppAPI(const wgpu::ExternalTextureDescriptor* rhs) {
        return reinterpret_cast<const ExternalTextureDescriptor*>(rhs);
    }
    inline ExternalTextureDescriptor* FromCppAPI(wgpu::ExternalTextureDescriptor* rhs) {
        return reinterpret_cast<ExternalTextureDescriptor*>(rhs);
    }
inline const ExternalTextureDescriptor& FromAPI(const WGPUExternalTextureDescriptor& rhs) {
        return *reinterpret_cast<const ExternalTextureDescriptor*>(&rhs);
    }
    inline ExternalTextureDescriptor& FromAPI(WGPUExternalTextureDescriptor& rhs) {
        return *reinterpret_cast<ExternalTextureDescriptor*>(&rhs);
    }
    inline const ExternalTextureDescriptor& FromAPI(const ExternalTextureDescriptor& rhs) {
        return rhs;
    }
    inline ExternalTextureDescriptor& FromAPI(ExternalTextureDescriptor& rhs) {
        return rhs;
    }
inline const WGPUFutureWaitInfo* ToAPI(const FutureWaitInfo* rhs) {
        return reinterpret_cast<const WGPUFutureWaitInfo*>(rhs);
    }
    inline WGPUFutureWaitInfo* ToAPI(FutureWaitInfo* rhs) {
        return reinterpret_cast<WGPUFutureWaitInfo*>(rhs);
    }
    inline const WGPUFutureWaitInfo* ToAPI(const WGPUFutureWaitInfo* rhs) {
        return rhs;
    }
    inline WGPUFutureWaitInfo* ToAPI(WGPUFutureWaitInfo* rhs) {
        return rhs;
    }
    inline const FutureWaitInfo* FromAPI(const WGPUFutureWaitInfo* rhs) {
        return reinterpret_cast<const FutureWaitInfo*>(rhs);
    }
    inline FutureWaitInfo* FromAPI(WGPUFutureWaitInfo* rhs) {
        return reinterpret_cast<FutureWaitInfo*>(rhs);
    }
    inline const FutureWaitInfo* FromAPI(const FutureWaitInfo* rhs) {
        return rhs;
    }
    inline FutureWaitInfo* FromAPI(FutureWaitInfo* rhs) {
        return rhs;
    }
    inline const wgpu::FutureWaitInfo* ToCppAPI(const FutureWaitInfo* rhs) {
        return reinterpret_cast<const wgpu::FutureWaitInfo*>(rhs);
    }
    inline wgpu::FutureWaitInfo* ToCppAPI(FutureWaitInfo* rhs) {
        return reinterpret_cast<wgpu::FutureWaitInfo*>(rhs);
    }
    inline const FutureWaitInfo* FromCppAPI(const wgpu::FutureWaitInfo* rhs) {
        return reinterpret_cast<const FutureWaitInfo*>(rhs);
    }
    inline FutureWaitInfo* FromCppAPI(wgpu::FutureWaitInfo* rhs) {
        return reinterpret_cast<FutureWaitInfo*>(rhs);
    }
inline const FutureWaitInfo& FromAPI(const WGPUFutureWaitInfo& rhs) {
        return *reinterpret_cast<const FutureWaitInfo*>(&rhs);
    }
    inline FutureWaitInfo& FromAPI(WGPUFutureWaitInfo& rhs) {
        return *reinterpret_cast<FutureWaitInfo*>(&rhs);
    }
    inline const FutureWaitInfo& FromAPI(const FutureWaitInfo& rhs) {
        return rhs;
    }
    inline FutureWaitInfo& FromAPI(FutureWaitInfo& rhs) {
        return rhs;
    }
inline const WGPUImageCopyExternalTexture* ToAPI(const ImageCopyExternalTexture* rhs) {
        return reinterpret_cast<const WGPUImageCopyExternalTexture*>(rhs);
    }
    inline WGPUImageCopyExternalTexture* ToAPI(ImageCopyExternalTexture* rhs) {
        return reinterpret_cast<WGPUImageCopyExternalTexture*>(rhs);
    }
    inline const WGPUImageCopyExternalTexture* ToAPI(const WGPUImageCopyExternalTexture* rhs) {
        return rhs;
    }
    inline WGPUImageCopyExternalTexture* ToAPI(WGPUImageCopyExternalTexture* rhs) {
        return rhs;
    }
    inline const ImageCopyExternalTexture* FromAPI(const WGPUImageCopyExternalTexture* rhs) {
        return reinterpret_cast<const ImageCopyExternalTexture*>(rhs);
    }
    inline ImageCopyExternalTexture* FromAPI(WGPUImageCopyExternalTexture* rhs) {
        return reinterpret_cast<ImageCopyExternalTexture*>(rhs);
    }
    inline const ImageCopyExternalTexture* FromAPI(const ImageCopyExternalTexture* rhs) {
        return rhs;
    }
    inline ImageCopyExternalTexture* FromAPI(ImageCopyExternalTexture* rhs) {
        return rhs;
    }
    inline const wgpu::ImageCopyExternalTexture* ToCppAPI(const ImageCopyExternalTexture* rhs) {
        return reinterpret_cast<const wgpu::ImageCopyExternalTexture*>(rhs);
    }
    inline wgpu::ImageCopyExternalTexture* ToCppAPI(ImageCopyExternalTexture* rhs) {
        return reinterpret_cast<wgpu::ImageCopyExternalTexture*>(rhs);
    }
    inline const ImageCopyExternalTexture* FromCppAPI(const wgpu::ImageCopyExternalTexture* rhs) {
        return reinterpret_cast<const ImageCopyExternalTexture*>(rhs);
    }
    inline ImageCopyExternalTexture* FromCppAPI(wgpu::ImageCopyExternalTexture* rhs) {
        return reinterpret_cast<ImageCopyExternalTexture*>(rhs);
    }
inline const ImageCopyExternalTexture& FromAPI(const WGPUImageCopyExternalTexture& rhs) {
        return *reinterpret_cast<const ImageCopyExternalTexture*>(&rhs);
    }
    inline ImageCopyExternalTexture& FromAPI(WGPUImageCopyExternalTexture& rhs) {
        return *reinterpret_cast<ImageCopyExternalTexture*>(&rhs);
    }
    inline const ImageCopyExternalTexture& FromAPI(const ImageCopyExternalTexture& rhs) {
        return rhs;
    }
    inline ImageCopyExternalTexture& FromAPI(ImageCopyExternalTexture& rhs) {
        return rhs;
    }
inline const WGPUInstanceDescriptor* ToAPI(const InstanceDescriptor* rhs) {
        return reinterpret_cast<const WGPUInstanceDescriptor*>(rhs);
    }
    inline WGPUInstanceDescriptor* ToAPI(InstanceDescriptor* rhs) {
        return reinterpret_cast<WGPUInstanceDescriptor*>(rhs);
    }
    inline const WGPUInstanceDescriptor* ToAPI(const WGPUInstanceDescriptor* rhs) {
        return rhs;
    }
    inline WGPUInstanceDescriptor* ToAPI(WGPUInstanceDescriptor* rhs) {
        return rhs;
    }
    inline const InstanceDescriptor* FromAPI(const WGPUInstanceDescriptor* rhs) {
        return reinterpret_cast<const InstanceDescriptor*>(rhs);
    }
    inline InstanceDescriptor* FromAPI(WGPUInstanceDescriptor* rhs) {
        return reinterpret_cast<InstanceDescriptor*>(rhs);
    }
    inline const InstanceDescriptor* FromAPI(const InstanceDescriptor* rhs) {
        return rhs;
    }
    inline InstanceDescriptor* FromAPI(InstanceDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::InstanceDescriptor* ToCppAPI(const InstanceDescriptor* rhs) {
        return reinterpret_cast<const wgpu::InstanceDescriptor*>(rhs);
    }
    inline wgpu::InstanceDescriptor* ToCppAPI(InstanceDescriptor* rhs) {
        return reinterpret_cast<wgpu::InstanceDescriptor*>(rhs);
    }
    inline const InstanceDescriptor* FromCppAPI(const wgpu::InstanceDescriptor* rhs) {
        return reinterpret_cast<const InstanceDescriptor*>(rhs);
    }
    inline InstanceDescriptor* FromCppAPI(wgpu::InstanceDescriptor* rhs) {
        return reinterpret_cast<InstanceDescriptor*>(rhs);
    }
inline const InstanceDescriptor& FromAPI(const WGPUInstanceDescriptor& rhs) {
        return *reinterpret_cast<const InstanceDescriptor*>(&rhs);
    }
    inline InstanceDescriptor& FromAPI(WGPUInstanceDescriptor& rhs) {
        return *reinterpret_cast<InstanceDescriptor*>(&rhs);
    }
    inline const InstanceDescriptor& FromAPI(const InstanceDescriptor& rhs) {
        return rhs;
    }
    inline InstanceDescriptor& FromAPI(InstanceDescriptor& rhs) {
        return rhs;
    }
inline const WGPULimits* ToAPI(const Limits* rhs) {
        return reinterpret_cast<const WGPULimits*>(rhs);
    }
    inline WGPULimits* ToAPI(Limits* rhs) {
        return reinterpret_cast<WGPULimits*>(rhs);
    }
    inline const WGPULimits* ToAPI(const WGPULimits* rhs) {
        return rhs;
    }
    inline WGPULimits* ToAPI(WGPULimits* rhs) {
        return rhs;
    }
    inline const Limits* FromAPI(const WGPULimits* rhs) {
        return reinterpret_cast<const Limits*>(rhs);
    }
    inline Limits* FromAPI(WGPULimits* rhs) {
        return reinterpret_cast<Limits*>(rhs);
    }
    inline const Limits* FromAPI(const Limits* rhs) {
        return rhs;
    }
    inline Limits* FromAPI(Limits* rhs) {
        return rhs;
    }
    inline const wgpu::Limits* ToCppAPI(const Limits* rhs) {
        return reinterpret_cast<const wgpu::Limits*>(rhs);
    }
    inline wgpu::Limits* ToCppAPI(Limits* rhs) {
        return reinterpret_cast<wgpu::Limits*>(rhs);
    }
    inline const Limits* FromCppAPI(const wgpu::Limits* rhs) {
        return reinterpret_cast<const Limits*>(rhs);
    }
    inline Limits* FromCppAPI(wgpu::Limits* rhs) {
        return reinterpret_cast<Limits*>(rhs);
    }
inline const Limits& FromAPI(const WGPULimits& rhs) {
        return *reinterpret_cast<const Limits*>(&rhs);
    }
    inline Limits& FromAPI(WGPULimits& rhs) {
        return *reinterpret_cast<Limits*>(&rhs);
    }
    inline const Limits& FromAPI(const Limits& rhs) {
        return rhs;
    }
    inline Limits& FromAPI(Limits& rhs) {
        return rhs;
    }
inline const WGPUPipelineLayoutPixelLocalStorage* ToAPI(const PipelineLayoutPixelLocalStorage* rhs) {
        return reinterpret_cast<const WGPUPipelineLayoutPixelLocalStorage*>(rhs);
    }
    inline WGPUPipelineLayoutPixelLocalStorage* ToAPI(PipelineLayoutPixelLocalStorage* rhs) {
        return reinterpret_cast<WGPUPipelineLayoutPixelLocalStorage*>(rhs);
    }
    inline const WGPUPipelineLayoutPixelLocalStorage* ToAPI(const WGPUPipelineLayoutPixelLocalStorage* rhs) {
        return rhs;
    }
    inline WGPUPipelineLayoutPixelLocalStorage* ToAPI(WGPUPipelineLayoutPixelLocalStorage* rhs) {
        return rhs;
    }
    inline const PipelineLayoutPixelLocalStorage* FromAPI(const WGPUPipelineLayoutPixelLocalStorage* rhs) {
        return reinterpret_cast<const PipelineLayoutPixelLocalStorage*>(rhs);
    }
    inline PipelineLayoutPixelLocalStorage* FromAPI(WGPUPipelineLayoutPixelLocalStorage* rhs) {
        return reinterpret_cast<PipelineLayoutPixelLocalStorage*>(rhs);
    }
    inline const PipelineLayoutPixelLocalStorage* FromAPI(const PipelineLayoutPixelLocalStorage* rhs) {
        return rhs;
    }
    inline PipelineLayoutPixelLocalStorage* FromAPI(PipelineLayoutPixelLocalStorage* rhs) {
        return rhs;
    }
    inline const wgpu::PipelineLayoutPixelLocalStorage* ToCppAPI(const PipelineLayoutPixelLocalStorage* rhs) {
        return reinterpret_cast<const wgpu::PipelineLayoutPixelLocalStorage*>(rhs);
    }
    inline wgpu::PipelineLayoutPixelLocalStorage* ToCppAPI(PipelineLayoutPixelLocalStorage* rhs) {
        return reinterpret_cast<wgpu::PipelineLayoutPixelLocalStorage*>(rhs);
    }
    inline const PipelineLayoutPixelLocalStorage* FromCppAPI(const wgpu::PipelineLayoutPixelLocalStorage* rhs) {
        return reinterpret_cast<const PipelineLayoutPixelLocalStorage*>(rhs);
    }
    inline PipelineLayoutPixelLocalStorage* FromCppAPI(wgpu::PipelineLayoutPixelLocalStorage* rhs) {
        return reinterpret_cast<PipelineLayoutPixelLocalStorage*>(rhs);
    }
inline const PipelineLayoutPixelLocalStorage& FromAPI(const WGPUPipelineLayoutPixelLocalStorage& rhs) {
        return *reinterpret_cast<const PipelineLayoutPixelLocalStorage*>(&rhs);
    }
    inline PipelineLayoutPixelLocalStorage& FromAPI(WGPUPipelineLayoutPixelLocalStorage& rhs) {
        return *reinterpret_cast<PipelineLayoutPixelLocalStorage*>(&rhs);
    }
    inline const PipelineLayoutPixelLocalStorage& FromAPI(const PipelineLayoutPixelLocalStorage& rhs) {
        return rhs;
    }
    inline PipelineLayoutPixelLocalStorage& FromAPI(PipelineLayoutPixelLocalStorage& rhs) {
        return rhs;
    }
inline const WGPURenderBundleEncoderDescriptor* ToAPI(const RenderBundleEncoderDescriptor* rhs) {
        return reinterpret_cast<const WGPURenderBundleEncoderDescriptor*>(rhs);
    }
    inline WGPURenderBundleEncoderDescriptor* ToAPI(RenderBundleEncoderDescriptor* rhs) {
        return reinterpret_cast<WGPURenderBundleEncoderDescriptor*>(rhs);
    }
    inline const WGPURenderBundleEncoderDescriptor* ToAPI(const WGPURenderBundleEncoderDescriptor* rhs) {
        return rhs;
    }
    inline WGPURenderBundleEncoderDescriptor* ToAPI(WGPURenderBundleEncoderDescriptor* rhs) {
        return rhs;
    }
    inline const RenderBundleEncoderDescriptor* FromAPI(const WGPURenderBundleEncoderDescriptor* rhs) {
        return reinterpret_cast<const RenderBundleEncoderDescriptor*>(rhs);
    }
    inline RenderBundleEncoderDescriptor* FromAPI(WGPURenderBundleEncoderDescriptor* rhs) {
        return reinterpret_cast<RenderBundleEncoderDescriptor*>(rhs);
    }
    inline const RenderBundleEncoderDescriptor* FromAPI(const RenderBundleEncoderDescriptor* rhs) {
        return rhs;
    }
    inline RenderBundleEncoderDescriptor* FromAPI(RenderBundleEncoderDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::RenderBundleEncoderDescriptor* ToCppAPI(const RenderBundleEncoderDescriptor* rhs) {
        return reinterpret_cast<const wgpu::RenderBundleEncoderDescriptor*>(rhs);
    }
    inline wgpu::RenderBundleEncoderDescriptor* ToCppAPI(RenderBundleEncoderDescriptor* rhs) {
        return reinterpret_cast<wgpu::RenderBundleEncoderDescriptor*>(rhs);
    }
    inline const RenderBundleEncoderDescriptor* FromCppAPI(const wgpu::RenderBundleEncoderDescriptor* rhs) {
        return reinterpret_cast<const RenderBundleEncoderDescriptor*>(rhs);
    }
    inline RenderBundleEncoderDescriptor* FromCppAPI(wgpu::RenderBundleEncoderDescriptor* rhs) {
        return reinterpret_cast<RenderBundleEncoderDescriptor*>(rhs);
    }
inline const RenderBundleEncoderDescriptor& FromAPI(const WGPURenderBundleEncoderDescriptor& rhs) {
        return *reinterpret_cast<const RenderBundleEncoderDescriptor*>(&rhs);
    }
    inline RenderBundleEncoderDescriptor& FromAPI(WGPURenderBundleEncoderDescriptor& rhs) {
        return *reinterpret_cast<RenderBundleEncoderDescriptor*>(&rhs);
    }
    inline const RenderBundleEncoderDescriptor& FromAPI(const RenderBundleEncoderDescriptor& rhs) {
        return rhs;
    }
    inline RenderBundleEncoderDescriptor& FromAPI(RenderBundleEncoderDescriptor& rhs) {
        return rhs;
    }
inline const WGPURenderPassColorAttachment* ToAPI(const RenderPassColorAttachment* rhs) {
        return reinterpret_cast<const WGPURenderPassColorAttachment*>(rhs);
    }
    inline WGPURenderPassColorAttachment* ToAPI(RenderPassColorAttachment* rhs) {
        return reinterpret_cast<WGPURenderPassColorAttachment*>(rhs);
    }
    inline const WGPURenderPassColorAttachment* ToAPI(const WGPURenderPassColorAttachment* rhs) {
        return rhs;
    }
    inline WGPURenderPassColorAttachment* ToAPI(WGPURenderPassColorAttachment* rhs) {
        return rhs;
    }
    inline const RenderPassColorAttachment* FromAPI(const WGPURenderPassColorAttachment* rhs) {
        return reinterpret_cast<const RenderPassColorAttachment*>(rhs);
    }
    inline RenderPassColorAttachment* FromAPI(WGPURenderPassColorAttachment* rhs) {
        return reinterpret_cast<RenderPassColorAttachment*>(rhs);
    }
    inline const RenderPassColorAttachment* FromAPI(const RenderPassColorAttachment* rhs) {
        return rhs;
    }
    inline RenderPassColorAttachment* FromAPI(RenderPassColorAttachment* rhs) {
        return rhs;
    }
    inline const wgpu::RenderPassColorAttachment* ToCppAPI(const RenderPassColorAttachment* rhs) {
        return reinterpret_cast<const wgpu::RenderPassColorAttachment*>(rhs);
    }
    inline wgpu::RenderPassColorAttachment* ToCppAPI(RenderPassColorAttachment* rhs) {
        return reinterpret_cast<wgpu::RenderPassColorAttachment*>(rhs);
    }
    inline const RenderPassColorAttachment* FromCppAPI(const wgpu::RenderPassColorAttachment* rhs) {
        return reinterpret_cast<const RenderPassColorAttachment*>(rhs);
    }
    inline RenderPassColorAttachment* FromCppAPI(wgpu::RenderPassColorAttachment* rhs) {
        return reinterpret_cast<RenderPassColorAttachment*>(rhs);
    }
inline const RenderPassColorAttachment& FromAPI(const WGPURenderPassColorAttachment& rhs) {
        return *reinterpret_cast<const RenderPassColorAttachment*>(&rhs);
    }
    inline RenderPassColorAttachment& FromAPI(WGPURenderPassColorAttachment& rhs) {
        return *reinterpret_cast<RenderPassColorAttachment*>(&rhs);
    }
    inline const RenderPassColorAttachment& FromAPI(const RenderPassColorAttachment& rhs) {
        return rhs;
    }
    inline RenderPassColorAttachment& FromAPI(RenderPassColorAttachment& rhs) {
        return rhs;
    }
inline const WGPURenderPassRenderAreaRect* ToAPI(const RenderPassRenderAreaRect* rhs) {
        return reinterpret_cast<const WGPURenderPassRenderAreaRect*>(rhs);
    }
    inline WGPURenderPassRenderAreaRect* ToAPI(RenderPassRenderAreaRect* rhs) {
        return reinterpret_cast<WGPURenderPassRenderAreaRect*>(rhs);
    }
    inline const WGPURenderPassRenderAreaRect* ToAPI(const WGPURenderPassRenderAreaRect* rhs) {
        return rhs;
    }
    inline WGPURenderPassRenderAreaRect* ToAPI(WGPURenderPassRenderAreaRect* rhs) {
        return rhs;
    }
    inline const RenderPassRenderAreaRect* FromAPI(const WGPURenderPassRenderAreaRect* rhs) {
        return reinterpret_cast<const RenderPassRenderAreaRect*>(rhs);
    }
    inline RenderPassRenderAreaRect* FromAPI(WGPURenderPassRenderAreaRect* rhs) {
        return reinterpret_cast<RenderPassRenderAreaRect*>(rhs);
    }
    inline const RenderPassRenderAreaRect* FromAPI(const RenderPassRenderAreaRect* rhs) {
        return rhs;
    }
    inline RenderPassRenderAreaRect* FromAPI(RenderPassRenderAreaRect* rhs) {
        return rhs;
    }
    inline const wgpu::RenderPassRenderAreaRect* ToCppAPI(const RenderPassRenderAreaRect* rhs) {
        return reinterpret_cast<const wgpu::RenderPassRenderAreaRect*>(rhs);
    }
    inline wgpu::RenderPassRenderAreaRect* ToCppAPI(RenderPassRenderAreaRect* rhs) {
        return reinterpret_cast<wgpu::RenderPassRenderAreaRect*>(rhs);
    }
    inline const RenderPassRenderAreaRect* FromCppAPI(const wgpu::RenderPassRenderAreaRect* rhs) {
        return reinterpret_cast<const RenderPassRenderAreaRect*>(rhs);
    }
    inline RenderPassRenderAreaRect* FromCppAPI(wgpu::RenderPassRenderAreaRect* rhs) {
        return reinterpret_cast<RenderPassRenderAreaRect*>(rhs);
    }
inline const RenderPassRenderAreaRect& FromAPI(const WGPURenderPassRenderAreaRect& rhs) {
        return *reinterpret_cast<const RenderPassRenderAreaRect*>(&rhs);
    }
    inline RenderPassRenderAreaRect& FromAPI(WGPURenderPassRenderAreaRect& rhs) {
        return *reinterpret_cast<RenderPassRenderAreaRect*>(&rhs);
    }
    inline const RenderPassRenderAreaRect& FromAPI(const RenderPassRenderAreaRect& rhs) {
        return rhs;
    }
    inline RenderPassRenderAreaRect& FromAPI(RenderPassRenderAreaRect& rhs) {
        return rhs;
    }
inline const WGPURenderPassStorageAttachment* ToAPI(const RenderPassStorageAttachment* rhs) {
        return reinterpret_cast<const WGPURenderPassStorageAttachment*>(rhs);
    }
    inline WGPURenderPassStorageAttachment* ToAPI(RenderPassStorageAttachment* rhs) {
        return reinterpret_cast<WGPURenderPassStorageAttachment*>(rhs);
    }
    inline const WGPURenderPassStorageAttachment* ToAPI(const WGPURenderPassStorageAttachment* rhs) {
        return rhs;
    }
    inline WGPURenderPassStorageAttachment* ToAPI(WGPURenderPassStorageAttachment* rhs) {
        return rhs;
    }
    inline const RenderPassStorageAttachment* FromAPI(const WGPURenderPassStorageAttachment* rhs) {
        return reinterpret_cast<const RenderPassStorageAttachment*>(rhs);
    }
    inline RenderPassStorageAttachment* FromAPI(WGPURenderPassStorageAttachment* rhs) {
        return reinterpret_cast<RenderPassStorageAttachment*>(rhs);
    }
    inline const RenderPassStorageAttachment* FromAPI(const RenderPassStorageAttachment* rhs) {
        return rhs;
    }
    inline RenderPassStorageAttachment* FromAPI(RenderPassStorageAttachment* rhs) {
        return rhs;
    }
    inline const wgpu::RenderPassStorageAttachment* ToCppAPI(const RenderPassStorageAttachment* rhs) {
        return reinterpret_cast<const wgpu::RenderPassStorageAttachment*>(rhs);
    }
    inline wgpu::RenderPassStorageAttachment* ToCppAPI(RenderPassStorageAttachment* rhs) {
        return reinterpret_cast<wgpu::RenderPassStorageAttachment*>(rhs);
    }
    inline const RenderPassStorageAttachment* FromCppAPI(const wgpu::RenderPassStorageAttachment* rhs) {
        return reinterpret_cast<const RenderPassStorageAttachment*>(rhs);
    }
    inline RenderPassStorageAttachment* FromCppAPI(wgpu::RenderPassStorageAttachment* rhs) {
        return reinterpret_cast<RenderPassStorageAttachment*>(rhs);
    }
inline const RenderPassStorageAttachment& FromAPI(const WGPURenderPassStorageAttachment& rhs) {
        return *reinterpret_cast<const RenderPassStorageAttachment*>(&rhs);
    }
    inline RenderPassStorageAttachment& FromAPI(WGPURenderPassStorageAttachment& rhs) {
        return *reinterpret_cast<RenderPassStorageAttachment*>(&rhs);
    }
    inline const RenderPassStorageAttachment& FromAPI(const RenderPassStorageAttachment& rhs) {
        return rhs;
    }
    inline RenderPassStorageAttachment& FromAPI(RenderPassStorageAttachment& rhs) {
        return rhs;
    }
inline const WGPURequestAdapterOptions* ToAPI(const RequestAdapterOptions* rhs) {
        return reinterpret_cast<const WGPURequestAdapterOptions*>(rhs);
    }
    inline WGPURequestAdapterOptions* ToAPI(RequestAdapterOptions* rhs) {
        return reinterpret_cast<WGPURequestAdapterOptions*>(rhs);
    }
    inline const WGPURequestAdapterOptions* ToAPI(const WGPURequestAdapterOptions* rhs) {
        return rhs;
    }
    inline WGPURequestAdapterOptions* ToAPI(WGPURequestAdapterOptions* rhs) {
        return rhs;
    }
    inline const RequestAdapterOptions* FromAPI(const WGPURequestAdapterOptions* rhs) {
        return reinterpret_cast<const RequestAdapterOptions*>(rhs);
    }
    inline RequestAdapterOptions* FromAPI(WGPURequestAdapterOptions* rhs) {
        return reinterpret_cast<RequestAdapterOptions*>(rhs);
    }
    inline const RequestAdapterOptions* FromAPI(const RequestAdapterOptions* rhs) {
        return rhs;
    }
    inline RequestAdapterOptions* FromAPI(RequestAdapterOptions* rhs) {
        return rhs;
    }
    inline const wgpu::RequestAdapterOptions* ToCppAPI(const RequestAdapterOptions* rhs) {
        return reinterpret_cast<const wgpu::RequestAdapterOptions*>(rhs);
    }
    inline wgpu::RequestAdapterOptions* ToCppAPI(RequestAdapterOptions* rhs) {
        return reinterpret_cast<wgpu::RequestAdapterOptions*>(rhs);
    }
    inline const RequestAdapterOptions* FromCppAPI(const wgpu::RequestAdapterOptions* rhs) {
        return reinterpret_cast<const RequestAdapterOptions*>(rhs);
    }
    inline RequestAdapterOptions* FromCppAPI(wgpu::RequestAdapterOptions* rhs) {
        return reinterpret_cast<RequestAdapterOptions*>(rhs);
    }
inline const RequestAdapterOptions& FromAPI(const WGPURequestAdapterOptions& rhs) {
        return *reinterpret_cast<const RequestAdapterOptions*>(&rhs);
    }
    inline RequestAdapterOptions& FromAPI(WGPURequestAdapterOptions& rhs) {
        return *reinterpret_cast<RequestAdapterOptions*>(&rhs);
    }
    inline const RequestAdapterOptions& FromAPI(const RequestAdapterOptions& rhs) {
        return rhs;
    }
    inline RequestAdapterOptions& FromAPI(RequestAdapterOptions& rhs) {
        return rhs;
    }
inline const WGPUSamplerDescriptor* ToAPI(const SamplerDescriptor* rhs) {
        return reinterpret_cast<const WGPUSamplerDescriptor*>(rhs);
    }
    inline WGPUSamplerDescriptor* ToAPI(SamplerDescriptor* rhs) {
        return reinterpret_cast<WGPUSamplerDescriptor*>(rhs);
    }
    inline const WGPUSamplerDescriptor* ToAPI(const WGPUSamplerDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSamplerDescriptor* ToAPI(WGPUSamplerDescriptor* rhs) {
        return rhs;
    }
    inline const SamplerDescriptor* FromAPI(const WGPUSamplerDescriptor* rhs) {
        return reinterpret_cast<const SamplerDescriptor*>(rhs);
    }
    inline SamplerDescriptor* FromAPI(WGPUSamplerDescriptor* rhs) {
        return reinterpret_cast<SamplerDescriptor*>(rhs);
    }
    inline const SamplerDescriptor* FromAPI(const SamplerDescriptor* rhs) {
        return rhs;
    }
    inline SamplerDescriptor* FromAPI(SamplerDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SamplerDescriptor* ToCppAPI(const SamplerDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SamplerDescriptor*>(rhs);
    }
    inline wgpu::SamplerDescriptor* ToCppAPI(SamplerDescriptor* rhs) {
        return reinterpret_cast<wgpu::SamplerDescriptor*>(rhs);
    }
    inline const SamplerDescriptor* FromCppAPI(const wgpu::SamplerDescriptor* rhs) {
        return reinterpret_cast<const SamplerDescriptor*>(rhs);
    }
    inline SamplerDescriptor* FromCppAPI(wgpu::SamplerDescriptor* rhs) {
        return reinterpret_cast<SamplerDescriptor*>(rhs);
    }
inline const SamplerDescriptor& FromAPI(const WGPUSamplerDescriptor& rhs) {
        return *reinterpret_cast<const SamplerDescriptor*>(&rhs);
    }
    inline SamplerDescriptor& FromAPI(WGPUSamplerDescriptor& rhs) {
        return *reinterpret_cast<SamplerDescriptor*>(&rhs);
    }
    inline const SamplerDescriptor& FromAPI(const SamplerDescriptor& rhs) {
        return rhs;
    }
    inline SamplerDescriptor& FromAPI(SamplerDescriptor& rhs) {
        return rhs;
    }
inline const WGPUShaderModuleDescriptor* ToAPI(const ShaderModuleDescriptor* rhs) {
        return reinterpret_cast<const WGPUShaderModuleDescriptor*>(rhs);
    }
    inline WGPUShaderModuleDescriptor* ToAPI(ShaderModuleDescriptor* rhs) {
        return reinterpret_cast<WGPUShaderModuleDescriptor*>(rhs);
    }
    inline const WGPUShaderModuleDescriptor* ToAPI(const WGPUShaderModuleDescriptor* rhs) {
        return rhs;
    }
    inline WGPUShaderModuleDescriptor* ToAPI(WGPUShaderModuleDescriptor* rhs) {
        return rhs;
    }
    inline const ShaderModuleDescriptor* FromAPI(const WGPUShaderModuleDescriptor* rhs) {
        return reinterpret_cast<const ShaderModuleDescriptor*>(rhs);
    }
    inline ShaderModuleDescriptor* FromAPI(WGPUShaderModuleDescriptor* rhs) {
        return reinterpret_cast<ShaderModuleDescriptor*>(rhs);
    }
    inline const ShaderModuleDescriptor* FromAPI(const ShaderModuleDescriptor* rhs) {
        return rhs;
    }
    inline ShaderModuleDescriptor* FromAPI(ShaderModuleDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::ShaderModuleDescriptor* ToCppAPI(const ShaderModuleDescriptor* rhs) {
        return reinterpret_cast<const wgpu::ShaderModuleDescriptor*>(rhs);
    }
    inline wgpu::ShaderModuleDescriptor* ToCppAPI(ShaderModuleDescriptor* rhs) {
        return reinterpret_cast<wgpu::ShaderModuleDescriptor*>(rhs);
    }
    inline const ShaderModuleDescriptor* FromCppAPI(const wgpu::ShaderModuleDescriptor* rhs) {
        return reinterpret_cast<const ShaderModuleDescriptor*>(rhs);
    }
    inline ShaderModuleDescriptor* FromCppAPI(wgpu::ShaderModuleDescriptor* rhs) {
        return reinterpret_cast<ShaderModuleDescriptor*>(rhs);
    }
inline const ShaderModuleDescriptor& FromAPI(const WGPUShaderModuleDescriptor& rhs) {
        return *reinterpret_cast<const ShaderModuleDescriptor*>(&rhs);
    }
    inline ShaderModuleDescriptor& FromAPI(WGPUShaderModuleDescriptor& rhs) {
        return *reinterpret_cast<ShaderModuleDescriptor*>(&rhs);
    }
    inline const ShaderModuleDescriptor& FromAPI(const ShaderModuleDescriptor& rhs) {
        return rhs;
    }
    inline ShaderModuleDescriptor& FromAPI(ShaderModuleDescriptor& rhs) {
        return rhs;
    }
inline const WGPUSharedBufferMemoryDescriptor* ToAPI(const SharedBufferMemoryDescriptor* rhs) {
        return reinterpret_cast<const WGPUSharedBufferMemoryDescriptor*>(rhs);
    }
    inline WGPUSharedBufferMemoryDescriptor* ToAPI(SharedBufferMemoryDescriptor* rhs) {
        return reinterpret_cast<WGPUSharedBufferMemoryDescriptor*>(rhs);
    }
    inline const WGPUSharedBufferMemoryDescriptor* ToAPI(const WGPUSharedBufferMemoryDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSharedBufferMemoryDescriptor* ToAPI(WGPUSharedBufferMemoryDescriptor* rhs) {
        return rhs;
    }
    inline const SharedBufferMemoryDescriptor* FromAPI(const WGPUSharedBufferMemoryDescriptor* rhs) {
        return reinterpret_cast<const SharedBufferMemoryDescriptor*>(rhs);
    }
    inline SharedBufferMemoryDescriptor* FromAPI(WGPUSharedBufferMemoryDescriptor* rhs) {
        return reinterpret_cast<SharedBufferMemoryDescriptor*>(rhs);
    }
    inline const SharedBufferMemoryDescriptor* FromAPI(const SharedBufferMemoryDescriptor* rhs) {
        return rhs;
    }
    inline SharedBufferMemoryDescriptor* FromAPI(SharedBufferMemoryDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SharedBufferMemoryDescriptor* ToCppAPI(const SharedBufferMemoryDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SharedBufferMemoryDescriptor*>(rhs);
    }
    inline wgpu::SharedBufferMemoryDescriptor* ToCppAPI(SharedBufferMemoryDescriptor* rhs) {
        return reinterpret_cast<wgpu::SharedBufferMemoryDescriptor*>(rhs);
    }
    inline const SharedBufferMemoryDescriptor* FromCppAPI(const wgpu::SharedBufferMemoryDescriptor* rhs) {
        return reinterpret_cast<const SharedBufferMemoryDescriptor*>(rhs);
    }
    inline SharedBufferMemoryDescriptor* FromCppAPI(wgpu::SharedBufferMemoryDescriptor* rhs) {
        return reinterpret_cast<SharedBufferMemoryDescriptor*>(rhs);
    }
inline const SharedBufferMemoryDescriptor& FromAPI(const WGPUSharedBufferMemoryDescriptor& rhs) {
        return *reinterpret_cast<const SharedBufferMemoryDescriptor*>(&rhs);
    }
    inline SharedBufferMemoryDescriptor& FromAPI(WGPUSharedBufferMemoryDescriptor& rhs) {
        return *reinterpret_cast<SharedBufferMemoryDescriptor*>(&rhs);
    }
    inline const SharedBufferMemoryDescriptor& FromAPI(const SharedBufferMemoryDescriptor& rhs) {
        return rhs;
    }
    inline SharedBufferMemoryDescriptor& FromAPI(SharedBufferMemoryDescriptor& rhs) {
        return rhs;
    }
inline const WGPUSharedFenceDescriptor* ToAPI(const SharedFenceDescriptor* rhs) {
        return reinterpret_cast<const WGPUSharedFenceDescriptor*>(rhs);
    }
    inline WGPUSharedFenceDescriptor* ToAPI(SharedFenceDescriptor* rhs) {
        return reinterpret_cast<WGPUSharedFenceDescriptor*>(rhs);
    }
    inline const WGPUSharedFenceDescriptor* ToAPI(const WGPUSharedFenceDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSharedFenceDescriptor* ToAPI(WGPUSharedFenceDescriptor* rhs) {
        return rhs;
    }
    inline const SharedFenceDescriptor* FromAPI(const WGPUSharedFenceDescriptor* rhs) {
        return reinterpret_cast<const SharedFenceDescriptor*>(rhs);
    }
    inline SharedFenceDescriptor* FromAPI(WGPUSharedFenceDescriptor* rhs) {
        return reinterpret_cast<SharedFenceDescriptor*>(rhs);
    }
    inline const SharedFenceDescriptor* FromAPI(const SharedFenceDescriptor* rhs) {
        return rhs;
    }
    inline SharedFenceDescriptor* FromAPI(SharedFenceDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SharedFenceDescriptor* ToCppAPI(const SharedFenceDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SharedFenceDescriptor*>(rhs);
    }
    inline wgpu::SharedFenceDescriptor* ToCppAPI(SharedFenceDescriptor* rhs) {
        return reinterpret_cast<wgpu::SharedFenceDescriptor*>(rhs);
    }
    inline const SharedFenceDescriptor* FromCppAPI(const wgpu::SharedFenceDescriptor* rhs) {
        return reinterpret_cast<const SharedFenceDescriptor*>(rhs);
    }
    inline SharedFenceDescriptor* FromCppAPI(wgpu::SharedFenceDescriptor* rhs) {
        return reinterpret_cast<SharedFenceDescriptor*>(rhs);
    }
inline const SharedFenceDescriptor& FromAPI(const WGPUSharedFenceDescriptor& rhs) {
        return *reinterpret_cast<const SharedFenceDescriptor*>(&rhs);
    }
    inline SharedFenceDescriptor& FromAPI(WGPUSharedFenceDescriptor& rhs) {
        return *reinterpret_cast<SharedFenceDescriptor*>(&rhs);
    }
    inline const SharedFenceDescriptor& FromAPI(const SharedFenceDescriptor& rhs) {
        return rhs;
    }
    inline SharedFenceDescriptor& FromAPI(SharedFenceDescriptor& rhs) {
        return rhs;
    }
inline const WGPUSharedFenceExportInfo* ToAPI(const SharedFenceExportInfo* rhs) {
        return reinterpret_cast<const WGPUSharedFenceExportInfo*>(rhs);
    }
    inline WGPUSharedFenceExportInfo* ToAPI(SharedFenceExportInfo* rhs) {
        return reinterpret_cast<WGPUSharedFenceExportInfo*>(rhs);
    }
    inline const WGPUSharedFenceExportInfo* ToAPI(const WGPUSharedFenceExportInfo* rhs) {
        return rhs;
    }
    inline WGPUSharedFenceExportInfo* ToAPI(WGPUSharedFenceExportInfo* rhs) {
        return rhs;
    }
    inline const SharedFenceExportInfo* FromAPI(const WGPUSharedFenceExportInfo* rhs) {
        return reinterpret_cast<const SharedFenceExportInfo*>(rhs);
    }
    inline SharedFenceExportInfo* FromAPI(WGPUSharedFenceExportInfo* rhs) {
        return reinterpret_cast<SharedFenceExportInfo*>(rhs);
    }
    inline const SharedFenceExportInfo* FromAPI(const SharedFenceExportInfo* rhs) {
        return rhs;
    }
    inline SharedFenceExportInfo* FromAPI(SharedFenceExportInfo* rhs) {
        return rhs;
    }
    inline const wgpu::SharedFenceExportInfo* ToCppAPI(const SharedFenceExportInfo* rhs) {
        return reinterpret_cast<const wgpu::SharedFenceExportInfo*>(rhs);
    }
    inline wgpu::SharedFenceExportInfo* ToCppAPI(SharedFenceExportInfo* rhs) {
        return reinterpret_cast<wgpu::SharedFenceExportInfo*>(rhs);
    }
    inline const SharedFenceExportInfo* FromCppAPI(const wgpu::SharedFenceExportInfo* rhs) {
        return reinterpret_cast<const SharedFenceExportInfo*>(rhs);
    }
    inline SharedFenceExportInfo* FromCppAPI(wgpu::SharedFenceExportInfo* rhs) {
        return reinterpret_cast<SharedFenceExportInfo*>(rhs);
    }
inline const SharedFenceExportInfo& FromAPI(const WGPUSharedFenceExportInfo& rhs) {
        return *reinterpret_cast<const SharedFenceExportInfo*>(&rhs);
    }
    inline SharedFenceExportInfo& FromAPI(WGPUSharedFenceExportInfo& rhs) {
        return *reinterpret_cast<SharedFenceExportInfo*>(&rhs);
    }
    inline const SharedFenceExportInfo& FromAPI(const SharedFenceExportInfo& rhs) {
        return rhs;
    }
    inline SharedFenceExportInfo& FromAPI(SharedFenceExportInfo& rhs) {
        return rhs;
    }
inline const WGPUSharedTextureMemoryAHardwareBufferProperties* ToAPI(const SharedTextureMemoryAHardwareBufferProperties* rhs) {
        return reinterpret_cast<const WGPUSharedTextureMemoryAHardwareBufferProperties*>(rhs);
    }
    inline WGPUSharedTextureMemoryAHardwareBufferProperties* ToAPI(SharedTextureMemoryAHardwareBufferProperties* rhs) {
        return reinterpret_cast<WGPUSharedTextureMemoryAHardwareBufferProperties*>(rhs);
    }
    inline const WGPUSharedTextureMemoryAHardwareBufferProperties* ToAPI(const WGPUSharedTextureMemoryAHardwareBufferProperties* rhs) {
        return rhs;
    }
    inline WGPUSharedTextureMemoryAHardwareBufferProperties* ToAPI(WGPUSharedTextureMemoryAHardwareBufferProperties* rhs) {
        return rhs;
    }
    inline const SharedTextureMemoryAHardwareBufferProperties* FromAPI(const WGPUSharedTextureMemoryAHardwareBufferProperties* rhs) {
        return reinterpret_cast<const SharedTextureMemoryAHardwareBufferProperties*>(rhs);
    }
    inline SharedTextureMemoryAHardwareBufferProperties* FromAPI(WGPUSharedTextureMemoryAHardwareBufferProperties* rhs) {
        return reinterpret_cast<SharedTextureMemoryAHardwareBufferProperties*>(rhs);
    }
    inline const SharedTextureMemoryAHardwareBufferProperties* FromAPI(const SharedTextureMemoryAHardwareBufferProperties* rhs) {
        return rhs;
    }
    inline SharedTextureMemoryAHardwareBufferProperties* FromAPI(SharedTextureMemoryAHardwareBufferProperties* rhs) {
        return rhs;
    }
    inline const wgpu::SharedTextureMemoryAHardwareBufferProperties* ToCppAPI(const SharedTextureMemoryAHardwareBufferProperties* rhs) {
        return reinterpret_cast<const wgpu::SharedTextureMemoryAHardwareBufferProperties*>(rhs);
    }
    inline wgpu::SharedTextureMemoryAHardwareBufferProperties* ToCppAPI(SharedTextureMemoryAHardwareBufferProperties* rhs) {
        return reinterpret_cast<wgpu::SharedTextureMemoryAHardwareBufferProperties*>(rhs);
    }
    inline const SharedTextureMemoryAHardwareBufferProperties* FromCppAPI(const wgpu::SharedTextureMemoryAHardwareBufferProperties* rhs) {
        return reinterpret_cast<const SharedTextureMemoryAHardwareBufferProperties*>(rhs);
    }
    inline SharedTextureMemoryAHardwareBufferProperties* FromCppAPI(wgpu::SharedTextureMemoryAHardwareBufferProperties* rhs) {
        return reinterpret_cast<SharedTextureMemoryAHardwareBufferProperties*>(rhs);
    }
inline const SharedTextureMemoryAHardwareBufferProperties& FromAPI(const WGPUSharedTextureMemoryAHardwareBufferProperties& rhs) {
        return *reinterpret_cast<const SharedTextureMemoryAHardwareBufferProperties*>(&rhs);
    }
    inline SharedTextureMemoryAHardwareBufferProperties& FromAPI(WGPUSharedTextureMemoryAHardwareBufferProperties& rhs) {
        return *reinterpret_cast<SharedTextureMemoryAHardwareBufferProperties*>(&rhs);
    }
    inline const SharedTextureMemoryAHardwareBufferProperties& FromAPI(const SharedTextureMemoryAHardwareBufferProperties& rhs) {
        return rhs;
    }
    inline SharedTextureMemoryAHardwareBufferProperties& FromAPI(SharedTextureMemoryAHardwareBufferProperties& rhs) {
        return rhs;
    }
inline const WGPUSharedTextureMemoryBeginAccessDescriptor* ToAPI(const SharedTextureMemoryBeginAccessDescriptor* rhs) {
        return reinterpret_cast<const WGPUSharedTextureMemoryBeginAccessDescriptor*>(rhs);
    }
    inline WGPUSharedTextureMemoryBeginAccessDescriptor* ToAPI(SharedTextureMemoryBeginAccessDescriptor* rhs) {
        return reinterpret_cast<WGPUSharedTextureMemoryBeginAccessDescriptor*>(rhs);
    }
    inline const WGPUSharedTextureMemoryBeginAccessDescriptor* ToAPI(const WGPUSharedTextureMemoryBeginAccessDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSharedTextureMemoryBeginAccessDescriptor* ToAPI(WGPUSharedTextureMemoryBeginAccessDescriptor* rhs) {
        return rhs;
    }
    inline const SharedTextureMemoryBeginAccessDescriptor* FromAPI(const WGPUSharedTextureMemoryBeginAccessDescriptor* rhs) {
        return reinterpret_cast<const SharedTextureMemoryBeginAccessDescriptor*>(rhs);
    }
    inline SharedTextureMemoryBeginAccessDescriptor* FromAPI(WGPUSharedTextureMemoryBeginAccessDescriptor* rhs) {
        return reinterpret_cast<SharedTextureMemoryBeginAccessDescriptor*>(rhs);
    }
    inline const SharedTextureMemoryBeginAccessDescriptor* FromAPI(const SharedTextureMemoryBeginAccessDescriptor* rhs) {
        return rhs;
    }
    inline SharedTextureMemoryBeginAccessDescriptor* FromAPI(SharedTextureMemoryBeginAccessDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SharedTextureMemoryBeginAccessDescriptor* ToCppAPI(const SharedTextureMemoryBeginAccessDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SharedTextureMemoryBeginAccessDescriptor*>(rhs);
    }
    inline wgpu::SharedTextureMemoryBeginAccessDescriptor* ToCppAPI(SharedTextureMemoryBeginAccessDescriptor* rhs) {
        return reinterpret_cast<wgpu::SharedTextureMemoryBeginAccessDescriptor*>(rhs);
    }
    inline const SharedTextureMemoryBeginAccessDescriptor* FromCppAPI(const wgpu::SharedTextureMemoryBeginAccessDescriptor* rhs) {
        return reinterpret_cast<const SharedTextureMemoryBeginAccessDescriptor*>(rhs);
    }
    inline SharedTextureMemoryBeginAccessDescriptor* FromCppAPI(wgpu::SharedTextureMemoryBeginAccessDescriptor* rhs) {
        return reinterpret_cast<SharedTextureMemoryBeginAccessDescriptor*>(rhs);
    }
inline const SharedTextureMemoryBeginAccessDescriptor& FromAPI(const WGPUSharedTextureMemoryBeginAccessDescriptor& rhs) {
        return *reinterpret_cast<const SharedTextureMemoryBeginAccessDescriptor*>(&rhs);
    }
    inline SharedTextureMemoryBeginAccessDescriptor& FromAPI(WGPUSharedTextureMemoryBeginAccessDescriptor& rhs) {
        return *reinterpret_cast<SharedTextureMemoryBeginAccessDescriptor*>(&rhs);
    }
    inline const SharedTextureMemoryBeginAccessDescriptor& FromAPI(const SharedTextureMemoryBeginAccessDescriptor& rhs) {
        return rhs;
    }
    inline SharedTextureMemoryBeginAccessDescriptor& FromAPI(SharedTextureMemoryBeginAccessDescriptor& rhs) {
        return rhs;
    }
inline const WGPUSharedTextureMemoryDmaBufDescriptor* ToAPI(const SharedTextureMemoryDmaBufDescriptor* rhs) {
        return reinterpret_cast<const WGPUSharedTextureMemoryDmaBufDescriptor*>(rhs);
    }
    inline WGPUSharedTextureMemoryDmaBufDescriptor* ToAPI(SharedTextureMemoryDmaBufDescriptor* rhs) {
        return reinterpret_cast<WGPUSharedTextureMemoryDmaBufDescriptor*>(rhs);
    }
    inline const WGPUSharedTextureMemoryDmaBufDescriptor* ToAPI(const WGPUSharedTextureMemoryDmaBufDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSharedTextureMemoryDmaBufDescriptor* ToAPI(WGPUSharedTextureMemoryDmaBufDescriptor* rhs) {
        return rhs;
    }
    inline const SharedTextureMemoryDmaBufDescriptor* FromAPI(const WGPUSharedTextureMemoryDmaBufDescriptor* rhs) {
        return reinterpret_cast<const SharedTextureMemoryDmaBufDescriptor*>(rhs);
    }
    inline SharedTextureMemoryDmaBufDescriptor* FromAPI(WGPUSharedTextureMemoryDmaBufDescriptor* rhs) {
        return reinterpret_cast<SharedTextureMemoryDmaBufDescriptor*>(rhs);
    }
    inline const SharedTextureMemoryDmaBufDescriptor* FromAPI(const SharedTextureMemoryDmaBufDescriptor* rhs) {
        return rhs;
    }
    inline SharedTextureMemoryDmaBufDescriptor* FromAPI(SharedTextureMemoryDmaBufDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SharedTextureMemoryDmaBufDescriptor* ToCppAPI(const SharedTextureMemoryDmaBufDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SharedTextureMemoryDmaBufDescriptor*>(rhs);
    }
    inline wgpu::SharedTextureMemoryDmaBufDescriptor* ToCppAPI(SharedTextureMemoryDmaBufDescriptor* rhs) {
        return reinterpret_cast<wgpu::SharedTextureMemoryDmaBufDescriptor*>(rhs);
    }
    inline const SharedTextureMemoryDmaBufDescriptor* FromCppAPI(const wgpu::SharedTextureMemoryDmaBufDescriptor* rhs) {
        return reinterpret_cast<const SharedTextureMemoryDmaBufDescriptor*>(rhs);
    }
    inline SharedTextureMemoryDmaBufDescriptor* FromCppAPI(wgpu::SharedTextureMemoryDmaBufDescriptor* rhs) {
        return reinterpret_cast<SharedTextureMemoryDmaBufDescriptor*>(rhs);
    }
inline const SharedTextureMemoryDmaBufDescriptor& FromAPI(const WGPUSharedTextureMemoryDmaBufDescriptor& rhs) {
        return *reinterpret_cast<const SharedTextureMemoryDmaBufDescriptor*>(&rhs);
    }
    inline SharedTextureMemoryDmaBufDescriptor& FromAPI(WGPUSharedTextureMemoryDmaBufDescriptor& rhs) {
        return *reinterpret_cast<SharedTextureMemoryDmaBufDescriptor*>(&rhs);
    }
    inline const SharedTextureMemoryDmaBufDescriptor& FromAPI(const SharedTextureMemoryDmaBufDescriptor& rhs) {
        return rhs;
    }
    inline SharedTextureMemoryDmaBufDescriptor& FromAPI(SharedTextureMemoryDmaBufDescriptor& rhs) {
        return rhs;
    }
inline const WGPUSharedTextureMemoryMetalEndAccessState* ToAPI(const SharedTextureMemoryMetalEndAccessState* rhs) {
        return reinterpret_cast<const WGPUSharedTextureMemoryMetalEndAccessState*>(rhs);
    }
    inline WGPUSharedTextureMemoryMetalEndAccessState* ToAPI(SharedTextureMemoryMetalEndAccessState* rhs) {
        return reinterpret_cast<WGPUSharedTextureMemoryMetalEndAccessState*>(rhs);
    }
    inline const WGPUSharedTextureMemoryMetalEndAccessState* ToAPI(const WGPUSharedTextureMemoryMetalEndAccessState* rhs) {
        return rhs;
    }
    inline WGPUSharedTextureMemoryMetalEndAccessState* ToAPI(WGPUSharedTextureMemoryMetalEndAccessState* rhs) {
        return rhs;
    }
    inline const SharedTextureMemoryMetalEndAccessState* FromAPI(const WGPUSharedTextureMemoryMetalEndAccessState* rhs) {
        return reinterpret_cast<const SharedTextureMemoryMetalEndAccessState*>(rhs);
    }
    inline SharedTextureMemoryMetalEndAccessState* FromAPI(WGPUSharedTextureMemoryMetalEndAccessState* rhs) {
        return reinterpret_cast<SharedTextureMemoryMetalEndAccessState*>(rhs);
    }
    inline const SharedTextureMemoryMetalEndAccessState* FromAPI(const SharedTextureMemoryMetalEndAccessState* rhs) {
        return rhs;
    }
    inline SharedTextureMemoryMetalEndAccessState* FromAPI(SharedTextureMemoryMetalEndAccessState* rhs) {
        return rhs;
    }
    inline const wgpu::SharedTextureMemoryMetalEndAccessState* ToCppAPI(const SharedTextureMemoryMetalEndAccessState* rhs) {
        return reinterpret_cast<const wgpu::SharedTextureMemoryMetalEndAccessState*>(rhs);
    }
    inline wgpu::SharedTextureMemoryMetalEndAccessState* ToCppAPI(SharedTextureMemoryMetalEndAccessState* rhs) {
        return reinterpret_cast<wgpu::SharedTextureMemoryMetalEndAccessState*>(rhs);
    }
    inline const SharedTextureMemoryMetalEndAccessState* FromCppAPI(const wgpu::SharedTextureMemoryMetalEndAccessState* rhs) {
        return reinterpret_cast<const SharedTextureMemoryMetalEndAccessState*>(rhs);
    }
    inline SharedTextureMemoryMetalEndAccessState* FromCppAPI(wgpu::SharedTextureMemoryMetalEndAccessState* rhs) {
        return reinterpret_cast<SharedTextureMemoryMetalEndAccessState*>(rhs);
    }
inline const SharedTextureMemoryMetalEndAccessState& FromAPI(const WGPUSharedTextureMemoryMetalEndAccessState& rhs) {
        return *reinterpret_cast<const SharedTextureMemoryMetalEndAccessState*>(&rhs);
    }
    inline SharedTextureMemoryMetalEndAccessState& FromAPI(WGPUSharedTextureMemoryMetalEndAccessState& rhs) {
        return *reinterpret_cast<SharedTextureMemoryMetalEndAccessState*>(&rhs);
    }
    inline const SharedTextureMemoryMetalEndAccessState& FromAPI(const SharedTextureMemoryMetalEndAccessState& rhs) {
        return rhs;
    }
    inline SharedTextureMemoryMetalEndAccessState& FromAPI(SharedTextureMemoryMetalEndAccessState& rhs) {
        return rhs;
    }
inline const WGPUSurfaceDescriptor* ToAPI(const SurfaceDescriptor* rhs) {
        return reinterpret_cast<const WGPUSurfaceDescriptor*>(rhs);
    }
    inline WGPUSurfaceDescriptor* ToAPI(SurfaceDescriptor* rhs) {
        return reinterpret_cast<WGPUSurfaceDescriptor*>(rhs);
    }
    inline const WGPUSurfaceDescriptor* ToAPI(const WGPUSurfaceDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSurfaceDescriptor* ToAPI(WGPUSurfaceDescriptor* rhs) {
        return rhs;
    }
    inline const SurfaceDescriptor* FromAPI(const WGPUSurfaceDescriptor* rhs) {
        return reinterpret_cast<const SurfaceDescriptor*>(rhs);
    }
    inline SurfaceDescriptor* FromAPI(WGPUSurfaceDescriptor* rhs) {
        return reinterpret_cast<SurfaceDescriptor*>(rhs);
    }
    inline const SurfaceDescriptor* FromAPI(const SurfaceDescriptor* rhs) {
        return rhs;
    }
    inline SurfaceDescriptor* FromAPI(SurfaceDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SurfaceDescriptor* ToCppAPI(const SurfaceDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SurfaceDescriptor*>(rhs);
    }
    inline wgpu::SurfaceDescriptor* ToCppAPI(SurfaceDescriptor* rhs) {
        return reinterpret_cast<wgpu::SurfaceDescriptor*>(rhs);
    }
    inline const SurfaceDescriptor* FromCppAPI(const wgpu::SurfaceDescriptor* rhs) {
        return reinterpret_cast<const SurfaceDescriptor*>(rhs);
    }
    inline SurfaceDescriptor* FromCppAPI(wgpu::SurfaceDescriptor* rhs) {
        return reinterpret_cast<SurfaceDescriptor*>(rhs);
    }
inline const SurfaceDescriptor& FromAPI(const WGPUSurfaceDescriptor& rhs) {
        return *reinterpret_cast<const SurfaceDescriptor*>(&rhs);
    }
    inline SurfaceDescriptor& FromAPI(WGPUSurfaceDescriptor& rhs) {
        return *reinterpret_cast<SurfaceDescriptor*>(&rhs);
    }
    inline const SurfaceDescriptor& FromAPI(const SurfaceDescriptor& rhs) {
        return rhs;
    }
    inline SurfaceDescriptor& FromAPI(SurfaceDescriptor& rhs) {
        return rhs;
    }
inline const WGPUTexelCopyBufferInfo* ToAPI(const TexelCopyBufferInfo* rhs) {
        return reinterpret_cast<const WGPUTexelCopyBufferInfo*>(rhs);
    }
    inline WGPUTexelCopyBufferInfo* ToAPI(TexelCopyBufferInfo* rhs) {
        return reinterpret_cast<WGPUTexelCopyBufferInfo*>(rhs);
    }
    inline const WGPUTexelCopyBufferInfo* ToAPI(const WGPUTexelCopyBufferInfo* rhs) {
        return rhs;
    }
    inline WGPUTexelCopyBufferInfo* ToAPI(WGPUTexelCopyBufferInfo* rhs) {
        return rhs;
    }
    inline const TexelCopyBufferInfo* FromAPI(const WGPUTexelCopyBufferInfo* rhs) {
        return reinterpret_cast<const TexelCopyBufferInfo*>(rhs);
    }
    inline TexelCopyBufferInfo* FromAPI(WGPUTexelCopyBufferInfo* rhs) {
        return reinterpret_cast<TexelCopyBufferInfo*>(rhs);
    }
    inline const TexelCopyBufferInfo* FromAPI(const TexelCopyBufferInfo* rhs) {
        return rhs;
    }
    inline TexelCopyBufferInfo* FromAPI(TexelCopyBufferInfo* rhs) {
        return rhs;
    }
    inline const wgpu::TexelCopyBufferInfo* ToCppAPI(const TexelCopyBufferInfo* rhs) {
        return reinterpret_cast<const wgpu::TexelCopyBufferInfo*>(rhs);
    }
    inline wgpu::TexelCopyBufferInfo* ToCppAPI(TexelCopyBufferInfo* rhs) {
        return reinterpret_cast<wgpu::TexelCopyBufferInfo*>(rhs);
    }
    inline const TexelCopyBufferInfo* FromCppAPI(const wgpu::TexelCopyBufferInfo* rhs) {
        return reinterpret_cast<const TexelCopyBufferInfo*>(rhs);
    }
    inline TexelCopyBufferInfo* FromCppAPI(wgpu::TexelCopyBufferInfo* rhs) {
        return reinterpret_cast<TexelCopyBufferInfo*>(rhs);
    }
inline const TexelCopyBufferInfo& FromAPI(const WGPUTexelCopyBufferInfo& rhs) {
        return *reinterpret_cast<const TexelCopyBufferInfo*>(&rhs);
    }
    inline TexelCopyBufferInfo& FromAPI(WGPUTexelCopyBufferInfo& rhs) {
        return *reinterpret_cast<TexelCopyBufferInfo*>(&rhs);
    }
    inline const TexelCopyBufferInfo& FromAPI(const TexelCopyBufferInfo& rhs) {
        return rhs;
    }
    inline TexelCopyBufferInfo& FromAPI(TexelCopyBufferInfo& rhs) {
        return rhs;
    }
inline const WGPUTexelCopyTextureInfo* ToAPI(const TexelCopyTextureInfo* rhs) {
        return reinterpret_cast<const WGPUTexelCopyTextureInfo*>(rhs);
    }
    inline WGPUTexelCopyTextureInfo* ToAPI(TexelCopyTextureInfo* rhs) {
        return reinterpret_cast<WGPUTexelCopyTextureInfo*>(rhs);
    }
    inline const WGPUTexelCopyTextureInfo* ToAPI(const WGPUTexelCopyTextureInfo* rhs) {
        return rhs;
    }
    inline WGPUTexelCopyTextureInfo* ToAPI(WGPUTexelCopyTextureInfo* rhs) {
        return rhs;
    }
    inline const TexelCopyTextureInfo* FromAPI(const WGPUTexelCopyTextureInfo* rhs) {
        return reinterpret_cast<const TexelCopyTextureInfo*>(rhs);
    }
    inline TexelCopyTextureInfo* FromAPI(WGPUTexelCopyTextureInfo* rhs) {
        return reinterpret_cast<TexelCopyTextureInfo*>(rhs);
    }
    inline const TexelCopyTextureInfo* FromAPI(const TexelCopyTextureInfo* rhs) {
        return rhs;
    }
    inline TexelCopyTextureInfo* FromAPI(TexelCopyTextureInfo* rhs) {
        return rhs;
    }
    inline const wgpu::TexelCopyTextureInfo* ToCppAPI(const TexelCopyTextureInfo* rhs) {
        return reinterpret_cast<const wgpu::TexelCopyTextureInfo*>(rhs);
    }
    inline wgpu::TexelCopyTextureInfo* ToCppAPI(TexelCopyTextureInfo* rhs) {
        return reinterpret_cast<wgpu::TexelCopyTextureInfo*>(rhs);
    }
    inline const TexelCopyTextureInfo* FromCppAPI(const wgpu::TexelCopyTextureInfo* rhs) {
        return reinterpret_cast<const TexelCopyTextureInfo*>(rhs);
    }
    inline TexelCopyTextureInfo* FromCppAPI(wgpu::TexelCopyTextureInfo* rhs) {
        return reinterpret_cast<TexelCopyTextureInfo*>(rhs);
    }
inline const TexelCopyTextureInfo& FromAPI(const WGPUTexelCopyTextureInfo& rhs) {
        return *reinterpret_cast<const TexelCopyTextureInfo*>(&rhs);
    }
    inline TexelCopyTextureInfo& FromAPI(WGPUTexelCopyTextureInfo& rhs) {
        return *reinterpret_cast<TexelCopyTextureInfo*>(&rhs);
    }
    inline const TexelCopyTextureInfo& FromAPI(const TexelCopyTextureInfo& rhs) {
        return rhs;
    }
    inline TexelCopyTextureInfo& FromAPI(TexelCopyTextureInfo& rhs) {
        return rhs;
    }
inline const WGPUTextureComponentSwizzleDescriptor* ToAPI(const TextureComponentSwizzleDescriptor* rhs) {
        return reinterpret_cast<const WGPUTextureComponentSwizzleDescriptor*>(rhs);
    }
    inline WGPUTextureComponentSwizzleDescriptor* ToAPI(TextureComponentSwizzleDescriptor* rhs) {
        return reinterpret_cast<WGPUTextureComponentSwizzleDescriptor*>(rhs);
    }
    inline const WGPUTextureComponentSwizzleDescriptor* ToAPI(const WGPUTextureComponentSwizzleDescriptor* rhs) {
        return rhs;
    }
    inline WGPUTextureComponentSwizzleDescriptor* ToAPI(WGPUTextureComponentSwizzleDescriptor* rhs) {
        return rhs;
    }
    inline const TextureComponentSwizzleDescriptor* FromAPI(const WGPUTextureComponentSwizzleDescriptor* rhs) {
        return reinterpret_cast<const TextureComponentSwizzleDescriptor*>(rhs);
    }
    inline TextureComponentSwizzleDescriptor* FromAPI(WGPUTextureComponentSwizzleDescriptor* rhs) {
        return reinterpret_cast<TextureComponentSwizzleDescriptor*>(rhs);
    }
    inline const TextureComponentSwizzleDescriptor* FromAPI(const TextureComponentSwizzleDescriptor* rhs) {
        return rhs;
    }
    inline TextureComponentSwizzleDescriptor* FromAPI(TextureComponentSwizzleDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::TextureComponentSwizzleDescriptor* ToCppAPI(const TextureComponentSwizzleDescriptor* rhs) {
        return reinterpret_cast<const wgpu::TextureComponentSwizzleDescriptor*>(rhs);
    }
    inline wgpu::TextureComponentSwizzleDescriptor* ToCppAPI(TextureComponentSwizzleDescriptor* rhs) {
        return reinterpret_cast<wgpu::TextureComponentSwizzleDescriptor*>(rhs);
    }
    inline const TextureComponentSwizzleDescriptor* FromCppAPI(const wgpu::TextureComponentSwizzleDescriptor* rhs) {
        return reinterpret_cast<const TextureComponentSwizzleDescriptor*>(rhs);
    }
    inline TextureComponentSwizzleDescriptor* FromCppAPI(wgpu::TextureComponentSwizzleDescriptor* rhs) {
        return reinterpret_cast<TextureComponentSwizzleDescriptor*>(rhs);
    }
inline const TextureComponentSwizzleDescriptor& FromAPI(const WGPUTextureComponentSwizzleDescriptor& rhs) {
        return *reinterpret_cast<const TextureComponentSwizzleDescriptor*>(&rhs);
    }
    inline TextureComponentSwizzleDescriptor& FromAPI(WGPUTextureComponentSwizzleDescriptor& rhs) {
        return *reinterpret_cast<TextureComponentSwizzleDescriptor*>(&rhs);
    }
    inline const TextureComponentSwizzleDescriptor& FromAPI(const TextureComponentSwizzleDescriptor& rhs) {
        return rhs;
    }
    inline TextureComponentSwizzleDescriptor& FromAPI(TextureComponentSwizzleDescriptor& rhs) {
        return rhs;
    }
inline const WGPUTextureDescriptor* ToAPI(const TextureDescriptor* rhs) {
        return reinterpret_cast<const WGPUTextureDescriptor*>(rhs);
    }
    inline WGPUTextureDescriptor* ToAPI(TextureDescriptor* rhs) {
        return reinterpret_cast<WGPUTextureDescriptor*>(rhs);
    }
    inline const WGPUTextureDescriptor* ToAPI(const WGPUTextureDescriptor* rhs) {
        return rhs;
    }
    inline WGPUTextureDescriptor* ToAPI(WGPUTextureDescriptor* rhs) {
        return rhs;
    }
    inline const TextureDescriptor* FromAPI(const WGPUTextureDescriptor* rhs) {
        return reinterpret_cast<const TextureDescriptor*>(rhs);
    }
    inline TextureDescriptor* FromAPI(WGPUTextureDescriptor* rhs) {
        return reinterpret_cast<TextureDescriptor*>(rhs);
    }
    inline const TextureDescriptor* FromAPI(const TextureDescriptor* rhs) {
        return rhs;
    }
    inline TextureDescriptor* FromAPI(TextureDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::TextureDescriptor* ToCppAPI(const TextureDescriptor* rhs) {
        return reinterpret_cast<const wgpu::TextureDescriptor*>(rhs);
    }
    inline wgpu::TextureDescriptor* ToCppAPI(TextureDescriptor* rhs) {
        return reinterpret_cast<wgpu::TextureDescriptor*>(rhs);
    }
    inline const TextureDescriptor* FromCppAPI(const wgpu::TextureDescriptor* rhs) {
        return reinterpret_cast<const TextureDescriptor*>(rhs);
    }
    inline TextureDescriptor* FromCppAPI(wgpu::TextureDescriptor* rhs) {
        return reinterpret_cast<TextureDescriptor*>(rhs);
    }
inline const TextureDescriptor& FromAPI(const WGPUTextureDescriptor& rhs) {
        return *reinterpret_cast<const TextureDescriptor*>(&rhs);
    }
    inline TextureDescriptor& FromAPI(WGPUTextureDescriptor& rhs) {
        return *reinterpret_cast<TextureDescriptor*>(&rhs);
    }
    inline const TextureDescriptor& FromAPI(const TextureDescriptor& rhs) {
        return rhs;
    }
    inline TextureDescriptor& FromAPI(TextureDescriptor& rhs) {
        return rhs;
    }
inline const WGPUVertexBufferLayout* ToAPI(const VertexBufferLayout* rhs) {
        return reinterpret_cast<const WGPUVertexBufferLayout*>(rhs);
    }
    inline WGPUVertexBufferLayout* ToAPI(VertexBufferLayout* rhs) {
        return reinterpret_cast<WGPUVertexBufferLayout*>(rhs);
    }
    inline const WGPUVertexBufferLayout* ToAPI(const WGPUVertexBufferLayout* rhs) {
        return rhs;
    }
    inline WGPUVertexBufferLayout* ToAPI(WGPUVertexBufferLayout* rhs) {
        return rhs;
    }
    inline const VertexBufferLayout* FromAPI(const WGPUVertexBufferLayout* rhs) {
        return reinterpret_cast<const VertexBufferLayout*>(rhs);
    }
    inline VertexBufferLayout* FromAPI(WGPUVertexBufferLayout* rhs) {
        return reinterpret_cast<VertexBufferLayout*>(rhs);
    }
    inline const VertexBufferLayout* FromAPI(const VertexBufferLayout* rhs) {
        return rhs;
    }
    inline VertexBufferLayout* FromAPI(VertexBufferLayout* rhs) {
        return rhs;
    }
    inline const wgpu::VertexBufferLayout* ToCppAPI(const VertexBufferLayout* rhs) {
        return reinterpret_cast<const wgpu::VertexBufferLayout*>(rhs);
    }
    inline wgpu::VertexBufferLayout* ToCppAPI(VertexBufferLayout* rhs) {
        return reinterpret_cast<wgpu::VertexBufferLayout*>(rhs);
    }
    inline const VertexBufferLayout* FromCppAPI(const wgpu::VertexBufferLayout* rhs) {
        return reinterpret_cast<const VertexBufferLayout*>(rhs);
    }
    inline VertexBufferLayout* FromCppAPI(wgpu::VertexBufferLayout* rhs) {
        return reinterpret_cast<VertexBufferLayout*>(rhs);
    }
inline const VertexBufferLayout& FromAPI(const WGPUVertexBufferLayout& rhs) {
        return *reinterpret_cast<const VertexBufferLayout*>(&rhs);
    }
    inline VertexBufferLayout& FromAPI(WGPUVertexBufferLayout& rhs) {
        return *reinterpret_cast<VertexBufferLayout*>(&rhs);
    }
    inline const VertexBufferLayout& FromAPI(const VertexBufferLayout& rhs) {
        return rhs;
    }
    inline VertexBufferLayout& FromAPI(VertexBufferLayout& rhs) {
        return rhs;
    }
inline const WGPUAdapterInfo* ToAPI(const AdapterInfo* rhs) {
        return reinterpret_cast<const WGPUAdapterInfo*>(rhs);
    }
    inline WGPUAdapterInfo* ToAPI(AdapterInfo* rhs) {
        return reinterpret_cast<WGPUAdapterInfo*>(rhs);
    }
    inline const WGPUAdapterInfo* ToAPI(const WGPUAdapterInfo* rhs) {
        return rhs;
    }
    inline WGPUAdapterInfo* ToAPI(WGPUAdapterInfo* rhs) {
        return rhs;
    }
    inline const AdapterInfo* FromAPI(const WGPUAdapterInfo* rhs) {
        return reinterpret_cast<const AdapterInfo*>(rhs);
    }
    inline AdapterInfo* FromAPI(WGPUAdapterInfo* rhs) {
        return reinterpret_cast<AdapterInfo*>(rhs);
    }
    inline const AdapterInfo* FromAPI(const AdapterInfo* rhs) {
        return rhs;
    }
    inline AdapterInfo* FromAPI(AdapterInfo* rhs) {
        return rhs;
    }
    inline const wgpu::AdapterInfo* ToCppAPI(const AdapterInfo* rhs) {
        return reinterpret_cast<const wgpu::AdapterInfo*>(rhs);
    }
    inline wgpu::AdapterInfo* ToCppAPI(AdapterInfo* rhs) {
        return reinterpret_cast<wgpu::AdapterInfo*>(rhs);
    }
    inline const AdapterInfo* FromCppAPI(const wgpu::AdapterInfo* rhs) {
        return reinterpret_cast<const AdapterInfo*>(rhs);
    }
    inline AdapterInfo* FromCppAPI(wgpu::AdapterInfo* rhs) {
        return reinterpret_cast<AdapterInfo*>(rhs);
    }
inline const AdapterInfo& FromAPI(const WGPUAdapterInfo& rhs) {
        return *reinterpret_cast<const AdapterInfo*>(&rhs);
    }
    inline AdapterInfo& FromAPI(WGPUAdapterInfo& rhs) {
        return *reinterpret_cast<AdapterInfo*>(&rhs);
    }
    inline const AdapterInfo& FromAPI(const AdapterInfo& rhs) {
        return rhs;
    }
    inline AdapterInfo& FromAPI(AdapterInfo& rhs) {
        return rhs;
    }
inline const WGPUBindGroupDescriptor* ToAPI(const BindGroupDescriptor* rhs) {
        return reinterpret_cast<const WGPUBindGroupDescriptor*>(rhs);
    }
    inline WGPUBindGroupDescriptor* ToAPI(BindGroupDescriptor* rhs) {
        return reinterpret_cast<WGPUBindGroupDescriptor*>(rhs);
    }
    inline const WGPUBindGroupDescriptor* ToAPI(const WGPUBindGroupDescriptor* rhs) {
        return rhs;
    }
    inline WGPUBindGroupDescriptor* ToAPI(WGPUBindGroupDescriptor* rhs) {
        return rhs;
    }
    inline const BindGroupDescriptor* FromAPI(const WGPUBindGroupDescriptor* rhs) {
        return reinterpret_cast<const BindGroupDescriptor*>(rhs);
    }
    inline BindGroupDescriptor* FromAPI(WGPUBindGroupDescriptor* rhs) {
        return reinterpret_cast<BindGroupDescriptor*>(rhs);
    }
    inline const BindGroupDescriptor* FromAPI(const BindGroupDescriptor* rhs) {
        return rhs;
    }
    inline BindGroupDescriptor* FromAPI(BindGroupDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::BindGroupDescriptor* ToCppAPI(const BindGroupDescriptor* rhs) {
        return reinterpret_cast<const wgpu::BindGroupDescriptor*>(rhs);
    }
    inline wgpu::BindGroupDescriptor* ToCppAPI(BindGroupDescriptor* rhs) {
        return reinterpret_cast<wgpu::BindGroupDescriptor*>(rhs);
    }
    inline const BindGroupDescriptor* FromCppAPI(const wgpu::BindGroupDescriptor* rhs) {
        return reinterpret_cast<const BindGroupDescriptor*>(rhs);
    }
    inline BindGroupDescriptor* FromCppAPI(wgpu::BindGroupDescriptor* rhs) {
        return reinterpret_cast<BindGroupDescriptor*>(rhs);
    }
inline const BindGroupDescriptor& FromAPI(const WGPUBindGroupDescriptor& rhs) {
        return *reinterpret_cast<const BindGroupDescriptor*>(&rhs);
    }
    inline BindGroupDescriptor& FromAPI(WGPUBindGroupDescriptor& rhs) {
        return *reinterpret_cast<BindGroupDescriptor*>(&rhs);
    }
    inline const BindGroupDescriptor& FromAPI(const BindGroupDescriptor& rhs) {
        return rhs;
    }
    inline BindGroupDescriptor& FromAPI(BindGroupDescriptor& rhs) {
        return rhs;
    }
inline const WGPUBindGroupLayoutDescriptor* ToAPI(const BindGroupLayoutDescriptor* rhs) {
        return reinterpret_cast<const WGPUBindGroupLayoutDescriptor*>(rhs);
    }
    inline WGPUBindGroupLayoutDescriptor* ToAPI(BindGroupLayoutDescriptor* rhs) {
        return reinterpret_cast<WGPUBindGroupLayoutDescriptor*>(rhs);
    }
    inline const WGPUBindGroupLayoutDescriptor* ToAPI(const WGPUBindGroupLayoutDescriptor* rhs) {
        return rhs;
    }
    inline WGPUBindGroupLayoutDescriptor* ToAPI(WGPUBindGroupLayoutDescriptor* rhs) {
        return rhs;
    }
    inline const BindGroupLayoutDescriptor* FromAPI(const WGPUBindGroupLayoutDescriptor* rhs) {
        return reinterpret_cast<const BindGroupLayoutDescriptor*>(rhs);
    }
    inline BindGroupLayoutDescriptor* FromAPI(WGPUBindGroupLayoutDescriptor* rhs) {
        return reinterpret_cast<BindGroupLayoutDescriptor*>(rhs);
    }
    inline const BindGroupLayoutDescriptor* FromAPI(const BindGroupLayoutDescriptor* rhs) {
        return rhs;
    }
    inline BindGroupLayoutDescriptor* FromAPI(BindGroupLayoutDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::BindGroupLayoutDescriptor* ToCppAPI(const BindGroupLayoutDescriptor* rhs) {
        return reinterpret_cast<const wgpu::BindGroupLayoutDescriptor*>(rhs);
    }
    inline wgpu::BindGroupLayoutDescriptor* ToCppAPI(BindGroupLayoutDescriptor* rhs) {
        return reinterpret_cast<wgpu::BindGroupLayoutDescriptor*>(rhs);
    }
    inline const BindGroupLayoutDescriptor* FromCppAPI(const wgpu::BindGroupLayoutDescriptor* rhs) {
        return reinterpret_cast<const BindGroupLayoutDescriptor*>(rhs);
    }
    inline BindGroupLayoutDescriptor* FromCppAPI(wgpu::BindGroupLayoutDescriptor* rhs) {
        return reinterpret_cast<BindGroupLayoutDescriptor*>(rhs);
    }
inline const BindGroupLayoutDescriptor& FromAPI(const WGPUBindGroupLayoutDescriptor& rhs) {
        return *reinterpret_cast<const BindGroupLayoutDescriptor*>(&rhs);
    }
    inline BindGroupLayoutDescriptor& FromAPI(WGPUBindGroupLayoutDescriptor& rhs) {
        return *reinterpret_cast<BindGroupLayoutDescriptor*>(&rhs);
    }
    inline const BindGroupLayoutDescriptor& FromAPI(const BindGroupLayoutDescriptor& rhs) {
        return rhs;
    }
    inline BindGroupLayoutDescriptor& FromAPI(BindGroupLayoutDescriptor& rhs) {
        return rhs;
    }
inline const WGPUColorTargetState* ToAPI(const ColorTargetState* rhs) {
        return reinterpret_cast<const WGPUColorTargetState*>(rhs);
    }
    inline WGPUColorTargetState* ToAPI(ColorTargetState* rhs) {
        return reinterpret_cast<WGPUColorTargetState*>(rhs);
    }
    inline const WGPUColorTargetState* ToAPI(const WGPUColorTargetState* rhs) {
        return rhs;
    }
    inline WGPUColorTargetState* ToAPI(WGPUColorTargetState* rhs) {
        return rhs;
    }
    inline const ColorTargetState* FromAPI(const WGPUColorTargetState* rhs) {
        return reinterpret_cast<const ColorTargetState*>(rhs);
    }
    inline ColorTargetState* FromAPI(WGPUColorTargetState* rhs) {
        return reinterpret_cast<ColorTargetState*>(rhs);
    }
    inline const ColorTargetState* FromAPI(const ColorTargetState* rhs) {
        return rhs;
    }
    inline ColorTargetState* FromAPI(ColorTargetState* rhs) {
        return rhs;
    }
    inline const wgpu::ColorTargetState* ToCppAPI(const ColorTargetState* rhs) {
        return reinterpret_cast<const wgpu::ColorTargetState*>(rhs);
    }
    inline wgpu::ColorTargetState* ToCppAPI(ColorTargetState* rhs) {
        return reinterpret_cast<wgpu::ColorTargetState*>(rhs);
    }
    inline const ColorTargetState* FromCppAPI(const wgpu::ColorTargetState* rhs) {
        return reinterpret_cast<const ColorTargetState*>(rhs);
    }
    inline ColorTargetState* FromCppAPI(wgpu::ColorTargetState* rhs) {
        return reinterpret_cast<ColorTargetState*>(rhs);
    }
inline const ColorTargetState& FromAPI(const WGPUColorTargetState& rhs) {
        return *reinterpret_cast<const ColorTargetState*>(&rhs);
    }
    inline ColorTargetState& FromAPI(WGPUColorTargetState& rhs) {
        return *reinterpret_cast<ColorTargetState*>(&rhs);
    }
    inline const ColorTargetState& FromAPI(const ColorTargetState& rhs) {
        return rhs;
    }
    inline ColorTargetState& FromAPI(ColorTargetState& rhs) {
        return rhs;
    }
inline const WGPUCompilationInfo* ToAPI(const CompilationInfo* rhs) {
        return reinterpret_cast<const WGPUCompilationInfo*>(rhs);
    }
    inline WGPUCompilationInfo* ToAPI(CompilationInfo* rhs) {
        return reinterpret_cast<WGPUCompilationInfo*>(rhs);
    }
    inline const WGPUCompilationInfo* ToAPI(const WGPUCompilationInfo* rhs) {
        return rhs;
    }
    inline WGPUCompilationInfo* ToAPI(WGPUCompilationInfo* rhs) {
        return rhs;
    }
    inline const CompilationInfo* FromAPI(const WGPUCompilationInfo* rhs) {
        return reinterpret_cast<const CompilationInfo*>(rhs);
    }
    inline CompilationInfo* FromAPI(WGPUCompilationInfo* rhs) {
        return reinterpret_cast<CompilationInfo*>(rhs);
    }
    inline const CompilationInfo* FromAPI(const CompilationInfo* rhs) {
        return rhs;
    }
    inline CompilationInfo* FromAPI(CompilationInfo* rhs) {
        return rhs;
    }
    inline const wgpu::CompilationInfo* ToCppAPI(const CompilationInfo* rhs) {
        return reinterpret_cast<const wgpu::CompilationInfo*>(rhs);
    }
    inline wgpu::CompilationInfo* ToCppAPI(CompilationInfo* rhs) {
        return reinterpret_cast<wgpu::CompilationInfo*>(rhs);
    }
    inline const CompilationInfo* FromCppAPI(const wgpu::CompilationInfo* rhs) {
        return reinterpret_cast<const CompilationInfo*>(rhs);
    }
    inline CompilationInfo* FromCppAPI(wgpu::CompilationInfo* rhs) {
        return reinterpret_cast<CompilationInfo*>(rhs);
    }
inline const CompilationInfo& FromAPI(const WGPUCompilationInfo& rhs) {
        return *reinterpret_cast<const CompilationInfo*>(&rhs);
    }
    inline CompilationInfo& FromAPI(WGPUCompilationInfo& rhs) {
        return *reinterpret_cast<CompilationInfo*>(&rhs);
    }
    inline const CompilationInfo& FromAPI(const CompilationInfo& rhs) {
        return rhs;
    }
    inline CompilationInfo& FromAPI(CompilationInfo& rhs) {
        return rhs;
    }
inline const WGPUComputePipelineDescriptor* ToAPI(const ComputePipelineDescriptor* rhs) {
        return reinterpret_cast<const WGPUComputePipelineDescriptor*>(rhs);
    }
    inline WGPUComputePipelineDescriptor* ToAPI(ComputePipelineDescriptor* rhs) {
        return reinterpret_cast<WGPUComputePipelineDescriptor*>(rhs);
    }
    inline const WGPUComputePipelineDescriptor* ToAPI(const WGPUComputePipelineDescriptor* rhs) {
        return rhs;
    }
    inline WGPUComputePipelineDescriptor* ToAPI(WGPUComputePipelineDescriptor* rhs) {
        return rhs;
    }
    inline const ComputePipelineDescriptor* FromAPI(const WGPUComputePipelineDescriptor* rhs) {
        return reinterpret_cast<const ComputePipelineDescriptor*>(rhs);
    }
    inline ComputePipelineDescriptor* FromAPI(WGPUComputePipelineDescriptor* rhs) {
        return reinterpret_cast<ComputePipelineDescriptor*>(rhs);
    }
    inline const ComputePipelineDescriptor* FromAPI(const ComputePipelineDescriptor* rhs) {
        return rhs;
    }
    inline ComputePipelineDescriptor* FromAPI(ComputePipelineDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::ComputePipelineDescriptor* ToCppAPI(const ComputePipelineDescriptor* rhs) {
        return reinterpret_cast<const wgpu::ComputePipelineDescriptor*>(rhs);
    }
    inline wgpu::ComputePipelineDescriptor* ToCppAPI(ComputePipelineDescriptor* rhs) {
        return reinterpret_cast<wgpu::ComputePipelineDescriptor*>(rhs);
    }
    inline const ComputePipelineDescriptor* FromCppAPI(const wgpu::ComputePipelineDescriptor* rhs) {
        return reinterpret_cast<const ComputePipelineDescriptor*>(rhs);
    }
    inline ComputePipelineDescriptor* FromCppAPI(wgpu::ComputePipelineDescriptor* rhs) {
        return reinterpret_cast<ComputePipelineDescriptor*>(rhs);
    }
inline const ComputePipelineDescriptor& FromAPI(const WGPUComputePipelineDescriptor& rhs) {
        return *reinterpret_cast<const ComputePipelineDescriptor*>(&rhs);
    }
    inline ComputePipelineDescriptor& FromAPI(WGPUComputePipelineDescriptor& rhs) {
        return *reinterpret_cast<ComputePipelineDescriptor*>(&rhs);
    }
    inline const ComputePipelineDescriptor& FromAPI(const ComputePipelineDescriptor& rhs) {
        return rhs;
    }
    inline ComputePipelineDescriptor& FromAPI(ComputePipelineDescriptor& rhs) {
        return rhs;
    }
inline const WGPUDawnFormatCapabilities* ToAPI(const DawnFormatCapabilities* rhs) {
        return reinterpret_cast<const WGPUDawnFormatCapabilities*>(rhs);
    }
    inline WGPUDawnFormatCapabilities* ToAPI(DawnFormatCapabilities* rhs) {
        return reinterpret_cast<WGPUDawnFormatCapabilities*>(rhs);
    }
    inline const WGPUDawnFormatCapabilities* ToAPI(const WGPUDawnFormatCapabilities* rhs) {
        return rhs;
    }
    inline WGPUDawnFormatCapabilities* ToAPI(WGPUDawnFormatCapabilities* rhs) {
        return rhs;
    }
    inline const DawnFormatCapabilities* FromAPI(const WGPUDawnFormatCapabilities* rhs) {
        return reinterpret_cast<const DawnFormatCapabilities*>(rhs);
    }
    inline DawnFormatCapabilities* FromAPI(WGPUDawnFormatCapabilities* rhs) {
        return reinterpret_cast<DawnFormatCapabilities*>(rhs);
    }
    inline const DawnFormatCapabilities* FromAPI(const DawnFormatCapabilities* rhs) {
        return rhs;
    }
    inline DawnFormatCapabilities* FromAPI(DawnFormatCapabilities* rhs) {
        return rhs;
    }
    inline const wgpu::DawnFormatCapabilities* ToCppAPI(const DawnFormatCapabilities* rhs) {
        return reinterpret_cast<const wgpu::DawnFormatCapabilities*>(rhs);
    }
    inline wgpu::DawnFormatCapabilities* ToCppAPI(DawnFormatCapabilities* rhs) {
        return reinterpret_cast<wgpu::DawnFormatCapabilities*>(rhs);
    }
    inline const DawnFormatCapabilities* FromCppAPI(const wgpu::DawnFormatCapabilities* rhs) {
        return reinterpret_cast<const DawnFormatCapabilities*>(rhs);
    }
    inline DawnFormatCapabilities* FromCppAPI(wgpu::DawnFormatCapabilities* rhs) {
        return reinterpret_cast<DawnFormatCapabilities*>(rhs);
    }
inline const DawnFormatCapabilities& FromAPI(const WGPUDawnFormatCapabilities& rhs) {
        return *reinterpret_cast<const DawnFormatCapabilities*>(&rhs);
    }
    inline DawnFormatCapabilities& FromAPI(WGPUDawnFormatCapabilities& rhs) {
        return *reinterpret_cast<DawnFormatCapabilities*>(&rhs);
    }
    inline const DawnFormatCapabilities& FromAPI(const DawnFormatCapabilities& rhs) {
        return rhs;
    }
    inline DawnFormatCapabilities& FromAPI(DawnFormatCapabilities& rhs) {
        return rhs;
    }
inline const WGPUDeviceDescriptor* ToAPI(const DeviceDescriptor* rhs) {
        return reinterpret_cast<const WGPUDeviceDescriptor*>(rhs);
    }
    inline WGPUDeviceDescriptor* ToAPI(DeviceDescriptor* rhs) {
        return reinterpret_cast<WGPUDeviceDescriptor*>(rhs);
    }
    inline const WGPUDeviceDescriptor* ToAPI(const WGPUDeviceDescriptor* rhs) {
        return rhs;
    }
    inline WGPUDeviceDescriptor* ToAPI(WGPUDeviceDescriptor* rhs) {
        return rhs;
    }
    inline const DeviceDescriptor* FromAPI(const WGPUDeviceDescriptor* rhs) {
        return reinterpret_cast<const DeviceDescriptor*>(rhs);
    }
    inline DeviceDescriptor* FromAPI(WGPUDeviceDescriptor* rhs) {
        return reinterpret_cast<DeviceDescriptor*>(rhs);
    }
    inline const DeviceDescriptor* FromAPI(const DeviceDescriptor* rhs) {
        return rhs;
    }
    inline DeviceDescriptor* FromAPI(DeviceDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::DeviceDescriptor* ToCppAPI(const DeviceDescriptor* rhs) {
        return reinterpret_cast<const wgpu::DeviceDescriptor*>(rhs);
    }
    inline wgpu::DeviceDescriptor* ToCppAPI(DeviceDescriptor* rhs) {
        return reinterpret_cast<wgpu::DeviceDescriptor*>(rhs);
    }
    inline const DeviceDescriptor* FromCppAPI(const wgpu::DeviceDescriptor* rhs) {
        return reinterpret_cast<const DeviceDescriptor*>(rhs);
    }
    inline DeviceDescriptor* FromCppAPI(wgpu::DeviceDescriptor* rhs) {
        return reinterpret_cast<DeviceDescriptor*>(rhs);
    }
inline const DeviceDescriptor& FromAPI(const WGPUDeviceDescriptor& rhs) {
        return *reinterpret_cast<const DeviceDescriptor*>(&rhs);
    }
    inline DeviceDescriptor& FromAPI(WGPUDeviceDescriptor& rhs) {
        return *reinterpret_cast<DeviceDescriptor*>(&rhs);
    }
    inline const DeviceDescriptor& FromAPI(const DeviceDescriptor& rhs) {
        return rhs;
    }
    inline DeviceDescriptor& FromAPI(DeviceDescriptor& rhs) {
        return rhs;
    }
inline const WGPUPipelineLayoutDescriptor* ToAPI(const PipelineLayoutDescriptor* rhs) {
        return reinterpret_cast<const WGPUPipelineLayoutDescriptor*>(rhs);
    }
    inline WGPUPipelineLayoutDescriptor* ToAPI(PipelineLayoutDescriptor* rhs) {
        return reinterpret_cast<WGPUPipelineLayoutDescriptor*>(rhs);
    }
    inline const WGPUPipelineLayoutDescriptor* ToAPI(const WGPUPipelineLayoutDescriptor* rhs) {
        return rhs;
    }
    inline WGPUPipelineLayoutDescriptor* ToAPI(WGPUPipelineLayoutDescriptor* rhs) {
        return rhs;
    }
    inline const PipelineLayoutDescriptor* FromAPI(const WGPUPipelineLayoutDescriptor* rhs) {
        return reinterpret_cast<const PipelineLayoutDescriptor*>(rhs);
    }
    inline PipelineLayoutDescriptor* FromAPI(WGPUPipelineLayoutDescriptor* rhs) {
        return reinterpret_cast<PipelineLayoutDescriptor*>(rhs);
    }
    inline const PipelineLayoutDescriptor* FromAPI(const PipelineLayoutDescriptor* rhs) {
        return rhs;
    }
    inline PipelineLayoutDescriptor* FromAPI(PipelineLayoutDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::PipelineLayoutDescriptor* ToCppAPI(const PipelineLayoutDescriptor* rhs) {
        return reinterpret_cast<const wgpu::PipelineLayoutDescriptor*>(rhs);
    }
    inline wgpu::PipelineLayoutDescriptor* ToCppAPI(PipelineLayoutDescriptor* rhs) {
        return reinterpret_cast<wgpu::PipelineLayoutDescriptor*>(rhs);
    }
    inline const PipelineLayoutDescriptor* FromCppAPI(const wgpu::PipelineLayoutDescriptor* rhs) {
        return reinterpret_cast<const PipelineLayoutDescriptor*>(rhs);
    }
    inline PipelineLayoutDescriptor* FromCppAPI(wgpu::PipelineLayoutDescriptor* rhs) {
        return reinterpret_cast<PipelineLayoutDescriptor*>(rhs);
    }
inline const PipelineLayoutDescriptor& FromAPI(const WGPUPipelineLayoutDescriptor& rhs) {
        return *reinterpret_cast<const PipelineLayoutDescriptor*>(&rhs);
    }
    inline PipelineLayoutDescriptor& FromAPI(WGPUPipelineLayoutDescriptor& rhs) {
        return *reinterpret_cast<PipelineLayoutDescriptor*>(&rhs);
    }
    inline const PipelineLayoutDescriptor& FromAPI(const PipelineLayoutDescriptor& rhs) {
        return rhs;
    }
    inline PipelineLayoutDescriptor& FromAPI(PipelineLayoutDescriptor& rhs) {
        return rhs;
    }
inline const WGPURenderPassPixelLocalStorage* ToAPI(const RenderPassPixelLocalStorage* rhs) {
        return reinterpret_cast<const WGPURenderPassPixelLocalStorage*>(rhs);
    }
    inline WGPURenderPassPixelLocalStorage* ToAPI(RenderPassPixelLocalStorage* rhs) {
        return reinterpret_cast<WGPURenderPassPixelLocalStorage*>(rhs);
    }
    inline const WGPURenderPassPixelLocalStorage* ToAPI(const WGPURenderPassPixelLocalStorage* rhs) {
        return rhs;
    }
    inline WGPURenderPassPixelLocalStorage* ToAPI(WGPURenderPassPixelLocalStorage* rhs) {
        return rhs;
    }
    inline const RenderPassPixelLocalStorage* FromAPI(const WGPURenderPassPixelLocalStorage* rhs) {
        return reinterpret_cast<const RenderPassPixelLocalStorage*>(rhs);
    }
    inline RenderPassPixelLocalStorage* FromAPI(WGPURenderPassPixelLocalStorage* rhs) {
        return reinterpret_cast<RenderPassPixelLocalStorage*>(rhs);
    }
    inline const RenderPassPixelLocalStorage* FromAPI(const RenderPassPixelLocalStorage* rhs) {
        return rhs;
    }
    inline RenderPassPixelLocalStorage* FromAPI(RenderPassPixelLocalStorage* rhs) {
        return rhs;
    }
    inline const wgpu::RenderPassPixelLocalStorage* ToCppAPI(const RenderPassPixelLocalStorage* rhs) {
        return reinterpret_cast<const wgpu::RenderPassPixelLocalStorage*>(rhs);
    }
    inline wgpu::RenderPassPixelLocalStorage* ToCppAPI(RenderPassPixelLocalStorage* rhs) {
        return reinterpret_cast<wgpu::RenderPassPixelLocalStorage*>(rhs);
    }
    inline const RenderPassPixelLocalStorage* FromCppAPI(const wgpu::RenderPassPixelLocalStorage* rhs) {
        return reinterpret_cast<const RenderPassPixelLocalStorage*>(rhs);
    }
    inline RenderPassPixelLocalStorage* FromCppAPI(wgpu::RenderPassPixelLocalStorage* rhs) {
        return reinterpret_cast<RenderPassPixelLocalStorage*>(rhs);
    }
inline const RenderPassPixelLocalStorage& FromAPI(const WGPURenderPassPixelLocalStorage& rhs) {
        return *reinterpret_cast<const RenderPassPixelLocalStorage*>(&rhs);
    }
    inline RenderPassPixelLocalStorage& FromAPI(WGPURenderPassPixelLocalStorage& rhs) {
        return *reinterpret_cast<RenderPassPixelLocalStorage*>(&rhs);
    }
    inline const RenderPassPixelLocalStorage& FromAPI(const RenderPassPixelLocalStorage& rhs) {
        return rhs;
    }
    inline RenderPassPixelLocalStorage& FromAPI(RenderPassPixelLocalStorage& rhs) {
        return rhs;
    }
inline const WGPUSharedTextureMemoryDescriptor* ToAPI(const SharedTextureMemoryDescriptor* rhs) {
        return reinterpret_cast<const WGPUSharedTextureMemoryDescriptor*>(rhs);
    }
    inline WGPUSharedTextureMemoryDescriptor* ToAPI(SharedTextureMemoryDescriptor* rhs) {
        return reinterpret_cast<WGPUSharedTextureMemoryDescriptor*>(rhs);
    }
    inline const WGPUSharedTextureMemoryDescriptor* ToAPI(const WGPUSharedTextureMemoryDescriptor* rhs) {
        return rhs;
    }
    inline WGPUSharedTextureMemoryDescriptor* ToAPI(WGPUSharedTextureMemoryDescriptor* rhs) {
        return rhs;
    }
    inline const SharedTextureMemoryDescriptor* FromAPI(const WGPUSharedTextureMemoryDescriptor* rhs) {
        return reinterpret_cast<const SharedTextureMemoryDescriptor*>(rhs);
    }
    inline SharedTextureMemoryDescriptor* FromAPI(WGPUSharedTextureMemoryDescriptor* rhs) {
        return reinterpret_cast<SharedTextureMemoryDescriptor*>(rhs);
    }
    inline const SharedTextureMemoryDescriptor* FromAPI(const SharedTextureMemoryDescriptor* rhs) {
        return rhs;
    }
    inline SharedTextureMemoryDescriptor* FromAPI(SharedTextureMemoryDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::SharedTextureMemoryDescriptor* ToCppAPI(const SharedTextureMemoryDescriptor* rhs) {
        return reinterpret_cast<const wgpu::SharedTextureMemoryDescriptor*>(rhs);
    }
    inline wgpu::SharedTextureMemoryDescriptor* ToCppAPI(SharedTextureMemoryDescriptor* rhs) {
        return reinterpret_cast<wgpu::SharedTextureMemoryDescriptor*>(rhs);
    }
    inline const SharedTextureMemoryDescriptor* FromCppAPI(const wgpu::SharedTextureMemoryDescriptor* rhs) {
        return reinterpret_cast<const SharedTextureMemoryDescriptor*>(rhs);
    }
    inline SharedTextureMemoryDescriptor* FromCppAPI(wgpu::SharedTextureMemoryDescriptor* rhs) {
        return reinterpret_cast<SharedTextureMemoryDescriptor*>(rhs);
    }
inline const SharedTextureMemoryDescriptor& FromAPI(const WGPUSharedTextureMemoryDescriptor& rhs) {
        return *reinterpret_cast<const SharedTextureMemoryDescriptor*>(&rhs);
    }
    inline SharedTextureMemoryDescriptor& FromAPI(WGPUSharedTextureMemoryDescriptor& rhs) {
        return *reinterpret_cast<SharedTextureMemoryDescriptor*>(&rhs);
    }
    inline const SharedTextureMemoryDescriptor& FromAPI(const SharedTextureMemoryDescriptor& rhs) {
        return rhs;
    }
    inline SharedTextureMemoryDescriptor& FromAPI(SharedTextureMemoryDescriptor& rhs) {
        return rhs;
    }
inline const WGPUSharedTextureMemoryEndAccessState* ToAPI(const SharedTextureMemoryEndAccessState* rhs) {
        return reinterpret_cast<const WGPUSharedTextureMemoryEndAccessState*>(rhs);
    }
    inline WGPUSharedTextureMemoryEndAccessState* ToAPI(SharedTextureMemoryEndAccessState* rhs) {
        return reinterpret_cast<WGPUSharedTextureMemoryEndAccessState*>(rhs);
    }
    inline const WGPUSharedTextureMemoryEndAccessState* ToAPI(const WGPUSharedTextureMemoryEndAccessState* rhs) {
        return rhs;
    }
    inline WGPUSharedTextureMemoryEndAccessState* ToAPI(WGPUSharedTextureMemoryEndAccessState* rhs) {
        return rhs;
    }
    inline const SharedTextureMemoryEndAccessState* FromAPI(const WGPUSharedTextureMemoryEndAccessState* rhs) {
        return reinterpret_cast<const SharedTextureMemoryEndAccessState*>(rhs);
    }
    inline SharedTextureMemoryEndAccessState* FromAPI(WGPUSharedTextureMemoryEndAccessState* rhs) {
        return reinterpret_cast<SharedTextureMemoryEndAccessState*>(rhs);
    }
    inline const SharedTextureMemoryEndAccessState* FromAPI(const SharedTextureMemoryEndAccessState* rhs) {
        return rhs;
    }
    inline SharedTextureMemoryEndAccessState* FromAPI(SharedTextureMemoryEndAccessState* rhs) {
        return rhs;
    }
    inline const wgpu::SharedTextureMemoryEndAccessState* ToCppAPI(const SharedTextureMemoryEndAccessState* rhs) {
        return reinterpret_cast<const wgpu::SharedTextureMemoryEndAccessState*>(rhs);
    }
    inline wgpu::SharedTextureMemoryEndAccessState* ToCppAPI(SharedTextureMemoryEndAccessState* rhs) {
        return reinterpret_cast<wgpu::SharedTextureMemoryEndAccessState*>(rhs);
    }
    inline const SharedTextureMemoryEndAccessState* FromCppAPI(const wgpu::SharedTextureMemoryEndAccessState* rhs) {
        return reinterpret_cast<const SharedTextureMemoryEndAccessState*>(rhs);
    }
    inline SharedTextureMemoryEndAccessState* FromCppAPI(wgpu::SharedTextureMemoryEndAccessState* rhs) {
        return reinterpret_cast<SharedTextureMemoryEndAccessState*>(rhs);
    }
inline const SharedTextureMemoryEndAccessState& FromAPI(const WGPUSharedTextureMemoryEndAccessState& rhs) {
        return *reinterpret_cast<const SharedTextureMemoryEndAccessState*>(&rhs);
    }
    inline SharedTextureMemoryEndAccessState& FromAPI(WGPUSharedTextureMemoryEndAccessState& rhs) {
        return *reinterpret_cast<SharedTextureMemoryEndAccessState*>(&rhs);
    }
    inline const SharedTextureMemoryEndAccessState& FromAPI(const SharedTextureMemoryEndAccessState& rhs) {
        return rhs;
    }
    inline SharedTextureMemoryEndAccessState& FromAPI(SharedTextureMemoryEndAccessState& rhs) {
        return rhs;
    }
inline const WGPUSharedTextureMemoryProperties* ToAPI(const SharedTextureMemoryProperties* rhs) {
        return reinterpret_cast<const WGPUSharedTextureMemoryProperties*>(rhs);
    }
    inline WGPUSharedTextureMemoryProperties* ToAPI(SharedTextureMemoryProperties* rhs) {
        return reinterpret_cast<WGPUSharedTextureMemoryProperties*>(rhs);
    }
    inline const WGPUSharedTextureMemoryProperties* ToAPI(const WGPUSharedTextureMemoryProperties* rhs) {
        return rhs;
    }
    inline WGPUSharedTextureMemoryProperties* ToAPI(WGPUSharedTextureMemoryProperties* rhs) {
        return rhs;
    }
    inline const SharedTextureMemoryProperties* FromAPI(const WGPUSharedTextureMemoryProperties* rhs) {
        return reinterpret_cast<const SharedTextureMemoryProperties*>(rhs);
    }
    inline SharedTextureMemoryProperties* FromAPI(WGPUSharedTextureMemoryProperties* rhs) {
        return reinterpret_cast<SharedTextureMemoryProperties*>(rhs);
    }
    inline const SharedTextureMemoryProperties* FromAPI(const SharedTextureMemoryProperties* rhs) {
        return rhs;
    }
    inline SharedTextureMemoryProperties* FromAPI(SharedTextureMemoryProperties* rhs) {
        return rhs;
    }
    inline const wgpu::SharedTextureMemoryProperties* ToCppAPI(const SharedTextureMemoryProperties* rhs) {
        return reinterpret_cast<const wgpu::SharedTextureMemoryProperties*>(rhs);
    }
    inline wgpu::SharedTextureMemoryProperties* ToCppAPI(SharedTextureMemoryProperties* rhs) {
        return reinterpret_cast<wgpu::SharedTextureMemoryProperties*>(rhs);
    }
    inline const SharedTextureMemoryProperties* FromCppAPI(const wgpu::SharedTextureMemoryProperties* rhs) {
        return reinterpret_cast<const SharedTextureMemoryProperties*>(rhs);
    }
    inline SharedTextureMemoryProperties* FromCppAPI(wgpu::SharedTextureMemoryProperties* rhs) {
        return reinterpret_cast<SharedTextureMemoryProperties*>(rhs);
    }
inline const SharedTextureMemoryProperties& FromAPI(const WGPUSharedTextureMemoryProperties& rhs) {
        return *reinterpret_cast<const SharedTextureMemoryProperties*>(&rhs);
    }
    inline SharedTextureMemoryProperties& FromAPI(WGPUSharedTextureMemoryProperties& rhs) {
        return *reinterpret_cast<SharedTextureMemoryProperties*>(&rhs);
    }
    inline const SharedTextureMemoryProperties& FromAPI(const SharedTextureMemoryProperties& rhs) {
        return rhs;
    }
    inline SharedTextureMemoryProperties& FromAPI(SharedTextureMemoryProperties& rhs) {
        return rhs;
    }
inline const WGPUTextureViewDescriptor* ToAPI(const TextureViewDescriptor* rhs) {
        return reinterpret_cast<const WGPUTextureViewDescriptor*>(rhs);
    }
    inline WGPUTextureViewDescriptor* ToAPI(TextureViewDescriptor* rhs) {
        return reinterpret_cast<WGPUTextureViewDescriptor*>(rhs);
    }
    inline const WGPUTextureViewDescriptor* ToAPI(const WGPUTextureViewDescriptor* rhs) {
        return rhs;
    }
    inline WGPUTextureViewDescriptor* ToAPI(WGPUTextureViewDescriptor* rhs) {
        return rhs;
    }
    inline const TextureViewDescriptor* FromAPI(const WGPUTextureViewDescriptor* rhs) {
        return reinterpret_cast<const TextureViewDescriptor*>(rhs);
    }
    inline TextureViewDescriptor* FromAPI(WGPUTextureViewDescriptor* rhs) {
        return reinterpret_cast<TextureViewDescriptor*>(rhs);
    }
    inline const TextureViewDescriptor* FromAPI(const TextureViewDescriptor* rhs) {
        return rhs;
    }
    inline TextureViewDescriptor* FromAPI(TextureViewDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::TextureViewDescriptor* ToCppAPI(const TextureViewDescriptor* rhs) {
        return reinterpret_cast<const wgpu::TextureViewDescriptor*>(rhs);
    }
    inline wgpu::TextureViewDescriptor* ToCppAPI(TextureViewDescriptor* rhs) {
        return reinterpret_cast<wgpu::TextureViewDescriptor*>(rhs);
    }
    inline const TextureViewDescriptor* FromCppAPI(const wgpu::TextureViewDescriptor* rhs) {
        return reinterpret_cast<const TextureViewDescriptor*>(rhs);
    }
    inline TextureViewDescriptor* FromCppAPI(wgpu::TextureViewDescriptor* rhs) {
        return reinterpret_cast<TextureViewDescriptor*>(rhs);
    }
inline const TextureViewDescriptor& FromAPI(const WGPUTextureViewDescriptor& rhs) {
        return *reinterpret_cast<const TextureViewDescriptor*>(&rhs);
    }
    inline TextureViewDescriptor& FromAPI(WGPUTextureViewDescriptor& rhs) {
        return *reinterpret_cast<TextureViewDescriptor*>(&rhs);
    }
    inline const TextureViewDescriptor& FromAPI(const TextureViewDescriptor& rhs) {
        return rhs;
    }
    inline TextureViewDescriptor& FromAPI(TextureViewDescriptor& rhs) {
        return rhs;
    }
inline const WGPUVertexState* ToAPI(const VertexState* rhs) {
        return reinterpret_cast<const WGPUVertexState*>(rhs);
    }
    inline WGPUVertexState* ToAPI(VertexState* rhs) {
        return reinterpret_cast<WGPUVertexState*>(rhs);
    }
    inline const WGPUVertexState* ToAPI(const WGPUVertexState* rhs) {
        return rhs;
    }
    inline WGPUVertexState* ToAPI(WGPUVertexState* rhs) {
        return rhs;
    }
    inline const VertexState* FromAPI(const WGPUVertexState* rhs) {
        return reinterpret_cast<const VertexState*>(rhs);
    }
    inline VertexState* FromAPI(WGPUVertexState* rhs) {
        return reinterpret_cast<VertexState*>(rhs);
    }
    inline const VertexState* FromAPI(const VertexState* rhs) {
        return rhs;
    }
    inline VertexState* FromAPI(VertexState* rhs) {
        return rhs;
    }
    inline const wgpu::VertexState* ToCppAPI(const VertexState* rhs) {
        return reinterpret_cast<const wgpu::VertexState*>(rhs);
    }
    inline wgpu::VertexState* ToCppAPI(VertexState* rhs) {
        return reinterpret_cast<wgpu::VertexState*>(rhs);
    }
    inline const VertexState* FromCppAPI(const wgpu::VertexState* rhs) {
        return reinterpret_cast<const VertexState*>(rhs);
    }
    inline VertexState* FromCppAPI(wgpu::VertexState* rhs) {
        return reinterpret_cast<VertexState*>(rhs);
    }
inline const VertexState& FromAPI(const WGPUVertexState& rhs) {
        return *reinterpret_cast<const VertexState*>(&rhs);
    }
    inline VertexState& FromAPI(WGPUVertexState& rhs) {
        return *reinterpret_cast<VertexState*>(&rhs);
    }
    inline const VertexState& FromAPI(const VertexState& rhs) {
        return rhs;
    }
    inline VertexState& FromAPI(VertexState& rhs) {
        return rhs;
    }
inline const WGPUFragmentState* ToAPI(const FragmentState* rhs) {
        return reinterpret_cast<const WGPUFragmentState*>(rhs);
    }
    inline WGPUFragmentState* ToAPI(FragmentState* rhs) {
        return reinterpret_cast<WGPUFragmentState*>(rhs);
    }
    inline const WGPUFragmentState* ToAPI(const WGPUFragmentState* rhs) {
        return rhs;
    }
    inline WGPUFragmentState* ToAPI(WGPUFragmentState* rhs) {
        return rhs;
    }
    inline const FragmentState* FromAPI(const WGPUFragmentState* rhs) {
        return reinterpret_cast<const FragmentState*>(rhs);
    }
    inline FragmentState* FromAPI(WGPUFragmentState* rhs) {
        return reinterpret_cast<FragmentState*>(rhs);
    }
    inline const FragmentState* FromAPI(const FragmentState* rhs) {
        return rhs;
    }
    inline FragmentState* FromAPI(FragmentState* rhs) {
        return rhs;
    }
    inline const wgpu::FragmentState* ToCppAPI(const FragmentState* rhs) {
        return reinterpret_cast<const wgpu::FragmentState*>(rhs);
    }
    inline wgpu::FragmentState* ToCppAPI(FragmentState* rhs) {
        return reinterpret_cast<wgpu::FragmentState*>(rhs);
    }
    inline const FragmentState* FromCppAPI(const wgpu::FragmentState* rhs) {
        return reinterpret_cast<const FragmentState*>(rhs);
    }
    inline FragmentState* FromCppAPI(wgpu::FragmentState* rhs) {
        return reinterpret_cast<FragmentState*>(rhs);
    }
inline const FragmentState& FromAPI(const WGPUFragmentState& rhs) {
        return *reinterpret_cast<const FragmentState*>(&rhs);
    }
    inline FragmentState& FromAPI(WGPUFragmentState& rhs) {
        return *reinterpret_cast<FragmentState*>(&rhs);
    }
    inline const FragmentState& FromAPI(const FragmentState& rhs) {
        return rhs;
    }
    inline FragmentState& FromAPI(FragmentState& rhs) {
        return rhs;
    }
inline const WGPURenderPassDescriptor* ToAPI(const RenderPassDescriptor* rhs) {
        return reinterpret_cast<const WGPURenderPassDescriptor*>(rhs);
    }
    inline WGPURenderPassDescriptor* ToAPI(RenderPassDescriptor* rhs) {
        return reinterpret_cast<WGPURenderPassDescriptor*>(rhs);
    }
    inline const WGPURenderPassDescriptor* ToAPI(const WGPURenderPassDescriptor* rhs) {
        return rhs;
    }
    inline WGPURenderPassDescriptor* ToAPI(WGPURenderPassDescriptor* rhs) {
        return rhs;
    }
    inline const RenderPassDescriptor* FromAPI(const WGPURenderPassDescriptor* rhs) {
        return reinterpret_cast<const RenderPassDescriptor*>(rhs);
    }
    inline RenderPassDescriptor* FromAPI(WGPURenderPassDescriptor* rhs) {
        return reinterpret_cast<RenderPassDescriptor*>(rhs);
    }
    inline const RenderPassDescriptor* FromAPI(const RenderPassDescriptor* rhs) {
        return rhs;
    }
    inline RenderPassDescriptor* FromAPI(RenderPassDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::RenderPassDescriptor* ToCppAPI(const RenderPassDescriptor* rhs) {
        return reinterpret_cast<const wgpu::RenderPassDescriptor*>(rhs);
    }
    inline wgpu::RenderPassDescriptor* ToCppAPI(RenderPassDescriptor* rhs) {
        return reinterpret_cast<wgpu::RenderPassDescriptor*>(rhs);
    }
    inline const RenderPassDescriptor* FromCppAPI(const wgpu::RenderPassDescriptor* rhs) {
        return reinterpret_cast<const RenderPassDescriptor*>(rhs);
    }
    inline RenderPassDescriptor* FromCppAPI(wgpu::RenderPassDescriptor* rhs) {
        return reinterpret_cast<RenderPassDescriptor*>(rhs);
    }
inline const RenderPassDescriptor& FromAPI(const WGPURenderPassDescriptor& rhs) {
        return *reinterpret_cast<const RenderPassDescriptor*>(&rhs);
    }
    inline RenderPassDescriptor& FromAPI(WGPURenderPassDescriptor& rhs) {
        return *reinterpret_cast<RenderPassDescriptor*>(&rhs);
    }
    inline const RenderPassDescriptor& FromAPI(const RenderPassDescriptor& rhs) {
        return rhs;
    }
    inline RenderPassDescriptor& FromAPI(RenderPassDescriptor& rhs) {
        return rhs;
    }
inline const WGPURenderPipelineDescriptor* ToAPI(const RenderPipelineDescriptor* rhs) {
        return reinterpret_cast<const WGPURenderPipelineDescriptor*>(rhs);
    }
    inline WGPURenderPipelineDescriptor* ToAPI(RenderPipelineDescriptor* rhs) {
        return reinterpret_cast<WGPURenderPipelineDescriptor*>(rhs);
    }
    inline const WGPURenderPipelineDescriptor* ToAPI(const WGPURenderPipelineDescriptor* rhs) {
        return rhs;
    }
    inline WGPURenderPipelineDescriptor* ToAPI(WGPURenderPipelineDescriptor* rhs) {
        return rhs;
    }
    inline const RenderPipelineDescriptor* FromAPI(const WGPURenderPipelineDescriptor* rhs) {
        return reinterpret_cast<const RenderPipelineDescriptor*>(rhs);
    }
    inline RenderPipelineDescriptor* FromAPI(WGPURenderPipelineDescriptor* rhs) {
        return reinterpret_cast<RenderPipelineDescriptor*>(rhs);
    }
    inline const RenderPipelineDescriptor* FromAPI(const RenderPipelineDescriptor* rhs) {
        return rhs;
    }
    inline RenderPipelineDescriptor* FromAPI(RenderPipelineDescriptor* rhs) {
        return rhs;
    }
    inline const wgpu::RenderPipelineDescriptor* ToCppAPI(const RenderPipelineDescriptor* rhs) {
        return reinterpret_cast<const wgpu::RenderPipelineDescriptor*>(rhs);
    }
    inline wgpu::RenderPipelineDescriptor* ToCppAPI(RenderPipelineDescriptor* rhs) {
        return reinterpret_cast<wgpu::RenderPipelineDescriptor*>(rhs);
    }
    inline const RenderPipelineDescriptor* FromCppAPI(const wgpu::RenderPipelineDescriptor* rhs) {
        return reinterpret_cast<const RenderPipelineDescriptor*>(rhs);
    }
    inline RenderPipelineDescriptor* FromCppAPI(wgpu::RenderPipelineDescriptor* rhs) {
        return reinterpret_cast<RenderPipelineDescriptor*>(rhs);
    }
inline const RenderPipelineDescriptor& FromAPI(const WGPURenderPipelineDescriptor& rhs) {
        return *reinterpret_cast<const RenderPipelineDescriptor*>(&rhs);
    }
    inline RenderPipelineDescriptor& FromAPI(WGPURenderPipelineDescriptor& rhs) {
        return *reinterpret_cast<RenderPipelineDescriptor*>(&rhs);
    }
    inline const RenderPipelineDescriptor& FromAPI(const RenderPipelineDescriptor& rhs) {
        return rhs;
    }
    inline RenderPipelineDescriptor& FromAPI(RenderPipelineDescriptor& rhs) {
        return rhs;
    }

inline WGPUAdapter ToAPI(detail::Adapter* rhs) {
    return reinterpret_cast<WGPUAdapter>(rhs);
}
inline const WGPUAdapter* ToAPI(detail::Adapter* const* rhs) {
    return reinterpret_cast<const WGPUAdapter*>(rhs);
}
inline WGPUAdapter* ToAPI(detail::Adapter** rhs) {
    return reinterpret_cast<WGPUAdapter*>(rhs);
}

inline detail::Adapter* FromAPI(WGPUAdapter rhs) {
    return reinterpret_cast<detail::Adapter*>(rhs);
}
inline detail::Adapter* const* FromAPI(const WGPUAdapter* rhs) {
    return reinterpret_cast<detail::Adapter* const*>(rhs);
}
inline detail::Adapter** FromAPI(WGPUAdapter* rhs) {
    return reinterpret_cast<detail::Adapter**>(rhs);
}
inline WGPUBindGroup ToAPI(detail::BindGroup* rhs) {
    return reinterpret_cast<WGPUBindGroup>(rhs);
}
inline const WGPUBindGroup* ToAPI(detail::BindGroup* const* rhs) {
    return reinterpret_cast<const WGPUBindGroup*>(rhs);
}
inline WGPUBindGroup* ToAPI(detail::BindGroup** rhs) {
    return reinterpret_cast<WGPUBindGroup*>(rhs);
}

inline detail::BindGroup* FromAPI(WGPUBindGroup rhs) {
    return reinterpret_cast<detail::BindGroup*>(rhs);
}
inline detail::BindGroup* const* FromAPI(const WGPUBindGroup* rhs) {
    return reinterpret_cast<detail::BindGroup* const*>(rhs);
}
inline detail::BindGroup** FromAPI(WGPUBindGroup* rhs) {
    return reinterpret_cast<detail::BindGroup**>(rhs);
}
inline WGPUBindGroupLayout ToAPI(detail::BindGroupLayout* rhs) {
    return reinterpret_cast<WGPUBindGroupLayout>(rhs);
}
inline const WGPUBindGroupLayout* ToAPI(detail::BindGroupLayout* const* rhs) {
    return reinterpret_cast<const WGPUBindGroupLayout*>(rhs);
}
inline WGPUBindGroupLayout* ToAPI(detail::BindGroupLayout** rhs) {
    return reinterpret_cast<WGPUBindGroupLayout*>(rhs);
}

inline detail::BindGroupLayout* FromAPI(WGPUBindGroupLayout rhs) {
    return reinterpret_cast<detail::BindGroupLayout*>(rhs);
}
inline detail::BindGroupLayout* const* FromAPI(const WGPUBindGroupLayout* rhs) {
    return reinterpret_cast<detail::BindGroupLayout* const*>(rhs);
}
inline detail::BindGroupLayout** FromAPI(WGPUBindGroupLayout* rhs) {
    return reinterpret_cast<detail::BindGroupLayout**>(rhs);
}
inline WGPUBuffer ToAPI(detail::Buffer* rhs) {
    return reinterpret_cast<WGPUBuffer>(rhs);
}
inline const WGPUBuffer* ToAPI(detail::Buffer* const* rhs) {
    return reinterpret_cast<const WGPUBuffer*>(rhs);
}
inline WGPUBuffer* ToAPI(detail::Buffer** rhs) {
    return reinterpret_cast<WGPUBuffer*>(rhs);
}

inline detail::Buffer* FromAPI(WGPUBuffer rhs) {
    return reinterpret_cast<detail::Buffer*>(rhs);
}
inline detail::Buffer* const* FromAPI(const WGPUBuffer* rhs) {
    return reinterpret_cast<detail::Buffer* const*>(rhs);
}
inline detail::Buffer** FromAPI(WGPUBuffer* rhs) {
    return reinterpret_cast<detail::Buffer**>(rhs);
}
inline WGPUCommandBuffer ToAPI(detail::CommandBuffer* rhs) {
    return reinterpret_cast<WGPUCommandBuffer>(rhs);
}
inline const WGPUCommandBuffer* ToAPI(detail::CommandBuffer* const* rhs) {
    return reinterpret_cast<const WGPUCommandBuffer*>(rhs);
}
inline WGPUCommandBuffer* ToAPI(detail::CommandBuffer** rhs) {
    return reinterpret_cast<WGPUCommandBuffer*>(rhs);
}

inline detail::CommandBuffer* FromAPI(WGPUCommandBuffer rhs) {
    return reinterpret_cast<detail::CommandBuffer*>(rhs);
}
inline detail::CommandBuffer* const* FromAPI(const WGPUCommandBuffer* rhs) {
    return reinterpret_cast<detail::CommandBuffer* const*>(rhs);
}
inline detail::CommandBuffer** FromAPI(WGPUCommandBuffer* rhs) {
    return reinterpret_cast<detail::CommandBuffer**>(rhs);
}
inline WGPUCommandEncoder ToAPI(detail::CommandEncoder* rhs) {
    return reinterpret_cast<WGPUCommandEncoder>(rhs);
}
inline const WGPUCommandEncoder* ToAPI(detail::CommandEncoder* const* rhs) {
    return reinterpret_cast<const WGPUCommandEncoder*>(rhs);
}
inline WGPUCommandEncoder* ToAPI(detail::CommandEncoder** rhs) {
    return reinterpret_cast<WGPUCommandEncoder*>(rhs);
}

inline detail::CommandEncoder* FromAPI(WGPUCommandEncoder rhs) {
    return reinterpret_cast<detail::CommandEncoder*>(rhs);
}
inline detail::CommandEncoder* const* FromAPI(const WGPUCommandEncoder* rhs) {
    return reinterpret_cast<detail::CommandEncoder* const*>(rhs);
}
inline detail::CommandEncoder** FromAPI(WGPUCommandEncoder* rhs) {
    return reinterpret_cast<detail::CommandEncoder**>(rhs);
}
inline WGPUComputePipeline ToAPI(detail::ComputePipeline* rhs) {
    return reinterpret_cast<WGPUComputePipeline>(rhs);
}
inline const WGPUComputePipeline* ToAPI(detail::ComputePipeline* const* rhs) {
    return reinterpret_cast<const WGPUComputePipeline*>(rhs);
}
inline WGPUComputePipeline* ToAPI(detail::ComputePipeline** rhs) {
    return reinterpret_cast<WGPUComputePipeline*>(rhs);
}

inline detail::ComputePipeline* FromAPI(WGPUComputePipeline rhs) {
    return reinterpret_cast<detail::ComputePipeline*>(rhs);
}
inline detail::ComputePipeline* const* FromAPI(const WGPUComputePipeline* rhs) {
    return reinterpret_cast<detail::ComputePipeline* const*>(rhs);
}
inline detail::ComputePipeline** FromAPI(WGPUComputePipeline* rhs) {
    return reinterpret_cast<detail::ComputePipeline**>(rhs);
}
inline WGPUDevice ToAPI(detail::Device* rhs) {
    return reinterpret_cast<WGPUDevice>(rhs);
}
inline const WGPUDevice* ToAPI(detail::Device* const* rhs) {
    return reinterpret_cast<const WGPUDevice*>(rhs);
}
inline WGPUDevice* ToAPI(detail::Device** rhs) {
    return reinterpret_cast<WGPUDevice*>(rhs);
}

inline detail::Device* FromAPI(WGPUDevice rhs) {
    return reinterpret_cast<detail::Device*>(rhs);
}
inline detail::Device* const* FromAPI(const WGPUDevice* rhs) {
    return reinterpret_cast<detail::Device* const*>(rhs);
}
inline detail::Device** FromAPI(WGPUDevice* rhs) {
    return reinterpret_cast<detail::Device**>(rhs);
}
inline WGPUExternalTexture ToAPI(detail::ExternalTexture* rhs) {
    return reinterpret_cast<WGPUExternalTexture>(rhs);
}
inline const WGPUExternalTexture* ToAPI(detail::ExternalTexture* const* rhs) {
    return reinterpret_cast<const WGPUExternalTexture*>(rhs);
}
inline WGPUExternalTexture* ToAPI(detail::ExternalTexture** rhs) {
    return reinterpret_cast<WGPUExternalTexture*>(rhs);
}

inline detail::ExternalTexture* FromAPI(WGPUExternalTexture rhs) {
    return reinterpret_cast<detail::ExternalTexture*>(rhs);
}
inline detail::ExternalTexture* const* FromAPI(const WGPUExternalTexture* rhs) {
    return reinterpret_cast<detail::ExternalTexture* const*>(rhs);
}
inline detail::ExternalTexture** FromAPI(WGPUExternalTexture* rhs) {
    return reinterpret_cast<detail::ExternalTexture**>(rhs);
}
inline WGPUInstance ToAPI(detail::Instance* rhs) {
    return reinterpret_cast<WGPUInstance>(rhs);
}
inline const WGPUInstance* ToAPI(detail::Instance* const* rhs) {
    return reinterpret_cast<const WGPUInstance*>(rhs);
}
inline WGPUInstance* ToAPI(detail::Instance** rhs) {
    return reinterpret_cast<WGPUInstance*>(rhs);
}

inline detail::Instance* FromAPI(WGPUInstance rhs) {
    return reinterpret_cast<detail::Instance*>(rhs);
}
inline detail::Instance* const* FromAPI(const WGPUInstance* rhs) {
    return reinterpret_cast<detail::Instance* const*>(rhs);
}
inline detail::Instance** FromAPI(WGPUInstance* rhs) {
    return reinterpret_cast<detail::Instance**>(rhs);
}
inline WGPUPipelineLayout ToAPI(detail::PipelineLayout* rhs) {
    return reinterpret_cast<WGPUPipelineLayout>(rhs);
}
inline const WGPUPipelineLayout* ToAPI(detail::PipelineLayout* const* rhs) {
    return reinterpret_cast<const WGPUPipelineLayout*>(rhs);
}
inline WGPUPipelineLayout* ToAPI(detail::PipelineLayout** rhs) {
    return reinterpret_cast<WGPUPipelineLayout*>(rhs);
}

inline detail::PipelineLayout* FromAPI(WGPUPipelineLayout rhs) {
    return reinterpret_cast<detail::PipelineLayout*>(rhs);
}
inline detail::PipelineLayout* const* FromAPI(const WGPUPipelineLayout* rhs) {
    return reinterpret_cast<detail::PipelineLayout* const*>(rhs);
}
inline detail::PipelineLayout** FromAPI(WGPUPipelineLayout* rhs) {
    return reinterpret_cast<detail::PipelineLayout**>(rhs);
}
inline WGPUQuerySet ToAPI(detail::QuerySet* rhs) {
    return reinterpret_cast<WGPUQuerySet>(rhs);
}
inline const WGPUQuerySet* ToAPI(detail::QuerySet* const* rhs) {
    return reinterpret_cast<const WGPUQuerySet*>(rhs);
}
inline WGPUQuerySet* ToAPI(detail::QuerySet** rhs) {
    return reinterpret_cast<WGPUQuerySet*>(rhs);
}

inline detail::QuerySet* FromAPI(WGPUQuerySet rhs) {
    return reinterpret_cast<detail::QuerySet*>(rhs);
}
inline detail::QuerySet* const* FromAPI(const WGPUQuerySet* rhs) {
    return reinterpret_cast<detail::QuerySet* const*>(rhs);
}
inline detail::QuerySet** FromAPI(WGPUQuerySet* rhs) {
    return reinterpret_cast<detail::QuerySet**>(rhs);
}
inline WGPUQueue ToAPI(detail::Queue* rhs) {
    return reinterpret_cast<WGPUQueue>(rhs);
}
inline const WGPUQueue* ToAPI(detail::Queue* const* rhs) {
    return reinterpret_cast<const WGPUQueue*>(rhs);
}
inline WGPUQueue* ToAPI(detail::Queue** rhs) {
    return reinterpret_cast<WGPUQueue*>(rhs);
}

inline detail::Queue* FromAPI(WGPUQueue rhs) {
    return reinterpret_cast<detail::Queue*>(rhs);
}
inline detail::Queue* const* FromAPI(const WGPUQueue* rhs) {
    return reinterpret_cast<detail::Queue* const*>(rhs);
}
inline detail::Queue** FromAPI(WGPUQueue* rhs) {
    return reinterpret_cast<detail::Queue**>(rhs);
}
inline WGPURenderBundle ToAPI(detail::RenderBundle* rhs) {
    return reinterpret_cast<WGPURenderBundle>(rhs);
}
inline const WGPURenderBundle* ToAPI(detail::RenderBundle* const* rhs) {
    return reinterpret_cast<const WGPURenderBundle*>(rhs);
}
inline WGPURenderBundle* ToAPI(detail::RenderBundle** rhs) {
    return reinterpret_cast<WGPURenderBundle*>(rhs);
}

inline detail::RenderBundle* FromAPI(WGPURenderBundle rhs) {
    return reinterpret_cast<detail::RenderBundle*>(rhs);
}
inline detail::RenderBundle* const* FromAPI(const WGPURenderBundle* rhs) {
    return reinterpret_cast<detail::RenderBundle* const*>(rhs);
}
inline detail::RenderBundle** FromAPI(WGPURenderBundle* rhs) {
    return reinterpret_cast<detail::RenderBundle**>(rhs);
}
inline WGPURenderPipeline ToAPI(detail::RenderPipeline* rhs) {
    return reinterpret_cast<WGPURenderPipeline>(rhs);
}
inline const WGPURenderPipeline* ToAPI(detail::RenderPipeline* const* rhs) {
    return reinterpret_cast<const WGPURenderPipeline*>(rhs);
}
inline WGPURenderPipeline* ToAPI(detail::RenderPipeline** rhs) {
    return reinterpret_cast<WGPURenderPipeline*>(rhs);
}

inline detail::RenderPipeline* FromAPI(WGPURenderPipeline rhs) {
    return reinterpret_cast<detail::RenderPipeline*>(rhs);
}
inline detail::RenderPipeline* const* FromAPI(const WGPURenderPipeline* rhs) {
    return reinterpret_cast<detail::RenderPipeline* const*>(rhs);
}
inline detail::RenderPipeline** FromAPI(WGPURenderPipeline* rhs) {
    return reinterpret_cast<detail::RenderPipeline**>(rhs);
}
inline WGPUResourceTable ToAPI(detail::ResourceTable* rhs) {
    return reinterpret_cast<WGPUResourceTable>(rhs);
}
inline const WGPUResourceTable* ToAPI(detail::ResourceTable* const* rhs) {
    return reinterpret_cast<const WGPUResourceTable*>(rhs);
}
inline WGPUResourceTable* ToAPI(detail::ResourceTable** rhs) {
    return reinterpret_cast<WGPUResourceTable*>(rhs);
}

inline detail::ResourceTable* FromAPI(WGPUResourceTable rhs) {
    return reinterpret_cast<detail::ResourceTable*>(rhs);
}
inline detail::ResourceTable* const* FromAPI(const WGPUResourceTable* rhs) {
    return reinterpret_cast<detail::ResourceTable* const*>(rhs);
}
inline detail::ResourceTable** FromAPI(WGPUResourceTable* rhs) {
    return reinterpret_cast<detail::ResourceTable**>(rhs);
}
inline WGPUSampler ToAPI(detail::Sampler* rhs) {
    return reinterpret_cast<WGPUSampler>(rhs);
}
inline const WGPUSampler* ToAPI(detail::Sampler* const* rhs) {
    return reinterpret_cast<const WGPUSampler*>(rhs);
}
inline WGPUSampler* ToAPI(detail::Sampler** rhs) {
    return reinterpret_cast<WGPUSampler*>(rhs);
}

inline detail::Sampler* FromAPI(WGPUSampler rhs) {
    return reinterpret_cast<detail::Sampler*>(rhs);
}
inline detail::Sampler* const* FromAPI(const WGPUSampler* rhs) {
    return reinterpret_cast<detail::Sampler* const*>(rhs);
}
inline detail::Sampler** FromAPI(WGPUSampler* rhs) {
    return reinterpret_cast<detail::Sampler**>(rhs);
}
inline WGPUShaderModule ToAPI(detail::ShaderModule* rhs) {
    return reinterpret_cast<WGPUShaderModule>(rhs);
}
inline const WGPUShaderModule* ToAPI(detail::ShaderModule* const* rhs) {
    return reinterpret_cast<const WGPUShaderModule*>(rhs);
}
inline WGPUShaderModule* ToAPI(detail::ShaderModule** rhs) {
    return reinterpret_cast<WGPUShaderModule*>(rhs);
}

inline detail::ShaderModule* FromAPI(WGPUShaderModule rhs) {
    return reinterpret_cast<detail::ShaderModule*>(rhs);
}
inline detail::ShaderModule* const* FromAPI(const WGPUShaderModule* rhs) {
    return reinterpret_cast<detail::ShaderModule* const*>(rhs);
}
inline detail::ShaderModule** FromAPI(WGPUShaderModule* rhs) {
    return reinterpret_cast<detail::ShaderModule**>(rhs);
}
inline WGPUSharedBufferMemory ToAPI(detail::SharedBufferMemory* rhs) {
    return reinterpret_cast<WGPUSharedBufferMemory>(rhs);
}
inline const WGPUSharedBufferMemory* ToAPI(detail::SharedBufferMemory* const* rhs) {
    return reinterpret_cast<const WGPUSharedBufferMemory*>(rhs);
}
inline WGPUSharedBufferMemory* ToAPI(detail::SharedBufferMemory** rhs) {
    return reinterpret_cast<WGPUSharedBufferMemory*>(rhs);
}

inline detail::SharedBufferMemory* FromAPI(WGPUSharedBufferMemory rhs) {
    return reinterpret_cast<detail::SharedBufferMemory*>(rhs);
}
inline detail::SharedBufferMemory* const* FromAPI(const WGPUSharedBufferMemory* rhs) {
    return reinterpret_cast<detail::SharedBufferMemory* const*>(rhs);
}
inline detail::SharedBufferMemory** FromAPI(WGPUSharedBufferMemory* rhs) {
    return reinterpret_cast<detail::SharedBufferMemory**>(rhs);
}
inline WGPUSharedFence ToAPI(detail::SharedFence* rhs) {
    return reinterpret_cast<WGPUSharedFence>(rhs);
}
inline const WGPUSharedFence* ToAPI(detail::SharedFence* const* rhs) {
    return reinterpret_cast<const WGPUSharedFence*>(rhs);
}
inline WGPUSharedFence* ToAPI(detail::SharedFence** rhs) {
    return reinterpret_cast<WGPUSharedFence*>(rhs);
}

inline detail::SharedFence* FromAPI(WGPUSharedFence rhs) {
    return reinterpret_cast<detail::SharedFence*>(rhs);
}
inline detail::SharedFence* const* FromAPI(const WGPUSharedFence* rhs) {
    return reinterpret_cast<detail::SharedFence* const*>(rhs);
}
inline detail::SharedFence** FromAPI(WGPUSharedFence* rhs) {
    return reinterpret_cast<detail::SharedFence**>(rhs);
}
inline WGPUSharedTextureMemory ToAPI(detail::SharedTextureMemory* rhs) {
    return reinterpret_cast<WGPUSharedTextureMemory>(rhs);
}
inline const WGPUSharedTextureMemory* ToAPI(detail::SharedTextureMemory* const* rhs) {
    return reinterpret_cast<const WGPUSharedTextureMemory*>(rhs);
}
inline WGPUSharedTextureMemory* ToAPI(detail::SharedTextureMemory** rhs) {
    return reinterpret_cast<WGPUSharedTextureMemory*>(rhs);
}

inline detail::SharedTextureMemory* FromAPI(WGPUSharedTextureMemory rhs) {
    return reinterpret_cast<detail::SharedTextureMemory*>(rhs);
}
inline detail::SharedTextureMemory* const* FromAPI(const WGPUSharedTextureMemory* rhs) {
    return reinterpret_cast<detail::SharedTextureMemory* const*>(rhs);
}
inline detail::SharedTextureMemory** FromAPI(WGPUSharedTextureMemory* rhs) {
    return reinterpret_cast<detail::SharedTextureMemory**>(rhs);
}
inline WGPUSurface ToAPI(detail::Surface* rhs) {
    return reinterpret_cast<WGPUSurface>(rhs);
}
inline const WGPUSurface* ToAPI(detail::Surface* const* rhs) {
    return reinterpret_cast<const WGPUSurface*>(rhs);
}
inline WGPUSurface* ToAPI(detail::Surface** rhs) {
    return reinterpret_cast<WGPUSurface*>(rhs);
}

inline detail::Surface* FromAPI(WGPUSurface rhs) {
    return reinterpret_cast<detail::Surface*>(rhs);
}
inline detail::Surface* const* FromAPI(const WGPUSurface* rhs) {
    return reinterpret_cast<detail::Surface* const*>(rhs);
}
inline detail::Surface** FromAPI(WGPUSurface* rhs) {
    return reinterpret_cast<detail::Surface**>(rhs);
}
inline WGPUTexelBufferView ToAPI(detail::TexelBufferView* rhs) {
    return reinterpret_cast<WGPUTexelBufferView>(rhs);
}
inline const WGPUTexelBufferView* ToAPI(detail::TexelBufferView* const* rhs) {
    return reinterpret_cast<const WGPUTexelBufferView*>(rhs);
}
inline WGPUTexelBufferView* ToAPI(detail::TexelBufferView** rhs) {
    return reinterpret_cast<WGPUTexelBufferView*>(rhs);
}

inline detail::TexelBufferView* FromAPI(WGPUTexelBufferView rhs) {
    return reinterpret_cast<detail::TexelBufferView*>(rhs);
}
inline detail::TexelBufferView* const* FromAPI(const WGPUTexelBufferView* rhs) {
    return reinterpret_cast<detail::TexelBufferView* const*>(rhs);
}
inline detail::TexelBufferView** FromAPI(WGPUTexelBufferView* rhs) {
    return reinterpret_cast<detail::TexelBufferView**>(rhs);
}
inline WGPUTexture ToAPI(detail::Texture* rhs) {
    return reinterpret_cast<WGPUTexture>(rhs);
}
inline const WGPUTexture* ToAPI(detail::Texture* const* rhs) {
    return reinterpret_cast<const WGPUTexture*>(rhs);
}
inline WGPUTexture* ToAPI(detail::Texture** rhs) {
    return reinterpret_cast<WGPUTexture*>(rhs);
}

inline detail::Texture* FromAPI(WGPUTexture rhs) {
    return reinterpret_cast<detail::Texture*>(rhs);
}
inline detail::Texture* const* FromAPI(const WGPUTexture* rhs) {
    return reinterpret_cast<detail::Texture* const*>(rhs);
}
inline detail::Texture** FromAPI(WGPUTexture* rhs) {
    return reinterpret_cast<detail::Texture**>(rhs);
}
inline WGPUTextureView ToAPI(detail::TextureView* rhs) {
    return reinterpret_cast<WGPUTextureView>(rhs);
}
inline const WGPUTextureView* ToAPI(detail::TextureView* const* rhs) {
    return reinterpret_cast<const WGPUTextureView*>(rhs);
}
inline WGPUTextureView* ToAPI(detail::TextureView** rhs) {
    return reinterpret_cast<WGPUTextureView*>(rhs);
}

inline detail::TextureView* FromAPI(WGPUTextureView rhs) {
    return reinterpret_cast<detail::TextureView*>(rhs);
}
inline detail::TextureView* const* FromAPI(const WGPUTextureView* rhs) {
    return reinterpret_cast<detail::TextureView* const*>(rhs);
}
inline detail::TextureView** FromAPI(WGPUTextureView* rhs) {
    return reinterpret_cast<detail::TextureView**>(rhs);
}
inline WGPUComputePassEncoder ToAPI(detail::ComputePassEncoder* rhs) {
    return reinterpret_cast<WGPUComputePassEncoder>(rhs);
}
inline const WGPUComputePassEncoder* ToAPI(detail::ComputePassEncoder* const* rhs) {
    return reinterpret_cast<const WGPUComputePassEncoder*>(rhs);
}
inline WGPUComputePassEncoder* ToAPI(detail::ComputePassEncoder** rhs) {
    return reinterpret_cast<WGPUComputePassEncoder*>(rhs);
}

inline detail::ComputePassEncoder* FromAPI(WGPUComputePassEncoder rhs) {
    return reinterpret_cast<detail::ComputePassEncoder*>(rhs);
}
inline detail::ComputePassEncoder* const* FromAPI(const WGPUComputePassEncoder* rhs) {
    return reinterpret_cast<detail::ComputePassEncoder* const*>(rhs);
}
inline detail::ComputePassEncoder** FromAPI(WGPUComputePassEncoder* rhs) {
    return reinterpret_cast<detail::ComputePassEncoder**>(rhs);
}
inline WGPURenderBundleEncoder ToAPI(detail::RenderBundleEncoder* rhs) {
    return reinterpret_cast<WGPURenderBundleEncoder>(rhs);
}
inline const WGPURenderBundleEncoder* ToAPI(detail::RenderBundleEncoder* const* rhs) {
    return reinterpret_cast<const WGPURenderBundleEncoder*>(rhs);
}
inline WGPURenderBundleEncoder* ToAPI(detail::RenderBundleEncoder** rhs) {
    return reinterpret_cast<WGPURenderBundleEncoder*>(rhs);
}

inline detail::RenderBundleEncoder* FromAPI(WGPURenderBundleEncoder rhs) {
    return reinterpret_cast<detail::RenderBundleEncoder*>(rhs);
}
inline detail::RenderBundleEncoder* const* FromAPI(const WGPURenderBundleEncoder* rhs) {
    return reinterpret_cast<detail::RenderBundleEncoder* const*>(rhs);
}
inline detail::RenderBundleEncoder** FromAPI(WGPURenderBundleEncoder* rhs) {
    return reinterpret_cast<detail::RenderBundleEncoder**>(rhs);
}
inline WGPURenderPassEncoder ToAPI(detail::RenderPassEncoder* rhs) {
    return reinterpret_cast<WGPURenderPassEncoder>(rhs);
}
inline const WGPURenderPassEncoder* ToAPI(detail::RenderPassEncoder* const* rhs) {
    return reinterpret_cast<const WGPURenderPassEncoder*>(rhs);
}
inline WGPURenderPassEncoder* ToAPI(detail::RenderPassEncoder** rhs) {
    return reinterpret_cast<WGPURenderPassEncoder*>(rhs);
}

inline detail::RenderPassEncoder* FromAPI(WGPURenderPassEncoder rhs) {
    return reinterpret_cast<detail::RenderPassEncoder*>(rhs);
}
inline detail::RenderPassEncoder* const* FromAPI(const WGPURenderPassEncoder* rhs) {
    return reinterpret_cast<detail::RenderPassEncoder* const*>(rhs);
}
inline detail::RenderPassEncoder** FromAPI(WGPURenderPassEncoder* rhs) {
    return reinterpret_cast<detail::RenderPassEncoder**>(rhs);
}

inline WGPUBool ToAPI(wgpu::Bool rhs) {
    return static_cast<WGPUBool>(rhs);
}
inline wgpu::Bool FromAPI(wgpu::Bool rhs) {
    return rhs;
}
inline const WGPUBool* ToAPI(const wgpu::Bool* rhs) {
    return reinterpret_cast<const WGPUBool*>(rhs);
}
inline WGPUBool* ToAPI(wgpu::Bool* rhs) {
    return reinterpret_cast<WGPUBool*>(rhs);
}
inline const wgpu::Bool* FromAPI(const wgpu::Bool* rhs) {
    return rhs;
}
inline wgpu::Bool* FromAPI(wgpu::Bool* rhs) {
    return rhs;
}

template <typename T>
struct EnumCount;

template<>
struct EnumCount<wgpu::AddressMode> {
    static constexpr uint32_t value = 4;
};
template<>
struct EnumCount<wgpu::BackendType> {
    static constexpr uint32_t value = 9;
};
template<>
struct EnumCount<wgpu::BlendFactor> {
    static constexpr uint32_t value = 18;
};
template<>
struct EnumCount<wgpu::BlendOperation> {
    static constexpr uint32_t value = 6;
};
template<>
struct EnumCount<wgpu::BufferBindingType> {
    static constexpr uint32_t value = 5;
};
template<>
struct EnumCount<wgpu::CompareFunction> {
    static constexpr uint32_t value = 9;
};
template<>
struct EnumCount<wgpu::ComponentSwizzle> {
    static constexpr uint32_t value = 7;
};
template<>
struct EnumCount<wgpu::CompositeAlphaMode> {
    static constexpr uint32_t value = 5;
};
template<>
struct EnumCount<wgpu::CullMode> {
    static constexpr uint32_t value = 4;
};
template<>
struct EnumCount<wgpu::FeatureLevel> {
    static constexpr uint32_t value = 3;
};
template<>
struct EnumCount<wgpu::FilterMode> {
    static constexpr uint32_t value = 3;
};
template<>
struct EnumCount<wgpu::FrontFace> {
    static constexpr uint32_t value = 3;
};
template<>
struct EnumCount<wgpu::IndexFormat> {
    static constexpr uint32_t value = 3;
};
template<>
struct EnumCount<wgpu::MipmapFilterMode> {
    static constexpr uint32_t value = 3;
};
template<>
struct EnumCount<wgpu::OptionalBool> {
    static constexpr uint32_t value = 3;
};
template<>
struct EnumCount<wgpu::PowerPreference> {
    static constexpr uint32_t value = 3;
};
template<>
struct EnumCount<wgpu::PresentMode> {
    static constexpr uint32_t value = 5;
};
template<>
struct EnumCount<wgpu::PrimitiveTopology> {
    static constexpr uint32_t value = 6;
};
template<>
struct EnumCount<wgpu::SamplerBindingType> {
    static constexpr uint32_t value = 5;
};
template<>
struct EnumCount<wgpu::StencilOperation> {
    static constexpr uint32_t value = 9;
};
template<>
struct EnumCount<wgpu::StorageTextureAccess> {
    static constexpr uint32_t value = 5;
};
template<>
struct EnumCount<wgpu::StoreOp> {
    static constexpr uint32_t value = 3;
};
template<>
struct EnumCount<wgpu::TexelBufferAccess> {
    static constexpr uint32_t value = 3;
};
template<>
struct EnumCount<wgpu::TextureDimension> {
    static constexpr uint32_t value = 4;
};
template<>
struct EnumCount<wgpu::TextureSampleType> {
    static constexpr uint32_t value = 7;
};
template<>
struct EnumCount<wgpu::TextureViewDimension> {
    static constexpr uint32_t value = 7;
};
template<>
struct EnumCount<wgpu::VertexStepMode> {
    static constexpr uint32_t value = 3;
};

inline WGPUAdapterType ToAPI(wgpu::AdapterType rhs) {
    return static_cast<WGPUAdapterType>(rhs);
}
inline const WGPUAdapterType* ToAPI(const wgpu::AdapterType* rhs) {
    return reinterpret_cast<const WGPUAdapterType*>(rhs);
}
inline WGPUAdapterType* ToAPI(wgpu::AdapterType* rhs) {
    return reinterpret_cast<WGPUAdapterType*>(rhs);
}

inline wgpu::AdapterType FromAPI(wgpu::AdapterType rhs) {
    return rhs;
}
inline const wgpu::AdapterType* FromAPI(const wgpu::AdapterType* rhs) {
    return rhs;
}
inline wgpu::AdapterType* FromAPI(wgpu::AdapterType* rhs) {
    return rhs;
}
inline WGPUAddressMode ToAPI(wgpu::AddressMode rhs) {
    return static_cast<WGPUAddressMode>(rhs);
}
inline const WGPUAddressMode* ToAPI(const wgpu::AddressMode* rhs) {
    return reinterpret_cast<const WGPUAddressMode*>(rhs);
}
inline WGPUAddressMode* ToAPI(wgpu::AddressMode* rhs) {
    return reinterpret_cast<WGPUAddressMode*>(rhs);
}

inline wgpu::AddressMode FromAPI(wgpu::AddressMode rhs) {
    return rhs;
}
inline const wgpu::AddressMode* FromAPI(const wgpu::AddressMode* rhs) {
    return rhs;
}
inline wgpu::AddressMode* FromAPI(wgpu::AddressMode* rhs) {
    return rhs;
}
inline WGPUAlphaMode ToAPI(wgpu::AlphaMode rhs) {
    return static_cast<WGPUAlphaMode>(rhs);
}
inline const WGPUAlphaMode* ToAPI(const wgpu::AlphaMode* rhs) {
    return reinterpret_cast<const WGPUAlphaMode*>(rhs);
}
inline WGPUAlphaMode* ToAPI(wgpu::AlphaMode* rhs) {
    return reinterpret_cast<WGPUAlphaMode*>(rhs);
}

inline wgpu::AlphaMode FromAPI(wgpu::AlphaMode rhs) {
    return rhs;
}
inline const wgpu::AlphaMode* FromAPI(const wgpu::AlphaMode* rhs) {
    return rhs;
}
inline wgpu::AlphaMode* FromAPI(wgpu::AlphaMode* rhs) {
    return rhs;
}
inline WGPUBackendType ToAPI(wgpu::BackendType rhs) {
    return static_cast<WGPUBackendType>(rhs);
}
inline const WGPUBackendType* ToAPI(const wgpu::BackendType* rhs) {
    return reinterpret_cast<const WGPUBackendType*>(rhs);
}
inline WGPUBackendType* ToAPI(wgpu::BackendType* rhs) {
    return reinterpret_cast<WGPUBackendType*>(rhs);
}

inline wgpu::BackendType FromAPI(wgpu::BackendType rhs) {
    return rhs;
}
inline const wgpu::BackendType* FromAPI(const wgpu::BackendType* rhs) {
    return rhs;
}
inline wgpu::BackendType* FromAPI(wgpu::BackendType* rhs) {
    return rhs;
}
inline WGPUBlendFactor ToAPI(wgpu::BlendFactor rhs) {
    return static_cast<WGPUBlendFactor>(rhs);
}
inline const WGPUBlendFactor* ToAPI(const wgpu::BlendFactor* rhs) {
    return reinterpret_cast<const WGPUBlendFactor*>(rhs);
}
inline WGPUBlendFactor* ToAPI(wgpu::BlendFactor* rhs) {
    return reinterpret_cast<WGPUBlendFactor*>(rhs);
}

inline wgpu::BlendFactor FromAPI(wgpu::BlendFactor rhs) {
    return rhs;
}
inline const wgpu::BlendFactor* FromAPI(const wgpu::BlendFactor* rhs) {
    return rhs;
}
inline wgpu::BlendFactor* FromAPI(wgpu::BlendFactor* rhs) {
    return rhs;
}
inline WGPUBlendOperation ToAPI(wgpu::BlendOperation rhs) {
    return static_cast<WGPUBlendOperation>(rhs);
}
inline const WGPUBlendOperation* ToAPI(const wgpu::BlendOperation* rhs) {
    return reinterpret_cast<const WGPUBlendOperation*>(rhs);
}
inline WGPUBlendOperation* ToAPI(wgpu::BlendOperation* rhs) {
    return reinterpret_cast<WGPUBlendOperation*>(rhs);
}

inline wgpu::BlendOperation FromAPI(wgpu::BlendOperation rhs) {
    return rhs;
}
inline const wgpu::BlendOperation* FromAPI(const wgpu::BlendOperation* rhs) {
    return rhs;
}
inline wgpu::BlendOperation* FromAPI(wgpu::BlendOperation* rhs) {
    return rhs;
}
inline WGPUBufferBindingType ToAPI(wgpu::BufferBindingType rhs) {
    return static_cast<WGPUBufferBindingType>(rhs);
}
inline const WGPUBufferBindingType* ToAPI(const wgpu::BufferBindingType* rhs) {
    return reinterpret_cast<const WGPUBufferBindingType*>(rhs);
}
inline WGPUBufferBindingType* ToAPI(wgpu::BufferBindingType* rhs) {
    return reinterpret_cast<WGPUBufferBindingType*>(rhs);
}

inline wgpu::BufferBindingType FromAPI(wgpu::BufferBindingType rhs) {
    return rhs;
}
inline const wgpu::BufferBindingType* FromAPI(const wgpu::BufferBindingType* rhs) {
    return rhs;
}
inline wgpu::BufferBindingType* FromAPI(wgpu::BufferBindingType* rhs) {
    return rhs;
}
inline WGPUBufferMapState ToAPI(wgpu::BufferMapState rhs) {
    return static_cast<WGPUBufferMapState>(rhs);
}
inline const WGPUBufferMapState* ToAPI(const wgpu::BufferMapState* rhs) {
    return reinterpret_cast<const WGPUBufferMapState*>(rhs);
}
inline WGPUBufferMapState* ToAPI(wgpu::BufferMapState* rhs) {
    return reinterpret_cast<WGPUBufferMapState*>(rhs);
}

inline wgpu::BufferMapState FromAPI(wgpu::BufferMapState rhs) {
    return rhs;
}
inline const wgpu::BufferMapState* FromAPI(const wgpu::BufferMapState* rhs) {
    return rhs;
}
inline wgpu::BufferMapState* FromAPI(wgpu::BufferMapState* rhs) {
    return rhs;
}
inline WGPUCallbackMode ToAPI(wgpu::CallbackMode rhs) {
    return static_cast<WGPUCallbackMode>(rhs);
}
inline const WGPUCallbackMode* ToAPI(const wgpu::CallbackMode* rhs) {
    return reinterpret_cast<const WGPUCallbackMode*>(rhs);
}
inline WGPUCallbackMode* ToAPI(wgpu::CallbackMode* rhs) {
    return reinterpret_cast<WGPUCallbackMode*>(rhs);
}

inline wgpu::CallbackMode FromAPI(wgpu::CallbackMode rhs) {
    return rhs;
}
inline const wgpu::CallbackMode* FromAPI(const wgpu::CallbackMode* rhs) {
    return rhs;
}
inline wgpu::CallbackMode* FromAPI(wgpu::CallbackMode* rhs) {
    return rhs;
}
inline WGPUCallbackStatus ToAPI(wgpu::CallbackStatus rhs) {
    return static_cast<WGPUCallbackStatus>(rhs);
}
inline const WGPUCallbackStatus* ToAPI(const wgpu::CallbackStatus* rhs) {
    return reinterpret_cast<const WGPUCallbackStatus*>(rhs);
}
inline WGPUCallbackStatus* ToAPI(wgpu::CallbackStatus* rhs) {
    return reinterpret_cast<WGPUCallbackStatus*>(rhs);
}

inline wgpu::CallbackStatus FromAPI(wgpu::CallbackStatus rhs) {
    return rhs;
}
inline const wgpu::CallbackStatus* FromAPI(const wgpu::CallbackStatus* rhs) {
    return rhs;
}
inline wgpu::CallbackStatus* FromAPI(wgpu::CallbackStatus* rhs) {
    return rhs;
}
inline WGPUColorSpacePrimariesDawn ToAPI(wgpu::ColorSpacePrimariesDawn rhs) {
    return static_cast<WGPUColorSpacePrimariesDawn>(rhs);
}
inline const WGPUColorSpacePrimariesDawn* ToAPI(const wgpu::ColorSpacePrimariesDawn* rhs) {
    return reinterpret_cast<const WGPUColorSpacePrimariesDawn*>(rhs);
}
inline WGPUColorSpacePrimariesDawn* ToAPI(wgpu::ColorSpacePrimariesDawn* rhs) {
    return reinterpret_cast<WGPUColorSpacePrimariesDawn*>(rhs);
}

inline wgpu::ColorSpacePrimariesDawn FromAPI(wgpu::ColorSpacePrimariesDawn rhs) {
    return rhs;
}
inline const wgpu::ColorSpacePrimariesDawn* FromAPI(const wgpu::ColorSpacePrimariesDawn* rhs) {
    return rhs;
}
inline wgpu::ColorSpacePrimariesDawn* FromAPI(wgpu::ColorSpacePrimariesDawn* rhs) {
    return rhs;
}
inline WGPUColorSpaceTransferDawn ToAPI(wgpu::ColorSpaceTransferDawn rhs) {
    return static_cast<WGPUColorSpaceTransferDawn>(rhs);
}
inline const WGPUColorSpaceTransferDawn* ToAPI(const wgpu::ColorSpaceTransferDawn* rhs) {
    return reinterpret_cast<const WGPUColorSpaceTransferDawn*>(rhs);
}
inline WGPUColorSpaceTransferDawn* ToAPI(wgpu::ColorSpaceTransferDawn* rhs) {
    return reinterpret_cast<WGPUColorSpaceTransferDawn*>(rhs);
}

inline wgpu::ColorSpaceTransferDawn FromAPI(wgpu::ColorSpaceTransferDawn rhs) {
    return rhs;
}
inline const wgpu::ColorSpaceTransferDawn* FromAPI(const wgpu::ColorSpaceTransferDawn* rhs) {
    return rhs;
}
inline wgpu::ColorSpaceTransferDawn* FromAPI(wgpu::ColorSpaceTransferDawn* rhs) {
    return rhs;
}
inline WGPUColorSpaceYCbCrMatrixDawn ToAPI(wgpu::ColorSpaceYCbCrMatrixDawn rhs) {
    return static_cast<WGPUColorSpaceYCbCrMatrixDawn>(rhs);
}
inline const WGPUColorSpaceYCbCrMatrixDawn* ToAPI(const wgpu::ColorSpaceYCbCrMatrixDawn* rhs) {
    return reinterpret_cast<const WGPUColorSpaceYCbCrMatrixDawn*>(rhs);
}
inline WGPUColorSpaceYCbCrMatrixDawn* ToAPI(wgpu::ColorSpaceYCbCrMatrixDawn* rhs) {
    return reinterpret_cast<WGPUColorSpaceYCbCrMatrixDawn*>(rhs);
}

inline wgpu::ColorSpaceYCbCrMatrixDawn FromAPI(wgpu::ColorSpaceYCbCrMatrixDawn rhs) {
    return rhs;
}
inline const wgpu::ColorSpaceYCbCrMatrixDawn* FromAPI(const wgpu::ColorSpaceYCbCrMatrixDawn* rhs) {
    return rhs;
}
inline wgpu::ColorSpaceYCbCrMatrixDawn* FromAPI(wgpu::ColorSpaceYCbCrMatrixDawn* rhs) {
    return rhs;
}
inline WGPUColorSpaceYCbCrRangeDawn ToAPI(wgpu::ColorSpaceYCbCrRangeDawn rhs) {
    return static_cast<WGPUColorSpaceYCbCrRangeDawn>(rhs);
}
inline const WGPUColorSpaceYCbCrRangeDawn* ToAPI(const wgpu::ColorSpaceYCbCrRangeDawn* rhs) {
    return reinterpret_cast<const WGPUColorSpaceYCbCrRangeDawn*>(rhs);
}
inline WGPUColorSpaceYCbCrRangeDawn* ToAPI(wgpu::ColorSpaceYCbCrRangeDawn* rhs) {
    return reinterpret_cast<WGPUColorSpaceYCbCrRangeDawn*>(rhs);
}

inline wgpu::ColorSpaceYCbCrRangeDawn FromAPI(wgpu::ColorSpaceYCbCrRangeDawn rhs) {
    return rhs;
}
inline const wgpu::ColorSpaceYCbCrRangeDawn* FromAPI(const wgpu::ColorSpaceYCbCrRangeDawn* rhs) {
    return rhs;
}
inline wgpu::ColorSpaceYCbCrRangeDawn* FromAPI(wgpu::ColorSpaceYCbCrRangeDawn* rhs) {
    return rhs;
}
inline WGPUCompareFunction ToAPI(wgpu::CompareFunction rhs) {
    return static_cast<WGPUCompareFunction>(rhs);
}
inline const WGPUCompareFunction* ToAPI(const wgpu::CompareFunction* rhs) {
    return reinterpret_cast<const WGPUCompareFunction*>(rhs);
}
inline WGPUCompareFunction* ToAPI(wgpu::CompareFunction* rhs) {
    return reinterpret_cast<WGPUCompareFunction*>(rhs);
}

inline wgpu::CompareFunction FromAPI(wgpu::CompareFunction rhs) {
    return rhs;
}
inline const wgpu::CompareFunction* FromAPI(const wgpu::CompareFunction* rhs) {
    return rhs;
}
inline wgpu::CompareFunction* FromAPI(wgpu::CompareFunction* rhs) {
    return rhs;
}
inline WGPUCompilationInfoRequestStatus ToAPI(wgpu::CompilationInfoRequestStatus rhs) {
    return static_cast<WGPUCompilationInfoRequestStatus>(rhs);
}
inline const WGPUCompilationInfoRequestStatus* ToAPI(const wgpu::CompilationInfoRequestStatus* rhs) {
    return reinterpret_cast<const WGPUCompilationInfoRequestStatus*>(rhs);
}
inline WGPUCompilationInfoRequestStatus* ToAPI(wgpu::CompilationInfoRequestStatus* rhs) {
    return reinterpret_cast<WGPUCompilationInfoRequestStatus*>(rhs);
}

inline wgpu::CompilationInfoRequestStatus FromAPI(wgpu::CompilationInfoRequestStatus rhs) {
    return rhs;
}
inline const wgpu::CompilationInfoRequestStatus* FromAPI(const wgpu::CompilationInfoRequestStatus* rhs) {
    return rhs;
}
inline wgpu::CompilationInfoRequestStatus* FromAPI(wgpu::CompilationInfoRequestStatus* rhs) {
    return rhs;
}
inline WGPUCompilationMessageType ToAPI(wgpu::CompilationMessageType rhs) {
    return static_cast<WGPUCompilationMessageType>(rhs);
}
inline const WGPUCompilationMessageType* ToAPI(const wgpu::CompilationMessageType* rhs) {
    return reinterpret_cast<const WGPUCompilationMessageType*>(rhs);
}
inline WGPUCompilationMessageType* ToAPI(wgpu::CompilationMessageType* rhs) {
    return reinterpret_cast<WGPUCompilationMessageType*>(rhs);
}

inline wgpu::CompilationMessageType FromAPI(wgpu::CompilationMessageType rhs) {
    return rhs;
}
inline const wgpu::CompilationMessageType* FromAPI(const wgpu::CompilationMessageType* rhs) {
    return rhs;
}
inline wgpu::CompilationMessageType* FromAPI(wgpu::CompilationMessageType* rhs) {
    return rhs;
}
inline WGPUComponentSwizzle ToAPI(wgpu::ComponentSwizzle rhs) {
    return static_cast<WGPUComponentSwizzle>(rhs);
}
inline const WGPUComponentSwizzle* ToAPI(const wgpu::ComponentSwizzle* rhs) {
    return reinterpret_cast<const WGPUComponentSwizzle*>(rhs);
}
inline WGPUComponentSwizzle* ToAPI(wgpu::ComponentSwizzle* rhs) {
    return reinterpret_cast<WGPUComponentSwizzle*>(rhs);
}

inline wgpu::ComponentSwizzle FromAPI(wgpu::ComponentSwizzle rhs) {
    return rhs;
}
inline const wgpu::ComponentSwizzle* FromAPI(const wgpu::ComponentSwizzle* rhs) {
    return rhs;
}
inline wgpu::ComponentSwizzle* FromAPI(wgpu::ComponentSwizzle* rhs) {
    return rhs;
}
inline WGPUCompositeAlphaMode ToAPI(wgpu::CompositeAlphaMode rhs) {
    return static_cast<WGPUCompositeAlphaMode>(rhs);
}
inline const WGPUCompositeAlphaMode* ToAPI(const wgpu::CompositeAlphaMode* rhs) {
    return reinterpret_cast<const WGPUCompositeAlphaMode*>(rhs);
}
inline WGPUCompositeAlphaMode* ToAPI(wgpu::CompositeAlphaMode* rhs) {
    return reinterpret_cast<WGPUCompositeAlphaMode*>(rhs);
}

inline wgpu::CompositeAlphaMode FromAPI(wgpu::CompositeAlphaMode rhs) {
    return rhs;
}
inline const wgpu::CompositeAlphaMode* FromAPI(const wgpu::CompositeAlphaMode* rhs) {
    return rhs;
}
inline wgpu::CompositeAlphaMode* FromAPI(wgpu::CompositeAlphaMode* rhs) {
    return rhs;
}
inline WGPUCreatePipelineAsyncStatus ToAPI(wgpu::CreatePipelineAsyncStatus rhs) {
    return static_cast<WGPUCreatePipelineAsyncStatus>(rhs);
}
inline const WGPUCreatePipelineAsyncStatus* ToAPI(const wgpu::CreatePipelineAsyncStatus* rhs) {
    return reinterpret_cast<const WGPUCreatePipelineAsyncStatus*>(rhs);
}
inline WGPUCreatePipelineAsyncStatus* ToAPI(wgpu::CreatePipelineAsyncStatus* rhs) {
    return reinterpret_cast<WGPUCreatePipelineAsyncStatus*>(rhs);
}

inline wgpu::CreatePipelineAsyncStatus FromAPI(wgpu::CreatePipelineAsyncStatus rhs) {
    return rhs;
}
inline const wgpu::CreatePipelineAsyncStatus* FromAPI(const wgpu::CreatePipelineAsyncStatus* rhs) {
    return rhs;
}
inline wgpu::CreatePipelineAsyncStatus* FromAPI(wgpu::CreatePipelineAsyncStatus* rhs) {
    return rhs;
}
inline WGPUCullMode ToAPI(wgpu::CullMode rhs) {
    return static_cast<WGPUCullMode>(rhs);
}
inline const WGPUCullMode* ToAPI(const wgpu::CullMode* rhs) {
    return reinterpret_cast<const WGPUCullMode*>(rhs);
}
inline WGPUCullMode* ToAPI(wgpu::CullMode* rhs) {
    return reinterpret_cast<WGPUCullMode*>(rhs);
}

inline wgpu::CullMode FromAPI(wgpu::CullMode rhs) {
    return rhs;
}
inline const wgpu::CullMode* FromAPI(const wgpu::CullMode* rhs) {
    return rhs;
}
inline wgpu::CullMode* FromAPI(wgpu::CullMode* rhs) {
    return rhs;
}
inline WGPUDeviceLostReason ToAPI(wgpu::DeviceLostReason rhs) {
    return static_cast<WGPUDeviceLostReason>(rhs);
}
inline const WGPUDeviceLostReason* ToAPI(const wgpu::DeviceLostReason* rhs) {
    return reinterpret_cast<const WGPUDeviceLostReason*>(rhs);
}
inline WGPUDeviceLostReason* ToAPI(wgpu::DeviceLostReason* rhs) {
    return reinterpret_cast<WGPUDeviceLostReason*>(rhs);
}

inline wgpu::DeviceLostReason FromAPI(wgpu::DeviceLostReason rhs) {
    return rhs;
}
inline const wgpu::DeviceLostReason* FromAPI(const wgpu::DeviceLostReason* rhs) {
    return rhs;
}
inline wgpu::DeviceLostReason* FromAPI(wgpu::DeviceLostReason* rhs) {
    return rhs;
}
inline WGPUErrorFilter ToAPI(wgpu::ErrorFilter rhs) {
    return static_cast<WGPUErrorFilter>(rhs);
}
inline const WGPUErrorFilter* ToAPI(const wgpu::ErrorFilter* rhs) {
    return reinterpret_cast<const WGPUErrorFilter*>(rhs);
}
inline WGPUErrorFilter* ToAPI(wgpu::ErrorFilter* rhs) {
    return reinterpret_cast<WGPUErrorFilter*>(rhs);
}

inline wgpu::ErrorFilter FromAPI(wgpu::ErrorFilter rhs) {
    return rhs;
}
inline const wgpu::ErrorFilter* FromAPI(const wgpu::ErrorFilter* rhs) {
    return rhs;
}
inline wgpu::ErrorFilter* FromAPI(wgpu::ErrorFilter* rhs) {
    return rhs;
}
inline WGPUErrorType ToAPI(wgpu::ErrorType rhs) {
    return static_cast<WGPUErrorType>(rhs);
}
inline const WGPUErrorType* ToAPI(const wgpu::ErrorType* rhs) {
    return reinterpret_cast<const WGPUErrorType*>(rhs);
}
inline WGPUErrorType* ToAPI(wgpu::ErrorType* rhs) {
    return reinterpret_cast<WGPUErrorType*>(rhs);
}

inline wgpu::ErrorType FromAPI(wgpu::ErrorType rhs) {
    return rhs;
}
inline const wgpu::ErrorType* FromAPI(const wgpu::ErrorType* rhs) {
    return rhs;
}
inline wgpu::ErrorType* FromAPI(wgpu::ErrorType* rhs) {
    return rhs;
}
inline WGPUExternalTextureRotation ToAPI(wgpu::ExternalTextureRotation rhs) {
    return static_cast<WGPUExternalTextureRotation>(rhs);
}
inline const WGPUExternalTextureRotation* ToAPI(const wgpu::ExternalTextureRotation* rhs) {
    return reinterpret_cast<const WGPUExternalTextureRotation*>(rhs);
}
inline WGPUExternalTextureRotation* ToAPI(wgpu::ExternalTextureRotation* rhs) {
    return reinterpret_cast<WGPUExternalTextureRotation*>(rhs);
}

inline wgpu::ExternalTextureRotation FromAPI(wgpu::ExternalTextureRotation rhs) {
    return rhs;
}
inline const wgpu::ExternalTextureRotation* FromAPI(const wgpu::ExternalTextureRotation* rhs) {
    return rhs;
}
inline wgpu::ExternalTextureRotation* FromAPI(wgpu::ExternalTextureRotation* rhs) {
    return rhs;
}
inline WGPUFeatureLevel ToAPI(wgpu::FeatureLevel rhs) {
    return static_cast<WGPUFeatureLevel>(rhs);
}
inline const WGPUFeatureLevel* ToAPI(const wgpu::FeatureLevel* rhs) {
    return reinterpret_cast<const WGPUFeatureLevel*>(rhs);
}
inline WGPUFeatureLevel* ToAPI(wgpu::FeatureLevel* rhs) {
    return reinterpret_cast<WGPUFeatureLevel*>(rhs);
}

inline wgpu::FeatureLevel FromAPI(wgpu::FeatureLevel rhs) {
    return rhs;
}
inline const wgpu::FeatureLevel* FromAPI(const wgpu::FeatureLevel* rhs) {
    return rhs;
}
inline wgpu::FeatureLevel* FromAPI(wgpu::FeatureLevel* rhs) {
    return rhs;
}
inline WGPUFeatureName ToAPI(wgpu::FeatureName rhs) {
    return static_cast<WGPUFeatureName>(rhs);
}
inline const WGPUFeatureName* ToAPI(const wgpu::FeatureName* rhs) {
    return reinterpret_cast<const WGPUFeatureName*>(rhs);
}
inline WGPUFeatureName* ToAPI(wgpu::FeatureName* rhs) {
    return reinterpret_cast<WGPUFeatureName*>(rhs);
}

inline wgpu::FeatureName FromAPI(wgpu::FeatureName rhs) {
    return rhs;
}
inline const wgpu::FeatureName* FromAPI(const wgpu::FeatureName* rhs) {
    return rhs;
}
inline wgpu::FeatureName* FromAPI(wgpu::FeatureName* rhs) {
    return rhs;
}
inline WGPUFilterMode ToAPI(wgpu::FilterMode rhs) {
    return static_cast<WGPUFilterMode>(rhs);
}
inline const WGPUFilterMode* ToAPI(const wgpu::FilterMode* rhs) {
    return reinterpret_cast<const WGPUFilterMode*>(rhs);
}
inline WGPUFilterMode* ToAPI(wgpu::FilterMode* rhs) {
    return reinterpret_cast<WGPUFilterMode*>(rhs);
}

inline wgpu::FilterMode FromAPI(wgpu::FilterMode rhs) {
    return rhs;
}
inline const wgpu::FilterMode* FromAPI(const wgpu::FilterMode* rhs) {
    return rhs;
}
inline wgpu::FilterMode* FromAPI(wgpu::FilterMode* rhs) {
    return rhs;
}
inline WGPUFrontFace ToAPI(wgpu::FrontFace rhs) {
    return static_cast<WGPUFrontFace>(rhs);
}
inline const WGPUFrontFace* ToAPI(const wgpu::FrontFace* rhs) {
    return reinterpret_cast<const WGPUFrontFace*>(rhs);
}
inline WGPUFrontFace* ToAPI(wgpu::FrontFace* rhs) {
    return reinterpret_cast<WGPUFrontFace*>(rhs);
}

inline wgpu::FrontFace FromAPI(wgpu::FrontFace rhs) {
    return rhs;
}
inline const wgpu::FrontFace* FromAPI(const wgpu::FrontFace* rhs) {
    return rhs;
}
inline wgpu::FrontFace* FromAPI(wgpu::FrontFace* rhs) {
    return rhs;
}
inline WGPUIndexFormat ToAPI(wgpu::IndexFormat rhs) {
    return static_cast<WGPUIndexFormat>(rhs);
}
inline const WGPUIndexFormat* ToAPI(const wgpu::IndexFormat* rhs) {
    return reinterpret_cast<const WGPUIndexFormat*>(rhs);
}
inline WGPUIndexFormat* ToAPI(wgpu::IndexFormat* rhs) {
    return reinterpret_cast<WGPUIndexFormat*>(rhs);
}

inline wgpu::IndexFormat FromAPI(wgpu::IndexFormat rhs) {
    return rhs;
}
inline const wgpu::IndexFormat* FromAPI(const wgpu::IndexFormat* rhs) {
    return rhs;
}
inline wgpu::IndexFormat* FromAPI(wgpu::IndexFormat* rhs) {
    return rhs;
}
inline WGPUInstanceFeatureName ToAPI(wgpu::InstanceFeatureName rhs) {
    return static_cast<WGPUInstanceFeatureName>(rhs);
}
inline const WGPUInstanceFeatureName* ToAPI(const wgpu::InstanceFeatureName* rhs) {
    return reinterpret_cast<const WGPUInstanceFeatureName*>(rhs);
}
inline WGPUInstanceFeatureName* ToAPI(wgpu::InstanceFeatureName* rhs) {
    return reinterpret_cast<WGPUInstanceFeatureName*>(rhs);
}

inline wgpu::InstanceFeatureName FromAPI(wgpu::InstanceFeatureName rhs) {
    return rhs;
}
inline const wgpu::InstanceFeatureName* FromAPI(const wgpu::InstanceFeatureName* rhs) {
    return rhs;
}
inline wgpu::InstanceFeatureName* FromAPI(wgpu::InstanceFeatureName* rhs) {
    return rhs;
}
inline WGPULoadOp ToAPI(wgpu::LoadOp rhs) {
    return static_cast<WGPULoadOp>(rhs);
}
inline const WGPULoadOp* ToAPI(const wgpu::LoadOp* rhs) {
    return reinterpret_cast<const WGPULoadOp*>(rhs);
}
inline WGPULoadOp* ToAPI(wgpu::LoadOp* rhs) {
    return reinterpret_cast<WGPULoadOp*>(rhs);
}

inline wgpu::LoadOp FromAPI(wgpu::LoadOp rhs) {
    return rhs;
}
inline const wgpu::LoadOp* FromAPI(const wgpu::LoadOp* rhs) {
    return rhs;
}
inline wgpu::LoadOp* FromAPI(wgpu::LoadOp* rhs) {
    return rhs;
}
inline WGPULoggingType ToAPI(wgpu::LoggingType rhs) {
    return static_cast<WGPULoggingType>(rhs);
}
inline const WGPULoggingType* ToAPI(const wgpu::LoggingType* rhs) {
    return reinterpret_cast<const WGPULoggingType*>(rhs);
}
inline WGPULoggingType* ToAPI(wgpu::LoggingType* rhs) {
    return reinterpret_cast<WGPULoggingType*>(rhs);
}

inline wgpu::LoggingType FromAPI(wgpu::LoggingType rhs) {
    return rhs;
}
inline const wgpu::LoggingType* FromAPI(const wgpu::LoggingType* rhs) {
    return rhs;
}
inline wgpu::LoggingType* FromAPI(wgpu::LoggingType* rhs) {
    return rhs;
}
inline WGPUMapAsyncStatus ToAPI(wgpu::MapAsyncStatus rhs) {
    return static_cast<WGPUMapAsyncStatus>(rhs);
}
inline const WGPUMapAsyncStatus* ToAPI(const wgpu::MapAsyncStatus* rhs) {
    return reinterpret_cast<const WGPUMapAsyncStatus*>(rhs);
}
inline WGPUMapAsyncStatus* ToAPI(wgpu::MapAsyncStatus* rhs) {
    return reinterpret_cast<WGPUMapAsyncStatus*>(rhs);
}

inline wgpu::MapAsyncStatus FromAPI(wgpu::MapAsyncStatus rhs) {
    return rhs;
}
inline const wgpu::MapAsyncStatus* FromAPI(const wgpu::MapAsyncStatus* rhs) {
    return rhs;
}
inline wgpu::MapAsyncStatus* FromAPI(wgpu::MapAsyncStatus* rhs) {
    return rhs;
}
inline WGPUMipmapFilterMode ToAPI(wgpu::MipmapFilterMode rhs) {
    return static_cast<WGPUMipmapFilterMode>(rhs);
}
inline const WGPUMipmapFilterMode* ToAPI(const wgpu::MipmapFilterMode* rhs) {
    return reinterpret_cast<const WGPUMipmapFilterMode*>(rhs);
}
inline WGPUMipmapFilterMode* ToAPI(wgpu::MipmapFilterMode* rhs) {
    return reinterpret_cast<WGPUMipmapFilterMode*>(rhs);
}

inline wgpu::MipmapFilterMode FromAPI(wgpu::MipmapFilterMode rhs) {
    return rhs;
}
inline const wgpu::MipmapFilterMode* FromAPI(const wgpu::MipmapFilterMode* rhs) {
    return rhs;
}
inline wgpu::MipmapFilterMode* FromAPI(wgpu::MipmapFilterMode* rhs) {
    return rhs;
}
inline WGPUOptionalBool ToAPI(wgpu::OptionalBool rhs) {
    return static_cast<WGPUOptionalBool>(rhs);
}
inline const WGPUOptionalBool* ToAPI(const wgpu::OptionalBool* rhs) {
    return reinterpret_cast<const WGPUOptionalBool*>(rhs);
}
inline WGPUOptionalBool* ToAPI(wgpu::OptionalBool* rhs) {
    return reinterpret_cast<WGPUOptionalBool*>(rhs);
}

inline wgpu::OptionalBool FromAPI(wgpu::OptionalBool rhs) {
    return rhs;
}
inline const wgpu::OptionalBool* FromAPI(const wgpu::OptionalBool* rhs) {
    return rhs;
}
inline wgpu::OptionalBool* FromAPI(wgpu::OptionalBool* rhs) {
    return rhs;
}
inline WGPUPopErrorScopeStatus ToAPI(wgpu::PopErrorScopeStatus rhs) {
    return static_cast<WGPUPopErrorScopeStatus>(rhs);
}
inline const WGPUPopErrorScopeStatus* ToAPI(const wgpu::PopErrorScopeStatus* rhs) {
    return reinterpret_cast<const WGPUPopErrorScopeStatus*>(rhs);
}
inline WGPUPopErrorScopeStatus* ToAPI(wgpu::PopErrorScopeStatus* rhs) {
    return reinterpret_cast<WGPUPopErrorScopeStatus*>(rhs);
}

inline wgpu::PopErrorScopeStatus FromAPI(wgpu::PopErrorScopeStatus rhs) {
    return rhs;
}
inline const wgpu::PopErrorScopeStatus* FromAPI(const wgpu::PopErrorScopeStatus* rhs) {
    return rhs;
}
inline wgpu::PopErrorScopeStatus* FromAPI(wgpu::PopErrorScopeStatus* rhs) {
    return rhs;
}
inline WGPUPowerPreference ToAPI(wgpu::PowerPreference rhs) {
    return static_cast<WGPUPowerPreference>(rhs);
}
inline const WGPUPowerPreference* ToAPI(const wgpu::PowerPreference* rhs) {
    return reinterpret_cast<const WGPUPowerPreference*>(rhs);
}
inline WGPUPowerPreference* ToAPI(wgpu::PowerPreference* rhs) {
    return reinterpret_cast<WGPUPowerPreference*>(rhs);
}

inline wgpu::PowerPreference FromAPI(wgpu::PowerPreference rhs) {
    return rhs;
}
inline const wgpu::PowerPreference* FromAPI(const wgpu::PowerPreference* rhs) {
    return rhs;
}
inline wgpu::PowerPreference* FromAPI(wgpu::PowerPreference* rhs) {
    return rhs;
}
inline WGPUPredefinedColorSpace ToAPI(wgpu::PredefinedColorSpace rhs) {
    return static_cast<WGPUPredefinedColorSpace>(rhs);
}
inline const WGPUPredefinedColorSpace* ToAPI(const wgpu::PredefinedColorSpace* rhs) {
    return reinterpret_cast<const WGPUPredefinedColorSpace*>(rhs);
}
inline WGPUPredefinedColorSpace* ToAPI(wgpu::PredefinedColorSpace* rhs) {
    return reinterpret_cast<WGPUPredefinedColorSpace*>(rhs);
}

inline wgpu::PredefinedColorSpace FromAPI(wgpu::PredefinedColorSpace rhs) {
    return rhs;
}
inline const wgpu::PredefinedColorSpace* FromAPI(const wgpu::PredefinedColorSpace* rhs) {
    return rhs;
}
inline wgpu::PredefinedColorSpace* FromAPI(wgpu::PredefinedColorSpace* rhs) {
    return rhs;
}
inline WGPUPresentMode ToAPI(wgpu::PresentMode rhs) {
    return static_cast<WGPUPresentMode>(rhs);
}
inline const WGPUPresentMode* ToAPI(const wgpu::PresentMode* rhs) {
    return reinterpret_cast<const WGPUPresentMode*>(rhs);
}
inline WGPUPresentMode* ToAPI(wgpu::PresentMode* rhs) {
    return reinterpret_cast<WGPUPresentMode*>(rhs);
}

inline wgpu::PresentMode FromAPI(wgpu::PresentMode rhs) {
    return rhs;
}
inline const wgpu::PresentMode* FromAPI(const wgpu::PresentMode* rhs) {
    return rhs;
}
inline wgpu::PresentMode* FromAPI(wgpu::PresentMode* rhs) {
    return rhs;
}
inline WGPUPrimitiveTopology ToAPI(wgpu::PrimitiveTopology rhs) {
    return static_cast<WGPUPrimitiveTopology>(rhs);
}
inline const WGPUPrimitiveTopology* ToAPI(const wgpu::PrimitiveTopology* rhs) {
    return reinterpret_cast<const WGPUPrimitiveTopology*>(rhs);
}
inline WGPUPrimitiveTopology* ToAPI(wgpu::PrimitiveTopology* rhs) {
    return reinterpret_cast<WGPUPrimitiveTopology*>(rhs);
}

inline wgpu::PrimitiveTopology FromAPI(wgpu::PrimitiveTopology rhs) {
    return rhs;
}
inline const wgpu::PrimitiveTopology* FromAPI(const wgpu::PrimitiveTopology* rhs) {
    return rhs;
}
inline wgpu::PrimitiveTopology* FromAPI(wgpu::PrimitiveTopology* rhs) {
    return rhs;
}
inline WGPUQueryType ToAPI(wgpu::QueryType rhs) {
    return static_cast<WGPUQueryType>(rhs);
}
inline const WGPUQueryType* ToAPI(const wgpu::QueryType* rhs) {
    return reinterpret_cast<const WGPUQueryType*>(rhs);
}
inline WGPUQueryType* ToAPI(wgpu::QueryType* rhs) {
    return reinterpret_cast<WGPUQueryType*>(rhs);
}

inline wgpu::QueryType FromAPI(wgpu::QueryType rhs) {
    return rhs;
}
inline const wgpu::QueryType* FromAPI(const wgpu::QueryType* rhs) {
    return rhs;
}
inline wgpu::QueryType* FromAPI(wgpu::QueryType* rhs) {
    return rhs;
}
inline WGPUQueueWorkDoneStatus ToAPI(wgpu::QueueWorkDoneStatus rhs) {
    return static_cast<WGPUQueueWorkDoneStatus>(rhs);
}
inline const WGPUQueueWorkDoneStatus* ToAPI(const wgpu::QueueWorkDoneStatus* rhs) {
    return reinterpret_cast<const WGPUQueueWorkDoneStatus*>(rhs);
}
inline WGPUQueueWorkDoneStatus* ToAPI(wgpu::QueueWorkDoneStatus* rhs) {
    return reinterpret_cast<WGPUQueueWorkDoneStatus*>(rhs);
}

inline wgpu::QueueWorkDoneStatus FromAPI(wgpu::QueueWorkDoneStatus rhs) {
    return rhs;
}
inline const wgpu::QueueWorkDoneStatus* FromAPI(const wgpu::QueueWorkDoneStatus* rhs) {
    return rhs;
}
inline wgpu::QueueWorkDoneStatus* FromAPI(wgpu::QueueWorkDoneStatus* rhs) {
    return rhs;
}
inline WGPURequestAdapterStatus ToAPI(wgpu::RequestAdapterStatus rhs) {
    return static_cast<WGPURequestAdapterStatus>(rhs);
}
inline const WGPURequestAdapterStatus* ToAPI(const wgpu::RequestAdapterStatus* rhs) {
    return reinterpret_cast<const WGPURequestAdapterStatus*>(rhs);
}
inline WGPURequestAdapterStatus* ToAPI(wgpu::RequestAdapterStatus* rhs) {
    return reinterpret_cast<WGPURequestAdapterStatus*>(rhs);
}

inline wgpu::RequestAdapterStatus FromAPI(wgpu::RequestAdapterStatus rhs) {
    return rhs;
}
inline const wgpu::RequestAdapterStatus* FromAPI(const wgpu::RequestAdapterStatus* rhs) {
    return rhs;
}
inline wgpu::RequestAdapterStatus* FromAPI(wgpu::RequestAdapterStatus* rhs) {
    return rhs;
}
inline WGPURequestDeviceStatus ToAPI(wgpu::RequestDeviceStatus rhs) {
    return static_cast<WGPURequestDeviceStatus>(rhs);
}
inline const WGPURequestDeviceStatus* ToAPI(const wgpu::RequestDeviceStatus* rhs) {
    return reinterpret_cast<const WGPURequestDeviceStatus*>(rhs);
}
inline WGPURequestDeviceStatus* ToAPI(wgpu::RequestDeviceStatus* rhs) {
    return reinterpret_cast<WGPURequestDeviceStatus*>(rhs);
}

inline wgpu::RequestDeviceStatus FromAPI(wgpu::RequestDeviceStatus rhs) {
    return rhs;
}
inline const wgpu::RequestDeviceStatus* FromAPI(const wgpu::RequestDeviceStatus* rhs) {
    return rhs;
}
inline wgpu::RequestDeviceStatus* FromAPI(wgpu::RequestDeviceStatus* rhs) {
    return rhs;
}
inline WGPUSamplerBindingType ToAPI(wgpu::SamplerBindingType rhs) {
    return static_cast<WGPUSamplerBindingType>(rhs);
}
inline const WGPUSamplerBindingType* ToAPI(const wgpu::SamplerBindingType* rhs) {
    return reinterpret_cast<const WGPUSamplerBindingType*>(rhs);
}
inline WGPUSamplerBindingType* ToAPI(wgpu::SamplerBindingType* rhs) {
    return reinterpret_cast<WGPUSamplerBindingType*>(rhs);
}

inline wgpu::SamplerBindingType FromAPI(wgpu::SamplerBindingType rhs) {
    return rhs;
}
inline const wgpu::SamplerBindingType* FromAPI(const wgpu::SamplerBindingType* rhs) {
    return rhs;
}
inline wgpu::SamplerBindingType* FromAPI(wgpu::SamplerBindingType* rhs) {
    return rhs;
}
inline WGPUSharedFenceType ToAPI(wgpu::SharedFenceType rhs) {
    return static_cast<WGPUSharedFenceType>(rhs);
}
inline const WGPUSharedFenceType* ToAPI(const wgpu::SharedFenceType* rhs) {
    return reinterpret_cast<const WGPUSharedFenceType*>(rhs);
}
inline WGPUSharedFenceType* ToAPI(wgpu::SharedFenceType* rhs) {
    return reinterpret_cast<WGPUSharedFenceType*>(rhs);
}

inline wgpu::SharedFenceType FromAPI(wgpu::SharedFenceType rhs) {
    return rhs;
}
inline const wgpu::SharedFenceType* FromAPI(const wgpu::SharedFenceType* rhs) {
    return rhs;
}
inline wgpu::SharedFenceType* FromAPI(wgpu::SharedFenceType* rhs) {
    return rhs;
}
inline WGPUStatus ToAPI(wgpu::Status rhs) {
    return static_cast<WGPUStatus>(rhs);
}
inline const WGPUStatus* ToAPI(const wgpu::Status* rhs) {
    return reinterpret_cast<const WGPUStatus*>(rhs);
}
inline WGPUStatus* ToAPI(wgpu::Status* rhs) {
    return reinterpret_cast<WGPUStatus*>(rhs);
}

inline wgpu::Status FromAPI(wgpu::Status rhs) {
    return rhs;
}
inline const wgpu::Status* FromAPI(const wgpu::Status* rhs) {
    return rhs;
}
inline wgpu::Status* FromAPI(wgpu::Status* rhs) {
    return rhs;
}
inline WGPUStencilOperation ToAPI(wgpu::StencilOperation rhs) {
    return static_cast<WGPUStencilOperation>(rhs);
}
inline const WGPUStencilOperation* ToAPI(const wgpu::StencilOperation* rhs) {
    return reinterpret_cast<const WGPUStencilOperation*>(rhs);
}
inline WGPUStencilOperation* ToAPI(wgpu::StencilOperation* rhs) {
    return reinterpret_cast<WGPUStencilOperation*>(rhs);
}

inline wgpu::StencilOperation FromAPI(wgpu::StencilOperation rhs) {
    return rhs;
}
inline const wgpu::StencilOperation* FromAPI(const wgpu::StencilOperation* rhs) {
    return rhs;
}
inline wgpu::StencilOperation* FromAPI(wgpu::StencilOperation* rhs) {
    return rhs;
}
inline WGPUStorageTextureAccess ToAPI(wgpu::StorageTextureAccess rhs) {
    return static_cast<WGPUStorageTextureAccess>(rhs);
}
inline const WGPUStorageTextureAccess* ToAPI(const wgpu::StorageTextureAccess* rhs) {
    return reinterpret_cast<const WGPUStorageTextureAccess*>(rhs);
}
inline WGPUStorageTextureAccess* ToAPI(wgpu::StorageTextureAccess* rhs) {
    return reinterpret_cast<WGPUStorageTextureAccess*>(rhs);
}

inline wgpu::StorageTextureAccess FromAPI(wgpu::StorageTextureAccess rhs) {
    return rhs;
}
inline const wgpu::StorageTextureAccess* FromAPI(const wgpu::StorageTextureAccess* rhs) {
    return rhs;
}
inline wgpu::StorageTextureAccess* FromAPI(wgpu::StorageTextureAccess* rhs) {
    return rhs;
}
inline WGPUStoreOp ToAPI(wgpu::StoreOp rhs) {
    return static_cast<WGPUStoreOp>(rhs);
}
inline const WGPUStoreOp* ToAPI(const wgpu::StoreOp* rhs) {
    return reinterpret_cast<const WGPUStoreOp*>(rhs);
}
inline WGPUStoreOp* ToAPI(wgpu::StoreOp* rhs) {
    return reinterpret_cast<WGPUStoreOp*>(rhs);
}

inline wgpu::StoreOp FromAPI(wgpu::StoreOp rhs) {
    return rhs;
}
inline const wgpu::StoreOp* FromAPI(const wgpu::StoreOp* rhs) {
    return rhs;
}
inline wgpu::StoreOp* FromAPI(wgpu::StoreOp* rhs) {
    return rhs;
}
inline WGPUSType ToAPI(wgpu::SType rhs) {
    return static_cast<WGPUSType>(rhs);
}
inline const WGPUSType* ToAPI(const wgpu::SType* rhs) {
    return reinterpret_cast<const WGPUSType*>(rhs);
}
inline WGPUSType* ToAPI(wgpu::SType* rhs) {
    return reinterpret_cast<WGPUSType*>(rhs);
}

inline wgpu::SType FromAPI(wgpu::SType rhs) {
    return rhs;
}
inline const wgpu::SType* FromAPI(const wgpu::SType* rhs) {
    return rhs;
}
inline wgpu::SType* FromAPI(wgpu::SType* rhs) {
    return rhs;
}
inline WGPUSubgroupMatrixComponentType ToAPI(wgpu::SubgroupMatrixComponentType rhs) {
    return static_cast<WGPUSubgroupMatrixComponentType>(rhs);
}
inline const WGPUSubgroupMatrixComponentType* ToAPI(const wgpu::SubgroupMatrixComponentType* rhs) {
    return reinterpret_cast<const WGPUSubgroupMatrixComponentType*>(rhs);
}
inline WGPUSubgroupMatrixComponentType* ToAPI(wgpu::SubgroupMatrixComponentType* rhs) {
    return reinterpret_cast<WGPUSubgroupMatrixComponentType*>(rhs);
}

inline wgpu::SubgroupMatrixComponentType FromAPI(wgpu::SubgroupMatrixComponentType rhs) {
    return rhs;
}
inline const wgpu::SubgroupMatrixComponentType* FromAPI(const wgpu::SubgroupMatrixComponentType* rhs) {
    return rhs;
}
inline wgpu::SubgroupMatrixComponentType* FromAPI(wgpu::SubgroupMatrixComponentType* rhs) {
    return rhs;
}
inline WGPUSurfaceGetCurrentTextureStatus ToAPI(wgpu::SurfaceGetCurrentTextureStatus rhs) {
    return static_cast<WGPUSurfaceGetCurrentTextureStatus>(rhs);
}
inline const WGPUSurfaceGetCurrentTextureStatus* ToAPI(const wgpu::SurfaceGetCurrentTextureStatus* rhs) {
    return reinterpret_cast<const WGPUSurfaceGetCurrentTextureStatus*>(rhs);
}
inline WGPUSurfaceGetCurrentTextureStatus* ToAPI(wgpu::SurfaceGetCurrentTextureStatus* rhs) {
    return reinterpret_cast<WGPUSurfaceGetCurrentTextureStatus*>(rhs);
}

inline wgpu::SurfaceGetCurrentTextureStatus FromAPI(wgpu::SurfaceGetCurrentTextureStatus rhs) {
    return rhs;
}
inline const wgpu::SurfaceGetCurrentTextureStatus* FromAPI(const wgpu::SurfaceGetCurrentTextureStatus* rhs) {
    return rhs;
}
inline wgpu::SurfaceGetCurrentTextureStatus* FromAPI(wgpu::SurfaceGetCurrentTextureStatus* rhs) {
    return rhs;
}
inline WGPUTexelBufferAccess ToAPI(wgpu::TexelBufferAccess rhs) {
    return static_cast<WGPUTexelBufferAccess>(rhs);
}
inline const WGPUTexelBufferAccess* ToAPI(const wgpu::TexelBufferAccess* rhs) {
    return reinterpret_cast<const WGPUTexelBufferAccess*>(rhs);
}
inline WGPUTexelBufferAccess* ToAPI(wgpu::TexelBufferAccess* rhs) {
    return reinterpret_cast<WGPUTexelBufferAccess*>(rhs);
}

inline wgpu::TexelBufferAccess FromAPI(wgpu::TexelBufferAccess rhs) {
    return rhs;
}
inline const wgpu::TexelBufferAccess* FromAPI(const wgpu::TexelBufferAccess* rhs) {
    return rhs;
}
inline wgpu::TexelBufferAccess* FromAPI(wgpu::TexelBufferAccess* rhs) {
    return rhs;
}
inline WGPUTextureAspect ToAPI(wgpu::TextureAspect rhs) {
    return static_cast<WGPUTextureAspect>(rhs);
}
inline const WGPUTextureAspect* ToAPI(const wgpu::TextureAspect* rhs) {
    return reinterpret_cast<const WGPUTextureAspect*>(rhs);
}
inline WGPUTextureAspect* ToAPI(wgpu::TextureAspect* rhs) {
    return reinterpret_cast<WGPUTextureAspect*>(rhs);
}

inline wgpu::TextureAspect FromAPI(wgpu::TextureAspect rhs) {
    return rhs;
}
inline const wgpu::TextureAspect* FromAPI(const wgpu::TextureAspect* rhs) {
    return rhs;
}
inline wgpu::TextureAspect* FromAPI(wgpu::TextureAspect* rhs) {
    return rhs;
}
inline WGPUTextureDimension ToAPI(wgpu::TextureDimension rhs) {
    return static_cast<WGPUTextureDimension>(rhs);
}
inline const WGPUTextureDimension* ToAPI(const wgpu::TextureDimension* rhs) {
    return reinterpret_cast<const WGPUTextureDimension*>(rhs);
}
inline WGPUTextureDimension* ToAPI(wgpu::TextureDimension* rhs) {
    return reinterpret_cast<WGPUTextureDimension*>(rhs);
}

inline wgpu::TextureDimension FromAPI(wgpu::TextureDimension rhs) {
    return rhs;
}
inline const wgpu::TextureDimension* FromAPI(const wgpu::TextureDimension* rhs) {
    return rhs;
}
inline wgpu::TextureDimension* FromAPI(wgpu::TextureDimension* rhs) {
    return rhs;
}
inline WGPUTextureFormat ToAPI(wgpu::TextureFormat rhs) {
    return static_cast<WGPUTextureFormat>(rhs);
}
inline const WGPUTextureFormat* ToAPI(const wgpu::TextureFormat* rhs) {
    return reinterpret_cast<const WGPUTextureFormat*>(rhs);
}
inline WGPUTextureFormat* ToAPI(wgpu::TextureFormat* rhs) {
    return reinterpret_cast<WGPUTextureFormat*>(rhs);
}

inline wgpu::TextureFormat FromAPI(wgpu::TextureFormat rhs) {
    return rhs;
}
inline const wgpu::TextureFormat* FromAPI(const wgpu::TextureFormat* rhs) {
    return rhs;
}
inline wgpu::TextureFormat* FromAPI(wgpu::TextureFormat* rhs) {
    return rhs;
}
inline WGPUTextureSampleType ToAPI(wgpu::TextureSampleType rhs) {
    return static_cast<WGPUTextureSampleType>(rhs);
}
inline const WGPUTextureSampleType* ToAPI(const wgpu::TextureSampleType* rhs) {
    return reinterpret_cast<const WGPUTextureSampleType*>(rhs);
}
inline WGPUTextureSampleType* ToAPI(wgpu::TextureSampleType* rhs) {
    return reinterpret_cast<WGPUTextureSampleType*>(rhs);
}

inline wgpu::TextureSampleType FromAPI(wgpu::TextureSampleType rhs) {
    return rhs;
}
inline const wgpu::TextureSampleType* FromAPI(const wgpu::TextureSampleType* rhs) {
    return rhs;
}
inline wgpu::TextureSampleType* FromAPI(wgpu::TextureSampleType* rhs) {
    return rhs;
}
inline WGPUTextureViewDimension ToAPI(wgpu::TextureViewDimension rhs) {
    return static_cast<WGPUTextureViewDimension>(rhs);
}
inline const WGPUTextureViewDimension* ToAPI(const wgpu::TextureViewDimension* rhs) {
    return reinterpret_cast<const WGPUTextureViewDimension*>(rhs);
}
inline WGPUTextureViewDimension* ToAPI(wgpu::TextureViewDimension* rhs) {
    return reinterpret_cast<WGPUTextureViewDimension*>(rhs);
}

inline wgpu::TextureViewDimension FromAPI(wgpu::TextureViewDimension rhs) {
    return rhs;
}
inline const wgpu::TextureViewDimension* FromAPI(const wgpu::TextureViewDimension* rhs) {
    return rhs;
}
inline wgpu::TextureViewDimension* FromAPI(wgpu::TextureViewDimension* rhs) {
    return rhs;
}
inline WGPUToneMappingMode ToAPI(wgpu::ToneMappingMode rhs) {
    return static_cast<WGPUToneMappingMode>(rhs);
}
inline const WGPUToneMappingMode* ToAPI(const wgpu::ToneMappingMode* rhs) {
    return reinterpret_cast<const WGPUToneMappingMode*>(rhs);
}
inline WGPUToneMappingMode* ToAPI(wgpu::ToneMappingMode* rhs) {
    return reinterpret_cast<WGPUToneMappingMode*>(rhs);
}

inline wgpu::ToneMappingMode FromAPI(wgpu::ToneMappingMode rhs) {
    return rhs;
}
inline const wgpu::ToneMappingMode* FromAPI(const wgpu::ToneMappingMode* rhs) {
    return rhs;
}
inline wgpu::ToneMappingMode* FromAPI(wgpu::ToneMappingMode* rhs) {
    return rhs;
}
inline WGPUVertexFormat ToAPI(wgpu::VertexFormat rhs) {
    return static_cast<WGPUVertexFormat>(rhs);
}
inline const WGPUVertexFormat* ToAPI(const wgpu::VertexFormat* rhs) {
    return reinterpret_cast<const WGPUVertexFormat*>(rhs);
}
inline WGPUVertexFormat* ToAPI(wgpu::VertexFormat* rhs) {
    return reinterpret_cast<WGPUVertexFormat*>(rhs);
}

inline wgpu::VertexFormat FromAPI(wgpu::VertexFormat rhs) {
    return rhs;
}
inline const wgpu::VertexFormat* FromAPI(const wgpu::VertexFormat* rhs) {
    return rhs;
}
inline wgpu::VertexFormat* FromAPI(wgpu::VertexFormat* rhs) {
    return rhs;
}
inline WGPUVertexStepMode ToAPI(wgpu::VertexStepMode rhs) {
    return static_cast<WGPUVertexStepMode>(rhs);
}
inline const WGPUVertexStepMode* ToAPI(const wgpu::VertexStepMode* rhs) {
    return reinterpret_cast<const WGPUVertexStepMode*>(rhs);
}
inline WGPUVertexStepMode* ToAPI(wgpu::VertexStepMode* rhs) {
    return reinterpret_cast<WGPUVertexStepMode*>(rhs);
}

inline wgpu::VertexStepMode FromAPI(wgpu::VertexStepMode rhs) {
    return rhs;
}
inline const wgpu::VertexStepMode* FromAPI(const wgpu::VertexStepMode* rhs) {
    return rhs;
}
inline wgpu::VertexStepMode* FromAPI(wgpu::VertexStepMode* rhs) {
    return rhs;
}
inline WGPUWaitStatus ToAPI(wgpu::WaitStatus rhs) {
    return static_cast<WGPUWaitStatus>(rhs);
}
inline const WGPUWaitStatus* ToAPI(const wgpu::WaitStatus* rhs) {
    return reinterpret_cast<const WGPUWaitStatus*>(rhs);
}
inline WGPUWaitStatus* ToAPI(wgpu::WaitStatus* rhs) {
    return reinterpret_cast<WGPUWaitStatus*>(rhs);
}

inline wgpu::WaitStatus FromAPI(wgpu::WaitStatus rhs) {
    return rhs;
}
inline const wgpu::WaitStatus* FromAPI(const wgpu::WaitStatus* rhs) {
    return rhs;
}
inline wgpu::WaitStatus* FromAPI(wgpu::WaitStatus* rhs) {
    return rhs;
}
inline WGPUWGSLLanguageFeatureName ToAPI(wgpu::WGSLLanguageFeatureName rhs) {
    return static_cast<WGPUWGSLLanguageFeatureName>(rhs);
}
inline const WGPUWGSLLanguageFeatureName* ToAPI(const wgpu::WGSLLanguageFeatureName* rhs) {
    return reinterpret_cast<const WGPUWGSLLanguageFeatureName*>(rhs);
}
inline WGPUWGSLLanguageFeatureName* ToAPI(wgpu::WGSLLanguageFeatureName* rhs) {
    return reinterpret_cast<WGPUWGSLLanguageFeatureName*>(rhs);
}

inline wgpu::WGSLLanguageFeatureName FromAPI(wgpu::WGSLLanguageFeatureName rhs) {
    return rhs;
}
inline const wgpu::WGSLLanguageFeatureName* FromAPI(const wgpu::WGSLLanguageFeatureName* rhs) {
    return rhs;
}
inline wgpu::WGSLLanguageFeatureName* FromAPI(wgpu::WGSLLanguageFeatureName* rhs) {
    return rhs;
}
inline WGPUBufferUsage ToAPI(wgpu::BufferUsage rhs) {
    return static_cast<WGPUBufferUsage>(rhs);
}
inline const WGPUBufferUsage* ToAPI(const wgpu::BufferUsage* rhs) {
    return reinterpret_cast<const WGPUBufferUsage*>(rhs);
}
inline WGPUBufferUsage* ToAPI(wgpu::BufferUsage* rhs) {
    return reinterpret_cast<WGPUBufferUsage*>(rhs);
}

inline wgpu::BufferUsage FromAPI(wgpu::BufferUsage rhs) {
    return rhs;
}
inline const wgpu::BufferUsage* FromAPI(const wgpu::BufferUsage* rhs) {
    return rhs;
}
inline wgpu::BufferUsage* FromAPI(wgpu::BufferUsage* rhs) {
    return rhs;
}
inline WGPUColorWriteMask ToAPI(wgpu::ColorWriteMask rhs) {
    return static_cast<WGPUColorWriteMask>(rhs);
}
inline const WGPUColorWriteMask* ToAPI(const wgpu::ColorWriteMask* rhs) {
    return reinterpret_cast<const WGPUColorWriteMask*>(rhs);
}
inline WGPUColorWriteMask* ToAPI(wgpu::ColorWriteMask* rhs) {
    return reinterpret_cast<WGPUColorWriteMask*>(rhs);
}

inline wgpu::ColorWriteMask FromAPI(wgpu::ColorWriteMask rhs) {
    return rhs;
}
inline const wgpu::ColorWriteMask* FromAPI(const wgpu::ColorWriteMask* rhs) {
    return rhs;
}
inline wgpu::ColorWriteMask* FromAPI(wgpu::ColorWriteMask* rhs) {
    return rhs;
}
inline WGPUHeapProperty ToAPI(wgpu::HeapProperty rhs) {
    return static_cast<WGPUHeapProperty>(rhs);
}
inline const WGPUHeapProperty* ToAPI(const wgpu::HeapProperty* rhs) {
    return reinterpret_cast<const WGPUHeapProperty*>(rhs);
}
inline WGPUHeapProperty* ToAPI(wgpu::HeapProperty* rhs) {
    return reinterpret_cast<WGPUHeapProperty*>(rhs);
}

inline wgpu::HeapProperty FromAPI(wgpu::HeapProperty rhs) {
    return rhs;
}
inline const wgpu::HeapProperty* FromAPI(const wgpu::HeapProperty* rhs) {
    return rhs;
}
inline wgpu::HeapProperty* FromAPI(wgpu::HeapProperty* rhs) {
    return rhs;
}
inline WGPUMapMode ToAPI(wgpu::MapMode rhs) {
    return static_cast<WGPUMapMode>(rhs);
}
inline const WGPUMapMode* ToAPI(const wgpu::MapMode* rhs) {
    return reinterpret_cast<const WGPUMapMode*>(rhs);
}
inline WGPUMapMode* ToAPI(wgpu::MapMode* rhs) {
    return reinterpret_cast<WGPUMapMode*>(rhs);
}

inline wgpu::MapMode FromAPI(wgpu::MapMode rhs) {
    return rhs;
}
inline const wgpu::MapMode* FromAPI(const wgpu::MapMode* rhs) {
    return rhs;
}
inline wgpu::MapMode* FromAPI(wgpu::MapMode* rhs) {
    return rhs;
}
inline WGPUShaderStage ToAPI(wgpu::ShaderStage rhs) {
    return static_cast<WGPUShaderStage>(rhs);
}
inline const WGPUShaderStage* ToAPI(const wgpu::ShaderStage* rhs) {
    return reinterpret_cast<const WGPUShaderStage*>(rhs);
}
inline WGPUShaderStage* ToAPI(wgpu::ShaderStage* rhs) {
    return reinterpret_cast<WGPUShaderStage*>(rhs);
}

inline wgpu::ShaderStage FromAPI(wgpu::ShaderStage rhs) {
    return rhs;
}
inline const wgpu::ShaderStage* FromAPI(const wgpu::ShaderStage* rhs) {
    return rhs;
}
inline wgpu::ShaderStage* FromAPI(wgpu::ShaderStage* rhs) {
    return rhs;
}
inline WGPUTextureUsage ToAPI(wgpu::TextureUsage rhs) {
    return static_cast<WGPUTextureUsage>(rhs);
}
inline const WGPUTextureUsage* ToAPI(const wgpu::TextureUsage* rhs) {
    return reinterpret_cast<const WGPUTextureUsage*>(rhs);
}
inline WGPUTextureUsage* ToAPI(wgpu::TextureUsage* rhs) {
    return reinterpret_cast<WGPUTextureUsage*>(rhs);
}

inline wgpu::TextureUsage FromAPI(wgpu::TextureUsage rhs) {
    return rhs;
}
inline const wgpu::TextureUsage* FromAPI(const wgpu::TextureUsage* rhs) {
    return rhs;
}
inline wgpu::TextureUsage* FromAPI(wgpu::TextureUsage* rhs) {
    return rhs;
}

inline WGPUAdapterType ToAPI(WGPUAdapterType rhs) {
    return rhs;
}
inline const WGPUAdapterType* ToAPI(const WGPUAdapterType* rhs) {
    return rhs;
}
inline WGPUAdapterType* ToAPI(WGPUAdapterType* rhs) {
    return rhs;
}

inline wgpu::AdapterType FromAPI(WGPUAdapterType rhs) {
    return static_cast<wgpu::AdapterType>(rhs);
}
inline const wgpu::AdapterType* FromAPI(const WGPUAdapterType* rhs) {
    return reinterpret_cast<const wgpu::AdapterType*>(rhs);
}
inline wgpu::AdapterType* FromAPI(WGPUAdapterType* rhs) {
    return reinterpret_cast<wgpu::AdapterType*>(rhs);
}
inline WGPUAddressMode ToAPI(WGPUAddressMode rhs) {
    return rhs;
}
inline const WGPUAddressMode* ToAPI(const WGPUAddressMode* rhs) {
    return rhs;
}
inline WGPUAddressMode* ToAPI(WGPUAddressMode* rhs) {
    return rhs;
}

inline wgpu::AddressMode FromAPI(WGPUAddressMode rhs) {
    return static_cast<wgpu::AddressMode>(rhs);
}
inline const wgpu::AddressMode* FromAPI(const WGPUAddressMode* rhs) {
    return reinterpret_cast<const wgpu::AddressMode*>(rhs);
}
inline wgpu::AddressMode* FromAPI(WGPUAddressMode* rhs) {
    return reinterpret_cast<wgpu::AddressMode*>(rhs);
}
inline WGPUAlphaMode ToAPI(WGPUAlphaMode rhs) {
    return rhs;
}
inline const WGPUAlphaMode* ToAPI(const WGPUAlphaMode* rhs) {
    return rhs;
}
inline WGPUAlphaMode* ToAPI(WGPUAlphaMode* rhs) {
    return rhs;
}

inline wgpu::AlphaMode FromAPI(WGPUAlphaMode rhs) {
    return static_cast<wgpu::AlphaMode>(rhs);
}
inline const wgpu::AlphaMode* FromAPI(const WGPUAlphaMode* rhs) {
    return reinterpret_cast<const wgpu::AlphaMode*>(rhs);
}
inline wgpu::AlphaMode* FromAPI(WGPUAlphaMode* rhs) {
    return reinterpret_cast<wgpu::AlphaMode*>(rhs);
}
inline WGPUBackendType ToAPI(WGPUBackendType rhs) {
    return rhs;
}
inline const WGPUBackendType* ToAPI(const WGPUBackendType* rhs) {
    return rhs;
}
inline WGPUBackendType* ToAPI(WGPUBackendType* rhs) {
    return rhs;
}

inline wgpu::BackendType FromAPI(WGPUBackendType rhs) {
    return static_cast<wgpu::BackendType>(rhs);
}
inline const wgpu::BackendType* FromAPI(const WGPUBackendType* rhs) {
    return reinterpret_cast<const wgpu::BackendType*>(rhs);
}
inline wgpu::BackendType* FromAPI(WGPUBackendType* rhs) {
    return reinterpret_cast<wgpu::BackendType*>(rhs);
}
inline WGPUBlendFactor ToAPI(WGPUBlendFactor rhs) {
    return rhs;
}
inline const WGPUBlendFactor* ToAPI(const WGPUBlendFactor* rhs) {
    return rhs;
}
inline WGPUBlendFactor* ToAPI(WGPUBlendFactor* rhs) {
    return rhs;
}

inline wgpu::BlendFactor FromAPI(WGPUBlendFactor rhs) {
    return static_cast<wgpu::BlendFactor>(rhs);
}
inline const wgpu::BlendFactor* FromAPI(const WGPUBlendFactor* rhs) {
    return reinterpret_cast<const wgpu::BlendFactor*>(rhs);
}
inline wgpu::BlendFactor* FromAPI(WGPUBlendFactor* rhs) {
    return reinterpret_cast<wgpu::BlendFactor*>(rhs);
}
inline WGPUBlendOperation ToAPI(WGPUBlendOperation rhs) {
    return rhs;
}
inline const WGPUBlendOperation* ToAPI(const WGPUBlendOperation* rhs) {
    return rhs;
}
inline WGPUBlendOperation* ToAPI(WGPUBlendOperation* rhs) {
    return rhs;
}

inline wgpu::BlendOperation FromAPI(WGPUBlendOperation rhs) {
    return static_cast<wgpu::BlendOperation>(rhs);
}
inline const wgpu::BlendOperation* FromAPI(const WGPUBlendOperation* rhs) {
    return reinterpret_cast<const wgpu::BlendOperation*>(rhs);
}
inline wgpu::BlendOperation* FromAPI(WGPUBlendOperation* rhs) {
    return reinterpret_cast<wgpu::BlendOperation*>(rhs);
}
inline WGPUBufferBindingType ToAPI(WGPUBufferBindingType rhs) {
    return rhs;
}
inline const WGPUBufferBindingType* ToAPI(const WGPUBufferBindingType* rhs) {
    return rhs;
}
inline WGPUBufferBindingType* ToAPI(WGPUBufferBindingType* rhs) {
    return rhs;
}

inline wgpu::BufferBindingType FromAPI(WGPUBufferBindingType rhs) {
    return static_cast<wgpu::BufferBindingType>(rhs);
}
inline const wgpu::BufferBindingType* FromAPI(const WGPUBufferBindingType* rhs) {
    return reinterpret_cast<const wgpu::BufferBindingType*>(rhs);
}
inline wgpu::BufferBindingType* FromAPI(WGPUBufferBindingType* rhs) {
    return reinterpret_cast<wgpu::BufferBindingType*>(rhs);
}
inline WGPUBufferMapState ToAPI(WGPUBufferMapState rhs) {
    return rhs;
}
inline const WGPUBufferMapState* ToAPI(const WGPUBufferMapState* rhs) {
    return rhs;
}
inline WGPUBufferMapState* ToAPI(WGPUBufferMapState* rhs) {
    return rhs;
}

inline wgpu::BufferMapState FromAPI(WGPUBufferMapState rhs) {
    return static_cast<wgpu::BufferMapState>(rhs);
}
inline const wgpu::BufferMapState* FromAPI(const WGPUBufferMapState* rhs) {
    return reinterpret_cast<const wgpu::BufferMapState*>(rhs);
}
inline wgpu::BufferMapState* FromAPI(WGPUBufferMapState* rhs) {
    return reinterpret_cast<wgpu::BufferMapState*>(rhs);
}
inline WGPUCallbackMode ToAPI(WGPUCallbackMode rhs) {
    return rhs;
}
inline const WGPUCallbackMode* ToAPI(const WGPUCallbackMode* rhs) {
    return rhs;
}
inline WGPUCallbackMode* ToAPI(WGPUCallbackMode* rhs) {
    return rhs;
}

inline wgpu::CallbackMode FromAPI(WGPUCallbackMode rhs) {
    return static_cast<wgpu::CallbackMode>(rhs);
}
inline const wgpu::CallbackMode* FromAPI(const WGPUCallbackMode* rhs) {
    return reinterpret_cast<const wgpu::CallbackMode*>(rhs);
}
inline wgpu::CallbackMode* FromAPI(WGPUCallbackMode* rhs) {
    return reinterpret_cast<wgpu::CallbackMode*>(rhs);
}
inline WGPUCallbackStatus ToAPI(WGPUCallbackStatus rhs) {
    return rhs;
}
inline const WGPUCallbackStatus* ToAPI(const WGPUCallbackStatus* rhs) {
    return rhs;
}
inline WGPUCallbackStatus* ToAPI(WGPUCallbackStatus* rhs) {
    return rhs;
}

inline wgpu::CallbackStatus FromAPI(WGPUCallbackStatus rhs) {
    return static_cast<wgpu::CallbackStatus>(rhs);
}
inline const wgpu::CallbackStatus* FromAPI(const WGPUCallbackStatus* rhs) {
    return reinterpret_cast<const wgpu::CallbackStatus*>(rhs);
}
inline wgpu::CallbackStatus* FromAPI(WGPUCallbackStatus* rhs) {
    return reinterpret_cast<wgpu::CallbackStatus*>(rhs);
}
inline WGPUColorSpacePrimariesDawn ToAPI(WGPUColorSpacePrimariesDawn rhs) {
    return rhs;
}
inline const WGPUColorSpacePrimariesDawn* ToAPI(const WGPUColorSpacePrimariesDawn* rhs) {
    return rhs;
}
inline WGPUColorSpacePrimariesDawn* ToAPI(WGPUColorSpacePrimariesDawn* rhs) {
    return rhs;
}

inline wgpu::ColorSpacePrimariesDawn FromAPI(WGPUColorSpacePrimariesDawn rhs) {
    return static_cast<wgpu::ColorSpacePrimariesDawn>(rhs);
}
inline const wgpu::ColorSpacePrimariesDawn* FromAPI(const WGPUColorSpacePrimariesDawn* rhs) {
    return reinterpret_cast<const wgpu::ColorSpacePrimariesDawn*>(rhs);
}
inline wgpu::ColorSpacePrimariesDawn* FromAPI(WGPUColorSpacePrimariesDawn* rhs) {
    return reinterpret_cast<wgpu::ColorSpacePrimariesDawn*>(rhs);
}
inline WGPUColorSpaceTransferDawn ToAPI(WGPUColorSpaceTransferDawn rhs) {
    return rhs;
}
inline const WGPUColorSpaceTransferDawn* ToAPI(const WGPUColorSpaceTransferDawn* rhs) {
    return rhs;
}
inline WGPUColorSpaceTransferDawn* ToAPI(WGPUColorSpaceTransferDawn* rhs) {
    return rhs;
}

inline wgpu::ColorSpaceTransferDawn FromAPI(WGPUColorSpaceTransferDawn rhs) {
    return static_cast<wgpu::ColorSpaceTransferDawn>(rhs);
}
inline const wgpu::ColorSpaceTransferDawn* FromAPI(const WGPUColorSpaceTransferDawn* rhs) {
    return reinterpret_cast<const wgpu::ColorSpaceTransferDawn*>(rhs);
}
inline wgpu::ColorSpaceTransferDawn* FromAPI(WGPUColorSpaceTransferDawn* rhs) {
    return reinterpret_cast<wgpu::ColorSpaceTransferDawn*>(rhs);
}
inline WGPUColorSpaceYCbCrMatrixDawn ToAPI(WGPUColorSpaceYCbCrMatrixDawn rhs) {
    return rhs;
}
inline const WGPUColorSpaceYCbCrMatrixDawn* ToAPI(const WGPUColorSpaceYCbCrMatrixDawn* rhs) {
    return rhs;
}
inline WGPUColorSpaceYCbCrMatrixDawn* ToAPI(WGPUColorSpaceYCbCrMatrixDawn* rhs) {
    return rhs;
}

inline wgpu::ColorSpaceYCbCrMatrixDawn FromAPI(WGPUColorSpaceYCbCrMatrixDawn rhs) {
    return static_cast<wgpu::ColorSpaceYCbCrMatrixDawn>(rhs);
}
inline const wgpu::ColorSpaceYCbCrMatrixDawn* FromAPI(const WGPUColorSpaceYCbCrMatrixDawn* rhs) {
    return reinterpret_cast<const wgpu::ColorSpaceYCbCrMatrixDawn*>(rhs);
}
inline wgpu::ColorSpaceYCbCrMatrixDawn* FromAPI(WGPUColorSpaceYCbCrMatrixDawn* rhs) {
    return reinterpret_cast<wgpu::ColorSpaceYCbCrMatrixDawn*>(rhs);
}
inline WGPUColorSpaceYCbCrRangeDawn ToAPI(WGPUColorSpaceYCbCrRangeDawn rhs) {
    return rhs;
}
inline const WGPUColorSpaceYCbCrRangeDawn* ToAPI(const WGPUColorSpaceYCbCrRangeDawn* rhs) {
    return rhs;
}
inline WGPUColorSpaceYCbCrRangeDawn* ToAPI(WGPUColorSpaceYCbCrRangeDawn* rhs) {
    return rhs;
}

inline wgpu::ColorSpaceYCbCrRangeDawn FromAPI(WGPUColorSpaceYCbCrRangeDawn rhs) {
    return static_cast<wgpu::ColorSpaceYCbCrRangeDawn>(rhs);
}
inline const wgpu::ColorSpaceYCbCrRangeDawn* FromAPI(const WGPUColorSpaceYCbCrRangeDawn* rhs) {
    return reinterpret_cast<const wgpu::ColorSpaceYCbCrRangeDawn*>(rhs);
}
inline wgpu::ColorSpaceYCbCrRangeDawn* FromAPI(WGPUColorSpaceYCbCrRangeDawn* rhs) {
    return reinterpret_cast<wgpu::ColorSpaceYCbCrRangeDawn*>(rhs);
}
inline WGPUCompareFunction ToAPI(WGPUCompareFunction rhs) {
    return rhs;
}
inline const WGPUCompareFunction* ToAPI(const WGPUCompareFunction* rhs) {
    return rhs;
}
inline WGPUCompareFunction* ToAPI(WGPUCompareFunction* rhs) {
    return rhs;
}

inline wgpu::CompareFunction FromAPI(WGPUCompareFunction rhs) {
    return static_cast<wgpu::CompareFunction>(rhs);
}
inline const wgpu::CompareFunction* FromAPI(const WGPUCompareFunction* rhs) {
    return reinterpret_cast<const wgpu::CompareFunction*>(rhs);
}
inline wgpu::CompareFunction* FromAPI(WGPUCompareFunction* rhs) {
    return reinterpret_cast<wgpu::CompareFunction*>(rhs);
}
inline WGPUCompilationInfoRequestStatus ToAPI(WGPUCompilationInfoRequestStatus rhs) {
    return rhs;
}
inline const WGPUCompilationInfoRequestStatus* ToAPI(const WGPUCompilationInfoRequestStatus* rhs) {
    return rhs;
}
inline WGPUCompilationInfoRequestStatus* ToAPI(WGPUCompilationInfoRequestStatus* rhs) {
    return rhs;
}

inline wgpu::CompilationInfoRequestStatus FromAPI(WGPUCompilationInfoRequestStatus rhs) {
    return static_cast<wgpu::CompilationInfoRequestStatus>(rhs);
}
inline const wgpu::CompilationInfoRequestStatus* FromAPI(const WGPUCompilationInfoRequestStatus* rhs) {
    return reinterpret_cast<const wgpu::CompilationInfoRequestStatus*>(rhs);
}
inline wgpu::CompilationInfoRequestStatus* FromAPI(WGPUCompilationInfoRequestStatus* rhs) {
    return reinterpret_cast<wgpu::CompilationInfoRequestStatus*>(rhs);
}
inline WGPUCompilationMessageType ToAPI(WGPUCompilationMessageType rhs) {
    return rhs;
}
inline const WGPUCompilationMessageType* ToAPI(const WGPUCompilationMessageType* rhs) {
    return rhs;
}
inline WGPUCompilationMessageType* ToAPI(WGPUCompilationMessageType* rhs) {
    return rhs;
}

inline wgpu::CompilationMessageType FromAPI(WGPUCompilationMessageType rhs) {
    return static_cast<wgpu::CompilationMessageType>(rhs);
}
inline const wgpu::CompilationMessageType* FromAPI(const WGPUCompilationMessageType* rhs) {
    return reinterpret_cast<const wgpu::CompilationMessageType*>(rhs);
}
inline wgpu::CompilationMessageType* FromAPI(WGPUCompilationMessageType* rhs) {
    return reinterpret_cast<wgpu::CompilationMessageType*>(rhs);
}
inline WGPUComponentSwizzle ToAPI(WGPUComponentSwizzle rhs) {
    return rhs;
}
inline const WGPUComponentSwizzle* ToAPI(const WGPUComponentSwizzle* rhs) {
    return rhs;
}
inline WGPUComponentSwizzle* ToAPI(WGPUComponentSwizzle* rhs) {
    return rhs;
}

inline wgpu::ComponentSwizzle FromAPI(WGPUComponentSwizzle rhs) {
    return static_cast<wgpu::ComponentSwizzle>(rhs);
}
inline const wgpu::ComponentSwizzle* FromAPI(const WGPUComponentSwizzle* rhs) {
    return reinterpret_cast<const wgpu::ComponentSwizzle*>(rhs);
}
inline wgpu::ComponentSwizzle* FromAPI(WGPUComponentSwizzle* rhs) {
    return reinterpret_cast<wgpu::ComponentSwizzle*>(rhs);
}
inline WGPUCompositeAlphaMode ToAPI(WGPUCompositeAlphaMode rhs) {
    return rhs;
}
inline const WGPUCompositeAlphaMode* ToAPI(const WGPUCompositeAlphaMode* rhs) {
    return rhs;
}
inline WGPUCompositeAlphaMode* ToAPI(WGPUCompositeAlphaMode* rhs) {
    return rhs;
}

inline wgpu::CompositeAlphaMode FromAPI(WGPUCompositeAlphaMode rhs) {
    return static_cast<wgpu::CompositeAlphaMode>(rhs);
}
inline const wgpu::CompositeAlphaMode* FromAPI(const WGPUCompositeAlphaMode* rhs) {
    return reinterpret_cast<const wgpu::CompositeAlphaMode*>(rhs);
}
inline wgpu::CompositeAlphaMode* FromAPI(WGPUCompositeAlphaMode* rhs) {
    return reinterpret_cast<wgpu::CompositeAlphaMode*>(rhs);
}
inline WGPUCreatePipelineAsyncStatus ToAPI(WGPUCreatePipelineAsyncStatus rhs) {
    return rhs;
}
inline const WGPUCreatePipelineAsyncStatus* ToAPI(const WGPUCreatePipelineAsyncStatus* rhs) {
    return rhs;
}
inline WGPUCreatePipelineAsyncStatus* ToAPI(WGPUCreatePipelineAsyncStatus* rhs) {
    return rhs;
}

inline wgpu::CreatePipelineAsyncStatus FromAPI(WGPUCreatePipelineAsyncStatus rhs) {
    return static_cast<wgpu::CreatePipelineAsyncStatus>(rhs);
}
inline const wgpu::CreatePipelineAsyncStatus* FromAPI(const WGPUCreatePipelineAsyncStatus* rhs) {
    return reinterpret_cast<const wgpu::CreatePipelineAsyncStatus*>(rhs);
}
inline wgpu::CreatePipelineAsyncStatus* FromAPI(WGPUCreatePipelineAsyncStatus* rhs) {
    return reinterpret_cast<wgpu::CreatePipelineAsyncStatus*>(rhs);
}
inline WGPUCullMode ToAPI(WGPUCullMode rhs) {
    return rhs;
}
inline const WGPUCullMode* ToAPI(const WGPUCullMode* rhs) {
    return rhs;
}
inline WGPUCullMode* ToAPI(WGPUCullMode* rhs) {
    return rhs;
}

inline wgpu::CullMode FromAPI(WGPUCullMode rhs) {
    return static_cast<wgpu::CullMode>(rhs);
}
inline const wgpu::CullMode* FromAPI(const WGPUCullMode* rhs) {
    return reinterpret_cast<const wgpu::CullMode*>(rhs);
}
inline wgpu::CullMode* FromAPI(WGPUCullMode* rhs) {
    return reinterpret_cast<wgpu::CullMode*>(rhs);
}
inline WGPUDeviceLostReason ToAPI(WGPUDeviceLostReason rhs) {
    return rhs;
}
inline const WGPUDeviceLostReason* ToAPI(const WGPUDeviceLostReason* rhs) {
    return rhs;
}
inline WGPUDeviceLostReason* ToAPI(WGPUDeviceLostReason* rhs) {
    return rhs;
}

inline wgpu::DeviceLostReason FromAPI(WGPUDeviceLostReason rhs) {
    return static_cast<wgpu::DeviceLostReason>(rhs);
}
inline const wgpu::DeviceLostReason* FromAPI(const WGPUDeviceLostReason* rhs) {
    return reinterpret_cast<const wgpu::DeviceLostReason*>(rhs);
}
inline wgpu::DeviceLostReason* FromAPI(WGPUDeviceLostReason* rhs) {
    return reinterpret_cast<wgpu::DeviceLostReason*>(rhs);
}
inline WGPUErrorFilter ToAPI(WGPUErrorFilter rhs) {
    return rhs;
}
inline const WGPUErrorFilter* ToAPI(const WGPUErrorFilter* rhs) {
    return rhs;
}
inline WGPUErrorFilter* ToAPI(WGPUErrorFilter* rhs) {
    return rhs;
}

inline wgpu::ErrorFilter FromAPI(WGPUErrorFilter rhs) {
    return static_cast<wgpu::ErrorFilter>(rhs);
}
inline const wgpu::ErrorFilter* FromAPI(const WGPUErrorFilter* rhs) {
    return reinterpret_cast<const wgpu::ErrorFilter*>(rhs);
}
inline wgpu::ErrorFilter* FromAPI(WGPUErrorFilter* rhs) {
    return reinterpret_cast<wgpu::ErrorFilter*>(rhs);
}
inline WGPUErrorType ToAPI(WGPUErrorType rhs) {
    return rhs;
}
inline const WGPUErrorType* ToAPI(const WGPUErrorType* rhs) {
    return rhs;
}
inline WGPUErrorType* ToAPI(WGPUErrorType* rhs) {
    return rhs;
}

inline wgpu::ErrorType FromAPI(WGPUErrorType rhs) {
    return static_cast<wgpu::ErrorType>(rhs);
}
inline const wgpu::ErrorType* FromAPI(const WGPUErrorType* rhs) {
    return reinterpret_cast<const wgpu::ErrorType*>(rhs);
}
inline wgpu::ErrorType* FromAPI(WGPUErrorType* rhs) {
    return reinterpret_cast<wgpu::ErrorType*>(rhs);
}
inline WGPUExternalTextureRotation ToAPI(WGPUExternalTextureRotation rhs) {
    return rhs;
}
inline const WGPUExternalTextureRotation* ToAPI(const WGPUExternalTextureRotation* rhs) {
    return rhs;
}
inline WGPUExternalTextureRotation* ToAPI(WGPUExternalTextureRotation* rhs) {
    return rhs;
}

inline wgpu::ExternalTextureRotation FromAPI(WGPUExternalTextureRotation rhs) {
    return static_cast<wgpu::ExternalTextureRotation>(rhs);
}
inline const wgpu::ExternalTextureRotation* FromAPI(const WGPUExternalTextureRotation* rhs) {
    return reinterpret_cast<const wgpu::ExternalTextureRotation*>(rhs);
}
inline wgpu::ExternalTextureRotation* FromAPI(WGPUExternalTextureRotation* rhs) {
    return reinterpret_cast<wgpu::ExternalTextureRotation*>(rhs);
}
inline WGPUFeatureLevel ToAPI(WGPUFeatureLevel rhs) {
    return rhs;
}
inline const WGPUFeatureLevel* ToAPI(const WGPUFeatureLevel* rhs) {
    return rhs;
}
inline WGPUFeatureLevel* ToAPI(WGPUFeatureLevel* rhs) {
    return rhs;
}

inline wgpu::FeatureLevel FromAPI(WGPUFeatureLevel rhs) {
    return static_cast<wgpu::FeatureLevel>(rhs);
}
inline const wgpu::FeatureLevel* FromAPI(const WGPUFeatureLevel* rhs) {
    return reinterpret_cast<const wgpu::FeatureLevel*>(rhs);
}
inline wgpu::FeatureLevel* FromAPI(WGPUFeatureLevel* rhs) {
    return reinterpret_cast<wgpu::FeatureLevel*>(rhs);
}
inline WGPUFeatureName ToAPI(WGPUFeatureName rhs) {
    return rhs;
}
inline const WGPUFeatureName* ToAPI(const WGPUFeatureName* rhs) {
    return rhs;
}
inline WGPUFeatureName* ToAPI(WGPUFeatureName* rhs) {
    return rhs;
}

inline wgpu::FeatureName FromAPI(WGPUFeatureName rhs) {
    return static_cast<wgpu::FeatureName>(rhs);
}
inline const wgpu::FeatureName* FromAPI(const WGPUFeatureName* rhs) {
    return reinterpret_cast<const wgpu::FeatureName*>(rhs);
}
inline wgpu::FeatureName* FromAPI(WGPUFeatureName* rhs) {
    return reinterpret_cast<wgpu::FeatureName*>(rhs);
}
inline WGPUFilterMode ToAPI(WGPUFilterMode rhs) {
    return rhs;
}
inline const WGPUFilterMode* ToAPI(const WGPUFilterMode* rhs) {
    return rhs;
}
inline WGPUFilterMode* ToAPI(WGPUFilterMode* rhs) {
    return rhs;
}

inline wgpu::FilterMode FromAPI(WGPUFilterMode rhs) {
    return static_cast<wgpu::FilterMode>(rhs);
}
inline const wgpu::FilterMode* FromAPI(const WGPUFilterMode* rhs) {
    return reinterpret_cast<const wgpu::FilterMode*>(rhs);
}
inline wgpu::FilterMode* FromAPI(WGPUFilterMode* rhs) {
    return reinterpret_cast<wgpu::FilterMode*>(rhs);
}
inline WGPUFrontFace ToAPI(WGPUFrontFace rhs) {
    return rhs;
}
inline const WGPUFrontFace* ToAPI(const WGPUFrontFace* rhs) {
    return rhs;
}
inline WGPUFrontFace* ToAPI(WGPUFrontFace* rhs) {
    return rhs;
}

inline wgpu::FrontFace FromAPI(WGPUFrontFace rhs) {
    return static_cast<wgpu::FrontFace>(rhs);
}
inline const wgpu::FrontFace* FromAPI(const WGPUFrontFace* rhs) {
    return reinterpret_cast<const wgpu::FrontFace*>(rhs);
}
inline wgpu::FrontFace* FromAPI(WGPUFrontFace* rhs) {
    return reinterpret_cast<wgpu::FrontFace*>(rhs);
}
inline WGPUIndexFormat ToAPI(WGPUIndexFormat rhs) {
    return rhs;
}
inline const WGPUIndexFormat* ToAPI(const WGPUIndexFormat* rhs) {
    return rhs;
}
inline WGPUIndexFormat* ToAPI(WGPUIndexFormat* rhs) {
    return rhs;
}

inline wgpu::IndexFormat FromAPI(WGPUIndexFormat rhs) {
    return static_cast<wgpu::IndexFormat>(rhs);
}
inline const wgpu::IndexFormat* FromAPI(const WGPUIndexFormat* rhs) {
    return reinterpret_cast<const wgpu::IndexFormat*>(rhs);
}
inline wgpu::IndexFormat* FromAPI(WGPUIndexFormat* rhs) {
    return reinterpret_cast<wgpu::IndexFormat*>(rhs);
}
inline WGPUInstanceFeatureName ToAPI(WGPUInstanceFeatureName rhs) {
    return rhs;
}
inline const WGPUInstanceFeatureName* ToAPI(const WGPUInstanceFeatureName* rhs) {
    return rhs;
}
inline WGPUInstanceFeatureName* ToAPI(WGPUInstanceFeatureName* rhs) {
    return rhs;
}

inline wgpu::InstanceFeatureName FromAPI(WGPUInstanceFeatureName rhs) {
    return static_cast<wgpu::InstanceFeatureName>(rhs);
}
inline const wgpu::InstanceFeatureName* FromAPI(const WGPUInstanceFeatureName* rhs) {
    return reinterpret_cast<const wgpu::InstanceFeatureName*>(rhs);
}
inline wgpu::InstanceFeatureName* FromAPI(WGPUInstanceFeatureName* rhs) {
    return reinterpret_cast<wgpu::InstanceFeatureName*>(rhs);
}
inline WGPULoadOp ToAPI(WGPULoadOp rhs) {
    return rhs;
}
inline const WGPULoadOp* ToAPI(const WGPULoadOp* rhs) {
    return rhs;
}
inline WGPULoadOp* ToAPI(WGPULoadOp* rhs) {
    return rhs;
}

inline wgpu::LoadOp FromAPI(WGPULoadOp rhs) {
    return static_cast<wgpu::LoadOp>(rhs);
}
inline const wgpu::LoadOp* FromAPI(const WGPULoadOp* rhs) {
    return reinterpret_cast<const wgpu::LoadOp*>(rhs);
}
inline wgpu::LoadOp* FromAPI(WGPULoadOp* rhs) {
    return reinterpret_cast<wgpu::LoadOp*>(rhs);
}
inline WGPULoggingType ToAPI(WGPULoggingType rhs) {
    return rhs;
}
inline const WGPULoggingType* ToAPI(const WGPULoggingType* rhs) {
    return rhs;
}
inline WGPULoggingType* ToAPI(WGPULoggingType* rhs) {
    return rhs;
}

inline wgpu::LoggingType FromAPI(WGPULoggingType rhs) {
    return static_cast<wgpu::LoggingType>(rhs);
}
inline const wgpu::LoggingType* FromAPI(const WGPULoggingType* rhs) {
    return reinterpret_cast<const wgpu::LoggingType*>(rhs);
}
inline wgpu::LoggingType* FromAPI(WGPULoggingType* rhs) {
    return reinterpret_cast<wgpu::LoggingType*>(rhs);
}
inline WGPUMapAsyncStatus ToAPI(WGPUMapAsyncStatus rhs) {
    return rhs;
}
inline const WGPUMapAsyncStatus* ToAPI(const WGPUMapAsyncStatus* rhs) {
    return rhs;
}
inline WGPUMapAsyncStatus* ToAPI(WGPUMapAsyncStatus* rhs) {
    return rhs;
}

inline wgpu::MapAsyncStatus FromAPI(WGPUMapAsyncStatus rhs) {
    return static_cast<wgpu::MapAsyncStatus>(rhs);
}
inline const wgpu::MapAsyncStatus* FromAPI(const WGPUMapAsyncStatus* rhs) {
    return reinterpret_cast<const wgpu::MapAsyncStatus*>(rhs);
}
inline wgpu::MapAsyncStatus* FromAPI(WGPUMapAsyncStatus* rhs) {
    return reinterpret_cast<wgpu::MapAsyncStatus*>(rhs);
}
inline WGPUMipmapFilterMode ToAPI(WGPUMipmapFilterMode rhs) {
    return rhs;
}
inline const WGPUMipmapFilterMode* ToAPI(const WGPUMipmapFilterMode* rhs) {
    return rhs;
}
inline WGPUMipmapFilterMode* ToAPI(WGPUMipmapFilterMode* rhs) {
    return rhs;
}

inline wgpu::MipmapFilterMode FromAPI(WGPUMipmapFilterMode rhs) {
    return static_cast<wgpu::MipmapFilterMode>(rhs);
}
inline const wgpu::MipmapFilterMode* FromAPI(const WGPUMipmapFilterMode* rhs) {
    return reinterpret_cast<const wgpu::MipmapFilterMode*>(rhs);
}
inline wgpu::MipmapFilterMode* FromAPI(WGPUMipmapFilterMode* rhs) {
    return reinterpret_cast<wgpu::MipmapFilterMode*>(rhs);
}
inline WGPUOptionalBool ToAPI(WGPUOptionalBool rhs) {
    return rhs;
}
inline const WGPUOptionalBool* ToAPI(const WGPUOptionalBool* rhs) {
    return rhs;
}
inline WGPUOptionalBool* ToAPI(WGPUOptionalBool* rhs) {
    return rhs;
}

inline wgpu::OptionalBool FromAPI(WGPUOptionalBool rhs) {
    return static_cast<wgpu::OptionalBool>(rhs);
}
inline const wgpu::OptionalBool* FromAPI(const WGPUOptionalBool* rhs) {
    return reinterpret_cast<const wgpu::OptionalBool*>(rhs);
}
inline wgpu::OptionalBool* FromAPI(WGPUOptionalBool* rhs) {
    return reinterpret_cast<wgpu::OptionalBool*>(rhs);
}
inline WGPUPopErrorScopeStatus ToAPI(WGPUPopErrorScopeStatus rhs) {
    return rhs;
}
inline const WGPUPopErrorScopeStatus* ToAPI(const WGPUPopErrorScopeStatus* rhs) {
    return rhs;
}
inline WGPUPopErrorScopeStatus* ToAPI(WGPUPopErrorScopeStatus* rhs) {
    return rhs;
}

inline wgpu::PopErrorScopeStatus FromAPI(WGPUPopErrorScopeStatus rhs) {
    return static_cast<wgpu::PopErrorScopeStatus>(rhs);
}
inline const wgpu::PopErrorScopeStatus* FromAPI(const WGPUPopErrorScopeStatus* rhs) {
    return reinterpret_cast<const wgpu::PopErrorScopeStatus*>(rhs);
}
inline wgpu::PopErrorScopeStatus* FromAPI(WGPUPopErrorScopeStatus* rhs) {
    return reinterpret_cast<wgpu::PopErrorScopeStatus*>(rhs);
}
inline WGPUPowerPreference ToAPI(WGPUPowerPreference rhs) {
    return rhs;
}
inline const WGPUPowerPreference* ToAPI(const WGPUPowerPreference* rhs) {
    return rhs;
}
inline WGPUPowerPreference* ToAPI(WGPUPowerPreference* rhs) {
    return rhs;
}

inline wgpu::PowerPreference FromAPI(WGPUPowerPreference rhs) {
    return static_cast<wgpu::PowerPreference>(rhs);
}
inline const wgpu::PowerPreference* FromAPI(const WGPUPowerPreference* rhs) {
    return reinterpret_cast<const wgpu::PowerPreference*>(rhs);
}
inline wgpu::PowerPreference* FromAPI(WGPUPowerPreference* rhs) {
    return reinterpret_cast<wgpu::PowerPreference*>(rhs);
}
inline WGPUPredefinedColorSpace ToAPI(WGPUPredefinedColorSpace rhs) {
    return rhs;
}
inline const WGPUPredefinedColorSpace* ToAPI(const WGPUPredefinedColorSpace* rhs) {
    return rhs;
}
inline WGPUPredefinedColorSpace* ToAPI(WGPUPredefinedColorSpace* rhs) {
    return rhs;
}

inline wgpu::PredefinedColorSpace FromAPI(WGPUPredefinedColorSpace rhs) {
    return static_cast<wgpu::PredefinedColorSpace>(rhs);
}
inline const wgpu::PredefinedColorSpace* FromAPI(const WGPUPredefinedColorSpace* rhs) {
    return reinterpret_cast<const wgpu::PredefinedColorSpace*>(rhs);
}
inline wgpu::PredefinedColorSpace* FromAPI(WGPUPredefinedColorSpace* rhs) {
    return reinterpret_cast<wgpu::PredefinedColorSpace*>(rhs);
}
inline WGPUPresentMode ToAPI(WGPUPresentMode rhs) {
    return rhs;
}
inline const WGPUPresentMode* ToAPI(const WGPUPresentMode* rhs) {
    return rhs;
}
inline WGPUPresentMode* ToAPI(WGPUPresentMode* rhs) {
    return rhs;
}

inline wgpu::PresentMode FromAPI(WGPUPresentMode rhs) {
    return static_cast<wgpu::PresentMode>(rhs);
}
inline const wgpu::PresentMode* FromAPI(const WGPUPresentMode* rhs) {
    return reinterpret_cast<const wgpu::PresentMode*>(rhs);
}
inline wgpu::PresentMode* FromAPI(WGPUPresentMode* rhs) {
    return reinterpret_cast<wgpu::PresentMode*>(rhs);
}
inline WGPUPrimitiveTopology ToAPI(WGPUPrimitiveTopology rhs) {
    return rhs;
}
inline const WGPUPrimitiveTopology* ToAPI(const WGPUPrimitiveTopology* rhs) {
    return rhs;
}
inline WGPUPrimitiveTopology* ToAPI(WGPUPrimitiveTopology* rhs) {
    return rhs;
}

inline wgpu::PrimitiveTopology FromAPI(WGPUPrimitiveTopology rhs) {
    return static_cast<wgpu::PrimitiveTopology>(rhs);
}
inline const wgpu::PrimitiveTopology* FromAPI(const WGPUPrimitiveTopology* rhs) {
    return reinterpret_cast<const wgpu::PrimitiveTopology*>(rhs);
}
inline wgpu::PrimitiveTopology* FromAPI(WGPUPrimitiveTopology* rhs) {
    return reinterpret_cast<wgpu::PrimitiveTopology*>(rhs);
}
inline WGPUQueryType ToAPI(WGPUQueryType rhs) {
    return rhs;
}
inline const WGPUQueryType* ToAPI(const WGPUQueryType* rhs) {
    return rhs;
}
inline WGPUQueryType* ToAPI(WGPUQueryType* rhs) {
    return rhs;
}

inline wgpu::QueryType FromAPI(WGPUQueryType rhs) {
    return static_cast<wgpu::QueryType>(rhs);
}
inline const wgpu::QueryType* FromAPI(const WGPUQueryType* rhs) {
    return reinterpret_cast<const wgpu::QueryType*>(rhs);
}
inline wgpu::QueryType* FromAPI(WGPUQueryType* rhs) {
    return reinterpret_cast<wgpu::QueryType*>(rhs);
}
inline WGPUQueueWorkDoneStatus ToAPI(WGPUQueueWorkDoneStatus rhs) {
    return rhs;
}
inline const WGPUQueueWorkDoneStatus* ToAPI(const WGPUQueueWorkDoneStatus* rhs) {
    return rhs;
}
inline WGPUQueueWorkDoneStatus* ToAPI(WGPUQueueWorkDoneStatus* rhs) {
    return rhs;
}

inline wgpu::QueueWorkDoneStatus FromAPI(WGPUQueueWorkDoneStatus rhs) {
    return static_cast<wgpu::QueueWorkDoneStatus>(rhs);
}
inline const wgpu::QueueWorkDoneStatus* FromAPI(const WGPUQueueWorkDoneStatus* rhs) {
    return reinterpret_cast<const wgpu::QueueWorkDoneStatus*>(rhs);
}
inline wgpu::QueueWorkDoneStatus* FromAPI(WGPUQueueWorkDoneStatus* rhs) {
    return reinterpret_cast<wgpu::QueueWorkDoneStatus*>(rhs);
}
inline WGPURequestAdapterStatus ToAPI(WGPURequestAdapterStatus rhs) {
    return rhs;
}
inline const WGPURequestAdapterStatus* ToAPI(const WGPURequestAdapterStatus* rhs) {
    return rhs;
}
inline WGPURequestAdapterStatus* ToAPI(WGPURequestAdapterStatus* rhs) {
    return rhs;
}

inline wgpu::RequestAdapterStatus FromAPI(WGPURequestAdapterStatus rhs) {
    return static_cast<wgpu::RequestAdapterStatus>(rhs);
}
inline const wgpu::RequestAdapterStatus* FromAPI(const WGPURequestAdapterStatus* rhs) {
    return reinterpret_cast<const wgpu::RequestAdapterStatus*>(rhs);
}
inline wgpu::RequestAdapterStatus* FromAPI(WGPURequestAdapterStatus* rhs) {
    return reinterpret_cast<wgpu::RequestAdapterStatus*>(rhs);
}
inline WGPURequestDeviceStatus ToAPI(WGPURequestDeviceStatus rhs) {
    return rhs;
}
inline const WGPURequestDeviceStatus* ToAPI(const WGPURequestDeviceStatus* rhs) {
    return rhs;
}
inline WGPURequestDeviceStatus* ToAPI(WGPURequestDeviceStatus* rhs) {
    return rhs;
}

inline wgpu::RequestDeviceStatus FromAPI(WGPURequestDeviceStatus rhs) {
    return static_cast<wgpu::RequestDeviceStatus>(rhs);
}
inline const wgpu::RequestDeviceStatus* FromAPI(const WGPURequestDeviceStatus* rhs) {
    return reinterpret_cast<const wgpu::RequestDeviceStatus*>(rhs);
}
inline wgpu::RequestDeviceStatus* FromAPI(WGPURequestDeviceStatus* rhs) {
    return reinterpret_cast<wgpu::RequestDeviceStatus*>(rhs);
}
inline WGPUSamplerBindingType ToAPI(WGPUSamplerBindingType rhs) {
    return rhs;
}
inline const WGPUSamplerBindingType* ToAPI(const WGPUSamplerBindingType* rhs) {
    return rhs;
}
inline WGPUSamplerBindingType* ToAPI(WGPUSamplerBindingType* rhs) {
    return rhs;
}

inline wgpu::SamplerBindingType FromAPI(WGPUSamplerBindingType rhs) {
    return static_cast<wgpu::SamplerBindingType>(rhs);
}
inline const wgpu::SamplerBindingType* FromAPI(const WGPUSamplerBindingType* rhs) {
    return reinterpret_cast<const wgpu::SamplerBindingType*>(rhs);
}
inline wgpu::SamplerBindingType* FromAPI(WGPUSamplerBindingType* rhs) {
    return reinterpret_cast<wgpu::SamplerBindingType*>(rhs);
}
inline WGPUSharedFenceType ToAPI(WGPUSharedFenceType rhs) {
    return rhs;
}
inline const WGPUSharedFenceType* ToAPI(const WGPUSharedFenceType* rhs) {
    return rhs;
}
inline WGPUSharedFenceType* ToAPI(WGPUSharedFenceType* rhs) {
    return rhs;
}

inline wgpu::SharedFenceType FromAPI(WGPUSharedFenceType rhs) {
    return static_cast<wgpu::SharedFenceType>(rhs);
}
inline const wgpu::SharedFenceType* FromAPI(const WGPUSharedFenceType* rhs) {
    return reinterpret_cast<const wgpu::SharedFenceType*>(rhs);
}
inline wgpu::SharedFenceType* FromAPI(WGPUSharedFenceType* rhs) {
    return reinterpret_cast<wgpu::SharedFenceType*>(rhs);
}
inline WGPUStatus ToAPI(WGPUStatus rhs) {
    return rhs;
}
inline const WGPUStatus* ToAPI(const WGPUStatus* rhs) {
    return rhs;
}
inline WGPUStatus* ToAPI(WGPUStatus* rhs) {
    return rhs;
}

inline wgpu::Status FromAPI(WGPUStatus rhs) {
    return static_cast<wgpu::Status>(rhs);
}
inline const wgpu::Status* FromAPI(const WGPUStatus* rhs) {
    return reinterpret_cast<const wgpu::Status*>(rhs);
}
inline wgpu::Status* FromAPI(WGPUStatus* rhs) {
    return reinterpret_cast<wgpu::Status*>(rhs);
}
inline WGPUStencilOperation ToAPI(WGPUStencilOperation rhs) {
    return rhs;
}
inline const WGPUStencilOperation* ToAPI(const WGPUStencilOperation* rhs) {
    return rhs;
}
inline WGPUStencilOperation* ToAPI(WGPUStencilOperation* rhs) {
    return rhs;
}

inline wgpu::StencilOperation FromAPI(WGPUStencilOperation rhs) {
    return static_cast<wgpu::StencilOperation>(rhs);
}
inline const wgpu::StencilOperation* FromAPI(const WGPUStencilOperation* rhs) {
    return reinterpret_cast<const wgpu::StencilOperation*>(rhs);
}
inline wgpu::StencilOperation* FromAPI(WGPUStencilOperation* rhs) {
    return reinterpret_cast<wgpu::StencilOperation*>(rhs);
}
inline WGPUStorageTextureAccess ToAPI(WGPUStorageTextureAccess rhs) {
    return rhs;
}
inline const WGPUStorageTextureAccess* ToAPI(const WGPUStorageTextureAccess* rhs) {
    return rhs;
}
inline WGPUStorageTextureAccess* ToAPI(WGPUStorageTextureAccess* rhs) {
    return rhs;
}

inline wgpu::StorageTextureAccess FromAPI(WGPUStorageTextureAccess rhs) {
    return static_cast<wgpu::StorageTextureAccess>(rhs);
}
inline const wgpu::StorageTextureAccess* FromAPI(const WGPUStorageTextureAccess* rhs) {
    return reinterpret_cast<const wgpu::StorageTextureAccess*>(rhs);
}
inline wgpu::StorageTextureAccess* FromAPI(WGPUStorageTextureAccess* rhs) {
    return reinterpret_cast<wgpu::StorageTextureAccess*>(rhs);
}
inline WGPUStoreOp ToAPI(WGPUStoreOp rhs) {
    return rhs;
}
inline const WGPUStoreOp* ToAPI(const WGPUStoreOp* rhs) {
    return rhs;
}
inline WGPUStoreOp* ToAPI(WGPUStoreOp* rhs) {
    return rhs;
}

inline wgpu::StoreOp FromAPI(WGPUStoreOp rhs) {
    return static_cast<wgpu::StoreOp>(rhs);
}
inline const wgpu::StoreOp* FromAPI(const WGPUStoreOp* rhs) {
    return reinterpret_cast<const wgpu::StoreOp*>(rhs);
}
inline wgpu::StoreOp* FromAPI(WGPUStoreOp* rhs) {
    return reinterpret_cast<wgpu::StoreOp*>(rhs);
}
inline WGPUSType ToAPI(WGPUSType rhs) {
    return rhs;
}
inline const WGPUSType* ToAPI(const WGPUSType* rhs) {
    return rhs;
}
inline WGPUSType* ToAPI(WGPUSType* rhs) {
    return rhs;
}

inline wgpu::SType FromAPI(WGPUSType rhs) {
    return static_cast<wgpu::SType>(rhs);
}
inline const wgpu::SType* FromAPI(const WGPUSType* rhs) {
    return reinterpret_cast<const wgpu::SType*>(rhs);
}
inline wgpu::SType* FromAPI(WGPUSType* rhs) {
    return reinterpret_cast<wgpu::SType*>(rhs);
}
inline WGPUSubgroupMatrixComponentType ToAPI(WGPUSubgroupMatrixComponentType rhs) {
    return rhs;
}
inline const WGPUSubgroupMatrixComponentType* ToAPI(const WGPUSubgroupMatrixComponentType* rhs) {
    return rhs;
}
inline WGPUSubgroupMatrixComponentType* ToAPI(WGPUSubgroupMatrixComponentType* rhs) {
    return rhs;
}

inline wgpu::SubgroupMatrixComponentType FromAPI(WGPUSubgroupMatrixComponentType rhs) {
    return static_cast<wgpu::SubgroupMatrixComponentType>(rhs);
}
inline const wgpu::SubgroupMatrixComponentType* FromAPI(const WGPUSubgroupMatrixComponentType* rhs) {
    return reinterpret_cast<const wgpu::SubgroupMatrixComponentType*>(rhs);
}
inline wgpu::SubgroupMatrixComponentType* FromAPI(WGPUSubgroupMatrixComponentType* rhs) {
    return reinterpret_cast<wgpu::SubgroupMatrixComponentType*>(rhs);
}
inline WGPUSurfaceGetCurrentTextureStatus ToAPI(WGPUSurfaceGetCurrentTextureStatus rhs) {
    return rhs;
}
inline const WGPUSurfaceGetCurrentTextureStatus* ToAPI(const WGPUSurfaceGetCurrentTextureStatus* rhs) {
    return rhs;
}
inline WGPUSurfaceGetCurrentTextureStatus* ToAPI(WGPUSurfaceGetCurrentTextureStatus* rhs) {
    return rhs;
}

inline wgpu::SurfaceGetCurrentTextureStatus FromAPI(WGPUSurfaceGetCurrentTextureStatus rhs) {
    return static_cast<wgpu::SurfaceGetCurrentTextureStatus>(rhs);
}
inline const wgpu::SurfaceGetCurrentTextureStatus* FromAPI(const WGPUSurfaceGetCurrentTextureStatus* rhs) {
    return reinterpret_cast<const wgpu::SurfaceGetCurrentTextureStatus*>(rhs);
}
inline wgpu::SurfaceGetCurrentTextureStatus* FromAPI(WGPUSurfaceGetCurrentTextureStatus* rhs) {
    return reinterpret_cast<wgpu::SurfaceGetCurrentTextureStatus*>(rhs);
}
inline WGPUTexelBufferAccess ToAPI(WGPUTexelBufferAccess rhs) {
    return rhs;
}
inline const WGPUTexelBufferAccess* ToAPI(const WGPUTexelBufferAccess* rhs) {
    return rhs;
}
inline WGPUTexelBufferAccess* ToAPI(WGPUTexelBufferAccess* rhs) {
    return rhs;
}

inline wgpu::TexelBufferAccess FromAPI(WGPUTexelBufferAccess rhs) {
    return static_cast<wgpu::TexelBufferAccess>(rhs);
}
inline const wgpu::TexelBufferAccess* FromAPI(const WGPUTexelBufferAccess* rhs) {
    return reinterpret_cast<const wgpu::TexelBufferAccess*>(rhs);
}
inline wgpu::TexelBufferAccess* FromAPI(WGPUTexelBufferAccess* rhs) {
    return reinterpret_cast<wgpu::TexelBufferAccess*>(rhs);
}
inline WGPUTextureAspect ToAPI(WGPUTextureAspect rhs) {
    return rhs;
}
inline const WGPUTextureAspect* ToAPI(const WGPUTextureAspect* rhs) {
    return rhs;
}
inline WGPUTextureAspect* ToAPI(WGPUTextureAspect* rhs) {
    return rhs;
}

inline wgpu::TextureAspect FromAPI(WGPUTextureAspect rhs) {
    return static_cast<wgpu::TextureAspect>(rhs);
}
inline const wgpu::TextureAspect* FromAPI(const WGPUTextureAspect* rhs) {
    return reinterpret_cast<const wgpu::TextureAspect*>(rhs);
}
inline wgpu::TextureAspect* FromAPI(WGPUTextureAspect* rhs) {
    return reinterpret_cast<wgpu::TextureAspect*>(rhs);
}
inline WGPUTextureDimension ToAPI(WGPUTextureDimension rhs) {
    return rhs;
}
inline const WGPUTextureDimension* ToAPI(const WGPUTextureDimension* rhs) {
    return rhs;
}
inline WGPUTextureDimension* ToAPI(WGPUTextureDimension* rhs) {
    return rhs;
}

inline wgpu::TextureDimension FromAPI(WGPUTextureDimension rhs) {
    return static_cast<wgpu::TextureDimension>(rhs);
}
inline const wgpu::TextureDimension* FromAPI(const WGPUTextureDimension* rhs) {
    return reinterpret_cast<const wgpu::TextureDimension*>(rhs);
}
inline wgpu::TextureDimension* FromAPI(WGPUTextureDimension* rhs) {
    return reinterpret_cast<wgpu::TextureDimension*>(rhs);
}
inline WGPUTextureFormat ToAPI(WGPUTextureFormat rhs) {
    return rhs;
}
inline const WGPUTextureFormat* ToAPI(const WGPUTextureFormat* rhs) {
    return rhs;
}
inline WGPUTextureFormat* ToAPI(WGPUTextureFormat* rhs) {
    return rhs;
}

inline wgpu::TextureFormat FromAPI(WGPUTextureFormat rhs) {
    return static_cast<wgpu::TextureFormat>(rhs);
}
inline const wgpu::TextureFormat* FromAPI(const WGPUTextureFormat* rhs) {
    return reinterpret_cast<const wgpu::TextureFormat*>(rhs);
}
inline wgpu::TextureFormat* FromAPI(WGPUTextureFormat* rhs) {
    return reinterpret_cast<wgpu::TextureFormat*>(rhs);
}
inline WGPUTextureSampleType ToAPI(WGPUTextureSampleType rhs) {
    return rhs;
}
inline const WGPUTextureSampleType* ToAPI(const WGPUTextureSampleType* rhs) {
    return rhs;
}
inline WGPUTextureSampleType* ToAPI(WGPUTextureSampleType* rhs) {
    return rhs;
}

inline wgpu::TextureSampleType FromAPI(WGPUTextureSampleType rhs) {
    return static_cast<wgpu::TextureSampleType>(rhs);
}
inline const wgpu::TextureSampleType* FromAPI(const WGPUTextureSampleType* rhs) {
    return reinterpret_cast<const wgpu::TextureSampleType*>(rhs);
}
inline wgpu::TextureSampleType* FromAPI(WGPUTextureSampleType* rhs) {
    return reinterpret_cast<wgpu::TextureSampleType*>(rhs);
}
inline WGPUTextureViewDimension ToAPI(WGPUTextureViewDimension rhs) {
    return rhs;
}
inline const WGPUTextureViewDimension* ToAPI(const WGPUTextureViewDimension* rhs) {
    return rhs;
}
inline WGPUTextureViewDimension* ToAPI(WGPUTextureViewDimension* rhs) {
    return rhs;
}

inline wgpu::TextureViewDimension FromAPI(WGPUTextureViewDimension rhs) {
    return static_cast<wgpu::TextureViewDimension>(rhs);
}
inline const wgpu::TextureViewDimension* FromAPI(const WGPUTextureViewDimension* rhs) {
    return reinterpret_cast<const wgpu::TextureViewDimension*>(rhs);
}
inline wgpu::TextureViewDimension* FromAPI(WGPUTextureViewDimension* rhs) {
    return reinterpret_cast<wgpu::TextureViewDimension*>(rhs);
}
inline WGPUToneMappingMode ToAPI(WGPUToneMappingMode rhs) {
    return rhs;
}
inline const WGPUToneMappingMode* ToAPI(const WGPUToneMappingMode* rhs) {
    return rhs;
}
inline WGPUToneMappingMode* ToAPI(WGPUToneMappingMode* rhs) {
    return rhs;
}

inline wgpu::ToneMappingMode FromAPI(WGPUToneMappingMode rhs) {
    return static_cast<wgpu::ToneMappingMode>(rhs);
}
inline const wgpu::ToneMappingMode* FromAPI(const WGPUToneMappingMode* rhs) {
    return reinterpret_cast<const wgpu::ToneMappingMode*>(rhs);
}
inline wgpu::ToneMappingMode* FromAPI(WGPUToneMappingMode* rhs) {
    return reinterpret_cast<wgpu::ToneMappingMode*>(rhs);
}
inline WGPUVertexFormat ToAPI(WGPUVertexFormat rhs) {
    return rhs;
}
inline const WGPUVertexFormat* ToAPI(const WGPUVertexFormat* rhs) {
    return rhs;
}
inline WGPUVertexFormat* ToAPI(WGPUVertexFormat* rhs) {
    return rhs;
}

inline wgpu::VertexFormat FromAPI(WGPUVertexFormat rhs) {
    return static_cast<wgpu::VertexFormat>(rhs);
}
inline const wgpu::VertexFormat* FromAPI(const WGPUVertexFormat* rhs) {
    return reinterpret_cast<const wgpu::VertexFormat*>(rhs);
}
inline wgpu::VertexFormat* FromAPI(WGPUVertexFormat* rhs) {
    return reinterpret_cast<wgpu::VertexFormat*>(rhs);
}
inline WGPUVertexStepMode ToAPI(WGPUVertexStepMode rhs) {
    return rhs;
}
inline const WGPUVertexStepMode* ToAPI(const WGPUVertexStepMode* rhs) {
    return rhs;
}
inline WGPUVertexStepMode* ToAPI(WGPUVertexStepMode* rhs) {
    return rhs;
}

inline wgpu::VertexStepMode FromAPI(WGPUVertexStepMode rhs) {
    return static_cast<wgpu::VertexStepMode>(rhs);
}
inline const wgpu::VertexStepMode* FromAPI(const WGPUVertexStepMode* rhs) {
    return reinterpret_cast<const wgpu::VertexStepMode*>(rhs);
}
inline wgpu::VertexStepMode* FromAPI(WGPUVertexStepMode* rhs) {
    return reinterpret_cast<wgpu::VertexStepMode*>(rhs);
}
inline WGPUWaitStatus ToAPI(WGPUWaitStatus rhs) {
    return rhs;
}
inline const WGPUWaitStatus* ToAPI(const WGPUWaitStatus* rhs) {
    return rhs;
}
inline WGPUWaitStatus* ToAPI(WGPUWaitStatus* rhs) {
    return rhs;
}

inline wgpu::WaitStatus FromAPI(WGPUWaitStatus rhs) {
    return static_cast<wgpu::WaitStatus>(rhs);
}
inline const wgpu::WaitStatus* FromAPI(const WGPUWaitStatus* rhs) {
    return reinterpret_cast<const wgpu::WaitStatus*>(rhs);
}
inline wgpu::WaitStatus* FromAPI(WGPUWaitStatus* rhs) {
    return reinterpret_cast<wgpu::WaitStatus*>(rhs);
}
inline WGPUWGSLLanguageFeatureName ToAPI(WGPUWGSLLanguageFeatureName rhs) {
    return rhs;
}
inline const WGPUWGSLLanguageFeatureName* ToAPI(const WGPUWGSLLanguageFeatureName* rhs) {
    return rhs;
}
inline WGPUWGSLLanguageFeatureName* ToAPI(WGPUWGSLLanguageFeatureName* rhs) {
    return rhs;
}

inline wgpu::WGSLLanguageFeatureName FromAPI(WGPUWGSLLanguageFeatureName rhs) {
    return static_cast<wgpu::WGSLLanguageFeatureName>(rhs);
}
inline const wgpu::WGSLLanguageFeatureName* FromAPI(const WGPUWGSLLanguageFeatureName* rhs) {
    return reinterpret_cast<const wgpu::WGSLLanguageFeatureName*>(rhs);
}
inline wgpu::WGSLLanguageFeatureName* FromAPI(WGPUWGSLLanguageFeatureName* rhs) {
    return reinterpret_cast<wgpu::WGSLLanguageFeatureName*>(rhs);
}

// Fallback ToAPI and FromAPI for primitive and matching pointer types.
template <typename T>
    requires(
        std::is_fundamental_v<std::remove_cv_t<T>> ||
        std::is_same_v<std::remove_cv_t<T>, std::byte> ||
        std::is_void_v<std::remove_cv_t<T>>)
inline T* ToAPI(T* rhs) {
    return rhs;
}
inline const std::byte* FromAPI(const void* rhs) {
    return reinterpret_cast<const std::byte*>(rhs);
}
inline std::byte* FromAPI(void* rhs) {
    return reinterpret_cast<std::byte*>(rhs);
}

template <typename T>
    requires(
        std::is_fundamental_v<std::remove_cv_t<T>> ||
        std::is_same_v<std::remove_cv_t<T>, std::byte>)
inline T* FromAPI(T* rhs) {
    return rhs;
}

template <typename T>
    requires(
        (std::is_fundamental_v<std::remove_cv_t<T>> && !std::is_void_v<std::remove_cv_t<T>>) ||
        std::is_same_v<std::remove_cv_t<T>, std::byte>)
inline T ToAPI(T rhs) {
    return rhs;
}
template <typename T>
    requires(
        (std::is_fundamental_v<std::remove_cv_t<T>> && !std::is_void_v<std::remove_cv_t<T>>) ||
        std::is_same_v<std::remove_cv_t<T>, std::byte>)
inline T FromAPI(T rhs) {
    return rhs;
}

// Templated helper for converting Spans.
template <typename T, typename Index, typename PtrType, Index Extent>
auto ToAPI(dawn::detail::SpanBase<T, Index, PtrType, Extent> rhs) {
    using ResultItem = std::remove_pointer_t<decltype(ToAPI(rhs.data()))>;
    // SAFETY: The returned Span has the same lifetime as the input Span.
    return DAWN_UNSAFE_BUFFERS(dawn::detail::SpanBase<ResultItem, Index, ResultItem*, Extent>(ToAPI(rhs.data()), rhs.size()));
}

template <typename T, typename Index, typename PtrType, Index Extent>
auto FromAPI(dawn::detail::SpanBase<T, Index, PtrType, Extent> rhs) {
    using ResultItem = std::remove_pointer_t<decltype(FromAPI(rhs.data()))>;
    // SAFETY: The returned Span has the same lifetime as the input Span.
    return DAWN_UNSAFE_BUFFERS(dawn::detail::SpanBase<ResultItem, Index, ResultItem*, Extent>(FromAPI(rhs.data()), rhs.size()));
}

namespace detail {
template <typename T>
struct AsAPITypeImpl {
    using type = T;
};
template <typename T>
    requires requires { ToAPI(std::declval<T>()); }
struct AsAPITypeImpl<T> {
    using type = decltype(ToAPI(std::declval<T>()));
};
}  // namespace detail

// Helper useful in templating code, especially for MSVC where template deduction fails for some
// overloads sometimes.
template <typename T>
using AsAPIType = typename detail::AsAPITypeImpl<T>::type;


}  // namespace dawn::native

#endif  // DAWNNATIVE_DAWN_PLATFORM_AUTOGEN_H_
