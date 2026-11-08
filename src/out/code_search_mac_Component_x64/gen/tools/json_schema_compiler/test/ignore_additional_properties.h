// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/ignore_additional_properties.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/ignore_additional_properties.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#ifndef TOOLS_JSON_SCHEMA_COMPILER_TEST_IGNORE_ADDITIONAL_PROPERTIES_H__
#define TOOLS_JSON_SCHEMA_COMPILER_TEST_IGNORE_ADDITIONAL_PROPERTIES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace test {
namespace api {
namespace ignore_additional_properties {

//
// Types
//

struct IgnoreAdditionalPropertiesType {
  IgnoreAdditionalPropertiesType();
  ~IgnoreAdditionalPropertiesType();
  IgnoreAdditionalPropertiesType(const IgnoreAdditionalPropertiesType&) = delete;
  IgnoreAdditionalPropertiesType& operator=(const IgnoreAdditionalPropertiesType&) = delete;
  IgnoreAdditionalPropertiesType(IgnoreAdditionalPropertiesType&& rhs) noexcept;
  IgnoreAdditionalPropertiesType& operator=(IgnoreAdditionalPropertiesType&& rhs) noexcept;

  // Populates a IgnoreAdditionalPropertiesType object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, IgnoreAdditionalPropertiesType& out);

  // Populates a IgnoreAdditionalPropertiesType object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, IgnoreAdditionalPropertiesType& out);

  // Creates a deep copy of IgnoreAdditionalPropertiesType.
  IgnoreAdditionalPropertiesType Clone() const;

  // Creates a IgnoreAdditionalPropertiesType object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<IgnoreAdditionalPropertiesType> FromValue(const base::DictValue& value);

  // Creates a IgnoreAdditionalPropertiesType object from a base::Value, or
  // nullopt on failure.
  static std::optional<IgnoreAdditionalPropertiesType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisIgnoreAdditionalPropertiesType object.
  base::DictValue ToValue() const;

  // Some string.
  std::string string;

};


//
// Functions
//

namespace IgnoreAdditionalPropertiesParams {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct ParamObject {
    ParamObject();
    ~ParamObject();
    ParamObject(const ParamObject&) = delete;
    ParamObject& operator=(const ParamObject&) = delete;
    ParamObject(ParamObject&& rhs) noexcept;
    ParamObject& operator=(ParamObject&& rhs) noexcept;

    // Populates a ParamObject object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, ParamObject& out);

    // Populates a ParamObject object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::DictValue& value, ParamObject& out);

    // Creates a deep copy of ParamObject.
    ParamObject Clone() const;

    // Creates a ParamObject object from a base::DictValue, or nullopt on failure.
    static std::optional<ParamObject> FromValue(const base::DictValue& value);

    // Creates a ParamObject object from a base::Value, or nullopt on failure.
    static std::optional<ParamObject> FromValue(const base::Value& value);

  };


  ParamObject param_object;


 private:
  Params();
};

}  // namespace IgnoreAdditionalPropertiesParams

}  // namespace ignore_additional_properties
}  // namespace api
}  // namespace test

#endif  // TOOLS_JSON_SCHEMA_COMPILER_TEST_IGNORE_ADDITIONAL_PROPERTIES_H__
