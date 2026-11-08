#include "src/objects/swiss-name-dictionary.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=9&c=1
class TorqueGeneratedSwissNameDictionaryAsserts {
  // https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=11&c=3
  static constexpr int kHashOffset = 4;
  static constexpr int kHashOffsetEnd = kHashOffset + kInt32Size - 1;
  // https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=12&c=9
  static constexpr int kCapacityOffset = kHashOffsetEnd + 1;
  static constexpr int kCapacityOffsetEnd = kCapacityOffset + kInt32Size - 1;
  static constexpr int kStartOfStrongFieldsOffset = kCapacityOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=13&c=3
  static constexpr int kMetaTableOffset = kCapacityOffsetEnd + 1;
  static constexpr int kMetaTableOffsetEnd = kMetaTableOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kMetaTableOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kMetaTableOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kMetaTableOffsetEnd + 1;
  static constexpr int kHeaderSize = kMetaTableOffsetEnd + 1;
  static constexpr int kSize = kMetaTableOffsetEnd + 1;

  static_assert(kHashOffset == offsetof(SwissNameDictionary, hash_),
                "Value of SwissNameDictionary::kHashOffset defined in Torque and offset of field SwissNameDictionary::hash in C++ do not match");
  static_assert(kCapacityOffset == offsetof(SwissNameDictionary, capacity_),
                "Value of SwissNameDictionary::kCapacityOffset defined in Torque and offset of field SwissNameDictionary::capacity in C++ do not match");
  static_assert(kMetaTableOffset == offsetof(SwissNameDictionary, meta_table_),
                "Value of SwissNameDictionary::kMetaTableOffset defined in Torque and offset of field SwissNameDictionary::meta_table in C++ do not match");
  static_assert(kSize <= sizeof(SwissNameDictionary) && sizeof(SwissNameDictionary) < kSize + alignof(SwissNameDictionary));
};

} // namespace internal
} // namespace v8
