#ifndef SRC_TRACE_PROCESSOR_TABLES_STATE_TABLES_PY_H_
#define SRC_TRACE_PROCESSOR_TABLES_STATE_TABLES_PY_H_

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
#include "src/trace_processor/tables/state_tables_fwd.h"

#include "src/trace_processor/tables/track_tables_py.h"

namespace perfetto::trace_processor::tables {


class StateTable {
 public:
  static constexpr auto kSpec = dataframe::CreateTypedDataframeSpec(
    {"id","ts","dur","track_id","category","value","arg_set_id"},
    dataframe::CreateTypedColumnSpec(dataframe::Id{}, dataframe::NonNull{}, dataframe::IdSorted{}, dataframe::NoDuplicates{}),
    dataframe::CreateTypedColumnSpec(dataframe::Int64{}, dataframe::NonNull{}, dataframe::Sorted{}, dataframe::HasDuplicates{}),
    dataframe::CreateTypedColumnSpec(dataframe::Int64{}, dataframe::NonNull{}, dataframe::Unsorted{}, dataframe::HasDuplicates{}),
    dataframe::CreateTypedColumnSpec(dataframe::Uint32{}, dataframe::NonNull{}, dataframe::Unsorted{}, dataframe::HasDuplicates{}),
    dataframe::CreateTypedColumnSpec(dataframe::String{}, dataframe::DenseNull{}, dataframe::Unsorted{}, dataframe::HasDuplicates{}),
    dataframe::CreateTypedColumnSpec(dataframe::String{}, dataframe::DenseNull{}, dataframe::Unsorted{}, dataframe::HasDuplicates{}),
    dataframe::CreateTypedColumnSpec(dataframe::Uint32{}, dataframe::DenseNull{}, dataframe::Unsorted{}, dataframe::HasDuplicates{}));

  using Id = StateTable_Id;
  struct RowReference;
  struct ConstRowReference;
  struct RowNumber {
   public:
    explicit constexpr RowNumber(uint32_t value) : value_(value) {}
    uint32_t row_number() const { return value_; }

    RowReference ToRowReference(StateTable* table) const {
      return RowReference(table, value_);
    }
    ConstRowReference ToRowReference(const StateTable& table) const {
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
    static constexpr uint32_t ts = 1;
    static constexpr uint32_t dur = 2;
    static constexpr uint32_t track_id = 3;
    static constexpr uint32_t category = 4;
    static constexpr uint32_t value = 5;
    static constexpr uint32_t arg_set_id = 6;
  };
  struct RowReference {
   public:
    explicit RowReference(StateTable* table, uint32_t row)
        : table_(table), row_(row) {
        base::ignore_result(table_);
    }
    StateTable::Id id() const {
        
        return StateTable::Id{table_->dataframe_.template GetCellUnchecked<ColumnIndex::id>(kSpec, row_)};
      }
        int64_t ts() const {
      
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::ts>(kSpec, row_);
    }
        int64_t dur() const {
      
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::dur>(kSpec, row_);
    }
          TrackTable::Id track_id() const {
        
        return TrackTable::Id{table_->dataframe_.template GetCellUnchecked<ColumnIndex::track_id>(kSpec, row_)};
      }
          std::optional<StringPool::Id> category() const {
        
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::category>(kSpec, row_);
      }
          StringPool::Id value() const {
        
        auto res = table_->dataframe_.template GetCellUnchecked<ColumnIndex::value>(kSpec, row_);
        return res ? *res : StringPool::Id::Null();
      }
        std::optional<uint32_t> arg_set_id() const {
      
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::arg_set_id>(kSpec, row_);
    }
    void set_dur(int64_t res) {
      
      table_->dataframe_.SetCellUnchecked<ColumnIndex::dur>(kSpec, row_, res);
    }
          void set_category(std::optional<StringPool::Id> res) {
        
        table_->dataframe_.SetCellUnchecked<ColumnIndex::category>(kSpec, row_, res);
    }
          void set_value(StringPool::Id res) {
        
        table_->dataframe_.SetCellUnchecked<ColumnIndex::value>(kSpec, row_, std::make_optional(res));
    }
        void set_arg_set_id(std::optional<uint32_t> res) {
      
      table_->dataframe_.SetCellUnchecked<ColumnIndex::arg_set_id>(kSpec, row_, res);
    }
    RowNumber ToRowNumber() const {
      return RowNumber{row_};
    }

