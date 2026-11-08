#ifndef SRC_TRACE_PROCESSOR_PLUGINS_STDLIB_DOCS_TABLES_FWD_H_
#define SRC_TRACE_PROCESSOR_PLUGINS_STDLIB_DOCS_TABLES_FWD_H_

#include <cstdint>
#include <tuple>

#include "src/trace_processor/tables/macros_internal.h"  // IWYU pragma: export



namespace perfetto::trace_processor::tables {

struct StdlibDocsObjectsTable_Id : BaseId {
  StdlibDocsObjectsTable_Id() = default;
  explicit constexpr StdlibDocsObjectsTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const StdlibDocsObjectsTable_Id& other) const {
    return value == other.value;
  }
};

class StdlibDocsObjectsTable;

// Tuple of all table types in this header
using SRC_TRACE_PROCESSOR_PLUGINS_STDLIB_DOCS_TABLES_FWD_TABLES = std::tuple<StdlibDocsObjectsTable>;

}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_PLUGINS_STDLIB_DOCS_TABLES_FWD_H_

