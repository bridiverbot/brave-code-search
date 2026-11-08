#ifndef SRC_TRACE_PROCESSOR_TABLES_ANDROID_TABLES_FWD_H_
#define SRC_TRACE_PROCESSOR_TABLES_ANDROID_TABLES_FWD_H_

#include <cstdint>
#include <tuple>

#include "src/trace_processor/tables/macros_internal.h"  // IWYU pragma: export

#include "src/trace_processor/tables/slice_tables_fwd.h"  // IWYU pragma: export
#include "src/trace_processor/tables/track_tables_fwd.h"  // IWYU pragma: export

namespace perfetto::trace_processor::tables {

struct AndroidAflagsTable_Id : BaseId {
  AndroidAflagsTable_Id() = default;
  explicit constexpr AndroidAflagsTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const AndroidAflagsTable_Id& other) const {
    return value == other.value;
  }
};

struct AndroidCpuPerUidTrackTable_Id : BaseId {
  AndroidCpuPerUidTrackTable_Id() = default;
  explicit constexpr AndroidCpuPerUidTrackTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const AndroidCpuPerUidTrackTable_Id& other) const {
    return value == other.value;
  }
};

struct AndroidDumpstateTable_Id : BaseId {
  AndroidDumpstateTable_Id() = default;
  explicit constexpr AndroidDumpstateTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const AndroidDumpstateTable_Id& other) const {
    return value == other.value;
  }
};

struct AndroidGameInterventionListTable_Id : BaseId {
  AndroidGameInterventionListTable_Id() = default;
  explicit constexpr AndroidGameInterventionListTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const AndroidGameInterventionListTable_Id& other) const {
    return value == other.value;
  }
};

struct AndroidInputEventDispatchTable_Id : BaseId {
  AndroidInputEventDispatchTable_Id() = default;
  explicit constexpr AndroidInputEventDispatchTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const AndroidInputEventDispatchTable_Id& other) const {
    return value == other.value;
  }
};

struct AndroidJobSchedulerPendingReasonsTrackEventTable_Id : BaseId {
  AndroidJobSchedulerPendingReasonsTrackEventTable_Id() = default;
  explicit constexpr AndroidJobSchedulerPendingReasonsTrackEventTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const AndroidJobSchedulerPendingReasonsTrackEventTable_Id& other) const {
    return value == other.value;
  }
};

struct AndroidJobSchedulerTrackEventTable_Id : BaseId {
  AndroidJobSchedulerTrackEventTable_Id() = default;
  explicit constexpr AndroidJobSchedulerTrackEventTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const AndroidJobSchedulerTrackEventTable_Id& other) const {
    return value == other.value;
  }
};

struct AndroidKeyEventsTable_Id : BaseId {
  AndroidKeyEventsTable_Id() = default;
  explicit constexpr AndroidKeyEventsTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const AndroidKeyEventsTable_Id& other) const {
    return value == other.value;
  }
};

struct AndroidMotionEventsTable_Id : BaseId {
  AndroidMotionEventsTable_Id() = default;
  explicit constexpr AndroidMotionEventsTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const AndroidMotionEventsTable_Id& other) const {
    return value == other.value;
  }
};

struct AndroidUserListTable_Id : BaseId {
  AndroidUserListTable_Id() = default;
  explicit constexpr AndroidUserListTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const AndroidUserListTable_Id& other) const {
    return value == other.value;
  }
};

class AndroidAflagsTable;
class AndroidCpuPerUidTrackTable;
class AndroidDumpstateTable;
class AndroidGameInterventionListTable;
class AndroidInputEventDispatchTable;
class AndroidJobSchedulerPendingReasonsTrackEventTable;
class AndroidJobSchedulerTrackEventTable;
class AndroidKeyEventsTable;
class AndroidMotionEventsTable;
class AndroidUserListTable;

// Tuple of all table types in this header
using ANDROID_TABLES_FWD_TABLES = std::tuple<AndroidAflagsTable, AndroidCpuPerUidTrackTable, AndroidDumpstateTable, AndroidGameInterventionListTable, AndroidInputEventDispatchTable, AndroidJobSchedulerPendingReasonsTrackEventTable, AndroidJobSchedulerTrackEventTable, AndroidKeyEventsTable, AndroidMotionEventsTable, AndroidUserListTable>;

}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_TABLES_ANDROID_TABLES_FWD_H_

