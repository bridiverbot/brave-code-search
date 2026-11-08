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
#include "torque-generated/src/builtins/promise-reaction-job-tq-csa.h"
#include "torque-generated/src/builtins/array-every-tq-csa.h"
#include "torque-generated/src/builtins/array-from-async-tq-csa.h"
#include "torque-generated/src/builtins/base-tq-csa.h"
#include "torque-generated/src/builtins/cast-tq-csa.h"
#include "torque-generated/src/builtins/convert-tq-csa.h"
#include "torque-generated/src/builtins/promise-abstract-operations-tq-csa.h"
#include "torque-generated/src/builtins/promise-reaction-job-tq-csa.h"
#include "torque-generated/src/builtins/promise-resolve-tq-csa.h"
#include "torque-generated/src/builtins/torque-internal-tq-csa.h"
#include "torque-generated/src/objects/js-generator-tq-csa.h"
#include "torque-generated/src/objects/js-promise-tq-csa.h"
#include "torque-generated/src/objects/promise-tq-csa.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/builtins/promise-reaction-job.tq?l=9&c=1
TNode<JSAny> RejectPromiseReactionJob_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Union<JSPromise, PromiseCapability, Undefined>> p_promiseOrCapability, TNode<JSAny> p_reason, PromiseReaction::Type p_reactionType) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  if (block0.is_used()) {
    ca_.Bind(&block0);
    if (((CodeStubAssembler(state_).ConstexprInt31Equal(CastIfEnumClass<int31_t>(p_reactionType), CastIfEnumClass<int31_t>(PromiseReaction::kReject))))) {
      ca_.Goto(&block2);
    } else {
      ca_.Goto(&block3);
    }
  }

  TNode<JSPromise> tmp0;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_JSPromise_0(state_, TNode<HeapObject>{p_promiseOrCapability}, &label1);
    ca_.Goto(&block7);
    if (label1.is_used()) {
      ca_.Bind(&label1);
      ca_.Goto(&block8);
    }
  }

  TNode<Undefined> tmp2;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    compiler::CodeAssemblerLabel label3(&ca_);
    tmp2 = Cast_Undefined_2(state_, TNode<HeapObject>{ca_.UncheckedCast<Union<PromiseCapability, Undefined>>(p_promiseOrCapability)}, &label3);
    ca_.Goto(&block11);
    if (label3.is_used()) {
      ca_.Bind(&label3);
      ca_.Goto(&block12);
    }
  }

  TNode<False> tmp4;
  TNode<JSAny> tmp5;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp4 = False_0(state_);
    tmp5 = ca_.CallBuiltin<JSAny>(Builtin::kRejectPromise, p_context, tmp0, p_reason, tmp4);
    ca_.Goto(&block1, tmp5);
  }

  TNode<IntPtrT> tmp6;
  TNode<JSAny> tmp7;
  TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>> tmp8;
  TNode<Undefined> tmp9;
  TNode<JSAny> tmp10;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    tmp6 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp7 = CodeStubAssembler(state_).LoadReference<JSAny>(CodeStubAssembler::Reference{ca_.UncheckedCast<PromiseCapability>(p_promiseOrCapability), tmp6});
    tmp8 = UnsafeCast_Callable_0(state_, TNode<Context>{p_context}, TNode<Object>{tmp7});
    tmp9 = Undefined_0(state_);
    tmp10 = CodeStubAssembler(state_).Call(TNode<Context>{p_context}, TNode<JSAny>{tmp8}, TNode<JSAny>{tmp9}, TNode<JSAny>{p_reason});
    ca_.Goto(&block1, tmp10);
  }

  TNode<Undefined> tmp11;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp11 = Undefined_0(state_);
    ca_.Goto(&block1, tmp11);
  }

  TNode<BoolT> tmp12;
  TNode<Undefined> tmp13;
  TNode<JSAny> tmp14;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp12 = FromConstexpr_bool_constexpr_bool_0(state_, (CodeStubAssembler(state_).ConstexprInt31Equal(CastIfEnumClass<int31_t>(p_reactionType), CastIfEnumClass<int31_t>(PromiseReaction::kFulfill))));
    CodeStubAssembler(state_).StaticAssert(TNode<BoolT>{tmp12}, "static_assert(reactionType == kPromiseReactionFulfill) at https://crsrc.org/c/v8/src/builtins/promise-reaction-job.tq?l=32&c=5");
    tmp13 = Undefined_0(state_);
    tmp14 = ca_.CallBuiltin<JSAny>(Builtin::kPromiseRejectReactionJob, p_context, p_reason, tmp13, p_promiseOrCapability);
    ca_.Goto(&block1, tmp14);
  }

  TNode<JSAny> phi_bb1_3;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_3);
    ca_.Goto(&block13);
  }

    ca_.Bind(&block13);
  return TNode<JSAny>{phi_bb1_3};
}

