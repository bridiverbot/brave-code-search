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
#include "torque-generated/src/objects/intl-objects-tq-csa.h"
#include "torque-generated/src/builtins/array-flat-tq-csa.h"
#include "torque-generated/src/builtins/array-join-tq-csa.h"
#include "torque-generated/src/builtins/base-tq-csa.h"
#include "torque-generated/src/builtins/cast-tq-csa.h"
#include "torque-generated/src/builtins/convert-tq-csa.h"
#include "torque-generated/src/builtins/torque-internal-tq-csa.h"
#include "torque-generated/src/objects/string-tq-csa.h"
#include "torque-generated/src/objects/intl-objects-tq-csa.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/objects/intl-objects.tq?l=13&c=1
TNode<Uint8T> IntlAsciiCollationWeightL1_0(compiler::CodeAssemblerState* state_, TNode<Uint8T> p_c, compiler::CodeAssemblerLabel* label__Bailout) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<BoolT> tmp0;
  TNode<RawPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<Uint8T> tmp3;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_bool_constexpr_bool_0(state_, (CodeStubAssembler(state_).ConstexprInt31Equal(Intl::kAsciiCollationWeightsLength, (FromConstexpr_constexpr_int31_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x100ull))))));
    CodeStubAssembler(state_).StaticAssert(TNode<BoolT>{tmp0}, "static_assert(kIntlAsciiCollationWeightsLength == 256) at https://crsrc.org/c/v8/src/objects/intl-objects.tq?l=14&c=3");
    tmp1 = CodeStubAssembler(state_).IntlAsciiCollationWeightsL1();
    tmp2 = Convert_intptr_char8_0(state_, TNode<Uint8T>{p_c});
    tmp3 = CodeStubAssembler(state_).LoadUint8Ptr(TNode<RawPtrT>{tmp1}, TNode<IntPtrT>{tmp2});
    ca_.Goto(&block3);
  }

    ca_.Bind(&block3);
  return TNode<Uint8T>{tmp3};
}

// https://crsrc.org/c/v8/src/objects/intl-objects.tq?l=17&c=1
TNode<Uint8T> IntlAsciiCollationWeightL1_1(compiler::CodeAssemblerState* state_, TNode<Uint16T> p_c, compiler::CodeAssemblerLabel* label_Bailout) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Uint32T> tmp0;
  TNode<Uint32T> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Convert_uint32_char16_0(state_, TNode<Uint16T>{p_c});
    tmp1 = FromConstexpr_uint32_constexpr_int31_0(state_, Intl::kAsciiCollationWeightsLength);
    tmp2 = CodeStubAssembler(state_).Uint32GreaterThanOrEqual(TNode<Uint32T>{tmp0}, TNode<Uint32T>{tmp1});
    ca_.Branch(tmp2, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    ca_.Goto(label_Bailout);
  }

  TNode<RawPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<Uint8T> tmp5;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp3 = CodeStubAssembler(state_).IntlAsciiCollationWeightsL1();
    tmp4 = Convert_intptr_char16_0(state_, TNode<Uint16T>{p_c});
    tmp5 = CodeStubAssembler(state_).LoadUint8Ptr(TNode<RawPtrT>{tmp3}, TNode<IntPtrT>{tmp4});
    ca_.Goto(&block5);
  }

    ca_.Bind(&block5);
  return TNode<Uint8T>{tmp5};
}

// https://crsrc.org/c/v8/src/objects/intl-objects.tq?l=22&c=1
TNode<Uint8T> IntlAsciiCollationWeightL3_0(compiler::CodeAssemblerState* state_, TNode<Uint8T> p_c, compiler::CodeAssemblerLabel* label__Bailout) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<BoolT> tmp0;
  TNode<RawPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<Uint8T> tmp3;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_bool_constexpr_bool_0(state_, (CodeStubAssembler(state_).ConstexprInt31Equal(Intl::kAsciiCollationWeightsLength, (FromConstexpr_constexpr_int31_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x100ull))))));
    CodeStubAssembler(state_).StaticAssert(TNode<BoolT>{tmp0}, "static_assert(kIntlAsciiCollationWeightsLength == 256) at https://crsrc.org/c/v8/src/objects/intl-objects.tq?l=23&c=3");
    tmp1 = CodeStubAssembler(state_).IntlAsciiCollationWeightsL3();
    tmp2 = Convert_intptr_char8_0(state_, TNode<Uint8T>{p_c});
    tmp3 = CodeStubAssembler(state_).LoadUint8Ptr(TNode<RawPtrT>{tmp1}, TNode<IntPtrT>{tmp2});
    ca_.Goto(&block3);
  }

    ca_.Bind(&block3);
  return TNode<Uint8T>{tmp3};
}

// https://crsrc.org/c/v8/src/objects/intl-objects.tq?l=26&c=1
TNode<Uint8T> IntlAsciiCollationWeightL3_1(compiler::CodeAssemblerState* state_, TNode<Uint16T> p_c, compiler::CodeAssemblerLabel* label_Bailout) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Uint32T> tmp0;
  TNode<Uint32T> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Convert_uint32_char16_0(state_, TNode<Uint16T>{p_c});
    tmp1 = FromConstexpr_uint32_constexpr_int31_0(state_, Intl::kAsciiCollationWeightsLength);
    tmp2 = CodeStubAssembler(state_).Uint32GreaterThanOrEqual(TNode<Uint32T>{tmp0}, TNode<Uint32T>{tmp1});
    ca_.Branch(tmp2, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    ca_.Goto(label_Bailout);
  }

  TNode<RawPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<Uint8T> tmp5;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp3 = CodeStubAssembler(state_).IntlAsciiCollationWeightsL3();
    tmp4 = Convert_intptr_char16_0(state_, TNode<Uint16T>{p_c});
    tmp5 = CodeStubAssembler(state_).LoadUint8Ptr(TNode<RawPtrT>{tmp3}, TNode<IntPtrT>{tmp4});
    ca_.Goto(&block5);
  }

    ca_.Bind(&block5);
  return TNode<Uint8T>{tmp5};
}

// https://crsrc.org/c/v8/src/objects/intl-objects.tq?l=32&c=1
void CheckNextIs1Byte_0(compiler::CodeAssemblerState* state_, TorqueStructSlice_char8_ConstReference_char8_0 p__slice, TNode<IntPtrT> p__index, compiler::CodeAssemblerLabel* label__Bailout) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  if (block0.is_used()) {
    ca_.Bind(&block0);
    ca_.Goto(&block3);
  }

    ca_.Bind(&block3);
}

// https://crsrc.org/c/v8/src/objects/intl-objects.tq?l=36&c=1
void CheckNextIs1Byte_1(compiler::CodeAssemblerState* state_, TorqueStructSlice_char16_ConstReference_char16_0 p_slice, TNode<IntPtrT> p_index, compiler::CodeAssemblerLabel* label_Bailout) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<BoolT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp1 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_index}, TNode<IntPtrT>{tmp0});
    tmp2 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{tmp1}, TNode<IntPtrT>{p_slice.length});
    ca_.Branch(tmp2, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<IntPtrT> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<Union<HeapObject, TaggedIndex>> tmp7;
  TNode<IntPtrT> tmp8;
  TNode<Uint16T> tmp9;
  TNode<Uint32T> tmp10;
  TNode<Uint32T> tmp11;
  TNode<BoolT> tmp12;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp3 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp4 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_index}, TNode<IntPtrT>{tmp3});
    tmp5 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{tmp4});
    tmp6 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_slice.offset}, TNode<IntPtrT>{tmp5});
    std::tie(tmp7, tmp8) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_slice.object}, TNode<IntPtrT>{tmp6}).Flatten();
    tmp9 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp7, tmp8});
    tmp10 = Convert_uint32_char16_0(state_, TNode<Uint16T>{tmp9});
    tmp11 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0xffull));
    tmp12 = CodeStubAssembler(state_).Uint32GreaterThan(TNode<Uint32T>{tmp10}, TNode<Uint32T>{tmp11});
    ca_.Branch(tmp12, &block6, std::vector<compiler::Node*>{}, &block7, std::vector<compiler::Node*>{});
  }

  if (block6.is_used()) {
    ca_.Bind(&block6);
    ca_.Goto(label_Bailout);
  }

  if (block7.is_used()) {
    ca_.Bind(&block7);
    ca_.Goto(&block4);
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    ca_.Goto(&block8);
  }

    ca_.Bind(&block8);
}

