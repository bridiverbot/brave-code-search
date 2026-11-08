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
#include "torque-generated/src/builtins/iterator-tq-csa.h"
#include "torque-generated/src/builtins/array-every-tq-csa.h"
#include "torque-generated/src/builtins/array-flat-tq-csa.h"
#include "torque-generated/src/builtins/array-tq-csa.h"
#include "torque-generated/src/builtins/base-tq-csa.h"
#include "torque-generated/src/builtins/boolean-tq-csa.h"
#include "torque-generated/src/builtins/cast-tq-csa.h"
#include "torque-generated/src/builtins/convert-tq-csa.h"
#include "torque-generated/src/builtins/frames-tq-csa.h"
#include "torque-generated/src/builtins/ic-callable-tq-csa.h"
#include "torque-generated/src/builtins/ic-tq-csa.h"
#include "torque-generated/src/builtins/iterator-tq-csa.h"
#include "torque-generated/src/builtins/promise-abstract-operations-tq-csa.h"
#include "torque-generated/src/builtins/promise-misc-tq-csa.h"
#include "torque-generated/src/builtins/promise-resolve-tq-csa.h"
#include "torque-generated/src/builtins/torque-internal-tq-csa.h"
#include "torque-generated/src/objects/contexts-tq-csa.h"
#include "torque-generated/src/objects/fixed-array-tq-csa.h"
#include "torque-generated/src/objects/fixed-primitive-array-tq-csa.h"
#include "torque-generated/src/objects/js-objects-tq-csa.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/builtins/iterator.tq?l=18&c=1
int31_t kIteratorRecordFieldCount_0(compiler::CodeAssemblerState* state_) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

    ca_.Bind(&block0);
  return (FromConstexpr_constexpr_int31_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull)));}

// https://crsrc.org/c/v8/src/builtins/iterator.tq?l=47&c=1
TNode<JSAny> IteratorStepValue_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TorqueStructIteratorRecord p_iterated, TNode<Map> p_fastIteratorResultMap, compiler::CodeAssemblerLabel* label_Done, compiler::CodeAssemblerLabel* label_DoneWithException, compiler::TypedCodeAssemblerVariable<JSAny>* label_DoneWithException_parameter_0, compiler::TypedCodeAssemblerVariable<Union<JSMessageObject, TheHole>>* label_DoneWithException_parameter_1) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny, Union<JSMessageObject, TheHole>> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<BoolT> tmp0;
  TNode<JSReceiver> tmp1;
      TNode<JSAny> tmp4;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_bool_constexpr_bool_0(state_, (CodeStubAssembler(state_).ConstexprInt31Equal((CodeStubAssembler(state_).ConstexprInt31Mul(kIteratorRecordFieldCount_0(state_), kTaggedSize)), (SizeOf_IteratorRecord_0(state_)))));
    CodeStubAssembler(state_).StaticAssert(TNode<BoolT>{tmp0}, "static_assert(kIteratorRecordFieldCount * kTaggedSize ==\n      torque_internal::SizeOf<IteratorRecord>()) at https://crsrc.org/c/v8/src/builtins/iterator.tq?l=51&c=3");
    compiler::CodeAssemblerLabel label2(&ca_);
    compiler::CodeAssemblerExceptionHandlerLabel catch3__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch3__label);
    tmp1 = IteratorBuiltinsAssembler(state_).IteratorStep(TNode<Context>{p_context}, TorqueStructIteratorRecord{TNode<JSReceiver>{p_iterated.object}, TNode<JSAny>{p_iterated.next}}, TNode<Map>{p_fastIteratorResultMap}, &label2);
    }
    if (catch3__label.is_used()) {
      compiler::CodeAssemblerLabel catch3_skip(&ca_);
      ca_.Goto(&catch3_skip);
      ca_.Bind(&catch3__label, &tmp4);
      ca_.Goto(&block8);
      ca_.Bind(&catch3_skip);
    }
    ca_.Goto(&block6);
    if (label2.is_used()) {
      ca_.Bind(&label2);
      ca_.Goto(&block7);
    }
  }

  TNode<Union<JSMessageObject, TheHole>> tmp5;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp5 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block5, tmp4, tmp5);
  }

  if (block7.is_used()) {
    ca_.Bind(&block7);
    ca_.Goto(label_Done);
  }

  TNode<JSAny> tmp6;
      TNode<JSAny> tmp8;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    compiler::CodeAssemblerExceptionHandlerLabel catch7__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch7__label);
    tmp6 = IteratorBuiltinsAssembler(state_).IteratorValue(TNode<Context>{p_context}, TNode<JSReceiver>{tmp1}, TNode<Map>{p_fastIteratorResultMap});
    }
    if (catch7__label.is_used()) {
      compiler::CodeAssemblerLabel catch7_skip(&ca_);
      ca_.Goto(&catch7_skip);
      ca_.Bind(&catch7__label, &tmp8);
      ca_.Goto(&block9);
      ca_.Bind(&catch7_skip);
    }
    ca_.Goto(&block10);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp9;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp9 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block5, tmp8, tmp9);
  }

  TNode<JSAny> phi_bb5_4;
  TNode<Union<JSMessageObject, TheHole>> phi_bb5_5;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_4, &phi_bb5_5);
    *label_DoneWithException_parameter_1 = phi_bb5_5;
    *label_DoneWithException_parameter_0 = phi_bb5_4;
    ca_.Goto(label_DoneWithException);
  }

    ca_.Bind(&block10);
  return TNode<JSAny>{tmp6};
}

TF_BUILTIN(GetIteratorWithFeedback, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<TaggedIndex> parameter2 = UncheckedParameter<TaggedIndex>(Descriptor::kLoadSlot);
  USE(parameter2);
  TNode<TaggedIndex> parameter3 = UncheckedParameter<TaggedIndex>(Descriptor::kCallSlot);
  USE(parameter3);
  TNode<Union<FeedbackVector, Undefined>> parameter4 = UncheckedParameter<Union<FeedbackVector, Undefined>>(Descriptor::kMaybeFeedbackVector);
  USE(parameter4);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<BoolT> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).IsUndefined(TNode<Object>{parameter4});
    ca_.Branch(tmp0, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp1;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp1 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block5, tmp1);
  }

  TNode<BoolT> tmp2;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp2 = Is_FeedbackVector_Undefined_OR_FeedbackVector_0(state_, TNode<Context>{parameter0}, TNode<Union<FeedbackVector, Undefined>>{parameter4});
    ca_.Goto(&block5, tmp2);
  }

  TNode<BoolT> phi_bb5_6;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_6);
    ca_.Branch(phi_bb5_6, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/iterator.tq", 90});
      CodeStubAssembler(state_).FailAssert("Torque assert 'IsUndefined(maybeFeedbackVector) || Is<FeedbackVector>(maybeFeedbackVector)' failed", pos_stack);
    }
  }

  TNode<Undefined> tmp3;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    compiler::CodeAssemblerLabel label4(&ca_);
    tmp3 = Cast_Undefined_2(state_, TNode<HeapObject>{parameter4}, &label4);
    ca_.Goto(&block8);
    if (label4.is_used()) {
      ca_.Bind(&label4);
      ca_.Goto(&block9);
    }
  }

  TNode<Symbol> tmp5;
  TNode<JSAny> tmp6;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp5 = CodeStubAssembler(state_).IteratorSymbolConstant();
    tmp6 = ca_.CallBuiltin<JSAny>(Builtin::kLoadIC, parameter0, parameter1, tmp5, parameter2, ca_.UncheckedCast<FeedbackVector>(parameter4));
    ca_.Goto(&block6, tmp6);
  }

  TNode<Symbol> tmp7;
  TNode<JSAny> tmp8;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp7 = CodeStubAssembler(state_).IteratorSymbolConstant();
    tmp8 = CodeStubAssembler(state_).GetProperty(TNode<Context>{parameter0}, TNode<JSAny>{parameter1}, TNode<JSAny>{tmp7});
    ca_.Goto(&block6, tmp8);
  }

  TNode<JSAny> phi_bb6_5;
  TNode<Smi> tmp9;
  TNode<JSAny> tmp10;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_5);
    tmp9 = CodeStubAssembler(state_).TaggedIndexToSmi(TNode<TaggedIndex>{parameter3});
    tmp10 = ca_.CallBuiltin<JSAny>(Builtin::kCallIteratorWithFeedback, parameter0, parameter1, phi_bb6_5, tmp9, parameter4);
    CodeStubAssembler(state_).Return(tmp10);
  }
}

