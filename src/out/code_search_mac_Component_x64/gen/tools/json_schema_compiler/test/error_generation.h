// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/error_generation.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/error_generation.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#ifndef TOOLS_JSON_SCHEMA_COMPILER_TEST_ERROR_GENERATION_H__
#define TOOLS_JSON_SCHEMA_COMPILER_TEST_ERROR_GENERATION_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include <string_view>
#include "base/types/expected.h"
#include "tools/json_schema_compiler/test/error_generation.h"


namespace test {
namespace api {
namespace error_generation {

//
// Types
//

struct TestType {
  TestType();
  ~TestType();
  TestType(const TestType&) = delete;
  TestType& operator=(const TestType&) = delete;
  TestType(TestType&& rhs) noexcept;
  TestType& operator=(TestType&& rhs) noexcept;

  // Populates a TestType object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, TestType& out, std::u16string& error);

  // Populates a TestType object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, TestType& out, std::u16string& error);

  // Creates a deep copy of TestType.
  TestType Clone() const;

  // Creates a TestType object from a base::DictValue, or unexpected on failure.
  static base::expected<TestType, std::u16string> FromValue(const base::DictValue& value);

  // Creates a TestType object from a base::Value, or unexpected on failure.
  static base::expected<TestType, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisTestType object.
  base::DictValue ToValue() const;

  // Some string.
  std::string string;

};

struct OptionalTestType {
  OptionalTestType();
  ~OptionalTestType();
  OptionalTestType(const OptionalTestType&) = delete;
  OptionalTestType& operator=(const OptionalTestType&) = delete;
  OptionalTestType(OptionalTestType&& rhs) noexcept;
  OptionalTestType& operator=(OptionalTestType&& rhs) noexcept;

  // Populates a OptionalTestType object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OptionalTestType& out, std::u16string& error);

  // Populates a OptionalTestType object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, OptionalTestType& out, std::u16string& error);

  // Creates a deep copy of OptionalTestType.
  OptionalTestType Clone() const;

  // Creates a OptionalTestType object from a base::DictValue, or unexpected on
  // failure.
  static base::expected<OptionalTestType, std::u16string> FromValue(const base::DictValue& value);

  // Creates a OptionalTestType object from a base::Value, or unexpected on
  // failure.
  static base::expected<OptionalTestType, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisOptionalTestType object.
  base::DictValue ToValue() const;

  // Some string.
  std::optional<std::string> string;

};

struct ChoiceType {
  ChoiceType();
  ~ChoiceType();
  ChoiceType(const ChoiceType&) = delete;
  ChoiceType& operator=(const ChoiceType&) = delete;
  ChoiceType(ChoiceType&& rhs) noexcept;
  ChoiceType& operator=(ChoiceType&& rhs) noexcept;

  // Populates a ChoiceType object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, ChoiceType& out, std::u16string& error);

  // Populates a ChoiceType object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, ChoiceType& out, std::u16string& error);

  // Creates a deep copy of ChoiceType.
  ChoiceType Clone() const;

  // Creates a ChoiceType object from a base::DictValue, or unexpected on
  // failure.
  static base::expected<ChoiceType, std::u16string> FromValue(const base::DictValue& value);

  // Creates a ChoiceType object from a base::Value, or unexpected on failure.
  static base::expected<ChoiceType, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisChoiceType object.
  base::DictValue ToValue() const;

  struct Integers {
    Integers();
    ~Integers();
    Integers(const Integers&) = delete;
    Integers& operator=(const Integers&) = delete;
    Integers(Integers&& rhs) noexcept;
    Integers& operator=(Integers&& rhs) noexcept;

    // Populates a Integers object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Integers& out, std::u16string& error);

    // Creates a deep copy of Integers.
    Integers Clone() const;

    // Creates a Integers object from a base::Value, or unexpected on failure.
    static base::expected<Integers, std::u16string> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisIntegers
    // object.
    base::Value ToValue() const;
    // Choices:
    std::optional<std::vector<int>> as_integers;
    std::optional<int> as_integer;
  };


