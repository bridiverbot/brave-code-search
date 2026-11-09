#ifndef V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_JS_INTERCEPTOR_MAP_TQ_CSA_H_
#define V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_JS_INTERCEPTOR_MAP_TQ_CSA_H_

#include "src/builtins/torque-csa-header-includes.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/objects/js-interceptor-map.tq?l=11&c=3
TNode<Uint8T> LoadJSInterceptorMapFlags_0(compiler::CodeAssemblerState* state_, TNode<JSInterceptorMap> p_o);

// https://crsrc.org/c/v8/src/objects/js-interceptor-map.tq?l=11&c=3
void StoreJSInterceptorMapFlags_0(compiler::CodeAssemblerState* state_, TNode<JSInterceptorMap> p_o, TNode<Uint8T> p_v);

// https://crsrc.org/c/v8/src/objects/js-interceptor-map.tq?l=12&c=31
TorqueStructSlice_uint8_MutableReference_uint8_0 FieldSliceJSInterceptorMapExtendedPadding_0(compiler::CodeAssemblerState* state_, TNode<JSInterceptorMap> p_o);

// https://crsrc.org/c/v8/src/objects/js-interceptor-map.tq?l=12&c=31
TNode<Uint8T> LoadJSInterceptorMapExtendedPadding_0(compiler::CodeAssemblerState* state_, TNode<JSInterceptorMap> p_o, TNode<IntPtrT> p_i);

// https://crsrc.org/c/v8/src/objects/js-interceptor-map.tq?l=12&c=31
void StoreJSInterceptorMapExtendedPadding_0(compiler::CodeAssemblerState* state_, TNode<JSInterceptorMap> p_o, TNode<IntPtrT> p_i, TNode<Uint8T> p_v);

// https://crsrc.org/c/v8/src/objects/js-interceptor-map.tq?l=14&c=3
TNode<InterceptorInfo> LoadJSInterceptorMapNamedInterceptor_0(compiler::CodeAssemblerState* state_, TNode<JSInterceptorMap> p_o);

// https://crsrc.org/c/v8/src/objects/js-interceptor-map.tq?l=14&c=3
void StoreJSInterceptorMapNamedInterceptor_0(compiler::CodeAssemblerState* state_, TNode<JSInterceptorMap> p_o, TNode<InterceptorInfo> p_v);

// https://crsrc.org/c/v8/src/objects/js-interceptor-map.tq?l=15&c=3
TNode<InterceptorInfo> LoadJSInterceptorMapIndexedInterceptor_0(compiler::CodeAssemblerState* state_, TNode<JSInterceptorMap> p_o);

// https://crsrc.org/c/v8/src/objects/js-interceptor-map.tq?l=15&c=3
void StoreJSInterceptorMapIndexedInterceptor_0(compiler::CodeAssemblerState* state_, TNode<JSInterceptorMap> p_o, TNode<InterceptorInfo> p_v);

// https://crsrc.org/c/v8/src/objects/js-interceptor-map.tq?l=21&c=3
TNode<Cell> LoadJSInterceptorMapFastCaseValidityCell_0(compiler::CodeAssemblerState* state_, TNode<JSInterceptorMap> p_o);

// https://crsrc.org/c/v8/src/objects/js-interceptor-map.tq?l=21&c=3
void StoreJSInterceptorMapFastCaseValidityCell_0(compiler::CodeAssemblerState* state_, TNode<JSInterceptorMap> p_o, TNode<Cell> p_v);

} // namespace internal
} // namespace v8

#endif // V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_JS_INTERCEPTOR_MAP_TQ_CSA_H_
