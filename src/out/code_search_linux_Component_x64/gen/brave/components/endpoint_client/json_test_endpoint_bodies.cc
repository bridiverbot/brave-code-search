// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/endpoint_client/json_test_endpoint_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/endpoint_client/json_test_endpoint_bodies.idl --root=../../ --destdir=gen --namespace=%(namespace)s --generator=cpp --include-rules=

#include "brave/components/endpoint_client/json_test_endpoint_bodies.h"

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

namespace endpoint_client {
//
// Types
//

JSONRequestBody::JSONRequestBody()
 {}

JSONRequestBody::~JSONRequestBody() = default;
JSONRequestBody::JSONRequestBody(JSONRequestBody&& rhs) noexcept = default;
JSONRequestBody& JSONRequestBody::operator=(JSONRequestBody&& rhs) noexcept = default;
JSONRequestBody JSONRequestBody::Clone() const {
  JSONRequestBody out;
  out.request = request;
  return out;
}

// static
bool JSONRequestBody::Populate(
    const base::DictValue& dict, JSONRequestBody& out) {
  const base::Value* request_value = dict.Find("request");
  if (!request_value) {
    return false;
  }
  {
    auto* temp = (*request_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.request = *temp;
  }

  return true;
}

// static
bool JSONRequestBody::Populate(
    const base::Value& value, JSONRequestBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<JSONRequestBody> JSONRequestBody::FromValue(const base::DictValue& value) {
  JSONRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<JSONRequestBody> JSONRequestBody::FromValue(const base::Value& value) {
  JSONRequestBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue JSONRequestBody::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("request", this->request);


  return to_value_result;
}


JSONSuccessBody::JSONSuccessBody()
 {}

JSONSuccessBody::~JSONSuccessBody() = default;
JSONSuccessBody::JSONSuccessBody(JSONSuccessBody&& rhs) noexcept = default;
JSONSuccessBody& JSONSuccessBody::operator=(JSONSuccessBody&& rhs) noexcept = default;
JSONSuccessBody JSONSuccessBody::Clone() const {
  JSONSuccessBody out;
  out.success = success;
  return out;
}

// static
bool JSONSuccessBody::Populate(
    const base::DictValue& dict, JSONSuccessBody& out) {
  const base::Value* success_value = dict.Find("success");
  if (!success_value) {
    return false;
  }
  {
    auto* temp = (*success_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.success = *temp;
  }

  return true;
}

// static
bool JSONSuccessBody::Populate(
    const base::Value& value, JSONSuccessBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<JSONSuccessBody> JSONSuccessBody::FromValue(const base::DictValue& value) {
  JSONSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<JSONSuccessBody> JSONSuccessBody::FromValue(const base::Value& value) {
  JSONSuccessBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue JSONSuccessBody::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("success", this->success);


  return to_value_result;
}


JSONErrorBody::JSONErrorBody()
 {}

JSONErrorBody::~JSONErrorBody() = default;
JSONErrorBody::JSONErrorBody(JSONErrorBody&& rhs) noexcept = default;
JSONErrorBody& JSONErrorBody::operator=(JSONErrorBody&& rhs) noexcept = default;
JSONErrorBody JSONErrorBody::Clone() const {
  JSONErrorBody out;
  out.error = error;
  return out;
}

// static
bool JSONErrorBody::Populate(
    const base::DictValue& dict, JSONErrorBody& out) {
  const base::Value* error_value = dict.Find("error");
  if (!error_value) {
    return false;
  }
  {
    auto* temp = (*error_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.error = *temp;
  }

  return true;
}

// static
bool JSONErrorBody::Populate(
    const base::Value& value, JSONErrorBody& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<JSONErrorBody> JSONErrorBody::FromValue(const base::DictValue& value) {
  JSONErrorBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<JSONErrorBody> JSONErrorBody::FromValue(const base::Value& value) {
  JSONErrorBody out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue JSONErrorBody::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("error", this->error);


  return to_value_result;
}



}  // namespace endpoint_client

