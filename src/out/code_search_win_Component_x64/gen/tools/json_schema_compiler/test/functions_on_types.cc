// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/functions_on_types.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/functions_on_types.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#include "tools/json_schema_compiler/test/functions_on_types.h"

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
namespace functions_on_types {
//
// Types
//

namespace StorageArea {

namespace Get {

Params::Keys::Object::Object()
 {}

Params::Keys::Object::~Object() = default;
Params::Keys::Object::Object(Object&& rhs) noexcept = default;
Params::Keys::Object& Params::Keys::Object::operator=(Object&& rhs) noexcept = default;
Params::Keys::Object Params::Keys::Object::Clone() const {
  Object out;
  out.additional_properties = additional_properties.Clone();
  return out;
}

// static
bool Params::Keys::Object::Populate(
    const base::DictValue& dict, Object& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::Keys::Object::Populate(
    const base::Value& value, Object& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Keys::Object> Params::Keys::Object::FromValue(const base::DictValue& value) {
  Object out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Keys::Object> Params::Keys::Object::FromValue(const base::Value& value) {
  Object out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}



Params::Keys::Keys()
 {}

Params::Keys::~Keys() = default;
Params::Keys::Keys(Keys&& rhs) noexcept = default;
Params::Keys& Params::Keys::operator=(Keys&& rhs) noexcept = default;
Params::Keys Params::Keys::Clone() const {
  Keys out;
  out.as_string = as_string;
  if (as_object) {
    out.as_object = as_object->Clone();
  }
  return out;
}

// static
bool Params::Keys::Populate(
    const base::Value& value, Keys& out) {
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
std::optional<Params::Keys> Params::Keys::FromValue(const base::Value& value) {
  Keys out;
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
    const base::Value& keys_value = args[0];
    {
      Keys temp;
      if (!Keys::Populate(keys_value, temp))
        return std::nullopt;
      params.keys = std::move(temp);
    }
  }

  return params;
}


Results::Items::Items()
 {}

Results::Items::~Items() = default;
Results::Items::Items(Items&& rhs) noexcept = default;
Results::Items& Results::Items::operator=(Items&& rhs) noexcept = default;
base::DictValue Results::Items::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::ListValue Results::Create(const Items& items) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((items).ToValue());

  return create_results;
}
}  // namespace Get

}  // namespace StorageArea

namespace ChromeSetting {

namespace Get {

Params::Details::Details()
 {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) noexcept = default;
Params::Details& Params::Details::operator=(Details&& rhs) noexcept = default;
Params::Details Params::Details::Clone() const {
  Details out;
  out.incognito = incognito;
  return out;
}

// static
bool Params::Details::Populate(
    const base::DictValue& dict, Details& out) {
  const base::Value* incognito_value = dict.Find("incognito");
  if (incognito_value) {
    {
      auto temp = (*incognito_value).GetIfBool();
      if (!temp.has_value()) {
        out.incognito = std::nullopt;
        return false;
      }
      out.incognito = *temp;
    }
  }

  return true;
}

// static
bool Params::Details::Populate(
    const base::Value& value, Details& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::DictValue& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
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
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!Details::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace Get

}  // namespace ChromeSetting


}  // namespace functions_on_types
}  // namespace api
}  // namespace test

