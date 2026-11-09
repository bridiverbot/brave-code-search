#ifndef V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_NAME_TQ_CSA_H_
#define V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_NAME_TQ_CSA_H_

#include "src/builtins/torque-csa-header-includes.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/objects/name.tq?l=5&c=1
TNode<Name> Cast_Name_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/name.tq?l=32&c=1
TNode<Uint8T> FromConstexpr_PrivateSymbolKind_constexpr_kPublic_0(compiler::CodeAssemblerState* state_, PrivateSymbolKind p_o);

// https://crsrc.org/c/v8/src/objects/name.tq?l=32&c=1
TNode<Uint8T> FromConstexpr_PrivateSymbolKind_constexpr_kInternal_0(compiler::CodeAssemblerState* state_, PrivateSymbolKind p_o);

// https://crsrc.org/c/v8/src/objects/name.tq?l=32&c=1
TNode<Uint8T> FromConstexpr_PrivateSymbolKind_constexpr_kFieldName_0(compiler::CodeAssemblerState* state_, PrivateSymbolKind p_o);

// https://crsrc.org/c/v8/src/objects/name.tq?l=32&c=1
TNode<Uint8T> FromConstexpr_PrivateSymbolKind_constexpr_kBrand_0(compiler::CodeAssemblerState* state_, PrivateSymbolKind p_o);

// https://crsrc.org/c/v8/src/objects/name.tq?l=47&c=1
TNode<Symbol> Cast_Symbol_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/name.tq?l=66&c=1
TNode<Uint32T> kNameEmptyHashField_0(compiler::CodeAssemblerState* state_);
// https://crsrc.org/c/v8/src/objects/name.tq?l=69&c=1
TNode<BoolT> ContainsCachedArrayIndex_0(compiler::CodeAssemblerState* state_, TNode<Uint32T> p_hash);

// https://crsrc.org/c/v8/src/objects/name.tq?l=78&c=1
TNode<Uint32T> kArrayIndexValueBitsShift_0(compiler::CodeAssemblerState* state_);
// https://crsrc.org/c/v8/src/objects/name.tq?l=79&c=1
TNode<Uint32T> kArrayIndexLengthBitsShift_0(compiler::CodeAssemblerState* state_);
// https://crsrc.org/c/v8/src/objects/name.tq?l=82&c=1
TNode<Uint32T> TenToThe_0(compiler::CodeAssemblerState* state_, TNode<Uint32T> p_exponent);

// https://crsrc.org/c/v8/src/objects/name.tq?l=91&c=1
TNode<BoolT> IsIntegerIndex_0(compiler::CodeAssemblerState* state_, TNode<Uint32T> p_hash);

// https://crsrc.org/c/v8/src/objects/name.tq?l=98&c=1
TNode<Uint32T> MakeArrayIndexHashRaw_0(compiler::CodeAssemblerState* state_, TNode<Uint32T> p_value, TNode<Uint32T> p_length);

// https://crsrc.org/c/v8/src/objects/name.tq?l=116&c=1
TNode<Uint32T> DecodeArrayIndexFromHashFieldRaw_0(compiler::CodeAssemblerState* state_, TNode<Uint32T> p_rawHashField);

// https://crsrc.org/c/v8/src/objects/name.tq?l=123&c=1
TNode<Uint32T> MakeArrayIndexHash_0(compiler::CodeAssemblerState* state_, TNode<Uint32T> p_value, TNode<Uint32T> p_length);

// https://crsrc.org/c/v8/src/objects/name.tq?l=134&c=1
TNode<Uint32T> DecodeArrayIndexFromHashField_0(compiler::CodeAssemblerState* state_, TNode<Uint32T> p_rawHashField);

// https://crsrc.org/c/v8/src/objects/name.tq?l=8&c=3
TNode<Uint32T> LoadNameRawHashField_0(compiler::CodeAssemblerState* state_, TNode<Name> p_o);

// https://crsrc.org/c/v8/src/objects/name.tq?l=8&c=3
void StoreNameRawHashField_0(compiler::CodeAssemblerState* state_, TNode<Name> p_o, TNode<Uint32T> p_v);

// https://crsrc.org/c/v8/src/objects/name.tq?l=49&c=3
TNode<Uint32T> LoadSymbolFlags_0(compiler::CodeAssemblerState* state_, TNode<Symbol> p_o);

// https://crsrc.org/c/v8/src/objects/name.tq?l=49&c=3
void StoreSymbolFlags_0(compiler::CodeAssemblerState* state_, TNode<Symbol> p_o, TNode<Uint32T> p_v);

// https://crsrc.org/c/v8/src/objects/name.tq?l=50&c=3
TNode<Union<String, Undefined>> LoadSymbolDescription_0(compiler::CodeAssemblerState* state_, TNode<Symbol> p_o);

// https://crsrc.org/c/v8/src/objects/name.tq?l=50&c=3
void StoreSymbolDescription_0(compiler::CodeAssemblerState* state_, TNode<Symbol> p_o, TNode<Union<String, Undefined>> p_v);

// https://crsrc.org/c/v8/src/objects/name.tq?l=5&c=1
TNode<Name> DownCastForTorqueClass_Name_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/name.tq?l=47&c=1
TNode<Symbol> DownCastForTorqueClass_Symbol_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

} // namespace internal
} // namespace v8

#endif // V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_NAME_TQ_CSA_H_