// https://crsrc.org/c/v8/src/builtins/promise-reaction-job.tq?l=41&c=1
TNode<JSAny> FuflfillPromiseReactionJob_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Union<JSPromise, PromiseCapability, Undefined>> p_promiseOrCapability, TNode<JSAny> p_result, PromiseReaction::Type p_reactionType) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSPromise> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_JSPromise_0(state_, TNode<HeapObject>{p_promiseOrCapability}, &label1);
    ca_.Goto(&block4);
    if (label1.is_used()) {
      ca_.Bind(&label1);
      ca_.Goto(&block5);
    }
  }

  TNode<Undefined> tmp2;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    compiler::CodeAssemblerLabel label3(&ca_);
    tmp2 = Cast_Undefined_2(state_, TNode<HeapObject>{ca_.UncheckedCast<Union<PromiseCapability, Undefined>>(p_promiseOrCapability)}, &label3);
    ca_.Goto(&block8);
    if (label3.is_used()) {
      ca_.Bind(&label3);
      ca_.Goto(&block9);
    }
  }

  TNode<JSAny> tmp4;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp4 = ca_.CallBuiltin<JSAny>(Builtin::kResolvePromise, p_context, tmp0, p_result);
    ca_.Goto(&block1, tmp4);
  }

  TNode<IntPtrT> tmp5;
  TNode<JSAny> tmp6;
  TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>> tmp7;
  TNode<Undefined> tmp8;
  TNode<JSAny> tmp9;
      TNode<JSAny> tmp11;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp5 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp6 = CodeStubAssembler(state_).LoadReference<JSAny>(CodeStubAssembler::Reference{ca_.UncheckedCast<PromiseCapability>(p_promiseOrCapability), tmp5});
    tmp7 = UnsafeCast_Callable_0(state_, TNode<Context>{p_context}, TNode<Object>{tmp6});
    tmp8 = Undefined_0(state_);
    compiler::CodeAssemblerExceptionHandlerLabel catch10__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch10__label);
    tmp9 = CodeStubAssembler(state_).Call(TNode<Context>{p_context}, TNode<JSAny>{tmp7}, TNode<JSAny>{tmp8}, TNode<JSAny>{p_result});
    }
    if (catch10__label.is_used()) {
      compiler::CodeAssemblerLabel catch10_skip(&ca_);
      ca_.Goto(&catch10_skip);
      ca_.Bind(&catch10__label, &tmp11);
      ca_.Goto(&block12);
      ca_.Bind(&catch10_skip);
    }
    ca_.Goto(&block1, tmp9);
  }

  TNode<Undefined> tmp12;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp12 = Undefined_0(state_);
    ca_.Goto(&block1, tmp12);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp13;
  TNode<JSAny> tmp14;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    tmp13 = GetAndResetPendingMessage_0(state_);
    tmp14 = RejectPromiseReactionJob_0(state_, TNode<Context>{p_context}, TNode<Union<JSPromise, PromiseCapability, Undefined>>{p_promiseOrCapability}, TNode<JSAny>{tmp11}, p_reactionType);
    ca_.Goto(&block1, tmp14);
  }

  TNode<JSAny> phi_bb1_3;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_3);
    ca_.Goto(&block13);
  }

    ca_.Bind(&block13);
  return TNode<JSAny>{phi_bb1_3};
}

