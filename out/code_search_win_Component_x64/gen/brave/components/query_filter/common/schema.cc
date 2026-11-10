// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/query_filter/common/schema.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/query_filter/common/schema.idl --root=../../ --destdir=gen --namespace=query_filter::%(namespace)s --generator=cpp --include-rules=

#include "brave/components/query_filter/common/schema.h"

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
#include "base/types/expected.h"


using base::UTF8ToUTF16;

namespace query_filter {
namespace schema {
//
// Types
//

Rule::Rule()
 {}

Rule::~Rule() = default;
Rule::Rule(Rule&& rhs) noexcept = default;
Rule& Rule::operator=(Rule&& rhs) noexcept = default;
Rule Rule::Clone() const {
  Rule out;
  out.include = include;
  out.exclude = exclude;
  out.params = params;
  return out;
}

// static
bool Rule::Populate(
    const base::DictValue& dict, Rule& out, std::u16string& error) {
  const base::Value* include_value = dict.Find("include");
  if (!include_value) {
    DCHECK(error.empty());
    error = u"'include' is required";
    return false;
  }
  {
    if (!(*include_value).is_list()) {
      DCHECK(error.empty());
      error = u"'include': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*include_value).type()));
      return false;
    }
    else {
      std::u16string array_parse_error;
      if (!json_schema_compiler::util::PopulateArrayFromList((*include_value).GetList(), out.include, array_parse_error)) {
        array_parse_error = u"Error at key 'include': " + array_parse_error;
        DCHECK(error.empty());
        error = array_parse_error;
        return false;
      }
    }
  }

  const base::Value* exclude_value = dict.Find("exclude");
  if (!exclude_value) {
    DCHECK(error.empty());
    error = u"'exclude' is required";
    return false;
  }
  {
    if (!(*exclude_value).is_list()) {
      DCHECK(error.empty());
      error = u"'exclude': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*exclude_value).type()));
      return false;
    }
    else {
      std::u16string array_parse_error;
      if (!json_schema_compiler::util::PopulateArrayFromList((*exclude_value).GetList(), out.exclude, array_parse_error)) {
        array_parse_error = u"Error at key 'exclude': " + array_parse_error;
        DCHECK(error.empty());
        error = array_parse_error;
        return false;
      }
    }
  }

  const base::Value* params_value = dict.Find("params");
  if (!params_value) {
    DCHECK(error.empty());
    error = u"'params' is required";
    return false;
  }
  {
    if (!(*params_value).is_list()) {
      DCHECK(error.empty());
      error = u"'params': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*params_value).type()));
      return false;
    }
    else {
      std::u16string array_parse_error;
      if (!json_schema_compiler::util::PopulateArrayFromList((*params_value).GetList(), out.params, array_parse_error)) {
        array_parse_error = u"Error at key 'params': " + array_parse_error;
        DCHECK(error.empty());
        error = array_parse_error;
        return false;
      }
    }
  }

  return true;
}

// static
bool Rule::Populate(
    const base::Value& value, Rule& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<Rule, std::u16string> Rule::FromValue(const base::DictValue& value) {
  std::u16string error;
  Rule out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<Rule, std::u16string> Rule::FromValue(const base::Value& value) {
  std::u16string error;
  Rule out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::DictValue Rule::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("include", json_schema_compiler::util::CreateValueFromArray(this->include));

  to_value_result.Set("exclude", json_schema_compiler::util::CreateValueFromArray(this->exclude));

  to_value_result.Set("params", json_schema_compiler::util::CreateValueFromArray(this->params));


  return to_value_result;
}



}  // namespace schema
}  // namespace query_filter

