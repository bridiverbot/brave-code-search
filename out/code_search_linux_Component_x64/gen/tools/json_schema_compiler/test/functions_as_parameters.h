// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/functions_as_parameters.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/functions_as_parameters.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#ifndef TOOLS_JSON_SCHEMA_COMPILER_TEST_FUNCTIONS_AS_PARAMETERS_H__
#define TOOLS_JSON_SCHEMA_COMPILER_TEST_FUNCTIONS_AS_PARAMETERS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace test {
namespace api {
namespace functions_as_parameters {

//
// Types
//

struct FunctionType {
  FunctionType();
  ~FunctionType();
  FunctionType(const FunctionType&) = delete;
  FunctionType& operator=(const FunctionType&) = delete;
  FunctionType(FunctionType&& rhs) noexcept;
  FunctionType& operator=(FunctionType&& rhs) noexcept;

  // Populates a FunctionType object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FunctionType& out);

  // Populates a FunctionType object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, FunctionType& out);

  // Creates a deep copy of FunctionType.
  FunctionType Clone() const;

  // Creates a FunctionType object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<FunctionType> FromValue(const base::DictValue& value);

  // Creates a FunctionType object from a base::Value, or nullopt on failure.
  static std::optional<FunctionType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisFunctionType object.
  base::DictValue ToValue() const;

  base::DictValue event_callback;

};

struct OptionalFunctionType {
  OptionalFunctionType();
  ~OptionalFunctionType();
  OptionalFunctionType(const OptionalFunctionType&) = delete;
  OptionalFunctionType& operator=(const OptionalFunctionType&) = delete;
  OptionalFunctionType(OptionalFunctionType&& rhs) noexcept;
  OptionalFunctionType& operator=(OptionalFunctionType&& rhs) noexcept;

  // Populates a OptionalFunctionType object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OptionalFunctionType& out);

  // Populates a OptionalFunctionType object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, OptionalFunctionType& out);

  // Creates a deep copy of OptionalFunctionType.
  OptionalFunctionType Clone() const;

  // Creates a OptionalFunctionType object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<OptionalFunctionType> FromValue(const base::DictValue& value);

  // Creates a OptionalFunctionType object from a base::Value, or nullopt on
  // failure.
  static std::optional<OptionalFunctionType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisOptionalFunctionType object.
  base::DictValue ToValue() const;

  std::optional<base::DictValue> event_callback;

};

struct SerializableFunctionType {
  SerializableFunctionType();
  ~SerializableFunctionType();
  SerializableFunctionType(const SerializableFunctionType&) = delete;
  SerializableFunctionType& operator=(const SerializableFunctionType&) = delete;
  SerializableFunctionType(SerializableFunctionType&& rhs) noexcept;
  SerializableFunctionType& operator=(SerializableFunctionType&& rhs) noexcept;

  // Populates a SerializableFunctionType object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SerializableFunctionType& out);

  // Populates a SerializableFunctionType object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, SerializableFunctionType& out);

  // Creates a deep copy of SerializableFunctionType.
  SerializableFunctionType Clone() const;

  // Creates a SerializableFunctionType object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<SerializableFunctionType> FromValue(const base::DictValue& value);

  // Creates a SerializableFunctionType object from a base::Value, or nullopt on
  // failure.
  static std::optional<SerializableFunctionType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisSerializableFunctionType object.
  base::DictValue ToValue() const;

  std::string function_property;

};

struct OptionalSerializableFunctionType {
  OptionalSerializableFunctionType();
  ~OptionalSerializableFunctionType();
  OptionalSerializableFunctionType(const OptionalSerializableFunctionType&) = delete;
  OptionalSerializableFunctionType& operator=(const OptionalSerializableFunctionType&) = delete;
  OptionalSerializableFunctionType(OptionalSerializableFunctionType&& rhs) noexcept;
  OptionalSerializableFunctionType& operator=(OptionalSerializableFunctionType&& rhs) noexcept;

  // Populates a OptionalSerializableFunctionType object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OptionalSerializableFunctionType& out);

  // Populates a OptionalSerializableFunctionType object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, OptionalSerializableFunctionType& out);

  // Creates a deep copy of OptionalSerializableFunctionType.
  OptionalSerializableFunctionType Clone() const;

  // Creates a OptionalSerializableFunctionType object from a base::DictValue,
  // or nullopt on failure.
  static std::optional<OptionalSerializableFunctionType> FromValue(const base::DictValue& value);

  // Creates a OptionalSerializableFunctionType object from a base::Value, or
  // nullopt on failure.
  static std::optional<OptionalSerializableFunctionType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisOptionalSerializableFunctionType object.
  base::DictValue ToValue() const;

  std::optional<std::string> function_property;

};


}  // namespace functions_as_parameters
}  // namespace api
}  // namespace test

#endif  // TOOLS_JSON_SCHEMA_COMPILER_TEST_FUNCTIONS_AS_PARAMETERS_H__
