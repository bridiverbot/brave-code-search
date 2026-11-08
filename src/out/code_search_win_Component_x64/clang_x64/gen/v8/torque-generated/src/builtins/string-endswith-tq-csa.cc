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
#include "torque-generated/src/builtins/string-endswith-tq-csa.h"
#include "torque-generated/src/builtins/base-tq-csa.h"
#include "torque-generated/src/builtins/cast-tq-csa.h"
#include "torque-generated/src/builtins/convert-tq-csa.h"
#include "torque-generated/src/builtins/frame-arguments-tq-csa.h"
#include "torque-generated/src/builtins/regexp-tq-csa.h"
#include "torque-generated/src/builtins/string-endswith-tq-csa.h"
#include "torque-generated/src/builtins/torque-internal-tq-csa.h"
#include "torque-generated/src/objects/string-tq-csa.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/builtins/string-endswith.tq?l=35&c=1
TNode<BoolT> IsSubstringAt_0(compiler::CodeAssemblerState* state_, TNode<String> p_string, TNode<String> p_searchStr, TNode<IntPtrT> p_start) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<BoolT> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = TwoStringsToSlices_bool_IsSubstringAtFunctor_0(state_, TNode<String>{p_string}, TNode<String>{p_searchStr}, TorqueStructIsSubstringAtFunctor_0{TNode<IntPtrT>{p_start}});
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TNode<BoolT>{tmp0};
}

TF_BUILTIN(StringPrototypeEndsWith, CodeStubAssembler) {
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
  compiler::CodeAssemblerParameterizedLabel<UintPtrT> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<IntPtrT> tmp0;
  TNode<JSAny> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<JSAny> tmp3;
  TNode<String> tmp4;
  TNode<String> tmp5;
  TNode<BoolT> tmp6;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp1 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp0});
    tmp2 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x1ull));
    tmp3 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}, TNode<IntPtrT>{torque_arguments.actual_count}}, TNode<IntPtrT>{tmp2});
    tmp4 = FromConstexpr_String_constexpr_string_0(state_, "String.prototype.endsWith");
    tmp5 = CodeStubAssembler(state_).ToThisString(TNode<Context>{parameter0}, TNode<JSAny>{parameter1}, TNode<String>{tmp4});
    tmp6 = IsRegExp_0(state_, TNode<Context>{parameter0}, TNode<JSAny>{tmp1});
    ca_.Branch(tmp6, &block1, std::vector<compiler::Node*>{}, &block2, std::vector<compiler::Node*>{});
  }

  if (block1.is_used()) {
    ca_.Bind(&block1);
    CodeStubAssembler(state_).ThrowTypeError(TNode<Context>{parameter0}, CastIfEnumClass<MessageTemplate>(MessageTemplate::kFirstArgumentNotRegExp), "String.prototype.endsWith");
  }

  TNode<String> tmp7;
  TNode<UintPtrT> tmp8;
  TNode<Undefined> tmp9;
  TNode<BoolT> tmp10;
  if (block2.is_used()) {
    ca_.Bind(&block2);
    tmp7 = CodeStubAssembler(state_).ToString_Inline(TNode<Context>{parameter0}, TNode<JSAny>{tmp1});
    tmp8 = LoadStringLengthAsUintPtr_0(state_, TNode<String>{tmp5});
    tmp9 = Undefined_0(state_);
    tmp10 = CodeStubAssembler(state_).TaggedNotEqual(TNode<Object>{tmp3}, TNode<Union<Context, FixedArrayBase, FunctionTemplateInfo, Hole, JSReceiver, Map, Oddball, String, Symbol, WasmFuncRef, WasmNull, WeakCell>>{tmp9});
    ca_.Branch(tmp10, &block3, std::vector<compiler::Node*>{}, &block4, std::vector<compiler::Node*>{});
  }

  TNode<UintPtrT> tmp11;
  if (block3.is_used()) {
    ca_.Bind(&block3);
    tmp11 = ClampToIndexRange_0(state_, TNode<Context>{parameter0}, TNode<JSAny>{tmp3}, TNode<UintPtrT>{tmp8});
    ca_.Goto(&block5, tmp11);
  }

  if (block4.is_used()) {
    ca_.Bind(&block4);
    ca_.Goto(&block5, tmp8);
  }

  TNode<UintPtrT> phi_bb5_11;
  TNode<UintPtrT> tmp12;
  TNode<UintPtrT> tmp13;
  TNode<IntPtrT> tmp14;
  TNode<IntPtrT> tmp15;
  TNode<BoolT> tmp16;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_11);
    tmp12 = LoadStringLengthAsUintPtr_0(state_, TNode<String>{tmp7});
    tmp13 = CodeStubAssembler(state_).UintPtrSub(TNode<UintPtrT>{phi_bb5_11}, TNode<UintPtrT>{tmp12});
    tmp14 = CodeStubAssembler(state_).Signed(TNode<UintPtrT>{tmp13});
    tmp15 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp16 = CodeStubAssembler(state_).IntPtrLessThan(TNode<IntPtrT>{tmp14}, TNode<IntPtrT>{tmp15});
    ca_.Branch(tmp16, &block7, std::vector<compiler::Node*>{}, &block8, std::vector<compiler::Node*>{});
  }

  TNode<False> tmp17;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    tmp17 = False_0(state_);
    arguments.PopAndReturn(tmp17);
  }

  TNode<BoolT> tmp18;
  TNode<Boolean> tmp19;
  if (block8.is_used()) {
    ca_.Bind(&block8);
    tmp18 = IsSubstringAt_0(state_, TNode<String>{tmp5}, TNode<String>{tmp7}, TNode<IntPtrT>{tmp14});
    tmp19 = Convert_Boolean_bool_0(state_, TNode<BoolT>{tmp18});
    arguments.PopAndReturn(tmp19);
  }
}

