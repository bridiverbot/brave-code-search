// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/objects_movable_json.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/objects_movable_json.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#ifndef TOOLS_JSON_SCHEMA_COMPILER_TEST_OBJECTS_MOVABLE_JSON_H__
#define TOOLS_JSON_SCHEMA_COMPILER_TEST_OBJECTS_MOVABLE_JSON_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace test {
namespace api {
namespace objects_movable_json {

//
// Types
//

struct MovableWithAdditional {
  MovableWithAdditional();
  ~MovableWithAdditional();
  MovableWithAdditional(const MovableWithAdditional&) = delete;
  MovableWithAdditional& operator=(const MovableWithAdditional&) = delete;
  MovableWithAdditional(MovableWithAdditional&& rhs) noexcept;
  MovableWithAdditional& operator=(MovableWithAdditional&& rhs) noexcept;

  // Populates a MovableWithAdditional object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MovableWithAdditional& out);

  // Populates a MovableWithAdditional object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, MovableWithAdditional& out);

  // Creates a deep copy of MovableWithAdditional.
  MovableWithAdditional Clone() const;

  // Creates a MovableWithAdditional object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<MovableWithAdditional> FromValue(const base::DictValue& value);

  // Creates a MovableWithAdditional object from a base::Value, or nullopt on
  // failure.
  static std::optional<MovableWithAdditional> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisMovableWithAdditional object.
  base::DictValue ToValue() const;

  std::string str;

  std::map<std::string, std::vector<std::string>> additional_properties;
};


}  // namespace objects_movable_json
}  // namespace api
}  // namespace test

#endif  // TOOLS_JSON_SCHEMA_COMPILER_TEST_OBJECTS_MOVABLE_JSON_H__
