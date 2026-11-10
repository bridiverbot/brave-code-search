// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/idl_object_types.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/idl_object_types.idl --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#include "tools/json_schema_compiler/test/idl_object_types.h"

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
namespace idl_object_types {
//
// Types
//

FooType::Y::Y()
 {}

FooType::Y::~Y() = default;
FooType::Y::Y(Y&& rhs) noexcept = default;
FooType::Y& FooType::Y::operator=(Y&& rhs) noexcept = default;
FooType::Y FooType::Y::Clone() const {
  Y out;
  out.additional_properties = additional_properties.Clone();
  return out;
}

// static
bool FooType::Y::Populate(
    const base::DictValue& dict, Y& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool FooType::Y::Populate(
    const base::Value& value, Y& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<FooType::Y> FooType::Y::FromValue(const base::DictValue& value) {
  Y out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<FooType::Y> FooType::Y::FromValue(const base::Value& value) {
  Y out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue FooType::Y::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


FooType::Z::Z()
 {}

FooType::Z::~Z() = default;
FooType::Z::Z(Z&& rhs) noexcept = default;
FooType::Z& FooType::Z::operator=(Z&& rhs) noexcept = default;
FooType::Z FooType::Z::Clone() const {
  Z out;
  out.additional_properties = additional_properties.Clone();
  return out;
}

// static
bool FooType::Z::Populate(
    const base::DictValue& dict, Z& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool FooType::Z::Populate(
    const base::Value& value, Z& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<FooType::Z> FooType::Z::FromValue(const base::DictValue& value) {
  Z out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<FooType::Z> FooType::Z::FromValue(const base::Value& value) {
  Z out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue FooType::Z::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



FooType::FooType()
: x(0) {}

FooType::~FooType() = default;
FooType::FooType(FooType&& rhs) noexcept = default;
FooType& FooType::operator=(FooType&& rhs) noexcept = default;
FooType FooType::Clone() const {
  FooType out;
  out.x = x;
  out.y = y.Clone();
  out.z = z.Clone();
  return out;
}

// static
bool FooType::Populate(
    const base::DictValue& dict, FooType& out) {
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
    if (!(*y_value).is_dict()) {
      return false;
    }
    if (!Y::Populate((*y_value).GetDict(), out.y)) {
      return false;
    }
  }

  const base::Value* z_value = dict.Find("z");
  if (!z_value) {
    return false;
  }
  {
    if (!(*z_value).is_dict()) {
      return false;
    }
    if (!Z::Populate((*z_value).GetDict(), out.z)) {
      return false;
    }
  }

  return true;
}

// static
bool FooType::Populate(
    const base::Value& value, FooType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<FooType> FooType::FromValue(const base::DictValue& value) {
  FooType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<FooType> FooType::FromValue(const base::Value& value) {
  FooType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue FooType::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("x", this->x);

  to_value_result.Set("y", (this->y).ToValue());

  to_value_result.Set("z", (this->z).ToValue());


  return to_value_result;
}


BarType::BarType()
 {}

BarType::~BarType() = default;
BarType::BarType(BarType&& rhs) noexcept = default;
BarType& BarType::operator=(BarType&& rhs) noexcept = default;
BarType BarType::Clone() const {
  BarType out;
  out.x = x.Clone();
  if (y) {
    out.y = y->Clone();
  }
  return out;
}

// static
bool BarType::Populate(
    const base::DictValue& dict, BarType& out) {
  const base::Value* x_value = dict.Find("x");
  if (!x_value) {
    return false;
  }
  {
    out.x = (*x_value).Clone();
  }

  const base::Value* y_value = dict.Find("y");
  if (y_value) {
    {
      out.y = (*y_value).Clone();
    }
  }

  return true;
}

// static
bool BarType::Populate(
    const base::Value& value, BarType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<BarType> BarType::FromValue(const base::DictValue& value) {
  BarType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<BarType> BarType::FromValue(const base::Value& value) {
  BarType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue BarType::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("x", (this->x).Clone());

  if (this->y) {
    to_value_result.Set("y", (this->y)->Clone());

  }

  return to_value_result;
}


BazType::BazType()
 {}

BazType::~BazType() = default;
BazType::BazType(BazType&& rhs) noexcept = default;
BazType& BazType::operator=(BazType&& rhs) noexcept = default;
BazType BazType::Clone() const {
  BazType out;
  out.x = x;
  if (foo) {
    out.foo = foo->Clone();
  }
  return out;
}

// static
bool BazType::Populate(
    const base::DictValue& dict, BazType& out) {
  const base::Value* x_value = dict.Find("x");
  if (x_value) {
    {
      auto temp = (*x_value).GetIfInt();
      if (!temp.has_value()) {
        out.x = std::nullopt;
        return false;
      }
      out.x = *temp;
    }
  }

  const base::Value* foo_value = dict.Find("foo");
  if (foo_value) {
    {
      if (!(*foo_value).is_dict()) {
        return false;
      }
      else {
        FooType temp;
        if (!FooType::Populate((*foo_value).GetDict(), temp))
          return false;
        out.foo = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool BazType::Populate(
    const base::Value& value, BazType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<BazType> BazType::FromValue(const base::DictValue& value) {
  BazType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<BazType> BazType::FromValue(const base::Value& value) {
  BazType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue BazType::ToValue() const {
  base::DictValue to_value_result;

  if (this->x) {
    to_value_result.Set("x", *this->x);

  }
  if (this->foo) {
    to_value_result.Set("foo", (this->foo)->ToValue());

  }

  return to_value_result;
}


UnionType::X::X()
 {}

UnionType::X::~X() = default;
UnionType::X::X(X&& rhs) noexcept = default;
UnionType::X& UnionType::X::operator=(X&& rhs) noexcept = default;
UnionType::X UnionType::X::Clone() const {
  X out;
  out.as_integer = as_integer;
  if (as_foo_type) {
    out.as_foo_type = as_foo_type->Clone();
  }
  return out;
}

// static
bool UnionType::X::Populate(
    const base::Value& value, X& out) {
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
  if (value.type() == base::Value::Type::DICT) {
    {
      if (!value.is_dict()) {
        return false;
      }
      else {
        FooType temp;
        if (!FooType::Populate(value.GetDict(), temp))
          return false;
        out.as_foo_type = std::move(temp);
      }
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
  if (as_integer) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for x";
    result = base::Value(*as_integer);

  }
  if (as_foo_type) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for x";
    result = base::Value((as_foo_type)->ToValue());

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for x";
  return result;
}


UnionType::Y::Object::Object()
 {}

UnionType::Y::Object::~Object() = default;
UnionType::Y::Object::Object(Object&& rhs) noexcept = default;
UnionType::Y::Object& UnionType::Y::Object::operator=(Object&& rhs) noexcept = default;
UnionType::Y::Object UnionType::Y::Object::Clone() const {
  Object out;
  out.additional_properties = additional_properties.Clone();
  return out;
}

// static
bool UnionType::Y::Object::Populate(
    const base::DictValue& dict, Object& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool UnionType::Y::Object::Populate(
    const base::Value& value, Object& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UnionType::Y::Object> UnionType::Y::Object::FromValue(const base::DictValue& value) {
  Object out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UnionType::Y::Object> UnionType::Y::Object::FromValue(const base::Value& value) {
  Object out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue UnionType::Y::Object::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



UnionType::Y::Y()
 {}

UnionType::Y::~Y() = default;
UnionType::Y::Y(Y&& rhs) noexcept = default;
UnionType::Y& UnionType::Y::operator=(Y&& rhs) noexcept = default;
UnionType::Y UnionType::Y::Clone() const {
  Y out;
  out.as_string = as_string;
  if (as_object) {
    out.as_object = as_object->Clone();
  }
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
  if (value.type() == base::Value::Type::DICT) {
    {
      if (!value.is_dict()) {
        return false;
      }
      else {
        Object temp;
        if (!Object::Populate(value.GetDict(), temp))
          return false;
        out.as_object = std::move(temp);
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
  if (as_object) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for y";
    result = base::Value((as_object)->ToValue());

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for y";
  return result;
}


UnionType::Z::Object::Object()
 {}

UnionType::Z::Object::~Object() = default;
UnionType::Z::Object::Object(Object&& rhs) noexcept = default;
UnionType::Z::Object& UnionType::Z::Object::operator=(Object&& rhs) noexcept = default;
UnionType::Z::Object UnionType::Z::Object::Clone() const {
  Object out;
  out.additional_properties = additional_properties.Clone();
  return out;
}

// static
bool UnionType::Z::Object::Populate(
    const base::DictValue& dict, Object& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool UnionType::Z::Object::Populate(
    const base::Value& value, Object& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UnionType::Z::Object> UnionType::Z::Object::FromValue(const base::DictValue& value) {
  Object out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UnionType::Z::Object> UnionType::Z::Object::FromValue(const base::Value& value) {
  Object out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue UnionType::Z::Object::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



UnionType::Z::Z()
 {}

UnionType::Z::~Z() = default;
UnionType::Z::Z(Z&& rhs) noexcept = default;
UnionType::Z& UnionType::Z::operator=(Z&& rhs) noexcept = default;
UnionType::Z UnionType::Z::Clone() const {
  Z out;
  if (as_object) {
    out.as_object = as_object->Clone();
  }
  out.as_integer = as_integer;
  return out;
}

// static
bool UnionType::Z::Populate(
    const base::Value& value, Z& out) {
  if (value.type() == base::Value::Type::DICT) {
    {
      if (!value.is_dict()) {
        return false;
      }
      else {
        Object temp;
        if (!Object::Populate(value.GetDict(), temp))
          return false;
        out.as_object = std::move(temp);
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
std::optional<UnionType::Z> UnionType::Z::FromValue(const base::Value& value) {
  Z out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value UnionType::Z::ToValue() const {
  base::Value result;
  if (as_object) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for z";
    result = base::Value((as_object)->ToValue());

  }
  if (as_integer) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for z";
    result = base::Value(*as_integer);

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for z";
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
  out.z = z.Clone();
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

  const base::Value* z_value = dict.Find("z");
  if (!z_value) {
    return false;
  }
  {
    if (!Z::Populate((*z_value), out.z))
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

  to_value_result.Set("z", (this->z).ToValue());


  return to_value_result;
}


ModifiedUnionType::X::X()
 {}

ModifiedUnionType::X::~X() = default;
ModifiedUnionType::X::X(X&& rhs) noexcept = default;
ModifiedUnionType::X& ModifiedUnionType::X::operator=(X&& rhs) noexcept = default;
ModifiedUnionType::X ModifiedUnionType::X::Clone() const {
  X out;
  out.as_integer = as_integer;
  out.as_string = as_string;
  return out;
}

// static
bool ModifiedUnionType::X::Populate(
    const base::Value& value, X& out) {
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
std::optional<ModifiedUnionType::X> ModifiedUnionType::X::FromValue(const base::Value& value) {
  X out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value ModifiedUnionType::X::ToValue() const {
  base::Value result;
  if (as_integer) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for x";
    result = base::Value(*as_integer);

  }
  if (as_string) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for x";
    result = base::Value(*as_string);

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for x";
  return result;
}



ModifiedUnionType::ModifiedUnionType()
 {}

ModifiedUnionType::~ModifiedUnionType() = default;
ModifiedUnionType::ModifiedUnionType(ModifiedUnionType&& rhs) noexcept = default;
ModifiedUnionType& ModifiedUnionType::operator=(ModifiedUnionType&& rhs) noexcept = default;
ModifiedUnionType ModifiedUnionType::Clone() const {
  ModifiedUnionType out;
  out.x = x.Clone();
  return out;
}

// static
bool ModifiedUnionType::Populate(
    const base::DictValue& dict, ModifiedUnionType& out) {
  const base::Value* x_value = dict.Find("x");
  if (!x_value) {
    return false;
  }
  {
    if (!X::Populate((*x_value), out.x))
      return false;
  }

  return true;
}

// static
bool ModifiedUnionType::Populate(
    const base::Value& value, ModifiedUnionType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ModifiedUnionType> ModifiedUnionType::FromValue(const base::DictValue& value) {
  ModifiedUnionType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ModifiedUnionType> ModifiedUnionType::FromValue(const base::Value& value) {
  ModifiedUnionType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ModifiedUnionType::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("x", (this->x).ToValue());


  return to_value_result;
}


SerializableFunctionObject::SerializableFunctionObject()
 {}

SerializableFunctionObject::~SerializableFunctionObject() = default;
SerializableFunctionObject::SerializableFunctionObject(SerializableFunctionObject&& rhs) noexcept = default;
SerializableFunctionObject& SerializableFunctionObject::operator=(SerializableFunctionObject&& rhs) noexcept = default;
SerializableFunctionObject SerializableFunctionObject::Clone() const {
  SerializableFunctionObject out;
  out.func = func;
  return out;
}

// static
bool SerializableFunctionObject::Populate(
    const base::DictValue& dict, SerializableFunctionObject& out) {
  const base::Value* func_value = dict.Find("func");
  if (!func_value) {
    return false;
  }
  {
    auto* temp = (*func_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.func = *temp;
  }

  return true;
}

// static
bool SerializableFunctionObject::Populate(
    const base::Value& value, SerializableFunctionObject& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SerializableFunctionObject> SerializableFunctionObject::FromValue(const base::DictValue& value) {
  SerializableFunctionObject out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SerializableFunctionObject> SerializableFunctionObject::FromValue(const base::Value& value) {
  SerializableFunctionObject out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue SerializableFunctionObject::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("func", this->func);


  return to_value_result;
}



//
// Functions
//

namespace ObjectFunction1 {

Params::Icon::Icon()
 {}

Params::Icon::~Icon() = default;
Params::Icon::Icon(Icon&& rhs) noexcept = default;
Params::Icon& Params::Icon::operator=(Icon&& rhs) noexcept = default;
Params::Icon Params::Icon::Clone() const {
  Icon out;
  out.additional_properties = additional_properties.Clone();
  return out;
}

// static
bool Params::Icon::Populate(
    const base::DictValue& dict, Icon& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::Icon::Populate(
    const base::Value& value, Icon& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Icon> Params::Icon::FromValue(const base::DictValue& value) {
  Icon out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Icon> Params::Icon::FromValue(const base::Value& value) {
  Icon out;
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
    const base::Value& icon_value = args[0];
    {
      if (!icon_value.is_dict()) {
        return std::nullopt;
      }
      if (!Icon::Populate(icon_value.GetDict(), params.icon)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace ObjectFunction1

namespace ObjectFunction2 {

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
    const base::Value& some_arg_value = args[0];
    {
      params.some_arg = some_arg_value.Clone();
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace ObjectFunction2

}  // namespace idl_object_types
}  // namespace api
}  // namespace test

