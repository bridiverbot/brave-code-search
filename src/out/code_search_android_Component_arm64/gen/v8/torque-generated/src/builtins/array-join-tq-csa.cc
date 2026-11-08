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
#include "torque-generated/src/builtins/array-join-tq-csa.h"
#include "torque-generated/src/builtins/array-copywithin-tq-csa.h"
#include "torque-generated/src/builtins/array-every-tq-csa.h"
#include "torque-generated/src/builtins/array-flat-tq-csa.h"
#include "torque-generated/src/builtins/array-join-tq-csa.h"
#include "torque-generated/src/builtins/base-tq-csa.h"
#include "torque-generated/src/builtins/builtins-string-tq-csa.h"
#include "torque-generated/src/builtins/cast-tq-csa.h"
#include "torque-generated/src/builtins/convert-tq-csa.h"
#include "torque-generated/src/builtins/frame-arguments-tq-csa.h"
#include "torque-generated/src/builtins/promise-misc-tq-csa.h"
#include "torque-generated/src/builtins/torque-internal-tq-csa.h"
#include "torque-generated/src/builtins/typed-array-tq-csa.h"
#include "torque-generated/src/objects/contexts-tq-csa.h"
#include "torque-generated/src/objects/fixed-array-base-tq-csa.h"
#include "torque-generated/src/objects/fixed-array-tq-csa.h"
#include "torque-generated/src/objects/fixed-primitive-array-tq-csa.h"
#include "torque-generated/src/objects/heap-number-tq-csa.h"
#include "torque-generated/src/objects/js-array-buffer-tq-csa.h"
#include "torque-generated/src/objects/js-array-tq-csa.h"
#include "torque-generated/src/objects/string-tq-csa.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=12&c=1
int31_t kMaxBufferChunkSize_0(compiler::CodeAssemblerState* state_) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

    ca_.Bind(&block0);
  return FixedArray::kMaxRegularLength;}

TF_BUILTIN(LoadJoinElement_DictionaryElements_0, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSReceiver> parameter1 = UncheckedParameter<JSReceiver>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<UintPtrT> parameter2 = UncheckedParameter<UintPtrT>(Descriptor::kK);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSArray> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<FixedArrayBase> tmp2;
  TNode<NumberDictionary> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<JSAny> tmp5;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = UnsafeCast_JSArray_0(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1});
    tmp1 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp2 = CodeStubAssembler(state_).LoadReference<FixedArrayBase>(CodeStubAssembler::Reference{tmp0, tmp1});
    tmp3 = UnsafeCast_NumberDictionary_0(state_, TNode<Context>{parameter0}, TNode<Object>{tmp2});
    tmp4 = CodeStubAssembler(state_).Signed(TNode<UintPtrT>{parameter2});
    compiler::CodeAssemblerLabel label6(&ca_);
    compiler::CodeAssemblerLabel label7(&ca_);
    tmp5 = CodeStubAssembler(state_).BasicLoadNumberDictionaryElement(TNode<NumberDictionary>{tmp3}, TNode<IntPtrT>{tmp4}, &label6, &label7);
    ca_.Goto(&block5);
    if (label6.is_used()) {
      ca_.Bind(&label6);
      ca_.Goto(&block6);
    }
    if (label7.is_used()) {
      ca_.Bind(&label7);
      ca_.Goto(&block7);
    }
  }

  TNode<Number> tmp8;
  TNode<JSAny> tmp9;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp8 = Convert_Number_uintptr_0(state_, TNode<UintPtrT>{parameter2});
    tmp9 = CodeStubAssembler(state_).GetProperty(TNode<Context>{parameter0}, TNode<JSAny>{parameter1}, TNode<JSAny>{tmp8});
    CodeStubAssembler(state_).Return(tmp9);
  }

  TNode<String> tmp10;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp10 = kEmptyString_0(state_);
    CodeStubAssembler(state_).Return(tmp10);
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    CodeStubAssembler(state_).Return(tmp5);
  }
}

TF_BUILTIN(LoadJoinElement_FastSmiOrObjectElements_0, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSReceiver> parameter1 = UncheckedParameter<JSReceiver>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<UintPtrT> parameter2 = UncheckedParameter<UintPtrT>(Descriptor::kK);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSArray> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<FixedArrayBase> tmp2;
  TNode<FixedArray> tmp3;
  TNode<Union<HeapObject, TaggedIndex>> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<IntPtrT> tmp7;
  TNode<UintPtrT> tmp8;
  TNode<UintPtrT> tmp9;
  TNode<BoolT> tmp10;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = UnsafeCast_JSArray_0(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1});
    tmp1 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp2 = CodeStubAssembler(state_).LoadReference<FixedArrayBase>(CodeStubAssembler::Reference{tmp0, tmp1});
    tmp3 = UnsafeCast_FixedArray_0(state_, TNode<Context>{parameter0}, TNode<Object>{tmp2});
    std::tie(tmp4, tmp5, tmp6) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp3}).Flatten();
    tmp7 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{parameter2});
    tmp8 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp7});
    tmp9 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp6});
    tmp10 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp8}, TNode<UintPtrT>{tmp9});
    ca_.Branch(tmp10, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp11;
  TNode<IntPtrT> tmp12;
  TNode<Union<HeapObject, TaggedIndex>> tmp13;
  TNode<IntPtrT> tmp14;
  TNode<Object> tmp15;
  TNode<TheHole> tmp16;
  TNode<BoolT> tmp17;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp11 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp7});
    tmp12 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp5}, TNode<IntPtrT>{tmp11});
    std::tie(tmp13, tmp14) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp4}, TNode<IntPtrT>{tmp12}).Flatten();
    tmp15 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp13, tmp14});
    tmp16 = TheHole_0(state_);
    tmp17 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp15}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp16});
    ca_.Branch(tmp17, &block9, std::vector<compiler::Node*>{}, &block10, std::vector<compiler::Node*>{});
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> tmp18;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp18 = kEmptyString_0(state_);
    ca_.Goto(&block11, tmp18);
  }

  TNode<JSAny> tmp19;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp19 = UnsafeCast_JSAny_0(state_, TNode<Context>{parameter0}, TNode<Object>{tmp15});
    ca_.Goto(&block11, tmp19);
  }

  TNode<JSAny> phi_bb11_6;
  if (block11.is_used()) {
    ca_.Bind(&block11, &phi_bb11_6);
    CodeStubAssembler(state_).Return(phi_bb11_6);
  }
}

TF_BUILTIN(LoadJoinElement_FastDoubleElements_0, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSReceiver> parameter1 = UncheckedParameter<JSReceiver>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<UintPtrT> parameter2 = UncheckedParameter<UintPtrT>(Descriptor::kK);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSArray> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<FixedArrayBase> tmp2;
  TNode<FixedDoubleArray> tmp3;
  TNode<Union<HeapObject, TaggedIndex>> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<IntPtrT> tmp7;
  TNode<UintPtrT> tmp8;
  TNode<UintPtrT> tmp9;
  TNode<BoolT> tmp10;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = UnsafeCast_JSArray_0(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1});
    tmp1 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp2 = CodeStubAssembler(state_).LoadReference<FixedArrayBase>(CodeStubAssembler::Reference{tmp0, tmp1});
    tmp3 = UnsafeCast_FixedDoubleArray_0(state_, TNode<Context>{parameter0}, TNode<Object>{tmp2});
    std::tie(tmp4, tmp5, tmp6) = FieldSliceFixedDoubleArrayValues_0(state_, TNode<FixedDoubleArray>{tmp3}).Flatten();
    tmp7 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{parameter2});
    tmp8 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp7});
    tmp9 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp6});
    tmp10 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp8}, TNode<UintPtrT>{tmp9});
    ca_.Branch(tmp10, &block9, std::vector<compiler::Node*>{}, &block10, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp11;
  TNode<IntPtrT> tmp12;
  TNode<Union<HeapObject, TaggedIndex>> tmp13;
  TNode<IntPtrT> tmp14;
  TNode<BoolT> tmp15;
  TNode<BoolT> tmp16;
  TNode<Float64T> tmp17;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp11 = TimesSizeOf_float64_or_undefined_or_hole_0(state_, TNode<IntPtrT>{tmp7});
    tmp12 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp5}, TNode<IntPtrT>{tmp11});
    std::tie(tmp13, tmp14) = NewReference_float64_or_undefined_or_hole_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp4}, TNode<IntPtrT>{tmp12}).Flatten();
    std::tie(tmp15, tmp16, tmp17) = LoadFloat64OrUndefinedOrHole_0(state_, TorqueStructReference_float64_or_undefined_or_hole_0{TNode<Union<HeapObject, TaggedIndex>>{tmp13}, TNode<IntPtrT>{tmp14}, TorqueStructUnsafe_0{}}).Flatten();
    ca_.Branch(tmp15, &block14, std::vector<compiler::Node*>{}, &block15, std::vector<compiler::Node*>{});
  }

  if (block10.is_used()) {
    ca_.Bind(&block10);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Undefined> tmp18;
  if (block14.is_used()) {
    ca_.Bind(&block14);
    tmp18 = Undefined_0(state_);
    CodeStubAssembler(state_).Return(tmp18);
  }

  if (block15.is_used()) {
    ca_.Bind(&block15);
    ca_.Branch(tmp16, &block16, std::vector<compiler::Node*>{}, &block17, std::vector<compiler::Node*>{});
  }

  TNode<String> tmp19;
  if (block16.is_used()) {
    ca_.Bind(&block16);
    tmp19 = kEmptyString_0(state_);
    CodeStubAssembler(state_).Return(tmp19);
  }

  TNode<HeapNumber> tmp20;
  if (block17.is_used()) {
    ca_.Bind(&block17);
    tmp20 = CodeStubAssembler(state_).AllocateHeapNumberWithValue(TNode<Float64T>{tmp17});
    CodeStubAssembler(state_).Return(tmp20);
  }
}

TF_BUILTIN(ConvertToLocaleString, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kElement);
  USE(parameter1);
  TNode<JSAny> parameter2 = UncheckedParameter<JSAny>(Descriptor::kLocales);
  USE(parameter2);
  TNode<JSAny> parameter3 = UncheckedParameter<JSAny>(Descriptor::kOptions);
  USE(parameter3);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<BoolT> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).IsNullOrUndefined(TNode<Object>{parameter1});
    ca_.Branch(tmp0, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<String> tmp1;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp1 = kEmptyString_0(state_);
    CodeStubAssembler(state_).Return(tmp1);
  }

  TNode<JSAny> tmp2;
  TNode<JSAny> tmp3;
  TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>> tmp4;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp2 = FromConstexpr_JSAny_constexpr_string_0(state_, "toLocaleString");
    tmp3 = CodeStubAssembler(state_).GetProperty(TNode<Context>{parameter0}, TNode<JSAny>{parameter1}, TNode<JSAny>{tmp2});
    compiler::CodeAssemblerLabel label5(&ca_);
    tmp4 = Cast_Callable_1(state_, TNode<Context>{parameter0}, TNode<Object>{tmp3}, &label5);
    ca_.Goto(&block5);
    if (label5.is_used()) {
      ca_.Bind(&label5);
      ca_.Goto(&block6);
    }
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    CodeStubAssembler(state_).CallRuntime(Runtime::kThrowCalledNonCallable, parameter0, tmp3);
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<JSAny> tmp6;
  TNode<String> tmp7;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp6 = CodeStubAssembler(state_).Call(TNode<Context>{parameter0}, TNode<JSAny>{tmp4}, TNode<JSAny>{parameter1}, TNode<JSAny>{parameter2}, TNode<JSAny>{parameter3});
    tmp7 = CodeStubAssembler(state_).ToString_Inline(TNode<Context>{parameter0}, TNode<JSAny>{tmp6});
    CodeStubAssembler(state_).Return(tmp7);
  }
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=108&c=1
TNode<BoolT> CannotUseSameArrayAccessor_JSArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<BuiltinPtr> p_loadFn, TNode<JSReceiver> p_receiver, TNode<Map> p_originalMap, TNode<Number> p_originalLen) {
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
  compiler::CodeAssemblerParameterizedLabel<BoolT> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<BoolT> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiEqual(TNode<Smi>{p_loadFn}, TNode<Smi>{ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinElement_GenericElementsAccessor_0))});
    ca_.Branch(tmp0, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp1;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp1 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block1, tmp1);
  }

  TNode<JSArray> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<Map> tmp4;
  TNode<BoolT> tmp5;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp2 = UnsafeCast_JSArray_0(state_, TNode<Context>{p_context}, TNode<Object>{p_receiver});
    tmp3 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    tmp4 = CodeStubAssembler(state_).LoadReference<Map>(CodeStubAssembler::Reference{tmp2, tmp3});
    tmp5 = CodeStubAssembler(state_).TaggedNotEqual(TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{p_originalMap}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp4});
    ca_.Branch(tmp5, &block4, std::vector<compiler::Node*>{}, &block5, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp6;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp6 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block1, tmp6);
  }

  TNode<IntPtrT> tmp7;
  TNode<Number> tmp8;
  TNode<BoolT> tmp9;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp7 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp8 = CodeStubAssembler(state_).LoadReference<Number>(CodeStubAssembler::Reference{tmp2, tmp7});
    tmp9 = IsNumberNotEqual_0(state_, TNode<Number>{p_originalLen}, TNode<Number>{tmp8});
    ca_.Branch(tmp9, &block6, std::vector<compiler::Node*>{}, &block7, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp10;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp10 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block1, tmp10);
  }

  TNode<BoolT> tmp11;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp11 = CodeStubAssembler(state_).IsNoElementsProtectorCellInvalid();
    ca_.Branch(tmp11, &block8, std::vector<compiler::Node*>{}, &block9, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp12;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp12 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block1, tmp12);
  }

  TNode<BoolT> tmp13;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp13 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block1, tmp13);
  }

  TNode<BoolT> phi_bb1_5;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_5);
    ca_.Goto(&block10, phi_bb1_5);
  }

  TNode<BoolT> phi_bb10_5;
    ca_.Bind(&block10, &phi_bb10_5);
  return TNode<BoolT>{phi_bb10_5};
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=120&c=1
TNode<BoolT> CannotUseSameArrayAccessor_JSTypedArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<BuiltinPtr> p__loadFn, TNode<JSReceiver> p_receiver, TNode<Map> p__initialMap, TNode<Number> p__initialLen) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSTypedArray> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<JSArrayBuffer> tmp2;
  TNode<BoolT> tmp3;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = UnsafeCast_JSTypedArray_0(state_, TNode<Context>{p_context}, TNode<Object>{p_receiver});
    tmp1 = FromConstexpr_intptr_constexpr_int31_0(state_, 16);
    tmp2 = CodeStubAssembler(state_).LoadReference<JSArrayBuffer>(CodeStubAssembler::Reference{tmp0, tmp1});
    tmp3 = IsDetachedBuffer_0(state_, TNode<JSArrayBuffer>{tmp2});
    ca_.Branch(tmp3, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp4;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp4 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block1, tmp4);
  }

  TNode<BoolT> tmp5;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp5 = IsVariableLengthJSArrayBufferView_0(state_, TNode<JSArrayBufferView>{tmp0});
    ca_.Branch(tmp5, &block4, std::vector<compiler::Node*>{}, &block5, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp6;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp6 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block1, tmp6);
  }

  TNode<BoolT> tmp7;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp7 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block1, tmp7);
  }

  TNode<BoolT> phi_bb1_5;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_5);
    ca_.Goto(&block6, phi_bb1_5);
  }

  TNode<BoolT> phi_bb6_5;
    ca_.Bind(&block6, &phi_bb6_5);
  return TNode<BoolT>{phi_bb6_5};
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=142&c=1
TNode<IntPtrT> AddStringLength_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<IntPtrT> p_lenA, TNode<IntPtrT> p_lenB) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = CodeStubAssembler(state_).TryIntPtrAdd(TNode<IntPtrT>{p_lenA}, TNode<IntPtrT>{p_lenB}, &label1);
    ca_.Goto(&block4);
    if (label1.is_used()) {
      ca_.Bind(&label1);
      ca_.Goto(&block5);
    }
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    ca_.Goto(&block3);
  }

  TNode<IntPtrT> tmp2;
  TNode<BoolT> tmp3;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp2 = FromConstexpr_intptr_constexpr_int31_0(state_, String::kMaxLength);
    tmp3 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{tmp0}, TNode<IntPtrT>{tmp2});
    ca_.Branch(tmp3, &block6, std::vector<compiler::Node*>{}, &block7, std::vector<compiler::Node*>{});
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    ca_.Goto(&block3);
  }

  if (block7.is_used()) {
    ca_.Bind(&block7);
    ca_.Goto(&block8);
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    CodeStubAssembler(state_).CallRuntime(Runtime::kThrowInvalidStringLength, p_context);
    CodeStubAssembler(state_).Unreachable();
  }

    ca_.Bind(&block8);
  return TNode<IntPtrT>{tmp0};
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=301&c=1
TorqueStructBuffer_0 NewBuffer_0(compiler::CodeAssemblerState* state_, TNode<UintPtrT> p_len, TNode<String> p_sep) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<UintPtrT> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_uintptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    tmp1 = CodeStubAssembler(state_).UintPtrGreaterThanOrEqual(TNode<UintPtrT>{p_len}, TNode<UintPtrT>{tmp0});
    ca_.Branch(tmp1, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp2;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp2 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    ca_.Goto(&block4, tmp2);
  }

  TNode<UintPtrT> tmp3;
  TNode<UintPtrT> tmp4;
  TNode<IntPtrT> tmp5;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp3 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp4 = CodeStubAssembler(state_).UintPtrAdd(TNode<UintPtrT>{p_len}, TNode<UintPtrT>{tmp3});
    tmp5 = CodeStubAssembler(state_).Signed(TNode<UintPtrT>{tmp4});
    ca_.Goto(&block4, tmp5);
  }

  TNode<IntPtrT> phi_bb4_2;
  TNode<IntPtrT> tmp6;
  TNode<BoolT> tmp7;
  if (block4.is_used()) {
    ca_.Bind(&block4, &phi_bb4_2);
    tmp6 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp7 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{phi_bb4_2}, TNode<IntPtrT>{tmp6});
    ca_.Branch(tmp7, &block6, std::vector<compiler::Node*>{}, &block7, std::vector<compiler::Node*>{});
  }

  if (block7.is_used()) {
    ca_.Bind(&block7);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 305});
      CodeStubAssembler(state_).FailAssert("Torque assert 'cappedBufferSize > 0' failed", pos_stack);
    }
  }

  TNode<FixedArray> tmp8;
  TNode<Union<HeapObject, TaggedIndex>> tmp9;
  TNode<IntPtrT> tmp10;
  TNode<IntPtrT> tmp11;
  TNode<UintPtrT> tmp12;
  TNode<IntPtrT> tmp13;
  TNode<UintPtrT> tmp14;
  TNode<UintPtrT> tmp15;
  TNode<BoolT> tmp16;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp8 = CodeStubAssembler(state_).AllocateZeroedFixedArray(TNode<IntPtrT>{phi_bb4_2});
    std::tie(tmp9, tmp10, tmp11) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp8}).Flatten();
    tmp12 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp13 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp12});
    tmp14 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp13});
    tmp15 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp11});
    tmp16 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp14}, TNode<UintPtrT>{tmp15});
    ca_.Branch(tmp16, &block13, std::vector<compiler::Node*>{}, &block14, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp17;
  TNode<IntPtrT> tmp18;
  TNode<Union<HeapObject, TaggedIndex>> tmp19;
  TNode<IntPtrT> tmp20;
  TNode<Undefined> tmp21;
  TNode<IntPtrT> tmp22;
  TNode<Map> tmp23;
  TNode<BoolT> tmp24;
  TNode<Null> tmp25;
  TNode<IntPtrT> tmp26;
  TNode<IntPtrT> tmp27;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    tmp17 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp13});
    tmp18 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp10}, TNode<IntPtrT>{tmp17});
    std::tie(tmp19, tmp20) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp9}, TNode<IntPtrT>{tmp18}).Flatten();
    tmp21 = Undefined_0(state_);
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp19, tmp20}, tmp21);
    tmp22 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    tmp23 = CodeStubAssembler(state_).LoadReference<Map>(CodeStubAssembler::Reference{p_sep, tmp22});
    tmp24 = CodeStubAssembler(state_).IsOneByteStringMap(TNode<Map>{tmp23});
    tmp25 = Null_0(state_);
    tmp26 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp27 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block17);
  }

  if (block14.is_used()) {
    ca_.Bind(&block14);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

    ca_.Bind(&block17);
  return TorqueStructBuffer_0{TNode<FixedArray>{tmp8}, TNode<FixedArray>{tmp8}, TNode<IntPtrT>{tmp26}, TNode<IntPtrT>{tmp27}, TNode<BoolT>{tmp24}, TNode<PrimitiveHeapObject>{tmp25}};
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=318&c=1
TNode<String> BufferJoin_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TorqueStructBuffer_0 p_buffer, TNode<String> p_sep) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block29(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block30(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<SeqOneByteString, SeqTwoByteString, String>> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String> block34(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<BoolT> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).IsValidPositiveSmi(TNode<IntPtrT>{p_buffer.totalStringLength});
    ca_.Branch(tmp0, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 320});
      CodeStubAssembler(state_).FailAssert("Torque assert 'IsValidPositiveSmi(buffer.totalStringLength)' failed", pos_stack);
    }
  }

  TNode<IntPtrT> tmp1;
  TNode<BoolT> tmp2;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp1 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp2 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{p_buffer.totalStringLength}, TNode<IntPtrT>{tmp1});
    ca_.Branch(tmp2, &block4, std::vector<compiler::Node*>{}, &block5, std::vector<compiler::Node*>{});
  }

  TNode<String> tmp3;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp3 = kEmptyString_0(state_);
    ca_.Goto(&block1, tmp3);
  }

  TNode<IntPtrT> tmp4;
  TNode<BoolT> tmp5;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp4 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    tmp5 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{p_buffer.index}, TNode<IntPtrT>{tmp4});
    ca_.Branch(tmp5, &block8, std::vector<compiler::Node*>{}, &block9, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp6;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp6 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{p_buffer.head}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{p_buffer.chunk});
    ca_.Goto(&block10, tmp6);
  }

  TNode<BoolT> tmp7;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp7 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block10, tmp7);
  }

  TNode<BoolT> phi_bb10_9;
  if (block10.is_used()) {
    ca_.Bind(&block10, &phi_bb10_9);
    ca_.Branch(phi_bb10_9, &block6, std::vector<compiler::Node*>{}, &block7, std::vector<compiler::Node*>{});
  }

  TNode<Union<HeapObject, TaggedIndex>> tmp8;
  TNode<IntPtrT> tmp9;
  TNode<IntPtrT> tmp10;
  TNode<UintPtrT> tmp11;
  TNode<IntPtrT> tmp12;
  TNode<UintPtrT> tmp13;
  TNode<UintPtrT> tmp14;
  TNode<BoolT> tmp15;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    std::tie(tmp8, tmp9, tmp10) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{p_buffer.head}).Flatten();
    tmp11 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp12 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp11});
    tmp13 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp12});
    tmp14 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp10});
    tmp15 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp13}, TNode<UintPtrT>{tmp14});
    ca_.Branch(tmp15, &block16, std::vector<compiler::Node*>{}, &block17, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp16;
  TNode<IntPtrT> tmp17;
  TNode<Union<HeapObject, TaggedIndex>> tmp18;
  TNode<IntPtrT> tmp19;
  TNode<Object> tmp20;
  TNode<String> tmp21;
  if (block16.is_used()) {
    ca_.Bind(&block16);
    tmp16 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp12});
    tmp17 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp9}, TNode<IntPtrT>{tmp16});
    std::tie(tmp18, tmp19) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp8}, TNode<IntPtrT>{tmp17}).Flatten();
    tmp20 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp18, tmp19});
    compiler::CodeAssemblerLabel label22(&ca_);
    tmp21 = Cast_String_1(state_, TNode<Context>{p_context}, TNode<Object>{tmp20}, &label22);
    ca_.Goto(&block22);
    if (label22.is_used()) {
      ca_.Bind(&label22);
      ca_.Goto(&block23);
    }
  }

  if (block17.is_used()) {
    ca_.Bind(&block17);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Smi> tmp23;
  if (block23.is_used()) {
    ca_.Bind(&block23);
    compiler::CodeAssemblerLabel label24(&ca_);
    tmp23 = Cast_Smi_0(state_, TNode<Object>{ca_.UncheckedCast<Object>(tmp20)}, &label24);
    ca_.Goto(&block26);
    if (label24.is_used()) {
      ca_.Bind(&label24);
      ca_.Goto(&block27);
    }
  }

  if (block22.is_used()) {
    ca_.Bind(&block22);
    ca_.Goto(&block1, tmp21);
  }

  if (block27.is_used()) {
    ca_.Bind(&block27);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/array-join.tq:340:9");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Smi> tmp25;
  TNode<BoolT> tmp26;
  if (block26.is_used()) {
    ca_.Bind(&block26);
    tmp25 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp26 = CodeStubAssembler(state_).SmiGreaterThan(TNode<Smi>{tmp23}, TNode<Smi>{tmp25});
    ca_.Branch(tmp26, &block28, std::vector<compiler::Node*>{}, &block29, std::vector<compiler::Node*>{});
  }

  if (block29.is_used()) {
    ca_.Bind(&block29);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 336});
      CodeStubAssembler(state_).FailAssert("Torque assert 'nofSeparators > 0' failed", pos_stack);
    }
  }

  TNode<String> tmp27;
  if (block28.is_used()) {
    ca_.Bind(&block28);
    tmp27 = ca_.CallBuiltin<String>(Builtin::kStringRepeat, p_context, p_sep, tmp23);
    ca_.Goto(&block1, tmp27);
  }

  TNode<UintPtrT> tmp28;
  TNode<Uint32T> tmp29;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp28 = CodeStubAssembler(state_).Unsigned(TNode<IntPtrT>{p_buffer.totalStringLength});
    tmp29 = Convert_uint32_uintptr_0(state_, TNode<UintPtrT>{tmp28});
    ca_.Branch(p_buffer.isOneByte, &block30, std::vector<compiler::Node*>{}, &block31, std::vector<compiler::Node*>{});
  }

  TNode<Union<SeqOneByteString, String>> tmp30;
  if (block30.is_used()) {
    ca_.Bind(&block30);
    tmp30 = AllocateSeqOneByteString_0(state_, TNode<Uint32T>{tmp29});
    ca_.Goto(&block32, tmp30);
  }

  TNode<Union<SeqTwoByteString, String>> tmp31;
  if (block31.is_used()) {
    ca_.Bind(&block31);
    tmp31 = AllocateSeqTwoByteString_0(state_, TNode<Uint32T>{tmp29});
    ca_.Goto(&block32, tmp31);
  }

  TNode<Union<SeqOneByteString, SeqTwoByteString, String>> phi_bb32_9;
  TNode<String> tmp32;
  if (block32.is_used()) {
    ca_.Bind(&block32, &phi_bb32_9);
    tmp32 = ArrayBuiltinsAssembler(state_).CallJSArrayArrayJoinConcatToSequentialString(TNode<FixedArray>{p_buffer.head}, TNode<IntPtrT>{p_buffer.index}, TNode<String>{p_sep}, TNode<String>{phi_bb32_9});
    ca_.Goto(&block1, tmp32);
  }

  TNode<String> phi_bb1_8;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_8);
    ca_.Goto(&block34, phi_bb1_8);
  }

  TNode<String> phi_bb34_8;
    ca_.Bind(&block34, &phi_bb34_8);
  return TNode<String>{phi_bb34_8};
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=352&c=1
TNode<String> FastArrayJoin_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, ElementsKind p_kind, TNode<JSArray> p_array, TNode<String> p_sep, TNode<Smi> p_length, compiler::CodeAssemblerLabel* label_Bailout) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<UintPtrT, IntPtrT> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, UintPtrT> block35(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, UintPtrT> block36(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, UintPtrT> block40(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, UintPtrT> block41(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, UintPtrT> block42(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, UintPtrT> block43(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block30(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, UintPtrT> block48(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, UintPtrT> block49(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, UintPtrT> block54(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, UintPtrT> block53(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, UintPtrT> block56(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, UintPtrT> block55(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, String> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, UintPtrT> block61(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, UintPtrT> block62(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block65(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block68(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block69(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block66(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block67(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block70(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block71(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block76(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block75(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block77(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block78(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block82(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block81(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block86(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block85(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block90(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block89(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block94(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block93(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block98(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block97(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String> block83(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String> block79(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String> block73(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String> block72(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, String> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block102(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block103(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, BoolT> block104(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block101(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block100(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block108(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block109(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, BoolT> block110(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block106(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block107(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block111(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block115(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block114(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block117(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block116(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block118(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, BoolT, PrimitiveHeapObject, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block125(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, BoolT, PrimitiveHeapObject, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block126(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block119(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block129(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block130(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, IntPtrT> block131(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block134(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block133(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, FixedArray> block140(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, FixedArray> block141(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block149(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block150(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block158(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block159(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block120(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block112(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block105(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block162(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block167(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block166(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, FixedArray> block172(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, FixedArray> block173(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block180(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block179(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block182(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block181(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block185(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block184(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block187(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block186(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block188(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, BoolT, PrimitiveHeapObject, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block195(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, BoolT, PrimitiveHeapObject, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block196(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block189(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block199(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block200(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, IntPtrT> block201(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block204(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block203(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, FixedArray> block210(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, FixedArray> block211(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block219(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block220(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block228(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block229(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block190(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block177(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block235(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block234(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block237(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block236(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block239(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block238(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, FixedArray> block244(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, FixedArray> block245(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block176(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block163(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block250(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block249(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block252(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block251(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block253(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, BoolT, PrimitiveHeapObject, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block260(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, BoolT, PrimitiveHeapObject, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block261(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block254(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block264(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block265(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, IntPtrT> block266(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block269(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block268(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, FixedArray> block275(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, FixedArray> block276(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block284(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block285(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block293(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block294(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block255(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject> block164(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block297(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block299(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block300(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block298(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT> block304(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT> block305(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, BoolT> block306(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT> block302(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT> block303(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block307(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block311(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block310(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block313(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block312(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block314(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block321(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block322(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block315(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block325(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block326(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block327(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block330(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block329(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT, FixedArray> block336(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT, FixedArray> block337(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block345(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block346(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block354(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block355(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block316(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block308(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT> block301(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block358(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<UintPtrT> tmp0;
  TNode<UintPtrT> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Convert_uintptr_Smi_0(state_, TNode<Smi>{p_length});
    tmp1 = FromConstexpr_uintptr_constexpr_uintptr_0(state_, String::kMaxLength);
    tmp2 = CodeStubAssembler(state_).UintPtrLessThanOrEqual(TNode<UintPtrT>{tmp0}, TNode<UintPtrT>{tmp1});
    ca_.Branch(tmp2, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 358});
      CodeStubAssembler(state_).FailAssert("Torque assert 'len <= kStringMaxLengthUintptr' failed", pos_stack);
    }
  }

  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<BoolT> tmp5;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp3 = CodeStubAssembler(state_).LoadStringLengthAsWord(TNode<String>{p_sep});
    tmp4 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp5 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{tmp3}, TNode<IntPtrT>{tmp4});
    ca_.Branch(tmp5, &block7, std::vector<compiler::Node*>{}, &block8, std::vector<compiler::Node*>{});
  }

  TNode<UintPtrT> tmp6;
  TNode<BoolT> tmp7;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp6 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp7 = CodeStubAssembler(state_).UintPtrGreaterThan(TNode<UintPtrT>{tmp0}, TNode<UintPtrT>{tmp6});
    ca_.Goto(&block9, tmp7);
  }

  TNode<BoolT> tmp8;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp8 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block9, tmp8);
  }

  TNode<BoolT> phi_bb9_7;
  if (block9.is_used()) {
    ca_.Bind(&block9, &phi_bb9_7);
    ca_.Branch(phi_bb9_7, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp9;
  TNode<Int32T> tmp10;
  TNode<Int32T> tmp11;
  TNode<Int32T> tmp12;
  TNode<Int32T> tmp13;
  TNode<Int32T> tmp14;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp9 = CodeStubAssembler(state_).Signed(TNode<UintPtrT>{tmp0});
    tmp10 = Convert_int32_intptr_0(state_, TNode<IntPtrT>{tmp9});
    tmp11 = Convert_int32_intptr_0(state_, TNode<IntPtrT>{tmp3});
    tmp12 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp13 = CodeStubAssembler(state_).Int32Sub(TNode<Int32T>{tmp10}, TNode<Int32T>{tmp12});
    compiler::CodeAssemblerLabel label15(&ca_);
    tmp14 = CodeStubAssembler(state_).TryInt32Mul(TNode<Int32T>{tmp13}, TNode<Int32T>{tmp11}, &label15);
    ca_.Goto(&block12);
    if (label15.is_used()) {
      ca_.Bind(&label15);
      ca_.Goto(&block13);
    }
  }

  if (block13.is_used()) {
    ca_.Bind(&block13);
    ca_.Goto(&block11);
  }

  TNode<Int32T> tmp16;
  TNode<BoolT> tmp17;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    tmp16 = Convert_int32_constexpr_int31_0(state_, String::kMaxLength);
    tmp17 = CodeStubAssembler(state_).Int32GreaterThan(TNode<Int32T>{tmp14}, TNode<Int32T>{tmp16});
    ca_.Branch(tmp17, &block14, std::vector<compiler::Node*>{}, &block15, std::vector<compiler::Node*>{});
  }

  if (block14.is_used()) {
    ca_.Bind(&block14);
    ca_.Goto(&block11);
  }

  if (block15.is_used()) {
    ca_.Bind(&block15);
    ca_.Goto(&block6);
  }

  if (block11.is_used()) {
    ca_.Bind(&block11);
    CodeStubAssembler(state_).CallRuntime(Runtime::kThrowInvalidStringLength, p_context);
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> tmp18;
  TNode<FixedArrayBase> tmp19;
  TNode<IntPtrT> tmp20;
  TNode<FixedArray> tmp21;
  TNode<FixedArray> tmp22;
  TNode<IntPtrT> tmp23;
  TNode<IntPtrT> tmp24;
  TNode<BoolT> tmp25;
  TNode<PrimitiveHeapObject> tmp26;
  TNode<IntPtrT> tmp27;
  TNode<Smi> tmp28;
  TNode<UintPtrT> tmp29;
  TNode<BoolT> tmp30;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp18 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp19 = CodeStubAssembler(state_).LoadReference<FixedArrayBase>(CodeStubAssembler::Reference{p_array, tmp18});
    tmp20 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    std::tie(tmp21, tmp22, tmp23, tmp24, tmp25, tmp26) = NewBuffer_0(state_, TNode<UintPtrT>{tmp0}, TNode<String>{p_sep}).Flatten();
    tmp27 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp28 = CodeStubAssembler(state_).LoadFastJSArrayLength(TNode<JSArray>{p_array});
    tmp29 = Convert_uintptr_Smi_0(state_, TNode<Smi>{tmp28});
    tmp30 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp29}, TNode<UintPtrT>{tmp0});
    ca_.Branch(tmp30, &block16, std::vector<compiler::Node*>{}, &block17, std::vector<compiler::Node*>{tmp0, tmp27});
  }

  TNode<UintPtrT> tmp31;
  TNode<IntPtrT> tmp32;
  if (block16.is_used()) {
    ca_.Bind(&block16);
    tmp31 = CodeStubAssembler(state_).UintPtrSub(TNode<UintPtrT>{tmp0}, TNode<UintPtrT>{tmp29});
    tmp32 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp31});
    ca_.Goto(&block17, tmp29, tmp32);
  }

  TNode<UintPtrT> phi_bb17_4;
  TNode<IntPtrT> phi_bb17_14;
  TNode<UintPtrT> tmp33;
  if (block17.is_used()) {
    ca_.Bind(&block17, &phi_bb17_4, &phi_bb17_14);
    tmp33 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block20, tmp20, tmp22, tmp23, tmp24, tmp25, tmp26, tmp33);
  }

  TNode<IntPtrT> phi_bb20_7;
  TNode<FixedArray> phi_bb20_9;
  TNode<IntPtrT> phi_bb20_10;
  TNode<IntPtrT> phi_bb20_11;
  TNode<BoolT> phi_bb20_12;
  TNode<PrimitiveHeapObject> phi_bb20_13;
  TNode<UintPtrT> phi_bb20_15;
  TNode<BoolT> tmp34;
  if (block20.is_used()) {
    ca_.Bind(&block20, &phi_bb20_7, &phi_bb20_9, &phi_bb20_10, &phi_bb20_11, &phi_bb20_12, &phi_bb20_13, &phi_bb20_15);
    tmp34 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{phi_bb20_15}, TNode<UintPtrT>{phi_bb17_4});
    ca_.Branch(tmp34, &block18, std::vector<compiler::Node*>{phi_bb20_7, phi_bb20_9, phi_bb20_10, phi_bb20_11, phi_bb20_12, phi_bb20_13, phi_bb20_15}, &block19, std::vector<compiler::Node*>{phi_bb20_7, phi_bb20_9, phi_bb20_10, phi_bb20_11, phi_bb20_12, phi_bb20_13, phi_bb20_15});
  }

  TNode<IntPtrT> phi_bb18_7;
  TNode<FixedArray> phi_bb18_9;
  TNode<IntPtrT> phi_bb18_10;
  TNode<IntPtrT> phi_bb18_11;
  TNode<BoolT> phi_bb18_12;
  TNode<PrimitiveHeapObject> phi_bb18_13;
  TNode<UintPtrT> phi_bb18_15;
  TNode<UintPtrT> tmp35;
  TNode<BoolT> tmp36;
  if (block18.is_used()) {
    ca_.Bind(&block18, &phi_bb18_7, &phi_bb18_9, &phi_bb18_10, &phi_bb18_11, &phi_bb18_12, &phi_bb18_13, &phi_bb18_15);
    tmp35 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp36 = CodeStubAssembler(state_).UintPtrGreaterThan(TNode<UintPtrT>{phi_bb18_15}, TNode<UintPtrT>{tmp35});
    ca_.Branch(tmp36, &block21, std::vector<compiler::Node*>{phi_bb18_7, phi_bb18_9, phi_bb18_10, phi_bb18_11, phi_bb18_12, phi_bb18_13, phi_bb18_15}, &block22, std::vector<compiler::Node*>{phi_bb18_7, phi_bb18_9, phi_bb18_10, phi_bb18_11, phi_bb18_12, phi_bb18_13, phi_bb18_15});
  }

  TNode<IntPtrT> phi_bb21_7;
  TNode<FixedArray> phi_bb21_9;
  TNode<IntPtrT> phi_bb21_10;
  TNode<IntPtrT> phi_bb21_11;
  TNode<BoolT> phi_bb21_12;
  TNode<PrimitiveHeapObject> phi_bb21_13;
  TNode<UintPtrT> phi_bb21_15;
  TNode<IntPtrT> tmp37;
  TNode<IntPtrT> tmp38;
  if (block21.is_used()) {
    ca_.Bind(&block21, &phi_bb21_7, &phi_bb21_9, &phi_bb21_10, &phi_bb21_11, &phi_bb21_12, &phi_bb21_13, &phi_bb21_15);
    tmp37 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp38 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb21_7}, TNode<IntPtrT>{tmp37});
    ca_.Goto(&block22, tmp38, phi_bb21_9, phi_bb21_10, phi_bb21_11, phi_bb21_12, phi_bb21_13, phi_bb21_15);
  }

  TNode<IntPtrT> phi_bb22_7;
  TNode<FixedArray> phi_bb22_9;
  TNode<IntPtrT> phi_bb22_10;
  TNode<IntPtrT> phi_bb22_11;
  TNode<BoolT> phi_bb22_12;
  TNode<PrimitiveHeapObject> phi_bb22_13;
  TNode<UintPtrT> phi_bb22_15;
  if (block22.is_used()) {
    ca_.Bind(&block22, &phi_bb22_7, &phi_bb22_9, &phi_bb22_10, &phi_bb22_11, &phi_bb22_12, &phi_bb22_13, &phi_bb22_15);
    if (((CodeStubAssembler(state_).IsDoubleElementsKind(p_kind)))) {
      ca_.Goto(&block23, phi_bb22_9, phi_bb22_10, phi_bb22_11, phi_bb22_12, phi_bb22_13, phi_bb22_15);
    } else {
      ca_.Goto(&block24, phi_bb22_9, phi_bb22_10, phi_bb22_11, phi_bb22_12, phi_bb22_13, phi_bb22_15);
    }
  }

  TNode<FixedArray> phi_bb23_9;
  TNode<IntPtrT> phi_bb23_10;
  TNode<IntPtrT> phi_bb23_11;
  TNode<BoolT> phi_bb23_12;
  TNode<PrimitiveHeapObject> phi_bb23_13;
  TNode<UintPtrT> phi_bb23_15;
  TNode<FixedDoubleArray> tmp39;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_9, &phi_bb23_10, &phi_bb23_11, &phi_bb23_12, &phi_bb23_13, &phi_bb23_15);
    tmp39 = UnsafeCast_FixedDoubleArray_0(state_, TNode<Context>{p_context}, TNode<Object>{tmp19});
    if (((CodeStubAssembler(state_).IsHoleyElementsKind(p_kind)))) {
      ca_.Goto(&block26, phi_bb23_9, phi_bb23_10, phi_bb23_11, phi_bb23_12, phi_bb23_13, phi_bb23_15);
    } else {
      ca_.Goto(&block27, phi_bb23_9, phi_bb23_10, phi_bb23_11, phi_bb23_12, phi_bb23_13, phi_bb23_15);
    }
  }

  TNode<FixedArray> phi_bb26_9;
  TNode<IntPtrT> phi_bb26_10;
  TNode<IntPtrT> phi_bb26_11;
  TNode<BoolT> phi_bb26_12;
  TNode<PrimitiveHeapObject> phi_bb26_13;
  TNode<UintPtrT> phi_bb26_15;
  TNode<Union<HeapObject, TaggedIndex>> tmp40;
  TNode<IntPtrT> tmp41;
  TNode<IntPtrT> tmp42;
  TNode<UintPtrT> tmp43;
  TNode<UintPtrT> tmp44;
  TNode<IntPtrT> tmp45;
  TNode<UintPtrT> tmp46;
  TNode<UintPtrT> tmp47;
  TNode<BoolT> tmp48;
  if (block26.is_used()) {
    ca_.Bind(&block26, &phi_bb26_9, &phi_bb26_10, &phi_bb26_11, &phi_bb26_12, &phi_bb26_13, &phi_bb26_15);
    std::tie(tmp40, tmp41, tmp42) = FieldSliceFixedDoubleArrayValues_0(state_, TNode<FixedDoubleArray>{tmp39}).Flatten();
    tmp43 = FromConstexpr_uintptr_constexpr_int31_0(state_, 1);
    tmp44 = CodeStubAssembler(state_).UintPtrAdd(TNode<UintPtrT>{phi_bb26_15}, TNode<UintPtrT>{tmp43});
    tmp45 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{phi_bb26_15});
    tmp46 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp45});
    tmp47 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp42});
    tmp48 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp46}, TNode<UintPtrT>{tmp47});
    ca_.Branch(tmp48, &block35, std::vector<compiler::Node*>{phi_bb26_9, phi_bb26_10, phi_bb26_11, phi_bb26_12, phi_bb26_13, phi_bb26_15, phi_bb26_15}, &block36, std::vector<compiler::Node*>{phi_bb26_9, phi_bb26_10, phi_bb26_11, phi_bb26_12, phi_bb26_13, phi_bb26_15, phi_bb26_15});
  }

  TNode<FixedArray> phi_bb35_9;
  TNode<IntPtrT> phi_bb35_10;
  TNode<IntPtrT> phi_bb35_11;
  TNode<BoolT> phi_bb35_12;
  TNode<PrimitiveHeapObject> phi_bb35_13;
  TNode<UintPtrT> phi_bb35_22;
  TNode<UintPtrT> phi_bb35_23;
  TNode<IntPtrT> tmp49;
  TNode<IntPtrT> tmp50;
  TNode<Union<HeapObject, TaggedIndex>> tmp51;
  TNode<IntPtrT> tmp52;
  TNode<BoolT> tmp53;
  TNode<BoolT> tmp54;
  TNode<Float64T> tmp55;
  if (block35.is_used()) {
    ca_.Bind(&block35, &phi_bb35_9, &phi_bb35_10, &phi_bb35_11, &phi_bb35_12, &phi_bb35_13, &phi_bb35_22, &phi_bb35_23);
    tmp49 = TimesSizeOf_float64_or_undefined_or_hole_0(state_, TNode<IntPtrT>{tmp45});
    tmp50 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp41}, TNode<IntPtrT>{tmp49});
    std::tie(tmp51, tmp52) = NewReference_float64_or_undefined_or_hole_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp40}, TNode<IntPtrT>{tmp50}).Flatten();
    std::tie(tmp53, tmp54, tmp55) = LoadFloat64OrUndefinedOrHole_0(state_, TorqueStructReference_float64_or_undefined_or_hole_0{TNode<Union<HeapObject, TaggedIndex>>{tmp51}, TNode<IntPtrT>{tmp52}, TorqueStructUnsafe_0{}}).Flatten();
    ca_.Branch(tmp53, &block40, std::vector<compiler::Node*>{phi_bb35_9, phi_bb35_10, phi_bb35_11, phi_bb35_12, phi_bb35_13, phi_bb35_22, phi_bb35_23}, &block41, std::vector<compiler::Node*>{phi_bb35_9, phi_bb35_10, phi_bb35_11, phi_bb35_12, phi_bb35_13, phi_bb35_22, phi_bb35_23});
  }

  TNode<FixedArray> phi_bb36_9;
  TNode<IntPtrT> phi_bb36_10;
  TNode<IntPtrT> phi_bb36_11;
  TNode<BoolT> phi_bb36_12;
  TNode<PrimitiveHeapObject> phi_bb36_13;
  TNode<UintPtrT> phi_bb36_22;
  TNode<UintPtrT> phi_bb36_23;
  if (block36.is_used()) {
    ca_.Bind(&block36, &phi_bb36_9, &phi_bb36_10, &phi_bb36_11, &phi_bb36_12, &phi_bb36_13, &phi_bb36_22, &phi_bb36_23);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb40_9;
  TNode<IntPtrT> phi_bb40_10;
  TNode<IntPtrT> phi_bb40_11;
  TNode<BoolT> phi_bb40_12;
  TNode<PrimitiveHeapObject> phi_bb40_13;
  TNode<UintPtrT> phi_bb40_22;
  TNode<UintPtrT> phi_bb40_23;
  if (block40.is_used()) {
    ca_.Bind(&block40, &phi_bb40_9, &phi_bb40_10, &phi_bb40_11, &phi_bb40_12, &phi_bb40_13, &phi_bb40_22, &phi_bb40_23);
    ca_.Goto(&block30, phi_bb40_9, phi_bb40_10, phi_bb40_11, phi_bb40_12, phi_bb40_13);
  }

  TNode<FixedArray> phi_bb41_9;
  TNode<IntPtrT> phi_bb41_10;
  TNode<IntPtrT> phi_bb41_11;
  TNode<BoolT> phi_bb41_12;
  TNode<PrimitiveHeapObject> phi_bb41_13;
  TNode<UintPtrT> phi_bb41_22;
  TNode<UintPtrT> phi_bb41_23;
  if (block41.is_used()) {
    ca_.Bind(&block41, &phi_bb41_9, &phi_bb41_10, &phi_bb41_11, &phi_bb41_12, &phi_bb41_13, &phi_bb41_22, &phi_bb41_23);
    ca_.Branch(tmp54, &block42, std::vector<compiler::Node*>{phi_bb41_9, phi_bb41_10, phi_bb41_11, phi_bb41_12, phi_bb41_13, phi_bb41_22, phi_bb41_23}, &block43, std::vector<compiler::Node*>{phi_bb41_9, phi_bb41_10, phi_bb41_11, phi_bb41_12, phi_bb41_13, phi_bb41_22, phi_bb41_23});
  }

  TNode<FixedArray> phi_bb42_9;
  TNode<IntPtrT> phi_bb42_10;
  TNode<IntPtrT> phi_bb42_11;
  TNode<BoolT> phi_bb42_12;
  TNode<PrimitiveHeapObject> phi_bb42_13;
  TNode<UintPtrT> phi_bb42_22;
  TNode<UintPtrT> phi_bb42_23;
  if (block42.is_used()) {
    ca_.Bind(&block42, &phi_bb42_9, &phi_bb42_10, &phi_bb42_11, &phi_bb42_12, &phi_bb42_13, &phi_bb42_22, &phi_bb42_23);
    ca_.Goto(&block30, phi_bb42_9, phi_bb42_10, phi_bb42_11, phi_bb42_12, phi_bb42_13);
  }

  TNode<FixedArray> phi_bb43_9;
  TNode<IntPtrT> phi_bb43_10;
  TNode<IntPtrT> phi_bb43_11;
  TNode<BoolT> phi_bb43_12;
  TNode<PrimitiveHeapObject> phi_bb43_13;
  TNode<UintPtrT> phi_bb43_22;
  TNode<UintPtrT> phi_bb43_23;
  TNode<String> tmp56;
  if (block43.is_used()) {
    ca_.Bind(&block43, &phi_bb43_9, &phi_bb43_10, &phi_bb43_11, &phi_bb43_12, &phi_bb43_13, &phi_bb43_22, &phi_bb43_23);
    tmp56 = CodeStubAssembler(state_).Float64ToString(TNode<Float64T>{tmp55});
    ca_.Goto(&block28, phi_bb43_9, phi_bb43_10, phi_bb43_11, phi_bb43_12, phi_bb43_13, tmp44, tmp56);
  }

  TNode<FixedArray> phi_bb30_9;
  TNode<IntPtrT> phi_bb30_10;
  TNode<IntPtrT> phi_bb30_11;
  TNode<BoolT> phi_bb30_12;
  TNode<PrimitiveHeapObject> phi_bb30_13;
  if (block30.is_used()) {
    ca_.Bind(&block30, &phi_bb30_9, &phi_bb30_10, &phi_bb30_11, &phi_bb30_12, &phi_bb30_13);
    ca_.Goto(&block20, phi_bb22_7, phi_bb30_9, phi_bb30_10, phi_bb30_11, phi_bb30_12, phi_bb30_13, tmp44);
  }

  TNode<FixedArray> phi_bb27_9;
  TNode<IntPtrT> phi_bb27_10;
  TNode<IntPtrT> phi_bb27_11;
  TNode<BoolT> phi_bb27_12;
  TNode<PrimitiveHeapObject> phi_bb27_13;
  TNode<UintPtrT> phi_bb27_15;
  TNode<Union<HeapObject, TaggedIndex>> tmp57;
  TNode<IntPtrT> tmp58;
  TNode<IntPtrT> tmp59;
  TNode<UintPtrT> tmp60;
  TNode<UintPtrT> tmp61;
  TNode<IntPtrT> tmp62;
  TNode<UintPtrT> tmp63;
  TNode<UintPtrT> tmp64;
  TNode<BoolT> tmp65;
  if (block27.is_used()) {
    ca_.Bind(&block27, &phi_bb27_9, &phi_bb27_10, &phi_bb27_11, &phi_bb27_12, &phi_bb27_13, &phi_bb27_15);
    std::tie(tmp57, tmp58, tmp59) = FieldSliceFixedDoubleArrayValues_0(state_, TNode<FixedDoubleArray>{tmp39}).Flatten();
    tmp60 = FromConstexpr_uintptr_constexpr_int31_0(state_, 1);
    tmp61 = CodeStubAssembler(state_).UintPtrAdd(TNode<UintPtrT>{phi_bb27_15}, TNode<UintPtrT>{tmp60});
    tmp62 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{phi_bb27_15});
    tmp63 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp62});
    tmp64 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp59});
    tmp65 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp63}, TNode<UintPtrT>{tmp64});
    ca_.Branch(tmp65, &block48, std::vector<compiler::Node*>{phi_bb27_9, phi_bb27_10, phi_bb27_11, phi_bb27_12, phi_bb27_13, phi_bb27_15, phi_bb27_15}, &block49, std::vector<compiler::Node*>{phi_bb27_9, phi_bb27_10, phi_bb27_11, phi_bb27_12, phi_bb27_13, phi_bb27_15, phi_bb27_15});
  }

  TNode<FixedArray> phi_bb48_9;
  TNode<IntPtrT> phi_bb48_10;
  TNode<IntPtrT> phi_bb48_11;
  TNode<BoolT> phi_bb48_12;
  TNode<PrimitiveHeapObject> phi_bb48_13;
  TNode<UintPtrT> phi_bb48_22;
  TNode<UintPtrT> phi_bb48_23;
  TNode<IntPtrT> tmp66;
  TNode<IntPtrT> tmp67;
  TNode<Union<HeapObject, TaggedIndex>> tmp68;
  TNode<IntPtrT> tmp69;
  TNode<BoolT> tmp70;
  TNode<BoolT> tmp71;
  TNode<Float64T> tmp72;
  TNode<BoolT> tmp73;
  if (block48.is_used()) {
    ca_.Bind(&block48, &phi_bb48_9, &phi_bb48_10, &phi_bb48_11, &phi_bb48_12, &phi_bb48_13, &phi_bb48_22, &phi_bb48_23);
    tmp66 = TimesSizeOf_float64_or_undefined_or_hole_0(state_, TNode<IntPtrT>{tmp62});
    tmp67 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp58}, TNode<IntPtrT>{tmp66});
    std::tie(tmp68, tmp69) = NewReference_float64_or_undefined_or_hole_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp57}, TNode<IntPtrT>{tmp67}).Flatten();
    std::tie(tmp70, tmp71, tmp72) = LoadFloat64OrUndefinedOrHole_0(state_, TorqueStructReference_float64_or_undefined_or_hole_0{TNode<Union<HeapObject, TaggedIndex>>{tmp68}, TNode<IntPtrT>{tmp69}, TorqueStructUnsafe_0{}}).Flatten();
    tmp73 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp70});
    ca_.Branch(tmp73, &block53, std::vector<compiler::Node*>{phi_bb48_9, phi_bb48_10, phi_bb48_11, phi_bb48_12, phi_bb48_13, phi_bb48_22, phi_bb48_23}, &block54, std::vector<compiler::Node*>{phi_bb48_9, phi_bb48_10, phi_bb48_11, phi_bb48_12, phi_bb48_13, phi_bb48_22, phi_bb48_23});
  }

  TNode<FixedArray> phi_bb49_9;
  TNode<IntPtrT> phi_bb49_10;
  TNode<IntPtrT> phi_bb49_11;
  TNode<BoolT> phi_bb49_12;
  TNode<PrimitiveHeapObject> phi_bb49_13;
  TNode<UintPtrT> phi_bb49_22;
  TNode<UintPtrT> phi_bb49_23;
  if (block49.is_used()) {
    ca_.Bind(&block49, &phi_bb49_9, &phi_bb49_10, &phi_bb49_11, &phi_bb49_12, &phi_bb49_13, &phi_bb49_22, &phi_bb49_23);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb54_9;
  TNode<IntPtrT> phi_bb54_10;
  TNode<IntPtrT> phi_bb54_11;
  TNode<BoolT> phi_bb54_12;
  TNode<PrimitiveHeapObject> phi_bb54_13;
  TNode<UintPtrT> phi_bb54_22;
  TNode<UintPtrT> phi_bb54_23;
  if (block54.is_used()) {
    ca_.Bind(&block54, &phi_bb54_9, &phi_bb54_10, &phi_bb54_11, &phi_bb54_12, &phi_bb54_13, &phi_bb54_22, &phi_bb54_23);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/base.tq", 205});
      CodeStubAssembler(state_).FailAssert("Torque assert '!this.is_undefined' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb53_9;
  TNode<IntPtrT> phi_bb53_10;
  TNode<IntPtrT> phi_bb53_11;
  TNode<BoolT> phi_bb53_12;
  TNode<PrimitiveHeapObject> phi_bb53_13;
  TNode<UintPtrT> phi_bb53_22;
  TNode<UintPtrT> phi_bb53_23;
  TNode<BoolT> tmp74;
  if (block53.is_used()) {
    ca_.Bind(&block53, &phi_bb53_9, &phi_bb53_10, &phi_bb53_11, &phi_bb53_12, &phi_bb53_13, &phi_bb53_22, &phi_bb53_23);
    tmp74 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp71});
    ca_.Branch(tmp74, &block55, std::vector<compiler::Node*>{phi_bb53_9, phi_bb53_10, phi_bb53_11, phi_bb53_12, phi_bb53_13, phi_bb53_22, phi_bb53_23}, &block56, std::vector<compiler::Node*>{phi_bb53_9, phi_bb53_10, phi_bb53_11, phi_bb53_12, phi_bb53_13, phi_bb53_22, phi_bb53_23});
  }

  TNode<FixedArray> phi_bb56_9;
  TNode<IntPtrT> phi_bb56_10;
  TNode<IntPtrT> phi_bb56_11;
  TNode<BoolT> phi_bb56_12;
  TNode<PrimitiveHeapObject> phi_bb56_13;
  TNode<UintPtrT> phi_bb56_22;
  TNode<UintPtrT> phi_bb56_23;
  if (block56.is_used()) {
    ca_.Bind(&block56, &phi_bb56_9, &phi_bb56_10, &phi_bb56_11, &phi_bb56_12, &phi_bb56_13, &phi_bb56_22, &phi_bb56_23);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/base.tq", 207});
      CodeStubAssembler(state_).FailAssert("Torque assert '!this.is_hole' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb55_9;
  TNode<IntPtrT> phi_bb55_10;
  TNode<IntPtrT> phi_bb55_11;
  TNode<BoolT> phi_bb55_12;
  TNode<PrimitiveHeapObject> phi_bb55_13;
  TNode<UintPtrT> phi_bb55_22;
  TNode<UintPtrT> phi_bb55_23;
  TNode<String> tmp75;
  if (block55.is_used()) {
    ca_.Bind(&block55, &phi_bb55_9, &phi_bb55_10, &phi_bb55_11, &phi_bb55_12, &phi_bb55_13, &phi_bb55_22, &phi_bb55_23);
    tmp75 = CodeStubAssembler(state_).Float64ToString(TNode<Float64T>{tmp72});
    ca_.Goto(&block28, phi_bb55_9, phi_bb55_10, phi_bb55_11, phi_bb55_12, phi_bb55_13, tmp61, tmp75);
  }

  TNode<FixedArray> phi_bb28_9;
  TNode<IntPtrT> phi_bb28_10;
  TNode<IntPtrT> phi_bb28_11;
  TNode<BoolT> phi_bb28_12;
  TNode<PrimitiveHeapObject> phi_bb28_13;
  TNode<UintPtrT> phi_bb28_15;
  TNode<String> phi_bb28_16;
  if (block28.is_used()) {
    ca_.Bind(&block28, &phi_bb28_9, &phi_bb28_10, &phi_bb28_11, &phi_bb28_12, &phi_bb28_13, &phi_bb28_15, &phi_bb28_16);
    ca_.Goto(&block25, phi_bb28_9, phi_bb28_10, phi_bb28_11, phi_bb28_12, phi_bb28_13, phi_bb28_15, phi_bb28_16);
  }

  TNode<FixedArray> phi_bb24_9;
  TNode<IntPtrT> phi_bb24_10;
  TNode<IntPtrT> phi_bb24_11;
  TNode<BoolT> phi_bb24_12;
  TNode<PrimitiveHeapObject> phi_bb24_13;
  TNode<UintPtrT> phi_bb24_15;
  TNode<FixedArray> tmp76;
  TNode<Union<HeapObject, TaggedIndex>> tmp77;
  TNode<IntPtrT> tmp78;
  TNode<IntPtrT> tmp79;
  TNode<UintPtrT> tmp80;
  TNode<UintPtrT> tmp81;
  TNode<IntPtrT> tmp82;
  TNode<UintPtrT> tmp83;
  TNode<UintPtrT> tmp84;
  TNode<BoolT> tmp85;
  if (block24.is_used()) {
    ca_.Bind(&block24, &phi_bb24_9, &phi_bb24_10, &phi_bb24_11, &phi_bb24_12, &phi_bb24_13, &phi_bb24_15);
    tmp76 = UnsafeCast_FixedArray_0(state_, TNode<Context>{p_context}, TNode<Object>{tmp19});
    std::tie(tmp77, tmp78, tmp79) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp76}).Flatten();
    tmp80 = FromConstexpr_uintptr_constexpr_int31_0(state_, 1);
    tmp81 = CodeStubAssembler(state_).UintPtrAdd(TNode<UintPtrT>{phi_bb24_15}, TNode<UintPtrT>{tmp80});
    tmp82 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{phi_bb24_15});
    tmp83 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp82});
    tmp84 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp79});
    tmp85 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp83}, TNode<UintPtrT>{tmp84});
    ca_.Branch(tmp85, &block61, std::vector<compiler::Node*>{phi_bb24_9, phi_bb24_10, phi_bb24_11, phi_bb24_12, phi_bb24_13, phi_bb24_15, phi_bb24_15}, &block62, std::vector<compiler::Node*>{phi_bb24_9, phi_bb24_10, phi_bb24_11, phi_bb24_12, phi_bb24_13, phi_bb24_15, phi_bb24_15});
  }

  TNode<FixedArray> phi_bb61_9;
  TNode<IntPtrT> phi_bb61_10;
  TNode<IntPtrT> phi_bb61_11;
  TNode<BoolT> phi_bb61_12;
  TNode<PrimitiveHeapObject> phi_bb61_13;
  TNode<UintPtrT> phi_bb61_22;
  TNode<UintPtrT> phi_bb61_23;
  TNode<IntPtrT> tmp86;
  TNode<IntPtrT> tmp87;
  TNode<Union<HeapObject, TaggedIndex>> tmp88;
  TNode<IntPtrT> tmp89;
  TNode<Object> tmp90;
  if (block61.is_used()) {
    ca_.Bind(&block61, &phi_bb61_9, &phi_bb61_10, &phi_bb61_11, &phi_bb61_12, &phi_bb61_13, &phi_bb61_22, &phi_bb61_23);
    tmp86 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp82});
    tmp87 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp78}, TNode<IntPtrT>{tmp86});
    std::tie(tmp88, tmp89) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp77}, TNode<IntPtrT>{tmp87}).Flatten();
    tmp90 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp88, tmp89});
    if (((CodeStubAssembler(state_).IsHoleyElementsKind(p_kind)))) {
      ca_.Goto(&block65, phi_bb61_9, phi_bb61_10, phi_bb61_11, phi_bb61_12, phi_bb61_13);
    } else {
      ca_.Goto(&block66, phi_bb61_9, phi_bb61_10, phi_bb61_11, phi_bb61_12, phi_bb61_13);
    }
  }

  TNode<FixedArray> phi_bb62_9;
  TNode<IntPtrT> phi_bb62_10;
  TNode<IntPtrT> phi_bb62_11;
  TNode<BoolT> phi_bb62_12;
  TNode<PrimitiveHeapObject> phi_bb62_13;
  TNode<UintPtrT> phi_bb62_22;
  TNode<UintPtrT> phi_bb62_23;
  if (block62.is_used()) {
    ca_.Bind(&block62, &phi_bb62_9, &phi_bb62_10, &phi_bb62_11, &phi_bb62_12, &phi_bb62_13, &phi_bb62_22, &phi_bb62_23);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb65_9;
  TNode<IntPtrT> phi_bb65_10;
  TNode<IntPtrT> phi_bb65_11;
  TNode<BoolT> phi_bb65_12;
  TNode<PrimitiveHeapObject> phi_bb65_13;
  TNode<TheHole> tmp91;
  TNode<BoolT> tmp92;
  if (block65.is_used()) {
    ca_.Bind(&block65, &phi_bb65_9, &phi_bb65_10, &phi_bb65_11, &phi_bb65_12, &phi_bb65_13);
    tmp91 = TheHole_0(state_);
    tmp92 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp90}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp91});
    ca_.Branch(tmp92, &block68, std::vector<compiler::Node*>{phi_bb65_9, phi_bb65_10, phi_bb65_11, phi_bb65_12, phi_bb65_13}, &block69, std::vector<compiler::Node*>{phi_bb65_9, phi_bb65_10, phi_bb65_11, phi_bb65_12, phi_bb65_13});
  }

  TNode<FixedArray> phi_bb68_9;
  TNode<IntPtrT> phi_bb68_10;
  TNode<IntPtrT> phi_bb68_11;
  TNode<BoolT> phi_bb68_12;
  TNode<PrimitiveHeapObject> phi_bb68_13;
  if (block68.is_used()) {
    ca_.Bind(&block68, &phi_bb68_9, &phi_bb68_10, &phi_bb68_11, &phi_bb68_12, &phi_bb68_13);
    ca_.Goto(&block20, phi_bb22_7, phi_bb68_9, phi_bb68_10, phi_bb68_11, phi_bb68_12, phi_bb68_13, tmp81);
  }

  TNode<FixedArray> phi_bb69_9;
  TNode<IntPtrT> phi_bb69_10;
  TNode<IntPtrT> phi_bb69_11;
  TNode<BoolT> phi_bb69_12;
  TNode<PrimitiveHeapObject> phi_bb69_13;
  if (block69.is_used()) {
    ca_.Bind(&block69, &phi_bb69_9, &phi_bb69_10, &phi_bb69_11, &phi_bb69_12, &phi_bb69_13);
    ca_.Goto(&block67, phi_bb69_9, phi_bb69_10, phi_bb69_11, phi_bb69_12, phi_bb69_13);
  }

  TNode<FixedArray> phi_bb66_9;
  TNode<IntPtrT> phi_bb66_10;
  TNode<IntPtrT> phi_bb66_11;
  TNode<BoolT> phi_bb66_12;
  TNode<PrimitiveHeapObject> phi_bb66_13;
  if (block66.is_used()) {
    ca_.Bind(&block66, &phi_bb66_9, &phi_bb66_10, &phi_bb66_11, &phi_bb66_12, &phi_bb66_13);
    ca_.Goto(&block67, phi_bb66_9, phi_bb66_10, phi_bb66_11, phi_bb66_12, phi_bb66_13);
  }

  TNode<FixedArray> phi_bb67_9;
  TNode<IntPtrT> phi_bb67_10;
  TNode<IntPtrT> phi_bb67_11;
  TNode<BoolT> phi_bb67_12;
  TNode<PrimitiveHeapObject> phi_bb67_13;
  if (block67.is_used()) {
    ca_.Bind(&block67, &phi_bb67_9, &phi_bb67_10, &phi_bb67_11, &phi_bb67_12, &phi_bb67_13);
    if (((CodeStubAssembler(state_).IsSmiElementsKind(p_kind)))) {
      ca_.Goto(&block70, phi_bb67_9, phi_bb67_10, phi_bb67_11, phi_bb67_12, phi_bb67_13);
    } else {
      ca_.Goto(&block71, phi_bb67_9, phi_bb67_10, phi_bb67_11, phi_bb67_12, phi_bb67_13);
    }
  }

  TNode<FixedArray> phi_bb70_9;
  TNode<IntPtrT> phi_bb70_10;
  TNode<IntPtrT> phi_bb70_11;
  TNode<BoolT> phi_bb70_12;
  TNode<PrimitiveHeapObject> phi_bb70_13;
  TNode<Smi> tmp93;
  TNode<String> tmp94;
  if (block70.is_used()) {
    ca_.Bind(&block70, &phi_bb70_9, &phi_bb70_10, &phi_bb70_11, &phi_bb70_12, &phi_bb70_13);
    tmp93 = UnsafeCast_Smi_0(state_, TNode<Context>{p_context}, TNode<Object>{tmp90});
    tmp94 = CodeStubAssembler(state_).SmiToString(TNode<Smi>{tmp93});
    ca_.Goto(&block72, phi_bb70_9, phi_bb70_10, phi_bb70_11, phi_bb70_12, phi_bb70_13, tmp94);
  }

  TNode<FixedArray> phi_bb71_9;
  TNode<IntPtrT> phi_bb71_10;
  TNode<IntPtrT> phi_bb71_11;
  TNode<BoolT> phi_bb71_12;
  TNode<PrimitiveHeapObject> phi_bb71_13;
  TNode<String> tmp95;
  if (block71.is_used()) {
    ca_.Bind(&block71, &phi_bb71_9, &phi_bb71_10, &phi_bb71_11, &phi_bb71_12, &phi_bb71_13);
    compiler::CodeAssemblerLabel label96(&ca_);
    tmp95 = Cast_String_1(state_, TNode<Context>{p_context}, TNode<Object>{tmp90}, &label96);
    ca_.Goto(&block75, phi_bb71_9, phi_bb71_10, phi_bb71_11, phi_bb71_12, phi_bb71_13);
    if (label96.is_used()) {
      ca_.Bind(&label96);
      ca_.Goto(&block76, phi_bb71_9, phi_bb71_10, phi_bb71_11, phi_bb71_12, phi_bb71_13);
    }
  }

  TNode<FixedArray> phi_bb76_9;
  TNode<IntPtrT> phi_bb76_10;
  TNode<IntPtrT> phi_bb76_11;
  TNode<BoolT> phi_bb76_12;
  TNode<PrimitiveHeapObject> phi_bb76_13;
  TNode<Smi> tmp97;
  if (block76.is_used()) {
    ca_.Bind(&block76, &phi_bb76_9, &phi_bb76_10, &phi_bb76_11, &phi_bb76_12, &phi_bb76_13);
    compiler::CodeAssemblerLabel label98(&ca_);
    tmp97 = Cast_Smi_0(state_, TNode<Object>{ca_.UncheckedCast<Object>(tmp90)}, &label98);
    ca_.Goto(&block81, phi_bb76_9, phi_bb76_10, phi_bb76_11, phi_bb76_12, phi_bb76_13);
    if (label98.is_used()) {
      ca_.Bind(&label98);
      ca_.Goto(&block82, phi_bb76_9, phi_bb76_10, phi_bb76_11, phi_bb76_12, phi_bb76_13);
    }
  }

  TNode<FixedArray> phi_bb75_9;
  TNode<IntPtrT> phi_bb75_10;
  TNode<IntPtrT> phi_bb75_11;
  TNode<BoolT> phi_bb75_12;
  TNode<PrimitiveHeapObject> phi_bb75_13;
  TNode<String> tmp99;
  TNode<BoolT> tmp100;
  if (block75.is_used()) {
    ca_.Bind(&block75, &phi_bb75_9, &phi_bb75_10, &phi_bb75_11, &phi_bb75_12, &phi_bb75_13);
    tmp99 = kEmptyString_0(state_);
    tmp100 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp95}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp99});
    ca_.Branch(tmp100, &block77, std::vector<compiler::Node*>{phi_bb75_9, phi_bb75_10, phi_bb75_11, phi_bb75_12, phi_bb75_13}, &block78, std::vector<compiler::Node*>{phi_bb75_9, phi_bb75_10, phi_bb75_11, phi_bb75_12, phi_bb75_13});
  }

  TNode<FixedArray> phi_bb77_9;
  TNode<IntPtrT> phi_bb77_10;
  TNode<IntPtrT> phi_bb77_11;
  TNode<BoolT> phi_bb77_12;
  TNode<PrimitiveHeapObject> phi_bb77_13;
  if (block77.is_used()) {
    ca_.Bind(&block77, &phi_bb77_9, &phi_bb77_10, &phi_bb77_11, &phi_bb77_12, &phi_bb77_13);
    ca_.Goto(&block20, phi_bb22_7, phi_bb77_9, phi_bb77_10, phi_bb77_11, phi_bb77_12, phi_bb77_13, tmp81);
  }

  TNode<FixedArray> phi_bb78_9;
  TNode<IntPtrT> phi_bb78_10;
  TNode<IntPtrT> phi_bb78_11;
  TNode<BoolT> phi_bb78_12;
  TNode<PrimitiveHeapObject> phi_bb78_13;
  if (block78.is_used()) {
    ca_.Bind(&block78, &phi_bb78_9, &phi_bb78_10, &phi_bb78_11, &phi_bb78_12, &phi_bb78_13);
    ca_.Goto(&block73, phi_bb78_9, phi_bb78_10, phi_bb78_11, phi_bb78_12, phi_bb78_13, tmp95);
  }

  TNode<FixedArray> phi_bb82_9;
  TNode<IntPtrT> phi_bb82_10;
  TNode<IntPtrT> phi_bb82_11;
  TNode<BoolT> phi_bb82_12;
  TNode<PrimitiveHeapObject> phi_bb82_13;
  TNode<HeapNumber> tmp101;
  if (block82.is_used()) {
    ca_.Bind(&block82, &phi_bb82_9, &phi_bb82_10, &phi_bb82_11, &phi_bb82_12, &phi_bb82_13);
    compiler::CodeAssemblerLabel label102(&ca_);
    tmp101 = Cast_HeapNumber_0(state_, TNode<HeapObject>{ca_.UncheckedCast<HeapObject>(tmp90)}, &label102);
    ca_.Goto(&block85, phi_bb82_9, phi_bb82_10, phi_bb82_11, phi_bb82_12, phi_bb82_13);
    if (label102.is_used()) {
      ca_.Bind(&label102);
      ca_.Goto(&block86, phi_bb82_9, phi_bb82_10, phi_bb82_11, phi_bb82_12, phi_bb82_13);
    }
  }

  TNode<FixedArray> phi_bb81_9;
  TNode<IntPtrT> phi_bb81_10;
  TNode<IntPtrT> phi_bb81_11;
  TNode<BoolT> phi_bb81_12;
  TNode<PrimitiveHeapObject> phi_bb81_13;
  TNode<String> tmp103;
  if (block81.is_used()) {
    ca_.Bind(&block81, &phi_bb81_9, &phi_bb81_10, &phi_bb81_11, &phi_bb81_12, &phi_bb81_13);
    tmp103 = CodeStubAssembler(state_).SmiToString(TNode<Smi>{tmp97});
    ca_.Goto(&block79, phi_bb81_9, phi_bb81_10, phi_bb81_11, phi_bb81_12, phi_bb81_13, tmp103);
  }

  TNode<FixedArray> phi_bb86_9;
  TNode<IntPtrT> phi_bb86_10;
  TNode<IntPtrT> phi_bb86_11;
  TNode<BoolT> phi_bb86_12;
  TNode<PrimitiveHeapObject> phi_bb86_13;
  TNode<Undefined> tmp104;
  if (block86.is_used()) {
    ca_.Bind(&block86, &phi_bb86_9, &phi_bb86_10, &phi_bb86_11, &phi_bb86_12, &phi_bb86_13);
    compiler::CodeAssemblerLabel label105(&ca_);
    tmp104 = Cast_Undefined_2(state_, TNode<HeapObject>{ca_.UncheckedCast<HeapObject>(tmp90)}, &label105);
    ca_.Goto(&block89, phi_bb86_9, phi_bb86_10, phi_bb86_11, phi_bb86_12, phi_bb86_13);
    if (label105.is_used()) {
      ca_.Bind(&label105);
      ca_.Goto(&block90, phi_bb86_9, phi_bb86_10, phi_bb86_11, phi_bb86_12, phi_bb86_13);
    }
  }

  TNode<FixedArray> phi_bb85_9;
  TNode<IntPtrT> phi_bb85_10;
  TNode<IntPtrT> phi_bb85_11;
  TNode<BoolT> phi_bb85_12;
  TNode<PrimitiveHeapObject> phi_bb85_13;
  TNode<String> tmp106;
  if (block85.is_used()) {
    ca_.Bind(&block85, &phi_bb85_9, &phi_bb85_10, &phi_bb85_11, &phi_bb85_12, &phi_bb85_13);
    tmp106 = CodeStubAssembler(state_).NumberToString(TNode<Number>{tmp101});
    ca_.Goto(&block83, phi_bb85_9, phi_bb85_10, phi_bb85_11, phi_bb85_12, phi_bb85_13, tmp106);
  }

  TNode<FixedArray> phi_bb90_9;
  TNode<IntPtrT> phi_bb90_10;
  TNode<IntPtrT> phi_bb90_11;
  TNode<BoolT> phi_bb90_12;
  TNode<PrimitiveHeapObject> phi_bb90_13;
  TNode<Null> tmp107;
  if (block90.is_used()) {
    ca_.Bind(&block90, &phi_bb90_9, &phi_bb90_10, &phi_bb90_11, &phi_bb90_12, &phi_bb90_13);
    compiler::CodeAssemblerLabel label108(&ca_);
    tmp107 = Cast_Null_0(state_, TNode<HeapObject>{ca_.UncheckedCast<HeapObject>(tmp90)}, &label108);
    ca_.Goto(&block93, phi_bb90_9, phi_bb90_10, phi_bb90_11, phi_bb90_12, phi_bb90_13);
    if (label108.is_used()) {
      ca_.Bind(&label108);
      ca_.Goto(&block94, phi_bb90_9, phi_bb90_10, phi_bb90_11, phi_bb90_12, phi_bb90_13);
    }
  }

  TNode<FixedArray> phi_bb89_9;
  TNode<IntPtrT> phi_bb89_10;
  TNode<IntPtrT> phi_bb89_11;
  TNode<BoolT> phi_bb89_12;
  TNode<PrimitiveHeapObject> phi_bb89_13;
  if (block89.is_used()) {
    ca_.Bind(&block89, &phi_bb89_9, &phi_bb89_10, &phi_bb89_11, &phi_bb89_12, &phi_bb89_13);
    ca_.Goto(&block20, phi_bb22_7, phi_bb89_9, phi_bb89_10, phi_bb89_11, phi_bb89_12, phi_bb89_13, tmp81);
  }

  TNode<FixedArray> phi_bb94_9;
  TNode<IntPtrT> phi_bb94_10;
  TNode<IntPtrT> phi_bb94_11;
  TNode<BoolT> phi_bb94_12;
  TNode<PrimitiveHeapObject> phi_bb94_13;
  TNode<Boolean> tmp109;
  if (block94.is_used()) {
    ca_.Bind(&block94, &phi_bb94_9, &phi_bb94_10, &phi_bb94_11, &phi_bb94_12, &phi_bb94_13);
    compiler::CodeAssemblerLabel label110(&ca_);
    tmp109 = Cast_Boolean_1(state_, TNode<HeapObject>{ca_.UncheckedCast<HeapObject>(tmp90)}, &label110);
    ca_.Goto(&block97, phi_bb94_9, phi_bb94_10, phi_bb94_11, phi_bb94_12, phi_bb94_13);
    if (label110.is_used()) {
      ca_.Bind(&label110);
      ca_.Goto(&block98, phi_bb94_9, phi_bb94_10, phi_bb94_11, phi_bb94_12, phi_bb94_13);
    }
  }

  TNode<FixedArray> phi_bb93_9;
  TNode<IntPtrT> phi_bb93_10;
  TNode<IntPtrT> phi_bb93_11;
  TNode<BoolT> phi_bb93_12;
  TNode<PrimitiveHeapObject> phi_bb93_13;
  if (block93.is_used()) {
    ca_.Bind(&block93, &phi_bb93_9, &phi_bb93_10, &phi_bb93_11, &phi_bb93_12, &phi_bb93_13);
    ca_.Goto(&block20, phi_bb22_7, phi_bb93_9, phi_bb93_10, phi_bb93_11, phi_bb93_12, phi_bb93_13, tmp81);
  }

  TNode<FixedArray> phi_bb98_9;
  TNode<IntPtrT> phi_bb98_10;
  TNode<IntPtrT> phi_bb98_11;
  TNode<BoolT> phi_bb98_12;
  TNode<PrimitiveHeapObject> phi_bb98_13;
  if (block98.is_used()) {
    ca_.Bind(&block98, &phi_bb98_9, &phi_bb98_10, &phi_bb98_11, &phi_bb98_12, &phi_bb98_13);
    ca_.Goto(label_Bailout);
  }

  TNode<FixedArray> phi_bb97_9;
  TNode<IntPtrT> phi_bb97_10;
  TNode<IntPtrT> phi_bb97_11;
  TNode<BoolT> phi_bb97_12;
  TNode<PrimitiveHeapObject> phi_bb97_13;
  TNode<IntPtrT> tmp111;
  TNode<String> tmp112;
  if (block97.is_used()) {
    ca_.Bind(&block97, &phi_bb97_9, &phi_bb97_10, &phi_bb97_11, &phi_bb97_12, &phi_bb97_13);
    tmp111 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp112 = CodeStubAssembler(state_).LoadReference<String>(CodeStubAssembler::Reference{tmp109, tmp111});
    ca_.Goto(&block83, phi_bb97_9, phi_bb97_10, phi_bb97_11, phi_bb97_12, phi_bb97_13, tmp112);
  }

  TNode<FixedArray> phi_bb83_9;
  TNode<IntPtrT> phi_bb83_10;
  TNode<IntPtrT> phi_bb83_11;
  TNode<BoolT> phi_bb83_12;
  TNode<PrimitiveHeapObject> phi_bb83_13;
  TNode<String> phi_bb83_16;
  if (block83.is_used()) {
    ca_.Bind(&block83, &phi_bb83_9, &phi_bb83_10, &phi_bb83_11, &phi_bb83_12, &phi_bb83_13, &phi_bb83_16);
    ca_.Goto(&block79, phi_bb83_9, phi_bb83_10, phi_bb83_11, phi_bb83_12, phi_bb83_13, phi_bb83_16);
  }

  TNode<FixedArray> phi_bb79_9;
  TNode<IntPtrT> phi_bb79_10;
  TNode<IntPtrT> phi_bb79_11;
  TNode<BoolT> phi_bb79_12;
  TNode<PrimitiveHeapObject> phi_bb79_13;
  TNode<String> phi_bb79_16;
  if (block79.is_used()) {
    ca_.Bind(&block79, &phi_bb79_9, &phi_bb79_10, &phi_bb79_11, &phi_bb79_12, &phi_bb79_13, &phi_bb79_16);
    ca_.Goto(&block73, phi_bb79_9, phi_bb79_10, phi_bb79_11, phi_bb79_12, phi_bb79_13, phi_bb79_16);
  }

  TNode<FixedArray> phi_bb73_9;
  TNode<IntPtrT> phi_bb73_10;
  TNode<IntPtrT> phi_bb73_11;
  TNode<BoolT> phi_bb73_12;
  TNode<PrimitiveHeapObject> phi_bb73_13;
  TNode<String> phi_bb73_16;
  if (block73.is_used()) {
    ca_.Bind(&block73, &phi_bb73_9, &phi_bb73_10, &phi_bb73_11, &phi_bb73_12, &phi_bb73_13, &phi_bb73_16);
    ca_.Goto(&block72, phi_bb73_9, phi_bb73_10, phi_bb73_11, phi_bb73_12, phi_bb73_13, phi_bb73_16);
  }

  TNode<FixedArray> phi_bb72_9;
  TNode<IntPtrT> phi_bb72_10;
  TNode<IntPtrT> phi_bb72_11;
  TNode<BoolT> phi_bb72_12;
  TNode<PrimitiveHeapObject> phi_bb72_13;
  TNode<String> phi_bb72_16;
  if (block72.is_used()) {
    ca_.Bind(&block72, &phi_bb72_9, &phi_bb72_10, &phi_bb72_11, &phi_bb72_12, &phi_bb72_13, &phi_bb72_16);
    ca_.Goto(&block25, phi_bb72_9, phi_bb72_10, phi_bb72_11, phi_bb72_12, phi_bb72_13, tmp81, phi_bb72_16);
  }

  TNode<FixedArray> phi_bb25_9;
  TNode<IntPtrT> phi_bb25_10;
  TNode<IntPtrT> phi_bb25_11;
  TNode<BoolT> phi_bb25_12;
  TNode<PrimitiveHeapObject> phi_bb25_13;
  TNode<UintPtrT> phi_bb25_15;
  TNode<String> phi_bb25_16;
  TNode<IntPtrT> tmp113;
  TNode<BoolT> tmp114;
  if (block25.is_used()) {
    ca_.Bind(&block25, &phi_bb25_9, &phi_bb25_10, &phi_bb25_11, &phi_bb25_12, &phi_bb25_13, &phi_bb25_15, &phi_bb25_16);
    tmp113 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp114 = CodeStubAssembler(state_).WordNotEqual(TNode<IntPtrT>{phi_bb25_10}, TNode<IntPtrT>{tmp113});
    ca_.Branch(tmp114, &block102, std::vector<compiler::Node*>{phi_bb25_9, phi_bb25_10, phi_bb25_11, phi_bb25_12, phi_bb25_13}, &block103, std::vector<compiler::Node*>{phi_bb25_9, phi_bb25_10, phi_bb25_11, phi_bb25_12, phi_bb25_13});
  }

  TNode<FixedArray> phi_bb102_9;
  TNode<IntPtrT> phi_bb102_10;
  TNode<IntPtrT> phi_bb102_11;
  TNode<BoolT> phi_bb102_12;
  TNode<PrimitiveHeapObject> phi_bb102_13;
  TNode<BoolT> tmp115;
  if (block102.is_used()) {
    ca_.Bind(&block102, &phi_bb102_9, &phi_bb102_10, &phi_bb102_11, &phi_bb102_12, &phi_bb102_13);
    tmp115 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block104, phi_bb102_9, phi_bb102_10, phi_bb102_11, phi_bb102_12, phi_bb102_13, tmp115);
  }

  TNode<FixedArray> phi_bb103_9;
  TNode<IntPtrT> phi_bb103_10;
  TNode<IntPtrT> phi_bb103_11;
  TNode<BoolT> phi_bb103_12;
  TNode<PrimitiveHeapObject> phi_bb103_13;
  TNode<BoolT> tmp116;
  if (block103.is_used()) {
    ca_.Bind(&block103, &phi_bb103_9, &phi_bb103_10, &phi_bb103_11, &phi_bb103_12, &phi_bb103_13);
    tmp116 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp21}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{phi_bb103_9});
    ca_.Goto(&block104, phi_bb103_9, phi_bb103_10, phi_bb103_11, phi_bb103_12, phi_bb103_13, tmp116);
  }

  TNode<FixedArray> phi_bb104_9;
  TNode<IntPtrT> phi_bb104_10;
  TNode<IntPtrT> phi_bb104_11;
  TNode<BoolT> phi_bb104_12;
  TNode<PrimitiveHeapObject> phi_bb104_13;
  TNode<BoolT> phi_bb104_26;
  if (block104.is_used()) {
    ca_.Bind(&block104, &phi_bb104_9, &phi_bb104_10, &phi_bb104_11, &phi_bb104_12, &phi_bb104_13, &phi_bb104_26);
    ca_.Branch(phi_bb104_26, &block100, std::vector<compiler::Node*>{phi_bb104_9, phi_bb104_10, phi_bb104_11, phi_bb104_12, phi_bb104_13}, &block101, std::vector<compiler::Node*>{phi_bb104_9, phi_bb104_10, phi_bb104_11, phi_bb104_12, phi_bb104_13});
  }

  TNode<FixedArray> phi_bb101_9;
  TNode<IntPtrT> phi_bb101_10;
  TNode<IntPtrT> phi_bb101_11;
  TNode<BoolT> phi_bb101_12;
  TNode<PrimitiveHeapObject> phi_bb101_13;
  if (block101.is_used()) {
    ca_.Bind(&block101, &phi_bb101_9, &phi_bb101_10, &phi_bb101_11, &phi_bb101_12, &phi_bb101_13);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 184});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index != 1 || this.head == this.chunk' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb100_9;
  TNode<IntPtrT> phi_bb100_10;
  TNode<IntPtrT> phi_bb100_11;
  TNode<BoolT> phi_bb100_12;
  TNode<PrimitiveHeapObject> phi_bb100_13;
  TNode<IntPtrT> tmp117;
  TNode<BoolT> tmp118;
  TNode<IntPtrT> tmp119;
  TNode<BoolT> tmp120;
  TNode<BoolT> tmp121;
  TNode<IntPtrT> tmp122;
  TNode<BoolT> tmp123;
  if (block100.is_used()) {
    ca_.Bind(&block100, &phi_bb100_9, &phi_bb100_10, &phi_bb100_11, &phi_bb100_12, &phi_bb100_13);
    tmp117 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp118 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb100_10}, TNode<IntPtrT>{tmp117});
    tmp119 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp120 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{phi_bb22_7}, TNode<IntPtrT>{tmp119});
    tmp121 = CodeStubAssembler(state_).Word32Or(TNode<BoolT>{tmp118}, TNode<BoolT>{tmp120});
    tmp122 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp123 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb22_7}, TNode<IntPtrT>{tmp122});
    ca_.Branch(tmp123, &block108, std::vector<compiler::Node*>{phi_bb100_9, phi_bb100_10, phi_bb100_11, phi_bb100_12, phi_bb100_13}, &block109, std::vector<compiler::Node*>{phi_bb100_9, phi_bb100_10, phi_bb100_11, phi_bb100_12, phi_bb100_13});
  }

  TNode<FixedArray> phi_bb108_9;
  TNode<IntPtrT> phi_bb108_10;
  TNode<IntPtrT> phi_bb108_11;
  TNode<BoolT> phi_bb108_12;
  TNode<PrimitiveHeapObject> phi_bb108_13;
  TNode<BoolT> tmp124;
  if (block108.is_used()) {
    ca_.Bind(&block108, &phi_bb108_9, &phi_bb108_10, &phi_bb108_11, &phi_bb108_12, &phi_bb108_13);
    tmp124 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block110, phi_bb108_9, phi_bb108_10, phi_bb108_11, phi_bb108_12, phi_bb108_13, tmp124);
  }

  TNode<FixedArray> phi_bb109_9;
  TNode<IntPtrT> phi_bb109_10;
  TNode<IntPtrT> phi_bb109_11;
  TNode<BoolT> phi_bb109_12;
  TNode<PrimitiveHeapObject> phi_bb109_13;
  TNode<IntPtrT> tmp125;
  TNode<BoolT> tmp126;
  if (block109.is_used()) {
    ca_.Bind(&block109, &phi_bb109_9, &phi_bb109_10, &phi_bb109_11, &phi_bb109_12, &phi_bb109_13);
    tmp125 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp126 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{tmp3}, TNode<IntPtrT>{tmp125});
    ca_.Goto(&block110, phi_bb109_9, phi_bb109_10, phi_bb109_11, phi_bb109_12, phi_bb109_13, tmp126);
  }

  TNode<FixedArray> phi_bb110_9;
  TNode<IntPtrT> phi_bb110_10;
  TNode<IntPtrT> phi_bb110_11;
  TNode<BoolT> phi_bb110_12;
  TNode<PrimitiveHeapObject> phi_bb110_13;
  TNode<BoolT> phi_bb110_35;
  if (block110.is_used()) {
    ca_.Bind(&block110, &phi_bb110_9, &phi_bb110_10, &phi_bb110_11, &phi_bb110_12, &phi_bb110_13, &phi_bb110_35);
    ca_.Branch(phi_bb110_35, &block106, std::vector<compiler::Node*>{phi_bb110_9, phi_bb110_10, phi_bb110_11, phi_bb110_12, phi_bb110_13}, &block107, std::vector<compiler::Node*>{phi_bb110_9, phi_bb110_10, phi_bb110_11, phi_bb110_12, phi_bb110_13});
  }

  TNode<FixedArray> phi_bb106_9;
  TNode<IntPtrT> phi_bb106_10;
  TNode<IntPtrT> phi_bb106_11;
  TNode<BoolT> phi_bb106_12;
  TNode<PrimitiveHeapObject> phi_bb106_13;
  if (block106.is_used()) {
    ca_.Bind(&block106, &phi_bb106_9, &phi_bb106_10, &phi_bb106_11, &phi_bb106_12, &phi_bb106_13);
    ca_.Goto(&block105, phi_bb106_9, phi_bb106_10, phi_bb106_11, phi_bb106_12, phi_bb106_13);
  }

  TNode<FixedArray> phi_bb107_9;
  TNode<IntPtrT> phi_bb107_10;
  TNode<IntPtrT> phi_bb107_11;
  TNode<BoolT> phi_bb107_12;
  TNode<PrimitiveHeapObject> phi_bb107_13;
  TNode<IntPtrT> tmp127;
  TNode<IntPtrT> tmp128;
  if (block107.is_used()) {
    ca_.Bind(&block107, &phi_bb107_9, &phi_bb107_10, &phi_bb107_11, &phi_bb107_12, &phi_bb107_13);
    tmp127 = CodeStubAssembler(state_).IntPtrMul(TNode<IntPtrT>{tmp3}, TNode<IntPtrT>{phi_bb22_7});
    tmp128 = AddStringLength_0(state_, TNode<Context>{p_context}, TNode<IntPtrT>{phi_bb107_11}, TNode<IntPtrT>{tmp127});
    ca_.Branch(tmp121, &block111, std::vector<compiler::Node*>{phi_bb107_9, phi_bb107_10, phi_bb107_12, phi_bb107_13}, &block112, std::vector<compiler::Node*>{phi_bb107_9, phi_bb107_10, phi_bb107_12, phi_bb107_13});
  }

  TNode<FixedArray> phi_bb111_9;
  TNode<IntPtrT> phi_bb111_10;
  TNode<BoolT> phi_bb111_12;
  TNode<PrimitiveHeapObject> phi_bb111_13;
  TNode<Smi> tmp129;
  TNode<IntPtrT> tmp130;
  TNode<IntPtrT> tmp131;
  TNode<BoolT> tmp132;
  if (block111.is_used()) {
    ca_.Bind(&block111, &phi_bb111_9, &phi_bb111_10, &phi_bb111_12, &phi_bb111_13);
    tmp129 = Convert_Smi_intptr_0(state_, TNode<IntPtrT>{phi_bb22_7});
    tmp130 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{phi_bb111_9});
    tmp131 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp132 = CodeStubAssembler(state_).IntPtrGreaterThanOrEqual(TNode<IntPtrT>{phi_bb111_10}, TNode<IntPtrT>{tmp131});
    ca_.Branch(tmp132, &block114, std::vector<compiler::Node*>{phi_bb111_9, phi_bb111_10, phi_bb111_12, phi_bb111_13}, &block115, std::vector<compiler::Node*>{phi_bb111_9, phi_bb111_10, phi_bb111_12, phi_bb111_13});
  }

  TNode<FixedArray> phi_bb115_9;
  TNode<IntPtrT> phi_bb115_10;
  TNode<BoolT> phi_bb115_12;
  TNode<PrimitiveHeapObject> phi_bb115_13;
  if (block115.is_used()) {
    ca_.Bind(&block115, &phi_bb115_9, &phi_bb115_10, &phi_bb115_12, &phi_bb115_13);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 238});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index >= 1' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb114_9;
  TNode<IntPtrT> phi_bb114_10;
  TNode<BoolT> phi_bb114_12;
  TNode<PrimitiveHeapObject> phi_bb114_13;
  TNode<BoolT> tmp133;
  if (block114.is_used()) {
    ca_.Bind(&block114, &phi_bb114_9, &phi_bb114_10, &phi_bb114_12, &phi_bb114_13);
    tmp133 = CodeStubAssembler(state_).IntPtrLessThanOrEqual(TNode<IntPtrT>{phi_bb114_10}, TNode<IntPtrT>{tmp130});
    ca_.Branch(tmp133, &block116, std::vector<compiler::Node*>{phi_bb114_9, phi_bb114_10, phi_bb114_12, phi_bb114_13}, &block117, std::vector<compiler::Node*>{phi_bb114_9, phi_bb114_10, phi_bb114_12, phi_bb114_13});
  }

  TNode<FixedArray> phi_bb117_9;
  TNode<IntPtrT> phi_bb117_10;
  TNode<BoolT> phi_bb117_12;
  TNode<PrimitiveHeapObject> phi_bb117_13;
  if (block117.is_used()) {
    ca_.Bind(&block117, &phi_bb117_9, &phi_bb117_10, &phi_bb117_12, &phi_bb117_13);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 239});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index <= length' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb116_9;
  TNode<IntPtrT> phi_bb116_10;
  TNode<BoolT> phi_bb116_12;
  TNode<PrimitiveHeapObject> phi_bb116_13;
  TNode<BoolT> tmp134;
  if (block116.is_used()) {
    ca_.Bind(&block116, &phi_bb116_9, &phi_bb116_10, &phi_bb116_12, &phi_bb116_13);
    tmp134 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb116_10}, TNode<IntPtrT>{tmp130});
    ca_.Branch(tmp134, &block118, std::vector<compiler::Node*>{phi_bb116_9, phi_bb116_10, phi_bb116_12, phi_bb116_13}, &block119, std::vector<compiler::Node*>{phi_bb116_9, phi_bb116_10, phi_bb116_12, phi_bb116_13});
  }

  TNode<FixedArray> phi_bb118_9;
  TNode<IntPtrT> phi_bb118_10;
  TNode<BoolT> phi_bb118_12;
  TNode<PrimitiveHeapObject> phi_bb118_13;
  TNode<Union<HeapObject, TaggedIndex>> tmp135;
  TNode<IntPtrT> tmp136;
  TNode<IntPtrT> tmp137;
  TNode<IntPtrT> tmp138;
  TNode<IntPtrT> tmp139;
  TNode<UintPtrT> tmp140;
  TNode<UintPtrT> tmp141;
  TNode<BoolT> tmp142;
  if (block118.is_used()) {
    ca_.Bind(&block118, &phi_bb118_9, &phi_bb118_10, &phi_bb118_12, &phi_bb118_13);
    std::tie(tmp135, tmp136, tmp137) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb118_9}).Flatten();
    tmp138 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp139 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb118_10}, TNode<IntPtrT>{tmp138});
    tmp140 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb118_10});
    tmp141 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp137});
    tmp142 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp140}, TNode<UintPtrT>{tmp141});
    ca_.Branch(tmp142, &block125, std::vector<compiler::Node*>{phi_bb118_9, phi_bb118_12, phi_bb118_13, phi_bb118_9, phi_bb118_10, phi_bb118_10, phi_bb118_10, phi_bb118_10}, &block126, std::vector<compiler::Node*>{phi_bb118_9, phi_bb118_12, phi_bb118_13, phi_bb118_9, phi_bb118_10, phi_bb118_10, phi_bb118_10, phi_bb118_10});
  }

  TNode<FixedArray> phi_bb125_9;
  TNode<BoolT> phi_bb125_12;
  TNode<PrimitiveHeapObject> phi_bb125_13;
  TNode<FixedArray> phi_bb125_39;
  TNode<IntPtrT> phi_bb125_43;
  TNode<IntPtrT> phi_bb125_44;
  TNode<IntPtrT> phi_bb125_48;
  TNode<IntPtrT> phi_bb125_49;
  TNode<IntPtrT> tmp143;
  TNode<IntPtrT> tmp144;
  TNode<Union<HeapObject, TaggedIndex>> tmp145;
  TNode<IntPtrT> tmp146;
  if (block125.is_used()) {
    ca_.Bind(&block125, &phi_bb125_9, &phi_bb125_12, &phi_bb125_13, &phi_bb125_39, &phi_bb125_43, &phi_bb125_44, &phi_bb125_48, &phi_bb125_49);
    tmp143 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb125_49});
    tmp144 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp136}, TNode<IntPtrT>{tmp143});
    std::tie(tmp145, tmp146) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp135}, TNode<IntPtrT>{tmp144}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp145, tmp146}, tmp129);
    ca_.Goto(&block120, phi_bb125_9, tmp139, phi_bb125_12, phi_bb125_13);
  }

  TNode<FixedArray> phi_bb126_9;
  TNode<BoolT> phi_bb126_12;
  TNode<PrimitiveHeapObject> phi_bb126_13;
  TNode<FixedArray> phi_bb126_39;
  TNode<IntPtrT> phi_bb126_43;
  TNode<IntPtrT> phi_bb126_44;
  TNode<IntPtrT> phi_bb126_48;
  TNode<IntPtrT> phi_bb126_49;
  if (block126.is_used()) {
    ca_.Bind(&block126, &phi_bb126_9, &phi_bb126_12, &phi_bb126_13, &phi_bb126_39, &phi_bb126_43, &phi_bb126_44, &phi_bb126_48, &phi_bb126_49);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb119_9;
  TNode<IntPtrT> phi_bb119_10;
  TNode<BoolT> phi_bb119_12;
  TNode<PrimitiveHeapObject> phi_bb119_13;
  TNode<IntPtrT> tmp147;
  TNode<IntPtrT> tmp148;
  TNode<BoolT> tmp149;
  if (block119.is_used()) {
    ca_.Bind(&block119, &phi_bb119_9, &phi_bb119_10, &phi_bb119_12, &phi_bb119_13);
    tmp147 = CodeStubAssembler(state_).CalculateNewElementsCapacity(TNode<IntPtrT>{tmp130});
    tmp148 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    tmp149 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{tmp147}, TNode<IntPtrT>{tmp148});
    ca_.Branch(tmp149, &block129, std::vector<compiler::Node*>{phi_bb119_9, phi_bb119_10, phi_bb119_12, phi_bb119_13}, &block130, std::vector<compiler::Node*>{phi_bb119_9, phi_bb119_10, phi_bb119_12, phi_bb119_13});
  }

  TNode<FixedArray> phi_bb129_9;
  TNode<IntPtrT> phi_bb129_10;
  TNode<BoolT> phi_bb129_12;
  TNode<PrimitiveHeapObject> phi_bb129_13;
  TNode<IntPtrT> tmp150;
  if (block129.is_used()) {
    ca_.Bind(&block129, &phi_bb129_9, &phi_bb129_10, &phi_bb129_12, &phi_bb129_13);
    tmp150 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    ca_.Goto(&block131, phi_bb129_9, phi_bb129_10, phi_bb129_12, phi_bb129_13, tmp150);
  }

  TNode<FixedArray> phi_bb130_9;
  TNode<IntPtrT> phi_bb130_10;
  TNode<BoolT> phi_bb130_12;
  TNode<PrimitiveHeapObject> phi_bb130_13;
  if (block130.is_used()) {
    ca_.Bind(&block130, &phi_bb130_9, &phi_bb130_10, &phi_bb130_12, &phi_bb130_13);
    ca_.Goto(&block131, phi_bb130_9, phi_bb130_10, phi_bb130_12, phi_bb130_13, tmp147);
  }

  TNode<FixedArray> phi_bb131_9;
  TNode<IntPtrT> phi_bb131_10;
  TNode<BoolT> phi_bb131_12;
  TNode<PrimitiveHeapObject> phi_bb131_13;
  TNode<IntPtrT> phi_bb131_40;
  TNode<IntPtrT> tmp151;
  TNode<BoolT> tmp152;
  if (block131.is_used()) {
    ca_.Bind(&block131, &phi_bb131_9, &phi_bb131_10, &phi_bb131_12, &phi_bb131_13, &phi_bb131_40);
    tmp151 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp152 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{phi_bb131_40}, TNode<IntPtrT>{tmp151});
    ca_.Branch(tmp152, &block133, std::vector<compiler::Node*>{phi_bb131_9, phi_bb131_10, phi_bb131_12, phi_bb131_13}, &block134, std::vector<compiler::Node*>{phi_bb131_9, phi_bb131_10, phi_bb131_12, phi_bb131_13});
  }

  TNode<FixedArray> phi_bb134_9;
  TNode<IntPtrT> phi_bb134_10;
  TNode<BoolT> phi_bb134_12;
  TNode<PrimitiveHeapObject> phi_bb134_13;
  if (block134.is_used()) {
    ca_.Bind(&block134, &phi_bb134_9, &phi_bb134_10, &phi_bb134_12, &phi_bb134_13);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 248});
      CodeStubAssembler(state_).FailAssert("Torque assert 'cappedNewChunkLength > 0' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb133_9;
  TNode<IntPtrT> phi_bb133_10;
  TNode<BoolT> phi_bb133_12;
  TNode<PrimitiveHeapObject> phi_bb133_13;
  TNode<FixedArray> tmp153;
  TNode<Union<HeapObject, TaggedIndex>> tmp154;
  TNode<IntPtrT> tmp155;
  TNode<IntPtrT> tmp156;
  TNode<UintPtrT> tmp157;
  TNode<IntPtrT> tmp158;
  TNode<UintPtrT> tmp159;
  TNode<UintPtrT> tmp160;
  TNode<BoolT> tmp161;
  if (block133.is_used()) {
    ca_.Bind(&block133, &phi_bb133_9, &phi_bb133_10, &phi_bb133_12, &phi_bb133_13);
    tmp153 = CodeStubAssembler(state_).AllocateZeroedFixedArray(TNode<IntPtrT>{phi_bb131_40});
    std::tie(tmp154, tmp155, tmp156) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb133_9}).Flatten();
    tmp157 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp158 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp157});
    tmp159 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp158});
    tmp160 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp156});
    tmp161 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp159}, TNode<UintPtrT>{tmp160});
    ca_.Branch(tmp161, &block140, std::vector<compiler::Node*>{phi_bb133_9, phi_bb133_10, phi_bb133_12, phi_bb133_13, phi_bb133_9}, &block141, std::vector<compiler::Node*>{phi_bb133_9, phi_bb133_10, phi_bb133_12, phi_bb133_13, phi_bb133_9});
  }

  TNode<FixedArray> phi_bb140_9;
  TNode<IntPtrT> phi_bb140_10;
  TNode<BoolT> phi_bb140_12;
  TNode<PrimitiveHeapObject> phi_bb140_13;
  TNode<FixedArray> phi_bb140_42;
  TNode<IntPtrT> tmp162;
  TNode<IntPtrT> tmp163;
  TNode<Union<HeapObject, TaggedIndex>> tmp164;
  TNode<IntPtrT> tmp165;
  TNode<Union<HeapObject, TaggedIndex>> tmp166;
  TNode<IntPtrT> tmp167;
  TNode<IntPtrT> tmp168;
  TNode<UintPtrT> tmp169;
  TNode<IntPtrT> tmp170;
  TNode<UintPtrT> tmp171;
  TNode<UintPtrT> tmp172;
  TNode<BoolT> tmp173;
  if (block140.is_used()) {
    ca_.Bind(&block140, &phi_bb140_9, &phi_bb140_10, &phi_bb140_12, &phi_bb140_13, &phi_bb140_42);
    tmp162 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp158});
    tmp163 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp155}, TNode<IntPtrT>{tmp162});
    std::tie(tmp164, tmp165) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp154}, TNode<IntPtrT>{tmp163}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp164, tmp165}, tmp153);
    std::tie(tmp166, tmp167, tmp168) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp153}).Flatten();
    tmp169 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp170 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp169});
    tmp171 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp170});
    tmp172 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp168});
    tmp173 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp171}, TNode<UintPtrT>{tmp172});
    ca_.Branch(tmp173, &block149, std::vector<compiler::Node*>{phi_bb140_9, phi_bb140_10, phi_bb140_12, phi_bb140_13}, &block150, std::vector<compiler::Node*>{phi_bb140_9, phi_bb140_10, phi_bb140_12, phi_bb140_13});
  }

  TNode<FixedArray> phi_bb141_9;
  TNode<IntPtrT> phi_bb141_10;
  TNode<BoolT> phi_bb141_12;
  TNode<PrimitiveHeapObject> phi_bb141_13;
  TNode<FixedArray> phi_bb141_42;
  if (block141.is_used()) {
    ca_.Bind(&block141, &phi_bb141_9, &phi_bb141_10, &phi_bb141_12, &phi_bb141_13, &phi_bb141_42);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb149_9;
  TNode<IntPtrT> phi_bb149_10;
  TNode<BoolT> phi_bb149_12;
  TNode<PrimitiveHeapObject> phi_bb149_13;
  TNode<IntPtrT> tmp174;
  TNode<IntPtrT> tmp175;
  TNode<Union<HeapObject, TaggedIndex>> tmp176;
  TNode<IntPtrT> tmp177;
  TNode<Undefined> tmp178;
  TNode<Union<HeapObject, TaggedIndex>> tmp179;
  TNode<IntPtrT> tmp180;
  TNode<IntPtrT> tmp181;
  TNode<UintPtrT> tmp182;
  TNode<IntPtrT> tmp183;
  TNode<UintPtrT> tmp184;
  TNode<UintPtrT> tmp185;
  TNode<BoolT> tmp186;
  if (block149.is_used()) {
    ca_.Bind(&block149, &phi_bb149_9, &phi_bb149_10, &phi_bb149_12, &phi_bb149_13);
    tmp174 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp170});
    tmp175 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp167}, TNode<IntPtrT>{tmp174});
    std::tie(tmp176, tmp177) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp166}, TNode<IntPtrT>{tmp175}).Flatten();
    tmp178 = Undefined_0(state_);
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp176, tmp177}, tmp178);
    std::tie(tmp179, tmp180, tmp181) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp153}).Flatten();
    tmp182 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp183 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp182});
    tmp184 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp183});
    tmp185 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp181});
    tmp186 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp184}, TNode<UintPtrT>{tmp185});
    ca_.Branch(tmp186, &block158, std::vector<compiler::Node*>{phi_bb149_9, phi_bb149_10, phi_bb149_12, phi_bb149_13}, &block159, std::vector<compiler::Node*>{phi_bb149_9, phi_bb149_10, phi_bb149_12, phi_bb149_13});
  }

  TNode<FixedArray> phi_bb150_9;
  TNode<IntPtrT> phi_bb150_10;
  TNode<BoolT> phi_bb150_12;
  TNode<PrimitiveHeapObject> phi_bb150_13;
  if (block150.is_used()) {
    ca_.Bind(&block150, &phi_bb150_9, &phi_bb150_10, &phi_bb150_12, &phi_bb150_13);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb158_9;
  TNode<IntPtrT> phi_bb158_10;
  TNode<BoolT> phi_bb158_12;
  TNode<PrimitiveHeapObject> phi_bb158_13;
  TNode<IntPtrT> tmp187;
  TNode<IntPtrT> tmp188;
  TNode<Union<HeapObject, TaggedIndex>> tmp189;
  TNode<IntPtrT> tmp190;
  TNode<IntPtrT> tmp191;
  if (block158.is_used()) {
    ca_.Bind(&block158, &phi_bb158_9, &phi_bb158_10, &phi_bb158_12, &phi_bb158_13);
    tmp187 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp183});
    tmp188 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp180}, TNode<IntPtrT>{tmp187});
    std::tie(tmp189, tmp190) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp179}, TNode<IntPtrT>{tmp188}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp189, tmp190}, tmp129);
    tmp191 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    ca_.Goto(&block120, tmp153, tmp191, phi_bb158_12, phi_bb158_13);
  }

  TNode<FixedArray> phi_bb159_9;
  TNode<IntPtrT> phi_bb159_10;
  TNode<BoolT> phi_bb159_12;
  TNode<PrimitiveHeapObject> phi_bb159_13;
  if (block159.is_used()) {
    ca_.Bind(&block159, &phi_bb159_9, &phi_bb159_10, &phi_bb159_12, &phi_bb159_13);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb120_9;
  TNode<IntPtrT> phi_bb120_10;
  TNode<BoolT> phi_bb120_12;
  TNode<PrimitiveHeapObject> phi_bb120_13;
  TNode<Null> tmp192;
  if (block120.is_used()) {
    ca_.Bind(&block120, &phi_bb120_9, &phi_bb120_10, &phi_bb120_12, &phi_bb120_13);
    tmp192 = Null_0(state_);
    ca_.Goto(&block112, phi_bb120_9, phi_bb120_10, phi_bb120_12, tmp192);
  }

  TNode<FixedArray> phi_bb112_9;
  TNode<IntPtrT> phi_bb112_10;
  TNode<BoolT> phi_bb112_12;
  TNode<PrimitiveHeapObject> phi_bb112_13;
  if (block112.is_used()) {
    ca_.Bind(&block112, &phi_bb112_9, &phi_bb112_10, &phi_bb112_12, &phi_bb112_13);
    ca_.Goto(&block105, phi_bb112_9, phi_bb112_10, tmp128, phi_bb112_12, phi_bb112_13);
  }

  TNode<FixedArray> phi_bb105_9;
  TNode<IntPtrT> phi_bb105_10;
  TNode<IntPtrT> phi_bb105_11;
  TNode<BoolT> phi_bb105_12;
  TNode<PrimitiveHeapObject> phi_bb105_13;
  TNode<IntPtrT> tmp193;
  TNode<IntPtrT> tmp194;
  TNode<BoolT> tmp195;
  if (block105.is_used()) {
    ca_.Bind(&block105, &phi_bb105_9, &phi_bb105_10, &phi_bb105_11, &phi_bb105_12, &phi_bb105_13);
    tmp193 = CodeStubAssembler(state_).LoadStringLengthAsWord(TNode<String>{phi_bb25_16});
    tmp194 = AddStringLength_0(state_, TNode<Context>{p_context}, TNode<IntPtrT>{phi_bb105_11}, TNode<IntPtrT>{tmp193});
    tmp195 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{phi_bb25_16}, TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{phi_bb105_13});
    ca_.Branch(tmp195, &block162, std::vector<compiler::Node*>{phi_bb105_9, phi_bb105_10, phi_bb105_12, phi_bb105_13}, &block163, std::vector<compiler::Node*>{phi_bb105_9, phi_bb105_10, phi_bb105_12, phi_bb105_13});
  }

  TNode<FixedArray> phi_bb162_9;
  TNode<IntPtrT> phi_bb162_10;
  TNode<BoolT> phi_bb162_12;
  TNode<PrimitiveHeapObject> phi_bb162_13;
  TNode<IntPtrT> tmp196;
  TNode<BoolT> tmp197;
  if (block162.is_used()) {
    ca_.Bind(&block162, &phi_bb162_9, &phi_bb162_10, &phi_bb162_12, &phi_bb162_13);
    tmp196 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp197 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{phi_bb162_10}, TNode<IntPtrT>{tmp196});
    ca_.Branch(tmp197, &block166, std::vector<compiler::Node*>{phi_bb162_9, phi_bb162_10, phi_bb162_12, phi_bb162_13}, &block167, std::vector<compiler::Node*>{phi_bb162_9, phi_bb162_10, phi_bb162_12, phi_bb162_13});
  }

  TNode<FixedArray> phi_bb167_9;
  TNode<IntPtrT> phi_bb167_10;
  TNode<BoolT> phi_bb167_12;
  TNode<PrimitiveHeapObject> phi_bb167_13;
  if (block167.is_used()) {
    ca_.Bind(&block167, &phi_bb167_9, &phi_bb167_10, &phi_bb167_12, &phi_bb167_13);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 218});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index > 1' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb166_9;
  TNode<IntPtrT> phi_bb166_10;
  TNode<BoolT> phi_bb166_12;
  TNode<PrimitiveHeapObject> phi_bb166_13;
  TNode<Union<HeapObject, TaggedIndex>> tmp198;
  TNode<IntPtrT> tmp199;
  TNode<IntPtrT> tmp200;
  TNode<IntPtrT> tmp201;
  TNode<IntPtrT> tmp202;
  TNode<UintPtrT> tmp203;
  TNode<UintPtrT> tmp204;
  TNode<BoolT> tmp205;
  if (block166.is_used()) {
    ca_.Bind(&block166, &phi_bb166_9, &phi_bb166_10, &phi_bb166_12, &phi_bb166_13);
    std::tie(tmp198, tmp199, tmp200) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb166_9}).Flatten();
    tmp201 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp202 = CodeStubAssembler(state_).IntPtrSub(TNode<IntPtrT>{phi_bb166_10}, TNode<IntPtrT>{tmp201});
    tmp203 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp202});
    tmp204 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp200});
    tmp205 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp203}, TNode<UintPtrT>{tmp204});
    ca_.Branch(tmp205, &block172, std::vector<compiler::Node*>{phi_bb166_9, phi_bb166_10, phi_bb166_12, phi_bb166_13, phi_bb166_9}, &block173, std::vector<compiler::Node*>{phi_bb166_9, phi_bb166_10, phi_bb166_12, phi_bb166_13, phi_bb166_9});
  }

  TNode<FixedArray> phi_bb172_9;
  TNode<IntPtrT> phi_bb172_10;
  TNode<BoolT> phi_bb172_12;
  TNode<PrimitiveHeapObject> phi_bb172_13;
  TNode<FixedArray> phi_bb172_26;
  TNode<IntPtrT> tmp206;
  TNode<IntPtrT> tmp207;
  TNode<Union<HeapObject, TaggedIndex>> tmp208;
  TNode<IntPtrT> tmp209;
  TNode<Object> tmp210;
  TNode<HeapObject> tmp211;
  if (block172.is_used()) {
    ca_.Bind(&block172, &phi_bb172_9, &phi_bb172_10, &phi_bb172_12, &phi_bb172_13, &phi_bb172_26);
    tmp206 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp202});
    tmp207 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp199}, TNode<IntPtrT>{tmp206});
    std::tie(tmp208, tmp209) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp198}, TNode<IntPtrT>{tmp207}).Flatten();
    tmp210 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp208, tmp209});
    compiler::CodeAssemblerLabel label212(&ca_);
    tmp211 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{tmp210}, &label212);
    ca_.Goto(&block179, phi_bb172_9, phi_bb172_10, phi_bb172_12, phi_bb172_13);
    if (label212.is_used()) {
      ca_.Bind(&label212);
      ca_.Goto(&block180, phi_bb172_9, phi_bb172_10, phi_bb172_12, phi_bb172_13);
    }
  }

  TNode<FixedArray> phi_bb173_9;
  TNode<IntPtrT> phi_bb173_10;
  TNode<BoolT> phi_bb173_12;
  TNode<PrimitiveHeapObject> phi_bb173_13;
  TNode<FixedArray> phi_bb173_26;
  if (block173.is_used()) {
    ca_.Bind(&block173, &phi_bb173_9, &phi_bb173_10, &phi_bb173_12, &phi_bb173_13, &phi_bb173_26);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb180_9;
  TNode<IntPtrT> phi_bb180_10;
  TNode<BoolT> phi_bb180_12;
  TNode<PrimitiveHeapObject> phi_bb180_13;
  if (block180.is_used()) {
    ca_.Bind(&block180, &phi_bb180_9, &phi_bb180_10, &phi_bb180_12, &phi_bb180_13);
    ca_.Goto(&block177, phi_bb180_9, phi_bb180_10, phi_bb180_12, phi_bb180_13);
  }

  TNode<FixedArray> phi_bb179_9;
  TNode<IntPtrT> phi_bb179_10;
  TNode<BoolT> phi_bb179_12;
  TNode<PrimitiveHeapObject> phi_bb179_13;
  TNode<String> tmp213;
  if (block179.is_used()) {
    ca_.Bind(&block179, &phi_bb179_9, &phi_bb179_10, &phi_bb179_12, &phi_bb179_13);
    compiler::CodeAssemblerLabel label214(&ca_);
    tmp213 = Cast_String_0(state_, TNode<HeapObject>{tmp211}, &label214);
    ca_.Goto(&block181, phi_bb179_9, phi_bb179_10, phi_bb179_12, phi_bb179_13);
    if (label214.is_used()) {
      ca_.Bind(&label214);
      ca_.Goto(&block182, phi_bb179_9, phi_bb179_10, phi_bb179_12, phi_bb179_13);
    }
  }

  TNode<FixedArray> phi_bb182_9;
  TNode<IntPtrT> phi_bb182_10;
  TNode<BoolT> phi_bb182_12;
  TNode<PrimitiveHeapObject> phi_bb182_13;
  if (block182.is_used()) {
    ca_.Bind(&block182, &phi_bb182_9, &phi_bb182_10, &phi_bb182_12, &phi_bb182_13);
    ca_.Goto(&block177, phi_bb182_9, phi_bb182_10, phi_bb182_12, phi_bb182_13);
  }

  TNode<FixedArray> phi_bb181_9;
  TNode<IntPtrT> phi_bb181_10;
  TNode<BoolT> phi_bb181_12;
  TNode<PrimitiveHeapObject> phi_bb181_13;
  TNode<Smi> tmp215;
  TNode<IntPtrT> tmp216;
  TNode<IntPtrT> tmp217;
  TNode<BoolT> tmp218;
  if (block181.is_used()) {
    ca_.Bind(&block181, &phi_bb181_9, &phi_bb181_10, &phi_bb181_12, &phi_bb181_13);
    tmp215 = SmiConstant_0(state_, IntegerLiteral(true, 0x1ull));
    tmp216 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{phi_bb181_9});
    tmp217 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp218 = CodeStubAssembler(state_).IntPtrGreaterThanOrEqual(TNode<IntPtrT>{phi_bb181_10}, TNode<IntPtrT>{tmp217});
    ca_.Branch(tmp218, &block184, std::vector<compiler::Node*>{phi_bb181_9, phi_bb181_10, phi_bb181_12, phi_bb181_13}, &block185, std::vector<compiler::Node*>{phi_bb181_9, phi_bb181_10, phi_bb181_12, phi_bb181_13});
  }

  TNode<FixedArray> phi_bb185_9;
  TNode<IntPtrT> phi_bb185_10;
  TNode<BoolT> phi_bb185_12;
  TNode<PrimitiveHeapObject> phi_bb185_13;
  if (block185.is_used()) {
    ca_.Bind(&block185, &phi_bb185_9, &phi_bb185_10, &phi_bb185_12, &phi_bb185_13);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 238});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index >= 1' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb184_9;
  TNode<IntPtrT> phi_bb184_10;
  TNode<BoolT> phi_bb184_12;
  TNode<PrimitiveHeapObject> phi_bb184_13;
  TNode<BoolT> tmp219;
  if (block184.is_used()) {
    ca_.Bind(&block184, &phi_bb184_9, &phi_bb184_10, &phi_bb184_12, &phi_bb184_13);
    tmp219 = CodeStubAssembler(state_).IntPtrLessThanOrEqual(TNode<IntPtrT>{phi_bb184_10}, TNode<IntPtrT>{tmp216});
    ca_.Branch(tmp219, &block186, std::vector<compiler::Node*>{phi_bb184_9, phi_bb184_10, phi_bb184_12, phi_bb184_13}, &block187, std::vector<compiler::Node*>{phi_bb184_9, phi_bb184_10, phi_bb184_12, phi_bb184_13});
  }

  TNode<FixedArray> phi_bb187_9;
  TNode<IntPtrT> phi_bb187_10;
  TNode<BoolT> phi_bb187_12;
  TNode<PrimitiveHeapObject> phi_bb187_13;
  if (block187.is_used()) {
    ca_.Bind(&block187, &phi_bb187_9, &phi_bb187_10, &phi_bb187_12, &phi_bb187_13);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 239});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index <= length' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb186_9;
  TNode<IntPtrT> phi_bb186_10;
  TNode<BoolT> phi_bb186_12;
  TNode<PrimitiveHeapObject> phi_bb186_13;
  TNode<BoolT> tmp220;
  if (block186.is_used()) {
    ca_.Bind(&block186, &phi_bb186_9, &phi_bb186_10, &phi_bb186_12, &phi_bb186_13);
    tmp220 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb186_10}, TNode<IntPtrT>{tmp216});
    ca_.Branch(tmp220, &block188, std::vector<compiler::Node*>{phi_bb186_9, phi_bb186_10, phi_bb186_12, phi_bb186_13}, &block189, std::vector<compiler::Node*>{phi_bb186_9, phi_bb186_10, phi_bb186_12, phi_bb186_13});
  }

  TNode<FixedArray> phi_bb188_9;
  TNode<IntPtrT> phi_bb188_10;
  TNode<BoolT> phi_bb188_12;
  TNode<PrimitiveHeapObject> phi_bb188_13;
  TNode<Union<HeapObject, TaggedIndex>> tmp221;
  TNode<IntPtrT> tmp222;
  TNode<IntPtrT> tmp223;
  TNode<IntPtrT> tmp224;
  TNode<IntPtrT> tmp225;
  TNode<UintPtrT> tmp226;
  TNode<UintPtrT> tmp227;
  TNode<BoolT> tmp228;
  if (block188.is_used()) {
    ca_.Bind(&block188, &phi_bb188_9, &phi_bb188_10, &phi_bb188_12, &phi_bb188_13);
    std::tie(tmp221, tmp222, tmp223) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb188_9}).Flatten();
    tmp224 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp225 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb188_10}, TNode<IntPtrT>{tmp224});
    tmp226 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb188_10});
    tmp227 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp223});
    tmp228 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp226}, TNode<UintPtrT>{tmp227});
    ca_.Branch(tmp228, &block195, std::vector<compiler::Node*>{phi_bb188_9, phi_bb188_12, phi_bb188_13, phi_bb188_9, phi_bb188_10, phi_bb188_10, phi_bb188_10, phi_bb188_10}, &block196, std::vector<compiler::Node*>{phi_bb188_9, phi_bb188_12, phi_bb188_13, phi_bb188_9, phi_bb188_10, phi_bb188_10, phi_bb188_10, phi_bb188_10});
  }

  TNode<FixedArray> phi_bb195_9;
  TNode<BoolT> phi_bb195_12;
  TNode<PrimitiveHeapObject> phi_bb195_13;
  TNode<FixedArray> phi_bb195_31;
  TNode<IntPtrT> phi_bb195_35;
  TNode<IntPtrT> phi_bb195_36;
  TNode<IntPtrT> phi_bb195_40;
  TNode<IntPtrT> phi_bb195_41;
  TNode<IntPtrT> tmp229;
  TNode<IntPtrT> tmp230;
  TNode<Union<HeapObject, TaggedIndex>> tmp231;
  TNode<IntPtrT> tmp232;
  if (block195.is_used()) {
    ca_.Bind(&block195, &phi_bb195_9, &phi_bb195_12, &phi_bb195_13, &phi_bb195_31, &phi_bb195_35, &phi_bb195_36, &phi_bb195_40, &phi_bb195_41);
    tmp229 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb195_41});
    tmp230 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp222}, TNode<IntPtrT>{tmp229});
    std::tie(tmp231, tmp232) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp221}, TNode<IntPtrT>{tmp230}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp231, tmp232}, tmp215);
    ca_.Goto(&block190, phi_bb195_9, tmp225, phi_bb195_12, phi_bb195_13);
  }

  TNode<FixedArray> phi_bb196_9;
  TNode<BoolT> phi_bb196_12;
  TNode<PrimitiveHeapObject> phi_bb196_13;
  TNode<FixedArray> phi_bb196_31;
  TNode<IntPtrT> phi_bb196_35;
  TNode<IntPtrT> phi_bb196_36;
  TNode<IntPtrT> phi_bb196_40;
  TNode<IntPtrT> phi_bb196_41;
  if (block196.is_used()) {
    ca_.Bind(&block196, &phi_bb196_9, &phi_bb196_12, &phi_bb196_13, &phi_bb196_31, &phi_bb196_35, &phi_bb196_36, &phi_bb196_40, &phi_bb196_41);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb189_9;
  TNode<IntPtrT> phi_bb189_10;
  TNode<BoolT> phi_bb189_12;
  TNode<PrimitiveHeapObject> phi_bb189_13;
  TNode<IntPtrT> tmp233;
  TNode<IntPtrT> tmp234;
  TNode<BoolT> tmp235;
  if (block189.is_used()) {
    ca_.Bind(&block189, &phi_bb189_9, &phi_bb189_10, &phi_bb189_12, &phi_bb189_13);
    tmp233 = CodeStubAssembler(state_).CalculateNewElementsCapacity(TNode<IntPtrT>{tmp216});
    tmp234 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    tmp235 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{tmp233}, TNode<IntPtrT>{tmp234});
    ca_.Branch(tmp235, &block199, std::vector<compiler::Node*>{phi_bb189_9, phi_bb189_10, phi_bb189_12, phi_bb189_13}, &block200, std::vector<compiler::Node*>{phi_bb189_9, phi_bb189_10, phi_bb189_12, phi_bb189_13});
  }

  TNode<FixedArray> phi_bb199_9;
  TNode<IntPtrT> phi_bb199_10;
  TNode<BoolT> phi_bb199_12;
  TNode<PrimitiveHeapObject> phi_bb199_13;
  TNode<IntPtrT> tmp236;
  if (block199.is_used()) {
    ca_.Bind(&block199, &phi_bb199_9, &phi_bb199_10, &phi_bb199_12, &phi_bb199_13);
    tmp236 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    ca_.Goto(&block201, phi_bb199_9, phi_bb199_10, phi_bb199_12, phi_bb199_13, tmp236);
  }

  TNode<FixedArray> phi_bb200_9;
  TNode<IntPtrT> phi_bb200_10;
  TNode<BoolT> phi_bb200_12;
  TNode<PrimitiveHeapObject> phi_bb200_13;
  if (block200.is_used()) {
    ca_.Bind(&block200, &phi_bb200_9, &phi_bb200_10, &phi_bb200_12, &phi_bb200_13);
    ca_.Goto(&block201, phi_bb200_9, phi_bb200_10, phi_bb200_12, phi_bb200_13, tmp233);
  }

  TNode<FixedArray> phi_bb201_9;
  TNode<IntPtrT> phi_bb201_10;
  TNode<BoolT> phi_bb201_12;
  TNode<PrimitiveHeapObject> phi_bb201_13;
  TNode<IntPtrT> phi_bb201_32;
  TNode<IntPtrT> tmp237;
  TNode<BoolT> tmp238;
  if (block201.is_used()) {
    ca_.Bind(&block201, &phi_bb201_9, &phi_bb201_10, &phi_bb201_12, &phi_bb201_13, &phi_bb201_32);
    tmp237 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp238 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{phi_bb201_32}, TNode<IntPtrT>{tmp237});
    ca_.Branch(tmp238, &block203, std::vector<compiler::Node*>{phi_bb201_9, phi_bb201_10, phi_bb201_12, phi_bb201_13}, &block204, std::vector<compiler::Node*>{phi_bb201_9, phi_bb201_10, phi_bb201_12, phi_bb201_13});
  }

  TNode<FixedArray> phi_bb204_9;
  TNode<IntPtrT> phi_bb204_10;
  TNode<BoolT> phi_bb204_12;
  TNode<PrimitiveHeapObject> phi_bb204_13;
  if (block204.is_used()) {
    ca_.Bind(&block204, &phi_bb204_9, &phi_bb204_10, &phi_bb204_12, &phi_bb204_13);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 248});
      CodeStubAssembler(state_).FailAssert("Torque assert 'cappedNewChunkLength > 0' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb203_9;
  TNode<IntPtrT> phi_bb203_10;
  TNode<BoolT> phi_bb203_12;
  TNode<PrimitiveHeapObject> phi_bb203_13;
  TNode<FixedArray> tmp239;
  TNode<Union<HeapObject, TaggedIndex>> tmp240;
  TNode<IntPtrT> tmp241;
  TNode<IntPtrT> tmp242;
  TNode<UintPtrT> tmp243;
  TNode<IntPtrT> tmp244;
  TNode<UintPtrT> tmp245;
  TNode<UintPtrT> tmp246;
  TNode<BoolT> tmp247;
  if (block203.is_used()) {
    ca_.Bind(&block203, &phi_bb203_9, &phi_bb203_10, &phi_bb203_12, &phi_bb203_13);
    tmp239 = CodeStubAssembler(state_).AllocateZeroedFixedArray(TNode<IntPtrT>{phi_bb201_32});
    std::tie(tmp240, tmp241, tmp242) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb203_9}).Flatten();
    tmp243 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp244 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp243});
    tmp245 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp244});
    tmp246 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp242});
    tmp247 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp245}, TNode<UintPtrT>{tmp246});
    ca_.Branch(tmp247, &block210, std::vector<compiler::Node*>{phi_bb203_9, phi_bb203_10, phi_bb203_12, phi_bb203_13, phi_bb203_9}, &block211, std::vector<compiler::Node*>{phi_bb203_9, phi_bb203_10, phi_bb203_12, phi_bb203_13, phi_bb203_9});
  }

  TNode<FixedArray> phi_bb210_9;
  TNode<IntPtrT> phi_bb210_10;
  TNode<BoolT> phi_bb210_12;
  TNode<PrimitiveHeapObject> phi_bb210_13;
  TNode<FixedArray> phi_bb210_34;
  TNode<IntPtrT> tmp248;
  TNode<IntPtrT> tmp249;
  TNode<Union<HeapObject, TaggedIndex>> tmp250;
  TNode<IntPtrT> tmp251;
  TNode<Union<HeapObject, TaggedIndex>> tmp252;
  TNode<IntPtrT> tmp253;
  TNode<IntPtrT> tmp254;
  TNode<UintPtrT> tmp255;
  TNode<IntPtrT> tmp256;
  TNode<UintPtrT> tmp257;
  TNode<UintPtrT> tmp258;
  TNode<BoolT> tmp259;
  if (block210.is_used()) {
    ca_.Bind(&block210, &phi_bb210_9, &phi_bb210_10, &phi_bb210_12, &phi_bb210_13, &phi_bb210_34);
    tmp248 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp244});
    tmp249 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp241}, TNode<IntPtrT>{tmp248});
    std::tie(tmp250, tmp251) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp240}, TNode<IntPtrT>{tmp249}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp250, tmp251}, tmp239);
    std::tie(tmp252, tmp253, tmp254) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp239}).Flatten();
    tmp255 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp256 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp255});
    tmp257 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp256});
    tmp258 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp254});
    tmp259 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp257}, TNode<UintPtrT>{tmp258});
    ca_.Branch(tmp259, &block219, std::vector<compiler::Node*>{phi_bb210_9, phi_bb210_10, phi_bb210_12, phi_bb210_13}, &block220, std::vector<compiler::Node*>{phi_bb210_9, phi_bb210_10, phi_bb210_12, phi_bb210_13});
  }

  TNode<FixedArray> phi_bb211_9;
  TNode<IntPtrT> phi_bb211_10;
  TNode<BoolT> phi_bb211_12;
  TNode<PrimitiveHeapObject> phi_bb211_13;
  TNode<FixedArray> phi_bb211_34;
  if (block211.is_used()) {
    ca_.Bind(&block211, &phi_bb211_9, &phi_bb211_10, &phi_bb211_12, &phi_bb211_13, &phi_bb211_34);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb219_9;
  TNode<IntPtrT> phi_bb219_10;
  TNode<BoolT> phi_bb219_12;
  TNode<PrimitiveHeapObject> phi_bb219_13;
  TNode<IntPtrT> tmp260;
  TNode<IntPtrT> tmp261;
  TNode<Union<HeapObject, TaggedIndex>> tmp262;
  TNode<IntPtrT> tmp263;
  TNode<Undefined> tmp264;
  TNode<Union<HeapObject, TaggedIndex>> tmp265;
  TNode<IntPtrT> tmp266;
  TNode<IntPtrT> tmp267;
  TNode<UintPtrT> tmp268;
  TNode<IntPtrT> tmp269;
  TNode<UintPtrT> tmp270;
  TNode<UintPtrT> tmp271;
  TNode<BoolT> tmp272;
  if (block219.is_used()) {
    ca_.Bind(&block219, &phi_bb219_9, &phi_bb219_10, &phi_bb219_12, &phi_bb219_13);
    tmp260 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp256});
    tmp261 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp253}, TNode<IntPtrT>{tmp260});
    std::tie(tmp262, tmp263) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp252}, TNode<IntPtrT>{tmp261}).Flatten();
    tmp264 = Undefined_0(state_);
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp262, tmp263}, tmp264);
    std::tie(tmp265, tmp266, tmp267) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp239}).Flatten();
    tmp268 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp269 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp268});
    tmp270 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp269});
    tmp271 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp267});
    tmp272 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp270}, TNode<UintPtrT>{tmp271});
    ca_.Branch(tmp272, &block228, std::vector<compiler::Node*>{phi_bb219_9, phi_bb219_10, phi_bb219_12, phi_bb219_13}, &block229, std::vector<compiler::Node*>{phi_bb219_9, phi_bb219_10, phi_bb219_12, phi_bb219_13});
  }

  TNode<FixedArray> phi_bb220_9;
  TNode<IntPtrT> phi_bb220_10;
  TNode<BoolT> phi_bb220_12;
  TNode<PrimitiveHeapObject> phi_bb220_13;
  if (block220.is_used()) {
    ca_.Bind(&block220, &phi_bb220_9, &phi_bb220_10, &phi_bb220_12, &phi_bb220_13);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb228_9;
  TNode<IntPtrT> phi_bb228_10;
  TNode<BoolT> phi_bb228_12;
  TNode<PrimitiveHeapObject> phi_bb228_13;
  TNode<IntPtrT> tmp273;
  TNode<IntPtrT> tmp274;
  TNode<Union<HeapObject, TaggedIndex>> tmp275;
  TNode<IntPtrT> tmp276;
  TNode<IntPtrT> tmp277;
  if (block228.is_used()) {
    ca_.Bind(&block228, &phi_bb228_9, &phi_bb228_10, &phi_bb228_12, &phi_bb228_13);
    tmp273 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp269});
    tmp274 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp266}, TNode<IntPtrT>{tmp273});
    std::tie(tmp275, tmp276) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp265}, TNode<IntPtrT>{tmp274}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp275, tmp276}, tmp215);
    tmp277 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    ca_.Goto(&block190, tmp239, tmp277, phi_bb228_12, phi_bb228_13);
  }

  TNode<FixedArray> phi_bb229_9;
  TNode<IntPtrT> phi_bb229_10;
  TNode<BoolT> phi_bb229_12;
  TNode<PrimitiveHeapObject> phi_bb229_13;
  if (block229.is_used()) {
    ca_.Bind(&block229, &phi_bb229_9, &phi_bb229_10, &phi_bb229_12, &phi_bb229_13);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb190_9;
  TNode<IntPtrT> phi_bb190_10;
  TNode<BoolT> phi_bb190_12;
  TNode<PrimitiveHeapObject> phi_bb190_13;
  if (block190.is_used()) {
    ca_.Bind(&block190, &phi_bb190_9, &phi_bb190_10, &phi_bb190_12, &phi_bb190_13);
    ca_.Goto(&block176, phi_bb190_9, phi_bb190_10, phi_bb190_12, phi_bb190_13);
  }

  TNode<FixedArray> phi_bb177_9;
  TNode<IntPtrT> phi_bb177_10;
  TNode<BoolT> phi_bb177_12;
  TNode<PrimitiveHeapObject> phi_bb177_13;
  TNode<Smi> tmp278;
  if (block177.is_used()) {
    ca_.Bind(&block177, &phi_bb177_9, &phi_bb177_10, &phi_bb177_12, &phi_bb177_13);
    compiler::CodeAssemblerLabel label279(&ca_);
    tmp278 = Cast_Smi_0(state_, TNode<Object>{ca_.UncheckedCast<Object>(tmp210)}, &label279);
    ca_.Goto(&block234, phi_bb177_9, phi_bb177_10, phi_bb177_12, phi_bb177_13);
    if (label279.is_used()) {
      ca_.Bind(&label279);
      ca_.Goto(&block235, phi_bb177_9, phi_bb177_10, phi_bb177_12, phi_bb177_13);
    }
  }

  TNode<FixedArray> phi_bb235_9;
  TNode<IntPtrT> phi_bb235_10;
  TNode<BoolT> phi_bb235_12;
  TNode<PrimitiveHeapObject> phi_bb235_13;
  if (block235.is_used()) {
    ca_.Bind(&block235, &phi_bb235_9, &phi_bb235_10, &phi_bb235_12, &phi_bb235_13);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/array-join.tq:229:9");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb234_9;
  TNode<IntPtrT> phi_bb234_10;
  TNode<BoolT> phi_bb234_12;
  TNode<PrimitiveHeapObject> phi_bb234_13;
  TNode<Smi> tmp280;
  TNode<BoolT> tmp281;
  if (block234.is_used()) {
    ca_.Bind(&block234, &phi_bb234_9, &phi_bb234_10, &phi_bb234_12, &phi_bb234_13);
    tmp280 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp281 = CodeStubAssembler(state_).SmiLessThan(TNode<Smi>{tmp278}, TNode<Smi>{tmp280});
    ca_.Branch(tmp281, &block236, std::vector<compiler::Node*>{phi_bb234_9, phi_bb234_10, phi_bb234_12, phi_bb234_13}, &block237, std::vector<compiler::Node*>{phi_bb234_9, phi_bb234_10, phi_bb234_12, phi_bb234_13});
  }

  TNode<FixedArray> phi_bb237_9;
  TNode<IntPtrT> phi_bb237_10;
  TNode<BoolT> phi_bb237_12;
  TNode<PrimitiveHeapObject> phi_bb237_13;
  if (block237.is_used()) {
    ca_.Bind(&block237, &phi_bb237_9, &phi_bb237_10, &phi_bb237_12, &phi_bb237_13);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 224});
      CodeStubAssembler(state_).FailAssert("Torque assert 'count < 0' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb236_9;
  TNode<IntPtrT> phi_bb236_10;
  TNode<BoolT> phi_bb236_12;
  TNode<PrimitiveHeapObject> phi_bb236_13;
  TNode<Smi> tmp282;
  TNode<Smi> tmp283;
  TNode<Smi> tmp284;
  TNode<BoolT> tmp285;
  if (block236.is_used()) {
    ca_.Bind(&block236, &phi_bb236_9, &phi_bb236_10, &phi_bb236_12, &phi_bb236_13);
    tmp282 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp283 = CodeStubAssembler(state_).SmiSub(TNode<Smi>{tmp278}, TNode<Smi>{tmp282});
    tmp284 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp285 = CodeStubAssembler(state_).SmiLessThan(TNode<Smi>{tmp283}, TNode<Smi>{tmp284});
    ca_.Branch(tmp285, &block238, std::vector<compiler::Node*>{phi_bb236_9, phi_bb236_10, phi_bb236_12, phi_bb236_13}, &block239, std::vector<compiler::Node*>{phi_bb236_9, phi_bb236_10, phi_bb236_12, phi_bb236_13});
  }

  TNode<FixedArray> phi_bb239_9;
  TNode<IntPtrT> phi_bb239_10;
  TNode<BoolT> phi_bb239_12;
  TNode<PrimitiveHeapObject> phi_bb239_13;
  if (block239.is_used()) {
    ca_.Bind(&block239, &phi_bb239_9, &phi_bb239_10, &phi_bb239_12, &phi_bb239_13);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 225});
      CodeStubAssembler(state_).FailAssert("Torque assert 'count - 1 < 0' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb238_9;
  TNode<IntPtrT> phi_bb238_10;
  TNode<BoolT> phi_bb238_12;
  TNode<PrimitiveHeapObject> phi_bb238_13;
  TNode<Union<HeapObject, TaggedIndex>> tmp286;
  TNode<IntPtrT> tmp287;
  TNode<IntPtrT> tmp288;
  TNode<IntPtrT> tmp289;
  TNode<IntPtrT> tmp290;
  TNode<UintPtrT> tmp291;
  TNode<UintPtrT> tmp292;
  TNode<BoolT> tmp293;
  if (block238.is_used()) {
    ca_.Bind(&block238, &phi_bb238_9, &phi_bb238_10, &phi_bb238_12, &phi_bb238_13);
    std::tie(tmp286, tmp287, tmp288) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb238_9}).Flatten();
    tmp289 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp290 = CodeStubAssembler(state_).IntPtrSub(TNode<IntPtrT>{phi_bb238_10}, TNode<IntPtrT>{tmp289});
    tmp291 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp290});
    tmp292 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp288});
    tmp293 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp291}, TNode<UintPtrT>{tmp292});
    ca_.Branch(tmp293, &block244, std::vector<compiler::Node*>{phi_bb238_9, phi_bb238_10, phi_bb238_12, phi_bb238_13, phi_bb238_9}, &block245, std::vector<compiler::Node*>{phi_bb238_9, phi_bb238_10, phi_bb238_12, phi_bb238_13, phi_bb238_9});
  }

  TNode<FixedArray> phi_bb244_9;
  TNode<IntPtrT> phi_bb244_10;
  TNode<BoolT> phi_bb244_12;
  TNode<PrimitiveHeapObject> phi_bb244_13;
  TNode<FixedArray> phi_bb244_28;
  TNode<IntPtrT> tmp294;
  TNode<IntPtrT> tmp295;
  TNode<Union<HeapObject, TaggedIndex>> tmp296;
  TNode<IntPtrT> tmp297;
  TNode<Smi> tmp298;
  TNode<Smi> tmp299;
  if (block244.is_used()) {
    ca_.Bind(&block244, &phi_bb244_9, &phi_bb244_10, &phi_bb244_12, &phi_bb244_13, &phi_bb244_28);
    tmp294 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp290});
    tmp295 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp287}, TNode<IntPtrT>{tmp294});
    std::tie(tmp296, tmp297) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp286}, TNode<IntPtrT>{tmp295}).Flatten();
    tmp298 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp299 = CodeStubAssembler(state_).SmiSub(TNode<Smi>{tmp278}, TNode<Smi>{tmp298});
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp296, tmp297}, tmp299);
    ca_.Goto(&block176, phi_bb244_9, phi_bb244_10, phi_bb244_12, phi_bb244_13);
  }

  TNode<FixedArray> phi_bb245_9;
  TNode<IntPtrT> phi_bb245_10;
  TNode<BoolT> phi_bb245_12;
  TNode<PrimitiveHeapObject> phi_bb245_13;
  TNode<FixedArray> phi_bb245_28;
  if (block245.is_used()) {
    ca_.Bind(&block245, &phi_bb245_9, &phi_bb245_10, &phi_bb245_12, &phi_bb245_13, &phi_bb245_28);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb176_9;
  TNode<IntPtrT> phi_bb176_10;
  TNode<BoolT> phi_bb176_12;
  TNode<PrimitiveHeapObject> phi_bb176_13;
  if (block176.is_used()) {
    ca_.Bind(&block176, &phi_bb176_9, &phi_bb176_10, &phi_bb176_12, &phi_bb176_13);
    ca_.Goto(&block164, phi_bb176_9, phi_bb176_10, phi_bb176_12, phi_bb176_13);
  }

  TNode<FixedArray> phi_bb163_9;
  TNode<IntPtrT> phi_bb163_10;
  TNode<BoolT> phi_bb163_12;
  TNode<PrimitiveHeapObject> phi_bb163_13;
  TNode<IntPtrT> tmp300;
  TNode<IntPtrT> tmp301;
  TNode<BoolT> tmp302;
  if (block163.is_used()) {
    ca_.Bind(&block163, &phi_bb163_9, &phi_bb163_10, &phi_bb163_12, &phi_bb163_13);
    tmp300 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{phi_bb163_9});
    tmp301 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp302 = CodeStubAssembler(state_).IntPtrGreaterThanOrEqual(TNode<IntPtrT>{phi_bb163_10}, TNode<IntPtrT>{tmp301});
    ca_.Branch(tmp302, &block249, std::vector<compiler::Node*>{phi_bb163_9, phi_bb163_10, phi_bb163_12, phi_bb163_13}, &block250, std::vector<compiler::Node*>{phi_bb163_9, phi_bb163_10, phi_bb163_12, phi_bb163_13});
  }

  TNode<FixedArray> phi_bb250_9;
  TNode<IntPtrT> phi_bb250_10;
  TNode<BoolT> phi_bb250_12;
  TNode<PrimitiveHeapObject> phi_bb250_13;
  if (block250.is_used()) {
    ca_.Bind(&block250, &phi_bb250_9, &phi_bb250_10, &phi_bb250_12, &phi_bb250_13);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 238});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index >= 1' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb249_9;
  TNode<IntPtrT> phi_bb249_10;
  TNode<BoolT> phi_bb249_12;
  TNode<PrimitiveHeapObject> phi_bb249_13;
  TNode<BoolT> tmp303;
  if (block249.is_used()) {
    ca_.Bind(&block249, &phi_bb249_9, &phi_bb249_10, &phi_bb249_12, &phi_bb249_13);
    tmp303 = CodeStubAssembler(state_).IntPtrLessThanOrEqual(TNode<IntPtrT>{phi_bb249_10}, TNode<IntPtrT>{tmp300});
    ca_.Branch(tmp303, &block251, std::vector<compiler::Node*>{phi_bb249_9, phi_bb249_10, phi_bb249_12, phi_bb249_13}, &block252, std::vector<compiler::Node*>{phi_bb249_9, phi_bb249_10, phi_bb249_12, phi_bb249_13});
  }

  TNode<FixedArray> phi_bb252_9;
  TNode<IntPtrT> phi_bb252_10;
  TNode<BoolT> phi_bb252_12;
  TNode<PrimitiveHeapObject> phi_bb252_13;
  if (block252.is_used()) {
    ca_.Bind(&block252, &phi_bb252_9, &phi_bb252_10, &phi_bb252_12, &phi_bb252_13);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 239});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index <= length' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb251_9;
  TNode<IntPtrT> phi_bb251_10;
  TNode<BoolT> phi_bb251_12;
  TNode<PrimitiveHeapObject> phi_bb251_13;
  TNode<BoolT> tmp304;
  if (block251.is_used()) {
    ca_.Bind(&block251, &phi_bb251_9, &phi_bb251_10, &phi_bb251_12, &phi_bb251_13);
    tmp304 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb251_10}, TNode<IntPtrT>{tmp300});
    ca_.Branch(tmp304, &block253, std::vector<compiler::Node*>{phi_bb251_9, phi_bb251_10, phi_bb251_12, phi_bb251_13}, &block254, std::vector<compiler::Node*>{phi_bb251_9, phi_bb251_10, phi_bb251_12, phi_bb251_13});
  }

  TNode<FixedArray> phi_bb253_9;
  TNode<IntPtrT> phi_bb253_10;
  TNode<BoolT> phi_bb253_12;
  TNode<PrimitiveHeapObject> phi_bb253_13;
  TNode<Union<HeapObject, TaggedIndex>> tmp305;
  TNode<IntPtrT> tmp306;
  TNode<IntPtrT> tmp307;
  TNode<IntPtrT> tmp308;
  TNode<IntPtrT> tmp309;
  TNode<UintPtrT> tmp310;
  TNode<UintPtrT> tmp311;
  TNode<BoolT> tmp312;
  if (block253.is_used()) {
    ca_.Bind(&block253, &phi_bb253_9, &phi_bb253_10, &phi_bb253_12, &phi_bb253_13);
    std::tie(tmp305, tmp306, tmp307) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb253_9}).Flatten();
    tmp308 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp309 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb253_10}, TNode<IntPtrT>{tmp308});
    tmp310 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb253_10});
    tmp311 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp307});
    tmp312 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp310}, TNode<UintPtrT>{tmp311});
    ca_.Branch(tmp312, &block260, std::vector<compiler::Node*>{phi_bb253_9, phi_bb253_12, phi_bb253_13, phi_bb253_9, phi_bb253_10, phi_bb253_10, phi_bb253_10, phi_bb253_10}, &block261, std::vector<compiler::Node*>{phi_bb253_9, phi_bb253_12, phi_bb253_13, phi_bb253_9, phi_bb253_10, phi_bb253_10, phi_bb253_10, phi_bb253_10});
  }

  TNode<FixedArray> phi_bb260_9;
  TNode<BoolT> phi_bb260_12;
  TNode<PrimitiveHeapObject> phi_bb260_13;
  TNode<FixedArray> phi_bb260_29;
  TNode<IntPtrT> phi_bb260_33;
  TNode<IntPtrT> phi_bb260_34;
  TNode<IntPtrT> phi_bb260_38;
  TNode<IntPtrT> phi_bb260_39;
  TNode<IntPtrT> tmp313;
  TNode<IntPtrT> tmp314;
  TNode<Union<HeapObject, TaggedIndex>> tmp315;
  TNode<IntPtrT> tmp316;
  if (block260.is_used()) {
    ca_.Bind(&block260, &phi_bb260_9, &phi_bb260_12, &phi_bb260_13, &phi_bb260_29, &phi_bb260_33, &phi_bb260_34, &phi_bb260_38, &phi_bb260_39);
    tmp313 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb260_39});
    tmp314 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp306}, TNode<IntPtrT>{tmp313});
    std::tie(tmp315, tmp316) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp305}, TNode<IntPtrT>{tmp314}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp315, tmp316}, phi_bb25_16);
    ca_.Goto(&block255, phi_bb260_9, tmp309, phi_bb260_12, phi_bb260_13);
  }

  TNode<FixedArray> phi_bb261_9;
  TNode<BoolT> phi_bb261_12;
  TNode<PrimitiveHeapObject> phi_bb261_13;
  TNode<FixedArray> phi_bb261_29;
  TNode<IntPtrT> phi_bb261_33;
  TNode<IntPtrT> phi_bb261_34;
  TNode<IntPtrT> phi_bb261_38;
  TNode<IntPtrT> phi_bb261_39;
  if (block261.is_used()) {
    ca_.Bind(&block261, &phi_bb261_9, &phi_bb261_12, &phi_bb261_13, &phi_bb261_29, &phi_bb261_33, &phi_bb261_34, &phi_bb261_38, &phi_bb261_39);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb254_9;
  TNode<IntPtrT> phi_bb254_10;
  TNode<BoolT> phi_bb254_12;
  TNode<PrimitiveHeapObject> phi_bb254_13;
  TNode<IntPtrT> tmp317;
  TNode<IntPtrT> tmp318;
  TNode<BoolT> tmp319;
  if (block254.is_used()) {
    ca_.Bind(&block254, &phi_bb254_9, &phi_bb254_10, &phi_bb254_12, &phi_bb254_13);
    tmp317 = CodeStubAssembler(state_).CalculateNewElementsCapacity(TNode<IntPtrT>{tmp300});
    tmp318 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    tmp319 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{tmp317}, TNode<IntPtrT>{tmp318});
    ca_.Branch(tmp319, &block264, std::vector<compiler::Node*>{phi_bb254_9, phi_bb254_10, phi_bb254_12, phi_bb254_13}, &block265, std::vector<compiler::Node*>{phi_bb254_9, phi_bb254_10, phi_bb254_12, phi_bb254_13});
  }

  TNode<FixedArray> phi_bb264_9;
  TNode<IntPtrT> phi_bb264_10;
  TNode<BoolT> phi_bb264_12;
  TNode<PrimitiveHeapObject> phi_bb264_13;
  TNode<IntPtrT> tmp320;
  if (block264.is_used()) {
    ca_.Bind(&block264, &phi_bb264_9, &phi_bb264_10, &phi_bb264_12, &phi_bb264_13);
    tmp320 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    ca_.Goto(&block266, phi_bb264_9, phi_bb264_10, phi_bb264_12, phi_bb264_13, tmp320);
  }

  TNode<FixedArray> phi_bb265_9;
  TNode<IntPtrT> phi_bb265_10;
  TNode<BoolT> phi_bb265_12;
  TNode<PrimitiveHeapObject> phi_bb265_13;
  if (block265.is_used()) {
    ca_.Bind(&block265, &phi_bb265_9, &phi_bb265_10, &phi_bb265_12, &phi_bb265_13);
    ca_.Goto(&block266, phi_bb265_9, phi_bb265_10, phi_bb265_12, phi_bb265_13, tmp317);
  }

  TNode<FixedArray> phi_bb266_9;
  TNode<IntPtrT> phi_bb266_10;
  TNode<BoolT> phi_bb266_12;
  TNode<PrimitiveHeapObject> phi_bb266_13;
  TNode<IntPtrT> phi_bb266_30;
  TNode<IntPtrT> tmp321;
  TNode<BoolT> tmp322;
  if (block266.is_used()) {
    ca_.Bind(&block266, &phi_bb266_9, &phi_bb266_10, &phi_bb266_12, &phi_bb266_13, &phi_bb266_30);
    tmp321 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp322 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{phi_bb266_30}, TNode<IntPtrT>{tmp321});
    ca_.Branch(tmp322, &block268, std::vector<compiler::Node*>{phi_bb266_9, phi_bb266_10, phi_bb266_12, phi_bb266_13}, &block269, std::vector<compiler::Node*>{phi_bb266_9, phi_bb266_10, phi_bb266_12, phi_bb266_13});
  }

  TNode<FixedArray> phi_bb269_9;
  TNode<IntPtrT> phi_bb269_10;
  TNode<BoolT> phi_bb269_12;
  TNode<PrimitiveHeapObject> phi_bb269_13;
  if (block269.is_used()) {
    ca_.Bind(&block269, &phi_bb269_9, &phi_bb269_10, &phi_bb269_12, &phi_bb269_13);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 248});
      CodeStubAssembler(state_).FailAssert("Torque assert 'cappedNewChunkLength > 0' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb268_9;
  TNode<IntPtrT> phi_bb268_10;
  TNode<BoolT> phi_bb268_12;
  TNode<PrimitiveHeapObject> phi_bb268_13;
  TNode<FixedArray> tmp323;
  TNode<Union<HeapObject, TaggedIndex>> tmp324;
  TNode<IntPtrT> tmp325;
  TNode<IntPtrT> tmp326;
  TNode<UintPtrT> tmp327;
  TNode<IntPtrT> tmp328;
  TNode<UintPtrT> tmp329;
  TNode<UintPtrT> tmp330;
  TNode<BoolT> tmp331;
  if (block268.is_used()) {
    ca_.Bind(&block268, &phi_bb268_9, &phi_bb268_10, &phi_bb268_12, &phi_bb268_13);
    tmp323 = CodeStubAssembler(state_).AllocateZeroedFixedArray(TNode<IntPtrT>{phi_bb266_30});
    std::tie(tmp324, tmp325, tmp326) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb268_9}).Flatten();
    tmp327 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp328 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp327});
    tmp329 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp328});
    tmp330 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp326});
    tmp331 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp329}, TNode<UintPtrT>{tmp330});
    ca_.Branch(tmp331, &block275, std::vector<compiler::Node*>{phi_bb268_9, phi_bb268_10, phi_bb268_12, phi_bb268_13, phi_bb268_9}, &block276, std::vector<compiler::Node*>{phi_bb268_9, phi_bb268_10, phi_bb268_12, phi_bb268_13, phi_bb268_9});
  }

  TNode<FixedArray> phi_bb275_9;
  TNode<IntPtrT> phi_bb275_10;
  TNode<BoolT> phi_bb275_12;
  TNode<PrimitiveHeapObject> phi_bb275_13;
  TNode<FixedArray> phi_bb275_32;
  TNode<IntPtrT> tmp332;
  TNode<IntPtrT> tmp333;
  TNode<Union<HeapObject, TaggedIndex>> tmp334;
  TNode<IntPtrT> tmp335;
  TNode<Union<HeapObject, TaggedIndex>> tmp336;
  TNode<IntPtrT> tmp337;
  TNode<IntPtrT> tmp338;
  TNode<UintPtrT> tmp339;
  TNode<IntPtrT> tmp340;
  TNode<UintPtrT> tmp341;
  TNode<UintPtrT> tmp342;
  TNode<BoolT> tmp343;
  if (block275.is_used()) {
    ca_.Bind(&block275, &phi_bb275_9, &phi_bb275_10, &phi_bb275_12, &phi_bb275_13, &phi_bb275_32);
    tmp332 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp328});
    tmp333 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp325}, TNode<IntPtrT>{tmp332});
    std::tie(tmp334, tmp335) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp324}, TNode<IntPtrT>{tmp333}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp334, tmp335}, tmp323);
    std::tie(tmp336, tmp337, tmp338) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp323}).Flatten();
    tmp339 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp340 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp339});
    tmp341 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp340});
    tmp342 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp338});
    tmp343 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp341}, TNode<UintPtrT>{tmp342});
    ca_.Branch(tmp343, &block284, std::vector<compiler::Node*>{phi_bb275_9, phi_bb275_10, phi_bb275_12, phi_bb275_13}, &block285, std::vector<compiler::Node*>{phi_bb275_9, phi_bb275_10, phi_bb275_12, phi_bb275_13});
  }

  TNode<FixedArray> phi_bb276_9;
  TNode<IntPtrT> phi_bb276_10;
  TNode<BoolT> phi_bb276_12;
  TNode<PrimitiveHeapObject> phi_bb276_13;
  TNode<FixedArray> phi_bb276_32;
  if (block276.is_used()) {
    ca_.Bind(&block276, &phi_bb276_9, &phi_bb276_10, &phi_bb276_12, &phi_bb276_13, &phi_bb276_32);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb284_9;
  TNode<IntPtrT> phi_bb284_10;
  TNode<BoolT> phi_bb284_12;
  TNode<PrimitiveHeapObject> phi_bb284_13;
  TNode<IntPtrT> tmp344;
  TNode<IntPtrT> tmp345;
  TNode<Union<HeapObject, TaggedIndex>> tmp346;
  TNode<IntPtrT> tmp347;
  TNode<Undefined> tmp348;
  TNode<Union<HeapObject, TaggedIndex>> tmp349;
  TNode<IntPtrT> tmp350;
  TNode<IntPtrT> tmp351;
  TNode<UintPtrT> tmp352;
  TNode<IntPtrT> tmp353;
  TNode<UintPtrT> tmp354;
  TNode<UintPtrT> tmp355;
  TNode<BoolT> tmp356;
  if (block284.is_used()) {
    ca_.Bind(&block284, &phi_bb284_9, &phi_bb284_10, &phi_bb284_12, &phi_bb284_13);
    tmp344 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp340});
    tmp345 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp337}, TNode<IntPtrT>{tmp344});
    std::tie(tmp346, tmp347) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp336}, TNode<IntPtrT>{tmp345}).Flatten();
    tmp348 = Undefined_0(state_);
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp346, tmp347}, tmp348);
    std::tie(tmp349, tmp350, tmp351) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp323}).Flatten();
    tmp352 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp353 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp352});
    tmp354 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp353});
    tmp355 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp351});
    tmp356 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp354}, TNode<UintPtrT>{tmp355});
    ca_.Branch(tmp356, &block293, std::vector<compiler::Node*>{phi_bb284_9, phi_bb284_10, phi_bb284_12, phi_bb284_13}, &block294, std::vector<compiler::Node*>{phi_bb284_9, phi_bb284_10, phi_bb284_12, phi_bb284_13});
  }

  TNode<FixedArray> phi_bb285_9;
  TNode<IntPtrT> phi_bb285_10;
  TNode<BoolT> phi_bb285_12;
  TNode<PrimitiveHeapObject> phi_bb285_13;
  if (block285.is_used()) {
    ca_.Bind(&block285, &phi_bb285_9, &phi_bb285_10, &phi_bb285_12, &phi_bb285_13);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb293_9;
  TNode<IntPtrT> phi_bb293_10;
  TNode<BoolT> phi_bb293_12;
  TNode<PrimitiveHeapObject> phi_bb293_13;
  TNode<IntPtrT> tmp357;
  TNode<IntPtrT> tmp358;
  TNode<Union<HeapObject, TaggedIndex>> tmp359;
  TNode<IntPtrT> tmp360;
  TNode<IntPtrT> tmp361;
  if (block293.is_used()) {
    ca_.Bind(&block293, &phi_bb293_9, &phi_bb293_10, &phi_bb293_12, &phi_bb293_13);
    tmp357 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp353});
    tmp358 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp350}, TNode<IntPtrT>{tmp357});
    std::tie(tmp359, tmp360) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp349}, TNode<IntPtrT>{tmp358}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp359, tmp360}, phi_bb25_16);
    tmp361 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    ca_.Goto(&block255, tmp323, tmp361, phi_bb293_12, phi_bb293_13);
  }

  TNode<FixedArray> phi_bb294_9;
  TNode<IntPtrT> phi_bb294_10;
  TNode<BoolT> phi_bb294_12;
  TNode<PrimitiveHeapObject> phi_bb294_13;
  if (block294.is_used()) {
    ca_.Bind(&block294, &phi_bb294_9, &phi_bb294_10, &phi_bb294_12, &phi_bb294_13);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb255_9;
  TNode<IntPtrT> phi_bb255_10;
  TNode<BoolT> phi_bb255_12;
  TNode<PrimitiveHeapObject> phi_bb255_13;
  if (block255.is_used()) {
    ca_.Bind(&block255, &phi_bb255_9, &phi_bb255_10, &phi_bb255_12, &phi_bb255_13);
    ca_.Goto(&block164, phi_bb255_9, phi_bb255_10, phi_bb255_12, phi_bb25_16);
  }

  TNode<FixedArray> phi_bb164_9;
  TNode<IntPtrT> phi_bb164_10;
  TNode<BoolT> phi_bb164_12;
  TNode<PrimitiveHeapObject> phi_bb164_13;
  TNode<IntPtrT> tmp362;
  TNode<Map> tmp363;
  TNode<BoolT> tmp364;
  TNode<BoolT> tmp365;
  TNode<IntPtrT> tmp366;
  if (block164.is_used()) {
    ca_.Bind(&block164, &phi_bb164_9, &phi_bb164_10, &phi_bb164_12, &phi_bb164_13);
    tmp362 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    tmp363 = CodeStubAssembler(state_).LoadReference<Map>(CodeStubAssembler::Reference{phi_bb25_16, tmp362});
    tmp364 = CodeStubAssembler(state_).IsOneByteStringMap(TNode<Map>{tmp363});
    tmp365 = CodeStubAssembler(state_).Word32And(TNode<BoolT>{tmp364}, TNode<BoolT>{phi_bb164_12});
    tmp366 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block20, tmp366, phi_bb164_9, phi_bb164_10, tmp194, tmp365, phi_bb164_13, phi_bb25_15);
  }

  TNode<IntPtrT> phi_bb19_7;
  TNode<FixedArray> phi_bb19_9;
  TNode<IntPtrT> phi_bb19_10;
  TNode<IntPtrT> phi_bb19_11;
  TNode<BoolT> phi_bb19_12;
  TNode<PrimitiveHeapObject> phi_bb19_13;
  TNode<UintPtrT> phi_bb19_15;
  TNode<IntPtrT> tmp367;
  TNode<BoolT> tmp368;
  if (block19.is_used()) {
    ca_.Bind(&block19, &phi_bb19_7, &phi_bb19_9, &phi_bb19_10, &phi_bb19_11, &phi_bb19_12, &phi_bb19_13, &phi_bb19_15);
    tmp367 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp368 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{phi_bb17_14}, TNode<IntPtrT>{tmp367});
    ca_.Branch(tmp368, &block297, std::vector<compiler::Node*>{phi_bb19_7, phi_bb19_9, phi_bb19_10, phi_bb19_11, phi_bb19_12, phi_bb19_13, phi_bb19_15}, &block298, std::vector<compiler::Node*>{phi_bb19_7, phi_bb19_9, phi_bb19_10, phi_bb19_11, phi_bb19_12, phi_bb19_13, phi_bb19_15});
  }

  TNode<IntPtrT> phi_bb297_7;
  TNode<FixedArray> phi_bb297_9;
  TNode<IntPtrT> phi_bb297_10;
  TNode<IntPtrT> phi_bb297_11;
  TNode<BoolT> phi_bb297_12;
  TNode<PrimitiveHeapObject> phi_bb297_13;
  TNode<UintPtrT> phi_bb297_15;
  TNode<UintPtrT> tmp369;
  TNode<BoolT> tmp370;
  if (block297.is_used()) {
    ca_.Bind(&block297, &phi_bb297_7, &phi_bb297_9, &phi_bb297_10, &phi_bb297_11, &phi_bb297_12, &phi_bb297_13, &phi_bb297_15);
    tmp369 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp370 = CodeStubAssembler(state_).UintPtrGreaterThan(TNode<UintPtrT>{phi_bb297_15}, TNode<UintPtrT>{tmp369});
    ca_.Branch(tmp370, &block299, std::vector<compiler::Node*>{phi_bb297_7, phi_bb297_9, phi_bb297_10, phi_bb297_11, phi_bb297_12, phi_bb297_13, phi_bb297_15}, &block300, std::vector<compiler::Node*>{phi_bb297_7, phi_bb297_9, phi_bb297_10, phi_bb297_11, phi_bb297_12, phi_bb297_13, phi_bb297_15});
  }

  TNode<IntPtrT> phi_bb299_7;
  TNode<FixedArray> phi_bb299_9;
  TNode<IntPtrT> phi_bb299_10;
  TNode<IntPtrT> phi_bb299_11;
  TNode<BoolT> phi_bb299_12;
  TNode<PrimitiveHeapObject> phi_bb299_13;
  TNode<UintPtrT> phi_bb299_15;
  TNode<IntPtrT> tmp371;
  TNode<IntPtrT> tmp372;
  if (block299.is_used()) {
    ca_.Bind(&block299, &phi_bb299_7, &phi_bb299_9, &phi_bb299_10, &phi_bb299_11, &phi_bb299_12, &phi_bb299_13, &phi_bb299_15);
    tmp371 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp372 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb299_7}, TNode<IntPtrT>{tmp371});
    ca_.Goto(&block300, tmp372, phi_bb299_9, phi_bb299_10, phi_bb299_11, phi_bb299_12, phi_bb299_13, phi_bb299_15);
  }

  TNode<IntPtrT> phi_bb300_7;
  TNode<FixedArray> phi_bb300_9;
  TNode<IntPtrT> phi_bb300_10;
  TNode<IntPtrT> phi_bb300_11;
  TNode<BoolT> phi_bb300_12;
  TNode<PrimitiveHeapObject> phi_bb300_13;
  TNode<UintPtrT> phi_bb300_15;
  TNode<IntPtrT> tmp373;
  TNode<IntPtrT> tmp374;
  TNode<IntPtrT> tmp375;
  if (block300.is_used()) {
    ca_.Bind(&block300, &phi_bb300_7, &phi_bb300_9, &phi_bb300_10, &phi_bb300_11, &phi_bb300_12, &phi_bb300_13, &phi_bb300_15);
    tmp373 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp374 = CodeStubAssembler(state_).IntPtrSub(TNode<IntPtrT>{phi_bb17_14}, TNode<IntPtrT>{tmp373});
    tmp375 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb300_7}, TNode<IntPtrT>{tmp374});
    ca_.Goto(&block298, tmp375, phi_bb300_9, phi_bb300_10, phi_bb300_11, phi_bb300_12, phi_bb300_13, phi_bb300_15);
  }

  TNode<IntPtrT> phi_bb298_7;
  TNode<FixedArray> phi_bb298_9;
  TNode<IntPtrT> phi_bb298_10;
  TNode<IntPtrT> phi_bb298_11;
  TNode<BoolT> phi_bb298_12;
  TNode<PrimitiveHeapObject> phi_bb298_13;
  TNode<UintPtrT> phi_bb298_15;
  TNode<BoolT> tmp376;
  TNode<IntPtrT> tmp377;
  TNode<BoolT> tmp378;
  if (block298.is_used()) {
    ca_.Bind(&block298, &phi_bb298_7, &phi_bb298_9, &phi_bb298_10, &phi_bb298_11, &phi_bb298_12, &phi_bb298_13, &phi_bb298_15);
    tmp376 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    tmp377 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp378 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb298_7}, TNode<IntPtrT>{tmp377});
    ca_.Branch(tmp378, &block304, std::vector<compiler::Node*>{phi_bb298_7, phi_bb298_9, phi_bb298_10, phi_bb298_11, phi_bb298_12, phi_bb298_13, phi_bb298_15, phi_bb298_7, phi_bb298_7}, &block305, std::vector<compiler::Node*>{phi_bb298_7, phi_bb298_9, phi_bb298_10, phi_bb298_11, phi_bb298_12, phi_bb298_13, phi_bb298_15, phi_bb298_7, phi_bb298_7});
  }

  TNode<IntPtrT> phi_bb304_7;
  TNode<FixedArray> phi_bb304_9;
  TNode<IntPtrT> phi_bb304_10;
  TNode<IntPtrT> phi_bb304_11;
  TNode<BoolT> phi_bb304_12;
  TNode<PrimitiveHeapObject> phi_bb304_13;
  TNode<UintPtrT> phi_bb304_15;
  TNode<IntPtrT> phi_bb304_16;
  TNode<IntPtrT> phi_bb304_20;
  TNode<BoolT> tmp379;
  if (block304.is_used()) {
    ca_.Bind(&block304, &phi_bb304_7, &phi_bb304_9, &phi_bb304_10, &phi_bb304_11, &phi_bb304_12, &phi_bb304_13, &phi_bb304_15, &phi_bb304_16, &phi_bb304_20);
    tmp379 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block306, phi_bb304_7, phi_bb304_9, phi_bb304_10, phi_bb304_11, phi_bb304_12, phi_bb304_13, phi_bb304_15, phi_bb304_16, phi_bb304_20, tmp379);
  }

  TNode<IntPtrT> phi_bb305_7;
  TNode<FixedArray> phi_bb305_9;
  TNode<IntPtrT> phi_bb305_10;
  TNode<IntPtrT> phi_bb305_11;
  TNode<BoolT> phi_bb305_12;
  TNode<PrimitiveHeapObject> phi_bb305_13;
  TNode<UintPtrT> phi_bb305_15;
  TNode<IntPtrT> phi_bb305_16;
  TNode<IntPtrT> phi_bb305_20;
  TNode<IntPtrT> tmp380;
  TNode<BoolT> tmp381;
  if (block305.is_used()) {
    ca_.Bind(&block305, &phi_bb305_7, &phi_bb305_9, &phi_bb305_10, &phi_bb305_11, &phi_bb305_12, &phi_bb305_13, &phi_bb305_15, &phi_bb305_16, &phi_bb305_20);
    tmp380 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp381 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{tmp3}, TNode<IntPtrT>{tmp380});
    ca_.Goto(&block306, phi_bb305_7, phi_bb305_9, phi_bb305_10, phi_bb305_11, phi_bb305_12, phi_bb305_13, phi_bb305_15, phi_bb305_16, phi_bb305_20, tmp381);
  }

  TNode<IntPtrT> phi_bb306_7;
  TNode<FixedArray> phi_bb306_9;
  TNode<IntPtrT> phi_bb306_10;
  TNode<IntPtrT> phi_bb306_11;
  TNode<BoolT> phi_bb306_12;
  TNode<PrimitiveHeapObject> phi_bb306_13;
  TNode<UintPtrT> phi_bb306_15;
  TNode<IntPtrT> phi_bb306_16;
  TNode<IntPtrT> phi_bb306_20;
  TNode<BoolT> phi_bb306_24;
  if (block306.is_used()) {
    ca_.Bind(&block306, &phi_bb306_7, &phi_bb306_9, &phi_bb306_10, &phi_bb306_11, &phi_bb306_12, &phi_bb306_13, &phi_bb306_15, &phi_bb306_16, &phi_bb306_20, &phi_bb306_24);
    ca_.Branch(phi_bb306_24, &block302, std::vector<compiler::Node*>{phi_bb306_7, phi_bb306_9, phi_bb306_10, phi_bb306_11, phi_bb306_12, phi_bb306_13, phi_bb306_15, phi_bb306_16, phi_bb306_20}, &block303, std::vector<compiler::Node*>{phi_bb306_7, phi_bb306_9, phi_bb306_10, phi_bb306_11, phi_bb306_12, phi_bb306_13, phi_bb306_15, phi_bb306_16, phi_bb306_20});
  }

  TNode<IntPtrT> phi_bb302_7;
  TNode<FixedArray> phi_bb302_9;
  TNode<IntPtrT> phi_bb302_10;
  TNode<IntPtrT> phi_bb302_11;
  TNode<BoolT> phi_bb302_12;
  TNode<PrimitiveHeapObject> phi_bb302_13;
  TNode<UintPtrT> phi_bb302_15;
  TNode<IntPtrT> phi_bb302_16;
  TNode<IntPtrT> phi_bb302_20;
  if (block302.is_used()) {
    ca_.Bind(&block302, &phi_bb302_7, &phi_bb302_9, &phi_bb302_10, &phi_bb302_11, &phi_bb302_12, &phi_bb302_13, &phi_bb302_15, &phi_bb302_16, &phi_bb302_20);
    ca_.Goto(&block301, phi_bb302_7, phi_bb302_9, phi_bb302_10, phi_bb302_11, phi_bb302_12, phi_bb302_13, phi_bb302_15, phi_bb302_16, phi_bb302_20);
  }

  TNode<IntPtrT> phi_bb303_7;
  TNode<FixedArray> phi_bb303_9;
  TNode<IntPtrT> phi_bb303_10;
  TNode<IntPtrT> phi_bb303_11;
  TNode<BoolT> phi_bb303_12;
  TNode<PrimitiveHeapObject> phi_bb303_13;
  TNode<UintPtrT> phi_bb303_15;
  TNode<IntPtrT> phi_bb303_16;
  TNode<IntPtrT> phi_bb303_20;
  TNode<IntPtrT> tmp382;
  TNode<IntPtrT> tmp383;
  if (block303.is_used()) {
    ca_.Bind(&block303, &phi_bb303_7, &phi_bb303_9, &phi_bb303_10, &phi_bb303_11, &phi_bb303_12, &phi_bb303_13, &phi_bb303_15, &phi_bb303_16, &phi_bb303_20);
    tmp382 = CodeStubAssembler(state_).IntPtrMul(TNode<IntPtrT>{tmp3}, TNode<IntPtrT>{phi_bb303_20});
    tmp383 = AddStringLength_0(state_, TNode<Context>{p_context}, TNode<IntPtrT>{phi_bb303_11}, TNode<IntPtrT>{tmp382});
    ca_.Branch(tmp376, &block307, std::vector<compiler::Node*>{phi_bb303_7, phi_bb303_9, phi_bb303_10, phi_bb303_12, phi_bb303_13, phi_bb303_15, phi_bb303_16, phi_bb303_20, phi_bb303_20}, &block308, std::vector<compiler::Node*>{phi_bb303_7, phi_bb303_9, phi_bb303_10, phi_bb303_12, phi_bb303_13, phi_bb303_15, phi_bb303_16, phi_bb303_20, phi_bb303_20});
  }

  TNode<IntPtrT> phi_bb307_7;
  TNode<FixedArray> phi_bb307_9;
  TNode<IntPtrT> phi_bb307_10;
  TNode<BoolT> phi_bb307_12;
  TNode<PrimitiveHeapObject> phi_bb307_13;
  TNode<UintPtrT> phi_bb307_15;
  TNode<IntPtrT> phi_bb307_16;
  TNode<IntPtrT> phi_bb307_20;
  TNode<IntPtrT> phi_bb307_23;
  TNode<Smi> tmp384;
  TNode<IntPtrT> tmp385;
  TNode<IntPtrT> tmp386;
  TNode<BoolT> tmp387;
  if (block307.is_used()) {
    ca_.Bind(&block307, &phi_bb307_7, &phi_bb307_9, &phi_bb307_10, &phi_bb307_12, &phi_bb307_13, &phi_bb307_15, &phi_bb307_16, &phi_bb307_20, &phi_bb307_23);
    tmp384 = Convert_Smi_intptr_0(state_, TNode<IntPtrT>{phi_bb307_23});
    tmp385 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{phi_bb307_9});
    tmp386 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp387 = CodeStubAssembler(state_).IntPtrGreaterThanOrEqual(TNode<IntPtrT>{phi_bb307_10}, TNode<IntPtrT>{tmp386});
    ca_.Branch(tmp387, &block310, std::vector<compiler::Node*>{phi_bb307_7, phi_bb307_9, phi_bb307_10, phi_bb307_12, phi_bb307_13, phi_bb307_15, phi_bb307_16, phi_bb307_20, phi_bb307_23}, &block311, std::vector<compiler::Node*>{phi_bb307_7, phi_bb307_9, phi_bb307_10, phi_bb307_12, phi_bb307_13, phi_bb307_15, phi_bb307_16, phi_bb307_20, phi_bb307_23});
  }

  TNode<IntPtrT> phi_bb311_7;
  TNode<FixedArray> phi_bb311_9;
  TNode<IntPtrT> phi_bb311_10;
  TNode<BoolT> phi_bb311_12;
  TNode<PrimitiveHeapObject> phi_bb311_13;
  TNode<UintPtrT> phi_bb311_15;
  TNode<IntPtrT> phi_bb311_16;
  TNode<IntPtrT> phi_bb311_20;
  TNode<IntPtrT> phi_bb311_23;
  if (block311.is_used()) {
    ca_.Bind(&block311, &phi_bb311_7, &phi_bb311_9, &phi_bb311_10, &phi_bb311_12, &phi_bb311_13, &phi_bb311_15, &phi_bb311_16, &phi_bb311_20, &phi_bb311_23);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 238});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index >= 1' failed", pos_stack);
    }
  }

  TNode<IntPtrT> phi_bb310_7;
  TNode<FixedArray> phi_bb310_9;
  TNode<IntPtrT> phi_bb310_10;
  TNode<BoolT> phi_bb310_12;
  TNode<PrimitiveHeapObject> phi_bb310_13;
  TNode<UintPtrT> phi_bb310_15;
  TNode<IntPtrT> phi_bb310_16;
  TNode<IntPtrT> phi_bb310_20;
  TNode<IntPtrT> phi_bb310_23;
  TNode<BoolT> tmp388;
  if (block310.is_used()) {
    ca_.Bind(&block310, &phi_bb310_7, &phi_bb310_9, &phi_bb310_10, &phi_bb310_12, &phi_bb310_13, &phi_bb310_15, &phi_bb310_16, &phi_bb310_20, &phi_bb310_23);
    tmp388 = CodeStubAssembler(state_).IntPtrLessThanOrEqual(TNode<IntPtrT>{phi_bb310_10}, TNode<IntPtrT>{tmp385});
    ca_.Branch(tmp388, &block312, std::vector<compiler::Node*>{phi_bb310_7, phi_bb310_9, phi_bb310_10, phi_bb310_12, phi_bb310_13, phi_bb310_15, phi_bb310_16, phi_bb310_20, phi_bb310_23}, &block313, std::vector<compiler::Node*>{phi_bb310_7, phi_bb310_9, phi_bb310_10, phi_bb310_12, phi_bb310_13, phi_bb310_15, phi_bb310_16, phi_bb310_20, phi_bb310_23});
  }

  TNode<IntPtrT> phi_bb313_7;
  TNode<FixedArray> phi_bb313_9;
  TNode<IntPtrT> phi_bb313_10;
  TNode<BoolT> phi_bb313_12;
  TNode<PrimitiveHeapObject> phi_bb313_13;
  TNode<UintPtrT> phi_bb313_15;
  TNode<IntPtrT> phi_bb313_16;
  TNode<IntPtrT> phi_bb313_20;
  TNode<IntPtrT> phi_bb313_23;
  if (block313.is_used()) {
    ca_.Bind(&block313, &phi_bb313_7, &phi_bb313_9, &phi_bb313_10, &phi_bb313_12, &phi_bb313_13, &phi_bb313_15, &phi_bb313_16, &phi_bb313_20, &phi_bb313_23);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 239});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index <= length' failed", pos_stack);
    }
  }

  TNode<IntPtrT> phi_bb312_7;
  TNode<FixedArray> phi_bb312_9;
  TNode<IntPtrT> phi_bb312_10;
  TNode<BoolT> phi_bb312_12;
  TNode<PrimitiveHeapObject> phi_bb312_13;
  TNode<UintPtrT> phi_bb312_15;
  TNode<IntPtrT> phi_bb312_16;
  TNode<IntPtrT> phi_bb312_20;
  TNode<IntPtrT> phi_bb312_23;
  TNode<BoolT> tmp389;
  if (block312.is_used()) {
    ca_.Bind(&block312, &phi_bb312_7, &phi_bb312_9, &phi_bb312_10, &phi_bb312_12, &phi_bb312_13, &phi_bb312_15, &phi_bb312_16, &phi_bb312_20, &phi_bb312_23);
    tmp389 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb312_10}, TNode<IntPtrT>{tmp385});
    ca_.Branch(tmp389, &block314, std::vector<compiler::Node*>{phi_bb312_7, phi_bb312_9, phi_bb312_10, phi_bb312_12, phi_bb312_13, phi_bb312_15, phi_bb312_16, phi_bb312_20, phi_bb312_23}, &block315, std::vector<compiler::Node*>{phi_bb312_7, phi_bb312_9, phi_bb312_10, phi_bb312_12, phi_bb312_13, phi_bb312_15, phi_bb312_16, phi_bb312_20, phi_bb312_23});
  }

  TNode<IntPtrT> phi_bb314_7;
  TNode<FixedArray> phi_bb314_9;
  TNode<IntPtrT> phi_bb314_10;
  TNode<BoolT> phi_bb314_12;
  TNode<PrimitiveHeapObject> phi_bb314_13;
  TNode<UintPtrT> phi_bb314_15;
  TNode<IntPtrT> phi_bb314_16;
  TNode<IntPtrT> phi_bb314_20;
  TNode<IntPtrT> phi_bb314_23;
  TNode<Union<HeapObject, TaggedIndex>> tmp390;
  TNode<IntPtrT> tmp391;
  TNode<IntPtrT> tmp392;
  TNode<IntPtrT> tmp393;
  TNode<IntPtrT> tmp394;
  TNode<UintPtrT> tmp395;
  TNode<UintPtrT> tmp396;
  TNode<BoolT> tmp397;
  if (block314.is_used()) {
    ca_.Bind(&block314, &phi_bb314_7, &phi_bb314_9, &phi_bb314_10, &phi_bb314_12, &phi_bb314_13, &phi_bb314_15, &phi_bb314_16, &phi_bb314_20, &phi_bb314_23);
    std::tie(tmp390, tmp391, tmp392) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb314_9}).Flatten();
    tmp393 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp394 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb314_10}, TNode<IntPtrT>{tmp393});
    tmp395 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb314_10});
    tmp396 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp392});
    tmp397 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp395}, TNode<UintPtrT>{tmp396});
    ca_.Branch(tmp397, &block321, std::vector<compiler::Node*>{phi_bb314_7, phi_bb314_9, phi_bb314_12, phi_bb314_13, phi_bb314_15, phi_bb314_16, phi_bb314_20, phi_bb314_23, phi_bb314_9, phi_bb314_10, phi_bb314_10, phi_bb314_10, phi_bb314_10}, &block322, std::vector<compiler::Node*>{phi_bb314_7, phi_bb314_9, phi_bb314_12, phi_bb314_13, phi_bb314_15, phi_bb314_16, phi_bb314_20, phi_bb314_23, phi_bb314_9, phi_bb314_10, phi_bb314_10, phi_bb314_10, phi_bb314_10});
  }

  TNode<IntPtrT> phi_bb321_7;
  TNode<FixedArray> phi_bb321_9;
  TNode<BoolT> phi_bb321_12;
  TNode<PrimitiveHeapObject> phi_bb321_13;
  TNode<UintPtrT> phi_bb321_15;
  TNode<IntPtrT> phi_bb321_16;
  TNode<IntPtrT> phi_bb321_20;
  TNode<IntPtrT> phi_bb321_23;
  TNode<FixedArray> phi_bb321_28;
  TNode<IntPtrT> phi_bb321_32;
  TNode<IntPtrT> phi_bb321_33;
  TNode<IntPtrT> phi_bb321_37;
  TNode<IntPtrT> phi_bb321_38;
  TNode<IntPtrT> tmp398;
  TNode<IntPtrT> tmp399;
  TNode<Union<HeapObject, TaggedIndex>> tmp400;
  TNode<IntPtrT> tmp401;
  if (block321.is_used()) {
    ca_.Bind(&block321, &phi_bb321_7, &phi_bb321_9, &phi_bb321_12, &phi_bb321_13, &phi_bb321_15, &phi_bb321_16, &phi_bb321_20, &phi_bb321_23, &phi_bb321_28, &phi_bb321_32, &phi_bb321_33, &phi_bb321_37, &phi_bb321_38);
    tmp398 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb321_38});
    tmp399 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp391}, TNode<IntPtrT>{tmp398});
    std::tie(tmp400, tmp401) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp390}, TNode<IntPtrT>{tmp399}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp400, tmp401}, tmp384);
    ca_.Goto(&block316, phi_bb321_7, phi_bb321_9, tmp394, phi_bb321_12, phi_bb321_13, phi_bb321_15, phi_bb321_16, phi_bb321_20, phi_bb321_23);
  }

  TNode<IntPtrT> phi_bb322_7;
  TNode<FixedArray> phi_bb322_9;
  TNode<BoolT> phi_bb322_12;
  TNode<PrimitiveHeapObject> phi_bb322_13;
  TNode<UintPtrT> phi_bb322_15;
  TNode<IntPtrT> phi_bb322_16;
  TNode<IntPtrT> phi_bb322_20;
  TNode<IntPtrT> phi_bb322_23;
  TNode<FixedArray> phi_bb322_28;
  TNode<IntPtrT> phi_bb322_32;
  TNode<IntPtrT> phi_bb322_33;
  TNode<IntPtrT> phi_bb322_37;
  TNode<IntPtrT> phi_bb322_38;
  if (block322.is_used()) {
    ca_.Bind(&block322, &phi_bb322_7, &phi_bb322_9, &phi_bb322_12, &phi_bb322_13, &phi_bb322_15, &phi_bb322_16, &phi_bb322_20, &phi_bb322_23, &phi_bb322_28, &phi_bb322_32, &phi_bb322_33, &phi_bb322_37, &phi_bb322_38);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb315_7;
  TNode<FixedArray> phi_bb315_9;
  TNode<IntPtrT> phi_bb315_10;
  TNode<BoolT> phi_bb315_12;
  TNode<PrimitiveHeapObject> phi_bb315_13;
  TNode<UintPtrT> phi_bb315_15;
  TNode<IntPtrT> phi_bb315_16;
  TNode<IntPtrT> phi_bb315_20;
  TNode<IntPtrT> phi_bb315_23;
  TNode<IntPtrT> tmp402;
  TNode<IntPtrT> tmp403;
  TNode<BoolT> tmp404;
  if (block315.is_used()) {
    ca_.Bind(&block315, &phi_bb315_7, &phi_bb315_9, &phi_bb315_10, &phi_bb315_12, &phi_bb315_13, &phi_bb315_15, &phi_bb315_16, &phi_bb315_20, &phi_bb315_23);
    tmp402 = CodeStubAssembler(state_).CalculateNewElementsCapacity(TNode<IntPtrT>{tmp385});
    tmp403 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    tmp404 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{tmp402}, TNode<IntPtrT>{tmp403});
    ca_.Branch(tmp404, &block325, std::vector<compiler::Node*>{phi_bb315_7, phi_bb315_9, phi_bb315_10, phi_bb315_12, phi_bb315_13, phi_bb315_15, phi_bb315_16, phi_bb315_20, phi_bb315_23}, &block326, std::vector<compiler::Node*>{phi_bb315_7, phi_bb315_9, phi_bb315_10, phi_bb315_12, phi_bb315_13, phi_bb315_15, phi_bb315_16, phi_bb315_20, phi_bb315_23});
  }

  TNode<IntPtrT> phi_bb325_7;
  TNode<FixedArray> phi_bb325_9;
  TNode<IntPtrT> phi_bb325_10;
  TNode<BoolT> phi_bb325_12;
  TNode<PrimitiveHeapObject> phi_bb325_13;
  TNode<UintPtrT> phi_bb325_15;
  TNode<IntPtrT> phi_bb325_16;
  TNode<IntPtrT> phi_bb325_20;
  TNode<IntPtrT> phi_bb325_23;
  TNode<IntPtrT> tmp405;
  if (block325.is_used()) {
    ca_.Bind(&block325, &phi_bb325_7, &phi_bb325_9, &phi_bb325_10, &phi_bb325_12, &phi_bb325_13, &phi_bb325_15, &phi_bb325_16, &phi_bb325_20, &phi_bb325_23);
    tmp405 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    ca_.Goto(&block327, phi_bb325_7, phi_bb325_9, phi_bb325_10, phi_bb325_12, phi_bb325_13, phi_bb325_15, phi_bb325_16, phi_bb325_20, phi_bb325_23, tmp405);
  }

  TNode<IntPtrT> phi_bb326_7;
  TNode<FixedArray> phi_bb326_9;
  TNode<IntPtrT> phi_bb326_10;
  TNode<BoolT> phi_bb326_12;
  TNode<PrimitiveHeapObject> phi_bb326_13;
  TNode<UintPtrT> phi_bb326_15;
  TNode<IntPtrT> phi_bb326_16;
  TNode<IntPtrT> phi_bb326_20;
  TNode<IntPtrT> phi_bb326_23;
  if (block326.is_used()) {
    ca_.Bind(&block326, &phi_bb326_7, &phi_bb326_9, &phi_bb326_10, &phi_bb326_12, &phi_bb326_13, &phi_bb326_15, &phi_bb326_16, &phi_bb326_20, &phi_bb326_23);
    ca_.Goto(&block327, phi_bb326_7, phi_bb326_9, phi_bb326_10, phi_bb326_12, phi_bb326_13, phi_bb326_15, phi_bb326_16, phi_bb326_20, phi_bb326_23, tmp402);
  }

  TNode<IntPtrT> phi_bb327_7;
  TNode<FixedArray> phi_bb327_9;
  TNode<IntPtrT> phi_bb327_10;
  TNode<BoolT> phi_bb327_12;
  TNode<PrimitiveHeapObject> phi_bb327_13;
  TNode<UintPtrT> phi_bb327_15;
  TNode<IntPtrT> phi_bb327_16;
  TNode<IntPtrT> phi_bb327_20;
  TNode<IntPtrT> phi_bb327_23;
  TNode<IntPtrT> phi_bb327_29;
  TNode<IntPtrT> tmp406;
  TNode<BoolT> tmp407;
  if (block327.is_used()) {
    ca_.Bind(&block327, &phi_bb327_7, &phi_bb327_9, &phi_bb327_10, &phi_bb327_12, &phi_bb327_13, &phi_bb327_15, &phi_bb327_16, &phi_bb327_20, &phi_bb327_23, &phi_bb327_29);
    tmp406 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp407 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{phi_bb327_29}, TNode<IntPtrT>{tmp406});
    ca_.Branch(tmp407, &block329, std::vector<compiler::Node*>{phi_bb327_7, phi_bb327_9, phi_bb327_10, phi_bb327_12, phi_bb327_13, phi_bb327_15, phi_bb327_16, phi_bb327_20, phi_bb327_23}, &block330, std::vector<compiler::Node*>{phi_bb327_7, phi_bb327_9, phi_bb327_10, phi_bb327_12, phi_bb327_13, phi_bb327_15, phi_bb327_16, phi_bb327_20, phi_bb327_23});
  }

  TNode<IntPtrT> phi_bb330_7;
  TNode<FixedArray> phi_bb330_9;
  TNode<IntPtrT> phi_bb330_10;
  TNode<BoolT> phi_bb330_12;
  TNode<PrimitiveHeapObject> phi_bb330_13;
  TNode<UintPtrT> phi_bb330_15;
  TNode<IntPtrT> phi_bb330_16;
  TNode<IntPtrT> phi_bb330_20;
  TNode<IntPtrT> phi_bb330_23;
  if (block330.is_used()) {
    ca_.Bind(&block330, &phi_bb330_7, &phi_bb330_9, &phi_bb330_10, &phi_bb330_12, &phi_bb330_13, &phi_bb330_15, &phi_bb330_16, &phi_bb330_20, &phi_bb330_23);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 248});
      CodeStubAssembler(state_).FailAssert("Torque assert 'cappedNewChunkLength > 0' failed", pos_stack);
    }
  }

  TNode<IntPtrT> phi_bb329_7;
  TNode<FixedArray> phi_bb329_9;
  TNode<IntPtrT> phi_bb329_10;
  TNode<BoolT> phi_bb329_12;
  TNode<PrimitiveHeapObject> phi_bb329_13;
  TNode<UintPtrT> phi_bb329_15;
  TNode<IntPtrT> phi_bb329_16;
  TNode<IntPtrT> phi_bb329_20;
  TNode<IntPtrT> phi_bb329_23;
  TNode<FixedArray> tmp408;
  TNode<Union<HeapObject, TaggedIndex>> tmp409;
  TNode<IntPtrT> tmp410;
  TNode<IntPtrT> tmp411;
  TNode<UintPtrT> tmp412;
  TNode<IntPtrT> tmp413;
  TNode<UintPtrT> tmp414;
  TNode<UintPtrT> tmp415;
  TNode<BoolT> tmp416;
  if (block329.is_used()) {
    ca_.Bind(&block329, &phi_bb329_7, &phi_bb329_9, &phi_bb329_10, &phi_bb329_12, &phi_bb329_13, &phi_bb329_15, &phi_bb329_16, &phi_bb329_20, &phi_bb329_23);
    tmp408 = CodeStubAssembler(state_).AllocateZeroedFixedArray(TNode<IntPtrT>{phi_bb327_29});
    std::tie(tmp409, tmp410, tmp411) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb329_9}).Flatten();
    tmp412 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp413 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp412});
    tmp414 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp413});
    tmp415 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp411});
    tmp416 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp414}, TNode<UintPtrT>{tmp415});
    ca_.Branch(tmp416, &block336, std::vector<compiler::Node*>{phi_bb329_7, phi_bb329_9, phi_bb329_10, phi_bb329_12, phi_bb329_13, phi_bb329_15, phi_bb329_16, phi_bb329_20, phi_bb329_23, phi_bb329_9}, &block337, std::vector<compiler::Node*>{phi_bb329_7, phi_bb329_9, phi_bb329_10, phi_bb329_12, phi_bb329_13, phi_bb329_15, phi_bb329_16, phi_bb329_20, phi_bb329_23, phi_bb329_9});
  }

  TNode<IntPtrT> phi_bb336_7;
  TNode<FixedArray> phi_bb336_9;
  TNode<IntPtrT> phi_bb336_10;
  TNode<BoolT> phi_bb336_12;
  TNode<PrimitiveHeapObject> phi_bb336_13;
  TNode<UintPtrT> phi_bb336_15;
  TNode<IntPtrT> phi_bb336_16;
  TNode<IntPtrT> phi_bb336_20;
  TNode<IntPtrT> phi_bb336_23;
  TNode<FixedArray> phi_bb336_31;
  TNode<IntPtrT> tmp417;
  TNode<IntPtrT> tmp418;
  TNode<Union<HeapObject, TaggedIndex>> tmp419;
  TNode<IntPtrT> tmp420;
  TNode<Union<HeapObject, TaggedIndex>> tmp421;
  TNode<IntPtrT> tmp422;
  TNode<IntPtrT> tmp423;
  TNode<UintPtrT> tmp424;
  TNode<IntPtrT> tmp425;
  TNode<UintPtrT> tmp426;
  TNode<UintPtrT> tmp427;
  TNode<BoolT> tmp428;
  if (block336.is_used()) {
    ca_.Bind(&block336, &phi_bb336_7, &phi_bb336_9, &phi_bb336_10, &phi_bb336_12, &phi_bb336_13, &phi_bb336_15, &phi_bb336_16, &phi_bb336_20, &phi_bb336_23, &phi_bb336_31);
    tmp417 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp413});
    tmp418 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp410}, TNode<IntPtrT>{tmp417});
    std::tie(tmp419, tmp420) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp409}, TNode<IntPtrT>{tmp418}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp419, tmp420}, tmp408);
    std::tie(tmp421, tmp422, tmp423) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp408}).Flatten();
    tmp424 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp425 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp424});
    tmp426 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp425});
    tmp427 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp423});
    tmp428 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp426}, TNode<UintPtrT>{tmp427});
    ca_.Branch(tmp428, &block345, std::vector<compiler::Node*>{phi_bb336_7, phi_bb336_9, phi_bb336_10, phi_bb336_12, phi_bb336_13, phi_bb336_15, phi_bb336_16, phi_bb336_20, phi_bb336_23}, &block346, std::vector<compiler::Node*>{phi_bb336_7, phi_bb336_9, phi_bb336_10, phi_bb336_12, phi_bb336_13, phi_bb336_15, phi_bb336_16, phi_bb336_20, phi_bb336_23});
  }

  TNode<IntPtrT> phi_bb337_7;
  TNode<FixedArray> phi_bb337_9;
  TNode<IntPtrT> phi_bb337_10;
  TNode<BoolT> phi_bb337_12;
  TNode<PrimitiveHeapObject> phi_bb337_13;
  TNode<UintPtrT> phi_bb337_15;
  TNode<IntPtrT> phi_bb337_16;
  TNode<IntPtrT> phi_bb337_20;
  TNode<IntPtrT> phi_bb337_23;
  TNode<FixedArray> phi_bb337_31;
  if (block337.is_used()) {
    ca_.Bind(&block337, &phi_bb337_7, &phi_bb337_9, &phi_bb337_10, &phi_bb337_12, &phi_bb337_13, &phi_bb337_15, &phi_bb337_16, &phi_bb337_20, &phi_bb337_23, &phi_bb337_31);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb345_7;
  TNode<FixedArray> phi_bb345_9;
  TNode<IntPtrT> phi_bb345_10;
  TNode<BoolT> phi_bb345_12;
  TNode<PrimitiveHeapObject> phi_bb345_13;
  TNode<UintPtrT> phi_bb345_15;
  TNode<IntPtrT> phi_bb345_16;
  TNode<IntPtrT> phi_bb345_20;
  TNode<IntPtrT> phi_bb345_23;
  TNode<IntPtrT> tmp429;
  TNode<IntPtrT> tmp430;
  TNode<Union<HeapObject, TaggedIndex>> tmp431;
  TNode<IntPtrT> tmp432;
  TNode<Undefined> tmp433;
  TNode<Union<HeapObject, TaggedIndex>> tmp434;
  TNode<IntPtrT> tmp435;
  TNode<IntPtrT> tmp436;
  TNode<UintPtrT> tmp437;
  TNode<IntPtrT> tmp438;
  TNode<UintPtrT> tmp439;
  TNode<UintPtrT> tmp440;
  TNode<BoolT> tmp441;
  if (block345.is_used()) {
    ca_.Bind(&block345, &phi_bb345_7, &phi_bb345_9, &phi_bb345_10, &phi_bb345_12, &phi_bb345_13, &phi_bb345_15, &phi_bb345_16, &phi_bb345_20, &phi_bb345_23);
    tmp429 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp425});
    tmp430 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp422}, TNode<IntPtrT>{tmp429});
    std::tie(tmp431, tmp432) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp421}, TNode<IntPtrT>{tmp430}).Flatten();
    tmp433 = Undefined_0(state_);
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp431, tmp432}, tmp433);
    std::tie(tmp434, tmp435, tmp436) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp408}).Flatten();
    tmp437 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp438 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp437});
    tmp439 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp438});
    tmp440 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp436});
    tmp441 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp439}, TNode<UintPtrT>{tmp440});
    ca_.Branch(tmp441, &block354, std::vector<compiler::Node*>{phi_bb345_7, phi_bb345_9, phi_bb345_10, phi_bb345_12, phi_bb345_13, phi_bb345_15, phi_bb345_16, phi_bb345_20, phi_bb345_23}, &block355, std::vector<compiler::Node*>{phi_bb345_7, phi_bb345_9, phi_bb345_10, phi_bb345_12, phi_bb345_13, phi_bb345_15, phi_bb345_16, phi_bb345_20, phi_bb345_23});
  }

  TNode<IntPtrT> phi_bb346_7;
  TNode<FixedArray> phi_bb346_9;
  TNode<IntPtrT> phi_bb346_10;
  TNode<BoolT> phi_bb346_12;
  TNode<PrimitiveHeapObject> phi_bb346_13;
  TNode<UintPtrT> phi_bb346_15;
  TNode<IntPtrT> phi_bb346_16;
  TNode<IntPtrT> phi_bb346_20;
  TNode<IntPtrT> phi_bb346_23;
  if (block346.is_used()) {
    ca_.Bind(&block346, &phi_bb346_7, &phi_bb346_9, &phi_bb346_10, &phi_bb346_12, &phi_bb346_13, &phi_bb346_15, &phi_bb346_16, &phi_bb346_20, &phi_bb346_23);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb354_7;
  TNode<FixedArray> phi_bb354_9;
  TNode<IntPtrT> phi_bb354_10;
  TNode<BoolT> phi_bb354_12;
  TNode<PrimitiveHeapObject> phi_bb354_13;
  TNode<UintPtrT> phi_bb354_15;
  TNode<IntPtrT> phi_bb354_16;
  TNode<IntPtrT> phi_bb354_20;
  TNode<IntPtrT> phi_bb354_23;
  TNode<IntPtrT> tmp442;
  TNode<IntPtrT> tmp443;
  TNode<Union<HeapObject, TaggedIndex>> tmp444;
  TNode<IntPtrT> tmp445;
  TNode<IntPtrT> tmp446;
  if (block354.is_used()) {
    ca_.Bind(&block354, &phi_bb354_7, &phi_bb354_9, &phi_bb354_10, &phi_bb354_12, &phi_bb354_13, &phi_bb354_15, &phi_bb354_16, &phi_bb354_20, &phi_bb354_23);
    tmp442 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp438});
    tmp443 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp435}, TNode<IntPtrT>{tmp442});
    std::tie(tmp444, tmp445) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp434}, TNode<IntPtrT>{tmp443}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp444, tmp445}, tmp384);
    tmp446 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    ca_.Goto(&block316, phi_bb354_7, tmp408, tmp446, phi_bb354_12, phi_bb354_13, phi_bb354_15, phi_bb354_16, phi_bb354_20, phi_bb354_23);
  }

  TNode<IntPtrT> phi_bb355_7;
  TNode<FixedArray> phi_bb355_9;
  TNode<IntPtrT> phi_bb355_10;
  TNode<BoolT> phi_bb355_12;
  TNode<PrimitiveHeapObject> phi_bb355_13;
  TNode<UintPtrT> phi_bb355_15;
  TNode<IntPtrT> phi_bb355_16;
  TNode<IntPtrT> phi_bb355_20;
  TNode<IntPtrT> phi_bb355_23;
  if (block355.is_used()) {
    ca_.Bind(&block355, &phi_bb355_7, &phi_bb355_9, &phi_bb355_10, &phi_bb355_12, &phi_bb355_13, &phi_bb355_15, &phi_bb355_16, &phi_bb355_20, &phi_bb355_23);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb316_7;
  TNode<FixedArray> phi_bb316_9;
  TNode<IntPtrT> phi_bb316_10;
  TNode<BoolT> phi_bb316_12;
  TNode<PrimitiveHeapObject> phi_bb316_13;
  TNode<UintPtrT> phi_bb316_15;
  TNode<IntPtrT> phi_bb316_16;
  TNode<IntPtrT> phi_bb316_20;
  TNode<IntPtrT> phi_bb316_23;
  TNode<Null> tmp447;
  if (block316.is_used()) {
    ca_.Bind(&block316, &phi_bb316_7, &phi_bb316_9, &phi_bb316_10, &phi_bb316_12, &phi_bb316_13, &phi_bb316_15, &phi_bb316_16, &phi_bb316_20, &phi_bb316_23);
    tmp447 = Null_0(state_);
    ca_.Goto(&block308, phi_bb316_7, phi_bb316_9, phi_bb316_10, phi_bb316_12, tmp447, phi_bb316_15, phi_bb316_16, phi_bb316_20, phi_bb316_23);
  }

  TNode<IntPtrT> phi_bb308_7;
  TNode<FixedArray> phi_bb308_9;
  TNode<IntPtrT> phi_bb308_10;
  TNode<BoolT> phi_bb308_12;
  TNode<PrimitiveHeapObject> phi_bb308_13;
  TNode<UintPtrT> phi_bb308_15;
  TNode<IntPtrT> phi_bb308_16;
  TNode<IntPtrT> phi_bb308_20;
  TNode<IntPtrT> phi_bb308_23;
  if (block308.is_used()) {
    ca_.Bind(&block308, &phi_bb308_7, &phi_bb308_9, &phi_bb308_10, &phi_bb308_12, &phi_bb308_13, &phi_bb308_15, &phi_bb308_16, &phi_bb308_20, &phi_bb308_23);
    ca_.Goto(&block301, phi_bb308_7, phi_bb308_9, phi_bb308_10, tmp383, phi_bb308_12, phi_bb308_13, phi_bb308_15, phi_bb308_16, phi_bb308_20);
  }

  TNode<IntPtrT> phi_bb301_7;
  TNode<FixedArray> phi_bb301_9;
  TNode<IntPtrT> phi_bb301_10;
  TNode<IntPtrT> phi_bb301_11;
  TNode<BoolT> phi_bb301_12;
  TNode<PrimitiveHeapObject> phi_bb301_13;
  TNode<UintPtrT> phi_bb301_15;
  TNode<IntPtrT> phi_bb301_16;
  TNode<IntPtrT> phi_bb301_20;
  TNode<String> tmp448;
  if (block301.is_used()) {
    ca_.Bind(&block301, &phi_bb301_7, &phi_bb301_9, &phi_bb301_10, &phi_bb301_11, &phi_bb301_12, &phi_bb301_13, &phi_bb301_15, &phi_bb301_16, &phi_bb301_20);
    tmp448 = BufferJoin_0(state_, TNode<Context>{p_context}, TorqueStructBuffer_0{TNode<FixedArray>{tmp21}, TNode<FixedArray>{phi_bb301_9}, TNode<IntPtrT>{phi_bb301_10}, TNode<IntPtrT>{phi_bb301_11}, TNode<BoolT>{phi_bb301_12}, TNode<PrimitiveHeapObject>{phi_bb301_13}}, TNode<String>{p_sep});
    ca_.Goto(&block358);
  }

    ca_.Bind(&block358);
  return TNode<String>{tmp448};
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=554&c=1
TNode<JSAny> ArrayJoin_JSArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, bool p_useToLocaleString, TNode<JSReceiver> p_receiver, TNode<String> p_sep, TNode<Number> p_lenNumber, TNode<JSAny> p_locales, TNode<JSAny> p_options) {
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
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block33(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<Map> tmp1;
  TNode<Int32T> tmp2;
  TNode<JSArray> tmp3;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    tmp1 = CodeStubAssembler(state_).LoadReference<Map>(CodeStubAssembler::Reference{p_receiver, tmp0});
    tmp2 = CodeStubAssembler(state_).LoadMapElementsKind(TNode<Map>{tmp1});
    compiler::CodeAssemblerLabel label4(&ca_);
    tmp3 = Cast_JSArray_0(state_, TNode<HeapObject>{p_receiver}, &label4);
    ca_.Goto(&block4);
    if (label4.is_used()) {
      ca_.Bind(&label4);
      ca_.Goto(&block5);
    }
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    ca_.Goto(&block3);
  }

  TNode<IntPtrT> tmp5;
  TNode<Number> tmp6;
  TNode<BoolT> tmp7;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp5 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp6 = CodeStubAssembler(state_).LoadReference<Number>(CodeStubAssembler::Reference{tmp3, tmp5});
    tmp7 = IsNumberNotEqual_0(state_, TNode<Number>{tmp6}, TNode<Number>{p_lenNumber});
    ca_.Branch(tmp7, &block6, std::vector<compiler::Node*>{}, &block7, std::vector<compiler::Node*>{});
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    ca_.Goto(&block3);
  }

  TNode<BoolT> tmp8;
  TNode<BoolT> tmp9;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp8 = CodeStubAssembler(state_).IsPrototypeInitialArrayPrototype(TNode<Context>{p_context}, TNode<Map>{tmp1});
    tmp9 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp8});
    ca_.Branch(tmp9, &block8, std::vector<compiler::Node*>{}, &block9, std::vector<compiler::Node*>{});
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    ca_.Goto(&block3);
  }

  TNode<BoolT> tmp10;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp10 = CodeStubAssembler(state_).IsNoElementsProtectorCellInvalid();
    ca_.Branch(tmp10, &block10, std::vector<compiler::Node*>{}, &block11, std::vector<compiler::Node*>{});
  }

  if (block10.is_used()) {
    ca_.Bind(&block10);
    ca_.Goto(&block3);
  }

  TNode<BoolT> tmp11;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp11 = CodeStubAssembler(state_).IsElementsKindLessThanOrEqual(TNode<Int32T>{tmp2}, CastIfEnumClass<ElementsKind>(ElementsKind::HOLEY_ELEMENTS));
    ca_.Branch(tmp11, &block12, std::vector<compiler::Node*>{}, &block13, std::vector<compiler::Node*>{});
  }

  if (block12.is_used()) {
    ca_.Bind(&block12);
    ca_.Goto(&block14, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinElement_FastSmiOrObjectElements_0)));
  }

  TNode<BoolT> tmp12;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    tmp12 = CodeStubAssembler(state_).IsElementsKindLessThanOrEqual(TNode<Int32T>{tmp2}, CastIfEnumClass<ElementsKind>(ElementsKind::HOLEY_DOUBLE_ELEMENTS));
    ca_.Branch(tmp12, &block15, std::vector<compiler::Node*>{}, &block16, std::vector<compiler::Node*>{});
  }

  if (block15.is_used()) {
    ca_.Bind(&block15);
    ca_.Goto(&block17, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinElement_FastDoubleElements_0)));
  }

  TNode<BoolT> tmp13;
  if (block16.is_used()) {
    ca_.Bind(&block16);
    tmp13 = CodeStubAssembler(state_).IsElementsKindLessThanOrEqual(TNode<Int32T>{tmp2}, CastIfEnumClass<ElementsKind>(ElementsKind::LAST_ANY_NONEXTENSIBLE_ELEMENTS_KIND));
    ca_.Branch(tmp13, &block18, std::vector<compiler::Node*>{}, &block19, std::vector<compiler::Node*>{});
  }

  if (block18.is_used()) {
    ca_.Bind(&block18);
    ca_.Goto(&block20, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinElement_FastSmiOrObjectElements_0)));
  }

  TNode<Int32T> tmp14;
  TNode<BoolT> tmp15;
  if (block19.is_used()) {
    ca_.Bind(&block19);
    tmp14 = FromConstexpr_ElementsKind_constexpr_DICTIONARY_ELEMENTS_0(state_, ElementsKind::DICTIONARY_ELEMENTS);
    tmp15 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp14});
    ca_.Branch(tmp15, &block21, std::vector<compiler::Node*>{}, &block22, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp16;
  TNode<FixedArrayBase> tmp17;
  TNode<NumberDictionary> tmp18;
  TNode<Smi> tmp19;
  TNode<Smi> tmp20;
  TNode<BoolT> tmp21;
  if (block21.is_used()) {
    ca_.Bind(&block21);
    tmp16 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp17 = CodeStubAssembler(state_).LoadReference<FixedArrayBase>(CodeStubAssembler::Reference{tmp3, tmp16});
    tmp18 = UnsafeCast_NumberDictionary_0(state_, TNode<Context>{p_context}, TNode<Object>{tmp17});
    tmp19 = CodeStubAssembler(state_).GetNumberDictionaryNumberOfElements(TNode<NumberDictionary>{tmp18});
    tmp20 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp21 = CodeStubAssembler(state_).SmiEqual(TNode<Smi>{tmp19}, TNode<Smi>{tmp20});
    ca_.Branch(tmp21, &block24, std::vector<compiler::Node*>{}, &block25, std::vector<compiler::Node*>{});
  }

  TNode<String> tmp22;
  TNode<BoolT> tmp23;
  if (block24.is_used()) {
    ca_.Bind(&block24);
    tmp22 = kEmptyString_0(state_);
    tmp23 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{p_sep}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp22});
    ca_.Branch(tmp23, &block27, std::vector<compiler::Node*>{}, &block28, std::vector<compiler::Node*>{});
  }

  TNode<String> tmp24;
  if (block27.is_used()) {
    ca_.Bind(&block27);
    tmp24 = kEmptyString_0(state_);
    ca_.Goto(&block1, tmp24);
  }

  TNode<Number> tmp25;
  TNode<Number> tmp26;
  TNode<Smi> tmp27;
  if (block28.is_used()) {
    ca_.Bind(&block28);
    tmp25 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp26 = CodeStubAssembler(state_).NumberSub(TNode<Number>{p_lenNumber}, TNode<Number>{tmp25});
    compiler::CodeAssemblerLabel label28(&ca_);
    tmp27 = Cast_Smi_0(state_, TNode<Object>{tmp26}, &label28);
    ca_.Goto(&block31);
    if (label28.is_used()) {
      ca_.Bind(&label28);
      ca_.Goto(&block32);
    }
  }

  if (block32.is_used()) {
    ca_.Bind(&block32);
    CodeStubAssembler(state_).CallRuntime(Runtime::kThrowInvalidStringLength, p_context);
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> tmp29;
  if (block31.is_used()) {
    ca_.Bind(&block31);
    tmp29 = ca_.CallBuiltin<String>(Builtin::kStringRepeat, p_context, p_sep, tmp27);
    ca_.Goto(&block1, tmp29);
  }

  if (block25.is_used()) {
    ca_.Bind(&block25);
    ca_.Goto(&block20, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinElement_DictionaryElements_0)));
  }

  if (block22.is_used()) {
    ca_.Bind(&block22);
    ca_.Goto(&block3);
  }

  TNode<BuiltinPtr> phi_bb20_8;
  if (block20.is_used()) {
    ca_.Bind(&block20, &phi_bb20_8);
    ca_.Goto(&block17, phi_bb20_8);
  }

  TNode<BuiltinPtr> phi_bb17_8;
  if (block17.is_used()) {
    ca_.Bind(&block17, &phi_bb17_8);
    ca_.Goto(&block14, phi_bb17_8);
  }

  TNode<BuiltinPtr> phi_bb14_8;
  if (block14.is_used()) {
    ca_.Bind(&block14, &phi_bb14_8);
    ca_.Goto(&block2, phi_bb14_8);
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    ca_.Goto(&block2, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinElement_GenericElementsAccessor_0)));
  }

  TNode<BuiltinPtr> phi_bb2_8;
  TNode<String> tmp30;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_8);
    tmp30 = ArrayJoinImpl_JSArray_0(state_, TNode<Context>{p_context}, TNode<JSReceiver>{p_receiver}, TNode<String>{p_sep}, TNode<Number>{p_lenNumber}, p_useToLocaleString, TNode<JSAny>{p_locales}, TNode<JSAny>{p_options}, TNode<BuiltinPtr>{phi_bb2_8});
    ca_.Goto(&block1, tmp30);
  }

  TNode<JSAny> phi_bb1_6;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_6);
    ca_.Goto(&block33, phi_bb1_6);
  }

  TNode<JSAny> phi_bb33_6;
    ca_.Bind(&block33, &phi_bb33_6);
  return TNode<JSAny>{phi_bb33_6};
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=606&c=1
TNode<JSAny> ArrayJoin_JSTypedArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, bool p_useToLocaleString, TNode<JSReceiver> p_receiver, TNode<String> p_sep, TNode<Number> p_lenNumber, TNode<JSAny> p_locales, TNode<JSAny> p_options) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block30(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block33(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block35(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block36(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block38(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block39(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block41(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block42(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block44(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block45(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block47(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block48(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block50(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block51(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block53(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block54(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block56(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block57(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block59(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block60(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block58(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block55(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block52(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block49(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block46(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block43(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block40(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block37(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block34(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block62(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block63(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block65(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block66(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block68(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block69(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block71(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block72(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block74(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block75(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block73(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block70(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block67(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block64(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BuiltinPtr> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block77(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<Map> tmp1;
  TNode<Int32T> tmp2;
  TNode<BoolT> tmp3;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    tmp1 = CodeStubAssembler(state_).LoadReference<Map>(CodeStubAssembler::Reference{p_receiver, tmp0});
    tmp2 = CodeStubAssembler(state_).LoadMapElementsKind(TNode<Map>{tmp1});
    tmp3 = CodeStubAssembler(state_).IsElementsKindGreaterThan(TNode<Int32T>{tmp2}, CastIfEnumClass<ElementsKind>(ElementsKind::UINT32_ELEMENTS));
    ca_.Branch(tmp3, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  TNode<Int32T> tmp4;
  TNode<BoolT> tmp5;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp4 = FromConstexpr_ElementsKind_constexpr_INT32_ELEMENTS_0(state_, ElementsKind::INT32_ELEMENTS);
    tmp5 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp4});
    ca_.Branch(tmp5, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    ca_.Goto(&block7, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_Int32Elements_0)));
  }

  TNode<Int32T> tmp6;
  TNode<BoolT> tmp7;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp6 = FromConstexpr_ElementsKind_constexpr_FLOAT16_ELEMENTS_0(state_, ElementsKind::FLOAT16_ELEMENTS);
    tmp7 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp6});
    ca_.Branch(tmp7, &block8, std::vector<compiler::Node*>{}, &block9, std::vector<compiler::Node*>{});
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    ca_.Goto(&block10, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_Float16Elements_0)));
  }

  TNode<Int32T> tmp8;
  TNode<BoolT> tmp9;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp8 = FromConstexpr_ElementsKind_constexpr_FLOAT32_ELEMENTS_0(state_, ElementsKind::FLOAT32_ELEMENTS);
    tmp9 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp8});
    ca_.Branch(tmp9, &block11, std::vector<compiler::Node*>{}, &block12, std::vector<compiler::Node*>{});
  }

  if (block11.is_used()) {
    ca_.Bind(&block11);
    ca_.Goto(&block13, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_Float32Elements_0)));
  }

  TNode<Int32T> tmp10;
  TNode<BoolT> tmp11;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    tmp10 = FromConstexpr_ElementsKind_constexpr_FLOAT64_ELEMENTS_0(state_, ElementsKind::FLOAT64_ELEMENTS);
    tmp11 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp10});
    ca_.Branch(tmp11, &block14, std::vector<compiler::Node*>{}, &block15, std::vector<compiler::Node*>{});
  }

  if (block14.is_used()) {
    ca_.Bind(&block14);
    ca_.Goto(&block16, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_Float64Elements_0)));
  }

  TNode<Int32T> tmp12;
  TNode<BoolT> tmp13;
  if (block15.is_used()) {
    ca_.Bind(&block15);
    tmp12 = FromConstexpr_ElementsKind_constexpr_UINT8_CLAMPED_ELEMENTS_0(state_, ElementsKind::UINT8_CLAMPED_ELEMENTS);
    tmp13 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp12});
    ca_.Branch(tmp13, &block17, std::vector<compiler::Node*>{}, &block18, std::vector<compiler::Node*>{});
  }

  if (block17.is_used()) {
    ca_.Bind(&block17);
    ca_.Goto(&block19, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_Uint8ClampedElements_0)));
  }

  TNode<Int32T> tmp14;
  TNode<BoolT> tmp15;
  if (block18.is_used()) {
    ca_.Bind(&block18);
    tmp14 = FromConstexpr_ElementsKind_constexpr_BIGUINT64_ELEMENTS_0(state_, ElementsKind::BIGUINT64_ELEMENTS);
    tmp15 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp14});
    ca_.Branch(tmp15, &block20, std::vector<compiler::Node*>{}, &block21, std::vector<compiler::Node*>{});
  }

  if (block20.is_used()) {
    ca_.Bind(&block20);
    ca_.Goto(&block22, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_BigUint64Elements_0)));
  }

  TNode<Int32T> tmp16;
  TNode<BoolT> tmp17;
  if (block21.is_used()) {
    ca_.Bind(&block21);
    tmp16 = FromConstexpr_ElementsKind_constexpr_BIGINT64_ELEMENTS_0(state_, ElementsKind::BIGINT64_ELEMENTS);
    tmp17 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp16});
    ca_.Branch(tmp17, &block23, std::vector<compiler::Node*>{}, &block24, std::vector<compiler::Node*>{});
  }

  if (block23.is_used()) {
    ca_.Bind(&block23);
    ca_.Goto(&block25, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_BigInt64Elements_0)));
  }

  TNode<Int32T> tmp18;
  TNode<BoolT> tmp19;
  if (block24.is_used()) {
    ca_.Bind(&block24);
    tmp18 = FromConstexpr_ElementsKind_constexpr_RAB_GSAB_UINT8_ELEMENTS_0(state_, ElementsKind::RAB_GSAB_UINT8_ELEMENTS);
    tmp19 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp18});
    ca_.Branch(tmp19, &block26, std::vector<compiler::Node*>{}, &block27, std::vector<compiler::Node*>{});
  }

  if (block26.is_used()) {
    ca_.Bind(&block26);
    ca_.Goto(&block28, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_Uint8Elements_0)));
  }

  TNode<Int32T> tmp20;
  TNode<BoolT> tmp21;
  if (block27.is_used()) {
    ca_.Bind(&block27);
    tmp20 = FromConstexpr_ElementsKind_constexpr_RAB_GSAB_INT8_ELEMENTS_0(state_, ElementsKind::RAB_GSAB_INT8_ELEMENTS);
    tmp21 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp20});
    ca_.Branch(tmp21, &block29, std::vector<compiler::Node*>{}, &block30, std::vector<compiler::Node*>{});
  }

  if (block29.is_used()) {
    ca_.Bind(&block29);
    ca_.Goto(&block31, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_Int8Elements_0)));
  }

  TNode<Int32T> tmp22;
  TNode<BoolT> tmp23;
  if (block30.is_used()) {
    ca_.Bind(&block30);
    tmp22 = FromConstexpr_ElementsKind_constexpr_RAB_GSAB_UINT16_ELEMENTS_0(state_, ElementsKind::RAB_GSAB_UINT16_ELEMENTS);
    tmp23 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp22});
    ca_.Branch(tmp23, &block32, std::vector<compiler::Node*>{}, &block33, std::vector<compiler::Node*>{});
  }

  if (block32.is_used()) {
    ca_.Bind(&block32);
    ca_.Goto(&block34, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_Uint16Elements_0)));
  }

  TNode<Int32T> tmp24;
  TNode<BoolT> tmp25;
  if (block33.is_used()) {
    ca_.Bind(&block33);
    tmp24 = FromConstexpr_ElementsKind_constexpr_RAB_GSAB_INT16_ELEMENTS_0(state_, ElementsKind::RAB_GSAB_INT16_ELEMENTS);
    tmp25 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp24});
    ca_.Branch(tmp25, &block35, std::vector<compiler::Node*>{}, &block36, std::vector<compiler::Node*>{});
  }

  if (block35.is_used()) {
    ca_.Bind(&block35);
    ca_.Goto(&block37, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_Int16Elements_0)));
  }

  TNode<Int32T> tmp26;
  TNode<BoolT> tmp27;
  if (block36.is_used()) {
    ca_.Bind(&block36);
    tmp26 = FromConstexpr_ElementsKind_constexpr_RAB_GSAB_UINT32_ELEMENTS_0(state_, ElementsKind::RAB_GSAB_UINT32_ELEMENTS);
    tmp27 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp26});
    ca_.Branch(tmp27, &block38, std::vector<compiler::Node*>{}, &block39, std::vector<compiler::Node*>{});
  }

  if (block38.is_used()) {
    ca_.Bind(&block38);
    ca_.Goto(&block40, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_Uint32Elements_0)));
  }

  TNode<Int32T> tmp28;
  TNode<BoolT> tmp29;
  if (block39.is_used()) {
    ca_.Bind(&block39);
    tmp28 = FromConstexpr_ElementsKind_constexpr_RAB_GSAB_INT32_ELEMENTS_0(state_, ElementsKind::RAB_GSAB_INT32_ELEMENTS);
    tmp29 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp28});
    ca_.Branch(tmp29, &block41, std::vector<compiler::Node*>{}, &block42, std::vector<compiler::Node*>{});
  }

  if (block41.is_used()) {
    ca_.Bind(&block41);
    ca_.Goto(&block43, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_Int32Elements_0)));
  }

  TNode<Int32T> tmp30;
  TNode<BoolT> tmp31;
  if (block42.is_used()) {
    ca_.Bind(&block42);
    tmp30 = FromConstexpr_ElementsKind_constexpr_RAB_GSAB_FLOAT16_ELEMENTS_0(state_, ElementsKind::RAB_GSAB_FLOAT16_ELEMENTS);
    tmp31 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp30});
    ca_.Branch(tmp31, &block44, std::vector<compiler::Node*>{}, &block45, std::vector<compiler::Node*>{});
  }

  if (block44.is_used()) {
    ca_.Bind(&block44);
    ca_.Goto(&block46, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_Float16Elements_0)));
  }

  TNode<Int32T> tmp32;
  TNode<BoolT> tmp33;
  if (block45.is_used()) {
    ca_.Bind(&block45);
    tmp32 = FromConstexpr_ElementsKind_constexpr_RAB_GSAB_FLOAT32_ELEMENTS_0(state_, ElementsKind::RAB_GSAB_FLOAT32_ELEMENTS);
    tmp33 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp32});
    ca_.Branch(tmp33, &block47, std::vector<compiler::Node*>{}, &block48, std::vector<compiler::Node*>{});
  }

  if (block47.is_used()) {
    ca_.Bind(&block47);
    ca_.Goto(&block49, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_Float32Elements_0)));
  }

  TNode<Int32T> tmp34;
  TNode<BoolT> tmp35;
  if (block48.is_used()) {
    ca_.Bind(&block48);
    tmp34 = FromConstexpr_ElementsKind_constexpr_RAB_GSAB_FLOAT64_ELEMENTS_0(state_, ElementsKind::RAB_GSAB_FLOAT64_ELEMENTS);
    tmp35 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp34});
    ca_.Branch(tmp35, &block50, std::vector<compiler::Node*>{}, &block51, std::vector<compiler::Node*>{});
  }

  if (block50.is_used()) {
    ca_.Bind(&block50);
    ca_.Goto(&block52, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_Float64Elements_0)));
  }

  TNode<Int32T> tmp36;
  TNode<BoolT> tmp37;
  if (block51.is_used()) {
    ca_.Bind(&block51);
    tmp36 = FromConstexpr_ElementsKind_constexpr_RAB_GSAB_UINT8_CLAMPED_ELEMENTS_0(state_, ElementsKind::RAB_GSAB_UINT8_CLAMPED_ELEMENTS);
    tmp37 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp36});
    ca_.Branch(tmp37, &block53, std::vector<compiler::Node*>{}, &block54, std::vector<compiler::Node*>{});
  }

  if (block53.is_used()) {
    ca_.Bind(&block53);
    ca_.Goto(&block55, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_Uint8ClampedElements_0)));
  }

  TNode<Int32T> tmp38;
  TNode<BoolT> tmp39;
  if (block54.is_used()) {
    ca_.Bind(&block54);
    tmp38 = FromConstexpr_ElementsKind_constexpr_RAB_GSAB_BIGUINT64_ELEMENTS_0(state_, ElementsKind::RAB_GSAB_BIGUINT64_ELEMENTS);
    tmp39 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp38});
    ca_.Branch(tmp39, &block56, std::vector<compiler::Node*>{}, &block57, std::vector<compiler::Node*>{});
  }

  if (block56.is_used()) {
    ca_.Bind(&block56);
    ca_.Goto(&block58, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_BigUint64Elements_0)));
  }

  TNode<Int32T> tmp40;
  TNode<BoolT> tmp41;
  if (block57.is_used()) {
    ca_.Bind(&block57);
    tmp40 = FromConstexpr_ElementsKind_constexpr_RAB_GSAB_BIGINT64_ELEMENTS_0(state_, ElementsKind::RAB_GSAB_BIGINT64_ELEMENTS);
    tmp41 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp40});
    ca_.Branch(tmp41, &block59, std::vector<compiler::Node*>{}, &block60, std::vector<compiler::Node*>{});
  }

  if (block59.is_used()) {
    ca_.Bind(&block59);
    ca_.Goto(&block58, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_BigInt64Elements_0)));
  }

  if (block60.is_used()) {
    ca_.Bind(&block60);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/array-join.tq:654:7");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<BuiltinPtr> phi_bb58_8;
  if (block58.is_used()) {
    ca_.Bind(&block58, &phi_bb58_8);
    ca_.Goto(&block55, phi_bb58_8);
  }

  TNode<BuiltinPtr> phi_bb55_8;
  if (block55.is_used()) {
    ca_.Bind(&block55, &phi_bb55_8);
    ca_.Goto(&block52, phi_bb55_8);
  }

  TNode<BuiltinPtr> phi_bb52_8;
  if (block52.is_used()) {
    ca_.Bind(&block52, &phi_bb52_8);
    ca_.Goto(&block49, phi_bb52_8);
  }

  TNode<BuiltinPtr> phi_bb49_8;
  if (block49.is_used()) {
    ca_.Bind(&block49, &phi_bb49_8);
    ca_.Goto(&block46, phi_bb49_8);
  }

  TNode<BuiltinPtr> phi_bb46_8;
  if (block46.is_used()) {
    ca_.Bind(&block46, &phi_bb46_8);
    ca_.Goto(&block43, phi_bb46_8);
  }

  TNode<BuiltinPtr> phi_bb43_8;
  if (block43.is_used()) {
    ca_.Bind(&block43, &phi_bb43_8);
    ca_.Goto(&block40, phi_bb43_8);
  }

  TNode<BuiltinPtr> phi_bb40_8;
  if (block40.is_used()) {
    ca_.Bind(&block40, &phi_bb40_8);
    ca_.Goto(&block37, phi_bb40_8);
  }

  TNode<BuiltinPtr> phi_bb37_8;
  if (block37.is_used()) {
    ca_.Bind(&block37, &phi_bb37_8);
    ca_.Goto(&block34, phi_bb37_8);
  }

  TNode<BuiltinPtr> phi_bb34_8;
  if (block34.is_used()) {
    ca_.Bind(&block34, &phi_bb34_8);
    ca_.Goto(&block31, phi_bb34_8);
  }

  TNode<BuiltinPtr> phi_bb31_8;
  if (block31.is_used()) {
    ca_.Bind(&block31, &phi_bb31_8);
    ca_.Goto(&block28, phi_bb31_8);
  }

  TNode<BuiltinPtr> phi_bb28_8;
  if (block28.is_used()) {
    ca_.Bind(&block28, &phi_bb28_8);
    ca_.Goto(&block25, phi_bb28_8);
  }

  TNode<BuiltinPtr> phi_bb25_8;
  if (block25.is_used()) {
    ca_.Bind(&block25, &phi_bb25_8);
    ca_.Goto(&block22, phi_bb25_8);
  }

  TNode<BuiltinPtr> phi_bb22_8;
  if (block22.is_used()) {
    ca_.Bind(&block22, &phi_bb22_8);
    ca_.Goto(&block19, phi_bb22_8);
  }

  TNode<BuiltinPtr> phi_bb19_8;
  if (block19.is_used()) {
    ca_.Bind(&block19, &phi_bb19_8);
    ca_.Goto(&block16, phi_bb19_8);
  }

  TNode<BuiltinPtr> phi_bb16_8;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_8);
    ca_.Goto(&block13, phi_bb16_8);
  }

  TNode<BuiltinPtr> phi_bb13_8;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_8);
    ca_.Goto(&block10, phi_bb13_8);
  }

  TNode<BuiltinPtr> phi_bb10_8;
  if (block10.is_used()) {
    ca_.Bind(&block10, &phi_bb10_8);
    ca_.Goto(&block7, phi_bb10_8);
  }

  TNode<BuiltinPtr> phi_bb7_8;
  if (block7.is_used()) {
    ca_.Bind(&block7, &phi_bb7_8);
    ca_.Goto(&block4, phi_bb7_8);
  }

  TNode<Int32T> tmp42;
  TNode<BoolT> tmp43;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp42 = FromConstexpr_ElementsKind_constexpr_UINT8_ELEMENTS_0(state_, ElementsKind::UINT8_ELEMENTS);
    tmp43 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp42});
    ca_.Branch(tmp43, &block62, std::vector<compiler::Node*>{}, &block63, std::vector<compiler::Node*>{});
  }

  if (block62.is_used()) {
    ca_.Bind(&block62);
    ca_.Goto(&block64, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_Uint8Elements_0)));
  }

  TNode<Int32T> tmp44;
  TNode<BoolT> tmp45;
  if (block63.is_used()) {
    ca_.Bind(&block63);
    tmp44 = FromConstexpr_ElementsKind_constexpr_INT8_ELEMENTS_0(state_, ElementsKind::INT8_ELEMENTS);
    tmp45 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp44});
    ca_.Branch(tmp45, &block65, std::vector<compiler::Node*>{}, &block66, std::vector<compiler::Node*>{});
  }

  if (block65.is_used()) {
    ca_.Bind(&block65);
    ca_.Goto(&block67, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_Int8Elements_0)));
  }

  TNode<Int32T> tmp46;
  TNode<BoolT> tmp47;
  if (block66.is_used()) {
    ca_.Bind(&block66);
    tmp46 = FromConstexpr_ElementsKind_constexpr_UINT16_ELEMENTS_0(state_, ElementsKind::UINT16_ELEMENTS);
    tmp47 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp46});
    ca_.Branch(tmp47, &block68, std::vector<compiler::Node*>{}, &block69, std::vector<compiler::Node*>{});
  }

  if (block68.is_used()) {
    ca_.Bind(&block68);
    ca_.Goto(&block70, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_Uint16Elements_0)));
  }

  TNode<Int32T> tmp48;
  TNode<BoolT> tmp49;
  if (block69.is_used()) {
    ca_.Bind(&block69);
    tmp48 = FromConstexpr_ElementsKind_constexpr_INT16_ELEMENTS_0(state_, ElementsKind::INT16_ELEMENTS);
    tmp49 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp48});
    ca_.Branch(tmp49, &block71, std::vector<compiler::Node*>{}, &block72, std::vector<compiler::Node*>{});
  }

  if (block71.is_used()) {
    ca_.Bind(&block71);
    ca_.Goto(&block73, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_Int16Elements_0)));
  }

  TNode<Int32T> tmp50;
  TNode<BoolT> tmp51;
  if (block72.is_used()) {
    ca_.Bind(&block72);
    tmp50 = FromConstexpr_ElementsKind_constexpr_UINT32_ELEMENTS_0(state_, ElementsKind::UINT32_ELEMENTS);
    tmp51 = CodeStubAssembler(state_).ElementsKindEqual(TNode<Int32T>{tmp2}, TNode<Int32T>{tmp50});
    ca_.Branch(tmp51, &block74, std::vector<compiler::Node*>{}, &block75, std::vector<compiler::Node*>{});
  }

  if (block74.is_used()) {
    ca_.Bind(&block74);
    ca_.Goto(&block73, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinTypedElement_Uint32Elements_0)));
  }

  if (block75.is_used()) {
    ca_.Bind(&block75);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/array-join.tq:668:7");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<BuiltinPtr> phi_bb73_8;
  if (block73.is_used()) {
    ca_.Bind(&block73, &phi_bb73_8);
    ca_.Goto(&block70, phi_bb73_8);
  }

  TNode<BuiltinPtr> phi_bb70_8;
  if (block70.is_used()) {
    ca_.Bind(&block70, &phi_bb70_8);
    ca_.Goto(&block67, phi_bb70_8);
  }

  TNode<BuiltinPtr> phi_bb67_8;
  if (block67.is_used()) {
    ca_.Bind(&block67, &phi_bb67_8);
    ca_.Goto(&block64, phi_bb67_8);
  }

  TNode<BuiltinPtr> phi_bb64_8;
  if (block64.is_used()) {
    ca_.Bind(&block64, &phi_bb64_8);
    ca_.Goto(&block4, phi_bb64_8);
  }

  TNode<BuiltinPtr> phi_bb4_8;
  TNode<String> tmp52;
  if (block4.is_used()) {
    ca_.Bind(&block4, &phi_bb4_8);
    tmp52 = ArrayJoinImpl_JSTypedArray_0(state_, TNode<Context>{p_context}, TNode<JSReceiver>{p_receiver}, TNode<String>{p_sep}, TNode<Number>{p_lenNumber}, p_useToLocaleString, TNode<JSAny>{p_locales}, TNode<JSAny>{p_options}, TNode<BuiltinPtr>{phi_bb4_8});
    ca_.Goto(&block77);
  }

    ca_.Bind(&block77);
  return TNode<JSAny>{tmp52};
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=682&c=1
TNode<FixedArray> LoadJoinStack_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, compiler::CodeAssemblerLabel* label_IfUninitialized) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<Union<HeapObject, TaggedIndex>> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<Union<FixedArray, Undefined>> tmp3;
  TNode<Undefined> tmp4;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = ARRAY_JOIN_STACK_INDEX_0(state_);
    std::tie(tmp1, tmp2) = NativeContextSlot_Context_FixedArray_OR_Undefined_0(state_, TNode<Context>{p_context}, TNode<IntPtrT>{tmp0}).Flatten();
    tmp3 = CodeStubAssembler(state_).LoadReference<Union<FixedArray, Undefined>>(CodeStubAssembler::Reference{tmp1, tmp2});
    compiler::CodeAssemblerLabel label5(&ca_);
    tmp4 = Cast_Undefined_2(state_, TNode<HeapObject>{tmp3}, &label5);
    ca_.Goto(&block5);
    if (label5.is_used()) {
      ca_.Bind(&label5);
      ca_.Goto(&block6);
    }
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    ca_.Goto(&block7);
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    ca_.Goto(label_IfUninitialized);
  }

    ca_.Bind(&block7);
  return TNode<FixedArray>{ca_.UncheckedCast<FixedArray>(tmp3)};
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=694&c=1
void SetJoinStack_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<FixedArray> p_stack) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<Union<HeapObject, TaggedIndex>> tmp1;
  TNode<IntPtrT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = ARRAY_JOIN_STACK_INDEX_0(state_);
    std::tie(tmp1, tmp2) = NativeContextSlot_Context_FixedArray_OR_Undefined_0(state_, TNode<Context>{p_context}, TNode<IntPtrT>{tmp0}).Flatten();
    CodeStubAssembler(state_).StoreReference<Union<FixedArray, Undefined>>(CodeStubAssembler::Reference{tmp1, tmp2}, p_stack);
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
}

TF_BUILTIN(JoinStackPush, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<FixedArray> parameter1 = UncheckedParameter<FixedArray>(Descriptor::kStack);
  USE(parameter1);
  TNode<JSReceiver> parameter2 = UncheckedParameter<JSReceiver>(Descriptor::kReceiver);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<IntPtrT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{parameter1});
    tmp1 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block3, tmp1);
  }

  TNode<IntPtrT> phi_bb3_4;
  TNode<BoolT> tmp2;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_4);
    tmp2 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb3_4}, TNode<IntPtrT>{tmp0});
    ca_.Branch(tmp2, &block1, std::vector<compiler::Node*>{phi_bb3_4}, &block2, std::vector<compiler::Node*>{phi_bb3_4});
  }

  TNode<IntPtrT> phi_bb1_4;
  TNode<Union<HeapObject, TaggedIndex>> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<UintPtrT> tmp6;
  TNode<UintPtrT> tmp7;
  TNode<BoolT> tmp8;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_4);
    std::tie(tmp3, tmp4, tmp5) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{parameter1}).Flatten();
    tmp6 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb1_4});
    tmp7 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp5});
    tmp8 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp6}, TNode<UintPtrT>{tmp7});
    ca_.Branch(tmp8, &block9, std::vector<compiler::Node*>{phi_bb1_4, phi_bb1_4, phi_bb1_4, phi_bb1_4, phi_bb1_4}, &block10, std::vector<compiler::Node*>{phi_bb1_4, phi_bb1_4, phi_bb1_4, phi_bb1_4, phi_bb1_4});
  }

  TNode<IntPtrT> phi_bb9_4;
  TNode<IntPtrT> phi_bb9_9;
  TNode<IntPtrT> phi_bb9_10;
  TNode<IntPtrT> phi_bb9_14;
  TNode<IntPtrT> phi_bb9_15;
  TNode<IntPtrT> tmp9;
  TNode<IntPtrT> tmp10;
  TNode<Union<HeapObject, TaggedIndex>> tmp11;
  TNode<IntPtrT> tmp12;
  TNode<Object> tmp13;
  TNode<TheHole> tmp14;
  TNode<BoolT> tmp15;
  if (block9.is_used()) {
    ca_.Bind(&block9, &phi_bb9_4, &phi_bb9_9, &phi_bb9_10, &phi_bb9_14, &phi_bb9_15);
    tmp9 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb9_15});
    tmp10 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp4}, TNode<IntPtrT>{tmp9});
    std::tie(tmp11, tmp12) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp3}, TNode<IntPtrT>{tmp10}).Flatten();
    tmp13 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp11, tmp12});
    tmp14 = TheHole_0(state_);
    tmp15 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp13}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp14});
    ca_.Branch(tmp15, &block13, std::vector<compiler::Node*>{phi_bb9_4}, &block14, std::vector<compiler::Node*>{phi_bb9_4});
  }

  TNode<IntPtrT> phi_bb10_4;
  TNode<IntPtrT> phi_bb10_9;
  TNode<IntPtrT> phi_bb10_10;
  TNode<IntPtrT> phi_bb10_14;
  TNode<IntPtrT> phi_bb10_15;
  if (block10.is_used()) {
    ca_.Bind(&block10, &phi_bb10_4, &phi_bb10_9, &phi_bb10_10, &phi_bb10_14, &phi_bb10_15);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb13_4;
  TNode<Union<HeapObject, TaggedIndex>> tmp16;
  TNode<IntPtrT> tmp17;
  TNode<IntPtrT> tmp18;
  TNode<UintPtrT> tmp19;
  TNode<UintPtrT> tmp20;
  TNode<BoolT> tmp21;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_4);
    std::tie(tmp16, tmp17, tmp18) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{parameter1}).Flatten();
    tmp19 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb13_4});
    tmp20 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp18});
    tmp21 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp19}, TNode<UintPtrT>{tmp20});
    ca_.Branch(tmp21, &block19, std::vector<compiler::Node*>{phi_bb13_4, phi_bb13_4, phi_bb13_4, phi_bb13_4, phi_bb13_4}, &block20, std::vector<compiler::Node*>{phi_bb13_4, phi_bb13_4, phi_bb13_4, phi_bb13_4, phi_bb13_4});
  }

  TNode<IntPtrT> phi_bb19_4;
  TNode<IntPtrT> phi_bb19_10;
  TNode<IntPtrT> phi_bb19_11;
  TNode<IntPtrT> phi_bb19_15;
  TNode<IntPtrT> phi_bb19_16;
  TNode<IntPtrT> tmp22;
  TNode<IntPtrT> tmp23;
  TNode<Union<HeapObject, TaggedIndex>> tmp24;
  TNode<IntPtrT> tmp25;
  TNode<True> tmp26;
  if (block19.is_used()) {
    ca_.Bind(&block19, &phi_bb19_4, &phi_bb19_10, &phi_bb19_11, &phi_bb19_15, &phi_bb19_16);
    tmp22 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb19_16});
    tmp23 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp17}, TNode<IntPtrT>{tmp22});
    std::tie(tmp24, tmp25) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp16}, TNode<IntPtrT>{tmp23}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp24, tmp25}, parameter2);
    tmp26 = True_0(state_);
    CodeStubAssembler(state_).Return(tmp26);
  }

  TNode<IntPtrT> phi_bb20_4;
  TNode<IntPtrT> phi_bb20_10;
  TNode<IntPtrT> phi_bb20_11;
  TNode<IntPtrT> phi_bb20_15;
  TNode<IntPtrT> phi_bb20_16;
  if (block20.is_used()) {
    ca_.Bind(&block20, &phi_bb20_4, &phi_bb20_10, &phi_bb20_11, &phi_bb20_15, &phi_bb20_16);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb14_4;
  TNode<BoolT> tmp27;
  if (block14.is_used()) {
    ca_.Bind(&block14, &phi_bb14_4);
    tmp27 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{parameter2}, TNode<Object>{tmp13});
    ca_.Branch(tmp27, &block23, std::vector<compiler::Node*>{phi_bb14_4}, &block24, std::vector<compiler::Node*>{phi_bb14_4});
  }

  TNode<IntPtrT> phi_bb23_4;
  TNode<False> tmp28;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_4);
    tmp28 = False_0(state_);
    CodeStubAssembler(state_).Return(tmp28);
  }

  TNode<IntPtrT> phi_bb24_4;
  TNode<IntPtrT> tmp29;
  TNode<IntPtrT> tmp30;
  if (block24.is_used()) {
    ca_.Bind(&block24, &phi_bb24_4);
    tmp29 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp30 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb24_4}, TNode<IntPtrT>{tmp29});
    ca_.Goto(&block3, tmp30);
  }

  TNode<IntPtrT> phi_bb2_4;
  TNode<FixedArray> tmp31;
  TNode<True> tmp32;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_4);
    tmp31 = StoreAndGrowFixedArray_JSReceiver_0(state_, TNode<FixedArray>{parameter1}, TNode<IntPtrT>{tmp0}, TNode<JSReceiver>{parameter2});
    SetJoinStack_0(state_, TNode<Context>{parameter0}, TNode<FixedArray>{tmp31});
    tmp32 = True_0(state_);
    CodeStubAssembler(state_).Return(tmp32);
  }
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=727&c=1
TNode<BoolT> JoinStackPushInline_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSReceiver> p_receiver) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block27(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block34(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block35(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block38(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<FixedArray> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = LoadJoinStack_0(state_, TNode<Context>{p_context}, &label1);
    ca_.Goto(&block4);
    if (label1.is_used()) {
      ca_.Bind(&label1);
      ca_.Goto(&block5);
    }
  }

  TNode<IntPtrT> tmp2;
  TNode<FixedArray> tmp3;
  TNode<Union<HeapObject, TaggedIndex>> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<UintPtrT> tmp7;
  TNode<IntPtrT> tmp8;
  TNode<UintPtrT> tmp9;
  TNode<UintPtrT> tmp10;
  TNode<BoolT> tmp11;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp2 = FromConstexpr_intptr_constexpr_int31_0(state_, JSArray::kMinJoinStackSize);
    tmp3 = CodeStubAssembler(state_).AllocateFixedArrayWithHoles(TNode<IntPtrT>{tmp2}, CastIfEnumClass<CodeStubAssembler::AllocationFlag>(CodeStubAssembler::AllocationFlag::kNone));
    std::tie(tmp4, tmp5, tmp6) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp3}).Flatten();
    tmp7 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp8 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp7});
    tmp9 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp8});
    tmp10 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp6});
    tmp11 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp9}, TNode<UintPtrT>{tmp10});
    ca_.Branch(tmp11, &block34, std::vector<compiler::Node*>{}, &block35, std::vector<compiler::Node*>{});
  }

  TNode<Union<HeapObject, TaggedIndex>> tmp12;
  TNode<IntPtrT> tmp13;
  TNode<IntPtrT> tmp14;
  TNode<UintPtrT> tmp15;
  TNode<IntPtrT> tmp16;
  TNode<UintPtrT> tmp17;
  TNode<UintPtrT> tmp18;
  TNode<BoolT> tmp19;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    std::tie(tmp12, tmp13, tmp14) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp0}).Flatten();
    tmp15 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp16 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp15});
    tmp17 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp16});
    tmp18 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp14});
    tmp19 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp17}, TNode<UintPtrT>{tmp18});
    ca_.Branch(tmp19, &block13, std::vector<compiler::Node*>{}, &block14, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp20;
  TNode<IntPtrT> tmp21;
  TNode<Union<HeapObject, TaggedIndex>> tmp22;
  TNode<IntPtrT> tmp23;
  TNode<Object> tmp24;
  TNode<TheHole> tmp25;
  TNode<BoolT> tmp26;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    tmp20 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp16});
    tmp21 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp13}, TNode<IntPtrT>{tmp20});
    std::tie(tmp22, tmp23) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp12}, TNode<IntPtrT>{tmp21}).Flatten();
    tmp24 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp22, tmp23});
    tmp25 = TheHole_0(state_);
    tmp26 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp24}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp25});
    ca_.Branch(tmp26, &block6, std::vector<compiler::Node*>{}, &block7, std::vector<compiler::Node*>{});
  }

  if (block14.is_used()) {
    ca_.Bind(&block14);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> tmp27;
  TNode<IntPtrT> tmp28;
  TNode<IntPtrT> tmp29;
  TNode<UintPtrT> tmp30;
  TNode<IntPtrT> tmp31;
  TNode<UintPtrT> tmp32;
  TNode<UintPtrT> tmp33;
  TNode<BoolT> tmp34;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    std::tie(tmp27, tmp28, tmp29) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp0}).Flatten();
    tmp30 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp31 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp30});
    tmp32 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp31});
    tmp33 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp29});
    tmp34 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp32}, TNode<UintPtrT>{tmp33});
    ca_.Branch(tmp34, &block23, std::vector<compiler::Node*>{}, &block24, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp35;
  TNode<IntPtrT> tmp36;
  TNode<Union<HeapObject, TaggedIndex>> tmp37;
  TNode<IntPtrT> tmp38;
  if (block23.is_used()) {
    ca_.Bind(&block23);
    tmp35 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp31});
    tmp36 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp28}, TNode<IntPtrT>{tmp35});
    std::tie(tmp37, tmp38) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp27}, TNode<IntPtrT>{tmp36}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp37, tmp38}, p_receiver);
    ca_.Goto(&block17);
  }

  if (block24.is_used()) {
    ca_.Bind(&block24);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Boolean> tmp39;
  TNode<False> tmp40;
  TNode<BoolT> tmp41;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp39 = ca_.CallBuiltin<Boolean>(Builtin::kJoinStackPush, p_context, tmp0, p_receiver);
    tmp40 = False_0(state_);
    tmp41 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp39}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp40});
    ca_.Branch(tmp41, &block27, std::vector<compiler::Node*>{}, &block28, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp42;
  if (block27.is_used()) {
    ca_.Bind(&block27);
    tmp42 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block1, tmp42);
  }

  if (block28.is_used()) {
    ca_.Bind(&block28);
    ca_.Goto(&block17);
  }

  if (block17.is_used()) {
    ca_.Bind(&block17);
    ca_.Goto(&block2);
  }

  TNode<IntPtrT> tmp43;
  TNode<IntPtrT> tmp44;
  TNode<Union<HeapObject, TaggedIndex>> tmp45;
  TNode<IntPtrT> tmp46;
  if (block34.is_used()) {
    ca_.Bind(&block34);
    tmp43 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp8});
    tmp44 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp5}, TNode<IntPtrT>{tmp43});
    std::tie(tmp45, tmp46) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp4}, TNode<IntPtrT>{tmp44}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp45, tmp46}, p_receiver);
    SetJoinStack_0(state_, TNode<Context>{p_context}, TNode<FixedArray>{tmp3});
    ca_.Goto(&block2);
  }

  if (block35.is_used()) {
    ca_.Bind(&block35);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<BoolT> tmp47;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp47 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block1, tmp47);
  }

  TNode<BoolT> phi_bb1_2;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_2);
    ca_.Goto(&block38, phi_bb1_2);
  }

  TNode<BoolT> phi_bb38_2;
    ca_.Bind(&block38, &phi_bb38_2);
  return TNode<BoolT>{phi_bb38_2};
}

TF_BUILTIN(JoinStackPop, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<FixedArray> parameter1 = UncheckedParameter<FixedArray>(Descriptor::kStack);
  USE(parameter1);
  TNode<JSReceiver> parameter2 = UncheckedParameter<JSReceiver>(Descriptor::kReceiver);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BoolT> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block15(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<IntPtrT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{parameter1});
    tmp1 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block3, tmp1);
  }

  TNode<IntPtrT> phi_bb3_4;
  TNode<BoolT> tmp2;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_4);
    tmp2 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb3_4}, TNode<IntPtrT>{tmp0});
    ca_.Branch(tmp2, &block1, std::vector<compiler::Node*>{phi_bb3_4}, &block2, std::vector<compiler::Node*>{phi_bb3_4});
  }

  TNode<IntPtrT> phi_bb1_4;
  TNode<Union<HeapObject, TaggedIndex>> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<UintPtrT> tmp6;
  TNode<UintPtrT> tmp7;
  TNode<BoolT> tmp8;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_4);
    std::tie(tmp3, tmp4, tmp5) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{parameter1}).Flatten();
    tmp6 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb1_4});
    tmp7 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp5});
    tmp8 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp6}, TNode<UintPtrT>{tmp7});
    ca_.Branch(tmp8, &block11, std::vector<compiler::Node*>{phi_bb1_4, phi_bb1_4, phi_bb1_4, phi_bb1_4, phi_bb1_4}, &block12, std::vector<compiler::Node*>{phi_bb1_4, phi_bb1_4, phi_bb1_4, phi_bb1_4, phi_bb1_4});
  }

  TNode<IntPtrT> phi_bb11_4;
  TNode<IntPtrT> phi_bb11_9;
  TNode<IntPtrT> phi_bb11_10;
  TNode<IntPtrT> phi_bb11_14;
  TNode<IntPtrT> phi_bb11_15;
  TNode<IntPtrT> tmp9;
  TNode<IntPtrT> tmp10;
  TNode<Union<HeapObject, TaggedIndex>> tmp11;
  TNode<IntPtrT> tmp12;
  TNode<Object> tmp13;
  TNode<BoolT> tmp14;
  if (block11.is_used()) {
    ca_.Bind(&block11, &phi_bb11_4, &phi_bb11_9, &phi_bb11_10, &phi_bb11_14, &phi_bb11_15);
    tmp9 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb11_15});
    tmp10 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp4}, TNode<IntPtrT>{tmp9});
    std::tie(tmp11, tmp12) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp3}, TNode<IntPtrT>{tmp10}).Flatten();
    tmp13 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp11, tmp12});
    tmp14 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp13}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{parameter2});
    ca_.Branch(tmp14, &block5, std::vector<compiler::Node*>{phi_bb11_4}, &block6, std::vector<compiler::Node*>{phi_bb11_4});
  }

  TNode<IntPtrT> phi_bb12_4;
  TNode<IntPtrT> phi_bb12_9;
  TNode<IntPtrT> phi_bb12_10;
  TNode<IntPtrT> phi_bb12_14;
  TNode<IntPtrT> phi_bb12_15;
  if (block12.is_used()) {
    ca_.Bind(&block12, &phi_bb12_4, &phi_bb12_9, &phi_bb12_10, &phi_bb12_14, &phi_bb12_15);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb5_4;
  TNode<IntPtrT> tmp15;
  TNode<BoolT> tmp16;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_4);
    tmp15 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp16 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb5_4}, TNode<IntPtrT>{tmp15});
    ca_.Branch(tmp16, &block17, std::vector<compiler::Node*>{phi_bb5_4}, &block18, std::vector<compiler::Node*>{phi_bb5_4});
  }

  TNode<IntPtrT> phi_bb17_4;
  TNode<IntPtrT> tmp17;
  TNode<BoolT> tmp18;
  if (block17.is_used()) {
    ca_.Bind(&block17, &phi_bb17_4);
    tmp17 = FromConstexpr_intptr_constexpr_int31_0(state_, JSArray::kMinJoinStackSize);
    tmp18 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{tmp0}, TNode<IntPtrT>{tmp17});
    ca_.Goto(&block19, phi_bb17_4, tmp18);
  }

  TNode<IntPtrT> phi_bb18_4;
  TNode<BoolT> tmp19;
  if (block18.is_used()) {
    ca_.Bind(&block18, &phi_bb18_4);
    tmp19 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block19, phi_bb18_4, tmp19);
  }

  TNode<IntPtrT> phi_bb19_4;
  TNode<BoolT> phi_bb19_6;
  if (block19.is_used()) {
    ca_.Bind(&block19, &phi_bb19_4, &phi_bb19_6);
    ca_.Branch(phi_bb19_6, &block15, std::vector<compiler::Node*>{phi_bb19_4}, &block16, std::vector<compiler::Node*>{phi_bb19_4});
  }

  TNode<IntPtrT> phi_bb15_4;
  TNode<IntPtrT> tmp20;
  TNode<FixedArray> tmp21;
  if (block15.is_used()) {
    ca_.Bind(&block15, &phi_bb15_4);
    tmp20 = FromConstexpr_intptr_constexpr_int31_0(state_, JSArray::kMinJoinStackSize);
    tmp21 = CodeStubAssembler(state_).AllocateFixedArrayWithHoles(TNode<IntPtrT>{tmp20}, CastIfEnumClass<CodeStubAssembler::AllocationFlag>(CodeStubAssembler::AllocationFlag::kNone));
    SetJoinStack_0(state_, TNode<Context>{parameter0}, TNode<FixedArray>{tmp21});
    ca_.Goto(&block20, phi_bb15_4);
  }

  TNode<IntPtrT> phi_bb16_4;
  TNode<Union<HeapObject, TaggedIndex>> tmp22;
  TNode<IntPtrT> tmp23;
  TNode<IntPtrT> tmp24;
  TNode<UintPtrT> tmp25;
  TNode<UintPtrT> tmp26;
  TNode<BoolT> tmp27;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_4);
    std::tie(tmp22, tmp23, tmp24) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{parameter1}).Flatten();
    tmp25 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb16_4});
    tmp26 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp24});
    tmp27 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp25}, TNode<UintPtrT>{tmp26});
    ca_.Branch(tmp27, &block25, std::vector<compiler::Node*>{phi_bb16_4, phi_bb16_4, phi_bb16_4, phi_bb16_4, phi_bb16_4}, &block26, std::vector<compiler::Node*>{phi_bb16_4, phi_bb16_4, phi_bb16_4, phi_bb16_4, phi_bb16_4});
  }

  TNode<IntPtrT> phi_bb25_4;
  TNode<IntPtrT> phi_bb25_9;
  TNode<IntPtrT> phi_bb25_10;
  TNode<IntPtrT> phi_bb25_14;
  TNode<IntPtrT> phi_bb25_15;
  TNode<IntPtrT> tmp28;
  TNode<IntPtrT> tmp29;
  TNode<Union<HeapObject, TaggedIndex>> tmp30;
  TNode<IntPtrT> tmp31;
  TNode<TheHole> tmp32;
  if (block25.is_used()) {
    ca_.Bind(&block25, &phi_bb25_4, &phi_bb25_9, &phi_bb25_10, &phi_bb25_14, &phi_bb25_15);
    tmp28 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb25_15});
    tmp29 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp23}, TNode<IntPtrT>{tmp28});
    std::tie(tmp30, tmp31) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp22}, TNode<IntPtrT>{tmp29}).Flatten();
    tmp32 = TheHole_0(state_);
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp30, tmp31}, tmp32);
    ca_.Goto(&block20, phi_bb25_4);
  }

  TNode<IntPtrT> phi_bb26_4;
  TNode<IntPtrT> phi_bb26_9;
  TNode<IntPtrT> phi_bb26_10;
  TNode<IntPtrT> phi_bb26_14;
  TNode<IntPtrT> phi_bb26_15;
  if (block26.is_used()) {
    ca_.Bind(&block26, &phi_bb26_4, &phi_bb26_9, &phi_bb26_10, &phi_bb26_14, &phi_bb26_15);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb20_4;
  TNode<Undefined> tmp33;
  if (block20.is_used()) {
    ca_.Bind(&block20, &phi_bb20_4);
    tmp33 = Undefined_0(state_);
    CodeStubAssembler(state_).Return(tmp33);
  }

  TNode<IntPtrT> phi_bb6_4;
  TNode<IntPtrT> tmp34;
  TNode<IntPtrT> tmp35;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_4);
    tmp34 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp35 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb6_4}, TNode<IntPtrT>{tmp34});
    ca_.Goto(&block3, tmp35);
  }

  TNode<IntPtrT> phi_bb2_4;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_4);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/array-join.tq:768:3");
    CodeStubAssembler(state_).Unreachable();
  }
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=772&c=1
void JoinStackPopInline_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSReceiver> p_receiver) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block30(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<FixedArray> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = LoadJoinStack_0(state_, TNode<Context>{p_context}, &label1);
    ca_.Goto(&block4);
    if (label1.is_used()) {
      ca_.Bind(&label1);
      ca_.Goto(&block5);
    }
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/array-join.tq:775:17");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> tmp2;
  TNode<Union<HeapObject, TaggedIndex>> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<UintPtrT> tmp6;
  TNode<IntPtrT> tmp7;
  TNode<UintPtrT> tmp8;
  TNode<UintPtrT> tmp9;
  TNode<BoolT> tmp10;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp2 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{tmp0});
    std::tie(tmp3, tmp4, tmp5) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp0}).Flatten();
    tmp6 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp7 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp6});
    tmp8 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp7});
    tmp9 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp5});
    tmp10 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp8}, TNode<UintPtrT>{tmp9});
    ca_.Branch(tmp10, &block13, std::vector<compiler::Node*>{}, &block14, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp11;
  TNode<IntPtrT> tmp12;
  TNode<Union<HeapObject, TaggedIndex>> tmp13;
  TNode<IntPtrT> tmp14;
  TNode<Object> tmp15;
  TNode<BoolT> tmp16;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    tmp11 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp7});
    tmp12 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp4}, TNode<IntPtrT>{tmp11});
    std::tie(tmp13, tmp14) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp3}, TNode<IntPtrT>{tmp12}).Flatten();
    tmp15 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp13, tmp14});
    tmp16 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp15}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{p_receiver});
    ca_.Branch(tmp16, &block17, std::vector<compiler::Node*>{}, &block18, std::vector<compiler::Node*>{});
  }

  if (block14.is_used()) {
    ca_.Bind(&block14);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> tmp17;
  TNode<BoolT> tmp18;
  if (block17.is_used()) {
    ca_.Bind(&block17);
    tmp17 = FromConstexpr_intptr_constexpr_int31_0(state_, JSArray::kMinJoinStackSize);
    tmp18 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{tmp2}, TNode<IntPtrT>{tmp17});
    ca_.Goto(&block19, tmp18);
  }

  TNode<BoolT> tmp19;
  if (block18.is_used()) {
    ca_.Bind(&block18);
    tmp19 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block19, tmp19);
  }

  TNode<BoolT> phi_bb19_5;
  if (block19.is_used()) {
    ca_.Bind(&block19, &phi_bb19_5);
    ca_.Branch(phi_bb19_5, &block6, std::vector<compiler::Node*>{}, &block7, std::vector<compiler::Node*>{});
  }

  TNode<Union<HeapObject, TaggedIndex>> tmp20;
  TNode<IntPtrT> tmp21;
  TNode<IntPtrT> tmp22;
  TNode<UintPtrT> tmp23;
  TNode<IntPtrT> tmp24;
  TNode<UintPtrT> tmp25;
  TNode<UintPtrT> tmp26;
  TNode<BoolT> tmp27;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    std::tie(tmp20, tmp21, tmp22) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp0}).Flatten();
    tmp23 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp24 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp23});
    tmp25 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp24});
    tmp26 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp22});
    tmp27 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp25}, TNode<UintPtrT>{tmp26});
    ca_.Branch(tmp27, &block26, std::vector<compiler::Node*>{}, &block27, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp28;
  TNode<IntPtrT> tmp29;
  TNode<Union<HeapObject, TaggedIndex>> tmp30;
  TNode<IntPtrT> tmp31;
  TNode<TheHole> tmp32;
  if (block26.is_used()) {
    ca_.Bind(&block26);
    tmp28 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp24});
    tmp29 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp21}, TNode<IntPtrT>{tmp28});
    std::tie(tmp30, tmp31) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp20}, TNode<IntPtrT>{tmp29}).Flatten();
    tmp32 = TheHole_0(state_);
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp30, tmp31}, tmp32);
    ca_.Goto(&block20);
  }

  if (block27.is_used()) {
    ca_.Bind(&block27);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<JSAny> tmp33;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp33 = ca_.CallBuiltin<JSAny>(Builtin::kJoinStackPop, p_context, tmp0, p_receiver);
    ca_.Goto(&block20);
  }

  if (block20.is_used()) {
    ca_.Bind(&block20);
    ca_.Goto(&block30);
  }

    ca_.Bind(&block30);
}

TF_BUILTIN(ArrayPrototypeJoin, CodeStubAssembler) {
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
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<JSAny> tmp1;
  TNode<JSReceiver> tmp2;
  TNode<Number> tmp3;
  TNode<Number> tmp4;
  TNode<BoolT> tmp5;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp0});
    tmp2 = CodeStubAssembler(state_).ToObject_Inline(TNode<Context>{parameter0}, TNode<JSAny>{parameter1});
    tmp3 = GetLengthProperty_0(state_, TNode<Context>{parameter0}, TNode<JSAny>{tmp2});
    tmp4 = FromConstexpr_Number_constexpr_uint32_0(state_, JSArray::kMaxArrayLength);
    tmp5 = NumberIsGreaterThan_0(state_, TNode<Number>{tmp3}, TNode<Number>{tmp4});
    ca_.Branch(tmp5, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    CodeStubAssembler(state_).ThrowTypeError(TNode<Context>{parameter0}, CastIfEnumClass<MessageTemplate>(MessageTemplate::kInvalidArrayLength));
  }

  TNode<Undefined> tmp6;
  TNode<BoolT> tmp7;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp6 = Undefined_0(state_);
    tmp7 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp1}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp6});
    ca_.Branch(tmp7, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  TNode<String> tmp8;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp8 = FromConstexpr_String_constexpr_string_0(state_, ",");
    ca_.Goto(&block5, tmp8);
  }

  TNode<String> tmp9;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp9 = CodeStubAssembler(state_).ToString_Inline(TNode<Context>{parameter0}, TNode<JSAny>{tmp1});
    ca_.Goto(&block5, tmp9);
  }

  TNode<String> phi_bb5_9;
  TNode<Number> tmp10;
  TNode<BoolT> tmp11;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_9);
    tmp10 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp11 = IsNumberEqual_0(state_, TNode<Number>{tmp3}, TNode<Number>{tmp10});
    ca_.Branch(tmp11, &block7, std::vector<compiler::Node*>{}, &block8, std::vector<compiler::Node*>{});
  }

  TNode<String> tmp12;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp12 = kEmptyString_0(state_);
    arguments.PopAndReturn(tmp12);
  }

  TNode<JSAny> tmp13;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp13 = ca_.CallBuiltin<JSAny>(Builtin::kArrayPrototypeJoinImpl, parameter0, tmp2, tmp3, phi_bb5_9);
    arguments.PopAndReturn(tmp13);
  }
}

TF_BUILTIN(ArrayPrototypeJoinImpl, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSReceiver> parameter1 = UncheckedParameter<JSReceiver>(Descriptor::kO);
  USE(parameter1);
  TNode<Number> parameter2 = UncheckedParameter<Number>(Descriptor::kLen);
  USE(parameter2);
  TNode<String> parameter3 = UncheckedParameter<String>(Descriptor::kSeparator);
  USE(parameter3);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block30(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block33(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block35(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block39(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block38(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block36(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block41(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block40(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block34(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Number> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = IsNumberNotEqual_0(state_, TNode<Number>{parameter2}, TNode<Number>{tmp0});
    ca_.Branch(tmp1, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 872});
      CodeStubAssembler(state_).FailAssert("Torque assert 'len != 0' failed", pos_stack);
    }
  }

  TNode<Number> tmp2;
  TNode<BoolT> tmp3;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp2 = FromConstexpr_Number_constexpr_uint32_0(state_, JSArray::kMaxArrayLength);
    tmp3 = NumberIsLessThanOrEqual_0(state_, TNode<Number>{parameter2}, TNode<Number>{tmp2});
    ca_.Branch(tmp3, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 873});
      CodeStubAssembler(state_).FailAssert("Torque assert 'len <= kMaxArrayLength' failed", pos_stack);
    }
  }

  TNode<Smi> tmp4;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    compiler::CodeAssemblerLabel label5(&ca_);
    tmp4 = Cast_Smi_0(state_, TNode<Object>{parameter2}, &label5);
    ca_.Goto(&block7);
    if (label5.is_used()) {
      ca_.Bind(&label5);
      ca_.Goto(&block8);
    }
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    ca_.Goto(&block6);
  }

  TNode<Smi> tmp6;
  TNode<BoolT> tmp7;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp6 = FromConstexpr_Smi_constexpr_int31_0(state_, String::kMaxLength);
    tmp7 = CodeStubAssembler(state_).SmiGreaterThan(TNode<Smi>{tmp4}, TNode<Smi>{tmp6});
    ca_.Branch(tmp7, &block9, std::vector<compiler::Node*>{}, &block10, std::vector<compiler::Node*>{});
  }

  if (block9.is_used()) {
    ca_.Bind(&block9);
    ca_.Goto(&block6);
  }

  TNode<JSArray> tmp8;
  TNode<Int32T> tmp9;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    compiler::CodeAssemblerLabel label10(&ca_);
    std::tie(tmp8, tmp9) = CastFastJSArrayForRead_0(state_, TNode<Context>{parameter0}, TNode<HeapObject>{parameter1}, &label10).Flatten();
    ca_.Goto(&block11);
    if (label10.is_used()) {
      ca_.Bind(&label10);
      ca_.Goto(&block12);
    }
  }

  if (block12.is_used()) {
    ca_.Bind(&block12);
    ca_.Goto(&block6);
  }

  TNode<BoolT> tmp11;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp11 = CodeStubAssembler(state_).IsFastSmiElementsKind(TNode<Int32T>{tmp9});
    ca_.Branch(tmp11, &block13, std::vector<compiler::Node*>{}, &block14, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp12;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    tmp12 = CodeStubAssembler(state_).IsHoleyFastElementsKind(TNode<Int32T>{tmp9});
    ca_.Branch(tmp12, &block16, std::vector<compiler::Node*>{}, &block17, std::vector<compiler::Node*>{});
  }

  TNode<String> tmp13;
  if (block16.is_used()) {
    ca_.Bind(&block16);
    compiler::CodeAssemblerLabel label14(&ca_);
    tmp13 = FastArrayJoin_0(state_, TNode<Context>{parameter0}, CastIfEnumClass<ElementsKind>(ElementsKind::HOLEY_SMI_ELEMENTS), TNode<JSArray>{tmp8}, TNode<String>{parameter3}, TNode<Smi>{tmp4}, &label14);
    ca_.Goto(&block19);
    if (label14.is_used()) {
      ca_.Bind(&label14);
      ca_.Goto(&block20);
    }
  }

  if (block20.is_used()) {
    ca_.Bind(&block20);
    ca_.Goto(&block6);
  }

  if (block19.is_used()) {
    ca_.Bind(&block19);
    CodeStubAssembler(state_).Return(tmp13);
  }

  TNode<String> tmp15;
  if (block17.is_used()) {
    ca_.Bind(&block17);
    compiler::CodeAssemblerLabel label16(&ca_);
    tmp15 = FastArrayJoin_0(state_, TNode<Context>{parameter0}, CastIfEnumClass<ElementsKind>(ElementsKind::PACKED_SMI_ELEMENTS), TNode<JSArray>{tmp8}, TNode<String>{parameter3}, TNode<Smi>{tmp4}, &label16);
    ca_.Goto(&block21);
    if (label16.is_used()) {
      ca_.Bind(&label16);
      ca_.Goto(&block22);
    }
  }

  if (block22.is_used()) {
    ca_.Bind(&block22);
    ca_.Goto(&block6);
  }

  if (block21.is_used()) {
    ca_.Bind(&block21);
    CodeStubAssembler(state_).Return(tmp15);
  }

  TNode<BoolT> tmp17;
  if (block14.is_used()) {
    ca_.Bind(&block14);
    tmp17 = CodeStubAssembler(state_).IsDoubleElementsKind(TNode<Int32T>{tmp9});
    ca_.Branch(tmp17, &block23, std::vector<compiler::Node*>{}, &block24, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp18;
  if (block23.is_used()) {
    ca_.Bind(&block23);
    tmp18 = CodeStubAssembler(state_).IsHoleyFastElementsKind(TNode<Int32T>{tmp9});
    ca_.Branch(tmp18, &block26, std::vector<compiler::Node*>{}, &block27, std::vector<compiler::Node*>{});
  }

  TNode<String> tmp19;
  if (block26.is_used()) {
    ca_.Bind(&block26);
    compiler::CodeAssemblerLabel label20(&ca_);
    tmp19 = FastArrayJoin_0(state_, TNode<Context>{parameter0}, CastIfEnumClass<ElementsKind>(ElementsKind::HOLEY_DOUBLE_ELEMENTS), TNode<JSArray>{tmp8}, TNode<String>{parameter3}, TNode<Smi>{tmp4}, &label20);
    ca_.Goto(&block29);
    if (label20.is_used()) {
      ca_.Bind(&label20);
      ca_.Goto(&block30);
    }
  }

  if (block30.is_used()) {
    ca_.Bind(&block30);
    ca_.Goto(&block6);
  }

  if (block29.is_used()) {
    ca_.Bind(&block29);
    CodeStubAssembler(state_).Return(tmp19);
  }

  TNode<String> tmp21;
  if (block27.is_used()) {
    ca_.Bind(&block27);
    compiler::CodeAssemblerLabel label22(&ca_);
    tmp21 = FastArrayJoin_0(state_, TNode<Context>{parameter0}, CastIfEnumClass<ElementsKind>(ElementsKind::PACKED_DOUBLE_ELEMENTS), TNode<JSArray>{tmp8}, TNode<String>{parameter3}, TNode<Smi>{tmp4}, &label22);
    ca_.Goto(&block31);
    if (label22.is_used()) {
      ca_.Bind(&label22);
      ca_.Goto(&block32);
    }
  }

  if (block32.is_used()) {
    ca_.Bind(&block32);
    ca_.Goto(&block6);
  }

  if (block31.is_used()) {
    ca_.Bind(&block31);
    CodeStubAssembler(state_).Return(tmp21);
  }

  TNode<BoolT> tmp23;
  if (block24.is_used()) {
    ca_.Bind(&block24);
    tmp23 = CodeStubAssembler(state_).IsFastElementsKind(TNode<Int32T>{tmp9});
    ca_.Branch(tmp23, &block33, std::vector<compiler::Node*>{}, &block34, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp24;
  if (block33.is_used()) {
    ca_.Bind(&block33);
    tmp24 = CodeStubAssembler(state_).IsHoleyFastElementsKind(TNode<Int32T>{tmp9});
    ca_.Branch(tmp24, &block35, std::vector<compiler::Node*>{}, &block36, std::vector<compiler::Node*>{});
  }

  TNode<String> tmp25;
  if (block35.is_used()) {
    ca_.Bind(&block35);
    compiler::CodeAssemblerLabel label26(&ca_);
    tmp25 = FastArrayJoin_0(state_, TNode<Context>{parameter0}, CastIfEnumClass<ElementsKind>(ElementsKind::HOLEY_ELEMENTS), TNode<JSArray>{tmp8}, TNode<String>{parameter3}, TNode<Smi>{tmp4}, &label26);
    ca_.Goto(&block38);
    if (label26.is_used()) {
      ca_.Bind(&label26);
      ca_.Goto(&block39);
    }
  }

  if (block39.is_used()) {
    ca_.Bind(&block39);
    ca_.Goto(&block6);
  }

  if (block38.is_used()) {
    ca_.Bind(&block38);
    CodeStubAssembler(state_).Return(tmp25);
  }

  TNode<String> tmp27;
  if (block36.is_used()) {
    ca_.Bind(&block36);
    compiler::CodeAssemblerLabel label28(&ca_);
    tmp27 = FastArrayJoin_0(state_, TNode<Context>{parameter0}, CastIfEnumClass<ElementsKind>(ElementsKind::PACKED_ELEMENTS), TNode<JSArray>{tmp8}, TNode<String>{parameter3}, TNode<Smi>{tmp4}, &label28);
    ca_.Goto(&block40);
    if (label28.is_used()) {
      ca_.Bind(&label28);
      ca_.Goto(&block41);
    }
  }

  if (block41.is_used()) {
    ca_.Bind(&block41);
    ca_.Goto(&block6);
  }

  if (block40.is_used()) {
    ca_.Bind(&block40);
    CodeStubAssembler(state_).Return(tmp27);
  }

  if (block34.is_used()) {
    ca_.Bind(&block34);
    ca_.Goto(&block5);
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    ca_.Goto(&block5);
  }

  TNode<Undefined> tmp29;
  TNode<Undefined> tmp30;
  TNode<JSAny> tmp31;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    CodeStubAssembler(state_).PerformStackCheck(TNode<Context>{parameter0});
    tmp29 = Undefined_0(state_);
    tmp30 = Undefined_0(state_);
    tmp31 = CycleProtectedArrayJoin_JSArray_0(state_, TNode<Context>{parameter0}, false, TNode<JSReceiver>{parameter1}, TNode<Number>{parameter2}, TNode<String>{parameter3}, TNode<JSAny>{tmp29}, TNode<JSAny>{tmp30});
    CodeStubAssembler(state_).Return(tmp31);
  }
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=931&c=1
TNode<String> ArrayPrototypeToString_Inline_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSArray> p_array) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<Number> tmp1;
  TNode<Number> tmp2;
  TNode<BoolT> tmp3;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp1 = CodeStubAssembler(state_).LoadReference<Number>(CodeStubAssembler::Reference{p_array, tmp0});
    tmp2 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp3 = IsNumberEqual_0(state_, TNode<Number>{tmp1}, TNode<Number>{tmp2});
    ca_.Branch(tmp3, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  TNode<String> tmp4;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp4 = kEmptyString_0(state_);
    ca_.Goto(&block1, tmp4);
  }

  TNode<Number> tmp5;
  TNode<BoolT> tmp6;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp5 = FromConstexpr_Number_constexpr_uint32_0(state_, JSArray::kMaxArrayLength);
    tmp6 = NumberIsGreaterThan_0(state_, TNode<Number>{tmp1}, TNode<Number>{tmp5});
    ca_.Branch(tmp6, &block4, std::vector<compiler::Node*>{}, &block5, std::vector<compiler::Node*>{});
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    CodeStubAssembler(state_).ThrowTypeError(TNode<Context>{p_context}, CastIfEnumClass<MessageTemplate>(MessageTemplate::kInvalidArrayLength));
  }

  TNode<String> tmp7;
  TNode<JSAny> tmp8;
  TNode<String> tmp9;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp7 = FromConstexpr_String_constexpr_string_0(state_, ",");
    tmp8 = ca_.CallBuiltin<JSAny>(Builtin::kArrayPrototypeJoinImpl, p_context, p_array, tmp1, tmp7);
    compiler::CodeAssemblerLabel label10(&ca_);
    tmp9 = Cast_String_1(state_, TNode<Context>{p_context}, TNode<Object>{tmp8}, &label10);
    ca_.Goto(&block8);
    if (label10.is_used()) {
      ca_.Bind(&label10);
      ca_.Goto(&block9);
    }
  }

  if (block9.is_used()) {
    ca_.Bind(&block9);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/array-join.tq:950:41");
    CodeStubAssembler(state_).Unreachable();
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    ca_.Goto(&block1, tmp9);
  }

  TNode<String> phi_bb1_2;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_2);
    ca_.Goto(&block10, phi_bb1_2);
  }

  TNode<String> phi_bb10_2;
    ca_.Bind(&block10, &phi_bb10_2);
  return TNode<String>{phi_bb10_2};
}

TF_BUILTIN(ArrayPrototypeToLocaleString, CodeStubAssembler) {
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
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<JSAny> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<JSAny> tmp3;
  TNode<JSReceiver> tmp4;
  TNode<Number> tmp5;
  TNode<Number> tmp6;
  TNode<BoolT> tmp7;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp0});
    tmp2 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp3 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp2});
    tmp4 = CodeStubAssembler(state_).ToObject_Inline(TNode<Context>{parameter0}, TNode<JSAny>{parameter1});
    tmp5 = GetLengthProperty_0(state_, TNode<Context>{parameter0}, TNode<JSAny>{tmp4});
    tmp6 = FromConstexpr_Number_constexpr_uint32_0(state_, JSArray::kMaxArrayLength);
    tmp7 = NumberIsGreaterThan_0(state_, TNode<Number>{tmp5}, TNode<Number>{tmp6});
    ca_.Branch(tmp7, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    CodeStubAssembler(state_).ThrowTypeError(TNode<Context>{parameter0}, CastIfEnumClass<MessageTemplate>(MessageTemplate::kInvalidArrayLength));
  }

  TNode<String> tmp8;
  TNode<JSAny> tmp9;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp8 = FromConstexpr_String_constexpr_string_0(state_, ",");
    tmp9 = CycleProtectedArrayJoin_JSArray_0(state_, TNode<Context>{parameter0}, true, TNode<JSReceiver>{tmp4}, TNode<Number>{tmp5}, TNode<String>{tmp8}, TNode<JSAny>{tmp1}, TNode<JSAny>{tmp3});
    arguments.PopAndReturn(tmp9);
  }
}

TF_BUILTIN(ArrayPrototypeToString, CodeStubAssembler) {
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
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSReceiver> tmp0;
  TNode<JSAny> tmp1;
  TNode<JSAny> tmp2;
  TNode<Union<JSBoundFunction, JSFunction, JSObject, JSProxy, JSWrappedFunction>> tmp3;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).ToObject_Inline(TNode<Context>{parameter0}, TNode<JSAny>{parameter1});
    tmp1 = FromConstexpr_JSAny_constexpr_string_0(state_, "join");
    tmp2 = CodeStubAssembler(state_).GetProperty(TNode<Context>{parameter0}, TNode<JSAny>{tmp0}, TNode<JSAny>{tmp1});
    compiler::CodeAssemblerLabel label4(&ca_);
    tmp3 = Cast_Callable_1(state_, TNode<Context>{parameter0}, TNode<Object>{tmp2}, &label4);
    ca_.Goto(&block3);
    if (label4.is_used()) {
      ca_.Bind(&label4);
      ca_.Goto(&block4);
    }
  }

  TNode<String> tmp5;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp5 = ca_.CallBuiltin<String>(Builtin::kObjectToString, parameter0, tmp0);
    arguments.PopAndReturn(tmp5);
  }

  TNode<JSAny> tmp6;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp6 = CodeStubAssembler(state_).Call(TNode<Context>{parameter0}, TNode<JSAny>{tmp3}, TNode<JSAny>{tmp0});
    arguments.PopAndReturn(tmp6);
  }
}

TF_BUILTIN(TypedArrayPrototypeJoin, CodeStubAssembler) {
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
  compiler::CodeAssemblerParameterizedLabel<String> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<JSAny> tmp1;
  TNode<UintPtrT> tmp2;
  TNode<JSTypedArray> tmp3;
  TNode<Undefined> tmp4;
  TNode<BoolT> tmp5;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp0});
    tmp2 = TypedArrayBuiltinsAssembler(state_).ValidateTypedArrayAndGetLength(TNode<Context>{parameter0}, TNode<JSAny>{parameter1}, "%TypedArray%.prototype.join", CastIfEnumClass<TypedArrayAccessMode>(TypedArrayAccessMode::kRead));
    tmp3 = UnsafeCast_JSTypedArray_0(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1});
    tmp4 = Undefined_0(state_);
    tmp5 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp1}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp4});
    ca_.Branch(tmp5, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<String> tmp6;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp6 = FromConstexpr_String_constexpr_string_0(state_, ",");
    ca_.Goto(&block3, tmp6);
  }

  TNode<String> tmp7;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp7 = CodeStubAssembler(state_).ToString_Inline(TNode<Context>{parameter0}, TNode<JSAny>{tmp1});
    ca_.Goto(&block3, tmp7);
  }

  TNode<String> phi_bb3_9;
  TNode<Number> tmp8;
  TNode<Undefined> tmp9;
  TNode<Undefined> tmp10;
  TNode<JSAny> tmp11;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_9);
    tmp8 = Convert_Number_uintptr_0(state_, TNode<UintPtrT>{tmp2});
    tmp9 = Undefined_0(state_);
    tmp10 = Undefined_0(state_);
    tmp11 = CycleProtectedArrayJoin_JSTypedArray_0(state_, TNode<Context>{parameter0}, false, TNode<JSReceiver>{tmp3}, TNode<Number>{tmp8}, TNode<String>{phi_bb3_9}, TNode<JSAny>{tmp9}, TNode<JSAny>{tmp10});
    arguments.PopAndReturn(tmp11);
  }
}

TF_BUILTIN(TypedArrayPrototypeToLocaleString, CodeStubAssembler) {
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
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<JSAny> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<JSAny> tmp3;
  TNode<UintPtrT> tmp4;
  TNode<JSTypedArray> tmp5;
  TNode<Number> tmp6;
  TNode<String> tmp7;
  TNode<JSAny> tmp8;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp0});
    tmp2 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp3 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp2});
    tmp4 = TypedArrayBuiltinsAssembler(state_).ValidateTypedArrayAndGetLength(TNode<Context>{parameter0}, TNode<JSAny>{parameter1}, "%TypedArray%.prototype.toLocaleString", CastIfEnumClass<TypedArrayAccessMode>(TypedArrayAccessMode::kRead));
    tmp5 = UnsafeCast_JSTypedArray_0(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1});
    tmp6 = Convert_Number_uintptr_0(state_, TNode<UintPtrT>{tmp4});
    tmp7 = FromConstexpr_String_constexpr_string_0(state_, ",");
    tmp8 = CycleProtectedArrayJoin_JSTypedArray_0(state_, TNode<Context>{parameter0}, true, TNode<JSReceiver>{tmp5}, TNode<Number>{tmp6}, TNode<String>{tmp7}, TNode<JSAny>{tmp1}, TNode<JSAny>{tmp3});
    arguments.PopAndReturn(tmp8);
  }
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=28&c=34
TNode<NumberDictionary> UnsafeCast_NumberDictionary_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o) {
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
    tmp0 = Is_NumberDictionary_Object_0(state_, TNode<Context>{p_context}, TNode<Object>{p_o});
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

  TNode<NumberDictionary> tmp1;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp1 = TORQUE_CAST(TNode<Object>{p_o});
    ca_.Goto(&block4);
  }

    ca_.Bind(&block4);
  return TNode<NumberDictionary>{tmp1};
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=44&c=46
TNode<JSAny> UnsafeCast_JSAny_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o) {
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
    tmp0 = Is_JSAny_Object_0(state_, TNode<Context>{p_context}, TNode<Object>{p_o});
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

  TNode<JSAny> tmp1;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp1 = TORQUE_CAST(TNode<Object>{p_o});
    ca_.Goto(&block4);
  }

    ca_.Bind(&block4);
  return TNode<JSAny>{tmp1};
}

TF_BUILTIN(LoadJoinElement_GenericElementsAccessor_0, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSReceiver> parameter1 = UncheckedParameter<JSReceiver>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<UintPtrT> parameter2 = UncheckedParameter<UintPtrT>(Descriptor::kK);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Number> tmp0;
  TNode<JSAny> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Convert_Number_uintptr_0(state_, TNode<UintPtrT>{parameter2});
    tmp1 = CodeStubAssembler(state_).GetProperty(TNode<Context>{parameter0}, TNode<JSAny>{parameter1}, TNode<JSAny>{tmp0});
    CodeStubAssembler(state_).Return(tmp1);
  }
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=123&c=36
TNode<JSTypedArray> UnsafeCast_JSTypedArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o) {
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
    tmp0 = Is_JSTypedArray_Object_0(state_, TNode<Context>{p_context}, TNode<Object>{p_o});
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

  TNode<JSTypedArray> tmp1;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp1 = TORQUE_CAST(TNode<Object>{p_o});
    ca_.Goto(&block4);
  }

    ca_.Bind(&block4);
  return TNode<JSTypedArray>{tmp1};
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=329&c=7
TNode<String> Cast_String_1(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o, compiler::CodeAssemblerLabel* label_CastError) {
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

  TNode<String> tmp2;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    compiler::CodeAssemblerLabel label3(&ca_);
    tmp2 = Cast_String_0(state_, TNode<HeapObject>{tmp0}, &label3);
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
  return TNode<String>{tmp2};
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=368&c=17
TNode<Int32T> Convert_int32_constexpr_int31_0(compiler::CodeAssemblerState* state_, int31_t p_i) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Int32T> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_int32_constexpr_int31_0(state_, p_i);
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TNode<Int32T>{tmp0};
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=602&c=10
TNode<String> ArrayJoinImpl_JSArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSReceiver> p_receiver, TNode<String> p_sep, TNode<Number> p_lengthNumber, bool p_useToLocaleString, TNode<JSAny> p_locales, TNode<JSAny> p_options, TNode<BuiltinPtr> p_initialLoadFn) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block5(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, BoolT> block33(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block30(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block37(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block38(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, BoolT> block39(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block35(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block36(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block40(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block44(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block43(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block46(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block45(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block47(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, BoolT, PrimitiveHeapObject, String, String, String, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block54(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, BoolT, PrimitiveHeapObject, String, String, String, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block55(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block48(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block58(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block59(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, IntPtrT> block60(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block63(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block62(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, FixedArray> block69(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, FixedArray> block70(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block78(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block79(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block87(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block88(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block49(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block41(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block34(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block91(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block96(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block95(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, FixedArray> block101(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, FixedArray> block102(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block109(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block108(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block111(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block110(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block114(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block113(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block116(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block115(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block117(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, BoolT, PrimitiveHeapObject, String, String, String, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block124(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, BoolT, PrimitiveHeapObject, String, String, String, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block125(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block118(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block128(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block129(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, IntPtrT> block130(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block133(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block132(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, FixedArray> block139(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, FixedArray> block140(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block148(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block149(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block157(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block158(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block119(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block106(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block164(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block163(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block166(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block165(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block168(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block167(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, FixedArray> block173(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, FixedArray> block174(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block105(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block92(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block179(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block178(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block181(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block180(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block182(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, BoolT, PrimitiveHeapObject, String, String, String, String, Object, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block189(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, BoolT, PrimitiveHeapObject, String, String, String, String, Object, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block190(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block183(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block193(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block194(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object, IntPtrT> block195(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block198(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block197(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object, FixedArray> block204(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object, FixedArray> block205(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block213(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block214(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block222(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block223(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block184(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block93(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT> block229(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT> block230(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, BoolT> block231(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT> block227(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT> block228(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block232(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block236(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block235(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block238(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block237(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block239(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block246(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block247(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block240(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block250(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block251(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block252(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block255(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block254(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT, FixedArray> block261(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT, FixedArray> block262(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block270(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block271(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block279(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block280(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block241(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block233(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT> block226(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block283(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<Map> tmp1;
  TNode<UintPtrT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<FixedArray> tmp5;
  TNode<FixedArray> tmp6;
  TNode<IntPtrT> tmp7;
  TNode<IntPtrT> tmp8;
  TNode<BoolT> tmp9;
  TNode<PrimitiveHeapObject> tmp10;
  TNode<UintPtrT> tmp11;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    tmp1 = CodeStubAssembler(state_).LoadReference<Map>(CodeStubAssembler::Reference{p_receiver, tmp0});
    tmp2 = Convert_uintptr_Number_0(state_, TNode<Number>{p_lengthNumber});
    tmp3 = CodeStubAssembler(state_).LoadStringLengthAsWord(TNode<String>{p_sep});
    tmp4 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    std::tie(tmp5, tmp6, tmp7, tmp8, tmp9, tmp10) = NewBuffer_0(state_, TNode<UintPtrT>{tmp2}, TNode<String>{p_sep}).Flatten();
    tmp11 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block4, tmp4, p_initialLoadFn, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11);
  }

  TNode<IntPtrT> phi_bb4_10;
  TNode<BuiltinPtr> phi_bb4_11;
  TNode<FixedArray> phi_bb4_13;
  TNode<IntPtrT> phi_bb4_14;
  TNode<IntPtrT> phi_bb4_15;
  TNode<BoolT> phi_bb4_16;
  TNode<PrimitiveHeapObject> phi_bb4_17;
  TNode<UintPtrT> phi_bb4_18;
  TNode<BoolT> tmp12;
  if (block4.is_used()) {
    ca_.Bind(&block4, &phi_bb4_10, &phi_bb4_11, &phi_bb4_13, &phi_bb4_14, &phi_bb4_15, &phi_bb4_16, &phi_bb4_17, &phi_bb4_18);
    tmp12 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{phi_bb4_18}, TNode<UintPtrT>{tmp2});
    ca_.Branch(tmp12, &block2, std::vector<compiler::Node*>{phi_bb4_10, phi_bb4_11, phi_bb4_13, phi_bb4_14, phi_bb4_15, phi_bb4_16, phi_bb4_17, phi_bb4_18}, &block3, std::vector<compiler::Node*>{phi_bb4_10, phi_bb4_11, phi_bb4_13, phi_bb4_14, phi_bb4_15, phi_bb4_16, phi_bb4_17, phi_bb4_18});
  }

  TNode<IntPtrT> phi_bb2_10;
  TNode<BuiltinPtr> phi_bb2_11;
  TNode<FixedArray> phi_bb2_13;
  TNode<IntPtrT> phi_bb2_14;
  TNode<IntPtrT> phi_bb2_15;
  TNode<BoolT> phi_bb2_16;
  TNode<PrimitiveHeapObject> phi_bb2_17;
  TNode<UintPtrT> phi_bb2_18;
  TNode<BoolT> tmp13;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_10, &phi_bb2_11, &phi_bb2_13, &phi_bb2_14, &phi_bb2_15, &phi_bb2_16, &phi_bb2_17, &phi_bb2_18);
    tmp13 = CannotUseSameArrayAccessor_JSArray_0(state_, TNode<Context>{p_context}, TNode<BuiltinPtr>{phi_bb2_11}, TNode<JSReceiver>{p_receiver}, TNode<Map>{tmp1}, TNode<Number>{p_lengthNumber});
    ca_.Branch(tmp13, &block5, std::vector<compiler::Node*>{phi_bb2_10, phi_bb2_11, phi_bb2_13, phi_bb2_14, phi_bb2_15, phi_bb2_16, phi_bb2_17, phi_bb2_18}, &block6, std::vector<compiler::Node*>{phi_bb2_10, phi_bb2_11, phi_bb2_13, phi_bb2_14, phi_bb2_15, phi_bb2_16, phi_bb2_17, phi_bb2_18});
  }

  TNode<IntPtrT> phi_bb5_10;
  TNode<BuiltinPtr> phi_bb5_11;
  TNode<FixedArray> phi_bb5_13;
  TNode<IntPtrT> phi_bb5_14;
  TNode<IntPtrT> phi_bb5_15;
  TNode<BoolT> phi_bb5_16;
  TNode<PrimitiveHeapObject> phi_bb5_17;
  TNode<UintPtrT> phi_bb5_18;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_10, &phi_bb5_11, &phi_bb5_13, &phi_bb5_14, &phi_bb5_15, &phi_bb5_16, &phi_bb5_17, &phi_bb5_18);
    ca_.Goto(&block6, phi_bb5_10, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinElement_GenericElementsAccessor_0)), phi_bb5_13, phi_bb5_14, phi_bb5_15, phi_bb5_16, phi_bb5_17, phi_bb5_18);
  }

  TNode<IntPtrT> phi_bb6_10;
  TNode<BuiltinPtr> phi_bb6_11;
  TNode<FixedArray> phi_bb6_13;
  TNode<IntPtrT> phi_bb6_14;
  TNode<IntPtrT> phi_bb6_15;
  TNode<BoolT> phi_bb6_16;
  TNode<PrimitiveHeapObject> phi_bb6_17;
  TNode<UintPtrT> phi_bb6_18;
  TNode<UintPtrT> tmp14;
  TNode<BoolT> tmp15;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_10, &phi_bb6_11, &phi_bb6_13, &phi_bb6_14, &phi_bb6_15, &phi_bb6_16, &phi_bb6_17, &phi_bb6_18);
    tmp14 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp15 = CodeStubAssembler(state_).UintPtrGreaterThan(TNode<UintPtrT>{phi_bb6_18}, TNode<UintPtrT>{tmp14});
    ca_.Branch(tmp15, &block7, std::vector<compiler::Node*>{phi_bb6_10, phi_bb6_13, phi_bb6_14, phi_bb6_15, phi_bb6_16, phi_bb6_17, phi_bb6_18}, &block8, std::vector<compiler::Node*>{phi_bb6_10, phi_bb6_13, phi_bb6_14, phi_bb6_15, phi_bb6_16, phi_bb6_17, phi_bb6_18});
  }

  TNode<IntPtrT> phi_bb7_10;
  TNode<FixedArray> phi_bb7_13;
  TNode<IntPtrT> phi_bb7_14;
  TNode<IntPtrT> phi_bb7_15;
  TNode<BoolT> phi_bb7_16;
  TNode<PrimitiveHeapObject> phi_bb7_17;
  TNode<UintPtrT> phi_bb7_18;
  TNode<IntPtrT> tmp16;
  TNode<IntPtrT> tmp17;
  if (block7.is_used()) {
    ca_.Bind(&block7, &phi_bb7_10, &phi_bb7_13, &phi_bb7_14, &phi_bb7_15, &phi_bb7_16, &phi_bb7_17, &phi_bb7_18);
    tmp16 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp17 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb7_10}, TNode<IntPtrT>{tmp16});
    ca_.Goto(&block8, tmp17, phi_bb7_13, phi_bb7_14, phi_bb7_15, phi_bb7_16, phi_bb7_17, phi_bb7_18);
  }

  TNode<IntPtrT> phi_bb8_10;
  TNode<FixedArray> phi_bb8_13;
  TNode<IntPtrT> phi_bb8_14;
  TNode<IntPtrT> phi_bb8_15;
  TNode<BoolT> phi_bb8_16;
  TNode<PrimitiveHeapObject> phi_bb8_17;
  TNode<UintPtrT> phi_bb8_18;
  TNode<UintPtrT> tmp18;
  TNode<UintPtrT> tmp19;
  TNode<JSAny> tmp20;
  if (block8.is_used()) {
    ca_.Bind(&block8, &phi_bb8_10, &phi_bb8_13, &phi_bb8_14, &phi_bb8_15, &phi_bb8_16, &phi_bb8_17, &phi_bb8_18);
    tmp18 = FromConstexpr_uintptr_constexpr_int31_0(state_, 1);
    tmp19 = CodeStubAssembler(state_).UintPtrAdd(TNode<UintPtrT>{phi_bb8_18}, TNode<UintPtrT>{tmp18});
tmp20 = TORQUE_CAST(CodeStubAssembler(state_).CallBuiltinPointer(Builtins::CallInterfaceDescriptorFor(ExampleBuiltinForTorqueFunctionPointerType(0)), phi_bb6_11, p_context, p_receiver, phi_bb8_18));
    if ((p_useToLocaleString)) {
      ca_.Goto(&block9, phi_bb8_13, phi_bb8_14, phi_bb8_15, phi_bb8_16, phi_bb8_17);
    } else {
      ca_.Goto(&block10, phi_bb8_13, phi_bb8_14, phi_bb8_15, phi_bb8_16, phi_bb8_17);
    }
  }

  TNode<FixedArray> phi_bb9_13;
  TNode<IntPtrT> phi_bb9_14;
  TNode<IntPtrT> phi_bb9_15;
  TNode<BoolT> phi_bb9_16;
  TNode<PrimitiveHeapObject> phi_bb9_17;
  TNode<String> tmp21;
  TNode<String> tmp22;
  TNode<BoolT> tmp23;
  if (block9.is_used()) {
    ca_.Bind(&block9, &phi_bb9_13, &phi_bb9_14, &phi_bb9_15, &phi_bb9_16, &phi_bb9_17);
    tmp21 = ca_.CallBuiltin<String>(Builtin::kConvertToLocaleString, p_context, tmp20, p_locales, p_options);
    tmp22 = kEmptyString_0(state_);
    tmp23 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp21}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp22});
    ca_.Branch(tmp23, &block12, std::vector<compiler::Node*>{phi_bb9_13, phi_bb9_14, phi_bb9_15, phi_bb9_16, phi_bb9_17}, &block13, std::vector<compiler::Node*>{phi_bb9_13, phi_bb9_14, phi_bb9_15, phi_bb9_16, phi_bb9_17});
  }

  TNode<FixedArray> phi_bb12_13;
  TNode<IntPtrT> phi_bb12_14;
  TNode<IntPtrT> phi_bb12_15;
  TNode<BoolT> phi_bb12_16;
  TNode<PrimitiveHeapObject> phi_bb12_17;
  if (block12.is_used()) {
    ca_.Bind(&block12, &phi_bb12_13, &phi_bb12_14, &phi_bb12_15, &phi_bb12_16, &phi_bb12_17);
    ca_.Goto(&block4, phi_bb8_10, phi_bb6_11, phi_bb12_13, phi_bb12_14, phi_bb12_15, phi_bb12_16, phi_bb12_17, tmp19);
  }

  TNode<FixedArray> phi_bb13_13;
  TNode<IntPtrT> phi_bb13_14;
  TNode<IntPtrT> phi_bb13_15;
  TNode<BoolT> phi_bb13_16;
  TNode<PrimitiveHeapObject> phi_bb13_17;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_13, &phi_bb13_14, &phi_bb13_15, &phi_bb13_16, &phi_bb13_17);
    ca_.Goto(&block11, phi_bb13_13, phi_bb13_14, phi_bb13_15, phi_bb13_16, phi_bb13_17, tmp21);
  }

  TNode<FixedArray> phi_bb10_13;
  TNode<IntPtrT> phi_bb10_14;
  TNode<IntPtrT> phi_bb10_15;
  TNode<BoolT> phi_bb10_16;
  TNode<PrimitiveHeapObject> phi_bb10_17;
  TNode<String> tmp24;
  if (block10.is_used()) {
    ca_.Bind(&block10, &phi_bb10_13, &phi_bb10_14, &phi_bb10_15, &phi_bb10_16, &phi_bb10_17);
    compiler::CodeAssemblerLabel label25(&ca_);
    tmp24 = Cast_String_1(state_, TNode<Context>{p_context}, TNode<Object>{tmp20}, &label25);
    ca_.Goto(&block16, phi_bb10_13, phi_bb10_14, phi_bb10_15, phi_bb10_16, phi_bb10_17);
    if (label25.is_used()) {
      ca_.Bind(&label25);
      ca_.Goto(&block17, phi_bb10_13, phi_bb10_14, phi_bb10_15, phi_bb10_16, phi_bb10_17);
    }
  }

  TNode<FixedArray> phi_bb17_13;
  TNode<IntPtrT> phi_bb17_14;
  TNode<IntPtrT> phi_bb17_15;
  TNode<BoolT> phi_bb17_16;
  TNode<PrimitiveHeapObject> phi_bb17_17;
  TNode<Number> tmp26;
  if (block17.is_used()) {
    ca_.Bind(&block17, &phi_bb17_13, &phi_bb17_14, &phi_bb17_15, &phi_bb17_16, &phi_bb17_17);
    compiler::CodeAssemblerLabel label27(&ca_);
    tmp26 = Cast_Number_0(state_, TNode<Object>{ca_.UncheckedCast<Union<BigInt, Boolean, HeapNumber, JSReceiver, Null, Smi, Symbol, Undefined>>(tmp20)}, &label27);
    ca_.Goto(&block22, phi_bb17_13, phi_bb17_14, phi_bb17_15, phi_bb17_16, phi_bb17_17);
    if (label27.is_used()) {
      ca_.Bind(&label27);
      ca_.Goto(&block23, phi_bb17_13, phi_bb17_14, phi_bb17_15, phi_bb17_16, phi_bb17_17);
    }
  }

  TNode<FixedArray> phi_bb16_13;
  TNode<IntPtrT> phi_bb16_14;
  TNode<IntPtrT> phi_bb16_15;
  TNode<BoolT> phi_bb16_16;
  TNode<PrimitiveHeapObject> phi_bb16_17;
  TNode<String> tmp28;
  TNode<BoolT> tmp29;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_13, &phi_bb16_14, &phi_bb16_15, &phi_bb16_16, &phi_bb16_17);
    tmp28 = kEmptyString_0(state_);
    tmp29 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp24}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp28});
    ca_.Branch(tmp29, &block18, std::vector<compiler::Node*>{phi_bb16_13, phi_bb16_14, phi_bb16_15, phi_bb16_16, phi_bb16_17}, &block19, std::vector<compiler::Node*>{phi_bb16_13, phi_bb16_14, phi_bb16_15, phi_bb16_16, phi_bb16_17});
  }

  TNode<FixedArray> phi_bb18_13;
  TNode<IntPtrT> phi_bb18_14;
  TNode<IntPtrT> phi_bb18_15;
  TNode<BoolT> phi_bb18_16;
  TNode<PrimitiveHeapObject> phi_bb18_17;
  if (block18.is_used()) {
    ca_.Bind(&block18, &phi_bb18_13, &phi_bb18_14, &phi_bb18_15, &phi_bb18_16, &phi_bb18_17);
    ca_.Goto(&block4, phi_bb8_10, phi_bb6_11, phi_bb18_13, phi_bb18_14, phi_bb18_15, phi_bb18_16, phi_bb18_17, tmp19);
  }

  TNode<FixedArray> phi_bb19_13;
  TNode<IntPtrT> phi_bb19_14;
  TNode<IntPtrT> phi_bb19_15;
  TNode<BoolT> phi_bb19_16;
  TNode<PrimitiveHeapObject> phi_bb19_17;
  if (block19.is_used()) {
    ca_.Bind(&block19, &phi_bb19_13, &phi_bb19_14, &phi_bb19_15, &phi_bb19_16, &phi_bb19_17);
    ca_.Goto(&block14, phi_bb19_13, phi_bb19_14, phi_bb19_15, phi_bb19_16, phi_bb19_17, tmp24);
  }

  TNode<FixedArray> phi_bb23_13;
  TNode<IntPtrT> phi_bb23_14;
  TNode<IntPtrT> phi_bb23_15;
  TNode<BoolT> phi_bb23_16;
  TNode<PrimitiveHeapObject> phi_bb23_17;
  TNode<BoolT> tmp30;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_13, &phi_bb23_14, &phi_bb23_15, &phi_bb23_16, &phi_bb23_17);
    tmp30 = CodeStubAssembler(state_).IsNullOrUndefined(TNode<Object>{ca_.UncheckedCast<Union<BigInt, Boolean, JSReceiver, Null, Symbol, Undefined>>(tmp20)});
    ca_.Branch(tmp30, &block24, std::vector<compiler::Node*>{phi_bb23_13, phi_bb23_14, phi_bb23_15, phi_bb23_16, phi_bb23_17}, &block25, std::vector<compiler::Node*>{phi_bb23_13, phi_bb23_14, phi_bb23_15, phi_bb23_16, phi_bb23_17});
  }

  TNode<FixedArray> phi_bb22_13;
  TNode<IntPtrT> phi_bb22_14;
  TNode<IntPtrT> phi_bb22_15;
  TNode<BoolT> phi_bb22_16;
  TNode<PrimitiveHeapObject> phi_bb22_17;
  TNode<String> tmp31;
  if (block22.is_used()) {
    ca_.Bind(&block22, &phi_bb22_13, &phi_bb22_14, &phi_bb22_15, &phi_bb22_16, &phi_bb22_17);
    tmp31 = CodeStubAssembler(state_).NumberToString(TNode<Number>{tmp26});
    ca_.Goto(&block20, phi_bb22_13, phi_bb22_14, phi_bb22_15, phi_bb22_16, phi_bb22_17, tmp31);
  }

  TNode<FixedArray> phi_bb24_13;
  TNode<IntPtrT> phi_bb24_14;
  TNode<IntPtrT> phi_bb24_15;
  TNode<BoolT> phi_bb24_16;
  TNode<PrimitiveHeapObject> phi_bb24_17;
  if (block24.is_used()) {
    ca_.Bind(&block24, &phi_bb24_13, &phi_bb24_14, &phi_bb24_15, &phi_bb24_16, &phi_bb24_17);
    ca_.Goto(&block4, phi_bb8_10, phi_bb6_11, phi_bb24_13, phi_bb24_14, phi_bb24_15, phi_bb24_16, phi_bb24_17, tmp19);
  }

  TNode<FixedArray> phi_bb25_13;
  TNode<IntPtrT> phi_bb25_14;
  TNode<IntPtrT> phi_bb25_15;
  TNode<BoolT> phi_bb25_16;
  TNode<PrimitiveHeapObject> phi_bb25_17;
  TNode<String> tmp32;
  TNode<String> tmp33;
  TNode<BoolT> tmp34;
  if (block25.is_used()) {
    ca_.Bind(&block25, &phi_bb25_13, &phi_bb25_14, &phi_bb25_15, &phi_bb25_16, &phi_bb25_17);
    tmp32 = ToString_Inline_0(state_, TNode<Context>{p_context}, TNode<JSAny>{ca_.UncheckedCast<Union<BigInt, Boolean, JSReceiver, Null, Symbol, Undefined>>(tmp20)});
    tmp33 = kEmptyString_0(state_);
    tmp34 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp32}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp33});
    ca_.Branch(tmp34, &block26, std::vector<compiler::Node*>{phi_bb25_13, phi_bb25_14, phi_bb25_15, phi_bb25_16, phi_bb25_17}, &block27, std::vector<compiler::Node*>{phi_bb25_13, phi_bb25_14, phi_bb25_15, phi_bb25_16, phi_bb25_17});
  }

  TNode<FixedArray> phi_bb26_13;
  TNode<IntPtrT> phi_bb26_14;
  TNode<IntPtrT> phi_bb26_15;
  TNode<BoolT> phi_bb26_16;
  TNode<PrimitiveHeapObject> phi_bb26_17;
  if (block26.is_used()) {
    ca_.Bind(&block26, &phi_bb26_13, &phi_bb26_14, &phi_bb26_15, &phi_bb26_16, &phi_bb26_17);
    ca_.Goto(&block4, phi_bb8_10, phi_bb6_11, phi_bb26_13, phi_bb26_14, phi_bb26_15, phi_bb26_16, phi_bb26_17, tmp19);
  }

  TNode<FixedArray> phi_bb27_13;
  TNode<IntPtrT> phi_bb27_14;
  TNode<IntPtrT> phi_bb27_15;
  TNode<BoolT> phi_bb27_16;
  TNode<PrimitiveHeapObject> phi_bb27_17;
  if (block27.is_used()) {
    ca_.Bind(&block27, &phi_bb27_13, &phi_bb27_14, &phi_bb27_15, &phi_bb27_16, &phi_bb27_17);
    ca_.Goto(&block20, phi_bb27_13, phi_bb27_14, phi_bb27_15, phi_bb27_16, phi_bb27_17, tmp32);
  }

  TNode<FixedArray> phi_bb20_13;
  TNode<IntPtrT> phi_bb20_14;
  TNode<IntPtrT> phi_bb20_15;
  TNode<BoolT> phi_bb20_16;
  TNode<PrimitiveHeapObject> phi_bb20_17;
  TNode<String> phi_bb20_20;
  if (block20.is_used()) {
    ca_.Bind(&block20, &phi_bb20_13, &phi_bb20_14, &phi_bb20_15, &phi_bb20_16, &phi_bb20_17, &phi_bb20_20);
    ca_.Goto(&block14, phi_bb20_13, phi_bb20_14, phi_bb20_15, phi_bb20_16, phi_bb20_17, phi_bb20_20);
  }

  TNode<FixedArray> phi_bb14_13;
  TNode<IntPtrT> phi_bb14_14;
  TNode<IntPtrT> phi_bb14_15;
  TNode<BoolT> phi_bb14_16;
  TNode<PrimitiveHeapObject> phi_bb14_17;
  TNode<String> phi_bb14_20;
  if (block14.is_used()) {
    ca_.Bind(&block14, &phi_bb14_13, &phi_bb14_14, &phi_bb14_15, &phi_bb14_16, &phi_bb14_17, &phi_bb14_20);
    ca_.Goto(&block11, phi_bb14_13, phi_bb14_14, phi_bb14_15, phi_bb14_16, phi_bb14_17, phi_bb14_20);
  }

  TNode<FixedArray> phi_bb11_13;
  TNode<IntPtrT> phi_bb11_14;
  TNode<IntPtrT> phi_bb11_15;
  TNode<BoolT> phi_bb11_16;
  TNode<PrimitiveHeapObject> phi_bb11_17;
  TNode<String> phi_bb11_20;
  TNode<IntPtrT> tmp35;
  TNode<BoolT> tmp36;
  if (block11.is_used()) {
    ca_.Bind(&block11, &phi_bb11_13, &phi_bb11_14, &phi_bb11_15, &phi_bb11_16, &phi_bb11_17, &phi_bb11_20);
    tmp35 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp36 = CodeStubAssembler(state_).WordNotEqual(TNode<IntPtrT>{phi_bb11_14}, TNode<IntPtrT>{tmp35});
    ca_.Branch(tmp36, &block31, std::vector<compiler::Node*>{phi_bb11_13, phi_bb11_14, phi_bb11_15, phi_bb11_16, phi_bb11_17, phi_bb11_20, phi_bb11_20, phi_bb11_20}, &block32, std::vector<compiler::Node*>{phi_bb11_13, phi_bb11_14, phi_bb11_15, phi_bb11_16, phi_bb11_17, phi_bb11_20, phi_bb11_20, phi_bb11_20});
  }

  TNode<FixedArray> phi_bb31_13;
  TNode<IntPtrT> phi_bb31_14;
  TNode<IntPtrT> phi_bb31_15;
  TNode<BoolT> phi_bb31_16;
  TNode<PrimitiveHeapObject> phi_bb31_17;
  TNode<String> phi_bb31_20;
  TNode<String> phi_bb31_21;
  TNode<String> phi_bb31_26;
  TNode<BoolT> tmp37;
  if (block31.is_used()) {
    ca_.Bind(&block31, &phi_bb31_13, &phi_bb31_14, &phi_bb31_15, &phi_bb31_16, &phi_bb31_17, &phi_bb31_20, &phi_bb31_21, &phi_bb31_26);
    tmp37 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block33, phi_bb31_13, phi_bb31_14, phi_bb31_15, phi_bb31_16, phi_bb31_17, phi_bb31_20, phi_bb31_21, phi_bb31_26, tmp37);
  }

  TNode<FixedArray> phi_bb32_13;
  TNode<IntPtrT> phi_bb32_14;
  TNode<IntPtrT> phi_bb32_15;
  TNode<BoolT> phi_bb32_16;
  TNode<PrimitiveHeapObject> phi_bb32_17;
  TNode<String> phi_bb32_20;
  TNode<String> phi_bb32_21;
  TNode<String> phi_bb32_26;
  TNode<BoolT> tmp38;
  if (block32.is_used()) {
    ca_.Bind(&block32, &phi_bb32_13, &phi_bb32_14, &phi_bb32_15, &phi_bb32_16, &phi_bb32_17, &phi_bb32_20, &phi_bb32_21, &phi_bb32_26);
    tmp38 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp5}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{phi_bb32_13});
    ca_.Goto(&block33, phi_bb32_13, phi_bb32_14, phi_bb32_15, phi_bb32_16, phi_bb32_17, phi_bb32_20, phi_bb32_21, phi_bb32_26, tmp38);
  }

  TNode<FixedArray> phi_bb33_13;
  TNode<IntPtrT> phi_bb33_14;
  TNode<IntPtrT> phi_bb33_15;
  TNode<BoolT> phi_bb33_16;
  TNode<PrimitiveHeapObject> phi_bb33_17;
  TNode<String> phi_bb33_20;
  TNode<String> phi_bb33_21;
  TNode<String> phi_bb33_26;
  TNode<BoolT> phi_bb33_30;
  if (block33.is_used()) {
    ca_.Bind(&block33, &phi_bb33_13, &phi_bb33_14, &phi_bb33_15, &phi_bb33_16, &phi_bb33_17, &phi_bb33_20, &phi_bb33_21, &phi_bb33_26, &phi_bb33_30);
    ca_.Branch(phi_bb33_30, &block29, std::vector<compiler::Node*>{phi_bb33_13, phi_bb33_14, phi_bb33_15, phi_bb33_16, phi_bb33_17, phi_bb33_20, phi_bb33_21, phi_bb33_26}, &block30, std::vector<compiler::Node*>{phi_bb33_13, phi_bb33_14, phi_bb33_15, phi_bb33_16, phi_bb33_17, phi_bb33_20, phi_bb33_21, phi_bb33_26});
  }

  TNode<FixedArray> phi_bb30_13;
  TNode<IntPtrT> phi_bb30_14;
  TNode<IntPtrT> phi_bb30_15;
  TNode<BoolT> phi_bb30_16;
  TNode<PrimitiveHeapObject> phi_bb30_17;
  TNode<String> phi_bb30_20;
  TNode<String> phi_bb30_21;
  TNode<String> phi_bb30_26;
  if (block30.is_used()) {
    ca_.Bind(&block30, &phi_bb30_13, &phi_bb30_14, &phi_bb30_15, &phi_bb30_16, &phi_bb30_17, &phi_bb30_20, &phi_bb30_21, &phi_bb30_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 184});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index != 1 || this.head == this.chunk' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb29_13;
  TNode<IntPtrT> phi_bb29_14;
  TNode<IntPtrT> phi_bb29_15;
  TNode<BoolT> phi_bb29_16;
  TNode<PrimitiveHeapObject> phi_bb29_17;
  TNode<String> phi_bb29_20;
  TNode<String> phi_bb29_21;
  TNode<String> phi_bb29_26;
  TNode<IntPtrT> tmp39;
  TNode<BoolT> tmp40;
  TNode<IntPtrT> tmp41;
  TNode<BoolT> tmp42;
  TNode<BoolT> tmp43;
  TNode<IntPtrT> tmp44;
  TNode<BoolT> tmp45;
  if (block29.is_used()) {
    ca_.Bind(&block29, &phi_bb29_13, &phi_bb29_14, &phi_bb29_15, &phi_bb29_16, &phi_bb29_17, &phi_bb29_20, &phi_bb29_21, &phi_bb29_26);
    tmp39 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp40 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb29_14}, TNode<IntPtrT>{tmp39});
    tmp41 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp42 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{phi_bb8_10}, TNode<IntPtrT>{tmp41});
    tmp43 = CodeStubAssembler(state_).Word32Or(TNode<BoolT>{tmp40}, TNode<BoolT>{tmp42});
    tmp44 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp45 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb8_10}, TNode<IntPtrT>{tmp44});
    ca_.Branch(tmp45, &block37, std::vector<compiler::Node*>{phi_bb29_13, phi_bb29_14, phi_bb29_15, phi_bb29_16, phi_bb29_17, phi_bb29_20, phi_bb29_21, phi_bb29_26}, &block38, std::vector<compiler::Node*>{phi_bb29_13, phi_bb29_14, phi_bb29_15, phi_bb29_16, phi_bb29_17, phi_bb29_20, phi_bb29_21, phi_bb29_26});
  }

  TNode<FixedArray> phi_bb37_13;
  TNode<IntPtrT> phi_bb37_14;
  TNode<IntPtrT> phi_bb37_15;
  TNode<BoolT> phi_bb37_16;
  TNode<PrimitiveHeapObject> phi_bb37_17;
  TNode<String> phi_bb37_20;
  TNode<String> phi_bb37_21;
  TNode<String> phi_bb37_26;
  TNode<BoolT> tmp46;
  if (block37.is_used()) {
    ca_.Bind(&block37, &phi_bb37_13, &phi_bb37_14, &phi_bb37_15, &phi_bb37_16, &phi_bb37_17, &phi_bb37_20, &phi_bb37_21, &phi_bb37_26);
    tmp46 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block39, phi_bb37_13, phi_bb37_14, phi_bb37_15, phi_bb37_16, phi_bb37_17, phi_bb37_20, phi_bb37_21, phi_bb37_26, tmp46);
  }

  TNode<FixedArray> phi_bb38_13;
  TNode<IntPtrT> phi_bb38_14;
  TNode<IntPtrT> phi_bb38_15;
  TNode<BoolT> phi_bb38_16;
  TNode<PrimitiveHeapObject> phi_bb38_17;
  TNode<String> phi_bb38_20;
  TNode<String> phi_bb38_21;
  TNode<String> phi_bb38_26;
  TNode<IntPtrT> tmp47;
  TNode<BoolT> tmp48;
  if (block38.is_used()) {
    ca_.Bind(&block38, &phi_bb38_13, &phi_bb38_14, &phi_bb38_15, &phi_bb38_16, &phi_bb38_17, &phi_bb38_20, &phi_bb38_21, &phi_bb38_26);
    tmp47 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp48 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{tmp3}, TNode<IntPtrT>{tmp47});
    ca_.Goto(&block39, phi_bb38_13, phi_bb38_14, phi_bb38_15, phi_bb38_16, phi_bb38_17, phi_bb38_20, phi_bb38_21, phi_bb38_26, tmp48);
  }

  TNode<FixedArray> phi_bb39_13;
  TNode<IntPtrT> phi_bb39_14;
  TNode<IntPtrT> phi_bb39_15;
  TNode<BoolT> phi_bb39_16;
  TNode<PrimitiveHeapObject> phi_bb39_17;
  TNode<String> phi_bb39_20;
  TNode<String> phi_bb39_21;
  TNode<String> phi_bb39_26;
  TNode<BoolT> phi_bb39_39;
  if (block39.is_used()) {
    ca_.Bind(&block39, &phi_bb39_13, &phi_bb39_14, &phi_bb39_15, &phi_bb39_16, &phi_bb39_17, &phi_bb39_20, &phi_bb39_21, &phi_bb39_26, &phi_bb39_39);
    ca_.Branch(phi_bb39_39, &block35, std::vector<compiler::Node*>{phi_bb39_13, phi_bb39_14, phi_bb39_15, phi_bb39_16, phi_bb39_17, phi_bb39_20, phi_bb39_21, phi_bb39_26}, &block36, std::vector<compiler::Node*>{phi_bb39_13, phi_bb39_14, phi_bb39_15, phi_bb39_16, phi_bb39_17, phi_bb39_20, phi_bb39_21, phi_bb39_26});
  }

  TNode<FixedArray> phi_bb35_13;
  TNode<IntPtrT> phi_bb35_14;
  TNode<IntPtrT> phi_bb35_15;
  TNode<BoolT> phi_bb35_16;
  TNode<PrimitiveHeapObject> phi_bb35_17;
  TNode<String> phi_bb35_20;
  TNode<String> phi_bb35_21;
  TNode<String> phi_bb35_26;
  if (block35.is_used()) {
    ca_.Bind(&block35, &phi_bb35_13, &phi_bb35_14, &phi_bb35_15, &phi_bb35_16, &phi_bb35_17, &phi_bb35_20, &phi_bb35_21, &phi_bb35_26);
    ca_.Goto(&block34, phi_bb35_13, phi_bb35_14, phi_bb35_15, phi_bb35_16, phi_bb35_17, phi_bb35_20, phi_bb35_21, phi_bb35_26);
  }

  TNode<FixedArray> phi_bb36_13;
  TNode<IntPtrT> phi_bb36_14;
  TNode<IntPtrT> phi_bb36_15;
  TNode<BoolT> phi_bb36_16;
  TNode<PrimitiveHeapObject> phi_bb36_17;
  TNode<String> phi_bb36_20;
  TNode<String> phi_bb36_21;
  TNode<String> phi_bb36_26;
  TNode<IntPtrT> tmp49;
  TNode<IntPtrT> tmp50;
  if (block36.is_used()) {
    ca_.Bind(&block36, &phi_bb36_13, &phi_bb36_14, &phi_bb36_15, &phi_bb36_16, &phi_bb36_17, &phi_bb36_20, &phi_bb36_21, &phi_bb36_26);
    tmp49 = CodeStubAssembler(state_).IntPtrMul(TNode<IntPtrT>{tmp3}, TNode<IntPtrT>{phi_bb8_10});
    tmp50 = AddStringLength_0(state_, TNode<Context>{p_context}, TNode<IntPtrT>{phi_bb36_15}, TNode<IntPtrT>{tmp49});
    ca_.Branch(tmp43, &block40, std::vector<compiler::Node*>{phi_bb36_13, phi_bb36_14, phi_bb36_16, phi_bb36_17, phi_bb36_20, phi_bb36_21, phi_bb36_26}, &block41, std::vector<compiler::Node*>{phi_bb36_13, phi_bb36_14, phi_bb36_16, phi_bb36_17, phi_bb36_20, phi_bb36_21, phi_bb36_26});
  }

  TNode<FixedArray> phi_bb40_13;
  TNode<IntPtrT> phi_bb40_14;
  TNode<BoolT> phi_bb40_16;
  TNode<PrimitiveHeapObject> phi_bb40_17;
  TNode<String> phi_bb40_20;
  TNode<String> phi_bb40_21;
  TNode<String> phi_bb40_26;
  TNode<Smi> tmp51;
  TNode<IntPtrT> tmp52;
  TNode<IntPtrT> tmp53;
  TNode<BoolT> tmp54;
  if (block40.is_used()) {
    ca_.Bind(&block40, &phi_bb40_13, &phi_bb40_14, &phi_bb40_16, &phi_bb40_17, &phi_bb40_20, &phi_bb40_21, &phi_bb40_26);
    tmp51 = Convert_Smi_intptr_0(state_, TNode<IntPtrT>{phi_bb8_10});
    tmp52 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{phi_bb40_13});
    tmp53 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp54 = CodeStubAssembler(state_).IntPtrGreaterThanOrEqual(TNode<IntPtrT>{phi_bb40_14}, TNode<IntPtrT>{tmp53});
    ca_.Branch(tmp54, &block43, std::vector<compiler::Node*>{phi_bb40_13, phi_bb40_14, phi_bb40_16, phi_bb40_17, phi_bb40_20, phi_bb40_21, phi_bb40_26}, &block44, std::vector<compiler::Node*>{phi_bb40_13, phi_bb40_14, phi_bb40_16, phi_bb40_17, phi_bb40_20, phi_bb40_21, phi_bb40_26});
  }

  TNode<FixedArray> phi_bb44_13;
  TNode<IntPtrT> phi_bb44_14;
  TNode<BoolT> phi_bb44_16;
  TNode<PrimitiveHeapObject> phi_bb44_17;
  TNode<String> phi_bb44_20;
  TNode<String> phi_bb44_21;
  TNode<String> phi_bb44_26;
  if (block44.is_used()) {
    ca_.Bind(&block44, &phi_bb44_13, &phi_bb44_14, &phi_bb44_16, &phi_bb44_17, &phi_bb44_20, &phi_bb44_21, &phi_bb44_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 238});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index >= 1' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb43_13;
  TNode<IntPtrT> phi_bb43_14;
  TNode<BoolT> phi_bb43_16;
  TNode<PrimitiveHeapObject> phi_bb43_17;
  TNode<String> phi_bb43_20;
  TNode<String> phi_bb43_21;
  TNode<String> phi_bb43_26;
  TNode<BoolT> tmp55;
  if (block43.is_used()) {
    ca_.Bind(&block43, &phi_bb43_13, &phi_bb43_14, &phi_bb43_16, &phi_bb43_17, &phi_bb43_20, &phi_bb43_21, &phi_bb43_26);
    tmp55 = CodeStubAssembler(state_).IntPtrLessThanOrEqual(TNode<IntPtrT>{phi_bb43_14}, TNode<IntPtrT>{tmp52});
    ca_.Branch(tmp55, &block45, std::vector<compiler::Node*>{phi_bb43_13, phi_bb43_14, phi_bb43_16, phi_bb43_17, phi_bb43_20, phi_bb43_21, phi_bb43_26}, &block46, std::vector<compiler::Node*>{phi_bb43_13, phi_bb43_14, phi_bb43_16, phi_bb43_17, phi_bb43_20, phi_bb43_21, phi_bb43_26});
  }

  TNode<FixedArray> phi_bb46_13;
  TNode<IntPtrT> phi_bb46_14;
  TNode<BoolT> phi_bb46_16;
  TNode<PrimitiveHeapObject> phi_bb46_17;
  TNode<String> phi_bb46_20;
  TNode<String> phi_bb46_21;
  TNode<String> phi_bb46_26;
  if (block46.is_used()) {
    ca_.Bind(&block46, &phi_bb46_13, &phi_bb46_14, &phi_bb46_16, &phi_bb46_17, &phi_bb46_20, &phi_bb46_21, &phi_bb46_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 239});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index <= length' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb45_13;
  TNode<IntPtrT> phi_bb45_14;
  TNode<BoolT> phi_bb45_16;
  TNode<PrimitiveHeapObject> phi_bb45_17;
  TNode<String> phi_bb45_20;
  TNode<String> phi_bb45_21;
  TNode<String> phi_bb45_26;
  TNode<BoolT> tmp56;
  if (block45.is_used()) {
    ca_.Bind(&block45, &phi_bb45_13, &phi_bb45_14, &phi_bb45_16, &phi_bb45_17, &phi_bb45_20, &phi_bb45_21, &phi_bb45_26);
    tmp56 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb45_14}, TNode<IntPtrT>{tmp52});
    ca_.Branch(tmp56, &block47, std::vector<compiler::Node*>{phi_bb45_13, phi_bb45_14, phi_bb45_16, phi_bb45_17, phi_bb45_20, phi_bb45_21, phi_bb45_26}, &block48, std::vector<compiler::Node*>{phi_bb45_13, phi_bb45_14, phi_bb45_16, phi_bb45_17, phi_bb45_20, phi_bb45_21, phi_bb45_26});
  }

  TNode<FixedArray> phi_bb47_13;
  TNode<IntPtrT> phi_bb47_14;
  TNode<BoolT> phi_bb47_16;
  TNode<PrimitiveHeapObject> phi_bb47_17;
  TNode<String> phi_bb47_20;
  TNode<String> phi_bb47_21;
  TNode<String> phi_bb47_26;
  TNode<Union<HeapObject, TaggedIndex>> tmp57;
  TNode<IntPtrT> tmp58;
  TNode<IntPtrT> tmp59;
  TNode<IntPtrT> tmp60;
  TNode<IntPtrT> tmp61;
  TNode<UintPtrT> tmp62;
  TNode<UintPtrT> tmp63;
  TNode<BoolT> tmp64;
  if (block47.is_used()) {
    ca_.Bind(&block47, &phi_bb47_13, &phi_bb47_14, &phi_bb47_16, &phi_bb47_17, &phi_bb47_20, &phi_bb47_21, &phi_bb47_26);
    std::tie(tmp57, tmp58, tmp59) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb47_13}).Flatten();
    tmp60 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp61 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb47_14}, TNode<IntPtrT>{tmp60});
    tmp62 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb47_14});
    tmp63 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp59});
    tmp64 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp62}, TNode<UintPtrT>{tmp63});
    ca_.Branch(tmp64, &block54, std::vector<compiler::Node*>{phi_bb47_13, phi_bb47_16, phi_bb47_17, phi_bb47_20, phi_bb47_21, phi_bb47_26, phi_bb47_13, phi_bb47_14, phi_bb47_14, phi_bb47_14, phi_bb47_14}, &block55, std::vector<compiler::Node*>{phi_bb47_13, phi_bb47_16, phi_bb47_17, phi_bb47_20, phi_bb47_21, phi_bb47_26, phi_bb47_13, phi_bb47_14, phi_bb47_14, phi_bb47_14, phi_bb47_14});
  }

  TNode<FixedArray> phi_bb54_13;
  TNode<BoolT> phi_bb54_16;
  TNode<PrimitiveHeapObject> phi_bb54_17;
  TNode<String> phi_bb54_20;
  TNode<String> phi_bb54_21;
  TNode<String> phi_bb54_26;
  TNode<FixedArray> phi_bb54_43;
  TNode<IntPtrT> phi_bb54_47;
  TNode<IntPtrT> phi_bb54_48;
  TNode<IntPtrT> phi_bb54_52;
  TNode<IntPtrT> phi_bb54_53;
  TNode<IntPtrT> tmp65;
  TNode<IntPtrT> tmp66;
  TNode<Union<HeapObject, TaggedIndex>> tmp67;
  TNode<IntPtrT> tmp68;
  if (block54.is_used()) {
    ca_.Bind(&block54, &phi_bb54_13, &phi_bb54_16, &phi_bb54_17, &phi_bb54_20, &phi_bb54_21, &phi_bb54_26, &phi_bb54_43, &phi_bb54_47, &phi_bb54_48, &phi_bb54_52, &phi_bb54_53);
    tmp65 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb54_53});
    tmp66 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp58}, TNode<IntPtrT>{tmp65});
    std::tie(tmp67, tmp68) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp57}, TNode<IntPtrT>{tmp66}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp67, tmp68}, tmp51);
    ca_.Goto(&block49, phi_bb54_13, tmp61, phi_bb54_16, phi_bb54_17, phi_bb54_20, phi_bb54_21, phi_bb54_26);
  }

  TNode<FixedArray> phi_bb55_13;
  TNode<BoolT> phi_bb55_16;
  TNode<PrimitiveHeapObject> phi_bb55_17;
  TNode<String> phi_bb55_20;
  TNode<String> phi_bb55_21;
  TNode<String> phi_bb55_26;
  TNode<FixedArray> phi_bb55_43;
  TNode<IntPtrT> phi_bb55_47;
  TNode<IntPtrT> phi_bb55_48;
  TNode<IntPtrT> phi_bb55_52;
  TNode<IntPtrT> phi_bb55_53;
  if (block55.is_used()) {
    ca_.Bind(&block55, &phi_bb55_13, &phi_bb55_16, &phi_bb55_17, &phi_bb55_20, &phi_bb55_21, &phi_bb55_26, &phi_bb55_43, &phi_bb55_47, &phi_bb55_48, &phi_bb55_52, &phi_bb55_53);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb48_13;
  TNode<IntPtrT> phi_bb48_14;
  TNode<BoolT> phi_bb48_16;
  TNode<PrimitiveHeapObject> phi_bb48_17;
  TNode<String> phi_bb48_20;
  TNode<String> phi_bb48_21;
  TNode<String> phi_bb48_26;
  TNode<IntPtrT> tmp69;
  TNode<IntPtrT> tmp70;
  TNode<BoolT> tmp71;
  if (block48.is_used()) {
    ca_.Bind(&block48, &phi_bb48_13, &phi_bb48_14, &phi_bb48_16, &phi_bb48_17, &phi_bb48_20, &phi_bb48_21, &phi_bb48_26);
    tmp69 = CodeStubAssembler(state_).CalculateNewElementsCapacity(TNode<IntPtrT>{tmp52});
    tmp70 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    tmp71 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{tmp69}, TNode<IntPtrT>{tmp70});
    ca_.Branch(tmp71, &block58, std::vector<compiler::Node*>{phi_bb48_13, phi_bb48_14, phi_bb48_16, phi_bb48_17, phi_bb48_20, phi_bb48_21, phi_bb48_26}, &block59, std::vector<compiler::Node*>{phi_bb48_13, phi_bb48_14, phi_bb48_16, phi_bb48_17, phi_bb48_20, phi_bb48_21, phi_bb48_26});
  }

  TNode<FixedArray> phi_bb58_13;
  TNode<IntPtrT> phi_bb58_14;
  TNode<BoolT> phi_bb58_16;
  TNode<PrimitiveHeapObject> phi_bb58_17;
  TNode<String> phi_bb58_20;
  TNode<String> phi_bb58_21;
  TNode<String> phi_bb58_26;
  TNode<IntPtrT> tmp72;
  if (block58.is_used()) {
    ca_.Bind(&block58, &phi_bb58_13, &phi_bb58_14, &phi_bb58_16, &phi_bb58_17, &phi_bb58_20, &phi_bb58_21, &phi_bb58_26);
    tmp72 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    ca_.Goto(&block60, phi_bb58_13, phi_bb58_14, phi_bb58_16, phi_bb58_17, phi_bb58_20, phi_bb58_21, phi_bb58_26, tmp72);
  }

  TNode<FixedArray> phi_bb59_13;
  TNode<IntPtrT> phi_bb59_14;
  TNode<BoolT> phi_bb59_16;
  TNode<PrimitiveHeapObject> phi_bb59_17;
  TNode<String> phi_bb59_20;
  TNode<String> phi_bb59_21;
  TNode<String> phi_bb59_26;
  if (block59.is_used()) {
    ca_.Bind(&block59, &phi_bb59_13, &phi_bb59_14, &phi_bb59_16, &phi_bb59_17, &phi_bb59_20, &phi_bb59_21, &phi_bb59_26);
    ca_.Goto(&block60, phi_bb59_13, phi_bb59_14, phi_bb59_16, phi_bb59_17, phi_bb59_20, phi_bb59_21, phi_bb59_26, tmp69);
  }

  TNode<FixedArray> phi_bb60_13;
  TNode<IntPtrT> phi_bb60_14;
  TNode<BoolT> phi_bb60_16;
  TNode<PrimitiveHeapObject> phi_bb60_17;
  TNode<String> phi_bb60_20;
  TNode<String> phi_bb60_21;
  TNode<String> phi_bb60_26;
  TNode<IntPtrT> phi_bb60_44;
  TNode<IntPtrT> tmp73;
  TNode<BoolT> tmp74;
  if (block60.is_used()) {
    ca_.Bind(&block60, &phi_bb60_13, &phi_bb60_14, &phi_bb60_16, &phi_bb60_17, &phi_bb60_20, &phi_bb60_21, &phi_bb60_26, &phi_bb60_44);
    tmp73 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp74 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{phi_bb60_44}, TNode<IntPtrT>{tmp73});
    ca_.Branch(tmp74, &block62, std::vector<compiler::Node*>{phi_bb60_13, phi_bb60_14, phi_bb60_16, phi_bb60_17, phi_bb60_20, phi_bb60_21, phi_bb60_26}, &block63, std::vector<compiler::Node*>{phi_bb60_13, phi_bb60_14, phi_bb60_16, phi_bb60_17, phi_bb60_20, phi_bb60_21, phi_bb60_26});
  }

  TNode<FixedArray> phi_bb63_13;
  TNode<IntPtrT> phi_bb63_14;
  TNode<BoolT> phi_bb63_16;
  TNode<PrimitiveHeapObject> phi_bb63_17;
  TNode<String> phi_bb63_20;
  TNode<String> phi_bb63_21;
  TNode<String> phi_bb63_26;
  if (block63.is_used()) {
    ca_.Bind(&block63, &phi_bb63_13, &phi_bb63_14, &phi_bb63_16, &phi_bb63_17, &phi_bb63_20, &phi_bb63_21, &phi_bb63_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 248});
      CodeStubAssembler(state_).FailAssert("Torque assert 'cappedNewChunkLength > 0' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb62_13;
  TNode<IntPtrT> phi_bb62_14;
  TNode<BoolT> phi_bb62_16;
  TNode<PrimitiveHeapObject> phi_bb62_17;
  TNode<String> phi_bb62_20;
  TNode<String> phi_bb62_21;
  TNode<String> phi_bb62_26;
  TNode<FixedArray> tmp75;
  TNode<Union<HeapObject, TaggedIndex>> tmp76;
  TNode<IntPtrT> tmp77;
  TNode<IntPtrT> tmp78;
  TNode<UintPtrT> tmp79;
  TNode<IntPtrT> tmp80;
  TNode<UintPtrT> tmp81;
  TNode<UintPtrT> tmp82;
  TNode<BoolT> tmp83;
  if (block62.is_used()) {
    ca_.Bind(&block62, &phi_bb62_13, &phi_bb62_14, &phi_bb62_16, &phi_bb62_17, &phi_bb62_20, &phi_bb62_21, &phi_bb62_26);
    tmp75 = CodeStubAssembler(state_).AllocateZeroedFixedArray(TNode<IntPtrT>{phi_bb60_44});
    std::tie(tmp76, tmp77, tmp78) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb62_13}).Flatten();
    tmp79 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp80 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp79});
    tmp81 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp80});
    tmp82 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp78});
    tmp83 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp81}, TNode<UintPtrT>{tmp82});
    ca_.Branch(tmp83, &block69, std::vector<compiler::Node*>{phi_bb62_13, phi_bb62_14, phi_bb62_16, phi_bb62_17, phi_bb62_20, phi_bb62_21, phi_bb62_26, phi_bb62_13}, &block70, std::vector<compiler::Node*>{phi_bb62_13, phi_bb62_14, phi_bb62_16, phi_bb62_17, phi_bb62_20, phi_bb62_21, phi_bb62_26, phi_bb62_13});
  }

  TNode<FixedArray> phi_bb69_13;
  TNode<IntPtrT> phi_bb69_14;
  TNode<BoolT> phi_bb69_16;
  TNode<PrimitiveHeapObject> phi_bb69_17;
  TNode<String> phi_bb69_20;
  TNode<String> phi_bb69_21;
  TNode<String> phi_bb69_26;
  TNode<FixedArray> phi_bb69_46;
  TNode<IntPtrT> tmp84;
  TNode<IntPtrT> tmp85;
  TNode<Union<HeapObject, TaggedIndex>> tmp86;
  TNode<IntPtrT> tmp87;
  TNode<Union<HeapObject, TaggedIndex>> tmp88;
  TNode<IntPtrT> tmp89;
  TNode<IntPtrT> tmp90;
  TNode<UintPtrT> tmp91;
  TNode<IntPtrT> tmp92;
  TNode<UintPtrT> tmp93;
  TNode<UintPtrT> tmp94;
  TNode<BoolT> tmp95;
  if (block69.is_used()) {
    ca_.Bind(&block69, &phi_bb69_13, &phi_bb69_14, &phi_bb69_16, &phi_bb69_17, &phi_bb69_20, &phi_bb69_21, &phi_bb69_26, &phi_bb69_46);
    tmp84 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp80});
    tmp85 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp77}, TNode<IntPtrT>{tmp84});
    std::tie(tmp86, tmp87) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp76}, TNode<IntPtrT>{tmp85}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp86, tmp87}, tmp75);
    std::tie(tmp88, tmp89, tmp90) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp75}).Flatten();
    tmp91 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp92 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp91});
    tmp93 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp92});
    tmp94 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp90});
    tmp95 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp93}, TNode<UintPtrT>{tmp94});
    ca_.Branch(tmp95, &block78, std::vector<compiler::Node*>{phi_bb69_13, phi_bb69_14, phi_bb69_16, phi_bb69_17, phi_bb69_20, phi_bb69_21, phi_bb69_26}, &block79, std::vector<compiler::Node*>{phi_bb69_13, phi_bb69_14, phi_bb69_16, phi_bb69_17, phi_bb69_20, phi_bb69_21, phi_bb69_26});
  }

  TNode<FixedArray> phi_bb70_13;
  TNode<IntPtrT> phi_bb70_14;
  TNode<BoolT> phi_bb70_16;
  TNode<PrimitiveHeapObject> phi_bb70_17;
  TNode<String> phi_bb70_20;
  TNode<String> phi_bb70_21;
  TNode<String> phi_bb70_26;
  TNode<FixedArray> phi_bb70_46;
  if (block70.is_used()) {
    ca_.Bind(&block70, &phi_bb70_13, &phi_bb70_14, &phi_bb70_16, &phi_bb70_17, &phi_bb70_20, &phi_bb70_21, &phi_bb70_26, &phi_bb70_46);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb78_13;
  TNode<IntPtrT> phi_bb78_14;
  TNode<BoolT> phi_bb78_16;
  TNode<PrimitiveHeapObject> phi_bb78_17;
  TNode<String> phi_bb78_20;
  TNode<String> phi_bb78_21;
  TNode<String> phi_bb78_26;
  TNode<IntPtrT> tmp96;
  TNode<IntPtrT> tmp97;
  TNode<Union<HeapObject, TaggedIndex>> tmp98;
  TNode<IntPtrT> tmp99;
  TNode<Undefined> tmp100;
  TNode<Union<HeapObject, TaggedIndex>> tmp101;
  TNode<IntPtrT> tmp102;
  TNode<IntPtrT> tmp103;
  TNode<UintPtrT> tmp104;
  TNode<IntPtrT> tmp105;
  TNode<UintPtrT> tmp106;
  TNode<UintPtrT> tmp107;
  TNode<BoolT> tmp108;
  if (block78.is_used()) {
    ca_.Bind(&block78, &phi_bb78_13, &phi_bb78_14, &phi_bb78_16, &phi_bb78_17, &phi_bb78_20, &phi_bb78_21, &phi_bb78_26);
    tmp96 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp92});
    tmp97 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp89}, TNode<IntPtrT>{tmp96});
    std::tie(tmp98, tmp99) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp88}, TNode<IntPtrT>{tmp97}).Flatten();
    tmp100 = Undefined_0(state_);
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp98, tmp99}, tmp100);
    std::tie(tmp101, tmp102, tmp103) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp75}).Flatten();
    tmp104 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp105 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp104});
    tmp106 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp105});
    tmp107 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp103});
    tmp108 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp106}, TNode<UintPtrT>{tmp107});
    ca_.Branch(tmp108, &block87, std::vector<compiler::Node*>{phi_bb78_13, phi_bb78_14, phi_bb78_16, phi_bb78_17, phi_bb78_20, phi_bb78_21, phi_bb78_26}, &block88, std::vector<compiler::Node*>{phi_bb78_13, phi_bb78_14, phi_bb78_16, phi_bb78_17, phi_bb78_20, phi_bb78_21, phi_bb78_26});
  }

  TNode<FixedArray> phi_bb79_13;
  TNode<IntPtrT> phi_bb79_14;
  TNode<BoolT> phi_bb79_16;
  TNode<PrimitiveHeapObject> phi_bb79_17;
  TNode<String> phi_bb79_20;
  TNode<String> phi_bb79_21;
  TNode<String> phi_bb79_26;
  if (block79.is_used()) {
    ca_.Bind(&block79, &phi_bb79_13, &phi_bb79_14, &phi_bb79_16, &phi_bb79_17, &phi_bb79_20, &phi_bb79_21, &phi_bb79_26);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb87_13;
  TNode<IntPtrT> phi_bb87_14;
  TNode<BoolT> phi_bb87_16;
  TNode<PrimitiveHeapObject> phi_bb87_17;
  TNode<String> phi_bb87_20;
  TNode<String> phi_bb87_21;
  TNode<String> phi_bb87_26;
  TNode<IntPtrT> tmp109;
  TNode<IntPtrT> tmp110;
  TNode<Union<HeapObject, TaggedIndex>> tmp111;
  TNode<IntPtrT> tmp112;
  TNode<IntPtrT> tmp113;
  if (block87.is_used()) {
    ca_.Bind(&block87, &phi_bb87_13, &phi_bb87_14, &phi_bb87_16, &phi_bb87_17, &phi_bb87_20, &phi_bb87_21, &phi_bb87_26);
    tmp109 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp105});
    tmp110 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp102}, TNode<IntPtrT>{tmp109});
    std::tie(tmp111, tmp112) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp101}, TNode<IntPtrT>{tmp110}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp111, tmp112}, tmp51);
    tmp113 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    ca_.Goto(&block49, tmp75, tmp113, phi_bb87_16, phi_bb87_17, phi_bb87_20, phi_bb87_21, phi_bb87_26);
  }

  TNode<FixedArray> phi_bb88_13;
  TNode<IntPtrT> phi_bb88_14;
  TNode<BoolT> phi_bb88_16;
  TNode<PrimitiveHeapObject> phi_bb88_17;
  TNode<String> phi_bb88_20;
  TNode<String> phi_bb88_21;
  TNode<String> phi_bb88_26;
  if (block88.is_used()) {
    ca_.Bind(&block88, &phi_bb88_13, &phi_bb88_14, &phi_bb88_16, &phi_bb88_17, &phi_bb88_20, &phi_bb88_21, &phi_bb88_26);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb49_13;
  TNode<IntPtrT> phi_bb49_14;
  TNode<BoolT> phi_bb49_16;
  TNode<PrimitiveHeapObject> phi_bb49_17;
  TNode<String> phi_bb49_20;
  TNode<String> phi_bb49_21;
  TNode<String> phi_bb49_26;
  TNode<Null> tmp114;
  if (block49.is_used()) {
    ca_.Bind(&block49, &phi_bb49_13, &phi_bb49_14, &phi_bb49_16, &phi_bb49_17, &phi_bb49_20, &phi_bb49_21, &phi_bb49_26);
    tmp114 = Null_0(state_);
    ca_.Goto(&block41, phi_bb49_13, phi_bb49_14, phi_bb49_16, tmp114, phi_bb49_20, phi_bb49_21, phi_bb49_26);
  }

  TNode<FixedArray> phi_bb41_13;
  TNode<IntPtrT> phi_bb41_14;
  TNode<BoolT> phi_bb41_16;
  TNode<PrimitiveHeapObject> phi_bb41_17;
  TNode<String> phi_bb41_20;
  TNode<String> phi_bb41_21;
  TNode<String> phi_bb41_26;
  if (block41.is_used()) {
    ca_.Bind(&block41, &phi_bb41_13, &phi_bb41_14, &phi_bb41_16, &phi_bb41_17, &phi_bb41_20, &phi_bb41_21, &phi_bb41_26);
    ca_.Goto(&block34, phi_bb41_13, phi_bb41_14, tmp50, phi_bb41_16, phi_bb41_17, phi_bb41_20, phi_bb41_21, phi_bb41_26);
  }

  TNode<FixedArray> phi_bb34_13;
  TNode<IntPtrT> phi_bb34_14;
  TNode<IntPtrT> phi_bb34_15;
  TNode<BoolT> phi_bb34_16;
  TNode<PrimitiveHeapObject> phi_bb34_17;
  TNode<String> phi_bb34_20;
  TNode<String> phi_bb34_21;
  TNode<String> phi_bb34_26;
  TNode<IntPtrT> tmp115;
  TNode<IntPtrT> tmp116;
  TNode<BoolT> tmp117;
  if (block34.is_used()) {
    ca_.Bind(&block34, &phi_bb34_13, &phi_bb34_14, &phi_bb34_15, &phi_bb34_16, &phi_bb34_17, &phi_bb34_20, &phi_bb34_21, &phi_bb34_26);
    tmp115 = CodeStubAssembler(state_).LoadStringLengthAsWord(TNode<String>{phi_bb34_26});
    tmp116 = AddStringLength_0(state_, TNode<Context>{p_context}, TNode<IntPtrT>{phi_bb34_15}, TNode<IntPtrT>{tmp115});
    tmp117 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{phi_bb34_26}, TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{phi_bb34_17});
    ca_.Branch(tmp117, &block91, std::vector<compiler::Node*>{phi_bb34_13, phi_bb34_14, phi_bb34_16, phi_bb34_17, phi_bb34_20, phi_bb34_21, phi_bb34_26}, &block92, std::vector<compiler::Node*>{phi_bb34_13, phi_bb34_14, phi_bb34_16, phi_bb34_17, phi_bb34_20, phi_bb34_21, phi_bb34_26});
  }

  TNode<FixedArray> phi_bb91_13;
  TNode<IntPtrT> phi_bb91_14;
  TNode<BoolT> phi_bb91_16;
  TNode<PrimitiveHeapObject> phi_bb91_17;
  TNode<String> phi_bb91_20;
  TNode<String> phi_bb91_21;
  TNode<String> phi_bb91_26;
  TNode<IntPtrT> tmp118;
  TNode<BoolT> tmp119;
  if (block91.is_used()) {
    ca_.Bind(&block91, &phi_bb91_13, &phi_bb91_14, &phi_bb91_16, &phi_bb91_17, &phi_bb91_20, &phi_bb91_21, &phi_bb91_26);
    tmp118 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp119 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{phi_bb91_14}, TNode<IntPtrT>{tmp118});
    ca_.Branch(tmp119, &block95, std::vector<compiler::Node*>{phi_bb91_13, phi_bb91_14, phi_bb91_16, phi_bb91_17, phi_bb91_20, phi_bb91_21, phi_bb91_26}, &block96, std::vector<compiler::Node*>{phi_bb91_13, phi_bb91_14, phi_bb91_16, phi_bb91_17, phi_bb91_20, phi_bb91_21, phi_bb91_26});
  }

  TNode<FixedArray> phi_bb96_13;
  TNode<IntPtrT> phi_bb96_14;
  TNode<BoolT> phi_bb96_16;
  TNode<PrimitiveHeapObject> phi_bb96_17;
  TNode<String> phi_bb96_20;
  TNode<String> phi_bb96_21;
  TNode<String> phi_bb96_26;
  if (block96.is_used()) {
    ca_.Bind(&block96, &phi_bb96_13, &phi_bb96_14, &phi_bb96_16, &phi_bb96_17, &phi_bb96_20, &phi_bb96_21, &phi_bb96_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 218});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index > 1' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb95_13;
  TNode<IntPtrT> phi_bb95_14;
  TNode<BoolT> phi_bb95_16;
  TNode<PrimitiveHeapObject> phi_bb95_17;
  TNode<String> phi_bb95_20;
  TNode<String> phi_bb95_21;
  TNode<String> phi_bb95_26;
  TNode<Union<HeapObject, TaggedIndex>> tmp120;
  TNode<IntPtrT> tmp121;
  TNode<IntPtrT> tmp122;
  TNode<IntPtrT> tmp123;
  TNode<IntPtrT> tmp124;
  TNode<UintPtrT> tmp125;
  TNode<UintPtrT> tmp126;
  TNode<BoolT> tmp127;
  if (block95.is_used()) {
    ca_.Bind(&block95, &phi_bb95_13, &phi_bb95_14, &phi_bb95_16, &phi_bb95_17, &phi_bb95_20, &phi_bb95_21, &phi_bb95_26);
    std::tie(tmp120, tmp121, tmp122) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb95_13}).Flatten();
    tmp123 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp124 = CodeStubAssembler(state_).IntPtrSub(TNode<IntPtrT>{phi_bb95_14}, TNode<IntPtrT>{tmp123});
    tmp125 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp124});
    tmp126 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp122});
    tmp127 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp125}, TNode<UintPtrT>{tmp126});
    ca_.Branch(tmp127, &block101, std::vector<compiler::Node*>{phi_bb95_13, phi_bb95_14, phi_bb95_16, phi_bb95_17, phi_bb95_20, phi_bb95_21, phi_bb95_26, phi_bb95_13}, &block102, std::vector<compiler::Node*>{phi_bb95_13, phi_bb95_14, phi_bb95_16, phi_bb95_17, phi_bb95_20, phi_bb95_21, phi_bb95_26, phi_bb95_13});
  }

  TNode<FixedArray> phi_bb101_13;
  TNode<IntPtrT> phi_bb101_14;
  TNode<BoolT> phi_bb101_16;
  TNode<PrimitiveHeapObject> phi_bb101_17;
  TNode<String> phi_bb101_20;
  TNode<String> phi_bb101_21;
  TNode<String> phi_bb101_26;
  TNode<FixedArray> phi_bb101_30;
  TNode<IntPtrT> tmp128;
  TNode<IntPtrT> tmp129;
  TNode<Union<HeapObject, TaggedIndex>> tmp130;
  TNode<IntPtrT> tmp131;
  TNode<Object> tmp132;
  TNode<HeapObject> tmp133;
  if (block101.is_used()) {
    ca_.Bind(&block101, &phi_bb101_13, &phi_bb101_14, &phi_bb101_16, &phi_bb101_17, &phi_bb101_20, &phi_bb101_21, &phi_bb101_26, &phi_bb101_30);
    tmp128 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp124});
    tmp129 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp121}, TNode<IntPtrT>{tmp128});
    std::tie(tmp130, tmp131) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp120}, TNode<IntPtrT>{tmp129}).Flatten();
    tmp132 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp130, tmp131});
    compiler::CodeAssemblerLabel label134(&ca_);
    tmp133 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{tmp132}, &label134);
    ca_.Goto(&block108, phi_bb101_13, phi_bb101_14, phi_bb101_16, phi_bb101_17, phi_bb101_20, phi_bb101_21, phi_bb101_26);
    if (label134.is_used()) {
      ca_.Bind(&label134);
      ca_.Goto(&block109, phi_bb101_13, phi_bb101_14, phi_bb101_16, phi_bb101_17, phi_bb101_20, phi_bb101_21, phi_bb101_26);
    }
  }

  TNode<FixedArray> phi_bb102_13;
  TNode<IntPtrT> phi_bb102_14;
  TNode<BoolT> phi_bb102_16;
  TNode<PrimitiveHeapObject> phi_bb102_17;
  TNode<String> phi_bb102_20;
  TNode<String> phi_bb102_21;
  TNode<String> phi_bb102_26;
  TNode<FixedArray> phi_bb102_30;
  if (block102.is_used()) {
    ca_.Bind(&block102, &phi_bb102_13, &phi_bb102_14, &phi_bb102_16, &phi_bb102_17, &phi_bb102_20, &phi_bb102_21, &phi_bb102_26, &phi_bb102_30);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb109_13;
  TNode<IntPtrT> phi_bb109_14;
  TNode<BoolT> phi_bb109_16;
  TNode<PrimitiveHeapObject> phi_bb109_17;
  TNode<String> phi_bb109_20;
  TNode<String> phi_bb109_21;
  TNode<String> phi_bb109_26;
  if (block109.is_used()) {
    ca_.Bind(&block109, &phi_bb109_13, &phi_bb109_14, &phi_bb109_16, &phi_bb109_17, &phi_bb109_20, &phi_bb109_21, &phi_bb109_26);
    ca_.Goto(&block106, phi_bb109_13, phi_bb109_14, phi_bb109_16, phi_bb109_17, phi_bb109_20, phi_bb109_21, phi_bb109_26);
  }

  TNode<FixedArray> phi_bb108_13;
  TNode<IntPtrT> phi_bb108_14;
  TNode<BoolT> phi_bb108_16;
  TNode<PrimitiveHeapObject> phi_bb108_17;
  TNode<String> phi_bb108_20;
  TNode<String> phi_bb108_21;
  TNode<String> phi_bb108_26;
  TNode<String> tmp135;
  if (block108.is_used()) {
    ca_.Bind(&block108, &phi_bb108_13, &phi_bb108_14, &phi_bb108_16, &phi_bb108_17, &phi_bb108_20, &phi_bb108_21, &phi_bb108_26);
    compiler::CodeAssemblerLabel label136(&ca_);
    tmp135 = Cast_String_0(state_, TNode<HeapObject>{tmp133}, &label136);
    ca_.Goto(&block110, phi_bb108_13, phi_bb108_14, phi_bb108_16, phi_bb108_17, phi_bb108_20, phi_bb108_21, phi_bb108_26);
    if (label136.is_used()) {
      ca_.Bind(&label136);
      ca_.Goto(&block111, phi_bb108_13, phi_bb108_14, phi_bb108_16, phi_bb108_17, phi_bb108_20, phi_bb108_21, phi_bb108_26);
    }
  }

  TNode<FixedArray> phi_bb111_13;
  TNode<IntPtrT> phi_bb111_14;
  TNode<BoolT> phi_bb111_16;
  TNode<PrimitiveHeapObject> phi_bb111_17;
  TNode<String> phi_bb111_20;
  TNode<String> phi_bb111_21;
  TNode<String> phi_bb111_26;
  if (block111.is_used()) {
    ca_.Bind(&block111, &phi_bb111_13, &phi_bb111_14, &phi_bb111_16, &phi_bb111_17, &phi_bb111_20, &phi_bb111_21, &phi_bb111_26);
    ca_.Goto(&block106, phi_bb111_13, phi_bb111_14, phi_bb111_16, phi_bb111_17, phi_bb111_20, phi_bb111_21, phi_bb111_26);
  }

  TNode<FixedArray> phi_bb110_13;
  TNode<IntPtrT> phi_bb110_14;
  TNode<BoolT> phi_bb110_16;
  TNode<PrimitiveHeapObject> phi_bb110_17;
  TNode<String> phi_bb110_20;
  TNode<String> phi_bb110_21;
  TNode<String> phi_bb110_26;
  TNode<Smi> tmp137;
  TNode<IntPtrT> tmp138;
  TNode<IntPtrT> tmp139;
  TNode<BoolT> tmp140;
  if (block110.is_used()) {
    ca_.Bind(&block110, &phi_bb110_13, &phi_bb110_14, &phi_bb110_16, &phi_bb110_17, &phi_bb110_20, &phi_bb110_21, &phi_bb110_26);
    tmp137 = SmiConstant_0(state_, IntegerLiteral(true, 0x1ull));
    tmp138 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{phi_bb110_13});
    tmp139 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp140 = CodeStubAssembler(state_).IntPtrGreaterThanOrEqual(TNode<IntPtrT>{phi_bb110_14}, TNode<IntPtrT>{tmp139});
    ca_.Branch(tmp140, &block113, std::vector<compiler::Node*>{phi_bb110_13, phi_bb110_14, phi_bb110_16, phi_bb110_17, phi_bb110_20, phi_bb110_21, phi_bb110_26}, &block114, std::vector<compiler::Node*>{phi_bb110_13, phi_bb110_14, phi_bb110_16, phi_bb110_17, phi_bb110_20, phi_bb110_21, phi_bb110_26});
  }

  TNode<FixedArray> phi_bb114_13;
  TNode<IntPtrT> phi_bb114_14;
  TNode<BoolT> phi_bb114_16;
  TNode<PrimitiveHeapObject> phi_bb114_17;
  TNode<String> phi_bb114_20;
  TNode<String> phi_bb114_21;
  TNode<String> phi_bb114_26;
  if (block114.is_used()) {
    ca_.Bind(&block114, &phi_bb114_13, &phi_bb114_14, &phi_bb114_16, &phi_bb114_17, &phi_bb114_20, &phi_bb114_21, &phi_bb114_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 238});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index >= 1' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb113_13;
  TNode<IntPtrT> phi_bb113_14;
  TNode<BoolT> phi_bb113_16;
  TNode<PrimitiveHeapObject> phi_bb113_17;
  TNode<String> phi_bb113_20;
  TNode<String> phi_bb113_21;
  TNode<String> phi_bb113_26;
  TNode<BoolT> tmp141;
  if (block113.is_used()) {
    ca_.Bind(&block113, &phi_bb113_13, &phi_bb113_14, &phi_bb113_16, &phi_bb113_17, &phi_bb113_20, &phi_bb113_21, &phi_bb113_26);
    tmp141 = CodeStubAssembler(state_).IntPtrLessThanOrEqual(TNode<IntPtrT>{phi_bb113_14}, TNode<IntPtrT>{tmp138});
    ca_.Branch(tmp141, &block115, std::vector<compiler::Node*>{phi_bb113_13, phi_bb113_14, phi_bb113_16, phi_bb113_17, phi_bb113_20, phi_bb113_21, phi_bb113_26}, &block116, std::vector<compiler::Node*>{phi_bb113_13, phi_bb113_14, phi_bb113_16, phi_bb113_17, phi_bb113_20, phi_bb113_21, phi_bb113_26});
  }

  TNode<FixedArray> phi_bb116_13;
  TNode<IntPtrT> phi_bb116_14;
  TNode<BoolT> phi_bb116_16;
  TNode<PrimitiveHeapObject> phi_bb116_17;
  TNode<String> phi_bb116_20;
  TNode<String> phi_bb116_21;
  TNode<String> phi_bb116_26;
  if (block116.is_used()) {
    ca_.Bind(&block116, &phi_bb116_13, &phi_bb116_14, &phi_bb116_16, &phi_bb116_17, &phi_bb116_20, &phi_bb116_21, &phi_bb116_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 239});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index <= length' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb115_13;
  TNode<IntPtrT> phi_bb115_14;
  TNode<BoolT> phi_bb115_16;
  TNode<PrimitiveHeapObject> phi_bb115_17;
  TNode<String> phi_bb115_20;
  TNode<String> phi_bb115_21;
  TNode<String> phi_bb115_26;
  TNode<BoolT> tmp142;
  if (block115.is_used()) {
    ca_.Bind(&block115, &phi_bb115_13, &phi_bb115_14, &phi_bb115_16, &phi_bb115_17, &phi_bb115_20, &phi_bb115_21, &phi_bb115_26);
    tmp142 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb115_14}, TNode<IntPtrT>{tmp138});
    ca_.Branch(tmp142, &block117, std::vector<compiler::Node*>{phi_bb115_13, phi_bb115_14, phi_bb115_16, phi_bb115_17, phi_bb115_20, phi_bb115_21, phi_bb115_26}, &block118, std::vector<compiler::Node*>{phi_bb115_13, phi_bb115_14, phi_bb115_16, phi_bb115_17, phi_bb115_20, phi_bb115_21, phi_bb115_26});
  }

  TNode<FixedArray> phi_bb117_13;
  TNode<IntPtrT> phi_bb117_14;
  TNode<BoolT> phi_bb117_16;
  TNode<PrimitiveHeapObject> phi_bb117_17;
  TNode<String> phi_bb117_20;
  TNode<String> phi_bb117_21;
  TNode<String> phi_bb117_26;
  TNode<Union<HeapObject, TaggedIndex>> tmp143;
  TNode<IntPtrT> tmp144;
  TNode<IntPtrT> tmp145;
  TNode<IntPtrT> tmp146;
  TNode<IntPtrT> tmp147;
  TNode<UintPtrT> tmp148;
  TNode<UintPtrT> tmp149;
  TNode<BoolT> tmp150;
  if (block117.is_used()) {
    ca_.Bind(&block117, &phi_bb117_13, &phi_bb117_14, &phi_bb117_16, &phi_bb117_17, &phi_bb117_20, &phi_bb117_21, &phi_bb117_26);
    std::tie(tmp143, tmp144, tmp145) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb117_13}).Flatten();
    tmp146 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp147 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb117_14}, TNode<IntPtrT>{tmp146});
    tmp148 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb117_14});
    tmp149 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp145});
    tmp150 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp148}, TNode<UintPtrT>{tmp149});
    ca_.Branch(tmp150, &block124, std::vector<compiler::Node*>{phi_bb117_13, phi_bb117_16, phi_bb117_17, phi_bb117_20, phi_bb117_21, phi_bb117_26, phi_bb117_13, phi_bb117_14, phi_bb117_14, phi_bb117_14, phi_bb117_14}, &block125, std::vector<compiler::Node*>{phi_bb117_13, phi_bb117_16, phi_bb117_17, phi_bb117_20, phi_bb117_21, phi_bb117_26, phi_bb117_13, phi_bb117_14, phi_bb117_14, phi_bb117_14, phi_bb117_14});
  }

  TNode<FixedArray> phi_bb124_13;
  TNode<BoolT> phi_bb124_16;
  TNode<PrimitiveHeapObject> phi_bb124_17;
  TNode<String> phi_bb124_20;
  TNode<String> phi_bb124_21;
  TNode<String> phi_bb124_26;
  TNode<FixedArray> phi_bb124_35;
  TNode<IntPtrT> phi_bb124_39;
  TNode<IntPtrT> phi_bb124_40;
  TNode<IntPtrT> phi_bb124_44;
  TNode<IntPtrT> phi_bb124_45;
  TNode<IntPtrT> tmp151;
  TNode<IntPtrT> tmp152;
  TNode<Union<HeapObject, TaggedIndex>> tmp153;
  TNode<IntPtrT> tmp154;
  if (block124.is_used()) {
    ca_.Bind(&block124, &phi_bb124_13, &phi_bb124_16, &phi_bb124_17, &phi_bb124_20, &phi_bb124_21, &phi_bb124_26, &phi_bb124_35, &phi_bb124_39, &phi_bb124_40, &phi_bb124_44, &phi_bb124_45);
    tmp151 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb124_45});
    tmp152 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp144}, TNode<IntPtrT>{tmp151});
    std::tie(tmp153, tmp154) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp143}, TNode<IntPtrT>{tmp152}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp153, tmp154}, tmp137);
    ca_.Goto(&block119, phi_bb124_13, tmp147, phi_bb124_16, phi_bb124_17, phi_bb124_20, phi_bb124_21, phi_bb124_26);
  }

  TNode<FixedArray> phi_bb125_13;
  TNode<BoolT> phi_bb125_16;
  TNode<PrimitiveHeapObject> phi_bb125_17;
  TNode<String> phi_bb125_20;
  TNode<String> phi_bb125_21;
  TNode<String> phi_bb125_26;
  TNode<FixedArray> phi_bb125_35;
  TNode<IntPtrT> phi_bb125_39;
  TNode<IntPtrT> phi_bb125_40;
  TNode<IntPtrT> phi_bb125_44;
  TNode<IntPtrT> phi_bb125_45;
  if (block125.is_used()) {
    ca_.Bind(&block125, &phi_bb125_13, &phi_bb125_16, &phi_bb125_17, &phi_bb125_20, &phi_bb125_21, &phi_bb125_26, &phi_bb125_35, &phi_bb125_39, &phi_bb125_40, &phi_bb125_44, &phi_bb125_45);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb118_13;
  TNode<IntPtrT> phi_bb118_14;
  TNode<BoolT> phi_bb118_16;
  TNode<PrimitiveHeapObject> phi_bb118_17;
  TNode<String> phi_bb118_20;
  TNode<String> phi_bb118_21;
  TNode<String> phi_bb118_26;
  TNode<IntPtrT> tmp155;
  TNode<IntPtrT> tmp156;
  TNode<BoolT> tmp157;
  if (block118.is_used()) {
    ca_.Bind(&block118, &phi_bb118_13, &phi_bb118_14, &phi_bb118_16, &phi_bb118_17, &phi_bb118_20, &phi_bb118_21, &phi_bb118_26);
    tmp155 = CodeStubAssembler(state_).CalculateNewElementsCapacity(TNode<IntPtrT>{tmp138});
    tmp156 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    tmp157 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{tmp155}, TNode<IntPtrT>{tmp156});
    ca_.Branch(tmp157, &block128, std::vector<compiler::Node*>{phi_bb118_13, phi_bb118_14, phi_bb118_16, phi_bb118_17, phi_bb118_20, phi_bb118_21, phi_bb118_26}, &block129, std::vector<compiler::Node*>{phi_bb118_13, phi_bb118_14, phi_bb118_16, phi_bb118_17, phi_bb118_20, phi_bb118_21, phi_bb118_26});
  }

  TNode<FixedArray> phi_bb128_13;
  TNode<IntPtrT> phi_bb128_14;
  TNode<BoolT> phi_bb128_16;
  TNode<PrimitiveHeapObject> phi_bb128_17;
  TNode<String> phi_bb128_20;
  TNode<String> phi_bb128_21;
  TNode<String> phi_bb128_26;
  TNode<IntPtrT> tmp158;
  if (block128.is_used()) {
    ca_.Bind(&block128, &phi_bb128_13, &phi_bb128_14, &phi_bb128_16, &phi_bb128_17, &phi_bb128_20, &phi_bb128_21, &phi_bb128_26);
    tmp158 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    ca_.Goto(&block130, phi_bb128_13, phi_bb128_14, phi_bb128_16, phi_bb128_17, phi_bb128_20, phi_bb128_21, phi_bb128_26, tmp158);
  }

  TNode<FixedArray> phi_bb129_13;
  TNode<IntPtrT> phi_bb129_14;
  TNode<BoolT> phi_bb129_16;
  TNode<PrimitiveHeapObject> phi_bb129_17;
  TNode<String> phi_bb129_20;
  TNode<String> phi_bb129_21;
  TNode<String> phi_bb129_26;
  if (block129.is_used()) {
    ca_.Bind(&block129, &phi_bb129_13, &phi_bb129_14, &phi_bb129_16, &phi_bb129_17, &phi_bb129_20, &phi_bb129_21, &phi_bb129_26);
    ca_.Goto(&block130, phi_bb129_13, phi_bb129_14, phi_bb129_16, phi_bb129_17, phi_bb129_20, phi_bb129_21, phi_bb129_26, tmp155);
  }

  TNode<FixedArray> phi_bb130_13;
  TNode<IntPtrT> phi_bb130_14;
  TNode<BoolT> phi_bb130_16;
  TNode<PrimitiveHeapObject> phi_bb130_17;
  TNode<String> phi_bb130_20;
  TNode<String> phi_bb130_21;
  TNode<String> phi_bb130_26;
  TNode<IntPtrT> phi_bb130_36;
  TNode<IntPtrT> tmp159;
  TNode<BoolT> tmp160;
  if (block130.is_used()) {
    ca_.Bind(&block130, &phi_bb130_13, &phi_bb130_14, &phi_bb130_16, &phi_bb130_17, &phi_bb130_20, &phi_bb130_21, &phi_bb130_26, &phi_bb130_36);
    tmp159 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp160 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{phi_bb130_36}, TNode<IntPtrT>{tmp159});
    ca_.Branch(tmp160, &block132, std::vector<compiler::Node*>{phi_bb130_13, phi_bb130_14, phi_bb130_16, phi_bb130_17, phi_bb130_20, phi_bb130_21, phi_bb130_26}, &block133, std::vector<compiler::Node*>{phi_bb130_13, phi_bb130_14, phi_bb130_16, phi_bb130_17, phi_bb130_20, phi_bb130_21, phi_bb130_26});
  }

  TNode<FixedArray> phi_bb133_13;
  TNode<IntPtrT> phi_bb133_14;
  TNode<BoolT> phi_bb133_16;
  TNode<PrimitiveHeapObject> phi_bb133_17;
  TNode<String> phi_bb133_20;
  TNode<String> phi_bb133_21;
  TNode<String> phi_bb133_26;
  if (block133.is_used()) {
    ca_.Bind(&block133, &phi_bb133_13, &phi_bb133_14, &phi_bb133_16, &phi_bb133_17, &phi_bb133_20, &phi_bb133_21, &phi_bb133_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 248});
      CodeStubAssembler(state_).FailAssert("Torque assert 'cappedNewChunkLength > 0' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb132_13;
  TNode<IntPtrT> phi_bb132_14;
  TNode<BoolT> phi_bb132_16;
  TNode<PrimitiveHeapObject> phi_bb132_17;
  TNode<String> phi_bb132_20;
  TNode<String> phi_bb132_21;
  TNode<String> phi_bb132_26;
  TNode<FixedArray> tmp161;
  TNode<Union<HeapObject, TaggedIndex>> tmp162;
  TNode<IntPtrT> tmp163;
  TNode<IntPtrT> tmp164;
  TNode<UintPtrT> tmp165;
  TNode<IntPtrT> tmp166;
  TNode<UintPtrT> tmp167;
  TNode<UintPtrT> tmp168;
  TNode<BoolT> tmp169;
  if (block132.is_used()) {
    ca_.Bind(&block132, &phi_bb132_13, &phi_bb132_14, &phi_bb132_16, &phi_bb132_17, &phi_bb132_20, &phi_bb132_21, &phi_bb132_26);
    tmp161 = CodeStubAssembler(state_).AllocateZeroedFixedArray(TNode<IntPtrT>{phi_bb130_36});
    std::tie(tmp162, tmp163, tmp164) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb132_13}).Flatten();
    tmp165 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp166 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp165});
    tmp167 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp166});
    tmp168 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp164});
    tmp169 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp167}, TNode<UintPtrT>{tmp168});
    ca_.Branch(tmp169, &block139, std::vector<compiler::Node*>{phi_bb132_13, phi_bb132_14, phi_bb132_16, phi_bb132_17, phi_bb132_20, phi_bb132_21, phi_bb132_26, phi_bb132_13}, &block140, std::vector<compiler::Node*>{phi_bb132_13, phi_bb132_14, phi_bb132_16, phi_bb132_17, phi_bb132_20, phi_bb132_21, phi_bb132_26, phi_bb132_13});
  }

  TNode<FixedArray> phi_bb139_13;
  TNode<IntPtrT> phi_bb139_14;
  TNode<BoolT> phi_bb139_16;
  TNode<PrimitiveHeapObject> phi_bb139_17;
  TNode<String> phi_bb139_20;
  TNode<String> phi_bb139_21;
  TNode<String> phi_bb139_26;
  TNode<FixedArray> phi_bb139_38;
  TNode<IntPtrT> tmp170;
  TNode<IntPtrT> tmp171;
  TNode<Union<HeapObject, TaggedIndex>> tmp172;
  TNode<IntPtrT> tmp173;
  TNode<Union<HeapObject, TaggedIndex>> tmp174;
  TNode<IntPtrT> tmp175;
  TNode<IntPtrT> tmp176;
  TNode<UintPtrT> tmp177;
  TNode<IntPtrT> tmp178;
  TNode<UintPtrT> tmp179;
  TNode<UintPtrT> tmp180;
  TNode<BoolT> tmp181;
  if (block139.is_used()) {
    ca_.Bind(&block139, &phi_bb139_13, &phi_bb139_14, &phi_bb139_16, &phi_bb139_17, &phi_bb139_20, &phi_bb139_21, &phi_bb139_26, &phi_bb139_38);
    tmp170 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp166});
    tmp171 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp163}, TNode<IntPtrT>{tmp170});
    std::tie(tmp172, tmp173) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp162}, TNode<IntPtrT>{tmp171}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp172, tmp173}, tmp161);
    std::tie(tmp174, tmp175, tmp176) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp161}).Flatten();
    tmp177 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp178 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp177});
    tmp179 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp178});
    tmp180 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp176});
    tmp181 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp179}, TNode<UintPtrT>{tmp180});
    ca_.Branch(tmp181, &block148, std::vector<compiler::Node*>{phi_bb139_13, phi_bb139_14, phi_bb139_16, phi_bb139_17, phi_bb139_20, phi_bb139_21, phi_bb139_26}, &block149, std::vector<compiler::Node*>{phi_bb139_13, phi_bb139_14, phi_bb139_16, phi_bb139_17, phi_bb139_20, phi_bb139_21, phi_bb139_26});
  }

  TNode<FixedArray> phi_bb140_13;
  TNode<IntPtrT> phi_bb140_14;
  TNode<BoolT> phi_bb140_16;
  TNode<PrimitiveHeapObject> phi_bb140_17;
  TNode<String> phi_bb140_20;
  TNode<String> phi_bb140_21;
  TNode<String> phi_bb140_26;
  TNode<FixedArray> phi_bb140_38;
  if (block140.is_used()) {
    ca_.Bind(&block140, &phi_bb140_13, &phi_bb140_14, &phi_bb140_16, &phi_bb140_17, &phi_bb140_20, &phi_bb140_21, &phi_bb140_26, &phi_bb140_38);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb148_13;
  TNode<IntPtrT> phi_bb148_14;
  TNode<BoolT> phi_bb148_16;
  TNode<PrimitiveHeapObject> phi_bb148_17;
  TNode<String> phi_bb148_20;
  TNode<String> phi_bb148_21;
  TNode<String> phi_bb148_26;
  TNode<IntPtrT> tmp182;
  TNode<IntPtrT> tmp183;
  TNode<Union<HeapObject, TaggedIndex>> tmp184;
  TNode<IntPtrT> tmp185;
  TNode<Undefined> tmp186;
  TNode<Union<HeapObject, TaggedIndex>> tmp187;
  TNode<IntPtrT> tmp188;
  TNode<IntPtrT> tmp189;
  TNode<UintPtrT> tmp190;
  TNode<IntPtrT> tmp191;
  TNode<UintPtrT> tmp192;
  TNode<UintPtrT> tmp193;
  TNode<BoolT> tmp194;
  if (block148.is_used()) {
    ca_.Bind(&block148, &phi_bb148_13, &phi_bb148_14, &phi_bb148_16, &phi_bb148_17, &phi_bb148_20, &phi_bb148_21, &phi_bb148_26);
    tmp182 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp178});
    tmp183 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp175}, TNode<IntPtrT>{tmp182});
    std::tie(tmp184, tmp185) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp174}, TNode<IntPtrT>{tmp183}).Flatten();
    tmp186 = Undefined_0(state_);
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp184, tmp185}, tmp186);
    std::tie(tmp187, tmp188, tmp189) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp161}).Flatten();
    tmp190 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp191 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp190});
    tmp192 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp191});
    tmp193 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp189});
    tmp194 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp192}, TNode<UintPtrT>{tmp193});
    ca_.Branch(tmp194, &block157, std::vector<compiler::Node*>{phi_bb148_13, phi_bb148_14, phi_bb148_16, phi_bb148_17, phi_bb148_20, phi_bb148_21, phi_bb148_26}, &block158, std::vector<compiler::Node*>{phi_bb148_13, phi_bb148_14, phi_bb148_16, phi_bb148_17, phi_bb148_20, phi_bb148_21, phi_bb148_26});
  }

  TNode<FixedArray> phi_bb149_13;
  TNode<IntPtrT> phi_bb149_14;
  TNode<BoolT> phi_bb149_16;
  TNode<PrimitiveHeapObject> phi_bb149_17;
  TNode<String> phi_bb149_20;
  TNode<String> phi_bb149_21;
  TNode<String> phi_bb149_26;
  if (block149.is_used()) {
    ca_.Bind(&block149, &phi_bb149_13, &phi_bb149_14, &phi_bb149_16, &phi_bb149_17, &phi_bb149_20, &phi_bb149_21, &phi_bb149_26);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb157_13;
  TNode<IntPtrT> phi_bb157_14;
  TNode<BoolT> phi_bb157_16;
  TNode<PrimitiveHeapObject> phi_bb157_17;
  TNode<String> phi_bb157_20;
  TNode<String> phi_bb157_21;
  TNode<String> phi_bb157_26;
  TNode<IntPtrT> tmp195;
  TNode<IntPtrT> tmp196;
  TNode<Union<HeapObject, TaggedIndex>> tmp197;
  TNode<IntPtrT> tmp198;
  TNode<IntPtrT> tmp199;
  if (block157.is_used()) {
    ca_.Bind(&block157, &phi_bb157_13, &phi_bb157_14, &phi_bb157_16, &phi_bb157_17, &phi_bb157_20, &phi_bb157_21, &phi_bb157_26);
    tmp195 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp191});
    tmp196 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp188}, TNode<IntPtrT>{tmp195});
    std::tie(tmp197, tmp198) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp187}, TNode<IntPtrT>{tmp196}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp197, tmp198}, tmp137);
    tmp199 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    ca_.Goto(&block119, tmp161, tmp199, phi_bb157_16, phi_bb157_17, phi_bb157_20, phi_bb157_21, phi_bb157_26);
  }

  TNode<FixedArray> phi_bb158_13;
  TNode<IntPtrT> phi_bb158_14;
  TNode<BoolT> phi_bb158_16;
  TNode<PrimitiveHeapObject> phi_bb158_17;
  TNode<String> phi_bb158_20;
  TNode<String> phi_bb158_21;
  TNode<String> phi_bb158_26;
  if (block158.is_used()) {
    ca_.Bind(&block158, &phi_bb158_13, &phi_bb158_14, &phi_bb158_16, &phi_bb158_17, &phi_bb158_20, &phi_bb158_21, &phi_bb158_26);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb119_13;
  TNode<IntPtrT> phi_bb119_14;
  TNode<BoolT> phi_bb119_16;
  TNode<PrimitiveHeapObject> phi_bb119_17;
  TNode<String> phi_bb119_20;
  TNode<String> phi_bb119_21;
  TNode<String> phi_bb119_26;
  if (block119.is_used()) {
    ca_.Bind(&block119, &phi_bb119_13, &phi_bb119_14, &phi_bb119_16, &phi_bb119_17, &phi_bb119_20, &phi_bb119_21, &phi_bb119_26);
    ca_.Goto(&block105, phi_bb119_13, phi_bb119_14, phi_bb119_16, phi_bb119_17, phi_bb119_20, phi_bb119_21, phi_bb119_26);
  }

  TNode<FixedArray> phi_bb106_13;
  TNode<IntPtrT> phi_bb106_14;
  TNode<BoolT> phi_bb106_16;
  TNode<PrimitiveHeapObject> phi_bb106_17;
  TNode<String> phi_bb106_20;
  TNode<String> phi_bb106_21;
  TNode<String> phi_bb106_26;
  TNode<Smi> tmp200;
  if (block106.is_used()) {
    ca_.Bind(&block106, &phi_bb106_13, &phi_bb106_14, &phi_bb106_16, &phi_bb106_17, &phi_bb106_20, &phi_bb106_21, &phi_bb106_26);
    compiler::CodeAssemblerLabel label201(&ca_);
    tmp200 = Cast_Smi_0(state_, TNode<Object>{ca_.UncheckedCast<Object>(tmp132)}, &label201);
    ca_.Goto(&block163, phi_bb106_13, phi_bb106_14, phi_bb106_16, phi_bb106_17, phi_bb106_20, phi_bb106_21, phi_bb106_26);
    if (label201.is_used()) {
      ca_.Bind(&label201);
      ca_.Goto(&block164, phi_bb106_13, phi_bb106_14, phi_bb106_16, phi_bb106_17, phi_bb106_20, phi_bb106_21, phi_bb106_26);
    }
  }

  TNode<FixedArray> phi_bb164_13;
  TNode<IntPtrT> phi_bb164_14;
  TNode<BoolT> phi_bb164_16;
  TNode<PrimitiveHeapObject> phi_bb164_17;
  TNode<String> phi_bb164_20;
  TNode<String> phi_bb164_21;
  TNode<String> phi_bb164_26;
  if (block164.is_used()) {
    ca_.Bind(&block164, &phi_bb164_13, &phi_bb164_14, &phi_bb164_16, &phi_bb164_17, &phi_bb164_20, &phi_bb164_21, &phi_bb164_26);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/array-join.tq:229:9");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb163_13;
  TNode<IntPtrT> phi_bb163_14;
  TNode<BoolT> phi_bb163_16;
  TNode<PrimitiveHeapObject> phi_bb163_17;
  TNode<String> phi_bb163_20;
  TNode<String> phi_bb163_21;
  TNode<String> phi_bb163_26;
  TNode<Smi> tmp202;
  TNode<BoolT> tmp203;
  if (block163.is_used()) {
    ca_.Bind(&block163, &phi_bb163_13, &phi_bb163_14, &phi_bb163_16, &phi_bb163_17, &phi_bb163_20, &phi_bb163_21, &phi_bb163_26);
    tmp202 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp203 = CodeStubAssembler(state_).SmiLessThan(TNode<Smi>{tmp200}, TNode<Smi>{tmp202});
    ca_.Branch(tmp203, &block165, std::vector<compiler::Node*>{phi_bb163_13, phi_bb163_14, phi_bb163_16, phi_bb163_17, phi_bb163_20, phi_bb163_21, phi_bb163_26}, &block166, std::vector<compiler::Node*>{phi_bb163_13, phi_bb163_14, phi_bb163_16, phi_bb163_17, phi_bb163_20, phi_bb163_21, phi_bb163_26});
  }

  TNode<FixedArray> phi_bb166_13;
  TNode<IntPtrT> phi_bb166_14;
  TNode<BoolT> phi_bb166_16;
  TNode<PrimitiveHeapObject> phi_bb166_17;
  TNode<String> phi_bb166_20;
  TNode<String> phi_bb166_21;
  TNode<String> phi_bb166_26;
  if (block166.is_used()) {
    ca_.Bind(&block166, &phi_bb166_13, &phi_bb166_14, &phi_bb166_16, &phi_bb166_17, &phi_bb166_20, &phi_bb166_21, &phi_bb166_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 224});
      CodeStubAssembler(state_).FailAssert("Torque assert 'count < 0' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb165_13;
  TNode<IntPtrT> phi_bb165_14;
  TNode<BoolT> phi_bb165_16;
  TNode<PrimitiveHeapObject> phi_bb165_17;
  TNode<String> phi_bb165_20;
  TNode<String> phi_bb165_21;
  TNode<String> phi_bb165_26;
  TNode<Smi> tmp204;
  TNode<Smi> tmp205;
  TNode<Smi> tmp206;
  TNode<BoolT> tmp207;
  if (block165.is_used()) {
    ca_.Bind(&block165, &phi_bb165_13, &phi_bb165_14, &phi_bb165_16, &phi_bb165_17, &phi_bb165_20, &phi_bb165_21, &phi_bb165_26);
    tmp204 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp205 = CodeStubAssembler(state_).SmiSub(TNode<Smi>{tmp200}, TNode<Smi>{tmp204});
    tmp206 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp207 = CodeStubAssembler(state_).SmiLessThan(TNode<Smi>{tmp205}, TNode<Smi>{tmp206});
    ca_.Branch(tmp207, &block167, std::vector<compiler::Node*>{phi_bb165_13, phi_bb165_14, phi_bb165_16, phi_bb165_17, phi_bb165_20, phi_bb165_21, phi_bb165_26}, &block168, std::vector<compiler::Node*>{phi_bb165_13, phi_bb165_14, phi_bb165_16, phi_bb165_17, phi_bb165_20, phi_bb165_21, phi_bb165_26});
  }

  TNode<FixedArray> phi_bb168_13;
  TNode<IntPtrT> phi_bb168_14;
  TNode<BoolT> phi_bb168_16;
  TNode<PrimitiveHeapObject> phi_bb168_17;
  TNode<String> phi_bb168_20;
  TNode<String> phi_bb168_21;
  TNode<String> phi_bb168_26;
  if (block168.is_used()) {
    ca_.Bind(&block168, &phi_bb168_13, &phi_bb168_14, &phi_bb168_16, &phi_bb168_17, &phi_bb168_20, &phi_bb168_21, &phi_bb168_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 225});
      CodeStubAssembler(state_).FailAssert("Torque assert 'count - 1 < 0' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb167_13;
  TNode<IntPtrT> phi_bb167_14;
  TNode<BoolT> phi_bb167_16;
  TNode<PrimitiveHeapObject> phi_bb167_17;
  TNode<String> phi_bb167_20;
  TNode<String> phi_bb167_21;
  TNode<String> phi_bb167_26;
  TNode<Union<HeapObject, TaggedIndex>> tmp208;
  TNode<IntPtrT> tmp209;
  TNode<IntPtrT> tmp210;
  TNode<IntPtrT> tmp211;
  TNode<IntPtrT> tmp212;
  TNode<UintPtrT> tmp213;
  TNode<UintPtrT> tmp214;
  TNode<BoolT> tmp215;
  if (block167.is_used()) {
    ca_.Bind(&block167, &phi_bb167_13, &phi_bb167_14, &phi_bb167_16, &phi_bb167_17, &phi_bb167_20, &phi_bb167_21, &phi_bb167_26);
    std::tie(tmp208, tmp209, tmp210) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb167_13}).Flatten();
    tmp211 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp212 = CodeStubAssembler(state_).IntPtrSub(TNode<IntPtrT>{phi_bb167_14}, TNode<IntPtrT>{tmp211});
    tmp213 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp212});
    tmp214 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp210});
    tmp215 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp213}, TNode<UintPtrT>{tmp214});
    ca_.Branch(tmp215, &block173, std::vector<compiler::Node*>{phi_bb167_13, phi_bb167_14, phi_bb167_16, phi_bb167_17, phi_bb167_20, phi_bb167_21, phi_bb167_26, phi_bb167_13}, &block174, std::vector<compiler::Node*>{phi_bb167_13, phi_bb167_14, phi_bb167_16, phi_bb167_17, phi_bb167_20, phi_bb167_21, phi_bb167_26, phi_bb167_13});
  }

  TNode<FixedArray> phi_bb173_13;
  TNode<IntPtrT> phi_bb173_14;
  TNode<BoolT> phi_bb173_16;
  TNode<PrimitiveHeapObject> phi_bb173_17;
  TNode<String> phi_bb173_20;
  TNode<String> phi_bb173_21;
  TNode<String> phi_bb173_26;
  TNode<FixedArray> phi_bb173_32;
  TNode<IntPtrT> tmp216;
  TNode<IntPtrT> tmp217;
  TNode<Union<HeapObject, TaggedIndex>> tmp218;
  TNode<IntPtrT> tmp219;
  TNode<Smi> tmp220;
  TNode<Smi> tmp221;
  if (block173.is_used()) {
    ca_.Bind(&block173, &phi_bb173_13, &phi_bb173_14, &phi_bb173_16, &phi_bb173_17, &phi_bb173_20, &phi_bb173_21, &phi_bb173_26, &phi_bb173_32);
    tmp216 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp212});
    tmp217 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp209}, TNode<IntPtrT>{tmp216});
    std::tie(tmp218, tmp219) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp208}, TNode<IntPtrT>{tmp217}).Flatten();
    tmp220 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp221 = CodeStubAssembler(state_).SmiSub(TNode<Smi>{tmp200}, TNode<Smi>{tmp220});
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp218, tmp219}, tmp221);
    ca_.Goto(&block105, phi_bb173_13, phi_bb173_14, phi_bb173_16, phi_bb173_17, phi_bb173_20, phi_bb173_21, phi_bb173_26);
  }

  TNode<FixedArray> phi_bb174_13;
  TNode<IntPtrT> phi_bb174_14;
  TNode<BoolT> phi_bb174_16;
  TNode<PrimitiveHeapObject> phi_bb174_17;
  TNode<String> phi_bb174_20;
  TNode<String> phi_bb174_21;
  TNode<String> phi_bb174_26;
  TNode<FixedArray> phi_bb174_32;
  if (block174.is_used()) {
    ca_.Bind(&block174, &phi_bb174_13, &phi_bb174_14, &phi_bb174_16, &phi_bb174_17, &phi_bb174_20, &phi_bb174_21, &phi_bb174_26, &phi_bb174_32);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb105_13;
  TNode<IntPtrT> phi_bb105_14;
  TNode<BoolT> phi_bb105_16;
  TNode<PrimitiveHeapObject> phi_bb105_17;
  TNode<String> phi_bb105_20;
  TNode<String> phi_bb105_21;
  TNode<String> phi_bb105_26;
  if (block105.is_used()) {
    ca_.Bind(&block105, &phi_bb105_13, &phi_bb105_14, &phi_bb105_16, &phi_bb105_17, &phi_bb105_20, &phi_bb105_21, &phi_bb105_26);
    ca_.Goto(&block93, phi_bb105_13, phi_bb105_14, phi_bb105_16, phi_bb105_17, phi_bb105_20, phi_bb105_21, phi_bb105_26);
  }

  TNode<FixedArray> phi_bb92_13;
  TNode<IntPtrT> phi_bb92_14;
  TNode<BoolT> phi_bb92_16;
  TNode<PrimitiveHeapObject> phi_bb92_17;
  TNode<String> phi_bb92_20;
  TNode<String> phi_bb92_21;
  TNode<String> phi_bb92_26;
  TNode<IntPtrT> tmp222;
  TNode<IntPtrT> tmp223;
  TNode<BoolT> tmp224;
  if (block92.is_used()) {
    ca_.Bind(&block92, &phi_bb92_13, &phi_bb92_14, &phi_bb92_16, &phi_bb92_17, &phi_bb92_20, &phi_bb92_21, &phi_bb92_26);
    tmp222 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{phi_bb92_13});
    tmp223 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp224 = CodeStubAssembler(state_).IntPtrGreaterThanOrEqual(TNode<IntPtrT>{phi_bb92_14}, TNode<IntPtrT>{tmp223});
    ca_.Branch(tmp224, &block178, std::vector<compiler::Node*>{phi_bb92_13, phi_bb92_14, phi_bb92_16, phi_bb92_17, phi_bb92_20, phi_bb92_21, phi_bb92_26, phi_bb92_26, phi_bb92_26}, &block179, std::vector<compiler::Node*>{phi_bb92_13, phi_bb92_14, phi_bb92_16, phi_bb92_17, phi_bb92_20, phi_bb92_21, phi_bb92_26, phi_bb92_26, phi_bb92_26});
  }

  TNode<FixedArray> phi_bb179_13;
  TNode<IntPtrT> phi_bb179_14;
  TNode<BoolT> phi_bb179_16;
  TNode<PrimitiveHeapObject> phi_bb179_17;
  TNode<String> phi_bb179_20;
  TNode<String> phi_bb179_21;
  TNode<String> phi_bb179_26;
  TNode<String> phi_bb179_30;
  TNode<Object> phi_bb179_31;
  if (block179.is_used()) {
    ca_.Bind(&block179, &phi_bb179_13, &phi_bb179_14, &phi_bb179_16, &phi_bb179_17, &phi_bb179_20, &phi_bb179_21, &phi_bb179_26, &phi_bb179_30, &phi_bb179_31);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 238});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index >= 1' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb178_13;
  TNode<IntPtrT> phi_bb178_14;
  TNode<BoolT> phi_bb178_16;
  TNode<PrimitiveHeapObject> phi_bb178_17;
  TNode<String> phi_bb178_20;
  TNode<String> phi_bb178_21;
  TNode<String> phi_bb178_26;
  TNode<String> phi_bb178_30;
  TNode<Object> phi_bb178_31;
  TNode<BoolT> tmp225;
  if (block178.is_used()) {
    ca_.Bind(&block178, &phi_bb178_13, &phi_bb178_14, &phi_bb178_16, &phi_bb178_17, &phi_bb178_20, &phi_bb178_21, &phi_bb178_26, &phi_bb178_30, &phi_bb178_31);
    tmp225 = CodeStubAssembler(state_).IntPtrLessThanOrEqual(TNode<IntPtrT>{phi_bb178_14}, TNode<IntPtrT>{tmp222});
    ca_.Branch(tmp225, &block180, std::vector<compiler::Node*>{phi_bb178_13, phi_bb178_14, phi_bb178_16, phi_bb178_17, phi_bb178_20, phi_bb178_21, phi_bb178_26, phi_bb178_30, phi_bb178_31}, &block181, std::vector<compiler::Node*>{phi_bb178_13, phi_bb178_14, phi_bb178_16, phi_bb178_17, phi_bb178_20, phi_bb178_21, phi_bb178_26, phi_bb178_30, phi_bb178_31});
  }

  TNode<FixedArray> phi_bb181_13;
  TNode<IntPtrT> phi_bb181_14;
  TNode<BoolT> phi_bb181_16;
  TNode<PrimitiveHeapObject> phi_bb181_17;
  TNode<String> phi_bb181_20;
  TNode<String> phi_bb181_21;
  TNode<String> phi_bb181_26;
  TNode<String> phi_bb181_30;
  TNode<Object> phi_bb181_31;
  if (block181.is_used()) {
    ca_.Bind(&block181, &phi_bb181_13, &phi_bb181_14, &phi_bb181_16, &phi_bb181_17, &phi_bb181_20, &phi_bb181_21, &phi_bb181_26, &phi_bb181_30, &phi_bb181_31);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 239});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index <= length' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb180_13;
  TNode<IntPtrT> phi_bb180_14;
  TNode<BoolT> phi_bb180_16;
  TNode<PrimitiveHeapObject> phi_bb180_17;
  TNode<String> phi_bb180_20;
  TNode<String> phi_bb180_21;
  TNode<String> phi_bb180_26;
  TNode<String> phi_bb180_30;
  TNode<Object> phi_bb180_31;
  TNode<BoolT> tmp226;
  if (block180.is_used()) {
    ca_.Bind(&block180, &phi_bb180_13, &phi_bb180_14, &phi_bb180_16, &phi_bb180_17, &phi_bb180_20, &phi_bb180_21, &phi_bb180_26, &phi_bb180_30, &phi_bb180_31);
    tmp226 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb180_14}, TNode<IntPtrT>{tmp222});
    ca_.Branch(tmp226, &block182, std::vector<compiler::Node*>{phi_bb180_13, phi_bb180_14, phi_bb180_16, phi_bb180_17, phi_bb180_20, phi_bb180_21, phi_bb180_26, phi_bb180_30, phi_bb180_31}, &block183, std::vector<compiler::Node*>{phi_bb180_13, phi_bb180_14, phi_bb180_16, phi_bb180_17, phi_bb180_20, phi_bb180_21, phi_bb180_26, phi_bb180_30, phi_bb180_31});
  }

  TNode<FixedArray> phi_bb182_13;
  TNode<IntPtrT> phi_bb182_14;
  TNode<BoolT> phi_bb182_16;
  TNode<PrimitiveHeapObject> phi_bb182_17;
  TNode<String> phi_bb182_20;
  TNode<String> phi_bb182_21;
  TNode<String> phi_bb182_26;
  TNode<String> phi_bb182_30;
  TNode<Object> phi_bb182_31;
  TNode<Union<HeapObject, TaggedIndex>> tmp227;
  TNode<IntPtrT> tmp228;
  TNode<IntPtrT> tmp229;
  TNode<IntPtrT> tmp230;
  TNode<IntPtrT> tmp231;
  TNode<UintPtrT> tmp232;
  TNode<UintPtrT> tmp233;
  TNode<BoolT> tmp234;
  if (block182.is_used()) {
    ca_.Bind(&block182, &phi_bb182_13, &phi_bb182_14, &phi_bb182_16, &phi_bb182_17, &phi_bb182_20, &phi_bb182_21, &phi_bb182_26, &phi_bb182_30, &phi_bb182_31);
    std::tie(tmp227, tmp228, tmp229) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb182_13}).Flatten();
    tmp230 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp231 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb182_14}, TNode<IntPtrT>{tmp230});
    tmp232 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb182_14});
    tmp233 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp229});
    tmp234 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp232}, TNode<UintPtrT>{tmp233});
    ca_.Branch(tmp234, &block189, std::vector<compiler::Node*>{phi_bb182_13, phi_bb182_16, phi_bb182_17, phi_bb182_20, phi_bb182_21, phi_bb182_26, phi_bb182_30, phi_bb182_31, phi_bb182_13, phi_bb182_14, phi_bb182_14, phi_bb182_14, phi_bb182_14}, &block190, std::vector<compiler::Node*>{phi_bb182_13, phi_bb182_16, phi_bb182_17, phi_bb182_20, phi_bb182_21, phi_bb182_26, phi_bb182_30, phi_bb182_31, phi_bb182_13, phi_bb182_14, phi_bb182_14, phi_bb182_14, phi_bb182_14});
  }

  TNode<FixedArray> phi_bb189_13;
  TNode<BoolT> phi_bb189_16;
  TNode<PrimitiveHeapObject> phi_bb189_17;
  TNode<String> phi_bb189_20;
  TNode<String> phi_bb189_21;
  TNode<String> phi_bb189_26;
  TNode<String> phi_bb189_30;
  TNode<Object> phi_bb189_31;
  TNode<FixedArray> phi_bb189_33;
  TNode<IntPtrT> phi_bb189_37;
  TNode<IntPtrT> phi_bb189_38;
  TNode<IntPtrT> phi_bb189_42;
  TNode<IntPtrT> phi_bb189_43;
  TNode<IntPtrT> tmp235;
  TNode<IntPtrT> tmp236;
  TNode<Union<HeapObject, TaggedIndex>> tmp237;
  TNode<IntPtrT> tmp238;
  if (block189.is_used()) {
    ca_.Bind(&block189, &phi_bb189_13, &phi_bb189_16, &phi_bb189_17, &phi_bb189_20, &phi_bb189_21, &phi_bb189_26, &phi_bb189_30, &phi_bb189_31, &phi_bb189_33, &phi_bb189_37, &phi_bb189_38, &phi_bb189_42, &phi_bb189_43);
    tmp235 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb189_43});
    tmp236 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp228}, TNode<IntPtrT>{tmp235});
    std::tie(tmp237, tmp238) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp227}, TNode<IntPtrT>{tmp236}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp237, tmp238}, phi_bb189_31);
    ca_.Goto(&block184, phi_bb189_13, tmp231, phi_bb189_16, phi_bb189_17, phi_bb189_20, phi_bb189_21, phi_bb189_26, phi_bb189_30, phi_bb189_31);
  }

  TNode<FixedArray> phi_bb190_13;
  TNode<BoolT> phi_bb190_16;
  TNode<PrimitiveHeapObject> phi_bb190_17;
  TNode<String> phi_bb190_20;
  TNode<String> phi_bb190_21;
  TNode<String> phi_bb190_26;
  TNode<String> phi_bb190_30;
  TNode<Object> phi_bb190_31;
  TNode<FixedArray> phi_bb190_33;
  TNode<IntPtrT> phi_bb190_37;
  TNode<IntPtrT> phi_bb190_38;
  TNode<IntPtrT> phi_bb190_42;
  TNode<IntPtrT> phi_bb190_43;
  if (block190.is_used()) {
    ca_.Bind(&block190, &phi_bb190_13, &phi_bb190_16, &phi_bb190_17, &phi_bb190_20, &phi_bb190_21, &phi_bb190_26, &phi_bb190_30, &phi_bb190_31, &phi_bb190_33, &phi_bb190_37, &phi_bb190_38, &phi_bb190_42, &phi_bb190_43);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb183_13;
  TNode<IntPtrT> phi_bb183_14;
  TNode<BoolT> phi_bb183_16;
  TNode<PrimitiveHeapObject> phi_bb183_17;
  TNode<String> phi_bb183_20;
  TNode<String> phi_bb183_21;
  TNode<String> phi_bb183_26;
  TNode<String> phi_bb183_30;
  TNode<Object> phi_bb183_31;
  TNode<IntPtrT> tmp239;
  TNode<IntPtrT> tmp240;
  TNode<BoolT> tmp241;
  if (block183.is_used()) {
    ca_.Bind(&block183, &phi_bb183_13, &phi_bb183_14, &phi_bb183_16, &phi_bb183_17, &phi_bb183_20, &phi_bb183_21, &phi_bb183_26, &phi_bb183_30, &phi_bb183_31);
    tmp239 = CodeStubAssembler(state_).CalculateNewElementsCapacity(TNode<IntPtrT>{tmp222});
    tmp240 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    tmp241 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{tmp239}, TNode<IntPtrT>{tmp240});
    ca_.Branch(tmp241, &block193, std::vector<compiler::Node*>{phi_bb183_13, phi_bb183_14, phi_bb183_16, phi_bb183_17, phi_bb183_20, phi_bb183_21, phi_bb183_26, phi_bb183_30, phi_bb183_31}, &block194, std::vector<compiler::Node*>{phi_bb183_13, phi_bb183_14, phi_bb183_16, phi_bb183_17, phi_bb183_20, phi_bb183_21, phi_bb183_26, phi_bb183_30, phi_bb183_31});
  }

  TNode<FixedArray> phi_bb193_13;
  TNode<IntPtrT> phi_bb193_14;
  TNode<BoolT> phi_bb193_16;
  TNode<PrimitiveHeapObject> phi_bb193_17;
  TNode<String> phi_bb193_20;
  TNode<String> phi_bb193_21;
  TNode<String> phi_bb193_26;
  TNode<String> phi_bb193_30;
  TNode<Object> phi_bb193_31;
  TNode<IntPtrT> tmp242;
  if (block193.is_used()) {
    ca_.Bind(&block193, &phi_bb193_13, &phi_bb193_14, &phi_bb193_16, &phi_bb193_17, &phi_bb193_20, &phi_bb193_21, &phi_bb193_26, &phi_bb193_30, &phi_bb193_31);
    tmp242 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    ca_.Goto(&block195, phi_bb193_13, phi_bb193_14, phi_bb193_16, phi_bb193_17, phi_bb193_20, phi_bb193_21, phi_bb193_26, phi_bb193_30, phi_bb193_31, tmp242);
  }

  TNode<FixedArray> phi_bb194_13;
  TNode<IntPtrT> phi_bb194_14;
  TNode<BoolT> phi_bb194_16;
  TNode<PrimitiveHeapObject> phi_bb194_17;
  TNode<String> phi_bb194_20;
  TNode<String> phi_bb194_21;
  TNode<String> phi_bb194_26;
  TNode<String> phi_bb194_30;
  TNode<Object> phi_bb194_31;
  if (block194.is_used()) {
    ca_.Bind(&block194, &phi_bb194_13, &phi_bb194_14, &phi_bb194_16, &phi_bb194_17, &phi_bb194_20, &phi_bb194_21, &phi_bb194_26, &phi_bb194_30, &phi_bb194_31);
    ca_.Goto(&block195, phi_bb194_13, phi_bb194_14, phi_bb194_16, phi_bb194_17, phi_bb194_20, phi_bb194_21, phi_bb194_26, phi_bb194_30, phi_bb194_31, tmp239);
  }

  TNode<FixedArray> phi_bb195_13;
  TNode<IntPtrT> phi_bb195_14;
  TNode<BoolT> phi_bb195_16;
  TNode<PrimitiveHeapObject> phi_bb195_17;
  TNode<String> phi_bb195_20;
  TNode<String> phi_bb195_21;
  TNode<String> phi_bb195_26;
  TNode<String> phi_bb195_30;
  TNode<Object> phi_bb195_31;
  TNode<IntPtrT> phi_bb195_34;
  TNode<IntPtrT> tmp243;
  TNode<BoolT> tmp244;
  if (block195.is_used()) {
    ca_.Bind(&block195, &phi_bb195_13, &phi_bb195_14, &phi_bb195_16, &phi_bb195_17, &phi_bb195_20, &phi_bb195_21, &phi_bb195_26, &phi_bb195_30, &phi_bb195_31, &phi_bb195_34);
    tmp243 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp244 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{phi_bb195_34}, TNode<IntPtrT>{tmp243});
    ca_.Branch(tmp244, &block197, std::vector<compiler::Node*>{phi_bb195_13, phi_bb195_14, phi_bb195_16, phi_bb195_17, phi_bb195_20, phi_bb195_21, phi_bb195_26, phi_bb195_30, phi_bb195_31}, &block198, std::vector<compiler::Node*>{phi_bb195_13, phi_bb195_14, phi_bb195_16, phi_bb195_17, phi_bb195_20, phi_bb195_21, phi_bb195_26, phi_bb195_30, phi_bb195_31});
  }

  TNode<FixedArray> phi_bb198_13;
  TNode<IntPtrT> phi_bb198_14;
  TNode<BoolT> phi_bb198_16;
  TNode<PrimitiveHeapObject> phi_bb198_17;
  TNode<String> phi_bb198_20;
  TNode<String> phi_bb198_21;
  TNode<String> phi_bb198_26;
  TNode<String> phi_bb198_30;
  TNode<Object> phi_bb198_31;
  if (block198.is_used()) {
    ca_.Bind(&block198, &phi_bb198_13, &phi_bb198_14, &phi_bb198_16, &phi_bb198_17, &phi_bb198_20, &phi_bb198_21, &phi_bb198_26, &phi_bb198_30, &phi_bb198_31);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 248});
      CodeStubAssembler(state_).FailAssert("Torque assert 'cappedNewChunkLength > 0' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb197_13;
  TNode<IntPtrT> phi_bb197_14;
  TNode<BoolT> phi_bb197_16;
  TNode<PrimitiveHeapObject> phi_bb197_17;
  TNode<String> phi_bb197_20;
  TNode<String> phi_bb197_21;
  TNode<String> phi_bb197_26;
  TNode<String> phi_bb197_30;
  TNode<Object> phi_bb197_31;
  TNode<FixedArray> tmp245;
  TNode<Union<HeapObject, TaggedIndex>> tmp246;
  TNode<IntPtrT> tmp247;
  TNode<IntPtrT> tmp248;
  TNode<UintPtrT> tmp249;
  TNode<IntPtrT> tmp250;
  TNode<UintPtrT> tmp251;
  TNode<UintPtrT> tmp252;
  TNode<BoolT> tmp253;
  if (block197.is_used()) {
    ca_.Bind(&block197, &phi_bb197_13, &phi_bb197_14, &phi_bb197_16, &phi_bb197_17, &phi_bb197_20, &phi_bb197_21, &phi_bb197_26, &phi_bb197_30, &phi_bb197_31);
    tmp245 = CodeStubAssembler(state_).AllocateZeroedFixedArray(TNode<IntPtrT>{phi_bb195_34});
    std::tie(tmp246, tmp247, tmp248) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb197_13}).Flatten();
    tmp249 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp250 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp249});
    tmp251 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp250});
    tmp252 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp248});
    tmp253 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp251}, TNode<UintPtrT>{tmp252});
    ca_.Branch(tmp253, &block204, std::vector<compiler::Node*>{phi_bb197_13, phi_bb197_14, phi_bb197_16, phi_bb197_17, phi_bb197_20, phi_bb197_21, phi_bb197_26, phi_bb197_30, phi_bb197_31, phi_bb197_13}, &block205, std::vector<compiler::Node*>{phi_bb197_13, phi_bb197_14, phi_bb197_16, phi_bb197_17, phi_bb197_20, phi_bb197_21, phi_bb197_26, phi_bb197_30, phi_bb197_31, phi_bb197_13});
  }

  TNode<FixedArray> phi_bb204_13;
  TNode<IntPtrT> phi_bb204_14;
  TNode<BoolT> phi_bb204_16;
  TNode<PrimitiveHeapObject> phi_bb204_17;
  TNode<String> phi_bb204_20;
  TNode<String> phi_bb204_21;
  TNode<String> phi_bb204_26;
  TNode<String> phi_bb204_30;
  TNode<Object> phi_bb204_31;
  TNode<FixedArray> phi_bb204_36;
  TNode<IntPtrT> tmp254;
  TNode<IntPtrT> tmp255;
  TNode<Union<HeapObject, TaggedIndex>> tmp256;
  TNode<IntPtrT> tmp257;
  TNode<Union<HeapObject, TaggedIndex>> tmp258;
  TNode<IntPtrT> tmp259;
  TNode<IntPtrT> tmp260;
  TNode<UintPtrT> tmp261;
  TNode<IntPtrT> tmp262;
  TNode<UintPtrT> tmp263;
  TNode<UintPtrT> tmp264;
  TNode<BoolT> tmp265;
  if (block204.is_used()) {
    ca_.Bind(&block204, &phi_bb204_13, &phi_bb204_14, &phi_bb204_16, &phi_bb204_17, &phi_bb204_20, &phi_bb204_21, &phi_bb204_26, &phi_bb204_30, &phi_bb204_31, &phi_bb204_36);
    tmp254 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp250});
    tmp255 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp247}, TNode<IntPtrT>{tmp254});
    std::tie(tmp256, tmp257) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp246}, TNode<IntPtrT>{tmp255}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp256, tmp257}, tmp245);
    std::tie(tmp258, tmp259, tmp260) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp245}).Flatten();
    tmp261 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp262 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp261});
    tmp263 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp262});
    tmp264 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp260});
    tmp265 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp263}, TNode<UintPtrT>{tmp264});
    ca_.Branch(tmp265, &block213, std::vector<compiler::Node*>{phi_bb204_13, phi_bb204_14, phi_bb204_16, phi_bb204_17, phi_bb204_20, phi_bb204_21, phi_bb204_26, phi_bb204_30, phi_bb204_31}, &block214, std::vector<compiler::Node*>{phi_bb204_13, phi_bb204_14, phi_bb204_16, phi_bb204_17, phi_bb204_20, phi_bb204_21, phi_bb204_26, phi_bb204_30, phi_bb204_31});
  }

  TNode<FixedArray> phi_bb205_13;
  TNode<IntPtrT> phi_bb205_14;
  TNode<BoolT> phi_bb205_16;
  TNode<PrimitiveHeapObject> phi_bb205_17;
  TNode<String> phi_bb205_20;
  TNode<String> phi_bb205_21;
  TNode<String> phi_bb205_26;
  TNode<String> phi_bb205_30;
  TNode<Object> phi_bb205_31;
  TNode<FixedArray> phi_bb205_36;
  if (block205.is_used()) {
    ca_.Bind(&block205, &phi_bb205_13, &phi_bb205_14, &phi_bb205_16, &phi_bb205_17, &phi_bb205_20, &phi_bb205_21, &phi_bb205_26, &phi_bb205_30, &phi_bb205_31, &phi_bb205_36);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb213_13;
  TNode<IntPtrT> phi_bb213_14;
  TNode<BoolT> phi_bb213_16;
  TNode<PrimitiveHeapObject> phi_bb213_17;
  TNode<String> phi_bb213_20;
  TNode<String> phi_bb213_21;
  TNode<String> phi_bb213_26;
  TNode<String> phi_bb213_30;
  TNode<Object> phi_bb213_31;
  TNode<IntPtrT> tmp266;
  TNode<IntPtrT> tmp267;
  TNode<Union<HeapObject, TaggedIndex>> tmp268;
  TNode<IntPtrT> tmp269;
  TNode<Undefined> tmp270;
  TNode<Union<HeapObject, TaggedIndex>> tmp271;
  TNode<IntPtrT> tmp272;
  TNode<IntPtrT> tmp273;
  TNode<UintPtrT> tmp274;
  TNode<IntPtrT> tmp275;
  TNode<UintPtrT> tmp276;
  TNode<UintPtrT> tmp277;
  TNode<BoolT> tmp278;
  if (block213.is_used()) {
    ca_.Bind(&block213, &phi_bb213_13, &phi_bb213_14, &phi_bb213_16, &phi_bb213_17, &phi_bb213_20, &phi_bb213_21, &phi_bb213_26, &phi_bb213_30, &phi_bb213_31);
    tmp266 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp262});
    tmp267 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp259}, TNode<IntPtrT>{tmp266});
    std::tie(tmp268, tmp269) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp258}, TNode<IntPtrT>{tmp267}).Flatten();
    tmp270 = Undefined_0(state_);
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp268, tmp269}, tmp270);
    std::tie(tmp271, tmp272, tmp273) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp245}).Flatten();
    tmp274 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp275 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp274});
    tmp276 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp275});
    tmp277 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp273});
    tmp278 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp276}, TNode<UintPtrT>{tmp277});
    ca_.Branch(tmp278, &block222, std::vector<compiler::Node*>{phi_bb213_13, phi_bb213_14, phi_bb213_16, phi_bb213_17, phi_bb213_20, phi_bb213_21, phi_bb213_26, phi_bb213_30, phi_bb213_31}, &block223, std::vector<compiler::Node*>{phi_bb213_13, phi_bb213_14, phi_bb213_16, phi_bb213_17, phi_bb213_20, phi_bb213_21, phi_bb213_26, phi_bb213_30, phi_bb213_31});
  }

  TNode<FixedArray> phi_bb214_13;
  TNode<IntPtrT> phi_bb214_14;
  TNode<BoolT> phi_bb214_16;
  TNode<PrimitiveHeapObject> phi_bb214_17;
  TNode<String> phi_bb214_20;
  TNode<String> phi_bb214_21;
  TNode<String> phi_bb214_26;
  TNode<String> phi_bb214_30;
  TNode<Object> phi_bb214_31;
  if (block214.is_used()) {
    ca_.Bind(&block214, &phi_bb214_13, &phi_bb214_14, &phi_bb214_16, &phi_bb214_17, &phi_bb214_20, &phi_bb214_21, &phi_bb214_26, &phi_bb214_30, &phi_bb214_31);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb222_13;
  TNode<IntPtrT> phi_bb222_14;
  TNode<BoolT> phi_bb222_16;
  TNode<PrimitiveHeapObject> phi_bb222_17;
  TNode<String> phi_bb222_20;
  TNode<String> phi_bb222_21;
  TNode<String> phi_bb222_26;
  TNode<String> phi_bb222_30;
  TNode<Object> phi_bb222_31;
  TNode<IntPtrT> tmp279;
  TNode<IntPtrT> tmp280;
  TNode<Union<HeapObject, TaggedIndex>> tmp281;
  TNode<IntPtrT> tmp282;
  TNode<IntPtrT> tmp283;
  if (block222.is_used()) {
    ca_.Bind(&block222, &phi_bb222_13, &phi_bb222_14, &phi_bb222_16, &phi_bb222_17, &phi_bb222_20, &phi_bb222_21, &phi_bb222_26, &phi_bb222_30, &phi_bb222_31);
    tmp279 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp275});
    tmp280 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp272}, TNode<IntPtrT>{tmp279});
    std::tie(tmp281, tmp282) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp271}, TNode<IntPtrT>{tmp280}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp281, tmp282}, phi_bb222_31);
    tmp283 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    ca_.Goto(&block184, tmp245, tmp283, phi_bb222_16, phi_bb222_17, phi_bb222_20, phi_bb222_21, phi_bb222_26, phi_bb222_30, phi_bb222_31);
  }

  TNode<FixedArray> phi_bb223_13;
  TNode<IntPtrT> phi_bb223_14;
  TNode<BoolT> phi_bb223_16;
  TNode<PrimitiveHeapObject> phi_bb223_17;
  TNode<String> phi_bb223_20;
  TNode<String> phi_bb223_21;
  TNode<String> phi_bb223_26;
  TNode<String> phi_bb223_30;
  TNode<Object> phi_bb223_31;
  if (block223.is_used()) {
    ca_.Bind(&block223, &phi_bb223_13, &phi_bb223_14, &phi_bb223_16, &phi_bb223_17, &phi_bb223_20, &phi_bb223_21, &phi_bb223_26, &phi_bb223_30, &phi_bb223_31);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb184_13;
  TNode<IntPtrT> phi_bb184_14;
  TNode<BoolT> phi_bb184_16;
  TNode<PrimitiveHeapObject> phi_bb184_17;
  TNode<String> phi_bb184_20;
  TNode<String> phi_bb184_21;
  TNode<String> phi_bb184_26;
  TNode<String> phi_bb184_30;
  TNode<Object> phi_bb184_31;
  if (block184.is_used()) {
    ca_.Bind(&block184, &phi_bb184_13, &phi_bb184_14, &phi_bb184_16, &phi_bb184_17, &phi_bb184_20, &phi_bb184_21, &phi_bb184_26, &phi_bb184_30, &phi_bb184_31);
    ca_.Goto(&block93, phi_bb184_13, phi_bb184_14, phi_bb184_16, phi_bb184_26, phi_bb184_20, phi_bb184_21, phi_bb184_26);
  }

  TNode<FixedArray> phi_bb93_13;
  TNode<IntPtrT> phi_bb93_14;
  TNode<BoolT> phi_bb93_16;
  TNode<PrimitiveHeapObject> phi_bb93_17;
  TNode<String> phi_bb93_20;
  TNode<String> phi_bb93_21;
  TNode<String> phi_bb93_26;
  TNode<IntPtrT> tmp284;
  TNode<Map> tmp285;
  TNode<BoolT> tmp286;
  TNode<BoolT> tmp287;
  TNode<IntPtrT> tmp288;
  if (block93.is_used()) {
    ca_.Bind(&block93, &phi_bb93_13, &phi_bb93_14, &phi_bb93_16, &phi_bb93_17, &phi_bb93_20, &phi_bb93_21, &phi_bb93_26);
    tmp284 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    tmp285 = CodeStubAssembler(state_).LoadReference<Map>(CodeStubAssembler::Reference{phi_bb93_26, tmp284});
    tmp286 = CodeStubAssembler(state_).IsOneByteStringMap(TNode<Map>{tmp285});
    tmp287 = CodeStubAssembler(state_).Word32And(TNode<BoolT>{tmp286}, TNode<BoolT>{phi_bb93_16});
    tmp288 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block4, tmp288, phi_bb6_11, phi_bb93_13, phi_bb93_14, tmp116, tmp287, phi_bb93_17, tmp19);
  }

  TNode<IntPtrT> phi_bb3_10;
  TNode<BuiltinPtr> phi_bb3_11;
  TNode<FixedArray> phi_bb3_13;
  TNode<IntPtrT> phi_bb3_14;
  TNode<IntPtrT> phi_bb3_15;
  TNode<BoolT> phi_bb3_16;
  TNode<PrimitiveHeapObject> phi_bb3_17;
  TNode<UintPtrT> phi_bb3_18;
  TNode<BoolT> tmp289;
  TNode<IntPtrT> tmp290;
  TNode<BoolT> tmp291;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_10, &phi_bb3_11, &phi_bb3_13, &phi_bb3_14, &phi_bb3_15, &phi_bb3_16, &phi_bb3_17, &phi_bb3_18);
    tmp289 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    tmp290 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp291 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb3_10}, TNode<IntPtrT>{tmp290});
    ca_.Branch(tmp291, &block229, std::vector<compiler::Node*>{phi_bb3_10, phi_bb3_11, phi_bb3_13, phi_bb3_14, phi_bb3_15, phi_bb3_16, phi_bb3_17, phi_bb3_18, phi_bb3_10, phi_bb3_10}, &block230, std::vector<compiler::Node*>{phi_bb3_10, phi_bb3_11, phi_bb3_13, phi_bb3_14, phi_bb3_15, phi_bb3_16, phi_bb3_17, phi_bb3_18, phi_bb3_10, phi_bb3_10});
  }

  TNode<IntPtrT> phi_bb229_10;
  TNode<BuiltinPtr> phi_bb229_11;
  TNode<FixedArray> phi_bb229_13;
  TNode<IntPtrT> phi_bb229_14;
  TNode<IntPtrT> phi_bb229_15;
  TNode<BoolT> phi_bb229_16;
  TNode<PrimitiveHeapObject> phi_bb229_17;
  TNode<UintPtrT> phi_bb229_18;
  TNode<IntPtrT> phi_bb229_19;
  TNode<IntPtrT> phi_bb229_23;
  TNode<BoolT> tmp292;
  if (block229.is_used()) {
    ca_.Bind(&block229, &phi_bb229_10, &phi_bb229_11, &phi_bb229_13, &phi_bb229_14, &phi_bb229_15, &phi_bb229_16, &phi_bb229_17, &phi_bb229_18, &phi_bb229_19, &phi_bb229_23);
    tmp292 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block231, phi_bb229_10, phi_bb229_11, phi_bb229_13, phi_bb229_14, phi_bb229_15, phi_bb229_16, phi_bb229_17, phi_bb229_18, phi_bb229_19, phi_bb229_23, tmp292);
  }

  TNode<IntPtrT> phi_bb230_10;
  TNode<BuiltinPtr> phi_bb230_11;
  TNode<FixedArray> phi_bb230_13;
  TNode<IntPtrT> phi_bb230_14;
  TNode<IntPtrT> phi_bb230_15;
  TNode<BoolT> phi_bb230_16;
  TNode<PrimitiveHeapObject> phi_bb230_17;
  TNode<UintPtrT> phi_bb230_18;
  TNode<IntPtrT> phi_bb230_19;
  TNode<IntPtrT> phi_bb230_23;
  TNode<IntPtrT> tmp293;
  TNode<BoolT> tmp294;
  if (block230.is_used()) {
    ca_.Bind(&block230, &phi_bb230_10, &phi_bb230_11, &phi_bb230_13, &phi_bb230_14, &phi_bb230_15, &phi_bb230_16, &phi_bb230_17, &phi_bb230_18, &phi_bb230_19, &phi_bb230_23);
    tmp293 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp294 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{tmp3}, TNode<IntPtrT>{tmp293});
    ca_.Goto(&block231, phi_bb230_10, phi_bb230_11, phi_bb230_13, phi_bb230_14, phi_bb230_15, phi_bb230_16, phi_bb230_17, phi_bb230_18, phi_bb230_19, phi_bb230_23, tmp294);
  }

  TNode<IntPtrT> phi_bb231_10;
  TNode<BuiltinPtr> phi_bb231_11;
  TNode<FixedArray> phi_bb231_13;
  TNode<IntPtrT> phi_bb231_14;
  TNode<IntPtrT> phi_bb231_15;
  TNode<BoolT> phi_bb231_16;
  TNode<PrimitiveHeapObject> phi_bb231_17;
  TNode<UintPtrT> phi_bb231_18;
  TNode<IntPtrT> phi_bb231_19;
  TNode<IntPtrT> phi_bb231_23;
  TNode<BoolT> phi_bb231_27;
  if (block231.is_used()) {
    ca_.Bind(&block231, &phi_bb231_10, &phi_bb231_11, &phi_bb231_13, &phi_bb231_14, &phi_bb231_15, &phi_bb231_16, &phi_bb231_17, &phi_bb231_18, &phi_bb231_19, &phi_bb231_23, &phi_bb231_27);
    ca_.Branch(phi_bb231_27, &block227, std::vector<compiler::Node*>{phi_bb231_10, phi_bb231_11, phi_bb231_13, phi_bb231_14, phi_bb231_15, phi_bb231_16, phi_bb231_17, phi_bb231_18, phi_bb231_19, phi_bb231_23}, &block228, std::vector<compiler::Node*>{phi_bb231_10, phi_bb231_11, phi_bb231_13, phi_bb231_14, phi_bb231_15, phi_bb231_16, phi_bb231_17, phi_bb231_18, phi_bb231_19, phi_bb231_23});
  }

  TNode<IntPtrT> phi_bb227_10;
  TNode<BuiltinPtr> phi_bb227_11;
  TNode<FixedArray> phi_bb227_13;
  TNode<IntPtrT> phi_bb227_14;
  TNode<IntPtrT> phi_bb227_15;
  TNode<BoolT> phi_bb227_16;
  TNode<PrimitiveHeapObject> phi_bb227_17;
  TNode<UintPtrT> phi_bb227_18;
  TNode<IntPtrT> phi_bb227_19;
  TNode<IntPtrT> phi_bb227_23;
  if (block227.is_used()) {
    ca_.Bind(&block227, &phi_bb227_10, &phi_bb227_11, &phi_bb227_13, &phi_bb227_14, &phi_bb227_15, &phi_bb227_16, &phi_bb227_17, &phi_bb227_18, &phi_bb227_19, &phi_bb227_23);
    ca_.Goto(&block226, phi_bb227_10, phi_bb227_11, phi_bb227_13, phi_bb227_14, phi_bb227_15, phi_bb227_16, phi_bb227_17, phi_bb227_18, phi_bb227_19, phi_bb227_23);
  }

  TNode<IntPtrT> phi_bb228_10;
  TNode<BuiltinPtr> phi_bb228_11;
  TNode<FixedArray> phi_bb228_13;
  TNode<IntPtrT> phi_bb228_14;
  TNode<IntPtrT> phi_bb228_15;
  TNode<BoolT> phi_bb228_16;
  TNode<PrimitiveHeapObject> phi_bb228_17;
  TNode<UintPtrT> phi_bb228_18;
  TNode<IntPtrT> phi_bb228_19;
  TNode<IntPtrT> phi_bb228_23;
  TNode<IntPtrT> tmp295;
  TNode<IntPtrT> tmp296;
  if (block228.is_used()) {
    ca_.Bind(&block228, &phi_bb228_10, &phi_bb228_11, &phi_bb228_13, &phi_bb228_14, &phi_bb228_15, &phi_bb228_16, &phi_bb228_17, &phi_bb228_18, &phi_bb228_19, &phi_bb228_23);
    tmp295 = CodeStubAssembler(state_).IntPtrMul(TNode<IntPtrT>{tmp3}, TNode<IntPtrT>{phi_bb228_23});
    tmp296 = AddStringLength_0(state_, TNode<Context>{p_context}, TNode<IntPtrT>{phi_bb228_15}, TNode<IntPtrT>{tmp295});
    ca_.Branch(tmp289, &block232, std::vector<compiler::Node*>{phi_bb228_10, phi_bb228_11, phi_bb228_13, phi_bb228_14, phi_bb228_16, phi_bb228_17, phi_bb228_18, phi_bb228_19, phi_bb228_23, phi_bb228_23}, &block233, std::vector<compiler::Node*>{phi_bb228_10, phi_bb228_11, phi_bb228_13, phi_bb228_14, phi_bb228_16, phi_bb228_17, phi_bb228_18, phi_bb228_19, phi_bb228_23, phi_bb228_23});
  }

  TNode<IntPtrT> phi_bb232_10;
  TNode<BuiltinPtr> phi_bb232_11;
  TNode<FixedArray> phi_bb232_13;
  TNode<IntPtrT> phi_bb232_14;
  TNode<BoolT> phi_bb232_16;
  TNode<PrimitiveHeapObject> phi_bb232_17;
  TNode<UintPtrT> phi_bb232_18;
  TNode<IntPtrT> phi_bb232_19;
  TNode<IntPtrT> phi_bb232_23;
  TNode<IntPtrT> phi_bb232_26;
  TNode<Smi> tmp297;
  TNode<IntPtrT> tmp298;
  TNode<IntPtrT> tmp299;
  TNode<BoolT> tmp300;
  if (block232.is_used()) {
    ca_.Bind(&block232, &phi_bb232_10, &phi_bb232_11, &phi_bb232_13, &phi_bb232_14, &phi_bb232_16, &phi_bb232_17, &phi_bb232_18, &phi_bb232_19, &phi_bb232_23, &phi_bb232_26);
    tmp297 = Convert_Smi_intptr_0(state_, TNode<IntPtrT>{phi_bb232_26});
    tmp298 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{phi_bb232_13});
    tmp299 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp300 = CodeStubAssembler(state_).IntPtrGreaterThanOrEqual(TNode<IntPtrT>{phi_bb232_14}, TNode<IntPtrT>{tmp299});
    ca_.Branch(tmp300, &block235, std::vector<compiler::Node*>{phi_bb232_10, phi_bb232_11, phi_bb232_13, phi_bb232_14, phi_bb232_16, phi_bb232_17, phi_bb232_18, phi_bb232_19, phi_bb232_23, phi_bb232_26}, &block236, std::vector<compiler::Node*>{phi_bb232_10, phi_bb232_11, phi_bb232_13, phi_bb232_14, phi_bb232_16, phi_bb232_17, phi_bb232_18, phi_bb232_19, phi_bb232_23, phi_bb232_26});
  }

  TNode<IntPtrT> phi_bb236_10;
  TNode<BuiltinPtr> phi_bb236_11;
  TNode<FixedArray> phi_bb236_13;
  TNode<IntPtrT> phi_bb236_14;
  TNode<BoolT> phi_bb236_16;
  TNode<PrimitiveHeapObject> phi_bb236_17;
  TNode<UintPtrT> phi_bb236_18;
  TNode<IntPtrT> phi_bb236_19;
  TNode<IntPtrT> phi_bb236_23;
  TNode<IntPtrT> phi_bb236_26;
  if (block236.is_used()) {
    ca_.Bind(&block236, &phi_bb236_10, &phi_bb236_11, &phi_bb236_13, &phi_bb236_14, &phi_bb236_16, &phi_bb236_17, &phi_bb236_18, &phi_bb236_19, &phi_bb236_23, &phi_bb236_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 238});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index >= 1' failed", pos_stack);
    }
  }

  TNode<IntPtrT> phi_bb235_10;
  TNode<BuiltinPtr> phi_bb235_11;
  TNode<FixedArray> phi_bb235_13;
  TNode<IntPtrT> phi_bb235_14;
  TNode<BoolT> phi_bb235_16;
  TNode<PrimitiveHeapObject> phi_bb235_17;
  TNode<UintPtrT> phi_bb235_18;
  TNode<IntPtrT> phi_bb235_19;
  TNode<IntPtrT> phi_bb235_23;
  TNode<IntPtrT> phi_bb235_26;
  TNode<BoolT> tmp301;
  if (block235.is_used()) {
    ca_.Bind(&block235, &phi_bb235_10, &phi_bb235_11, &phi_bb235_13, &phi_bb235_14, &phi_bb235_16, &phi_bb235_17, &phi_bb235_18, &phi_bb235_19, &phi_bb235_23, &phi_bb235_26);
    tmp301 = CodeStubAssembler(state_).IntPtrLessThanOrEqual(TNode<IntPtrT>{phi_bb235_14}, TNode<IntPtrT>{tmp298});
    ca_.Branch(tmp301, &block237, std::vector<compiler::Node*>{phi_bb235_10, phi_bb235_11, phi_bb235_13, phi_bb235_14, phi_bb235_16, phi_bb235_17, phi_bb235_18, phi_bb235_19, phi_bb235_23, phi_bb235_26}, &block238, std::vector<compiler::Node*>{phi_bb235_10, phi_bb235_11, phi_bb235_13, phi_bb235_14, phi_bb235_16, phi_bb235_17, phi_bb235_18, phi_bb235_19, phi_bb235_23, phi_bb235_26});
  }

  TNode<IntPtrT> phi_bb238_10;
  TNode<BuiltinPtr> phi_bb238_11;
  TNode<FixedArray> phi_bb238_13;
  TNode<IntPtrT> phi_bb238_14;
  TNode<BoolT> phi_bb238_16;
  TNode<PrimitiveHeapObject> phi_bb238_17;
  TNode<UintPtrT> phi_bb238_18;
  TNode<IntPtrT> phi_bb238_19;
  TNode<IntPtrT> phi_bb238_23;
  TNode<IntPtrT> phi_bb238_26;
  if (block238.is_used()) {
    ca_.Bind(&block238, &phi_bb238_10, &phi_bb238_11, &phi_bb238_13, &phi_bb238_14, &phi_bb238_16, &phi_bb238_17, &phi_bb238_18, &phi_bb238_19, &phi_bb238_23, &phi_bb238_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 239});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index <= length' failed", pos_stack);
    }
  }

  TNode<IntPtrT> phi_bb237_10;
  TNode<BuiltinPtr> phi_bb237_11;
  TNode<FixedArray> phi_bb237_13;
  TNode<IntPtrT> phi_bb237_14;
  TNode<BoolT> phi_bb237_16;
  TNode<PrimitiveHeapObject> phi_bb237_17;
  TNode<UintPtrT> phi_bb237_18;
  TNode<IntPtrT> phi_bb237_19;
  TNode<IntPtrT> phi_bb237_23;
  TNode<IntPtrT> phi_bb237_26;
  TNode<BoolT> tmp302;
  if (block237.is_used()) {
    ca_.Bind(&block237, &phi_bb237_10, &phi_bb237_11, &phi_bb237_13, &phi_bb237_14, &phi_bb237_16, &phi_bb237_17, &phi_bb237_18, &phi_bb237_19, &phi_bb237_23, &phi_bb237_26);
    tmp302 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb237_14}, TNode<IntPtrT>{tmp298});
    ca_.Branch(tmp302, &block239, std::vector<compiler::Node*>{phi_bb237_10, phi_bb237_11, phi_bb237_13, phi_bb237_14, phi_bb237_16, phi_bb237_17, phi_bb237_18, phi_bb237_19, phi_bb237_23, phi_bb237_26}, &block240, std::vector<compiler::Node*>{phi_bb237_10, phi_bb237_11, phi_bb237_13, phi_bb237_14, phi_bb237_16, phi_bb237_17, phi_bb237_18, phi_bb237_19, phi_bb237_23, phi_bb237_26});
  }

  TNode<IntPtrT> phi_bb239_10;
  TNode<BuiltinPtr> phi_bb239_11;
  TNode<FixedArray> phi_bb239_13;
  TNode<IntPtrT> phi_bb239_14;
  TNode<BoolT> phi_bb239_16;
  TNode<PrimitiveHeapObject> phi_bb239_17;
  TNode<UintPtrT> phi_bb239_18;
  TNode<IntPtrT> phi_bb239_19;
  TNode<IntPtrT> phi_bb239_23;
  TNode<IntPtrT> phi_bb239_26;
  TNode<Union<HeapObject, TaggedIndex>> tmp303;
  TNode<IntPtrT> tmp304;
  TNode<IntPtrT> tmp305;
  TNode<IntPtrT> tmp306;
  TNode<IntPtrT> tmp307;
  TNode<UintPtrT> tmp308;
  TNode<UintPtrT> tmp309;
  TNode<BoolT> tmp310;
  if (block239.is_used()) {
    ca_.Bind(&block239, &phi_bb239_10, &phi_bb239_11, &phi_bb239_13, &phi_bb239_14, &phi_bb239_16, &phi_bb239_17, &phi_bb239_18, &phi_bb239_19, &phi_bb239_23, &phi_bb239_26);
    std::tie(tmp303, tmp304, tmp305) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb239_13}).Flatten();
    tmp306 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp307 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb239_14}, TNode<IntPtrT>{tmp306});
    tmp308 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb239_14});
    tmp309 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp305});
    tmp310 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp308}, TNode<UintPtrT>{tmp309});
    ca_.Branch(tmp310, &block246, std::vector<compiler::Node*>{phi_bb239_10, phi_bb239_11, phi_bb239_13, phi_bb239_16, phi_bb239_17, phi_bb239_18, phi_bb239_19, phi_bb239_23, phi_bb239_26, phi_bb239_13, phi_bb239_14, phi_bb239_14, phi_bb239_14, phi_bb239_14}, &block247, std::vector<compiler::Node*>{phi_bb239_10, phi_bb239_11, phi_bb239_13, phi_bb239_16, phi_bb239_17, phi_bb239_18, phi_bb239_19, phi_bb239_23, phi_bb239_26, phi_bb239_13, phi_bb239_14, phi_bb239_14, phi_bb239_14, phi_bb239_14});
  }

  TNode<IntPtrT> phi_bb246_10;
  TNode<BuiltinPtr> phi_bb246_11;
  TNode<FixedArray> phi_bb246_13;
  TNode<BoolT> phi_bb246_16;
  TNode<PrimitiveHeapObject> phi_bb246_17;
  TNode<UintPtrT> phi_bb246_18;
  TNode<IntPtrT> phi_bb246_19;
  TNode<IntPtrT> phi_bb246_23;
  TNode<IntPtrT> phi_bb246_26;
  TNode<FixedArray> phi_bb246_31;
  TNode<IntPtrT> phi_bb246_35;
  TNode<IntPtrT> phi_bb246_36;
  TNode<IntPtrT> phi_bb246_40;
  TNode<IntPtrT> phi_bb246_41;
  TNode<IntPtrT> tmp311;
  TNode<IntPtrT> tmp312;
  TNode<Union<HeapObject, TaggedIndex>> tmp313;
  TNode<IntPtrT> tmp314;
  if (block246.is_used()) {
    ca_.Bind(&block246, &phi_bb246_10, &phi_bb246_11, &phi_bb246_13, &phi_bb246_16, &phi_bb246_17, &phi_bb246_18, &phi_bb246_19, &phi_bb246_23, &phi_bb246_26, &phi_bb246_31, &phi_bb246_35, &phi_bb246_36, &phi_bb246_40, &phi_bb246_41);
    tmp311 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb246_41});
    tmp312 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp304}, TNode<IntPtrT>{tmp311});
    std::tie(tmp313, tmp314) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp303}, TNode<IntPtrT>{tmp312}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp313, tmp314}, tmp297);
    ca_.Goto(&block241, phi_bb246_10, phi_bb246_11, phi_bb246_13, tmp307, phi_bb246_16, phi_bb246_17, phi_bb246_18, phi_bb246_19, phi_bb246_23, phi_bb246_26);
  }

  TNode<IntPtrT> phi_bb247_10;
  TNode<BuiltinPtr> phi_bb247_11;
  TNode<FixedArray> phi_bb247_13;
  TNode<BoolT> phi_bb247_16;
  TNode<PrimitiveHeapObject> phi_bb247_17;
  TNode<UintPtrT> phi_bb247_18;
  TNode<IntPtrT> phi_bb247_19;
  TNode<IntPtrT> phi_bb247_23;
  TNode<IntPtrT> phi_bb247_26;
  TNode<FixedArray> phi_bb247_31;
  TNode<IntPtrT> phi_bb247_35;
  TNode<IntPtrT> phi_bb247_36;
  TNode<IntPtrT> phi_bb247_40;
  TNode<IntPtrT> phi_bb247_41;
  if (block247.is_used()) {
    ca_.Bind(&block247, &phi_bb247_10, &phi_bb247_11, &phi_bb247_13, &phi_bb247_16, &phi_bb247_17, &phi_bb247_18, &phi_bb247_19, &phi_bb247_23, &phi_bb247_26, &phi_bb247_31, &phi_bb247_35, &phi_bb247_36, &phi_bb247_40, &phi_bb247_41);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb240_10;
  TNode<BuiltinPtr> phi_bb240_11;
  TNode<FixedArray> phi_bb240_13;
  TNode<IntPtrT> phi_bb240_14;
  TNode<BoolT> phi_bb240_16;
  TNode<PrimitiveHeapObject> phi_bb240_17;
  TNode<UintPtrT> phi_bb240_18;
  TNode<IntPtrT> phi_bb240_19;
  TNode<IntPtrT> phi_bb240_23;
  TNode<IntPtrT> phi_bb240_26;
  TNode<IntPtrT> tmp315;
  TNode<IntPtrT> tmp316;
  TNode<BoolT> tmp317;
  if (block240.is_used()) {
    ca_.Bind(&block240, &phi_bb240_10, &phi_bb240_11, &phi_bb240_13, &phi_bb240_14, &phi_bb240_16, &phi_bb240_17, &phi_bb240_18, &phi_bb240_19, &phi_bb240_23, &phi_bb240_26);
    tmp315 = CodeStubAssembler(state_).CalculateNewElementsCapacity(TNode<IntPtrT>{tmp298});
    tmp316 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    tmp317 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{tmp315}, TNode<IntPtrT>{tmp316});
    ca_.Branch(tmp317, &block250, std::vector<compiler::Node*>{phi_bb240_10, phi_bb240_11, phi_bb240_13, phi_bb240_14, phi_bb240_16, phi_bb240_17, phi_bb240_18, phi_bb240_19, phi_bb240_23, phi_bb240_26}, &block251, std::vector<compiler::Node*>{phi_bb240_10, phi_bb240_11, phi_bb240_13, phi_bb240_14, phi_bb240_16, phi_bb240_17, phi_bb240_18, phi_bb240_19, phi_bb240_23, phi_bb240_26});
  }

  TNode<IntPtrT> phi_bb250_10;
  TNode<BuiltinPtr> phi_bb250_11;
  TNode<FixedArray> phi_bb250_13;
  TNode<IntPtrT> phi_bb250_14;
  TNode<BoolT> phi_bb250_16;
  TNode<PrimitiveHeapObject> phi_bb250_17;
  TNode<UintPtrT> phi_bb250_18;
  TNode<IntPtrT> phi_bb250_19;
  TNode<IntPtrT> phi_bb250_23;
  TNode<IntPtrT> phi_bb250_26;
  TNode<IntPtrT> tmp318;
  if (block250.is_used()) {
    ca_.Bind(&block250, &phi_bb250_10, &phi_bb250_11, &phi_bb250_13, &phi_bb250_14, &phi_bb250_16, &phi_bb250_17, &phi_bb250_18, &phi_bb250_19, &phi_bb250_23, &phi_bb250_26);
    tmp318 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    ca_.Goto(&block252, phi_bb250_10, phi_bb250_11, phi_bb250_13, phi_bb250_14, phi_bb250_16, phi_bb250_17, phi_bb250_18, phi_bb250_19, phi_bb250_23, phi_bb250_26, tmp318);
  }

  TNode<IntPtrT> phi_bb251_10;
  TNode<BuiltinPtr> phi_bb251_11;
  TNode<FixedArray> phi_bb251_13;
  TNode<IntPtrT> phi_bb251_14;
  TNode<BoolT> phi_bb251_16;
  TNode<PrimitiveHeapObject> phi_bb251_17;
  TNode<UintPtrT> phi_bb251_18;
  TNode<IntPtrT> phi_bb251_19;
  TNode<IntPtrT> phi_bb251_23;
  TNode<IntPtrT> phi_bb251_26;
  if (block251.is_used()) {
    ca_.Bind(&block251, &phi_bb251_10, &phi_bb251_11, &phi_bb251_13, &phi_bb251_14, &phi_bb251_16, &phi_bb251_17, &phi_bb251_18, &phi_bb251_19, &phi_bb251_23, &phi_bb251_26);
    ca_.Goto(&block252, phi_bb251_10, phi_bb251_11, phi_bb251_13, phi_bb251_14, phi_bb251_16, phi_bb251_17, phi_bb251_18, phi_bb251_19, phi_bb251_23, phi_bb251_26, tmp315);
  }

  TNode<IntPtrT> phi_bb252_10;
  TNode<BuiltinPtr> phi_bb252_11;
  TNode<FixedArray> phi_bb252_13;
  TNode<IntPtrT> phi_bb252_14;
  TNode<BoolT> phi_bb252_16;
  TNode<PrimitiveHeapObject> phi_bb252_17;
  TNode<UintPtrT> phi_bb252_18;
  TNode<IntPtrT> phi_bb252_19;
  TNode<IntPtrT> phi_bb252_23;
  TNode<IntPtrT> phi_bb252_26;
  TNode<IntPtrT> phi_bb252_32;
  TNode<IntPtrT> tmp319;
  TNode<BoolT> tmp320;
  if (block252.is_used()) {
    ca_.Bind(&block252, &phi_bb252_10, &phi_bb252_11, &phi_bb252_13, &phi_bb252_14, &phi_bb252_16, &phi_bb252_17, &phi_bb252_18, &phi_bb252_19, &phi_bb252_23, &phi_bb252_26, &phi_bb252_32);
    tmp319 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp320 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{phi_bb252_32}, TNode<IntPtrT>{tmp319});
    ca_.Branch(tmp320, &block254, std::vector<compiler::Node*>{phi_bb252_10, phi_bb252_11, phi_bb252_13, phi_bb252_14, phi_bb252_16, phi_bb252_17, phi_bb252_18, phi_bb252_19, phi_bb252_23, phi_bb252_26}, &block255, std::vector<compiler::Node*>{phi_bb252_10, phi_bb252_11, phi_bb252_13, phi_bb252_14, phi_bb252_16, phi_bb252_17, phi_bb252_18, phi_bb252_19, phi_bb252_23, phi_bb252_26});
  }

  TNode<IntPtrT> phi_bb255_10;
  TNode<BuiltinPtr> phi_bb255_11;
  TNode<FixedArray> phi_bb255_13;
  TNode<IntPtrT> phi_bb255_14;
  TNode<BoolT> phi_bb255_16;
  TNode<PrimitiveHeapObject> phi_bb255_17;
  TNode<UintPtrT> phi_bb255_18;
  TNode<IntPtrT> phi_bb255_19;
  TNode<IntPtrT> phi_bb255_23;
  TNode<IntPtrT> phi_bb255_26;
  if (block255.is_used()) {
    ca_.Bind(&block255, &phi_bb255_10, &phi_bb255_11, &phi_bb255_13, &phi_bb255_14, &phi_bb255_16, &phi_bb255_17, &phi_bb255_18, &phi_bb255_19, &phi_bb255_23, &phi_bb255_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 248});
      CodeStubAssembler(state_).FailAssert("Torque assert 'cappedNewChunkLength > 0' failed", pos_stack);
    }
  }

  TNode<IntPtrT> phi_bb254_10;
  TNode<BuiltinPtr> phi_bb254_11;
  TNode<FixedArray> phi_bb254_13;
  TNode<IntPtrT> phi_bb254_14;
  TNode<BoolT> phi_bb254_16;
  TNode<PrimitiveHeapObject> phi_bb254_17;
  TNode<UintPtrT> phi_bb254_18;
  TNode<IntPtrT> phi_bb254_19;
  TNode<IntPtrT> phi_bb254_23;
  TNode<IntPtrT> phi_bb254_26;
  TNode<FixedArray> tmp321;
  TNode<Union<HeapObject, TaggedIndex>> tmp322;
  TNode<IntPtrT> tmp323;
  TNode<IntPtrT> tmp324;
  TNode<UintPtrT> tmp325;
  TNode<IntPtrT> tmp326;
  TNode<UintPtrT> tmp327;
  TNode<UintPtrT> tmp328;
  TNode<BoolT> tmp329;
  if (block254.is_used()) {
    ca_.Bind(&block254, &phi_bb254_10, &phi_bb254_11, &phi_bb254_13, &phi_bb254_14, &phi_bb254_16, &phi_bb254_17, &phi_bb254_18, &phi_bb254_19, &phi_bb254_23, &phi_bb254_26);
    tmp321 = CodeStubAssembler(state_).AllocateZeroedFixedArray(TNode<IntPtrT>{phi_bb252_32});
    std::tie(tmp322, tmp323, tmp324) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb254_13}).Flatten();
    tmp325 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp326 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp325});
    tmp327 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp326});
    tmp328 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp324});
    tmp329 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp327}, TNode<UintPtrT>{tmp328});
    ca_.Branch(tmp329, &block261, std::vector<compiler::Node*>{phi_bb254_10, phi_bb254_11, phi_bb254_13, phi_bb254_14, phi_bb254_16, phi_bb254_17, phi_bb254_18, phi_bb254_19, phi_bb254_23, phi_bb254_26, phi_bb254_13}, &block262, std::vector<compiler::Node*>{phi_bb254_10, phi_bb254_11, phi_bb254_13, phi_bb254_14, phi_bb254_16, phi_bb254_17, phi_bb254_18, phi_bb254_19, phi_bb254_23, phi_bb254_26, phi_bb254_13});
  }

  TNode<IntPtrT> phi_bb261_10;
  TNode<BuiltinPtr> phi_bb261_11;
  TNode<FixedArray> phi_bb261_13;
  TNode<IntPtrT> phi_bb261_14;
  TNode<BoolT> phi_bb261_16;
  TNode<PrimitiveHeapObject> phi_bb261_17;
  TNode<UintPtrT> phi_bb261_18;
  TNode<IntPtrT> phi_bb261_19;
  TNode<IntPtrT> phi_bb261_23;
  TNode<IntPtrT> phi_bb261_26;
  TNode<FixedArray> phi_bb261_34;
  TNode<IntPtrT> tmp330;
  TNode<IntPtrT> tmp331;
  TNode<Union<HeapObject, TaggedIndex>> tmp332;
  TNode<IntPtrT> tmp333;
  TNode<Union<HeapObject, TaggedIndex>> tmp334;
  TNode<IntPtrT> tmp335;
  TNode<IntPtrT> tmp336;
  TNode<UintPtrT> tmp337;
  TNode<IntPtrT> tmp338;
  TNode<UintPtrT> tmp339;
  TNode<UintPtrT> tmp340;
  TNode<BoolT> tmp341;
  if (block261.is_used()) {
    ca_.Bind(&block261, &phi_bb261_10, &phi_bb261_11, &phi_bb261_13, &phi_bb261_14, &phi_bb261_16, &phi_bb261_17, &phi_bb261_18, &phi_bb261_19, &phi_bb261_23, &phi_bb261_26, &phi_bb261_34);
    tmp330 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp326});
    tmp331 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp323}, TNode<IntPtrT>{tmp330});
    std::tie(tmp332, tmp333) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp322}, TNode<IntPtrT>{tmp331}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp332, tmp333}, tmp321);
    std::tie(tmp334, tmp335, tmp336) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp321}).Flatten();
    tmp337 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp338 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp337});
    tmp339 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp338});
    tmp340 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp336});
    tmp341 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp339}, TNode<UintPtrT>{tmp340});
    ca_.Branch(tmp341, &block270, std::vector<compiler::Node*>{phi_bb261_10, phi_bb261_11, phi_bb261_13, phi_bb261_14, phi_bb261_16, phi_bb261_17, phi_bb261_18, phi_bb261_19, phi_bb261_23, phi_bb261_26}, &block271, std::vector<compiler::Node*>{phi_bb261_10, phi_bb261_11, phi_bb261_13, phi_bb261_14, phi_bb261_16, phi_bb261_17, phi_bb261_18, phi_bb261_19, phi_bb261_23, phi_bb261_26});
  }

  TNode<IntPtrT> phi_bb262_10;
  TNode<BuiltinPtr> phi_bb262_11;
  TNode<FixedArray> phi_bb262_13;
  TNode<IntPtrT> phi_bb262_14;
  TNode<BoolT> phi_bb262_16;
  TNode<PrimitiveHeapObject> phi_bb262_17;
  TNode<UintPtrT> phi_bb262_18;
  TNode<IntPtrT> phi_bb262_19;
  TNode<IntPtrT> phi_bb262_23;
  TNode<IntPtrT> phi_bb262_26;
  TNode<FixedArray> phi_bb262_34;
  if (block262.is_used()) {
    ca_.Bind(&block262, &phi_bb262_10, &phi_bb262_11, &phi_bb262_13, &phi_bb262_14, &phi_bb262_16, &phi_bb262_17, &phi_bb262_18, &phi_bb262_19, &phi_bb262_23, &phi_bb262_26, &phi_bb262_34);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb270_10;
  TNode<BuiltinPtr> phi_bb270_11;
  TNode<FixedArray> phi_bb270_13;
  TNode<IntPtrT> phi_bb270_14;
  TNode<BoolT> phi_bb270_16;
  TNode<PrimitiveHeapObject> phi_bb270_17;
  TNode<UintPtrT> phi_bb270_18;
  TNode<IntPtrT> phi_bb270_19;
  TNode<IntPtrT> phi_bb270_23;
  TNode<IntPtrT> phi_bb270_26;
  TNode<IntPtrT> tmp342;
  TNode<IntPtrT> tmp343;
  TNode<Union<HeapObject, TaggedIndex>> tmp344;
  TNode<IntPtrT> tmp345;
  TNode<Undefined> tmp346;
  TNode<Union<HeapObject, TaggedIndex>> tmp347;
  TNode<IntPtrT> tmp348;
  TNode<IntPtrT> tmp349;
  TNode<UintPtrT> tmp350;
  TNode<IntPtrT> tmp351;
  TNode<UintPtrT> tmp352;
  TNode<UintPtrT> tmp353;
  TNode<BoolT> tmp354;
  if (block270.is_used()) {
    ca_.Bind(&block270, &phi_bb270_10, &phi_bb270_11, &phi_bb270_13, &phi_bb270_14, &phi_bb270_16, &phi_bb270_17, &phi_bb270_18, &phi_bb270_19, &phi_bb270_23, &phi_bb270_26);
    tmp342 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp338});
    tmp343 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp335}, TNode<IntPtrT>{tmp342});
    std::tie(tmp344, tmp345) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp334}, TNode<IntPtrT>{tmp343}).Flatten();
    tmp346 = Undefined_0(state_);
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp344, tmp345}, tmp346);
    std::tie(tmp347, tmp348, tmp349) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp321}).Flatten();
    tmp350 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp351 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp350});
    tmp352 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp351});
    tmp353 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp349});
    tmp354 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp352}, TNode<UintPtrT>{tmp353});
    ca_.Branch(tmp354, &block279, std::vector<compiler::Node*>{phi_bb270_10, phi_bb270_11, phi_bb270_13, phi_bb270_14, phi_bb270_16, phi_bb270_17, phi_bb270_18, phi_bb270_19, phi_bb270_23, phi_bb270_26}, &block280, std::vector<compiler::Node*>{phi_bb270_10, phi_bb270_11, phi_bb270_13, phi_bb270_14, phi_bb270_16, phi_bb270_17, phi_bb270_18, phi_bb270_19, phi_bb270_23, phi_bb270_26});
  }

  TNode<IntPtrT> phi_bb271_10;
  TNode<BuiltinPtr> phi_bb271_11;
  TNode<FixedArray> phi_bb271_13;
  TNode<IntPtrT> phi_bb271_14;
  TNode<BoolT> phi_bb271_16;
  TNode<PrimitiveHeapObject> phi_bb271_17;
  TNode<UintPtrT> phi_bb271_18;
  TNode<IntPtrT> phi_bb271_19;
  TNode<IntPtrT> phi_bb271_23;
  TNode<IntPtrT> phi_bb271_26;
  if (block271.is_used()) {
    ca_.Bind(&block271, &phi_bb271_10, &phi_bb271_11, &phi_bb271_13, &phi_bb271_14, &phi_bb271_16, &phi_bb271_17, &phi_bb271_18, &phi_bb271_19, &phi_bb271_23, &phi_bb271_26);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb279_10;
  TNode<BuiltinPtr> phi_bb279_11;
  TNode<FixedArray> phi_bb279_13;
  TNode<IntPtrT> phi_bb279_14;
  TNode<BoolT> phi_bb279_16;
  TNode<PrimitiveHeapObject> phi_bb279_17;
  TNode<UintPtrT> phi_bb279_18;
  TNode<IntPtrT> phi_bb279_19;
  TNode<IntPtrT> phi_bb279_23;
  TNode<IntPtrT> phi_bb279_26;
  TNode<IntPtrT> tmp355;
  TNode<IntPtrT> tmp356;
  TNode<Union<HeapObject, TaggedIndex>> tmp357;
  TNode<IntPtrT> tmp358;
  TNode<IntPtrT> tmp359;
  if (block279.is_used()) {
    ca_.Bind(&block279, &phi_bb279_10, &phi_bb279_11, &phi_bb279_13, &phi_bb279_14, &phi_bb279_16, &phi_bb279_17, &phi_bb279_18, &phi_bb279_19, &phi_bb279_23, &phi_bb279_26);
    tmp355 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp351});
    tmp356 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp348}, TNode<IntPtrT>{tmp355});
    std::tie(tmp357, tmp358) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp347}, TNode<IntPtrT>{tmp356}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp357, tmp358}, tmp297);
    tmp359 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    ca_.Goto(&block241, phi_bb279_10, phi_bb279_11, tmp321, tmp359, phi_bb279_16, phi_bb279_17, phi_bb279_18, phi_bb279_19, phi_bb279_23, phi_bb279_26);
  }

  TNode<IntPtrT> phi_bb280_10;
  TNode<BuiltinPtr> phi_bb280_11;
  TNode<FixedArray> phi_bb280_13;
  TNode<IntPtrT> phi_bb280_14;
  TNode<BoolT> phi_bb280_16;
  TNode<PrimitiveHeapObject> phi_bb280_17;
  TNode<UintPtrT> phi_bb280_18;
  TNode<IntPtrT> phi_bb280_19;
  TNode<IntPtrT> phi_bb280_23;
  TNode<IntPtrT> phi_bb280_26;
  if (block280.is_used()) {
    ca_.Bind(&block280, &phi_bb280_10, &phi_bb280_11, &phi_bb280_13, &phi_bb280_14, &phi_bb280_16, &phi_bb280_17, &phi_bb280_18, &phi_bb280_19, &phi_bb280_23, &phi_bb280_26);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb241_10;
  TNode<BuiltinPtr> phi_bb241_11;
  TNode<FixedArray> phi_bb241_13;
  TNode<IntPtrT> phi_bb241_14;
  TNode<BoolT> phi_bb241_16;
  TNode<PrimitiveHeapObject> phi_bb241_17;
  TNode<UintPtrT> phi_bb241_18;
  TNode<IntPtrT> phi_bb241_19;
  TNode<IntPtrT> phi_bb241_23;
  TNode<IntPtrT> phi_bb241_26;
  TNode<Null> tmp360;
  if (block241.is_used()) {
    ca_.Bind(&block241, &phi_bb241_10, &phi_bb241_11, &phi_bb241_13, &phi_bb241_14, &phi_bb241_16, &phi_bb241_17, &phi_bb241_18, &phi_bb241_19, &phi_bb241_23, &phi_bb241_26);
    tmp360 = Null_0(state_);
    ca_.Goto(&block233, phi_bb241_10, phi_bb241_11, phi_bb241_13, phi_bb241_14, phi_bb241_16, tmp360, phi_bb241_18, phi_bb241_19, phi_bb241_23, phi_bb241_26);
  }

  TNode<IntPtrT> phi_bb233_10;
  TNode<BuiltinPtr> phi_bb233_11;
  TNode<FixedArray> phi_bb233_13;
  TNode<IntPtrT> phi_bb233_14;
  TNode<BoolT> phi_bb233_16;
  TNode<PrimitiveHeapObject> phi_bb233_17;
  TNode<UintPtrT> phi_bb233_18;
  TNode<IntPtrT> phi_bb233_19;
  TNode<IntPtrT> phi_bb233_23;
  TNode<IntPtrT> phi_bb233_26;
  if (block233.is_used()) {
    ca_.Bind(&block233, &phi_bb233_10, &phi_bb233_11, &phi_bb233_13, &phi_bb233_14, &phi_bb233_16, &phi_bb233_17, &phi_bb233_18, &phi_bb233_19, &phi_bb233_23, &phi_bb233_26);
    ca_.Goto(&block226, phi_bb233_10, phi_bb233_11, phi_bb233_13, phi_bb233_14, tmp296, phi_bb233_16, phi_bb233_17, phi_bb233_18, phi_bb233_19, phi_bb233_23);
  }

  TNode<IntPtrT> phi_bb226_10;
  TNode<BuiltinPtr> phi_bb226_11;
  TNode<FixedArray> phi_bb226_13;
  TNode<IntPtrT> phi_bb226_14;
  TNode<IntPtrT> phi_bb226_15;
  TNode<BoolT> phi_bb226_16;
  TNode<PrimitiveHeapObject> phi_bb226_17;
  TNode<UintPtrT> phi_bb226_18;
  TNode<IntPtrT> phi_bb226_19;
  TNode<IntPtrT> phi_bb226_23;
  TNode<String> tmp361;
  if (block226.is_used()) {
    ca_.Bind(&block226, &phi_bb226_10, &phi_bb226_11, &phi_bb226_13, &phi_bb226_14, &phi_bb226_15, &phi_bb226_16, &phi_bb226_17, &phi_bb226_18, &phi_bb226_19, &phi_bb226_23);
    tmp361 = BufferJoin_0(state_, TNode<Context>{p_context}, TorqueStructBuffer_0{TNode<FixedArray>{tmp5}, TNode<FixedArray>{phi_bb226_13}, TNode<IntPtrT>{phi_bb226_14}, TNode<IntPtrT>{phi_bb226_15}, TNode<BoolT>{phi_bb226_16}, TNode<PrimitiveHeapObject>{phi_bb226_17}}, TNode<String>{p_sep});
    ca_.Goto(&block283);
  }

    ca_.Bind(&block283);
  return TNode<String>{tmp361};
}

TF_BUILTIN(LoadJoinTypedElement_Int32Elements_0, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSReceiver> parameter1 = UncheckedParameter<JSReceiver>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<UintPtrT> parameter2 = UncheckedParameter<UintPtrT>(Descriptor::kK);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSTypedArray> tmp0;
  TNode<BoolT> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = UnsafeCast_JSTypedArray_0(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1});
    tmp1 = CodeStubAssembler(state_).IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean(TNode<JSArrayBufferView>{tmp0});
    tmp2 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp1});
    ca_.Branch(tmp2, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 65});
      CodeStubAssembler(state_).FailAssert("Torque assert '!typed_array::IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean( typedArray)' failed", pos_stack);
    }
  }

  TNode<RawPtrT> tmp3;
  TNode<Numeric> tmp4;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp3 = CodeStubAssembler(state_).LoadJSTypedArrayDataPtr(TNode<JSTypedArray>{tmp0});
    tmp4 = CodeStubAssembler(state_).LoadFixedTypedArrayElementAsTagged(TNode<RawPtrT>{tmp3}, TNode<UintPtrT>{parameter2}, (KindForArrayType_Int32Elements_0(state_)));
    CodeStubAssembler(state_).Return(tmp4);
  }
}

TF_BUILTIN(LoadJoinTypedElement_Float16Elements_0, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSReceiver> parameter1 = UncheckedParameter<JSReceiver>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<UintPtrT> parameter2 = UncheckedParameter<UintPtrT>(Descriptor::kK);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSTypedArray> tmp0;
  TNode<BoolT> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = UnsafeCast_JSTypedArray_0(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1});
    tmp1 = CodeStubAssembler(state_).IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean(TNode<JSArrayBufferView>{tmp0});
    tmp2 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp1});
    ca_.Branch(tmp2, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 65});
      CodeStubAssembler(state_).FailAssert("Torque assert '!typed_array::IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean( typedArray)' failed", pos_stack);
    }
  }

  TNode<RawPtrT> tmp3;
  TNode<Numeric> tmp4;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp3 = CodeStubAssembler(state_).LoadJSTypedArrayDataPtr(TNode<JSTypedArray>{tmp0});
    tmp4 = CodeStubAssembler(state_).LoadFixedTypedArrayElementAsTagged(TNode<RawPtrT>{tmp3}, TNode<UintPtrT>{parameter2}, (KindForArrayType_Float16Elements_0(state_)));
    CodeStubAssembler(state_).Return(tmp4);
  }
}

TF_BUILTIN(LoadJoinTypedElement_Float32Elements_0, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSReceiver> parameter1 = UncheckedParameter<JSReceiver>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<UintPtrT> parameter2 = UncheckedParameter<UintPtrT>(Descriptor::kK);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSTypedArray> tmp0;
  TNode<BoolT> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = UnsafeCast_JSTypedArray_0(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1});
    tmp1 = CodeStubAssembler(state_).IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean(TNode<JSArrayBufferView>{tmp0});
    tmp2 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp1});
    ca_.Branch(tmp2, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 65});
      CodeStubAssembler(state_).FailAssert("Torque assert '!typed_array::IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean( typedArray)' failed", pos_stack);
    }
  }

  TNode<RawPtrT> tmp3;
  TNode<Numeric> tmp4;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp3 = CodeStubAssembler(state_).LoadJSTypedArrayDataPtr(TNode<JSTypedArray>{tmp0});
    tmp4 = CodeStubAssembler(state_).LoadFixedTypedArrayElementAsTagged(TNode<RawPtrT>{tmp3}, TNode<UintPtrT>{parameter2}, (KindForArrayType_Float32Elements_0(state_)));
    CodeStubAssembler(state_).Return(tmp4);
  }
}

TF_BUILTIN(LoadJoinTypedElement_Float64Elements_0, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSReceiver> parameter1 = UncheckedParameter<JSReceiver>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<UintPtrT> parameter2 = UncheckedParameter<UintPtrT>(Descriptor::kK);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSTypedArray> tmp0;
  TNode<BoolT> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = UnsafeCast_JSTypedArray_0(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1});
    tmp1 = CodeStubAssembler(state_).IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean(TNode<JSArrayBufferView>{tmp0});
    tmp2 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp1});
    ca_.Branch(tmp2, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 65});
      CodeStubAssembler(state_).FailAssert("Torque assert '!typed_array::IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean( typedArray)' failed", pos_stack);
    }
  }

  TNode<RawPtrT> tmp3;
  TNode<Numeric> tmp4;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp3 = CodeStubAssembler(state_).LoadJSTypedArrayDataPtr(TNode<JSTypedArray>{tmp0});
    tmp4 = CodeStubAssembler(state_).LoadFixedTypedArrayElementAsTagged(TNode<RawPtrT>{tmp3}, TNode<UintPtrT>{parameter2}, (KindForArrayType_Float64Elements_0(state_)));
    CodeStubAssembler(state_).Return(tmp4);
  }
}

TF_BUILTIN(LoadJoinTypedElement_Uint8ClampedElements_0, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSReceiver> parameter1 = UncheckedParameter<JSReceiver>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<UintPtrT> parameter2 = UncheckedParameter<UintPtrT>(Descriptor::kK);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSTypedArray> tmp0;
  TNode<BoolT> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = UnsafeCast_JSTypedArray_0(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1});
    tmp1 = CodeStubAssembler(state_).IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean(TNode<JSArrayBufferView>{tmp0});
    tmp2 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp1});
    ca_.Branch(tmp2, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 65});
      CodeStubAssembler(state_).FailAssert("Torque assert '!typed_array::IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean( typedArray)' failed", pos_stack);
    }
  }

  TNode<RawPtrT> tmp3;
  TNode<Numeric> tmp4;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp3 = CodeStubAssembler(state_).LoadJSTypedArrayDataPtr(TNode<JSTypedArray>{tmp0});
    tmp4 = CodeStubAssembler(state_).LoadFixedTypedArrayElementAsTagged(TNode<RawPtrT>{tmp3}, TNode<UintPtrT>{parameter2}, (KindForArrayType_Uint8ClampedElements_0(state_)));
    CodeStubAssembler(state_).Return(tmp4);
  }
}

TF_BUILTIN(LoadJoinTypedElement_BigUint64Elements_0, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSReceiver> parameter1 = UncheckedParameter<JSReceiver>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<UintPtrT> parameter2 = UncheckedParameter<UintPtrT>(Descriptor::kK);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSTypedArray> tmp0;
  TNode<BoolT> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = UnsafeCast_JSTypedArray_0(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1});
    tmp1 = CodeStubAssembler(state_).IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean(TNode<JSArrayBufferView>{tmp0});
    tmp2 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp1});
    ca_.Branch(tmp2, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 65});
      CodeStubAssembler(state_).FailAssert("Torque assert '!typed_array::IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean( typedArray)' failed", pos_stack);
    }
  }

  TNode<RawPtrT> tmp3;
  TNode<Numeric> tmp4;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp3 = CodeStubAssembler(state_).LoadJSTypedArrayDataPtr(TNode<JSTypedArray>{tmp0});
    tmp4 = CodeStubAssembler(state_).LoadFixedTypedArrayElementAsTagged(TNode<RawPtrT>{tmp3}, TNode<UintPtrT>{parameter2}, (KindForArrayType_BigUint64Elements_0(state_)));
    CodeStubAssembler(state_).Return(tmp4);
  }
}

TF_BUILTIN(LoadJoinTypedElement_BigInt64Elements_0, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSReceiver> parameter1 = UncheckedParameter<JSReceiver>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<UintPtrT> parameter2 = UncheckedParameter<UintPtrT>(Descriptor::kK);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSTypedArray> tmp0;
  TNode<BoolT> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = UnsafeCast_JSTypedArray_0(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1});
    tmp1 = CodeStubAssembler(state_).IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean(TNode<JSArrayBufferView>{tmp0});
    tmp2 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp1});
    ca_.Branch(tmp2, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 65});
      CodeStubAssembler(state_).FailAssert("Torque assert '!typed_array::IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean( typedArray)' failed", pos_stack);
    }
  }

  TNode<RawPtrT> tmp3;
  TNode<Numeric> tmp4;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp3 = CodeStubAssembler(state_).LoadJSTypedArrayDataPtr(TNode<JSTypedArray>{tmp0});
    tmp4 = CodeStubAssembler(state_).LoadFixedTypedArrayElementAsTagged(TNode<RawPtrT>{tmp3}, TNode<UintPtrT>{parameter2}, (KindForArrayType_BigInt64Elements_0(state_)));
    CodeStubAssembler(state_).Return(tmp4);
  }
}

TF_BUILTIN(LoadJoinTypedElement_Uint8Elements_0, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSReceiver> parameter1 = UncheckedParameter<JSReceiver>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<UintPtrT> parameter2 = UncheckedParameter<UintPtrT>(Descriptor::kK);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSTypedArray> tmp0;
  TNode<BoolT> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = UnsafeCast_JSTypedArray_0(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1});
    tmp1 = CodeStubAssembler(state_).IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean(TNode<JSArrayBufferView>{tmp0});
    tmp2 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp1});
    ca_.Branch(tmp2, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 65});
      CodeStubAssembler(state_).FailAssert("Torque assert '!typed_array::IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean( typedArray)' failed", pos_stack);
    }
  }

  TNode<RawPtrT> tmp3;
  TNode<Numeric> tmp4;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp3 = CodeStubAssembler(state_).LoadJSTypedArrayDataPtr(TNode<JSTypedArray>{tmp0});
    tmp4 = CodeStubAssembler(state_).LoadFixedTypedArrayElementAsTagged(TNode<RawPtrT>{tmp3}, TNode<UintPtrT>{parameter2}, (KindForArrayType_Uint8Elements_0(state_)));
    CodeStubAssembler(state_).Return(tmp4);
  }
}

TF_BUILTIN(LoadJoinTypedElement_Int8Elements_0, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSReceiver> parameter1 = UncheckedParameter<JSReceiver>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<UintPtrT> parameter2 = UncheckedParameter<UintPtrT>(Descriptor::kK);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSTypedArray> tmp0;
  TNode<BoolT> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = UnsafeCast_JSTypedArray_0(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1});
    tmp1 = CodeStubAssembler(state_).IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean(TNode<JSArrayBufferView>{tmp0});
    tmp2 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp1});
    ca_.Branch(tmp2, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 65});
      CodeStubAssembler(state_).FailAssert("Torque assert '!typed_array::IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean( typedArray)' failed", pos_stack);
    }
  }

  TNode<RawPtrT> tmp3;
  TNode<Numeric> tmp4;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp3 = CodeStubAssembler(state_).LoadJSTypedArrayDataPtr(TNode<JSTypedArray>{tmp0});
    tmp4 = CodeStubAssembler(state_).LoadFixedTypedArrayElementAsTagged(TNode<RawPtrT>{tmp3}, TNode<UintPtrT>{parameter2}, (KindForArrayType_Int8Elements_0(state_)));
    CodeStubAssembler(state_).Return(tmp4);
  }
}

TF_BUILTIN(LoadJoinTypedElement_Uint16Elements_0, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSReceiver> parameter1 = UncheckedParameter<JSReceiver>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<UintPtrT> parameter2 = UncheckedParameter<UintPtrT>(Descriptor::kK);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSTypedArray> tmp0;
  TNode<BoolT> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = UnsafeCast_JSTypedArray_0(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1});
    tmp1 = CodeStubAssembler(state_).IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean(TNode<JSArrayBufferView>{tmp0});
    tmp2 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp1});
    ca_.Branch(tmp2, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 65});
      CodeStubAssembler(state_).FailAssert("Torque assert '!typed_array::IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean( typedArray)' failed", pos_stack);
    }
  }

  TNode<RawPtrT> tmp3;
  TNode<Numeric> tmp4;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp3 = CodeStubAssembler(state_).LoadJSTypedArrayDataPtr(TNode<JSTypedArray>{tmp0});
    tmp4 = CodeStubAssembler(state_).LoadFixedTypedArrayElementAsTagged(TNode<RawPtrT>{tmp3}, TNode<UintPtrT>{parameter2}, (KindForArrayType_Uint16Elements_0(state_)));
    CodeStubAssembler(state_).Return(tmp4);
  }
}

TF_BUILTIN(LoadJoinTypedElement_Int16Elements_0, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSReceiver> parameter1 = UncheckedParameter<JSReceiver>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<UintPtrT> parameter2 = UncheckedParameter<UintPtrT>(Descriptor::kK);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSTypedArray> tmp0;
  TNode<BoolT> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = UnsafeCast_JSTypedArray_0(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1});
    tmp1 = CodeStubAssembler(state_).IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean(TNode<JSArrayBufferView>{tmp0});
    tmp2 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp1});
    ca_.Branch(tmp2, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 65});
      CodeStubAssembler(state_).FailAssert("Torque assert '!typed_array::IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean( typedArray)' failed", pos_stack);
    }
  }

  TNode<RawPtrT> tmp3;
  TNode<Numeric> tmp4;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp3 = CodeStubAssembler(state_).LoadJSTypedArrayDataPtr(TNode<JSTypedArray>{tmp0});
    tmp4 = CodeStubAssembler(state_).LoadFixedTypedArrayElementAsTagged(TNode<RawPtrT>{tmp3}, TNode<UintPtrT>{parameter2}, (KindForArrayType_Int16Elements_0(state_)));
    CodeStubAssembler(state_).Return(tmp4);
  }
}

TF_BUILTIN(LoadJoinTypedElement_Uint32Elements_0, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSReceiver> parameter1 = UncheckedParameter<JSReceiver>(Descriptor::kReceiver);
  USE(parameter1);
  TNode<UintPtrT> parameter2 = UncheckedParameter<UintPtrT>(Descriptor::kK);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSTypedArray> tmp0;
  TNode<BoolT> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = UnsafeCast_JSTypedArray_0(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1});
    tmp1 = CodeStubAssembler(state_).IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean(TNode<JSArrayBufferView>{tmp0});
    tmp2 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp1});
    ca_.Branch(tmp2, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 65});
      CodeStubAssembler(state_).FailAssert("Torque assert '!typed_array::IsJSArrayBufferViewDetachedOrOutOfBoundsBoolean( typedArray)' failed", pos_stack);
    }
  }

  TNode<RawPtrT> tmp3;
  TNode<Numeric> tmp4;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp3 = CodeStubAssembler(state_).LoadJSTypedArrayDataPtr(TNode<JSTypedArray>{tmp0});
    tmp4 = CodeStubAssembler(state_).LoadFixedTypedArrayElementAsTagged(TNode<RawPtrT>{tmp3}, TNode<UintPtrT>{parameter2}, (KindForArrayType_Uint32Elements_0(state_)));
    CodeStubAssembler(state_).Return(tmp4);
  }
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=671&c=10
TNode<String> ArrayJoinImpl_JSTypedArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSReceiver> p_receiver, TNode<String> p_sep, TNode<Number> p_lengthNumber, bool p_useToLocaleString, TNode<JSAny> p_locales, TNode<JSAny> p_options, TNode<BuiltinPtr> p_initialLoadFn) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block5(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, BoolT> block33(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block30(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block37(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block38(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, BoolT> block39(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block35(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block36(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block40(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block44(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block43(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block46(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block45(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block47(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, BoolT, PrimitiveHeapObject, String, String, String, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block54(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, BoolT, PrimitiveHeapObject, String, String, String, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block55(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block48(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block58(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block59(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, IntPtrT> block60(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block63(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block62(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, FixedArray> block69(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, FixedArray> block70(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block78(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block79(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block87(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block88(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block49(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block41(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block34(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block91(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block96(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block95(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, FixedArray> block101(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, FixedArray> block102(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block109(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block108(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block111(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block110(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block114(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block113(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block116(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block115(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block117(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, BoolT, PrimitiveHeapObject, String, String, String, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block124(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, BoolT, PrimitiveHeapObject, String, String, String, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block125(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block118(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block128(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block129(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, IntPtrT> block130(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block133(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block132(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, FixedArray> block139(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, FixedArray> block140(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block148(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block149(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block157(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block158(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block119(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block106(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block164(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block163(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block166(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block165(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block168(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block167(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, FixedArray> block173(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, FixedArray> block174(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block105(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block92(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block179(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block178(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block181(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block180(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block182(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, BoolT, PrimitiveHeapObject, String, String, String, String, Object, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block189(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, BoolT, PrimitiveHeapObject, String, String, String, String, Object, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block190(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block183(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block193(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block194(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object, IntPtrT> block195(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block198(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block197(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object, FixedArray> block204(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object, FixedArray> block205(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block213(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block214(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block222(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block223(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String, String, Object> block184(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, String, String, String> block93(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT> block229(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT> block230(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, BoolT> block231(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT> block227(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT> block228(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block232(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block236(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block235(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block238(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block237(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block239(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block246(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT, FixedArray, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block247(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block240(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block250(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block251(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block252(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block255(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block254(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT, FixedArray> block261(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT, FixedArray> block262(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block270(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block271(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block279(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block280(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block241(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT, IntPtrT> block233(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BuiltinPtr, FixedArray, IntPtrT, IntPtrT, BoolT, PrimitiveHeapObject, UintPtrT, IntPtrT, IntPtrT> block226(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block283(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<Map> tmp1;
  TNode<UintPtrT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<FixedArray> tmp5;
  TNode<FixedArray> tmp6;
  TNode<IntPtrT> tmp7;
  TNode<IntPtrT> tmp8;
  TNode<BoolT> tmp9;
  TNode<PrimitiveHeapObject> tmp10;
  TNode<UintPtrT> tmp11;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    tmp1 = CodeStubAssembler(state_).LoadReference<Map>(CodeStubAssembler::Reference{p_receiver, tmp0});
    tmp2 = Convert_uintptr_Number_0(state_, TNode<Number>{p_lengthNumber});
    tmp3 = CodeStubAssembler(state_).LoadStringLengthAsWord(TNode<String>{p_sep});
    tmp4 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    std::tie(tmp5, tmp6, tmp7, tmp8, tmp9, tmp10) = NewBuffer_0(state_, TNode<UintPtrT>{tmp2}, TNode<String>{p_sep}).Flatten();
    tmp11 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block4, tmp4, p_initialLoadFn, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11);
  }

  TNode<IntPtrT> phi_bb4_10;
  TNode<BuiltinPtr> phi_bb4_11;
  TNode<FixedArray> phi_bb4_13;
  TNode<IntPtrT> phi_bb4_14;
  TNode<IntPtrT> phi_bb4_15;
  TNode<BoolT> phi_bb4_16;
  TNode<PrimitiveHeapObject> phi_bb4_17;
  TNode<UintPtrT> phi_bb4_18;
  TNode<BoolT> tmp12;
  if (block4.is_used()) {
    ca_.Bind(&block4, &phi_bb4_10, &phi_bb4_11, &phi_bb4_13, &phi_bb4_14, &phi_bb4_15, &phi_bb4_16, &phi_bb4_17, &phi_bb4_18);
    tmp12 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{phi_bb4_18}, TNode<UintPtrT>{tmp2});
    ca_.Branch(tmp12, &block2, std::vector<compiler::Node*>{phi_bb4_10, phi_bb4_11, phi_bb4_13, phi_bb4_14, phi_bb4_15, phi_bb4_16, phi_bb4_17, phi_bb4_18}, &block3, std::vector<compiler::Node*>{phi_bb4_10, phi_bb4_11, phi_bb4_13, phi_bb4_14, phi_bb4_15, phi_bb4_16, phi_bb4_17, phi_bb4_18});
  }

  TNode<IntPtrT> phi_bb2_10;
  TNode<BuiltinPtr> phi_bb2_11;
  TNode<FixedArray> phi_bb2_13;
  TNode<IntPtrT> phi_bb2_14;
  TNode<IntPtrT> phi_bb2_15;
  TNode<BoolT> phi_bb2_16;
  TNode<PrimitiveHeapObject> phi_bb2_17;
  TNode<UintPtrT> phi_bb2_18;
  TNode<BoolT> tmp13;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_10, &phi_bb2_11, &phi_bb2_13, &phi_bb2_14, &phi_bb2_15, &phi_bb2_16, &phi_bb2_17, &phi_bb2_18);
    tmp13 = CannotUseSameArrayAccessor_JSTypedArray_0(state_, TNode<Context>{p_context}, TNode<BuiltinPtr>{phi_bb2_11}, TNode<JSReceiver>{p_receiver}, TNode<Map>{tmp1}, TNode<Number>{p_lengthNumber});
    ca_.Branch(tmp13, &block5, std::vector<compiler::Node*>{phi_bb2_10, phi_bb2_11, phi_bb2_13, phi_bb2_14, phi_bb2_15, phi_bb2_16, phi_bb2_17, phi_bb2_18}, &block6, std::vector<compiler::Node*>{phi_bb2_10, phi_bb2_11, phi_bb2_13, phi_bb2_14, phi_bb2_15, phi_bb2_16, phi_bb2_17, phi_bb2_18});
  }

  TNode<IntPtrT> phi_bb5_10;
  TNode<BuiltinPtr> phi_bb5_11;
  TNode<FixedArray> phi_bb5_13;
  TNode<IntPtrT> phi_bb5_14;
  TNode<IntPtrT> phi_bb5_15;
  TNode<BoolT> phi_bb5_16;
  TNode<PrimitiveHeapObject> phi_bb5_17;
  TNode<UintPtrT> phi_bb5_18;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_10, &phi_bb5_11, &phi_bb5_13, &phi_bb5_14, &phi_bb5_15, &phi_bb5_16, &phi_bb5_17, &phi_bb5_18);
    ca_.Goto(&block6, phi_bb5_10, ca_.UncheckedCast<BuiltinPtr>(ca_.SmiConstant(Builtin::kLoadJoinElement_GenericElementsAccessor_0)), phi_bb5_13, phi_bb5_14, phi_bb5_15, phi_bb5_16, phi_bb5_17, phi_bb5_18);
  }

  TNode<IntPtrT> phi_bb6_10;
  TNode<BuiltinPtr> phi_bb6_11;
  TNode<FixedArray> phi_bb6_13;
  TNode<IntPtrT> phi_bb6_14;
  TNode<IntPtrT> phi_bb6_15;
  TNode<BoolT> phi_bb6_16;
  TNode<PrimitiveHeapObject> phi_bb6_17;
  TNode<UintPtrT> phi_bb6_18;
  TNode<UintPtrT> tmp14;
  TNode<BoolT> tmp15;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_10, &phi_bb6_11, &phi_bb6_13, &phi_bb6_14, &phi_bb6_15, &phi_bb6_16, &phi_bb6_17, &phi_bb6_18);
    tmp14 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp15 = CodeStubAssembler(state_).UintPtrGreaterThan(TNode<UintPtrT>{phi_bb6_18}, TNode<UintPtrT>{tmp14});
    ca_.Branch(tmp15, &block7, std::vector<compiler::Node*>{phi_bb6_10, phi_bb6_13, phi_bb6_14, phi_bb6_15, phi_bb6_16, phi_bb6_17, phi_bb6_18}, &block8, std::vector<compiler::Node*>{phi_bb6_10, phi_bb6_13, phi_bb6_14, phi_bb6_15, phi_bb6_16, phi_bb6_17, phi_bb6_18});
  }

  TNode<IntPtrT> phi_bb7_10;
  TNode<FixedArray> phi_bb7_13;
  TNode<IntPtrT> phi_bb7_14;
  TNode<IntPtrT> phi_bb7_15;
  TNode<BoolT> phi_bb7_16;
  TNode<PrimitiveHeapObject> phi_bb7_17;
  TNode<UintPtrT> phi_bb7_18;
  TNode<IntPtrT> tmp16;
  TNode<IntPtrT> tmp17;
  if (block7.is_used()) {
    ca_.Bind(&block7, &phi_bb7_10, &phi_bb7_13, &phi_bb7_14, &phi_bb7_15, &phi_bb7_16, &phi_bb7_17, &phi_bb7_18);
    tmp16 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp17 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb7_10}, TNode<IntPtrT>{tmp16});
    ca_.Goto(&block8, tmp17, phi_bb7_13, phi_bb7_14, phi_bb7_15, phi_bb7_16, phi_bb7_17, phi_bb7_18);
  }

  TNode<IntPtrT> phi_bb8_10;
  TNode<FixedArray> phi_bb8_13;
  TNode<IntPtrT> phi_bb8_14;
  TNode<IntPtrT> phi_bb8_15;
  TNode<BoolT> phi_bb8_16;
  TNode<PrimitiveHeapObject> phi_bb8_17;
  TNode<UintPtrT> phi_bb8_18;
  TNode<UintPtrT> tmp18;
  TNode<UintPtrT> tmp19;
  TNode<JSAny> tmp20;
  if (block8.is_used()) {
    ca_.Bind(&block8, &phi_bb8_10, &phi_bb8_13, &phi_bb8_14, &phi_bb8_15, &phi_bb8_16, &phi_bb8_17, &phi_bb8_18);
    tmp18 = FromConstexpr_uintptr_constexpr_int31_0(state_, 1);
    tmp19 = CodeStubAssembler(state_).UintPtrAdd(TNode<UintPtrT>{phi_bb8_18}, TNode<UintPtrT>{tmp18});
tmp20 = TORQUE_CAST(CodeStubAssembler(state_).CallBuiltinPointer(Builtins::CallInterfaceDescriptorFor(ExampleBuiltinForTorqueFunctionPointerType(0)), phi_bb6_11, p_context, p_receiver, phi_bb8_18));
    if ((p_useToLocaleString)) {
      ca_.Goto(&block9, phi_bb8_13, phi_bb8_14, phi_bb8_15, phi_bb8_16, phi_bb8_17);
    } else {
      ca_.Goto(&block10, phi_bb8_13, phi_bb8_14, phi_bb8_15, phi_bb8_16, phi_bb8_17);
    }
  }

  TNode<FixedArray> phi_bb9_13;
  TNode<IntPtrT> phi_bb9_14;
  TNode<IntPtrT> phi_bb9_15;
  TNode<BoolT> phi_bb9_16;
  TNode<PrimitiveHeapObject> phi_bb9_17;
  TNode<String> tmp21;
  TNode<String> tmp22;
  TNode<BoolT> tmp23;
  if (block9.is_used()) {
    ca_.Bind(&block9, &phi_bb9_13, &phi_bb9_14, &phi_bb9_15, &phi_bb9_16, &phi_bb9_17);
    tmp21 = ca_.CallBuiltin<String>(Builtin::kConvertToLocaleString, p_context, tmp20, p_locales, p_options);
    tmp22 = kEmptyString_0(state_);
    tmp23 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp21}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp22});
    ca_.Branch(tmp23, &block12, std::vector<compiler::Node*>{phi_bb9_13, phi_bb9_14, phi_bb9_15, phi_bb9_16, phi_bb9_17}, &block13, std::vector<compiler::Node*>{phi_bb9_13, phi_bb9_14, phi_bb9_15, phi_bb9_16, phi_bb9_17});
  }

  TNode<FixedArray> phi_bb12_13;
  TNode<IntPtrT> phi_bb12_14;
  TNode<IntPtrT> phi_bb12_15;
  TNode<BoolT> phi_bb12_16;
  TNode<PrimitiveHeapObject> phi_bb12_17;
  if (block12.is_used()) {
    ca_.Bind(&block12, &phi_bb12_13, &phi_bb12_14, &phi_bb12_15, &phi_bb12_16, &phi_bb12_17);
    ca_.Goto(&block4, phi_bb8_10, phi_bb6_11, phi_bb12_13, phi_bb12_14, phi_bb12_15, phi_bb12_16, phi_bb12_17, tmp19);
  }

  TNode<FixedArray> phi_bb13_13;
  TNode<IntPtrT> phi_bb13_14;
  TNode<IntPtrT> phi_bb13_15;
  TNode<BoolT> phi_bb13_16;
  TNode<PrimitiveHeapObject> phi_bb13_17;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_13, &phi_bb13_14, &phi_bb13_15, &phi_bb13_16, &phi_bb13_17);
    ca_.Goto(&block11, phi_bb13_13, phi_bb13_14, phi_bb13_15, phi_bb13_16, phi_bb13_17, tmp21);
  }

  TNode<FixedArray> phi_bb10_13;
  TNode<IntPtrT> phi_bb10_14;
  TNode<IntPtrT> phi_bb10_15;
  TNode<BoolT> phi_bb10_16;
  TNode<PrimitiveHeapObject> phi_bb10_17;
  TNode<String> tmp24;
  if (block10.is_used()) {
    ca_.Bind(&block10, &phi_bb10_13, &phi_bb10_14, &phi_bb10_15, &phi_bb10_16, &phi_bb10_17);
    compiler::CodeAssemblerLabel label25(&ca_);
    tmp24 = Cast_String_1(state_, TNode<Context>{p_context}, TNode<Object>{tmp20}, &label25);
    ca_.Goto(&block16, phi_bb10_13, phi_bb10_14, phi_bb10_15, phi_bb10_16, phi_bb10_17);
    if (label25.is_used()) {
      ca_.Bind(&label25);
      ca_.Goto(&block17, phi_bb10_13, phi_bb10_14, phi_bb10_15, phi_bb10_16, phi_bb10_17);
    }
  }

  TNode<FixedArray> phi_bb17_13;
  TNode<IntPtrT> phi_bb17_14;
  TNode<IntPtrT> phi_bb17_15;
  TNode<BoolT> phi_bb17_16;
  TNode<PrimitiveHeapObject> phi_bb17_17;
  TNode<Number> tmp26;
  if (block17.is_used()) {
    ca_.Bind(&block17, &phi_bb17_13, &phi_bb17_14, &phi_bb17_15, &phi_bb17_16, &phi_bb17_17);
    compiler::CodeAssemblerLabel label27(&ca_);
    tmp26 = Cast_Number_0(state_, TNode<Object>{ca_.UncheckedCast<Union<BigInt, Boolean, HeapNumber, JSReceiver, Null, Smi, Symbol, Undefined>>(tmp20)}, &label27);
    ca_.Goto(&block22, phi_bb17_13, phi_bb17_14, phi_bb17_15, phi_bb17_16, phi_bb17_17);
    if (label27.is_used()) {
      ca_.Bind(&label27);
      ca_.Goto(&block23, phi_bb17_13, phi_bb17_14, phi_bb17_15, phi_bb17_16, phi_bb17_17);
    }
  }

  TNode<FixedArray> phi_bb16_13;
  TNode<IntPtrT> phi_bb16_14;
  TNode<IntPtrT> phi_bb16_15;
  TNode<BoolT> phi_bb16_16;
  TNode<PrimitiveHeapObject> phi_bb16_17;
  TNode<String> tmp28;
  TNode<BoolT> tmp29;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_13, &phi_bb16_14, &phi_bb16_15, &phi_bb16_16, &phi_bb16_17);
    tmp28 = kEmptyString_0(state_);
    tmp29 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp24}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp28});
    ca_.Branch(tmp29, &block18, std::vector<compiler::Node*>{phi_bb16_13, phi_bb16_14, phi_bb16_15, phi_bb16_16, phi_bb16_17}, &block19, std::vector<compiler::Node*>{phi_bb16_13, phi_bb16_14, phi_bb16_15, phi_bb16_16, phi_bb16_17});
  }

  TNode<FixedArray> phi_bb18_13;
  TNode<IntPtrT> phi_bb18_14;
  TNode<IntPtrT> phi_bb18_15;
  TNode<BoolT> phi_bb18_16;
  TNode<PrimitiveHeapObject> phi_bb18_17;
  if (block18.is_used()) {
    ca_.Bind(&block18, &phi_bb18_13, &phi_bb18_14, &phi_bb18_15, &phi_bb18_16, &phi_bb18_17);
    ca_.Goto(&block4, phi_bb8_10, phi_bb6_11, phi_bb18_13, phi_bb18_14, phi_bb18_15, phi_bb18_16, phi_bb18_17, tmp19);
  }

  TNode<FixedArray> phi_bb19_13;
  TNode<IntPtrT> phi_bb19_14;
  TNode<IntPtrT> phi_bb19_15;
  TNode<BoolT> phi_bb19_16;
  TNode<PrimitiveHeapObject> phi_bb19_17;
  if (block19.is_used()) {
    ca_.Bind(&block19, &phi_bb19_13, &phi_bb19_14, &phi_bb19_15, &phi_bb19_16, &phi_bb19_17);
    ca_.Goto(&block14, phi_bb19_13, phi_bb19_14, phi_bb19_15, phi_bb19_16, phi_bb19_17, tmp24);
  }

  TNode<FixedArray> phi_bb23_13;
  TNode<IntPtrT> phi_bb23_14;
  TNode<IntPtrT> phi_bb23_15;
  TNode<BoolT> phi_bb23_16;
  TNode<PrimitiveHeapObject> phi_bb23_17;
  TNode<BoolT> tmp30;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_13, &phi_bb23_14, &phi_bb23_15, &phi_bb23_16, &phi_bb23_17);
    tmp30 = CodeStubAssembler(state_).IsNullOrUndefined(TNode<Object>{ca_.UncheckedCast<Union<BigInt, Boolean, JSReceiver, Null, Symbol, Undefined>>(tmp20)});
    ca_.Branch(tmp30, &block24, std::vector<compiler::Node*>{phi_bb23_13, phi_bb23_14, phi_bb23_15, phi_bb23_16, phi_bb23_17}, &block25, std::vector<compiler::Node*>{phi_bb23_13, phi_bb23_14, phi_bb23_15, phi_bb23_16, phi_bb23_17});
  }

  TNode<FixedArray> phi_bb22_13;
  TNode<IntPtrT> phi_bb22_14;
  TNode<IntPtrT> phi_bb22_15;
  TNode<BoolT> phi_bb22_16;
  TNode<PrimitiveHeapObject> phi_bb22_17;
  TNode<String> tmp31;
  if (block22.is_used()) {
    ca_.Bind(&block22, &phi_bb22_13, &phi_bb22_14, &phi_bb22_15, &phi_bb22_16, &phi_bb22_17);
    tmp31 = CodeStubAssembler(state_).NumberToString(TNode<Number>{tmp26});
    ca_.Goto(&block20, phi_bb22_13, phi_bb22_14, phi_bb22_15, phi_bb22_16, phi_bb22_17, tmp31);
  }

  TNode<FixedArray> phi_bb24_13;
  TNode<IntPtrT> phi_bb24_14;
  TNode<IntPtrT> phi_bb24_15;
  TNode<BoolT> phi_bb24_16;
  TNode<PrimitiveHeapObject> phi_bb24_17;
  if (block24.is_used()) {
    ca_.Bind(&block24, &phi_bb24_13, &phi_bb24_14, &phi_bb24_15, &phi_bb24_16, &phi_bb24_17);
    ca_.Goto(&block4, phi_bb8_10, phi_bb6_11, phi_bb24_13, phi_bb24_14, phi_bb24_15, phi_bb24_16, phi_bb24_17, tmp19);
  }

  TNode<FixedArray> phi_bb25_13;
  TNode<IntPtrT> phi_bb25_14;
  TNode<IntPtrT> phi_bb25_15;
  TNode<BoolT> phi_bb25_16;
  TNode<PrimitiveHeapObject> phi_bb25_17;
  TNode<String> tmp32;
  TNode<String> tmp33;
  TNode<BoolT> tmp34;
  if (block25.is_used()) {
    ca_.Bind(&block25, &phi_bb25_13, &phi_bb25_14, &phi_bb25_15, &phi_bb25_16, &phi_bb25_17);
    tmp32 = ToString_Inline_0(state_, TNode<Context>{p_context}, TNode<JSAny>{ca_.UncheckedCast<Union<BigInt, Boolean, JSReceiver, Null, Symbol, Undefined>>(tmp20)});
    tmp33 = kEmptyString_0(state_);
    tmp34 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp32}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp33});
    ca_.Branch(tmp34, &block26, std::vector<compiler::Node*>{phi_bb25_13, phi_bb25_14, phi_bb25_15, phi_bb25_16, phi_bb25_17}, &block27, std::vector<compiler::Node*>{phi_bb25_13, phi_bb25_14, phi_bb25_15, phi_bb25_16, phi_bb25_17});
  }

  TNode<FixedArray> phi_bb26_13;
  TNode<IntPtrT> phi_bb26_14;
  TNode<IntPtrT> phi_bb26_15;
  TNode<BoolT> phi_bb26_16;
  TNode<PrimitiveHeapObject> phi_bb26_17;
  if (block26.is_used()) {
    ca_.Bind(&block26, &phi_bb26_13, &phi_bb26_14, &phi_bb26_15, &phi_bb26_16, &phi_bb26_17);
    ca_.Goto(&block4, phi_bb8_10, phi_bb6_11, phi_bb26_13, phi_bb26_14, phi_bb26_15, phi_bb26_16, phi_bb26_17, tmp19);
  }

  TNode<FixedArray> phi_bb27_13;
  TNode<IntPtrT> phi_bb27_14;
  TNode<IntPtrT> phi_bb27_15;
  TNode<BoolT> phi_bb27_16;
  TNode<PrimitiveHeapObject> phi_bb27_17;
  if (block27.is_used()) {
    ca_.Bind(&block27, &phi_bb27_13, &phi_bb27_14, &phi_bb27_15, &phi_bb27_16, &phi_bb27_17);
    ca_.Goto(&block20, phi_bb27_13, phi_bb27_14, phi_bb27_15, phi_bb27_16, phi_bb27_17, tmp32);
  }

  TNode<FixedArray> phi_bb20_13;
  TNode<IntPtrT> phi_bb20_14;
  TNode<IntPtrT> phi_bb20_15;
  TNode<BoolT> phi_bb20_16;
  TNode<PrimitiveHeapObject> phi_bb20_17;
  TNode<String> phi_bb20_20;
  if (block20.is_used()) {
    ca_.Bind(&block20, &phi_bb20_13, &phi_bb20_14, &phi_bb20_15, &phi_bb20_16, &phi_bb20_17, &phi_bb20_20);
    ca_.Goto(&block14, phi_bb20_13, phi_bb20_14, phi_bb20_15, phi_bb20_16, phi_bb20_17, phi_bb20_20);
  }

  TNode<FixedArray> phi_bb14_13;
  TNode<IntPtrT> phi_bb14_14;
  TNode<IntPtrT> phi_bb14_15;
  TNode<BoolT> phi_bb14_16;
  TNode<PrimitiveHeapObject> phi_bb14_17;
  TNode<String> phi_bb14_20;
  if (block14.is_used()) {
    ca_.Bind(&block14, &phi_bb14_13, &phi_bb14_14, &phi_bb14_15, &phi_bb14_16, &phi_bb14_17, &phi_bb14_20);
    ca_.Goto(&block11, phi_bb14_13, phi_bb14_14, phi_bb14_15, phi_bb14_16, phi_bb14_17, phi_bb14_20);
  }

  TNode<FixedArray> phi_bb11_13;
  TNode<IntPtrT> phi_bb11_14;
  TNode<IntPtrT> phi_bb11_15;
  TNode<BoolT> phi_bb11_16;
  TNode<PrimitiveHeapObject> phi_bb11_17;
  TNode<String> phi_bb11_20;
  TNode<IntPtrT> tmp35;
  TNode<BoolT> tmp36;
  if (block11.is_used()) {
    ca_.Bind(&block11, &phi_bb11_13, &phi_bb11_14, &phi_bb11_15, &phi_bb11_16, &phi_bb11_17, &phi_bb11_20);
    tmp35 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp36 = CodeStubAssembler(state_).WordNotEqual(TNode<IntPtrT>{phi_bb11_14}, TNode<IntPtrT>{tmp35});
    ca_.Branch(tmp36, &block31, std::vector<compiler::Node*>{phi_bb11_13, phi_bb11_14, phi_bb11_15, phi_bb11_16, phi_bb11_17, phi_bb11_20, phi_bb11_20, phi_bb11_20}, &block32, std::vector<compiler::Node*>{phi_bb11_13, phi_bb11_14, phi_bb11_15, phi_bb11_16, phi_bb11_17, phi_bb11_20, phi_bb11_20, phi_bb11_20});
  }

  TNode<FixedArray> phi_bb31_13;
  TNode<IntPtrT> phi_bb31_14;
  TNode<IntPtrT> phi_bb31_15;
  TNode<BoolT> phi_bb31_16;
  TNode<PrimitiveHeapObject> phi_bb31_17;
  TNode<String> phi_bb31_20;
  TNode<String> phi_bb31_21;
  TNode<String> phi_bb31_26;
  TNode<BoolT> tmp37;
  if (block31.is_used()) {
    ca_.Bind(&block31, &phi_bb31_13, &phi_bb31_14, &phi_bb31_15, &phi_bb31_16, &phi_bb31_17, &phi_bb31_20, &phi_bb31_21, &phi_bb31_26);
    tmp37 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block33, phi_bb31_13, phi_bb31_14, phi_bb31_15, phi_bb31_16, phi_bb31_17, phi_bb31_20, phi_bb31_21, phi_bb31_26, tmp37);
  }

  TNode<FixedArray> phi_bb32_13;
  TNode<IntPtrT> phi_bb32_14;
  TNode<IntPtrT> phi_bb32_15;
  TNode<BoolT> phi_bb32_16;
  TNode<PrimitiveHeapObject> phi_bb32_17;
  TNode<String> phi_bb32_20;
  TNode<String> phi_bb32_21;
  TNode<String> phi_bb32_26;
  TNode<BoolT> tmp38;
  if (block32.is_used()) {
    ca_.Bind(&block32, &phi_bb32_13, &phi_bb32_14, &phi_bb32_15, &phi_bb32_16, &phi_bb32_17, &phi_bb32_20, &phi_bb32_21, &phi_bb32_26);
    tmp38 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp5}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{phi_bb32_13});
    ca_.Goto(&block33, phi_bb32_13, phi_bb32_14, phi_bb32_15, phi_bb32_16, phi_bb32_17, phi_bb32_20, phi_bb32_21, phi_bb32_26, tmp38);
  }

  TNode<FixedArray> phi_bb33_13;
  TNode<IntPtrT> phi_bb33_14;
  TNode<IntPtrT> phi_bb33_15;
  TNode<BoolT> phi_bb33_16;
  TNode<PrimitiveHeapObject> phi_bb33_17;
  TNode<String> phi_bb33_20;
  TNode<String> phi_bb33_21;
  TNode<String> phi_bb33_26;
  TNode<BoolT> phi_bb33_30;
  if (block33.is_used()) {
    ca_.Bind(&block33, &phi_bb33_13, &phi_bb33_14, &phi_bb33_15, &phi_bb33_16, &phi_bb33_17, &phi_bb33_20, &phi_bb33_21, &phi_bb33_26, &phi_bb33_30);
    ca_.Branch(phi_bb33_30, &block29, std::vector<compiler::Node*>{phi_bb33_13, phi_bb33_14, phi_bb33_15, phi_bb33_16, phi_bb33_17, phi_bb33_20, phi_bb33_21, phi_bb33_26}, &block30, std::vector<compiler::Node*>{phi_bb33_13, phi_bb33_14, phi_bb33_15, phi_bb33_16, phi_bb33_17, phi_bb33_20, phi_bb33_21, phi_bb33_26});
  }

  TNode<FixedArray> phi_bb30_13;
  TNode<IntPtrT> phi_bb30_14;
  TNode<IntPtrT> phi_bb30_15;
  TNode<BoolT> phi_bb30_16;
  TNode<PrimitiveHeapObject> phi_bb30_17;
  TNode<String> phi_bb30_20;
  TNode<String> phi_bb30_21;
  TNode<String> phi_bb30_26;
  if (block30.is_used()) {
    ca_.Bind(&block30, &phi_bb30_13, &phi_bb30_14, &phi_bb30_15, &phi_bb30_16, &phi_bb30_17, &phi_bb30_20, &phi_bb30_21, &phi_bb30_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 184});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index != 1 || this.head == this.chunk' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb29_13;
  TNode<IntPtrT> phi_bb29_14;
  TNode<IntPtrT> phi_bb29_15;
  TNode<BoolT> phi_bb29_16;
  TNode<PrimitiveHeapObject> phi_bb29_17;
  TNode<String> phi_bb29_20;
  TNode<String> phi_bb29_21;
  TNode<String> phi_bb29_26;
  TNode<IntPtrT> tmp39;
  TNode<BoolT> tmp40;
  TNode<IntPtrT> tmp41;
  TNode<BoolT> tmp42;
  TNode<BoolT> tmp43;
  TNode<IntPtrT> tmp44;
  TNode<BoolT> tmp45;
  if (block29.is_used()) {
    ca_.Bind(&block29, &phi_bb29_13, &phi_bb29_14, &phi_bb29_15, &phi_bb29_16, &phi_bb29_17, &phi_bb29_20, &phi_bb29_21, &phi_bb29_26);
    tmp39 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp40 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb29_14}, TNode<IntPtrT>{tmp39});
    tmp41 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp42 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{phi_bb8_10}, TNode<IntPtrT>{tmp41});
    tmp43 = CodeStubAssembler(state_).Word32Or(TNode<BoolT>{tmp40}, TNode<BoolT>{tmp42});
    tmp44 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp45 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb8_10}, TNode<IntPtrT>{tmp44});
    ca_.Branch(tmp45, &block37, std::vector<compiler::Node*>{phi_bb29_13, phi_bb29_14, phi_bb29_15, phi_bb29_16, phi_bb29_17, phi_bb29_20, phi_bb29_21, phi_bb29_26}, &block38, std::vector<compiler::Node*>{phi_bb29_13, phi_bb29_14, phi_bb29_15, phi_bb29_16, phi_bb29_17, phi_bb29_20, phi_bb29_21, phi_bb29_26});
  }

  TNode<FixedArray> phi_bb37_13;
  TNode<IntPtrT> phi_bb37_14;
  TNode<IntPtrT> phi_bb37_15;
  TNode<BoolT> phi_bb37_16;
  TNode<PrimitiveHeapObject> phi_bb37_17;
  TNode<String> phi_bb37_20;
  TNode<String> phi_bb37_21;
  TNode<String> phi_bb37_26;
  TNode<BoolT> tmp46;
  if (block37.is_used()) {
    ca_.Bind(&block37, &phi_bb37_13, &phi_bb37_14, &phi_bb37_15, &phi_bb37_16, &phi_bb37_17, &phi_bb37_20, &phi_bb37_21, &phi_bb37_26);
    tmp46 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block39, phi_bb37_13, phi_bb37_14, phi_bb37_15, phi_bb37_16, phi_bb37_17, phi_bb37_20, phi_bb37_21, phi_bb37_26, tmp46);
  }

  TNode<FixedArray> phi_bb38_13;
  TNode<IntPtrT> phi_bb38_14;
  TNode<IntPtrT> phi_bb38_15;
  TNode<BoolT> phi_bb38_16;
  TNode<PrimitiveHeapObject> phi_bb38_17;
  TNode<String> phi_bb38_20;
  TNode<String> phi_bb38_21;
  TNode<String> phi_bb38_26;
  TNode<IntPtrT> tmp47;
  TNode<BoolT> tmp48;
  if (block38.is_used()) {
    ca_.Bind(&block38, &phi_bb38_13, &phi_bb38_14, &phi_bb38_15, &phi_bb38_16, &phi_bb38_17, &phi_bb38_20, &phi_bb38_21, &phi_bb38_26);
    tmp47 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp48 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{tmp3}, TNode<IntPtrT>{tmp47});
    ca_.Goto(&block39, phi_bb38_13, phi_bb38_14, phi_bb38_15, phi_bb38_16, phi_bb38_17, phi_bb38_20, phi_bb38_21, phi_bb38_26, tmp48);
  }

  TNode<FixedArray> phi_bb39_13;
  TNode<IntPtrT> phi_bb39_14;
  TNode<IntPtrT> phi_bb39_15;
  TNode<BoolT> phi_bb39_16;
  TNode<PrimitiveHeapObject> phi_bb39_17;
  TNode<String> phi_bb39_20;
  TNode<String> phi_bb39_21;
  TNode<String> phi_bb39_26;
  TNode<BoolT> phi_bb39_39;
  if (block39.is_used()) {
    ca_.Bind(&block39, &phi_bb39_13, &phi_bb39_14, &phi_bb39_15, &phi_bb39_16, &phi_bb39_17, &phi_bb39_20, &phi_bb39_21, &phi_bb39_26, &phi_bb39_39);
    ca_.Branch(phi_bb39_39, &block35, std::vector<compiler::Node*>{phi_bb39_13, phi_bb39_14, phi_bb39_15, phi_bb39_16, phi_bb39_17, phi_bb39_20, phi_bb39_21, phi_bb39_26}, &block36, std::vector<compiler::Node*>{phi_bb39_13, phi_bb39_14, phi_bb39_15, phi_bb39_16, phi_bb39_17, phi_bb39_20, phi_bb39_21, phi_bb39_26});
  }

  TNode<FixedArray> phi_bb35_13;
  TNode<IntPtrT> phi_bb35_14;
  TNode<IntPtrT> phi_bb35_15;
  TNode<BoolT> phi_bb35_16;
  TNode<PrimitiveHeapObject> phi_bb35_17;
  TNode<String> phi_bb35_20;
  TNode<String> phi_bb35_21;
  TNode<String> phi_bb35_26;
  if (block35.is_used()) {
    ca_.Bind(&block35, &phi_bb35_13, &phi_bb35_14, &phi_bb35_15, &phi_bb35_16, &phi_bb35_17, &phi_bb35_20, &phi_bb35_21, &phi_bb35_26);
    ca_.Goto(&block34, phi_bb35_13, phi_bb35_14, phi_bb35_15, phi_bb35_16, phi_bb35_17, phi_bb35_20, phi_bb35_21, phi_bb35_26);
  }

  TNode<FixedArray> phi_bb36_13;
  TNode<IntPtrT> phi_bb36_14;
  TNode<IntPtrT> phi_bb36_15;
  TNode<BoolT> phi_bb36_16;
  TNode<PrimitiveHeapObject> phi_bb36_17;
  TNode<String> phi_bb36_20;
  TNode<String> phi_bb36_21;
  TNode<String> phi_bb36_26;
  TNode<IntPtrT> tmp49;
  TNode<IntPtrT> tmp50;
  if (block36.is_used()) {
    ca_.Bind(&block36, &phi_bb36_13, &phi_bb36_14, &phi_bb36_15, &phi_bb36_16, &phi_bb36_17, &phi_bb36_20, &phi_bb36_21, &phi_bb36_26);
    tmp49 = CodeStubAssembler(state_).IntPtrMul(TNode<IntPtrT>{tmp3}, TNode<IntPtrT>{phi_bb8_10});
    tmp50 = AddStringLength_0(state_, TNode<Context>{p_context}, TNode<IntPtrT>{phi_bb36_15}, TNode<IntPtrT>{tmp49});
    ca_.Branch(tmp43, &block40, std::vector<compiler::Node*>{phi_bb36_13, phi_bb36_14, phi_bb36_16, phi_bb36_17, phi_bb36_20, phi_bb36_21, phi_bb36_26}, &block41, std::vector<compiler::Node*>{phi_bb36_13, phi_bb36_14, phi_bb36_16, phi_bb36_17, phi_bb36_20, phi_bb36_21, phi_bb36_26});
  }

  TNode<FixedArray> phi_bb40_13;
  TNode<IntPtrT> phi_bb40_14;
  TNode<BoolT> phi_bb40_16;
  TNode<PrimitiveHeapObject> phi_bb40_17;
  TNode<String> phi_bb40_20;
  TNode<String> phi_bb40_21;
  TNode<String> phi_bb40_26;
  TNode<Smi> tmp51;
  TNode<IntPtrT> tmp52;
  TNode<IntPtrT> tmp53;
  TNode<BoolT> tmp54;
  if (block40.is_used()) {
    ca_.Bind(&block40, &phi_bb40_13, &phi_bb40_14, &phi_bb40_16, &phi_bb40_17, &phi_bb40_20, &phi_bb40_21, &phi_bb40_26);
    tmp51 = Convert_Smi_intptr_0(state_, TNode<IntPtrT>{phi_bb8_10});
    tmp52 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{phi_bb40_13});
    tmp53 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp54 = CodeStubAssembler(state_).IntPtrGreaterThanOrEqual(TNode<IntPtrT>{phi_bb40_14}, TNode<IntPtrT>{tmp53});
    ca_.Branch(tmp54, &block43, std::vector<compiler::Node*>{phi_bb40_13, phi_bb40_14, phi_bb40_16, phi_bb40_17, phi_bb40_20, phi_bb40_21, phi_bb40_26}, &block44, std::vector<compiler::Node*>{phi_bb40_13, phi_bb40_14, phi_bb40_16, phi_bb40_17, phi_bb40_20, phi_bb40_21, phi_bb40_26});
  }

  TNode<FixedArray> phi_bb44_13;
  TNode<IntPtrT> phi_bb44_14;
  TNode<BoolT> phi_bb44_16;
  TNode<PrimitiveHeapObject> phi_bb44_17;
  TNode<String> phi_bb44_20;
  TNode<String> phi_bb44_21;
  TNode<String> phi_bb44_26;
  if (block44.is_used()) {
    ca_.Bind(&block44, &phi_bb44_13, &phi_bb44_14, &phi_bb44_16, &phi_bb44_17, &phi_bb44_20, &phi_bb44_21, &phi_bb44_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 238});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index >= 1' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb43_13;
  TNode<IntPtrT> phi_bb43_14;
  TNode<BoolT> phi_bb43_16;
  TNode<PrimitiveHeapObject> phi_bb43_17;
  TNode<String> phi_bb43_20;
  TNode<String> phi_bb43_21;
  TNode<String> phi_bb43_26;
  TNode<BoolT> tmp55;
  if (block43.is_used()) {
    ca_.Bind(&block43, &phi_bb43_13, &phi_bb43_14, &phi_bb43_16, &phi_bb43_17, &phi_bb43_20, &phi_bb43_21, &phi_bb43_26);
    tmp55 = CodeStubAssembler(state_).IntPtrLessThanOrEqual(TNode<IntPtrT>{phi_bb43_14}, TNode<IntPtrT>{tmp52});
    ca_.Branch(tmp55, &block45, std::vector<compiler::Node*>{phi_bb43_13, phi_bb43_14, phi_bb43_16, phi_bb43_17, phi_bb43_20, phi_bb43_21, phi_bb43_26}, &block46, std::vector<compiler::Node*>{phi_bb43_13, phi_bb43_14, phi_bb43_16, phi_bb43_17, phi_bb43_20, phi_bb43_21, phi_bb43_26});
  }

  TNode<FixedArray> phi_bb46_13;
  TNode<IntPtrT> phi_bb46_14;
  TNode<BoolT> phi_bb46_16;
  TNode<PrimitiveHeapObject> phi_bb46_17;
  TNode<String> phi_bb46_20;
  TNode<String> phi_bb46_21;
  TNode<String> phi_bb46_26;
  if (block46.is_used()) {
    ca_.Bind(&block46, &phi_bb46_13, &phi_bb46_14, &phi_bb46_16, &phi_bb46_17, &phi_bb46_20, &phi_bb46_21, &phi_bb46_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 239});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index <= length' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb45_13;
  TNode<IntPtrT> phi_bb45_14;
  TNode<BoolT> phi_bb45_16;
  TNode<PrimitiveHeapObject> phi_bb45_17;
  TNode<String> phi_bb45_20;
  TNode<String> phi_bb45_21;
  TNode<String> phi_bb45_26;
  TNode<BoolT> tmp56;
  if (block45.is_used()) {
    ca_.Bind(&block45, &phi_bb45_13, &phi_bb45_14, &phi_bb45_16, &phi_bb45_17, &phi_bb45_20, &phi_bb45_21, &phi_bb45_26);
    tmp56 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb45_14}, TNode<IntPtrT>{tmp52});
    ca_.Branch(tmp56, &block47, std::vector<compiler::Node*>{phi_bb45_13, phi_bb45_14, phi_bb45_16, phi_bb45_17, phi_bb45_20, phi_bb45_21, phi_bb45_26}, &block48, std::vector<compiler::Node*>{phi_bb45_13, phi_bb45_14, phi_bb45_16, phi_bb45_17, phi_bb45_20, phi_bb45_21, phi_bb45_26});
  }

  TNode<FixedArray> phi_bb47_13;
  TNode<IntPtrT> phi_bb47_14;
  TNode<BoolT> phi_bb47_16;
  TNode<PrimitiveHeapObject> phi_bb47_17;
  TNode<String> phi_bb47_20;
  TNode<String> phi_bb47_21;
  TNode<String> phi_bb47_26;
  TNode<Union<HeapObject, TaggedIndex>> tmp57;
  TNode<IntPtrT> tmp58;
  TNode<IntPtrT> tmp59;
  TNode<IntPtrT> tmp60;
  TNode<IntPtrT> tmp61;
  TNode<UintPtrT> tmp62;
  TNode<UintPtrT> tmp63;
  TNode<BoolT> tmp64;
  if (block47.is_used()) {
    ca_.Bind(&block47, &phi_bb47_13, &phi_bb47_14, &phi_bb47_16, &phi_bb47_17, &phi_bb47_20, &phi_bb47_21, &phi_bb47_26);
    std::tie(tmp57, tmp58, tmp59) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb47_13}).Flatten();
    tmp60 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp61 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb47_14}, TNode<IntPtrT>{tmp60});
    tmp62 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb47_14});
    tmp63 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp59});
    tmp64 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp62}, TNode<UintPtrT>{tmp63});
    ca_.Branch(tmp64, &block54, std::vector<compiler::Node*>{phi_bb47_13, phi_bb47_16, phi_bb47_17, phi_bb47_20, phi_bb47_21, phi_bb47_26, phi_bb47_13, phi_bb47_14, phi_bb47_14, phi_bb47_14, phi_bb47_14}, &block55, std::vector<compiler::Node*>{phi_bb47_13, phi_bb47_16, phi_bb47_17, phi_bb47_20, phi_bb47_21, phi_bb47_26, phi_bb47_13, phi_bb47_14, phi_bb47_14, phi_bb47_14, phi_bb47_14});
  }

  TNode<FixedArray> phi_bb54_13;
  TNode<BoolT> phi_bb54_16;
  TNode<PrimitiveHeapObject> phi_bb54_17;
  TNode<String> phi_bb54_20;
  TNode<String> phi_bb54_21;
  TNode<String> phi_bb54_26;
  TNode<FixedArray> phi_bb54_43;
  TNode<IntPtrT> phi_bb54_47;
  TNode<IntPtrT> phi_bb54_48;
  TNode<IntPtrT> phi_bb54_52;
  TNode<IntPtrT> phi_bb54_53;
  TNode<IntPtrT> tmp65;
  TNode<IntPtrT> tmp66;
  TNode<Union<HeapObject, TaggedIndex>> tmp67;
  TNode<IntPtrT> tmp68;
  if (block54.is_used()) {
    ca_.Bind(&block54, &phi_bb54_13, &phi_bb54_16, &phi_bb54_17, &phi_bb54_20, &phi_bb54_21, &phi_bb54_26, &phi_bb54_43, &phi_bb54_47, &phi_bb54_48, &phi_bb54_52, &phi_bb54_53);
    tmp65 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb54_53});
    tmp66 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp58}, TNode<IntPtrT>{tmp65});
    std::tie(tmp67, tmp68) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp57}, TNode<IntPtrT>{tmp66}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp67, tmp68}, tmp51);
    ca_.Goto(&block49, phi_bb54_13, tmp61, phi_bb54_16, phi_bb54_17, phi_bb54_20, phi_bb54_21, phi_bb54_26);
  }

  TNode<FixedArray> phi_bb55_13;
  TNode<BoolT> phi_bb55_16;
  TNode<PrimitiveHeapObject> phi_bb55_17;
  TNode<String> phi_bb55_20;
  TNode<String> phi_bb55_21;
  TNode<String> phi_bb55_26;
  TNode<FixedArray> phi_bb55_43;
  TNode<IntPtrT> phi_bb55_47;
  TNode<IntPtrT> phi_bb55_48;
  TNode<IntPtrT> phi_bb55_52;
  TNode<IntPtrT> phi_bb55_53;
  if (block55.is_used()) {
    ca_.Bind(&block55, &phi_bb55_13, &phi_bb55_16, &phi_bb55_17, &phi_bb55_20, &phi_bb55_21, &phi_bb55_26, &phi_bb55_43, &phi_bb55_47, &phi_bb55_48, &phi_bb55_52, &phi_bb55_53);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb48_13;
  TNode<IntPtrT> phi_bb48_14;
  TNode<BoolT> phi_bb48_16;
  TNode<PrimitiveHeapObject> phi_bb48_17;
  TNode<String> phi_bb48_20;
  TNode<String> phi_bb48_21;
  TNode<String> phi_bb48_26;
  TNode<IntPtrT> tmp69;
  TNode<IntPtrT> tmp70;
  TNode<BoolT> tmp71;
  if (block48.is_used()) {
    ca_.Bind(&block48, &phi_bb48_13, &phi_bb48_14, &phi_bb48_16, &phi_bb48_17, &phi_bb48_20, &phi_bb48_21, &phi_bb48_26);
    tmp69 = CodeStubAssembler(state_).CalculateNewElementsCapacity(TNode<IntPtrT>{tmp52});
    tmp70 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    tmp71 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{tmp69}, TNode<IntPtrT>{tmp70});
    ca_.Branch(tmp71, &block58, std::vector<compiler::Node*>{phi_bb48_13, phi_bb48_14, phi_bb48_16, phi_bb48_17, phi_bb48_20, phi_bb48_21, phi_bb48_26}, &block59, std::vector<compiler::Node*>{phi_bb48_13, phi_bb48_14, phi_bb48_16, phi_bb48_17, phi_bb48_20, phi_bb48_21, phi_bb48_26});
  }

  TNode<FixedArray> phi_bb58_13;
  TNode<IntPtrT> phi_bb58_14;
  TNode<BoolT> phi_bb58_16;
  TNode<PrimitiveHeapObject> phi_bb58_17;
  TNode<String> phi_bb58_20;
  TNode<String> phi_bb58_21;
  TNode<String> phi_bb58_26;
  TNode<IntPtrT> tmp72;
  if (block58.is_used()) {
    ca_.Bind(&block58, &phi_bb58_13, &phi_bb58_14, &phi_bb58_16, &phi_bb58_17, &phi_bb58_20, &phi_bb58_21, &phi_bb58_26);
    tmp72 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    ca_.Goto(&block60, phi_bb58_13, phi_bb58_14, phi_bb58_16, phi_bb58_17, phi_bb58_20, phi_bb58_21, phi_bb58_26, tmp72);
  }

  TNode<FixedArray> phi_bb59_13;
  TNode<IntPtrT> phi_bb59_14;
  TNode<BoolT> phi_bb59_16;
  TNode<PrimitiveHeapObject> phi_bb59_17;
  TNode<String> phi_bb59_20;
  TNode<String> phi_bb59_21;
  TNode<String> phi_bb59_26;
  if (block59.is_used()) {
    ca_.Bind(&block59, &phi_bb59_13, &phi_bb59_14, &phi_bb59_16, &phi_bb59_17, &phi_bb59_20, &phi_bb59_21, &phi_bb59_26);
    ca_.Goto(&block60, phi_bb59_13, phi_bb59_14, phi_bb59_16, phi_bb59_17, phi_bb59_20, phi_bb59_21, phi_bb59_26, tmp69);
  }

  TNode<FixedArray> phi_bb60_13;
  TNode<IntPtrT> phi_bb60_14;
  TNode<BoolT> phi_bb60_16;
  TNode<PrimitiveHeapObject> phi_bb60_17;
  TNode<String> phi_bb60_20;
  TNode<String> phi_bb60_21;
  TNode<String> phi_bb60_26;
  TNode<IntPtrT> phi_bb60_44;
  TNode<IntPtrT> tmp73;
  TNode<BoolT> tmp74;
  if (block60.is_used()) {
    ca_.Bind(&block60, &phi_bb60_13, &phi_bb60_14, &phi_bb60_16, &phi_bb60_17, &phi_bb60_20, &phi_bb60_21, &phi_bb60_26, &phi_bb60_44);
    tmp73 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp74 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{phi_bb60_44}, TNode<IntPtrT>{tmp73});
    ca_.Branch(tmp74, &block62, std::vector<compiler::Node*>{phi_bb60_13, phi_bb60_14, phi_bb60_16, phi_bb60_17, phi_bb60_20, phi_bb60_21, phi_bb60_26}, &block63, std::vector<compiler::Node*>{phi_bb60_13, phi_bb60_14, phi_bb60_16, phi_bb60_17, phi_bb60_20, phi_bb60_21, phi_bb60_26});
  }

  TNode<FixedArray> phi_bb63_13;
  TNode<IntPtrT> phi_bb63_14;
  TNode<BoolT> phi_bb63_16;
  TNode<PrimitiveHeapObject> phi_bb63_17;
  TNode<String> phi_bb63_20;
  TNode<String> phi_bb63_21;
  TNode<String> phi_bb63_26;
  if (block63.is_used()) {
    ca_.Bind(&block63, &phi_bb63_13, &phi_bb63_14, &phi_bb63_16, &phi_bb63_17, &phi_bb63_20, &phi_bb63_21, &phi_bb63_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 248});
      CodeStubAssembler(state_).FailAssert("Torque assert 'cappedNewChunkLength > 0' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb62_13;
  TNode<IntPtrT> phi_bb62_14;
  TNode<BoolT> phi_bb62_16;
  TNode<PrimitiveHeapObject> phi_bb62_17;
  TNode<String> phi_bb62_20;
  TNode<String> phi_bb62_21;
  TNode<String> phi_bb62_26;
  TNode<FixedArray> tmp75;
  TNode<Union<HeapObject, TaggedIndex>> tmp76;
  TNode<IntPtrT> tmp77;
  TNode<IntPtrT> tmp78;
  TNode<UintPtrT> tmp79;
  TNode<IntPtrT> tmp80;
  TNode<UintPtrT> tmp81;
  TNode<UintPtrT> tmp82;
  TNode<BoolT> tmp83;
  if (block62.is_used()) {
    ca_.Bind(&block62, &phi_bb62_13, &phi_bb62_14, &phi_bb62_16, &phi_bb62_17, &phi_bb62_20, &phi_bb62_21, &phi_bb62_26);
    tmp75 = CodeStubAssembler(state_).AllocateZeroedFixedArray(TNode<IntPtrT>{phi_bb60_44});
    std::tie(tmp76, tmp77, tmp78) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb62_13}).Flatten();
    tmp79 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp80 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp79});
    tmp81 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp80});
    tmp82 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp78});
    tmp83 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp81}, TNode<UintPtrT>{tmp82});
    ca_.Branch(tmp83, &block69, std::vector<compiler::Node*>{phi_bb62_13, phi_bb62_14, phi_bb62_16, phi_bb62_17, phi_bb62_20, phi_bb62_21, phi_bb62_26, phi_bb62_13}, &block70, std::vector<compiler::Node*>{phi_bb62_13, phi_bb62_14, phi_bb62_16, phi_bb62_17, phi_bb62_20, phi_bb62_21, phi_bb62_26, phi_bb62_13});
  }

  TNode<FixedArray> phi_bb69_13;
  TNode<IntPtrT> phi_bb69_14;
  TNode<BoolT> phi_bb69_16;
  TNode<PrimitiveHeapObject> phi_bb69_17;
  TNode<String> phi_bb69_20;
  TNode<String> phi_bb69_21;
  TNode<String> phi_bb69_26;
  TNode<FixedArray> phi_bb69_46;
  TNode<IntPtrT> tmp84;
  TNode<IntPtrT> tmp85;
  TNode<Union<HeapObject, TaggedIndex>> tmp86;
  TNode<IntPtrT> tmp87;
  TNode<Union<HeapObject, TaggedIndex>> tmp88;
  TNode<IntPtrT> tmp89;
  TNode<IntPtrT> tmp90;
  TNode<UintPtrT> tmp91;
  TNode<IntPtrT> tmp92;
  TNode<UintPtrT> tmp93;
  TNode<UintPtrT> tmp94;
  TNode<BoolT> tmp95;
  if (block69.is_used()) {
    ca_.Bind(&block69, &phi_bb69_13, &phi_bb69_14, &phi_bb69_16, &phi_bb69_17, &phi_bb69_20, &phi_bb69_21, &phi_bb69_26, &phi_bb69_46);
    tmp84 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp80});
    tmp85 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp77}, TNode<IntPtrT>{tmp84});
    std::tie(tmp86, tmp87) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp76}, TNode<IntPtrT>{tmp85}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp86, tmp87}, tmp75);
    std::tie(tmp88, tmp89, tmp90) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp75}).Flatten();
    tmp91 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp92 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp91});
    tmp93 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp92});
    tmp94 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp90});
    tmp95 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp93}, TNode<UintPtrT>{tmp94});
    ca_.Branch(tmp95, &block78, std::vector<compiler::Node*>{phi_bb69_13, phi_bb69_14, phi_bb69_16, phi_bb69_17, phi_bb69_20, phi_bb69_21, phi_bb69_26}, &block79, std::vector<compiler::Node*>{phi_bb69_13, phi_bb69_14, phi_bb69_16, phi_bb69_17, phi_bb69_20, phi_bb69_21, phi_bb69_26});
  }

  TNode<FixedArray> phi_bb70_13;
  TNode<IntPtrT> phi_bb70_14;
  TNode<BoolT> phi_bb70_16;
  TNode<PrimitiveHeapObject> phi_bb70_17;
  TNode<String> phi_bb70_20;
  TNode<String> phi_bb70_21;
  TNode<String> phi_bb70_26;
  TNode<FixedArray> phi_bb70_46;
  if (block70.is_used()) {
    ca_.Bind(&block70, &phi_bb70_13, &phi_bb70_14, &phi_bb70_16, &phi_bb70_17, &phi_bb70_20, &phi_bb70_21, &phi_bb70_26, &phi_bb70_46);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb78_13;
  TNode<IntPtrT> phi_bb78_14;
  TNode<BoolT> phi_bb78_16;
  TNode<PrimitiveHeapObject> phi_bb78_17;
  TNode<String> phi_bb78_20;
  TNode<String> phi_bb78_21;
  TNode<String> phi_bb78_26;
  TNode<IntPtrT> tmp96;
  TNode<IntPtrT> tmp97;
  TNode<Union<HeapObject, TaggedIndex>> tmp98;
  TNode<IntPtrT> tmp99;
  TNode<Undefined> tmp100;
  TNode<Union<HeapObject, TaggedIndex>> tmp101;
  TNode<IntPtrT> tmp102;
  TNode<IntPtrT> tmp103;
  TNode<UintPtrT> tmp104;
  TNode<IntPtrT> tmp105;
  TNode<UintPtrT> tmp106;
  TNode<UintPtrT> tmp107;
  TNode<BoolT> tmp108;
  if (block78.is_used()) {
    ca_.Bind(&block78, &phi_bb78_13, &phi_bb78_14, &phi_bb78_16, &phi_bb78_17, &phi_bb78_20, &phi_bb78_21, &phi_bb78_26);
    tmp96 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp92});
    tmp97 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp89}, TNode<IntPtrT>{tmp96});
    std::tie(tmp98, tmp99) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp88}, TNode<IntPtrT>{tmp97}).Flatten();
    tmp100 = Undefined_0(state_);
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp98, tmp99}, tmp100);
    std::tie(tmp101, tmp102, tmp103) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp75}).Flatten();
    tmp104 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp105 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp104});
    tmp106 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp105});
    tmp107 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp103});
    tmp108 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp106}, TNode<UintPtrT>{tmp107});
    ca_.Branch(tmp108, &block87, std::vector<compiler::Node*>{phi_bb78_13, phi_bb78_14, phi_bb78_16, phi_bb78_17, phi_bb78_20, phi_bb78_21, phi_bb78_26}, &block88, std::vector<compiler::Node*>{phi_bb78_13, phi_bb78_14, phi_bb78_16, phi_bb78_17, phi_bb78_20, phi_bb78_21, phi_bb78_26});
  }

  TNode<FixedArray> phi_bb79_13;
  TNode<IntPtrT> phi_bb79_14;
  TNode<BoolT> phi_bb79_16;
  TNode<PrimitiveHeapObject> phi_bb79_17;
  TNode<String> phi_bb79_20;
  TNode<String> phi_bb79_21;
  TNode<String> phi_bb79_26;
  if (block79.is_used()) {
    ca_.Bind(&block79, &phi_bb79_13, &phi_bb79_14, &phi_bb79_16, &phi_bb79_17, &phi_bb79_20, &phi_bb79_21, &phi_bb79_26);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb87_13;
  TNode<IntPtrT> phi_bb87_14;
  TNode<BoolT> phi_bb87_16;
  TNode<PrimitiveHeapObject> phi_bb87_17;
  TNode<String> phi_bb87_20;
  TNode<String> phi_bb87_21;
  TNode<String> phi_bb87_26;
  TNode<IntPtrT> tmp109;
  TNode<IntPtrT> tmp110;
  TNode<Union<HeapObject, TaggedIndex>> tmp111;
  TNode<IntPtrT> tmp112;
  TNode<IntPtrT> tmp113;
  if (block87.is_used()) {
    ca_.Bind(&block87, &phi_bb87_13, &phi_bb87_14, &phi_bb87_16, &phi_bb87_17, &phi_bb87_20, &phi_bb87_21, &phi_bb87_26);
    tmp109 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp105});
    tmp110 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp102}, TNode<IntPtrT>{tmp109});
    std::tie(tmp111, tmp112) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp101}, TNode<IntPtrT>{tmp110}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp111, tmp112}, tmp51);
    tmp113 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    ca_.Goto(&block49, tmp75, tmp113, phi_bb87_16, phi_bb87_17, phi_bb87_20, phi_bb87_21, phi_bb87_26);
  }

  TNode<FixedArray> phi_bb88_13;
  TNode<IntPtrT> phi_bb88_14;
  TNode<BoolT> phi_bb88_16;
  TNode<PrimitiveHeapObject> phi_bb88_17;
  TNode<String> phi_bb88_20;
  TNode<String> phi_bb88_21;
  TNode<String> phi_bb88_26;
  if (block88.is_used()) {
    ca_.Bind(&block88, &phi_bb88_13, &phi_bb88_14, &phi_bb88_16, &phi_bb88_17, &phi_bb88_20, &phi_bb88_21, &phi_bb88_26);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb49_13;
  TNode<IntPtrT> phi_bb49_14;
  TNode<BoolT> phi_bb49_16;
  TNode<PrimitiveHeapObject> phi_bb49_17;
  TNode<String> phi_bb49_20;
  TNode<String> phi_bb49_21;
  TNode<String> phi_bb49_26;
  TNode<Null> tmp114;
  if (block49.is_used()) {
    ca_.Bind(&block49, &phi_bb49_13, &phi_bb49_14, &phi_bb49_16, &phi_bb49_17, &phi_bb49_20, &phi_bb49_21, &phi_bb49_26);
    tmp114 = Null_0(state_);
    ca_.Goto(&block41, phi_bb49_13, phi_bb49_14, phi_bb49_16, tmp114, phi_bb49_20, phi_bb49_21, phi_bb49_26);
  }

  TNode<FixedArray> phi_bb41_13;
  TNode<IntPtrT> phi_bb41_14;
  TNode<BoolT> phi_bb41_16;
  TNode<PrimitiveHeapObject> phi_bb41_17;
  TNode<String> phi_bb41_20;
  TNode<String> phi_bb41_21;
  TNode<String> phi_bb41_26;
  if (block41.is_used()) {
    ca_.Bind(&block41, &phi_bb41_13, &phi_bb41_14, &phi_bb41_16, &phi_bb41_17, &phi_bb41_20, &phi_bb41_21, &phi_bb41_26);
    ca_.Goto(&block34, phi_bb41_13, phi_bb41_14, tmp50, phi_bb41_16, phi_bb41_17, phi_bb41_20, phi_bb41_21, phi_bb41_26);
  }

  TNode<FixedArray> phi_bb34_13;
  TNode<IntPtrT> phi_bb34_14;
  TNode<IntPtrT> phi_bb34_15;
  TNode<BoolT> phi_bb34_16;
  TNode<PrimitiveHeapObject> phi_bb34_17;
  TNode<String> phi_bb34_20;
  TNode<String> phi_bb34_21;
  TNode<String> phi_bb34_26;
  TNode<IntPtrT> tmp115;
  TNode<IntPtrT> tmp116;
  TNode<BoolT> tmp117;
  if (block34.is_used()) {
    ca_.Bind(&block34, &phi_bb34_13, &phi_bb34_14, &phi_bb34_15, &phi_bb34_16, &phi_bb34_17, &phi_bb34_20, &phi_bb34_21, &phi_bb34_26);
    tmp115 = CodeStubAssembler(state_).LoadStringLengthAsWord(TNode<String>{phi_bb34_26});
    tmp116 = AddStringLength_0(state_, TNode<Context>{p_context}, TNode<IntPtrT>{phi_bb34_15}, TNode<IntPtrT>{tmp115});
    tmp117 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{phi_bb34_26}, TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{phi_bb34_17});
    ca_.Branch(tmp117, &block91, std::vector<compiler::Node*>{phi_bb34_13, phi_bb34_14, phi_bb34_16, phi_bb34_17, phi_bb34_20, phi_bb34_21, phi_bb34_26}, &block92, std::vector<compiler::Node*>{phi_bb34_13, phi_bb34_14, phi_bb34_16, phi_bb34_17, phi_bb34_20, phi_bb34_21, phi_bb34_26});
  }

  TNode<FixedArray> phi_bb91_13;
  TNode<IntPtrT> phi_bb91_14;
  TNode<BoolT> phi_bb91_16;
  TNode<PrimitiveHeapObject> phi_bb91_17;
  TNode<String> phi_bb91_20;
  TNode<String> phi_bb91_21;
  TNode<String> phi_bb91_26;
  TNode<IntPtrT> tmp118;
  TNode<BoolT> tmp119;
  if (block91.is_used()) {
    ca_.Bind(&block91, &phi_bb91_13, &phi_bb91_14, &phi_bb91_16, &phi_bb91_17, &phi_bb91_20, &phi_bb91_21, &phi_bb91_26);
    tmp118 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp119 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{phi_bb91_14}, TNode<IntPtrT>{tmp118});
    ca_.Branch(tmp119, &block95, std::vector<compiler::Node*>{phi_bb91_13, phi_bb91_14, phi_bb91_16, phi_bb91_17, phi_bb91_20, phi_bb91_21, phi_bb91_26}, &block96, std::vector<compiler::Node*>{phi_bb91_13, phi_bb91_14, phi_bb91_16, phi_bb91_17, phi_bb91_20, phi_bb91_21, phi_bb91_26});
  }

  TNode<FixedArray> phi_bb96_13;
  TNode<IntPtrT> phi_bb96_14;
  TNode<BoolT> phi_bb96_16;
  TNode<PrimitiveHeapObject> phi_bb96_17;
  TNode<String> phi_bb96_20;
  TNode<String> phi_bb96_21;
  TNode<String> phi_bb96_26;
  if (block96.is_used()) {
    ca_.Bind(&block96, &phi_bb96_13, &phi_bb96_14, &phi_bb96_16, &phi_bb96_17, &phi_bb96_20, &phi_bb96_21, &phi_bb96_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 218});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index > 1' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb95_13;
  TNode<IntPtrT> phi_bb95_14;
  TNode<BoolT> phi_bb95_16;
  TNode<PrimitiveHeapObject> phi_bb95_17;
  TNode<String> phi_bb95_20;
  TNode<String> phi_bb95_21;
  TNode<String> phi_bb95_26;
  TNode<Union<HeapObject, TaggedIndex>> tmp120;
  TNode<IntPtrT> tmp121;
  TNode<IntPtrT> tmp122;
  TNode<IntPtrT> tmp123;
  TNode<IntPtrT> tmp124;
  TNode<UintPtrT> tmp125;
  TNode<UintPtrT> tmp126;
  TNode<BoolT> tmp127;
  if (block95.is_used()) {
    ca_.Bind(&block95, &phi_bb95_13, &phi_bb95_14, &phi_bb95_16, &phi_bb95_17, &phi_bb95_20, &phi_bb95_21, &phi_bb95_26);
    std::tie(tmp120, tmp121, tmp122) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb95_13}).Flatten();
    tmp123 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp124 = CodeStubAssembler(state_).IntPtrSub(TNode<IntPtrT>{phi_bb95_14}, TNode<IntPtrT>{tmp123});
    tmp125 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp124});
    tmp126 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp122});
    tmp127 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp125}, TNode<UintPtrT>{tmp126});
    ca_.Branch(tmp127, &block101, std::vector<compiler::Node*>{phi_bb95_13, phi_bb95_14, phi_bb95_16, phi_bb95_17, phi_bb95_20, phi_bb95_21, phi_bb95_26, phi_bb95_13}, &block102, std::vector<compiler::Node*>{phi_bb95_13, phi_bb95_14, phi_bb95_16, phi_bb95_17, phi_bb95_20, phi_bb95_21, phi_bb95_26, phi_bb95_13});
  }

  TNode<FixedArray> phi_bb101_13;
  TNode<IntPtrT> phi_bb101_14;
  TNode<BoolT> phi_bb101_16;
  TNode<PrimitiveHeapObject> phi_bb101_17;
  TNode<String> phi_bb101_20;
  TNode<String> phi_bb101_21;
  TNode<String> phi_bb101_26;
  TNode<FixedArray> phi_bb101_30;
  TNode<IntPtrT> tmp128;
  TNode<IntPtrT> tmp129;
  TNode<Union<HeapObject, TaggedIndex>> tmp130;
  TNode<IntPtrT> tmp131;
  TNode<Object> tmp132;
  TNode<HeapObject> tmp133;
  if (block101.is_used()) {
    ca_.Bind(&block101, &phi_bb101_13, &phi_bb101_14, &phi_bb101_16, &phi_bb101_17, &phi_bb101_20, &phi_bb101_21, &phi_bb101_26, &phi_bb101_30);
    tmp128 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp124});
    tmp129 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp121}, TNode<IntPtrT>{tmp128});
    std::tie(tmp130, tmp131) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp120}, TNode<IntPtrT>{tmp129}).Flatten();
    tmp132 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp130, tmp131});
    compiler::CodeAssemblerLabel label134(&ca_);
    tmp133 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{tmp132}, &label134);
    ca_.Goto(&block108, phi_bb101_13, phi_bb101_14, phi_bb101_16, phi_bb101_17, phi_bb101_20, phi_bb101_21, phi_bb101_26);
    if (label134.is_used()) {
      ca_.Bind(&label134);
      ca_.Goto(&block109, phi_bb101_13, phi_bb101_14, phi_bb101_16, phi_bb101_17, phi_bb101_20, phi_bb101_21, phi_bb101_26);
    }
  }

  TNode<FixedArray> phi_bb102_13;
  TNode<IntPtrT> phi_bb102_14;
  TNode<BoolT> phi_bb102_16;
  TNode<PrimitiveHeapObject> phi_bb102_17;
  TNode<String> phi_bb102_20;
  TNode<String> phi_bb102_21;
  TNode<String> phi_bb102_26;
  TNode<FixedArray> phi_bb102_30;
  if (block102.is_used()) {
    ca_.Bind(&block102, &phi_bb102_13, &phi_bb102_14, &phi_bb102_16, &phi_bb102_17, &phi_bb102_20, &phi_bb102_21, &phi_bb102_26, &phi_bb102_30);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb109_13;
  TNode<IntPtrT> phi_bb109_14;
  TNode<BoolT> phi_bb109_16;
  TNode<PrimitiveHeapObject> phi_bb109_17;
  TNode<String> phi_bb109_20;
  TNode<String> phi_bb109_21;
  TNode<String> phi_bb109_26;
  if (block109.is_used()) {
    ca_.Bind(&block109, &phi_bb109_13, &phi_bb109_14, &phi_bb109_16, &phi_bb109_17, &phi_bb109_20, &phi_bb109_21, &phi_bb109_26);
    ca_.Goto(&block106, phi_bb109_13, phi_bb109_14, phi_bb109_16, phi_bb109_17, phi_bb109_20, phi_bb109_21, phi_bb109_26);
  }

  TNode<FixedArray> phi_bb108_13;
  TNode<IntPtrT> phi_bb108_14;
  TNode<BoolT> phi_bb108_16;
  TNode<PrimitiveHeapObject> phi_bb108_17;
  TNode<String> phi_bb108_20;
  TNode<String> phi_bb108_21;
  TNode<String> phi_bb108_26;
  TNode<String> tmp135;
  if (block108.is_used()) {
    ca_.Bind(&block108, &phi_bb108_13, &phi_bb108_14, &phi_bb108_16, &phi_bb108_17, &phi_bb108_20, &phi_bb108_21, &phi_bb108_26);
    compiler::CodeAssemblerLabel label136(&ca_);
    tmp135 = Cast_String_0(state_, TNode<HeapObject>{tmp133}, &label136);
    ca_.Goto(&block110, phi_bb108_13, phi_bb108_14, phi_bb108_16, phi_bb108_17, phi_bb108_20, phi_bb108_21, phi_bb108_26);
    if (label136.is_used()) {
      ca_.Bind(&label136);
      ca_.Goto(&block111, phi_bb108_13, phi_bb108_14, phi_bb108_16, phi_bb108_17, phi_bb108_20, phi_bb108_21, phi_bb108_26);
    }
  }

  TNode<FixedArray> phi_bb111_13;
  TNode<IntPtrT> phi_bb111_14;
  TNode<BoolT> phi_bb111_16;
  TNode<PrimitiveHeapObject> phi_bb111_17;
  TNode<String> phi_bb111_20;
  TNode<String> phi_bb111_21;
  TNode<String> phi_bb111_26;
  if (block111.is_used()) {
    ca_.Bind(&block111, &phi_bb111_13, &phi_bb111_14, &phi_bb111_16, &phi_bb111_17, &phi_bb111_20, &phi_bb111_21, &phi_bb111_26);
    ca_.Goto(&block106, phi_bb111_13, phi_bb111_14, phi_bb111_16, phi_bb111_17, phi_bb111_20, phi_bb111_21, phi_bb111_26);
  }

  TNode<FixedArray> phi_bb110_13;
  TNode<IntPtrT> phi_bb110_14;
  TNode<BoolT> phi_bb110_16;
  TNode<PrimitiveHeapObject> phi_bb110_17;
  TNode<String> phi_bb110_20;
  TNode<String> phi_bb110_21;
  TNode<String> phi_bb110_26;
  TNode<Smi> tmp137;
  TNode<IntPtrT> tmp138;
  TNode<IntPtrT> tmp139;
  TNode<BoolT> tmp140;
  if (block110.is_used()) {
    ca_.Bind(&block110, &phi_bb110_13, &phi_bb110_14, &phi_bb110_16, &phi_bb110_17, &phi_bb110_20, &phi_bb110_21, &phi_bb110_26);
    tmp137 = SmiConstant_0(state_, IntegerLiteral(true, 0x1ull));
    tmp138 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{phi_bb110_13});
    tmp139 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp140 = CodeStubAssembler(state_).IntPtrGreaterThanOrEqual(TNode<IntPtrT>{phi_bb110_14}, TNode<IntPtrT>{tmp139});
    ca_.Branch(tmp140, &block113, std::vector<compiler::Node*>{phi_bb110_13, phi_bb110_14, phi_bb110_16, phi_bb110_17, phi_bb110_20, phi_bb110_21, phi_bb110_26}, &block114, std::vector<compiler::Node*>{phi_bb110_13, phi_bb110_14, phi_bb110_16, phi_bb110_17, phi_bb110_20, phi_bb110_21, phi_bb110_26});
  }

  TNode<FixedArray> phi_bb114_13;
  TNode<IntPtrT> phi_bb114_14;
  TNode<BoolT> phi_bb114_16;
  TNode<PrimitiveHeapObject> phi_bb114_17;
  TNode<String> phi_bb114_20;
  TNode<String> phi_bb114_21;
  TNode<String> phi_bb114_26;
  if (block114.is_used()) {
    ca_.Bind(&block114, &phi_bb114_13, &phi_bb114_14, &phi_bb114_16, &phi_bb114_17, &phi_bb114_20, &phi_bb114_21, &phi_bb114_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 238});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index >= 1' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb113_13;
  TNode<IntPtrT> phi_bb113_14;
  TNode<BoolT> phi_bb113_16;
  TNode<PrimitiveHeapObject> phi_bb113_17;
  TNode<String> phi_bb113_20;
  TNode<String> phi_bb113_21;
  TNode<String> phi_bb113_26;
  TNode<BoolT> tmp141;
  if (block113.is_used()) {
    ca_.Bind(&block113, &phi_bb113_13, &phi_bb113_14, &phi_bb113_16, &phi_bb113_17, &phi_bb113_20, &phi_bb113_21, &phi_bb113_26);
    tmp141 = CodeStubAssembler(state_).IntPtrLessThanOrEqual(TNode<IntPtrT>{phi_bb113_14}, TNode<IntPtrT>{tmp138});
    ca_.Branch(tmp141, &block115, std::vector<compiler::Node*>{phi_bb113_13, phi_bb113_14, phi_bb113_16, phi_bb113_17, phi_bb113_20, phi_bb113_21, phi_bb113_26}, &block116, std::vector<compiler::Node*>{phi_bb113_13, phi_bb113_14, phi_bb113_16, phi_bb113_17, phi_bb113_20, phi_bb113_21, phi_bb113_26});
  }

  TNode<FixedArray> phi_bb116_13;
  TNode<IntPtrT> phi_bb116_14;
  TNode<BoolT> phi_bb116_16;
  TNode<PrimitiveHeapObject> phi_bb116_17;
  TNode<String> phi_bb116_20;
  TNode<String> phi_bb116_21;
  TNode<String> phi_bb116_26;
  if (block116.is_used()) {
    ca_.Bind(&block116, &phi_bb116_13, &phi_bb116_14, &phi_bb116_16, &phi_bb116_17, &phi_bb116_20, &phi_bb116_21, &phi_bb116_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 239});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index <= length' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb115_13;
  TNode<IntPtrT> phi_bb115_14;
  TNode<BoolT> phi_bb115_16;
  TNode<PrimitiveHeapObject> phi_bb115_17;
  TNode<String> phi_bb115_20;
  TNode<String> phi_bb115_21;
  TNode<String> phi_bb115_26;
  TNode<BoolT> tmp142;
  if (block115.is_used()) {
    ca_.Bind(&block115, &phi_bb115_13, &phi_bb115_14, &phi_bb115_16, &phi_bb115_17, &phi_bb115_20, &phi_bb115_21, &phi_bb115_26);
    tmp142 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb115_14}, TNode<IntPtrT>{tmp138});
    ca_.Branch(tmp142, &block117, std::vector<compiler::Node*>{phi_bb115_13, phi_bb115_14, phi_bb115_16, phi_bb115_17, phi_bb115_20, phi_bb115_21, phi_bb115_26}, &block118, std::vector<compiler::Node*>{phi_bb115_13, phi_bb115_14, phi_bb115_16, phi_bb115_17, phi_bb115_20, phi_bb115_21, phi_bb115_26});
  }

  TNode<FixedArray> phi_bb117_13;
  TNode<IntPtrT> phi_bb117_14;
  TNode<BoolT> phi_bb117_16;
  TNode<PrimitiveHeapObject> phi_bb117_17;
  TNode<String> phi_bb117_20;
  TNode<String> phi_bb117_21;
  TNode<String> phi_bb117_26;
  TNode<Union<HeapObject, TaggedIndex>> tmp143;
  TNode<IntPtrT> tmp144;
  TNode<IntPtrT> tmp145;
  TNode<IntPtrT> tmp146;
  TNode<IntPtrT> tmp147;
  TNode<UintPtrT> tmp148;
  TNode<UintPtrT> tmp149;
  TNode<BoolT> tmp150;
  if (block117.is_used()) {
    ca_.Bind(&block117, &phi_bb117_13, &phi_bb117_14, &phi_bb117_16, &phi_bb117_17, &phi_bb117_20, &phi_bb117_21, &phi_bb117_26);
    std::tie(tmp143, tmp144, tmp145) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb117_13}).Flatten();
    tmp146 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp147 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb117_14}, TNode<IntPtrT>{tmp146});
    tmp148 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb117_14});
    tmp149 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp145});
    tmp150 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp148}, TNode<UintPtrT>{tmp149});
    ca_.Branch(tmp150, &block124, std::vector<compiler::Node*>{phi_bb117_13, phi_bb117_16, phi_bb117_17, phi_bb117_20, phi_bb117_21, phi_bb117_26, phi_bb117_13, phi_bb117_14, phi_bb117_14, phi_bb117_14, phi_bb117_14}, &block125, std::vector<compiler::Node*>{phi_bb117_13, phi_bb117_16, phi_bb117_17, phi_bb117_20, phi_bb117_21, phi_bb117_26, phi_bb117_13, phi_bb117_14, phi_bb117_14, phi_bb117_14, phi_bb117_14});
  }

  TNode<FixedArray> phi_bb124_13;
  TNode<BoolT> phi_bb124_16;
  TNode<PrimitiveHeapObject> phi_bb124_17;
  TNode<String> phi_bb124_20;
  TNode<String> phi_bb124_21;
  TNode<String> phi_bb124_26;
  TNode<FixedArray> phi_bb124_35;
  TNode<IntPtrT> phi_bb124_39;
  TNode<IntPtrT> phi_bb124_40;
  TNode<IntPtrT> phi_bb124_44;
  TNode<IntPtrT> phi_bb124_45;
  TNode<IntPtrT> tmp151;
  TNode<IntPtrT> tmp152;
  TNode<Union<HeapObject, TaggedIndex>> tmp153;
  TNode<IntPtrT> tmp154;
  if (block124.is_used()) {
    ca_.Bind(&block124, &phi_bb124_13, &phi_bb124_16, &phi_bb124_17, &phi_bb124_20, &phi_bb124_21, &phi_bb124_26, &phi_bb124_35, &phi_bb124_39, &phi_bb124_40, &phi_bb124_44, &phi_bb124_45);
    tmp151 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb124_45});
    tmp152 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp144}, TNode<IntPtrT>{tmp151});
    std::tie(tmp153, tmp154) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp143}, TNode<IntPtrT>{tmp152}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp153, tmp154}, tmp137);
    ca_.Goto(&block119, phi_bb124_13, tmp147, phi_bb124_16, phi_bb124_17, phi_bb124_20, phi_bb124_21, phi_bb124_26);
  }

  TNode<FixedArray> phi_bb125_13;
  TNode<BoolT> phi_bb125_16;
  TNode<PrimitiveHeapObject> phi_bb125_17;
  TNode<String> phi_bb125_20;
  TNode<String> phi_bb125_21;
  TNode<String> phi_bb125_26;
  TNode<FixedArray> phi_bb125_35;
  TNode<IntPtrT> phi_bb125_39;
  TNode<IntPtrT> phi_bb125_40;
  TNode<IntPtrT> phi_bb125_44;
  TNode<IntPtrT> phi_bb125_45;
  if (block125.is_used()) {
    ca_.Bind(&block125, &phi_bb125_13, &phi_bb125_16, &phi_bb125_17, &phi_bb125_20, &phi_bb125_21, &phi_bb125_26, &phi_bb125_35, &phi_bb125_39, &phi_bb125_40, &phi_bb125_44, &phi_bb125_45);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb118_13;
  TNode<IntPtrT> phi_bb118_14;
  TNode<BoolT> phi_bb118_16;
  TNode<PrimitiveHeapObject> phi_bb118_17;
  TNode<String> phi_bb118_20;
  TNode<String> phi_bb118_21;
  TNode<String> phi_bb118_26;
  TNode<IntPtrT> tmp155;
  TNode<IntPtrT> tmp156;
  TNode<BoolT> tmp157;
  if (block118.is_used()) {
    ca_.Bind(&block118, &phi_bb118_13, &phi_bb118_14, &phi_bb118_16, &phi_bb118_17, &phi_bb118_20, &phi_bb118_21, &phi_bb118_26);
    tmp155 = CodeStubAssembler(state_).CalculateNewElementsCapacity(TNode<IntPtrT>{tmp138});
    tmp156 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    tmp157 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{tmp155}, TNode<IntPtrT>{tmp156});
    ca_.Branch(tmp157, &block128, std::vector<compiler::Node*>{phi_bb118_13, phi_bb118_14, phi_bb118_16, phi_bb118_17, phi_bb118_20, phi_bb118_21, phi_bb118_26}, &block129, std::vector<compiler::Node*>{phi_bb118_13, phi_bb118_14, phi_bb118_16, phi_bb118_17, phi_bb118_20, phi_bb118_21, phi_bb118_26});
  }

  TNode<FixedArray> phi_bb128_13;
  TNode<IntPtrT> phi_bb128_14;
  TNode<BoolT> phi_bb128_16;
  TNode<PrimitiveHeapObject> phi_bb128_17;
  TNode<String> phi_bb128_20;
  TNode<String> phi_bb128_21;
  TNode<String> phi_bb128_26;
  TNode<IntPtrT> tmp158;
  if (block128.is_used()) {
    ca_.Bind(&block128, &phi_bb128_13, &phi_bb128_14, &phi_bb128_16, &phi_bb128_17, &phi_bb128_20, &phi_bb128_21, &phi_bb128_26);
    tmp158 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    ca_.Goto(&block130, phi_bb128_13, phi_bb128_14, phi_bb128_16, phi_bb128_17, phi_bb128_20, phi_bb128_21, phi_bb128_26, tmp158);
  }

  TNode<FixedArray> phi_bb129_13;
  TNode<IntPtrT> phi_bb129_14;
  TNode<BoolT> phi_bb129_16;
  TNode<PrimitiveHeapObject> phi_bb129_17;
  TNode<String> phi_bb129_20;
  TNode<String> phi_bb129_21;
  TNode<String> phi_bb129_26;
  if (block129.is_used()) {
    ca_.Bind(&block129, &phi_bb129_13, &phi_bb129_14, &phi_bb129_16, &phi_bb129_17, &phi_bb129_20, &phi_bb129_21, &phi_bb129_26);
    ca_.Goto(&block130, phi_bb129_13, phi_bb129_14, phi_bb129_16, phi_bb129_17, phi_bb129_20, phi_bb129_21, phi_bb129_26, tmp155);
  }

  TNode<FixedArray> phi_bb130_13;
  TNode<IntPtrT> phi_bb130_14;
  TNode<BoolT> phi_bb130_16;
  TNode<PrimitiveHeapObject> phi_bb130_17;
  TNode<String> phi_bb130_20;
  TNode<String> phi_bb130_21;
  TNode<String> phi_bb130_26;
  TNode<IntPtrT> phi_bb130_36;
  TNode<IntPtrT> tmp159;
  TNode<BoolT> tmp160;
  if (block130.is_used()) {
    ca_.Bind(&block130, &phi_bb130_13, &phi_bb130_14, &phi_bb130_16, &phi_bb130_17, &phi_bb130_20, &phi_bb130_21, &phi_bb130_26, &phi_bb130_36);
    tmp159 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp160 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{phi_bb130_36}, TNode<IntPtrT>{tmp159});
    ca_.Branch(tmp160, &block132, std::vector<compiler::Node*>{phi_bb130_13, phi_bb130_14, phi_bb130_16, phi_bb130_17, phi_bb130_20, phi_bb130_21, phi_bb130_26}, &block133, std::vector<compiler::Node*>{phi_bb130_13, phi_bb130_14, phi_bb130_16, phi_bb130_17, phi_bb130_20, phi_bb130_21, phi_bb130_26});
  }

  TNode<FixedArray> phi_bb133_13;
  TNode<IntPtrT> phi_bb133_14;
  TNode<BoolT> phi_bb133_16;
  TNode<PrimitiveHeapObject> phi_bb133_17;
  TNode<String> phi_bb133_20;
  TNode<String> phi_bb133_21;
  TNode<String> phi_bb133_26;
  if (block133.is_used()) {
    ca_.Bind(&block133, &phi_bb133_13, &phi_bb133_14, &phi_bb133_16, &phi_bb133_17, &phi_bb133_20, &phi_bb133_21, &phi_bb133_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 248});
      CodeStubAssembler(state_).FailAssert("Torque assert 'cappedNewChunkLength > 0' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb132_13;
  TNode<IntPtrT> phi_bb132_14;
  TNode<BoolT> phi_bb132_16;
  TNode<PrimitiveHeapObject> phi_bb132_17;
  TNode<String> phi_bb132_20;
  TNode<String> phi_bb132_21;
  TNode<String> phi_bb132_26;
  TNode<FixedArray> tmp161;
  TNode<Union<HeapObject, TaggedIndex>> tmp162;
  TNode<IntPtrT> tmp163;
  TNode<IntPtrT> tmp164;
  TNode<UintPtrT> tmp165;
  TNode<IntPtrT> tmp166;
  TNode<UintPtrT> tmp167;
  TNode<UintPtrT> tmp168;
  TNode<BoolT> tmp169;
  if (block132.is_used()) {
    ca_.Bind(&block132, &phi_bb132_13, &phi_bb132_14, &phi_bb132_16, &phi_bb132_17, &phi_bb132_20, &phi_bb132_21, &phi_bb132_26);
    tmp161 = CodeStubAssembler(state_).AllocateZeroedFixedArray(TNode<IntPtrT>{phi_bb130_36});
    std::tie(tmp162, tmp163, tmp164) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb132_13}).Flatten();
    tmp165 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp166 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp165});
    tmp167 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp166});
    tmp168 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp164});
    tmp169 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp167}, TNode<UintPtrT>{tmp168});
    ca_.Branch(tmp169, &block139, std::vector<compiler::Node*>{phi_bb132_13, phi_bb132_14, phi_bb132_16, phi_bb132_17, phi_bb132_20, phi_bb132_21, phi_bb132_26, phi_bb132_13}, &block140, std::vector<compiler::Node*>{phi_bb132_13, phi_bb132_14, phi_bb132_16, phi_bb132_17, phi_bb132_20, phi_bb132_21, phi_bb132_26, phi_bb132_13});
  }

  TNode<FixedArray> phi_bb139_13;
  TNode<IntPtrT> phi_bb139_14;
  TNode<BoolT> phi_bb139_16;
  TNode<PrimitiveHeapObject> phi_bb139_17;
  TNode<String> phi_bb139_20;
  TNode<String> phi_bb139_21;
  TNode<String> phi_bb139_26;
  TNode<FixedArray> phi_bb139_38;
  TNode<IntPtrT> tmp170;
  TNode<IntPtrT> tmp171;
  TNode<Union<HeapObject, TaggedIndex>> tmp172;
  TNode<IntPtrT> tmp173;
  TNode<Union<HeapObject, TaggedIndex>> tmp174;
  TNode<IntPtrT> tmp175;
  TNode<IntPtrT> tmp176;
  TNode<UintPtrT> tmp177;
  TNode<IntPtrT> tmp178;
  TNode<UintPtrT> tmp179;
  TNode<UintPtrT> tmp180;
  TNode<BoolT> tmp181;
  if (block139.is_used()) {
    ca_.Bind(&block139, &phi_bb139_13, &phi_bb139_14, &phi_bb139_16, &phi_bb139_17, &phi_bb139_20, &phi_bb139_21, &phi_bb139_26, &phi_bb139_38);
    tmp170 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp166});
    tmp171 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp163}, TNode<IntPtrT>{tmp170});
    std::tie(tmp172, tmp173) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp162}, TNode<IntPtrT>{tmp171}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp172, tmp173}, tmp161);
    std::tie(tmp174, tmp175, tmp176) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp161}).Flatten();
    tmp177 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp178 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp177});
    tmp179 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp178});
    tmp180 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp176});
    tmp181 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp179}, TNode<UintPtrT>{tmp180});
    ca_.Branch(tmp181, &block148, std::vector<compiler::Node*>{phi_bb139_13, phi_bb139_14, phi_bb139_16, phi_bb139_17, phi_bb139_20, phi_bb139_21, phi_bb139_26}, &block149, std::vector<compiler::Node*>{phi_bb139_13, phi_bb139_14, phi_bb139_16, phi_bb139_17, phi_bb139_20, phi_bb139_21, phi_bb139_26});
  }

  TNode<FixedArray> phi_bb140_13;
  TNode<IntPtrT> phi_bb140_14;
  TNode<BoolT> phi_bb140_16;
  TNode<PrimitiveHeapObject> phi_bb140_17;
  TNode<String> phi_bb140_20;
  TNode<String> phi_bb140_21;
  TNode<String> phi_bb140_26;
  TNode<FixedArray> phi_bb140_38;
  if (block140.is_used()) {
    ca_.Bind(&block140, &phi_bb140_13, &phi_bb140_14, &phi_bb140_16, &phi_bb140_17, &phi_bb140_20, &phi_bb140_21, &phi_bb140_26, &phi_bb140_38);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb148_13;
  TNode<IntPtrT> phi_bb148_14;
  TNode<BoolT> phi_bb148_16;
  TNode<PrimitiveHeapObject> phi_bb148_17;
  TNode<String> phi_bb148_20;
  TNode<String> phi_bb148_21;
  TNode<String> phi_bb148_26;
  TNode<IntPtrT> tmp182;
  TNode<IntPtrT> tmp183;
  TNode<Union<HeapObject, TaggedIndex>> tmp184;
  TNode<IntPtrT> tmp185;
  TNode<Undefined> tmp186;
  TNode<Union<HeapObject, TaggedIndex>> tmp187;
  TNode<IntPtrT> tmp188;
  TNode<IntPtrT> tmp189;
  TNode<UintPtrT> tmp190;
  TNode<IntPtrT> tmp191;
  TNode<UintPtrT> tmp192;
  TNode<UintPtrT> tmp193;
  TNode<BoolT> tmp194;
  if (block148.is_used()) {
    ca_.Bind(&block148, &phi_bb148_13, &phi_bb148_14, &phi_bb148_16, &phi_bb148_17, &phi_bb148_20, &phi_bb148_21, &phi_bb148_26);
    tmp182 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp178});
    tmp183 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp175}, TNode<IntPtrT>{tmp182});
    std::tie(tmp184, tmp185) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp174}, TNode<IntPtrT>{tmp183}).Flatten();
    tmp186 = Undefined_0(state_);
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp184, tmp185}, tmp186);
    std::tie(tmp187, tmp188, tmp189) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp161}).Flatten();
    tmp190 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp191 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp190});
    tmp192 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp191});
    tmp193 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp189});
    tmp194 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp192}, TNode<UintPtrT>{tmp193});
    ca_.Branch(tmp194, &block157, std::vector<compiler::Node*>{phi_bb148_13, phi_bb148_14, phi_bb148_16, phi_bb148_17, phi_bb148_20, phi_bb148_21, phi_bb148_26}, &block158, std::vector<compiler::Node*>{phi_bb148_13, phi_bb148_14, phi_bb148_16, phi_bb148_17, phi_bb148_20, phi_bb148_21, phi_bb148_26});
  }

  TNode<FixedArray> phi_bb149_13;
  TNode<IntPtrT> phi_bb149_14;
  TNode<BoolT> phi_bb149_16;
  TNode<PrimitiveHeapObject> phi_bb149_17;
  TNode<String> phi_bb149_20;
  TNode<String> phi_bb149_21;
  TNode<String> phi_bb149_26;
  if (block149.is_used()) {
    ca_.Bind(&block149, &phi_bb149_13, &phi_bb149_14, &phi_bb149_16, &phi_bb149_17, &phi_bb149_20, &phi_bb149_21, &phi_bb149_26);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb157_13;
  TNode<IntPtrT> phi_bb157_14;
  TNode<BoolT> phi_bb157_16;
  TNode<PrimitiveHeapObject> phi_bb157_17;
  TNode<String> phi_bb157_20;
  TNode<String> phi_bb157_21;
  TNode<String> phi_bb157_26;
  TNode<IntPtrT> tmp195;
  TNode<IntPtrT> tmp196;
  TNode<Union<HeapObject, TaggedIndex>> tmp197;
  TNode<IntPtrT> tmp198;
  TNode<IntPtrT> tmp199;
  if (block157.is_used()) {
    ca_.Bind(&block157, &phi_bb157_13, &phi_bb157_14, &phi_bb157_16, &phi_bb157_17, &phi_bb157_20, &phi_bb157_21, &phi_bb157_26);
    tmp195 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp191});
    tmp196 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp188}, TNode<IntPtrT>{tmp195});
    std::tie(tmp197, tmp198) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp187}, TNode<IntPtrT>{tmp196}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp197, tmp198}, tmp137);
    tmp199 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    ca_.Goto(&block119, tmp161, tmp199, phi_bb157_16, phi_bb157_17, phi_bb157_20, phi_bb157_21, phi_bb157_26);
  }

  TNode<FixedArray> phi_bb158_13;
  TNode<IntPtrT> phi_bb158_14;
  TNode<BoolT> phi_bb158_16;
  TNode<PrimitiveHeapObject> phi_bb158_17;
  TNode<String> phi_bb158_20;
  TNode<String> phi_bb158_21;
  TNode<String> phi_bb158_26;
  if (block158.is_used()) {
    ca_.Bind(&block158, &phi_bb158_13, &phi_bb158_14, &phi_bb158_16, &phi_bb158_17, &phi_bb158_20, &phi_bb158_21, &phi_bb158_26);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb119_13;
  TNode<IntPtrT> phi_bb119_14;
  TNode<BoolT> phi_bb119_16;
  TNode<PrimitiveHeapObject> phi_bb119_17;
  TNode<String> phi_bb119_20;
  TNode<String> phi_bb119_21;
  TNode<String> phi_bb119_26;
  if (block119.is_used()) {
    ca_.Bind(&block119, &phi_bb119_13, &phi_bb119_14, &phi_bb119_16, &phi_bb119_17, &phi_bb119_20, &phi_bb119_21, &phi_bb119_26);
    ca_.Goto(&block105, phi_bb119_13, phi_bb119_14, phi_bb119_16, phi_bb119_17, phi_bb119_20, phi_bb119_21, phi_bb119_26);
  }

  TNode<FixedArray> phi_bb106_13;
  TNode<IntPtrT> phi_bb106_14;
  TNode<BoolT> phi_bb106_16;
  TNode<PrimitiveHeapObject> phi_bb106_17;
  TNode<String> phi_bb106_20;
  TNode<String> phi_bb106_21;
  TNode<String> phi_bb106_26;
  TNode<Smi> tmp200;
  if (block106.is_used()) {
    ca_.Bind(&block106, &phi_bb106_13, &phi_bb106_14, &phi_bb106_16, &phi_bb106_17, &phi_bb106_20, &phi_bb106_21, &phi_bb106_26);
    compiler::CodeAssemblerLabel label201(&ca_);
    tmp200 = Cast_Smi_0(state_, TNode<Object>{ca_.UncheckedCast<Object>(tmp132)}, &label201);
    ca_.Goto(&block163, phi_bb106_13, phi_bb106_14, phi_bb106_16, phi_bb106_17, phi_bb106_20, phi_bb106_21, phi_bb106_26);
    if (label201.is_used()) {
      ca_.Bind(&label201);
      ca_.Goto(&block164, phi_bb106_13, phi_bb106_14, phi_bb106_16, phi_bb106_17, phi_bb106_20, phi_bb106_21, phi_bb106_26);
    }
  }

  TNode<FixedArray> phi_bb164_13;
  TNode<IntPtrT> phi_bb164_14;
  TNode<BoolT> phi_bb164_16;
  TNode<PrimitiveHeapObject> phi_bb164_17;
  TNode<String> phi_bb164_20;
  TNode<String> phi_bb164_21;
  TNode<String> phi_bb164_26;
  if (block164.is_used()) {
    ca_.Bind(&block164, &phi_bb164_13, &phi_bb164_14, &phi_bb164_16, &phi_bb164_17, &phi_bb164_20, &phi_bb164_21, &phi_bb164_26);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/array-join.tq:229:9");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb163_13;
  TNode<IntPtrT> phi_bb163_14;
  TNode<BoolT> phi_bb163_16;
  TNode<PrimitiveHeapObject> phi_bb163_17;
  TNode<String> phi_bb163_20;
  TNode<String> phi_bb163_21;
  TNode<String> phi_bb163_26;
  TNode<Smi> tmp202;
  TNode<BoolT> tmp203;
  if (block163.is_used()) {
    ca_.Bind(&block163, &phi_bb163_13, &phi_bb163_14, &phi_bb163_16, &phi_bb163_17, &phi_bb163_20, &phi_bb163_21, &phi_bb163_26);
    tmp202 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp203 = CodeStubAssembler(state_).SmiLessThan(TNode<Smi>{tmp200}, TNode<Smi>{tmp202});
    ca_.Branch(tmp203, &block165, std::vector<compiler::Node*>{phi_bb163_13, phi_bb163_14, phi_bb163_16, phi_bb163_17, phi_bb163_20, phi_bb163_21, phi_bb163_26}, &block166, std::vector<compiler::Node*>{phi_bb163_13, phi_bb163_14, phi_bb163_16, phi_bb163_17, phi_bb163_20, phi_bb163_21, phi_bb163_26});
  }

  TNode<FixedArray> phi_bb166_13;
  TNode<IntPtrT> phi_bb166_14;
  TNode<BoolT> phi_bb166_16;
  TNode<PrimitiveHeapObject> phi_bb166_17;
  TNode<String> phi_bb166_20;
  TNode<String> phi_bb166_21;
  TNode<String> phi_bb166_26;
  if (block166.is_used()) {
    ca_.Bind(&block166, &phi_bb166_13, &phi_bb166_14, &phi_bb166_16, &phi_bb166_17, &phi_bb166_20, &phi_bb166_21, &phi_bb166_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 224});
      CodeStubAssembler(state_).FailAssert("Torque assert 'count < 0' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb165_13;
  TNode<IntPtrT> phi_bb165_14;
  TNode<BoolT> phi_bb165_16;
  TNode<PrimitiveHeapObject> phi_bb165_17;
  TNode<String> phi_bb165_20;
  TNode<String> phi_bb165_21;
  TNode<String> phi_bb165_26;
  TNode<Smi> tmp204;
  TNode<Smi> tmp205;
  TNode<Smi> tmp206;
  TNode<BoolT> tmp207;
  if (block165.is_used()) {
    ca_.Bind(&block165, &phi_bb165_13, &phi_bb165_14, &phi_bb165_16, &phi_bb165_17, &phi_bb165_20, &phi_bb165_21, &phi_bb165_26);
    tmp204 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp205 = CodeStubAssembler(state_).SmiSub(TNode<Smi>{tmp200}, TNode<Smi>{tmp204});
    tmp206 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp207 = CodeStubAssembler(state_).SmiLessThan(TNode<Smi>{tmp205}, TNode<Smi>{tmp206});
    ca_.Branch(tmp207, &block167, std::vector<compiler::Node*>{phi_bb165_13, phi_bb165_14, phi_bb165_16, phi_bb165_17, phi_bb165_20, phi_bb165_21, phi_bb165_26}, &block168, std::vector<compiler::Node*>{phi_bb165_13, phi_bb165_14, phi_bb165_16, phi_bb165_17, phi_bb165_20, phi_bb165_21, phi_bb165_26});
  }

  TNode<FixedArray> phi_bb168_13;
  TNode<IntPtrT> phi_bb168_14;
  TNode<BoolT> phi_bb168_16;
  TNode<PrimitiveHeapObject> phi_bb168_17;
  TNode<String> phi_bb168_20;
  TNode<String> phi_bb168_21;
  TNode<String> phi_bb168_26;
  if (block168.is_used()) {
    ca_.Bind(&block168, &phi_bb168_13, &phi_bb168_14, &phi_bb168_16, &phi_bb168_17, &phi_bb168_20, &phi_bb168_21, &phi_bb168_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 225});
      CodeStubAssembler(state_).FailAssert("Torque assert 'count - 1 < 0' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb167_13;
  TNode<IntPtrT> phi_bb167_14;
  TNode<BoolT> phi_bb167_16;
  TNode<PrimitiveHeapObject> phi_bb167_17;
  TNode<String> phi_bb167_20;
  TNode<String> phi_bb167_21;
  TNode<String> phi_bb167_26;
  TNode<Union<HeapObject, TaggedIndex>> tmp208;
  TNode<IntPtrT> tmp209;
  TNode<IntPtrT> tmp210;
  TNode<IntPtrT> tmp211;
  TNode<IntPtrT> tmp212;
  TNode<UintPtrT> tmp213;
  TNode<UintPtrT> tmp214;
  TNode<BoolT> tmp215;
  if (block167.is_used()) {
    ca_.Bind(&block167, &phi_bb167_13, &phi_bb167_14, &phi_bb167_16, &phi_bb167_17, &phi_bb167_20, &phi_bb167_21, &phi_bb167_26);
    std::tie(tmp208, tmp209, tmp210) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb167_13}).Flatten();
    tmp211 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp212 = CodeStubAssembler(state_).IntPtrSub(TNode<IntPtrT>{phi_bb167_14}, TNode<IntPtrT>{tmp211});
    tmp213 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp212});
    tmp214 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp210});
    tmp215 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp213}, TNode<UintPtrT>{tmp214});
    ca_.Branch(tmp215, &block173, std::vector<compiler::Node*>{phi_bb167_13, phi_bb167_14, phi_bb167_16, phi_bb167_17, phi_bb167_20, phi_bb167_21, phi_bb167_26, phi_bb167_13}, &block174, std::vector<compiler::Node*>{phi_bb167_13, phi_bb167_14, phi_bb167_16, phi_bb167_17, phi_bb167_20, phi_bb167_21, phi_bb167_26, phi_bb167_13});
  }

  TNode<FixedArray> phi_bb173_13;
  TNode<IntPtrT> phi_bb173_14;
  TNode<BoolT> phi_bb173_16;
  TNode<PrimitiveHeapObject> phi_bb173_17;
  TNode<String> phi_bb173_20;
  TNode<String> phi_bb173_21;
  TNode<String> phi_bb173_26;
  TNode<FixedArray> phi_bb173_32;
  TNode<IntPtrT> tmp216;
  TNode<IntPtrT> tmp217;
  TNode<Union<HeapObject, TaggedIndex>> tmp218;
  TNode<IntPtrT> tmp219;
  TNode<Smi> tmp220;
  TNode<Smi> tmp221;
  if (block173.is_used()) {
    ca_.Bind(&block173, &phi_bb173_13, &phi_bb173_14, &phi_bb173_16, &phi_bb173_17, &phi_bb173_20, &phi_bb173_21, &phi_bb173_26, &phi_bb173_32);
    tmp216 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp212});
    tmp217 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp209}, TNode<IntPtrT>{tmp216});
    std::tie(tmp218, tmp219) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp208}, TNode<IntPtrT>{tmp217}).Flatten();
    tmp220 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp221 = CodeStubAssembler(state_).SmiSub(TNode<Smi>{tmp200}, TNode<Smi>{tmp220});
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp218, tmp219}, tmp221);
    ca_.Goto(&block105, phi_bb173_13, phi_bb173_14, phi_bb173_16, phi_bb173_17, phi_bb173_20, phi_bb173_21, phi_bb173_26);
  }

  TNode<FixedArray> phi_bb174_13;
  TNode<IntPtrT> phi_bb174_14;
  TNode<BoolT> phi_bb174_16;
  TNode<PrimitiveHeapObject> phi_bb174_17;
  TNode<String> phi_bb174_20;
  TNode<String> phi_bb174_21;
  TNode<String> phi_bb174_26;
  TNode<FixedArray> phi_bb174_32;
  if (block174.is_used()) {
    ca_.Bind(&block174, &phi_bb174_13, &phi_bb174_14, &phi_bb174_16, &phi_bb174_17, &phi_bb174_20, &phi_bb174_21, &phi_bb174_26, &phi_bb174_32);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb105_13;
  TNode<IntPtrT> phi_bb105_14;
  TNode<BoolT> phi_bb105_16;
  TNode<PrimitiveHeapObject> phi_bb105_17;
  TNode<String> phi_bb105_20;
  TNode<String> phi_bb105_21;
  TNode<String> phi_bb105_26;
  if (block105.is_used()) {
    ca_.Bind(&block105, &phi_bb105_13, &phi_bb105_14, &phi_bb105_16, &phi_bb105_17, &phi_bb105_20, &phi_bb105_21, &phi_bb105_26);
    ca_.Goto(&block93, phi_bb105_13, phi_bb105_14, phi_bb105_16, phi_bb105_17, phi_bb105_20, phi_bb105_21, phi_bb105_26);
  }

  TNode<FixedArray> phi_bb92_13;
  TNode<IntPtrT> phi_bb92_14;
  TNode<BoolT> phi_bb92_16;
  TNode<PrimitiveHeapObject> phi_bb92_17;
  TNode<String> phi_bb92_20;
  TNode<String> phi_bb92_21;
  TNode<String> phi_bb92_26;
  TNode<IntPtrT> tmp222;
  TNode<IntPtrT> tmp223;
  TNode<BoolT> tmp224;
  if (block92.is_used()) {
    ca_.Bind(&block92, &phi_bb92_13, &phi_bb92_14, &phi_bb92_16, &phi_bb92_17, &phi_bb92_20, &phi_bb92_21, &phi_bb92_26);
    tmp222 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{phi_bb92_13});
    tmp223 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp224 = CodeStubAssembler(state_).IntPtrGreaterThanOrEqual(TNode<IntPtrT>{phi_bb92_14}, TNode<IntPtrT>{tmp223});
    ca_.Branch(tmp224, &block178, std::vector<compiler::Node*>{phi_bb92_13, phi_bb92_14, phi_bb92_16, phi_bb92_17, phi_bb92_20, phi_bb92_21, phi_bb92_26, phi_bb92_26, phi_bb92_26}, &block179, std::vector<compiler::Node*>{phi_bb92_13, phi_bb92_14, phi_bb92_16, phi_bb92_17, phi_bb92_20, phi_bb92_21, phi_bb92_26, phi_bb92_26, phi_bb92_26});
  }

  TNode<FixedArray> phi_bb179_13;
  TNode<IntPtrT> phi_bb179_14;
  TNode<BoolT> phi_bb179_16;
  TNode<PrimitiveHeapObject> phi_bb179_17;
  TNode<String> phi_bb179_20;
  TNode<String> phi_bb179_21;
  TNode<String> phi_bb179_26;
  TNode<String> phi_bb179_30;
  TNode<Object> phi_bb179_31;
  if (block179.is_used()) {
    ca_.Bind(&block179, &phi_bb179_13, &phi_bb179_14, &phi_bb179_16, &phi_bb179_17, &phi_bb179_20, &phi_bb179_21, &phi_bb179_26, &phi_bb179_30, &phi_bb179_31);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 238});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index >= 1' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb178_13;
  TNode<IntPtrT> phi_bb178_14;
  TNode<BoolT> phi_bb178_16;
  TNode<PrimitiveHeapObject> phi_bb178_17;
  TNode<String> phi_bb178_20;
  TNode<String> phi_bb178_21;
  TNode<String> phi_bb178_26;
  TNode<String> phi_bb178_30;
  TNode<Object> phi_bb178_31;
  TNode<BoolT> tmp225;
  if (block178.is_used()) {
    ca_.Bind(&block178, &phi_bb178_13, &phi_bb178_14, &phi_bb178_16, &phi_bb178_17, &phi_bb178_20, &phi_bb178_21, &phi_bb178_26, &phi_bb178_30, &phi_bb178_31);
    tmp225 = CodeStubAssembler(state_).IntPtrLessThanOrEqual(TNode<IntPtrT>{phi_bb178_14}, TNode<IntPtrT>{tmp222});
    ca_.Branch(tmp225, &block180, std::vector<compiler::Node*>{phi_bb178_13, phi_bb178_14, phi_bb178_16, phi_bb178_17, phi_bb178_20, phi_bb178_21, phi_bb178_26, phi_bb178_30, phi_bb178_31}, &block181, std::vector<compiler::Node*>{phi_bb178_13, phi_bb178_14, phi_bb178_16, phi_bb178_17, phi_bb178_20, phi_bb178_21, phi_bb178_26, phi_bb178_30, phi_bb178_31});
  }

  TNode<FixedArray> phi_bb181_13;
  TNode<IntPtrT> phi_bb181_14;
  TNode<BoolT> phi_bb181_16;
  TNode<PrimitiveHeapObject> phi_bb181_17;
  TNode<String> phi_bb181_20;
  TNode<String> phi_bb181_21;
  TNode<String> phi_bb181_26;
  TNode<String> phi_bb181_30;
  TNode<Object> phi_bb181_31;
  if (block181.is_used()) {
    ca_.Bind(&block181, &phi_bb181_13, &phi_bb181_14, &phi_bb181_16, &phi_bb181_17, &phi_bb181_20, &phi_bb181_21, &phi_bb181_26, &phi_bb181_30, &phi_bb181_31);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 239});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index <= length' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb180_13;
  TNode<IntPtrT> phi_bb180_14;
  TNode<BoolT> phi_bb180_16;
  TNode<PrimitiveHeapObject> phi_bb180_17;
  TNode<String> phi_bb180_20;
  TNode<String> phi_bb180_21;
  TNode<String> phi_bb180_26;
  TNode<String> phi_bb180_30;
  TNode<Object> phi_bb180_31;
  TNode<BoolT> tmp226;
  if (block180.is_used()) {
    ca_.Bind(&block180, &phi_bb180_13, &phi_bb180_14, &phi_bb180_16, &phi_bb180_17, &phi_bb180_20, &phi_bb180_21, &phi_bb180_26, &phi_bb180_30, &phi_bb180_31);
    tmp226 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb180_14}, TNode<IntPtrT>{tmp222});
    ca_.Branch(tmp226, &block182, std::vector<compiler::Node*>{phi_bb180_13, phi_bb180_14, phi_bb180_16, phi_bb180_17, phi_bb180_20, phi_bb180_21, phi_bb180_26, phi_bb180_30, phi_bb180_31}, &block183, std::vector<compiler::Node*>{phi_bb180_13, phi_bb180_14, phi_bb180_16, phi_bb180_17, phi_bb180_20, phi_bb180_21, phi_bb180_26, phi_bb180_30, phi_bb180_31});
  }

  TNode<FixedArray> phi_bb182_13;
  TNode<IntPtrT> phi_bb182_14;
  TNode<BoolT> phi_bb182_16;
  TNode<PrimitiveHeapObject> phi_bb182_17;
  TNode<String> phi_bb182_20;
  TNode<String> phi_bb182_21;
  TNode<String> phi_bb182_26;
  TNode<String> phi_bb182_30;
  TNode<Object> phi_bb182_31;
  TNode<Union<HeapObject, TaggedIndex>> tmp227;
  TNode<IntPtrT> tmp228;
  TNode<IntPtrT> tmp229;
  TNode<IntPtrT> tmp230;
  TNode<IntPtrT> tmp231;
  TNode<UintPtrT> tmp232;
  TNode<UintPtrT> tmp233;
  TNode<BoolT> tmp234;
  if (block182.is_used()) {
    ca_.Bind(&block182, &phi_bb182_13, &phi_bb182_14, &phi_bb182_16, &phi_bb182_17, &phi_bb182_20, &phi_bb182_21, &phi_bb182_26, &phi_bb182_30, &phi_bb182_31);
    std::tie(tmp227, tmp228, tmp229) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb182_13}).Flatten();
    tmp230 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp231 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb182_14}, TNode<IntPtrT>{tmp230});
    tmp232 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb182_14});
    tmp233 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp229});
    tmp234 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp232}, TNode<UintPtrT>{tmp233});
    ca_.Branch(tmp234, &block189, std::vector<compiler::Node*>{phi_bb182_13, phi_bb182_16, phi_bb182_17, phi_bb182_20, phi_bb182_21, phi_bb182_26, phi_bb182_30, phi_bb182_31, phi_bb182_13, phi_bb182_14, phi_bb182_14, phi_bb182_14, phi_bb182_14}, &block190, std::vector<compiler::Node*>{phi_bb182_13, phi_bb182_16, phi_bb182_17, phi_bb182_20, phi_bb182_21, phi_bb182_26, phi_bb182_30, phi_bb182_31, phi_bb182_13, phi_bb182_14, phi_bb182_14, phi_bb182_14, phi_bb182_14});
  }

  TNode<FixedArray> phi_bb189_13;
  TNode<BoolT> phi_bb189_16;
  TNode<PrimitiveHeapObject> phi_bb189_17;
  TNode<String> phi_bb189_20;
  TNode<String> phi_bb189_21;
  TNode<String> phi_bb189_26;
  TNode<String> phi_bb189_30;
  TNode<Object> phi_bb189_31;
  TNode<FixedArray> phi_bb189_33;
  TNode<IntPtrT> phi_bb189_37;
  TNode<IntPtrT> phi_bb189_38;
  TNode<IntPtrT> phi_bb189_42;
  TNode<IntPtrT> phi_bb189_43;
  TNode<IntPtrT> tmp235;
  TNode<IntPtrT> tmp236;
  TNode<Union<HeapObject, TaggedIndex>> tmp237;
  TNode<IntPtrT> tmp238;
  if (block189.is_used()) {
    ca_.Bind(&block189, &phi_bb189_13, &phi_bb189_16, &phi_bb189_17, &phi_bb189_20, &phi_bb189_21, &phi_bb189_26, &phi_bb189_30, &phi_bb189_31, &phi_bb189_33, &phi_bb189_37, &phi_bb189_38, &phi_bb189_42, &phi_bb189_43);
    tmp235 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb189_43});
    tmp236 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp228}, TNode<IntPtrT>{tmp235});
    std::tie(tmp237, tmp238) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp227}, TNode<IntPtrT>{tmp236}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp237, tmp238}, phi_bb189_31);
    ca_.Goto(&block184, phi_bb189_13, tmp231, phi_bb189_16, phi_bb189_17, phi_bb189_20, phi_bb189_21, phi_bb189_26, phi_bb189_30, phi_bb189_31);
  }

  TNode<FixedArray> phi_bb190_13;
  TNode<BoolT> phi_bb190_16;
  TNode<PrimitiveHeapObject> phi_bb190_17;
  TNode<String> phi_bb190_20;
  TNode<String> phi_bb190_21;
  TNode<String> phi_bb190_26;
  TNode<String> phi_bb190_30;
  TNode<Object> phi_bb190_31;
  TNode<FixedArray> phi_bb190_33;
  TNode<IntPtrT> phi_bb190_37;
  TNode<IntPtrT> phi_bb190_38;
  TNode<IntPtrT> phi_bb190_42;
  TNode<IntPtrT> phi_bb190_43;
  if (block190.is_used()) {
    ca_.Bind(&block190, &phi_bb190_13, &phi_bb190_16, &phi_bb190_17, &phi_bb190_20, &phi_bb190_21, &phi_bb190_26, &phi_bb190_30, &phi_bb190_31, &phi_bb190_33, &phi_bb190_37, &phi_bb190_38, &phi_bb190_42, &phi_bb190_43);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb183_13;
  TNode<IntPtrT> phi_bb183_14;
  TNode<BoolT> phi_bb183_16;
  TNode<PrimitiveHeapObject> phi_bb183_17;
  TNode<String> phi_bb183_20;
  TNode<String> phi_bb183_21;
  TNode<String> phi_bb183_26;
  TNode<String> phi_bb183_30;
  TNode<Object> phi_bb183_31;
  TNode<IntPtrT> tmp239;
  TNode<IntPtrT> tmp240;
  TNode<BoolT> tmp241;
  if (block183.is_used()) {
    ca_.Bind(&block183, &phi_bb183_13, &phi_bb183_14, &phi_bb183_16, &phi_bb183_17, &phi_bb183_20, &phi_bb183_21, &phi_bb183_26, &phi_bb183_30, &phi_bb183_31);
    tmp239 = CodeStubAssembler(state_).CalculateNewElementsCapacity(TNode<IntPtrT>{tmp222});
    tmp240 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    tmp241 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{tmp239}, TNode<IntPtrT>{tmp240});
    ca_.Branch(tmp241, &block193, std::vector<compiler::Node*>{phi_bb183_13, phi_bb183_14, phi_bb183_16, phi_bb183_17, phi_bb183_20, phi_bb183_21, phi_bb183_26, phi_bb183_30, phi_bb183_31}, &block194, std::vector<compiler::Node*>{phi_bb183_13, phi_bb183_14, phi_bb183_16, phi_bb183_17, phi_bb183_20, phi_bb183_21, phi_bb183_26, phi_bb183_30, phi_bb183_31});
  }

  TNode<FixedArray> phi_bb193_13;
  TNode<IntPtrT> phi_bb193_14;
  TNode<BoolT> phi_bb193_16;
  TNode<PrimitiveHeapObject> phi_bb193_17;
  TNode<String> phi_bb193_20;
  TNode<String> phi_bb193_21;
  TNode<String> phi_bb193_26;
  TNode<String> phi_bb193_30;
  TNode<Object> phi_bb193_31;
  TNode<IntPtrT> tmp242;
  if (block193.is_used()) {
    ca_.Bind(&block193, &phi_bb193_13, &phi_bb193_14, &phi_bb193_16, &phi_bb193_17, &phi_bb193_20, &phi_bb193_21, &phi_bb193_26, &phi_bb193_30, &phi_bb193_31);
    tmp242 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    ca_.Goto(&block195, phi_bb193_13, phi_bb193_14, phi_bb193_16, phi_bb193_17, phi_bb193_20, phi_bb193_21, phi_bb193_26, phi_bb193_30, phi_bb193_31, tmp242);
  }

  TNode<FixedArray> phi_bb194_13;
  TNode<IntPtrT> phi_bb194_14;
  TNode<BoolT> phi_bb194_16;
  TNode<PrimitiveHeapObject> phi_bb194_17;
  TNode<String> phi_bb194_20;
  TNode<String> phi_bb194_21;
  TNode<String> phi_bb194_26;
  TNode<String> phi_bb194_30;
  TNode<Object> phi_bb194_31;
  if (block194.is_used()) {
    ca_.Bind(&block194, &phi_bb194_13, &phi_bb194_14, &phi_bb194_16, &phi_bb194_17, &phi_bb194_20, &phi_bb194_21, &phi_bb194_26, &phi_bb194_30, &phi_bb194_31);
    ca_.Goto(&block195, phi_bb194_13, phi_bb194_14, phi_bb194_16, phi_bb194_17, phi_bb194_20, phi_bb194_21, phi_bb194_26, phi_bb194_30, phi_bb194_31, tmp239);
  }

  TNode<FixedArray> phi_bb195_13;
  TNode<IntPtrT> phi_bb195_14;
  TNode<BoolT> phi_bb195_16;
  TNode<PrimitiveHeapObject> phi_bb195_17;
  TNode<String> phi_bb195_20;
  TNode<String> phi_bb195_21;
  TNode<String> phi_bb195_26;
  TNode<String> phi_bb195_30;
  TNode<Object> phi_bb195_31;
  TNode<IntPtrT> phi_bb195_34;
  TNode<IntPtrT> tmp243;
  TNode<BoolT> tmp244;
  if (block195.is_used()) {
    ca_.Bind(&block195, &phi_bb195_13, &phi_bb195_14, &phi_bb195_16, &phi_bb195_17, &phi_bb195_20, &phi_bb195_21, &phi_bb195_26, &phi_bb195_30, &phi_bb195_31, &phi_bb195_34);
    tmp243 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp244 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{phi_bb195_34}, TNode<IntPtrT>{tmp243});
    ca_.Branch(tmp244, &block197, std::vector<compiler::Node*>{phi_bb195_13, phi_bb195_14, phi_bb195_16, phi_bb195_17, phi_bb195_20, phi_bb195_21, phi_bb195_26, phi_bb195_30, phi_bb195_31}, &block198, std::vector<compiler::Node*>{phi_bb195_13, phi_bb195_14, phi_bb195_16, phi_bb195_17, phi_bb195_20, phi_bb195_21, phi_bb195_26, phi_bb195_30, phi_bb195_31});
  }

  TNode<FixedArray> phi_bb198_13;
  TNode<IntPtrT> phi_bb198_14;
  TNode<BoolT> phi_bb198_16;
  TNode<PrimitiveHeapObject> phi_bb198_17;
  TNode<String> phi_bb198_20;
  TNode<String> phi_bb198_21;
  TNode<String> phi_bb198_26;
  TNode<String> phi_bb198_30;
  TNode<Object> phi_bb198_31;
  if (block198.is_used()) {
    ca_.Bind(&block198, &phi_bb198_13, &phi_bb198_14, &phi_bb198_16, &phi_bb198_17, &phi_bb198_20, &phi_bb198_21, &phi_bb198_26, &phi_bb198_30, &phi_bb198_31);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 248});
      CodeStubAssembler(state_).FailAssert("Torque assert 'cappedNewChunkLength > 0' failed", pos_stack);
    }
  }

  TNode<FixedArray> phi_bb197_13;
  TNode<IntPtrT> phi_bb197_14;
  TNode<BoolT> phi_bb197_16;
  TNode<PrimitiveHeapObject> phi_bb197_17;
  TNode<String> phi_bb197_20;
  TNode<String> phi_bb197_21;
  TNode<String> phi_bb197_26;
  TNode<String> phi_bb197_30;
  TNode<Object> phi_bb197_31;
  TNode<FixedArray> tmp245;
  TNode<Union<HeapObject, TaggedIndex>> tmp246;
  TNode<IntPtrT> tmp247;
  TNode<IntPtrT> tmp248;
  TNode<UintPtrT> tmp249;
  TNode<IntPtrT> tmp250;
  TNode<UintPtrT> tmp251;
  TNode<UintPtrT> tmp252;
  TNode<BoolT> tmp253;
  if (block197.is_used()) {
    ca_.Bind(&block197, &phi_bb197_13, &phi_bb197_14, &phi_bb197_16, &phi_bb197_17, &phi_bb197_20, &phi_bb197_21, &phi_bb197_26, &phi_bb197_30, &phi_bb197_31);
    tmp245 = CodeStubAssembler(state_).AllocateZeroedFixedArray(TNode<IntPtrT>{phi_bb195_34});
    std::tie(tmp246, tmp247, tmp248) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb197_13}).Flatten();
    tmp249 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp250 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp249});
    tmp251 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp250});
    tmp252 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp248});
    tmp253 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp251}, TNode<UintPtrT>{tmp252});
    ca_.Branch(tmp253, &block204, std::vector<compiler::Node*>{phi_bb197_13, phi_bb197_14, phi_bb197_16, phi_bb197_17, phi_bb197_20, phi_bb197_21, phi_bb197_26, phi_bb197_30, phi_bb197_31, phi_bb197_13}, &block205, std::vector<compiler::Node*>{phi_bb197_13, phi_bb197_14, phi_bb197_16, phi_bb197_17, phi_bb197_20, phi_bb197_21, phi_bb197_26, phi_bb197_30, phi_bb197_31, phi_bb197_13});
  }

  TNode<FixedArray> phi_bb204_13;
  TNode<IntPtrT> phi_bb204_14;
  TNode<BoolT> phi_bb204_16;
  TNode<PrimitiveHeapObject> phi_bb204_17;
  TNode<String> phi_bb204_20;
  TNode<String> phi_bb204_21;
  TNode<String> phi_bb204_26;
  TNode<String> phi_bb204_30;
  TNode<Object> phi_bb204_31;
  TNode<FixedArray> phi_bb204_36;
  TNode<IntPtrT> tmp254;
  TNode<IntPtrT> tmp255;
  TNode<Union<HeapObject, TaggedIndex>> tmp256;
  TNode<IntPtrT> tmp257;
  TNode<Union<HeapObject, TaggedIndex>> tmp258;
  TNode<IntPtrT> tmp259;
  TNode<IntPtrT> tmp260;
  TNode<UintPtrT> tmp261;
  TNode<IntPtrT> tmp262;
  TNode<UintPtrT> tmp263;
  TNode<UintPtrT> tmp264;
  TNode<BoolT> tmp265;
  if (block204.is_used()) {
    ca_.Bind(&block204, &phi_bb204_13, &phi_bb204_14, &phi_bb204_16, &phi_bb204_17, &phi_bb204_20, &phi_bb204_21, &phi_bb204_26, &phi_bb204_30, &phi_bb204_31, &phi_bb204_36);
    tmp254 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp250});
    tmp255 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp247}, TNode<IntPtrT>{tmp254});
    std::tie(tmp256, tmp257) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp246}, TNode<IntPtrT>{tmp255}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp256, tmp257}, tmp245);
    std::tie(tmp258, tmp259, tmp260) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp245}).Flatten();
    tmp261 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp262 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp261});
    tmp263 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp262});
    tmp264 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp260});
    tmp265 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp263}, TNode<UintPtrT>{tmp264});
    ca_.Branch(tmp265, &block213, std::vector<compiler::Node*>{phi_bb204_13, phi_bb204_14, phi_bb204_16, phi_bb204_17, phi_bb204_20, phi_bb204_21, phi_bb204_26, phi_bb204_30, phi_bb204_31}, &block214, std::vector<compiler::Node*>{phi_bb204_13, phi_bb204_14, phi_bb204_16, phi_bb204_17, phi_bb204_20, phi_bb204_21, phi_bb204_26, phi_bb204_30, phi_bb204_31});
  }

  TNode<FixedArray> phi_bb205_13;
  TNode<IntPtrT> phi_bb205_14;
  TNode<BoolT> phi_bb205_16;
  TNode<PrimitiveHeapObject> phi_bb205_17;
  TNode<String> phi_bb205_20;
  TNode<String> phi_bb205_21;
  TNode<String> phi_bb205_26;
  TNode<String> phi_bb205_30;
  TNode<Object> phi_bb205_31;
  TNode<FixedArray> phi_bb205_36;
  if (block205.is_used()) {
    ca_.Bind(&block205, &phi_bb205_13, &phi_bb205_14, &phi_bb205_16, &phi_bb205_17, &phi_bb205_20, &phi_bb205_21, &phi_bb205_26, &phi_bb205_30, &phi_bb205_31, &phi_bb205_36);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb213_13;
  TNode<IntPtrT> phi_bb213_14;
  TNode<BoolT> phi_bb213_16;
  TNode<PrimitiveHeapObject> phi_bb213_17;
  TNode<String> phi_bb213_20;
  TNode<String> phi_bb213_21;
  TNode<String> phi_bb213_26;
  TNode<String> phi_bb213_30;
  TNode<Object> phi_bb213_31;
  TNode<IntPtrT> tmp266;
  TNode<IntPtrT> tmp267;
  TNode<Union<HeapObject, TaggedIndex>> tmp268;
  TNode<IntPtrT> tmp269;
  TNode<Undefined> tmp270;
  TNode<Union<HeapObject, TaggedIndex>> tmp271;
  TNode<IntPtrT> tmp272;
  TNode<IntPtrT> tmp273;
  TNode<UintPtrT> tmp274;
  TNode<IntPtrT> tmp275;
  TNode<UintPtrT> tmp276;
  TNode<UintPtrT> tmp277;
  TNode<BoolT> tmp278;
  if (block213.is_used()) {
    ca_.Bind(&block213, &phi_bb213_13, &phi_bb213_14, &phi_bb213_16, &phi_bb213_17, &phi_bb213_20, &phi_bb213_21, &phi_bb213_26, &phi_bb213_30, &phi_bb213_31);
    tmp266 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp262});
    tmp267 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp259}, TNode<IntPtrT>{tmp266});
    std::tie(tmp268, tmp269) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp258}, TNode<IntPtrT>{tmp267}).Flatten();
    tmp270 = Undefined_0(state_);
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp268, tmp269}, tmp270);
    std::tie(tmp271, tmp272, tmp273) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp245}).Flatten();
    tmp274 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp275 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp274});
    tmp276 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp275});
    tmp277 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp273});
    tmp278 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp276}, TNode<UintPtrT>{tmp277});
    ca_.Branch(tmp278, &block222, std::vector<compiler::Node*>{phi_bb213_13, phi_bb213_14, phi_bb213_16, phi_bb213_17, phi_bb213_20, phi_bb213_21, phi_bb213_26, phi_bb213_30, phi_bb213_31}, &block223, std::vector<compiler::Node*>{phi_bb213_13, phi_bb213_14, phi_bb213_16, phi_bb213_17, phi_bb213_20, phi_bb213_21, phi_bb213_26, phi_bb213_30, phi_bb213_31});
  }

  TNode<FixedArray> phi_bb214_13;
  TNode<IntPtrT> phi_bb214_14;
  TNode<BoolT> phi_bb214_16;
  TNode<PrimitiveHeapObject> phi_bb214_17;
  TNode<String> phi_bb214_20;
  TNode<String> phi_bb214_21;
  TNode<String> phi_bb214_26;
  TNode<String> phi_bb214_30;
  TNode<Object> phi_bb214_31;
  if (block214.is_used()) {
    ca_.Bind(&block214, &phi_bb214_13, &phi_bb214_14, &phi_bb214_16, &phi_bb214_17, &phi_bb214_20, &phi_bb214_21, &phi_bb214_26, &phi_bb214_30, &phi_bb214_31);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb222_13;
  TNode<IntPtrT> phi_bb222_14;
  TNode<BoolT> phi_bb222_16;
  TNode<PrimitiveHeapObject> phi_bb222_17;
  TNode<String> phi_bb222_20;
  TNode<String> phi_bb222_21;
  TNode<String> phi_bb222_26;
  TNode<String> phi_bb222_30;
  TNode<Object> phi_bb222_31;
  TNode<IntPtrT> tmp279;
  TNode<IntPtrT> tmp280;
  TNode<Union<HeapObject, TaggedIndex>> tmp281;
  TNode<IntPtrT> tmp282;
  TNode<IntPtrT> tmp283;
  if (block222.is_used()) {
    ca_.Bind(&block222, &phi_bb222_13, &phi_bb222_14, &phi_bb222_16, &phi_bb222_17, &phi_bb222_20, &phi_bb222_21, &phi_bb222_26, &phi_bb222_30, &phi_bb222_31);
    tmp279 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp275});
    tmp280 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp272}, TNode<IntPtrT>{tmp279});
    std::tie(tmp281, tmp282) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp271}, TNode<IntPtrT>{tmp280}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp281, tmp282}, phi_bb222_31);
    tmp283 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    ca_.Goto(&block184, tmp245, tmp283, phi_bb222_16, phi_bb222_17, phi_bb222_20, phi_bb222_21, phi_bb222_26, phi_bb222_30, phi_bb222_31);
  }

  TNode<FixedArray> phi_bb223_13;
  TNode<IntPtrT> phi_bb223_14;
  TNode<BoolT> phi_bb223_16;
  TNode<PrimitiveHeapObject> phi_bb223_17;
  TNode<String> phi_bb223_20;
  TNode<String> phi_bb223_21;
  TNode<String> phi_bb223_26;
  TNode<String> phi_bb223_30;
  TNode<Object> phi_bb223_31;
  if (block223.is_used()) {
    ca_.Bind(&block223, &phi_bb223_13, &phi_bb223_14, &phi_bb223_16, &phi_bb223_17, &phi_bb223_20, &phi_bb223_21, &phi_bb223_26, &phi_bb223_30, &phi_bb223_31);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb184_13;
  TNode<IntPtrT> phi_bb184_14;
  TNode<BoolT> phi_bb184_16;
  TNode<PrimitiveHeapObject> phi_bb184_17;
  TNode<String> phi_bb184_20;
  TNode<String> phi_bb184_21;
  TNode<String> phi_bb184_26;
  TNode<String> phi_bb184_30;
  TNode<Object> phi_bb184_31;
  if (block184.is_used()) {
    ca_.Bind(&block184, &phi_bb184_13, &phi_bb184_14, &phi_bb184_16, &phi_bb184_17, &phi_bb184_20, &phi_bb184_21, &phi_bb184_26, &phi_bb184_30, &phi_bb184_31);
    ca_.Goto(&block93, phi_bb184_13, phi_bb184_14, phi_bb184_16, phi_bb184_26, phi_bb184_20, phi_bb184_21, phi_bb184_26);
  }

  TNode<FixedArray> phi_bb93_13;
  TNode<IntPtrT> phi_bb93_14;
  TNode<BoolT> phi_bb93_16;
  TNode<PrimitiveHeapObject> phi_bb93_17;
  TNode<String> phi_bb93_20;
  TNode<String> phi_bb93_21;
  TNode<String> phi_bb93_26;
  TNode<IntPtrT> tmp284;
  TNode<Map> tmp285;
  TNode<BoolT> tmp286;
  TNode<BoolT> tmp287;
  TNode<IntPtrT> tmp288;
  if (block93.is_used()) {
    ca_.Bind(&block93, &phi_bb93_13, &phi_bb93_14, &phi_bb93_16, &phi_bb93_17, &phi_bb93_20, &phi_bb93_21, &phi_bb93_26);
    tmp284 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    tmp285 = CodeStubAssembler(state_).LoadReference<Map>(CodeStubAssembler::Reference{phi_bb93_26, tmp284});
    tmp286 = CodeStubAssembler(state_).IsOneByteStringMap(TNode<Map>{tmp285});
    tmp287 = CodeStubAssembler(state_).Word32And(TNode<BoolT>{tmp286}, TNode<BoolT>{phi_bb93_16});
    tmp288 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block4, tmp288, phi_bb6_11, phi_bb93_13, phi_bb93_14, tmp116, tmp287, phi_bb93_17, tmp19);
  }

  TNode<IntPtrT> phi_bb3_10;
  TNode<BuiltinPtr> phi_bb3_11;
  TNode<FixedArray> phi_bb3_13;
  TNode<IntPtrT> phi_bb3_14;
  TNode<IntPtrT> phi_bb3_15;
  TNode<BoolT> phi_bb3_16;
  TNode<PrimitiveHeapObject> phi_bb3_17;
  TNode<UintPtrT> phi_bb3_18;
  TNode<BoolT> tmp289;
  TNode<IntPtrT> tmp290;
  TNode<BoolT> tmp291;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_10, &phi_bb3_11, &phi_bb3_13, &phi_bb3_14, &phi_bb3_15, &phi_bb3_16, &phi_bb3_17, &phi_bb3_18);
    tmp289 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    tmp290 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp291 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb3_10}, TNode<IntPtrT>{tmp290});
    ca_.Branch(tmp291, &block229, std::vector<compiler::Node*>{phi_bb3_10, phi_bb3_11, phi_bb3_13, phi_bb3_14, phi_bb3_15, phi_bb3_16, phi_bb3_17, phi_bb3_18, phi_bb3_10, phi_bb3_10}, &block230, std::vector<compiler::Node*>{phi_bb3_10, phi_bb3_11, phi_bb3_13, phi_bb3_14, phi_bb3_15, phi_bb3_16, phi_bb3_17, phi_bb3_18, phi_bb3_10, phi_bb3_10});
  }

  TNode<IntPtrT> phi_bb229_10;
  TNode<BuiltinPtr> phi_bb229_11;
  TNode<FixedArray> phi_bb229_13;
  TNode<IntPtrT> phi_bb229_14;
  TNode<IntPtrT> phi_bb229_15;
  TNode<BoolT> phi_bb229_16;
  TNode<PrimitiveHeapObject> phi_bb229_17;
  TNode<UintPtrT> phi_bb229_18;
  TNode<IntPtrT> phi_bb229_19;
  TNode<IntPtrT> phi_bb229_23;
  TNode<BoolT> tmp292;
  if (block229.is_used()) {
    ca_.Bind(&block229, &phi_bb229_10, &phi_bb229_11, &phi_bb229_13, &phi_bb229_14, &phi_bb229_15, &phi_bb229_16, &phi_bb229_17, &phi_bb229_18, &phi_bb229_19, &phi_bb229_23);
    tmp292 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block231, phi_bb229_10, phi_bb229_11, phi_bb229_13, phi_bb229_14, phi_bb229_15, phi_bb229_16, phi_bb229_17, phi_bb229_18, phi_bb229_19, phi_bb229_23, tmp292);
  }

  TNode<IntPtrT> phi_bb230_10;
  TNode<BuiltinPtr> phi_bb230_11;
  TNode<FixedArray> phi_bb230_13;
  TNode<IntPtrT> phi_bb230_14;
  TNode<IntPtrT> phi_bb230_15;
  TNode<BoolT> phi_bb230_16;
  TNode<PrimitiveHeapObject> phi_bb230_17;
  TNode<UintPtrT> phi_bb230_18;
  TNode<IntPtrT> phi_bb230_19;
  TNode<IntPtrT> phi_bb230_23;
  TNode<IntPtrT> tmp293;
  TNode<BoolT> tmp294;
  if (block230.is_used()) {
    ca_.Bind(&block230, &phi_bb230_10, &phi_bb230_11, &phi_bb230_13, &phi_bb230_14, &phi_bb230_15, &phi_bb230_16, &phi_bb230_17, &phi_bb230_18, &phi_bb230_19, &phi_bb230_23);
    tmp293 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp294 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{tmp3}, TNode<IntPtrT>{tmp293});
    ca_.Goto(&block231, phi_bb230_10, phi_bb230_11, phi_bb230_13, phi_bb230_14, phi_bb230_15, phi_bb230_16, phi_bb230_17, phi_bb230_18, phi_bb230_19, phi_bb230_23, tmp294);
  }

  TNode<IntPtrT> phi_bb231_10;
  TNode<BuiltinPtr> phi_bb231_11;
  TNode<FixedArray> phi_bb231_13;
  TNode<IntPtrT> phi_bb231_14;
  TNode<IntPtrT> phi_bb231_15;
  TNode<BoolT> phi_bb231_16;
  TNode<PrimitiveHeapObject> phi_bb231_17;
  TNode<UintPtrT> phi_bb231_18;
  TNode<IntPtrT> phi_bb231_19;
  TNode<IntPtrT> phi_bb231_23;
  TNode<BoolT> phi_bb231_27;
  if (block231.is_used()) {
    ca_.Bind(&block231, &phi_bb231_10, &phi_bb231_11, &phi_bb231_13, &phi_bb231_14, &phi_bb231_15, &phi_bb231_16, &phi_bb231_17, &phi_bb231_18, &phi_bb231_19, &phi_bb231_23, &phi_bb231_27);
    ca_.Branch(phi_bb231_27, &block227, std::vector<compiler::Node*>{phi_bb231_10, phi_bb231_11, phi_bb231_13, phi_bb231_14, phi_bb231_15, phi_bb231_16, phi_bb231_17, phi_bb231_18, phi_bb231_19, phi_bb231_23}, &block228, std::vector<compiler::Node*>{phi_bb231_10, phi_bb231_11, phi_bb231_13, phi_bb231_14, phi_bb231_15, phi_bb231_16, phi_bb231_17, phi_bb231_18, phi_bb231_19, phi_bb231_23});
  }

  TNode<IntPtrT> phi_bb227_10;
  TNode<BuiltinPtr> phi_bb227_11;
  TNode<FixedArray> phi_bb227_13;
  TNode<IntPtrT> phi_bb227_14;
  TNode<IntPtrT> phi_bb227_15;
  TNode<BoolT> phi_bb227_16;
  TNode<PrimitiveHeapObject> phi_bb227_17;
  TNode<UintPtrT> phi_bb227_18;
  TNode<IntPtrT> phi_bb227_19;
  TNode<IntPtrT> phi_bb227_23;
  if (block227.is_used()) {
    ca_.Bind(&block227, &phi_bb227_10, &phi_bb227_11, &phi_bb227_13, &phi_bb227_14, &phi_bb227_15, &phi_bb227_16, &phi_bb227_17, &phi_bb227_18, &phi_bb227_19, &phi_bb227_23);
    ca_.Goto(&block226, phi_bb227_10, phi_bb227_11, phi_bb227_13, phi_bb227_14, phi_bb227_15, phi_bb227_16, phi_bb227_17, phi_bb227_18, phi_bb227_19, phi_bb227_23);
  }

  TNode<IntPtrT> phi_bb228_10;
  TNode<BuiltinPtr> phi_bb228_11;
  TNode<FixedArray> phi_bb228_13;
  TNode<IntPtrT> phi_bb228_14;
  TNode<IntPtrT> phi_bb228_15;
  TNode<BoolT> phi_bb228_16;
  TNode<PrimitiveHeapObject> phi_bb228_17;
  TNode<UintPtrT> phi_bb228_18;
  TNode<IntPtrT> phi_bb228_19;
  TNode<IntPtrT> phi_bb228_23;
  TNode<IntPtrT> tmp295;
  TNode<IntPtrT> tmp296;
  if (block228.is_used()) {
    ca_.Bind(&block228, &phi_bb228_10, &phi_bb228_11, &phi_bb228_13, &phi_bb228_14, &phi_bb228_15, &phi_bb228_16, &phi_bb228_17, &phi_bb228_18, &phi_bb228_19, &phi_bb228_23);
    tmp295 = CodeStubAssembler(state_).IntPtrMul(TNode<IntPtrT>{tmp3}, TNode<IntPtrT>{phi_bb228_23});
    tmp296 = AddStringLength_0(state_, TNode<Context>{p_context}, TNode<IntPtrT>{phi_bb228_15}, TNode<IntPtrT>{tmp295});
    ca_.Branch(tmp289, &block232, std::vector<compiler::Node*>{phi_bb228_10, phi_bb228_11, phi_bb228_13, phi_bb228_14, phi_bb228_16, phi_bb228_17, phi_bb228_18, phi_bb228_19, phi_bb228_23, phi_bb228_23}, &block233, std::vector<compiler::Node*>{phi_bb228_10, phi_bb228_11, phi_bb228_13, phi_bb228_14, phi_bb228_16, phi_bb228_17, phi_bb228_18, phi_bb228_19, phi_bb228_23, phi_bb228_23});
  }

  TNode<IntPtrT> phi_bb232_10;
  TNode<BuiltinPtr> phi_bb232_11;
  TNode<FixedArray> phi_bb232_13;
  TNode<IntPtrT> phi_bb232_14;
  TNode<BoolT> phi_bb232_16;
  TNode<PrimitiveHeapObject> phi_bb232_17;
  TNode<UintPtrT> phi_bb232_18;
  TNode<IntPtrT> phi_bb232_19;
  TNode<IntPtrT> phi_bb232_23;
  TNode<IntPtrT> phi_bb232_26;
  TNode<Smi> tmp297;
  TNode<IntPtrT> tmp298;
  TNode<IntPtrT> tmp299;
  TNode<BoolT> tmp300;
  if (block232.is_used()) {
    ca_.Bind(&block232, &phi_bb232_10, &phi_bb232_11, &phi_bb232_13, &phi_bb232_14, &phi_bb232_16, &phi_bb232_17, &phi_bb232_18, &phi_bb232_19, &phi_bb232_23, &phi_bb232_26);
    tmp297 = Convert_Smi_intptr_0(state_, TNode<IntPtrT>{phi_bb232_26});
    tmp298 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{phi_bb232_13});
    tmp299 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp300 = CodeStubAssembler(state_).IntPtrGreaterThanOrEqual(TNode<IntPtrT>{phi_bb232_14}, TNode<IntPtrT>{tmp299});
    ca_.Branch(tmp300, &block235, std::vector<compiler::Node*>{phi_bb232_10, phi_bb232_11, phi_bb232_13, phi_bb232_14, phi_bb232_16, phi_bb232_17, phi_bb232_18, phi_bb232_19, phi_bb232_23, phi_bb232_26}, &block236, std::vector<compiler::Node*>{phi_bb232_10, phi_bb232_11, phi_bb232_13, phi_bb232_14, phi_bb232_16, phi_bb232_17, phi_bb232_18, phi_bb232_19, phi_bb232_23, phi_bb232_26});
  }

  TNode<IntPtrT> phi_bb236_10;
  TNode<BuiltinPtr> phi_bb236_11;
  TNode<FixedArray> phi_bb236_13;
  TNode<IntPtrT> phi_bb236_14;
  TNode<BoolT> phi_bb236_16;
  TNode<PrimitiveHeapObject> phi_bb236_17;
  TNode<UintPtrT> phi_bb236_18;
  TNode<IntPtrT> phi_bb236_19;
  TNode<IntPtrT> phi_bb236_23;
  TNode<IntPtrT> phi_bb236_26;
  if (block236.is_used()) {
    ca_.Bind(&block236, &phi_bb236_10, &phi_bb236_11, &phi_bb236_13, &phi_bb236_14, &phi_bb236_16, &phi_bb236_17, &phi_bb236_18, &phi_bb236_19, &phi_bb236_23, &phi_bb236_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 238});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index >= 1' failed", pos_stack);
    }
  }

  TNode<IntPtrT> phi_bb235_10;
  TNode<BuiltinPtr> phi_bb235_11;
  TNode<FixedArray> phi_bb235_13;
  TNode<IntPtrT> phi_bb235_14;
  TNode<BoolT> phi_bb235_16;
  TNode<PrimitiveHeapObject> phi_bb235_17;
  TNode<UintPtrT> phi_bb235_18;
  TNode<IntPtrT> phi_bb235_19;
  TNode<IntPtrT> phi_bb235_23;
  TNode<IntPtrT> phi_bb235_26;
  TNode<BoolT> tmp301;
  if (block235.is_used()) {
    ca_.Bind(&block235, &phi_bb235_10, &phi_bb235_11, &phi_bb235_13, &phi_bb235_14, &phi_bb235_16, &phi_bb235_17, &phi_bb235_18, &phi_bb235_19, &phi_bb235_23, &phi_bb235_26);
    tmp301 = CodeStubAssembler(state_).IntPtrLessThanOrEqual(TNode<IntPtrT>{phi_bb235_14}, TNode<IntPtrT>{tmp298});
    ca_.Branch(tmp301, &block237, std::vector<compiler::Node*>{phi_bb235_10, phi_bb235_11, phi_bb235_13, phi_bb235_14, phi_bb235_16, phi_bb235_17, phi_bb235_18, phi_bb235_19, phi_bb235_23, phi_bb235_26}, &block238, std::vector<compiler::Node*>{phi_bb235_10, phi_bb235_11, phi_bb235_13, phi_bb235_14, phi_bb235_16, phi_bb235_17, phi_bb235_18, phi_bb235_19, phi_bb235_23, phi_bb235_26});
  }

  TNode<IntPtrT> phi_bb238_10;
  TNode<BuiltinPtr> phi_bb238_11;
  TNode<FixedArray> phi_bb238_13;
  TNode<IntPtrT> phi_bb238_14;
  TNode<BoolT> phi_bb238_16;
  TNode<PrimitiveHeapObject> phi_bb238_17;
  TNode<UintPtrT> phi_bb238_18;
  TNode<IntPtrT> phi_bb238_19;
  TNode<IntPtrT> phi_bb238_23;
  TNode<IntPtrT> phi_bb238_26;
  if (block238.is_used()) {
    ca_.Bind(&block238, &phi_bb238_10, &phi_bb238_11, &phi_bb238_13, &phi_bb238_14, &phi_bb238_16, &phi_bb238_17, &phi_bb238_18, &phi_bb238_19, &phi_bb238_23, &phi_bb238_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 239});
      CodeStubAssembler(state_).FailAssert("Torque assert 'this.index <= length' failed", pos_stack);
    }
  }

  TNode<IntPtrT> phi_bb237_10;
  TNode<BuiltinPtr> phi_bb237_11;
  TNode<FixedArray> phi_bb237_13;
  TNode<IntPtrT> phi_bb237_14;
  TNode<BoolT> phi_bb237_16;
  TNode<PrimitiveHeapObject> phi_bb237_17;
  TNode<UintPtrT> phi_bb237_18;
  TNode<IntPtrT> phi_bb237_19;
  TNode<IntPtrT> phi_bb237_23;
  TNode<IntPtrT> phi_bb237_26;
  TNode<BoolT> tmp302;
  if (block237.is_used()) {
    ca_.Bind(&block237, &phi_bb237_10, &phi_bb237_11, &phi_bb237_13, &phi_bb237_14, &phi_bb237_16, &phi_bb237_17, &phi_bb237_18, &phi_bb237_19, &phi_bb237_23, &phi_bb237_26);
    tmp302 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb237_14}, TNode<IntPtrT>{tmp298});
    ca_.Branch(tmp302, &block239, std::vector<compiler::Node*>{phi_bb237_10, phi_bb237_11, phi_bb237_13, phi_bb237_14, phi_bb237_16, phi_bb237_17, phi_bb237_18, phi_bb237_19, phi_bb237_23, phi_bb237_26}, &block240, std::vector<compiler::Node*>{phi_bb237_10, phi_bb237_11, phi_bb237_13, phi_bb237_14, phi_bb237_16, phi_bb237_17, phi_bb237_18, phi_bb237_19, phi_bb237_23, phi_bb237_26});
  }

  TNode<IntPtrT> phi_bb239_10;
  TNode<BuiltinPtr> phi_bb239_11;
  TNode<FixedArray> phi_bb239_13;
  TNode<IntPtrT> phi_bb239_14;
  TNode<BoolT> phi_bb239_16;
  TNode<PrimitiveHeapObject> phi_bb239_17;
  TNode<UintPtrT> phi_bb239_18;
  TNode<IntPtrT> phi_bb239_19;
  TNode<IntPtrT> phi_bb239_23;
  TNode<IntPtrT> phi_bb239_26;
  TNode<Union<HeapObject, TaggedIndex>> tmp303;
  TNode<IntPtrT> tmp304;
  TNode<IntPtrT> tmp305;
  TNode<IntPtrT> tmp306;
  TNode<IntPtrT> tmp307;
  TNode<UintPtrT> tmp308;
  TNode<UintPtrT> tmp309;
  TNode<BoolT> tmp310;
  if (block239.is_used()) {
    ca_.Bind(&block239, &phi_bb239_10, &phi_bb239_11, &phi_bb239_13, &phi_bb239_14, &phi_bb239_16, &phi_bb239_17, &phi_bb239_18, &phi_bb239_19, &phi_bb239_23, &phi_bb239_26);
    std::tie(tmp303, tmp304, tmp305) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb239_13}).Flatten();
    tmp306 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp307 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb239_14}, TNode<IntPtrT>{tmp306});
    tmp308 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb239_14});
    tmp309 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp305});
    tmp310 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp308}, TNode<UintPtrT>{tmp309});
    ca_.Branch(tmp310, &block246, std::vector<compiler::Node*>{phi_bb239_10, phi_bb239_11, phi_bb239_13, phi_bb239_16, phi_bb239_17, phi_bb239_18, phi_bb239_19, phi_bb239_23, phi_bb239_26, phi_bb239_13, phi_bb239_14, phi_bb239_14, phi_bb239_14, phi_bb239_14}, &block247, std::vector<compiler::Node*>{phi_bb239_10, phi_bb239_11, phi_bb239_13, phi_bb239_16, phi_bb239_17, phi_bb239_18, phi_bb239_19, phi_bb239_23, phi_bb239_26, phi_bb239_13, phi_bb239_14, phi_bb239_14, phi_bb239_14, phi_bb239_14});
  }

  TNode<IntPtrT> phi_bb246_10;
  TNode<BuiltinPtr> phi_bb246_11;
  TNode<FixedArray> phi_bb246_13;
  TNode<BoolT> phi_bb246_16;
  TNode<PrimitiveHeapObject> phi_bb246_17;
  TNode<UintPtrT> phi_bb246_18;
  TNode<IntPtrT> phi_bb246_19;
  TNode<IntPtrT> phi_bb246_23;
  TNode<IntPtrT> phi_bb246_26;
  TNode<FixedArray> phi_bb246_31;
  TNode<IntPtrT> phi_bb246_35;
  TNode<IntPtrT> phi_bb246_36;
  TNode<IntPtrT> phi_bb246_40;
  TNode<IntPtrT> phi_bb246_41;
  TNode<IntPtrT> tmp311;
  TNode<IntPtrT> tmp312;
  TNode<Union<HeapObject, TaggedIndex>> tmp313;
  TNode<IntPtrT> tmp314;
  if (block246.is_used()) {
    ca_.Bind(&block246, &phi_bb246_10, &phi_bb246_11, &phi_bb246_13, &phi_bb246_16, &phi_bb246_17, &phi_bb246_18, &phi_bb246_19, &phi_bb246_23, &phi_bb246_26, &phi_bb246_31, &phi_bb246_35, &phi_bb246_36, &phi_bb246_40, &phi_bb246_41);
    tmp311 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb246_41});
    tmp312 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp304}, TNode<IntPtrT>{tmp311});
    std::tie(tmp313, tmp314) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp303}, TNode<IntPtrT>{tmp312}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp313, tmp314}, tmp297);
    ca_.Goto(&block241, phi_bb246_10, phi_bb246_11, phi_bb246_13, tmp307, phi_bb246_16, phi_bb246_17, phi_bb246_18, phi_bb246_19, phi_bb246_23, phi_bb246_26);
  }

  TNode<IntPtrT> phi_bb247_10;
  TNode<BuiltinPtr> phi_bb247_11;
  TNode<FixedArray> phi_bb247_13;
  TNode<BoolT> phi_bb247_16;
  TNode<PrimitiveHeapObject> phi_bb247_17;
  TNode<UintPtrT> phi_bb247_18;
  TNode<IntPtrT> phi_bb247_19;
  TNode<IntPtrT> phi_bb247_23;
  TNode<IntPtrT> phi_bb247_26;
  TNode<FixedArray> phi_bb247_31;
  TNode<IntPtrT> phi_bb247_35;
  TNode<IntPtrT> phi_bb247_36;
  TNode<IntPtrT> phi_bb247_40;
  TNode<IntPtrT> phi_bb247_41;
  if (block247.is_used()) {
    ca_.Bind(&block247, &phi_bb247_10, &phi_bb247_11, &phi_bb247_13, &phi_bb247_16, &phi_bb247_17, &phi_bb247_18, &phi_bb247_19, &phi_bb247_23, &phi_bb247_26, &phi_bb247_31, &phi_bb247_35, &phi_bb247_36, &phi_bb247_40, &phi_bb247_41);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb240_10;
  TNode<BuiltinPtr> phi_bb240_11;
  TNode<FixedArray> phi_bb240_13;
  TNode<IntPtrT> phi_bb240_14;
  TNode<BoolT> phi_bb240_16;
  TNode<PrimitiveHeapObject> phi_bb240_17;
  TNode<UintPtrT> phi_bb240_18;
  TNode<IntPtrT> phi_bb240_19;
  TNode<IntPtrT> phi_bb240_23;
  TNode<IntPtrT> phi_bb240_26;
  TNode<IntPtrT> tmp315;
  TNode<IntPtrT> tmp316;
  TNode<BoolT> tmp317;
  if (block240.is_used()) {
    ca_.Bind(&block240, &phi_bb240_10, &phi_bb240_11, &phi_bb240_13, &phi_bb240_14, &phi_bb240_16, &phi_bb240_17, &phi_bb240_18, &phi_bb240_19, &phi_bb240_23, &phi_bb240_26);
    tmp315 = CodeStubAssembler(state_).CalculateNewElementsCapacity(TNode<IntPtrT>{tmp298});
    tmp316 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    tmp317 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{tmp315}, TNode<IntPtrT>{tmp316});
    ca_.Branch(tmp317, &block250, std::vector<compiler::Node*>{phi_bb240_10, phi_bb240_11, phi_bb240_13, phi_bb240_14, phi_bb240_16, phi_bb240_17, phi_bb240_18, phi_bb240_19, phi_bb240_23, phi_bb240_26}, &block251, std::vector<compiler::Node*>{phi_bb240_10, phi_bb240_11, phi_bb240_13, phi_bb240_14, phi_bb240_16, phi_bb240_17, phi_bb240_18, phi_bb240_19, phi_bb240_23, phi_bb240_26});
  }

  TNode<IntPtrT> phi_bb250_10;
  TNode<BuiltinPtr> phi_bb250_11;
  TNode<FixedArray> phi_bb250_13;
  TNode<IntPtrT> phi_bb250_14;
  TNode<BoolT> phi_bb250_16;
  TNode<PrimitiveHeapObject> phi_bb250_17;
  TNode<UintPtrT> phi_bb250_18;
  TNode<IntPtrT> phi_bb250_19;
  TNode<IntPtrT> phi_bb250_23;
  TNode<IntPtrT> phi_bb250_26;
  TNode<IntPtrT> tmp318;
  if (block250.is_used()) {
    ca_.Bind(&block250, &phi_bb250_10, &phi_bb250_11, &phi_bb250_13, &phi_bb250_14, &phi_bb250_16, &phi_bb250_17, &phi_bb250_18, &phi_bb250_19, &phi_bb250_23, &phi_bb250_26);
    tmp318 = FromConstexpr_intptr_constexpr_int31_0(state_, kMaxBufferChunkSize_0(state_));
    ca_.Goto(&block252, phi_bb250_10, phi_bb250_11, phi_bb250_13, phi_bb250_14, phi_bb250_16, phi_bb250_17, phi_bb250_18, phi_bb250_19, phi_bb250_23, phi_bb250_26, tmp318);
  }

  TNode<IntPtrT> phi_bb251_10;
  TNode<BuiltinPtr> phi_bb251_11;
  TNode<FixedArray> phi_bb251_13;
  TNode<IntPtrT> phi_bb251_14;
  TNode<BoolT> phi_bb251_16;
  TNode<PrimitiveHeapObject> phi_bb251_17;
  TNode<UintPtrT> phi_bb251_18;
  TNode<IntPtrT> phi_bb251_19;
  TNode<IntPtrT> phi_bb251_23;
  TNode<IntPtrT> phi_bb251_26;
  if (block251.is_used()) {
    ca_.Bind(&block251, &phi_bb251_10, &phi_bb251_11, &phi_bb251_13, &phi_bb251_14, &phi_bb251_16, &phi_bb251_17, &phi_bb251_18, &phi_bb251_19, &phi_bb251_23, &phi_bb251_26);
    ca_.Goto(&block252, phi_bb251_10, phi_bb251_11, phi_bb251_13, phi_bb251_14, phi_bb251_16, phi_bb251_17, phi_bb251_18, phi_bb251_19, phi_bb251_23, phi_bb251_26, tmp315);
  }

  TNode<IntPtrT> phi_bb252_10;
  TNode<BuiltinPtr> phi_bb252_11;
  TNode<FixedArray> phi_bb252_13;
  TNode<IntPtrT> phi_bb252_14;
  TNode<BoolT> phi_bb252_16;
  TNode<PrimitiveHeapObject> phi_bb252_17;
  TNode<UintPtrT> phi_bb252_18;
  TNode<IntPtrT> phi_bb252_19;
  TNode<IntPtrT> phi_bb252_23;
  TNode<IntPtrT> phi_bb252_26;
  TNode<IntPtrT> phi_bb252_32;
  TNode<IntPtrT> tmp319;
  TNode<BoolT> tmp320;
  if (block252.is_used()) {
    ca_.Bind(&block252, &phi_bb252_10, &phi_bb252_11, &phi_bb252_13, &phi_bb252_14, &phi_bb252_16, &phi_bb252_17, &phi_bb252_18, &phi_bb252_19, &phi_bb252_23, &phi_bb252_26, &phi_bb252_32);
    tmp319 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp320 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{phi_bb252_32}, TNode<IntPtrT>{tmp319});
    ca_.Branch(tmp320, &block254, std::vector<compiler::Node*>{phi_bb252_10, phi_bb252_11, phi_bb252_13, phi_bb252_14, phi_bb252_16, phi_bb252_17, phi_bb252_18, phi_bb252_19, phi_bb252_23, phi_bb252_26}, &block255, std::vector<compiler::Node*>{phi_bb252_10, phi_bb252_11, phi_bb252_13, phi_bb252_14, phi_bb252_16, phi_bb252_17, phi_bb252_18, phi_bb252_19, phi_bb252_23, phi_bb252_26});
  }

  TNode<IntPtrT> phi_bb255_10;
  TNode<BuiltinPtr> phi_bb255_11;
  TNode<FixedArray> phi_bb255_13;
  TNode<IntPtrT> phi_bb255_14;
  TNode<BoolT> phi_bb255_16;
  TNode<PrimitiveHeapObject> phi_bb255_17;
  TNode<UintPtrT> phi_bb255_18;
  TNode<IntPtrT> phi_bb255_19;
  TNode<IntPtrT> phi_bb255_23;
  TNode<IntPtrT> phi_bb255_26;
  if (block255.is_used()) {
    ca_.Bind(&block255, &phi_bb255_10, &phi_bb255_11, &phi_bb255_13, &phi_bb255_14, &phi_bb255_16, &phi_bb255_17, &phi_bb255_18, &phi_bb255_19, &phi_bb255_23, &phi_bb255_26);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 248});
      CodeStubAssembler(state_).FailAssert("Torque assert 'cappedNewChunkLength > 0' failed", pos_stack);
    }
  }

  TNode<IntPtrT> phi_bb254_10;
  TNode<BuiltinPtr> phi_bb254_11;
  TNode<FixedArray> phi_bb254_13;
  TNode<IntPtrT> phi_bb254_14;
  TNode<BoolT> phi_bb254_16;
  TNode<PrimitiveHeapObject> phi_bb254_17;
  TNode<UintPtrT> phi_bb254_18;
  TNode<IntPtrT> phi_bb254_19;
  TNode<IntPtrT> phi_bb254_23;
  TNode<IntPtrT> phi_bb254_26;
  TNode<FixedArray> tmp321;
  TNode<Union<HeapObject, TaggedIndex>> tmp322;
  TNode<IntPtrT> tmp323;
  TNode<IntPtrT> tmp324;
  TNode<UintPtrT> tmp325;
  TNode<IntPtrT> tmp326;
  TNode<UintPtrT> tmp327;
  TNode<UintPtrT> tmp328;
  TNode<BoolT> tmp329;
  if (block254.is_used()) {
    ca_.Bind(&block254, &phi_bb254_10, &phi_bb254_11, &phi_bb254_13, &phi_bb254_14, &phi_bb254_16, &phi_bb254_17, &phi_bb254_18, &phi_bb254_19, &phi_bb254_23, &phi_bb254_26);
    tmp321 = CodeStubAssembler(state_).AllocateZeroedFixedArray(TNode<IntPtrT>{phi_bb252_32});
    std::tie(tmp322, tmp323, tmp324) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{phi_bb254_13}).Flatten();
    tmp325 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp326 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp325});
    tmp327 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp326});
    tmp328 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp324});
    tmp329 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp327}, TNode<UintPtrT>{tmp328});
    ca_.Branch(tmp329, &block261, std::vector<compiler::Node*>{phi_bb254_10, phi_bb254_11, phi_bb254_13, phi_bb254_14, phi_bb254_16, phi_bb254_17, phi_bb254_18, phi_bb254_19, phi_bb254_23, phi_bb254_26, phi_bb254_13}, &block262, std::vector<compiler::Node*>{phi_bb254_10, phi_bb254_11, phi_bb254_13, phi_bb254_14, phi_bb254_16, phi_bb254_17, phi_bb254_18, phi_bb254_19, phi_bb254_23, phi_bb254_26, phi_bb254_13});
  }

  TNode<IntPtrT> phi_bb261_10;
  TNode<BuiltinPtr> phi_bb261_11;
  TNode<FixedArray> phi_bb261_13;
  TNode<IntPtrT> phi_bb261_14;
  TNode<BoolT> phi_bb261_16;
  TNode<PrimitiveHeapObject> phi_bb261_17;
  TNode<UintPtrT> phi_bb261_18;
  TNode<IntPtrT> phi_bb261_19;
  TNode<IntPtrT> phi_bb261_23;
  TNode<IntPtrT> phi_bb261_26;
  TNode<FixedArray> phi_bb261_34;
  TNode<IntPtrT> tmp330;
  TNode<IntPtrT> tmp331;
  TNode<Union<HeapObject, TaggedIndex>> tmp332;
  TNode<IntPtrT> tmp333;
  TNode<Union<HeapObject, TaggedIndex>> tmp334;
  TNode<IntPtrT> tmp335;
  TNode<IntPtrT> tmp336;
  TNode<UintPtrT> tmp337;
  TNode<IntPtrT> tmp338;
  TNode<UintPtrT> tmp339;
  TNode<UintPtrT> tmp340;
  TNode<BoolT> tmp341;
  if (block261.is_used()) {
    ca_.Bind(&block261, &phi_bb261_10, &phi_bb261_11, &phi_bb261_13, &phi_bb261_14, &phi_bb261_16, &phi_bb261_17, &phi_bb261_18, &phi_bb261_19, &phi_bb261_23, &phi_bb261_26, &phi_bb261_34);
    tmp330 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp326});
    tmp331 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp323}, TNode<IntPtrT>{tmp330});
    std::tie(tmp332, tmp333) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp322}, TNode<IntPtrT>{tmp331}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp332, tmp333}, tmp321);
    std::tie(tmp334, tmp335, tmp336) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp321}).Flatten();
    tmp337 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp338 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp337});
    tmp339 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp338});
    tmp340 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp336});
    tmp341 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp339}, TNode<UintPtrT>{tmp340});
    ca_.Branch(tmp341, &block270, std::vector<compiler::Node*>{phi_bb261_10, phi_bb261_11, phi_bb261_13, phi_bb261_14, phi_bb261_16, phi_bb261_17, phi_bb261_18, phi_bb261_19, phi_bb261_23, phi_bb261_26}, &block271, std::vector<compiler::Node*>{phi_bb261_10, phi_bb261_11, phi_bb261_13, phi_bb261_14, phi_bb261_16, phi_bb261_17, phi_bb261_18, phi_bb261_19, phi_bb261_23, phi_bb261_26});
  }

  TNode<IntPtrT> phi_bb262_10;
  TNode<BuiltinPtr> phi_bb262_11;
  TNode<FixedArray> phi_bb262_13;
  TNode<IntPtrT> phi_bb262_14;
  TNode<BoolT> phi_bb262_16;
  TNode<PrimitiveHeapObject> phi_bb262_17;
  TNode<UintPtrT> phi_bb262_18;
  TNode<IntPtrT> phi_bb262_19;
  TNode<IntPtrT> phi_bb262_23;
  TNode<IntPtrT> phi_bb262_26;
  TNode<FixedArray> phi_bb262_34;
  if (block262.is_used()) {
    ca_.Bind(&block262, &phi_bb262_10, &phi_bb262_11, &phi_bb262_13, &phi_bb262_14, &phi_bb262_16, &phi_bb262_17, &phi_bb262_18, &phi_bb262_19, &phi_bb262_23, &phi_bb262_26, &phi_bb262_34);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb270_10;
  TNode<BuiltinPtr> phi_bb270_11;
  TNode<FixedArray> phi_bb270_13;
  TNode<IntPtrT> phi_bb270_14;
  TNode<BoolT> phi_bb270_16;
  TNode<PrimitiveHeapObject> phi_bb270_17;
  TNode<UintPtrT> phi_bb270_18;
  TNode<IntPtrT> phi_bb270_19;
  TNode<IntPtrT> phi_bb270_23;
  TNode<IntPtrT> phi_bb270_26;
  TNode<IntPtrT> tmp342;
  TNode<IntPtrT> tmp343;
  TNode<Union<HeapObject, TaggedIndex>> tmp344;
  TNode<IntPtrT> tmp345;
  TNode<Undefined> tmp346;
  TNode<Union<HeapObject, TaggedIndex>> tmp347;
  TNode<IntPtrT> tmp348;
  TNode<IntPtrT> tmp349;
  TNode<UintPtrT> tmp350;
  TNode<IntPtrT> tmp351;
  TNode<UintPtrT> tmp352;
  TNode<UintPtrT> tmp353;
  TNode<BoolT> tmp354;
  if (block270.is_used()) {
    ca_.Bind(&block270, &phi_bb270_10, &phi_bb270_11, &phi_bb270_13, &phi_bb270_14, &phi_bb270_16, &phi_bb270_17, &phi_bb270_18, &phi_bb270_19, &phi_bb270_23, &phi_bb270_26);
    tmp342 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp338});
    tmp343 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp335}, TNode<IntPtrT>{tmp342});
    std::tie(tmp344, tmp345) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp334}, TNode<IntPtrT>{tmp343}).Flatten();
    tmp346 = Undefined_0(state_);
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp344, tmp345}, tmp346);
    std::tie(tmp347, tmp348, tmp349) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp321}).Flatten();
    tmp350 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp351 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp350});
    tmp352 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp351});
    tmp353 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp349});
    tmp354 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp352}, TNode<UintPtrT>{tmp353});
    ca_.Branch(tmp354, &block279, std::vector<compiler::Node*>{phi_bb270_10, phi_bb270_11, phi_bb270_13, phi_bb270_14, phi_bb270_16, phi_bb270_17, phi_bb270_18, phi_bb270_19, phi_bb270_23, phi_bb270_26}, &block280, std::vector<compiler::Node*>{phi_bb270_10, phi_bb270_11, phi_bb270_13, phi_bb270_14, phi_bb270_16, phi_bb270_17, phi_bb270_18, phi_bb270_19, phi_bb270_23, phi_bb270_26});
  }

  TNode<IntPtrT> phi_bb271_10;
  TNode<BuiltinPtr> phi_bb271_11;
  TNode<FixedArray> phi_bb271_13;
  TNode<IntPtrT> phi_bb271_14;
  TNode<BoolT> phi_bb271_16;
  TNode<PrimitiveHeapObject> phi_bb271_17;
  TNode<UintPtrT> phi_bb271_18;
  TNode<IntPtrT> phi_bb271_19;
  TNode<IntPtrT> phi_bb271_23;
  TNode<IntPtrT> phi_bb271_26;
  if (block271.is_used()) {
    ca_.Bind(&block271, &phi_bb271_10, &phi_bb271_11, &phi_bb271_13, &phi_bb271_14, &phi_bb271_16, &phi_bb271_17, &phi_bb271_18, &phi_bb271_19, &phi_bb271_23, &phi_bb271_26);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb279_10;
  TNode<BuiltinPtr> phi_bb279_11;
  TNode<FixedArray> phi_bb279_13;
  TNode<IntPtrT> phi_bb279_14;
  TNode<BoolT> phi_bb279_16;
  TNode<PrimitiveHeapObject> phi_bb279_17;
  TNode<UintPtrT> phi_bb279_18;
  TNode<IntPtrT> phi_bb279_19;
  TNode<IntPtrT> phi_bb279_23;
  TNode<IntPtrT> phi_bb279_26;
  TNode<IntPtrT> tmp355;
  TNode<IntPtrT> tmp356;
  TNode<Union<HeapObject, TaggedIndex>> tmp357;
  TNode<IntPtrT> tmp358;
  TNode<IntPtrT> tmp359;
  if (block279.is_used()) {
    ca_.Bind(&block279, &phi_bb279_10, &phi_bb279_11, &phi_bb279_13, &phi_bb279_14, &phi_bb279_16, &phi_bb279_17, &phi_bb279_18, &phi_bb279_19, &phi_bb279_23, &phi_bb279_26);
    tmp355 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp351});
    tmp356 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp348}, TNode<IntPtrT>{tmp355});
    std::tie(tmp357, tmp358) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp347}, TNode<IntPtrT>{tmp356}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp357, tmp358}, tmp297);
    tmp359 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    ca_.Goto(&block241, phi_bb279_10, phi_bb279_11, tmp321, tmp359, phi_bb279_16, phi_bb279_17, phi_bb279_18, phi_bb279_19, phi_bb279_23, phi_bb279_26);
  }

  TNode<IntPtrT> phi_bb280_10;
  TNode<BuiltinPtr> phi_bb280_11;
  TNode<FixedArray> phi_bb280_13;
  TNode<IntPtrT> phi_bb280_14;
  TNode<BoolT> phi_bb280_16;
  TNode<PrimitiveHeapObject> phi_bb280_17;
  TNode<UintPtrT> phi_bb280_18;
  TNode<IntPtrT> phi_bb280_19;
  TNode<IntPtrT> phi_bb280_23;
  TNode<IntPtrT> phi_bb280_26;
  if (block280.is_used()) {
    ca_.Bind(&block280, &phi_bb280_10, &phi_bb280_11, &phi_bb280_13, &phi_bb280_14, &phi_bb280_16, &phi_bb280_17, &phi_bb280_18, &phi_bb280_19, &phi_bb280_23, &phi_bb280_26);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb241_10;
  TNode<BuiltinPtr> phi_bb241_11;
  TNode<FixedArray> phi_bb241_13;
  TNode<IntPtrT> phi_bb241_14;
  TNode<BoolT> phi_bb241_16;
  TNode<PrimitiveHeapObject> phi_bb241_17;
  TNode<UintPtrT> phi_bb241_18;
  TNode<IntPtrT> phi_bb241_19;
  TNode<IntPtrT> phi_bb241_23;
  TNode<IntPtrT> phi_bb241_26;
  TNode<Null> tmp360;
  if (block241.is_used()) {
    ca_.Bind(&block241, &phi_bb241_10, &phi_bb241_11, &phi_bb241_13, &phi_bb241_14, &phi_bb241_16, &phi_bb241_17, &phi_bb241_18, &phi_bb241_19, &phi_bb241_23, &phi_bb241_26);
    tmp360 = Null_0(state_);
    ca_.Goto(&block233, phi_bb241_10, phi_bb241_11, phi_bb241_13, phi_bb241_14, phi_bb241_16, tmp360, phi_bb241_18, phi_bb241_19, phi_bb241_23, phi_bb241_26);
  }

  TNode<IntPtrT> phi_bb233_10;
  TNode<BuiltinPtr> phi_bb233_11;
  TNode<FixedArray> phi_bb233_13;
  TNode<IntPtrT> phi_bb233_14;
  TNode<BoolT> phi_bb233_16;
  TNode<PrimitiveHeapObject> phi_bb233_17;
  TNode<UintPtrT> phi_bb233_18;
  TNode<IntPtrT> phi_bb233_19;
  TNode<IntPtrT> phi_bb233_23;
  TNode<IntPtrT> phi_bb233_26;
  if (block233.is_used()) {
    ca_.Bind(&block233, &phi_bb233_10, &phi_bb233_11, &phi_bb233_13, &phi_bb233_14, &phi_bb233_16, &phi_bb233_17, &phi_bb233_18, &phi_bb233_19, &phi_bb233_23, &phi_bb233_26);
    ca_.Goto(&block226, phi_bb233_10, phi_bb233_11, phi_bb233_13, phi_bb233_14, tmp296, phi_bb233_16, phi_bb233_17, phi_bb233_18, phi_bb233_19, phi_bb233_23);
  }

  TNode<IntPtrT> phi_bb226_10;
  TNode<BuiltinPtr> phi_bb226_11;
  TNode<FixedArray> phi_bb226_13;
  TNode<IntPtrT> phi_bb226_14;
  TNode<IntPtrT> phi_bb226_15;
  TNode<BoolT> phi_bb226_16;
  TNode<PrimitiveHeapObject> phi_bb226_17;
  TNode<UintPtrT> phi_bb226_18;
  TNode<IntPtrT> phi_bb226_19;
  TNode<IntPtrT> phi_bb226_23;
  TNode<String> tmp361;
  if (block226.is_used()) {
    ca_.Bind(&block226, &phi_bb226_10, &phi_bb226_11, &phi_bb226_13, &phi_bb226_14, &phi_bb226_15, &phi_bb226_16, &phi_bb226_17, &phi_bb226_18, &phi_bb226_19, &phi_bb226_23);
    tmp361 = BufferJoin_0(state_, TNode<Context>{p_context}, TorqueStructBuffer_0{TNode<FixedArray>{tmp5}, TNode<FixedArray>{phi_bb226_13}, TNode<IntPtrT>{phi_bb226_14}, TNode<IntPtrT>{phi_bb226_15}, TNode<BoolT>{phi_bb226_16}, TNode<PrimitiveHeapObject>{phi_bb226_17}}, TNode<String>{p_sep});
    ca_.Goto(&block283);
  }

    ca_.Bind(&block283);
  return TNode<String>{tmp361};
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=684&c=16
TorqueStructReference_FixedArray_OR_Undefined_0 NativeContextSlot_Context_FixedArray_OR_Undefined_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<IntPtrT> p_index) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Union<HeapObject, TaggedIndex>> tmp0;
  TNode<IntPtrT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    std::tie(tmp0, tmp1) = NativeContextSlot_FixedArray_OR_Undefined_0(state_, TNode<Context>{p_context}, TNode<IntPtrT>{p_index}).Flatten();
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TorqueStructReference_FixedArray_OR_Undefined_0{TNode<Union<HeapObject, TaggedIndex>>{tmp0}, TNode<IntPtrT>{tmp1}, TorqueStructUnsafe_0{}};
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=720&c=7
TNode<FixedArray> StoreAndGrowFixedArray_JSReceiver_0(compiler::CodeAssemblerState* state_, TNode<FixedArray> p_fixedArray, TNode<IntPtrT> p_index, TNode<JSReceiver> p_element) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<FixedArray> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{p_fixedArray});
    tmp1 = CodeStubAssembler(state_).IntPtrLessThanOrEqual(TNode<IntPtrT>{p_index}, TNode<IntPtrT>{tmp0});
    ca_.Branch(tmp1, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 159});
      CodeStubAssembler(state_).FailAssert("Torque assert 'index <= length' failed", pos_stack);
    }
  }

  TNode<BoolT> tmp2;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp2 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{p_index}, TNode<IntPtrT>{tmp0});
    ca_.Branch(tmp2, &block4, std::vector<compiler::Node*>{}, &block5, std::vector<compiler::Node*>{});
  }

  TNode<Union<HeapObject, TaggedIndex>> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<UintPtrT> tmp6;
  TNode<UintPtrT> tmp7;
  TNode<BoolT> tmp8;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    std::tie(tmp3, tmp4, tmp5) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{p_fixedArray}).Flatten();
    tmp6 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{p_index});
    tmp7 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp5});
    tmp8 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp6}, TNode<UintPtrT>{tmp7});
    ca_.Branch(tmp8, &block11, std::vector<compiler::Node*>{}, &block12, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp9;
  TNode<IntPtrT> tmp10;
  TNode<Union<HeapObject, TaggedIndex>> tmp11;
  TNode<IntPtrT> tmp12;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp9 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{p_index});
    tmp10 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp4}, TNode<IntPtrT>{tmp9});
    std::tie(tmp11, tmp12) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp3}, TNode<IntPtrT>{tmp10}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp11, tmp12}, p_element);
    ca_.Goto(&block1, p_fixedArray);
  }

  if (block12.is_used()) {
    ca_.Bind(&block12);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> tmp13;
  TNode<BoolT> tmp14;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp13 = CodeStubAssembler(state_).CalculateNewElementsCapacity(TNode<IntPtrT>{tmp0});
    tmp14 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{p_index}, TNode<IntPtrT>{tmp13});
    ca_.Branch(tmp14, &block15, std::vector<compiler::Node*>{}, &block16, std::vector<compiler::Node*>{});
  }

  if (block16.is_used()) {
    ca_.Bind(&block16);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/array-join.tq", 166});
      CodeStubAssembler(state_).FailAssert("Torque assert 'index < newLength' failed", pos_stack);
    }
  }

  TNode<TheHole> tmp15;
  TNode<IntPtrT> tmp16;
  TNode<FixedArray> tmp17;
  TNode<Union<HeapObject, TaggedIndex>> tmp18;
  TNode<IntPtrT> tmp19;
  TNode<IntPtrT> tmp20;
  TNode<UintPtrT> tmp21;
  TNode<UintPtrT> tmp22;
  TNode<BoolT> tmp23;
  if (block15.is_used()) {
    ca_.Bind(&block15);
    tmp15 = TheHole_0(state_);
    tmp16 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp17 = ExtractFixedArray_0(state_, TNode<FixedArray>{p_fixedArray}, TNode<IntPtrT>{tmp16}, TNode<IntPtrT>{tmp0}, TNode<IntPtrT>{tmp13}, TNode<Hole>{tmp15});
    std::tie(tmp18, tmp19, tmp20) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp17}).Flatten();
    tmp21 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{p_index});
    tmp22 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp20});
    tmp23 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp21}, TNode<UintPtrT>{tmp22});
    ca_.Branch(tmp23, &block21, std::vector<compiler::Node*>{}, &block22, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp24;
  TNode<IntPtrT> tmp25;
  TNode<Union<HeapObject, TaggedIndex>> tmp26;
  TNode<IntPtrT> tmp27;
  if (block21.is_used()) {
    ca_.Bind(&block21);
    tmp24 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{p_index});
    tmp25 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp19}, TNode<IntPtrT>{tmp24});
    std::tie(tmp26, tmp27) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp18}, TNode<IntPtrT>{tmp25}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp26, tmp27}, p_element);
    ca_.Goto(&block1, tmp17);
  }

  if (block22.is_used()) {
    ca_.Bind(&block22);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<FixedArray> phi_bb1_3;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_3);
    ca_.Goto(&block25, phi_bb1_3);
  }

  TNode<FixedArray> phi_bb25_3;
    ca_.Bind(&block25, &phi_bb25_3);
  return TNode<FixedArray>{phi_bb25_3};
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=924&c=10
TNode<JSAny> CycleProtectedArrayJoin_JSArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, bool p_useToLocaleString, TNode<JSReceiver> p_o, TNode<Number> p_len, TNode<String> p_sep, TNode<JSAny> p_locales, TNode<JSAny> p_options) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block29(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block30(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny, Union<JSMessageObject, TheHole>> block28(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).LoadStringLengthAsWord(TNode<String>{p_sep});
    tmp1 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp2 = CodeStubAssembler(state_).IntPtrGreaterThanOrEqual(TNode<IntPtrT>{tmp0}, TNode<IntPtrT>{tmp1});
    ca_.Branch(tmp2, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  TNode<Smi> tmp3;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    compiler::CodeAssemblerLabel label4(&ca_);
    tmp3 = Cast_Smi_0(state_, TNode<Object>{p_len}, &label4);
    ca_.Goto(&block6);
    if (label4.is_used()) {
      ca_.Bind(&label4);
      ca_.Goto(&block7);
    }
  }

  TNode<UintPtrT> tmp5;
  TNode<UintPtrT> tmp6;
  TNode<BoolT> tmp7;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp5 = Convert_uintptr_constexpr_int31_0(state_, String::kMaxLength);
    tmp6 = FromConstexpr_uintptr_constexpr_uintptr_0(state_, kSmiMaxValue);
    tmp7 = CodeStubAssembler(state_).UintPtrGreaterThan(TNode<UintPtrT>{tmp6}, TNode<UintPtrT>{tmp5});
    CodeStubAssembler(state_).StaticAssert(TNode<BoolT>{tmp7}, "static_assert(kSmiMaxValue > Convert<uintptr>(kStringMaxLength)) at https://crsrc.org/c/v8/src/builtins/array-join.tq?l=820&c=9");
    CodeStubAssembler(state_).CallRuntime(Runtime::kThrowInvalidStringLength, p_context);
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Int32T> tmp8;
  TNode<Int32T> tmp9;
  TNode<BoolT> tmp10;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp8 = Convert_int32_Smi_0(state_, TNode<Smi>{tmp3});
    tmp9 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp10 = CodeStubAssembler(state_).Int32GreaterThan(TNode<Int32T>{tmp8}, TNode<Int32T>{tmp9});
    ca_.Branch(tmp10, &block8, std::vector<compiler::Node*>{}, &block9, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp11;
  TNode<BoolT> tmp12;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp11 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp12 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{tmp0}, TNode<IntPtrT>{tmp11});
    ca_.Branch(tmp12, &block14, std::vector<compiler::Node*>{}, &block15, std::vector<compiler::Node*>{});
  }

  TNode<Number> tmp13;
  TNode<Number> tmp14;
  TNode<Number> tmp15;
  TNode<BoolT> tmp16;
  if (block14.is_used()) {
    ca_.Bind(&block14);
    tmp13 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp14 = CodeStubAssembler(state_).NumberSub(TNode<Number>{p_len}, TNode<Number>{tmp13});
    tmp15 = FromConstexpr_Number_constexpr_int31_0(state_, String::kMaxLength);
    tmp16 = NumberIsGreaterThan_0(state_, TNode<Number>{tmp14}, TNode<Number>{tmp15});
    ca_.Goto(&block16, tmp16);
  }

  TNode<BoolT> tmp17;
  if (block15.is_used()) {
    ca_.Bind(&block15);
    tmp17 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block16, tmp17);
  }

  TNode<BoolT> phi_bb16_11;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_11);
    ca_.Branch(phi_bb16_11, &block12, std::vector<compiler::Node*>{}, &block13, std::vector<compiler::Node*>{});
  }

  if (block12.is_used()) {
    ca_.Bind(&block12);
    ca_.Goto(&block11);
  }

  TNode<Int32T> tmp18;
  TNode<Int32T> tmp19;
  TNode<Int32T> tmp20;
  TNode<Int32T> tmp21;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    tmp18 = Convert_int32_intptr_0(state_, TNode<IntPtrT>{tmp0});
    tmp19 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp20 = CodeStubAssembler(state_).Int32Sub(TNode<Int32T>{tmp8}, TNode<Int32T>{tmp19});
    compiler::CodeAssemblerLabel label22(&ca_);
    tmp21 = CodeStubAssembler(state_).TryInt32Mul(TNode<Int32T>{tmp20}, TNode<Int32T>{tmp18}, &label22);
    ca_.Goto(&block17);
    if (label22.is_used()) {
      ca_.Bind(&label22);
      ca_.Goto(&block18);
    }
  }

  if (block18.is_used()) {
    ca_.Bind(&block18);
    ca_.Goto(&block11);
  }

  TNode<Int32T> tmp23;
  TNode<BoolT> tmp24;
  if (block17.is_used()) {
    ca_.Bind(&block17);
    tmp23 = Convert_int32_constexpr_int31_0(state_, String::kMaxLength);
    tmp24 = CodeStubAssembler(state_).Int32GreaterThan(TNode<Int32T>{tmp21}, TNode<Int32T>{tmp23});
    ca_.Branch(tmp24, &block19, std::vector<compiler::Node*>{}, &block20, std::vector<compiler::Node*>{});
  }

  if (block19.is_used()) {
    ca_.Bind(&block19);
    ca_.Goto(&block11);
  }

  if (block20.is_used()) {
    ca_.Bind(&block20);
    ca_.Goto(&block9);
  }

  if (block11.is_used()) {
    ca_.Bind(&block11);
    CodeStubAssembler(state_).CallRuntime(Runtime::kThrowInvalidStringLength, p_context);
    CodeStubAssembler(state_).Unreachable();
  }

  if (block9.is_used()) {
    ca_.Bind(&block9);
    ca_.Goto(&block3);
  }

  TNode<Number> tmp25;
  TNode<BoolT> tmp26;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp25 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp26 = NumberIsGreaterThan_0(state_, TNode<Number>{p_len}, TNode<Number>{tmp25});
    ca_.Branch(tmp26, &block23, std::vector<compiler::Node*>{}, &block24, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp27;
  if (block23.is_used()) {
    ca_.Bind(&block23);
    tmp27 = JoinStackPushInline_0(state_, TNode<Context>{p_context}, TNode<JSReceiver>{p_o});
    ca_.Goto(&block25, tmp27);
  }

  TNode<BoolT> tmp28;
  if (block24.is_used()) {
    ca_.Bind(&block24);
    tmp28 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block25, tmp28);
  }

  TNode<BoolT> phi_bb25_8;
  if (block25.is_used()) {
    ca_.Bind(&block25, &phi_bb25_8);
    ca_.Branch(phi_bb25_8, &block21, std::vector<compiler::Node*>{}, &block22, std::vector<compiler::Node*>{});
  }

  TNode<JSAny> tmp29;
      TNode<JSAny> tmp31;
      TNode<JSAny> tmp33;
  if (block21.is_used()) {
    ca_.Bind(&block21);
    compiler::CodeAssemblerExceptionHandlerLabel catch30__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch30__label);
    tmp29 = ArrayJoin_JSArray_0(state_, TNode<Context>{p_context}, p_useToLocaleString, TNode<JSReceiver>{p_o}, TNode<String>{p_sep}, TNode<Number>{p_len}, TNode<JSAny>{p_locales}, TNode<JSAny>{p_options});
    }
    if (catch30__label.is_used()) {
      compiler::CodeAssemblerLabel catch30_skip(&ca_);
      ca_.Goto(&catch30_skip);
      ca_.Bind(&catch30__label, &tmp31);
      ca_.Goto(&block29);
      ca_.Bind(&catch30_skip);
    }
    compiler::CodeAssemblerExceptionHandlerLabel catch32__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch32__label);
    JoinStackPopInline_0(state_, TNode<Context>{p_context}, TNode<JSReceiver>{p_o});
    }
    if (catch32__label.is_used()) {
      compiler::CodeAssemblerLabel catch32_skip(&ca_);
      ca_.Goto(&catch32_skip);
      ca_.Bind(&catch32__label, &tmp33);
      ca_.Goto(&block30);
      ca_.Bind(&catch32_skip);
    }
    ca_.Goto(&block1, tmp29);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp34;
  if (block29.is_used()) {
    ca_.Bind(&block29);
    tmp34 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block28, tmp31, tmp34);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp35;
  if (block30.is_used()) {
    ca_.Bind(&block30);
    tmp35 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block28, tmp33, tmp35);
  }

  TNode<JSAny> phi_bb28_7;
  TNode<Union<JSMessageObject, TheHole>> phi_bb28_8;
  if (block28.is_used()) {
    ca_.Bind(&block28, &phi_bb28_7, &phi_bb28_8);
    JoinStackPopInline_0(state_, TNode<Context>{p_context}, TNode<JSReceiver>{p_o});
    CodeStubAssembler(state_).CallRuntime(Runtime::kReThrowWithMessage, p_context, phi_bb28_7, phi_bb28_8);
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> tmp36;
  if (block22.is_used()) {
    ca_.Bind(&block22);
    tmp36 = kEmptyString_0(state_);
    ca_.Goto(&block1, tmp36);
  }

  TNode<JSAny> phi_bb1_6;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_6);
    ca_.Goto(&block31);
  }

    ca_.Bind(&block31);
  return TNode<JSAny>{phi_bb1_6};
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=1011&c=10
TNode<JSAny> CycleProtectedArrayJoin_JSTypedArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, bool p_useToLocaleString, TNode<JSReceiver> p_o, TNode<Number> p_len, TNode<String> p_sep, TNode<JSAny> p_locales, TNode<JSAny> p_options) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block29(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block30(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny, Union<JSMessageObject, TheHole>> block28(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).LoadStringLengthAsWord(TNode<String>{p_sep});
    tmp1 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp2 = CodeStubAssembler(state_).IntPtrGreaterThanOrEqual(TNode<IntPtrT>{tmp0}, TNode<IntPtrT>{tmp1});
    ca_.Branch(tmp2, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  TNode<Smi> tmp3;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    compiler::CodeAssemblerLabel label4(&ca_);
    tmp3 = Cast_Smi_0(state_, TNode<Object>{p_len}, &label4);
    ca_.Goto(&block6);
    if (label4.is_used()) {
      ca_.Bind(&label4);
      ca_.Goto(&block7);
    }
  }

  TNode<UintPtrT> tmp5;
  TNode<UintPtrT> tmp6;
  TNode<BoolT> tmp7;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp5 = Convert_uintptr_constexpr_int31_0(state_, String::kMaxLength);
    tmp6 = FromConstexpr_uintptr_constexpr_uintptr_0(state_, kSmiMaxValue);
    tmp7 = CodeStubAssembler(state_).UintPtrGreaterThan(TNode<UintPtrT>{tmp6}, TNode<UintPtrT>{tmp5});
    CodeStubAssembler(state_).StaticAssert(TNode<BoolT>{tmp7}, "static_assert(kSmiMaxValue > Convert<uintptr>(kStringMaxLength)) at https://crsrc.org/c/v8/src/builtins/array-join.tq?l=820&c=9");
    CodeStubAssembler(state_).CallRuntime(Runtime::kThrowInvalidStringLength, p_context);
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Int32T> tmp8;
  TNode<Int32T> tmp9;
  TNode<BoolT> tmp10;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp8 = Convert_int32_Smi_0(state_, TNode<Smi>{tmp3});
    tmp9 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp10 = CodeStubAssembler(state_).Int32GreaterThan(TNode<Int32T>{tmp8}, TNode<Int32T>{tmp9});
    ca_.Branch(tmp10, &block8, std::vector<compiler::Node*>{}, &block9, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp11;
  TNode<BoolT> tmp12;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp11 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp12 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{tmp0}, TNode<IntPtrT>{tmp11});
    ca_.Branch(tmp12, &block14, std::vector<compiler::Node*>{}, &block15, std::vector<compiler::Node*>{});
  }

  TNode<Number> tmp13;
  TNode<Number> tmp14;
  TNode<Number> tmp15;
  TNode<BoolT> tmp16;
  if (block14.is_used()) {
    ca_.Bind(&block14);
    tmp13 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp14 = CodeStubAssembler(state_).NumberSub(TNode<Number>{p_len}, TNode<Number>{tmp13});
    tmp15 = FromConstexpr_Number_constexpr_int31_0(state_, String::kMaxLength);
    tmp16 = NumberIsGreaterThan_0(state_, TNode<Number>{tmp14}, TNode<Number>{tmp15});
    ca_.Goto(&block16, tmp16);
  }

  TNode<BoolT> tmp17;
  if (block15.is_used()) {
    ca_.Bind(&block15);
    tmp17 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block16, tmp17);
  }

  TNode<BoolT> phi_bb16_11;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_11);
    ca_.Branch(phi_bb16_11, &block12, std::vector<compiler::Node*>{}, &block13, std::vector<compiler::Node*>{});
  }

  if (block12.is_used()) {
    ca_.Bind(&block12);
    ca_.Goto(&block11);
  }

  TNode<Int32T> tmp18;
  TNode<Int32T> tmp19;
  TNode<Int32T> tmp20;
  TNode<Int32T> tmp21;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    tmp18 = Convert_int32_intptr_0(state_, TNode<IntPtrT>{tmp0});
    tmp19 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp20 = CodeStubAssembler(state_).Int32Sub(TNode<Int32T>{tmp8}, TNode<Int32T>{tmp19});
    compiler::CodeAssemblerLabel label22(&ca_);
    tmp21 = CodeStubAssembler(state_).TryInt32Mul(TNode<Int32T>{tmp20}, TNode<Int32T>{tmp18}, &label22);
    ca_.Goto(&block17);
    if (label22.is_used()) {
      ca_.Bind(&label22);
      ca_.Goto(&block18);
    }
  }

  if (block18.is_used()) {
    ca_.Bind(&block18);
    ca_.Goto(&block11);
  }

  TNode<Int32T> tmp23;
  TNode<BoolT> tmp24;
  if (block17.is_used()) {
    ca_.Bind(&block17);
    tmp23 = Convert_int32_constexpr_int31_0(state_, String::kMaxLength);
    tmp24 = CodeStubAssembler(state_).Int32GreaterThan(TNode<Int32T>{tmp21}, TNode<Int32T>{tmp23});
    ca_.Branch(tmp24, &block19, std::vector<compiler::Node*>{}, &block20, std::vector<compiler::Node*>{});
  }

  if (block19.is_used()) {
    ca_.Bind(&block19);
    ca_.Goto(&block11);
  }

  if (block20.is_used()) {
    ca_.Bind(&block20);
    ca_.Goto(&block9);
  }

  if (block11.is_used()) {
    ca_.Bind(&block11);
    CodeStubAssembler(state_).CallRuntime(Runtime::kThrowInvalidStringLength, p_context);
    CodeStubAssembler(state_).Unreachable();
  }

  if (block9.is_used()) {
    ca_.Bind(&block9);
    ca_.Goto(&block3);
  }

  TNode<Number> tmp25;
  TNode<BoolT> tmp26;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp25 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp26 = NumberIsGreaterThan_0(state_, TNode<Number>{p_len}, TNode<Number>{tmp25});
    ca_.Branch(tmp26, &block23, std::vector<compiler::Node*>{}, &block24, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp27;
  if (block23.is_used()) {
    ca_.Bind(&block23);
    tmp27 = JoinStackPushInline_0(state_, TNode<Context>{p_context}, TNode<JSReceiver>{p_o});
    ca_.Goto(&block25, tmp27);
  }

  TNode<BoolT> tmp28;
  if (block24.is_used()) {
    ca_.Bind(&block24);
    tmp28 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block25, tmp28);
  }

  TNode<BoolT> phi_bb25_8;
  if (block25.is_used()) {
    ca_.Bind(&block25, &phi_bb25_8);
    ca_.Branch(phi_bb25_8, &block21, std::vector<compiler::Node*>{}, &block22, std::vector<compiler::Node*>{});
  }

  TNode<JSAny> tmp29;
      TNode<JSAny> tmp31;
      TNode<JSAny> tmp33;
  if (block21.is_used()) {
    ca_.Bind(&block21);
    compiler::CodeAssemblerExceptionHandlerLabel catch30__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch30__label);
    tmp29 = ArrayJoin_JSTypedArray_0(state_, TNode<Context>{p_context}, p_useToLocaleString, TNode<JSReceiver>{p_o}, TNode<String>{p_sep}, TNode<Number>{p_len}, TNode<JSAny>{p_locales}, TNode<JSAny>{p_options});
    }
    if (catch30__label.is_used()) {
      compiler::CodeAssemblerLabel catch30_skip(&ca_);
      ca_.Goto(&catch30_skip);
      ca_.Bind(&catch30__label, &tmp31);
      ca_.Goto(&block29);
      ca_.Bind(&catch30_skip);
    }
    compiler::CodeAssemblerExceptionHandlerLabel catch32__label(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    { compiler::ScopedExceptionHandler s(&ca_, &catch32__label);
    JoinStackPopInline_0(state_, TNode<Context>{p_context}, TNode<JSReceiver>{p_o});
    }
    if (catch32__label.is_used()) {
      compiler::CodeAssemblerLabel catch32_skip(&ca_);
      ca_.Goto(&catch32_skip);
      ca_.Bind(&catch32__label, &tmp33);
      ca_.Goto(&block30);
      ca_.Bind(&catch32_skip);
    }
    ca_.Goto(&block1, tmp29);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp34;
  if (block29.is_used()) {
    ca_.Bind(&block29);
    tmp34 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block28, tmp31, tmp34);
  }

  TNode<Union<JSMessageObject, TheHole>> tmp35;
  if (block30.is_used()) {
    ca_.Bind(&block30);
    tmp35 = GetAndResetPendingMessage_0(state_);
    ca_.Goto(&block28, tmp33, tmp35);
  }

  TNode<JSAny> phi_bb28_7;
  TNode<Union<JSMessageObject, TheHole>> phi_bb28_8;
  if (block28.is_used()) {
    ca_.Bind(&block28, &phi_bb28_7, &phi_bb28_8);
    JoinStackPopInline_0(state_, TNode<Context>{p_context}, TNode<JSReceiver>{p_o});
    CodeStubAssembler(state_).CallRuntime(Runtime::kReThrowWithMessage, p_context, phi_bb28_7, phi_bb28_8);
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> tmp36;
  if (block22.is_used()) {
    ca_.Bind(&block22);
    tmp36 = kEmptyString_0(state_);
    ca_.Goto(&block1, tmp36);
  }

  TNode<JSAny> phi_bb1_6;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_6);
    ca_.Goto(&block31);
  }

    ca_.Bind(&block31);
  return TNode<JSAny>{phi_bb1_6};
}

// https://crsrc.org/c/v8/src/builtins/array-join.tq?l=820&c=38
TNode<UintPtrT> Convert_uintptr_constexpr_int31_0(compiler::CodeAssemblerState* state_, int31_t p_i) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<UintPtrT> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_uintptr_constexpr_int31_0(state_, p_i);
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TNode<UintPtrT>{tmp0};
}

} // namespace internal
} // namespace v8
