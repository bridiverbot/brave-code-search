#ifndef V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_JS_SEGMENT_ITERATOR_TQ_CSA_H_
#define V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_JS_SEGMENT_ITERATOR_TQ_CSA_H_

#include "src/builtins/torque-csa-header-includes.h"

namespace v8 {
namespace internal {

// https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=12&c=1
TNode<JSSegmentIterator> Cast_JSSegmentIterator_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_obj, compiler::CodeAssemblerLabel* label_CastError);

// https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=14&c=3
TNode<CppGCManagedBase> LoadJSSegmentIteratorIcuIteratorWithText_0(compiler::CodeAssemblerState* state_, TNode<JSSegmentIterator> p_o);

// https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=14&c=3
void StoreJSSegmentIteratorIcuIteratorWithText_0(compiler::CodeAssemblerState* state_, TNode<JSSegmentIterator> p_o, TNode<CppGCManagedBase> p_v);

// https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=16&c=3
TNode<String> LoadJSSegmentIteratorRawString_0(compiler::CodeAssemblerState* state_, TNode<JSSegmentIterator> p_o);

// https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=16&c=3
void StoreJSSegmentIteratorRawString_0(compiler::CodeAssemblerState* state_, TNode<JSSegmentIterator> p_o, TNode<String> p_v);

// https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=17&c=3
TNode<Smi> LoadJSSegmentIteratorFlags_0(compiler::CodeAssemblerState* state_, TNode<JSSegmentIterator> p_o);

// https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=17&c=3
void StoreJSSegmentIteratorFlags_0(compiler::CodeAssemblerState* state_, TNode<JSSegmentIterator> p_o, TNode<Smi> p_v);

// https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=24&c=3
TNode<String> LoadJSSegmentDataObjectSegment_0(compiler::CodeAssemblerState* state_, TNode<JSSegmentDataObject> p_o);

// https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=24&c=3
void StoreJSSegmentDataObjectSegment_0(compiler::CodeAssemblerState* state_, TNode<JSSegmentDataObject> p_o, TNode<String> p_v);

// https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=25&c=3
TNode<Number> LoadJSSegmentDataObjectIndex_0(compiler::CodeAssemblerState* state_, TNode<JSSegmentDataObject> p_o);

// https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=25&c=3
void StoreJSSegmentDataObjectIndex_0(compiler::CodeAssemblerState* state_, TNode<JSSegmentDataObject> p_o, TNode<Number> p_v);

// https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=26&c=3
TNode<String> LoadJSSegmentDataObjectInput_0(compiler::CodeAssemblerState* state_, TNode<JSSegmentDataObject> p_o);

// https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=26&c=3
void StoreJSSegmentDataObjectInput_0(compiler::CodeAssemblerState* state_, TNode<JSSegmentDataObject> p_o, TNode<String> p_v);

// https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=33&c=3
TNode<Boolean> LoadJSSegmentDataObjectWithIsWordLikeIsWordLike_0(compiler::CodeAssemblerState* state_, TNode<JSSegmentDataObjectWithIsWordLike> p_o);

// https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=33&c=3
void StoreJSSegmentDataObjectWithIsWordLikeIsWordLike_0(compiler::CodeAssemblerState* state_, TNode<JSSegmentDataObjectWithIsWordLike> p_o, TNode<Boolean> p_v);

// https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=12&c=1
TNode<JSSegmentIterator> DownCastForTorqueClass_JSSegmentIterator_0(compiler::CodeAssemblerState* state_, TNode<HeapObject> p_o, compiler::CodeAssemblerLabel* label_CastError);

} // namespace internal
} // namespace v8

#endif // V8_GEN_TORQUE_GENERATED_SRC_OBJECTS_JS_SEGMENT_ITERATOR_TQ_CSA_H_
