// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/incognito.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/incognito.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#ifndef EXTENSIONS_COMMON_API_INCOGNITO_H__
#define EXTENSIONS_COMMON_API_INCOGNITO_H__

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
namespace incognito {

//
// Types
//

enum class IncognitoMode {
  kNone = 0,
  kSplit,
  kSpanning,
  kNotAllowed,
  kMaxValue = kNotAllowed,
};


const char* ToString(IncognitoMode as_enum);
IncognitoMode ParseIncognitoMode(std::string_view as_string);
std::u16string GetIncognitoModeParseError(std::string_view as_string);


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
  static constexpr char kIncognito[] = "incognito";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, ManifestKeys& out, std::u16string& error);


  // Configures whether and how the extension runs in incognito mode. Default mode
  // is <code>spanning</code>.
  IncognitoMode incognito;

};

}  // namespace incognito
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_INCOGNITO_H__
