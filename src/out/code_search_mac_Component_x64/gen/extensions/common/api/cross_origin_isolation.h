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

#ifndef EXTENSIONS_COMMON_API_CROSS_ORIGIN_ISOLATION_H__
#define EXTENSIONS_COMMON_API_CROSS_ORIGIN_ISOLATION_H__

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
namespace cross_origin_isolation {

//
// Types
//

struct ResponseHeader {
  ResponseHeader();
  ~ResponseHeader();
  ResponseHeader(const ResponseHeader&) = delete;
  ResponseHeader& operator=(const ResponseHeader&) = delete;
  ResponseHeader(ResponseHeader&& rhs) noexcept;
  ResponseHeader& operator=(ResponseHeader&& rhs) noexcept;

  // Manifest key constants.
  static constexpr char kValue[] = "value";

  // Populates a ResponseHeader object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ResponseHeader& out);

  // Populates a ResponseHeader object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ResponseHeader& out);

  // Creates a deep copy of ResponseHeader.
  ResponseHeader Clone() const;

  // Creates a ResponseHeader object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ResponseHeader> FromValue(const base::DictValue& value);

  // Creates a ResponseHeader object from a base::Value, or nullopt on failure.
  static std::optional<ResponseHeader> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisResponseHeader object.
  base::DictValue ToValue() const;

  // Parses the given |key| from |root_dict|. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // and |error_path_reversed| are populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, std::string_view key, ResponseHeader& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed);


  std::optional<std::string> value;

};


//
// Manifest Keys
//

struct ManifestKeys {
  ManifestKeys();
  ~ManifestKeys();
  ManifestKeys(const ManifestKeys&) = delete;
  ManifestKeys& operator=(const ManifestKeys&) = delete;
  ManifestKeys(ManifestKeys&& rhs) noexcept;
  ManifestKeys& operator=(ManifestKeys&& rhs) noexcept;

  // Manifest key constants.
  static constexpr char kCrossOriginEmbedderPolicy[] = "cross_origin_embedder_policy";
  static constexpr char kCrossOriginOpenerPolicy[] = "cross_origin_opener_policy";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, ManifestKeys& out, std::u16string& error);


  std::optional<ResponseHeader> cross_origin_embedder_policy;

  std::optional<ResponseHeader> cross_origin_opener_policy;

};

}  // namespace cross_origin_isolation
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_CROSS_ORIGIN_ISOLATION_H__
