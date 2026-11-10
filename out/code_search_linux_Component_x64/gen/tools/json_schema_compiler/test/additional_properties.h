// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/additional_properties.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/additional_properties.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#ifndef TOOLS_JSON_SCHEMA_COMPILER_TEST_ADDITIONAL_PROPERTIES_H__
#define TOOLS_JSON_SCHEMA_COMPILER_TEST_ADDITIONAL_PROPERTIES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace test {
namespace api {
namespace additional_properties {

//
// Types
//

struct AdditionalPropertiesType {
  AdditionalPropertiesType();
  ~AdditionalPropertiesType();
  AdditionalPropertiesType(const AdditionalPropertiesType&) = delete;
  AdditionalPropertiesType& operator=(const AdditionalPropertiesType&) = delete;
  AdditionalPropertiesType(AdditionalPropertiesType&& rhs) noexcept;
  AdditionalPropertiesType& operator=(AdditionalPropertiesType&& rhs) noexcept;

  // Populates a AdditionalPropertiesType object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AdditionalPropertiesType& out);

  // Populates a AdditionalPropertiesType object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AdditionalPropertiesType& out);

  // Creates a deep copy of AdditionalPropertiesType.
  AdditionalPropertiesType Clone() const;

  // Creates a AdditionalPropertiesType object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<AdditionalPropertiesType> FromValue(const base::DictValue& value);

  // Creates a AdditionalPropertiesType object from a base::Value, or nullopt on
  // failure.
  static std::optional<AdditionalPropertiesType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAdditionalPropertiesType object.
  base::DictValue ToValue() const;

  // Some string.
  std::string string;

  base::DictValue additional_properties;
};


//
// Functions
//

namespace AdditionalProperties {

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

    base::DictValue additional_properties;
  };


  ParamObject param_object;


 private:
  Params();
};

}  // namespace AdditionalProperties

namespace ReturnAdditionalProperties {

namespace Results {

struct ResultObject {
  ResultObject();
  ~ResultObject();
  ResultObject(const ResultObject&) = delete;
  ResultObject& operator=(const ResultObject&) = delete;
  ResultObject(ResultObject&& rhs) noexcept;
  ResultObject& operator=(ResultObject&& rhs) noexcept;

  // Returns a new base::DictValue representing the serialized form of
  // thisResultObject object.
  base::DictValue ToValue() const;

  int integer;

  std::map<std::string, std::string> additional_properties;
};


base::ListValue Create(const ResultObject& result_object);
}  // namespace Results

}  // namespace ReturnAdditionalProperties

}  // namespace additional_properties
}  // namespace api
}  // namespace test

#endif  // TOOLS_JSON_SCHEMA_COMPILER_TEST_ADDITIONAL_PROPERTIES_H__
