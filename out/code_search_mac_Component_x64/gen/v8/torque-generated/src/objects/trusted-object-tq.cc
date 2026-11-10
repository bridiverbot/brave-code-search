#include "src/objects/trusted-object.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/objects/trusted-object.tq?l=5&c=1
class TorqueGeneratedTrustedObjectAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 4;
  static constexpr int kEndOfWeakFieldsOffset = 4;
  static constexpr int kStartOfStrongFieldsOffset = 4;
  static constexpr int kEndOfStrongFieldsOffset = 4;
  static constexpr int kHeaderSize = 4;

};

// Definition https://crsrc.org/c/v8/src/objects/trusted-object.tq?l=9&c=1
class TorqueGeneratedExposedTrustedObjectAsserts {
  // https://crsrc.org/c/v8/src/objects/trusted-object.tq?l=12&c=26
  static constexpr int kSelfTrustedPointerOffset = 4;
  static constexpr int kSelfTrustedPointerOffsetEnd = kSelfTrustedPointerOffset + kTrustedPointerSize - 1;
  static constexpr int kStartOfWeakFieldsOffset = kSelfTrustedPointerOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kSelfTrustedPointerOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kSelfTrustedPointerOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kSelfTrustedPointerOffsetEnd + 1;
  static constexpr int kHeaderSize = kSelfTrustedPointerOffsetEnd + 1;

  static_assert(kSelfTrustedPointerOffset == offsetof(ExposedTrustedObject, self_trusted_pointer_),
                "Value of ExposedTrustedObject::kSelfTrustedPointerOffset defined in Torque and offset of field ExposedTrustedObject::self_trusted_pointer in C++ do not match");
};

} // namespace internal
} // namespace v8
