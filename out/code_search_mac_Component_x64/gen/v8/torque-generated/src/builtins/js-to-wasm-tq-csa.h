#ifndef V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_JS_TO_WASM_TQ_CSA_H_
#define V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_JS_TO_WASM_TQ_CSA_H_

#include "src/builtins/torque-csa-header-includes.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=69&c=1
TNode<Int32T> FromConstexpr_Promise_constexpr_kPromise_0(compiler::CodeAssemblerState* state_, wasm::Promise p_o);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=69&c=1
TNode<Int32T> FromConstexpr_Promise_constexpr_kNoPromise_0(compiler::CodeAssemblerState* state_, wasm::Promise p_o);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=69&c=1
TNode<Int32T> FromConstexpr_Promise_constexpr_kStressSwitch_0(compiler::CodeAssemblerState* state_, wasm::Promise p_o);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=75&c=1
TNode<Uint32T> FromConstexpr_StandardType_constexpr_kExtern_0(compiler::CodeAssemblerState* state_, wasm::StandardType p_o);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=75&c=1
TNode<Uint32T> FromConstexpr_StandardType_constexpr_kNoExtern_0(compiler::CodeAssemblerState* state_, wasm::StandardType p_o);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=75&c=1
TNode<Uint32T> FromConstexpr_StandardType_constexpr_kString_0(compiler::CodeAssemblerState* state_, wasm::StandardType p_o);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=75&c=1
TNode<Uint32T> FromConstexpr_StandardType_constexpr_kEq_0(compiler::CodeAssemblerState* state_, wasm::StandardType p_o);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=75&c=1
TNode<Uint32T> FromConstexpr_StandardType_constexpr_kI31_0(compiler::CodeAssemblerState* state_, wasm::StandardType p_o);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=75&c=1
TNode<Uint32T> FromConstexpr_StandardType_constexpr_kAny_0(compiler::CodeAssemblerState* state_, wasm::StandardType p_o);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=85&c=1
TNode<Uint32T> FromConstexpr_RefTypeKind_constexpr_kStruct_0(compiler::CodeAssemblerState* state_, wasm::RefTypeKind p_o);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=85&c=1
TNode<Uint32T> FromConstexpr_RefTypeKind_constexpr_kArray_0(compiler::CodeAssemblerState* state_, wasm::RefTypeKind p_o);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=85&c=1
TNode<Uint32T> FromConstexpr_RefTypeKind_constexpr_kFunction_0(compiler::CodeAssemblerState* state_, wasm::RefTypeKind p_o);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=150&c=1
TNode<Uint32T> Bitcast_uint32_float32_0(compiler::CodeAssemblerState* state_, TNode<Float32T> p_v);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=159&c=1
TNode<IntPtrT> TruncateBigIntToI64_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSAny> p_input);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=273&c=1
TorqueStructReturnSlotAllocator_0 NewReturnSlotAllocator_0(compiler::CodeAssemblerState* state_);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=406&c=1
TorqueStructLocationAllocator_0 LocationAllocatorForParams_0(compiler::CodeAssemblerState* state_, TorqueStructReference_intptr_0 p_paramBuffer, TNode<IntPtrT> p_paramBufferSize);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=433&c=1
TorqueStructLocationAllocator_0 LocationAllocatorForReturns_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_gpRegs, TNode<RawPtrT> p_fpRegs, TNode<RawPtrT> p_stack);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=451&c=1
TNode<Object> JSToWasmObject_0(compiler::CodeAssemblerState* state_, TNode<NativeContext> p_context, TNode<Uint32T> p_targetType, TNode<JSAny> p_value);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=479&c=1
void HandleF32Params_0(compiler::CodeAssemblerState* state_, TNode<NativeContext> p_context, TorqueStructLocationAllocator_0 p_locationAllocator, TorqueStructReference_intptr_0 p_toRef, TNode<JSAny> p_param);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=506&c=1
TNode<JSAny> JSToWasmWrapperHelper_0(compiler::CodeAssemblerState* state_, TNode<NativeContext> p_context, TNode<JSAny> p__receiver, TNode<JSFunction> p_target, TorqueStructArguments p_arguments, wasm::Promise p_promise);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=868&c=1
TNode<JSAny> WasmToJSObject_0(compiler::CodeAssemblerState* state_, TNode<NativeContext> p_context, TNode<Object> p_value);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=413&c=47
int31_t SizeOf_intptr_0(compiler::CodeAssemblerState* state_);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=421&c=32
int31_t SizeOf_float64_0(compiler::CodeAssemblerState* state_);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=484&c=8
TorqueStructReference_float64_0 RefCast_float64_0(compiler::CodeAssemblerState* state_, TorqueStructReference_intptr_0 p_i);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=487&c=8
TorqueStructReference_float32_0 RefCast_float32_0(compiler::CodeAssemblerState* state_, TorqueStructReference_intptr_0 p_i);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=529&c=23
TorqueStructReference_intptr_0 GetRefAt_intptr_RawFunctionSigPtr_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_base, TNode<IntPtrT> p_offset);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=533&c=17
TorqueStructReference_RawPtr_0 GetRefAt_RawPtr_RawFunctionSigPtr_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_base, TNode<IntPtrT> p_offset);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=535&c=20
TorqueStructSlice_uint32_ConstReference_uint32_0 NewOffHeapConstSlice_uint32_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_startPointer, TNode<IntPtrT> p_length);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=551&c=25
TorqueStructSlice_uint32_ConstReference_uint32_0 Subslice_uint32_0(compiler::CodeAssemblerState* state_, TorqueStructSlice_uint32_ConstReference_uint32_0 p_slice, TNode<IntPtrT> p_start, TNode<IntPtrT> p_length, compiler::CodeAssemblerLabel* label_OutOfBounds);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=638&c=19
TorqueStructReference_intptr_0 NewOffHeapReference_intptr_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_ptr);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=309&c=22
TorqueStructReference_intptr_0 NewReference_intptr_0(compiler::CodeAssemblerState* state_, TNode<Union<HeapObject, TaggedIndex>> p_object, TNode<IntPtrT> p_offset);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=805&c=4
TorqueStructReference_int32_0 GetRefAt_int32_RawPtr_intptr_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_base, TNode<IntPtrT> p_offset);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=807&c=4
TorqueStructReference_bool_0 GetRefAt_bool_RawPtr_intptr_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_base, TNode<IntPtrT> p_offset);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=808&c=4
TorqueStructReference_RawPtr_0 GetRefAt_RawPtr_RawPtr_intptr_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_base, TNode<IntPtrT> p_offset);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=809&c=4
TorqueStructReference_intptr_0 GetRefAt_intptr_RawPtr_intptr_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_base, TNode<IntPtrT> p_offset);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=811&c=4
TorqueStructReference_WasmCodePointer_0 GetRefAt_WasmCodePointer_RawPtr_intptr_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_base, TNode<IntPtrT> p_offset);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=813&c=4
TorqueStructReference_RawPtr_intptr_0 GetRefAt_RawPtr_intptr_RawPtr_intptr_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_base, TNode<IntPtrT> p_offset);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=877&c=7
TNode<BoolT> Is_WasmCustomMap_Object_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=878&c=26
TNode<WasmCustomMap> UnsafeCast_WasmCustomMap_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=884&c=7
TNode<BoolT> Is_WasmFuncRef_Object_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=885&c=22
TNode<WasmFuncRef> UnsafeCast_WasmFuncRef_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=887&c=9
TNode<BoolT> Is_JSFunction_Undefined_OR_JSFunction_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Union<JSFunction, Undefined>> p_o);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=888&c=14
TNode<JSFunction> UnsafeCast_JSFunction_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=894&c=7
TNode<BoolT> Is_String_Object_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=912&c=22
TorqueStructReference_uint32_0 GetRefAt_uint32_RawPtr_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_base, TNode<IntPtrT> p_offset);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=916&c=37
TorqueStructReference_int64_0 GetRefAt_int64_RawPtr_intptr_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_base, TNode<IntPtrT> p_offset);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=925&c=58
TorqueStructReference_float64_0 GetRefAt_float64_RawPtr_intptr_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_base, TNode<IntPtrT> p_offset);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=935&c=13
TorqueStructReference_float32_0 GetRefAt_float32_RawPtr_intptr_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_base, TNode<IntPtrT> p_offset);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=958&c=23
TorqueStructReference_uintptr_0 GetRefAt_uintptr_RawPtr_uintptr_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_base, TNode<IntPtrT> p_offset);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=1029&c=37
TorqueStructReference_int64_0 RefCast_int64_0(compiler::CodeAssemblerState* state_, TorqueStructReference_intptr_0 p_i);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=1031&c=16
TorqueStructReference_int32_0 RefCast_int32_0(compiler::CodeAssemblerState* state_, TorqueStructReference_intptr_0 p_i);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=156&c=10
TorqueStructReference_float32_0 NewReference_float32_0(compiler::CodeAssemblerState* state_, TNode<Union<HeapObject, TaggedIndex>> p_object, TNode<IntPtrT> p_offset);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=156&c=10
TorqueStructReference_int64_0 NewReference_int64_0(compiler::CodeAssemblerState* state_, TNode<Union<HeapObject, TaggedIndex>> p_object, TNode<IntPtrT> p_offset);

// https://crsrc.org/c/v8/src/builtins/js-to-wasm.tq?l=156&c=10
TorqueStructReference_int32_0 NewReference_int32_0(compiler::CodeAssemblerState* state_, TNode<Union<HeapObject, TaggedIndex>> p_object, TNode<IntPtrT> p_offset);

} // namespace internal
} // namespace v8

#endif // V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_JS_TO_WASM_TQ_CSA_H_
