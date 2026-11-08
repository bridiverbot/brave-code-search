// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/any.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/any.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#include "tools/json_schema_compiler/test/any.h"

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
namespace any {
//
// Types
//

AnyType::AnyType()
 {}

AnyType::~AnyType() = default;
AnyType::AnyType(AnyType&& rhs) noexcept = default;
AnyType& AnyType::operator=(AnyType&& rhs) noexcept = default;
AnyType AnyType::Clone() const {
  AnyType out;
  out.any = any.Clone();
  return out;
}

// static
bool AnyType::Populate(
    const base::DictValue& dict, AnyType& out) {
  const base::Value* any_value = dict.Find("any");
  if (!any_value) {
    return false;
  }
  {
    out.any = (*any_value).Clone();
  }

  return true;
}

// static
bool AnyType::Populate(
    const base::Value& value, AnyType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AnyType> AnyType::FromValue(const base::DictValue& value) {
  AnyType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AnyType> AnyType::FromValue(const base::Value& value) {
  AnyType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AnyType::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("any", (this->any).Clone());


  return to_value_result;
}



//
// Functions
//

namespace OptionalAny {

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
    const base::Value& any_name_value = args[0];
    {
      params.any_name = any_name_value.Clone();
    }
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace OptionalAny

namespace ReturnAny {

base::ListValue Results::Create(const base::Value& result) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((result).Clone());

  return create_results;
}
}  // namespace ReturnAny

//
// Events
//

namespace OnAnyFired {

const char kEventName[] = "any.onAnyFired";

base::ListValue Create(const base::Value& something) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((something).Clone());

  return create_results;
}

}  // namespace OnAnyFired

}  // namespace any
}  // namespace api
}  // namespace test

