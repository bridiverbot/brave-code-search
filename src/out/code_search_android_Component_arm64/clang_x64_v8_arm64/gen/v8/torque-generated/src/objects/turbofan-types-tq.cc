#include "src/objects/turbofan-types.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=12&c=1
class TorqueGeneratedTurbofanTypeAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 4;
  static constexpr int kEndOfWeakFieldsOffset = 4;
  static constexpr int kStartOfStrongFieldsOffset = 4;
  static constexpr int kEndOfStrongFieldsOffset = 4;
  static constexpr int kHeaderSize = 4;

};

// Definition https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=63&c=1
class TorqueGeneratedTurbofanBitsetTypeAsserts {
  // https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=65&c=3
  static constexpr int kBitsetLowOffset = 4;
  static constexpr int kBitsetLowOffsetEnd = kBitsetLowOffset + kInt32Size - 1;
  // https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=66&c=3
  static constexpr int kBitsetHighOffset = kBitsetLowOffsetEnd + 1;
  static constexpr int kBitsetHighOffsetEnd = kBitsetHighOffset + kInt32Size - 1;
  static constexpr int kStartOfWeakFieldsOffset = kBitsetHighOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kBitsetHighOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kBitsetHighOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kBitsetHighOffsetEnd + 1;
  static constexpr int kHeaderSize = kBitsetHighOffsetEnd + 1;
  static constexpr int kSize = kBitsetHighOffsetEnd + 1;

  static_assert(kBitsetLowOffset == offsetof(TurbofanBitsetType, bitset_low_),
                "Value of TurbofanBitsetType::kBitsetLowOffset defined in Torque and offset of field TurbofanBitsetType::bitset_low in C++ do not match");
  static_assert(kBitsetHighOffset == offsetof(TurbofanBitsetType, bitset_high_),
                "Value of TurbofanBitsetType::kBitsetHighOffset defined in Torque and offset of field TurbofanBitsetType::bitset_high in C++ do not match");
  static_assert(kSize <= sizeof(TurbofanBitsetType) && sizeof(TurbofanBitsetType) < kSize + alignof(TurbofanBitsetType));
};

// Definition https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=69&c=1
class TorqueGeneratedTurbofanUnionTypeAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 4;
  // https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=71&c=3
  static constexpr int kType1Offset = 4;
  static constexpr int kType1OffsetEnd = kType1Offset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=72&c=3
  static constexpr int kType2Offset = kType1OffsetEnd + 1;
  static constexpr int kType2OffsetEnd = kType2Offset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kType2OffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kType2OffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kType2OffsetEnd + 1;
  static constexpr int kHeaderSize = kType2OffsetEnd + 1;
  static constexpr int kSize = kType2OffsetEnd + 1;

  static_assert(kType1Offset == offsetof(TurbofanUnionType, type1_),
                "Value of TurbofanUnionType::kType1Offset defined in Torque and offset of field TurbofanUnionType::type1 in C++ do not match");
  static_assert(kType2Offset == offsetof(TurbofanUnionType, type2_),
                "Value of TurbofanUnionType::kType2Offset defined in Torque and offset of field TurbofanUnionType::type2 in C++ do not match");
  static_assert(kSize <= sizeof(TurbofanUnionType) && sizeof(TurbofanUnionType) < kSize + alignof(TurbofanUnionType));
};

// Definition https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=75&c=1
class TorqueGeneratedTurbofanRangeTypeAsserts {
  // https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=77&c=3
  static constexpr int kMinOffset = 4;
  static constexpr int kMinOffsetEnd = kMinOffset + kDoubleSize - 1;
  // https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=78&c=3
  static constexpr int kMaxOffset = kMinOffsetEnd + 1;
  static constexpr int kMaxOffsetEnd = kMaxOffset + kDoubleSize - 1;
  static constexpr int kStartOfWeakFieldsOffset = kMaxOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kMaxOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kMaxOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kMaxOffsetEnd + 1;
  static constexpr int kHeaderSize = kMaxOffsetEnd + 1;
  static constexpr int kSize = kMaxOffsetEnd + 1;

  static_assert(kMinOffset == offsetof(TurbofanRangeType, min_),
                "Value of TurbofanRangeType::kMinOffset defined in Torque and offset of field TurbofanRangeType::min in C++ do not match");
  static_assert(kMaxOffset == offsetof(TurbofanRangeType, max_),
                "Value of TurbofanRangeType::kMaxOffset defined in Torque and offset of field TurbofanRangeType::max in C++ do not match");
  static_assert(kSize <= sizeof(TurbofanRangeType) && sizeof(TurbofanRangeType) < kSize + alignof(TurbofanRangeType));
};

// Definition https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=81&c=1
class TorqueGeneratedTurbofanHeapConstantTypeAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 4;
  // https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=83&c=3
  static constexpr int kConstantOffset = 4;
  static constexpr int kConstantOffsetEnd = kConstantOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kConstantOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kConstantOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kConstantOffsetEnd + 1;
  static constexpr int kHeaderSize = kConstantOffsetEnd + 1;
  static constexpr int kSize = kConstantOffsetEnd + 1;

  static_assert(kConstantOffset == offsetof(TurbofanHeapConstantType, constant_),
                "Value of TurbofanHeapConstantType::kConstantOffset defined in Torque and offset of field TurbofanHeapConstantType::constant in C++ do not match");
  static_assert(kSize <= sizeof(TurbofanHeapConstantType) && sizeof(TurbofanHeapConstantType) < kSize + alignof(TurbofanHeapConstantType));
};

// Definition https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=86&c=1
class TorqueGeneratedTurbofanOtherNumberConstantTypeAsserts {
  // https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=88&c=3
  static constexpr int kConstantOffset = 4;
  static constexpr int kConstantOffsetEnd = kConstantOffset + kDoubleSize - 1;
  static constexpr int kStartOfWeakFieldsOffset = kConstantOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kConstantOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kConstantOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kConstantOffsetEnd + 1;
  static constexpr int kHeaderSize = kConstantOffsetEnd + 1;
  static constexpr int kSize = kConstantOffsetEnd + 1;

  static_assert(kConstantOffset == offsetof(TurbofanOtherNumberConstantType, constant_),
                "Value of TurbofanOtherNumberConstantType::kConstantOffset defined in Torque and offset of field TurbofanOtherNumberConstantType::constant in C++ do not match");
  static_assert(kSize <= sizeof(TurbofanOtherNumberConstantType) && sizeof(TurbofanOtherNumberConstantType) < kSize + alignof(TurbofanOtherNumberConstantType));
};

} // namespace internal
} // namespace v8
