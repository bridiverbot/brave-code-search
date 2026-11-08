#include "src/wasm/wasm-objects.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=110&c=1
class TorqueGeneratedWasmFuncRefAsserts {
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=113&c=3
  static constexpr int kTrustedInternalOffset = 4;
  static constexpr int kTrustedInternalOffsetEnd = kTrustedInternalOffset + kTrustedPointerSize - 1;
  static constexpr int kStartOfWeakFieldsOffset = kTrustedInternalOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kTrustedInternalOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kTrustedInternalOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kTrustedInternalOffsetEnd + 1;
  static constexpr int kHeaderSize = kTrustedInternalOffsetEnd + 1;
  static constexpr int kSize = kTrustedInternalOffsetEnd + 1;

  static_assert(kTrustedInternalOffset == offsetof(WasmFuncRef, trusted_internal_),
                "Value of WasmFuncRef::kTrustedInternalOffset defined in Torque and offset of field WasmFuncRef::trusted_internal in C++ do not match");
  static_assert(kSize <= sizeof(WasmFuncRef) && sizeof(WasmFuncRef) < kSize + alignof(WasmFuncRef));
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=343&c=1
class TorqueGeneratedWasmNullAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 4;
  static constexpr int kEndOfWeakFieldsOffset = 4;
  static constexpr int kStartOfStrongFieldsOffset = 4;
  static constexpr int kEndOfStrongFieldsOffset = 4;
  static constexpr int kHeaderSize = 4;
  static constexpr int kSize = 4;

  static_assert(kSize <= sizeof(WasmNull) && sizeof(WasmNull) < kSize + alignof(WasmNull));
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=49&c=1
class TorqueGeneratedWasmImportDataAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 4;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=54&c=3
  static constexpr int kProtectedImportingInstanceDataOffset = 4;
  static constexpr int kProtectedImportingInstanceDataOffsetEnd = kProtectedImportingInstanceDataOffset + kTaggedSize - 1;
  static constexpr int kEndOfWeakFieldsOffset = kProtectedImportingInstanceDataOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kProtectedImportingInstanceDataOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=55&c=3
  static constexpr int kNativeContextOffset = kProtectedImportingInstanceDataOffsetEnd + 1;
  static constexpr int kNativeContextOffsetEnd = kNativeContextOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=56&c=3
  static constexpr int kCallableOffset = kNativeContextOffsetEnd + 1;
  static constexpr int kCallableOffsetEnd = kCallableOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=58&c=3
  static constexpr int kWrapperBudgetOffset = kCallableOffsetEnd + 1;
  static constexpr int kWrapperBudgetOffsetEnd = kWrapperBudgetOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kWrapperBudgetOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=60&c=3
  static constexpr int kSigOffset = kWrapperBudgetOffsetEnd + 1;
  static constexpr int kSigOffsetEnd = kSigOffset + kSystemPointerSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=62&c=3
  static constexpr int kBitFieldOffset = kSigOffsetEnd + 1;
  static constexpr int kBitFieldOffsetEnd = kBitFieldOffset + kInt32Size - 1;
  static constexpr int kHeaderSize = kBitFieldOffsetEnd + 1;
  static constexpr int kSize = kBitFieldOffsetEnd + 1;

  static_assert(kProtectedImportingInstanceDataOffset == offsetof(WasmImportData, protected_importing_instance_data_),
                "Value of WasmImportData::kProtectedImportingInstanceDataOffset defined in Torque and offset of field WasmImportData::protected_importing_instance_data in C++ do not match");
  static_assert(kNativeContextOffset == offsetof(WasmImportData, native_context_),
                "Value of WasmImportData::kNativeContextOffset defined in Torque and offset of field WasmImportData::native_context in C++ do not match");
  static_assert(kCallableOffset == offsetof(WasmImportData, callable_),
                "Value of WasmImportData::kCallableOffset defined in Torque and offset of field WasmImportData::callable in C++ do not match");
  static_assert(kWrapperBudgetOffset == offsetof(WasmImportData, wrapper_budget_),
                "Value of WasmImportData::kWrapperBudgetOffset defined in Torque and offset of field WasmImportData::wrapper_budget in C++ do not match");
  static_assert(kSigOffset == offsetof(WasmImportData, sig_),
                "Value of WasmImportData::kSigOffset defined in Torque and offset of field WasmImportData::sig in C++ do not match");
  static_assert(kBitFieldOffset == offsetof(WasmImportData, bit_field_),
                "Value of WasmImportData::kBitFieldOffset defined in Torque and offset of field WasmImportData::bit_field in C++ do not match");
  static_assert(kSize <= sizeof(WasmImportData) && sizeof(WasmImportData) < kSize + alignof(WasmImportData));
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=39&c=1
class TorqueGeneratedWasmInstanceObjectAsserts {
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=41&c=3
  static constexpr int kTrustedDataOffset = 12;
  static constexpr int kTrustedDataOffsetEnd = kTrustedDataOffset + kTrustedPointerSize - 1;
  static constexpr int kStartOfStrongFieldsOffset = kTrustedDataOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=42&c=3
  static constexpr int kModuleObjectOffset = kTrustedDataOffsetEnd + 1;
  static constexpr int kModuleObjectOffsetEnd = kModuleObjectOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=43&c=3
  static constexpr int kExportsObjectOffset = kModuleObjectOffsetEnd + 1;
  static constexpr int kExportsObjectOffsetEnd = kExportsObjectOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kExportsObjectOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kExportsObjectOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kExportsObjectOffsetEnd + 1;
  static constexpr int kHeaderSize = kExportsObjectOffsetEnd + 1;

