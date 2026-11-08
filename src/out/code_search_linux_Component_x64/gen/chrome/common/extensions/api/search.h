// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/search.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/search.idl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#ifndef CHROME_COMMON_EXTENSIONS_API_SEARCH_H__
#define CHROME_COMMON_EXTENSIONS_API_SEARCH_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include <string_view>


namespace extensions {
namespace api {
namespace search {

//
// Types
//

enum class Disposition {
  kNone = 0,
  kCurrentTab,
  kNewTab,
  kNewWindow,
  kMaxValue = kNewWindow,
};


const char* ToString(Disposition as_enum);
Disposition ParseDisposition(std::string_view as_string);
std::u16string GetDispositionParseError(std::string_view as_string);

struct QueryInfo {
  QueryInfo();
  ~QueryInfo();
  QueryInfo(const QueryInfo&) = delete;
  QueryInfo& operator=(const QueryInfo&) = delete;
  QueryInfo(QueryInfo&& rhs) noexcept;
  QueryInfo& operator=(QueryInfo&& rhs) noexcept;

  // Populates a QueryInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, QueryInfo& out);

  // Populates a QueryInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, QueryInfo& out);

  // Creates a deep copy of QueryInfo.
  QueryInfo Clone() const;

  // Creates a QueryInfo object from a base::DictValue, or nullopt on failure.
  static std::optional<QueryInfo> FromValue(const base::DictValue& value);

  // Creates a QueryInfo object from a base::Value, or nullopt on failure.
  static std::optional<QueryInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisQueryInfo object.
  base::DictValue ToValue() const;

  // String to query with the default search provider.
  std::string text;

  // Location where search results should be displayed. <code>CURRENT_TAB</code>
  // is the default.
  Disposition disposition;

  // Location where search results should be displayed. <code>tabId<code> cannot
  // be used with <code>disposition</code>.
  std::optional<int> tab_id;

};


//
// Functions
//

namespace Query {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  QueryInfo query_info;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace Query

}  // namespace search
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_SEARCH_H__
