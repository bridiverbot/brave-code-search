// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/dns.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/dns.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#include "extensions/common/api/dns.h"

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
namespace dns {
//
// Types
//

ResolveCallbackResolveInfo::ResolveCallbackResolveInfo()
: result_code(0) {}

ResolveCallbackResolveInfo::~ResolveCallbackResolveInfo() = default;
ResolveCallbackResolveInfo::ResolveCallbackResolveInfo(ResolveCallbackResolveInfo&& rhs) noexcept = default;
ResolveCallbackResolveInfo& ResolveCallbackResolveInfo::operator=(ResolveCallbackResolveInfo&& rhs) noexcept = default;
ResolveCallbackResolveInfo ResolveCallbackResolveInfo::Clone() const {
  ResolveCallbackResolveInfo out;
  out.result_code = result_code;
  out.address = address;
  return out;
}

// static
bool ResolveCallbackResolveInfo::Populate(
    const base::DictValue& dict, ResolveCallbackResolveInfo& out) {
  const base::Value* result_code_value = dict.Find("resultCode");
  if (!result_code_value) {
    return false;
  }
  {
    auto temp = (*result_code_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.result_code = *temp;
  }

  const base::Value* address_value = dict.Find("address");
  if (address_value) {
    {
      auto* temp = (*address_value).GetIfString();
      if (!temp) {
        out.address = std::nullopt;
        return false;
      }
      out.address = *temp;
    }
  }

  return true;
}

// static
bool ResolveCallbackResolveInfo::Populate(
    const base::Value& value, ResolveCallbackResolveInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ResolveCallbackResolveInfo> ResolveCallbackResolveInfo::FromValue(const base::DictValue& value) {
  ResolveCallbackResolveInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ResolveCallbackResolveInfo> ResolveCallbackResolveInfo::FromValue(const base::Value& value) {
  ResolveCallbackResolveInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ResolveCallbackResolveInfo::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("resultCode", this->result_code);

  if (this->address) {
    to_value_result.Set("address", *this->address);

  }

  return to_value_result;
}



//
// Functions
//

namespace Resolve {

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
    const base::Value& hostname_value = args[0];
    {
      auto* temp = hostname_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.hostname = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const ResolveCallbackResolveInfo& resolve_info) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((resolve_info).ToValue());

  return create_results;
}
}  // namespace Resolve

}  // namespace dns
}  // namespace api
}  // namespace extensions

