#ifndef SRC_TRACE_PROCESSOR_PLUGINS_GRAPH_TRAVERSAL_TABLES_FWD_H_
#define SRC_TRACE_PROCESSOR_PLUGINS_GRAPH_TRAVERSAL_TABLES_FWD_H_

#include <cstdint>
#include <tuple>

#include "src/trace_processor/tables/macros_internal.h"  // IWYU pragma: export



namespace perfetto::trace_processor::tables {

struct TreeTable_Id : BaseId {
  TreeTable_Id() = default;
  explicit constexpr TreeTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const TreeTable_Id& other) const {
    return value == other.value;
  }
};

class TreeTable;

// Tuple of all table types in this header
using SRC_TRACE_PROCESSOR_PLUGINS_GRAPH_TRAVERSAL_TABLES_FWD_TABLES = std::tuple<TreeTable>;

}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_PLUGINS_GRAPH_TRAVERSAL_TABLES_FWD_H_

