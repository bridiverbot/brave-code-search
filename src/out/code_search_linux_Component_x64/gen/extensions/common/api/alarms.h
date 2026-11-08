// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/alarms.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/alarms.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#ifndef EXTENSIONS_COMMON_API_ALARMS_H__
#define EXTENSIONS_COMMON_API_ALARMS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace alarms {

//
// Types
//

struct Alarm {
  Alarm();
  ~Alarm();
  Alarm(const Alarm&) = delete;
  Alarm& operator=(const Alarm&) = delete;
  Alarm(Alarm&& rhs) noexcept;
  Alarm& operator=(Alarm&& rhs) noexcept;

  // Populates a Alarm object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Alarm& out);

  // Populates a Alarm object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, Alarm& out);

  // Creates a deep copy of Alarm.
  Alarm Clone() const;

  // Creates a Alarm object from a base::DictValue, or nullopt on failure.
  static std::optional<Alarm> FromValue(const base::DictValue& value);

  // Creates a Alarm object from a base::Value, or nullopt on failure.
  static std::optional<Alarm> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of thisAlarm
  // object.
  base::DictValue ToValue() const;

  // Name of this alarm.
  std::string name;

  // Time at which this alarm was scheduled to fire, in milliseconds past the
  // epoch (e.g. <code>Date.now() + n</code>).  For performance reasons, the alarm
  // may have been delayed an arbitrary amount beyond this.
  double scheduled_time;

  // If not null, the alarm is a repeating alarm and will fire again in
  // <var>periodInMinutes</var> minutes.
  std::optional<double> period_in_minutes;

  // Whether the alarm should persist across sessions (browser restarts).
  bool persist_across_sessions;

};

struct AlarmCreateInfo {
  AlarmCreateInfo();
  ~AlarmCreateInfo();
  AlarmCreateInfo(const AlarmCreateInfo&) = delete;
  AlarmCreateInfo& operator=(const AlarmCreateInfo&) = delete;
  AlarmCreateInfo(AlarmCreateInfo&& rhs) noexcept;
  AlarmCreateInfo& operator=(AlarmCreateInfo&& rhs) noexcept;

  // Populates a AlarmCreateInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AlarmCreateInfo& out);

  // Populates a AlarmCreateInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AlarmCreateInfo& out);

  // Creates a deep copy of AlarmCreateInfo.
  AlarmCreateInfo Clone() const;

  // Creates a AlarmCreateInfo object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<AlarmCreateInfo> FromValue(const base::DictValue& value);

  // Creates a AlarmCreateInfo object from a base::Value, or nullopt on failure.
  static std::optional<AlarmCreateInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAlarmCreateInfo object.
  base::DictValue ToValue() const;

  // Name of this alarm.
  std::optional<std::string> name;

  // Time at which the alarm should fire, in milliseconds past the epoch (e.g.
  // <code>Date.now() + n</code>).
  std::optional<double> when;

  // <p>Length of time in minutes after which the <code>onAlarm</code> event
  // should fire.</p><p><!-- TODO: need minimum=0 --></p>
  std::optional<double> delay_in_minutes;

  // <p>If set, the onAlarm event should fire every <var>periodInMinutes</var>
  // minutes after the initial event specified by <var>when</var> or
  // <var>delayInMinutes</var>.  If not set, the alarm will only fire
  // once.</p><p><!-- TODO: need minimum=0 --></p>
  std::optional<double> period_in_minutes;

  // Whether the alarm should persist across sessions (browser restarts). In
  // Chrome, this defaults to true to match historical behavior, but you should
  // set this explicitly to maximize compatibility across browsers.
  std::optional<bool> persist_across_sessions;

};


//
// Functions
//

namespace Create {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Optional name to identify this alarm. Defaults to the empty string.
  std::optional<std::string> name;

  // Describes when the alarm should fire.  The initial time must be specified by
  // either <var>when</var> or <var>delayInMinutes</var> (but not both).  If
  // <var>periodInMinutes</var> is set, the alarm will repeat every
  // <var>periodInMinutes</var> minutes after the initial event.  If neither
  // <var>when</var> or <var>delayInMinutes</var> is set for a repeating alarm,
  // <var>periodInMinutes</var> is used as the default for
  // <var>delayInMinutes</var>.
  AlarmCreateInfo alarm_info;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace Create

namespace Get {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The name of the alarm to get. Defaults to the empty string.
  std::optional<std::string> name;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const Alarm& alarm);
}  // namespace Results

}  // namespace Get

namespace GetAll {

namespace Results {

base::ListValue Create(const std::vector<Alarm>& alarms);
}  // namespace Results

}  // namespace GetAll

namespace Clear {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The name of the alarm to clear. Defaults to the empty string.
  std::optional<std::string> name;


 private:
  Params();
};

namespace Results {

base::ListValue Create(bool was_cleared);
}  // namespace Results

}  // namespace Clear

namespace ClearAll {

namespace Results {

base::ListValue Create(bool was_cleared);
}  // namespace Results

}  // namespace ClearAll

//
// Events
//

namespace OnAlarm {

extern const char kEventName[];  // "alarms.onAlarm"

// The alarm that has elapsed.
base::ListValue Create(const Alarm& alarm);
}  // namespace OnAlarm

}  // namespace alarms
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_ALARMS_H__
