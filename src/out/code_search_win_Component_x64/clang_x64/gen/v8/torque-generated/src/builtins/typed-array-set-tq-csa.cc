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
#include "torque-generated/src/builtins/typed-array-set-tq-csa.h"
#include "torque-generated/src/builtins/base-tq-csa.h"
#include "torque-generated/src/builtins/cast-tq-csa.h"
#include "torque-generated/src/builtins/convert-tq-csa.h"
#include "torque-generated/src/builtins/frame-arguments-tq-csa.h"
#include "torque-generated/src/builtins/typed-array-every-tq-csa.h"
#include "torque-generated/src/builtins/typed-array-set-tq-csa.h"
#include "torque-generated/src/builtins/typed-array-tq-csa.h"
#include "torque-generated/src/objects/js-array-buffer-tq-csa.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/builtins/typed-array-set.tq?l=8&c=1
const char* kBuiltinNameSet_0(compiler::CodeAssemblerState* state_) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

    ca_.Bind(&block0);
  return "%TypedArray%.prototype.set";}

TF_BUILTIN(TypedArrayPrototypeSet, CodeStubAssembler) {
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
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block23(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block30(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<UintPtrT, BoolT> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSTypedArray, UintPtrT, UintPtrT, BoolT> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSTypedArray, UintPtrT, UintPtrT, BoolT> block36(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSTypedArray, UintPtrT, UintPtrT, BoolT> block35(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSTypedArray, UintPtrT, UintPtrT, BoolT> block38(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSTypedArray, UintPtrT, UintPtrT, BoolT> block37(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSTypedArray, UintPtrT, UintPtrT, BoolT, JSTypedArray, UintPtrT, UintPtrT, BoolT> block40(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSTypedArray, UintPtrT, UintPtrT, BoolT, JSTypedArray, UintPtrT, UintPtrT, BoolT> block39(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSTypedArray, UintPtrT, UintPtrT, BoolT, UintPtrT, UintPtrT, BoolT> block42(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSTypedArray, UintPtrT, UintPtrT, BoolT, UintPtrT, UintPtrT, BoolT> block41(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kDeferred);
    ca_.Goto(&block0);

  TNode<JSTypedArray> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_JSTypedArray_1(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1}, &label1);
    ca_.Goto(&block3);
    if (label1.is_used()) {
      ca_.Bind(&label1);
      ca_.Goto(&block4);
    }
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    CodeStubAssembler(state_).ThrowTypeError(TNode<Context>{parameter0}, CastIfEnumClass<MessageTemplate>(MessageTemplate::kNotTypedArray));
  }

  TNode<UintPtrT> tmp2;
  TNode<BoolT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<BoolT> tmp5;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp2 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp3 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    tmp4 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp5 = CodeStubAssembler(state_).IntPtrGreaterThan(TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{tmp4});
    ca_.Branch(tmp5, &block9, std::vector<compiler::Node*>{}, &block10, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp6;
  TNode<JSAny> tmp7;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp6 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp7 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp6});
    ca_.Goto(&block11, tmp7);
  }

  TNode<Smi> tmp8;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp8 = SmiConstant_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block11, tmp8);
  }

  TNode<JSAny> phi_bb11_11;
  TNode<Smi> tmp9;
  if (block11.is_used()) {
    ca_.Bind(&block11, &phi_bb11_11);
    compiler::CodeAssemblerLabel label10(&ca_);
    tmp9 = Cast_Smi_0(state_, TNode<Object>{phi_bb11_11}, &label10);
    ca_.Goto(&block15);
    if (label10.is_used()) {
      ca_.Bind(&label10);
      ca_.Goto(&block16);
    }
  }

  TNode<IntPtrT> tmp11;
  TNode<JSArrayBuffer> tmp12;
  TNode<BoolT> tmp13;
  if (block16.is_used()) {
    ca_.Bind(&block16);
    tmp11 = FromConstexpr_intptr_constexpr_int31_0(state_, 16);
    tmp12 = CodeStubAssembler(state_).LoadReference<JSArrayBuffer>(CodeStubAssembler::Reference{tmp0, tmp11});
    tmp13 = IsImmutableArrayBuffer_0(state_, TNode<JSArrayBuffer>{tmp12});
    ca_.Branch(tmp13, &block23, std::vector<compiler::Node*>{}, &block24, std::vector<compiler::Node*>{});
  }

  TNode<Smi> tmp14;
  TNode<BoolT> tmp15;
  if (block15.is_used()) {
    ca_.Bind(&block15);
    tmp14 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp15 = CodeStubAssembler(state_).SmiLessThan(TNode<Smi>{tmp9}, TNode<Smi>{tmp14});
    ca_.Branch(tmp15, &block17, std::vector<compiler::Node*>{}, &block18, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp16;
  TNode<JSArrayBuffer> tmp17;
  TNode<BoolT> tmp18;
  if (block17.is_used()) {
    ca_.Bind(&block17);
    tmp16 = FromConstexpr_intptr_constexpr_int31_0(state_, 16);
    tmp17 = CodeStubAssembler(state_).LoadReference<JSArrayBuffer>(CodeStubAssembler::Reference{tmp0, tmp16});
    tmp18 = IsImmutableArrayBuffer_0(state_, TNode<JSArrayBuffer>{tmp17});
    ca_.Branch(tmp18, &block19, std::vector<compiler::Node*>{}, &block20, std::vector<compiler::Node*>{});
  }

  if (block19.is_used()) {
    ca_.Bind(&block19);
    ca_.Goto(&block6);
  }

  if (block20.is_used()) {
    ca_.Bind(&block20);
    ca_.Goto(&block8);
  }

  TNode<IntPtrT> tmp19;
  TNode<UintPtrT> tmp20;
  TNode<JSTypedArray> tmp21;
  TNode<UintPtrT> tmp22;
  if (block18.is_used()) {
    ca_.Bind(&block18);
    tmp19 = CodeStubAssembler(state_).SmiUntag(TNode<Smi>{tmp9});
    tmp20 = CodeStubAssembler(state_).Unsigned(TNode<IntPtrT>{tmp19});
    compiler::CodeAssemblerLabel label23(&ca_);
    std::tie(tmp21, tmp22) = EnsureValidAndReadLength_0(state_, TNode<JSTypedArray>{tmp0}, CastIfEnumClass<TypedArrayAccessMode>(TypedArrayAccessMode::kWrite), &label23).Flatten();
    ca_.Goto(&block21);
    if (label23.is_used()) {
      ca_.Bind(&label23);
      ca_.Goto(&block22);
    }
  }

  if (block22.is_used()) {
    ca_.Bind(&block22);
    ca_.Goto(&block6);
  }

  if (block21.is_used()) {
    ca_.Bind(&block21);
    ca_.Goto(&block13, tmp21, tmp22, tmp20, tmp3);
  }

  if (block23.is_used()) {
    ca_.Bind(&block23);
    ca_.Goto(&block6);
  }

  TNode<UintPtrT> tmp24;
  if (block24.is_used()) {
    ca_.Bind(&block24);
    compiler::CodeAssemblerLabel label25(&ca_);
    compiler::CodeAssemblerLabel label26(&ca_);
    compiler::CodeAssemblerLabel label27(&ca_);
    tmp24 = ToUintPtr_0(state_, TNode<Context>{parameter0}, TNode<JSAny>{ca_.UncheckedCast<Union<BigInt, Boolean, HeapNumber, JSReceiver, Null, String, Symbol, Undefined>>(phi_bb11_11)}, &label25, &label26, &label27);
    ca_.Goto(&block27);
    if (label25.is_used()) {
      ca_.Bind(&label25);
      ca_.Goto(&block28);
    }
    if (label26.is_used()) {
      ca_.Bind(&label26);
      ca_.Goto(&block29);
    }
    if (label27.is_used()) {
      ca_.Bind(&label27);
      ca_.Goto(&block30);
    }
  }

  if (block28.is_used()) {
    ca_.Bind(&block28);
    ca_.Goto(&block8);
  }

  if (block29.is_used()) {
    ca_.Bind(&block29);
    ca_.Goto(&block26);
  }

  if (block30.is_used()) {
    ca_.Bind(&block30);
    ca_.Goto(&block26);
  }

  if (block27.is_used()) {
    ca_.Bind(&block27);
    ca_.Goto(&block25, tmp24, tmp3);
  }

  TNode<BoolT> tmp28;
  if (block26.is_used()) {
    ca_.Bind(&block26);
    tmp28 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block25, tmp2, tmp28);
  }

  TNode<UintPtrT> phi_bb25_9;
  TNode<BoolT> phi_bb25_10;
  TNode<JSTypedArray> tmp29;
  TNode<UintPtrT> tmp30;
  if (block25.is_used()) {
    ca_.Bind(&block25, &phi_bb25_9, &phi_bb25_10);
    compiler::CodeAssemblerLabel label31(&ca_);
    std::tie(tmp29, tmp30) = EnsureValidAndReadLength_0(state_, TNode<JSTypedArray>{tmp0}, CastIfEnumClass<TypedArrayAccessMode>(TypedArrayAccessMode::kWrite), &label31).Flatten();
    ca_.Goto(&block31);
    if (label31.is_used()) {
      ca_.Bind(&label31);
      ca_.Goto(&block32);
    }
  }

  if (block32.is_used()) {
    ca_.Bind(&block32);
    ca_.Goto(&block6);
  }

  if (block31.is_used()) {
    ca_.Bind(&block31);
    ca_.Goto(&block13, tmp29, tmp30, phi_bb25_9, phi_bb25_10);
  }

  TNode<JSTypedArray> phi_bb13_7;
  TNode<UintPtrT> phi_bb13_8;
  TNode<UintPtrT> phi_bb13_9;
  TNode<BoolT> phi_bb13_10;
  TNode<IntPtrT> tmp32;
  TNode<JSAny> tmp33;
  TNode<JSTypedArray> tmp34;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_7, &phi_bb13_8, &phi_bb13_9, &phi_bb13_10);
    tmp32 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp33 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp32});
    compiler::CodeAssemblerLabel label35(&ca_);
    tmp34 = Cast_JSTypedArray_1(state_, TNode<Context>{parameter0}, TNode<Object>{tmp33}, &label35);
    ca_.Goto(&block35, phi_bb13_7, phi_bb13_8, phi_bb13_9, phi_bb13_10);
    if (label35.is_used()) {
      ca_.Bind(&label35);
      ca_.Goto(&block36, phi_bb13_7, phi_bb13_8, phi_bb13_9, phi_bb13_10);
    }
  }

  TNode<JSTypedArray> phi_bb36_7;
  TNode<UintPtrT> phi_bb36_8;
  TNode<UintPtrT> phi_bb36_9;
  TNode<BoolT> phi_bb36_10;
  if (block36.is_used()) {
    ca_.Bind(&block36, &phi_bb36_7, &phi_bb36_8, &phi_bb36_9, &phi_bb36_10);
    compiler::CodeAssemblerLabel label36(&ca_);
    TypedArrayPrototypeSetArray_0(state_, TNode<Context>{parameter0}, TNode<JSAny>{parameter1}, TNode<JSTypedArray>{tmp0}, TNode<UintPtrT>{phi_bb36_8}, TNode<JSAny>{tmp33}, TNode<UintPtrT>{phi_bb36_9}, TNode<BoolT>{phi_bb36_10}, &label36);
    ca_.Goto(&block41, phi_bb36_7, phi_bb36_8, phi_bb36_9, phi_bb36_10, phi_bb36_8, phi_bb36_9, phi_bb36_10);
    if (label36.is_used()) {
      ca_.Bind(&label36);
      ca_.Goto(&block42, phi_bb36_7, phi_bb36_8, phi_bb36_9, phi_bb36_10, phi_bb36_8, phi_bb36_9, phi_bb36_10);
    }
  }

  TNode<JSTypedArray> phi_bb35_7;
  TNode<UintPtrT> phi_bb35_8;
  TNode<UintPtrT> phi_bb35_9;
  TNode<BoolT> phi_bb35_10;
  TNode<JSTypedArray> tmp37;
  TNode<UintPtrT> tmp38;
  if (block35.is_used()) {
    ca_.Bind(&block35, &phi_bb35_7, &phi_bb35_8, &phi_bb35_9, &phi_bb35_10);
    compiler::CodeAssemblerLabel label39(&ca_);
    std::tie(tmp37, tmp38) = EnsureValidAndReadLength_0(state_, TNode<JSTypedArray>{tmp34}, CastIfEnumClass<TypedArrayAccessMode>(TypedArrayAccessMode::kRead), &label39).Flatten();
    ca_.Goto(&block37, phi_bb35_7, phi_bb35_8, phi_bb35_9, phi_bb35_10);
    if (label39.is_used()) {
      ca_.Bind(&label39);
      ca_.Goto(&block38, phi_bb35_7, phi_bb35_8, phi_bb35_9, phi_bb35_10);
    }
  }

  TNode<JSTypedArray> phi_bb38_7;
  TNode<UintPtrT> phi_bb38_8;
  TNode<UintPtrT> phi_bb38_9;
  TNode<BoolT> phi_bb38_10;
  if (block38.is_used()) {
    ca_.Bind(&block38, &phi_bb38_7, &phi_bb38_8, &phi_bb38_9, &phi_bb38_10);
    ca_.Goto(&block6);
  }

  TNode<JSTypedArray> phi_bb37_7;
  TNode<UintPtrT> phi_bb37_8;
  TNode<UintPtrT> phi_bb37_9;
  TNode<BoolT> phi_bb37_10;
  if (block37.is_used()) {
    ca_.Bind(&block37, &phi_bb37_7, &phi_bb37_8, &phi_bb37_9, &phi_bb37_10);
    compiler::CodeAssemblerLabel label40(&ca_);
    TypedArrayPrototypeSetTypedArray_0(state_, TNode<Context>{parameter0}, TNode<JSAny>{parameter1}, TorqueStructValidJSTypedArrayAndLength_0{TNode<JSTypedArray>{phi_bb37_7}, TNode<UintPtrT>{phi_bb37_8}}, TorqueStructValidJSTypedArrayAndLength_0{TNode<JSTypedArray>{tmp37}, TNode<UintPtrT>{tmp38}}, TNode<UintPtrT>{phi_bb37_9}, TNode<BoolT>{phi_bb37_10}, &label40);
    ca_.Goto(&block39, phi_bb37_7, phi_bb37_8, phi_bb37_9, phi_bb37_10, phi_bb37_7, phi_bb37_8, phi_bb37_9, phi_bb37_10);
    if (label40.is_used()) {
      ca_.Bind(&label40);
      ca_.Goto(&block40, phi_bb37_7, phi_bb37_8, phi_bb37_9, phi_bb37_10, phi_bb37_7, phi_bb37_8, phi_bb37_9, phi_bb37_10);
    }
  }

  TNode<JSTypedArray> phi_bb40_7;
  TNode<UintPtrT> phi_bb40_8;
  TNode<UintPtrT> phi_bb40_9;
  TNode<BoolT> phi_bb40_10;
  TNode<JSTypedArray> phi_bb40_16;
  TNode<UintPtrT> phi_bb40_17;
  TNode<UintPtrT> phi_bb40_20;
  TNode<BoolT> phi_bb40_21;
  if (block40.is_used()) {
    ca_.Bind(&block40, &phi_bb40_7, &phi_bb40_8, &phi_bb40_9, &phi_bb40_10, &phi_bb40_16, &phi_bb40_17, &phi_bb40_20, &phi_bb40_21);
    ca_.Goto(&block8);
  }

  TNode<JSTypedArray> phi_bb39_7;
  TNode<UintPtrT> phi_bb39_8;
  TNode<UintPtrT> phi_bb39_9;
  TNode<BoolT> phi_bb39_10;
  TNode<JSTypedArray> phi_bb39_16;
  TNode<UintPtrT> phi_bb39_17;
  TNode<UintPtrT> phi_bb39_20;
  TNode<BoolT> phi_bb39_21;
  TNode<Undefined> tmp41;
  if (block39.is_used()) {
    ca_.Bind(&block39, &phi_bb39_7, &phi_bb39_8, &phi_bb39_9, &phi_bb39_10, &phi_bb39_16, &phi_bb39_17, &phi_bb39_20, &phi_bb39_21);
    tmp41 = Undefined_0(state_);
    arguments.PopAndReturn(tmp41);
  }

  TNode<JSTypedArray> phi_bb42_7;
  TNode<UintPtrT> phi_bb42_8;
  TNode<UintPtrT> phi_bb42_9;
  TNode<BoolT> phi_bb42_10;
  TNode<UintPtrT> phi_bb42_14;
  TNode<UintPtrT> phi_bb42_16;
  TNode<BoolT> phi_bb42_17;
  if (block42.is_used()) {
    ca_.Bind(&block42, &phi_bb42_7, &phi_bb42_8, &phi_bb42_9, &phi_bb42_10, &phi_bb42_14, &phi_bb42_16, &phi_bb42_17);
    ca_.Goto(&block8);
  }

  TNode<JSTypedArray> phi_bb41_7;
  TNode<UintPtrT> phi_bb41_8;
  TNode<UintPtrT> phi_bb41_9;
  TNode<BoolT> phi_bb41_10;
  TNode<UintPtrT> phi_bb41_14;
  TNode<UintPtrT> phi_bb41_16;
  TNode<BoolT> phi_bb41_17;
  TNode<Undefined> tmp42;
  if (block41.is_used()) {
    ca_.Bind(&block41, &phi_bb41_7, &phi_bb41_8, &phi_bb41_9, &phi_bb41_10, &phi_bb41_14, &phi_bb41_16, &phi_bb41_17);
    tmp42 = Undefined_0(state_);
    arguments.PopAndReturn(tmp42);
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    CodeStubAssembler(state_).ThrowRangeError(TNode<Context>{parameter0}, CastIfEnumClass<MessageTemplate>(MessageTemplate::kTypedArraySetOffsetOutOfBounds));
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    CodeStubAssembler(state_).ThrowTypeError(TNode<Context>{parameter0}, CastIfEnumClass<MessageTemplate>(MessageTemplate::kTypedArrayValidateWriteErrorOperation), kBuiltinNameSet_0(state_));
  }
}

