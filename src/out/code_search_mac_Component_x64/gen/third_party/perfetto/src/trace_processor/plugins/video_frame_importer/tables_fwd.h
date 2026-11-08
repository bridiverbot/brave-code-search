#ifndef SRC_TRACE_PROCESSOR_PLUGINS_VIDEO_FRAME_IMPORTER_TABLES_FWD_H_
#define SRC_TRACE_PROCESSOR_PLUGINS_VIDEO_FRAME_IMPORTER_TABLES_FWD_H_

#include <cstdint>
#include <tuple>

#include "src/trace_processor/tables/macros_internal.h"  // IWYU pragma: export



namespace perfetto::trace_processor::tables {

struct AndroidVideoFramesTable_Id : BaseId {
  AndroidVideoFramesTable_Id() = default;
  explicit constexpr AndroidVideoFramesTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const AndroidVideoFramesTable_Id& other) const {
    return value == other.value;
  }
};

class AndroidVideoFramesTable;

// Tuple of all table types in this header
using SRC_TRACE_PROCESSOR_PLUGINS_VIDEO_FRAME_IMPORTER_TABLES_FWD_TABLES = std::tuple<AndroidVideoFramesTable>;

}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_PLUGINS_VIDEO_FRAME_IMPORTER_TABLES_FWD_H_

