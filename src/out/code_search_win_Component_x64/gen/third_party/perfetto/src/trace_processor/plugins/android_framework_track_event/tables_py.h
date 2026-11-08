#ifndef SRC_TRACE_PROCESSOR_PLUGINS_ANDROID_FRAMEWORK_TRACK_EVENT_TABLES_PY_H_
#define SRC_TRACE_PROCESSOR_PLUGINS_ANDROID_FRAMEWORK_TRACK_EVENT_TABLES_PY_H_

#include <cstdint>
#include <optional>
#include <tuple>
#include <type_traits>
#include <utility>
#include <variant>
#include <vector>

#include "perfetto/base/compiler.h"
#include "perfetto/public/compiler.h"
#include "src/trace_processor/containers/string_pool.h"
#include "src/trace_processor/tables/macros_internal.h"
#include "src/trace_processor/core/dataframe/dataframe.h"
#include "src/trace_processor/core/dataframe/specs.h"
#include "src/trace_processor/core/dataframe/typed_cursor.h"
#include "src/trace_processor/plugins/android_framework_track_event/tables_fwd.h"

#include "src/trace_processor/tables/metadata_tables_py.h"

namespace perfetto::trace_processor::tables {


class AndroidTrackEventProcessTable {
 public:
  static constexpr auto kSpec = dataframe::CreateTypedDataframeSpec(
    {"id","upid","start_seq_id","package_uid","caller_uid","defining_uid","fw_start_ts","fw_end_ts","trigger_type","hosting_type","hosting_name","bind_application_delay_ms","process_start_delay_ms","exit_reason","exit_sub_reason"},
    dataframe::CreateTypedColumnSpec(dataframe::Id{}, dataframe::NonNull{}, dataframe::IdSorted{}, dataframe::NoDuplicates{}),
    dataframe::CreateTypedColumnSpec(dataframe::Uint32{}, dataframe::NonNull{}, dataframe::Unsorted{}, dataframe::HasDuplicates{}),
    dataframe::CreateTypedColumnSpec(dataframe::Int64{}, dataframe::DenseNull{}, dataframe::Unsorted{}, dataframe::HasDuplicates{}),
    dataframe::CreateTypedColumnSpec(dataframe::Int32{}, dataframe::DenseNull{}, dataframe::Unsorted{}, dataframe::HasDuplicates{}),
    dataframe::CreateTypedColumnSpec(dataframe::Int32{}, dataframe::DenseNull{}, dataframe::Unsorted{}, dataframe::HasDuplicates{}),
    dataframe::CreateTypedColumnSpec(dataframe::Int32{}, dataframe::DenseNull{}, dataframe::Unsorted{}, dataframe::HasDuplicates{}),
    dataframe::CreateTypedColumnSpec(dataframe::Int64{}, dataframe::DenseNull{}, dataframe::Unsorted{}, dataframe::HasDuplicates{}),
    dataframe::CreateTypedColumnSpec(dataframe::Int64{}, dataframe::DenseNull{}, dataframe::Unsorted{}, dataframe::HasDuplicates{}),
    dataframe::CreateTypedColumnSpec(dataframe::String{}, dataframe::DenseNull{}, dataframe::Unsorted{}, dataframe::HasDuplicates{}),
    dataframe::CreateTypedColumnSpec(dataframe::String{}, dataframe::DenseNull{}, dataframe::Unsorted{}, dataframe::HasDuplicates{}),
    dataframe::CreateTypedColumnSpec(dataframe::String{}, dataframe::DenseNull{}, dataframe::Unsorted{}, dataframe::HasDuplicates{}),
    dataframe::CreateTypedColumnSpec(dataframe::Int64{}, dataframe::DenseNull{}, dataframe::Unsorted{}, dataframe::HasDuplicates{}),
    dataframe::CreateTypedColumnSpec(dataframe::Int64{}, dataframe::DenseNull{}, dataframe::Unsorted{}, dataframe::HasDuplicates{}),
    dataframe::CreateTypedColumnSpec(dataframe::String{}, dataframe::DenseNull{}, dataframe::Unsorted{}, dataframe::HasDuplicates{}),
    dataframe::CreateTypedColumnSpec(dataframe::String{}, dataframe::DenseNull{}, dataframe::Unsorted{}, dataframe::HasDuplicates{}));

  using Id = AndroidTrackEventProcessTable_Id;
  struct RowReference;
  struct ConstRowReference;
  struct RowNumber {
   public:
    explicit constexpr RowNumber(uint32_t value) : value_(value) {}
    uint32_t row_number() const { return value_; }

    RowReference ToRowReference(AndroidTrackEventProcessTable* table) const {
      return RowReference(table, value_);
    }
    ConstRowReference ToRowReference(const AndroidTrackEventProcessTable& table) const {
      return ConstRowReference(&table, value_);
    }

