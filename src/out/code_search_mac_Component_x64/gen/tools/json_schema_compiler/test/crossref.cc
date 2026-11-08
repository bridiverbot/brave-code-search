// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/crossref.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/crossref.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#include "tools/json_schema_compiler/test/crossref.h"

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
#include "tools/json_schema_compiler/test/simple_api.h"


using base::UTF8ToUTF16;

namespace test {
namespace api {
namespace crossref {
//
// Types
//

CrossrefType::CrossrefType()
: test_enum_required(),
test_enum_optional(),
test_enum_optional_extra() {}

CrossrefType::~CrossrefType() = default;
CrossrefType::CrossrefType(CrossrefType&& rhs) noexcept = default;
CrossrefType& CrossrefType::operator=(CrossrefType&& rhs) noexcept = default;
CrossrefType CrossrefType::Clone() const {
  CrossrefType out;
  out.test_type = test_type.Clone();
  out.test_enum_required = test_enum_required;
  out.test_enum_optional = test_enum_optional;
  out.test_enum_optional_extra = test_enum_optional_extra;
  return out;
}

// static
bool CrossrefType::Populate(
    const base::DictValue& dict, CrossrefType& out) {
  out.test_enum_optional = test::api::simple_api::TestEnum();
  out.test_enum_optional_extra = test::api::simple_api::TestEnum();
  const base::Value* test_type_value = dict.Find("testType");
  if (!test_type_value) {
    return false;
  }
  {
    if (!(*test_type_value).is_dict()) {
      return false;
    }
    if (!test::api::simple_api::TestType::Populate((*test_type_value).GetDict(), out.test_type)) {
      return false;
    }
  }

  const base::Value* test_enum_required_value = dict.Find("testEnumRequired");
  if (!test_enum_required_value) {
    return false;
  }
  {
    const std::string* test_enum_as_string = (*test_enum_required_value).GetIfString();
    if (!test_enum_as_string) {
      return false;
    }
    out.test_enum_required = test::api::simple_api::ParseTestEnum(*test_enum_as_string);
    if (out.test_enum_required == test::api::simple_api::TestEnum()) {
      return false;
    }
  }

  const base::Value* test_enum_optional_value = dict.Find("testEnumOptional");
  if (test_enum_optional_value) {
    {
      const std::string* test_enum_as_string = (*test_enum_optional_value).GetIfString();
      if (!test_enum_as_string) {
        return false;
      }
      out.test_enum_optional = test::api::simple_api::ParseTestEnum(*test_enum_as_string);
      if (out.test_enum_optional == test::api::simple_api::TestEnum()) {
        return false;
      }
    }
    } else {
    out.test_enum_optional = test::api::simple_api::TestEnum();
  }

  const base::Value* test_enum_optional_extra_value = dict.Find("testEnumOptionalExtra");
  if (test_enum_optional_extra_value) {
    {
      const std::string* test_enum_as_string = (*test_enum_optional_extra_value).GetIfString();
      if (!test_enum_as_string) {
        return false;
      }
      out.test_enum_optional_extra = test::api::simple_api::ParseTestEnum(*test_enum_as_string);
      if (out.test_enum_optional_extra == test::api::simple_api::TestEnum()) {
        return false;
      }
    }
    } else {
    out.test_enum_optional_extra = test::api::simple_api::TestEnum();
  }

  return true;
}

// static
bool CrossrefType::Populate(
    const base::Value& value, CrossrefType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CrossrefType> CrossrefType::FromValue(const base::DictValue& value) {
  CrossrefType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CrossrefType> CrossrefType::FromValue(const base::Value& value) {
  CrossrefType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue CrossrefType::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("testType", (this->test_type).ToValue());

  to_value_result.Set("testEnumRequired", simple_api::ToString(this->test_enum_required));

  if (this->test_enum_optional != test::api::simple_api::TestEnum()) {
    to_value_result.Set("testEnumOptional", simple_api::ToString(this->test_enum_optional));

  }
  if (this->test_enum_optional_extra != test::api::simple_api::TestEnum()) {
    to_value_result.Set("testEnumOptionalExtra", simple_api::ToString(this->test_enum_optional_extra));

  }

  return to_value_result;
}



//
// Functions
//

namespace TestTypeOptionalParam {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& test_type_value = args[0];
    {
      if (!test_type_value.is_dict()) {
        return std::nullopt;
      }
      else {
        test::api::simple_api::TestType temp;
        if (!test::api::simple_api::TestType::Populate(test_type_value.GetDict(), temp))
          return std::nullopt;
        params.test_type = std::move(temp);
      }
    }
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace TestTypeOptionalParam

namespace GetTestType {

base::ListValue Results::Create(const test::api::simple_api::TestType& result) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetTestType

namespace TestTypeInObject {

Params::ParamObject::ParamObject()
: boolean(false) {}

Params::ParamObject::~ParamObject() = default;
Params::ParamObject::ParamObject(ParamObject&& rhs) noexcept = default;
Params::ParamObject& Params::ParamObject::operator=(ParamObject&& rhs) noexcept = default;
Params::ParamObject Params::ParamObject::Clone() const {
  ParamObject out;
  if (test_type) {
    out.test_type = test_type->Clone();
  }
  out.boolean = boolean;
  return out;
}

// static
bool Params::ParamObject::Populate(
    const base::DictValue& dict, ParamObject& out) {
  const base::Value* test_type_value = dict.Find("testType");
  if (test_type_value) {
    {
      if (!(*test_type_value).is_dict()) {
        return false;
      }
      else {
        test::api::simple_api::TestType temp;
        if (!test::api::simple_api::TestType::Populate((*test_type_value).GetDict(), temp))
          return false;
        out.test_type = std::move(temp);
      }
    }
  }

  const base::Value* boolean_value = dict.Find("boolean");
  if (!boolean_value) {
    return false;
  }
  {
    auto temp = (*boolean_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.boolean = *temp;
  }

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


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace TestTypeInObject

}  // namespace crossref
}  // namespace api
}  // namespace test

