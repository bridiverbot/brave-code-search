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
#include "torque-generated/src/builtins/generator-tq-csa.h"
#include "torque-generated/src/builtins/base-tq-csa.h"
#include "torque-generated/src/builtins/cast-tq-csa.h"
#include "torque-generated/src/builtins/convert-tq-csa.h"
#include "torque-generated/src/builtins/generator-tq-csa.h"
#include "torque-generated/src/objects/js-generator-tq-csa.h"

namespace v8 {
namespace internal {

TF_BUILTIN(GeneratorPrototypeNextLazyDeoptContinuation, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<NativeContext> parameter0 = UncheckedParameter<NativeContext>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<JSAny> parameter2 = UncheckedParameter<JSAny>(Descriptor::kGenerator);
  USE(parameter2);
  TNode<Union<BigInt, Boolean, HeapNumber, JSReceiver, Null, Smi, String, Symbol, TheHole, Undefined>> parameter3 = UncheckedParameter<Union<BigInt, Boolean, HeapNumber, JSReceiver, Null, Smi, String, Symbol, TheHole, Undefined>>(Descriptor::kException);
  USE(parameter3);
  TNode<JSAny> parameter4 = UncheckedParameter<JSAny>(Descriptor::kResult);
  USE(parameter4);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSGeneratorObject> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<JSAny> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<Undefined> tmp4;
  TNode<TheHole> tmp5;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = UnsafeCast_JSGeneratorObject_0(state_, TNode<Context>{parameter0}, TNode<Object>{parameter2});
    tmp1 = FromConstexpr_intptr_constexpr_int31_0(state_, 40);
    tmp2 = CodeStubAssembler(state_).LoadReference<JSAny>(CodeStubAssembler::Reference{tmp0, tmp1});
    tmp3 = FromConstexpr_intptr_constexpr_int31_0(state_, 40);
    tmp4 = Undefined_0(state_);
    CodeStubAssembler(state_).StoreReference<JSAny>(CodeStubAssembler::Reference{tmp0, tmp3}, tmp4);
    compiler::CodeAssemblerLabel label6(&ca_);
    tmp5 = Cast_TheHole_0(state_, TNode<Object>{parameter3}, &label6);
    ca_.Goto(&block3);
    if (label6.is_used()) {
      ca_.Bind(&label6);
      ca_.Goto(&block4);
    }
  }

  TNode<IntPtrT> tmp7;
  TNode<Smi> tmp8;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp7 = FromConstexpr_intptr_constexpr_int31_0(state_, 32);
    tmp8 = CodeStubAssembler(state_).SmiConstant(JSGeneratorObject::kGeneratorClosed);
    CodeStubAssembler(state_).StoreReference<Smi>(CodeStubAssembler::Reference{tmp0, tmp7}, tmp8);
    CodeStubAssembler(state_).CallRuntime(Runtime::kReThrow, parameter0, ca_.UncheckedCast<JSAny>(parameter3));
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> tmp9;
  TNode<Smi> tmp10;
  TNode<Smi> tmp11;
  TNode<BoolT> tmp12;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp9 = FromConstexpr_intptr_constexpr_int31_0(state_, 32);
    tmp10 = CodeStubAssembler(state_).LoadReference<Smi>(CodeStubAssembler::Reference{tmp0, tmp9});
    tmp11 = CodeStubAssembler(state_).SmiConstant(JSGeneratorObject::kGeneratorExecuting);
    tmp12 = CodeStubAssembler(state_).SmiEqual(TNode<Smi>{tmp10}, TNode<Smi>{tmp11});
    ca_.Branch(tmp12, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  TNode<TheHole> tmp13;
  TNode<BoolT> tmp14;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp13 = TheHole_0(state_);
    tmp14 = CodeStubAssembler(state_).TaggedNotEqual(TNode<Object>{parameter4}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp13});
    ca_.Branch(tmp14, &block7, std::vector<compiler::Node*>{}, &block8, std::vector<compiler::Node*>{});
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/generator.tq", 39});
      CodeStubAssembler(state_).FailAssert("Torque assert 'result != TheHole' failed", pos_stack);
    }
  }

  TNode<IntPtrT> tmp15;
  TNode<Smi> tmp16;
  TNode<True> tmp17;
  TNode<JSObject> tmp18;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp15 = FromConstexpr_intptr_constexpr_int31_0(state_, 32);
    tmp16 = CodeStubAssembler(state_).SmiConstant(JSGeneratorObject::kGeneratorClosed);
    CodeStubAssembler(state_).StoreReference<Smi>(CodeStubAssembler::Reference{tmp0, tmp15}, tmp16);
    tmp17 = True_0(state_);
    tmp18 = CodeStubAssembler(state_).AllocateJSIteratorResult(TNode<Context>{parameter0}, TNode<JSAny>{parameter4}, TNode<Boolean>{tmp17});
    CodeStubAssembler(state_).Return(tmp18);
  }

  TNode<TheHole> tmp19;
  TNode<BoolT> tmp20;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp19 = TheHole_0(state_);
    tmp20 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{parameter4}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp19});
    ca_.Branch(tmp20, &block9, std::vector<compiler::Node*>{}, &block10, std::vector<compiler::Node*>{});
  }

  TNode<TheHole> tmp21;
  TNode<BoolT> tmp22;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp21 = TheHole_0(state_);
    tmp22 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp2}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp21});
    ca_.Branch(tmp22, &block11, std::vector<compiler::Node*>{}, &block12, std::vector<compiler::Node*>{});
  }

  TNode<Undefined> tmp23;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp23 = Undefined_0(state_);
    ca_.Goto(&block13, tmp23);
  }

  if (block12.is_used()) {
    ca_.Bind(&block12);
    ca_.Goto(&block13, tmp2);
  }

  TNode<JSAny> phi_bb13_7;
  TNode<False> tmp24;
  TNode<JSObject> tmp25;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_7);
    tmp24 = False_0(state_);
    tmp25 = CodeStubAssembler(state_).AllocateJSIteratorResult(TNode<Context>{parameter0}, TNode<JSAny>{phi_bb13_7}, TNode<Boolean>{tmp24});
    CodeStubAssembler(state_).Return(tmp25);
  }

  if (block10.is_used()) {
    ca_.Bind(&block10);
    CodeStubAssembler(state_).Return(parameter4);
  }
}

// https://crsrc.org/c/v8/src/builtins/generator.tq?l=21&c=15
TNode<JSGeneratorObject> UnsafeCast_JSGeneratorObject_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o) {
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
    tmp0 = Is_JSGeneratorObject_Object_0(state_, TNode<Context>{p_context}, TNode<Object>{p_o});
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

  TNode<JSGeneratorObject> tmp1;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp1 = TORQUE_CAST(TNode<Object>{p_o});
    ca_.Goto(&block4);
  }

    ca_.Bind(&block4);
  return TNode<JSGeneratorObject>{tmp1};
}

} // namespace internal
} // namespace v8