// https://crsrc.org/c/v8/src/builtins/promise-reaction-job.tq?l=74&c=1
void ResumeGenerator_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSGeneratorObject> p_generator, TNode<JSAny> p_argument, PromiseReaction::Type p_reactionType) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  if (block0.is_used()) {
    ca_.Bind(&block0);
    if (((CodeStubAssembler(state_).ConstexprInt31Equal(CastIfEnumClass<int31_t>(p_reactionType), CastIfEnumClass<int31_t>(PromiseReaction::kFulfill))))) {
      ca_.Goto(&block2);
    } else {
      ca_.Goto(&block3);
    }
  }

  TNode<IntPtrT> tmp0;
  TNode<Smi> tmp1;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 28);
    tmp1 = CodeStubAssembler(state_).SmiConstant(JSGeneratorObject::kNext);
    CodeStubAssembler(state_).StoreReference<Smi>(CodeStubAssembler::Reference{p_generator, tmp0}, tmp1);
    ca_.Goto(&block4);
  }

  TNode<BoolT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<Smi> tmp4;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp2 = FromConstexpr_bool_constexpr_bool_0(state_, (CodeStubAssembler(state_).ConstexprInt31Equal(CastIfEnumClass<int31_t>(p_reactionType), CastIfEnumClass<int31_t>(PromiseReaction::kReject))));
    CodeStubAssembler(state_).StaticAssert(TNode<BoolT>{tmp2}, "static_assert(reactionType == kPromiseReactionReject) at https://crsrc.org/c/v8/src/builtins/promise-reaction-job.tq?l=80&c=5");
    tmp3 = FromConstexpr_intptr_constexpr_int31_0(state_, 28);
    tmp4 = CodeStubAssembler(state_).SmiConstant(JSGeneratorObject::kThrow);
    CodeStubAssembler(state_).StoreReference<Smi>(CodeStubAssembler::Reference{p_generator, tmp3}, tmp4);
    ca_.Goto(&block4);
  }

  TNode<BoolT> tmp5;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp5 = Is_JSAsyncGeneratorObject_JSGeneratorObject_0(state_, TNode<Context>{p_context}, TNode<JSGeneratorObject>{p_generator});
    ca_.Branch(tmp5, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  TNode<JSAsyncGeneratorObject> tmp6;
  TNode<IntPtrT> tmp7;
  TNode<Smi> tmp8;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp6 = TORQUE_CAST(TNode<JSGeneratorObject>{p_generator});
    tmp7 = FromConstexpr_intptr_constexpr_int31_0(state_, 48);
    tmp8 = SmiConstant_0(state_, IntegerLiteral(false, 0x0ull));
    CodeStubAssembler(state_).StoreReference<Smi>(CodeStubAssembler::Reference{tmp6, tmp7}, tmp8);
    ca_.Goto(&block6);
  }

  TNode<JSAny> tmp9;
  TNode<BoolT> tmp10;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp9 = ca_.CallBuiltin<JSAny>(Builtin::kResumeGeneratorTrampoline, p_context, p_argument, p_generator);
    tmp10 = Is_JSAsyncGeneratorObject_JSGeneratorObject_0(state_, TNode<Context>{p_context}, TNode<JSGeneratorObject>{p_generator});
    ca_.Branch(tmp10, &block7, std::vector<compiler::Node*>{}, &block8, std::vector<compiler::Node*>{});
  }

  TNode<JSAsyncGeneratorObject> tmp11;
  TNode<JSAny> tmp12;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp11 = TORQUE_CAST(TNode<JSGeneratorObject>{p_generator});
    tmp12 = ca_.CallBuiltin<JSAny>(Builtin::kAsyncGeneratorResumeNext, p_context, tmp11);
    ca_.Goto(&block8);
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    ca_.Goto(&block9);
  }

    ca_.Bind(&block9);
}