// https://crsrc.org/c/v8/src/builtins/string-endswith.tq?l=36&c=10
TNode<BoolT> TwoStringsToSlices_bool_IsSubstringAtFunctor_0(compiler::CodeAssemblerState* state_, TNode<String> p_s1, TNode<String> p_s2, TorqueStructIsSubstringAtFunctor_0 p_f) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, String> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, String> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block20(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block19(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block32(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block31(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block36(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block35(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block40(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block39(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block44(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block43(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block48(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block47(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block52(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String, IntPtrT> block51(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT, String> block25(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<String, IntPtrT> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT> block59(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT> block57(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, String> block63(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, String> block62(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block67(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block66(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block71(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block70(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block75(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block74(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block79(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block78(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block83(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block82(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block87(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block86(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block91(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block90(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block95(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block94(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block99(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block98(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block103(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block102(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block80(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block76(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT> block58(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block56(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block54(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT> block110(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT> block108(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, String> block114(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, String> block113(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block118(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block117(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block122(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block121(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block126(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block125(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block130(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block129(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block134(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block133(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block138(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block137(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block142(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block141(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block146(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block145(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block150(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block149(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block154(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String, IntPtrT> block153(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block131(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT, String> block127(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, String, IntPtrT> block109(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block107(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT, Union<HeapObject, TaggedIndex>, IntPtrT, IntPtrT> block105(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block155(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<String> tmp0;
  TNode<String> tmp1;
  TNode<IntPtrT> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<Int32T> tmp4;
  TNode<IntPtrT> tmp5;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    tmp0 = Flatten_0(state_, TNode<String>{p_s1});
    tmp1 = Flatten_0(state_, TNode<String>{p_s2});
    tmp2 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp3 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp4 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp0, tmp3});
    tmp5 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp4});
    ca_.Goto(&block8, tmp0, tmp2);
  }

  TNode<String> phi_bb8_7;
  TNode<IntPtrT> phi_bb8_8;
  TNode<BoolT> tmp6;
  if (block8.is_used()) {
    ca_.Bind(&block8, &phi_bb8_7, &phi_bb8_8);
    tmp6 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Branch(tmp6, &block6, std::vector<compiler::Node*>{phi_bb8_7, phi_bb8_8}, &block7, std::vector<compiler::Node*>{phi_bb8_7, phi_bb8_8});
  }

  TNode<String> phi_bb6_7;
  TNode<IntPtrT> phi_bb6_8;
  TNode<SeqOneByteString> tmp7;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_7, &phi_bb6_8);
    compiler::CodeAssemblerLabel label8(&ca_);
    tmp7 = Cast_SeqOneByteString_1(state_, TNode<String>{phi_bb6_7}, &label8);
    ca_.Goto(&block11, phi_bb6_7, phi_bb6_8, phi_bb6_7, phi_bb6_7);
    if (label8.is_used()) {
      ca_.Bind(&label8);
      ca_.Goto(&block12, phi_bb6_7, phi_bb6_8, phi_bb6_7, phi_bb6_7);
    }
  }

  TNode<String> phi_bb12_7;
  TNode<IntPtrT> phi_bb12_8;
  TNode<String> phi_bb12_10;
  TNode<String> phi_bb12_11;
  TNode<SeqTwoByteString> tmp9;
  if (block12.is_used()) {
    ca_.Bind(&block12, &phi_bb12_7, &phi_bb12_8, &phi_bb12_10, &phi_bb12_11);
    compiler::CodeAssemblerLabel label10(&ca_);
    tmp9 = Cast_SeqTwoByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb12_10)}, &label10);
    ca_.Goto(&block19, phi_bb12_7, phi_bb12_8, phi_bb12_10);
    if (label10.is_used()) {
      ca_.Bind(&label10);
      ca_.Goto(&block20, phi_bb12_7, phi_bb12_8, phi_bb12_10);
    }
  }

  TNode<String> phi_bb11_7;
  TNode<IntPtrT> phi_bb11_8;
  TNode<String> phi_bb11_10;
  TNode<String> phi_bb11_11;
  TNode<Union<HeapObject, TaggedIndex>> tmp11;
  TNode<IntPtrT> tmp12;
  TNode<IntPtrT> tmp13;
  TNode<Union<HeapObject, TaggedIndex>> tmp14;
  TNode<IntPtrT> tmp15;
  TNode<IntPtrT> tmp16;
  if (block11.is_used()) {
    ca_.Bind(&block11, &phi_bb11_7, &phi_bb11_8, &phi_bb11_10, &phi_bb11_11);
    std::tie(tmp11, tmp12, tmp13) = FieldSliceSeqOneByteStringChars_0(state_, TNode<SeqOneByteString>{tmp7}).Flatten();
    compiler::CodeAssemblerLabel label17(&ca_);
    std::tie(tmp14, tmp15, tmp16) = Subslice_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp11}, TNode<IntPtrT>{tmp12}, TNode<IntPtrT>{tmp13}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb11_8}, TNode<IntPtrT>{tmp5}, &label17).Flatten();
    ca_.Goto(&block15, phi_bb11_7, phi_bb11_8, phi_bb11_10, phi_bb11_8);
    if (label17.is_used()) {
      ca_.Bind(&label17);
      ca_.Goto(&block16, phi_bb11_7, phi_bb11_8, phi_bb11_10, phi_bb11_8);
    }
  }

  TNode<String> phi_bb16_7;
  TNode<IntPtrT> phi_bb16_8;
  TNode<String> phi_bb16_10;
  TNode<IntPtrT> phi_bb16_15;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_7, &phi_bb16_8, &phi_bb16_10, &phi_bb16_15);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:292:67");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> phi_bb15_7;
  TNode<IntPtrT> phi_bb15_8;
  TNode<String> phi_bb15_10;
  TNode<IntPtrT> phi_bb15_15;
  if (block15.is_used()) {
    ca_.Bind(&block15, &phi_bb15_7, &phi_bb15_8, &phi_bb15_10, &phi_bb15_15);
    ca_.Goto(&block5, tmp14, tmp15, tmp16);
  }

  TNode<String> phi_bb20_7;
  TNode<IntPtrT> phi_bb20_8;
  TNode<String> phi_bb20_10;
  TNode<ThinString> tmp18;
  if (block20.is_used()) {
    ca_.Bind(&block20, &phi_bb20_7, &phi_bb20_8, &phi_bb20_10);
    compiler::CodeAssemblerLabel label19(&ca_);
    tmp18 = Cast_ThinString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb20_10)}, &label19);
    ca_.Goto(&block27, phi_bb20_7, phi_bb20_8, phi_bb20_10);
    if (label19.is_used()) {
      ca_.Bind(&label19);
      ca_.Goto(&block28, phi_bb20_7, phi_bb20_8, phi_bb20_10);
    }
  }

  TNode<String> phi_bb19_7;
  TNode<IntPtrT> phi_bb19_8;
  TNode<String> phi_bb19_10;
  TNode<Union<HeapObject, TaggedIndex>> tmp20;
  TNode<IntPtrT> tmp21;
  TNode<IntPtrT> tmp22;
  TNode<Union<HeapObject, TaggedIndex>> tmp23;
  TNode<IntPtrT> tmp24;
  TNode<IntPtrT> tmp25;
  if (block19.is_used()) {
    ca_.Bind(&block19, &phi_bb19_7, &phi_bb19_8, &phi_bb19_10);
    std::tie(tmp20, tmp21, tmp22) = FieldSliceSeqTwoByteStringChars_0(state_, TNode<SeqTwoByteString>{tmp9}).Flatten();
    compiler::CodeAssemblerLabel label26(&ca_);
    std::tie(tmp23, tmp24, tmp25) = Subslice_char16_0(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{tmp20}, TNode<IntPtrT>{tmp21}, TNode<IntPtrT>{tmp22}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb19_8}, TNode<IntPtrT>{tmp5}, &label26).Flatten();
    ca_.Goto(&block23, phi_bb19_7, phi_bb19_8, phi_bb19_10, phi_bb19_8);
    if (label26.is_used()) {
      ca_.Bind(&label26);
      ca_.Goto(&block24, phi_bb19_7, phi_bb19_8, phi_bb19_10, phi_bb19_8);
    }
  }

  TNode<String> phi_bb24_7;
  TNode<IntPtrT> phi_bb24_8;
  TNode<String> phi_bb24_10;
  TNode<IntPtrT> phi_bb24_15;
  if (block24.is_used()) {
    ca_.Bind(&block24, &phi_bb24_7, &phi_bb24_8, &phi_bb24_10, &phi_bb24_15);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:295:67");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> phi_bb23_7;
  TNode<IntPtrT> phi_bb23_8;
  TNode<String> phi_bb23_10;
  TNode<IntPtrT> phi_bb23_15;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_7, &phi_bb23_8, &phi_bb23_10, &phi_bb23_15);
    ca_.Goto(&block3, tmp23, tmp24, tmp25);
  }

  TNode<String> phi_bb28_7;
  TNode<IntPtrT> phi_bb28_8;
  TNode<String> phi_bb28_10;
  TNode<ConsString> tmp27;
  if (block28.is_used()) {
    ca_.Bind(&block28, &phi_bb28_7, &phi_bb28_8, &phi_bb28_10);
    compiler::CodeAssemblerLabel label28(&ca_);
    tmp27 = Cast_ConsString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb28_10)}, &label28);
    ca_.Goto(&block31, phi_bb28_7, phi_bb28_8, phi_bb28_10);
    if (label28.is_used()) {
      ca_.Bind(&label28);
      ca_.Goto(&block32, phi_bb28_7, phi_bb28_8, phi_bb28_10);
    }
  }

  TNode<String> phi_bb27_7;
  TNode<IntPtrT> phi_bb27_8;
  TNode<String> phi_bb27_10;
  TNode<IntPtrT> tmp29;
  TNode<InternalizedString> tmp30;
  if (block27.is_used()) {
    ca_.Bind(&block27, &phi_bb27_7, &phi_bb27_8, &phi_bb27_10);
    tmp29 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp30 = CodeStubAssembler(state_).LoadReference<InternalizedString>(CodeStubAssembler::Reference{tmp18, tmp29});
    ca_.Goto(&block25, tmp30, phi_bb27_8, phi_bb27_10);
  }

  TNode<String> phi_bb32_7;
  TNode<IntPtrT> phi_bb32_8;
  TNode<String> phi_bb32_10;
  TNode<SlicedString> tmp31;
  if (block32.is_used()) {
    ca_.Bind(&block32, &phi_bb32_7, &phi_bb32_8, &phi_bb32_10);
    compiler::CodeAssemblerLabel label32(&ca_);
    tmp31 = Cast_SlicedString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb32_10)}, &label32);
    ca_.Goto(&block35, phi_bb32_7, phi_bb32_8, phi_bb32_10);
    if (label32.is_used()) {
      ca_.Bind(&label32);
      ca_.Goto(&block36, phi_bb32_7, phi_bb32_8, phi_bb32_10);
    }
  }

  TNode<String> phi_bb31_7;
  TNode<IntPtrT> phi_bb31_8;
  TNode<String> phi_bb31_10;
  TNode<String> tmp33;
  if (block31.is_used()) {
    ca_.Bind(&block31, &phi_bb31_7, &phi_bb31_8, &phi_bb31_10);
    tmp33 = Flatten_1(state_, TNode<ConsString>{tmp27});
    ca_.Goto(&block29, tmp33, phi_bb31_8, phi_bb31_10);
  }

  TNode<String> phi_bb36_7;
  TNode<IntPtrT> phi_bb36_8;
  TNode<String> phi_bb36_10;
  TNode<ExternalOneByteString> tmp34;
  if (block36.is_used()) {
    ca_.Bind(&block36, &phi_bb36_7, &phi_bb36_8, &phi_bb36_10);
    compiler::CodeAssemblerLabel label35(&ca_);
    tmp34 = Cast_ExternalOneByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb36_10)}, &label35);
    ca_.Goto(&block39, phi_bb36_7, phi_bb36_8, phi_bb36_10);
    if (label35.is_used()) {
      ca_.Bind(&label35);
      ca_.Goto(&block40, phi_bb36_7, phi_bb36_8, phi_bb36_10);
    }
  }

  TNode<String> phi_bb35_7;
  TNode<IntPtrT> phi_bb35_8;
  TNode<String> phi_bb35_10;
  TNode<IntPtrT> tmp36;
  TNode<Smi> tmp37;
  TNode<IntPtrT> tmp38;
  TNode<Int32T> tmp39;
  TNode<Int32T> tmp40;
  TNode<Int32T> tmp41;
  TNode<Uint32T> tmp42;
  TNode<IntPtrT> tmp43;
  TNode<IntPtrT> tmp44;
  TNode<String> tmp45;
  if (block35.is_used()) {
    ca_.Bind(&block35, &phi_bb35_7, &phi_bb35_8, &phi_bb35_10);
    tmp36 = FromConstexpr_intptr_constexpr_int31_0(state_, 16);
    tmp37 = CodeStubAssembler(state_).LoadReference<Smi>(CodeStubAssembler::Reference{tmp31, tmp36});
    tmp38 = Convert_intptr_Smi_0(state_, TNode<Smi>{tmp37});
    tmp39 = CodeStubAssembler(state_).TruncateIntPtrToInt32(TNode<IntPtrT>{tmp38});
    tmp40 = CodeStubAssembler(state_).TruncateIntPtrToInt32(TNode<IntPtrT>{phi_bb35_8});
    tmp41 = CodeStubAssembler(state_).Int32Add(TNode<Int32T>{tmp40}, TNode<Int32T>{tmp39});
    tmp42 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp41});
    tmp43 = Convert_intptr_uint32_0(state_, TNode<Uint32T>{tmp42});
    tmp44 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp45 = CodeStubAssembler(state_).LoadReference<String>(CodeStubAssembler::Reference{tmp31, tmp44});
    ca_.Goto(&block29, tmp45, tmp43, phi_bb35_10);
  }

  TNode<String> phi_bb40_7;
  TNode<IntPtrT> phi_bb40_8;
  TNode<String> phi_bb40_10;
  TNode<ExternalTwoByteString> tmp46;
  if (block40.is_used()) {
    ca_.Bind(&block40, &phi_bb40_7, &phi_bb40_8, &phi_bb40_10);
    compiler::CodeAssemblerLabel label47(&ca_);
    tmp46 = Cast_ExternalTwoByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb40_10)}, &label47);
    ca_.Goto(&block47, phi_bb40_7, phi_bb40_8, phi_bb40_10);
    if (label47.is_used()) {
      ca_.Bind(&label47);
      ca_.Goto(&block48, phi_bb40_7, phi_bb40_8, phi_bb40_10);
    }
  }

  TNode<String> phi_bb39_7;
  TNode<IntPtrT> phi_bb39_8;
  TNode<String> phi_bb39_10;
  TNode<RawPtrT> tmp48;
  TNode<IntPtrT> tmp49;
  TNode<Int32T> tmp50;
  TNode<IntPtrT> tmp51;
  TNode<Union<HeapObject, TaggedIndex>> tmp52;
  TNode<IntPtrT> tmp53;
  TNode<IntPtrT> tmp54;
  TNode<Union<HeapObject, TaggedIndex>> tmp55;
  TNode<IntPtrT> tmp56;
  TNode<IntPtrT> tmp57;
  if (block39.is_used()) {
    ca_.Bind(&block39, &phi_bb39_7, &phi_bb39_8, &phi_bb39_10);
    tmp48 = Method_ExternalOneByteString_GetChars_0(state_, TNode<ExternalOneByteString>{tmp34});
    tmp49 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp50 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp34, tmp49});
    tmp51 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp50});
    std::tie(tmp52, tmp53, tmp54) = NewOffHeapConstSlice_char8_0(state_, TNode<RawPtrT>{tmp48}, TNode<IntPtrT>{tmp51}).Flatten();
    compiler::CodeAssemblerLabel label58(&ca_);
    std::tie(tmp55, tmp56, tmp57) = Subslice_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp52}, TNode<IntPtrT>{tmp53}, TNode<IntPtrT>{tmp54}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb39_8}, TNode<IntPtrT>{tmp5}, &label58).Flatten();
    ca_.Goto(&block43, phi_bb39_7, phi_bb39_8, phi_bb39_10, phi_bb39_8);
    if (label58.is_used()) {
      ca_.Bind(&label58);
      ca_.Goto(&block44, phi_bb39_7, phi_bb39_8, phi_bb39_10, phi_bb39_8);
    }
  }

  TNode<String> phi_bb44_7;
  TNode<IntPtrT> phi_bb44_8;
  TNode<String> phi_bb44_10;
  TNode<IntPtrT> phi_bb44_18;
  if (block44.is_used()) {
    ca_.Bind(&block44, &phi_bb44_7, &phi_bb44_8, &phi_bb44_10, &phi_bb44_18);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:315:63");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> phi_bb43_7;
  TNode<IntPtrT> phi_bb43_8;
  TNode<String> phi_bb43_10;
  TNode<IntPtrT> phi_bb43_18;
  if (block43.is_used()) {
    ca_.Bind(&block43, &phi_bb43_7, &phi_bb43_8, &phi_bb43_10, &phi_bb43_18);
    ca_.Goto(&block5, tmp55, tmp56, tmp57);
  }

  TNode<String> phi_bb48_7;
  TNode<IntPtrT> phi_bb48_8;
  TNode<String> phi_bb48_10;
  if (block48.is_used()) {
    ca_.Bind(&block48, &phi_bb48_7, &phi_bb48_8, &phi_bb48_10);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:323:9");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> phi_bb47_7;
  TNode<IntPtrT> phi_bb47_8;
  TNode<String> phi_bb47_10;
  TNode<RawPtrT> tmp59;
  TNode<IntPtrT> tmp60;
  TNode<Int32T> tmp61;
  TNode<IntPtrT> tmp62;
  TNode<Union<HeapObject, TaggedIndex>> tmp63;
  TNode<IntPtrT> tmp64;
  TNode<IntPtrT> tmp65;
  TNode<Union<HeapObject, TaggedIndex>> tmp66;
  TNode<IntPtrT> tmp67;
  TNode<IntPtrT> tmp68;
  if (block47.is_used()) {
    ca_.Bind(&block47, &phi_bb47_7, &phi_bb47_8, &phi_bb47_10);
    tmp59 = Method_ExternalTwoByteString_GetChars_0(state_, TNode<ExternalTwoByteString>{tmp46});
    tmp60 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp61 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp46, tmp60});
    tmp62 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp61});
    std::tie(tmp63, tmp64, tmp65) = NewOffHeapConstSlice_char16_0(state_, TNode<RawPtrT>{tmp59}, TNode<IntPtrT>{tmp62}).Flatten();
    compiler::CodeAssemblerLabel label69(&ca_);
    std::tie(tmp66, tmp67, tmp68) = Subslice_char16_0(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{tmp63}, TNode<IntPtrT>{tmp64}, TNode<IntPtrT>{tmp65}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb47_8}, TNode<IntPtrT>{tmp5}, &label69).Flatten();
    ca_.Goto(&block51, phi_bb47_7, phi_bb47_8, phi_bb47_10, phi_bb47_8);
    if (label69.is_used()) {
      ca_.Bind(&label69);
      ca_.Goto(&block52, phi_bb47_7, phi_bb47_8, phi_bb47_10, phi_bb47_8);
    }
  }

  TNode<String> phi_bb52_7;
  TNode<IntPtrT> phi_bb52_8;
  TNode<String> phi_bb52_10;
  TNode<IntPtrT> phi_bb52_18;
  if (block52.is_used()) {
    ca_.Bind(&block52, &phi_bb52_7, &phi_bb52_8, &phi_bb52_10, &phi_bb52_18);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:320:63");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<String> phi_bb51_7;
  TNode<IntPtrT> phi_bb51_8;
  TNode<String> phi_bb51_10;
  TNode<IntPtrT> phi_bb51_18;
  if (block51.is_used()) {
    ca_.Bind(&block51, &phi_bb51_7, &phi_bb51_8, &phi_bb51_10, &phi_bb51_18);
    ca_.Goto(&block3, tmp66, tmp67, tmp68);
  }

  TNode<String> phi_bb29_7;
  TNode<IntPtrT> phi_bb29_8;
  TNode<String> phi_bb29_10;
  if (block29.is_used()) {
    ca_.Bind(&block29, &phi_bb29_7, &phi_bb29_8, &phi_bb29_10);
    ca_.Goto(&block25, phi_bb29_7, phi_bb29_8, phi_bb29_10);
  }

  TNode<String> phi_bb25_7;
  TNode<IntPtrT> phi_bb25_8;
  TNode<String> phi_bb25_10;
  if (block25.is_used()) {
    ca_.Bind(&block25, &phi_bb25_7, &phi_bb25_8, &phi_bb25_10);
    ca_.Goto(&block8, phi_bb25_7, phi_bb25_8);
  }

  TNode<String> phi_bb7_7;
  TNode<IntPtrT> phi_bb7_8;
  if (block7.is_used()) {
    ca_.Bind(&block7, &phi_bb7_7, &phi_bb7_8);
    VerifiedUnreachable_0(state_);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb5_5;
  TNode<IntPtrT> phi_bb5_6;
  TNode<IntPtrT> phi_bb5_7;
  TNode<IntPtrT> tmp70;
  TNode<IntPtrT> tmp71;
  TNode<Int32T> tmp72;
  TNode<IntPtrT> tmp73;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_5, &phi_bb5_6, &phi_bb5_7);
    tmp70 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp71 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp72 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp1, tmp71});
    tmp73 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp72});
    ca_.Goto(&block59, phi_bb5_5, phi_bb5_6, phi_bb5_7, tmp1, tmp70);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb59_5;
  TNode<IntPtrT> phi_bb59_6;
  TNode<IntPtrT> phi_bb59_7;
  TNode<String> phi_bb59_10;
  TNode<IntPtrT> phi_bb59_11;
  TNode<BoolT> tmp74;
  if (block59.is_used()) {
    ca_.Bind(&block59, &phi_bb59_5, &phi_bb59_6, &phi_bb59_7, &phi_bb59_10, &phi_bb59_11);
    tmp74 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Branch(tmp74, &block57, std::vector<compiler::Node*>{phi_bb59_5, phi_bb59_6, phi_bb59_7, phi_bb59_10, phi_bb59_11}, &block58, std::vector<compiler::Node*>{phi_bb59_5, phi_bb59_6, phi_bb59_7, phi_bb59_10, phi_bb59_11});
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb57_5;
  TNode<IntPtrT> phi_bb57_6;
  TNode<IntPtrT> phi_bb57_7;
  TNode<String> phi_bb57_10;
  TNode<IntPtrT> phi_bb57_11;
  TNode<SeqOneByteString> tmp75;
  if (block57.is_used()) {
    ca_.Bind(&block57, &phi_bb57_5, &phi_bb57_6, &phi_bb57_7, &phi_bb57_10, &phi_bb57_11);
    compiler::CodeAssemblerLabel label76(&ca_);
    tmp75 = Cast_SeqOneByteString_1(state_, TNode<String>{phi_bb57_10}, &label76);
    ca_.Goto(&block62, phi_bb57_5, phi_bb57_6, phi_bb57_7, phi_bb57_10, phi_bb57_11, phi_bb57_10, phi_bb57_10);
    if (label76.is_used()) {
      ca_.Bind(&label76);
      ca_.Goto(&block63, phi_bb57_5, phi_bb57_6, phi_bb57_7, phi_bb57_10, phi_bb57_11, phi_bb57_10, phi_bb57_10);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb63_5;
  TNode<IntPtrT> phi_bb63_6;
  TNode<IntPtrT> phi_bb63_7;
  TNode<String> phi_bb63_10;
  TNode<IntPtrT> phi_bb63_11;
  TNode<String> phi_bb63_13;
  TNode<String> phi_bb63_14;
  TNode<SeqTwoByteString> tmp77;
  if (block63.is_used()) {
    ca_.Bind(&block63, &phi_bb63_5, &phi_bb63_6, &phi_bb63_7, &phi_bb63_10, &phi_bb63_11, &phi_bb63_13, &phi_bb63_14);
    compiler::CodeAssemblerLabel label78(&ca_);
    tmp77 = Cast_SeqTwoByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb63_13)}, &label78);
    ca_.Goto(&block70, phi_bb63_5, phi_bb63_6, phi_bb63_7, phi_bb63_10, phi_bb63_11, phi_bb63_13);
    if (label78.is_used()) {
      ca_.Bind(&label78);
      ca_.Goto(&block71, phi_bb63_5, phi_bb63_6, phi_bb63_7, phi_bb63_10, phi_bb63_11, phi_bb63_13);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb62_5;
  TNode<IntPtrT> phi_bb62_6;
  TNode<IntPtrT> phi_bb62_7;
  TNode<String> phi_bb62_10;
  TNode<IntPtrT> phi_bb62_11;
  TNode<String> phi_bb62_13;
  TNode<String> phi_bb62_14;
  TNode<Union<HeapObject, TaggedIndex>> tmp79;
  TNode<IntPtrT> tmp80;
  TNode<IntPtrT> tmp81;
  TNode<Union<HeapObject, TaggedIndex>> tmp82;
  TNode<IntPtrT> tmp83;
  TNode<IntPtrT> tmp84;
  if (block62.is_used()) {
    ca_.Bind(&block62, &phi_bb62_5, &phi_bb62_6, &phi_bb62_7, &phi_bb62_10, &phi_bb62_11, &phi_bb62_13, &phi_bb62_14);
    std::tie(tmp79, tmp80, tmp81) = FieldSliceSeqOneByteStringChars_0(state_, TNode<SeqOneByteString>{tmp75}).Flatten();
    compiler::CodeAssemblerLabel label85(&ca_);
    std::tie(tmp82, tmp83, tmp84) = Subslice_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp79}, TNode<IntPtrT>{tmp80}, TNode<IntPtrT>{tmp81}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb62_11}, TNode<IntPtrT>{tmp73}, &label85).Flatten();
    ca_.Goto(&block66, phi_bb62_5, phi_bb62_6, phi_bb62_7, phi_bb62_10, phi_bb62_11, phi_bb62_13, phi_bb62_11);
    if (label85.is_used()) {
      ca_.Bind(&label85);
      ca_.Goto(&block67, phi_bb62_5, phi_bb62_6, phi_bb62_7, phi_bb62_10, phi_bb62_11, phi_bb62_13, phi_bb62_11);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb67_5;
  TNode<IntPtrT> phi_bb67_6;
  TNode<IntPtrT> phi_bb67_7;
  TNode<String> phi_bb67_10;
  TNode<IntPtrT> phi_bb67_11;
  TNode<String> phi_bb67_13;
  TNode<IntPtrT> phi_bb67_18;
  if (block67.is_used()) {
    ca_.Bind(&block67, &phi_bb67_5, &phi_bb67_6, &phi_bb67_7, &phi_bb67_10, &phi_bb67_11, &phi_bb67_13, &phi_bb67_18);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:292:67");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb66_5;
  TNode<IntPtrT> phi_bb66_6;
  TNode<IntPtrT> phi_bb66_7;
  TNode<String> phi_bb66_10;
  TNode<IntPtrT> phi_bb66_11;
  TNode<String> phi_bb66_13;
  TNode<IntPtrT> phi_bb66_18;
  if (block66.is_used()) {
    ca_.Bind(&block66, &phi_bb66_5, &phi_bb66_6, &phi_bb66_7, &phi_bb66_10, &phi_bb66_11, &phi_bb66_13, &phi_bb66_18);
    ca_.Goto(&block56, phi_bb66_5, phi_bb66_6, phi_bb66_7, tmp82, tmp83, tmp84);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb71_5;
  TNode<IntPtrT> phi_bb71_6;
  TNode<IntPtrT> phi_bb71_7;
  TNode<String> phi_bb71_10;
  TNode<IntPtrT> phi_bb71_11;
  TNode<String> phi_bb71_13;
  TNode<ThinString> tmp86;
  if (block71.is_used()) {
    ca_.Bind(&block71, &phi_bb71_5, &phi_bb71_6, &phi_bb71_7, &phi_bb71_10, &phi_bb71_11, &phi_bb71_13);
    compiler::CodeAssemblerLabel label87(&ca_);
    tmp86 = Cast_ThinString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb71_13)}, &label87);
    ca_.Goto(&block78, phi_bb71_5, phi_bb71_6, phi_bb71_7, phi_bb71_10, phi_bb71_11, phi_bb71_13);
    if (label87.is_used()) {
      ca_.Bind(&label87);
      ca_.Goto(&block79, phi_bb71_5, phi_bb71_6, phi_bb71_7, phi_bb71_10, phi_bb71_11, phi_bb71_13);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb70_5;
  TNode<IntPtrT> phi_bb70_6;
  TNode<IntPtrT> phi_bb70_7;
  TNode<String> phi_bb70_10;
  TNode<IntPtrT> phi_bb70_11;
  TNode<String> phi_bb70_13;
  TNode<Union<HeapObject, TaggedIndex>> tmp88;
  TNode<IntPtrT> tmp89;
  TNode<IntPtrT> tmp90;
  TNode<Union<HeapObject, TaggedIndex>> tmp91;
  TNode<IntPtrT> tmp92;
  TNode<IntPtrT> tmp93;
  if (block70.is_used()) {
    ca_.Bind(&block70, &phi_bb70_5, &phi_bb70_6, &phi_bb70_7, &phi_bb70_10, &phi_bb70_11, &phi_bb70_13);
    std::tie(tmp88, tmp89, tmp90) = FieldSliceSeqTwoByteStringChars_0(state_, TNode<SeqTwoByteString>{tmp77}).Flatten();
    compiler::CodeAssemblerLabel label94(&ca_);
    std::tie(tmp91, tmp92, tmp93) = Subslice_char16_0(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{tmp88}, TNode<IntPtrT>{tmp89}, TNode<IntPtrT>{tmp90}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb70_11}, TNode<IntPtrT>{tmp73}, &label94).Flatten();
    ca_.Goto(&block74, phi_bb70_5, phi_bb70_6, phi_bb70_7, phi_bb70_10, phi_bb70_11, phi_bb70_13, phi_bb70_11);
    if (label94.is_used()) {
      ca_.Bind(&label94);
      ca_.Goto(&block75, phi_bb70_5, phi_bb70_6, phi_bb70_7, phi_bb70_10, phi_bb70_11, phi_bb70_13, phi_bb70_11);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb75_5;
  TNode<IntPtrT> phi_bb75_6;
  TNode<IntPtrT> phi_bb75_7;
  TNode<String> phi_bb75_10;
  TNode<IntPtrT> phi_bb75_11;
  TNode<String> phi_bb75_13;
  TNode<IntPtrT> phi_bb75_18;
  if (block75.is_used()) {
    ca_.Bind(&block75, &phi_bb75_5, &phi_bb75_6, &phi_bb75_7, &phi_bb75_10, &phi_bb75_11, &phi_bb75_13, &phi_bb75_18);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:295:67");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb74_5;
  TNode<IntPtrT> phi_bb74_6;
  TNode<IntPtrT> phi_bb74_7;
  TNode<String> phi_bb74_10;
  TNode<IntPtrT> phi_bb74_11;
  TNode<String> phi_bb74_13;
  TNode<IntPtrT> phi_bb74_18;
  if (block74.is_used()) {
    ca_.Bind(&block74, &phi_bb74_5, &phi_bb74_6, &phi_bb74_7, &phi_bb74_10, &phi_bb74_11, &phi_bb74_13, &phi_bb74_18);
    ca_.Goto(&block54, phi_bb74_5, phi_bb74_6, phi_bb74_7, tmp91, tmp92, tmp93);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb79_5;
  TNode<IntPtrT> phi_bb79_6;
  TNode<IntPtrT> phi_bb79_7;
  TNode<String> phi_bb79_10;
  TNode<IntPtrT> phi_bb79_11;
  TNode<String> phi_bb79_13;
  TNode<ConsString> tmp95;
  if (block79.is_used()) {
    ca_.Bind(&block79, &phi_bb79_5, &phi_bb79_6, &phi_bb79_7, &phi_bb79_10, &phi_bb79_11, &phi_bb79_13);
    compiler::CodeAssemblerLabel label96(&ca_);
    tmp95 = Cast_ConsString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb79_13)}, &label96);
    ca_.Goto(&block82, phi_bb79_5, phi_bb79_6, phi_bb79_7, phi_bb79_10, phi_bb79_11, phi_bb79_13);
    if (label96.is_used()) {
      ca_.Bind(&label96);
      ca_.Goto(&block83, phi_bb79_5, phi_bb79_6, phi_bb79_7, phi_bb79_10, phi_bb79_11, phi_bb79_13);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb78_5;
  TNode<IntPtrT> phi_bb78_6;
  TNode<IntPtrT> phi_bb78_7;
  TNode<String> phi_bb78_10;
  TNode<IntPtrT> phi_bb78_11;
  TNode<String> phi_bb78_13;
  TNode<IntPtrT> tmp97;
  TNode<InternalizedString> tmp98;
  if (block78.is_used()) {
    ca_.Bind(&block78, &phi_bb78_5, &phi_bb78_6, &phi_bb78_7, &phi_bb78_10, &phi_bb78_11, &phi_bb78_13);
    tmp97 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp98 = CodeStubAssembler(state_).LoadReference<InternalizedString>(CodeStubAssembler::Reference{tmp86, tmp97});
    ca_.Goto(&block76, phi_bb78_5, phi_bb78_6, phi_bb78_7, tmp98, phi_bb78_11, phi_bb78_13);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb83_5;
  TNode<IntPtrT> phi_bb83_6;
  TNode<IntPtrT> phi_bb83_7;
  TNode<String> phi_bb83_10;
  TNode<IntPtrT> phi_bb83_11;
  TNode<String> phi_bb83_13;
  TNode<SlicedString> tmp99;
  if (block83.is_used()) {
    ca_.Bind(&block83, &phi_bb83_5, &phi_bb83_6, &phi_bb83_7, &phi_bb83_10, &phi_bb83_11, &phi_bb83_13);
    compiler::CodeAssemblerLabel label100(&ca_);
    tmp99 = Cast_SlicedString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb83_13)}, &label100);
    ca_.Goto(&block86, phi_bb83_5, phi_bb83_6, phi_bb83_7, phi_bb83_10, phi_bb83_11, phi_bb83_13);
    if (label100.is_used()) {
      ca_.Bind(&label100);
      ca_.Goto(&block87, phi_bb83_5, phi_bb83_6, phi_bb83_7, phi_bb83_10, phi_bb83_11, phi_bb83_13);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb82_5;
  TNode<IntPtrT> phi_bb82_6;
  TNode<IntPtrT> phi_bb82_7;
  TNode<String> phi_bb82_10;
  TNode<IntPtrT> phi_bb82_11;
  TNode<String> phi_bb82_13;
  TNode<String> tmp101;
  if (block82.is_used()) {
    ca_.Bind(&block82, &phi_bb82_5, &phi_bb82_6, &phi_bb82_7, &phi_bb82_10, &phi_bb82_11, &phi_bb82_13);
    tmp101 = Flatten_1(state_, TNode<ConsString>{tmp95});
    ca_.Goto(&block80, phi_bb82_5, phi_bb82_6, phi_bb82_7, tmp101, phi_bb82_11, phi_bb82_13);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb87_5;
  TNode<IntPtrT> phi_bb87_6;
  TNode<IntPtrT> phi_bb87_7;
  TNode<String> phi_bb87_10;
  TNode<IntPtrT> phi_bb87_11;
  TNode<String> phi_bb87_13;
  TNode<ExternalOneByteString> tmp102;
  if (block87.is_used()) {
    ca_.Bind(&block87, &phi_bb87_5, &phi_bb87_6, &phi_bb87_7, &phi_bb87_10, &phi_bb87_11, &phi_bb87_13);
    compiler::CodeAssemblerLabel label103(&ca_);
    tmp102 = Cast_ExternalOneByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb87_13)}, &label103);
    ca_.Goto(&block90, phi_bb87_5, phi_bb87_6, phi_bb87_7, phi_bb87_10, phi_bb87_11, phi_bb87_13);
    if (label103.is_used()) {
      ca_.Bind(&label103);
      ca_.Goto(&block91, phi_bb87_5, phi_bb87_6, phi_bb87_7, phi_bb87_10, phi_bb87_11, phi_bb87_13);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb86_5;
  TNode<IntPtrT> phi_bb86_6;
  TNode<IntPtrT> phi_bb86_7;
  TNode<String> phi_bb86_10;
  TNode<IntPtrT> phi_bb86_11;
  TNode<String> phi_bb86_13;
  TNode<IntPtrT> tmp104;
  TNode<Smi> tmp105;
  TNode<IntPtrT> tmp106;
  TNode<Int32T> tmp107;
  TNode<Int32T> tmp108;
  TNode<Int32T> tmp109;
  TNode<Uint32T> tmp110;
  TNode<IntPtrT> tmp111;
  TNode<IntPtrT> tmp112;
  TNode<String> tmp113;
  if (block86.is_used()) {
    ca_.Bind(&block86, &phi_bb86_5, &phi_bb86_6, &phi_bb86_7, &phi_bb86_10, &phi_bb86_11, &phi_bb86_13);
    tmp104 = FromConstexpr_intptr_constexpr_int31_0(state_, 16);
    tmp105 = CodeStubAssembler(state_).LoadReference<Smi>(CodeStubAssembler::Reference{tmp99, tmp104});
    tmp106 = Convert_intptr_Smi_0(state_, TNode<Smi>{tmp105});
    tmp107 = CodeStubAssembler(state_).TruncateIntPtrToInt32(TNode<IntPtrT>{tmp106});
    tmp108 = CodeStubAssembler(state_).TruncateIntPtrToInt32(TNode<IntPtrT>{phi_bb86_11});
    tmp109 = CodeStubAssembler(state_).Int32Add(TNode<Int32T>{tmp108}, TNode<Int32T>{tmp107});
    tmp110 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp109});
    tmp111 = Convert_intptr_uint32_0(state_, TNode<Uint32T>{tmp110});
    tmp112 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp113 = CodeStubAssembler(state_).LoadReference<String>(CodeStubAssembler::Reference{tmp99, tmp112});
    ca_.Goto(&block80, phi_bb86_5, phi_bb86_6, phi_bb86_7, tmp113, tmp111, phi_bb86_13);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb91_5;
  TNode<IntPtrT> phi_bb91_6;
  TNode<IntPtrT> phi_bb91_7;
  TNode<String> phi_bb91_10;
  TNode<IntPtrT> phi_bb91_11;
  TNode<String> phi_bb91_13;
  TNode<ExternalTwoByteString> tmp114;
  if (block91.is_used()) {
    ca_.Bind(&block91, &phi_bb91_5, &phi_bb91_6, &phi_bb91_7, &phi_bb91_10, &phi_bb91_11, &phi_bb91_13);
    compiler::CodeAssemblerLabel label115(&ca_);
    tmp114 = Cast_ExternalTwoByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb91_13)}, &label115);
    ca_.Goto(&block98, phi_bb91_5, phi_bb91_6, phi_bb91_7, phi_bb91_10, phi_bb91_11, phi_bb91_13);
    if (label115.is_used()) {
      ca_.Bind(&label115);
      ca_.Goto(&block99, phi_bb91_5, phi_bb91_6, phi_bb91_7, phi_bb91_10, phi_bb91_11, phi_bb91_13);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb90_5;
  TNode<IntPtrT> phi_bb90_6;
  TNode<IntPtrT> phi_bb90_7;
  TNode<String> phi_bb90_10;
  TNode<IntPtrT> phi_bb90_11;
  TNode<String> phi_bb90_13;
  TNode<RawPtrT> tmp116;
  TNode<IntPtrT> tmp117;
  TNode<Int32T> tmp118;
  TNode<IntPtrT> tmp119;
  TNode<Union<HeapObject, TaggedIndex>> tmp120;
  TNode<IntPtrT> tmp121;
  TNode<IntPtrT> tmp122;
  TNode<Union<HeapObject, TaggedIndex>> tmp123;
  TNode<IntPtrT> tmp124;
  TNode<IntPtrT> tmp125;
  if (block90.is_used()) {
    ca_.Bind(&block90, &phi_bb90_5, &phi_bb90_6, &phi_bb90_7, &phi_bb90_10, &phi_bb90_11, &phi_bb90_13);
    tmp116 = Method_ExternalOneByteString_GetChars_0(state_, TNode<ExternalOneByteString>{tmp102});
    tmp117 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp118 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp102, tmp117});
    tmp119 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp118});
    std::tie(tmp120, tmp121, tmp122) = NewOffHeapConstSlice_char8_0(state_, TNode<RawPtrT>{tmp116}, TNode<IntPtrT>{tmp119}).Flatten();
    compiler::CodeAssemblerLabel label126(&ca_);
    std::tie(tmp123, tmp124, tmp125) = Subslice_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp120}, TNode<IntPtrT>{tmp121}, TNode<IntPtrT>{tmp122}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb90_11}, TNode<IntPtrT>{tmp73}, &label126).Flatten();
    ca_.Goto(&block94, phi_bb90_5, phi_bb90_6, phi_bb90_7, phi_bb90_10, phi_bb90_11, phi_bb90_13, phi_bb90_11);
    if (label126.is_used()) {
      ca_.Bind(&label126);
      ca_.Goto(&block95, phi_bb90_5, phi_bb90_6, phi_bb90_7, phi_bb90_10, phi_bb90_11, phi_bb90_13, phi_bb90_11);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb95_5;
  TNode<IntPtrT> phi_bb95_6;
  TNode<IntPtrT> phi_bb95_7;
  TNode<String> phi_bb95_10;
  TNode<IntPtrT> phi_bb95_11;
  TNode<String> phi_bb95_13;
  TNode<IntPtrT> phi_bb95_21;
  if (block95.is_used()) {
    ca_.Bind(&block95, &phi_bb95_5, &phi_bb95_6, &phi_bb95_7, &phi_bb95_10, &phi_bb95_11, &phi_bb95_13, &phi_bb95_21);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:315:63");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb94_5;
  TNode<IntPtrT> phi_bb94_6;
  TNode<IntPtrT> phi_bb94_7;
  TNode<String> phi_bb94_10;
  TNode<IntPtrT> phi_bb94_11;
  TNode<String> phi_bb94_13;
  TNode<IntPtrT> phi_bb94_21;
  if (block94.is_used()) {
    ca_.Bind(&block94, &phi_bb94_5, &phi_bb94_6, &phi_bb94_7, &phi_bb94_10, &phi_bb94_11, &phi_bb94_13, &phi_bb94_21);
    ca_.Goto(&block56, phi_bb94_5, phi_bb94_6, phi_bb94_7, tmp123, tmp124, tmp125);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb99_5;
  TNode<IntPtrT> phi_bb99_6;
  TNode<IntPtrT> phi_bb99_7;
  TNode<String> phi_bb99_10;
  TNode<IntPtrT> phi_bb99_11;
  TNode<String> phi_bb99_13;
  if (block99.is_used()) {
    ca_.Bind(&block99, &phi_bb99_5, &phi_bb99_6, &phi_bb99_7, &phi_bb99_10, &phi_bb99_11, &phi_bb99_13);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:323:9");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb98_5;
  TNode<IntPtrT> phi_bb98_6;
  TNode<IntPtrT> phi_bb98_7;
  TNode<String> phi_bb98_10;
  TNode<IntPtrT> phi_bb98_11;
  TNode<String> phi_bb98_13;
  TNode<RawPtrT> tmp127;
  TNode<IntPtrT> tmp128;
  TNode<Int32T> tmp129;
  TNode<IntPtrT> tmp130;
  TNode<Union<HeapObject, TaggedIndex>> tmp131;
  TNode<IntPtrT> tmp132;
  TNode<IntPtrT> tmp133;
  TNode<Union<HeapObject, TaggedIndex>> tmp134;
  TNode<IntPtrT> tmp135;
  TNode<IntPtrT> tmp136;
  if (block98.is_used()) {
    ca_.Bind(&block98, &phi_bb98_5, &phi_bb98_6, &phi_bb98_7, &phi_bb98_10, &phi_bb98_11, &phi_bb98_13);
    tmp127 = Method_ExternalTwoByteString_GetChars_0(state_, TNode<ExternalTwoByteString>{tmp114});
    tmp128 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp129 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp114, tmp128});
    tmp130 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp129});
    std::tie(tmp131, tmp132, tmp133) = NewOffHeapConstSlice_char16_0(state_, TNode<RawPtrT>{tmp127}, TNode<IntPtrT>{tmp130}).Flatten();
    compiler::CodeAssemblerLabel label137(&ca_);
    std::tie(tmp134, tmp135, tmp136) = Subslice_char16_0(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{tmp131}, TNode<IntPtrT>{tmp132}, TNode<IntPtrT>{tmp133}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb98_11}, TNode<IntPtrT>{tmp73}, &label137).Flatten();
    ca_.Goto(&block102, phi_bb98_5, phi_bb98_6, phi_bb98_7, phi_bb98_10, phi_bb98_11, phi_bb98_13, phi_bb98_11);
    if (label137.is_used()) {
      ca_.Bind(&label137);
      ca_.Goto(&block103, phi_bb98_5, phi_bb98_6, phi_bb98_7, phi_bb98_10, phi_bb98_11, phi_bb98_13, phi_bb98_11);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb103_5;
  TNode<IntPtrT> phi_bb103_6;
  TNode<IntPtrT> phi_bb103_7;
  TNode<String> phi_bb103_10;
  TNode<IntPtrT> phi_bb103_11;
  TNode<String> phi_bb103_13;
  TNode<IntPtrT> phi_bb103_21;
  if (block103.is_used()) {
    ca_.Bind(&block103, &phi_bb103_5, &phi_bb103_6, &phi_bb103_7, &phi_bb103_10, &phi_bb103_11, &phi_bb103_13, &phi_bb103_21);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:320:63");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb102_5;
  TNode<IntPtrT> phi_bb102_6;
  TNode<IntPtrT> phi_bb102_7;
  TNode<String> phi_bb102_10;
  TNode<IntPtrT> phi_bb102_11;
  TNode<String> phi_bb102_13;
  TNode<IntPtrT> phi_bb102_21;
  if (block102.is_used()) {
    ca_.Bind(&block102, &phi_bb102_5, &phi_bb102_6, &phi_bb102_7, &phi_bb102_10, &phi_bb102_11, &phi_bb102_13, &phi_bb102_21);
    ca_.Goto(&block54, phi_bb102_5, phi_bb102_6, phi_bb102_7, tmp134, tmp135, tmp136);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb80_5;
  TNode<IntPtrT> phi_bb80_6;
  TNode<IntPtrT> phi_bb80_7;
  TNode<String> phi_bb80_10;
  TNode<IntPtrT> phi_bb80_11;
  TNode<String> phi_bb80_13;
  if (block80.is_used()) {
    ca_.Bind(&block80, &phi_bb80_5, &phi_bb80_6, &phi_bb80_7, &phi_bb80_10, &phi_bb80_11, &phi_bb80_13);
    ca_.Goto(&block76, phi_bb80_5, phi_bb80_6, phi_bb80_7, phi_bb80_10, phi_bb80_11, phi_bb80_13);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb76_5;
  TNode<IntPtrT> phi_bb76_6;
  TNode<IntPtrT> phi_bb76_7;
  TNode<String> phi_bb76_10;
  TNode<IntPtrT> phi_bb76_11;
  TNode<String> phi_bb76_13;
  if (block76.is_used()) {
    ca_.Bind(&block76, &phi_bb76_5, &phi_bb76_6, &phi_bb76_7, &phi_bb76_10, &phi_bb76_11, &phi_bb76_13);
    ca_.Goto(&block59, phi_bb76_5, phi_bb76_6, phi_bb76_7, phi_bb76_10, phi_bb76_11);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb58_5;
  TNode<IntPtrT> phi_bb58_6;
  TNode<IntPtrT> phi_bb58_7;
  TNode<String> phi_bb58_10;
  TNode<IntPtrT> phi_bb58_11;
  if (block58.is_used()) {
    ca_.Bind(&block58, &phi_bb58_5, &phi_bb58_6, &phi_bb58_7, &phi_bb58_10, &phi_bb58_11);
    VerifiedUnreachable_0(state_);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb56_5;
  TNode<IntPtrT> phi_bb56_6;
  TNode<IntPtrT> phi_bb56_7;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb56_8;
  TNode<IntPtrT> phi_bb56_9;
  TNode<IntPtrT> phi_bb56_10;
  TNode<BoolT> tmp138;
  if (block56.is_used()) {
    ca_.Bind(&block56, &phi_bb56_5, &phi_bb56_6, &phi_bb56_7, &phi_bb56_8, &phi_bb56_9, &phi_bb56_10);
    tmp138 = Call_char8_char8_0(state_, TorqueStructIsSubstringAtFunctor_0{TNode<IntPtrT>{p_f.start}}, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{phi_bb56_5}, TNode<IntPtrT>{phi_bb56_6}, TNode<IntPtrT>{phi_bb56_7}, TorqueStructUnsafe_0{}}, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{phi_bb56_8}, TNode<IntPtrT>{phi_bb56_9}, TNode<IntPtrT>{phi_bb56_10}, TorqueStructUnsafe_0{}});
    ca_.Goto(&block1, tmp138);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb54_5;
  TNode<IntPtrT> phi_bb54_6;
  TNode<IntPtrT> phi_bb54_7;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb54_8;
  TNode<IntPtrT> phi_bb54_9;
  TNode<IntPtrT> phi_bb54_10;
  TNode<BoolT> tmp139;
  if (block54.is_used()) {
    ca_.Bind(&block54, &phi_bb54_5, &phi_bb54_6, &phi_bb54_7, &phi_bb54_8, &phi_bb54_9, &phi_bb54_10);
    tmp139 = Call_char8_char16_0(state_, TorqueStructIsSubstringAtFunctor_0{TNode<IntPtrT>{p_f.start}}, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{phi_bb54_5}, TNode<IntPtrT>{phi_bb54_6}, TNode<IntPtrT>{phi_bb54_7}, TorqueStructUnsafe_0{}}, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{phi_bb54_8}, TNode<IntPtrT>{phi_bb54_9}, TNode<IntPtrT>{phi_bb54_10}, TorqueStructUnsafe_0{}});
    ca_.Goto(&block1, tmp139);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb3_5;
  TNode<IntPtrT> phi_bb3_6;
  TNode<IntPtrT> phi_bb3_7;
  TNode<IntPtrT> tmp140;
  TNode<IntPtrT> tmp141;
  TNode<Int32T> tmp142;
  TNode<IntPtrT> tmp143;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_5, &phi_bb3_6, &phi_bb3_7);
    tmp140 = FromConstexpr_intptr_constexpr_IntegerLiteral_0(state_, IntegerLiteral(false, 0x0ull));
    tmp141 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp142 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp1, tmp141});
    tmp143 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp142});
    ca_.Goto(&block110, phi_bb3_5, phi_bb3_6, phi_bb3_7, tmp1, tmp140);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb110_5;
  TNode<IntPtrT> phi_bb110_6;
  TNode<IntPtrT> phi_bb110_7;
  TNode<String> phi_bb110_10;
  TNode<IntPtrT> phi_bb110_11;
  TNode<BoolT> tmp144;
  if (block110.is_used()) {
    ca_.Bind(&block110, &phi_bb110_5, &phi_bb110_6, &phi_bb110_7, &phi_bb110_10, &phi_bb110_11);
    tmp144 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Branch(tmp144, &block108, std::vector<compiler::Node*>{phi_bb110_5, phi_bb110_6, phi_bb110_7, phi_bb110_10, phi_bb110_11}, &block109, std::vector<compiler::Node*>{phi_bb110_5, phi_bb110_6, phi_bb110_7, phi_bb110_10, phi_bb110_11});
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb108_5;
  TNode<IntPtrT> phi_bb108_6;
  TNode<IntPtrT> phi_bb108_7;
  TNode<String> phi_bb108_10;
  TNode<IntPtrT> phi_bb108_11;
  TNode<SeqOneByteString> tmp145;
  if (block108.is_used()) {
    ca_.Bind(&block108, &phi_bb108_5, &phi_bb108_6, &phi_bb108_7, &phi_bb108_10, &phi_bb108_11);
    compiler::CodeAssemblerLabel label146(&ca_);
    tmp145 = Cast_SeqOneByteString_1(state_, TNode<String>{phi_bb108_10}, &label146);
    ca_.Goto(&block113, phi_bb108_5, phi_bb108_6, phi_bb108_7, phi_bb108_10, phi_bb108_11, phi_bb108_10, phi_bb108_10);
    if (label146.is_used()) {
      ca_.Bind(&label146);
      ca_.Goto(&block114, phi_bb108_5, phi_bb108_6, phi_bb108_7, phi_bb108_10, phi_bb108_11, phi_bb108_10, phi_bb108_10);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb114_5;
  TNode<IntPtrT> phi_bb114_6;
  TNode<IntPtrT> phi_bb114_7;
  TNode<String> phi_bb114_10;
  TNode<IntPtrT> phi_bb114_11;
  TNode<String> phi_bb114_13;
  TNode<String> phi_bb114_14;
  TNode<SeqTwoByteString> tmp147;
  if (block114.is_used()) {
    ca_.Bind(&block114, &phi_bb114_5, &phi_bb114_6, &phi_bb114_7, &phi_bb114_10, &phi_bb114_11, &phi_bb114_13, &phi_bb114_14);
    compiler::CodeAssemblerLabel label148(&ca_);
    tmp147 = Cast_SeqTwoByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb114_13)}, &label148);
    ca_.Goto(&block121, phi_bb114_5, phi_bb114_6, phi_bb114_7, phi_bb114_10, phi_bb114_11, phi_bb114_13);
    if (label148.is_used()) {
      ca_.Bind(&label148);
      ca_.Goto(&block122, phi_bb114_5, phi_bb114_6, phi_bb114_7, phi_bb114_10, phi_bb114_11, phi_bb114_13);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb113_5;
  TNode<IntPtrT> phi_bb113_6;
  TNode<IntPtrT> phi_bb113_7;
  TNode<String> phi_bb113_10;
  TNode<IntPtrT> phi_bb113_11;
  TNode<String> phi_bb113_13;
  TNode<String> phi_bb113_14;
  TNode<Union<HeapObject, TaggedIndex>> tmp149;
  TNode<IntPtrT> tmp150;
  TNode<IntPtrT> tmp151;
  TNode<Union<HeapObject, TaggedIndex>> tmp152;
  TNode<IntPtrT> tmp153;
  TNode<IntPtrT> tmp154;
  if (block113.is_used()) {
    ca_.Bind(&block113, &phi_bb113_5, &phi_bb113_6, &phi_bb113_7, &phi_bb113_10, &phi_bb113_11, &phi_bb113_13, &phi_bb113_14);
    std::tie(tmp149, tmp150, tmp151) = FieldSliceSeqOneByteStringChars_0(state_, TNode<SeqOneByteString>{tmp145}).Flatten();
    compiler::CodeAssemblerLabel label155(&ca_);
    std::tie(tmp152, tmp153, tmp154) = Subslice_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp149}, TNode<IntPtrT>{tmp150}, TNode<IntPtrT>{tmp151}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb113_11}, TNode<IntPtrT>{tmp143}, &label155).Flatten();
    ca_.Goto(&block117, phi_bb113_5, phi_bb113_6, phi_bb113_7, phi_bb113_10, phi_bb113_11, phi_bb113_13, phi_bb113_11);
    if (label155.is_used()) {
      ca_.Bind(&label155);
      ca_.Goto(&block118, phi_bb113_5, phi_bb113_6, phi_bb113_7, phi_bb113_10, phi_bb113_11, phi_bb113_13, phi_bb113_11);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb118_5;
  TNode<IntPtrT> phi_bb118_6;
  TNode<IntPtrT> phi_bb118_7;
  TNode<String> phi_bb118_10;
  TNode<IntPtrT> phi_bb118_11;
  TNode<String> phi_bb118_13;
  TNode<IntPtrT> phi_bb118_18;
  if (block118.is_used()) {
    ca_.Bind(&block118, &phi_bb118_5, &phi_bb118_6, &phi_bb118_7, &phi_bb118_10, &phi_bb118_11, &phi_bb118_13, &phi_bb118_18);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:292:67");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb117_5;
  TNode<IntPtrT> phi_bb117_6;
  TNode<IntPtrT> phi_bb117_7;
  TNode<String> phi_bb117_10;
  TNode<IntPtrT> phi_bb117_11;
  TNode<String> phi_bb117_13;
  TNode<IntPtrT> phi_bb117_18;
  if (block117.is_used()) {
    ca_.Bind(&block117, &phi_bb117_5, &phi_bb117_6, &phi_bb117_7, &phi_bb117_10, &phi_bb117_11, &phi_bb117_13, &phi_bb117_18);
    ca_.Goto(&block107, phi_bb117_5, phi_bb117_6, phi_bb117_7, tmp152, tmp153, tmp154);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb122_5;
  TNode<IntPtrT> phi_bb122_6;
  TNode<IntPtrT> phi_bb122_7;
  TNode<String> phi_bb122_10;
  TNode<IntPtrT> phi_bb122_11;
  TNode<String> phi_bb122_13;
  TNode<ThinString> tmp156;
  if (block122.is_used()) {
    ca_.Bind(&block122, &phi_bb122_5, &phi_bb122_6, &phi_bb122_7, &phi_bb122_10, &phi_bb122_11, &phi_bb122_13);
    compiler::CodeAssemblerLabel label157(&ca_);
    tmp156 = Cast_ThinString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb122_13)}, &label157);
    ca_.Goto(&block129, phi_bb122_5, phi_bb122_6, phi_bb122_7, phi_bb122_10, phi_bb122_11, phi_bb122_13);
    if (label157.is_used()) {
      ca_.Bind(&label157);
      ca_.Goto(&block130, phi_bb122_5, phi_bb122_6, phi_bb122_7, phi_bb122_10, phi_bb122_11, phi_bb122_13);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb121_5;
  TNode<IntPtrT> phi_bb121_6;
  TNode<IntPtrT> phi_bb121_7;
  TNode<String> phi_bb121_10;
  TNode<IntPtrT> phi_bb121_11;
  TNode<String> phi_bb121_13;
  TNode<Union<HeapObject, TaggedIndex>> tmp158;
  TNode<IntPtrT> tmp159;
  TNode<IntPtrT> tmp160;
  TNode<Union<HeapObject, TaggedIndex>> tmp161;
  TNode<IntPtrT> tmp162;
  TNode<IntPtrT> tmp163;
  if (block121.is_used()) {
    ca_.Bind(&block121, &phi_bb121_5, &phi_bb121_6, &phi_bb121_7, &phi_bb121_10, &phi_bb121_11, &phi_bb121_13);
    std::tie(tmp158, tmp159, tmp160) = FieldSliceSeqTwoByteStringChars_0(state_, TNode<SeqTwoByteString>{tmp147}).Flatten();
    compiler::CodeAssemblerLabel label164(&ca_);
    std::tie(tmp161, tmp162, tmp163) = Subslice_char16_0(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{tmp158}, TNode<IntPtrT>{tmp159}, TNode<IntPtrT>{tmp160}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb121_11}, TNode<IntPtrT>{tmp143}, &label164).Flatten();
    ca_.Goto(&block125, phi_bb121_5, phi_bb121_6, phi_bb121_7, phi_bb121_10, phi_bb121_11, phi_bb121_13, phi_bb121_11);
    if (label164.is_used()) {
      ca_.Bind(&label164);
      ca_.Goto(&block126, phi_bb121_5, phi_bb121_6, phi_bb121_7, phi_bb121_10, phi_bb121_11, phi_bb121_13, phi_bb121_11);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb126_5;
  TNode<IntPtrT> phi_bb126_6;
  TNode<IntPtrT> phi_bb126_7;
  TNode<String> phi_bb126_10;
  TNode<IntPtrT> phi_bb126_11;
  TNode<String> phi_bb126_13;
  TNode<IntPtrT> phi_bb126_18;
  if (block126.is_used()) {
    ca_.Bind(&block126, &phi_bb126_5, &phi_bb126_6, &phi_bb126_7, &phi_bb126_10, &phi_bb126_11, &phi_bb126_13, &phi_bb126_18);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:295:67");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb125_5;
  TNode<IntPtrT> phi_bb125_6;
  TNode<IntPtrT> phi_bb125_7;
  TNode<String> phi_bb125_10;
  TNode<IntPtrT> phi_bb125_11;
  TNode<String> phi_bb125_13;
  TNode<IntPtrT> phi_bb125_18;
  if (block125.is_used()) {
    ca_.Bind(&block125, &phi_bb125_5, &phi_bb125_6, &phi_bb125_7, &phi_bb125_10, &phi_bb125_11, &phi_bb125_13, &phi_bb125_18);
    ca_.Goto(&block105, phi_bb125_5, phi_bb125_6, phi_bb125_7, tmp161, tmp162, tmp163);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb130_5;
  TNode<IntPtrT> phi_bb130_6;
  TNode<IntPtrT> phi_bb130_7;
  TNode<String> phi_bb130_10;
  TNode<IntPtrT> phi_bb130_11;
  TNode<String> phi_bb130_13;
  TNode<ConsString> tmp165;
  if (block130.is_used()) {
    ca_.Bind(&block130, &phi_bb130_5, &phi_bb130_6, &phi_bb130_7, &phi_bb130_10, &phi_bb130_11, &phi_bb130_13);
    compiler::CodeAssemblerLabel label166(&ca_);
    tmp165 = Cast_ConsString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb130_13)}, &label166);
    ca_.Goto(&block133, phi_bb130_5, phi_bb130_6, phi_bb130_7, phi_bb130_10, phi_bb130_11, phi_bb130_13);
    if (label166.is_used()) {
      ca_.Bind(&label166);
      ca_.Goto(&block134, phi_bb130_5, phi_bb130_6, phi_bb130_7, phi_bb130_10, phi_bb130_11, phi_bb130_13);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb129_5;
  TNode<IntPtrT> phi_bb129_6;
  TNode<IntPtrT> phi_bb129_7;
  TNode<String> phi_bb129_10;
  TNode<IntPtrT> phi_bb129_11;
  TNode<String> phi_bb129_13;
  TNode<IntPtrT> tmp167;
  TNode<InternalizedString> tmp168;
  if (block129.is_used()) {
    ca_.Bind(&block129, &phi_bb129_5, &phi_bb129_6, &phi_bb129_7, &phi_bb129_10, &phi_bb129_11, &phi_bb129_13);
    tmp167 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp168 = CodeStubAssembler(state_).LoadReference<InternalizedString>(CodeStubAssembler::Reference{tmp156, tmp167});
    ca_.Goto(&block127, phi_bb129_5, phi_bb129_6, phi_bb129_7, tmp168, phi_bb129_11, phi_bb129_13);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb134_5;
  TNode<IntPtrT> phi_bb134_6;
  TNode<IntPtrT> phi_bb134_7;
  TNode<String> phi_bb134_10;
  TNode<IntPtrT> phi_bb134_11;
  TNode<String> phi_bb134_13;
  TNode<SlicedString> tmp169;
  if (block134.is_used()) {
    ca_.Bind(&block134, &phi_bb134_5, &phi_bb134_6, &phi_bb134_7, &phi_bb134_10, &phi_bb134_11, &phi_bb134_13);
    compiler::CodeAssemblerLabel label170(&ca_);
    tmp169 = Cast_SlicedString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb134_13)}, &label170);
    ca_.Goto(&block137, phi_bb134_5, phi_bb134_6, phi_bb134_7, phi_bb134_10, phi_bb134_11, phi_bb134_13);
    if (label170.is_used()) {
      ca_.Bind(&label170);
      ca_.Goto(&block138, phi_bb134_5, phi_bb134_6, phi_bb134_7, phi_bb134_10, phi_bb134_11, phi_bb134_13);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb133_5;
  TNode<IntPtrT> phi_bb133_6;
  TNode<IntPtrT> phi_bb133_7;
  TNode<String> phi_bb133_10;
  TNode<IntPtrT> phi_bb133_11;
  TNode<String> phi_bb133_13;
  TNode<String> tmp171;
  if (block133.is_used()) {
    ca_.Bind(&block133, &phi_bb133_5, &phi_bb133_6, &phi_bb133_7, &phi_bb133_10, &phi_bb133_11, &phi_bb133_13);
    tmp171 = Flatten_1(state_, TNode<ConsString>{tmp165});
    ca_.Goto(&block131, phi_bb133_5, phi_bb133_6, phi_bb133_7, tmp171, phi_bb133_11, phi_bb133_13);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb138_5;
  TNode<IntPtrT> phi_bb138_6;
  TNode<IntPtrT> phi_bb138_7;
  TNode<String> phi_bb138_10;
  TNode<IntPtrT> phi_bb138_11;
  TNode<String> phi_bb138_13;
  TNode<ExternalOneByteString> tmp172;
  if (block138.is_used()) {
    ca_.Bind(&block138, &phi_bb138_5, &phi_bb138_6, &phi_bb138_7, &phi_bb138_10, &phi_bb138_11, &phi_bb138_13);
    compiler::CodeAssemblerLabel label173(&ca_);
    tmp172 = Cast_ExternalOneByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb138_13)}, &label173);
    ca_.Goto(&block141, phi_bb138_5, phi_bb138_6, phi_bb138_7, phi_bb138_10, phi_bb138_11, phi_bb138_13);
    if (label173.is_used()) {
      ca_.Bind(&label173);
      ca_.Goto(&block142, phi_bb138_5, phi_bb138_6, phi_bb138_7, phi_bb138_10, phi_bb138_11, phi_bb138_13);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb137_5;
  TNode<IntPtrT> phi_bb137_6;
  TNode<IntPtrT> phi_bb137_7;
  TNode<String> phi_bb137_10;
  TNode<IntPtrT> phi_bb137_11;
  TNode<String> phi_bb137_13;
  TNode<IntPtrT> tmp174;
  TNode<Smi> tmp175;
  TNode<IntPtrT> tmp176;
  TNode<Int32T> tmp177;
  TNode<Int32T> tmp178;
  TNode<Int32T> tmp179;
  TNode<Uint32T> tmp180;
  TNode<IntPtrT> tmp181;
  TNode<IntPtrT> tmp182;
  TNode<String> tmp183;
  if (block137.is_used()) {
    ca_.Bind(&block137, &phi_bb137_5, &phi_bb137_6, &phi_bb137_7, &phi_bb137_10, &phi_bb137_11, &phi_bb137_13);
    tmp174 = FromConstexpr_intptr_constexpr_int31_0(state_, 16);
    tmp175 = CodeStubAssembler(state_).LoadReference<Smi>(CodeStubAssembler::Reference{tmp169, tmp174});
    tmp176 = Convert_intptr_Smi_0(state_, TNode<Smi>{tmp175});
    tmp177 = CodeStubAssembler(state_).TruncateIntPtrToInt32(TNode<IntPtrT>{tmp176});
    tmp178 = CodeStubAssembler(state_).TruncateIntPtrToInt32(TNode<IntPtrT>{phi_bb137_11});
    tmp179 = CodeStubAssembler(state_).Int32Add(TNode<Int32T>{tmp178}, TNode<Int32T>{tmp177});
    tmp180 = CodeStubAssembler(state_).Unsigned(TNode<Int32T>{tmp179});
    tmp181 = Convert_intptr_uint32_0(state_, TNode<Uint32T>{tmp180});
    tmp182 = FromConstexpr_intptr_constexpr_int31_0(state_, 12);
    tmp183 = CodeStubAssembler(state_).LoadReference<String>(CodeStubAssembler::Reference{tmp169, tmp182});
    ca_.Goto(&block131, phi_bb137_5, phi_bb137_6, phi_bb137_7, tmp183, tmp181, phi_bb137_13);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb142_5;
  TNode<IntPtrT> phi_bb142_6;
  TNode<IntPtrT> phi_bb142_7;
  TNode<String> phi_bb142_10;
  TNode<IntPtrT> phi_bb142_11;
  TNode<String> phi_bb142_13;
  TNode<ExternalTwoByteString> tmp184;
  if (block142.is_used()) {
    ca_.Bind(&block142, &phi_bb142_5, &phi_bb142_6, &phi_bb142_7, &phi_bb142_10, &phi_bb142_11, &phi_bb142_13);
    compiler::CodeAssemblerLabel label185(&ca_);
    tmp184 = Cast_ExternalTwoByteString_1(state_, TNode<String>{ca_.UncheckedCast<String>(phi_bb142_13)}, &label185);
    ca_.Goto(&block149, phi_bb142_5, phi_bb142_6, phi_bb142_7, phi_bb142_10, phi_bb142_11, phi_bb142_13);
    if (label185.is_used()) {
      ca_.Bind(&label185);
      ca_.Goto(&block150, phi_bb142_5, phi_bb142_6, phi_bb142_7, phi_bb142_10, phi_bb142_11, phi_bb142_13);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb141_5;
  TNode<IntPtrT> phi_bb141_6;
  TNode<IntPtrT> phi_bb141_7;
  TNode<String> phi_bb141_10;
  TNode<IntPtrT> phi_bb141_11;
  TNode<String> phi_bb141_13;
  TNode<RawPtrT> tmp186;
  TNode<IntPtrT> tmp187;
  TNode<Int32T> tmp188;
  TNode<IntPtrT> tmp189;
  TNode<Union<HeapObject, TaggedIndex>> tmp190;
  TNode<IntPtrT> tmp191;
  TNode<IntPtrT> tmp192;
  TNode<Union<HeapObject, TaggedIndex>> tmp193;
  TNode<IntPtrT> tmp194;
  TNode<IntPtrT> tmp195;
  if (block141.is_used()) {
    ca_.Bind(&block141, &phi_bb141_5, &phi_bb141_6, &phi_bb141_7, &phi_bb141_10, &phi_bb141_11, &phi_bb141_13);
    tmp186 = Method_ExternalOneByteString_GetChars_0(state_, TNode<ExternalOneByteString>{tmp172});
    tmp187 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp188 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp172, tmp187});
    tmp189 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp188});
    std::tie(tmp190, tmp191, tmp192) = NewOffHeapConstSlice_char8_0(state_, TNode<RawPtrT>{tmp186}, TNode<IntPtrT>{tmp189}).Flatten();
    compiler::CodeAssemblerLabel label196(&ca_);
    std::tie(tmp193, tmp194, tmp195) = Subslice_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{tmp190}, TNode<IntPtrT>{tmp191}, TNode<IntPtrT>{tmp192}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb141_11}, TNode<IntPtrT>{tmp143}, &label196).Flatten();
    ca_.Goto(&block145, phi_bb141_5, phi_bb141_6, phi_bb141_7, phi_bb141_10, phi_bb141_11, phi_bb141_13, phi_bb141_11);
    if (label196.is_used()) {
      ca_.Bind(&label196);
      ca_.Goto(&block146, phi_bb141_5, phi_bb141_6, phi_bb141_7, phi_bb141_10, phi_bb141_11, phi_bb141_13, phi_bb141_11);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb146_5;
  TNode<IntPtrT> phi_bb146_6;
  TNode<IntPtrT> phi_bb146_7;
  TNode<String> phi_bb146_10;
  TNode<IntPtrT> phi_bb146_11;
  TNode<String> phi_bb146_13;
  TNode<IntPtrT> phi_bb146_21;
  if (block146.is_used()) {
    ca_.Bind(&block146, &phi_bb146_5, &phi_bb146_6, &phi_bb146_7, &phi_bb146_10, &phi_bb146_11, &phi_bb146_13, &phi_bb146_21);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:315:63");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb145_5;
  TNode<IntPtrT> phi_bb145_6;
  TNode<IntPtrT> phi_bb145_7;
  TNode<String> phi_bb145_10;
  TNode<IntPtrT> phi_bb145_11;
  TNode<String> phi_bb145_13;
  TNode<IntPtrT> phi_bb145_21;
  if (block145.is_used()) {
    ca_.Bind(&block145, &phi_bb145_5, &phi_bb145_6, &phi_bb145_7, &phi_bb145_10, &phi_bb145_11, &phi_bb145_13, &phi_bb145_21);
    ca_.Goto(&block107, phi_bb145_5, phi_bb145_6, phi_bb145_7, tmp193, tmp194, tmp195);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb150_5;
  TNode<IntPtrT> phi_bb150_6;
  TNode<IntPtrT> phi_bb150_7;
  TNode<String> phi_bb150_10;
  TNode<IntPtrT> phi_bb150_11;
  TNode<String> phi_bb150_13;
  if (block150.is_used()) {
    ca_.Bind(&block150, &phi_bb150_5, &phi_bb150_6, &phi_bb150_7, &phi_bb150_10, &phi_bb150_11, &phi_bb150_13);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:323:9");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb149_5;
  TNode<IntPtrT> phi_bb149_6;
  TNode<IntPtrT> phi_bb149_7;
  TNode<String> phi_bb149_10;
  TNode<IntPtrT> phi_bb149_11;
  TNode<String> phi_bb149_13;
  TNode<RawPtrT> tmp197;
  TNode<IntPtrT> tmp198;
  TNode<Int32T> tmp199;
  TNode<IntPtrT> tmp200;
  TNode<Union<HeapObject, TaggedIndex>> tmp201;
  TNode<IntPtrT> tmp202;
  TNode<IntPtrT> tmp203;
  TNode<Union<HeapObject, TaggedIndex>> tmp204;
  TNode<IntPtrT> tmp205;
  TNode<IntPtrT> tmp206;
  if (block149.is_used()) {
    ca_.Bind(&block149, &phi_bb149_5, &phi_bb149_6, &phi_bb149_7, &phi_bb149_10, &phi_bb149_11, &phi_bb149_13);
    tmp197 = Method_ExternalTwoByteString_GetChars_0(state_, TNode<ExternalTwoByteString>{tmp184});
    tmp198 = FromConstexpr_intptr_constexpr_int31_0(state_, 8);
    tmp199 = CodeStubAssembler(state_).LoadReference<Int32T>(CodeStubAssembler::Reference{tmp184, tmp198});
    tmp200 = Convert_intptr_int32_0(state_, TNode<Int32T>{tmp199});
    std::tie(tmp201, tmp202, tmp203) = NewOffHeapConstSlice_char16_0(state_, TNode<RawPtrT>{tmp197}, TNode<IntPtrT>{tmp200}).Flatten();
    compiler::CodeAssemblerLabel label207(&ca_);
    std::tie(tmp204, tmp205, tmp206) = Subslice_char16_0(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{tmp201}, TNode<IntPtrT>{tmp202}, TNode<IntPtrT>{tmp203}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{phi_bb149_11}, TNode<IntPtrT>{tmp143}, &label207).Flatten();
    ca_.Goto(&block153, phi_bb149_5, phi_bb149_6, phi_bb149_7, phi_bb149_10, phi_bb149_11, phi_bb149_13, phi_bb149_11);
    if (label207.is_used()) {
      ca_.Bind(&label207);
      ca_.Goto(&block154, phi_bb149_5, phi_bb149_6, phi_bb149_7, phi_bb149_10, phi_bb149_11, phi_bb149_13, phi_bb149_11);
    }
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb154_5;
  TNode<IntPtrT> phi_bb154_6;
  TNode<IntPtrT> phi_bb154_7;
  TNode<String> phi_bb154_10;
  TNode<IntPtrT> phi_bb154_11;
  TNode<String> phi_bb154_13;
  TNode<IntPtrT> phi_bb154_21;
  if (block154.is_used()) {
    ca_.Bind(&block154, &phi_bb154_5, &phi_bb154_6, &phi_bb154_7, &phi_bb154_10, &phi_bb154_11, &phi_bb154_13, &phi_bb154_21);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/objects/string.tq:320:63");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb153_5;
  TNode<IntPtrT> phi_bb153_6;
  TNode<IntPtrT> phi_bb153_7;
  TNode<String> phi_bb153_10;
  TNode<IntPtrT> phi_bb153_11;
  TNode<String> phi_bb153_13;
  TNode<IntPtrT> phi_bb153_21;
  if (block153.is_used()) {
    ca_.Bind(&block153, &phi_bb153_5, &phi_bb153_6, &phi_bb153_7, &phi_bb153_10, &phi_bb153_11, &phi_bb153_13, &phi_bb153_21);
    ca_.Goto(&block105, phi_bb153_5, phi_bb153_6, phi_bb153_7, tmp204, tmp205, tmp206);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb131_5;
  TNode<IntPtrT> phi_bb131_6;
  TNode<IntPtrT> phi_bb131_7;
  TNode<String> phi_bb131_10;
  TNode<IntPtrT> phi_bb131_11;
  TNode<String> phi_bb131_13;
  if (block131.is_used()) {
    ca_.Bind(&block131, &phi_bb131_5, &phi_bb131_6, &phi_bb131_7, &phi_bb131_10, &phi_bb131_11, &phi_bb131_13);
    ca_.Goto(&block127, phi_bb131_5, phi_bb131_6, phi_bb131_7, phi_bb131_10, phi_bb131_11, phi_bb131_13);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb127_5;
  TNode<IntPtrT> phi_bb127_6;
  TNode<IntPtrT> phi_bb127_7;
  TNode<String> phi_bb127_10;
  TNode<IntPtrT> phi_bb127_11;
  TNode<String> phi_bb127_13;
  if (block127.is_used()) {
    ca_.Bind(&block127, &phi_bb127_5, &phi_bb127_6, &phi_bb127_7, &phi_bb127_10, &phi_bb127_11, &phi_bb127_13);
    ca_.Goto(&block110, phi_bb127_5, phi_bb127_6, phi_bb127_7, phi_bb127_10, phi_bb127_11);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb109_5;
  TNode<IntPtrT> phi_bb109_6;
  TNode<IntPtrT> phi_bb109_7;
  TNode<String> phi_bb109_10;
  TNode<IntPtrT> phi_bb109_11;
  if (block109.is_used()) {
    ca_.Bind(&block109, &phi_bb109_5, &phi_bb109_6, &phi_bb109_7, &phi_bb109_10, &phi_bb109_11);
    VerifiedUnreachable_0(state_);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb107_5;
  TNode<IntPtrT> phi_bb107_6;
  TNode<IntPtrT> phi_bb107_7;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb107_8;
  TNode<IntPtrT> phi_bb107_9;
  TNode<IntPtrT> phi_bb107_10;
  TNode<BoolT> tmp208;
  if (block107.is_used()) {
    ca_.Bind(&block107, &phi_bb107_5, &phi_bb107_6, &phi_bb107_7, &phi_bb107_8, &phi_bb107_9, &phi_bb107_10);
    tmp208 = Call_char16_char8_0(state_, TorqueStructIsSubstringAtFunctor_0{TNode<IntPtrT>{p_f.start}}, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{phi_bb107_5}, TNode<IntPtrT>{phi_bb107_6}, TNode<IntPtrT>{phi_bb107_7}, TorqueStructUnsafe_0{}}, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{phi_bb107_8}, TNode<IntPtrT>{phi_bb107_9}, TNode<IntPtrT>{phi_bb107_10}, TorqueStructUnsafe_0{}});
    ca_.Goto(&block1, tmp208);
  }

  TNode<Union<HeapObject, TaggedIndex>> phi_bb105_5;
  TNode<IntPtrT> phi_bb105_6;
  TNode<IntPtrT> phi_bb105_7;
  TNode<Union<HeapObject, TaggedIndex>> phi_bb105_8;
  TNode<IntPtrT> phi_bb105_9;
  TNode<IntPtrT> phi_bb105_10;
  TNode<BoolT> tmp209;
  if (block105.is_used()) {
    ca_.Bind(&block105, &phi_bb105_5, &phi_bb105_6, &phi_bb105_7, &phi_bb105_8, &phi_bb105_9, &phi_bb105_10);
    tmp209 = Call_char16_char16_0(state_, TorqueStructIsSubstringAtFunctor_0{TNode<IntPtrT>{p_f.start}}, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{phi_bb105_5}, TNode<IntPtrT>{phi_bb105_6}, TNode<IntPtrT>{phi_bb105_7}, TorqueStructUnsafe_0{}}, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{phi_bb105_8}, TNode<IntPtrT>{phi_bb105_9}, TNode<IntPtrT>{phi_bb105_10}, TorqueStructUnsafe_0{}});
    ca_.Goto(&block1, tmp209);
  }

  TNode<BoolT> phi_bb1_3;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_3);
    ca_.Goto(&block155);
  }

    ca_.Bind(&block155);
  return TNode<BoolT>{phi_bb1_3};
}

// https://crsrc.org/c/v8/src/builtins/string-endswith.tq?l=32&c=10
TNode<BoolT> IsSubstringAt_char8_char8_0(compiler::CodeAssemblerState* state_, TorqueStructSlice_char8_ConstReference_char8_0 p_string, TorqueStructSlice_char8_ConstReference_char8_0 p_searchStr, TNode<IntPtrT> p_start) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Union<HeapObject, TaggedIndex>> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label3(&ca_);
    std::tie(tmp0, tmp1, tmp2) = Subslice_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{p_string.object}, TNode<IntPtrT>{p_string.offset}, TNode<IntPtrT>{p_string.length}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{p_start}, TNode<IntPtrT>{p_searchStr.length}, &label3).Flatten();
    ca_.Goto(&block4);
    if (label3.is_used()) {
      ca_.Bind(&label3);
      ca_.Goto(&block5);
    }
  }

  TNode<BoolT> tmp4;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp4 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block1, tmp4);
  }

  TNode<IntPtrT> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<IntPtrT> tmp7;
  TNode<IntPtrT> tmp8;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp5 = TimesSizeOf_char8_0(state_, TNode<IntPtrT>{tmp2});
    tmp6 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp1}, TNode<IntPtrT>{tmp5});
    tmp7 = TimesSizeOf_char8_0(state_, TNode<IntPtrT>{p_searchStr.length});
    tmp8 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_searchStr.offset}, TNode<IntPtrT>{tmp7});
    ca_.Goto(&block10, tmp1, p_searchStr.offset);
  }

  TNode<IntPtrT> phi_bb10_11;
  TNode<IntPtrT> phi_bb10_14;
  TNode<BoolT> tmp9;
  if (block10.is_used()) {
    ca_.Bind(&block10, &phi_bb10_11, &phi_bb10_14);
    tmp9 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Branch(tmp9, &block8, std::vector<compiler::Node*>{phi_bb10_11, phi_bb10_14}, &block9, std::vector<compiler::Node*>{phi_bb10_11, phi_bb10_14});
  }

  TNode<IntPtrT> phi_bb8_11;
  TNode<IntPtrT> phi_bb8_14;
  TNode<BoolT> tmp10;
  if (block8.is_used()) {
    ca_.Bind(&block8, &phi_bb8_11, &phi_bb8_14);
    tmp10 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb8_14}, TNode<IntPtrT>{tmp8});
    ca_.Branch(tmp10, &block15, std::vector<compiler::Node*>{phi_bb8_11, phi_bb8_14}, &block16, std::vector<compiler::Node*>{phi_bb8_11, phi_bb8_14});
  }

  TNode<IntPtrT> phi_bb15_11;
  TNode<IntPtrT> phi_bb15_14;
  TNode<BoolT> tmp11;
  if (block15.is_used()) {
    ca_.Bind(&block15, &phi_bb15_11, &phi_bb15_14);
    tmp11 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block1, tmp11);
  }

  TNode<IntPtrT> phi_bb16_11;
  TNode<IntPtrT> phi_bb16_14;
  TNode<Union<HeapObject, TaggedIndex>> tmp12;
  TNode<IntPtrT> tmp13;
  TNode<IntPtrT> tmp14;
  TNode<IntPtrT> tmp15;
  TNode<Uint8T> tmp16;
  TNode<BoolT> tmp17;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_11, &phi_bb16_14);
    std::tie(tmp12, tmp13) = NewReference_char8_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_searchStr.object}, TNode<IntPtrT>{phi_bb16_14}).Flatten();
    tmp14 = FromConstexpr_intptr_constexpr_int31_0(state_, kUInt8Size);
    tmp15 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb16_14}, TNode<IntPtrT>{tmp14});
    tmp16 = CodeStubAssembler(state_).LoadReference<Uint8T>(CodeStubAssembler::Reference{tmp12, tmp13});
    tmp17 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb16_11}, TNode<IntPtrT>{tmp6});
    ca_.Branch(tmp17, &block23, std::vector<compiler::Node*>{phi_bb16_11}, &block24, std::vector<compiler::Node*>{phi_bb16_11});
  }

  TNode<IntPtrT> phi_bb23_11;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_11);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/string-endswith.tq:16:56");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb24_11;
  TNode<Union<HeapObject, TaggedIndex>> tmp18;
  TNode<IntPtrT> tmp19;
  TNode<IntPtrT> tmp20;
  TNode<IntPtrT> tmp21;
  TNode<Uint8T> tmp22;
  TNode<BoolT> tmp23;
  if (block24.is_used()) {
    ca_.Bind(&block24, &phi_bb24_11);
    std::tie(tmp18, tmp19) = NewReference_char8_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp0}, TNode<IntPtrT>{phi_bb24_11}).Flatten();
    tmp20 = FromConstexpr_intptr_constexpr_int31_0(state_, kUInt8Size);
    tmp21 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb24_11}, TNode<IntPtrT>{tmp20});
    tmp22 = CodeStubAssembler(state_).LoadReference<Uint8T>(CodeStubAssembler::Reference{tmp18, tmp19});
    tmp23 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp16}, TNode<Uint32T>{tmp22});
    ca_.Branch(tmp23, &block27, std::vector<compiler::Node*>{}, &block28, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp24;
  if (block27.is_used()) {
    ca_.Bind(&block27);
    tmp24 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block1, tmp24);
  }

  if (block28.is_used()) {
    ca_.Bind(&block28);
    ca_.Goto(&block10, tmp21, tmp15);
  }

  TNode<IntPtrT> phi_bb9_11;
  TNode<IntPtrT> phi_bb9_14;
  if (block9.is_used()) {
    ca_.Bind(&block9, &phi_bb9_11, &phi_bb9_14);
    VerifiedUnreachable_0(state_);
  }

  TNode<BoolT> phi_bb1_7;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_7);
    ca_.Goto(&block29, phi_bb1_7);
  }

  TNode<BoolT> phi_bb29_7;
    ca_.Bind(&block29, &phi_bb29_7);
  return TNode<BoolT>{phi_bb29_7};
}

