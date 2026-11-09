#ifndef V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_STRUCT_TQ_CSA_H_
#define V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_STRUCT_TQ_CSA_H_

#include "src/builtins/torque-csa-header-includes.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/objects/struct.tq?l=5&c=1
TNode<Struct> Cast_Struct_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/struct.tq?l=9&c=1
TNode<Tuple2> Cast_Tuple2_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/struct.tq?l=11&c=1
TNode<ClassPositions> Cast_ClassPositions_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/struct.tq?l=13&c=1
TNode<AccessorPair> Cast_AccessorPair_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/struct.tq?l=15&c=1
TNode<ForInEnumeratorHolder> Cast_ForInEnumeratorHolder_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/struct.tq?l=16&c=3
TNode<Map> LoadForInEnumeratorHolderEnumCacheMap_0(compiler::CodeAssemblerState* state_, TNode<ForInEnumeratorHolder> p_o);

// https://crsrc.org/c/v8/src/objects/struct.tq?l=16&c=3
void StoreForInEnumeratorHolderEnumCacheMap_0(compiler::CodeAssemblerState* state_, TNode<ForInEnumeratorHolder> p_o, TNode<Map> p_v);

// https://crsrc.org/c/v8/src/objects/struct.tq?l=17&c=3
TNode<FixedArray> LoadForInEnumeratorHolderNamedKeys_0(compiler::CodeAssemblerState* state_, TNode<ForInEnumeratorHolder> p_o);

// https://crsrc.org/c/v8/src/objects/struct.tq?l=17&c=3
void StoreForInEnumeratorHolderNamedKeys_0(compiler::CodeAssemblerState* state_, TNode<ForInEnumeratorHolder> p_o, TNode<FixedArray> p_v);

// https://crsrc.org/c/v8/src/objects/struct.tq?l=18&c=3
TNode<Smi> LoadForInEnumeratorHolderElementsLength_0(compiler::CodeAssemblerState* state_, TNode<ForInEnumeratorHolder> p_o);

// https://crsrc.org/c/v8/src/objects/struct.tq?l=18&c=3
void StoreForInEnumeratorHolderElementsLength_0(compiler::CodeAssemblerState* state_, TNode<ForInEnumeratorHolder> p_o, TNode<Smi> p_v);

// https://crsrc.org/c/v8/src/objects/struct.tq?l=19&c=3
TNode<Smi> LoadForInEnumeratorHolderCacheLength_0(compiler::CodeAssemblerState* state_, TNode<ForInEnumeratorHolder> p_o);

// https://crsrc.org/c/v8/src/objects/struct.tq?l=19&c=3
void StoreForInEnumeratorHolderCacheLength_0(compiler::CodeAssemblerState* state_, TNode<ForInEnumeratorHolder> p_o, TNode<Smi> p_v);

// https://crsrc.org/c/v8/src/objects/struct.tq?l=5&c=1
TNode<Struct> DownCastForTorqueClass_Struct_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/struct.tq?l=9&c=1
TNode<Tuple2> DownCastForTorqueClass_Tuple2_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/struct.tq?l=11&c=1
TNode<ClassPositions> DownCastForTorqueClass_ClassPositions_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/struct.tq?l=13&c=1
TNode<AccessorPair> DownCastForTorqueClass_AccessorPair_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/struct.tq?l=15&c=1
TNode<ForInEnumeratorHolder> DownCastForTorqueClass_ForInEnumeratorHolder_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

} // namespace internal
} // namespace v8

#endif // V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_STRUCT_TQ_CSA_H_