TF_BUILTIN(StringFastLocaleCompare, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSFunction> parameter1 = UncheckedParameter<JSFunction>(Descriptor::kLocaleCompareFn);
  USE(parameter1);
  TNode<JSAny> parameter2 = UncheckedParameter<JSAny>(Descriptor::kLeft);
  USE(parameter2);
  TNode<JSAny> parameter3 = UncheckedParameter<JSAny>(Descriptor::kRight);
  USE(parameter3);
  TNode<JSAny> parameter4 = UncheckedParameter<JSAny>(Descriptor::kLocales);
  USE(parameter4);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block30(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT> block35(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT> block33(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, String> block39(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, String> block38(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block43(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block42(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block47(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block46(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block51(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block50(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block55(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block54(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block59(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block58(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block63(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block62(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block67(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block66(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block71(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block70(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block75(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block74(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block79(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block78(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block56(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block52(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT> block34(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block85(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block84(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT> block88(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT> block86(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, String> block92(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, String> block91(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block96(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block95(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block100(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block99(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block104(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block103(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block108(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block107(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block112(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block111(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block116(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block115(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block120(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block119(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block124(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block123(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block128(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block127(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block132(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block131(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block109(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block105(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT> block87(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block83(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block134(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block133(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block81(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block136(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block135(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block142(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block141(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT> block145(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT> block143(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, String> block149(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, String> block148(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block153(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block152(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block157(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block156(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block161(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block160(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block165(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block164(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block169(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block168(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block173(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block172(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block177(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block176(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block181(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block180(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block185(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block184(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block189(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block188(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block166(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block162(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT> block144(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block140(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block191(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block190(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block138(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block193(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block192(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block195(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block194(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block198(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block199(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny, BoolT> block200(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block201(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block202(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny, BoolT> block203(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block197(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSAny> block196(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<String> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_String_1(state_, TNode<Context>{parameter0}, TNode<Object>{parameter2}, &label1);
    ca_.Goto(&block9);
    if (label1.is_used()) {
      ca_.Bind(&label1);
      ca_.Goto(&block10);
    }
  }

  if (block10.is_used()) {
    ca_.Bind(&block10);
    ca_.Goto(&block4);
  }

  TNode<String> tmp2;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    compiler::CodeAssemblerLabel label3(&ca_);
    tmp2 = Cast_String_1(state_, TNode<Context>{parameter0}, TNode<Object>{parameter3}, &label3);
    ca_.Goto(&block11);
    if (label3.is_used()) {
      ca_.Bind(&label3);
      ca_.Goto(&block12);
    }
  }

  if (block12.is_used()) {
    ca_.Bind(&block12);
    ca_.Goto(&block4);
  }

  TNode<BoolT> tmp4;
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp4 = CodeStubAssembler(state_).TaggedEqual(TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{tmp0}, TNode<Union<HeapObject, Smi, Weak<HeapObject>>>{tmp2});
    ca_.Branch(tmp4, &block13, std::vector<compiler::Node*>{}, &block14, std::vector<compiler::Node*>{});
  }

  TNode<Smi> tmp5;
  if (block13.is_used()) {
    ca_.Bind(&block13);
    tmp5 = SmiConstant_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block2, tmp5);
  }

  TNode<SeqOneByteString> tmp6;
  if (block14.is_used()) {
    ca_.Bind(&block14);
    compiler::CodeAssemblerLabel label7(&ca_);
    tmp6 = Cast_SeqOneByteString_1(state_, TNode<String>{tmp0}, &label7);
    ca_.Goto(&block17);
    if (label7.is_used()) {
      ca_.Bind(&label7);
      ca_.Goto(&block18);
    }
  }

  if (block18.is_used()) {
    ca_.Bind(&block18);
    ca_.Goto(&block15);
  }

  TNode<SeqOneByteString> tmp8;
  if (block17.is_used()) {
    ca_.Bind(&block17);
    compiler::CodeAssemblerLabel label9(&ca_);
    tmp8 = Cast_SeqOneByteString_1(state_, TNode<String>{tmp2}, &label9);
    ca_.Goto(&block21);
    if (label9.is_used()) {
      ca_.Bind(&label9);
      ca_.Goto(&block22);
    }
  }

  if (block22.is_used()) {
    ca_.Bind(&block22);
    ca_.Goto(&block15);
  }

  TNode<IntPtrT> tmp10;
  TNode<Int32T> tmp11;
  TNode<IntPtrT> tmp12;
  TNode<IntPtrT> tmp13;
  TNode<Int32T> tmp14;
  TNode<IntPtrT> tmp15;
  TNode<Union<HeapObject, TaggedIndex>> tmp16;
  TNode<IntPtrT> tmp17;
  TNode<IntPtrT> tmp18;
  TNode<IntPtrT> tmp19;
  TNode<Union<HeapObject, TaggedIndex>> tmp20;
  TNode<IntPtrT> tmp21;
  TNode<IntPtrT> tmp22;
  if (block21.is_used()) {
    ca_.Bind(&block21);
    tmp10 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp11 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp6, tmp10});
    tmp12 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp11});
    tmp13 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp14 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp8, tmp13});
    tmp15 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp14});
    std::tie(tmp16, tmp17, tmp18) = FieldSliceSeqOneByteStringChars_0(state_, TNode<SeqOneByteString>{tmp6}).Flatten();
    tmp19 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    compiler::CodeAssemblerLabel label23(&ca_);
    std::tie(tmp20, tmp21, tmp22) = Subslice_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp16}, TNode<IntPtrT>{tmp17}, TNode<IntPtrT>{tmp18}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{tmp19}, TNode<IntPtrT>{tmp12}, &label23).Flatten();
    ca_.Goto(&block25);
    if (label23.is_used()) {
      ca_.Bind(&label23);
      ca_.Goto(&block26);
    }
  }

  if (block26.is_used()) {
    ca_.Bind(&block26);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/intl-objects.tq:142:64");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> tmp24;
  TNode<IntPtrT> tmp25;
  TNode<IntPtrT> tmp26;
  TNode<IntPtrT> tmp27;
  TNode<Union<HeapObject, TaggedIndex>> tmp28;
  TNode<IntPtrT> tmp29;
  TNode<IntPtrT> tmp30;
  if (block25.is_used()) {
    ca_.Bind(&block25);
    std::tie(tmp24, tmp25, tmp26) = FieldSliceSeqOneByteStringChars_0(state_, TNode<SeqOneByteString>{tmp8}).Flatten();
    tmp27 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    compiler::CodeAssemblerLabel label31(&ca_);
    std::tie(tmp28, tmp29, tmp30) = Subslice_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp24}, TNode<IntPtrT>{tmp25}, TNode<IntPtrT>{tmp26}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{tmp27}, TNode<IntPtrT>{tmp15}, &label31).Flatten();
    ca_.Goto(&block29);
    if (label31.is_used()) {
      ca_.Bind(&label31);
      ca_.Goto(&block30);
    }
  }

  if (block30.is_used()) {
    ca_.Bind(&block30);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/intl-objects.tq:144:65");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Number> tmp32;
  if (block29.is_used()) {
    ca_.Bind(&block29);
    compiler::CodeAssemblerLabel label33(&ca_);
    tmp32 = LocaleCompareFastPath_char8_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp20}, TNode<IntPtrT>{tmp21}, TNode<IntPtrT>{tmp22}, TorqueStructUnsafe_0{}}, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp28}, TNode<IntPtrT>{tmp29}, TNode<IntPtrT>{tmp30}, TorqueStructUnsafe_0{}}, &label33);
    ca_.Goto(&block31);
    if (label33.is_used()) {
      ca_.Bind(&label33);
      ca_.Goto(&block32);
    }
  }

  if (block32.is_used()) {
    ca_.Bind(&block32);
    ca_.Goto(&block4);
  }

  if (block31.is_used()) {
    ca_.Bind(&block31);
    ca_.Goto(&block2, tmp32);
  }

  TNode<IntPtrT> tmp34;
  TNode<IntPtrT> tmp35;
  TNode<Int32T> tmp36;
  TNode<IntPtrT> tmp37;
  if (block15.is_used()) {
    ca_.Bind(&block15);
    tmp34 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp35 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp36 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp0, tmp35});
    tmp37 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp36});
    ca_.Goto(&block35, tmp0, tmp34);
  }

  TNode<String> phi_bb35_9;
  TNode<IntPtrT> phi_bb35_10;
  TNode<BoolT> tmp38;
  if (block35.is_used()) {
    ca_.Bind(&block35, &phi_bb35_9, &phi_bb35_10);
    tmp38 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Branch(tmp38, &block33, std::vector<compiler::Node*>{phi_bb35_9, phi_bb35_10}, &block34, std::vector<compiler::Node*>{phi_bb35_9, phi_bb35_10});
  }

  TNode<String> phi_bb33_9;
  TNode<IntPtrT> phi_bb33_10;
  TNode<SeqOneByteString> tmp39;
  if (block33.is_used()) {
    ca_.Bind(&block33, &phi_bb33_9, &phi_bb33_10);
    compiler::CodeAssemblerLabel label40(&ca_);
    tmp39 = Cast_SeqOneByteString_1(state_, TNode<String>{phi_bb33_9}, &label40);
    ca_.Goto(&block38, phi_bb33_9, phi_bb33_10, phi_bb33_9, phi_bb33_9);
    if (label40.is_used()) {
      ca_.Bind(&label40);
      ca_.Goto(&block39, phi_bb33_9, phi_bb33_10, phi_bb33_9, phi_bb33_9);
    }
  }

  TNode<String> phi_bb39_9;
  TNode<IntPtrT> phi_bb39_10;
  TNode<String> phi_bb39_12;
  TNode<String> phi_bb39_13;
  TNode<SeqTwoByteString> tmp41;
  if (block39.is_used()) {
    ca_.Bind(&block39, &phi_bb39_9, &phi_bb39_10, &phi_bb39_12, &phi_bb39_13);
    compiler::CodeAssemblerLabel label42(&ca_);
    tmp41 = Cast_SeqTwoByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb39_12)}, &label42);
    ca_.Goto(&block46, phi_bb39_9, phi_bb39_10, phi_bb39_12);
    if (label42.is_used()) {
      ca_.Bind(&label42);
      ca_.Goto(&block47, phi_bb39_9, phi_bb39_10, phi_bb39_12);
    }
  }

  TNode<String> phi_bb38_9;
  TNode<IntPtrT> phi_bb38_10;
  TNode<String> phi_bb38_12;
  TNode<String> phi_bb38_13;
  TNode<Union<HeapObject, TaggedIndex>> tmp43;
  TNode<IntPtrT> tmp44;
  TNode<IntPtrT> tmp45;
  TNode<Union<HeapObject, TaggedIndex>> tmp46;
  TNode<IntPtrT> tmp47;
  TNode<IntPtrT> tmp48;
  if (block38.is_used()) {
    ca_.Bind(&block38, &phi_bb38_9, &phi_bb38_10, &phi_bb38_12, &phi_bb38_13);
    std::tie(tmp43, tmp44, tmp45) = FieldSliceSeqOneByteStringChars_0(state_, TNode<SeqOneByteString>{tmp39}).Flatten();
    compiler::CodeAssemblerLabel label49(&ca_);
    std::tie(tmp46, tmp47, tmp48) = Subslice_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp43}, TNode<IntPtrT>{tmp44}, TNode<IntPtrT>{tmp45}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb38_10}, TNode<IntPtrT>{tmp37}, &label49).Flatten();
    ca_.Goto(&block42, phi_bb38_9, phi_bb38_10, phi_bb38_12, phi_bb38_10);
    if (label49.is_used()) {
      ca_.Bind(&label49);
      ca_.Goto(&block43, phi_bb38_9, phi_bb38_10, phi_bb38_12, phi_bb38_10);
    }
  }

  TNode<String> phi_bb43_9;
  TNode<IntPtrT> phi_bb43_10;
  TNode<String> phi_bb43_12;
  TNode<IntPtrT> phi_bb43_17;
  if (block43.is_used()) {
    ca_.Bind(&block43, &phi_bb43_9, &phi_bb43_10, &phi_bb43_12, &phi_bb43_17);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:292:67");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> phi_bb42_9;
  TNode<IntPtrT> phi_bb42_10;
  TNode<String> phi_bb42_12;
  TNode<IntPtrT> phi_bb42_17;
  if (block42.is_used()) {
    ca_.Bind(&block42, &phi_bb42_9, &phi_bb42_10, &phi_bb42_12, &phi_bb42_17);
    ca_.Goto(&block8, tmp46, tmp47, tmp48);
  }

  TNode<String> phi_bb47_9;
  TNode<IntPtrT> phi_bb47_10;
  TNode<String> phi_bb47_12;
  TNode<ThinString> tmp50;
  if (block47.is_used()) {
    ca_.Bind(&block47, &phi_bb47_9, &phi_bb47_10, &phi_bb47_12);
    compiler::CodeAssemblerLabel label51(&ca_);
    tmp50 = Cast_ThinString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb47_12)}, &label51);
    ca_.Goto(&block54, phi_bb47_9, phi_bb47_10, phi_bb47_12);
    if (label51.is_used()) {
      ca_.Bind(&label51);
      ca_.Goto(&block55, phi_bb47_9, phi_bb47_10, phi_bb47_12);
    }
  }

  TNode<String> phi_bb46_9;
  TNode<IntPtrT> phi_bb46_10;
  TNode<String> phi_bb46_12;
  TNode<Union<HeapObject, TaggedIndex>> tmp52;
  TNode<IntPtrT> tmp53;
  TNode<IntPtrT> tmp54;
  TNode<Union<HeapObject, TaggedIndex>> tmp55;
  TNode<IntPtrT> tmp56;
  TNode<IntPtrT> tmp57;
  if (block46.is_used()) {
    ca_.Bind(&block46, &phi_bb46_9, &phi_bb46_10, &phi_bb46_12);
    std::tie(tmp52, tmp53, tmp54) = FieldSliceSeqTwoByteStringChars_0(state_, TNode<SeqTwoByteString>{tmp41}).Flatten();
    compiler::CodeAssemblerLabel label58(&ca_);
    std::tie(tmp55, tmp56, tmp57) = Subslice_char16_0(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{tmp52}, TNode<IntPtrT>{tmp53}, TNode<IntPtrT>{tmp54}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb46_10}, TNode<IntPtrT>{tmp37}, &label58).Flatten();
    ca_.Goto(&block50, phi_bb46_9, phi_bb46_10, phi_bb46_12, phi_bb46_10);
    if (label58.is_used()) {
      ca_.Bind(&label58);
      ca_.Goto(&block51, phi_bb46_9, phi_bb46_10, phi_bb46_12, phi_bb46_10);
    }
  }

  TNode<String> phi_bb51_9;
  TNode<IntPtrT> phi_bb51_10;
  TNode<String> phi_bb51_12;
  TNode<IntPtrT> phi_bb51_17;
  if (block51.is_used()) {
    ca_.Bind(&block51, &phi_bb51_9, &phi_bb51_10, &phi_bb51_12, &phi_bb51_17);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:295:67");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> phi_bb50_9;
  TNode<IntPtrT> phi_bb50_10;
  TNode<String> phi_bb50_12;
  TNode<IntPtrT> phi_bb50_17;
  if (block50.is_used()) {
    ca_.Bind(&block50, &phi_bb50_9, &phi_bb50_10, &phi_bb50_12, &phi_bb50_17);
    ca_.Goto(&block6, tmp55, tmp56, tmp57);
  }

  TNode<String> phi_bb55_9;
  TNode<IntPtrT> phi_bb55_10;
  TNode<String> phi_bb55_12;
  TNode<ConsString> tmp59;
  if (block55.is_used()) {
    ca_.Bind(&block55, &phi_bb55_9, &phi_bb55_10, &phi_bb55_12);
    compiler::CodeAssemblerLabel label60(&ca_);
    tmp59 = Cast_ConsString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb55_12)}, &label60);
    ca_.Goto(&block58, phi_bb55_9, phi_bb55_10, phi_bb55_12);
    if (label60.is_used()) {
      ca_.Bind(&label60);
      ca_.Goto(&block59, phi_bb55_9, phi_bb55_10, phi_bb55_12);
    }
  }

  TNode<String> phi_bb54_9;
  TNode<IntPtrT> phi_bb54_10;
  TNode<String> phi_bb54_12;
  TNode<IntPtrT> tmp61;
  TNode<InternalizedString> tmp62;
  if (block54.is_used()) {
    ca_.Bind(&block54, &phi_bb54_9, &phi_bb54_10, &phi_bb54_12);
    tmp61 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp62 = CodeStubAssembler(state_).LoadReference<InternalizedString>(CodeStubAssembler::Reference{tmp50, tmp61});
    ca_.Goto(&block52, tmp62, phi_bb54_10, phi_bb54_12);
  }

  TNode<String> phi_bb59_9;
  TNode<IntPtrT> phi_bb59_10;
  TNode<String> phi_bb59_12;
  TNode<SlicedString> tmp63;
  if (block59.is_used()) {
    ca_.Bind(&block59, &phi_bb59_9, &phi_bb59_10, &phi_bb59_12);
    compiler::CodeAssemblerLabel label64(&ca_);
    tmp63 = Cast_SlicedString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb59_12)}, &label64);
    ca_.Goto(&block62, phi_bb59_9, phi_bb59_10, phi_bb59_12);
    if (label64.is_used()) {
      ca_.Bind(&label64);
      ca_.Goto(&block63, phi_bb59_9, phi_bb59_10, phi_bb59_12);
    }
  }

  TNode<String> phi_bb58_9;
  TNode<IntPtrT> phi_bb58_10;
  TNode<String> phi_bb58_12;
  TNode<String> tmp65;
  if (block58.is_used()) {
    ca_.Bind(&block58, &phi_bb58_9, &phi_bb58_10, &phi_bb58_12);
    tmp65 = Flatten_1(state_, TNode<ConsString>{tmp59});
    ca_.Goto(&block56, tmp65, phi_bb58_10, phi_bb58_12);
  }

  TNode<String> phi_bb63_9;
  TNode<IntPtrT> phi_bb63_10;
  TNode<String> phi_bb63_12;
  TNode<ExternalOneByteString> tmp66;
  if (block63.is_used()) {
    ca_.Bind(&block63, &phi_bb63_9, &phi_bb63_10, &phi_bb63_12);
    compiler::CodeAssemblerLabel label67(&ca_);
    tmp66 = Cast_ExternalOneByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb63_12)}, &label67);
    ca_.Goto(&block66, phi_bb63_9, phi_bb63_10, phi_bb63_12);
    if (label67.is_used()) {
      ca_.Bind(&label67);
      ca_.Goto(&block67, phi_bb63_9, phi_bb63_10, phi_bb63_12);
    }
  }

  TNode<String> phi_bb62_9;
  TNode<IntPtrT> phi_bb62_10;
  TNode<String> phi_bb62_12;
  TNode<IntPtrT> tmp68;
  TNode<Smi> tmp69;
  TNode<IntPtrT> tmp70;
  TNode<Int32T> tmp71;
  TNode<Int32T> tmp72;
  TNode<Int32T> tmp73;
  TNode<Uint32T> tmp74;
  TNode<IntPtrT> tmp75;
  TNode<IntPtrT> tmp76;
  TNode<String> tmp77;
  if (block62.is_used()) {
    ca_.Bind(&block62, &phi_bb62_9, &phi_bb62_10, &phi_bb62_12);
    tmp68 = FromConstexpr_intptr_constexpr_int31_0(state_, 16);
    tmp69 = CodeStubAssembler(state_).LoadReference<Smi>(CodeStubAssembler::Reference{tmp63, tmp68});
    tmp70 = Convert_intptr_Smi_0(state_, TNode<Smi>{tmp69});
    tmp71 = CodeStubAssembler(state_).TruncateIntPtrToInt32(TNode<IntPtrT>{tmp70});
    tmp72 = CodeStubAssembler(state_).TruncateIntPtrToInt32(TNode<IntPtrT>{phi_bb62_10});
    tmp73 = CodeStubAssembler(state_).Int32Add(TNode<Int32T>{tmp72}, TNode<Int32T>{tmp71});
    tmp74 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp73});
    tmp75 = Convert_intptr_uint32_0(state_, TNode<Uint32T>{tmp74});
    tmp76 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp77 = CodeStubAssembler(state_).LoadReference<String>(CodeStubAssembler::Reference{tmp63, tmp76});
    ca_.Goto(&block56, tmp77, tmp75, phi_bb62_12);
  }

  TNode<String> phi_bb67_9;
  TNode<IntPtrT> phi_bb67_10;
  TNode<String> phi_bb67_12;
  TNode<ExternalTwoByteString> tmp78;
  if (block67.is_used()) {
    ca_.Bind(&block67, &phi_bb67_9, &phi_bb67_10, &phi_bb67_12);
    compiler::CodeAssemblerLabel label79(&ca_);
    tmp78 = Cast_ExternalTwoByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb67_12)}, &label79);
    ca_.Goto(&block74, phi_bb67_9, phi_bb67_10, phi_bb67_12);
    if (label79.is_used()) {
      ca_.Bind(&label79);
      ca_.Goto(&block75, phi_bb67_9, phi_bb67_10, phi_bb67_12);
    }
  }

  TNode<String> phi_bb66_9;
  TNode<IntPtrT> phi_bb66_10;
  TNode<String> phi_bb66_12;
  TNode<RawPtrT> tmp80;
  TNode<IntPtrT> tmp81;
  TNode<Int32T> tmp82;
  TNode<IntPtrT> tmp83;
  TNode<Union<HeapObject, TaggedIndex>> tmp84;
  TNode<IntPtrT> tmp85;
  TNode<IntPtrT> tmp86;
  TNode<Union<HeapObject, TaggedIndex>> tmp87;
  TNode<IntPtrT> tmp88;
  TNode<IntPtrT> tmp89;
  if (block66.is_used()) {
    ca_.Bind(&block66, &phi_bb66_9, &phi_bb66_10, &phi_bb66_12);
    tmp80 = Method_ExternalOneByteString_GetChars_0(state_, TNode<ExternalOneByteString>{tmp66});
    tmp81 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp82 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp66, tmp81});
    tmp83 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp82});
    std::tie(tmp84, tmp85, tmp86) = NewOffHeapConstSlice_char8_0(state_, TNode<RawPtrT>{tmp80}, TNode<IntPtrT>{tmp83}).Flatten();
    compiler::CodeAssemblerLabel label90(&ca_);
    std::tie(tmp87, tmp88, tmp89) = Subslice_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp84}, TNode<IntPtrT>{tmp85}, TNode<IntPtrT>{tmp86}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb66_10}, TNode<IntPtrT>{tmp37}, &label90).Flatten();
    ca_.Goto(&block70, phi_bb66_9, phi_bb66_10, phi_bb66_12, phi_bb66_10);
    if (label90.is_used()) {
      ca_.Bind(&label90);
      ca_.Goto(&block71, phi_bb66_9, phi_bb66_10, phi_bb66_12, phi_bb66_10);
    }
  }

  TNode<String> phi_bb71_9;
  TNode<IntPtrT> phi_bb71_10;
  TNode<String> phi_bb71_12;
  TNode<IntPtrT> phi_bb71_20;
  if (block71.is_used()) {
    ca_.Bind(&block71, &phi_bb71_9, &phi_bb71_10, &phi_bb71_12, &phi_bb71_20);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:315:63");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> phi_bb70_9;
  TNode<IntPtrT> phi_bb70_10;
  TNode<String> phi_bb70_12;
  TNode<IntPtrT> phi_bb70_20;
  if (block70.is_used()) {
    ca_.Bind(&block70, &phi_bb70_9, &phi_bb70_10, &phi_bb70_12, &phi_bb70_20);
    ca_.Goto(&block8, tmp87, tmp88, tmp89);
  }

  TNode<String> phi_bb75_9;
  TNode<IntPtrT> phi_bb75_10;
  TNode<String> phi_bb75_12;
  if (block75.is_used()) {
    ca_.Bind(&block75, &phi_bb75_9, &phi_bb75_10, &phi_bb75_12);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:323:9");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> phi_bb74_9;
  TNode<IntPtrT> phi_bb74_10;
  TNode<String> phi_bb74_12;
  TNode<RawPtrT> tmp91;
  TNode<IntPtrT> tmp92;
  TNode<Int32T> tmp93;
  TNode<IntPtrT> tmp94;
  TNode<Union<HeapObject, TaggedIndex>> tmp95;
  TNode<IntPtrT> tmp96;
  TNode<IntPtrT> tmp97;
  TNode<Union<HeapObject, TaggedIndex>> tmp98;
  TNode<IntPtrT> tmp99;
  TNode<IntPtrT> tmp100;
  if (block74.is_used()) {
    ca_.Bind(&block74, &phi_bb74_9, &phi_bb74_10, &phi_bb74_12);
    tmp91 = Method_ExternalTwoByteString_GetChars_0(state_, TNode<ExternalTwoByteString>{tmp78});
    tmp92 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp93 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp78, tmp92});
    tmp94 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp93});
    std::tie(tmp95, tmp96, tmp97) = NewOffHeapConstSlice_char16_0(state_, TNode<RawPtrT>{tmp91}, TNode<IntPtrT>{tmp94}).Flatten();
    compiler::CodeAssemblerLabel label101(&ca_);
    std::tie(tmp98, tmp99, tmp100) = Subslice_char16_0(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{tmp95}, TNode<IntPtrT>{tmp96}, TNode<IntPtrT>{tmp97}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb74_10}, TNode<IntPtrT>{tmp37}, &label101).Flatten();
    ca_.Goto(&block78, phi_bb74_9, phi_bb74_10, phi_bb74_12, phi_bb74_10);
    if (label101.is_used()) {
      ca_.Bind(&label101);
      ca_.Goto(&block79, phi_bb74_9, phi_bb74_10, phi_bb74_12, phi_bb74_10);
    }
  }

  TNode<String> phi_bb79_9;
  TNode<IntPtrT> phi_bb79_10;
  TNode<String> phi_bb79_12;
  TNode<IntPtrT> phi_bb79_20;
  if (block79.is_used()) {
    ca_.Bind(&block79, &phi_bb79_9, &phi_bb79_10, &phi_bb79_12, &phi_bb79_20);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:320:63");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> phi_bb78_9;
  TNode<IntPtrT> phi_bb78_10;
  TNode<String> phi_bb78_12;
  TNode<IntPtrT> phi_bb78_20;
  if (block78.is_used()) {
    ca_.Bind(&block78, &phi_bb78_9, &phi_bb78_10, &phi_bb78_12, &phi_bb78_20);
    ca_.Goto(&block6, tmp98, tmp99, tmp100);
  }

  TNode<String> phi_bb56_9;
  TNode<IntPtrT> phi_bb56_10;
  TNode<String> phi_bb56_12;
  if (block56.is_used()) {
    ca_.Bind(&block56, &phi_bb56_9, &phi_bb56_10, &phi_bb56_12);
    ca_.Goto(&block52, phi_bb56_9, phi_bb56_10, phi_bb56_12);
  }

  TNode<String> phi_bb52_9;
  TNode<IntPtrT> phi_bb52_10;
  TNode<String> phi_bb52_12;
  if (block52.is_used()) {
    ca_.Bind(&block52, &phi_bb52_9, &phi_bb52_10, &phi_bb52_12);
    ca_.Goto(&block35, phi_bb52_9, phi_bb52_10);
  }

  TNode<String> phi_bb34_9;
  TNode<IntPtrT> phi_bb34_10;
  if (block34.is_used()) {
    ca_.Bind(&block34, &phi_bb34_9, &phi_bb34_10);
    VerifiedUnreachable_0(state_);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb8_5;
  TNode<IntPtrT> phi_bb8_6;
  TNode<IntPtrT> phi_bb8_7;
  TNode<String> tmp102;
  if (block8.is_used()) {
    ca_.Bind(&block8, &phi_bb8_5, &phi_bb8_6, &phi_bb8_7);
    compiler::CodeAssemblerLabel label103(&ca_);
    tmp102 = Cast_String_1(state_, TNode<Context>{parameter0}, TNode<Object>{parameter3}, &label103);
    ca_.Goto(&block84, phi_bb8_5, phi_bb8_6, phi_bb8_7);
    if (label103.is_used()) {
      ca_.Bind(&label103);
      ca_.Goto(&block85, phi_bb8_5, phi_bb8_6, phi_bb8_7);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb85_5;
  TNode<IntPtrT> phi_bb85_6;
  TNode<IntPtrT> phi_bb85_7;
  if (block85.is_used()) {
    ca_.Bind(&block85, &phi_bb85_5, &phi_bb85_6, &phi_bb85_7);
    ca_.Goto(&block4);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb84_5;
  TNode<IntPtrT> phi_bb84_6;
  TNode<IntPtrT> phi_bb84_7;
  TNode<IntPtrT> tmp104;
  TNode<IntPtrT> tmp105;
  TNode<Int32T> tmp106;
  TNode<IntPtrT> tmp107;
  if (block84.is_used()) {
    ca_.Bind(&block84, &phi_bb84_5, &phi_bb84_6, &phi_bb84_7);
    tmp104 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp105 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp106 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp102, tmp105});
    tmp107 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp106});
    ca_.Goto(&block88, phi_bb84_5, phi_bb84_6, phi_bb84_7, tmp102, tmp104);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb88_5;
  TNode<IntPtrT> phi_bb88_6;
  TNode<IntPtrT> phi_bb88_7;
  TNode<String> phi_bb88_11;
  TNode<IntPtrT> phi_bb88_12;
  TNode<BoolT> tmp108;
  if (block88.is_used()) {
    ca_.Bind(&block88, &phi_bb88_5, &phi_bb88_6, &phi_bb88_7, &phi_bb88_11, &phi_bb88_12);
    tmp108 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Branch(tmp108, &block86, std::vector<compiler::Node*>{phi_bb88_5, phi_bb88_6, phi_bb88_7, phi_bb88_11, phi_bb88_12}, &block87, std::vector<compiler::Node*>{phi_bb88_5, phi_bb88_6, phi_bb88_7, phi_bb88_11, phi_bb88_12});
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb86_5;
  TNode<IntPtrT> phi_bb86_6;
  TNode<IntPtrT> phi_bb86_7;
  TNode<String> phi_bb86_11;
  TNode<IntPtrT> phi_bb86_12;
  TNode<SeqOneByteString> tmp109;
  if (block86.is_used()) {
    ca_.Bind(&block86, &phi_bb86_5, &phi_bb86_6, &phi_bb86_7, &phi_bb86_11, &phi_bb86_12);
    compiler::CodeAssemblerLabel label110(&ca_);
    tmp109 = Cast_SeqOneByteString_1(state_, TNode<String>{phi_bb86_11}, &label110);
    ca_.Goto(&block91, phi_bb86_5, phi_bb86_6, phi_bb86_7, phi_bb86_11, phi_bb86_12, phi_bb86_11, phi_bb86_11);
    if (label110.is_used()) {
      ca_.Bind(&label110);
      ca_.Goto(&block92, phi_bb86_5, phi_bb86_6, phi_bb86_7, phi_bb86_11, phi_bb86_12, phi_bb86_11, phi_bb86_11);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb92_5;
  TNode<IntPtrT> phi_bb92_6;
  TNode<IntPtrT> phi_bb92_7;
  TNode<String> phi_bb92_11;
  TNode<IntPtrT> phi_bb92_12;
  TNode<String> phi_bb92_14;
  TNode<String> phi_bb92_15;
  TNode<SeqTwoByteString> tmp111;
  if (block92.is_used()) {
    ca_.Bind(&block92, &phi_bb92_5, &phi_bb92_6, &phi_bb92_7, &phi_bb92_11, &phi_bb92_12, &phi_bb92_14, &phi_bb92_15);
    compiler::CodeAssemblerLabel label112(&ca_);
    tmp111 = Cast_SeqTwoByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb92_14)}, &label112);
    ca_.Goto(&block99, phi_bb92_5, phi_bb92_6, phi_bb92_7, phi_bb92_11, phi_bb92_12, phi_bb92_14);
    if (label112.is_used()) {
      ca_.Bind(&label112);
      ca_.Goto(&block100, phi_bb92_5, phi_bb92_6, phi_bb92_7, phi_bb92_11, phi_bb92_12, phi_bb92_14);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb91_5;
  TNode<IntPtrT> phi_bb91_6;
  TNode<IntPtrT> phi_bb91_7;
  TNode<String> phi_bb91_11;
  TNode<IntPtrT> phi_bb91_12;
  TNode<String> phi_bb91_14;
  TNode<String> phi_bb91_15;
  TNode<Union<HeapObject, TaggedIndex>> tmp113;
  TNode<IntPtrT> tmp114;
  TNode<IntPtrT> tmp115;
  TNode<Union<HeapObject, TaggedIndex>> tmp116;
  TNode<IntPtrT> tmp117;
  TNode<IntPtrT> tmp118;
  if (block91.is_used()) {
    ca_.Bind(&block91, &phi_bb91_5, &phi_bb91_6, &phi_bb91_7, &phi_bb91_11, &phi_bb91_12, &phi_bb91_14, &phi_bb91_15);
    std::tie(tmp113, tmp114, tmp115) = FieldSliceSeqOneByteStringChars_0(state_, TNode<SeqOneByteString>{tmp109}).Flatten();
    compiler::CodeAssemblerLabel label119(&ca_);
    std::tie(tmp116, tmp117, tmp118) = Subslice_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp113}, TNode<IntPtrT>{tmp114}, TNode<IntPtrT>{tmp115}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb91_12}, TNode<IntPtrT>{tmp107}, &label119).Flatten();
    ca_.Goto(&block95, phi_bb91_5, phi_bb91_6, phi_bb91_7, phi_bb91_11, phi_bb91_12, phi_bb91_14, phi_bb91_12);
    if (label119.is_used()) {
      ca_.Bind(&label119);
      ca_.Goto(&block96, phi_bb91_5, phi_bb91_6, phi_bb91_7, phi_bb91_11, phi_bb91_12, phi_bb91_14, phi_bb91_12);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb96_5;
  TNode<IntPtrT> phi_bb96_6;
  TNode<IntPtrT> phi_bb96_7;
  TNode<String> phi_bb96_11;
  TNode<IntPtrT> phi_bb96_12;
  TNode<String> phi_bb96_14;
  TNode<IntPtrT> phi_bb96_19;
  if (block96.is_used()) {
    ca_.Bind(&block96, &phi_bb96_5, &phi_bb96_6, &phi_bb96_7, &phi_bb96_11, &phi_bb96_12, &phi_bb96_14, &phi_bb96_19);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:292:67");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb95_5;
  TNode<IntPtrT> phi_bb95_6;
  TNode<IntPtrT> phi_bb95_7;
  TNode<String> phi_bb95_11;
  TNode<IntPtrT> phi_bb95_12;
  TNode<String> phi_bb95_14;
  TNode<IntPtrT> phi_bb95_19;
  if (block95.is_used()) {
    ca_.Bind(&block95, &phi_bb95_5, &phi_bb95_6, &phi_bb95_7, &phi_bb95_11, &phi_bb95_12, &phi_bb95_14, &phi_bb95_19);
    ca_.Goto(&block83, phi_bb95_5, phi_bb95_6, phi_bb95_7, tmp116, tmp117, tmp118);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb100_5;
  TNode<IntPtrT> phi_bb100_6;
  TNode<IntPtrT> phi_bb100_7;
  TNode<String> phi_bb100_11;
  TNode<IntPtrT> phi_bb100_12;
  TNode<String> phi_bb100_14;
  TNode<ThinString> tmp120;
  if (block100.is_used()) {
    ca_.Bind(&block100, &phi_bb100_5, &phi_bb100_6, &phi_bb100_7, &phi_bb100_11, &phi_bb100_12, &phi_bb100_14);
    compiler::CodeAssemblerLabel label121(&ca_);
    tmp120 = Cast_ThinString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb100_14)}, &label121);
    ca_.Goto(&block107, phi_bb100_5, phi_bb100_6, phi_bb100_7, phi_bb100_11, phi_bb100_12, phi_bb100_14);
    if (label121.is_used()) {
      ca_.Bind(&label121);
      ca_.Goto(&block108, phi_bb100_5, phi_bb100_6, phi_bb100_7, phi_bb100_11, phi_bb100_12, phi_bb100_14);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb99_5;
  TNode<IntPtrT> phi_bb99_6;
  TNode<IntPtrT> phi_bb99_7;
  TNode<String> phi_bb99_11;
  TNode<IntPtrT> phi_bb99_12;
  TNode<String> phi_bb99_14;
  TNode<Union<HeapObject, TaggedIndex>> tmp122;
  TNode<IntPtrT> tmp123;
  TNode<IntPtrT> tmp124;
  TNode<Union<HeapObject, TaggedIndex>> tmp125;
  TNode<IntPtrT> tmp126;
  TNode<IntPtrT> tmp127;
  if (block99.is_used()) {
    ca_.Bind(&block99, &phi_bb99_5, &phi_bb99_6, &phi_bb99_7, &phi_bb99_11, &phi_bb99_12, &phi_bb99_14);
    std::tie(tmp122, tmp123, tmp124) = FieldSliceSeqTwoByteStringChars_0(state_, TNode<SeqTwoByteString>{tmp111}).Flatten();
    compiler::CodeAssemblerLabel label128(&ca_);
    std::tie(tmp125, tmp126, tmp127) = Subslice_char16_0(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{tmp122}, TNode<IntPtrT>{tmp123}, TNode<IntPtrT>{tmp124}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb99_12}, TNode<IntPtrT>{tmp107}, &label128).Flatten();
    ca_.Goto(&block103, phi_bb99_5, phi_bb99_6, phi_bb99_7, phi_bb99_11, phi_bb99_12, phi_bb99_14, phi_bb99_12);
    if (label128.is_used()) {
      ca_.Bind(&label128);
      ca_.Goto(&block104, phi_bb99_5, phi_bb99_6, phi_bb99_7, phi_bb99_11, phi_bb99_12, phi_bb99_14, phi_bb99_12);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb104_5;
  TNode<IntPtrT> phi_bb104_6;
  TNode<IntPtrT> phi_bb104_7;
  TNode<String> phi_bb104_11;
  TNode<IntPtrT> phi_bb104_12;
  TNode<String> phi_bb104_14;
  TNode<IntPtrT> phi_bb104_19;
  if (block104.is_used()) {
    ca_.Bind(&block104, &phi_bb104_5, &phi_bb104_6, &phi_bb104_7, &phi_bb104_11, &phi_bb104_12, &phi_bb104_14, &phi_bb104_19);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:295:67");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb103_5;
  TNode<IntPtrT> phi_bb103_6;
  TNode<IntPtrT> phi_bb103_7;
  TNode<String> phi_bb103_11;
  TNode<IntPtrT> phi_bb103_12;
  TNode<String> phi_bb103_14;
  TNode<IntPtrT> phi_bb103_19;
  if (block103.is_used()) {
    ca_.Bind(&block103, &phi_bb103_5, &phi_bb103_6, &phi_bb103_7, &phi_bb103_11, &phi_bb103_12, &phi_bb103_14, &phi_bb103_19);
    ca_.Goto(&block81, phi_bb103_5, phi_bb103_6, phi_bb103_7, tmp125, tmp126, tmp127);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb108_5;
  TNode<IntPtrT> phi_bb108_6;
  TNode<IntPtrT> phi_bb108_7;
  TNode<String> phi_bb108_11;
  TNode<IntPtrT> phi_bb108_12;
  TNode<String> phi_bb108_14;
  TNode<ConsString> tmp129;
  if (block108.is_used()) {
    ca_.Bind(&block108, &phi_bb108_5, &phi_bb108_6, &phi_bb108_7, &phi_bb108_11, &phi_bb108_12, &phi_bb108_14);
    compiler::CodeAssemblerLabel label130(&ca_);
    tmp129 = Cast_ConsString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb108_14)}, &label130);
    ca_.Goto(&block111, phi_bb108_5, phi_bb108_6, phi_bb108_7, phi_bb108_11, phi_bb108_12, phi_bb108_14);
    if (label130.is_used()) {
      ca_.Bind(&label130);
      ca_.Goto(&block112, phi_bb108_5, phi_bb108_6, phi_bb108_7, phi_bb108_11, phi_bb108_12, phi_bb108_14);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb107_5;
  TNode<IntPtrT> phi_bb107_6;
  TNode<IntPtrT> phi_bb107_7;
  TNode<String> phi_bb107_11;
  TNode<IntPtrT> phi_bb107_12;
  TNode<String> phi_bb107_14;
  TNode<IntPtrT> tmp131;
  TNode<InternalizedString> tmp132;
  if (block107.is_used()) {
    ca_.Bind(&block107, &phi_bb107_5, &phi_bb107_6, &phi_bb107_7, &phi_bb107_11, &phi_bb107_12, &phi_bb107_14);
    tmp131 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp132 = CodeStubAssembler(state_).LoadReference<InternalizedString>(CodeStubAssembler::Reference{tmp120, tmp131});
    ca_.Goto(&block105, phi_bb107_5, phi_bb107_6, phi_bb107_7, tmp132, phi_bb107_12, phi_bb107_14);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb112_5;
  TNode<IntPtrT> phi_bb112_6;
  TNode<IntPtrT> phi_bb112_7;
  TNode<String> phi_bb112_11;
  TNode<IntPtrT> phi_bb112_12;
  TNode<String> phi_bb112_14;
  TNode<SlicedString> tmp133;
  if (block112.is_used()) {
    ca_.Bind(&block112, &phi_bb112_5, &phi_bb112_6, &phi_bb112_7, &phi_bb112_11, &phi_bb112_12, &phi_bb112_14);
    compiler::CodeAssemblerLabel label134(&ca_);
    tmp133 = Cast_SlicedString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb112_14)}, &label134);
    ca_.Goto(&block115, phi_bb112_5, phi_bb112_6, phi_bb112_7, phi_bb112_11, phi_bb112_12, phi_bb112_14);
    if (label134.is_used()) {
      ca_.Bind(&label134);
      ca_.Goto(&block116, phi_bb112_5, phi_bb112_6, phi_bb112_7, phi_bb112_11, phi_bb112_12, phi_bb112_14);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb111_5;
  TNode<IntPtrT> phi_bb111_6;
  TNode<IntPtrT> phi_bb111_7;
  TNode<String> phi_bb111_11;
  TNode<IntPtrT> phi_bb111_12;
  TNode<String> phi_bb111_14;
  TNode<String> tmp135;
  if (block111.is_used()) {
    ca_.Bind(&block111, &phi_bb111_5, &phi_bb111_6, &phi_bb111_7, &phi_bb111_11, &phi_bb111_12, &phi_bb111_14);
    tmp135 = Flatten_1(state_, TNode<ConsString>{tmp129});
    ca_.Goto(&block109, phi_bb111_5, phi_bb111_6, phi_bb111_7, tmp135, phi_bb111_12, phi_bb111_14);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb116_5;
  TNode<IntPtrT> phi_bb116_6;
  TNode<IntPtrT> phi_bb116_7;
  TNode<String> phi_bb116_11;
  TNode<IntPtrT> phi_bb116_12;
  TNode<String> phi_bb116_14;
  TNode<ExternalOneByteString> tmp136;
  if (block116.is_used()) {
    ca_.Bind(&block116, &phi_bb116_5, &phi_bb116_6, &phi_bb116_7, &phi_bb116_11, &phi_bb116_12, &phi_bb116_14);
    compiler::CodeAssemblerLabel label137(&ca_);
    tmp136 = Cast_ExternalOneByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb116_14)}, &label137);
    ca_.Goto(&block119, phi_bb116_5, phi_bb116_6, phi_bb116_7, phi_bb116_11, phi_bb116_12, phi_bb116_14);
    if (label137.is_used()) {
      ca_.Bind(&label137);
      ca_.Goto(&block120, phi_bb116_5, phi_bb116_6, phi_bb116_7, phi_bb116_11, phi_bb116_12, phi_bb116_14);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb115_5;
  TNode<IntPtrT> phi_bb115_6;
  TNode<IntPtrT> phi_bb115_7;
  TNode<String> phi_bb115_11;
  TNode<IntPtrT> phi_bb115_12;
  TNode<String> phi_bb115_14;
  TNode<IntPtrT> tmp138;
  TNode<Smi> tmp139;
  TNode<IntPtrT> tmp140;
  TNode<Int32T> tmp141;
  TNode<Int32T> tmp142;
  TNode<Int32T> tmp143;
  TNode<Uint32T> tmp144;
  TNode<IntPtrT> tmp145;
  TNode<IntPtrT> tmp146;
  TNode<String> tmp147;
  if (block115.is_used()) {
    ca_.Bind(&block115, &phi_bb115_5, &phi_bb115_6, &phi_bb115_7, &phi_bb115_11, &phi_bb115_12, &phi_bb115_14);
    tmp138 = FromConstexpr_intptr_constexpr_int31_0(state_, 16);
    tmp139 = CodeStubAssembler(state_).LoadReference<Smi>(CodeStubAssembler::Reference{tmp133, tmp138});
    tmp140 = Convert_intptr_Smi_0(state_, TNode<Smi>{tmp139});
    tmp141 = CodeStubAssembler(state_).TruncateIntPtrToInt32(TNode<IntPtrT>{tmp140});
    tmp142 = CodeStubAssembler(state_).TruncateIntPtrToInt32(TNode<IntPtrT>{phi_bb115_12});
    tmp143 = CodeStubAssembler(state_).Int32Add(TNode<Int32T>{tmp142}, TNode<Int32T>{tmp141});
    tmp144 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp143});
    tmp145 = Convert_intptr_uint32_0(state_, TNode<Uint32T>{tmp144});
    tmp146 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp147 = CodeStubAssembler(state_).LoadReference<String>(CodeStubAssembler::Reference{tmp133, tmp146});
    ca_.Goto(&block109, phi_bb115_5, phi_bb115_6, phi_bb115_7, tmp147, tmp145, phi_bb115_14);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb120_5;
  TNode<IntPtrT> phi_bb120_6;
  TNode<IntPtrT> phi_bb120_7;
  TNode<String> phi_bb120_11;
  TNode<IntPtrT> phi_bb120_12;
  TNode<String> phi_bb120_14;
  TNode<ExternalTwoByteString> tmp148;
  if (block120.is_used()) {
    ca_.Bind(&block120, &phi_bb120_5, &phi_bb120_6, &phi_bb120_7, &phi_bb120_11, &phi_bb120_12, &phi_bb120_14);
    compiler::CodeAssemblerLabel label149(&ca_);
    tmp148 = Cast_ExternalTwoByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb120_14)}, &label149);
    ca_.Goto(&block127, phi_bb120_5, phi_bb120_6, phi_bb120_7, phi_bb120_11, phi_bb120_12, phi_bb120_14);
    if (label149.is_used()) {
      ca_.Bind(&label149);
      ca_.Goto(&block128, phi_bb120_5, phi_bb120_6, phi_bb120_7, phi_bb120_11, phi_bb120_12, phi_bb120_14);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb119_5;
  TNode<IntPtrT> phi_bb119_6;
  TNode<IntPtrT> phi_bb119_7;
  TNode<String> phi_bb119_11;
  TNode<IntPtrT> phi_bb119_12;
  TNode<String> phi_bb119_14;
  TNode<RawPtrT> tmp150;
  TNode<IntPtrT> tmp151;
  TNode<Int32T> tmp152;
  TNode<IntPtrT> tmp153;
  TNode<Union<HeapObject, TaggedIndex>> tmp154;
  TNode<IntPtrT> tmp155;
  TNode<IntPtrT> tmp156;
  TNode<Union<HeapObject, TaggedIndex>> tmp157;
  TNode<IntPtrT> tmp158;
  TNode<IntPtrT> tmp159;
  if (block119.is_used()) {
    ca_.Bind(&block119, &phi_bb119_5, &phi_bb119_6, &phi_bb119_7, &phi_bb119_11, &phi_bb119_12, &phi_bb119_14);
    tmp150 = Method_ExternalOneByteString_GetChars_0(state_, TNode<ExternalOneByteString>{tmp136});
    tmp151 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp152 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp136, tmp151});
    tmp153 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp152});
    std::tie(tmp154, tmp155, tmp156) = NewOffHeapConstSlice_char8_0(state_, TNode<RawPtrT>{tmp150}, TNode<IntPtrT>{tmp153}).Flatten();
    compiler::CodeAssemblerLabel label160(&ca_);
    std::tie(tmp157, tmp158, tmp159) = Subslice_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp154}, TNode<IntPtrT>{tmp155}, TNode<IntPtrT>{tmp156}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb119_12}, TNode<IntPtrT>{tmp107}, &label160).Flatten();
    ca_.Goto(&block123, phi_bb119_5, phi_bb119_6, phi_bb119_7, phi_bb119_11, phi_bb119_12, phi_bb119_14, phi_bb119_12);
    if (label160.is_used()) {
      ca_.Bind(&label160);
      ca_.Goto(&block124, phi_bb119_5, phi_bb119_6, phi_bb119_7, phi_bb119_11, phi_bb119_12, phi_bb119_14, phi_bb119_12);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb124_5;
  TNode<IntPtrT> phi_bb124_6;
  TNode<IntPtrT> phi_bb124_7;
  TNode<String> phi_bb124_11;
  TNode<IntPtrT> phi_bb124_12;
  TNode<String> phi_bb124_14;
  TNode<IntPtrT> phi_bb124_22;
  if (block124.is_used()) {
    ca_.Bind(&block124, &phi_bb124_5, &phi_bb124_6, &phi_bb124_7, &phi_bb124_11, &phi_bb124_12, &phi_bb124_14, &phi_bb124_22);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:315:63");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb123_5;
  TNode<IntPtrT> phi_bb123_6;
  TNode<IntPtrT> phi_bb123_7;
  TNode<String> phi_bb123_11;
  TNode<IntPtrT> phi_bb123_12;
  TNode<String> phi_bb123_14;
  TNode<IntPtrT> phi_bb123_22;
  if (block123.is_used()) {
    ca_.Bind(&block123, &phi_bb123_5, &phi_bb123_6, &phi_bb123_7, &phi_bb123_11, &phi_bb123_12, &phi_bb123_14, &phi_bb123_22);
    ca_.Goto(&block83, phi_bb123_5, phi_bb123_6, phi_bb123_7, tmp157, tmp158, tmp159);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb128_5;
  TNode<IntPtrT> phi_bb128_6;
  TNode<IntPtrT> phi_bb128_7;
  TNode<String> phi_bb128_11;
  TNode<IntPtrT> phi_bb128_12;
  TNode<String> phi_bb128_14;
  if (block128.is_used()) {
    ca_.Bind(&block128, &phi_bb128_5, &phi_bb128_6, &phi_bb128_7, &phi_bb128_11, &phi_bb128_12, &phi_bb128_14);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:323:9");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb127_5;
  TNode<IntPtrT> phi_bb127_6;
  TNode<IntPtrT> phi_bb127_7;
  TNode<String> phi_bb127_11;
  TNode<IntPtrT> phi_bb127_12;
  TNode<String> phi_bb127_14;
  TNode<RawPtrT> tmp161;
  TNode<IntPtrT> tmp162;
  TNode<Int32T> tmp163;
  TNode<IntPtrT> tmp164;
  TNode<Union<HeapObject, TaggedIndex>> tmp165;
  TNode<IntPtrT> tmp166;
  TNode<IntPtrT> tmp167;
  TNode<Union<HeapObject, TaggedIndex>> tmp168;
  TNode<IntPtrT> tmp169;
  TNode<IntPtrT> tmp170;
  if (block127.is_used()) {
    ca_.Bind(&block127, &phi_bb127_5, &phi_bb127_6, &phi_bb127_7, &phi_bb127_11, &phi_bb127_12, &phi_bb127_14);
    tmp161 = Method_ExternalTwoByteString_GetChars_0(state_, TNode<ExternalTwoByteString>{tmp148});
    tmp162 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp163 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp148, tmp162});
    tmp164 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp163});
    std::tie(tmp165, tmp166, tmp167) = NewOffHeapConstSlice_char16_0(state_, TNode<RawPtrT>{tmp161}, TNode<IntPtrT>{tmp164}).Flatten();
    compiler::CodeAssemblerLabel label171(&ca_);
    std::tie(tmp168, tmp169, tmp170) = Subslice_char16_0(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{tmp165}, TNode<IntPtrT>{tmp166}, TNode<IntPtrT>{tmp167}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb127_12}, TNode<IntPtrT>{tmp107}, &label171).Flatten();
    ca_.Goto(&block131, phi_bb127_5, phi_bb127_6, phi_bb127_7, phi_bb127_11, phi_bb127_12, phi_bb127_14, phi_bb127_12);
    if (label171.is_used()) {
      ca_.Bind(&label171);
      ca_.Goto(&block132, phi_bb127_5, phi_bb127_6, phi_bb127_7, phi_bb127_11, phi_bb127_12, phi_bb127_14, phi_bb127_12);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb132_5;
  TNode<IntPtrT> phi_bb132_6;
  TNode<IntPtrT> phi_bb132_7;
  TNode<String> phi_bb132_11;
  TNode<IntPtrT> phi_bb132_12;
  TNode<String> phi_bb132_14;
  TNode<IntPtrT> phi_bb132_22;
  if (block132.is_used()) {
    ca_.Bind(&block132, &phi_bb132_5, &phi_bb132_6, &phi_bb132_7, &phi_bb132_11, &phi_bb132_12, &phi_bb132_14, &phi_bb132_22);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:320:63");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb131_5;
  TNode<IntPtrT> phi_bb131_6;
  TNode<IntPtrT> phi_bb131_7;
  TNode<String> phi_bb131_11;
  TNode<IntPtrT> phi_bb131_12;
  TNode<String> phi_bb131_14;
  TNode<IntPtrT> phi_bb131_22;
  if (block131.is_used()) {
    ca_.Bind(&block131, &phi_bb131_5, &phi_bb131_6, &phi_bb131_7, &phi_bb131_11, &phi_bb131_12, &phi_bb131_14, &phi_bb131_22);
    ca_.Goto(&block81, phi_bb131_5, phi_bb131_6, phi_bb131_7, tmp168, tmp169, tmp170);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb109_5;
  TNode<IntPtrT> phi_bb109_6;
  TNode<IntPtrT> phi_bb109_7;
  TNode<String> phi_bb109_11;
  TNode<IntPtrT> phi_bb109_12;
  TNode<String> phi_bb109_14;
  if (block109.is_used()) {
    ca_.Bind(&block109, &phi_bb109_5, &phi_bb109_6, &phi_bb109_7, &phi_bb109_11, &phi_bb109_12, &phi_bb109_14);
    ca_.Goto(&block105, phi_bb109_5, phi_bb109_6, phi_bb109_7, phi_bb109_11, phi_bb109_12, phi_bb109_14);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb105_5;
  TNode<IntPtrT> phi_bb105_6;
  TNode<IntPtrT> phi_bb105_7;
  TNode<String> phi_bb105_11;
  TNode<IntPtrT> phi_bb105_12;
  TNode<String> phi_bb105_14;
  if (block105.is_used()) {
    ca_.Bind(&block105, &phi_bb105_5, &phi_bb105_6, &phi_bb105_7, &phi_bb105_11, &phi_bb105_12, &phi_bb105_14);
    ca_.Goto(&block88, phi_bb105_5, phi_bb105_6, phi_bb105_7, phi_bb105_11, phi_bb105_12);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb87_5;
  TNode<IntPtrT> phi_bb87_6;
  TNode<IntPtrT> phi_bb87_7;
  TNode<String> phi_bb87_11;
  TNode<IntPtrT> phi_bb87_12;
  if (block87.is_used()) {
    ca_.Bind(&block87, &phi_bb87_5, &phi_bb87_6, &phi_bb87_7, &phi_bb87_11, &phi_bb87_12);
    VerifiedUnreachable_0(state_);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb83_5;
  TNode<IntPtrT> phi_bb83_6;
  TNode<IntPtrT> phi_bb83_7;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb83_8;
  TNode<IntPtrT> phi_bb83_9;
  TNode<IntPtrT> phi_bb83_10;
  TNode<Number> tmp172;
  if (block83.is_used()) {
    ca_.Bind(&block83, &phi_bb83_5, &phi_bb83_6, &phi_bb83_7, &phi_bb83_8, &phi_bb83_9, &phi_bb83_10);
    compiler::CodeAssemblerLabel label173(&ca_);
    tmp172 = LocaleCompareFastPath_char8_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{phi_bb83_5}, TNode<IntPtrT>{phi_bb83_6}, TNode<IntPtrT>{phi_bb83_7}, TorqueStructUnsafe_0{}}, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{phi_bb83_8}, TNode<IntPtrT>{phi_bb83_9}, TNode<IntPtrT>{phi_bb83_10}, TorqueStructUnsafe_0{}}, &label173);
    ca_.Goto(&block133, phi_bb83_5, phi_bb83_6, phi_bb83_7, phi_bb83_8, phi_bb83_9, phi_bb83_10, phi_bb83_5, phi_bb83_6, phi_bb83_7, phi_bb83_8, phi_bb83_9, phi_bb83_10);
    if (label173.is_used()) {
      ca_.Bind(&label173);
      ca_.Goto(&block134, phi_bb83_5, phi_bb83_6, phi_bb83_7, phi_bb83_8, phi_bb83_9, phi_bb83_10, phi_bb83_5, phi_bb83_6, phi_bb83_7, phi_bb83_8, phi_bb83_9, phi_bb83_10);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb134_5;
  TNode<IntPtrT> phi_bb134_6;
  TNode<IntPtrT> phi_bb134_7;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb134_8;
  TNode<IntPtrT> phi_bb134_9;
  TNode<IntPtrT> phi_bb134_10;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb134_11;
  TNode<IntPtrT> phi_bb134_12;
  TNode<IntPtrT> phi_bb134_13;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb134_14;
  TNode<IntPtrT> phi_bb134_15;
  TNode<IntPtrT> phi_bb134_16;
  if (block134.is_used()) {
    ca_.Bind(&block134, &phi_bb134_5, &phi_bb134_6, &phi_bb134_7, &phi_bb134_8, &phi_bb134_9, &phi_bb134_10, &phi_bb134_11, &phi_bb134_12, &phi_bb134_13, &phi_bb134_14, &phi_bb134_15, &phi_bb134_16);
    ca_.Goto(&block4);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb133_5;
  TNode<IntPtrT> phi_bb133_6;
  TNode<IntPtrT> phi_bb133_7;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb133_8;
  TNode<IntPtrT> phi_bb133_9;
  TNode<IntPtrT> phi_bb133_10;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb133_11;
  TNode<IntPtrT> phi_bb133_12;
  TNode<IntPtrT> phi_bb133_13;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb133_14;
  TNode<IntPtrT> phi_bb133_15;
  TNode<IntPtrT> phi_bb133_16;
  if (block133.is_used()) {
    ca_.Bind(&block133, &phi_bb133_5, &phi_bb133_6, &phi_bb133_7, &phi_bb133_8, &phi_bb133_9, &phi_bb133_10, &phi_bb133_11, &phi_bb133_12, &phi_bb133_13, &phi_bb133_14, &phi_bb133_15, &phi_bb133_16);
    ca_.Goto(&block2, tmp172);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb81_5;
  TNode<IntPtrT> phi_bb81_6;
  TNode<IntPtrT> phi_bb81_7;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb81_8;
  TNode<IntPtrT> phi_bb81_9;
  TNode<IntPtrT> phi_bb81_10;
  TNode<Number> tmp174;
  if (block81.is_used()) {
    ca_.Bind(&block81, &phi_bb81_5, &phi_bb81_6, &phi_bb81_7, &phi_bb81_8, &phi_bb81_9, &phi_bb81_10);
    compiler::CodeAssemblerLabel label175(&ca_);
    tmp174 = LocaleCompareFastPath_char8_char16_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{phi_bb81_5}, TNode<IntPtrT>{phi_bb81_6}, TNode<IntPtrT>{phi_bb81_7}, TorqueStructUnsafe_0{}}, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{phi_bb81_8}, TNode<IntPtrT>{phi_bb81_9}, TNode<IntPtrT>{phi_bb81_10}, TorqueStructUnsafe_0{}}, &label175);
    ca_.Goto(&block135, phi_bb81_5, phi_bb81_6, phi_bb81_7, phi_bb81_8, phi_bb81_9, phi_bb81_10, phi_bb81_5, phi_bb81_6, phi_bb81_7, phi_bb81_8, phi_bb81_9, phi_bb81_10);
    if (label175.is_used()) {
      ca_.Bind(&label175);
      ca_.Goto(&block136, phi_bb81_5, phi_bb81_6, phi_bb81_7, phi_bb81_8, phi_bb81_9, phi_bb81_10, phi_bb81_5, phi_bb81_6, phi_bb81_7, phi_bb81_8, phi_bb81_9, phi_bb81_10);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb136_5;
  TNode<IntPtrT> phi_bb136_6;
  TNode<IntPtrT> phi_bb136_7;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb136_8;
  TNode<IntPtrT> phi_bb136_9;
  TNode<IntPtrT> phi_bb136_10;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb136_11;
  TNode<IntPtrT> phi_bb136_12;
  TNode<IntPtrT> phi_bb136_13;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb136_14;
  TNode<IntPtrT> phi_bb136_15;
  TNode<IntPtrT> phi_bb136_16;
  if (block136.is_used()) {
    ca_.Bind(&block136, &phi_bb136_5, &phi_bb136_6, &phi_bb136_7, &phi_bb136_8, &phi_bb136_9, &phi_bb136_10, &phi_bb136_11, &phi_bb136_12, &phi_bb136_13, &phi_bb136_14, &phi_bb136_15, &phi_bb136_16);
    ca_.Goto(&block4);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb135_5;
  TNode<IntPtrT> phi_bb135_6;
  TNode<IntPtrT> phi_bb135_7;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb135_8;
  TNode<IntPtrT> phi_bb135_9;
  TNode<IntPtrT> phi_bb135_10;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb135_11;
  TNode<IntPtrT> phi_bb135_12;
  TNode<IntPtrT> phi_bb135_13;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb135_14;
  TNode<IntPtrT> phi_bb135_15;
  TNode<IntPtrT> phi_bb135_16;
  if (block135.is_used()) {
    ca_.Bind(&block135, &phi_bb135_5, &phi_bb135_6, &phi_bb135_7, &phi_bb135_8, &phi_bb135_9, &phi_bb135_10, &phi_bb135_11, &phi_bb135_12, &phi_bb135_13, &phi_bb135_14, &phi_bb135_15, &phi_bb135_16);
    ca_.Goto(&block2, tmp174);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb6_5;
  TNode<IntPtrT> phi_bb6_6;
  TNode<IntPtrT> phi_bb6_7;
  TNode<String> tmp176;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_5, &phi_bb6_6, &phi_bb6_7);
    compiler::CodeAssemblerLabel label177(&ca_);
    tmp176 = Cast_String_1(state_, TNode<Context>{parameter0}, TNode<Object>{parameter3}, &label177);
    ca_.Goto(&block141, phi_bb6_5, phi_bb6_6, phi_bb6_7);
    if (label177.is_used()) {
      ca_.Bind(&label177);
      ca_.Goto(&block142, phi_bb6_5, phi_bb6_6, phi_bb6_7);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb142_5;
  TNode<IntPtrT> phi_bb142_6;
  TNode<IntPtrT> phi_bb142_7;
  if (block142.is_used()) {
    ca_.Bind(&block142, &phi_bb142_5, &phi_bb142_6, &phi_bb142_7);
    ca_.Goto(&block4);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb141_5;
  TNode<IntPtrT> phi_bb141_6;
  TNode<IntPtrT> phi_bb141_7;
  TNode<IntPtrT> tmp178;
  TNode<IntPtrT> tmp179;
  TNode<Int32T> tmp180;
  TNode<IntPtrT> tmp181;
  if (block141.is_used()) {
    ca_.Bind(&block141, &phi_bb141_5, &phi_bb141_6, &phi_bb141_7);
    tmp178 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp179 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp180 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp176, tmp179});
    tmp181 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp180});
    ca_.Goto(&block145, phi_bb141_5, phi_bb141_6, phi_bb141_7, tmp176, tmp178);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb145_5;
  TNode<IntPtrT> phi_bb145_6;
  TNode<IntPtrT> phi_bb145_7;
  TNode<String> phi_bb145_11;
  TNode<IntPtrT> phi_bb145_12;
  TNode<BoolT> tmp182;
  if (block145.is_used()) {
    ca_.Bind(&block145, &phi_bb145_5, &phi_bb145_6, &phi_bb145_7, &phi_bb145_11, &phi_bb145_12);
    tmp182 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Branch(tmp182, &block143, std::vector<compiler::Node*>{phi_bb145_5, phi_bb145_6, phi_bb145_7, phi_bb145_11, phi_bb145_12}, &block144, std::vector<compiler::Node*>{phi_bb145_5, phi_bb145_6, phi_bb145_7, phi_bb145_11, phi_bb145_12});
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb143_5;
  TNode<IntPtrT> phi_bb143_6;
  TNode<IntPtrT> phi_bb143_7;
  TNode<String> phi_bb143_11;
  TNode<IntPtrT> phi_bb143_12;
  TNode<SeqOneByteString> tmp183;
  if (block143.is_used()) {
    ca_.Bind(&block143, &phi_bb143_5, &phi_bb143_6, &phi_bb143_7, &phi_bb143_11, &phi_bb143_12);
    compiler::CodeAssemblerLabel label184(&ca_);
    tmp183 = Cast_SeqOneByteString_1(state_, TNode<String>{phi_bb143_11}, &label184);
    ca_.Goto(&block148, phi_bb143_5, phi_bb143_6, phi_bb143_7, phi_bb143_11, phi_bb143_12, phi_bb143_11, phi_bb143_11);
    if (label184.is_used()) {
      ca_.Bind(&label184);
      ca_.Goto(&block149, phi_bb143_5, phi_bb143_6, phi_bb143_7, phi_bb143_11, phi_bb143_12, phi_bb143_11, phi_bb143_11);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb149_5;
  TNode<IntPtrT> phi_bb149_6;
  TNode<IntPtrT> phi_bb149_7;
  TNode<String> phi_bb149_11;
  TNode<IntPtrT> phi_bb149_12;
  TNode<String> phi_bb149_14;
  TNode<String> phi_bb149_15;
  TNode<SeqTwoByteString> tmp185;
  if (block149.is_used()) {
    ca_.Bind(&block149, &phi_bb149_5, &phi_bb149_6, &phi_bb149_7, &phi_bb149_11, &phi_bb149_12, &phi_bb149_14, &phi_bb149_15);
    compiler::CodeAssemblerLabel label186(&ca_);
    tmp185 = Cast_SeqTwoByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb149_14)}, &label186);
    ca_.Goto(&block156, phi_bb149_5, phi_bb149_6, phi_bb149_7, phi_bb149_11, phi_bb149_12, phi_bb149_14);
    if (label186.is_used()) {
      ca_.Bind(&label186);
      ca_.Goto(&block157, phi_bb149_5, phi_bb149_6, phi_bb149_7, phi_bb149_11, phi_bb149_12, phi_bb149_14);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb148_5;
  TNode<IntPtrT> phi_bb148_6;
  TNode<IntPtrT> phi_bb148_7;
  TNode<String> phi_bb148_11;
  TNode<IntPtrT> phi_bb148_12;
  TNode<String> phi_bb148_14;
  TNode<String> phi_bb148_15;
  TNode<Union<HeapObject, TaggedIndex>> tmp187;
  TNode<IntPtrT> tmp188;
  TNode<IntPtrT> tmp189;
  TNode<Union<HeapObject, TaggedIndex>> tmp190;
  TNode<IntPtrT> tmp191;
  TNode<IntPtrT> tmp192;
  if (block148.is_used()) {
    ca_.Bind(&block148, &phi_bb148_5, &phi_bb148_6, &phi_bb148_7, &phi_bb148_11, &phi_bb148_12, &phi_bb148_14, &phi_bb148_15);
    std::tie(tmp187, tmp188, tmp189) = FieldSliceSeqOneByteStringChars_0(state_, TNode<SeqOneByteString>{tmp183}).Flatten();
    compiler::CodeAssemblerLabel label193(&ca_);
    std::tie(tmp190, tmp191, tmp192) = Subslice_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp187}, TNode<IntPtrT>{tmp188}, TNode<IntPtrT>{tmp189}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb148_12}, TNode<IntPtrT>{tmp181}, &label193).Flatten();
    ca_.Goto(&block152, phi_bb148_5, phi_bb148_6, phi_bb148_7, phi_bb148_11, phi_bb148_12, phi_bb148_14, phi_bb148_12);
    if (label193.is_used()) {
      ca_.Bind(&label193);
      ca_.Goto(&block153, phi_bb148_5, phi_bb148_6, phi_bb148_7, phi_bb148_11, phi_bb148_12, phi_bb148_14, phi_bb148_12);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb153_5;
  TNode<IntPtrT> phi_bb153_6;
  TNode<IntPtrT> phi_bb153_7;
  TNode<String> phi_bb153_11;
  TNode<IntPtrT> phi_bb153_12;
  TNode<String> phi_bb153_14;
  TNode<IntPtrT> phi_bb153_19;
  if (block153.is_used()) {
    ca_.Bind(&block153, &phi_bb153_5, &phi_bb153_6, &phi_bb153_7, &phi_bb153_11, &phi_bb153_12, &phi_bb153_14, &phi_bb153_19);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:292:67");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb152_5;
  TNode<IntPtrT> phi_bb152_6;
  TNode<IntPtrT> phi_bb152_7;
  TNode<String> phi_bb152_11;
  TNode<IntPtrT> phi_bb152_12;
  TNode<String> phi_bb152_14;
  TNode<IntPtrT> phi_bb152_19;
  if (block152.is_used()) {
    ca_.Bind(&block152, &phi_bb152_5, &phi_bb152_6, &phi_bb152_7, &phi_bb152_11, &phi_bb152_12, &phi_bb152_14, &phi_bb152_19);
    ca_.Goto(&block140, phi_bb152_5, phi_bb152_6, phi_bb152_7, tmp190, tmp191, tmp192);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb157_5;
  TNode<IntPtrT> phi_bb157_6;
  TNode<IntPtrT> phi_bb157_7;
  TNode<String> phi_bb157_11;
  TNode<IntPtrT> phi_bb157_12;
  TNode<String> phi_bb157_14;
  TNode<ThinString> tmp194;
  if (block157.is_used()) {
    ca_.Bind(&block157, &phi_bb157_5, &phi_bb157_6, &phi_bb157_7, &phi_bb157_11, &phi_bb157_12, &phi_bb157_14);
    compiler::CodeAssemblerLabel label195(&ca_);
    tmp194 = Cast_ThinString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb157_14)}, &label195);
    ca_.Goto(&block164, phi_bb157_5, phi_bb157_6, phi_bb157_7, phi_bb157_11, phi_bb157_12, phi_bb157_14);
    if (label195.is_used()) {
      ca_.Bind(&label195);
      ca_.Goto(&block165, phi_bb157_5, phi_bb157_6, phi_bb157_7, phi_bb157_11, phi_bb157_12, phi_bb157_14);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb156_5;
  TNode<IntPtrT> phi_bb156_6;
  TNode<IntPtrT> phi_bb156_7;
  TNode<String> phi_bb156_11;
  TNode<IntPtrT> phi_bb156_12;
  TNode<String> phi_bb156_14;
  TNode<Union<HeapObject, TaggedIndex>> tmp196;
  TNode<IntPtrT> tmp197;
  TNode<IntPtrT> tmp198;
  TNode<Union<HeapObject, TaggedIndex>> tmp199;
  TNode<IntPtrT> tmp200;
  TNode<IntPtrT> tmp201;
  if (block156.is_used()) {
    ca_.Bind(&block156, &phi_bb156_5, &phi_bb156_6, &phi_bb156_7, &phi_bb156_11, &phi_bb156_12, &phi_bb156_14);
    std::tie(tmp196, tmp197, tmp198) = FieldSliceSeqTwoByteStringChars_0(state_, TNode<SeqTwoByteString>{tmp185}).Flatten();
    compiler::CodeAssemblerLabel label202(&ca_);
    std::tie(tmp199, tmp200, tmp201) = Subslice_char16_0(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{tmp196}, TNode<IntPtrT>{tmp197}, TNode<IntPtrT>{tmp198}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb156_12}, TNode<IntPtrT>{tmp181}, &label202).Flatten();
    ca_.Goto(&block160, phi_bb156_5, phi_bb156_6, phi_bb156_7, phi_bb156_11, phi_bb156_12, phi_bb156_14, phi_bb156_12);
    if (label202.is_used()) {
      ca_.Bind(&label202);
      ca_.Goto(&block161, phi_bb156_5, phi_bb156_6, phi_bb156_7, phi_bb156_11, phi_bb156_12, phi_bb156_14, phi_bb156_12);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb161_5;
  TNode<IntPtrT> phi_bb161_6;
  TNode<IntPtrT> phi_bb161_7;
  TNode<String> phi_bb161_11;
  TNode<IntPtrT> phi_bb161_12;
  TNode<String> phi_bb161_14;
  TNode<IntPtrT> phi_bb161_19;
  if (block161.is_used()) {
    ca_.Bind(&block161, &phi_bb161_5, &phi_bb161_6, &phi_bb161_7, &phi_bb161_11, &phi_bb161_12, &phi_bb161_14, &phi_bb161_19);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:295:67");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb160_5;
  TNode<IntPtrT> phi_bb160_6;
  TNode<IntPtrT> phi_bb160_7;
  TNode<String> phi_bb160_11;
  TNode<IntPtrT> phi_bb160_12;
  TNode<String> phi_bb160_14;
  TNode<IntPtrT> phi_bb160_19;
  if (block160.is_used()) {
    ca_.Bind(&block160, &phi_bb160_5, &phi_bb160_6, &phi_bb160_7, &phi_bb160_11, &phi_bb160_12, &phi_bb160_14, &phi_bb160_19);
    ca_.Goto(&block138, phi_bb160_5, phi_bb160_6, phi_bb160_7, tmp199, tmp200, tmp201);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb165_5;
  TNode<IntPtrT> phi_bb165_6;
  TNode<IntPtrT> phi_bb165_7;
  TNode<String> phi_bb165_11;
  TNode<IntPtrT> phi_bb165_12;
  TNode<String> phi_bb165_14;
  TNode<ConsString> tmp203;
  if (block165.is_used()) {
    ca_.Bind(&block165, &phi_bb165_5, &phi_bb165_6, &phi_bb165_7, &phi_bb165_11, &phi_bb165_12, &phi_bb165_14);
    compiler::CodeAssemblerLabel label204(&ca_);
    tmp203 = Cast_ConsString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb165_14)}, &label204);
    ca_.Goto(&block168, phi_bb165_5, phi_bb165_6, phi_bb165_7, phi_bb165_11, phi_bb165_12, phi_bb165_14);
    if (label204.is_used()) {
      ca_.Bind(&label204);
      ca_.Goto(&block169, phi_bb165_5, phi_bb165_6, phi_bb165_7, phi_bb165_11, phi_bb165_12, phi_bb165_14);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb164_5;
  TNode<IntPtrT> phi_bb164_6;
  TNode<IntPtrT> phi_bb164_7;
  TNode<String> phi_bb164_11;
  TNode<IntPtrT> phi_bb164_12;
  TNode<String> phi_bb164_14;
  TNode<IntPtrT> tmp205;
  TNode<InternalizedString> tmp206;
  if (block164.is_used()) {
    ca_.Bind(&block164, &phi_bb164_5, &phi_bb164_6, &phi_bb164_7, &phi_bb164_11, &phi_bb164_12, &phi_bb164_14);
    tmp205 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp206 = CodeStubAssembler(state_).LoadReference<InternalizedString>(CodeStubAssembler::Reference{tmp194, tmp205});
    ca_.Goto(&block162, phi_bb164_5, phi_bb164_6, phi_bb164_7, tmp206, phi_bb164_12, phi_bb164_14);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb169_5;
  TNode<IntPtrT> phi_bb169_6;
  TNode<IntPtrT> phi_bb169_7;
  TNode<String> phi_bb169_11;
  TNode<IntPtrT> phi_bb169_12;
  TNode<String> phi_bb169_14;
  TNode<SlicedString> tmp207;
  if (block169.is_used()) {
    ca_.Bind(&block169, &phi_bb169_5, &phi_bb169_6, &phi_bb169_7, &phi_bb169_11, &phi_bb169_12, &phi_bb169_14);
    compiler::CodeAssemblerLabel label208(&ca_);
    tmp207 = Cast_SlicedString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb169_14)}, &label208);
    ca_.Goto(&block172, phi_bb169_5, phi_bb169_6, phi_bb169_7, phi_bb169_11, phi_bb169_12, phi_bb169_14);
    if (label208.is_used()) {
      ca_.Bind(&label208);
      ca_.Goto(&block173, phi_bb169_5, phi_bb169_6, phi_bb169_7, phi_bb169_11, phi_bb169_12, phi_bb169_14);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb168_5;
  TNode<IntPtrT> phi_bb168_6;
  TNode<IntPtrT> phi_bb168_7;
  TNode<String> phi_bb168_11;
  TNode<IntPtrT> phi_bb168_12;
  TNode<String> phi_bb168_14;
  TNode<String> tmp209;
  if (block168.is_used()) {
    ca_.Bind(&block168, &phi_bb168_5, &phi_bb168_6, &phi_bb168_7, &phi_bb168_11, &phi_bb168_12, &phi_bb168_14);
    tmp209 = Flatten_1(state_, TNode<ConsString>{tmp203});
    ca_.Goto(&block166, phi_bb168_5, phi_bb168_6, phi_bb168_7, tmp209, phi_bb168_12, phi_bb168_14);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb173_5;
  TNode<IntPtrT> phi_bb173_6;
  TNode<IntPtrT> phi_bb173_7;
  TNode<String> phi_bb173_11;
  TNode<IntPtrT> phi_bb173_12;
  TNode<String> phi_bb173_14;
  TNode<ExternalOneByteString> tmp210;
  if (block173.is_used()) {
    ca_.Bind(&block173, &phi_bb173_5, &phi_bb173_6, &phi_bb173_7, &phi_bb173_11, &phi_bb173_12, &phi_bb173_14);
    compiler::CodeAssemblerLabel label211(&ca_);
    tmp210 = Cast_ExternalOneByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb173_14)}, &label211);
    ca_.Goto(&block176, phi_bb173_5, phi_bb173_6, phi_bb173_7, phi_bb173_11, phi_bb173_12, phi_bb173_14);
    if (label211.is_used()) {
      ca_.Bind(&label211);
      ca_.Goto(&block177, phi_bb173_5, phi_bb173_6, phi_bb173_7, phi_bb173_11, phi_bb173_12, phi_bb173_14);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb172_5;
  TNode<IntPtrT> phi_bb172_6;
  TNode<IntPtrT> phi_bb172_7;
  TNode<String> phi_bb172_11;
  TNode<IntPtrT> phi_bb172_12;
  TNode<String> phi_bb172_14;
  TNode<IntPtrT> tmp212;
  TNode<Smi> tmp213;
  TNode<IntPtrT> tmp214;
  TNode<Int32T> tmp215;
  TNode<Int32T> tmp216;
  TNode<Int32T> tmp217;
  TNode<Uint32T> tmp218;
  TNode<IntPtrT> tmp219;
  TNode<IntPtrT> tmp220;
  TNode<String> tmp221;
  if (block172.is_used()) {
    ca_.Bind(&block172, &phi_bb172_5, &phi_bb172_6, &phi_bb172_7, &phi_bb172_11, &phi_bb172_12, &phi_bb172_14);
    tmp212 = FromConstexpr_intptr_constexpr_int31_0(state_, 16);
    tmp213 = CodeStubAssembler(state_).LoadReference<Smi>(CodeStubAssembler::Reference{tmp207, tmp212});
    tmp214 = Convert_intptr_Smi_0(state_, TNode<Smi>{tmp213});
    tmp215 = CodeStubAssembler(state_).TruncateIntPtrToInt32(TNode<IntPtrT>{tmp214});
    tmp216 = CodeStubAssembler(state_).TruncateIntPtrToInt32(TNode<IntPtrT>{phi_bb172_12});
    tmp217 = CodeStubAssembler(state_).Int32Add(TNode<Int32T>{tmp216}, TNode<Int32T>{tmp215});
    tmp218 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp217});
    tmp219 = Convert_intptr_uint32_0(state_, TNode<Uint32T>{tmp218});
    tmp220 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp221 = CodeStubAssembler(state_).LoadReference<String>(CodeStubAssembler::Reference{tmp207, tmp220});
    ca_.Goto(&block166, phi_bb172_5, phi_bb172_6, phi_bb172_7, tmp221, tmp219, phi_bb172_14);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb177_5;
  TNode<IntPtrT> phi_bb177_6;
  TNode<IntPtrT> phi_bb177_7;
  TNode<String> phi_bb177_11;
  TNode<IntPtrT> phi_bb177_12;
  TNode<String> phi_bb177_14;
  TNode<ExternalTwoByteString> tmp222;
  if (block177.is_used()) {
    ca_.Bind(&block177, &phi_bb177_5, &phi_bb177_6, &phi_bb177_7, &phi_bb177_11, &phi_bb177_12, &phi_bb177_14);
    compiler::CodeAssemblerLabel label223(&ca_);
    tmp222 = Cast_ExternalTwoByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb177_14)}, &label223);
    ca_.Goto(&block184, phi_bb177_5, phi_bb177_6, phi_bb177_7, phi_bb177_11, phi_bb177_12, phi_bb177_14);
    if (label223.is_used()) {
      ca_.Bind(&label223);
      ca_.Goto(&block185, phi_bb177_5, phi_bb177_6, phi_bb177_7, phi_bb177_11, phi_bb177_12, phi_bb177_14);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb176_5;
  TNode<IntPtrT> phi_bb176_6;
  TNode<IntPtrT> phi_bb176_7;
  TNode<String> phi_bb176_11;
  TNode<IntPtrT> phi_bb176_12;
  TNode<String> phi_bb176_14;
  TNode<RawPtrT> tmp224;
  TNode<IntPtrT> tmp225;
  TNode<Int32T> tmp226;
  TNode<IntPtrT> tmp227;
  TNode<Union<HeapObject, TaggedIndex>> tmp228;
  TNode<IntPtrT> tmp229;
  TNode<IntPtrT> tmp230;
  TNode<Union<HeapObject, TaggedIndex>> tmp231;
  TNode<IntPtrT> tmp232;
  TNode<IntPtrT> tmp233;
  if (block176.is_used()) {
    ca_.Bind(&block176, &phi_bb176_5, &phi_bb176_6, &phi_bb176_7, &phi_bb176_11, &phi_bb176_12, &phi_bb176_14);
    tmp224 = Method_ExternalOneByteString_GetChars_0(state_, TNode<ExternalOneByteString>{tmp210});
    tmp225 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp226 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp210, tmp225});
    tmp227 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp226});
    std::tie(tmp228, tmp229, tmp230) = NewOffHeapConstSlice_char8_0(state_, TNode<RawPtrT>{tmp224}, TNode<IntPtrT>{tmp227}).Flatten();
    compiler::CodeAssemblerLabel label234(&ca_);
    std::tie(tmp231, tmp232, tmp233) = Subslice_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp228}, TNode<IntPtrT>{tmp229}, TNode<IntPtrT>{tmp230}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb176_12}, TNode<IntPtrT>{tmp181}, &label234).Flatten();
    ca_.Goto(&block180, phi_bb176_5, phi_bb176_6, phi_bb176_7, phi_bb176_11, phi_bb176_12, phi_bb176_14, phi_bb176_12);
    if (label234.is_used()) {
      ca_.Bind(&label234);
      ca_.Goto(&block181, phi_bb176_5, phi_bb176_6, phi_bb176_7, phi_bb176_11, phi_bb176_12, phi_bb176_14, phi_bb176_12);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb181_5;
  TNode<IntPtrT> phi_bb181_6;
  TNode<IntPtrT> phi_bb181_7;
  TNode<String> phi_bb181_11;
  TNode<IntPtrT> phi_bb181_12;
  TNode<String> phi_bb181_14;
  TNode<IntPtrT> phi_bb181_22;
  if (block181.is_used()) {
    ca_.Bind(&block181, &phi_bb181_5, &phi_bb181_6, &phi_bb181_7, &phi_bb181_11, &phi_bb181_12, &phi_bb181_14, &phi_bb181_22);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:315:63");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb180_5;
  TNode<IntPtrT> phi_bb180_6;
  TNode<IntPtrT> phi_bb180_7;
  TNode<String> phi_bb180_11;
  TNode<IntPtrT> phi_bb180_12;
  TNode<String> phi_bb180_14;
  TNode<IntPtrT> phi_bb180_22;
  if (block180.is_used()) {
    ca_.Bind(&block180, &phi_bb180_5, &phi_bb180_6, &phi_bb180_7, &phi_bb180_11, &phi_bb180_12, &phi_bb180_14, &phi_bb180_22);
    ca_.Goto(&block140, phi_bb180_5, phi_bb180_6, phi_bb180_7, tmp231, tmp232, tmp233);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb185_5;
  TNode<IntPtrT> phi_bb185_6;
  TNode<IntPtrT> phi_bb185_7;
  TNode<String> phi_bb185_11;
  TNode<IntPtrT> phi_bb185_12;
  TNode<String> phi_bb185_14;
  if (block185.is_used()) {
    ca_.Bind(&block185, &phi_bb185_5, &phi_bb185_6, &phi_bb185_7, &phi_bb185_11, &phi_bb185_12, &phi_bb185_14);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:323:9");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb184_5;
  TNode<IntPtrT> phi_bb184_6;
  TNode<IntPtrT> phi_bb184_7;
  TNode<String> phi_bb184_11;
  TNode<IntPtrT> phi_bb184_12;
  TNode<String> phi_bb184_14;
  TNode<RawPtrT> tmp235;
  TNode<IntPtrT> tmp236;
  TNode<Int32T> tmp237;
  TNode<IntPtrT> tmp238;
  TNode<Union<HeapObject, TaggedIndex>> tmp239;
  TNode<IntPtrT> tmp240;
  TNode<IntPtrT> tmp241;
  TNode<Union<HeapObject, TaggedIndex>> tmp242;
  TNode<IntPtrT> tmp243;
  TNode<IntPtrT> tmp244;
  if (block184.is_used()) {
    ca_.Bind(&block184, &phi_bb184_5, &phi_bb184_6, &phi_bb184_7, &phi_bb184_11, &phi_bb184_12, &phi_bb184_14);
    tmp235 = Method_ExternalTwoByteString_GetChars_0(state_, TNode<ExternalTwoByteString>{tmp222});
    tmp236 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp237 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp222, tmp236});
    tmp238 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp237});
    std::tie(tmp239, tmp240, tmp241) = NewOffHeapConstSlice_char16_0(state_, TNode<RawPtrT>{tmp235}, TNode<IntPtrT>{tmp238}).Flatten();
    compiler::CodeAssemblerLabel label245(&ca_);
    std::tie(tmp242, tmp243, tmp244) = Subslice_char16_0(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{tmp239}, TNode<IntPtrT>{tmp240}, TNode<IntPtrT>{tmp241}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb184_12}, TNode<IntPtrT>{tmp181}, &label245).Flatten();
    ca_.Goto(&block188, phi_bb184_5, phi_bb184_6, phi_bb184_7, phi_bb184_11, phi_bb184_12, phi_bb184_14, phi_bb184_12);
    if (label245.is_used()) {
      ca_.Bind(&label245);
      ca_.Goto(&block189, phi_bb184_5, phi_bb184_6, phi_bb184_7, phi_bb184_11, phi_bb184_12, phi_bb184_14, phi_bb184_12);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb189_5;
  TNode<IntPtrT> phi_bb189_6;
  TNode<IntPtrT> phi_bb189_7;
  TNode<String> phi_bb189_11;
  TNode<IntPtrT> phi_bb189_12;
  TNode<String> phi_bb189_14;
  TNode<IntPtrT> phi_bb189_22;
  if (block189.is_used()) {
    ca_.Bind(&block189, &phi_bb189_5, &phi_bb189_6, &phi_bb189_7, &phi_bb189_11, &phi_bb189_12, &phi_bb189_14, &phi_bb189_22);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:320:63");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb188_5;
  TNode<IntPtrT> phi_bb188_6;
  TNode<IntPtrT> phi_bb188_7;
  TNode<String> phi_bb188_11;
  TNode<IntPtrT> phi_bb188_12;
  TNode<String> phi_bb188_14;
  TNode<IntPtrT> phi_bb188_22;
  if (block188.is_used()) {
    ca_.Bind(&block188, &phi_bb188_5, &phi_bb188_6, &phi_bb188_7, &phi_bb188_11, &phi_bb188_12, &phi_bb188_14, &phi_bb188_22);
    ca_.Goto(&block138, phi_bb188_5, phi_bb188_6, phi_bb188_7, tmp242, tmp243, tmp244);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb166_5;
  TNode<IntPtrT> phi_bb166_6;
  TNode<IntPtrT> phi_bb166_7;
  TNode<String> phi_bb166_11;
  TNode<IntPtrT> phi_bb166_12;
  TNode<String> phi_bb166_14;
  if (block166.is_used()) {
    ca_.Bind(&block166, &phi_bb166_5, &phi_bb166_6, &phi_bb166_7, &phi_bb166_11, &phi_bb166_12, &phi_bb166_14);
    ca_.Goto(&block162, phi_bb166_5, phi_bb166_6, phi_bb166_7, phi_bb166_11, phi_bb166_12, phi_bb166_14);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb162_5;
  TNode<IntPtrT> phi_bb162_6;
  TNode<IntPtrT> phi_bb162_7;
  TNode<String> phi_bb162_11;
  TNode<IntPtrT> phi_bb162_12;
  TNode<String> phi_bb162_14;
  if (block162.is_used()) {
    ca_.Bind(&block162, &phi_bb162_5, &phi_bb162_6, &phi_bb162_7, &phi_bb162_11, &phi_bb162_12, &phi_bb162_14);
    ca_.Goto(&block145, phi_bb162_5, phi_bb162_6, phi_bb162_7, phi_bb162_11, phi_bb162_12);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb144_5;
  TNode<IntPtrT> phi_bb144_6;
  TNode<IntPtrT> phi_bb144_7;
  TNode<String> phi_bb144_11;
  TNode<IntPtrT> phi_bb144_12;
  if (block144.is_used()) {
    ca_.Bind(&block144, &phi_bb144_5, &phi_bb144_6, &phi_bb144_7, &phi_bb144_11, &phi_bb144_12);
    VerifiedUnreachable_0(state_);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb140_5;
  TNode<IntPtrT> phi_bb140_6;
  TNode<IntPtrT> phi_bb140_7;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb140_8;
  TNode<IntPtrT> phi_bb140_9;
  TNode<IntPtrT> phi_bb140_10;
  TNode<Number> tmp246;
  if (block140.is_used()) {
    ca_.Bind(&block140, &phi_bb140_5, &phi_bb140_6, &phi_bb140_7, &phi_bb140_8, &phi_bb140_9, &phi_bb140_10);
    compiler::CodeAssemblerLabel label247(&ca_);
    tmp246 = LocaleCompareFastPath_char16_char8_0(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{phi_bb140_5}, TNode<IntPtrT>{phi_bb140_6}, TNode<IntPtrT>{phi_bb140_7}, TorqueStructUnsafe_0{}}, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{phi_bb140_8}, TNode<IntPtrT>{phi_bb140_9}, TNode<IntPtrT>{phi_bb140_10}, TorqueStructUnsafe_0{}}, &label247);
    ca_.Goto(&block190, phi_bb140_5, phi_bb140_6, phi_bb140_7, phi_bb140_8, phi_bb140_9, phi_bb140_10, phi_bb140_5, phi_bb140_6, phi_bb140_7, phi_bb140_8, phi_bb140_9, phi_bb140_10);
    if (label247.is_used()) {
      ca_.Bind(&label247);
      ca_.Goto(&block191, phi_bb140_5, phi_bb140_6, phi_bb140_7, phi_bb140_8, phi_bb140_9, phi_bb140_10, phi_bb140_5, phi_bb140_6, phi_bb140_7, phi_bb140_8, phi_bb140_9, phi_bb140_10);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb191_5;
  TNode<IntPtrT> phi_bb191_6;
  TNode<IntPtrT> phi_bb191_7;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb191_8;
  TNode<IntPtrT> phi_bb191_9;
  TNode<IntPtrT> phi_bb191_10;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb191_11;
  TNode<IntPtrT> phi_bb191_12;
  TNode<IntPtrT> phi_bb191_13;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb191_14;
  TNode<IntPtrT> phi_bb191_15;
  TNode<IntPtrT> phi_bb191_16;
  if (block191.is_used()) {
    ca_.Bind(&block191, &phi_bb191_5, &phi_bb191_6, &phi_bb191_7, &phi_bb191_8, &phi_bb191_9, &phi_bb191_10, &phi_bb191_11, &phi_bb191_12, &phi_bb191_13, &phi_bb191_14, &phi_bb191_15, &phi_bb191_16);
    ca_.Goto(&block4);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb190_5;
  TNode<IntPtrT> phi_bb190_6;
  TNode<IntPtrT> phi_bb190_7;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb190_8;
  TNode<IntPtrT> phi_bb190_9;
  TNode<IntPtrT> phi_bb190_10;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb190_11;
  TNode<IntPtrT> phi_bb190_12;
  TNode<IntPtrT> phi_bb190_13;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb190_14;
  TNode<IntPtrT> phi_bb190_15;
  TNode<IntPtrT> phi_bb190_16;
  if (block190.is_used()) {
    ca_.Bind(&block190, &phi_bb190_5, &phi_bb190_6, &phi_bb190_7, &phi_bb190_8, &phi_bb190_9, &phi_bb190_10, &phi_bb190_11, &phi_bb190_12, &phi_bb190_13, &phi_bb190_14, &phi_bb190_15, &phi_bb190_16);
    ca_.Goto(&block2, tmp246);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb138_5;
  TNode<IntPtrT> phi_bb138_6;
  TNode<IntPtrT> phi_bb138_7;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb138_8;
  TNode<IntPtrT> phi_bb138_9;
  TNode<IntPtrT> phi_bb138_10;
  TNode<Number> tmp248;
  if (block138.is_used()) {
    ca_.Bind(&block138, &phi_bb138_5, &phi_bb138_6, &phi_bb138_7, &phi_bb138_8, &phi_bb138_9, &phi_bb138_10);
    compiler::CodeAssemblerLabel label249(&ca_);
    tmp248 = LocaleCompareFastPath_char16_char16_0(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{phi_bb138_5}, TNode<IntPtrT>{phi_bb138_6}, TNode<IntPtrT>{phi_bb138_7}, TorqueStructUnsafe_0{}}, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{phi_bb138_8}, TNode<IntPtrT>{phi_bb138_9}, TNode<IntPtrT>{phi_bb138_10}, TorqueStructUnsafe_0{}}, &label249);
    ca_.Goto(&block192, phi_bb138_5, phi_bb138_6, phi_bb138_7, phi_bb138_8, phi_bb138_9, phi_bb138_10, phi_bb138_5, phi_bb138_6, phi_bb138_7, phi_bb138_8, phi_bb138_9, phi_bb138_10);
    if (label249.is_used()) {
      ca_.Bind(&label249);
      ca_.Goto(&block193, phi_bb138_5, phi_bb138_6, phi_bb138_7, phi_bb138_8, phi_bb138_9, phi_bb138_10, phi_bb138_5, phi_bb138_6, phi_bb138_7, phi_bb138_8, phi_bb138_9, phi_bb138_10);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb193_5;
  TNode<IntPtrT> phi_bb193_6;
  TNode<IntPtrT> phi_bb193_7;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb193_8;
  TNode<IntPtrT> phi_bb193_9;
  TNode<IntPtrT> phi_bb193_10;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb193_11;
  TNode<IntPtrT> phi_bb193_12;
  TNode<IntPtrT> phi_bb193_13;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb193_14;
  TNode<IntPtrT> phi_bb193_15;
  TNode<IntPtrT> phi_bb193_16;
  if (block193.is_used()) {
    ca_.Bind(&block193, &phi_bb193_5, &phi_bb193_6, &phi_bb193_7, &phi_bb193_8, &phi_bb193_9, &phi_bb193_10, &phi_bb193_11, &phi_bb193_12, &phi_bb193_13, &phi_bb193_14, &phi_bb193_15, &phi_bb193_16);
    ca_.Goto(&block4);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb192_5;
  TNode<IntPtrT> phi_bb192_6;
  TNode<IntPtrT> phi_bb192_7;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb192_8;
  TNode<IntPtrT> phi_bb192_9;
  TNode<IntPtrT> phi_bb192_10;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb192_11;
  TNode<IntPtrT> phi_bb192_12;
  TNode<IntPtrT> phi_bb192_13;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb192_14;
  TNode<IntPtrT> phi_bb192_15;
  TNode<IntPtrT> phi_bb192_16;
  if (block192.is_used()) {
    ca_.Bind(&block192, &phi_bb192_5, &phi_bb192_6, &phi_bb192_7, &phi_bb192_8, &phi_bb192_9, &phi_bb192_10, &phi_bb192_11, &phi_bb192_12, &phi_bb192_13, &phi_bb192_14, &phi_bb192_15, &phi_bb192_16);
    ca_.Goto(&block2, tmp248);
  }

  TNode<JSAny> tmp250;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp250 = CodeStubAssembler(state_).Call(TNode<Context>{parameter0}, TNode<JSAny>{parameter1}, TNode<JSAny>{parameter2}, TNode<JSAny>{parameter3}, TNode<JSAny>{parameter4});
    ca_.Goto(&block2, tmp250);
  }

  TNode<JSAny> phi_bb2_5;
  TNode<BoolT> tmp251;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_5);
    tmp251 = CodeStubAssembler(state_).TaggedIsSmi(TNode<Object>{phi_bb2_5});
    ca_.Branch(tmp251, &block194, std::vector<compiler::Node*>{phi_bb2_5}, &block195, std::vector<compiler::Node*>{phi_bb2_5});
  }

  TNode<JSAny> phi_bb195_5;
  if (block195.is_used()) {
    ca_.Bind(&block195, &phi_bb195_5);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/objects/intl-objects.tq", 190});
      CodeStubAssembler(state_).FailAssert("Torque assert 'TaggedIsSmi(result)' failed", pos_stack);
    }
  }

  TNode<JSAny> phi_bb194_5;
  TNode<Smi> tmp252;
  TNode<Smi> tmp253;
  TNode<BoolT> tmp254;
  if (block194.is_used()) {
    ca_.Bind(&block194, &phi_bb194_5);
    tmp252 = UnsafeCast_Smi_0(state_, TNode<Context>{parameter0}, TNode<Object>{phi_bb194_5});
    tmp253 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    tmp254 = CodeStubAssembler(state_).SmiEqual(TNode<Smi>{tmp252}, TNode<Smi>{tmp253});
    ca_.Branch(tmp254, &block198, std::vector<compiler::Node*>{phi_bb194_5}, &block199, std::vector<compiler::Node*>{phi_bb194_5});
  }

  TNode<JSAny> phi_bb198_5;
  TNode<BoolT> tmp255;
  if (block198.is_used()) {
    ca_.Bind(&block198, &phi_bb198_5);
    tmp255 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block200, phi_bb198_5, tmp255);
  }

  TNode<JSAny> phi_bb199_5;
  TNode<Smi> tmp256;
  TNode<Smi> tmp257;
  TNode<BoolT> tmp258;
  if (block199.is_used()) {
    ca_.Bind(&block199, &phi_bb199_5);
    tmp256 = UnsafeCast_Smi_0(state_, TNode<Context>{parameter0}, TNode<Object>{phi_bb199_5});
    tmp257 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp258 = CodeStubAssembler(state_).SmiEqual(TNode<Smi>{tmp256}, TNode<Smi>{tmp257});
    ca_.Goto(&block200, phi_bb199_5, tmp258);
  }

  TNode<JSAny> phi_bb200_5;
  TNode<BoolT> phi_bb200_7;
  if (block200.is_used()) {
    ca_.Bind(&block200, &phi_bb200_5, &phi_bb200_7);
    ca_.Branch(phi_bb200_7, &block201, std::vector<compiler::Node*>{phi_bb200_5}, &block202, std::vector<compiler::Node*>{phi_bb200_5});
  }

  TNode<JSAny> phi_bb201_5;
  TNode<BoolT> tmp259;
  if (block201.is_used()) {
    ca_.Bind(&block201, &phi_bb201_5);
    tmp259 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block203, phi_bb201_5, tmp259);
  }

  TNode<JSAny> phi_bb202_5;
  TNode<Smi> tmp260;
  TNode<Smi> tmp261;
  TNode<BoolT> tmp262;
  if (block202.is_used()) {
    ca_.Bind(&block202, &phi_bb202_5);
    tmp260 = UnsafeCast_Smi_0(state_, TNode<Context>{parameter0}, TNode<Object>{phi_bb202_5});
    tmp261 = FromConstexpr_Smi_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp262 = CodeStubAssembler(state_).SmiEqual(TNode<Smi>{tmp260}, TNode<Smi>{tmp261});
    ca_.Goto(&block203, phi_bb202_5, tmp262);
  }

  TNode<JSAny> phi_bb203_5;
  TNode<BoolT> phi_bb203_7;
  if (block203.is_used()) {
    ca_.Bind(&block203, &phi_bb203_5, &phi_bb203_7);
    ca_.Branch(phi_bb203_7, &block196, std::vector<compiler::Node*>{phi_bb203_5}, &block197, std::vector<compiler::Node*>{phi_bb203_5});
  }

  TNode<JSAny> phi_bb197_5;
  if (block197.is_used()) {
    ca_.Bind(&block197, &phi_bb197_5);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/objects/intl-objects.tq", 191});
      CodeStubAssembler(state_).FailAssert("Torque assert 'UnsafeCast<Smi>(result) == -1 || UnsafeCast<Smi>(result) == 0 || UnsafeCast<Smi>(result) == 1' failed", pos_stack);
    }
  }

  TNode<JSAny> phi_bb196_5;
  if (block196.is_used()) {
    ca_.Bind(&block196, &phi_bb196_5);
    CodeStubAssembler(state_).Return(phi_bb196_5);
  }
}

// https://crsrc.org/c/v8/src/objects/intl-objects.tq?l=18&c=7
TNode<Uint32T> Convert_uint32_char16_0(compiler::CodeAssemblerState* state_, TNode<Uint16T> p_i) {
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
  return TNode<Uint32T>{p_i};
}

// https://crsrc.org/c/v8/src/objects/intl-objects.tq?l=145&c=28
TNode<Number> LocaleCompareFastPath_char8_char8_0(compiler::CodeAssemblerState* state_, TorqueStructSlice_char8_ConstReference_char8_0 p_left, TorqueStructSlice_char8_ConstReference_char8_0 p_right, compiler::CodeAssemblerLabel* label_Bailout) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BoolT> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block30(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block33(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block34(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT> block37(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT> block36(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT> block39(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT> block38(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block40(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block41(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block35(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block42(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block47(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block46(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block48(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block49(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block43(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block50(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block54(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block53(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block55(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block56(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block51(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block59(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block57(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block65(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block64(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block69(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block68(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block72(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block73(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, BoolT> block74(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block71(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block70(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block75(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block77(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block78(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block76(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block58(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block79(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{p_left.length}, TNode<IntPtrT>{p_right.length});
    ca_.Branch(tmp1, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    ca_.Goto(&block5, p_left.length);
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    ca_.Goto(&block5, p_right.length);
  }

  TNode<IntPtrT> phi_bb5_7;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_7);
    ca_.Goto(&block9, tmp0);
  }

  TNode<IntPtrT> phi_bb9_6;
  TNode<BoolT> tmp2;
  if (block9.is_used()) {
    ca_.Bind(&block9, &phi_bb9_6);
    tmp2 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb9_6}, TNode<IntPtrT>{phi_bb5_7});
    ca_.Branch(tmp2, &block7, std::vector<compiler::Node*>{phi_bb9_6}, &block8, std::vector<compiler::Node*>{phi_bb9_6});
  }

  TNode<IntPtrT> phi_bb7_6;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<Union<HeapObject, TaggedIndex>> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<Uint8T> tmp7;
  TNode<IntPtrT> tmp8;
  TNode<IntPtrT> tmp9;
  TNode<Union<HeapObject, TaggedIndex>> tmp10;
  TNode<IntPtrT> tmp11;
  TNode<Uint8T> tmp12;
  TNode<BoolT> tmp13;
  if (block7.is_used()) {
    ca_.Bind(&block7, &phi_bb7_6);
    tmp3 = TimesSizeOf_char8_0(state_, TNode<IntPtrT>{phi_bb7_6});
    tmp4 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_left.offset}, TNode<IntPtrT>{tmp3});
    std::tie(tmp5, tmp6) = NewReference_char8_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_left.object}, TNode<IntPtrT>{tmp4}).Flatten();
    tmp7 = CodeStubAssembler(state_).LoadReference<Uint8T>(CodeStubAssembler::Reference{tmp5, tmp6});
    tmp8 = TimesSizeOf_char8_0(state_, TNode<IntPtrT>{phi_bb7_6});
    tmp9 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_right.offset}, TNode<IntPtrT>{tmp8});
    std::tie(tmp10, tmp11) = NewReference_char8_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_right.object}, TNode<IntPtrT>{tmp9}).Flatten();
    tmp12 = CodeStubAssembler(state_).LoadReference<Uint8T>(CodeStubAssembler::Reference{tmp10, tmp11});
    tmp13 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp7}, TNode<Uint32T>{tmp12});
    ca_.Branch(tmp13, &block12, std::vector<compiler::Node*>{phi_bb7_6}, &block13, std::vector<compiler::Node*>{phi_bb7_6});
  }

  TNode<IntPtrT> phi_bb12_6;
  if (block12.is_used()) {
    ca_.Bind(&block12, &phi_bb12_6);
    ca_.Goto(&block8, phi_bb12_6);
  }

  TNode<IntPtrT> phi_bb13_6;
  TNode<Uint32T> tmp14;
  TNode<Uint32T> tmp15;
  TNode<BoolT> tmp16;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_6);
    tmp14 = Convert_uint32_char8_0(state_, TNode<Uint8T>{tmp7});
    tmp15 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x80ull));
    tmp16 = CodeStubAssembler(state_).Uint32GreaterThanOrEqual(TNode<Uint32T>{tmp14}, TNode<Uint32T>{tmp15});
    ca_.Branch(tmp16, &block14, std::vector<compiler::Node*>{phi_bb13_6}, &block15, std::vector<compiler::Node*>{phi_bb13_6});
  }

  TNode<IntPtrT> phi_bb14_6;
  if (block14.is_used()) {
    ca_.Bind(&block14, &phi_bb14_6);
    ca_.Goto(&block8, phi_bb14_6);
  }

  TNode<IntPtrT> phi_bb15_6;
  TNode<IntPtrT> tmp17;
  TNode<IntPtrT> tmp18;
  if (block15.is_used()) {
    ca_.Bind(&block15, &phi_bb15_6);
    tmp17 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp18 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb15_6}, TNode<IntPtrT>{tmp17});
    ca_.Goto(&block9, tmp18);
  }

  TNode<IntPtrT> phi_bb8_6;
  TNode<BoolT> tmp19;
  if (block8.is_used()) {
    ca_.Bind(&block8, &phi_bb8_6);
    tmp19 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb8_6}, TNode<IntPtrT>{p_left.length});
    ca_.Branch(tmp19, &block18, std::vector<compiler::Node*>{phi_bb8_6}, &block19, std::vector<compiler::Node*>{phi_bb8_6});
  }

  TNode<IntPtrT> phi_bb18_6;
  TNode<BoolT> tmp20;
  if (block18.is_used()) {
    ca_.Bind(&block18, &phi_bb18_6);
    tmp20 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb18_6}, TNode<IntPtrT>{p_right.length});
    ca_.Goto(&block20, phi_bb18_6, tmp20);
  }

  TNode<IntPtrT> phi_bb19_6;
  TNode<BoolT> tmp21;
  if (block19.is_used()) {
    ca_.Bind(&block19, &phi_bb19_6);
    tmp21 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block20, phi_bb19_6, tmp21);
  }

  TNode<IntPtrT> phi_bb20_6;
  TNode<BoolT> phi_bb20_9;
  if (block20.is_used()) {
    ca_.Bind(&block20, &phi_bb20_6, &phi_bb20_9);
    ca_.Branch(phi_bb20_9, &block16, std::vector<compiler::Node*>{phi_bb20_6}, &block17, std::vector<compiler::Node*>{phi_bb20_6});
  }

  TNode<IntPtrT> phi_bb16_6;
  TNode<Number> tmp22;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_6);
    tmp22 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block2, tmp22);
  }

  TNode<IntPtrT> phi_bb17_6;
  if (block17.is_used()) {
    ca_.Bind(&block17, &phi_bb17_6);
    ca_.Goto(&block23, phi_bb17_6, phi_bb17_6);
  }

  TNode<IntPtrT> phi_bb23_6;
  TNode<IntPtrT> phi_bb23_8;
  TNode<BoolT> tmp23;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_6, &phi_bb23_8);
    tmp23 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb23_8}, TNode<IntPtrT>{phi_bb5_7});
    ca_.Branch(tmp23, &block21, std::vector<compiler::Node*>{phi_bb23_6, phi_bb23_8}, &block22, std::vector<compiler::Node*>{phi_bb23_6, phi_bb23_8});
  }

  TNode<IntPtrT> phi_bb21_6;
  TNode<IntPtrT> phi_bb21_8;
  TNode<IntPtrT> tmp24;
  TNode<IntPtrT> tmp25;
  TNode<Union<HeapObject, TaggedIndex>> tmp26;
  TNode<IntPtrT> tmp27;
  TNode<Uint8T> tmp28;
  TNode<IntPtrT> tmp29;
  TNode<IntPtrT> tmp30;
  TNode<Union<HeapObject, TaggedIndex>> tmp31;
  TNode<IntPtrT> tmp32;
  TNode<Uint8T> tmp33;
  TNode<Uint8T> tmp34;
  if (block21.is_used()) {
    ca_.Bind(&block21, &phi_bb21_6, &phi_bb21_8);
    tmp24 = TimesSizeOf_char8_0(state_, TNode<IntPtrT>{phi_bb21_8});
    tmp25 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_left.offset}, TNode<IntPtrT>{tmp24});
    std::tie(tmp26, tmp27) = NewReference_char8_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_left.object}, TNode<IntPtrT>{tmp25}).Flatten();
    tmp28 = CodeStubAssembler(state_).LoadReference<Uint8T>(CodeStubAssembler::Reference{tmp26, tmp27});
    tmp29 = TimesSizeOf_char8_0(state_, TNode<IntPtrT>{phi_bb21_8});
    tmp30 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_right.offset}, TNode<IntPtrT>{tmp29});
    std::tie(tmp31, tmp32) = NewReference_char8_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_right.object}, TNode<IntPtrT>{tmp30}).Flatten();
    tmp33 = CodeStubAssembler(state_).LoadReference<Uint8T>(CodeStubAssembler::Reference{tmp31, tmp32});
    compiler::CodeAssemblerLabel label35(&ca_);
    tmp34 = IntlAsciiCollationWeightL1_0(state_, TNode<Uint8T>{tmp28}, &label35);
    ca_.Goto(&block26, phi_bb21_6, phi_bb21_8);
    if (label35.is_used()) {
      ca_.Bind(&label35);
      ca_.Goto(&block27, phi_bb21_6, phi_bb21_8);
    }
  }

  TNode<IntPtrT> phi_bb27_6;
  TNode<IntPtrT> phi_bb27_8;
  if (block27.is_used()) {
    ca_.Bind(&block27, &phi_bb27_6, &phi_bb27_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb26_6;
  TNode<IntPtrT> phi_bb26_8;
  TNode<Uint32T> tmp36;
  TNode<BoolT> tmp37;
  if (block26.is_used()) {
    ca_.Bind(&block26, &phi_bb26_6, &phi_bb26_8);
    tmp36 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp37 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp34}, TNode<Uint32T>{tmp36});
    ca_.Branch(tmp37, &block28, std::vector<compiler::Node*>{phi_bb26_6, phi_bb26_8}, &block29, std::vector<compiler::Node*>{phi_bb26_6, phi_bb26_8});
  }

  TNode<IntPtrT> phi_bb28_6;
  TNode<IntPtrT> phi_bb28_8;
  if (block28.is_used()) {
    ca_.Bind(&block28, &phi_bb28_6, &phi_bb28_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb29_6;
  TNode<IntPtrT> phi_bb29_8;
  TNode<Uint8T> tmp38;
  if (block29.is_used()) {
    ca_.Bind(&block29, &phi_bb29_6, &phi_bb29_8);
    compiler::CodeAssemblerLabel label39(&ca_);
    tmp38 = IntlAsciiCollationWeightL1_0(state_, TNode<Uint8T>{tmp33}, &label39);
    ca_.Goto(&block30, phi_bb29_6, phi_bb29_8);
    if (label39.is_used()) {
      ca_.Bind(&label39);
      ca_.Goto(&block31, phi_bb29_6, phi_bb29_8);
    }
  }

  TNode<IntPtrT> phi_bb31_6;
  TNode<IntPtrT> phi_bb31_8;
  if (block31.is_used()) {
    ca_.Bind(&block31, &phi_bb31_6, &phi_bb31_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb30_6;
  TNode<IntPtrT> phi_bb30_8;
  TNode<Uint32T> tmp40;
  TNode<BoolT> tmp41;
  if (block30.is_used()) {
    ca_.Bind(&block30, &phi_bb30_6, &phi_bb30_8);
    tmp40 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp41 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp38}, TNode<Uint32T>{tmp40});
    ca_.Branch(tmp41, &block32, std::vector<compiler::Node*>{phi_bb30_6, phi_bb30_8}, &block33, std::vector<compiler::Node*>{phi_bb30_6, phi_bb30_8});
  }

  TNode<IntPtrT> phi_bb32_6;
  TNode<IntPtrT> phi_bb32_8;
  if (block32.is_used()) {
    ca_.Bind(&block32, &phi_bb32_6, &phi_bb32_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb33_6;
  TNode<IntPtrT> phi_bb33_8;
  TNode<BoolT> tmp42;
  if (block33.is_used()) {
    ca_.Bind(&block33, &phi_bb33_6, &phi_bb33_8);
    tmp42 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp34}, TNode<Uint32T>{tmp38});
    ca_.Branch(tmp42, &block34, std::vector<compiler::Node*>{phi_bb33_6, phi_bb33_8}, &block35, std::vector<compiler::Node*>{phi_bb33_6, phi_bb33_8});
  }

  TNode<IntPtrT> phi_bb34_6;
  TNode<IntPtrT> phi_bb34_8;
  if (block34.is_used()) {
    ca_.Bind(&block34, &phi_bb34_6, &phi_bb34_8);
    compiler::CodeAssemblerLabel label43(&ca_);
    CheckNextIs1Byte_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{p_left.object}, TNode<IntPtrT>{p_left.offset}, TNode<IntPtrT>{p_left.length}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb34_8}, &label43);
    ca_.Goto(&block36, phi_bb34_6, phi_bb34_8, phi_bb34_8);
    if (label43.is_used()) {
      ca_.Bind(&label43);
      ca_.Goto(&block37, phi_bb34_6, phi_bb34_8, phi_bb34_8);
    }
  }

  TNode<IntPtrT> phi_bb37_6;
  TNode<IntPtrT> phi_bb37_8;
  TNode<IntPtrT> phi_bb37_16;
  if (block37.is_used()) {
    ca_.Bind(&block37, &phi_bb37_6, &phi_bb37_8, &phi_bb37_16);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb36_6;
  TNode<IntPtrT> phi_bb36_8;
  TNode<IntPtrT> phi_bb36_16;
  if (block36.is_used()) {
    ca_.Bind(&block36, &phi_bb36_6, &phi_bb36_8, &phi_bb36_16);
    compiler::CodeAssemblerLabel label44(&ca_);
    CheckNextIs1Byte_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{p_right.object}, TNode<IntPtrT>{p_right.offset}, TNode<IntPtrT>{p_right.length}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb36_8}, &label44);
    ca_.Goto(&block38, phi_bb36_6, phi_bb36_8, phi_bb36_8);
    if (label44.is_used()) {
      ca_.Bind(&label44);
      ca_.Goto(&block39, phi_bb36_6, phi_bb36_8, phi_bb36_8);
    }
  }

  TNode<IntPtrT> phi_bb39_6;
  TNode<IntPtrT> phi_bb39_8;
  TNode<IntPtrT> phi_bb39_16;
  if (block39.is_used()) {
    ca_.Bind(&block39, &phi_bb39_6, &phi_bb39_8, &phi_bb39_16);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb38_6;
  TNode<IntPtrT> phi_bb38_8;
  TNode<IntPtrT> phi_bb38_16;
  TNode<BoolT> tmp45;
  if (block38.is_used()) {
    ca_.Bind(&block38, &phi_bb38_6, &phi_bb38_8, &phi_bb38_16);
    tmp45 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{tmp34}, TNode<Uint32T>{tmp38});
    ca_.Branch(tmp45, &block40, std::vector<compiler::Node*>{phi_bb38_6, phi_bb38_8}, &block41, std::vector<compiler::Node*>{phi_bb38_6, phi_bb38_8});
  }

  TNode<IntPtrT> phi_bb40_6;
  TNode<IntPtrT> phi_bb40_8;
  TNode<Number> tmp46;
  if (block40.is_used()) {
    ca_.Bind(&block40, &phi_bb40_6, &phi_bb40_8);
    tmp46 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    ca_.Goto(&block2, tmp46);
  }

  TNode<IntPtrT> phi_bb41_6;
  TNode<IntPtrT> phi_bb41_8;
  TNode<Number> tmp47;
  if (block41.is_used()) {
    ca_.Bind(&block41, &phi_bb41_6, &phi_bb41_8);
    tmp47 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    ca_.Goto(&block2, tmp47);
  }

  TNode<IntPtrT> phi_bb35_6;
  TNode<IntPtrT> phi_bb35_8;
  TNode<IntPtrT> tmp48;
  TNode<IntPtrT> tmp49;
  if (block35.is_used()) {
    ca_.Bind(&block35, &phi_bb35_6, &phi_bb35_8);
    tmp48 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp49 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb35_8}, TNode<IntPtrT>{tmp48});
    ca_.Goto(&block23, phi_bb35_6, tmp49);
  }

  TNode<IntPtrT> phi_bb22_6;
  TNode<IntPtrT> phi_bb22_8;
  TNode<BoolT> tmp50;
  if (block22.is_used()) {
    ca_.Bind(&block22, &phi_bb22_6, &phi_bb22_8);
    tmp50 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb22_8}, TNode<IntPtrT>{p_left.length});
    ca_.Branch(tmp50, &block42, std::vector<compiler::Node*>{phi_bb22_6, phi_bb22_8}, &block43, std::vector<compiler::Node*>{phi_bb22_6, phi_bb22_8});
  }

  TNode<IntPtrT> phi_bb42_6;
  TNode<IntPtrT> phi_bb42_8;
  TNode<IntPtrT> tmp51;
  TNode<IntPtrT> tmp52;
  TNode<Union<HeapObject, TaggedIndex>> tmp53;
  TNode<IntPtrT> tmp54;
  TNode<Uint8T> tmp55;
  TNode<Uint8T> tmp56;
  if (block42.is_used()) {
    ca_.Bind(&block42, &phi_bb42_6, &phi_bb42_8);
    tmp51 = TimesSizeOf_char8_0(state_, TNode<IntPtrT>{phi_bb42_8});
    tmp52 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_left.offset}, TNode<IntPtrT>{tmp51});
    std::tie(tmp53, tmp54) = NewReference_char8_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_left.object}, TNode<IntPtrT>{tmp52}).Flatten();
    tmp55 = CodeStubAssembler(state_).LoadReference<Uint8T>(CodeStubAssembler::Reference{tmp53, tmp54});
    compiler::CodeAssemblerLabel label57(&ca_);
    tmp56 = IntlAsciiCollationWeightL1_0(state_, TNode<Uint8T>{tmp55}, &label57);
    ca_.Goto(&block46, phi_bb42_6, phi_bb42_8);
    if (label57.is_used()) {
      ca_.Bind(&label57);
      ca_.Goto(&block47, phi_bb42_6, phi_bb42_8);
    }
  }

  TNode<IntPtrT> phi_bb47_6;
  TNode<IntPtrT> phi_bb47_8;
  if (block47.is_used()) {
    ca_.Bind(&block47, &phi_bb47_6, &phi_bb47_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb46_6;
  TNode<IntPtrT> phi_bb46_8;
  TNode<Uint32T> tmp58;
  TNode<BoolT> tmp59;
  if (block46.is_used()) {
    ca_.Bind(&block46, &phi_bb46_6, &phi_bb46_8);
    tmp58 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp59 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp56}, TNode<Uint32T>{tmp58});
    ca_.Branch(tmp59, &block48, std::vector<compiler::Node*>{phi_bb46_6, phi_bb46_8}, &block49, std::vector<compiler::Node*>{phi_bb46_6, phi_bb46_8});
  }

  TNode<IntPtrT> phi_bb48_6;
  TNode<IntPtrT> phi_bb48_8;
  if (block48.is_used()) {
    ca_.Bind(&block48, &phi_bb48_6, &phi_bb48_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb49_6;
  TNode<IntPtrT> phi_bb49_8;
  TNode<Number> tmp60;
  if (block49.is_used()) {
    ca_.Bind(&block49, &phi_bb49_6, &phi_bb49_8);
    tmp60 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    ca_.Goto(&block2, tmp60);
  }

  TNode<IntPtrT> phi_bb43_6;
  TNode<IntPtrT> phi_bb43_8;
  TNode<BoolT> tmp61;
  if (block43.is_used()) {
    ca_.Bind(&block43, &phi_bb43_6, &phi_bb43_8);
    tmp61 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb43_8}, TNode<IntPtrT>{p_right.length});
    ca_.Branch(tmp61, &block50, std::vector<compiler::Node*>{phi_bb43_6, phi_bb43_8}, &block51, std::vector<compiler::Node*>{phi_bb43_6, phi_bb43_8});
  }

  TNode<IntPtrT> phi_bb50_6;
  TNode<IntPtrT> phi_bb50_8;
  TNode<IntPtrT> tmp62;
  TNode<IntPtrT> tmp63;
  TNode<Union<HeapObject, TaggedIndex>> tmp64;
  TNode<IntPtrT> tmp65;
  TNode<Uint8T> tmp66;
  TNode<Uint8T> tmp67;
  if (block50.is_used()) {
    ca_.Bind(&block50, &phi_bb50_6, &phi_bb50_8);
    tmp62 = TimesSizeOf_char8_0(state_, TNode<IntPtrT>{phi_bb50_8});
    tmp63 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_right.offset}, TNode<IntPtrT>{tmp62});
    std::tie(tmp64, tmp65) = NewReference_char8_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_right.object}, TNode<IntPtrT>{tmp63}).Flatten();
    tmp66 = CodeStubAssembler(state_).LoadReference<Uint8T>(CodeStubAssembler::Reference{tmp64, tmp65});
    compiler::CodeAssemblerLabel label68(&ca_);
    tmp67 = IntlAsciiCollationWeightL1_0(state_, TNode<Uint8T>{tmp66}, &label68);
    ca_.Goto(&block53, phi_bb50_6, phi_bb50_8);
    if (label68.is_used()) {
      ca_.Bind(&label68);
      ca_.Goto(&block54, phi_bb50_6, phi_bb50_8);
    }
  }

  TNode<IntPtrT> phi_bb54_6;
  TNode<IntPtrT> phi_bb54_8;
  if (block54.is_used()) {
    ca_.Bind(&block54, &phi_bb54_6, &phi_bb54_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb53_6;
  TNode<IntPtrT> phi_bb53_8;
  TNode<Uint32T> tmp69;
  TNode<BoolT> tmp70;
  if (block53.is_used()) {
    ca_.Bind(&block53, &phi_bb53_6, &phi_bb53_8);
    tmp69 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp70 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp67}, TNode<Uint32T>{tmp69});
    ca_.Branch(tmp70, &block55, std::vector<compiler::Node*>{phi_bb53_6, phi_bb53_8}, &block56, std::vector<compiler::Node*>{phi_bb53_6, phi_bb53_8});
  }

  TNode<IntPtrT> phi_bb55_6;
  TNode<IntPtrT> phi_bb55_8;
  if (block55.is_used()) {
    ca_.Bind(&block55, &phi_bb55_6, &phi_bb55_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb56_6;
  TNode<IntPtrT> phi_bb56_8;
  TNode<Number> tmp71;
  if (block56.is_used()) {
    ca_.Bind(&block56, &phi_bb56_6, &phi_bb56_8);
    tmp71 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    ca_.Goto(&block2, tmp71);
  }

  TNode<IntPtrT> phi_bb51_6;
  TNode<IntPtrT> phi_bb51_8;
  if (block51.is_used()) {
    ca_.Bind(&block51, &phi_bb51_6, &phi_bb51_8);
    ca_.Goto(&block59, phi_bb51_6, phi_bb51_6);
  }

  TNode<IntPtrT> phi_bb59_6;
  TNode<IntPtrT> phi_bb59_8;
  TNode<BoolT> tmp72;
  if (block59.is_used()) {
    ca_.Bind(&block59, &phi_bb59_6, &phi_bb59_8);
    tmp72 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb59_8}, TNode<IntPtrT>{phi_bb5_7});
    ca_.Branch(tmp72, &block57, std::vector<compiler::Node*>{phi_bb59_6, phi_bb59_8}, &block58, std::vector<compiler::Node*>{phi_bb59_6, phi_bb59_8});
  }

  TNode<IntPtrT> phi_bb57_6;
  TNode<IntPtrT> phi_bb57_8;
  TNode<IntPtrT> tmp73;
  TNode<IntPtrT> tmp74;
  TNode<Union<HeapObject, TaggedIndex>> tmp75;
  TNode<IntPtrT> tmp76;
  TNode<Uint8T> tmp77;
  TNode<IntPtrT> tmp78;
  TNode<IntPtrT> tmp79;
  TNode<Union<HeapObject, TaggedIndex>> tmp80;
  TNode<IntPtrT> tmp81;
  TNode<Uint8T> tmp82;
  TNode<Uint8T> tmp83;
  if (block57.is_used()) {
    ca_.Bind(&block57, &phi_bb57_6, &phi_bb57_8);
    tmp73 = TimesSizeOf_char8_0(state_, TNode<IntPtrT>{phi_bb57_8});
    tmp74 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_left.offset}, TNode<IntPtrT>{tmp73});
    std::tie(tmp75, tmp76) = NewReference_char8_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_left.object}, TNode<IntPtrT>{tmp74}).Flatten();
    tmp77 = CodeStubAssembler(state_).LoadReference<Uint8T>(CodeStubAssembler::Reference{tmp75, tmp76});
    tmp78 = TimesSizeOf_char8_0(state_, TNode<IntPtrT>{phi_bb57_8});
    tmp79 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_right.offset}, TNode<IntPtrT>{tmp78});
    std::tie(tmp80, tmp81) = NewReference_char8_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_right.object}, TNode<IntPtrT>{tmp79}).Flatten();
    tmp82 = CodeStubAssembler(state_).LoadReference<Uint8T>(CodeStubAssembler::Reference{tmp80, tmp81});
    compiler::CodeAssemblerLabel label84(&ca_);
    tmp83 = IntlAsciiCollationWeightL3_0(state_, TNode<Uint8T>{tmp77}, &label84);
    ca_.Goto(&block64, phi_bb57_6, phi_bb57_8);
    if (label84.is_used()) {
      ca_.Bind(&label84);
      ca_.Goto(&block65, phi_bb57_6, phi_bb57_8);
    }
  }

  TNode<IntPtrT> phi_bb65_6;
  TNode<IntPtrT> phi_bb65_8;
  if (block65.is_used()) {
    ca_.Bind(&block65, &phi_bb65_6, &phi_bb65_8);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/intl-objects.tq:113:68");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb64_6;
  TNode<IntPtrT> phi_bb64_8;
  TNode<Uint8T> tmp85;
  if (block64.is_used()) {
    ca_.Bind(&block64, &phi_bb64_6, &phi_bb64_8);
    compiler::CodeAssemblerLabel label86(&ca_);
    tmp85 = IntlAsciiCollationWeightL3_0(state_, TNode<Uint8T>{tmp82}, &label86);
    ca_.Goto(&block68, phi_bb64_6, phi_bb64_8);
    if (label86.is_used()) {
      ca_.Bind(&label86);
      ca_.Goto(&block69, phi_bb64_6, phi_bb64_8);
    }
  }

  TNode<IntPtrT> phi_bb69_6;
  TNode<IntPtrT> phi_bb69_8;
  if (block69.is_used()) {
    ca_.Bind(&block69, &phi_bb69_6, &phi_bb69_8);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/intl-objects.tq:114:69");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb68_6;
  TNode<IntPtrT> phi_bb68_8;
  TNode<Uint32T> tmp87;
  TNode<BoolT> tmp88;
  if (block68.is_used()) {
    ca_.Bind(&block68, &phi_bb68_6, &phi_bb68_8);
    tmp87 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp88 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp83}, TNode<Uint32T>{tmp87});
    ca_.Branch(tmp88, &block72, std::vector<compiler::Node*>{phi_bb68_6, phi_bb68_8}, &block73, std::vector<compiler::Node*>{phi_bb68_6, phi_bb68_8});
  }

  TNode<IntPtrT> phi_bb72_6;
  TNode<IntPtrT> phi_bb72_8;
  TNode<Uint32T> tmp89;
  TNode<BoolT> tmp90;
  if (block72.is_used()) {
    ca_.Bind(&block72, &phi_bb72_6, &phi_bb72_8);
    tmp89 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp90 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp85}, TNode<Uint32T>{tmp89});
    ca_.Goto(&block74, phi_bb72_6, phi_bb72_8, tmp90);
  }

  TNode<IntPtrT> phi_bb73_6;
  TNode<IntPtrT> phi_bb73_8;
  TNode<BoolT> tmp91;
  if (block73.is_used()) {
    ca_.Bind(&block73, &phi_bb73_6, &phi_bb73_8);
    tmp91 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block74, phi_bb73_6, phi_bb73_8, tmp91);
  }

  TNode<IntPtrT> phi_bb74_6;
  TNode<IntPtrT> phi_bb74_8;
  TNode<BoolT> phi_bb74_14;
  if (block74.is_used()) {
    ca_.Bind(&block74, &phi_bb74_6, &phi_bb74_8, &phi_bb74_14);
    ca_.Branch(phi_bb74_14, &block70, std::vector<compiler::Node*>{phi_bb74_6, phi_bb74_8}, &block71, std::vector<compiler::Node*>{phi_bb74_6, phi_bb74_8});
  }

  TNode<IntPtrT> phi_bb71_6;
  TNode<IntPtrT> phi_bb71_8;
  if (block71.is_used()) {
    ca_.Bind(&block71, &phi_bb71_6, &phi_bb71_8);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/objects/intl-objects.tq", 115});
      CodeStubAssembler(state_).FailAssert("Torque assert 'leftWeight != 0 && rightWeight != 0' failed", pos_stack);
    }
  }

  TNode<IntPtrT> phi_bb70_6;
  TNode<IntPtrT> phi_bb70_8;
  TNode<BoolT> tmp92;
  if (block70.is_used()) {
    ca_.Bind(&block70, &phi_bb70_6, &phi_bb70_8);
    tmp92 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp83}, TNode<Uint32T>{tmp85});
    ca_.Branch(tmp92, &block75, std::vector<compiler::Node*>{phi_bb70_6, phi_bb70_8}, &block76, std::vector<compiler::Node*>{phi_bb70_6, phi_bb70_8});
  }

  TNode<IntPtrT> phi_bb75_6;
  TNode<IntPtrT> phi_bb75_8;
  TNode<BoolT> tmp93;
  if (block75.is_used()) {
    ca_.Bind(&block75, &phi_bb75_6, &phi_bb75_8);
    tmp93 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{tmp83}, TNode<Uint32T>{tmp85});
    ca_.Branch(tmp93, &block77, std::vector<compiler::Node*>{phi_bb75_6, phi_bb75_8}, &block78, std::vector<compiler::Node*>{phi_bb75_6, phi_bb75_8});
  }

  TNode<IntPtrT> phi_bb77_6;
  TNode<IntPtrT> phi_bb77_8;
  TNode<Number> tmp94;
  if (block77.is_used()) {
    ca_.Bind(&block77, &phi_bb77_6, &phi_bb77_8);
    tmp94 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    ca_.Goto(&block2, tmp94);
  }

  TNode<IntPtrT> phi_bb78_6;
  TNode<IntPtrT> phi_bb78_8;
  TNode<Number> tmp95;
  if (block78.is_used()) {
    ca_.Bind(&block78, &phi_bb78_6, &phi_bb78_8);
    tmp95 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    ca_.Goto(&block2, tmp95);
  }

  TNode<IntPtrT> phi_bb76_6;
  TNode<IntPtrT> phi_bb76_8;
  TNode<IntPtrT> tmp96;
  TNode<IntPtrT> tmp97;
  if (block76.is_used()) {
    ca_.Bind(&block76, &phi_bb76_6, &phi_bb76_8);
    tmp96 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp97 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb76_8}, TNode<IntPtrT>{tmp96});
    ca_.Goto(&block59, phi_bb76_6, tmp97);
  }

  TNode<IntPtrT> phi_bb58_6;
  TNode<IntPtrT> phi_bb58_8;
  TNode<Number> tmp98;
  if (block58.is_used()) {
    ca_.Bind(&block58, &phi_bb58_6, &phi_bb58_8);
    tmp98 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block2, tmp98);
  }

  TNode<Number> phi_bb2_6;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_6);
    ca_.Goto(&block79, phi_bb2_6);
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    ca_.Goto(label_Bailout);
  }

  TNode<Number> phi_bb79_6;
    ca_.Bind(&block79, &phi_bb79_6);
  return TNode<Number>{phi_bb79_6};
}

// https://crsrc.org/c/v8/src/objects/intl-objects.tq?l=168&c=11
TNode<Number> LocaleCompareFastPath_char8_char16_0(compiler::CodeAssemblerState* state_, TorqueStructSlice_char8_ConstReference_char8_0 p_left, TorqueStructSlice_char16_ConstReference_char16_0 p_right, compiler::CodeAssemblerLabel* label_Bailout) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BoolT> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block30(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block33(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block34(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT> block37(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT> block36(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT> block39(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT> block38(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block40(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block41(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block35(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block42(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block47(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block46(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block48(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block49(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block43(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block50(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block54(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block53(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block55(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block56(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block51(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block59(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block57(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block65(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block64(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block69(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block68(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block72(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block73(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, BoolT> block74(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block71(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block70(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block75(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block77(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block78(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block76(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block58(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block79(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{p_left.length}, TNode<IntPtrT>{p_right.length});
    ca_.Branch(tmp1, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    ca_.Goto(&block5, p_left.length);
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    ca_.Goto(&block5, p_right.length);
  }

  TNode<IntPtrT> phi_bb5_7;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_7);
    ca_.Goto(&block9, tmp0);
  }

  TNode<IntPtrT> phi_bb9_6;
  TNode<BoolT> tmp2;
  if (block9.is_used()) {
    ca_.Bind(&block9, &phi_bb9_6);
    tmp2 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb9_6}, TNode<IntPtrT>{phi_bb5_7});
    ca_.Branch(tmp2, &block7, std::vector<compiler::Node*>{phi_bb9_6}, &block8, std::vector<compiler::Node*>{phi_bb9_6});
  }

  TNode<IntPtrT> phi_bb7_6;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<Union<HeapObject, TaggedIndex>> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<Uint8T> tmp7;
  TNode<IntPtrT> tmp8;
  TNode<IntPtrT> tmp9;
  TNode<Union<HeapObject, TaggedIndex>> tmp10;
  TNode<IntPtrT> tmp11;
  TNode<Uint16T> tmp12;
  TNode<BoolT> tmp13;
  if (block7.is_used()) {
    ca_.Bind(&block7, &phi_bb7_6);
    tmp3 = TimesSizeOf_char8_0(state_, TNode<IntPtrT>{phi_bb7_6});
    tmp4 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_left.offset}, TNode<IntPtrT>{tmp3});
    std::tie(tmp5, tmp6) = NewReference_char8_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_left.object}, TNode<IntPtrT>{tmp4}).Flatten();
    tmp7 = CodeStubAssembler(state_).LoadReference<Uint8T>(CodeStubAssembler::Reference{tmp5, tmp6});
    tmp8 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{phi_bb7_6});
    tmp9 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_right.offset}, TNode<IntPtrT>{tmp8});
    std::tie(tmp10, tmp11) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_right.object}, TNode<IntPtrT>{tmp9}).Flatten();
    tmp12 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp10, tmp11});
    tmp13 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp7}, TNode<Uint32T>{tmp12});
    ca_.Branch(tmp13, &block12, std::vector<compiler::Node*>{phi_bb7_6}, &block13, std::vector<compiler::Node*>{phi_bb7_6});
  }

  TNode<IntPtrT> phi_bb12_6;
  if (block12.is_used()) {
    ca_.Bind(&block12, &phi_bb12_6);
    ca_.Goto(&block8, phi_bb12_6);
  }

  TNode<IntPtrT> phi_bb13_6;
  TNode<Uint32T> tmp14;
  TNode<Uint32T> tmp15;
  TNode<BoolT> tmp16;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_6);
    tmp14 = Convert_uint32_char8_0(state_, TNode<Uint8T>{tmp7});
    tmp15 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x80ull));
    tmp16 = CodeStubAssembler(state_).Uint32GreaterThanOrEqual(TNode<Uint32T>{tmp14}, TNode<Uint32T>{tmp15});
    ca_.Branch(tmp16, &block14, std::vector<compiler::Node*>{phi_bb13_6}, &block15, std::vector<compiler::Node*>{phi_bb13_6});
  }

  TNode<IntPtrT> phi_bb14_6;
  if (block14.is_used()) {
    ca_.Bind(&block14, &phi_bb14_6);
    ca_.Goto(&block8, phi_bb14_6);
  }

  TNode<IntPtrT> phi_bb15_6;
  TNode<IntPtrT> tmp17;
  TNode<IntPtrT> tmp18;
  if (block15.is_used()) {
    ca_.Bind(&block15, &phi_bb15_6);
    tmp17 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp18 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb15_6}, TNode<IntPtrT>{tmp17});
    ca_.Goto(&block9, tmp18);
  }

  TNode<IntPtrT> phi_bb8_6;
  TNode<BoolT> tmp19;
  if (block8.is_used()) {
    ca_.Bind(&block8, &phi_bb8_6);
    tmp19 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb8_6}, TNode<IntPtrT>{p_left.length});
    ca_.Branch(tmp19, &block18, std::vector<compiler::Node*>{phi_bb8_6}, &block19, std::vector<compiler::Node*>{phi_bb8_6});
  }

  TNode<IntPtrT> phi_bb18_6;
  TNode<BoolT> tmp20;
  if (block18.is_used()) {
    ca_.Bind(&block18, &phi_bb18_6);
    tmp20 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb18_6}, TNode<IntPtrT>{p_right.length});
    ca_.Goto(&block20, phi_bb18_6, tmp20);
  }

  TNode<IntPtrT> phi_bb19_6;
  TNode<BoolT> tmp21;
  if (block19.is_used()) {
    ca_.Bind(&block19, &phi_bb19_6);
    tmp21 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block20, phi_bb19_6, tmp21);
  }

  TNode<IntPtrT> phi_bb20_6;
  TNode<BoolT> phi_bb20_9;
  if (block20.is_used()) {
    ca_.Bind(&block20, &phi_bb20_6, &phi_bb20_9);
    ca_.Branch(phi_bb20_9, &block16, std::vector<compiler::Node*>{phi_bb20_6}, &block17, std::vector<compiler::Node*>{phi_bb20_6});
  }

  TNode<IntPtrT> phi_bb16_6;
  TNode<Number> tmp22;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_6);
    tmp22 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block2, tmp22);
  }

  TNode<IntPtrT> phi_bb17_6;
  if (block17.is_used()) {
    ca_.Bind(&block17, &phi_bb17_6);
    ca_.Goto(&block23, phi_bb17_6, phi_bb17_6);
  }

  TNode<IntPtrT> phi_bb23_6;
  TNode<IntPtrT> phi_bb23_8;
  TNode<BoolT> tmp23;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_6, &phi_bb23_8);
    tmp23 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb23_8}, TNode<IntPtrT>{phi_bb5_7});
    ca_.Branch(tmp23, &block21, std::vector<compiler::Node*>{phi_bb23_6, phi_bb23_8}, &block22, std::vector<compiler::Node*>{phi_bb23_6, phi_bb23_8});
  }

  TNode<IntPtrT> phi_bb21_6;
  TNode<IntPtrT> phi_bb21_8;
  TNode<IntPtrT> tmp24;
  TNode<IntPtrT> tmp25;
  TNode<Union<HeapObject, TaggedIndex>> tmp26;
  TNode<IntPtrT> tmp27;
  TNode<Uint8T> tmp28;
  TNode<IntPtrT> tmp29;
  TNode<IntPtrT> tmp30;
  TNode<Union<HeapObject, TaggedIndex>> tmp31;
  TNode<IntPtrT> tmp32;
  TNode<Uint16T> tmp33;
  TNode<Uint8T> tmp34;
  if (block21.is_used()) {
    ca_.Bind(&block21, &phi_bb21_6, &phi_bb21_8);
    tmp24 = TimesSizeOf_char8_0(state_, TNode<IntPtrT>{phi_bb21_8});
    tmp25 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_left.offset}, TNode<IntPtrT>{tmp24});
    std::tie(tmp26, tmp27) = NewReference_char8_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_left.object}, TNode<IntPtrT>{tmp25}).Flatten();
    tmp28 = CodeStubAssembler(state_).LoadReference<Uint8T>(CodeStubAssembler::Reference{tmp26, tmp27});
    tmp29 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{phi_bb21_8});
    tmp30 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_right.offset}, TNode<IntPtrT>{tmp29});
    std::tie(tmp31, tmp32) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_right.object}, TNode<IntPtrT>{tmp30}).Flatten();
    tmp33 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp31, tmp32});
    compiler::CodeAssemblerLabel label35(&ca_);
    tmp34 = IntlAsciiCollationWeightL1_0(state_, TNode<Uint8T>{tmp28}, &label35);
    ca_.Goto(&block26, phi_bb21_6, phi_bb21_8);
    if (label35.is_used()) {
      ca_.Bind(&label35);
      ca_.Goto(&block27, phi_bb21_6, phi_bb21_8);
    }
  }

  TNode<IntPtrT> phi_bb27_6;
  TNode<IntPtrT> phi_bb27_8;
  if (block27.is_used()) {
    ca_.Bind(&block27, &phi_bb27_6, &phi_bb27_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb26_6;
  TNode<IntPtrT> phi_bb26_8;
  TNode<Uint32T> tmp36;
  TNode<BoolT> tmp37;
  if (block26.is_used()) {
    ca_.Bind(&block26, &phi_bb26_6, &phi_bb26_8);
    tmp36 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp37 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp34}, TNode<Uint32T>{tmp36});
    ca_.Branch(tmp37, &block28, std::vector<compiler::Node*>{phi_bb26_6, phi_bb26_8}, &block29, std::vector<compiler::Node*>{phi_bb26_6, phi_bb26_8});
  }

  TNode<IntPtrT> phi_bb28_6;
  TNode<IntPtrT> phi_bb28_8;
  if (block28.is_used()) {
    ca_.Bind(&block28, &phi_bb28_6, &phi_bb28_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb29_6;
  TNode<IntPtrT> phi_bb29_8;
  TNode<Uint8T> tmp38;
  if (block29.is_used()) {
    ca_.Bind(&block29, &phi_bb29_6, &phi_bb29_8);
    compiler::CodeAssemblerLabel label39(&ca_);
    tmp38 = IntlAsciiCollationWeightL1_1(state_, TNode<Uint16T>{tmp33}, &label39);
    ca_.Goto(&block30, phi_bb29_6, phi_bb29_8);
    if (label39.is_used()) {
      ca_.Bind(&label39);
      ca_.Goto(&block31, phi_bb29_6, phi_bb29_8);
    }
  }

  TNode<IntPtrT> phi_bb31_6;
  TNode<IntPtrT> phi_bb31_8;
  if (block31.is_used()) {
    ca_.Bind(&block31, &phi_bb31_6, &phi_bb31_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb30_6;
  TNode<IntPtrT> phi_bb30_8;
  TNode<Uint32T> tmp40;
  TNode<BoolT> tmp41;
  if (block30.is_used()) {
    ca_.Bind(&block30, &phi_bb30_6, &phi_bb30_8);
    tmp40 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp41 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp38}, TNode<Uint32T>{tmp40});
    ca_.Branch(tmp41, &block32, std::vector<compiler::Node*>{phi_bb30_6, phi_bb30_8}, &block33, std::vector<compiler::Node*>{phi_bb30_6, phi_bb30_8});
  }

  TNode<IntPtrT> phi_bb32_6;
  TNode<IntPtrT> phi_bb32_8;
  if (block32.is_used()) {
    ca_.Bind(&block32, &phi_bb32_6, &phi_bb32_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb33_6;
  TNode<IntPtrT> phi_bb33_8;
  TNode<BoolT> tmp42;
  if (block33.is_used()) {
    ca_.Bind(&block33, &phi_bb33_6, &phi_bb33_8);
    tmp42 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp34}, TNode<Uint32T>{tmp38});
    ca_.Branch(tmp42, &block34, std::vector<compiler::Node*>{phi_bb33_6, phi_bb33_8}, &block35, std::vector<compiler::Node*>{phi_bb33_6, phi_bb33_8});
  }

  TNode<IntPtrT> phi_bb34_6;
  TNode<IntPtrT> phi_bb34_8;
  if (block34.is_used()) {
    ca_.Bind(&block34, &phi_bb34_6, &phi_bb34_8);
    compiler::CodeAssemblerLabel label43(&ca_);
    CheckNextIs1Byte_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{p_left.object}, TNode<IntPtrT>{p_left.offset}, TNode<IntPtrT>{p_left.length}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb34_8}, &label43);
    ca_.Goto(&block36, phi_bb34_6, phi_bb34_8, phi_bb34_8);
    if (label43.is_used()) {
      ca_.Bind(&label43);
      ca_.Goto(&block37, phi_bb34_6, phi_bb34_8, phi_bb34_8);
    }
  }

  TNode<IntPtrT> phi_bb37_6;
  TNode<IntPtrT> phi_bb37_8;
  TNode<IntPtrT> phi_bb37_16;
  if (block37.is_used()) {
    ca_.Bind(&block37, &phi_bb37_6, &phi_bb37_8, &phi_bb37_16);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb36_6;
  TNode<IntPtrT> phi_bb36_8;
  TNode<IntPtrT> phi_bb36_16;
  if (block36.is_used()) {
    ca_.Bind(&block36, &phi_bb36_6, &phi_bb36_8, &phi_bb36_16);
    compiler::CodeAssemblerLabel label44(&ca_);
    CheckNextIs1Byte_1(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{p_right.object}, TNode<IntPtrT>{p_right.offset}, TNode<IntPtrT>{p_right.length}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb36_8}, &label44);
    ca_.Goto(&block38, phi_bb36_6, phi_bb36_8, phi_bb36_8);
    if (label44.is_used()) {
      ca_.Bind(&label44);
      ca_.Goto(&block39, phi_bb36_6, phi_bb36_8, phi_bb36_8);
    }
  }

  TNode<IntPtrT> phi_bb39_6;
  TNode<IntPtrT> phi_bb39_8;
  TNode<IntPtrT> phi_bb39_16;
  if (block39.is_used()) {
    ca_.Bind(&block39, &phi_bb39_6, &phi_bb39_8, &phi_bb39_16);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb38_6;
  TNode<IntPtrT> phi_bb38_8;
  TNode<IntPtrT> phi_bb38_16;
  TNode<BoolT> tmp45;
  if (block38.is_used()) {
    ca_.Bind(&block38, &phi_bb38_6, &phi_bb38_8, &phi_bb38_16);
    tmp45 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{tmp34}, TNode<Uint32T>{tmp38});
    ca_.Branch(tmp45, &block40, std::vector<compiler::Node*>{phi_bb38_6, phi_bb38_8}, &block41, std::vector<compiler::Node*>{phi_bb38_6, phi_bb38_8});
  }

  TNode<IntPtrT> phi_bb40_6;
  TNode<IntPtrT> phi_bb40_8;
  TNode<Number> tmp46;
  if (block40.is_used()) {
    ca_.Bind(&block40, &phi_bb40_6, &phi_bb40_8);
    tmp46 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    ca_.Goto(&block2, tmp46);
  }

  TNode<IntPtrT> phi_bb41_6;
  TNode<IntPtrT> phi_bb41_8;
  TNode<Number> tmp47;
  if (block41.is_used()) {
    ca_.Bind(&block41, &phi_bb41_6, &phi_bb41_8);
    tmp47 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    ca_.Goto(&block2, tmp47);
  }

  TNode<IntPtrT> phi_bb35_6;
  TNode<IntPtrT> phi_bb35_8;
  TNode<IntPtrT> tmp48;
  TNode<IntPtrT> tmp49;
  if (block35.is_used()) {
    ca_.Bind(&block35, &phi_bb35_6, &phi_bb35_8);
    tmp48 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp49 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb35_8}, TNode<IntPtrT>{tmp48});
    ca_.Goto(&block23, phi_bb35_6, tmp49);
  }

  TNode<IntPtrT> phi_bb22_6;
  TNode<IntPtrT> phi_bb22_8;
  TNode<BoolT> tmp50;
  if (block22.is_used()) {
    ca_.Bind(&block22, &phi_bb22_6, &phi_bb22_8);
    tmp50 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb22_8}, TNode<IntPtrT>{p_left.length});
    ca_.Branch(tmp50, &block42, std::vector<compiler::Node*>{phi_bb22_6, phi_bb22_8}, &block43, std::vector<compiler::Node*>{phi_bb22_6, phi_bb22_8});
  }

  TNode<IntPtrT> phi_bb42_6;
  TNode<IntPtrT> phi_bb42_8;
  TNode<IntPtrT> tmp51;
  TNode<IntPtrT> tmp52;
  TNode<Union<HeapObject, TaggedIndex>> tmp53;
  TNode<IntPtrT> tmp54;
  TNode<Uint8T> tmp55;
  TNode<Uint8T> tmp56;
  if (block42.is_used()) {
    ca_.Bind(&block42, &phi_bb42_6, &phi_bb42_8);
    tmp51 = TimesSizeOf_char8_0(state_, TNode<IntPtrT>{phi_bb42_8});
    tmp52 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_left.offset}, TNode<IntPtrT>{tmp51});
    std::tie(tmp53, tmp54) = NewReference_char8_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_left.object}, TNode<IntPtrT>{tmp52}).Flatten();
    tmp55 = CodeStubAssembler(state_).LoadReference<Uint8T>(CodeStubAssembler::Reference{tmp53, tmp54});
    compiler::CodeAssemblerLabel label57(&ca_);
    tmp56 = IntlAsciiCollationWeightL1_0(state_, TNode<Uint8T>{tmp55}, &label57);
    ca_.Goto(&block46, phi_bb42_6, phi_bb42_8);
    if (label57.is_used()) {
      ca_.Bind(&label57);
      ca_.Goto(&block47, phi_bb42_6, phi_bb42_8);
    }
  }

  TNode<IntPtrT> phi_bb47_6;
  TNode<IntPtrT> phi_bb47_8;
  if (block47.is_used()) {
    ca_.Bind(&block47, &phi_bb47_6, &phi_bb47_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb46_6;
  TNode<IntPtrT> phi_bb46_8;
  TNode<Uint32T> tmp58;
  TNode<BoolT> tmp59;
  if (block46.is_used()) {
    ca_.Bind(&block46, &phi_bb46_6, &phi_bb46_8);
    tmp58 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp59 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp56}, TNode<Uint32T>{tmp58});
    ca_.Branch(tmp59, &block48, std::vector<compiler::Node*>{phi_bb46_6, phi_bb46_8}, &block49, std::vector<compiler::Node*>{phi_bb46_6, phi_bb46_8});
  }

  TNode<IntPtrT> phi_bb48_6;
  TNode<IntPtrT> phi_bb48_8;
  if (block48.is_used()) {
    ca_.Bind(&block48, &phi_bb48_6, &phi_bb48_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb49_6;
  TNode<IntPtrT> phi_bb49_8;
  TNode<Number> tmp60;
  if (block49.is_used()) {
    ca_.Bind(&block49, &phi_bb49_6, &phi_bb49_8);
    tmp60 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    ca_.Goto(&block2, tmp60);
  }

  TNode<IntPtrT> phi_bb43_6;
  TNode<IntPtrT> phi_bb43_8;
  TNode<BoolT> tmp61;
  if (block43.is_used()) {
    ca_.Bind(&block43, &phi_bb43_6, &phi_bb43_8);
    tmp61 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb43_8}, TNode<IntPtrT>{p_right.length});
    ca_.Branch(tmp61, &block50, std::vector<compiler::Node*>{phi_bb43_6, phi_bb43_8}, &block51, std::vector<compiler::Node*>{phi_bb43_6, phi_bb43_8});
  }

  TNode<IntPtrT> phi_bb50_6;
  TNode<IntPtrT> phi_bb50_8;
  TNode<IntPtrT> tmp62;
  TNode<IntPtrT> tmp63;
  TNode<Union<HeapObject, TaggedIndex>> tmp64;
  TNode<IntPtrT> tmp65;
  TNode<Uint16T> tmp66;
  TNode<Uint8T> tmp67;
  if (block50.is_used()) {
    ca_.Bind(&block50, &phi_bb50_6, &phi_bb50_8);
    tmp62 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{phi_bb50_8});
    tmp63 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_right.offset}, TNode<IntPtrT>{tmp62});
    std::tie(tmp64, tmp65) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_right.object}, TNode<IntPtrT>{tmp63}).Flatten();
    tmp66 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp64, tmp65});
    compiler::CodeAssemblerLabel label68(&ca_);
    tmp67 = IntlAsciiCollationWeightL1_1(state_, TNode<Uint16T>{tmp66}, &label68);
    ca_.Goto(&block53, phi_bb50_6, phi_bb50_8);
    if (label68.is_used()) {
      ca_.Bind(&label68);
      ca_.Goto(&block54, phi_bb50_6, phi_bb50_8);
    }
  }

  TNode<IntPtrT> phi_bb54_6;
  TNode<IntPtrT> phi_bb54_8;
  if (block54.is_used()) {
    ca_.Bind(&block54, &phi_bb54_6, &phi_bb54_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb53_6;
  TNode<IntPtrT> phi_bb53_8;
  TNode<Uint32T> tmp69;
  TNode<BoolT> tmp70;
  if (block53.is_used()) {
    ca_.Bind(&block53, &phi_bb53_6, &phi_bb53_8);
    tmp69 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp70 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp67}, TNode<Uint32T>{tmp69});
    ca_.Branch(tmp70, &block55, std::vector<compiler::Node*>{phi_bb53_6, phi_bb53_8}, &block56, std::vector<compiler::Node*>{phi_bb53_6, phi_bb53_8});
  }

  TNode<IntPtrT> phi_bb55_6;
  TNode<IntPtrT> phi_bb55_8;
  if (block55.is_used()) {
    ca_.Bind(&block55, &phi_bb55_6, &phi_bb55_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb56_6;
  TNode<IntPtrT> phi_bb56_8;
  TNode<Number> tmp71;
  if (block56.is_used()) {
    ca_.Bind(&block56, &phi_bb56_6, &phi_bb56_8);
    tmp71 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    ca_.Goto(&block2, tmp71);
  }

  TNode<IntPtrT> phi_bb51_6;
  TNode<IntPtrT> phi_bb51_8;
  if (block51.is_used()) {
    ca_.Bind(&block51, &phi_bb51_6, &phi_bb51_8);
    ca_.Goto(&block59, phi_bb51_6, phi_bb51_6);
  }

  TNode<IntPtrT> phi_bb59_6;
  TNode<IntPtrT> phi_bb59_8;
  TNode<BoolT> tmp72;
  if (block59.is_used()) {
    ca_.Bind(&block59, &phi_bb59_6, &phi_bb59_8);
    tmp72 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb59_8}, TNode<IntPtrT>{phi_bb5_7});
    ca_.Branch(tmp72, &block57, std::vector<compiler::Node*>{phi_bb59_6, phi_bb59_8}, &block58, std::vector<compiler::Node*>{phi_bb59_6, phi_bb59_8});
  }

  TNode<IntPtrT> phi_bb57_6;
  TNode<IntPtrT> phi_bb57_8;
  TNode<IntPtrT> tmp73;
  TNode<IntPtrT> tmp74;
  TNode<Union<HeapObject, TaggedIndex>> tmp75;
  TNode<IntPtrT> tmp76;
  TNode<Uint8T> tmp77;
  TNode<IntPtrT> tmp78;
  TNode<IntPtrT> tmp79;
  TNode<Union<HeapObject, TaggedIndex>> tmp80;
  TNode<IntPtrT> tmp81;
  TNode<Uint16T> tmp82;
  TNode<Uint8T> tmp83;
  if (block57.is_used()) {
    ca_.Bind(&block57, &phi_bb57_6, &phi_bb57_8);
    tmp73 = TimesSizeOf_char8_0(state_, TNode<IntPtrT>{phi_bb57_8});
    tmp74 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_left.offset}, TNode<IntPtrT>{tmp73});
    std::tie(tmp75, tmp76) = NewReference_char8_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_left.object}, TNode<IntPtrT>{tmp74}).Flatten();
    tmp77 = CodeStubAssembler(state_).LoadReference<Uint8T>(CodeStubAssembler::Reference{tmp75, tmp76});
    tmp78 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{phi_bb57_8});
    tmp79 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_right.offset}, TNode<IntPtrT>{tmp78});
    std::tie(tmp80, tmp81) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_right.object}, TNode<IntPtrT>{tmp79}).Flatten();
    tmp82 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp80, tmp81});
    compiler::CodeAssemblerLabel label84(&ca_);
    tmp83 = IntlAsciiCollationWeightL3_0(state_, TNode<Uint8T>{tmp77}, &label84);
    ca_.Goto(&block64, phi_bb57_6, phi_bb57_8);
    if (label84.is_used()) {
      ca_.Bind(&label84);
      ca_.Goto(&block65, phi_bb57_6, phi_bb57_8);
    }
  }

  TNode<IntPtrT> phi_bb65_6;
  TNode<IntPtrT> phi_bb65_8;
  if (block65.is_used()) {
    ca_.Bind(&block65, &phi_bb65_6, &phi_bb65_8);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/intl-objects.tq:113:68");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb64_6;
  TNode<IntPtrT> phi_bb64_8;
  TNode<Uint8T> tmp85;
  if (block64.is_used()) {
    ca_.Bind(&block64, &phi_bb64_6, &phi_bb64_8);
    compiler::CodeAssemblerLabel label86(&ca_);
    tmp85 = IntlAsciiCollationWeightL3_1(state_, TNode<Uint16T>{tmp82}, &label86);
    ca_.Goto(&block68, phi_bb64_6, phi_bb64_8);
    if (label86.is_used()) {
      ca_.Bind(&label86);
      ca_.Goto(&block69, phi_bb64_6, phi_bb64_8);
    }
  }

  TNode<IntPtrT> phi_bb69_6;
  TNode<IntPtrT> phi_bb69_8;
  if (block69.is_used()) {
    ca_.Bind(&block69, &phi_bb69_6, &phi_bb69_8);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/intl-objects.tq:114:69");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb68_6;
  TNode<IntPtrT> phi_bb68_8;
  TNode<Uint32T> tmp87;
  TNode<BoolT> tmp88;
  if (block68.is_used()) {
    ca_.Bind(&block68, &phi_bb68_6, &phi_bb68_8);
    tmp87 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp88 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp83}, TNode<Uint32T>{tmp87});
    ca_.Branch(tmp88, &block72, std::vector<compiler::Node*>{phi_bb68_6, phi_bb68_8}, &block73, std::vector<compiler::Node*>{phi_bb68_6, phi_bb68_8});
  }

  TNode<IntPtrT> phi_bb72_6;
  TNode<IntPtrT> phi_bb72_8;
  TNode<Uint32T> tmp89;
  TNode<BoolT> tmp90;
  if (block72.is_used()) {
    ca_.Bind(&block72, &phi_bb72_6, &phi_bb72_8);
    tmp89 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp90 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp85}, TNode<Uint32T>{tmp89});
    ca_.Goto(&block74, phi_bb72_6, phi_bb72_8, tmp90);
  }

  TNode<IntPtrT> phi_bb73_6;
  TNode<IntPtrT> phi_bb73_8;
  TNode<BoolT> tmp91;
  if (block73.is_used()) {
    ca_.Bind(&block73, &phi_bb73_6, &phi_bb73_8);
    tmp91 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block74, phi_bb73_6, phi_bb73_8, tmp91);
  }

  TNode<IntPtrT> phi_bb74_6;
  TNode<IntPtrT> phi_bb74_8;
  TNode<BoolT> phi_bb74_14;
  if (block74.is_used()) {
    ca_.Bind(&block74, &phi_bb74_6, &phi_bb74_8, &phi_bb74_14);
    ca_.Branch(phi_bb74_14, &block70, std::vector<compiler::Node*>{phi_bb74_6, phi_bb74_8}, &block71, std::vector<compiler::Node*>{phi_bb74_6, phi_bb74_8});
  }

  TNode<IntPtrT> phi_bb71_6;
  TNode<IntPtrT> phi_bb71_8;
  if (block71.is_used()) {
    ca_.Bind(&block71, &phi_bb71_6, &phi_bb71_8);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/objects/intl-objects.tq", 115});
      CodeStubAssembler(state_).FailAssert("Torque assert 'leftWeight != 0 && rightWeight != 0' failed", pos_stack);
    }
  }

  TNode<IntPtrT> phi_bb70_6;
  TNode<IntPtrT> phi_bb70_8;
  TNode<BoolT> tmp92;
  if (block70.is_used()) {
    ca_.Bind(&block70, &phi_bb70_6, &phi_bb70_8);
    tmp92 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp83}, TNode<Uint32T>{tmp85});
    ca_.Branch(tmp92, &block75, std::vector<compiler::Node*>{phi_bb70_6, phi_bb70_8}, &block76, std::vector<compiler::Node*>{phi_bb70_6, phi_bb70_8});
  }

  TNode<IntPtrT> phi_bb75_6;
  TNode<IntPtrT> phi_bb75_8;
  TNode<BoolT> tmp93;
  if (block75.is_used()) {
    ca_.Bind(&block75, &phi_bb75_6, &phi_bb75_8);
    tmp93 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{tmp83}, TNode<Uint32T>{tmp85});
    ca_.Branch(tmp93, &block77, std::vector<compiler::Node*>{phi_bb75_6, phi_bb75_8}, &block78, std::vector<compiler::Node*>{phi_bb75_6, phi_bb75_8});
  }

  TNode<IntPtrT> phi_bb77_6;
  TNode<IntPtrT> phi_bb77_8;
  TNode<Number> tmp94;
  if (block77.is_used()) {
    ca_.Bind(&block77, &phi_bb77_6, &phi_bb77_8);
    tmp94 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    ca_.Goto(&block2, tmp94);
  }

  TNode<IntPtrT> phi_bb78_6;
  TNode<IntPtrT> phi_bb78_8;
  TNode<Number> tmp95;
  if (block78.is_used()) {
    ca_.Bind(&block78, &phi_bb78_6, &phi_bb78_8);
    tmp95 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    ca_.Goto(&block2, tmp95);
  }

  TNode<IntPtrT> phi_bb76_6;
  TNode<IntPtrT> phi_bb76_8;
  TNode<IntPtrT> tmp96;
  TNode<IntPtrT> tmp97;
  if (block76.is_used()) {
    ca_.Bind(&block76, &phi_bb76_6, &phi_bb76_8);
    tmp96 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp97 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb76_8}, TNode<IntPtrT>{tmp96});
    ca_.Goto(&block59, phi_bb76_6, tmp97);
  }

  TNode<IntPtrT> phi_bb58_6;
  TNode<IntPtrT> phi_bb58_8;
  TNode<Number> tmp98;
  if (block58.is_used()) {
    ca_.Bind(&block58, &phi_bb58_6, &phi_bb58_8);
    tmp98 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block2, tmp98);
  }

  TNode<Number> phi_bb2_6;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_6);
    ca_.Goto(&block79, phi_bb2_6);
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    ca_.Goto(label_Bailout);
  }

  TNode<Number> phi_bb79_6;
    ca_.Bind(&block79, &phi_bb79_6);
  return TNode<Number>{phi_bb79_6};
}