// https://crsrc.org/c/v8/src/builtins/promise-reaction-job.tq?l=95&c=1
TNode<JSAny> PromiseReactionJob_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSAny> p_argument, TNode<Union<JSBoundFunction, JSFunction, JSGeneratorObject, JSObject, JSProxy, JSWrappedFunction, Undefined>> p_handler, TNode<Union<JSPromise, PromiseCapability, Undefined>> p_promiseOrCapability, PromiseReaction::Type p_reactionType) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block18(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny, Union<JSMessageObject, TheHole>> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSGeneratorObject> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_JSGeneratorObject_0(state_, TNode<HeapObject>{p_handler}, &label1);
    ca_.Goto(&block4);
    if (label1.is_used()) {
      ca_.Bind(&label1);
      ca_.Goto(&block5);
    }
  }

  TNode<Undefined> tmp2;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    compiler::CodeAssemblerLabel label3(&ca_);
    tmp2 = Cast_Undefined_2(state_, TNode<HeapObject>{ca_.UncheckedCast<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction, Undefined>>(p_handler)}, &label3);
    ca_.Goto(&block8);
    if (label3.is_used()) {
      ca_.Bind(&label3);
      ca_.Goto(&block9);
    }
  }

  TNode<Undefined> tmp4;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    ResumeGenerator_0(state_, TNode<Context>{p_context}, TNode<JSGeneratorObject>{tmp0}, TNode<JSAny>{p_argument}, p_reactionType);
    tmp4 = Undefined_0(state_);
    ca_.Goto(&block1, tmp4);
  }

  TNode<Undefined> tmp5;
  TNode<JSAny> tmp6;
      TNode<JSAny> tmp8;
  TNode<Undefined> tmp9;
  TNode<BoolT> tmp10;
      TNode<JSAny> tmp12;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp5 = Undefined_0(state_);
    compiler::CodeAssemblerExceptionHandlerLabel catch7__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch7__label);
    tmp6 = CodeStubAssembler(state_).Call(TNode<Context>{p_context}, TNode<JSAny>{ca_.UncheckedCast<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>>(p_handler)}, TNode<JSAny>{tmp5}, TNode<JSAny>{p_argument});
    }
    if (catch7__label.is_used()) {
      compiler::CodeAssemblerLabel catch7_skip(&ca_);
      ca_.Goto(&catch7_skip);
      ca_.Bind(&catch7__label, &tmp8);
      ca_.Goto(&block15);
      ca_.Bind(&catch7_skip);
    }
    tmp9 = Undefined_0(state_);
    compiler::CodeAssemblerExceptionHandlerLabel catch11__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch11__label);
    tmp10 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{p_promiseOrCapability}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp9});
    }
    if (catch11__label.is_used()) {
      compiler::CodeAssemblerLabel catch11_skip(&ca_);
      ca_.Goto(&catch11_skip);
      ca_.Bind(&catch11__label, &tmp12);
      ca_.Goto(&block18);
      ca_.Bind(&catch11_skip);
    }
    ca_.Branch(tmp10, &block16, std::vector<compiler::Node*>{}, &block17, std::vector<compiler::Node*>{});
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    if (((CodeStubAssembler(state_).ConstexprInt31Equal(CastIfEnumClass<int31_t>(p_reactionType), CastIfEnumClass<int31_t>(PromiseReaction::kFulfill))))) {
      ca_.Goto(&block10);
    } else {
      ca_.Goto(&block11);
    }
  }

  TNode<JSAny> tmp13;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp13 = FuflfillPromiseReactionJob_0(state_, TNode<Context>{p_context}, TNode<Union<JSPromise, PromiseCapability, Undefined>>{p_promiseOrCapability}, TNode<JSAny>{p_argument}, p_reactionType);
    ca_.Goto(&block1, tmp13);
  }

  TNode<BoolT> tmp14;
  TNode<JSAny> tmp15;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp14 = FromConstexpr_bool_constexpr_bool_0(state_, (CodeStubAssembler(state_).ConstexprInt31Equal(CastIfEnumClass<int31_t>(p_reactionType), CastIfEnumClass<int31_t>(PromiseReaction::kReject))));
    CodeStubAssembler(state_).StaticAssert(TNode<BoolT>{tmp14}, "static_assert(reactionType == kPromiseReactionReject) at https://crsrc.org/c/v8/src/builtins/promise-reaction-job.tq?l=110&c=9");
    tmp15 = RejectPromiseReactionJob_0(state_, TNode<Context>{p_context}, TNode<Union<JSPromise, PromiseCapability, Undefined>>{p_promiseOrCapability}, TNode<JSAny>{p_argument}, p_reactionType);
    ca_.Goto(&block1, tmp15);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp16;
  if (block15.is_used()) {
    ca_.Bind(&block15);
    tmp16 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block14, tmp8, tmp16);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp17;
  if (block18.is_used()) {
    ca_.Bind(&block18);
    tmp17 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block14, tmp12, tmp17);
  }

  TNode<Undefined> tmp18;
  if (block16.is_used()) {
    ca_.Bind(&block16);
    tmp18 = Undefined_0(state_);
    ca_.Goto(&block1, tmp18);
  }

  TNode<JSAny> tmp19;
      TNode<JSAny> tmp21;
  if (block17.is_used()) {
    ca_.Bind(&block17);
    compiler::CodeAssemblerExceptionHandlerLabel catch20__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch20__label);
    tmp19 = FuflfillPromiseReactionJob_0(state_, TNode<Context>{p_context}, TNode<Union<JSPromise, PromiseCapability, Undefined>>{p_promiseOrCapability}, TNode<JSAny>{tmp6}, p_reactionType);
    }
    if (catch20__label.is_used()) {
      compiler::CodeAssemblerLabel catch20_skip(&ca_);
      ca_.Goto(&catch20_skip);
      ca_.Bind(&catch20__label, &tmp21);
      ca_.Goto(&block20);
      ca_.Bind(&catch20_skip);
    }
    ca_.Goto(&block1, tmp19);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp22;
  if (block20.is_used()) {
    ca_.Bind(&block20);
    tmp22 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block14, tmp21, tmp22);
  }

  TNode<JSAny> phi_bb14_6;
  TNode<Union<JSMessageObject, TheHole>> phi_bb14_7;
  TNode<JSAny> tmp23;
  if (block14.is_used()) {
    ca_.Bind(&block14, &phi_bb14_6, &phi_bb14_7);
    tmp23 = RejectPromiseReactionJob_0(state_, TNode<Context>{p_context}, TNode<Union<JSPromise, PromiseCapability, Undefined>>{p_promiseOrCapability}, TNode<JSAny>{phi_bb14_6}, p_reactionType);
    ca_.Goto(&block1, tmp23);
  }

  TNode<JSAny> phi_bb1_4;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_4);
    ca_.Goto(&block21, phi_bb1_4);
  }

  TNode<JSAny> phi_bb21_4;
    ca_.Bind(&block21, &phi_bb21_4);
  return TNode<JSAny>{phi_bb21_4};
}

