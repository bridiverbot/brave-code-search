#ifndef SRC_TRACE_PROCESSOR_PLUGINS_ANCESTOR_TABLES_FWD_H_
#define SRC_TRACE_PROCESSOR_PLUGINS_ANCESTOR_TABLES_FWD_H_

#include <cstdint>
#include <tuple>

#include "src/trace_processor/tables/macros_internal.h"  // IWYU pragma: export

#include "src/trace_processor/tables/profiler_tables_fwd.h"  // IWYU pragma: export
#include "src/trace_processor/tables/slice_tables_fwd.h"  // IWYU pragma: export
#include "src/trace_processor/tables/track_tables_fwd.h"  // IWYU pragma: export

namespace perfetto::trace_processor::tables {

struct AncestorStackProfileCallsiteTable_Id : BaseId {
  AncestorStackProfileCallsiteTable_Id() = default;
  explicit constexpr AncestorStackProfileCallsiteTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const AncestorStackProfileCallsiteTable_Id& other) const {
    return value == other.value;
  }
};

struct SliceSubsetTable_Id : BaseId {
  SliceSubsetTable_Id() = default;
  explicit constexpr SliceSubsetTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const SliceSubsetTable_Id& other) const {
    return value == other.value;
  }
};

class AncestorStackProfileCallsiteTable;
class SliceSubsetTable;

// Tuple of all table types in this header
using SRC_TRACE_PROCESSOR_PLUGINS_ANCESTOR_TABLES_FWD_TABLES = std::tuple<AncestorStackProfileCallsiteTable, SliceSubsetTable>;

}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_PLUGINS_ANCESTOR_TABLES_FWD_H_