TF_BUILTIN(GetIteratorBaseline, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<JSAny> parameter0 = UncheckedParameter<JSAny>(Descriptor::kReceiver);
  USE(parameter0);
  TNode<TaggedIndex> parameter1 = UncheckedParameter<TaggedIndex>(Descriptor::kLoadSlot);
  USE(parameter1);
  TNode<TaggedIndex> parameter2 = UncheckedParameter<TaggedIndex>(Descriptor::kCallSlot);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Context> tmp0;
  TNode<FeedbackVector> tmp1;
  TNode<Symbol> tmp2;
  TNode<JSAny> tmp3;
  TNode<Smi> tmp4;
  TNode<JSAny> tmp5;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).LoadContextFromBaseline();
    tmp1 = CodeStubAssembler(state_).LoadFeedbackVectorFromBaseline();
    tmp2 = CodeStubAssembler(state_).IteratorSymbolConstant();
    tmp3 = ca_.CallBuiltin<JSAny>(Builtin::kLoadIC, tmp0, parameter0, tmp2, parameter1, tmp1);
    tmp4 = CodeStubAssembler(state_).TaggedIndexToSmi(TNode<TaggedIndex>{parameter2});
    tmp5 = ca_.CallBuiltin<JSAny>(Builtin::kCallIteratorWithFeedback, tmp0, parameter0, tmp3, tmp4, tmp1);
    CodeStubAssembler(state_).Return(tmp5);
  }
}

TF_BUILTIN(CreateAsyncFromSyncIteratorBaseline, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<JSAny> parameter0 = UncheckedParameter<JSAny>(Descriptor::kSyncIterator);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Context> tmp0;
  TNode<JSAny> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).LoadContextFromBaseline();
    tmp1 = CodeStubAssembler(state_).CreateAsyncFromSyncIterator(TNode<Context>{tmp0}, TNode<JSAny>{parameter0});
    CodeStubAssembler(state_).Return(tmp1);
  }
}

TF_BUILTIN(ForOfNext, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kIterator);
  USE(parameter1);
  TNode<JSFunction> parameter2 = UncheckedParameter<JSFunction>(Descriptor::kNext);
  USE(parameter2);
  TNode<Union<FeedbackVector, Undefined>> parameter3 = UncheckedParameter<Union<FeedbackVector, Undefined>>(Descriptor::kFeedbackVector);
  USE(parameter3);
  TNode<Smi> parameter4 = UncheckedParameter<Smi>(Descriptor::kCallSlot);
  USE(parameter4);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<UintPtrT> tmp1;
  TNode<Union<BigInt, Boolean, HeapNumber, Hole, JSReceiver, Null, Smi, String, Symbol, Undefined>> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiUntag(TNode<Smi>{parameter4});
    tmp1 = CodeStubAssembler(state_).Unsigned(TNode<IntPtrT>{tmp0});
    tmp2 = CodeStubAssembler(state_).ForOfNextHelper(TNode<Context>{parameter0}, TNode<Object>{parameter1}, TNode<Object>{parameter2}, TNode<Union<FeedbackVector, Undefined>>{parameter3}, TNode<UintPtrT>{tmp1});
    CodeStubAssembler(state_).Return(tmp2);
  }
}

TF_BUILTIN(ForOfNextBaseline, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kIterator);
  USE(parameter1);
  TNode<JSFunction> parameter2 = UncheckedParameter<JSFunction>(Descriptor::kNext);
  USE(parameter2);
  TNode<Smi> parameter3 = UncheckedParameter<Smi>(Descriptor::kCallSlot);
  USE(parameter3);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<FeedbackVector> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<UintPtrT> tmp2;
  TNode<Union<BigInt, Boolean, HeapNumber, Hole, JSReceiver, Null, Smi, String, Symbol, Undefined>> tmp3;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).LoadFeedbackVectorFromBaseline();
    tmp1 = CodeStubAssembler(state_).SmiUntag(TNode<Smi>{parameter3});
    tmp2 = CodeStubAssembler(state_).Unsigned(TNode<IntPtrT>{tmp1});
    tmp3 = CodeStubAssembler(state_).ForOfNextHelper(TNode<Context>{parameter0}, TNode<Object>{parameter1}, TNode<Object>{parameter2}, TNode<Union<FeedbackVector, Undefined>>{tmp0}, TNode<UintPtrT>{tmp2});
    CodeStubAssembler(state_).Return(tmp3);
  }
}

// https://crsrc.org/c/v8/src/builtins/iterator.tq?l=150&c=1
TorqueStructIteratorRecord GetIteratorRecordAfterCreateAsyncFromSyncIterator_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TorqueStructIteratorRecord p_asyncIterator) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSAny> tmp0;
  TNode<String> tmp1;
  TNode<JSAny> tmp2;
  TNode<JSReceiver> tmp3;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).CreateAsyncFromSyncIterator(TNode<Context>{p_context}, TNode<JSAny>{p_asyncIterator.object});
    tmp1 = kNextString_0(state_);
    tmp2 = CodeStubAssembler(state_).GetProperty(TNode<Context>{p_context}, TNode<JSAny>{tmp0}, TNode<JSAny>{tmp1});
    tmp3 = UnsafeCast_JSReceiver_0(state_, TNode<Context>{p_context}, TNode<Object>{tmp0});
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TorqueStructIteratorRecord{TNode<JSReceiver>{tmp3}, TNode<JSAny>{tmp2}};
}

// https://crsrc.org/c/v8/src/builtins/iterator.tq?l=162&c=1
TNode<JSAny> GetLazyReceiver_0(compiler::CodeAssemblerState* state_, TNode<JSAny> p_receiver) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  if (block0.is_used()) {
    ca_.Bind(&block0);
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TNode<JSAny>{p_receiver};
}

TF_BUILTIN(CallIteratorWithFeedback, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<JSAny> parameter2 = UncheckedParameter<JSAny>(Descriptor::kIteratorMethod);
  USE(parameter2);
  TNode<Smi> parameter3 = UncheckedParameter<Smi>(Descriptor::kCallSlot);
  USE(parameter3);
  TNode<Union<FeedbackVector, Undefined>> parameter4 = UncheckedParameter<Union<FeedbackVector, Undefined>>(Descriptor::kFeedback);
  USE(parameter4);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<UintPtrT> tmp1;
  std::function<TNode<JSAny>()> tmp2;
  TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>> tmp3;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiUntag(TNode<Smi>{parameter3});
    tmp1 = CodeStubAssembler(state_).Unsigned(TNode<IntPtrT>{tmp0});
    tmp2 = [=] () { return GetLazyReceiver_0(state_, TNode<JSAny>{parameter1}); };
    CollectCallFeedback_1(state_, TNode<JSAny>{parameter2}, std::function<TNode<JSAny>()>{tmp2}, TNode<Context>{parameter0}, TNode<Union<FeedbackVector, Undefined>>{parameter4}, TNode<UintPtrT>{tmp1});
    compiler::CodeAssemblerLabel label4(&ca_);
    tmp3 = Cast_Callable_1(state_, TNode<Context>{parameter0}, TNode<Object>{parameter2}, &label4);
    ca_.Goto(&block3);
    if (label4.is_used()) {
      ca_.Bind(&label4);
      ca_.Goto(&block4);
    }
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    CodeStubAssembler(state_).CallRuntime(Runtime::kThrowIteratorError, parameter0, parameter1);
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<JSAny> tmp5;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp5 = CodeStubAssembler(state_).Call(TNode<Context>{parameter0}, TNode<JSAny>{tmp3}, TNode<JSAny>{parameter1});
    CodeStubAssembler(state_).ThrowIfNotJSReceiver(TNode<Context>{parameter0}, TNode<JSAny>{tmp5}, CastIfEnumClass<MessageTemplate>(MessageTemplate::kSymbolIteratorInvalid), "");
    CodeStubAssembler(state_).Return(tmp5);
  }
}