// https://crsrc.org/c/v8/src/builtins/string-endswith.tq?l=32&c=10
TNode<BoolT> IsSubstringAt_char8_char16_0(compiler::CodeAssemblerState* state_, TorqueStructSlice_char8_ConstReference_char8_0 p_string, TorqueStructSlice_char16_ConstReference_char16_0 p_searchStr, TNode<IntPtrT> p_start) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Union<HeapObject, TaggedIndex>> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label3(&ca_);
    std::tie(tmp0, tmp1, tmp2) = Subslice_char8_0(state_, TorqueStructSlice_char8_ConstReference_char8_0{TNode<Union<HeapObject, TaggedIndex>>{p_string.object}, TNode<IntPtrT>{p_string.offset}, TNode<IntPtrT>{p_string.length}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{p_start}, TNode<IntPtrT>{p_searchStr.length}, &label3).Flatten();
    ca_.Goto(&block4);
    if (label3.is_used()) {
      ca_.Bind(&label3);
      ca_.Goto(&block5);
    }
  }

  TNode<BoolT> tmp4;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp4 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block1, tmp4);
  }

  TNode<IntPtrT> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<IntPtrT> tmp7;
  TNode<IntPtrT> tmp8;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp5 = TimesSizeOf_char8_0(state_, TNode<IntPtrT>{tmp2});
    tmp6 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp1}, TNode<IntPtrT>{tmp5});
    tmp7 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{p_searchStr.length});
    tmp8 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_searchStr.offset}, TNode<IntPtrT>{tmp7});
    ca_.Goto(&block10, tmp1, p_searchStr.offset);
  }

  TNode<IntPtrT> phi_bb10_11;
  TNode<IntPtrT> phi_bb10_14;
  TNode<BoolT> tmp9;
  if (block10.is_used()) {
    ca_.Bind(&block10, &phi_bb10_11, &phi_bb10_14);
    tmp9 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Branch(tmp9, &block8, std::vector<compiler::Node*>{phi_bb10_11, phi_bb10_14}, &block9, std::vector<compiler::Node*>{phi_bb10_11, phi_bb10_14});
  }

  TNode<IntPtrT> phi_bb8_11;
  TNode<IntPtrT> phi_bb8_14;
  TNode<BoolT> tmp10;
  if (block8.is_used()) {
    ca_.Bind(&block8, &phi_bb8_11, &phi_bb8_14);
    tmp10 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb8_14}, TNode<IntPtrT>{tmp8});
    ca_.Branch(tmp10, &block15, std::vector<compiler::Node*>{phi_bb8_11, phi_bb8_14}, &block16, std::vector<compiler::Node*>{phi_bb8_11, phi_bb8_14});
  }

  TNode<IntPtrT> phi_bb15_11;
  TNode<IntPtrT> phi_bb15_14;
  TNode<BoolT> tmp11;
  if (block15.is_used()) {
    ca_.Bind(&block15, &phi_bb15_11, &phi_bb15_14);
    tmp11 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block1, tmp11);
  }

  TNode<IntPtrT> phi_bb16_11;
  TNode<IntPtrT> phi_bb16_14;
  TNode<Union<HeapObject, TaggedIndex>> tmp12;
  TNode<IntPtrT> tmp13;
  TNode<IntPtrT> tmp14;
  TNode<IntPtrT> tmp15;
  TNode<Uint16T> tmp16;
  TNode<BoolT> tmp17;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_11, &phi_bb16_14);
    std::tie(tmp12, tmp13) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_searchStr.object}, TNode<IntPtrT>{phi_bb16_14}).Flatten();
    tmp14 = FromConstexpr_intptr_constexpr_int31_0(state_, kUInt16Size);
    tmp15 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb16_14}, TNode<IntPtrT>{tmp14});
    tmp16 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp12, tmp13});
    tmp17 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb16_11}, TNode<IntPtrT>{tmp6});
    ca_.Branch(tmp17, &block23, std::vector<compiler::Node*>{phi_bb16_11}, &block24, std::vector<compiler::Node*>{phi_bb16_11});
  }

  TNode<IntPtrT> phi_bb23_11;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_11);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/string-endswith.tq:16:56");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb24_11;
  TNode<Union<HeapObject, TaggedIndex>> tmp18;
  TNode<IntPtrT> tmp19;
  TNode<IntPtrT> tmp20;
  TNode<IntPtrT> tmp21;
  TNode<Uint8T> tmp22;
  TNode<BoolT> tmp23;
  if (block24.is_used()) {
    ca_.Bind(&block24, &phi_bb24_11);
    std::tie(tmp18, tmp19) = NewReference_char8_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp0}, TNode<IntPtrT>{phi_bb24_11}).Flatten();
    tmp20 = FromConstexpr_intptr_constexpr_int31_0(state_, kUInt8Size);
    tmp21 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb24_11}, TNode<IntPtrT>{tmp20});
    tmp22 = CodeStubAssembler(state_).LoadReference<Uint8T>(CodeStubAssembler::Reference{tmp18, tmp19});
    tmp23 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp16}, TNode<Uint32T>{tmp22});
    ca_.Branch(tmp23, &block27, std::vector<compiler::Node*>{}, &block28, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp24;
  if (block27.is_used()) {
    ca_.Bind(&block27);
    tmp24 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block1, tmp24);
  }

  if (block28.is_used()) {
    ca_.Bind(&block28);
    ca_.Goto(&block10, tmp21, tmp15);
  }

  TNode<IntPtrT> phi_bb9_11;
  TNode<IntPtrT> phi_bb9_14;
  if (block9.is_used()) {
    ca_.Bind(&block9, &phi_bb9_11, &phi_bb9_14);
    VerifiedUnreachable_0(state_);
  }

  TNode<BoolT> phi_bb1_7;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_7);
    ca_.Goto(&block29, phi_bb1_7);
  }

  TNode<BoolT> phi_bb29_7;
    ca_.Bind(&block29, &phi_bb29_7);
  return TNode<BoolT>{phi_bb29_7};
}

