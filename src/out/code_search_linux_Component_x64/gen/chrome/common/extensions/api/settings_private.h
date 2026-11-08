// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/settings_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/settings_private.idl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#ifndef CHROME_COMMON_EXTENSIONS_API_SETTINGS_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_SETTINGS_PRIVATE_H__

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
namespace settings_private {

//
// Types
//

enum class PrefType {
  kNone = 0,
  kBoolean,
  kNumber,
  kString,
  kUrl,
  kList,
  kDictionary,
  kMaxValue = kDictionary,
};


const char* ToString(PrefType as_enum);
PrefType ParsePrefType(std::string_view as_string);
std::u16string GetPrefTypeParseError(std::string_view as_string);

enum class ControlledBy {
  kNone = 0,
  kDevicePolicy,
  kUserPolicy,
  kOwner,
  kPrimaryUser,
  kExtension,
  kParent,
  kChildRestriction,
  kSafeBrowsingOff,
  kMaxValue = kSafeBrowsingOff,
};


const char* ToString(ControlledBy as_enum);
ControlledBy ParseControlledBy(std::string_view as_string);
std::u16string GetControlledByParseError(std::string_view as_string);

enum class Enforcement {
  kNone = 0,
  kEnforced,
  kRecommended,
  kParentSupervised,
  kMaxValue = kParentSupervised,
};


const char* ToString(Enforcement as_enum);
Enforcement ParseEnforcement(std::string_view as_string);
std::u16string GetEnforcementParseError(std::string_view as_string);

struct PrefObject {
  PrefObject();
  ~PrefObject();
  PrefObject(const PrefObject&) = delete;
  PrefObject& operator=(const PrefObject&) = delete;
  PrefObject(PrefObject&& rhs) noexcept;
  PrefObject& operator=(PrefObject&& rhs) noexcept;

  // Populates a PrefObject object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, PrefObject& out);

  // Populates a PrefObject object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, PrefObject& out);

  // Creates a deep copy of PrefObject.
  PrefObject Clone() const;

  // Creates a PrefObject object from a base::DictValue, or nullopt on failure.
  static std::optional<PrefObject> FromValue(const base::DictValue& value);

  // Creates a PrefObject object from a base::Value, or nullopt on failure.
  static std::optional<PrefObject> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPrefObject object.
  base::DictValue ToValue() const;

  // The key for the pref.
  std::string key;

  // The type of the pref (e.g., boolean, string, etc.).
  PrefType type;

  // The current value of the pref.
  std::optional<base::Value> value;

  // The policy source of the pref; an undefined value means there is no policy.
  ControlledBy controlled_by;

  // The owner name if controlledBy == OWNER. The primary user name if
  // controlledBy == PRIMARY_USER. The extension name if controlledBy ==
  // EXTENSION.
  std::optional<std::string> controlled_by_name;

  // The policy enforcement of the pref; must be specified if controlledBy is also
  // present.
  Enforcement enforcement;

  // The recommended value if enforcement == RECOMMENDED.
  std::optional<base::Value> recommended_value;

  // If enforcement == ENFORCED this optionally specifies preference values that
  // are still available for selection by the user. If set, must contain at least
  // 2 distinct values, as must contain |value| and |recommendedValue| (if
  // present).
  std::optional<base::ListValue> user_selectable_values;

  // If true, user control of the preference is disabled for reasons unrelated to
  // controlledBy (e.g. no signed-in profile is present). A false value is a
  // no-op.
  std::optional<bool> user_control_disabled;

  // The extension ID if controlledBy == EXTENSION.
  std::optional<std::string> extension_id;

  // Whether the controlling extension can be disabled if controlledBy ==
  // EXTENSION.
  std::optional<bool> extension_can_be_disabled;

};


//
// Functions
//

namespace SetPref {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The name of the pref.
  std::string name;

  // The new value of the pref.
  base::Value value;

  // An optional user metrics identifier.
  std::optional<std::string> page_id;


 private:
  Params();
};

namespace Results {

base::ListValue Create(bool success);
}  // namespace Results

}  // namespace SetPref

namespace GetAllPrefs {

namespace Results {

base::ListValue Create(const std::vector<PrefObject>& prefs);
}  // namespace Results

}  // namespace GetAllPrefs

namespace GetPref {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string name;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const PrefObject& pref);
}  // namespace Results

}  // namespace GetPref

namespace GetDefaultZoom {

namespace Results {

base::ListValue Create(double zoom);
}  // namespace Results

}  // namespace GetDefaultZoom

namespace SetDefaultZoom {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  double zoom;


 private:
  Params();
};

namespace Results {

base::ListValue Create(bool success);
}  // namespace Results

}  // namespace SetDefaultZoom

//
// Events
//

namespace OnPrefsChanged {

extern const char kEventName[];  // "settingsPrivate.onPrefsChanged"

base::ListValue Create(const std::vector<PrefObject>& prefs);
}  // namespace OnPrefsChanged

}  // namespace settings_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_SETTINGS_PRIVATE_H__
