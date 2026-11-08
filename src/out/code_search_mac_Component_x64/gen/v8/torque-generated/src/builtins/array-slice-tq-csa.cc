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
#include "torque-generated/src/builtins/array-slice-tq-csa.h"
#include "torque-generated/src/builtins/array-concat-tq-csa.h"
#include "torque-generated/src/builtins/array-copywithin-tq-csa.h"
#include "torque-generated/src/builtins/array-flat-tq-csa.h"
#include "torque-generated/src/builtins/array-lastindexof-tq-csa.h"
#include "torque-generated/src/builtins/array-slice-tq-csa.h"
#include "torque-generated/src/builtins/base-tq-csa.h"
#include "torque-generated/src/builtins/cast-tq-csa.h"
#include "torque-generated/src/builtins/convert-tq-csa.h"
#include "torque-generated/src/builtins/frame-arguments-tq-csa.h"
#include "torque-generated/src/builtins/torque-internal-tq-csa.h"
#include "torque-generated/src/objects/arguments-tq-csa.h"
#include "torque-generated/src/objects/contexts-tq-csa.h"
#include "torque-generated/src/objects/fixed-array-base-tq-csa.h"
#include "torque-generated/src/objects/fixed-array-tq-csa.h"
#include "torque-generated/src/objects/js-array-tq-csa.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/builtins/array-slice.tq?l=10&c=1
TNode<JSArray> HandleSimpleArgumentsSlice_0(compiler::CodeAssemblerState* state_, TNode<NativeContext> p_context, TNode<Union<JSArgumentsObject>> p_args, TNode<Smi> p_start, TNode<Smi> p_count, compiler::CodeAssemblerLabel* label_Bailout) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<FixedArrayBase> tmp4;
  TNode<FixedArray> tmp5;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiUntag(TNode<Smi>{p_start});
    tmp1 = CodeStubAssembler(state_).SmiUntag(TNode<Smi>{p_count});
    tmp2 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp0}, TNode<IntPtrT>{tmp1});
    tmp3 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp4 = CodeStubAssembler(state_).LoadReference<FixedArrayBase>(CodeStubAssembler::Reference{p_args, tmp3});
    compiler::CodeAssemblerLabel label6(&ca_);
    tmp5 = Cast_FixedArray_0(state_, TNode<HeapObject>{tmp4}, &label6);
    ca_.Goto(&block3);
    if (label6.is_used()) {
      ca_.Bind(&label6);
      ca_.Goto(&block4);
    }
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> tmp7;
  TNode<BoolT> tmp8;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp7 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{tmp5});
    tmp8 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{tmp2}, TNode<IntPtrT>{tmp7});
    ca_.Branch(tmp8, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    ca_.Goto(&block1);
  }

  TNode<Map> tmp9;
  TNode<JSArray> tmp10;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp9 = CodeStubAssembler(state_).LoadJSArrayElementsMap(CastIfEnumClass<ElementsKind>(ElementsKind::HOLEY_ELEMENTS), TNode<NativeContext>{p_context});
    compiler::CodeAssemblerLabel label11(&ca_);
    tmp10 = CodeStubAssembler(state_).AllocateJSArrayFolded(CastIfEnumClass<ElementsKind>(ElementsKind::HOLEY_ELEMENTS), TNode<Map>{tmp9}, TNode<Smi>{p_count}, TNode<Smi>{p_count}, &label11);
    ca_.Goto(&block7);
    if (label11.is_used()) {
      ca_.Bind(&label11);
      ca_.Goto(&block8);
    }
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> tmp12;
  TNode<FixedArrayBase> tmp13;
  TNode<FixedArray> tmp14;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp12 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp13 = CodeStubAssembler(state_).LoadReference<FixedArrayBase>(CodeStubAssembler::Reference{tmp10, tmp12});
    compiler::CodeAssemblerLabel label15(&ca_);
    tmp14 = Cast_FixedArray_0(state_, TNode<HeapObject>{tmp13}, &label15);
    ca_.Goto(&block9);
    if (label15.is_used()) {
      ca_.Bind(&label15);
      ca_.Goto(&block10);
    }
  }

  if (block10.is_used()) {
    ca_.Bind(&block10);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> tmp16;
  TNode<IntPtrT> tmp17;
  TNode<IntPtrT> tmp18;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp16 = Convert_intptr_Smi_0(state_, TNode<Smi>{p_start});
    tmp17 = Convert_intptr_Smi_0(state_, TNode<Smi>{p_count});
    tmp18 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    CodeStubAssembler(state_).CopyElements(CastIfEnumClass<ElementsKind>(ElementsKind::PACKED_ELEMENTS), TNode<FixedArrayBase>{tmp14}, TNode<IntPtrT>{tmp18}, TNode<FixedArrayBase>{tmp5}, TNode<IntPtrT>{tmp16}, TNode<IntPtrT>{tmp17});
    ca_.Goto(&block11);
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    ca_.Goto(label_Bailout);
  }

    ca_.Bind(&block11);
  return TNode<JSArray>{tmp10};
}