  Integers integers;

};

struct OptionalChoiceType {
  OptionalChoiceType();
  ~OptionalChoiceType();
  OptionalChoiceType(const OptionalChoiceType&) = delete;
  OptionalChoiceType& operator=(const OptionalChoiceType&) = delete;
  OptionalChoiceType(OptionalChoiceType&& rhs) noexcept;
  OptionalChoiceType& operator=(OptionalChoiceType&& rhs) noexcept;

  // Populates a OptionalChoiceType object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OptionalChoiceType& out, std::u16string& error);

  // Populates a OptionalChoiceType object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, OptionalChoiceType& out, std::u16string& error);

  // Creates a deep copy of OptionalChoiceType.
  OptionalChoiceType Clone() const;

  // Creates a OptionalChoiceType object from a base::DictValue, or unexpected
  // on failure.
  static base::expected<OptionalChoiceType, std::u16string> FromValue(const base::DictValue& value);

  // Creates a OptionalChoiceType object from a base::Value, or unexpected on
  // failure.
  static base::expected<OptionalChoiceType, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisOptionalChoiceType object.
  base::DictValue ToValue() const;

  struct Integers {
    Integers();
    ~Integers();
    Integers(const Integers&) = delete;
    Integers& operator=(const Integers&) = delete;
    Integers(Integers&& rhs) noexcept;
    Integers& operator=(Integers&& rhs) noexcept;

    // Populates a Integers object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Integers& out, std::u16string& error);

    // Creates a deep copy of Integers.
    Integers Clone() const;

    // Creates a Integers object from a base::Value, or unexpected on failure.
    static base::expected<Integers, std::u16string> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisIntegers
    // object.
    base::Value ToValue() const;
    // Choices:
    std::optional<std::vector<int>> as_integers;
    std::optional<int> as_integer;
  };


  std::optional<Integers> integers;

};

struct ObjectType {
  ObjectType();
  ~ObjectType();
  ObjectType(const ObjectType&) = delete;
  ObjectType& operator=(const ObjectType&) = delete;
  ObjectType(ObjectType&& rhs) noexcept;
  ObjectType& operator=(ObjectType&& rhs) noexcept;

  // Populates a ObjectType object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, ObjectType& out, std::u16string& error);

  // Populates a ObjectType object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, ObjectType& out, std::u16string& error);

  // Creates a deep copy of ObjectType.
  ObjectType Clone() const;

  // Creates a ObjectType object from a base::DictValue, or unexpected on
  // failure.
  static base::expected<ObjectType, std::u16string> FromValue(const base::DictValue& value);

  // Creates a ObjectType object from a base::Value, or unexpected on failure.
  static base::expected<ObjectType, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisObjectType object.
  base::DictValue ToValue() const;

  std::optional<test::api::error_generation::TestType> other_type;

};

enum class Enumeration {
  kNone = 0,
  kOne,
  kTwo,
  kThree,
  kMaxValue = kThree,
};


const char* ToString(Enumeration as_enum);
Enumeration ParseEnumeration(std::string_view as_string);
std::u16string GetEnumerationParseError(std::string_view as_string);

struct HasEnumeration {
  HasEnumeration();
  ~HasEnumeration();
  HasEnumeration(const HasEnumeration&) = delete;
  HasEnumeration& operator=(const HasEnumeration&) = delete;
  HasEnumeration(HasEnumeration&& rhs) noexcept;
  HasEnumeration& operator=(HasEnumeration&& rhs) noexcept;

  // Populates a HasEnumeration object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, HasEnumeration& out, std::u16string& error);

  // Populates a HasEnumeration object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, HasEnumeration& out, std::u16string& error);

  // Creates a deep copy of HasEnumeration.
  HasEnumeration Clone() const;

  // Creates a HasEnumeration object from a base::DictValue, or unexpected on
  // failure.
  static base::expected<HasEnumeration, std::u16string> FromValue(const base::DictValue& value);

  // Creates a HasEnumeration object from a base::Value, or unexpected on
  // failure.
  static base::expected<HasEnumeration, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisHasEnumeration object.
  base::DictValue ToValue() const;

