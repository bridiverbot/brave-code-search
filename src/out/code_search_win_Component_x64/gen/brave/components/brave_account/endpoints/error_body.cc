// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/error_body.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/error_body.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#include "brave/components/brave_account/endpoints/error_body.h"

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

ErrorBody::ErrorBody()
 {}

ErrorBody::~ErrorBody() = default;
ErrorBody::ErrorBody(ErrorBody&& rhs) noexcept = default;
ErrorBody& ErrorBody::operator=(ErrorBody&& rhs) noexcept = default;
ErrorBody ErrorBody::Clone() const {
  ErrorBody out;
  out.code = code.Clone();
  return out;
}

// static
bool ErrorBody::Populate(
    const base::DictValue& dict, ErrorBody& out) {
  const base::Value* code_value = dict.Find("code");
  if (!code_value) {
    return false;
  }
  {
    out.code = (*code_value).Clone();
  }

  return true;
}

// static
bool ErrorBody::Populate(
    const base::Value& value, ErrorBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ErrorBody> ErrorBody::FromValue(const base::DictValue& value) {
  ErrorBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ErrorBody> ErrorBody::FromValue(const base::Value& value) {
  ErrorBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ErrorBody::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("code", (this->code).Clone());


  return to_value_result;
}



}  // namespace endpoints
}  // namespace brave_account

