// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/arrays.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/arrays.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#include "tools/json_schema_compiler/test/arrays.h"

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
#include "tools/json_schema_compiler/test/enums.h"


using base::UTF8ToUTF16;

namespace test {
namespace api {
namespace arrays {
//
// Types
//

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


EnumArrayReference::EnumArrayReference()
 {}

EnumArrayReference::~EnumArrayReference() = default;
EnumArrayReference::EnumArrayReference(EnumArrayReference&& rhs) noexcept = default;
EnumArrayReference& EnumArrayReference::operator=(EnumArrayReference&& rhs) noexcept = default;
EnumArrayReference EnumArrayReference::Clone() const {
  EnumArrayReference out;
  out.types = types;
  return out;
}

// static
bool EnumArrayReference::Populate(
    const base::DictValue& dict, EnumArrayReference& out) {
  const base::Value* types_value = dict.Find("types");
  if (!types_value) {
    return false;
  }
  {
    if (!(*types_value).is_list()) {
      return false;
    }
    else {
      for (const auto& it : ((*types_value)).GetList()) {
        Enumeration tmp;
        const std::string* enumeration_as_string = (it).GetIfString();
        if (!enumeration_as_string) {
          return false;
        }
        tmp = ParseEnumeration(*enumeration_as_string);
        if (tmp == Enumeration()) {
          return false;
        }
        out.types.push_back(tmp);
      }
    }
  }

  return true;
}

// static
bool EnumArrayReference::Populate(
    const base::Value& value, EnumArrayReference& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EnumArrayReference> EnumArrayReference::FromValue(const base::DictValue& value) {
  EnumArrayReference out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EnumArrayReference> EnumArrayReference::FromValue(const base::Value& value) {
  EnumArrayReference out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue EnumArrayReference::ToValue() const {
  base::DictValue to_value_result;

  {
    std::vector<std::string> types_list;
    for (const auto& it : (this->types)) {
      types_list.emplace_back(arrays::ToString(it));
    }
    to_value_result.Set("types", json_schema_compiler::util::CreateValueFromArray(types_list));
  }


  return to_value_result;
}


EnumArrayMixed::EnumArrayMixed()
 {}

EnumArrayMixed::~EnumArrayMixed() = default;
EnumArrayMixed::EnumArrayMixed(EnumArrayMixed&& rhs) noexcept = default;
EnumArrayMixed& EnumArrayMixed::operator=(EnumArrayMixed&& rhs) noexcept = default;
EnumArrayMixed EnumArrayMixed::Clone() const {
  EnumArrayMixed out;
  out.infile_enums = infile_enums;
  out.external_enums = external_enums;
  return out;
}

// static
bool EnumArrayMixed::Populate(
    const base::DictValue& dict, EnumArrayMixed& out) {
  const base::Value* infile_enums_value = dict.Find("infile_enums");
  if (!infile_enums_value) {
    return false;
  }
  {
    if (!(*infile_enums_value).is_list()) {
      return false;
    }
    else {
      for (const auto& it : ((*infile_enums_value)).GetList()) {
        Enumeration tmp;
        const std::string* enumeration_as_string = (it).GetIfString();
        if (!enumeration_as_string) {
          return false;
        }
        tmp = ParseEnumeration(*enumeration_as_string);
        if (tmp == Enumeration()) {
          return false;
        }
        out.infile_enums.push_back(tmp);
      }
    }
  }

  const base::Value* external_enums_value = dict.Find("external_enums");
  if (!external_enums_value) {
    return false;
  }
  {
    if (!(*external_enums_value).is_list()) {
      return false;
    }
    else {
      for (const auto& it : ((*external_enums_value)).GetList()) {
        test::api::enums::Enumeration tmp;
        const std::string* enumeration_as_string = (it).GetIfString();
        if (!enumeration_as_string) {
          return false;
        }
        tmp = test::api::enums::ParseEnumeration(*enumeration_as_string);
        if (tmp == test::api::enums::Enumeration()) {
          return false;
        }
        out.external_enums.push_back(tmp);
      }
    }
  }

  return true;
}

// static
bool EnumArrayMixed::Populate(
    const base::Value& value, EnumArrayMixed& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EnumArrayMixed> EnumArrayMixed::FromValue(const base::DictValue& value) {
  EnumArrayMixed out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EnumArrayMixed> EnumArrayMixed::FromValue(const base::Value& value) {
  EnumArrayMixed out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue EnumArrayMixed::ToValue() const {
  base::DictValue to_value_result;

  {
    std::vector<std::string> infile_enums_list;
    for (const auto& it : (this->infile_enums)) {
      infile_enums_list.emplace_back(arrays::ToString(it));
    }
    to_value_result.Set("infile_enums", json_schema_compiler::util::CreateValueFromArray(infile_enums_list));
  }

  {
    std::vector<std::string> external_enums_list;
    for (const auto& it : (this->external_enums)) {
      external_enums_list.emplace_back(enums::ToString(it));
    }
    to_value_result.Set("external_enums", json_schema_compiler::util::CreateValueFromArray(external_enums_list));
  }


  return to_value_result;
}


OptionalEnumArrayType::OptionalEnumArrayType()
 {}

OptionalEnumArrayType::~OptionalEnumArrayType() = default;
OptionalEnumArrayType::OptionalEnumArrayType(OptionalEnumArrayType&& rhs) noexcept = default;
OptionalEnumArrayType& OptionalEnumArrayType::operator=(OptionalEnumArrayType&& rhs) noexcept = default;
OptionalEnumArrayType OptionalEnumArrayType::Clone() const {
  OptionalEnumArrayType out;
  out.types = types;
  return out;
}

// static
bool OptionalEnumArrayType::Populate(
    const base::DictValue& dict, OptionalEnumArrayType& out) {
  const base::Value* types_value = dict.Find("types");
  if (types_value) {
    {
      if (!(*types_value).is_list()) {
        return false;
      }
      else {
        out.types.emplace();
        for (const auto& it : ((*types_value)).GetList()) {
          Enumeration tmp;
          const std::string* enumeration_as_string = (it).GetIfString();
          if (!enumeration_as_string) {
            return false;
          }
          tmp = ParseEnumeration(*enumeration_as_string);
          if (tmp == Enumeration()) {
            return false;
          }
          out.types->push_back(tmp);
        }
      }
    }
  }

  return true;
}

// static
bool OptionalEnumArrayType::Populate(
    const base::Value& value, OptionalEnumArrayType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<OptionalEnumArrayType> OptionalEnumArrayType::FromValue(const base::DictValue& value) {
  OptionalEnumArrayType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<OptionalEnumArrayType> OptionalEnumArrayType::FromValue(const base::Value& value) {
  OptionalEnumArrayType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue OptionalEnumArrayType::ToValue() const {
  base::DictValue to_value_result;

  if (this->types) {
    {
      std::vector<std::string> types_list;
      for (const auto& it : *(this->types)) {
        types_list.emplace_back(arrays::ToString(it));
      }
      to_value_result.Set("types", json_schema_compiler::util::CreateValueFromArray(types_list));
    }

  }

  return to_value_result;
}


BasicArrayType::BasicArrayType()
 {}

BasicArrayType::~BasicArrayType() = default;
BasicArrayType::BasicArrayType(BasicArrayType&& rhs) noexcept = default;
BasicArrayType& BasicArrayType::operator=(BasicArrayType&& rhs) noexcept = default;
BasicArrayType BasicArrayType::Clone() const {
  BasicArrayType out;
  out.strings = strings;
  out.booleans = booleans;
  out.numbers = numbers;
  out.integers = integers;
  return out;
}

// static
bool BasicArrayType::Populate(
    const base::DictValue& dict, BasicArrayType& out) {
  const base::Value* strings_value = dict.Find("strings");
  if (!strings_value) {
    return false;
  }
  {
    if (!(*strings_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*strings_value).GetList(), out.strings)) {
        return false;
      }
    }
  }

  const base::Value* booleans_value = dict.Find("booleans");
  if (!booleans_value) {
    return false;
  }
  {
    if (!(*booleans_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*booleans_value).GetList(), out.booleans)) {
        return false;
      }
    }
  }

  const base::Value* numbers_value = dict.Find("numbers");
  if (!numbers_value) {
    return false;
  }
  {
    if (!(*numbers_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*numbers_value).GetList(), out.numbers)) {
        return false;
      }
    }
  }

  const base::Value* integers_value = dict.Find("integers");
  if (!integers_value) {
    return false;
  }
  {
    if (!(*integers_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*integers_value).GetList(), out.integers)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool BasicArrayType::Populate(
    const base::Value& value, BasicArrayType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<BasicArrayType> BasicArrayType::FromValue(const base::DictValue& value) {
  BasicArrayType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<BasicArrayType> BasicArrayType::FromValue(const base::Value& value) {
  BasicArrayType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue BasicArrayType::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("strings", json_schema_compiler::util::CreateValueFromArray(this->strings));

  to_value_result.Set("booleans", json_schema_compiler::util::CreateValueFromArray(this->booleans));

  to_value_result.Set("numbers", json_schema_compiler::util::CreateValueFromArray(this->numbers));

  to_value_result.Set("integers", json_schema_compiler::util::CreateValueFromArray(this->integers));


  return to_value_result;
}


Item::Item()
: val(0) {}

Item::~Item() = default;
Item::Item(Item&& rhs) noexcept = default;
Item& Item::operator=(Item&& rhs) noexcept = default;
Item Item::Clone() const {
  Item out;
  out.val = val;
  return out;
}

// static
bool Item::Populate(
    const base::DictValue& dict, Item& out) {
  const base::Value* val_value = dict.Find("val");
  if (!val_value) {
    return false;
  }
  {
    auto temp = (*val_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.val = *temp;
  }

  return true;
}

// static
bool Item::Populate(
    const base::Value& value, Item& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Item> Item::FromValue(const base::DictValue& value) {
  Item out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Item> Item::FromValue(const base::Value& value) {
  Item out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Item::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("val", this->val);


  return to_value_result;
}


RefArrayType::RefArrayType()
 {}

RefArrayType::~RefArrayType() = default;
RefArrayType::RefArrayType(RefArrayType&& rhs) noexcept = default;
RefArrayType& RefArrayType::operator=(RefArrayType&& rhs) noexcept = default;
RefArrayType RefArrayType::Clone() const {
  RefArrayType out;
  out.refs.reserve(refs.size());
  for (const auto& element : refs) {
    json_schema_compiler::util::AppendToContainer(out.refs, element.Clone());
  }
  return out;
}

// static
bool RefArrayType::Populate(
    const base::DictValue& dict, RefArrayType& out) {
  const base::Value* refs_value = dict.Find("refs");
  if (!refs_value) {
    return false;
  }
  {
    if (!(*refs_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*refs_value).GetList(), out.refs)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool RefArrayType::Populate(
    const base::Value& value, RefArrayType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RefArrayType> RefArrayType::FromValue(const base::DictValue& value) {
  RefArrayType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RefArrayType> RefArrayType::FromValue(const base::Value& value) {
  RefArrayType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue RefArrayType::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("refs", json_schema_compiler::util::CreateValueFromArray(this->refs));


  return to_value_result;
}



//
// Functions
//

namespace IntegerArray {

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
    const base::Value& nums_value = args[0];
    {
      if (!nums_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(nums_value.GetList(), params.nums)) {
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


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace IntegerArray

namespace AnyArray {

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
    const base::Value& anys_value = args[0];
    {
      if (!anys_value.is_list()) {
        return std::nullopt;
      }
      else {
        params.anys = anys_value.GetList().Clone();
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
}  // namespace AnyArray

namespace ObjectArray {

Params::ObjectsType::ObjectsType()
 {}

Params::ObjectsType::~ObjectsType() = default;
Params::ObjectsType::ObjectsType(ObjectsType&& rhs) noexcept = default;
Params::ObjectsType& Params::ObjectsType::operator=(ObjectsType&& rhs) noexcept = default;
Params::ObjectsType Params::ObjectsType::Clone() const {
  ObjectsType out;
  return out;
}

// static
bool Params::ObjectsType::Populate(
    const base::DictValue& dict, ObjectsType& out) {
  for (const auto item : dict) {
    int tmp;
    {
      auto temp = item.second.GetIfInt();
      if (!temp.has_value()) {
        return false;
      }
      tmp = *temp;
    }
    out.additional_properties[item.first] = tmp;
  }
  return true;
}

// static
bool Params::ObjectsType::Populate(
    const base::Value& value, ObjectsType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::ObjectsType> Params::ObjectsType::FromValue(const base::DictValue& value) {
  ObjectsType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::ObjectsType> Params::ObjectsType::FromValue(const base::Value& value) {
  ObjectsType out;
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
    const base::Value& objects_value = args[0];
    {
      if (!objects_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(objects_value.GetList(), params.objects)) {
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


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace ObjectArray

namespace RefArray {

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
    const base::Value& refs_value = args[0];
    {
      if (!refs_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(refs_value.GetList(), params.refs)) {
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


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace RefArray

namespace JustChoices {

Params::Choices::Choices()
 {}

Params::Choices::~Choices() = default;
Params::Choices::Choices(Choices&& rhs) noexcept = default;
Params::Choices& Params::Choices::operator=(Choices&& rhs) noexcept = default;
Params::Choices Params::Choices::Clone() const {
  Choices out;
  out.as_integer = as_integer;
  out.as_boolean = as_boolean;
  if (as_items) {
    out.as_items.emplace();
    out.as_items->reserve(as_items->size());
    for (const auto& element : *as_items) {
      json_schema_compiler::util::AppendToContainer(*out.as_items, element.Clone());
    }
  }
  return out;
}

// static
bool Params::Choices::Populate(
    const base::Value& value, Choices& out) {
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
  if (value.type() == base::Value::Type::BOOLEAN) {
    {
      auto temp = value.GetIfBool();
      if (!temp.has_value()) {
        out.as_boolean = std::nullopt;
        return false;
      }
      out.as_boolean = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_items)) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

// static
std::optional<Params::Choices> Params::Choices::FromValue(const base::Value& value) {
  Choices out;
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
    const base::Value& choices_value = args[0];
    {
      if (!Choices::Populate(choices_value, params.choices))
        return std::nullopt;
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
}  // namespace JustChoices

namespace ChoicesArray {

Params::ChoicesType::ChoicesType()
 {}

Params::ChoicesType::~ChoicesType() = default;
Params::ChoicesType::ChoicesType(ChoicesType&& rhs) noexcept = default;
Params::ChoicesType& Params::ChoicesType::operator=(ChoicesType&& rhs) noexcept = default;
Params::ChoicesType Params::ChoicesType::Clone() const {
  ChoicesType out;
  out.as_integer = as_integer;
  out.as_boolean = as_boolean;
  if (as_items) {
    out.as_items.emplace();
    out.as_items->reserve(as_items->size());
    for (const auto& element : *as_items) {
      json_schema_compiler::util::AppendToContainer(*out.as_items, element.Clone());
    }
  }
  return out;
}

// static
bool Params::ChoicesType::Populate(
    const base::Value& value, ChoicesType& out) {
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
  if (value.type() == base::Value::Type::BOOLEAN) {
    {
      auto temp = value.GetIfBool();
      if (!temp.has_value()) {
        out.as_boolean = std::nullopt;
        return false;
      }
      out.as_boolean = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_items)) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

// static
std::optional<Params::ChoicesType> Params::ChoicesType::FromValue(const base::Value& value) {
  ChoicesType out;
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
    const base::Value& choices_value = args[0];
    {
      if (!choices_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(choices_value.GetList(), params.choices)) {
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


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace ChoicesArray

namespace ReturnIntegerArray {

base::ListValue Results::Create(const std::vector<int>& integers) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(integers));

  return create_results;
}
}  // namespace ReturnIntegerArray

namespace ReturnRefArray {

base::ListValue Results::Create(const std::vector<Item>& refs) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(refs));

  return create_results;
}
}  // namespace ReturnRefArray

}  // namespace arrays
}  // namespace api
}  // namespace test

