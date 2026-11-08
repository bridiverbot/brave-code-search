#include "src/ast/ast.h"
#include "src/builtins/builtins-array-gen.h"
#include "src/builtins/builtins-bigint-gen.h"
#include "src/builtins/builtins-call-gen.h"
#include "src/builtins/builtins-collections-gen.h"
#include "src/builtins/builtins-constructor-gen.h"
#include "src/builtins/builtins-data-view-gen.h"
#include "src/builtins/builtins-iterator-gen.h"
#include "src/builtins/builtins-object-gen.h"
#include "src/builtins/builtins-promise-gen.h"
#include "src/builtins/builtins-promise.h"
#include "src/builtins/builtins-proxy-gen.h"
#include "src/builtins/builtins-regexp-gen.h"
#include "src/builtins/builtins-string-gen.h"
#include "src/builtins/builtins-string-gen.h"
#include "src/builtins/builtins-typed-array-gen.h"
#include "src/builtins/builtins-utils-gen.h"
#include "src/builtins/builtins-wasm-gen.h"
#include "src/builtins/builtins.h"
#include "src/codegen/code-factory.h"
#include "src/debug/debug-wasm-objects.h"
#include "src/heap/factory-inl.h"
#include "src/ic/binary-op-assembler.h"
#include "src/ic/handler-configuration-inl.h"
#include "src/objects/arguments.h"
#include "src/objects/bigint.h"
#include "src/objects/call-site-info.h"
#include "src/objects/elements-kind.h"
#include "src/objects/free-space.h"
#include "src/objects/hash-seed-wrapper.h"
#include "src/objects/intl-objects.h"
#include "src/objects/js-break-iterator.h"
#include "src/objects/js-collator.h"
#include "src/objects/js-date-time-format.h"
#include "src/objects/js-display-names.h"
#include "src/objects/js-disposable-stack.h"
#include "src/objects/js-duration-format.h"
#include "src/objects/js-function.h"
#include "src/objects/js-generator.h"
#include "src/objects/js-iterator-helpers.h"
#include "src/objects/js-list-format.h"
#include "src/objects/js-locale.h"
#include "src/objects/js-number-format.h"
#include "src/objects/js-objects.h"
#include "src/objects/js-plural-rules.h"
#include "src/objects/js-promise.h"
#include "src/objects/js-raw-json.h"
#include "src/objects/js-regexp-string-iterator.h"
#include "src/objects/js-relative-time-format.h"
#include "src/objects/js-segment-iterator-inl.h"
#include "src/objects/js-segmenter.h"
#include "src/objects/js-segments.h"
#include "src/objects/js-shadow-realm.h"
#include "src/objects/js-shared-array.h"
#include "src/objects/js-struct.h"
#include "src/objects/js-temporal-objects.h"
#include "src/objects/js-weak-refs.h"
#include "src/objects/megadom-handler.h"
#include "src/objects/objects.h"
#include "src/objects/ordered-hash-table.h"
#include "src/objects/property-array.h"
#include "src/objects/property-descriptor-object.h"
#include "src/objects/sort-state.h"
#include "src/objects/source-text-module.h"
#include "src/objects/swiss-hash-table-helpers.h"
#include "src/objects/swiss-name-dictionary.h"
#include "src/objects/synthetic-module.h"
#include "src/objects/template-objects.h"
#include "src/objects/turbofan-types.h"
#include "src/objects/turboshaft-types.h"
#include "src/torque/runtime-support.h"
#include "src/wasm/value-type.h"
#include "src/wasm/wasm-linkage.h"
#include "src/wasm/wasm-module.h"
#include "src/codegen/code-stub-assembler-inl.h"
// Required Builtins:
#include "torque-generated/src/builtins/array-map-tq-csa.h"
#include "torque-generated/src/builtins/array-every-tq-csa.h"
#include "torque-generated/src/builtins/array-flat-tq-csa.h"
#include "torque-generated/src/builtins/array-map-tq-csa.h"
#include "torque-generated/src/builtins/base-tq-csa.h"
#include "torque-generated/src/builtins/cast-tq-csa.h"
#include "torque-generated/src/builtins/convert-tq-csa.h"
#include "torque-generated/src/builtins/frame-arguments-tq-csa.h"
#include "torque-generated/src/builtins/torque-internal-tq-csa.h"
#include "torque-generated/src/objects/fixed-array-base-tq-csa.h"
#include "torque-generated/src/objects/fixed-array-tq-csa.h"
#include "torque-generated/src/objects/fixed-primitive-array-tq-csa.h"
#include "torque-generated/src/objects/heap-number-tq-csa.h"
#include "torque-generated/src/objects/js-array-tq-csa.h"

namespace v8 {
namespace internal {

TF_BUILTIN(ArrayMapPreLoopLazyDeoptContinuation, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<NativeContext> parameter0 = UncheckedParameter<NativeContext>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<JSAny> parameter2 = UncheckedParameter<JSAny>(Descriptor::kCallback);
  USE(parameter2);
  TNode<JSAny> parameter3 = UncheckedParameter<JSAny>(Descriptor::kThisArg);
  USE(parameter3);
  TNode<JSAny> parameter4 = UncheckedParameter<JSAny>(Descriptor::kLength);
  USE(parameter4);
  TNode<JSAny> parameter5 = UncheckedParameter<JSAny>(Descriptor::kResult);
  USE(parameter5);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSReceiver> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_JSReceiver_1(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1}, &label1);
    ca_.Goto(&block3);
    if (label1.is_used()) {
      ca_.Bind(&label1);
      ca_.Goto(&block4);
    }
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/array-map.tq:11:59");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<JSReceiver> tmp2;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    compiler::CodeAssemblerLabel label3(&ca_);
    tmp2 = Cast_JSReceiver_1(state_, TNode<Context>{parameter0}, TNode<Object>{parameter5}, &label3);
    ca_.Goto(&block7);
    if (label3.is_used()) {
      ca_.Bind(&label3);
      ca_.Goto(&block8);
    }
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/array-map.tq:12:58");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Number> tmp4;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    compiler::CodeAssemblerLabel label5(&ca_);
    tmp4 = Cast_Number_0(state_, TNode<Object>{parameter4}, &label5);
    ca_.Goto(&block11);
    if (label5.is_used()) {
      ca_.Bind(&label5);
      ca_.Goto(&block12);
    }
  }

  if (block12.is_used()) {
    ca_.Bind(&block12);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/array-map.tq:13:55");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>> tmp6;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    compiler::CodeAssemblerLabel label7(&ca_);
    tmp6 = Cast_Callable_1(state_, TNode<Context>{parameter0}, TNode<Object>{parameter2}, &label7);
    ca_.Goto(&block15);
    if (label7.is_used()) {
      ca_.Bind(&label7);
      ca_.Goto(&block16);
    }
  }

  if (block16.is_used()) {
    ca_.Bind(&block16);
    CodeStubAssembler(state_).CallRuntime(Runtime::kThrowCalledNonCallable, parameter0, parameter2);
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Smi> tmp8;
  TNode<JSAny> tmp9;
  if (block15.is_used()) {
    ca_.Bind(&block15);
    tmp8 = kZero_0(state_);
    tmp9 = ca_.CallBuiltin<JSAny>(Builtin::kArrayMapLoopContinuation, parameter0, tmp0, tmp6, parameter3, tmp2, tmp0, tmp8, tmp4);
    CodeStubAssembler(state_).Return(tmp9);
  }
}

TF_BUILTIN(ArrayMapLoopEagerDeoptContinuation, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<NativeContext> parameter0 = UncheckedParameter<NativeContext>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<JSAny> parameter2 = UncheckedParameter<JSAny>(Descriptor::kCallback);
  USE(parameter2);
  TNode<JSAny> parameter3 = UncheckedParameter<JSAny>(Descriptor::kThisArg);
  USE(parameter3);
  TNode<JSAny> parameter4 = UncheckedParameter<JSAny>(Descriptor::kArray);
  USE(parameter4);
  TNode<JSAny> parameter5 = UncheckedParameter<JSAny>(Descriptor::kInitialK);
  USE(parameter5);
  TNode<JSAny> parameter6 = UncheckedParameter<JSAny>(Descriptor::kLength);
  USE(parameter6);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSReceiver> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_JSReceiver_1(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1}, &label1);
    ca_.Goto(&block3);
    if (label1.is_used()) {
      ca_.Bind(&label1);
      ca_.Goto(&block4);
    }
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/array-map.tq:25:59");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>> tmp2;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    compiler::CodeAssemblerLabel label3(&ca_);
    tmp2 = Cast_Callable_1(state_, TNode<Context>{parameter0}, TNode<Object>{parameter2}, &label3);
    ca_.Goto(&block7);
    if (label3.is_used()) {
      ca_.Bind(&label3);
      ca_.Goto(&block8);
    }
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/array-map.tq:26:57");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<JSReceiver> tmp4;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    compiler::CodeAssemblerLabel label5(&ca_);
    tmp4 = Cast_JSReceiver_1(state_, TNode<Context>{parameter0}, TNode<Object>{parameter4}, &label5);
    ca_.Goto(&block11);
    if (label5.is_used()) {
      ca_.Bind(&label5);
      ca_.Goto(&block12);
    }
  }

  if (block12.is_used()) {
    ca_.Bind(&block12);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/array-map.tq:27:57");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Number> tmp6;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    compiler::CodeAssemblerLabel label7(&ca_);
    tmp6 = Cast_Number_0(state_, TNode<Object>{parameter5}, &label7);
    ca_.Goto(&block15);
    if (label7.is_used()) {
      ca_.Bind(&label7);
      ca_.Goto(&block16);
    }
  }

  if (block16.is_used()) {
    ca_.Bind(&block16);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/array-map.tq:28:52");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Number> tmp8;
  if (block15.is_used()) {
    ca_.Bind(&block15);
    compiler::CodeAssemblerLabel label9(&ca_);
    tmp8 = Cast_Number_0(state_, TNode<Object>{parameter6}, &label9);
    ca_.Goto(&block19);
    if (label9.is_used()) {
      ca_.Bind(&label9);
      ca_.Goto(&block20);
    }
  }

  if (block20.is_used()) {
    ca_.Bind(&block20);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/array-map.tq:29:55");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<JSAny> tmp10;
  if (block19.is_used()) {
    ca_.Bind(&block19);
    tmp10 = ca_.CallBuiltin<JSAny>(Builtin::kArrayMapLoopContinuation, parameter0, tmp0, tmp2, parameter3, tmp4, tmp0, tmp6, tmp8);
    CodeStubAssembler(state_).Return(tmp10);
  }
}

TF_BUILTIN(ArrayMapLoopLazyDeoptContinuation, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<NativeContext> parameter0 = UncheckedParameter<NativeContext>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<JSAny> parameter2 = UncheckedParameter<JSAny>(Descriptor::kCallback);
  USE(parameter2);
  TNode<JSAny> parameter3 = UncheckedParameter<JSAny>(Descriptor::kThisArg);
  USE(parameter3);
  TNode<JSAny> parameter4 = UncheckedParameter<JSAny>(Descriptor::kArray);
  USE(parameter4);
  TNode<JSAny> parameter5 = UncheckedParameter<JSAny>(Descriptor::kInitialK);
  USE(parameter5);
  TNode<JSAny> parameter6 = UncheckedParameter<JSAny>(Descriptor::kLength);
  USE(parameter6);
  TNode<JSAny> parameter7 = UncheckedParameter<JSAny>(Descriptor::kResult);
  USE(parameter7);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSReceiver> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_JSReceiver_1(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1}, &label1);
    ca_.Goto(&block3);
    if (label1.is_used()) {
      ca_.Bind(&label1);
      ca_.Goto(&block4);
    }
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/array-map.tq:40:59");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>> tmp2;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    compiler::CodeAssemblerLabel label3(&ca_);
    tmp2 = Cast_Callable_1(state_, TNode<Context>{parameter0}, TNode<Object>{parameter2}, &label3);
    ca_.Goto(&block7);
    if (label3.is_used()) {
      ca_.Bind(&label3);
      ca_.Goto(&block8);
    }
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/array-map.tq:41:57");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<JSReceiver> tmp4;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    compiler::CodeAssemblerLabel label5(&ca_);
    tmp4 = Cast_JSReceiver_1(state_, TNode<Context>{parameter0}, TNode<Object>{parameter4}, &label5);
    ca_.Goto(&block11);
    if (label5.is_used()) {
      ca_.Bind(&label5);
      ca_.Goto(&block12);
    }
  }

  if (block12.is_used()) {
    ca_.Bind(&block12);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/array-map.tq:42:57");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Number> tmp6;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    compiler::CodeAssemblerLabel label7(&ca_);
    tmp6 = Cast_Number_0(state_, TNode<Object>{parameter5}, &label7);
    ca_.Goto(&block15);
    if (label7.is_used()) {
      ca_.Bind(&label7);
      ca_.Goto(&block16);
    }
  }

  if (block16.is_used()) {
    ca_.Bind(&block16);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/array-map.tq:43:50");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Number> tmp8;
  if (block15.is_used()) {
    ca_.Bind(&block15);
    compiler::CodeAssemblerLabel label9(&ca_);
    tmp8 = Cast_Number_0(state_, TNode<Object>{parameter6}, &label9);
    ca_.Goto(&block19);
    if (label9.is_used()) {
      ca_.Bind(&label9);
      ca_.Goto(&block20);
    }
  }

  if (block20.is_used()) {
    ca_.Bind(&block20);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/array-map.tq:44:55");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Object> tmp10;
  TNode<Number> tmp11;
  TNode<Number> tmp12;
  TNode<JSAny> tmp13;
  if (block19.is_used()) {
    ca_.Bind(&block19);
    tmp10 = ca_.CallBuiltin<Object>(Builtin::kFastCreateDataProperty, parameter0, tmp4, tmp6, parameter7);
    tmp11 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp12 = CodeStubAssembler(state_).NumberAdd(TNode<Number>{tmp6}, TNode<Number>{tmp11});
    tmp13 = ca_.CallBuiltin<JSAny>(Builtin::kArrayMapLoopContinuation, parameter0, tmp0, tmp2, parameter3, tmp4, tmp0, tmp12, tmp8);
    CodeStubAssembler(state_).Return(tmp13);
  }
}

TF_BUILTIN(ArrayMapLoopContinuation, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSReceiver> parameter1 = UncheckedParameter<JSReceiver>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>> parameter2 = UncheckedParameter<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>>(Descriptor::kCallbackfn);
  USE(parameter2);
  TNode<JSAny> parameter3 = UncheckedParameter<JSAny>(Descriptor::kThisArg);
  USE(parameter3);
  TNode<JSReceiver> parameter4 = UncheckedParameter<JSReceiver>(Descriptor::kArray);
  USE(parameter4);
  TNode<JSReceiver> parameter5 = UncheckedParameter<JSReceiver>(Descriptor::kO);
  USE(parameter5);
  TNode<Number> parameter6 = UncheckedParameter<Number>(Descriptor::kInitialK);
  USE(parameter6);
  TNode<Number> parameter7 = UncheckedParameter<Number>(Descriptor::kLength);
  USE(parameter7);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  if (block0.is_used()) {
    ca_.Bind(&block0);
    ca_.Goto(&block3, parameter6);
  }

  TNode<Number> phi_bb3_8;
  TNode<BoolT> tmp0;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_8);
    tmp0 = NumberIsLessThan_0(state_, TNode<Number>{phi_bb3_8}, TNode<Number>{parameter7});
    ca_.Branch(tmp0, &block1, std::vector<compiler::Node*>{phi_bb3_8}, &block2, std::vector<compiler::Node*>{phi_bb3_8});
  }

  TNode<Number> phi_bb1_8;
  TNode<Boolean> tmp1;
  TNode<True> tmp2;
  TNode<BoolT> tmp3;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_8);
    tmp1 = CodeStubAssembler(state_).HasProperty_Inline(TNode<Context>{parameter0}, TNode<JSReceiver>{parameter5}, TNode<JSAny>{phi_bb1_8});
    tmp2 = True_0(state_);
    tmp3 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp1}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp2});
    ca_.Branch(tmp3, &block5, std::vector<compiler::Node*>{phi_bb1_8}, &block6, std::vector<compiler::Node*>{phi_bb1_8});
  }

  TNode<Number> phi_bb5_8;
  TNode<JSAny> tmp4;
  TNode<JSAny> tmp5;
  TNode<Object> tmp6;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_8);
    tmp4 = CodeStubAssembler(state_).GetProperty(TNode<Context>{parameter0}, TNode<JSAny>{parameter5}, TNode<JSAny>{phi_bb5_8});
    tmp5 = CodeStubAssembler(state_).Call(TNode<Context>{parameter0}, TNode<JSAny>{parameter2}, TNode<JSAny>{parameter3}, TNode<JSAny>{tmp4}, TNode<JSAny>{phi_bb5_8}, TNode<JSAny>{parameter5});
    tmp6 = ca_.CallBuiltin<Object>(Builtin::kFastCreateDataProperty, parameter0, parameter4, phi_bb5_8, tmp5);
    ca_.Goto(&block6, phi_bb5_8);
  }

  TNode<Number> phi_bb6_8;
  TNode<Number> tmp7;
  TNode<Number> tmp8;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_8);
    tmp7 = FromConstexpr_Number_constexpr_int31_0(state_, 1);
    tmp8 = CodeStubAssembler(state_).NumberAdd(TNode<Number>{phi_bb6_8}, TNode<Number>{tmp7});
    ca_.Goto(&block3, tmp8);
  }

  TNode<Number> phi_bb2_8;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_8);
    CodeStubAssembler(state_).Return(parameter4);
  }
}

// https://crsrc.org/c/v8/src/builtins/array-map.tq?l=208&c=1
TorqueStructVector_0 NewVector_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Smi> p_length) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = CodeStubAssembler(state_).SmiGreaterThan(TNode<Smi>{p_length}, TNode<Smi>{tmp0});
    ca_.Branch(tmp1, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp2;
  TNode<FixedArray> tmp3;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp2 = CodeStubAssembler(state_).SmiUntag(TNode<Smi>{p_length});
    tmp3 = CodeStubAssembler(state_).AllocateFixedArrayWithHoles(TNode<IntPtrT>{tmp2});
    ca_.Goto(&block4, tmp3);
  }

  TNode<FixedArray> tmp4;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp4 = kEmptyFixedArray_0(state_);
    ca_.Goto(&block4, tmp4);
  }

  TNode<FixedArray> phi_bb4_2;
  TNode<BoolT> tmp5;
  TNode<BoolT> tmp6;
  TNode<BoolT> tmp7;
  TNode<BoolT> tmp8;
  if (block4.is_used()) {
    ca_.Bind(&block4, &phi_bb4_2);
    tmp5 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    tmp6 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    tmp7 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    tmp8 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block6);
  }

    ca_.Bind(&block6);
  return TorqueStructVector_0{TNode<FixedArray>{phi_bb4_2}, TNode<BoolT>{tmp5}, TNode<BoolT>{tmp6}, TNode<BoolT>{tmp7}, TNode<BoolT>{tmp8}};
}

