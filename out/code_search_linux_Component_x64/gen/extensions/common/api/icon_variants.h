// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/icon_variants.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/icon_variants.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#ifndef EXTENSIONS_COMMON_API_ICON_VARIANTS_H__
#define EXTENSIONS_COMMON_API_ICON_VARIANTS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include <string_view>
#include "base/types/expected.h"


namespace extensions {
namespace api {
namespace icon_variants {

//
// Types
//

enum class ColorScheme {
  kNone = 0,
  kDark,
  kLight,
  kMaxValue = kLight,
};


const char* ToString(ColorScheme as_enum);
ColorScheme ParseColorScheme(std::string_view as_string);
std::u16string GetColorSchemeParseError(std::string_view as_string);

struct IconVariant {
  IconVariant();
  ~IconVariant();
  IconVariant(const IconVariant&) = delete;
  IconVariant& operator=(const IconVariant&) = delete;
  IconVariant(IconVariant&& rhs) noexcept;
  IconVariant& operator=(IconVariant&& rhs) noexcept;

  // Manifest key constants.
  static constexpr char kAny[] = "any";
  static constexpr char kColorSchemes[] = "color_schemes";

  // Populates a IconVariant object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, IconVariant& out, std::u16string& error);

  // Populates a IconVariant object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, IconVariant& out, std::u16string& error);

  // Creates a deep copy of IconVariant.
  IconVariant Clone() const;

  // Creates a IconVariant object from a base::DictValue, or unexpected on
  // failure.
  static base::expected<IconVariant, std::u16string> FromValue(const base::DictValue& value);

  // Creates a IconVariant object from a base::Value, or unexpected on failure.
  static base::expected<IconVariant, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisIconVariant object.
  base::DictValue ToValue() const;

  // Parses the given |key| from |root_dict|. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // and |error_path_reversed| are populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, std::string_view key, IconVariant& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed);


  // Optional DOMString path to an icon that should be used with any possible
  // size.
  std::optional<std::string> any;

  // Optional ColorScheme.
  std::optional<std::vector<ColorScheme>> color_schemes;

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
  static constexpr char kIconVariants[] = "icon_variants";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, ManifestKeys& out, std::u16string& error);


  std::optional<std::vector<IconVariant>> icon_variants;

};

}  // namespace icon_variants
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_ICON_VARIANTS_H__
