#ifndef V8_GEN_TORQUE_GENERATED_DEBUG_READER_CLASSES_LIST_H_
#define V8_GEN_TORQUE_GENERATED_DEBUG_READER_CLASSES_LIST_H_

// Pairs of (ClassName, INSTANCE_TYPE) for classes that have a
// Torque body and a single corresponding instance type. The
// INSTANCE_TYPE symbols resolve via the IT enum provided by
// instance-types-gen.h (which forwards to metagen's emission
// by default).
#define TORQUE_DEBUG_READER_CLASSES_SINGLE(V) \
  V(Symbol, SYMBOL_TYPE) /* https://crsrc.org/c/v8/src/objects/name.tq?l=47&c=1 */ \
  V(HeapNumber, HEAP_NUMBER_TYPE) /* https://crsrc.org/c/v8/src/objects/heap-number.tq?l=5&c=1 */ \
  V(Oddball, ODDBALL_TYPE) /* https://crsrc.org/c/v8/src/objects/oddball.tq?l=5&c=1 */ \
  V(PromiseFulfillReactionJobTask, PROMISE_FULFILL_REACTION_JOB_TASK_TYPE) /* https://crsrc.org/c/v8/src/objects/promise.tq?l=70&c=1 */ \
  V(PromiseRejectReactionJobTask, PROMISE_REJECT_REACTION_JOB_TASK_TYPE) /* https://crsrc.org/c/v8/src/objects/promise.tq?l=73&c=1 */ \
  V(AsyncResumeTask, ASYNC_RESUME_TASK_TYPE) /* https://crsrc.org/c/v8/src/objects/microtask.tq?l=27&c=1 */ \
  V(CallableTask, CALLABLE_TASK_TYPE) /* https://crsrc.org/c/v8/src/objects/microtask.tq?l=18&c=1 */ \
  V(CallbackTask, CALLBACK_TASK_TYPE) /* https://crsrc.org/c/v8/src/objects/microtask.tq?l=12&c=1 */ \
  V(PromiseResolveThenableJobTask, PROMISE_RESOLVE_THENABLE_JOB_TASK_TYPE) /* https://crsrc.org/c/v8/src/objects/promise.tq?l=76&c=1 */ \
  V(AccessCheckInfo, ACCESS_CHECK_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/api-callbacks.tq?l=32&c=1 */ \
  V(AliasedArgumentsEntry, ALIASED_ARGUMENTS_ENTRY_TYPE) /* https://crsrc.org/c/v8/src/objects/arguments.tq?l=62&c=1 */ \
  V(AllocationMemento, ALLOCATION_MEMENTO_TYPE) /* https://crsrc.org/c/v8/src/objects/allocation-site.tq?l=7&c=1 */ \
  V(ArrayBoilerplateDescription, ARRAY_BOILERPLATE_DESCRIPTION_TYPE) /* https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=12&c=1 */ \
  V(AsyncGeneratorRequest, ASYNC_GENERATOR_REQUEST_TYPE) /* https://crsrc.org/c/v8/src/objects/js-generator.tq?l=59&c=1 */ \
  V(BreakPoint, BREAK_POINT_TYPE) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=5&c=1 */ \
  V(BreakPointInfo, BREAK_POINT_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=11&c=1 */ \
  V(BytecodeWrapper, BYTECODE_WRAPPER_TYPE) /* https://crsrc.org/c/v8/src/objects/bytecode-array.tq?l=25&c=1 */ \
  V(CallSiteInfo, CALL_SITE_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/call-site-info.tq?l=24&c=1 */ \
  V(ClassBoilerplate, CLASS_BOILERPLATE_TYPE) /* https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=24&c=1 */ \
  V(DebugScriptScopeInfo, DEBUG_SCRIPT_SCOPE_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=132&c=1 */ \
  V(EnumCache, ENUM_CACHE_TYPE) /* https://crsrc.org/c/v8/src/objects/descriptor-array.tq?l=5&c=1 */ \
  V(ErrorStackData, ERROR_STACK_DATA_TYPE) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=113&c=1 */ \
  V(FeedbackCell, FEEDBACK_CELL_TYPE) /* https://crsrc.org/c/v8/src/objects/feedback-cell.tq?l=5&c=1 */ \
  V(ForInEnumeratorHolder, FOR_IN_ENUMERATOR_HOLDER_TYPE) /* https://crsrc.org/c/v8/src/objects/struct.tq?l=15&c=1 */ \
  V(FunctionTemplateRareData, FUNCTION_TEMPLATE_RARE_DATA_TYPE) /* https://crsrc.org/c/v8/src/objects/templates.tq?l=26&c=1 */ \
  V(ModuleRequest, MODULE_REQUEST_TYPE) /* https://crsrc.org/c/v8/src/objects/source-text-module.tq?l=61&c=1 */ \
  V(PromiseCapability, PROMISE_CAPABILITY_TYPE) /* https://crsrc.org/c/v8/src/objects/promise.tq?l=5&c=1 */ \
  V(PromiseReaction, PROMISE_REACTION_TYPE) /* https://crsrc.org/c/v8/src/objects/promise.tq?l=34&c=1 */ \
  V(PropertyDescriptorObject, PROPERTY_DESCRIPTOR_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/objects/property-descriptor-object.tq?l=20&c=1 */ \
  V(PrototypeInfo, PROTOTYPE_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/prototype-info.tq?l=13&c=1 */ \
  V(PrototypeSharedClosureInfo, PROTOTYPE_SHARED_CLOSURE_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=35&c=1 */ \
  V(RegExpBoilerplateDescription, REG_EXP_BOILERPLATE_DESCRIPTION_TYPE) /* https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=18&c=1 */ \
  V(RegExpDataWrapper, REG_EXP_DATA_WRAPPER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-regexp.tq?l=60&c=1 */ \
  V(Script, SCRIPT_TYPE) /* https://crsrc.org/c/v8/src/objects/script.tq?l=21&c=1 */ \
  V(ScriptOrModule, SCRIPT_OR_MODULE_TYPE) /* https://crsrc.org/c/v8/src/objects/module.tq?l=30&c=1 */ \
  V(SourceTextModuleInfoEntry, SOURCE_TEXT_MODULE_INFO_ENTRY_TYPE) /* https://crsrc.org/c/v8/src/objects/source-text-module.tq?l=72&c=1 */ \
  V(StackFrameInfo, STACK_FRAME_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=78&c=1 */ \
  V(StackTraceInfo, STACK_TRACE_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=92&c=1 */ \
  V(TemplateObjectDescription, TEMPLATE_OBJECT_DESCRIPTION_TYPE) /* https://crsrc.org/c/v8/src/objects/template-objects.tq?l=5&c=1 */ \
  V(WasmExceptionTag, WASM_EXCEPTION_TAG_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=188&c=1 */ \
  V(UncompiledDataWithPreparseDataAndJob, UNCOMPILED_DATA_WITH_PREPARSE_DATA_AND_JOB_TYPE) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=183&c=1 */ \
  V(UncompiledDataWithoutPreparseDataWithJob, UNCOMPILED_DATA_WITHOUT_PREPARSE_DATA_WITH_JOB_TYPE) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=177&c=1 */ \
  V(AtomRegExpData, ATOM_REG_EXP_DATA_TYPE) /* https://crsrc.org/c/v8/src/objects/js-regexp.tq?l=33&c=1 */ \
  V(IrRegExpData, IR_REG_EXP_DATA_TYPE) /* https://crsrc.org/c/v8/src/objects/js-regexp.tq?l=44&c=1 */ \
  V(WasmCapiFunctionData, WASM_CAPI_FUNCTION_DATA_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=156&c=1 */ \
  V(WasmExportedFunctionData, WASM_EXPORTED_FUNCTION_DATA_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=135&c=1 */ \
  V(BytecodeArray, BYTECODE_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/bytecode-array.tq?l=7&c=1 */ \
  V(DebugInfo, DEBUG_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=37&c=1 */ \
  V(InterpreterData, INTERPRETER_DATA_TYPE) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=14&c=1 */ \
  V(WasmInternalFunction, WASM_INTERNAL_FUNCTION_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=79&c=1 */ \
  V(WasmSuspenderObject, WASM_SUSPENDER_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=167&c=1 */ \
  V(ProtectedFixedArray, PROTECTED_FIXED_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=17&c=1 */ \
  V(ProtectedWeakFixedArray, PROTECTED_WEAK_FIXED_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=37&c=1 */ \
  V(TrustedByteArray, TRUSTED_BYTE_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-primitive-array.tq?l=15&c=1 */ \
  V(TrustedFixedArray, TRUSTED_FIXED_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=12&c=1 */ \
  V(TrustedWeakFixedArray, TRUSTED_WEAK_FIXED_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=32&c=1 */ \
  V(SharedFunctionInfoWrapper, SHARED_FUNCTION_INFO_WRAPPER_TYPE) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=130&c=1 */ \
  V(TrustedForeign, TRUSTED_FOREIGN_TYPE) /* https://crsrc.org/c/v8/src/objects/foreign.tq?l=11&c=1 */ \
  V(WasmImportData, WASM_IMPORT_DATA_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=49&c=1 */ \
  V(AccessorInfo, ACCESSOR_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/api-callbacks.tq?l=51&c=1 */ \
  V(Foreign, FOREIGN_TYPE) /* https://crsrc.org/c/v8/src/objects/foreign.tq?l=5&c=1 */ \
  V(ByteArray, BYTE_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-primitive-array.tq?l=10&c=1 */ \
  V(ClosureFeedbackCellArray, CLOSURE_FEEDBACK_CELL_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/feedback-vector.tq?l=29&c=1 */ \
  V(FixedDoubleArray, FIXED_DOUBLE_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-primitive-array.tq?l=5&c=1 */ \
  V(ObjectBoilerplateDescription, OBJECT_BOILERPLATE_DESCRIPTION_TYPE) /* https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=5&c=1 */ \
  V(RegExpMatchInfo, REG_EXP_MATCH_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/regexp-match-info.tq?l=5&c=1 */ \
  V(SloppyArgumentsElements, SLOPPY_ARGUMENTS_ELEMENTS_TYPE) /* https://crsrc.org/c/v8/src/objects/arguments.tq?l=28&c=1 */ \
  V(WeakHomomorphicFixedArray, WEAK_HOMOMORPHIC_FIXED_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=27&c=1 */ \
  V(TurboshaftFloat64RangeType, TURBOSHAFT_FLOAT64_RANGE_TYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/turboshaft-types.tq?l=63&c=1 */ \
  V(TurboshaftFloat64SetType, TURBOSHAFT_FLOAT64_SET_TYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/turboshaft-types.tq?l=70&c=1 */ \
  V(TurboshaftWord32RangeType, TURBOSHAFT_WORD32_RANGE_TYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/turboshaft-types.tq?l=26&c=1 */ \
  V(TurboshaftWord32SetType, TURBOSHAFT_WORD32_SET_TYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/turboshaft-types.tq?l=32&c=1 */ \
  V(TurboshaftWord64RangeType, TURBOSHAFT_WORD64_RANGE_TYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/turboshaft-types.tq?l=42&c=1 */ \
  V(TurboshaftWord64SetType, TURBOSHAFT_WORD64_SET_TYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/turboshaft-types.tq?l=50&c=1 */ \
  V(TurbofanBitsetType, TURBOFAN_BITSET_TYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=63&c=1 */ \
  V(TurbofanHeapConstantType, TURBOFAN_HEAP_CONSTANT_TYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=81&c=1 */ \
  V(TurbofanOtherNumberConstantType, TURBOFAN_OTHER_NUMBER_CONSTANT_TYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=86&c=1 */ \
  V(TurbofanRangeType, TURBOFAN_RANGE_TYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=75&c=1 */ \
  V(TurbofanUnionType, TURBOFAN_UNION_TYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=69&c=1 */ \
  V(SmallOrderedHashMap, SMALL_ORDERED_HASH_MAP_TYPE) /* https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=25&c=1 */ \
  V(SmallOrderedHashSet, SMALL_ORDERED_HASH_SET_TYPE) /* https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=16&c=1 */ \
  V(SmallOrderedNameDictionary, SMALL_ORDERED_NAME_DICTIONARY_TYPE) /* https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=34&c=1 */ \
  V(FunctionTemplateInfo, FUNCTION_TEMPLATE_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/templates.tq?l=59&c=1 */ \
  V(ObjectTemplateInfo, OBJECT_TEMPLATE_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/templates.tq?l=119&c=1 */ \
  V(DictionaryTemplateInfo, DICTIONARY_TEMPLATE_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/templates.tq?l=125&c=1 */ \
  V(WasmCustomMap, WASM_CUSTOM_MAP_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=321&c=1 */ \
  V(SourceTextModule, SOURCE_TEXT_MODULE_TYPE) /* https://crsrc.org/c/v8/src/objects/source-text-module.tq?l=13&c=1 */ \
  V(SyntheticModule, SYNTHETIC_MODULE_TYPE) /* https://crsrc.org/c/v8/src/objects/synthetic-module.tq?l=5&c=1 */ \
  V(ArrayList, ARRAY_LIST_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=42&c=1 */ \
  V(Cell, CELL_TYPE) /* https://crsrc.org/c/v8/src/objects/cell.tq?l=5&c=1 */ \
  V(ContextCell, CONTEXT_CELL_TYPE) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=23&c=1 */ \
  V(CoverageInfo, COVERAGE_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=67&c=1 */ \
  V(CppGCManagedBase, CPP_GCMANAGED_BASE_TYPE) /* https://crsrc.org/c/v8/src/objects/managed.tq?l=5&c=1 */ \
  V(CppHeapExternalObject, CPP_HEAP_EXTERNAL_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/objects/cpp-heap-external-object.tq?l=5&c=1 */ \
  V(DescriptorArray, DESCRIPTOR_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/descriptor-array.tq?l=27&c=1 */ \
  V(EmbedderDataArray, EMBEDDER_DATA_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/embedder-data-array.tq?l=5&c=1 */ \
  V(FeedbackMetadata, FEEDBACK_METADATA_TYPE) /* https://crsrc.org/c/v8/src/objects/feedback-vector.tq?l=48&c=1 */ \
  V(FeedbackVector, FEEDBACK_VECTOR_TYPE) /* https://crsrc.org/c/v8/src/objects/feedback-vector.tq?l=34&c=1 */ \
  V(InterceptorInfo, INTERCEPTOR_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/api-callbacks.tq?l=15&c=1 */ \
  V(MegaDomHandler, MEGA_DOM_HANDLER_TYPE) /* https://crsrc.org/c/v8/src/objects/megadom-handler.tq?l=7&c=1 */ \
  V(OnHeapBasicBlockProfilerData, ON_HEAP_BASIC_BLOCK_PROFILER_DATA_TYPE) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=199&c=1 */ \
  V(PreparseData, PREPARSE_DATA_TYPE) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=7&c=1 */ \
  V(PropertyArray, PROPERTY_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/property-array.tq?l=5&c=1 */ \
  V(PropertyCell, PROPERTY_CELL_TYPE) /* https://crsrc.org/c/v8/src/objects/property-cell.tq?l=6&c=1 */ \
  V(ScopeInfo, SCOPE_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/scope-info.tq?l=119&c=1 */ \
  V(ScriptContextTable, SCRIPT_CONTEXT_TABLE_TYPE) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=15&c=1 */ \
  V(SharedFunctionInfo, SHARED_FUNCTION_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=62&c=1 */ \
  V(SortState, SORT_STATE_TYPE) /* https://crsrc.org/c/v8/third_party/v8/builtins/array-sort.tq?l=24&c=1 */ \
  V(SwissNameDictionary, SWISS_NAME_DICTIONARY_TYPE) /* https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=9&c=1 */ \
  V(UninitializedHeapNumber, UNINITIALIZED_HEAP_NUMBER_TYPE) /* https://crsrc.org/c/v8/src/objects/heap-number.tq?l=19&c=1 */ \
  V(WasmContinuationObject, WASM_CONTINUATION_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=176&c=1 */ \
  V(WasmFastApiCallData, WASM_FAST_API_CALL_DATA_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=70&c=1 */ \
  V(WasmFuncRef, WASM_FUNC_REF_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=110&c=1 */ \
  V(WasmResumeData, WASM_RESUME_DATA_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=161&c=1 */ \
  V(WasmStackObject, WASM_STACK_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=183&c=1 */ \
  V(WasmStringViewIter, WASM_STRING_VIEW_ITER_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=335&c=1 */ \
  V(WasmTypeInfo, WASM_TYPE_INFO_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=291&c=1 */ \
  V(WeakArrayList, WEAK_ARRAY_LIST_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=49&c=1 */ \
  V(WeakCell, WEAK_CELL_TYPE) /* https://crsrc.org/c/v8/src/objects/js-weak-refs.tq?l=23&c=1 */ \
  V(WasmArray, WASM_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=308&c=1 */ \
  V(WasmStruct, WASM_STRUCT_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=304&c=1 */ \
  V(JSProxy, JS_PROXY_TYPE) /* https://crsrc.org/c/v8/src/objects/js-proxy.tq?l=5&c=1 */ \
  V(JSDeferredModuleNamespace, JS_DEFERRED_MODULE_NAMESPACE_TYPE) /* https://crsrc.org/c/v8/src/objects/module.tq?l=27&c=1 */ \
  V(JSGlobalObject, JS_GLOBAL_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=127&c=1 */ \
  V(JSGlobalProxy, JS_GLOBAL_PROXY_TYPE) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=124&c=1 */ \
  V(JSPrimitiveWrapper, JS_PRIMITIVE_WRAPPER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=154&c=1 */ \
  V(JSDataView, JS_DATA_VIEW_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=150&c=1 */ \
  V(JSRabGsabDataView, JS_RAB_GSAB_DATA_VIEW_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=153&c=1 */ \
  V(JSDetachedTypedArray, JS_DETACHED_TYPED_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=132&c=1 */ \
  V(JSArrayBuffer, JS_ARRAY_BUFFER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=18&c=1 */ \
  V(JSFunctionWithoutPrototype, JS_FUNCTION_WITHOUT_PROTOTYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/js-function.tq?l=57&c=1 */ \
  V(JSBoundFunction, JS_BOUND_FUNCTION_TYPE) /* https://crsrc.org/c/v8/src/objects/js-function.tq?l=9&c=1 */ \
  V(JSWrappedFunction, JS_WRAPPED_FUNCTION_TYPE) /* https://crsrc.org/c/v8/src/objects/js-function.tq?l=22&c=1 */ \
  V(JSIteratorConcatHelper, JS_ITERATOR_CONCAT_HELPER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=55&c=1 */ \
  V(JSIteratorDropHelper, JS_ITERATOR_DROP_HELPER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=43&c=1 */ \
  V(JSIteratorFilterHelper, JS_ITERATOR_FILTER_HELPER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=32&c=1 */ \
  V(JSIteratorFlatMapHelper, JS_ITERATOR_FLAT_MAP_HELPER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=48&c=1 */ \
  V(JSIteratorMapHelper, JS_ITERATOR_MAP_HELPER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=26&c=1 */ \
  V(JSIteratorTakeHelper, JS_ITERATOR_TAKE_HELPER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=38&c=1 */ \
  V(JSIteratorZipKeyedHelper, JS_ITERATOR_ZIP_KEYED_HELPER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=75&c=1 */ \
  V(JSAsyncDisposableStack, JS_ASYNC_DISPOSABLE_STACK_TYPE) /* https://crsrc.org/c/v8/src/objects/js-disposable-stack.tq?l=41&c=1 */ \
  V(JSSyncDisposableStack, JS_SYNC_DISPOSABLE_STACK_TYPE) /* https://crsrc.org/c/v8/src/objects/js-disposable-stack.tq?l=38&c=1 */ \
  V(JSAsyncFunctionObject, JS_ASYNC_FUNCTION_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-generator.tq?l=41&c=1 */ \
  V(JSAsyncGeneratorObject, JS_ASYNC_GENERATOR_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-generator.tq?l=50&c=1 */ \
  V(JSSharedArray, JS_SHARED_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/js-shared-array.tq?l=5&c=1 */ \
  V(JSSharedStruct, JS_SHARED_STRUCT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-struct.tq?l=12&c=1 */ \
  V(JSMap, JS_MAP_TYPE) /* https://crsrc.org/c/v8/src/objects/js-collection.tq?l=15&c=1 */ \
  V(JSSet, JS_SET_TYPE) /* https://crsrc.org/c/v8/src/objects/js-collection.tq?l=13&c=1 */ \
  V(JSPromise, JS_PROMISE_TYPE) /* https://crsrc.org/c/v8/src/objects/js-promise.tq?l=14&c=1 */ \
  V(JSWeakMap, JS_WEAK_MAP_TYPE) /* https://crsrc.org/c/v8/src/objects/js-collection.tq?l=26&c=1 */ \
  V(JSWeakSet, JS_WEAK_SET_TYPE) /* https://crsrc.org/c/v8/src/objects/js-collection.tq?l=24&c=1 */ \
  V(JSArgumentsObject, JS_ARGUMENTS_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/objects/arguments.tq?l=5&c=1 */ \
  V(JSArray, JS_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array.tq?l=62&c=1 */ \
  V(JSArrayIterator, JS_ARRAY_ITERATOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array.tq?l=7&c=1 */ \
  V(JSAsyncFromSyncIterator, JS_ASYNC_FROM_SYNC_ITERATOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=200&c=1 */ \
  V(JSCollator, JS_COLLATOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-collator.tq?l=7&c=1 */ \
  V(JSDate, JS_DATE_TYPE) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=179&c=1 */ \
  V(JSDateTimeFormat, JS_DATE_TIME_FORMAT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-date-time-format.tq?l=20&c=1 */ \
  V(JSDisplayNames, JS_DISPLAY_NAMES_TYPE) /* https://crsrc.org/c/v8/src/objects/js-display-names.tq?l=19&c=1 */ \
  V(JSDurationFormat, JS_DURATION_FORMAT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-duration-format.tq?l=45&c=1 */ \
  V(JSExternalObject, JS_EXTERNAL_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=45&c=1 */ \
  V(JSFinalizationRegistry, JS_FINALIZATION_REGISTRY_TYPE) /* https://crsrc.org/c/v8/src/objects/js-weak-refs.tq?l=10&c=1 */ \
  V(JSListFormat, JS_LIST_FORMAT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-list-format.tq?l=15&c=1 */ \
  V(JSLocale, JS_LOCALE_TYPE) /* https://crsrc.org/c/v8/src/objects/js-locale.tq?l=7&c=1 */ \
  V(JSMessageObject, JS_MESSAGE_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=159&c=1 */ \
  V(JSNumberFormat, JS_NUMBER_FORMAT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-number-format.tq?l=7&c=1 */ \
  V(JSPluralRules, JS_PLURAL_RULES_TYPE) /* https://crsrc.org/c/v8/src/objects/js-plural-rules.tq?l=13&c=1 */ \
  V(JSRawJson, JS_RAW_JSON_TYPE) /* https://crsrc.org/c/v8/src/objects/js-raw-json.tq?l=7&c=1 */ \
  V(JSRegExp, JS_REG_EXP_TYPE) /* https://crsrc.org/c/v8/src/objects/js-regexp.tq?l=65&c=1 */ \
  V(JSRegExpStringIterator, JS_REG_EXP_STRING_ITERATOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-regexp-string-iterator.tq?l=12&c=1 */ \
  V(JSRelativeTimeFormat, JS_RELATIVE_TIME_FORMAT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-relative-time-format.tq?l=14&c=1 */ \
  V(JSSegmentIterator, JS_SEGMENT_ITERATOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=12&c=1 */ \
  V(JSSegmenter, JS_SEGMENTER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-segmenter.tq?l=14&c=1 */ \
  V(JSSegments, JS_SEGMENTS_TYPE) /* https://crsrc.org/c/v8/src/objects/js-segments.tq?l=12&c=1 */ \
  V(JSShadowRealm, JS_SHADOW_REALM_TYPE) /* https://crsrc.org/c/v8/src/objects/js-shadow-realm.tq?l=5&c=1 */ \
  V(JSStringIterator, JS_STRING_ITERATOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=208&c=1 */ \
  V(JSTemporalDuration, JS_TEMPORAL_DURATION_TYPE) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=7&c=1 */ \
  V(JSTemporalInstant, JS_TEMPORAL_INSTANT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=12&c=1 */ \
  V(JSTemporalPlainDate, JS_TEMPORAL_PLAIN_DATE_TYPE) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=22&c=1 */ \
  V(JSTemporalPlainDateTime, JS_TEMPORAL_PLAIN_DATE_TIME_TYPE) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=17&c=1 */ \
  V(JSTemporalPlainMonthDay, JS_TEMPORAL_PLAIN_MONTH_DAY_TYPE) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=27&c=1 */ \
  V(JSTemporalPlainTime, JS_TEMPORAL_PLAIN_TIME_TYPE) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=32&c=1 */ \
  V(JSTemporalPlainYearMonth, JS_TEMPORAL_PLAIN_YEAR_MONTH_TYPE) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=37&c=1 */ \
  V(JSTemporalZonedDateTime, JS_TEMPORAL_ZONED_DATE_TIME_TYPE) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=42&c=1 */ \
  V(JSV8BreakIterator, JS_V8_BREAK_ITERATOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-break-iterator.tq?l=7&c=1 */ \
  V(JSValidIteratorWrapper, JS_VALID_ITERATOR_WRAPPER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=218&c=1 */ \
  V(JSWeakRef, JS_WEAK_REF_TYPE) /* https://crsrc.org/c/v8/src/objects/js-weak-refs.tq?l=45&c=1 */ \
  V(WasmCustomMapWrapper, WASM_CUSTOM_MAP_WRAPPER_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=330&c=1 */ \
  V(WasmGlobalObject, WASM_GLOBAL_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=261&c=1 */ \
  V(WasmInstanceObject, WASM_INSTANCE_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=39&c=1 */ \
  V(WasmMemoryObject, WASM_MEMORY_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=240&c=1 */ \
  V(WasmModuleObject, WASM_MODULE_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=198&c=1 */ \
  V(WasmSuspendingObject, WASM_SUSPENDING_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=351&c=1 */ \
  V(WasmTableObject, WASM_TABLE_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=207&c=1 */ \
  V(WasmTagObject, WASM_TAG_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=282&c=1 */ \

// Same, for classes whose IT is also held by subclasses.
#define TORQUE_DEBUG_READER_CLASSES_MULTIPLE(V) \
  V(UncompiledDataWithPreparseData, UNCOMPILED_DATA_WITH_PREPARSE_DATA_TYPE) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=172&c=1 */ \
  V(UncompiledDataWithoutPreparseData, UNCOMPILED_DATA_WITHOUT_PREPARSE_DATA_TYPE) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=169&c=1 */ \
  V(RegExpData, REG_EXP_DATA_TYPE) /* https://crsrc.org/c/v8/src/objects/js-regexp.tq?l=18&c=1 */ \
  V(WasmFunctionData, WASM_FUNCTION_DATA_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=120&c=1 */ \
  V(FixedArray, FIXED_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=5&c=1 */ \
  V(WeakFixedArray, WEAK_FIXED_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=22&c=1 */ \
  V(Map, MAP_TYPE) /* https://crsrc.org/c/v8/src/objects/map.tq?l=43&c=1 */ \
  V(JSObject, JS_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=15&c=1 */ \
  V(JSModuleNamespace, JS_MODULE_NAMESPACE_TYPE) /* https://crsrc.org/c/v8/src/objects/module.tq?l=22&c=1 */ \
  V(JSTypedArray, JS_TYPED_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=120&c=1 */ \
  V(JSFunctionWithPrototype, JS_FUNCTION_WITH_PROTOTYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/js-function.tq?l=61&c=1 */ \
  V(JSIteratorZipHelper, JS_ITERATOR_ZIP_HELPER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=67&c=1 */ \
  V(JSDisposableStackBase, JS_DISPOSABLE_STACK_BASE_TYPE) /* https://crsrc.org/c/v8/src/objects/js-disposable-stack.tq?l=25&c=1 */ \
  V(JSGeneratorObject, JS_GENERATOR_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-generator.tq?l=15&c=1 */ \
  V(JSObjectWithEmbedderSlots, JS_OBJECT_WITH_EMBEDDER_SLOTS_TYPE) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=53&c=1 */ \

// Triples of (ClassName, FIRST_TYPE, LAST_TYPE) for classes with
// a Torque body that span a contiguous IT range.
#define TORQUE_DEBUG_READER_CLASSES_RANGE(V) \
  V(String, FIRST_STRING_TYPE, LAST_STRING_TYPE) \
  V(Name, FIRST_NAME_TYPE, LAST_NAME_TYPE) \
  V(PrimitiveHeapObject, FIRST_PRIMITIVE_HEAP_OBJECT_TYPE, LAST_PRIMITIVE_HEAP_OBJECT_TYPE) \
  V(PromiseReactionJobTask, FIRST_PROMISE_REACTION_JOB_TASK_TYPE, LAST_PROMISE_REACTION_JOB_TASK_TYPE) \
  V(Microtask, FIRST_MICROTASK_TYPE, LAST_MICROTASK_TYPE) \
  V(DataHandler, FIRST_DATA_HANDLER_TYPE, LAST_DATA_HANDLER_TYPE) \
  V(Struct, FIRST_STRUCT_TYPE, LAST_STRUCT_TYPE) \
  V(UncompiledDataWithPreparseData, FIRST_UNCOMPILED_DATA_WITH_PREPARSE_DATA_TYPE, LAST_UNCOMPILED_DATA_WITH_PREPARSE_DATA_TYPE) \
  V(UncompiledDataWithoutPreparseData, FIRST_UNCOMPILED_DATA_WITHOUT_PREPARSE_DATA_TYPE, LAST_UNCOMPILED_DATA_WITHOUT_PREPARSE_DATA_TYPE) \
  V(UncompiledData, FIRST_UNCOMPILED_DATA_TYPE, LAST_UNCOMPILED_DATA_TYPE) \
  V(RegExpData, FIRST_REG_EXP_DATA_TYPE, LAST_REG_EXP_DATA_TYPE) \
  V(WasmFunctionData, FIRST_WASM_FUNCTION_DATA_TYPE, LAST_WASM_FUNCTION_DATA_TYPE) \
  V(ExposedTrustedObject, FIRST_EXPOSED_TRUSTED_OBJECT_TYPE, LAST_EXPOSED_TRUSTED_OBJECT_TYPE) \
  V(TrustedFixedArrayBase, FIRST_TRUSTED_FIXED_ARRAY_BASE_TYPE, LAST_TRUSTED_FIXED_ARRAY_BASE_TYPE) \
  V(TrustedObject, FIRST_TRUSTED_OBJECT_TYPE, LAST_TRUSTED_OBJECT_TYPE) \
  V(FixedArray, FIRST_FIXED_ARRAY_TYPE, LAST_FIXED_ARRAY_TYPE) \
  V(WeakFixedArray, FIRST_WEAK_FIXED_ARRAY_TYPE, LAST_WEAK_FIXED_ARRAY_TYPE) \
  V(FixedArrayBase, FIRST_FIXED_ARRAY_BASE_TYPE, LAST_FIXED_ARRAY_BASE_TYPE) \
  V(Context, FIRST_CONTEXT_TYPE, LAST_CONTEXT_TYPE) \
  V(TurboshaftFloat64Type, FIRST_TURBOSHAFT_FLOAT64_TYPE_TYPE, LAST_TURBOSHAFT_FLOAT64_TYPE_TYPE) \
  V(TurboshaftWord32Type, FIRST_TURBOSHAFT_WORD32_TYPE_TYPE, LAST_TURBOSHAFT_WORD32_TYPE_TYPE) \
  V(TurboshaftWord64Type, FIRST_TURBOSHAFT_WORD64_TYPE_TYPE, LAST_TURBOSHAFT_WORD64_TYPE_TYPE) \
  V(TurboshaftType, FIRST_TURBOSHAFT_TYPE_TYPE, LAST_TURBOSHAFT_TYPE_TYPE) \
  V(TurbofanType, FIRST_TURBOFAN_TYPE_TYPE, LAST_TURBOFAN_TYPE_TYPE) \
  V(SmallOrderedHashTable, FIRST_SMALL_ORDERED_HASH_TABLE_TYPE, LAST_SMALL_ORDERED_HASH_TABLE_TYPE) \
  V(TemplateInfoWithProperties, FIRST_TEMPLATE_INFO_WITH_PROPERTIES_TYPE, LAST_TEMPLATE_INFO_WITH_PROPERTIES_TYPE) \
  V(TemplateInfo, FIRST_TEMPLATE_INFO_TYPE, LAST_TEMPLATE_INFO_TYPE) \
  V(Map, FIRST_MAP_TYPE, LAST_MAP_TYPE) \
  V(Module, FIRST_MODULE_TYPE, LAST_MODULE_TYPE) \
  V(WasmObject, FIRST_WASM_OBJECT_TYPE, LAST_WASM_OBJECT_TYPE) \
  V(JSModuleNamespace, FIRST_JS_MODULE_NAMESPACE_TYPE, LAST_JS_MODULE_NAMESPACE_TYPE) \
  V(JSSpecialObject, FIRST_JS_SPECIAL_OBJECT_TYPE, LAST_JS_SPECIAL_OBJECT_TYPE) \
  V(JSCustomElementsObject, FIRST_JS_CUSTOM_ELEMENTS_OBJECT_TYPE, LAST_JS_CUSTOM_ELEMENTS_OBJECT_TYPE) \
  V(JSDataViewOrRabGsabDataView, FIRST_JS_DATA_VIEW_OR_RAB_GSAB_DATA_VIEW_TYPE, LAST_JS_DATA_VIEW_OR_RAB_GSAB_DATA_VIEW_TYPE) \
  V(JSTypedArray, FIRST_JS_TYPED_ARRAY_TYPE, LAST_JS_TYPED_ARRAY_TYPE) \
  V(JSArrayBufferView, FIRST_JS_ARRAY_BUFFER_VIEW_TYPE, LAST_JS_ARRAY_BUFFER_VIEW_TYPE) \
  V(JSAPIObjectWithEmbedderSlots, FIRST_JS_APIOBJECT_WITH_EMBEDDER_SLOTS_TYPE, LAST_JS_APIOBJECT_WITH_EMBEDDER_SLOTS_TYPE) \
  V(JSFunctionWithPrototype, FIRST_JS_FUNCTION_WITH_PROTOTYPE_TYPE, LAST_JS_FUNCTION_WITH_PROTOTYPE_TYPE) \
  V(JSFunction, FIRST_JS_FUNCTION_TYPE, LAST_JS_FUNCTION_TYPE) \
  V(JSFunctionOrBoundFunctionOrWrappedFunction, FIRST_JS_FUNCTION_OR_BOUND_FUNCTION_OR_WRAPPED_FUNCTION_TYPE, LAST_JS_FUNCTION_OR_BOUND_FUNCTION_OR_WRAPPED_FUNCTION_TYPE) \
  V(JSIteratorHelperSimple, FIRST_JS_ITERATOR_HELPER_SIMPLE_TYPE, LAST_JS_ITERATOR_HELPER_SIMPLE_TYPE) \
  V(JSIteratorZipHelper, FIRST_JS_ITERATOR_ZIP_HELPER_TYPE, LAST_JS_ITERATOR_ZIP_HELPER_TYPE) \
  V(JSIteratorHelper, FIRST_JS_ITERATOR_HELPER_TYPE, LAST_JS_ITERATOR_HELPER_TYPE) \
  V(JSMapIterator, FIRST_JS_MAP_ITERATOR_TYPE, LAST_JS_MAP_ITERATOR_TYPE) \
  V(JSSetIterator, FIRST_JS_SET_ITERATOR_TYPE, LAST_JS_SET_ITERATOR_TYPE) \
  V(JSCollectionIterator, FIRST_JS_COLLECTION_ITERATOR_TYPE, LAST_JS_COLLECTION_ITERATOR_TYPE) \
  V(JSDisposableStackBase, FIRST_JS_DISPOSABLE_STACK_BASE_TYPE, LAST_JS_DISPOSABLE_STACK_BASE_TYPE) \
  V(JSGeneratorObject, FIRST_JS_GENERATOR_OBJECT_TYPE, LAST_JS_GENERATOR_OBJECT_TYPE) \
  V(AlwaysSharedSpaceJSObject, FIRST_ALWAYS_SHARED_SPACE_JS_OBJECT_TYPE, LAST_ALWAYS_SHARED_SPACE_JS_OBJECT_TYPE) \
  V(JSCollection, FIRST_JS_COLLECTION_TYPE, LAST_JS_COLLECTION_TYPE) \
  V(JSObjectWithEmbedderSlots, FIRST_JS_OBJECT_WITH_EMBEDDER_SLOTS_TYPE, LAST_JS_OBJECT_WITH_EMBEDDER_SLOTS_TYPE) \
  V(JSWeakCollection, FIRST_JS_WEAK_COLLECTION_TYPE, LAST_JS_WEAK_COLLECTION_TYPE) \
  V(JSObject, FIRST_JS_OBJECT_TYPE, LAST_JS_OBJECT_TYPE) \
  V(JSReceiver, FIRST_JS_RECEIVER_TYPE, LAST_JS_RECEIVER_TYPE) \

#endif  // V8_GEN_TORQUE_GENERATED_DEBUG_READER_CLASSES_LIST_H_
