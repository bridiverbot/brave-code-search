// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/functions_as_parameters.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/functions_as_parameters.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#include "tools/json_schema_compiler/test/functions_as_parameters.h"

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

namespace test {
namespace api {
namespace functions_as_parameters {
//
// Types
//

FunctionType::FunctionType()
 {}

FunctionType::~FunctionType() = default;
FunctionType::FunctionType(FunctionType&& rhs) noexcept = default;
FunctionType& FunctionType::operator=(FunctionType&& rhs) noexcept = default;
FunctionType FunctionType::Clone() const {
  FunctionType out;
  out.event_callback = event_callback.Clone();
  return out;
}

// static
bool FunctionType::Populate(
    const base::DictValue& dict, FunctionType& out) {
  const base::Value* event_callback_value = dict.Find("event_callback");
  if (!event_callback_value) {
    return false;
  }
  {
    if (!(*event_callback_value).is_dict() || !(*event_callback_value).GetDict().empty()) {
      return false;
    }
  }

  return true;
}

// static
bool FunctionType::Populate(
    const base::Value& value, FunctionType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<FunctionType> FunctionType::FromValue(const base::DictValue& value) {
  FunctionType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<FunctionType> FunctionType::FromValue(const base::Value& value) {
  FunctionType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue FunctionType::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("event_callback", (this->event_callback).Clone());


  return to_value_result;
}


OptionalFunctionType::OptionalFunctionType()
 {}

OptionalFunctionType::~OptionalFunctionType() = default;
OptionalFunctionType::OptionalFunctionType(OptionalFunctionType&& rhs) noexcept = default;
OptionalFunctionType& OptionalFunctionType::operator=(OptionalFunctionType&& rhs) noexcept = default;
OptionalFunctionType OptionalFunctionType::Clone() const {
  OptionalFunctionType out;
  if (event_callback) {
    out.event_callback = event_callback->Clone();
  }
  return out;
}

// static
bool OptionalFunctionType::Populate(
    const base::DictValue& dict, OptionalFunctionType& out) {
  const base::Value* event_callback_value = dict.Find("event_callback");
  if (event_callback_value) {
    {
      out.event_callback.emplace();
    }
  }

  return true;
}

// static
bool OptionalFunctionType::Populate(
    const base::Value& value, OptionalFunctionType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<OptionalFunctionType> OptionalFunctionType::FromValue(const base::DictValue& value) {
  OptionalFunctionType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<OptionalFunctionType> OptionalFunctionType::FromValue(const base::Value& value) {
  OptionalFunctionType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue OptionalFunctionType::ToValue() const {
  base::DictValue to_value_result;

  if (this->event_callback) {
    to_value_result.Set("event_callback", (this->event_callback)->Clone());

  }

  return to_value_result;
}


SerializableFunctionType::SerializableFunctionType()
 {}

SerializableFunctionType::~SerializableFunctionType() = default;
SerializableFunctionType::SerializableFunctionType(SerializableFunctionType&& rhs) noexcept = default;
SerializableFunctionType& SerializableFunctionType::operator=(SerializableFunctionType&& rhs) noexcept = default;
SerializableFunctionType SerializableFunctionType::Clone() const {
  SerializableFunctionType out;
  out.function_property = function_property;
  return out;
}

// static
bool SerializableFunctionType::Populate(
    const base::DictValue& dict, SerializableFunctionType& out) {
  const base::Value* function_property_value = dict.Find("functionProperty");
  if (!function_property_value) {
    return false;
  }
  {
    auto* temp = (*function_property_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.function_property = *temp;
  }

  return true;
}

// static
bool SerializableFunctionType::Populate(
    const base::Value& value, SerializableFunctionType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SerializableFunctionType> SerializableFunctionType::FromValue(const base::DictValue& value) {
  SerializableFunctionType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SerializableFunctionType> SerializableFunctionType::FromValue(const base::Value& value) {
  SerializableFunctionType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue SerializableFunctionType::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("functionProperty", this->function_property);


  return to_value_result;
}


OptionalSerializableFunctionType::OptionalSerializableFunctionType()
 {}

OptionalSerializableFunctionType::~OptionalSerializableFunctionType() = default;
OptionalSerializableFunctionType::OptionalSerializableFunctionType(OptionalSerializableFunctionType&& rhs) noexcept = default;
OptionalSerializableFunctionType& OptionalSerializableFunctionType::operator=(OptionalSerializableFunctionType&& rhs) noexcept = default;
OptionalSerializableFunctionType OptionalSerializableFunctionType::Clone() const {
  OptionalSerializableFunctionType out;
  out.function_property = function_property;
  return out;
}

// static
bool OptionalSerializableFunctionType::Populate(
    const base::DictValue& dict, OptionalSerializableFunctionType& out) {
  const base::Value* function_property_value = dict.Find("functionProperty");
  if (function_property_value) {
    {
      auto* temp = (*function_property_value).GetIfString();
      if (!temp) {
        out.function_property = std::nullopt;
        return false;
      }
      out.function_property = *temp;
    }
  }

  return true;
}

// static
bool OptionalSerializableFunctionType::Populate(
    const base::Value& value, OptionalSerializableFunctionType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<OptionalSerializableFunctionType> OptionalSerializableFunctionType::FromValue(const base::DictValue& value) {
  OptionalSerializableFunctionType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<OptionalSerializableFunctionType> OptionalSerializableFunctionType::FromValue(const base::Value& value) {
  OptionalSerializableFunctionType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue OptionalSerializableFunctionType::ToValue() const {
  base::DictValue to_value_result;

  if (this->function_property) {
    to_value_result.Set("functionProperty", *this->function_property);

  }

  return to_value_result;
}



}  // namespace functions_as_parameters
}  // namespace api
}  // namespace test

