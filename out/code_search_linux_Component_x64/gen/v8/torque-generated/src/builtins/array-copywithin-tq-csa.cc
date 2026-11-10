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
#include "torque-generated/src/builtins/array-copywithin-tq-csa.h"
#include "torque-generated/src/builtins/array-at-tq-csa.h"
#include "torque-generated/src/builtins/array-copywithin-tq-csa.h"
#include "torque-generated/src/builtins/array-tq-csa.h"
#include "torque-generated/src/builtins/base-tq-csa.h"
#include "torque-generated/src/builtins/cast-tq-csa.h"
#include "torque-generated/src/builtins/convert-tq-csa.h"
#include "torque-generated/src/builtins/frame-arguments-tq-csa.h"
#include "torque-generated/src/objects/js-array-tq-csa.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/builtins/array-copywithin.tq?l=6&c=1
TNode<Number> ConvertAndClampRelativeIndex_0(compiler::CodeAssemblerState* state_, TNode<Number> p_index, TNode<Number> p_length) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Number> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    compiler::CodeAssemblerLabel label2(&ca_);
    tmp0 = ConvertRelativeIndex_0(state_, TNode<Number>{p_index}, TNode<Number>{p_length}, &label1, &label2);
    ca_.Goto(&block6);
    if (label1.is_used()) {
      ca_.Bind(&label1);
      ca_.Goto(&block7);
    }
    if (label2.is_used()) {
      ca_.Bind(&label2);
      ca_.Goto(&block8);
    }
  }

  TNode<Number> tmp3;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp3 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block1, tmp3);
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    ca_.Goto(&block1, p_length);
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    ca_.Goto(&block1, tmp0);
  }

  TNode<Number> phi_bb1_2;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_2);
    ca_.Goto(&block9);
  }

    ca_.Bind(&block9);
  return TNode<Number>{phi_bb1_2};
}

