#include "src/objects/js-plural-rules.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/objects/js-plural-rules.tq?l=13&c=1
class TorqueGeneratedJSPluralRulesAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 12;
  // https://crsrc.org/c/v8/src/objects/js-plural-rules.tq?l=15&c=3
  static constexpr int kLocaleOffset = 12;
  static constexpr int kLocaleOffsetEnd = kLocaleOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/js-plural-rules.tq?l=16&c=3
  static constexpr int kFlagsOffset = kLocaleOffsetEnd + 1;
  static constexpr int kFlagsOffsetEnd = kFlagsOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/js-plural-rules.tq?l=17&c=3
  static constexpr int kInternalOffset = kFlagsOffsetEnd + 1;
  static constexpr int kInternalOffsetEnd = kInternalOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kInternalOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kInternalOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kInternalOffsetEnd + 1;
  static constexpr int kHeaderSize = kInternalOffsetEnd + 1;

  static_assert(kLocaleOffset == offsetof(JSPluralRules, locale_),
                "Value of JSPluralRules::kLocaleOffset defined in Torque and offset of field JSPluralRules::locale in C++ do not match");
  static_assert(kFlagsOffset == offsetof(JSPluralRules, flags_),
                "Value of JSPluralRules::kFlagsOffset defined in Torque and offset of field JSPluralRules::flags in C++ do not match");
  static_assert(kInternalOffset == offsetof(JSPluralRules, internal_),
                "Value of JSPluralRules::kInternalOffset defined in Torque and offset of field JSPluralRules::internal in C++ do not match");
};

} // namespace internal
} // namespace v8