    bool operator==(const RowNumber& other) const {
      return value_ == other.value_;
    }
    bool operator<(const RowNumber& other) const {
      return value_ < other.value_;
    }
   private:
    uint32_t value_;
  };
  struct ColumnIndex {
    static constexpr uint32_t id = 0;
    static constexpr uint32_t upid = 1;
    static constexpr uint32_t start_seq_id = 2;
    static constexpr uint32_t package_uid = 3;
    static constexpr uint32_t caller_uid = 4;
    static constexpr uint32_t defining_uid = 5;
    static constexpr uint32_t fw_start_ts = 6;
    static constexpr uint32_t fw_end_ts = 7;
    static constexpr uint32_t trigger_type = 8;
    static constexpr uint32_t hosting_type = 9;
    static constexpr uint32_t hosting_name = 10;
    static constexpr uint32_t bind_application_delay_ms = 11;
    static constexpr uint32_t process_start_delay_ms = 12;
    static constexpr uint32_t exit_reason = 13;
    static constexpr uint32_t exit_sub_reason = 14;
  };
  struct RowReference {
   public:
    explicit RowReference(AndroidTrackEventProcessTable* table, uint32_t row)
        : table_(table), row_(row) {
        base::ignore_result(table_);
    }
    AndroidTrackEventProcessTable::Id id() const {
        
        return AndroidTrackEventProcessTable::Id{table_->dataframe_.template GetCellUnchecked<ColumnIndex::id>(kSpec, row_)};
      }
          uint32_t upid() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return uint32_t{table_->dataframe_.template GetCellUnchecked<ColumnIndex::upid>(kSpec, row_)};
      }
        std::optional<int64_t> start_seq_id() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::start_seq_id>(kSpec, row_);
    }
        std::optional<int32_t> package_uid() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::package_uid>(kSpec, row_);
    }
        std::optional<int32_t> caller_uid() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::caller_uid>(kSpec, row_);
    }
        std::optional<int32_t> defining_uid() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::defining_uid>(kSpec, row_);
    }
        std::optional<int64_t> fw_start_ts() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::fw_start_ts>(kSpec, row_);
    }
        std::optional<int64_t> fw_end_ts() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::fw_end_ts>(kSpec, row_);
    }
          std::optional<StringPool::Id> trigger_type() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::trigger_type>(kSpec, row_);
      }
          std::optional<StringPool::Id> hosting_type() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::hosting_type>(kSpec, row_);
      }
          std::optional<StringPool::Id> hosting_name() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::hosting_name>(kSpec, row_);
      }
        std::optional<int64_t> bind_application_delay_ms() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::bind_application_delay_ms>(kSpec, row_);
    }
        std::optional<int64_t> process_start_delay_ms() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::process_start_delay_ms>(kSpec, row_);
    }
          std::optional<StringPool::Id> exit_reason() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::exit_reason>(kSpec, row_);
      }
          std::optional<StringPool::Id> exit_sub_reason() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::exit_sub_reason>(kSpec, row_);
      }
    void set_start_seq_id(std::optional<int64_t> res) {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      table_->dataframe_.SetCellUnchecked<ColumnIndex::start_seq_id>(kSpec, row_, res);
    }
        void set_package_uid(std::optional<int32_t> res) {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      table_->dataframe_.SetCellUnchecked<ColumnIndex::package_uid>(kSpec, row_, res);
    }
        void set_caller_uid(std::optional<int32_t> res) {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      table_->dataframe_.SetCellUnchecked<ColumnIndex::caller_uid>(kSpec, row_, res);
    }
        void set_defining_uid(std::optional<int32_t> res) {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      table_->dataframe_.SetCellUnchecked<ColumnIndex::defining_uid>(kSpec, row_, res);
    }
        void set_fw_start_ts(std::optional<int64_t> res) {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      table_->dataframe_.SetCellUnchecked<ColumnIndex::fw_start_ts>(kSpec, row_, res);
    }
        void set_fw_end_ts(std::optional<int64_t> res) {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      table_->dataframe_.SetCellUnchecked<ColumnIndex::fw_end_ts>(kSpec, row_, res);
    }
          void set_trigger_type(std::optional<StringPool::Id> res) {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        table_->dataframe_.SetCellUnchecked<ColumnIndex::trigger_type>(kSpec, row_, res);
    }
          void set_hosting_type(std::optional<StringPool::Id> res) {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        table_->dataframe_.SetCellUnchecked<ColumnIndex::hosting_type>(kSpec, row_, res);
    }
          void set_hosting_name(std::optional<StringPool::Id> res) {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        table_->dataframe_.SetCellUnchecked<ColumnIndex::hosting_name>(kSpec, row_, res);
    }
        void set_bind_application_delay_ms(std::optional<int64_t> res) {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      table_->dataframe_.SetCellUnchecked<ColumnIndex::bind_application_delay_ms>(kSpec, row_, res);
    }
        void set_process_start_delay_ms(std::optional<int64_t> res) {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      table_->dataframe_.SetCellUnchecked<ColumnIndex::process_start_delay_ms>(kSpec, row_, res);
    }
          void set_exit_reason(std::optional<StringPool::Id> res) {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        table_->dataframe_.SetCellUnchecked<ColumnIndex::exit_reason>(kSpec, row_, res);
    }
          void set_exit_sub_reason(std::optional<StringPool::Id> res) {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        table_->dataframe_.SetCellUnchecked<ColumnIndex::exit_sub_reason>(kSpec, row_, res);
    }
    RowNumber ToRowNumber() const {
      return RowNumber{row_};
    }

   private:
    friend struct ConstRowReference;
    AndroidTrackEventProcessTable* table_;
    uint32_t row_;
  };
  struct ConstRowReference {
   public:
    explicit ConstRowReference(const AndroidTrackEventProcessTable* table, uint32_t row)
        : table_(table), row_(row) {
        base::ignore_result(table_);
    }
    ConstRowReference(const RowReference& other)
        : table_(other.table_), row_(other.row_) {}
    AndroidTrackEventProcessTable::Id id() const {
        
        return AndroidTrackEventProcessTable::Id{table_->dataframe_.template GetCellUnchecked<ColumnIndex::id>(kSpec, row_)};
      }
          uint32_t upid() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return uint32_t{table_->dataframe_.template GetCellUnchecked<ColumnIndex::upid>(kSpec, row_)};
      }
        std::optional<int64_t> start_seq_id() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::start_seq_id>(kSpec, row_);
    }
        std::optional<int32_t> package_uid() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::package_uid>(kSpec, row_);
    }
        std::optional<int32_t> caller_uid() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::caller_uid>(kSpec, row_);
    }
        std::optional<int32_t> defining_uid() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::defining_uid>(kSpec, row_);
    }
        std::optional<int64_t> fw_start_ts() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::fw_start_ts>(kSpec, row_);
    }
        std::optional<int64_t> fw_end_ts() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::fw_end_ts>(kSpec, row_);
    }
          std::optional<StringPool::Id> trigger_type() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::trigger_type>(kSpec, row_);
      }
          std::optional<StringPool::Id> hosting_type() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::hosting_type>(kSpec, row_);
      }
          std::optional<StringPool::Id> hosting_name() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::hosting_name>(kSpec, row_);
      }
        std::optional<int64_t> bind_application_delay_ms() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::bind_application_delay_ms>(kSpec, row_);
    }
        std::optional<int64_t> process_start_delay_ms() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::process_start_delay_ms>(kSpec, row_);
    }
          std::optional<StringPool::Id> exit_reason() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::exit_reason>(kSpec, row_);
      }
          std::optional<StringPool::Id> exit_sub_reason() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::exit_sub_reason>(kSpec, row_);
      }
    RowNumber ToRowNumber() const {
      return RowNumber{row_};
    }
   private:
    const AndroidTrackEventProcessTable* table_;
    uint32_t row_;
  };
  class ConstCursor {
   public:
    explicit ConstCursor(const dataframe::Dataframe& df,
                         std::vector<dataframe::FilterSpec> filters,
                         std::vector<dataframe::SortSpec> sorts)
      : dataframe_(&df), cursor_(&df, std::move(filters), std::move(sorts)) {
      base::ignore_result(dataframe_);
    }

    PERFETTO_ALWAYS_INLINE void Execute() { cursor_.ExecuteUnchecked(); }
    PERFETTO_ALWAYS_INLINE bool Eof() const { return cursor_.Eof(); }
    PERFETTO_ALWAYS_INLINE void Next() { cursor_.Next(); }
    template <typename C>
    PERFETTO_ALWAYS_INLINE void SetFilterValueUnchecked(uint32_t index, C value) {
      cursor_.SetFilterValueUnchecked(index, std::move(value));
    }
    PERFETTO_ALWAYS_INLINE void SetFilterValueListUnchecked(
        uint32_t index,
        const dataframe::TypedCursor::FilterValue* values,
        uint32_t count) {
      cursor_.SetFilterValueListUnchecked(index, values, count);
    }
    RowNumber ToRowNumber() const {
      return RowNumber{cursor_.RowIndex()};
    }
    void Reset() { cursor_.Reset(); }
    AndroidTrackEventProcessTable::Id id() const {
        
        return AndroidTrackEventProcessTable::Id{cursor_.GetCellUnchecked<ColumnIndex::id>(kSpec)};
      }
      uint32_t upid() const {
        PERFETTO_DCHECK(!dataframe_->finalized());
        return uint32_t{cursor_.GetCellUnchecked<ColumnIndex::upid>(kSpec)};
      }
    std::optional<int64_t> start_seq_id() const {
      PERFETTO_DCHECK(!dataframe_->finalized());
      return cursor_.GetCellUnchecked<ColumnIndex::start_seq_id>(kSpec);
    }
    std::optional<int32_t> package_uid() const {
      PERFETTO_DCHECK(!dataframe_->finalized());
      return cursor_.GetCellUnchecked<ColumnIndex::package_uid>(kSpec);
    }
    std::optional<int32_t> caller_uid() const {
      PERFETTO_DCHECK(!dataframe_->finalized());
      return cursor_.GetCellUnchecked<ColumnIndex::caller_uid>(kSpec);
    }
    std::optional<int32_t> defining_uid() const {
      PERFETTO_DCHECK(!dataframe_->finalized());
      return cursor_.GetCellUnchecked<ColumnIndex::defining_uid>(kSpec);
    }
    std::optional<int64_t> fw_start_ts() const {
      PERFETTO_DCHECK(!dataframe_->finalized());
      return cursor_.GetCellUnchecked<ColumnIndex::fw_start_ts>(kSpec);
    }
    std::optional<int64_t> fw_end_ts() const {
      PERFETTO_DCHECK(!dataframe_->finalized());
      return cursor_.GetCellUnchecked<ColumnIndex::fw_end_ts>(kSpec);
    }
      std::optional<StringPool::Id> trigger_type() const {
        PERFETTO_DCHECK(!dataframe_->finalized());
        return cursor_.GetCellUnchecked<ColumnIndex::trigger_type>(kSpec);
      }
      std::optional<StringPool::Id> hosting_type() const {
        PERFETTO_DCHECK(!dataframe_->finalized());
        return cursor_.GetCellUnchecked<ColumnIndex::hosting_type>(kSpec);
      }
      std::optional<StringPool::Id> hosting_name() const {
        PERFETTO_DCHECK(!dataframe_->finalized());
        return cursor_.GetCellUnchecked<ColumnIndex::hosting_name>(kSpec);
      }
    std::optional<int64_t> bind_application_delay_ms() const {
      PERFETTO_DCHECK(!dataframe_->finalized());
      return cursor_.GetCellUnchecked<ColumnIndex::bind_application_delay_ms>(kSpec);
    }
    std::optional<int64_t> process_start_delay_ms() const {
      PERFETTO_DCHECK(!dataframe_->finalized());
      return cursor_.GetCellUnchecked<ColumnIndex::process_start_delay_ms>(kSpec);
    }
      std::optional<StringPool::Id> exit_reason() const {
        PERFETTO_DCHECK(!dataframe_->finalized());
        return cursor_.GetCellUnchecked<ColumnIndex::exit_reason>(kSpec);
      }
      std::optional<StringPool::Id> exit_sub_reason() const {
        PERFETTO_DCHECK(!dataframe_->finalized());
        return cursor_.GetCellUnchecked<ColumnIndex::exit_sub_reason>(kSpec);
      }

   private:
    const dataframe::Dataframe* dataframe_;
    dataframe::TypedCursor cursor_;
  };
  class Cursor {
   public:
    explicit Cursor(dataframe::Dataframe& df,
                    std::vector<dataframe::FilterSpec> filters,
                    std::vector<dataframe::SortSpec> sorts)
      : dataframe_(&df), cursor_(&df, std::move(filters), std::move(sorts)) {
      base::ignore_result(dataframe_);
    }

    PERFETTO_ALWAYS_INLINE void Execute() { cursor_.ExecuteUnchecked(); }
    PERFETTO_ALWAYS_INLINE bool Eof() const { return cursor_.Eof(); }
    PERFETTO_ALWAYS_INLINE void Next() { cursor_.Next(); }
    template <typename C>
    PERFETTO_ALWAYS_INLINE void SetFilterValueUnchecked(uint32_t index, C value) {
      cursor_.SetFilterValueUnchecked(index, std::move(value));
    }
    PERFETTO_ALWAYS_INLINE void SetFilterValueListUnchecked(
        uint32_t index,
        const dataframe::TypedCursor::FilterValue* values,
        uint32_t count) {
      cursor_.SetFilterValueListUnchecked(index, values, count);
    }
    RowNumber ToRowNumber() const {
      return RowNumber{cursor_.RowIndex()};
    }
    void Reset() { cursor_.Reset(); }

    AndroidTrackEventProcessTable::Id id() const {
        
        return AndroidTrackEventProcessTable::Id{cursor_.GetCellUnchecked<ColumnIndex::id>(kSpec)};
      }
      uint32_t upid() const {
        PERFETTO_DCHECK(!dataframe_->finalized());
        return uint32_t{cursor_.GetCellUnchecked<ColumnIndex::upid>(kSpec)};
      }
    std::optional<int64_t> start_seq_id() const {
      PERFETTO_DCHECK(!dataframe_->finalized());
      return cursor_.GetCellUnchecked<ColumnIndex::start_seq_id>(kSpec);
    }
    std::optional<int32_t> package_uid() const {
      PERFETTO_DCHECK(!dataframe_->finalized());
      return cursor_.GetCellUnchecked<ColumnIndex::package_uid>(kSpec);
    }
    std::optional<int32_t> caller_uid() const {
      PERFETTO_DCHECK(!dataframe_->finalized());
      return cursor_.GetCellUnchecked<ColumnIndex::caller_uid>(kSpec);
    }
    std::optional<int32_t> defining_uid() const {
      PERFETTO_DCHECK(!dataframe_->finalized());
      return cursor_.GetCellUnchecked<ColumnIndex::defining_uid>(kSpec);
    }
    std::optional<int64_t> fw_start_ts() const {
      PERFETTO_DCHECK(!dataframe_->finalized());
      return cursor_.GetCellUnchecked<ColumnIndex::fw_start_ts>(kSpec);
    }
    std::optional<int64_t> fw_end_ts() const {
      PERFETTO_DCHECK(!dataframe_->finalized());
      return cursor_.GetCellUnchecked<ColumnIndex::fw_end_ts>(kSpec);
    }
      std::optional<StringPool::Id> trigger_type() const {
        PERFETTO_DCHECK(!dataframe_->finalized());
        return cursor_.GetCellUnchecked<ColumnIndex::trigger_type>(kSpec);
      }
      std::optional<StringPool::Id> hosting_type() const {
        PERFETTO_DCHECK(!dataframe_->finalized());
        return cursor_.GetCellUnchecked<ColumnIndex::hosting_type>(kSpec);
      }
      std::optional<StringPool::Id> hosting_name() const {
        PERFETTO_DCHECK(!dataframe_->finalized());
        return cursor_.GetCellUnchecked<ColumnIndex::hosting_name>(kSpec);
      }
    std::optional<int64_t> bind_application_delay_ms() const {
      PERFETTO_DCHECK(!dataframe_->finalized());
      return cursor_.GetCellUnchecked<ColumnIndex::bind_application_delay_ms>(kSpec);
    }
    std::optional<int64_t> process_start_delay_ms() const {
      PERFETTO_DCHECK(!dataframe_->finalized());
      return cursor_.GetCellUnchecked<ColumnIndex::process_start_delay_ms>(kSpec);
    }
      std::optional<StringPool::Id> exit_reason() const {
        PERFETTO_DCHECK(!dataframe_->finalized());
        return cursor_.GetCellUnchecked<ColumnIndex::exit_reason>(kSpec);
      }
      std::optional<StringPool::Id> exit_sub_reason() const {
        PERFETTO_DCHECK(!dataframe_->finalized());
        return cursor_.GetCellUnchecked<ColumnIndex::exit_sub_reason>(kSpec);
      }
    void set_start_seq_id(std::optional<int64_t> res) {
        PERFETTO_DCHECK(!dataframe_->finalized());
      cursor_.SetCellUnchecked<ColumnIndex::start_seq_id>(kSpec, res);
    }
    void set_package_uid(std::optional<int32_t> res) {
        PERFETTO_DCHECK(!dataframe_->finalized());
      cursor_.SetCellUnchecked<ColumnIndex::package_uid>(kSpec, res);
    }
    void set_caller_uid(std::optional<int32_t> res) {
        PERFETTO_DCHECK(!dataframe_->finalized());
      cursor_.SetCellUnchecked<ColumnIndex::caller_uid>(kSpec, res);
    }
    void set_defining_uid(std::optional<int32_t> res) {
        PERFETTO_DCHECK(!dataframe_->finalized());
      cursor_.SetCellUnchecked<ColumnIndex::defining_uid>(kSpec, res);
    }
    void set_fw_start_ts(std::optional<int64_t> res) {
        PERFETTO_DCHECK(!dataframe_->finalized());
      cursor_.SetCellUnchecked<ColumnIndex::fw_start_ts>(kSpec, res);
    }
    void set_fw_end_ts(std::optional<int64_t> res) {
        PERFETTO_DCHECK(!dataframe_->finalized());
      cursor_.SetCellUnchecked<ColumnIndex::fw_end_ts>(kSpec, res);
    }
      void set_trigger_type(std::optional<StringPool::Id> res) {
        PERFETTO_DCHECK(!dataframe_->finalized());
        cursor_.SetCellUnchecked<ColumnIndex::trigger_type>(kSpec, res);
    }
      void set_hosting_type(std::optional<StringPool::Id> res) {
        PERFETTO_DCHECK(!dataframe_->finalized());
        cursor_.SetCellUnchecked<ColumnIndex::hosting_type>(kSpec, res);
    }
      void set_hosting_name(std::optional<StringPool::Id> res) {
        PERFETTO_DCHECK(!dataframe_->finalized());
        cursor_.SetCellUnchecked<ColumnIndex::hosting_name>(kSpec, res);
    }
    void set_bind_application_delay_ms(std::optional<int64_t> res) {
        PERFETTO_DCHECK(!dataframe_->finalized());
      cursor_.SetCellUnchecked<ColumnIndex::bind_application_delay_ms>(kSpec, res);
    }
    void set_process_start_delay_ms(std::optional<int64_t> res) {
        PERFETTO_DCHECK(!dataframe_->finalized());
      cursor_.SetCellUnchecked<ColumnIndex::process_start_delay_ms>(kSpec, res);
    }
      void set_exit_reason(std::optional<StringPool::Id> res) {
        PERFETTO_DCHECK(!dataframe_->finalized());
        cursor_.SetCellUnchecked<ColumnIndex::exit_reason>(kSpec, res);
    }
      void set_exit_sub_reason(std::optional<StringPool::Id> res) {
        PERFETTO_DCHECK(!dataframe_->finalized());
        cursor_.SetCellUnchecked<ColumnIndex::exit_sub_reason>(kSpec, res);
    }

   private:
    dataframe::Dataframe* dataframe_;
    dataframe::TypedCursor cursor_;
  };
  class Iterator {
    public:
      explicit Iterator(AndroidTrackEventProcessTable* table) : table_(table) {
        base::ignore_result(table_);
      }
      explicit operator bool() const { return row_ < table_->row_count(); }
      Iterator& operator++() {
        ++row_;
        return *this;
      }
      RowNumber row_number() const {
        return RowNumber{row_};
      }
      RowReference ToRowReference() const {
        return RowReference(table_, row_);
      }
      AndroidTrackEventProcessTable::Id id() const {
        
        return AndroidTrackEventProcessTable::Id{table_->dataframe_.template GetCellUnchecked<ColumnIndex::id>(kSpec, row_)};
      }
          uint32_t upid() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return uint32_t{table_->dataframe_.template GetCellUnchecked<ColumnIndex::upid>(kSpec, row_)};
      }
        std::optional<int64_t> start_seq_id() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::start_seq_id>(kSpec, row_);
    }
        std::optional<int32_t> package_uid() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::package_uid>(kSpec, row_);
    }
        std::optional<int32_t> caller_uid() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::caller_uid>(kSpec, row_);
    }
        std::optional<int32_t> defining_uid() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::defining_uid>(kSpec, row_);
    }
        std::optional<int64_t> fw_start_ts() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::fw_start_ts>(kSpec, row_);
    }
        std::optional<int64_t> fw_end_ts() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::fw_end_ts>(kSpec, row_);
    }
          std::optional<StringPool::Id> trigger_type() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::trigger_type>(kSpec, row_);
      }
          std::optional<StringPool::Id> hosting_type() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::hosting_type>(kSpec, row_);
      }
          std::optional<StringPool::Id> hosting_name() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::hosting_name>(kSpec, row_);
      }
        std::optional<int64_t> bind_application_delay_ms() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::bind_application_delay_ms>(kSpec, row_);
    }
        std::optional<int64_t> process_start_delay_ms() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::process_start_delay_ms>(kSpec, row_);
    }
          std::optional<StringPool::Id> exit_reason() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::exit_reason>(kSpec, row_);
      }
          std::optional<StringPool::Id> exit_sub_reason() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::exit_sub_reason>(kSpec, row_);
      }
      void set_start_seq_id(std::optional<int64_t> res) {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      table_->dataframe_.SetCellUnchecked<ColumnIndex::start_seq_id>(kSpec, row_, res);
    }
        void set_package_uid(std::optional<int32_t> res) {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      table_->dataframe_.SetCellUnchecked<ColumnIndex::package_uid>(kSpec, row_, res);
    }
        void set_caller_uid(std::optional<int32_t> res) {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      table_->dataframe_.SetCellUnchecked<ColumnIndex::caller_uid>(kSpec, row_, res);
    }
        void set_defining_uid(std::optional<int32_t> res) {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      table_->dataframe_.SetCellUnchecked<ColumnIndex::defining_uid>(kSpec, row_, res);
    }
        void set_fw_start_ts(std::optional<int64_t> res) {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      table_->dataframe_.SetCellUnchecked<ColumnIndex::fw_start_ts>(kSpec, row_, res);
    }
        void set_fw_end_ts(std::optional<int64_t> res) {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      table_->dataframe_.SetCellUnchecked<ColumnIndex::fw_end_ts>(kSpec, row_, res);
    }
          void set_trigger_type(std::optional<StringPool::Id> res) {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        table_->dataframe_.SetCellUnchecked<ColumnIndex::trigger_type>(kSpec, row_, res);
    }
          void set_hosting_type(std::optional<StringPool::Id> res) {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        table_->dataframe_.SetCellUnchecked<ColumnIndex::hosting_type>(kSpec, row_, res);
    }
          void set_hosting_name(std::optional<StringPool::Id> res) {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        table_->dataframe_.SetCellUnchecked<ColumnIndex::hosting_name>(kSpec, row_, res);
    }
        void set_bind_application_delay_ms(std::optional<int64_t> res) {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      table_->dataframe_.SetCellUnchecked<ColumnIndex::bind_application_delay_ms>(kSpec, row_, res);
    }
        void set_process_start_delay_ms(std::optional<int64_t> res) {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      table_->dataframe_.SetCellUnchecked<ColumnIndex::process_start_delay_ms>(kSpec, row_, res);
    }
          void set_exit_reason(std::optional<StringPool::Id> res) {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        table_->dataframe_.SetCellUnchecked<ColumnIndex::exit_reason>(kSpec, row_, res);
    }
          void set_exit_sub_reason(std::optional<StringPool::Id> res) {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        table_->dataframe_.SetCellUnchecked<ColumnIndex::exit_sub_reason>(kSpec, row_, res);
    }

    private:
      AndroidTrackEventProcessTable* table_;
      uint32_t row_ = 0;
  };
  class ConstIterator {
    public:
      explicit ConstIterator(const AndroidTrackEventProcessTable* table) : table_(table) {
        base::ignore_result(table_);
      }
      explicit operator bool() const { return row_ < table_->row_count(); }
      ConstIterator& operator++() {
        ++row_;
        return *this;
      }
      RowNumber row_number() const {
        return RowNumber{row_};
      }
      ConstRowReference ToRowReference() const {
        return ConstRowReference(table_, row_);
      }
      AndroidTrackEventProcessTable::Id id() const {
        
        return AndroidTrackEventProcessTable::Id{table_->dataframe_.template GetCellUnchecked<ColumnIndex::id>(kSpec, row_)};
      }
          uint32_t upid() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return uint32_t{table_->dataframe_.template GetCellUnchecked<ColumnIndex::upid>(kSpec, row_)};
      }
        std::optional<int64_t> start_seq_id() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::start_seq_id>(kSpec, row_);
    }
        std::optional<int32_t> package_uid() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::package_uid>(kSpec, row_);
    }
        std::optional<int32_t> caller_uid() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::caller_uid>(kSpec, row_);
    }
        std::optional<int32_t> defining_uid() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::defining_uid>(kSpec, row_);
    }
        std::optional<int64_t> fw_start_ts() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::fw_start_ts>(kSpec, row_);
    }
        std::optional<int64_t> fw_end_ts() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::fw_end_ts>(kSpec, row_);
    }
          std::optional<StringPool::Id> trigger_type() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::trigger_type>(kSpec, row_);
      }
          std::optional<StringPool::Id> hosting_type() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::hosting_type>(kSpec, row_);
      }
          std::optional<StringPool::Id> hosting_name() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::hosting_name>(kSpec, row_);
      }
        std::optional<int64_t> bind_application_delay_ms() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::bind_application_delay_ms>(kSpec, row_);
    }
        std::optional<int64_t> process_start_delay_ms() const {
      PERFETTO_DCHECK(!table_->dataframe_.finalized());
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::process_start_delay_ms>(kSpec, row_);
    }
          std::optional<StringPool::Id> exit_reason() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::exit_reason>(kSpec, row_);
      }
          std::optional<StringPool::Id> exit_sub_reason() const {
        PERFETTO_DCHECK(!table_->dataframe_.finalized());
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::exit_sub_reason>(kSpec, row_);
      }

    private:
      const AndroidTrackEventProcessTable* table_;
      uint32_t row_ = 0;
  };
  struct IdAndRow {
    Id id;
    RowNumber row_number;
    uint32_t row;
    RowReference row_reference;
  };
  
  struct Row {
    Row(uint32_t _upid = {}, std::optional<int64_t> _start_seq_id = {}, std::optional<int32_t> _package_uid = {}, std::optional<int32_t> _caller_uid = {}, std::optional<int32_t> _defining_uid = {}, std::optional<int64_t> _fw_start_ts = {}, std::optional<int64_t> _fw_end_ts = {}, std::optional<StringPool::Id> _trigger_type = {}, std::optional<StringPool::Id> _hosting_type = {}, std::optional<StringPool::Id> _hosting_name = {}, std::optional<int64_t> _bind_application_delay_ms = {}, std::optional<int64_t> _process_start_delay_ms = {}, std::optional<StringPool::Id> _exit_reason = {}, std::optional<StringPool::Id> _exit_sub_reason = {}) : upid(std::move(_upid)), start_seq_id(std::move(_start_seq_id)), package_uid(std::move(_package_uid)), caller_uid(std::move(_caller_uid)), defining_uid(std::move(_defining_uid)), fw_start_ts(std::move(_fw_start_ts)), fw_end_ts(std::move(_fw_end_ts)), trigger_type(std::move(_trigger_type)), hosting_type(std::move(_hosting_type)), hosting_name(std::move(_hosting_name)), bind_application_delay_ms(std::move(_bind_application_delay_ms)), process_start_delay_ms(std::move(_process_start_delay_ms)), exit_reason(std::move(_exit_reason)), exit_sub_reason(std::move(_exit_sub_reason)) {}

    bool operator==(const Row& other) const {
      return std::equal_to<>()(upid, other.upid) && std::equal_to<>()(start_seq_id, other.start_seq_id) && std::equal_to<>()(package_uid, other.package_uid) && std::equal_to<>()(caller_uid, other.caller_uid) && std::equal_to<>()(defining_uid, other.defining_uid) && std::equal_to<>()(fw_start_ts, other.fw_start_ts) && std::equal_to<>()(fw_end_ts, other.fw_end_ts) && std::equal_to<>()(trigger_type, other.trigger_type) && std::equal_to<>()(hosting_type, other.hosting_type) && std::equal_to<>()(hosting_name, other.hosting_name) && std::equal_to<>()(bind_application_delay_ms, other.bind_application_delay_ms) && std::equal_to<>()(process_start_delay_ms, other.process_start_delay_ms) && std::equal_to<>()(exit_reason, other.exit_reason) && std::equal_to<>()(exit_sub_reason, other.exit_sub_reason);
    }

        uint32_t upid;
    std::optional<int64_t> start_seq_id;
    std::optional<int32_t> package_uid;
    std::optional<int32_t> caller_uid;
    std::optional<int32_t> defining_uid;
    std::optional<int64_t> fw_start_ts;
    std::optional<int64_t> fw_end_ts;
    std::optional<StringPool::Id> trigger_type;
    std::optional<StringPool::Id> hosting_type;
    std::optional<StringPool::Id> hosting_name;
    std::optional<int64_t> bind_application_delay_ms;
    std::optional<int64_t> process_start_delay_ms;
    std::optional<StringPool::Id> exit_reason;
    std::optional<StringPool::Id> exit_sub_reason;
  };

  explicit AndroidTrackEventProcessTable(StringPool* pool)
      : dataframe_(
        dataframe::Dataframe::CreateFromTypedSpec(kSpec, pool)) {}

  template <typename = void>
  IdAndRow Insert(const Row& row) {
    uint32_t row_count = dataframe_.row_count();
    dataframe_.InsertUnchecked(kSpec, std::monostate(), row.upid, row.start_seq_id, row.package_uid, row.caller_uid, row.defining_uid, row.fw_start_ts, row.fw_end_ts, row.trigger_type, row.hosting_type, row.hosting_name, row.bind_application_delay_ms, row.process_start_delay_ms, row.exit_reason, row.exit_sub_reason);
    return IdAndRow{Id{row_count}, RowNumber{row_count}, row_count, RowReference(this, row_count)};
  }

  uint32_t row_count() const {
    return dataframe_.row_count();
  }

  uint64_t mutations() const {
    return dataframe_.mutations();
  }

  ConstRowReference operator[](Id id) const {
    return ConstRowReference(this, id.value);
  }
  ConstRowReference operator[](uint32_t row) const {
    return ConstRowReference(this, row);
  }

  RowReference operator[](Id id) {
    return RowReference(this, id.value);
  }
  RowReference operator[](uint32_t row) {
    return RowReference(this, row);
  }

  // Returns an `Id` for `value` if it refers to a valid row in this table, or
  // std::nullopt otherwise. Use this whenever turning an untrusted integer
  // (e.g. from SQL or a decoded proto) into a typed `Id`.
  std::optional<Id> TryCastId(int64_t value) const {
    if (value < 0 || value >= row_count()) {
      return std::nullopt;
    }
    return Id{static_cast<uint32_t>(value)};
  }

  ConstCursor CreateCursor(
      std::vector<dataframe::FilterSpec> filters = {},
      std::vector<dataframe::SortSpec> sorts = {}) const {
    return ConstCursor(dataframe_, std::move(filters), std::move(sorts));
  }
  Cursor CreateCursor(
      std::vector<dataframe::FilterSpec> filters = {},
      std::vector<dataframe::SortSpec> sorts = {}) {
    return Cursor(dataframe_, std::move(filters), std::move(sorts));
  }

  Iterator IterateRows() { return Iterator(this); }
  ConstIterator IterateRows() const { return ConstIterator(this); }

  void Finalize() { dataframe_.Finalize(); }

  void Clear() { dataframe_.Clear(); }

  static const char* Name() {
    return "__intrinsic_android_track_event_process";
  }

  dataframe::Dataframe& dataframe() {
    return dataframe_;
  }
  const dataframe::Dataframe& dataframe() const {
    return dataframe_;
  }

 private:
  dataframe::Dataframe dataframe_;
};
static_assert(sizeof(AndroidTrackEventProcessTable) == sizeof(dataframe::Dataframe));


}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_PLUGINS_ANDROID_FRAMEWORK_TRACK_EVENT_TABLES_PY_H_