// https://crsrc.org/c/v8/src/builtins/array-slice.tq?l=32&c=1
TNode<JSArray> HandleFastAliasedSloppyArgumentsSlice_0(compiler::CodeAssemblerState* state_, TNode<NativeContext> p_context, TNode<Union<JSArgumentsObject>> p_args, TNode<Smi> p_start, TNode<Smi> p_count, compiler::CodeAssemblerLabel* label_Bailout) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, IntPtrT> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, IntPtrT> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, IntPtrT> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, IntPtrT> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, IntPtrT> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, IntPtrT> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block39(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block40(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, IntPtrT, Object> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, IntPtrT> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block43(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<FixedArrayBase> tmp1;
  TNode<SloppyArgumentsElements> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp1 = CodeStubAssembler(state_).LoadReference<FixedArrayBase>(CodeStubAssembler::Reference{p_args, tmp0});
    compiler::CodeAssemblerLabel label3(&ca_);
    tmp2 = Cast_SloppyArgumentsElements_0(state_, TNode<HeapObject>{tmp1}, &label3);
    ca_.Goto(&block3);
    if (label3.is_used()) {
      ca_.Bind(&label3);
      ca_.Goto(&block4);
    }
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<IntPtrT> tmp7;
  TNode<IntPtrT> tmp8;
  TNode<FixedArray> tmp9;
  TNode<FixedArray> tmp10;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp4 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{tmp2});
    tmp5 = CodeStubAssembler(state_).SmiUntag(TNode<Smi>{p_start});
    tmp6 = CodeStubAssembler(state_).SmiUntag(TNode<Smi>{p_count});
    tmp7 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp5}, TNode<IntPtrT>{tmp6});
    tmp8 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp9 = CodeStubAssembler(state_).LoadReference<FixedArray>(CodeStubAssembler::Reference{tmp2, tmp8});
    compiler::CodeAssemblerLabel label11(&ca_);
    tmp10 = Cast_FixedArray_0(state_, TNode<HeapObject>{tmp9}, &label11);
    ca_.Goto(&block5);
    if (label11.is_used()) {
      ca_.Bind(&label11);
      ca_.Goto(&block6);
    }
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> tmp12;
  TNode<BoolT> tmp13;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp12 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{tmp10});
    tmp13 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{tmp7}, TNode<IntPtrT>{tmp12});
    ca_.Branch(tmp13, &block7, std::vector<compiler::Node*>{}, &block8, std::vector<compiler::Node*>{});
  }

  if (block7.is_used()) {
    ca_.Bind(&block7);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> tmp14;
  TNode<Context> tmp15;
  TNode<Map> tmp16;
  TNode<JSArray> tmp17;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp14 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp15 = CodeStubAssembler(state_).LoadReference<Context>(CodeStubAssembler::Reference{tmp2, tmp14});
    tmp16 = CodeStubAssembler(state_).LoadJSArrayElementsMap(CastIfEnumClass<ElementsKind>(ElementsKind::HOLEY_ELEMENTS), TNode<NativeContext>{p_context});
    compiler::CodeAssemblerLabel label18(&ca_);
    tmp17 = CodeStubAssembler(state_).AllocateJSArrayFolded(CastIfEnumClass<ElementsKind>(ElementsKind::HOLEY_ELEMENTS), TNode<Map>{tmp16}, TNode<Smi>{p_count}, TNode<Smi>{p_count}, &label18);
    ca_.Goto(&block9);
    if (label18.is_used()) {
      ca_.Bind(&label18);
      ca_.Goto(&block10);
    }
  }

  if (block10.is_used()) {
    ca_.Bind(&block10);
    ca_.Goto(&block1);
  }

  TNode<Smi> tmp19;
  TNode<IntPtrT> tmp20;
  TNode<FixedArrayBase> tmp21;
  TNode<FixedArray> tmp22;
  TNode<IntPtrT> tmp23;
  TNode<IntPtrT> tmp24;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp19 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp20 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp21 = CodeStubAssembler(state_).LoadReference<FixedArrayBase>(CodeStubAssembler::Reference{tmp17, tmp20});
    tmp22 = UnsafeCast_FixedArray_0(state_, TNode<Context>{p_context}, TNode<Object>{tmp21});
    tmp23 = CodeStubAssembler(state_).IntPtrMin(TNode<IntPtrT>{tmp4}, TNode<IntPtrT>{tmp7});
    tmp24 = Convert_intptr_Smi_0(state_, TNode<Smi>{p_start});
    ca_.Goto(&block13, tmp19, tmp24);
  }

  TNode<Smi> phi_bb13_12;
  TNode<IntPtrT> phi_bb13_15;
  TNode<BoolT> tmp25;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_12, &phi_bb13_15);
    tmp25 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb13_15}, TNode<IntPtrT>{tmp23});
    ca_.Branch(tmp25, &block11, std::vector<compiler::Node*>{phi_bb13_12, phi_bb13_15}, &block12, std::vector<compiler::Node*>{phi_bb13_12, phi_bb13_15});
  }

  TNode<Smi> phi_bb11_12;
  TNode<IntPtrT> phi_bb11_15;
  TNode<Union<HeapObject, TaggedIndex>> tmp26;
  TNode<IntPtrT> tmp27;
  TNode<IntPtrT> tmp28;
  TNode<UintPtrT> tmp29;
  TNode<UintPtrT> tmp30;
  TNode<BoolT> tmp31;
  if (block11.is_used()) {
    ca_.Bind(&block11, &phi_bb11_12, &phi_bb11_15);
    std::tie(tmp26, tmp27, tmp28) = FieldSliceSloppyArgumentsElementsObjects_0(state_, TNode<SloppyArgumentsElements>{tmp2}).Flatten();
    tmp29 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb11_15});
    tmp30 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp28});
    tmp31 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp29}, TNode<UintPtrT>{tmp30});
    ca_.Branch(tmp31, &block19, std::vector<compiler::Node*>{phi_bb11_12, phi_bb11_15, phi_bb11_15, phi_bb11_15, phi_bb11_15, phi_bb11_15}, &block20, std::vector<compiler::Node*>{phi_bb11_12, phi_bb11_15, phi_bb11_15, phi_bb11_15, phi_bb11_15, phi_bb11_15});
  }

  TNode<Smi> phi_bb19_12;
  TNode<IntPtrT> phi_bb19_15;
  TNode<IntPtrT> phi_bb19_20;
  TNode<IntPtrT> phi_bb19_21;
  TNode<IntPtrT> phi_bb19_25;
  TNode<IntPtrT> phi_bb19_26;
  TNode<IntPtrT> tmp32;
  TNode<IntPtrT> tmp33;
  TNode<Union<HeapObject, TaggedIndex>> tmp34;
  TNode<IntPtrT> tmp35;
  TNode<Union<Smi, TheHole>> tmp36;
  TNode<TheHole> tmp37;
  TNode<BoolT> tmp38;
  if (block19.is_used()) {
    ca_.Bind(&block19, &phi_bb19_12, &phi_bb19_15, &phi_bb19_20, &phi_bb19_21, &phi_bb19_25, &phi_bb19_26);
    tmp32 = TimesSizeOf_Smi_OR_TheHole_0(state_, TNode<IntPtrT>{phi_bb19_26});
    tmp33 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp27}, TNode<IntPtrT>{tmp32});
    std::tie(tmp34, tmp35) = NewReference_Smi_OR_TheHole_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp26}, TNode<IntPtrT>{tmp33}).Flatten();
    tmp36 = CodeStubAssembler(state_).LoadReference<Union<Smi, TheHole>>(CodeStubAssembler::Reference{tmp34, tmp35});
    tmp37 = TheHole_0(state_);
    tmp38 = CodeStubAssembler(state_).TaggedNotEqual(TNode<Object>{tmp36}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp37});
    ca_.Branch(tmp38, &block23, std::vector<compiler::Node*>{phi_bb19_12, phi_bb19_15}, &block24, std::vector<compiler::Node*>{phi_bb19_12, phi_bb19_15});
  }

  TNode<Smi> phi_bb20_12;
  TNode<IntPtrT> phi_bb20_15;
  TNode<IntPtrT> phi_bb20_20;
  TNode<IntPtrT> phi_bb20_21;
  TNode<IntPtrT> phi_bb20_25;
  TNode<IntPtrT> phi_bb20_26;
  if (block20.is_used()) {
    ca_.Bind(&block20, &phi_bb20_12, &phi_bb20_15, &phi_bb20_20, &phi_bb20_21, &phi_bb20_25, &phi_bb20_26);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Smi> phi_bb23_12;
  TNode<IntPtrT> phi_bb23_15;
  TNode<Union<HeapObject, TaggedIndex>> tmp39;
  TNode<IntPtrT> tmp40;
  TNode<IntPtrT> tmp41;
  TNode<Smi> tmp42;
  TNode<IntPtrT> tmp43;
  TNode<UintPtrT> tmp44;
  TNode<UintPtrT> tmp45;
  TNode<BoolT> tmp46;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_12, &phi_bb23_15);
    std::tie(tmp39, tmp40, tmp41) = FieldSliceContextElements_0(state_, TNode<Context>{tmp15}).Flatten();
    tmp42 = UnsafeCast_Smi_0(state_, TNode<Context>{p_context}, TNode<Object>{tmp36});
    tmp43 = Convert_intptr_Smi_0(state_, TNode<Smi>{tmp42});
    tmp44 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp43});
    tmp45 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp41});
    tmp46 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp44}, TNode<UintPtrT>{tmp45});
    ca_.Branch(tmp46, &block31, std::vector<compiler::Node*>{phi_bb23_12, phi_bb23_15}, &block32, std::vector<compiler::Node*>{phi_bb23_12, phi_bb23_15});
  }

  TNode<Smi> phi_bb31_12;
  TNode<IntPtrT> phi_bb31_15;
  TNode<IntPtrT> tmp47;
  TNode<IntPtrT> tmp48;
  TNode<Union<HeapObject, TaggedIndex>> tmp49;
  TNode<IntPtrT> tmp50;
  TNode<Object> tmp51;
  if (block31.is_used()) {
    ca_.Bind(&block31, &phi_bb31_12, &phi_bb31_15);
    tmp47 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp43});
    tmp48 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp40}, TNode<IntPtrT>{tmp47});
    std::tie(tmp49, tmp50) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp39}, TNode<IntPtrT>{tmp48}).Flatten();
    tmp51 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp49, tmp50});
    ca_.Goto(&block25, phi_bb31_12, phi_bb31_15, tmp51);
  }

  TNode<Smi> phi_bb32_12;
  TNode<IntPtrT> phi_bb32_15;
  if (block32.is_used()) {
    ca_.Bind(&block32, &phi_bb32_12, &phi_bb32_15);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:131:41");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Smi> phi_bb24_12;
  TNode<IntPtrT> phi_bb24_15;
  TNode<Union<HeapObject, TaggedIndex>> tmp52;
  TNode<IntPtrT> tmp53;
  TNode<IntPtrT> tmp54;
  TNode<UintPtrT> tmp55;
  TNode<UintPtrT> tmp56;
  TNode<BoolT> tmp57;
  if (block24.is_used()) {
    ca_.Bind(&block24, &phi_bb24_12, &phi_bb24_15);
    std::tie(tmp52, tmp53, tmp54) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp10}).Flatten();
    tmp55 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb24_15});
    tmp56 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp54});
    tmp57 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp55}, TNode<UintPtrT>{tmp56});
    ca_.Branch(tmp57, &block39, std::vector<compiler::Node*>{phi_bb24_12, phi_bb24_15, phi_bb24_15, phi_bb24_15, phi_bb24_15, phi_bb24_15}, &block40, std::vector<compiler::Node*>{phi_bb24_12, phi_bb24_15, phi_bb24_15, phi_bb24_15, phi_bb24_15, phi_bb24_15});
  }

  TNode<Smi> phi_bb39_12;
  TNode<IntPtrT> phi_bb39_15;
  TNode<IntPtrT> phi_bb39_21;
  TNode<IntPtrT> phi_bb39_22;
  TNode<IntPtrT> phi_bb39_26;
  TNode<IntPtrT> phi_bb39_27;
  TNode<IntPtrT> tmp58;
  TNode<IntPtrT> tmp59;
  TNode<Union<HeapObject, TaggedIndex>> tmp60;
  TNode<IntPtrT> tmp61;
  TNode<Object> tmp62;
  if (block39.is_used()) {
    ca_.Bind(&block39, &phi_bb39_12, &phi_bb39_15, &phi_bb39_21, &phi_bb39_22, &phi_bb39_26, &phi_bb39_27);
    tmp58 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb39_27});
    tmp59 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp53}, TNode<IntPtrT>{tmp58});
    std::tie(tmp60, tmp61) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp52}, TNode<IntPtrT>{tmp59}).Flatten();
    tmp62 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp60, tmp61});
    ca_.Goto(&block25, phi_bb39_12, phi_bb39_15, tmp62);
  }

  TNode<Smi> phi_bb40_12;
  TNode<IntPtrT> phi_bb40_15;
  TNode<IntPtrT> phi_bb40_21;
  TNode<IntPtrT> phi_bb40_22;
  TNode<IntPtrT> phi_bb40_26;
  TNode<IntPtrT> phi_bb40_27;
  if (block40.is_used()) {
    ca_.Bind(&block40, &phi_bb40_12, &phi_bb40_15, &phi_bb40_21, &phi_bb40_22, &phi_bb40_26, &phi_bb40_27);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Smi> phi_bb25_12;
  TNode<IntPtrT> phi_bb25_15;
  TNode<Object> phi_bb25_17;
  TNode<Union<BigInt, Boolean, HeapNumber, JSReceiver, Null, Smi, String, Symbol, TheHole, Undefined>> tmp63;
  TNode<Smi> tmp64;
  TNode<Smi> tmp65;
  TNode<IntPtrT> tmp66;
  TNode<IntPtrT> tmp67;
  if (block25.is_used()) {
    ca_.Bind(&block25, &phi_bb25_12, &phi_bb25_15, &phi_bb25_17);
    tmp63 = UnsafeCast_Smi_OR_HeapNumber_OR_BigInt_OR_String_OR_Symbol_OR_Boolean_OR_Null_OR_Undefined_OR_JSReceiver_OR_TheHole_0(state_, TNode<Context>{p_context}, TNode<Object>{phi_bb25_17});
    tmp64 = FromConstexpr_Smi_constexpr_int31_0(state_, 1);
    tmp65 = CodeStubAssembler(state_).SmiAdd(TNode<Smi>{phi_bb25_12}, TNode<Smi>{tmp64});
    CodeStubAssembler(state_).StoreFixedArrayElement(TNode<FixedArray>{tmp22}, TNode<Smi>{phi_bb25_12}, TNode<Object>{tmp63}, UNSAFE_SKIP_WRITE_BARRIER);
    tmp66 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp67 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb25_15}, TNode<IntPtrT>{tmp66});
    ca_.Goto(&block13, tmp65, tmp67);
  }

  TNode<Smi> phi_bb12_12;
  TNode<IntPtrT> phi_bb12_15;
  TNode<IntPtrT> tmp68;
  TNode<IntPtrT> tmp69;
  TNode<IntPtrT> tmp70;
  TNode<IntPtrT> tmp71;
  TNode<IntPtrT> tmp72;
  if (block12.is_used()) {
    ca_.Bind(&block12, &phi_bb12_12, &phi_bb12_15);
    tmp68 = Convert_intptr_Smi_0(state_, TNode<Smi>{p_start});
    tmp69 = CodeStubAssembler(state_).IntPtrMax(TNode<IntPtrT>{tmp4}, TNode<IntPtrT>{tmp68});
    tmp70 = CodeStubAssembler(state_).IntPtrMin(TNode<IntPtrT>{tmp69}, TNode<IntPtrT>{tmp7});
    tmp71 = CodeStubAssembler(state_).IntPtrSub(TNode<IntPtrT>{tmp7}, TNode<IntPtrT>{tmp70});
    tmp72 = Convert_intptr_Smi_0(state_, TNode<Smi>{phi_bb12_12});
    CodeStubAssembler(state_).CopyElements(CastIfEnumClass<ElementsKind>(ElementsKind::PACKED_ELEMENTS), TNode<FixedArrayBase>{tmp22}, TNode<IntPtrT>{tmp72}, TNode<FixedArrayBase>{tmp10}, TNode<IntPtrT>{tmp70}, TNode<IntPtrT>{tmp71});
    ca_.Goto(&block43);
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    ca_.Goto(label_Bailout);
  }

    ca_.Bind(&block43);
  return TNode<JSArray>{tmp17};
}

