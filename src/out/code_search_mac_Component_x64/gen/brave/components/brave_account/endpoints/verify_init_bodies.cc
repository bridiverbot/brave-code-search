// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/verify_init_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/verify_init_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#include "brave/components/brave_account/endpoints/verify_init_bodies.h"

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

VerifyInitRequestBody::VerifyInitRequestBody()
 {}

VerifyInitRequestBody::~VerifyInitRequestBody() = default;
VerifyInitRequestBody::VerifyInitRequestBody(VerifyInitRequestBody&& rhs) noexcept = default;
VerifyInitRequestBody& VerifyInitRequestBody::operator=(VerifyInitRequestBody&& rhs) noexcept = default;
VerifyInitRequestBody VerifyInitRequestBody::Clone() const {
  VerifyInitRequestBody out;
  out.email = email;
  out.intent = intent;
  out.locale = locale;
  out.service = service;
  return out;
}

// static
bool VerifyInitRequestBody::Populate(
    const base::DictValue& dict, VerifyInitRequestBody& out) {
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

  const base::Value* intent_value = dict.Find("intent");
  if (!intent_value) {
    return false;
  }
  {
    auto* temp = (*intent_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.intent = *temp;
  }

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
bool VerifyInitRequestBody::Populate(
    const base::Value& value, VerifyInitRequestBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<VerifyInitRequestBody> VerifyInitRequestBody::FromValue(const base::DictValue& value) {
  VerifyInitRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<VerifyInitRequestBody> VerifyInitRequestBody::FromValue(const base::Value& value) {
  VerifyInitRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue VerifyInitRequestBody::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("email", this->email);

  to_value_result.Set("intent", this->intent);

  to_value_result.Set("locale", this->locale);

  to_value_result.Set("service", this->service);


  return to_value_result;
}


VerifyInitSuccessBody::VerifyInitSuccessBody()
 {}

VerifyInitSuccessBody::~VerifyInitSuccessBody() = default;
VerifyInitSuccessBody::VerifyInitSuccessBody(VerifyInitSuccessBody&& rhs) noexcept = default;
VerifyInitSuccessBody& VerifyInitSuccessBody::operator=(VerifyInitSuccessBody&& rhs) noexcept = default;
VerifyInitSuccessBody VerifyInitSuccessBody::Clone() const {
  VerifyInitSuccessBody out;
  out.verification_token = verification_token;
  return out;
}

// static
bool VerifyInitSuccessBody::Populate(
    const base::DictValue& dict, VerifyInitSuccessBody& out) {
  const base::Value* verification_token_value = dict.Find("verificationToken");
  if (!verification_token_value) {
    return false;
  }
  {
    auto* temp = (*verification_token_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.verification_token = *temp;
  }

  return true;
}

// static
bool VerifyInitSuccessBody::Populate(
    const base::Value& value, VerifyInitSuccessBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<VerifyInitSuccessBody> VerifyInitSuccessBody::FromValue(const base::DictValue& value) {
  VerifyInitSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<VerifyInitSuccessBody> VerifyInitSuccessBody::FromValue(const base::Value& value) {
  VerifyInitSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue VerifyInitSuccessBody::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("verificationToken", this->verification_token);


  return to_value_result;
}



}  // namespace endpoints
}  // namespace brave_account