// https://crsrc.org/c/v8/src/builtins/string-endswith.tq?l=32&c=10
TNode<BoolT> IsSubstringAt_char16_char8_0(compiler::CodeAssemblerState* state_, TorqueStructSlice_char16_ConstReference_char16_0 p_string, TorqueStructSlice_char8_ConstReference_char8_0 p_searchStr, TNode<IntPtrT> p_start) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Union<HeapObject, TaggedIndex>> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label3(&ca_);
    std::tie(tmp0, tmp1, tmp2) = Subslice_char16_0(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{p_string.object}, TNode<IntPtrT>{p_string.offset}, TNode<IntPtrT>{p_string.length}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{p_start}, TNode<IntPtrT>{p_searchStr.length}, &label3).Flatten();
    ca_.Goto(&block4);
    if (label3.is_used()) {
      ca_.Bind(&label3);
      ca_.Goto(&block5);
    }
  }

  TNode<BoolT> tmp4;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp4 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block1, tmp4);
  }

  TNode<IntPtrT> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<IntPtrT> tmp7;
  TNode<IntPtrT> tmp8;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp5 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{tmp2});
    tmp6 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp1}, TNode<IntPtrT>{tmp5});
    tmp7 = TimesSizeOf_char8_0(state_, TNode<IntPtrT>{p_searchStr.length});
    tmp8 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_searchStr.offset}, TNode<IntPtrT>{tmp7});
    ca_.Goto(&block10, tmp1, p_searchStr.offset);
  }

  TNode<IntPtrT> phi_bb10_11;
  TNode<IntPtrT> phi_bb10_14;
  TNode<BoolT> tmp9;
  if (block10.is_used()) {
    ca_.Bind(&block10, &phi_bb10_11, &phi_bb10_14);
    tmp9 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Branch(tmp9, &block8, std::vector<compiler::Node*>{phi_bb10_11, phi_bb10_14}, &block9, std::vector<compiler::Node*>{phi_bb10_11, phi_bb10_14});
  }

  TNode<IntPtrT> phi_bb8_11;
  TNode<IntPtrT> phi_bb8_14;
  TNode<BoolT> tmp10;
  if (block8.is_used()) {
    ca_.Bind(&block8, &phi_bb8_11, &phi_bb8_14);
    tmp10 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb8_14}, TNode<IntPtrT>{tmp8});
    ca_.Branch(tmp10, &block15, std::vector<compiler::Node*>{phi_bb8_11, phi_bb8_14}, &block16, std::vector<compiler::Node*>{phi_bb8_11, phi_bb8_14});
  }

  TNode<IntPtrT> phi_bb15_11;
  TNode<IntPtrT> phi_bb15_14;
  TNode<BoolT> tmp11;
  if (block15.is_used()) {
    ca_.Bind(&block15, &phi_bb15_11, &phi_bb15_14);
    tmp11 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block1, tmp11);
  }

  TNode<IntPtrT> phi_bb16_11;
  TNode<IntPtrT> phi_bb16_14;
  TNode<Union<HeapObject, TaggedIndex>> tmp12;
  TNode<IntPtrT> tmp13;
  TNode<IntPtrT> tmp14;
  TNode<IntPtrT> tmp15;
  TNode<Uint8T> tmp16;
  TNode<BoolT> tmp17;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_11, &phi_bb16_14);
    std::tie(tmp12, tmp13) = NewReference_char8_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_searchStr.object}, TNode<IntPtrT>{phi_bb16_14}).Flatten();
    tmp14 = FromConstexpr_intptr_constexpr_int31_0(state_, kUInt8Size);
    tmp15 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb16_14}, TNode<IntPtrT>{tmp14});
    tmp16 = CodeStubAssembler(state_).LoadReference<Uint8T>(CodeStubAssembler::Reference{tmp12, tmp13});
    tmp17 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb16_11}, TNode<IntPtrT>{tmp6});
    ca_.Branch(tmp17, &block23, std::vector<compiler::Node*>{phi_bb16_11}, &block24, std::vector<compiler::Node*>{phi_bb16_11});
  }

  TNode<IntPtrT> phi_bb23_11;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_11);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/string-endswith.tq:16:56");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb24_11;
  TNode<Union<HeapObject, TaggedIndex>> tmp18;
  TNode<IntPtrT> tmp19;
  TNode<IntPtrT> tmp20;
  TNode<IntPtrT> tmp21;
  TNode<Uint16T> tmp22;
  TNode<BoolT> tmp23;
  if (block24.is_used()) {
    ca_.Bind(&block24, &phi_bb24_11);
    std::tie(tmp18, tmp19) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp0}, TNode<IntPtrT>{phi_bb24_11}).Flatten();
    tmp20 = FromConstexpr_intptr_constexpr_int31_0(state_, kUInt16Size);
    tmp21 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb24_11}, TNode<IntPtrT>{tmp20});
    tmp22 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp18, tmp19});
    tmp23 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp16}, TNode<Uint32T>{tmp22});
    ca_.Branch(tmp23, &block27, std::vector<compiler::Node*>{}, &block28, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp24;
  if (block27.is_used()) {
    ca_.Bind(&block27);
    tmp24 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block1, tmp24);
  }

  if (block28.is_used()) {
    ca_.Bind(&block28);
    ca_.Goto(&block10, tmp21, tmp15);
  }

  TNode<IntPtrT> phi_bb9_11;
  TNode<IntPtrT> phi_bb9_14;
  if (block9.is_used()) {
    ca_.Bind(&block9, &phi_bb9_11, &phi_bb9_14);
    VerifiedUnreachable_0(state_);
  }

  TNode<BoolT> phi_bb1_7;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_7);
    ca_.Goto(&block29, phi_bb1_7);
  }

  TNode<BoolT> phi_bb29_7;
    ca_.Bind(&block29, &phi_bb29_7);
  return TNode<BoolT>{phi_bb29_7};
}

