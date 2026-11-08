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
#include "torque-generated/src/builtins/promise-try-tq-csa.h"
#include "torque-generated/src/builtins/array-every-tq-csa.h"
#include "torque-generated/src/builtins/array-from-async-tq-csa.h"
#include "torque-generated/src/builtins/base-tq-csa.h"
#include "torque-generated/src/builtins/convert-tq-csa.h"
#include "torque-generated/src/builtins/frame-arguments-tq-csa.h"
#include "torque-generated/src/builtins/promise-abstract-operations-tq-csa.h"
#include "torque-generated/src/builtins/promise-resolve-tq-csa.h"
#include "torque-generated/src/builtins/torque-internal-tq-csa.h"
#include "torque-generated/src/objects/arguments-tq-csa.h"

namespace v8 {
namespace internal {

TF_BUILTIN(PromiseTry, CodeStubAssembler) {
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
  CodeStubAssembler(state_).CallRuntime(Runtime::kIncrementUseCounter, parameter0, CodeStubAssembler(state_).SmiConstant(v8::Isolate::kPromiseTry));
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block18(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny, Union<JSMessageObject, TheHole>> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block23(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block24(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block26(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block27(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block28(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block29(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block30(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny, Union<JSMessageObject, TheHole>> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
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
    CodeStubAssembler(state_).ThrowTypeError(TNode<Context>{parameter0}, CastIfEnumClass<MessageTemplate>(MessageTemplate::kCalledOnNonObject), "Promise.try");
  }

  TNode<BoolT> tmp2;
  TNode<BoolT> tmp3;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp2 = CodeStubAssembler(state_).HasJsPr3883Flag();
    tmp3 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp2});
    ca_.Branch(tmp3, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  TNode<False> tmp4;
  TNode<PromiseCapability> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<JSAny> tmp7;
  TNode<IntPtrT> tmp8;
      TNode<JSAny> tmp10;
  TNode<BoolT> tmp11;
      TNode<JSAny> tmp13;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp4 = False_0(state_);
    tmp5 = ca_.CallBuiltin<PromiseCapability>(Builtin::kNewPromiseCapability, parameter0, tmp0, tmp4);
    tmp6 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp7 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp6});
    compiler::CodeAssemblerExceptionHandlerLabel catch9__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch9__label);
    tmp8 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    }
    if (catch9__label.is_used()) {
      compiler::CodeAssemblerLabel catch9_skip(&ca_);
      ca_.Goto(&catch9_skip);
      ca_.Bind(&catch9__label, &tmp10);
      ca_.Goto(&block11);
      ca_.Bind(&catch9_skip);
    }
    compiler::CodeAssemblerExceptionHandlerLabel catch12__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch12__label);
    tmp11 = CodeStubAssembler(state_).IntPtrLessThanOrEqual(TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{tmp8});
    }
    if (catch12__label.is_used()) {
      compiler::CodeAssemblerLabel catch12_skip(&ca_);
      ca_.Goto(&catch12_skip);
      ca_.Bind(&catch12__label, &tmp13);
      ca_.Goto(&block12);
      ca_.Bind(&catch12_skip);
    }
    ca_.Branch(tmp11, &block9, std::vector<compiler::Node*>{}, &block10, std::vector<compiler::Node*>{});
  }

