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

#ifndef EXTENSIONS_COMMON_API_CEC_PRIVATE_H__
#define EXTENSIONS_COMMON_API_CEC_PRIVATE_H__

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
namespace cec_private {

//
// Types
//

enum class DisplayCecPowerState {
  kNone = 0,
  kError,
  kAdapterNotConfigured,
  kNoDevice,
  kOn,
  kStandby,
  kTransitioningToOn,
  kTransitioningToStandby,
  kUnknown,
  kMaxValue = kUnknown,
};


const char* ToString(DisplayCecPowerState as_enum);
DisplayCecPowerState ParseDisplayCecPowerState(std::string_view as_string);
std::u16string GetDisplayCecPowerStateParseError(std::string_view as_string);


//
// Functions
//

namespace SendStandBy {

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace SendStandBy

namespace SendWakeUp {

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace SendWakeUp

namespace QueryDisplayCecPowerState {

namespace Results {

base::ListValue Create(const std::vector<DisplayCecPowerState>& power_states);
}  // namespace Results

}  // namespace QueryDisplayCecPowerState

}  // namespace cec_private
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_CEC_PRIVATE_H__
