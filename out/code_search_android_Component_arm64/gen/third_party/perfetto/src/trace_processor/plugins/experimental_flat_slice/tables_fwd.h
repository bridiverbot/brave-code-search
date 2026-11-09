#ifndef SRC_TRACE_PROCESSOR_PLUGINS_EXPERIMENTAL_FLAT_SLICE_TABLES_FWD_H_
#define SRC_TRACE_PROCESSOR_PLUGINS_EXPERIMENTAL_FLAT_SLICE_TABLES_FWD_H_

#include <cstdint>
#include <tuple>

#include "src/trace_processor/tables/macros_internal.h"  // IWYU pragma: export

#include "src/trace_processor/tables/slice_tables_fwd.h"  // IWYU pragma: export
#include "src/trace_processor/tables/track_tables_fwd.h"  // IWYU pragma: export

namespace perfetto::trace_processor::tables {

struct ExperimentalFlatSliceTable_Id : BaseId {
  ExperimentalFlatSliceTable_Id() = default;
  explicit constexpr ExperimentalFlatSliceTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const ExperimentalFlatSliceTable_Id& other) const {
    return value == other.value;
  }
};

class ExperimentalFlatSliceTable;

// Tuple of all table types in this header
using SRC_TRACE_PROCESSOR_PLUGINS_EXPERIMENTAL_FLAT_SLICE_TABLES_FWD_TABLES = std::tuple<ExperimentalFlatSliceTable>;

}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_PLUGINS_EXPERIMENTAL_FLAT_SLICE_TABLES_FWD_H_

