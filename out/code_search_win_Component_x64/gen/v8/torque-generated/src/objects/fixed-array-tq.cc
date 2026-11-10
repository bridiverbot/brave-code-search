#include "src/objects/fixed-array.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=5&c=1
class TorqueGeneratedFixedArrayAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 8;
  static constexpr int kHeaderSize = 8;
  // https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=7&c=3
  static constexpr int kObjectsOffset = 8;
  static constexpr int kObjectsOffsetEnd = kObjectsOffset + 0 - 1;
  static constexpr int kEndOfStrongFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kObjectsOffsetEnd + 1;

  static_assert(kObjectsOffset == OFFSET_OF_DATA_START(FixedArray),
                "Value of FixedArray::kObjectsOffset defined in Torque and offset of field FixedArray::objects in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=22&c=1
class TorqueGeneratedWeakFixedArrayAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 8;
  static constexpr int kHeaderSize = 8;
  // https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=24&c=3
  static constexpr int kObjectsOffset = 8;
  static constexpr int kObjectsOffsetEnd = kObjectsOffset + 0 - 1;
  static constexpr int kEndOfWeakFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kObjectsOffsetEnd + 1;

  static_assert(kObjectsOffset == OFFSET_OF_DATA_START(WeakFixedArray),
                "Value of WeakFixedArray::kObjectsOffset defined in Torque and offset of field WeakFixedArray::objects in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=49&c=1
class TorqueGeneratedWeakArrayListAsserts {
  // https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=51&c=9
  static constexpr int kCapacityOffset = 4;
  static constexpr int kCapacityOffsetEnd = kCapacityOffset + kInt32Size - 1;
  // https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=52&c=3
  static constexpr int kLengthOffset = kCapacityOffsetEnd + 1;
  static constexpr int kLengthOffsetEnd = kLengthOffset + kInt32Size - 1;
  static constexpr int kStartOfWeakFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kHeaderSize = kLengthOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=53&c=3
  static constexpr int kObjectsOffset = kLengthOffsetEnd + 1;
  static constexpr int kObjectsOffsetEnd = kObjectsOffset + 0 - 1;
  static constexpr int kEndOfWeakFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kObjectsOffsetEnd + 1;

  static_assert(kCapacityOffset == offsetof(WeakArrayList, capacity_),
                "Value of WeakArrayList::kCapacityOffset defined in Torque and offset of field WeakArrayList::capacity in C++ do not match");
  static_assert(kLengthOffset == offsetof(WeakArrayList, length_),
                "Value of WeakArrayList::kLengthOffset defined in Torque and offset of field WeakArrayList::length in C++ do not match");
  static_assert(kObjectsOffset == OFFSET_OF_DATA_START(WeakArrayList),
                "Value of WeakArrayList::kObjectsOffset defined in Torque and offset of field WeakArrayList::objects in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=12&c=1
class TorqueGeneratedTrustedFixedArrayAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 8;
  static constexpr int kHeaderSize = 8;
  // https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=14&c=3
  static constexpr int kObjectsOffset = 8;
  static constexpr int kObjectsOffsetEnd = kObjectsOffset + 0 - 1;
  static constexpr int kEndOfStrongFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kObjectsOffsetEnd + 1;

  static_assert(kObjectsOffset == OFFSET_OF_DATA_START(TrustedFixedArray),
                "Value of TrustedFixedArray::kObjectsOffset defined in Torque and offset of field TrustedFixedArray::objects in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=17&c=1
class TorqueGeneratedProtectedFixedArrayAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 8;
  static constexpr int kHeaderSize = 8;
  // https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=19&c=3
  static constexpr int kObjectsOffset = 8;
  static constexpr int kObjectsOffsetEnd = kObjectsOffset + 0 - 1;
  static constexpr int kEndOfWeakFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kObjectsOffsetEnd + 1;

  static_assert(kObjectsOffset == OFFSET_OF_DATA_START(ProtectedFixedArray),
                "Value of ProtectedFixedArray::kObjectsOffset defined in Torque and offset of field ProtectedFixedArray::objects in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=27&c=1
class TorqueGeneratedWeakHomomorphicFixedArrayAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 8;
  static constexpr int kHeaderSize = 8;
  // https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=29&c=3
  static constexpr int kObjectsOffset = 8;
  static constexpr int kObjectsOffsetEnd = kObjectsOffset + 0 - 1;
  static constexpr int kEndOfWeakFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kObjectsOffsetEnd + 1;

  static_assert(kObjectsOffset == OFFSET_OF_DATA_START(WeakHomomorphicFixedArray),
                "Value of WeakHomomorphicFixedArray::kObjectsOffset defined in Torque and offset of field WeakHomomorphicFixedArray::objects in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=32&c=1
class TorqueGeneratedTrustedWeakFixedArrayAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 8;
  static constexpr int kHeaderSize = 8;
  // https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=34&c=3
  static constexpr int kObjectsOffset = 8;
  static constexpr int kObjectsOffsetEnd = kObjectsOffset + 0 - 1;
  static constexpr int kEndOfWeakFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kObjectsOffsetEnd + 1;

  static_assert(kObjectsOffset == OFFSET_OF_DATA_START(TrustedWeakFixedArray),
                "Value of TrustedWeakFixedArray::kObjectsOffset defined in Torque and offset of field TrustedWeakFixedArray::objects in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=37&c=1
class TorqueGeneratedProtectedWeakFixedArrayAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 8;
  static constexpr int kHeaderSize = 8;
  // https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=39&c=3
  static constexpr int kObjectsOffset = 8;
  static constexpr int kObjectsOffsetEnd = kObjectsOffset + 0 - 1;
  static constexpr int kEndOfWeakFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kObjectsOffsetEnd + 1;

  static_assert(kObjectsOffset == OFFSET_OF_DATA_START(ProtectedWeakFixedArray),
                "Value of ProtectedWeakFixedArray::kObjectsOffset defined in Torque and offset of field ProtectedWeakFixedArray::objects in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=42&c=1
class TorqueGeneratedArrayListAsserts {
  // https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=44&c=9
  static constexpr int kCapacityOffset = 4;
  static constexpr int kCapacityOffsetEnd = kCapacityOffset + kInt32Size - 1;
  // https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=45&c=3
  static constexpr int kLengthOffset = kCapacityOffsetEnd + 1;
  static constexpr int kLengthOffsetEnd = kLengthOffset + kInt32Size - 1;
  static constexpr int kStartOfStrongFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kHeaderSize = kLengthOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=46&c=3
  static constexpr int kObjectsOffset = kLengthOffsetEnd + 1;
  static constexpr int kObjectsOffsetEnd = kObjectsOffset + 0 - 1;
  static constexpr int kEndOfStrongFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kObjectsOffsetEnd + 1;

  static_assert(kCapacityOffset == offsetof(ArrayList, capacity_),
                "Value of ArrayList::kCapacityOffset defined in Torque and offset of field ArrayList::capacity in C++ do not match");
  static_assert(kLengthOffset == offsetof(ArrayList, length_),
                "Value of ArrayList::kLengthOffset defined in Torque and offset of field ArrayList::length in C++ do not match");
  static_assert(kObjectsOffset == OFFSET_OF_DATA_START(ArrayList),
                "Value of ArrayList::kObjectsOffset defined in Torque and offset of field ArrayList::objects in C++ do not match");
};

} // namespace internal
} // namespace v8