// https://crsrc.org/c/v8/src/builtins/promise-reaction-job.tq?l=137&c=1
void PromiseFulfillReactionJobInline_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSAny> p_value, TNode<JSAny> p_handler, TNode<HeapObject> p_promiseOrCapability, compiler::CodeAssemblerLabel* label_Slow) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block23(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Undefined> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Undefined_0(state_);
    tmp1 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{p_handler}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp0});
    ca_.Branch(tmp1, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  TNode<JSPromise> tmp2;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    compiler::CodeAssemblerLabel label3(&ca_);
    tmp2 = Cast_JSPromise_0(state_, TNode<HeapObject>{p_promiseOrCapability}, &label3);
    ca_.Goto(&block8);
    if (label3.is_used()) {
      ca_.Bind(&label3);
      ca_.Goto(&block9);
    }
  }

  if (block9.is_used()) {
    ca_.Bind(&block9);
    ca_.Goto(&block1);
  }

  TNode<JSAny> tmp4;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp4 = ca_.CallBuiltin<JSAny>(Builtin::kResolvePromise, p_context, tmp2, p_value);
    ca_.Goto(&block5);
  }

  TNode<Undefined> tmp5;
  TNode<BoolT> tmp6;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp5 = Undefined_0(state_);
    tmp6 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{p_promiseOrCapability}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp5});
    ca_.Branch(tmp6, &block10, std::vector<compiler::Node*>{}, &block11, std::vector<compiler::Node*>{});
  }

  TNode<JSGeneratorObject> tmp7;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    compiler::CodeAssemblerLabel label8(&ca_);
    tmp7 = Cast_JSGeneratorObject_1(state_, TNode<Context>{p_context}, TNode<Object>{p_handler}, &label8);
    ca_.Goto(&block15);
    if (label8.is_used()) {
      ca_.Bind(&label8);
      ca_.Goto(&block16);
    }
  }

  TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>> tmp9;
  if (block16.is_used()) {
    ca_.Bind(&block16);
    compiler::CodeAssemblerLabel label10(&ca_);
    tmp9 = Cast_Callable_1(state_, TNode<Context>{p_context}, TNode<Object>{ca_.UncheckedCast<JSAny>(p_handler)}, &label10);
    ca_.Goto(&block19);
    if (label10.is_used()) {
      ca_.Bind(&label10);
      ca_.Goto(&block20);
    }
  }

  if (block15.is_used()) {
    ca_.Bind(&block15);
    ResumeGenerator_0(state_, TNode<Context>{p_context}, TNode<JSGeneratorObject>{tmp7}, TNode<JSAny>{p_value}, PromiseReaction::kFulfill);
    ca_.Goto(&block13);
  }

  if (block20.is_used()) {
    ca_.Bind(&block20);
    ca_.Goto(&block1);
  }

  TNode<Undefined> tmp11;
  TNode<JSAny> tmp12;
      TNode<JSAny> tmp14;
  if (block19.is_used()) {
    ca_.Bind(&block19);
    tmp11 = Undefined_0(state_);
    compiler::CodeAssemblerExceptionHandlerLabel catch13__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch13__label);
    tmp12 = CodeStubAssembler(state_).Call(TNode<Context>{p_context}, TNode<JSAny>{tmp9}, TNode<JSAny>{tmp11}, TNode<JSAny>{p_value});
    }
    if (catch13__label.is_used()) {
      compiler::CodeAssemblerLabel catch13_skip(&ca_);
      ca_.Goto(&catch13_skip);
      ca_.Bind(&catch13__label, &tmp14);
      ca_.Goto(&block23);
      ca_.Bind(&catch13_skip);
    }
    ca_.Goto(&block21);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp15;
  TNode<Undefined> tmp16;
  TNode<Undefined> tmp17;
  TNode<JSAny> tmp18;
  if (block23.is_used()) {
    ca_.Bind(&block23);
    tmp15 = GetAndResetPendingMessage_0(state_);
    tmp16 = Undefined_0(state_);
    tmp17 = Undefined_0(state_);
    tmp18 = ca_.CallBuiltin<JSAny>(Builtin::kPromiseRejectReactionJob, p_context, tmp14, tmp16, tmp17);
    ca_.Goto(&block21);
  }

  if (block21.is_used()) {
    ca_.Bind(&block21);
    ca_.Goto(&block13);
  }

  if (block13.is_used()) {
    ca_.Bind(&block13);
    ca_.Goto(&block5);
  }

  if (block11.is_used()) {
    ca_.Bind(&block11);
    ca_.Goto(&block1);
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    ca_.Goto(&block24);
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    ca_.Goto(label_Slow);
  }

    ca_.Bind(&block24);
}

