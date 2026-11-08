#include "src/objects/string.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/objects/string.tq?l=7&c=1
class TorqueGeneratedStringAsserts {
  // https://crsrc.org/c/v8/src/objects/string.tq?l=51&c=9
  static constexpr int kLengthOffset = 8;
  static constexpr int kLengthOffsetEnd = kLengthOffset + kInt32Size - 1;
  static constexpr int kStartOfWeakFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kHeaderSize = kLengthOffsetEnd + 1;

  static_assert(kLengthOffset == offsetof(String, length_),
                "Value of String::kLengthOffset defined in Torque and offset of field String::length in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/string.tq?l=70&c=1
class TorqueGeneratedConsStringAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 12;
  // https://crsrc.org/c/v8/src/objects/string.tq?l=78&c=3
  static constexpr int kFirstOffset = 12;
  static constexpr int kFirstOffsetEnd = kFirstOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/string.tq?l=79&c=3
  static constexpr int kSecondOffset = kFirstOffsetEnd + 1;
  static constexpr int kSecondOffsetEnd = kSecondOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kSecondOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kSecondOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kSecondOffsetEnd + 1;
  static constexpr int kHeaderSize = kSecondOffsetEnd + 1;
  static constexpr int kSize = kSecondOffsetEnd + 1;

  static_assert(kFirstOffset == offsetof(ConsString, first_),
                "Value of ConsString::kFirstOffset defined in Torque and offset of field ConsString::first in C++ do not match");
  static_assert(kSecondOffset == offsetof(ConsString, second_),
                "Value of ConsString::kSecondOffset defined in Torque and offset of field ConsString::second in C++ do not match");
  static_assert(kSize <= sizeof(ConsString) && sizeof(ConsString) < kSize + alignof(ConsString));
};

// Definition https://crsrc.org/c/v8/src/objects/string.tq?l=82&c=1
class TorqueGeneratedExternalStringAsserts {
  // https://crsrc.org/c/v8/src/objects/string.tq?l=86&c=3
  static constexpr int kResourceOffset = 12;
  static constexpr int kResourceOffsetEnd = kResourceOffset + kExternalPointerSlotSize - 1;
  // https://crsrc.org/c/v8/src/objects/string.tq?l=88&c=3
  static constexpr int kResourceDataOffset = kResourceOffsetEnd + 1;
  static constexpr int kResourceDataOffsetEnd = kResourceDataOffset + kExternalPointerSlotSize - 1;
  static constexpr int kStartOfWeakFieldsOffset = kResourceDataOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kResourceDataOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kResourceDataOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kResourceDataOffsetEnd + 1;
  static constexpr int kHeaderSize = kResourceDataOffsetEnd + 1;

  static_assert(kResourceOffset == offsetof(ExternalString, resource_),
                "Value of ExternalString::kResourceOffset defined in Torque and offset of field ExternalString::resource in C++ do not match");
  static_assert(kResourceDataOffset == offsetof(ExternalString, resource_data_),
                "Value of ExternalString::kResourceDataOffset defined in Torque and offset of field ExternalString::resource_data in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/string.tq?l=105&c=1
class TorqueGeneratedExternalOneByteStringAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 20;
  static constexpr int kEndOfWeakFieldsOffset = 20;
  static constexpr int kStartOfStrongFieldsOffset = 20;
  static constexpr int kEndOfStrongFieldsOffset = 20;
  static constexpr int kHeaderSize = 20;
  static constexpr int kSize = 20;

  static_assert(kSize <= sizeof(ExternalOneByteString) && sizeof(ExternalOneByteString) < kSize + alignof(ExternalOneByteString));
};

// Definition https://crsrc.org/c/v8/src/objects/string.tq?l=117&c=1
class TorqueGeneratedExternalTwoByteStringAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 20;
  static constexpr int kEndOfWeakFieldsOffset = 20;
  static constexpr int kStartOfStrongFieldsOffset = 20;
  static constexpr int kEndOfStrongFieldsOffset = 20;
  static constexpr int kHeaderSize = 20;
  static constexpr int kSize = 20;

  static_assert(kSize <= sizeof(ExternalTwoByteString) && sizeof(ExternalTwoByteString) < kSize + alignof(ExternalTwoByteString));
};

// Definition https://crsrc.org/c/v8/src/objects/string.tq?l=129&c=1
class TorqueGeneratedInternalizedStringAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 12;
  static constexpr int kEndOfWeakFieldsOffset = 12;
  static constexpr int kStartOfStrongFieldsOffset = 12;
  static constexpr int kEndOfStrongFieldsOffset = 12;
  static constexpr int kHeaderSize = 12;
  static constexpr int kSize = 12;

