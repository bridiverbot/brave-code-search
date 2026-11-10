#ifndef V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_ORDERED_HASH_TABLE_TQ_CSA_H_
#define V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_ORDERED_HASH_TABLE_TQ_CSA_H_

#include "src/builtins/torque-csa-header-includes.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=7&c=1
TNode<HeapObject> Cast_SmallOrderedHashTable_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=16&c=1
TNode<SmallOrderedHashSet> Cast_SmallOrderedHashSet_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=25&c=1
TNode<SmallOrderedHashMap> Cast_SmallOrderedHashMap_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=34&c=1
TNode<SmallOrderedNameDictionary> Cast_SmallOrderedNameDictionary_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=18&c=3
TNode<Uint8T> LoadSmallOrderedHashSetNumberOfElements_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedHashSet> p_o);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=18&c=3
void StoreSmallOrderedHashSetNumberOfElements_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedHashSet> p_o, TNode<Uint8T> p_v);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=19&c=3
TNode<Uint8T> LoadSmallOrderedHashSetNumberOfDeletedElements_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedHashSet> p_o);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=19&c=3
void StoreSmallOrderedHashSetNumberOfDeletedElements_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedHashSet> p_o, TNode<Uint8T> p_v);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=20&c=9
TNode<Uint8T> LoadSmallOrderedHashSetNumberOfBuckets_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedHashSet> p_o);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=22&c=31
TorqueStructSlice_uint8_MutableReference_uint8_0 FieldSliceSmallOrderedHashSetPadding_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedHashSet> p_o);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=22&c=31
TNode<Uint8T> LoadSmallOrderedHashSetPadding_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedHashSet> p_o, TNode<IntPtrT> p_i);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=22&c=31
void StoreSmallOrderedHashSetPadding_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedHashSet> p_o, TNode<IntPtrT> p_i, TNode<Uint8T> p_v);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=27&c=3
TNode<Uint8T> LoadSmallOrderedHashMapNumberOfElements_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedHashMap> p_o);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=27&c=3
void StoreSmallOrderedHashMapNumberOfElements_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedHashMap> p_o, TNode<Uint8T> p_v);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=28&c=3
TNode<Uint8T> LoadSmallOrderedHashMapNumberOfDeletedElements_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedHashMap> p_o);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=28&c=3
void StoreSmallOrderedHashMapNumberOfDeletedElements_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedHashMap> p_o, TNode<Uint8T> p_v);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=29&c=9
TNode<Uint8T> LoadSmallOrderedHashMapNumberOfBuckets_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedHashMap> p_o);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=31&c=31
TorqueStructSlice_uint8_MutableReference_uint8_0 FieldSliceSmallOrderedHashMapPadding_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedHashMap> p_o);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=31&c=31
TNode<Uint8T> LoadSmallOrderedHashMapPadding_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedHashMap> p_o, TNode<IntPtrT> p_i);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=31&c=31
void StoreSmallOrderedHashMapPadding_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedHashMap> p_o, TNode<IntPtrT> p_i, TNode<Uint8T> p_v);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=36&c=3
TNode<Int32T> LoadSmallOrderedNameDictionaryHash_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedNameDictionary> p_o);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=36&c=3
void StoreSmallOrderedNameDictionaryHash_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedNameDictionary> p_o, TNode<Int32T> p_v);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=39&c=3
TNode<Uint8T> LoadSmallOrderedNameDictionaryNumberOfElements_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedNameDictionary> p_o);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=39&c=3
void StoreSmallOrderedNameDictionaryNumberOfElements_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedNameDictionary> p_o, TNode<Uint8T> p_v);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=40&c=3
TNode<Uint8T> LoadSmallOrderedNameDictionaryNumberOfDeletedElements_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedNameDictionary> p_o);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=40&c=3
void StoreSmallOrderedNameDictionaryNumberOfDeletedElements_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedNameDictionary> p_o, TNode<Uint8T> p_v);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=41&c=9
TNode<Uint8T> LoadSmallOrderedNameDictionaryNumberOfBuckets_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedNameDictionary> p_o);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=43&c=31
TorqueStructSlice_uint8_MutableReference_uint8_0 FieldSliceSmallOrderedNameDictionaryPadding1_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedNameDictionary> p_o);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=43&c=31
TNode<Uint8T> LoadSmallOrderedNameDictionaryPadding1_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedNameDictionary> p_o, TNode<IntPtrT> p_i);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=43&c=31
void StoreSmallOrderedNameDictionaryPadding1_0(compiler::CodeAssemblerState* state_, TNode<SmallOrderedNameDictionary> p_o, TNode<IntPtrT> p_i, TNode<Uint8T> p_v);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=7&c=1
TNode<HeapObject> DownCastForTorqueClass_SmallOrderedHashTable_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=16&c=1
TNode<SmallOrderedHashSet> DownCastForTorqueClass_SmallOrderedHashSet_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=25&c=1
TNode<SmallOrderedHashMap> DownCastForTorqueClass_SmallOrderedHashMap_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=34&c=1
TNode<SmallOrderedNameDictionary> DownCastForTorqueClass_SmallOrderedNameDictionary_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

} // namespace internal
} // namespace v8

#endif // V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_ORDERED_HASH_TABLE_TQ_CSA_H_
