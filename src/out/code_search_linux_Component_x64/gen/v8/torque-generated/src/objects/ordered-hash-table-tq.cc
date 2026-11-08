#include "src/objects/ordered-hash-table.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=7&c=1
class TorqueGeneratedSmallOrderedHashTableAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 4;
  static constexpr int kEndOfWeakFieldsOffset = 4;
  static constexpr int kStartOfStrongFieldsOffset = 4;
  static constexpr int kEndOfStrongFieldsOffset = 4;
  static constexpr int kHeaderSize = 4;

};

// Definition https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=16&c=1
class TorqueGeneratedSmallOrderedHashSetAsserts {
  // https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=18&c=3
  static constexpr int kNumberOfElementsOffset = 4;
  static constexpr int kNumberOfElementsOffsetEnd = kNumberOfElementsOffset + kUInt8Size - 1;
  // https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=19&c=3
  static constexpr int kNumberOfDeletedElementsOffset = kNumberOfElementsOffsetEnd + 1;
  static constexpr int kNumberOfDeletedElementsOffsetEnd = kNumberOfDeletedElementsOffset + kUInt8Size - 1;
  // https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=20&c=9
  static constexpr int kNumberOfBucketsOffset = kNumberOfDeletedElementsOffsetEnd + 1;
  static constexpr int kNumberOfBucketsOffsetEnd = kNumberOfBucketsOffset + kUInt8Size - 1;
  static constexpr int kHeaderSize = kNumberOfBucketsOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=22&c=31
  static constexpr int kPaddingOffset = kNumberOfBucketsOffsetEnd + 1;
  static constexpr int kPaddingOffsetEnd = kPaddingOffset + (1 * kUInt8Size) - 1;
  static constexpr int kStartOfWeakFieldsOffset = kPaddingOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kPaddingOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kPaddingOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kPaddingOffsetEnd + 1;
  static constexpr int kSize = kPaddingOffsetEnd + 1;

  static_assert(kNumberOfElementsOffset == offsetof(SmallOrderedHashSet, number_of_elements_),
                "Value of SmallOrderedHashSet::kNumberOfElementsOffset defined in Torque and offset of field SmallOrderedHashSet::number_of_elements in C++ do not match");
  static_assert(kNumberOfDeletedElementsOffset == offsetof(SmallOrderedHashSet, number_of_deleted_elements_),
                "Value of SmallOrderedHashSet::kNumberOfDeletedElementsOffset defined in Torque and offset of field SmallOrderedHashSet::number_of_deleted_elements in C++ do not match");
  static_assert(kNumberOfBucketsOffset == offsetof(SmallOrderedHashSet, number_of_buckets_),
                "Value of SmallOrderedHashSet::kNumberOfBucketsOffset defined in Torque and offset of field SmallOrderedHashSet::number_of_buckets in C++ do not match");
  static_assert(kPaddingOffset == offsetof(SmallOrderedHashSet, padding_),
                "Value of SmallOrderedHashSet::kPaddingOffset defined in Torque and offset of field SmallOrderedHashSet::padding in C++ do not match");
  static_assert(kSize <= sizeof(SmallOrderedHashSet) && sizeof(SmallOrderedHashSet) < kSize + alignof(SmallOrderedHashSet));
};

// Definition https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=25&c=1
class TorqueGeneratedSmallOrderedHashMapAsserts {
  // https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=27&c=3
  static constexpr int kNumberOfElementsOffset = 4;
  static constexpr int kNumberOfElementsOffsetEnd = kNumberOfElementsOffset + kUInt8Size - 1;
  // https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=28&c=3
  static constexpr int kNumberOfDeletedElementsOffset = kNumberOfElementsOffsetEnd + 1;
  static constexpr int kNumberOfDeletedElementsOffsetEnd = kNumberOfDeletedElementsOffset + kUInt8Size - 1;
  // https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=29&c=9
  static constexpr int kNumberOfBucketsOffset = kNumberOfDeletedElementsOffsetEnd + 1;
  static constexpr int kNumberOfBucketsOffsetEnd = kNumberOfBucketsOffset + kUInt8Size - 1;
  static constexpr int kHeaderSize = kNumberOfBucketsOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=31&c=31
  static constexpr int kPaddingOffset = kNumberOfBucketsOffsetEnd + 1;
  static constexpr int kPaddingOffsetEnd = kPaddingOffset + (1 * kUInt8Size) - 1;
  static constexpr int kStartOfWeakFieldsOffset = kPaddingOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kPaddingOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kPaddingOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kPaddingOffsetEnd + 1;
  static constexpr int kSize = kPaddingOffsetEnd + 1;

