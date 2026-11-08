#ifndef SRC_TRACE_PROCESSOR_TABLES_TRACK_TABLES_FWD_H_
#define SRC_TRACE_PROCESSOR_TABLES_TRACK_TABLES_FWD_H_

#include <cstdint>
#include <tuple>

#include "src/trace_processor/tables/macros_internal.h"  // IWYU pragma: export

#include "src/trace_processor/tables/metadata_tables_fwd.h"  // IWYU pragma: export

namespace perfetto::trace_processor::tables {

struct TrackTable_Id : BaseId {
  TrackTable_Id() = default;
  explicit constexpr TrackTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const TrackTable_Id& other) const {
    return value == other.value;
  }
};

struct TrackDimensionTable_Id : BaseId {
  TrackDimensionTable_Id() = default;
  explicit constexpr TrackDimensionTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const TrackDimensionTable_Id& other) const {
    return value == other.value;
  }
};

class TrackTable;
class TrackDimensionTable;

// Tuple of all table types in this header
using TRACK_TABLES_FWD_TABLES = std::tuple<TrackTable, TrackDimensionTable>;

}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_TABLES_TRACK_TABLES_FWD_H_

