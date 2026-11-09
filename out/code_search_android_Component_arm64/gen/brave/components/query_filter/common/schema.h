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

#ifndef BRAVE_COMPONENTS_QUERY_FILTER_COMMON_SCHEMA_H__
#define BRAVE_COMPONENTS_QUERY_FILTER_COMMON_SCHEMA_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/types/expected.h"


namespace query_filter {
namespace schema {

//
// Types
//

struct Rule {
  Rule();
  ~Rule();
  Rule(const Rule&) = delete;
  Rule& operator=(const Rule&) = delete;
  Rule(Rule&& rhs) noexcept;
  Rule& operator=(Rule&& rhs) noexcept;

  // Populates a Rule object from a base::Value& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value& value, Rule& out, std::u16string& error);

  // Populates a Rule object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, Rule& out, std::u16string& error);

  // Creates a deep copy of Rule.
  Rule Clone() const;

  // Creates a Rule object from a base::DictValue, or unexpected on failure.
  static base::expected<Rule, std::u16string> FromValue(const base::DictValue& value);

  // Creates a Rule object from a base::Value, or unexpected on failure.
  static base::expected<Rule, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of thisRule
  // object.
  base::DictValue ToValue() const;

  // The list of domains (wildcard supported) to consider to remove the query
  // params |params|.
  std::vector<std::string> include;

  // The list of domains (wildcard supported) on which NOT to exclude the query
  // params |params|.
  std::vector<std::string> exclude;

  // The list of query parameters which are subjected to query filtering.
  std::vector<std::string> params;

};


}  // namespace schema
}  // namespace query_filter

#endif  // BRAVE_COMPONENTS_QUERY_FILTER_COMMON_SCHEMA_H__
