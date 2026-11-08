#ifndef SRC_TRACE_PROCESSOR_TABLES_PROFILER_TABLES_FWD_H_
#define SRC_TRACE_PROCESSOR_TABLES_PROFILER_TABLES_FWD_H_

#include <cstdint>
#include <tuple>

#include "src/trace_processor/tables/macros_internal.h"  // IWYU pragma: export

#include "src/trace_processor/tables/counter_tables_fwd.h"  // IWYU pragma: export
#include "src/trace_processor/tables/track_tables_fwd.h"  // IWYU pragma: export

namespace perfetto::trace_processor::tables {

struct StackProfileMappingTable_Id : BaseId {
  StackProfileMappingTable_Id() = default;
  explicit constexpr StackProfileMappingTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const StackProfileMappingTable_Id& other) const {
    return value == other.value;
  }
};

struct StackProfileFrameTable_Id : BaseId {
  StackProfileFrameTable_Id() = default;
  explicit constexpr StackProfileFrameTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const StackProfileFrameTable_Id& other) const {
    return value == other.value;
  }
};

struct AggregateProfileTable_Id : BaseId {
  AggregateProfileTable_Id() = default;
  explicit constexpr AggregateProfileTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const AggregateProfileTable_Id& other) const {
    return value == other.value;
  }
};

struct StackProfileCallsiteTable_Id : BaseId {
  StackProfileCallsiteTable_Id() = default;
  explicit constexpr StackProfileCallsiteTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const StackProfileCallsiteTable_Id& other) const {
    return value == other.value;
  }
};

struct AggregateSampleTable_Id : BaseId {
  AggregateSampleTable_Id() = default;
  explicit constexpr AggregateSampleTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const AggregateSampleTable_Id& other) const {
    return value == other.value;
  }
};

struct ProfilerAsyncContextTable_Id : BaseId {
  ProfilerAsyncContextTable_Id() = default;
  explicit constexpr ProfilerAsyncContextTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const ProfilerAsyncContextTable_Id& other) const {
    return value == other.value;
  }
};

struct ProfilerTaskContextTable_Id : BaseId {
  ProfilerTaskContextTable_Id() = default;
  explicit constexpr ProfilerTaskContextTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const ProfilerTaskContextTable_Id& other) const {
    return value == other.value;
  }
};

struct ProfilerExecutionContextTable_Id : BaseId {
  ProfilerExecutionContextTable_Id() = default;
  explicit constexpr ProfilerExecutionContextTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const ProfilerExecutionContextTable_Id& other) const {
    return value == other.value;
  }
};

struct ProfilerSessionTable_Id : BaseId {
  ProfilerSessionTable_Id() = default;
  explicit constexpr ProfilerSessionTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const ProfilerSessionTable_Id& other) const {
    return value == other.value;
  }
};

struct ProfilerSampleTable_Id : BaseId {
  ProfilerSampleTable_Id() = default;
  explicit constexpr ProfilerSampleTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const ProfilerSampleTable_Id& other) const {
    return value == other.value;
  }
};

struct ChromeStackSampleExtrasTable_Id : BaseId {
  ChromeStackSampleExtrasTable_Id() = default;
  explicit constexpr ChromeStackSampleExtrasTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const ChromeStackSampleExtrasTable_Id& other) const {
    return value == other.value;
  }
};

struct ExperimentalFlamegraphTable_Id : BaseId {
  ExperimentalFlamegraphTable_Id() = default;
  explicit constexpr ExperimentalFlamegraphTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const ExperimentalFlamegraphTable_Id& other) const {
    return value == other.value;
  }
};

struct GpuContextTable_Id : BaseId {
  GpuContextTable_Id() = default;
  explicit constexpr GpuContextTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const GpuContextTable_Id& other) const {
    return value == other.value;
  }
};

struct GpuCounterGroupTable_Id : BaseId {
  GpuCounterGroupTable_Id() = default;
  explicit constexpr GpuCounterGroupTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const GpuCounterGroupTable_Id& other) const {
    return value == other.value;
  }
};

struct HeapGraphClassTable_Id : BaseId {
  HeapGraphClassTable_Id() = default;
  explicit constexpr HeapGraphClassTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const HeapGraphClassTable_Id& other) const {
    return value == other.value;
  }
};

struct HeapGraphTable_Id : BaseId {
  HeapGraphTable_Id() = default;
  explicit constexpr HeapGraphTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const HeapGraphTable_Id& other) const {
    return value == other.value;
  }
};

struct HeapGraphJavaOomeDetailsTable_Id : BaseId {
  HeapGraphJavaOomeDetailsTable_Id() = default;
  explicit constexpr HeapGraphJavaOomeDetailsTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const HeapGraphJavaOomeDetailsTable_Id& other) const {
    return value == other.value;
  }
};

struct HeapGraphObjectDataTable_Id : BaseId {
  HeapGraphObjectDataTable_Id() = default;
  explicit constexpr HeapGraphObjectDataTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const HeapGraphObjectDataTable_Id& other) const {
    return value == other.value;
  }
};

