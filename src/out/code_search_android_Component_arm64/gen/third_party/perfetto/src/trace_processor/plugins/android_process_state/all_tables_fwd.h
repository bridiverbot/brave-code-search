#ifndef SRC_TRACE_PROCESSOR_PLUGINS_ANDROID_PROCESS_STATE_ALL_TABLES_FWD_H_
#define SRC_TRACE_PROCESSOR_PLUGINS_ANDROID_PROCESS_STATE_ALL_TABLES_FWD_H_

#include <cstddef>
#include <variant>

#include "perfetto/ext/base/variant.h"

#include "src/trace_processor/plugins/android_process_state/tables_fwd.h"  // IWYU pragma: export

namespace perfetto::trace_processor::tables {

// Variant of all table types (use base::variant_index<AllTables, T>() to get index)
using AllTables = std::variant<AndroidProcessStateTable, AndroidFreezerStateTable>;

// Count of all tables
inline constexpr size_t kTableCount = std::variant_size_v<AllTables>;

}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_PLUGINS_ANDROID_PROCESS_STATE_ALL_TABLES_FWD_H_
