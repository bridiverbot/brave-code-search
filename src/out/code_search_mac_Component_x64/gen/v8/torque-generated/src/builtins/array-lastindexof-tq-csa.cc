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
#include "torque-generated/src/builtins/array-lastindexof-tq-csa.h"
#include "torque-generated/src/builtins/array-copywithin-tq-csa.h"
#include "torque-generated/src/builtins/array-lastindexof-tq-csa.h"
#include "torque-generated/src/builtins/base-tq-csa.h"
#include "torque-generated/src/builtins/cast-tq-csa.h"
#include "torque-generated/src/builtins/convert-tq-csa.h"
#include "torque-generated/src/builtins/frame-arguments-tq-csa.h"
#include "torque-generated/src/builtins/torque-internal-tq-csa.h"
#include "torque-generated/src/objects/fixed-array-base-tq-csa.h"
#include "torque-generated/src/objects/fixed-array-tq-csa.h"
#include "torque-generated/src/objects/fixed-primitive-array-tq-csa.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/builtins/array-lastindexof.tq?l=6&c=1
TNode<Smi> ClampLastIndexOfFrom_0(compiler::CodeAssemblerState* state_, TNode<Smi> p_from, TNode<Smi> p_elementsLen) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<BoolT> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiGreaterThanOrEqual(TNode<Smi>{p_from}, TNode<Smi>{p_elementsLen});
    ca_.Branch(tmp0, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  TNode<Smi> tmp1;
  TNode<Smi> tmp2;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp1 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp2 = CodeStubAssembler(state_).SmiSub(TNode<Smi>{p_elementsLen}, TNode<Smi>{tmp1});
    ca_.Goto(&block1, tmp2);
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    ca_.Goto(&block1, p_from);
  }

  TNode<Smi> phi_bb1_2;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_2);
    ca_.Goto(&block4);
  }

    ca_.Bind(&block4);
  return TNode<Smi>{phi_bb1_2};
}

