// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/chrome_url_overrides.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/chrome_url_overrides.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#ifndef EXTENSIONS_COMMON_API_CHROME_URL_OVERRIDES_H__
#define EXTENSIONS_COMMON_API_CHROME_URL_OVERRIDES_H__

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
namespace chrome_url_overrides {

//
// Types
//

struct UrlOverrideInfo {
  UrlOverrideInfo();
  ~UrlOverrideInfo();
  UrlOverrideInfo(const UrlOverrideInfo&) = delete;
  UrlOverrideInfo& operator=(const UrlOverrideInfo&) = delete;
  UrlOverrideInfo(UrlOverrideInfo&& rhs) noexcept;
  UrlOverrideInfo& operator=(UrlOverrideInfo&& rhs) noexcept;

  // Manifest key constants.
  static constexpr char kNewtab[] = "newtab";
  static constexpr char kBookmarks[] = "bookmarks";
  static constexpr char kHistory[] = "history";
  static constexpr char kActivationmessage[] = "activationmessage";
  static constexpr char kKeyboard[] = "keyboard";

  // Populates a UrlOverrideInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UrlOverrideInfo& out);

  // Populates a UrlOverrideInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, UrlOverrideInfo& out);

  // Creates a deep copy of UrlOverrideInfo.
  UrlOverrideInfo Clone() const;

  // Creates a UrlOverrideInfo object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<UrlOverrideInfo> FromValue(const base::DictValue& value);

  // Creates a UrlOverrideInfo object from a base::Value, or nullopt on failure.
  static std::optional<UrlOverrideInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisUrlOverrideInfo object.
  base::DictValue ToValue() const;

  // Parses the given |key| from |root_dict|. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // and |error_path_reversed| are populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, std::string_view key, UrlOverrideInfo& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed);


  // Override for the chrome://newtab page.
  std::optional<std::string> newtab;

  // Override for the chrome://bookmarks page.
  std::optional<std::string> bookmarks;

  // Override for the chrome://history page.
  std::optional<std::string> history;

  std::optional<std::string> activationmessage;

  std::optional<std::string> keyboard;

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
  static constexpr char kChromeUrlOverrides[] = "chrome_url_overrides";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, ManifestKeys& out, std::u16string& error);


  // Chrome url overrides. Note that an extension can override only one page.
  std::optional<UrlOverrideInfo> chrome_url_overrides;

};

}  // namespace chrome_url_overrides
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_CHROME_URL_OVERRIDES_H__
