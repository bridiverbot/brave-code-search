#ifndef V8_GEN_TORQUE_GENERATED_INSTANCE_TYPES_H_
#define V8_GEN_TORQUE_GENERATED_INSTANCE_TYPES_H_

// Instance types for all classes except for those that use InstanceType as flags.
#define TORQUE_ASSIGNED_INSTANCE_TYPES(V) \
  V(FIRST_HEAP_OBJECT_TYPE, 0) \
    V(FIRST_PRIMITIVE_HEAP_OBJECT_TYPE, 0) \
      V(FIRST_NAME_TYPE, 0) \
        V(FIRST_STRING_TYPE, 0) \
        V(FIRST_SYMBOL_TYPE, 128) \
        V(SYMBOL_TYPE, 128) /* https://crsrc.org/c/v8/src/objects/name.tq?l=47&c=1 */\
        V(LAST_SYMBOL_TYPE, 128) \
      V(LAST_NAME_TYPE, 128) \
      V(FIRST_BIG_INT_BASE_TYPE, 129) \
      V(BIG_INT_BASE_TYPE, 129) /* https://crsrc.org/c/v8/src/objects/bigint.tq?l=7&c=1 */\
      V(LAST_BIG_INT_BASE_TYPE, 129) \
      V(FIRST_HEAP_NUMBER_TYPE, 130) \
      V(HEAP_NUMBER_TYPE, 130) /* https://crsrc.org/c/v8/src/objects/heap-number.tq?l=5&c=1 */\
      V(LAST_HEAP_NUMBER_TYPE, 130) \
      V(FIRST_ODDBALL_TYPE, 131) \
      V(ODDBALL_TYPE, 131) /* https://crsrc.org/c/v8/src/objects/oddball.tq?l=5&c=1 */\
      V(LAST_ODDBALL_TYPE, 131) \
    V(LAST_PRIMITIVE_HEAP_OBJECT_TYPE, 131) \
    V(FIRST_STRUCT_TYPE, 132) \
      V(FIRST_MICROTASK_TYPE, 132) \
        V(FIRST_PROMISE_REACTION_JOB_TASK_TYPE, 132) \
          V(FIRST_PROMISE_FULFILL_REACTION_JOB_TASK_TYPE, 132) \
          V(PROMISE_FULFILL_REACTION_JOB_TASK_TYPE, 132) /* https://crsrc.org/c/v8/src/objects/promise.tq?l=70&c=1 */\
          V(LAST_PROMISE_FULFILL_REACTION_JOB_TASK_TYPE, 132) \
          V(FIRST_PROMISE_REJECT_REACTION_JOB_TASK_TYPE, 133) \
          V(PROMISE_REJECT_REACTION_JOB_TASK_TYPE, 133) /* https://crsrc.org/c/v8/src/objects/promise.tq?l=73&c=1 */\
          V(LAST_PROMISE_REJECT_REACTION_JOB_TASK_TYPE, 133) \
        V(LAST_PROMISE_REACTION_JOB_TASK_TYPE, 133) \
        V(FIRST_ASYNC_RESUME_TASK_TYPE, 134) \
        V(ASYNC_RESUME_TASK_TYPE, 134) /* https://crsrc.org/c/v8/src/objects/microtask.tq?l=27&c=1 */\
        V(LAST_ASYNC_RESUME_TASK_TYPE, 134) \
        V(FIRST_CALLABLE_TASK_TYPE, 135) \
        V(CALLABLE_TASK_TYPE, 135) /* https://crsrc.org/c/v8/src/objects/microtask.tq?l=18&c=1 */\
        V(LAST_CALLABLE_TASK_TYPE, 135) \
        V(FIRST_CALLBACK_TASK_TYPE, 136) \
        V(CALLBACK_TASK_TYPE, 136) /* https://crsrc.org/c/v8/src/objects/microtask.tq?l=12&c=1 */\
        V(LAST_CALLBACK_TASK_TYPE, 136) \
        V(FIRST_PROMISE_RESOLVE_THENABLE_JOB_TASK_TYPE, 137) \
        V(PROMISE_RESOLVE_THENABLE_JOB_TASK_TYPE, 137) /* https://crsrc.org/c/v8/src/objects/promise.tq?l=76&c=1 */\
        V(LAST_PROMISE_RESOLVE_THENABLE_JOB_TASK_TYPE, 137) \
      V(LAST_MICROTASK_TYPE, 137) \
      V(FIRST_DATA_HANDLER_TYPE, 138) \
        V(FIRST_LOAD_HANDLER_TYPE, 138) \
        V(LOAD_HANDLER_TYPE, 138) /* https://crsrc.org/c/v8/src/ic/handler-configuration.tq?l=7&c=1 */\
        V(LAST_LOAD_HANDLER_TYPE, 138) \
        V(FIRST_STORE_HANDLER_TYPE, 139) \
        V(STORE_HANDLER_TYPE, 139) /* https://crsrc.org/c/v8/src/ic/handler-configuration.tq?l=8&c=1 */\
        V(LAST_STORE_HANDLER_TYPE, 139) \
      V(LAST_DATA_HANDLER_TYPE, 139) \
      V(FIRST_ACCESS_CHECK_INFO_TYPE, 140) \
      V(ACCESS_CHECK_INFO_TYPE, 140) /* https://crsrc.org/c/v8/src/objects/api-callbacks.tq?l=32&c=1 */\
      V(LAST_ACCESS_CHECK_INFO_TYPE, 140) \
      V(FIRST_ACCESSOR_PAIR_TYPE, 141) \
      V(ACCESSOR_PAIR_TYPE, 141) /* https://crsrc.org/c/v8/src/objects/struct.tq?l=13&c=1 */\
      V(LAST_ACCESSOR_PAIR_TYPE, 141) \
      V(FIRST_ALIASED_ARGUMENTS_ENTRY_TYPE, 142) \
      V(ALIASED_ARGUMENTS_ENTRY_TYPE, 142) /* https://crsrc.org/c/v8/src/objects/arguments.tq?l=62&c=1 */\
      V(LAST_ALIASED_ARGUMENTS_ENTRY_TYPE, 142) \
      V(FIRST_ALLOCATION_MEMENTO_TYPE, 143) \
      V(ALLOCATION_MEMENTO_TYPE, 143) /* https://crsrc.org/c/v8/src/objects/allocation-site.tq?l=7&c=1 */\
      V(LAST_ALLOCATION_MEMENTO_TYPE, 143) \
      V(FIRST_ARRAY_BOILERPLATE_DESCRIPTION_TYPE, 144) \
      V(ARRAY_BOILERPLATE_DESCRIPTION_TYPE, 144) /* https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=12&c=1 */\
      V(LAST_ARRAY_BOILERPLATE_DESCRIPTION_TYPE, 144) \
      V(FIRST_ASYNC_GENERATOR_REQUEST_TYPE, 145) \
      V(ASYNC_GENERATOR_REQUEST_TYPE, 145) /* https://crsrc.org/c/v8/src/objects/js-generator.tq?l=59&c=1 */\
      V(LAST_ASYNC_GENERATOR_REQUEST_TYPE, 145) \
      V(FIRST_BREAK_POINT_TYPE, 146) \
      V(BREAK_POINT_TYPE, 146) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=5&c=1 */\
      V(LAST_BREAK_POINT_TYPE, 146) \
      V(FIRST_BREAK_POINT_INFO_TYPE, 147) \
      V(BREAK_POINT_INFO_TYPE, 147) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=11&c=1 */\
      V(LAST_BREAK_POINT_INFO_TYPE, 147) \
      V(FIRST_BYTECODE_WRAPPER_TYPE, 148) \
      V(BYTECODE_WRAPPER_TYPE, 148) /* https://crsrc.org/c/v8/src/objects/bytecode-array.tq?l=25&c=1 */\
      V(LAST_BYTECODE_WRAPPER_TYPE, 148) \
      V(FIRST_CALL_SITE_INFO_TYPE, 149) \
      V(CALL_SITE_INFO_TYPE, 149) /* https://crsrc.org/c/v8/src/objects/call-site-info.tq?l=24&c=1 */\
      V(LAST_CALL_SITE_INFO_TYPE, 149) \
      V(FIRST_CLASS_BOILERPLATE_TYPE, 150) \
      V(CLASS_BOILERPLATE_TYPE, 150) /* https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=24&c=1 */\
      V(LAST_CLASS_BOILERPLATE_TYPE, 150) \
      V(FIRST_CLASS_POSITIONS_TYPE, 151) \
      V(CLASS_POSITIONS_TYPE, 151) /* https://crsrc.org/c/v8/src/objects/struct.tq?l=11&c=1 */\
      V(LAST_CLASS_POSITIONS_TYPE, 151) \
      V(FIRST_CODE_WRAPPER_TYPE, 152) \
      V(CODE_WRAPPER_TYPE, 152) /* https://crsrc.org/c/v8/src/objects/bytecode-array.tq?l=32&c=1 */\
      V(LAST_CODE_WRAPPER_TYPE, 152) \
      V(FIRST_DEBUG_SCRIPT_SCOPE_INFO_TYPE, 153) \
      V(DEBUG_SCRIPT_SCOPE_INFO_TYPE, 153) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=132&c=1 */\
      V(LAST_DEBUG_SCRIPT_SCOPE_INFO_TYPE, 153) \
      V(FIRST_ENUM_CACHE_TYPE, 154) \
      V(ENUM_CACHE_TYPE, 154) /* https://crsrc.org/c/v8/src/objects/descriptor-array.tq?l=5&c=1 */\
      V(LAST_ENUM_CACHE_TYPE, 154) \
      V(FIRST_ERROR_STACK_DATA_TYPE, 155) \
      V(ERROR_STACK_DATA_TYPE, 155) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=113&c=1 */\
      V(LAST_ERROR_STACK_DATA_TYPE, 155) \
      V(FIRST_FEEDBACK_CELL_TYPE, 156) \
      V(FEEDBACK_CELL_TYPE, 156) /* https://crsrc.org/c/v8/src/objects/feedback-cell.tq?l=5&c=1 */\
      V(LAST_FEEDBACK_CELL_TYPE, 156) \
      V(FIRST_FOR_IN_ENUMERATOR_HOLDER_TYPE, 157) \
      V(FOR_IN_ENUMERATOR_HOLDER_TYPE, 157) /* https://crsrc.org/c/v8/src/objects/struct.tq?l=15&c=1 */\
      V(LAST_FOR_IN_ENUMERATOR_HOLDER_TYPE, 157) \
      V(FIRST_FUNCTION_TEMPLATE_RARE_DATA_TYPE, 158) \
      V(FUNCTION_TEMPLATE_RARE_DATA_TYPE, 158) /* https://crsrc.org/c/v8/src/objects/templates.tq?l=26&c=1 */\
      V(LAST_FUNCTION_TEMPLATE_RARE_DATA_TYPE, 158) \
      V(FIRST_MODULE_REQUEST_TYPE, 159) \
      V(MODULE_REQUEST_TYPE, 159) /* https://crsrc.org/c/v8/src/objects/source-text-module.tq?l=61&c=1 */\
      V(LAST_MODULE_REQUEST_TYPE, 159) \
      V(FIRST_PROMISE_CAPABILITY_TYPE, 160) \
      V(PROMISE_CAPABILITY_TYPE, 160) /* https://crsrc.org/c/v8/src/objects/promise.tq?l=5&c=1 */\
      V(LAST_PROMISE_CAPABILITY_TYPE, 160) \
      V(FIRST_PROMISE_REACTION_TYPE, 161) \
      V(PROMISE_REACTION_TYPE, 161) /* https://crsrc.org/c/v8/src/objects/promise.tq?l=34&c=1 */\
      V(LAST_PROMISE_REACTION_TYPE, 161) \
      V(FIRST_PROPERTY_DESCRIPTOR_OBJECT_TYPE, 162) \
      V(PROPERTY_DESCRIPTOR_OBJECT_TYPE, 162) /* https://crsrc.org/c/v8/src/objects/property-descriptor-object.tq?l=20&c=1 */\
      V(LAST_PROPERTY_DESCRIPTOR_OBJECT_TYPE, 162) \
      V(FIRST_PROTOTYPE_INFO_TYPE, 163) \
      V(PROTOTYPE_INFO_TYPE, 163) /* https://crsrc.org/c/v8/src/objects/prototype-info.tq?l=13&c=1 */\
      V(LAST_PROTOTYPE_INFO_TYPE, 163) \
      V(FIRST_PROTOTYPE_SHARED_CLOSURE_INFO_TYPE, 164) \
      V(PROTOTYPE_SHARED_CLOSURE_INFO_TYPE, 164) /* https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=35&c=1 */\
      V(LAST_PROTOTYPE_SHARED_CLOSURE_INFO_TYPE, 164) \
      V(FIRST_REG_EXP_BOILERPLATE_DESCRIPTION_TYPE, 165) \
      V(REG_EXP_BOILERPLATE_DESCRIPTION_TYPE, 165) /* https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=18&c=1 */\
      V(LAST_REG_EXP_BOILERPLATE_DESCRIPTION_TYPE, 165) \
      V(FIRST_REG_EXP_DATA_WRAPPER_TYPE, 166) \
      V(REG_EXP_DATA_WRAPPER_TYPE, 166) /* https://crsrc.org/c/v8/src/objects/js-regexp.tq?l=60&c=1 */\
      V(LAST_REG_EXP_DATA_WRAPPER_TYPE, 166) \
      V(FIRST_SCRIPT_TYPE, 167) \
      V(SCRIPT_TYPE, 167) /* https://crsrc.org/c/v8/src/objects/script.tq?l=21&c=1 */\
      V(LAST_SCRIPT_TYPE, 167) \
      V(FIRST_SCRIPT_OR_MODULE_TYPE, 168) \
      V(SCRIPT_OR_MODULE_TYPE, 168) /* https://crsrc.org/c/v8/src/objects/module.tq?l=30&c=1 */\
      V(LAST_SCRIPT_OR_MODULE_TYPE, 168) \
      V(FIRST_SOURCE_TEXT_MODULE_INFO_ENTRY_TYPE, 169) \
      V(SOURCE_TEXT_MODULE_INFO_ENTRY_TYPE, 169) /* https://crsrc.org/c/v8/src/objects/source-text-module.tq?l=72&c=1 */\
      V(LAST_SOURCE_TEXT_MODULE_INFO_ENTRY_TYPE, 169) \
      V(FIRST_STACK_FRAME_INFO_TYPE, 170) \
      V(STACK_FRAME_INFO_TYPE, 170) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=78&c=1 */\
      V(LAST_STACK_FRAME_INFO_TYPE, 170) \
      V(FIRST_STACK_TRACE_INFO_TYPE, 171) \
      V(STACK_TRACE_INFO_TYPE, 171) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=92&c=1 */\
      V(LAST_STACK_TRACE_INFO_TYPE, 171) \
      V(FIRST_TEMPLATE_OBJECT_DESCRIPTION_TYPE, 172) \
      V(TEMPLATE_OBJECT_DESCRIPTION_TYPE, 172) /* https://crsrc.org/c/v8/src/objects/template-objects.tq?l=5&c=1 */\
      V(LAST_TEMPLATE_OBJECT_DESCRIPTION_TYPE, 172) \
      V(FIRST_TUPLE2_TYPE, 173) \
      V(TUPLE2_TYPE, 173) /* https://crsrc.org/c/v8/src/objects/struct.tq?l=9&c=1 */\
      V(LAST_TUPLE2_TYPE, 173) \
      V(FIRST_WASM_EXCEPTION_TAG_TYPE, 174) \
      V(WASM_EXCEPTION_TAG_TYPE, 174) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=188&c=1 */\
      V(LAST_WASM_EXCEPTION_TAG_TYPE, 174) \
    V(LAST_STRUCT_TYPE, 174) \
    V(FIRST_TRUSTED_OBJECT_TYPE, 175) \
      V(FIRST_EXPOSED_TRUSTED_OBJECT_TYPE, 175) \
        V(FIRST_UNCOMPILED_DATA_TYPE, 175) \
          V(FIRST_UNCOMPILED_DATA_WITH_PREPARSE_DATA_TYPE, 175) \
            V(UNCOMPILED_DATA_WITH_PREPARSE_DATA_TYPE, 175) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=172&c=1 */\
            V(FIRST_UNCOMPILED_DATA_WITH_PREPARSE_DATA_AND_JOB_TYPE, 176) \
            V(UNCOMPILED_DATA_WITH_PREPARSE_DATA_AND_JOB_TYPE, 176) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=183&c=1 */\
            V(LAST_UNCOMPILED_DATA_WITH_PREPARSE_DATA_AND_JOB_TYPE, 176) \
          V(LAST_UNCOMPILED_DATA_WITH_PREPARSE_DATA_TYPE, 176) \
          V(FIRST_UNCOMPILED_DATA_WITHOUT_PREPARSE_DATA_TYPE, 177) \
            V(UNCOMPILED_DATA_WITHOUT_PREPARSE_DATA_TYPE, 177) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=169&c=1 */\
            V(FIRST_UNCOMPILED_DATA_WITHOUT_PREPARSE_DATA_WITH_JOB_TYPE, 178) \
            V(UNCOMPILED_DATA_WITHOUT_PREPARSE_DATA_WITH_JOB_TYPE, 178) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=177&c=1 */\
            V(LAST_UNCOMPILED_DATA_WITHOUT_PREPARSE_DATA_WITH_JOB_TYPE, 178) \
          V(LAST_UNCOMPILED_DATA_WITHOUT_PREPARSE_DATA_TYPE, 178) \
        V(LAST_UNCOMPILED_DATA_TYPE, 178) \
        V(FIRST_REG_EXP_DATA_TYPE, 179) \
          V(REG_EXP_DATA_TYPE, 179) /* https://crsrc.org/c/v8/src/objects/js-regexp.tq?l=18&c=1 */\
          V(FIRST_ATOM_REG_EXP_DATA_TYPE, 180) \
          V(ATOM_REG_EXP_DATA_TYPE, 180) /* https://crsrc.org/c/v8/src/objects/js-regexp.tq?l=33&c=1 */\
          V(LAST_ATOM_REG_EXP_DATA_TYPE, 180) \
          V(FIRST_IR_REG_EXP_DATA_TYPE, 181) \
          V(IR_REG_EXP_DATA_TYPE, 181) /* https://crsrc.org/c/v8/src/objects/js-regexp.tq?l=44&c=1 */\
          V(LAST_IR_REG_EXP_DATA_TYPE, 181) \
        V(LAST_REG_EXP_DATA_TYPE, 181) \
        V(FIRST_WASM_FUNCTION_DATA_TYPE, 182) \
          V(WASM_FUNCTION_DATA_TYPE, 182) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=120&c=1 */\
          V(FIRST_WASM_CAPI_FUNCTION_DATA_TYPE, 183) \
          V(WASM_CAPI_FUNCTION_DATA_TYPE, 183) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=156&c=1 */\
          V(LAST_WASM_CAPI_FUNCTION_DATA_TYPE, 183) \
          V(FIRST_WASM_EXPORTED_FUNCTION_DATA_TYPE, 184) \
          V(WASM_EXPORTED_FUNCTION_DATA_TYPE, 184) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=135&c=1 */\
          V(LAST_WASM_EXPORTED_FUNCTION_DATA_TYPE, 184) \
        V(LAST_WASM_FUNCTION_DATA_TYPE, 184) \
        V(FIRST_BYTECODE_ARRAY_TYPE, 185) \
        V(BYTECODE_ARRAY_TYPE, 185) /* https://crsrc.org/c/v8/src/objects/bytecode-array.tq?l=7&c=1 */\
        V(LAST_BYTECODE_ARRAY_TYPE, 185) \
        V(FIRST_CODE_TYPE, 186) \
        V(CODE_TYPE, 186) /* https://crsrc.org/c/v8/src/objects/bytecode-array.tq?l=30&c=1 */\
        V(LAST_CODE_TYPE, 186) \
        V(FIRST_DEBUG_INFO_TYPE, 187) \
        V(DEBUG_INFO_TYPE, 187) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=37&c=1 */\
        V(LAST_DEBUG_INFO_TYPE, 187) \
        V(FIRST_INTERPRETER_DATA_TYPE, 188) \
        V(INTERPRETER_DATA_TYPE, 188) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=14&c=1 */\
        V(LAST_INTERPRETER_DATA_TYPE, 188) \
        V(FIRST_WASM_DISPATCH_TABLE_TYPE, 189) \
        V(WASM_DISPATCH_TABLE_TYPE, 189) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=204&c=1 */\
        V(LAST_WASM_DISPATCH_TABLE_TYPE, 189) \
        V(FIRST_WASM_INTERNAL_FUNCTION_TYPE, 190) \
        V(WASM_INTERNAL_FUNCTION_TYPE, 190) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=79&c=1 */\
        V(LAST_WASM_INTERNAL_FUNCTION_TYPE, 190) \
        V(FIRST_WASM_SUSPENDER_OBJECT_TYPE, 191) \
        V(WASM_SUSPENDER_OBJECT_TYPE, 191) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=167&c=1 */\
        V(LAST_WASM_SUSPENDER_OBJECT_TYPE, 191) \
        V(FIRST_WASM_TRUSTED_INSTANCE_DATA_TYPE, 192) \
        V(WASM_TRUSTED_INSTANCE_DATA_TYPE, 192) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=37&c=1 */\
        V(LAST_WASM_TRUSTED_INSTANCE_DATA_TYPE, 192) \
      V(LAST_EXPOSED_TRUSTED_OBJECT_TYPE, 192) \
      V(FIRST_TRUSTED_FIXED_ARRAY_BASE_TYPE, 193) \
        V(FIRST_PROTECTED_FIXED_ARRAY_TYPE, 193) \
        V(PROTECTED_FIXED_ARRAY_TYPE, 193) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=17&c=1 */\
        V(LAST_PROTECTED_FIXED_ARRAY_TYPE, 193) \
        V(FIRST_PROTECTED_WEAK_FIXED_ARRAY_TYPE, 194) \
        V(PROTECTED_WEAK_FIXED_ARRAY_TYPE, 194) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=37&c=1 */\
        V(LAST_PROTECTED_WEAK_FIXED_ARRAY_TYPE, 194) \
        V(FIRST_TRUSTED_BYTE_ARRAY_TYPE, 195) \
        V(TRUSTED_BYTE_ARRAY_TYPE, 195) /* https://crsrc.org/c/v8/src/objects/fixed-primitive-array.tq?l=15&c=1 */\
        V(LAST_TRUSTED_BYTE_ARRAY_TYPE, 195) \
        V(FIRST_TRUSTED_FIXED_ARRAY_TYPE, 196) \
        V(TRUSTED_FIXED_ARRAY_TYPE, 196) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=12&c=1 */\
        V(LAST_TRUSTED_FIXED_ARRAY_TYPE, 196) \
        V(FIRST_TRUSTED_WEAK_FIXED_ARRAY_TYPE, 197) \
        V(TRUSTED_WEAK_FIXED_ARRAY_TYPE, 197) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=32&c=1 */\
        V(LAST_TRUSTED_WEAK_FIXED_ARRAY_TYPE, 197) \
      V(LAST_TRUSTED_FIXED_ARRAY_BASE_TYPE, 197) \
      V(FIRST_INSTRUCTION_STREAM_TYPE, 198) \
      V(INSTRUCTION_STREAM_TYPE, 198) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=307&c=1 */\
      V(LAST_INSTRUCTION_STREAM_TYPE, 198) \
      V(FIRST_SHARED_FUNCTION_INFO_WRAPPER_TYPE, 199) \
      V(SHARED_FUNCTION_INFO_WRAPPER_TYPE, 199) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=130&c=1 */\
      V(LAST_SHARED_FUNCTION_INFO_WRAPPER_TYPE, 199) \
      V(FIRST_TRUSTED_FOREIGN_TYPE, 200) \
      V(TRUSTED_FOREIGN_TYPE, 200) /* https://crsrc.org/c/v8/src/objects/foreign.tq?l=11&c=1 */\
      V(LAST_TRUSTED_FOREIGN_TYPE, 200) \
      V(FIRST_WASM_DISPATCH_TABLE_FOR_IMPORTS_TYPE, 201) \
      V(WASM_DISPATCH_TABLE_FOR_IMPORTS_TYPE, 201) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=205&c=1 */\
      V(LAST_WASM_DISPATCH_TABLE_FOR_IMPORTS_TYPE, 201) \
      V(FIRST_WASM_IMPORT_DATA_TYPE, 202) \
      V(WASM_IMPORT_DATA_TYPE, 202) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=49&c=1 */\
      V(LAST_WASM_IMPORT_DATA_TYPE, 202) \
    V(LAST_TRUSTED_OBJECT_TYPE, 202) \
    V(FIRST_ACCESSOR_INFO_TYPE, 203) \
    V(ACCESSOR_INFO_TYPE, 203) /* https://crsrc.org/c/v8/src/objects/api-callbacks.tq?l=51&c=1 */\
    V(LAST_ACCESSOR_INFO_TYPE, 203) \
    V(FIRST_FOREIGN_TYPE, 204) \
    V(FOREIGN_TYPE, 204) /* https://crsrc.org/c/v8/src/objects/foreign.tq?l=5&c=1 */\
    V(LAST_FOREIGN_TYPE, 204) \
    V(FIRST_FIXED_ARRAY_BASE_TYPE, 205) \
      V(FIRST_FIXED_ARRAY_TYPE, 205) \
        V(FIXED_ARRAY_TYPE, 205) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=5&c=1 */\
        V(FIRST_HASH_TABLE_TYPE, 206) \
          V(HASH_TABLE_TYPE, 206) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=277&c=1 */\
          V(FIRST_EPHEMERON_HASH_TABLE_TYPE, 207) \
          V(EPHEMERON_HASH_TABLE_TYPE, 207) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=285&c=1 */\
          V(LAST_EPHEMERON_HASH_TABLE_TYPE, 207) \
          V(FIRST_GLOBAL_DICTIONARY_TYPE, 208) \
          V(GLOBAL_DICTIONARY_TYPE, 208) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=282&c=1 */\
          V(LAST_GLOBAL_DICTIONARY_TYPE, 208) \
          V(FIRST_NAME_DICTIONARY_TYPE, 209) \
          V(NAME_DICTIONARY_TYPE, 209) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=281&c=1 */\
          V(LAST_NAME_DICTIONARY_TYPE, 209) \
          V(FIRST_NAME_TO_INDEX_HASH_TABLE_TYPE, 210) \
          V(NAME_TO_INDEX_HASH_TABLE_TYPE, 210) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=279&c=1 */\
          V(LAST_NAME_TO_INDEX_HASH_TABLE_TYPE, 210) \
          V(FIRST_NUMBER_DICTIONARY_TYPE, 211) \
          V(NUMBER_DICTIONARY_TYPE, 211) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=288&c=1 */\
          V(LAST_NUMBER_DICTIONARY_TYPE, 211) \
          V(FIRST_REGISTERED_SYMBOL_TABLE_TYPE, 212) \
          V(REGISTERED_SYMBOL_TABLE_TYPE, 212) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=280&c=1 */\
          V(LAST_REGISTERED_SYMBOL_TABLE_TYPE, 212) \
          V(FIRST_SIMPLE_NAME_DICTIONARY_TYPE, 213) \
          V(SIMPLE_NAME_DICTIONARY_TYPE, 213) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=283&c=1 */\
          V(LAST_SIMPLE_NAME_DICTIONARY_TYPE, 213) \
          V(FIRST_SIMPLE_NUMBER_DICTIONARY_TYPE, 214) \
          V(SIMPLE_NUMBER_DICTIONARY_TYPE, 214) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=284&c=1 */\
          V(LAST_SIMPLE_NUMBER_DICTIONARY_TYPE, 214) \
        V(LAST_HASH_TABLE_TYPE, 214) \
        V(FIRST_ORDERED_HASH_MAP_TYPE, 215) \
        V(ORDERED_HASH_MAP_TYPE, 215) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=270&c=1 */\
        V(LAST_ORDERED_HASH_MAP_TYPE, 215) \
        V(FIRST_ORDERED_HASH_SET_TYPE, 216) \
        V(ORDERED_HASH_SET_TYPE, 216) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=271&c=1 */\
        V(LAST_ORDERED_HASH_SET_TYPE, 216) \
        V(FIRST_ORDERED_NAME_DICTIONARY_TYPE, 217) \
        V(ORDERED_NAME_DICTIONARY_TYPE, 217) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=272&c=1 */\
        V(LAST_ORDERED_NAME_DICTIONARY_TYPE, 217) \
      V(LAST_FIXED_ARRAY_TYPE, 217) \
      V(FIRST_WEAK_FIXED_ARRAY_TYPE, 218) \
        V(WEAK_FIXED_ARRAY_TYPE, 218) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=22&c=1 */\
        V(FIRST_TRANSITION_ARRAY_TYPE, 219) \
        V(TRANSITION_ARRAY_TYPE, 219) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=313&c=1 */\
        V(LAST_TRANSITION_ARRAY_TYPE, 219) \
      V(LAST_WEAK_FIXED_ARRAY_TYPE, 219) \
      V(FIRST_BYTE_ARRAY_TYPE, 220) \
      V(BYTE_ARRAY_TYPE, 220) /* https://crsrc.org/c/v8/src/objects/fixed-primitive-array.tq?l=10&c=1 */\
      V(LAST_BYTE_ARRAY_TYPE, 220) \
      V(FIRST_CLOSURE_FEEDBACK_CELL_ARRAY_TYPE, 221) \
      V(CLOSURE_FEEDBACK_CELL_ARRAY_TYPE, 221) /* https://crsrc.org/c/v8/src/objects/feedback-vector.tq?l=29&c=1 */\
      V(LAST_CLOSURE_FEEDBACK_CELL_ARRAY_TYPE, 221) \
      V(FIRST_FIXED_DOUBLE_ARRAY_TYPE, 222) \
      V(FIXED_DOUBLE_ARRAY_TYPE, 222) /* https://crsrc.org/c/v8/src/objects/fixed-primitive-array.tq?l=5&c=1 */\
      V(LAST_FIXED_DOUBLE_ARRAY_TYPE, 222) \
      V(FIRST_OBJECT_BOILERPLATE_DESCRIPTION_TYPE, 223) \
      V(OBJECT_BOILERPLATE_DESCRIPTION_TYPE, 223) /* https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=5&c=1 */\
      V(LAST_OBJECT_BOILERPLATE_DESCRIPTION_TYPE, 223) \
      V(FIRST_REG_EXP_MATCH_INFO_TYPE, 224) \
      V(REG_EXP_MATCH_INFO_TYPE, 224) /* https://crsrc.org/c/v8/src/objects/regexp-match-info.tq?l=5&c=1 */\
      V(LAST_REG_EXP_MATCH_INFO_TYPE, 224) \
      V(FIRST_SLOPPY_ARGUMENTS_ELEMENTS_TYPE, 225) \
      V(SLOPPY_ARGUMENTS_ELEMENTS_TYPE, 225) /* https://crsrc.org/c/v8/src/objects/arguments.tq?l=28&c=1 */\
      V(LAST_SLOPPY_ARGUMENTS_ELEMENTS_TYPE, 225) \
      V(FIRST_WEAK_HOMOMORPHIC_FIXED_ARRAY_TYPE, 226) \
      V(WEAK_HOMOMORPHIC_FIXED_ARRAY_TYPE, 226) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=27&c=1 */\
      V(LAST_WEAK_HOMOMORPHIC_FIXED_ARRAY_TYPE, 226) \
    V(LAST_FIXED_ARRAY_BASE_TYPE, 226) \
    V(FIRST_CONTEXT_TYPE, 227) \
      V(FIRST_AWAIT_CONTEXT_TYPE, 227) \
      V(AWAIT_CONTEXT_TYPE, 227) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=46&c=1 */\
      V(LAST_AWAIT_CONTEXT_TYPE, 227) \
      V(FIRST_BLOCK_CONTEXT_TYPE, 228) \
      V(BLOCK_CONTEXT_TYPE, 228) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=47&c=1 */\
      V(LAST_BLOCK_CONTEXT_TYPE, 228) \
      V(FIRST_CATCH_CONTEXT_TYPE, 229) \
      V(CATCH_CONTEXT_TYPE, 229) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=48&c=1 */\
      V(LAST_CATCH_CONTEXT_TYPE, 229) \
      V(FIRST_DEBUG_EVALUATE_CONTEXT_TYPE, 230) \
      V(DEBUG_EVALUATE_CONTEXT_TYPE, 230) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=49&c=1 */\
      V(LAST_DEBUG_EVALUATE_CONTEXT_TYPE, 230) \
      V(FIRST_EVAL_CONTEXT_TYPE, 231) \
      V(EVAL_CONTEXT_TYPE, 231) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=51&c=1 */\
      V(LAST_EVAL_CONTEXT_TYPE, 231) \
      V(FIRST_FUNCTION_CONTEXT_TYPE, 232) \
      V(FUNCTION_CONTEXT_TYPE, 232) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=56&c=1 */\
      V(LAST_FUNCTION_CONTEXT_TYPE, 232) \
      V(FIRST_MODULE_CONTEXT_TYPE, 233) \
      V(MODULE_CONTEXT_TYPE, 233) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=52&c=1 */\
      V(LAST_MODULE_CONTEXT_TYPE, 233) \
      V(FIRST_NATIVE_CONTEXT_TYPE, 234) \
      V(NATIVE_CONTEXT_TYPE, 234) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=89&c=1 */\
      V(LAST_NATIVE_CONTEXT_TYPE, 234) \
      V(FIRST_SCRIPT_CONTEXT_TYPE, 235) \
      V(SCRIPT_CONTEXT_TYPE, 235) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=53&c=1 */\
      V(LAST_SCRIPT_CONTEXT_TYPE, 235) \
      V(FIRST_WITH_CONTEXT_TYPE, 236) \
      V(WITH_CONTEXT_TYPE, 236) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=54&c=1 */\
      V(LAST_WITH_CONTEXT_TYPE, 236) \
    V(LAST_CONTEXT_TYPE, 236) \
    V(FIRST_TURBOSHAFT_TYPE_TYPE, 237) \
      V(FIRST_TURBOSHAFT_FLOAT64_TYPE_TYPE, 237) \
        V(FIRST_TURBOSHAFT_FLOAT64_RANGE_TYPE_TYPE, 237) \
        V(TURBOSHAFT_FLOAT64_RANGE_TYPE_TYPE, 237) /* https://crsrc.org/c/v8/src/objects/turboshaft-types.tq?l=63&c=1 */\
        V(LAST_TURBOSHAFT_FLOAT64_RANGE_TYPE_TYPE, 237) \
        V(FIRST_TURBOSHAFT_FLOAT64_SET_TYPE_TYPE, 238) \
        V(TURBOSHAFT_FLOAT64_SET_TYPE_TYPE, 238) /* https://crsrc.org/c/v8/src/objects/turboshaft-types.tq?l=70&c=1 */\
        V(LAST_TURBOSHAFT_FLOAT64_SET_TYPE_TYPE, 238) \
      V(LAST_TURBOSHAFT_FLOAT64_TYPE_TYPE, 238) \
      V(FIRST_TURBOSHAFT_WORD32_TYPE_TYPE, 239) \
        V(FIRST_TURBOSHAFT_WORD32_RANGE_TYPE_TYPE, 239) \
        V(TURBOSHAFT_WORD32_RANGE_TYPE_TYPE, 239) /* https://crsrc.org/c/v8/src/objects/turboshaft-types.tq?l=26&c=1 */\
        V(LAST_TURBOSHAFT_WORD32_RANGE_TYPE_TYPE, 239) \
        V(FIRST_TURBOSHAFT_WORD32_SET_TYPE_TYPE, 240) \
        V(TURBOSHAFT_WORD32_SET_TYPE_TYPE, 240) /* https://crsrc.org/c/v8/src/objects/turboshaft-types.tq?l=32&c=1 */\
        V(LAST_TURBOSHAFT_WORD32_SET_TYPE_TYPE, 240) \
      V(LAST_TURBOSHAFT_WORD32_TYPE_TYPE, 240) \
      V(FIRST_TURBOSHAFT_WORD64_TYPE_TYPE, 241) \
        V(FIRST_TURBOSHAFT_WORD64_RANGE_TYPE_TYPE, 241) \
        V(TURBOSHAFT_WORD64_RANGE_TYPE_TYPE, 241) /* https://crsrc.org/c/v8/src/objects/turboshaft-types.tq?l=42&c=1 */\
        V(LAST_TURBOSHAFT_WORD64_RANGE_TYPE_TYPE, 241) \
        V(FIRST_TURBOSHAFT_WORD64_SET_TYPE_TYPE, 242) \
        V(TURBOSHAFT_WORD64_SET_TYPE_TYPE, 242) /* https://crsrc.org/c/v8/src/objects/turboshaft-types.tq?l=50&c=1 */\
        V(LAST_TURBOSHAFT_WORD64_SET_TYPE_TYPE, 242) \
      V(LAST_TURBOSHAFT_WORD64_TYPE_TYPE, 242) \
    V(LAST_TURBOSHAFT_TYPE_TYPE, 242) \
    V(FIRST_TURBOFAN_TYPE_TYPE, 243) \
      V(FIRST_TURBOFAN_BITSET_TYPE_TYPE, 243) \
      V(TURBOFAN_BITSET_TYPE_TYPE, 243) /* https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=63&c=1 */\
      V(LAST_TURBOFAN_BITSET_TYPE_TYPE, 243) \
      V(FIRST_TURBOFAN_HEAP_CONSTANT_TYPE_TYPE, 244) \
      V(TURBOFAN_HEAP_CONSTANT_TYPE_TYPE, 244) /* https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=81&c=1 */\
      V(LAST_TURBOFAN_HEAP_CONSTANT_TYPE_TYPE, 244) \
      V(FIRST_TURBOFAN_OTHER_NUMBER_CONSTANT_TYPE_TYPE, 245) \
      V(TURBOFAN_OTHER_NUMBER_CONSTANT_TYPE_TYPE, 245) /* https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=86&c=1 */\
      V(LAST_TURBOFAN_OTHER_NUMBER_CONSTANT_TYPE_TYPE, 245) \
      V(FIRST_TURBOFAN_RANGE_TYPE_TYPE, 246) \
      V(TURBOFAN_RANGE_TYPE_TYPE, 246) /* https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=75&c=1 */\
      V(LAST_TURBOFAN_RANGE_TYPE_TYPE, 246) \
      V(FIRST_TURBOFAN_UNION_TYPE_TYPE, 247) \
      V(TURBOFAN_UNION_TYPE_TYPE, 247) /* https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=69&c=1 */\
      V(LAST_TURBOFAN_UNION_TYPE_TYPE, 247) \
    V(LAST_TURBOFAN_TYPE_TYPE, 247) \
    V(FIRST_SMALL_ORDERED_HASH_TABLE_TYPE, 248) \
      V(FIRST_SMALL_ORDERED_HASH_MAP_TYPE, 248) \
      V(SMALL_ORDERED_HASH_MAP_TYPE, 248) /* https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=25&c=1 */\
      V(LAST_SMALL_ORDERED_HASH_MAP_TYPE, 248) \
      V(FIRST_SMALL_ORDERED_HASH_SET_TYPE, 249) \
      V(SMALL_ORDERED_HASH_SET_TYPE, 249) /* https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=16&c=1 */\
      V(LAST_SMALL_ORDERED_HASH_SET_TYPE, 249) \
      V(FIRST_SMALL_ORDERED_NAME_DICTIONARY_TYPE, 250) \
      V(SMALL_ORDERED_NAME_DICTIONARY_TYPE, 250) /* https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=34&c=1 */\
      V(LAST_SMALL_ORDERED_NAME_DICTIONARY_TYPE, 250) \
    V(LAST_SMALL_ORDERED_HASH_TABLE_TYPE, 250) \
    V(FIRST_TEMPLATE_INFO_TYPE, 251) \
      V(FIRST_TEMPLATE_INFO_WITH_PROPERTIES_TYPE, 251) \
        V(FIRST_FUNCTION_TEMPLATE_INFO_TYPE, 251) \
        V(FUNCTION_TEMPLATE_INFO_TYPE, 251) /* https://crsrc.org/c/v8/src/objects/templates.tq?l=59&c=1 */\
        V(LAST_FUNCTION_TEMPLATE_INFO_TYPE, 251) \
        V(FIRST_OBJECT_TEMPLATE_INFO_TYPE, 252) \
        V(OBJECT_TEMPLATE_INFO_TYPE, 252) /* https://crsrc.org/c/v8/src/objects/templates.tq?l=119&c=1 */\
        V(LAST_OBJECT_TEMPLATE_INFO_TYPE, 252) \
      V(LAST_TEMPLATE_INFO_WITH_PROPERTIES_TYPE, 252) \
      V(FIRST_DICTIONARY_TEMPLATE_INFO_TYPE, 253) \
      V(DICTIONARY_TEMPLATE_INFO_TYPE, 253) /* https://crsrc.org/c/v8/src/objects/templates.tq?l=125&c=1 */\
      V(LAST_DICTIONARY_TEMPLATE_INFO_TYPE, 253) \
    V(LAST_TEMPLATE_INFO_TYPE, 253) \
    V(FIRST_MAP_TYPE, 254) \
      V(MAP_TYPE, 254) /* https://crsrc.org/c/v8/src/objects/map.tq?l=43&c=1 */\
      V(FIRST_WASM_CUSTOM_MAP_TYPE, 255) \
      V(WASM_CUSTOM_MAP_TYPE, 255) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=321&c=1 */\
      V(LAST_WASM_CUSTOM_MAP_TYPE, 255) \
    V(LAST_MAP_TYPE, 255) \
    V(FIRST_MODULE_TYPE, 256) \
      V(FIRST_SOURCE_TEXT_MODULE_TYPE, 256) \
      V(SOURCE_TEXT_MODULE_TYPE, 256) /* https://crsrc.org/c/v8/src/objects/source-text-module.tq?l=13&c=1 */\
      V(LAST_SOURCE_TEXT_MODULE_TYPE, 256) \
      V(FIRST_SYNTHETIC_MODULE_TYPE, 257) \
      V(SYNTHETIC_MODULE_TYPE, 257) /* https://crsrc.org/c/v8/src/objects/synthetic-module.tq?l=5&c=1 */\
      V(LAST_SYNTHETIC_MODULE_TYPE, 257) \
    V(LAST_MODULE_TYPE, 257) \
    V(FIRST_ALLOCATION_SITE_TYPE, 258) \
    V(ALLOCATION_SITE_TYPE, 258) /* https://crsrc.org/c/v8/src/objects/allocation-site.tq?l=5&c=1 */\
    V(LAST_ALLOCATION_SITE_TYPE, 258) \
    V(FIRST_ARRAY_LIST_TYPE, 259) \
    V(ARRAY_LIST_TYPE, 259) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=42&c=1 */\
    V(LAST_ARRAY_LIST_TYPE, 259) \
    V(FIRST_CELL_TYPE, 260) \
    V(CELL_TYPE, 260) /* https://crsrc.org/c/v8/src/objects/cell.tq?l=5&c=1 */\
    V(LAST_CELL_TYPE, 260) \
    V(FIRST_CONTEXT_CELL_TYPE, 261) \
    V(CONTEXT_CELL_TYPE, 261) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=23&c=1 */\
    V(LAST_CONTEXT_CELL_TYPE, 261) \
    V(FIRST_COVERAGE_INFO_TYPE, 262) \
    V(COVERAGE_INFO_TYPE, 262) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=67&c=1 */\
    V(LAST_COVERAGE_INFO_TYPE, 262) \
    V(FIRST_CPP_GCMANAGED_BASE_TYPE, 263) \
    V(CPP_GCMANAGED_BASE_TYPE, 263) /* https://crsrc.org/c/v8/src/objects/managed.tq?l=5&c=1 */\
    V(LAST_CPP_GCMANAGED_BASE_TYPE, 263) \
    V(FIRST_CPP_HEAP_EXTERNAL_OBJECT_TYPE, 264) \
    V(CPP_HEAP_EXTERNAL_OBJECT_TYPE, 264) /* https://crsrc.org/c/v8/src/objects/cpp-heap-external-object.tq?l=5&c=1 */\
    V(LAST_CPP_HEAP_EXTERNAL_OBJECT_TYPE, 264) \
    V(FIRST_DESCRIPTOR_ARRAY_TYPE, 265) \
    V(DESCRIPTOR_ARRAY_TYPE, 265) /* https://crsrc.org/c/v8/src/objects/descriptor-array.tq?l=27&c=1 */\
    V(LAST_DESCRIPTOR_ARRAY_TYPE, 265) \
    V(FIRST_DOUBLE_STRING_CACHE_TYPE, 266) \
    V(DOUBLE_STRING_CACHE_TYPE, 266) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=289&c=1 */\
    V(LAST_DOUBLE_STRING_CACHE_TYPE, 266) \
    V(FIRST_EMBEDDER_DATA_ARRAY_TYPE, 267) \
    V(EMBEDDER_DATA_ARRAY_TYPE, 267) /* https://crsrc.org/c/v8/src/objects/embedder-data-array.tq?l=5&c=1 */\
    V(LAST_EMBEDDER_DATA_ARRAY_TYPE, 267) \
    V(FIRST_FEEDBACK_METADATA_TYPE, 268) \
    V(FEEDBACK_METADATA_TYPE, 268) /* https://crsrc.org/c/v8/src/objects/feedback-vector.tq?l=48&c=1 */\
    V(LAST_FEEDBACK_METADATA_TYPE, 268) \
    V(FIRST_FEEDBACK_VECTOR_TYPE, 269) \
    V(FEEDBACK_VECTOR_TYPE, 269) /* https://crsrc.org/c/v8/src/objects/feedback-vector.tq?l=34&c=1 */\
    V(LAST_FEEDBACK_VECTOR_TYPE, 269) \
    V(FIRST_FILLER_TYPE, 270) \
    V(FILLER_TYPE, 270) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=697&c=1 */\
    V(LAST_FILLER_TYPE, 270) \
    V(FIRST_FREE_SPACE_TYPE, 271) \
    V(FREE_SPACE_TYPE, 271) /* https://crsrc.org/c/v8/src/objects/free-space.tq?l=5&c=1 */\
    V(LAST_FREE_SPACE_TYPE, 271) \
    V(FIRST_HASH_SEED_WRAPPER_TYPE, 272) \
    V(HASH_SEED_WRAPPER_TYPE, 272) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=290&c=1 */\
    V(LAST_HASH_SEED_WRAPPER_TYPE, 272) \
    V(FIRST_HOLE_TYPE, 273) \
    V(HOLE_TYPE, 273) /* https://crsrc.org/c/v8/src/objects/hole.tq?l=5&c=1 */\
    V(LAST_HOLE_TYPE, 273) \
    V(FIRST_INTERCEPTOR_INFO_TYPE, 274) \
    V(INTERCEPTOR_INFO_TYPE, 274) /* https://crsrc.org/c/v8/src/objects/api-callbacks.tq?l=15&c=1 */\
    V(LAST_INTERCEPTOR_INFO_TYPE, 274) \
    V(FIRST_MEGA_DOM_HANDLER_TYPE, 275) \
    V(MEGA_DOM_HANDLER_TYPE, 275) /* https://crsrc.org/c/v8/src/objects/megadom-handler.tq?l=7&c=1 */\
    V(LAST_MEGA_DOM_HANDLER_TYPE, 275) \
    V(FIRST_ON_HEAP_BASIC_BLOCK_PROFILER_DATA_TYPE, 276) \
    V(ON_HEAP_BASIC_BLOCK_PROFILER_DATA_TYPE, 276) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=199&c=1 */\
    V(LAST_ON_HEAP_BASIC_BLOCK_PROFILER_DATA_TYPE, 276) \
    V(FIRST_PREPARSE_DATA_TYPE, 277) \
    V(PREPARSE_DATA_TYPE, 277) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=7&c=1 */\
    V(LAST_PREPARSE_DATA_TYPE, 277) \
    V(FIRST_PROPERTY_ARRAY_TYPE, 278) \
    V(PROPERTY_ARRAY_TYPE, 278) /* https://crsrc.org/c/v8/src/objects/property-array.tq?l=5&c=1 */\
    V(LAST_PROPERTY_ARRAY_TYPE, 278) \
    V(FIRST_PROPERTY_CELL_TYPE, 279) \
    V(PROPERTY_CELL_TYPE, 279) /* https://crsrc.org/c/v8/src/objects/property-cell.tq?l=6&c=1 */\
    V(LAST_PROPERTY_CELL_TYPE, 279) \
    V(FIRST_SCOPE_INFO_TYPE, 280) \
    V(SCOPE_INFO_TYPE, 280) /* https://crsrc.org/c/v8/src/objects/scope-info.tq?l=119&c=1 */\
    V(LAST_SCOPE_INFO_TYPE, 280) \
    V(FIRST_SCRIPT_CONTEXT_TABLE_TYPE, 281) \
    V(SCRIPT_CONTEXT_TABLE_TYPE, 281) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=15&c=1 */\
    V(LAST_SCRIPT_CONTEXT_TABLE_TYPE, 281) \
    V(FIRST_SHARED_FUNCTION_INFO_TYPE, 282) \
    V(SHARED_FUNCTION_INFO_TYPE, 282) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=62&c=1 */\
    V(LAST_SHARED_FUNCTION_INFO_TYPE, 282) \
    V(FIRST_SORT_STATE_TYPE, 283) \
    V(SORT_STATE_TYPE, 283) /* https://crsrc.org/c/v8/third_party/v8/builtins/array-sort.tq?l=24&c=1 */\
    V(LAST_SORT_STATE_TYPE, 283) \
    V(FIRST_SWISS_NAME_DICTIONARY_TYPE, 284) \
    V(SWISS_NAME_DICTIONARY_TYPE, 284) /* https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=9&c=1 */\
    V(LAST_SWISS_NAME_DICTIONARY_TYPE, 284) \
    V(FIRST_UNINITIALIZED_HEAP_NUMBER_TYPE, 285) \
    V(UNINITIALIZED_HEAP_NUMBER_TYPE, 285) /* https://crsrc.org/c/v8/src/objects/heap-number.tq?l=19&c=1 */\
    V(LAST_UNINITIALIZED_HEAP_NUMBER_TYPE, 285) \
    V(FIRST_WASM_CONTINUATION_OBJECT_TYPE, 286) \
    V(WASM_CONTINUATION_OBJECT_TYPE, 286) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=176&c=1 */\
    V(LAST_WASM_CONTINUATION_OBJECT_TYPE, 286) \
    V(FIRST_WASM_FAST_API_CALL_DATA_TYPE, 287) \
    V(WASM_FAST_API_CALL_DATA_TYPE, 287) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=70&c=1 */\
    V(LAST_WASM_FAST_API_CALL_DATA_TYPE, 287) \
    V(FIRST_WASM_FUNC_REF_TYPE, 288) \
    V(WASM_FUNC_REF_TYPE, 288) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=110&c=1 */\
    V(LAST_WASM_FUNC_REF_TYPE, 288) \
    V(FIRST_WASM_NULL_TYPE, 289) \
    V(WASM_NULL_TYPE, 289) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=343&c=1 */\
    V(LAST_WASM_NULL_TYPE, 289) \
    V(FIRST_WASM_RESUME_DATA_TYPE, 290) \
    V(WASM_RESUME_DATA_TYPE, 290) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=161&c=1 */\
    V(LAST_WASM_RESUME_DATA_TYPE, 290) \
    V(FIRST_WASM_STACK_OBJECT_TYPE, 291) \
    V(WASM_STACK_OBJECT_TYPE, 291) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=183&c=1 */\
    V(LAST_WASM_STACK_OBJECT_TYPE, 291) \
    V(FIRST_WASM_STRING_VIEW_ITER_TYPE, 292) \
    V(WASM_STRING_VIEW_ITER_TYPE, 292) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=335&c=1 */\
    V(LAST_WASM_STRING_VIEW_ITER_TYPE, 292) \
    V(FIRST_WASM_TYPE_INFO_TYPE, 293) \
    V(WASM_TYPE_INFO_TYPE, 293) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=291&c=1 */\
    V(LAST_WASM_TYPE_INFO_TYPE, 293) \
    V(FIRST_WEAK_ARRAY_LIST_TYPE, 294) \
    V(WEAK_ARRAY_LIST_TYPE, 294) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=49&c=1 */\
    V(LAST_WEAK_ARRAY_LIST_TYPE, 294) \
    V(FIRST_WEAK_CELL_TYPE, 295) \
    V(WEAK_CELL_TYPE, 295) /* https://crsrc.org/c/v8/src/objects/js-weak-refs.tq?l=23&c=1 */\
    V(LAST_WEAK_CELL_TYPE, 295) \
    V(FIRST_JS_RECEIVER_TYPE, 296) \
      V(FIRST_WASM_OBJECT_TYPE, 296) \
        V(FIRST_WASM_ARRAY_TYPE, 296) \
        V(WASM_ARRAY_TYPE, 296) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=308&c=1 */\
        V(LAST_WASM_ARRAY_TYPE, 296) \
        V(FIRST_WASM_STRUCT_TYPE, 297) \
        V(WASM_STRUCT_TYPE, 297) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=304&c=1 */\
        V(LAST_WASM_STRUCT_TYPE, 297) \
      V(LAST_WASM_OBJECT_TYPE, 297) \
      V(FIRST_JS_PROXY_TYPE, 298) \
      V(JS_PROXY_TYPE, 298) /* https://crsrc.org/c/v8/src/objects/js-proxy.tq?l=5&c=1 */\
      V(LAST_JS_PROXY_TYPE, 298) \
      V(FIRST_JS_OBJECT_TYPE, 299) \
        V(JS_OBJECT_TYPE, 1057) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=15&c=1 */\
        V(FIRST_JS_CUSTOM_ELEMENTS_OBJECT_TYPE, 299) \
          V(FIRST_JS_SPECIAL_OBJECT_TYPE, 299) \
            V(FIRST_JS_MODULE_NAMESPACE_TYPE, 299) \
              V(JS_MODULE_NAMESPACE_TYPE, 299) /* https://crsrc.org/c/v8/src/objects/module.tq?l=22&c=1 */\
              V(FIRST_JS_DEFERRED_MODULE_NAMESPACE_TYPE, 300) \
              V(JS_DEFERRED_MODULE_NAMESPACE_TYPE, 300) /* https://crsrc.org/c/v8/src/objects/module.tq?l=27&c=1 */\
              V(LAST_JS_DEFERRED_MODULE_NAMESPACE_TYPE, 300) \
            V(LAST_JS_MODULE_NAMESPACE_TYPE, 300) \
            V(FIRST_JS_GLOBAL_OBJECT_TYPE, 301) \
            V(JS_GLOBAL_OBJECT_TYPE, 301) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=127&c=1 */\
            V(LAST_JS_GLOBAL_OBJECT_TYPE, 301) \
            V(FIRST_JS_GLOBAL_PROXY_TYPE, 302) \
            V(JS_GLOBAL_PROXY_TYPE, 302) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=124&c=1 */\
            V(LAST_JS_GLOBAL_PROXY_TYPE, 302) \
            V(FIRST_JS_SPECIAL_API_OBJECT_TYPE, 1040) \
            V(JS_SPECIAL_API_OBJECT_TYPE, 1040) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=717&c=1 */\
            V(LAST_JS_SPECIAL_API_OBJECT_TYPE, 1040) \
          V(LAST_JS_SPECIAL_OBJECT_TYPE, 1040) \
          V(FIRST_JS_PRIMITIVE_WRAPPER_TYPE, 1041) \
          V(JS_PRIMITIVE_WRAPPER_TYPE, 1041) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=154&c=1 */\
          V(LAST_JS_PRIMITIVE_WRAPPER_TYPE, 1041) \
        V(LAST_JS_CUSTOM_ELEMENTS_OBJECT_TYPE, 1041) \
        V(FIRST_JS_APIOBJECT_WITH_EMBEDDER_SLOTS_TYPE, 1058) \
          V(FIRST_JS_API_OBJECT_TYPE, 1058) \
            V(JS_API_OBJECT_TYPE, 1058) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=703&c=1 */\
            V(FIRST_JS_LAST_DUMMY_API_OBJECT_TYPE, 2058) \
            V(JS_LAST_DUMMY_API_OBJECT_TYPE, 2058) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=710&c=1 */\
            V(LAST_JS_LAST_DUMMY_API_OBJECT_TYPE, 2058) \
          V(LAST_JS_API_OBJECT_TYPE, 2058) \
          V(FIRST_JS_ARRAY_BUFFER_VIEW_TYPE, 2059) \
            V(FIRST_JS_DATA_VIEW_OR_RAB_GSAB_DATA_VIEW_TYPE, 2059) \
              V(FIRST_JS_DATA_VIEW_TYPE, 2059) \
              V(JS_DATA_VIEW_TYPE, 2059) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=150&c=1 */\
              V(LAST_JS_DATA_VIEW_TYPE, 2059) \
              V(FIRST_JS_RAB_GSAB_DATA_VIEW_TYPE, 2060) \
              V(JS_RAB_GSAB_DATA_VIEW_TYPE, 2060) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=153&c=1 */\
              V(LAST_JS_RAB_GSAB_DATA_VIEW_TYPE, 2060) \
            V(LAST_JS_DATA_VIEW_OR_RAB_GSAB_DATA_VIEW_TYPE, 2060) \
            V(FIRST_JS_TYPED_ARRAY_TYPE, 2061) \
              V(JS_TYPED_ARRAY_TYPE, 2061) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=120&c=1 */\
              V(FIRST_JS_DETACHED_TYPED_ARRAY_TYPE, 2062) \
              V(JS_DETACHED_TYPED_ARRAY_TYPE, 2062) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=132&c=1 */\
              V(LAST_JS_DETACHED_TYPED_ARRAY_TYPE, 2062) \
            V(LAST_JS_TYPED_ARRAY_TYPE, 2062) \
          V(LAST_JS_ARRAY_BUFFER_VIEW_TYPE, 2062) \
          V(FIRST_JS_ARRAY_BUFFER_TYPE, 2063) \
          V(JS_ARRAY_BUFFER_TYPE, 2063) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=18&c=1 */\
          V(LAST_JS_ARRAY_BUFFER_TYPE, 2063) \
        V(LAST_JS_APIOBJECT_WITH_EMBEDDER_SLOTS_TYPE, 2063) \
        V(FIRST_JS_FUNCTION_OR_BOUND_FUNCTION_OR_WRAPPED_FUNCTION_TYPE, 2064) \
          V(FIRST_JS_FUNCTION_TYPE, 2064) \
            V(FIRST_JS_FUNCTION_WITHOUT_PROTOTYPE_TYPE, 2064) \
            V(JS_FUNCTION_WITHOUT_PROTOTYPE_TYPE, 2064) /* https://crsrc.org/c/v8/src/objects/js-function.tq?l=57&c=1 */\
            V(LAST_JS_FUNCTION_WITHOUT_PROTOTYPE_TYPE, 2064) \
            V(FIRST_JS_FUNCTION_WITH_PROTOTYPE_TYPE, 2065) \
              V(JS_FUNCTION_WITH_PROTOTYPE_TYPE, 2065) /* https://crsrc.org/c/v8/src/objects/js-function.tq?l=61&c=1 */\
              V(FIRST_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2066) \
                V(FIRST_BIGINT64_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2066) \
                V(BIGINT64_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2066) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=193&c=1 */\
                V(LAST_BIGINT64_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2066) \
                V(FIRST_BIGUINT64_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2067) \
                V(BIGUINT64_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2067) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=190&c=1 */\
                V(LAST_BIGUINT64_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2067) \
                V(FIRST_FLOAT16_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2068) \
                V(FLOAT16_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2068) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=178&c=1 */\
                V(LAST_FLOAT16_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2068) \
                V(FIRST_FLOAT32_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2069) \
                V(FLOAT32_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2069) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=181&c=1 */\
                V(LAST_FLOAT32_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2069) \
                V(FIRST_FLOAT64_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2070) \
                V(FLOAT64_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2070) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=184&c=1 */\
                V(LAST_FLOAT64_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2070) \
                V(FIRST_INT16_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2071) \
                V(INT16_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2071) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=169&c=1 */\
                V(LAST_INT16_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2071) \
                V(FIRST_INT32_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2072) \
                V(INT32_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2072) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=175&c=1 */\
                V(LAST_INT32_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2072) \
                V(FIRST_INT8_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2073) \
                V(INT8_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2073) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=163&c=1 */\
                V(LAST_INT8_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2073) \
                V(FIRST_UINT16_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2074) \
                V(UINT16_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2074) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=166&c=1 */\
                V(LAST_UINT16_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2074) \
                V(FIRST_UINT32_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2075) \
                V(UINT32_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2075) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=172&c=1 */\
                V(LAST_UINT32_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2075) \
                V(FIRST_UINT8_CLAMPED_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2076) \
                V(UINT8_CLAMPED_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2076) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=187&c=1 */\
                V(LAST_UINT8_CLAMPED_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2076) \
                V(FIRST_UINT8_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2077) \
                V(UINT8_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2077) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=160&c=1 */\
                V(LAST_UINT8_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2077) \
              V(LAST_TYPED_ARRAY_CONSTRUCTOR_TYPE, 2077) \
              V(FIRST_JS_ARRAY_CONSTRUCTOR_TYPE, 2078) \
              V(JS_ARRAY_CONSTRUCTOR_TYPE, 2078) /* https://crsrc.org/c/v8/src/objects/js-array.tq?l=79&c=1 */\
              V(LAST_JS_ARRAY_CONSTRUCTOR_TYPE, 2078) \
              V(FIRST_JS_PROMISE_CONSTRUCTOR_TYPE, 2079) \
              V(JS_PROMISE_CONSTRUCTOR_TYPE, 2079) /* https://crsrc.org/c/v8/src/objects/js-promise.tq?l=41&c=1 */\
              V(LAST_JS_PROMISE_CONSTRUCTOR_TYPE, 2079) \
              V(FIRST_JS_REG_EXP_CONSTRUCTOR_TYPE, 2080) \
              V(JS_REG_EXP_CONSTRUCTOR_TYPE, 2080) /* https://crsrc.org/c/v8/src/objects/js-regexp.tq?l=102&c=1 */\
              V(LAST_JS_REG_EXP_CONSTRUCTOR_TYPE, 2080) \
              V(FIRST_JS_CLASS_CONSTRUCTOR_TYPE, 2081) \
              V(JS_CLASS_CONSTRUCTOR_TYPE, 2081) /* https://crsrc.org/c/v8/src/objects/js-function.tq?l=80&c=1 */\
              V(LAST_JS_CLASS_CONSTRUCTOR_TYPE, 2081) \
            V(LAST_JS_FUNCTION_WITH_PROTOTYPE_TYPE, 2081) \
          V(LAST_JS_FUNCTION_TYPE, 2081) \
          V(FIRST_JS_BOUND_FUNCTION_TYPE, 2082) \
          V(JS_BOUND_FUNCTION_TYPE, 2082) /* https://crsrc.org/c/v8/src/objects/js-function.tq?l=9&c=1 */\
          V(LAST_JS_BOUND_FUNCTION_TYPE, 2082) \
          V(FIRST_JS_WRAPPED_FUNCTION_TYPE, 2083) \
          V(JS_WRAPPED_FUNCTION_TYPE, 2083) /* https://crsrc.org/c/v8/src/objects/js-function.tq?l=22&c=1 */\
          V(LAST_JS_WRAPPED_FUNCTION_TYPE, 2083) \
        V(LAST_JS_FUNCTION_OR_BOUND_FUNCTION_OR_WRAPPED_FUNCTION_TYPE, 2083) \
        V(FIRST_JS_INTERNAL_PROTOTYPE_BASE_TYPE, 2084) \
          V(FIRST_JS_ARRAY_ITERATOR_PROTOTYPE_TYPE, 2084) \
          V(JS_ARRAY_ITERATOR_PROTOTYPE_TYPE, 2084) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=252&c=1 */\
          V(LAST_JS_ARRAY_ITERATOR_PROTOTYPE_TYPE, 2084) \
          V(FIRST_JS_ITERATOR_PROTOTYPE_TYPE, 2085) \
          V(JS_ITERATOR_PROTOTYPE_TYPE, 2085) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=249&c=1 */\
          V(LAST_JS_ITERATOR_PROTOTYPE_TYPE, 2085) \
          V(FIRST_JS_MAP_ITERATOR_PROTOTYPE_TYPE, 2086) \
          V(JS_MAP_ITERATOR_PROTOTYPE_TYPE, 2086) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=255&c=1 */\
          V(LAST_JS_MAP_ITERATOR_PROTOTYPE_TYPE, 2086) \
          V(FIRST_JS_OBJECT_PROTOTYPE_TYPE, 2087) \
          V(JS_OBJECT_PROTOTYPE_TYPE, 2087) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=234&c=1 */\
          V(LAST_JS_OBJECT_PROTOTYPE_TYPE, 2087) \
          V(FIRST_JS_PROMISE_PROTOTYPE_TYPE, 2088) \
          V(JS_PROMISE_PROTOTYPE_TYPE, 2088) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=240&c=1 */\
          V(LAST_JS_PROMISE_PROTOTYPE_TYPE, 2088) \
          V(FIRST_JS_REG_EXP_PROTOTYPE_TYPE, 2089) \
          V(JS_REG_EXP_PROTOTYPE_TYPE, 2089) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=237&c=1 */\
          V(LAST_JS_REG_EXP_PROTOTYPE_TYPE, 2089) \
          V(FIRST_JS_SET_ITERATOR_PROTOTYPE_TYPE, 2090) \
          V(JS_SET_ITERATOR_PROTOTYPE_TYPE, 2090) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=258&c=1 */\
          V(LAST_JS_SET_ITERATOR_PROTOTYPE_TYPE, 2090) \
          V(FIRST_JS_SET_PROTOTYPE_TYPE, 2091) \
          V(JS_SET_PROTOTYPE_TYPE, 2091) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=246&c=1 */\
          V(LAST_JS_SET_PROTOTYPE_TYPE, 2091) \
          V(FIRST_JS_STRING_ITERATOR_PROTOTYPE_TYPE, 2092) \
          V(JS_STRING_ITERATOR_PROTOTYPE_TYPE, 2092) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=261&c=1 */\
          V(LAST_JS_STRING_ITERATOR_PROTOTYPE_TYPE, 2092) \
          V(FIRST_JS_TYPED_ARRAY_PROTOTYPE_TYPE, 2093) \
          V(JS_TYPED_ARRAY_PROTOTYPE_TYPE, 2093) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=243&c=1 */\
          V(LAST_JS_TYPED_ARRAY_PROTOTYPE_TYPE, 2093) \
        V(LAST_JS_INTERNAL_PROTOTYPE_BASE_TYPE, 2093) \
        V(FIRST_JS_ITERATOR_HELPER_TYPE, 2094) \
          V(FIRST_JS_ITERATOR_HELPER_SIMPLE_TYPE, 2094) \
            V(FIRST_JS_ITERATOR_CONCAT_HELPER_TYPE, 2094) \
            V(JS_ITERATOR_CONCAT_HELPER_TYPE, 2094) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=55&c=1 */\
            V(LAST_JS_ITERATOR_CONCAT_HELPER_TYPE, 2094) \
            V(FIRST_JS_ITERATOR_DROP_HELPER_TYPE, 2095) \
            V(JS_ITERATOR_DROP_HELPER_TYPE, 2095) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=43&c=1 */\
            V(LAST_JS_ITERATOR_DROP_HELPER_TYPE, 2095) \
            V(FIRST_JS_ITERATOR_FILTER_HELPER_TYPE, 2096) \
            V(JS_ITERATOR_FILTER_HELPER_TYPE, 2096) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=32&c=1 */\
            V(LAST_JS_ITERATOR_FILTER_HELPER_TYPE, 2096) \
            V(FIRST_JS_ITERATOR_FLAT_MAP_HELPER_TYPE, 2097) \
            V(JS_ITERATOR_FLAT_MAP_HELPER_TYPE, 2097) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=48&c=1 */\
            V(LAST_JS_ITERATOR_FLAT_MAP_HELPER_TYPE, 2097) \
            V(FIRST_JS_ITERATOR_MAP_HELPER_TYPE, 2098) \
            V(JS_ITERATOR_MAP_HELPER_TYPE, 2098) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=26&c=1 */\
            V(LAST_JS_ITERATOR_MAP_HELPER_TYPE, 2098) \
            V(FIRST_JS_ITERATOR_TAKE_HELPER_TYPE, 2099) \
            V(JS_ITERATOR_TAKE_HELPER_TYPE, 2099) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=38&c=1 */\
            V(LAST_JS_ITERATOR_TAKE_HELPER_TYPE, 2099) \
          V(LAST_JS_ITERATOR_HELPER_SIMPLE_TYPE, 2099) \
          V(FIRST_JS_ITERATOR_ZIP_HELPER_TYPE, 2100) \
            V(JS_ITERATOR_ZIP_HELPER_TYPE, 2100) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=67&c=1 */\
            V(FIRST_JS_ITERATOR_ZIP_KEYED_HELPER_TYPE, 2101) \
            V(JS_ITERATOR_ZIP_KEYED_HELPER_TYPE, 2101) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=75&c=1 */\
            V(LAST_JS_ITERATOR_ZIP_KEYED_HELPER_TYPE, 2101) \
          V(LAST_JS_ITERATOR_ZIP_HELPER_TYPE, 2101) \
        V(LAST_JS_ITERATOR_HELPER_TYPE, 2101) \
        V(FIRST_JS_COLLECTION_ITERATOR_TYPE, 2102) \
          V(FIRST_JS_MAP_ITERATOR_TYPE, 2102) \
            V(FIRST_JS_MAP_KEY_ITERATOR_TYPE, 2102) \
            V(JS_MAP_KEY_ITERATOR_TYPE, 2102) /* https://crsrc.org/c/v8/src/objects/js-collection.tq?l=32&c=1 */\
            V(LAST_JS_MAP_KEY_ITERATOR_TYPE, 2102) \
            V(FIRST_JS_MAP_KEY_VALUE_ITERATOR_TYPE, 2103) \
            V(JS_MAP_KEY_VALUE_ITERATOR_TYPE, 2103) /* https://crsrc.org/c/v8/src/objects/js-collection.tq?l=34&c=1 */\
            V(LAST_JS_MAP_KEY_VALUE_ITERATOR_TYPE, 2103) \
            V(FIRST_JS_MAP_VALUE_ITERATOR_TYPE, 2104) \
            V(JS_MAP_VALUE_ITERATOR_TYPE, 2104) /* https://crsrc.org/c/v8/src/objects/js-collection.tq?l=36&c=1 */\
            V(LAST_JS_MAP_VALUE_ITERATOR_TYPE, 2104) \
          V(LAST_JS_MAP_ITERATOR_TYPE, 2104) \
          V(FIRST_JS_SET_ITERATOR_TYPE, 2105) \
            V(FIRST_JS_SET_KEY_VALUE_ITERATOR_TYPE, 2105) \
            V(JS_SET_KEY_VALUE_ITERATOR_TYPE, 2105) /* https://crsrc.org/c/v8/src/objects/js-collection.tq?l=42&c=1 */\
            V(LAST_JS_SET_KEY_VALUE_ITERATOR_TYPE, 2105) \
            V(FIRST_JS_SET_VALUE_ITERATOR_TYPE, 2106) \
            V(JS_SET_VALUE_ITERATOR_TYPE, 2106) /* https://crsrc.org/c/v8/src/objects/js-collection.tq?l=44&c=1 */\
            V(LAST_JS_SET_VALUE_ITERATOR_TYPE, 2106) \
          V(LAST_JS_SET_ITERATOR_TYPE, 2106) \
        V(LAST_JS_COLLECTION_ITERATOR_TYPE, 2106) \
        V(FIRST_JS_DISPOSABLE_STACK_BASE_TYPE, 2107) \
          V(JS_DISPOSABLE_STACK_BASE_TYPE, 2107) /* https://crsrc.org/c/v8/src/objects/js-disposable-stack.tq?l=25&c=1 */\
          V(FIRST_JS_ASYNC_DISPOSABLE_STACK_TYPE, 2108) \
          V(JS_ASYNC_DISPOSABLE_STACK_TYPE, 2108) /* https://crsrc.org/c/v8/src/objects/js-disposable-stack.tq?l=41&c=1 */\
          V(LAST_JS_ASYNC_DISPOSABLE_STACK_TYPE, 2108) \
          V(FIRST_JS_SYNC_DISPOSABLE_STACK_TYPE, 2109) \
          V(JS_SYNC_DISPOSABLE_STACK_TYPE, 2109) /* https://crsrc.org/c/v8/src/objects/js-disposable-stack.tq?l=38&c=1 */\
          V(LAST_JS_SYNC_DISPOSABLE_STACK_TYPE, 2109) \
        V(LAST_JS_DISPOSABLE_STACK_BASE_TYPE, 2109) \
        V(FIRST_JS_GENERATOR_OBJECT_TYPE, 2110) \
          V(JS_GENERATOR_OBJECT_TYPE, 2110) /* https://crsrc.org/c/v8/src/objects/js-generator.tq?l=15&c=1 */\
          V(FIRST_JS_ASYNC_FUNCTION_OBJECT_TYPE, 2111) \
          V(JS_ASYNC_FUNCTION_OBJECT_TYPE, 2111) /* https://crsrc.org/c/v8/src/objects/js-generator.tq?l=41&c=1 */\
          V(LAST_JS_ASYNC_FUNCTION_OBJECT_TYPE, 2111) \
          V(FIRST_JS_ASYNC_GENERATOR_OBJECT_TYPE, 2112) \
          V(JS_ASYNC_GENERATOR_OBJECT_TYPE, 2112) /* https://crsrc.org/c/v8/src/objects/js-generator.tq?l=50&c=1 */\
          V(LAST_JS_ASYNC_GENERATOR_OBJECT_TYPE, 2112) \
        V(LAST_JS_GENERATOR_OBJECT_TYPE, 2112) \
        V(FIRST_ALWAYS_SHARED_SPACE_JS_OBJECT_TYPE, 2113) \
          V(FIRST_JS_SHARED_ARRAY_TYPE, 2113) \
          V(JS_SHARED_ARRAY_TYPE, 2113) /* https://crsrc.org/c/v8/src/objects/js-shared-array.tq?l=5&c=1 */\
          V(LAST_JS_SHARED_ARRAY_TYPE, 2113) \
          V(FIRST_JS_SHARED_STRUCT_TYPE, 2114) \
          V(JS_SHARED_STRUCT_TYPE, 2114) /* https://crsrc.org/c/v8/src/objects/js-struct.tq?l=12&c=1 */\
          V(LAST_JS_SHARED_STRUCT_TYPE, 2114) \
        V(LAST_ALWAYS_SHARED_SPACE_JS_OBJECT_TYPE, 2114) \
        V(FIRST_JS_COLLECTION_TYPE, 2115) \
          V(FIRST_JS_MAP_TYPE, 2115) \
          V(JS_MAP_TYPE, 2115) /* https://crsrc.org/c/v8/src/objects/js-collection.tq?l=15&c=1 */\
          V(LAST_JS_MAP_TYPE, 2115) \
          V(FIRST_JS_SET_TYPE, 2116) \
          V(JS_SET_TYPE, 2116) /* https://crsrc.org/c/v8/src/objects/js-collection.tq?l=13&c=1 */\
          V(LAST_JS_SET_TYPE, 2116) \
        V(LAST_JS_COLLECTION_TYPE, 2116) \
        V(FIRST_JS_OBJECT_WITH_EMBEDDER_SLOTS_TYPE, 2117) \
          V(JS_OBJECT_WITH_EMBEDDER_SLOTS_TYPE, 2117) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=53&c=1 */\
          V(FIRST_JS_PROMISE_TYPE, 2118) \
          V(JS_PROMISE_TYPE, 2118) /* https://crsrc.org/c/v8/src/objects/js-promise.tq?l=14&c=1 */\
          V(LAST_JS_PROMISE_TYPE, 2118) \
        V(LAST_JS_OBJECT_WITH_EMBEDDER_SLOTS_TYPE, 2118) \
        V(FIRST_JS_WEAK_COLLECTION_TYPE, 2119) \
          V(FIRST_JS_WEAK_MAP_TYPE, 2119) \
          V(JS_WEAK_MAP_TYPE, 2119) /* https://crsrc.org/c/v8/src/objects/js-collection.tq?l=26&c=1 */\
          V(LAST_JS_WEAK_MAP_TYPE, 2119) \
          V(FIRST_JS_WEAK_SET_TYPE, 2120) \
          V(JS_WEAK_SET_TYPE, 2120) /* https://crsrc.org/c/v8/src/objects/js-collection.tq?l=24&c=1 */\
          V(LAST_JS_WEAK_SET_TYPE, 2120) \
        V(LAST_JS_WEAK_COLLECTION_TYPE, 2120) \
        V(FIRST_JS_ARGUMENTS_OBJECT_TYPE, 2121) \
        V(JS_ARGUMENTS_OBJECT_TYPE, 2121) /* https://crsrc.org/c/v8/src/objects/arguments.tq?l=5&c=1 */\
        V(LAST_JS_ARGUMENTS_OBJECT_TYPE, 2121) \
        V(FIRST_JS_ARRAY_TYPE, 2122) \
        V(JS_ARRAY_TYPE, 2122) /* https://crsrc.org/c/v8/src/objects/js-array.tq?l=62&c=1 */\
        V(LAST_JS_ARRAY_TYPE, 2122) \
        V(FIRST_JS_ARRAY_ITERATOR_TYPE, 2123) \
        V(JS_ARRAY_ITERATOR_TYPE, 2123) /* https://crsrc.org/c/v8/src/objects/js-array.tq?l=7&c=1 */\
        V(LAST_JS_ARRAY_ITERATOR_TYPE, 2123) \
        V(FIRST_JS_ASYNC_FROM_SYNC_ITERATOR_TYPE, 2124) \
        V(JS_ASYNC_FROM_SYNC_ITERATOR_TYPE, 2124) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=200&c=1 */\
        V(LAST_JS_ASYNC_FROM_SYNC_ITERATOR_TYPE, 2124) \
        V(FIRST_JS_COLLATOR_TYPE, 2125) \
        V(JS_COLLATOR_TYPE, 2125) /* https://crsrc.org/c/v8/src/objects/js-collator.tq?l=7&c=1 */\
        V(LAST_JS_COLLATOR_TYPE, 2125) \
        V(FIRST_JS_CONTEXT_EXTENSION_OBJECT_TYPE, 2126) \
        V(JS_CONTEXT_EXTENSION_OBJECT_TYPE, 2126) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=720&c=1 */\
        V(LAST_JS_CONTEXT_EXTENSION_OBJECT_TYPE, 2126) \
        V(FIRST_JS_DATE_TYPE, 2127) \
        V(JS_DATE_TYPE, 2127) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=179&c=1 */\
        V(LAST_JS_DATE_TYPE, 2127) \
        V(FIRST_JS_DATE_TIME_FORMAT_TYPE, 2128) \
        V(JS_DATE_TIME_FORMAT_TYPE, 2128) /* https://crsrc.org/c/v8/src/objects/js-date-time-format.tq?l=20&c=1 */\
        V(LAST_JS_DATE_TIME_FORMAT_TYPE, 2128) \
        V(FIRST_JS_DISPLAY_NAMES_TYPE, 2129) \
        V(JS_DISPLAY_NAMES_TYPE, 2129) /* https://crsrc.org/c/v8/src/objects/js-display-names.tq?l=19&c=1 */\
        V(LAST_JS_DISPLAY_NAMES_TYPE, 2129) \
        V(FIRST_JS_DURATION_FORMAT_TYPE, 2130) \
        V(JS_DURATION_FORMAT_TYPE, 2130) /* https://crsrc.org/c/v8/src/objects/js-duration-format.tq?l=45&c=1 */\
        V(LAST_JS_DURATION_FORMAT_TYPE, 2130) \
        V(FIRST_JS_ERROR_TYPE, 2131) \
        V(JS_ERROR_TYPE, 2131) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=722&c=1 */\
        V(LAST_JS_ERROR_TYPE, 2131) \
        V(FIRST_JS_EXTERNAL_OBJECT_TYPE, 2132) \
        V(JS_EXTERNAL_OBJECT_TYPE, 2132) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=45&c=1 */\
        V(LAST_JS_EXTERNAL_OBJECT_TYPE, 2132) \
        V(FIRST_JS_FINALIZATION_REGISTRY_TYPE, 2133) \
        V(JS_FINALIZATION_REGISTRY_TYPE, 2133) /* https://crsrc.org/c/v8/src/objects/js-weak-refs.tq?l=10&c=1 */\
        V(LAST_JS_FINALIZATION_REGISTRY_TYPE, 2133) \
        V(FIRST_JS_LIST_FORMAT_TYPE, 2134) \
        V(JS_LIST_FORMAT_TYPE, 2134) /* https://crsrc.org/c/v8/src/objects/js-list-format.tq?l=15&c=1 */\
        V(LAST_JS_LIST_FORMAT_TYPE, 2134) \
        V(FIRST_JS_LOCALE_TYPE, 2135) \
        V(JS_LOCALE_TYPE, 2135) /* https://crsrc.org/c/v8/src/objects/js-locale.tq?l=7&c=1 */\
        V(LAST_JS_LOCALE_TYPE, 2135) \
        V(FIRST_JS_MESSAGE_OBJECT_TYPE, 2136) \
        V(JS_MESSAGE_OBJECT_TYPE, 2136) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=159&c=1 */\
        V(LAST_JS_MESSAGE_OBJECT_TYPE, 2136) \
        V(FIRST_JS_NUMBER_FORMAT_TYPE, 2137) \
        V(JS_NUMBER_FORMAT_TYPE, 2137) /* https://crsrc.org/c/v8/src/objects/js-number-format.tq?l=7&c=1 */\
        V(LAST_JS_NUMBER_FORMAT_TYPE, 2137) \
        V(FIRST_JS_PLURAL_RULES_TYPE, 2138) \
        V(JS_PLURAL_RULES_TYPE, 2138) /* https://crsrc.org/c/v8/src/objects/js-plural-rules.tq?l=13&c=1 */\
        V(LAST_JS_PLURAL_RULES_TYPE, 2138) \
        V(FIRST_JS_RAW_JSON_TYPE, 2139) \
        V(JS_RAW_JSON_TYPE, 2139) /* https://crsrc.org/c/v8/src/objects/js-raw-json.tq?l=7&c=1 */\
        V(LAST_JS_RAW_JSON_TYPE, 2139) \
        V(FIRST_JS_REG_EXP_TYPE, 2140) \
        V(JS_REG_EXP_TYPE, 2140) /* https://crsrc.org/c/v8/src/objects/js-regexp.tq?l=65&c=1 */\
        V(LAST_JS_REG_EXP_TYPE, 2140) \
        V(FIRST_JS_REG_EXP_STRING_ITERATOR_TYPE, 2141) \
        V(JS_REG_EXP_STRING_ITERATOR_TYPE, 2141) /* https://crsrc.org/c/v8/src/objects/js-regexp-string-iterator.tq?l=12&c=1 */\
        V(LAST_JS_REG_EXP_STRING_ITERATOR_TYPE, 2141) \
        V(FIRST_JS_RELATIVE_TIME_FORMAT_TYPE, 2142) \
        V(JS_RELATIVE_TIME_FORMAT_TYPE, 2142) /* https://crsrc.org/c/v8/src/objects/js-relative-time-format.tq?l=14&c=1 */\
        V(LAST_JS_RELATIVE_TIME_FORMAT_TYPE, 2142) \
        V(FIRST_JS_SEGMENT_ITERATOR_TYPE, 2143) \
        V(JS_SEGMENT_ITERATOR_TYPE, 2143) /* https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=12&c=1 */\
        V(LAST_JS_SEGMENT_ITERATOR_TYPE, 2143) \
        V(FIRST_JS_SEGMENTER_TYPE, 2144) \
        V(JS_SEGMENTER_TYPE, 2144) /* https://crsrc.org/c/v8/src/objects/js-segmenter.tq?l=14&c=1 */\
        V(LAST_JS_SEGMENTER_TYPE, 2144) \
        V(FIRST_JS_SEGMENTS_TYPE, 2145) \
        V(JS_SEGMENTS_TYPE, 2145) /* https://crsrc.org/c/v8/src/objects/js-segments.tq?l=12&c=1 */\
        V(LAST_JS_SEGMENTS_TYPE, 2145) \
        V(FIRST_JS_SHADOW_REALM_TYPE, 2146) \
        V(JS_SHADOW_REALM_TYPE, 2146) /* https://crsrc.org/c/v8/src/objects/js-shadow-realm.tq?l=5&c=1 */\
        V(LAST_JS_SHADOW_REALM_TYPE, 2146) \
        V(FIRST_JS_STRING_ITERATOR_TYPE, 2147) \
        V(JS_STRING_ITERATOR_TYPE, 2147) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=208&c=1 */\
        V(LAST_JS_STRING_ITERATOR_TYPE, 2147) \
        V(FIRST_JS_TEMPORAL_DURATION_TYPE, 2148) \
        V(JS_TEMPORAL_DURATION_TYPE, 2148) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=7&c=1 */\
        V(LAST_JS_TEMPORAL_DURATION_TYPE, 2148) \
        V(FIRST_JS_TEMPORAL_INSTANT_TYPE, 2149) \
        V(JS_TEMPORAL_INSTANT_TYPE, 2149) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=12&c=1 */\
        V(LAST_JS_TEMPORAL_INSTANT_TYPE, 2149) \
        V(FIRST_JS_TEMPORAL_PLAIN_DATE_TYPE, 2150) \
        V(JS_TEMPORAL_PLAIN_DATE_TYPE, 2150) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=22&c=1 */\
        V(LAST_JS_TEMPORAL_PLAIN_DATE_TYPE, 2150) \
        V(FIRST_JS_TEMPORAL_PLAIN_DATE_TIME_TYPE, 2151) \
        V(JS_TEMPORAL_PLAIN_DATE_TIME_TYPE, 2151) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=17&c=1 */\
        V(LAST_JS_TEMPORAL_PLAIN_DATE_TIME_TYPE, 2151) \
        V(FIRST_JS_TEMPORAL_PLAIN_MONTH_DAY_TYPE, 2152) \
        V(JS_TEMPORAL_PLAIN_MONTH_DAY_TYPE, 2152) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=27&c=1 */\
        V(LAST_JS_TEMPORAL_PLAIN_MONTH_DAY_TYPE, 2152) \
        V(FIRST_JS_TEMPORAL_PLAIN_TIME_TYPE, 2153) \
        V(JS_TEMPORAL_PLAIN_TIME_TYPE, 2153) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=32&c=1 */\
        V(LAST_JS_TEMPORAL_PLAIN_TIME_TYPE, 2153) \
        V(FIRST_JS_TEMPORAL_PLAIN_YEAR_MONTH_TYPE, 2154) \
        V(JS_TEMPORAL_PLAIN_YEAR_MONTH_TYPE, 2154) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=37&c=1 */\
        V(LAST_JS_TEMPORAL_PLAIN_YEAR_MONTH_TYPE, 2154) \
        V(FIRST_JS_TEMPORAL_ZONED_DATE_TIME_TYPE, 2155) \
        V(JS_TEMPORAL_ZONED_DATE_TIME_TYPE, 2155) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=42&c=1 */\
        V(LAST_JS_TEMPORAL_ZONED_DATE_TIME_TYPE, 2155) \
        V(FIRST_JS_V8_BREAK_ITERATOR_TYPE, 2156) \
        V(JS_V8_BREAK_ITERATOR_TYPE, 2156) /* https://crsrc.org/c/v8/src/objects/js-break-iterator.tq?l=7&c=1 */\
        V(LAST_JS_V8_BREAK_ITERATOR_TYPE, 2156) \
        V(FIRST_JS_VALID_ITERATOR_WRAPPER_TYPE, 2157) \
        V(JS_VALID_ITERATOR_WRAPPER_TYPE, 2157) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=218&c=1 */\
        V(LAST_JS_VALID_ITERATOR_WRAPPER_TYPE, 2157) \
        V(FIRST_JS_WEAK_REF_TYPE, 2158) \
        V(JS_WEAK_REF_TYPE, 2158) /* https://crsrc.org/c/v8/src/objects/js-weak-refs.tq?l=45&c=1 */\
        V(LAST_JS_WEAK_REF_TYPE, 2158) \
        V(FIRST_WASM_CUSTOM_MAP_WRAPPER_TYPE, 2159) \
        V(WASM_CUSTOM_MAP_WRAPPER_TYPE, 2159) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=330&c=1 */\
        V(LAST_WASM_CUSTOM_MAP_WRAPPER_TYPE, 2159) \
        V(FIRST_WASM_EXCEPTION_PACKAGE_TYPE, 2160) \
        V(WASM_EXCEPTION_PACKAGE_TYPE, 2160) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=196&c=1 */\
        V(LAST_WASM_EXCEPTION_PACKAGE_TYPE, 2160) \
        V(FIRST_WASM_GLOBAL_OBJECT_TYPE, 2161) \
        V(WASM_GLOBAL_OBJECT_TYPE, 2161) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=261&c=1 */\
        V(LAST_WASM_GLOBAL_OBJECT_TYPE, 2161) \
        V(FIRST_WASM_INSTANCE_OBJECT_TYPE, 2162) \
        V(WASM_INSTANCE_OBJECT_TYPE, 2162) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=39&c=1 */\
        V(LAST_WASM_INSTANCE_OBJECT_TYPE, 2162) \
        V(FIRST_WASM_MEMORY_OBJECT_TYPE, 2163) \
        V(WASM_MEMORY_OBJECT_TYPE, 2163) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=240&c=1 */\
        V(LAST_WASM_MEMORY_OBJECT_TYPE, 2163) \
        V(FIRST_WASM_MODULE_OBJECT_TYPE, 2164) \
        V(WASM_MODULE_OBJECT_TYPE, 2164) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=198&c=1 */\
        V(LAST_WASM_MODULE_OBJECT_TYPE, 2164) \
        V(FIRST_WASM_SUSPENDING_OBJECT_TYPE, 2165) \
        V(WASM_SUSPENDING_OBJECT_TYPE, 2165) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=351&c=1 */\
        V(LAST_WASM_SUSPENDING_OBJECT_TYPE, 2165) \
        V(FIRST_WASM_TABLE_OBJECT_TYPE, 2166) \
        V(WASM_TABLE_OBJECT_TYPE, 2166) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=207&c=1 */\
        V(LAST_WASM_TABLE_OBJECT_TYPE, 2166) \
        V(FIRST_WASM_TAG_OBJECT_TYPE, 2167) \
        V(WASM_TAG_OBJECT_TYPE, 2167) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=282&c=1 */\
        V(LAST_WASM_TAG_OBJECT_TYPE, 2167) \
        V(FIRST_WASM_VALUE_OBJECT_TYPE, 2168) \
        V(WASM_VALUE_OBJECT_TYPE, 2168) /* https://crsrc.org/c/v8/src/debug/debug-wasm-objects.tq?l=7&c=1 */\
        V(LAST_WASM_VALUE_OBJECT_TYPE, 2168) \
      V(LAST_JS_OBJECT_TYPE, 2168) \
    V(LAST_JS_RECEIVER_TYPE, 2168) \
  V(LAST_HEAP_OBJECT_TYPE, 2168) \

