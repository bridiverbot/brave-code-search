// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/password_finalize_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/password_finalize_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#include "brave/components/brave_account/endpoints/password_finalize_bodies.h"

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

PasswordFinalizeRequestBody::PasswordFinalizeRequestBody()
 {}

PasswordFinalizeRequestBody::~PasswordFinalizeRequestBody() = default;
PasswordFinalizeRequestBody::PasswordFinalizeRequestBody(PasswordFinalizeRequestBody&& rhs) noexcept = default;
PasswordFinalizeRequestBody& PasswordFinalizeRequestBody::operator=(PasswordFinalizeRequestBody&& rhs) noexcept = default;
PasswordFinalizeRequestBody PasswordFinalizeRequestBody::Clone() const {
  PasswordFinalizeRequestBody out;
  out.serialized_record = serialized_record;
  return out;
}

// static
bool PasswordFinalizeRequestBody::Populate(
    const base::DictValue& dict, PasswordFinalizeRequestBody& out) {
  const base::Value* serialized_record_value = dict.Find("serializedRecord");
  if (!serialized_record_value) {
    return false;
  }
  {
    auto* temp = (*serialized_record_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.serialized_record = *temp;
  }

  return true;
}

// static
bool PasswordFinalizeRequestBody::Populate(
    const base::Value& value, PasswordFinalizeRequestBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PasswordFinalizeRequestBody> PasswordFinalizeRequestBody::FromValue(const base::DictValue& value) {
  PasswordFinalizeRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PasswordFinalizeRequestBody> PasswordFinalizeRequestBody::FromValue(const base::Value& value) {
  PasswordFinalizeRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PasswordFinalizeRequestBody::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("serializedRecord", this->serialized_record);


  return to_value_result;
}


PasswordFinalizeSuccessBody::PasswordFinalizeSuccessBody()
 {}

PasswordFinalizeSuccessBody::~PasswordFinalizeSuccessBody() = default;
PasswordFinalizeSuccessBody::PasswordFinalizeSuccessBody(PasswordFinalizeSuccessBody&& rhs) noexcept = default;
PasswordFinalizeSuccessBody& PasswordFinalizeSuccessBody::operator=(PasswordFinalizeSuccessBody&& rhs) noexcept = default;
PasswordFinalizeSuccessBody PasswordFinalizeSuccessBody::Clone() const {
  PasswordFinalizeSuccessBody out;
  out.auth_token = auth_token.Clone();
  return out;
}

// static
bool PasswordFinalizeSuccessBody::Populate(
    const base::DictValue& dict, PasswordFinalizeSuccessBody& out) {
  const base::Value* auth_token_value = dict.Find("authToken");
  if (!auth_token_value) {
    return false;
  }
  {
    out.auth_token = (*auth_token_value).Clone();
  }

  return true;
}

// static
bool PasswordFinalizeSuccessBody::Populate(
    const base::Value& value, PasswordFinalizeSuccessBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PasswordFinalizeSuccessBody> PasswordFinalizeSuccessBody::FromValue(const base::DictValue& value) {
  PasswordFinalizeSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PasswordFinalizeSuccessBody> PasswordFinalizeSuccessBody::FromValue(const base::Value& value) {
  PasswordFinalizeSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PasswordFinalizeSuccessBody::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("authToken", (this->auth_token).Clone());


  return to_value_result;
}



}  // namespace endpoints
}  // namespace brave_account

