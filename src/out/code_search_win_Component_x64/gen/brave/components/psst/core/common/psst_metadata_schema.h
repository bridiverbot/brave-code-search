// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/psst/core/common/psst_metadata_schema.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/psst/core/common/psst_metadata_schema.idl --root=../../ --destdir=gen --namespace=psst --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_PSST_CORE_COMMON_PSST_METADATA_SCHEMA_H__
#define BRAVE_COMPONENTS_PSST_CORE_COMMON_PSST_METADATA_SCHEMA_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include <string_view>


namespace psst {

//
// Types
//

// Represents the behavior type based on user consent decision
enum class ConsentStatus {
  kNone = 0,
  kAsk,
  kAllow,
  kBlock,
  kMaxValue = kBlock,
};


const char* ToString(ConsentStatus as_enum);
ConsentStatus ParseConsentStatus(std::string_view as_string);
std::u16string GetConsentStatusParseError(std::string_view as_string);

struct PsstWebsiteSettings {
  PsstWebsiteSettings();
  ~PsstWebsiteSettings();
  PsstWebsiteSettings(const PsstWebsiteSettings&) = delete;
  PsstWebsiteSettings& operator=(const PsstWebsiteSettings&) = delete;
  PsstWebsiteSettings(PsstWebsiteSettings&& rhs) noexcept;
  PsstWebsiteSettings& operator=(PsstWebsiteSettings&& rhs) noexcept;

  // Populates a PsstWebsiteSettings object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PsstWebsiteSettings& out);

  // Populates a PsstWebsiteSettings object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PsstWebsiteSettings& out);

  // Creates a deep copy of PsstWebsiteSettings.
  PsstWebsiteSettings Clone() const;

  // Creates a PsstWebsiteSettings object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<PsstWebsiteSettings> FromValue(const base::DictValue& value);

  // Creates a PsstWebsiteSettings object from a base::Value, or nullopt on
  // failure.
  static std::optional<PsstWebsiteSettings> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPsstWebsiteSettings object.
  base::DictValue ToValue() const;

  // User consent decision
  ConsentStatus consent_status;

  // Actual script version
  int script_version;

  // Signed user identifier
  std::string user_id;

  // List of UIDs to which the user has applied privacy settings
  std::vector<std::string> uids_to_perform;

};


}  // namespace psst

#endif  // BRAVE_COMPONENTS_PSST_CORE_COMMON_PSST_METADATA_SCHEMA_H__