// https://crsrc.org/c/v8/src/builtins/array-lastindexof.tq?l=17&c=1
TNode<Smi> LastIndexOfNumberInFixedArray_0(compiler::CodeAssemblerState* state_, TNode<FixedArray> p_elements, TNode<Smi> p_from, TNode<Number> p_search) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, Smi, Smi> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, Smi, Smi> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, BoolT> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block17(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block30(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Float64T> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Convert_float64_Number_0(state_, TNode<Number>{p_search});
    tmp1 = Float64IsNaN_0(state_, TNode<Float64T>{tmp0});
    ca_.Branch(tmp1, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  TNode<Smi> tmp2;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp2 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    ca_.Goto(&block1, tmp2);
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    ca_.Goto(&block6, p_from);
  }

  TNode<Smi> phi_bb6_4;
  TNode<Smi> tmp3;
  TNode<BoolT> tmp4;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_4);
    tmp3 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp4 = CodeStubAssembler(state_).SmiGreaterThanOrEqual(TNode<Smi>{phi_bb6_4}, TNode<Smi>{tmp3});
    ca_.Branch(tmp4, &block4, std::vector<compiler::Node*>{phi_bb6_4}, &block5, std::vector<compiler::Node*>{phi_bb6_4});
  }

  TNode<Smi> phi_bb4_4;
  TNode<Union<HeapObject, TaggedIndex>> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<IntPtrT> tmp7;
  TNode<IntPtrT> tmp8;
  TNode<UintPtrT> tmp9;
  TNode<UintPtrT> tmp10;
  TNode<BoolT> tmp11;
  if (block4.is_used()) {
    ca_.Bind(&block4, &phi_bb4_4);
    std::tie(tmp5, tmp6, tmp7) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{p_elements}).Flatten();
    tmp8 = Convert_intptr_Smi_0(state_, TNode<Smi>{phi_bb4_4});
    tmp9 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp8});
    tmp10 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp7});
    tmp11 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp9}, TNode<UintPtrT>{tmp10});
    ca_.Branch(tmp11, &block11, std::vector<compiler::Node*>{phi_bb4_4, phi_bb4_4, phi_bb4_4}, &block12, std::vector<compiler::Node*>{phi_bb4_4, phi_bb4_4, phi_bb4_4});
  }

  TNode<Smi> phi_bb11_4;
  TNode<Smi> phi_bb11_9;
  TNode<Smi> phi_bb11_10;
  TNode<IntPtrT> tmp12;
  TNode<IntPtrT> tmp13;
  TNode<Union<HeapObject, TaggedIndex>> tmp14;
  TNode<IntPtrT> tmp15;
  TNode<Object> tmp16;
  TNode<Union<BigInt, Boolean, HeapNumber, JSReceiver, Null, Smi, String, Symbol, TheHole, Undefined>> tmp17;
  if (block11.is_used()) {
    ca_.Bind(&block11, &phi_bb11_4, &phi_bb11_9, &phi_bb11_10);
    tmp12 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp8});
    tmp13 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp6}, TNode<IntPtrT>{tmp12});
    std::tie(tmp14, tmp15) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp5}, TNode<IntPtrT>{tmp13}).Flatten();
    tmp16 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp14, tmp15});
    compiler::CodeAssemblerLabel label18(&ca_);
    tmp17 = Cast_Smi_OR_HeapNumber_OR_BigInt_OR_String_OR_Symbol_OR_Boolean_OR_Null_OR_Undefined_OR_JSReceiver_OR_TheHole_0(state_, TNode<Object>{tmp16}, &label18);
    ca_.Goto(&block21, phi_bb11_4);
    if (label18.is_used()) {
      ca_.Bind(&label18);
      ca_.Goto(&block22, phi_bb11_4);
    }
  }

  TNode<Smi> phi_bb12_4;
  TNode<Smi> phi_bb12_9;
  TNode<Smi> phi_bb12_10;
  if (block12.is_used()) {
    ca_.Bind(&block12, &phi_bb12_4, &phi_bb12_9, &phi_bb12_10);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:131:41");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Smi> phi_bb22_4;
  TNode<BoolT> tmp19;
  if (block22.is_used()) {
    ca_.Bind(&block22, &phi_bb22_4);
    tmp19 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block18, phi_bb22_4, tmp19);
  }

  TNode<Smi> phi_bb21_4;
  TNode<BoolT> tmp20;
  if (block21.is_used()) {
    ca_.Bind(&block21, &phi_bb21_4);
    tmp20 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block18, phi_bb21_4, tmp20);
  }

  TNode<Smi> phi_bb18_4;
  TNode<BoolT> phi_bb18_9;
  if (block18.is_used()) {
    ca_.Bind(&block18, &phi_bb18_4, &phi_bb18_9);
    ca_.Branch(phi_bb18_9, &block16, std::vector<compiler::Node*>{phi_bb18_4}, &block17, std::vector<compiler::Node*>{phi_bb18_4});
  }

  TNode<Smi> phi_bb17_4;
  if (block17.is_used()) {
    ca_.Bind(&block17, &phi_bb17_4);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/cast.tq", 1025});
      CodeStubAssembler(state_).FailAssert("Torque assert 'Is<A>(o)' failed", pos_stack);
    }
  }

  TNode<Smi> phi_bb16_4;
  TNode<Union<BigInt, Boolean, HeapNumber, JSReceiver, Null, Smi, String, Symbol, TheHole, Undefined>> tmp21;
  TNode<BoolT> tmp22;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_4);
    tmp21 = TORQUE_CAST(TNode<Object>{tmp16});
    tmp22 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{tmp21}, TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{p_search});
    ca_.Branch(tmp22, &block23, std::vector<compiler::Node*>{phi_bb16_4}, &block24, std::vector<compiler::Node*>{phi_bb16_4});
  }

  TNode<Smi> phi_bb23_4;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_4);
    ca_.Goto(&block1, phi_bb23_4);
  }

  TNode<Smi> phi_bb24_4;
  TNode<Number> tmp23;
  if (block24.is_used()) {
    ca_.Bind(&block24, &phi_bb24_4);
    compiler::CodeAssemblerLabel label24(&ca_);
    tmp23 = Cast_Number_0(state_, TNode<Object>{tmp21}, &label24);
    ca_.Goto(&block27, phi_bb24_4);
    if (label24.is_used()) {
      ca_.Bind(&label24);
      ca_.Goto(&block28, phi_bb24_4);
    }
  }

  TNode<Smi> phi_bb28_4;
  if (block28.is_used()) {
    ca_.Bind(&block28, &phi_bb28_4);
    ca_.Goto(&block25, phi_bb28_4);
  }

  TNode<Smi> phi_bb27_4;
  TNode<Float64T> tmp25;
  TNode<BoolT> tmp26;
  if (block27.is_used()) {
    ca_.Bind(&block27, &phi_bb27_4);
    tmp25 = Convert_float64_Number_0(state_, TNode<Number>{tmp23});
    tmp26 = CodeStubAssembler(state_).Float64Equal(TNode<Float64T>{tmp0}, TNode<Float64T>{tmp25});
    ca_.Branch(tmp26, &block29, std::vector<compiler::Node*>{phi_bb27_4}, &block30, std::vector<compiler::Node*>{phi_bb27_4});
  }

  TNode<Smi> phi_bb29_4;
  if (block29.is_used()) {
    ca_.Bind(&block29, &phi_bb29_4);
    ca_.Goto(&block1, phi_bb29_4);
  }

  TNode<Smi> phi_bb30_4;
  if (block30.is_used()) {
    ca_.Bind(&block30, &phi_bb30_4);
    ca_.Goto(&block25, phi_bb30_4);
  }

  TNode<Smi> phi_bb25_4;
  TNode<Smi> tmp27;
  TNode<Smi> tmp28;
  if (block25.is_used()) {
    ca_.Bind(&block25, &phi_bb25_4);
    tmp27 = FromConstexpr_Smi_constexpr_int31_0(state_, 1);
    tmp28 = CodeStubAssembler(state_).SmiSub(TNode<Smi>{phi_bb25_4}, TNode<Smi>{tmp27});
    ca_.Goto(&block6, tmp28);
  }

  TNode<Smi> phi_bb5_4;
  TNode<Smi> tmp29;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_4);
    tmp29 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    ca_.Goto(&block1, tmp29);
  }

  TNode<Smi> phi_bb1_3;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_3);
    ca_.Goto(&block31, phi_bb1_3);
  }

  TNode<Smi> phi_bb31_3;
    ca_.Bind(&block31, &phi_bb31_3);
  return TNode<Smi>{phi_bb31_3};
}

