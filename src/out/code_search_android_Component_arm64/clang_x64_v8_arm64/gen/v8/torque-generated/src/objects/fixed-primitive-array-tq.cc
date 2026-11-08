#include "src/objects/fixed-primitive-array.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/objects/fixed-primitive-array.tq?l=5&c=1
class TorqueGeneratedFixedDoubleArrayAsserts {
  static constexpr int kHeaderSize = 8;
  // https://crsrc.org/c/v8/src/objects/fixed-primitive-array.tq?l=7&c=3
  static constexpr int kValuesOffset = 8;
  static constexpr int kValuesOffsetEnd = kValuesOffset + 0 - 1;
  static constexpr int kStartOfWeakFieldsOffset = kValuesOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kValuesOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kValuesOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kValuesOffsetEnd + 1;

};

// Definition https://crsrc.org/c/v8/src/objects/fixed-primitive-array.tq?l=10&c=1
class TorqueGeneratedByteArrayAsserts {
  static constexpr int kHeaderSize = 8;
  // https://crsrc.org/c/v8/src/objects/fixed-primitive-array.tq?l=12&c=3
  static constexpr int kValuesOffset = 8;
  static constexpr int kValuesOffsetEnd = kValuesOffset + 0 - 1;
  static constexpr int kStartOfWeakFieldsOffset = kValuesOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kValuesOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kValuesOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kValuesOffsetEnd + 1;

  static_assert(kValuesOffset == OFFSET_OF_DATA_START(ByteArray),
                "Value of ByteArray::kValuesOffset defined in Torque and offset of field ByteArray::values in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/fixed-primitive-array.tq?l=15&c=1
class TorqueGeneratedTrustedByteArrayAsserts {
  static constexpr int kHeaderSize = 8;
  // https://crsrc.org/c/v8/src/objects/fixed-primitive-array.tq?l=17&c=3
  static constexpr int kValuesOffset = 8;
  static constexpr int kValuesOffsetEnd = kValuesOffset + 0 - 1;
  static constexpr int kStartOfWeakFieldsOffset = kValuesOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kValuesOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kValuesOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kValuesOffsetEnd + 1;

  static_assert(kValuesOffset == OFFSET_OF_DATA_START(TrustedByteArray),
                "Value of TrustedByteArray::kValuesOffset defined in Torque and offset of field TrustedByteArray::values in C++ do not match");
};

} // namespace internal
} // namespace v8
