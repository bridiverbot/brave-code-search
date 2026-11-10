#ifndef V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_SWISS_NAME_DICTIONARY_TQ_CSA_H_
#define V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_SWISS_NAME_DICTIONARY_TQ_CSA_H_

#include "src/builtins/torque-csa-header-includes.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=9&c=1
TNode<SwissNameDictionary> Cast_SwissNameDictionary_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=61&c=1
TNode<IntPtrT> SwissNameDictionaryCapacityFor_0(compiler::CodeAssemblerState* state_, TNode<IntPtrT> p_atLeastSpaceFor);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=82&c=1
TNode<IntPtrT> SwissNameDictionaryMaxUsableCapacity_0(compiler::CodeAssemblerState* state_, TNode<IntPtrT> p_capacity);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=94&c=1
TNode<IntPtrT> SwissNameDictionarySizeFor_0(compiler::CodeAssemblerState* state_, TNode<IntPtrT> p_capacity);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=104&c=1
TNode<IntPtrT> SwissNameDictionaryMetaTableSizePerEntryFor_0(compiler::CodeAssemblerState* state_, TNode<IntPtrT> p_capacity);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=116&c=1
TNode<IntPtrT> SwissNameDictionaryMetaTableSizeFor_0(compiler::CodeAssemblerState* state_, TNode<IntPtrT> p_capacity);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=133&c=1
TNode<IntPtrT> SwissNameDictionaryDataTableStartOffsetMT_0(compiler::CodeAssemblerState* state_);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=138&c=1
TNode<IntPtrT> SwissNameDictionaryCtrlTableStartOffsetMT_0(compiler::CodeAssemblerState* state_, TNode<IntPtrT> p_capacity);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=144&c=1
TorqueStructProbeSequence_0 Probe_0(compiler::CodeAssemblerState* state_, TNode<Uint32T> p_hash, TNode<Uint32T> p_mask);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=248&c=1
void SwissNameDictionaryDelete_0(compiler::CodeAssemblerState* state_, TNode<SwissNameDictionary> p_table, TNode<IntPtrT> p_entry, compiler::CodeAssemblerLabel* label_Shrunk, compiler::TypedCodeAssemblerVariable<SwissNameDictionary>* label_Shrunk_parameter_0);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=277&c=1
void SwissNameDictionaryFindEntrySIMD_0(compiler::CodeAssemblerState* state_, TNode<SwissNameDictionary> p_table, TNode<Name> p_key, compiler::CodeAssemblerLabel* label_Found, compiler::TypedCodeAssemblerVariable<IntPtrT>* label_Found_parameter_0, compiler::CodeAssemblerLabel* label_NotFound);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=285&c=1
void SwissNameDictionaryFindEntryPortable_0(compiler::CodeAssemblerState* state_, TNode<SwissNameDictionary> p_table, TNode<Name> p_key, compiler::CodeAssemblerLabel* label_Found, compiler::TypedCodeAssemblerVariable<IntPtrT>* label_Found_parameter_0, compiler::CodeAssemblerLabel* label_NotFound);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=300&c=1
void SwissNameDictionaryAddSIMD_0(compiler::CodeAssemblerState* state_, TNode<SwissNameDictionary> p_table, TNode<Name> p_key, TNode<Object> p_value, TNode<Uint8T> p_propertyDetails, compiler::CodeAssemblerLabel* label_Bailout);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=308&c=1
void SwissNameDictionaryAddPortable_0(compiler::CodeAssemblerState* state_, TNode<SwissNameDictionary> p_table, TNode<Name> p_key, TNode<Object> p_value, TNode<Uint8T> p_propertyDetails, compiler::CodeAssemblerLabel* label_Bailout);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=11&c=3
TNode<Uint32T> LoadSwissNameDictionaryHash_0(compiler::CodeAssemblerState* state_, TNode<SwissNameDictionary> p_o);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=11&c=3
void StoreSwissNameDictionaryHash_0(compiler::CodeAssemblerState* state_, TNode<SwissNameDictionary> p_o, TNode<Uint32T> p_v);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=12&c=9
TNode<Uint32T> LoadSwissNameDictionaryCapacity_0(compiler::CodeAssemblerState* state_, TNode<SwissNameDictionary> p_o);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=13&c=3
TNode<ByteArray> LoadSwissNameDictionaryMetaTable_0(compiler::CodeAssemblerState* state_, TNode<SwissNameDictionary> p_o);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=13&c=3
void StoreSwissNameDictionaryMetaTable_0(compiler::CodeAssemblerState* state_, TNode<SwissNameDictionary> p_o, TNode<ByteArray> p_v);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=9&c=1
TNode<SwissNameDictionary> DownCastForTorqueClass_SwissNameDictionary_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=281&c=3
void FindEntry_GroupSse2Loader_0(compiler::CodeAssemblerState* state_, TNode<SwissNameDictionary> p_table, TNode<Name> p_key, compiler::CodeAssemblerLabel* label_Found, compiler::TypedCodeAssemblerVariable<IntPtrT>* label_Found_parameter_0, compiler::CodeAssemblerLabel* label_NotFound);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=289&c=3
void FindEntry_GroupPortableLoader_0(compiler::CodeAssemblerState* state_, TNode<SwissNameDictionary> p_table, TNode<Name> p_key, compiler::CodeAssemblerLabel* label_Found, compiler::TypedCodeAssemblerVariable<IntPtrT>* label_Found_parameter_0, compiler::CodeAssemblerLabel* label_NotFound);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=304&c=3
void Add_GroupSse2Loader_0(compiler::CodeAssemblerState* state_, TNode<SwissNameDictionary> p_table, TNode<Name> p_key, TNode<Object> p_value, TNode<Uint8T> p_propertyDetails, compiler::CodeAssemblerLabel* label_Bailout);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=312&c=3
void Add_GroupPortableLoader_0(compiler::CodeAssemblerState* state_, TNode<SwissNameDictionary> p_table, TNode<Name> p_key, TNode<Object> p_value, TNode<Uint8T> p_propertyDetails, compiler::CodeAssemblerLabel* label_Bailout);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=230&c=24
TNode<Int32T> FindFirstEmpty_GroupSse2Loader_0(compiler::CodeAssemblerState* state_, TNode<SwissNameDictionary> p_table, TNode<IntPtrT> p_capacity, TNode<Uint32T> p_hash);

// https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=230&c=24
TNode<Int32T> FindFirstEmpty_GroupPortableLoader_0(compiler::CodeAssemblerState* state_, TNode<SwissNameDictionary> p_table, TNode<IntPtrT> p_capacity, TNode<Uint32T> p_hash);

} // namespace internal
} // namespace v8

#endif // V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_SWISS_NAME_DICTIONARY_TQ_CSA_H_