// https://crsrc.org/c/v8/src/builtins/array-lastindexof.tq?l=39&c=1
TNode<Smi> LastIndexOfAnyInFixedArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<FixedArray> p_elements, TNode<Smi> p_from, TNode<JSAny> p_searchElement) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, Smi, Smi> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, Smi, Smi> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  if (block0.is_used()) {
    ca_.Bind(&block0);
    ca_.Goto(&block4, p_from);
  }

  TNode<Smi> phi_bb4_4;
  TNode<Smi> tmp0;
  TNode<BoolT> tmp1;
  if (block4.is_used()) {
    ca_.Bind(&block4, &phi_bb4_4);
    tmp0 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = CodeStubAssembler(state_).SmiGreaterThanOrEqual(TNode<Smi>{phi_bb4_4}, TNode<Smi>{tmp0});
    ca_.Branch(tmp1, &block2, std::vector<compiler::Node*>{phi_bb4_4}, &block3, std::vector<compiler::Node*>{phi_bb4_4});
  }

  TNode<Smi> phi_bb2_4;
  TNode<Union<HeapObject, TaggedIndex>> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<UintPtrT> tmp6;
  TNode<UintPtrT> tmp7;
  TNode<BoolT> tmp8;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_4);
    std::tie(tmp2, tmp3, tmp4) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{p_elements}).Flatten();
    tmp5 = Convert_intptr_Smi_0(state_, TNode<Smi>{phi_bb2_4});
    tmp6 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp5});
    tmp7 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp4});
    tmp8 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp6}, TNode<UintPtrT>{tmp7});
    ca_.Branch(tmp8, &block9, std::vector<compiler::Node*>{phi_bb2_4, phi_bb2_4, phi_bb2_4}, &block10, std::vector<compiler::Node*>{phi_bb2_4, phi_bb2_4, phi_bb2_4});
  }

  TNode<Smi> phi_bb9_4;
  TNode<Smi> phi_bb9_9;
  TNode<Smi> phi_bb9_10;
  TNode<IntPtrT> tmp9;
  TNode<IntPtrT> tmp10;
  TNode<Union<HeapObject, TaggedIndex>> tmp11;
  TNode<IntPtrT> tmp12;
  TNode<Object> tmp13;
  TNode<Union<BigInt, Boolean, HeapNumber, JSReceiver, Null, Smi, String, Symbol, TheHole, Undefined>> tmp14;
  TNode<BoolT> tmp15;
  if (block9.is_used()) {
    ca_.Bind(&block9, &phi_bb9_4, &phi_bb9_9, &phi_bb9_10);
    tmp9 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp5});
    tmp10 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp3}, TNode<IntPtrT>{tmp9});
    std::tie(tmp11, tmp12) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp2}, TNode<IntPtrT>{tmp10}).Flatten();
    tmp13 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp11, tmp12});
    tmp14 = UnsafeCast_Smi_OR_HeapNumber_OR_BigInt_OR_String_OR_Symbol_OR_Boolean_OR_Null_OR_Undefined_OR_JSReceiver_OR_TheHole_0(state_, TNode<Context>{p_context}, TNode<Object>{tmp13});
    tmp15 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{p_searchElement}, TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{tmp14});
    ca_.Branch(tmp15, &block13, std::vector<compiler::Node*>{phi_bb9_4}, &block14, std::vector<compiler::Node*>{phi_bb9_4});
  }

  TNode<Smi> phi_bb10_4;
  TNode<Smi> phi_bb10_9;
  TNode<Smi> phi_bb10_10;
  if (block10.is_used()) {
    ca_.Bind(&block10, &phi_bb10_4, &phi_bb10_9, &phi_bb10_10);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:131:41");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Smi> phi_bb13_4;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_4);
    ca_.Goto(&block1, phi_bb13_4);
  }

  TNode<Smi> phi_bb14_4;
  TNode<JSAny> tmp16;
  if (block14.is_used()) {
    ca_.Bind(&block14, &phi_bb14_4);
    compiler::CodeAssemblerLabel label17(&ca_);
    tmp16 = Cast_JSAny_0(state_, TNode<Object>{tmp14}, &label17);
    ca_.Goto(&block17, phi_bb14_4);
    if (label17.is_used()) {
      ca_.Bind(&label17);
      ca_.Goto(&block18, phi_bb14_4);
    }
  }

  TNode<Smi> phi_bb18_4;
  if (block18.is_used()) {
    ca_.Bind(&block18, &phi_bb18_4);
    ca_.Goto(&block15, phi_bb18_4);
  }

  TNode<Smi> phi_bb17_4;
  TNode<Boolean> tmp18;
  TNode<True> tmp19;
  TNode<BoolT> tmp20;
  if (block17.is_used()) {
    ca_.Bind(&block17, &phi_bb17_4);
    tmp18 = CodeStubAssembler(state_).StrictEqual(TNode<JSAny>{p_searchElement}, TNode<JSAny>{tmp16});
    tmp19 = True_0(state_);
    tmp20 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp18}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp19});
    ca_.Branch(tmp20, &block19, std::vector<compiler::Node*>{phi_bb17_4}, &block20, std::vector<compiler::Node*>{phi_bb17_4});
  }

  TNode<Smi> phi_bb19_4;
  if (block19.is_used()) {
    ca_.Bind(&block19, &phi_bb19_4);
    ca_.Goto(&block1, phi_bb19_4);
  }

  TNode<Smi> phi_bb20_4;
  if (block20.is_used()) {
    ca_.Bind(&block20, &phi_bb20_4);
    ca_.Goto(&block15, phi_bb20_4);
  }

  TNode<Smi> phi_bb15_4;
  TNode<Smi> tmp21;
  TNode<Smi> tmp22;
  if (block15.is_used()) {
    ca_.Bind(&block15, &phi_bb15_4);
    tmp21 = FromConstexpr_Smi_constexpr_int31_0(state_, 1);
    tmp22 = CodeStubAssembler(state_).SmiSub(TNode<Smi>{phi_bb15_4}, TNode<Smi>{tmp21});
    ca_.Goto(&block4, tmp22);
  }

  TNode<Smi> phi_bb3_4;
  TNode<Smi> tmp23;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_4);
    tmp23 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    ca_.Goto(&block1, tmp23);
  }

  TNode<Smi> phi_bb1_4;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_4);
    ca_.Goto(&block21, phi_bb1_4);
  }

  TNode<Smi> phi_bb21_4;
    ca_.Bind(&block21, &phi_bb21_4);
  return TNode<Smi>{phi_bb21_4};
}

// https://crsrc.org/c/v8/src/builtins/array-lastindexof.tq?l=59&c=1
TNode<Smi> FastArrayLastIndexOfFixedArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSArray> p_array, TNode<Smi> p_from, TNode<JSAny> p_searchElement) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<FixedArrayBase> tmp1;
  TNode<FixedArray> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<Smi> tmp4;
  TNode<Smi> tmp5;
  TNode<Number> tmp6;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp1 = CodeStubAssembler(state_).LoadReference<FixedArrayBase>(CodeStubAssembler::Reference{p_array, tmp0});
    tmp2 = UnsafeCast_FixedArray_0(state_, TNode<Context>{p_context}, TNode<Object>{tmp1});
    tmp3 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{tmp2});
    tmp4 = Convert_Smi_intptr_0(state_, TNode<IntPtrT>{tmp3});
    tmp5 = ClampLastIndexOfFrom_0(state_, TNode<Smi>{p_from}, TNode<Smi>{tmp4});
    compiler::CodeAssemblerLabel label7(&ca_);
    tmp6 = Cast_Number_0(state_, TNode<Object>{p_searchElement}, &label7);
    ca_.Goto(&block4);
    if (label7.is_used()) {
      ca_.Bind(&label7);
      ca_.Goto(&block5);
    }
  }

  TNode<Smi> tmp8;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp8 = LastIndexOfAnyInFixedArray_0(state_, TNode<Context>{p_context}, TNode<FixedArray>{tmp2}, TNode<Smi>{tmp5}, TNode<JSAny>{p_searchElement});
    ca_.Goto(&block1, tmp8);
  }

  TNode<Smi> tmp9;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp9 = LastIndexOfNumberInFixedArray_0(state_, TNode<FixedArray>{tmp2}, TNode<Smi>{tmp5}, TNode<Number>{tmp6});
    ca_.Goto(&block1, tmp9);
  }

  TNode<Smi> phi_bb1_4;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_4);
    ca_.Goto(&block6);
  }

    ca_.Bind(&block6);
  return TNode<Smi>{phi_bb1_4};
}

