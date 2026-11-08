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
#include "torque-generated/src/builtins/regexp-match-all-tq-csa.h"
#include "torque-generated/src/builtins/array-copywithin-tq-csa.h"
#include "torque-generated/src/builtins/array-join-tq-csa.h"
#include "torque-generated/src/builtins/base-tq-csa.h"
#include "torque-generated/src/builtins/boolean-tq-csa.h"
#include "torque-generated/src/builtins/builtins-string-tq-csa.h"
#include "torque-generated/src/builtins/cast-tq-csa.h"
#include "torque-generated/src/builtins/convert-tq-csa.h"
#include "torque-generated/src/builtins/promise-abstract-operations-tq-csa.h"
#include "torque-generated/src/builtins/regexp-exec-tq-csa.h"
#include "torque-generated/src/builtins/regexp-match-all-tq-csa.h"
#include "torque-generated/src/builtins/regexp-tq-csa.h"
#include "torque-generated/src/builtins/torque-internal-tq-csa.h"
#include "torque-generated/src/objects/fixed-array-tq-csa.h"
#include "torque-generated/src/objects/js-regexp-string-iterator-tq-csa.h"
#include "torque-generated/src/objects/js-regexp-tq-csa.h"
#include "torque-generated/src/objects/string-tq-csa.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/builtins/regexp-match-all.tq?l=17&c=1
TNode<JSAny> RegExpPrototypeMatchAllImpl_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<NativeContext> p_nativeContext, TNode<JSAny> p_receiver, TNode<JSAny> p_string) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny, BoolT, BoolT> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block30(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSReceiver> tmp0;
  TNode<String> tmp1;
  TNode<JSRegExp> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    CodeStubAssembler(state_).ThrowIfNotJSReceiver(TNode<Context>{p_context}, TNode<JSAny>{p_receiver}, CastIfEnumClass<MessageTemplate>(MessageTemplate::kIncompatibleMethodReceiver), "RegExp.prototype.@@matchAll");
    tmp0 = UnsafeCast_JSReceiver_0(state_, TNode<Context>{p_context}, TNode<Object>{p_receiver});
    tmp1 = CodeStubAssembler(state_).ToString_Inline(TNode<Context>{p_context}, TNode<JSAny>{p_string});
    compiler::CodeAssemblerLabel label3(&ca_);
    tmp2 = Cast_FastJSRegExp_0(state_, TNode<Context>{p_context}, TNode<HeapObject>{tmp0}, &label3);
    ca_.Goto(&block4);
    if (label3.is_used()) {
      ca_.Bind(&label3);
      ca_.Goto(&block5);
    }
  }

  TNode<JSFunction> tmp4;
  TNode<JSReceiver> tmp5;
  TNode<JSReceiver> tmp6;
  TNode<BoolT> tmp7;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp4 = LoadRegExpFunction_0(state_, TNode<NativeContext>{p_nativeContext});
    tmp5 = CodeStubAssembler(state_).SpeciesConstructor(TNode<Context>{p_context}, TNode<JSAny>{tmp0}, TNode<JSReceiver>{tmp4});
    tmp6 = UnsafeCast_Constructor_0(state_, TNode<Context>{p_context}, TNode<Object>{tmp5});
    tmp7 = CodeStubAssembler(state_).TaggedNotEqual(TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp6}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp4});
    ca_.Branch(tmp7, &block11, std::vector<compiler::Node*>{}, &block12, std::vector<compiler::Node*>{});
  }

  TNode<String> tmp8;
  TNode<String> tmp9;
  TNode<JSAny> tmp10;
  TNode<JSRegExp> tmp11;
  TNode<BoolT> tmp12;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp8 = RegExpSource_0(state_, TNode<JSRegExp>{tmp2});
    tmp9 = FastFlagsGetter_0(state_, TNode<Context>{p_context}, TNode<JSRegExp>{tmp2});
    tmp10 = RegExpCreate_0(state_, TNode<Context>{p_context}, TNode<NativeContext>{p_nativeContext}, TNode<JSAny>{tmp8}, TNode<String>{tmp9});
    tmp11 = UnsafeCast_JSRegExp_0(state_, TNode<Context>{p_context}, TNode<Object>{tmp10});
    tmp12 = IsFastRegExpPermissive_0(state_, TNode<Context>{p_context}, TNode<HeapObject>{tmp11});
    ca_.Branch(tmp12, &block6, std::vector<compiler::Node*>{}, &block7, std::vector<compiler::Node*>{});
  }

  if (block7.is_used()) {
    ca_.Bind(&block7);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/regexp-match-all.tq", 49});
      CodeStubAssembler(state_).FailAssert("Torque assert 'IsFastRegExpPermissive(matcherRegExp)' failed", pos_stack);
    }
  }

  TNode<JSRegExp> tmp13;
  TNode<Smi> tmp14;
  TNode<BoolT> tmp15;
  TNode<BoolT> tmp16;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp13 = UnsafeCast_FastJSRegExp_0(state_, TNode<Context>{p_context}, TNode<Object>{tmp0});
    tmp14 = RegExpBuiltinsAssembler(state_).FastLoadLastIndex(TNode<JSRegExp>{tmp13});
    RegExpBuiltinsAssembler(state_).FastStoreLastIndex(TNode<JSRegExp>{tmp11}, TNode<Smi>{tmp14});
    tmp15 = RegExpBuiltinsAssembler(state_).FastFlagGetter(TNode<JSRegExp>{tmp11}, CastIfEnumClass<JSRegExp::Flag>(JSRegExp::Flag::kGlobal));
    tmp16 = RegExpBuiltinsAssembler(state_).FastFlagGetter(TNode<JSRegExp>{tmp11}, CastIfEnumClass<JSRegExp::Flag>(JSRegExp::Flag::kUnicode));
    ca_.Branch(tmp16, &block8, std::vector<compiler::Node*>{}, &block9, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp17;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp17 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block10, tmp17);
  }

  TNode<BoolT> tmp18;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp18 = RegExpBuiltinsAssembler(state_).FastFlagGetter(TNode<JSRegExp>{tmp11}, CastIfEnumClass<JSRegExp::Flag>(JSRegExp::Flag::kUnicodeSets));
    ca_.Goto(&block10, tmp18);
  }

  TNode<BoolT> phi_bb10_16;
  if (block10.is_used()) {
    ca_.Bind(&block10, &phi_bb10_16);
    ca_.Goto(&block2, tmp10, tmp15, phi_bb10_16);
  }

  TNode<Smi> tmp19;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp19 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<int31_t>(v8::Isolate::kRegExpCustomSpecies));
    CodeStubAssembler(state_).CallRuntime(Runtime::kIncrementUseCounter, p_context, tmp19);
    ca_.Goto(&block12);
  }

  TNode<JSAny> tmp20;
  TNode<JSAny> tmp21;
  TNode<String> tmp22;
  TNode<JSReceiver> tmp23;
  TNode<JSAny> tmp24;
  TNode<Number> tmp25;
  TNode<JSReceiver> tmp26;
  TNode<String> tmp27;
  TNode<Smi> tmp28;
  TNode<Smi> tmp29;
  TNode<Smi> tmp30;
  TNode<BoolT> tmp31;
  TNode<String> tmp32;
  TNode<String> tmp33;
  TNode<Smi> tmp34;
  TNode<Smi> tmp35;
  TNode<Smi> tmp36;
  TNode<Smi> tmp37;
  TNode<Smi> tmp38;
  TNode<BoolT> tmp39;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    tmp20 = FromConstexpr_JSAny_constexpr_string_0(state_, "flags");
    tmp21 = CodeStubAssembler(state_).GetProperty(TNode<Context>{p_context}, TNode<JSAny>{tmp0}, TNode<JSAny>{tmp20});
    tmp22 = CodeStubAssembler(state_).ToString_Inline(TNode<Context>{p_context}, TNode<JSAny>{tmp21});
    tmp23 = CodeStubAssembler(state_).Construct(TNode<Context>{p_context}, TNode<JSReceiver>{tmp6}, TNode<JSAny>{tmp0}, TNode<JSAny>{tmp22});
    tmp24 = RegExpBuiltinsAssembler(state_).SlowLoadLastIndex(TNode<Context>{p_context}, TNode<JSAny>{tmp0});
    tmp25 = CodeStubAssembler(state_).ToLength_Inline(TNode<Context>{p_context}, TNode<JSAny>{tmp24});
    tmp26 = UnsafeCast_JSReceiver_0(state_, TNode<Context>{p_context}, TNode<Object>{tmp23});
    RegExpBuiltinsAssembler(state_).SlowStoreLastIndex(TNode<Context>{p_context}, TNode<JSAny>{tmp26}, TNode<JSAny>{tmp25});
    tmp27 = CodeStubAssembler(state_).StringConstant("g");
    tmp28 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp29 = ca_.CallBuiltin<Smi>(Builtin::kStringIndexOf, TNode<Object>(), tmp22, tmp27, tmp28);
    tmp30 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    tmp31 = CodeStubAssembler(state_).SmiNotEqual(TNode<Smi>{tmp29}, TNode<Smi>{tmp30});
    tmp32 = CodeStubAssembler(state_).StringConstant("u");
    tmp33 = CodeStubAssembler(state_).StringConstant("v");
    tmp34 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp35 = ca_.CallBuiltin<Smi>(Builtin::kStringIndexOf, TNode<Object>(), tmp22, tmp32, tmp34);
    tmp36 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp37 = ca_.CallBuiltin<Smi>(Builtin::kStringIndexOf, TNode<Object>(), tmp22, tmp33, tmp36);
    tmp38 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    tmp39 = CodeStubAssembler(state_).SmiNotEqual(TNode<Smi>{tmp35}, TNode<Smi>{tmp38});
    ca_.Branch(tmp39, &block13, std::vector<compiler::Node*>{}, &block14, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp40;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    tmp40 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block15, tmp40);
  }

  TNode<Smi> tmp41;
  TNode<BoolT> tmp42;
  if (block14.is_used()) {
    ca_.Bind(&block14);
    tmp41 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    tmp42 = CodeStubAssembler(state_).SmiNotEqual(TNode<Smi>{tmp37}, TNode<Smi>{tmp41});
    ca_.Goto(&block15, tmp42);
  }

  TNode<BoolT> phi_bb15_23;
  TNode<BoolT> tmp43;
  TNode<JSRegExp> tmp44;
  if (block15.is_used()) {
    ca_.Bind(&block15, &phi_bb15_23);
    tmp43 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    compiler::CodeAssemblerLabel label45(&ca_);
    tmp44 = Cast_JSRegExp_1(state_, TNode<Context>{p_context}, TNode<Object>{tmp23}, &label45);
    ca_.Goto(&block18);
    if (label45.is_used()) {
      ca_.Bind(&label45);
      ca_.Goto(&block19);
    }
  }

  TNode<BoolT> tmp46;
  if (block19.is_used()) {
    ca_.Bind(&block19);
    tmp46 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block16, tmp46);
  }

  TNode<BoolT> tmp47;
  TNode<BoolT> tmp48;
  if (block18.is_used()) {
    ca_.Bind(&block18);
    tmp47 = RegExpBuiltinsAssembler(state_).FastFlagGetter(TNode<JSRegExp>{tmp44}, CastIfEnumClass<JSRegExp::Flag>(JSRegExp::Flag::kGlobal));
    tmp48 = RegExpBuiltinsAssembler(state_).FastFlagGetter(TNode<JSRegExp>{tmp44}, CastIfEnumClass<JSRegExp::Flag>(JSRegExp::Flag::kUnicode));
    ca_.Branch(tmp48, &block20, std::vector<compiler::Node*>{}, &block21, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp49;
  if (block20.is_used()) {
    ca_.Bind(&block20);
    tmp49 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block22, tmp49);
  }

  TNode<BoolT> tmp50;
  if (block21.is_used()) {
    ca_.Bind(&block21);
    tmp50 = RegExpBuiltinsAssembler(state_).FastFlagGetter(TNode<JSRegExp>{tmp44}, CastIfEnumClass<JSRegExp::Flag>(JSRegExp::Flag::kUnicodeSets));
    ca_.Goto(&block22, tmp50);
  }

  TNode<BoolT> phi_bb22_27;
  TNode<BoolT> tmp51;
  if (block22.is_used()) {
    ca_.Bind(&block22, &phi_bb22_27);
    tmp51 = CodeStubAssembler(state_).Word32NotEqual(TNode<BoolT>{tmp47}, TNode<BoolT>{tmp31});
    ca_.Branch(tmp51, &block25, std::vector<compiler::Node*>{}, &block26, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp52;
  if (block25.is_used()) {
    ca_.Bind(&block25);
    tmp52 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block27, tmp52);
  }

  TNode<BoolT> tmp53;
  if (block26.is_used()) {
    ca_.Bind(&block26);
    tmp53 = CodeStubAssembler(state_).Word32NotEqual(TNode<BoolT>{phi_bb22_27}, TNode<BoolT>{phi_bb15_23});
    ca_.Goto(&block27, tmp53);
  }

  TNode<BoolT> phi_bb27_28;
  if (block27.is_used()) {
    ca_.Bind(&block27, &phi_bb27_28);
    ca_.Branch(phi_bb27_28, &block23, std::vector<compiler::Node*>{}, &block24, std::vector<compiler::Node*>{tmp43});
  }

  TNode<BoolT> tmp54;
  if (block23.is_used()) {
    ca_.Bind(&block23);
    tmp54 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block24, tmp54);
  }

  TNode<BoolT> phi_bb24_22;
  if (block24.is_used()) {
    ca_.Bind(&block24, &phi_bb24_22);
    ca_.Goto(&block16, phi_bb24_22);
  }

  TNode<BoolT> phi_bb16_22;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_22);
    ca_.Branch(phi_bb16_22, &block28, std::vector<compiler::Node*>{phi_bb16_22}, &block29, std::vector<compiler::Node*>{phi_bb16_22});
  }

  TNode<BoolT> phi_bb28_22;
  TNode<Smi> tmp55;
  if (block28.is_used()) {
    ca_.Bind(&block28, &phi_bb28_22);
    tmp55 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<int31_t>(v8::Isolate::kRegExpMatcherFlagsMismatch));
    CodeStubAssembler(state_).CallRuntime(Runtime::kIncrementUseCounter, p_context, tmp55);
    ca_.Goto(&block29, phi_bb28_22);
  }

  TNode<BoolT> phi_bb29_22;
  if (block29.is_used()) {
    ca_.Bind(&block29, &phi_bb29_22);
    ca_.Goto(&block2, tmp23, tmp31, phi_bb15_23);
  }

  TNode<JSAny> phi_bb2_6;
  TNode<BoolT> phi_bb2_7;
  TNode<BoolT> phi_bb2_8;
  TNode<JSAny> tmp56;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_6, &phi_bb2_7, &phi_bb2_8);
    tmp56 = RegExpMatchAllAssembler(state_).CreateRegExpStringIterator(TNode<NativeContext>{p_nativeContext}, TNode<JSAny>{phi_bb2_6}, TNode<String>{tmp1}, TNode<BoolT>{phi_bb2_7}, TNode<BoolT>{phi_bb2_8});
    ca_.Goto(&block30);
  }

    ca_.Bind(&block30);
  return TNode<JSAny>{tmp56};
}

