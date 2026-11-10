// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/common/extensions/api/web_discovery.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/common/extensions/api/web_discovery.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=//brave/common/extensions/api:extensions::api::%(namespace)s

#include "brave/common/extensions/api/web_discovery.h"

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
namespace web_discovery {
//
// Functions
//

namespace RetrieveBackupResults {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


Results::Result::Result()
: response_code(0) {}

Results::Result::~Result() = default;
Results::Result::Result(Result&& rhs) noexcept = default;
Results::Result& Results::Result::operator=(Result&& rhs) noexcept = default;
base::DictValue Results::Result::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("responseCode", this->response_code);

  to_value_result.Set("html", this->html);


  return to_value_result;
}


base::ListValue Results::Create(const Result& result) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace RetrieveBackupResults

namespace IsWebDiscoveryExtensionEnabled {

base::ListValue Results::Create(bool enabled) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(enabled);

  return create_results;
}
}  // namespace IsWebDiscoveryExtensionEnabled

}  // namespace web_discovery
}  // namespace api
}  // namespace extensions