struct HeapGraphPrimitiveTable_Id : BaseId {
  HeapGraphPrimitiveTable_Id() = default;
  explicit constexpr HeapGraphPrimitiveTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const HeapGraphPrimitiveTable_Id& other) const {
    return value == other.value;
  }
};

struct HeapGraphObjectTable_Id : BaseId {
  HeapGraphObjectTable_Id() = default;
  explicit constexpr HeapGraphObjectTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const HeapGraphObjectTable_Id& other) const {
    return value == other.value;
  }
};

struct HeapGraphReferenceTable_Id : BaseId {
  HeapGraphReferenceTable_Id() = default;
  explicit constexpr HeapGraphReferenceTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const HeapGraphReferenceTable_Id& other) const {
    return value == other.value;
  }
};

struct HeapGraphThreadCallsiteTable_Id : BaseId {
  HeapGraphThreadCallsiteTable_Id() = default;
  explicit constexpr HeapGraphThreadCallsiteTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const HeapGraphThreadCallsiteTable_Id& other) const {
    return value == other.value;
  }
};

struct HeapProfileTable_Id : BaseId {
  HeapProfileTable_Id() = default;
  explicit constexpr HeapProfileTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const HeapProfileTable_Id& other) const {
    return value == other.value;
  }
};

struct HeapProfileAllocationTable_Id : BaseId {
  HeapProfileAllocationTable_Id() = default;
  explicit constexpr HeapProfileAllocationTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const HeapProfileAllocationTable_Id& other) const {
    return value == other.value;
  }
};

struct PackageListTable_Id : BaseId {
  PackageListTable_Id() = default;
  explicit constexpr PackageListTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const PackageListTable_Id& other) const {
    return value == other.value;
  }
};

struct ProfilerCounterSetTable_Id : BaseId {
  ProfilerCounterSetTable_Id() = default;
  explicit constexpr ProfilerCounterSetTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const ProfilerCounterSetTable_Id& other) const {
    return value == other.value;
  }
};

struct ProfilerSmapsTable_Id : BaseId {
  ProfilerSmapsTable_Id() = default;
  explicit constexpr ProfilerSmapsTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const ProfilerSmapsTable_Id& other) const {
    return value == other.value;
  }
};

struct SymbolTable_Id : BaseId {
  SymbolTable_Id() = default;
  explicit constexpr SymbolTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const SymbolTable_Id& other) const {
    return value == other.value;
  }
};

struct VulkanDebugNamesTable_Id : BaseId {
  VulkanDebugNamesTable_Id() = default;
  explicit constexpr VulkanDebugNamesTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const VulkanDebugNamesTable_Id& other) const {
    return value == other.value;
  }
};

struct VulkanMemoryAllocationsTable_Id : BaseId {
  VulkanMemoryAllocationsTable_Id() = default;
  explicit constexpr VulkanMemoryAllocationsTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const VulkanMemoryAllocationsTable_Id& other) const {
    return value == other.value;
  }
};

class StackProfileMappingTable;
class StackProfileFrameTable;
class AggregateProfileTable;
class StackProfileCallsiteTable;
class AggregateSampleTable;
class ProfilerAsyncContextTable;
class ProfilerTaskContextTable;
class ProfilerExecutionContextTable;
class ProfilerSessionTable;
class ProfilerSampleTable;
class ChromeStackSampleExtrasTable;
class ExperimentalFlamegraphTable;
class GpuContextTable;
class GpuCounterGroupTable;
class HeapGraphClassTable;
class HeapGraphTable;
class HeapGraphJavaOomeDetailsTable;
class HeapGraphObjectDataTable;
class HeapGraphPrimitiveTable;
class HeapGraphObjectTable;
class HeapGraphReferenceTable;
class HeapGraphThreadCallsiteTable;
class HeapProfileTable;
class HeapProfileAllocationTable;
class PackageListTable;
class ProfilerCounterSetTable;
class ProfilerSmapsTable;
class SymbolTable;
class VulkanDebugNamesTable;
class VulkanMemoryAllocationsTable;

// Tuple of all table types in this header
using PROFILER_TABLES_FWD_TABLES = std::tuple<StackProfileMappingTable, StackProfileFrameTable, AggregateProfileTable, StackProfileCallsiteTable, AggregateSampleTable, ProfilerAsyncContextTable, ProfilerTaskContextTable, ProfilerExecutionContextTable, ProfilerSessionTable, ProfilerSampleTable, ChromeStackSampleExtrasTable, ExperimentalFlamegraphTable, GpuContextTable, GpuCounterGroupTable, HeapGraphClassTable, HeapGraphTable, HeapGraphJavaOomeDetailsTable, HeapGraphObjectDataTable, HeapGraphPrimitiveTable, HeapGraphObjectTable, HeapGraphReferenceTable, HeapGraphThreadCallsiteTable, HeapProfileTable, HeapProfileAllocationTable, PackageListTable, ProfilerCounterSetTable, ProfilerSmapsTable, SymbolTable, VulkanDebugNamesTable, VulkanMemoryAllocationsTable>;

}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_TABLES_PROFILER_TABLES_FWD_H_

