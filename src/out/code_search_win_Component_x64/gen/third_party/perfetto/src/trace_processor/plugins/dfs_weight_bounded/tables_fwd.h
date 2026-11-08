#ifndef SRC_TRACE_PROCESSOR_PLUGINS_DFS_WEIGHT_BOUNDED_TABLES_FWD_H_
#define SRC_TRACE_PROCESSOR_PLUGINS_DFS_WEIGHT_BOUNDED_TABLES_FWD_H_

#include <cstdint>
#include <tuple>

#include "src/trace_processor/tables/macros_internal.h"  // IWYU pragma: export



namespace perfetto::trace_processor::tables {

struct DfsWeightBoundedTable_Id : BaseId {
  DfsWeightBoundedTable_Id() = default;
  explicit constexpr DfsWeightBoundedTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const DfsWeightBoundedTable_Id& other) const {
    return value == other.value;
  }
};

class DfsWeightBoundedTable;

// Tuple of all table types in this header
using SRC_TRACE_PROCESSOR_PLUGINS_DFS_WEIGHT_BOUNDED_TABLES_FWD_TABLES = std::tuple<DfsWeightBoundedTable>;

}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_PLUGINS_DFS_WEIGHT_BOUNDED_TABLES_FWD_H_

