// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/objects_movable_json.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/objects_movable_json.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#include "tools/json_schema_compiler/test/objects_movable_json.h"

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
namespace objects_movable_json {
//
// Types
//

MovableWithAdditional::MovableWithAdditional()
 {}

MovableWithAdditional::~MovableWithAdditional() = default;
MovableWithAdditional::MovableWithAdditional(MovableWithAdditional&& rhs) noexcept = default;
MovableWithAdditional& MovableWithAdditional::operator=(MovableWithAdditional&& rhs) noexcept = default;
MovableWithAdditional MovableWithAdditional::Clone() const {
  MovableWithAdditional out;
  return out;
}

// static
bool MovableWithAdditional::Populate(
    const base::DictValue& dict, MovableWithAdditional& out) {
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

  for (const auto item : dict) {
    std::vector<std::string> tmp;
    {
      if (!item.second.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(item.second.GetList(), tmp)) {
          return false;
        }
      }
    }
    out.additional_properties[item.first] = tmp;
  }
  return true;
}

// static
bool MovableWithAdditional::Populate(
    const base::Value& value, MovableWithAdditional& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MovableWithAdditional> MovableWithAdditional::FromValue(const base::DictValue& value) {
  MovableWithAdditional out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MovableWithAdditional> MovableWithAdditional::FromValue(const base::Value& value) {
  MovableWithAdditional out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue MovableWithAdditional::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("str", this->str);

  for (const auto& it : additional_properties) {
    to_value_result.Set(it.first, json_schema_compiler::util::CreateValueFromArray(it.second));

  }

  return to_value_result;
}



}  // namespace objects_movable_json
}  // namespace api
}  // namespace test