TF_BUILTIN(RegExpPrototypeMatchAll, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<NativeContext> parameter0 = UncheckedParameter<NativeContext>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<JSAny> parameter2 = UncheckedParameter<JSAny>(Descriptor::kString);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSAny> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = RegExpPrototypeMatchAllImpl_0(state_, TNode<Context>{parameter0}, TNode<NativeContext>{parameter0}, TNode<JSAny>{parameter1}, TNode<JSAny>{parameter2});
    CodeStubAssembler(state_).Return(tmp0);
  }
}

TF_BUILTIN(RegExpStringIteratorPrototypeNext, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<NativeContext> parameter0 = UncheckedParameter<NativeContext>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kReceiver);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Object, BoolT> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Object, BoolT> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Object, BoolT> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Object, BoolT> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Object, BoolT> block26(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<Object, BoolT> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Object, BoolT> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Object, BoolT> block34(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Object, BoolT> block35(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Object, BoolT> block39(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<Object, BoolT> block38(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Object, BoolT> block40(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Object, BoolT> block41(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Object, BoolT> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Object, BoolT> block43(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<Object, BoolT> block42(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Object, BoolT> block44(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Object, BoolT> block45(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Object> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSRegExpStringIterator> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_JSRegExpStringIterator_1(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1}, &label1);
    ca_.Goto(&block3);
    if (label1.is_used()) {
      ca_.Bind(&label1);
      ca_.Goto(&block4);
    }
  }

  TNode<Object> tmp2;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp2 = FromConstexpr_Object_constexpr_string_0(state_, "%RegExpStringIterator%.prototype.next");
    CodeStubAssembler(state_).ThrowTypeError(TNode<Context>{parameter0}, CastIfEnumClass<MessageTemplate>(MessageTemplate::kIncompatibleMethodReceiver), TNode<Object>{tmp2}, TNode<Object>{parameter1});
  }

  TNode<IntPtrT> tmp3;
  TNode<Smi> tmp4;
  TNode<BoolT> tmp5;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp3 = FromConstexpr_intptr_constexpr_int31_0(state_, 20);
    tmp4 = CodeStubAssembler(state_).LoadReference<Smi>(CodeStubAssembler::Reference{tmp0, tmp3});
    tmp5 = ca_.UncheckedCast<BoolT>(CodeStubAssembler(state_).DecodeWord32FromWord<base::BitField<bool, 1, 1, uintptr_t>>(ca_.UncheckedCast<WordT>(ca_.BitcastTaggedToWordForTagAndSmiBits(tmp4))));
    ca_.Branch(tmp5, &block7, std::vector<compiler::Node*>{}, &block8, std::vector<compiler::Node*>{});
  }

  if (block7.is_used()) {
    ca_.Bind(&block7);
    ca_.Goto(&block6);
  }

  TNode<IntPtrT> tmp6;
  TNode<JSReceiver> tmp7;
  TNode<IntPtrT> tmp8;
  TNode<String> tmp9;
  TNode<BoolT> tmp10;
  TNode<BoolT> tmp11;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp6 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp7 = CodeStubAssembler(state_).LoadReference<JSReceiver>(CodeStubAssembler::Reference{tmp0, tmp6});
    tmp8 = FromConstexpr_intptr_constexpr_int31_0(state_, 16);
    tmp9 = CodeStubAssembler(state_).LoadReference<String>(CodeStubAssembler::Reference{tmp0, tmp8});
    tmp10 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    tmp11 = IsFastRegExpPermissive_0(state_, TNode<Context>{parameter0}, TNode<HeapObject>{tmp7});
    ca_.Branch(tmp11, &block11, std::vector<compiler::Node*>{}, &block12, std::vector<compiler::Node*>{});
  }

  TNode<JSRegExp> tmp12;
  TNode<BoolT> tmp13;
  TNode<BoolT> tmp14;
  TNode<BoolT> tmp15;
  TNode<BoolT> tmp16;
  TNode<BoolT> tmp17;
  TNode<BoolT> tmp18;
  TNode<BoolT> tmp19;
  TNode<BoolT> tmp20;
  TNode<BoolT> tmp21;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp12 = UnsafeCast_JSRegExp_0(state_, TNode<Context>{parameter0}, TNode<Object>{tmp7});
    tmp13 = RegExpBuiltinsAssembler(state_).FastFlagGetter(TNode<JSRegExp>{tmp12}, CastIfEnumClass<JSRegExp::Flag>(JSRegExp::Flag::kGlobal));
    tmp14 = RegExpBuiltinsAssembler(state_).FastFlagGetter(TNode<JSRegExp>{tmp12}, CastIfEnumClass<JSRegExp::Flag>(JSRegExp::Flag::kUnicode));
    tmp15 = RegExpBuiltinsAssembler(state_).FastFlagGetter(TNode<JSRegExp>{tmp12}, CastIfEnumClass<JSRegExp::Flag>(JSRegExp::Flag::kUnicodeSets));
    tmp16 = CodeStubAssembler(state_).Word32Or(TNode<BoolT>{tmp14}, TNode<BoolT>{tmp15});
    tmp17 = ca_.UncheckedCast<BoolT>(CodeStubAssembler(state_).DecodeWord32FromWord<base::BitField<bool, 2, 1, uintptr_t>>(ca_.UncheckedCast<WordT>(ca_.BitcastTaggedToWordForTagAndSmiBits(tmp4))));
    tmp18 = CodeStubAssembler(state_).Word32Equal(TNode<BoolT>{tmp13}, TNode<BoolT>{tmp17});
    tmp19 = ca_.UncheckedCast<BoolT>(CodeStubAssembler(state_).DecodeWord32FromWord<base::BitField<bool, 3, 1, uintptr_t>>(ca_.UncheckedCast<WordT>(ca_.BitcastTaggedToWordForTagAndSmiBits(tmp4))));
    tmp20 = CodeStubAssembler(state_).Word32Equal(TNode<BoolT>{tmp16}, TNode<BoolT>{tmp19});
    tmp21 = CodeStubAssembler(state_).Word32And(TNode<BoolT>{tmp18}, TNode<BoolT>{tmp20});
    ca_.Branch(tmp21, &block14, std::vector<compiler::Node*>{}, &block15, std::vector<compiler::Node*>{});
  }

  TNode<Number> tmp22;
  TNode<RegExpMatchInfo> tmp23;
  if (block14.is_used()) {
    ca_.Bind(&block14);
    tmp22 = LoadLastIndexAsLength_0(state_, TNode<Context>{parameter0}, TNode<JSRegExp>{tmp12}, true);
    compiler::CodeAssemblerLabel label24(&ca_);
    tmp23 = RegExpPrototypeExecBodyWithoutResultFast_1(state_, TNode<Context>{parameter0}, TNode<JSRegExp>{tmp12}, TNode<String>{tmp9}, TNode<Number>{tmp22}, &label24);
    ca_.Goto(&block17);
    if (label24.is_used()) {
      ca_.Bind(&label24);
      ca_.Goto(&block18);
    }
  }

  if (block18.is_used()) {
    ca_.Bind(&block18);
    ca_.Goto(&block10, ca_.Uninitialized<Object>());
  }

  TNode<JSArray> tmp25;
  TNode<BoolT> tmp26;
  if (block17.is_used()) {
    ca_.Bind(&block17);
    tmp25 = RegExpBuiltinsAssembler(state_).ConstructNewResultFromMatchInfo(TNode<Context>{parameter0}, TNode<JSRegExp>{tmp12}, TNode<RegExpMatchInfo>{tmp23}, TNode<String>{tmp9}, TNode<Number>{tmp22});
    tmp26 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block16, tmp25, tmp26);
  }

  TNode<JSAny> tmp27;
  TNode<Null> tmp28;
  TNode<BoolT> tmp29;
  if (block15.is_used()) {
    ca_.Bind(&block15);
    tmp27 = RegExpExec_0(state_, TNode<Context>{parameter0}, TNode<JSReceiver>{tmp7}, TNode<String>{tmp9});
    tmp28 = Null_0(state_);
    tmp29 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp27}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp28});
    ca_.Branch(tmp29, &block19, std::vector<compiler::Node*>{}, &block20, std::vector<compiler::Node*>{});
  }

  if (block19.is_used()) {
    ca_.Bind(&block19);
    ca_.Goto(&block10, tmp27);
  }

  if (block20.is_used()) {
    ca_.Bind(&block20);
    ca_.Goto(&block16, tmp27, tmp10);
  }

  TNode<Object> phi_bb16_6;
  TNode<BoolT> phi_bb16_7;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_6, &phi_bb16_7);
    ca_.Goto(&block13, phi_bb16_6, phi_bb16_7);
  }

  TNode<JSAny> tmp30;
  TNode<Null> tmp31;
  TNode<BoolT> tmp32;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    tmp30 = RegExpExec_0(state_, TNode<Context>{parameter0}, TNode<JSReceiver>{tmp7}, TNode<String>{tmp9});
    tmp31 = Null_0(state_);
    tmp32 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp30}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp31});
    ca_.Branch(tmp32, &block21, std::vector<compiler::Node*>{}, &block22, std::vector<compiler::Node*>{});
  }

  if (block21.is_used()) {
    ca_.Bind(&block21);
    ca_.Goto(&block10, tmp30);
  }

  if (block22.is_used()) {
    ca_.Bind(&block22);
    ca_.Goto(&block13, tmp30, tmp10);
  }

  TNode<Object> phi_bb13_6;
  TNode<BoolT> phi_bb13_7;
  TNode<BoolT> tmp33;
  TNode<BoolT> tmp34;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_6, &phi_bb13_7);
    tmp33 = ca_.UncheckedCast<BoolT>(CodeStubAssembler(state_).DecodeWord32FromWord<base::BitField<bool, 2, 1, uintptr_t>>(ca_.UncheckedCast<WordT>(ca_.BitcastTaggedToWordForTagAndSmiBits(tmp4))));
    tmp34 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp33});
    ca_.Branch(tmp34, &block23, std::vector<compiler::Node*>{phi_bb13_6, phi_bb13_7}, &block24, std::vector<compiler::Node*>{phi_bb13_6, phi_bb13_7});
  }

  TNode<Object> phi_bb23_6;
  TNode<BoolT> phi_bb23_7;
  TNode<IntPtrT> tmp35;
  TNode<Smi> tmp36;
  TNode<BoolT> tmp37;
  TNode<Smi> tmp38;
  TNode<JSAny> tmp39;
  TNode<False> tmp40;
  TNode<JSObject> tmp41;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_6, &phi_bb23_7);
    tmp35 = FromConstexpr_intptr_constexpr_int31_0(state_, 20);
    tmp36 = CodeStubAssembler(state_).LoadReference<Smi>(CodeStubAssembler::Reference{tmp0, tmp35});
    tmp37 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    tmp38 = ca_.UncheckedCast<Smi>(ca_.BitcastWordToTaggedSigned(CodeStubAssembler(state_).UpdateWord32InWord<base::BitField<bool, 1, 1, uintptr_t>>(ca_.UncheckedCast<WordT>(ca_.BitcastTaggedToWordForTagAndSmiBits(tmp36)), ca_.UncheckedCast<Uint32T>(tmp37))));
    CodeStubAssembler(state_).StoreReference<Smi>(CodeStubAssembler::Reference{tmp0, tmp35}, tmp38);
    tmp39 = UnsafeCast_JSAny_0(state_, TNode<Context>{parameter0}, TNode<Object>{phi_bb23_6});
    tmp40 = False_0(state_);
    tmp41 = CodeStubAssembler(state_).AllocateJSIteratorResult(TNode<Context>{parameter0}, TNode<JSAny>{tmp39}, TNode<Boolean>{tmp40});
    CodeStubAssembler(state_).Return(tmp41);
  }

  TNode<Object> phi_bb24_6;
  TNode<BoolT> phi_bb24_7;
  TNode<BoolT> tmp42;
  if (block24.is_used()) {
    ca_.Bind(&block24, &phi_bb24_6, &phi_bb24_7);
    tmp42 = ca_.UncheckedCast<BoolT>(CodeStubAssembler(state_).DecodeWord32FromWord<base::BitField<bool, 2, 1, uintptr_t>>(ca_.UncheckedCast<WordT>(ca_.BitcastTaggedToWordForTagAndSmiBits(tmp4))));
    ca_.Branch(tmp42, &block25, std::vector<compiler::Node*>{phi_bb24_6, phi_bb24_7}, &block26, std::vector<compiler::Node*>{phi_bb24_6, phi_bb24_7});
  }

  TNode<Object> phi_bb26_6;
  TNode<BoolT> phi_bb26_7;
  if (block26.is_used()) {
    ca_.Bind(&block26, &phi_bb26_6, &phi_bb26_7);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/regexp-match-all.tq", 207});
      CodeStubAssembler(state_).FailAssert("Torque assert 'flags.global' failed", pos_stack);
    }
  }

  TNode<Object> phi_bb25_6;
  TNode<BoolT> phi_bb25_7;
  if (block25.is_used()) {
    ca_.Bind(&block25, &phi_bb25_6, &phi_bb25_7);
    ca_.Branch(phi_bb25_7, &block27, std::vector<compiler::Node*>{phi_bb25_6, phi_bb25_7}, &block28, std::vector<compiler::Node*>{phi_bb25_6, phi_bb25_7});
  }

  TNode<Object> phi_bb27_6;
  TNode<BoolT> phi_bb27_7;
  TNode<JSArray> tmp43;
  TNode<IntPtrT> tmp44;
  TNode<FixedArrayBase> tmp45;
  TNode<FixedArray> tmp46;
  TNode<Union<HeapObject, TaggedIndex>> tmp47;
  TNode<IntPtrT> tmp48;
  TNode<IntPtrT> tmp49;
  TNode<UintPtrT> tmp50;
  TNode<IntPtrT> tmp51;
  TNode<UintPtrT> tmp52;
  TNode<UintPtrT> tmp53;
  TNode<BoolT> tmp54;
  if (block27.is_used()) {
    ca_.Bind(&block27, &phi_bb27_6, &phi_bb27_7);
    tmp43 = UnsafeCast_JSRegExpResult_0(state_, TNode<Context>{parameter0}, TNode<Object>{phi_bb27_6});
    tmp44 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp45 = CodeStubAssembler(state_).LoadReference<FixedArrayBase>(CodeStubAssembler::Reference{tmp43, tmp44});
    tmp46 = UnsafeCast_FixedArray_0(state_, TNode<Context>{parameter0}, TNode<Object>{tmp45});
    std::tie(tmp47, tmp48, tmp49) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp46}).Flatten();
    tmp50 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp51 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp50});
    tmp52 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp51});
    tmp53 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp49});
    tmp54 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp52}, TNode<UintPtrT>{tmp53});
    ca_.Branch(tmp54, &block34, std::vector<compiler::Node*>{phi_bb27_6, phi_bb27_7}, &block35, std::vector<compiler::Node*>{phi_bb27_6, phi_bb27_7});
  }

  TNode<Object> phi_bb34_6;
  TNode<BoolT> phi_bb34_7;
  TNode<IntPtrT> tmp55;
  TNode<IntPtrT> tmp56;
  TNode<Union<HeapObject, TaggedIndex>> tmp57;
  TNode<IntPtrT> tmp58;
  TNode<Object> tmp59;
  TNode<String> tmp60;
  TNode<BoolT> tmp61;
  if (block34.is_used()) {
    ca_.Bind(&block34, &phi_bb34_6, &phi_bb34_7);
    tmp55 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp51});
    tmp56 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp48}, TNode<IntPtrT>{tmp55});
    std::tie(tmp57, tmp58) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp47}, TNode<IntPtrT>{tmp56}).Flatten();
    tmp59 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp57, tmp58});
    tmp60 = UnsafeCast_String_0(state_, TNode<Context>{parameter0}, TNode<Object>{tmp59});
    tmp61 = IsFastRegExpPermissive_0(state_, TNode<Context>{parameter0}, TNode<HeapObject>{tmp7});
    ca_.Branch(tmp61, &block38, std::vector<compiler::Node*>{phi_bb34_6, phi_bb34_7}, &block39, std::vector<compiler::Node*>{phi_bb34_6, phi_bb34_7});
  }

  TNode<Object> phi_bb35_6;
  TNode<BoolT> phi_bb35_7;
  if (block35.is_used()) {
    ca_.Bind(&block35, &phi_bb35_6, &phi_bb35_7);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Object> phi_bb39_6;
  TNode<BoolT> phi_bb39_7;
  if (block39.is_used()) {
    ca_.Bind(&block39, &phi_bb39_6, &phi_bb39_7);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/regexp-match-all.tq", 216});
      CodeStubAssembler(state_).FailAssert("Torque assert 'IsFastRegExpPermissive(iteratingRegExp)' failed", pos_stack);
    }
  }

  TNode<Object> phi_bb38_6;
  TNode<BoolT> phi_bb38_7;
  TNode<JSRegExp> tmp62;
  TNode<String> tmp63;
  TNode<BoolT> tmp64;
  if (block38.is_used()) {
    ca_.Bind(&block38, &phi_bb38_6, &phi_bb38_7);
    tmp62 = UnsafeCast_JSRegExp_0(state_, TNode<Context>{parameter0}, TNode<Object>{tmp7});
    tmp63 = kEmptyString_0(state_);
    tmp64 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp60}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp63});
    ca_.Branch(tmp64, &block40, std::vector<compiler::Node*>{phi_bb38_6, phi_bb38_7}, &block41, std::vector<compiler::Node*>{phi_bb38_6, phi_bb38_7});
  }

  TNode<Object> phi_bb40_6;
  TNode<BoolT> phi_bb40_7;
  TNode<Smi> tmp65;
  TNode<BoolT> tmp66;
  TNode<Smi> tmp67;
  if (block40.is_used()) {
    ca_.Bind(&block40, &phi_bb40_6, &phi_bb40_7);
    tmp65 = RegExpBuiltinsAssembler(state_).FastLoadLastIndex(TNode<JSRegExp>{tmp62});
    tmp66 = ca_.UncheckedCast<BoolT>(CodeStubAssembler(state_).DecodeWord32FromWord<base::BitField<bool, 3, 1, uintptr_t>>(ca_.UncheckedCast<WordT>(ca_.BitcastTaggedToWordForTagAndSmiBits(tmp4))));
    tmp67 = RegExpBuiltinsAssembler(state_).AdvanceStringIndexFast(TNode<String>{tmp9}, TNode<Smi>{tmp65}, TNode<BoolT>{tmp66});
    RegExpBuiltinsAssembler(state_).FastStoreLastIndex(TNode<JSRegExp>{tmp62}, TNode<Smi>{tmp67});
    ca_.Goto(&block41, phi_bb40_6, phi_bb40_7);
  }

  TNode<Object> phi_bb41_6;
  TNode<BoolT> phi_bb41_7;
  TNode<False> tmp68;
  TNode<JSObject> tmp69;
  if (block41.is_used()) {
    ca_.Bind(&block41, &phi_bb41_6, &phi_bb41_7);
    tmp68 = False_0(state_);
    tmp69 = CodeStubAssembler(state_).AllocateJSIteratorResult(TNode<Context>{parameter0}, TNode<JSAny>{tmp43}, TNode<Boolean>{tmp68});
    CodeStubAssembler(state_).Return(tmp69);
  }

  TNode<Object> phi_bb28_6;
  TNode<BoolT> phi_bb28_7;
  TNode<BoolT> tmp70;
  if (block28.is_used()) {
    ca_.Bind(&block28, &phi_bb28_6, &phi_bb28_7);
    tmp70 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{phi_bb28_7});
    ca_.Branch(tmp70, &block42, std::vector<compiler::Node*>{phi_bb28_6, phi_bb28_7}, &block43, std::vector<compiler::Node*>{phi_bb28_6, phi_bb28_7});
  }

  TNode<Object> phi_bb43_6;
  TNode<BoolT> phi_bb43_7;
  if (block43.is_used()) {
    ca_.Bind(&block43, &phi_bb43_6, &phi_bb43_7);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/regexp-match-all.tq", 234});
      CodeStubAssembler(state_).FailAssert("Torque assert '!isFastRegExp' failed", pos_stack);
    }
  }

  TNode<Object> phi_bb42_6;
  TNode<BoolT> phi_bb42_7;
  TNode<JSAny> tmp71;
  TNode<Smi> tmp72;
  TNode<JSAny> tmp73;
  TNode<String> tmp74;
  TNode<String> tmp75;
  TNode<BoolT> tmp76;
  if (block42.is_used()) {
    ca_.Bind(&block42, &phi_bb42_6, &phi_bb42_7);
    tmp71 = UnsafeCast_JSAny_0(state_, TNode<Context>{parameter0}, TNode<Object>{phi_bb42_6});
    tmp72 = SmiConstant_0(state_, IntegerLiteral(false, 0x0ull));
    tmp73 = CodeStubAssembler(state_).GetProperty(TNode<Context>{parameter0}, TNode<JSAny>{tmp71}, TNode<JSAny>{tmp72});
    tmp74 = CodeStubAssembler(state_).ToString_Inline(TNode<Context>{parameter0}, TNode<JSAny>{tmp73});
    tmp75 = kEmptyString_0(state_);
    tmp76 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp74}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp75});
    ca_.Branch(tmp76, &block44, std::vector<compiler::Node*>{phi_bb42_6, phi_bb42_7}, &block45, std::vector<compiler::Node*>{phi_bb42_6, phi_bb42_7});
  }

  TNode<Object> phi_bb44_6;
  TNode<BoolT> phi_bb44_7;
  TNode<JSAny> tmp77;
  TNode<Number> tmp78;
  TNode<BoolT> tmp79;
  TNode<Number> tmp80;
  if (block44.is_used()) {
    ca_.Bind(&block44, &phi_bb44_6, &phi_bb44_7);
    tmp77 = RegExpBuiltinsAssembler(state_).SlowLoadLastIndex(TNode<Context>{parameter0}, TNode<JSAny>{tmp7});
    tmp78 = CodeStubAssembler(state_).ToLength_Inline(TNode<Context>{parameter0}, TNode<JSAny>{tmp77});
    tmp79 = ca_.UncheckedCast<BoolT>(CodeStubAssembler(state_).DecodeWord32FromWord<base::BitField<bool, 3, 1, uintptr_t>>(ca_.UncheckedCast<WordT>(ca_.BitcastTaggedToWordForTagAndSmiBits(tmp4))));
    tmp80 = RegExpBuiltinsAssembler(state_).AdvanceStringIndexSlow(TNode<String>{tmp9}, TNode<Number>{tmp78}, TNode<BoolT>{tmp79});
    RegExpBuiltinsAssembler(state_).SlowStoreLastIndex(TNode<Context>{parameter0}, TNode<JSAny>{tmp7}, TNode<JSAny>{tmp80});
    ca_.Goto(&block45, phi_bb44_6, phi_bb44_7);
  }

  TNode<Object> phi_bb45_6;
  TNode<BoolT> phi_bb45_7;
  TNode<False> tmp81;
  TNode<JSObject> tmp82;
  if (block45.is_used()) {
    ca_.Bind(&block45, &phi_bb45_6, &phi_bb45_7);
    tmp81 = False_0(state_);
    tmp82 = CodeStubAssembler(state_).AllocateJSIteratorResult(TNode<Context>{parameter0}, TNode<JSAny>{tmp71}, TNode<Boolean>{tmp81});
    CodeStubAssembler(state_).Return(tmp82);
  }

  TNode<Object> phi_bb10_6;
  TNode<IntPtrT> tmp83;
  TNode<Smi> tmp84;
  TNode<BoolT> tmp85;
  TNode<Smi> tmp86;
  if (block10.is_used()) {
    ca_.Bind(&block10, &phi_bb10_6);
    tmp83 = FromConstexpr_intptr_constexpr_int31_0(state_, 20);
    tmp84 = CodeStubAssembler(state_).LoadReference<Smi>(CodeStubAssembler::Reference{tmp0, tmp83});
    tmp85 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    tmp86 = ca_.UncheckedCast<Smi>(ca_.BitcastWordToTaggedSigned(CodeStubAssembler(state_).UpdateWord32InWord<base::BitField<bool, 1, 1, uintptr_t>>(ca_.UncheckedCast<WordT>(ca_.BitcastTaggedToWordForTagAndSmiBits(tmp84)), ca_.UncheckedCast<Uint32T>(tmp85))));
    CodeStubAssembler(state_).StoreReference<Smi>(CodeStubAssembler::Reference{tmp0, tmp83}, tmp86);
    ca_.Goto(&block6);
  }

  TNode<Undefined> tmp87;
  TNode<True> tmp88;
  TNode<JSObject> tmp89;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp87 = Undefined_0(state_);
    tmp88 = True_0(state_);
    tmp89 = CodeStubAssembler(state_).AllocateJSIteratorResult(TNode<Context>{parameter0}, TNode<JSAny>{tmp87}, TNode<Boolean>{tmp88});
    CodeStubAssembler(state_).Return(tmp89);
  }
}