  TNode<Union<JSMessageObject, TheHole>> tmp14;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp14 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block8, tmp10, tmp14);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp15;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    tmp15 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block8, tmp13, tmp15);
  }

  TNode<Undefined> tmp16;
  TNode<JSAny> tmp17;
      TNode<JSAny> tmp19;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp16 = Undefined_0(state_);
    compiler::CodeAssemblerExceptionHandlerLabel catch18__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch18__label);
    tmp17 = CodeStubAssembler(state_).Call(TNode<Context>{parameter0}, TNode<JSAny>{tmp7}, TNode<JSAny>{tmp16});
    }
    if (catch18__label.is_used()) {
      compiler::CodeAssemblerLabel catch18_skip(&ca_);
      ca_.Goto(&catch18_skip);
      ca_.Bind(&catch18__label, &tmp19);
      ca_.Goto(&block14);
      ca_.Bind(&catch18_skip);
    }
    ca_.Goto(&block13, tmp17);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp20;
  if (block14.is_used()) {
    ca_.Bind(&block14);
    tmp20 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block8, tmp19, tmp20);
  }

  TNode<IntPtrT> tmp21;
      TNode<JSAny> tmp23;
  TNode<JSArray> tmp24;
      TNode<JSAny> tmp26;
  TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>> tmp27;
      TNode<JSAny> tmp29;
  TNode<Undefined> tmp30;
  TNode<Undefined> tmp31;
  TNode<JSAny> tmp32;
      TNode<JSAny> tmp34;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    compiler::CodeAssemblerExceptionHandlerLabel catch22__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch22__label);
    tmp21 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    }
    if (catch22__label.is_used()) {
      compiler::CodeAssemblerLabel catch22_skip(&ca_);
      ca_.Goto(&catch22_skip);
      ca_.Bind(&catch22__label, &tmp23);
      ca_.Goto(&block15);
      ca_.Bind(&catch22_skip);
    }
    compiler::CodeAssemblerExceptionHandlerLabel catch25__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch25__label);
    tmp24 = NewRestArgumentsFromArguments_0(state_, TNode<Context>{parameter0}, TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp21});
    }
    if (catch25__label.is_used()) {
      compiler::CodeAssemblerLabel catch25_skip(&ca_);
      ca_.Goto(&catch25_skip);
      ca_.Bind(&catch25__label, &tmp26);
      ca_.Goto(&block16);
      ca_.Bind(&catch25_skip);
    }
    compiler::CodeAssemblerExceptionHandlerLabel catch28__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch28__label);
    tmp27 = GetReflectApply_0(state_, TNode<Context>{parameter0});
    }
    if (catch28__label.is_used()) {
      compiler::CodeAssemblerLabel catch28_skip(&ca_);
      ca_.Goto(&catch28_skip);
      ca_.Bind(&catch28__label, &tmp29);
      ca_.Goto(&block17);
      ca_.Bind(&catch28_skip);
    }
    tmp30 = Undefined_0(state_);
    tmp31 = Undefined_0(state_);
    compiler::CodeAssemblerExceptionHandlerLabel catch33__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch33__label);
    tmp32 = CodeStubAssembler(state_).Call(TNode<Context>{parameter0}, TNode<JSAny>{tmp27}, TNode<JSAny>{tmp30}, TNode<JSAny>{tmp7}, TNode<JSAny>{tmp31}, TNode<JSAny>{tmp24});
    }
    if (catch33__label.is_used()) {
      compiler::CodeAssemblerLabel catch33_skip(&ca_);
      ca_.Goto(&catch33_skip);
      ca_.Bind(&catch33__label, &tmp34);
      ca_.Goto(&block18);
      ca_.Bind(&catch33_skip);
    }
    ca_.Goto(&block13, tmp32);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp35;
  if (block15.is_used()) {
    ca_.Bind(&block15);
    tmp35 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block8, tmp23, tmp35);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp36;
  if (block16.is_used()) {
    ca_.Bind(&block16);
    tmp36 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block8, tmp26, tmp36);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp37;
  if (block17.is_used()) {
    ca_.Bind(&block17);
    tmp37 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block8, tmp29, tmp37);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp38;
  if (block18.is_used()) {
    ca_.Bind(&block18);
    tmp38 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block8, tmp34, tmp38);
  }

  TNode<JSAny> phi_bb13_9;
  TNode<IntPtrT> tmp39;
  TNode<JSAny> tmp40;
  TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>> tmp41;
  TNode<Undefined> tmp42;
  TNode<JSAny> tmp43;
  TNode<IntPtrT> tmp44;
  TNode<Union<JSReceiver, Undefined>> tmp45;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_9);
    tmp39 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp40 = CodeStubAssembler(state_).LoadReference<JSAny>(CodeStubAssembler::Reference{tmp5, tmp39});
    tmp41 = UnsafeCast_Callable_0(state_, TNode<Context>{parameter0}, TNode<Object>{tmp40});
    tmp42 = Undefined_0(state_);
    tmp43 = CodeStubAssembler(state_).Call(TNode<Context>{parameter0}, TNode<JSAny>{tmp41}, TNode<JSAny>{tmp42}, TNode<JSAny>{phi_bb13_9});
    tmp44 = FromConstexpr_intptr_constexpr_int31_0(state_, 4);
    tmp45 = CodeStubAssembler(state_).LoadReference<Union<JSReceiver, Undefined>>(CodeStubAssembler::Reference{tmp5, tmp44});
    arguments.PopAndReturn(tmp45);
  }

  TNode<JSAny> phi_bb8_10;
  TNode<Union<JSMessageObject, TheHole>> phi_bb8_11;
  TNode<IntPtrT> tmp46;
  TNode<JSAny> tmp47;
  TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>> tmp48;
  TNode<Undefined> tmp49;
  TNode<JSAny> tmp50;
  TNode<IntPtrT> tmp51;
  TNode<Union<JSReceiver, Undefined>> tmp52;
  if (block8.is_used()) {
    ca_.Bind(&block8, &phi_bb8_10, &phi_bb8_11);
    tmp46 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp47 = CodeStubAssembler(state_).LoadReference<JSAny>(CodeStubAssembler::Reference{tmp5, tmp46});
    tmp48 = UnsafeCast_Callable_0(state_, TNode<Context>{parameter0}, TNode<Object>{tmp47});
    tmp49 = Undefined_0(state_);
    tmp50 = CodeStubAssembler(state_).Call(TNode<Context>{parameter0}, TNode<JSAny>{tmp48}, TNode<JSAny>{tmp49}, TNode<JSAny>{phi_bb8_10});
    tmp51 = FromConstexpr_intptr_constexpr_int31_0(state_, 4);
    tmp52 = CodeStubAssembler(state_).LoadReference<Union<JSReceiver, Undefined>>(CodeStubAssembler::Reference{tmp5, tmp51});
    arguments.PopAndReturn(tmp52);
  }

  TNode<IntPtrT> tmp53;
  TNode<JSAny> tmp54;
  TNode<IntPtrT> tmp55;
      TNode<JSAny> tmp57;
  TNode<BoolT> tmp58;
      TNode<JSAny> tmp60;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp53 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp54 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp53});
    compiler::CodeAssemblerExceptionHandlerLabel catch56__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch56__label);
    tmp55 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    }
    if (catch56__label.is_used()) {
      compiler::CodeAssemblerLabel catch56_skip(&ca_);
      ca_.Goto(&catch56_skip);
      ca_.Bind(&catch56__label, &tmp57);
      ca_.Goto(&block23);
      ca_.Bind(&catch56_skip);
    }
    compiler::CodeAssemblerExceptionHandlerLabel catch59__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch59__label);
    tmp58 = CodeStubAssembler(state_).IntPtrLessThanOrEqual(TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{tmp55});
    }
    if (catch59__label.is_used()) {
      compiler::CodeAssemblerLabel catch59_skip(&ca_);
      ca_.Goto(&catch59_skip);
      ca_.Bind(&catch59__label, &tmp60);
      ca_.Goto(&block24);
      ca_.Bind(&catch59_skip);
    }
    ca_.Branch(tmp58, &block21, std::vector<compiler::Node*>{}, &block22, std::vector<compiler::Node*>{});
  }

  TNode<Union<JSMessageObject, TheHole>> tmp61;
  if (block23.is_used()) {
    ca_.Bind(&block23);
    tmp61 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block20, tmp57, tmp61);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp62;
  if (block24.is_used()) {
    ca_.Bind(&block24);
    tmp62 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block20, tmp60, tmp62);
  }

  TNode<Undefined> tmp63;
  TNode<JSAny> tmp64;
      TNode<JSAny> tmp66;
  if (block21.is_used()) {
    ca_.Bind(&block21);
    tmp63 = Undefined_0(state_);
    compiler::CodeAssemblerExceptionHandlerLabel catch65__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch65__label);
    tmp64 = CodeStubAssembler(state_).Call(TNode<Context>{parameter0}, TNode<JSAny>{tmp54}, TNode<JSAny>{tmp63});
    }
    if (catch65__label.is_used()) {
      compiler::CodeAssemblerLabel catch65_skip(&ca_);
      ca_.Goto(&catch65_skip);
      ca_.Bind(&catch65__label, &tmp66);
      ca_.Goto(&block26);
      ca_.Bind(&catch65_skip);
    }
    ca_.Goto(&block25, tmp64);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp67;
  if (block26.is_used()) {
    ca_.Bind(&block26);
    tmp67 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block20, tmp66, tmp67);
  }

  TNode<IntPtrT> tmp68;
      TNode<JSAny> tmp70;
  TNode<JSArray> tmp71;
      TNode<JSAny> tmp73;
  TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>> tmp74;
      TNode<JSAny> tmp76;
  TNode<Undefined> tmp77;
  TNode<Undefined> tmp78;
  TNode<JSAny> tmp79;
      TNode<JSAny> tmp81;
  if (block22.is_used()) {
    ca_.Bind(&block22);
    compiler::CodeAssemblerExceptionHandlerLabel catch69__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch69__label);
    tmp68 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    }
    if (catch69__label.is_used()) {
      compiler::CodeAssemblerLabel catch69_skip(&ca_);
      ca_.Goto(&catch69_skip);
      ca_.Bind(&catch69__label, &tmp70);
      ca_.Goto(&block27);
      ca_.Bind(&catch69_skip);
    }
    compiler::CodeAssemblerExceptionHandlerLabel catch72__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch72__label);
    tmp71 = NewRestArgumentsFromArguments_0(state_, TNode<Context>{parameter0}, TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp68});
    }
    if (catch72__label.is_used()) {
      compiler::CodeAssemblerLabel catch72_skip(&ca_);
      ca_.Goto(&catch72_skip);
      ca_.Bind(&catch72__label, &tmp73);
      ca_.Goto(&block28);
      ca_.Bind(&catch72_skip);
    }
    compiler::CodeAssemblerExceptionHandlerLabel catch75__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch75__label);
    tmp74 = GetReflectApply_0(state_, TNode<Context>{parameter0});
    }
    if (catch75__label.is_used()) {
      compiler::CodeAssemblerLabel catch75_skip(&ca_);
      ca_.Goto(&catch75_skip);
      ca_.Bind(&catch75__label, &tmp76);
      ca_.Goto(&block29);
      ca_.Bind(&catch75_skip);
    }
    tmp77 = Undefined_0(state_);
    tmp78 = Undefined_0(state_);
    compiler::CodeAssemblerExceptionHandlerLabel catch80__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch80__label);
    tmp79 = CodeStubAssembler(state_).Call(TNode<Context>{parameter0}, TNode<JSAny>{tmp74}, TNode<JSAny>{tmp77}, TNode<JSAny>{tmp54}, TNode<JSAny>{tmp78}, TNode<JSAny>{tmp71});
    }
    if (catch80__label.is_used()) {
      compiler::CodeAssemblerLabel catch80_skip(&ca_);
      ca_.Goto(&catch80_skip);
      ca_.Bind(&catch80__label, &tmp81);
      ca_.Goto(&block30);
      ca_.Bind(&catch80_skip);
    }
    ca_.Goto(&block25, tmp79);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp82;
  if (block27.is_used()) {
    ca_.Bind(&block27);
    tmp82 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block20, tmp70, tmp82);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp83;
  if (block28.is_used()) {
    ca_.Bind(&block28);
    tmp83 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block20, tmp73, tmp83);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp84;
  if (block29.is_used()) {
    ca_.Bind(&block29);
    tmp84 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block20, tmp76, tmp84);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp85;
  if (block30.is_used()) {
    ca_.Bind(&block30);
    tmp85 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block20, tmp81, tmp85);
  }

  TNode<JSAny> phi_bb25_8;
  TNode<JSAny> tmp86;
  if (block25.is_used()) {
    ca_.Bind(&block25, &phi_bb25_8);
    tmp86 = ca_.CallBuiltin<JSAny>(Builtin::kPromiseResolve, parameter0, tmp0, phi_bb25_8);
    arguments.PopAndReturn(tmp86);
  }

  TNode<JSAny> phi_bb20_9;
  TNode<Union<JSMessageObject, TheHole>> phi_bb20_10;
  TNode<False> tmp87;
  TNode<PromiseCapability> tmp88;
  TNode<IntPtrT> tmp89;
  TNode<JSAny> tmp90;
  TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>> tmp91;
  TNode<Undefined> tmp92;
  TNode<JSAny> tmp93;
  TNode<IntPtrT> tmp94;
  TNode<Union<JSReceiver, Undefined>> tmp95;
  if (block20.is_used()) {
    ca_.Bind(&block20, &phi_bb20_9, &phi_bb20_10);
    tmp87 = False_0(state_);
    tmp88 = ca_.CallBuiltin<PromiseCapability>(Builtin::kNewPromiseCapability, parameter0, tmp0, tmp87);
    tmp89 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp90 = CodeStubAssembler(state_).LoadReference<JSAny>(CodeStubAssembler::Reference{tmp88, tmp89});
    tmp91 = UnsafeCast_Callable_0(state_, TNode<Context>{parameter0}, TNode<Object>{tmp90});
    tmp92 = Undefined_0(state_);
    tmp93 = CodeStubAssembler(state_).Call(TNode<Context>{parameter0}, TNode<JSAny>{tmp91}, TNode<JSAny>{tmp92}, TNode<JSAny>{phi_bb20_9});
    tmp94 = FromConstexpr_intptr_constexpr_int31_0(state_, 4);
    tmp95 = CodeStubAssembler(state_).LoadReference<Union<JSReceiver, Undefined>>(CodeStubAssembler::Reference{tmp88, tmp94});
    arguments.PopAndReturn(tmp95);
  }
}

} // namespace internal
} // namespace v8
