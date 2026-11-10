// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/any.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/any.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#ifndef TOOLS_JSON_SCHEMA_COMPILER_TEST_ANY_H__
#define TOOLS_JSON_SCHEMA_COMPILER_TEST_ANY_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace test {
namespace api {
namespace any {

//
// Types
//

struct AnyType {
  AnyType();
  ~AnyType();
  AnyType(const AnyType&) = delete;
  AnyType& operator=(const AnyType&) = delete;
  AnyType(AnyType&& rhs) noexcept;
  AnyType& operator=(AnyType&& rhs) noexcept;

  // Populates a AnyType object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, AnyType& out);

  // Populates a AnyType object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, AnyType& out);

  // Creates a deep copy of AnyType.
  AnyType Clone() const;

  // Creates a AnyType object from a base::DictValue, or nullopt on failure.
  static std::optional<AnyType> FromValue(const base::DictValue& value);

  // Creates a AnyType object from a base::Value, or nullopt on failure.
  static std::optional<AnyType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAnyType object.
  base::DictValue ToValue() const;

  // Any way you want it, that's the way you need it.
  base::Value any;

};


//
// Functions
//

namespace OptionalAny {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::optional<base::Value> any_name;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace OptionalAny

namespace ReturnAny {

namespace Results {

base::ListValue Create(const base::Value& result);
}  // namespace Results

}  // namespace ReturnAny

//
// Events
//

namespace OnAnyFired {

extern const char kEventName[];  // "any.onAnyFired"

base::ListValue Create(const base::Value& something);
}  // namespace OnAnyFired

}  // namespace any
}  // namespace api
}  // namespace test

#endif  // TOOLS_JSON_SCHEMA_COMPILER_TEST_ANY_H__
