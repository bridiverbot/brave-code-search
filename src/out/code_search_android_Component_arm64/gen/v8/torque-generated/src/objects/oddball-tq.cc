#include "src/objects/oddball.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/objects/oddball.tq?l=5&c=1
class TorqueGeneratedOddballAsserts {
  // https://crsrc.org/c/v8/src/objects/oddball.tq?l=9&c=3
  static constexpr int kToNumberRawOffset = 4;
  static constexpr int kToNumberRawOffsetEnd = kToNumberRawOffset + kDoubleSize - 1;
  static constexpr int kStartOfStrongFieldsOffset = kToNumberRawOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/objects/oddball.tq?l=10&c=3
  static constexpr int kToStringOffset = kToNumberRawOffsetEnd + 1;
  static constexpr int kToStringOffsetEnd = kToStringOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/oddball.tq?l=11&c=3
  static constexpr int kToNumberOffset = kToStringOffsetEnd + 1;
  static constexpr int kToNumberOffsetEnd = kToNumberOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/oddball.tq?l=12&c=3
  static constexpr int kTypeOfOffset = kToNumberOffsetEnd + 1;
  static constexpr int kTypeOfOffsetEnd = kTypeOfOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/oddball.tq?l=13&c=3
  static constexpr int kKindOffset = kTypeOfOffsetEnd + 1;
  static constexpr int kKindOffsetEnd = kKindOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kKindOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kKindOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kKindOffsetEnd + 1;
  static constexpr int kHeaderSize = kKindOffsetEnd + 1;
  static constexpr int kSize = kKindOffsetEnd + 1;

  static_assert(kToNumberRawOffset == offsetof(Oddball, to_number_raw_),
                "Value of Oddball::kToNumberRawOffset defined in Torque and offset of field Oddball::to_number_raw in C++ do not match");
  static_assert(kToStringOffset == offsetof(Oddball, to_string_),
                "Value of Oddball::kToStringOffset defined in Torque and offset of field Oddball::to_string in C++ do not match");
  static_assert(kToNumberOffset == offsetof(Oddball, to_number_),
                "Value of Oddball::kToNumberOffset defined in Torque and offset of field Oddball::to_number in C++ do not match");
  static_assert(kTypeOfOffset == offsetof(Oddball, type_of_),
                "Value of Oddball::kTypeOfOffset defined in Torque and offset of field Oddball::type_of in C++ do not match");
  static_assert(kKindOffset == offsetof(Oddball, kind_),
                "Value of Oddball::kKindOffset defined in Torque and offset of field Oddball::kind in C++ do not match");
  static_assert(kSize <= sizeof(Oddball) && sizeof(Oddball) < kSize + alignof(Oddball));
};

// Definition https://crsrc.org/c/v8/src/objects/oddball.tq?l=26&c=1
class TorqueGeneratedBooleanAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 28;
  static constexpr int kEndOfWeakFieldsOffset = 28;
  static constexpr int kStartOfStrongFieldsOffset = 28;
  static constexpr int kEndOfStrongFieldsOffset = 28;
  static constexpr int kHeaderSize = 28;
  static constexpr int kSize = 28;

  static_assert(kSize <= sizeof(Boolean) && sizeof(Boolean) < kSize + alignof(Boolean));
};

// Definition https://crsrc.org/c/v8/src/objects/oddball.tq?l=16&c=1
class TorqueGeneratedNullAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 28;
  static constexpr int kEndOfWeakFieldsOffset = 28;
  static constexpr int kStartOfStrongFieldsOffset = 28;
  static constexpr int kEndOfStrongFieldsOffset = 28;
  static constexpr int kHeaderSize = 28;
  static constexpr int kSize = 28;

  static_assert(kSize <= sizeof(Null) && sizeof(Null) < kSize + alignof(Null));
};

// Definition https://crsrc.org/c/v8/src/objects/oddball.tq?l=21&c=1
class TorqueGeneratedUndefinedAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 28;
  static constexpr int kEndOfWeakFieldsOffset = 28;
  static constexpr int kStartOfStrongFieldsOffset = 28;
  static constexpr int kEndOfStrongFieldsOffset = 28;
  static constexpr int kHeaderSize = 28;
  static constexpr int kSize = 28;

  static_assert(kSize <= sizeof(Undefined) && sizeof(Undefined) < kSize + alignof(Undefined));
};

// Definition https://crsrc.org/c/v8/src/objects/oddball.tq?l=31&c=1
class TorqueGeneratedTrueAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 28;
  static constexpr int kEndOfWeakFieldsOffset = 28;
  static constexpr int kStartOfStrongFieldsOffset = 28;
  static constexpr int kEndOfStrongFieldsOffset = 28;
  static constexpr int kHeaderSize = 28;
  static constexpr int kSize = 28;

  static_assert(kSize <= sizeof(True) && sizeof(True) < kSize + alignof(True));
};

// Definition https://crsrc.org/c/v8/src/objects/oddball.tq?l=36&c=1
class TorqueGeneratedFalseAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 28;
  static constexpr int kEndOfWeakFieldsOffset = 28;
  static constexpr int kStartOfStrongFieldsOffset = 28;
  static constexpr int kEndOfStrongFieldsOffset = 28;
  static constexpr int kHeaderSize = 28;
  static constexpr int kSize = 28;

  static_assert(kSize <= sizeof(False) && sizeof(False) < kSize + alignof(False));
};

} // namespace internal
} // namespace v8
