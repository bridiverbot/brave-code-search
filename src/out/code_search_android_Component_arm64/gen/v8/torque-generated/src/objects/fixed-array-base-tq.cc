#include "src/objects/fixed-array-base.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/objects/fixed-array-base.tq?l=5&c=1
class TorqueGeneratedFixedArrayBaseAsserts {
  // https://crsrc.org/c/v8/src/objects/fixed-array-base.tq?l=8&c=9
  static constexpr int kLengthOffset = 4;
  static constexpr int kLengthOffsetEnd = kLengthOffset + kInt32Size - 1;
  static constexpr int kStartOfWeakFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kHeaderSize = kLengthOffsetEnd + 1;

  static_assert(kLengthOffset == offsetof(FixedArrayBase, length_),
                "Value of FixedArrayBase::kLengthOffset defined in Torque and offset of field FixedArrayBase::length in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/fixed-array-base.tq?l=13&c=1
class TorqueGeneratedTrustedFixedArrayBaseAsserts {
  // https://crsrc.org/c/v8/src/objects/fixed-array-base.tq?l=16&c=9
  static constexpr int kLengthOffset = 4;
  static constexpr int kLengthOffsetEnd = kLengthOffset + kInt32Size - 1;
  static constexpr int kStartOfWeakFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kHeaderSize = kLengthOffsetEnd + 1;

  static_assert(kLengthOffset == offsetof(TrustedFixedArrayBase, length_),
                "Value of TrustedFixedArrayBase::kLengthOffset defined in Torque and offset of field TrustedFixedArrayBase::length in C++ do not match");
};

} // namespace internal
} // namespace v8