  Enumeration enumeration;

};

struct BinaryData {
  BinaryData();
  ~BinaryData();
  BinaryData(const BinaryData&) = delete;
  BinaryData& operator=(const BinaryData&) = delete;
  BinaryData(BinaryData&& rhs) noexcept;
  BinaryData& operator=(BinaryData&& rhs) noexcept;

  // Populates a BinaryData object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, BinaryData& out, std::u16string& error);

  // Populates a BinaryData object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, BinaryData& out, std::u16string& error);

  // Creates a deep copy of BinaryData.
  BinaryData Clone() const;

  // Creates a BinaryData object from a base::DictValue, or unexpected on
  // failure.
  static base::expected<BinaryData, std::u16string> FromValue(const base::DictValue& value);

  // Creates a BinaryData object from a base::Value, or unexpected on failure.
  static base::expected<BinaryData, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisBinaryData object.
  base::DictValue ToValue() const;

  std::vector<uint8_t> data;

};

struct OptionalBinaryData {
  OptionalBinaryData();
  ~OptionalBinaryData();
  OptionalBinaryData(const OptionalBinaryData&) = delete;
  OptionalBinaryData& operator=(const OptionalBinaryData&) = delete;
  OptionalBinaryData(OptionalBinaryData&& rhs) noexcept;
  OptionalBinaryData& operator=(OptionalBinaryData&& rhs) noexcept;

  // Populates a OptionalBinaryData object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OptionalBinaryData& out, std::u16string& error);

  // Populates a OptionalBinaryData object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, OptionalBinaryData& out, std::u16string& error);

  // Creates a deep copy of OptionalBinaryData.
  OptionalBinaryData Clone() const;

  // Creates a OptionalBinaryData object from a base::DictValue, or unexpected
  // on failure.
  static base::expected<OptionalBinaryData, std::u16string> FromValue(const base::DictValue& value);

  // Creates a OptionalBinaryData object from a base::Value, or unexpected on
  // failure.
  static base::expected<OptionalBinaryData, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisOptionalBinaryData object.
  base::DictValue ToValue() const;

  std::optional<std::vector<uint8_t>> data;

};

struct ArrayObject {
  ArrayObject();
  ~ArrayObject();
  ArrayObject(const ArrayObject&) = delete;
  ArrayObject& operator=(const ArrayObject&) = delete;
  ArrayObject(ArrayObject&& rhs) noexcept;
  ArrayObject& operator=(ArrayObject&& rhs) noexcept;

  // Populates a ArrayObject object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ArrayObject& out, std::u16string& error);

  // Populates a ArrayObject object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, ArrayObject& out, std::u16string& error);

  // Creates a deep copy of ArrayObject.
  ArrayObject Clone() const;

  // Creates a ArrayObject object from a base::DictValue, or unexpected on
  // failure.
  static base::expected<ArrayObject, std::u16string> FromValue(const base::DictValue& value);

  // Creates a ArrayObject object from a base::Value, or unexpected on failure.
  static base::expected<ArrayObject, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisArrayObject object.
  base::DictValue ToValue() const;

  // Expecting a list?
  std::optional<std::vector<std::string>> the_array;

};

struct ObjectChoiceA {
  ObjectChoiceA();
  ~ObjectChoiceA();
  ObjectChoiceA(const ObjectChoiceA&) = delete;
  ObjectChoiceA& operator=(const ObjectChoiceA&) = delete;
  ObjectChoiceA(ObjectChoiceA&& rhs) noexcept;
  ObjectChoiceA& operator=(ObjectChoiceA&& rhs) noexcept;

  // Populates a ObjectChoiceA object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ObjectChoiceA& out, std::u16string& error);

  // Populates a ObjectChoiceA object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ObjectChoiceA& out, std::u16string& error);

  // Creates a deep copy of ObjectChoiceA.
  ObjectChoiceA Clone() const;

  // Creates a ObjectChoiceA object from a base::DictValue, or unexpected on
  // failure.
  static base::expected<ObjectChoiceA, std::u16string> FromValue(const base::DictValue& value);

  // Creates a ObjectChoiceA object from a base::Value, or unexpected on
  // failure.
  static base::expected<ObjectChoiceA, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisObjectChoiceA object.
  base::DictValue ToValue() const;

