#include "src/objects/megadom-handler.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/objects/megadom-handler.tq?l=7&c=1
class TorqueGeneratedMegaDomHandlerAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 4;
  // https://crsrc.org/c/v8/src/objects/megadom-handler.tq?l=9&c=3
  static constexpr int kAccessorOffset = 4;
  static constexpr int kAccessorOffsetEnd = kAccessorOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/megadom-handler.tq?l=10&c=3
  static constexpr int kContextOffset = kAccessorOffsetEnd + 1;
  static constexpr int kContextOffsetEnd = kContextOffset + kTaggedSize - 1;
  static constexpr int kEndOfWeakFieldsOffset = kContextOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kContextOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kContextOffsetEnd + 1;
  static constexpr int kHeaderSize = kContextOffsetEnd + 1;
  static constexpr int kSize = kContextOffsetEnd + 1;

  static_assert(kAccessorOffset == offsetof(MegaDomHandler, accessor_),
                "Value of MegaDomHandler::kAccessorOffset defined in Torque and offset of field MegaDomHandler::accessor in C++ do not match");
  static_assert(kContextOffset == offsetof(MegaDomHandler, context_),
                "Value of MegaDomHandler::kContextOffset defined in Torque and offset of field MegaDomHandler::context in C++ do not match");
  static_assert(kSize <= sizeof(MegaDomHandler) && sizeof(MegaDomHandler) < kSize + alignof(MegaDomHandler));
};

} // namespace internal
} // namespace v8