  static_assert(kTrustedDataOffset == offsetof(WasmInstanceObject, trusted_data_),
                "Value of WasmInstanceObject::kTrustedDataOffset defined in Torque and offset of field WasmInstanceObject::trusted_data in C++ do not match");
  static_assert(kModuleObjectOffset == offsetof(WasmInstanceObject, module_object_),
                "Value of WasmInstanceObject::kModuleObjectOffset defined in Torque and offset of field WasmInstanceObject::module_object in C++ do not match");
  static_assert(kExportsObjectOffset == offsetof(WasmInstanceObject, exports_object_),
                "Value of WasmInstanceObject::kExportsObjectOffset defined in Torque and offset of field WasmInstanceObject::exports_object in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=70&c=1
class TorqueGeneratedWasmFastApiCallDataAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 4;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=72&c=3
  static constexpr int kSignatureOffset = 4;
  static constexpr int kSignatureOffsetEnd = kSignatureOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=73&c=3
  static constexpr int kCallbackDataOffset = kSignatureOffsetEnd + 1;
  static constexpr int kCallbackDataOffsetEnd = kCallbackDataOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kCallbackDataOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kCallbackDataOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=74&c=3
  static constexpr int kCachedMapOffset = kCallbackDataOffsetEnd + 1;
  static constexpr int kCachedMapOffsetEnd = kCachedMapOffset + kTaggedSize - 1;
  static constexpr int kEndOfWeakFieldsOffset = kCachedMapOffsetEnd + 1;
  static constexpr int kHeaderSize = kCachedMapOffsetEnd + 1;
  static constexpr int kSize = kCachedMapOffsetEnd + 1;

  static_assert(kSignatureOffset == offsetof(WasmFastApiCallData, signature_),
                "Value of WasmFastApiCallData::kSignatureOffset defined in Torque and offset of field WasmFastApiCallData::signature in C++ do not match");
  static_assert(kCallbackDataOffset == offsetof(WasmFastApiCallData, callback_data_),
                "Value of WasmFastApiCallData::kCallbackDataOffset defined in Torque and offset of field WasmFastApiCallData::callback_data in C++ do not match");
  static_assert(kCachedMapOffset == offsetof(WasmFastApiCallData, cached_map_),
                "Value of WasmFastApiCallData::kCachedMapOffset defined in Torque and offset of field WasmFastApiCallData::cached_map in C++ do not match");
  static_assert(kSize <= sizeof(WasmFastApiCallData) && sizeof(WasmFastApiCallData) < kSize + alignof(WasmFastApiCallData));
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=79&c=1
class TorqueGeneratedWasmInternalFunctionAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 8;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=87&c=3
  static constexpr int kProtectedImplicitArgOffset = 8;
  static constexpr int kProtectedImplicitArgOffsetEnd = kProtectedImplicitArgOffset + kTaggedSize - 1;
  static constexpr int kEndOfWeakFieldsOffset = kProtectedImplicitArgOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kProtectedImplicitArgOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=90&c=3
  static constexpr int kExternalOffset = kProtectedImplicitArgOffsetEnd + 1;
  static constexpr int kExternalOffsetEnd = kExternalOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=98&c=3
  static constexpr int kFunctionIndexOffset = kExternalOffsetEnd + 1;
  static constexpr int kFunctionIndexOffsetEnd = kFunctionIndexOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kFunctionIndexOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=100&c=3
  static constexpr int kRawCallTargetOffset = kFunctionIndexOffsetEnd + 1;
  static constexpr int kRawCallTargetOffsetEnd = kRawCallTargetOffset + kInt32Size - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=102&c=3
  static constexpr int kSigOffset = kRawCallTargetOffsetEnd + 1;
  static constexpr int kSigOffsetEnd = kSigOffset + kSystemPointerSize - 1;
  static constexpr int kHeaderSize = kSigOffsetEnd + 1;
  static constexpr int kSize = kSigOffsetEnd + 1;

  static_assert(kProtectedImplicitArgOffset == offsetof(WasmInternalFunction, protected_implicit_arg_),
                "Value of WasmInternalFunction::kProtectedImplicitArgOffset defined in Torque and offset of field WasmInternalFunction::protected_implicit_arg in C++ do not match");
  static_assert(kExternalOffset == offsetof(WasmInternalFunction, external_),
                "Value of WasmInternalFunction::kExternalOffset defined in Torque and offset of field WasmInternalFunction::external in C++ do not match");
  static_assert(kFunctionIndexOffset == offsetof(WasmInternalFunction, function_index_),
                "Value of WasmInternalFunction::kFunctionIndexOffset defined in Torque and offset of field WasmInternalFunction::function_index in C++ do not match");
  static_assert(kRawCallTargetOffset == offsetof(WasmInternalFunction, raw_call_target_),
                "Value of WasmInternalFunction::kRawCallTargetOffset defined in Torque and offset of field WasmInternalFunction::raw_call_target in C++ do not match");
  static_assert(kSigOffset == offsetof(WasmInternalFunction, sig_),
                "Value of WasmInternalFunction::kSigOffset defined in Torque and offset of field WasmInternalFunction::sig in C++ do not match");
  static_assert(kSize <= sizeof(WasmInternalFunction) && sizeof(WasmInternalFunction) < kSize + alignof(WasmInternalFunction));
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=120&c=1
class TorqueGeneratedWasmFunctionDataAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 8;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=124&c=3
  static constexpr int kFuncRefOffset = 8;
  static constexpr int kFuncRefOffsetEnd = kFuncRefOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=126&c=3
  static constexpr int kJsPromiseFlagsOffset = kFuncRefOffsetEnd + 1;
  static constexpr int kJsPromiseFlagsOffsetEnd = kJsPromiseFlagsOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kJsPromiseFlagsOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kJsPromiseFlagsOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=129&c=3
  static constexpr int kProtectedInternalOffset = kJsPromiseFlagsOffsetEnd + 1;
  static constexpr int kProtectedInternalOffsetEnd = kProtectedInternalOffset + kTaggedSize - 1;
  static constexpr int kEndOfWeakFieldsOffset = kProtectedInternalOffsetEnd + 1;
  static constexpr int kHeaderSize = kProtectedInternalOffsetEnd + 1;
  static constexpr int kSize = kProtectedInternalOffsetEnd + 1;

  static_assert(kFuncRefOffset == offsetof(WasmFunctionData, func_ref_),
                "Value of WasmFunctionData::kFuncRefOffset defined in Torque and offset of field WasmFunctionData::func_ref in C++ do not match");
  static_assert(kJsPromiseFlagsOffset == offsetof(WasmFunctionData, js_promise_flags_),
                "Value of WasmFunctionData::kJsPromiseFlagsOffset defined in Torque and offset of field WasmFunctionData::js_promise_flags in C++ do not match");
  static_assert(kProtectedInternalOffset == offsetof(WasmFunctionData, protected_internal_),
                "Value of WasmFunctionData::kProtectedInternalOffset defined in Torque and offset of field WasmFunctionData::protected_internal in C++ do not match");
  static_assert(kSize <= sizeof(WasmFunctionData) && sizeof(WasmFunctionData) < kSize + alignof(WasmFunctionData));
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=135&c=1
class TorqueGeneratedWasmExportedFunctionDataAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 20;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=140&c=3
  static constexpr int kProtectedInstanceDataOffset = 20;
  static constexpr int kProtectedInstanceDataOffsetEnd = kProtectedInstanceDataOffset + kTaggedSize - 1;
  static constexpr int kEndOfWeakFieldsOffset = kProtectedInstanceDataOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kProtectedInstanceDataOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=141&c=3
  static constexpr int kFunctionIndexOffset = kProtectedInstanceDataOffsetEnd + 1;
  static constexpr int kFunctionIndexOffsetEnd = kFunctionIndexOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=143&c=3
  static constexpr int kWrapperBudgetOffset = kFunctionIndexOffsetEnd + 1;
  static constexpr int kWrapperBudgetOffsetEnd = kWrapperBudgetOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=148&c=3
  static constexpr int kPackedArgsSizeOffset = kWrapperBudgetOffsetEnd + 1;
  static constexpr int kPackedArgsSizeOffsetEnd = kPackedArgsSizeOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kPackedArgsSizeOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=149&c=3
  static constexpr int kCWrapperCodeOffset = kPackedArgsSizeOffsetEnd + 1;
  static constexpr int kCWrapperCodeOffsetEnd = kCWrapperCodeOffset + kTrustedPointerSize - 1;
  static constexpr int kHeaderSize = kCWrapperCodeOffsetEnd + 1;
  static constexpr int kSize = kCWrapperCodeOffsetEnd + 1;

  static_assert(kProtectedInstanceDataOffset == offsetof(WasmExportedFunctionData, protected_instance_data_),
                "Value of WasmExportedFunctionData::kProtectedInstanceDataOffset defined in Torque and offset of field WasmExportedFunctionData::protected_instance_data in C++ do not match");
  static_assert(kFunctionIndexOffset == offsetof(WasmExportedFunctionData, function_index_),
                "Value of WasmExportedFunctionData::kFunctionIndexOffset defined in Torque and offset of field WasmExportedFunctionData::function_index in C++ do not match");
  static_assert(kWrapperBudgetOffset == offsetof(WasmExportedFunctionData, wrapper_budget_),
                "Value of WasmExportedFunctionData::kWrapperBudgetOffset defined in Torque and offset of field WasmExportedFunctionData::wrapper_budget in C++ do not match");
  static_assert(kPackedArgsSizeOffset == offsetof(WasmExportedFunctionData, packed_args_size_),
                "Value of WasmExportedFunctionData::kPackedArgsSizeOffset defined in Torque and offset of field WasmExportedFunctionData::packed_args_size in C++ do not match");
  static_assert(kCWrapperCodeOffset == offsetof(WasmExportedFunctionData, c_wrapper_code_),
                "Value of WasmExportedFunctionData::kCWrapperCodeOffset defined in Torque and offset of field WasmExportedFunctionData::c_wrapper_code in C++ do not match");
  static_assert(kSize <= sizeof(WasmExportedFunctionData) && sizeof(WasmExportedFunctionData) < kSize + alignof(WasmExportedFunctionData));
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=156&c=1
class TorqueGeneratedWasmCapiFunctionDataAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 20;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=158&c=3
  static constexpr int kEmbedderDataOffset = 20;
  static constexpr int kEmbedderDataOffsetEnd = kEmbedderDataOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kEmbedderDataOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kEmbedderDataOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kEmbedderDataOffsetEnd + 1;
  static constexpr int kHeaderSize = kEmbedderDataOffsetEnd + 1;
  static constexpr int kSize = kEmbedderDataOffsetEnd + 1;

  static_assert(kEmbedderDataOffset == offsetof(WasmCapiFunctionData, embedder_data_),
                "Value of WasmCapiFunctionData::kEmbedderDataOffset defined in Torque and offset of field WasmCapiFunctionData::embedder_data in C++ do not match");
  static_assert(kSize <= sizeof(WasmCapiFunctionData) && sizeof(WasmCapiFunctionData) < kSize + alignof(WasmCapiFunctionData));
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=161&c=1
class TorqueGeneratedWasmResumeDataAsserts {
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=163&c=3
  static constexpr int kTrustedSuspenderOffset = 4;
  static constexpr int kTrustedSuspenderOffsetEnd = kTrustedSuspenderOffset + kTrustedPointerSize - 1;
  static constexpr int kStartOfStrongFieldsOffset = kTrustedSuspenderOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=164&c=3
  static constexpr int kOnResumeOffset = kTrustedSuspenderOffsetEnd + 1;
  static constexpr int kOnResumeOffsetEnd = kOnResumeOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kOnResumeOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kOnResumeOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kOnResumeOffsetEnd + 1;
  static constexpr int kHeaderSize = kOnResumeOffsetEnd + 1;
  static constexpr int kSize = kOnResumeOffsetEnd + 1;

  static_assert(kTrustedSuspenderOffset == offsetof(WasmResumeData, trusted_suspender_),
                "Value of WasmResumeData::kTrustedSuspenderOffset defined in Torque and offset of field WasmResumeData::trusted_suspender in C++ do not match");
  static_assert(kOnResumeOffset == offsetof(WasmResumeData, on_resume_),
                "Value of WasmResumeData::kOnResumeOffset defined in Torque and offset of field WasmResumeData::on_resume in C++ do not match");
  static_assert(kSize <= sizeof(WasmResumeData) && sizeof(WasmResumeData) < kSize + alignof(WasmResumeData));
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=167&c=1
class TorqueGeneratedWasmSuspenderObjectAsserts {
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=169&c=3
  static constexpr int kStackOffset = 8;
  static constexpr int kStackOffsetEnd = kStackOffset + kSystemPointerSize - 1;
  static constexpr int kStartOfWeakFieldsOffset = kStackOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=170&c=3
  static constexpr int kParentOffset = kStackOffsetEnd + 1;
  static constexpr int kParentOffsetEnd = kParentOffset + kTaggedSize - 1;
  static constexpr int kEndOfWeakFieldsOffset = kParentOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kParentOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=171&c=3
  static constexpr int kPromiseOffset = kParentOffsetEnd + 1;
  static constexpr int kPromiseOffsetEnd = kPromiseOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=172&c=3
  static constexpr int kResumeOffset = kPromiseOffsetEnd + 1;
  static constexpr int kResumeOffsetEnd = kResumeOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=173&c=3
  static constexpr int kRejectOffset = kResumeOffsetEnd + 1;
  static constexpr int kRejectOffsetEnd = kRejectOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kRejectOffsetEnd + 1;
  static constexpr int kHeaderSize = kRejectOffsetEnd + 1;
  static constexpr int kSize = kRejectOffsetEnd + 1;

  static_assert(kStackOffset == offsetof(WasmSuspenderObject, stack_),
                "Value of WasmSuspenderObject::kStackOffset defined in Torque and offset of field WasmSuspenderObject::stack in C++ do not match");
  static_assert(kParentOffset == offsetof(WasmSuspenderObject, parent_),
                "Value of WasmSuspenderObject::kParentOffset defined in Torque and offset of field WasmSuspenderObject::parent in C++ do not match");
  static_assert(kPromiseOffset == offsetof(WasmSuspenderObject, promise_),
                "Value of WasmSuspenderObject::kPromiseOffset defined in Torque and offset of field WasmSuspenderObject::promise in C++ do not match");
  static_assert(kResumeOffset == offsetof(WasmSuspenderObject, resume_),
                "Value of WasmSuspenderObject::kResumeOffset defined in Torque and offset of field WasmSuspenderObject::resume in C++ do not match");
  static_assert(kRejectOffset == offsetof(WasmSuspenderObject, reject_),
                "Value of WasmSuspenderObject::kRejectOffset defined in Torque and offset of field WasmSuspenderObject::reject in C++ do not match");
  static_assert(kSize <= sizeof(WasmSuspenderObject) && sizeof(WasmSuspenderObject) < kSize + alignof(WasmSuspenderObject));
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=176&c=1
class TorqueGeneratedWasmContinuationObjectAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 4;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=178&c=3
  static constexpr int kStackObjOffset = 4;
  static constexpr int kStackObjOffsetEnd = kStackObjOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kStackObjOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kStackObjOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kStackObjOffsetEnd + 1;
  static constexpr int kHeaderSize = kStackObjOffsetEnd + 1;
  static constexpr int kSize = kStackObjOffsetEnd + 1;

  static_assert(kStackObjOffset == offsetof(WasmContinuationObject, stack_obj_),
                "Value of WasmContinuationObject::kStackObjOffset defined in Torque and offset of field WasmContinuationObject::stack_obj in C++ do not match");
  static_assert(kSize <= sizeof(WasmContinuationObject) && sizeof(WasmContinuationObject) < kSize + alignof(WasmContinuationObject));
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=183&c=1
class TorqueGeneratedWasmStackObjectAsserts {
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=185&c=3
  static constexpr int kStackOffset = 4;
  static constexpr int kStackOffsetEnd = kStackOffset + kExternalPointerSlotSize - 1;
  static constexpr int kStartOfWeakFieldsOffset = kStackOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kStackOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kStackOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kStackOffsetEnd + 1;
  static constexpr int kHeaderSize = kStackOffsetEnd + 1;
  static constexpr int kSize = kStackOffsetEnd + 1;

  static_assert(kStackOffset == offsetof(WasmStackObject, stack_),
                "Value of WasmStackObject::kStackOffset defined in Torque and offset of field WasmStackObject::stack in C++ do not match");
  static_assert(kSize <= sizeof(WasmStackObject) && sizeof(WasmStackObject) < kSize + alignof(WasmStackObject));
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=188&c=1
class TorqueGeneratedWasmExceptionTagAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 4;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=193&c=3
  static constexpr int kIndexOffset = 4;
  static constexpr int kIndexOffsetEnd = kIndexOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kIndexOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kIndexOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kIndexOffsetEnd + 1;
  static constexpr int kHeaderSize = kIndexOffsetEnd + 1;
  static constexpr int kSize = kIndexOffsetEnd + 1;

  static_assert(kIndexOffset == offsetof(WasmExceptionTag, index_),
                "Value of WasmExceptionTag::kIndexOffset defined in Torque and offset of field WasmExceptionTag::index in C++ do not match");
  static_assert(kSize <= sizeof(WasmExceptionTag) && sizeof(WasmExceptionTag) < kSize + alignof(WasmExceptionTag));
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=198&c=1
class TorqueGeneratedWasmModuleObjectAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 12;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=200&c=3
  static constexpr int kManagedNativeModuleOffset = 12;
  static constexpr int kManagedNativeModuleOffsetEnd = kManagedNativeModuleOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=201&c=3
  static constexpr int kScriptOffset = kManagedNativeModuleOffsetEnd + 1;
  static constexpr int kScriptOffsetEnd = kScriptOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kScriptOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kScriptOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kScriptOffsetEnd + 1;
  static constexpr int kHeaderSize = kScriptOffsetEnd + 1;

  static_assert(kManagedNativeModuleOffset == offsetof(WasmModuleObject, managed_native_module_),
                "Value of WasmModuleObject::kManagedNativeModuleOffset defined in Torque and offset of field WasmModuleObject::managed_native_module in C++ do not match");
  static_assert(kScriptOffset == offsetof(WasmModuleObject, script_),
                "Value of WasmModuleObject::kScriptOffset defined in Torque and offset of field WasmModuleObject::script in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=207&c=1
class TorqueGeneratedWasmTableObjectAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 12;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=216&c=3
  static constexpr int kEntriesOffset = 12;
  static constexpr int kEntriesOffsetEnd = kEntriesOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=217&c=3
  static constexpr int kCurrentLengthOffset = kEntriesOffsetEnd + 1;
  static constexpr int kCurrentLengthOffsetEnd = kCurrentLengthOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=222&c=3
  static constexpr int kMaximumLengthOffset = kCurrentLengthOffsetEnd + 1;
  static constexpr int kMaximumLengthOffsetEnd = kMaximumLengthOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=226&c=3
  static constexpr int kRawTypeOffset = kMaximumLengthOffsetEnd + 1;
  static constexpr int kRawTypeOffsetEnd = kRawTypeOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kRawTypeOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=228&c=3
  static constexpr int kTrustedDispatchTableOffset = kRawTypeOffsetEnd + 1;
  static constexpr int kTrustedDispatchTableOffsetEnd = kTrustedDispatchTableOffset + kTrustedPointerSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=232&c=3
  static constexpr int kTrustedDataOffset = kTrustedDispatchTableOffsetEnd + 1;
  static constexpr int kTrustedDataOffsetEnd = kTrustedDataOffset + kTrustedPointerSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=233&c=3
  static constexpr int kAddressTypeOffset = kTrustedDataOffsetEnd + 1;
  static constexpr int kAddressTypeOffsetEnd = kAddressTypeOffset + kUInt8Size - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=235&c=3
  static constexpr int kPaddingForAddressType0Offset = kAddressTypeOffsetEnd + 1;
  static constexpr int kPaddingForAddressType0OffsetEnd = kPaddingForAddressType0Offset + kUInt8Size - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=236&c=3
  static constexpr int kPaddingForAddressType1Offset = kPaddingForAddressType0OffsetEnd + 1;
  static constexpr int kPaddingForAddressType1OffsetEnd = kPaddingForAddressType1Offset + kUInt16Size - 1;
  static constexpr int kStartOfWeakFieldsOffset = kPaddingForAddressType1OffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kPaddingForAddressType1OffsetEnd + 1;
  static constexpr int kHeaderSize = kPaddingForAddressType1OffsetEnd + 1;

  static_assert(kEntriesOffset == offsetof(WasmTableObject, entries_),
                "Value of WasmTableObject::kEntriesOffset defined in Torque and offset of field WasmTableObject::entries in C++ do not match");
  static_assert(kCurrentLengthOffset == offsetof(WasmTableObject, current_length_),
                "Value of WasmTableObject::kCurrentLengthOffset defined in Torque and offset of field WasmTableObject::current_length in C++ do not match");
  static_assert(kMaximumLengthOffset == offsetof(WasmTableObject, maximum_length_),
                "Value of WasmTableObject::kMaximumLengthOffset defined in Torque and offset of field WasmTableObject::maximum_length in C++ do not match");
  static_assert(kRawTypeOffset == offsetof(WasmTableObject, raw_type_),
                "Value of WasmTableObject::kRawTypeOffset defined in Torque and offset of field WasmTableObject::raw_type in C++ do not match");
  static_assert(kTrustedDispatchTableOffset == offsetof(WasmTableObject, trusted_dispatch_table_),
                "Value of WasmTableObject::kTrustedDispatchTableOffset defined in Torque and offset of field WasmTableObject::trusted_dispatch_table in C++ do not match");
  static_assert(kTrustedDataOffset == offsetof(WasmTableObject, trusted_data_),
                "Value of WasmTableObject::kTrustedDataOffset defined in Torque and offset of field WasmTableObject::trusted_data in C++ do not match");
  static_assert(kAddressTypeOffset == offsetof(WasmTableObject, address_type_),
                "Value of WasmTableObject::kAddressTypeOffset defined in Torque and offset of field WasmTableObject::address_type in C++ do not match");
  static_assert(kPaddingForAddressType0Offset == offsetof(WasmTableObject, padding_for_address_type_0_),
                "Value of WasmTableObject::kPaddingForAddressType0Offset defined in Torque and offset of field WasmTableObject::padding_for_address_type_0 in C++ do not match");
  static_assert(kPaddingForAddressType1Offset == offsetof(WasmTableObject, padding_for_address_type_1_),
                "Value of WasmTableObject::kPaddingForAddressType1Offset defined in Torque and offset of field WasmTableObject::padding_for_address_type_1 in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=240&c=1
class TorqueGeneratedWasmMemoryObjectAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 12;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=244&c=3
  static constexpr int kArrayBufferOffset = 12;
  static constexpr int kArrayBufferOffsetEnd = kArrayBufferOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=249&c=3
  static constexpr int kManagedBackingStoreOffset = kArrayBufferOffsetEnd + 1;
  static constexpr int kManagedBackingStoreOffsetEnd = kManagedBackingStoreOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=251&c=3
  static constexpr int kMaximumPagesOffset = kManagedBackingStoreOffsetEnd + 1;
  static constexpr int kMaximumPagesOffsetEnd = kMaximumPagesOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=252&c=3
  static constexpr int kInstancesOffset = kMaximumPagesOffsetEnd + 1;
  static constexpr int kInstancesOffsetEnd = kInstancesOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kInstancesOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=253&c=3
  static constexpr int kAddressTypeOffset = kInstancesOffsetEnd + 1;
  static constexpr int kAddressTypeOffsetEnd = kAddressTypeOffset + kUInt8Size - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=255&c=3
  static constexpr int kPaddingForFlags0Offset = kAddressTypeOffsetEnd + 1;
  static constexpr int kPaddingForFlags0OffsetEnd = kPaddingForFlags0Offset + kUInt8Size - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=256&c=3
  static constexpr int kPaddingForFlags1Offset = kPaddingForFlags0OffsetEnd + 1;
  static constexpr int kPaddingForFlags1OffsetEnd = kPaddingForFlags1Offset + kUInt16Size - 1;
  static constexpr int kStartOfWeakFieldsOffset = kPaddingForFlags1OffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kPaddingForFlags1OffsetEnd + 1;
  static constexpr int kHeaderSize = kPaddingForFlags1OffsetEnd + 1;

  static_assert(kArrayBufferOffset == offsetof(WasmMemoryObject, array_buffer_),
                "Value of WasmMemoryObject::kArrayBufferOffset defined in Torque and offset of field WasmMemoryObject::array_buffer in C++ do not match");
  static_assert(kManagedBackingStoreOffset == offsetof(WasmMemoryObject, managed_backing_store_),
                "Value of WasmMemoryObject::kManagedBackingStoreOffset defined in Torque and offset of field WasmMemoryObject::managed_backing_store in C++ do not match");
  static_assert(kMaximumPagesOffset == offsetof(WasmMemoryObject, maximum_pages_),
                "Value of WasmMemoryObject::kMaximumPagesOffset defined in Torque and offset of field WasmMemoryObject::maximum_pages in C++ do not match");
  static_assert(kInstancesOffset == offsetof(WasmMemoryObject, instances_),
                "Value of WasmMemoryObject::kInstancesOffset defined in Torque and offset of field WasmMemoryObject::instances in C++ do not match");
  static_assert(kAddressTypeOffset == offsetof(WasmMemoryObject, address_type_),
                "Value of WasmMemoryObject::kAddressTypeOffset defined in Torque and offset of field WasmMemoryObject::address_type in C++ do not match");
  static_assert(kPaddingForFlags0Offset == offsetof(WasmMemoryObject, padding_for_flags_0_),
                "Value of WasmMemoryObject::kPaddingForFlags0Offset defined in Torque and offset of field WasmMemoryObject::padding_for_flags_0 in C++ do not match");
  static_assert(kPaddingForFlags1Offset == offsetof(WasmMemoryObject, padding_for_flags_1_),
                "Value of WasmMemoryObject::kPaddingForFlags1Offset defined in Torque and offset of field WasmMemoryObject::padding_for_flags_1 in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=261&c=1
class TorqueGeneratedWasmGlobalObjectAsserts {
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=266&c=3
  static constexpr int kTrustedDataOffset = 12;
  static constexpr int kTrustedDataOffsetEnd = kTrustedDataOffset + kTrustedPointerSize - 1;
  static constexpr int kStartOfStrongFieldsOffset = kTrustedDataOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=271&c=3
  static constexpr int kBufferOffset = kTrustedDataOffsetEnd + 1;
  static constexpr int kBufferOffsetEnd = kBufferOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=275&c=3
  static constexpr int kOffsetOffset = kBufferOffsetEnd + 1;
  static constexpr int kOffsetOffsetEnd = kOffsetOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=276&c=3
  static constexpr int kRawTypeOffset = kOffsetOffsetEnd + 1;
  static constexpr int kRawTypeOffsetEnd = kRawTypeOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=279&c=3
  static constexpr int kIsMutableOffset = kRawTypeOffsetEnd + 1;
  static constexpr int kIsMutableOffsetEnd = kIsMutableOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kIsMutableOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kIsMutableOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kIsMutableOffsetEnd + 1;
  static constexpr int kHeaderSize = kIsMutableOffsetEnd + 1;

  static_assert(kTrustedDataOffset == offsetof(WasmGlobalObject, trusted_data_),
                "Value of WasmGlobalObject::kTrustedDataOffset defined in Torque and offset of field WasmGlobalObject::trusted_data in C++ do not match");
  static_assert(kBufferOffset == offsetof(WasmGlobalObject, buffer_),
                "Value of WasmGlobalObject::kBufferOffset defined in Torque and offset of field WasmGlobalObject::buffer in C++ do not match");
  static_assert(kOffsetOffset == offsetof(WasmGlobalObject, offset_),
                "Value of WasmGlobalObject::kOffsetOffset defined in Torque and offset of field WasmGlobalObject::offset in C++ do not match");
  static_assert(kRawTypeOffset == offsetof(WasmGlobalObject, raw_type_),
                "Value of WasmGlobalObject::kRawTypeOffset defined in Torque and offset of field WasmGlobalObject::raw_type in C++ do not match");
  static_assert(kIsMutableOffset == offsetof(WasmGlobalObject, is_mutable_),
                "Value of WasmGlobalObject::kIsMutableOffset defined in Torque and offset of field WasmGlobalObject::is_mutable in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=282&c=1
class TorqueGeneratedWasmTagObjectAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 12;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=284&c=3
  static constexpr int kTagOffset = 12;
  static constexpr int kTagOffsetEnd = kTagOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=285&c=3
  static constexpr int kCanonicalTypeIndexOffset = kTagOffsetEnd + 1;
  static constexpr int kCanonicalTypeIndexOffsetEnd = kCanonicalTypeIndexOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kCanonicalTypeIndexOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=286&c=3
  static constexpr int kTrustedDataOffset = kCanonicalTypeIndexOffsetEnd + 1;
  static constexpr int kTrustedDataOffsetEnd = kTrustedDataOffset + kTrustedPointerSize - 1;
  static constexpr int kStartOfWeakFieldsOffset = kTrustedDataOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kTrustedDataOffsetEnd + 1;
  static constexpr int kHeaderSize = kTrustedDataOffsetEnd + 1;

  static_assert(kTagOffset == offsetof(WasmTagObject, tag_),
                "Value of WasmTagObject::kTagOffset defined in Torque and offset of field WasmTagObject::tag in C++ do not match");
  static_assert(kCanonicalTypeIndexOffset == offsetof(WasmTagObject, canonical_type_index_),
                "Value of WasmTagObject::kCanonicalTypeIndexOffset defined in Torque and offset of field WasmTagObject::canonical_type_index in C++ do not match");
  static_assert(kTrustedDataOffset == offsetof(WasmTagObject, trusted_data_),
                "Value of WasmTagObject::kTrustedDataOffset defined in Torque and offset of field WasmTagObject::trusted_data in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=291&c=1
class TorqueGeneratedWasmTypeInfoAsserts {
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=293&c=3
  static constexpr int kCanonicalTypeOffset = 4;
  static constexpr int kCanonicalTypeOffsetEnd = kCanonicalTypeOffset + kInt32Size - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=294&c=3
  static constexpr int kCanonicalElementTypeOffset = kCanonicalTypeOffsetEnd + 1;
  static constexpr int kCanonicalElementTypeOffsetEnd = kCanonicalElementTypeOffset + kInt32Size - 1;
  static constexpr int kStartOfStrongFieldsOffset = kCanonicalElementTypeOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=295&c=9
  static constexpr int kSupertypesLengthOffset = kCanonicalElementTypeOffsetEnd + 1;
  static constexpr int kSupertypesLengthOffsetEnd = kSupertypesLengthOffset + kTaggedSize - 1;
  static constexpr int kHeaderSize = kSupertypesLengthOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=296&c=3
  static constexpr int kSupertypesOffset = kSupertypesLengthOffsetEnd + 1;
  static constexpr int kSupertypesOffsetEnd = kSupertypesOffset + 0 - 1;
  static constexpr int kEndOfStrongFieldsOffset = kSupertypesOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kSupertypesOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kSupertypesOffsetEnd + 1;

  static_assert(kCanonicalTypeOffset == offsetof(WasmTypeInfo, canonical_type_),
                "Value of WasmTypeInfo::kCanonicalTypeOffset defined in Torque and offset of field WasmTypeInfo::canonical_type in C++ do not match");
  static_assert(kCanonicalElementTypeOffset == offsetof(WasmTypeInfo, canonical_element_type_),
                "Value of WasmTypeInfo::kCanonicalElementTypeOffset defined in Torque and offset of field WasmTypeInfo::canonical_element_type in C++ do not match");
  static_assert(kSupertypesLengthOffset == offsetof(WasmTypeInfo, supertypes_length_),
                "Value of WasmTypeInfo::kSupertypesLengthOffset defined in Torque and offset of field WasmTypeInfo::supertypes_length in C++ do not match");
  static_assert(kSupertypesOffset == OFFSET_OF_DATA_START(WasmTypeInfo),
                "Value of WasmTypeInfo::kSupertypesOffset defined in Torque and offset of field WasmTypeInfo::supertypes in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=300&c=1
class TorqueGeneratedWasmObjectAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 8;
  static constexpr int kEndOfWeakFieldsOffset = 8;
  static constexpr int kStartOfStrongFieldsOffset = 8;
  static constexpr int kEndOfStrongFieldsOffset = 8;
  static constexpr int kHeaderSize = 8;

};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=304&c=1
class TorqueGeneratedWasmStructAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 8;
  static constexpr int kEndOfWeakFieldsOffset = 8;
  static constexpr int kStartOfStrongFieldsOffset = 8;
  static constexpr int kEndOfStrongFieldsOffset = 8;
  static constexpr int kHeaderSize = 8;
  static constexpr int kSize = 8;

  static_assert(kSize <= sizeof(WasmStruct) && sizeof(WasmStruct) < kSize + alignof(WasmStruct));
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=308&c=1
class TorqueGeneratedWasmArrayAsserts {
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=311&c=3
  static constexpr int kLengthOffset = 8;
  static constexpr int kLengthOffsetEnd = kLengthOffset + kInt32Size - 1;
  static constexpr int kStartOfWeakFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kLengthOffsetEnd + 1;
  static constexpr int kHeaderSize = kLengthOffsetEnd + 1;
  static constexpr int kSize = kLengthOffsetEnd + 1;

  static_assert(kLengthOffset == offsetof(WasmArray, length_),
                "Value of WasmArray::kLengthOffset defined in Torque and offset of field WasmArray::length in C++ do not match");
  static_assert(kSize <= sizeof(WasmArray) && sizeof(WasmArray) < kSize + alignof(WasmArray));
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=321&c=1
class TorqueGeneratedWasmCustomMapAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 40;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=323&c=3
  static constexpr int kJsWrapperOffset = 40;
  static constexpr int kJsWrapperOffsetEnd = kJsWrapperOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=327&c=3
  static constexpr int kNativeContextForWrapperOffset = kJsWrapperOffsetEnd + 1;
  static constexpr int kNativeContextForWrapperOffsetEnd = kNativeContextForWrapperOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kNativeContextForWrapperOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kNativeContextForWrapperOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kNativeContextForWrapperOffsetEnd + 1;
  static constexpr int kHeaderSize = kNativeContextForWrapperOffsetEnd + 1;
  static constexpr int kSize = kNativeContextForWrapperOffsetEnd + 1;

  static_assert(kJsWrapperOffset == offsetof(WasmCustomMap, js_wrapper_),
                "Value of WasmCustomMap::kJsWrapperOffset defined in Torque and offset of field WasmCustomMap::js_wrapper in C++ do not match");
  static_assert(kNativeContextForWrapperOffset == offsetof(WasmCustomMap, native_context_for_wrapper_),
                "Value of WasmCustomMap::kNativeContextForWrapperOffset defined in Torque and offset of field WasmCustomMap::native_context_for_wrapper in C++ do not match");
  static_assert(kSize <= sizeof(WasmCustomMap) && sizeof(WasmCustomMap) < kSize + alignof(WasmCustomMap));
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=330&c=1
class TorqueGeneratedWasmCustomMapWrapperAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 12;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=332&c=3
  static constexpr int kWrappedOffset = 12;
  static constexpr int kWrappedOffsetEnd = kWrappedOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kWrappedOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kWrappedOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kWrappedOffsetEnd + 1;
  static constexpr int kHeaderSize = kWrappedOffsetEnd + 1;

  static_assert(kWrappedOffset == offsetof(WasmCustomMapWrapper, wrapped_),
                "Value of WasmCustomMapWrapper::kWrappedOffset defined in Torque and offset of field WasmCustomMapWrapper::wrapped in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=335&c=1
class TorqueGeneratedWasmStringViewIterAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 4;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=337&c=3
  static constexpr int kStringOffset = 4;
  static constexpr int kStringOffsetEnd = kStringOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kStringOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=338&c=3
  static constexpr int kOffsetOffset = kStringOffsetEnd + 1;
  static constexpr int kOffsetOffsetEnd = kOffsetOffset + kInt32Size - 1;
  static constexpr int kStartOfWeakFieldsOffset = kOffsetOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kOffsetOffsetEnd + 1;
  static constexpr int kHeaderSize = kOffsetOffsetEnd + 1;
  static constexpr int kSize = kOffsetOffsetEnd + 1;

  static_assert(kStringOffset == offsetof(WasmStringViewIter, string_),
                "Value of WasmStringViewIter::kStringOffset defined in Torque and offset of field WasmStringViewIter::string in C++ do not match");
  static_assert(kOffsetOffset == offsetof(WasmStringViewIter, offset_),
                "Value of WasmStringViewIter::kOffsetOffset defined in Torque and offset of field WasmStringViewIter::offset in C++ do not match");
  static_assert(kSize <= sizeof(WasmStringViewIter) && sizeof(WasmStringViewIter) < kSize + alignof(WasmStringViewIter));
};

// Definition https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=351&c=1
class TorqueGeneratedWasmSuspendingObjectAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 12;
  // https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=353&c=3
  static constexpr int kCallableOffset = 12;
  static constexpr int kCallableOffsetEnd = kCallableOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kCallableOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kCallableOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kCallableOffsetEnd + 1;
  static constexpr int kHeaderSize = kCallableOffsetEnd + 1;

  static_assert(kCallableOffset == offsetof(WasmSuspendingObject, callable_),
                "Value of WasmSuspendingObject::kCallableOffset defined in Torque and offset of field WasmSuspendingObject::callable in C++ do not match");
};

} // namespace internal
} // namespace v8