  int a;

};

struct ObjectChoiceB {
  ObjectChoiceB();
  ~ObjectChoiceB();
  ObjectChoiceB(const ObjectChoiceB&) = delete;
  ObjectChoiceB& operator=(const ObjectChoiceB&) = delete;
  ObjectChoiceB(ObjectChoiceB&& rhs) noexcept;
  ObjectChoiceB& operator=(ObjectChoiceB&& rhs) noexcept;

  // Populates a ObjectChoiceB object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ObjectChoiceB& out, std::u16string& error);

  // Populates a ObjectChoiceB object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ObjectChoiceB& out, std::u16string& error);

  // Creates a deep copy of ObjectChoiceB.
  ObjectChoiceB Clone() const;

  // Creates a ObjectChoiceB object from a base::DictValue, or unexpected on
  // failure.
  static base::expected<ObjectChoiceB, std::u16string> FromValue(const base::DictValue& value);

  // Creates a ObjectChoiceB object from a base::Value, or unexpected on
  // failure.
  static base::expected<ObjectChoiceB, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisObjectChoiceB object.
  base::DictValue ToValue() const;

  std::string b;

};

// Tests choices between multiple object types.
struct ObjectChoices {
  ObjectChoices();
  ~ObjectChoices();
  ObjectChoices(const ObjectChoices&) = delete;
  ObjectChoices& operator=(const ObjectChoices&) = delete;
  ObjectChoices(ObjectChoices&& rhs) noexcept;
  ObjectChoices& operator=(ObjectChoices&& rhs) noexcept;

  // Populates a ObjectChoices object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ObjectChoices& out, std::u16string& error);

  // Creates a deep copy of ObjectChoices.
  ObjectChoices Clone() const;

  // Creates a ObjectChoices object from a base::Value, or unexpected on
  // failure.
  static base::expected<ObjectChoices, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value representing the serialized form of
  // thisObjectChoices object.
  base::Value ToValue() const;
  // Choices:
  std::optional<ObjectChoiceA> as_object_choice_a;
  std::optional<ObjectChoiceB> as_object_choice_b;
};


//
// Functions
//

namespace TestString {

struct Params {
  static base::expected<Params, std::u16string> Create(const base::ListValue& args);
  // DEPRECATED: prefer the variant of this function returning errors with
  // `base::expected`.
  static std::optional<Params> Create(const base::ListValue& args, std::u16string& error);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::optional<std::string> str;


 private:
  Params();
};

}  // namespace TestString

namespace TestFunction {

struct Params {
  static base::expected<Params, std::u16string> Create(const base::ListValue& args);
  // DEPRECATED: prefer the variant of this function returning errors with
  // `base::expected`.
  static std::optional<Params> Create(const base::ListValue& args, std::u16string& error);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int num;


 private:
  Params();
};

}  // namespace TestFunction

namespace TestTypeInObject {

struct Params {
  static base::expected<Params, std::u16string> Create(const base::ListValue& args);
  // DEPRECATED: prefer the variant of this function returning errors with
  // `base::expected`.
  static std::optional<Params> Create(const base::ListValue& args, std::u16string& error);
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
    static bool Populate(const base::Value& value, ParamObject& out, std::u16string& error);

    // Populates a ParamObject object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::DictValue& value, ParamObject& out, std::u16string& error);

    // Creates a deep copy of ParamObject.
    ParamObject Clone() const;

    // Creates a ParamObject object from a base::DictValue, or unexpected on
    // failure.
    static base::expected<ParamObject, std::u16string> FromValue(const base::DictValue& value);

    // Creates a ParamObject object from a base::Value, or unexpected on failure.
    static base::expected<ParamObject, std::u16string> FromValue(const base::Value& value);

    std::optional<test::api::error_generation::TestType> test_type;

    bool boolean;

  };


  ParamObject param_object;


 private:
  Params();
};

}  // namespace TestTypeInObject

}  // namespace error_generation
}  // namespace api
}  // namespace test

#endif  // TOOLS_JSON_SCHEMA_COMPILER_TEST_ERROR_GENERATION_H__
