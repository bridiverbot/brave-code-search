#ifndef SRC_TRACE_PROCESSOR_PLUGINS_TABLE_INFO_TABLES_FWD_H_
#define SRC_TRACE_PROCESSOR_PLUGINS_TABLE_INFO_TABLES_FWD_H_

#include <cstdint>
#include <tuple>

#include "src/trace_processor/tables/macros_internal.h"  // IWYU pragma: export



namespace perfetto::trace_processor::tables {

struct PerfettoTableInfoTable_Id : BaseId {
  PerfettoTableInfoTable_Id() = default;
  explicit constexpr PerfettoTableInfoTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const PerfettoTableInfoTable_Id& other) const {
    return value == other.value;
  }
};

class PerfettoTableInfoTable;

// Tuple of all table types in this header
using SRC_TRACE_PROCESSOR_PLUGINS_TABLE_INFO_TABLES_FWD_TABLES = std::tuple<PerfettoTableInfoTable>;

}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_PLUGINS_TABLE_INFO_TABLES_FWD_H_