// https://crsrc.org/c/v8/src/objects/intl-objects.tq?l=177&c=11
TNode<Number> LocaleCompareFastPath_char16_char8_0(compiler::CodeAssemblerState* state_, TorqueStructSlice_char16_ConstReference_char16_0 p_left, TorqueStructSlice_char8_ConstReference_char8_0 p_right, compiler::CodeAssemblerLabel* label_Bailout) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BoolT> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block30(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block33(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block34(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT> block37(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT> block36(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT> block39(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT> block38(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block40(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block41(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block35(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block42(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block47(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block46(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block48(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block49(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block43(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block50(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block54(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block53(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block55(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block56(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block51(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block59(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block57(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block65(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block64(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block69(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block68(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block72(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block73(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, BoolT> block74(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block71(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block70(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block75(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block77(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block78(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block76(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block58(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block79(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{p_left.length}, TNode<IntPtrT>{p_right.length});
    ca_.Branch(tmp1, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    ca_.Goto(&block5, p_left.length);
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    ca_.Goto(&block5, p_right.length);
  }

  TNode<IntPtrT> phi_bb5_7;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_7);
    ca_.Goto(&block9, tmp0);
  }

  TNode<IntPtrT> phi_bb9_6;
  TNode<BoolT> tmp2;
  if (block9.is_used()) {
    ca_.Bind(&block9, &phi_bb9_6);
    tmp2 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb9_6}, TNode<IntPtrT>{phi_bb5_7});
    ca_.Branch(tmp2, &block7, std::vector<compiler::Node*>{phi_bb9_6}, &block8, std::vector<compiler::Node*>{phi_bb9_6});
  }

  TNode<IntPtrT> phi_bb7_6;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<Union<HeapObject, TaggedIndex>> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<Uint16T> tmp7;
  TNode<IntPtrT> tmp8;
  TNode<IntPtrT> tmp9;
  TNode<Union<HeapObject, TaggedIndex>> tmp10;
  TNode<IntPtrT> tmp11;
  TNode<Uint8T> tmp12;
  TNode<BoolT> tmp13;
  if (block7.is_used()) {
    ca_.Bind(&block7, &phi_bb7_6);
    tmp3 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{phi_bb7_6});
    tmp4 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_left.offset}, TNode<IntPtrT>{tmp3});
    std::tie(tmp5, tmp6) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_left.object}, TNode<IntPtrT>{tmp4}).Flatten();
    tmp7 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp5, tmp6});
    tmp8 = TimesSizeOf_char8_0(state_, TNode<IntPtrT>{phi_bb7_6});
    tmp9 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_right.offset}, TNode<IntPtrT>{tmp8});
    std::tie(tmp10, tmp11) = NewReference_char8_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_right.object}, TNode<IntPtrT>{tmp9}).Flatten();
    tmp12 = CodeStubAssembler(state_).LoadReference<Uint8T>(CodeStubAssembler::Reference{tmp10, tmp11});
    tmp13 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp7}, TNode<Uint32T>{tmp12});
    ca_.Branch(tmp13, &block12, std::vector<compiler::Node*>{phi_bb7_6}, &block13, std::vector<compiler::Node*>{phi_bb7_6});
  }

  TNode<IntPtrT> phi_bb12_6;
  if (block12.is_used()) {
    ca_.Bind(&block12, &phi_bb12_6);
    ca_.Goto(&block8, phi_bb12_6);
  }

  TNode<IntPtrT> phi_bb13_6;
  TNode<Uint32T> tmp14;
  TNode<Uint32T> tmp15;
  TNode<BoolT> tmp16;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_6);
    tmp14 = Convert_uint32_char16_0(state_, TNode<Uint16T>{tmp7});
    tmp15 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x80ull));
    tmp16 = CodeStubAssembler(state_).Uint32GreaterThanOrEqual(TNode<Uint32T>{tmp14}, TNode<Uint32T>{tmp15});
    ca_.Branch(tmp16, &block14, std::vector<compiler::Node*>{phi_bb13_6}, &block15, std::vector<compiler::Node*>{phi_bb13_6});
  }

  TNode<IntPtrT> phi_bb14_6;
  if (block14.is_used()) {
    ca_.Bind(&block14, &phi_bb14_6);
    ca_.Goto(&block8, phi_bb14_6);
  }

  TNode<IntPtrT> phi_bb15_6;
  TNode<IntPtrT> tmp17;
  TNode<IntPtrT> tmp18;
  if (block15.is_used()) {
    ca_.Bind(&block15, &phi_bb15_6);
    tmp17 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp18 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb15_6}, TNode<IntPtrT>{tmp17});
    ca_.Goto(&block9, tmp18);
  }

  TNode<IntPtrT> phi_bb8_6;
  TNode<BoolT> tmp19;
  if (block8.is_used()) {
    ca_.Bind(&block8, &phi_bb8_6);
    tmp19 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb8_6}, TNode<IntPtrT>{p_left.length});
    ca_.Branch(tmp19, &block18, std::vector<compiler::Node*>{phi_bb8_6}, &block19, std::vector<compiler::Node*>{phi_bb8_6});
  }

  TNode<IntPtrT> phi_bb18_6;
  TNode<BoolT> tmp20;
  if (block18.is_used()) {
    ca_.Bind(&block18, &phi_bb18_6);
    tmp20 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb18_6}, TNode<IntPtrT>{p_right.length});
    ca_.Goto(&block20, phi_bb18_6, tmp20);
  }

  TNode<IntPtrT> phi_bb19_6;
  TNode<BoolT> tmp21;
  if (block19.is_used()) {
    ca_.Bind(&block19, &phi_bb19_6);
    tmp21 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block20, phi_bb19_6, tmp21);
  }

  TNode<IntPtrT> phi_bb20_6;
  TNode<BoolT> phi_bb20_9;
  if (block20.is_used()) {
    ca_.Bind(&block20, &phi_bb20_6, &phi_bb20_9);
    ca_.Branch(phi_bb20_9, &block16, std::vector<compiler::Node*>{phi_bb20_6}, &block17, std::vector<compiler::Node*>{phi_bb20_6});
  }

  TNode<IntPtrT> phi_bb16_6;
  TNode<Number> tmp22;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_6);
    tmp22 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block2, tmp22);
  }

  TNode<IntPtrT> phi_bb17_6;
  if (block17.is_used()) {
    ca_.Bind(&block17, &phi_bb17_6);
    ca_.Goto(&block23, phi_bb17_6, phi_bb17_6);
  }

  TNode<IntPtrT> phi_bb23_6;
  TNode<IntPtrT> phi_bb23_8;
  TNode<BoolT> tmp23;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_6, &phi_bb23_8);
    tmp23 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb23_8}, TNode<IntPtrT>{phi_bb5_7});
    ca_.Branch(tmp23, &block21, std::vector<compiler::Node*>{phi_bb23_6, phi_bb23_8}, &block22, std::vector<compiler::Node*>{phi_bb23_6, phi_bb23_8});
  }

  TNode<IntPtrT> phi_bb21_6;
  TNode<IntPtrT> phi_bb21_8;
  TNode<IntPtrT> tmp24;
  TNode<IntPtrT> tmp25;
  TNode<Union<HeapObject, TaggedIndex>> tmp26;
  TNode<IntPtrT> tmp27;
  TNode<Uint16T> tmp28;
  TNode<IntPtrT> tmp29;
  TNode<IntPtrT> tmp30;
  TNode<Union<HeapObject, TaggedIndex>> tmp31;
  TNode<IntPtrT> tmp32;
  TNode<Uint8T> tmp33;
  TNode<Uint8T> tmp34;
  if (block21.is_used()) {
    ca_.Bind(&block21, &phi_bb21_6, &phi_bb21_8);
    tmp24 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{phi_bb21_8});
    tmp25 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_left.offset}, TNode<IntPtrT>{tmp24});
    std::tie(tmp26, tmp27) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_left.object}, TNode<IntPtrT>{tmp25}).Flatten();
    tmp28 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp26, tmp27});
    tmp29 = TimesSizeOf_char8_0(state_, TNode<IntPtrT>{phi_bb21_8});
    tmp30 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_right.offset}, TNode<IntPtrT>{tmp29});
    std::tie(tmp31, tmp32) = NewReference_char8_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_right.object}, TNode<IntPtrT>{tmp30}).Flatten();
    tmp33 = CodeStubAssembler(state_).LoadReference<Uint8T>(CodeStubAssembler::Reference{tmp31, tmp32});
    compiler::CodeAssemblerLabel label35(&ca_);
    tmp34 = IntlAsciiCollationWeightL1_1(state_, TNode<Uint16T>{tmp28}, &label35);
    ca_.Goto(&block26, phi_bb21_6, phi_bb21_8);
    if (label35.is_used()) {
      ca_.Bind(&label35);
      ca_.Goto(&block27, phi_bb21_6, phi_bb21_8);
    }
  }

  TNode<IntPtrT> phi_bb27_6;
  TNode<IntPtrT> phi_bb27_8;
  if (block27.is_used()) {
    ca_.Bind(&block27, &phi_bb27_6, &phi_bb27_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb26_6;
  TNode<IntPtrT> phi_bb26_8;
  TNode<Uint32T> tmp36;
  TNode<BoolT> tmp37;
  if (block26.is_used()) {
    ca_.Bind(&block26, &phi_bb26_6, &phi_bb26_8);
    tmp36 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp37 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp34}, TNode<Uint32T>{tmp36});
    ca_.Branch(tmp37, &block28, std::vector<compiler::Node*>{phi_bb26_6, phi_bb26_8}, &block29, std::vector<compiler::Node*>{phi_bb26_6, phi_bb26_8});
  }

  TNode<IntPtrT> phi_bb28_6;
  TNode<IntPtrT> phi_bb28_8;
  if (block28.is_used()) {
    ca_.Bind(&block28, &phi_bb28_6, &phi_bb28_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb29_6;
  TNode<IntPtrT> phi_bb29_8;
  TNode<Uint8T> tmp38;
  if (block29.is_used()) {
    ca_.Bind(&block29, &phi_bb29_6, &phi_bb29_8);
    compiler::CodeAssemblerLabel label39(&ca_);
    tmp38 = IntlAsciiCollationWeightL1_0(state_, TNode<Uint8T>{tmp33}, &label39);
    ca_.Goto(&block30, phi_bb29_6, phi_bb29_8);
    if (label39.is_used()) {
      ca_.Bind(&label39);
      ca_.Goto(&block31, phi_bb29_6, phi_bb29_8);
    }
  }

  TNode<IntPtrT> phi_bb31_6;
  TNode<IntPtrT> phi_bb31_8;
  if (block31.is_used()) {
    ca_.Bind(&block31, &phi_bb31_6, &phi_bb31_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb30_6;
  TNode<IntPtrT> phi_bb30_8;
  TNode<Uint32T> tmp40;
  TNode<BoolT> tmp41;
  if (block30.is_used()) {
    ca_.Bind(&block30, &phi_bb30_6, &phi_bb30_8);
    tmp40 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp41 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp38}, TNode<Uint32T>{tmp40});
    ca_.Branch(tmp41, &block32, std::vector<compiler::Node*>{phi_bb30_6, phi_bb30_8}, &block33, std::vector<compiler::Node*>{phi_bb30_6, phi_bb30_8});
  }

  TNode<IntPtrT> phi_bb32_6;
  TNode<IntPtrT> phi_bb32_8;
  if (block32.is_used()) {
    ca_.Bind(&block32, &phi_bb32_6, &phi_bb32_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb33_6;
  TNode<IntPtrT> phi_bb33_8;
  TNode<BoolT> tmp42;
  if (block33.is_used()) {
    ca_.Bind(&block33, &phi_bb33_6, &phi_bb33_8);
    tmp42 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp34}, TNode<Uint32T>{tmp38});
    ca_.Branch(tmp42, &block34, std::vector<compiler::Node*>{phi_bb33_6, phi_bb33_8}, &block35, std::vector<compiler::Node*>{phi_bb33_6, phi_bb33_8});
  }

  TNode<IntPtrT> phi_bb34_6;
  TNode<IntPtrT> phi_bb34_8;
  if (block34.is_used()) {
    ca_.Bind(&block34, &phi_bb34_6, &phi_bb34_8);
    compiler::CodeAssemblerLabel label43(&ca_);
    CheckNextIs1Byte_1(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{p_left.object}, TNode<IntPtrT>{p_left.offset}, TNode<IntPtrT>{p_left.length}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb34_8}, &label43);
    ca_.Goto(&block36, phi_bb34_6, phi_bb34_8, phi_bb34_8);
    if (label43.is_used()) {
      ca_.Bind(&label43);
      ca_.Goto(&block37, phi_bb34_6, phi_bb34_8, phi_bb34_8);
    }
  }

  TNode<IntPtrT> phi_bb37_6;
  TNode<IntPtrT> phi_bb37_8;
  TNode<IntPtrT> phi_bb37_16;
  if (block37.is_used()) {
    ca_.Bind(&block37, &phi_bb37_6, &phi_bb37_8, &phi_bb37_16);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb36_6;
  TNode<IntPtrT> phi_bb36_8;
  TNode<IntPtrT> phi_bb36_16;
  if (block36.is_used()) {
    ca_.Bind(&block36, &phi_bb36_6, &phi_bb36_8, &phi_bb36_16);
    compiler::CodeAssemblerLabel label44(&ca_);
    CheckNextIs1Byte_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{p_right.object}, TNode<IntPtrT>{p_right.offset}, TNode<IntPtrT>{p_right.length}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb36_8}, &label44);
    ca_.Goto(&block38, phi_bb36_6, phi_bb36_8, phi_bb36_8);
    if (label44.is_used()) {
      ca_.Bind(&label44);
      ca_.Goto(&block39, phi_bb36_6, phi_bb36_8, phi_bb36_8);
    }
  }

  TNode<IntPtrT> phi_bb39_6;
  TNode<IntPtrT> phi_bb39_8;
  TNode<IntPtrT> phi_bb39_16;
  if (block39.is_used()) {
    ca_.Bind(&block39, &phi_bb39_6, &phi_bb39_8, &phi_bb39_16);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb38_6;
  TNode<IntPtrT> phi_bb38_8;
  TNode<IntPtrT> phi_bb38_16;
  TNode<BoolT> tmp45;
  if (block38.is_used()) {
    ca_.Bind(&block38, &phi_bb38_6, &phi_bb38_8, &phi_bb38_16);
    tmp45 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{tmp34}, TNode<Uint32T>{tmp38});
    ca_.Branch(tmp45, &block40, std::vector<compiler::Node*>{phi_bb38_6, phi_bb38_8}, &block41, std::vector<compiler::Node*>{phi_bb38_6, phi_bb38_8});
  }

  TNode<IntPtrT> phi_bb40_6;
  TNode<IntPtrT> phi_bb40_8;
  TNode<Number> tmp46;
  if (block40.is_used()) {
    ca_.Bind(&block40, &phi_bb40_6, &phi_bb40_8);
    tmp46 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    ca_.Goto(&block2, tmp46);
  }

  TNode<IntPtrT> phi_bb41_6;
  TNode<IntPtrT> phi_bb41_8;
  TNode<Number> tmp47;
  if (block41.is_used()) {
    ca_.Bind(&block41, &phi_bb41_6, &phi_bb41_8);
    tmp47 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    ca_.Goto(&block2, tmp47);
  }

  TNode<IntPtrT> phi_bb35_6;
  TNode<IntPtrT> phi_bb35_8;
  TNode<IntPtrT> tmp48;
  TNode<IntPtrT> tmp49;
  if (block35.is_used()) {
    ca_.Bind(&block35, &phi_bb35_6, &phi_bb35_8);
    tmp48 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp49 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb35_8}, TNode<IntPtrT>{tmp48});
    ca_.Goto(&block23, phi_bb35_6, tmp49);
  }

  TNode<IntPtrT> phi_bb22_6;
  TNode<IntPtrT> phi_bb22_8;
  TNode<BoolT> tmp50;
  if (block22.is_used()) {
    ca_.Bind(&block22, &phi_bb22_6, &phi_bb22_8);
    tmp50 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb22_8}, TNode<IntPtrT>{p_left.length});
    ca_.Branch(tmp50, &block42, std::vector<compiler::Node*>{phi_bb22_6, phi_bb22_8}, &block43, std::vector<compiler::Node*>{phi_bb22_6, phi_bb22_8});
  }

  TNode<IntPtrT> phi_bb42_6;
  TNode<IntPtrT> phi_bb42_8;
  TNode<IntPtrT> tmp51;
  TNode<IntPtrT> tmp52;
  TNode<Union<HeapObject, TaggedIndex>> tmp53;
  TNode<IntPtrT> tmp54;
  TNode<Uint16T> tmp55;
  TNode<Uint8T> tmp56;
  if (block42.is_used()) {
    ca_.Bind(&block42, &phi_bb42_6, &phi_bb42_8);
    tmp51 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{phi_bb42_8});
    tmp52 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_left.offset}, TNode<IntPtrT>{tmp51});
    std::tie(tmp53, tmp54) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_left.object}, TNode<IntPtrT>{tmp52}).Flatten();
    tmp55 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp53, tmp54});
    compiler::CodeAssemblerLabel label57(&ca_);
    tmp56 = IntlAsciiCollationWeightL1_1(state_, TNode<Uint16T>{tmp55}, &label57);
    ca_.Goto(&block46, phi_bb42_6, phi_bb42_8);
    if (label57.is_used()) {
      ca_.Bind(&label57);
      ca_.Goto(&block47, phi_bb42_6, phi_bb42_8);
    }
  }

  TNode<IntPtrT> phi_bb47_6;
  TNode<IntPtrT> phi_bb47_8;
  if (block47.is_used()) {
    ca_.Bind(&block47, &phi_bb47_6, &phi_bb47_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb46_6;
  TNode<IntPtrT> phi_bb46_8;
  TNode<Uint32T> tmp58;
  TNode<BoolT> tmp59;
  if (block46.is_used()) {
    ca_.Bind(&block46, &phi_bb46_6, &phi_bb46_8);
    tmp58 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp59 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp56}, TNode<Uint32T>{tmp58});
    ca_.Branch(tmp59, &block48, std::vector<compiler::Node*>{phi_bb46_6, phi_bb46_8}, &block49, std::vector<compiler::Node*>{phi_bb46_6, phi_bb46_8});
  }

  TNode<IntPtrT> phi_bb48_6;
  TNode<IntPtrT> phi_bb48_8;
  if (block48.is_used()) {
    ca_.Bind(&block48, &phi_bb48_6, &phi_bb48_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb49_6;
  TNode<IntPtrT> phi_bb49_8;
  TNode<Number> tmp60;
  if (block49.is_used()) {
    ca_.Bind(&block49, &phi_bb49_6, &phi_bb49_8);
    tmp60 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    ca_.Goto(&block2, tmp60);
  }

  TNode<IntPtrT> phi_bb43_6;
  TNode<IntPtrT> phi_bb43_8;
  TNode<BoolT> tmp61;
  if (block43.is_used()) {
    ca_.Bind(&block43, &phi_bb43_6, &phi_bb43_8);
    tmp61 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb43_8}, TNode<IntPtrT>{p_right.length});
    ca_.Branch(tmp61, &block50, std::vector<compiler::Node*>{phi_bb43_6, phi_bb43_8}, &block51, std::vector<compiler::Node*>{phi_bb43_6, phi_bb43_8});
  }

  TNode<IntPtrT> phi_bb50_6;
  TNode<IntPtrT> phi_bb50_8;
  TNode<IntPtrT> tmp62;
  TNode<IntPtrT> tmp63;
  TNode<Union<HeapObject, TaggedIndex>> tmp64;
  TNode<IntPtrT> tmp65;
  TNode<Uint8T> tmp66;
  TNode<Uint8T> tmp67;
  if (block50.is_used()) {
    ca_.Bind(&block50, &phi_bb50_6, &phi_bb50_8);
    tmp62 = TimesSizeOf_char8_0(state_, TNode<IntPtrT>{phi_bb50_8});
    tmp63 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_right.offset}, TNode<IntPtrT>{tmp62});
    std::tie(tmp64, tmp65) = NewReference_char8_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_right.object}, TNode<IntPtrT>{tmp63}).Flatten();
    tmp66 = CodeStubAssembler(state_).LoadReference<Uint8T>(CodeStubAssembler::Reference{tmp64, tmp65});
    compiler::CodeAssemblerLabel label68(&ca_);
    tmp67 = IntlAsciiCollationWeightL1_0(state_, TNode<Uint8T>{tmp66}, &label68);
    ca_.Goto(&block53, phi_bb50_6, phi_bb50_8);
    if (label68.is_used()) {
      ca_.Bind(&label68);
      ca_.Goto(&block54, phi_bb50_6, phi_bb50_8);
    }
  }

  TNode<IntPtrT> phi_bb54_6;
  TNode<IntPtrT> phi_bb54_8;
  if (block54.is_used()) {
    ca_.Bind(&block54, &phi_bb54_6, &phi_bb54_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb53_6;
  TNode<IntPtrT> phi_bb53_8;
  TNode<Uint32T> tmp69;
  TNode<BoolT> tmp70;
  if (block53.is_used()) {
    ca_.Bind(&block53, &phi_bb53_6, &phi_bb53_8);
    tmp69 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp70 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp67}, TNode<Uint32T>{tmp69});
    ca_.Branch(tmp70, &block55, std::vector<compiler::Node*>{phi_bb53_6, phi_bb53_8}, &block56, std::vector<compiler::Node*>{phi_bb53_6, phi_bb53_8});
  }

  TNode<IntPtrT> phi_bb55_6;
  TNode<IntPtrT> phi_bb55_8;
  if (block55.is_used()) {
    ca_.Bind(&block55, &phi_bb55_6, &phi_bb55_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb56_6;
  TNode<IntPtrT> phi_bb56_8;
  TNode<Number> tmp71;
  if (block56.is_used()) {
    ca_.Bind(&block56, &phi_bb56_6, &phi_bb56_8);
    tmp71 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    ca_.Goto(&block2, tmp71);
  }

  TNode<IntPtrT> phi_bb51_6;
  TNode<IntPtrT> phi_bb51_8;
  if (block51.is_used()) {
    ca_.Bind(&block51, &phi_bb51_6, &phi_bb51_8);
    ca_.Goto(&block59, phi_bb51_6, phi_bb51_6);
  }

  TNode<IntPtrT> phi_bb59_6;
  TNode<IntPtrT> phi_bb59_8;
  TNode<BoolT> tmp72;
  if (block59.is_used()) {
    ca_.Bind(&block59, &phi_bb59_6, &phi_bb59_8);
    tmp72 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb59_8}, TNode<IntPtrT>{phi_bb5_7});
    ca_.Branch(tmp72, &block57, std::vector<compiler::Node*>{phi_bb59_6, phi_bb59_8}, &block58, std::vector<compiler::Node*>{phi_bb59_6, phi_bb59_8});
  }

  TNode<IntPtrT> phi_bb57_6;
  TNode<IntPtrT> phi_bb57_8;
  TNode<IntPtrT> tmp73;
  TNode<IntPtrT> tmp74;
  TNode<Union<HeapObject, TaggedIndex>> tmp75;
  TNode<IntPtrT> tmp76;
  TNode<Uint16T> tmp77;
  TNode<IntPtrT> tmp78;
  TNode<IntPtrT> tmp79;
  TNode<Union<HeapObject, TaggedIndex>> tmp80;
  TNode<IntPtrT> tmp81;
  TNode<Uint8T> tmp82;
  TNode<Uint8T> tmp83;
  if (block57.is_used()) {
    ca_.Bind(&block57, &phi_bb57_6, &phi_bb57_8);
    tmp73 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{phi_bb57_8});
    tmp74 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_left.offset}, TNode<IntPtrT>{tmp73});
    std::tie(tmp75, tmp76) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_left.object}, TNode<IntPtrT>{tmp74}).Flatten();
    tmp77 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp75, tmp76});
    tmp78 = TimesSizeOf_char8_0(state_, TNode<IntPtrT>{phi_bb57_8});
    tmp79 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_right.offset}, TNode<IntPtrT>{tmp78});
    std::tie(tmp80, tmp81) = NewReference_char8_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_right.object}, TNode<IntPtrT>{tmp79}).Flatten();
    tmp82 = CodeStubAssembler(state_).LoadReference<Uint8T>(CodeStubAssembler::Reference{tmp80, tmp81});
    compiler::CodeAssemblerLabel label84(&ca_);
    tmp83 = IntlAsciiCollationWeightL3_1(state_, TNode<Uint16T>{tmp77}, &label84);
    ca_.Goto(&block64, phi_bb57_6, phi_bb57_8);
    if (label84.is_used()) {
      ca_.Bind(&label84);
      ca_.Goto(&block65, phi_bb57_6, phi_bb57_8);
    }
  }

  TNode<IntPtrT> phi_bb65_6;
  TNode<IntPtrT> phi_bb65_8;
  if (block65.is_used()) {
    ca_.Bind(&block65, &phi_bb65_6, &phi_bb65_8);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/intl-objects.tq:113:68");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb64_6;
  TNode<IntPtrT> phi_bb64_8;
  TNode<Uint8T> tmp85;
  if (block64.is_used()) {
    ca_.Bind(&block64, &phi_bb64_6, &phi_bb64_8);
    compiler::CodeAssemblerLabel label86(&ca_);
    tmp85 = IntlAsciiCollationWeightL3_0(state_, TNode<Uint8T>{tmp82}, &label86);
    ca_.Goto(&block68, phi_bb64_6, phi_bb64_8);
    if (label86.is_used()) {
      ca_.Bind(&label86);
      ca_.Goto(&block69, phi_bb64_6, phi_bb64_8);
    }
  }

  TNode<IntPtrT> phi_bb69_6;
  TNode<IntPtrT> phi_bb69_8;
  if (block69.is_used()) {
    ca_.Bind(&block69, &phi_bb69_6, &phi_bb69_8);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/intl-objects.tq:114:69");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb68_6;
  TNode<IntPtrT> phi_bb68_8;
  TNode<Uint32T> tmp87;
  TNode<BoolT> tmp88;
  if (block68.is_used()) {
    ca_.Bind(&block68, &phi_bb68_6, &phi_bb68_8);
    tmp87 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp88 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp83}, TNode<Uint32T>{tmp87});
    ca_.Branch(tmp88, &block72, std::vector<compiler::Node*>{phi_bb68_6, phi_bb68_8}, &block73, std::vector<compiler::Node*>{phi_bb68_6, phi_bb68_8});
  }

  TNode<IntPtrT> phi_bb72_6;
  TNode<IntPtrT> phi_bb72_8;
  TNode<Uint32T> tmp89;
  TNode<BoolT> tmp90;
  if (block72.is_used()) {
    ca_.Bind(&block72, &phi_bb72_6, &phi_bb72_8);
    tmp89 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp90 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp85}, TNode<Uint32T>{tmp89});
    ca_.Goto(&block74, phi_bb72_6, phi_bb72_8, tmp90);
  }

  TNode<IntPtrT> phi_bb73_6;
  TNode<IntPtrT> phi_bb73_8;
  TNode<BoolT> tmp91;
  if (block73.is_used()) {
    ca_.Bind(&block73, &phi_bb73_6, &phi_bb73_8);
    tmp91 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block74, phi_bb73_6, phi_bb73_8, tmp91);
  }

  TNode<IntPtrT> phi_bb74_6;
  TNode<IntPtrT> phi_bb74_8;
  TNode<BoolT> phi_bb74_14;
  if (block74.is_used()) {
    ca_.Bind(&block74, &phi_bb74_6, &phi_bb74_8, &phi_bb74_14);
    ca_.Branch(phi_bb74_14, &block70, std::vector<compiler::Node*>{phi_bb74_6, phi_bb74_8}, &block71, std::vector<compiler::Node*>{phi_bb74_6, phi_bb74_8});
  }

  TNode<IntPtrT> phi_bb71_6;
  TNode<IntPtrT> phi_bb71_8;
  if (block71.is_used()) {
    ca_.Bind(&block71, &phi_bb71_6, &phi_bb71_8);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/objects/intl-objects.tq", 115});
      CodeStubAssembler(state_).FailAssert("Torque assert 'leftWeight != 0 && rightWeight != 0' failed", pos_stack);
    }
  }

  TNode<IntPtrT> phi_bb70_6;
  TNode<IntPtrT> phi_bb70_8;
  TNode<BoolT> tmp92;
  if (block70.is_used()) {
    ca_.Bind(&block70, &phi_bb70_6, &phi_bb70_8);
    tmp92 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp83}, TNode<Uint32T>{tmp85});
    ca_.Branch(tmp92, &block75, std::vector<compiler::Node*>{phi_bb70_6, phi_bb70_8}, &block76, std::vector<compiler::Node*>{phi_bb70_6, phi_bb70_8});
  }

  TNode<IntPtrT> phi_bb75_6;
  TNode<IntPtrT> phi_bb75_8;
  TNode<BoolT> tmp93;
  if (block75.is_used()) {
    ca_.Bind(&block75, &phi_bb75_6, &phi_bb75_8);
    tmp93 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{tmp83}, TNode<Uint32T>{tmp85});
    ca_.Branch(tmp93, &block77, std::vector<compiler::Node*>{phi_bb75_6, phi_bb75_8}, &block78, std::vector<compiler::Node*>{phi_bb75_6, phi_bb75_8});
  }

  TNode<IntPtrT> phi_bb77_6;
  TNode<IntPtrT> phi_bb77_8;
  TNode<Number> tmp94;
  if (block77.is_used()) {
    ca_.Bind(&block77, &phi_bb77_6, &phi_bb77_8);
    tmp94 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    ca_.Goto(&block2, tmp94);
  }

  TNode<IntPtrT> phi_bb78_6;
  TNode<IntPtrT> phi_bb78_8;
  TNode<Number> tmp95;
  if (block78.is_used()) {
    ca_.Bind(&block78, &phi_bb78_6, &phi_bb78_8);
    tmp95 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    ca_.Goto(&block2, tmp95);
  }

  TNode<IntPtrT> phi_bb76_6;
  TNode<IntPtrT> phi_bb76_8;
  TNode<IntPtrT> tmp96;
  TNode<IntPtrT> tmp97;
  if (block76.is_used()) {
    ca_.Bind(&block76, &phi_bb76_6, &phi_bb76_8);
    tmp96 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp97 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb76_8}, TNode<IntPtrT>{tmp96});
    ca_.Goto(&block59, phi_bb76_6, tmp97);
  }

  TNode<IntPtrT> phi_bb58_6;
  TNode<IntPtrT> phi_bb58_8;
  TNode<Number> tmp98;
  if (block58.is_used()) {
    ca_.Bind(&block58, &phi_bb58_6, &phi_bb58_8);
    tmp98 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block2, tmp98);
  }

  TNode<Number> phi_bb2_6;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_6);
    ca_.Goto(&block79, phi_bb2_6);
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    ca_.Goto(label_Bailout);
  }

  TNode<Number> phi_bb79_6;
    ca_.Bind(&block79, &phi_bb79_6);
  return TNode<Number>{phi_bb79_6};
}

