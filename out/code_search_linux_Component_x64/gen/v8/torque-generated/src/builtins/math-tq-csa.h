#ifndef V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_MATH_TQ_CSA_H_
#define V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_MATH_TQ_CSA_H_

#include "src/builtins/torque-csa-header-includes.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/builtins/math.tq?l=7&c=1
void ReduceToSmiOrFloat64_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSAny> p_x, compiler::CodeAssemblerLabel* label_SmiResult, compiler::TypedCodeAssemblerVariable<Smi>* label_SmiResult_parameter_0, compiler::CodeAssemblerLabel* label_Float64Result, compiler::TypedCodeAssemblerVariable<Float64T>* label_Float64Result_parameter_0);

// https://crsrc.org/c/v8/src/builtins/math.tq?l=118&c=1
TNode<Number> MathPowImpl_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSAny> p_base, TNode<JSAny> p_exponent);

// https://crsrc.org/c/v8/src/builtins/math.tq?l=398&c=1
TNode<Number> FastMathHypot_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TorqueStructArguments p_arguments, compiler::CodeAssemblerLabel* label_Slow);

// https://crsrc.org/c/v8/src/builtins/math.tq?l=527&c=1
TNode<Float64T> RandomToDouble_0(compiler::CodeAssemblerState* state_, TNode<Uint64T> p_random);

// https://crsrc.org/c/v8/src/builtins/math.tq?l=536&c=1
TorqueStructXorShift128Result_0 XorShift128_0(compiler::CodeAssemblerState* state_, TNode<Uint64T> p_s0In, TNode<Uint64T> p_s1In);

// https://crsrc.org/c/v8/src/builtins/math.tq?l=530&c=46
TNode<Uint64T> Convert_uint64_constexpr_IntegerLiteral_0(compiler::CodeAssemblerState* state_, IntegerLiteral p_i);

// https://crsrc.org/c/v8/src/builtins/math.tq?l=558&c=22
TorqueStructReference_ByteArray_0 NativeContextSlot_NativeContext_ByteArray_0(compiler::CodeAssemblerState* state_, TNode<NativeContext> p_context, TNode<IntPtrT> p_index);

// https://crsrc.org/c/v8/src/builtins/math.tq?l=573&c=16
TorqueStructReference_Smi_0 NativeContextSlot_NativeContext_Smi_0(compiler::CodeAssemblerState* state_, TNode<NativeContext> p_context, TNode<IntPtrT> p_index);

// https://crsrc.org/c/v8/src/builtins/math.tq?l=582&c=39
TorqueStructReference_Undefined_OR_FixedDoubleArray_0 NativeContextSlot_NativeContext_Undefined_OR_FixedDoubleArray_0(compiler::CodeAssemblerState* state_, TNode<NativeContext> p_context, TNode<IntPtrT> p_index);

} // namespace internal
} // namespace v8

#endif // V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_MATH_TQ_CSA_H_
