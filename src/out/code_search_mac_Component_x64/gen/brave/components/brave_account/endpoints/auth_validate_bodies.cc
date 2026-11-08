// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/auth_validate_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/auth_validate_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#include "brave/components/brave_account/endpoints/auth_validate_bodies.h"

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

AuthValidateRequestBody::AuthValidateRequestBody()
 {}

AuthValidateRequestBody::~AuthValidateRequestBody() = default;
AuthValidateRequestBody::AuthValidateRequestBody(AuthValidateRequestBody&& rhs) noexcept = default;
AuthValidateRequestBody& AuthValidateRequestBody::operator=(AuthValidateRequestBody&& rhs) noexcept = default;
AuthValidateRequestBody AuthValidateRequestBody::Clone() const {
  AuthValidateRequestBody out;
  return out;
}

// static
bool AuthValidateRequestBody::Populate(
    const base::DictValue& dict, AuthValidateRequestBody& out) {
  return true;
}

// static
bool AuthValidateRequestBody::Populate(
    const base::Value& value, AuthValidateRequestBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AuthValidateRequestBody> AuthValidateRequestBody::FromValue(const base::DictValue& value) {
  AuthValidateRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AuthValidateRequestBody> AuthValidateRequestBody::FromValue(const base::Value& value) {
  AuthValidateRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AuthValidateRequestBody::ToValue() const {
  base::DictValue to_value_result;


  return to_value_result;
}


AuthValidateSuccessBody::AuthValidateSuccessBody()
 {}

AuthValidateSuccessBody::~AuthValidateSuccessBody() = default;
AuthValidateSuccessBody::AuthValidateSuccessBody(AuthValidateSuccessBody&& rhs) noexcept = default;
AuthValidateSuccessBody& AuthValidateSuccessBody::operator=(AuthValidateSuccessBody&& rhs) noexcept = default;
AuthValidateSuccessBody AuthValidateSuccessBody::Clone() const {
  AuthValidateSuccessBody out;
  out.email = email;
  return out;
}

// static
bool AuthValidateSuccessBody::Populate(
    const base::DictValue& dict, AuthValidateSuccessBody& out) {
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
bool AuthValidateSuccessBody::Populate(
    const base::Value& value, AuthValidateSuccessBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AuthValidateSuccessBody> AuthValidateSuccessBody::FromValue(const base::DictValue& value) {
  AuthValidateSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AuthValidateSuccessBody> AuthValidateSuccessBody::FromValue(const base::Value& value) {
  AuthValidateSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AuthValidateSuccessBody::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("email", this->email);


  return to_value_result;
}



}  // namespace endpoints
}  // namespace brave_account