// https://crsrc.org/c/v8/src/objects/intl-objects.tq?l=181&c=11
TNode<Number> LocaleCompareFastPath_char16_char16_0(compiler::CodeAssemblerState* state_, TorqueStructSlice_char16_ConstReference_char16_0 p_left, TorqueStructSlice_char16_ConstReference_char16_0 p_right, compiler::CodeAssemblerLabel* label_Bailout) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block13(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block18(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, BoolT> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block17(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block21(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block26(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block30(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block33(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block34(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT> block37(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT> block36(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT> block39(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, IntPtrT> block38(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block40(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block41(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block35(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block22(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block42(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block47(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block46(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block48(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block49(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block43(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block50(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block54(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block53(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block55(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block56(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block51(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block59(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block57(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block65(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block64(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block69(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block68(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block72(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block73(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT, BoolT> block74(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block71(&ca_, compiler::CodeAssemblerLabel::kDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block70(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block75(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block77(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block78(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block76(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block58(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block79(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<BoolT> tmp1;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{p_left.length}, TNode<IntPtrT>{p_right.length});
    ca_.Branch(tmp1, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  if (block3.is_used()) {
    ca_.Bind(&block3);
    ca_.Goto(&block5, p_left.length);
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    ca_.Goto(&block5, p_right.length);
  }

  TNode<IntPtrT> phi_bb5_7;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_7);
    ca_.Goto(&block9, tmp0);
  }

  TNode<IntPtrT> phi_bb9_6;
  TNode<BoolT> tmp2;
  if (block9.is_used()) {
    ca_.Bind(&block9, &phi_bb9_6);
    tmp2 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb9_6}, TNode<IntPtrT>{phi_bb5_7});
    ca_.Branch(tmp2, &block7, std::vector<compiler::Node*>{phi_bb9_6}, &block8, std::vector<compiler::Node*>{phi_bb9_6});
  }

  TNode<IntPtrT> phi_bb7_6;
  TNode<IntPtrT> tmp3;
  TNode<IntPtrT> tmp4;
  TNode<Union<HeapObject, TaggedIndex>> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<Uint16T> tmp7;
  TNode<IntPtrT> tmp8;
  TNode<IntPtrT> tmp9;
  TNode<Union<HeapObject, TaggedIndex>> tmp10;
  TNode<IntPtrT> tmp11;
  TNode<Uint16T> tmp12;
  TNode<BoolT> tmp13;
  if (block7.is_used()) {
    ca_.Bind(&block7, &phi_bb7_6);
    tmp3 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{phi_bb7_6});
    tmp4 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_left.offset}, TNode<IntPtrT>{tmp3});
    std::tie(tmp5, tmp6) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_left.object}, TNode<IntPtrT>{tmp4}).Flatten();
    tmp7 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp5, tmp6});
    tmp8 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{phi_bb7_6});
    tmp9 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_right.offset}, TNode<IntPtrT>{tmp8});
    std::tie(tmp10, tmp11) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_right.object}, TNode<IntPtrT>{tmp9}).Flatten();
    tmp12 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp10, tmp11});
    tmp13 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp7}, TNode<Uint32T>{tmp12});
    ca_.Branch(tmp13, &block12, std::vector<compiler::Node*>{phi_bb7_6}, &block13, std::vector<compiler::Node*>{phi_bb7_6});
  }

  TNode<IntPtrT> phi_bb12_6;
  if (block12.is_used()) {
    ca_.Bind(&block12, &phi_bb12_6);
    ca_.Goto(&block8, phi_bb12_6);
  }

  TNode<IntPtrT> phi_bb13_6;
  TNode<Uint32T> tmp14;
  TNode<Uint32T> tmp15;
  TNode<BoolT> tmp16;
  if (block13.is_used()) {
    ca_.Bind(&block13, &phi_bb13_6);
    tmp14 = Convert_uint32_char16_0(state_, TNode<Uint16T>{tmp7});
    tmp15 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x80ull));
    tmp16 = CodeStubAssembler(state_).Uint32GreaterThanOrEqual(TNode<Uint32T>{tmp14}, TNode<Uint32T>{tmp15});
    ca_.Branch(tmp16, &block14, std::vector<compiler::Node*>{phi_bb13_6}, &block15, std::vector<compiler::Node*>{phi_bb13_6});
  }

  TNode<IntPtrT> phi_bb14_6;
  if (block14.is_used()) {
    ca_.Bind(&block14, &phi_bb14_6);
    ca_.Goto(&block8, phi_bb14_6);
  }

  TNode<IntPtrT> phi_bb15_6;
  TNode<IntPtrT> tmp17;
  TNode<IntPtrT> tmp18;
  if (block15.is_used()) {
    ca_.Bind(&block15, &phi_bb15_6);
    tmp17 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp18 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb15_6}, TNode<IntPtrT>{tmp17});
    ca_.Goto(&block9, tmp18);
  }

  TNode<IntPtrT> phi_bb8_6;
  TNode<BoolT> tmp19;
  if (block8.is_used()) {
    ca_.Bind(&block8, &phi_bb8_6);
    tmp19 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb8_6}, TNode<IntPtrT>{p_left.length});
    ca_.Branch(tmp19, &block18, std::vector<compiler::Node*>{phi_bb8_6}, &block19, std::vector<compiler::Node*>{phi_bb8_6});
  }

  TNode<IntPtrT> phi_bb18_6;
  TNode<BoolT> tmp20;
  if (block18.is_used()) {
    ca_.Bind(&block18, &phi_bb18_6);
    tmp20 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb18_6}, TNode<IntPtrT>{p_right.length});
    ca_.Goto(&block20, phi_bb18_6, tmp20);
  }

  TNode<IntPtrT> phi_bb19_6;
  TNode<BoolT> tmp21;
  if (block19.is_used()) {
    ca_.Bind(&block19, &phi_bb19_6);
    tmp21 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block20, phi_bb19_6, tmp21);
  }

  TNode<IntPtrT> phi_bb20_6;
  TNode<BoolT> phi_bb20_9;
  if (block20.is_used()) {
    ca_.Bind(&block20, &phi_bb20_6, &phi_bb20_9);
    ca_.Branch(phi_bb20_9, &block16, std::vector<compiler::Node*>{phi_bb20_6}, &block17, std::vector<compiler::Node*>{phi_bb20_6});
  }

  TNode<IntPtrT> phi_bb16_6;
  TNode<Number> tmp22;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_6);
    tmp22 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block2, tmp22);
  }

  TNode<IntPtrT> phi_bb17_6;
  if (block17.is_used()) {
    ca_.Bind(&block17, &phi_bb17_6);
    ca_.Goto(&block23, phi_bb17_6, phi_bb17_6);
  }

  TNode<IntPtrT> phi_bb23_6;
  TNode<IntPtrT> phi_bb23_8;
  TNode<BoolT> tmp23;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_6, &phi_bb23_8);
    tmp23 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb23_8}, TNode<IntPtrT>{phi_bb5_7});
    ca_.Branch(tmp23, &block21, std::vector<compiler::Node*>{phi_bb23_6, phi_bb23_8}, &block22, std::vector<compiler::Node*>{phi_bb23_6, phi_bb23_8});
  }

  TNode<IntPtrT> phi_bb21_6;
  TNode<IntPtrT> phi_bb21_8;
  TNode<IntPtrT> tmp24;
  TNode<IntPtrT> tmp25;
  TNode<Union<HeapObject, TaggedIndex>> tmp26;
  TNode<IntPtrT> tmp27;
  TNode<Uint16T> tmp28;
  TNode<IntPtrT> tmp29;
  TNode<IntPtrT> tmp30;
  TNode<Union<HeapObject, TaggedIndex>> tmp31;
  TNode<IntPtrT> tmp32;
  TNode<Uint16T> tmp33;
  TNode<Uint8T> tmp34;
  if (block21.is_used()) {
    ca_.Bind(&block21, &phi_bb21_6, &phi_bb21_8);
    tmp24 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{phi_bb21_8});
    tmp25 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_left.offset}, TNode<IntPtrT>{tmp24});
    std::tie(tmp26, tmp27) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_left.object}, TNode<IntPtrT>{tmp25}).Flatten();
    tmp28 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp26, tmp27});
    tmp29 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{phi_bb21_8});
    tmp30 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_right.offset}, TNode<IntPtrT>{tmp29});
    std::tie(tmp31, tmp32) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_right.object}, TNode<IntPtrT>{tmp30}).Flatten();
    tmp33 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp31, tmp32});
    compiler::CodeAssemblerLabel label35(&ca_);
    tmp34 = IntlAsciiCollationWeightL1_1(state_, TNode<Uint16T>{tmp28}, &label35);
    ca_.Goto(&block26, phi_bb21_6, phi_bb21_8);
    if (label35.is_used()) {
      ca_.Bind(&label35);
      ca_.Goto(&block27, phi_bb21_6, phi_bb21_8);
    }
  }

  TNode<IntPtrT> phi_bb27_6;
  TNode<IntPtrT> phi_bb27_8;
  if (block27.is_used()) {
    ca_.Bind(&block27, &phi_bb27_6, &phi_bb27_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb26_6;
  TNode<IntPtrT> phi_bb26_8;
  TNode<Uint32T> tmp36;
  TNode<BoolT> tmp37;
  if (block26.is_used()) {
    ca_.Bind(&block26, &phi_bb26_6, &phi_bb26_8);
    tmp36 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp37 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp34}, TNode<Uint32T>{tmp36});
    ca_.Branch(tmp37, &block28, std::vector<compiler::Node*>{phi_bb26_6, phi_bb26_8}, &block29, std::vector<compiler::Node*>{phi_bb26_6, phi_bb26_8});
  }

  TNode<IntPtrT> phi_bb28_6;
  TNode<IntPtrT> phi_bb28_8;
  if (block28.is_used()) {
    ca_.Bind(&block28, &phi_bb28_6, &phi_bb28_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb29_6;
  TNode<IntPtrT> phi_bb29_8;
  TNode<Uint8T> tmp38;
  if (block29.is_used()) {
    ca_.Bind(&block29, &phi_bb29_6, &phi_bb29_8);
    compiler::CodeAssemblerLabel label39(&ca_);
    tmp38 = IntlAsciiCollationWeightL1_1(state_, TNode<Uint16T>{tmp33}, &label39);
    ca_.Goto(&block30, phi_bb29_6, phi_bb29_8);
    if (label39.is_used()) {
      ca_.Bind(&label39);
      ca_.Goto(&block31, phi_bb29_6, phi_bb29_8);
    }
  }

  TNode<IntPtrT> phi_bb31_6;
  TNode<IntPtrT> phi_bb31_8;
  if (block31.is_used()) {
    ca_.Bind(&block31, &phi_bb31_6, &phi_bb31_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb30_6;
  TNode<IntPtrT> phi_bb30_8;
  TNode<Uint32T> tmp40;
  TNode<BoolT> tmp41;
  if (block30.is_used()) {
    ca_.Bind(&block30, &phi_bb30_6, &phi_bb30_8);
    tmp40 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp41 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp38}, TNode<Uint32T>{tmp40});
    ca_.Branch(tmp41, &block32, std::vector<compiler::Node*>{phi_bb30_6, phi_bb30_8}, &block33, std::vector<compiler::Node*>{phi_bb30_6, phi_bb30_8});
  }

  TNode<IntPtrT> phi_bb32_6;
  TNode<IntPtrT> phi_bb32_8;
  if (block32.is_used()) {
    ca_.Bind(&block32, &phi_bb32_6, &phi_bb32_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb33_6;
  TNode<IntPtrT> phi_bb33_8;
  TNode<BoolT> tmp42;
  if (block33.is_used()) {
    ca_.Bind(&block33, &phi_bb33_6, &phi_bb33_8);
    tmp42 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp34}, TNode<Uint32T>{tmp38});
    ca_.Branch(tmp42, &block34, std::vector<compiler::Node*>{phi_bb33_6, phi_bb33_8}, &block35, std::vector<compiler::Node*>{phi_bb33_6, phi_bb33_8});
  }

  TNode<IntPtrT> phi_bb34_6;
  TNode<IntPtrT> phi_bb34_8;
  if (block34.is_used()) {
    ca_.Bind(&block34, &phi_bb34_6, &phi_bb34_8);
    compiler::CodeAssemblerLabel label43(&ca_);
    CheckNextIs1Byte_1(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{p_left.object}, TNode<IntPtrT>{p_left.offset}, TNode<IntPtrT>{p_left.length}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb34_8}, &label43);
    ca_.Goto(&block36, phi_bb34_6, phi_bb34_8, phi_bb34_8);
    if (label43.is_used()) {
      ca_.Bind(&label43);
      ca_.Goto(&block37, phi_bb34_6, phi_bb34_8, phi_bb34_8);
    }
  }

  TNode<IntPtrT> phi_bb37_6;
  TNode<IntPtrT> phi_bb37_8;
  TNode<IntPtrT> phi_bb37_16;
  if (block37.is_used()) {
    ca_.Bind(&block37, &phi_bb37_6, &phi_bb37_8, &phi_bb37_16);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb36_6;
  TNode<IntPtrT> phi_bb36_8;
  TNode<IntPtrT> phi_bb36_16;
  if (block36.is_used()) {
    ca_.Bind(&block36, &phi_bb36_6, &phi_bb36_8, &phi_bb36_16);
    compiler::CodeAssemblerLabel label44(&ca_);
    CheckNextIs1Byte_1(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{p_right.object}, TNode<IntPtrT>{p_right.offset}, TNode<IntPtrT>{p_right.length}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb36_8}, &label44);
    ca_.Goto(&block38, phi_bb36_6, phi_bb36_8, phi_bb36_8);
    if (label44.is_used()) {
      ca_.Bind(&label44);
      ca_.Goto(&block39, phi_bb36_6, phi_bb36_8, phi_bb36_8);
    }
  }

  TNode<IntPtrT> phi_bb39_6;
  TNode<IntPtrT> phi_bb39_8;
  TNode<IntPtrT> phi_bb39_16;
  if (block39.is_used()) {
    ca_.Bind(&block39, &phi_bb39_6, &phi_bb39_8, &phi_bb39_16);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb38_6;
  TNode<IntPtrT> phi_bb38_8;
  TNode<IntPtrT> phi_bb38_16;
  TNode<BoolT> tmp45;
  if (block38.is_used()) {
    ca_.Bind(&block38, &phi_bb38_6, &phi_bb38_8, &phi_bb38_16);
    tmp45 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{tmp34}, TNode<Uint32T>{tmp38});
    ca_.Branch(tmp45, &block40, std::vector<compiler::Node*>{phi_bb38_6, phi_bb38_8}, &block41, std::vector<compiler::Node*>{phi_bb38_6, phi_bb38_8});
  }

  TNode<IntPtrT> phi_bb40_6;
  TNode<IntPtrT> phi_bb40_8;
  TNode<Number> tmp46;
  if (block40.is_used()) {
    ca_.Bind(&block40, &phi_bb40_6, &phi_bb40_8);
    tmp46 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    ca_.Goto(&block2, tmp46);
  }

  TNode<IntPtrT> phi_bb41_6;
  TNode<IntPtrT> phi_bb41_8;
  TNode<Number> tmp47;
  if (block41.is_used()) {
    ca_.Bind(&block41, &phi_bb41_6, &phi_bb41_8);
    tmp47 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    ca_.Goto(&block2, tmp47);
  }

  TNode<IntPtrT> phi_bb35_6;
  TNode<IntPtrT> phi_bb35_8;
  TNode<IntPtrT> tmp48;
  TNode<IntPtrT> tmp49;
  if (block35.is_used()) {
    ca_.Bind(&block35, &phi_bb35_6, &phi_bb35_8);
    tmp48 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp49 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb35_8}, TNode<IntPtrT>{tmp48});
    ca_.Goto(&block23, phi_bb35_6, tmp49);
  }

  TNode<IntPtrT> phi_bb22_6;
  TNode<IntPtrT> phi_bb22_8;
  TNode<BoolT> tmp50;
  if (block22.is_used()) {
    ca_.Bind(&block22, &phi_bb22_6, &phi_bb22_8);
    tmp50 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb22_8}, TNode<IntPtrT>{p_left.length});
    ca_.Branch(tmp50, &block42, std::vector<compiler::Node*>{phi_bb22_6, phi_bb22_8}, &block43, std::vector<compiler::Node*>{phi_bb22_6, phi_bb22_8});
  }

  TNode<IntPtrT> phi_bb42_6;
  TNode<IntPtrT> phi_bb42_8;
  TNode<IntPtrT> tmp51;
  TNode<IntPtrT> tmp52;
  TNode<Union<HeapObject, TaggedIndex>> tmp53;
  TNode<IntPtrT> tmp54;
  TNode<Uint16T> tmp55;
  TNode<Uint8T> tmp56;
  if (block42.is_used()) {
    ca_.Bind(&block42, &phi_bb42_6, &phi_bb42_8);
    tmp51 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{phi_bb42_8});
    tmp52 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_left.offset}, TNode<IntPtrT>{tmp51});
    std::tie(tmp53, tmp54) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_left.object}, TNode<IntPtrT>{tmp52}).Flatten();
    tmp55 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp53, tmp54});
    compiler::CodeAssemblerLabel label57(&ca_);
    tmp56 = IntlAsciiCollationWeightL1_1(state_, TNode<Uint16T>{tmp55}, &label57);
    ca_.Goto(&block46, phi_bb42_6, phi_bb42_8);
    if (label57.is_used()) {
      ca_.Bind(&label57);
      ca_.Goto(&block47, phi_bb42_6, phi_bb42_8);
    }
  }

  TNode<IntPtrT> phi_bb47_6;
  TNode<IntPtrT> phi_bb47_8;
  if (block47.is_used()) {
    ca_.Bind(&block47, &phi_bb47_6, &phi_bb47_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb46_6;
  TNode<IntPtrT> phi_bb46_8;
  TNode<Uint32T> tmp58;
  TNode<BoolT> tmp59;
  if (block46.is_used()) {
    ca_.Bind(&block46, &phi_bb46_6, &phi_bb46_8);
    tmp58 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp59 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp56}, TNode<Uint32T>{tmp58});
    ca_.Branch(tmp59, &block48, std::vector<compiler::Node*>{phi_bb46_6, phi_bb46_8}, &block49, std::vector<compiler::Node*>{phi_bb46_6, phi_bb46_8});
  }

  TNode<IntPtrT> phi_bb48_6;
  TNode<IntPtrT> phi_bb48_8;
  if (block48.is_used()) {
    ca_.Bind(&block48, &phi_bb48_6, &phi_bb48_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb49_6;
  TNode<IntPtrT> phi_bb49_8;
  TNode<Number> tmp60;
  if (block49.is_used()) {
    ca_.Bind(&block49, &phi_bb49_6, &phi_bb49_8);
    tmp60 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    ca_.Goto(&block2, tmp60);
  }

  TNode<IntPtrT> phi_bb43_6;
  TNode<IntPtrT> phi_bb43_8;
  TNode<BoolT> tmp61;
  if (block43.is_used()) {
    ca_.Bind(&block43, &phi_bb43_6, &phi_bb43_8);
    tmp61 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb43_8}, TNode<IntPtrT>{p_right.length});
    ca_.Branch(tmp61, &block50, std::vector<compiler::Node*>{phi_bb43_6, phi_bb43_8}, &block51, std::vector<compiler::Node*>{phi_bb43_6, phi_bb43_8});
  }

  TNode<IntPtrT> phi_bb50_6;
  TNode<IntPtrT> phi_bb50_8;
  TNode<IntPtrT> tmp62;
  TNode<IntPtrT> tmp63;
  TNode<Union<HeapObject, TaggedIndex>> tmp64;
  TNode<IntPtrT> tmp65;
  TNode<Uint16T> tmp66;
  TNode<Uint8T> tmp67;
  if (block50.is_used()) {
    ca_.Bind(&block50, &phi_bb50_6, &phi_bb50_8);
    tmp62 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{phi_bb50_8});
    tmp63 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_right.offset}, TNode<IntPtrT>{tmp62});
    std::tie(tmp64, tmp65) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_right.object}, TNode<IntPtrT>{tmp63}).Flatten();
    tmp66 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp64, tmp65});
    compiler::CodeAssemblerLabel label68(&ca_);
    tmp67 = IntlAsciiCollationWeightL1_1(state_, TNode<Uint16T>{tmp66}, &label68);
    ca_.Goto(&block53, phi_bb50_6, phi_bb50_8);
    if (label68.is_used()) {
      ca_.Bind(&label68);
      ca_.Goto(&block54, phi_bb50_6, phi_bb50_8);
    }
  }

  TNode<IntPtrT> phi_bb54_6;
  TNode<IntPtrT> phi_bb54_8;
  if (block54.is_used()) {
    ca_.Bind(&block54, &phi_bb54_6, &phi_bb54_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb53_6;
  TNode<IntPtrT> phi_bb53_8;
  TNode<Uint32T> tmp69;
  TNode<BoolT> tmp70;
  if (block53.is_used()) {
    ca_.Bind(&block53, &phi_bb53_6, &phi_bb53_8);
    tmp69 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp70 = CodeStubAssembler(state_).Word32Equal(TNode<Uint32T>{tmp67}, TNode<Uint32T>{tmp69});
    ca_.Branch(tmp70, &block55, std::vector<compiler::Node*>{phi_bb53_6, phi_bb53_8}, &block56, std::vector<compiler::Node*>{phi_bb53_6, phi_bb53_8});
  }

  TNode<IntPtrT> phi_bb55_6;
  TNode<IntPtrT> phi_bb55_8;
  if (block55.is_used()) {
    ca_.Bind(&block55, &phi_bb55_6, &phi_bb55_8);
    ca_.Goto(&block1);
  }

  TNode<IntPtrT> phi_bb56_6;
  TNode<IntPtrT> phi_bb56_8;
  TNode<Number> tmp71;
  if (block56.is_used()) {
    ca_.Bind(&block56, &phi_bb56_6, &phi_bb56_8);
    tmp71 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    ca_.Goto(&block2, tmp71);
  }

  TNode<IntPtrT> phi_bb51_6;
  TNode<IntPtrT> phi_bb51_8;
  if (block51.is_used()) {
    ca_.Bind(&block51, &phi_bb51_6, &phi_bb51_8);
    ca_.Goto(&block59, phi_bb51_6, phi_bb51_6);
  }

  TNode<IntPtrT> phi_bb59_6;
  TNode<IntPtrT> phi_bb59_8;
  TNode<BoolT> tmp72;
  if (block59.is_used()) {
    ca_.Bind(&block59, &phi_bb59_6, &phi_bb59_8);
    tmp72 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{phi_bb59_8}, TNode<IntPtrT>{phi_bb5_7});
    ca_.Branch(tmp72, &block57, std::vector<compiler::Node*>{phi_bb59_6, phi_bb59_8}, &block58, std::vector<compiler::Node*>{phi_bb59_6, phi_bb59_8});
  }

  TNode<IntPtrT> phi_bb57_6;
  TNode<IntPtrT> phi_bb57_8;
  TNode<IntPtrT> tmp73;
  TNode<IntPtrT> tmp74;
  TNode<Union<HeapObject, TaggedIndex>> tmp75;
  TNode<IntPtrT> tmp76;
  TNode<Uint16T> tmp77;
  TNode<IntPtrT> tmp78;
  TNode<IntPtrT> tmp79;
  TNode<Union<HeapObject, TaggedIndex>> tmp80;
  TNode<IntPtrT> tmp81;
  TNode<Uint16T> tmp82;
  TNode<Uint8T> tmp83;
  if (block57.is_used()) {
    ca_.Bind(&block57, &phi_bb57_6, &phi_bb57_8);
    tmp73 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{phi_bb57_8});
    tmp74 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_left.offset}, TNode<IntPtrT>{tmp73});
    std::tie(tmp75, tmp76) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_left.object}, TNode<IntPtrT>{tmp74}).Flatten();
    tmp77 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp75, tmp76});
    tmp78 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{phi_bb57_8});
    tmp79 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_right.offset}, TNode<IntPtrT>{tmp78});
    std::tie(tmp80, tmp81) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_right.object}, TNode<IntPtrT>{tmp79}).Flatten();
    tmp82 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp80, tmp81});
    compiler::CodeAssemblerLabel label84(&ca_);
    tmp83 = IntlAsciiCollationWeightL3_1(state_, TNode<Uint16T>{tmp77}, &label84);
    ca_.Goto(&block64, phi_bb57_6, phi_bb57_8);
    if (label84.is_used()) {
      ca_.Bind(&label84);
      ca_.Goto(&block65, phi_bb57_6, phi_bb57_8);
    }
  }

  TNode<IntPtrT> phi_bb65_6;
  TNode<IntPtrT> phi_bb65_8;
  if (block65.is_used()) {
    ca_.Bind(&block65, &phi_bb65_6, &phi_bb65_8);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/intl-objects.tq:113:68");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb64_6;
  TNode<IntPtrT> phi_bb64_8;
  TNode<Uint8T> tmp85;
  if (block64.is_used()) {
    ca_.Bind(&block64, &phi_bb64_6, &phi_bb64_8);
    compiler::CodeAssemblerLabel label86(&ca_);
    tmp85 = IntlAsciiCollationWeightL3_1(state_, TNode<Uint16T>{tmp82}, &label86);
    ca_.Goto(&block68, phi_bb64_6, phi_bb64_8);
    if (label86.is_used()) {
      ca_.Bind(&label86);
      ca_.Goto(&block69, phi_bb64_6, phi_bb64_8);
    }
  }

  TNode<IntPtrT> phi_bb69_6;
  TNode<IntPtrT> phi_bb69_8;
  if (block69.is_used()) {
    ca_.Bind(&block69, &phi_bb69_6, &phi_bb69_8);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/intl-objects.tq:114:69");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb68_6;
  TNode<IntPtrT> phi_bb68_8;
  TNode<Uint32T> tmp87;
  TNode<BoolT> tmp88;
  if (block68.is_used()) {
    ca_.Bind(&block68, &phi_bb68_6, &phi_bb68_8);
    tmp87 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp88 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp83}, TNode<Uint32T>{tmp87});
    ca_.Branch(tmp88, &block72, std::vector<compiler::Node*>{phi_bb68_6, phi_bb68_8}, &block73, std::vector<compiler::Node*>{phi_bb68_6, phi_bb68_8});
  }

  TNode<IntPtrT> phi_bb72_6;
  TNode<IntPtrT> phi_bb72_8;
  TNode<Uint32T> tmp89;
  TNode<BoolT> tmp90;
  if (block72.is_used()) {
    ca_.Bind(&block72, &phi_bb72_6, &phi_bb72_8);
    tmp89 = FromConstexpr_uint32_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp90 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp85}, TNode<Uint32T>{tmp89});
    ca_.Goto(&block74, phi_bb72_6, phi_bb72_8, tmp90);
  }

  TNode<IntPtrT> phi_bb73_6;
  TNode<IntPtrT> phi_bb73_8;
  TNode<BoolT> tmp91;
  if (block73.is_used()) {
    ca_.Bind(&block73, &phi_bb73_6, &phi_bb73_8);
    tmp91 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block74, phi_bb73_6, phi_bb73_8, tmp91);
  }

  TNode<IntPtrT> phi_bb74_6;
  TNode<IntPtrT> phi_bb74_8;
  TNode<BoolT> phi_bb74_14;
  if (block74.is_used()) {
    ca_.Bind(&block74, &phi_bb74_6, &phi_bb74_8, &phi_bb74_14);
    ca_.Branch(phi_bb74_14, &block70, std::vector<compiler::Node*>{phi_bb74_6, phi_bb74_8}, &block71, std::vector<compiler::Node*>{phi_bb74_6, phi_bb74_8});
  }

  TNode<IntPtrT> phi_bb71_6;
  TNode<IntPtrT> phi_bb71_8;
  if (block71.is_used()) {
    ca_.Bind(&block71, &phi_bb71_6, &phi_bb71_8);
    {
      auto pos_stack = ca_.GetMacroSourcePositionStack();
      pos_stack.push_back({"src/objects/intl-objects.tq", 115});
      CodeStubAssembler(state_).FailAssert("Torque assert 'leftWeight != 0 && rightWeight != 0' failed", pos_stack);
    }
  }

  TNode<IntPtrT> phi_bb70_6;
  TNode<IntPtrT> phi_bb70_8;
  TNode<BoolT> tmp92;
  if (block70.is_used()) {
    ca_.Bind(&block70, &phi_bb70_6, &phi_bb70_8);
    tmp92 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp83}, TNode<Uint32T>{tmp85});
    ca_.Branch(tmp92, &block75, std::vector<compiler::Node*>{phi_bb70_6, phi_bb70_8}, &block76, std::vector<compiler::Node*>{phi_bb70_6, phi_bb70_8});
  }

  TNode<IntPtrT> phi_bb75_6;
  TNode<IntPtrT> phi_bb75_8;
  TNode<BoolT> tmp93;
  if (block75.is_used()) {
    ca_.Bind(&block75, &phi_bb75_6, &phi_bb75_8);
    tmp93 = CodeStubAssembler(state_).Uint32LessThan(TNode<Uint32T>{tmp83}, TNode<Uint32T>{tmp85});
    ca_.Branch(tmp93, &block77, std::vector<compiler::Node*>{phi_bb75_6, phi_bb75_8}, &block78, std::vector<compiler::Node*>{phi_bb75_6, phi_bb75_8});
  }

  TNode<IntPtrT> phi_bb77_6;
  TNode<IntPtrT> phi_bb77_8;
  TNode<Number> tmp94;
  if (block77.is_used()) {
    ca_.Bind(&block77, &phi_bb77_6, &phi_bb77_8);
    tmp94 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(true, 0x1ull));
    ca_.Goto(&block2, tmp94);
  }

  TNode<IntPtrT> phi_bb78_6;
  TNode<IntPtrT> phi_bb78_8;
  TNode<Number> tmp95;
  if (block78.is_used()) {
    ca_.Bind(&block78, &phi_bb78_6, &phi_bb78_8);
    tmp95 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    ca_.Goto(&block2, tmp95);
  }

  TNode<IntPtrT> phi_bb76_6;
  TNode<IntPtrT> phi_bb76_8;
  TNode<IntPtrT> tmp96;
  TNode<IntPtrT> tmp97;
  if (block76.is_used()) {
    ca_.Bind(&block76, &phi_bb76_6, &phi_bb76_8);
    tmp96 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp97 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb76_8}, TNode<IntPtrT>{tmp96});
    ca_.Goto(&block59, phi_bb76_6, tmp97);
  }

  TNode<IntPtrT> phi_bb58_6;
  TNode<IntPtrT> phi_bb58_8;
  TNode<Number> tmp98;
  if (block58.is_used()) {
    ca_.Bind(&block58, &phi_bb58_6, &phi_bb58_8);
    tmp98 = FromConstexpr_Number_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    ca_.Goto(&block2, tmp98);
  }

  TNode<Number> phi_bb2_6;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_6);
    ca_.Goto(&block79, phi_bb2_6);
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    ca_.Goto(label_Bailout);
  }

  TNode<Number> phi_bb79_6;
    ca_.Bind(&block79, &phi_bb79_6);
  return TNode<Number>{phi_bb79_6};
}

// https://crsrc.org/c/v8/src/objects/intl-objects.tq?l=63&c=9
TNode<Uint32T> Convert_uint32_char8_0(compiler::CodeAssemblerState* state_, TNode<Uint8T> p_i) {
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
  return TNode<Uint32T>{p_i};
}

} // namespace internal
} // namespace v8
