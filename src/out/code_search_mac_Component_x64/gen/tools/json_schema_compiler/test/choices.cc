// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/choices.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/choices.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#include "tools/json_schema_compiler/test/choices.h"

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
namespace choices {
//
// Types
//

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
    const base::Value& value, Integers& out) {
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_integers)) {
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
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  return false;
}

// static
std::optional<ChoiceType::Integers> ChoiceType::Integers::FromValue(const base::Value& value) {
  Integers out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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


ChoiceType::Strings::Strings()
 {}

ChoiceType::Strings::~Strings() = default;
ChoiceType::Strings::Strings(Strings&& rhs) noexcept = default;
ChoiceType::Strings& ChoiceType::Strings::operator=(Strings&& rhs) noexcept = default;
ChoiceType::Strings ChoiceType::Strings::Clone() const {
  Strings out;
  out.as_strings = as_strings;
  out.as_string = as_string;
  return out;
}

// static
bool ChoiceType::Strings::Populate(
    const base::Value& value, Strings& out) {
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
std::optional<ChoiceType::Strings> ChoiceType::Strings::FromValue(const base::Value& value) {
  Strings out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value ChoiceType::Strings::ToValue() const {
  base::Value result;
  if (as_strings) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for strings";
    result = base::Value(json_schema_compiler::util::CreateValueFromArray(*as_strings));

  }
  if (as_string) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for strings";
    result = base::Value(*as_string);

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for strings";
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
  if (strings) {
    out.strings = strings->Clone();
  }
  return out;
}

// static
bool ChoiceType::Populate(
    const base::DictValue& dict, ChoiceType& out) {
  const base::Value* integers_value = dict.Find("integers");
  if (!integers_value) {
    return false;
  }
  {
    if (!Integers::Populate((*integers_value), out.integers))
      return false;
  }

  const base::Value* strings_value = dict.Find("strings");
  if (strings_value) {
    {
      Strings temp;
      if (!Strings::Populate((*strings_value), temp))
        return false;
      out.strings = std::move(temp);
    }
  }

  return true;
}

// static
bool ChoiceType::Populate(
    const base::Value& value, ChoiceType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ChoiceType> ChoiceType::FromValue(const base::DictValue& value) {
  ChoiceType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ChoiceType> ChoiceType::FromValue(const base::Value& value) {
  ChoiceType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ChoiceType::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("integers", (this->integers).ToValue());

  if (this->strings) {
    to_value_result.Set("strings", (this->strings)->ToValue());

  }

  return to_value_result;
}


NestedChoice::Choice1::Choice1()
 {}

NestedChoice::Choice1::~Choice1() = default;
NestedChoice::Choice1::Choice1(Choice1&& rhs) noexcept = default;
NestedChoice::Choice1& NestedChoice::Choice1::operator=(Choice1&& rhs) noexcept = default;
NestedChoice::Choice1 NestedChoice::Choice1::Clone() const {
  Choice1 out;
  out.as_string = as_string;
  out.as_boolean = as_boolean;
  return out;
}

// static
bool NestedChoice::Choice1::Populate(
    const base::Value& value, Choice1& out) {
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
  return false;
}

// static
std::optional<NestedChoice::Choice1> NestedChoice::Choice1::FromValue(const base::Value& value) {
  Choice1 out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value NestedChoice::Choice1::ToValue() const {
  base::Value result;
  if (as_string) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for choice1";
    result = base::Value(*as_string);

  }
  if (as_boolean) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for choice1";
    result = base::Value(*as_boolean);

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for choice1";
  return result;
}


NestedChoice::Choice2::Choice2()
 {}

NestedChoice::Choice2::~Choice2() = default;
NestedChoice::Choice2::Choice2(Choice2&& rhs) noexcept = default;
NestedChoice::Choice2& NestedChoice::Choice2::operator=(Choice2&& rhs) noexcept = default;
NestedChoice::Choice2 NestedChoice::Choice2::Clone() const {
  Choice2 out;
  out.as_double_ = as_double_;
  if (as_choice_type) {
    out.as_choice_type = as_choice_type->Clone();
  }
  if (as_choice_types) {
    out.as_choice_types.emplace();
    out.as_choice_types->reserve(as_choice_types->size());
    for (const auto& element : *as_choice_types) {
      json_schema_compiler::util::AppendToContainer(*out.as_choice_types, element.Clone());
    }
  }
  return out;
}

// static
bool NestedChoice::Choice2::Populate(
    const base::Value& value, Choice2& out) {
  if (value.type() == base::Value::Type::DOUBLE) {
    {
      auto temp = value.GetIfDouble();
      if (!temp.has_value()) {
        out.as_double_ = std::nullopt;
        return false;
      }
      out.as_double_ = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::DICT) {
    {
      if (!value.is_dict()) {
        return false;
      }
      else {
        ChoiceType temp;
        if (!ChoiceType::Populate(value.GetDict(), temp))
          return false;
        out.as_choice_type = std::move(temp);
      }
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_choice_types)) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

// static
std::optional<NestedChoice::Choice2> NestedChoice::Choice2::FromValue(const base::Value& value) {
  Choice2 out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value NestedChoice::Choice2::ToValue() const {
  base::Value result;
  if (as_double_) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for choice2";
    result = base::Value(*as_double_);

  }
  if (as_choice_type) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for choice2";
    result = base::Value((as_choice_type)->ToValue());

  }
  if (as_choice_types) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for choice2";
    result = base::Value(json_schema_compiler::util::CreateValueFromArray(*as_choice_types));

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for choice2";
  return result;
}



NestedChoice::NestedChoice()
 {}

NestedChoice::~NestedChoice() = default;
NestedChoice::NestedChoice(NestedChoice&& rhs) noexcept = default;
NestedChoice& NestedChoice::operator=(NestedChoice&& rhs) noexcept = default;
NestedChoice NestedChoice::Clone() const {
  NestedChoice out;
  out.as_integer = as_integer;
  if (as_choice1) {
    out.as_choice1 = as_choice1->Clone();
  }
  if (as_choice2) {
    out.as_choice2 = as_choice2->Clone();
  }
  return out;
}

// static
bool NestedChoice::Populate(
    const base::Value& value, NestedChoice& out) {
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
  if ((value.type() == base::Value::Type::STRING || value.type() == base::Value::Type::BOOLEAN)) {
    {
      Choice1 temp;
      if (!Choice1::Populate(value, temp))
        return false;
      out.as_choice1 = std::move(temp);
    }
    return true;
  }
  if ((value.type() == base::Value::Type::DOUBLE || value.type() == base::Value::Type::DICT || value.type() == base::Value::Type::LIST)) {
    {
      Choice2 temp;
      if (!Choice2::Populate(value, temp))
        return false;
      out.as_choice2 = std::move(temp);
    }
    return true;
  }
  return false;
}

// static
std::optional<NestedChoice> NestedChoice::FromValue(const base::Value& value) {
  NestedChoice out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value NestedChoice::ToValue() const {
  base::Value result;
  if (as_integer) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for nested_choice";
    result = base::Value(*as_integer);

  }
  if (as_choice1) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for nested_choice";
    result = base::Value((as_choice1)->ToValue());

  }
  if (as_choice2) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for nested_choice";
    result = base::Value((as_choice2)->ToValue());

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for nested_choice";
  return result;
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
    const base::DictValue& dict, ObjectChoiceA& out) {
  const base::Value* a_value = dict.Find("a");
  if (!a_value) {
    return false;
  }
  {
    auto temp = (*a_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.a = *temp;
  }

  return true;
}

// static
bool ObjectChoiceA::Populate(
    const base::Value& value, ObjectChoiceA& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ObjectChoiceA> ObjectChoiceA::FromValue(const base::DictValue& value) {
  ObjectChoiceA out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ObjectChoiceA> ObjectChoiceA::FromValue(const base::Value& value) {
  ObjectChoiceA out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
    const base::DictValue& dict, ObjectChoiceB& out) {
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

  return true;
}

// static
bool ObjectChoiceB::Populate(
    const base::Value& value, ObjectChoiceB& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ObjectChoiceB> ObjectChoiceB::FromValue(const base::DictValue& value) {
  ObjectChoiceB out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ObjectChoiceB> ObjectChoiceB::FromValue(const base::Value& value) {
  ObjectChoiceB out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ObjectChoiceB::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("b", this->b);


  return to_value_result;
}


ObjectChoiceC::ObjectChoiceC()
: c(false) {}

ObjectChoiceC::~ObjectChoiceC() = default;
ObjectChoiceC::ObjectChoiceC(ObjectChoiceC&& rhs) noexcept = default;
ObjectChoiceC& ObjectChoiceC::operator=(ObjectChoiceC&& rhs) noexcept = default;
ObjectChoiceC ObjectChoiceC::Clone() const {
  ObjectChoiceC out;
  out.c = c;
  return out;
}

// static
bool ObjectChoiceC::Populate(
    const base::DictValue& dict, ObjectChoiceC& out) {
  const base::Value* c_value = dict.Find("c");
  if (!c_value) {
    return false;
  }
  {
    auto temp = (*c_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.c = *temp;
  }

  return true;
}

// static
bool ObjectChoiceC::Populate(
    const base::Value& value, ObjectChoiceC& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ObjectChoiceC> ObjectChoiceC::FromValue(const base::DictValue& value) {
  ObjectChoiceC out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ObjectChoiceC> ObjectChoiceC::FromValue(const base::Value& value) {
  ObjectChoiceC out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ObjectChoiceC::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("c", this->c);


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
  if (as_object_choice_c) {
    out.as_object_choice_c = as_object_choice_c->Clone();
  }
  return out;
}

// static
bool ObjectChoices::Populate(
    const base::Value& value, ObjectChoices& out) {
  if (value.type() == base::Value::Type::DICT) {
    {
      ObjectChoiceA temp;
      if (ObjectChoiceA::Populate(value.GetDict(), temp)) {
        out.as_object_choice_a = std::move(temp);
        return true;
      }
    }
  }
  if (value.type() == base::Value::Type::DICT) {
    {
      ObjectChoiceB temp;
      if (ObjectChoiceB::Populate(value.GetDict(), temp)) {
        out.as_object_choice_b = std::move(temp);
        return true;
      }
    }
  }
  if (value.type() == base::Value::Type::DICT) {
    {
      ObjectChoiceC temp;
      if (ObjectChoiceC::Populate(value.GetDict(), temp)) {
        out.as_object_choice_c = std::move(temp);
        return true;
      }
    }
  }
  return false;
}

// static
std::optional<ObjectChoices> ObjectChoices::FromValue(const base::Value& value) {
  ObjectChoices out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
  if (as_object_choice_c) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for object_choices";
    result = base::Value((as_object_choice_c)->ToValue());

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for object_choices";
  return result;
}



//
// Functions
//

namespace TakesIntegers {

Params::Nums::Nums()
 {}

Params::Nums::~Nums() = default;
Params::Nums::Nums(Nums&& rhs) noexcept = default;
Params::Nums& Params::Nums::operator=(Nums&& rhs) noexcept = default;
Params::Nums Params::Nums::Clone() const {
  Nums out;
  out.as_integers = as_integers;
  out.as_integer = as_integer;
  return out;
}

// static
bool Params::Nums::Populate(
    const base::Value& value, Nums& out) {
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_integers)) {
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
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  return false;
}

// static
std::optional<Params::Nums> Params::Nums::FromValue(const base::Value& value) {
  Nums out;
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
    const base::Value& nums_value = args[0];
    {
      if (!Nums::Populate(nums_value, params.nums))
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
}  // namespace TakesIntegers

namespace TakesIntegersOptional {

Params::Nums::Nums()
 {}

Params::Nums::~Nums() = default;
Params::Nums::Nums(Nums&& rhs) noexcept = default;
Params::Nums& Params::Nums::operator=(Nums&& rhs) noexcept = default;
Params::Nums Params::Nums::Clone() const {
  Nums out;
  out.as_integers = as_integers;
  out.as_integer = as_integer;
  return out;
}

// static
bool Params::Nums::Populate(
    const base::Value& value, Nums& out) {
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_integers)) {
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
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  return false;
}

// static
std::optional<Params::Nums> Params::Nums::FromValue(const base::Value& value) {
  Nums out;
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
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& nums_value = args[0];
    {
      Nums temp;
      if (!Nums::Populate(nums_value, temp))
        return std::nullopt;
      params.nums = std::move(temp);
    }
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace TakesIntegersOptional

namespace ObjectWithChoices {

Params::StringInfo::Strings::Strings()
 {}

Params::StringInfo::Strings::~Strings() = default;
Params::StringInfo::Strings::Strings(Strings&& rhs) noexcept = default;
Params::StringInfo::Strings& Params::StringInfo::Strings::operator=(Strings&& rhs) noexcept = default;
Params::StringInfo::Strings Params::StringInfo::Strings::Clone() const {
  Strings out;
  out.as_strings = as_strings;
  out.as_string = as_string;
  return out;
}

// static
bool Params::StringInfo::Strings::Populate(
    const base::Value& value, Strings& out) {
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
std::optional<Params::StringInfo::Strings> Params::StringInfo::Strings::FromValue(const base::Value& value) {
  Strings out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::StringInfo::Integers::Integers()
 {}

Params::StringInfo::Integers::~Integers() = default;
Params::StringInfo::Integers::Integers(Integers&& rhs) noexcept = default;
Params::StringInfo::Integers& Params::StringInfo::Integers::operator=(Integers&& rhs) noexcept = default;
Params::StringInfo::Integers Params::StringInfo::Integers::Clone() const {
  Integers out;
  out.as_integers = as_integers;
  out.as_integer = as_integer;
  return out;
}

// static
bool Params::StringInfo::Integers::Populate(
    const base::Value& value, Integers& out) {
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_integers)) {
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
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  return false;
}

// static
std::optional<Params::StringInfo::Integers> Params::StringInfo::Integers::FromValue(const base::Value& value) {
  Integers out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}



Params::StringInfo::StringInfo()
 {}

Params::StringInfo::~StringInfo() = default;
Params::StringInfo::StringInfo(StringInfo&& rhs) noexcept = default;
Params::StringInfo& Params::StringInfo::operator=(StringInfo&& rhs) noexcept = default;
Params::StringInfo Params::StringInfo::Clone() const {
  StringInfo out;
  out.strings = strings.Clone();
  if (integers) {
    out.integers = integers->Clone();
  }
  return out;
}

// static
bool Params::StringInfo::Populate(
    const base::DictValue& dict, StringInfo& out) {
  const base::Value* strings_value = dict.Find("strings");
  if (!strings_value) {
    return false;
  }
  {
    if (!Strings::Populate((*strings_value), out.strings))
      return false;
  }

  const base::Value* integers_value = dict.Find("integers");
  if (integers_value) {
    {
      Integers temp;
      if (!Integers::Populate((*integers_value), temp))
        return false;
      out.integers = std::move(temp);
    }
  }

  return true;
}

// static
bool Params::StringInfo::Populate(
    const base::Value& value, StringInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::StringInfo> Params::StringInfo::FromValue(const base::DictValue& value) {
  StringInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::StringInfo> Params::StringInfo::FromValue(const base::Value& value) {
  StringInfo out;
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
    const base::Value& string_info_value = args[0];
    {
      if (!string_info_value.is_dict()) {
        return std::nullopt;
      }
      if (!StringInfo::Populate(string_info_value.GetDict(), params.string_info)) {
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
}  // namespace ObjectWithChoices

namespace ReturnChoices {

Results::Result::Result()
 {}

Results::Result::~Result() = default;
Results::Result::Result(Result&& rhs) noexcept = default;
Results::Result& Results::Result::operator=(Result&& rhs) noexcept = default;
base::Value Results::Result::ToValue() const {
  base::Value result;
  if (as_integers) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for result";
    result = base::Value(json_schema_compiler::util::CreateValueFromArray(*as_integers));

  }
  if (as_integer) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for result";
    result = base::Value(*as_integer);

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for result";
  return result;
}


base::ListValue Results::Create(const Result& result) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace ReturnChoices

namespace ReturnMultipleChoices {

Results::FirstResult::FirstResult()
 {}

Results::FirstResult::~FirstResult() = default;
Results::FirstResult::FirstResult(FirstResult&& rhs) noexcept = default;
Results::FirstResult& Results::FirstResult::operator=(FirstResult&& rhs) noexcept = default;
base::Value Results::FirstResult::ToValue() const {
  base::Value result;
  if (as_integers) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for first_result";
    result = base::Value(json_schema_compiler::util::CreateValueFromArray(*as_integers));

  }
  if (as_integer) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for first_result";
    result = base::Value(*as_integer);

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for first_result";
  return result;
}


Results::SecondResult::SecondResult()
 {}

Results::SecondResult::~SecondResult() = default;
Results::SecondResult::SecondResult(SecondResult&& rhs) noexcept = default;
Results::SecondResult& Results::SecondResult::operator=(SecondResult&& rhs) noexcept = default;
base::Value Results::SecondResult::ToValue() const {
  base::Value result;
  if (as_integers) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for second_result";
    result = base::Value(json_schema_compiler::util::CreateValueFromArray(*as_integers));

  }
  if (as_integer) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for second_result";
    result = base::Value(*as_integer);

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for second_result";
  return result;
}


base::ListValue Results::Create(const FirstResult& first_result, const SecondResult& second_result) {
  base::ListValue create_results;
  create_results.reserve(2);
  create_results.Append((first_result).ToValue());

  create_results.Append((second_result).ToValue());

  return create_results;
}
}  // namespace ReturnMultipleChoices

}  // namespace choices
}  // namespace api
}  // namespace test

