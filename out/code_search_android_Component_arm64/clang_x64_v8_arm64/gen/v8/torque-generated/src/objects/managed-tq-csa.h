#ifndef V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_MANAGED_TQ_CSA_H_
#define V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_MANAGED_TQ_CSA_H_

#include "src/builtins/torque-csa-header-includes.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/objects/managed.tq?l=5&c=1
TNode<CppGCManagedBase> Cast_CppGCManagedBase_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/managed.tq?l=7&c=3
TNode<CppHeapPointerT> LoadCppGCManagedBaseCppGcWrapper_0(compiler::CodeAssemblerState* state_, TNode<CppGCManagedBase> p_o);

// https://crsrc.org/c/v8/src/objects/managed.tq?l=7&c=3
void StoreCppGCManagedBaseCppGcWrapper_0(compiler::CodeAssemblerState* state_, TNode<CppGCManagedBase> p_o, TNode<CppHeapPointerT> p_v);

// https://crsrc.org/c/v8/src/objects/managed.tq?l=5&c=1
TNode<CppGCManagedBase> DownCastForTorqueClass_CppGCManagedBase_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

} // namespace internal
} // namespace v8

#endif // V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_MANAGED_TQ_CSA_H_
