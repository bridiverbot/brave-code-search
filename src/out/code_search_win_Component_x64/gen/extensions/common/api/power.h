// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/power.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/power.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#ifndef EXTENSIONS_COMMON_API_POWER_H__
#define EXTENSIONS_COMMON_API_POWER_H__

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
namespace power {

//
// Types
//

enum class Level {
  kNone = 0,
  kSystem,
  kDisplay,
  kMaxValue = kDisplay,
};


const char* ToString(Level as_enum);
Level ParseLevel(std::string_view as_string);
std::u16string GetLevelParseError(std::string_view as_string);


//
// Functions
//

namespace RequestKeepAwake {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  Level level;


 private:
  Params();
};

}  // namespace RequestKeepAwake

namespace ReleaseKeepAwake {

}  // namespace ReleaseKeepAwake

namespace ReportActivity {

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace ReportActivity

}  // namespace power
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_POWER_H__
