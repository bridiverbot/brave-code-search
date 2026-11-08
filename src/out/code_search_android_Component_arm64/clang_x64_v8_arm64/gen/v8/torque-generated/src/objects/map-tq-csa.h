#ifndef V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_MAP_TQ_CSA_H_
#define V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_MAP_TQ_CSA_H_

#include "src/builtins/torque-csa-header-includes.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/objects/map.tq?l=43&c=1
TNode<Map> Cast_Map_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/map.tq?l=106&c=1
TNode<Uint8T> FromConstexpr_ExtendedMapKind_constexpr_kJSInterceptorMap_0(compiler::CodeAssemblerState* state_, ExtendedMapKind p_o);

// https://crsrc.org/c/v8/src/objects/map.tq?l=126&c=1
TNode<PrototypeInfo> LoadMapPrototypeInfo_0(compiler::CodeAssemblerState* state_, TNode<Map> p_m, compiler::CodeAssemblerLabel* label_HasNoPrototypeInfo);

// https://crsrc.org/c/v8/src/objects/map.tq?l=131&c=1
TNode<PrototypeSharedClosureInfo> LoadMapPrototypeSharedClosureInfo_0(compiler::CodeAssemblerState* state_, TNode<Map> p_m, compiler::CodeAssemblerLabel* label_HasNoPrototypeSharedClosureInfo);

// https://crsrc.org/c/v8/src/objects/map.tq?l=140&c=1
TNode<BoolT> IsSimpleObjectMap_0(compiler::CodeAssemblerState* state_, TNode<Map> p_map);

// https://crsrc.org/c/v8/src/objects/map.tq?l=78&c=3
TNode<Uint8T> LoadMapInstanceSizeInWords_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o);

// https://crsrc.org/c/v8/src/objects/map.tq?l=78&c=3
void StoreMapInstanceSizeInWords_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o, TNode<Uint8T> p_v);

// https://crsrc.org/c/v8/src/objects/map.tq?l=79&c=3
TNode<Uint8T> LoadMapInobjectPropertiesStartOrConstructorFunctionIndex_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o);

// https://crsrc.org/c/v8/src/objects/map.tq?l=79&c=3
void StoreMapInobjectPropertiesStartOrConstructorFunctionIndex_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o, TNode<Uint8T> p_v);

// https://crsrc.org/c/v8/src/objects/map.tq?l=80&c=3
TNode<Uint8T> LoadMapUsedOrUnusedInstanceSizeInWords_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o);

// https://crsrc.org/c/v8/src/objects/map.tq?l=80&c=3
void StoreMapUsedOrUnusedInstanceSizeInWords_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o, TNode<Uint8T> p_v);

// https://crsrc.org/c/v8/src/objects/map.tq?l=81&c=3
TNode<Uint8T> LoadMapVisitorId_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o);

// https://crsrc.org/c/v8/src/objects/map.tq?l=81&c=3
void StoreMapVisitorId_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o, TNode<Uint8T> p_v);

// https://crsrc.org/c/v8/src/objects/map.tq?l=82&c=3
TNode<Uint16T> LoadMapInstanceType_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o);

// https://crsrc.org/c/v8/src/objects/map.tq?l=82&c=3
void StoreMapInstanceType_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o, TNode<Uint16T> p_v);

// https://crsrc.org/c/v8/src/objects/map.tq?l=83&c=3
TNode<Uint8T> LoadMapBitField_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o);

// https://crsrc.org/c/v8/src/objects/map.tq?l=83&c=3
void StoreMapBitField_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o, TNode<Uint8T> p_v);

// https://crsrc.org/c/v8/src/objects/map.tq?l=84&c=3
TNode<Uint8T> LoadMapBitField2_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o);

// https://crsrc.org/c/v8/src/objects/map.tq?l=84&c=3
void StoreMapBitField2_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o, TNode<Uint8T> p_v);

// https://crsrc.org/c/v8/src/objects/map.tq?l=85&c=3
TNode<Uint32T> LoadMapBitField3_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o);

// https://crsrc.org/c/v8/src/objects/map.tq?l=85&c=3
void StoreMapBitField3_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o, TNode<Uint32T> p_v);

// https://crsrc.org/c/v8/src/objects/map.tq?l=89&c=3
TNode<Union<JSReceiver, Null>> LoadMapPrototype_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o);