  static_assert(kSize <= sizeof(InternalizedString) && sizeof(InternalizedString) < kSize + alignof(InternalizedString));
};

// Definition https://crsrc.org/c/v8/src/objects/string.tq?l=133&c=1
class TorqueGeneratedSeqStringAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 12;
  static constexpr int kEndOfWeakFieldsOffset = 12;
  static constexpr int kStartOfStrongFieldsOffset = 12;
  static constexpr int kEndOfStrongFieldsOffset = 12;
  static constexpr int kHeaderSize = 12;

};

// Definition https://crsrc.org/c/v8/src/objects/string.tq?l=138&c=1
class TorqueGeneratedSeqOneByteStringAsserts {
  static constexpr int kHeaderSize = 12;
  // https://crsrc.org/c/v8/src/objects/string.tq?l=141&c=9
  static constexpr int kCharsOffset = 12;
  static constexpr int kCharsOffsetEnd = kCharsOffset + 0 - 1;
  static constexpr int kStartOfWeakFieldsOffset = kCharsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kCharsOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kCharsOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kCharsOffsetEnd + 1;

  static_assert(kCharsOffset == OFFSET_OF_DATA_START(SeqOneByteString),
                "Value of SeqOneByteString::kCharsOffset defined in Torque and offset of field SeqOneByteString::chars in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/string.tq?l=144&c=1
class TorqueGeneratedSeqTwoByteStringAsserts {
  static constexpr int kHeaderSize = 12;
  // https://crsrc.org/c/v8/src/objects/string.tq?l=147&c=9
  static constexpr int kCharsOffset = 12;
  static constexpr int kCharsOffsetEnd = kCharsOffset + 0 - 1;
  static constexpr int kStartOfWeakFieldsOffset = kCharsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kCharsOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kCharsOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kCharsOffsetEnd + 1;

  static_assert(kCharsOffset == OFFSET_OF_DATA_START(SeqTwoByteString),
                "Value of SeqTwoByteString::kCharsOffset defined in Torque and offset of field SeqTwoByteString::chars in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/string.tq?l=150&c=1
class TorqueGeneratedSlicedStringAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 12;
  // https://crsrc.org/c/v8/src/objects/string.tq?l=153&c=3
  static constexpr int kParentOffset = 12;
  static constexpr int kParentOffsetEnd = kParentOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/string.tq?l=154&c=3
  static constexpr int kOffsetOffset = kParentOffsetEnd + 1;
  static constexpr int kOffsetOffsetEnd = kOffsetOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kOffsetOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kOffsetOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kOffsetOffsetEnd + 1;
  static constexpr int kHeaderSize = kOffsetOffsetEnd + 1;
  static constexpr int kSize = kOffsetOffsetEnd + 1;

  static_assert(kParentOffset == offsetof(SlicedString, parent_),
                "Value of SlicedString::kParentOffset defined in Torque and offset of field SlicedString::parent in C++ do not match");
  static_assert(kOffsetOffset == offsetof(SlicedString, offset_),
                "Value of SlicedString::kOffsetOffset defined in Torque and offset of field SlicedString::offset in C++ do not match");
  static_assert(kSize <= sizeof(SlicedString) && sizeof(SlicedString) < kSize + alignof(SlicedString));
};

// Definition https://crsrc.org/c/v8/src/objects/string.tq?l=157&c=1
class TorqueGeneratedThinStringAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 12;
  // https://crsrc.org/c/v8/src/objects/string.tq?l=160&c=3
  static constexpr int kActualOffset = 12;
  static constexpr int kActualOffsetEnd = kActualOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kActualOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kActualOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kActualOffsetEnd + 1;
  static constexpr int kHeaderSize = kActualOffsetEnd + 1;
  static constexpr int kSize = kActualOffsetEnd + 1;

  static_assert(kActualOffset == offsetof(ThinString, actual_),
                "Value of ThinString::kActualOffset defined in Torque and offset of field ThinString::actual in C++ do not match");
  static_assert(kSize <= sizeof(ThinString) && sizeof(ThinString) < kSize + alignof(ThinString));
};

} // namespace internal
} // namespace v8
