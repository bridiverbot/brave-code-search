// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/system_storage.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/system_storage.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#ifndef EXTENSIONS_COMMON_API_SYSTEM_STORAGE_H__
#define EXTENSIONS_COMMON_API_SYSTEM_STORAGE_H__

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
namespace system_storage {

//
// Types
//

enum class StorageUnitType {
  kNone = 0,
  kFixed,
  kRemovable,
  kUnknown,
  kMaxValue = kUnknown,
};


const char* ToString(StorageUnitType as_enum);
StorageUnitType ParseStorageUnitType(std::string_view as_string);
std::u16string GetStorageUnitTypeParseError(std::string_view as_string);

struct StorageUnitInfo {
  StorageUnitInfo();
  ~StorageUnitInfo();
  StorageUnitInfo(const StorageUnitInfo&) = delete;
  StorageUnitInfo& operator=(const StorageUnitInfo&) = delete;
  StorageUnitInfo(StorageUnitInfo&& rhs) noexcept;
  StorageUnitInfo& operator=(StorageUnitInfo&& rhs) noexcept;

  // Populates a StorageUnitInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StorageUnitInfo& out);

  // Populates a StorageUnitInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, StorageUnitInfo& out);

  // Creates a deep copy of StorageUnitInfo.
  StorageUnitInfo Clone() const;

  // Creates a StorageUnitInfo object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<StorageUnitInfo> FromValue(const base::DictValue& value);

  // Creates a StorageUnitInfo object from a base::Value, or nullopt on failure.
  static std::optional<StorageUnitInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisStorageUnitInfo object.
  base::DictValue ToValue() const;

  // The transient ID that uniquely identifies the storage device. This ID will be
  // persistent within the same run of a single application. It will not be a
  // persistent identifier between different runs of an application, or between
  // different applications.
  std::string id;

  // The name of the storage unit.
  std::string name;

  // The media type of the storage unit.
  StorageUnitType type;

  // The total amount of the storage space, in bytes.
  double capacity;

};

struct StorageAvailableCapacityInfo {
  StorageAvailableCapacityInfo();
  ~StorageAvailableCapacityInfo();
  StorageAvailableCapacityInfo(const StorageAvailableCapacityInfo&) = delete;
  StorageAvailableCapacityInfo& operator=(const StorageAvailableCapacityInfo&) = delete;
  StorageAvailableCapacityInfo(StorageAvailableCapacityInfo&& rhs) noexcept;
  StorageAvailableCapacityInfo& operator=(StorageAvailableCapacityInfo&& rhs) noexcept;

  // Populates a StorageAvailableCapacityInfo object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StorageAvailableCapacityInfo& out);

  // Populates a StorageAvailableCapacityInfo object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, StorageAvailableCapacityInfo& out);

  // Creates a deep copy of StorageAvailableCapacityInfo.
  StorageAvailableCapacityInfo Clone() const;

  // Creates a StorageAvailableCapacityInfo object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<StorageAvailableCapacityInfo> FromValue(const base::DictValue& value);

  // Creates a StorageAvailableCapacityInfo object from a base::Value, or
  // nullopt on failure.
  static std::optional<StorageAvailableCapacityInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisStorageAvailableCapacityInfo object.
  base::DictValue ToValue() const;

  // A copied |id| of getAvailableCapacity function parameter |id|.
  std::string id;

  // The available capacity of the storage device, in bytes.
  double available_capacity;

};

enum class EjectDeviceResultCode {
  kNone = 0,
  kSuccess,
  kInUse,
  kNoSuchDevice,
  kFailure,
  kMaxValue = kFailure,
};


const char* ToString(EjectDeviceResultCode as_enum);
EjectDeviceResultCode ParseEjectDeviceResultCode(std::string_view as_string);
std::u16string GetEjectDeviceResultCodeParseError(std::string_view as_string);


//
// Functions
//

namespace GetInfo {

namespace Results {

base::ListValue Create(const std::vector<StorageUnitInfo>& info);
}  // namespace Results

}  // namespace GetInfo

namespace EjectDevice {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string id;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const EjectDeviceResultCode& result);
}  // namespace Results

}  // namespace EjectDevice

namespace GetAvailableCapacity {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string id;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const StorageAvailableCapacityInfo& info);
}  // namespace Results

}  // namespace GetAvailableCapacity

//
// Events
//

namespace OnAttached {

extern const char kEventName[];  // "system.storage.onAttached"

base::ListValue Create(const StorageUnitInfo& info);
}  // namespace OnAttached

namespace OnDetached {

extern const char kEventName[];  // "system.storage.onDetached"

base::ListValue Create(const std::string& id);
}  // namespace OnDetached

}  // namespace system_storage
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_SYSTEM_STORAGE_H__
