// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/permissions.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/permissions.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#include "extensions/common/api/permissions.h"

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
namespace permissions {
//
// Types
//

Permissions::Permissions()
 {}

Permissions::~Permissions() = default;
Permissions::Permissions(Permissions&& rhs) noexcept = default;
Permissions& Permissions::operator=(Permissions&& rhs) noexcept = default;
Permissions Permissions::Clone() const {
  Permissions out;
  out.permissions = permissions;
  out.origins = origins;
  return out;
}

// static
bool Permissions::Populate(
    const base::DictValue& dict, Permissions& out) {
  const base::Value* permissions_value = dict.Find("permissions");
  if (permissions_value) {
    {
      if (!(*permissions_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*permissions_value).GetList(), out.permissions)) {
          return false;
        }
      }
    }
  }

  const base::Value* origins_value = dict.Find("origins");
  if (origins_value) {
    {
      if (!(*origins_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*origins_value).GetList(), out.origins)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool Permissions::Populate(
    const base::Value& value, Permissions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Permissions> Permissions::FromValue(const base::DictValue& value) {
  Permissions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Permissions> Permissions::FromValue(const base::Value& value) {
  Permissions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Permissions::ToValue() const {
  base::DictValue to_value_result;

  if (this->permissions) {
    to_value_result.Set("permissions", json_schema_compiler::util::CreateValueFromArray(*this->permissions));

  }
  if (this->origins) {
    to_value_result.Set("origins", json_schema_compiler::util::CreateValueFromArray(*this->origins));

  }

  return to_value_result;
}



//
// Functions
//

namespace GetAll {

base::ListValue Results::Create(const Permissions& permissions) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((permissions).ToValue());

  return create_results;
}
}  // namespace GetAll

namespace Contains {

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
    const base::Value& permissions_value = args[0];
    {
      if (!permissions_value.is_dict()) {
        return std::nullopt;
      }
      if (!Permissions::Populate(permissions_value.GetDict(), params.permissions)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(bool result) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace Contains

namespace Request {

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
    const base::Value& permissions_value = args[0];
    {
      if (!permissions_value.is_dict()) {
        return std::nullopt;
      }
      if (!Permissions::Populate(permissions_value.GetDict(), params.permissions)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(bool granted) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(granted);

  return create_results;
}
}  // namespace Request

namespace Remove {

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
    const base::Value& permissions_value = args[0];
    {
      if (!permissions_value.is_dict()) {
        return std::nullopt;
      }
      if (!Permissions::Populate(permissions_value.GetDict(), params.permissions)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(bool removed) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(removed);

  return create_results;
}
}  // namespace Remove

namespace AddHostAccessRequest {

Params::Request::Request()
 {}

Params::Request::~Request() = default;
Params::Request::Request(Request&& rhs) noexcept = default;
Params::Request& Params::Request::operator=(Request&& rhs) noexcept = default;
Params::Request Params::Request::Clone() const {
  Request out;
  out.document_id = document_id;
  out.tab_id = tab_id;
  out.pattern = pattern;
  return out;
}

// static
bool Params::Request::Populate(
    const base::DictValue& dict, Request& out) {
  const base::Value* document_id_value = dict.Find("documentId");
  if (document_id_value) {
    {
      auto* temp = (*document_id_value).GetIfString();
      if (!temp) {
        out.document_id = std::nullopt;
        return false;
      }
      out.document_id = *temp;
    }
  }

  const base::Value* tab_id_value = dict.Find("tabId");
  if (tab_id_value) {
    {
      auto temp = (*tab_id_value).GetIfDouble();
      if (!temp.has_value()) {
        out.tab_id = std::nullopt;
        return false;
      }
      out.tab_id = *temp;
    }
  }

  const base::Value* pattern_value = dict.Find("pattern");
  if (pattern_value) {
    {
      auto* temp = (*pattern_value).GetIfString();
      if (!temp) {
        out.pattern = std::nullopt;
        return false;
      }
      out.pattern = *temp;
    }
  }

  return true;
}

// static
bool Params::Request::Populate(
    const base::Value& value, Request& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Request> Params::Request::FromValue(const base::DictValue& value) {
  Request out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Request> Params::Request::FromValue(const base::Value& value) {
  Request out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      if (!Request::Populate(request_value.GetDict(), params.request)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace AddHostAccessRequest

namespace RemoveHostAccessRequest {

Params::Request::Request()
 {}

Params::Request::~Request() = default;
Params::Request::Request(Request&& rhs) noexcept = default;
Params::Request& Params::Request::operator=(Request&& rhs) noexcept = default;
Params::Request Params::Request::Clone() const {
  Request out;
  out.document_id = document_id;
  out.tab_id = tab_id;
  out.pattern = pattern;
  return out;
}

// static
bool Params::Request::Populate(
    const base::DictValue& dict, Request& out) {
  const base::Value* document_id_value = dict.Find("documentId");
  if (document_id_value) {
    {
      auto* temp = (*document_id_value).GetIfString();
      if (!temp) {
        out.document_id = std::nullopt;
        return false;
      }
      out.document_id = *temp;
    }
  }

  const base::Value* tab_id_value = dict.Find("tabId");
  if (tab_id_value) {
    {
      auto temp = (*tab_id_value).GetIfDouble();
      if (!temp.has_value()) {
        out.tab_id = std::nullopt;
        return false;
      }
      out.tab_id = *temp;
    }
  }

  const base::Value* pattern_value = dict.Find("pattern");
  if (pattern_value) {
    {
      auto* temp = (*pattern_value).GetIfString();
      if (!temp) {
        out.pattern = std::nullopt;
        return false;
      }
      out.pattern = *temp;
    }
  }

  return true;
}

// static
bool Params::Request::Populate(
    const base::Value& value, Request& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Request> Params::Request::FromValue(const base::DictValue& value) {
  Request out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Request> Params::Request::FromValue(const base::Value& value) {
  Request out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      if (!Request::Populate(request_value.GetDict(), params.request)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace RemoveHostAccessRequest

//
// Events
//

namespace OnAdded {

const char kEventName[] = "permissions.onAdded";

base::ListValue Create(const Permissions& permissions) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((permissions).ToValue());

  return create_results;
}

}  // namespace OnAdded

namespace OnRemoved {

const char kEventName[] = "permissions.onRemoved";

base::ListValue Create(const Permissions& permissions) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((permissions).ToValue());

  return create_results;
}

}  // namespace OnRemoved

}  // namespace permissions
}  // namespace api
}  // namespace extensions