// Instance types for all classes except for those that use
// InstanceType as flags.
#define TORQUE_ASSIGNED_INSTANCE_TYPE_LIST(V) \
  V(SYMBOL_TYPE) /* https://crsrc.org/c/v8/src/objects/name.tq?l=47&c=1 */\
  V(BIG_INT_BASE_TYPE) /* https://crsrc.org/c/v8/src/objects/bigint.tq?l=7&c=1 */\
  V(HEAP_NUMBER_TYPE) /* https://crsrc.org/c/v8/src/objects/heap-number.tq?l=5&c=1 */\
  V(ODDBALL_TYPE) /* https://crsrc.org/c/v8/src/objects/oddball.tq?l=5&c=1 */\
  V(PROMISE_FULFILL_REACTION_JOB_TASK_TYPE) /* https://crsrc.org/c/v8/src/objects/promise.tq?l=70&c=1 */\
  V(PROMISE_REJECT_REACTION_JOB_TASK_TYPE) /* https://crsrc.org/c/v8/src/objects/promise.tq?l=73&c=1 */\
  V(ASYNC_RESUME_TASK_TYPE) /* https://crsrc.org/c/v8/src/objects/microtask.tq?l=27&c=1 */\
  V(CALLABLE_TASK_TYPE) /* https://crsrc.org/c/v8/src/objects/microtask.tq?l=18&c=1 */\
  V(CALLBACK_TASK_TYPE) /* https://crsrc.org/c/v8/src/objects/microtask.tq?l=12&c=1 */\
  V(PROMISE_RESOLVE_THENABLE_JOB_TASK_TYPE) /* https://crsrc.org/c/v8/src/objects/promise.tq?l=76&c=1 */\
  V(LOAD_HANDLER_TYPE) /* https://crsrc.org/c/v8/src/ic/handler-configuration.tq?l=7&c=1 */\
  V(STORE_HANDLER_TYPE) /* https://crsrc.org/c/v8/src/ic/handler-configuration.tq?l=8&c=1 */\
  V(ACCESS_CHECK_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/api-callbacks.tq?l=32&c=1 */\
  V(ACCESSOR_PAIR_TYPE) /* https://crsrc.org/c/v8/src/objects/struct.tq?l=13&c=1 */\
  V(ALIASED_ARGUMENTS_ENTRY_TYPE) /* https://crsrc.org/c/v8/src/objects/arguments.tq?l=62&c=1 */\
  V(ALLOCATION_MEMENTO_TYPE) /* https://crsrc.org/c/v8/src/objects/allocation-site.tq?l=7&c=1 */\
  V(ARRAY_BOILERPLATE_DESCRIPTION_TYPE) /* https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=12&c=1 */\
  V(ASYNC_GENERATOR_REQUEST_TYPE) /* https://crsrc.org/c/v8/src/objects/js-generator.tq?l=59&c=1 */\
  V(BREAK_POINT_TYPE) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=5&c=1 */\
  V(BREAK_POINT_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=11&c=1 */\
  V(BYTECODE_WRAPPER_TYPE) /* https://crsrc.org/c/v8/src/objects/bytecode-array.tq?l=25&c=1 */\
  V(CALL_SITE_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/call-site-info.tq?l=24&c=1 */\
  V(CLASS_BOILERPLATE_TYPE) /* https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=24&c=1 */\
  V(CLASS_POSITIONS_TYPE) /* https://crsrc.org/c/v8/src/objects/struct.tq?l=11&c=1 */\
  V(CODE_WRAPPER_TYPE) /* https://crsrc.org/c/v8/src/objects/bytecode-array.tq?l=32&c=1 */\
  V(DEBUG_SCRIPT_SCOPE_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=132&c=1 */\
  V(ENUM_CACHE_TYPE) /* https://crsrc.org/c/v8/src/objects/descriptor-array.tq?l=5&c=1 */\
  V(ERROR_STACK_DATA_TYPE) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=113&c=1 */\
  V(FEEDBACK_CELL_TYPE) /* https://crsrc.org/c/v8/src/objects/feedback-cell.tq?l=5&c=1 */\
  V(FOR_IN_ENUMERATOR_HOLDER_TYPE) /* https://crsrc.org/c/v8/src/objects/struct.tq?l=15&c=1 */\
  V(FUNCTION_TEMPLATE_RARE_DATA_TYPE) /* https://crsrc.org/c/v8/src/objects/templates.tq?l=26&c=1 */\
  V(MODULE_REQUEST_TYPE) /* https://crsrc.org/c/v8/src/objects/source-text-module.tq?l=61&c=1 */\
  V(PROMISE_CAPABILITY_TYPE) /* https://crsrc.org/c/v8/src/objects/promise.tq?l=5&c=1 */\
  V(PROMISE_REACTION_TYPE) /* https://crsrc.org/c/v8/src/objects/promise.tq?l=34&c=1 */\
  V(PROPERTY_DESCRIPTOR_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/objects/property-descriptor-object.tq?l=20&c=1 */\
  V(PROTOTYPE_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/prototype-info.tq?l=13&c=1 */\
  V(PROTOTYPE_SHARED_CLOSURE_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=35&c=1 */\
  V(REG_EXP_BOILERPLATE_DESCRIPTION_TYPE) /* https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=18&c=1 */\
  V(REG_EXP_DATA_WRAPPER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-regexp.tq?l=60&c=1 */\
  V(SCRIPT_TYPE) /* https://crsrc.org/c/v8/src/objects/script.tq?l=21&c=1 */\
  V(SCRIPT_OR_MODULE_TYPE) /* https://crsrc.org/c/v8/src/objects/module.tq?l=30&c=1 */\
  V(SOURCE_TEXT_MODULE_INFO_ENTRY_TYPE) /* https://crsrc.org/c/v8/src/objects/source-text-module.tq?l=72&c=1 */\
  V(STACK_FRAME_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=78&c=1 */\
  V(STACK_TRACE_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=92&c=1 */\
  V(TEMPLATE_OBJECT_DESCRIPTION_TYPE) /* https://crsrc.org/c/v8/src/objects/template-objects.tq?l=5&c=1 */\
  V(TUPLE2_TYPE) /* https://crsrc.org/c/v8/src/objects/struct.tq?l=9&c=1 */\
  V(WASM_EXCEPTION_TAG_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=188&c=1 */\
  V(UNCOMPILED_DATA_WITH_PREPARSE_DATA_TYPE) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=172&c=1 */\
  V(UNCOMPILED_DATA_WITH_PREPARSE_DATA_AND_JOB_TYPE) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=183&c=1 */\
  V(UNCOMPILED_DATA_WITHOUT_PREPARSE_DATA_TYPE) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=169&c=1 */\
  V(UNCOMPILED_DATA_WITHOUT_PREPARSE_DATA_WITH_JOB_TYPE) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=177&c=1 */\
  V(REG_EXP_DATA_TYPE) /* https://crsrc.org/c/v8/src/objects/js-regexp.tq?l=18&c=1 */\
  V(ATOM_REG_EXP_DATA_TYPE) /* https://crsrc.org/c/v8/src/objects/js-regexp.tq?l=33&c=1 */\
  V(IR_REG_EXP_DATA_TYPE) /* https://crsrc.org/c/v8/src/objects/js-regexp.tq?l=44&c=1 */\
  V(WASM_FUNCTION_DATA_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=120&c=1 */\
  V(WASM_CAPI_FUNCTION_DATA_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=156&c=1 */\
  V(WASM_EXPORTED_FUNCTION_DATA_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=135&c=1 */\
  V(BYTECODE_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/bytecode-array.tq?l=7&c=1 */\
  V(CODE_TYPE) /* https://crsrc.org/c/v8/src/objects/bytecode-array.tq?l=30&c=1 */\
  V(DEBUG_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=37&c=1 */\
  V(INTERPRETER_DATA_TYPE) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=14&c=1 */\
  V(WASM_DISPATCH_TABLE_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=204&c=1 */\
  V(WASM_INTERNAL_FUNCTION_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=79&c=1 */\
  V(WASM_SUSPENDER_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=167&c=1 */\
  V(WASM_TRUSTED_INSTANCE_DATA_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=37&c=1 */\
  V(PROTECTED_FIXED_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=17&c=1 */\
  V(PROTECTED_WEAK_FIXED_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=37&c=1 */\
  V(TRUSTED_BYTE_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-primitive-array.tq?l=15&c=1 */\
  V(TRUSTED_FIXED_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=12&c=1 */\
  V(TRUSTED_WEAK_FIXED_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=32&c=1 */\
  V(INSTRUCTION_STREAM_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=307&c=1 */\
  V(SHARED_FUNCTION_INFO_WRAPPER_TYPE) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=130&c=1 */\
  V(TRUSTED_FOREIGN_TYPE) /* https://crsrc.org/c/v8/src/objects/foreign.tq?l=11&c=1 */\
  V(WASM_DISPATCH_TABLE_FOR_IMPORTS_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=205&c=1 */\
  V(WASM_IMPORT_DATA_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=49&c=1 */\
  V(ACCESSOR_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/api-callbacks.tq?l=51&c=1 */\
  V(FOREIGN_TYPE) /* https://crsrc.org/c/v8/src/objects/foreign.tq?l=5&c=1 */\
  V(FIXED_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=5&c=1 */\
  V(HASH_TABLE_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=277&c=1 */\
  V(EPHEMERON_HASH_TABLE_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=285&c=1 */\
  V(GLOBAL_DICTIONARY_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=282&c=1 */\
  V(NAME_DICTIONARY_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=281&c=1 */\
  V(NAME_TO_INDEX_HASH_TABLE_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=279&c=1 */\
  V(NUMBER_DICTIONARY_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=288&c=1 */\
  V(REGISTERED_SYMBOL_TABLE_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=280&c=1 */\
  V(SIMPLE_NAME_DICTIONARY_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=283&c=1 */\
  V(SIMPLE_NUMBER_DICTIONARY_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=284&c=1 */\
  V(ORDERED_HASH_MAP_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=270&c=1 */\
  V(ORDERED_HASH_SET_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=271&c=1 */\
  V(ORDERED_NAME_DICTIONARY_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=272&c=1 */\
  V(WEAK_FIXED_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=22&c=1 */\
  V(TRANSITION_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=313&c=1 */\
  V(BYTE_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-primitive-array.tq?l=10&c=1 */\
  V(CLOSURE_FEEDBACK_CELL_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/feedback-vector.tq?l=29&c=1 */\
  V(FIXED_DOUBLE_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-primitive-array.tq?l=5&c=1 */\
  V(OBJECT_BOILERPLATE_DESCRIPTION_TYPE) /* https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=5&c=1 */\
  V(REG_EXP_MATCH_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/regexp-match-info.tq?l=5&c=1 */\
  V(SLOPPY_ARGUMENTS_ELEMENTS_TYPE) /* https://crsrc.org/c/v8/src/objects/arguments.tq?l=28&c=1 */\
  V(WEAK_HOMOMORPHIC_FIXED_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=27&c=1 */\
  V(AWAIT_CONTEXT_TYPE) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=46&c=1 */\
  V(BLOCK_CONTEXT_TYPE) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=47&c=1 */\
  V(CATCH_CONTEXT_TYPE) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=48&c=1 */\
  V(DEBUG_EVALUATE_CONTEXT_TYPE) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=49&c=1 */\
  V(EVAL_CONTEXT_TYPE) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=51&c=1 */\
  V(FUNCTION_CONTEXT_TYPE) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=56&c=1 */\
  V(MODULE_CONTEXT_TYPE) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=52&c=1 */\
  V(NATIVE_CONTEXT_TYPE) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=89&c=1 */\
  V(SCRIPT_CONTEXT_TYPE) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=53&c=1 */\
  V(WITH_CONTEXT_TYPE) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=54&c=1 */\
  V(TURBOSHAFT_FLOAT64_RANGE_TYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/turboshaft-types.tq?l=63&c=1 */\
  V(TURBOSHAFT_FLOAT64_SET_TYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/turboshaft-types.tq?l=70&c=1 */\
  V(TURBOSHAFT_WORD32_RANGE_TYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/turboshaft-types.tq?l=26&c=1 */\
  V(TURBOSHAFT_WORD32_SET_TYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/turboshaft-types.tq?l=32&c=1 */\
  V(TURBOSHAFT_WORD64_RANGE_TYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/turboshaft-types.tq?l=42&c=1 */\
  V(TURBOSHAFT_WORD64_SET_TYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/turboshaft-types.tq?l=50&c=1 */\
  V(TURBOFAN_BITSET_TYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=63&c=1 */\
  V(TURBOFAN_HEAP_CONSTANT_TYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=81&c=1 */\
  V(TURBOFAN_OTHER_NUMBER_CONSTANT_TYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=86&c=1 */\
  V(TURBOFAN_RANGE_TYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=75&c=1 */\
  V(TURBOFAN_UNION_TYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/turbofan-types.tq?l=69&c=1 */\
  V(SMALL_ORDERED_HASH_MAP_TYPE) /* https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=25&c=1 */\
  V(SMALL_ORDERED_HASH_SET_TYPE) /* https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=16&c=1 */\
  V(SMALL_ORDERED_NAME_DICTIONARY_TYPE) /* https://crsrc.org/c/v8/src/objects/ordered-hash-table.tq?l=34&c=1 */\
  V(FUNCTION_TEMPLATE_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/templates.tq?l=59&c=1 */\
  V(OBJECT_TEMPLATE_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/templates.tq?l=119&c=1 */\
  V(DICTIONARY_TEMPLATE_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/templates.tq?l=125&c=1 */\
  V(MAP_TYPE) /* https://crsrc.org/c/v8/src/objects/map.tq?l=43&c=1 */\
  V(WASM_CUSTOM_MAP_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=321&c=1 */\
  V(SOURCE_TEXT_MODULE_TYPE) /* https://crsrc.org/c/v8/src/objects/source-text-module.tq?l=13&c=1 */\
  V(SYNTHETIC_MODULE_TYPE) /* https://crsrc.org/c/v8/src/objects/synthetic-module.tq?l=5&c=1 */\
  V(ALLOCATION_SITE_TYPE) /* https://crsrc.org/c/v8/src/objects/allocation-site.tq?l=5&c=1 */\
  V(ARRAY_LIST_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=42&c=1 */\
  V(CELL_TYPE) /* https://crsrc.org/c/v8/src/objects/cell.tq?l=5&c=1 */\
  V(CONTEXT_CELL_TYPE) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=23&c=1 */\
  V(COVERAGE_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/debug-objects.tq?l=67&c=1 */\
  V(CPP_GCMANAGED_BASE_TYPE) /* https://crsrc.org/c/v8/src/objects/managed.tq?l=5&c=1 */\
  V(CPP_HEAP_EXTERNAL_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/objects/cpp-heap-external-object.tq?l=5&c=1 */\
  V(DESCRIPTOR_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/descriptor-array.tq?l=27&c=1 */\
  V(DOUBLE_STRING_CACHE_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=289&c=1 */\
  V(EMBEDDER_DATA_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/embedder-data-array.tq?l=5&c=1 */\
  V(FEEDBACK_METADATA_TYPE) /* https://crsrc.org/c/v8/src/objects/feedback-vector.tq?l=48&c=1 */\
  V(FEEDBACK_VECTOR_TYPE) /* https://crsrc.org/c/v8/src/objects/feedback-vector.tq?l=34&c=1 */\
  V(FILLER_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=697&c=1 */\
  V(FREE_SPACE_TYPE) /* https://crsrc.org/c/v8/src/objects/free-space.tq?l=5&c=1 */\
  V(HASH_SEED_WRAPPER_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=290&c=1 */\
  V(HOLE_TYPE) /* https://crsrc.org/c/v8/src/objects/hole.tq?l=5&c=1 */\
  V(INTERCEPTOR_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/api-callbacks.tq?l=15&c=1 */\
  V(MEGA_DOM_HANDLER_TYPE) /* https://crsrc.org/c/v8/src/objects/megadom-handler.tq?l=7&c=1 */\
  V(ON_HEAP_BASIC_BLOCK_PROFILER_DATA_TYPE) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=199&c=1 */\
  V(PREPARSE_DATA_TYPE) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=7&c=1 */\
  V(PROPERTY_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/property-array.tq?l=5&c=1 */\
  V(PROPERTY_CELL_TYPE) /* https://crsrc.org/c/v8/src/objects/property-cell.tq?l=6&c=1 */\
  V(SCOPE_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/scope-info.tq?l=119&c=1 */\
  V(SCRIPT_CONTEXT_TABLE_TYPE) /* https://crsrc.org/c/v8/src/objects/contexts.tq?l=15&c=1 */\
  V(SHARED_FUNCTION_INFO_TYPE) /* https://crsrc.org/c/v8/src/objects/shared-function-info.tq?l=62&c=1 */\
  V(SORT_STATE_TYPE) /* https://crsrc.org/c/v8/third_party/v8/builtins/array-sort.tq?l=24&c=1 */\
  V(SWISS_NAME_DICTIONARY_TYPE) /* https://crsrc.org/c/v8/src/objects/swiss-name-dictionary.tq?l=9&c=1 */\
  V(UNINITIALIZED_HEAP_NUMBER_TYPE) /* https://crsrc.org/c/v8/src/objects/heap-number.tq?l=19&c=1 */\
  V(WASM_CONTINUATION_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=176&c=1 */\
  V(WASM_FAST_API_CALL_DATA_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=70&c=1 */\
  V(WASM_FUNC_REF_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=110&c=1 */\
  V(WASM_NULL_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=343&c=1 */\
  V(WASM_RESUME_DATA_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=161&c=1 */\
  V(WASM_STACK_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=183&c=1 */\
  V(WASM_STRING_VIEW_ITER_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=335&c=1 */\
  V(WASM_TYPE_INFO_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=291&c=1 */\
  V(WEAK_ARRAY_LIST_TYPE) /* https://crsrc.org/c/v8/src/objects/fixed-array.tq?l=49&c=1 */\
  V(WEAK_CELL_TYPE) /* https://crsrc.org/c/v8/src/objects/js-weak-refs.tq?l=23&c=1 */\
  V(WASM_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=308&c=1 */\
  V(WASM_STRUCT_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=304&c=1 */\
  V(JS_PROXY_TYPE) /* https://crsrc.org/c/v8/src/objects/js-proxy.tq?l=5&c=1 */\
  V(JS_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=15&c=1 */\
  V(JS_MODULE_NAMESPACE_TYPE) /* https://crsrc.org/c/v8/src/objects/module.tq?l=22&c=1 */\
  V(JS_DEFERRED_MODULE_NAMESPACE_TYPE) /* https://crsrc.org/c/v8/src/objects/module.tq?l=27&c=1 */\
  V(JS_GLOBAL_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=127&c=1 */\
  V(JS_GLOBAL_PROXY_TYPE) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=124&c=1 */\
  V(JS_SPECIAL_API_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=717&c=1 */\
  V(JS_PRIMITIVE_WRAPPER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=154&c=1 */\
  V(JS_API_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=703&c=1 */\
  V(JS_LAST_DUMMY_API_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=710&c=1 */\
  V(JS_DATA_VIEW_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=150&c=1 */\
  V(JS_RAB_GSAB_DATA_VIEW_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=153&c=1 */\
  V(JS_TYPED_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=120&c=1 */\
  V(JS_DETACHED_TYPED_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=132&c=1 */\
  V(JS_ARRAY_BUFFER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=18&c=1 */\
  V(JS_FUNCTION_WITHOUT_PROTOTYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/js-function.tq?l=57&c=1 */\
  V(JS_FUNCTION_WITH_PROTOTYPE_TYPE) /* https://crsrc.org/c/v8/src/objects/js-function.tq?l=61&c=1 */\
  V(BIGINT64_TYPED_ARRAY_CONSTRUCTOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=193&c=1 */\
  V(BIGUINT64_TYPED_ARRAY_CONSTRUCTOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=190&c=1 */\
  V(FLOAT16_TYPED_ARRAY_CONSTRUCTOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=178&c=1 */\
  V(FLOAT32_TYPED_ARRAY_CONSTRUCTOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=181&c=1 */\
  V(FLOAT64_TYPED_ARRAY_CONSTRUCTOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=184&c=1 */\
  V(INT16_TYPED_ARRAY_CONSTRUCTOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=169&c=1 */\
  V(INT32_TYPED_ARRAY_CONSTRUCTOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=175&c=1 */\
  V(INT8_TYPED_ARRAY_CONSTRUCTOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=163&c=1 */\
  V(UINT16_TYPED_ARRAY_CONSTRUCTOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=166&c=1 */\
  V(UINT32_TYPED_ARRAY_CONSTRUCTOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=172&c=1 */\
  V(UINT8_CLAMPED_TYPED_ARRAY_CONSTRUCTOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=187&c=1 */\
  V(UINT8_TYPED_ARRAY_CONSTRUCTOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array-buffer.tq?l=160&c=1 */\
  V(JS_ARRAY_CONSTRUCTOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array.tq?l=79&c=1 */\
  V(JS_PROMISE_CONSTRUCTOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-promise.tq?l=41&c=1 */\
  V(JS_REG_EXP_CONSTRUCTOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-regexp.tq?l=102&c=1 */\
  V(JS_CLASS_CONSTRUCTOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-function.tq?l=80&c=1 */\
  V(JS_BOUND_FUNCTION_TYPE) /* https://crsrc.org/c/v8/src/objects/js-function.tq?l=9&c=1 */\
  V(JS_WRAPPED_FUNCTION_TYPE) /* https://crsrc.org/c/v8/src/objects/js-function.tq?l=22&c=1 */\
  V(JS_ARRAY_ITERATOR_PROTOTYPE_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=252&c=1 */\
  V(JS_ITERATOR_PROTOTYPE_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=249&c=1 */\
  V(JS_MAP_ITERATOR_PROTOTYPE_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=255&c=1 */\
  V(JS_OBJECT_PROTOTYPE_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=234&c=1 */\
  V(JS_PROMISE_PROTOTYPE_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=240&c=1 */\
  V(JS_REG_EXP_PROTOTYPE_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=237&c=1 */\
  V(JS_SET_ITERATOR_PROTOTYPE_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=258&c=1 */\
  V(JS_SET_PROTOTYPE_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=246&c=1 */\
  V(JS_STRING_ITERATOR_PROTOTYPE_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=261&c=1 */\
  V(JS_TYPED_ARRAY_PROTOTYPE_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=243&c=1 */\
  V(JS_ITERATOR_CONCAT_HELPER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=55&c=1 */\
  V(JS_ITERATOR_DROP_HELPER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=43&c=1 */\
  V(JS_ITERATOR_FILTER_HELPER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=32&c=1 */\
  V(JS_ITERATOR_FLAT_MAP_HELPER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=48&c=1 */\
  V(JS_ITERATOR_MAP_HELPER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=26&c=1 */\
  V(JS_ITERATOR_TAKE_HELPER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=38&c=1 */\
  V(JS_ITERATOR_ZIP_HELPER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=67&c=1 */\
  V(JS_ITERATOR_ZIP_KEYED_HELPER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-iterator-helpers.tq?l=75&c=1 */\
  V(JS_MAP_KEY_ITERATOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-collection.tq?l=32&c=1 */\
  V(JS_MAP_KEY_VALUE_ITERATOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-collection.tq?l=34&c=1 */\
  V(JS_MAP_VALUE_ITERATOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-collection.tq?l=36&c=1 */\
  V(JS_SET_KEY_VALUE_ITERATOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-collection.tq?l=42&c=1 */\
  V(JS_SET_VALUE_ITERATOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-collection.tq?l=44&c=1 */\
  V(JS_DISPOSABLE_STACK_BASE_TYPE) /* https://crsrc.org/c/v8/src/objects/js-disposable-stack.tq?l=25&c=1 */\
  V(JS_ASYNC_DISPOSABLE_STACK_TYPE) /* https://crsrc.org/c/v8/src/objects/js-disposable-stack.tq?l=41&c=1 */\
  V(JS_SYNC_DISPOSABLE_STACK_TYPE) /* https://crsrc.org/c/v8/src/objects/js-disposable-stack.tq?l=38&c=1 */\
  V(JS_GENERATOR_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-generator.tq?l=15&c=1 */\
  V(JS_ASYNC_FUNCTION_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-generator.tq?l=41&c=1 */\
  V(JS_ASYNC_GENERATOR_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-generator.tq?l=50&c=1 */\
  V(JS_SHARED_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/js-shared-array.tq?l=5&c=1 */\
  V(JS_SHARED_STRUCT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-struct.tq?l=12&c=1 */\
  V(JS_MAP_TYPE) /* https://crsrc.org/c/v8/src/objects/js-collection.tq?l=15&c=1 */\
  V(JS_SET_TYPE) /* https://crsrc.org/c/v8/src/objects/js-collection.tq?l=13&c=1 */\
  V(JS_OBJECT_WITH_EMBEDDER_SLOTS_TYPE) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=53&c=1 */\
  V(JS_PROMISE_TYPE) /* https://crsrc.org/c/v8/src/objects/js-promise.tq?l=14&c=1 */\
  V(JS_WEAK_MAP_TYPE) /* https://crsrc.org/c/v8/src/objects/js-collection.tq?l=26&c=1 */\
  V(JS_WEAK_SET_TYPE) /* https://crsrc.org/c/v8/src/objects/js-collection.tq?l=24&c=1 */\
  V(JS_ARGUMENTS_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/objects/arguments.tq?l=5&c=1 */\
  V(JS_ARRAY_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array.tq?l=62&c=1 */\
  V(JS_ARRAY_ITERATOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-array.tq?l=7&c=1 */\
  V(JS_ASYNC_FROM_SYNC_ITERATOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=200&c=1 */\
  V(JS_COLLATOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-collator.tq?l=7&c=1 */\
  V(JS_CONTEXT_EXTENSION_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=720&c=1 */\
  V(JS_DATE_TYPE) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=179&c=1 */\
  V(JS_DATE_TIME_FORMAT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-date-time-format.tq?l=20&c=1 */\
  V(JS_DISPLAY_NAMES_TYPE) /* https://crsrc.org/c/v8/src/objects/js-display-names.tq?l=19&c=1 */\
  V(JS_DURATION_FORMAT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-duration-format.tq?l=45&c=1 */\
  V(JS_ERROR_TYPE) /* https://crsrc.org/c/v8/src/builtins/base.tq?l=722&c=1 */\
  V(JS_EXTERNAL_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=45&c=1 */\
  V(JS_FINALIZATION_REGISTRY_TYPE) /* https://crsrc.org/c/v8/src/objects/js-weak-refs.tq?l=10&c=1 */\
  V(JS_LIST_FORMAT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-list-format.tq?l=15&c=1 */\
  V(JS_LOCALE_TYPE) /* https://crsrc.org/c/v8/src/objects/js-locale.tq?l=7&c=1 */\
  V(JS_MESSAGE_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=159&c=1 */\
  V(JS_NUMBER_FORMAT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-number-format.tq?l=7&c=1 */\
  V(JS_PLURAL_RULES_TYPE) /* https://crsrc.org/c/v8/src/objects/js-plural-rules.tq?l=13&c=1 */\
  V(JS_RAW_JSON_TYPE) /* https://crsrc.org/c/v8/src/objects/js-raw-json.tq?l=7&c=1 */\
  V(JS_REG_EXP_TYPE) /* https://crsrc.org/c/v8/src/objects/js-regexp.tq?l=65&c=1 */\
  V(JS_REG_EXP_STRING_ITERATOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-regexp-string-iterator.tq?l=12&c=1 */\
  V(JS_RELATIVE_TIME_FORMAT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-relative-time-format.tq?l=14&c=1 */\
  V(JS_SEGMENT_ITERATOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-segment-iterator.tq?l=12&c=1 */\
  V(JS_SEGMENTER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-segmenter.tq?l=14&c=1 */\
  V(JS_SEGMENTS_TYPE) /* https://crsrc.org/c/v8/src/objects/js-segments.tq?l=12&c=1 */\
  V(JS_SHADOW_REALM_TYPE) /* https://crsrc.org/c/v8/src/objects/js-shadow-realm.tq?l=5&c=1 */\
  V(JS_STRING_ITERATOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=208&c=1 */\
  V(JS_TEMPORAL_DURATION_TYPE) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=7&c=1 */\
  V(JS_TEMPORAL_INSTANT_TYPE) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=12&c=1 */\
  V(JS_TEMPORAL_PLAIN_DATE_TYPE) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=22&c=1 */\
  V(JS_TEMPORAL_PLAIN_DATE_TIME_TYPE) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=17&c=1 */\
  V(JS_TEMPORAL_PLAIN_MONTH_DAY_TYPE) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=27&c=1 */\
  V(JS_TEMPORAL_PLAIN_TIME_TYPE) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=32&c=1 */\
  V(JS_TEMPORAL_PLAIN_YEAR_MONTH_TYPE) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=37&c=1 */\
  V(JS_TEMPORAL_ZONED_DATE_TIME_TYPE) /* https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=42&c=1 */\
  V(JS_V8_BREAK_ITERATOR_TYPE) /* https://crsrc.org/c/v8/src/objects/js-break-iterator.tq?l=7&c=1 */\
  V(JS_VALID_ITERATOR_WRAPPER_TYPE) /* https://crsrc.org/c/v8/src/objects/js-objects.tq?l=218&c=1 */\
  V(JS_WEAK_REF_TYPE) /* https://crsrc.org/c/v8/src/objects/js-weak-refs.tq?l=45&c=1 */\
  V(WASM_CUSTOM_MAP_WRAPPER_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=330&c=1 */\
  V(WASM_EXCEPTION_PACKAGE_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=196&c=1 */\
  V(WASM_GLOBAL_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=261&c=1 */\
  V(WASM_INSTANCE_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=39&c=1 */\
  V(WASM_MEMORY_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=240&c=1 */\
  V(WASM_MODULE_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=198&c=1 */\
  V(WASM_SUSPENDING_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=351&c=1 */\
  V(WASM_TABLE_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=207&c=1 */\
  V(WASM_TAG_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/wasm/wasm-objects.tq?l=282&c=1 */\
  V(WASM_VALUE_OBJECT_TYPE) /* https://crsrc.org/c/v8/src/debug/debug-wasm-objects.tq?l=7&c=1 */\

#endif  // V8_GEN_TORQUE_GENERATED_INSTANCE_TYPES_H_
