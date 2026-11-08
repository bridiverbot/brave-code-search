// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/login_init_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/login_init_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#include "brave/components/brave_account/endpoints/login_init_bodies.h"

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

LoginInitRequestBody::LoginInitRequestBody()
 {}

LoginInitRequestBody::~LoginInitRequestBody() = default;
LoginInitRequestBody::LoginInitRequestBody(LoginInitRequestBody&& rhs) noexcept = default;
LoginInitRequestBody& LoginInitRequestBody::operator=(LoginInitRequestBody&& rhs) noexcept = default;
LoginInitRequestBody LoginInitRequestBody::Clone() const {
  LoginInitRequestBody out;
  out.email = email;
  out.serialized_ke1 = serialized_ke1;
  return out;
}

// static
bool LoginInitRequestBody::Populate(
    const base::DictValue& dict, LoginInitRequestBody& out) {
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

  const base::Value* serialized_ke1_value = dict.Find("serializedKE1");
  if (!serialized_ke1_value) {
    return false;
  }
  {
    auto* temp = (*serialized_ke1_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.serialized_ke1 = *temp;
  }

  return true;
}

// static
bool LoginInitRequestBody::Populate(
    const base::Value& value, LoginInitRequestBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<LoginInitRequestBody> LoginInitRequestBody::FromValue(const base::DictValue& value) {
  LoginInitRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<LoginInitRequestBody> LoginInitRequestBody::FromValue(const base::Value& value) {
  LoginInitRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue LoginInitRequestBody::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("email", this->email);

  to_value_result.Set("serializedKE1", this->serialized_ke1);


  return to_value_result;
}


LoginInitSuccessBody::LoginInitSuccessBody()
 {}

LoginInitSuccessBody::~LoginInitSuccessBody() = default;
LoginInitSuccessBody::LoginInitSuccessBody(LoginInitSuccessBody&& rhs) noexcept = default;
LoginInitSuccessBody& LoginInitSuccessBody::operator=(LoginInitSuccessBody&& rhs) noexcept = default;
LoginInitSuccessBody LoginInitSuccessBody::Clone() const {
  LoginInitSuccessBody out;
  out.login_token = login_token;
  out.serialized_ke2 = serialized_ke2;
  return out;
}

// static
bool LoginInitSuccessBody::Populate(
    const base::DictValue& dict, LoginInitSuccessBody& out) {
  const base::Value* login_token_value = dict.Find("loginToken");
  if (!login_token_value) {
    return false;
  }
  {
    auto* temp = (*login_token_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.login_token = *temp;
  }

  const base::Value* serialized_ke2_value = dict.Find("serializedKE2");
  if (!serialized_ke2_value) {
    return false;
  }
  {
    auto* temp = (*serialized_ke2_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.serialized_ke2 = *temp;
  }

  return true;
}

// static
bool LoginInitSuccessBody::Populate(
    const base::Value& value, LoginInitSuccessBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<LoginInitSuccessBody> LoginInitSuccessBody::FromValue(const base::DictValue& value) {
  LoginInitSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<LoginInitSuccessBody> LoginInitSuccessBody::FromValue(const base::Value& value) {
  LoginInitSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue LoginInitSuccessBody::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("loginToken", this->login_token);

  to_value_result.Set("serializedKE2", this->serialized_ke2);


  return to_value_result;
}



}  // namespace endpoints
}  // namespace brave_account

