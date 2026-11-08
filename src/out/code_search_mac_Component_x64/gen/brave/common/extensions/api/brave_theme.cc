// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/common/extensions/api/brave_theme.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/common/extensions/api/brave_theme.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=//brave/common/extensions/api:extensions::api::%(namespace)s

#include "brave/common/extensions/api/brave_theme.h"

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

using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace brave_theme {
//
// Functions
//

namespace SetBraveThemeType {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& type_value = args[0];
    {
      auto* temp = type_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.type = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetBraveThemeType

}  // namespace brave_theme
}  // namespace api
}  // namespace extensions