// https://crsrc.org/c/v8/src/builtins/iterator.tq?l=184&c=1
void IteratorCloseOnException_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSReceiver> p_iteratorObject) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny, Union<JSMessageObject, TheHole>> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<String> tmp0;
  TNode<JSAny> tmp1;
      TNode<JSAny> tmp3;
  TNode<Undefined> tmp4;
  TNode<BoolT> tmp5;
      TNode<JSAny> tmp7;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kReturnString_0(state_);
    compiler::CodeAssemblerExceptionHandlerLabel catch2__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch2__label);
    tmp1 = CodeStubAssembler(state_).GetProperty(TNode<Context>{p_context}, TNode<JSAny>{p_iteratorObject}, TNode<JSAny>{tmp0});
    }
    if (catch2__label.is_used()) {
      compiler::CodeAssemblerLabel catch2_skip(&ca_);
      ca_.Goto(&catch2_skip);
      ca_.Bind(&catch2__label, &tmp3);
      ca_.Goto(&block4);
      ca_.Bind(&catch2_skip);
    }
    tmp4 = Undefined_0(state_);
    compiler::CodeAssemblerExceptionHandlerLabel catch6__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch6__label);
    tmp5 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp1}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp4});
    }
    if (catch6__label.is_used()) {
      compiler::CodeAssemblerLabel catch6_skip(&ca_);
      ca_.Goto(&catch6_skip);
      ca_.Bind(&catch6__label, &tmp7);
      ca_.Goto(&block7);
      ca_.Bind(&catch6_skip);
    }
    ca_.Branch(tmp5, &block8, std::vector<compiler::Node*>{}, &block9, std::vector<compiler::Node*>{});
  }

  TNode<Union<JSMessageObject, TheHole>> tmp8;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp8 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block3, tmp3, tmp8);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp9;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp9 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block3, tmp7, tmp9);
  }

  TNode<BoolT> tmp10;
      TNode<JSAny> tmp12;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    compiler::CodeAssemblerExceptionHandlerLabel catch11__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch11__label);
    tmp10 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    }
    if (catch11__label.is_used()) {
      compiler::CodeAssemblerLabel catch11_skip(&ca_);
      ca_.Goto(&catch11_skip);
      ca_.Bind(&catch11__label, &tmp12);
      ca_.Goto(&block11);
      ca_.Bind(&catch11_skip);
    }
    ca_.Goto(&block10, tmp10);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp13;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp13 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block3, tmp12, tmp13);
  }

  TNode<Null> tmp14;
  TNode<BoolT> tmp15;
      TNode<JSAny> tmp17;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp14 = Null_0(state_);
    compiler::CodeAssemblerExceptionHandlerLabel catch16__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch16__label);
    tmp15 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp1}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp14});
    }
    if (catch16__label.is_used()) {
      compiler::CodeAssemblerLabel catch16_skip(&ca_);
      ca_.Goto(&catch16_skip);
      ca_.Bind(&catch16__label, &tmp17);
      ca_.Goto(&block12);
      ca_.Bind(&catch16_skip);
    }
    ca_.Goto(&block10, tmp15);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp18;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    tmp18 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block3, tmp17, tmp18);
  }

  TNode<BoolT> phi_bb10_4;
  if (block10.is_used()) {
    ca_.Bind(&block10, &phi_bb10_4);
    ca_.Branch(phi_bb10_4, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    ca_.Goto(&block1);
  }

  TNode<JSAny> tmp19;
      TNode<JSAny> tmp21;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    compiler::CodeAssemblerExceptionHandlerLabel catch20__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch20__label);
    tmp19 = CodeStubAssembler(state_).Call(TNode<Context>{p_context}, TNode<JSAny>{tmp1}, TNode<JSAny>{p_iteratorObject});
    }
    if (catch20__label.is_used()) {
      compiler::CodeAssemblerLabel catch20_skip(&ca_);
      ca_.Goto(&catch20_skip);
      ca_.Bind(&catch20__label, &tmp21);
      ca_.Goto(&block13);
      ca_.Bind(&catch20_skip);
    }
    ca_.Goto(&block2);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp22;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    tmp22 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block3, tmp21, tmp22);
  }

  TNode<JSAny> phi_bb3_2;
  TNode<Union<JSMessageObject, TheHole>> phi_bb3_3;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_2, &phi_bb3_3);
    ca_.Goto(&block2);
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    ca_.Goto(&block1);
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    ca_.Goto(&block14);
  }

    ca_.Bind(&block14);
}

// https://crsrc.org/c/v8/src/builtins/iterator.tq?l=206&c=1
void IteratorClose_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TorqueStructIteratorRecord p_iterator) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<String> tmp0;
  TNode<JSAny> tmp1;
  TNode<Undefined> tmp2;
  TNode<BoolT> tmp3;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kReturnString_0(state_);
    tmp1 = CodeStubAssembler(state_).GetProperty(TNode<Context>{p_context}, TNode<JSAny>{p_iterator.object}, TNode<JSAny>{tmp0});
    tmp2 = Undefined_0(state_);
    tmp3 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp1}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp2});
    ca_.Branch(tmp3, &block4, std::vector<compiler::Node*>{}, &block5, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp4;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp4 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block6, tmp4);
  }

  TNode<Null> tmp5;
  TNode<BoolT> tmp6;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp5 = Null_0(state_);
    tmp6 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp1}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp5});
    ca_.Goto(&block6, tmp6);
  }

  TNode<BoolT> phi_bb6_5;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_5);
    ca_.Branch(phi_bb6_5, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    ca_.Goto(&block1);
  }

  TNode<JSAny> tmp7;
  TNode<JSReceiver> tmp8;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp7 = CodeStubAssembler(state_).Call(TNode<Context>{p_context}, TNode<JSAny>{tmp1}, TNode<JSAny>{p_iterator.object});
    compiler::CodeAssemblerLabel label9(&ca_);
    tmp8 = Cast_JSReceiver_1(state_, TNode<Context>{p_context}, TNode<Object>{tmp7}, &label9);
    ca_.Goto(&block9);
    if (label9.is_used()) {
      ca_.Bind(&label9);
      ca_.Goto(&block10);
    }
  }

  if (block10.is_used()) {
    ca_.Bind(&block10);
    CodeStubAssembler(state_).ThrowTypeError(TNode<Context>{p_context}, CastIfEnumClass<MessageTemplate>(MessageTemplate::kCalledOnNonObject), "return");
  }

  if (block9.is_used()) {
    ca_.Bind(&block9);
    ca_.Goto(&block1);
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    ca_.Goto(&block11);
  }

    ca_.Bind(&block11);
}

TF_BUILTIN(IteratorClose, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSReceiver> parameter1 = UncheckedParameter<JSReceiver>(Descriptor::kIterator);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Undefined> tmp0;
  TNode<Undefined> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Undefined_0(state_);
    IteratorClose_0(state_, TNode<Context>{parameter0}, TorqueStructIteratorRecord{TNode<JSReceiver>{parameter1}, TNode<JSAny>{tmp0}});
    tmp1 = Undefined_0(state_);
    CodeStubAssembler(state_).Return(tmp1);
  }
}

TF_BUILTIN(IteratorConstructor, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<NativeContext> parameter0 = UncheckedParameter<NativeContext>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<JSAny> parameter2 = UncheckedParameter<JSAny>(Descriptor::kJSNewTarget);
  USE(parameter2);
  TNode<JSFunction> parameter3 = UncheckedParameter<JSFunction>(Descriptor::kJSTarget);
  USE(parameter3);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Undefined> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Undefined_0(state_);
    tmp1 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{parameter2}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp0});
    ca_.Branch(tmp1, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    CodeStubAssembler(state_).ThrowTypeError(TNode<Context>{parameter0}, CastIfEnumClass<MessageTemplate>(MessageTemplate::kConstructorNotFunction), "Iterator");
  }

  TNode<BoolT> tmp2;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp2 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{parameter2}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{parameter3});
    ca_.Branch(tmp2, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    CodeStubAssembler(state_).ThrowTypeError(TNode<Context>{parameter0}, CastIfEnumClass<MessageTemplate>(MessageTemplate::kConstructAbstractClass), "Iterator");
  }

  TNode<JSReceiver> tmp3;
  TNode<Map> tmp4;
  TNode<JSObject> tmp5;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp3 = UnsafeCast_JSReceiver_0(state_, TNode<Context>{parameter0}, TNode<Object>{parameter2});
    tmp4 = GetDerivedMap_0(state_, TNode<Context>{parameter0}, TNode<JSFunction>{parameter3}, TNode<JSReceiver>{tmp3});
    tmp5 = AllocateFastOrSlowJSObjectFromMap_0(state_, TNode<Context>{parameter0}, TNode<Map>{tmp4});
    CodeStubAssembler(state_).Return(tmp5);
  }
}

// https://crsrc.org/c/v8/src/builtins/iterator.tq?l=257&c=1
TNode<JSAny> SetterThatIgnoresPrototypeProperties_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSAny> p_receiver, TNode<JSObject> p_home, TNode<JSAny> p_key, TNode<JSAny> p_value, const char* p_methodName) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSReceiver> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_JSReceiver_1(state_, TNode<Context>{p_context}, TNode<Object>{p_receiver}, &label1);
    ca_.Goto(&block4);
    if (label1.is_used()) {
      ca_.Bind(&label1);
      ca_.Goto(&block5);
    }
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    CodeStubAssembler(state_).ThrowTypeError(TNode<Context>{p_context}, CastIfEnumClass<MessageTemplate>(MessageTemplate::kCalledOnNonObject), p_methodName);
  }

  TNode<BoolT> tmp2;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp2 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp0}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{p_home});
    ca_.Branch(tmp2, &block6, std::vector<compiler::Node*>{}, &block7, std::vector<compiler::Node*>{});
  }

  TNode<String> tmp3;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp3 = CodeStubAssembler(state_).objectStringConstant();
    CodeStubAssembler(state_).ThrowTypeError(TNode<Context>{p_context}, CastIfEnumClass<MessageTemplate>(MessageTemplate::kStrictReadOnlyProperty), TNode<Object>{p_key}, TNode<Object>{tmp3}, TNode<Object>{p_home});
  }

  TNode<Boolean> tmp4;
  TNode<False> tmp5;
  TNode<BoolT> tmp6;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp4 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kObjectHasOwnProperty, p_context, tmp0, p_key)); 
    tmp5 = False_0(state_);
    tmp6 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp4}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp5});
    ca_.Branch(tmp6, &block8, std::vector<compiler::Node*>{}, &block9, std::vector<compiler::Node*>{});
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    CodeStubAssembler(state_).CallRuntime(Runtime::kCreateDataProperty, p_context, tmp0, p_key, p_value);
    ca_.Goto(&block10);
  }

  TNode<JSAny> tmp7;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp7 = ca_.CallBuiltin<JSAny>(Builtin::kSetProperty, p_context, tmp0, p_key, p_value);
    ca_.Goto(&block10);
  }

  TNode<Undefined> tmp8;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp8 = Undefined_0(state_);
    ca_.Goto(&block11);
  }

    ca_.Bind(&block11);
  return TNode<JSAny>{tmp8};
}

