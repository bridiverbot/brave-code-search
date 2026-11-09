// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/accounts_delete_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/accounts_delete_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#include "brave/components/brave_account/endpoints/accounts_delete_bodies.h"

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

AccountsDeleteRequestBody::AccountsDeleteRequestBody()
 {}

AccountsDeleteRequestBody::~AccountsDeleteRequestBody() = default;
AccountsDeleteRequestBody::AccountsDeleteRequestBody(AccountsDeleteRequestBody&& rhs) noexcept = default;
AccountsDeleteRequestBody& AccountsDeleteRequestBody::operator=(AccountsDeleteRequestBody&& rhs) noexcept = default;
AccountsDeleteRequestBody AccountsDeleteRequestBody::Clone() const {
  AccountsDeleteRequestBody out;
  return out;
}

// static
bool AccountsDeleteRequestBody::Populate(
    const base::DictValue& dict, AccountsDeleteRequestBody& out) {
  return true;
}

// static
bool AccountsDeleteRequestBody::Populate(
    const base::Value& value, AccountsDeleteRequestBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AccountsDeleteRequestBody> AccountsDeleteRequestBody::FromValue(const base::DictValue& value) {
  AccountsDeleteRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AccountsDeleteRequestBody> AccountsDeleteRequestBody::FromValue(const base::Value& value) {
  AccountsDeleteRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AccountsDeleteRequestBody::ToValue() const {
  base::DictValue to_value_result;


  return to_value_result;
}


AccountsDeleteSuccessBody::AccountsDeleteSuccessBody()
 {}

AccountsDeleteSuccessBody::~AccountsDeleteSuccessBody() = default;
AccountsDeleteSuccessBody::AccountsDeleteSuccessBody(AccountsDeleteSuccessBody&& rhs) noexcept = default;
AccountsDeleteSuccessBody& AccountsDeleteSuccessBody::operator=(AccountsDeleteSuccessBody&& rhs) noexcept = default;
AccountsDeleteSuccessBody AccountsDeleteSuccessBody::Clone() const {
  AccountsDeleteSuccessBody out;
  return out;
}

// static
bool AccountsDeleteSuccessBody::Populate(
    const base::DictValue& dict, AccountsDeleteSuccessBody& out) {
  return true;
}

// static
bool AccountsDeleteSuccessBody::Populate(
    const base::Value& value, AccountsDeleteSuccessBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AccountsDeleteSuccessBody> AccountsDeleteSuccessBody::FromValue(const base::DictValue& value) {
  AccountsDeleteSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AccountsDeleteSuccessBody> AccountsDeleteSuccessBody::FromValue(const base::Value& value) {
  AccountsDeleteSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AccountsDeleteSuccessBody::ToValue() const {
  base::DictValue to_value_result;


  return to_value_result;
}



}  // namespace endpoints
}  // namespace brave_account