  static_assert(kNumberOfElementsOffset == offsetof(SmallOrderedHashMap, number_of_elements_),
                "Value of SmallOrderedHashMap::kNumberOfElementsOffset defined in Torque and offset of field SmallOrderedHashMap::number_of_elements in C++ do not match");
  static_assert(kNumberOfDeletedElementsOffset == offsetof(SmallOrderedHashMap, number_of_deleted_elements_),
                "Value of SmallOrderedHashMap::kNumberOfDeletedElementsOffset defined in Torque and offset of field SmallOrderedHashMap::number_of_deleted_elements in C++ do not match");
  static_assert(kNumberOfBucketsOffset == offsetof(SmallOrderedHashMap, number_of_buckets_),
                "Value of SmallOrderedHashMap::kNumberOfBucketsOffset defined in Torque and offset of field SmallOrderedHashMap::number_of_buckets in C++ do not match");
  static_assert(kPaddingOffset == offsetof(SmallOrderedHashMap, padding_),
                "Value of SmallOrderedHashMap::kPaddingOffset defined in Torque and offset of field SmallOrderedHashMap::padding in C++ do not match");
  static_assert(kSize <= sizeof(SmallOrderedHashMap) && sizeof(SmallOrderedHashMap) < kSize + alignof(SmallOrderedHashMap));
};

// Definition https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=34&c=1
class TorqueGeneratedSmallOrderedNameDictionaryAsserts {
  // https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=36&c=3
  static constexpr int kHashOffset = 4;
  static constexpr int kHashOffsetEnd = kHashOffset + kInt32Size - 1;
  // https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=38&c=31
  static constexpr int kPadding0Offset = kHashOffsetEnd + 1;
  static constexpr int kPadding0OffsetEnd = kPadding0Offset + 0 - 1;
  // https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=39&c=3
  static constexpr int kNumberOfElementsOffset = kPadding0OffsetEnd + 1;
  static constexpr int kNumberOfElementsOffsetEnd = kNumberOfElementsOffset + kUInt8Size - 1;
  // https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=40&c=3
  static constexpr int kNumberOfDeletedElementsOffset = kNumberOfElementsOffsetEnd + 1;
  static constexpr int kNumberOfDeletedElementsOffsetEnd = kNumberOfDeletedElementsOffset + kUInt8Size - 1;
  // https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=41&c=9
  static constexpr int kNumberOfBucketsOffset = kNumberOfDeletedElementsOffsetEnd + 1;
  static constexpr int kNumberOfBucketsOffsetEnd = kNumberOfBucketsOffset + kUInt8Size - 1;
  static constexpr int kHeaderSize = kNumberOfBucketsOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=43&c=31
  static constexpr int kPadding1Offset = kNumberOfBucketsOffsetEnd + 1;
  static constexpr int kPadding1OffsetEnd = kPadding1Offset + (1 * kUInt8Size) - 1;
  static constexpr int kStartOfWeakFieldsOffset = kPadding1OffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kPadding1OffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kPadding1OffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kPadding1OffsetEnd + 1;
  static constexpr int kSize = kPadding1OffsetEnd + 1;

  static_assert(kHashOffset == offsetof(SmallOrderedNameDictionary, hash_),
                "Value of SmallOrderedNameDictionary::kHashOffset defined in Torque and offset of field SmallOrderedNameDictionary::hash in C++ do not match");
  static_assert(kPadding0Offset == offsetof(SmallOrderedNameDictionary, padding_0_),
                "Value of SmallOrderedNameDictionary::kPadding0Offset defined in Torque and offset of field SmallOrderedNameDictionary::padding_0 in C++ do not match");
  static_assert(kNumberOfElementsOffset == offsetof(SmallOrderedNameDictionary, number_of_elements_),
                "Value of SmallOrderedNameDictionary::kNumberOfElementsOffset defined in Torque and offset of field SmallOrderedNameDictionary::number_of_elements in C++ do not match");
  static_assert(kNumberOfDeletedElementsOffset == offsetof(SmallOrderedNameDictionary, number_of_deleted_elements_),
                "Value of SmallOrderedNameDictionary::kNumberOfDeletedElementsOffset defined in Torque and offset of field SmallOrderedNameDictionary::number_of_deleted_elements in C++ do not match");
  static_assert(kNumberOfBucketsOffset == offsetof(SmallOrderedNameDictionary, number_of_buckets_),
                "Value of SmallOrderedNameDictionary::kNumberOfBucketsOffset defined in Torque and offset of field SmallOrderedNameDictionary::number_of_buckets in C++ do not match");
  static_assert(kPadding1Offset == offsetof(SmallOrderedNameDictionary, padding_1_),
                "Value of SmallOrderedNameDictionary::kPadding1Offset defined in Torque and offset of field SmallOrderedNameDictionary::padding_1 in C++ do not match");
  static_assert(kSize <= sizeof(SmallOrderedNameDictionary) && sizeof(SmallOrderedNameDictionary) < kSize + alignof(SmallOrderedNameDictionary));
};

} // namespace internal
} // namespace v8