TF_BUILTIN(IteratorPrototypeGetToStringTag, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<NativeContext> parameter0 = UncheckedParameter<NativeContext>(Descriptor::kContext);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<String> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).IteratorStringConstant();
    CodeStubAssembler(state_).Return(tmp0);
  }
}

TF_BUILTIN(IteratorPrototypeSetToStringTag, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<NativeContext> parameter0 = UncheckedParameter<NativeContext>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<JSAny> parameter2 = UncheckedParameter<JSAny>(Descriptor::kValue);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSObject> tmp0;
  TNode<Symbol> tmp1;
  TNode<JSAny> tmp2;
  TNode<Undefined> tmp3;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = GetIteratorPrototype_0(state_, TNode<Context>{parameter0});
    tmp1 = CodeStubAssembler(state_).ToStringTagSymbolConstant();
    tmp2 = SetterThatIgnoresPrototypeProperties_0(state_, TNode<Context>{parameter0}, TNode<JSAny>{parameter1}, TNode<JSObject>{tmp0}, TNode<JSAny>{tmp1}, TNode<JSAny>{parameter2}, "set Iterator.prototype[Symbol.toStringTag]");
    tmp3 = Undefined_0(state_);
    CodeStubAssembler(state_).Return(tmp3);
  }
}

TF_BUILTIN(IteratorPrototypeGetConstructor, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<NativeContext> parameter0 = UncheckedParameter<NativeContext>(Descriptor::kContext);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSFunction> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = GetIteratorFunction_0(state_, TNode<Context>{parameter0});
    CodeStubAssembler(state_).Return(tmp0);
  }
}

TF_BUILTIN(IteratorPrototypeSetConstructor, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<NativeContext> parameter0 = UncheckedParameter<NativeContext>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<JSAny> parameter2 = UncheckedParameter<JSAny>(Descriptor::kValue);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSObject> tmp0;
  TNode<String> tmp1;
  TNode<JSAny> tmp2;
  TNode<Undefined> tmp3;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = GetIteratorPrototype_0(state_, TNode<Context>{parameter0});
    tmp1 = CodeStubAssembler(state_).ConstructorStringConstant();
    tmp2 = SetterThatIgnoresPrototypeProperties_0(state_, TNode<Context>{parameter0}, TNode<JSAny>{parameter1}, TNode<JSObject>{tmp0}, TNode<JSAny>{tmp1}, TNode<JSAny>{parameter2}, "set Iterator.prototype.constructor");
    tmp3 = Undefined_0(state_);
    CodeStubAssembler(state_).Return(tmp3);
  }
}

TF_BUILTIN(IteratorPrototypeDispose, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<NativeContext> parameter0 = UncheckedParameter<NativeContext>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kReceiver);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<String> tmp0;
  TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kReturnString_0(state_);
    compiler::CodeAssemblerLabel label2(&ca_);
    tmp1 = GetMethod_1(state_, TNode<Context>{parameter0}, TNode<JSAny>{parameter1}, TNode<String>{tmp0}, &label2);
    ca_.Goto(&block3);
    if (label2.is_used()) {
      ca_.Bind(&label2);
      ca_.Goto(&block4);
    }
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    ca_.Goto(&block1);
  }

  TNode<JSAny> tmp3;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp3 = CodeStubAssembler(state_).Call(TNode<Context>{parameter0}, TNode<JSAny>{tmp1}, TNode<JSAny>{parameter1});
    ca_.Goto(&block1);
  }

  TNode<Undefined> tmp4;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp4 = Undefined_0(state_);
    CodeStubAssembler(state_).Return(tmp4);
  }
}

// https://crsrc.org/c/v8/src/builtins/iterator.tq?l=366&c=1
intptr_t kAsyncIteratorPrototypeAsyncDisposeResolveContextLength_0(compiler::CodeAssemblerState* state_) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

    ca_.Bind(&block0);
  return CastIfEnumClass<intptr_t>(Context::Field::MIN_CONTEXT_SLOTS);}

TF_BUILTIN(AsyncIteratorPrototypeAsyncDisposeResolveClosure, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<NativeContext> parameter0 = UncheckedParameter<NativeContext>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kReceiver);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Undefined> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Undefined_0(state_);
    CodeStubAssembler(state_).Return(tmp0);
  }
}