// https://crsrc.org/c/v8/src/builtins/array-copywithin.tq?l=20&c=1
void TryFastArrayCopyWithin_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSAny> p_receiver, TNode<Number> p_toNumber, TNode<Number> p_fromNumber, TNode<Number> p_countNumber, compiler::CodeAssemblerLabel* label_Slow) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block30(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block33(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block34(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block38(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block39(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block40(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block37(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block36(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block35(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block41(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Number> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = NumberIsLessThanOrEqual_0(state_, TNode<Number>{p_countNumber}, TNode<Number>{tmp0});
    ca_.Branch(tmp1, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    ca_.Goto(&block2);
  }

  TNode<JSArray> tmp2;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    compiler::CodeAssemblerLabel label3(&ca_);
    tmp2 = Cast_FastJSArray_1(state_, TNode<Context>{p_context}, TNode<Object>{p_receiver}, &label3);
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

  TNode<Smi> tmp4;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    compiler::CodeAssemblerLabel label5(&ca_);
    tmp4 = Cast_Smi_0(state_, TNode<Object>{p_toNumber}, &label5);
    ca_.Goto(&block7);
    if (label5.is_used()) {
      ca_.Bind(&label5);
      ca_.Goto(&block8);
    }
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    ca_.Goto(&block1);
  }

  TNode<Smi> tmp6;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    compiler::CodeAssemblerLabel label7(&ca_);
    tmp6 = Cast_Smi_0(state_, TNode<Object>{p_fromNumber}, &label7);
    ca_.Goto(&block9);
    if (label7.is_used()) {
      ca_.Bind(&label7);
      ca_.Goto(&block10);
    }
  }

  if (block10.is_used()) {
    ca_.Bind(&block10);
    ca_.Goto(&block1);
  }

  TNode<Smi> tmp8;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    compiler::CodeAssemblerLabel label9(&ca_);
    tmp8 = Cast_Smi_0(state_, TNode<Object>{p_countNumber}, &label9);
    ca_.Goto(&block11);
    if (label9.is_used()) {
      ca_.Bind(&label9);
      ca_.Goto(&block12);
    }
  }

  if (block12.is_used()) {
    ca_.Bind(&block12);
    ca_.Goto(&block1);
  }

  TNode<Smi> tmp10;
  TNode<Smi> tmp11;
  TNode<BoolT> tmp12;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp10 = CodeStubAssembler(state_).LoadFastJSArrayLength(TNode<JSArray>{tmp2});
    tmp11 = CodeStubAssembler(state_).SmiAdd(TNode<Smi>{tmp4}, TNode<Smi>{tmp8});
    tmp12 = CodeStubAssembler(state_).SmiAbove(TNode<Smi>{tmp11}, TNode<Smi>{tmp10});
    ca_.Branch(tmp12, &block13, std::vector<compiler::Node*>{}, &block14, std::vector<compiler::Node*>{});
  }

  if (block13.is_used()) {
    ca_.Bind(&block13);
    ca_.Goto(&block1);
  }

  TNode<Smi> tmp13;
  TNode<BoolT> tmp14;
  if (block14.is_used()) {
    ca_.Bind(&block14);
    tmp13 = CodeStubAssembler(state_).SmiAdd(TNode<Smi>{tmp6}, TNode<Smi>{tmp8});
    tmp14 = CodeStubAssembler(state_).SmiAbove(TNode<Smi>{tmp13}, TNode<Smi>{tmp10});
    ca_.Branch(tmp14, &block15, std::vector<compiler::Node*>{}, &block16, std::vector<compiler::Node*>{});
  }

  if (block15.is_used()) {
    ca_.Bind(&block15);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> tmp15;
  TNode<Map> tmp16;
  TNode<Int32T> tmp17;
  TNode<Int32T> tmp18;
  TNode<BoolT> tmp19;
  if (block16.is_used()) {
    ca_.Bind(&block16);
    tmp15 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    tmp16 = CodeStubAssembler(state_).LoadReference<Map>(CodeStubAssembler::Reference{tmp2, tmp15});
    tmp17 = CodeStubAssembler(state_).LoadMapElementsKind(TNode<Map>{tmp16});
    tmp18 = FromConstexpr_ElementsKind_constexpr_PACKED_SMI_ELEMENTS_0(state_, ElementsKind::PACKED_SMI_ELEMENTS);
    tmp19 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp17}, TNode<Int32T>{tmp18});
    ca_.Branch(tmp19, &block19, std::vector<compiler::Node*>{}, &block20, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp20;
  if (block19.is_used()) {
    ca_.Bind(&block19);
    tmp20 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block21, tmp20);
  }

  TNode<Int32T> tmp21;
  TNode<BoolT> tmp22;
  if (block20.is_used()) {
    ca_.Bind(&block20);
    tmp21 = FromConstexpr_ElementsKind_constexpr_PACKED_ELEMENTS_0(state_, ElementsKind::PACKED_ELEMENTS);
    tmp22 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp17}, TNode<Int32T>{tmp21});
    ca_.Goto(&block21, tmp22);
  }

  TNode<BoolT> phi_bb21_12;
  if (block21.is_used()) {
    ca_.Bind(&block21, &phi_bb21_12);
    ca_.Branch(phi_bb21_12, &block17, std::vector<compiler::Node*>{}, &block18, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp23;
  TNode<FixedArrayBase> tmp24;
  TNode<FixedArray> tmp25;
  if (block17.is_used()) {
    ca_.Bind(&block17);
    EnsureWriteableFastElements_0(state_, TNode<Context>{p_context}, TNode<JSArray>{tmp2});
    tmp23 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp24 = CodeStubAssembler(state_).LoadReference<FixedArrayBase>(CodeStubAssembler::Reference{tmp2, tmp23});
    tmp25 = UnsafeCast_FixedArray_0(state_, TNode<Context>{p_context}, TNode<Object>{tmp24});
    DoMoveElements_FixedArray_0(state_, TNode<FixedArray>{tmp25}, TNode<Smi>{tmp4}, TNode<Smi>{tmp6}, TNode<Smi>{tmp8});
    ca_.Goto(&block22);
  }

  TNode<Int32T> tmp26;
  TNode<BoolT> tmp27;
  if (block18.is_used()) {
    ca_.Bind(&block18);
    tmp26 = FromConstexpr_ElementsKind_constexpr_PACKED_DOUBLE_ELEMENTS_0(state_, ElementsKind::PACKED_DOUBLE_ELEMENTS);
    tmp27 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp17}, TNode<Int32T>{tmp26});
    ca_.Branch(tmp27, &block23, std::vector<compiler::Node*>{}, &block24, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp28;
  TNode<FixedArrayBase> tmp29;
  TNode<FixedDoubleArray> tmp30;
  if (block23.is_used()) {
    ca_.Bind(&block23);
    tmp28 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp29 = CodeStubAssembler(state_).LoadReference<FixedArrayBase>(CodeStubAssembler::Reference{tmp2, tmp28});
    tmp30 = UnsafeCast_FixedDoubleArray_0(state_, TNode<Context>{p_context}, TNode<Object>{tmp29});
    DoMoveElements_FixedDoubleArray_0(state_, TNode<FixedDoubleArray>{tmp30}, TNode<Smi>{tmp4}, TNode<Smi>{tmp6}, TNode<Smi>{tmp8});
    ca_.Goto(&block25);
  }

  TNode<BoolT> tmp31;
  if (block24.is_used()) {
    ca_.Bind(&block24);
    tmp31 = CodeStubAssembler(state_).IsFastElementsKind(TNode<Int32T>{tmp17});
    ca_.Branch(tmp31, &block26, std::vector<compiler::Node*>{}, &block27, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp32;
  TNode<Map> tmp33;
  TNode<BoolT> tmp34;
  TNode<BoolT> tmp35;
  if (block26.is_used()) {
    ca_.Bind(&block26);
    tmp32 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    tmp33 = CodeStubAssembler(state_).LoadReference<Map>(CodeStubAssembler::Reference{tmp2, tmp32});
    tmp34 = CodeStubAssembler(state_).IsPrototypeInitialArrayPrototype(TNode<Context>{p_context}, TNode<Map>{tmp33});
    tmp35 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp34});
    ca_.Branch(tmp35, &block29, std::vector<compiler::Node*>{}, &block30, std::vector<compiler::Node*>{});
  }

  if (block29.is_used()) {
    ca_.Bind(&block29);
    ca_.Goto(&block1);
  }

  TNode<BoolT> tmp36;
  if (block30.is_used()) {
    ca_.Bind(&block30);
    tmp36 = CodeStubAssembler(state_).IsNoElementsProtectorCellInvalid();
    ca_.Branch(tmp36, &block31, std::vector<compiler::Node*>{}, &block32, std::vector<compiler::Node*>{});
  }

  if (block31.is_used()) {
    ca_.Bind(&block31);
    ca_.Goto(&block1);
  }

  TNode<Int32T> tmp37;
  TNode<BoolT> tmp38;
  if (block32.is_used()) {
    ca_.Bind(&block32);
    tmp37 = FromConstexpr_ElementsKind_constexpr_HOLEY_DOUBLE_ELEMENTS_0(state_, ElementsKind::HOLEY_DOUBLE_ELEMENTS);
    tmp38 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp17}, TNode<Int32T>{tmp37});
    ca_.Branch(tmp38, &block33, std::vector<compiler::Node*>{}, &block34, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp39;
  TNode<FixedArrayBase> tmp40;
  TNode<FixedDoubleArray> tmp41;
  if (block33.is_used()) {
    ca_.Bind(&block33);
    tmp39 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp40 = CodeStubAssembler(state_).LoadReference<FixedArrayBase>(CodeStubAssembler::Reference{tmp2, tmp39});
    tmp41 = UnsafeCast_FixedDoubleArray_0(state_, TNode<Context>{p_context}, TNode<Object>{tmp40});
    DoMoveElements_FixedDoubleArray_0(state_, TNode<FixedDoubleArray>{tmp41}, TNode<Smi>{tmp4}, TNode<Smi>{tmp6}, TNode<Smi>{tmp8});
    ca_.Goto(&block35);
  }

  TNode<Int32T> tmp42;
  TNode<BoolT> tmp43;
  if (block34.is_used()) {
    ca_.Bind(&block34);
    tmp42 = FromConstexpr_ElementsKind_constexpr_HOLEY_SMI_ELEMENTS_0(state_, ElementsKind::HOLEY_SMI_ELEMENTS);
    tmp43 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp17}, TNode<Int32T>{tmp42});
    ca_.Branch(tmp43, &block38, std::vector<compiler::Node*>{}, &block39, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp44;
  if (block38.is_used()) {
    ca_.Bind(&block38);
    tmp44 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block40, tmp44);
  }

  TNode<Int32T> tmp45;
  TNode<BoolT> tmp46;
  if (block39.is_used()) {
    ca_.Bind(&block39);
    tmp45 = FromConstexpr_ElementsKind_constexpr_HOLEY_ELEMENTS_0(state_, ElementsKind::HOLEY_ELEMENTS);
    tmp46 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp17}, TNode<Int32T>{tmp45});
    ca_.Goto(&block40, tmp46);
  }

  TNode<BoolT> phi_bb40_12;
  if (block40.is_used()) {
    ca_.Bind(&block40, &phi_bb40_12);
    ca_.Branch(phi_bb40_12, &block36, std::vector<compiler::Node*>{}, &block37, std::vector<compiler::Node*>{});
  }

  if (block37.is_used()) {
    ca_.Bind(&block37);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-copywithin.tq", 55});
      CodeStubAssembler(state_).FailAssert("Torque assert 'kind == ElementsKind::HOLEY_SMI_ELEMENTS || kind == ElementsKind::HOLEY_ELEMENTS' failed", pos_stack);
    }
  }

  TNode<IntPtrT> tmp47;
  TNode<FixedArrayBase> tmp48;
  TNode<FixedArray> tmp49;
  if (block36.is_used()) {
    ca_.Bind(&block36);
    EnsureWriteableFastElements_0(state_, TNode<Context>{p_context}, TNode<JSArray>{tmp2});
    tmp47 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp48 = CodeStubAssembler(state_).LoadReference<FixedArrayBase>(CodeStubAssembler::Reference{tmp2, tmp47});
    tmp49 = UnsafeCast_FixedArray_0(state_, TNode<Context>{p_context}, TNode<Object>{tmp48});
    DoMoveElements_FixedArray_0(state_, TNode<FixedArray>{tmp49}, TNode<Smi>{tmp4}, TNode<Smi>{tmp6}, TNode<Smi>{tmp8});
    ca_.Goto(&block35);
  }

  if (block35.is_used()) {
    ca_.Bind(&block35);
    ca_.Goto(&block25);
  }

  if (block27.is_used()) {
    ca_.Bind(&block27);
    ca_.Goto(&block1);
  }

  if (block25.is_used()) {
    ca_.Bind(&block25);
    ca_.Goto(&block22);
  }

  if (block22.is_used()) {
    ca_.Bind(&block22);
    ca_.Goto(&block2);
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    ca_.Goto(&block41);
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    ca_.Goto(label_Slow);
  }

    ca_.Bind(&block41);
}

TF_BUILTIN(ArrayPrototypeCopyWithin, CodeStubAssembler) {
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
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number, Number, Number> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number, Number, Number> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number, Number, Number> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number, Number, Number> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number, Number, Number> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number, Number, Number> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number, Number, Number> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSReceiver> tmp0;
  TNode<Number> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<JSAny> tmp3;
  TNode<Number> tmp4;
  TNode<Number> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<JSAny> tmp7;
  TNode<Number> tmp8;
  TNode<Number> tmp9;
  TNode<IntPtrT> tmp10;
  TNode<JSAny> tmp11;
  TNode<Undefined> tmp12;
  TNode<BoolT> tmp13;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).ToObject_Inline(TNode<Context>{parameter0}, TNode<JSAny>{parameter1});
    tmp1 = GetLengthProperty_0(state_, TNode<Context>{parameter0}, TNode<JSAny>{tmp0});
    tmp2 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp3 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp2});
    tmp4 = ToInteger_Inline_0(state_, TNode<Context>{parameter0}, TNode<JSAny>{tmp3});
    tmp5 = ConvertAndClampRelativeIndex_0(state_, TNode<Number>{tmp4}, TNode<Number>{tmp1});
    tmp6 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp7 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp6});
    tmp8 = ToInteger_Inline_0(state_, TNode<Context>{parameter0}, TNode<JSAny>{tmp7});
    tmp9 = ConvertAndClampRelativeIndex_0(state_, TNode<Number>{tmp8}, TNode<Number>{tmp1});
    tmp10 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    tmp11 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp10});
    tmp12 = Undefined_0(state_);
    tmp13 = CodeStubAssembler(state_).TaggedNotEqual(TNode<Object>{tmp11}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp12});
    ca_.Branch(tmp13, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{tmp1});
  }

  TNode<IntPtrT> tmp14;
  TNode<JSAny> tmp15;
  TNode<Number> tmp16;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp14 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    tmp15 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp14});
    tmp16 = ToInteger_Inline_0(state_, TNode<Context>{parameter0}, TNode<JSAny>{tmp15});
    ca_.Goto(&block2, tmp16);
  }

  TNode<Number> phi_bb2_12;
  TNode<Number> tmp17;
  TNode<Number> tmp18;
  TNode<Number> tmp19;
  TNode<Number> tmp20;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_12);
    tmp17 = ConvertAndClampRelativeIndex_0(state_, TNode<Number>{phi_bb2_12}, TNode<Number>{tmp1});
    tmp18 = CodeStubAssembler(state_).NumberSub(TNode<Number>{tmp17}, TNode<Number>{tmp9});
    tmp19 = CodeStubAssembler(state_).NumberSub(TNode<Number>{tmp1}, TNode<Number>{tmp5});
    tmp20 = Min_0(state_, TNode<Number>{tmp18}, TNode<Number>{tmp19});
    compiler::CodeAssemblerLabel label21(&ca_);
    TryFastArrayCopyWithin_0(state_, TNode<Context>{parameter0}, TNode<JSAny>{parameter1}, TNode<Number>{tmp5}, TNode<Number>{tmp9}, TNode<Number>{tmp20}, &label21);
    ca_.Goto(&block5);
    if (label21.is_used()) {
      ca_.Bind(&label21);
      ca_.Goto(&block6);
    }
  }

  TNode<Number> tmp22;
  TNode<BoolT> tmp23;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp22 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp23 = NumberIsLessThan_0(state_, TNode<Number>{tmp9}, TNode<Number>{tmp5});
    ca_.Branch(tmp23, &block9, std::vector<compiler::Node*>{}, &block10, std::vector<compiler::Node*>{});
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    arguments.PopAndReturn(tmp0);
  }

  TNode<Number> tmp24;
  TNode<BoolT> tmp25;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp24 = CodeStubAssembler(state_).NumberAdd(TNode<Number>{tmp9}, TNode<Number>{tmp20});
    tmp25 = NumberIsLessThan_0(state_, TNode<Number>{tmp5}, TNode<Number>{tmp24});
    ca_.Goto(&block11, tmp25);
  }

  TNode<BoolT> tmp26;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp26 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block11, tmp26);
  }

  TNode<BoolT> phi_bb11_17;
  if (block11.is_used()) {
    ca_.Bind(&block11, &phi_bb11_17);
    ca_.Branch(phi_bb11_17, &block7, std::vector<compiler::Node*>{}, &block8, std::vector<compiler::Node*>{tmp5, tmp9, tmp22});
  }

  TNode<Number> tmp27;
  TNode<Number> tmp28;
  TNode<Number> tmp29;
  TNode<Number> tmp30;
  TNode<Number> tmp31;
  TNode<Number> tmp32;
  TNode<Number> tmp33;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp27 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    tmp28 = CodeStubAssembler(state_).NumberAdd(TNode<Number>{tmp9}, TNode<Number>{tmp20});
    tmp29 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp30 = CodeStubAssembler(state_).NumberSub(TNode<Number>{tmp28}, TNode<Number>{tmp29});
    tmp31 = CodeStubAssembler(state_).NumberAdd(TNode<Number>{tmp5}, TNode<Number>{tmp20});
    tmp32 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp33 = CodeStubAssembler(state_).NumberSub(TNode<Number>{tmp31}, TNode<Number>{tmp32});
    ca_.Goto(&block8, tmp33, tmp30, tmp27);
  }

  TNode<Number> phi_bb8_9;
  TNode<Number> phi_bb8_11;
  TNode<Number> phi_bb8_15;
  if (block8.is_used()) {
    ca_.Bind(&block8, &phi_bb8_9, &phi_bb8_11, &phi_bb8_15);
    ca_.Goto(&block14, phi_bb8_9, phi_bb8_11, tmp20);
  }

  TNode<Number> phi_bb14_9;
  TNode<Number> phi_bb14_11;
  TNode<Number> phi_bb14_14;
  TNode<Number> tmp34;
  TNode<BoolT> tmp35;
  if (block14.is_used()) {
    ca_.Bind(&block14, &phi_bb14_9, &phi_bb14_11, &phi_bb14_14);
    tmp34 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp35 = NumberIsGreaterThan_0(state_, TNode<Number>{phi_bb14_14}, TNode<Number>{tmp34});
    ca_.Branch(tmp35, &block12, std::vector<compiler::Node*>{phi_bb14_9, phi_bb14_11, phi_bb14_14}, &block13, std::vector<compiler::Node*>{phi_bb14_9, phi_bb14_11, phi_bb14_14});
  }

  TNode<Number> phi_bb12_9;
  TNode<Number> phi_bb12_11;
  TNode<Number> phi_bb12_14;
  TNode<Boolean> tmp36;
  TNode<True> tmp37;
  TNode<BoolT> tmp38;
  if (block12.is_used()) {
    ca_.Bind(&block12, &phi_bb12_9, &phi_bb12_11, &phi_bb12_14);
    tmp36 = ca_.CallBuiltin<Boolean>(Builtin::kHasProperty, parameter0, tmp0, phi_bb12_11);
    tmp37 = True_0(state_);
    tmp38 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp36}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp37});
    ca_.Branch(tmp38, &block15, std::vector<compiler::Node*>{phi_bb12_9, phi_bb12_11, phi_bb12_14}, &block16, std::vector<compiler::Node*>{phi_bb12_9, phi_bb12_11, phi_bb12_14});
  }

  TNode<Number> phi_bb15_9;
  TNode<Number> phi_bb15_11;
  TNode<Number> phi_bb15_14;
  TNode<JSAny> tmp39;
  TNode<JSAny> tmp40;
  if (block15.is_used()) {
    ca_.Bind(&block15, &phi_bb15_9, &phi_bb15_11, &phi_bb15_14);
    tmp39 = CodeStubAssembler(state_).GetProperty(TNode<Context>{parameter0}, TNode<JSAny>{tmp0}, TNode<JSAny>{phi_bb15_11});
    tmp40 = ca_.CallBuiltin<JSAny>(Builtin::kSetProperty, parameter0, tmp0, phi_bb15_9, tmp39);
    ca_.Goto(&block17, phi_bb15_9, phi_bb15_11, phi_bb15_14);
  }

  TNode<Number> phi_bb16_9;
  TNode<Number> phi_bb16_11;
  TNode<Number> phi_bb16_14;
  TNode<Smi> tmp41;
  TNode<Boolean> tmp42;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_9, &phi_bb16_11, &phi_bb16_14);
    tmp41 = FromConstexpr_LanguageModeSmi_constexpr_LanguageMode_0(state_, CastIfEnumClass<LanguageMode>(LanguageMode::kStrict));
    tmp42 = ca_.CallBuiltin<Boolean>(Builtin::kDeleteProperty, parameter0, tmp0, phi_bb16_9, tmp41);
    ca_.Goto(&block17, phi_bb16_9, phi_bb16_11, phi_bb16_14);
  }

  TNode<Number> phi_bb17_9;
  TNode<Number> phi_bb17_11;
  TNode<Number> phi_bb17_14;
  TNode<Number> tmp43;
  TNode<Number> tmp44;
  TNode<Number> tmp45;
  TNode<Number> tmp46;
  if (block17.is_used()) {
    ca_.Bind(&block17, &phi_bb17_9, &phi_bb17_11, &phi_bb17_14);
    tmp43 = CodeStubAssembler(state_).NumberAdd(TNode<Number>{phi_bb17_11}, TNode<Number>{phi_bb8_15});
    tmp44 = CodeStubAssembler(state_).NumberAdd(TNode<Number>{phi_bb17_9}, TNode<Number>{phi_bb8_15});
    tmp45 = FromConstexpr_Number_constexpr_int31_0(state_, 1);
    tmp46 = CodeStubAssembler(state_).NumberSub(TNode<Number>{phi_bb17_14}, TNode<Number>{tmp45});
    ca_.Goto(&block14, tmp44, tmp43, tmp46);
  }

  TNode<Number> phi_bb13_9;
  TNode<Number> phi_bb13_11;
  TNode<Number> phi_bb13_14;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_9, &phi_bb13_11, &phi_bb13_14);
    arguments.PopAndReturn(tmp0);
  }
}

