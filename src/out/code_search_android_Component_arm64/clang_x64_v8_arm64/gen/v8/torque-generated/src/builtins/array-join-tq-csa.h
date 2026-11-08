#ifndef V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_ARRAY_JOIN_TQ_CSA_H_
#define V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_ARRAY_JOIN_TQ_CSA_H_

#include "src/builtins/torque-csa-header-includes.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=12&c=1
int31_t kMaxBufferChunkSize_0(compiler::CodeAssemblerState* state_);
// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=108&c=1
TNode<BoolT> CannotUseSameArrayAccessor_JSArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<BuiltinPtr> p_loadFn, TNode<JSReceiver> p_receiver, TNode<Map> p_originalMap, TNode<Number> p_originalLen);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=120&c=1
TNode<BoolT> CannotUseSameArrayAccessor_JSTypedArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<BuiltinPtr> p__loadFn, TNode<JSReceiver> p_receiver, TNode<Map> p__initialMap, TNode<Number> p__initialLen);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=142&c=1
TNode<IntPtrT> AddStringLength_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<IntPtrT> p_lenA, TNode<IntPtrT> p_lenB);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=301&c=1
TorqueStructBuffer_0 NewBuffer_0(compiler::CodeAssemblerState* state_, TNode<UintPtrT> p_len, TNode<String> p_sep);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=318&c=1
TNode<String> BufferJoin_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TorqueStructBuffer_0 p_buffer, TNode<String> p_sep);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=352&c=1
TNode<String> FastArrayJoin_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, ElementsKind p_kind, TNode<JSArray> p_array, TNode<String> p_sep, TNode<Smi> p_length, compiler::CodeAssemblerLabel* label_Bailout);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=554&c=1
TNode<JSAny> ArrayJoin_JSArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, bool p_useToLocaleString, TNode<JSReceiver> p_receiver, TNode<String> p_sep, TNode<Number> p_lenNumber, TNode<JSAny> p_locales, TNode<JSAny> p_options);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=606&c=1
TNode<JSAny> ArrayJoin_JSTypedArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, bool p_useToLocaleString, TNode<JSReceiver> p_receiver, TNode<String> p_sep, TNode<Number> p_lenNumber, TNode<JSAny> p_locales, TNode<JSAny> p_options);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=682&c=1
TNode<FixedArray> LoadJoinStack_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, compiler::CodeAssemblerLabel* label_IfUninitialized);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=694&c=1
void SetJoinStack_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<FixedArray> p_stack);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=727&c=1
TNode<BoolT> JoinStackPushInline_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSReceiver> p_receiver);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=772&c=1
void JoinStackPopInline_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSReceiver> p_receiver);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=931&c=1
TNode<String> ArrayPrototypeToString_Inline_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSArray> p_array);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=28&c=34
TNode<NumberDictionary> UnsafeCast_NumberDictionary_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=44&c=46
TNode<JSAny> UnsafeCast_JSAny_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=123&c=36
TNode<JSTypedArray> UnsafeCast_JSTypedArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=329&c=7
TNode<String> Cast_String_1(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=368&c=17
TNode<Int32T> Convert_int32_constexpr_int31_0(compiler::CodeAssemblerState* state_, int31_t p_i);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=602&c=10
TNode<String> ArrayJoinImpl_JSArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSReceiver> p_receiver, TNode<String> p_sep, TNode<Number> p_lengthNumber, bool p_useToLocaleString, TNode<JSAny> p_locales, TNode<JSAny> p_options, TNode<BuiltinPtr> p_initialLoadFn);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=671&c=10
TNode<String> ArrayJoinImpl_JSTypedArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSReceiver> p_receiver, TNode<String> p_sep, TNode<Number> p_lengthNumber, bool p_useToLocaleString, TNode<JSAny> p_locales, TNode<JSAny> p_options, TNode<BuiltinPtr> p_initialLoadFn);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=684&c=16
TorqueStructReference_FixedArray_OR_Undefined_0 NativeContextSlot_Context_FixedArray_OR_Undefined_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<IntPtrT> p_index);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=720&c=7
TNode<FixedArray> StoreAndGrowFixedArray_JSReceiver_0(compiler::CodeAssemblerState* state_, TNode<FixedArray> p_fixedArray, TNode<IntPtrT> p_index, TNode<JSReceiver> p_element);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=924&c=10
TNode<JSAny> CycleProtectedArrayJoin_JSArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, bool p_useToLocaleString, TNode<JSReceiver> p_o, TNode<Number> p_len, TNode<String> p_sep, TNode<JSAny> p_locales, TNode<JSAny> p_options);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=1011&c=10
TNode<JSAny> CycleProtectedArrayJoin_JSTypedArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, bool p_useToLocaleString, TNode<JSReceiver> p_o, TNode<Number> p_len, TNode<String> p_sep, TNode<JSAny> p_locales, TNode<JSAny> p_options);

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=820&c=38
TNode<UintPtrT> Convert_uintptr_constexpr_int31_0(compiler::CodeAssemblerState* state_, int31_t p_i);

} // namespace internal
} // namespace v8

#endif // V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_ARRAY_JOIN_TQ_CSA_H_
