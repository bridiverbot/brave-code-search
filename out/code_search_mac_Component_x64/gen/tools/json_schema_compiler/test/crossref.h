// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/crossref.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/crossref.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#ifndef TOOLS_JSON_SCHEMA_COMPILER_TEST_CROSSREF_H__
#define TOOLS_JSON_SCHEMA_COMPILER_TEST_CROSSREF_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "tools/json_schema_compiler/test/simple_api.h"


namespace test {
namespace api {
namespace crossref {

//
// Types
//

struct CrossrefType {
  CrossrefType();
  ~CrossrefType();
  CrossrefType(const CrossrefType&) = delete;
  CrossrefType& operator=(const CrossrefType&) = delete;
  CrossrefType(CrossrefType&& rhs) noexcept;
  CrossrefType& operator=(CrossrefType&& rhs) noexcept;

  // Populates a CrossrefType object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CrossrefType& out);

  // Populates a CrossrefType object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, CrossrefType& out);

  // Creates a deep copy of CrossrefType.
  CrossrefType Clone() const;

  // Creates a CrossrefType object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<CrossrefType> FromValue(const base::DictValue& value);

  // Creates a CrossrefType object from a base::Value, or nullopt on failure.
  static std::optional<CrossrefType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCrossrefType object.
  base::DictValue ToValue() const;

  test::api::simple_api::TestType test_type;

  test::api::simple_api::TestEnum test_enum_required;

  test::api::simple_api::TestEnum test_enum_optional;

  test::api::simple_api::TestEnum test_enum_optional_extra;

};


//
// Functions
//

namespace TestTypeOptionalParam {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::optional<test::api::simple_api::TestType> test_type;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace TestTypeOptionalParam

namespace GetTestType {

namespace Results {

// A TestType.
base::ListValue Create(const test::api::simple_api::TestType& result);
}  // namespace Results

}  // namespace GetTestType

namespace TestTypeInObject {

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

    std::optional<test::api::simple_api::TestType> test_type;

    bool boolean;

  };


  ParamObject param_object;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace TestTypeInObject

}  // namespace crossref
}  // namespace api
}  // namespace test

#endif  // TOOLS_JSON_SCHEMA_COMPILER_TEST_CROSSREF_H__
