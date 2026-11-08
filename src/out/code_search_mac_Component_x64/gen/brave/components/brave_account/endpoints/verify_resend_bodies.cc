// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/verify_resend_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/verify_resend_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#include "brave/components/brave_account/endpoints/verify_resend_bodies.h"

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

VerifyResendRequestBody::VerifyResendRequestBody()
 {}

VerifyResendRequestBody::~VerifyResendRequestBody() = default;
VerifyResendRequestBody::VerifyResendRequestBody(VerifyResendRequestBody&& rhs) noexcept = default;
VerifyResendRequestBody& VerifyResendRequestBody::operator=(VerifyResendRequestBody&& rhs) noexcept = default;
VerifyResendRequestBody VerifyResendRequestBody::Clone() const {
  VerifyResendRequestBody out;
  out.locale = locale;
  return out;
}

// static
bool VerifyResendRequestBody::Populate(
    const base::DictValue& dict, VerifyResendRequestBody& out) {
  const base::Value* locale_value = dict.Find("locale");
  if (!locale_value) {
    return false;
  }
  {
    auto* temp = (*locale_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.locale = *temp;
  }

  return true;
}

// static
bool VerifyResendRequestBody::Populate(
    const base::Value& value, VerifyResendRequestBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<VerifyResendRequestBody> VerifyResendRequestBody::FromValue(const base::DictValue& value) {
  VerifyResendRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<VerifyResendRequestBody> VerifyResendRequestBody::FromValue(const base::Value& value) {
  VerifyResendRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue VerifyResendRequestBody::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("locale", this->locale);


  return to_value_result;
}


VerifyResendSuccessBody::VerifyResendSuccessBody()
 {}

VerifyResendSuccessBody::~VerifyResendSuccessBody() = default;
VerifyResendSuccessBody::VerifyResendSuccessBody(VerifyResendSuccessBody&& rhs) noexcept = default;
VerifyResendSuccessBody& VerifyResendSuccessBody::operator=(VerifyResendSuccessBody&& rhs) noexcept = default;
VerifyResendSuccessBody VerifyResendSuccessBody::Clone() const {
  VerifyResendSuccessBody out;
  return out;
}

// static
bool VerifyResendSuccessBody::Populate(
    const base::DictValue& dict, VerifyResendSuccessBody& out) {
  return true;
}

// static
bool VerifyResendSuccessBody::Populate(
    const base::Value& value, VerifyResendSuccessBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<VerifyResendSuccessBody> VerifyResendSuccessBody::FromValue(const base::DictValue& value) {
  VerifyResendSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<VerifyResendSuccessBody> VerifyResendSuccessBody::FromValue(const base::Value& value) {
  VerifyResendSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue VerifyResendSuccessBody::ToValue() const {
  base::DictValue to_value_result;


  return to_value_result;
}



}  // namespace endpoints
}  // namespace brave_account

