#ifndef SRC_TRACE_PROCESSOR_PLUGINS_STRUCTURAL_TREE_PARTITION_TABLES_FWD_H_
#define SRC_TRACE_PROCESSOR_PLUGINS_STRUCTURAL_TREE_PARTITION_TABLES_FWD_H_

#include <cstdint>
#include <tuple>

#include "src/trace_processor/tables/macros_internal.h"  // IWYU pragma: export



namespace perfetto::trace_processor::tables {

struct StructuralTreePartitionTable_Id : BaseId {
  StructuralTreePartitionTable_Id() = default;
  explicit constexpr StructuralTreePartitionTable_Id(uint32_t _value) : BaseId(_value) {}

  bool operator==(const StructuralTreePartitionTable_Id& other) const {
    return value == other.value;
  }
};

class StructuralTreePartitionTable;

// Tuple of all table types in this header
using SRC_TRACE_PROCESSOR_PLUGINS_STRUCTURAL_TREE_PARTITION_TABLES_FWD_TABLES = std::tuple<StructuralTreePartitionTable>;

}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_PLUGINS_STRUCTURAL_TREE_PARTITION_TABLES_FWD_H_

