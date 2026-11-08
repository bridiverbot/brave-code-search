// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/enterprise_hardware_platform.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/enterprise_hardware_platform.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#ifndef CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_HARDWARE_PLATFORM_H__
#define CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_HARDWARE_PLATFORM_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace enterprise_hardware_platform {

//
// Types
//

struct HardwarePlatformInfo {
  HardwarePlatformInfo();
  ~HardwarePlatformInfo();
  HardwarePlatformInfo(const HardwarePlatformInfo&) = delete;
  HardwarePlatformInfo& operator=(const HardwarePlatformInfo&) = delete;
  HardwarePlatformInfo(HardwarePlatformInfo&& rhs) noexcept;
  HardwarePlatformInfo& operator=(HardwarePlatformInfo&& rhs) noexcept;

  // Populates a HardwarePlatformInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, HardwarePlatformInfo& out);

  // Populates a HardwarePlatformInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, HardwarePlatformInfo& out);

  // Creates a deep copy of HardwarePlatformInfo.
  HardwarePlatformInfo Clone() const;

  // Creates a HardwarePlatformInfo object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<HardwarePlatformInfo> FromValue(const base::DictValue& value);

  // Creates a HardwarePlatformInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<HardwarePlatformInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisHardwarePlatformInfo object.
  base::DictValue ToValue() const;

  std::string model;

  std::string manufacturer;

};


//
// Functions
//

namespace GetHardwarePlatformInfo {

namespace Results {

base::ListValue Create(const HardwarePlatformInfo& info);
}  // namespace Results

}  // namespace GetHardwarePlatformInfo

}  // namespace enterprise_hardware_platform
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_ENTERPRISE_HARDWARE_PLATFORM_H__
