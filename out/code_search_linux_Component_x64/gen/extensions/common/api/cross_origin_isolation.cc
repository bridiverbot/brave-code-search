// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/cross_origin_isolation.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/cross_origin_isolation.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#include "extensions/common/api/cross_origin_isolation.h"

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
#include "tools/json_schema_compiler/manifest_parse_util.h"

#include <string_view>


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace cross_origin_isolation {
//
// Types
//

ResponseHeader::ResponseHeader()
 {}

ResponseHeader::~ResponseHeader() = default;
ResponseHeader::ResponseHeader(ResponseHeader&& rhs) noexcept = default;
ResponseHeader& ResponseHeader::operator=(ResponseHeader&& rhs) noexcept = default;
// static
constexpr char ResponseHeader::kValue[];

ResponseHeader ResponseHeader::Clone() const {
  ResponseHeader out;
  out.value = value;
  return out;
}

// static
bool ResponseHeader::Populate(
    const base::DictValue& dict, ResponseHeader& out) {
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    {
      auto* temp = (*value_value).GetIfString();
      if (!temp) {
        out.value = std::nullopt;
        return false;
      }
      out.value = *temp;
    }
  }

  return true;
}

// static
bool ResponseHeader::Populate(
    const base::Value& value, ResponseHeader& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ResponseHeader> ResponseHeader::FromValue(const base::DictValue& value) {
  ResponseHeader out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ResponseHeader> ResponseHeader::FromValue(const base::Value& value) {
  ResponseHeader out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ResponseHeader::ToValue() const {
  base::DictValue to_value_result;

  if (this->value) {
    to_value_result.Set("value", *this->value);

  }

  return to_value_result;
}

//static
bool ResponseHeader::ParseFromDictionary(
const base::DictValue& root_dict, std::string_view key, ResponseHeader& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::DictValue& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kValue, out.value, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  return true;
}



//
// Manifest Keys
//

ManifestKeys::ManifestKeys()
 {}

ManifestKeys::~ManifestKeys() = default;
ManifestKeys::ManifestKeys(ManifestKeys&& rhs) noexcept = default;
ManifestKeys& ManifestKeys::operator=(ManifestKeys&& rhs) noexcept = default;
// static
constexpr char ManifestKeys::kCrossOriginEmbedderPolicy[];
// static
constexpr char ManifestKeys::kCrossOriginOpenerPolicy[];

//static
bool ManifestKeys::ParseFromDictionary(
const base::DictValue& root_dict, ManifestKeys& out, std::u16string& error) {

  std::vector<std::string_view> error_path_reversed;
  const base::DictValue& dict = root_dict;
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kCrossOriginEmbedderPolicy, out.cross_origin_embedder_policy, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kCrossOriginOpenerPolicy, out.cross_origin_opener_policy, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  return true;
}


}  // namespace cross_origin_isolation
}  // namespace api
}  // namespace extensions