// https://crsrc.org/c/v8/src/objects/map.tq?l=89&c=3
void StoreMapPrototype_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o, TNode<Union<JSReceiver, Null>> p_v);

// https://crsrc.org/c/v8/src/objects/map.tq?l=90&c=3
TNode<Object> LoadMapConstructorOrBackPointerOrNativeContext_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o);

// https://crsrc.org/c/v8/src/objects/map.tq?l=90&c=3
void StoreMapConstructorOrBackPointerOrNativeContext_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o, TNode<Object> p_v);

// https://crsrc.org/c/v8/src/objects/map.tq?l=92&c=30
TNode<Union<DescriptorArray, WasmStruct>> LoadMapInstanceDescriptors_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o);

// https://crsrc.org/c/v8/src/objects/map.tq?l=92&c=30
void StoreMapInstanceDescriptors_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o, TNode<Union<DescriptorArray, WasmStruct>> p_v);

// https://crsrc.org/c/v8/src/objects/map.tq?l=98&c=30
TNode<Union<Map, WeakArrayList>> LoadMapDependentCode_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o);

// https://crsrc.org/c/v8/src/objects/map.tq?l=98&c=30
void StoreMapDependentCode_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o, TNode<Union<Map, WeakArrayList>> p_v);

// https://crsrc.org/c/v8/src/objects/map.tq?l=101&c=3
TNode<Union<Cell, Smi>> LoadMapPrototypeValidityCell_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o);

// https://crsrc.org/c/v8/src/objects/map.tq?l=101&c=3
void StoreMapPrototypeValidityCell_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o, TNode<Union<Cell, Smi>> p_v);

// https://crsrc.org/c/v8/src/objects/map.tq?l=102&c=3
TNode<Union<Map, PrototypeInfo, PrototypeSharedClosureInfo, Smi, TransitionArray, Weak<HeapObject>>> LoadMapTransitionsOrPrototypeInfo_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o);

// https://crsrc.org/c/v8/src/objects/map.tq?l=102&c=3
void StoreMapTransitionsOrPrototypeInfo_0(compiler::CodeAssemblerState* state_, TNode<Map> p_o, TNode<Union<Map, PrototypeInfo, PrototypeSharedClosureInfo, Smi, TransitionArray, Weak<HeapObject>>> p_v);

// https://crsrc.org/c/v8/src/objects/map.tq?l=45&c=3
TNode<PrototypeInfo> Method_Map_PrototypeInfo_0(compiler::CodeAssemblerState* state_, TNode<Map> p_this, compiler::CodeAssemblerLabel* label_HasNoPrototypeInfo);

// https://crsrc.org/c/v8/src/objects/map.tq?l=62&c=3
TNode<PrototypeSharedClosureInfo> Method_Map_PrototypeSharedClosureInfo_0(compiler::CodeAssemblerState* state_, TNode<Map> p_this, compiler::CodeAssemblerLabel* label_HasNoPrototypeSharedClosureInfo);

// https://crsrc.org/c/v8/src/objects/map.tq?l=74&c=3
TNode<BoolT> Method_Map_IsUndetectable_0(compiler::CodeAssemblerState* state_, TNode<Map> p_this);

// https://crsrc.org/c/v8/src/objects/map.tq?l=122&c=3
TNode<Uint8T> LoadExtendedMapBitFieldEx_0(compiler::CodeAssemblerState* state_, TNode<ExtendedMap> p_o);

// https://crsrc.org/c/v8/src/objects/map.tq?l=122&c=3
void StoreExtendedMapBitFieldEx_0(compiler::CodeAssemblerState* state_, TNode<ExtendedMap> p_o, TNode<Uint8T> p_v);

// https://crsrc.org/c/v8/src/objects/map.tq?l=43&c=1
TNode<Map> DownCastForTorqueClass_Map_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/map.tq?l=47&c=7
TNode<Weak<HeapObject>> Cast_Weak_Map_0(compiler::CodeAssemblerState* state_, TNode<Union<HeapObject, Smi, Weak<HeapObject>>> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/map.tq?l=65&c=7
TNode<PrototypeSharedClosureInfo> Cast_PrototypeSharedClosureInfo_1(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Union<HeapObject, Smi, Weak<HeapObject>>> p_o, compiler::CodeAssemblerLabel* label_CastError);

} // namespace internal
} // namespace v8

#endif // V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_MAP_TQ_CSA_H_
