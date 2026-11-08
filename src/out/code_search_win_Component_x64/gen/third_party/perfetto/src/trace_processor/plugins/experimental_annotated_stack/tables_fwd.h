#ifndef SRC_TRACE_PROCESSOR_PLUGINS_EXPERIMENTAL_ANNOTATED_STACK_TABLES_FWD_H_
#define SRC_TRACE_PROCESSOR_PLUGINS_EXPERIMENTAL_ANNOTATED_STACK_TABLES_FWD_H_

#include <cstdint>
#include <tuple>

#include "src/trace_processor/tables/macros_internal.h"  // IWYU pragma: export

#include "src/trace_processor/tables/profiler_tables_fwd.h"  // IWYU pragma: export

namespace perfetto::trace_processor::tables {

struct ExperimentalAnnotatedCallstackTable_Id : BaseId {
  ExperimentalAnnotatedCallstackTable_Id() = default;
  explicit constexpr ExperimentalAnnotatedCallstackTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const ExperimentalAnnotatedCallstackTable_Id& other) const {
    return value == other.value;
  }
};

class ExperimentalAnnotatedCallstackTable;

// Tuple of all table types in this header
using SRC_TRACE_PROCESSOR_PLUGINS_EXPERIMENTAL_ANNOTATED_STACK_TABLES_FWD_TABLES = std::tuple<ExperimentalAnnotatedCallstackTable>;

}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_PLUGINS_EXPERIMENTAL_ANNOTATED_STACK_TABLES_FWD_H_

