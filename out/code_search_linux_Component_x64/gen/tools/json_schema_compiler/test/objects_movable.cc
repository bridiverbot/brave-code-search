// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/objects_movable.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/objects_movable.idl --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#include "tools/json_schema_compiler/test/objects_movable.h"

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


using base::UTF8ToUTF16;

namespace test {
namespace api {
namespace objects_movable {
//
// Types
//

const char* ToString(Foo enum_param) {
  switch (enum_param) {
    case Foo::kBar:
      return "BAR";
    case Foo::kBaz:
      return "BAZ";
    case Foo::kNone:
      return "";
  }
  NOTREACHED();
}

Foo ParseFoo(std::string_view enum_string) {
  if (enum_string == "BAR")
    return Foo::kBar;
  if (enum_string == "BAZ")
    return Foo::kBaz;
  return Foo::kNone;
}

std::u16string GetFooParseError(std::string_view enum_string) {
  return u"expected \"BAR\" or \"BAZ\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


MovablePod::MovablePod()
: foo(),
num(0),
b(false) {}

MovablePod::~MovablePod() = default;
MovablePod::MovablePod(MovablePod&& rhs) noexcept = default;
MovablePod& MovablePod::operator=(MovablePod&& rhs) noexcept = default;
MovablePod MovablePod::Clone() const {
  MovablePod out;
  out.foo = foo;
  out.str = str;
  out.num = num;
  out.b = b;
  return out;
}

// static
bool MovablePod::Populate(
    const base::DictValue& dict, MovablePod& out) {
  const base::Value* foo_value = dict.Find("foo");
  if (!foo_value) {
    return false;
  }
  {
    const std::string* foo_as_string = (*foo_value).GetIfString();
    if (!foo_as_string) {
      return false;
    }
    out.foo = ParseFoo(*foo_as_string);
    if (out.foo == Foo()) {
      return false;
    }
  }

  const base::Value* str_value = dict.Find("str");
  if (!str_value) {
    return false;
  }
  {
    auto* temp = (*str_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.str = *temp;
  }

  const base::Value* num_value = dict.Find("num");
  if (!num_value) {
    return false;
  }
  {
    auto temp = (*num_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.num = *temp;
  }

  const base::Value* b_value = dict.Find("b");
  if (!b_value) {
    return false;
  }
  {
    auto temp = (*b_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.b = *temp;
  }

  return true;
}

// static
bool MovablePod::Populate(
    const base::Value& value, MovablePod& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MovablePod> MovablePod::FromValue(const base::DictValue& value) {
  MovablePod out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MovablePod> MovablePod::FromValue(const base::Value& value) {
  MovablePod out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue MovablePod::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("foo", objects_movable::ToString(this->foo));

  to_value_result.Set("str", this->str);

  to_value_result.Set("num", this->num);

  to_value_result.Set("b", this->b);


  return to_value_result;
}


MovableParent::Blob::Blob()
 {}

MovableParent::Blob::~Blob() = default;
MovableParent::Blob::Blob(Blob&& rhs) noexcept = default;
MovableParent::Blob& MovableParent::Blob::operator=(Blob&& rhs) noexcept = default;
MovableParent::Blob MovableParent::Blob::Clone() const {
  Blob out;
  out.additional_properties = additional_properties.Clone();
  return out;
}

// static
bool MovableParent::Blob::Populate(
    const base::DictValue& dict, Blob& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool MovableParent::Blob::Populate(
    const base::Value& value, Blob& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MovableParent::Blob> MovableParent::Blob::FromValue(const base::DictValue& value) {
  Blob out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MovableParent::Blob> MovableParent::Blob::FromValue(const base::Value& value) {
  Blob out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue MovableParent::Blob::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


MovableParent::Choice::Choice()
 {}

MovableParent::Choice::~Choice() = default;
MovableParent::Choice::Choice(Choice&& rhs) noexcept = default;
MovableParent::Choice& MovableParent::Choice::operator=(Choice&& rhs) noexcept = default;
MovableParent::Choice MovableParent::Choice::Clone() const {
  Choice out;
  out.as_string = as_string;
  if (as_movable_pod) {
    out.as_movable_pod = as_movable_pod->Clone();
  }
  return out;
}

// static
bool MovableParent::Choice::Populate(
    const base::Value& value, Choice& out) {
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
        MovablePod temp;
        if (!MovablePod::Populate(value.GetDict(), temp))
          return false;
        out.as_movable_pod = std::move(temp);
      }
    }
    return true;
  }
  return false;
}

// static
std::optional<MovableParent::Choice> MovableParent::Choice::FromValue(const base::Value& value) {
  Choice out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value MovableParent::Choice::ToValue() const {
  base::Value result;
  if (as_string) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for choice";
    result = base::Value(*as_string);

  }
  if (as_movable_pod) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for choice";
    result = base::Value((as_movable_pod)->ToValue());

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for choice";
  return result;
}



MovableParent::MovableParent()
 {}

MovableParent::~MovableParent() = default;
MovableParent::MovableParent(MovableParent&& rhs) noexcept = default;
MovableParent& MovableParent::operator=(MovableParent&& rhs) noexcept = default;
MovableParent MovableParent::Clone() const {
  MovableParent out;
  out.pods.reserve(pods.size());
  for (const auto& element : pods) {
    json_schema_compiler::util::AppendToContainer(out.pods, element.Clone());
  }
  out.strs = strs;
  out.blob = blob.Clone();
  out.choice = choice.Clone();
  return out;
}

// static
bool MovableParent::Populate(
    const base::DictValue& dict, MovableParent& out) {
  const base::Value* pods_value = dict.Find("pods");
  if (!pods_value) {
    return false;
  }
  {
    if (!(*pods_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*pods_value).GetList(), out.pods)) {
        return false;
      }
    }
  }

  const base::Value* strs_value = dict.Find("strs");
  if (!strs_value) {
    return false;
  }
  {
    if (!(*strs_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*strs_value).GetList(), out.strs)) {
        return false;
      }
    }
  }

  const base::Value* blob_value = dict.Find("blob");
  if (!blob_value) {
    return false;
  }
  {
    if (!(*blob_value).is_dict()) {
      return false;
    }
    if (!Blob::Populate((*blob_value).GetDict(), out.blob)) {
      return false;
    }
  }

  const base::Value* choice_value = dict.Find("choice");
  if (!choice_value) {
    return false;
  }
  {
    if (!Choice::Populate((*choice_value), out.choice))
      return false;
  }

  return true;
}

// static
bool MovableParent::Populate(
    const base::Value& value, MovableParent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MovableParent> MovableParent::FromValue(const base::DictValue& value) {
  MovableParent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MovableParent> MovableParent::FromValue(const base::Value& value) {
  MovableParent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue MovableParent::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("pods", json_schema_compiler::util::CreateValueFromArray(this->pods));

  to_value_result.Set("strs", json_schema_compiler::util::CreateValueFromArray(this->strs));

  to_value_result.Set("blob", (this->blob).ToValue());

  to_value_result.Set("choice", (this->choice).ToValue());


  return to_value_result;
}



}  // namespace objects_movable
}  // namespace api
}  // namespace test

