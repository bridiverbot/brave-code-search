// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/ignore_additional_properties.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/ignore_additional_properties.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#include "tools/json_schema_compiler/test/ignore_additional_properties.h"

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
namespace ignore_additional_properties {
//
// Types
//

IgnoreAdditionalPropertiesType::IgnoreAdditionalPropertiesType()
 {}

IgnoreAdditionalPropertiesType::~IgnoreAdditionalPropertiesType() = default;
IgnoreAdditionalPropertiesType::IgnoreAdditionalPropertiesType(IgnoreAdditionalPropertiesType&& rhs) noexcept = default;
IgnoreAdditionalPropertiesType& IgnoreAdditionalPropertiesType::operator=(IgnoreAdditionalPropertiesType&& rhs) noexcept = default;
IgnoreAdditionalPropertiesType IgnoreAdditionalPropertiesType::Clone() const {
  IgnoreAdditionalPropertiesType out;
  out.string = string;
  return out;
}

// static
bool IgnoreAdditionalPropertiesType::Populate(
    const base::DictValue& dict, IgnoreAdditionalPropertiesType& out) {
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

  return true;
}

// static
bool IgnoreAdditionalPropertiesType::Populate(
    const base::Value& value, IgnoreAdditionalPropertiesType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<IgnoreAdditionalPropertiesType> IgnoreAdditionalPropertiesType::FromValue(const base::DictValue& value) {
  IgnoreAdditionalPropertiesType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<IgnoreAdditionalPropertiesType> IgnoreAdditionalPropertiesType::FromValue(const base::Value& value) {
  IgnoreAdditionalPropertiesType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue IgnoreAdditionalPropertiesType::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("string", this->string);


  return to_value_result;
}



//
// Functions
//

namespace IgnoreAdditionalPropertiesParams {

Params::ParamObject::ParamObject()
 {}

Params::ParamObject::~ParamObject() = default;
Params::ParamObject::ParamObject(ParamObject&& rhs) noexcept = default;
Params::ParamObject& Params::ParamObject::operator=(ParamObject&& rhs) noexcept = default;
Params::ParamObject Params::ParamObject::Clone() const {
  ParamObject out;
  return out;
}

// static
bool Params::ParamObject::Populate(
    const base::DictValue& dict, ParamObject& out) {
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


}  // namespace IgnoreAdditionalPropertiesParams

}  // namespace ignore_additional_properties
}  // namespace api
}  // namespace test

