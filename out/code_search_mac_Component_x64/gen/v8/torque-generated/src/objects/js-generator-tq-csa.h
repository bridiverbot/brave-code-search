#ifndef V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_JS_GENERATOR_TQ_CSA_H_
#define V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_JS_GENERATOR_TQ_CSA_H_

#include "src/builtins/torque-csa-header-includes.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=15&c=1
TNode<JSGeneratorObject> Cast_JSGeneratorObject_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=41&c=1
TNode<JSAsyncFunctionObject> Cast_JSAsyncFunctionObject_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=50&c=1
TNode<JSAsyncGeneratorObject> Cast_JSAsyncGeneratorObject_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=59&c=1
TNode<AsyncGeneratorRequest> Cast_AsyncGeneratorRequest_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=17&c=3
TNode<JSFunction> LoadJSGeneratorObjectFunction_0(compiler::CodeAssemblerState* state_, TNode<JSGeneratorObject> p_o);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=17&c=3
void StoreJSGeneratorObjectFunction_0(compiler::CodeAssemblerState* state_, TNode<JSGeneratorObject> p_o, TNode<JSFunction> p_v);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=18&c=3
TNode<Context> LoadJSGeneratorObjectContext_0(compiler::CodeAssemblerState* state_, TNode<JSGeneratorObject> p_o);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=18&c=3
void StoreJSGeneratorObjectContext_0(compiler::CodeAssemblerState* state_, TNode<JSGeneratorObject> p_o, TNode<Context> p_v);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=19&c=3
TNode<JSAny> LoadJSGeneratorObjectReceiver_0(compiler::CodeAssemblerState* state_, TNode<JSGeneratorObject> p_o);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=19&c=3
void StoreJSGeneratorObjectReceiver_0(compiler::CodeAssemblerState* state_, TNode<JSGeneratorObject> p_o, TNode<JSAny> p_v);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=25&c=3
TNode<Object> LoadJSGeneratorObjectInputOrDebugPos_0(compiler::CodeAssemblerState* state_, TNode<JSGeneratorObject> p_o);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=25&c=3
void StoreJSGeneratorObjectInputOrDebugPos_0(compiler::CodeAssemblerState* state_, TNode<JSGeneratorObject> p_o, TNode<Object> p_v);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=28&c=3
TNode<Smi> LoadJSGeneratorObjectResumeMode_0(compiler::CodeAssemblerState* state_, TNode<JSGeneratorObject> p_o);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=28&c=3
void StoreJSGeneratorObjectResumeMode_0(compiler::CodeAssemblerState* state_, TNode<JSGeneratorObject> p_o, TNode<Smi> p_v);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=33&c=3
TNode<Smi> LoadJSGeneratorObjectContinuation_0(compiler::CodeAssemblerState* state_, TNode<JSGeneratorObject> p_o);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=33&c=3
void StoreJSGeneratorObjectContinuation_0(compiler::CodeAssemblerState* state_, TNode<JSGeneratorObject> p_o, TNode<Smi> p_v);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=36&c=3
TNode<FixedArray> LoadJSGeneratorObjectParametersAndRegisters_0(compiler::CodeAssemblerState* state_, TNode<JSGeneratorObject> p_o);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=36&c=3
void StoreJSGeneratorObjectParametersAndRegisters_0(compiler::CodeAssemblerState* state_, TNode<JSGeneratorObject> p_o, TNode<FixedArray> p_v);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=38&c=3
TNode<JSAny> LoadJSGeneratorObjectYieldedValue_0(compiler::CodeAssemblerState* state_, TNode<JSGeneratorObject> p_o);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=38&c=3
void StoreJSGeneratorObjectYieldedValue_0(compiler::CodeAssemblerState* state_, TNode<JSGeneratorObject> p_o, TNode<JSAny> p_v);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=43&c=3
TNode<JSPromise> LoadJSAsyncFunctionObjectPromise_0(compiler::CodeAssemblerState* state_, TNode<JSAsyncFunctionObject> p_o);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=43&c=3
void StoreJSAsyncFunctionObjectPromise_0(compiler::CodeAssemblerState* state_, TNode<JSAsyncFunctionObject> p_o, TNode<JSPromise> p_v);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=46&c=3
TNode<Union<JSFunction, Undefined>> LoadJSAsyncFunctionObjectAwaitResolveClosure_0(compiler::CodeAssemblerState* state_, TNode<JSAsyncFunctionObject> p_o);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=46&c=3
void StoreJSAsyncFunctionObjectAwaitResolveClosure_0(compiler::CodeAssemblerState* state_, TNode<JSAsyncFunctionObject> p_o, TNode<Union<JSFunction, Undefined>> p_v);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=47&c=3
TNode<Union<JSFunction, Undefined>> LoadJSAsyncFunctionObjectAwaitRejectClosure_0(compiler::CodeAssemblerState* state_, TNode<JSAsyncFunctionObject> p_o);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=47&c=3
void StoreJSAsyncFunctionObjectAwaitRejectClosure_0(compiler::CodeAssemblerState* state_, TNode<JSAsyncFunctionObject> p_o, TNode<Union<JSFunction, Undefined>> p_v);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=54&c=3
TNode<Union<AsyncGeneratorRequest, Undefined>> LoadJSAsyncGeneratorObjectQueue_0(compiler::CodeAssemblerState* state_, TNode<JSAsyncGeneratorObject> p_o);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=54&c=3
void StoreJSAsyncGeneratorObjectQueue_0(compiler::CodeAssemblerState* state_, TNode<JSAsyncGeneratorObject> p_o, TNode<Union<AsyncGeneratorRequest, Undefined>> p_v);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=56&c=3
TNode<Smi> LoadJSAsyncGeneratorObjectIsAwaiting_0(compiler::CodeAssemblerState* state_, TNode<JSAsyncGeneratorObject> p_o);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=56&c=3
void StoreJSAsyncGeneratorObjectIsAwaiting_0(compiler::CodeAssemblerState* state_, TNode<JSAsyncGeneratorObject> p_o, TNode<Smi> p_v);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=61&c=3
TNode<Union<AsyncGeneratorRequest, Undefined>> LoadAsyncGeneratorRequestNext_0(compiler::CodeAssemblerState* state_, TNode<AsyncGeneratorRequest> p_o);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=61&c=3
void StoreAsyncGeneratorRequestNext_0(compiler::CodeAssemblerState* state_, TNode<AsyncGeneratorRequest> p_o, TNode<Union<AsyncGeneratorRequest, Undefined>> p_v);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=62&c=3
TNode<Smi> LoadAsyncGeneratorRequestResumeMode_0(compiler::CodeAssemblerState* state_, TNode<AsyncGeneratorRequest> p_o);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=62&c=3
void StoreAsyncGeneratorRequestResumeMode_0(compiler::CodeAssemblerState* state_, TNode<AsyncGeneratorRequest> p_o, TNode<Smi> p_v);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=63&c=3
TNode<Object> LoadAsyncGeneratorRequestValue_0(compiler::CodeAssemblerState* state_, TNode<AsyncGeneratorRequest> p_o);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=63&c=3
void StoreAsyncGeneratorRequestValue_0(compiler::CodeAssemblerState* state_, TNode<AsyncGeneratorRequest> p_o, TNode<Object> p_v);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=64&c=3
TNode<JSPromise> LoadAsyncGeneratorRequestPromise_0(compiler::CodeAssemblerState* state_, TNode<AsyncGeneratorRequest> p_o);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=64&c=3
void StoreAsyncGeneratorRequestPromise_0(compiler::CodeAssemblerState* state_, TNode<AsyncGeneratorRequest> p_o, TNode<JSPromise> p_v);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=15&c=1
TNode<JSGeneratorObject> DownCastForTorqueClass_JSGeneratorObject_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=41&c=1
TNode<JSAsyncFunctionObject> DownCastForTorqueClass_JSAsyncFunctionObject_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=50&c=1
TNode<JSAsyncGeneratorObject> DownCastForTorqueClass_JSAsyncGeneratorObject_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-generator.tq?l=59&c=1
TNode<AsyncGeneratorRequest> DownCastForTorqueClass_AsyncGeneratorRequest_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

} // namespace internal
} // namespace v8

#endif // V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_JS_GENERATOR_TQ_CSA_H_