// https://crsrc.org/c/v8/src/builtins/regexp-match-all.tq?l=48&c=29
TNode<JSRegExp> UnsafeCast_JSRegExp_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o) {
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
    tmp0 = Is_JSRegExp_Object_0(state_, TNode<Context>{p_context}, TNode<Object>{p_o});
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

  TNode<JSRegExp> tmp1;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp1 = TORQUE_CAST(TNode<Object>{p_o});
    ca_.Goto(&block4);
  }

    ca_.Bind(&block4);
  return TNode<JSRegExp>{tmp1};
}

// https://crsrc.org/c/v8/src/builtins/regexp-match-all.tq?l=53&c=26
TNode<JSRegExp> UnsafeCast_FastJSRegExp_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o) {
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
    tmp0 = Is_FastJSRegExp_Object_0(state_, TNode<Context>{p_context}, TNode<Object>{p_o});
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

  TNode<JSRegExp> tmp1;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp1 = TORQUE_CAST(TNode<Object>{p_o});
    ca_.Goto(&block4);
  }

    ca_.Bind(&block4);
  return TNode<JSRegExp>{tmp1};
}

// https://crsrc.org/c/v8/src/builtins/regexp-match-all.tq?l=146&c=20
TNode<JSRegExpStringIterator> Cast_JSRegExpStringIterator_1(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o, compiler::CodeAssemblerLabel* label_CastError) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<HeapObject> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{p_o}, &label1);
    ca_.Goto(&block3);
    if (label1.is_used()) {
      ca_.Bind(&label1);
      ca_.Goto(&block4);
    }
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    ca_.Goto(&block1);
  }

  TNode<JSRegExpStringIterator> tmp2;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    compiler::CodeAssemblerLabel label3(&ca_);
    tmp2 = Cast_JSRegExpStringIterator_0(state_, TNode<HeapObject>{tmp0}, &label3);
    ca_.Goto(&block5);
    if (label3.is_used()) {
      ca_.Bind(&label3);
      ca_.Goto(&block6);
    }
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    ca_.Goto(&block1);
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    ca_.Goto(&block7);
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    ca_.Goto(label_CastError);
  }

    ca_.Bind(&block7);
  return TNode<JSRegExpStringIterator>{tmp2};
}

// https://crsrc.org/c/v8/src/builtins/regexp-match-all.tq?l=210&c=23
TNode<JSArray> UnsafeCast_JSRegExpResult_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o) {
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
    tmp0 = Is_JSRegExpResult_Object_0(state_, TNode<Context>{p_context}, TNode<Object>{p_o});
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

  TNode<JSArray> tmp1;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp1 = TORQUE_CAST(TNode<Object>{p_o});
    ca_.Goto(&block4);
  }

    ca_.Bind(&block4);
  return TNode<JSArray>{tmp1};
}

} // namespace internal
} // namespace v8