// https://crsrc.org/c/v8/src/builtins/typed-array-set.tq?l=152&c=1
void TypedArrayPrototypeSetArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSAny> p_receiver, TNode<JSTypedArray> p_target, TNode<UintPtrT> p_targetLength, TNode<JSAny> p_arrayArg, TNode<UintPtrT> p_targetOffset, TNode<BoolT> p_targetOffsetOverflowed, compiler::CodeAssemblerLabel* label_IfOffsetOutOfBounds) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSReceiver> tmp0;
  TNode<Number> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = CodeStubAssembler(state_).ToObject_Inline(TNode<Context>{p_context}, TNode<JSAny>{p_arrayArg});
    tmp1 = GetLengthProperty_0(state_, TNode<Context>{p_context}, TNode<JSAny>{tmp0});
    ca_.Branch(p_targetOffsetOverflowed, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    ca_.Goto(&block1);
  }

  TNode<UintPtrT> tmp2;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    compiler::CodeAssemblerLabel label3(&ca_);
    tmp2 = ChangeSafeIntegerNumberToUintPtr_0(state_, TNode<Number>{tmp1}, &label3);
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
    compiler::CodeAssemblerLabel label4(&ca_);
    CheckIntegerIndexAdditionOverflow_0(state_, TNode<UintPtrT>{tmp2}, TNode<UintPtrT>{p_targetOffset}, TNode<UintPtrT>{p_targetLength}, &label4);
    ca_.Goto(&block7);
    if (label4.is_used()) {
      ca_.Bind(&label4);
      ca_.Goto(&block8);
    }
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    ca_.Goto(&block1);
  }

  TNode<UintPtrT> tmp5;
  TNode<BoolT> tmp6;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp5 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp6 = CodeStubAssembler(state_).WordEqual(TNode<UintPtrT>{tmp2}, TNode<UintPtrT>{tmp5});
    ca_.Branch(tmp6, &block9, std::vector<compiler::Node*>{}, &block10, std::vector<compiler::Node*>{});
  }

  if (block9.is_used()) {
    ca_.Bind(&block9);
    ca_.Goto(&block2);
  }

  TNode<Int32T> tmp7;
  TNode<BoolT> tmp8;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp7 = CodeStubAssembler(state_).LoadElementsKind(TNode<JSTypedArray>{p_target});
    tmp8 = TypedArrayBuiltinsAssembler(state_).IsBigInt64ElementsKind(TNode<Int32T>{tmp7});
    ca_.Branch(tmp8, &block13, std::vector<compiler::Node*>{}, &block14, std::vector<compiler::Node*>{});
  }

  if (block13.is_used()) {
    ca_.Bind(&block13);
    ca_.Goto(&block12);
  }

  TNode<JSArray> tmp9;
  if (block14.is_used()) {
    ca_.Bind(&block14);
    compiler::CodeAssemblerLabel label10(&ca_);
    tmp9 = Cast_FastJSArray_0(state_, TNode<Context>{p_context}, TNode<HeapObject>{tmp0}, &label10);
    ca_.Goto(&block17);
    if (label10.is_used()) {
      ca_.Bind(&label10);
      ca_.Goto(&block18);
    }
  }

  if (block18.is_used()) {
    ca_.Bind(&block18);
    ca_.Goto(&block12);
  }

  TNode<IntPtrT> tmp11;
  TNode<Map> tmp12;
  TNode<Int32T> tmp13;
  TNode<BoolT> tmp14;
  if (block17.is_used()) {
    ca_.Bind(&block17);
    tmp11 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    tmp12 = CodeStubAssembler(state_).LoadReference<Map>(CodeStubAssembler::Reference{tmp9, tmp11});
    tmp13 = CodeStubAssembler(state_).LoadMapElementsKind(TNode<Map>{tmp12});
    tmp14 = CodeStubAssembler(state_).IsElementsKindInRange(TNode<Int32T>{tmp13}, CastIfEnumClass<ElementsKind>(ElementsKind::PACKED_SMI_ELEMENTS), CastIfEnumClass<ElementsKind>(ElementsKind::HOLEY_SMI_ELEMENTS));
    ca_.Branch(tmp14, &block21, std::vector<compiler::Node*>{}, &block22, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp15;
  if (block21.is_used()) {
    ca_.Bind(&block21);
    tmp15 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block23, tmp15);
  }

  TNode<BoolT> tmp16;
  if (block22.is_used()) {
    ca_.Bind(&block22);
    tmp16 = CodeStubAssembler(state_).IsElementsKindInRange(TNode<Int32T>{tmp13}, CastIfEnumClass<ElementsKind>(ElementsKind::PACKED_DOUBLE_ELEMENTS), CastIfEnumClass<ElementsKind>(ElementsKind::HOLEY_DOUBLE_ELEMENTS));
    ca_.Goto(&block23, tmp16);
  }

  TNode<BoolT> phi_bb23_13;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_13);
    ca_.Branch(phi_bb23_13, &block19, std::vector<compiler::Node*>{}, &block20, std::vector<compiler::Node*>{});
  }

  TNode<JSTypedArray> tmp17;
  if (block19.is_used()) {
    ca_.Bind(&block19);
    compiler::CodeAssemblerLabel label18(&ca_);
    tmp17 = EnsureValid_0(state_, TNode<JSTypedArray>{p_target}, CastIfEnumClass<TypedArrayAccessMode>(TypedArrayAccessMode::kWrite), &label18);
    ca_.Goto(&block27);
    if (label18.is_used()) {
      ca_.Bind(&label18);
      ca_.Goto(&block28);
    }
  }

  if (block28.is_used()) {
    ca_.Bind(&block28);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/typed-array-set.tq:198:59");
    CodeStubAssembler(state_).Unreachable();
  }

  if (block27.is_used()) {
    ca_.Bind(&block27);
    TypedArrayBuiltinsAssembler(state_).CallCCopyFastNumberJSArrayElementsToTypedArray(TNode<Context>{p_context}, TNode<JSArray>{tmp9}, TNode<JSTypedArray>{tmp17}, TNode<UintPtrT>{tmp2}, TNode<UintPtrT>{p_targetOffset});
    ca_.Goto(&block11);
  }

  if (block20.is_used()) {
    ca_.Bind(&block20);
    ca_.Goto(&block12);
  }

  TNode<Number> tmp19;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    tmp19 = Convert_Number_uintptr_0(state_, TNode<UintPtrT>{p_targetOffset});
    CodeStubAssembler(state_).CallRuntime(Runtime::kTypedArraySet, p_context, p_target, tmp0, tmp1, tmp19);
    ca_.Goto(&block11);
  }

  if (block11.is_used()) {
    ca_.Bind(&block11);
    ca_.Goto(&block2);
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    ca_.Goto(&block29);
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    ca_.Goto(label_IfOffsetOutOfBounds);
  }

    ca_.Bind(&block29);
}

