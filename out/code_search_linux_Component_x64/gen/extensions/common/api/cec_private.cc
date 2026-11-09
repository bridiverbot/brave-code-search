// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/cec_private.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/cec_private.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#include "extensions/common/api/cec_private.h"

#include <memory>
#include <optional>
#include <ostream>
#include <string>
#include <string_view>
#include <utility>
#include <vector>

#include "base/check.h"
#include "base/check_op.h"
#include "base/notreached.h"
#include "base/strings/string_number_conversions.h"
#include "base/strings/utf_string_conversions.h"
#include "base/values.h"
#include "tools/json_schema_compiler/util.h"
#include <string_view>


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace cec_private {
//
// Types
//

const char* ToString(DisplayCecPowerState enum_param) {
  switch (enum_param) {
    case DisplayCecPowerState::kError:
      return "error";
    case DisplayCecPowerState::kAdapterNotConfigured:
      return "adapterNotConfigured";
    case DisplayCecPowerState::kNoDevice:
      return "noDevice";
    case DisplayCecPowerState::kOn:
      return "on";
    case DisplayCecPowerState::kStandby:
      return "standby";
    case DisplayCecPowerState::kTransitioningToOn:
      return "transitioningToOn";
    case DisplayCecPowerState::kTransitioningToStandby:
      return "transitioningToStandby";
    case DisplayCecPowerState::kUnknown:
      return "unknown";
    case DisplayCecPowerState::kNone:
      return "";
  }
  NOTREACHED();
}

DisplayCecPowerState ParseDisplayCecPowerState(std::string_view enum_string) {
  if (enum_string == "error")
    return DisplayCecPowerState::kError;
  if (enum_string == "adapterNotConfigured")
    return DisplayCecPowerState::kAdapterNotConfigured;
  if (enum_string == "noDevice")
    return DisplayCecPowerState::kNoDevice;
  if (enum_string == "on")
    return DisplayCecPowerState::kOn;
  if (enum_string == "standby")
    return DisplayCecPowerState::kStandby;
  if (enum_string == "transitioningToOn")
    return DisplayCecPowerState::kTransitioningToOn;
  if (enum_string == "transitioningToStandby")
    return DisplayCecPowerState::kTransitioningToStandby;
  if (enum_string == "unknown")
    return DisplayCecPowerState::kUnknown;
  return DisplayCecPowerState::kNone;
}

std::u16string GetDisplayCecPowerStateParseError(std::string_view enum_string) {
  return u"expected \"error\" or \"adapterNotConfigured\" or \"noDevice\" or \"on\" or \"standby\" or \"transitioningToOn\" or \"transitioningToStandby\" or \"unknown\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace SendStandBy {

base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace SendStandBy

namespace SendWakeUp {

base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace SendWakeUp

namespace QueryDisplayCecPowerState {

base::ListValue Results::Create(const std::vector<DisplayCecPowerState>& power_states) {
  base::ListValue create_results;
  create_results.reserve(1);
  {
    std::vector<std::string> powerStates_list;
    for (const auto& it : (power_states)) {
      powerStates_list.emplace_back(cec_private::ToString(it));
    }
    create_results.Append(json_schema_compiler::util::CreateValueFromArray(powerStates_list));
  }

  return create_results;
}
}  // namespace QueryDisplayCecPowerState

}  // namespace cec_private
}  // namespace api
}  // namespace extensions

