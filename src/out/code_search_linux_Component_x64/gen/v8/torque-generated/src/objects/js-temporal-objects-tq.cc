#include "src/objects/js-temporal-objects.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=7&c=1
class TorqueGeneratedJSTemporalDurationAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 12;
  // https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=9&c=3
  static constexpr int kDurationOffset = 12;
  static constexpr int kDurationOffsetEnd = kDurationOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kDurationOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kDurationOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kDurationOffsetEnd + 1;
  static constexpr int kHeaderSize = kDurationOffsetEnd + 1;

  static_assert(kDurationOffset == offsetof(JSTemporalDuration, duration_),
                "Value of JSTemporalDuration::kDurationOffset defined in Torque and offset of field JSTemporalDuration::duration in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=12&c=1
class TorqueGeneratedJSTemporalInstantAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 12;
  // https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=14&c=3
  static constexpr int kInstantOffset = 12;
  static constexpr int kInstantOffsetEnd = kInstantOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kInstantOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kInstantOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kInstantOffsetEnd + 1;
  static constexpr int kHeaderSize = kInstantOffsetEnd + 1;

  static_assert(kInstantOffset == offsetof(JSTemporalInstant, instant_),
                "Value of JSTemporalInstant::kInstantOffset defined in Torque and offset of field JSTemporalInstant::instant in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=17&c=1
class TorqueGeneratedJSTemporalPlainDateTimeAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 12;
  // https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=19&c=3
  static constexpr int kDateTimeOffset = 12;
  static constexpr int kDateTimeOffsetEnd = kDateTimeOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kDateTimeOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kDateTimeOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kDateTimeOffsetEnd + 1;
  static constexpr int kHeaderSize = kDateTimeOffsetEnd + 1;

  static_assert(kDateTimeOffset == offsetof(JSTemporalPlainDateTime, date_time_),
                "Value of JSTemporalPlainDateTime::kDateTimeOffset defined in Torque and offset of field JSTemporalPlainDateTime::date_time in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=22&c=1
class TorqueGeneratedJSTemporalPlainDateAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 12;
  // https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=24&c=3
  static constexpr int kDateOffset = 12;
  static constexpr int kDateOffsetEnd = kDateOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kDateOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kDateOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kDateOffsetEnd + 1;
  static constexpr int kHeaderSize = kDateOffsetEnd + 1;

  static_assert(kDateOffset == offsetof(JSTemporalPlainDate, date_),
                "Value of JSTemporalPlainDate::kDateOffset defined in Torque and offset of field JSTemporalPlainDate::date in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=27&c=1
class TorqueGeneratedJSTemporalPlainMonthDayAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 12;
  // https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=29&c=3
  static constexpr int kMonthDayOffset = 12;
  static constexpr int kMonthDayOffsetEnd = kMonthDayOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kMonthDayOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kMonthDayOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kMonthDayOffsetEnd + 1;
  static constexpr int kHeaderSize = kMonthDayOffsetEnd + 1;

  static_assert(kMonthDayOffset == offsetof(JSTemporalPlainMonthDay, month_day_),
                "Value of JSTemporalPlainMonthDay::kMonthDayOffset defined in Torque and offset of field JSTemporalPlainMonthDay::month_day in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=32&c=1
class TorqueGeneratedJSTemporalPlainTimeAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 12;
  // https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=34&c=3
  static constexpr int kTimeOffset = 12;
  static constexpr int kTimeOffsetEnd = kTimeOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kTimeOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kTimeOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kTimeOffsetEnd + 1;
  static constexpr int kHeaderSize = kTimeOffsetEnd + 1;

  static_assert(kTimeOffset == offsetof(JSTemporalPlainTime, time_),
                "Value of JSTemporalPlainTime::kTimeOffset defined in Torque and offset of field JSTemporalPlainTime::time in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=37&c=1
class TorqueGeneratedJSTemporalPlainYearMonthAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 12;
  // https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=39&c=3
  static constexpr int kYearMonthOffset = 12;
  static constexpr int kYearMonthOffsetEnd = kYearMonthOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kYearMonthOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kYearMonthOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kYearMonthOffsetEnd + 1;
  static constexpr int kHeaderSize = kYearMonthOffsetEnd + 1;

  static_assert(kYearMonthOffset == offsetof(JSTemporalPlainYearMonth, year_month_),
                "Value of JSTemporalPlainYearMonth::kYearMonthOffset defined in Torque and offset of field JSTemporalPlainYearMonth::year_month in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=42&c=1
class TorqueGeneratedJSTemporalZonedDateTimeAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 12;
  // https://crsrc.org/c/v8/src/objects/js-temporal-objects.tq?l=44&c=3
  static constexpr int kZonedDateTimeOffset = 12;
  static constexpr int kZonedDateTimeOffsetEnd = kZonedDateTimeOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kZonedDateTimeOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kZonedDateTimeOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kZonedDateTimeOffsetEnd + 1;
  static constexpr int kHeaderSize = kZonedDateTimeOffsetEnd + 1;

  static_assert(kZonedDateTimeOffset == offsetof(JSTemporalZonedDateTime, zoned_date_time_),
                "Value of JSTemporalZonedDateTime::kZonedDateTimeOffset defined in Torque and offset of field JSTemporalZonedDateTime::zoned_date_time in C++ do not match");
};

} // namespace internal
} // namespace v8