// https://crsrc.org/c/v8/src/builtins/typed-array-set.tq?l=213&c=1
void TypedArrayPrototypeSetTypedArray_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSAny> p_receiver, TorqueStructValidJSTypedArrayAndLength_0 p_attachedTargetAndLength, TorqueStructValidJSTypedArrayAndLength_0 p_attachedSourceAndLength, TNode<UintPtrT> p_targetOffset, TNode<BoolT> p_targetOffsetOverflowed, compiler::CodeAssemblerLabel* label_IfOffsetOutOfBounds) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block30(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block35(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block34(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block37(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block36(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block39(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block38(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block42(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block43(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block44(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block40(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block41(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block45(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block46(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block47(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block48(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block49(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block50(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  if (block0.is_used()) {
    ca_.Bind(&block0);
    ca_.Branch(p_targetOffsetOverflowed, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    ca_.Goto(&block1);
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    compiler::CodeAssemblerLabel label0(&ca_);
    CheckIntegerIndexAdditionOverflow_0(state_, TNode<UintPtrT>{p_attachedSourceAndLength.length}, TNode<UintPtrT>{p_targetOffset}, TNode<UintPtrT>{p_attachedTargetAndLength.length}, &label0);
    ca_.Goto(&block5);
    if (label0.is_used()) {
      ca_.Bind(&label0);
      ca_.Goto(&block6);
    }
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    ca_.Goto(&block1);
  }

  TNode<UintPtrT> tmp1;
  TNode<Int32T> tmp2;
  TNode<Int32T> tmp3;
  TNode<BoolT> tmp4;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    std::tie(tmp1, tmp2) = TypedArrayBuiltinsAssembler(state_).GetTypedArrayElementsInfo(TNode<JSTypedArray>{p_attachedTargetAndLength.array}).Flatten();
    tmp3 = CodeStubAssembler(state_).LoadElementsKind(TNode<JSTypedArray>{p_attachedSourceAndLength.array});
    tmp4 = ElementsKindNotEqual_0(state_, TNode<Int32T>{tmp3}, TNode<Int32T>{tmp2});
    ca_.Branch(tmp4, &block9, std::vector<compiler::Node*>{}, &block10, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp5;
  TNode<BoolT> tmp6;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp5 = TypedArrayBuiltinsAssembler(state_).IsUint8ElementsKind(TNode<Int32T>{tmp3});
    tmp6 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp5});
    ca_.Branch(tmp6, &block13, std::vector<compiler::Node*>{}, &block14, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp7;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    tmp7 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block15, tmp7);
  }

  TNode<BoolT> tmp8;
  TNode<BoolT> tmp9;
  if (block14.is_used()) {
    ca_.Bind(&block14);
    tmp8 = TypedArrayBuiltinsAssembler(state_).IsUint8ElementsKind(TNode<Int32T>{tmp2});
    tmp9 = CodeStubAssembler(state_).Word32BinaryNot(TNode<BoolT>{tmp8});
    ca_.Goto(&block15, tmp9);
  }

  TNode<BoolT> phi_bb15_16;
  if (block15.is_used()) {
    ca_.Bind(&block15, &phi_bb15_16);
    ca_.Branch(phi_bb15_16, &block11, std::vector<compiler::Node*>{}, &block12, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp10;
  TNode<BoolT> tmp11;
  TNode<BoolT> tmp12;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp10 = TypedArrayBuiltinsAssembler(state_).IsBigInt64ElementsKind(TNode<Int32T>{tmp3});
    tmp11 = TypedArrayBuiltinsAssembler(state_).IsBigInt64ElementsKind(TNode<Int32T>{tmp2});
    tmp12 = CodeStubAssembler(state_).Word32NotEqual(TNode<BoolT>{tmp10}, TNode<BoolT>{tmp11});
    ca_.Branch(tmp12, &block46, std::vector<compiler::Node*>{}, &block47, std::vector<compiler::Node*>{});
  }

  if (block12.is_used()) {
    ca_.Bind(&block12);
    ca_.Goto(&block10);
  }

  TNode<UintPtrT> tmp13;
  TNode<BoolT> tmp14;
  if (block10.is_used()) {
    ca_.Bind(&block10);
    tmp13 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp14 = CodeStubAssembler(state_).WordEqual(TNode<UintPtrT>{p_attachedSourceAndLength.length}, TNode<UintPtrT>{tmp13});
    ca_.Branch(tmp14, &block16, std::vector<compiler::Node*>{}, &block17, std::vector<compiler::Node*>{});
  }

  if (block16.is_used()) {
    ca_.Bind(&block16);
    ca_.Goto(&block2);
  }

  TNode<UintPtrT> tmp15;
  TNode<UintPtrT> tmp16;
  TNode<BoolT> tmp17;
  if (block17.is_used()) {
    ca_.Bind(&block17);
    tmp15 = CodeStubAssembler(state_).ArrayBufferMaxByteLength();
    tmp16 = CodeStubAssembler(state_).WordShr(TNode<UintPtrT>{tmp15}, TNode<UintPtrT>{tmp1});
    tmp17 = CodeStubAssembler(state_).UintPtrGreaterThan(TNode<UintPtrT>{p_attachedSourceAndLength.length}, TNode<UintPtrT>{tmp16});
    ca_.Branch(tmp17, &block21, std::vector<compiler::Node*>{}, &block22, std::vector<compiler::Node*>{});
  }

  if (block21.is_used()) {
    ca_.Bind(&block21);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/typed-array-set.tq:289:19");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<UintPtrT> tmp18;
  TNode<UintPtrT> tmp19;
  TNode<UintPtrT> tmp20;
  TNode<BoolT> tmp21;
  if (block22.is_used()) {
    ca_.Bind(&block22);
    tmp18 = CodeStubAssembler(state_).WordShl(TNode<UintPtrT>{p_attachedSourceAndLength.length}, TNode<UintPtrT>{tmp1});
    tmp19 = CodeStubAssembler(state_).ArrayBufferMaxByteLength();
    tmp20 = CodeStubAssembler(state_).WordShr(TNode<UintPtrT>{tmp19}, TNode<UintPtrT>{tmp1});
    tmp21 = CodeStubAssembler(state_).UintPtrGreaterThan(TNode<UintPtrT>{p_targetOffset}, TNode<UintPtrT>{tmp20});
    ca_.Branch(tmp21, &block26, std::vector<compiler::Node*>{}, &block27, std::vector<compiler::Node*>{});
  }

  if (block26.is_used()) {
    ca_.Bind(&block26);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/typed-array-set.tq:292:19");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<UintPtrT> tmp22;
  TNode<RawPtrT> tmp23;
  TNode<IntPtrT> tmp24;
  TNode<RawPtrT> tmp25;
  TNode<IntPtrT> tmp26;
  TNode<JSArrayBuffer> tmp27;
  TNode<UintPtrT> tmp28;
  if (block27.is_used()) {
    ca_.Bind(&block27);
    tmp22 = CodeStubAssembler(state_).WordShl(TNode<UintPtrT>{p_targetOffset}, TNode<UintPtrT>{tmp1});
    tmp23 = CodeStubAssembler(state_).LoadJSTypedArrayDataPtr(TNode<JSTypedArray>{p_attachedTargetAndLength.array});
    tmp24 = Convert_intptr_uintptr_0(state_, TNode<UintPtrT>{tmp22});
    tmp25 = CodeStubAssembler(state_).RawPtrAdd(TNode<RawPtrT>{tmp23}, TNode<IntPtrT>{tmp24});
    tmp26 = FromConstexpr_intptr_constexpr_int31_0(state_, 16);
    tmp27 = CodeStubAssembler(state_).LoadReference<JSArrayBuffer>(CodeStubAssembler::Reference{p_attachedTargetAndLength.array, tmp26});
    compiler::CodeAssemblerLabel label29(&ca_);
    tmp28 = LoadJSArrayBufferViewByteLength_0(state_, TNode<JSArrayBufferView>{p_attachedTargetAndLength.array}, TNode<JSArrayBuffer>{tmp27}, &label29);
    ca_.Goto(&block30);
    if (label29.is_used()) {
      ca_.Bind(&label29);
      ca_.Goto(&block31);
    }
  }

  if (block31.is_used()) {
    ca_.Bind(&block31);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/typed-array-set.tq:299:44");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> tmp30;
  TNode<JSArrayBuffer> tmp31;
  TNode<UintPtrT> tmp32;
  if (block30.is_used()) {
    ca_.Bind(&block30);
    tmp30 = FromConstexpr_intptr_constexpr_int31_0(state_, 16);
    tmp31 = CodeStubAssembler(state_).LoadReference<JSArrayBuffer>(CodeStubAssembler::Reference{p_attachedSourceAndLength.array, tmp30});
    compiler::CodeAssemblerLabel label33(&ca_);
    tmp32 = LoadJSArrayBufferViewByteLength_0(state_, TNode<JSArrayBufferView>{p_attachedSourceAndLength.array}, TNode<JSArrayBuffer>{tmp31}, &label33);
    ca_.Goto(&block34);
    if (label33.is_used()) {
      ca_.Bind(&label33);
      ca_.Goto(&block35);
    }
  }

  if (block35.is_used()) {
    ca_.Bind(&block35);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/typed-array-set.tq:301:44");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<UintPtrT> tmp34;
  TNode<BoolT> tmp35;
  if (block34.is_used()) {
    ca_.Bind(&block34);
    tmp34 = CodeStubAssembler(state_).UintPtrSub(TNode<UintPtrT>{tmp28}, TNode<UintPtrT>{tmp22});
    tmp35 = CodeStubAssembler(state_).UintPtrLessThanOrEqual(TNode<UintPtrT>{tmp18}, TNode<UintPtrT>{tmp34});
    ca_.Branch(tmp35, &block36, std::vector<compiler::Node*>{}, &block37, std::vector<compiler::Node*>{});
  }

  if (block37.is_used()) {
    ca_.Bind(&block37);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/typed-array-set.tq", 303});
      CodeStubAssembler(state_).FailAssert("Torque assert 'countBytes <= targetByteLength - startOffset' failed", pos_stack);
    }
  }

  TNode<BoolT> tmp36;
  if (block36.is_used()) {
    ca_.Bind(&block36);
    tmp36 = CodeStubAssembler(state_).UintPtrLessThanOrEqual(TNode<UintPtrT>{tmp18}, TNode<UintPtrT>{tmp32});
    ca_.Branch(tmp36, &block38, std::vector<compiler::Node*>{}, &block39, std::vector<compiler::Node*>{});
  }

  if (block39.is_used()) {
    ca_.Bind(&block39);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/builtins/typed-array-set.tq", 304});
      CodeStubAssembler(state_).FailAssert("Torque assert 'countBytes <= sourceByteLength' failed", pos_stack);
    }
  }

  TNode<IntPtrT> tmp37;
  TNode<JSArrayBuffer> tmp38;
  TNode<BoolT> tmp39;
  if (block38.is_used()) {
    ca_.Bind(&block38);
    tmp37 = FromConstexpr_intptr_constexpr_int31_0(state_, 16);
    tmp38 = CodeStubAssembler(state_).LoadReference<JSArrayBuffer>(CodeStubAssembler::Reference{p_attachedTargetAndLength.array, tmp37});
    tmp39 = IsSharedArrayBuffer_0(state_, TNode<JSArrayBuffer>{tmp38});
    ca_.Branch(tmp39, &block42, std::vector<compiler::Node*>{}, &block43, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp40;
  if (block42.is_used()) {
    ca_.Bind(&block42);
    tmp40 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block44, tmp40);
  }

  TNode<IntPtrT> tmp41;
  TNode<JSArrayBuffer> tmp42;
  TNode<BoolT> tmp43;
  if (block43.is_used()) {
    ca_.Bind(&block43);
    tmp41 = FromConstexpr_intptr_constexpr_int31_0(state_, 16);
    tmp42 = CodeStubAssembler(state_).LoadReference<JSArrayBuffer>(CodeStubAssembler::Reference{p_attachedSourceAndLength.array, tmp41});
    tmp43 = IsSharedArrayBuffer_0(state_, TNode<JSArrayBuffer>{tmp42});
    ca_.Goto(&block44, tmp43);
  }

  TNode<BoolT> phi_bb44_19;
  if (block44.is_used()) {
    ca_.Bind(&block44, &phi_bb44_19);
    ca_.Branch(phi_bb44_19, &block40, std::vector<compiler::Node*>{}, &block41, std::vector<compiler::Node*>{});
  }

  TNode<RawPtrT> tmp44;
  if (block40.is_used()) {
    ca_.Bind(&block40);
    tmp44 = CodeStubAssembler(state_).LoadJSTypedArrayDataPtr(TNode<JSTypedArray>{p_attachedSourceAndLength.array});
    TypedArrayBuiltinsAssembler(state_).CallCRelaxedMemmove(TNode<RawPtrT>{tmp25}, TNode<RawPtrT>{tmp44}, TNode<UintPtrT>{tmp18});
    ca_.Goto(&block45);
  }

  TNode<RawPtrT> tmp45;
  if (block41.is_used()) {
    ca_.Bind(&block41);
    tmp45 = CodeStubAssembler(state_).LoadJSTypedArrayDataPtr(TNode<JSTypedArray>{p_attachedSourceAndLength.array});
    TypedArrayBuiltinsAssembler(state_).CallCMemmove(TNode<RawPtrT>{tmp25}, TNode<RawPtrT>{tmp45}, TNode<UintPtrT>{tmp18});
    ca_.Goto(&block45);
  }

  if (block45.is_used()) {
    ca_.Bind(&block45);
    ca_.Goto(&block7);
  }

  if (block46.is_used()) {
    ca_.Bind(&block46);
    CodeStubAssembler(state_).ThrowTypeError(TNode<Context>{p_context}, CastIfEnumClass<MessageTemplate>(MessageTemplate::kBigIntMixedTypes));
  }

  TNode<UintPtrT> tmp46;
  TNode<BoolT> tmp47;
  if (block47.is_used()) {
    ca_.Bind(&block47);
    tmp46 = FromConstexpr_uintptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp47 = CodeStubAssembler(state_).WordEqual(TNode<UintPtrT>{p_attachedSourceAndLength.length}, TNode<UintPtrT>{tmp46});
    ca_.Branch(tmp47, &block48, std::vector<compiler::Node*>{}, &block49, std::vector<compiler::Node*>{});
  }

  if (block48.is_used()) {
    ca_.Bind(&block48);
    ca_.Goto(&block2);
  }

  if (block49.is_used()) {
    ca_.Bind(&block49);
    TypedArrayBuiltinsAssembler(state_).CallCCopyTypedArrayElementsToTypedArray(TNode<JSTypedArray>{p_attachedSourceAndLength.array}, TNode<JSTypedArray>{p_attachedTargetAndLength.array}, TNode<UintPtrT>{p_attachedSourceAndLength.length}, TNode<UintPtrT>{p_targetOffset});
    ca_.Goto(&block7);
  }

  if (block7.is_used()) {
    ca_.Bind(&block7);
    ca_.Goto(&block2);
  }

  if (block2.is_used()) {
    ca_.Bind(&block2);
    ca_.Goto(&block50);
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    ca_.Goto(label_IfOffsetOutOfBounds);
  }

    ca_.Bind(&block50);
}

} // namespace internal
} // namespace v8
