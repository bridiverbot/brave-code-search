#ifndef SRC_TRACE_PROCESSOR_PLUGINS_DOMINATOR_TREE_TABLES_FWD_H_
#define SRC_TRACE_PROCESSOR_PLUGINS_DOMINATOR_TREE_TABLES_FWD_H_

#include <cstdint>
#include <tuple>

#include "src/trace_processor/tables/macros_internal.h"  // IWYU pragma: export



namespace perfetto::trace_processor::tables {

struct DominatorTreeTable_Id : BaseId {
  DominatorTreeTable_Id() = default;
  explicit constexpr DominatorTreeTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const DominatorTreeTable_Id& other) const {
    return value == other.value;
  }
};

class DominatorTreeTable;

// Tuple of all table types in this header
using SRC_TRACE_PROCESSOR_PLUGINS_DOMINATOR_TREE_TABLES_FWD_TABLES = std::tuple<DominatorTreeTable>;

}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_PLUGINS_DOMINATOR_TREE_TABLES_FWD_H_