TF_BUILTIN(AsyncIteratorPrototypeAsyncDispose, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<NativeContext> parameter0 = UncheckedParameter<NativeContext>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kReceiver);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny, Union<JSMessageObject, TheHole>> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSPromise> tmp0;
  TNode<String> tmp1;
  TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>> tmp2;
      TNode<JSAny> tmp5;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = NewJSPromise_1(state_, TNode<Context>{parameter0});
    tmp1 = kReturnString_0(state_);
    compiler::CodeAssemblerLabel label3(&ca_);
    compiler::CodeAssemblerExceptionHandlerLabel catch4__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch4__label);
    tmp2 = GetMethod_1(state_, TNode<Context>{parameter0}, TNode<JSAny>{parameter1}, TNode<String>{tmp1}, &label3);
    }
    if (catch4__label.is_used()) {
      compiler::CodeAssemblerLabel catch4_skip(&ca_);
      ca_.Goto(&catch4_skip);
      ca_.Bind(&catch4__label, &tmp5);
      ca_.Goto(&block7);
      ca_.Bind(&catch4_skip);
    }
    ca_.Goto(&block5);
    if (label3.is_used()) {
      ca_.Bind(&label3);
      ca_.Goto(&block6);
    }
  }

  TNode<Union<JSMessageObject, TheHole>> tmp6;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp6 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block2, tmp5, tmp6);
  }

  TNode<Undefined> tmp7;
  TNode<JSAny> tmp8;
      TNode<JSAny> tmp10;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp7 = Undefined_0(state_);
    compiler::CodeAssemblerExceptionHandlerLabel catch9__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch9__label);
    tmp8 = ca_.CallBuiltin<JSAny>(Builtin::kResolvePromise, parameter0, tmp0, tmp7);
    }
    if (catch9__label.is_used()) {
      compiler::CodeAssemblerLabel catch9_skip(&ca_);
      ca_.Goto(&catch9_skip);
      ca_.Bind(&catch9__label, &tmp10);
      ca_.Goto(&block17);
      ca_.Bind(&catch9_skip);
    }
    ca_.Goto(&block3);
  }

  TNode<JSAny> tmp11;
      TNode<JSAny> tmp13;
  TNode<IntPtrT> tmp14;
  TNode<Union<HeapObject, TaggedIndex>> tmp15;
  TNode<IntPtrT> tmp16;
      TNode<JSAny> tmp18;
  TNode<JSFunction> tmp19;
  TNode<JSAny> tmp20;
      TNode<JSAny> tmp22;
  TNode<NativeContext> tmp23;
  TNode<IntPtrT> tmp24;
      TNode<JSAny> tmp26;
  TNode<Context> tmp27;
      TNode<JSAny> tmp29;
  TNode<Context> tmp30;
  TNode<NativeContext> tmp31;
  TNode<JSFunction> tmp32;
      TNode<JSAny> tmp34;
  TNode<JSPromise> tmp35;
      TNode<JSAny> tmp37;
  TNode<Undefined> tmp38;
      TNode<JSAny> tmp40;
      TNode<JSAny> tmp42;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    compiler::CodeAssemblerExceptionHandlerLabel catch12__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch12__label);
    tmp11 = CodeStubAssembler(state_).Call(TNode<Context>{parameter0}, TNode<JSAny>{tmp2}, TNode<JSAny>{parameter1});
    }
    if (catch12__label.is_used()) {
      compiler::CodeAssemblerLabel catch12_skip(&ca_);
      ca_.Goto(&catch12_skip);
      ca_.Bind(&catch12__label, &tmp13);
      ca_.Goto(&block8);
      ca_.Bind(&catch12_skip);
    }
    tmp14 = PROMISE_FUNCTION_INDEX_0(state_);
    compiler::CodeAssemblerExceptionHandlerLabel catch17__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch17__label);
    std::tie(tmp15, tmp16) = NativeContextSlot_Context_JSFunction_0(state_, TNode<Context>{parameter0}, TNode<IntPtrT>{tmp14}).Flatten();
    }
    if (catch17__label.is_used()) {
      compiler::CodeAssemblerLabel catch17_skip(&ca_);
      ca_.Goto(&catch17_skip);
      ca_.Bind(&catch17__label, &tmp18);
      ca_.Goto(&block9);
      ca_.Bind(&catch17_skip);
    }
    tmp19 = CodeStubAssembler(state_).LoadReference<JSFunction>(CodeStubAssembler::Reference{tmp15, tmp16});
    compiler::CodeAssemblerExceptionHandlerLabel catch21__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch21__label);
    tmp20 = ca_.CallBuiltin<JSAny>(Builtin::kPromiseResolve, parameter0, tmp19, tmp11);
    }
    if (catch21__label.is_used()) {
      compiler::CodeAssemblerLabel catch21_skip(&ca_);
      ca_.Goto(&catch21_skip);
      ca_.Bind(&catch21__label, &tmp22);
      ca_.Goto(&block10);
      ca_.Bind(&catch21_skip);
    }
    tmp23 = TORQUE_CAST(TNode<Context>{parameter0});
    compiler::CodeAssemblerExceptionHandlerLabel catch25__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch25__label);
    tmp24 = FromConstexpr_intptr_constexpr_intptr_0(state_, kAsyncIteratorPrototypeAsyncDisposeResolveContextLength_0(state_));
    }
    if (catch25__label.is_used()) {
      compiler::CodeAssemblerLabel catch25_skip(&ca_);
      ca_.Goto(&catch25_skip);
      ca_.Bind(&catch25__label, &tmp26);
      ca_.Goto(&block11);
      ca_.Bind(&catch25_skip);
    }
    compiler::CodeAssemblerExceptionHandlerLabel catch28__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch28__label);
    tmp27 = AllocateSyntheticFunctionContext_1(state_, TNode<NativeContext>{tmp23}, TNode<IntPtrT>{tmp24});
    }
    if (catch28__label.is_used()) {
      compiler::CodeAssemblerLabel catch28_skip(&ca_);
      ca_.Goto(&catch28_skip);
      ca_.Bind(&catch28__label, &tmp29);
      ca_.Goto(&block12);
      ca_.Bind(&catch28_skip);
    }
    tmp30 = (TNode<Context>{tmp27});
    tmp31 = TORQUE_CAST(TNode<Context>{parameter0});
    compiler::CodeAssemblerExceptionHandlerLabel catch33__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch33__label);
    tmp32 = CodeStubAssembler(state_).AllocateRootFunctionWithContext(RootIndex::kAsyncIteratorPrototypeAsyncDisposeResolveClosureSharedFun, TNode<Context>{tmp30}, TNode<NativeContext>{tmp31});
    }
    if (catch33__label.is_used()) {
      compiler::CodeAssemblerLabel catch33_skip(&ca_);
      ca_.Goto(&catch33_skip);
      ca_.Bind(&catch33__label, &tmp34);
      ca_.Goto(&block13);
      ca_.Bind(&catch33_skip);
    }
    compiler::CodeAssemblerExceptionHandlerLabel catch36__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch36__label);
    tmp35 = UnsafeCast_JSPromise_0(state_, TNode<Context>{parameter0}, TNode<Object>{tmp20});
    }
    if (catch36__label.is_used()) {
      compiler::CodeAssemblerLabel catch36_skip(&ca_);
      ca_.Goto(&catch36_skip);
      ca_.Bind(&catch36__label, &tmp37);
      ca_.Goto(&block14);
      ca_.Bind(&catch36_skip);
    }
    compiler::CodeAssemblerExceptionHandlerLabel catch39__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch39__label);
    tmp38 = CodeStubAssembler(state_).UndefinedConstant();
    }
    if (catch39__label.is_used()) {
      compiler::CodeAssemblerLabel catch39_skip(&ca_);
      ca_.Goto(&catch39_skip);
      ca_.Bind(&catch39__label, &tmp40);
      ca_.Goto(&block15);
      ca_.Bind(&catch39_skip);
    }
    compiler::CodeAssemblerExceptionHandlerLabel catch41__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch41__label);
    PerformPromiseThenImpl_0(state_, TNode<Context>{parameter0}, TNode<JSPromise>{tmp35}, TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction, Undefined>>{tmp32}, TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction, Undefined>>{tmp38}, TNode<Union<JSPromise, PromiseCapability, Undefined>>{tmp0});
    }
    if (catch41__label.is_used()) {
      compiler::CodeAssemblerLabel catch41_skip(&ca_);
      ca_.Goto(&catch41_skip);
      ca_.Bind(&catch41__label, &tmp42);
      ca_.Goto(&block16);
      ca_.Bind(&catch41_skip);
    }
    ca_.Goto(&block3);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp43;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp43 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block2, tmp13, tmp43);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp44;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp44 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block2, tmp18, tmp44);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp45;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp45 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block2, tmp22, tmp45);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp46;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp46 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block2, tmp26, tmp46);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp47;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    tmp47 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block2, tmp29, tmp47);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp48;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    tmp48 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block2, tmp34, tmp48);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp49;
  if (block14.is_used()) {
    ca_.Bind(&block14);
    tmp49 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block2, tmp37, tmp49);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp50;
  if (block15.is_used()) {
    ca_.Bind(&block15);
    tmp50 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block2, tmp40, tmp50);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp51;
  if (block16.is_used()) {
    ca_.Bind(&block16);
    tmp51 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block2, tmp42, tmp51);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp52;
  if (block17.is_used()) {
    ca_.Bind(&block17);
    tmp52 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block2, tmp10, tmp52);
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    CodeStubAssembler(state_).Return(tmp0);
  }

  TNode<JSAny> phi_bb2_3;
  TNode<Union<JSMessageObject, TheHole>> phi_bb2_4;
  TNode<False> tmp53;
  TNode<JSAny> tmp54;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_3, &phi_bb2_4);
    tmp53 = False_0(state_);
    tmp54 = ca_.CallBuiltin<JSAny>(Builtin::kRejectPromise, parameter0, tmp0, phi_bb2_3, tmp53);
    CodeStubAssembler(state_).Return(tmp0);
  }
}

// https://crsrc.org/c/v8/src/builtins/iterator.tq?l=430&c=1
void StoreRegisterToRawAddr_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_firstRegAddr, TNode<IntPtrT> p_i, TNode<Object> p_val) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<RawPtrT> tmp4;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, kSystemPointerSize);
    tmp1 = CodeStubAssembler(state_).IntPtrMul(TNode<IntPtrT>{p_i}, TNode<IntPtrT>{tmp0});
    tmp2 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp3 = CodeStubAssembler(state_).IntPtrSub(TNode<IntPtrT>{tmp2}, TNode<IntPtrT>{tmp1});
    tmp4 = CodeStubAssembler(state_).RawPtrAdd(TNode<RawPtrT>{p_firstRegAddr}, TNode<IntPtrT>{tmp3});
    CodeStubAssembler(state_).StoreFullTaggedNoWriteBarrier(TNode<RawPtrT>{tmp4}, TNode<Object>{p_val});
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
}

