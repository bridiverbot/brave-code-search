#ifndef SRC_TRACE_PROCESSOR_PLUGINS_DEVELOPER_FUNCTIONS_TABLES_FWD_H_
#define SRC_TRACE_PROCESSOR_PLUGINS_DEVELOPER_FUNCTIONS_TABLES_FWD_H_

#include <cstdint>
#include <tuple>

#include "src/trace_processor/tables/macros_internal.h"  // IWYU pragma: export



namespace perfetto::trace_processor::tables {

struct DataframeQueryPlanDecoderTable_Id : BaseId {
  DataframeQueryPlanDecoderTable_Id() = default;
  explicit constexpr DataframeQueryPlanDecoderTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const DataframeQueryPlanDecoderTable_Id& other) const {
    return value == other.value;
  }
};

class DataframeQueryPlanDecoderTable;

// Tuple of all table types in this header
using SRC_TRACE_PROCESSOR_PLUGINS_DEVELOPER_FUNCTIONS_TABLES_FWD_TABLES = std::tuple<DataframeQueryPlanDecoderTable>;

}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_PLUGINS_DEVELOPER_FUNCTIONS_TABLES_FWD_H_

