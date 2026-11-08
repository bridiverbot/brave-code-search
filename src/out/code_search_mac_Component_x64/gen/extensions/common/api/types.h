// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/types.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/types.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#ifndef EXTENSIONS_COMMON_API_TYPES_H__
#define EXTENSIONS_COMMON_API_TYPES_H__

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
namespace types {

//
// Types
//

// The scope of the ChromeSetting. One of<ul><li><var>regular</var>: setting for
// the regular profile (which is inherited by the incognito profile if not
// overridden elsewhere),</li><li><var>regular_only</var>: setting for the
// regular profile only (not inherited by the incognito
// profile),</li><li><var>incognito_persistent</var>: setting for the incognito
// profile that survives browser restarts (overrides regular
// preferences),</li><li><var>incognito_session_only</var>: setting for the
// incognito profile that can only be set during an incognito session and is
// deleted when the incognito session ends (overrides regular and
// incognito_persistent preferences).</li></ul>
enum class ChromeSettingScope {
  kNone = 0,
  kRegular,
  kRegularOnly,
  kIncognitoPersistent,
  kIncognitoSessionOnly,
  kMaxValue = kIncognitoSessionOnly,
};


const char* ToString(ChromeSettingScope as_enum);
ChromeSettingScope ParseChromeSettingScope(std::string_view as_string);
std::u16string GetChromeSettingScopeParseError(std::string_view as_string);

// One of<ul><li><var>not_controllable</var>: cannot be controlled by any
// extension</li><li><var>controlled_by_other_extensions</var>: controlled by
// extensions with higher
// precedence</li><li><var>controllable_by_this_extension</var>: can be
// controlled by this extension</li><li><var>controlled_by_this_extension</var>:
// controlled by this extension</li></ul>
enum class LevelOfControl {
  kNone = 0,
  kNotControllable,
  kControlledByOtherExtensions,
  kControllableByThisExtension,
  kControlledByThisExtension,
  kMaxValue = kControlledByThisExtension,
};


const char* ToString(LevelOfControl as_enum);
LevelOfControl ParseLevelOfControl(std::string_view as_string);
std::u16string GetLevelOfControlParseError(std::string_view as_string);

// An interface that allows access to a Chrome browser setting. See
// $(ref:accessibilityFeatures) for an example.
struct ChromeSetting {
  ChromeSetting();
  ~ChromeSetting();
  ChromeSetting(const ChromeSetting&) = delete;
  ChromeSetting& operator=(const ChromeSetting&) = delete;
  ChromeSetting(ChromeSetting&& rhs) noexcept;
  ChromeSetting& operator=(ChromeSetting&& rhs) noexcept;

  // Populates a ChromeSetting object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ChromeSetting& out);

  // Populates a ChromeSetting object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ChromeSetting& out);

  // Creates a deep copy of ChromeSetting.
  ChromeSetting Clone() const;

  // Creates a ChromeSetting object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ChromeSetting> FromValue(const base::DictValue& value);

  // Creates a ChromeSetting object from a base::Value, or nullopt on failure.
  static std::optional<ChromeSetting> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisChromeSetting object.
  base::DictValue ToValue() const;

};


}  // namespace types
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_TYPES_H__
