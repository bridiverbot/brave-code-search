// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/login_finalize_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/login_finalize_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#include "brave/components/brave_account/endpoints/login_finalize_bodies.h"

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

LoginFinalizeRequestBody::LoginFinalizeRequestBody()
 {}

LoginFinalizeRequestBody::~LoginFinalizeRequestBody() = default;
LoginFinalizeRequestBody::LoginFinalizeRequestBody(LoginFinalizeRequestBody&& rhs) noexcept = default;
LoginFinalizeRequestBody& LoginFinalizeRequestBody::operator=(LoginFinalizeRequestBody&& rhs) noexcept = default;
LoginFinalizeRequestBody LoginFinalizeRequestBody::Clone() const {
  LoginFinalizeRequestBody out;
  out.client_mac = client_mac;
  return out;
}

// static
bool LoginFinalizeRequestBody::Populate(
    const base::DictValue& dict, LoginFinalizeRequestBody& out) {
  const base::Value* client_mac_value = dict.Find("clientMac");
  if (!client_mac_value) {
    return false;
  }
  {
    auto* temp = (*client_mac_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.client_mac = *temp;
  }

  return true;
}

// static
bool LoginFinalizeRequestBody::Populate(
    const base::Value& value, LoginFinalizeRequestBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<LoginFinalizeRequestBody> LoginFinalizeRequestBody::FromValue(const base::DictValue& value) {
  LoginFinalizeRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<LoginFinalizeRequestBody> LoginFinalizeRequestBody::FromValue(const base::Value& value) {
  LoginFinalizeRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue LoginFinalizeRequestBody::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("clientMac", this->client_mac);


  return to_value_result;
}


LoginFinalizeSuccessBody::LoginFinalizeSuccessBody()
 {}

LoginFinalizeSuccessBody::~LoginFinalizeSuccessBody() = default;
LoginFinalizeSuccessBody::LoginFinalizeSuccessBody(LoginFinalizeSuccessBody&& rhs) noexcept = default;
LoginFinalizeSuccessBody& LoginFinalizeSuccessBody::operator=(LoginFinalizeSuccessBody&& rhs) noexcept = default;
LoginFinalizeSuccessBody LoginFinalizeSuccessBody::Clone() const {
  LoginFinalizeSuccessBody out;
  out.auth_token = auth_token;
  out.email = email;
  return out;
}

// static
bool LoginFinalizeSuccessBody::Populate(
    const base::DictValue& dict, LoginFinalizeSuccessBody& out) {
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

  const base::Value* email_value = dict.Find("email");
  if (!email_value) {
    return false;
  }
  {
    auto* temp = (*email_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.email = *temp;
  }

  return true;
}

// static
bool LoginFinalizeSuccessBody::Populate(
    const base::Value& value, LoginFinalizeSuccessBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<LoginFinalizeSuccessBody> LoginFinalizeSuccessBody::FromValue(const base::DictValue& value) {
  LoginFinalizeSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<LoginFinalizeSuccessBody> LoginFinalizeSuccessBody::FromValue(const base::Value& value) {
  LoginFinalizeSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue LoginFinalizeSuccessBody::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("authToken", this->auth_token);

  to_value_result.Set("email", this->email);


  return to_value_result;
}



}  // namespace endpoints
}  // namespace brave_account