// https://crsrc.org/c/v8/src/builtins/array-slice.tq?l=89&c=1
TNode<JSArray> HandleFastSlice_0(compiler::CodeAssemblerState* state_, TNode<NativeContext> p_context, TNode<JSAny> p_o, TNode<Number> p_startNumber, TNode<Number> p_countNumber, compiler::CodeAssemblerLabel* label_Bailout) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block30(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<JSArgumentsObject>> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<JSArgumentsObject>, Union<JSArgumentsObject>> block33(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<JSArgumentsObject>, Union<JSArgumentsObject>> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSArray> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSArray> block34(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_Smi_0(state_, TNode<Object>{p_startNumber}, &label1);
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

  TNode<Smi> tmp2;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    compiler::CodeAssemblerLabel label3(&ca_);
    tmp2 = Cast_Smi_0(state_, TNode<Object>{p_countNumber}, &label3);
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
  TNode<BoolT> tmp5;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp4 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp5 = CodeStubAssembler(state_).SmiGreaterThanOrEqual(TNode<Smi>{tmp0}, TNode<Smi>{tmp4});
    ca_.Branch(tmp5, &block7, std::vector<compiler::Node*>{}, &block8, std::vector<compiler::Node*>{});
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-slice.tq", 95});
      CodeStubAssembler(state_).FailAssert("Torque assert 'start >= 0' failed", pos_stack);
    }
  }

  TNode<JSArray> tmp6;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    compiler::CodeAssemblerLabel label7(&ca_);
    tmp6 = Cast_FastJSArrayForCopy_1(state_, TNode<Context>{p_context}, TNode<Object>{p_o}, &label7);
    ca_.Goto(&block13);
    if (label7.is_used()) {
      ca_.Bind(&label7);
      ca_.Goto(&block14);
    }
  }

  TNode<JSArgumentsObject> tmp8;
  if (block14.is_used()) {
    ca_.Bind(&block14);
    compiler::CodeAssemblerLabel label9(&ca_);
    tmp8 = Cast_JSStrictArgumentsObject_1(state_, TNode<Context>{p_context}, TNode<Object>{ca_.UncheckedCast<JSAny>(p_o)}, &label9);
    ca_.Goto(&block19);
    if (label9.is_used()) {
      ca_.Bind(&label9);
      ca_.Goto(&block20);
    }
  }

  TNode<Smi> tmp10;
  TNode<Smi> tmp11;
  TNode<BoolT> tmp12;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    tmp10 = CodeStubAssembler(state_).SmiAdd(TNode<Smi>{tmp0}, TNode<Smi>{tmp2});
    tmp11 = CodeStubAssembler(state_).LoadFastJSArrayLength(TNode<JSArray>{tmp6});
    tmp12 = CodeStubAssembler(state_).SmiAbove(TNode<Smi>{tmp10}, TNode<Smi>{tmp11});
    ca_.Branch(tmp12, &block15, std::vector<compiler::Node*>{}, &block16, std::vector<compiler::Node*>{});
  }

  if (block15.is_used()) {
    ca_.Bind(&block15);
    ca_.Goto(&block1);
  }

  TNode<JSArray> tmp13;
  if (block16.is_used()) {
    ca_.Bind(&block16);
    tmp13 = ca_.CallBuiltin<JSArray>(Builtin::kExtractFastJSArray, p_context, tmp6, tmp0, tmp2);
    ca_.Goto(&block2, tmp13);
  }

  TNode<JSArgumentsObject> tmp14;
  if (block20.is_used()) {
    ca_.Bind(&block20);
    compiler::CodeAssemblerLabel label15(&ca_);
    tmp14 = Cast_JSSloppyArgumentsObject_1(state_, TNode<Context>{p_context}, TNode<Object>{ca_.UncheckedCast<JSAny>(p_o)}, &label15);
    ca_.Goto(&block23);
    if (label15.is_used()) {
      ca_.Bind(&label15);
      ca_.Goto(&block24);
    }
  }

  if (block19.is_used()) {
    ca_.Bind(&block19);
    ca_.Goto(&block10, tmp8);
  }

  if (block24.is_used()) {
    ca_.Bind(&block24);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> tmp16;
  TNode<Map> tmp17;
  TNode<BoolT> tmp18;
  if (block23.is_used()) {
    ca_.Bind(&block23);
    tmp16 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    tmp17 = CodeStubAssembler(state_).LoadReference<Map>(CodeStubAssembler::Reference{tmp14, tmp16});
    tmp18 = CodeStubAssembler(state_).IsFastAliasedArgumentsMap(TNode<Context>{p_context}, TNode<Map>{tmp17});
    ca_.Branch(tmp18, &block25, std::vector<compiler::Node*>{}, &block26, std::vector<compiler::Node*>{});
  }

  TNode<JSArray> tmp19;
  if (block25.is_used()) {
    ca_.Bind(&block25);
    compiler::CodeAssemblerLabel label20(&ca_);
    tmp19 = HandleFastAliasedSloppyArgumentsSlice_0(state_, TNode<NativeContext>{p_context}, TNode<Union<JSArgumentsObject>>{tmp14}, TNode<Smi>{tmp0}, TNode<Smi>{tmp2}, &label20);
    ca_.Goto(&block28);
    if (label20.is_used()) {
      ca_.Bind(&label20);
      ca_.Goto(&block29);
    }
  }

  if (block29.is_used()) {
    ca_.Bind(&block29);
    ca_.Goto(&block1);
  }

  if (block28.is_used()) {
    ca_.Bind(&block28);
    ca_.Goto(&block2, tmp19);
  }

  TNode<BoolT> tmp21;
  if (block26.is_used()) {
    ca_.Bind(&block26);
    tmp21 = CodeStubAssembler(state_).IsSloppyArgumentsMap(TNode<Context>{p_context}, TNode<Map>{tmp17});
    ca_.Branch(tmp21, &block30, std::vector<compiler::Node*>{}, &block31, std::vector<compiler::Node*>{});
  }

  if (block30.is_used()) {
    ca_.Bind(&block30);
    ca_.Goto(&block10, tmp14);
  }

  if (block31.is_used()) {
    ca_.Bind(&block31);
    ca_.Goto(&block1);
  }

  TNode<Union<JSArgumentsObject>> phi_bb10_6;
  TNode<JSArray> tmp22;
  if (block10.is_used()) {
    ca_.Bind(&block10, &phi_bb10_6);
    compiler::CodeAssemblerLabel label23(&ca_);
    tmp22 = HandleSimpleArgumentsSlice_0(state_, TNode<NativeContext>{p_context}, TNode<Union<JSArgumentsObject>>{phi_bb10_6}, TNode<Smi>{tmp0}, TNode<Smi>{tmp2}, &label23);
    ca_.Goto(&block32, phi_bb10_6, phi_bb10_6);
    if (label23.is_used()) {
      ca_.Bind(&label23);
      ca_.Goto(&block33, phi_bb10_6, phi_bb10_6);
    }
  }

  TNode<Union<JSArgumentsObject>> phi_bb33_6;
  TNode<Union<JSArgumentsObject>> phi_bb33_8;
  if (block33.is_used()) {
    ca_.Bind(&block33, &phi_bb33_6, &phi_bb33_8);
    ca_.Goto(&block1);
  }

  TNode<Union<JSArgumentsObject>> phi_bb32_6;
  TNode<Union<JSArgumentsObject>> phi_bb32_8;
  if (block32.is_used()) {
    ca_.Bind(&block32, &phi_bb32_6, &phi_bb32_8);
    ca_.Goto(&block2, tmp22);
  }

  TNode<JSArray> phi_bb2_4;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_4);
    ca_.Goto(&block34, phi_bb2_4);
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    ca_.Goto(label_Bailout);
  }

  TNode<JSArray> phi_bb34_4;
    ca_.Bind(&block34, &phi_bb34_4);
  return TNode<JSArray>{phi_bb34_4};
}

