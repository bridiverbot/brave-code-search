// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/verify_complete_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/verify_complete_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#include "brave/components/brave_account/endpoints/verify_complete_bodies.h"

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

VerifyCompleteRequestBody::VerifyCompleteRequestBody()
 {}

VerifyCompleteRequestBody::~VerifyCompleteRequestBody() = default;
VerifyCompleteRequestBody::VerifyCompleteRequestBody(VerifyCompleteRequestBody&& rhs) noexcept = default;
VerifyCompleteRequestBody& VerifyCompleteRequestBody::operator=(VerifyCompleteRequestBody&& rhs) noexcept = default;
VerifyCompleteRequestBody VerifyCompleteRequestBody::Clone() const {
  VerifyCompleteRequestBody out;
  out.code = code;
  return out;
}

// static
bool VerifyCompleteRequestBody::Populate(
    const base::DictValue& dict, VerifyCompleteRequestBody& out) {
  const base::Value* code_value = dict.Find("code");
  if (!code_value) {
    return false;
  }
  {
    auto* temp = (*code_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.code = *temp;
  }

  return true;
}

// static
bool VerifyCompleteRequestBody::Populate(
    const base::Value& value, VerifyCompleteRequestBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<VerifyCompleteRequestBody> VerifyCompleteRequestBody::FromValue(const base::DictValue& value) {
  VerifyCompleteRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<VerifyCompleteRequestBody> VerifyCompleteRequestBody::FromValue(const base::Value& value) {
  VerifyCompleteRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue VerifyCompleteRequestBody::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("code", this->code);


  return to_value_result;
}


VerifyCompleteSuccessBody::VerifyCompleteSuccessBody()
 {}

VerifyCompleteSuccessBody::~VerifyCompleteSuccessBody() = default;
VerifyCompleteSuccessBody::VerifyCompleteSuccessBody(VerifyCompleteSuccessBody&& rhs) noexcept = default;
VerifyCompleteSuccessBody& VerifyCompleteSuccessBody::operator=(VerifyCompleteSuccessBody&& rhs) noexcept = default;
VerifyCompleteSuccessBody VerifyCompleteSuccessBody::Clone() const {
  VerifyCompleteSuccessBody out;
  out.auth_token = auth_token.Clone();
  out.email = email;
  return out;
}

// static
bool VerifyCompleteSuccessBody::Populate(
    const base::DictValue& dict, VerifyCompleteSuccessBody& out) {
  const base::Value* auth_token_value = dict.Find("authToken");
  if (!auth_token_value) {
    return false;
  }
  {
    out.auth_token = (*auth_token_value).Clone();
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
bool VerifyCompleteSuccessBody::Populate(
    const base::Value& value, VerifyCompleteSuccessBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<VerifyCompleteSuccessBody> VerifyCompleteSuccessBody::FromValue(const base::DictValue& value) {
  VerifyCompleteSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<VerifyCompleteSuccessBody> VerifyCompleteSuccessBody::FromValue(const base::Value& value) {
  VerifyCompleteSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue VerifyCompleteSuccessBody::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("authToken", (this->auth_token).Clone());

  to_value_result.Set("email", this->email);


  return to_value_result;
}



}  // namespace endpoints
}  // namespace brave_account