// https://crsrc.org/c/v8/src/builtins/promise-reaction-job.tq?l=171&c=1
void PromiseRejectReactionJobInline_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSAny> p_reason, TNode<JSAny> p_handler, TNode<HeapObject> p_promiseOrCapability, compiler::CodeAssemblerLabel* label_Slow) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block23(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Undefined> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Undefined_0(state_);
    tmp1 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{p_handler}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp0});
    ca_.Branch(tmp1, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  TNode<JSPromise> tmp2;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    compiler::CodeAssemblerLabel label3(&ca_);
    tmp2 = Cast_JSPromise_0(state_, TNode<HeapObject>{p_promiseOrCapability}, &label3);
    ca_.Goto(&block8);
    if (label3.is_used()) {
      ca_.Bind(&label3);
      ca_.Goto(&block9);
    }
  }

  if (block9.is_used()) {
    ca_.Bind(&block9);
    ca_.Goto(&block1);
  }

  TNode<False> tmp4;
  TNode<JSAny> tmp5;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp4 = False_0(state_);
    tmp5 = ca_.CallBuiltin<JSAny>(Builtin::kRejectPromise, p_context, tmp2, p_reason, tmp4);
    ca_.Goto(&block5);
  }

  TNode<Undefined> tmp6;
  TNode<BoolT> tmp7;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp6 = Undefined_0(state_);
    tmp7 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{p_promiseOrCapability}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp6});
    ca_.Branch(tmp7, &block10, std::vector<compiler::Node*>{}, &block11, std::vector<compiler::Node*>{});
  }

  TNode<JSGeneratorObject> tmp8;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    compiler::CodeAssemblerLabel label9(&ca_);
    tmp8 = Cast_JSGeneratorObject_1(state_, TNode<Context>{p_context}, TNode<Object>{p_handler}, &label9);
    ca_.Goto(&block15);
    if (label9.is_used()) {
      ca_.Bind(&label9);
      ca_.Goto(&block16);
    }
  }

  TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>> tmp10;
  if (block16.is_used()) {
    ca_.Bind(&block16);
    compiler::CodeAssemblerLabel label11(&ca_);
    tmp10 = Cast_Callable_1(state_, TNode<Context>{p_context}, TNode<Object>{ca_.UncheckedCast<JSAny>(p_handler)}, &label11);
    ca_.Goto(&block19);
    if (label11.is_used()) {
      ca_.Bind(&label11);
      ca_.Goto(&block20);
    }
  }

  if (block15.is_used()) {
    ca_.Bind(&block15);
    ResumeGenerator_0(state_, TNode<Context>{p_context}, TNode<JSGeneratorObject>{tmp8}, TNode<JSAny>{p_reason}, PromiseReaction::kReject);
    ca_.Goto(&block13);
  }

  if (block20.is_used()) {
    ca_.Bind(&block20);
    ca_.Goto(&block1);
  }

  TNode<Undefined> tmp12;
  TNode<JSAny> tmp13;
      TNode<JSAny> tmp15;
  if (block19.is_used()) {
    ca_.Bind(&block19);
    tmp12 = Undefined_0(state_);
    compiler::CodeAssemblerExceptionHandlerLabel catch14__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch14__label);
    tmp13 = CodeStubAssembler(state_).Call(TNode<Context>{p_context}, TNode<JSAny>{tmp10}, TNode<JSAny>{tmp12}, TNode<JSAny>{p_reason});
    }
    if (catch14__label.is_used()) {
      compiler::CodeAssemblerLabel catch14_skip(&ca_);
      ca_.Goto(&catch14_skip);
      ca_.Bind(&catch14__label, &tmp15);
      ca_.Goto(&block23);
      ca_.Bind(&catch14_skip);
    }
    ca_.Goto(&block21);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp16;
  TNode<Undefined> tmp17;
  TNode<Undefined> tmp18;
  TNode<JSAny> tmp19;
  if (block23.is_used()) {
    ca_.Bind(&block23);
    tmp16 = GetAndResetPendingMessage_0(state_);
    tmp17 = Undefined_0(state_);
    tmp18 = Undefined_0(state_);
    tmp19 = ca_.CallBuiltin<JSAny>(Builtin::kPromiseRejectReactionJob, p_context, tmp15, tmp17, tmp18);
    ca_.Goto(&block21);
  }

  if (block21.is_used()) {
    ca_.Bind(&block21);
    ca_.Goto(&block13);
  }

  if (block13.is_used()) {
    ca_.Bind(&block13);
    ca_.Goto(&block5);
  }

  if (block11.is_used()) {
    ca_.Bind(&block11);
    ca_.Goto(&block1);
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    ca_.Goto(&block24);
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    ca_.Goto(label_Slow);
  }

    ca_.Bind(&block24);
}

