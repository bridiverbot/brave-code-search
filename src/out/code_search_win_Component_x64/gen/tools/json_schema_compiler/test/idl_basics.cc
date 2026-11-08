// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/idl_basics.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/idl_basics.idl --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#include "tools/json_schema_compiler/test/idl_basics.h"

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
#include "tools/json_schema_compiler/test/idl_other_namespace.h"
#include "tools/json_schema_compiler/test/idl_other_namespace_sub_namespace.h"


using base::UTF8ToUTF16;

namespace test {
namespace api {
namespace idl_basics {
//
// Types
//

const char* ToString(EnumType enum_param) {
  switch (enum_param) {
    case EnumType::kName1:
      return "name1";
    case EnumType::kName2:
      return "name2";
    case EnumType::kNone:
      return "";
  }
  NOTREACHED();
}

EnumType ParseEnumType(std::string_view enum_string) {
  if (enum_string == "name1")
    return EnumType::kName1;
  if (enum_string == "name2")
    return EnumType::kName2;
  return EnumType::kNone;
}

std::u16string GetEnumTypeParseError(std::string_view enum_string) {
  return u"expected \"name1\" or \"name2\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(EnumTypeWithNoDoc enum_param) {
  switch (enum_param) {
    case EnumTypeWithNoDoc::kName1:
      return "name1";
    case EnumTypeWithNoDoc::kName2:
      return "name2";
    case EnumTypeWithNoDoc::kNone:
      return "";
  }
  NOTREACHED();
}

EnumTypeWithNoDoc ParseEnumTypeWithNoDoc(std::string_view enum_string) {
  if (enum_string == "name1")
    return EnumTypeWithNoDoc::kName1;
  if (enum_string == "name2")
    return EnumTypeWithNoDoc::kName2;
  return EnumTypeWithNoDoc::kNone;
}

std::u16string GetEnumTypeWithNoDocParseError(std::string_view enum_string) {
  return u"expected \"name1\" or \"name2\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(EnumTypeWithNoDocValue enum_param) {
  switch (enum_param) {
    case EnumTypeWithNoDocValue::kName1:
      return "name1";
    case EnumTypeWithNoDocValue::kName2:
      return "name2";
    case EnumTypeWithNoDocValue::kName3:
      return "name3";
    case EnumTypeWithNoDocValue::kNone:
      return "";
  }
  NOTREACHED();
}

EnumTypeWithNoDocValue ParseEnumTypeWithNoDocValue(std::string_view enum_string) {
  if (enum_string == "name1")
    return EnumTypeWithNoDocValue::kName1;
  if (enum_string == "name2")
    return EnumTypeWithNoDocValue::kName2;
  if (enum_string == "name3")
    return EnumTypeWithNoDocValue::kName3;
  return EnumTypeWithNoDocValue::kNone;
}

std::u16string GetEnumTypeWithNoDocValueParseError(std::string_view enum_string) {
  return u"expected \"name1\" or \"name2\" or \"name3\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


MyType1::MyType1()
: x(0) {}

MyType1::~MyType1() = default;
MyType1::MyType1(MyType1&& rhs) noexcept = default;
MyType1& MyType1::operator=(MyType1&& rhs) noexcept = default;
MyType1 MyType1::Clone() const {
  MyType1 out;
  out.x = x;
  out.y = y;
  out.z = z;
  out.a = a;
  out.b = b;
  out.c = c;
  return out;
}

// static
bool MyType1::Populate(
    const base::DictValue& dict, MyType1& out) {
  const base::Value* x_value = dict.Find("x");
  if (!x_value) {
    return false;
  }
  {
    auto temp = (*x_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.x = *temp;
  }

  const base::Value* y_value = dict.Find("y");
  if (!y_value) {
    return false;
  }
  {
    auto* temp = (*y_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.y = *temp;
  }

  const base::Value* z_value = dict.Find("z");
  if (!z_value) {
    return false;
  }
  {
    auto* temp = (*z_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.z = *temp;
  }

  const base::Value* a_value = dict.Find("a");
  if (!a_value) {
    return false;
  }
  {
    auto* temp = (*a_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.a = *temp;
  }

  const base::Value* b_value = dict.Find("b");
  if (!b_value) {
    return false;
  }
  {
    auto* temp = (*b_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.b = *temp;
  }

  const base::Value* c_value = dict.Find("c");
  if (!c_value) {
    return false;
  }
  {
    auto* temp = (*c_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.c = *temp;
  }

  return true;
}

// static
bool MyType1::Populate(
    const base::Value& value, MyType1& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MyType1> MyType1::FromValue(const base::DictValue& value) {
  MyType1 out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MyType1> MyType1::FromValue(const base::Value& value) {
  MyType1 out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue MyType1::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("x", this->x);

  to_value_result.Set("y", this->y);

  to_value_result.Set("z", this->z);

  to_value_result.Set("a", this->a);

  to_value_result.Set("b", this->b);

  to_value_result.Set("c", this->c);


  return to_value_result;
}


MyType2::MyType2()
 {}

MyType2::~MyType2() = default;
MyType2::MyType2(MyType2&& rhs) noexcept = default;
MyType2& MyType2::operator=(MyType2&& rhs) noexcept = default;
// static
constexpr char MyType2::kX[];

MyType2 MyType2::Clone() const {
  MyType2 out;
  out.x = x;
  return out;
}

// static
bool MyType2::Populate(
    const base::DictValue& dict, MyType2& out) {
  const base::Value* x_value = dict.Find("x");
  if (!x_value) {
    return false;
  }
  {
    auto* temp = (*x_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.x = *temp;
  }

  return true;
}

// static
bool MyType2::Populate(
    const base::Value& value, MyType2& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MyType2> MyType2::FromValue(const base::DictValue& value) {
  MyType2 out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MyType2> MyType2::FromValue(const base::Value& value) {
  MyType2 out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue MyType2::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("x", this->x);


  return to_value_result;
}

//static
bool MyType2::ParseFromDictionary(
const base::DictValue& root_dict, std::string_view key, MyType2& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::DictValue& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kX, out.x, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  return true;
}


ChoiceWithArraysType::Entries::Entries()
 {}

ChoiceWithArraysType::Entries::~Entries() = default;
ChoiceWithArraysType::Entries::Entries(Entries&& rhs) noexcept = default;
ChoiceWithArraysType::Entries& ChoiceWithArraysType::Entries::operator=(Entries&& rhs) noexcept = default;
ChoiceWithArraysType::Entries ChoiceWithArraysType::Entries::Clone() const {
  Entries out;
  out.as_string = as_string;
  out.as_strings = as_strings;
  return out;
}

// static
bool ChoiceWithArraysType::Entries::Populate(
    const base::Value& value, Entries& out) {
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = std::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_strings)) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

// static
std::optional<ChoiceWithArraysType::Entries> ChoiceWithArraysType::Entries::FromValue(const base::Value& value) {
  Entries out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value ChoiceWithArraysType::Entries::ToValue() const {
  base::Value result;
  if (as_string) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for entries";
    result = base::Value(*as_string);

  }
  if (as_strings) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for entries";
    result = base::Value(json_schema_compiler::util::CreateValueFromArray(*as_strings));

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for entries";
  return result;
}

//static
bool ChoiceWithArraysType::Entries::ParseFromDictionary(
const base::DictValue& root_dict, std::string_view key, Entries& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed) {

  return ::json_schema_compiler::manifest_parse_util::
    ParseChoicesFromDictionary(root_dict, key, out, error,
                               error_path_reversed);
}



ChoiceWithArraysType::ChoiceWithArraysType()
 {}

ChoiceWithArraysType::~ChoiceWithArraysType() = default;
ChoiceWithArraysType::ChoiceWithArraysType(ChoiceWithArraysType&& rhs) noexcept = default;
ChoiceWithArraysType& ChoiceWithArraysType::operator=(ChoiceWithArraysType&& rhs) noexcept = default;
// static
constexpr char ChoiceWithArraysType::kEntries[];

ChoiceWithArraysType ChoiceWithArraysType::Clone() const {
  ChoiceWithArraysType out;
  out.entries = entries.Clone();
  return out;
}

// static
bool ChoiceWithArraysType::Populate(
    const base::DictValue& dict, ChoiceWithArraysType& out) {
  const base::Value* entries_value = dict.Find("entries");
  if (!entries_value) {
    return false;
  }
  {
    if (!Entries::Populate((*entries_value), out.entries))
      return false;
  }

  return true;
}

// static
bool ChoiceWithArraysType::Populate(
    const base::Value& value, ChoiceWithArraysType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ChoiceWithArraysType> ChoiceWithArraysType::FromValue(const base::DictValue& value) {
  ChoiceWithArraysType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ChoiceWithArraysType> ChoiceWithArraysType::FromValue(const base::Value& value) {
  ChoiceWithArraysType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ChoiceWithArraysType::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("entries", (this->entries).ToValue());


  return to_value_result;
}

//static
bool ChoiceWithArraysType::ParseFromDictionary(
const base::DictValue& root_dict, std::string_view key, ChoiceWithArraysType& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::DictValue& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kEntries, out.entries, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  return true;
}


ChoiceWithOptionalType::Entries::Entries()
 {}

ChoiceWithOptionalType::Entries::~Entries() = default;
ChoiceWithOptionalType::Entries::Entries(Entries&& rhs) noexcept = default;
ChoiceWithOptionalType::Entries& ChoiceWithOptionalType::Entries::operator=(Entries&& rhs) noexcept = default;
ChoiceWithOptionalType::Entries ChoiceWithOptionalType::Entries::Clone() const {
  Entries out;
  out.as_string = as_string;
  out.as_strings = as_strings;
  return out;
}

// static
bool ChoiceWithOptionalType::Entries::Populate(
    const base::Value& value, Entries& out) {
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = std::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_strings)) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

// static
std::optional<ChoiceWithOptionalType::Entries> ChoiceWithOptionalType::Entries::FromValue(const base::Value& value) {
  Entries out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value ChoiceWithOptionalType::Entries::ToValue() const {
  base::Value result;
  if (as_string) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for entries";
    result = base::Value(*as_string);

  }
  if (as_strings) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for entries";
    result = base::Value(json_schema_compiler::util::CreateValueFromArray(*as_strings));

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for entries";
  return result;
}

//static
bool ChoiceWithOptionalType::Entries::ParseFromDictionary(
const base::DictValue& root_dict, std::string_view key, Entries& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed) {

  return ::json_schema_compiler::manifest_parse_util::
    ParseChoicesFromDictionary(root_dict, key, out, error,
                               error_path_reversed);
}



ChoiceWithOptionalType::ChoiceWithOptionalType()
 {}

ChoiceWithOptionalType::~ChoiceWithOptionalType() = default;
ChoiceWithOptionalType::ChoiceWithOptionalType(ChoiceWithOptionalType&& rhs) noexcept = default;
ChoiceWithOptionalType& ChoiceWithOptionalType::operator=(ChoiceWithOptionalType&& rhs) noexcept = default;
// static
constexpr char ChoiceWithOptionalType::kEntries[];

ChoiceWithOptionalType ChoiceWithOptionalType::Clone() const {
  ChoiceWithOptionalType out;
  if (entries) {
    out.entries = entries->Clone();
  }
  return out;
}

// static
bool ChoiceWithOptionalType::Populate(
    const base::DictValue& dict, ChoiceWithOptionalType& out) {
  const base::Value* entries_value = dict.Find("entries");
  if (entries_value) {
    {
      Entries temp;
      if (!Entries::Populate((*entries_value), temp))
        return false;
      out.entries = std::move(temp);
    }
  }

  return true;
}

// static
bool ChoiceWithOptionalType::Populate(
    const base::Value& value, ChoiceWithOptionalType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ChoiceWithOptionalType> ChoiceWithOptionalType::FromValue(const base::DictValue& value) {
  ChoiceWithOptionalType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ChoiceWithOptionalType> ChoiceWithOptionalType::FromValue(const base::Value& value) {
  ChoiceWithOptionalType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ChoiceWithOptionalType::ToValue() const {
  base::DictValue to_value_result;

  if (this->entries) {
    to_value_result.Set("entries", (this->entries)->ToValue());

  }

  return to_value_result;
}

//static
bool ChoiceWithOptionalType::ParseFromDictionary(
const base::DictValue& root_dict, std::string_view key, ChoiceWithOptionalType& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::DictValue& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kEntries, out.entries, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  return true;
}


UnionType::X::X()
 {}

UnionType::X::~X() = default;
UnionType::X::X(X&& rhs) noexcept = default;
UnionType::X& UnionType::X::operator=(X&& rhs) noexcept = default;
UnionType::X UnionType::X::Clone() const {
  X out;
  out.as_enum_type = as_enum_type;
  out.as_string = as_string;
  return out;
}

// static
bool UnionType::X::Populate(
    const base::Value& value, X& out) {
  if (value.type() == base::Value::Type::STRING) {
    {
      const std::string* enum_type_as_string = value.GetIfString();
      if (!enum_type_as_string) {
        return false;
      }
      out.as_enum_type = ParseEnumType(*enum_type_as_string);
      if (out.as_enum_type == EnumType()) {
        return false;
      }
    }
    return true;
  }
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = std::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  return false;
}

// static
std::optional<UnionType::X> UnionType::X::FromValue(const base::Value& value) {
  X out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value UnionType::X::ToValue() const {
  base::Value result;
  if (as_enum_type != EnumType()) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for x";
    result = base::Value(idl_basics::ToString(as_enum_type));

  }
  if (as_string) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for x";
    result = base::Value(*as_string);

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for x";
  return result;
}


UnionType::Y::Y()
 {}

UnionType::Y::~Y() = default;
UnionType::Y::Y(Y&& rhs) noexcept = default;
UnionType::Y& UnionType::Y::operator=(Y&& rhs) noexcept = default;
UnionType::Y UnionType::Y::Clone() const {
  Y out;
  out.as_string = as_string;
  out.as_enum_type = as_enum_type;
  return out;
}

// static
bool UnionType::Y::Populate(
    const base::Value& value, Y& out) {
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = std::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::STRING) {
    {
      const std::string* enum_type_as_string = value.GetIfString();
      if (!enum_type_as_string) {
        return false;
      }
      out.as_enum_type = ParseEnumType(*enum_type_as_string);
      if (out.as_enum_type == EnumType()) {
        return false;
      }
    }
    return true;
  }
  return false;
}

// static
std::optional<UnionType::Y> UnionType::Y::FromValue(const base::Value& value) {
  Y out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value UnionType::Y::ToValue() const {
  base::Value result;
  if (as_string) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for y";
    result = base::Value(*as_string);

  }
  if (as_enum_type != EnumType()) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for y";
    result = base::Value(idl_basics::ToString(as_enum_type));

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for y";
  return result;
}



UnionType::UnionType()
 {}

UnionType::~UnionType() = default;
UnionType::UnionType(UnionType&& rhs) noexcept = default;
UnionType& UnionType::operator=(UnionType&& rhs) noexcept = default;
UnionType UnionType::Clone() const {
  UnionType out;
  if (x) {
    out.x = x->Clone();
  }
  out.y = y.Clone();
  return out;
}

// static
bool UnionType::Populate(
    const base::DictValue& dict, UnionType& out) {
  const base::Value* x_value = dict.Find("x");
  if (x_value) {
    {
      X temp;
      if (!X::Populate((*x_value), temp))
        return false;
      out.x = std::move(temp);
    }
  }

  const base::Value* y_value = dict.Find("y");
  if (!y_value) {
    return false;
  }
  {
    if (!Y::Populate((*y_value), out.y))
      return false;
  }

  return true;
}

// static
bool UnionType::Populate(
    const base::Value& value, UnionType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UnionType> UnionType::FromValue(const base::DictValue& value) {
  UnionType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UnionType> UnionType::FromValue(const base::Value& value) {
  UnionType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue UnionType::ToValue() const {
  base::DictValue to_value_result;

  if (this->x) {
    to_value_result.Set("x", (this->x)->ToValue());

  }
  to_value_result.Set("y", (this->y).ToValue());


  return to_value_result;
}


IgnoreAdditionalPropertiesType::IgnoreAdditionalPropertiesType()
 {}

IgnoreAdditionalPropertiesType::~IgnoreAdditionalPropertiesType() = default;
IgnoreAdditionalPropertiesType::IgnoreAdditionalPropertiesType(IgnoreAdditionalPropertiesType&& rhs) noexcept = default;
IgnoreAdditionalPropertiesType& IgnoreAdditionalPropertiesType::operator=(IgnoreAdditionalPropertiesType&& rhs) noexcept = default;
IgnoreAdditionalPropertiesType IgnoreAdditionalPropertiesType::Clone() const {
  IgnoreAdditionalPropertiesType out;
  out.x = x;
  return out;
}

// static
bool IgnoreAdditionalPropertiesType::Populate(
    const base::DictValue& dict, IgnoreAdditionalPropertiesType& out) {
  const base::Value* x_value = dict.Find("x");
  if (!x_value) {
    return false;
  }
  {
    auto* temp = (*x_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.x = *temp;
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

  to_value_result.Set("x", this->x);


  return to_value_result;
}



//
// Manifest Keys
//

ManifestKeys::InlineChoice::InlineChoice()
 {}

ManifestKeys::InlineChoice::~InlineChoice() = default;
ManifestKeys::InlineChoice::InlineChoice(InlineChoice&& rhs) noexcept = default;
ManifestKeys::InlineChoice& ManifestKeys::InlineChoice::operator=(InlineChoice&& rhs) noexcept = default;
// static
bool ManifestKeys::InlineChoice::Populate(
    const base::Value& value, InlineChoice& out) {
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = std::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  return false;
}

//static
bool ManifestKeys::InlineChoice::ParseFromDictionary(
const base::DictValue& root_dict, std::string_view key, InlineChoice& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed) {

  return ::json_schema_compiler::manifest_parse_util::
    ParseChoicesFromDictionary(root_dict, key, out, error,
                               error_path_reversed);
}



ManifestKeys::ManifestKeys()
 {}

ManifestKeys::~ManifestKeys() = default;
ManifestKeys::ManifestKeys(ManifestKeys&& rhs) noexcept = default;
ManifestKeys& ManifestKeys::operator=(ManifestKeys&& rhs) noexcept = default;
// static
constexpr char ManifestKeys::kKeyStr[];
// static
constexpr char ManifestKeys::kKeyRef[];
// static
constexpr char ManifestKeys::kInlineChoice[];
// static
constexpr char ManifestKeys::kChoiceWithArrays[];
// static
constexpr char ManifestKeys::kChoiceWithOptional[];

//static
bool ManifestKeys::ParseFromDictionary(
const base::DictValue& root_dict, ManifestKeys& out, std::u16string& error) {

  std::vector<std::string_view> error_path_reversed;
  const base::DictValue& dict = root_dict;
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kKeyStr, out.key_str, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kKeyRef, out.key_ref, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kInlineChoice, out.inline_choice, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kChoiceWithArrays, out.choice_with_arrays, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kChoiceWithOptional, out.choice_with_optional, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  return true;
}


//
// Functions
//

namespace Function1 {

}  // namespace Function1

namespace Function2 {

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
    const base::Value& x_value = args[0];
    {
      auto temp = x_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.x = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace Function2

namespace Function3 {

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
    const base::Value& arg_value = args[0];
    {
      if (!arg_value.is_dict()) {
        return std::nullopt;
      }
      if (!MyType1::Populate(arg_value.GetDict(), params.arg)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace Function3

namespace Function4 {

base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace Function4

namespace Function5 {

base::ListValue Results::Create(int x) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(x);

  return create_results;
}
}  // namespace Function5

namespace Function6 {

base::ListValue Results::Create(const MyType1& arg) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((arg).ToValue());

  return create_results;
}
}  // namespace Function6

namespace Function7 {

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
    const base::Value& arg_value = args[0];
    {
      auto temp = arg_value.GetIfInt();
      if (!temp.has_value()) {
        params.arg = std::nullopt;
        return std::nullopt;
      }
      params.arg = *temp;
    }
  }

  return params;
}


}  // namespace Function7

namespace Function8 {

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
    const base::Value& arg1_value = args[0];
    {
      auto temp = arg1_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.arg1 = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& arg2_value = args[1];
    {
      auto* temp = arg2_value.GetIfString();
      if (!temp) {
        params.arg2 = std::nullopt;
        return std::nullopt;
      }
      params.arg2 = *temp;
    }
  }

  return params;
}


}  // namespace Function8

namespace Function9 {

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
    const base::Value& arg_value = args[0];
    {
      if (!arg_value.is_dict()) {
        return std::nullopt;
      }
      else {
        MyType1 temp;
        if (!MyType1::Populate(arg_value.GetDict(), temp))
          return std::nullopt;
        params.arg = std::move(temp);
      }
    }
  }

  return params;
}


}  // namespace Function9

namespace Function10 {

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
    const base::Value& x_value = args[0];
    {
      auto temp = x_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.x = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& y_value = args[1];
    {
      if (!y_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(y_value.GetList(), params.y)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace Function10

namespace Function11 {

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
    const base::Value& arg_value = args[0];
    {
      if (!arg_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(arg_value.GetList(), params.arg)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace Function11

namespace Function12 {

base::ListValue Results::Create(const std::vector<MyType2>& arg) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(arg));

  return create_results;
}
}  // namespace Function12

namespace Function13 {

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
    const base::Value& type_value = args[0];
    {
      const std::string* enum_type_as_string = type_value.GetIfString();
      if (!enum_type_as_string) {
        return std::nullopt;
      }
      params.type = ParseEnumType(*enum_type_as_string);
      if (params.type == EnumType()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const EnumType& type) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(idl_basics::ToString(type));

  return create_results;
}
}  // namespace Function13

namespace Function14 {

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
    const base::Value& types_value = args[0];
    {
      if (!types_value.is_list()) {
        return std::nullopt;
      }
      else {
        for (const auto& it : (types_value).GetList()) {
          EnumType tmp;
          const std::string* enum_type_as_string = (it).GetIfString();
          if (!enum_type_as_string) {
            return std::nullopt;
          }
          tmp = ParseEnumType(*enum_type_as_string);
          if (tmp == EnumType()) {
            return std::nullopt;
          }
          params.types.push_back(tmp);
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace Function14

namespace Function16 {

base::ListValue Results::Create(int x) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(x);

  return create_results;
}
}  // namespace Function16

namespace Function17 {

base::ListValue Results::Create(int x) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(x);

  return create_results;
}
}  // namespace Function17

namespace Function18 {

base::ListValue Results::Create(int x) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(x);

  return create_results;
}
}  // namespace Function18

namespace Function20 {

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
    const base::Value& value_value = args[0];
    {
      const std::string* some_type_as_string = value_value.GetIfString();
      if (!some_type_as_string) {
        return std::nullopt;
      }
      params.value = test::api::idl_other_namespace::ParseSomeType(*some_type_as_string);
      if (params.value == test::api::idl_other_namespace::SomeType()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace Function20

namespace Function21 {

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
    const base::Value& values_value = args[0];
    {
      if (!values_value.is_list()) {
        return std::nullopt;
      }
      else {
        for (const auto& it : (values_value).GetList()) {
          test::api::idl_other_namespace::SomeType tmp;
          const std::string* some_type_as_string = (it).GetIfString();
          if (!some_type_as_string) {
            return std::nullopt;
          }
          tmp = test::api::idl_other_namespace::ParseSomeType(*some_type_as_string);
          if (tmp == test::api::idl_other_namespace::SomeType()) {
            return std::nullopt;
          }
          params.values.push_back(tmp);
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace Function21

namespace Function22 {

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
    const base::Value& value_value = args[0];
    {
      const std::string* another_type_as_string = value_value.GetIfString();
      if (!another_type_as_string) {
        return std::nullopt;
      }
      params.value = test::api::idl_other_namespace_sub_namespace::ParseAnotherType(*another_type_as_string);
      if (params.value == test::api::idl_other_namespace_sub_namespace::AnotherType()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace Function22

namespace Function23 {

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
    const base::Value& values_value = args[0];
    {
      if (!values_value.is_list()) {
        return std::nullopt;
      }
      else {
        for (const auto& it : (values_value).GetList()) {
          test::api::idl_other_namespace_sub_namespace::AnotherType tmp;
          const std::string* another_type_as_string = (it).GetIfString();
          if (!another_type_as_string) {
            return std::nullopt;
          }
          tmp = test::api::idl_other_namespace_sub_namespace::ParseAnotherType(*another_type_as_string);
          if (tmp == test::api::idl_other_namespace_sub_namespace::AnotherType()) {
            return std::nullopt;
          }
          params.values.push_back(tmp);
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace Function23

namespace Function24 {

}  // namespace Function24

namespace Function25 {

}  // namespace Function25

namespace Function26 {

}  // namespace Function26

namespace Function27 {

}  // namespace Function27

namespace Function28 {

}  // namespace Function28

namespace Function29 {

}  // namespace Function29

namespace Function30 {

}  // namespace Function30

namespace FuncAsync {

base::ListValue Results::Create(const std::vector<MyType2>& arg) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(arg));

  return create_results;
}
}  // namespace FuncAsync

namespace FuncOptionalArgAndNotPromiseBased {

base::ListValue Results::Create(const std::string& arg0) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(arg0);

  return create_results;
}
}  // namespace FuncOptionalArgAndNotPromiseBased

namespace FuncOptionalArgCallback {

base::ListValue Results::Create(const std::string& arg0) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(arg0);

  return create_results;
}
}  // namespace FuncOptionalArgCallback

namespace FuncOptionalCallbackNotPromiseBased {

base::ListValue Results::Create(int x) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(x);

  return create_results;
}
}  // namespace FuncOptionalCallbackNotPromiseBased

namespace FuncOptionalCallback {

base::ListValue Results::Create(int x) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(x);

  return create_results;
}
}  // namespace FuncOptionalCallback

namespace FuncWithEntry {

Params::EntriesType::EntriesType()
 {}

Params::EntriesType::~EntriesType() = default;
Params::EntriesType::EntriesType(EntriesType&& rhs) noexcept = default;
Params::EntriesType& Params::EntriesType::operator=(EntriesType&& rhs) noexcept = default;
Params::EntriesType Params::EntriesType::Clone() const {
  EntriesType out;
  out.additional_properties = additional_properties.Clone();
  return out;
}

// static
bool Params::EntriesType::Populate(
    const base::DictValue& dict, EntriesType& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::EntriesType::Populate(
    const base::Value& value, EntriesType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::EntriesType> Params::EntriesType::FromValue(const base::DictValue& value) {
  EntriesType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::EntriesType> Params::EntriesType::FromValue(const base::Value& value) {
  EntriesType out;
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
    const base::Value& entries_value = args[0];
    {
      if (!entries_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(entries_value.GetList(), params.entries)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace FuncWithEntry

namespace FuncWithArrayObj {

Params::EntriesType::EntriesType()
 {}

Params::EntriesType::~EntriesType() = default;
Params::EntriesType::EntriesType(EntriesType&& rhs) noexcept = default;
Params::EntriesType& Params::EntriesType::operator=(EntriesType&& rhs) noexcept = default;
Params::EntriesType Params::EntriesType::Clone() const {
  EntriesType out;
  out.additional_properties = additional_properties.Clone();
  return out;
}

// static
bool Params::EntriesType::Populate(
    const base::DictValue& dict, EntriesType& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::EntriesType::Populate(
    const base::Value& value, EntriesType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::EntriesType> Params::EntriesType::FromValue(const base::DictValue& value) {
  EntriesType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::EntriesType> Params::EntriesType::FromValue(const base::Value& value) {
  EntriesType out;
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
    const base::Value& entries_value = args[0];
    {
      if (!entries_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(entries_value.GetList(), params.entries)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace FuncWithArrayObj

//
// Events
//

namespace OnFoo1 {

const char kEventName[] = "idl_basics.onFoo1";

base::ListValue Create() {
  base::ListValue create_results;

  return create_results;
}

}  // namespace OnFoo1

namespace OnFoo2 {

const char kEventName[] = "idl_basics.onFoo2";

base::ListValue Create(const MyType1& arg) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((arg).ToValue());

  return create_results;
}

}  // namespace OnFoo2

namespace OnFoo3 {

const char kEventName[] = "idl_basics.onFoo3";

base::ListValue Create(const EnumType& type) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(idl_basics::ToString(type));

  return create_results;
}

}  // namespace OnFoo3

}  // namespace idl_basics
}  // namespace api
}  // namespace test