   private:
    friend struct ConstRowReference;
    StateTable* table_;
    uint32_t row_;
  };
  struct ConstRowReference {
   public:
    explicit ConstRowReference(const StateTable* table, uint32_t row)
        : table_(table), row_(row) {
        base::ignore_result(table_);
    }
    ConstRowReference(const RowReference& other)
        : table_(other.table_), row_(other.row_) {}
    StateTable::Id id() const {
        
        return StateTable::Id{table_->dataframe_.template GetCellUnchecked<ColumnIndex::id>(kSpec, row_)};
      }
        int64_t ts() const {
      
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::ts>(kSpec, row_);
    }
        int64_t dur() const {
      
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::dur>(kSpec, row_);
    }
          TrackTable::Id track_id() const {
        
        return TrackTable::Id{table_->dataframe_.template GetCellUnchecked<ColumnIndex::track_id>(kSpec, row_)};
      }
          std::optional<StringPool::Id> category() const {
        
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::category>(kSpec, row_);
      }
          StringPool::Id value() const {
        
        auto res = table_->dataframe_.template GetCellUnchecked<ColumnIndex::value>(kSpec, row_);
        return res ? *res : StringPool::Id::Null();
      }
        std::optional<uint32_t> arg_set_id() const {
      
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::arg_set_id>(kSpec, row_);
    }
    RowNumber ToRowNumber() const {
      return RowNumber{row_};
    }
   private:
    const StateTable* table_;
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
    StateTable::Id id() const {
        
        return StateTable::Id{cursor_.GetCellUnchecked<ColumnIndex::id>(kSpec)};
      }
    int64_t ts() const {
      
      return cursor_.GetCellUnchecked<ColumnIndex::ts>(kSpec);
    }
    int64_t dur() const {
      
      return cursor_.GetCellUnchecked<ColumnIndex::dur>(kSpec);
    }
      TrackTable::Id track_id() const {
        
        return TrackTable::Id{cursor_.GetCellUnchecked<ColumnIndex::track_id>(kSpec)};
      }
      std::optional<StringPool::Id> category() const {
        
        return cursor_.GetCellUnchecked<ColumnIndex::category>(kSpec);
      }
      StringPool::Id value() const {
        
        auto res = cursor_.GetCellUnchecked<ColumnIndex::value>(kSpec);
        return res ? *res : StringPool::Id::Null();
      }
    std::optional<uint32_t> arg_set_id() const {
      
      return cursor_.GetCellUnchecked<ColumnIndex::arg_set_id>(kSpec);
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

    StateTable::Id id() const {
        
        return StateTable::Id{cursor_.GetCellUnchecked<ColumnIndex::id>(kSpec)};
      }
    int64_t ts() const {
      
      return cursor_.GetCellUnchecked<ColumnIndex::ts>(kSpec);
    }
    int64_t dur() const {
      
      return cursor_.GetCellUnchecked<ColumnIndex::dur>(kSpec);
    }
      TrackTable::Id track_id() const {
        
        return TrackTable::Id{cursor_.GetCellUnchecked<ColumnIndex::track_id>(kSpec)};
      }
      std::optional<StringPool::Id> category() const {
        
        return cursor_.GetCellUnchecked<ColumnIndex::category>(kSpec);
      }
      StringPool::Id value() const {
        
        auto res = cursor_.GetCellUnchecked<ColumnIndex::value>(kSpec);
        return res ? *res : StringPool::Id::Null();
      }
    std::optional<uint32_t> arg_set_id() const {
      
      return cursor_.GetCellUnchecked<ColumnIndex::arg_set_id>(kSpec);
    }
    void set_dur(int64_t res) {
        
      cursor_.SetCellUnchecked<ColumnIndex::dur>(kSpec, res);
    }
      void set_category(std::optional<StringPool::Id> res) {
        
        cursor_.SetCellUnchecked<ColumnIndex::category>(kSpec, res);
    }
      void set_value(StringPool::Id res) {
        
        cursor_.SetCellUnchecked<ColumnIndex::value>(kSpec, std::make_optional(res));
    }
    void set_arg_set_id(std::optional<uint32_t> res) {
        
      cursor_.SetCellUnchecked<ColumnIndex::arg_set_id>(kSpec, res);
    }

   private:
    dataframe::Dataframe* dataframe_;
    dataframe::TypedCursor cursor_;
  };
  class Iterator {
    public:
      explicit Iterator(StateTable* table) : table_(table) {
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
      StateTable::Id id() const {
        
        return StateTable::Id{table_->dataframe_.template GetCellUnchecked<ColumnIndex::id>(kSpec, row_)};
      }
        int64_t ts() const {
      
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::ts>(kSpec, row_);
    }
        int64_t dur() const {
      
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::dur>(kSpec, row_);
    }
          TrackTable::Id track_id() const {
        
        return TrackTable::Id{table_->dataframe_.template GetCellUnchecked<ColumnIndex::track_id>(kSpec, row_)};
      }
          std::optional<StringPool::Id> category() const {
        
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::category>(kSpec, row_);
      }
          StringPool::Id value() const {
        
        auto res = table_->dataframe_.template GetCellUnchecked<ColumnIndex::value>(kSpec, row_);
        return res ? *res : StringPool::Id::Null();
      }
        std::optional<uint32_t> arg_set_id() const {
      
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::arg_set_id>(kSpec, row_);
    }
      void set_dur(int64_t res) {
      
      table_->dataframe_.SetCellUnchecked<ColumnIndex::dur>(kSpec, row_, res);
    }
          void set_category(std::optional<StringPool::Id> res) {
        
        table_->dataframe_.SetCellUnchecked<ColumnIndex::category>(kSpec, row_, res);
    }
          void set_value(StringPool::Id res) {
        
        table_->dataframe_.SetCellUnchecked<ColumnIndex::value>(kSpec, row_, std::make_optional(res));
    }
        void set_arg_set_id(std::optional<uint32_t> res) {
      
      table_->dataframe_.SetCellUnchecked<ColumnIndex::arg_set_id>(kSpec, row_, res);
    }

    private:
      StateTable* table_;
      uint32_t row_ = 0;
  };
  class ConstIterator {
    public:
      explicit ConstIterator(const StateTable* table) : table_(table) {
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
      StateTable::Id id() const {
        
        return StateTable::Id{table_->dataframe_.template GetCellUnchecked<ColumnIndex::id>(kSpec, row_)};
      }
        int64_t ts() const {
      
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::ts>(kSpec, row_);
    }
        int64_t dur() const {
      
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::dur>(kSpec, row_);
    }
          TrackTable::Id track_id() const {
        
        return TrackTable::Id{table_->dataframe_.template GetCellUnchecked<ColumnIndex::track_id>(kSpec, row_)};
      }
          std::optional<StringPool::Id> category() const {
        
        return table_->dataframe_.template GetCellUnchecked<ColumnIndex::category>(kSpec, row_);
      }
          StringPool::Id value() const {
        
        auto res = table_->dataframe_.template GetCellUnchecked<ColumnIndex::value>(kSpec, row_);
        return res ? *res : StringPool::Id::Null();
      }
        std::optional<uint32_t> arg_set_id() const {
      
      return table_->dataframe_.template GetCellUnchecked<ColumnIndex::arg_set_id>(kSpec, row_);
    }

    private:
      const StateTable* table_;
      uint32_t row_ = 0;
  };
  struct IdAndRow {
    Id id;
    RowNumber row_number;
    uint32_t row;
    RowReference row_reference;
  };
  
