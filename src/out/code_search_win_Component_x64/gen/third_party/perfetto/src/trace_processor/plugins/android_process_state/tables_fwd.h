#ifndef SRC_TRACE_PROCESSOR_PLUGINS_ANDROID_PROCESS_STATE_TABLES_FWD_H_
#define SRC_TRACE_PROCESSOR_PLUGINS_ANDROID_PROCESS_STATE_TABLES_FWD_H_

#include <cstdint>
#include <tuple>

#include "src/trace_processor/tables/macros_internal.h"  // IWYU pragma: export

#include "src/trace_processor/tables/metadata_tables_fwd.h"  // IWYU pragma: export

namespace perfetto::trace_processor::tables {

struct AndroidProcessStateTable_Id : BaseId {
  AndroidProcessStateTable_Id() = default;
  explicit constexpr AndroidProcessStateTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const AndroidProcessStateTable_Id& other) const {
    return value == other.value;
  }
};

struct AndroidFreezerStateTable_Id : BaseId {
  AndroidFreezerStateTable_Id() = default;
  explicit constexpr AndroidFreezerStateTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const AndroidFreezerStateTable_Id& other) const {
    return value == other.value;
  }
};

class AndroidProcessStateTable;
class AndroidFreezerStateTable;

// Tuple of all table types in this header
using SRC_TRACE_PROCESSOR_PLUGINS_ANDROID_PROCESS_STATE_TABLES_FWD_TABLES = std::tuple<AndroidProcessStateTable, AndroidFreezerStateTable>;

}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_PLUGINS_ANDROID_PROCESS_STATE_TABLES_FWD_H_