TF_BUILTIN(ArrayDestructure, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<Int32T> parameter2 = UncheckedParameter<Int32T>(Descriptor::kCount);
  USE(parameter2);
  TNode<RawPtrT> parameter3 = UncheckedParameter<RawPtrT>(Descriptor::kFirstRegAddr);
  USE(parameter3);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block30(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block36(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block34(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block35(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block42(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block40(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block45(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block44(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block41(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block48(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block46(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block47(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block38(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Convert_intptr_int32_0(state_, TNode<Int32T>{parameter2});
    tmp1 = IsForceSlowPath_0(state_);
    ca_.Branch(tmp1, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    ca_.Goto(&block2);
  }

  TNode<BoolT> tmp2;
  TNode<BoolT> tmp3;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp2 = IsFastJSArrayWithNoCustomIteration_0(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1});
    tmp3 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp2});
    ca_.Branch(tmp3, &block7, std::vector<compiler::Node*>{}, &block8, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp4;
  TNode<BoolT> tmp5;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp4 = IsFastJSArrayForReadWithNoCustomIteration_0(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1});
    tmp5 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp4});
    ca_.Goto(&block9, tmp5);
  }

  TNode<BoolT> tmp6;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp6 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block9, tmp6);
  }

  TNode<BoolT> phi_bb9_6;
  if (block9.is_used()) {
    ca_.Bind(&block9, &phi_bb9_6);
    ca_.Branch(phi_bb9_6, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    ca_.Goto(&block2);
  }

  TNode<JSArray> tmp7;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    compiler::CodeAssemblerLabel label8(&ca_);
    tmp7 = Cast_JSArray_1(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1}, &label8);
    ca_.Goto(&block10);
    if (label8.is_used()) {
      ca_.Bind(&label8);
      ca_.Goto(&block11);
    }
  }

  if (block11.is_used()) {
    ca_.Bind(&block11);
    ca_.Goto(&block2);
  }

  TNode<IntPtrT> tmp9;
  TNode<Number> tmp10;
  TNode<Smi> tmp11;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp9 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp10 = CodeStubAssembler(state_).LoadReference<Number>(CodeStubAssembler::Reference{tmp7, tmp9});
    compiler::CodeAssemblerLabel label12(&ca_);
    tmp11 = Cast_Smi_0(state_, TNode<Object>{tmp10}, &label12);
    ca_.Goto(&block12);
    if (label12.is_used()) {
      ca_.Bind(&label12);
      ca_.Goto(&block13);
    }
  }

  if (block13.is_used()) {
    ca_.Bind(&block13);
    ca_.Goto(&block2);
  }

  TNode<IntPtrT> tmp13;
  TNode<BoolT> tmp14;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    tmp13 = CodeStubAssembler(state_).SmiUntag(TNode<Smi>{tmp11});
    tmp14 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{tmp0}, TNode<IntPtrT>{tmp13});
    ca_.Branch(tmp14, &block14, std::vector<compiler::Node*>{}, &block15, std::vector<compiler::Node*>{});
  }

  if (block14.is_used()) {
    ca_.Bind(&block14);
    ca_.Goto(&block16, tmp0);
  }

  if (block15.is_used()) {
    ca_.Bind(&block15);
    ca_.Goto(&block16, tmp13);
  }

  TNode<IntPtrT> phi_bb16_8;
  TNode<IntPtrT> tmp15;
  TNode<FixedArrayBase> tmp16;
  TNode<FixedDoubleArray> tmp17;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_8);
    tmp15 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp16 = CodeStubAssembler(state_).LoadReference<FixedArrayBase>(CodeStubAssembler::Reference{tmp7, tmp15});
    compiler::CodeAssemblerLabel label18(&ca_);
    tmp17 = Cast_FixedDoubleArray_0(state_, TNode<HeapObject>{tmp16}, &label18);
    ca_.Goto(&block20);
    if (label18.is_used()) {
      ca_.Bind(&label18);
      ca_.Goto(&block21);
    }
  }

  TNode<FixedArray> tmp19;
  if (block21.is_used()) {
    ca_.Bind(&block21);
    compiler::CodeAssemblerLabel label20(&ca_);
    tmp19 = Cast_FixedArray_0(state_, TNode<HeapObject>{ca_.UncheckedCast<FixedArrayBase>(tmp16)}, &label20);
    ca_.Goto(&block28);
    if (label20.is_used()) {
      ca_.Bind(&label20);
      ca_.Goto(&block29);
    }
  }

  TNode<IntPtrT> tmp21;
  if (block20.is_used()) {
    ca_.Bind(&block20);
    tmp21 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block24, tmp21);
  }

  TNode<IntPtrT> phi_bb24_11;
  TNode<BoolT> tmp22;
  if (block24.is_used()) {
    ca_.Bind(&block24, &phi_bb24_11);
    tmp22 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb24_11}, TNode<IntPtrT>{phi_bb16_8});
    ca_.Branch(tmp22, &block22, std::vector<compiler::Node*>{phi_bb24_11}, &block23, std::vector<compiler::Node*>{phi_bb24_11});
  }

  TNode<IntPtrT> phi_bb22_11;
  TNode<Smi> tmp23;
  TNode<Union<HeapNumber, Smi, Undefined>> tmp24;
  TNode<IntPtrT> tmp25;
  TNode<IntPtrT> tmp26;
  if (block22.is_used()) {
    ca_.Bind(&block22, &phi_bb22_11);
    tmp23 = Convert_Smi_intptr_0(state_, TNode<IntPtrT>{phi_bb22_11});
    tmp24 = LoadElementOrUndefined_1(state_, TNode<FixedDoubleArray>{tmp17}, TNode<Smi>{tmp23});
    StoreRegisterToRawAddr_0(state_, TNode<RawPtrT>{parameter3}, TNode<IntPtrT>{phi_bb22_11}, TNode<Object>{tmp24});
    tmp25 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp26 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb22_11}, TNode<IntPtrT>{tmp25});
    ca_.Goto(&block24, tmp26);
  }

  TNode<IntPtrT> phi_bb23_11;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_11);
    ca_.Goto(&block18);
  }

  if (block29.is_used()) {
    ca_.Bind(&block29);
    ca_.Goto(&block2);
  }

  TNode<IntPtrT> tmp27;
  if (block28.is_used()) {
    ca_.Bind(&block28);
    tmp27 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block32, tmp27);
  }

  TNode<IntPtrT> phi_bb32_11;
  TNode<BoolT> tmp28;
  if (block32.is_used()) {
    ca_.Bind(&block32, &phi_bb32_11);
    tmp28 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb32_11}, TNode<IntPtrT>{phi_bb16_8});
    ca_.Branch(tmp28, &block30, std::vector<compiler::Node*>{phi_bb32_11}, &block31, std::vector<compiler::Node*>{phi_bb32_11});
  }

  TNode<IntPtrT> phi_bb30_11;
  TNode<Smi> tmp29;
  TNode<JSAny> tmp30;
  TNode<IntPtrT> tmp31;
  TNode<IntPtrT> tmp32;
  if (block30.is_used()) {
    ca_.Bind(&block30, &phi_bb30_11);
    tmp29 = Convert_Smi_intptr_0(state_, TNode<IntPtrT>{phi_bb30_11});
    tmp30 = LoadElementOrUndefined_0(state_, TNode<Context>{parameter0}, TNode<FixedArray>{tmp19}, TNode<Smi>{tmp29});
    StoreRegisterToRawAddr_0(state_, TNode<RawPtrT>{parameter3}, TNode<IntPtrT>{phi_bb30_11}, TNode<Object>{tmp30});
    tmp31 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp32 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb30_11}, TNode<IntPtrT>{tmp31});
    ca_.Goto(&block32, tmp32);
  }

  TNode<IntPtrT> phi_bb31_11;
  if (block31.is_used()) {
    ca_.Bind(&block31, &phi_bb31_11);
    ca_.Goto(&block18);
  }

  if (block18.is_used()) {
    ca_.Bind(&block18);
    ca_.Goto(&block36, phi_bb16_8);
  }

  TNode<IntPtrT> phi_bb36_9;
  TNode<BoolT> tmp33;
  if (block36.is_used()) {
    ca_.Bind(&block36, &phi_bb36_9);
    tmp33 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb36_9}, TNode<IntPtrT>{tmp0});
    ca_.Branch(tmp33, &block34, std::vector<compiler::Node*>{phi_bb36_9}, &block35, std::vector<compiler::Node*>{phi_bb36_9});
  }

  TNode<IntPtrT> phi_bb34_9;
  TNode<Undefined> tmp34;
  TNode<IntPtrT> tmp35;
  TNode<IntPtrT> tmp36;
  if (block34.is_used()) {
    ca_.Bind(&block34, &phi_bb34_9);
    tmp34 = Undefined_0(state_);
    StoreRegisterToRawAddr_0(state_, TNode<RawPtrT>{parameter3}, TNode<IntPtrT>{phi_bb34_9}, TNode<Object>{tmp34});
    tmp35 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp36 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb34_9}, TNode<IntPtrT>{tmp35});
    ca_.Goto(&block36, tmp36);
  }

  TNode<IntPtrT> phi_bb35_9;
  TNode<Undefined> tmp37;
  if (block35.is_used()) {
    ca_.Bind(&block35, &phi_bb35_9);
    tmp37 = Undefined_0(state_);
    CodeStubAssembler(state_).Return(tmp37);
  }

  TNode<JSReceiver> tmp38;
  TNode<JSAny> tmp39;
  TNode<IntPtrT> tmp40;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    std::tie(tmp38, tmp39) = IteratorBuiltinsAssembler(state_).GetIterator(TNode<Context>{parameter0}, TNode<JSAny>{parameter1}).Flatten();
    tmp40 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block42, tmp40);
  }

  TNode<IntPtrT> phi_bb42_7;
  TNode<BoolT> tmp41;
  if (block42.is_used()) {
    ca_.Bind(&block42, &phi_bb42_7);
    tmp41 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb42_7}, TNode<IntPtrT>{tmp0});
    ca_.Branch(tmp41, &block40, std::vector<compiler::Node*>{phi_bb42_7}, &block41, std::vector<compiler::Node*>{phi_bb42_7});
  }

  TNode<IntPtrT> phi_bb40_7;
  TNode<JSReceiver> tmp42;
  if (block40.is_used()) {
    ca_.Bind(&block40, &phi_bb40_7);
    compiler::CodeAssemblerLabel label43(&ca_);
    tmp42 = IteratorBuiltinsAssembler(state_).IteratorStep(TNode<Context>{parameter0}, TorqueStructIteratorRecord{TNode<JSReceiver>{tmp38}, TNode<JSAny>{tmp39}}, &label43);
    ca_.Goto(&block44, phi_bb40_7);
    if (label43.is_used()) {
      ca_.Bind(&label43);
      ca_.Goto(&block45, phi_bb40_7);
    }
  }

  TNode<IntPtrT> phi_bb45_7;
  if (block45.is_used()) {
    ca_.Bind(&block45, &phi_bb45_7);
    ca_.Goto(&block48, phi_bb45_7);
  }

  TNode<IntPtrT> phi_bb44_7;
  TNode<JSAny> tmp44;
  TNode<IntPtrT> tmp45;
  TNode<IntPtrT> tmp46;
  if (block44.is_used()) {
    ca_.Bind(&block44, &phi_bb44_7);
    tmp44 = IteratorBuiltinsAssembler(state_).IteratorValue(TNode<Context>{parameter0}, TNode<JSReceiver>{tmp42});
    StoreRegisterToRawAddr_0(state_, TNode<RawPtrT>{parameter3}, TNode<IntPtrT>{phi_bb44_7}, TNode<Object>{tmp44});
    tmp45 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp46 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb44_7}, TNode<IntPtrT>{tmp45});
    ca_.Goto(&block42, tmp46);
  }

  TNode<IntPtrT> phi_bb41_7;
  if (block41.is_used()) {
    ca_.Bind(&block41, &phi_bb41_7);
    IteratorClose_0(state_, TNode<Context>{parameter0}, TorqueStructIteratorRecord{TNode<JSReceiver>{tmp38}, TNode<JSAny>{tmp39}});
    ca_.Goto(&block38, phi_bb41_7);
  }

  TNode<IntPtrT> phi_bb48_7;
  TNode<BoolT> tmp47;
  if (block48.is_used()) {
    ca_.Bind(&block48, &phi_bb48_7);
    tmp47 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb48_7}, TNode<IntPtrT>{tmp0});
    ca_.Branch(tmp47, &block46, std::vector<compiler::Node*>{phi_bb48_7}, &block47, std::vector<compiler::Node*>{phi_bb48_7});
  }

  TNode<IntPtrT> phi_bb46_7;
  TNode<Undefined> tmp48;
  TNode<IntPtrT> tmp49;
  TNode<IntPtrT> tmp50;
  if (block46.is_used()) {
    ca_.Bind(&block46, &phi_bb46_7);
    tmp48 = Undefined_0(state_);
    StoreRegisterToRawAddr_0(state_, TNode<RawPtrT>{parameter3}, TNode<IntPtrT>{phi_bb46_7}, TNode<Object>{tmp48});
    tmp49 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp50 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb46_7}, TNode<IntPtrT>{tmp49});
    ca_.Goto(&block48, tmp50);
  }

  TNode<IntPtrT> phi_bb47_7;
  if (block47.is_used()) {
    ca_.Bind(&block47, &phi_bb47_7);
    ca_.Goto(&block38, phi_bb47_7);
  }

  TNode<IntPtrT> phi_bb38_7;
  TNode<Undefined> tmp51;
  if (block38.is_used()) {
    ca_.Bind(&block38, &phi_bb38_7);
    tmp51 = Undefined_0(state_);
    CodeStubAssembler(state_).Return(tmp51);
  }
}

