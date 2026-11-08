// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/verify_delete_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/verify_delete_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#include "brave/components/brave_account/endpoints/verify_delete_bodies.h"

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

VerifyDeleteRequestBody::VerifyDeleteRequestBody()
 {}

VerifyDeleteRequestBody::~VerifyDeleteRequestBody() = default;
VerifyDeleteRequestBody::VerifyDeleteRequestBody(VerifyDeleteRequestBody&& rhs) noexcept = default;
VerifyDeleteRequestBody& VerifyDeleteRequestBody::operator=(VerifyDeleteRequestBody&& rhs) noexcept = default;
VerifyDeleteRequestBody VerifyDeleteRequestBody::Clone() const {
  VerifyDeleteRequestBody out;
  return out;
}

// static
bool VerifyDeleteRequestBody::Populate(
    const base::DictValue& dict, VerifyDeleteRequestBody& out) {
  return true;
}

// static
bool VerifyDeleteRequestBody::Populate(
    const base::Value& value, VerifyDeleteRequestBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<VerifyDeleteRequestBody> VerifyDeleteRequestBody::FromValue(const base::DictValue& value) {
  VerifyDeleteRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<VerifyDeleteRequestBody> VerifyDeleteRequestBody::FromValue(const base::Value& value) {
  VerifyDeleteRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue VerifyDeleteRequestBody::ToValue() const {
  base::DictValue to_value_result;


  return to_value_result;
}


VerifyDeleteSuccessBody::VerifyDeleteSuccessBody()
 {}

VerifyDeleteSuccessBody::~VerifyDeleteSuccessBody() = default;
VerifyDeleteSuccessBody::VerifyDeleteSuccessBody(VerifyDeleteSuccessBody&& rhs) noexcept = default;
VerifyDeleteSuccessBody& VerifyDeleteSuccessBody::operator=(VerifyDeleteSuccessBody&& rhs) noexcept = default;
VerifyDeleteSuccessBody VerifyDeleteSuccessBody::Clone() const {
  VerifyDeleteSuccessBody out;
  return out;
}

// static
bool VerifyDeleteSuccessBody::Populate(
    const base::DictValue& dict, VerifyDeleteSuccessBody& out) {
  return true;
}

// static
bool VerifyDeleteSuccessBody::Populate(
    const base::Value& value, VerifyDeleteSuccessBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<VerifyDeleteSuccessBody> VerifyDeleteSuccessBody::FromValue(const base::DictValue& value) {
  VerifyDeleteSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<VerifyDeleteSuccessBody> VerifyDeleteSuccessBody::FromValue(const base::Value& value) {
  VerifyDeleteSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue VerifyDeleteSuccessBody::ToValue() const {
  base::DictValue to_value_result;


  return to_value_result;
}


VerifyDeleteErrorBody::VerifyDeleteErrorBody()
 {}

VerifyDeleteErrorBody::~VerifyDeleteErrorBody() = default;
VerifyDeleteErrorBody::VerifyDeleteErrorBody(VerifyDeleteErrorBody&& rhs) noexcept = default;
VerifyDeleteErrorBody& VerifyDeleteErrorBody::operator=(VerifyDeleteErrorBody&& rhs) noexcept = default;
VerifyDeleteErrorBody VerifyDeleteErrorBody::Clone() const {
  VerifyDeleteErrorBody out;
  return out;
}

// static
bool VerifyDeleteErrorBody::Populate(
    const base::DictValue& dict, VerifyDeleteErrorBody& out) {
  return true;
}

// static
bool VerifyDeleteErrorBody::Populate(
    const base::Value& value, VerifyDeleteErrorBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<VerifyDeleteErrorBody> VerifyDeleteErrorBody::FromValue(const base::DictValue& value) {
  VerifyDeleteErrorBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<VerifyDeleteErrorBody> VerifyDeleteErrorBody::FromValue(const base::Value& value) {
  VerifyDeleteErrorBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue VerifyDeleteErrorBody::ToValue() const {
  base::DictValue to_value_result;


  return to_value_result;
}



}  // namespace endpoints
}  // namespace brave_account

