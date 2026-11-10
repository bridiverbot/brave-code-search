#ifndef SRC_TRACE_PROCESSOR_PLUGINS_EXPERIMENTAL_SLICE_LAYOUT_TABLES_FWD_H_
#define SRC_TRACE_PROCESSOR_PLUGINS_EXPERIMENTAL_SLICE_LAYOUT_TABLES_FWD_H_

#include <cstdint>
#include <tuple>

#include "src/trace_processor/tables/macros_internal.h"  // IWYU pragma: export

#include "src/trace_processor/tables/slice_tables_fwd.h"  // IWYU pragma: export

namespace perfetto::trace_processor::tables {

struct ExperimentalSliceLayoutTable_Id : BaseId {
  ExperimentalSliceLayoutTable_Id() = default;
  explicit constexpr ExperimentalSliceLayoutTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const ExperimentalSliceLayoutTable_Id& other) const {
    return value == other.value;
  }
};

class ExperimentalSliceLayoutTable;

// Tuple of all table types in this header
using SRC_TRACE_PROCESSOR_PLUGINS_EXPERIMENTAL_SLICE_LAYOUT_TABLES_FWD_TABLES = std::tuple<ExperimentalSliceLayoutTable>;

}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_PLUGINS_EXPERIMENTAL_SLICE_LAYOUT_TABLES_FWD_H_

