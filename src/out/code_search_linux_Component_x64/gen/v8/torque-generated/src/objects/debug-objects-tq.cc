#include "src/objects/debug-objects.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=5&c=1
class TorqueGeneratedBreakPointAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 4;
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=7&c=3
  static constexpr int kIdOffset = 4;
  static constexpr int kIdOffsetEnd = kIdOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=8&c=3
  static constexpr int kConditionOffset = kIdOffsetEnd + 1;
  static constexpr int kConditionOffsetEnd = kConditionOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kConditionOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kConditionOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kConditionOffsetEnd + 1;
  static constexpr int kHeaderSize = kConditionOffsetEnd + 1;
  static constexpr int kSize = kConditionOffsetEnd + 1;

  static_assert(kIdOffset == offsetof(BreakPoint, id_),
                "Value of BreakPoint::kIdOffset defined in Torque and offset of field BreakPoint::id in C++ do not match");
  static_assert(kConditionOffset == offsetof(BreakPoint, condition_),
                "Value of BreakPoint::kConditionOffset defined in Torque and offset of field BreakPoint::condition in C++ do not match");
  static_assert(kSize <= sizeof(BreakPoint) && sizeof(BreakPoint) < kSize + alignof(BreakPoint));
};

// Definition https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=11&c=1
class TorqueGeneratedBreakPointInfoAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 4;
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=14&c=3
  static constexpr int kSourcePositionOffset = 4;
  static constexpr int kSourcePositionOffsetEnd = kSourcePositionOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=16&c=3
  static constexpr int kBreakPointsOffset = kSourcePositionOffsetEnd + 1;
  static constexpr int kBreakPointsOffsetEnd = kBreakPointsOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kBreakPointsOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kBreakPointsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kBreakPointsOffsetEnd + 1;
  static constexpr int kHeaderSize = kBreakPointsOffsetEnd + 1;
  static constexpr int kSize = kBreakPointsOffsetEnd + 1;

  static_assert(kSourcePositionOffset == offsetof(BreakPointInfo, source_position_),
                "Value of BreakPointInfo::kSourcePositionOffset defined in Torque and offset of field BreakPointInfo::source_position in C++ do not match");
  static_assert(kBreakPointsOffset == offsetof(BreakPointInfo, break_points_),
                "Value of BreakPointInfo::kBreakPointsOffset defined in Torque and offset of field BreakPointInfo::break_points in C++ do not match");
  static_assert(kSize <= sizeof(BreakPointInfo) && sizeof(BreakPointInfo) < kSize + alignof(BreakPointInfo));
};

// Definition https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=37&c=1
class TorqueGeneratedDebugInfoAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 8;
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=39&c=3
  static constexpr int kSharedOffset = 8;
  static constexpr int kSharedOffsetEnd = kSharedOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=41&c=3
  static constexpr int kDebuggerHintsOffset = kSharedOffsetEnd + 1;
  static constexpr int kDebuggerHintsOffsetEnd = kDebuggerHintsOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=43&c=3
  static constexpr int kBreakPointsOffset = kDebuggerHintsOffsetEnd + 1;
  static constexpr int kBreakPointsOffsetEnd = kBreakPointsOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=45&c=36
  static constexpr int kFlagsOffset = kBreakPointsOffsetEnd + 1;
  static constexpr int kFlagsOffsetEnd = kFlagsOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=46&c=3
  static constexpr int kCoverageInfoOffset = kFlagsOffsetEnd + 1;
  static constexpr int kCoverageInfoOffsetEnd = kCoverageInfoOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kCoverageInfoOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kCoverageInfoOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=50&c=3
  static constexpr int kOriginalBytecodeArrayOffset = kCoverageInfoOffsetEnd + 1;
  static constexpr int kOriginalBytecodeArrayOffsetEnd = kOriginalBytecodeArrayOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=54&c=3
  static constexpr int kDebugBytecodeArrayOffset = kOriginalBytecodeArrayOffsetEnd + 1;
  static constexpr int kDebugBytecodeArrayOffsetEnd = kDebugBytecodeArrayOffset + kTaggedSize - 1;
  static constexpr int kEndOfWeakFieldsOffset = kDebugBytecodeArrayOffsetEnd + 1;
  static constexpr int kHeaderSize = kDebugBytecodeArrayOffsetEnd + 1;
  static constexpr int kSize = kDebugBytecodeArrayOffsetEnd + 1;

  static_assert(kSharedOffset == offsetof(DebugInfo, shared_),
                "Value of DebugInfo::kSharedOffset defined in Torque and offset of field DebugInfo::shared in C++ do not match");
  static_assert(kDebuggerHintsOffset == offsetof(DebugInfo, debugger_hints_),
                "Value of DebugInfo::kDebuggerHintsOffset defined in Torque and offset of field DebugInfo::debugger_hints in C++ do not match");
  static_assert(kBreakPointsOffset == offsetof(DebugInfo, break_points_),
                "Value of DebugInfo::kBreakPointsOffset defined in Torque and offset of field DebugInfo::break_points in C++ do not match");
  static_assert(kFlagsOffset == offsetof(DebugInfo, flags_),
                "Value of DebugInfo::kFlagsOffset defined in Torque and offset of field DebugInfo::flags in C++ do not match");
  static_assert(kCoverageInfoOffset == offsetof(DebugInfo, coverage_info_),
                "Value of DebugInfo::kCoverageInfoOffset defined in Torque and offset of field DebugInfo::coverage_info in C++ do not match");
  static_assert(kOriginalBytecodeArrayOffset == offsetof(DebugInfo, original_bytecode_array_),
                "Value of DebugInfo::kOriginalBytecodeArrayOffset defined in Torque and offset of field DebugInfo::original_bytecode_array in C++ do not match");
  static_assert(kDebugBytecodeArrayOffset == offsetof(DebugInfo, debug_bytecode_array_),
                "Value of DebugInfo::kDebugBytecodeArrayOffset defined in Torque and offset of field DebugInfo::debug_bytecode_array in C++ do not match");
  static_assert(kSize <= sizeof(DebugInfo) && sizeof(DebugInfo) < kSize + alignof(DebugInfo));
};