// https://crsrc.org/c/v8/src/builtins/array-lastindexof.tq?l=76&c=1
TNode<Smi> LastIndexOfDoubleValue_0(compiler::CodeAssemblerState* state_, TNode<FixedDoubleArray> p_elements, TNode<Smi> p_from, TNode<Float64T> p_searchNum) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, Smi, Smi> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, Smi, Smi> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, Smi, Smi> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, Smi, Smi> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, Smi, Smi> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, Smi, Smi> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  if (block0.is_used()) {
    ca_.Bind(&block0);
    ca_.Goto(&block4, p_from);
  }

  TNode<Smi> phi_bb4_3;
  TNode<Smi> tmp0;
  TNode<BoolT> tmp1;
  if (block4.is_used()) {
    ca_.Bind(&block4, &phi_bb4_3);
    tmp0 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = CodeStubAssembler(state_).SmiGreaterThanOrEqual(TNode<Smi>{phi_bb4_3}, TNode<Smi>{tmp0});
    ca_.Branch(tmp1, &block2, std::vector<compiler::Node*>{phi_bb4_3}, &block3, std::vector<compiler::Node*>{phi_bb4_3});
  }

  TNode<Smi> phi_bb2_3;
  TNode<Union<HeapObject, TaggedIndex>> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<UintPtrT> tmp6;
  TNode<UintPtrT> tmp7;
  TNode<BoolT> tmp8;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_3);
    std::tie(tmp2, tmp3, tmp4) = FieldSliceFixedDoubleArrayValues_0(state_, TNode<FixedDoubleArray>{p_elements}).Flatten();
    tmp5 = Convert_intptr_Smi_0(state_, TNode<Smi>{phi_bb2_3});
    tmp6 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp5});
    tmp7 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp4});
    tmp8 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp6}, TNode<UintPtrT>{tmp7});
    ca_.Branch(tmp8, &block13, std::vector<compiler::Node*>{phi_bb2_3, phi_bb2_3, phi_bb2_3}, &block14, std::vector<compiler::Node*>{phi_bb2_3, phi_bb2_3, phi_bb2_3});
  }

  TNode<Smi> phi_bb13_3;
  TNode<Smi> phi_bb13_8;
  TNode<Smi> phi_bb13_9;
  TNode<IntPtrT> tmp9;
  TNode<IntPtrT> tmp10;
  TNode<Union<HeapObject, TaggedIndex>> tmp11;
  TNode<IntPtrT> tmp12;
  TNode<BoolT> tmp13;
  TNode<BoolT> tmp14;
  TNode<Float64T> tmp15;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_3, &phi_bb13_8, &phi_bb13_9);
    tmp9 = TimesSizeOf_float64_or_undefined_or_hole_0(state_, TNode<IntPtrT>{tmp5});
    tmp10 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp3}, TNode<IntPtrT>{tmp9});
    std::tie(tmp11, tmp12) = NewReference_float64_or_undefined_or_hole_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp2}, TNode<IntPtrT>{tmp10}).Flatten();
    std::tie(tmp13, tmp14, tmp15) = LoadFloat64OrUndefinedOrHole_0(state_, TorqueStructReference_float64_or_undefined_or_hole_0{TNode<Union<HeapObject, TaggedIndex>>{tmp11}, TNode<IntPtrT>{tmp12}, TorqueStructUnsafe_0{}}).Flatten();
    ca_.Branch(tmp13, &block18, std::vector<compiler::Node*>{phi_bb13_3, phi_bb13_8, phi_bb13_9}, &block19, std::vector<compiler::Node*>{phi_bb13_3, phi_bb13_8, phi_bb13_9});
  }

  TNode<Smi> phi_bb14_3;
  TNode<Smi> phi_bb14_8;
  TNode<Smi> phi_bb14_9;
  if (block14.is_used()) {
    ca_.Bind(&block14, &phi_bb14_3, &phi_bb14_8, &phi_bb14_9);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:131:41");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Smi> phi_bb18_3;
  TNode<Smi> phi_bb18_8;
  TNode<Smi> phi_bb18_9;
  if (block18.is_used()) {
    ca_.Bind(&block18, &phi_bb18_3, &phi_bb18_8, &phi_bb18_9);
    ca_.Goto(&block7, phi_bb18_3);
  }

  TNode<Smi> phi_bb19_3;
  TNode<Smi> phi_bb19_8;
  TNode<Smi> phi_bb19_9;
  if (block19.is_used()) {
    ca_.Bind(&block19, &phi_bb19_3, &phi_bb19_8, &phi_bb19_9);
    ca_.Branch(tmp14, &block20, std::vector<compiler::Node*>{phi_bb19_3, phi_bb19_8, phi_bb19_9}, &block21, std::vector<compiler::Node*>{phi_bb19_3, phi_bb19_8, phi_bb19_9});
  }

  TNode<Smi> phi_bb20_3;
  TNode<Smi> phi_bb20_8;
  TNode<Smi> phi_bb20_9;
  if (block20.is_used()) {
    ca_.Bind(&block20, &phi_bb20_3, &phi_bb20_8, &phi_bb20_9);
    ca_.Goto(&block5, phi_bb20_3);
  }

  TNode<Smi> phi_bb21_3;
  TNode<Smi> phi_bb21_8;
  TNode<Smi> phi_bb21_9;
  TNode<BoolT> tmp16;
  if (block21.is_used()) {
    ca_.Bind(&block21, &phi_bb21_3, &phi_bb21_8, &phi_bb21_9);
    tmp16 = CodeStubAssembler(state_).Float64Equal(TNode<Float64T>{tmp15}, TNode<Float64T>{p_searchNum});
    ca_.Branch(tmp16, &block22, std::vector<compiler::Node*>{phi_bb21_3}, &block23, std::vector<compiler::Node*>{phi_bb21_3});
  }

  TNode<Smi> phi_bb22_3;
  if (block22.is_used()) {
    ca_.Bind(&block22, &phi_bb22_3);
    ca_.Goto(&block1, phi_bb22_3);
  }

  TNode<Smi> phi_bb23_3;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_3);
    ca_.Goto(&block7, phi_bb23_3);
  }

  TNode<Smi> phi_bb7_3;
  if (block7.is_used()) {
    ca_.Bind(&block7, &phi_bb7_3);
    ca_.Goto(&block5, phi_bb7_3);
  }

  TNode<Smi> phi_bb5_3;
  TNode<Smi> tmp17;
  TNode<Smi> tmp18;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_3);
    tmp17 = FromConstexpr_Smi_constexpr_int31_0(state_, 1);
    tmp18 = CodeStubAssembler(state_).SmiSub(TNode<Smi>{phi_bb5_3}, TNode<Smi>{tmp17});
    ca_.Goto(&block4, tmp18);
  }

  TNode<Smi> phi_bb3_3;
  TNode<Smi> tmp19;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_3);
    tmp19 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    ca_.Goto(&block1, tmp19);
  }

  TNode<Smi> phi_bb1_3;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_3);
    ca_.Goto(&block24, phi_bb1_3);
  }

  TNode<Smi> phi_bb24_3;
    ca_.Bind(&block24, &phi_bb24_3);
  return TNode<Smi>{phi_bb24_3};
}

