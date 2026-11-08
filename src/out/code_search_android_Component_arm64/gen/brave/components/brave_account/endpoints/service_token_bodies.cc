// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/service_token_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/service_token_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#include "brave/components/brave_account/endpoints/service_token_bodies.h"

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

namespace brave_account {
namespace endpoints {
//
// Types
//

ServiceTokenRequestBody::ServiceTokenRequestBody()
 {}

ServiceTokenRequestBody::~ServiceTokenRequestBody() = default;
ServiceTokenRequestBody::ServiceTokenRequestBody(ServiceTokenRequestBody&& rhs) noexcept = default;
ServiceTokenRequestBody& ServiceTokenRequestBody::operator=(ServiceTokenRequestBody&& rhs) noexcept = default;
ServiceTokenRequestBody ServiceTokenRequestBody::Clone() const {
  ServiceTokenRequestBody out;
  out.service = service;
  return out;
}

// static
bool ServiceTokenRequestBody::Populate(
    const base::DictValue& dict, ServiceTokenRequestBody& out) {
  const base::Value* service_value = dict.Find("service");
  if (!service_value) {
    return false;
  }
  {
    auto* temp = (*service_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.service = *temp;
  }

  return true;
}

// static
bool ServiceTokenRequestBody::Populate(
    const base::Value& value, ServiceTokenRequestBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ServiceTokenRequestBody> ServiceTokenRequestBody::FromValue(const base::DictValue& value) {
  ServiceTokenRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ServiceTokenRequestBody> ServiceTokenRequestBody::FromValue(const base::Value& value) {
  ServiceTokenRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ServiceTokenRequestBody::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("service", this->service);


  return to_value_result;
}


ServiceTokenSuccessBody::ServiceTokenSuccessBody()
 {}

ServiceTokenSuccessBody::~ServiceTokenSuccessBody() = default;
ServiceTokenSuccessBody::ServiceTokenSuccessBody(ServiceTokenSuccessBody&& rhs) noexcept = default;
ServiceTokenSuccessBody& ServiceTokenSuccessBody::operator=(ServiceTokenSuccessBody&& rhs) noexcept = default;
ServiceTokenSuccessBody ServiceTokenSuccessBody::Clone() const {
  ServiceTokenSuccessBody out;
  out.auth_token = auth_token;
  return out;
}

// static
bool ServiceTokenSuccessBody::Populate(
    const base::DictValue& dict, ServiceTokenSuccessBody& out) {
  const base::Value* auth_token_value = dict.Find("authToken");
  if (!auth_token_value) {
    return false;
  }
  {
    auto* temp = (*auth_token_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.auth_token = *temp;
  }

  return true;
}

// static
bool ServiceTokenSuccessBody::Populate(
    const base::Value& value, ServiceTokenSuccessBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ServiceTokenSuccessBody> ServiceTokenSuccessBody::FromValue(const base::DictValue& value) {
  ServiceTokenSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ServiceTokenSuccessBody> ServiceTokenSuccessBody::FromValue(const base::Value& value) {
  ServiceTokenSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ServiceTokenSuccessBody::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("authToken", this->auth_token);


  return to_value_result;
}



}  // namespace endpoints
}  // namespace brave_account

