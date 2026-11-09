#include "src/objects/js-interceptor-map.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/objects/js-interceptor-map.tq?l=7&c=1
class TorqueGeneratedJSInterceptorMapAsserts {
  // https://crsrc.org/c/v8/src/objects/js-interceptor-map.tq?l=11&c=3
  static constexpr int kFlagsOffset = 41;
  static constexpr int kFlagsOffsetEnd = kFlagsOffset + kUInt8Size - 1;
  static constexpr int kHeaderSize = kFlagsOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/objects/js-interceptor-map.tq?l=12&c=31
  static constexpr int kExtendedPaddingOffset = kFlagsOffsetEnd + 1;
  static constexpr int kExtendedPaddingOffsetEnd = kExtendedPaddingOffset + (2 * kUInt8Size) - 1;
  static constexpr int kStartOfStrongFieldsOffset = kExtendedPaddingOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/objects/js-interceptor-map.tq?l=14&c=3
  static constexpr int kNamedInterceptorOffset = kExtendedPaddingOffsetEnd + 1;
  static constexpr int kNamedInterceptorOffsetEnd = kNamedInterceptorOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/js-interceptor-map.tq?l=15&c=3
  static constexpr int kIndexedInterceptorOffset = kNamedInterceptorOffsetEnd + 1;
  static constexpr int kIndexedInterceptorOffsetEnd = kIndexedInterceptorOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/js-interceptor-map.tq?l=21&c=3
  static constexpr int kFastCaseValidityCellOffset = kIndexedInterceptorOffsetEnd + 1;
  static constexpr int kFastCaseValidityCellOffsetEnd = kFastCaseValidityCellOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kFastCaseValidityCellOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kFastCaseValidityCellOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kFastCaseValidityCellOffsetEnd + 1;
  static constexpr int kSize = kFastCaseValidityCellOffsetEnd + 1;

  static_assert(kFlagsOffset == offsetof(JSInterceptorMap, flags_),
                "Value of JSInterceptorMap::kFlagsOffset defined in Torque and offset of field JSInterceptorMap::flags in C++ do not match");
  static_assert(kExtendedPaddingOffset == offsetof(JSInterceptorMap, extended_padding_),
                "Value of JSInterceptorMap::kExtendedPaddingOffset defined in Torque and offset of field JSInterceptorMap::extended_padding in C++ do not match");
  static_assert(kNamedInterceptorOffset == offsetof(JSInterceptorMap, named_interceptor_),
                "Value of JSInterceptorMap::kNamedInterceptorOffset defined in Torque and offset of field JSInterceptorMap::named_interceptor in C++ do not match");
  static_assert(kIndexedInterceptorOffset == offsetof(JSInterceptorMap, indexed_interceptor_),
                "Value of JSInterceptorMap::kIndexedInterceptorOffset defined in Torque and offset of field JSInterceptorMap::indexed_interceptor in C++ do not match");
  static_assert(kFastCaseValidityCellOffset == offsetof(JSInterceptorMap, fast_case_validity_cell_),
                "Value of JSInterceptorMap::kFastCaseValidityCellOffset defined in Torque and offset of field JSInterceptorMap::fast_case_validity_cell in C++ do not match");
  static_assert(kSize <= sizeof(JSInterceptorMap) && sizeof(JSInterceptorMap) < kSize + alignof(JSInterceptorMap));
};

} // namespace internal
} // namespace v8