// https://crsrc.org/c/v8/src/builtins/array-lastindexof.tq?l=94&c=1
TNode<Smi> LastIndexOfUndefinedInDoubles_0(compiler::CodeAssemblerState* state_, TNode<FixedDoubleArray> p_elements, TNode<Smi> p_from) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, Smi, Smi> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, Smi, Smi> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, Smi, Smi> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, Smi, Smi> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, Smi, Smi> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi, Smi, Smi> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  if (block0.is_used()) {
    ca_.Bind(&block0);
    ca_.Goto(&block4, p_from);
  }

  TNode<Smi> phi_bb4_2;
  TNode<Smi> tmp0;
  TNode<BoolT> tmp1;
  if (block4.is_used()) {
    ca_.Bind(&block4, &phi_bb4_2);
    tmp0 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = CodeStubAssembler(state_).SmiGreaterThanOrEqual(TNode<Smi>{phi_bb4_2}, TNode<Smi>{tmp0});
    ca_.Branch(tmp1, &block2, std::vector<compiler::Node*>{phi_bb4_2}, &block3, std::vector<compiler::Node*>{phi_bb4_2});
  }

  TNode<Smi> phi_bb2_2;
  TNode<Union<HeapObject, TaggedIndex>> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<UintPtrT> tmp6;
  TNode<UintPtrT> tmp7;
  TNode<BoolT> tmp8;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_2);
    std::tie(tmp2, tmp3, tmp4) = FieldSliceFixedDoubleArrayValues_0(state_, TNode<FixedDoubleArray>{p_elements}).Flatten();
    tmp5 = Convert_intptr_Smi_0(state_, TNode<Smi>{phi_bb2_2});
    tmp6 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp5});
    tmp7 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp4});
    tmp8 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp6}, TNode<UintPtrT>{tmp7});
    ca_.Branch(tmp8, &block13, std::vector<compiler::Node*>{phi_bb2_2, phi_bb2_2, phi_bb2_2}, &block14, std::vector<compiler::Node*>{phi_bb2_2, phi_bb2_2, phi_bb2_2});
  }

  TNode<Smi> phi_bb13_2;
  TNode<Smi> phi_bb13_7;
  TNode<Smi> phi_bb13_8;
  TNode<IntPtrT> tmp9;
  TNode<IntPtrT> tmp10;
  TNode<Union<HeapObject, TaggedIndex>> tmp11;
  TNode<IntPtrT> tmp12;
  TNode<BoolT> tmp13;
  TNode<BoolT> tmp14;
  TNode<Float64T> tmp15;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_2, &phi_bb13_7, &phi_bb13_8);
    tmp9 = TimesSizeOf_float64_or_undefined_or_hole_0(state_, TNode<IntPtrT>{tmp5});
    tmp10 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp3}, TNode<IntPtrT>{tmp9});
    std::tie(tmp11, tmp12) = NewReference_float64_or_undefined_or_hole_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp2}, TNode<IntPtrT>{tmp10}).Flatten();
    std::tie(tmp13, tmp14, tmp15) = LoadFloat64OrUndefinedOrHole_0(state_, TorqueStructReference_float64_or_undefined_or_hole_0{TNode<Union<HeapObject, TaggedIndex>>{tmp11}, TNode<IntPtrT>{tmp12}, TorqueStructUnsafe_0{}}).Flatten();
    ca_.Branch(tmp13, &block18, std::vector<compiler::Node*>{phi_bb13_2, phi_bb13_7, phi_bb13_8}, &block19, std::vector<compiler::Node*>{phi_bb13_2, phi_bb13_7, phi_bb13_8});
  }

  TNode<Smi> phi_bb14_2;
  TNode<Smi> phi_bb14_7;
  TNode<Smi> phi_bb14_8;
  if (block14.is_used()) {
    ca_.Bind(&block14, &phi_bb14_2, &phi_bb14_7, &phi_bb14_8);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:131:41");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Smi> phi_bb18_2;
  TNode<Smi> phi_bb18_7;
  TNode<Smi> phi_bb18_8;
  if (block18.is_used()) {
    ca_.Bind(&block18, &phi_bb18_2, &phi_bb18_7, &phi_bb18_8);
    ca_.Goto(&block1, phi_bb18_2);
  }

  TNode<Smi> phi_bb19_2;
  TNode<Smi> phi_bb19_7;
  TNode<Smi> phi_bb19_8;
  if (block19.is_used()) {
    ca_.Bind(&block19, &phi_bb19_2, &phi_bb19_7, &phi_bb19_8);
    ca_.Branch(tmp14, &block20, std::vector<compiler::Node*>{phi_bb19_2, phi_bb19_7, phi_bb19_8}, &block21, std::vector<compiler::Node*>{phi_bb19_2, phi_bb19_7, phi_bb19_8});
  }

  TNode<Smi> phi_bb20_2;
  TNode<Smi> phi_bb20_7;
  TNode<Smi> phi_bb20_8;
  if (block20.is_used()) {
    ca_.Bind(&block20, &phi_bb20_2, &phi_bb20_7, &phi_bb20_8);
    ca_.Goto(&block5, phi_bb20_2);
  }

  TNode<Smi> phi_bb21_2;
  TNode<Smi> phi_bb21_7;
  TNode<Smi> phi_bb21_8;
  if (block21.is_used()) {
    ca_.Bind(&block21, &phi_bb21_2, &phi_bb21_7, &phi_bb21_8);
    ca_.Goto(&block5, phi_bb21_2);
  }

  TNode<Smi> phi_bb5_2;
  TNode<Smi> tmp16;
  TNode<Smi> tmp17;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_2);
    tmp16 = FromConstexpr_Smi_constexpr_int31_0(state_, 1);
    tmp17 = CodeStubAssembler(state_).SmiSub(TNode<Smi>{phi_bb5_2}, TNode<Smi>{tmp16});
    ca_.Goto(&block4, tmp17);
  }

  TNode<Smi> phi_bb3_2;
  TNode<Smi> tmp18;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_2);
    tmp18 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    ca_.Goto(&block1, tmp18);
  }

  TNode<Smi> phi_bb1_2;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_2);
    ca_.Goto(&block22, phi_bb1_2);
  }

  TNode<Smi> phi_bb22_2;
    ca_.Bind(&block22, &phi_bb22_2);
  return TNode<Smi>{phi_bb22_2};
}

