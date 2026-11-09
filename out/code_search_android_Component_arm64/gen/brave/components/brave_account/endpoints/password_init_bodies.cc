// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/password_init_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/password_init_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#include "brave/components/brave_account/endpoints/password_init_bodies.h"

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

PasswordInitRequestBody::PasswordInitRequestBody()
: serialize_response(false) {}

PasswordInitRequestBody::~PasswordInitRequestBody() = default;
PasswordInitRequestBody::PasswordInitRequestBody(PasswordInitRequestBody&& rhs) noexcept = default;
PasswordInitRequestBody& PasswordInitRequestBody::operator=(PasswordInitRequestBody&& rhs) noexcept = default;
PasswordInitRequestBody PasswordInitRequestBody::Clone() const {
  PasswordInitRequestBody out;
  out.blinded_message = blinded_message;
  out.new_account_email = new_account_email;
  out.serialize_response = serialize_response;
  return out;
}

// static
bool PasswordInitRequestBody::Populate(
    const base::DictValue& dict, PasswordInitRequestBody& out) {
  const base::Value* blinded_message_value = dict.Find("blindedMessage");
  if (!blinded_message_value) {
    return false;
  }
  {
    auto* temp = (*blinded_message_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.blinded_message = *temp;
  }

  const base::Value* new_account_email_value = dict.Find("newAccountEmail");
  if (new_account_email_value) {
    {
      auto* temp = (*new_account_email_value).GetIfString();
      if (!temp) {
        out.new_account_email = std::nullopt;
        return false;
      }
      out.new_account_email = *temp;
    }
  }

  const base::Value* serialize_response_value = dict.Find("serializeResponse");
  if (!serialize_response_value) {
    return false;
  }
  {
    auto temp = (*serialize_response_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.serialize_response = *temp;
  }

  return true;
}

// static
bool PasswordInitRequestBody::Populate(
    const base::Value& value, PasswordInitRequestBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PasswordInitRequestBody> PasswordInitRequestBody::FromValue(const base::DictValue& value) {
  PasswordInitRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PasswordInitRequestBody> PasswordInitRequestBody::FromValue(const base::Value& value) {
  PasswordInitRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PasswordInitRequestBody::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("blindedMessage", this->blinded_message);

  if (this->new_account_email) {
    to_value_result.Set("newAccountEmail", *this->new_account_email);

  }
  to_value_result.Set("serializeResponse", this->serialize_response);


  return to_value_result;
}


PasswordInitSuccessBody::PasswordInitSuccessBody()
 {}

PasswordInitSuccessBody::~PasswordInitSuccessBody() = default;
PasswordInitSuccessBody::PasswordInitSuccessBody(PasswordInitSuccessBody&& rhs) noexcept = default;
PasswordInitSuccessBody& PasswordInitSuccessBody::operator=(PasswordInitSuccessBody&& rhs) noexcept = default;
PasswordInitSuccessBody PasswordInitSuccessBody::Clone() const {
  PasswordInitSuccessBody out;
  out.serialized_response = serialized_response;
  out.verification_token = verification_token;
  return out;
}

// static
bool PasswordInitSuccessBody::Populate(
    const base::DictValue& dict, PasswordInitSuccessBody& out) {
  const base::Value* serialized_response_value = dict.Find("serializedResponse");
  if (!serialized_response_value) {
    return false;
  }
  {
    auto* temp = (*serialized_response_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.serialized_response = *temp;
  }

  const base::Value* verification_token_value = dict.Find("verificationToken");
  if (verification_token_value) {
    {
      auto* temp = (*verification_token_value).GetIfString();
      if (!temp) {
        out.verification_token = std::nullopt;
        return false;
      }
      out.verification_token = *temp;
    }
  }

  return true;
}

// static
bool PasswordInitSuccessBody::Populate(
    const base::Value& value, PasswordInitSuccessBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PasswordInitSuccessBody> PasswordInitSuccessBody::FromValue(const base::DictValue& value) {
  PasswordInitSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PasswordInitSuccessBody> PasswordInitSuccessBody::FromValue(const base::Value& value) {
  PasswordInitSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PasswordInitSuccessBody::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("serializedResponse", this->serialized_response);

  if (this->verification_token) {
    to_value_result.Set("verificationToken", *this->verification_token);

  }

  return to_value_result;
}



}  // namespace endpoints
}  // namespace brave_account

