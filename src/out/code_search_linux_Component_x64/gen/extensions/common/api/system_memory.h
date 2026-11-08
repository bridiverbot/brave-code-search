// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/system_memory.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/system_memory.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#ifndef EXTENSIONS_COMMON_API_SYSTEM_MEMORY_H__
#define EXTENSIONS_COMMON_API_SYSTEM_MEMORY_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace system_memory {

//
// Types
//

struct MemoryInfo {
  MemoryInfo();
  ~MemoryInfo();
  MemoryInfo(const MemoryInfo&) = delete;
  MemoryInfo& operator=(const MemoryInfo&) = delete;
  MemoryInfo(MemoryInfo&& rhs) noexcept;
  MemoryInfo& operator=(MemoryInfo&& rhs) noexcept;

  // Populates a MemoryInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, MemoryInfo& out);

  // Populates a MemoryInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, MemoryInfo& out);

  // Creates a deep copy of MemoryInfo.
  MemoryInfo Clone() const;

  // Creates a MemoryInfo object from a base::DictValue, or nullopt on failure.
  static std::optional<MemoryInfo> FromValue(const base::DictValue& value);

  // Creates a MemoryInfo object from a base::Value, or nullopt on failure.
  static std::optional<MemoryInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisMemoryInfo object.
  base::DictValue ToValue() const;

  // The total amount of physical memory capacity, in bytes.
  double capacity;

  // The amount of available capacity, in bytes.
  double available_capacity;

};


//
// Functions
//

namespace GetInfo {

namespace Results {

base::ListValue Create(const MemoryInfo& info);
}  // namespace Results

}  // namespace GetInfo

}  // namespace system_memory
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_SYSTEM_MEMORY_H__