// https://crsrc.org/c/v8/src/builtins/array-lastindexof.tq?l=110&c=1
TNode<Smi> FastArrayLastIndexOfDoubles_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSArray> p_array, TNode<Smi> p_from, TNode<JSAny> p_searchElement) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<FixedArrayBase> tmp1;
  TNode<FixedDoubleArray> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<Smi> tmp4;
  TNode<Smi> tmp5;
  TNode<Number> tmp6;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp1 = CodeStubAssembler(state_).LoadReference<FixedArrayBase>(CodeStubAssembler::Reference{p_array, tmp0});
    tmp2 = UnsafeCast_FixedDoubleArray_0(state_, TNode<Context>{p_context}, TNode<Object>{tmp1});
    tmp3 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{tmp2});
    tmp4 = Convert_Smi_intptr_0(state_, TNode<IntPtrT>{tmp3});
    tmp5 = ClampLastIndexOfFrom_0(state_, TNode<Smi>{p_from}, TNode<Smi>{tmp4});
    compiler::CodeAssemblerLabel label7(&ca_);
    tmp6 = Cast_Number_0(state_, TNode<Object>{p_searchElement}, &label7);
    ca_.Goto(&block4);
    if (label7.is_used()) {
      ca_.Bind(&label7);
      ca_.Goto(&block5);
    }
  }

  TNode<Undefined> tmp8;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    compiler::CodeAssemblerLabel label9(&ca_);
    tmp8 = Cast_Undefined_2(state_, TNode<HeapObject>{ca_.UncheckedCast<Union<BigInt, Boolean, JSReceiver, Null, String, Symbol, Undefined>>(p_searchElement)}, &label9);
    ca_.Goto(&block10);
    if (label9.is_used()) {
      ca_.Bind(&label9);
      ca_.Goto(&block11);
    }
  }

  TNode<Float64T> tmp10;
  TNode<BoolT> tmp11;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp10 = Convert_float64_Number_0(state_, TNode<Number>{tmp6});
    tmp11 = Float64IsNaN_0(state_, TNode<Float64T>{tmp10});
    ca_.Branch(tmp11, &block6, std::vector<compiler::Node*>{}, &block7, std::vector<compiler::Node*>{});
  }

  TNode<Smi> tmp12;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp12 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    ca_.Goto(&block1, tmp12);
  }

  TNode<Smi> tmp13;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp13 = LastIndexOfDoubleValue_0(state_, TNode<FixedDoubleArray>{tmp2}, TNode<Smi>{tmp5}, TNode<Float64T>{tmp10});
    ca_.Goto(&block1, tmp13);
  }

  TNode<Smi> tmp14;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp14 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    ca_.Goto(&block1, tmp14);
  }

  TNode<Smi> tmp15;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp15 = LastIndexOfUndefinedInDoubles_0(state_, TNode<FixedDoubleArray>{tmp2}, TNode<Smi>{tmp5});
    ca_.Goto(&block1, tmp15);
  }

  TNode<Smi> phi_bb1_4;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_4);
    ca_.Goto(&block12);
  }

    ca_.Bind(&block12);
  return TNode<Smi>{phi_bb1_4};
}