// https://crsrc.org/c/v8/src/builtins/array-map.tq?l=221&c=1
TNode<JSArray> FastArrayMap_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSArray> p_fastO, TNode<Smi> p_len, TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>> p_callbackfn, TNode<JSAny> p_thisArg, compiler::CodeAssemblerLabel* label_Bailout, compiler::TypedCodeAssemblerVariable<JSArray>* label_Bailout_parameter_0, compiler::TypedCodeAssemblerVariable<Smi>* label_Bailout_parameter_1) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, BoolT> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, BoolT> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, BoolT, Smi, Smi> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, BoolT, Smi, Smi> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, BoolT, Smi, Smi, JSAny> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, BoolT, Smi, Smi> block34(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, BoolT, Smi, Smi> block33(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Smi> block39(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Smi> block40(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, BoolT, Smi, Smi> block46(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, BoolT, Smi, Smi> block45(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, Smi, Smi, Smi, Smi> block51(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, Smi, Smi, Smi, Smi> block52(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, BoolT, Smi, Smi> block58(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, BoolT, Smi, Smi> block57(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, Smi, Smi, Smi, Smi> block63(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, Smi, Smi, Smi, Smi> block64(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, Smi, Smi, Smi, Smi> block71(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, Smi, Smi, Smi, Smi> block72(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, BoolT, Smi, Smi> block55(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, BoolT, Smi, Smi> block43(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, BoolT, Smi, Smi> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, BoolT> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT, BoolT, BoolT, BoolT> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi> block4(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi> block78(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi> block77(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi> block79(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi> block81(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi> block82(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi> block84(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi> block88(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi> block87(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi> block85(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Int32T> block86(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Int32T> block83(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Int32T> block80(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Int32T, BoolT> block91(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Int32T, BoolT> block92(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Int32T, BoolT, BoolT> block93(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Int32T> block89(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Int32T> block90(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi> block94(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Smi> block99(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Smi> block97(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Smi, Smi, Smi> block105(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Smi, Smi, Smi> block106(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Smi> block112(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Smi> block111(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Smi, Smi, Smi> block117(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Smi, Smi, Smi> block118(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Smi> block124(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Smi> block123(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Smi, Smi, Smi> block129(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Smi, Smi, Smi> block130(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Smi> block121(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Smi> block109(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, Smi> block98(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi> block95(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi, JSArray> block96(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT> block135(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT> block134(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT> block136(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT> block138(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT> block139(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT> block141(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT> block145(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT> block144(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT> block142(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Int32T> block143(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Int32T> block140(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Int32T> block137(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Int32T, BoolT> block148(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Int32T, BoolT> block149(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Int32T, BoolT, BoolT> block150(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Int32T> block146(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Int32T> block147(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT> block151(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi> block156(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi> block154(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi> block162(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi> block163(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi> block169(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi> block168(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi> block174(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi> block175(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi> block181(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi> block180(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi> block186(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi, Smi, Smi> block187(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi> block178(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi> block166(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, Smi> block155(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT> block152(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, JSArray, BoolT, BoolT, BoolT, BoolT, JSArray> block153(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSArray> block190(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  TNode<JSArray> tmp1;
  TNode<JSArray> tmp2;
  TNode<Map> tmp3;
  TNode<BoolT> tmp4;
  TNode<FixedArray> tmp5;
  TNode<BoolT> tmp6;
  TNode<BoolT> tmp7;
  TNode<BoolT> tmp8;
  TNode<BoolT> tmp9;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    std::tie(tmp1, tmp2, tmp3, tmp4) = NewFastJSArrayForReadWitness_0(state_, TNode<JSArray>{p_fastO}).Flatten();
    std::tie(tmp5, tmp6, tmp7, tmp8, tmp9) = NewVector_0(state_, TNode<Context>{p_context}, TNode<Smi>{p_len}).Flatten();
    ca_.Goto(&block7, tmp0, tmp2, tmp6, tmp7, tmp8, tmp9);
  }

  TNode<Smi> phi_bb7_5;
  TNode<JSArray> phi_bb7_7;
  TNode<BoolT> phi_bb7_11;
  TNode<BoolT> phi_bb7_12;
  TNode<BoolT> phi_bb7_13;
  TNode<BoolT> phi_bb7_14;
  TNode<BoolT> tmp10;
  if (block7.is_used()) {
    ca_.Bind(&block7, &phi_bb7_5, &phi_bb7_7, &phi_bb7_11, &phi_bb7_12, &phi_bb7_13, &phi_bb7_14);
    tmp10 = CodeStubAssembler(state_).SmiLessThan(TNode<Smi>{phi_bb7_5}, TNode<Smi>{p_len});
    ca_.Branch(tmp10, &block5, std::vector<compiler::Node*>{phi_bb7_5, phi_bb7_7, phi_bb7_11, phi_bb7_12, phi_bb7_13, phi_bb7_14}, &block6, std::vector<compiler::Node*>{phi_bb7_5, phi_bb7_7, phi_bb7_11, phi_bb7_12, phi_bb7_13, phi_bb7_14});
  }

  TNode<Smi> phi_bb5_5;
  TNode<JSArray> phi_bb5_7;
  TNode<BoolT> phi_bb5_11;
  TNode<BoolT> phi_bb5_12;
  TNode<BoolT> phi_bb5_13;
  TNode<BoolT> phi_bb5_14;
  TNode<IntPtrT> tmp11;
  TNode<Map> tmp12;
  TNode<BoolT> tmp13;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_5, &phi_bb5_7, &phi_bb5_11, &phi_bb5_12, &phi_bb5_13, &phi_bb5_14);
    tmp11 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    tmp12 = CodeStubAssembler(state_).LoadReference<Map>(CodeStubAssembler::Reference{tmp1, tmp11});
    tmp13 = CodeStubAssembler(state_).TaggedNotEqual(TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp12}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp3});
    ca_.Branch(tmp13, &block12, std::vector<compiler::Node*>{phi_bb5_5, phi_bb5_7, phi_bb5_11, phi_bb5_12, phi_bb5_13, phi_bb5_14}, &block13, std::vector<compiler::Node*>{phi_bb5_5, phi_bb5_7, phi_bb5_11, phi_bb5_12, phi_bb5_13, phi_bb5_14});
  }

  TNode<Smi> phi_bb12_5;
  TNode<JSArray> phi_bb12_7;
  TNode<BoolT> phi_bb12_11;
  TNode<BoolT> phi_bb12_12;
  TNode<BoolT> phi_bb12_13;
  TNode<BoolT> phi_bb12_14;
  if (block12.is_used()) {
    ca_.Bind(&block12, &phi_bb12_5, &phi_bb12_7, &phi_bb12_11, &phi_bb12_12, &phi_bb12_13, &phi_bb12_14);
    ca_.Goto(&block10, phi_bb12_5, phi_bb12_7, phi_bb12_11, phi_bb12_12, phi_bb12_13, phi_bb12_14);
  }

  TNode<Smi> phi_bb13_5;
  TNode<JSArray> phi_bb13_7;
  TNode<BoolT> phi_bb13_11;
  TNode<BoolT> phi_bb13_12;
  TNode<BoolT> phi_bb13_13;
  TNode<BoolT> phi_bb13_14;
  TNode<BoolT> tmp14;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_5, &phi_bb13_7, &phi_bb13_11, &phi_bb13_12, &phi_bb13_13, &phi_bb13_14);
    tmp14 = CodeStubAssembler(state_).IsNoElementsProtectorCellInvalid();
    ca_.Branch(tmp14, &block14, std::vector<compiler::Node*>{phi_bb13_5, phi_bb13_7, phi_bb13_11, phi_bb13_12, phi_bb13_13, phi_bb13_14}, &block15, std::vector<compiler::Node*>{phi_bb13_5, phi_bb13_7, phi_bb13_11, phi_bb13_12, phi_bb13_13, phi_bb13_14});
  }

  TNode<Smi> phi_bb14_5;
  TNode<JSArray> phi_bb14_7;
  TNode<BoolT> phi_bb14_11;
  TNode<BoolT> phi_bb14_12;
  TNode<BoolT> phi_bb14_13;
  TNode<BoolT> phi_bb14_14;
  if (block14.is_used()) {
    ca_.Bind(&block14, &phi_bb14_5, &phi_bb14_7, &phi_bb14_11, &phi_bb14_12, &phi_bb14_13, &phi_bb14_14);
    ca_.Goto(&block10, phi_bb14_5, phi_bb14_7, phi_bb14_11, phi_bb14_12, phi_bb14_13, phi_bb14_14);
  }

  TNode<Smi> phi_bb15_5;
  TNode<JSArray> phi_bb15_7;
  TNode<BoolT> phi_bb15_11;
  TNode<BoolT> phi_bb15_12;
  TNode<BoolT> phi_bb15_13;
  TNode<BoolT> phi_bb15_14;
  TNode<JSArray> tmp15;
  TNode<Smi> tmp16;
  TNode<BoolT> tmp17;
  if (block15.is_used()) {
    ca_.Bind(&block15, &phi_bb15_5, &phi_bb15_7, &phi_bb15_11, &phi_bb15_12, &phi_bb15_13, &phi_bb15_14);
    tmp15 = (TNode<JSArray>{tmp1});
    tmp16 = CodeStubAssembler(state_).LoadFastJSArrayLength(TNode<JSArray>{tmp15});
    tmp17 = CodeStubAssembler(state_).SmiGreaterThanOrEqual(TNode<Smi>{phi_bb15_5}, TNode<Smi>{tmp16});
    ca_.Branch(tmp17, &block16, std::vector<compiler::Node*>{phi_bb15_5, phi_bb15_11, phi_bb15_12, phi_bb15_13, phi_bb15_14}, &block17, std::vector<compiler::Node*>{phi_bb15_5, phi_bb15_11, phi_bb15_12, phi_bb15_13, phi_bb15_14});
  }

  TNode<Smi> phi_bb10_5;
  TNode<JSArray> phi_bb10_7;
  TNode<BoolT> phi_bb10_11;
  TNode<BoolT> phi_bb10_12;
  TNode<BoolT> phi_bb10_13;
  TNode<BoolT> phi_bb10_14;
  if (block10.is_used()) {
    ca_.Bind(&block10, &phi_bb10_5, &phi_bb10_7, &phi_bb10_11, &phi_bb10_12, &phi_bb10_13, &phi_bb10_14);
    ca_.Goto(&block4, phi_bb10_5, phi_bb10_7, phi_bb10_11, phi_bb10_12, phi_bb10_13, phi_bb10_14, phi_bb10_5);
  }

  TNode<Smi> phi_bb16_5;
  TNode<BoolT> phi_bb16_11;
  TNode<BoolT> phi_bb16_12;
  TNode<BoolT> phi_bb16_13;
  TNode<BoolT> phi_bb16_14;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_5, &phi_bb16_11, &phi_bb16_12, &phi_bb16_13, &phi_bb16_14);
    ca_.Goto(&block4, phi_bb16_5, tmp15, phi_bb16_11, phi_bb16_12, phi_bb16_13, phi_bb16_14, phi_bb16_5);
  }

  TNode<Smi> phi_bb17_5;
  TNode<BoolT> phi_bb17_11;
  TNode<BoolT> phi_bb17_12;
  TNode<BoolT> phi_bb17_13;
  TNode<BoolT> phi_bb17_14;
  if (block17.is_used()) {
    ca_.Bind(&block17, &phi_bb17_5, &phi_bb17_11, &phi_bb17_12, &phi_bb17_13, &phi_bb17_14);
    ca_.Branch(tmp4, &block22, std::vector<compiler::Node*>{phi_bb17_5, phi_bb17_11, phi_bb17_12, phi_bb17_13, phi_bb17_14, phi_bb17_5, phi_bb17_5}, &block23, std::vector<compiler::Node*>{phi_bb17_5, phi_bb17_11, phi_bb17_12, phi_bb17_13, phi_bb17_14, phi_bb17_5, phi_bb17_5});
  }

  TNode<Smi> phi_bb22_5;
  TNode<BoolT> phi_bb22_11;
  TNode<BoolT> phi_bb22_12;
  TNode<BoolT> phi_bb22_13;
  TNode<BoolT> phi_bb22_14;
  TNode<Smi> phi_bb22_15;
  TNode<Smi> phi_bb22_18;
  TNode<JSAny> tmp18;
  if (block22.is_used()) {
    ca_.Bind(&block22, &phi_bb22_5, &phi_bb22_11, &phi_bb22_12, &phi_bb22_13, &phi_bb22_14, &phi_bb22_15, &phi_bb22_18);
    compiler::CodeAssemblerLabel label19(&ca_);
    tmp18 = LoadElementNoHole_FixedDoubleArray_0(state_, TNode<Context>{p_context}, TNode<JSArray>{tmp15}, TNode<Smi>{phi_bb22_18}, &label19);
    ca_.Goto(&block25, phi_bb22_5, phi_bb22_11, phi_bb22_12, phi_bb22_13, phi_bb22_14, phi_bb22_15, phi_bb22_18, phi_bb22_18);
    if (label19.is_used()) {
      ca_.Bind(&label19);
      ca_.Goto(&block26, phi_bb22_5, phi_bb22_11, phi_bb22_12, phi_bb22_13, phi_bb22_14, phi_bb22_15, phi_bb22_18, phi_bb22_18);
    }
  }

  TNode<Smi> phi_bb26_5;
  TNode<BoolT> phi_bb26_11;
  TNode<BoolT> phi_bb26_12;
  TNode<BoolT> phi_bb26_13;
  TNode<BoolT> phi_bb26_14;
  TNode<Smi> phi_bb26_15;
  TNode<Smi> phi_bb26_18;
  TNode<Smi> phi_bb26_20;
  if (block26.is_used()) {
    ca_.Bind(&block26, &phi_bb26_5, &phi_bb26_11, &phi_bb26_12, &phi_bb26_13, &phi_bb26_14, &phi_bb26_15, &phi_bb26_18, &phi_bb26_20);
    ca_.Goto(&block20, phi_bb26_5, phi_bb26_11, phi_bb26_12, phi_bb26_13, phi_bb26_14);
  }

  TNode<Smi> phi_bb25_5;
  TNode<BoolT> phi_bb25_11;
  TNode<BoolT> phi_bb25_12;
  TNode<BoolT> phi_bb25_13;
  TNode<BoolT> phi_bb25_14;
  TNode<Smi> phi_bb25_15;
  TNode<Smi> phi_bb25_18;
  TNode<Smi> phi_bb25_20;
  if (block25.is_used()) {
    ca_.Bind(&block25, &phi_bb25_5, &phi_bb25_11, &phi_bb25_12, &phi_bb25_13, &phi_bb25_14, &phi_bb25_15, &phi_bb25_18, &phi_bb25_20);
    ca_.Goto(&block21, phi_bb25_5, phi_bb25_11, phi_bb25_12, phi_bb25_13, phi_bb25_14, phi_bb25_15, phi_bb25_18, tmp18);
  }

  TNode<Smi> phi_bb23_5;
  TNode<BoolT> phi_bb23_11;
  TNode<BoolT> phi_bb23_12;
  TNode<BoolT> phi_bb23_13;
  TNode<BoolT> phi_bb23_14;
  TNode<Smi> phi_bb23_15;
  TNode<Smi> phi_bb23_18;
  TNode<JSAny> tmp20;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_5, &phi_bb23_11, &phi_bb23_12, &phi_bb23_13, &phi_bb23_14, &phi_bb23_15, &phi_bb23_18);
    compiler::CodeAssemblerLabel label21(&ca_);
    tmp20 = LoadElementNoHole_FixedArray_0(state_, TNode<Context>{p_context}, TNode<JSArray>{tmp15}, TNode<Smi>{phi_bb23_18}, &label21);
    ca_.Goto(&block27, phi_bb23_5, phi_bb23_11, phi_bb23_12, phi_bb23_13, phi_bb23_14, phi_bb23_15, phi_bb23_18, phi_bb23_18);
    if (label21.is_used()) {
      ca_.Bind(&label21);
      ca_.Goto(&block28, phi_bb23_5, phi_bb23_11, phi_bb23_12, phi_bb23_13, phi_bb23_14, phi_bb23_15, phi_bb23_18, phi_bb23_18);
    }
  }

  TNode<Smi> phi_bb28_5;
  TNode<BoolT> phi_bb28_11;
  TNode<BoolT> phi_bb28_12;
  TNode<BoolT> phi_bb28_13;
  TNode<BoolT> phi_bb28_14;
  TNode<Smi> phi_bb28_15;
  TNode<Smi> phi_bb28_18;
  TNode<Smi> phi_bb28_20;
  if (block28.is_used()) {
    ca_.Bind(&block28, &phi_bb28_5, &phi_bb28_11, &phi_bb28_12, &phi_bb28_13, &phi_bb28_14, &phi_bb28_15, &phi_bb28_18, &phi_bb28_20);
    ca_.Goto(&block20, phi_bb28_5, phi_bb28_11, phi_bb28_12, phi_bb28_13, phi_bb28_14);
  }

  TNode<Smi> phi_bb27_5;
  TNode<BoolT> phi_bb27_11;
  TNode<BoolT> phi_bb27_12;
  TNode<BoolT> phi_bb27_13;
  TNode<BoolT> phi_bb27_14;
  TNode<Smi> phi_bb27_15;
  TNode<Smi> phi_bb27_18;
  TNode<Smi> phi_bb27_20;
  if (block27.is_used()) {
    ca_.Bind(&block27, &phi_bb27_5, &phi_bb27_11, &phi_bb27_12, &phi_bb27_13, &phi_bb27_14, &phi_bb27_15, &phi_bb27_18, &phi_bb27_20);
    ca_.Goto(&block21, phi_bb27_5, phi_bb27_11, phi_bb27_12, phi_bb27_13, phi_bb27_14, phi_bb27_15, phi_bb27_18, tmp20);
  }

  TNode<Smi> phi_bb21_5;
  TNode<BoolT> phi_bb21_11;
  TNode<BoolT> phi_bb21_12;
  TNode<BoolT> phi_bb21_13;
  TNode<BoolT> phi_bb21_14;
  TNode<Smi> phi_bb21_15;
  TNode<Smi> phi_bb21_18;
  TNode<JSAny> phi_bb21_19;
  TNode<JSAny> tmp22;
  TNode<Smi> tmp23;
  if (block21.is_used()) {
    ca_.Bind(&block21, &phi_bb21_5, &phi_bb21_11, &phi_bb21_12, &phi_bb21_13, &phi_bb21_14, &phi_bb21_15, &phi_bb21_18, &phi_bb21_19);
    tmp22 = CodeStubAssembler(state_).Call(TNode<Context>{p_context}, TNode<JSAny>{p_callbackfn}, TNode<JSAny>{p_thisArg}, TNode<JSAny>{phi_bb21_19}, TNode<JSAny>{phi_bb21_5}, TNode<JSAny>{tmp15});
    compiler::CodeAssemblerLabel label24(&ca_);
    tmp23 = Cast_Smi_0(state_, TNode<Object>{tmp22}, &label24);
    ca_.Goto(&block33, phi_bb21_5, phi_bb21_11, phi_bb21_12, phi_bb21_13, phi_bb21_14, phi_bb21_5, phi_bb21_5);
    if (label24.is_used()) {
      ca_.Bind(&label24);
      ca_.Goto(&block34, phi_bb21_5, phi_bb21_11, phi_bb21_12, phi_bb21_13, phi_bb21_14, phi_bb21_5, phi_bb21_5);
    }
  }

  TNode<Smi> phi_bb34_5;
  TNode<BoolT> phi_bb34_11;
  TNode<BoolT> phi_bb34_12;
  TNode<BoolT> phi_bb34_13;
  TNode<BoolT> phi_bb34_14;
  TNode<Smi> phi_bb34_17;
  TNode<Smi> phi_bb34_21;
  TNode<HeapNumber> tmp25;
  if (block34.is_used()) {
    ca_.Bind(&block34, &phi_bb34_5, &phi_bb34_11, &phi_bb34_12, &phi_bb34_13, &phi_bb34_14, &phi_bb34_17, &phi_bb34_21);
    compiler::CodeAssemblerLabel label26(&ca_);
    tmp25 = Cast_HeapNumber_0(state_, TNode<HeapObject>{ca_.UncheckedCast<Union<BigInt, Boolean, HeapNumber, JSReceiver, Null, String, Symbol, Undefined>>(tmp22)}, &label26);
    ca_.Goto(&block45, phi_bb34_5, phi_bb34_11, phi_bb34_12, phi_bb34_13, phi_bb34_14, phi_bb34_17, phi_bb34_21);
    if (label26.is_used()) {
      ca_.Bind(&label26);
      ca_.Goto(&block46, phi_bb34_5, phi_bb34_11, phi_bb34_12, phi_bb34_13, phi_bb34_14, phi_bb34_17, phi_bb34_21);
    }
  }

  TNode<Smi> phi_bb33_5;
  TNode<BoolT> phi_bb33_11;
  TNode<BoolT> phi_bb33_12;
  TNode<BoolT> phi_bb33_13;
  TNode<BoolT> phi_bb33_14;
  TNode<Smi> phi_bb33_17;
  TNode<Smi> phi_bb33_21;
  TNode<Union<HeapObject, TaggedIndex>> tmp27;
  TNode<IntPtrT> tmp28;
  TNode<IntPtrT> tmp29;
  TNode<IntPtrT> tmp30;
  TNode<UintPtrT> tmp31;
  TNode<UintPtrT> tmp32;
  TNode<BoolT> tmp33;
  if (block33.is_used()) {
    ca_.Bind(&block33, &phi_bb33_5, &phi_bb33_11, &phi_bb33_12, &phi_bb33_13, &phi_bb33_14, &phi_bb33_17, &phi_bb33_21);
    std::tie(tmp27, tmp28, tmp29) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp5}).Flatten();
    tmp30 = Convert_intptr_Smi_0(state_, TNode<Smi>{phi_bb33_21});
    tmp31 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp30});
    tmp32 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp29});
    tmp33 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp31}, TNode<UintPtrT>{tmp32});
    ca_.Branch(tmp33, &block39, std::vector<compiler::Node*>{phi_bb33_5, phi_bb33_11, phi_bb33_12, phi_bb33_13, phi_bb33_14, phi_bb33_17, phi_bb33_21, phi_bb33_21, phi_bb33_21}, &block40, std::vector<compiler::Node*>{phi_bb33_5, phi_bb33_11, phi_bb33_12, phi_bb33_13, phi_bb33_14, phi_bb33_17, phi_bb33_21, phi_bb33_21, phi_bb33_21});
  }

  TNode<Smi> phi_bb39_5;
  TNode<BoolT> phi_bb39_11;
  TNode<BoolT> phi_bb39_12;
  TNode<BoolT> phi_bb39_13;
  TNode<BoolT> phi_bb39_14;
  TNode<Smi> phi_bb39_17;
  TNode<Smi> phi_bb39_21;
  TNode<Smi> phi_bb39_29;
  TNode<Smi> phi_bb39_30;
  TNode<IntPtrT> tmp34;
  TNode<IntPtrT> tmp35;
  TNode<Union<HeapObject, TaggedIndex>> tmp36;
  TNode<IntPtrT> tmp37;
  if (block39.is_used()) {
    ca_.Bind(&block39, &phi_bb39_5, &phi_bb39_11, &phi_bb39_12, &phi_bb39_13, &phi_bb39_14, &phi_bb39_17, &phi_bb39_21, &phi_bb39_29, &phi_bb39_30);
    tmp34 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp30});
    tmp35 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp28}, TNode<IntPtrT>{tmp34});
    std::tie(tmp36, tmp37) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp27}, TNode<IntPtrT>{tmp35}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp36, tmp37}, tmp23);
    ca_.Goto(&block31, phi_bb39_5, phi_bb39_11, phi_bb39_12, phi_bb39_13, phi_bb39_14, phi_bb39_17, phi_bb39_21);
  }

  TNode<Smi> phi_bb40_5;
  TNode<BoolT> phi_bb40_11;
  TNode<BoolT> phi_bb40_12;
  TNode<BoolT> phi_bb40_13;
  TNode<BoolT> phi_bb40_14;
  TNode<Smi> phi_bb40_17;
  TNode<Smi> phi_bb40_21;
  TNode<Smi> phi_bb40_29;
  TNode<Smi> phi_bb40_30;
  if (block40.is_used()) {
    ca_.Bind(&block40, &phi_bb40_5, &phi_bb40_11, &phi_bb40_12, &phi_bb40_13, &phi_bb40_14, &phi_bb40_17, &phi_bb40_21, &phi_bb40_29, &phi_bb40_30);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:131:41");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Smi> phi_bb46_5;
  TNode<BoolT> phi_bb46_11;
  TNode<BoolT> phi_bb46_12;
  TNode<BoolT> phi_bb46_13;
  TNode<BoolT> phi_bb46_14;
  TNode<Smi> phi_bb46_17;
  TNode<Smi> phi_bb46_21;
  TNode<Undefined> tmp38;
  if (block46.is_used()) {
    ca_.Bind(&block46, &phi_bb46_5, &phi_bb46_11, &phi_bb46_12, &phi_bb46_13, &phi_bb46_14, &phi_bb46_17, &phi_bb46_21);
    compiler::CodeAssemblerLabel label39(&ca_);
    tmp38 = Cast_Undefined_2(state_, TNode<HeapObject>{ca_.UncheckedCast<Union<BigInt, Boolean, JSReceiver, Null, String, Symbol, Undefined>>(tmp22)}, &label39);
    ca_.Goto(&block57, phi_bb46_5, phi_bb46_11, phi_bb46_12, phi_bb46_13, phi_bb46_14, phi_bb46_17, phi_bb46_21);
    if (label39.is_used()) {
      ca_.Bind(&label39);
      ca_.Goto(&block58, phi_bb46_5, phi_bb46_11, phi_bb46_12, phi_bb46_13, phi_bb46_14, phi_bb46_17, phi_bb46_21);
    }
  }

  TNode<Smi> phi_bb45_5;
  TNode<BoolT> phi_bb45_11;
  TNode<BoolT> phi_bb45_12;
  TNode<BoolT> phi_bb45_13;
  TNode<BoolT> phi_bb45_14;
  TNode<Smi> phi_bb45_17;
  TNode<Smi> phi_bb45_21;
  TNode<BoolT> tmp40;
  TNode<Union<HeapObject, TaggedIndex>> tmp41;
  TNode<IntPtrT> tmp42;
  TNode<IntPtrT> tmp43;
  TNode<IntPtrT> tmp44;
  TNode<UintPtrT> tmp45;
  TNode<UintPtrT> tmp46;
  TNode<BoolT> tmp47;
  if (block45.is_used()) {
    ca_.Bind(&block45, &phi_bb45_5, &phi_bb45_11, &phi_bb45_12, &phi_bb45_13, &phi_bb45_14, &phi_bb45_17, &phi_bb45_21);
    tmp40 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    std::tie(tmp41, tmp42, tmp43) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp5}).Flatten();
    tmp44 = Convert_intptr_Smi_0(state_, TNode<Smi>{phi_bb45_21});
    tmp45 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp44});
    tmp46 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp43});
    tmp47 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp45}, TNode<UintPtrT>{tmp46});
    ca_.Branch(tmp47, &block51, std::vector<compiler::Node*>{phi_bb45_5, phi_bb45_12, phi_bb45_13, phi_bb45_14, phi_bb45_17, phi_bb45_21, phi_bb45_21, phi_bb45_21}, &block52, std::vector<compiler::Node*>{phi_bb45_5, phi_bb45_12, phi_bb45_13, phi_bb45_14, phi_bb45_17, phi_bb45_21, phi_bb45_21, phi_bb45_21});
  }

  TNode<Smi> phi_bb51_5;
  TNode<BoolT> phi_bb51_12;
  TNode<BoolT> phi_bb51_13;
  TNode<BoolT> phi_bb51_14;
  TNode<Smi> phi_bb51_17;
  TNode<Smi> phi_bb51_21;
  TNode<Smi> phi_bb51_29;
  TNode<Smi> phi_bb51_30;
  TNode<IntPtrT> tmp48;
  TNode<IntPtrT> tmp49;
  TNode<Union<HeapObject, TaggedIndex>> tmp50;
  TNode<IntPtrT> tmp51;
  if (block51.is_used()) {
    ca_.Bind(&block51, &phi_bb51_5, &phi_bb51_12, &phi_bb51_13, &phi_bb51_14, &phi_bb51_17, &phi_bb51_21, &phi_bb51_29, &phi_bb51_30);
    tmp48 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp44});
    tmp49 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp42}, TNode<IntPtrT>{tmp48});
    std::tie(tmp50, tmp51) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp41}, TNode<IntPtrT>{tmp49}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp50, tmp51}, tmp25);
    ca_.Goto(&block43, phi_bb51_5, tmp40, phi_bb51_12, phi_bb51_13, phi_bb51_14, phi_bb51_17, phi_bb51_21);
  }

  TNode<Smi> phi_bb52_5;
  TNode<BoolT> phi_bb52_12;
  TNode<BoolT> phi_bb52_13;
  TNode<BoolT> phi_bb52_14;
  TNode<Smi> phi_bb52_17;
  TNode<Smi> phi_bb52_21;
  TNode<Smi> phi_bb52_29;
  TNode<Smi> phi_bb52_30;
  if (block52.is_used()) {
    ca_.Bind(&block52, &phi_bb52_5, &phi_bb52_12, &phi_bb52_13, &phi_bb52_14, &phi_bb52_17, &phi_bb52_21, &phi_bb52_29, &phi_bb52_30);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:131:41");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Smi> phi_bb58_5;
  TNode<BoolT> phi_bb58_11;
  TNode<BoolT> phi_bb58_12;
  TNode<BoolT> phi_bb58_13;
  TNode<BoolT> phi_bb58_14;
  TNode<Smi> phi_bb58_17;
  TNode<Smi> phi_bb58_21;
  TNode<BoolT> tmp52;
  TNode<BoolT> tmp53;
  TNode<BoolT> tmp54;
  TNode<Union<HeapObject, TaggedIndex>> tmp55;
  TNode<IntPtrT> tmp56;
  TNode<IntPtrT> tmp57;
  TNode<IntPtrT> tmp58;
  TNode<UintPtrT> tmp59;
  TNode<UintPtrT> tmp60;
  TNode<BoolT> tmp61;
  if (block58.is_used()) {
    ca_.Bind(&block58, &phi_bb58_5, &phi_bb58_11, &phi_bb58_12, &phi_bb58_13, &phi_bb58_14, &phi_bb58_17, &phi_bb58_21);
    tmp52 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    tmp53 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    tmp54 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    std::tie(tmp55, tmp56, tmp57) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp5}).Flatten();
    tmp58 = Convert_intptr_Smi_0(state_, TNode<Smi>{phi_bb58_21});
    tmp59 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp58});
    tmp60 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp57});
    tmp61 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp59}, TNode<UintPtrT>{tmp60});
    ca_.Branch(tmp61, &block71, std::vector<compiler::Node*>{phi_bb58_5, phi_bb58_14, phi_bb58_17, phi_bb58_21, phi_bb58_21, phi_bb58_21}, &block72, std::vector<compiler::Node*>{phi_bb58_5, phi_bb58_14, phi_bb58_17, phi_bb58_21, phi_bb58_21, phi_bb58_21});
  }

  TNode<Smi> phi_bb57_5;
  TNode<BoolT> phi_bb57_11;
  TNode<BoolT> phi_bb57_12;
  TNode<BoolT> phi_bb57_13;
  TNode<BoolT> phi_bb57_14;
  TNode<Smi> phi_bb57_17;
  TNode<Smi> phi_bb57_21;
  TNode<BoolT> tmp62;
  TNode<BoolT> tmp63;
  TNode<Union<HeapObject, TaggedIndex>> tmp64;
  TNode<IntPtrT> tmp65;
  TNode<IntPtrT> tmp66;
  TNode<IntPtrT> tmp67;
  TNode<UintPtrT> tmp68;
  TNode<UintPtrT> tmp69;
  TNode<BoolT> tmp70;
  if (block57.is_used()) {
    ca_.Bind(&block57, &phi_bb57_5, &phi_bb57_11, &phi_bb57_12, &phi_bb57_13, &phi_bb57_14, &phi_bb57_17, &phi_bb57_21);
    tmp62 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    tmp63 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    std::tie(tmp64, tmp65, tmp66) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp5}).Flatten();
    tmp67 = Convert_intptr_Smi_0(state_, TNode<Smi>{phi_bb57_21});
    tmp68 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp67});
    tmp69 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp66});
    tmp70 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp68}, TNode<UintPtrT>{tmp69});
    ca_.Branch(tmp70, &block63, std::vector<compiler::Node*>{phi_bb57_5, phi_bb57_13, phi_bb57_14, phi_bb57_17, phi_bb57_21, phi_bb57_21, phi_bb57_21}, &block64, std::vector<compiler::Node*>{phi_bb57_5, phi_bb57_13, phi_bb57_14, phi_bb57_17, phi_bb57_21, phi_bb57_21, phi_bb57_21});
  }

  TNode<Smi> phi_bb63_5;
  TNode<BoolT> phi_bb63_13;
  TNode<BoolT> phi_bb63_14;
  TNode<Smi> phi_bb63_17;
  TNode<Smi> phi_bb63_21;
  TNode<Smi> phi_bb63_29;
  TNode<Smi> phi_bb63_30;
  TNode<IntPtrT> tmp71;
  TNode<IntPtrT> tmp72;
  TNode<Union<HeapObject, TaggedIndex>> tmp73;
  TNode<IntPtrT> tmp74;
  if (block63.is_used()) {
    ca_.Bind(&block63, &phi_bb63_5, &phi_bb63_13, &phi_bb63_14, &phi_bb63_17, &phi_bb63_21, &phi_bb63_29, &phi_bb63_30);
    tmp71 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp67});
    tmp72 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp65}, TNode<IntPtrT>{tmp71});
    std::tie(tmp73, tmp74) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp64}, TNode<IntPtrT>{tmp72}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp73, tmp74}, tmp38);
    ca_.Goto(&block55, phi_bb63_5, tmp62, tmp63, phi_bb63_13, phi_bb63_14, phi_bb63_17, phi_bb63_21);
  }

  TNode<Smi> phi_bb64_5;
  TNode<BoolT> phi_bb64_13;
  TNode<BoolT> phi_bb64_14;
  TNode<Smi> phi_bb64_17;
  TNode<Smi> phi_bb64_21;
  TNode<Smi> phi_bb64_29;
  TNode<Smi> phi_bb64_30;
  if (block64.is_used()) {
    ca_.Bind(&block64, &phi_bb64_5, &phi_bb64_13, &phi_bb64_14, &phi_bb64_17, &phi_bb64_21, &phi_bb64_29, &phi_bb64_30);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:131:41");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Smi> phi_bb71_5;
  TNode<BoolT> phi_bb71_14;
  TNode<Smi> phi_bb71_17;
  TNode<Smi> phi_bb71_21;
  TNode<Smi> phi_bb71_29;
  TNode<Smi> phi_bb71_30;
  TNode<IntPtrT> tmp75;
  TNode<IntPtrT> tmp76;
  TNode<Union<HeapObject, TaggedIndex>> tmp77;
  TNode<IntPtrT> tmp78;
  if (block71.is_used()) {
    ca_.Bind(&block71, &phi_bb71_5, &phi_bb71_14, &phi_bb71_17, &phi_bb71_21, &phi_bb71_29, &phi_bb71_30);
    tmp75 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp58});
    tmp76 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp56}, TNode<IntPtrT>{tmp75});
    std::tie(tmp77, tmp78) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp55}, TNode<IntPtrT>{tmp76}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp77, tmp78}, ca_.UncheckedCast<Union<BigInt, Boolean, JSReceiver, Null, String, Symbol>>(tmp22));
    ca_.Goto(&block55, phi_bb71_5, tmp52, tmp53, tmp54, phi_bb71_14, phi_bb71_17, phi_bb71_21);
  }

  TNode<Smi> phi_bb72_5;
  TNode<BoolT> phi_bb72_14;
  TNode<Smi> phi_bb72_17;
  TNode<Smi> phi_bb72_21;
  TNode<Smi> phi_bb72_29;
  TNode<Smi> phi_bb72_30;
  if (block72.is_used()) {
    ca_.Bind(&block72, &phi_bb72_5, &phi_bb72_14, &phi_bb72_17, &phi_bb72_21, &phi_bb72_29, &phi_bb72_30);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:131:41");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Smi> phi_bb55_5;
  TNode<BoolT> phi_bb55_11;
  TNode<BoolT> phi_bb55_12;
  TNode<BoolT> phi_bb55_13;
  TNode<BoolT> phi_bb55_14;
  TNode<Smi> phi_bb55_17;
  TNode<Smi> phi_bb55_21;
  if (block55.is_used()) {
    ca_.Bind(&block55, &phi_bb55_5, &phi_bb55_11, &phi_bb55_12, &phi_bb55_13, &phi_bb55_14, &phi_bb55_17, &phi_bb55_21);
    ca_.Goto(&block43, phi_bb55_5, phi_bb55_11, phi_bb55_12, phi_bb55_13, phi_bb55_14, phi_bb55_17, phi_bb55_21);
  }

  TNode<Smi> phi_bb43_5;
  TNode<BoolT> phi_bb43_11;
  TNode<BoolT> phi_bb43_12;
  TNode<BoolT> phi_bb43_13;
  TNode<BoolT> phi_bb43_14;
  TNode<Smi> phi_bb43_17;
  TNode<Smi> phi_bb43_21;
  if (block43.is_used()) {
    ca_.Bind(&block43, &phi_bb43_5, &phi_bb43_11, &phi_bb43_12, &phi_bb43_13, &phi_bb43_14, &phi_bb43_17, &phi_bb43_21);
    ca_.Goto(&block31, phi_bb43_5, phi_bb43_11, phi_bb43_12, phi_bb43_13, phi_bb43_14, phi_bb43_17, phi_bb43_21);
  }

  TNode<Smi> phi_bb31_5;
  TNode<BoolT> phi_bb31_11;
  TNode<BoolT> phi_bb31_12;
  TNode<BoolT> phi_bb31_13;
  TNode<BoolT> phi_bb31_14;
  TNode<Smi> phi_bb31_17;
  TNode<Smi> phi_bb31_21;
  if (block31.is_used()) {
    ca_.Bind(&block31, &phi_bb31_5, &phi_bb31_11, &phi_bb31_12, &phi_bb31_13, &phi_bb31_14, &phi_bb31_17, &phi_bb31_21);
    ca_.Goto(&block19, phi_bb31_5, phi_bb31_11, phi_bb31_12, phi_bb31_13, phi_bb31_14);
  }

  TNode<Smi> phi_bb20_5;
  TNode<BoolT> phi_bb20_11;
  TNode<BoolT> phi_bb20_12;
  TNode<BoolT> phi_bb20_13;
  TNode<BoolT> phi_bb20_14;
  TNode<BoolT> tmp79;
  if (block20.is_used()) {
    ca_.Bind(&block20, &phi_bb20_5, &phi_bb20_11, &phi_bb20_12, &phi_bb20_13, &phi_bb20_14);
    tmp79 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block19, phi_bb20_5, phi_bb20_11, phi_bb20_12, phi_bb20_13, tmp79);
  }

  TNode<Smi> phi_bb19_5;
  TNode<BoolT> phi_bb19_11;
  TNode<BoolT> phi_bb19_12;
  TNode<BoolT> phi_bb19_13;
  TNode<BoolT> phi_bb19_14;
  TNode<Smi> tmp80;
  TNode<Smi> tmp81;
  if (block19.is_used()) {
    ca_.Bind(&block19, &phi_bb19_5, &phi_bb19_11, &phi_bb19_12, &phi_bb19_13, &phi_bb19_14);
    tmp80 = FromConstexpr_Smi_constexpr_int31_0(state_, 1);
    tmp81 = CodeStubAssembler(state_).SmiAdd(TNode<Smi>{phi_bb19_5}, TNode<Smi>{tmp80});
    ca_.Goto(&block7, tmp81, tmp15, phi_bb19_11, phi_bb19_12, phi_bb19_13, phi_bb19_14);
  }

  TNode<Smi> phi_bb6_5;
  TNode<JSArray> phi_bb6_7;
  TNode<BoolT> phi_bb6_11;
  TNode<BoolT> phi_bb6_12;
  TNode<BoolT> phi_bb6_13;
  TNode<BoolT> phi_bb6_14;
  TNode<IntPtrT> tmp82;
  TNode<IntPtrT> tmp83;
  TNode<BoolT> tmp84;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_5, &phi_bb6_7, &phi_bb6_11, &phi_bb6_12, &phi_bb6_13, &phi_bb6_14);
    tmp82 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{tmp5});
    tmp83 = Convert_intptr_Smi_0(state_, TNode<Smi>{p_len});
    tmp84 = CodeStubAssembler(state_).IntPtrLessThanOrEqual(TNode<IntPtrT>{tmp83}, TNode<IntPtrT>{tmp82});
    ca_.Branch(tmp84, &block134, std::vector<compiler::Node*>{phi_bb6_5, phi_bb6_7, phi_bb6_11, phi_bb6_12, phi_bb6_13, phi_bb6_14}, &block135, std::vector<compiler::Node*>{phi_bb6_5, phi_bb6_7, phi_bb6_11, phi_bb6_12, phi_bb6_13, phi_bb6_14});
  }

  TNode<Smi> phi_bb4_5;
  TNode<JSArray> phi_bb4_7;
  TNode<BoolT> phi_bb4_11;
  TNode<BoolT> phi_bb4_12;
  TNode<BoolT> phi_bb4_13;
  TNode<BoolT> phi_bb4_14;
  TNode<Smi> phi_bb4_15;
  TNode<IntPtrT> tmp85;
  TNode<IntPtrT> tmp86;
  TNode<BoolT> tmp87;
  if (block4.is_used()) {
    ca_.Bind(&block4, &phi_bb4_5, &phi_bb4_7, &phi_bb4_11, &phi_bb4_12, &phi_bb4_13, &phi_bb4_14, &phi_bb4_15);
    tmp85 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{tmp5});
    tmp86 = Convert_intptr_Smi_0(state_, TNode<Smi>{phi_bb4_15});
    tmp87 = CodeStubAssembler(state_).IntPtrLessThanOrEqual(TNode<IntPtrT>{tmp86}, TNode<IntPtrT>{tmp85});
    ca_.Branch(tmp87, &block77, std::vector<compiler::Node*>{phi_bb4_5, phi_bb4_7, phi_bb4_11, phi_bb4_12, phi_bb4_13, phi_bb4_14, phi_bb4_15, phi_bb4_15, phi_bb4_15}, &block78, std::vector<compiler::Node*>{phi_bb4_5, phi_bb4_7, phi_bb4_11, phi_bb4_12, phi_bb4_13, phi_bb4_14, phi_bb4_15, phi_bb4_15, phi_bb4_15});
  }

  TNode<Smi> phi_bb78_5;
  TNode<JSArray> phi_bb78_7;
  TNode<BoolT> phi_bb78_11;
  TNode<BoolT> phi_bb78_12;
  TNode<BoolT> phi_bb78_13;
  TNode<BoolT> phi_bb78_14;
  TNode<Smi> phi_bb78_15;
  TNode<Smi> phi_bb78_16;
  TNode<Smi> phi_bb78_19;
  if (block78.is_used()) {
    ca_.Bind(&block78, &phi_bb78_5, &phi_bb78_7, &phi_bb78_11, &phi_bb78_12, &phi_bb78_13, &phi_bb78_14, &phi_bb78_15, &phi_bb78_16, &phi_bb78_19);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-map.tq", 104});
      CodeStubAssembler(state_).FailAssert("Torque assert 'Convert<intptr>(validLength) <= length' failed", pos_stack);
    }
  }

  TNode<Smi> phi_bb77_5;
  TNode<JSArray> phi_bb77_7;
  TNode<BoolT> phi_bb77_11;
  TNode<BoolT> phi_bb77_12;
  TNode<BoolT> phi_bb77_13;
  TNode<BoolT> phi_bb77_14;
  TNode<Smi> phi_bb77_15;
  TNode<Smi> phi_bb77_16;
  TNode<Smi> phi_bb77_19;
  TNode<Int32T> tmp88;
  TNode<BoolT> tmp89;
  if (block77.is_used()) {
    ca_.Bind(&block77, &phi_bb77_5, &phi_bb77_7, &phi_bb77_11, &phi_bb77_12, &phi_bb77_13, &phi_bb77_14, &phi_bb77_15, &phi_bb77_16, &phi_bb77_19);
    tmp88 = FromConstexpr_ElementsKind_constexpr_PACKED_SMI_ELEMENTS_0(state_, ElementsKind::PACKED_SMI_ELEMENTS);
    tmp89 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{phi_bb77_11});
    ca_.Branch(tmp89, &block79, std::vector<compiler::Node*>{phi_bb77_5, phi_bb77_7, phi_bb77_11, phi_bb77_12, phi_bb77_13, phi_bb77_14, phi_bb77_15, phi_bb77_16, phi_bb77_19}, &block80, std::vector<compiler::Node*>{phi_bb77_5, phi_bb77_7, phi_bb77_11, phi_bb77_12, phi_bb77_13, phi_bb77_14, phi_bb77_15, phi_bb77_16, phi_bb77_19, tmp88});
  }

  TNode<Smi> phi_bb79_5;
  TNode<JSArray> phi_bb79_7;
  TNode<BoolT> phi_bb79_11;
  TNode<BoolT> phi_bb79_12;
  TNode<BoolT> phi_bb79_13;
  TNode<BoolT> phi_bb79_14;
  TNode<Smi> phi_bb79_15;
  TNode<Smi> phi_bb79_16;
  TNode<Smi> phi_bb79_19;
  if (block79.is_used()) {
    ca_.Bind(&block79, &phi_bb79_5, &phi_bb79_7, &phi_bb79_11, &phi_bb79_12, &phi_bb79_13, &phi_bb79_14, &phi_bb79_15, &phi_bb79_16, &phi_bb79_19);
    ca_.Branch(phi_bb79_12, &block81, std::vector<compiler::Node*>{phi_bb79_5, phi_bb79_7, phi_bb79_11, phi_bb79_12, phi_bb79_13, phi_bb79_14, phi_bb79_15, phi_bb79_16, phi_bb79_19}, &block82, std::vector<compiler::Node*>{phi_bb79_5, phi_bb79_7, phi_bb79_11, phi_bb79_12, phi_bb79_13, phi_bb79_14, phi_bb79_15, phi_bb79_16, phi_bb79_19});
  }

  TNode<Smi> phi_bb81_5;
  TNode<JSArray> phi_bb81_7;
  TNode<BoolT> phi_bb81_11;
  TNode<BoolT> phi_bb81_12;
  TNode<BoolT> phi_bb81_13;
  TNode<BoolT> phi_bb81_14;
  TNode<Smi> phi_bb81_15;
  TNode<Smi> phi_bb81_16;
  TNode<Smi> phi_bb81_19;
  TNode<Int32T> tmp90;
  if (block81.is_used()) {
    ca_.Bind(&block81, &phi_bb81_5, &phi_bb81_7, &phi_bb81_11, &phi_bb81_12, &phi_bb81_13, &phi_bb81_14, &phi_bb81_15, &phi_bb81_16, &phi_bb81_19);
    tmp90 = FromConstexpr_ElementsKind_constexpr_PACKED_DOUBLE_ELEMENTS_0(state_, ElementsKind::PACKED_DOUBLE_ELEMENTS);
    ca_.Goto(&block83, phi_bb81_5, phi_bb81_7, phi_bb81_11, phi_bb81_12, phi_bb81_13, phi_bb81_14, phi_bb81_15, phi_bb81_16, phi_bb81_19, tmp90);
  }

  TNode<Smi> phi_bb82_5;
  TNode<JSArray> phi_bb82_7;
  TNode<BoolT> phi_bb82_11;
  TNode<BoolT> phi_bb82_12;
  TNode<BoolT> phi_bb82_13;
  TNode<BoolT> phi_bb82_14;
  TNode<Smi> phi_bb82_15;
  TNode<Smi> phi_bb82_16;
  TNode<Smi> phi_bb82_19;
  if (block82.is_used()) {
    ca_.Bind(&block82, &phi_bb82_5, &phi_bb82_7, &phi_bb82_11, &phi_bb82_12, &phi_bb82_13, &phi_bb82_14, &phi_bb82_15, &phi_bb82_16, &phi_bb82_19);
    ca_.Branch(phi_bb82_13, &block84, std::vector<compiler::Node*>{phi_bb82_5, phi_bb82_7, phi_bb82_11, phi_bb82_12, phi_bb82_13, phi_bb82_14, phi_bb82_15, phi_bb82_16, phi_bb82_19}, &block85, std::vector<compiler::Node*>{phi_bb82_5, phi_bb82_7, phi_bb82_11, phi_bb82_12, phi_bb82_13, phi_bb82_14, phi_bb82_15, phi_bb82_16, phi_bb82_19});
  }

  TNode<Smi> phi_bb84_5;
  TNode<JSArray> phi_bb84_7;
  TNode<BoolT> phi_bb84_11;
  TNode<BoolT> phi_bb84_12;
  TNode<BoolT> phi_bb84_13;
  TNode<BoolT> phi_bb84_14;
  TNode<Smi> phi_bb84_15;
  TNode<Smi> phi_bb84_16;
  TNode<Smi> phi_bb84_19;
  TNode<BoolT> tmp91;
  if (block84.is_used()) {
    ca_.Bind(&block84, &phi_bb84_5, &phi_bb84_7, &phi_bb84_11, &phi_bb84_12, &phi_bb84_13, &phi_bb84_14, &phi_bb84_15, &phi_bb84_16, &phi_bb84_19);
    tmp91 = FromConstexpr_bool_constexpr_bool_0(state_, V8_UNDEFINED_DOUBLE_BOOL);
    ca_.Branch(tmp91, &block87, std::vector<compiler::Node*>{phi_bb84_5, phi_bb84_7, phi_bb84_11, phi_bb84_12, phi_bb84_13, phi_bb84_14, phi_bb84_15, phi_bb84_16, phi_bb84_19}, &block88, std::vector<compiler::Node*>{phi_bb84_5, phi_bb84_7, phi_bb84_11, phi_bb84_12, phi_bb84_13, phi_bb84_14, phi_bb84_15, phi_bb84_16, phi_bb84_19});
  }

  TNode<Smi> phi_bb88_5;
  TNode<JSArray> phi_bb88_7;
  TNode<BoolT> phi_bb88_11;
  TNode<BoolT> phi_bb88_12;
  TNode<BoolT> phi_bb88_13;
  TNode<BoolT> phi_bb88_14;
  TNode<Smi> phi_bb88_15;
  TNode<Smi> phi_bb88_16;
  TNode<Smi> phi_bb88_19;
  if (block88.is_used()) {
    ca_.Bind(&block88, &phi_bb88_5, &phi_bb88_7, &phi_bb88_11, &phi_bb88_12, &phi_bb88_13, &phi_bb88_14, &phi_bb88_15, &phi_bb88_16, &phi_bb88_19);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-map.tq", 110});
      CodeStubAssembler(state_).FailAssert("Torque assert 'kEnableUndefinedDouble' failed", pos_stack);
    }
  }

  TNode<Smi> phi_bb87_5;
  TNode<JSArray> phi_bb87_7;
  TNode<BoolT> phi_bb87_11;
  TNode<BoolT> phi_bb87_12;
  TNode<BoolT> phi_bb87_13;
  TNode<BoolT> phi_bb87_14;
  TNode<Smi> phi_bb87_15;
  TNode<Smi> phi_bb87_16;
  TNode<Smi> phi_bb87_19;
  TNode<Int32T> tmp92;
  if (block87.is_used()) {
    ca_.Bind(&block87, &phi_bb87_5, &phi_bb87_7, &phi_bb87_11, &phi_bb87_12, &phi_bb87_13, &phi_bb87_14, &phi_bb87_15, &phi_bb87_16, &phi_bb87_19);
    tmp92 = FromConstexpr_ElementsKind_constexpr_HOLEY_DOUBLE_ELEMENTS_0(state_, ElementsKind::HOLEY_DOUBLE_ELEMENTS);
    ca_.Goto(&block86, phi_bb87_5, phi_bb87_7, phi_bb87_11, phi_bb87_12, phi_bb87_13, phi_bb87_14, phi_bb87_15, phi_bb87_16, phi_bb87_19, tmp92);
  }

  TNode<Smi> phi_bb85_5;
  TNode<JSArray> phi_bb85_7;
  TNode<BoolT> phi_bb85_11;
  TNode<BoolT> phi_bb85_12;
  TNode<BoolT> phi_bb85_13;
  TNode<BoolT> phi_bb85_14;
  TNode<Smi> phi_bb85_15;
  TNode<Smi> phi_bb85_16;
  TNode<Smi> phi_bb85_19;
  TNode<Int32T> tmp93;
  if (block85.is_used()) {
    ca_.Bind(&block85, &phi_bb85_5, &phi_bb85_7, &phi_bb85_11, &phi_bb85_12, &phi_bb85_13, &phi_bb85_14, &phi_bb85_15, &phi_bb85_16, &phi_bb85_19);
    tmp93 = FromConstexpr_ElementsKind_constexpr_PACKED_ELEMENTS_0(state_, ElementsKind::PACKED_ELEMENTS);
    ca_.Goto(&block86, phi_bb85_5, phi_bb85_7, phi_bb85_11, phi_bb85_12, phi_bb85_13, phi_bb85_14, phi_bb85_15, phi_bb85_16, phi_bb85_19, tmp93);
  }

  TNode<Smi> phi_bb86_5;
  TNode<JSArray> phi_bb86_7;
  TNode<BoolT> phi_bb86_11;
  TNode<BoolT> phi_bb86_12;
  TNode<BoolT> phi_bb86_13;
  TNode<BoolT> phi_bb86_14;
  TNode<Smi> phi_bb86_15;
  TNode<Smi> phi_bb86_16;
  TNode<Smi> phi_bb86_19;
  TNode<Int32T> phi_bb86_21;
  if (block86.is_used()) {
    ca_.Bind(&block86, &phi_bb86_5, &phi_bb86_7, &phi_bb86_11, &phi_bb86_12, &phi_bb86_13, &phi_bb86_14, &phi_bb86_15, &phi_bb86_16, &phi_bb86_19, &phi_bb86_21);
    ca_.Goto(&block83, phi_bb86_5, phi_bb86_7, phi_bb86_11, phi_bb86_12, phi_bb86_13, phi_bb86_14, phi_bb86_15, phi_bb86_16, phi_bb86_19, phi_bb86_21);
  }

  TNode<Smi> phi_bb83_5;
  TNode<JSArray> phi_bb83_7;
  TNode<BoolT> phi_bb83_11;
  TNode<BoolT> phi_bb83_12;
  TNode<BoolT> phi_bb83_13;
  TNode<BoolT> phi_bb83_14;
  TNode<Smi> phi_bb83_15;
  TNode<Smi> phi_bb83_16;
  TNode<Smi> phi_bb83_19;
  TNode<Int32T> phi_bb83_21;
  if (block83.is_used()) {
    ca_.Bind(&block83, &phi_bb83_5, &phi_bb83_7, &phi_bb83_11, &phi_bb83_12, &phi_bb83_13, &phi_bb83_14, &phi_bb83_15, &phi_bb83_16, &phi_bb83_19, &phi_bb83_21);
    ca_.Goto(&block80, phi_bb83_5, phi_bb83_7, phi_bb83_11, phi_bb83_12, phi_bb83_13, phi_bb83_14, phi_bb83_15, phi_bb83_16, phi_bb83_19, phi_bb83_21);
  }

  TNode<Smi> phi_bb80_5;
  TNode<JSArray> phi_bb80_7;
  TNode<BoolT> phi_bb80_11;
  TNode<BoolT> phi_bb80_12;
  TNode<BoolT> phi_bb80_13;
  TNode<BoolT> phi_bb80_14;
  TNode<Smi> phi_bb80_15;
  TNode<Smi> phi_bb80_16;
  TNode<Smi> phi_bb80_19;
  TNode<Int32T> phi_bb80_21;
  if (block80.is_used()) {
    ca_.Bind(&block80, &phi_bb80_5, &phi_bb80_7, &phi_bb80_11, &phi_bb80_12, &phi_bb80_13, &phi_bb80_14, &phi_bb80_15, &phi_bb80_16, &phi_bb80_19, &phi_bb80_21);
    ca_.Branch(phi_bb80_14, &block91, std::vector<compiler::Node*>{phi_bb80_5, phi_bb80_7, phi_bb80_11, phi_bb80_12, phi_bb80_13, phi_bb80_14, phi_bb80_15, phi_bb80_16, phi_bb80_19, phi_bb80_21, phi_bb80_14}, &block92, std::vector<compiler::Node*>{phi_bb80_5, phi_bb80_7, phi_bb80_11, phi_bb80_12, phi_bb80_13, phi_bb80_14, phi_bb80_15, phi_bb80_16, phi_bb80_19, phi_bb80_21, phi_bb80_14});
  }

  TNode<Smi> phi_bb91_5;
  TNode<JSArray> phi_bb91_7;
  TNode<BoolT> phi_bb91_11;
  TNode<BoolT> phi_bb91_12;
  TNode<BoolT> phi_bb91_13;
  TNode<BoolT> phi_bb91_14;
  TNode<Smi> phi_bb91_15;
  TNode<Smi> phi_bb91_16;
  TNode<Smi> phi_bb91_19;
  TNode<Int32T> phi_bb91_21;
  TNode<BoolT> phi_bb91_22;
  TNode<BoolT> tmp94;
  if (block91.is_used()) {
    ca_.Bind(&block91, &phi_bb91_5, &phi_bb91_7, &phi_bb91_11, &phi_bb91_12, &phi_bb91_13, &phi_bb91_14, &phi_bb91_15, &phi_bb91_16, &phi_bb91_19, &phi_bb91_21, &phi_bb91_22);
    tmp94 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block93, phi_bb91_5, phi_bb91_7, phi_bb91_11, phi_bb91_12, phi_bb91_13, phi_bb91_14, phi_bb91_15, phi_bb91_16, phi_bb91_19, phi_bb91_21, phi_bb91_22, tmp94);
  }

  TNode<Smi> phi_bb92_5;
  TNode<JSArray> phi_bb92_7;
  TNode<BoolT> phi_bb92_11;
  TNode<BoolT> phi_bb92_12;
  TNode<BoolT> phi_bb92_13;
  TNode<BoolT> phi_bb92_14;
  TNode<Smi> phi_bb92_15;
  TNode<Smi> phi_bb92_16;
  TNode<Smi> phi_bb92_19;
  TNode<Int32T> phi_bb92_21;
  TNode<BoolT> phi_bb92_22;
  TNode<IntPtrT> tmp95;
  TNode<BoolT> tmp96;
  if (block92.is_used()) {
    ca_.Bind(&block92, &phi_bb92_5, &phi_bb92_7, &phi_bb92_11, &phi_bb92_12, &phi_bb92_13, &phi_bb92_14, &phi_bb92_15, &phi_bb92_16, &phi_bb92_19, &phi_bb92_21, &phi_bb92_22);
    tmp95 = Convert_intptr_Smi_0(state_, TNode<Smi>{phi_bb92_19});
    tmp96 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{tmp95}, TNode<IntPtrT>{tmp85});
    ca_.Goto(&block93, phi_bb92_5, phi_bb92_7, phi_bb92_11, phi_bb92_12, phi_bb92_13, phi_bb92_14, phi_bb92_15, phi_bb92_16, phi_bb92_19, phi_bb92_21, phi_bb92_22, tmp96);
  }

  TNode<Smi> phi_bb93_5;
  TNode<JSArray> phi_bb93_7;
  TNode<BoolT> phi_bb93_11;
  TNode<BoolT> phi_bb93_12;
  TNode<BoolT> phi_bb93_13;
  TNode<BoolT> phi_bb93_14;
  TNode<Smi> phi_bb93_15;
  TNode<Smi> phi_bb93_16;
  TNode<Smi> phi_bb93_19;
  TNode<Int32T> phi_bb93_21;
  TNode<BoolT> phi_bb93_22;
  TNode<BoolT> phi_bb93_23;
  if (block93.is_used()) {
    ca_.Bind(&block93, &phi_bb93_5, &phi_bb93_7, &phi_bb93_11, &phi_bb93_12, &phi_bb93_13, &phi_bb93_14, &phi_bb93_15, &phi_bb93_16, &phi_bb93_19, &phi_bb93_21, &phi_bb93_22, &phi_bb93_23);
    ca_.Branch(phi_bb93_23, &block89, std::vector<compiler::Node*>{phi_bb93_5, phi_bb93_7, phi_bb93_11, phi_bb93_12, phi_bb93_13, phi_bb93_14, phi_bb93_15, phi_bb93_16, phi_bb93_19, phi_bb93_21}, &block90, std::vector<compiler::Node*>{phi_bb93_5, phi_bb93_7, phi_bb93_11, phi_bb93_12, phi_bb93_13, phi_bb93_14, phi_bb93_15, phi_bb93_16, phi_bb93_19, phi_bb93_21});
  }

  TNode<Smi> phi_bb89_5;
  TNode<JSArray> phi_bb89_7;
  TNode<BoolT> phi_bb89_11;
  TNode<BoolT> phi_bb89_12;
  TNode<BoolT> phi_bb89_13;
  TNode<BoolT> phi_bb89_14;
  TNode<Smi> phi_bb89_15;
  TNode<Smi> phi_bb89_16;
  TNode<Smi> phi_bb89_19;
  TNode<Int32T> phi_bb89_21;
  TNode<Int32T> tmp97;
  if (block89.is_used()) {
    ca_.Bind(&block89, &phi_bb89_5, &phi_bb89_7, &phi_bb89_11, &phi_bb89_12, &phi_bb89_13, &phi_bb89_14, &phi_bb89_15, &phi_bb89_16, &phi_bb89_19, &phi_bb89_21);
    tmp97 = FastHoleyElementsKind_0(state_, TNode<Int32T>{phi_bb89_21});
    ca_.Goto(&block90, phi_bb89_5, phi_bb89_7, phi_bb89_11, phi_bb89_12, phi_bb89_13, phi_bb89_14, phi_bb89_15, phi_bb89_16, phi_bb89_19, tmp97);
  }

  TNode<Smi> phi_bb90_5;
  TNode<JSArray> phi_bb90_7;
  TNode<BoolT> phi_bb90_11;
  TNode<BoolT> phi_bb90_12;
  TNode<BoolT> phi_bb90_13;
  TNode<BoolT> phi_bb90_14;
  TNode<Smi> phi_bb90_15;
  TNode<Smi> phi_bb90_16;
  TNode<Smi> phi_bb90_19;
  TNode<Int32T> phi_bb90_21;
  TNode<NativeContext> tmp98;
  TNode<Map> tmp99;
  TNode<BoolT> tmp100;
  if (block90.is_used()) {
    ca_.Bind(&block90, &phi_bb90_5, &phi_bb90_7, &phi_bb90_11, &phi_bb90_12, &phi_bb90_13, &phi_bb90_14, &phi_bb90_15, &phi_bb90_16, &phi_bb90_19, &phi_bb90_21);
    tmp98 = CodeStubAssembler(state_).LoadNativeContext(TNode<Context>{p_context});
    tmp99 = CodeStubAssembler(state_).LoadJSArrayElementsMap(TNode<Int32T>{phi_bb90_21}, TNode<NativeContext>{tmp98});
    tmp100 = CodeStubAssembler(state_).IsDoubleElementsKind(TNode<Int32T>{phi_bb90_21});
    ca_.Branch(tmp100, &block94, std::vector<compiler::Node*>{phi_bb90_5, phi_bb90_7, phi_bb90_11, phi_bb90_12, phi_bb90_13, phi_bb90_14, phi_bb90_15, phi_bb90_16, phi_bb90_19}, &block95, std::vector<compiler::Node*>{phi_bb90_5, phi_bb90_7, phi_bb90_11, phi_bb90_12, phi_bb90_13, phi_bb90_14, phi_bb90_15, phi_bb90_16, phi_bb90_19});
  }

  TNode<Smi> phi_bb94_5;
  TNode<JSArray> phi_bb94_7;
  TNode<BoolT> phi_bb94_11;
  TNode<BoolT> phi_bb94_12;
  TNode<BoolT> phi_bb94_13;
  TNode<BoolT> phi_bb94_14;
  TNode<Smi> phi_bb94_15;
  TNode<Smi> phi_bb94_16;
  TNode<Smi> phi_bb94_19;
  TNode<FixedDoubleArray> tmp101;
  TNode<JSArray> tmp102;
  TNode<Smi> tmp103;
  if (block94.is_used()) {
    ca_.Bind(&block94, &phi_bb94_5, &phi_bb94_7, &phi_bb94_11, &phi_bb94_12, &phi_bb94_13, &phi_bb94_14, &phi_bb94_15, &phi_bb94_16, &phi_bb94_19);
    tmp101 = CodeStubAssembler(state_).AllocateFixedDoubleArrayWithHoles(TNode<IntPtrT>{tmp85});
    tmp102 = NewJSArray_0(state_, TNode<Context>{p_context}, TNode<Map>{tmp99}, TNode<FixedArrayBase>{tmp5});
    tmp103 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block99, phi_bb94_5, phi_bb94_7, phi_bb94_11, phi_bb94_12, phi_bb94_13, phi_bb94_14, phi_bb94_15, phi_bb94_16, phi_bb94_19, tmp103);
  }

  TNode<Smi> phi_bb99_5;
  TNode<JSArray> phi_bb99_7;
  TNode<BoolT> phi_bb99_11;
  TNode<BoolT> phi_bb99_12;
  TNode<BoolT> phi_bb99_13;
  TNode<BoolT> phi_bb99_14;
  TNode<Smi> phi_bb99_15;
  TNode<Smi> phi_bb99_16;
  TNode<Smi> phi_bb99_19;
  TNode<Smi> phi_bb99_25;
  TNode<BoolT> tmp104;
  if (block99.is_used()) {
    ca_.Bind(&block99, &phi_bb99_5, &phi_bb99_7, &phi_bb99_11, &phi_bb99_12, &phi_bb99_13, &phi_bb99_14, &phi_bb99_15, &phi_bb99_16, &phi_bb99_19, &phi_bb99_25);
    tmp104 = CodeStubAssembler(state_).SmiLessThan(TNode<Smi>{phi_bb99_25}, TNode<Smi>{phi_bb99_19});
    ca_.Branch(tmp104, &block97, std::vector<compiler::Node*>{phi_bb99_5, phi_bb99_7, phi_bb99_11, phi_bb99_12, phi_bb99_13, phi_bb99_14, phi_bb99_15, phi_bb99_16, phi_bb99_19, phi_bb99_25}, &block98, std::vector<compiler::Node*>{phi_bb99_5, phi_bb99_7, phi_bb99_11, phi_bb99_12, phi_bb99_13, phi_bb99_14, phi_bb99_15, phi_bb99_16, phi_bb99_19, phi_bb99_25});
  }

  TNode<Smi> phi_bb97_5;
  TNode<JSArray> phi_bb97_7;
  TNode<BoolT> phi_bb97_11;
  TNode<BoolT> phi_bb97_12;
  TNode<BoolT> phi_bb97_13;
  TNode<BoolT> phi_bb97_14;
  TNode<Smi> phi_bb97_15;
  TNode<Smi> phi_bb97_16;
  TNode<Smi> phi_bb97_19;
  TNode<Smi> phi_bb97_25;
  TNode<Union<HeapObject, TaggedIndex>> tmp105;
  TNode<IntPtrT> tmp106;
  TNode<IntPtrT> tmp107;
  TNode<IntPtrT> tmp108;
  TNode<UintPtrT> tmp109;
  TNode<UintPtrT> tmp110;
  TNode<BoolT> tmp111;
  if (block97.is_used()) {
    ca_.Bind(&block97, &phi_bb97_5, &phi_bb97_7, &phi_bb97_11, &phi_bb97_12, &phi_bb97_13, &phi_bb97_14, &phi_bb97_15, &phi_bb97_16, &phi_bb97_19, &phi_bb97_25);
    std::tie(tmp105, tmp106, tmp107) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp5}).Flatten();
    tmp108 = Convert_intptr_Smi_0(state_, TNode<Smi>{phi_bb97_25});
    tmp109 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp108});
    tmp110 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp107});
    tmp111 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp109}, TNode<UintPtrT>{tmp110});
    ca_.Branch(tmp111, &block105, std::vector<compiler::Node*>{phi_bb97_5, phi_bb97_7, phi_bb97_11, phi_bb97_12, phi_bb97_13, phi_bb97_14, phi_bb97_15, phi_bb97_16, phi_bb97_19, phi_bb97_25, phi_bb97_25, phi_bb97_25}, &block106, std::vector<compiler::Node*>{phi_bb97_5, phi_bb97_7, phi_bb97_11, phi_bb97_12, phi_bb97_13, phi_bb97_14, phi_bb97_15, phi_bb97_16, phi_bb97_19, phi_bb97_25, phi_bb97_25, phi_bb97_25});
  }

  TNode<Smi> phi_bb105_5;
  TNode<JSArray> phi_bb105_7;
  TNode<BoolT> phi_bb105_11;
  TNode<BoolT> phi_bb105_12;
  TNode<BoolT> phi_bb105_13;
  TNode<BoolT> phi_bb105_14;
  TNode<Smi> phi_bb105_15;
  TNode<Smi> phi_bb105_16;
  TNode<Smi> phi_bb105_19;
  TNode<Smi> phi_bb105_25;
  TNode<Smi> phi_bb105_30;
  TNode<Smi> phi_bb105_31;
  TNode<IntPtrT> tmp112;
  TNode<IntPtrT> tmp113;
  TNode<Union<HeapObject, TaggedIndex>> tmp114;
  TNode<IntPtrT> tmp115;
  TNode<Object> tmp116;
  TNode<Union<HeapNumber, Smi, TheHole, Undefined>> tmp117;
  TNode<Number> tmp118;
  if (block105.is_used()) {
    ca_.Bind(&block105, &phi_bb105_5, &phi_bb105_7, &phi_bb105_11, &phi_bb105_12, &phi_bb105_13, &phi_bb105_14, &phi_bb105_15, &phi_bb105_16, &phi_bb105_19, &phi_bb105_25, &phi_bb105_30, &phi_bb105_31);
    tmp112 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp108});
    tmp113 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp106}, TNode<IntPtrT>{tmp112});
    std::tie(tmp114, tmp115) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp105}, TNode<IntPtrT>{tmp113}).Flatten();
    tmp116 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp114, tmp115});
    tmp117 = UnsafeCast_Smi_OR_HeapNumber_OR_Undefined_OR_TheHole_0(state_, TNode<Context>{p_context}, TNode<Object>{tmp116});
    compiler::CodeAssemblerLabel label119(&ca_);
    tmp118 = Cast_Number_0(state_, TNode<Object>{tmp117}, &label119);
    ca_.Goto(&block111, phi_bb105_5, phi_bb105_7, phi_bb105_11, phi_bb105_12, phi_bb105_13, phi_bb105_14, phi_bb105_15, phi_bb105_16, phi_bb105_19, phi_bb105_25);
    if (label119.is_used()) {
      ca_.Bind(&label119);
      ca_.Goto(&block112, phi_bb105_5, phi_bb105_7, phi_bb105_11, phi_bb105_12, phi_bb105_13, phi_bb105_14, phi_bb105_15, phi_bb105_16, phi_bb105_19, phi_bb105_25);
    }
  }

  TNode<Smi> phi_bb106_5;
  TNode<JSArray> phi_bb106_7;
  TNode<BoolT> phi_bb106_11;
  TNode<BoolT> phi_bb106_12;
  TNode<BoolT> phi_bb106_13;
  TNode<BoolT> phi_bb106_14;
  TNode<Smi> phi_bb106_15;
  TNode<Smi> phi_bb106_16;
  TNode<Smi> phi_bb106_19;
  TNode<Smi> phi_bb106_25;
  TNode<Smi> phi_bb106_30;
  TNode<Smi> phi_bb106_31;
  if (block106.is_used()) {
    ca_.Bind(&block106, &phi_bb106_5, &phi_bb106_7, &phi_bb106_11, &phi_bb106_12, &phi_bb106_13, &phi_bb106_14, &phi_bb106_15, &phi_bb106_16, &phi_bb106_19, &phi_bb106_25, &phi_bb106_30, &phi_bb106_31);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:131:41");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Smi> phi_bb112_5;
  TNode<JSArray> phi_bb112_7;
  TNode<BoolT> phi_bb112_11;
  TNode<BoolT> phi_bb112_12;
  TNode<BoolT> phi_bb112_13;
  TNode<BoolT> phi_bb112_14;
  TNode<Smi> phi_bb112_15;
  TNode<Smi> phi_bb112_16;
  TNode<Smi> phi_bb112_19;
  TNode<Smi> phi_bb112_25;
  TNode<Undefined> tmp120;
  if (block112.is_used()) {
    ca_.Bind(&block112, &phi_bb112_5, &phi_bb112_7, &phi_bb112_11, &phi_bb112_12, &phi_bb112_13, &phi_bb112_14, &phi_bb112_15, &phi_bb112_16, &phi_bb112_19, &phi_bb112_25);
    compiler::CodeAssemblerLabel label121(&ca_);
    tmp120 = Cast_Undefined_2(state_, TNode<HeapObject>{ca_.UncheckedCast<Union<TheHole, Undefined>>(tmp117)}, &label121);
    ca_.Goto(&block123, phi_bb112_5, phi_bb112_7, phi_bb112_11, phi_bb112_12, phi_bb112_13, phi_bb112_14, phi_bb112_15, phi_bb112_16, phi_bb112_19, phi_bb112_25);
    if (label121.is_used()) {
      ca_.Bind(&label121);
      ca_.Goto(&block124, phi_bb112_5, phi_bb112_7, phi_bb112_11, phi_bb112_12, phi_bb112_13, phi_bb112_14, phi_bb112_15, phi_bb112_16, phi_bb112_19, phi_bb112_25);
    }
  }

  TNode<Smi> phi_bb111_5;
  TNode<JSArray> phi_bb111_7;
  TNode<BoolT> phi_bb111_11;
  TNode<BoolT> phi_bb111_12;
  TNode<BoolT> phi_bb111_13;
  TNode<BoolT> phi_bb111_14;
  TNode<Smi> phi_bb111_15;
  TNode<Smi> phi_bb111_16;
  TNode<Smi> phi_bb111_19;
  TNode<Smi> phi_bb111_25;
  TNode<Union<HeapObject, TaggedIndex>> tmp122;
  TNode<IntPtrT> tmp123;
  TNode<IntPtrT> tmp124;
  TNode<IntPtrT> tmp125;
  TNode<UintPtrT> tmp126;
  TNode<UintPtrT> tmp127;
  TNode<BoolT> tmp128;
  if (block111.is_used()) {
    ca_.Bind(&block111, &phi_bb111_5, &phi_bb111_7, &phi_bb111_11, &phi_bb111_12, &phi_bb111_13, &phi_bb111_14, &phi_bb111_15, &phi_bb111_16, &phi_bb111_19, &phi_bb111_25);
    std::tie(tmp122, tmp123, tmp124) = FieldSliceFixedDoubleArrayValues_0(state_, TNode<FixedDoubleArray>{tmp101}).Flatten();
    tmp125 = Convert_intptr_Smi_0(state_, TNode<Smi>{phi_bb111_25});
    tmp126 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp125});
    tmp127 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp124});
    tmp128 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp126}, TNode<UintPtrT>{tmp127});
    ca_.Branch(tmp128, &block117, std::vector<compiler::Node*>{phi_bb111_5, phi_bb111_7, phi_bb111_11, phi_bb111_12, phi_bb111_13, phi_bb111_14, phi_bb111_15, phi_bb111_16, phi_bb111_19, phi_bb111_25, phi_bb111_25, phi_bb111_25}, &block118, std::vector<compiler::Node*>{phi_bb111_5, phi_bb111_7, phi_bb111_11, phi_bb111_12, phi_bb111_13, phi_bb111_14, phi_bb111_15, phi_bb111_16, phi_bb111_19, phi_bb111_25, phi_bb111_25, phi_bb111_25});
  }

  TNode<Smi> phi_bb117_5;
  TNode<JSArray> phi_bb117_7;
  TNode<BoolT> phi_bb117_11;
  TNode<BoolT> phi_bb117_12;
  TNode<BoolT> phi_bb117_13;
  TNode<BoolT> phi_bb117_14;
  TNode<Smi> phi_bb117_15;
  TNode<Smi> phi_bb117_16;
  TNode<Smi> phi_bb117_19;
  TNode<Smi> phi_bb117_25;
  TNode<Smi> phi_bb117_32;
  TNode<Smi> phi_bb117_33;
  TNode<IntPtrT> tmp129;
  TNode<IntPtrT> tmp130;
  TNode<Union<HeapObject, TaggedIndex>> tmp131;
  TNode<IntPtrT> tmp132;
  TNode<BoolT> tmp133;
  TNode<BoolT> tmp134;
  TNode<Float64T> tmp135;
  if (block117.is_used()) {
    ca_.Bind(&block117, &phi_bb117_5, &phi_bb117_7, &phi_bb117_11, &phi_bb117_12, &phi_bb117_13, &phi_bb117_14, &phi_bb117_15, &phi_bb117_16, &phi_bb117_19, &phi_bb117_25, &phi_bb117_32, &phi_bb117_33);
    tmp129 = TimesSizeOf_float64_or_undefined_or_hole_0(state_, TNode<IntPtrT>{tmp125});
    tmp130 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp123}, TNode<IntPtrT>{tmp129});
    std::tie(tmp131, tmp132) = NewReference_float64_or_undefined_or_hole_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp122}, TNode<IntPtrT>{tmp130}).Flatten();
    std::tie(tmp133, tmp134, tmp135) = Convert_float64_or_undefined_or_hole_Number_0(state_, TNode<Number>{tmp118}).Flatten();
    StoreFloat64OrUndefinedOrHole_0(state_, TorqueStructReference_float64_or_undefined_or_hole_0{TNode<Union<HeapObject, TaggedIndex>>{tmp131}, TNode<IntPtrT>{tmp132}, TorqueStructUnsafe_0{}}, TorqueStructfloat64_or_undefined_or_hole_0{TNode<BoolT>{tmp133}, TNode<BoolT>{tmp134}, TNode<Float64T>{tmp135}});
    ca_.Goto(&block109, phi_bb117_5, phi_bb117_7, phi_bb117_11, phi_bb117_12, phi_bb117_13, phi_bb117_14, phi_bb117_15, phi_bb117_16, phi_bb117_19, phi_bb117_25);
  }

  TNode<Smi> phi_bb118_5;
  TNode<JSArray> phi_bb118_7;
  TNode<BoolT> phi_bb118_11;
  TNode<BoolT> phi_bb118_12;
  TNode<BoolT> phi_bb118_13;
  TNode<BoolT> phi_bb118_14;
  TNode<Smi> phi_bb118_15;
  TNode<Smi> phi_bb118_16;
  TNode<Smi> phi_bb118_19;
  TNode<Smi> phi_bb118_25;
  TNode<Smi> phi_bb118_32;
  TNode<Smi> phi_bb118_33;
  if (block118.is_used()) {
    ca_.Bind(&block118, &phi_bb118_5, &phi_bb118_7, &phi_bb118_11, &phi_bb118_12, &phi_bb118_13, &phi_bb118_14, &phi_bb118_15, &phi_bb118_16, &phi_bb118_19, &phi_bb118_25, &phi_bb118_32, &phi_bb118_33);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:131:41");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Smi> phi_bb124_5;
  TNode<JSArray> phi_bb124_7;
  TNode<BoolT> phi_bb124_11;
  TNode<BoolT> phi_bb124_12;
  TNode<BoolT> phi_bb124_13;
  TNode<BoolT> phi_bb124_14;
  TNode<Smi> phi_bb124_15;
  TNode<Smi> phi_bb124_16;
  TNode<Smi> phi_bb124_19;
  TNode<Smi> phi_bb124_25;
  if (block124.is_used()) {
    ca_.Bind(&block124, &phi_bb124_5, &phi_bb124_7, &phi_bb124_11, &phi_bb124_12, &phi_bb124_13, &phi_bb124_14, &phi_bb124_15, &phi_bb124_16, &phi_bb124_19, &phi_bb124_25);
    ca_.Goto(&block121, phi_bb124_5, phi_bb124_7, phi_bb124_11, phi_bb124_12, phi_bb124_13, phi_bb124_14, phi_bb124_15, phi_bb124_16, phi_bb124_19, phi_bb124_25);
  }

  TNode<Smi> phi_bb123_5;
  TNode<JSArray> phi_bb123_7;
  TNode<BoolT> phi_bb123_11;
  TNode<BoolT> phi_bb123_12;
  TNode<BoolT> phi_bb123_13;
  TNode<BoolT> phi_bb123_14;
  TNode<Smi> phi_bb123_15;
  TNode<Smi> phi_bb123_16;
  TNode<Smi> phi_bb123_19;
  TNode<Smi> phi_bb123_25;
  TNode<Union<HeapObject, TaggedIndex>> tmp136;
  TNode<IntPtrT> tmp137;
  TNode<IntPtrT> tmp138;
  TNode<IntPtrT> tmp139;
  TNode<UintPtrT> tmp140;
  TNode<UintPtrT> tmp141;
  TNode<BoolT> tmp142;
  if (block123.is_used()) {
    ca_.Bind(&block123, &phi_bb123_5, &phi_bb123_7, &phi_bb123_11, &phi_bb123_12, &phi_bb123_13, &phi_bb123_14, &phi_bb123_15, &phi_bb123_16, &phi_bb123_19, &phi_bb123_25);
    std::tie(tmp136, tmp137, tmp138) = FieldSliceFixedDoubleArrayValues_0(state_, TNode<FixedDoubleArray>{tmp101}).Flatten();
    tmp139 = Convert_intptr_Smi_0(state_, TNode<Smi>{phi_bb123_25});
    tmp140 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp139});
    tmp141 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp138});
    tmp142 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp140}, TNode<UintPtrT>{tmp141});
    ca_.Branch(tmp142, &block129, std::vector<compiler::Node*>{phi_bb123_5, phi_bb123_7, phi_bb123_11, phi_bb123_12, phi_bb123_13, phi_bb123_14, phi_bb123_15, phi_bb123_16, phi_bb123_19, phi_bb123_25, phi_bb123_25, phi_bb123_25}, &block130, std::vector<compiler::Node*>{phi_bb123_5, phi_bb123_7, phi_bb123_11, phi_bb123_12, phi_bb123_13, phi_bb123_14, phi_bb123_15, phi_bb123_16, phi_bb123_19, phi_bb123_25, phi_bb123_25, phi_bb123_25});
  }

  TNode<Smi> phi_bb129_5;
  TNode<JSArray> phi_bb129_7;
  TNode<BoolT> phi_bb129_11;
  TNode<BoolT> phi_bb129_12;
  TNode<BoolT> phi_bb129_13;
  TNode<BoolT> phi_bb129_14;
  TNode<Smi> phi_bb129_15;
  TNode<Smi> phi_bb129_16;
  TNode<Smi> phi_bb129_19;
  TNode<Smi> phi_bb129_25;
  TNode<Smi> phi_bb129_32;
  TNode<Smi> phi_bb129_33;
  TNode<IntPtrT> tmp143;
  TNode<IntPtrT> tmp144;
  TNode<Union<HeapObject, TaggedIndex>> tmp145;
  TNode<IntPtrT> tmp146;
  TNode<BoolT> tmp147;
  TNode<BoolT> tmp148;
  TNode<Float64T> tmp149;
  if (block129.is_used()) {
    ca_.Bind(&block129, &phi_bb129_5, &phi_bb129_7, &phi_bb129_11, &phi_bb129_12, &phi_bb129_13, &phi_bb129_14, &phi_bb129_15, &phi_bb129_16, &phi_bb129_19, &phi_bb129_25, &phi_bb129_32, &phi_bb129_33);
    tmp143 = TimesSizeOf_float64_or_undefined_or_hole_0(state_, TNode<IntPtrT>{tmp139});
    tmp144 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp137}, TNode<IntPtrT>{tmp143});
    std::tie(tmp145, tmp146) = NewReference_float64_or_undefined_or_hole_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp136}, TNode<IntPtrT>{tmp144}).Flatten();
    std::tie(tmp147, tmp148, tmp149) = kDoubleUndefined_0(state_).Flatten();
    StoreFloat64OrUndefinedOrHole_0(state_, TorqueStructReference_float64_or_undefined_or_hole_0{TNode<Union<HeapObject, TaggedIndex>>{tmp145}, TNode<IntPtrT>{tmp146}, TorqueStructUnsafe_0{}}, TorqueStructfloat64_or_undefined_or_hole_0{TNode<BoolT>{tmp147}, TNode<BoolT>{tmp148}, TNode<Float64T>{tmp149}});
    ca_.Goto(&block121, phi_bb129_5, phi_bb129_7, phi_bb129_11, phi_bb129_12, phi_bb129_13, phi_bb129_14, phi_bb129_15, phi_bb129_16, phi_bb129_19, phi_bb129_25);
  }

  TNode<Smi> phi_bb130_5;
  TNode<JSArray> phi_bb130_7;
  TNode<BoolT> phi_bb130_11;
  TNode<BoolT> phi_bb130_12;
  TNode<BoolT> phi_bb130_13;
  TNode<BoolT> phi_bb130_14;
  TNode<Smi> phi_bb130_15;
  TNode<Smi> phi_bb130_16;
  TNode<Smi> phi_bb130_19;
  TNode<Smi> phi_bb130_25;
  TNode<Smi> phi_bb130_32;
  TNode<Smi> phi_bb130_33;
  if (block130.is_used()) {
    ca_.Bind(&block130, &phi_bb130_5, &phi_bb130_7, &phi_bb130_11, &phi_bb130_12, &phi_bb130_13, &phi_bb130_14, &phi_bb130_15, &phi_bb130_16, &phi_bb130_19, &phi_bb130_25, &phi_bb130_32, &phi_bb130_33);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:131:41");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Smi> phi_bb121_5;
  TNode<JSArray> phi_bb121_7;
  TNode<BoolT> phi_bb121_11;
  TNode<BoolT> phi_bb121_12;
  TNode<BoolT> phi_bb121_13;
  TNode<BoolT> phi_bb121_14;
  TNode<Smi> phi_bb121_15;
  TNode<Smi> phi_bb121_16;
  TNode<Smi> phi_bb121_19;
  TNode<Smi> phi_bb121_25;
  if (block121.is_used()) {
    ca_.Bind(&block121, &phi_bb121_5, &phi_bb121_7, &phi_bb121_11, &phi_bb121_12, &phi_bb121_13, &phi_bb121_14, &phi_bb121_15, &phi_bb121_16, &phi_bb121_19, &phi_bb121_25);
    ca_.Goto(&block109, phi_bb121_5, phi_bb121_7, phi_bb121_11, phi_bb121_12, phi_bb121_13, phi_bb121_14, phi_bb121_15, phi_bb121_16, phi_bb121_19, phi_bb121_25);
  }

  TNode<Smi> phi_bb109_5;
  TNode<JSArray> phi_bb109_7;
  TNode<BoolT> phi_bb109_11;
  TNode<BoolT> phi_bb109_12;
  TNode<BoolT> phi_bb109_13;
  TNode<BoolT> phi_bb109_14;
  TNode<Smi> phi_bb109_15;
  TNode<Smi> phi_bb109_16;
  TNode<Smi> phi_bb109_19;
  TNode<Smi> phi_bb109_25;
  TNode<Smi> tmp150;
  TNode<Smi> tmp151;
  if (block109.is_used()) {
    ca_.Bind(&block109, &phi_bb109_5, &phi_bb109_7, &phi_bb109_11, &phi_bb109_12, &phi_bb109_13, &phi_bb109_14, &phi_bb109_15, &phi_bb109_16, &phi_bb109_19, &phi_bb109_25);
    tmp150 = FromConstexpr_Smi_constexpr_int31_0(state_, 1);
    tmp151 = CodeStubAssembler(state_).SmiAdd(TNode<Smi>{phi_bb109_25}, TNode<Smi>{tmp150});
    ca_.Goto(&block99, phi_bb109_5, phi_bb109_7, phi_bb109_11, phi_bb109_12, phi_bb109_13, phi_bb109_14, phi_bb109_15, phi_bb109_16, phi_bb109_19, tmp151);
  }

  TNode<Smi> phi_bb98_5;
  TNode<JSArray> phi_bb98_7;
  TNode<BoolT> phi_bb98_11;
  TNode<BoolT> phi_bb98_12;
  TNode<BoolT> phi_bb98_13;
  TNode<BoolT> phi_bb98_14;
  TNode<Smi> phi_bb98_15;
  TNode<Smi> phi_bb98_16;
  TNode<Smi> phi_bb98_19;
  TNode<Smi> phi_bb98_25;
  TNode<IntPtrT> tmp152;
  if (block98.is_used()) {
    ca_.Bind(&block98, &phi_bb98_5, &phi_bb98_7, &phi_bb98_11, &phi_bb98_12, &phi_bb98_13, &phi_bb98_14, &phi_bb98_15, &phi_bb98_16, &phi_bb98_19, &phi_bb98_25);
    tmp152 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    CodeStubAssembler(state_).StoreReference<FixedArrayBase>(CodeStubAssembler::Reference{tmp102, tmp152}, tmp101);
    ca_.Goto(&block96, phi_bb98_5, phi_bb98_7, phi_bb98_11, phi_bb98_12, phi_bb98_13, phi_bb98_14, phi_bb98_15, phi_bb98_16, phi_bb98_19, tmp102);
  }

  TNode<Smi> phi_bb95_5;
  TNode<JSArray> phi_bb95_7;
  TNode<BoolT> phi_bb95_11;
  TNode<BoolT> phi_bb95_12;
  TNode<BoolT> phi_bb95_13;
  TNode<BoolT> phi_bb95_14;
  TNode<Smi> phi_bb95_15;
  TNode<Smi> phi_bb95_16;
  TNode<Smi> phi_bb95_19;
  TNode<JSArray> tmp153;
  if (block95.is_used()) {
    ca_.Bind(&block95, &phi_bb95_5, &phi_bb95_7, &phi_bb95_11, &phi_bb95_12, &phi_bb95_13, &phi_bb95_14, &phi_bb95_15, &phi_bb95_16, &phi_bb95_19);
    tmp153 = NewJSArray_0(state_, TNode<Context>{p_context}, TNode<Map>{tmp99}, TNode<FixedArrayBase>{tmp5});
    ca_.Goto(&block96, phi_bb95_5, phi_bb95_7, phi_bb95_11, phi_bb95_12, phi_bb95_13, phi_bb95_14, phi_bb95_15, phi_bb95_16, phi_bb95_19, tmp153);
  }

  TNode<Smi> phi_bb96_5;
  TNode<JSArray> phi_bb96_7;
  TNode<BoolT> phi_bb96_11;
  TNode<BoolT> phi_bb96_12;
  TNode<BoolT> phi_bb96_13;
  TNode<BoolT> phi_bb96_14;
  TNode<Smi> phi_bb96_15;
  TNode<Smi> phi_bb96_16;
  TNode<Smi> phi_bb96_19;
  TNode<JSArray> phi_bb96_23;
  TNode<FixedArray> tmp154;
  if (block96.is_used()) {
    ca_.Bind(&block96, &phi_bb96_5, &phi_bb96_7, &phi_bb96_11, &phi_bb96_12, &phi_bb96_13, &phi_bb96_14, &phi_bb96_15, &phi_bb96_16, &phi_bb96_19, &phi_bb96_23);
    tmp154 = kEmptyFixedArray_0(state_);
    *label_Bailout_parameter_1 = phi_bb96_15;
    *label_Bailout_parameter_0 = phi_bb96_23;
    ca_.Goto(label_Bailout);
  }

  TNode<Smi> phi_bb135_5;
  TNode<JSArray> phi_bb135_7;
  TNode<BoolT> phi_bb135_11;
  TNode<BoolT> phi_bb135_12;
  TNode<BoolT> phi_bb135_13;
  TNode<BoolT> phi_bb135_14;
  if (block135.is_used()) {
    ca_.Bind(&block135, &phi_bb135_5, &phi_bb135_7, &phi_bb135_11, &phi_bb135_12, &phi_bb135_13, &phi_bb135_14);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-map.tq", 104});
      CodeStubAssembler(state_).FailAssert("Torque assert 'Convert<intptr>(validLength) <= length' failed", pos_stack);
    }
  }

  TNode<Smi> phi_bb134_5;
  TNode<JSArray> phi_bb134_7;
  TNode<BoolT> phi_bb134_11;
  TNode<BoolT> phi_bb134_12;
  TNode<BoolT> phi_bb134_13;
  TNode<BoolT> phi_bb134_14;
  TNode<Int32T> tmp155;
  TNode<BoolT> tmp156;
  if (block134.is_used()) {
    ca_.Bind(&block134, &phi_bb134_5, &phi_bb134_7, &phi_bb134_11, &phi_bb134_12, &phi_bb134_13, &phi_bb134_14);
    tmp155 = FromConstexpr_ElementsKind_constexpr_PACKED_SMI_ELEMENTS_0(state_, ElementsKind::PACKED_SMI_ELEMENTS);
    tmp156 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{phi_bb134_11});
    ca_.Branch(tmp156, &block136, std::vector<compiler::Node*>{phi_bb134_5, phi_bb134_7, phi_bb134_11, phi_bb134_12, phi_bb134_13, phi_bb134_14}, &block137, std::vector<compiler::Node*>{phi_bb134_5, phi_bb134_7, phi_bb134_11, phi_bb134_12, phi_bb134_13, phi_bb134_14, tmp155});
  }

  TNode<Smi> phi_bb136_5;
  TNode<JSArray> phi_bb136_7;
  TNode<BoolT> phi_bb136_11;
  TNode<BoolT> phi_bb136_12;
  TNode<BoolT> phi_bb136_13;
  TNode<BoolT> phi_bb136_14;
  if (block136.is_used()) {
    ca_.Bind(&block136, &phi_bb136_5, &phi_bb136_7, &phi_bb136_11, &phi_bb136_12, &phi_bb136_13, &phi_bb136_14);
    ca_.Branch(phi_bb136_12, &block138, std::vector<compiler::Node*>{phi_bb136_5, phi_bb136_7, phi_bb136_11, phi_bb136_12, phi_bb136_13, phi_bb136_14}, &block139, std::vector<compiler::Node*>{phi_bb136_5, phi_bb136_7, phi_bb136_11, phi_bb136_12, phi_bb136_13, phi_bb136_14});
  }

  TNode<Smi> phi_bb138_5;
  TNode<JSArray> phi_bb138_7;
  TNode<BoolT> phi_bb138_11;
  TNode<BoolT> phi_bb138_12;
  TNode<BoolT> phi_bb138_13;
  TNode<BoolT> phi_bb138_14;
  TNode<Int32T> tmp157;
  if (block138.is_used()) {
    ca_.Bind(&block138, &phi_bb138_5, &phi_bb138_7, &phi_bb138_11, &phi_bb138_12, &phi_bb138_13, &phi_bb138_14);
    tmp157 = FromConstexpr_ElementsKind_constexpr_PACKED_DOUBLE_ELEMENTS_0(state_, ElementsKind::PACKED_DOUBLE_ELEMENTS);
    ca_.Goto(&block140, phi_bb138_5, phi_bb138_7, phi_bb138_11, phi_bb138_12, phi_bb138_13, phi_bb138_14, tmp157);
  }

  TNode<Smi> phi_bb139_5;
  TNode<JSArray> phi_bb139_7;
  TNode<BoolT> phi_bb139_11;
  TNode<BoolT> phi_bb139_12;
  TNode<BoolT> phi_bb139_13;
  TNode<BoolT> phi_bb139_14;
  if (block139.is_used()) {
    ca_.Bind(&block139, &phi_bb139_5, &phi_bb139_7, &phi_bb139_11, &phi_bb139_12, &phi_bb139_13, &phi_bb139_14);
    ca_.Branch(phi_bb139_13, &block141, std::vector<compiler::Node*>{phi_bb139_5, phi_bb139_7, phi_bb139_11, phi_bb139_12, phi_bb139_13, phi_bb139_14}, &block142, std::vector<compiler::Node*>{phi_bb139_5, phi_bb139_7, phi_bb139_11, phi_bb139_12, phi_bb139_13, phi_bb139_14});
  }

  TNode<Smi> phi_bb141_5;
  TNode<JSArray> phi_bb141_7;
  TNode<BoolT> phi_bb141_11;
  TNode<BoolT> phi_bb141_12;
  TNode<BoolT> phi_bb141_13;
  TNode<BoolT> phi_bb141_14;
  TNode<BoolT> tmp158;
  if (block141.is_used()) {
    ca_.Bind(&block141, &phi_bb141_5, &phi_bb141_7, &phi_bb141_11, &phi_bb141_12, &phi_bb141_13, &phi_bb141_14);
    tmp158 = FromConstexpr_bool_constexpr_bool_0(state_, V8_UNDEFINED_DOUBLE_BOOL);
    ca_.Branch(tmp158, &block144, std::vector<compiler::Node*>{phi_bb141_5, phi_bb141_7, phi_bb141_11, phi_bb141_12, phi_bb141_13, phi_bb141_14}, &block145, std::vector<compiler::Node*>{phi_bb141_5, phi_bb141_7, phi_bb141_11, phi_bb141_12, phi_bb141_13, phi_bb141_14});
  }

  TNode<Smi> phi_bb145_5;
  TNode<JSArray> phi_bb145_7;
  TNode<BoolT> phi_bb145_11;
  TNode<BoolT> phi_bb145_12;
  TNode<BoolT> phi_bb145_13;
  TNode<BoolT> phi_bb145_14;
  if (block145.is_used()) {
    ca_.Bind(&block145, &phi_bb145_5, &phi_bb145_7, &phi_bb145_11, &phi_bb145_12, &phi_bb145_13, &phi_bb145_14);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-map.tq", 110});
      CodeStubAssembler(state_).FailAssert("Torque assert 'kEnableUndefinedDouble' failed", pos_stack);
    }
  }

  TNode<Smi> phi_bb144_5;
  TNode<JSArray> phi_bb144_7;
  TNode<BoolT> phi_bb144_11;
  TNode<BoolT> phi_bb144_12;
  TNode<BoolT> phi_bb144_13;
  TNode<BoolT> phi_bb144_14;
  TNode<Int32T> tmp159;
  if (block144.is_used()) {
    ca_.Bind(&block144, &phi_bb144_5, &phi_bb144_7, &phi_bb144_11, &phi_bb144_12, &phi_bb144_13, &phi_bb144_14);
    tmp159 = FromConstexpr_ElementsKind_constexpr_HOLEY_DOUBLE_ELEMENTS_0(state_, ElementsKind::HOLEY_DOUBLE_ELEMENTS);
    ca_.Goto(&block143, phi_bb144_5, phi_bb144_7, phi_bb144_11, phi_bb144_12, phi_bb144_13, phi_bb144_14, tmp159);
  }

  TNode<Smi> phi_bb142_5;
  TNode<JSArray> phi_bb142_7;
  TNode<BoolT> phi_bb142_11;
  TNode<BoolT> phi_bb142_12;
  TNode<BoolT> phi_bb142_13;
  TNode<BoolT> phi_bb142_14;
  TNode<Int32T> tmp160;
  if (block142.is_used()) {
    ca_.Bind(&block142, &phi_bb142_5, &phi_bb142_7, &phi_bb142_11, &phi_bb142_12, &phi_bb142_13, &phi_bb142_14);
    tmp160 = FromConstexpr_ElementsKind_constexpr_PACKED_ELEMENTS_0(state_, ElementsKind::PACKED_ELEMENTS);
    ca_.Goto(&block143, phi_bb142_5, phi_bb142_7, phi_bb142_11, phi_bb142_12, phi_bb142_13, phi_bb142_14, tmp160);
  }

  TNode<Smi> phi_bb143_5;
  TNode<JSArray> phi_bb143_7;
  TNode<BoolT> phi_bb143_11;
  TNode<BoolT> phi_bb143_12;
  TNode<BoolT> phi_bb143_13;
  TNode<BoolT> phi_bb143_14;
  TNode<Int32T> phi_bb143_20;
  if (block143.is_used()) {
    ca_.Bind(&block143, &phi_bb143_5, &phi_bb143_7, &phi_bb143_11, &phi_bb143_12, &phi_bb143_13, &phi_bb143_14, &phi_bb143_20);
    ca_.Goto(&block140, phi_bb143_5, phi_bb143_7, phi_bb143_11, phi_bb143_12, phi_bb143_13, phi_bb143_14, phi_bb143_20);
  }

  TNode<Smi> phi_bb140_5;
  TNode<JSArray> phi_bb140_7;
  TNode<BoolT> phi_bb140_11;
  TNode<BoolT> phi_bb140_12;
  TNode<BoolT> phi_bb140_13;
  TNode<BoolT> phi_bb140_14;
  TNode<Int32T> phi_bb140_20;
  if (block140.is_used()) {
    ca_.Bind(&block140, &phi_bb140_5, &phi_bb140_7, &phi_bb140_11, &phi_bb140_12, &phi_bb140_13, &phi_bb140_14, &phi_bb140_20);
    ca_.Goto(&block137, phi_bb140_5, phi_bb140_7, phi_bb140_11, phi_bb140_12, phi_bb140_13, phi_bb140_14, phi_bb140_20);
  }

  TNode<Smi> phi_bb137_5;
  TNode<JSArray> phi_bb137_7;
  TNode<BoolT> phi_bb137_11;
  TNode<BoolT> phi_bb137_12;
  TNode<BoolT> phi_bb137_13;
  TNode<BoolT> phi_bb137_14;
  TNode<Int32T> phi_bb137_20;
  if (block137.is_used()) {
    ca_.Bind(&block137, &phi_bb137_5, &phi_bb137_7, &phi_bb137_11, &phi_bb137_12, &phi_bb137_13, &phi_bb137_14, &phi_bb137_20);
    ca_.Branch(phi_bb137_14, &block148, std::vector<compiler::Node*>{phi_bb137_5, phi_bb137_7, phi_bb137_11, phi_bb137_12, phi_bb137_13, phi_bb137_14, phi_bb137_20, phi_bb137_14}, &block149, std::vector<compiler::Node*>{phi_bb137_5, phi_bb137_7, phi_bb137_11, phi_bb137_12, phi_bb137_13, phi_bb137_14, phi_bb137_20, phi_bb137_14});
  }

  TNode<Smi> phi_bb148_5;
  TNode<JSArray> phi_bb148_7;
  TNode<BoolT> phi_bb148_11;
  TNode<BoolT> phi_bb148_12;
  TNode<BoolT> phi_bb148_13;
  TNode<BoolT> phi_bb148_14;
  TNode<Int32T> phi_bb148_20;
  TNode<BoolT> phi_bb148_21;
  TNode<BoolT> tmp161;
  if (block148.is_used()) {
    ca_.Bind(&block148, &phi_bb148_5, &phi_bb148_7, &phi_bb148_11, &phi_bb148_12, &phi_bb148_13, &phi_bb148_14, &phi_bb148_20, &phi_bb148_21);
    tmp161 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block150, phi_bb148_5, phi_bb148_7, phi_bb148_11, phi_bb148_12, phi_bb148_13, phi_bb148_14, phi_bb148_20, phi_bb148_21, tmp161);
  }

  TNode<Smi> phi_bb149_5;
  TNode<JSArray> phi_bb149_7;
  TNode<BoolT> phi_bb149_11;
  TNode<BoolT> phi_bb149_12;
  TNode<BoolT> phi_bb149_13;
  TNode<BoolT> phi_bb149_14;
  TNode<Int32T> phi_bb149_20;
  TNode<BoolT> phi_bb149_21;
  TNode<IntPtrT> tmp162;
  TNode<BoolT> tmp163;
  if (block149.is_used()) {
    ca_.Bind(&block149, &phi_bb149_5, &phi_bb149_7, &phi_bb149_11, &phi_bb149_12, &phi_bb149_13, &phi_bb149_14, &phi_bb149_20, &phi_bb149_21);
    tmp162 = Convert_intptr_Smi_0(state_, TNode<Smi>{p_len});
    tmp163 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{tmp162}, TNode<IntPtrT>{tmp82});
    ca_.Goto(&block150, phi_bb149_5, phi_bb149_7, phi_bb149_11, phi_bb149_12, phi_bb149_13, phi_bb149_14, phi_bb149_20, phi_bb149_21, tmp163);
  }

  TNode<Smi> phi_bb150_5;
  TNode<JSArray> phi_bb150_7;
  TNode<BoolT> phi_bb150_11;
  TNode<BoolT> phi_bb150_12;
  TNode<BoolT> phi_bb150_13;
  TNode<BoolT> phi_bb150_14;
  TNode<Int32T> phi_bb150_20;
  TNode<BoolT> phi_bb150_21;
  TNode<BoolT> phi_bb150_22;
  if (block150.is_used()) {
    ca_.Bind(&block150, &phi_bb150_5, &phi_bb150_7, &phi_bb150_11, &phi_bb150_12, &phi_bb150_13, &phi_bb150_14, &phi_bb150_20, &phi_bb150_21, &phi_bb150_22);
    ca_.Branch(phi_bb150_22, &block146, std::vector<compiler::Node*>{phi_bb150_5, phi_bb150_7, phi_bb150_11, phi_bb150_12, phi_bb150_13, phi_bb150_14, phi_bb150_20}, &block147, std::vector<compiler::Node*>{phi_bb150_5, phi_bb150_7, phi_bb150_11, phi_bb150_12, phi_bb150_13, phi_bb150_14, phi_bb150_20});
  }

  TNode<Smi> phi_bb146_5;
  TNode<JSArray> phi_bb146_7;
  TNode<BoolT> phi_bb146_11;
  TNode<BoolT> phi_bb146_12;
  TNode<BoolT> phi_bb146_13;
  TNode<BoolT> phi_bb146_14;
  TNode<Int32T> phi_bb146_20;
  TNode<Int32T> tmp164;
  if (block146.is_used()) {
    ca_.Bind(&block146, &phi_bb146_5, &phi_bb146_7, &phi_bb146_11, &phi_bb146_12, &phi_bb146_13, &phi_bb146_14, &phi_bb146_20);
    tmp164 = FastHoleyElementsKind_0(state_, TNode<Int32T>{phi_bb146_20});
    ca_.Goto(&block147, phi_bb146_5, phi_bb146_7, phi_bb146_11, phi_bb146_12, phi_bb146_13, phi_bb146_14, tmp164);
  }

  TNode<Smi> phi_bb147_5;
  TNode<JSArray> phi_bb147_7;
  TNode<BoolT> phi_bb147_11;
  TNode<BoolT> phi_bb147_12;
  TNode<BoolT> phi_bb147_13;
  TNode<BoolT> phi_bb147_14;
  TNode<Int32T> phi_bb147_20;
  TNode<NativeContext> tmp165;
  TNode<Map> tmp166;
  TNode<BoolT> tmp167;
  if (block147.is_used()) {
    ca_.Bind(&block147, &phi_bb147_5, &phi_bb147_7, &phi_bb147_11, &phi_bb147_12, &phi_bb147_13, &phi_bb147_14, &phi_bb147_20);
    tmp165 = CodeStubAssembler(state_).LoadNativeContext(TNode<Context>{p_context});
    tmp166 = CodeStubAssembler(state_).LoadJSArrayElementsMap(TNode<Int32T>{phi_bb147_20}, TNode<NativeContext>{tmp165});
    tmp167 = CodeStubAssembler(state_).IsDoubleElementsKind(TNode<Int32T>{phi_bb147_20});
    ca_.Branch(tmp167, &block151, std::vector<compiler::Node*>{phi_bb147_5, phi_bb147_7, phi_bb147_11, phi_bb147_12, phi_bb147_13, phi_bb147_14}, &block152, std::vector<compiler::Node*>{phi_bb147_5, phi_bb147_7, phi_bb147_11, phi_bb147_12, phi_bb147_13, phi_bb147_14});
  }

  TNode<Smi> phi_bb151_5;
  TNode<JSArray> phi_bb151_7;
  TNode<BoolT> phi_bb151_11;
  TNode<BoolT> phi_bb151_12;
  TNode<BoolT> phi_bb151_13;
  TNode<BoolT> phi_bb151_14;
  TNode<FixedDoubleArray> tmp168;
  TNode<JSArray> tmp169;
  TNode<Smi> tmp170;
  if (block151.is_used()) {
    ca_.Bind(&block151, &phi_bb151_5, &phi_bb151_7, &phi_bb151_11, &phi_bb151_12, &phi_bb151_13, &phi_bb151_14);
    tmp168 = CodeStubAssembler(state_).AllocateFixedDoubleArrayWithHoles(TNode<IntPtrT>{tmp82});
    tmp169 = NewJSArray_0(state_, TNode<Context>{p_context}, TNode<Map>{tmp166}, TNode<FixedArrayBase>{tmp5});
    tmp170 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block156, phi_bb151_5, phi_bb151_7, phi_bb151_11, phi_bb151_12, phi_bb151_13, phi_bb151_14, tmp170);
  }

  TNode<Smi> phi_bb156_5;
  TNode<JSArray> phi_bb156_7;
  TNode<BoolT> phi_bb156_11;
  TNode<BoolT> phi_bb156_12;
  TNode<BoolT> phi_bb156_13;
  TNode<BoolT> phi_bb156_14;
  TNode<Smi> phi_bb156_24;
  TNode<BoolT> tmp171;
  if (block156.is_used()) {
    ca_.Bind(&block156, &phi_bb156_5, &phi_bb156_7, &phi_bb156_11, &phi_bb156_12, &phi_bb156_13, &phi_bb156_14, &phi_bb156_24);
    tmp171 = CodeStubAssembler(state_).SmiLessThan(TNode<Smi>{phi_bb156_24}, TNode<Smi>{p_len});
    ca_.Branch(tmp171, &block154, std::vector<compiler::Node*>{phi_bb156_5, phi_bb156_7, phi_bb156_11, phi_bb156_12, phi_bb156_13, phi_bb156_14, phi_bb156_24}, &block155, std::vector<compiler::Node*>{phi_bb156_5, phi_bb156_7, phi_bb156_11, phi_bb156_12, phi_bb156_13, phi_bb156_14, phi_bb156_24});
  }

  TNode<Smi> phi_bb154_5;
  TNode<JSArray> phi_bb154_7;
  TNode<BoolT> phi_bb154_11;
  TNode<BoolT> phi_bb154_12;
  TNode<BoolT> phi_bb154_13;
  TNode<BoolT> phi_bb154_14;
  TNode<Smi> phi_bb154_24;
  TNode<Union<HeapObject, TaggedIndex>> tmp172;
  TNode<IntPtrT> tmp173;
  TNode<IntPtrT> tmp174;
  TNode<IntPtrT> tmp175;
  TNode<UintPtrT> tmp176;
  TNode<UintPtrT> tmp177;
  TNode<BoolT> tmp178;
  if (block154.is_used()) {
    ca_.Bind(&block154, &phi_bb154_5, &phi_bb154_7, &phi_bb154_11, &phi_bb154_12, &phi_bb154_13, &phi_bb154_14, &phi_bb154_24);
    std::tie(tmp172, tmp173, tmp174) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp5}).Flatten();
    tmp175 = Convert_intptr_Smi_0(state_, TNode<Smi>{phi_bb154_24});
    tmp176 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp175});
    tmp177 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp174});
    tmp178 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp176}, TNode<UintPtrT>{tmp177});
    ca_.Branch(tmp178, &block162, std::vector<compiler::Node*>{phi_bb154_5, phi_bb154_7, phi_bb154_11, phi_bb154_12, phi_bb154_13, phi_bb154_14, phi_bb154_24, phi_bb154_24, phi_bb154_24}, &block163, std::vector<compiler::Node*>{phi_bb154_5, phi_bb154_7, phi_bb154_11, phi_bb154_12, phi_bb154_13, phi_bb154_14, phi_bb154_24, phi_bb154_24, phi_bb154_24});
  }

  TNode<Smi> phi_bb162_5;
  TNode<JSArray> phi_bb162_7;
  TNode<BoolT> phi_bb162_11;
  TNode<BoolT> phi_bb162_12;
  TNode<BoolT> phi_bb162_13;
  TNode<BoolT> phi_bb162_14;
  TNode<Smi> phi_bb162_24;
  TNode<Smi> phi_bb162_29;
  TNode<Smi> phi_bb162_30;
  TNode<IntPtrT> tmp179;
  TNode<IntPtrT> tmp180;
  TNode<Union<HeapObject, TaggedIndex>> tmp181;
  TNode<IntPtrT> tmp182;
  TNode<Object> tmp183;
  TNode<Union<HeapNumber, Smi, TheHole, Undefined>> tmp184;
  TNode<Number> tmp185;
  if (block162.is_used()) {
    ca_.Bind(&block162, &phi_bb162_5, &phi_bb162_7, &phi_bb162_11, &phi_bb162_12, &phi_bb162_13, &phi_bb162_14, &phi_bb162_24, &phi_bb162_29, &phi_bb162_30);
    tmp179 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp175});
    tmp180 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp173}, TNode<IntPtrT>{tmp179});
    std::tie(tmp181, tmp182) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp172}, TNode<IntPtrT>{tmp180}).Flatten();
    tmp183 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp181, tmp182});
    tmp184 = UnsafeCast_Smi_OR_HeapNumber_OR_Undefined_OR_TheHole_0(state_, TNode<Context>{p_context}, TNode<Object>{tmp183});
    compiler::CodeAssemblerLabel label186(&ca_);
    tmp185 = Cast_Number_0(state_, TNode<Object>{tmp184}, &label186);
    ca_.Goto(&block168, phi_bb162_5, phi_bb162_7, phi_bb162_11, phi_bb162_12, phi_bb162_13, phi_bb162_14, phi_bb162_24);
    if (label186.is_used()) {
      ca_.Bind(&label186);
      ca_.Goto(&block169, phi_bb162_5, phi_bb162_7, phi_bb162_11, phi_bb162_12, phi_bb162_13, phi_bb162_14, phi_bb162_24);
    }
  }

  TNode<Smi> phi_bb163_5;
  TNode<JSArray> phi_bb163_7;
  TNode<BoolT> phi_bb163_11;
  TNode<BoolT> phi_bb163_12;
  TNode<BoolT> phi_bb163_13;
  TNode<BoolT> phi_bb163_14;
  TNode<Smi> phi_bb163_24;
  TNode<Smi> phi_bb163_29;
  TNode<Smi> phi_bb163_30;
  if (block163.is_used()) {
    ca_.Bind(&block163, &phi_bb163_5, &phi_bb163_7, &phi_bb163_11, &phi_bb163_12, &phi_bb163_13, &phi_bb163_14, &phi_bb163_24, &phi_bb163_29, &phi_bb163_30);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:131:41");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Smi> phi_bb169_5;
  TNode<JSArray> phi_bb169_7;
  TNode<BoolT> phi_bb169_11;
  TNode<BoolT> phi_bb169_12;
  TNode<BoolT> phi_bb169_13;
  TNode<BoolT> phi_bb169_14;
  TNode<Smi> phi_bb169_24;
  TNode<Undefined> tmp187;
  if (block169.is_used()) {
    ca_.Bind(&block169, &phi_bb169_5, &phi_bb169_7, &phi_bb169_11, &phi_bb169_12, &phi_bb169_13, &phi_bb169_14, &phi_bb169_24);
    compiler::CodeAssemblerLabel label188(&ca_);
    tmp187 = Cast_Undefined_2(state_, TNode<HeapObject>{ca_.UncheckedCast<Union<TheHole, Undefined>>(tmp184)}, &label188);
    ca_.Goto(&block180, phi_bb169_5, phi_bb169_7, phi_bb169_11, phi_bb169_12, phi_bb169_13, phi_bb169_14, phi_bb169_24);
    if (label188.is_used()) {
      ca_.Bind(&label188);
      ca_.Goto(&block181, phi_bb169_5, phi_bb169_7, phi_bb169_11, phi_bb169_12, phi_bb169_13, phi_bb169_14, phi_bb169_24);
    }
  }

  TNode<Smi> phi_bb168_5;
  TNode<JSArray> phi_bb168_7;
  TNode<BoolT> phi_bb168_11;
  TNode<BoolT> phi_bb168_12;
  TNode<BoolT> phi_bb168_13;
  TNode<BoolT> phi_bb168_14;
  TNode<Smi> phi_bb168_24;
  TNode<Union<HeapObject, TaggedIndex>> tmp189;
  TNode<IntPtrT> tmp190;
  TNode<IntPtrT> tmp191;
  TNode<IntPtrT> tmp192;
  TNode<UintPtrT> tmp193;
  TNode<UintPtrT> tmp194;
  TNode<BoolT> tmp195;
  if (block168.is_used()) {
    ca_.Bind(&block168, &phi_bb168_5, &phi_bb168_7, &phi_bb168_11, &phi_bb168_12, &phi_bb168_13, &phi_bb168_14, &phi_bb168_24);
    std::tie(tmp189, tmp190, tmp191) = FieldSliceFixedDoubleArrayValues_0(state_, TNode<FixedDoubleArray>{tmp168}).Flatten();
    tmp192 = Convert_intptr_Smi_0(state_, TNode<Smi>{phi_bb168_24});
    tmp193 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp192});
    tmp194 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp191});
    tmp195 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp193}, TNode<UintPtrT>{tmp194});
    ca_.Branch(tmp195, &block174, std::vector<compiler::Node*>{phi_bb168_5, phi_bb168_7, phi_bb168_11, phi_bb168_12, phi_bb168_13, phi_bb168_14, phi_bb168_24, phi_bb168_24, phi_bb168_24}, &block175, std::vector<compiler::Node*>{phi_bb168_5, phi_bb168_7, phi_bb168_11, phi_bb168_12, phi_bb168_13, phi_bb168_14, phi_bb168_24, phi_bb168_24, phi_bb168_24});
  }

  TNode<Smi> phi_bb174_5;
  TNode<JSArray> phi_bb174_7;
  TNode<BoolT> phi_bb174_11;
  TNode<BoolT> phi_bb174_12;
  TNode<BoolT> phi_bb174_13;
  TNode<BoolT> phi_bb174_14;
  TNode<Smi> phi_bb174_24;
  TNode<Smi> phi_bb174_31;
  TNode<Smi> phi_bb174_32;
  TNode<IntPtrT> tmp196;
  TNode<IntPtrT> tmp197;
  TNode<Union<HeapObject, TaggedIndex>> tmp198;
  TNode<IntPtrT> tmp199;
  TNode<BoolT> tmp200;
  TNode<BoolT> tmp201;
  TNode<Float64T> tmp202;
  if (block174.is_used()) {
    ca_.Bind(&block174, &phi_bb174_5, &phi_bb174_7, &phi_bb174_11, &phi_bb174_12, &phi_bb174_13, &phi_bb174_14, &phi_bb174_24, &phi_bb174_31, &phi_bb174_32);
    tmp196 = TimesSizeOf_float64_or_undefined_or_hole_0(state_, TNode<IntPtrT>{tmp192});
    tmp197 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp190}, TNode<IntPtrT>{tmp196});
    std::tie(tmp198, tmp199) = NewReference_float64_or_undefined_or_hole_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp189}, TNode<IntPtrT>{tmp197}).Flatten();
    std::tie(tmp200, tmp201, tmp202) = Convert_float64_or_undefined_or_hole_Number_0(state_, TNode<Number>{tmp185}).Flatten();
    StoreFloat64OrUndefinedOrHole_0(state_, TorqueStructReference_float64_or_undefined_or_hole_0{TNode<Union<HeapObject, TaggedIndex>>{tmp198}, TNode<IntPtrT>{tmp199}, TorqueStructUnsafe_0{}}, TorqueStructfloat64_or_undefined_or_hole_0{TNode<BoolT>{tmp200}, TNode<BoolT>{tmp201}, TNode<Float64T>{tmp202}});
    ca_.Goto(&block166, phi_bb174_5, phi_bb174_7, phi_bb174_11, phi_bb174_12, phi_bb174_13, phi_bb174_14, phi_bb174_24);
  }

  TNode<Smi> phi_bb175_5;
  TNode<JSArray> phi_bb175_7;
  TNode<BoolT> phi_bb175_11;
  TNode<BoolT> phi_bb175_12;
  TNode<BoolT> phi_bb175_13;
  TNode<BoolT> phi_bb175_14;
  TNode<Smi> phi_bb175_24;
  TNode<Smi> phi_bb175_31;
  TNode<Smi> phi_bb175_32;
  if (block175.is_used()) {
    ca_.Bind(&block175, &phi_bb175_5, &phi_bb175_7, &phi_bb175_11, &phi_bb175_12, &phi_bb175_13, &phi_bb175_14, &phi_bb175_24, &phi_bb175_31, &phi_bb175_32);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:131:41");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Smi> phi_bb181_5;
  TNode<JSArray> phi_bb181_7;
  TNode<BoolT> phi_bb181_11;
  TNode<BoolT> phi_bb181_12;
  TNode<BoolT> phi_bb181_13;
  TNode<BoolT> phi_bb181_14;
  TNode<Smi> phi_bb181_24;
  if (block181.is_used()) {
    ca_.Bind(&block181, &phi_bb181_5, &phi_bb181_7, &phi_bb181_11, &phi_bb181_12, &phi_bb181_13, &phi_bb181_14, &phi_bb181_24);
    ca_.Goto(&block178, phi_bb181_5, phi_bb181_7, phi_bb181_11, phi_bb181_12, phi_bb181_13, phi_bb181_14, phi_bb181_24);
  }

  TNode<Smi> phi_bb180_5;
  TNode<JSArray> phi_bb180_7;
  TNode<BoolT> phi_bb180_11;
  TNode<BoolT> phi_bb180_12;
  TNode<BoolT> phi_bb180_13;
  TNode<BoolT> phi_bb180_14;
  TNode<Smi> phi_bb180_24;
  TNode<Union<HeapObject, TaggedIndex>> tmp203;
  TNode<IntPtrT> tmp204;
  TNode<IntPtrT> tmp205;
  TNode<IntPtrT> tmp206;
  TNode<UintPtrT> tmp207;
  TNode<UintPtrT> tmp208;
  TNode<BoolT> tmp209;
  if (block180.is_used()) {
    ca_.Bind(&block180, &phi_bb180_5, &phi_bb180_7, &phi_bb180_11, &phi_bb180_12, &phi_bb180_13, &phi_bb180_14, &phi_bb180_24);
    std::tie(tmp203, tmp204, tmp205) = FieldSliceFixedDoubleArrayValues_0(state_, TNode<FixedDoubleArray>{tmp168}).Flatten();
    tmp206 = Convert_intptr_Smi_0(state_, TNode<Smi>{phi_bb180_24});
    tmp207 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp206});
    tmp208 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp205});
    tmp209 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp207}, TNode<UintPtrT>{tmp208});
    ca_.Branch(tmp209, &block186, std::vector<compiler::Node*>{phi_bb180_5, phi_bb180_7, phi_bb180_11, phi_bb180_12, phi_bb180_13, phi_bb180_14, phi_bb180_24, phi_bb180_24, phi_bb180_24}, &block187, std::vector<compiler::Node*>{phi_bb180_5, phi_bb180_7, phi_bb180_11, phi_bb180_12, phi_bb180_13, phi_bb180_14, phi_bb180_24, phi_bb180_24, phi_bb180_24});
  }

  TNode<Smi> phi_bb186_5;
  TNode<JSArray> phi_bb186_7;
  TNode<BoolT> phi_bb186_11;
  TNode<BoolT> phi_bb186_12;
  TNode<BoolT> phi_bb186_13;
  TNode<BoolT> phi_bb186_14;
  TNode<Smi> phi_bb186_24;
  TNode<Smi> phi_bb186_31;
  TNode<Smi> phi_bb186_32;
  TNode<IntPtrT> tmp210;
  TNode<IntPtrT> tmp211;
  TNode<Union<HeapObject, TaggedIndex>> tmp212;
  TNode<IntPtrT> tmp213;
  TNode<BoolT> tmp214;
  TNode<BoolT> tmp215;
  TNode<Float64T> tmp216;
  if (block186.is_used()) {
    ca_.Bind(&block186, &phi_bb186_5, &phi_bb186_7, &phi_bb186_11, &phi_bb186_12, &phi_bb186_13, &phi_bb186_14, &phi_bb186_24, &phi_bb186_31, &phi_bb186_32);
    tmp210 = TimesSizeOf_float64_or_undefined_or_hole_0(state_, TNode<IntPtrT>{tmp206});
    tmp211 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp204}, TNode<IntPtrT>{tmp210});
    std::tie(tmp212, tmp213) = NewReference_float64_or_undefined_or_hole_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp203}, TNode<IntPtrT>{tmp211}).Flatten();
    std::tie(tmp214, tmp215, tmp216) = kDoubleUndefined_0(state_).Flatten();
    StoreFloat64OrUndefinedOrHole_0(state_, TorqueStructReference_float64_or_undefined_or_hole_0{TNode<Union<HeapObject, TaggedIndex>>{tmp212}, TNode<IntPtrT>{tmp213}, TorqueStructUnsafe_0{}}, TorqueStructfloat64_or_undefined_or_hole_0{TNode<BoolT>{tmp214}, TNode<BoolT>{tmp215}, TNode<Float64T>{tmp216}});
    ca_.Goto(&block178, phi_bb186_5, phi_bb186_7, phi_bb186_11, phi_bb186_12, phi_bb186_13, phi_bb186_14, phi_bb186_24);
  }

  TNode<Smi> phi_bb187_5;
  TNode<JSArray> phi_bb187_7;
  TNode<BoolT> phi_bb187_11;
  TNode<BoolT> phi_bb187_12;
  TNode<BoolT> phi_bb187_13;
  TNode<BoolT> phi_bb187_14;
  TNode<Smi> phi_bb187_24;
  TNode<Smi> phi_bb187_31;
  TNode<Smi> phi_bb187_32;
  if (block187.is_used()) {
    ca_.Bind(&block187, &phi_bb187_5, &phi_bb187_7, &phi_bb187_11, &phi_bb187_12, &phi_bb187_13, &phi_bb187_14, &phi_bb187_24, &phi_bb187_31, &phi_bb187_32);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:131:41");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Smi> phi_bb178_5;
  TNode<JSArray> phi_bb178_7;
  TNode<BoolT> phi_bb178_11;
  TNode<BoolT> phi_bb178_12;
  TNode<BoolT> phi_bb178_13;
  TNode<BoolT> phi_bb178_14;
  TNode<Smi> phi_bb178_24;
  if (block178.is_used()) {
    ca_.Bind(&block178, &phi_bb178_5, &phi_bb178_7, &phi_bb178_11, &phi_bb178_12, &phi_bb178_13, &phi_bb178_14, &phi_bb178_24);
    ca_.Goto(&block166, phi_bb178_5, phi_bb178_7, phi_bb178_11, phi_bb178_12, phi_bb178_13, phi_bb178_14, phi_bb178_24);
  }

  TNode<Smi> phi_bb166_5;
  TNode<JSArray> phi_bb166_7;
  TNode<BoolT> phi_bb166_11;
  TNode<BoolT> phi_bb166_12;
  TNode<BoolT> phi_bb166_13;
  TNode<BoolT> phi_bb166_14;
  TNode<Smi> phi_bb166_24;
  TNode<Smi> tmp217;
  TNode<Smi> tmp218;
  if (block166.is_used()) {
    ca_.Bind(&block166, &phi_bb166_5, &phi_bb166_7, &phi_bb166_11, &phi_bb166_12, &phi_bb166_13, &phi_bb166_14, &phi_bb166_24);
    tmp217 = FromConstexpr_Smi_constexpr_int31_0(state_, 1);
    tmp218 = CodeStubAssembler(state_).SmiAdd(TNode<Smi>{phi_bb166_24}, TNode<Smi>{tmp217});
    ca_.Goto(&block156, phi_bb166_5, phi_bb166_7, phi_bb166_11, phi_bb166_12, phi_bb166_13, phi_bb166_14, tmp218);
  }

  TNode<Smi> phi_bb155_5;
  TNode<JSArray> phi_bb155_7;
  TNode<BoolT> phi_bb155_11;
  TNode<BoolT> phi_bb155_12;
  TNode<BoolT> phi_bb155_13;
  TNode<BoolT> phi_bb155_14;
  TNode<Smi> phi_bb155_24;
  TNode<IntPtrT> tmp219;
  if (block155.is_used()) {
    ca_.Bind(&block155, &phi_bb155_5, &phi_bb155_7, &phi_bb155_11, &phi_bb155_12, &phi_bb155_13, &phi_bb155_14, &phi_bb155_24);
    tmp219 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    CodeStubAssembler(state_).StoreReference<FixedArrayBase>(CodeStubAssembler::Reference{tmp169, tmp219}, tmp168);
    ca_.Goto(&block153, phi_bb155_5, phi_bb155_7, phi_bb155_11, phi_bb155_12, phi_bb155_13, phi_bb155_14, tmp169);
  }

  TNode<Smi> phi_bb152_5;
  TNode<JSArray> phi_bb152_7;
  TNode<BoolT> phi_bb152_11;
  TNode<BoolT> phi_bb152_12;
  TNode<BoolT> phi_bb152_13;
  TNode<BoolT> phi_bb152_14;
  TNode<JSArray> tmp220;
  if (block152.is_used()) {
    ca_.Bind(&block152, &phi_bb152_5, &phi_bb152_7, &phi_bb152_11, &phi_bb152_12, &phi_bb152_13, &phi_bb152_14);
    tmp220 = NewJSArray_0(state_, TNode<Context>{p_context}, TNode<Map>{tmp166}, TNode<FixedArrayBase>{tmp5});
    ca_.Goto(&block153, phi_bb152_5, phi_bb152_7, phi_bb152_11, phi_bb152_12, phi_bb152_13, phi_bb152_14, tmp220);
  }

  TNode<Smi> phi_bb153_5;
  TNode<JSArray> phi_bb153_7;
  TNode<BoolT> phi_bb153_11;
  TNode<BoolT> phi_bb153_12;
  TNode<BoolT> phi_bb153_13;
  TNode<BoolT> phi_bb153_14;
  TNode<JSArray> phi_bb153_22;
  TNode<FixedArray> tmp221;
  if (block153.is_used()) {
    ca_.Bind(&block153, &phi_bb153_5, &phi_bb153_7, &phi_bb153_11, &phi_bb153_12, &phi_bb153_13, &phi_bb153_14, &phi_bb153_22);
    tmp221 = kEmptyFixedArray_0(state_);
    ca_.Goto(&block190, phi_bb153_22);
  }

  TNode<JSArray> phi_bb190_5;
    ca_.Bind(&block190, &phi_bb190_5);
  return TNode<JSArray>{phi_bb190_5};
}