// https://crsrc.org/c/v8/src/builtins/array-copywithin.tq?l=26&c=30
TNode<JSArray> Cast_FastJSArray_1(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o, compiler::CodeAssemblerLabel* label_CastError) {
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

  TNode<JSArray> tmp2;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    compiler::CodeAssemblerLabel label3(&ca_);
    tmp2 = Cast_FastJSArray_0(state_, TNode<Context>{p_context}, TNode<HeapObject>{tmp0}, &label3);
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
  return TNode<JSArray>{tmp2};
}

// https://crsrc.org/c/v8/src/builtins/array-copywithin.tq?l=41&c=20
TNode<FixedArray> UnsafeCast_FixedArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o) {
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
    tmp0 = Is_FixedArray_Object_0(state_, TNode<Context>{p_context}, TNode<Object>{p_o});
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

  TNode<FixedArray> tmp1;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp1 = TORQUE_CAST(TNode<Object>{p_o});
    ca_.Goto(&block4);
  }

    ca_.Bind(&block4);
  return TNode<FixedArray>{tmp1};
}

// https://crsrc.org/c/v8/src/builtins/array-copywithin.tq?l=41&c=5
void DoMoveElements_FixedArray_0(compiler::CodeAssemblerState* state_, TNode<FixedArray> p_elements, TNode<Smi> p_dstIndex, TNode<Smi> p_srcIndex, TNode<Smi> p_count) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Convert_intptr_Smi_0(state_, TNode<Smi>{p_dstIndex});
    tmp1 = Convert_intptr_Smi_0(state_, TNode<Smi>{p_srcIndex});
    tmp2 = Convert_intptr_Smi_0(state_, TNode<Smi>{p_count});
    TorqueMoveElements_0(state_, TNode<FixedArray>{p_elements}, TNode<IntPtrT>{tmp0}, TNode<IntPtrT>{tmp1}, TNode<IntPtrT>{tmp2});
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
}