// https://crsrc.org/c/v8/src/builtins/string-endswith.tq?l=32&c=10
TNode<BoolT> IsSubstringAt_char16_char16_0(compiler::CodeAssemblerState* state_, TorqueStructSlice_char16_ConstReference_char16_0 p_string, TorqueStructSlice_char16_ConstReference_char16_0 p_searchStr, TNode<IntPtrT> p_start) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block23(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT> block24(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block27(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block28(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<IntPtrT, IntPtrT> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<BoolT> block29(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<Union<HeapObject, TaggedIndex>> tmp0;
  TNode<IntPtrT> tmp1;
  TNode<IntPtrT> tmp2;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label3(&ca_);
    std::tie(tmp0, tmp1, tmp2) = Subslice_char16_0(state_, TorqueStructSlice_char16_ConstReference_char16_0{TNode<Union<HeapObject, TaggedIndex>>{p_string.object}, TNode<IntPtrT>{p_string.offset}, TNode<IntPtrT>{p_string.length}, TorqueStructUnsafe_0{}}, TNode<IntPtrT>{p_start}, TNode<IntPtrT>{p_searchStr.length}, &label3).Flatten();
    ca_.Goto(&block4);
    if (label3.is_used()) {
      ca_.Bind(&label3);
      ca_.Goto(&block5);
    }
  }

  TNode<BoolT> tmp4;
  if (block5.is_used()) {
    ca_.Bind(&block5);
    tmp4 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block1, tmp4);
  }

  TNode<IntPtrT> tmp5;
  TNode<IntPtrT> tmp6;
  TNode<IntPtrT> tmp7;
  TNode<IntPtrT> tmp8;
  if (block4.is_used()) {
    ca_.Bind(&block4);
    tmp5 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{tmp2});
    tmp6 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{tmp1}, TNode<IntPtrT>{tmp5});
    tmp7 = TimesSizeOf_char16_0(state_, TNode<IntPtrT>{p_searchStr.length});
    tmp8 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{p_searchStr.offset}, TNode<IntPtrT>{tmp7});
    ca_.Goto(&block10, tmp1, p_searchStr.offset);
  }

  TNode<IntPtrT> phi_bb10_11;
  TNode<IntPtrT> phi_bb10_14;
  TNode<BoolT> tmp9;
  if (block10.is_used()) {
    ca_.Bind(&block10, &phi_bb10_11, &phi_bb10_14);
    tmp9 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Branch(tmp9, &block8, std::vector<compiler::Node*>{phi_bb10_11, phi_bb10_14}, &block9, std::vector<compiler::Node*>{phi_bb10_11, phi_bb10_14});
  }

  TNode<IntPtrT> phi_bb8_11;
  TNode<IntPtrT> phi_bb8_14;
  TNode<BoolT> tmp10;
  if (block8.is_used()) {
    ca_.Bind(&block8, &phi_bb8_11, &phi_bb8_14);
    tmp10 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb8_14}, TNode<IntPtrT>{tmp8});
    ca_.Branch(tmp10, &block15, std::vector<compiler::Node*>{phi_bb8_11, phi_bb8_14}, &block16, std::vector<compiler::Node*>{phi_bb8_11, phi_bb8_14});
  }

  TNode<IntPtrT> phi_bb15_11;
  TNode<IntPtrT> phi_bb15_14;
  TNode<BoolT> tmp11;
  if (block15.is_used()) {
    ca_.Bind(&block15, &phi_bb15_11, &phi_bb15_14);
    tmp11 = FromConstexpr_bool_constexpr_bool_0(state_, true);
    ca_.Goto(&block1, tmp11);
  }

  TNode<IntPtrT> phi_bb16_11;
  TNode<IntPtrT> phi_bb16_14;
  TNode<Union<HeapObject, TaggedIndex>> tmp12;
  TNode<IntPtrT> tmp13;
  TNode<IntPtrT> tmp14;
  TNode<IntPtrT> tmp15;
  TNode<Uint16T> tmp16;
  TNode<BoolT> tmp17;
  if (block16.is_used()) {
    ca_.Bind(&block16, &phi_bb16_11, &phi_bb16_14);
    std::tie(tmp12, tmp13) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{p_searchStr.object}, TNode<IntPtrT>{phi_bb16_14}).Flatten();
    tmp14 = FromConstexpr_intptr_constexpr_int31_0(state_, kUInt16Size);
    tmp15 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb16_14}, TNode<IntPtrT>{tmp14});
    tmp16 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp12, tmp13});
    tmp17 = CodeStubAssembler(state_).WordEqual(TNode<IntPtrT>{phi_bb16_11}, TNode<IntPtrT>{tmp6});
    ca_.Branch(tmp17, &block23, std::vector<compiler::Node*>{phi_bb16_11}, &block24, std::vector<compiler::Node*>{phi_bb16_11});
  }

  TNode<IntPtrT> phi_bb23_11;
  if (block23.is_used()) {
    ca_.Bind(&block23, &phi_bb23_11);
    CodeStubAssembler(state_).PrintErr("halting because of unreachable code at src/builtins/string-endswith.tq:16:56");
    CodeStubAssembler(state_).Unreachable();
  }

  TNode<IntPtrT> phi_bb24_11;
  TNode<Union<HeapObject, TaggedIndex>> tmp18;
  TNode<IntPtrT> tmp19;
  TNode<IntPtrT> tmp20;
  TNode<IntPtrT> tmp21;
  TNode<Uint16T> tmp22;
  TNode<BoolT> tmp23;
  if (block24.is_used()) {
    ca_.Bind(&block24, &phi_bb24_11);
    std::tie(tmp18, tmp19) = NewReference_char16_0(state_, TNode<Union<HeapObject, TaggedIndex>>{tmp0}, TNode<IntPtrT>{phi_bb24_11}).Flatten();
    tmp20 = FromConstexpr_intptr_constexpr_int31_0(state_, kUInt16Size);
    tmp21 = CodeStubAssembler(state_).IntPtrAdd(TNode<IntPtrT>{phi_bb24_11}, TNode<IntPtrT>{tmp20});
    tmp22 = CodeStubAssembler(state_).LoadReference<Uint16T>(CodeStubAssembler::Reference{tmp18, tmp19});
    tmp23 = CodeStubAssembler(state_).Word32NotEqual(TNode<Uint32T>{tmp16}, TNode<Uint32T>{tmp22});
    ca_.Branch(tmp23, &block27, std::vector<compiler::Node*>{}, &block28, std::vector<compiler::Node*>{});
  }

  TNode<BoolT> tmp24;
  if (block27.is_used()) {
    ca_.Bind(&block27);
    tmp24 = FromConstexpr_bool_constexpr_bool_0(state_, false);
    ca_.Goto(&block1, tmp24);
  }

  if (block28.is_used()) {
    ca_.Bind(&block28);
    ca_.Goto(&block10, tmp21, tmp15);
  }

  TNode<IntPtrT> phi_bb9_11;
  TNode<IntPtrT> phi_bb9_14;
  if (block9.is_used()) {
    ca_.Bind(&block9, &phi_bb9_11, &phi_bb9_14);
    VerifiedUnreachable_0(state_);
  }

  TNode<BoolT> phi_bb1_7;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_7);
    ca_.Goto(&block29, phi_bb1_7);
  }

  TNode<BoolT> phi_bb29_7;
    ca_.Bind(&block29, &phi_bb29_7);
  return TNode<BoolT>{phi_bb29_7};
}

} // namespace internal
} // namespace v8
