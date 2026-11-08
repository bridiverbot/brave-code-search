// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/additional_properties.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/additional_properties.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#include "tools/json_schema_compiler/test/additional_properties.h"

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
namespace additional_properties {
//
// Types
//

AdditionalPropertiesType::AdditionalPropertiesType()
 {}

AdditionalPropertiesType::~AdditionalPropertiesType() = default;
AdditionalPropertiesType::AdditionalPropertiesType(AdditionalPropertiesType&& rhs) noexcept = default;
AdditionalPropertiesType& AdditionalPropertiesType::operator=(AdditionalPropertiesType&& rhs) noexcept = default;
AdditionalPropertiesType AdditionalPropertiesType::Clone() const {
  AdditionalPropertiesType out;
  out.additional_properties = additional_properties.Clone();
  return out;
}

// static
bool AdditionalPropertiesType::Populate(
    const base::DictValue& dict, AdditionalPropertiesType& out) {
  const base::Value* string_value = dict.Find("string");
  if (!string_value) {
    return false;
  }
  {
    auto* temp = (*string_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.string = *temp;
  }

  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool AdditionalPropertiesType::Populate(
    const base::Value& value, AdditionalPropertiesType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AdditionalPropertiesType> AdditionalPropertiesType::FromValue(const base::DictValue& value) {
  AdditionalPropertiesType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AdditionalPropertiesType> AdditionalPropertiesType::FromValue(const base::Value& value) {
  AdditionalPropertiesType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AdditionalPropertiesType::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("string", this->string);

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



//
// Functions
//

namespace AdditionalProperties {

Params::ParamObject::ParamObject()
 {}

Params::ParamObject::~ParamObject() = default;
Params::ParamObject::ParamObject(ParamObject&& rhs) noexcept = default;
Params::ParamObject& Params::ParamObject::operator=(ParamObject&& rhs) noexcept = default;
Params::ParamObject Params::ParamObject::Clone() const {
  ParamObject out;
  out.additional_properties = additional_properties.Clone();
  return out;
}

// static
bool Params::ParamObject::Populate(
    const base::DictValue& dict, ParamObject& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::ParamObject::Populate(
    const base::Value& value, ParamObject& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::ParamObject> Params::ParamObject::FromValue(const base::DictValue& value) {
  ParamObject out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::ParamObject> Params::ParamObject::FromValue(const base::Value& value) {
  ParamObject out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& param_object_value = args[0];
    {
      if (!param_object_value.is_dict()) {
        return std::nullopt;
      }
      if (!ParamObject::Populate(param_object_value.GetDict(), params.param_object)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace AdditionalProperties

namespace ReturnAdditionalProperties {

Results::ResultObject::ResultObject()
: integer(0) {}

Results::ResultObject::~ResultObject() = default;
Results::ResultObject::ResultObject(ResultObject&& rhs) noexcept = default;
Results::ResultObject& Results::ResultObject::operator=(ResultObject&& rhs) noexcept = default;
base::DictValue Results::ResultObject::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("integer", this->integer);

  for (const auto& it : additional_properties) {
    to_value_result.Set(it.first, it.second);

  }

  return to_value_result;
}


base::ListValue Results::Create(const ResultObject& result_object) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((result_object).ToValue());

  return create_results;
}
}  // namespace ReturnAdditionalProperties

}  // namespace additional_properties
}  // namespace api
}  // namespace test