TF_BUILTIN(PromiseFulfillReactionJob, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kValue);
  USE(parameter1);
  TNode<Union<JSBoundFunction, JSFunction, JSGeneratorObject, JSObject, JSProxy, JSWrappedFunction, Undefined>> parameter2 = UncheckedParameter<Union<JSBoundFunction, JSFunction, JSGeneratorObject, JSObject, JSProxy, JSWrappedFunction, Undefined>>(Descriptor::kHandler);
  USE(parameter2);
  TNode<Union<JSPromise, PromiseCapability, Undefined>> parameter3 = UncheckedParameter<Union<JSPromise, PromiseCapability, Undefined>>(Descriptor::kPromiseOrCapability);
  USE(parameter3);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSAny> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = PromiseReactionJob_0(state_, TNode<Context>{parameter0}, TNode<JSAny>{parameter1}, TNode<Union<JSBoundFunction, JSFunction, JSGeneratorObject, JSObject, JSProxy, JSWrappedFunction, Undefined>>{parameter2}, TNode<Union<JSPromise, PromiseCapability, Undefined>>{parameter3}, PromiseReaction::kFulfill);
    CodeStubAssembler(state_).Return(tmp0);
  }
}

TF_BUILTIN(PromiseRejectReactionJob, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kReason);
  USE(parameter1);
  TNode<Union<JSBoundFunction, JSFunction, JSGeneratorObject, JSObject, JSProxy, JSWrappedFunction, Undefined>> parameter2 = UncheckedParameter<Union<JSBoundFunction, JSFunction, JSGeneratorObject, JSObject, JSProxy, JSWrappedFunction, Undefined>>(Descriptor::kHandler);
  USE(parameter2);
  TNode<Union<JSPromise, PromiseCapability, Undefined>> parameter3 = UncheckedParameter<Union<JSPromise, PromiseCapability, Undefined>>(Descriptor::kPromiseOrCapability);
  USE(parameter3);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSAny> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = PromiseReactionJob_0(state_, TNode<Context>{parameter0}, TNode<JSAny>{parameter1}, TNode<Union<JSBoundFunction, JSFunction, JSGeneratorObject, JSObject, JSProxy, JSWrappedFunction, Undefined>>{parameter2}, TNode<Union<JSPromise, PromiseCapability, Undefined>>{parameter3}, PromiseReaction::kReject);
    CodeStubAssembler(state_).Return(tmp0);
  }
}

// https://crsrc.org/c/v8/src/builtins/promise-reaction-job.tq?l=83&c=7
TNode<BoolT> Is_JSAsyncGeneratorObject_JSGeneratorObject_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSGeneratorObject> p_o) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSAsyncGeneratorObject> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_JSAsyncGeneratorObject_0(state_, TNode<HeapObject>{p_o}, &label1);
    ca_.Goto(&block4);
    if (label1.is_used()) {
      ca_.Bind(&label1);
      ca_.Goto(&block5);
    }
  }

  TNode<BoolT> tmp2;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp2 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block1, tmp2);
  }

  TNode<BoolT> tmp3;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp3 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block1, tmp3);
  }

  TNode<BoolT> phi_bb1_2;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_2);
    ca_.Goto(&block6);
  }

    ca_.Bind(&block6);
  return TNode<BoolT>{phi_bb1_2};
}

} // namespace internal
} // namespace v8
