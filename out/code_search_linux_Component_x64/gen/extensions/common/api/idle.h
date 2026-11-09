// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/idle.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/idle.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#ifndef EXTENSIONS_COMMON_API_IDLE_H__
#define EXTENSIONS_COMMON_API_IDLE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include <string_view>


namespace extensions {
namespace api {
namespace idle {

//
// Types
//

enum class IdleState {
  kNone = 0,
  kActive,
  kIdle,
  kLocked,
  kMaxValue = kLocked,
};


const char* ToString(IdleState as_enum);
IdleState ParseIdleState(std::string_view as_string);
std::u16string GetIdleStateParseError(std::string_view as_string);


//
// Functions
//

namespace QueryState {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The system is considered idle if detectionIntervalInSeconds seconds have
  // elapsed since the last user input detected.
  int detection_interval_in_seconds;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const IdleState& new_state);
}  // namespace Results

}  // namespace QueryState

namespace SetDetectionInterval {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Threshold, in seconds, used to determine when the system is in an idle state.
  int interval_in_seconds;


 private:
  Params();
};

}  // namespace SetDetectionInterval

namespace GetAutoLockDelay {

namespace Results {

// Time, in seconds, until the screen is locked automatically while idle. This
// is zero if the screen never locks automatically.
base::ListValue Create(int delay);
}  // namespace Results

}  // namespace GetAutoLockDelay

//
// Events
//

namespace OnStateChanged {

extern const char kEventName[];  // "idle.onStateChanged"

base::ListValue Create(const IdleState& new_state);
}  // namespace OnStateChanged

}  // namespace idle
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_IDLE_H__
