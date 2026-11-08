#ifndef V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_ARRAY_COPYWITHIN_TQ_CSA_H_
#define V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_ARRAY_COPYWITHIN_TQ_CSA_H_

#include "src/builtins/torque-csa-header-includes.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/builtins/array-copywithin.tq?l=6&c=1
TNode<Number> ConvertAndClampRelativeIndex_0(compiler::CodeAssemblerState* state_, TNode<Number> p_index, TNode<Number> p_length);

// https://crsrc.org/c/v8/src/builtins/array-copywithin.tq?l=20&c=1
void TryFastArrayCopyWithin_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSAny> p_receiver, TNode<Number> p_toNumber, TNode<Number> p_fromNumber, TNode<Number> p_countNumber, compiler::CodeAssemblerLabel* label_Slow);

// https://crsrc.org/c/v8/src/builtins/array-copywithin.tq?l=26&c=30
TNode<JSArray> Cast_FastJSArray_1(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/builtins/array-copywithin.tq?l=41&c=20
TNode<FixedArray> UnsafeCast_FixedArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o);

// https://crsrc.org/c/v8/src/builtins/array-copywithin.tq?l=41&c=5
void DoMoveElements_FixedArray_0(compiler::CodeAssemblerState* state_, TNode<FixedArray> p_elements, TNode<Smi> p_dstIndex, TNode<Smi> p_srcIndex, TNode<Smi> p_count);

// https://crsrc.org/c/v8/src/builtins/array-copywithin.tq?l=44&c=9
TNode<FixedDoubleArray> UnsafeCast_FixedDoubleArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o);

// https://crsrc.org/c/v8/src/builtins/array-copywithin.tq?l=43&c=5
void DoMoveElements_FixedDoubleArray_0(compiler::CodeAssemblerState* state_, TNode<FixedDoubleArray> p_elements, TNode<Smi> p_dstIndex, TNode<Smi> p_srcIndex, TNode<Smi> p_count);

} // namespace internal
} // namespace v8

#endif // V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_ARRAY_COPYWITHIN_TQ_CSA_H_
