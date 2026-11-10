#include "src/objects/prototype-info.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/objects/prototype-info.tq?l=13&c=1
class TorqueGeneratedPrototypeInfoAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 4;
  // https://crsrc.org/c/v8/src/objects/prototype-info.tq?l=19&c=3
  static constexpr int kModuleNamespaceOffset = 4;
  static constexpr int kModuleNamespaceOffsetEnd = kModuleNamespaceOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/prototype-info.tq?l=23&c=3
  static constexpr int kPrototypeUsersOffset = kModuleNamespaceOffsetEnd + 1;
  static constexpr int kPrototypeUsersOffsetEnd = kPrototypeUsersOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/prototype-info.tq?l=25&c=3
  static constexpr int kPrototypeChainEnumCacheOffset = kPrototypeUsersOffsetEnd + 1;
  static constexpr int kPrototypeChainEnumCacheOffsetEnd = kPrototypeChainEnumCacheOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/prototype-info.tq?l=29&c=3
  static constexpr int kRegistrySlotOffset = kPrototypeChainEnumCacheOffsetEnd + 1;
  static constexpr int kRegistrySlotOffsetEnd = kRegistrySlotOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/prototype-info.tq?l=31&c=3
  static constexpr int kBitFieldOffset = kRegistrySlotOffsetEnd + 1;
  static constexpr int kBitFieldOffsetEnd = kBitFieldOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/prototype-info.tq?l=36&c=3
  static constexpr int kDerivedMapsOffset = kBitFieldOffsetEnd + 1;
  static constexpr int kDerivedMapsOffsetEnd = kDerivedMapsOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/prototype-info.tq?l=40&c=3
  static constexpr int kPrototypeSharedClosureInfoOffset = kDerivedMapsOffsetEnd + 1;
  static constexpr int kPrototypeSharedClosureInfoOffsetEnd = kPrototypeSharedClosureInfoOffset + kTaggedSize - 1;
  static constexpr int kHeaderSize = kPrototypeSharedClosureInfoOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/objects/prototype-info.tq?l=44&c=3
  static constexpr int kCachedHandlerOffset = kPrototypeSharedClosureInfoOffsetEnd + 1;
  static constexpr int kCachedHandlerOffsetEnd = kCachedHandlerOffset + 0 - 1;
  static constexpr int kEndOfStrongFieldsOffset = kCachedHandlerOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kCachedHandlerOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kCachedHandlerOffsetEnd + 1;

  static_assert(kModuleNamespaceOffset == offsetof(PrototypeInfo, module_namespace_),
                "Value of PrototypeInfo::kModuleNamespaceOffset defined in Torque and offset of field PrototypeInfo::module_namespace in C++ do not match");
  static_assert(kPrototypeUsersOffset == offsetof(PrototypeInfo, prototype_users_),
                "Value of PrototypeInfo::kPrototypeUsersOffset defined in Torque and offset of field PrototypeInfo::prototype_users in C++ do not match");
  static_assert(kPrototypeChainEnumCacheOffset == offsetof(PrototypeInfo, prototype_chain_enum_cache_),
                "Value of PrototypeInfo::kPrototypeChainEnumCacheOffset defined in Torque and offset of field PrototypeInfo::prototype_chain_enum_cache in C++ do not match");
  static_assert(kRegistrySlotOffset == offsetof(PrototypeInfo, registry_slot_),
                "Value of PrototypeInfo::kRegistrySlotOffset defined in Torque and offset of field PrototypeInfo::registry_slot in C++ do not match");
  static_assert(kBitFieldOffset == offsetof(PrototypeInfo, bit_field_),
                "Value of PrototypeInfo::kBitFieldOffset defined in Torque and offset of field PrototypeInfo::bit_field in C++ do not match");
  static_assert(kDerivedMapsOffset == offsetof(PrototypeInfo, derived_maps_),
                "Value of PrototypeInfo::kDerivedMapsOffset defined in Torque and offset of field PrototypeInfo::derived_maps in C++ do not match");
  static_assert(kPrototypeSharedClosureInfoOffset == offsetof(PrototypeInfo, prototype_shared_closure_info_),
                "Value of PrototypeInfo::kPrototypeSharedClosureInfoOffset defined in Torque and offset of field PrototypeInfo::prototype_shared_closure_info in C++ do not match");
  static_assert(kCachedHandlerOffset == offsetof(PrototypeInfo, cached_handler_),
                "Value of PrototypeInfo::kCachedHandlerOffset defined in Torque and offset of field PrototypeInfo::cached_handler in C++ do not match");
};

} // namespace internal
} // namespace v8