// Definition https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=67&c=1
class TorqueGeneratedCoverageInfoAsserts {
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=69&c=9
  static constexpr int kSlotCountOffset = 4;
  static constexpr int kSlotCountOffsetEnd = kSlotCountOffset + kInt32Size - 1;
  static constexpr int kHeaderSize = kSlotCountOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=70&c=3
  static constexpr int kSlotsOffset = kSlotCountOffsetEnd + 1;
  static constexpr int kSlotsOffsetEnd = kSlotsOffset + 0 - 1;
  static constexpr int kStartOfWeakFieldsOffset = kSlotsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kSlotsOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kSlotsOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kSlotsOffsetEnd + 1;

  static_assert(kSlotCountOffset == offsetof(CoverageInfo, slot_count_),
                "Value of CoverageInfo::kSlotCountOffset defined in Torque and offset of field CoverageInfo::slot_count in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=78&c=1
class TorqueGeneratedStackFrameInfoAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 4;
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=86&c=3
  static constexpr int kSharedOrScriptOffset = 4;
  static constexpr int kSharedOrScriptOffsetEnd = kSharedOrScriptOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=87&c=3
  static constexpr int kFunctionNameOffset = kSharedOrScriptOffsetEnd + 1;
  static constexpr int kFunctionNameOffsetEnd = kFunctionNameOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=88&c=3
  static constexpr int kFlagsOffset = kFunctionNameOffsetEnd + 1;
  static constexpr int kFlagsOffsetEnd = kFlagsOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=89&c=3
  static constexpr int kBytecodeOffsetOrSourcePositionOffset = kFlagsOffsetEnd + 1;
  static constexpr int kBytecodeOffsetOrSourcePositionOffsetEnd = kBytecodeOffsetOrSourcePositionOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kBytecodeOffsetOrSourcePositionOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kBytecodeOffsetOrSourcePositionOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kBytecodeOffsetOrSourcePositionOffsetEnd + 1;
  static constexpr int kHeaderSize = kBytecodeOffsetOrSourcePositionOffsetEnd + 1;
  static constexpr int kSize = kBytecodeOffsetOrSourcePositionOffsetEnd + 1;

  static_assert(kSharedOrScriptOffset == offsetof(StackFrameInfo, shared_or_script_),
                "Value of StackFrameInfo::kSharedOrScriptOffset defined in Torque and offset of field StackFrameInfo::shared_or_script in C++ do not match");
  static_assert(kFunctionNameOffset == offsetof(StackFrameInfo, function_name_),
                "Value of StackFrameInfo::kFunctionNameOffset defined in Torque and offset of field StackFrameInfo::function_name in C++ do not match");
  static_assert(kFlagsOffset == offsetof(StackFrameInfo, flags_),
                "Value of StackFrameInfo::kFlagsOffset defined in Torque and offset of field StackFrameInfo::flags in C++ do not match");
  static_assert(kBytecodeOffsetOrSourcePositionOffset == offsetof(StackFrameInfo, bytecode_offset_or_source_position_),
                "Value of StackFrameInfo::kBytecodeOffsetOrSourcePositionOffset defined in Torque and offset of field StackFrameInfo::bytecode_offset_or_source_position in C++ do not match");
  static_assert(kSize <= sizeof(StackFrameInfo) && sizeof(StackFrameInfo) < kSize + alignof(StackFrameInfo));
};

// Definition https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=92&c=1
class TorqueGeneratedStackTraceInfoAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 4;
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=95&c=3
  static constexpr int kIdOffset = 4;
  static constexpr int kIdOffsetEnd = kIdOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=97&c=3
  static constexpr int kFramesOffset = kIdOffsetEnd + 1;
  static constexpr int kFramesOffsetEnd = kFramesOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kFramesOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kFramesOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kFramesOffsetEnd + 1;
  static constexpr int kHeaderSize = kFramesOffsetEnd + 1;
  static constexpr int kSize = kFramesOffsetEnd + 1;