TF_BUILTIN(ArrayPrototypeSlice, CodeStubAssembler) {
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
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block26(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block28(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block30(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block32(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block34(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block33(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block36(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block35(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block40(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block39(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number, Number> block43(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number, Number> block41(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number, Number, Number> block44(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number, Number, Number> block45(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number, Number> block42(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSReceiver> tmp0;
  TNode<Number> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<JSAny> tmp3;
  TNode<Number> tmp4;
  TNode<Number> tmp5;
  TNode<BoolT> tmp6;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).ToObject_Inline(TNode<Context>{parameter0}, TNode<JSAny>{parameter1});
    tmp1 = GetLengthProperty_0(state_, TNode<Context>{parameter0}, TNode<JSAny>{tmp0});
    tmp2 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp3 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp2});
    tmp4 = ToInteger_Inline_0(state_, TNode<Context>{parameter0}, TNode<JSAny>{tmp3});
    tmp5 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp6 = NumberIsLessThan_0(state_, TNode<Number>{tmp4}, TNode<Number>{tmp5});
    ca_.Branch(tmp6, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<Number> tmp7;
  TNode<Number> tmp8;
  TNode<Number> tmp9;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp7 = CodeStubAssembler(state_).NumberAdd(TNode<Number>{tmp1}, TNode<Number>{tmp4});
    tmp8 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp9 = Max_0(state_, TNode<Number>{tmp7}, TNode<Number>{tmp8});
    ca_.Goto(&block3, tmp9);
  }

  TNode<Number> tmp10;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp10 = Min_0(state_, TNode<Number>{tmp4}, TNode<Number>{tmp1});
    ca_.Goto(&block3, tmp10);
  }

  TNode<Number> phi_bb3_10;
  TNode<IntPtrT> tmp11;
  TNode<JSAny> tmp12;
  TNode<Undefined> tmp13;
  TNode<BoolT> tmp14;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_10);
    tmp11 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp12 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp11});
    tmp13 = Undefined_0(state_);
    tmp14 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp12}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp13});
    ca_.Branch(tmp14, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    ca_.Goto(&block7, tmp1);
  }

  TNode<Number> tmp15;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp15 = ToInteger_Inline_0(state_, TNode<Context>{parameter0}, TNode<JSAny>{tmp12});
    ca_.Goto(&block7, tmp15);
  }

  TNode<Number> phi_bb7_12;
  TNode<Undefined> tmp16;
  TNode<BoolT> tmp17;
  if (block7.is_used()) {
    ca_.Bind(&block7, &phi_bb7_12);
    tmp16 = Undefined_0(state_);
    tmp17 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp3}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp16});
    ca_.Branch(tmp17, &block11, std::vector<compiler::Node*>{}, &block12, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp18;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp18 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block13, tmp18);
  }

  TNode<Smi> tmp19;
  TNode<BoolT> tmp20;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    tmp19 = SmiConstant_0(state_, IntegerLiteral(false, 0x0ull));
    tmp20 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{tmp3}, TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{tmp19});
    ca_.Goto(&block13, tmp20);
  }

  TNode<BoolT> phi_bb13_14;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_14);
    ca_.Branch(phi_bb13_14, &block14, std::vector<compiler::Node*>{}, &block15, std::vector<compiler::Node*>{});
  }

  TNode<Undefined> tmp21;
  TNode<BoolT> tmp22;
  if (block14.is_used()) {
    ca_.Bind(&block14);
    tmp21 = Undefined_0(state_);
    tmp22 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp12}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp21});
    ca_.Goto(&block16, tmp22);
  }

  TNode<BoolT> tmp23;
  if (block15.is_used()) {
    ca_.Bind(&block15);
    tmp23 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block16, tmp23);
  }

  TNode<BoolT> phi_bb16_14;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_14);
    ca_.Branch(phi_bb16_14, &block9, std::vector<compiler::Node*>{}, &block10, std::vector<compiler::Node*>{});
  }

  TNode<JSArray> tmp24;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    compiler::CodeAssemblerLabel label25(&ca_);
    tmp24 = Cast_FastJSArrayForCopy_1(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1}, &label25);
    ca_.Goto(&block19);
    if (label25.is_used()) {
      ca_.Bind(&label25);
      ca_.Goto(&block20);
    }
  }

  if (block20.is_used()) {
    ca_.Bind(&block20);
    ca_.Goto(&block10);
  }

  TNode<JSArray> tmp26;
  if (block19.is_used()) {
    ca_.Bind(&block19);
    tmp26 = ca_.CallBuiltin<JSArray>(Builtin::kCloneFastJSArray, parameter0, tmp24);
    arguments.PopAndReturn(tmp26);
  }

  TNode<Number> tmp27;
  TNode<BoolT> tmp28;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp27 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp28 = NumberIsLessThan_0(state_, TNode<Number>{phi_bb7_12}, TNode<Number>{tmp27});
    ca_.Branch(tmp28, &block21, std::vector<compiler::Node*>{}, &block22, std::vector<compiler::Node*>{});
  }

  TNode<Number> tmp29;
  TNode<Number> tmp30;
  TNode<Number> tmp31;
  if (block21.is_used()) {
    ca_.Bind(&block21);
    tmp29 = CodeStubAssembler(state_).NumberAdd(TNode<Number>{tmp1}, TNode<Number>{phi_bb7_12});
    tmp30 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp31 = Max_0(state_, TNode<Number>{tmp29}, TNode<Number>{tmp30});
    ca_.Goto(&block23, tmp31);
  }

  TNode<Number> tmp32;
  if (block22.is_used()) {
    ca_.Bind(&block22);
    tmp32 = Min_0(state_, TNode<Number>{phi_bb7_12}, TNode<Number>{tmp1});
    ca_.Goto(&block23, tmp32);
  }

  TNode<Number> phi_bb23_13;
  TNode<Number> tmp33;
  TNode<Number> tmp34;
  TNode<Number> tmp35;
  TNode<Number> tmp36;
  TNode<BoolT> tmp37;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_13);
    tmp33 = CodeStubAssembler(state_).NumberSub(TNode<Number>{phi_bb23_13}, TNode<Number>{phi_bb3_10});
    tmp34 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp35 = Max_0(state_, TNode<Number>{tmp33}, TNode<Number>{tmp34});
    tmp36 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp37 = NumberIsLessThanOrEqual_0(state_, TNode<Number>{tmp36}, TNode<Number>{phi_bb3_10});
    ca_.Branch(tmp37, &block25, std::vector<compiler::Node*>{}, &block26, std::vector<compiler::Node*>{});
  }

  if (block26.is_used()) {
    ca_.Bind(&block26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-slice.tq", 190});
      CodeStubAssembler(state_).FailAssert("Torque assert '0 <= k' failed", pos_stack);
    }
  }

  TNode<BoolT> tmp38;
  if (block25.is_used()) {
    ca_.Bind(&block25);
    tmp38 = NumberIsLessThanOrEqual_0(state_, TNode<Number>{phi_bb3_10}, TNode<Number>{tmp1});
    ca_.Branch(tmp38, &block27, std::vector<compiler::Node*>{}, &block28, std::vector<compiler::Node*>{});
  }

  if (block28.is_used()) {
    ca_.Bind(&block28);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-slice.tq", 191});
      CodeStubAssembler(state_).FailAssert("Torque assert 'k <= len' failed", pos_stack);
    }
  }

  TNode<Number> tmp39;
  TNode<BoolT> tmp40;
  if (block27.is_used()) {
    ca_.Bind(&block27);
    tmp39 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp40 = NumberIsLessThanOrEqual_0(state_, TNode<Number>{tmp39}, TNode<Number>{phi_bb23_13});
    ca_.Branch(tmp40, &block29, std::vector<compiler::Node*>{}, &block30, std::vector<compiler::Node*>{});
  }

  if (block30.is_used()) {
    ca_.Bind(&block30);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-slice.tq", 192});
      CodeStubAssembler(state_).FailAssert("Torque assert '0 <= final' failed", pos_stack);
    }
  }

  TNode<BoolT> tmp41;
  if (block29.is_used()) {
    ca_.Bind(&block29);
    tmp41 = NumberIsLessThanOrEqual_0(state_, TNode<Number>{phi_bb23_13}, TNode<Number>{tmp1});
    ca_.Branch(tmp41, &block31, std::vector<compiler::Node*>{}, &block32, std::vector<compiler::Node*>{});
  }

  if (block32.is_used()) {
    ca_.Bind(&block32);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-slice.tq", 193});
      CodeStubAssembler(state_).FailAssert("Torque assert 'final <= len' failed", pos_stack);
    }
  }

  TNode<Number> tmp42;
  TNode<BoolT> tmp43;
  if (block31.is_used()) {
    ca_.Bind(&block31);
    tmp42 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp43 = NumberIsLessThanOrEqual_0(state_, TNode<Number>{tmp42}, TNode<Number>{tmp35});
    ca_.Branch(tmp43, &block33, std::vector<compiler::Node*>{}, &block34, std::vector<compiler::Node*>{});
  }

  if (block34.is_used()) {
    ca_.Bind(&block34);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-slice.tq", 194});
      CodeStubAssembler(state_).FailAssert("Torque assert '0 <= count' failed", pos_stack);
    }
  }

  TNode<BoolT> tmp44;
  if (block33.is_used()) {
    ca_.Bind(&block33);
    tmp44 = NumberIsLessThanOrEqual_0(state_, TNode<Number>{tmp35}, TNode<Number>{tmp1});
    ca_.Branch(tmp44, &block35, std::vector<compiler::Node*>{}, &block36, std::vector<compiler::Node*>{});
  }

  if (block36.is_used()) {
    ca_.Bind(&block36);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-slice.tq", 195});
      CodeStubAssembler(state_).FailAssert("Torque assert 'count <= len' failed", pos_stack);
    }
  }

  TNode<JSArray> tmp45;
  if (block35.is_used()) {
    ca_.Bind(&block35);
    compiler::CodeAssemblerLabel label46(&ca_);
    tmp45 = HandleFastSlice_0(state_, TNode<NativeContext>{parameter0}, TNode<JSAny>{tmp0}, TNode<Number>{phi_bb3_10}, TNode<Number>{tmp35}, &label46);
    ca_.Goto(&block39);
    if (label46.is_used()) {
      ca_.Bind(&label46);
      ca_.Goto(&block40);
    }
  }

  TNode<JSReceiver> tmp47;
  TNode<Number> tmp48;
  if (block40.is_used()) {
    ca_.Bind(&block40);
    tmp47 = CodeStubAssembler(state_).ArraySpeciesCreate(TNode<Context>{parameter0}, TNode<JSAny>{tmp0}, TNode<Number>{tmp35});
    tmp48 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block43, phi_bb3_10, tmp48);
  }

  if (block39.is_used()) {
    ca_.Bind(&block39);
    arguments.PopAndReturn(tmp45);
  }

  TNode<Number> phi_bb43_10;
  TNode<Number> phi_bb43_16;
  TNode<BoolT> tmp49;
  if (block43.is_used()) {
    ca_.Bind(&block43, &phi_bb43_10, &phi_bb43_16);
    tmp49 = NumberIsLessThan_0(state_, TNode<Number>{phi_bb43_10}, TNode<Number>{phi_bb23_13});
    ca_.Branch(tmp49, &block41, std::vector<compiler::Node*>{phi_bb43_10, phi_bb43_16}, &block42, std::vector<compiler::Node*>{phi_bb43_10, phi_bb43_16});
  }

  TNode<Number> phi_bb41_10;
  TNode<Number> phi_bb41_16;
  TNode<Boolean> tmp50;
  TNode<True> tmp51;
  TNode<BoolT> tmp52;
  if (block41.is_used()) {
    ca_.Bind(&block41, &phi_bb41_10, &phi_bb41_16);
    tmp50 = ca_.CallBuiltin<Boolean>(Builtin::kHasProperty, parameter0, tmp0, phi_bb41_10);
    tmp51 = True_0(state_);
    tmp52 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp50}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp51});
    ca_.Branch(tmp52, &block44, std::vector<compiler::Node*>{phi_bb41_10, phi_bb41_16, phi_bb41_10}, &block45, std::vector<compiler::Node*>{phi_bb41_10, phi_bb41_16, phi_bb41_10});
  }

  TNode<Number> phi_bb44_10;
  TNode<Number> phi_bb44_16;
  TNode<Number> phi_bb44_17;
  TNode<JSAny> tmp53;
  TNode<Object> tmp54;
  if (block44.is_used()) {
    ca_.Bind(&block44, &phi_bb44_10, &phi_bb44_16, &phi_bb44_17);
    tmp53 = CodeStubAssembler(state_).GetProperty(TNode<Context>{parameter0}, TNode<JSAny>{tmp0}, TNode<JSAny>{phi_bb44_17});
    tmp54 = ca_.CallBuiltin<Object>(Builtin::kFastCreateDataProperty, parameter0, tmp47, phi_bb44_16, tmp53);
    ca_.Goto(&block45, phi_bb44_10, phi_bb44_16, phi_bb44_17);
  }

  TNode<Number> phi_bb45_10;
  TNode<Number> phi_bb45_16;
  TNode<Number> phi_bb45_17;
  TNode<Number> tmp55;
  TNode<Number> tmp56;
  TNode<Number> tmp57;
  TNode<Number> tmp58;
  if (block45.is_used()) {
    ca_.Bind(&block45, &phi_bb45_10, &phi_bb45_16, &phi_bb45_17);
    tmp55 = FromConstexpr_Number_constexpr_int31_0(state_, 1);
    tmp56 = CodeStubAssembler(state_).NumberAdd(TNode<Number>{phi_bb45_10}, TNode<Number>{tmp55});
    tmp57 = FromConstexpr_Number_constexpr_int31_0(state_, 1);
    tmp58 = CodeStubAssembler(state_).NumberAdd(TNode<Number>{phi_bb45_16}, TNode<Number>{tmp57});
    ca_.Goto(&block43, tmp56, tmp58);
  }

  TNode<Number> phi_bb42_10;
  TNode<Number> phi_bb42_16;
  TNode<String> tmp59;
  TNode<JSAny> tmp60;
  if (block42.is_used()) {
    ca_.Bind(&block42, &phi_bb42_10, &phi_bb42_16);
    tmp59 = kLengthString_0(state_);
    tmp60 = ca_.CallBuiltin<JSAny>(Builtin::kSetProperty, parameter0, tmp47, tmp59, phi_bb42_16);
    arguments.PopAndReturn(tmp47);
  }
}

// https://crsrc.org/c/v8/src/builtins/array-slice.tq?l=109&c=7
TNode<JSArgumentsObject> Cast_JSStrictArgumentsObject_1(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o, compiler::CodeAssemblerLabel* label_CastError) {
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

  TNode<JSArgumentsObject> tmp2;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    compiler::CodeAssemblerLabel label3(&ca_);
    tmp2 = Cast_JSStrictArgumentsObject_0(state_, TNode<Context>{p_context}, TNode<HeapObject>{tmp0}, &label3);
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
  return TNode<JSArgumentsObject>{tmp2};
}

// https://crsrc.org/c/v8/src/builtins/array-slice.tq?l=112&c=7
TNode<JSArgumentsObject> Cast_JSSloppyArgumentsObject_1(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o, compiler::CodeAssemblerLabel* label_CastError) {
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

  TNode<JSArgumentsObject> tmp2;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    compiler::CodeAssemblerLabel label3(&ca_);
    tmp2 = Cast_JSSloppyArgumentsObject_0(state_, TNode<Context>{p_context}, TNode<HeapObject>{tmp0}, &label3);
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
  return TNode<JSArgumentsObject>{tmp2};
}

} // namespace internal
} // namespace v8
