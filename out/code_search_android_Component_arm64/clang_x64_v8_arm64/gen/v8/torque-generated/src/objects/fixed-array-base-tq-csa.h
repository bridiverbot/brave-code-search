#ifndef V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_FIXED_ARRAY_BASE_TQ_CSA_H_
#define V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_FIXED_ARRAY_BASE_TQ_CSA_H_

#include "src/builtins/torque-csa-header-includes.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/objects/fixed-array-base.tq?l=5&c=1
TNode<FixedArrayBase> Cast_FixedArrayBase_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/fixed-array-base.tq?l=13&c=1
TNode<TrustedFixedArrayBase> Cast_TrustedFixedArrayBase_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/fixed-array-base.tq?l=20&c=1
TNode<IntPtrT> LoadFixedArrayBaseLengthIntptr_0(compiler::CodeAssemblerState* state_, TNode<FixedArrayBase> p_array);

// https://crsrc.org/c/v8/src/objects/fixed-array-base.tq?l=8&c=9
TNode<Uint32T> LoadFixedArrayBaseLength_0(compiler::CodeAssemblerState* state_, TNode<FixedArrayBase> p_o);

// https://crsrc.org/c/v8/src/objects/fixed-array-base.tq?l=16&c=9
TNode<Uint32T> LoadTrustedFixedArrayBaseLength_0(compiler::CodeAssemblerState* state_, TNode<TrustedFixedArrayBase> p_o);

// https://crsrc.org/c/v8/src/objects/fixed-array-base.tq?l=5&c=1
TNode<FixedArrayBase> DownCastForTorqueClass_FixedArrayBase_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/fixed-array-base.tq?l=13&c=1
TNode<TrustedFixedArrayBase> DownCastForTorqueClass_TrustedFixedArrayBase_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

} // namespace internal
} // namespace v8

#endif // V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_FIXED_ARRAY_BASE_TQ_CSA_H_