// https://crsrc.org/c/v8/src/builtins/array-lastindexof.tq?l=133&c=1
TNode<Number> GetFromIndex_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Number> p_length, TorqueStructArguments p_arguments) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    tmp1 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{p_arguments.length}, TNode<IntPtrT>{tmp0});
    ca_.Branch(tmp1, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  TNode<Number> tmp2;
  TNode<Number> tmp3;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp2 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp3 = CodeStubAssembler(state_).NumberSub(TNode<Number>{p_length}, TNode<Number>{tmp2});
    ca_.Goto(&block4, tmp3);
  }

  TNode<IntPtrT> tmp4;
  TNode<JSAny> tmp5;
  TNode<Number> tmp6;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp4 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp5 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{p_arguments.frame}, TNode<RawPtrT>{p_arguments.base}, TNode<IntPtrT>{p_arguments.length}, TNode<IntPtrT>{p_arguments.actual_count}}, TNode<IntPtrT>{tmp4});
    tmp6 = ToInteger_Inline_0(state_, TNode<Context>{p_context}, TNode<JSAny>{tmp5});
    ca_.Goto(&block4, tmp6);
  }

  TNode<Number> phi_bb4_6;
  TNode<Smi> tmp7;
  TNode<Number> tmp8;
  TNode<BoolT> tmp9;
  if (block4.is_used()) {
    ca_.Bind(&block4, &phi_bb4_6);
    tmp7 = SmiConstant_0(state_, IntegerLiteral(false, 0x0ull));
    tmp8 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp9 = NumberIsGreaterThanOrEqual_0(state_, TNode<Number>{phi_bb4_6}, TNode<Number>{tmp8});
    ca_.Branch(tmp9, &block6, std::vector<compiler::Node*>{}, &block7, std::vector<compiler::Node*>{});
  }

  TNode<Number> tmp10;
  TNode<Number> tmp11;
  TNode<Number> tmp12;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp10 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp11 = CodeStubAssembler(state_).NumberSub(TNode<Number>{p_length}, TNode<Number>{tmp10});
    tmp12 = Min_0(state_, TNode<Number>{phi_bb4_6}, TNode<Number>{tmp11});
    ca_.Goto(&block8, tmp12);
  }

  TNode<Number> tmp13;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp13 = CodeStubAssembler(state_).NumberAdd(TNode<Number>{p_length}, TNode<Number>{phi_bb4_6});
    ca_.Goto(&block8, tmp13);
  }

  TNode<Number> phi_bb8_7;
  if (block8.is_used()) {
    ca_.Bind(&block8, &phi_bb8_7);
    ca_.Goto(&block9);
  }

    ca_.Bind(&block9);
  return TNode<Number>{phi_bb8_7};
}

// https://crsrc.org/c/v8/src/builtins/array-lastindexof.tq?l=153&c=1
TNode<JSAny> TryFastArrayLastIndexOf_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSReceiver> p_receiver, TNode<JSAny> p_searchElement, TNode<Number> p_from, compiler::CodeAssemblerLabel* label_Slow) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSArray> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_FastJSArrayForRead_0(state_, TNode<Context>{p_context}, TNode<HeapObject>{p_receiver}, &label1);
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
  TNode<Smi> tmp3;
  TNode<BoolT> tmp4;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp2 = CodeStubAssembler(state_).LoadFastJSArrayLength(TNode<JSArray>{tmp0});
    tmp3 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp4 = CodeStubAssembler(state_).SmiEqual(TNode<Smi>{tmp2}, TNode<Smi>{tmp3});
    ca_.Branch(tmp4, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  TNode<Smi> tmp5;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp5 = SmiConstant_0(state_, IntegerLiteral(true, 0x1ull));
    ca_.Goto(&block2, tmp5);
  }

  TNode<Smi> tmp6;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    compiler::CodeAssemblerLabel label7(&ca_);
    tmp6 = Cast_Smi_0(state_, TNode<Object>{p_from}, &label7);
    ca_.Goto(&block7);
    if (label7.is_used()) {
      ca_.Bind(&label7);
      ca_.Goto(&block8);
    }
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> tmp8;
  TNode<Map> tmp9;
  TNode<Int32T> tmp10;
  TNode<BoolT> tmp11;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp8 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    tmp9 = CodeStubAssembler(state_).LoadReference<Map>(CodeStubAssembler::Reference{tmp0, tmp8});
    tmp10 = CodeStubAssembler(state_).LoadMapElementsKind(TNode<Map>{tmp9});
    tmp11 = CodeStubAssembler(state_).IsDoubleElementsKind(TNode<Int32T>{tmp10});
    ca_.Branch(tmp11, &block9, std::vector<compiler::Node*>{}, &block10, std::vector<compiler::Node*>{});
  }

  TNode<Smi> tmp12;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp12 = FastArrayLastIndexOfDoubles_0(state_, TNode<Context>{p_context}, TNode<JSArray>{tmp0}, TNode<Smi>{tmp6}, TNode<JSAny>{p_searchElement});
    ca_.Goto(&block2, tmp12);
  }

  TNode<BoolT> tmp13;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp13 = CodeStubAssembler(state_).IsElementsKindLessThanOrEqual(TNode<Int32T>{tmp10}, CastIfEnumClass<ElementsKind>(ElementsKind::LAST_ANY_NONEXTENSIBLE_ELEMENTS_KIND));
    ca_.Branch(tmp13, &block11, std::vector<compiler::Node*>{}, &block12, std::vector<compiler::Node*>{});
  }

  if (block12.is_used()) {
    ca_.Bind(&block12);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-lastindexof.tq", 167});
      CodeStubAssembler(state_).FailAssert("Torque assert 'IsElementsKindLessThanOrEqual( kind, ElementsKind::LAST_ANY_NONEXTENSIBLE_ELEMENTS_KIND)' failed", pos_stack);
    }
  }

  TNode<Smi> tmp14;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp14 = FastArrayLastIndexOfFixedArray_0(state_, TNode<Context>{p_context}, TNode<JSArray>{tmp0}, TNode<Smi>{tmp6}, TNode<JSAny>{p_searchElement});
    ca_.Goto(&block2, tmp14);
  }

  TNode<JSAny> phi_bb2_4;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_4);
    ca_.Goto(&block13, phi_bb2_4);
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    ca_.Goto(label_Slow);
  }

  TNode<JSAny> phi_bb13_4;
    ca_.Bind(&block13, &phi_bb13_4);
  return TNode<JSAny>{phi_bb13_4};
}

