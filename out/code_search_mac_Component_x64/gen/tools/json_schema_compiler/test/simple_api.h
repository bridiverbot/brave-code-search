// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/simple_api.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/simple_api.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#ifndef TOOLS_JSON_SCHEMA_COMPILER_TEST_SIMPLE_API_H__
#define TOOLS_JSON_SCHEMA_COMPILER_TEST_SIMPLE_API_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include <string_view>
#include "tools/json_schema_compiler/test/enums.h"


namespace test {
namespace api {
namespace simple_api {

//
// Types
//

enum class TestEnum {
  kNone = 0,
  kOne,
  kTwo,
  kThree,
  kMaxValue = kThree,
};


const char* ToString(TestEnum as_enum);
TestEnum ParseTestEnum(std::string_view as_string);
std::u16string GetTestEnumParseError(std::string_view as_string);

enum class _3D {
  kNone = 0,
  kYes,
  kNo,
  kMaxValue = kNo,
};


const char* ToString(_3D as_enum);
_3D Parse_3D(std::string_view as_string);
std::u16string Get_3DParseError(std::string_view as_string);

struct TestType {
  TestType();
  ~TestType();
  TestType(const TestType&) = delete;
  TestType& operator=(const TestType&) = delete;
  TestType(TestType&& rhs) noexcept;
  TestType& operator=(TestType&& rhs) noexcept;

  // Manifest key constants.
  static constexpr char kString[] = "string";
  static constexpr char kBoolean[] = "boolean";
  static constexpr char kNumber[] = "number";
  static constexpr char kInteger[] = "integer";
  static constexpr char kObject[] = "object";
  static constexpr char kArray[] = "array";
  static constexpr char kOptExternalEnum[] = "opt_external_enum";

  // Populates a TestType object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, TestType& out);

  // Populates a TestType object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, TestType& out);

  // Creates a deep copy of TestType.
  TestType Clone() const;

  // Creates a TestType object from a base::DictValue, or nullopt on failure.
  static std::optional<TestType> FromValue(const base::DictValue& value);

  // Creates a TestType object from a base::Value, or nullopt on failure.
  static std::optional<TestType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisTestType object.
  base::DictValue ToValue() const;

  // Parses the given |key| from |root_dict|. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // and |error_path_reversed| are populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, std::string_view key, TestType& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed);


  struct Object {
    Object();
    ~Object();
    Object(const Object&) = delete;
    Object& operator=(const Object&) = delete;
    Object(Object&& rhs) noexcept;
    Object& operator=(Object&& rhs) noexcept;

    // Manifest key constants.
    static constexpr char kFoo[] = "foo";

    // Populates a Object object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Object& out);

    // Populates a Object object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::DictValue& value, Object& out);

    // Creates a deep copy of Object.
    Object Clone() const;

    // Creates a Object object from a base::DictValue, or nullopt on failure.
    static std::optional<Object> FromValue(const base::DictValue& value);

    // Creates a Object object from a base::Value, or nullopt on failure.
    static std::optional<Object> FromValue(const base::Value& value);

    // Returns a new base::DictValue representing the serialized form of
    // thisObject object.
    base::DictValue ToValue() const;

    // Parses the given |key| from |root_dict|. Any keys not available to the
    // manifest will be ignored. On a parsing error, false is returned and |error|
    // and |error_path_reversed| are populated.
    static bool ParseFromDictionary(const base::DictValue& root_dict, std::string_view key, Object& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed);


    int foo;

  };


  // Some string.
  std::string string;

  // Some boolean.
  bool boolean;

  // Some double.
  double number;

  // Some integer.
  int integer;

  std::optional<Object> object;

  std::optional<std::vector<std::string>> array;

  test::api::enums::Enumeration opt_external_enum;

};


//
// Manifest Keys
//

struct ManifestKeys {
  ManifestKeys();
  ~ManifestKeys();
  ManifestKeys(const ManifestKeys&) = delete;
  ManifestKeys& operator=(const ManifestKeys&) = delete;
  ManifestKeys(ManifestKeys&& rhs) noexcept;
  ManifestKeys& operator=(ManifestKeys&& rhs) noexcept;

  // Manifest key constants.
  static constexpr char kKeyString[] = "key_string";
  static constexpr char kKeyRef[] = "key_ref";
  static constexpr char kKeyObj[] = "key_obj";
  static constexpr char kKeyEnum[] = "key_enum";
  static constexpr char kKeyEnumArray[] = "key_enum_array";
  static constexpr char k3dKey[] = "3d_key";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, ManifestKeys& out, std::u16string& error);


  struct KeyObj {
    KeyObj();
    ~KeyObj();
    KeyObj(const KeyObj&) = delete;
    KeyObj& operator=(const KeyObj&) = delete;
    KeyObj(KeyObj&& rhs) noexcept;
    KeyObj& operator=(KeyObj&& rhs) noexcept;

    // Manifest key constants.
    static constexpr char kObjString[] = "obj_string";
    static constexpr char kObjBool[] = "obj_bool";
    static constexpr char kObjOptionalEnumArray[] = "obj_optional_enum_array";

    // Parses the given |key| from |root_dict|. Any keys not available to the
    // manifest will be ignored. On a parsing error, false is returned and |error|
    // and |error_path_reversed| are populated.
    static bool ParseFromDictionary(const base::DictValue& root_dict, std::string_view key, KeyObj& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed);


    std::string obj_string;

    bool obj_bool;

    std::optional<std::vector<test::api::enums::Enumeration>> obj_optional_enum_array;

  };


  // String key.
  std::optional<std::string> key_string;

  // Reference key
  std::optional<TestType> key_ref;

  std::optional<KeyObj> key_obj;

  TestEnum key_enum;

  std::optional<std::vector<TestEnum>> key_enum_array;

  _3D _3d_key;

};

//
// Functions
//

namespace IncrementInteger {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int num;


 private:
  Params();
};

namespace Results {

// The incremented value.
base::ListValue Create(int result);
}  // namespace Results

}  // namespace IncrementInteger

namespace OptionalString {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::optional<std::string> str;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace OptionalString

namespace OptionalBeforeRequired {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::optional<std::string> first;

  std::string second;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace OptionalBeforeRequired

namespace RequiredFunctionParameter {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  base::DictValue function_parameter;

  std::string second;


 private:
  Params();
};

}  // namespace RequiredFunctionParameter

namespace OptionalCallbackParams {

namespace Results {

// True if the extension has the specified permissions.
base::ListValue Create(const TestType& result);
}  // namespace Results

}  // namespace OptionalCallbackParams

namespace GetTestType {

namespace Results {

// A TestType.
base::ListValue Create(const TestType& result);
}  // namespace Results

}  // namespace GetTestType

//
// Events
//

namespace OnIntegerFired {

extern const char kEventName[];  // "simple_api.onIntegerFired"

base::ListValue Create(int some_integer);
}  // namespace OnIntegerFired

namespace OnStringFired {

extern const char kEventName[];  // "simple_api.onStringFired"

base::ListValue Create(const std::string& some_string);
}  // namespace OnStringFired

namespace OnTestTypeFired {

extern const char kEventName[];  // "simple_api.onTestTypeFired"

base::ListValue Create(const TestType& some_test_type);
}  // namespace OnTestTypeFired

}  // namespace simple_api
}  // namespace api
}  // namespace test

#endif  // TOOLS_JSON_SCHEMA_COMPILER_TEST_SIMPLE_API_H__
