#ifndef V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_ARRAY_LASTINDEXOF_TQ_CSA_H_
#define V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_ARRAY_LASTINDEXOF_TQ_CSA_H_

#include "src/builtins/torque-csa-header-includes.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/builtins/array-lastindexof.tq?l=6&c=1
TNode<Smi> ClampLastIndexOfFrom_0(compiler::CodeAssemblerState* state_, TNode<Smi> p_from, TNode<Smi> p_elementsLen);

// https://crsrc.org/c/v8/src/builtins/array-lastindexof.tq?l=17&c=1
TNode<Smi> LastIndexOfNumberInFixedArray_0(compiler::CodeAssemblerState* state_, TNode<FixedArray> p_elements, TNode<Smi> p_from, TNode<Number> p_search);

// https://crsrc.org/c/v8/src/builtins/array-lastindexof.tq?l=39&c=1
TNode<Smi> LastIndexOfAnyInFixedArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<FixedArray> p_elements, TNode<Smi> p_from, TNode<JSAny> p_searchElement);

// https://crsrc.org/c/v8/src/builtins/array-lastindexof.tq?l=59&c=1
TNode<Smi> FastArrayLastIndexOfFixedArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSArray> p_array, TNode<Smi> p_from, TNode<JSAny> p_searchElement);

// https://crsrc.org/c/v8/src/builtins/array-lastindexof.tq?l=76&c=1
TNode<Smi> LastIndexOfDoubleValue_0(compiler::CodeAssemblerState* state_, TNode<FixedDoubleArray> p_elements, TNode<Smi> p_from, TNode<Float64T> p_searchNum);

// https://crsrc.org/c/v8/src/builtins/array-lastindexof.tq?l=94&c=1
TNode<Smi> LastIndexOfUndefinedInDoubles_0(compiler::CodeAssemblerState* state_, TNode<FixedDoubleArray> p_elements, TNode<Smi> p_from);

// https://crsrc.org/c/v8/src/builtins/array-lastindexof.tq?l=110&c=1
TNode<Smi> FastArrayLastIndexOfDoubles_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSArray> p_array, TNode<Smi> p_from, TNode<JSAny> p_searchElement);

// https://crsrc.org/c/v8/src/builtins/array-lastindexof.tq?l=133&c=1
TNode<Number> GetFromIndex_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Number> p_length, TorqueStructArguments p_arguments);

// https://crsrc.org/c/v8/src/builtins/array-lastindexof.tq?l=153&c=1
TNode<JSAny> TryFastArrayLastIndexOf_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSReceiver> p_receiver, TNode<JSAny> p_searchElement, TNode<Number> p_from, compiler::CodeAssemblerLabel* label_Slow);

// https://crsrc.org/c/v8/src/builtins/array-lastindexof.tq?l=172&c=1
TNode<JSAny> GenericArrayLastIndexOf_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSReceiver> p_object, TNode<JSAny> p_searchElement, TNode<Number> p_from);

// https://crsrc.org/c/v8/src/builtins/array-lastindexof.tq?l=24&c=21
TNode<Union<BigInt, Boolean, HeapNumber, JSReceiver, Null, Smi, String, Symbol, TheHole, Undefined>> UnsafeCast_Smi_OR_HeapNumber_OR_BigInt_OR_String_OR_Symbol_OR_Boolean_OR_Null_OR_Undefined_OR_JSReceiver_OR_TheHole_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o);

} // namespace internal
} // namespace v8

#endif // V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_ARRAY_LASTINDEXOF_TQ_CSA_H_