// https://crsrc.org/c/v8/src/builtins/array-lastindexof.tq?l=172&c=1
TNode<JSAny> GenericArrayLastIndexOf_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSReceiver> p_object, TNode<JSAny> p_searchElement, TNode<Number> p_from) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  if (block0.is_used()) {
    ca_.Bind(&block0);
    ca_.Goto(&block4, p_from);
  }

  TNode<Number> phi_bb4_4;
  TNode<Number> tmp0;
  TNode<BoolT> tmp1;
  if (block4.is_used()) {
    ca_.Bind(&block4, &phi_bb4_4);
    tmp0 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = NumberIsGreaterThanOrEqual_0(state_, TNode<Number>{phi_bb4_4}, TNode<Number>{tmp0});
    ca_.Branch(tmp1, &block2, std::vector<compiler::Node*>{phi_bb4_4}, &block3, std::vector<compiler::Node*>{phi_bb4_4});
  }

  TNode<Number> phi_bb2_4;
  TNode<Boolean> tmp2;
  TNode<True> tmp3;
  TNode<BoolT> tmp4;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_4);
    tmp2 = ca_.CallBuiltin<Boolean>(Builtin::kHasProperty, p_context, p_object, phi_bb2_4);
    tmp3 = True_0(state_);
    tmp4 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp2}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp3});
    ca_.Branch(tmp4, &block5, std::vector<compiler::Node*>{phi_bb2_4}, &block6, std::vector<compiler::Node*>{phi_bb2_4});
  }

  TNode<Number> phi_bb5_4;
  TNode<JSAny> tmp5;
  TNode<Boolean> tmp6;
  TNode<True> tmp7;
  TNode<BoolT> tmp8;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_4);
    tmp5 = CodeStubAssembler(state_).GetProperty(TNode<Context>{p_context}, TNode<JSAny>{p_object}, TNode<JSAny>{phi_bb5_4});
    tmp6 = CodeStubAssembler(state_).StrictEqual(TNode<JSAny>{p_searchElement}, TNode<JSAny>{tmp5});
    tmp7 = True_0(state_);
    tmp8 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp6}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp7});
    ca_.Branch(tmp8, &block7, std::vector<compiler::Node*>{phi_bb5_4}, &block8, std::vector<compiler::Node*>{phi_bb5_4});
  }

  TNode<Number> phi_bb7_4;
  if (block7.is_used()) {
    ca_.Bind(&block7, &phi_bb7_4);
    ca_.Goto(&block1, phi_bb7_4);
  }

  TNode<Number> phi_bb8_4;
  if (block8.is_used()) {
    ca_.Bind(&block8, &phi_bb8_4);
    ca_.Goto(&block6, phi_bb8_4);
  }

  TNode<Number> phi_bb6_4;
  TNode<Number> tmp9;
  TNode<Number> tmp10;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_4);
    tmp9 = FromConstexpr_Number_constexpr_int31_0(state_, 1);
    tmp10 = CodeStubAssembler(state_).NumberSub(TNode<Number>{phi_bb6_4}, TNode<Number>{tmp9});
    ca_.Goto(&block4, tmp10);
  }

  TNode<Number> phi_bb3_4;
  TNode<Smi> tmp11;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_4);
    tmp11 = SmiConstant_0(state_, IntegerLiteral(true, 0x1ull));
    ca_.Goto(&block1, tmp11);
  }

  TNode<JSAny> phi_bb1_4;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_4);
    ca_.Goto(&block9, phi_bb1_4);
  }

  TNode<JSAny> phi_bb9_4;
    ca_.Bind(&block9, &phi_bb9_4);
  return TNode<JSAny>{phi_bb9_4};
}

TF_BUILTIN(ArrayPrototypeLastIndexOf, CodeStubAssembler) {
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
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSReceiver> tmp0;
  TNode<Number> tmp1;
  TNode<Smi> tmp2;
  TNode<BoolT> tmp3;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).ToObject_Inline(TNode<Context>{parameter0}, TNode<JSAny>{parameter1});
    tmp1 = GetLengthProperty_0(state_, TNode<Context>{parameter0}, TNode<JSAny>{tmp0});
    tmp2 = SmiConstant_0(state_, IntegerLiteral(false, 0x0ull));
    tmp3 = IsNumberEqual_0(state_, TNode<Number>{tmp1}, TNode<Number>{tmp2});
    ca_.Branch(tmp3, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<Smi> tmp4;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp4 = SmiConstant_0(state_, IntegerLiteral(true, 0x1ull));
    arguments.PopAndReturn(tmp4);
  }

  TNode<Number> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<JSAny> tmp7;
  TNode<JSAny> tmp8;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp5 = GetFromIndex_0(state_, TNode<Context>{parameter0}, TNode<Number>{tmp1}, TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}});
    tmp6 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp7 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp6});
    compiler::CodeAssemblerLabel label9(&ca_);
    tmp8 = TryFastArrayLastIndexOf_0(state_, TNode<Context>{parameter0}, TNode<JSReceiver>{tmp0}, TNode<JSAny>{tmp7}, TNode<Number>{tmp5}, &label9);
    ca_.Goto(&block5);
    if (label9.is_used()) {
      ca_.Bind(&label9);
      ca_.Goto(&block6);
    }
  }

  TNode<JSAny> tmp10;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp10 = GenericArrayLastIndexOf_0(state_, TNode<Context>{parameter0}, TNode<JSReceiver>{tmp0}, TNode<JSAny>{tmp7}, TNode<Number>{tmp5});
    arguments.PopAndReturn(tmp10);
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    arguments.PopAndReturn(tmp8);
  }
}

// https://crsrc.org/c/v8/src/builtins/array-lastindexof.tq?l=24&c=21
TNode<Union<BigInt, Boolean, HeapNumber, JSReceiver, Null, Smi, String, Symbol, TheHole, Undefined>> UnsafeCast_Smi_OR_HeapNumber_OR_BigInt_OR_String_OR_Symbol_OR_Boolean_OR_Null_OR_Undefined_OR_JSReceiver_OR_TheHole_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o) {
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
    tmp0 = Is_Smi_OR_HeapNumber_OR_BigInt_OR_String_OR_Symbol_OR_Boolean_OR_Null_OR_Undefined_OR_JSReceiver_OR_TheHole_Object_0(state_, TNode<Context>{p_context}, TNode<Object>{p_o});
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

  TNode<Union<BigInt, Boolean, HeapNumber, JSReceiver, Null, Smi, String, Symbol, TheHole, Undefined>> tmp1;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp1 = TORQUE_CAST(TNode<Object>{p_o});
    ca_.Goto(&block4);
  }

    ca_.Bind(&block4);
  return TNode<Union<BigInt, Boolean, HeapNumber, JSReceiver, Null, Smi, String, Symbol, TheHole, Undefined>>{tmp1};
}

} // namespace internal
} // namespace v8
