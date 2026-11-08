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
#include "torque-generated/src/builtins/wasm-tq-csa.h"
#include "torque-generated/src/builtins/array-copywithin-tq-csa.h"
#include "torque-generated/src/builtins/array-every-tq-csa.h"
#include "torque-generated/src/builtins/array-findindex-tq-csa.h"
#include "torque-generated/src/builtins/array-flat-tq-csa.h"
#include "torque-generated/src/builtins/array-splice-tq-csa.h"
#include "torque-generated/src/builtins/array-tq-csa.h"
#include "torque-generated/src/builtins/base-tq-csa.h"
#include "torque-generated/src/builtins/builtins-string-tq-csa.h"
#include "torque-generated/src/builtins/cast-tq-csa.h"
#include "torque-generated/src/builtins/convert-tq-csa.h"
#include "torque-generated/src/builtins/frames-tq-csa.h"
#include "torque-generated/src/builtins/ic-tq-csa.h"
#include "torque-generated/src/builtins/number-tq-csa.h"
#include "torque-generated/src/builtins/promise-abstract-operations-tq-csa.h"
#include "torque-generated/src/builtins/torque-internal-tq-csa.h"
#include "torque-generated/src/objects/contexts-tq-csa.h"
#include "torque-generated/src/objects/fixed-array-base-tq-csa.h"
#include "torque-generated/src/objects/fixed-array-tq-csa.h"
#include "torque-generated/src/objects/fixed-primitive-array-tq-csa.h"
#include "torque-generated/src/objects/js-array-tq-csa.h"
#include "torque-generated/src/objects/name-tq-csa.h"
#include "torque-generated/src/objects/string-tq-csa.h"
#include "torque-generated/src/objects/intl-objects-tq-csa.h"
#include "torque-generated/src/builtins/js-to-wasm-tq-csa.h"
#include "torque-generated/src/builtins/wasm-tq-csa.h"
#include "torque-generated/src/wasm/wasm-objects-tq-csa.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=120&c=1
TNode<Int32T> NumberToInt32_0(compiler::CodeAssemblerState* state_, TNode<Number> p_input) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Int32T> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Convert_int32_Number_0(state_, TNode<Number>{p_input});
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TNode<Int32T>{tmp0};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=123&c=1
TNode<Uint32T> NumberToUint32_0(compiler::CodeAssemblerState* state_, TNode<Number> p_input) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Int32T> tmp0;
  TNode<Uint32T> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Convert_int32_Number_0(state_, TNode<Number>{p_input});
    tmp1 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp0});
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TNode<Uint32T>{tmp1};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=170&c=1
TNode<NativeContext> LoadContextFromFrame_0(compiler::CodeAssemblerState* state_) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<NativeContext> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TNode<NativeContext>{tmp1};
}

TF_BUILTIN(WasmInt32ToHeapNumber, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Int32T> parameter0 = UncheckedParameter<Int32T>(Descriptor::kVal);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Float64T> tmp0;
  TNode<HeapNumber> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Convert_float64_int32_0(state_, TNode<Int32T>{parameter0});
    tmp1 = CodeStubAssembler(state_).AllocateHeapNumberWithValue(TNode<Float64T>{tmp0});
    CodeStubAssembler(state_).Return(tmp1);
  }
}

TF_BUILTIN(WasmInt32ToSharedHeapNumber, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Int32T> parameter0 = UncheckedParameter<Int32T>(Descriptor::kVal);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Float64T> tmp0;
  TNode<HeapNumber> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Convert_float64_int32_0(state_, TNode<Int32T>{parameter0});
    tmp1 = CodeStubAssembler(state_).AllocateSharedHeapNumberWithValue(TNode<Float64T>{tmp0});
    CodeStubAssembler(state_).Return(tmp1);
  }
}

TF_BUILTIN(WasmFuncRefToJS, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<Union<WasmFuncRef, WasmNull>> parameter1 = UncheckedParameter<Union<WasmFuncRef, WasmNull>>(Descriptor::kVal);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmNull> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kWasmNull_0(state_);
    tmp1 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{parameter1}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp0});
    ca_.Branch(tmp1, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<Null> tmp2;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp2 = Null_0(state_);
    CodeStubAssembler(state_).Return(tmp2);
  }

  TNode<WasmFuncRef> tmp3;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    compiler::CodeAssemblerLabel label4(&ca_);
    tmp3 = Cast_WasmFuncRef_0(state_, TNode<HeapObject>{parameter1}, &label4);
    ca_.Goto(&block5);
    if (label4.is_used()) {
      ca_.Bind(&label4);
      ca_.Goto(&block6);
    }
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/wasm.tq:186:49");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<WasmInternalFunction> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<Union<JSFunction, Undefined>> tmp7;
  TNode<Undefined> tmp8;
  TNode<BoolT> tmp9;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp5 = CodeStubAssembler(state_).LoadWasmInternalFunctionFromFuncRef(TNode<WasmFuncRef>{tmp3});
    tmp6 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp7 = CodeStubAssembler(state_).LoadReference<Union<JSFunction, Undefined>>(CodeStubAssembler::Reference{tmp5, tmp6});
    tmp8 = Undefined_0(state_);
    tmp9 = CodeStubAssembler(state_).TaggedNotEqual(TNode<Object>{tmp7}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp8});
    ca_.Branch(tmp9, &block7, std::vector<compiler::Node*>{}, &block8, std::vector<compiler::Node*>{});
  }

  TNode<JSFunction> tmp10;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp10 = TORQUE_CAST(TNode<Object>{tmp7});
    CodeStubAssembler(state_).Return(tmp10);
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmInternalFunctionCreateExternal, parameter0, tmp5);
  }
}

TF_BUILTIN(WasmTaggedNonSmiToInt32, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<HeapObject> parameter1 = UncheckedParameter<HeapObject>(Descriptor::kVal);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Int32T> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).ChangeTaggedNonSmiToInt32(TNode<Context>{parameter0}, TNode<HeapObject>{parameter1});
    CodeStubAssembler(state_).Return(tmp0);
  }
}

TF_BUILTIN(WasmTaggedToFloat64, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kVal);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Undefined> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Undefined_0(state_);
    tmp1 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{parameter1}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp0});
    ca_.Branch(tmp1, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<Float64T> tmp2;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp2 = FromConstexpr_float64_constexpr_float64_0(state_, std::numeric_limits<double>::quiet_NaN());
    CodeStubAssembler(state_).Return(tmp2);
  }

  TNode<Float64T> tmp3;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp3 = CodeStubAssembler(state_).ChangeTaggedToFloat64(TNode<Context>{parameter0}, TNode<JSAny>{parameter1});
    CodeStubAssembler(state_).Return(tmp3);
  }
}

TF_BUILTIN(WasmTaggedToFloat32, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kVal);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Undefined> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Undefined_0(state_);
    tmp1 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{parameter1}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp0});
    ca_.Branch(tmp1, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<Float32T> tmp2;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp2 = FromConstexpr_float32_constexpr_float32_0(state_, std::numeric_limits<float>::quiet_NaN());
    CodeStubAssembler(state_).Return(tmp2);
  }

  TNode<Float64T> tmp3;
  TNode<Float32T> tmp4;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp3 = CodeStubAssembler(state_).ChangeTaggedToFloat64(TNode<Context>{parameter0}, TNode<JSAny>{parameter1});
    tmp4 = CodeStubAssembler(state_).TruncateFloat64ToFloat32(TNode<Float64T>{tmp3});
    CodeStubAssembler(state_).Return(tmp4);
  }
}

TF_BUILTIN(WasmMemoryGrow, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Int32T> parameter0 = UncheckedParameter<Int32T>(Descriptor::kMemIndex);
  USE(parameter0);
  TNode<Int32T> parameter1 = UncheckedParameter<Int32T>(Descriptor::kNumPages);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).ChangeInt32ToIntPtr(TNode<Int32T>{parameter0});
    tmp1 = CodeStubAssembler(state_).IsValidPositiveSmi(TNode<IntPtrT>{tmp0});
    ca_.Branch(tmp1, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/wasm.tq", 235});
      CodeStubAssembler(state_).FailAssert("Torque assert 'IsValidPositiveSmi(ChangeInt32ToIntPtr(memIndex))' failed", pos_stack);
    }
  }

  TNode<IntPtrT> tmp2;
  TNode<BoolT> tmp3;
  TNode<BoolT> tmp4;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp2 = CodeStubAssembler(state_).ChangeInt32ToIntPtr(TNode<Int32T>{parameter1});
    tmp3 = CodeStubAssembler(state_).IsValidPositiveSmi(TNode<IntPtrT>{tmp2});
    tmp4 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp3});
    ca_.Branch(tmp4, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  TNode<Int32T> tmp5;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp5 = Int32Constant_0(state_, IntegerLiteral(true, 0x1ull));
    CodeStubAssembler(state_).Return(tmp5);
  }

  TNode<WasmTrustedInstanceData> tmp6;
  TNode<NativeContext> tmp7;
  TNode<Smi> tmp8;
  TNode<Smi> tmp9;
  TNode<Smi> tmp10;
  TNode<Int32T> tmp11;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp6 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp7 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp6});
    tmp8 = CodeStubAssembler(state_).SmiFromInt32(TNode<Int32T>{parameter0});
    tmp9 = CodeStubAssembler(state_).SmiFromInt32(TNode<Int32T>{parameter1});
    tmp10 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kWasmMemoryGrow, tmp7, tmp6, tmp8, tmp9)); 
    tmp11 = CodeStubAssembler(state_).SmiToInt32(TNode<Smi>{tmp10});
    CodeStubAssembler(state_).Return(tmp11);
  }
}

TF_BUILTIN(WasmTableInit, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<IntPtrT> parameter0 = UncheckedParameter<IntPtrT>(Descriptor::kDstRaw);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kSrcRaw);
  USE(parameter1);
  TNode<Uint32T> parameter2 = UncheckedParameter<Uint32T>(Descriptor::kSizeRaw);
  USE(parameter2);
  TNode<Smi> parameter3 = UncheckedParameter<Smi>(Descriptor::kTableIndex);
  USE(parameter3);
  TNode<Smi> parameter4 = UncheckedParameter<Smi>(Descriptor::kSegmentIndex);
  USE(parameter4);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<Smi> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    compiler::CodeAssemblerLabel label2(&ca_);
    tmp1 = Convert_PositiveSmi_intptr_1(state_, TNode<IntPtrT>{parameter0}, &label2);
    ca_.Goto(&block3);
    if (label2.is_used()) {
      ca_.Bind(&label2);
      ca_.Goto(&block4);
    }
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    ca_.Goto(&block2);
  }

  TNode<Smi> tmp3;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    compiler::CodeAssemblerLabel label4(&ca_);
    tmp3 = Convert_PositiveSmi_uint32_0(state_, TNode<Uint32T>{parameter1}, &label4);
    ca_.Goto(&block5);
    if (label4.is_used()) {
      ca_.Bind(&label4);
      ca_.Goto(&block6);
    }
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    ca_.Goto(&block2);
  }

  TNode<Smi> tmp5;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    compiler::CodeAssemblerLabel label6(&ca_);
    tmp5 = Convert_PositiveSmi_uint32_0(state_, TNode<Uint32T>{parameter2}, &label6);
    ca_.Goto(&block7);
    if (label6.is_used()) {
      ca_.Bind(&label6);
      ca_.Goto(&block8);
    }
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    ca_.Goto(&block2);
  }

  TNode<NativeContext> tmp7;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp7 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmTableInit, tmp7, tmp0, parameter3, parameter4, tmp1, tmp3, tmp5);
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapTableOutOfBounds, TNode<Object>());
  }
}

TF_BUILTIN(WasmTableCopy, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<IntPtrT> parameter0 = UncheckedParameter<IntPtrT>(Descriptor::kDstRaw);
  USE(parameter0);
  TNode<IntPtrT> parameter1 = UncheckedParameter<IntPtrT>(Descriptor::kSrcRaw);
  USE(parameter1);
  TNode<IntPtrT> parameter2 = UncheckedParameter<IntPtrT>(Descriptor::kSizeRaw);
  USE(parameter2);
  TNode<Smi> parameter3 = UncheckedParameter<Smi>(Descriptor::kDstTable);
  USE(parameter3);
  TNode<Smi> parameter4 = UncheckedParameter<Smi>(Descriptor::kSrcTable);
  USE(parameter4);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<Smi> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    compiler::CodeAssemblerLabel label2(&ca_);
    tmp1 = Convert_PositiveSmi_intptr_1(state_, TNode<IntPtrT>{parameter0}, &label2);
    ca_.Goto(&block3);
    if (label2.is_used()) {
      ca_.Bind(&label2);
      ca_.Goto(&block4);
    }
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    ca_.Goto(&block2);
  }

  TNode<Smi> tmp3;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    compiler::CodeAssemblerLabel label4(&ca_);
    tmp3 = Convert_PositiveSmi_intptr_1(state_, TNode<IntPtrT>{parameter1}, &label4);
    ca_.Goto(&block5);
    if (label4.is_used()) {
      ca_.Bind(&label4);
      ca_.Goto(&block6);
    }
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    ca_.Goto(&block2);
  }

  TNode<Smi> tmp5;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    compiler::CodeAssemblerLabel label6(&ca_);
    tmp5 = Convert_PositiveSmi_intptr_1(state_, TNode<IntPtrT>{parameter2}, &label6);
    ca_.Goto(&block7);
    if (label6.is_used()) {
      ca_.Bind(&label6);
      ca_.Goto(&block8);
    }
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    ca_.Goto(&block2);
  }

  TNode<NativeContext> tmp7;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp7 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmTableCopy, tmp7, tmp0, parameter3, parameter4, tmp1, tmp3, tmp5);
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapTableOutOfBounds, TNode<Object>());
  }
}

TF_BUILTIN(WasmTableFill, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<IntPtrT> parameter0 = UncheckedParameter<IntPtrT>(Descriptor::kStartRaw);
  USE(parameter0);
  TNode<IntPtrT> parameter1 = UncheckedParameter<IntPtrT>(Descriptor::kCountRaw);
  USE(parameter1);
  TNode<Smi> parameter2 = UncheckedParameter<Smi>(Descriptor::kTable);
  USE(parameter2);
  TNode<Object> parameter3 = UncheckedParameter<Object>(Descriptor::kValue);
  USE(parameter3);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<Smi> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    compiler::CodeAssemblerLabel label2(&ca_);
    tmp1 = Convert_PositiveSmi_intptr_1(state_, TNode<IntPtrT>{parameter0}, &label2);
    ca_.Goto(&block3);
    if (label2.is_used()) {
      ca_.Bind(&label2);
      ca_.Goto(&block4);
    }
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    ca_.Goto(&block2);
  }

  TNode<Smi> tmp3;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    compiler::CodeAssemblerLabel label4(&ca_);
    tmp3 = Convert_PositiveSmi_intptr_1(state_, TNode<IntPtrT>{parameter1}, &label4);
    ca_.Goto(&block5);
    if (label4.is_used()) {
      ca_.Bind(&label4);
      ca_.Goto(&block6);
    }
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    ca_.Goto(&block2);
  }

  TNode<NativeContext> tmp5;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp5 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmTableFill, tmp5, tmp0, parameter2, tmp1, parameter3, tmp3);
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapTableOutOfBounds, TNode<Object>());
  }
}

TF_BUILTIN(WasmTableGrow, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Smi> parameter0 = UncheckedParameter<Smi>(Descriptor::kTable);
  USE(parameter0);
  TNode<IntPtrT> parameter1 = UncheckedParameter<IntPtrT>(Descriptor::kDeltaRaw);
  USE(parameter1);
  TNode<Object> parameter2 = UncheckedParameter<Object>(Descriptor::kValue);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<Smi> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    compiler::CodeAssemblerLabel label2(&ca_);
    tmp1 = Convert_PositiveSmi_intptr_1(state_, TNode<IntPtrT>{parameter1}, &label2);
    ca_.Goto(&block3);
    if (label2.is_used()) {
      ca_.Bind(&label2);
      ca_.Goto(&block4);
    }
  }

  TNode<Smi> tmp3;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp3 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    CodeStubAssembler(state_).Return(tmp3);
  }

  TNode<NativeContext> tmp4;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp4 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmTableGrow, tmp4, tmp0, parameter0, parameter2, tmp1);
  }
}

TF_BUILTIN(WasmTableGet, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<IntPtrT> parameter0 = UncheckedParameter<IntPtrT>(Descriptor::kTableIndex);
  USE(parameter0);
  TNode<IntPtrT> parameter1 = UncheckedParameter<IntPtrT>(Descriptor::kIndex);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = CodeStubAssembler(state_).IsValidPositiveSmi(TNode<IntPtrT>{parameter0});
    ca_.Branch(tmp1, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/wasm.tq", 310});
      CodeStubAssembler(state_).FailAssert("Torque assert 'IsValidPositiveSmi(tableIndex)' failed", pos_stack);
    }
  }

  TNode<FixedArray> tmp2;
  TNode<Object> tmp3;
  TNode<WasmTableObject> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<Smi> tmp6;
  TNode<Int32T> tmp7;
  TNode<IntPtrT> tmp8;
  TNode<UintPtrT> tmp9;
  TNode<UintPtrT> tmp10;
  TNode<BoolT> tmp11;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp2 = WasmBuiltinsAssembler(state_).LoadTablesFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    tmp3 = CodeStubAssembler(state_).LoadFixedArrayElement(TNode<FixedArray>{tmp2}, TNode<IntPtrT>{parameter0});
    tmp4 = TORQUE_CAST(TNode<Object>{tmp3});
    tmp5 = FromConstexpr_intptr_constexpr_int31_0(state_, 16);
    tmp6 = CodeStubAssembler(state_).LoadReference<Smi>(CodeStubAssembler::Reference{tmp4, tmp5});
    tmp7 = CodeStubAssembler(state_).SmiToInt32(TNode<Smi>{tmp6});
    tmp8 = CodeStubAssembler(state_).ChangeInt32ToIntPtr(TNode<Int32T>{tmp7});
    tmp9 = CodeStubAssembler(state_).Unsigned(TNode<IntPtrT>{tmp8});
    tmp10 = CodeStubAssembler(state_).Unsigned(TNode<IntPtrT>{parameter1});
    tmp11 = CodeStubAssembler(state_).UintPtrGreaterThanOrEqual(TNode<UintPtrT>{tmp10}, TNode<UintPtrT>{tmp9});
    ca_.Branch(tmp11, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapTableOutOfBounds, TNode<Object>());
  }

  TNode<IntPtrT> tmp12;
  TNode<FixedArray> tmp13;
  TNode<Object> tmp14;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp12 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp13 = CodeStubAssembler(state_).LoadReference<FixedArray>(CodeStubAssembler::Reference{tmp4, tmp12});
    tmp14 = CodeStubAssembler(state_).LoadFixedArrayElement(TNode<FixedArray>{tmp13}, TNode<IntPtrT>{parameter1});
    CodeStubAssembler(state_).Return(tmp14);
  }
}

TF_BUILTIN(WasmTableSet, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<IntPtrT> parameter0 = UncheckedParameter<IntPtrT>(Descriptor::kTableIndex);
  USE(parameter0);
  TNode<IntPtrT> parameter1 = UncheckedParameter<IntPtrT>(Descriptor::kIndex);
  USE(parameter1);
  TNode<Object> parameter2 = UncheckedParameter<Object>(Descriptor::kValue);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = CodeStubAssembler(state_).IsValidPositiveSmi(TNode<IntPtrT>{parameter0});
    ca_.Branch(tmp1, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/wasm.tq", 331});
      CodeStubAssembler(state_).FailAssert("Torque assert 'IsValidPositiveSmi(tableIndex)' failed", pos_stack);
    }
  }

  TNode<FixedArray> tmp2;
  TNode<Object> tmp3;
  TNode<WasmTableObject> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<Smi> tmp6;
  TNode<Int32T> tmp7;
  TNode<IntPtrT> tmp8;
  TNode<UintPtrT> tmp9;
  TNode<UintPtrT> tmp10;
  TNode<BoolT> tmp11;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp2 = WasmBuiltinsAssembler(state_).LoadTablesFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    tmp3 = CodeStubAssembler(state_).LoadFixedArrayElement(TNode<FixedArray>{tmp2}, TNode<IntPtrT>{parameter0});
    tmp4 = TORQUE_CAST(TNode<Object>{tmp3});
    tmp5 = FromConstexpr_intptr_constexpr_int31_0(state_, 16);
    tmp6 = CodeStubAssembler(state_).LoadReference<Smi>(CodeStubAssembler::Reference{tmp4, tmp5});
    tmp7 = CodeStubAssembler(state_).SmiToInt32(TNode<Smi>{tmp6});
    tmp8 = CodeStubAssembler(state_).ChangeInt32ToIntPtr(TNode<Int32T>{tmp7});
    tmp9 = CodeStubAssembler(state_).Unsigned(TNode<IntPtrT>{tmp8});
    tmp10 = CodeStubAssembler(state_).Unsigned(TNode<IntPtrT>{parameter1});
    tmp11 = CodeStubAssembler(state_).UintPtrGreaterThanOrEqual(TNode<UintPtrT>{tmp10}, TNode<UintPtrT>{tmp9});
    ca_.Branch(tmp11, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapTableOutOfBounds, TNode<Object>());
  }

  TNode<IntPtrT> tmp12;
  TNode<FixedArray> tmp13;
  TNode<Undefined> tmp14;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp12 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp13 = CodeStubAssembler(state_).LoadReference<FixedArray>(CodeStubAssembler::Reference{tmp4, tmp12});
    CodeStubAssembler(state_).StoreFixedArrayElement(TNode<FixedArray>{tmp13}, TNode<IntPtrT>{parameter1}, TNode<Object>{parameter2});
    tmp14 = Undefined_0(state_);
    CodeStubAssembler(state_).Return(tmp14);
  }
}

TF_BUILTIN(WasmTableGetFuncRef, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<IntPtrT> parameter0 = UncheckedParameter<IntPtrT>(Descriptor::kTableIndex);
  USE(parameter0);
  TNode<IntPtrT> parameter1 = UncheckedParameter<IntPtrT>(Descriptor::kIndex);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block30(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = CodeStubAssembler(state_).IsValidPositiveSmi(TNode<IntPtrT>{parameter0});
    ca_.Branch(tmp1, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/wasm.tq", 353});
      CodeStubAssembler(state_).FailAssert("Torque assert 'IsValidPositiveSmi(tableIndex)' failed", pos_stack);
    }
  }

  TNode<FixedArray> tmp2;
  TNode<Object> tmp3;
  TNode<WasmTableObject> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<Smi> tmp6;
  TNode<Int32T> tmp7;
  TNode<IntPtrT> tmp8;
  TNode<UintPtrT> tmp9;
  TNode<UintPtrT> tmp10;
  TNode<BoolT> tmp11;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp2 = WasmBuiltinsAssembler(state_).LoadTablesFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    tmp3 = CodeStubAssembler(state_).LoadFixedArrayElement(TNode<FixedArray>{tmp2}, TNode<IntPtrT>{parameter0});
    tmp4 = TORQUE_CAST(TNode<Object>{tmp3});
    tmp5 = FromConstexpr_intptr_constexpr_int31_0(state_, 16);
    tmp6 = CodeStubAssembler(state_).LoadReference<Smi>(CodeStubAssembler::Reference{tmp4, tmp5});
    tmp7 = CodeStubAssembler(state_).SmiToInt32(TNode<Smi>{tmp6});
    tmp8 = CodeStubAssembler(state_).ChangeInt32ToIntPtr(TNode<Int32T>{tmp7});
    tmp9 = CodeStubAssembler(state_).Unsigned(TNode<IntPtrT>{tmp8});
    tmp10 = CodeStubAssembler(state_).Unsigned(TNode<IntPtrT>{parameter1});
    tmp11 = CodeStubAssembler(state_).UintPtrGreaterThanOrEqual(TNode<UintPtrT>{tmp10}, TNode<UintPtrT>{tmp9});
    ca_.Branch(tmp11, &block7, std::vector<compiler::Node*>{}, &block8, std::vector<compiler::Node*>{});
  }

  if (block7.is_used()) {
    ca_.Bind(&block7);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapTableOutOfBounds, TNode<Object>());
  }

  TNode<IntPtrT> tmp12;
  TNode<FixedArray> tmp13;
  TNode<Object> tmp14;
  TNode<HeapObject> tmp15;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp12 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp13 = CodeStubAssembler(state_).LoadReference<FixedArray>(CodeStubAssembler::Reference{tmp4, tmp12});
    tmp14 = CodeStubAssembler(state_).LoadFixedArrayElement(TNode<FixedArray>{tmp13}, TNode<IntPtrT>{parameter1});
    compiler::CodeAssemblerLabel label16(&ca_);
    tmp15 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{tmp14}, &label16);
    ca_.Goto(&block16);
    if (label16.is_used()) {
      ca_.Bind(&label16);
      ca_.Goto(&block17);
    }
  }

  if (block17.is_used()) {
    ca_.Bind(&block17);
    ca_.Goto(&block14);
  }

  TNode<HeapObject> tmp17;
  if (block16.is_used()) {
    ca_.Bind(&block16);
    compiler::CodeAssemblerLabel label18(&ca_);
    tmp17 = Cast_HeapObject_0(state_, TNode<HeapObject>{tmp15}, &label18);
    ca_.Goto(&block18);
    if (label18.is_used()) {
      ca_.Bind(&label18);
      ca_.Goto(&block19);
    }
  }

  if (block19.is_used()) {
    ca_.Bind(&block19);
    ca_.Goto(&block14);
  }

  TNode<BoolT> tmp19;
  if (block18.is_used()) {
    ca_.Bind(&block18);
    tmp19 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block12, tmp19);
  }

  TNode<BoolT> tmp20;
  if (block14.is_used()) {
    ca_.Bind(&block14);
    tmp20 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block12, tmp20);
  }

  TNode<BoolT> phi_bb12_11;
  if (block12.is_used()) {
    ca_.Bind(&block12, &phi_bb12_11);
    ca_.Branch(phi_bb12_11, &block10, std::vector<compiler::Node*>{}, &block11, std::vector<compiler::Node*>{});
  }

  if (block11.is_used()) {
    ca_.Bind(&block11);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/cast.tq", 1025});
      CodeStubAssembler(state_).FailAssert("Torque assert 'Is<A>(o)' failed", pos_stack);
    }
  }

  TNode<HeapObject> tmp21;
  TNode<WasmNull> tmp22;
  TNode<BoolT> tmp23;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp21 = TORQUE_CAST(TNode<Object>{tmp14});
    tmp22 = kWasmNull_0(state_);
    tmp23 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp21}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp22});
    ca_.Branch(tmp23, &block20, std::vector<compiler::Node*>{}, &block21, std::vector<compiler::Node*>{});
  }

  if (block20.is_used()) {
    ca_.Bind(&block20);
    CodeStubAssembler(state_).Return(tmp21);
  }

  TNode<WasmFuncRef> tmp24;
  if (block21.is_used()) {
    ca_.Bind(&block21);
    compiler::CodeAssemblerLabel label25(&ca_);
    tmp24 = Cast_WasmFuncRef_0(state_, TNode<HeapObject>{tmp21}, &label25);
    ca_.Goto(&block27);
    if (label25.is_used()) {
      ca_.Bind(&label25);
      ca_.Goto(&block28);
    }
  }

  TNode<BoolT> tmp26;
  if (block28.is_used()) {
    ca_.Bind(&block28);
    tmp26 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block24, tmp26);
  }

  TNode<BoolT> tmp27;
  if (block27.is_used()) {
    ca_.Bind(&block27);
    tmp27 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block24, tmp27);
  }

  TNode<BoolT> phi_bb24_10;
  if (block24.is_used()) {
    ca_.Bind(&block24, &phi_bb24_10);
    ca_.Branch(phi_bb24_10, &block22, std::vector<compiler::Node*>{}, &block23, std::vector<compiler::Node*>{});
  }

  if (block22.is_used()) {
    ca_.Bind(&block22);
    CodeStubAssembler(state_).Return(tmp21);
  }

  TNode<IntPtrT> tmp28;
  TNode<Map> tmp29;
  TNode<BoolT> tmp30;
  if (block23.is_used()) {
    ca_.Bind(&block23);
    tmp28 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    tmp29 = CodeStubAssembler(state_).LoadReference<Map>(CodeStubAssembler::Reference{tmp21, tmp28});
    tmp30 = CodeStubAssembler(state_).IsTuple2Map(TNode<Map>{tmp29});
    ca_.Branch(tmp30, &block29, std::vector<compiler::Node*>{}, &block30, std::vector<compiler::Node*>{});
  }

  if (block30.is_used()) {
    ca_.Bind(&block30);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/wasm.tq", 368});
      CodeStubAssembler(state_).FailAssert("Torque assert 'IsTuple2Map(entry.map)' failed", pos_stack);
    }
  }

  TNode<NativeContext> tmp31;
  TNode<Smi> tmp32;
  TNode<Smi> tmp33;
  if (block29.is_used()) {
    ca_.Bind(&block29);
    tmp31 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    tmp32 = CodeStubAssembler(state_).SmiFromIntPtr(TNode<IntPtrT>{parameter0});
    tmp33 = CodeStubAssembler(state_).SmiFromIntPtr(TNode<IntPtrT>{parameter1});
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmFunctionTableGet, tmp31, tmp0, tmp32, tmp33);
  }
}

TF_BUILTIN(WasmFunctionTableGet, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<IntPtrT> parameter0 = UncheckedParameter<IntPtrT>(Descriptor::kTableIndex);
  USE(parameter0);
  TNode<IntPtrT> parameter1 = UncheckedParameter<IntPtrT>(Descriptor::kIndex);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = CodeStubAssembler(state_).IsValidPositiveSmi(TNode<IntPtrT>{parameter0});
    ca_.Branch(tmp1, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/wasm.tq", 383});
      CodeStubAssembler(state_).FailAssert("Torque assert 'IsValidPositiveSmi(tableIndex)' failed", pos_stack);
    }
  }

  TNode<BoolT> tmp2;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp2 = CodeStubAssembler(state_).IsValidPositiveSmi(TNode<IntPtrT>{parameter1});
    ca_.Branch(tmp2, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/wasm.tq", 384});
      CodeStubAssembler(state_).FailAssert("Torque assert 'IsValidPositiveSmi(index)' failed", pos_stack);
    }
  }

  TNode<NativeContext> tmp3;
  TNode<Smi> tmp4;
  TNode<Smi> tmp5;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp3 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    tmp4 = CodeStubAssembler(state_).SmiFromIntPtr(TNode<IntPtrT>{parameter0});
    tmp5 = CodeStubAssembler(state_).SmiFromIntPtr(TNode<IntPtrT>{parameter1});
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmFunctionTableGet, tmp3, tmp0, tmp4, tmp5);
  }
}

TF_BUILTIN(WasmTableSetFuncRef, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<IntPtrT> parameter0 = UncheckedParameter<IntPtrT>(Descriptor::kTableIndex);
  USE(parameter0);
  TNode<IntPtrT> parameter1 = UncheckedParameter<IntPtrT>(Descriptor::kIndex);
  USE(parameter1);
  TNode<WasmFuncRef> parameter2 = UncheckedParameter<WasmFuncRef>(Descriptor::kValue);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<WasmNull> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = kWasmNull_0(state_);
    tmp2 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{parameter2}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp1});
    ca_.Branch(tmp2, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp3;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp3 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block5, tmp3);
  }

  TNode<WasmFuncRef> tmp4;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    compiler::CodeAssemblerLabel label5(&ca_);
    tmp4 = Cast_WasmFuncRef_0(state_, TNode<HeapObject>{parameter2}, &label5);
    ca_.Goto(&block9);
    if (label5.is_used()) {
      ca_.Bind(&label5);
      ca_.Goto(&block10);
    }
  }

  TNode<BoolT> tmp6;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp6 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block6, tmp6);
  }

  TNode<BoolT> tmp7;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp7 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block6, tmp7);
  }

  TNode<BoolT> phi_bb6_7;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_7);
    ca_.Goto(&block5, phi_bb6_7);
  }

  TNode<BoolT> phi_bb5_5;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_5);
    ca_.Branch(phi_bb5_5, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/wasm.tq", 393});
      CodeStubAssembler(state_).FailAssert("Torque assert 'value == kWasmNull || Is<WasmFuncRef>(value)' failed", pos_stack);
    }
  }

  TNode<BoolT> tmp8;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp8 = CodeStubAssembler(state_).IsValidPositiveSmi(TNode<IntPtrT>{parameter0});
    ca_.Branch(tmp8, &block13, std::vector<compiler::Node*>{}, &block14, std::vector<compiler::Node*>{});
  }

  if (block14.is_used()) {
    ca_.Bind(&block14);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/wasm.tq", 395});
      CodeStubAssembler(state_).FailAssert("Torque assert 'IsValidPositiveSmi(tableIndex)' failed", pos_stack);
    }
  }

  TNode<FixedArray> tmp9;
  TNode<Object> tmp10;
  TNode<WasmTableObject> tmp11;
  TNode<IntPtrT> tmp12;
  TNode<Smi> tmp13;
  TNode<Int32T> tmp14;
  TNode<IntPtrT> tmp15;
  TNode<UintPtrT> tmp16;
  TNode<UintPtrT> tmp17;
  TNode<BoolT> tmp18;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    tmp9 = WasmBuiltinsAssembler(state_).LoadTablesFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    tmp10 = CodeStubAssembler(state_).LoadFixedArrayElement(TNode<FixedArray>{tmp9}, TNode<IntPtrT>{parameter0});
    tmp11 = TORQUE_CAST(TNode<Object>{tmp10});
    tmp12 = FromConstexpr_intptr_constexpr_int31_0(state_, 16);
    tmp13 = CodeStubAssembler(state_).LoadReference<Smi>(CodeStubAssembler::Reference{tmp11, tmp12});
    tmp14 = CodeStubAssembler(state_).SmiToInt32(TNode<Smi>{tmp13});
    tmp15 = CodeStubAssembler(state_).ChangeInt32ToIntPtr(TNode<Int32T>{tmp14});
    tmp16 = CodeStubAssembler(state_).Unsigned(TNode<IntPtrT>{tmp15});
    tmp17 = CodeStubAssembler(state_).Unsigned(TNode<IntPtrT>{parameter1});
    tmp18 = CodeStubAssembler(state_).UintPtrGreaterThanOrEqual(TNode<UintPtrT>{tmp17}, TNode<UintPtrT>{tmp16});
    ca_.Branch(tmp18, &block15, std::vector<compiler::Node*>{}, &block16, std::vector<compiler::Node*>{});
  }

  if (block15.is_used()) {
    ca_.Bind(&block15);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapTableOutOfBounds, TNode<Object>());
  }

  TNode<NativeContext> tmp19;
  TNode<Smi> tmp20;
  TNode<Smi> tmp21;
  if (block16.is_used()) {
    ca_.Bind(&block16);
    tmp19 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    tmp20 = CodeStubAssembler(state_).SmiFromIntPtr(TNode<IntPtrT>{parameter0});
    tmp21 = CodeStubAssembler(state_).SmiFromIntPtr(TNode<IntPtrT>{parameter1});
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmFunctionTableSet, tmp19, tmp0, tmp20, tmp21, parameter2);
  }
}

TF_BUILTIN(WasmRefFunc, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<WasmTrustedInstanceData> parameter0 = UncheckedParameter<WasmTrustedInstanceData>(Descriptor::kInstance);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kIndex);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<FixedArray> tmp0;
  TNode<Union<HeapObject, TaggedIndex>> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<UintPtrT> tmp5;
  TNode<UintPtrT> tmp6;
  TNode<BoolT> tmp7;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadFuncRefsFromInstanceData(TNode<WasmTrustedInstanceData>{parameter0});
    std::tie(tmp1, tmp2, tmp3) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp0}).Flatten();
    tmp4 = Convert_intptr_uint32_0(state_, TNode<Uint32T>{parameter1});
    tmp5 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp4});
    tmp6 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp3});
    tmp7 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp5}, TNode<UintPtrT>{tmp6});
    ca_.Branch(tmp7, &block7, std::vector<compiler::Node*>{}, &block8, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp8;
  TNode<IntPtrT> tmp9;
  TNode<Union<HeapObject, TaggedIndex>> tmp10;
  TNode<IntPtrT> tmp11;
  TNode<Object> tmp12;
  TNode<BoolT> tmp13;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp8 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp4});
    tmp9 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp2}, TNode<IntPtrT>{tmp8});
    std::tie(tmp10, tmp11) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp1}, TNode<IntPtrT>{tmp9}).Flatten();
    tmp12 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp10, tmp11});
    tmp13 = CodeStubAssembler(state_).TaggedIsSmi(TNode<Object>{tmp12});
    ca_.Branch(tmp13, &block11, std::vector<compiler::Node*>{}, &block12, std::vector<compiler::Node*>{});
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:136:41");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<NativeContext> tmp14;
  TNode<Smi> tmp15;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp14 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{parameter0});
    tmp15 = CodeStubAssembler(state_).SmiFromUint32(TNode<Uint32T>{parameter1});
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmRefFunc, tmp14, parameter0, tmp15);
  }

  TNode<HeapObject> tmp16;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    compiler::CodeAssemblerLabel label17(&ca_);
    tmp16 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{tmp12}, &label17);
    ca_.Goto(&block19);
    if (label17.is_used()) {
      ca_.Bind(&label17);
      ca_.Goto(&block20);
    }
  }

  if (block20.is_used()) {
    ca_.Bind(&block20);
    ca_.Goto(&block17);
  }

  TNode<WasmFuncRef> tmp18;
  if (block19.is_used()) {
    ca_.Bind(&block19);
    compiler::CodeAssemblerLabel label19(&ca_);
    tmp18 = Cast_WasmFuncRef_0(state_, TNode<HeapObject>{tmp16}, &label19);
    ca_.Goto(&block21);
    if (label19.is_used()) {
      ca_.Bind(&label19);
      ca_.Goto(&block22);
    }
  }

  if (block22.is_used()) {
    ca_.Bind(&block22);
    ca_.Goto(&block17);
  }

  TNode<BoolT> tmp20;
  if (block21.is_used()) {
    ca_.Bind(&block21);
    tmp20 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block15, tmp20);
  }

  TNode<BoolT> tmp21;
  if (block17.is_used()) {
    ca_.Bind(&block17);
    tmp21 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block15, tmp21);
  }

  TNode<BoolT> phi_bb15_6;
  if (block15.is_used()) {
    ca_.Bind(&block15, &phi_bb15_6);
    ca_.Branch(phi_bb15_6, &block13, std::vector<compiler::Node*>{}, &block14, std::vector<compiler::Node*>{});
  }

  if (block14.is_used()) {
    ca_.Bind(&block14);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/wasm.tq", 420});
      CodeStubAssembler(state_).FailAssert("Torque assert 'Is<WasmFuncRef>(funcref)' failed", pos_stack);
    }
  }

  if (block13.is_used()) {
    ca_.Bind(&block13);
    CodeStubAssembler(state_).Return(tmp12);
  }
}

TF_BUILTIN(WasmInternalFunctionCreateExternal, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<WasmInternalFunction> parameter1 = UncheckedParameter<WasmInternalFunction>(Descriptor::kFunc);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSFunction> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kWasmInternalFunctionCreateExternal, parameter0, parameter1)); 
    CodeStubAssembler(state_).Return(tmp0);
  }
}

TF_BUILTIN(WasmAllocateZeroedFixedArray, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<IntPtrT> parameter0 = UncheckedParameter<IntPtrT>(Descriptor::kSize);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{parameter0}, TNode<IntPtrT>{tmp0});
    ca_.Branch(tmp1, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<FixedArray> tmp2;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp2 = kEmptyFixedArray_0(state_);
    CodeStubAssembler(state_).Return(tmp2);
  }

  TNode<FixedArrayBase> tmp3;
  TNode<HeapObject> tmp4;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp3 = CodeStubAssembler(state_).AllocateFixedArray(CastIfEnumClass<ElementsKind>(ElementsKind::PACKED_ELEMENTS), TNode<IntPtrT>{parameter0}, CastIfEnumClass<CodeStubAssembler::AllocationFlag>(CodeStubAssembler::AllocationFlag::kNone));
    compiler::CodeAssemblerLabel label5(&ca_);
    tmp4 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{tmp3}, &label5);
    ca_.Goto(&block10);
    if (label5.is_used()) {
      ca_.Bind(&label5);
      ca_.Goto(&block11);
    }
  }

  if (block11.is_used()) {
    ca_.Bind(&block11);
    ca_.Goto(&block8);
  }

  TNode<FixedArray> tmp6;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    compiler::CodeAssemblerLabel label7(&ca_);
    tmp6 = Cast_FixedArray_0(state_, TNode<HeapObject>{tmp4}, &label7);
    ca_.Goto(&block12);
    if (label7.is_used()) {
      ca_.Bind(&label7);
      ca_.Goto(&block13);
    }
  }

  if (block13.is_used()) {
    ca_.Bind(&block13);
    ca_.Goto(&block8);
  }

  TNode<BoolT> tmp8;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    tmp8 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block6, tmp8);
  }

  TNode<BoolT> tmp9;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp9 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block6, tmp9);
  }

  TNode<BoolT> phi_bb6_5;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_5);
    ca_.Branch(phi_bb6_5, &block4, std::vector<compiler::Node*>{}, &block5, std::vector<compiler::Node*>{});
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/cast.tq", 1025});
      CodeStubAssembler(state_).FailAssert("Torque assert 'Is<A>(o)' failed", pos_stack);
    }
  }

  TNode<FixedArray> tmp10;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp10 = TORQUE_CAST(TNode<Object>{tmp3});
    CodeStubAssembler(state_).FillEntireFixedArrayWithSmiZero(CastIfEnumClass<ElementsKind>(ElementsKind::PACKED_ELEMENTS), TNode<FixedArray>{tmp10}, TNode<IntPtrT>{parameter0});
    CodeStubAssembler(state_).Return(tmp10);
  }
}

TF_BUILTIN(WasmAllocateFixedArray, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<IntPtrT> parameter0 = UncheckedParameter<IntPtrT>(Descriptor::kSize);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{parameter0}, TNode<IntPtrT>{tmp0});
    ca_.Branch(tmp1, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<FixedArray> tmp2;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp2 = kEmptyFixedArray_0(state_);
    CodeStubAssembler(state_).Return(tmp2);
  }

  TNode<FixedArrayBase> tmp3;
  TNode<HeapObject> tmp4;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp3 = CodeStubAssembler(state_).AllocateFixedArray(CastIfEnumClass<ElementsKind>(ElementsKind::PACKED_ELEMENTS), TNode<IntPtrT>{parameter0}, CastIfEnumClass<CodeStubAssembler::AllocationFlag>(CodeStubAssembler::AllocationFlag::kNone));
    compiler::CodeAssemblerLabel label5(&ca_);
    tmp4 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{tmp3}, &label5);
    ca_.Goto(&block10);
    if (label5.is_used()) {
      ca_.Bind(&label5);
      ca_.Goto(&block11);
    }
  }

  if (block11.is_used()) {
    ca_.Bind(&block11);
    ca_.Goto(&block8);
  }

  TNode<FixedArray> tmp6;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    compiler::CodeAssemblerLabel label7(&ca_);
    tmp6 = Cast_FixedArray_0(state_, TNode<HeapObject>{tmp4}, &label7);
    ca_.Goto(&block12);
    if (label7.is_used()) {
      ca_.Bind(&label7);
      ca_.Goto(&block13);
    }
  }

  if (block13.is_used()) {
    ca_.Bind(&block13);
    ca_.Goto(&block8);
  }

  TNode<BoolT> tmp8;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    tmp8 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block6, tmp8);
  }

  TNode<BoolT> tmp9;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp9 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block6, tmp9);
  }

  TNode<BoolT> phi_bb6_5;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_5);
    ca_.Branch(phi_bb6_5, &block4, std::vector<compiler::Node*>{}, &block5, std::vector<compiler::Node*>{});
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/cast.tq", 1025});
      CodeStubAssembler(state_).FailAssert("Torque assert 'Is<A>(o)' failed", pos_stack);
    }
  }

  TNode<FixedArray> tmp10;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp10 = TORQUE_CAST(TNode<Object>{tmp3});
    CodeStubAssembler(state_).Return(tmp10);
  }
}

TF_BUILTIN(WasmLiftoffDeoptFinish, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kNoContext_0(state_);
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmLiftoffDeoptFinish, tmp0);
  }
}

TF_BUILTIN(WasmThrow, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Object> parameter0 = UncheckedParameter<Object>(Descriptor::kTag);
  USE(parameter0);
  TNode<FixedArray> parameter1 = UncheckedParameter<FixedArray>(Descriptor::kValues);
  USE(parameter1);
  TNode<WasmTrustedInstanceData> parameter2 = UncheckedParameter<WasmTrustedInstanceData>(Descriptor::kInstanceData);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmThrow, tmp0, parameter0, parameter1, parameter2);
  }
}

TF_BUILTIN(WasmRethrow, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Object> parameter0 = UncheckedParameter<Object>(Descriptor::kException);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmNull> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kWasmNull_0(state_);
    tmp1 = CodeStubAssembler(state_).TaggedNotEqual(TNode<Object>{parameter0}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp0});
    ca_.Branch(tmp1, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/wasm.tq", 458});
      CodeStubAssembler(state_).FailAssert("Torque assert 'exception != kWasmNull' failed", pos_stack);
    }
  }

  TNode<NativeContext> tmp2;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp2 = LoadContextFromFrame_0(state_);
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmReThrow, tmp2, parameter0);
  }
}

TF_BUILTIN(WasmThrowRef, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Object> parameter0 = UncheckedParameter<Object>(Descriptor::kException);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmNull> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kWasmNull_0(state_);
    tmp1 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{parameter0}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp0});
    ca_.Branch(tmp1, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapRethrowNull, TNode<Object>());
  }

  TNode<NativeContext> tmp2;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp2 = LoadContextFromFrame_0(state_);
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmReThrow, tmp2, parameter0);
  }
}

TF_BUILTIN(WasmRethrowExplicitContext, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Object> parameter0 = UncheckedParameter<Object>(Descriptor::kException);
  USE(parameter0);
  TNode<Context> parameter1 = UncheckedParameter<Context>(Descriptor::kExplicitContext);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Null> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Null_0(state_);
    tmp1 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{parameter0}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp0});
    ca_.Branch(tmp1, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapRethrowNull, TNode<Object>());
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmReThrow, parameter1, parameter0);
  }
}

TF_BUILTIN(WasmTriggerTierUp, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<NativeContext> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = LoadContextFromFrame_0(state_);
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmTriggerTierUp, tmp1, tmp0);
  }
}

TF_BUILTIN(WasmGrowableStackGuard, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<IntPtrT> parameter0 = UncheckedParameter<IntPtrT>(Descriptor::kStackParamAndReturnSlotsSize);
  USE(parameter0);
  TNode<IntPtrT> parameter1 = UncheckedParameter<IntPtrT>(Descriptor::kGap);
  USE(parameter1);
  TNode<IntPtrT> parameter2 = UncheckedParameter<IntPtrT>(Descriptor::kParameterSlotsSize);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<RawPtrT> tmp0;
  TNode<RawPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<RawPtrT> tmp3;
  TNode<Int32T> tmp4;
  TNode<Uint32T> tmp5;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).LoadParentFramePointer();
    tmp1 = CodeStubAssembler(state_).RawPtrAdd(TNode<RawPtrT>{tmp0}, TNode<IntPtrT>{parameter0});
    tmp2 = FromConstexpr_intptr_constexpr_int32_0(state_, CommonFrameConstants::kFixedFrameSizeAboveFp);
    tmp3 = CodeStubAssembler(state_).RawPtrAdd(TNode<RawPtrT>{tmp1}, TNode<IntPtrT>{tmp2});
    tmp4 = Convert_int32_intptr_0(state_, TNode<IntPtrT>{parameter1});
    tmp5 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp4});
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmHandleStackOverflow, TNode<Object>(), tmp3, tmp5, parameter2);
  }
}

TF_BUILTIN(WasmStackGuard, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<IntPtrT> parameter0 = UncheckedParameter<IntPtrT>(Descriptor::kGap);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  TNode<Smi> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
    tmp1 = Convert_Smi_intptr_0(state_, TNode<IntPtrT>{parameter0});
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmStackGuard, tmp0, tmp1);
  }
}

TF_BUILTIN(WasmStackGuardLoop, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmStackGuardLoop, tmp0);
  }
}

TF_BUILTIN(WasmStackOverflow, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kThrowWasmStackOverflow, tmp0);
  }
}

TF_BUILTIN(WasmTraceGlobal, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Smi> parameter0 = UncheckedParameter<Smi>(Descriptor::kInfo);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kNoContext_0(state_);
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmTraceGlobal, tmp0, parameter0);
  }
}

TF_BUILTIN(WasmTraceMemory, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Smi> parameter0 = UncheckedParameter<Smi>(Descriptor::kInfo);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kNoContext_0(state_);
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmTraceMemory, tmp0, parameter0);
  }
}

TF_BUILTIN(WasmTraceEnter, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmTraceEnter, tmp0);
  }
}

TF_BUILTIN(WasmTraceExit, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Smi> parameter0 = UncheckedParameter<Smi>(Descriptor::kInfo);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmTraceExit, tmp0, parameter0);
  }
}

TF_BUILTIN(WasmConfigureAllPrototypesOpt, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Object> parameter0 = UncheckedParameter<Object>(Descriptor::kBuffer);
  USE(parameter0);
  TNode<JSAny> parameter1 = UncheckedParameter<JSAny>(Descriptor::kConstructors);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<NativeContext> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmConfigureAllPrototypesOpt, tmp1, parameter0, parameter1, tmp0);
  }
}

TF_BUILTIN(WasmAllocateJSArray, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<Smi> parameter1 = UncheckedParameter<Smi>(Descriptor::kSize);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Map> tmp0;
  TNode<JSArray> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = GetFastPackedElementsJSArrayMap_0(state_, TNode<Context>{parameter0});
    tmp1 = CodeStubAssembler(state_).AllocateJSArray(CastIfEnumClass<ElementsKind>(ElementsKind::PACKED_ELEMENTS), TNode<Map>{tmp0}, TNode<Smi>{parameter1}, TNode<Smi>{parameter1});
    CodeStubAssembler(state_).Return(tmp1);
  }
}

TF_BUILTIN(WasmAllocateStructWithRtt, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Map> parameter0 = UncheckedParameter<Map>(Descriptor::kRtt);
  USE(parameter0);
  TNode<Int32T> parameter1 = UncheckedParameter<Int32T>(Descriptor::kInstanceSize);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<HeapObject> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<Union<HeapObject, TaggedIndex>> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<WasmStruct> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<FixedArray> tmp7;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Convert_intptr_int32_0(state_, TNode<Int32T>{parameter1});
    tmp1 = CodeStubAssembler(state_).Allocate(TNode<IntPtrT>{tmp0});
    tmp2 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    std::tie(tmp3, tmp4) = UnsafeConstCast_Map_0(state_, TorqueStructReference_Map_0{TNode<Union<HeapObject, TaggedIndex>>{tmp1}, TNode<IntPtrT>{tmp2}, TorqueStructUnsafe_0{}}).Flatten();
    CodeStubAssembler(state_).StoreReference<Map>(CodeStubAssembler::Reference{tmp3, tmp4}, parameter0);
    tmp5 = TORQUE_CAST(TNode<HeapObject>{tmp1});
    tmp6 = FromConstexpr_intptr_constexpr_int31_0(state_, 4);
    tmp7 = kEmptyFixedArray_0(state_);
    CodeStubAssembler(state_).StoreReference<Union<FixedArrayBase, PropertyArray, Smi, SwissNameDictionary>>(CodeStubAssembler::Reference{tmp5, tmp6}, tmp7);
    CodeStubAssembler(state_).Return(tmp1);
  }
}

TF_BUILTIN(WasmAllocateDescriptorStruct, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Map> parameter0 = UncheckedParameter<Map>(Descriptor::kMap);
  USE(parameter0);
  TNode<Int32T> parameter1 = UncheckedParameter<Int32T>(Descriptor::kTypeIndex);
  USE(parameter1);
  TNode<Object> parameter2 = UncheckedParameter<Object>(Descriptor::kFirstField);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<NativeContext> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<Smi> tmp3;
  TNode<Union<WasmCustomMap, WasmStruct>> tmp4;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    tmp2 = Convert_intptr_int32_0(state_, TNode<Int32T>{parameter1});
    tmp3 = CodeStubAssembler(state_).SmiTag(TNode<IntPtrT>{tmp2});
    tmp4 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kWasmAllocateDescriptorStruct, tmp1, tmp0, parameter0, tmp3, parameter2)); 
    CodeStubAssembler(state_).Return(tmp4);
  }
}

TF_BUILTIN(WasmAllocateSharedStructWithRtt, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Map> parameter0 = UncheckedParameter<Map>(Descriptor::kRtt);
  USE(parameter0);
  TNode<Int32T> parameter1 = UncheckedParameter<Int32T>(Descriptor::kInstanceSize);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  TNode<Smi> tmp1;
  TNode<Smi> tmp2;
  TNode<HeapObject> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<Union<HeapObject, TaggedIndex>> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<WasmStruct> tmp7;
  TNode<IntPtrT> tmp8;
  TNode<FixedArray> tmp9;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
    tmp1 = CodeStubAssembler(state_).SmiFromInt32(TNode<Int32T>{parameter1});
    tmp2 = CodeStubAssembler(state_).SmiConstant(kDoubleAligned);
    tmp3 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kAllocateInSharedHeap, tmp0, tmp1, tmp2)); 
    tmp4 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    std::tie(tmp5, tmp6) = UnsafeConstCast_Map_0(state_, TorqueStructReference_Map_0{TNode<Union<HeapObject, TaggedIndex>>{tmp3}, TNode<IntPtrT>{tmp4}, TorqueStructUnsafe_0{}}).Flatten();
    CodeStubAssembler(state_).StoreReference<Map>(CodeStubAssembler::Reference{tmp5, tmp6}, parameter0);
    tmp7 = TORQUE_CAST(TNode<HeapObject>{tmp3});
    tmp8 = FromConstexpr_intptr_constexpr_int31_0(state_, 4);
    tmp9 = kEmptyFixedArray_0(state_);
    CodeStubAssembler(state_).StoreReference<Union<FixedArrayBase, PropertyArray, Smi, SwissNameDictionary>>(CodeStubAssembler::Reference{tmp7, tmp8}, tmp9);
    CodeStubAssembler(state_).Return(tmp3);
  }
}

TF_BUILTIN(WasmAllocateArray_Uninitialized, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Map> parameter0 = UncheckedParameter<Map>(Descriptor::kRtt);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kLength);
  USE(parameter1);
  TNode<Uint32T> parameter2 = UncheckedParameter<Uint32T>(Descriptor::kElementSize);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<HeapObject> tmp6;
  TNode<IntPtrT> tmp7;
  TNode<Union<HeapObject, TaggedIndex>> tmp8;
  TNode<IntPtrT> tmp9;
  TNode<WasmArray> tmp10;
  TNode<IntPtrT> tmp11;
  TNode<FixedArray> tmp12;
  TNode<WasmArray> tmp13;
  TNode<IntPtrT> tmp14;
  TNode<WasmArray> tmp15;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Convert_intptr_uint32_0(state_, TNode<Uint32T>{parameter1});
    tmp1 = Convert_intptr_uint32_0(state_, TNode<Uint32T>{parameter2});
    tmp2 = CodeStubAssembler(state_).IntPtrMul(TNode<IntPtrT>{tmp0}, TNode<IntPtrT>{tmp1});
    tmp3 = AlignTagged_0(state_, TNode<IntPtrT>{tmp2});
    tmp4 = Convert_intptr_constexpr_int32_0(state_, WasmArray::HeaderSize(SharedFlag{false}));
    tmp5 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp3}, TNode<IntPtrT>{tmp4});
    tmp6 = CodeStubAssembler(state_).Allocate(TNode<IntPtrT>{tmp5});
    tmp7 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    std::tie(tmp8, tmp9) = UnsafeConstCast_Map_0(state_, TorqueStructReference_Map_0{TNode<Union<HeapObject, TaggedIndex>>{tmp6}, TNode<IntPtrT>{tmp7}, TorqueStructUnsafe_0{}}).Flatten();
    CodeStubAssembler(state_).StoreReference<Map>(CodeStubAssembler::Reference{tmp8, tmp9}, parameter0);
    tmp10 = TORQUE_CAST(TNode<HeapObject>{tmp6});
    tmp11 = FromConstexpr_intptr_constexpr_int31_0(state_, 4);
    tmp12 = kEmptyFixedArray_0(state_);
    CodeStubAssembler(state_).StoreReference<Union<FixedArrayBase, PropertyArray, Smi, SwissNameDictionary>>(CodeStubAssembler::Reference{tmp10, tmp11}, tmp12);
    tmp13 = TORQUE_CAST(TNode<HeapObject>{tmp6});
    tmp14 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    CodeStubAssembler(state_).StoreReference<Uint32T>(CodeStubAssembler::Reference{tmp13, tmp14}, parameter1);
    tmp15 = TORQUE_CAST(TNode<HeapObject>{tmp6});
    CodeStubAssembler(state_).Return(tmp15);
  }
}

TF_BUILTIN(WasmAllocateSharedArray_Uninitialized, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Map> parameter0 = UncheckedParameter<Map>(Descriptor::kRtt);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kLength);
  USE(parameter1);
  TNode<Uint32T> parameter2 = UncheckedParameter<Uint32T>(Descriptor::kElementSize);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<NativeContext> tmp6;
  TNode<Smi> tmp7;
  TNode<Smi> tmp8;
  TNode<HeapObject> tmp9;
  TNode<IntPtrT> tmp10;
  TNode<Union<HeapObject, TaggedIndex>> tmp11;
  TNode<IntPtrT> tmp12;
  TNode<WasmArray> tmp13;
  TNode<IntPtrT> tmp14;
  TNode<FixedArray> tmp15;
  TNode<WasmArray> tmp16;
  TNode<IntPtrT> tmp17;
  TNode<WasmArray> tmp18;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Convert_intptr_uint32_0(state_, TNode<Uint32T>{parameter1});
    tmp1 = Convert_intptr_uint32_0(state_, TNode<Uint32T>{parameter2});
    tmp2 = CodeStubAssembler(state_).IntPtrMul(TNode<IntPtrT>{tmp0}, TNode<IntPtrT>{tmp1});
    tmp3 = AlignTagged_0(state_, TNode<IntPtrT>{tmp2});
    tmp4 = Convert_intptr_constexpr_int32_0(state_, WasmArray::HeaderSize(SharedFlag{true}));
    tmp5 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp3}, TNode<IntPtrT>{tmp4});
    tmp6 = LoadContextFromFrame_0(state_);
    tmp7 = CodeStubAssembler(state_).SmiFromIntPtr(TNode<IntPtrT>{tmp5});
    tmp8 = CodeStubAssembler(state_).SmiConstant(kDoubleAligned);
    tmp9 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kAllocateInSharedHeap, tmp6, tmp7, tmp8)); 
    tmp10 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    std::tie(tmp11, tmp12) = UnsafeConstCast_Map_0(state_, TorqueStructReference_Map_0{TNode<Union<HeapObject, TaggedIndex>>{tmp9}, TNode<IntPtrT>{tmp10}, TorqueStructUnsafe_0{}}).Flatten();
    CodeStubAssembler(state_).StoreReference<Map>(CodeStubAssembler::Reference{tmp11, tmp12}, parameter0);
    tmp13 = TORQUE_CAST(TNode<HeapObject>{tmp9});
    tmp14 = FromConstexpr_intptr_constexpr_int31_0(state_, 4);
    tmp15 = kEmptyFixedArray_0(state_);
    CodeStubAssembler(state_).StoreReference<Union<FixedArrayBase, PropertyArray, Smi, SwissNameDictionary>>(CodeStubAssembler::Reference{tmp13, tmp14}, tmp15);
    tmp16 = TORQUE_CAST(TNode<HeapObject>{tmp9});
    tmp17 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    CodeStubAssembler(state_).StoreReference<Uint32T>(CodeStubAssembler::Reference{tmp16, tmp17}, parameter1);
    tmp18 = TORQUE_CAST(TNode<HeapObject>{tmp9});
    CodeStubAssembler(state_).Return(tmp18);
  }
}

TF_BUILTIN(WasmArrayNewSegment, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Uint32T> parameter0 = UncheckedParameter<Uint32T>(Descriptor::kSegmentIndex);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kOffset);
  USE(parameter1);
  TNode<Uint32T> parameter2 = UncheckedParameter<Uint32T>(Descriptor::kLength);
  USE(parameter2);
  TNode<Smi> parameter3 = UncheckedParameter<Smi>(Descriptor::kIsElement);
  USE(parameter3);
  TNode<Map> parameter4 = UncheckedParameter<Map>(Descriptor::kRtt);
  USE(parameter4);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<Smi> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    compiler::CodeAssemblerLabel label2(&ca_);
    tmp1 = Convert_PositiveSmi_uint32_0(state_, TNode<Uint32T>{parameter1}, &label2);
    ca_.Goto(&block5);
    if (label2.is_used()) {
      ca_.Bind(&label2);
      ca_.Goto(&block6);
    }
  }

  TNode<Smi> tmp3;
  TNode<BoolT> tmp4;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp3 = SmiConstant_0(state_, IntegerLiteral(false, 0x0ull));
    tmp4 = CodeStubAssembler(state_).SmiEqual(TNode<Smi>{parameter3}, TNode<Smi>{tmp3});
    ca_.Branch(tmp4, &block9, std::vector<compiler::Node*>{}, &block10, std::vector<compiler::Node*>{});
  }

  TNode<Smi> tmp5;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    compiler::CodeAssemblerLabel label6(&ca_);
    tmp5 = Convert_PositiveSmi_uint32_0(state_, TNode<Uint32T>{parameter2}, &label6);
    ca_.Goto(&block7);
    if (label6.is_used()) {
      ca_.Bind(&label6);
      ca_.Goto(&block8);
    }
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapArrayTooLarge, TNode<Object>());
  }

  TNode<NativeContext> tmp7;
  TNode<Smi> tmp8;
  TNode<Object> tmp9;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp7 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    tmp8 = CodeStubAssembler(state_).SmiFromUint32(TNode<Uint32T>{parameter0});
    tmp9 = CodeStubAssembler(state_).CallRuntime(Runtime::kWasmArrayNewSegment, tmp7, tmp0, parameter3, tmp8, tmp1, tmp5, parameter4); 
    CodeStubAssembler(state_).Return(tmp9);
  }

  if (block9.is_used()) {
    ca_.Bind(&block9);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapDataSegmentOutOfBounds, TNode<Object>());
  }

  if (block10.is_used()) {
    ca_.Bind(&block10);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapElementSegmentOutOfBounds, TNode<Object>());
  }
}

TF_BUILTIN(WasmArrayInitSegment, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Uint32T> parameter0 = UncheckedParameter<Uint32T>(Descriptor::kArrayIndex);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kSegmentOffset);
  USE(parameter1);
  TNode<Uint32T> parameter2 = UncheckedParameter<Uint32T>(Descriptor::kLength);
  USE(parameter2);
  TNode<Smi> parameter3 = UncheckedParameter<Smi>(Descriptor::kSegmentIndex);
  USE(parameter3);
  TNode<Smi> parameter4 = UncheckedParameter<Smi>(Descriptor::kIsElement);
  USE(parameter4);
  TNode<HeapObject> parameter5 = UncheckedParameter<HeapObject>(Descriptor::kArrayRaw);
  USE(parameter5);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<WasmNull> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = kWasmNull_0(state_);
    tmp2 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{parameter5}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp1});
    ca_.Branch(tmp2, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapNullDereference, TNode<Object>());
  }

  TNode<WasmArray> tmp3;
  TNode<Smi> tmp4;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp3 = TORQUE_CAST(TNode<HeapObject>{parameter5});
    compiler::CodeAssemblerLabel label5(&ca_);
    tmp4 = Convert_PositiveSmi_uint32_0(state_, TNode<Uint32T>{parameter0}, &label5);
    ca_.Goto(&block7);
    if (label5.is_used()) {
      ca_.Bind(&label5);
      ca_.Goto(&block8);
    }
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    ca_.Goto(&block4);
  }

  TNode<Smi> tmp6;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    compiler::CodeAssemblerLabel label7(&ca_);
    tmp6 = Convert_PositiveSmi_uint32_0(state_, TNode<Uint32T>{parameter1}, &label7);
    ca_.Goto(&block9);
    if (label7.is_used()) {
      ca_.Bind(&label7);
      ca_.Goto(&block10);
    }
  }

  TNode<Smi> tmp8;
  TNode<BoolT> tmp9;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp8 = SmiConstant_0(state_, IntegerLiteral(false, 0x0ull));
    tmp9 = CodeStubAssembler(state_).SmiEqual(TNode<Smi>{parameter4}, TNode<Smi>{tmp8});
    ca_.Branch(tmp9, &block13, std::vector<compiler::Node*>{}, &block14, std::vector<compiler::Node*>{});
  }

  TNode<Smi> tmp10;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    compiler::CodeAssemblerLabel label11(&ca_);
    tmp10 = Convert_PositiveSmi_uint32_0(state_, TNode<Uint32T>{parameter2}, &label11);
    ca_.Goto(&block11);
    if (label11.is_used()) {
      ca_.Bind(&label11);
      ca_.Goto(&block12);
    }
  }

  if (block12.is_used()) {
    ca_.Bind(&block12);
    ca_.Goto(&block4);
  }

  TNode<NativeContext> tmp12;
  TNode<JSAny> tmp13;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp12 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    tmp13 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kWasmArrayInitSegment, tmp12, tmp0, parameter4, parameter3, tmp3, tmp4, tmp6, tmp10)); 
    CodeStubAssembler(state_).Return(tmp13);
  }

  if (block13.is_used()) {
    ca_.Bind(&block13);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapDataSegmentOutOfBounds, TNode<Object>());
  }

  if (block14.is_used()) {
    ca_.Bind(&block14);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapElementSegmentOutOfBounds, TNode<Object>());
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapArrayOutOfBounds, TNode<Object>());
  }
}

TF_BUILTIN(WasmArrayCopy, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Uint32T> parameter0 = UncheckedParameter<Uint32T>(Descriptor::kDstIndex);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kSrcIndex);
  USE(parameter1);
  TNode<Uint32T> parameter2 = UncheckedParameter<Uint32T>(Descriptor::kLength);
  USE(parameter2);
  TNode<Object> parameter3 = UncheckedParameter<Object>(Descriptor::kDstObject);
  USE(parameter3);
  TNode<Object> parameter4 = UncheckedParameter<Object>(Descriptor::kSrcObject);
  USE(parameter4);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block30(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block23(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block34(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block35(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block36(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block33(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block37(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block38(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmNull> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kWasmNull_0(state_);
    tmp1 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{parameter3}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp0});
    ca_.Branch(tmp1, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapNullDereference, TNode<Object>());
  }

  TNode<HeapObject> tmp2;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    compiler::CodeAssemblerLabel label3(&ca_);
    tmp2 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{parameter3}, &label3);
    ca_.Goto(&block10);
    if (label3.is_used()) {
      ca_.Bind(&label3);
      ca_.Goto(&block11);
    }
  }

  if (block11.is_used()) {
    ca_.Bind(&block11);
    ca_.Goto(&block8);
  }

  TNode<WasmArray> tmp4;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    compiler::CodeAssemblerLabel label5(&ca_);
    tmp4 = Cast_WasmArray_0(state_, TNode<HeapObject>{tmp2}, &label5);
    ca_.Goto(&block12);
    if (label5.is_used()) {
      ca_.Bind(&label5);
      ca_.Goto(&block13);
    }
  }

  if (block13.is_used()) {
    ca_.Bind(&block13);
    ca_.Goto(&block8);
  }

  TNode<BoolT> tmp6;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    tmp6 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block6, tmp6);
  }

  TNode<BoolT> tmp7;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp7 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block6, tmp7);
  }

  TNode<BoolT> phi_bb6_9;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_9);
    ca_.Branch(phi_bb6_9, &block4, std::vector<compiler::Node*>{}, &block5, std::vector<compiler::Node*>{});
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/cast.tq", 1025});
      CodeStubAssembler(state_).FailAssert("Torque assert 'Is<A>(o)' failed", pos_stack);
    }
  }

  TNode<WasmArray> tmp8;
  TNode<Uint32T> tmp9;
  TNode<IntPtrT> tmp10;
  TNode<Uint32T> tmp11;
  TNode<BoolT> tmp12;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp8 = TORQUE_CAST(TNode<Object>{parameter3});
    tmp9 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{parameter0}, TNode<Uint32T>{parameter2});
    tmp10 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp11 = CodeStubAssembler(state_).LoadReference<Uint32T>(CodeStubAssembler::Reference{tmp8, tmp10});
    tmp12 = CodeStubAssembler(state_).Uint32GreaterThan(TNode<Uint32T>{tmp9}, TNode<Uint32T>{tmp11});
    ca_.Branch(tmp12, &block16, std::vector<compiler::Node*>{}, &block17, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp13;
  if (block16.is_used()) {
    ca_.Bind(&block16);
    tmp13 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block18, tmp13);
  }

  TNode<Uint32T> tmp14;
  TNode<BoolT> tmp15;
  if (block17.is_used()) {
    ca_.Bind(&block17);
    tmp14 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{parameter0}, TNode<Uint32T>{parameter2});
    tmp15 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{tmp14}, TNode<Uint32T>{parameter0});
    ca_.Goto(&block18, tmp15);
  }

  TNode<BoolT> phi_bb18_7;
  if (block18.is_used()) {
    ca_.Bind(&block18, &phi_bb18_7);
    ca_.Branch(phi_bb18_7, &block14, std::vector<compiler::Node*>{}, &block15, std::vector<compiler::Node*>{});
  }

  if (block14.is_used()) {
    ca_.Bind(&block14);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapArrayOutOfBounds, TNode<Object>());
  }

  TNode<WasmNull> tmp16;
  TNode<BoolT> tmp17;
  if (block15.is_used()) {
    ca_.Bind(&block15);
    tmp16 = kWasmNull_0(state_);
    tmp17 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{parameter4}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp16});
    ca_.Branch(tmp17, &block19, std::vector<compiler::Node*>{}, &block20, std::vector<compiler::Node*>{});
  }

  if (block19.is_used()) {
    ca_.Bind(&block19);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapNullDereference, TNode<Object>());
  }

  TNode<HeapObject> tmp18;
  if (block20.is_used()) {
    ca_.Bind(&block20);
    compiler::CodeAssemblerLabel label19(&ca_);
    tmp18 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{parameter4}, &label19);
    ca_.Goto(&block28);
    if (label19.is_used()) {
      ca_.Bind(&label19);
      ca_.Goto(&block29);
    }
  }

  if (block29.is_used()) {
    ca_.Bind(&block29);
    ca_.Goto(&block26);
  }

  TNode<WasmArray> tmp20;
  if (block28.is_used()) {
    ca_.Bind(&block28);
    compiler::CodeAssemblerLabel label21(&ca_);
    tmp20 = Cast_WasmArray_0(state_, TNode<HeapObject>{tmp18}, &label21);
    ca_.Goto(&block30);
    if (label21.is_used()) {
      ca_.Bind(&label21);
      ca_.Goto(&block31);
    }
  }

  if (block31.is_used()) {
    ca_.Bind(&block31);
    ca_.Goto(&block26);
  }

  TNode<BoolT> tmp22;
  if (block30.is_used()) {
    ca_.Bind(&block30);
    tmp22 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block24, tmp22);
  }

  TNode<BoolT> tmp23;
  if (block26.is_used()) {
    ca_.Bind(&block26);
    tmp23 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block24, tmp23);
  }

  TNode<BoolT> phi_bb24_10;
  if (block24.is_used()) {
    ca_.Bind(&block24, &phi_bb24_10);
    ca_.Branch(phi_bb24_10, &block22, std::vector<compiler::Node*>{}, &block23, std::vector<compiler::Node*>{});
  }

  if (block23.is_used()) {
    ca_.Bind(&block23);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/cast.tq", 1025});
      CodeStubAssembler(state_).FailAssert("Torque assert 'Is<A>(o)' failed", pos_stack);
    }
  }

  TNode<WasmArray> tmp24;
  TNode<Uint32T> tmp25;
  TNode<IntPtrT> tmp26;
  TNode<Uint32T> tmp27;
  TNode<BoolT> tmp28;
  if (block22.is_used()) {
    ca_.Bind(&block22);
    tmp24 = TORQUE_CAST(TNode<Object>{parameter4});
    tmp25 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{parameter1}, TNode<Uint32T>{parameter2});
    tmp26 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp27 = CodeStubAssembler(state_).LoadReference<Uint32T>(CodeStubAssembler::Reference{tmp24, tmp26});
    tmp28 = CodeStubAssembler(state_).Uint32GreaterThan(TNode<Uint32T>{tmp25}, TNode<Uint32T>{tmp27});
    ca_.Branch(tmp28, &block34, std::vector<compiler::Node*>{}, &block35, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp29;
  if (block34.is_used()) {
    ca_.Bind(&block34);
    tmp29 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block36, tmp29);
  }

  TNode<Uint32T> tmp30;
  TNode<BoolT> tmp31;
  if (block35.is_used()) {
    ca_.Bind(&block35);
    tmp30 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{parameter1}, TNode<Uint32T>{parameter2});
    tmp31 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{tmp30}, TNode<Uint32T>{parameter1});
    ca_.Goto(&block36, tmp31);
  }

  TNode<BoolT> phi_bb36_8;
  if (block36.is_used()) {
    ca_.Bind(&block36, &phi_bb36_8);
    ca_.Branch(phi_bb36_8, &block32, std::vector<compiler::Node*>{}, &block33, std::vector<compiler::Node*>{});
  }

  if (block32.is_used()) {
    ca_.Bind(&block32);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapArrayOutOfBounds, TNode<Object>());
  }

  TNode<Uint32T> tmp32;
  TNode<BoolT> tmp33;
  if (block33.is_used()) {
    ca_.Bind(&block33);
    tmp32 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp33 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{parameter2}, TNode<Uint32T>{tmp32});
    ca_.Branch(tmp33, &block37, std::vector<compiler::Node*>{}, &block38, std::vector<compiler::Node*>{});
  }

  TNode<Undefined> tmp34;
  if (block37.is_used()) {
    ca_.Bind(&block37);
    tmp34 = Undefined_0(state_);
    CodeStubAssembler(state_).Return(tmp34);
  }

  TNode<NativeContext> tmp35;
  TNode<Smi> tmp36;
  TNode<Smi> tmp37;
  TNode<Smi> tmp38;
  if (block38.is_used()) {
    ca_.Bind(&block38);
    tmp35 = LoadContextFromFrame_0(state_);
    tmp36 = CodeStubAssembler(state_).SmiFromUint32(TNode<Uint32T>{parameter0});
    tmp37 = CodeStubAssembler(state_).SmiFromUint32(TNode<Uint32T>{parameter1});
    tmp38 = CodeStubAssembler(state_).SmiFromUint32(TNode<Uint32T>{parameter2});
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmArrayCopy, tmp35, tmp8, tmp36, tmp24, tmp37, tmp38);
  }
}

TF_BUILTIN(WasmUint32ToNumber, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Uint32T> parameter0 = UncheckedParameter<Uint32T>(Descriptor::kValue);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Number> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).ChangeUint32ToTagged(TNode<Uint32T>{parameter0});
    CodeStubAssembler(state_).Return(tmp0);
  }
}

TF_BUILTIN(UintPtr53ToNumber, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<UintPtrT> parameter0 = UncheckedParameter<UintPtrT>(Descriptor::kValue);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<UintPtrT> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_uintptr_constexpr_uintptr_0(state_, kSmiMaxValue);
    tmp1 = CodeStubAssembler(state_).UintPtrLessThanOrEqual(TNode<UintPtrT>{parameter0}, TNode<UintPtrT>{tmp0});
    ca_.Branch(tmp1, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp2;
  TNode<Smi> tmp3;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp2 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{parameter0});
    tmp3 = Convert_Smi_intptr_0(state_, TNode<IntPtrT>{tmp2});
    CodeStubAssembler(state_).Return(tmp3);
  }

  TNode<Float64T> tmp4;
  TNode<UintPtrT> tmp5;
  TNode<BoolT> tmp6;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp4 = CodeStubAssembler(state_).ChangeUintPtrToFloat64(TNode<UintPtrT>{parameter0});
    tmp5 = CodeStubAssembler(state_).ChangeFloat64ToUintPtr(TNode<Float64T>{tmp4});
    tmp6 = CodeStubAssembler(state_).WordEqual(TNode<UintPtrT>{tmp5}, TNode<UintPtrT>{parameter0});
    ca_.Branch(tmp6, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/wasm.tq", 688});
      CodeStubAssembler(state_).FailAssert("Torque assert 'ChangeFloat64ToUintPtr(valueFloat) == value' failed", pos_stack);
    }
  }

  TNode<HeapNumber> tmp7;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp7 = CodeStubAssembler(state_).AllocateHeapNumberWithValue(TNode<Float64T>{tmp4});
    CodeStubAssembler(state_).Return(tmp7);
  }
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=696&c=1
TNode<Number> UintPtrToNumberRounding_0(compiler::CodeAssemblerState* state_, TNode<UintPtrT> p_value) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<UintPtrT> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_uintptr_constexpr_uintptr_0(state_, kSmiMaxValue);
    tmp1 = CodeStubAssembler(state_).UintPtrLessThanOrEqual(TNode<UintPtrT>{p_value}, TNode<UintPtrT>{tmp0});
    ca_.Branch(tmp1, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp2;
  TNode<Smi> tmp3;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp2 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{p_value});
    tmp3 = Convert_Smi_intptr_0(state_, TNode<IntPtrT>{tmp2});
    ca_.Goto(&block1, tmp3);
  }

  TNode<Float64T> tmp4;
  TNode<HeapNumber> tmp5;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp4 = CodeStubAssembler(state_).ChangeUintPtrToFloat64(TNode<UintPtrT>{p_value});
    tmp5 = CodeStubAssembler(state_).AllocateHeapNumberWithValue(TNode<Float64T>{tmp4});
    ca_.Goto(&block1, tmp5);
  }

  TNode<Number> phi_bb1_1;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_1);
    ca_.Goto(&block4);
  }

    ca_.Bind(&block4);
  return TNode<Number>{phi_bb1_1};
}

TF_BUILTIN(WasmI32AtomicWait, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Int32T> parameter0 = UncheckedParameter<Int32T>(Descriptor::kMemIndex);
  USE(parameter0);
  TNode<UintPtrT> parameter1 = UncheckedParameter<UintPtrT>(Descriptor::kOffset);
  USE(parameter1);
  TNode<Int32T> parameter2 = UncheckedParameter<Int32T>(Descriptor::kExpectedValue);
  USE(parameter2);
  TNode<BigInt> parameter3 = UncheckedParameter<BigInt>(Descriptor::kTimeout);
  USE(parameter3);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<NativeContext> tmp1;
  TNode<Smi> tmp2;
  TNode<Number> tmp3;
  TNode<Number> tmp4;
  TNode<Smi> tmp5;
  TNode<Int32T> tmp6;
  TNode<Uint32T> tmp7;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    tmp2 = CodeStubAssembler(state_).SmiFromInt32(TNode<Int32T>{parameter0});
    tmp3 = ca_.CallBuiltin<Number>(Builtin::kUintPtr53ToNumber, TNode<Object>(), parameter1);
    tmp4 = CodeStubAssembler(state_).ChangeInt32ToTagged(TNode<Int32T>{parameter2});
    tmp5 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kWasmI32AtomicWait, tmp1, tmp0, tmp2, tmp3, tmp4, parameter3)); 
    tmp6 = CodeStubAssembler(state_).SmiToInt32(TNode<Smi>{tmp5});
    tmp7 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp6});
    CodeStubAssembler(state_).Return(tmp7);
  }
}

TF_BUILTIN(WasmI64AtomicWait, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Int32T> parameter0 = UncheckedParameter<Int32T>(Descriptor::kMemIndex);
  USE(parameter0);
  TNode<UintPtrT> parameter1 = UncheckedParameter<UintPtrT>(Descriptor::kOffset);
  USE(parameter1);
  TNode<BigInt> parameter2 = UncheckedParameter<BigInt>(Descriptor::kExpectedValue);
  USE(parameter2);
  TNode<BigInt> parameter3 = UncheckedParameter<BigInt>(Descriptor::kTimeout);
  USE(parameter3);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<NativeContext> tmp1;
  TNode<Smi> tmp2;
  TNode<Number> tmp3;
  TNode<Smi> tmp4;
  TNode<Int32T> tmp5;
  TNode<Uint32T> tmp6;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    tmp2 = CodeStubAssembler(state_).SmiFromInt32(TNode<Int32T>{parameter0});
    tmp3 = ca_.CallBuiltin<Number>(Builtin::kUintPtr53ToNumber, TNode<Object>(), parameter1);
    tmp4 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kWasmI64AtomicWait, tmp1, tmp0, tmp2, tmp3, parameter2, parameter3)); 
    tmp5 = CodeStubAssembler(state_).SmiToInt32(TNode<Smi>{tmp4});
    tmp6 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp5});
    CodeStubAssembler(state_).Return(tmp6);
  }
}

TF_BUILTIN(WasmManagedObjectWait32, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<HeapObject> parameter0 = UncheckedParameter<HeapObject>(Descriptor::kObject);
  USE(parameter0);
  TNode<Int32T> parameter1 = UncheckedParameter<Int32T>(Descriptor::kFieldOffset);
  USE(parameter1);
  TNode<Int32T> parameter2 = UncheckedParameter<Int32T>(Descriptor::kExpectedValue);
  USE(parameter2);
  TNode<HeapObject> parameter3 = UncheckedParameter<HeapObject>(Descriptor::kWaitqueue);
  USE(parameter3);
  TNode<BigInt> parameter4 = UncheckedParameter<BigInt>(Descriptor::kTimeout);
  USE(parameter4);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  TNode<Smi> tmp1;
  TNode<Number> tmp2;
  TNode<Smi> tmp3;
  TNode<Int32T> tmp4;
  TNode<Uint32T> tmp5;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
    tmp1 = CodeStubAssembler(state_).SmiFromInt32(TNode<Int32T>{parameter1});
    tmp2 = CodeStubAssembler(state_).ChangeInt32ToTagged(TNode<Int32T>{parameter2});
    tmp3 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kWasmManagedObjectWait32, tmp0, parameter0, tmp1, tmp2, parameter3, parameter4)); 
    tmp4 = CodeStubAssembler(state_).SmiToInt32(TNode<Smi>{tmp3});
    tmp5 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp4});
    CodeStubAssembler(state_).Return(tmp5);
  }
}

TF_BUILTIN(WasmManagedObjectWait64, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<HeapObject> parameter0 = UncheckedParameter<HeapObject>(Descriptor::kObject);
  USE(parameter0);
  TNode<Int32T> parameter1 = UncheckedParameter<Int32T>(Descriptor::kFieldOffset);
  USE(parameter1);
  TNode<BigInt> parameter2 = UncheckedParameter<BigInt>(Descriptor::kExpectedValue);
  USE(parameter2);
  TNode<HeapObject> parameter3 = UncheckedParameter<HeapObject>(Descriptor::kWaitqueue);
  USE(parameter3);
  TNode<BigInt> parameter4 = UncheckedParameter<BigInt>(Descriptor::kTimeout);
  USE(parameter4);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  TNode<Smi> tmp1;
  TNode<Smi> tmp2;
  TNode<Int32T> tmp3;
  TNode<Uint32T> tmp4;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
    tmp1 = CodeStubAssembler(state_).SmiFromInt32(TNode<Int32T>{parameter1});
    tmp2 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kWasmManagedObjectWait64, tmp0, parameter0, tmp1, parameter2, parameter3, parameter4)); 
    tmp3 = CodeStubAssembler(state_).SmiToInt32(TNode<Smi>{tmp2});
    tmp4 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp3});
    CodeStubAssembler(state_).Return(tmp4);
  }
}

TF_BUILTIN(WasmManagedObjectWaitRef, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<HeapObject> parameter0 = UncheckedParameter<HeapObject>(Descriptor::kObject);
  USE(parameter0);
  TNode<Int32T> parameter1 = UncheckedParameter<Int32T>(Descriptor::kFieldOffset);
  USE(parameter1);
  TNode<Object> parameter2 = UncheckedParameter<Object>(Descriptor::kExpectedValue);
  USE(parameter2);
  TNode<HeapObject> parameter3 = UncheckedParameter<HeapObject>(Descriptor::kWaitqueue);
  USE(parameter3);
  TNode<BigInt> parameter4 = UncheckedParameter<BigInt>(Descriptor::kTimeout);
  USE(parameter4);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  TNode<Smi> tmp1;
  TNode<Smi> tmp2;
  TNode<Int32T> tmp3;
  TNode<Uint32T> tmp4;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
    tmp1 = CodeStubAssembler(state_).SmiFromInt32(TNode<Int32T>{parameter1});
    tmp2 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kWasmManagedObjectWaitRef, tmp0, parameter0, tmp1, parameter2, parameter3, parameter4)); 
    tmp3 = CodeStubAssembler(state_).SmiToInt32(TNode<Smi>{tmp2});
    tmp4 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp3});
    CodeStubAssembler(state_).Return(tmp4);
  }
}

TF_BUILTIN(WasmWaitqueueNew, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmWaitqueueNew, tmp0);
  }
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=763&c=1
void UpdateCallRefOrIndirectIC_0(compiler::CodeAssemblerState* state_, TNode<FixedArray> p_vector, TNode<IntPtrT> p_index, TNode<Object> p_target) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block22(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block33(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block43(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block42(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block45(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block44(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block40(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block38(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block36(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block54(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block53(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block56(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block55(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block51(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block49(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block48(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block47(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block59(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block57(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block67(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block68(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block61(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block75(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block76(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block86(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block85(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BoolT> block82(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block81(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block80(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block91(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block92(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block62(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block58(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block37(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block95(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block99(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block98(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block104(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block105(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block112(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block113(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block96(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block123(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block122(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block125(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block124(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block120(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block118(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block116(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block135(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block134(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block137(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block136(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block132(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block130(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block129(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block128(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block138(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block145(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block146(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block139(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block157(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block156(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block159(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block158(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block154(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block152(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block151(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block150(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block162(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block160(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block168(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block169(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block176(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT, IntPtrT> block177(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block161(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block184(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block185(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block192(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block193(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block200(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block201(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block140(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block117(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block204(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block205(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block214(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block213(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block216(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block215(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block211(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block209(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block217(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block218(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block224(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block223(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block220(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block219(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block225(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block226(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT, BoolT> block227(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block208(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block207(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block236(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block235(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block238(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block237(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block233(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block231(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block230(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block229(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block244(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block245(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block253(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block254(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block262(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block263(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block271(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block272(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block279(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block280(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block287(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block288(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block206(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block126(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block97(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block291(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Union<HeapObject, TaggedIndex>> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<UintPtrT> tmp3;
  TNode<UintPtrT> tmp4;
  TNode<BoolT> tmp5;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    std::tie(tmp0, tmp1, tmp2) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{p_vector}).Flatten();
    tmp3 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{p_index});
    tmp4 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp2});
    tmp5 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp3}, TNode<UintPtrT>{tmp4});
    ca_.Branch(tmp5, &block6, std::vector<compiler::Node*>{}, &block7, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp6;
  TNode<IntPtrT> tmp7;
  TNode<Union<HeapObject, TaggedIndex>> tmp8;
  TNode<IntPtrT> tmp9;
  TNode<Object> tmp10;
  TNode<Union<HeapObject, TaggedIndex>> tmp11;
  TNode<IntPtrT> tmp12;
  TNode<IntPtrT> tmp13;
  TNode<IntPtrT> tmp14;
  TNode<IntPtrT> tmp15;
  TNode<UintPtrT> tmp16;
  TNode<UintPtrT> tmp17;
  TNode<BoolT> tmp18;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp6 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{p_index});
    tmp7 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp1}, TNode<IntPtrT>{tmp6});
    std::tie(tmp8, tmp9) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp0}, TNode<IntPtrT>{tmp7}).Flatten();
    tmp10 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp8, tmp9});
    std::tie(tmp11, tmp12, tmp13) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{p_vector}).Flatten();
    tmp14 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp15 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_index}, TNode<IntPtrT>{tmp14});
    tmp16 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp15});
    tmp17 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp13});
    tmp18 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp16}, TNode<UintPtrT>{tmp17});
    ca_.Branch(tmp18, &block14, std::vector<compiler::Node*>{}, &block15, std::vector<compiler::Node*>{});
  }

  if (block7.is_used()) {
    ca_.Bind(&block7);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> tmp19;
  TNode<IntPtrT> tmp20;
  TNode<Union<HeapObject, TaggedIndex>> tmp21;
  TNode<IntPtrT> tmp22;
  TNode<Object> tmp23;
  TNode<BoolT> tmp24;
  if (block14.is_used()) {
    ca_.Bind(&block14);
    tmp19 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp15});
    tmp20 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp12}, TNode<IntPtrT>{tmp19});
    std::tie(tmp21, tmp22) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp11}, TNode<IntPtrT>{tmp20}).Flatten();
    tmp23 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp21, tmp22});
    tmp24 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{tmp10}, TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{p_target});
    ca_.Branch(tmp24, &block18, std::vector<compiler::Node*>{}, &block19, std::vector<compiler::Node*>{});
  }

  if (block15.is_used()) {
    ca_.Bind(&block15);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Smi> tmp25;
  if (block18.is_used()) {
    ca_.Bind(&block18);
    compiler::CodeAssemblerLabel label26(&ca_);
    tmp25 = Cast_Smi_0(state_, TNode<Object>{tmp23}, &label26);
    ca_.Goto(&block26);
    if (label26.is_used()) {
      ca_.Bind(&label26);
      ca_.Goto(&block27);
    }
  }

  TNode<BoolT> tmp27;
  if (block27.is_used()) {
    ca_.Bind(&block27);
    tmp27 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block23, tmp27);
  }

  TNode<BoolT> tmp28;
  if (block26.is_used()) {
    ca_.Bind(&block26);
    tmp28 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block23, tmp28);
  }

  TNode<BoolT> phi_bb23_9;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_9);
    ca_.Branch(phi_bb23_9, &block21, std::vector<compiler::Node*>{}, &block22, std::vector<compiler::Node*>{});
  }

  if (block22.is_used()) {
    ca_.Bind(&block22);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/cast.tq", 1025});
      CodeStubAssembler(state_).FailAssert("Torque assert 'Is<A>(o)' failed", pos_stack);
    }
  }

  TNode<Smi> tmp29;
  TNode<Smi> tmp30;
  TNode<Smi> tmp31;
  TNode<Union<HeapObject, TaggedIndex>> tmp32;
  TNode<IntPtrT> tmp33;
  TNode<IntPtrT> tmp34;
  TNode<IntPtrT> tmp35;
  TNode<IntPtrT> tmp36;
  TNode<UintPtrT> tmp37;
  TNode<UintPtrT> tmp38;
  TNode<BoolT> tmp39;
  if (block21.is_used()) {
    ca_.Bind(&block21);
    tmp29 = TORQUE_CAST(TNode<Object>{tmp23});
    tmp30 = SmiConstant_0(state_, IntegerLiteral(false, 0x1ull));
    tmp31 = CodeStubAssembler(state_).SmiAdd(TNode<Smi>{tmp29}, TNode<Smi>{tmp30});
    std::tie(tmp32, tmp33, tmp34) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{p_vector}).Flatten();
    tmp35 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp36 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_index}, TNode<IntPtrT>{tmp35});
    tmp37 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp36});
    tmp38 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp34});
    tmp39 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp37}, TNode<UintPtrT>{tmp38});
    ca_.Branch(tmp39, &block32, std::vector<compiler::Node*>{}, &block33, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp40;
  TNode<IntPtrT> tmp41;
  TNode<Union<HeapObject, TaggedIndex>> tmp42;
  TNode<IntPtrT> tmp43;
  if (block32.is_used()) {
    ca_.Bind(&block32);
    tmp40 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp36});
    tmp41 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp33}, TNode<IntPtrT>{tmp40});
    std::tie(tmp42, tmp43) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp32}, TNode<IntPtrT>{tmp41}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp42, tmp43}, tmp31);
    ca_.Goto(&block1);
  }

  if (block33.is_used()) {
    ca_.Bind(&block33);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<HeapObject> tmp44;
  if (block19.is_used()) {
    ca_.Bind(&block19);
    compiler::CodeAssemblerLabel label45(&ca_);
    tmp44 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{tmp10}, &label45);
    ca_.Goto(&block42);
    if (label45.is_used()) {
      ca_.Bind(&label45);
      ca_.Goto(&block43);
    }
  }

  if (block43.is_used()) {
    ca_.Bind(&block43);
    ca_.Goto(&block40);
  }

  TNode<FixedArray> tmp46;
  if (block42.is_used()) {
    ca_.Bind(&block42);
    compiler::CodeAssemblerLabel label47(&ca_);
    tmp46 = Cast_FixedArray_0(state_, TNode<HeapObject>{tmp44}, &label47);
    ca_.Goto(&block44);
    if (label47.is_used()) {
      ca_.Bind(&label47);
      ca_.Goto(&block45);
    }
  }

  if (block45.is_used()) {
    ca_.Bind(&block45);
    ca_.Goto(&block40);
  }

  TNode<BoolT> tmp48;
  if (block44.is_used()) {
    ca_.Bind(&block44);
    tmp48 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block38, tmp48);
  }

  TNode<BoolT> tmp49;
  if (block40.is_used()) {
    ca_.Bind(&block40);
    tmp49 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block38, tmp49);
  }

  TNode<BoolT> phi_bb38_7;
  if (block38.is_used()) {
    ca_.Bind(&block38, &phi_bb38_7);
    ca_.Branch(phi_bb38_7, &block36, std::vector<compiler::Node*>{}, &block37, std::vector<compiler::Node*>{});
  }

  TNode<HeapObject> tmp50;
  if (block36.is_used()) {
    ca_.Bind(&block36);
    compiler::CodeAssemblerLabel label51(&ca_);
    tmp50 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{tmp10}, &label51);
    ca_.Goto(&block53);
    if (label51.is_used()) {
      ca_.Bind(&label51);
      ca_.Goto(&block54);
    }
  }

  if (block54.is_used()) {
    ca_.Bind(&block54);
    ca_.Goto(&block51);
  }

  TNode<FixedArray> tmp52;
  if (block53.is_used()) {
    ca_.Bind(&block53);
    compiler::CodeAssemblerLabel label53(&ca_);
    tmp52 = Cast_FixedArray_0(state_, TNode<HeapObject>{tmp50}, &label53);
    ca_.Goto(&block55);
    if (label53.is_used()) {
      ca_.Bind(&label53);
      ca_.Goto(&block56);
    }
  }

  if (block56.is_used()) {
    ca_.Bind(&block56);
    ca_.Goto(&block51);
  }

  TNode<BoolT> tmp54;
  if (block55.is_used()) {
    ca_.Bind(&block55);
    tmp54 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block49, tmp54);
  }

  TNode<BoolT> tmp55;
  if (block51.is_used()) {
    ca_.Bind(&block51);
    tmp55 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block49, tmp55);
  }

  TNode<BoolT> phi_bb49_9;
  if (block49.is_used()) {
    ca_.Bind(&block49, &phi_bb49_9);
    ca_.Branch(phi_bb49_9, &block47, std::vector<compiler::Node*>{}, &block48, std::vector<compiler::Node*>{});
  }

  if (block48.is_used()) {
    ca_.Bind(&block48);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/cast.tq", 1025});
      CodeStubAssembler(state_).FailAssert("Torque assert 'Is<A>(o)' failed", pos_stack);
    }
  }

  TNode<FixedArray> tmp56;
  TNode<IntPtrT> tmp57;
  if (block47.is_used()) {
    ca_.Bind(&block47);
    tmp56 = TORQUE_CAST(TNode<Object>{tmp10});
    tmp57 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block59, tmp57);
  }

  TNode<IntPtrT> phi_bb59_6;
  TNode<IntPtrT> tmp58;
  TNode<BoolT> tmp59;
  if (block59.is_used()) {
    ca_.Bind(&block59, &phi_bb59_6);
    tmp58 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{tmp56});
    tmp59 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb59_6}, TNode<IntPtrT>{tmp58});
    ca_.Branch(tmp59, &block57, std::vector<compiler::Node*>{phi_bb59_6}, &block58, std::vector<compiler::Node*>{phi_bb59_6});
  }

  TNode<IntPtrT> phi_bb57_6;
  TNode<Union<HeapObject, TaggedIndex>> tmp60;
  TNode<IntPtrT> tmp61;
  TNode<IntPtrT> tmp62;
  TNode<UintPtrT> tmp63;
  TNode<UintPtrT> tmp64;
  TNode<BoolT> tmp65;
  if (block57.is_used()) {
    ca_.Bind(&block57, &phi_bb57_6);
    std::tie(tmp60, tmp61, tmp62) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp56}).Flatten();
    tmp63 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb57_6});
    tmp64 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp62});
    tmp65 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp63}, TNode<UintPtrT>{tmp64});
    ca_.Branch(tmp65, &block67, std::vector<compiler::Node*>{phi_bb57_6, phi_bb57_6, phi_bb57_6, phi_bb57_6, phi_bb57_6}, &block68, std::vector<compiler::Node*>{phi_bb57_6, phi_bb57_6, phi_bb57_6, phi_bb57_6, phi_bb57_6});
  }

  TNode<IntPtrT> phi_bb67_6;
  TNode<IntPtrT> phi_bb67_11;
  TNode<IntPtrT> phi_bb67_12;
  TNode<IntPtrT> phi_bb67_16;
  TNode<IntPtrT> phi_bb67_17;
  TNode<IntPtrT> tmp66;
  TNode<IntPtrT> tmp67;
  TNode<Union<HeapObject, TaggedIndex>> tmp68;
  TNode<IntPtrT> tmp69;
  TNode<Object> tmp70;
  TNode<BoolT> tmp71;
  if (block67.is_used()) {
    ca_.Bind(&block67, &phi_bb67_6, &phi_bb67_11, &phi_bb67_12, &phi_bb67_16, &phi_bb67_17);
    tmp66 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb67_17});
    tmp67 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp61}, TNode<IntPtrT>{tmp66});
    std::tie(tmp68, tmp69) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp60}, TNode<IntPtrT>{tmp67}).Flatten();
    tmp70 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp68, tmp69});
    tmp71 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{tmp70}, TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{p_target});
    ca_.Branch(tmp71, &block61, std::vector<compiler::Node*>{phi_bb67_6}, &block62, std::vector<compiler::Node*>{phi_bb67_6});
  }

  TNode<IntPtrT> phi_bb68_6;
  TNode<IntPtrT> phi_bb68_11;
  TNode<IntPtrT> phi_bb68_12;
  TNode<IntPtrT> phi_bb68_16;
  TNode<IntPtrT> phi_bb68_17;
  if (block68.is_used()) {
    ca_.Bind(&block68, &phi_bb68_6, &phi_bb68_11, &phi_bb68_12, &phi_bb68_16, &phi_bb68_17);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb61_6;
  TNode<Union<HeapObject, TaggedIndex>> tmp72;
  TNode<IntPtrT> tmp73;
  TNode<IntPtrT> tmp74;
  TNode<IntPtrT> tmp75;
  TNode<IntPtrT> tmp76;
  TNode<UintPtrT> tmp77;
  TNode<UintPtrT> tmp78;
  TNode<BoolT> tmp79;
  if (block61.is_used()) {
    ca_.Bind(&block61, &phi_bb61_6);
    std::tie(tmp72, tmp73, tmp74) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp56}).Flatten();
    tmp75 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp76 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb61_6}, TNode<IntPtrT>{tmp75});
    tmp77 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp76});
    tmp78 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp74});
    tmp79 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp77}, TNode<UintPtrT>{tmp78});
    ca_.Branch(tmp79, &block75, std::vector<compiler::Node*>{phi_bb61_6}, &block76, std::vector<compiler::Node*>{phi_bb61_6});
  }

  TNode<IntPtrT> phi_bb75_6;
  TNode<IntPtrT> tmp80;
  TNode<IntPtrT> tmp81;
  TNode<Union<HeapObject, TaggedIndex>> tmp82;
  TNode<IntPtrT> tmp83;
  TNode<Object> tmp84;
  TNode<Smi> tmp85;
  if (block75.is_used()) {
    ca_.Bind(&block75, &phi_bb75_6);
    tmp80 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp76});
    tmp81 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp73}, TNode<IntPtrT>{tmp80});
    std::tie(tmp82, tmp83) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp72}, TNode<IntPtrT>{tmp81}).Flatten();
    tmp84 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp82, tmp83});
    compiler::CodeAssemblerLabel label86(&ca_);
    tmp85 = Cast_Smi_0(state_, TNode<Object>{tmp84}, &label86);
    ca_.Goto(&block85, phi_bb75_6);
    if (label86.is_used()) {
      ca_.Bind(&label86);
      ca_.Goto(&block86, phi_bb75_6);
    }
  }

  TNode<IntPtrT> phi_bb76_6;
  if (block76.is_used()) {
    ca_.Bind(&block76, &phi_bb76_6);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb86_6;
  TNode<BoolT> tmp87;
  if (block86.is_used()) {
    ca_.Bind(&block86, &phi_bb86_6);
    tmp87 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block82, phi_bb86_6, tmp87);
  }

  TNode<IntPtrT> phi_bb85_6;
  TNode<BoolT> tmp88;
  if (block85.is_used()) {
    ca_.Bind(&block85, &phi_bb85_6);
    tmp88 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block82, phi_bb85_6, tmp88);
  }

  TNode<IntPtrT> phi_bb82_6;
  TNode<BoolT> phi_bb82_11;
  if (block82.is_used()) {
    ca_.Bind(&block82, &phi_bb82_6, &phi_bb82_11);
    ca_.Branch(phi_bb82_11, &block80, std::vector<compiler::Node*>{phi_bb82_6}, &block81, std::vector<compiler::Node*>{phi_bb82_6});
  }

  TNode<IntPtrT> phi_bb81_6;
  if (block81.is_used()) {
    ca_.Bind(&block81, &phi_bb81_6);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/cast.tq", 1025});
      CodeStubAssembler(state_).FailAssert("Torque assert 'Is<A>(o)' failed", pos_stack);
    }
  }

  TNode<IntPtrT> phi_bb80_6;
  TNode<Smi> tmp89;
  TNode<Smi> tmp90;
  TNode<Smi> tmp91;
  TNode<Union<HeapObject, TaggedIndex>> tmp92;
  TNode<IntPtrT> tmp93;
  TNode<IntPtrT> tmp94;
  TNode<IntPtrT> tmp95;
  TNode<IntPtrT> tmp96;
  TNode<UintPtrT> tmp97;
  TNode<UintPtrT> tmp98;
  TNode<BoolT> tmp99;
  if (block80.is_used()) {
    ca_.Bind(&block80, &phi_bb80_6);
    tmp89 = TORQUE_CAST(TNode<Object>{tmp84});
    tmp90 = SmiConstant_0(state_, IntegerLiteral(false, 0x1ull));
    tmp91 = CodeStubAssembler(state_).SmiAdd(TNode<Smi>{tmp89}, TNode<Smi>{tmp90});
    std::tie(tmp92, tmp93, tmp94) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp56}).Flatten();
    tmp95 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp96 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb80_6}, TNode<IntPtrT>{tmp95});
    tmp97 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp96});
    tmp98 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp94});
    tmp99 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp97}, TNode<UintPtrT>{tmp98});
    ca_.Branch(tmp99, &block91, std::vector<compiler::Node*>{phi_bb80_6}, &block92, std::vector<compiler::Node*>{phi_bb80_6});
  }

  TNode<IntPtrT> phi_bb91_6;
  TNode<IntPtrT> tmp100;
  TNode<IntPtrT> tmp101;
  TNode<Union<HeapObject, TaggedIndex>> tmp102;
  TNode<IntPtrT> tmp103;
  if (block91.is_used()) {
    ca_.Bind(&block91, &phi_bb91_6);
    tmp100 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp96});
    tmp101 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp93}, TNode<IntPtrT>{tmp100});
    std::tie(tmp102, tmp103) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp92}, TNode<IntPtrT>{tmp101}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp102, tmp103}, tmp91);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb92_6;
  if (block92.is_used()) {
    ca_.Bind(&block92, &phi_bb92_6);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb62_6;
  TNode<IntPtrT> tmp104;
  TNode<IntPtrT> tmp105;
  if (block62.is_used()) {
    ca_.Bind(&block62, &phi_bb62_6);
    tmp104 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    tmp105 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb62_6}, TNode<IntPtrT>{tmp104});
    ca_.Goto(&block59, tmp105);
  }

  TNode<IntPtrT> phi_bb58_6;
  if (block58.is_used()) {
    ca_.Bind(&block58, &phi_bb58_6);
    ca_.Goto(&block37);
  }

  TNode<Smi> tmp106;
  TNode<BoolT> tmp107;
  if (block37.is_used()) {
    ca_.Bind(&block37);
    tmp106 = SmiConstant_0(state_, IntegerLiteral(false, 0x0ull));
    tmp107 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{tmp23}, TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{tmp106});
    ca_.Branch(tmp107, &block95, std::vector<compiler::Node*>{}, &block96, std::vector<compiler::Node*>{});
  }

  TNode<Smi> tmp108;
  TNode<BoolT> tmp109;
  if (block95.is_used()) {
    ca_.Bind(&block95);
    tmp108 = SmiConstant_0(state_, IntegerLiteral(false, 0x0ull));
    tmp109 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{tmp10}, TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{tmp108});
    ca_.Branch(tmp109, &block98, std::vector<compiler::Node*>{}, &block99, std::vector<compiler::Node*>{});
  }

  if (block99.is_used()) {
    ca_.Bind(&block99);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/wasm.tq", 794});
      CodeStubAssembler(state_).FailAssert("Torque assert 'TaggedEqual(firstSlot, SmiConstant(0))' failed", pos_stack);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> tmp110;
  TNode<IntPtrT> tmp111;
  TNode<IntPtrT> tmp112;
  TNode<UintPtrT> tmp113;
  TNode<UintPtrT> tmp114;
  TNode<BoolT> tmp115;
  if (block98.is_used()) {
    ca_.Bind(&block98);
    std::tie(tmp110, tmp111, tmp112) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{p_vector}).Flatten();
    tmp113 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{p_index});
    tmp114 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp112});
    tmp115 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp113}, TNode<UintPtrT>{tmp114});
    ca_.Branch(tmp115, &block104, std::vector<compiler::Node*>{}, &block105, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp116;
  TNode<IntPtrT> tmp117;
  TNode<Union<HeapObject, TaggedIndex>> tmp118;
  TNode<IntPtrT> tmp119;
  TNode<Union<HeapObject, TaggedIndex>> tmp120;
  TNode<IntPtrT> tmp121;
  TNode<IntPtrT> tmp122;
  TNode<IntPtrT> tmp123;
  TNode<IntPtrT> tmp124;
  TNode<UintPtrT> tmp125;
  TNode<UintPtrT> tmp126;
  TNode<BoolT> tmp127;
  if (block104.is_used()) {
    ca_.Bind(&block104);
    tmp116 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{p_index});
    tmp117 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp111}, TNode<IntPtrT>{tmp116});
    std::tie(tmp118, tmp119) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp110}, TNode<IntPtrT>{tmp117}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp118, tmp119}, p_target);
    std::tie(tmp120, tmp121, tmp122) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{p_vector}).Flatten();
    tmp123 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp124 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_index}, TNode<IntPtrT>{tmp123});
    tmp125 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp124});
    tmp126 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp122});
    tmp127 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp125}, TNode<UintPtrT>{tmp126});
    ca_.Branch(tmp127, &block112, std::vector<compiler::Node*>{}, &block113, std::vector<compiler::Node*>{});
  }

  if (block105.is_used()) {
    ca_.Bind(&block105);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> tmp128;
  TNode<IntPtrT> tmp129;
  TNode<Union<HeapObject, TaggedIndex>> tmp130;
  TNode<IntPtrT> tmp131;
  TNode<Smi> tmp132;
  if (block112.is_used()) {
    ca_.Bind(&block112);
    tmp128 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp124});
    tmp129 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp121}, TNode<IntPtrT>{tmp128});
    std::tie(tmp130, tmp131) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp120}, TNode<IntPtrT>{tmp129}).Flatten();
    tmp132 = SmiConstant_0(state_, IntegerLiteral(false, 0x1ull));
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp130, tmp131}, tmp132);
    ca_.Goto(&block97);
  }

  if (block113.is_used()) {
    ca_.Bind(&block113);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<HeapObject> tmp133;
  if (block96.is_used()) {
    ca_.Bind(&block96);
    compiler::CodeAssemblerLabel label134(&ca_);
    tmp133 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{tmp10}, &label134);
    ca_.Goto(&block122);
    if (label134.is_used()) {
      ca_.Bind(&label134);
      ca_.Goto(&block123);
    }
  }

  if (block123.is_used()) {
    ca_.Bind(&block123);
    ca_.Goto(&block120);
  }

  TNode<FixedArray> tmp135;
  if (block122.is_used()) {
    ca_.Bind(&block122);
    compiler::CodeAssemblerLabel label136(&ca_);
    tmp135 = Cast_FixedArray_0(state_, TNode<HeapObject>{tmp133}, &label136);
    ca_.Goto(&block124);
    if (label136.is_used()) {
      ca_.Bind(&label136);
      ca_.Goto(&block125);
    }
  }

  if (block125.is_used()) {
    ca_.Bind(&block125);
    ca_.Goto(&block120);
  }

  TNode<BoolT> tmp137;
  if (block124.is_used()) {
    ca_.Bind(&block124);
    tmp137 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block118, tmp137);
  }

  TNode<BoolT> tmp138;
  if (block120.is_used()) {
    ca_.Bind(&block120);
    tmp138 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block118, tmp138);
  }

  TNode<BoolT> phi_bb118_7;
  if (block118.is_used()) {
    ca_.Bind(&block118, &phi_bb118_7);
    ca_.Branch(phi_bb118_7, &block116, std::vector<compiler::Node*>{}, &block117, std::vector<compiler::Node*>{});
  }

  TNode<HeapObject> tmp139;
  if (block116.is_used()) {
    ca_.Bind(&block116);
    compiler::CodeAssemblerLabel label140(&ca_);
    tmp139 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{tmp10}, &label140);
    ca_.Goto(&block134);
    if (label140.is_used()) {
      ca_.Bind(&label140);
      ca_.Goto(&block135);
    }
  }

  if (block135.is_used()) {
    ca_.Bind(&block135);
    ca_.Goto(&block132);
  }

  TNode<FixedArray> tmp141;
  if (block134.is_used()) {
    ca_.Bind(&block134);
    compiler::CodeAssemblerLabel label142(&ca_);
    tmp141 = Cast_FixedArray_0(state_, TNode<HeapObject>{tmp139}, &label142);
    ca_.Goto(&block136);
    if (label142.is_used()) {
      ca_.Bind(&label142);
      ca_.Goto(&block137);
    }
  }

  if (block137.is_used()) {
    ca_.Bind(&block137);
    ca_.Goto(&block132);
  }

  TNode<BoolT> tmp143;
  if (block136.is_used()) {
    ca_.Bind(&block136);
    tmp143 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block130, tmp143);
  }

  TNode<BoolT> tmp144;
  if (block132.is_used()) {
    ca_.Bind(&block132);
    tmp144 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block130, tmp144);
  }

  TNode<BoolT> phi_bb130_9;
  if (block130.is_used()) {
    ca_.Bind(&block130, &phi_bb130_9);
    ca_.Branch(phi_bb130_9, &block128, std::vector<compiler::Node*>{}, &block129, std::vector<compiler::Node*>{});
  }

  if (block129.is_used()) {
    ca_.Bind(&block129);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/cast.tq", 1025});
      CodeStubAssembler(state_).FailAssert("Torque assert 'Is<A>(o)' failed", pos_stack);
    }
  }

  TNode<FixedArray> tmp145;
  TNode<IntPtrT> tmp146;
  TNode<Uint32T> tmp147;
  TNode<Int32T> tmp148;
  TNode<Uint32T> tmp149;
  TNode<BoolT> tmp150;
  if (block128.is_used()) {
    ca_.Bind(&block128);
    tmp145 = TORQUE_CAST(TNode<Object>{tmp10});
    tmp146 = FromConstexpr_intptr_constexpr_int31_0(state_, 4);
    tmp147 = CodeStubAssembler(state_).LoadReference<Uint32T>(CodeStubAssembler::Reference{tmp145, tmp146});
    tmp148 = CodeStubAssembler(state_).Int32Constant((CodeStubAssembler(state_).ConstexprInt31Mul(wasm::kMaxPolymorphism, (FromConstexpr_constexpr_int31_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull))))));
    tmp149 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp148});
    tmp150 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp147}, TNode<Uint32T>{tmp149});
    ca_.Branch(tmp150, &block138, std::vector<compiler::Node*>{}, &block139, std::vector<compiler::Node*>{});
  }

  TNode<Union<HeapObject, TaggedIndex>> tmp151;
  TNode<IntPtrT> tmp152;
  TNode<IntPtrT> tmp153;
  TNode<UintPtrT> tmp154;
  TNode<UintPtrT> tmp155;
  TNode<BoolT> tmp156;
  if (block138.is_used()) {
    ca_.Bind(&block138);
    std::tie(tmp151, tmp152, tmp153) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{p_vector}).Flatten();
    tmp154 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{p_index});
    tmp155 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp153});
    tmp156 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp154}, TNode<UintPtrT>{tmp155});
    ca_.Branch(tmp156, &block145, std::vector<compiler::Node*>{}, &block146, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp157;
  TNode<IntPtrT> tmp158;
  TNode<Union<HeapObject, TaggedIndex>> tmp159;
  TNode<IntPtrT> tmp160;
  TNode<Symbol> tmp161;
  if (block145.is_used()) {
    ca_.Bind(&block145);
    tmp157 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{p_index});
    tmp158 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp152}, TNode<IntPtrT>{tmp157});
    std::tie(tmp159, tmp160) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp151}, TNode<IntPtrT>{tmp158}).Flatten();
    tmp161 = kMegamorphicSymbol_0(state_);
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp159, tmp160}, tmp161);
    ca_.Goto(&block140);
  }

  if (block146.is_used()) {
    ca_.Bind(&block146);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> tmp162;
  TNode<IntPtrT> tmp163;
  TNode<IntPtrT> tmp164;
  TNode<FixedArrayBase> tmp165;
  TNode<HeapObject> tmp166;
  if (block139.is_used()) {
    ca_.Bind(&block139);
    tmp162 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{tmp145});
    tmp163 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    tmp164 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp162}, TNode<IntPtrT>{tmp163});
    tmp165 = CodeStubAssembler(state_).AllocateFixedArray(CastIfEnumClass<ElementsKind>(ElementsKind::PACKED_ELEMENTS), TNode<IntPtrT>{tmp164}, CastIfEnumClass<CodeStubAssembler::AllocationFlag>(CodeStubAssembler::AllocationFlag::kNone));
    compiler::CodeAssemblerLabel label167(&ca_);
    tmp166 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{tmp165}, &label167);
    ca_.Goto(&block156);
    if (label167.is_used()) {
      ca_.Bind(&label167);
      ca_.Goto(&block157);
    }
  }

  if (block157.is_used()) {
    ca_.Bind(&block157);
    ca_.Goto(&block154);
  }

  TNode<FixedArray> tmp168;
  if (block156.is_used()) {
    ca_.Bind(&block156);
    compiler::CodeAssemblerLabel label169(&ca_);
    tmp168 = Cast_FixedArray_0(state_, TNode<HeapObject>{tmp166}, &label169);
    ca_.Goto(&block158);
    if (label169.is_used()) {
      ca_.Bind(&label169);
      ca_.Goto(&block159);
    }
  }

  if (block159.is_used()) {
    ca_.Bind(&block159);
    ca_.Goto(&block154);
  }

  TNode<BoolT> tmp170;
  if (block158.is_used()) {
    ca_.Bind(&block158);
    tmp170 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block152, tmp170);
  }

  TNode<BoolT> tmp171;
  if (block154.is_used()) {
    ca_.Bind(&block154);
    tmp171 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block152, tmp171);
  }

  TNode<BoolT> phi_bb152_10;
  if (block152.is_used()) {
    ca_.Bind(&block152, &phi_bb152_10);
    ca_.Branch(phi_bb152_10, &block150, std::vector<compiler::Node*>{}, &block151, std::vector<compiler::Node*>{});
  }

  if (block151.is_used()) {
    ca_.Bind(&block151);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/cast.tq", 1025});
      CodeStubAssembler(state_).FailAssert("Torque assert 'Is<A>(o)' failed", pos_stack);
    }
  }

  TNode<FixedArray> tmp172;
  TNode<IntPtrT> tmp173;
  if (block150.is_used()) {
    ca_.Bind(&block150);
    tmp172 = TORQUE_CAST(TNode<Object>{tmp165});
    tmp173 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block162, tmp173);
  }

  TNode<IntPtrT> phi_bb162_7;
  TNode<IntPtrT> tmp174;
  TNode<BoolT> tmp175;
  if (block162.is_used()) {
    ca_.Bind(&block162, &phi_bb162_7);
    tmp174 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{tmp145});
    tmp175 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb162_7}, TNode<IntPtrT>{tmp174});
    ca_.Branch(tmp175, &block160, std::vector<compiler::Node*>{phi_bb162_7}, &block161, std::vector<compiler::Node*>{phi_bb162_7});
  }

  TNode<IntPtrT> phi_bb160_7;
  TNode<Union<HeapObject, TaggedIndex>> tmp176;
  TNode<IntPtrT> tmp177;
  TNode<IntPtrT> tmp178;
  TNode<UintPtrT> tmp179;
  TNode<UintPtrT> tmp180;
  TNode<BoolT> tmp181;
  if (block160.is_used()) {
    ca_.Bind(&block160, &phi_bb160_7);
    std::tie(tmp176, tmp177, tmp178) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp172}).Flatten();
    tmp179 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb160_7});
    tmp180 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp178});
    tmp181 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp179}, TNode<UintPtrT>{tmp180});
    ca_.Branch(tmp181, &block168, std::vector<compiler::Node*>{phi_bb160_7, phi_bb160_7, phi_bb160_7, phi_bb160_7, phi_bb160_7}, &block169, std::vector<compiler::Node*>{phi_bb160_7, phi_bb160_7, phi_bb160_7, phi_bb160_7, phi_bb160_7});
  }

  TNode<IntPtrT> phi_bb168_7;
  TNode<IntPtrT> phi_bb168_12;
  TNode<IntPtrT> phi_bb168_13;
  TNode<IntPtrT> phi_bb168_17;
  TNode<IntPtrT> phi_bb168_18;
  TNode<IntPtrT> tmp182;
  TNode<IntPtrT> tmp183;
  TNode<Union<HeapObject, TaggedIndex>> tmp184;
  TNode<IntPtrT> tmp185;
  TNode<Union<HeapObject, TaggedIndex>> tmp186;
  TNode<IntPtrT> tmp187;
  TNode<IntPtrT> tmp188;
  TNode<UintPtrT> tmp189;
  TNode<UintPtrT> tmp190;
  TNode<BoolT> tmp191;
  if (block168.is_used()) {
    ca_.Bind(&block168, &phi_bb168_7, &phi_bb168_12, &phi_bb168_13, &phi_bb168_17, &phi_bb168_18);
    tmp182 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb168_18});
    tmp183 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp177}, TNode<IntPtrT>{tmp182});
    std::tie(tmp184, tmp185) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp176}, TNode<IntPtrT>{tmp183}).Flatten();
    std::tie(tmp186, tmp187, tmp188) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp145}).Flatten();
    tmp189 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{phi_bb168_7});
    tmp190 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp188});
    tmp191 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp189}, TNode<UintPtrT>{tmp190});
    ca_.Branch(tmp191, &block176, std::vector<compiler::Node*>{phi_bb168_7, phi_bb168_12, phi_bb168_13, phi_bb168_7, phi_bb168_7, phi_bb168_7, phi_bb168_7}, &block177, std::vector<compiler::Node*>{phi_bb168_7, phi_bb168_12, phi_bb168_13, phi_bb168_7, phi_bb168_7, phi_bb168_7, phi_bb168_7});
  }

  TNode<IntPtrT> phi_bb169_7;
  TNode<IntPtrT> phi_bb169_12;
  TNode<IntPtrT> phi_bb169_13;
  TNode<IntPtrT> phi_bb169_17;
  TNode<IntPtrT> phi_bb169_18;
  if (block169.is_used()) {
    ca_.Bind(&block169, &phi_bb169_7, &phi_bb169_12, &phi_bb169_13, &phi_bb169_17, &phi_bb169_18);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb176_7;
  TNode<IntPtrT> phi_bb176_12;
  TNode<IntPtrT> phi_bb176_13;
  TNode<IntPtrT> phi_bb176_20;
  TNode<IntPtrT> phi_bb176_21;
  TNode<IntPtrT> phi_bb176_25;
  TNode<IntPtrT> phi_bb176_26;
  TNode<IntPtrT> tmp192;
  TNode<IntPtrT> tmp193;
  TNode<Union<HeapObject, TaggedIndex>> tmp194;
  TNode<IntPtrT> tmp195;
  TNode<Object> tmp196;
  TNode<IntPtrT> tmp197;
  TNode<IntPtrT> tmp198;
  if (block176.is_used()) {
    ca_.Bind(&block176, &phi_bb176_7, &phi_bb176_12, &phi_bb176_13, &phi_bb176_20, &phi_bb176_21, &phi_bb176_25, &phi_bb176_26);
    tmp192 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{phi_bb176_26});
    tmp193 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp187}, TNode<IntPtrT>{tmp192});
    std::tie(tmp194, tmp195) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp186}, TNode<IntPtrT>{tmp193}).Flatten();
    tmp196 = CodeStubAssembler(state_).LoadReference<Object>(CodeStubAssembler::Reference{tmp194, tmp195});
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp184, tmp185}, tmp196);
    tmp197 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp198 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb176_7}, TNode<IntPtrT>{tmp197});
    ca_.Goto(&block162, tmp198);
  }

  TNode<IntPtrT> phi_bb177_7;
  TNode<IntPtrT> phi_bb177_12;
  TNode<IntPtrT> phi_bb177_13;
  TNode<IntPtrT> phi_bb177_20;
  TNode<IntPtrT> phi_bb177_21;
  TNode<IntPtrT> phi_bb177_25;
  TNode<IntPtrT> phi_bb177_26;
  if (block177.is_used()) {
    ca_.Bind(&block177, &phi_bb177_7, &phi_bb177_12, &phi_bb177_13, &phi_bb177_20, &phi_bb177_21, &phi_bb177_25, &phi_bb177_26);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb161_7;
  TNode<IntPtrT> tmp199;
  TNode<Union<HeapObject, TaggedIndex>> tmp200;
  TNode<IntPtrT> tmp201;
  TNode<IntPtrT> tmp202;
  TNode<UintPtrT> tmp203;
  TNode<UintPtrT> tmp204;
  TNode<BoolT> tmp205;
  if (block161.is_used()) {
    ca_.Bind(&block161, &phi_bb161_7);
    tmp199 = LoadFixedArrayBaseLengthIntptr_0(state_, TNode<FixedArrayBase>{tmp145});
    std::tie(tmp200, tmp201, tmp202) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp172}).Flatten();
    tmp203 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp199});
    tmp204 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp202});
    tmp205 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp203}, TNode<UintPtrT>{tmp204});
    ca_.Branch(tmp205, &block184, std::vector<compiler::Node*>{}, &block185, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp206;
  TNode<IntPtrT> tmp207;
  TNode<Union<HeapObject, TaggedIndex>> tmp208;
  TNode<IntPtrT> tmp209;
  TNode<Union<HeapObject, TaggedIndex>> tmp210;
  TNode<IntPtrT> tmp211;
  TNode<IntPtrT> tmp212;
  TNode<IntPtrT> tmp213;
  TNode<IntPtrT> tmp214;
  TNode<UintPtrT> tmp215;
  TNode<UintPtrT> tmp216;
  TNode<BoolT> tmp217;
  if (block184.is_used()) {
    ca_.Bind(&block184);
    tmp206 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp199});
    tmp207 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp201}, TNode<IntPtrT>{tmp206});
    std::tie(tmp208, tmp209) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp200}, TNode<IntPtrT>{tmp207}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp208, tmp209}, p_target);
    std::tie(tmp210, tmp211, tmp212) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp172}).Flatten();
    tmp213 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp214 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp199}, TNode<IntPtrT>{tmp213});
    tmp215 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp214});
    tmp216 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp212});
    tmp217 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp215}, TNode<UintPtrT>{tmp216});
    ca_.Branch(tmp217, &block192, std::vector<compiler::Node*>{}, &block193, std::vector<compiler::Node*>{});
  }

  if (block185.is_used()) {
    ca_.Bind(&block185);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> tmp218;
  TNode<IntPtrT> tmp219;
  TNode<Union<HeapObject, TaggedIndex>> tmp220;
  TNode<IntPtrT> tmp221;
  TNode<Smi> tmp222;
  TNode<Union<HeapObject, TaggedIndex>> tmp223;
  TNode<IntPtrT> tmp224;
  TNode<IntPtrT> tmp225;
  TNode<UintPtrT> tmp226;
  TNode<UintPtrT> tmp227;
  TNode<BoolT> tmp228;
  if (block192.is_used()) {
    ca_.Bind(&block192);
    tmp218 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp214});
    tmp219 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp211}, TNode<IntPtrT>{tmp218});
    std::tie(tmp220, tmp221) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp210}, TNode<IntPtrT>{tmp219}).Flatten();
    tmp222 = SmiConstant_0(state_, IntegerLiteral(false, 0x1ull));
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp220, tmp221}, tmp222);
    std::tie(tmp223, tmp224, tmp225) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{p_vector}).Flatten();
    tmp226 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{p_index});
    tmp227 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp225});
    tmp228 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp226}, TNode<UintPtrT>{tmp227});
    ca_.Branch(tmp228, &block200, std::vector<compiler::Node*>{}, &block201, std::vector<compiler::Node*>{});
  }

  if (block193.is_used()) {
    ca_.Bind(&block193);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> tmp229;
  TNode<IntPtrT> tmp230;
  TNode<Union<HeapObject, TaggedIndex>> tmp231;
  TNode<IntPtrT> tmp232;
  if (block200.is_used()) {
    ca_.Bind(&block200);
    tmp229 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{p_index});
    tmp230 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp224}, TNode<IntPtrT>{tmp229});
    std::tie(tmp231, tmp232) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp223}, TNode<IntPtrT>{tmp230}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp231, tmp232}, tmp172);
    ca_.Goto(&block140);
  }

  if (block201.is_used()) {
    ca_.Bind(&block201);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  if (block140.is_used()) {
    ca_.Bind(&block140);
    ca_.Goto(&block126);
  }

  TNode<Symbol> tmp233;
  TNode<BoolT> tmp234;
  if (block117.is_used()) {
    ca_.Bind(&block117);
    tmp233 = kMegamorphicSymbol_0(state_);
    tmp234 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp10}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp233});
    ca_.Branch(tmp234, &block204, std::vector<compiler::Node*>{}, &block205, std::vector<compiler::Node*>{});
  }

  if (block204.is_used()) {
    ca_.Bind(&block204);
    ca_.Goto(&block206);
  }

  TNode<HeapObject> tmp235;
  if (block205.is_used()) {
    ca_.Bind(&block205);
    compiler::CodeAssemblerLabel label236(&ca_);
    tmp235 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{tmp10}, &label236);
    ca_.Goto(&block213);
    if (label236.is_used()) {
      ca_.Bind(&label236);
      ca_.Goto(&block214);
    }
  }

  if (block214.is_used()) {
    ca_.Bind(&block214);
    ca_.Goto(&block211);
  }

  TNode<WasmFuncRef> tmp237;
  if (block213.is_used()) {
    ca_.Bind(&block213);
    compiler::CodeAssemblerLabel label238(&ca_);
    tmp237 = Cast_WasmFuncRef_0(state_, TNode<HeapObject>{tmp235}, &label238);
    ca_.Goto(&block215);
    if (label238.is_used()) {
      ca_.Bind(&label238);
      ca_.Goto(&block216);
    }
  }

  if (block216.is_used()) {
    ca_.Bind(&block216);
    ca_.Goto(&block211);
  }

  TNode<BoolT> tmp239;
  if (block215.is_used()) {
    ca_.Bind(&block215);
    tmp239 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block209, tmp239);
  }

  TNode<BoolT> tmp240;
  if (block211.is_used()) {
    ca_.Bind(&block211);
    tmp240 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block209, tmp240);
  }

  TNode<BoolT> phi_bb209_7;
  if (block209.is_used()) {
    ca_.Bind(&block209, &phi_bb209_7);
    ca_.Branch(phi_bb209_7, &block217, std::vector<compiler::Node*>{}, &block218, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp241;
  if (block217.is_used()) {
    ca_.Bind(&block217);
    tmp241 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block219, tmp241);
  }

  TNode<Smi> tmp242;
  if (block218.is_used()) {
    ca_.Bind(&block218);
    compiler::CodeAssemblerLabel label243(&ca_);
    tmp242 = Cast_Smi_0(state_, TNode<Object>{tmp10}, &label243);
    ca_.Goto(&block223);
    if (label243.is_used()) {
      ca_.Bind(&label243);
      ca_.Goto(&block224);
    }
  }

  TNode<BoolT> tmp244;
  if (block224.is_used()) {
    ca_.Bind(&block224);
    tmp244 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block220, tmp244);
  }

  TNode<BoolT> tmp245;
  if (block223.is_used()) {
    ca_.Bind(&block223);
    tmp245 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block220, tmp245);
  }

  TNode<BoolT> phi_bb220_8;
  if (block220.is_used()) {
    ca_.Bind(&block220, &phi_bb220_8);
    ca_.Goto(&block219, phi_bb220_8);
  }

  TNode<BoolT> phi_bb219_6;
  if (block219.is_used()) {
    ca_.Bind(&block219, &phi_bb219_6);
    ca_.Branch(phi_bb219_6, &block225, std::vector<compiler::Node*>{phi_bb219_6}, &block226, std::vector<compiler::Node*>{phi_bb219_6});
  }

  TNode<BoolT> phi_bb225_5;
  TNode<BoolT> tmp246;
  if (block225.is_used()) {
    ca_.Bind(&block225, &phi_bb225_5);
    tmp246 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block227, phi_bb225_5, tmp246);
  }

  TNode<BoolT> phi_bb226_5;
  TNode<Symbol> tmp247;
  TNode<BoolT> tmp248;
  if (block226.is_used()) {
    ca_.Bind(&block226, &phi_bb226_5);
    tmp247 = CodeStubAssembler(state_).WasmCrossInstanceCallSymbolConstant();
    tmp248 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{tmp10}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp247});
    ca_.Goto(&block227, phi_bb226_5, tmp248);
  }

  TNode<BoolT> phi_bb227_5;
  TNode<BoolT> phi_bb227_6;
  if (block227.is_used()) {
    ca_.Bind(&block227, &phi_bb227_5, &phi_bb227_6);
    ca_.Branch(phi_bb227_6, &block207, std::vector<compiler::Node*>{}, &block208, std::vector<compiler::Node*>{});
  }

  if (block208.is_used()) {
    ca_.Bind(&block208);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/wasm.tq", 822});
      CodeStubAssembler(state_).FailAssert("Torque assert 'Is<WasmFuncRef>(firstSlot) || Is<Smi>(firstSlot) || firstSlot == WasmCrossInstanceCallSymbolConstant()' failed", pos_stack);
    }
  }

  TNode<IntPtrT> tmp249;
  TNode<FixedArrayBase> tmp250;
  TNode<HeapObject> tmp251;
  if (block207.is_used()) {
    ca_.Bind(&block207);
    tmp249 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x4ull));
    tmp250 = CodeStubAssembler(state_).AllocateFixedArray(CastIfEnumClass<ElementsKind>(ElementsKind::PACKED_ELEMENTS), TNode<IntPtrT>{tmp249}, CastIfEnumClass<CodeStubAssembler::AllocationFlag>(CodeStubAssembler::AllocationFlag::kNone));
    compiler::CodeAssemblerLabel label252(&ca_);
    tmp251 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{tmp250}, &label252);
    ca_.Goto(&block235);
    if (label252.is_used()) {
      ca_.Bind(&label252);
      ca_.Goto(&block236);
    }
  }

  if (block236.is_used()) {
    ca_.Bind(&block236);
    ca_.Goto(&block233);
  }

  TNode<FixedArray> tmp253;
  if (block235.is_used()) {
    ca_.Bind(&block235);
    compiler::CodeAssemblerLabel label254(&ca_);
    tmp253 = Cast_FixedArray_0(state_, TNode<HeapObject>{tmp251}, &label254);
    ca_.Goto(&block237);
    if (label254.is_used()) {
      ca_.Bind(&label254);
      ca_.Goto(&block238);
    }
  }

  if (block238.is_used()) {
    ca_.Bind(&block238);
    ca_.Goto(&block233);
  }

  TNode<BoolT> tmp255;
  if (block237.is_used()) {
    ca_.Bind(&block237);
    tmp255 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block231, tmp255);
  }

  TNode<BoolT> tmp256;
  if (block233.is_used()) {
    ca_.Bind(&block233);
    tmp256 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block231, tmp256);
  }

  TNode<BoolT> phi_bb231_9;
  if (block231.is_used()) {
    ca_.Bind(&block231, &phi_bb231_9);
    ca_.Branch(phi_bb231_9, &block229, std::vector<compiler::Node*>{}, &block230, std::vector<compiler::Node*>{});
  }

  if (block230.is_used()) {
    ca_.Bind(&block230);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/cast.tq", 1025});
      CodeStubAssembler(state_).FailAssert("Torque assert 'Is<A>(o)' failed", pos_stack);
    }
  }

  TNode<FixedArray> tmp257;
  TNode<Union<HeapObject, TaggedIndex>> tmp258;
  TNode<IntPtrT> tmp259;
  TNode<IntPtrT> tmp260;
  TNode<UintPtrT> tmp261;
  TNode<IntPtrT> tmp262;
  TNode<UintPtrT> tmp263;
  TNode<UintPtrT> tmp264;
  TNode<BoolT> tmp265;
  if (block229.is_used()) {
    ca_.Bind(&block229);
    tmp257 = TORQUE_CAST(TNode<Object>{tmp250});
    std::tie(tmp258, tmp259, tmp260) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp257}).Flatten();
    tmp261 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp262 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp261});
    tmp263 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp262});
    tmp264 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp260});
    tmp265 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp263}, TNode<UintPtrT>{tmp264});
    ca_.Branch(tmp265, &block244, std::vector<compiler::Node*>{}, &block245, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp266;
  TNode<IntPtrT> tmp267;
  TNode<Union<HeapObject, TaggedIndex>> tmp268;
  TNode<IntPtrT> tmp269;
  TNode<Union<HeapObject, TaggedIndex>> tmp270;
  TNode<IntPtrT> tmp271;
  TNode<IntPtrT> tmp272;
  TNode<UintPtrT> tmp273;
  TNode<IntPtrT> tmp274;
  TNode<UintPtrT> tmp275;
  TNode<UintPtrT> tmp276;
  TNode<BoolT> tmp277;
  if (block244.is_used()) {
    ca_.Bind(&block244);
    tmp266 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp262});
    tmp267 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp259}, TNode<IntPtrT>{tmp266});
    std::tie(tmp268, tmp269) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp258}, TNode<IntPtrT>{tmp267}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp268, tmp269}, tmp10);
    std::tie(tmp270, tmp271, tmp272) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp257}).Flatten();
    tmp273 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp274 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp273});
    tmp275 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp274});
    tmp276 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp272});
    tmp277 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp275}, TNode<UintPtrT>{tmp276});
    ca_.Branch(tmp277, &block253, std::vector<compiler::Node*>{}, &block254, std::vector<compiler::Node*>{});
  }

  if (block245.is_used()) {
    ca_.Bind(&block245);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> tmp278;
  TNode<IntPtrT> tmp279;
  TNode<Union<HeapObject, TaggedIndex>> tmp280;
  TNode<IntPtrT> tmp281;
  TNode<Union<HeapObject, TaggedIndex>> tmp282;
  TNode<IntPtrT> tmp283;
  TNode<IntPtrT> tmp284;
  TNode<UintPtrT> tmp285;
  TNode<IntPtrT> tmp286;
  TNode<UintPtrT> tmp287;
  TNode<UintPtrT> tmp288;
  TNode<BoolT> tmp289;
  if (block253.is_used()) {
    ca_.Bind(&block253);
    tmp278 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp274});
    tmp279 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp271}, TNode<IntPtrT>{tmp278});
    std::tie(tmp280, tmp281) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp270}, TNode<IntPtrT>{tmp279}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp280, tmp281}, tmp23);
    std::tie(tmp282, tmp283, tmp284) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp257}).Flatten();
    tmp285 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    tmp286 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp285});
    tmp287 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp286});
    tmp288 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp284});
    tmp289 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp287}, TNode<UintPtrT>{tmp288});
    ca_.Branch(tmp289, &block262, std::vector<compiler::Node*>{}, &block263, std::vector<compiler::Node*>{});
  }

  if (block254.is_used()) {
    ca_.Bind(&block254);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> tmp290;
  TNode<IntPtrT> tmp291;
  TNode<Union<HeapObject, TaggedIndex>> tmp292;
  TNode<IntPtrT> tmp293;
  TNode<Union<HeapObject, TaggedIndex>> tmp294;
  TNode<IntPtrT> tmp295;
  TNode<IntPtrT> tmp296;
  TNode<UintPtrT> tmp297;
  TNode<IntPtrT> tmp298;
  TNode<UintPtrT> tmp299;
  TNode<UintPtrT> tmp300;
  TNode<BoolT> tmp301;
  if (block262.is_used()) {
    ca_.Bind(&block262);
    tmp290 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp286});
    tmp291 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp283}, TNode<IntPtrT>{tmp290});
    std::tie(tmp292, tmp293) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp282}, TNode<IntPtrT>{tmp291}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp292, tmp293}, p_target);
    std::tie(tmp294, tmp295, tmp296) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{tmp257}).Flatten();
    tmp297 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x3ull));
    tmp298 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp297});
    tmp299 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp298});
    tmp300 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp296});
    tmp301 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp299}, TNode<UintPtrT>{tmp300});
    ca_.Branch(tmp301, &block271, std::vector<compiler::Node*>{}, &block272, std::vector<compiler::Node*>{});
  }

  if (block263.is_used()) {
    ca_.Bind(&block263);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> tmp302;
  TNode<IntPtrT> tmp303;
  TNode<Union<HeapObject, TaggedIndex>> tmp304;
  TNode<IntPtrT> tmp305;
  TNode<Smi> tmp306;
  TNode<Union<HeapObject, TaggedIndex>> tmp307;
  TNode<IntPtrT> tmp308;
  TNode<IntPtrT> tmp309;
  TNode<UintPtrT> tmp310;
  TNode<UintPtrT> tmp311;
  TNode<BoolT> tmp312;
  if (block271.is_used()) {
    ca_.Bind(&block271);
    tmp302 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp298});
    tmp303 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp295}, TNode<IntPtrT>{tmp302});
    std::tie(tmp304, tmp305) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp294}, TNode<IntPtrT>{tmp303}).Flatten();
    tmp306 = SmiConstant_0(state_, IntegerLiteral(false, 0x1ull));
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp304, tmp305}, tmp306);
    std::tie(tmp307, tmp308, tmp309) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{p_vector}).Flatten();
    tmp310 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{p_index});
    tmp311 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp309});
    tmp312 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp310}, TNode<UintPtrT>{tmp311});
    ca_.Branch(tmp312, &block279, std::vector<compiler::Node*>{}, &block280, std::vector<compiler::Node*>{});
  }

  if (block272.is_used()) {
    ca_.Bind(&block272);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> tmp313;
  TNode<IntPtrT> tmp314;
  TNode<Union<HeapObject, TaggedIndex>> tmp315;
  TNode<IntPtrT> tmp316;
  TNode<Union<HeapObject, TaggedIndex>> tmp317;
  TNode<IntPtrT> tmp318;
  TNode<IntPtrT> tmp319;
  TNode<IntPtrT> tmp320;
  TNode<IntPtrT> tmp321;
  TNode<UintPtrT> tmp322;
  TNode<UintPtrT> tmp323;
  TNode<BoolT> tmp324;
  if (block279.is_used()) {
    ca_.Bind(&block279);
    tmp313 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{p_index});
    tmp314 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp308}, TNode<IntPtrT>{tmp313});
    std::tie(tmp315, tmp316) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp307}, TNode<IntPtrT>{tmp314}).Flatten();
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp315, tmp316}, tmp257);
    std::tie(tmp317, tmp318, tmp319) = FieldSliceFixedArrayObjects_0(state_, TNode<FixedArray>{p_vector}).Flatten();
    tmp320 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp321 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_index}, TNode<IntPtrT>{tmp320});
    tmp322 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp321});
    tmp323 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp319});
    tmp324 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp322}, TNode<UintPtrT>{tmp323});
    ca_.Branch(tmp324, &block287, std::vector<compiler::Node*>{}, &block288, std::vector<compiler::Node*>{});
  }

  if (block280.is_used()) {
    ca_.Bind(&block280);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> tmp325;
  TNode<IntPtrT> tmp326;
  TNode<Union<HeapObject, TaggedIndex>> tmp327;
  TNode<IntPtrT> tmp328;
  TNode<Undefined> tmp329;
  if (block287.is_used()) {
    ca_.Bind(&block287);
    tmp325 = TimesSizeOf_Object_0(state_, TNode<IntPtrT>{tmp321});
    tmp326 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp318}, TNode<IntPtrT>{tmp325});
    std::tie(tmp327, tmp328) = NewReference_Object_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp317}, TNode<IntPtrT>{tmp326}).Flatten();
    tmp329 = Undefined_0(state_);
    CodeStubAssembler(state_).StoreReference<Object>(CodeStubAssembler::Reference{tmp327, tmp328}, tmp329);
    ca_.Goto(&block206);
  }

  if (block288.is_used()) {
    ca_.Bind(&block288);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:113:45");
    CodeStubAssembler(state_).Unreachable();
  }

  if (block206.is_used()) {
    ca_.Bind(&block206);
    ca_.Goto(&block126);
  }

  if (block126.is_used()) {
    ca_.Bind(&block126);
    ca_.Goto(&block97);
  }

  if (block97.is_used()) {
    ca_.Bind(&block97);
    ca_.Goto(&block1);
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    ca_.Goto(&block291);
  }

    ca_.Bind(&block291);
}

TF_BUILTIN(CallRefIC, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<FixedArray> parameter0 = UncheckedParameter<FixedArray>(Descriptor::kVector);
  USE(parameter0);
  TNode<Int32T> parameter1 = UncheckedParameter<Int32T>(Descriptor::kVectorIndex);
  USE(parameter1);
  TNode<WasmFuncRef> parameter2 = UncheckedParameter<WasmFuncRef>(Descriptor::kFuncref);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmFuncRef> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_WasmFuncRef_0(state_, TNode<HeapObject>{parameter2}, &label1);
    ca_.Goto(&block6);
    if (label1.is_used()) {
      ca_.Bind(&label1);
      ca_.Goto(&block7);
    }
  }

  TNode<BoolT> tmp2;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp2 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block3, tmp2);
  }

  TNode<BoolT> tmp3;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp3 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block3, tmp3);
  }

  TNode<BoolT> phi_bb3_5;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_5);
    ca_.Branch(phi_bb3_5, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/wasm.tq", 848});
      CodeStubAssembler(state_).FailAssert("Torque assert 'Is<WasmFuncRef>(funcref)' failed", pos_stack);
    }
  }

  TNode<IntPtrT> tmp4;
  TNode<WasmInternalFunction> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<Uint32T> tmp7;
  TNode<Union<WasmImportData, WasmTrustedInstanceData>> tmp8;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp4 = Convert_intptr_int32_0(state_, TNode<Int32T>{parameter1});
    UpdateCallRefOrIndirectIC_0(state_, TNode<FixedArray>{parameter0}, TNode<IntPtrT>{tmp4}, TNode<Object>{parameter2});
    tmp5 = CodeStubAssembler(state_).LoadWasmInternalFunctionFromFuncRef(TNode<WasmFuncRef>{parameter2});
    tmp6 = FromConstexpr_intptr_constexpr_int31_0(state_, 20);
    tmp7 = CodeStubAssembler(state_).LoadReference<Uint32T>(CodeStubAssembler::Reference{tmp5, tmp6});
    tmp8 = CodeStubAssembler(state_).LoadImplicitArgFromWasmInternalFunction(TNode<WasmInternalFunction>{tmp5});
    CodeStubAssembler(state_).Return(tmp7, tmp8);
  }
}

TF_BUILTIN(CallIndirectIC, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<FixedArray> parameter0 = UncheckedParameter<FixedArray>(Descriptor::kVector);
  USE(parameter0);
  TNode<Int32T> parameter1 = UncheckedParameter<Int32T>(Descriptor::kVectorIndex);
  USE(parameter1);
  TNode<Uint32T> parameter2 = UncheckedParameter<Uint32T>(Descriptor::kTarget);
  USE(parameter2);
  TNode<Union<WasmImportData, WasmTrustedInstanceData>> parameter3 = UncheckedParameter<Union<WasmImportData, WasmTrustedInstanceData>>(Descriptor::kImplicitArg);
  USE(parameter3);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<Smi, Symbol>> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{parameter3}, TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{tmp0});
    ca_.Branch(tmp1, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<UintPtrT> tmp2;
  TNode<UintPtrT> tmp3;
  TNode<UintPtrT> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<Smi> tmp6;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp2 = Convert_uintptr_WasmCodePointer_0(state_, TNode<Uint32T>{parameter2});
    tmp3 = FromConstexpr_uintptr_constexpr_uintptr_0(state_, kSmiMaxValue);
    tmp4 = CodeStubAssembler(state_).WordAnd(TNode<UintPtrT>{tmp2}, TNode<UintPtrT>{tmp3});
    tmp5 = CodeStubAssembler(state_).Signed(TNode<UintPtrT>{tmp4});
    tmp6 = CodeStubAssembler(state_).SmiTag(TNode<IntPtrT>{tmp5});
    ca_.Goto(&block3, tmp6);
  }

  TNode<Symbol> tmp7;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp7 = CodeStubAssembler(state_).WasmCrossInstanceCallSymbolConstant();
    ca_.Goto(&block3, tmp7);
  }

  TNode<Union<Smi, Symbol>> phi_bb3_5;
  TNode<IntPtrT> tmp8;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_5);
    tmp8 = Convert_intptr_int32_0(state_, TNode<Int32T>{parameter1});
    UpdateCallRefOrIndirectIC_0(state_, TNode<FixedArray>{parameter0}, TNode<IntPtrT>{tmp8}, TNode<Object>{phi_bb3_5});
    CodeStubAssembler(state_).Return(parameter2, parameter3);
  }
}

TF_BUILTIN(WasmTrap, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Smi> parameter0 = UncheckedParameter<Smi>(Descriptor::kError);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadContextFromWasmOrJsFrame();
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kThrowWasmError, tmp0, parameter0);
  }
}

TF_BUILTIN(ThrowWasmTrapUnreachable, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapUnreachable));
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmTrap, TNode<Object>(), tmp0);
  }
}

TF_BUILTIN(WasmPropagateException, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kNoContext_0(state_);
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kPropagateException, tmp0);
  }
}

TF_BUILTIN(ThrowWasmTrapMemOutOfBounds, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapMemOutOfBounds));
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmTrap, TNode<Object>(), tmp0);
  }
}

TF_BUILTIN(ThrowWasmTrapUnalignedAccess, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapUnalignedAccess));
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmTrap, TNode<Object>(), tmp0);
  }
}

TF_BUILTIN(ThrowWasmTrapDivByZero, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapDivByZero));
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmTrap, TNode<Object>(), tmp0);
  }
}

TF_BUILTIN(ThrowWasmTrapDivUnrepresentable, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapDivUnrepresentable));
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmTrap, TNode<Object>(), tmp0);
  }
}

TF_BUILTIN(ThrowWasmTrapRemByZero, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapRemByZero));
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmTrap, TNode<Object>(), tmp0);
  }
}

TF_BUILTIN(ThrowWasmTrapFloatUnrepresentable, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapFloatUnrepresentable));
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmTrap, TNode<Object>(), tmp0);
  }
}

TF_BUILTIN(ThrowWasmTrapFuncSigMismatch, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapFuncSigMismatch));
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmTrap, TNode<Object>(), tmp0);
  }
}

TF_BUILTIN(ThrowWasmTrapNullFunc, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapNullFunc));
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmTrap, TNode<Object>(), tmp0);
  }
}

TF_BUILTIN(ThrowWasmTrapDataSegmentOutOfBounds, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapDataSegmentOutOfBounds));
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmTrap, TNode<Object>(), tmp0);
  }
}

TF_BUILTIN(ThrowWasmTrapElementSegmentOutOfBounds, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapElementSegmentOutOfBounds));
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmTrap, TNode<Object>(), tmp0);
  }
}

TF_BUILTIN(ThrowWasmTrapTableOutOfBounds, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapTableOutOfBounds));
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmTrap, TNode<Object>(), tmp0);
  }
}

TF_BUILTIN(ThrowWasmTrapRethrowNull, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapRethrowNull));
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmTrap, TNode<Object>(), tmp0);
  }
}

TF_BUILTIN(ThrowWasmTrapNullDereference, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapNullDereference));
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmTrap, TNode<Object>(), tmp0);
  }
}

TF_BUILTIN(ThrowWasmTrapIllegalCast, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapIllegalCast));
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmTrap, TNode<Object>(), tmp0);
  }
}

TF_BUILTIN(ThrowWasmTrapArrayOutOfBounds, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapArrayOutOfBounds));
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmTrap, TNode<Object>(), tmp0);
  }
}

TF_BUILTIN(ThrowWasmTrapArrayTooLarge, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapArrayTooLarge));
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmTrap, TNode<Object>(), tmp0);
  }
}

TF_BUILTIN(ThrowWasmTrapStringOffsetOutOfBounds, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapStringOffsetOutOfBounds));
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmTrap, TNode<Object>(), tmp0);
  }
}

TF_BUILTIN(WasmTypeAssertionFailed, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kNoContext_0(state_);
    CodeStubAssembler(state_).CallRuntime(Runtime::kWasmTypeAssertionFailed, tmp0);
    CodeStubAssembler(state_).Unreachable();
  }
}

TF_BUILTIN(ThrowWasmTrapResume, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapResume));
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmTrap, TNode<Object>(), tmp0);
  }
}

TF_BUILTIN(ThrowWasmTrapSuspend, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapSuspend));
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmTrap, TNode<Object>(), tmp0);
  }
}

TF_BUILTIN(ThrowWasmTrapSwitch, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapSwitch));
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmTrap, TNode<Object>(), tmp0);
  }
}

TF_BUILTIN(WasmStringNewWtf8, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<UintPtrT> parameter0 = UncheckedParameter<UintPtrT>(Descriptor::kOffset);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kSize);
  USE(parameter1);
  TNode<Uint32T> parameter2 = UncheckedParameter<Uint32T>(Descriptor::kMemory);
  USE(parameter2);
  TNode<Smi> parameter3 = UncheckedParameter<Smi>(Descriptor::kUtf8Config);
  USE(parameter3);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<NativeContext> tmp1;
  TNode<Smi> tmp2;
  TNode<Number> tmp3;
  TNode<Number> tmp4;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    tmp2 = CodeStubAssembler(state_).SmiFromUint32(TNode<Uint32T>{parameter2});
    tmp3 = UintPtrToNumberRounding_0(state_, TNode<UintPtrT>{parameter0});
    tmp4 = ca_.CallBuiltin<Number>(Builtin::kWasmUint32ToNumber, TNode<Object>(), parameter1);
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmStringNewWtf8, tmp1, tmp0, tmp2, parameter3, tmp3, tmp4);
  }
}

TF_BUILTIN(WasmStringNewWtf8Array, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Uint32T> parameter0 = UncheckedParameter<Uint32T>(Descriptor::kStart);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kEnd);
  USE(parameter1);
  TNode<WasmArray> parameter2 = UncheckedParameter<WasmArray>(Descriptor::kArray);
  USE(parameter2);
  TNode<Smi> parameter3 = UncheckedParameter<Smi>(Descriptor::kUtf8Config);
  USE(parameter3);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<Uint32T> tmp2;
  TNode<BoolT> tmp3;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadContextFromWasmOrJsFrame();
    tmp1 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp2 = CodeStubAssembler(state_).LoadReference<Uint32T>(CodeStubAssembler::Reference{parameter2, tmp1});
    tmp3 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{tmp2}, TNode<Uint32T>{parameter1});
    ca_.Branch(tmp3, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    ca_.Goto(&block2);
  }

  TNode<BoolT> tmp4;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp4 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{parameter1}, TNode<Uint32T>{parameter0});
    ca_.Branch(tmp4, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    ca_.Goto(&block2);
  }

  TNode<Smi> tmp5;
  TNode<Smi> tmp6;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp5 = CodeStubAssembler(state_).SmiFromUint32(TNode<Uint32T>{parameter0});
    tmp6 = CodeStubAssembler(state_).SmiFromUint32(TNode<Uint32T>{parameter1});
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmStringNewWtf8Array, tmp0, parameter3, parameter2, tmp5, tmp6);
  }

  TNode<Smi> tmp7;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp7 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapArrayOutOfBounds));
    CodeStubAssembler(state_).CallRuntime(Runtime::kThrowWasmError, tmp0, tmp7);
    CodeStubAssembler(state_).Unreachable();
  }
}

TF_BUILTIN(WasmStringNewWtf16, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Uint32T> parameter0 = UncheckedParameter<Uint32T>(Descriptor::kMemory);
  USE(parameter0);
  TNode<UintPtrT> parameter1 = UncheckedParameter<UintPtrT>(Descriptor::kOffset);
  USE(parameter1);
  TNode<Uint32T> parameter2 = UncheckedParameter<Uint32T>(Descriptor::kSize);
  USE(parameter2);
  TNode<Smi> parameter3 = UncheckedParameter<Smi>(Descriptor::kConfig);
  USE(parameter3);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<NativeContext> tmp1;
  TNode<Smi> tmp2;
  TNode<Number> tmp3;
  TNode<Number> tmp4;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    tmp2 = CodeStubAssembler(state_).SmiFromUint32(TNode<Uint32T>{parameter0});
    tmp3 = UintPtrToNumberRounding_0(state_, TNode<UintPtrT>{parameter1});
    tmp4 = ca_.CallBuiltin<Number>(Builtin::kWasmUint32ToNumber, TNode<Object>(), parameter2);
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmStringNewWtf16, tmp1, tmp0, tmp2, tmp3, tmp4, parameter3);
  }
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=1028&c=1
TNode<String> StringFromTwoByteSlice_0(compiler::CodeAssemblerState* state_, TNode<Uint32T> p_length, TorqueStructSlice_char16_ConstReference_char16_0 p_slice) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, Uint32T> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, Uint32T> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, Uint32T> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, Uint32T> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, Uint32T> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x8ull));
    tmp2 = CodeStubAssembler(state_).IntPtrSub(TNode<IntPtrT>{p_slice.length}, TNode<IntPtrT>{tmp1});
    ca_.Goto(&block6, tmp0);
  }

  TNode<IntPtrT> phi_bb6_4;
  TNode<BoolT> tmp3;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_4);
    tmp3 = CodeStubAssembler(state_).IntPtrLessThanOrEqual(TNode<IntPtrT>{phi_bb6_4}, TNode<IntPtrT>{tmp2});
    ca_.Branch(tmp3, &block4, std::vector<compiler::Node*>{phi_bb6_4}, &block5, std::vector<compiler::Node*>{phi_bb6_4});
  }

  TNode<IntPtrT> phi_bb4_4;
  TNode<IntPtrT> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<Union<HeapObject, TaggedIndex>> tmp6;
  TNode<IntPtrT> tmp7;
  TNode<Uint16T> tmp8;
  TNode<Uint32T> tmp9;
  TNode<IntPtrT> tmp10;
  TNode<IntPtrT> tmp11;
  TNode<IntPtrT> tmp12;
  TNode<IntPtrT> tmp13;
  TNode<Union<HeapObject, TaggedIndex>> tmp14;
  TNode<IntPtrT> tmp15;
  TNode<Uint16T> tmp16;
  TNode<Uint32T> tmp17;
  TNode<Uint32T> tmp18;
  TNode<IntPtrT> tmp19;
  TNode<IntPtrT> tmp20;
  TNode<IntPtrT> tmp21;
  TNode<IntPtrT> tmp22;
  TNode<Union<HeapObject, TaggedIndex>> tmp23;
  TNode<IntPtrT> tmp24;
  TNode<Uint16T> tmp25;
  TNode<Uint32T> tmp26;
  TNode<Uint32T> tmp27;
  TNode<IntPtrT> tmp28;
  TNode<IntPtrT> tmp29;
  TNode<IntPtrT> tmp30;
  TNode<IntPtrT> tmp31;
  TNode<Union<HeapObject, TaggedIndex>> tmp32;
  TNode<IntPtrT> tmp33;
  TNode<Uint16T> tmp34;
  TNode<Uint32T> tmp35;
  TNode<Uint32T> tmp36;
  TNode<IntPtrT> tmp37;
  TNode<IntPtrT> tmp38;
  TNode<IntPtrT> tmp39;
  TNode<IntPtrT> tmp40;
  TNode<Union<HeapObject, TaggedIndex>> tmp41;
  TNode<IntPtrT> tmp42;
  TNode<Uint16T> tmp43;
  TNode<Uint32T> tmp44;
  TNode<Uint32T> tmp45;
  TNode<IntPtrT> tmp46;
  TNode<IntPtrT> tmp47;
  TNode<IntPtrT> tmp48;
  TNode<IntPtrT> tmp49;
  TNode<Union<HeapObject, TaggedIndex>> tmp50;
  TNode<IntPtrT> tmp51;
  TNode<Uint16T> tmp52;
  TNode<Uint32T> tmp53;
  TNode<Uint32T> tmp54;
  TNode<IntPtrT> tmp55;
  TNode<IntPtrT> tmp56;
  TNode<IntPtrT> tmp57;
  TNode<IntPtrT> tmp58;
  TNode<Union<HeapObject, TaggedIndex>> tmp59;
  TNode<IntPtrT> tmp60;
  TNode<Uint16T> tmp61;
  TNode<Uint32T> tmp62;
  TNode<Uint32T> tmp63;
  TNode<IntPtrT> tmp64;
  TNode<IntPtrT> tmp65;
  TNode<IntPtrT> tmp66;
  TNode<IntPtrT> tmp67;
  TNode<Union<HeapObject, TaggedIndex>> tmp68;
  TNode<IntPtrT> tmp69;
  TNode<Uint16T> tmp70;
  TNode<Uint32T> tmp71;
  TNode<Uint32T> tmp72;
  TNode<Uint32T> tmp73;
  TNode<BoolT> tmp74;
  if (block4.is_used()) {
    ca_.Bind(&block4, &phi_bb4_4);
    tmp4 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{phi_bb4_4});
    tmp5 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_slice.offset}, TNode<IntPtrT>{tmp4});
    std::tie(tmp6, tmp7) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_slice.object}, TNode<IntPtrT>{tmp5}).Flatten();
    tmp8 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp6, tmp7});
    tmp9 = Convert_uint32_char16_0(state_, TNode<Uint16T>{tmp8});
    tmp10 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp11 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb4_4}, TNode<IntPtrT>{tmp10});
    tmp12 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{tmp11});
    tmp13 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_slice.offset}, TNode<IntPtrT>{tmp12});
    std::tie(tmp14, tmp15) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_slice.object}, TNode<IntPtrT>{tmp13}).Flatten();
    tmp16 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp14, tmp15});
    tmp17 = Convert_uint32_char16_0(state_, TNode<Uint16T>{tmp16});
    tmp18 = CodeStubAssembler(state_).Word32Or(TNode<Uint32T>{tmp9}, TNode<Uint32T>{tmp17});
    tmp19 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    tmp20 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb4_4}, TNode<IntPtrT>{tmp19});
    tmp21 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{tmp20});
    tmp22 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_slice.offset}, TNode<IntPtrT>{tmp21});
    std::tie(tmp23, tmp24) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_slice.object}, TNode<IntPtrT>{tmp22}).Flatten();
    tmp25 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp23, tmp24});
    tmp26 = Convert_uint32_char16_0(state_, TNode<Uint16T>{tmp25});
    tmp27 = CodeStubAssembler(state_).Word32Or(TNode<Uint32T>{tmp18}, TNode<Uint32T>{tmp26});
    tmp28 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x3ull));
    tmp29 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb4_4}, TNode<IntPtrT>{tmp28});
    tmp30 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{tmp29});
    tmp31 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_slice.offset}, TNode<IntPtrT>{tmp30});
    std::tie(tmp32, tmp33) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_slice.object}, TNode<IntPtrT>{tmp31}).Flatten();
    tmp34 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp32, tmp33});
    tmp35 = Convert_uint32_char16_0(state_, TNode<Uint16T>{tmp34});
    tmp36 = CodeStubAssembler(state_).Word32Or(TNode<Uint32T>{tmp27}, TNode<Uint32T>{tmp35});
    tmp37 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x4ull));
    tmp38 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb4_4}, TNode<IntPtrT>{tmp37});
    tmp39 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{tmp38});
    tmp40 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_slice.offset}, TNode<IntPtrT>{tmp39});
    std::tie(tmp41, tmp42) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_slice.object}, TNode<IntPtrT>{tmp40}).Flatten();
    tmp43 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp41, tmp42});
    tmp44 = Convert_uint32_char16_0(state_, TNode<Uint16T>{tmp43});
    tmp45 = CodeStubAssembler(state_).Word32Or(TNode<Uint32T>{tmp36}, TNode<Uint32T>{tmp44});
    tmp46 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x5ull));
    tmp47 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb4_4}, TNode<IntPtrT>{tmp46});
    tmp48 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{tmp47});
    tmp49 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_slice.offset}, TNode<IntPtrT>{tmp48});
    std::tie(tmp50, tmp51) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_slice.object}, TNode<IntPtrT>{tmp49}).Flatten();
    tmp52 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp50, tmp51});
    tmp53 = Convert_uint32_char16_0(state_, TNode<Uint16T>{tmp52});
    tmp54 = CodeStubAssembler(state_).Word32Or(TNode<Uint32T>{tmp45}, TNode<Uint32T>{tmp53});
    tmp55 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x6ull));
    tmp56 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb4_4}, TNode<IntPtrT>{tmp55});
    tmp57 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{tmp56});
    tmp58 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_slice.offset}, TNode<IntPtrT>{tmp57});
    std::tie(tmp59, tmp60) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_slice.object}, TNode<IntPtrT>{tmp58}).Flatten();
    tmp61 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp59, tmp60});
    tmp62 = Convert_uint32_char16_0(state_, TNode<Uint16T>{tmp61});
    tmp63 = CodeStubAssembler(state_).Word32Or(TNode<Uint32T>{tmp54}, TNode<Uint32T>{tmp62});
    tmp64 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x7ull));
    tmp65 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb4_4}, TNode<IntPtrT>{tmp64});
    tmp66 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{tmp65});
    tmp67 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_slice.offset}, TNode<IntPtrT>{tmp66});
    std::tie(tmp68, tmp69) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_slice.object}, TNode<IntPtrT>{tmp67}).Flatten();
    tmp70 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp68, tmp69});
    tmp71 = Convert_uint32_char16_0(state_, TNode<Uint16T>{tmp70});
    tmp72 = CodeStubAssembler(state_).Word32Or(TNode<Uint32T>{tmp63}, TNode<Uint32T>{tmp71});
    tmp73 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0xffull));
    tmp74 = CodeStubAssembler(state_).Uint32GreaterThan(TNode<Uint32T>{tmp72}, TNode<Uint32T>{tmp73});
    ca_.Branch(tmp74, &block15, std::vector<compiler::Node*>{phi_bb4_4}, &block16, std::vector<compiler::Node*>{phi_bb4_4});
  }

  TNode<IntPtrT> phi_bb15_4;
  if (block15.is_used()) {
    ca_.Bind(&block15, &phi_bb15_4);
    ca_.Goto(&block3);
  }

  TNode<IntPtrT> phi_bb16_4;
  TNode<IntPtrT> tmp75;
  TNode<IntPtrT> tmp76;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_4);
    tmp75 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x8ull));
    tmp76 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb16_4}, TNode<IntPtrT>{tmp75});
    ca_.Goto(&block6, tmp76);
  }

  TNode<IntPtrT> phi_bb5_4;
  TNode<Uint32T> tmp77;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_4);
    tmp77 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block19, phi_bb5_4, tmp77);
  }

  TNode<IntPtrT> phi_bb19_4;
  TNode<Uint32T> phi_bb19_7;
  TNode<BoolT> tmp78;
  if (block19.is_used()) {
    ca_.Bind(&block19, &phi_bb19_4, &phi_bb19_7);
    tmp78 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb19_4}, TNode<IntPtrT>{p_slice.length});
    ca_.Branch(tmp78, &block17, std::vector<compiler::Node*>{phi_bb19_4, phi_bb19_7}, &block18, std::vector<compiler::Node*>{phi_bb19_4, phi_bb19_7});
  }

  TNode<IntPtrT> phi_bb17_4;
  TNode<Uint32T> phi_bb17_7;
  TNode<IntPtrT> tmp79;
  TNode<IntPtrT> tmp80;
  TNode<Union<HeapObject, TaggedIndex>> tmp81;
  TNode<IntPtrT> tmp82;
  TNode<Uint16T> tmp83;
  TNode<Uint32T> tmp84;
  TNode<Uint32T> tmp85;
  TNode<IntPtrT> tmp86;
  TNode<IntPtrT> tmp87;
  if (block17.is_used()) {
    ca_.Bind(&block17, &phi_bb17_4, &phi_bb17_7);
    tmp79 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{phi_bb17_4});
    tmp80 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_slice.offset}, TNode<IntPtrT>{tmp79});
    std::tie(tmp81, tmp82) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_slice.object}, TNode<IntPtrT>{tmp80}).Flatten();
    tmp83 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp81, tmp82});
    tmp84 = Convert_uint32_char16_0(state_, TNode<Uint16T>{tmp83});
    tmp85 = CodeStubAssembler(state_).Word32Or(TNode<Uint32T>{phi_bb17_7}, TNode<Uint32T>{tmp84});
    tmp86 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp87 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb17_4}, TNode<IntPtrT>{tmp86});
    ca_.Goto(&block19, tmp87, tmp85);
  }

  TNode<IntPtrT> phi_bb18_4;
  TNode<Uint32T> phi_bb18_7;
  TNode<Uint32T> tmp88;
  TNode<BoolT> tmp89;
  if (block18.is_used()) {
    ca_.Bind(&block18, &phi_bb18_4, &phi_bb18_7);
    tmp88 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0xffull));
    tmp89 = CodeStubAssembler(state_).Uint32GreaterThan(TNode<Uint32T>{phi_bb18_7}, TNode<Uint32T>{tmp88});
    ca_.Branch(tmp89, &block21, std::vector<compiler::Node*>{phi_bb18_4, phi_bb18_7}, &block22, std::vector<compiler::Node*>{phi_bb18_4, phi_bb18_7});
  }

  TNode<IntPtrT> phi_bb21_4;
  TNode<Uint32T> phi_bb21_7;
  if (block21.is_used()) {
    ca_.Bind(&block21, &phi_bb21_4, &phi_bb21_7);
    ca_.Goto(&block3);
  }

  TNode<IntPtrT> phi_bb22_4;
  TNode<Uint32T> phi_bb22_7;
  TNode<IntPtrT> tmp90;
  TNode<IntPtrT> tmp91;
  TNode<SeqOneByteString> tmp92;
  if (block22.is_used()) {
    ca_.Bind(&block22, &phi_bb22_4, &phi_bb22_7);
    tmp90 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{p_slice.length});
    tmp91 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_slice.offset}, TNode<IntPtrT>{tmp90});
    tmp92 = AllocateNonEmptySeqOneByteString_TwoByteToOneByteIterator_0(state_, TNode<Uint32T>{p_length}, TorqueStructTwoByteToOneByteIterator_0{TNode<Union<HeapObject, TaggedIndex>>{p_slice.object}, TNode<IntPtrT>{p_slice.offset}, TNode<IntPtrT>{tmp91}});
    ca_.Goto(&block1, tmp92);
  }

  TNode<IntPtrT> tmp93;
  TNode<IntPtrT> tmp94;
  TNode<Union<SeqTwoByteString, String>> tmp95;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp93 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{p_slice.length});
    tmp94 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_slice.offset}, TNode<IntPtrT>{tmp93});
    tmp95 = AllocateSeqTwoByteString_SliceIterator_char16_ConstReference_char16_0(state_, TNode<Uint32T>{p_length}, TorqueStructSliceIterator_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{p_slice.object}, TNode<IntPtrT>{p_slice.offset}, TNode<IntPtrT>{tmp94}, TorqueStructUnsafe_0{}});
    ca_.Goto(&block1, tmp95);
  }

  TNode<String> phi_bb1_4;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_4);
    ca_.Goto(&block24, phi_bb1_4);
  }

  TNode<String> phi_bb24_4;
    ca_.Bind(&block24, &phi_bb24_4);
  return TNode<String>{phi_bb24_4};
}

TF_BUILTIN(WasmStringNewWtf16Array, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<WasmArray> parameter0 = UncheckedParameter<WasmArray>(Descriptor::kArray);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kStart);
  USE(parameter1);
  TNode<Uint32T> parameter2 = UncheckedParameter<Uint32T>(Descriptor::kEnd);
  USE(parameter2);
  TNode<Smi> parameter3 = UncheckedParameter<Smi>(Descriptor::kConfig);
  USE(parameter3);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<Uint32T> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp1 = CodeStubAssembler(state_).LoadReference<Uint32T>(CodeStubAssembler::Reference{parameter0, tmp0});
    tmp2 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{tmp1}, TNode<Uint32T>{parameter2});
    ca_.Branch(tmp2, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    ca_.Goto(&block4);
  }

  TNode<BoolT> tmp3;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp3 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{parameter2}, TNode<Uint32T>{parameter1});
    ca_.Branch(tmp3, &block7, std::vector<compiler::Node*>{}, &block8, std::vector<compiler::Node*>{});
  }

  if (block7.is_used()) {
    ca_.Bind(&block7);
    ca_.Goto(&block4);
  }

  TNode<Uint32T> tmp4;
  TNode<Uint32T> tmp5;
  TNode<BoolT> tmp6;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp4 = CodeStubAssembler(state_).Uint32Sub(TNode<Uint32T>{parameter2}, TNode<Uint32T>{parameter1});
    tmp5 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp6 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp4}, TNode<Uint32T>{tmp5});
    ca_.Branch(tmp6, &block9, std::vector<compiler::Node*>{}, &block10, std::vector<compiler::Node*>{});
  }

  TNode<String> tmp7;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp7 = kEmptyString_0(state_);
    CodeStubAssembler(state_).Return(tmp7);
  }

  TNode<Smi> tmp8;
  TNode<BoolT> tmp9;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp8 = SmiConstant_0(state_, IntegerLiteral(false, 0x0ull));
    tmp9 = CodeStubAssembler(state_).SmiNotEqual(TNode<Smi>{parameter3}, TNode<Smi>{tmp8});
    ca_.Branch(tmp9, &block11, std::vector<compiler::Node*>{}, &block12, std::vector<compiler::Node*>{});
  }

  if (block11.is_used()) {
    ca_.Bind(&block11);
    ca_.Goto(&block2);
  }

  TNode<BoolT> tmp10;
  TNode<BoolT> tmp11;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    tmp10 = WasmBuiltinsAssembler(state_).InSharedSpace(TNode<HeapObject>{parameter0});
    tmp11 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp10});
    ca_.Branch(tmp11, &block13, std::vector<compiler::Node*>{}, &block14, std::vector<compiler::Node*>{});
  }

  if (block14.is_used()) {
    ca_.Bind(&block14);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/wasm.tq", 1105});
      CodeStubAssembler(state_).FailAssert("Torque assert '!InSharedSpace(array)' failed", pos_stack);
    }
  }

  TNode<Uint32T> tmp12;
  TNode<BoolT> tmp13;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    tmp12 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp13 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp4}, TNode<Uint32T>{tmp12});
    ca_.Branch(tmp13, &block15, std::vector<compiler::Node*>{}, &block16, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp14;
  TNode<IntPtrT> tmp15;
  TNode<IntPtrT> tmp16;
  TNode<IntPtrT> tmp17;
  TNode<Union<HeapObject, TaggedIndex>> tmp18;
  TNode<IntPtrT> tmp19;
  TNode<Uint16T> tmp20;
  TNode<String> tmp21;
  if (block15.is_used()) {
    ca_.Bind(&block15);
    tmp14 = Convert_intptr_uint32_0(state_, TNode<Uint32T>{parameter1});
    tmp15 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{tmp14});
    tmp16 = FromConstexpr_intptr_constexpr_int32_0(state_, WasmArray::HeaderSize(SharedFlag{false}));
    tmp17 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp16}, TNode<IntPtrT>{tmp15});
    std::tie(tmp18, tmp19) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{parameter0}, TNode<IntPtrT>{tmp17}).Flatten();
    tmp20 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp18, tmp19});
    tmp21 = CodeStubAssembler(state_).StringFromSingleCharCode(TNode<Uint16T>{tmp20});
    CodeStubAssembler(state_).Return(tmp21);
  }

  TNode<Uint32T> tmp22;
  TNode<BoolT> tmp23;
  if (block16.is_used()) {
    ca_.Bind(&block16);
    tmp22 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x20ull));
    tmp23 = CodeStubAssembler(state_).Uint32GreaterThanOrEqual(TNode<Uint32T>{tmp4}, TNode<Uint32T>{tmp22});
    ca_.Branch(tmp23, &block17, std::vector<compiler::Node*>{}, &block18, std::vector<compiler::Node*>{});
  }

  if (block17.is_used()) {
    ca_.Bind(&block17);
    ca_.Goto(&block2);
  }

  TNode<IntPtrT> tmp24;
  TNode<IntPtrT> tmp25;
  TNode<Uint32T> tmp26;
  TNode<IntPtrT> tmp27;
  TNode<IntPtrT> tmp28;
  TNode<Union<HeapObject, TaggedIndex>> tmp29;
  TNode<IntPtrT> tmp30;
  TNode<IntPtrT> tmp31;
  TNode<IntPtrT> tmp32;
  TNode<Union<HeapObject, TaggedIndex>> tmp33;
  TNode<IntPtrT> tmp34;
  TNode<IntPtrT> tmp35;
  if (block18.is_used()) {
    ca_.Bind(&block18);
    tmp24 = Convert_intptr_uint32_0(state_, TNode<Uint32T>{tmp4});
    tmp25 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp26 = CodeStubAssembler(state_).LoadReference<Uint32T>(CodeStubAssembler::Reference{parameter0, tmp25});
    tmp27 = Convert_intptr_uint32_0(state_, TNode<Uint32T>{tmp26});
    tmp28 = FromConstexpr_intptr_constexpr_int32_0(state_, WasmArray::HeaderSize(SharedFlag{false}));
    std::tie(tmp29, tmp30, tmp31) = NewConstSlice_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{parameter0}, TNode<IntPtrT>{tmp28}, TNode<IntPtrT>{tmp27}).Flatten();
    tmp32 = Convert_intptr_uint32_0(state_, TNode<Uint32T>{parameter1});
    compiler::CodeAssemblerLabel label36(&ca_);
    std::tie(tmp33, tmp34, tmp35) = Subslice_char16_0(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{tmp29}, TNode<IntPtrT>{tmp30}, TNode<IntPtrT>{tmp31}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{tmp32}, TNode<IntPtrT>{tmp24}, &label36).Flatten();
    ca_.Goto(&block21);
    if (label36.is_used()) {
      ca_.Bind(&label36);
      ca_.Goto(&block22);
    }
  }

  if (block22.is_used()) {
    ca_.Bind(&block22);
    ca_.Goto(&block4);
  }

  TNode<String> tmp37;
  if (block21.is_used()) {
    ca_.Bind(&block21);
    tmp37 = StringFromTwoByteSlice_0(state_, TNode<Uint32T>{tmp4}, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{tmp33}, TNode<IntPtrT>{tmp34}, TNode<IntPtrT>{tmp35}, TorqueStructUnsafe_0{}});
    CodeStubAssembler(state_).Return(tmp37);
  }

  TNode<NativeContext> tmp38;
  TNode<Smi> tmp39;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp38 = WasmBuiltinsAssembler(state_).LoadContextFromWasmOrJsFrame();
    tmp39 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapArrayOutOfBounds));
    CodeStubAssembler(state_).CallRuntime(Runtime::kThrowWasmError, tmp38, tmp39);
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<NativeContext> tmp40;
  TNode<Smi> tmp41;
  TNode<Smi> tmp42;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp40 = WasmBuiltinsAssembler(state_).LoadContextFromWasmOrJsFrame();
    tmp41 = CodeStubAssembler(state_).SmiFromUint32(TNode<Uint32T>{parameter1});
    tmp42 = CodeStubAssembler(state_).SmiFromUint32(TNode<Uint32T>{parameter2});
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmStringNewWtf16Array, tmp40, parameter0, tmp41, tmp42, parameter3);
  }
}

TF_BUILTIN(WasmStringFromDataSegment, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Uint32T> parameter0 = UncheckedParameter<Uint32T>(Descriptor::kSegmentLength);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kArrayStart);
  USE(parameter1);
  TNode<Uint32T> parameter2 = UncheckedParameter<Uint32T>(Descriptor::kArrayEnd);
  USE(parameter2);
  TNode<Smi> parameter3 = UncheckedParameter<Smi>(Descriptor::kSegmentIndex);
  USE(parameter3);
  TNode<Smi> parameter4 = UncheckedParameter<Smi>(Descriptor::kSegmentOffset);
  USE(parameter4);
  TNode<Smi> parameter5 = UncheckedParameter<Smi>(Descriptor::kVariant);
  USE(parameter5);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<Int32T> tmp1;
  TNode<Uint32T> tmp2;
  TNode<UintPtrT> tmp3;
  TNode<Uint32T> tmp4;
  TNode<Uint32T> tmp5;
  TNode<BoolT> tmp6;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = CodeStubAssembler(state_).SmiToInt32(TNode<Smi>{parameter4});
    tmp2 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp1});
    tmp3 = kSmiMax_0(state_);
    tmp4 = Convert_uint32_uintptr_0(state_, TNode<UintPtrT>{tmp3});
    tmp5 = CodeStubAssembler(state_).Uint32Sub(TNode<Uint32T>{tmp4}, TNode<Uint32T>{tmp2});
    tmp6 = CodeStubAssembler(state_).Uint32GreaterThan(TNode<Uint32T>{parameter0}, TNode<Uint32T>{tmp5});
    ca_.Branch(tmp6, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    ca_.Goto(&block4);
  }

  TNode<BoolT> tmp7;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp7 = CodeStubAssembler(state_).Uint32GreaterThan(TNode<Uint32T>{parameter1}, TNode<Uint32T>{parameter0});
    ca_.Branch(tmp7, &block7, std::vector<compiler::Node*>{}, &block8, std::vector<compiler::Node*>{});
  }

  if (block7.is_used()) {
    ca_.Bind(&block7);
    ca_.Goto(&block2);
  }

  TNode<BoolT> tmp8;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp8 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{parameter2}, TNode<Uint32T>{parameter1});
    ca_.Branch(tmp8, &block9, std::vector<compiler::Node*>{}, &block10, std::vector<compiler::Node*>{});
  }

  if (block9.is_used()) {
    ca_.Bind(&block9);
    ca_.Goto(&block2);
  }

  TNode<Uint32T> tmp9;
  TNode<Uint32T> tmp10;
  TNode<BoolT> tmp11;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp9 = CodeStubAssembler(state_).Uint32Sub(TNode<Uint32T>{parameter2}, TNode<Uint32T>{parameter1});
    tmp10 = CodeStubAssembler(state_).Uint32Sub(TNode<Uint32T>{parameter0}, TNode<Uint32T>{parameter1});
    tmp11 = CodeStubAssembler(state_).Uint32GreaterThan(TNode<Uint32T>{tmp9}, TNode<Uint32T>{tmp10});
    ca_.Branch(tmp11, &block11, std::vector<compiler::Node*>{}, &block12, std::vector<compiler::Node*>{});
  }

  if (block11.is_used()) {
    ca_.Bind(&block11);
    ca_.Goto(&block2);
  }

  TNode<Uint32T> tmp12;
  TNode<Smi> tmp13;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    tmp12 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{tmp2}, TNode<Uint32T>{parameter1});
    compiler::CodeAssemblerLabel label14(&ca_);
    tmp13 = Convert_PositiveSmi_uint32_0(state_, TNode<Uint32T>{tmp12}, &label14);
    ca_.Goto(&block13);
    if (label14.is_used()) {
      ca_.Bind(&label14);
      ca_.Goto(&block14);
    }
  }

  if (block14.is_used()) {
    ca_.Bind(&block14);
    ca_.Goto(&block4);
  }

  TNode<Smi> tmp15;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    compiler::CodeAssemblerLabel label16(&ca_);
    tmp15 = Convert_PositiveSmi_uint32_0(state_, TNode<Uint32T>{tmp9}, &label16);
    ca_.Goto(&block15);
    if (label16.is_used()) {
      ca_.Bind(&label16);
      ca_.Goto(&block16);
    }
  }

  if (block16.is_used()) {
    ca_.Bind(&block16);
    ca_.Goto(&block4);
  }

  TNode<NativeContext> tmp17;
  if (block15.is_used()) {
    ca_.Bind(&block15);
    tmp17 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmStringNewSegmentWtf8, tmp17, tmp0, parameter3, tmp13, tmp15, parameter5);
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapElementSegmentOutOfBounds, TNode<Object>());
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapArrayOutOfBounds, TNode<Object>());
  }
}

TF_BUILTIN(WasmStringAsWtf16, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<String> parameter0 = UncheckedParameter<String>(Descriptor::kStr);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<ConsString> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_ConsString_1(state_, TNode<String>{parameter0}, &label1);
    ca_.Goto(&block3);
    if (label1.is_used()) {
      ca_.Bind(&label1);
      ca_.Goto(&block4);
    }
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    CodeStubAssembler(state_).Return(parameter0);
  }

  TNode<String> tmp2;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp2 = Flatten_1(state_, TNode<ConsString>{tmp0});
    CodeStubAssembler(state_).Return(tmp2);
  }
}

TF_BUILTIN(WasmStringConst, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Uint32T> parameter0 = UncheckedParameter<Uint32T>(Descriptor::kIndex);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<NativeContext> tmp1;
  TNode<Smi> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    tmp2 = CodeStubAssembler(state_).SmiFromUint32(TNode<Uint32T>{parameter0});
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmStringConst, tmp1, tmp0, tmp2);
  }
}

TF_BUILTIN(WasmStringMeasureUtf8, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<String> parameter0 = UncheckedParameter<String>(Descriptor::kString);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  TNode<Number> tmp1;
  TNode<Int32T> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
    tmp1 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kWasmStringMeasureUtf8, tmp0, parameter0)); 
    tmp2 = NumberToInt32_0(state_, TNode<Number>{tmp1});
    CodeStubAssembler(state_).Return(tmp2);
  }
}

TF_BUILTIN(WasmStringMeasureWtf8, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<String> parameter0 = UncheckedParameter<String>(Descriptor::kString);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  TNode<Number> tmp1;
  TNode<Int32T> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
    tmp1 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kWasmStringMeasureWtf8, tmp0, parameter0)); 
    tmp2 = NumberToInt32_0(state_, TNode<Number>{tmp1});
    CodeStubAssembler(state_).Return(tmp2);
  }
}

TF_BUILTIN(WasmStringEncodeWtf8, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<UintPtrT> parameter0 = UncheckedParameter<UintPtrT>(Descriptor::kOffset);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kMemory);
  USE(parameter1);
  TNode<Uint32T> parameter2 = UncheckedParameter<Uint32T>(Descriptor::kUtf8Variant);
  USE(parameter2);
  TNode<String> parameter3 = UncheckedParameter<String>(Descriptor::kString);
  USE(parameter3);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<NativeContext> tmp1;
  TNode<Smi> tmp2;
  TNode<Smi> tmp3;
  TNode<Number> tmp4;
  TNode<Number> tmp5;
  TNode<Uint32T> tmp6;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    tmp2 = CodeStubAssembler(state_).SmiFromUint32(TNode<Uint32T>{parameter1});
    tmp3 = CodeStubAssembler(state_).SmiFromUint32(TNode<Uint32T>{parameter2});
    tmp4 = UintPtrToNumberRounding_0(state_, TNode<UintPtrT>{parameter0});
    tmp5 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kWasmStringEncodeWtf8, tmp1, tmp0, tmp2, tmp3, parameter3, tmp4)); 
    tmp6 = NumberToUint32_0(state_, TNode<Number>{tmp5});
    CodeStubAssembler(state_).Return(tmp6);
  }
}

TF_BUILTIN(WasmStringEncodeWtf8Array, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<String> parameter0 = UncheckedParameter<String>(Descriptor::kString);
  USE(parameter0);
  TNode<WasmArray> parameter1 = UncheckedParameter<WasmArray>(Descriptor::kArray);
  USE(parameter1);
  TNode<Uint32T> parameter2 = UncheckedParameter<Uint32T>(Descriptor::kStart);
  USE(parameter2);
  TNode<Smi> parameter3 = UncheckedParameter<Smi>(Descriptor::kUtf8Variant);
  USE(parameter3);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<NativeContext> tmp1;
  TNode<Number> tmp2;
  TNode<Number> tmp3;
  TNode<Uint32T> tmp4;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    tmp2 = ca_.CallBuiltin<Number>(Builtin::kWasmUint32ToNumber, TNode<Object>(), parameter2);
    tmp3 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kWasmStringEncodeWtf8Array, tmp1, parameter3, parameter0, parameter1, tmp2)); 
    tmp4 = NumberToUint32_0(state_, TNode<Number>{tmp3});
    CodeStubAssembler(state_).Return(tmp4);
  }
}

TF_BUILTIN(WasmStringToUtf8Array, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<String> parameter0 = UncheckedParameter<String>(Descriptor::kString);
  USE(parameter0);
  TNode<Int32T> parameter1 = UncheckedParameter<Int32T>(Descriptor::kShared);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  TNode<Smi> tmp1;
  TNode<WasmArray> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
    tmp1 = CodeStubAssembler(state_).SmiFromInt32(TNode<Int32T>{parameter1});
    tmp2 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kWasmStringToUtf8Array, tmp0, parameter0, tmp1)); 
    CodeStubAssembler(state_).Return(tmp2);
  }
}

TF_BUILTIN(WasmStringEncodeWtf16, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<String> parameter0 = UncheckedParameter<String>(Descriptor::kString);
  USE(parameter0);
  TNode<UintPtrT> parameter1 = UncheckedParameter<UintPtrT>(Descriptor::kOffset);
  USE(parameter1);
  TNode<Uint32T> parameter2 = UncheckedParameter<Uint32T>(Descriptor::kMemory);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<NativeContext> tmp1;
  TNode<Smi> tmp2;
  TNode<Number> tmp3;
  TNode<Smi> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<Int32T> tmp6;
  TNode<Smi> tmp7;
  TNode<JSAny> tmp8;
  TNode<IntPtrT> tmp9;
  TNode<Int32T> tmp10;
  TNode<Uint32T> tmp11;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    tmp2 = CodeStubAssembler(state_).SmiFromUint32(TNode<Uint32T>{parameter2});
    tmp3 = UintPtrToNumberRounding_0(state_, TNode<UintPtrT>{parameter1});
    tmp4 = SmiConstant_0(state_, IntegerLiteral(false, 0x0ull));
    tmp5 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp6 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{parameter0, tmp5});
    tmp7 = CodeStubAssembler(state_).SmiFromInt32(TNode<Int32T>{tmp6});
    tmp8 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kWasmStringEncodeWtf16, tmp1, tmp0, tmp2, parameter0, tmp3, tmp4, tmp7)); 
    tmp9 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp10 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{parameter0, tmp9});
    tmp11 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp10});
    CodeStubAssembler(state_).Return(tmp11);
  }
}

TF_BUILTIN(WasmStringEncodeWtf16Array, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<String> parameter0 = UncheckedParameter<String>(Descriptor::kString);
  USE(parameter0);
  TNode<WasmArray> parameter1 = UncheckedParameter<WasmArray>(Descriptor::kArray);
  USE(parameter1);
  TNode<Uint32T> parameter2 = UncheckedParameter<Uint32T>(Descriptor::kStart);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, String> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, String> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block33(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block37(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block36(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block41(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block40(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block45(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block44(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block49(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block48(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block53(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block52(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block57(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block56(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block61(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block60(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block38(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block34(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block66(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block64(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block70(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block71(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT> block77(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT> block76(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block65(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block83(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block81(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block87(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block88(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT> block94(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT> block93(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block82(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<Uint32T> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp1 = CodeStubAssembler(state_).LoadReference<Uint32T>(CodeStubAssembler::Reference{parameter1, tmp0});
    tmp2 = CodeStubAssembler(state_).Uint32GreaterThan(TNode<Uint32T>{parameter2}, TNode<Uint32T>{tmp1});
    ca_.Branch(tmp2, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    ca_.Goto(&block2);
  }

  TNode<IntPtrT> tmp3;
  TNode<Uint32T> tmp4;
  TNode<Uint32T> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<Int32T> tmp7;
  TNode<Uint32T> tmp8;
  TNode<BoolT> tmp9;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp3 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp4 = CodeStubAssembler(state_).LoadReference<Uint32T>(CodeStubAssembler::Reference{parameter1, tmp3});
    tmp5 = CodeStubAssembler(state_).Uint32Sub(TNode<Uint32T>{tmp4}, TNode<Uint32T>{parameter2});
    tmp6 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp7 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{parameter0, tmp6});
    tmp8 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp7});
    tmp9 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{tmp5}, TNode<Uint32T>{tmp8});
    ca_.Branch(tmp9, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    ca_.Goto(&block2);
  }

  TNode<BoolT> tmp10;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp10 = WasmBuiltinsAssembler(state_).InSharedSpace(TNode<HeapObject>{parameter1});
    ca_.Branch(tmp10, &block7, std::vector<compiler::Node*>{}, &block8, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp11;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp11 = Convert_intptr_constexpr_int32_0(state_, WasmArray::HeaderSize(SharedFlag{true}));
    ca_.Goto(&block9, tmp11);
  }

  TNode<IntPtrT> tmp12;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp12 = Convert_intptr_constexpr_int32_0(state_, WasmArray::HeaderSize(SharedFlag{false}));
    ca_.Goto(&block9, tmp12);
  }

  TNode<IntPtrT> phi_bb9_3;
  TNode<IntPtrT> tmp13;
  TNode<IntPtrT> tmp14;
  TNode<IntPtrT> tmp15;
  TNode<IntPtrT> tmp16;
  TNode<Union<HeapObject, TaggedIndex>> tmp17;
  TNode<IntPtrT> tmp18;
  TNode<IntPtrT> tmp19;
  TNode<IntPtrT> tmp20;
  TNode<IntPtrT> tmp21;
  TNode<Int32T> tmp22;
  TNode<IntPtrT> tmp23;
  if (block9.is_used()) {
    ca_.Bind(&block9, &phi_bb9_3);
    tmp13 = Convert_intptr_uint32_0(state_, TNode<Uint32T>{parameter2});
    tmp14 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{tmp13});
    tmp15 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb9_3}, TNode<IntPtrT>{tmp14});
    tmp16 = CodeStubAssembler(state_).LoadStringLengthAsWord(TNode<String>{parameter0});
    std::tie(tmp17, tmp18, tmp19) = NewMutableSlice_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{parameter1}, TNode<IntPtrT>{tmp15}, TNode<IntPtrT>{tmp16}).Flatten();
    tmp20 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp21 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp22 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{parameter0, tmp21});
    tmp23 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp22});
    ca_.Goto(&block17, parameter0, tmp20);
  }

  TNode<String> phi_bb17_10;
  TNode<IntPtrT> phi_bb17_11;
  TNode<BoolT> tmp24;
  if (block17.is_used()) {
    ca_.Bind(&block17, &phi_bb17_10, &phi_bb17_11);
    tmp24 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Branch(tmp24, &block15, std::vector<compiler::Node*>{phi_bb17_10, phi_bb17_11}, &block16, std::vector<compiler::Node*>{phi_bb17_10, phi_bb17_11});
  }

  TNode<String> phi_bb15_10;
  TNode<IntPtrT> phi_bb15_11;
  TNode<SeqOneByteString> tmp25;
  if (block15.is_used()) {
    ca_.Bind(&block15, &phi_bb15_10, &phi_bb15_11);
    compiler::CodeAssemblerLabel label26(&ca_);
    tmp25 = Cast_SeqOneByteString_1(state_, TNode<String>{phi_bb15_10}, &label26);
    ca_.Goto(&block20, phi_bb15_10, phi_bb15_11, phi_bb15_10, phi_bb15_10);
    if (label26.is_used()) {
      ca_.Bind(&label26);
      ca_.Goto(&block21, phi_bb15_10, phi_bb15_11, phi_bb15_10, phi_bb15_10);
    }
  }

  TNode<String> phi_bb21_10;
  TNode<IntPtrT> phi_bb21_11;
  TNode<String> phi_bb21_13;
  TNode<String> phi_bb21_14;
  TNode<SeqTwoByteString> tmp27;
  if (block21.is_used()) {
    ca_.Bind(&block21, &phi_bb21_10, &phi_bb21_11, &phi_bb21_13, &phi_bb21_14);
    compiler::CodeAssemblerLabel label28(&ca_);
    tmp27 = Cast_SeqTwoByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb21_13)}, &label28);
    ca_.Goto(&block28, phi_bb21_10, phi_bb21_11, phi_bb21_13);
    if (label28.is_used()) {
      ca_.Bind(&label28);
      ca_.Goto(&block29, phi_bb21_10, phi_bb21_11, phi_bb21_13);
    }
  }

  TNode<String> phi_bb20_10;
  TNode<IntPtrT> phi_bb20_11;
  TNode<String> phi_bb20_13;
  TNode<String> phi_bb20_14;
  TNode<Union<HeapObject, TaggedIndex>> tmp29;
  TNode<IntPtrT> tmp30;
  TNode<IntPtrT> tmp31;
  TNode<Union<HeapObject, TaggedIndex>> tmp32;
  TNode<IntPtrT> tmp33;
  TNode<IntPtrT> tmp34;
  if (block20.is_used()) {
    ca_.Bind(&block20, &phi_bb20_10, &phi_bb20_11, &phi_bb20_13, &phi_bb20_14);
    std::tie(tmp29, tmp30, tmp31) = FieldSliceSeqOneByteStringChars_0(state_, TNode<SeqOneByteString>{tmp25}).Flatten();
    compiler::CodeAssemblerLabel label35(&ca_);
    std::tie(tmp32, tmp33, tmp34) = Subslice_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp29}, TNode<IntPtrT>{tmp30}, TNode<IntPtrT>{tmp31}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb20_11}, TNode<IntPtrT>{tmp23}, &label35).Flatten();
    ca_.Goto(&block24, phi_bb20_10, phi_bb20_11, phi_bb20_13, phi_bb20_11);
    if (label35.is_used()) {
      ca_.Bind(&label35);
      ca_.Goto(&block25, phi_bb20_10, phi_bb20_11, phi_bb20_13, phi_bb20_11);
    }
  }

  TNode<String> phi_bb25_10;
  TNode<IntPtrT> phi_bb25_11;
  TNode<String> phi_bb25_13;
  TNode<IntPtrT> phi_bb25_18;
  if (block25.is_used()) {
    ca_.Bind(&block25, &phi_bb25_10, &phi_bb25_11, &phi_bb25_13, &phi_bb25_18);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:292:67");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> phi_bb24_10;
  TNode<IntPtrT> phi_bb24_11;
  TNode<String> phi_bb24_13;
  TNode<IntPtrT> phi_bb24_18;
  if (block24.is_used()) {
    ca_.Bind(&block24, &phi_bb24_10, &phi_bb24_11, &phi_bb24_13, &phi_bb24_18);
    ca_.Goto(&block14, tmp32, tmp33, tmp34);
  }

  TNode<String> phi_bb29_10;
  TNode<IntPtrT> phi_bb29_11;
  TNode<String> phi_bb29_13;
  TNode<ThinString> tmp36;
  if (block29.is_used()) {
    ca_.Bind(&block29, &phi_bb29_10, &phi_bb29_11, &phi_bb29_13);
    compiler::CodeAssemblerLabel label37(&ca_);
    tmp36 = Cast_ThinString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb29_13)}, &label37);
    ca_.Goto(&block36, phi_bb29_10, phi_bb29_11, phi_bb29_13);
    if (label37.is_used()) {
      ca_.Bind(&label37);
      ca_.Goto(&block37, phi_bb29_10, phi_bb29_11, phi_bb29_13);
    }
  }

  TNode<String> phi_bb28_10;
  TNode<IntPtrT> phi_bb28_11;
  TNode<String> phi_bb28_13;
  TNode<Union<HeapObject, TaggedIndex>> tmp38;
  TNode<IntPtrT> tmp39;
  TNode<IntPtrT> tmp40;
  TNode<Union<HeapObject, TaggedIndex>> tmp41;
  TNode<IntPtrT> tmp42;
  TNode<IntPtrT> tmp43;
  if (block28.is_used()) {
    ca_.Bind(&block28, &phi_bb28_10, &phi_bb28_11, &phi_bb28_13);
    std::tie(tmp38, tmp39, tmp40) = FieldSliceSeqTwoByteStringChars_0(state_, TNode<SeqTwoByteString>{tmp27}).Flatten();
    compiler::CodeAssemblerLabel label44(&ca_);
    std::tie(tmp41, tmp42, tmp43) = Subslice_char16_0(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{tmp38}, TNode<IntPtrT>{tmp39}, TNode<IntPtrT>{tmp40}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb28_11}, TNode<IntPtrT>{tmp23}, &label44).Flatten();
    ca_.Goto(&block32, phi_bb28_10, phi_bb28_11, phi_bb28_13, phi_bb28_11);
    if (label44.is_used()) {
      ca_.Bind(&label44);
      ca_.Goto(&block33, phi_bb28_10, phi_bb28_11, phi_bb28_13, phi_bb28_11);
    }
  }

  TNode<String> phi_bb33_10;
  TNode<IntPtrT> phi_bb33_11;
  TNode<String> phi_bb33_13;
  TNode<IntPtrT> phi_bb33_18;
  if (block33.is_used()) {
    ca_.Bind(&block33, &phi_bb33_10, &phi_bb33_11, &phi_bb33_13, &phi_bb33_18);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:295:67");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> phi_bb32_10;
  TNode<IntPtrT> phi_bb32_11;
  TNode<String> phi_bb32_13;
  TNode<IntPtrT> phi_bb32_18;
  if (block32.is_used()) {
    ca_.Bind(&block32, &phi_bb32_10, &phi_bb32_11, &phi_bb32_13, &phi_bb32_18);
    ca_.Goto(&block12, tmp41, tmp42, tmp43);
  }

  TNode<String> phi_bb37_10;
  TNode<IntPtrT> phi_bb37_11;
  TNode<String> phi_bb37_13;
  TNode<ConsString> tmp45;
  if (block37.is_used()) {
    ca_.Bind(&block37, &phi_bb37_10, &phi_bb37_11, &phi_bb37_13);
    compiler::CodeAssemblerLabel label46(&ca_);
    tmp45 = Cast_ConsString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb37_13)}, &label46);
    ca_.Goto(&block40, phi_bb37_10, phi_bb37_11, phi_bb37_13);
    if (label46.is_used()) {
      ca_.Bind(&label46);
      ca_.Goto(&block41, phi_bb37_10, phi_bb37_11, phi_bb37_13);
    }
  }

  TNode<String> phi_bb36_10;
  TNode<IntPtrT> phi_bb36_11;
  TNode<String> phi_bb36_13;
  TNode<IntPtrT> tmp47;
  TNode<InternalizedString> tmp48;
  if (block36.is_used()) {
    ca_.Bind(&block36, &phi_bb36_10, &phi_bb36_11, &phi_bb36_13);
    tmp47 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp48 = CodeStubAssembler(state_).LoadReference<InternalizedString>(CodeStubAssembler::Reference{tmp36, tmp47});
    ca_.Goto(&block34, tmp48, phi_bb36_11, phi_bb36_13);
  }

  TNode<String> phi_bb41_10;
  TNode<IntPtrT> phi_bb41_11;
  TNode<String> phi_bb41_13;
  TNode<SlicedString> tmp49;
  if (block41.is_used()) {
    ca_.Bind(&block41, &phi_bb41_10, &phi_bb41_11, &phi_bb41_13);
    compiler::CodeAssemblerLabel label50(&ca_);
    tmp49 = Cast_SlicedString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb41_13)}, &label50);
    ca_.Goto(&block44, phi_bb41_10, phi_bb41_11, phi_bb41_13);
    if (label50.is_used()) {
      ca_.Bind(&label50);
      ca_.Goto(&block45, phi_bb41_10, phi_bb41_11, phi_bb41_13);
    }
  }

  TNode<String> phi_bb40_10;
  TNode<IntPtrT> phi_bb40_11;
  TNode<String> phi_bb40_13;
  TNode<String> tmp51;
  if (block40.is_used()) {
    ca_.Bind(&block40, &phi_bb40_10, &phi_bb40_11, &phi_bb40_13);
    tmp51 = Flatten_1(state_, TNode<ConsString>{tmp45});
    ca_.Goto(&block38, tmp51, phi_bb40_11, phi_bb40_13);
  }

  TNode<String> phi_bb45_10;
  TNode<IntPtrT> phi_bb45_11;
  TNode<String> phi_bb45_13;
  TNode<ExternalOneByteString> tmp52;
  if (block45.is_used()) {
    ca_.Bind(&block45, &phi_bb45_10, &phi_bb45_11, &phi_bb45_13);
    compiler::CodeAssemblerLabel label53(&ca_);
    tmp52 = Cast_ExternalOneByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb45_13)}, &label53);
    ca_.Goto(&block48, phi_bb45_10, phi_bb45_11, phi_bb45_13);
    if (label53.is_used()) {
      ca_.Bind(&label53);
      ca_.Goto(&block49, phi_bb45_10, phi_bb45_11, phi_bb45_13);
    }
  }

  TNode<String> phi_bb44_10;
  TNode<IntPtrT> phi_bb44_11;
  TNode<String> phi_bb44_13;
  TNode<IntPtrT> tmp54;
  TNode<Smi> tmp55;
  TNode<IntPtrT> tmp56;
  TNode<Int32T> tmp57;
  TNode<Int32T> tmp58;
  TNode<Int32T> tmp59;
  TNode<Uint32T> tmp60;
  TNode<IntPtrT> tmp61;
  TNode<IntPtrT> tmp62;
  TNode<String> tmp63;
  if (block44.is_used()) {
    ca_.Bind(&block44, &phi_bb44_10, &phi_bb44_11, &phi_bb44_13);
    tmp54 = FromConstexpr_intptr_constexpr_int31_0(state_, 16);
    tmp55 = CodeStubAssembler(state_).LoadReference<Smi>(CodeStubAssembler::Reference{tmp49, tmp54});
    tmp56 = Convert_intptr_Smi_0(state_, TNode<Smi>{tmp55});
    tmp57 = CodeStubAssembler(state_).TruncateIntPtrToInt32(TNode<IntPtrT>{tmp56});
    tmp58 = CodeStubAssembler(state_).TruncateIntPtrToInt32(TNode<IntPtrT>{phi_bb44_11});
    tmp59 = CodeStubAssembler(state_).Int32Add(TNode<Int32T>{tmp58}, TNode<Int32T>{tmp57});
    tmp60 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp59});
    tmp61 = Convert_intptr_uint32_0(state_, TNode<Uint32T>{tmp60});
    tmp62 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp63 = CodeStubAssembler(state_).LoadReference<String>(CodeStubAssembler::Reference{tmp49, tmp62});
    ca_.Goto(&block38, tmp63, tmp61, phi_bb44_13);
  }

  TNode<String> phi_bb49_10;
  TNode<IntPtrT> phi_bb49_11;
  TNode<String> phi_bb49_13;
  TNode<ExternalTwoByteString> tmp64;
  if (block49.is_used()) {
    ca_.Bind(&block49, &phi_bb49_10, &phi_bb49_11, &phi_bb49_13);
    compiler::CodeAssemblerLabel label65(&ca_);
    tmp64 = Cast_ExternalTwoByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb49_13)}, &label65);
    ca_.Goto(&block56, phi_bb49_10, phi_bb49_11, phi_bb49_13);
    if (label65.is_used()) {
      ca_.Bind(&label65);
      ca_.Goto(&block57, phi_bb49_10, phi_bb49_11, phi_bb49_13);
    }
  }

  TNode<String> phi_bb48_10;
  TNode<IntPtrT> phi_bb48_11;
  TNode<String> phi_bb48_13;
  TNode<RawPtrT> tmp66;
  TNode<IntPtrT> tmp67;
  TNode<Int32T> tmp68;
  TNode<IntPtrT> tmp69;
  TNode<Union<HeapObject, TaggedIndex>> tmp70;
  TNode<IntPtrT> tmp71;
  TNode<IntPtrT> tmp72;
  TNode<Union<HeapObject, TaggedIndex>> tmp73;
  TNode<IntPtrT> tmp74;
  TNode<IntPtrT> tmp75;
  if (block48.is_used()) {
    ca_.Bind(&block48, &phi_bb48_10, &phi_bb48_11, &phi_bb48_13);
    tmp66 = Method_ExternalOneByteString_GetChars_0(state_, TNode<ExternalOneByteString>{tmp52});
    tmp67 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp68 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp52, tmp67});
    tmp69 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp68});
    std::tie(tmp70, tmp71, tmp72) = NewOffHeapConstSlice_char8_0(state_, TNode<RawPtrT>{tmp66}, TNode<IntPtrT>{tmp69}).Flatten();
    compiler::CodeAssemblerLabel label76(&ca_);
    std::tie(tmp73, tmp74, tmp75) = Subslice_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp70}, TNode<IntPtrT>{tmp71}, TNode<IntPtrT>{tmp72}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb48_11}, TNode<IntPtrT>{tmp23}, &label76).Flatten();
    ca_.Goto(&block52, phi_bb48_10, phi_bb48_11, phi_bb48_13, phi_bb48_11);
    if (label76.is_used()) {
      ca_.Bind(&label76);
      ca_.Goto(&block53, phi_bb48_10, phi_bb48_11, phi_bb48_13, phi_bb48_11);
    }
  }

  TNode<String> phi_bb53_10;
  TNode<IntPtrT> phi_bb53_11;
  TNode<String> phi_bb53_13;
  TNode<IntPtrT> phi_bb53_21;
  if (block53.is_used()) {
    ca_.Bind(&block53, &phi_bb53_10, &phi_bb53_11, &phi_bb53_13, &phi_bb53_21);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:315:63");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> phi_bb52_10;
  TNode<IntPtrT> phi_bb52_11;
  TNode<String> phi_bb52_13;
  TNode<IntPtrT> phi_bb52_21;
  if (block52.is_used()) {
    ca_.Bind(&block52, &phi_bb52_10, &phi_bb52_11, &phi_bb52_13, &phi_bb52_21);
    ca_.Goto(&block14, tmp73, tmp74, tmp75);
  }

  TNode<String> phi_bb57_10;
  TNode<IntPtrT> phi_bb57_11;
  TNode<String> phi_bb57_13;
  if (block57.is_used()) {
    ca_.Bind(&block57, &phi_bb57_10, &phi_bb57_11, &phi_bb57_13);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:323:9");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> phi_bb56_10;
  TNode<IntPtrT> phi_bb56_11;
  TNode<String> phi_bb56_13;
  TNode<RawPtrT> tmp77;
  TNode<IntPtrT> tmp78;
  TNode<Int32T> tmp79;
  TNode<IntPtrT> tmp80;
  TNode<Union<HeapObject, TaggedIndex>> tmp81;
  TNode<IntPtrT> tmp82;
  TNode<IntPtrT> tmp83;
  TNode<Union<HeapObject, TaggedIndex>> tmp84;
  TNode<IntPtrT> tmp85;
  TNode<IntPtrT> tmp86;
  if (block56.is_used()) {
    ca_.Bind(&block56, &phi_bb56_10, &phi_bb56_11, &phi_bb56_13);
    tmp77 = Method_ExternalTwoByteString_GetChars_0(state_, TNode<ExternalTwoByteString>{tmp64});
    tmp78 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp79 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp64, tmp78});
    tmp80 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp79});
    std::tie(tmp81, tmp82, tmp83) = NewOffHeapConstSlice_char16_0(state_, TNode<RawPtrT>{tmp77}, TNode<IntPtrT>{tmp80}).Flatten();
    compiler::CodeAssemblerLabel label87(&ca_);
    std::tie(tmp84, tmp85, tmp86) = Subslice_char16_0(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{tmp81}, TNode<IntPtrT>{tmp82}, TNode<IntPtrT>{tmp83}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb56_11}, TNode<IntPtrT>{tmp23}, &label87).Flatten();
    ca_.Goto(&block60, phi_bb56_10, phi_bb56_11, phi_bb56_13, phi_bb56_11);
    if (label87.is_used()) {
      ca_.Bind(&label87);
      ca_.Goto(&block61, phi_bb56_10, phi_bb56_11, phi_bb56_13, phi_bb56_11);
    }
  }

  TNode<String> phi_bb61_10;
  TNode<IntPtrT> phi_bb61_11;
  TNode<String> phi_bb61_13;
  TNode<IntPtrT> phi_bb61_21;
  if (block61.is_used()) {
    ca_.Bind(&block61, &phi_bb61_10, &phi_bb61_11, &phi_bb61_13, &phi_bb61_21);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:320:63");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> phi_bb60_10;
  TNode<IntPtrT> phi_bb60_11;
  TNode<String> phi_bb60_13;
  TNode<IntPtrT> phi_bb60_21;
  if (block60.is_used()) {
    ca_.Bind(&block60, &phi_bb60_10, &phi_bb60_11, &phi_bb60_13, &phi_bb60_21);
    ca_.Goto(&block12, tmp84, tmp85, tmp86);
  }

  TNode<String> phi_bb38_10;
  TNode<IntPtrT> phi_bb38_11;
  TNode<String> phi_bb38_13;
  if (block38.is_used()) {
    ca_.Bind(&block38, &phi_bb38_10, &phi_bb38_11, &phi_bb38_13);
    ca_.Goto(&block34, phi_bb38_10, phi_bb38_11, phi_bb38_13);
  }

  TNode<String> phi_bb34_10;
  TNode<IntPtrT> phi_bb34_11;
  TNode<String> phi_bb34_13;
  if (block34.is_used()) {
    ca_.Bind(&block34, &phi_bb34_10, &phi_bb34_11, &phi_bb34_13);
    ca_.Goto(&block17, phi_bb34_10, phi_bb34_11);
  }

  TNode<String> phi_bb16_10;
  TNode<IntPtrT> phi_bb16_11;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_10, &phi_bb16_11);
    VerifiedUnreachable_0(state_);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb14_8;
  TNode<IntPtrT> phi_bb14_9;
  TNode<IntPtrT> phi_bb14_10;
  TNode<IntPtrT> tmp88;
  TNode<IntPtrT> tmp89;
  TNode<IntPtrT> tmp90;
  TNode<IntPtrT> tmp91;
  if (block14.is_used()) {
    ca_.Bind(&block14, &phi_bb14_8, &phi_bb14_9, &phi_bb14_10);
    tmp88 = TimesSizeOf_char8_0(state_, TNode<IntPtrT>{phi_bb14_10});
    tmp89 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb14_9}, TNode<IntPtrT>{tmp88});
    tmp90 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{tmp19});
    tmp91 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp18}, TNode<IntPtrT>{tmp90});
    ca_.Goto(&block66, phi_bb14_8, phi_bb14_9, phi_bb14_10, phi_bb14_8, phi_bb14_9, tmp18);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb66_8;
  TNode<IntPtrT> phi_bb66_9;
  TNode<IntPtrT> phi_bb66_10;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb66_11;
  TNode<IntPtrT> phi_bb66_12;
  TNode<IntPtrT> phi_bb66_15;
  TNode<BoolT> tmp92;
  if (block66.is_used()) {
    ca_.Bind(&block66, &phi_bb66_8, &phi_bb66_9, &phi_bb66_10, &phi_bb66_11, &phi_bb66_12, &phi_bb66_15);
    tmp92 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Branch(tmp92, &block64, std::vector<compiler::Node*>{phi_bb66_8, phi_bb66_9, phi_bb66_10, phi_bb66_11, phi_bb66_12, phi_bb66_15}, &block65, std::vector<compiler::Node*>{phi_bb66_8, phi_bb66_9, phi_bb66_10, phi_bb66_11, phi_bb66_12, phi_bb66_15});
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb64_8;
  TNode<IntPtrT> phi_bb64_9;
  TNode<IntPtrT> phi_bb64_10;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb64_11;
  TNode<IntPtrT> phi_bb64_12;
  TNode<IntPtrT> phi_bb64_15;
  TNode<BoolT> tmp93;
  if (block64.is_used()) {
    ca_.Bind(&block64, &phi_bb64_8, &phi_bb64_9, &phi_bb64_10, &phi_bb64_11, &phi_bb64_12, &phi_bb64_15);
    tmp93 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb64_15}, TNode<IntPtrT>{tmp91});
    ca_.Branch(tmp93, &block70, std::vector<compiler::Node*>{phi_bb64_8, phi_bb64_9, phi_bb64_10, phi_bb64_11, phi_bb64_12, phi_bb64_15}, &block71, std::vector<compiler::Node*>{phi_bb64_8, phi_bb64_9, phi_bb64_10, phi_bb64_11, phi_bb64_12, phi_bb64_15});
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb70_8;
  TNode<IntPtrT> phi_bb70_9;
  TNode<IntPtrT> phi_bb70_10;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb70_11;
  TNode<IntPtrT> phi_bb70_12;
  TNode<IntPtrT> phi_bb70_15;
  if (block70.is_used()) {
    ca_.Bind(&block70, &phi_bb70_8, &phi_bb70_9, &phi_bb70_10, &phi_bb70_11, &phi_bb70_12, &phi_bb70_15);
    ca_.Goto(&block65, phi_bb70_8, phi_bb70_9, phi_bb70_10, phi_bb70_11, phi_bb70_12, phi_bb70_15);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb71_8;
  TNode<IntPtrT> phi_bb71_9;
  TNode<IntPtrT> phi_bb71_10;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb71_11;
  TNode<IntPtrT> phi_bb71_12;
  TNode<IntPtrT> phi_bb71_15;
  TNode<Union<HeapObject, TaggedIndex>> tmp94;
  TNode<IntPtrT> tmp95;
  TNode<IntPtrT> tmp96;
  TNode<IntPtrT> tmp97;
  TNode<BoolT> tmp98;
  TNode<BoolT> tmp99;
  if (block71.is_used()) {
    ca_.Bind(&block71, &phi_bb71_8, &phi_bb71_9, &phi_bb71_10, &phi_bb71_11, &phi_bb71_12, &phi_bb71_15);
    std::tie(tmp94, tmp95) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp17}, TNode<IntPtrT>{phi_bb71_15}).Flatten();
    tmp96 = FromConstexpr_intptr_constexpr_int31_0(state_, kUInt16Size);
    tmp97 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb71_15}, TNode<IntPtrT>{tmp96});
    tmp98 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb71_12}, TNode<IntPtrT>{tmp89});
    tmp99 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp98});
    ca_.Branch(tmp99, &block76, std::vector<compiler::Node*>{phi_bb71_8, phi_bb71_9, phi_bb71_10, phi_bb71_11, phi_bb71_12}, &block77, std::vector<compiler::Node*>{phi_bb71_8, phi_bb71_9, phi_bb71_10, phi_bb71_11, phi_bb71_12});
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb77_8;
  TNode<IntPtrT> phi_bb77_9;
  TNode<IntPtrT> phi_bb77_10;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb77_11;
  TNode<IntPtrT> phi_bb77_12;
  if (block77.is_used()) {
    ca_.Bind(&block77, &phi_bb77_8, &phi_bb77_9, &phi_bb77_10, &phi_bb77_11, &phi_bb77_12);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/torque-internal.tq", 245});
      CodeStubAssembler(state_).FailAssert("Torque assert '!this.Empty()' failed", pos_stack);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb76_8;
  TNode<IntPtrT> phi_bb76_9;
  TNode<IntPtrT> phi_bb76_10;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb76_11;
  TNode<IntPtrT> phi_bb76_12;
  TNode<Union<HeapObject, TaggedIndex>> tmp100;
  TNode<IntPtrT> tmp101;
  TNode<IntPtrT> tmp102;
  TNode<IntPtrT> tmp103;
  TNode<Uint8T> tmp104;
  TNode<Uint16T> tmp105;
  TNode<Uint16T> tmp106;
  if (block76.is_used()) {
    ca_.Bind(&block76, &phi_bb76_8, &phi_bb76_9, &phi_bb76_10, &phi_bb76_11, &phi_bb76_12);
    std::tie(tmp100, tmp101) = NewReference_char8_0(state_, TNode<Union<HeapObject, TaggedIndex>>{phi_bb76_11}, TNode<IntPtrT>{phi_bb76_12}).Flatten();
    tmp102 = FromConstexpr_intptr_constexpr_int31_0(state_, kUInt8Size);
    tmp103 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb76_12}, TNode<IntPtrT>{tmp102});
    tmp104 = CodeStubAssembler(state_).LoadReference<Uint8T>(CodeStubAssembler::Reference{tmp100, tmp101});
    tmp105 = Convert_uint16_char8_0(state_, TNode<Uint8T>{tmp104});
    tmp106 = (TNode<Uint16T>{tmp105});
    CodeStubAssembler(state_).StoreReference<Uint16T>(CodeStubAssembler::Reference{tmp94, tmp95}, tmp106);
    ca_.Goto(&block66, phi_bb76_8, phi_bb76_9, phi_bb76_10, phi_bb76_11, tmp103, tmp97);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb65_8;
  TNode<IntPtrT> phi_bb65_9;
  TNode<IntPtrT> phi_bb65_10;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb65_11;
  TNode<IntPtrT> phi_bb65_12;
  TNode<IntPtrT> phi_bb65_15;
  if (block65.is_used()) {
    ca_.Bind(&block65, &phi_bb65_8, &phi_bb65_9, &phi_bb65_10, &phi_bb65_11, &phi_bb65_12, &phi_bb65_15);
    ca_.Goto(&block11);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb12_8;
  TNode<IntPtrT> phi_bb12_9;
  TNode<IntPtrT> phi_bb12_10;
  TNode<IntPtrT> tmp107;
  TNode<IntPtrT> tmp108;
  TNode<IntPtrT> tmp109;
  TNode<IntPtrT> tmp110;
  if (block12.is_used()) {
    ca_.Bind(&block12, &phi_bb12_8, &phi_bb12_9, &phi_bb12_10);
    tmp107 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{phi_bb12_10});
    tmp108 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb12_9}, TNode<IntPtrT>{tmp107});
    tmp109 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{tmp19});
    tmp110 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp18}, TNode<IntPtrT>{tmp109});
    ca_.Goto(&block83, phi_bb12_8, phi_bb12_9, phi_bb12_10, phi_bb12_8, phi_bb12_9, tmp18);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb83_8;
  TNode<IntPtrT> phi_bb83_9;
  TNode<IntPtrT> phi_bb83_10;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb83_11;
  TNode<IntPtrT> phi_bb83_12;
  TNode<IntPtrT> phi_bb83_15;
  TNode<BoolT> tmp111;
  if (block83.is_used()) {
    ca_.Bind(&block83, &phi_bb83_8, &phi_bb83_9, &phi_bb83_10, &phi_bb83_11, &phi_bb83_12, &phi_bb83_15);
    tmp111 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Branch(tmp111, &block81, std::vector<compiler::Node*>{phi_bb83_8, phi_bb83_9, phi_bb83_10, phi_bb83_11, phi_bb83_12, phi_bb83_15}, &block82, std::vector<compiler::Node*>{phi_bb83_8, phi_bb83_9, phi_bb83_10, phi_bb83_11, phi_bb83_12, phi_bb83_15});
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb81_8;
  TNode<IntPtrT> phi_bb81_9;
  TNode<IntPtrT> phi_bb81_10;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb81_11;
  TNode<IntPtrT> phi_bb81_12;
  TNode<IntPtrT> phi_bb81_15;
  TNode<BoolT> tmp112;
  if (block81.is_used()) {
    ca_.Bind(&block81, &phi_bb81_8, &phi_bb81_9, &phi_bb81_10, &phi_bb81_11, &phi_bb81_12, &phi_bb81_15);
    tmp112 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb81_15}, TNode<IntPtrT>{tmp110});
    ca_.Branch(tmp112, &block87, std::vector<compiler::Node*>{phi_bb81_8, phi_bb81_9, phi_bb81_10, phi_bb81_11, phi_bb81_12, phi_bb81_15}, &block88, std::vector<compiler::Node*>{phi_bb81_8, phi_bb81_9, phi_bb81_10, phi_bb81_11, phi_bb81_12, phi_bb81_15});
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb87_8;
  TNode<IntPtrT> phi_bb87_9;
  TNode<IntPtrT> phi_bb87_10;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb87_11;
  TNode<IntPtrT> phi_bb87_12;
  TNode<IntPtrT> phi_bb87_15;
  if (block87.is_used()) {
    ca_.Bind(&block87, &phi_bb87_8, &phi_bb87_9, &phi_bb87_10, &phi_bb87_11, &phi_bb87_12, &phi_bb87_15);
    ca_.Goto(&block82, phi_bb87_8, phi_bb87_9, phi_bb87_10, phi_bb87_11, phi_bb87_12, phi_bb87_15);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb88_8;
  TNode<IntPtrT> phi_bb88_9;
  TNode<IntPtrT> phi_bb88_10;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb88_11;
  TNode<IntPtrT> phi_bb88_12;
  TNode<IntPtrT> phi_bb88_15;
  TNode<Union<HeapObject, TaggedIndex>> tmp113;
  TNode<IntPtrT> tmp114;
  TNode<IntPtrT> tmp115;
  TNode<IntPtrT> tmp116;
  TNode<BoolT> tmp117;
  TNode<BoolT> tmp118;
  if (block88.is_used()) {
    ca_.Bind(&block88, &phi_bb88_8, &phi_bb88_9, &phi_bb88_10, &phi_bb88_11, &phi_bb88_12, &phi_bb88_15);
    std::tie(tmp113, tmp114) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp17}, TNode<IntPtrT>{phi_bb88_15}).Flatten();
    tmp115 = FromConstexpr_intptr_constexpr_int31_0(state_, kUInt16Size);
    tmp116 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb88_15}, TNode<IntPtrT>{tmp115});
    tmp117 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb88_12}, TNode<IntPtrT>{tmp108});
    tmp118 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp117});
    ca_.Branch(tmp118, &block93, std::vector<compiler::Node*>{phi_bb88_8, phi_bb88_9, phi_bb88_10, phi_bb88_11, phi_bb88_12}, &block94, std::vector<compiler::Node*>{phi_bb88_8, phi_bb88_9, phi_bb88_10, phi_bb88_11, phi_bb88_12});
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb94_8;
  TNode<IntPtrT> phi_bb94_9;
  TNode<IntPtrT> phi_bb94_10;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb94_11;
  TNode<IntPtrT> phi_bb94_12;
  if (block94.is_used()) {
    ca_.Bind(&block94, &phi_bb94_8, &phi_bb94_9, &phi_bb94_10, &phi_bb94_11, &phi_bb94_12);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/torque-internal.tq", 245});
      CodeStubAssembler(state_).FailAssert("Torque assert '!this.Empty()' failed", pos_stack);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb93_8;
  TNode<IntPtrT> phi_bb93_9;
  TNode<IntPtrT> phi_bb93_10;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb93_11;
  TNode<IntPtrT> phi_bb93_12;
  TNode<Union<HeapObject, TaggedIndex>> tmp119;
  TNode<IntPtrT> tmp120;
  TNode<IntPtrT> tmp121;
  TNode<IntPtrT> tmp122;
  TNode<Uint16T> tmp123;
  if (block93.is_used()) {
    ca_.Bind(&block93, &phi_bb93_8, &phi_bb93_9, &phi_bb93_10, &phi_bb93_11, &phi_bb93_12);
    std::tie(tmp119, tmp120) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{phi_bb93_11}, TNode<IntPtrT>{phi_bb93_12}).Flatten();
    tmp121 = FromConstexpr_intptr_constexpr_int31_0(state_, kUInt16Size);
    tmp122 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb93_12}, TNode<IntPtrT>{tmp121});
    tmp123 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp119, tmp120});
    CodeStubAssembler(state_).StoreReference<Uint16T>(CodeStubAssembler::Reference{tmp113, tmp114}, tmp123);
    ca_.Goto(&block83, phi_bb93_8, phi_bb93_9, phi_bb93_10, phi_bb93_11, tmp122, tmp116);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb82_8;
  TNode<IntPtrT> phi_bb82_9;
  TNode<IntPtrT> phi_bb82_10;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb82_11;
  TNode<IntPtrT> phi_bb82_12;
  TNode<IntPtrT> phi_bb82_15;
  if (block82.is_used()) {
    ca_.Bind(&block82, &phi_bb82_8, &phi_bb82_9, &phi_bb82_10, &phi_bb82_11, &phi_bb82_12, &phi_bb82_15);
    ca_.Goto(&block11);
  }

  TNode<IntPtrT> tmp124;
  TNode<Int32T> tmp125;
  TNode<Uint32T> tmp126;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp124 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp125 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{parameter0, tmp124});
    tmp126 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp125});
    CodeStubAssembler(state_).Return(tmp126);
  }

  TNode<NativeContext> tmp127;
  TNode<Smi> tmp128;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp127 = WasmBuiltinsAssembler(state_).LoadContextFromWasmOrJsFrame();
    tmp128 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapArrayOutOfBounds));
    CodeStubAssembler(state_).CallRuntime(Runtime::kThrowWasmError, tmp127, tmp128);
    CodeStubAssembler(state_).Unreachable();
  }
}

TF_BUILTIN(ThrowToLowerCaseCalledOnNull, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  TNode<String> tmp1;
  TNode<Smi> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
    tmp1 = CodeStubAssembler(state_).StringConstant("String.prototype.toLowerCase");
    tmp2 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kCalledOnNullOrUndefined));
    CodeStubAssembler(state_).CallRuntime(Runtime::kWasmThrowTypeError, tmp0, tmp2, tmp1);
    CodeStubAssembler(state_).Unreachable();
  }
}

TF_BUILTIN(ThrowIndexOfCalledOnNull, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  TNode<String> tmp1;
  TNode<Smi> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
    tmp1 = CodeStubAssembler(state_).StringConstant("String.prototype.indexOf");
    tmp2 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kCalledOnNullOrUndefined));
    CodeStubAssembler(state_).CallRuntime(Runtime::kWasmThrowTypeError, tmp0, tmp2, tmp1);
    CodeStubAssembler(state_).Unreachable();
  }
}

TF_BUILTIN(ThrowDataViewTypeError, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<JSAny> parameter0 = UncheckedParameter<JSAny>(Descriptor::kValue);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  TNode<Smi> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
    tmp1 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kIncompatibleMethodReceiver));
    CodeStubAssembler(state_).CallRuntime(Runtime::kWasmThrowDataViewTypeError, tmp0, tmp1, parameter0);
    CodeStubAssembler(state_).Unreachable();
  }
}

TF_BUILTIN(ThrowDataViewDetachedError, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  TNode<Smi> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
    tmp1 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kTypedArrayValidateErrorOperation));
    CodeStubAssembler(state_).CallRuntime(Runtime::kWasmThrowDataViewDetachedError, tmp0, tmp1);
    CodeStubAssembler(state_).Unreachable();
  }
}

TF_BUILTIN(ThrowDataViewOutOfBounds, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  TNode<Smi> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
    tmp1 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kInvalidDataViewAccessorOffset));
    CodeStubAssembler(state_).CallRuntime(Runtime::kWasmThrowRangeError, tmp0, tmp1);
    CodeStubAssembler(state_).Unreachable();
  }
}

TF_BUILTIN(WasmStringConcat, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<String> parameter0 = UncheckedParameter<String>(Descriptor::kA);
  USE(parameter0);
  TNode<String> parameter1 = UncheckedParameter<String>(Descriptor::kB);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kWasmStringAdd_NoMapCheck, tmp0, parameter0, parameter1);
  }
}

TF_BUILTIN(WasmStringAdd_NoMapCheck_Shared, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<String> parameter0 = UncheckedParameter<String>(Descriptor::kA);
  USE(parameter0);
  TNode<String> parameter1 = UncheckedParameter<String>(Descriptor::kB);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmStringAdd_NoMapCheck_Shared, tmp0, parameter0, parameter1);
  }
}

TF_BUILTIN(WasmStringEqual, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<String> parameter0 = UncheckedParameter<String>(Descriptor::kA);
  USE(parameter0);
  TNode<String> parameter1 = UncheckedParameter<String>(Descriptor::kB);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<BoolT> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{parameter0}, TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{parameter1});
    ca_.Branch(tmp0, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<Int32T> tmp1;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp1 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    CodeStubAssembler(state_).Return(tmp1);
  }

  TNode<IntPtrT> tmp2;
  TNode<Int32T> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<Int32T> tmp5;
  TNode<BoolT> tmp6;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp2 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp3 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{parameter0, tmp2});
    tmp4 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp5 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{parameter1, tmp4});
    tmp6 = CodeStubAssembler(state_).Word32NotEqual(TNode<Int32T>{tmp3}, TNode<Int32T>{tmp5});
    ca_.Branch(tmp6, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  TNode<Int32T> tmp7;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp7 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    CodeStubAssembler(state_).Return(tmp7);
  }

  TNode<Smi> tmp8;
  TNode<IntPtrT> tmp9;
  TNode<Boolean> tmp10;
  TNode<True> tmp11;
  TNode<BoolT> tmp12;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp8 = kNoContext_0(state_);
    tmp9 = CodeStubAssembler(state_).LoadStringLengthAsWord(TNode<String>{parameter0});
    tmp10 = ca_.CallBuiltin<Boolean>(Builtin::kStringEqual, tmp8, parameter0, parameter1, tmp9);
    tmp11 = True_0(state_);
    tmp12 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp10}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp11});
    ca_.Branch(tmp12, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  TNode<Int32T> tmp13;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp13 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    CodeStubAssembler(state_).Return(tmp13);
  }

  TNode<Int32T> tmp14;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp14 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    CodeStubAssembler(state_).Return(tmp14);
  }
}

TF_BUILTIN(WasmStringIsUSVSequence, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<String> parameter0 = UncheckedParameter<String>(Descriptor::kStr);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<Map> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    tmp1 = CodeStubAssembler(state_).LoadReference<Map>(CodeStubAssembler::Reference{parameter0, tmp0});
    tmp2 = CodeStubAssembler(state_).IsOneByteStringMap(TNode<Map>{tmp1});
    ca_.Branch(tmp2, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<Int32T> tmp3;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp3 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    CodeStubAssembler(state_).Return(tmp3);
  }

  TNode<NativeContext> tmp4;
  TNode<Number> tmp5;
  TNode<Int32T> tmp6;
  TNode<Int32T> tmp7;
  TNode<BoolT> tmp8;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp4 = LoadContextFromFrame_0(state_);
    tmp5 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kWasmStringMeasureUtf8, tmp4, parameter0)); 
    tmp6 = NumberToInt32_0(state_, TNode<Number>{tmp5});
    tmp7 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp8 = CodeStubAssembler(state_).Int32LessThan(TNode<Int32T>{tmp6}, TNode<Int32T>{tmp7});
    ca_.Branch(tmp8, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  TNode<Int32T> tmp9;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp9 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    CodeStubAssembler(state_).Return(tmp9);
  }

  TNode<Int32T> tmp10;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp10 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    CodeStubAssembler(state_).Return(tmp10);
  }
}

TF_BUILTIN(WasmStringAsWtf8, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<String> parameter0 = UncheckedParameter<String>(Descriptor::kStr);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmStringAsWtf8, tmp0, parameter0);
  }
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=1330&c=1
TNode<BoolT> IsWtf8CodepointStart_0(compiler::CodeAssemblerState* state_, TNode<ByteArray> p_view, TNode<Uint32T> p_pos) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Union<HeapObject, TaggedIndex>> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<UintPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<UintPtrT> tmp5;
  TNode<UintPtrT> tmp6;
  TNode<BoolT> tmp7;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    std::tie(tmp0, tmp1, tmp2) = FieldSliceByteArrayValues_0(state_, TNode<ByteArray>{p_view}).Flatten();
    tmp3 = Convert_uintptr_uint32_0(state_, TNode<Uint32T>{p_pos});
    tmp4 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp3});
    tmp5 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp4});
    tmp6 = Convert_uintptr_intptr_0(state_, TNode<IntPtrT>{tmp2});
    tmp7 = CodeStubAssembler(state_).UintPtrLessThan(TNode<UintPtrT>{tmp5}, TNode<UintPtrT>{tmp6});
    ca_.Branch(tmp7, &block6, std::vector<compiler::Node*>{}, &block7, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp8;
  TNode<IntPtrT> tmp9;
  TNode<Union<HeapObject, TaggedIndex>> tmp10;
  TNode<IntPtrT> tmp11;
  TNode<Uint8T> tmp12;
  TNode<Uint32T> tmp13;
  TNode<Uint32T> tmp14;
  TNode<Uint32T> tmp15;
  TNode<BoolT> tmp16;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp8 = TimesSizeOf_uint8_0(state_, TNode<IntPtrT>{tmp4});
    tmp9 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp1}, TNode<IntPtrT>{tmp8});
    std::tie(tmp10, tmp11) = NewReference_uint8_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp0}, TNode<IntPtrT>{tmp9}).Flatten();
    tmp12 = CodeStubAssembler(state_).LoadReference<Uint8T>(CodeStubAssembler::Reference{tmp10, tmp11});
    tmp13 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0xc0ull));
    tmp14 = CodeStubAssembler(state_).Word32And(TNode<Uint32T>{tmp12}, TNode<Uint32T>{tmp13});
    tmp15 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x80ull));
    tmp16 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp14}, TNode<Uint32T>{tmp15});
    ca_.Goto(&block10);
  }

  if (block7.is_used()) {
    ca_.Bind(&block7);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/torque-internal.tq:117:62");
    CodeStubAssembler(state_).Unreachable();
  }

    ca_.Bind(&block10);
  return TNode<BoolT>{tmp16};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=1335&c=1
TNode<Uint32T> AlignWtf8PositionForward_0(compiler::CodeAssemblerState* state_, TNode<ByteArray> p_view, TNode<Uint32T> p_pos) {
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
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<Uint32T> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 4);
    tmp1 = CodeStubAssembler(state_).LoadReference<Uint32T>(CodeStubAssembler::Reference{p_view, tmp0});
    tmp2 = CodeStubAssembler(state_).Uint32GreaterThanOrEqual(TNode<Uint32T>{p_pos}, TNode<Uint32T>{tmp1});
    ca_.Branch(tmp2, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    ca_.Goto(&block1, tmp1);
  }

  TNode<BoolT> tmp3;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp3 = IsWtf8CodepointStart_0(state_, TNode<ByteArray>{p_view}, TNode<Uint32T>{p_pos});
    ca_.Branch(tmp3, &block4, std::vector<compiler::Node*>{}, &block5, std::vector<compiler::Node*>{});
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    ca_.Goto(&block1, p_pos);
  }

  TNode<Uint32T> tmp4;
  TNode<Uint32T> tmp5;
  TNode<BoolT> tmp6;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp4 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp5 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{p_pos}, TNode<Uint32T>{tmp4});
    tmp6 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp5}, TNode<Uint32T>{tmp1});
    ca_.Branch(tmp6, &block6, std::vector<compiler::Node*>{}, &block7, std::vector<compiler::Node*>{});
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    ca_.Goto(&block1, tmp1);
  }

  TNode<Uint32T> tmp7;
  TNode<Uint32T> tmp8;
  TNode<BoolT> tmp9;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp7 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp8 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{p_pos}, TNode<Uint32T>{tmp7});
    tmp9 = IsWtf8CodepointStart_0(state_, TNode<ByteArray>{p_view}, TNode<Uint32T>{tmp8});
    ca_.Branch(tmp9, &block8, std::vector<compiler::Node*>{}, &block9, std::vector<compiler::Node*>{});
  }

  TNode<Uint32T> tmp10;
  TNode<Uint32T> tmp11;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp10 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp11 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{p_pos}, TNode<Uint32T>{tmp10});
    ca_.Goto(&block1, tmp11);
  }

  TNode<Uint32T> tmp12;
  TNode<Uint32T> tmp13;
  TNode<BoolT> tmp14;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp12 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    tmp13 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{p_pos}, TNode<Uint32T>{tmp12});
    tmp14 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp13}, TNode<Uint32T>{tmp1});
    ca_.Branch(tmp14, &block10, std::vector<compiler::Node*>{}, &block11, std::vector<compiler::Node*>{});
  }

  if (block10.is_used()) {
    ca_.Bind(&block10);
    ca_.Goto(&block1, tmp1);
  }

  TNode<Uint32T> tmp15;
  TNode<Uint32T> tmp16;
  TNode<BoolT> tmp17;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp15 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    tmp16 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{p_pos}, TNode<Uint32T>{tmp15});
    tmp17 = IsWtf8CodepointStart_0(state_, TNode<ByteArray>{p_view}, TNode<Uint32T>{tmp16});
    ca_.Branch(tmp17, &block12, std::vector<compiler::Node*>{}, &block13, std::vector<compiler::Node*>{});
  }

  TNode<Uint32T> tmp18;
  TNode<Uint32T> tmp19;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    tmp18 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    tmp19 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{p_pos}, TNode<Uint32T>{tmp18});
    ca_.Goto(&block1, tmp19);
  }

  TNode<Uint32T> tmp20;
  TNode<Uint32T> tmp21;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    tmp20 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x3ull));
    tmp21 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{p_pos}, TNode<Uint32T>{tmp20});
    ca_.Goto(&block1, tmp21);
  }

  TNode<Uint32T> phi_bb1_2;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_2);
    ca_.Goto(&block14, phi_bb1_2);
  }

  TNode<Uint32T> phi_bb14_2;
    ca_.Bind(&block14, &phi_bb14_2);
  return TNode<Uint32T>{phi_bb14_2};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=1352&c=1
TNode<Uint32T> AlignWtf8PositionBackward_0(compiler::CodeAssemblerState* state_, TNode<ByteArray> p_view, TNode<Uint32T> p_pos) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<BoolT> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = IsWtf8CodepointStart_0(state_, TNode<ByteArray>{p_view}, TNode<Uint32T>{p_pos});
    ca_.Branch(tmp0, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    ca_.Goto(&block1, p_pos);
  }

  TNode<Uint32T> tmp1;
  TNode<Uint32T> tmp2;
  TNode<BoolT> tmp3;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp1 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp2 = CodeStubAssembler(state_).Uint32Sub(TNode<Uint32T>{p_pos}, TNode<Uint32T>{tmp1});
    tmp3 = IsWtf8CodepointStart_0(state_, TNode<ByteArray>{p_view}, TNode<Uint32T>{tmp2});
    ca_.Branch(tmp3, &block4, std::vector<compiler::Node*>{}, &block5, std::vector<compiler::Node*>{});
  }

  TNode<Uint32T> tmp4;
  TNode<Uint32T> tmp5;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp4 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp5 = CodeStubAssembler(state_).Uint32Sub(TNode<Uint32T>{p_pos}, TNode<Uint32T>{tmp4});
    ca_.Goto(&block1, tmp5);
  }

  TNode<Uint32T> tmp6;
  TNode<Uint32T> tmp7;
  TNode<BoolT> tmp8;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp6 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    tmp7 = CodeStubAssembler(state_).Uint32Sub(TNode<Uint32T>{p_pos}, TNode<Uint32T>{tmp6});
    tmp8 = IsWtf8CodepointStart_0(state_, TNode<ByteArray>{p_view}, TNode<Uint32T>{tmp7});
    ca_.Branch(tmp8, &block6, std::vector<compiler::Node*>{}, &block7, std::vector<compiler::Node*>{});
  }

  TNode<Uint32T> tmp9;
  TNode<Uint32T> tmp10;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp9 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    tmp10 = CodeStubAssembler(state_).Uint32Sub(TNode<Uint32T>{p_pos}, TNode<Uint32T>{tmp9});
    ca_.Goto(&block1, tmp10);
  }

  TNode<Uint32T> tmp11;
  TNode<Uint32T> tmp12;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp11 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x3ull));
    tmp12 = CodeStubAssembler(state_).Uint32Sub(TNode<Uint32T>{p_pos}, TNode<Uint32T>{tmp11});
    ca_.Goto(&block1, tmp12);
  }

  TNode<Uint32T> phi_bb1_2;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_2);
    ca_.Goto(&block8, phi_bb1_2);
  }

  TNode<Uint32T> phi_bb8_2;
    ca_.Bind(&block8, &phi_bb8_2);
  return TNode<Uint32T>{phi_bb8_2};
}

TF_BUILTIN(WasmStringViewWtf8Advance, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<ByteArray> parameter0 = UncheckedParameter<ByteArray>(Descriptor::kView);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kPos);
  USE(parameter1);
  TNode<Uint32T> parameter2 = UncheckedParameter<Uint32T>(Descriptor::kBytes);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Uint32T> tmp0;
  TNode<Uint32T> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = AlignWtf8PositionForward_0(state_, TNode<ByteArray>{parameter0}, TNode<Uint32T>{parameter1});
    tmp1 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp2 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{parameter2}, TNode<Uint32T>{tmp1});
    ca_.Branch(tmp2, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    CodeStubAssembler(state_).Return(tmp0);
  }

  TNode<IntPtrT> tmp3;
  TNode<Uint32T> tmp4;
  TNode<Uint32T> tmp5;
  TNode<BoolT> tmp6;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp3 = FromConstexpr_intptr_constexpr_int31_0(state_, 4);
    tmp4 = CodeStubAssembler(state_).LoadReference<Uint32T>(CodeStubAssembler::Reference{parameter0, tmp3});
    tmp5 = CodeStubAssembler(state_).Uint32Sub(TNode<Uint32T>{tmp4}, TNode<Uint32T>{tmp0});
    tmp6 = CodeStubAssembler(state_).Uint32GreaterThanOrEqual(TNode<Uint32T>{parameter2}, TNode<Uint32T>{tmp5});
    ca_.Branch(tmp6, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    CodeStubAssembler(state_).Return(tmp4);
  }

  TNode<Uint32T> tmp7;
  TNode<Uint32T> tmp8;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp7 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{tmp0}, TNode<Uint32T>{parameter2});
    tmp8 = AlignWtf8PositionBackward_0(state_, TNode<ByteArray>{parameter0}, TNode<Uint32T>{tmp7});
    CodeStubAssembler(state_).Return(tmp8);
  }
}

TF_BUILTIN(WasmStringViewWtf8Encode, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<UintPtrT> parameter0 = UncheckedParameter<UintPtrT>(Descriptor::kAddr);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kPos);
  USE(parameter1);
  TNode<Uint32T> parameter2 = UncheckedParameter<Uint32T>(Descriptor::kBytes);
  USE(parameter2);
  TNode<ByteArray> parameter3 = UncheckedParameter<ByteArray>(Descriptor::kView);
  USE(parameter3);
  TNode<Smi> parameter4 = UncheckedParameter<Smi>(Descriptor::kMemory);
  USE(parameter4);
  TNode<Smi> parameter5 = UncheckedParameter<Smi>(Descriptor::kUtf8Variant);
  USE(parameter5);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Uint32T> tmp0;
  TNode<Uint32T> tmp1;
  TNode<Uint32T> tmp2;
  TNode<WasmTrustedInstanceData> tmp3;
  TNode<NativeContext> tmp4;
  TNode<Number> tmp5;
  TNode<Number> tmp6;
  TNode<Number> tmp7;
  TNode<JSAny> tmp8;
  TNode<Uint32T> tmp9;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = ca_.CallBuiltin<Uint32T>(Builtin::kWasmStringViewWtf8Advance, TNode<Object>(), parameter3, parameter1, tmp0);
    tmp2 = ca_.CallBuiltin<Uint32T>(Builtin::kWasmStringViewWtf8Advance, TNode<Object>(), parameter3, tmp1, parameter2);
    tmp3 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp4 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp3});
    tmp5 = UintPtrToNumberRounding_0(state_, TNode<UintPtrT>{parameter0});
    tmp6 = ca_.CallBuiltin<Number>(Builtin::kWasmUint32ToNumber, TNode<Object>(), tmp1);
    tmp7 = ca_.CallBuiltin<Number>(Builtin::kWasmUint32ToNumber, TNode<Object>(), tmp2);
    tmp8 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kWasmStringViewWtf8Encode, tmp4, tmp3, parameter5, parameter3, tmp5, tmp6, tmp7, parameter4)); 
    tmp9 = CodeStubAssembler(state_).Uint32Sub(TNode<Uint32T>{tmp2}, TNode<Uint32T>{tmp1});
    CodeStubAssembler(state_).Return(tmp2, tmp9);
  }
}

TF_BUILTIN(WasmStringViewWtf8Slice, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<ByteArray> parameter0 = UncheckedParameter<ByteArray>(Descriptor::kView);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kStart);
  USE(parameter1);
  TNode<Uint32T> parameter2 = UncheckedParameter<Uint32T>(Descriptor::kEnd);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Uint32T> tmp0;
  TNode<Uint32T> tmp1;
  TNode<Uint32T> tmp2;
  TNode<Uint32T> tmp3;
  TNode<BoolT> tmp4;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = ca_.CallBuiltin<Uint32T>(Builtin::kWasmStringViewWtf8Advance, TNode<Object>(), parameter0, parameter1, tmp0);
    tmp2 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp3 = ca_.CallBuiltin<Uint32T>(Builtin::kWasmStringViewWtf8Advance, TNode<Object>(), parameter0, parameter2, tmp2);
    tmp4 = CodeStubAssembler(state_).Uint32LessThanOrEqual(TNode<Uint32T>{tmp3}, TNode<Uint32T>{tmp1});
    ca_.Branch(tmp4, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<String> tmp5;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp5 = kEmptyString_0(state_);
    CodeStubAssembler(state_).Return(tmp5);
  }

  TNode<NativeContext> tmp6;
  TNode<Number> tmp7;
  TNode<Number> tmp8;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp6 = LoadContextFromFrame_0(state_);
    tmp7 = ca_.CallBuiltin<Number>(Builtin::kWasmUint32ToNumber, TNode<Object>(), tmp1);
    tmp8 = ca_.CallBuiltin<Number>(Builtin::kWasmUint32ToNumber, TNode<Object>(), tmp3);
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmStringViewWtf8Slice, tmp6, parameter0, tmp7, tmp8);
  }
}

TF_BUILTIN(WasmStringViewWtf16GetCodeUnit, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<String> parameter0 = UncheckedParameter<String>(Descriptor::kString);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kOffset);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<Int32T> tmp1;
  TNode<Uint32T> tmp2;
  TNode<BoolT> tmp3;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp1 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{parameter0, tmp0});
    tmp2 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp1});
    tmp3 = CodeStubAssembler(state_).Uint32LessThanOrEqual(TNode<Uint32T>{tmp2}, TNode<Uint32T>{parameter1});
    ca_.Branch(tmp3, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  TNode<NativeContext> tmp4;
  TNode<Smi> tmp5;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp4 = LoadContextFromFrame_0(state_);
    tmp5 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapStringOffsetOutOfBounds));
    CodeStubAssembler(state_).CallRuntime(Runtime::kThrowWasmError, tmp4, tmp5);
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<UintPtrT> tmp6;
  TNode<Uint16T> tmp7;
  TNode<Uint32T> tmp8;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp6 = Convert_uintptr_uint32_0(state_, TNode<Uint32T>{parameter1});
    tmp7 = CodeStubAssembler(state_).StringCharCodeAt(TNode<String>{parameter0}, TNode<UintPtrT>{tmp6});
    tmp8 = Convert_uint32_char16_0(state_, TNode<Uint16T>{tmp7});
    CodeStubAssembler(state_).Return(tmp8);
  }
}

TF_BUILTIN(WasmStringViewWtf16Encode, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<UintPtrT> parameter0 = UncheckedParameter<UintPtrT>(Descriptor::kOffset);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kStart);
  USE(parameter1);
  TNode<Uint32T> parameter2 = UncheckedParameter<Uint32T>(Descriptor::kLength);
  USE(parameter2);
  TNode<String> parameter3 = UncheckedParameter<String>(Descriptor::kString);
  USE(parameter3);
  TNode<Smi> parameter4 = UncheckedParameter<Smi>(Descriptor::kMemory);
  USE(parameter4);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<Int32T> tmp2;
  TNode<Uint32T> tmp3;
  TNode<BoolT> tmp4;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp2 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{parameter3, tmp1});
    tmp3 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp2});
    tmp4 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{parameter1}, TNode<Uint32T>{tmp3});
    ca_.Branch(tmp4, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    ca_.Goto(&block3, parameter1);
  }

  TNode<IntPtrT> tmp5;
  TNode<Int32T> tmp6;
  TNode<Uint32T> tmp7;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp5 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp6 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{parameter3, tmp5});
    tmp7 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp6});
    ca_.Goto(&block3, tmp7);
  }

  TNode<Uint32T> phi_bb3_6;
  TNode<IntPtrT> tmp8;
  TNode<Int32T> tmp9;
  TNode<Uint32T> tmp10;
  TNode<Uint32T> tmp11;
  TNode<BoolT> tmp12;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_6);
    tmp8 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp9 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{parameter3, tmp8});
    tmp10 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp9});
    tmp11 = CodeStubAssembler(state_).Uint32Sub(TNode<Uint32T>{tmp10}, TNode<Uint32T>{phi_bb3_6});
    tmp12 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{parameter2}, TNode<Uint32T>{tmp11});
    ca_.Branch(tmp12, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    ca_.Goto(&block7, parameter2);
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    ca_.Goto(&block7, tmp11);
  }

  TNode<Uint32T> phi_bb7_8;
  TNode<NativeContext> tmp13;
  TNode<Number> tmp14;
  TNode<Smi> tmp15;
  TNode<Smi> tmp16;
  TNode<JSAny> tmp17;
  if (block7.is_used()) {
    ca_.Bind(&block7, &phi_bb7_8);
    tmp13 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    tmp14 = UintPtrToNumberRounding_0(state_, TNode<UintPtrT>{parameter0});
    tmp15 = CodeStubAssembler(state_).SmiFromUint32(TNode<Uint32T>{phi_bb3_6});
    tmp16 = CodeStubAssembler(state_).SmiFromUint32(TNode<Uint32T>{phi_bb7_8});
    tmp17 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kWasmStringEncodeWtf16, tmp13, tmp0, parameter4, parameter3, tmp14, tmp15, tmp16)); 
    CodeStubAssembler(state_).Return(phi_bb7_8);
  }
}

TF_BUILTIN(WasmStringViewWtf16Slice, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<String> parameter0 = UncheckedParameter<String>(Descriptor::kString);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kStart);
  USE(parameter1);
  TNode<Uint32T> parameter2 = UncheckedParameter<Uint32T>(Descriptor::kEnd);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, String> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, String> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block36(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block35(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block40(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block39(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block44(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block43(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block48(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block47(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block52(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block51(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block56(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block55(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block60(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block59(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block64(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block63(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block68(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block67(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block45(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block41(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block72(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block71(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block77(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block76(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<Int32T> tmp1;
  TNode<Uint32T> tmp2;
  TNode<BoolT> tmp3;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp1 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{parameter0, tmp0});
    tmp2 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp1});
    tmp3 = CodeStubAssembler(state_).Uint32GreaterThanOrEqual(TNode<Uint32T>{parameter1}, TNode<Uint32T>{tmp2});
    ca_.Branch(tmp3, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<String> tmp4;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp4 = kEmptyString_0(state_);
    CodeStubAssembler(state_).Return(tmp4);
  }

  TNode<BoolT> tmp5;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp5 = CodeStubAssembler(state_).Uint32LessThanOrEqual(TNode<Uint32T>{parameter2}, TNode<Uint32T>{parameter1});
    ca_.Branch(tmp5, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  TNode<String> tmp6;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp6 = kEmptyString_0(state_);
    CodeStubAssembler(state_).Return(tmp6);
  }

  TNode<BoolT> tmp7;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp7 = CodeStubAssembler(state_).Uint32LessThanOrEqual(TNode<Uint32T>{parameter2}, TNode<Uint32T>{tmp2});
    ca_.Branch(tmp7, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    ca_.Goto(&block7, parameter2);
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    ca_.Goto(&block7, tmp2);
  }

  TNode<Uint32T> phi_bb7_4;
  TNode<Uint32T> tmp8;
  TNode<Uint32T> tmp9;
  TNode<BoolT> tmp10;
  if (block7.is_used()) {
    ca_.Bind(&block7, &phi_bb7_4);
    tmp8 = CodeStubAssembler(state_).Uint32Sub(TNode<Uint32T>{phi_bb7_4}, TNode<Uint32T>{parameter1});
    tmp9 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp10 = CodeStubAssembler(state_).Uint32GreaterThan(TNode<Uint32T>{tmp8}, TNode<Uint32T>{tmp9});
    ca_.Branch(tmp10, &block11, std::vector<compiler::Node*>{}, &block12, std::vector<compiler::Node*>{});
  }

  TNode<Uint32T> tmp11;
  TNode<Uint32T> tmp12;
  TNode<BoolT> tmp13;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp11 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    tmp12 = CodeStubAssembler(state_).Uint32Div(TNode<Uint32T>{tmp2}, TNode<Uint32T>{tmp11});
    tmp13 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{tmp8}, TNode<Uint32T>{tmp12});
    ca_.Goto(&block13, tmp13);
  }

  TNode<BoolT> tmp14;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    tmp14 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block13, tmp14);
  }

  TNode<BoolT> phi_bb13_7;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_7);
    ca_.Branch(phi_bb13_7, &block9, std::vector<compiler::Node*>{}, &block10, std::vector<compiler::Node*>{});
  }

  TNode<Uint32T> tmp15;
  TNode<BoolT> tmp16;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp15 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x20ull));
    tmp16 = CodeStubAssembler(state_).Uint32GreaterThan(TNode<Uint32T>{tmp8}, TNode<Uint32T>{tmp15});
    ca_.Branch(tmp16, &block20, std::vector<compiler::Node*>{}, &block21, std::vector<compiler::Node*>{});
  }

  TNode<NativeContext> tmp17;
  TNode<Smi> tmp18;
  TNode<Smi> tmp19;
  if (block20.is_used()) {
    ca_.Bind(&block20);
    tmp17 = WasmBuiltinsAssembler(state_).LoadContextFromWasmOrJsFrame();
    tmp18 = CodeStubAssembler(state_).SmiFromUint32(TNode<Uint32T>{parameter1});
    tmp19 = CodeStubAssembler(state_).SmiFromUint32(TNode<Uint32T>{tmp8});
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmSubstring, tmp17, parameter0, tmp18, tmp19);
  }

  TNode<IntPtrT> tmp20;
  TNode<IntPtrT> tmp21;
  TNode<Int32T> tmp22;
  TNode<IntPtrT> tmp23;
  if (block21.is_used()) {
    ca_.Bind(&block21);
    tmp20 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp21 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp22 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{parameter0, tmp21});
    tmp23 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp22});
    ca_.Goto(&block24, parameter0, tmp20);
  }

  TNode<String> phi_bb24_8;
  TNode<IntPtrT> phi_bb24_9;
  TNode<BoolT> tmp24;
  if (block24.is_used()) {
    ca_.Bind(&block24, &phi_bb24_8, &phi_bb24_9);
    tmp24 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Branch(tmp24, &block22, std::vector<compiler::Node*>{phi_bb24_8, phi_bb24_9}, &block23, std::vector<compiler::Node*>{phi_bb24_8, phi_bb24_9});
  }

  TNode<String> phi_bb22_8;
  TNode<IntPtrT> phi_bb22_9;
  TNode<SeqOneByteString> tmp25;
  if (block22.is_used()) {
    ca_.Bind(&block22, &phi_bb22_8, &phi_bb22_9);
    compiler::CodeAssemblerLabel label26(&ca_);
    tmp25 = Cast_SeqOneByteString_1(state_, TNode<String>{phi_bb22_8}, &label26);
    ca_.Goto(&block27, phi_bb22_8, phi_bb22_9, phi_bb22_8, phi_bb22_8);
    if (label26.is_used()) {
      ca_.Bind(&label26);
      ca_.Goto(&block28, phi_bb22_8, phi_bb22_9, phi_bb22_8, phi_bb22_8);
    }
  }

  TNode<String> phi_bb28_8;
  TNode<IntPtrT> phi_bb28_9;
  TNode<String> phi_bb28_11;
  TNode<String> phi_bb28_12;
  TNode<SeqTwoByteString> tmp27;
  if (block28.is_used()) {
    ca_.Bind(&block28, &phi_bb28_8, &phi_bb28_9, &phi_bb28_11, &phi_bb28_12);
    compiler::CodeAssemblerLabel label28(&ca_);
    tmp27 = Cast_SeqTwoByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb28_11)}, &label28);
    ca_.Goto(&block35, phi_bb28_8, phi_bb28_9, phi_bb28_11);
    if (label28.is_used()) {
      ca_.Bind(&label28);
      ca_.Goto(&block36, phi_bb28_8, phi_bb28_9, phi_bb28_11);
    }
  }

  TNode<String> phi_bb27_8;
  TNode<IntPtrT> phi_bb27_9;
  TNode<String> phi_bb27_11;
  TNode<String> phi_bb27_12;
  TNode<Union<HeapObject, TaggedIndex>> tmp29;
  TNode<IntPtrT> tmp30;
  TNode<IntPtrT> tmp31;
  TNode<Union<HeapObject, TaggedIndex>> tmp32;
  TNode<IntPtrT> tmp33;
  TNode<IntPtrT> tmp34;
  if (block27.is_used()) {
    ca_.Bind(&block27, &phi_bb27_8, &phi_bb27_9, &phi_bb27_11, &phi_bb27_12);
    std::tie(tmp29, tmp30, tmp31) = FieldSliceSeqOneByteStringChars_0(state_, TNode<SeqOneByteString>{tmp25}).Flatten();
    compiler::CodeAssemblerLabel label35(&ca_);
    std::tie(tmp32, tmp33, tmp34) = Subslice_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp29}, TNode<IntPtrT>{tmp30}, TNode<IntPtrT>{tmp31}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb27_9}, TNode<IntPtrT>{tmp23}, &label35).Flatten();
    ca_.Goto(&block31, phi_bb27_8, phi_bb27_9, phi_bb27_11, phi_bb27_9);
    if (label35.is_used()) {
      ca_.Bind(&label35);
      ca_.Goto(&block32, phi_bb27_8, phi_bb27_9, phi_bb27_11, phi_bb27_9);
    }
  }

  TNode<String> phi_bb32_8;
  TNode<IntPtrT> phi_bb32_9;
  TNode<String> phi_bb32_11;
  TNode<IntPtrT> phi_bb32_16;
  if (block32.is_used()) {
    ca_.Bind(&block32, &phi_bb32_8, &phi_bb32_9, &phi_bb32_11, &phi_bb32_16);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:292:67");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> phi_bb31_8;
  TNode<IntPtrT> phi_bb31_9;
  TNode<String> phi_bb31_11;
  TNode<IntPtrT> phi_bb31_16;
  if (block31.is_used()) {
    ca_.Bind(&block31, &phi_bb31_8, &phi_bb31_9, &phi_bb31_11, &phi_bb31_16);
    ca_.Goto(&block19, tmp32, tmp33, tmp34);
  }

  TNode<String> phi_bb36_8;
  TNode<IntPtrT> phi_bb36_9;
  TNode<String> phi_bb36_11;
  TNode<ThinString> tmp36;
  if (block36.is_used()) {
    ca_.Bind(&block36, &phi_bb36_8, &phi_bb36_9, &phi_bb36_11);
    compiler::CodeAssemblerLabel label37(&ca_);
    tmp36 = Cast_ThinString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb36_11)}, &label37);
    ca_.Goto(&block43, phi_bb36_8, phi_bb36_9, phi_bb36_11);
    if (label37.is_used()) {
      ca_.Bind(&label37);
      ca_.Goto(&block44, phi_bb36_8, phi_bb36_9, phi_bb36_11);
    }
  }

  TNode<String> phi_bb35_8;
  TNode<IntPtrT> phi_bb35_9;
  TNode<String> phi_bb35_11;
  TNode<Union<HeapObject, TaggedIndex>> tmp38;
  TNode<IntPtrT> tmp39;
  TNode<IntPtrT> tmp40;
  TNode<Union<HeapObject, TaggedIndex>> tmp41;
  TNode<IntPtrT> tmp42;
  TNode<IntPtrT> tmp43;
  if (block35.is_used()) {
    ca_.Bind(&block35, &phi_bb35_8, &phi_bb35_9, &phi_bb35_11);
    std::tie(tmp38, tmp39, tmp40) = FieldSliceSeqTwoByteStringChars_0(state_, TNode<SeqTwoByteString>{tmp27}).Flatten();
    compiler::CodeAssemblerLabel label44(&ca_);
    std::tie(tmp41, tmp42, tmp43) = Subslice_char16_0(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{tmp38}, TNode<IntPtrT>{tmp39}, TNode<IntPtrT>{tmp40}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb35_9}, TNode<IntPtrT>{tmp23}, &label44).Flatten();
    ca_.Goto(&block39, phi_bb35_8, phi_bb35_9, phi_bb35_11, phi_bb35_9);
    if (label44.is_used()) {
      ca_.Bind(&label44);
      ca_.Goto(&block40, phi_bb35_8, phi_bb35_9, phi_bb35_11, phi_bb35_9);
    }
  }

  TNode<String> phi_bb40_8;
  TNode<IntPtrT> phi_bb40_9;
  TNode<String> phi_bb40_11;
  TNode<IntPtrT> phi_bb40_16;
  if (block40.is_used()) {
    ca_.Bind(&block40, &phi_bb40_8, &phi_bb40_9, &phi_bb40_11, &phi_bb40_16);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:295:67");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> phi_bb39_8;
  TNode<IntPtrT> phi_bb39_9;
  TNode<String> phi_bb39_11;
  TNode<IntPtrT> phi_bb39_16;
  if (block39.is_used()) {
    ca_.Bind(&block39, &phi_bb39_8, &phi_bb39_9, &phi_bb39_11, &phi_bb39_16);
    ca_.Goto(&block17, tmp41, tmp42, tmp43);
  }

  TNode<String> phi_bb44_8;
  TNode<IntPtrT> phi_bb44_9;
  TNode<String> phi_bb44_11;
  TNode<ConsString> tmp45;
  if (block44.is_used()) {
    ca_.Bind(&block44, &phi_bb44_8, &phi_bb44_9, &phi_bb44_11);
    compiler::CodeAssemblerLabel label46(&ca_);
    tmp45 = Cast_ConsString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb44_11)}, &label46);
    ca_.Goto(&block47, phi_bb44_8, phi_bb44_9, phi_bb44_11);
    if (label46.is_used()) {
      ca_.Bind(&label46);
      ca_.Goto(&block48, phi_bb44_8, phi_bb44_9, phi_bb44_11);
    }
  }

  TNode<String> phi_bb43_8;
  TNode<IntPtrT> phi_bb43_9;
  TNode<String> phi_bb43_11;
  TNode<IntPtrT> tmp47;
  TNode<InternalizedString> tmp48;
  if (block43.is_used()) {
    ca_.Bind(&block43, &phi_bb43_8, &phi_bb43_9, &phi_bb43_11);
    tmp47 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp48 = CodeStubAssembler(state_).LoadReference<InternalizedString>(CodeStubAssembler::Reference{tmp36, tmp47});
    ca_.Goto(&block41, tmp48, phi_bb43_9, phi_bb43_11);
  }

  TNode<String> phi_bb48_8;
  TNode<IntPtrT> phi_bb48_9;
  TNode<String> phi_bb48_11;
  TNode<SlicedString> tmp49;
  if (block48.is_used()) {
    ca_.Bind(&block48, &phi_bb48_8, &phi_bb48_9, &phi_bb48_11);
    compiler::CodeAssemblerLabel label50(&ca_);
    tmp49 = Cast_SlicedString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb48_11)}, &label50);
    ca_.Goto(&block51, phi_bb48_8, phi_bb48_9, phi_bb48_11);
    if (label50.is_used()) {
      ca_.Bind(&label50);
      ca_.Goto(&block52, phi_bb48_8, phi_bb48_9, phi_bb48_11);
    }
  }

  TNode<String> phi_bb47_8;
  TNode<IntPtrT> phi_bb47_9;
  TNode<String> phi_bb47_11;
  TNode<String> tmp51;
  if (block47.is_used()) {
    ca_.Bind(&block47, &phi_bb47_8, &phi_bb47_9, &phi_bb47_11);
    tmp51 = Flatten_1(state_, TNode<ConsString>{tmp45});
    ca_.Goto(&block45, tmp51, phi_bb47_9, phi_bb47_11);
  }

  TNode<String> phi_bb52_8;
  TNode<IntPtrT> phi_bb52_9;
  TNode<String> phi_bb52_11;
  TNode<ExternalOneByteString> tmp52;
  if (block52.is_used()) {
    ca_.Bind(&block52, &phi_bb52_8, &phi_bb52_9, &phi_bb52_11);
    compiler::CodeAssemblerLabel label53(&ca_);
    tmp52 = Cast_ExternalOneByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb52_11)}, &label53);
    ca_.Goto(&block55, phi_bb52_8, phi_bb52_9, phi_bb52_11);
    if (label53.is_used()) {
      ca_.Bind(&label53);
      ca_.Goto(&block56, phi_bb52_8, phi_bb52_9, phi_bb52_11);
    }
  }

  TNode<String> phi_bb51_8;
  TNode<IntPtrT> phi_bb51_9;
  TNode<String> phi_bb51_11;
  TNode<IntPtrT> tmp54;
  TNode<Smi> tmp55;
  TNode<IntPtrT> tmp56;
  TNode<Int32T> tmp57;
  TNode<Int32T> tmp58;
  TNode<Int32T> tmp59;
  TNode<Uint32T> tmp60;
  TNode<IntPtrT> tmp61;
  TNode<IntPtrT> tmp62;
  TNode<String> tmp63;
  if (block51.is_used()) {
    ca_.Bind(&block51, &phi_bb51_8, &phi_bb51_9, &phi_bb51_11);
    tmp54 = FromConstexpr_intptr_constexpr_int31_0(state_, 16);
    tmp55 = CodeStubAssembler(state_).LoadReference<Smi>(CodeStubAssembler::Reference{tmp49, tmp54});
    tmp56 = Convert_intptr_Smi_0(state_, TNode<Smi>{tmp55});
    tmp57 = CodeStubAssembler(state_).TruncateIntPtrToInt32(TNode<IntPtrT>{tmp56});
    tmp58 = CodeStubAssembler(state_).TruncateIntPtrToInt32(TNode<IntPtrT>{phi_bb51_9});
    tmp59 = CodeStubAssembler(state_).Int32Add(TNode<Int32T>{tmp58}, TNode<Int32T>{tmp57});
    tmp60 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp59});
    tmp61 = Convert_intptr_uint32_0(state_, TNode<Uint32T>{tmp60});
    tmp62 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp63 = CodeStubAssembler(state_).LoadReference<String>(CodeStubAssembler::Reference{tmp49, tmp62});
    ca_.Goto(&block45, tmp63, tmp61, phi_bb51_11);
  }

  TNode<String> phi_bb56_8;
  TNode<IntPtrT> phi_bb56_9;
  TNode<String> phi_bb56_11;
  TNode<ExternalTwoByteString> tmp64;
  if (block56.is_used()) {
    ca_.Bind(&block56, &phi_bb56_8, &phi_bb56_9, &phi_bb56_11);
    compiler::CodeAssemblerLabel label65(&ca_);
    tmp64 = Cast_ExternalTwoByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb56_11)}, &label65);
    ca_.Goto(&block63, phi_bb56_8, phi_bb56_9, phi_bb56_11);
    if (label65.is_used()) {
      ca_.Bind(&label65);
      ca_.Goto(&block64, phi_bb56_8, phi_bb56_9, phi_bb56_11);
    }
  }

  TNode<String> phi_bb55_8;
  TNode<IntPtrT> phi_bb55_9;
  TNode<String> phi_bb55_11;
  TNode<RawPtrT> tmp66;
  TNode<IntPtrT> tmp67;
  TNode<Int32T> tmp68;
  TNode<IntPtrT> tmp69;
  TNode<Union<HeapObject, TaggedIndex>> tmp70;
  TNode<IntPtrT> tmp71;
  TNode<IntPtrT> tmp72;
  TNode<Union<HeapObject, TaggedIndex>> tmp73;
  TNode<IntPtrT> tmp74;
  TNode<IntPtrT> tmp75;
  if (block55.is_used()) {
    ca_.Bind(&block55, &phi_bb55_8, &phi_bb55_9, &phi_bb55_11);
    tmp66 = Method_ExternalOneByteString_GetChars_0(state_, TNode<ExternalOneByteString>{tmp52});
    tmp67 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp68 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp52, tmp67});
    tmp69 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp68});
    std::tie(tmp70, tmp71, tmp72) = NewOffHeapConstSlice_char8_0(state_, TNode<RawPtrT>{tmp66}, TNode<IntPtrT>{tmp69}).Flatten();
    compiler::CodeAssemblerLabel label76(&ca_);
    std::tie(tmp73, tmp74, tmp75) = Subslice_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp70}, TNode<IntPtrT>{tmp71}, TNode<IntPtrT>{tmp72}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb55_9}, TNode<IntPtrT>{tmp23}, &label76).Flatten();
    ca_.Goto(&block59, phi_bb55_8, phi_bb55_9, phi_bb55_11, phi_bb55_9);
    if (label76.is_used()) {
      ca_.Bind(&label76);
      ca_.Goto(&block60, phi_bb55_8, phi_bb55_9, phi_bb55_11, phi_bb55_9);
    }
  }

  TNode<String> phi_bb60_8;
  TNode<IntPtrT> phi_bb60_9;
  TNode<String> phi_bb60_11;
  TNode<IntPtrT> phi_bb60_19;
  if (block60.is_used()) {
    ca_.Bind(&block60, &phi_bb60_8, &phi_bb60_9, &phi_bb60_11, &phi_bb60_19);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:315:63");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> phi_bb59_8;
  TNode<IntPtrT> phi_bb59_9;
  TNode<String> phi_bb59_11;
  TNode<IntPtrT> phi_bb59_19;
  if (block59.is_used()) {
    ca_.Bind(&block59, &phi_bb59_8, &phi_bb59_9, &phi_bb59_11, &phi_bb59_19);
    ca_.Goto(&block19, tmp73, tmp74, tmp75);
  }

  TNode<String> phi_bb64_8;
  TNode<IntPtrT> phi_bb64_9;
  TNode<String> phi_bb64_11;
  if (block64.is_used()) {
    ca_.Bind(&block64, &phi_bb64_8, &phi_bb64_9, &phi_bb64_11);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:323:9");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> phi_bb63_8;
  TNode<IntPtrT> phi_bb63_9;
  TNode<String> phi_bb63_11;
  TNode<RawPtrT> tmp77;
  TNode<IntPtrT> tmp78;
  TNode<Int32T> tmp79;
  TNode<IntPtrT> tmp80;
  TNode<Union<HeapObject, TaggedIndex>> tmp81;
  TNode<IntPtrT> tmp82;
  TNode<IntPtrT> tmp83;
  TNode<Union<HeapObject, TaggedIndex>> tmp84;
  TNode<IntPtrT> tmp85;
  TNode<IntPtrT> tmp86;
  if (block63.is_used()) {
    ca_.Bind(&block63, &phi_bb63_8, &phi_bb63_9, &phi_bb63_11);
    tmp77 = Method_ExternalTwoByteString_GetChars_0(state_, TNode<ExternalTwoByteString>{tmp64});
    tmp78 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp79 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp64, tmp78});
    tmp80 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp79});
    std::tie(tmp81, tmp82, tmp83) = NewOffHeapConstSlice_char16_0(state_, TNode<RawPtrT>{tmp77}, TNode<IntPtrT>{tmp80}).Flatten();
    compiler::CodeAssemblerLabel label87(&ca_);
    std::tie(tmp84, tmp85, tmp86) = Subslice_char16_0(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{tmp81}, TNode<IntPtrT>{tmp82}, TNode<IntPtrT>{tmp83}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb63_9}, TNode<IntPtrT>{tmp23}, &label87).Flatten();
    ca_.Goto(&block67, phi_bb63_8, phi_bb63_9, phi_bb63_11, phi_bb63_9);
    if (label87.is_used()) {
      ca_.Bind(&label87);
      ca_.Goto(&block68, phi_bb63_8, phi_bb63_9, phi_bb63_11, phi_bb63_9);
    }
  }

  TNode<String> phi_bb68_8;
  TNode<IntPtrT> phi_bb68_9;
  TNode<String> phi_bb68_11;
  TNode<IntPtrT> phi_bb68_19;
  if (block68.is_used()) {
    ca_.Bind(&block68, &phi_bb68_8, &phi_bb68_9, &phi_bb68_11, &phi_bb68_19);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:320:63");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> phi_bb67_8;
  TNode<IntPtrT> phi_bb67_9;
  TNode<String> phi_bb67_11;
  TNode<IntPtrT> phi_bb67_19;
  if (block67.is_used()) {
    ca_.Bind(&block67, &phi_bb67_8, &phi_bb67_9, &phi_bb67_11, &phi_bb67_19);
    ca_.Goto(&block17, tmp84, tmp85, tmp86);
  }

  TNode<String> phi_bb45_8;
  TNode<IntPtrT> phi_bb45_9;
  TNode<String> phi_bb45_11;
  if (block45.is_used()) {
    ca_.Bind(&block45, &phi_bb45_8, &phi_bb45_9, &phi_bb45_11);
    ca_.Goto(&block41, phi_bb45_8, phi_bb45_9, phi_bb45_11);
  }

  TNode<String> phi_bb41_8;
  TNode<IntPtrT> phi_bb41_9;
  TNode<String> phi_bb41_11;
  if (block41.is_used()) {
    ca_.Bind(&block41, &phi_bb41_8, &phi_bb41_9, &phi_bb41_11);
    ca_.Goto(&block24, phi_bb41_8, phi_bb41_9);
  }

  TNode<String> phi_bb23_8;
  TNode<IntPtrT> phi_bb23_9;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_8, &phi_bb23_9);
    VerifiedUnreachable_0(state_);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb19_6;
  TNode<IntPtrT> phi_bb19_7;
  TNode<IntPtrT> phi_bb19_8;
  TNode<IntPtrT> tmp88;
  TNode<IntPtrT> tmp89;
  TNode<Union<HeapObject, TaggedIndex>> tmp90;
  TNode<IntPtrT> tmp91;
  TNode<IntPtrT> tmp92;
  if (block19.is_used()) {
    ca_.Bind(&block19, &phi_bb19_6, &phi_bb19_7, &phi_bb19_8);
    tmp88 = Convert_intptr_uint32_0(state_, TNode<Uint32T>{parameter1});
    tmp89 = Convert_intptr_uint32_0(state_, TNode<Uint32T>{tmp8});
    compiler::CodeAssemblerLabel label93(&ca_);
    std::tie(tmp90, tmp91, tmp92) = Subslice_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{phi_bb19_6}, TNode<IntPtrT>{phi_bb19_7}, TNode<IntPtrT>{phi_bb19_8}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{tmp88}, TNode<IntPtrT>{tmp89}, &label93).Flatten();
    ca_.Goto(&block71, phi_bb19_6, phi_bb19_7, phi_bb19_8, phi_bb19_6, phi_bb19_7, phi_bb19_8);
    if (label93.is_used()) {
      ca_.Bind(&label93);
      ca_.Goto(&block72, phi_bb19_6, phi_bb19_7, phi_bb19_8, phi_bb19_6, phi_bb19_7, phi_bb19_8);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb72_6;
  TNode<IntPtrT> phi_bb72_7;
  TNode<IntPtrT> phi_bb72_8;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb72_9;
  TNode<IntPtrT> phi_bb72_10;
  TNode<IntPtrT> phi_bb72_11;
  if (block72.is_used()) {
    ca_.Bind(&block72, &phi_bb72_6, &phi_bb72_7, &phi_bb72_8, &phi_bb72_9, &phi_bb72_10, &phi_bb72_11);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/wasm.tq:1459:21");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb71_6;
  TNode<IntPtrT> phi_bb71_7;
  TNode<IntPtrT> phi_bb71_8;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb71_9;
  TNode<IntPtrT> phi_bb71_10;
  TNode<IntPtrT> phi_bb71_11;
  TNode<IntPtrT> tmp94;
  TNode<IntPtrT> tmp95;
  TNode<SeqOneByteString> tmp96;
  if (block71.is_used()) {
    ca_.Bind(&block71, &phi_bb71_6, &phi_bb71_7, &phi_bb71_8, &phi_bb71_9, &phi_bb71_10, &phi_bb71_11);
    tmp94 = TimesSizeOf_char8_0(state_, TNode<IntPtrT>{tmp92});
    tmp95 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp91}, TNode<IntPtrT>{tmp94});
    tmp96 = AllocateNonEmptySeqOneByteString_SliceIterator_char8_ConstReference_char8_0(state_, TNode<Uint32T>{tmp8}, TorqueStructSliceIterator_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp90}, TNode<IntPtrT>{tmp91}, TNode<IntPtrT>{tmp95}, TorqueStructUnsafe_0{}});
    CodeStubAssembler(state_).Retain(TNode<Object>{parameter0});
    CodeStubAssembler(state_).Return(tmp96);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb17_6;
  TNode<IntPtrT> phi_bb17_7;
  TNode<IntPtrT> phi_bb17_8;
  TNode<IntPtrT> tmp97;
  TNode<IntPtrT> tmp98;
  TNode<Union<HeapObject, TaggedIndex>> tmp99;
  TNode<IntPtrT> tmp100;
  TNode<IntPtrT> tmp101;
  if (block17.is_used()) {
    ca_.Bind(&block17, &phi_bb17_6, &phi_bb17_7, &phi_bb17_8);
    tmp97 = Convert_intptr_uint32_0(state_, TNode<Uint32T>{parameter1});
    tmp98 = Convert_intptr_uint32_0(state_, TNode<Uint32T>{tmp8});
    compiler::CodeAssemblerLabel label102(&ca_);
    std::tie(tmp99, tmp100, tmp101) = Subslice_char16_0(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{phi_bb17_6}, TNode<IntPtrT>{phi_bb17_7}, TNode<IntPtrT>{phi_bb17_8}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{tmp97}, TNode<IntPtrT>{tmp98}, &label102).Flatten();
    ca_.Goto(&block76, phi_bb17_6, phi_bb17_7, phi_bb17_8, phi_bb17_6, phi_bb17_7, phi_bb17_8);
    if (label102.is_used()) {
      ca_.Bind(&label102);
      ca_.Goto(&block77, phi_bb17_6, phi_bb17_7, phi_bb17_8, phi_bb17_6, phi_bb17_7, phi_bb17_8);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb77_6;
  TNode<IntPtrT> phi_bb77_7;
  TNode<IntPtrT> phi_bb77_8;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb77_9;
  TNode<IntPtrT> phi_bb77_10;
  TNode<IntPtrT> phi_bb77_11;
  if (block77.is_used()) {
    ca_.Bind(&block77, &phi_bb77_6, &phi_bb77_7, &phi_bb77_8, &phi_bb77_9, &phi_bb77_10, &phi_bb77_11);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/wasm.tq:1467:21");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb76_6;
  TNode<IntPtrT> phi_bb76_7;
  TNode<IntPtrT> phi_bb76_8;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb76_9;
  TNode<IntPtrT> phi_bb76_10;
  TNode<IntPtrT> phi_bb76_11;
  TNode<String> tmp103;
  if (block76.is_used()) {
    ca_.Bind(&block76, &phi_bb76_6, &phi_bb76_7, &phi_bb76_8, &phi_bb76_9, &phi_bb76_10, &phi_bb76_11);
    tmp103 = StringFromTwoByteSlice_0(state_, TNode<Uint32T>{tmp8}, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{tmp99}, TNode<IntPtrT>{tmp100}, TNode<IntPtrT>{tmp101}, TorqueStructUnsafe_0{}});
    CodeStubAssembler(state_).Retain(TNode<Object>{parameter0});
    CodeStubAssembler(state_).Return(tmp103);
  }

  TNode<UintPtrT> tmp104;
  TNode<UintPtrT> tmp105;
  TNode<String> tmp106;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp104 = Convert_uintptr_uint32_0(state_, TNode<Uint32T>{parameter1});
    tmp105 = Convert_uintptr_uint32_0(state_, TNode<Uint32T>{phi_bb7_4});
    tmp106 = StringBuiltinsAssembler(state_).SubString(TNode<String>{parameter0}, TNode<UintPtrT>{tmp104}, TNode<UintPtrT>{tmp105});
    CodeStubAssembler(state_).Return(tmp106);
  }
}

TF_BUILTIN(WasmStringSliceShared, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<String> parameter0 = UncheckedParameter<String>(Descriptor::kString);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kStart);
  USE(parameter1);
  TNode<Uint32T> parameter2 = UncheckedParameter<Uint32T>(Descriptor::kEnd);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<Int32T> tmp1;
  TNode<Uint32T> tmp2;
  TNode<BoolT> tmp3;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp1 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{parameter0, tmp0});
    tmp2 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp1});
    tmp3 = CodeStubAssembler(state_).Uint32GreaterThanOrEqual(TNode<Uint32T>{parameter1}, TNode<Uint32T>{tmp2});
    ca_.Branch(tmp3, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<String> tmp4;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp4 = kEmptyString_0(state_);
    CodeStubAssembler(state_).Return(tmp4);
  }

  TNode<BoolT> tmp5;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp5 = CodeStubAssembler(state_).Uint32LessThanOrEqual(TNode<Uint32T>{parameter2}, TNode<Uint32T>{parameter1});
    ca_.Branch(tmp5, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  TNode<String> tmp6;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp6 = kEmptyString_0(state_);
    CodeStubAssembler(state_).Return(tmp6);
  }

  TNode<BoolT> tmp7;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp7 = CodeStubAssembler(state_).Uint32LessThanOrEqual(TNode<Uint32T>{parameter2}, TNode<Uint32T>{tmp2});
    ca_.Branch(tmp7, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  if (block5.is_used()) {
    ca_.Bind(&block5);
    ca_.Goto(&block7, parameter2);
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    ca_.Goto(&block7, tmp2);
  }

  TNode<Uint32T> phi_bb7_4;
  TNode<NativeContext> tmp8;
  TNode<Smi> tmp9;
  TNode<Uint32T> tmp10;
  TNode<Smi> tmp11;
  if (block7.is_used()) {
    ca_.Bind(&block7, &phi_bb7_4);
    tmp8 = LoadContextFromFrame_0(state_);
    tmp9 = CodeStubAssembler(state_).SmiFromUint32(TNode<Uint32T>{parameter1});
    tmp10 = CodeStubAssembler(state_).Uint32Sub(TNode<Uint32T>{phi_bb7_4}, TNode<Uint32T>{parameter1});
    tmp11 = CodeStubAssembler(state_).SmiFromUint32(TNode<Uint32T>{tmp10});
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmSubstringShared, tmp8, parameter0, tmp9, tmp11);
  }
}

TF_BUILTIN(WasmStringAsIter, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<String> parameter0 = UncheckedParameter<String>(Descriptor::kString);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Map> tmp0;
  TNode<BoolT> tmp1;
  TNode<BoolT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<HeapObject> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<IntPtrT> tmp7;
  TNode<Uint32T> tmp8;
  TNode<WasmStringViewIter> tmp9;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).WasmStringViewIterMapConstant();
    tmp1 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    tmp2 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    tmp3 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp4 = AllocateFromNew_0(state_, TNode<IntPtrT>{tmp3}, TNode<Map>{tmp0}, TNode<BoolT>{tmp1}, TNode<BoolT>{tmp2});
    tmp5 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    CodeStubAssembler(state_).StoreReference<Map>(CodeStubAssembler::Reference{tmp4, tmp5}, tmp0);
    tmp6 = FromConstexpr_intptr_constexpr_int31_0(state_, 4);
    CodeStubAssembler(state_).StoreReference<String>(CodeStubAssembler::Reference{tmp4, tmp6}, parameter0);
    tmp7 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp8 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    CodeStubAssembler(state_).StoreReference<Uint32T>(CodeStubAssembler::Reference{tmp4, tmp7}, tmp8);
    tmp9 = TORQUE_CAST(TNode<HeapObject>{tmp4});
    CodeStubAssembler(state_).Return(tmp9);
  }
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=1512&c=1
TNode<BoolT> IsLeadSurrogate_0(compiler::CodeAssemblerState* state_, TNode<Uint16T> p_code) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Uint32T> tmp0;
  TNode<Uint32T> tmp1;
  TNode<Uint32T> tmp2;
  TNode<BoolT> tmp3;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0xfc00ull));
    tmp1 = CodeStubAssembler(state_).Word32And(TNode<Uint32T>{p_code}, TNode<Uint32T>{tmp0});
    tmp2 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0xd800ull));
    tmp3 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp1}, TNode<Uint32T>{tmp2});
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TNode<BoolT>{tmp3};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=1515&c=1
TNode<BoolT> IsTrailSurrogate_0(compiler::CodeAssemblerState* state_, TNode<Uint16T> p_code) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Uint32T> tmp0;
  TNode<Uint32T> tmp1;
  TNode<Uint32T> tmp2;
  TNode<BoolT> tmp3;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0xfc00ull));
    tmp1 = CodeStubAssembler(state_).Word32And(TNode<Uint32T>{p_code}, TNode<Uint32T>{tmp0});
    tmp2 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0xdc00ull));
    tmp3 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp1}, TNode<Uint32T>{tmp2});
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TNode<BoolT>{tmp3};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=1518&c=1
TNode<Int32T> CombineSurrogatePair_0(compiler::CodeAssemblerState* state_, TNode<Uint16T> p_lead, TNode<Uint16T> p_trail) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Uint32T> tmp0;
  TNode<Uint32T> tmp1;
  TNode<Uint32T> tmp2;
  TNode<Uint32T> tmp3;
  TNode<Uint32T> tmp4;
  TNode<Uint32T> tmp5;
  TNode<Uint32T> tmp6;
  TNode<Int32T> tmp7;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Convert_uint32_char16_0(state_, TNode<Uint16T>{p_lead});
    tmp1 = Convert_uint32_char16_0(state_, TNode<Uint16T>{p_trail});
    tmp2 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0xfca02400ull));
    tmp3 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0xaull));
    tmp4 = CodeStubAssembler(state_).Word32Shl(TNode<Uint32T>{tmp0}, TNode<Uint32T>{tmp3});
    tmp5 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{tmp4}, TNode<Uint32T>{tmp1});
    tmp6 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{tmp5}, TNode<Uint32T>{tmp2});
    tmp7 = CodeStubAssembler(state_).Signed(TNode<Uint32T>{tmp6});
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TNode<Int32T>{tmp7};
}

TF_BUILTIN(WasmStringCodePointAt, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<String> parameter0 = UncheckedParameter<String>(Descriptor::kString);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kOffset);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<Int32T> tmp1;
  TNode<Uint32T> tmp2;
  TNode<BoolT> tmp3;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp1 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{parameter0, tmp0});
    tmp2 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp1});
    tmp3 = CodeStubAssembler(state_).Uint32LessThanOrEqual(TNode<Uint32T>{tmp2}, TNode<Uint32T>{parameter1});
    ca_.Branch(tmp3, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  TNode<NativeContext> tmp4;
  TNode<Smi> tmp5;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp4 = LoadContextFromFrame_0(state_);
    tmp5 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kWasmTrapStringOffsetOutOfBounds));
    CodeStubAssembler(state_).CallRuntime(Runtime::kThrowWasmError, tmp4, tmp5);
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<UintPtrT> tmp6;
  TNode<Uint16T> tmp7;
  TNode<BoolT> tmp8;
  TNode<BoolT> tmp9;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp6 = Convert_uintptr_uint32_0(state_, TNode<Uint32T>{parameter1});
    tmp7 = CodeStubAssembler(state_).StringCharCodeAt(TNode<String>{parameter0}, TNode<UintPtrT>{tmp6});
    tmp8 = IsLeadSurrogate_0(state_, TNode<Uint16T>{tmp7});
    tmp9 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp8});
    ca_.Branch(tmp9, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  TNode<Uint32T> tmp10;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp10 = Convert_uint32_char16_0(state_, TNode<Uint16T>{tmp7});
    CodeStubAssembler(state_).Return(tmp10);
  }

  TNode<Uint32T> tmp11;
  TNode<Uint32T> tmp12;
  TNode<IntPtrT> tmp13;
  TNode<Int32T> tmp14;
  TNode<Uint32T> tmp15;
  TNode<BoolT> tmp16;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp11 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp12 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{parameter1}, TNode<Uint32T>{tmp11});
    tmp13 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp14 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{parameter0, tmp13});
    tmp15 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp14});
    tmp16 = CodeStubAssembler(state_).Uint32LessThanOrEqual(TNode<Uint32T>{tmp15}, TNode<Uint32T>{tmp12});
    ca_.Branch(tmp16, &block7, std::vector<compiler::Node*>{}, &block8, std::vector<compiler::Node*>{});
  }

  TNode<Uint32T> tmp17;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp17 = Convert_uint32_char16_0(state_, TNode<Uint16T>{tmp7});
    CodeStubAssembler(state_).Return(tmp17);
  }

  TNode<UintPtrT> tmp18;
  TNode<Uint16T> tmp19;
  TNode<BoolT> tmp20;
  TNode<BoolT> tmp21;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp18 = Convert_uintptr_uint32_0(state_, TNode<Uint32T>{tmp12});
    tmp19 = CodeStubAssembler(state_).StringCharCodeAt(TNode<String>{parameter0}, TNode<UintPtrT>{tmp18});
    tmp20 = IsTrailSurrogate_0(state_, TNode<Uint16T>{tmp19});
    tmp21 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp20});
    ca_.Branch(tmp21, &block9, std::vector<compiler::Node*>{}, &block10, std::vector<compiler::Node*>{});
  }

  TNode<Uint32T> tmp22;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp22 = Convert_uint32_char16_0(state_, TNode<Uint16T>{tmp7});
    CodeStubAssembler(state_).Return(tmp22);
  }

  TNode<Int32T> tmp23;
  TNode<Uint32T> tmp24;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp23 = CombineSurrogatePair_0(state_, TNode<Uint16T>{tmp7}, TNode<Uint16T>{tmp19});
    tmp24 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp23});
    CodeStubAssembler(state_).Return(tmp24);
  }
}

TF_BUILTIN(WasmStringViewIterNext, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<WasmStringViewIter> parameter0 = UncheckedParameter<WasmStringViewIter>(Descriptor::kView);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<String> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<Uint32T> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<Int32T> tmp5;
  TNode<Uint32T> tmp6;
  TNode<BoolT> tmp7;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 4);
    tmp1 = CodeStubAssembler(state_).LoadReference<String>(CodeStubAssembler::Reference{parameter0, tmp0});
    tmp2 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp3 = CodeStubAssembler(state_).LoadReference<Uint32T>(CodeStubAssembler::Reference{parameter0, tmp2});
    tmp4 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp5 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp1, tmp4});
    tmp6 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp5});
    tmp7 = CodeStubAssembler(state_).Uint32GreaterThanOrEqual(TNode<Uint32T>{tmp3}, TNode<Uint32T>{tmp6});
    ca_.Branch(tmp7, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<Int32T> tmp8;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp8 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    CodeStubAssembler(state_).Return(tmp8);
  }

  TNode<UintPtrT> tmp9;
  TNode<Uint16T> tmp10;
  TNode<BoolT> tmp11;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp9 = Convert_uintptr_uint32_0(state_, TNode<Uint32T>{tmp3});
    tmp10 = CodeStubAssembler(state_).StringCharCodeAt(TNode<String>{tmp1}, TNode<UintPtrT>{tmp9});
    tmp11 = IsLeadSurrogate_0(state_, TNode<Uint16T>{tmp10});
    ca_.Branch(tmp11, &block7, std::vector<compiler::Node*>{}, &block8, std::vector<compiler::Node*>{});
  }

  TNode<Uint32T> tmp12;
  TNode<Uint32T> tmp13;
  TNode<IntPtrT> tmp14;
  TNode<Int32T> tmp15;
  TNode<Uint32T> tmp16;
  TNode<BoolT> tmp17;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp12 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp13 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{tmp3}, TNode<Uint32T>{tmp12});
    tmp14 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp15 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp1, tmp14});
    tmp16 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp15});
    tmp17 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{tmp13}, TNode<Uint32T>{tmp16});
    ca_.Goto(&block9, tmp17);
  }

  TNode<BoolT> tmp18;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp18 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block9, tmp18);
  }

  TNode<BoolT> phi_bb9_5;
  if (block9.is_used()) {
    ca_.Bind(&block9, &phi_bb9_5);
    ca_.Branch(phi_bb9_5, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  TNode<Uint32T> tmp19;
  TNode<Uint32T> tmp20;
  TNode<UintPtrT> tmp21;
  TNode<Uint16T> tmp22;
  TNode<BoolT> tmp23;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp19 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp20 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{tmp3}, TNode<Uint32T>{tmp19});
    tmp21 = Convert_uintptr_uint32_0(state_, TNode<Uint32T>{tmp20});
    tmp22 = CodeStubAssembler(state_).StringCharCodeAt(TNode<String>{tmp1}, TNode<UintPtrT>{tmp21});
    tmp23 = IsTrailSurrogate_0(state_, TNode<Uint16T>{tmp22});
    ca_.Branch(tmp23, &block10, std::vector<compiler::Node*>{}, &block11, std::vector<compiler::Node*>{});
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    ca_.Goto(&block3);
  }

  TNode<IntPtrT> tmp24;
  TNode<Uint32T> tmp25;
  TNode<Uint32T> tmp26;
  TNode<Int32T> tmp27;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp24 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp25 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    tmp26 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{tmp3}, TNode<Uint32T>{tmp25});
    CodeStubAssembler(state_).StoreReference<Uint32T>(CodeStubAssembler::Reference{parameter0, tmp24}, tmp26);
    tmp27 = CombineSurrogatePair_0(state_, TNode<Uint16T>{tmp10}, TNode<Uint16T>{tmp22});
    CodeStubAssembler(state_).Return(tmp27);
  }

  if (block11.is_used()) {
    ca_.Bind(&block11);
    ca_.Goto(&block3);
  }

  TNode<IntPtrT> tmp28;
  TNode<Uint32T> tmp29;
  TNode<Uint32T> tmp30;
  TNode<Uint32T> tmp31;
  TNode<Int32T> tmp32;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp28 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp29 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp30 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{tmp3}, TNode<Uint32T>{tmp29});
    CodeStubAssembler(state_).StoreReference<Uint32T>(CodeStubAssembler::Reference{parameter0, tmp28}, tmp30);
    tmp31 = Convert_uint32_char16_0(state_, TNode<Uint16T>{tmp10});
    tmp32 = CodeStubAssembler(state_).Signed(TNode<Uint32T>{tmp31});
    CodeStubAssembler(state_).Return(tmp32);
  }
}

TF_BUILTIN(WasmStringViewIterAdvance, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<WasmStringViewIter> parameter0 = UncheckedParameter<WasmStringViewIter>(Descriptor::kView);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kCodepoints);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, Uint32T> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, Uint32T> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, Uint32T> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, Uint32T> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, BoolT> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, BoolT> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, Uint32T> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<String> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<Uint32T> tmp3;
  TNode<Uint32T> tmp4;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 4);
    tmp1 = CodeStubAssembler(state_).LoadReference<String>(CodeStubAssembler::Reference{parameter0, tmp0});
    tmp2 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp3 = CodeStubAssembler(state_).LoadReference<Uint32T>(CodeStubAssembler::Reference{parameter0, tmp2});
    tmp4 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block3, tmp3, tmp4);
  }

  TNode<Uint32T> phi_bb3_3;
  TNode<Uint32T> phi_bb3_4;
  TNode<BoolT> tmp5;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_3, &phi_bb3_4);
    tmp5 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{phi_bb3_4}, TNode<Uint32T>{parameter1});
    ca_.Branch(tmp5, &block1, std::vector<compiler::Node*>{phi_bb3_3, phi_bb3_4}, &block2, std::vector<compiler::Node*>{phi_bb3_3, phi_bb3_4});
  }

  TNode<Uint32T> phi_bb1_3;
  TNode<Uint32T> phi_bb1_4;
  TNode<IntPtrT> tmp6;
  TNode<Int32T> tmp7;
  TNode<Uint32T> tmp8;
  TNode<BoolT> tmp9;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_3, &phi_bb1_4);
    tmp6 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp7 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp1, tmp6});
    tmp8 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp7});
    tmp9 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{phi_bb1_3}, TNode<Uint32T>{tmp8});
    ca_.Branch(tmp9, &block4, std::vector<compiler::Node*>{phi_bb1_3, phi_bb1_4}, &block5, std::vector<compiler::Node*>{phi_bb1_3, phi_bb1_4});
  }

  TNode<Uint32T> phi_bb4_3;
  TNode<Uint32T> phi_bb4_4;
  if (block4.is_used()) {
    ca_.Bind(&block4, &phi_bb4_3, &phi_bb4_4);
    ca_.Goto(&block2, phi_bb4_3, phi_bb4_4);
  }

  TNode<Uint32T> phi_bb5_3;
  TNode<Uint32T> phi_bb5_4;
  TNode<Uint32T> tmp10;
  TNode<Uint32T> tmp11;
  TNode<Uint32T> tmp12;
  TNode<Uint32T> tmp13;
  TNode<IntPtrT> tmp14;
  TNode<Int32T> tmp15;
  TNode<Uint32T> tmp16;
  TNode<BoolT> tmp17;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_3, &phi_bb5_4);
    tmp10 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp11 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{phi_bb5_4}, TNode<Uint32T>{tmp10});
    tmp12 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp13 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{phi_bb5_3}, TNode<Uint32T>{tmp12});
    tmp14 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp15 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp1, tmp14});
    tmp16 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp15});
    tmp17 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{tmp13}, TNode<Uint32T>{tmp16});
    ca_.Branch(tmp17, &block8, std::vector<compiler::Node*>{phi_bb5_3}, &block9, std::vector<compiler::Node*>{phi_bb5_3});
  }

  TNode<Uint32T> phi_bb8_3;
  TNode<UintPtrT> tmp18;
  TNode<Uint16T> tmp19;
  TNode<BoolT> tmp20;
  if (block8.is_used()) {
    ca_.Bind(&block8, &phi_bb8_3);
    tmp18 = Convert_uintptr_uint32_0(state_, TNode<Uint32T>{phi_bb8_3});
    tmp19 = CodeStubAssembler(state_).StringCharCodeAt(TNode<String>{tmp1}, TNode<UintPtrT>{tmp18});
    tmp20 = IsLeadSurrogate_0(state_, TNode<Uint16T>{tmp19});
    ca_.Goto(&block10, phi_bb8_3, tmp20);
  }

  TNode<Uint32T> phi_bb9_3;
  TNode<BoolT> tmp21;
  if (block9.is_used()) {
    ca_.Bind(&block9, &phi_bb9_3);
    tmp21 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block10, phi_bb9_3, tmp21);
  }

  TNode<Uint32T> phi_bb10_3;
  TNode<BoolT> phi_bb10_6;
  if (block10.is_used()) {
    ca_.Bind(&block10, &phi_bb10_3, &phi_bb10_6);
    ca_.Branch(phi_bb10_6, &block11, std::vector<compiler::Node*>{phi_bb10_3}, &block12, std::vector<compiler::Node*>{phi_bb10_3});
  }

  TNode<Uint32T> phi_bb11_3;
  TNode<Uint32T> tmp22;
  TNode<Uint32T> tmp23;
  TNode<UintPtrT> tmp24;
  TNode<Uint16T> tmp25;
  TNode<BoolT> tmp26;
  if (block11.is_used()) {
    ca_.Bind(&block11, &phi_bb11_3);
    tmp22 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp23 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{phi_bb11_3}, TNode<Uint32T>{tmp22});
    tmp24 = Convert_uintptr_uint32_0(state_, TNode<Uint32T>{tmp23});
    tmp25 = CodeStubAssembler(state_).StringCharCodeAt(TNode<String>{tmp1}, TNode<UintPtrT>{tmp24});
    tmp26 = IsTrailSurrogate_0(state_, TNode<Uint16T>{tmp25});
    ca_.Goto(&block13, phi_bb11_3, tmp26);
  }

  TNode<Uint32T> phi_bb12_3;
  TNode<BoolT> tmp27;
  if (block12.is_used()) {
    ca_.Bind(&block12, &phi_bb12_3);
    tmp27 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block13, phi_bb12_3, tmp27);
  }

  TNode<Uint32T> phi_bb13_3;
  TNode<BoolT> phi_bb13_6;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_3, &phi_bb13_6);
    ca_.Branch(phi_bb13_6, &block6, std::vector<compiler::Node*>{phi_bb13_3}, &block7, std::vector<compiler::Node*>{phi_bb13_3});
  }

  TNode<Uint32T> phi_bb6_3;
  TNode<Uint32T> tmp28;
  TNode<Uint32T> tmp29;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_3);
    tmp28 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    tmp29 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{phi_bb6_3}, TNode<Uint32T>{tmp28});
    ca_.Goto(&block14, tmp29);
  }

  TNode<Uint32T> phi_bb7_3;
  TNode<Uint32T> tmp30;
  TNode<Uint32T> tmp31;
  if (block7.is_used()) {
    ca_.Bind(&block7, &phi_bb7_3);
    tmp30 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp31 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{phi_bb7_3}, TNode<Uint32T>{tmp30});
    ca_.Goto(&block14, tmp31);
  }

  TNode<Uint32T> phi_bb14_3;
  if (block14.is_used()) {
    ca_.Bind(&block14, &phi_bb14_3);
    ca_.Goto(&block3, phi_bb14_3, tmp11);
  }

  TNode<Uint32T> phi_bb2_3;
  TNode<Uint32T> phi_bb2_4;
  TNode<IntPtrT> tmp32;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_3, &phi_bb2_4);
    tmp32 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    CodeStubAssembler(state_).StoreReference<Uint32T>(CodeStubAssembler::Reference{parameter0, tmp32}, phi_bb2_3);
    CodeStubAssembler(state_).Return(phi_bb2_4);
  }
}

TF_BUILTIN(WasmStringViewIterRewind, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<WasmStringViewIter> parameter0 = UncheckedParameter<WasmStringViewIter>(Descriptor::kView);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kCodepoints);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, Uint32T> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, Uint32T> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, Uint32T> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, Uint32T> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, BoolT> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, BoolT> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, Uint32T> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<String> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<Uint32T> tmp3;
  TNode<Uint32T> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<Int32T> tmp6;
  TNode<Int32T> tmp7;
  TNode<BoolT> tmp8;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 4);
    tmp1 = CodeStubAssembler(state_).LoadReference<String>(CodeStubAssembler::Reference{parameter0, tmp0});
    tmp2 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp3 = CodeStubAssembler(state_).LoadReference<Uint32T>(CodeStubAssembler::Reference{parameter0, tmp2});
    tmp4 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp5 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp6 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp1, tmp5});
    tmp7 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp8 = CodeStubAssembler(state_).Word32Equal(TNode<Int32T>{tmp6}, TNode<Int32T>{tmp7});
    ca_.Branch(tmp8, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<Uint32T> tmp9;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp9 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    CodeStubAssembler(state_).Return(tmp9);
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    ca_.Goto(&block5, tmp3, tmp4);
  }

  TNode<Uint32T> phi_bb5_3;
  TNode<Uint32T> phi_bb5_4;
  TNode<BoolT> tmp10;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_3, &phi_bb5_4);
    tmp10 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{phi_bb5_4}, TNode<Uint32T>{parameter1});
    ca_.Branch(tmp10, &block3, std::vector<compiler::Node*>{phi_bb5_3, phi_bb5_4}, &block4, std::vector<compiler::Node*>{phi_bb5_3, phi_bb5_4});
  }

  TNode<Uint32T> phi_bb3_3;
  TNode<Uint32T> phi_bb3_4;
  TNode<Uint32T> tmp11;
  TNode<BoolT> tmp12;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_3, &phi_bb3_4);
    tmp11 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp12 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{phi_bb3_3}, TNode<Uint32T>{tmp11});
    ca_.Branch(tmp12, &block6, std::vector<compiler::Node*>{phi_bb3_3, phi_bb3_4}, &block7, std::vector<compiler::Node*>{phi_bb3_3, phi_bb3_4});
  }

  TNode<Uint32T> phi_bb6_3;
  TNode<Uint32T> phi_bb6_4;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_3, &phi_bb6_4);
    ca_.Goto(&block4, phi_bb6_3, phi_bb6_4);
  }

  TNode<Uint32T> phi_bb7_3;
  TNode<Uint32T> phi_bb7_4;
  TNode<Uint32T> tmp13;
  TNode<Uint32T> tmp14;
  TNode<Uint32T> tmp15;
  TNode<BoolT> tmp16;
  if (block7.is_used()) {
    ca_.Bind(&block7, &phi_bb7_3, &phi_bb7_4);
    tmp13 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp14 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{phi_bb7_4}, TNode<Uint32T>{tmp13});
    tmp15 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    tmp16 = CodeStubAssembler(state_).Uint32GreaterThanOrEqual(TNode<Uint32T>{phi_bb7_3}, TNode<Uint32T>{tmp15});
    ca_.Branch(tmp16, &block10, std::vector<compiler::Node*>{phi_bb7_3}, &block11, std::vector<compiler::Node*>{phi_bb7_3});
  }

  TNode<Uint32T> phi_bb10_3;
  TNode<Uint32T> tmp17;
  TNode<Uint32T> tmp18;
  TNode<UintPtrT> tmp19;
  TNode<Uint16T> tmp20;
  TNode<BoolT> tmp21;
  if (block10.is_used()) {
    ca_.Bind(&block10, &phi_bb10_3);
    tmp17 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp18 = CodeStubAssembler(state_).Uint32Sub(TNode<Uint32T>{phi_bb10_3}, TNode<Uint32T>{tmp17});
    tmp19 = Convert_uintptr_uint32_0(state_, TNode<Uint32T>{tmp18});
    tmp20 = CodeStubAssembler(state_).StringCharCodeAt(TNode<String>{tmp1}, TNode<UintPtrT>{tmp19});
    tmp21 = IsTrailSurrogate_0(state_, TNode<Uint16T>{tmp20});
    ca_.Goto(&block12, phi_bb10_3, tmp21);
  }

  TNode<Uint32T> phi_bb11_3;
  TNode<BoolT> tmp22;
  if (block11.is_used()) {
    ca_.Bind(&block11, &phi_bb11_3);
    tmp22 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block12, phi_bb11_3, tmp22);
  }

  TNode<Uint32T> phi_bb12_3;
  TNode<BoolT> phi_bb12_6;
  if (block12.is_used()) {
    ca_.Bind(&block12, &phi_bb12_3, &phi_bb12_6);
    ca_.Branch(phi_bb12_6, &block13, std::vector<compiler::Node*>{phi_bb12_3}, &block14, std::vector<compiler::Node*>{phi_bb12_3});
  }

  TNode<Uint32T> phi_bb13_3;
  TNode<Uint32T> tmp23;
  TNode<Uint32T> tmp24;
  TNode<UintPtrT> tmp25;
  TNode<Uint16T> tmp26;
  TNode<BoolT> tmp27;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_3);
    tmp23 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    tmp24 = CodeStubAssembler(state_).Uint32Sub(TNode<Uint32T>{phi_bb13_3}, TNode<Uint32T>{tmp23});
    tmp25 = Convert_uintptr_uint32_0(state_, TNode<Uint32T>{tmp24});
    tmp26 = CodeStubAssembler(state_).StringCharCodeAt(TNode<String>{tmp1}, TNode<UintPtrT>{tmp25});
    tmp27 = IsLeadSurrogate_0(state_, TNode<Uint16T>{tmp26});
    ca_.Goto(&block15, phi_bb13_3, tmp27);
  }

  TNode<Uint32T> phi_bb14_3;
  TNode<BoolT> tmp28;
  if (block14.is_used()) {
    ca_.Bind(&block14, &phi_bb14_3);
    tmp28 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block15, phi_bb14_3, tmp28);
  }

  TNode<Uint32T> phi_bb15_3;
  TNode<BoolT> phi_bb15_6;
  if (block15.is_used()) {
    ca_.Bind(&block15, &phi_bb15_3, &phi_bb15_6);
    ca_.Branch(phi_bb15_6, &block8, std::vector<compiler::Node*>{phi_bb15_3}, &block9, std::vector<compiler::Node*>{phi_bb15_3});
  }

  TNode<Uint32T> phi_bb8_3;
  TNode<Uint32T> tmp29;
  TNode<Uint32T> tmp30;
  if (block8.is_used()) {
    ca_.Bind(&block8, &phi_bb8_3);
    tmp29 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    tmp30 = CodeStubAssembler(state_).Uint32Sub(TNode<Uint32T>{phi_bb8_3}, TNode<Uint32T>{tmp29});
    ca_.Goto(&block16, tmp30);
  }

  TNode<Uint32T> phi_bb9_3;
  TNode<Uint32T> tmp31;
  TNode<Uint32T> tmp32;
  if (block9.is_used()) {
    ca_.Bind(&block9, &phi_bb9_3);
    tmp31 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp32 = CodeStubAssembler(state_).Uint32Sub(TNode<Uint32T>{phi_bb9_3}, TNode<Uint32T>{tmp31});
    ca_.Goto(&block16, tmp32);
  }

  TNode<Uint32T> phi_bb16_3;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_3);
    ca_.Goto(&block5, phi_bb16_3, tmp14);
  }

  TNode<Uint32T> phi_bb4_3;
  TNode<Uint32T> phi_bb4_4;
  TNode<IntPtrT> tmp33;
  if (block4.is_used()) {
    ca_.Bind(&block4, &phi_bb4_3, &phi_bb4_4);
    tmp33 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    CodeStubAssembler(state_).StoreReference<Uint32T>(CodeStubAssembler::Reference{parameter0, tmp33}, phi_bb4_3);
    CodeStubAssembler(state_).Return(phi_bb4_4);
  }
}

TF_BUILTIN(WasmStringViewIterSlice, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<WasmStringViewIter> parameter0 = UncheckedParameter<WasmStringViewIter>(Descriptor::kView);
  USE(parameter0);
  TNode<Uint32T> parameter1 = UncheckedParameter<Uint32T>(Descriptor::kCodepoints);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, Uint32T> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, Uint32T> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, Uint32T> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, Uint32T> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, BoolT> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, BoolT> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, Uint32T> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, Uint32T> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, Uint32T> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Uint32T, Uint32T, String> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<String> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<Uint32T> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<Uint32T> tmp5;
  TNode<Uint32T> tmp6;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 4);
    tmp1 = CodeStubAssembler(state_).LoadReference<String>(CodeStubAssembler::Reference{parameter0, tmp0});
    tmp2 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp3 = CodeStubAssembler(state_).LoadReference<Uint32T>(CodeStubAssembler::Reference{parameter0, tmp2});
    tmp4 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp5 = CodeStubAssembler(state_).LoadReference<Uint32T>(CodeStubAssembler::Reference{parameter0, tmp4});
    tmp6 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block3, tmp5, tmp6);
  }

  TNode<Uint32T> phi_bb3_4;
  TNode<Uint32T> phi_bb3_5;
  TNode<BoolT> tmp7;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_4, &phi_bb3_5);
    tmp7 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{phi_bb3_5}, TNode<Uint32T>{parameter1});
    ca_.Branch(tmp7, &block1, std::vector<compiler::Node*>{phi_bb3_4, phi_bb3_5}, &block2, std::vector<compiler::Node*>{phi_bb3_4, phi_bb3_5});
  }

  TNode<Uint32T> phi_bb1_4;
  TNode<Uint32T> phi_bb1_5;
  TNode<IntPtrT> tmp8;
  TNode<Int32T> tmp9;
  TNode<Uint32T> tmp10;
  TNode<BoolT> tmp11;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_4, &phi_bb1_5);
    tmp8 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp9 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp1, tmp8});
    tmp10 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp9});
    tmp11 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{phi_bb1_4}, TNode<Uint32T>{tmp10});
    ca_.Branch(tmp11, &block4, std::vector<compiler::Node*>{phi_bb1_4, phi_bb1_5}, &block5, std::vector<compiler::Node*>{phi_bb1_4, phi_bb1_5});
  }

  TNode<Uint32T> phi_bb4_4;
  TNode<Uint32T> phi_bb4_5;
  if (block4.is_used()) {
    ca_.Bind(&block4, &phi_bb4_4, &phi_bb4_5);
    ca_.Goto(&block2, phi_bb4_4, phi_bb4_5);
  }

  TNode<Uint32T> phi_bb5_4;
  TNode<Uint32T> phi_bb5_5;
  TNode<Uint32T> tmp12;
  TNode<Uint32T> tmp13;
  TNode<Uint32T> tmp14;
  TNode<Uint32T> tmp15;
  TNode<IntPtrT> tmp16;
  TNode<Int32T> tmp17;
  TNode<Uint32T> tmp18;
  TNode<BoolT> tmp19;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_4, &phi_bb5_5);
    tmp12 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp13 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{phi_bb5_5}, TNode<Uint32T>{tmp12});
    tmp14 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp15 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{phi_bb5_4}, TNode<Uint32T>{tmp14});
    tmp16 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp17 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp1, tmp16});
    tmp18 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp17});
    tmp19 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{tmp15}, TNode<Uint32T>{tmp18});
    ca_.Branch(tmp19, &block8, std::vector<compiler::Node*>{phi_bb5_4}, &block9, std::vector<compiler::Node*>{phi_bb5_4});
  }

  TNode<Uint32T> phi_bb8_4;
  TNode<UintPtrT> tmp20;
  TNode<Uint16T> tmp21;
  TNode<BoolT> tmp22;
  if (block8.is_used()) {
    ca_.Bind(&block8, &phi_bb8_4);
    tmp20 = Convert_uintptr_uint32_0(state_, TNode<Uint32T>{phi_bb8_4});
    tmp21 = CodeStubAssembler(state_).StringCharCodeAt(TNode<String>{tmp1}, TNode<UintPtrT>{tmp20});
    tmp22 = IsLeadSurrogate_0(state_, TNode<Uint16T>{tmp21});
    ca_.Goto(&block10, phi_bb8_4, tmp22);
  }

  TNode<Uint32T> phi_bb9_4;
  TNode<BoolT> tmp23;
  if (block9.is_used()) {
    ca_.Bind(&block9, &phi_bb9_4);
    tmp23 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block10, phi_bb9_4, tmp23);
  }

  TNode<Uint32T> phi_bb10_4;
  TNode<BoolT> phi_bb10_7;
  if (block10.is_used()) {
    ca_.Bind(&block10, &phi_bb10_4, &phi_bb10_7);
    ca_.Branch(phi_bb10_7, &block11, std::vector<compiler::Node*>{phi_bb10_4}, &block12, std::vector<compiler::Node*>{phi_bb10_4});
  }

  TNode<Uint32T> phi_bb11_4;
  TNode<Uint32T> tmp24;
  TNode<Uint32T> tmp25;
  TNode<UintPtrT> tmp26;
  TNode<Uint16T> tmp27;
  TNode<BoolT> tmp28;
  if (block11.is_used()) {
    ca_.Bind(&block11, &phi_bb11_4);
    tmp24 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp25 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{phi_bb11_4}, TNode<Uint32T>{tmp24});
    tmp26 = Convert_uintptr_uint32_0(state_, TNode<Uint32T>{tmp25});
    tmp27 = CodeStubAssembler(state_).StringCharCodeAt(TNode<String>{tmp1}, TNode<UintPtrT>{tmp26});
    tmp28 = IsTrailSurrogate_0(state_, TNode<Uint16T>{tmp27});
    ca_.Goto(&block13, phi_bb11_4, tmp28);
  }

  TNode<Uint32T> phi_bb12_4;
  TNode<BoolT> tmp29;
  if (block12.is_used()) {
    ca_.Bind(&block12, &phi_bb12_4);
    tmp29 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block13, phi_bb12_4, tmp29);
  }

  TNode<Uint32T> phi_bb13_4;
  TNode<BoolT> phi_bb13_7;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_4, &phi_bb13_7);
    ca_.Branch(phi_bb13_7, &block6, std::vector<compiler::Node*>{phi_bb13_4}, &block7, std::vector<compiler::Node*>{phi_bb13_4});
  }

  TNode<Uint32T> phi_bb6_4;
  TNode<Uint32T> tmp30;
  TNode<Uint32T> tmp31;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_4);
    tmp30 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    tmp31 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{phi_bb6_4}, TNode<Uint32T>{tmp30});
    ca_.Goto(&block14, tmp31);
  }

  TNode<Uint32T> phi_bb7_4;
  TNode<Uint32T> tmp32;
  TNode<Uint32T> tmp33;
  if (block7.is_used()) {
    ca_.Bind(&block7, &phi_bb7_4);
    tmp32 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp33 = CodeStubAssembler(state_).Uint32Add(TNode<Uint32T>{phi_bb7_4}, TNode<Uint32T>{tmp32});
    ca_.Goto(&block14, tmp33);
  }

  TNode<Uint32T> phi_bb14_4;
  if (block14.is_used()) {
    ca_.Bind(&block14, &phi_bb14_4);
    ca_.Goto(&block3, phi_bb14_4, tmp13);
  }

  TNode<Uint32T> phi_bb2_4;
  TNode<Uint32T> phi_bb2_5;
  TNode<BoolT> tmp34;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_4, &phi_bb2_5);
    tmp34 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp3}, TNode<Uint32T>{phi_bb2_4});
    ca_.Branch(tmp34, &block15, std::vector<compiler::Node*>{phi_bb2_4, phi_bb2_5}, &block16, std::vector<compiler::Node*>{phi_bb2_4, phi_bb2_5});
  }

  TNode<Uint32T> phi_bb15_4;
  TNode<Uint32T> phi_bb15_5;
  TNode<String> tmp35;
  if (block15.is_used()) {
    ca_.Bind(&block15, &phi_bb15_4, &phi_bb15_5);
    tmp35 = kEmptyString_0(state_);
    ca_.Goto(&block17, phi_bb15_4, phi_bb15_5, tmp35);
  }

  TNode<Uint32T> phi_bb16_4;
  TNode<Uint32T> phi_bb16_5;
  TNode<UintPtrT> tmp36;
  TNode<UintPtrT> tmp37;
  TNode<String> tmp38;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_4, &phi_bb16_5);
    tmp36 = Convert_uintptr_uint32_0(state_, TNode<Uint32T>{tmp3});
    tmp37 = Convert_uintptr_uint32_0(state_, TNode<Uint32T>{phi_bb16_4});
    tmp38 = StringBuiltinsAssembler(state_).SubString(TNode<String>{tmp1}, TNode<UintPtrT>{tmp36}, TNode<UintPtrT>{tmp37});
    ca_.Goto(&block17, phi_bb16_4, phi_bb16_5, tmp38);
  }

  TNode<Uint32T> phi_bb17_4;
  TNode<Uint32T> phi_bb17_5;
  TNode<String> phi_bb17_6;
  if (block17.is_used()) {
    ca_.Bind(&block17, &phi_bb17_4, &phi_bb17_5, &phi_bb17_6);
    CodeStubAssembler(state_).Return(phi_bb17_6);
  }
}

TF_BUILTIN(WasmIntToString, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Int32T> parameter0 = UncheckedParameter<Int32T>(Descriptor::kX);
  USE(parameter0);
  TNode<Int32T> parameter1 = UncheckedParameter<Int32T>(Descriptor::kRadix);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Int32T> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0xaull));
    tmp1 = CodeStubAssembler(state_).Word32Equal(TNode<Int32T>{parameter1}, TNode<Int32T>{tmp0});
    ca_.Branch(tmp1, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<Smi> tmp2;
  TNode<Int32T> tmp3;
  TNode<BoolT> tmp4;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp2 = CodeStubAssembler(state_).SmiFromInt32(TNode<Int32T>{parameter0});
    tmp3 = CodeStubAssembler(state_).SmiToInt32(TNode<Smi>{tmp2});
    tmp4 = CodeStubAssembler(state_).Word32Equal(TNode<Int32T>{parameter0}, TNode<Int32T>{tmp3});
    ca_.Branch(tmp4, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  TNode<String> tmp5;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp5 = CodeStubAssembler(state_).NumberToString(TNode<Number>{tmp2});
    CodeStubAssembler(state_).Return(tmp5);
  }

  TNode<String> tmp6;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp6 = IntToDecimalString_0(state_, TNode<Int32T>{parameter0});
    CodeStubAssembler(state_).Return(tmp6);
  }

  TNode<Int32T> tmp7;
  TNode<BoolT> tmp8;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp7 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x2ull));
    tmp8 = CodeStubAssembler(state_).Int32LessThan(TNode<Int32T>{parameter1}, TNode<Int32T>{tmp7});
    ca_.Branch(tmp8, &block7, std::vector<compiler::Node*>{}, &block8, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp9;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp9 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block9, tmp9);
  }

  TNode<Int32T> tmp10;
  TNode<BoolT> tmp11;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp10 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x24ull));
    tmp11 = CodeStubAssembler(state_).Int32GreaterThan(TNode<Int32T>{parameter1}, TNode<Int32T>{tmp10});
    ca_.Goto(&block9, tmp11);
  }

  TNode<BoolT> phi_bb9_3;
  if (block9.is_used()) {
    ca_.Bind(&block9, &phi_bb9_3);
    ca_.Branch(phi_bb9_3, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  TNode<WasmTrustedInstanceData> tmp12;
  TNode<NativeContext> tmp13;
  TNode<Smi> tmp14;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp12 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp13 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp12});
    tmp14 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kToRadixFormatRange));
    CodeStubAssembler(state_).CallRuntime(Runtime::kThrowRangeError, tmp13, tmp14);
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Uint32T> tmp15;
  TNode<String> tmp16;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp15 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{parameter1});
    tmp16 = IntToString_0(state_, TNode<Int32T>{parameter0}, TNode<Uint32T>{tmp15});
    CodeStubAssembler(state_).Return(tmp16);
  }
}

TF_BUILTIN(WasmStringToDouble, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<String> parameter0 = UncheckedParameter<String>(Descriptor::kS);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<Uint32T> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int31_0(state_, 4);
    tmp1 = CodeStubAssembler(state_).LoadReference<Uint32T>(CodeStubAssembler::Reference{parameter0, tmp0});
    tmp2 = IsIntegerIndex_0(state_, TNode<Uint32T>{tmp1});
    ca_.Branch(tmp2, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  TNode<Uint32T> tmp3;
  TNode<Uint32T> tmp4;
  TNode<BoolT> tmp5;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp3 = ca_.UncheckedCast<Uint32T>(CodeStubAssembler(state_).DecodeWord32<base::BitField<uint32_t, 26, 6, uint32_t>>(ca_.UncheckedCast<Word32T>(tmp1)));
    tmp4 = FromConstexpr_uint32_constexpr_uint32_0(state_, Name::kMaxCachedArrayIndexLength);
    tmp5 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{tmp3}, TNode<Uint32T>{tmp4});
    ca_.Goto(&block5, tmp5);
  }

  TNode<BoolT> tmp6;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp6 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block5, tmp6);
  }

  TNode<BoolT> phi_bb5_3;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_3);
    ca_.Branch(phi_bb5_3, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<Uint32T> tmp7;
  TNode<Int32T> tmp8;
  TNode<Float64T> tmp9;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp7 = DecodeArrayIndexFromHashField_0(state_, TNode<Uint32T>{tmp1});
    tmp8 = CodeStubAssembler(state_).Signed(TNode<Uint32T>{tmp7});
    tmp9 = Convert_float64_int32_0(state_, TNode<Int32T>{tmp8});
    CodeStubAssembler(state_).Return(tmp9);
  }

  TNode<String> tmp10;
  TNode<Float64T> tmp11;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp10 = Flatten_0(state_, TNode<String>{parameter0});
    tmp11 = WasmBuiltinsAssembler(state_).StringToFloat64(TNode<String>{tmp10});
    CodeStubAssembler(state_).Return(tmp11);
  }
}

TF_BUILTIN(WasmStringFromCodePoint, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Uint32T> parameter0 = UncheckedParameter<Uint32T>(Descriptor::kCodePoint);
  USE(parameter0);
  TNode<Smi> parameter1 = UncheckedParameter<Smi>(Descriptor::kShared);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  TNode<Number> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = LoadContextFromFrame_0(state_);
    tmp1 = ca_.CallBuiltin<Number>(Builtin::kWasmUint32ToNumber, TNode<Object>(), parameter0);
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmStringFromCodePoint, tmp0, tmp1, parameter1);
  }
}

TF_BUILTIN(WasmStringHash, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<String> parameter0 = UncheckedParameter<String>(Descriptor::kString);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  TNode<Smi> tmp1;
  TNode<Int32T> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kNoContext_0(state_);
    tmp1 = TORQUE_CAST(CodeStubAssembler(state_).CallRuntime(Runtime::kWasmStringHash, tmp0, parameter0)); 
    tmp2 = CodeStubAssembler(state_).SmiToInt32(TNode<Smi>{tmp1});
    CodeStubAssembler(state_).Return(tmp2);
  }
}

TF_BUILTIN(WasmAnyConvertExtern, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<JSAny> parameter0 = UncheckedParameter<JSAny>(Descriptor::kExternObject);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<NativeContext> tmp1;
  TNode<Smi> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    tmp2 = CodeStubAssembler(state_).SmiConstant(wasm::kWasmAnyRef.raw_bit_field());
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmJSToWasmObject, tmp1, parameter0, tmp2);
  }
}

TF_BUILTIN(WasmAnyConvertExternShared, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<JSAny> parameter0 = UncheckedParameter<JSAny>(Descriptor::kExternObject);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmTrustedInstanceData> tmp0;
  TNode<NativeContext> tmp1;
  TNode<Smi> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadInstanceDataFromFrame();
    tmp1 = WasmBuiltinsAssembler(state_).LoadContextFromInstanceData(TNode<WasmTrustedInstanceData>{tmp0});
    tmp2 = CodeStubAssembler(state_).SmiConstant(wasm::kWasmSharedAnyRef.raw_bit_field());
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmJSToWasmObject, tmp1, parameter0, tmp2);
  }
}

TF_BUILTIN(WasmExternConvertAny, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<HeapObject> parameter0 = UncheckedParameter<HeapObject>(Descriptor::kWasmObject);
  USE(parameter0);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<NativeContext> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = WasmBuiltinsAssembler(state_).LoadContextFromWasmOrJsFrame();
    CodeStubAssembler(state_).TailCallRuntime(Runtime::kWasmExternConvertAny, tmp0, parameter0);
  }
}

TF_BUILTIN(WasmFastApiCallTypeCheckAndUpdateIC, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<WasmFastApiCallData> parameter1 = UncheckedParameter<WasmFastApiCallData>(Descriptor::kData);
  USE(parameter1);
  TNode<JSAny> parameter2 = UncheckedParameter<JSAny>(Descriptor::kReceiver);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSReceiver> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_JSReceiver_1(state_, TNode<Context>{parameter0}, TNode<Object>{parameter2}, &label1);
    ca_.Goto(&block5);
    if (label1.is_used()) {
      ca_.Bind(&label1);
      ca_.Goto(&block6);
    }
  }

  TNode<Smi> tmp2;
  TNode<Smi> tmp3;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp2 = CodeStubAssembler(state_).SmiConstant(CastIfEnumClass<MessageTemplate>(MessageTemplate::kIllegalInvocation));
    tmp3 = Convert_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    CodeStubAssembler(state_).CallRuntime(Runtime::kWasmThrowTypeError, parameter0, tmp2, tmp3);
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> tmp4;
  TNode<HeapObject> tmp5;
  TNode<JSReceiver> tmp6;
  TNode<IntPtrT> tmp7;
  TNode<IntPtrT> tmp8;
  TNode<Map> tmp9;
  TNode<Weak<HeapObject>> tmp10;
  TNode<Smi> tmp11;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp4 = FromConstexpr_intptr_constexpr_int31_0(state_, 4);
    tmp5 = CodeStubAssembler(state_).LoadReference<HeapObject>(CodeStubAssembler::Reference{parameter1, tmp4});
    tmp6 = CallOrConstructBuiltinsAssembler(state_).GetCompatibleReceiver(TNode<JSReceiver>{tmp0}, TNode<HeapObject>{tmp5}, TNode<Context>{parameter0});
    tmp7 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp8 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    tmp9 = CodeStubAssembler(state_).LoadReference<Map>(CodeStubAssembler::Reference{tmp0, tmp8});
    tmp10 = StrongToWeak_Map_0(state_, TNode<Map>{tmp9});
    CodeStubAssembler(state_).StoreReference<Union<Null, Weak<HeapObject>>>(CodeStubAssembler::Reference{parameter1, tmp7}, tmp10);
    tmp11 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    CodeStubAssembler(state_).Return(tmp11);
  }
}

TF_BUILTIN(WasmStringIndexOf, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<String> parameter0 = UncheckedParameter<String>(Descriptor::kS);
  USE(parameter0);
  TNode<String> parameter1 = UncheckedParameter<String>(Descriptor::kSearchString);
  USE(parameter1);
  TNode<Smi> parameter2 = UncheckedParameter<Smi>(Descriptor::kStart);
  USE(parameter2);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Smi> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  TNode<Smi> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<BoolT> tmp5;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = CodeStubAssembler(state_).SmiMax(TNode<Smi>{parameter2}, TNode<Smi>{tmp0});
    tmp2 = CodeStubAssembler(state_).LoadStringLengthAsWord(TNode<String>{parameter1});
    tmp3 = CodeStubAssembler(state_).LoadStringLengthAsWord(TNode<String>{parameter0});
    tmp4 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp5 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{tmp2}, TNode<IntPtrT>{tmp4});
    ca_.Branch(tmp5, &block4, std::vector<compiler::Node*>{}, &block5, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp6;
  TNode<BoolT> tmp7;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp6 = CodeStubAssembler(state_).SmiUntag(TNode<Smi>{tmp1});
    tmp7 = CodeStubAssembler(state_).IntPtrLessThanOrEqual(TNode<IntPtrT>{tmp6}, TNode<IntPtrT>{tmp3});
    ca_.Goto(&block6, tmp7);
  }

  TNode<BoolT> tmp8;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp8 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block6, tmp8);
  }

  TNode<BoolT> phi_bb6_12;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_12);
    ca_.Branch(phi_bb6_12, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    ca_.Goto(&block1, tmp1);
  }

  TNode<IntPtrT> tmp9;
  TNode<IntPtrT> tmp10;
  TNode<BoolT> tmp11;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp9 = CodeStubAssembler(state_).SmiUntag(TNode<Smi>{tmp1});
    tmp10 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp9}, TNode<IntPtrT>{tmp2});
    tmp11 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{tmp10}, TNode<IntPtrT>{tmp3});
    ca_.Branch(tmp11, &block7, std::vector<compiler::Node*>{}, &block8, std::vector<compiler::Node*>{});
  }

  TNode<Smi> tmp12;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp12 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    ca_.Goto(&block1, tmp12);
  }

  TNode<Smi> tmp13;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp13 = TwoStringsToSlices_Smi_AbstractStringIndexOfFunctor_0(state_, TNode<String>{parameter0}, TNode<String>{parameter1}, TorqueStructAbstractStringIndexOfFunctor_0{TNode<Smi>{tmp1}});
    ca_.Goto(&block1, tmp13);
  }

  TNode<Smi> phi_bb1_9;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_9);
    CodeStubAssembler(state_).Return(phi_bb1_9);
  }
}

TF_BUILTIN(WasmLiftoffIsEqRefUnshared, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Object> parameter0 = UncheckedParameter<Object>(Descriptor::kObj);
  USE(parameter0);
  TNode<BoolT> parameter1 = UncheckedParameter<BoolT>(Descriptor::kNullSucceeds);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block33(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block34(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block40(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block39(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT, BoolT> block36(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT, BoolT> block35(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_Smi_0(state_, TNode<Object>{parameter0}, &label1);
    ca_.Goto(&block6);
    if (label1.is_used()) {
      ca_.Bind(&label1);
      ca_.Goto(&block7);
    }
  }

  TNode<BoolT> tmp2;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp2 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block3, tmp2);
  }

  TNode<BoolT> tmp3;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp3 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block3, tmp3);
  }

  TNode<BoolT> phi_bb3_4;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_4);
    ca_.Branch(phi_bb3_4, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<Int32T> tmp4;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp4 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    CodeStubAssembler(state_).Return(tmp4);
  }

  TNode<WasmNull> tmp5;
  TNode<BoolT> tmp6;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp5 = kWasmNull_0(state_);
    tmp6 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{parameter0}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp5});
    ca_.Branch(tmp6, &block8, std::vector<compiler::Node*>{}, &block9, std::vector<compiler::Node*>{});
  }

  TNode<Int32T> tmp7;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp7 = Convert_int32_bool_0(state_, TNode<BoolT>{parameter1});
    CodeStubAssembler(state_).Return(tmp7);
  }

  TNode<HeapObject> tmp8;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    compiler::CodeAssemblerLabel label9(&ca_);
    tmp8 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{parameter0}, &label9);
    ca_.Goto(&block13);
    if (label9.is_used()) {
      ca_.Bind(&label9);
      ca_.Goto(&block14);
    }
  }

  if (block14.is_used()) {
    ca_.Bind(&block14);
    ca_.Goto(&block11);
  }

  TNode<HeapObject> tmp10;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    compiler::CodeAssemblerLabel label11(&ca_);
    tmp10 = Cast_HeapObject_0(state_, TNode<HeapObject>{tmp8}, &label11);
    ca_.Goto(&block15);
    if (label11.is_used()) {
      ca_.Bind(&label11);
      ca_.Goto(&block16);
    }
  }

  if (block16.is_used()) {
    ca_.Bind(&block16);
    ca_.Goto(&block11);
  }

  TNode<BoolT> tmp12;
  TNode<BoolT> tmp13;
  if (block15.is_used()) {
    ca_.Bind(&block15);
    tmp12 = WasmBuiltinsAssembler(state_).InSharedSpace(TNode<HeapObject>{tmp10});
    tmp13 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp12});
    ca_.Branch(tmp13, &block17, std::vector<compiler::Node*>{}, &block18, std::vector<compiler::Node*>{});
  }

  TNode<WasmArray> tmp14;
  if (block17.is_used()) {
    ca_.Bind(&block17);
    compiler::CodeAssemblerLabel label15(&ca_);
    tmp14 = Cast_WasmArray_0(state_, TNode<HeapObject>{tmp10}, &label15);
    ca_.Goto(&block23);
    if (label15.is_used()) {
      ca_.Bind(&label15);
      ca_.Goto(&block24);
    }
  }

  TNode<BoolT> tmp16;
  if (block24.is_used()) {
    ca_.Bind(&block24);
    tmp16 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block20, tmp16);
  }

  TNode<BoolT> tmp17;
  if (block23.is_used()) {
    ca_.Bind(&block23);
    tmp17 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block20, tmp17);
  }

  TNode<BoolT> phi_bb20_6;
  if (block20.is_used()) {
    ca_.Bind(&block20, &phi_bb20_6);
    ca_.Branch(phi_bb20_6, &block25, std::vector<compiler::Node*>{}, &block26, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp18;
  if (block25.is_used()) {
    ca_.Bind(&block25);
    tmp18 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block27, tmp18);
  }

  TNode<WasmStruct> tmp19;
  if (block26.is_used()) {
    ca_.Bind(&block26);
    compiler::CodeAssemblerLabel label20(&ca_);
    tmp19 = Cast_WasmStruct_0(state_, TNode<HeapObject>{tmp10}, &label20);
    ca_.Goto(&block31);
    if (label20.is_used()) {
      ca_.Bind(&label20);
      ca_.Goto(&block32);
    }
  }

  TNode<BoolT> tmp21;
  if (block32.is_used()) {
    ca_.Bind(&block32);
    tmp21 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block28, tmp21);
  }

  TNode<BoolT> tmp22;
  if (block31.is_used()) {
    ca_.Bind(&block31);
    tmp22 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block28, tmp22);
  }

  TNode<BoolT> phi_bb28_7;
  if (block28.is_used()) {
    ca_.Bind(&block28, &phi_bb28_7);
    ca_.Goto(&block27, phi_bb28_7);
  }

  TNode<BoolT> phi_bb27_5;
  if (block27.is_used()) {
    ca_.Bind(&block27, &phi_bb27_5);
    ca_.Branch(phi_bb27_5, &block33, std::vector<compiler::Node*>{phi_bb27_5}, &block34, std::vector<compiler::Node*>{phi_bb27_5});
  }

  TNode<BoolT> phi_bb33_4;
  TNode<BoolT> tmp23;
  if (block33.is_used()) {
    ca_.Bind(&block33, &phi_bb33_4);
    tmp23 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block35, phi_bb33_4, tmp23);
  }

  TNode<BoolT> phi_bb34_4;
  TNode<WasmCustomMap> tmp24;
  if (block34.is_used()) {
    ca_.Bind(&block34, &phi_bb34_4);
    compiler::CodeAssemblerLabel label25(&ca_);
    tmp24 = Cast_WasmCustomMap_0(state_, TNode<HeapObject>{tmp10}, &label25);
    ca_.Goto(&block39, phi_bb34_4);
    if (label25.is_used()) {
      ca_.Bind(&label25);
      ca_.Goto(&block40, phi_bb34_4);
    }
  }

  TNode<BoolT> phi_bb40_4;
  TNode<BoolT> tmp26;
  if (block40.is_used()) {
    ca_.Bind(&block40, &phi_bb40_4);
    tmp26 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block36, phi_bb40_4, tmp26);
  }

  TNode<BoolT> phi_bb39_4;
  TNode<BoolT> tmp27;
  if (block39.is_used()) {
    ca_.Bind(&block39, &phi_bb39_4);
    tmp27 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block36, phi_bb39_4, tmp27);
  }

  TNode<BoolT> phi_bb36_4;
  TNode<BoolT> phi_bb36_7;
  if (block36.is_used()) {
    ca_.Bind(&block36, &phi_bb36_4, &phi_bb36_7);
    ca_.Goto(&block35, phi_bb36_4, phi_bb36_7);
  }

  TNode<BoolT> phi_bb35_4;
  TNode<BoolT> phi_bb35_5;
  if (block35.is_used()) {
    ca_.Bind(&block35, &phi_bb35_4, &phi_bb35_5);
    ca_.Goto(&block19, phi_bb35_5);
  }

  TNode<BoolT> tmp28;
  if (block18.is_used()) {
    ca_.Bind(&block18);
    tmp28 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block19, tmp28);
  }

  TNode<BoolT> phi_bb19_4;
  TNode<Int32T> tmp29;
  if (block19.is_used()) {
    ca_.Bind(&block19, &phi_bb19_4);
    tmp29 = Convert_int32_bool_0(state_, TNode<BoolT>{phi_bb19_4});
    CodeStubAssembler(state_).Return(tmp29);
  }

  TNode<Int32T> tmp30;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp30 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    CodeStubAssembler(state_).Return(tmp30);
  }
}

TF_BUILTIN(WasmLiftoffIsArrayRefUnshared, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Object> parameter0 = UncheckedParameter<Object>(Descriptor::kObj);
  USE(parameter0);
  TNode<BoolT> parameter1 = UncheckedParameter<BoolT>(Descriptor::kNullSucceeds);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmNull> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kWasmNull_0(state_);
    tmp1 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{parameter0}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp0});
    ca_.Branch(tmp1, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<Int32T> tmp2;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp2 = Convert_int32_bool_0(state_, TNode<BoolT>{parameter1});
    CodeStubAssembler(state_).Return(tmp2);
  }

  TNode<HeapObject> tmp3;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    compiler::CodeAssemblerLabel label4(&ca_);
    tmp3 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{parameter0}, &label4);
    ca_.Goto(&block6);
    if (label4.is_used()) {
      ca_.Bind(&label4);
      ca_.Goto(&block7);
    }
  }

  if (block7.is_used()) {
    ca_.Bind(&block7);
    ca_.Goto(&block4);
  }

  TNode<HeapObject> tmp5;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    compiler::CodeAssemblerLabel label6(&ca_);
    tmp5 = Cast_HeapObject_0(state_, TNode<HeapObject>{tmp3}, &label6);
    ca_.Goto(&block8);
    if (label6.is_used()) {
      ca_.Bind(&label6);
      ca_.Goto(&block9);
    }
  }

  if (block9.is_used()) {
    ca_.Bind(&block9);
    ca_.Goto(&block4);
  }

  TNode<BoolT> tmp7;
  TNode<BoolT> tmp8;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp7 = WasmBuiltinsAssembler(state_).InSharedSpace(TNode<HeapObject>{tmp5});
    tmp8 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp7});
    ca_.Branch(tmp8, &block10, std::vector<compiler::Node*>{}, &block11, std::vector<compiler::Node*>{});
  }

  TNode<WasmArray> tmp9;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    compiler::CodeAssemblerLabel label10(&ca_);
    tmp9 = Cast_WasmArray_0(state_, TNode<HeapObject>{tmp5}, &label10);
    ca_.Goto(&block16);
    if (label10.is_used()) {
      ca_.Bind(&label10);
      ca_.Goto(&block17);
    }
  }

  TNode<BoolT> tmp11;
  if (block17.is_used()) {
    ca_.Bind(&block17);
    tmp11 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block13, tmp11);
  }

  TNode<BoolT> tmp12;
  if (block16.is_used()) {
    ca_.Bind(&block16);
    tmp12 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block13, tmp12);
  }

  TNode<BoolT> phi_bb13_6;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_6);
    ca_.Goto(&block12, phi_bb13_6);
  }

  TNode<BoolT> tmp13;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp13 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block12, tmp13);
  }

  TNode<BoolT> phi_bb12_4;
  TNode<Int32T> tmp14;
  if (block12.is_used()) {
    ca_.Bind(&block12, &phi_bb12_4);
    tmp14 = Convert_int32_bool_0(state_, TNode<BoolT>{phi_bb12_4});
    CodeStubAssembler(state_).Return(tmp14);
  }

  TNode<Int32T> tmp15;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp15 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    CodeStubAssembler(state_).Return(tmp15);
  }
}

TF_BUILTIN(WasmLiftoffIsStructRefUnshared, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Object> parameter0 = UncheckedParameter<Object>(Descriptor::kObj);
  USE(parameter0);
  TNode<BoolT> parameter1 = UncheckedParameter<BoolT>(Descriptor::kNullSucceeds);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmNull> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kWasmNull_0(state_);
    tmp1 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{parameter0}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp0});
    ca_.Branch(tmp1, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<Int32T> tmp2;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp2 = Convert_int32_bool_0(state_, TNode<BoolT>{parameter1});
    CodeStubAssembler(state_).Return(tmp2);
  }

  TNode<HeapObject> tmp3;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    compiler::CodeAssemblerLabel label4(&ca_);
    tmp3 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{parameter0}, &label4);
    ca_.Goto(&block6);
    if (label4.is_used()) {
      ca_.Bind(&label4);
      ca_.Goto(&block7);
    }
  }

  if (block7.is_used()) {
    ca_.Bind(&block7);
    ca_.Goto(&block4);
  }

  TNode<HeapObject> tmp5;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    compiler::CodeAssemblerLabel label6(&ca_);
    tmp5 = Cast_HeapObject_0(state_, TNode<HeapObject>{tmp3}, &label6);
    ca_.Goto(&block8);
    if (label6.is_used()) {
      ca_.Bind(&label6);
      ca_.Goto(&block9);
    }
  }

  if (block9.is_used()) {
    ca_.Bind(&block9);
    ca_.Goto(&block4);
  }

  TNode<BoolT> tmp7;
  TNode<BoolT> tmp8;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp7 = WasmBuiltinsAssembler(state_).InSharedSpace(TNode<HeapObject>{tmp5});
    tmp8 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp7});
    ca_.Branch(tmp8, &block10, std::vector<compiler::Node*>{}, &block11, std::vector<compiler::Node*>{});
  }

  TNode<WasmStruct> tmp9;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    compiler::CodeAssemblerLabel label10(&ca_);
    tmp9 = Cast_WasmStruct_0(state_, TNode<HeapObject>{tmp5}, &label10);
    ca_.Goto(&block16);
    if (label10.is_used()) {
      ca_.Bind(&label10);
      ca_.Goto(&block17);
    }
  }

  TNode<BoolT> tmp11;
  if (block17.is_used()) {
    ca_.Bind(&block17);
    tmp11 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block13, tmp11);
  }

  TNode<BoolT> tmp12;
  if (block16.is_used()) {
    ca_.Bind(&block16);
    tmp12 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block13, tmp12);
  }

  TNode<BoolT> phi_bb13_6;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_6);
    ca_.Branch(phi_bb13_6, &block18, std::vector<compiler::Node*>{}, &block19, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp13;
  if (block18.is_used()) {
    ca_.Bind(&block18);
    tmp13 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block20, tmp13);
  }

  TNode<WasmCustomMap> tmp14;
  if (block19.is_used()) {
    ca_.Bind(&block19);
    compiler::CodeAssemblerLabel label15(&ca_);
    tmp14 = Cast_WasmCustomMap_0(state_, TNode<HeapObject>{tmp5}, &label15);
    ca_.Goto(&block24);
    if (label15.is_used()) {
      ca_.Bind(&label15);
      ca_.Goto(&block25);
    }
  }

  TNode<BoolT> tmp16;
  if (block25.is_used()) {
    ca_.Bind(&block25);
    tmp16 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block21, tmp16);
  }

  TNode<BoolT> tmp17;
  if (block24.is_used()) {
    ca_.Bind(&block24);
    tmp17 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block21, tmp17);
  }

  TNode<BoolT> phi_bb21_7;
  if (block21.is_used()) {
    ca_.Bind(&block21, &phi_bb21_7);
    ca_.Goto(&block20, phi_bb21_7);
  }

  TNode<BoolT> phi_bb20_5;
  if (block20.is_used()) {
    ca_.Bind(&block20, &phi_bb20_5);
    ca_.Goto(&block12, phi_bb20_5);
  }

  TNode<BoolT> tmp18;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp18 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block12, tmp18);
  }

  TNode<BoolT> phi_bb12_4;
  TNode<Int32T> tmp19;
  if (block12.is_used()) {
    ca_.Bind(&block12, &phi_bb12_4);
    tmp19 = Convert_int32_bool_0(state_, TNode<BoolT>{phi_bb12_4});
    CodeStubAssembler(state_).Return(tmp19);
  }

  TNode<Int32T> tmp20;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp20 = FromConstexpr_int32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    CodeStubAssembler(state_).Return(tmp20);
  }
}

TF_BUILTIN(WasmLiftoffCastEqRefUnshared, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Object> parameter0 = UncheckedParameter<Object>(Descriptor::kObj);
  USE(parameter0);
  TNode<BoolT> parameter1 = UncheckedParameter<BoolT>(Descriptor::kNullSucceeds);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block34(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block33(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block30(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block35(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block42(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block41(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block38(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block36(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block37(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block43(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block50(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block49(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT, BoolT> block46(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block44(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT, BoolT> block45(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Smi> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_Smi_0(state_, TNode<Object>{parameter0}, &label1);
    ca_.Goto(&block6);
    if (label1.is_used()) {
      ca_.Bind(&label1);
      ca_.Goto(&block7);
    }
  }

  TNode<BoolT> tmp2;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp2 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block3, tmp2);
  }

  TNode<BoolT> tmp3;
  if (block6.is_used()) {
    ca_.Bind(&block6);
    tmp3 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block3, tmp3);
  }

  TNode<BoolT> phi_bb3_4;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_4);
    ca_.Branch(phi_bb3_4, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  TNode<Smi> tmp4;
  if (block1.is_used()) {
    ca_.Bind(&block1);
    tmp4 = SmiConstant_0(state_, IntegerLiteral(false, 0x0ull));
    CodeStubAssembler(state_).Return(tmp4);
  }

  TNode<WasmNull> tmp5;
  TNode<BoolT> tmp6;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp5 = kWasmNull_0(state_);
    tmp6 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{parameter0}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp5});
    ca_.Branch(tmp6, &block10, std::vector<compiler::Node*>{}, &block11, std::vector<compiler::Node*>{});
  }

  if (block10.is_used()) {
    ca_.Bind(&block10);
    ca_.Branch(parameter1, &block12, std::vector<compiler::Node*>{}, &block13, std::vector<compiler::Node*>{});
  }

  TNode<Smi> tmp7;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    tmp7 = SmiConstant_0(state_, IntegerLiteral(false, 0x0ull));
    CodeStubAssembler(state_).Return(tmp7);
  }

  if (block13.is_used()) {
    ca_.Bind(&block13);
    ca_.Goto(&block9);
  }

  TNode<HeapObject> tmp8;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    compiler::CodeAssemblerLabel label9(&ca_);
    tmp8 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{parameter0}, &label9);
    ca_.Goto(&block21);
    if (label9.is_used()) {
      ca_.Bind(&label9);
      ca_.Goto(&block22);
    }
  }

  if (block22.is_used()) {
    ca_.Bind(&block22);
    ca_.Goto(&block19);
  }

  TNode<HeapObject> tmp10;
  if (block21.is_used()) {
    ca_.Bind(&block21);
    compiler::CodeAssemblerLabel label11(&ca_);
    tmp10 = Cast_HeapObject_0(state_, TNode<HeapObject>{tmp8}, &label11);
    ca_.Goto(&block23);
    if (label11.is_used()) {
      ca_.Bind(&label11);
      ca_.Goto(&block24);
    }
  }

  if (block24.is_used()) {
    ca_.Bind(&block24);
    ca_.Goto(&block19);
  }

  TNode<BoolT> tmp12;
  if (block23.is_used()) {
    ca_.Bind(&block23);
    tmp12 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block17, tmp12);
  }

  TNode<BoolT> tmp13;
  if (block19.is_used()) {
    ca_.Bind(&block19);
    tmp13 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block17, tmp13);
  }

  TNode<BoolT> phi_bb17_6;
  if (block17.is_used()) {
    ca_.Bind(&block17, &phi_bb17_6);
    ca_.Branch(phi_bb17_6, &block15, std::vector<compiler::Node*>{}, &block16, std::vector<compiler::Node*>{});
  }

  if (block16.is_used()) {
    ca_.Bind(&block16);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/cast.tq", 1025});
      CodeStubAssembler(state_).FailAssert("Torque assert 'Is<A>(o)' failed", pos_stack);
    }
  }

  TNode<HeapObject> tmp14;
  TNode<BoolT> tmp15;
  if (block15.is_used()) {
    ca_.Bind(&block15);
    tmp14 = TORQUE_CAST(TNode<Object>{parameter0});
    tmp15 = WasmBuiltinsAssembler(state_).InSharedSpace(TNode<HeapObject>{tmp14});
    ca_.Branch(tmp15, &block27, std::vector<compiler::Node*>{}, &block28, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp16;
  if (block27.is_used()) {
    ca_.Bind(&block27);
    tmp16 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block29, tmp16);
  }

  TNode<WasmArray> tmp17;
  if (block28.is_used()) {
    ca_.Bind(&block28);
    compiler::CodeAssemblerLabel label18(&ca_);
    tmp17 = Cast_WasmArray_0(state_, TNode<HeapObject>{tmp14}, &label18);
    ca_.Goto(&block33);
    if (label18.is_used()) {
      ca_.Bind(&label18);
      ca_.Goto(&block34);
    }
  }

  TNode<BoolT> tmp19;
  if (block34.is_used()) {
    ca_.Bind(&block34);
    tmp19 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block30, tmp19);
  }

  TNode<BoolT> tmp20;
  if (block33.is_used()) {
    ca_.Bind(&block33);
    tmp20 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block30, tmp20);
  }

  TNode<BoolT> phi_bb30_6;
  TNode<BoolT> tmp21;
  if (block30.is_used()) {
    ca_.Bind(&block30, &phi_bb30_6);
    tmp21 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{phi_bb30_6});
    ca_.Branch(tmp21, &block35, std::vector<compiler::Node*>{}, &block36, std::vector<compiler::Node*>{});
  }

  TNode<WasmStruct> tmp22;
  if (block35.is_used()) {
    ca_.Bind(&block35);
    compiler::CodeAssemblerLabel label23(&ca_);
    tmp22 = Cast_WasmStruct_0(state_, TNode<HeapObject>{tmp14}, &label23);
    ca_.Goto(&block41);
    if (label23.is_used()) {
      ca_.Bind(&label23);
      ca_.Goto(&block42);
    }
  }

  TNode<BoolT> tmp24;
  if (block42.is_used()) {
    ca_.Bind(&block42);
    tmp24 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block38, tmp24);
  }

  TNode<BoolT> tmp25;
  if (block41.is_used()) {
    ca_.Bind(&block41);
    tmp25 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block38, tmp25);
  }

  TNode<BoolT> phi_bb38_7;
  TNode<BoolT> tmp26;
  if (block38.is_used()) {
    ca_.Bind(&block38, &phi_bb38_7);
    tmp26 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{phi_bb38_7});
    ca_.Goto(&block37, tmp26);
  }

  TNode<BoolT> tmp27;
  if (block36.is_used()) {
    ca_.Bind(&block36);
    tmp27 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block37, tmp27);
  }

  TNode<BoolT> phi_bb37_5;
  if (block37.is_used()) {
    ca_.Bind(&block37, &phi_bb37_5);
    ca_.Branch(phi_bb37_5, &block43, std::vector<compiler::Node*>{phi_bb37_5}, &block44, std::vector<compiler::Node*>{phi_bb37_5});
  }

  TNode<BoolT> phi_bb43_4;
  TNode<WasmCustomMap> tmp28;
  if (block43.is_used()) {
    ca_.Bind(&block43, &phi_bb43_4);
    compiler::CodeAssemblerLabel label29(&ca_);
    tmp28 = Cast_WasmCustomMap_0(state_, TNode<HeapObject>{tmp14}, &label29);
    ca_.Goto(&block49, phi_bb43_4);
    if (label29.is_used()) {
      ca_.Bind(&label29);
      ca_.Goto(&block50, phi_bb43_4);
    }
  }

  TNode<BoolT> phi_bb50_4;
  TNode<BoolT> tmp30;
  if (block50.is_used()) {
    ca_.Bind(&block50, &phi_bb50_4);
    tmp30 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block46, phi_bb50_4, tmp30);
  }

  TNode<BoolT> phi_bb49_4;
  TNode<BoolT> tmp31;
  if (block49.is_used()) {
    ca_.Bind(&block49, &phi_bb49_4);
    tmp31 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block46, phi_bb49_4, tmp31);
  }

  TNode<BoolT> phi_bb46_4;
  TNode<BoolT> phi_bb46_7;
  TNode<BoolT> tmp32;
  if (block46.is_used()) {
    ca_.Bind(&block46, &phi_bb46_4, &phi_bb46_7);
    tmp32 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{phi_bb46_7});
    ca_.Goto(&block45, phi_bb46_4, tmp32);
  }

  TNode<BoolT> phi_bb44_4;
  TNode<BoolT> tmp33;
  if (block44.is_used()) {
    ca_.Bind(&block44, &phi_bb44_4);
    tmp33 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block45, phi_bb44_4, tmp33);
  }

  TNode<BoolT> phi_bb45_4;
  TNode<BoolT> phi_bb45_5;
  if (block45.is_used()) {
    ca_.Bind(&block45, &phi_bb45_4, &phi_bb45_5);
    ca_.Goto(&block29, phi_bb45_5);
  }

  TNode<BoolT> phi_bb29_4;
  if (block29.is_used()) {
    ca_.Bind(&block29, &phi_bb29_4);
    ca_.Branch(phi_bb29_4, &block25, std::vector<compiler::Node*>{}, &block26, std::vector<compiler::Node*>{});
  }

  if (block25.is_used()) {
    ca_.Bind(&block25);
    ca_.Goto(&block9);
  }

  TNode<Smi> tmp34;
  if (block26.is_used()) {
    ca_.Bind(&block26);
    tmp34 = SmiConstant_0(state_, IntegerLiteral(false, 0x0ull));
    CodeStubAssembler(state_).Return(tmp34);
  }

  if (block9.is_used()) {
    ca_.Bind(&block9);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapIllegalCast, TNode<Object>());
  }
}

TF_BUILTIN(WasmLiftoffCastArrayRefUnshared, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Object> parameter0 = UncheckedParameter<Object>(Descriptor::kObj);
  USE(parameter0);
  TNode<BoolT> parameter1 = UncheckedParameter<BoolT>(Descriptor::kNullSucceeds);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmNull> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kWasmNull_0(state_);
    tmp1 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{parameter0}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp0});
    ca_.Branch(tmp1, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    ca_.Branch(parameter1, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  TNode<Smi> tmp2;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp2 = SmiConstant_0(state_, IntegerLiteral(false, 0x0ull));
    CodeStubAssembler(state_).Return(tmp2);
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    ca_.Goto(&block2);
  }

  TNode<HeapObject> tmp3;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    compiler::CodeAssemblerLabel label4(&ca_);
    tmp3 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{parameter0}, &label4);
    ca_.Goto(&block8);
    if (label4.is_used()) {
      ca_.Bind(&label4);
      ca_.Goto(&block9);
    }
  }

  if (block9.is_used()) {
    ca_.Bind(&block9);
    ca_.Goto(&block2);
  }

  TNode<HeapObject> tmp5;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    compiler::CodeAssemblerLabel label6(&ca_);
    tmp5 = Cast_HeapObject_0(state_, TNode<HeapObject>{tmp3}, &label6);
    ca_.Goto(&block10);
    if (label6.is_used()) {
      ca_.Bind(&label6);
      ca_.Goto(&block11);
    }
  }

  if (block11.is_used()) {
    ca_.Bind(&block11);
    ca_.Goto(&block2);
  }

  TNode<BoolT> tmp7;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp7 = WasmBuiltinsAssembler(state_).InSharedSpace(TNode<HeapObject>{tmp5});
    ca_.Branch(tmp7, &block14, std::vector<compiler::Node*>{}, &block15, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp8;
  if (block14.is_used()) {
    ca_.Bind(&block14);
    tmp8 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block16, tmp8);
  }

  TNode<WasmArray> tmp9;
  if (block15.is_used()) {
    ca_.Bind(&block15);
    compiler::CodeAssemblerLabel label10(&ca_);
    tmp9 = Cast_WasmArray_0(state_, TNode<HeapObject>{tmp5}, &label10);
    ca_.Goto(&block20);
    if (label10.is_used()) {
      ca_.Bind(&label10);
      ca_.Goto(&block21);
    }
  }

  TNode<BoolT> tmp11;
  if (block21.is_used()) {
    ca_.Bind(&block21);
    tmp11 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block17, tmp11);
  }

  TNode<BoolT> tmp12;
  if (block20.is_used()) {
    ca_.Bind(&block20);
    tmp12 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block17, tmp12);
  }

  TNode<BoolT> phi_bb17_6;
  TNode<BoolT> tmp13;
  if (block17.is_used()) {
    ca_.Bind(&block17, &phi_bb17_6);
    tmp13 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{phi_bb17_6});
    ca_.Goto(&block16, tmp13);
  }

  TNode<BoolT> phi_bb16_4;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_4);
    ca_.Branch(phi_bb16_4, &block12, std::vector<compiler::Node*>{}, &block13, std::vector<compiler::Node*>{});
  }

  if (block12.is_used()) {
    ca_.Bind(&block12);
    ca_.Goto(&block2);
  }

  TNode<Smi> tmp14;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    tmp14 = SmiConstant_0(state_, IntegerLiteral(false, 0x0ull));
    CodeStubAssembler(state_).Return(tmp14);
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapIllegalCast, TNode<Object>());
  }
}

TF_BUILTIN(WasmLiftoffCastStructRefUnshared, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Object> parameter0 = UncheckedParameter<Object>(Descriptor::kObj);
  USE(parameter0);
  TNode<BoolT> parameter1 = UncheckedParameter<BoolT>(Descriptor::kNullSucceeds);
  USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmNull> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kWasmNull_0(state_);
    tmp1 = CodeStubAssembler(state_).TaggedEqual(TNode<Object>{parameter0}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp0});
    ca_.Branch(tmp1, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    ca_.Branch(parameter1, &block5, std::vector<compiler::Node*>{}, &block6, std::vector<compiler::Node*>{});
  }

  TNode<Smi> tmp2;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp2 = SmiConstant_0(state_, IntegerLiteral(false, 0x0ull));
    CodeStubAssembler(state_).Return(tmp2);
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    ca_.Goto(&block2);
  }

  TNode<HeapObject> tmp3;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    compiler::CodeAssemblerLabel label4(&ca_);
    tmp3 = CodeStubAssembler(state_).TaggedToHeapObject(TNode<Object>{parameter0}, &label4);
    ca_.Goto(&block8);
    if (label4.is_used()) {
      ca_.Bind(&label4);
      ca_.Goto(&block9);
    }
  }

  if (block9.is_used()) {
    ca_.Bind(&block9);
    ca_.Goto(&block2);
  }

  TNode<HeapObject> tmp5;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    compiler::CodeAssemblerLabel label6(&ca_);
    tmp5 = Cast_HeapObject_0(state_, TNode<HeapObject>{tmp3}, &label6);
    ca_.Goto(&block10);
    if (label6.is_used()) {
      ca_.Bind(&label6);
      ca_.Goto(&block11);
    }
  }

  if (block11.is_used()) {
    ca_.Bind(&block11);
    ca_.Goto(&block2);
  }

  TNode<BoolT> tmp7;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp7 = WasmBuiltinsAssembler(state_).InSharedSpace(TNode<HeapObject>{tmp5});
    ca_.Branch(tmp7, &block14, std::vector<compiler::Node*>{}, &block15, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp8;
  if (block14.is_used()) {
    ca_.Bind(&block14);
    tmp8 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block16, tmp8);
  }

  TNode<WasmStruct> tmp9;
  if (block15.is_used()) {
    ca_.Bind(&block15);
    compiler::CodeAssemblerLabel label10(&ca_);
    tmp9 = Cast_WasmStruct_0(state_, TNode<HeapObject>{tmp5}, &label10);
    ca_.Goto(&block20);
    if (label10.is_used()) {
      ca_.Bind(&label10);
      ca_.Goto(&block21);
    }
  }

  TNode<BoolT> tmp11;
  if (block21.is_used()) {
    ca_.Bind(&block21);
    tmp11 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block17, tmp11);
  }

  TNode<BoolT> tmp12;
  if (block20.is_used()) {
    ca_.Bind(&block20);
    tmp12 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block17, tmp12);
  }

  TNode<BoolT> phi_bb17_6;
  TNode<BoolT> tmp13;
  if (block17.is_used()) {
    ca_.Bind(&block17, &phi_bb17_6);
    tmp13 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{phi_bb17_6});
    ca_.Branch(tmp13, &block22, std::vector<compiler::Node*>{}, &block23, std::vector<compiler::Node*>{});
  }

  TNode<WasmCustomMap> tmp14;
  if (block22.is_used()) {
    ca_.Bind(&block22);
    compiler::CodeAssemblerLabel label15(&ca_);
    tmp14 = Cast_WasmCustomMap_0(state_, TNode<HeapObject>{tmp5}, &label15);
    ca_.Goto(&block28);
    if (label15.is_used()) {
      ca_.Bind(&label15);
      ca_.Goto(&block29);
    }
  }

  TNode<BoolT> tmp16;
  if (block29.is_used()) {
    ca_.Bind(&block29);
    tmp16 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block25, tmp16);
  }

  TNode<BoolT> tmp17;
  if (block28.is_used()) {
    ca_.Bind(&block28);
    tmp17 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block25, tmp17);
  }

  TNode<BoolT> phi_bb25_7;
  TNode<BoolT> tmp18;
  if (block25.is_used()) {
    ca_.Bind(&block25, &phi_bb25_7);
    tmp18 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{phi_bb25_7});
    ca_.Goto(&block24, tmp18);
  }

  TNode<BoolT> tmp19;
  if (block23.is_used()) {
    ca_.Bind(&block23);
    tmp19 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block24, tmp19);
  }

  TNode<BoolT> phi_bb24_5;
  if (block24.is_used()) {
    ca_.Bind(&block24, &phi_bb24_5);
    ca_.Goto(&block16, phi_bb24_5);
  }

  TNode<BoolT> phi_bb16_4;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_4);
    ca_.Branch(phi_bb16_4, &block12, std::vector<compiler::Node*>{}, &block13, std::vector<compiler::Node*>{});
  }

  if (block12.is_used()) {
    ca_.Bind(&block12);
    ca_.Goto(&block2);
  }

  TNode<Smi> tmp20;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    tmp20 = SmiConstant_0(state_, IntegerLiteral(false, 0x0ull));
    CodeStubAssembler(state_).Return(tmp20);
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
   CodeStubAssembler(state_).TailCallBuiltin(Builtin::kThrowWasmTrapIllegalCast, TNode<Object>());
  }
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=367&c=9
TNode<BoolT> Is_WasmFuncRef_HeapObject_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<HeapObject> p_o) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmFuncRef> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_WasmFuncRef_0(state_, TNode<HeapObject>{p_o}, &label1);
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

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=393&c=32
TNode<BoolT> Is_WasmFuncRef_WasmFuncRef_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<WasmFuncRef> p_o) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmFuncRef> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_WasmFuncRef_0(state_, TNode<HeapObject>{p_o}, &label1);
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

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=574&c=7
TNode<IntPtrT> Convert_intptr_constexpr_int32_0(compiler::CodeAssemblerState* state_, int32_t p_i) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_int32_0(state_, p_i);
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TNode<IntPtrT>{tmp0};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=662&c=20
TNode<WasmArray> UnsafeCast_WasmArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<Object> p_o) {
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
    tmp0 = Is_WasmArray_Object_0(state_, TNode<Context>{p_context}, TNode<Object>{p_o});
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

  TNode<WasmArray> tmp1;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp1 = TORQUE_CAST(TNode<Object>{p_o});
    ca_.Goto(&block4);
  }

    ca_.Bind(&block4);
  return TNode<WasmArray>{tmp1};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=1081&c=12
TNode<Union<SeqTwoByteString, String>> AllocateSeqTwoByteString_SliceIterator_char16_ConstReference_char16_0(compiler::CodeAssemblerState* state_, TNode<Uint32T> p_length, TorqueStructSliceIterator_char16_ConstReference_char16_0 p_content) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<SeqTwoByteString, String>> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Uint32T> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{p_length}, TNode<Uint32T>{tmp0});
    ca_.Branch(tmp1, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  TNode<String> tmp2;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp2 = kEmptyString_0(state_);
    ca_.Goto(&block1, tmp2);
  }

  TNode<SeqTwoByteString> tmp3;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp3 = AllocateNonEmptySeqTwoByteString_SliceIterator_char16_ConstReference_char16_0(state_, TNode<Uint32T>{p_length}, TorqueStructSliceIterator_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{p_content.object}, TNode<IntPtrT>{p_content.start}, TNode<IntPtrT>{p_content.end}, TorqueStructUnsafe_0{}});
    ca_.Goto(&block1, tmp3);
  }

  TNode<Union<SeqTwoByteString, String>> phi_bb1_4;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_4);
    ca_.Goto(&block4);
  }

    ca_.Bind(&block4);
  return TNode<Union<SeqTwoByteString, String>>{phi_bb1_4};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=1085&c=10
TNode<SeqOneByteString> AllocateNonEmptySeqOneByteString_TwoByteToOneByteIterator_0(compiler::CodeAssemblerState* state_, TNode<Uint32T> p_length, TorqueStructTwoByteToOneByteIterator_0 p_content) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Uint32T> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{p_length}, TNode<Uint32T>{tmp0});
    ca_.Branch(tmp1, &block4, std::vector<compiler::Node*>{}, &block5, std::vector<compiler::Node*>{});
  }

  TNode<Uint32T> tmp2;
  TNode<BoolT> tmp3;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp2 = FromConstexpr_uint32_constexpr_int31_0(state_, String::kMaxLength);
    tmp3 = CodeStubAssembler(state_).Uint32LessThanOrEqual(TNode<Uint32T>{p_length}, TNode<Uint32T>{tmp2});
    ca_.Goto(&block6, tmp3);
  }

  TNode<BoolT> tmp4;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp4 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block6, tmp4);
  }

  TNode<BoolT> phi_bb6_5;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_5);
    ca_.Branch(phi_bb6_5, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/objects/string.tq", 169});
      CodeStubAssembler(state_).FailAssert("Torque assert 'length != 0 && length <= kStringMaxLength' failed", pos_stack);
    }
  }

  TNode<Map> tmp5;
  TNode<Uint32T> tmp6;
  TNode<Int32T> tmp7;
  TNode<IntPtrT> tmp8;
  TNode<IntPtrT> tmp9;
  TNode<IntPtrT> tmp10;
  TNode<IntPtrT> tmp11;
  TNode<BoolT> tmp12;
  TNode<BoolT> tmp13;
  TNode<HeapObject> tmp14;
  TNode<IntPtrT> tmp15;
  TNode<IntPtrT> tmp16;
  TNode<IntPtrT> tmp17;
  TNode<IntPtrT> tmp18;
  TNode<SeqOneByteString> tmp19;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp5 = kSeqOneByteStringMap_0(state_);
    tmp6 = kNameEmptyHashField_0(state_);
    tmp7 = CodeStubAssembler(state_).Signed(TNode<Uint32T>{p_length});
    tmp8 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp7});
    tmp9 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp10 = AddIndexedFieldSizeToObjectSize_0(state_, TNode<IntPtrT>{tmp9}, TNode<IntPtrT>{tmp8}, CastIfEnumClass<int32_t>(kUInt8Size));
    tmp11 = AlignTagged_0(state_, TNode<IntPtrT>{tmp10});
    tmp12 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    tmp13 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    tmp14 = AllocateFromNew_0(state_, TNode<IntPtrT>{tmp11}, TNode<Map>{tmp5}, TNode<BoolT>{tmp12}, TNode<BoolT>{tmp13});
    tmp15 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    CodeStubAssembler(state_).StoreReference<Map>(CodeStubAssembler::Reference{tmp14, tmp15}, tmp5);
    tmp16 = FromConstexpr_intptr_constexpr_int31_0(state_, 4);
    CodeStubAssembler(state_).StoreReference<Uint32T>(CodeStubAssembler::Reference{tmp14, tmp16}, tmp6);
    tmp17 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    CodeStubAssembler(state_).StoreReference<Int32T>(CodeStubAssembler::Reference{tmp14, tmp17}, tmp7);
    tmp18 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    InitializeFieldsFromIterator_char8_TwoByteToOneByteIterator_0(state_, TorqueStructSlice_char8_MutableReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp14}, TNode<IntPtrT>{tmp18}, TNode<IntPtrT>{tmp8}, TorqueStructUnsafe_0{}}, TorqueStructTwoByteToOneByteIterator_0{TNode<Union<HeapObject, TaggedIndex>>{p_content.object}, TNode<IntPtrT>{p_content.start}, TNode<IntPtrT>{p_content.end}});
    tmp19 = TORQUE_CAST(TNode<HeapObject>{tmp14});
    ca_.Goto(&block7);
  }

    ca_.Bind(&block7);
  return TNode<SeqOneByteString>{tmp19};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=1119&c=26
TorqueStructSlice_char16_ConstReference_char16_0 NewConstSlice_char16_0(compiler::CodeAssemblerState* state_, TNode<Union<HeapObject, TaggedIndex>> p_object, TNode<IntPtrT> p_offset, TNode<IntPtrT> p_length) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Union<HeapObject, TaggedIndex>> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    std::tie(tmp0, tmp1, tmp2) = (TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{p_object}, TNode<IntPtrT>{p_offset}, TNode<IntPtrT>{p_length}, TorqueStructUnsafe_0{}}).Flatten();
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{tmp0}, TNode<IntPtrT>{tmp1}, TNode<IntPtrT>{tmp2}, TorqueStructUnsafe_0{}};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=1234&c=26
TorqueStructSlice_char16_MutableReference_char16_0 NewMutableSlice_char16_0(compiler::CodeAssemblerState* state_, TNode<Union<HeapObject, TaggedIndex>> p_object, TNode<IntPtrT> p_offset, TNode<IntPtrT> p_length) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Union<HeapObject, TaggedIndex>> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    std::tie(tmp0, tmp1, tmp2) = (TorqueStructSlice_char16_MutableReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{p_object}, TNode<IntPtrT>{p_offset}, TNode<IntPtrT>{p_length}, TorqueStructUnsafe_0{}}).Flatten();
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TorqueStructSlice_char16_MutableReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{tmp0}, TNode<IntPtrT>{tmp1}, TNode<IntPtrT>{tmp2}, TorqueStructUnsafe_0{}};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=1243&c=39
TNode<Uint16T> Convert_uint16_char8_0(compiler::CodeAssemblerState* state_, TNode<Uint8T> p_i) {
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
  return TNode<Uint16T>{p_i};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=1461&c=11
TNode<SeqOneByteString> AllocateNonEmptySeqOneByteString_SliceIterator_char8_ConstReference_char8_0(compiler::CodeAssemblerState* state_, TNode<Uint32T> p_length, TorqueStructSliceIterator_char8_ConstReference_char8_0 p_content) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Uint32T> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{p_length}, TNode<Uint32T>{tmp0});
    ca_.Branch(tmp1, &block4, std::vector<compiler::Node*>{}, &block5, std::vector<compiler::Node*>{});
  }

  TNode<Uint32T> tmp2;
  TNode<BoolT> tmp3;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp2 = FromConstexpr_uint32_constexpr_int31_0(state_, String::kMaxLength);
    tmp3 = CodeStubAssembler(state_).Uint32LessThanOrEqual(TNode<Uint32T>{p_length}, TNode<Uint32T>{tmp2});
    ca_.Goto(&block6, tmp3);
  }

  TNode<BoolT> tmp4;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp4 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block6, tmp4);
  }

  TNode<BoolT> phi_bb6_5;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_5);
    ca_.Branch(phi_bb6_5, &block2, std::vector<compiler::Node*>{}, &block3, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/objects/string.tq", 169});
      CodeStubAssembler(state_).FailAssert("Torque assert 'length != 0 && length <= kStringMaxLength' failed", pos_stack);
    }
  }

  TNode<Map> tmp5;
  TNode<Uint32T> tmp6;
  TNode<Int32T> tmp7;
  TNode<IntPtrT> tmp8;
  TNode<IntPtrT> tmp9;
  TNode<IntPtrT> tmp10;
  TNode<IntPtrT> tmp11;
  TNode<BoolT> tmp12;
  TNode<BoolT> tmp13;
  TNode<HeapObject> tmp14;
  TNode<IntPtrT> tmp15;
  TNode<IntPtrT> tmp16;
  TNode<IntPtrT> tmp17;
  TNode<IntPtrT> tmp18;
  TNode<SeqOneByteString> tmp19;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp5 = kSeqOneByteStringMap_0(state_);
    tmp6 = kNameEmptyHashField_0(state_);
    tmp7 = CodeStubAssembler(state_).Signed(TNode<Uint32T>{p_length});
    tmp8 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp7});
    tmp9 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp10 = AddIndexedFieldSizeToObjectSize_0(state_, TNode<IntPtrT>{tmp9}, TNode<IntPtrT>{tmp8}, CastIfEnumClass<int32_t>(kUInt8Size));
    tmp11 = AlignTagged_0(state_, TNode<IntPtrT>{tmp10});
    tmp12 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    tmp13 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    tmp14 = AllocateFromNew_0(state_, TNode<IntPtrT>{tmp11}, TNode<Map>{tmp5}, TNode<BoolT>{tmp12}, TNode<BoolT>{tmp13});
    tmp15 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    CodeStubAssembler(state_).StoreReference<Map>(CodeStubAssembler::Reference{tmp14, tmp15}, tmp5);
    tmp16 = FromConstexpr_intptr_constexpr_int31_0(state_, 4);
    CodeStubAssembler(state_).StoreReference<Uint32T>(CodeStubAssembler::Reference{tmp14, tmp16}, tmp6);
    tmp17 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    CodeStubAssembler(state_).StoreReference<Int32T>(CodeStubAssembler::Reference{tmp14, tmp17}, tmp7);
    tmp18 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    InitializeFieldsFromIterator_char8_SliceIterator_char8_ConstReference_char8_0(state_, TorqueStructSlice_char8_MutableReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp14}, TNode<IntPtrT>{tmp18}, TNode<IntPtrT>{tmp8}, TorqueStructUnsafe_0{}}, TorqueStructSliceIterator_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{p_content.object}, TNode<IntPtrT>{p_content.start}, TNode<IntPtrT>{p_content.end}, TorqueStructUnsafe_0{}});
    tmp19 = TORQUE_CAST(TNode<HeapObject>{tmp14});
    ca_.Goto(&block7);
  }

    ca_.Bind(&block7);
  return TNode<SeqOneByteString>{tmp19};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=1706&c=23
TNode<Weak<HeapObject>> StrongToWeak_Map_0(compiler::CodeAssemblerState* state_, TNode<Map> p_x) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Weak<HeapObject>> tmp0;
  TNode<Weak<HeapObject>> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).MakeWeak(TNode<HeapObject>{p_x});
    tmp1 = (TNode<Weak<HeapObject>>{tmp0});
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TNode<Weak<HeapObject>>{tmp1};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=1731&c=10
TNode<BoolT> Is_WasmArray_HeapObject_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<HeapObject> p_o) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmArray> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_WasmArray_0(state_, TNode<HeapObject>{p_o}, &label1);
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

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=1731&c=39
TNode<BoolT> Is_WasmStruct_HeapObject_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<HeapObject> p_o) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmStruct> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_WasmStruct_0(state_, TNode<HeapObject>{p_o}, &label1);
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

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=1732&c=10
TNode<BoolT> Is_WasmCustomMap_HeapObject_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<HeapObject> p_o) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<WasmCustomMap> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_WasmCustomMap_0(state_, TNode<HeapObject>{p_o}, &label1);
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

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=974&c=10
TorqueStructReference_RawPtr_0 NewOffHeapReference_RawPtr_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_ptr) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<TaggedIndex> tmp0;
  TNode<RawPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<Union<HeapObject, TaggedIndex>> tmp5;
  TNode<IntPtrT> tmp6;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kZeroBitPattern_0(state_);
    tmp1 = Convert_RawPtr_RawPtr_RawPtr_0(state_, TNode<RawPtrT>{p_ptr});
    tmp2 = Convert_intptr_RawPtr_0(state_, TNode<RawPtrT>{tmp1});
    tmp3 = FromConstexpr_intptr_constexpr_int31_0(state_, kHeapObjectTag);
    tmp4 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp2}, TNode<IntPtrT>{tmp3});
    std::tie(tmp5, tmp6) = (TorqueStructReference_RawPtr_0{TNode<Union<HeapObject, TaggedIndex>>{tmp0}, TNode<IntPtrT>{tmp4}, TorqueStructUnsafe_0{}}).Flatten();
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TorqueStructReference_RawPtr_0{TNode<Union<HeapObject, TaggedIndex>>{tmp5}, TNode<IntPtrT>{tmp6}, TorqueStructUnsafe_0{}};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=974&c=10
TorqueStructReference_int32_0 NewOffHeapReference_int32_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_ptr) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<TaggedIndex> tmp0;
  TNode<RawPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<Union<HeapObject, TaggedIndex>> tmp5;
  TNode<IntPtrT> tmp6;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kZeroBitPattern_0(state_);
    tmp1 = Convert_RawPtr_RawPtr_int32_0(state_, TNode<RawPtrT>{p_ptr});
    tmp2 = Convert_intptr_RawPtr_0(state_, TNode<RawPtrT>{tmp1});
    tmp3 = FromConstexpr_intptr_constexpr_int31_0(state_, kHeapObjectTag);
    tmp4 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp2}, TNode<IntPtrT>{tmp3});
    std::tie(tmp5, tmp6) = (TorqueStructReference_int32_0{TNode<Union<HeapObject, TaggedIndex>>{tmp0}, TNode<IntPtrT>{tmp4}, TorqueStructUnsafe_0{}}).Flatten();
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TorqueStructReference_int32_0{TNode<Union<HeapObject, TaggedIndex>>{tmp5}, TNode<IntPtrT>{tmp6}, TorqueStructUnsafe_0{}};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=974&c=10
TorqueStructReference_bool_0 NewOffHeapReference_bool_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_ptr) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<TaggedIndex> tmp0;
  TNode<RawPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<Union<HeapObject, TaggedIndex>> tmp5;
  TNode<IntPtrT> tmp6;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kZeroBitPattern_0(state_);
    tmp1 = Convert_RawPtr_RawPtr_bool_0(state_, TNode<RawPtrT>{p_ptr});
    tmp2 = Convert_intptr_RawPtr_0(state_, TNode<RawPtrT>{tmp1});
    tmp3 = FromConstexpr_intptr_constexpr_int31_0(state_, kHeapObjectTag);
    tmp4 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp2}, TNode<IntPtrT>{tmp3});
    std::tie(tmp5, tmp6) = (TorqueStructReference_bool_0{TNode<Union<HeapObject, TaggedIndex>>{tmp0}, TNode<IntPtrT>{tmp4}, TorqueStructUnsafe_0{}}).Flatten();
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TorqueStructReference_bool_0{TNode<Union<HeapObject, TaggedIndex>>{tmp5}, TNode<IntPtrT>{tmp6}, TorqueStructUnsafe_0{}};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=974&c=10
TorqueStructReference_WasmCodePointer_0 NewOffHeapReference_WasmCodePointer_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_ptr) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<TaggedIndex> tmp0;
  TNode<RawPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<Union<HeapObject, TaggedIndex>> tmp5;
  TNode<IntPtrT> tmp6;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kZeroBitPattern_0(state_);
    tmp1 = Convert_RawPtr_RawPtr_WasmCodePointer_0(state_, TNode<RawPtrT>{p_ptr});
    tmp2 = Convert_intptr_RawPtr_0(state_, TNode<RawPtrT>{tmp1});
    tmp3 = FromConstexpr_intptr_constexpr_int31_0(state_, kHeapObjectTag);
    tmp4 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp2}, TNode<IntPtrT>{tmp3});
    std::tie(tmp5, tmp6) = (TorqueStructReference_WasmCodePointer_0{TNode<Union<HeapObject, TaggedIndex>>{tmp0}, TNode<IntPtrT>{tmp4}, TorqueStructUnsafe_0{}}).Flatten();
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TorqueStructReference_WasmCodePointer_0{TNode<Union<HeapObject, TaggedIndex>>{tmp5}, TNode<IntPtrT>{tmp6}, TorqueStructUnsafe_0{}};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=974&c=10
TorqueStructReference_RawPtr_intptr_0 NewOffHeapReference_RawPtr_intptr_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_ptr) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<TaggedIndex> tmp0;
  TNode<RawPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<Union<HeapObject, TaggedIndex>> tmp5;
  TNode<IntPtrT> tmp6;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kZeroBitPattern_0(state_);
    tmp1 = Convert_RawPtr_RawPtr_RawPtr_intptr_0(state_, TNode<RawPtrT>{p_ptr});
    tmp2 = Convert_intptr_RawPtr_0(state_, TNode<RawPtrT>{tmp1});
    tmp3 = FromConstexpr_intptr_constexpr_int31_0(state_, kHeapObjectTag);
    tmp4 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp2}, TNode<IntPtrT>{tmp3});
    std::tie(tmp5, tmp6) = (TorqueStructReference_RawPtr_intptr_0{TNode<Union<HeapObject, TaggedIndex>>{tmp0}, TNode<IntPtrT>{tmp4}, TorqueStructUnsafe_0{}}).Flatten();
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TorqueStructReference_RawPtr_intptr_0{TNode<Union<HeapObject, TaggedIndex>>{tmp5}, TNode<IntPtrT>{tmp6}, TorqueStructUnsafe_0{}};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=974&c=10
TorqueStructReference_uint32_0 NewOffHeapReference_uint32_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_ptr) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<TaggedIndex> tmp0;
  TNode<RawPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<Union<HeapObject, TaggedIndex>> tmp5;
  TNode<IntPtrT> tmp6;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kZeroBitPattern_0(state_);
    tmp1 = Convert_RawPtr_RawPtr_uint32_0(state_, TNode<RawPtrT>{p_ptr});
    tmp2 = Convert_intptr_RawPtr_0(state_, TNode<RawPtrT>{tmp1});
    tmp3 = FromConstexpr_intptr_constexpr_int31_0(state_, kHeapObjectTag);
    tmp4 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp2}, TNode<IntPtrT>{tmp3});
    std::tie(tmp5, tmp6) = (TorqueStructReference_uint32_0{TNode<Union<HeapObject, TaggedIndex>>{tmp0}, TNode<IntPtrT>{tmp4}, TorqueStructUnsafe_0{}}).Flatten();
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TorqueStructReference_uint32_0{TNode<Union<HeapObject, TaggedIndex>>{tmp5}, TNode<IntPtrT>{tmp6}, TorqueStructUnsafe_0{}};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=974&c=10
TorqueStructReference_int64_0 NewOffHeapReference_int64_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_ptr) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<TaggedIndex> tmp0;
  TNode<RawPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<Union<HeapObject, TaggedIndex>> tmp5;
  TNode<IntPtrT> tmp6;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kZeroBitPattern_0(state_);
    tmp1 = Convert_RawPtr_RawPtr_int64_0(state_, TNode<RawPtrT>{p_ptr});
    tmp2 = Convert_intptr_RawPtr_0(state_, TNode<RawPtrT>{tmp1});
    tmp3 = FromConstexpr_intptr_constexpr_int31_0(state_, kHeapObjectTag);
    tmp4 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp2}, TNode<IntPtrT>{tmp3});
    std::tie(tmp5, tmp6) = (TorqueStructReference_int64_0{TNode<Union<HeapObject, TaggedIndex>>{tmp0}, TNode<IntPtrT>{tmp4}, TorqueStructUnsafe_0{}}).Flatten();
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TorqueStructReference_int64_0{TNode<Union<HeapObject, TaggedIndex>>{tmp5}, TNode<IntPtrT>{tmp6}, TorqueStructUnsafe_0{}};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=974&c=10
TorqueStructReference_float64_0 NewOffHeapReference_float64_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_ptr) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<TaggedIndex> tmp0;
  TNode<RawPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<Union<HeapObject, TaggedIndex>> tmp5;
  TNode<IntPtrT> tmp6;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kZeroBitPattern_0(state_);
    tmp1 = Convert_RawPtr_RawPtr_float64_0(state_, TNode<RawPtrT>{p_ptr});
    tmp2 = Convert_intptr_RawPtr_0(state_, TNode<RawPtrT>{tmp1});
    tmp3 = FromConstexpr_intptr_constexpr_int31_0(state_, kHeapObjectTag);
    tmp4 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp2}, TNode<IntPtrT>{tmp3});
    std::tie(tmp5, tmp6) = (TorqueStructReference_float64_0{TNode<Union<HeapObject, TaggedIndex>>{tmp0}, TNode<IntPtrT>{tmp4}, TorqueStructUnsafe_0{}}).Flatten();
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TorqueStructReference_float64_0{TNode<Union<HeapObject, TaggedIndex>>{tmp5}, TNode<IntPtrT>{tmp6}, TorqueStructUnsafe_0{}};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=974&c=10
TorqueStructReference_float32_0 NewOffHeapReference_float32_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_ptr) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<TaggedIndex> tmp0;
  TNode<RawPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<Union<HeapObject, TaggedIndex>> tmp5;
  TNode<IntPtrT> tmp6;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kZeroBitPattern_0(state_);
    tmp1 = Convert_RawPtr_RawPtr_float32_0(state_, TNode<RawPtrT>{p_ptr});
    tmp2 = Convert_intptr_RawPtr_0(state_, TNode<RawPtrT>{tmp1});
    tmp3 = FromConstexpr_intptr_constexpr_int31_0(state_, kHeapObjectTag);
    tmp4 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp2}, TNode<IntPtrT>{tmp3});
    std::tie(tmp5, tmp6) = (TorqueStructReference_float32_0{TNode<Union<HeapObject, TaggedIndex>>{tmp0}, TNode<IntPtrT>{tmp4}, TorqueStructUnsafe_0{}}).Flatten();
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TorqueStructReference_float32_0{TNode<Union<HeapObject, TaggedIndex>>{tmp5}, TNode<IntPtrT>{tmp6}, TorqueStructUnsafe_0{}};
}

// https://crsrc.org/c/v8/src/builtins/wasm.tq?l=974&c=10
TorqueStructReference_uintptr_0 NewOffHeapReference_uintptr_0(compiler::CodeAssemblerState* state_, TNode<RawPtrT> p_ptr) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<TaggedIndex> tmp0;
  TNode<RawPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<Union<HeapObject, TaggedIndex>> tmp5;
  TNode<IntPtrT> tmp6;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = kZeroBitPattern_0(state_);
    tmp1 = Convert_RawPtr_RawPtr_uintptr_0(state_, TNode<RawPtrT>{p_ptr});
    tmp2 = Convert_intptr_RawPtr_0(state_, TNode<RawPtrT>{tmp1});
    tmp3 = FromConstexpr_intptr_constexpr_int31_0(state_, kHeapObjectTag);
    tmp4 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp2}, TNode<IntPtrT>{tmp3});
    std::tie(tmp5, tmp6) = (TorqueStructReference_uintptr_0{TNode<Union<HeapObject, TaggedIndex>>{tmp0}, TNode<IntPtrT>{tmp4}, TorqueStructUnsafe_0{}}).Flatten();
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TorqueStructReference_uintptr_0{TNode<Union<HeapObject, TaggedIndex>>{tmp5}, TNode<IntPtrT>{tmp6}, TorqueStructUnsafe_0{}};
}

} // namespace internal
} // namespace v8
