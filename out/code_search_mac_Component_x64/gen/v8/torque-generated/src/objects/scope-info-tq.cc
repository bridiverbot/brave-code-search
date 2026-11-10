#include "src/objects/scope-info.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/objects/scope-info.tq?l=119&c=1
class TorqueGeneratedScopeInfoAsserts {
  // https://crsrc.org/c/v8/src/objects/scope-info.tq?l=121&c=42
  static constexpr int kFlagsOffset = 4;
  static constexpr int kFlagsOffsetEnd = kFlagsOffset + kInt32Size - 1;
  static constexpr int kStartOfStrongFieldsOffset = kFlagsOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/objects/scope-info.tq?l=126&c=3
  static constexpr int kParameterCountOffset = kFlagsOffsetEnd + 1;
  static constexpr int kParameterCountOffsetEnd = kParameterCountOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/scope-info.tq?l=130&c=9
  static constexpr int kContextLocalCountOffset = kParameterCountOffsetEnd + 1;
  static constexpr int kContextLocalCountOffsetEnd = kContextLocalCountOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/scope-info.tq?l=133&c=3
  static constexpr int kPositionInfoOffset = kContextLocalCountOffsetEnd + 1;
  static constexpr int kPositionInfoOffsetEnd = kPositionInfoOffset + 8 - 1;
  static constexpr int kEndOfStrongFieldsOffset = kPositionInfoOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kPositionInfoOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kPositionInfoOffsetEnd + 1;
  static constexpr int kHeaderSize = kPositionInfoOffsetEnd + 1;
  static constexpr int kSize = kPositionInfoOffsetEnd + 1;

  static_assert(kFlagsOffset == offsetof(ScopeInfo, flags_),
                "Value of ScopeInfo::kFlagsOffset defined in Torque and offset of field ScopeInfo::flags in C++ do not match");
  static_assert(kParameterCountOffset == offsetof(ScopeInfo, parameter_count_),
                "Value of ScopeInfo::kParameterCountOffset defined in Torque and offset of field ScopeInfo::parameter_count in C++ do not match");
  static_assert(kContextLocalCountOffset == offsetof(ScopeInfo, context_local_count_),
                "Value of ScopeInfo::kContextLocalCountOffset defined in Torque and offset of field ScopeInfo::context_local_count in C++ do not match");
  static_assert(kSize <= sizeof(ScopeInfo) && sizeof(ScopeInfo) < kSize + alignof(ScopeInfo));
};

} // namespace internal
} // namespace v8