TF_BUILTIN(ArrayMap, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Word32T> argc = UncheckedParameter<Word32T>(Descriptor::kJSActualArgumentsCount);
  TNode<IntPtrT> arguments_length(ChangeInt32ToIntPtr(UncheckedCast<Int32T>(argc)));
  TNode<RawPtrT> arguments_frame = UncheckedCast<RawPtrT>(LoadFramePointer());
  TorqueStructArguments torque_arguments(GetFrameArguments(arguments_frame, arguments_length, FrameArgumentsArgcType::kCountIncludesReceiver));
  CodeStubArguments arguments(this, torque_arguments);
  TNode<NativeContext> parameter0 = UncheckedParameter<NativeContext>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = arguments.GetReceiver();
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSReceiver, Number> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    ca_.Goto(&block0);

  TNode<JSAny> tmp0;
  TNode<JSReceiver> tmp1;
  TNode<Number> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<BoolT> tmp4;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = RequireObjectCoercible_0(state_, TNode<Context>{parameter0}, TNode<JSAny>{parameter1}, "Array.prototype.map");
    tmp1 = CodeStubAssembler(state_).ToObject_Inline(TNode<Context>{parameter0}, TNode<JSAny>{parameter1});
    tmp2 = GetLengthProperty_0(state_, TNode<Context>{parameter0}, TNode<JSAny>{tmp1});
    tmp3 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp4 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{tmp3});
    ca_.Branch(tmp4, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    ca_.Goto(&block2);
  }

  TNode<IntPtrT> tmp5;
  TNode<JSAny> tmp6;
  TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>> tmp7;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp5 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp6 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp5});
    compiler::CodeAssemblerLabel label8(&ca_);
    tmp7 = Cast_Callable_1(state_, TNode<Context>{parameter0}, TNode<Object>{tmp6}, &label8);
    ca_.Goto(&block5);
    if (label8.is_used()) {
      ca_.Bind(&label8);
      ca_.Goto(&block6);
    }
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    ca_.Goto(&block2);
  }

  TNode<IntPtrT> tmp9;
  TNode<JSAny> tmp10;
  TNode<Number> tmp11;
  TNode<BoolT> tmp12;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp9 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp10 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp9});
    tmp11 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp12 = CodeStubAssembler(state_).IsArraySpeciesProtectorCellInvalid();
    ca_.Branch(tmp12, &block11, std::vector<compiler::Node*>{}, &block12, std::vector<compiler::Node*>{});
  }

  if (block11.is_used()) {
    ca_.Bind(&block11);
    ca_.Goto(&block10);
  }

  TNode<JSArray> tmp13;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    compiler::CodeAssemblerLabel label14(&ca_);
    tmp13 = Cast_FastJSArrayForRead_1(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1}, &label14);
    ca_.Goto(&block13);
    if (label14.is_used()) {
      ca_.Bind(&label14);
      ca_.Goto(&block14);
    }
  }

  if (block14.is_used()) {
    ca_.Bind(&block14);
    ca_.Goto(&block10);
  }

  TNode<Smi> tmp15;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    compiler::CodeAssemblerLabel label16(&ca_);
    tmp15 = Cast_Smi_0(state_, TNode<Object>{tmp2}, &label16);
    ca_.Goto(&block15);
    if (label16.is_used()) {
      ca_.Bind(&label16);
      ca_.Goto(&block16);
    }
  }

  if (block16.is_used()) {
    ca_.Bind(&block16);
    ca_.Goto(&block10);
  }

  TNode<JSArray> tmp17;
    compiler::TypedCodeAssemblerVariable<JSArray> tmp19(&ca_);
    compiler::TypedCodeAssemblerVariable<Smi> tmp20(&ca_);
  if (block15.is_used()) {
    ca_.Bind(&block15);
    compiler::CodeAssemblerLabel label18(&ca_);
    tmp17 = FastArrayMap_0(state_, TNode<Context>{parameter0}, TNode<JSArray>{tmp13}, TNode<Smi>{tmp15}, TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>>{tmp7}, TNode<JSAny>{tmp10}, &label18, &tmp19, &tmp20);
    ca_.Goto(&block17);
    if (label18.is_used()) {
      ca_.Bind(&label18);
      ca_.Goto(&block18);
    }
  }

  if (block18.is_used()) {
    ca_.Bind(&block18);
    ca_.Goto(&block7, tmp19.value(), tmp20.value());
  }

  if (block17.is_used()) {
    ca_.Bind(&block17);
    arguments.PopAndReturn(tmp17);
  }

  TNode<JSReceiver> tmp21;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp21 = CodeStubAssembler(state_).ArraySpeciesCreate(TNode<Context>{parameter0}, TNode<JSAny>{parameter1}, TNode<Number>{tmp2});
    ca_.Goto(&block7, tmp21, tmp11);
  }

  TNode<JSReceiver> phi_bb7_10;
  TNode<Number> phi_bb7_11;
  TNode<JSAny> tmp22;
  if (block7.is_used()) {
    ca_.Bind(&block7, &phi_bb7_10, &phi_bb7_11);
    tmp22 = ca_.CallBuiltin<JSAny>(Builtin::kArrayMapLoopContinuation, parameter0, tmp1, tmp7, tmp10, phi_bb7_10, tmp1, phi_bb7_11, tmp2);
    arguments.PopAndReturn(tmp22);
  }

  TNode<IntPtrT> tmp23;
  TNode<JSAny> tmp24;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp23 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp24 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp23});
    CodeStubAssembler(state_).CallRuntime(Runtime::kThrowCalledNonCallable, parameter0, tmp24);
    CodeStubAssembler(state_).Unreachable();
  }
}

// https://crsrc.org/c/v8/src/builtins/array-map.tq?l=138&c=23
TNode<Union<HeapNumber, Smi, TheHole, Undefined>> UnsafeCast_Smi_OR_HeapNumber_OR_Undefined_OR_TheHole_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<BoolT> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Is_Smi_OR_HeapNumber_OR_Undefined_OR_TheHole_Object_0(state_, TNode<Context>{p_context}, TNode<Object>{p_o});
    ca_.Branch(tmp0, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/cast.tq", 1025});
      CodeStubAssembler(state_).FailAssert("Torque assert 'Is<A>(o)' failed", pos_stack);
    }
  }

  TNode<Union<HeapNumber, Smi, TheHole, Undefined>> tmp1;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp1 = TORQUE_CAST(TNode<Object>{p_o});
    ca_.Goto(&block4);
  }

    ca_.Bind(&block4);
  return TNode<Union<HeapNumber, Smi, TheHole, Undefined>>{tmp1};
}

} // namespace internal
} // namespace v8
