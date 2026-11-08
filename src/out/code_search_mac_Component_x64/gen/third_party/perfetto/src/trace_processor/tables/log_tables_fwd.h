#ifndef SRC_TRACE_PROCESSOR_TABLES_LOG_TABLES_FWD_H_
#define SRC_TRACE_PROCESSOR_TABLES_LOG_TABLES_FWD_H_

#include <cstdint>
#include <tuple>

#include "src/trace_processor/tables/macros_internal.h"  // IWYU pragma: export

#include "src/trace_processor/tables/metadata_tables_fwd.h"  // IWYU pragma: export

namespace perfetto::trace_processor::tables {

struct LogTable_Id : BaseId {
  LogTable_Id() = default;
  explicit constexpr LogTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const LogTable_Id& other) const {
    return value == other.value;
  }
};

class LogTable;

// Tuple of all table types in this header
using LOG_TABLES_FWD_TABLES = std::tuple<LogTable>;

}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_TABLES_LOG_TABLES_FWD_H_

