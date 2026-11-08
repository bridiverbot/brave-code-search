// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/resources_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/resources_private.idl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#include "chrome/common/extensions/api/resources_private.h"

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
namespace resources_private {
//
// Types
//

const char* ToString(Component enum_param) {
  switch (enum_param) {
    case Component::kIdentity:
      return "identity";
    case Component::kPdf:
      return "pdf";
    case Component::kNone:
      return "";
  }
  NOTREACHED();
}

Component ParseComponent(std::string_view enum_string) {
  if (enum_string == "identity")
    return Component::kIdentity;
  if (enum_string == "pdf")
    return Component::kPdf;
  return Component::kNone;
}

std::u16string GetComponentParseError(std::string_view enum_string) {
  return u"expected \"identity\" or \"pdf\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace GetStrings {

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
    const base::Value& component_value = args[0];
    {
      const std::string* component_as_string = component_value.GetIfString();
      if (!component_as_string) {
        return std::nullopt;
      }
      params.component = ParseComponent(*component_as_string);
      if (params.component == Component()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


Results::Result::Result()
 {}

Results::Result::~Result() = default;
Results::Result::Result(Result&& rhs) noexcept = default;
Results::Result& Results::Result::operator=(Result&& rhs) noexcept = default;
base::DictValue Results::Result::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::ListValue Results::Create(const Result& result) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetStrings

}  // namespace resources_private
}  // namespace api
}  // namespace extensions