  static_assert(kIdOffset == offsetof(StackTraceInfo, id_),
                "Value of StackTraceInfo::kIdOffset defined in Torque and offset of field StackTraceInfo::id in C++ do not match");
  static_assert(kFramesOffset == offsetof(StackTraceInfo, frames_),
                "Value of StackTraceInfo::kFramesOffset defined in Torque and offset of field StackTraceInfo::frames in C++ do not match");
  static_assert(kSize <= sizeof(StackTraceInfo) && sizeof(StackTraceInfo) < kSize + alignof(StackTraceInfo));
};

// Definition https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=113&c=1
class TorqueGeneratedErrorStackDataAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 4;
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=118&c=3
  static constexpr int kRawDataForCallSiteInfosOrFormattedStackOffset = 4;
  static constexpr int kRawDataForCallSiteInfosOrFormattedStackOffsetEnd = kRawDataForCallSiteInfosOrFormattedStackOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=120&c=3
  static constexpr int kStackTraceOffset = kRawDataForCallSiteInfosOrFormattedStackOffsetEnd + 1;
  static constexpr int kStackTraceOffsetEnd = kStackTraceOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kStackTraceOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kStackTraceOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kStackTraceOffsetEnd + 1;
  static constexpr int kHeaderSize = kStackTraceOffsetEnd + 1;
  static constexpr int kSize = kStackTraceOffsetEnd + 1;

  static_assert(kRawDataForCallSiteInfosOrFormattedStackOffset == offsetof(ErrorStackData, raw_data_for_call_site_infos_or_formatted_stack_),
                "Value of ErrorStackData::kRawDataForCallSiteInfosOrFormattedStackOffset defined in Torque and offset of field ErrorStackData::raw_data_for_call_site_infos_or_formatted_stack in C++ do not match");
  static_assert(kStackTraceOffset == offsetof(ErrorStackData, stack_trace_),
                "Value of ErrorStackData::kStackTraceOffset defined in Torque and offset of field ErrorStackData::stack_trace in C++ do not match");
  static_assert(kSize <= sizeof(ErrorStackData) && sizeof(ErrorStackData) < kSize + alignof(ErrorStackData));
};

// Definition https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=132&c=1
class TorqueGeneratedDebugScriptScopeInfoAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 4;
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=134&c=3
  static constexpr int kNumericDataOffset = 4;
  static constexpr int kNumericDataOffsetEnd = kNumericDataOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=135&c=3
  static constexpr int kStringTableOffset = kNumericDataOffsetEnd + 1;
  static constexpr int kStringTableOffsetEnd = kStringTableOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kStringTableOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kStringTableOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kStringTableOffsetEnd + 1;
  static constexpr int kHeaderSize = kStringTableOffsetEnd + 1;
  static constexpr int kSize = kStringTableOffsetEnd + 1;

  static_assert(kNumericDataOffset == offsetof(DebugScriptScopeInfo, numeric_data_),
                "Value of DebugScriptScopeInfo::kNumericDataOffset defined in Torque and offset of field DebugScriptScopeInfo::numeric_data in C++ do not match");
  static_assert(kStringTableOffset == offsetof(DebugScriptScopeInfo, string_table_),
                "Value of DebugScriptScopeInfo::kStringTableOffset defined in Torque and offset of field DebugScriptScopeInfo::string_table in C++ do not match");
  static_assert(kSize <= sizeof(DebugScriptScopeInfo) && sizeof(DebugScriptScopeInfo) < kSize + alignof(DebugScriptScopeInfo));
};

} // namespace internal
} // namespace v8
