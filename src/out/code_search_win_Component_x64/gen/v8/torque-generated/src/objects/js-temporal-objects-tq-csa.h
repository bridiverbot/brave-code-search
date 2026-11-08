#ifndef V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_JS_TEMPORAL_OBJECTS_TQ_CSA_H_
#define V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_JS_TEMPORAL_OBJECTS_TQ_CSA_H_

#include "src/builtins/torque-csa-header-includes.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=7&c=1
TNode<JSTemporalDuration> Cast_JSTemporalDuration_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=12&c=1
TNode<JSTemporalInstant> Cast_JSTemporalInstant_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=17&c=1
TNode<JSTemporalPlainDateTime> Cast_JSTemporalPlainDateTime_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=22&c=1
TNode<JSTemporalPlainDate> Cast_JSTemporalPlainDate_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=27&c=1
TNode<JSTemporalPlainMonthDay> Cast_JSTemporalPlainMonthDay_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=32&c=1
TNode<JSTemporalPlainTime> Cast_JSTemporalPlainTime_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=37&c=1
TNode<JSTemporalPlainYearMonth> Cast_JSTemporalPlainYearMonth_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=42&c=1
TNode<JSTemporalZonedDateTime> Cast_JSTemporalZonedDateTime_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=9&c=3
TNode<CppGCManagedBase> LoadJSTemporalDurationDuration_0(compiler::CodeAssemblerState* state_, TNode<JSTemporalDuration> p_o);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=9&c=3
void StoreJSTemporalDurationDuration_0(compiler::CodeAssemblerState* state_, TNode<JSTemporalDuration> p_o, TNode<CppGCManagedBase> p_v);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=14&c=3
TNode<CppGCManagedBase> LoadJSTemporalInstantInstant_0(compiler::CodeAssemblerState* state_, TNode<JSTemporalInstant> p_o);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=14&c=3
void StoreJSTemporalInstantInstant_0(compiler::CodeAssemblerState* state_, TNode<JSTemporalInstant> p_o, TNode<CppGCManagedBase> p_v);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=19&c=3
TNode<CppGCManagedBase> LoadJSTemporalPlainDateTimeDateTime_0(compiler::CodeAssemblerState* state_, TNode<JSTemporalPlainDateTime> p_o);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=19&c=3
void StoreJSTemporalPlainDateTimeDateTime_0(compiler::CodeAssemblerState* state_, TNode<JSTemporalPlainDateTime> p_o, TNode<CppGCManagedBase> p_v);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=24&c=3
TNode<CppGCManagedBase> LoadJSTemporalPlainDateDate_0(compiler::CodeAssemblerState* state_, TNode<JSTemporalPlainDate> p_o);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=24&c=3
void StoreJSTemporalPlainDateDate_0(compiler::CodeAssemblerState* state_, TNode<JSTemporalPlainDate> p_o, TNode<CppGCManagedBase> p_v);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=29&c=3
TNode<CppGCManagedBase> LoadJSTemporalPlainMonthDayMonthDay_0(compiler::CodeAssemblerState* state_, TNode<JSTemporalPlainMonthDay> p_o);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=29&c=3
void StoreJSTemporalPlainMonthDayMonthDay_0(compiler::CodeAssemblerState* state_, TNode<JSTemporalPlainMonthDay> p_o, TNode<CppGCManagedBase> p_v);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=34&c=3
TNode<CppGCManagedBase> LoadJSTemporalPlainTimeTime_0(compiler::CodeAssemblerState* state_, TNode<JSTemporalPlainTime> p_o);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=34&c=3
void StoreJSTemporalPlainTimeTime_0(compiler::CodeAssemblerState* state_, TNode<JSTemporalPlainTime> p_o, TNode<CppGCManagedBase> p_v);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=39&c=3
TNode<CppGCManagedBase> LoadJSTemporalPlainYearMonthYearMonth_0(compiler::CodeAssemblerState* state_, TNode<JSTemporalPlainYearMonth> p_o);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=39&c=3
void StoreJSTemporalPlainYearMonthYearMonth_0(compiler::CodeAssemblerState* state_, TNode<JSTemporalPlainYearMonth> p_o, TNode<CppGCManagedBase> p_v);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=44&c=3
TNode<CppGCManagedBase> LoadJSTemporalZonedDateTimeZonedDateTime_0(compiler::CodeAssemblerState* state_, TNode<JSTemporalZonedDateTime> p_o);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=44&c=3
void StoreJSTemporalZonedDateTimeZonedDateTime_0(compiler::CodeAssemblerState* state_, TNode<JSTemporalZonedDateTime> p_o, TNode<CppGCManagedBase> p_v);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=7&c=1
TNode<JSTemporalDuration> DownCastForTorqueClass_JSTemporalDuration_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=12&c=1
TNode<JSTemporalInstant> DownCastForTorqueClass_JSTemporalInstant_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=17&c=1
TNode<JSTemporalPlainDateTime> DownCastForTorqueClass_JSTemporalPlainDateTime_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=22&c=1
TNode<JSTemporalPlainDate> DownCastForTorqueClass_JSTemporalPlainDate_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=27&c=1
TNode<JSTemporalPlainMonthDay> DownCastForTorqueClass_JSTemporalPlainMonthDay_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=32&c=1
TNode<JSTemporalPlainTime> DownCastForTorqueClass_JSTemporalPlainTime_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=37&c=1
TNode<JSTemporalPlainYearMonth> DownCastForTorqueClass_JSTemporalPlainYearMonth_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=42&c=1
TNode<JSTemporalZonedDateTime> DownCastForTorqueClass_JSTemporalZonedDateTime_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

} // namespace internal
} // namespace v8

#endif // V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_JS_TEMPORAL_OBJECTS_TQ_CSA_H_