  struct Row {
    Row(int64_t _ts = {}, int64_t _dur = {}, TrackTable::Id _track_id = {}, std::optional<StringPool::Id> _category = {}, StringPool::Id _value = {}, std::optional<uint32_t> _arg_set_id = {}) : ts(std::move(_ts)), dur(std::move(_dur)), track_id(std::move(_track_id)), category(std::move(_category)), value(std::move(_value)), arg_set_id(std::move(_arg_set_id)) {}

    bool operator==(const Row& other) const {
      return std::equal_to<>()(ts, other.ts) && std::equal_to<>()(dur, other.dur) && std::equal_to<>()(track_id, other.track_id) && std::equal_to<>()(category, other.category) && std::equal_to<>()(value, other.value) && std::equal_to<>()(arg_set_id, other.arg_set_id);
    }

        int64_t ts;
    int64_t dur;
    TrackTable::Id track_id;
    std::optional<StringPool::Id> category;
    StringPool::Id value;
    std::optional<uint32_t> arg_set_id;
  };

  explicit StateTable(StringPool* pool)
      : dataframe_(
        dataframe::Dataframe::CreateFromTypedSpec(kSpec, pool)) {}

  template <typename = void>
  IdAndRow Insert(const Row& row) {
    uint32_t row_count = dataframe_.row_count();
    dataframe_.InsertUnchecked(kSpec, std::monostate(), row.ts, row.dur, row.track_id.value, row.category, std::make_optional(row.value), row.arg_set_id);
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
    return "__intrinsic_state";
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
static_assert(sizeof(StateTable) == sizeof(dataframe::Dataframe));


}  // namespace perfetto::trace_processor::tables

#endif  // SRC_TRACE_PROCESSOR_TABLES_STATE_TABLES_PY_H_

