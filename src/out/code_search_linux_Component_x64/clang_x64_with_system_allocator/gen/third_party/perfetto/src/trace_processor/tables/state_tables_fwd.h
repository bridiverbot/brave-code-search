#ifndef SRC_TRACE_PROCESSOR_TABLES_STATE_TABLES_FWD_H_
#define SRC_TRACE_PROCESSOR_TABLES_STATE_TABLES_FWD_H_

#include <cstdint>
#include <tuple>

#include "src/trace_processor/tables/macros_internal.h"  // IWYU pragma: export

#include "src/trace_processor/tables/track_tables_fwd.h"  // IWYU pragma: export

namespace perfetto::trace_processor::tables {

struct StateTable_Id : BaseId {
  StateTable_Id() = default;
  explicit constexpr StateTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const StateTable_Id& other) const {
    return value == other.value;
  }
};

class StateTable;

// Tuple of all table types in this header
using STATE_TABLES_FWD_TABLES = std::tuple<StateTable>;

}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_TABLES_STATE_TABLES_FWD_H_

