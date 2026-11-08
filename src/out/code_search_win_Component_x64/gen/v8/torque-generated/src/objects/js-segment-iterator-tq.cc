#include "src/objects/js-segment-iterator.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=12&c=1
class TorqueGeneratedJSSegmentIteratorAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 12;
  // https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=14&c=3
  static constexpr int kIcuIteratorWithTextOffset = 12;
  static constexpr int kIcuIteratorWithTextOffsetEnd = kIcuIteratorWithTextOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=16&c=3
  static constexpr int kRawStringOffset = kIcuIteratorWithTextOffsetEnd + 1;
  static constexpr int kRawStringOffsetEnd = kRawStringOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=17&c=3
  static constexpr int kFlagsOffset = kRawStringOffsetEnd + 1;
  static constexpr int kFlagsOffsetEnd = kFlagsOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kFlagsOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kFlagsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kFlagsOffsetEnd + 1;
  static constexpr int kHeaderSize = kFlagsOffsetEnd + 1;

  static_assert(kIcuIteratorWithTextOffset == offsetof(JSSegmentIterator, icu_iterator_with_text_),
                "Value of JSSegmentIterator::kIcuIteratorWithTextOffset defined in Torque and offset of field JSSegmentIterator::icu_iterator_with_text in C++ do not match");
  static_assert(kRawStringOffset == offsetof(JSSegmentIterator, raw_string_),
                "Value of JSSegmentIterator::kRawStringOffset defined in Torque and offset of field JSSegmentIterator::raw_string in C++ do not match");
  static_assert(kFlagsOffset == offsetof(JSSegmentIterator, flags_),
                "Value of JSSegmentIterator::kFlagsOffset defined in Torque and offset of field JSSegmentIterator::flags in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=20&c=1
class TorqueGeneratedJSSegmentDataObjectAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 12;
  // https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=24&c=3
  static constexpr int kSegmentOffset = 12;
  static constexpr int kSegmentOffsetEnd = kSegmentOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=25&c=3
  static constexpr int kIndexOffset = kSegmentOffsetEnd + 1;
  static constexpr int kIndexOffsetEnd = kIndexOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=26&c=3
  static constexpr int kInputOffset = kIndexOffsetEnd + 1;
  static constexpr int kInputOffsetEnd = kInputOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kInputOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kInputOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kInputOffsetEnd + 1;
  static constexpr int kHeaderSize = kInputOffsetEnd + 1;

  static_assert(kSegmentOffset == offsetof(JSSegmentDataObject, segment_),
                "Value of JSSegmentDataObject::kSegmentOffset defined in Torque and offset of field JSSegmentDataObject::segment in C++ do not match");
  static_assert(kIndexOffset == offsetof(JSSegmentDataObject, index_),
                "Value of JSSegmentDataObject::kIndexOffset defined in Torque and offset of field JSSegmentDataObject::index in C++ do not match");
  static_assert(kInputOffset == offsetof(JSSegmentDataObject, input_),
                "Value of JSSegmentDataObject::kInputOffset defined in Torque and offset of field JSSegmentDataObject::input in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=29&c=1
class TorqueGeneratedJSSegmentDataObjectWithIsWordLikeAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 24;
  // https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=33&c=3
  static constexpr int kIsWordLikeOffset = 24;
  static constexpr int kIsWordLikeOffsetEnd = kIsWordLikeOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kIsWordLikeOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kIsWordLikeOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kIsWordLikeOffsetEnd + 1;
  static constexpr int kHeaderSize = kIsWordLikeOffsetEnd + 1;

  static_assert(kIsWordLikeOffset == offsetof(JSSegmentDataObjectWithIsWordLike, is_word_like_),
                "Value of JSSegmentDataObjectWithIsWordLike::kIsWordLikeOffset defined in Torque and offset of field JSSegmentDataObjectWithIsWordLike::is_word_like in C++ do not match");
};

} // namespace internal
} // namespace v8