// https://crsrc.org/c/v8/src/builtins/iterator.tq?l=497&c=1
void StoreRegisterToParentFrame_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_callerFp, TNode<IntPtrT> p_firstReg, TNode<IntPtrT> p_i, TNode<Object> p_val) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<RawPtrT> tmp5;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_firstReg}, TNode<IntPtrT>{p_i});
    tmp1 = FromConstexpr_intptr_constexpr_int31_0(state_, kSystemPointerSize);
    tmp2 = CodeStubAssembler(state_).IntPtrMul(TNode<IntPtrT>{tmp0}, TNode<IntPtrT>{tmp1});
    tmp3 = FromConstexpr_intptr_constexpr_intptr_0(state_, InterpreterFrameConstants::kRegisterFileFromFp);
    tmp4 = CodeStubAssembler(state_).IntPtrSub(TNode<IntPtrT>{tmp3}, TNode<IntPtrT>{tmp2});
    tmp5 = CodeStubAssembler(state_).RawPtrAdd(TNode<RawPtrT>{p_callerFp}, TNode<IntPtrT>{tmp4});
    CodeStubAssembler(state_).StoreFullTaggedNoWriteBarrier(TNode<RawPtrT>{tmp5}, TNode<Object>{p_val});
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
}

TF_BUILTIN(ArrayDestructureLazyDeoptContinuation, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<Union<Hole, JSReceiver>> parameter1 = UncheckedParameter<Union<Hole, JSReceiver>>(Descriptor::kIteratorArg);
  USE(parameter1);
  TNode<Union<BigInt, Boolean, HeapNumber, Hole, JSReceiver, Null, Smi, String, Symbol, Undefined>> parameter2 = UncheckedParameter<Union<BigInt, Boolean, HeapNumber, Hole, JSReceiver, Null, Smi, String, Symbol, Undefined>>(Descriptor::kNextMethodArg);
  USE(parameter2);
  TNode<Smi> parameter3 = UncheckedParameter<Smi>(Descriptor::kIndex);
  USE(parameter3);
  TNode<Smi> parameter4 = UncheckedParameter<Smi>(Descriptor::kFirstReg);
  USE(parameter4);
  TNode<Smi> parameter5 = UncheckedParameter<Smi>(Descriptor::kCount);
  USE(parameter5);
  TNode<Union<BigInt, Boolean, HeapNumber, Hole, JSReceiver, Null, Smi, String, Symbol, Undefined>> parameter6 = UncheckedParameter<Union<BigInt, Boolean, HeapNumber, Hole, JSReceiver, Null, Smi, String, Symbol, Undefined>>(Descriptor::kDeoptValue);
  USE(parameter6);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSReceiver, JSAny> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block33(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSReceiver, JSAny, IntPtrT> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block38(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block36(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block41(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block40(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block37(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block44(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block42(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block43(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block34(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<RawPtrT> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<BoolT> tmp5;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).LoadParentFramePointer();
    tmp1 = Convert_intptr_Smi_0(state_, TNode<Smi>{parameter4});
    tmp2 = Convert_intptr_Smi_0(state_, TNode<Smi>{parameter5});
    tmp3 = Convert_intptr_Smi_0(state_, TNode<Smi>{parameter3});
    tmp4 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp5 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{tmp3}, TNode<IntPtrT>{tmp4});
    ca_.Branch(tmp5, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<TheHole> tmp6;
  TNode<BoolT> tmp7;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp6 = TheHole_0(state_);
    tmp7 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{parameter1}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp6});
    ca_.Branch(tmp7, &block4, std::vector<compiler::Node*>{}, &block5, std::vector<compiler::Node*>{});
  }

  TNode<JSReceiver> tmp8;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    compiler::CodeAssemblerLabel label9(&ca_);
    tmp8 = Cast_JSReceiver_1(state_, TNode<Context>{parameter0}, TNode<Object>{parameter6}, &label9);
    ca_.Goto(&block9);
    if (label9.is_used()) {
      ca_.Bind(&label9);
      ca_.Goto(&block10);
    }
  }

  if (block10.is_used()) {
    ca_.Bind(&block10);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/iterator.tq:524:57");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> tmp10;
  TNode<JSAny> tmp11;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp10 = kNextString_0(state_);
    tmp11 = CodeStubAssembler(state_).GetProperty(TNode<Context>{parameter0}, TNode<JSAny>{tmp8}, TNode<JSAny>{tmp10});
    ca_.Goto(&block6, tmp8, tmp11);
  }

  TNode<JSReceiver> tmp12;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    compiler::CodeAssemblerLabel label13(&ca_);
    tmp12 = Cast_JSReceiver_0(state_, TNode<HeapObject>{parameter1}, &label13);
    ca_.Goto(&block13);
    if (label13.is_used()) {
      ca_.Bind(&label13);
      ca_.Goto(&block14);
    }
  }

  if (block14.is_used()) {
    ca_.Bind(&block14);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/iterator.tq:531:58");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<JSAny> tmp14;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    compiler::CodeAssemblerLabel label15(&ca_);
    tmp14 = Cast_JSAny_0(state_, TNode<Object>{parameter6}, &label15);
    ca_.Goto(&block17);
    if (label15.is_used()) {
      ca_.Bind(&label15);
      ca_.Goto(&block18);
    }
  }

  if (block18.is_used()) {
    ca_.Bind(&block18);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/iterator.tq:532:54");
    CodeStubAssembler(state_).Unreachable();
  }

  if (block17.is_used()) {
    ca_.Bind(&block17);
    ca_.Goto(&block6, tmp12, tmp14);
  }

  TNode<JSReceiver> phi_bb6_11;
  TNode<JSAny> phi_bb6_12;
  TNode<IntPtrT> tmp16;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_11, &phi_bb6_12);
    tmp16 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block3, phi_bb6_11, phi_bb6_12, tmp16);
  }

  TNode<TheHole> tmp17;
  TNode<BoolT> tmp18;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp17 = TheHole_0(state_);
    tmp18 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{parameter6}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp17});
    ca_.Branch(tmp18, &block19, std::vector<compiler::Node*>{}, &block20, std::vector<compiler::Node*>{});
  }

  if (block19.is_used()) {
    ca_.Bind(&block19);
    ca_.Goto(&block24, tmp3);
  }

  TNode<IntPtrT> phi_bb24_14;
  TNode<BoolT> tmp19;
  if (block24.is_used()) {
    ca_.Bind(&block24, &phi_bb24_14);
    tmp19 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb24_14}, TNode<IntPtrT>{tmp2});
    ca_.Branch(tmp19, &block22, std::vector<compiler::Node*>{phi_bb24_14}, &block23, std::vector<compiler::Node*>{phi_bb24_14});
  }

  TNode<IntPtrT> phi_bb22_14;
  TNode<Undefined> tmp20;
  TNode<IntPtrT> tmp21;
  TNode<IntPtrT> tmp22;
  if (block22.is_used()) {
    ca_.Bind(&block22, &phi_bb22_14);
    tmp20 = Undefined_0(state_);
    StoreRegisterToParentFrame_0(state_, TNode<RawPtrT>{tmp0}, TNode<IntPtrT>{tmp1}, TNode<IntPtrT>{phi_bb22_14}, TNode<Object>{tmp20});
    tmp21 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp22 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb22_14}, TNode<IntPtrT>{tmp21});
    ca_.Goto(&block24, tmp22);
  }

  TNode<IntPtrT> phi_bb23_14;
  TNode<Undefined> tmp23;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_14);
    tmp23 = Undefined_0(state_);
    CodeStubAssembler(state_).Return(tmp23);
  }

  TNode<JSReceiver> tmp24;
  if (block20.is_used()) {
    ca_.Bind(&block20);
    compiler::CodeAssemblerLabel label25(&ca_);
    tmp24 = Cast_JSReceiver_0(state_, TNode<HeapObject>{parameter1}, &label25);
    ca_.Goto(&block28);
    if (label25.is_used()) {
      ca_.Bind(&label25);
      ca_.Goto(&block29);
    }
  }

  if (block29.is_used()) {
    ca_.Bind(&block29);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/iterator.tq:546:56");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<JSAny> tmp26;
  if (block28.is_used()) {
    ca_.Bind(&block28);
    compiler::CodeAssemblerLabel label27(&ca_);
    tmp26 = Cast_JSAny_0(state_, TNode<Object>{parameter2}, &label27);
    ca_.Goto(&block32);
    if (label27.is_used()) {
      ca_.Bind(&label27);
      ca_.Goto(&block33);
    }
  }

  if (block33.is_used()) {
    ca_.Bind(&block33);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/iterator.tq:547:55");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> tmp28;
  TNode<IntPtrT> tmp29;
  if (block32.is_used()) {
    ca_.Bind(&block32);
    StoreRegisterToParentFrame_0(state_, TNode<RawPtrT>{tmp0}, TNode<IntPtrT>{tmp1}, TNode<IntPtrT>{tmp3}, TNode<Object>{parameter6});
    tmp28 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp29 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp3}, TNode<IntPtrT>{tmp28});
    ca_.Goto(&block3, tmp24, tmp26, tmp29);
  }

  TNode<JSReceiver> phi_bb3_11;
  TNode<JSAny> phi_bb3_12;
  TNode<IntPtrT> phi_bb3_13;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_11, &phi_bb3_12, &phi_bb3_13);
    ca_.Goto(&block38, phi_bb3_13);
  }

  TNode<IntPtrT> phi_bb38_16;
  TNode<BoolT> tmp30;
  if (block38.is_used()) {
    ca_.Bind(&block38, &phi_bb38_16);
    tmp30 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb38_16}, TNode<IntPtrT>{tmp2});
    ca_.Branch(tmp30, &block36, std::vector<compiler::Node*>{phi_bb38_16}, &block37, std::vector<compiler::Node*>{phi_bb38_16});
  }

  TNode<IntPtrT> phi_bb36_16;
  TNode<JSReceiver> tmp31;
  if (block36.is_used()) {
    ca_.Bind(&block36, &phi_bb36_16);
    compiler::CodeAssemblerLabel label32(&ca_);
    tmp31 = IteratorBuiltinsAssembler(state_).IteratorStep(TNode<Context>{parameter0}, TorqueStructIteratorRecord{TNode<JSReceiver>{phi_bb3_11}, TNode<JSAny>{phi_bb3_12}}, &label32);
    ca_.Goto(&block40, phi_bb36_16);
    if (label32.is_used()) {
      ca_.Bind(&label32);
      ca_.Goto(&block41, phi_bb36_16);
    }
  }

  TNode<IntPtrT> phi_bb41_16;
  if (block41.is_used()) {
    ca_.Bind(&block41, &phi_bb41_16);
    ca_.Goto(&block44, phi_bb41_16);
  }

  TNode<IntPtrT> phi_bb40_16;
  TNode<JSAny> tmp33;
  TNode<IntPtrT> tmp34;
  TNode<IntPtrT> tmp35;
  if (block40.is_used()) {
    ca_.Bind(&block40, &phi_bb40_16);
    tmp33 = IteratorBuiltinsAssembler(state_).IteratorValue(TNode<Context>{parameter0}, TNode<JSReceiver>{tmp31});
    StoreRegisterToParentFrame_0(state_, TNode<RawPtrT>{tmp0}, TNode<IntPtrT>{tmp1}, TNode<IntPtrT>{phi_bb40_16}, TNode<Object>{tmp33});
    tmp34 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp35 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb40_16}, TNode<IntPtrT>{tmp34});
    ca_.Goto(&block38, tmp35);
  }

  TNode<IntPtrT> phi_bb37_16;
  if (block37.is_used()) {
    ca_.Bind(&block37, &phi_bb37_16);
    IteratorClose_0(state_, TNode<Context>{parameter0}, TorqueStructIteratorRecord{TNode<JSReceiver>{phi_bb3_11}, TNode<JSAny>{phi_bb3_12}});
    ca_.Goto(&block34, phi_bb37_16);
  }

  TNode<IntPtrT> phi_bb44_16;
  TNode<BoolT> tmp36;
  if (block44.is_used()) {
    ca_.Bind(&block44, &phi_bb44_16);
    tmp36 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb44_16}, TNode<IntPtrT>{tmp2});
    ca_.Branch(tmp36, &block42, std::vector<compiler::Node*>{phi_bb44_16}, &block43, std::vector<compiler::Node*>{phi_bb44_16});
  }

  TNode<IntPtrT> phi_bb42_16;
  TNode<Undefined> tmp37;
  TNode<IntPtrT> tmp38;
  TNode<IntPtrT> tmp39;
  if (block42.is_used()) {
    ca_.Bind(&block42, &phi_bb42_16);
    tmp37 = Undefined_0(state_);
    StoreRegisterToParentFrame_0(state_, TNode<RawPtrT>{tmp0}, TNode<IntPtrT>{tmp1}, TNode<IntPtrT>{phi_bb42_16}, TNode<Object>{tmp37});
    tmp38 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp39 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb42_16}, TNode<IntPtrT>{tmp38});
    ca_.Goto(&block44, tmp39);
  }

  TNode<IntPtrT> phi_bb43_16;
  if (block43.is_used()) {
    ca_.Bind(&block43, &phi_bb43_16);
    ca_.Goto(&block34, phi_bb43_16);
  }

  TNode<IntPtrT> phi_bb34_16;
  TNode<Undefined> tmp40;
  if (block34.is_used()) {
    ca_.Bind(&block34, &phi_bb34_16);
    tmp40 = Undefined_0(state_);
    CodeStubAssembler(state_).Return(tmp40);
  }
}

// https://crsrc.org/c/v8/src/builtins/iterator.tq?l=53&c=7
int31_t SizeOf_IteratorRecord_0(compiler::CodeAssemblerState* state_) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  if (block0.is_used()) {
    ca_.Bind(&block0);
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return 8;
}

// https://crsrc.org/c/v8/src/builtins/iterator.tq?l=413&c=11
TNode<JSPromise> UnsafeCast_JSPromise_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o) {
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
    tmp0 = Is_JSPromise_Object_0(state_, TNode<Context>{p_context}, TNode<Object>{p_o});
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

  TNode<JSPromise> tmp1;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp1 = TORQUE_CAST(TNode<Object>{p_o});
    ca_.Goto(&block4);
  }

    ca_.Bind(&block4);
  return TNode<JSPromise>{tmp1};
}

} // namespace internal
} // namespace v8