// https://crsrc.org/c/v8/src/builtins/array-copywithin.tq?l=44&c=9
TNode<FixedDoubleArray> UnsafeCast_FixedDoubleArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o) {
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
    tmp0 = Is_FixedDoubleArray_Object_0(state_, TNode<Context>{p_context}, TNode<Object>{p_o});
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

  TNode<FixedDoubleArray> tmp1;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp1 = TORQUE_CAST(TNode<Object>{p_o});
    ca_.Goto(&block4);
  }

    ca_.Bind(&block4);
  return TNode<FixedDoubleArray>{tmp1};
}

// https://crsrc.org/c/v8/src/builtins/array-copywithin.tq?l=43&c=5
void DoMoveElements_FixedDoubleArray_0(compiler::CodeAssemblerState* state_, TNode<FixedDoubleArray> p_elements, TNode<Smi> p_dstIndex, TNode<Smi> p_srcIndex, TNode<Smi> p_count) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Convert_intptr_Smi_0(state_, TNode<Smi>{p_dstIndex});
    tmp1 = Convert_intptr_Smi_0(state_, TNode<Smi>{p_srcIndex});
    tmp2 = Convert_intptr_Smi_0(state_, TNode<Smi>{p_count});
    TorqueMoveElements_1(state_, TNode<FixedDoubleArray>{p_elements}, TNode<IntPtrT>{tmp0}, TNode<IntPtrT>{tmp1}, TNode<IntPtrT>{tmp2});
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
}

} // namespace internal
} // namespace v8
