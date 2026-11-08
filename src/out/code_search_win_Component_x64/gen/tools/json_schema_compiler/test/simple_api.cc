// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/simple_api.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/simple_api.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#include "tools/json_schema_compiler/test/simple_api.h"

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
#include "tools/json_schema_compiler/manifest_parse_util.h"

#include <string_view>
#include "tools/json_schema_compiler/test/enums.h"


using base::UTF8ToUTF16;

namespace test {
namespace api {
namespace simple_api {
//
// Types
//

const char* ToString(TestEnum enum_param) {
  switch (enum_param) {
    case TestEnum::kOne:
      return "one";
    case TestEnum::kTwo:
      return "two";
    case TestEnum::kThree:
      return "three";
    case TestEnum::kNone:
      return "";
  }
  NOTREACHED();
}

TestEnum ParseTestEnum(std::string_view enum_string) {
  if (enum_string == "one")
    return TestEnum::kOne;
  if (enum_string == "two")
    return TestEnum::kTwo;
  if (enum_string == "three")
    return TestEnum::kThree;
  return TestEnum::kNone;
}

std::u16string GetTestEnumParseError(std::string_view enum_string) {
  return u"expected \"one\" or \"two\" or \"three\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(_3D enum_param) {
  switch (enum_param) {
    case _3D::kYes:
      return "yes";
    case _3D::kNo:
      return "no";
    case _3D::kNone:
      return "";
  }
  NOTREACHED();
}

_3D Parse_3D(std::string_view enum_string) {
  if (enum_string == "yes")
    return _3D::kYes;
  if (enum_string == "no")
    return _3D::kNo;
  return _3D::kNone;
}

std::u16string Get_3DParseError(std::string_view enum_string) {
  return u"expected \"yes\" or \"no\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


TestType::Object::Object()
: foo(0) {}

TestType::Object::~Object() = default;
TestType::Object::Object(Object&& rhs) noexcept = default;
TestType::Object& TestType::Object::operator=(Object&& rhs) noexcept = default;
// static
constexpr char TestType::Object::kFoo[];

TestType::Object TestType::Object::Clone() const {
  Object out;
  out.foo = foo;
  return out;
}

// static
bool TestType::Object::Populate(
    const base::DictValue& dict, Object& out) {
  const base::Value* foo_value = dict.Find("foo");
  if (!foo_value) {
    return false;
  }
  {
    auto temp = (*foo_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.foo = *temp;
  }

  return true;
}

// static
bool TestType::Object::Populate(
    const base::Value& value, Object& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<TestType::Object> TestType::Object::FromValue(const base::DictValue& value) {
  Object out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<TestType::Object> TestType::Object::FromValue(const base::Value& value) {
  Object out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue TestType::Object::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("foo", this->foo);


  return to_value_result;
}

//static
bool TestType::Object::ParseFromDictionary(
const base::DictValue& root_dict, std::string_view key, Object& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::DictValue& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kFoo, out.foo, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  return true;
}



TestType::TestType()
: boolean(false),
number(0.0),
integer(0),
opt_external_enum() {}

TestType::~TestType() = default;
TestType::TestType(TestType&& rhs) noexcept = default;
TestType& TestType::operator=(TestType&& rhs) noexcept = default;
// static
constexpr char TestType::kString[];
// static
constexpr char TestType::kBoolean[];
// static
constexpr char TestType::kNumber[];
// static
constexpr char TestType::kInteger[];
// static
constexpr char TestType::kObject[];
// static
constexpr char TestType::kArray[];
// static
constexpr char TestType::kOptExternalEnum[];

TestType TestType::Clone() const {
  TestType out;
  out.string = string;
  out.boolean = boolean;
  out.number = number;
  out.integer = integer;
  if (object) {
    out.object = object->Clone();
  }
  out.array = array;
  out.opt_external_enum = opt_external_enum;
  return out;
}

// static
bool TestType::Populate(
    const base::DictValue& dict, TestType& out) {
  out.opt_external_enum = test::api::enums::Enumeration();
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

  const base::Value* number_value = dict.Find("number");
  if (!number_value) {
    return false;
  }
  {
    auto temp = (*number_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.number = *temp;
  }

  const base::Value* integer_value = dict.Find("integer");
  if (!integer_value) {
    return false;
  }
  {
    auto temp = (*integer_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.integer = *temp;
  }

  const base::Value* object_value = dict.Find("object");
  if (object_value) {
    {
      if (!(*object_value).is_dict()) {
        return false;
      }
      else {
        Object temp;
        if (!Object::Populate((*object_value).GetDict(), temp))
          return false;
        out.object = std::move(temp);
      }
    }
  }

  const base::Value* array_value = dict.Find("array");
  if (array_value) {
    {
      if (!(*array_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*array_value).GetList(), out.array)) {
          return false;
        }
      }
    }
  }

  const base::Value* opt_external_enum_value = dict.Find("opt_external_enum");
  if (opt_external_enum_value) {
    {
      const std::string* enumeration_as_string = (*opt_external_enum_value).GetIfString();
      if (!enumeration_as_string) {
        return false;
      }
      out.opt_external_enum = test::api::enums::ParseEnumeration(*enumeration_as_string);
      if (out.opt_external_enum == test::api::enums::Enumeration()) {
        return false;
      }
    }
    } else {
    out.opt_external_enum = test::api::enums::Enumeration();
  }

  return true;
}

// static
bool TestType::Populate(
    const base::Value& value, TestType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<TestType> TestType::FromValue(const base::DictValue& value) {
  TestType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<TestType> TestType::FromValue(const base::Value& value) {
  TestType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue TestType::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("string", this->string);

  to_value_result.Set("boolean", this->boolean);

  to_value_result.Set("number", this->number);

  to_value_result.Set("integer", this->integer);

  if (this->object) {
    to_value_result.Set("object", (this->object)->ToValue());

  }
  if (this->array) {
    to_value_result.Set("array", json_schema_compiler::util::CreateValueFromArray(*this->array));

  }
  if (this->opt_external_enum != test::api::enums::Enumeration()) {
    to_value_result.Set("opt_external_enum", enums::ToString(this->opt_external_enum));

  }

  return to_value_result;
}

//static
bool TestType::ParseFromDictionary(
const base::DictValue& root_dict, std::string_view key, TestType& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::DictValue& dict = value->GetDict();
  out.opt_external_enum = test::api::enums::Enumeration();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kString, out.string, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kBoolean, out.boolean, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kNumber, out.number, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kInteger, out.integer, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kObject, out.object, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kArray, out.array, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseEnumFromDictionary(dict, kOptExternalEnum, &enums::ParseEnumeration, true, test::api::enums::Enumeration(), out.opt_external_enum, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  return true;
}



//
// Manifest Keys
//

ManifestKeys::KeyObj::KeyObj()
: obj_bool(false) {}

ManifestKeys::KeyObj::~KeyObj() = default;
ManifestKeys::KeyObj::KeyObj(KeyObj&& rhs) noexcept = default;
ManifestKeys::KeyObj& ManifestKeys::KeyObj::operator=(KeyObj&& rhs) noexcept = default;
// static
constexpr char ManifestKeys::KeyObj::kObjString[];
// static
constexpr char ManifestKeys::KeyObj::kObjBool[];
// static
constexpr char ManifestKeys::KeyObj::kObjOptionalEnumArray[];

//static
bool ManifestKeys::KeyObj::ParseFromDictionary(
const base::DictValue& root_dict, std::string_view key, KeyObj& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::DictValue& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kObjString, out.obj_string, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kObjBool, out.obj_bool, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseEnumArrayFromDictionary(dict, kObjOptionalEnumArray, &enums::ParseEnumeration, test::api::enums::Enumeration(), out.obj_optional_enum_array, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  return true;
}



ManifestKeys::ManifestKeys()
: key_enum(),
_3d_key() {}

ManifestKeys::~ManifestKeys() = default;
ManifestKeys::ManifestKeys(ManifestKeys&& rhs) noexcept = default;
ManifestKeys& ManifestKeys::operator=(ManifestKeys&& rhs) noexcept = default;
// static
constexpr char ManifestKeys::kKeyString[];
// static
constexpr char ManifestKeys::kKeyRef[];
// static
constexpr char ManifestKeys::kKeyObj[];
// static
constexpr char ManifestKeys::kKeyEnum[];
// static
constexpr char ManifestKeys::kKeyEnumArray[];
// static
constexpr char ManifestKeys::k3dKey[];

//static
bool ManifestKeys::ParseFromDictionary(
const base::DictValue& root_dict, ManifestKeys& out, std::u16string& error) {

  std::vector<std::string_view> error_path_reversed;
  const base::DictValue& dict = root_dict;
  out.key_enum = TestEnum();
  out._3d_key = _3D();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kKeyString, out.key_string, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kKeyRef, out.key_ref, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kKeyObj, out.key_obj, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseEnumFromDictionary(dict, kKeyEnum, &ParseTestEnum, true, TestEnum(), out.key_enum, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseEnumArrayFromDictionary(dict, kKeyEnumArray, &ParseTestEnum, TestEnum(), out.key_enum_array, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseEnumFromDictionary(dict, k3dKey, &Parse_3D, true, _3D(), out._3d_key, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  return true;
}


//
// Functions
//

namespace IncrementInteger {

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
    const base::Value& num_value = args[0];
    {
      auto temp = num_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.num = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(int result) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace IncrementInteger

namespace OptionalString {

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
    const base::Value& str_value = args[0];
    {
      auto* temp = str_value.GetIfString();
      if (!temp) {
        params.str = std::nullopt;
        return std::nullopt;
      }
      params.str = *temp;
    }
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace OptionalString

namespace OptionalBeforeRequired {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& first_value = args[0];
    {
      auto* temp = first_value.GetIfString();
      if (!temp) {
        params.first = std::nullopt;
        return std::nullopt;
      }
      params.first = *temp;
    }
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& second_value = args[1];
    {
      auto* temp = second_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.second = *temp;
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
}  // namespace OptionalBeforeRequired

namespace RequiredFunctionParameter {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& function_parameter_value = args[0];
    {
      if (!function_parameter_value.is_dict() || !function_parameter_value.GetDict().empty()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& second_value = args[1];
    {
      auto* temp = second_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.second = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RequiredFunctionParameter

namespace OptionalCallbackParams {

base::ListValue Results::Create(const TestType& result) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace OptionalCallbackParams

namespace GetTestType {

base::ListValue Results::Create(const TestType& result) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetTestType

//
// Events
//

namespace OnIntegerFired {

const char kEventName[] = "simple_api.onIntegerFired";

base::ListValue Create(int some_integer) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(some_integer);

  return create_results;
}

}  // namespace OnIntegerFired

namespace OnStringFired {

const char kEventName[] = "simple_api.onStringFired";

base::ListValue Create(const std::string& some_string) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(some_string);

  return create_results;
}

}  // namespace OnStringFired

namespace OnTestTypeFired {

const char kEventName[] = "simple_api.onTestTypeFired";

base::ListValue Create(const TestType& some_test_type) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((some_test_type).ToValue());

  return create_results;
}

}  // namespace OnTestTypeFired

}  // namespace simple_api
}  // namespace api
}  // namespace test

