#include "src/objects/descriptor-array.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/objects/descriptor-array.tq?l=5&c=1
class TorqueGeneratedEnumCacheAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 4;
  // https://crsrc.org/c/v8/src/objects/descriptor-array.tq?l=7&c=3
  static constexpr int kKeysOffset = 4;
  static constexpr int kKeysOffsetEnd = kKeysOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/descriptor-array.tq?l=8&c=3
  static constexpr int kIndicesOffset = kKeysOffsetEnd + 1;
  static constexpr int kIndicesOffsetEnd = kIndicesOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kIndicesOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kIndicesOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kIndicesOffsetEnd + 1;
  static constexpr int kHeaderSize = kIndicesOffsetEnd + 1;
  static constexpr int kSize = kIndicesOffsetEnd + 1;

  static_assert(kKeysOffset == offsetof(EnumCache, keys_),
                "Value of EnumCache::kKeysOffset defined in Torque and offset of field EnumCache::keys in C++ do not match");
  static_assert(kIndicesOffset == offsetof(EnumCache, indices_),
                "Value of EnumCache::kIndicesOffset defined in Torque and offset of field EnumCache::indices in C++ do not match");
  static_assert(kSize <= sizeof(EnumCache) && sizeof(EnumCache) < kSize + alignof(EnumCache));
};

// Definition https://crsrc.org/c/v8/src/objects/descriptor-array.tq?l=27&c=1
class TorqueGeneratedDescriptorArrayAsserts {
  // https://crsrc.org/c/v8/src/objects/descriptor-array.tq?l=29&c=9
  static constexpr int kNumberOfAllDescriptorsOffset = 4;
  static constexpr int kNumberOfAllDescriptorsOffsetEnd = kNumberOfAllDescriptorsOffset + kUInt16Size - 1;
  // https://crsrc.org/c/v8/src/objects/descriptor-array.tq?l=30&c=3
  static constexpr int kNumberOfDescriptorsOffset = kNumberOfAllDescriptorsOffsetEnd + 1;
  static constexpr int kNumberOfDescriptorsOffsetEnd = kNumberOfDescriptorsOffset + kUInt16Size - 1;
  // https://crsrc.org/c/v8/src/objects/descriptor-array.tq?l=31&c=3
  static constexpr int kFlagsOffset = kNumberOfDescriptorsOffsetEnd + 1;
  static constexpr int kFlagsOffsetEnd = kFlagsOffset + kInt32Size - 1;
  static constexpr int kStartOfStrongFieldsOffset = kFlagsOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/objects/descriptor-array.tq?l=32&c=3
  static constexpr int kEnumCacheOffset = kFlagsOffsetEnd + 1;
  static constexpr int kEnumCacheOffsetEnd = kEnumCacheOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kEnumCacheOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kEnumCacheOffsetEnd + 1;
  static constexpr int kHeaderSize = kEnumCacheOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/objects/descriptor-array.tq?l=33&c=3
  static constexpr int kEntriesOffset = kEnumCacheOffsetEnd + 1;
  static constexpr int kEntriesOffsetEnd = kEntriesOffset + 0 - 1;
  static constexpr int kEndOfWeakFieldsOffset = kEntriesOffsetEnd + 1;

  static_assert(kNumberOfAllDescriptorsOffset == offsetof(DescriptorArray, number_of_all_descriptors_),
                "Value of DescriptorArray::kNumberOfAllDescriptorsOffset defined in Torque and offset of field DescriptorArray::number_of_all_descriptors in C++ do not match");
  static_assert(kNumberOfDescriptorsOffset == offsetof(DescriptorArray, number_of_descriptors_),
                "Value of DescriptorArray::kNumberOfDescriptorsOffset defined in Torque and offset of field DescriptorArray::number_of_descriptors in C++ do not match");
  static_assert(kFlagsOffset == offsetof(DescriptorArray, flags_),
                "Value of DescriptorArray::kFlagsOffset defined in Torque and offset of field DescriptorArray::flags in C++ do not match");
  static_assert(kEnumCacheOffset == offsetof(DescriptorArray, enum_cache_),
                "Value of DescriptorArray::kEnumCacheOffset defined in Torque and offset of field DescriptorArray::enum_cache in C++ do not match");
};

} // namespace internal
} // namespace v8
