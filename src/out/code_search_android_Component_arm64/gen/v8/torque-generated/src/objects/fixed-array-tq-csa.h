#ifndef V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_FIXED_ARRAY_TQ_CSA_H_
#define V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_FIXED_ARRAY_TQ_CSA_H_

#include "src/builtins/torque-csa-header-includes.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=5&c=1
TNode<FixedArray> Cast_FixedArray_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=12&c=1
TNode<TrustedFixedArray> Cast_TrustedFixedArray_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=17&c=1
TNode<ProtectedFixedArray> Cast_ProtectedFixedArray_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=22&c=1
TNode<WeakFixedArray> Cast_WeakFixedArray_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=27&c=1
TNode<WeakHomomorphicFixedArray> Cast_WeakHomomorphicFixedArray_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=32&c=1
TNode<TrustedWeakFixedArray> Cast_TrustedWeakFixedArray_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=37&c=1
TNode<ProtectedWeakFixedArray> Cast_ProtectedWeakFixedArray_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=42&c=1
TNode<ArrayList> Cast_ArrayList_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=49&c=1
TNode<WeakArrayList> Cast_WeakArrayList_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=88&c=1
void StoreFixedArrayDirect_0(compiler::CodeAssemblerState* state_, TNode<FixedArray> p_a, TNode<Smi> p_i, TNode<Object> p_v);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=117&c=1
TNode<FixedArray> ExtractFixedArray_0(compiler::CodeAssemblerState* state_, TNode<FixedArray> p_source, TNode<IntPtrT> p_first, TNode<IntPtrT> p_count, TNode<IntPtrT> p_capacity, TNode<Hole> p_initialElement);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=7&c=3
TorqueStructSlice_Object_MutableReference_Object_0 FieldSliceFixedArrayObjects_0(compiler::CodeAssemblerState* state_, TNode<FixedArray> p_o);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=7&c=3
TNode<Object> LoadFixedArrayObjects_0(compiler::CodeAssemblerState* state_, TNode<FixedArray> p_o, TNode<IntPtrT> p_i);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=7&c=3
void StoreFixedArrayObjects_0(compiler::CodeAssemblerState* state_, TNode<FixedArray> p_o, TNode<IntPtrT> p_i, TNode<Object> p_v);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=24&c=3
TorqueStructSlice_MaybeObject_MutableReference_MaybeObject_0 FieldSliceWeakFixedArrayObjects_0(compiler::CodeAssemblerState* state_, TNode<WeakFixedArray> p_o);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=24&c=3
TNode<Union<HeapObject, Smi, Weak<HeapObject>>> LoadWeakFixedArrayObjects_0(compiler::CodeAssemblerState* state_, TNode<WeakFixedArray> p_o, TNode<IntPtrT> p_i);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=24&c=3
void StoreWeakFixedArrayObjects_0(compiler::CodeAssemblerState* state_, TNode<WeakFixedArray> p_o, TNode<IntPtrT> p_i, TNode<Union<HeapObject, Smi, Weak<HeapObject>>> p_v);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=51&c=9
TNode<Uint32T> LoadWeakArrayListCapacity_0(compiler::CodeAssemblerState* state_, TNode<WeakArrayList> p_o);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=52&c=3
TNode<Uint32T> LoadWeakArrayListLength_0(compiler::CodeAssemblerState* state_, TNode<WeakArrayList> p_o);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=52&c=3
void StoreWeakArrayListLength_0(compiler::CodeAssemblerState* state_, TNode<WeakArrayList> p_o, TNode<Uint32T> p_v);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=53&c=3
TorqueStructSlice_MaybeObject_MutableReference_MaybeObject_0 FieldSliceWeakArrayListObjects_0(compiler::CodeAssemblerState* state_, TNode<WeakArrayList> p_o);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=53&c=3
TNode<Union<HeapObject, Smi, Weak<HeapObject>>> LoadWeakArrayListObjects_0(compiler::CodeAssemblerState* state_, TNode<WeakArrayList> p_o, TNode<IntPtrT> p_i);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=53&c=3
void StoreWeakArrayListObjects_0(compiler::CodeAssemblerState* state_, TNode<WeakArrayList> p_o, TNode<IntPtrT> p_i, TNode<Union<HeapObject, Smi, Weak<HeapObject>>> p_v);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=14&c=3
TorqueStructSlice_Object_MutableReference_Object_0 FieldSliceTrustedFixedArrayObjects_0(compiler::CodeAssemblerState* state_, TNode<TrustedFixedArray> p_o);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=14&c=3
TNode<Object> LoadTrustedFixedArrayObjects_0(compiler::CodeAssemblerState* state_, TNode<TrustedFixedArray> p_o, TNode<IntPtrT> p_i);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=14&c=3
void StoreTrustedFixedArrayObjects_0(compiler::CodeAssemblerState* state_, TNode<TrustedFixedArray> p_o, TNode<IntPtrT> p_i, TNode<Object> p_v);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=19&c=3
TorqueStructSlice_ProtectedPointer_Smi_OR_TrustedObject_MutableReference_ProtectedPointer_Smi_OR_TrustedObject_0 FieldSliceProtectedFixedArrayObjects_0(compiler::CodeAssemblerState* state_, TNode<ProtectedFixedArray> p_o);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=19&c=3
TNode<MaybeObject> LoadProtectedFixedArrayObjects_0(compiler::CodeAssemblerState* state_, TNode<ProtectedFixedArray> p_o, TNode<IntPtrT> p_i);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=19&c=3
void StoreProtectedFixedArrayObjects_0(compiler::CodeAssemblerState* state_, TNode<ProtectedFixedArray> p_o, TNode<IntPtrT> p_i, TNode<MaybeObject> p_v);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=29&c=3
TorqueStructSlice_MaybeObject_MutableReference_MaybeObject_0 FieldSliceWeakHomomorphicFixedArrayObjects_0(compiler::CodeAssemblerState* state_, TNode<WeakHomomorphicFixedArray> p_o);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=29&c=3
TNode<Union<HeapObject, Smi, Weak<HeapObject>>> LoadWeakHomomorphicFixedArrayObjects_0(compiler::CodeAssemblerState* state_, TNode<WeakHomomorphicFixedArray> p_o, TNode<IntPtrT> p_i);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=29&c=3
void StoreWeakHomomorphicFixedArrayObjects_0(compiler::CodeAssemblerState* state_, TNode<WeakHomomorphicFixedArray> p_o, TNode<IntPtrT> p_i, TNode<Union<HeapObject, Smi, Weak<HeapObject>>> p_v);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=34&c=3
TorqueStructSlice_MaybeObject_MutableReference_MaybeObject_0 FieldSliceTrustedWeakFixedArrayObjects_0(compiler::CodeAssemblerState* state_, TNode<TrustedWeakFixedArray> p_o);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=34&c=3
TNode<Union<HeapObject, Smi, Weak<HeapObject>>> LoadTrustedWeakFixedArrayObjects_0(compiler::CodeAssemblerState* state_, TNode<TrustedWeakFixedArray> p_o, TNode<IntPtrT> p_i);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=34&c=3
void StoreTrustedWeakFixedArrayObjects_0(compiler::CodeAssemblerState* state_, TNode<TrustedWeakFixedArray> p_o, TNode<IntPtrT> p_i, TNode<Union<HeapObject, Smi, Weak<HeapObject>>> p_v);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=39&c=3
TorqueStructSlice_ProtectedPointer_Smi_OR_TrustedObject_OR_Weak_TrustedObject_MutableReference_ProtectedPointer_Smi_OR_TrustedObject_OR_Weak_TrustedObject_0 FieldSliceProtectedWeakFixedArrayObjects_0(compiler::CodeAssemblerState* state_, TNode<ProtectedWeakFixedArray> p_o);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=39&c=3
TNode<MaybeObject> LoadProtectedWeakFixedArrayObjects_0(compiler::CodeAssemblerState* state_, TNode<ProtectedWeakFixedArray> p_o, TNode<IntPtrT> p_i);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=39&c=3
void StoreProtectedWeakFixedArrayObjects_0(compiler::CodeAssemblerState* state_, TNode<ProtectedWeakFixedArray> p_o, TNode<IntPtrT> p_i, TNode<MaybeObject> p_v);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=44&c=9
TNode<Uint32T> LoadArrayListCapacity_0(compiler::CodeAssemblerState* state_, TNode<ArrayList> p_o);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=45&c=3
TNode<Uint32T> LoadArrayListLength_0(compiler::CodeAssemblerState* state_, TNode<ArrayList> p_o);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=45&c=3
void StoreArrayListLength_0(compiler::CodeAssemblerState* state_, TNode<ArrayList> p_o, TNode<Uint32T> p_v);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=46&c=3
TorqueStructSlice_Object_MutableReference_Object_0 FieldSliceArrayListObjects_0(compiler::CodeAssemblerState* state_, TNode<ArrayList> p_o);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=46&c=3
TNode<Object> LoadArrayListObjects_0(compiler::CodeAssemblerState* state_, TNode<ArrayList> p_o, TNode<IntPtrT> p_i);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=46&c=3
void StoreArrayListObjects_0(compiler::CodeAssemblerState* state_, TNode<ArrayList> p_o, TNode<IntPtrT> p_i, TNode<Object> p_v);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=5&c=1
TNode<FixedArray> DownCastForTorqueClass_FixedArray_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=12&c=1
TNode<TrustedFixedArray> DownCastForTorqueClass_TrustedFixedArray_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=17&c=1
TNode<ProtectedFixedArray> DownCastForTorqueClass_ProtectedFixedArray_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=22&c=1
TNode<WeakFixedArray> DownCastForTorqueClass_WeakFixedArray_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=27&c=1
TNode<WeakHomomorphicFixedArray> DownCastForTorqueClass_WeakHomomorphicFixedArray_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=32&c=1
TNode<TrustedWeakFixedArray> DownCastForTorqueClass_TrustedWeakFixedArray_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=37&c=1
TNode<ProtectedWeakFixedArray> DownCastForTorqueClass_ProtectedWeakFixedArray_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=42&c=1
TNode<ArrayList> DownCastForTorqueClass_ArrayList_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=49&c=1
TNode<WeakArrayList> DownCastForTorqueClass_WeakArrayList_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=125&c=11
TorqueStructConstantIterator_Hole_0 ConstantIterator_Hole_0(compiler::CodeAssemblerState* state_, TNode<Hole> p_value);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=123&c=7
TorqueStructIteratorSequence_Object_SliceIterator_Object_MutableReference_Object_ConstantIterator_Hole_0 IteratorSequence_Object_SliceIterator_Object_MutableReference_Object_ConstantIterator_Hole_0(compiler::CodeAssemblerState* state_, TorqueStructSliceIterator_Object_MutableReference_Object_0 p_first, TorqueStructConstantIterator_Hole_0 p_second);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=121&c=10
TNode<FixedArray> NewFixedArray_IteratorSequence_Object_SliceIterator_Object_MutableReference_Object_ConstantIterator_Hole_0(compiler::CodeAssemblerState* state_, TNode<IntPtrT> p_length, TorqueStructIteratorSequence_Object_SliceIterator_Object_MutableReference_Object_ConstantIterator_Hole_0 p_it);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=7&c=3
TorqueStructSlice_Object_MutableReference_Object_0 NewMutableSlice_Object_0(compiler::CodeAssemblerState* state_, TNode<Union<HeapObject, TaggedIndex>> p_object, TNode<IntPtrT> p_offset, TNode<IntPtrT> p_length);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=24&c=3
TorqueStructSlice_MaybeObject_MutableReference_MaybeObject_0 NewMutableSlice_MaybeObject_0(compiler::CodeAssemblerState* state_, TNode<Union<HeapObject, TaggedIndex>> p_object, TNode<IntPtrT> p_offset, TNode<IntPtrT> p_length);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=19&c=3
TorqueStructSlice_ProtectedPointer_Smi_OR_TrustedObject_MutableReference_ProtectedPointer_Smi_OR_TrustedObject_0 NewMutableSlice_ProtectedPointer_Smi_OR_TrustedObject_0(compiler::CodeAssemblerState* state_, TNode<Union<HeapObject, TaggedIndex>> p_object, TNode<IntPtrT> p_offset, TNode<IntPtrT> p_length);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=39&c=3
TorqueStructSlice_ProtectedPointer_Smi_OR_TrustedObject_OR_Weak_TrustedObject_MutableReference_ProtectedPointer_Smi_OR_TrustedObject_OR_Weak_TrustedObject_0 NewMutableSlice_ProtectedPointer_Smi_OR_TrustedObject_OR_Weak_TrustedObject_0(compiler::CodeAssemblerState* state_, TNode<Union<HeapObject, TaggedIndex>> p_object, TNode<IntPtrT> p_offset, TNode<IntPtrT> p_length);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=156&c=12
void InitializeFieldsFromIterator_Object_ArgumentsIterator_0(compiler::CodeAssemblerState* state_, TorqueStructSlice_Object_MutableReference_Object_0 p_target, TorqueStructArgumentsIterator_0 p_originIterator);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=156&c=12
void InitializeFieldsFromIterator_Object_ConstantIterator_Undefined_0(compiler::CodeAssemblerState* state_, TorqueStructSlice_Object_MutableReference_Object_0 p_target, TorqueStructConstantIterator_Undefined_0 p_originIterator);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=156&c=12
void InitializeFieldsFromIterator_Object_ParameterValueIterator_0(compiler::CodeAssemblerState* state_, TorqueStructSlice_Object_MutableReference_Object_0 p_target, TorqueStructParameterValueIterator_0 p_originIterator);

// https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=156&c=12
void InitializeFieldsFromIterator_Object_IteratorSequence_Object_SliceIterator_Object_MutableReference_Object_ConstantIterator_Hole_0(compiler::CodeAssemblerState* state_, TorqueStructSlice_Object_MutableReference_Object_0 p_target, TorqueStructIteratorSequence_Object_SliceIterator_Object_MutableReference_Object_ConstantIterator_Hole_0 p_originIterator);

} // namespace internal
} // namespace v8

#endif // V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_FIXED_ARRAY_TQ_CSA_H_
