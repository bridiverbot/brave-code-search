#ifndef SRC_TRACE_PROCESSOR_PLUGINS_ANDROID_FRAMEWORK_TRACK_EVENT_TABLES_FWD_H_
#define SRC_TRACE_PROCESSOR_PLUGINS_ANDROID_FRAMEWORK_TRACK_EVENT_TABLES_FWD_H_

#include <cstdint>
#include <tuple>

#include "src/trace_processor/tables/macros_internal.h"  // IWYU pragma: export

#include "src/trace_processor/tables/metadata_tables_fwd.h"  // IWYU pragma: export

namespace perfetto::trace_processor::tables {

struct AndroidTrackEventProcessTable_Id : BaseId {
  AndroidTrackEventProcessTable_Id() = default;
  explicit constexpr AndroidTrackEventProcessTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const AndroidTrackEventProcessTable_Id& other) const {
    return value == other.value;
  }
};

class AndroidTrackEventProcessTable;

// Tuple of all table types in this header
using SRC_TRACE_PROCESSOR_PLUGINS_ANDROID_FRAMEWORK_TRACK_EVENT_TABLES_FWD_TABLES = std::tuple<AndroidTrackEventProcessTable>;

}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_PLUGINS_ANDROID_FRAMEWORK_TRACK_EVENT_TABLES_FWD_H_

