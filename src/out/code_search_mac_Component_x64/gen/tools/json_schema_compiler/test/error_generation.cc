// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/error_generation.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/error_generation.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#include "tools/json_schema_compiler/test/error_generation.h"

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
#include <string_view>
#include "base/types/expected.h"
#include "tools/json_schema_compiler/test/error_generation.h"


using base::UTF8ToUTF16;

namespace test {
namespace api {
namespace error_generation {
//
// Types
//

TestType::TestType()
 {}

TestType::~TestType() = default;
TestType::TestType(TestType&& rhs) noexcept = default;
TestType& TestType::operator=(TestType&& rhs) noexcept = default;
TestType TestType::Clone() const {
  TestType out;
  out.string = string;
  return out;
}

// static
bool TestType::Populate(
    const base::DictValue& dict, TestType& out, std::u16string& error) {
  const base::Value* string_value = dict.Find("string");
  if (!string_value) {
    DCHECK(error.empty());
    error = u"'string' is required";
    return false;
  }
  {
    auto* temp = (*string_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'string': expected string, got " + UTF8ToUTF16(base::Value::GetTypeName((*string_value).type()));
      return false;
    }
    out.string = *temp;
  }

  return true;
}

// static
bool TestType::Populate(
    const base::Value& value, TestType& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<TestType, std::u16string> TestType::FromValue(const base::DictValue& value) {
  std::u16string error;
  TestType out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<TestType, std::u16string> TestType::FromValue(const base::Value& value) {
  std::u16string error;
  TestType out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::DictValue TestType::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("string", this->string);


  return to_value_result;
}


OptionalTestType::OptionalTestType()
 {}

OptionalTestType::~OptionalTestType() = default;
OptionalTestType::OptionalTestType(OptionalTestType&& rhs) noexcept = default;
OptionalTestType& OptionalTestType::operator=(OptionalTestType&& rhs) noexcept = default;
OptionalTestType OptionalTestType::Clone() const {
  OptionalTestType out;
  out.string = string;
  return out;
}

// static
bool OptionalTestType::Populate(
    const base::DictValue& dict, OptionalTestType& out, std::u16string& error) {
  const base::Value* string_value = dict.Find("string");
  if (string_value) {
    {
      auto* temp = (*string_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'string': expected string, got " + UTF8ToUTF16(base::Value::GetTypeName((*string_value).type()));
        out.string = std::nullopt;
        return false;
      }
      out.string = *temp;
    }
  }

  return true;
}

// static
bool OptionalTestType::Populate(
    const base::Value& value, OptionalTestType& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<OptionalTestType, std::u16string> OptionalTestType::FromValue(const base::DictValue& value) {
  std::u16string error;
  OptionalTestType out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<OptionalTestType, std::u16string> OptionalTestType::FromValue(const base::Value& value) {
  std::u16string error;
  OptionalTestType out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::DictValue OptionalTestType::ToValue() const {
  base::DictValue to_value_result;

  if (this->string) {
    to_value_result.Set("string", *this->string);

  }

  return to_value_result;
}


ChoiceType::Integers::Integers()
 {}

ChoiceType::Integers::~Integers() = default;
ChoiceType::Integers::Integers(Integers&& rhs) noexcept = default;
ChoiceType::Integers& ChoiceType::Integers::operator=(Integers&& rhs) noexcept = default;
ChoiceType::Integers ChoiceType::Integers::Clone() const {
  Integers out;
  out.as_integers = as_integers;
  out.as_integer = as_integer;
  return out;
}

// static
bool ChoiceType::Integers::Populate(
    const base::Value& value, Integers& out, std::u16string& error) {
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        DCHECK(error.empty());
        error = u"'integers': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_integers, array_parse_error)) {
          array_parse_error = u"Error at key 'integers': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
    return true;
  }
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'integer': expected integer, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  DCHECK(error.empty());
  error = u"expected integers or integer, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
  return false;
}

// static
base::expected<ChoiceType::Integers, std::u16string> ChoiceType::Integers::FromValue(const base::Value& value) {
  std::u16string error;
  Integers out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value ChoiceType::Integers::ToValue() const {
  base::Value result;
  if (as_integers) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for integers";
    result = base::Value(json_schema_compiler::util::CreateValueFromArray(*as_integers));

  }
  if (as_integer) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for integers";
    result = base::Value(*as_integer);

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for integers";
  return result;
}



ChoiceType::ChoiceType()
 {}

ChoiceType::~ChoiceType() = default;
ChoiceType::ChoiceType(ChoiceType&& rhs) noexcept = default;
ChoiceType& ChoiceType::operator=(ChoiceType&& rhs) noexcept = default;
ChoiceType ChoiceType::Clone() const {
  ChoiceType out;
  out.integers = integers.Clone();
  return out;
}

// static
bool ChoiceType::Populate(
    const base::DictValue& dict, ChoiceType& out, std::u16string& error) {
  const base::Value* integers_value = dict.Find("integers");
  if (!integers_value) {
    DCHECK(error.empty());
    error = u"'integers' is required";
    return false;
  }
  {
    if (!Integers::Populate((*integers_value), out.integers, error))
      return false;
  }

  return true;
}

// static
bool ChoiceType::Populate(
    const base::Value& value, ChoiceType& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<ChoiceType, std::u16string> ChoiceType::FromValue(const base::DictValue& value) {
  std::u16string error;
  ChoiceType out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<ChoiceType, std::u16string> ChoiceType::FromValue(const base::Value& value) {
  std::u16string error;
  ChoiceType out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::DictValue ChoiceType::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("integers", (this->integers).ToValue());


  return to_value_result;
}


OptionalChoiceType::Integers::Integers()
 {}

OptionalChoiceType::Integers::~Integers() = default;
OptionalChoiceType::Integers::Integers(Integers&& rhs) noexcept = default;
OptionalChoiceType::Integers& OptionalChoiceType::Integers::operator=(Integers&& rhs) noexcept = default;
OptionalChoiceType::Integers OptionalChoiceType::Integers::Clone() const {
  Integers out;
  out.as_integers = as_integers;
  out.as_integer = as_integer;
  return out;
}

// static
bool OptionalChoiceType::Integers::Populate(
    const base::Value& value, Integers& out, std::u16string& error) {
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        DCHECK(error.empty());
        error = u"'integers': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_integers, array_parse_error)) {
          array_parse_error = u"Error at key 'integers': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
    return true;
  }
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'integer': expected integer, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  DCHECK(error.empty());
  error = u"expected integers or integer, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
  return false;
}

// static
base::expected<OptionalChoiceType::Integers, std::u16string> OptionalChoiceType::Integers::FromValue(const base::Value& value) {
  std::u16string error;
  Integers out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value OptionalChoiceType::Integers::ToValue() const {
  base::Value result;
  if (as_integers) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for integers";
    result = base::Value(json_schema_compiler::util::CreateValueFromArray(*as_integers));

  }
  if (as_integer) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for integers";
    result = base::Value(*as_integer);

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for integers";
  return result;
}



OptionalChoiceType::OptionalChoiceType()
 {}

OptionalChoiceType::~OptionalChoiceType() = default;
OptionalChoiceType::OptionalChoiceType(OptionalChoiceType&& rhs) noexcept = default;
OptionalChoiceType& OptionalChoiceType::operator=(OptionalChoiceType&& rhs) noexcept = default;
OptionalChoiceType OptionalChoiceType::Clone() const {
  OptionalChoiceType out;
  if (integers) {
    out.integers = integers->Clone();
  }
  return out;
}

// static
bool OptionalChoiceType::Populate(
    const base::DictValue& dict, OptionalChoiceType& out, std::u16string& error) {
  const base::Value* integers_value = dict.Find("integers");
  if (integers_value) {
    {
      Integers temp;
      if (!Integers::Populate((*integers_value), temp, error))
        return false;
      out.integers = std::move(temp);
    }
  }

  return true;
}

// static
bool OptionalChoiceType::Populate(
    const base::Value& value, OptionalChoiceType& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<OptionalChoiceType, std::u16string> OptionalChoiceType::FromValue(const base::DictValue& value) {
  std::u16string error;
  OptionalChoiceType out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<OptionalChoiceType, std::u16string> OptionalChoiceType::FromValue(const base::Value& value) {
  std::u16string error;
  OptionalChoiceType out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::DictValue OptionalChoiceType::ToValue() const {
  base::DictValue to_value_result;

  if (this->integers) {
    to_value_result.Set("integers", (this->integers)->ToValue());

  }

  return to_value_result;
}


ObjectType::ObjectType()
 {}

ObjectType::~ObjectType() = default;
ObjectType::ObjectType(ObjectType&& rhs) noexcept = default;
ObjectType& ObjectType::operator=(ObjectType&& rhs) noexcept = default;
ObjectType ObjectType::Clone() const {
  ObjectType out;
  if (other_type) {
    out.other_type = other_type->Clone();
  }
  return out;
}

// static
bool ObjectType::Populate(
    const base::DictValue& dict, ObjectType& out, std::u16string& error) {
  const base::Value* other_type_value = dict.Find("otherType");
  if (other_type_value) {
    {
      if (!(*other_type_value).is_dict()) {
        DCHECK(error.empty());
        error = u"'otherType': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName((*other_type_value).type()));
        return false;
      }
      else {
        test::api::error_generation::TestType temp;
        if (!test::api::error_generation::TestType::Populate((*other_type_value).GetDict(), temp, error))
          return false;
        out.other_type = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ObjectType::Populate(
    const base::Value& value, ObjectType& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<ObjectType, std::u16string> ObjectType::FromValue(const base::DictValue& value) {
  std::u16string error;
  ObjectType out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<ObjectType, std::u16string> ObjectType::FromValue(const base::Value& value) {
  std::u16string error;
  ObjectType out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::DictValue ObjectType::ToValue() const {
  base::DictValue to_value_result;

  if (this->other_type) {
    to_value_result.Set("otherType", (this->other_type)->ToValue());

  }

  return to_value_result;
}


const char* ToString(Enumeration enum_param) {
  switch (enum_param) {
    case Enumeration::kOne:
      return "one";
    case Enumeration::kTwo:
      return "two";
    case Enumeration::kThree:
      return "three";
    case Enumeration::kNone:
      return "";
  }
  NOTREACHED();
}

Enumeration ParseEnumeration(std::string_view enum_string) {
  if (enum_string == "one")
    return Enumeration::kOne;
  if (enum_string == "two")
    return Enumeration::kTwo;
  if (enum_string == "three")
    return Enumeration::kThree;
  return Enumeration::kNone;
}

std::u16string GetEnumerationParseError(std::string_view enum_string) {
  return u"expected \"one\" or \"two\" or \"three\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


HasEnumeration::HasEnumeration()
: enumeration() {}

HasEnumeration::~HasEnumeration() = default;
HasEnumeration::HasEnumeration(HasEnumeration&& rhs) noexcept = default;
HasEnumeration& HasEnumeration::operator=(HasEnumeration&& rhs) noexcept = default;
HasEnumeration HasEnumeration::Clone() const {
  HasEnumeration out;
  out.enumeration = enumeration;
  return out;
}

// static
bool HasEnumeration::Populate(
    const base::DictValue& dict, HasEnumeration& out, std::u16string& error) {
  const base::Value* enumeration_value = dict.Find("enumeration");
  if (!enumeration_value) {
    DCHECK(error.empty());
    error = u"'enumeration' is required";
    return false;
  }
  {
    const std::string* enumeration_as_string = (*enumeration_value).GetIfString();
    if (!enumeration_as_string) {
      DCHECK(error.empty());
      error = u"'Enumeration': expected string, got " + UTF8ToUTF16(base::Value::GetTypeName((*enumeration_value).type()));
      return false;
    }
    out.enumeration = ParseEnumeration(*enumeration_as_string);
    if (out.enumeration == Enumeration()) {
      DCHECK(error.empty());
      error = u"'Enumeration': " + GetEnumerationParseError(*enumeration_as_string);
      return false;
    }
  }

  return true;
}

// static
bool HasEnumeration::Populate(
    const base::Value& value, HasEnumeration& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<HasEnumeration, std::u16string> HasEnumeration::FromValue(const base::DictValue& value) {
  std::u16string error;
  HasEnumeration out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<HasEnumeration, std::u16string> HasEnumeration::FromValue(const base::Value& value) {
  std::u16string error;
  HasEnumeration out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::DictValue HasEnumeration::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("enumeration", error_generation::ToString(this->enumeration));


  return to_value_result;
}


BinaryData::BinaryData()
 {}

BinaryData::~BinaryData() = default;
BinaryData::BinaryData(BinaryData&& rhs) noexcept = default;
BinaryData& BinaryData::operator=(BinaryData&& rhs) noexcept = default;
BinaryData BinaryData::Clone() const {
  BinaryData out;
  out.data = data;
  return out;
}

// static
bool BinaryData::Populate(
    const base::DictValue& dict, BinaryData& out, std::u16string& error) {
  const base::Value* data_value = dict.Find("data");
  if (!data_value) {
    DCHECK(error.empty());
    error = u"'data' is required";
    return false;
  }
  {
    if (!(*data_value).is_blob()) {
      DCHECK(error.empty());
      error = u"'data': expected binary, got " + UTF8ToUTF16(base::Value::GetTypeName((*data_value).type()));
      return false;
    }
    else {
      out.data = (*data_value).GetBlob();
    }
  }

  return true;
}

// static
bool BinaryData::Populate(
    const base::Value& value, BinaryData& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<BinaryData, std::u16string> BinaryData::FromValue(const base::DictValue& value) {
  std::u16string error;
  BinaryData out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<BinaryData, std::u16string> BinaryData::FromValue(const base::Value& value) {
  std::u16string error;
  BinaryData out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::DictValue BinaryData::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("data", base::Value(this->data));


  return to_value_result;
}


OptionalBinaryData::OptionalBinaryData()
 {}

OptionalBinaryData::~OptionalBinaryData() = default;
OptionalBinaryData::OptionalBinaryData(OptionalBinaryData&& rhs) noexcept = default;
OptionalBinaryData& OptionalBinaryData::operator=(OptionalBinaryData&& rhs) noexcept = default;
OptionalBinaryData OptionalBinaryData::Clone() const {
  OptionalBinaryData out;
  out.data = data;
  return out;
}

// static
bool OptionalBinaryData::Populate(
    const base::DictValue& dict, OptionalBinaryData& out, std::u16string& error) {
  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    {
      if (!(*data_value).is_blob()) {
        DCHECK(error.empty());
        error = u"'data': expected binary, got " + UTF8ToUTF16(base::Value::GetTypeName((*data_value).type()));
        return false;
      }
      else {
        out.data = (*data_value).GetBlob();
      }
    }
  }

  return true;
}

// static
bool OptionalBinaryData::Populate(
    const base::Value& value, OptionalBinaryData& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<OptionalBinaryData, std::u16string> OptionalBinaryData::FromValue(const base::DictValue& value) {
  std::u16string error;
  OptionalBinaryData out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<OptionalBinaryData, std::u16string> OptionalBinaryData::FromValue(const base::Value& value) {
  std::u16string error;
  OptionalBinaryData out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::DictValue OptionalBinaryData::ToValue() const {
  base::DictValue to_value_result;

  if (this->data) {
    to_value_result.Set("data", base::Value(*this->data));

  }

  return to_value_result;
}


ArrayObject::ArrayObject()
 {}

ArrayObject::~ArrayObject() = default;
ArrayObject::ArrayObject(ArrayObject&& rhs) noexcept = default;
ArrayObject& ArrayObject::operator=(ArrayObject&& rhs) noexcept = default;
ArrayObject ArrayObject::Clone() const {
  ArrayObject out;
  out.the_array = the_array;
  return out;
}

// static
bool ArrayObject::Populate(
    const base::DictValue& dict, ArrayObject& out, std::u16string& error) {
  const base::Value* the_array_value = dict.Find("TheArray");
  if (the_array_value) {
    {
      if (!(*the_array_value).is_list()) {
        DCHECK(error.empty());
        error = u"'TheArray': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*the_array_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*the_array_value).GetList(), out.the_array, array_parse_error)) {
          array_parse_error = u"Error at key 'TheArray': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool ArrayObject::Populate(
    const base::Value& value, ArrayObject& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<ArrayObject, std::u16string> ArrayObject::FromValue(const base::DictValue& value) {
  std::u16string error;
  ArrayObject out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<ArrayObject, std::u16string> ArrayObject::FromValue(const base::Value& value) {
  std::u16string error;
  ArrayObject out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::DictValue ArrayObject::ToValue() const {
  base::DictValue to_value_result;

  if (this->the_array) {
    to_value_result.Set("TheArray", json_schema_compiler::util::CreateValueFromArray(*this->the_array));

  }

  return to_value_result;
}


ObjectChoiceA::ObjectChoiceA()
: a(0) {}

ObjectChoiceA::~ObjectChoiceA() = default;
ObjectChoiceA::ObjectChoiceA(ObjectChoiceA&& rhs) noexcept = default;
ObjectChoiceA& ObjectChoiceA::operator=(ObjectChoiceA&& rhs) noexcept = default;
ObjectChoiceA ObjectChoiceA::Clone() const {
  ObjectChoiceA out;
  out.a = a;
  return out;
}

// static
bool ObjectChoiceA::Populate(
    const base::DictValue& dict, ObjectChoiceA& out, std::u16string& error) {
  const base::Value* a_value = dict.Find("a");
  if (!a_value) {
    DCHECK(error.empty());
    error = u"'a' is required";
    return false;
  }
  {
    auto temp = (*a_value).GetIfInt();
    if (!temp.has_value()) {
      DCHECK(error.empty());
      error = u"'a': expected a, got " + UTF8ToUTF16(base::Value::GetTypeName((*a_value).type()));
      return false;
    }
    out.a = *temp;
  }

  return true;
}

// static
bool ObjectChoiceA::Populate(
    const base::Value& value, ObjectChoiceA& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<ObjectChoiceA, std::u16string> ObjectChoiceA::FromValue(const base::DictValue& value) {
  std::u16string error;
  ObjectChoiceA out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<ObjectChoiceA, std::u16string> ObjectChoiceA::FromValue(const base::Value& value) {
  std::u16string error;
  ObjectChoiceA out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::DictValue ObjectChoiceA::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("a", this->a);


  return to_value_result;
}


ObjectChoiceB::ObjectChoiceB()
 {}

ObjectChoiceB::~ObjectChoiceB() = default;
ObjectChoiceB::ObjectChoiceB(ObjectChoiceB&& rhs) noexcept = default;
ObjectChoiceB& ObjectChoiceB::operator=(ObjectChoiceB&& rhs) noexcept = default;
ObjectChoiceB ObjectChoiceB::Clone() const {
  ObjectChoiceB out;
  out.b = b;
  return out;
}

// static
bool ObjectChoiceB::Populate(
    const base::DictValue& dict, ObjectChoiceB& out, std::u16string& error) {
  const base::Value* b_value = dict.Find("b");
  if (!b_value) {
    DCHECK(error.empty());
    error = u"'b' is required";
    return false;
  }
  {
    auto* temp = (*b_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'b': expected b, got " + UTF8ToUTF16(base::Value::GetTypeName((*b_value).type()));
      return false;
    }
    out.b = *temp;
  }

  return true;
}

// static
bool ObjectChoiceB::Populate(
    const base::Value& value, ObjectChoiceB& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<ObjectChoiceB, std::u16string> ObjectChoiceB::FromValue(const base::DictValue& value) {
  std::u16string error;
  ObjectChoiceB out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<ObjectChoiceB, std::u16string> ObjectChoiceB::FromValue(const base::Value& value) {
  std::u16string error;
  ObjectChoiceB out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::DictValue ObjectChoiceB::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("b", this->b);


  return to_value_result;
}


ObjectChoices::ObjectChoices()
 {}

ObjectChoices::~ObjectChoices() = default;
ObjectChoices::ObjectChoices(ObjectChoices&& rhs) noexcept = default;
ObjectChoices& ObjectChoices::operator=(ObjectChoices&& rhs) noexcept = default;
ObjectChoices ObjectChoices::Clone() const {
  ObjectChoices out;
  if (as_object_choice_a) {
    out.as_object_choice_a = as_object_choice_a->Clone();
  }
  if (as_object_choice_b) {
    out.as_object_choice_b = as_object_choice_b->Clone();
  }
  return out;
}

// static
bool ObjectChoices::Populate(
    const base::Value& value, ObjectChoices& out, std::u16string& error) {
  if (value.type() == base::Value::Type::DICT) {
    {
      std::u16string choice_error;
      ObjectChoiceA temp;
      if (ObjectChoiceA::Populate(value.GetDict(), temp, choice_error)) {
        out.as_object_choice_a = std::move(temp);
        return true;
      }
    }
  }
  if (value.type() == base::Value::Type::DICT) {
    {
      std::u16string choice_error;
      ObjectChoiceB temp;
      if (ObjectChoiceB::Populate(value.GetDict(), temp, choice_error)) {
        out.as_object_choice_b = std::move(temp);
        return true;
      }
    }
  }
  DCHECK(error.empty());
  error = u"expected ObjectChoiceA or ObjectChoiceB, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
  return false;
}

// static
base::expected<ObjectChoices, std::u16string> ObjectChoices::FromValue(const base::Value& value) {
  std::u16string error;
  ObjectChoices out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value ObjectChoices::ToValue() const {
  base::Value result;
  if (as_object_choice_a) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for object_choices";
    result = base::Value((as_object_choice_a)->ToValue());

  }
  if (as_object_choice_b) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for object_choices";
    result = base::Value((as_object_choice_b)->ToValue());

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for object_choices";
  return result;
}



//
// Functions
//

namespace TestString {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args, std::u16string& error) {
  if (args.size() > 1) {
    DCHECK(error.empty());
    error = u"expected 1 arguments, got " + base::NumberToString16(args.size());
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& str_value = args[0];
    {
      auto* temp = str_value.GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'str': expected str, got " + UTF8ToUTF16(base::Value::GetTypeName(str_value.type()));
        params.str = std::nullopt;
        return std::nullopt;
      }
      params.str = *temp;
    }
  }

  return params;
}


// static
base::expected<Params, std::u16string> Params::Create(const base::ListValue& args) {
  std::u16string error;
  auto result = Params::Create(args, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return std::move(result).value();
}


}  // namespace TestString

namespace TestFunction {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args, std::u16string& error) {
  if (args.size() != 1) {
    DCHECK(error.empty());
    error = u"expected 1 arguments, got " + base::NumberToString16(args.size());
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& num_value = args[0];
    {
      auto temp = num_value.GetIfInt();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'num': expected num, got " + UTF8ToUTF16(base::Value::GetTypeName(num_value.type()));
        return std::nullopt;
      }
      params.num = *temp;
    }
  }
  else {
    DCHECK(error.empty());
    error = u"'num' is required";
    return std::nullopt;
  }

  return params;
}


// static
base::expected<Params, std::u16string> Params::Create(const base::ListValue& args) {
  std::u16string error;
  auto result = Params::Create(args, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return std::move(result).value();
}


}  // namespace TestFunction

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
    const base::DictValue& dict, ParamObject& out, std::u16string& error) {
  const base::Value* test_type_value = dict.Find("testType");
  if (test_type_value) {
    {
      if (!(*test_type_value).is_dict()) {
        DCHECK(error.empty());
        error = u"'testType': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName((*test_type_value).type()));
        return false;
      }
      else {
        test::api::error_generation::TestType temp;
        if (!test::api::error_generation::TestType::Populate((*test_type_value).GetDict(), temp, error))
          return false;
        out.test_type = std::move(temp);
      }
    }
  }

  const base::Value* boolean_value = dict.Find("boolean");
  if (!boolean_value) {
    DCHECK(error.empty());
    error = u"'boolean' is required";
    return false;
  }
  {
    auto temp = (*boolean_value).GetIfBool();
    if (!temp.has_value()) {
      DCHECK(error.empty());
      error = u"'boolean': expected boolean, got " + UTF8ToUTF16(base::Value::GetTypeName((*boolean_value).type()));
      return false;
    }
    out.boolean = *temp;
  }

  return true;
}

// static
bool Params::ParamObject::Populate(
    const base::Value& value, ParamObject& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<Params::ParamObject, std::u16string> Params::ParamObject::FromValue(const base::DictValue& value) {
  std::u16string error;
  ParamObject out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<Params::ParamObject, std::u16string> Params::ParamObject::FromValue(const base::Value& value) {
  std::u16string error;
  ParamObject out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args, std::u16string& error) {
  if (args.size() != 1) {
    DCHECK(error.empty());
    error = u"expected 1 arguments, got " + base::NumberToString16(args.size());
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& param_object_value = args[0];
    {
      if (!param_object_value.is_dict()) {
        DCHECK(error.empty());
        error = u"'paramObject': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(param_object_value.type()));
        return std::nullopt;
      }
      if (!ParamObject::Populate(param_object_value.GetDict(), params.param_object, error)) {
        return std::nullopt;
      }
    }
  }
  else {
    DCHECK(error.empty());
    error = u"'paramObject' is required";
    return std::nullopt;
  }

  return params;
}


// static
base::expected<Params, std::u16string> Params::Create(const base::ListValue& args) {
  std::u16string error;
  auto result = Params::Create(args, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return std::move(result).value();
}


}  // namespace TestTypeInObject

}  // namespace error_generation
}  // namespace api
}  // namespace test

