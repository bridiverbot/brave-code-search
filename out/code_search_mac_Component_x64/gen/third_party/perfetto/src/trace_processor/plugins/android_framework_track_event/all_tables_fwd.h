#ifndef SRC_TRACE_PROCESSOR_PLUGINS_ANDROID_FRAMEWORK_TRACK_EVENT_ALL_TABLES_FWD_H_
#define SRC_TRACE_PROCESSOR_PLUGINS_ANDROID_FRAMEWORK_TRACK_EVENT_ALL_TABLES_FWD_H_

#include <cstddef>
#include <variant>

#include "perfetto/ext/base/variant.h"

#include "src/trace_processor/plugins/android_framework_track_event/tables_fwd.h"  // IWYU pragma: export

namespace perfetto::trace_processor::tables {

// Variant of all table types (use base::variant_index<AllTables, T>() to get index)
using AllTables = std::variant<AndroidTrackEventProcessTable>;

// Count of all tables
inline constexpr size_t kTableCount = std::variant_size_v<AllTables>;

}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_PLUGINS_ANDROID_FRAMEWORK_TRACK_EVENT_ALL_TABLES_FWD_H_
