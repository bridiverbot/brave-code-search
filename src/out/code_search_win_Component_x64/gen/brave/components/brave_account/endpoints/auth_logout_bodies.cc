// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/auth_logout_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/auth_logout_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#include "brave/components/brave_account/endpoints/auth_logout_bodies.h"

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

AuthLogoutRequestBody::AuthLogoutRequestBody()
 {}

AuthLogoutRequestBody::~AuthLogoutRequestBody() = default;
AuthLogoutRequestBody::AuthLogoutRequestBody(AuthLogoutRequestBody&& rhs) noexcept = default;
AuthLogoutRequestBody& AuthLogoutRequestBody::operator=(AuthLogoutRequestBody&& rhs) noexcept = default;
AuthLogoutRequestBody AuthLogoutRequestBody::Clone() const {
  AuthLogoutRequestBody out;
  return out;
}

// static
bool AuthLogoutRequestBody::Populate(
    const base::DictValue& dict, AuthLogoutRequestBody& out) {
  return true;
}

// static
bool AuthLogoutRequestBody::Populate(
    const base::Value& value, AuthLogoutRequestBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AuthLogoutRequestBody> AuthLogoutRequestBody::FromValue(const base::DictValue& value) {
  AuthLogoutRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AuthLogoutRequestBody> AuthLogoutRequestBody::FromValue(const base::Value& value) {
  AuthLogoutRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AuthLogoutRequestBody::ToValue() const {
  base::DictValue to_value_result;


  return to_value_result;
}


AuthLogoutSuccessBody::AuthLogoutSuccessBody()
 {}

AuthLogoutSuccessBody::~AuthLogoutSuccessBody() = default;
AuthLogoutSuccessBody::AuthLogoutSuccessBody(AuthLogoutSuccessBody&& rhs) noexcept = default;
AuthLogoutSuccessBody& AuthLogoutSuccessBody::operator=(AuthLogoutSuccessBody&& rhs) noexcept = default;
AuthLogoutSuccessBody AuthLogoutSuccessBody::Clone() const {
  AuthLogoutSuccessBody out;
  return out;
}

// static
bool AuthLogoutSuccessBody::Populate(
    const base::DictValue& dict, AuthLogoutSuccessBody& out) {
  return true;
}

// static
bool AuthLogoutSuccessBody::Populate(
    const base::Value& value, AuthLogoutSuccessBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AuthLogoutSuccessBody> AuthLogoutSuccessBody::FromValue(const base::DictValue& value) {
  AuthLogoutSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AuthLogoutSuccessBody> AuthLogoutSuccessBody::FromValue(const base::Value& value) {
  AuthLogoutSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AuthLogoutSuccessBody::ToValue() const {
  base::DictValue to_value_result;


  return to_value_result;
}


AuthLogoutErrorBody::AuthLogoutErrorBody()
 {}

AuthLogoutErrorBody::~AuthLogoutErrorBody() = default;
AuthLogoutErrorBody::AuthLogoutErrorBody(AuthLogoutErrorBody&& rhs) noexcept = default;
AuthLogoutErrorBody& AuthLogoutErrorBody::operator=(AuthLogoutErrorBody&& rhs) noexcept = default;
AuthLogoutErrorBody AuthLogoutErrorBody::Clone() const {
  AuthLogoutErrorBody out;
  return out;
}

// static
bool AuthLogoutErrorBody::Populate(
    const base::DictValue& dict, AuthLogoutErrorBody& out) {
  return true;
}

// static
bool AuthLogoutErrorBody::Populate(
    const base::Value& value, AuthLogoutErrorBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AuthLogoutErrorBody> AuthLogoutErrorBody::FromValue(const base::DictValue& value) {
  AuthLogoutErrorBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AuthLogoutErrorBody> AuthLogoutErrorBody::FromValue(const base::Value& value) {
  AuthLogoutErrorBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AuthLogoutErrorBody::ToValue() const {
  base::DictValue to_value_result;


  return to_value_result;
}



}  // namespace endpoints
}  // namespace brave_account

