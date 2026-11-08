#include "src/objects/arguments.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/objects/arguments.tq?l=5&c=1
class TorqueGeneratedJSArgumentsObjectAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 12;
  static constexpr int kEndOfWeakFieldsOffset = 12;
  static constexpr int kStartOfStrongFieldsOffset = 12;
  static constexpr int kEndOfStrongFieldsOffset = 12;
  static constexpr int kHeaderSize = 12;

};

// Definition https://crsrc.org/c/v8/src/objects/arguments.tq?l=28&c=1
class TorqueGeneratedSloppyArgumentsElementsAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 8;
  // https://crsrc.org/c/v8/src/objects/arguments.tq?l=30&c=3
  static constexpr int kContextOffset = 8;
  static constexpr int kContextOffsetEnd = kContextOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/arguments.tq?l=31&c=3
  static constexpr int kArgumentsOffset = kContextOffsetEnd + 1;
  static constexpr int kArgumentsOffsetEnd = kArgumentsOffset + kTaggedSize - 1;
  static constexpr int kHeaderSize = kArgumentsOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/objects/arguments.tq?l=32&c=3
  static constexpr int kObjectsOffset = kArgumentsOffsetEnd + 1;
  static constexpr int kObjectsOffsetEnd = kObjectsOffset + 0 - 1;
  static constexpr int kEndOfStrongFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kObjectsOffsetEnd + 1;

  static_assert(kContextOffset == offsetof(SloppyArgumentsElements, context_),
                "Value of SloppyArgumentsElements::kContextOffset defined in Torque and offset of field SloppyArgumentsElements::context in C++ do not match");
  static_assert(kArgumentsOffset == offsetof(SloppyArgumentsElements, arguments_),
                "Value of SloppyArgumentsElements::kArgumentsOffset defined in Torque and offset of field SloppyArgumentsElements::arguments in C++ do not match");
  static_assert(kObjectsOffset == OFFSET_OF_DATA_START(SloppyArgumentsElements),
                "Value of SloppyArgumentsElements::kObjectsOffset defined in Torque and offset of field SloppyArgumentsElements::objects in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/arguments.tq?l=62&c=1
class TorqueGeneratedAliasedArgumentsEntryAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 4;
  // https://crsrc.org/c/v8/src/objects/arguments.tq?l=64&c=3
  static constexpr int kAliasedContextSlotOffset = 4;
  static constexpr int kAliasedContextSlotOffsetEnd = kAliasedContextSlotOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kAliasedContextSlotOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kAliasedContextSlotOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kAliasedContextSlotOffsetEnd + 1;
  static constexpr int kHeaderSize = kAliasedContextSlotOffsetEnd + 1;
  static constexpr int kSize = kAliasedContextSlotOffsetEnd + 1;

  static_assert(kAliasedContextSlotOffset == offsetof(AliasedArgumentsEntry, aliased_context_slot_),
                "Value of AliasedArgumentsEntry::kAliasedContextSlotOffset defined in Torque and offset of field AliasedArgumentsEntry::aliased_context_slot in C++ do not match");
  static_assert(kSize <= sizeof(AliasedArgumentsEntry) && sizeof(AliasedArgumentsEntry) < kSize + alignof(AliasedArgumentsEntry));
};

} // namespace internal
} // namespace v8
