// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/choices.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/choices.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#ifndef TOOLS_JSON_SCHEMA_COMPILER_TEST_CHOICES_H__
#define TOOLS_JSON_SCHEMA_COMPILER_TEST_CHOICES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace test {
namespace api {
namespace choices {

//
// Types
//

struct ChoiceType {
  ChoiceType();
  ~ChoiceType();
  ChoiceType(const ChoiceType&) = delete;
  ChoiceType& operator=(const ChoiceType&) = delete;
  ChoiceType(ChoiceType&& rhs) noexcept;
  ChoiceType& operator=(ChoiceType&& rhs) noexcept;

  // Populates a ChoiceType object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, ChoiceType& out);

  // Populates a ChoiceType object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, ChoiceType& out);

  // Creates a deep copy of ChoiceType.
  ChoiceType Clone() const;

  // Creates a ChoiceType object from a base::DictValue, or nullopt on failure.
  static std::optional<ChoiceType> FromValue(const base::DictValue& value);

  // Creates a ChoiceType object from a base::Value, or nullopt on failure.
  static std::optional<ChoiceType> FromValue(const base::Value& value);

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
    static bool Populate(const base::Value& value, Integers& out);

    // Creates a deep copy of Integers.
    Integers Clone() const;

    // Creates a Integers object from a base::Value, or nullopt on failure.
    static std::optional<Integers> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisIntegers
    // object.
    base::Value ToValue() const;
    // Choices:
    std::optional<std::vector<int>> as_integers;
    std::optional<int> as_integer;
  };

  struct Strings {
    Strings();
    ~Strings();
    Strings(const Strings&) = delete;
    Strings& operator=(const Strings&) = delete;
    Strings(Strings&& rhs) noexcept;
    Strings& operator=(Strings&& rhs) noexcept;

    // Populates a Strings object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Strings& out);

    // Creates a deep copy of Strings.
    Strings Clone() const;

    // Creates a Strings object from a base::Value, or nullopt on failure.
    static std::optional<Strings> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisStrings
    // object.
    base::Value ToValue() const;
    // Choices:
    std::optional<std::vector<std::string>> as_strings;
    std::optional<std::string> as_string;
  };


  Integers integers;

  std::optional<Strings> strings;

};

// Tests when some of the choices are choices themselves
struct NestedChoice {
  NestedChoice();
  ~NestedChoice();
  NestedChoice(const NestedChoice&) = delete;
  NestedChoice& operator=(const NestedChoice&) = delete;
  NestedChoice(NestedChoice&& rhs) noexcept;
  NestedChoice& operator=(NestedChoice&& rhs) noexcept;

  // Populates a NestedChoice object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NestedChoice& out);

  // Creates a deep copy of NestedChoice.
  NestedChoice Clone() const;

  // Creates a NestedChoice object from a base::Value, or nullopt on failure.
  static std::optional<NestedChoice> FromValue(const base::Value& value);

  // Returns a new base::Value representing the serialized form of
  // thisNestedChoice object.
  base::Value ToValue() const;
  struct Choice1 {
    Choice1();
    ~Choice1();
    Choice1(const Choice1&) = delete;
    Choice1& operator=(const Choice1&) = delete;
    Choice1(Choice1&& rhs) noexcept;
    Choice1& operator=(Choice1&& rhs) noexcept;

    // Populates a Choice1 object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Choice1& out);

    // Creates a deep copy of Choice1.
    Choice1 Clone() const;

    // Creates a Choice1 object from a base::Value, or nullopt on failure.
    static std::optional<Choice1> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisChoice1
    // object.
    base::Value ToValue() const;
    // Choices:
    std::optional<std::string> as_string;
    std::optional<bool> as_boolean;
  };

  struct Choice2 {
    Choice2();
    ~Choice2();
    Choice2(const Choice2&) = delete;
    Choice2& operator=(const Choice2&) = delete;
    Choice2(Choice2&& rhs) noexcept;
    Choice2& operator=(Choice2&& rhs) noexcept;

    // Populates a Choice2 object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Choice2& out);

    // Creates a deep copy of Choice2.
    Choice2 Clone() const;

    // Creates a Choice2 object from a base::Value, or nullopt on failure.
    static std::optional<Choice2> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisChoice2
    // object.
    base::Value ToValue() const;
    // Choices:
    std::optional<double> as_double_;
    std::optional<ChoiceType> as_choice_type;
    std::optional<std::vector<ChoiceType>> as_choice_types;
  };


  // Choices:
  std::optional<int> as_integer;
  std::optional<Choice1> as_choice1;
  std::optional<Choice2> as_choice2;
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
  static bool Populate(const base::Value& value, ObjectChoiceA& out);

  // Populates a ObjectChoiceA object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ObjectChoiceA& out);

  // Creates a deep copy of ObjectChoiceA.
  ObjectChoiceA Clone() const;

  // Creates a ObjectChoiceA object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ObjectChoiceA> FromValue(const base::DictValue& value);

  // Creates a ObjectChoiceA object from a base::Value, or nullopt on failure.
  static std::optional<ObjectChoiceA> FromValue(const base::Value& value);

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
  static bool Populate(const base::Value& value, ObjectChoiceB& out);

  // Populates a ObjectChoiceB object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ObjectChoiceB& out);

  // Creates a deep copy of ObjectChoiceB.
  ObjectChoiceB Clone() const;

  // Creates a ObjectChoiceB object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ObjectChoiceB> FromValue(const base::DictValue& value);

  // Creates a ObjectChoiceB object from a base::Value, or nullopt on failure.
  static std::optional<ObjectChoiceB> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisObjectChoiceB object.
  base::DictValue ToValue() const;

  std::string b;

};

struct ObjectChoiceC {
  ObjectChoiceC();
  ~ObjectChoiceC();
  ObjectChoiceC(const ObjectChoiceC&) = delete;
  ObjectChoiceC& operator=(const ObjectChoiceC&) = delete;
  ObjectChoiceC(ObjectChoiceC&& rhs) noexcept;
  ObjectChoiceC& operator=(ObjectChoiceC&& rhs) noexcept;

  // Populates a ObjectChoiceC object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ObjectChoiceC& out);

  // Populates a ObjectChoiceC object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ObjectChoiceC& out);

  // Creates a deep copy of ObjectChoiceC.
  ObjectChoiceC Clone() const;

  // Creates a ObjectChoiceC object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ObjectChoiceC> FromValue(const base::DictValue& value);

  // Creates a ObjectChoiceC object from a base::Value, or nullopt on failure.
  static std::optional<ObjectChoiceC> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisObjectChoiceC object.
  base::DictValue ToValue() const;

  bool c;

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
  static bool Populate(const base::Value& value, ObjectChoices& out);

  // Creates a deep copy of ObjectChoices.
  ObjectChoices Clone() const;

  // Creates a ObjectChoices object from a base::Value, or nullopt on failure.
  static std::optional<ObjectChoices> FromValue(const base::Value& value);

  // Returns a new base::Value representing the serialized form of
  // thisObjectChoices object.
  base::Value ToValue() const;
  // Choices:
  std::optional<ObjectChoiceA> as_object_choice_a;
  std::optional<ObjectChoiceB> as_object_choice_b;
  std::optional<ObjectChoiceC> as_object_choice_c;
};


//
// Functions
//

namespace TakesIntegers {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Nums {
    Nums();
    ~Nums();
    Nums(const Nums&) = delete;
    Nums& operator=(const Nums&) = delete;
    Nums(Nums&& rhs) noexcept;
    Nums& operator=(Nums&& rhs) noexcept;

    // Populates a Nums object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, Nums& out);

    // Creates a deep copy of Nums.
    Nums Clone() const;

    // Creates a Nums object from a base::Value, or nullopt on failure.
    static std::optional<Nums> FromValue(const base::Value& value);
    // Choices:
    std::optional<std::vector<int>> as_integers;
    std::optional<int> as_integer;
  };


  Nums nums;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace TakesIntegers

namespace TakesIntegersOptional {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Nums {
    Nums();
    ~Nums();
    Nums(const Nums&) = delete;
    Nums& operator=(const Nums&) = delete;
    Nums(Nums&& rhs) noexcept;
    Nums& operator=(Nums&& rhs) noexcept;

    // Populates a Nums object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, Nums& out);

    // Creates a deep copy of Nums.
    Nums Clone() const;

    // Creates a Nums object from a base::Value, or nullopt on failure.
    static std::optional<Nums> FromValue(const base::Value& value);
    // Choices:
    std::optional<std::vector<int>> as_integers;
    std::optional<int> as_integer;
  };


  std::optional<Nums> nums;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace TakesIntegersOptional

namespace ObjectWithChoices {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct StringInfo {
    StringInfo();
    ~StringInfo();
    StringInfo(const StringInfo&) = delete;
    StringInfo& operator=(const StringInfo&) = delete;
    StringInfo(StringInfo&& rhs) noexcept;
    StringInfo& operator=(StringInfo&& rhs) noexcept;

    // Populates a StringInfo object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, StringInfo& out);

    // Populates a StringInfo object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::DictValue& value, StringInfo& out);

    // Creates a deep copy of StringInfo.
    StringInfo Clone() const;

    // Creates a StringInfo object from a base::DictValue, or nullopt on failure.
    static std::optional<StringInfo> FromValue(const base::DictValue& value);

    // Creates a StringInfo object from a base::Value, or nullopt on failure.
    static std::optional<StringInfo> FromValue(const base::Value& value);

    // One or more tab indices to highlight.
    struct Strings {
      Strings();
      ~Strings();
      Strings(const Strings&) = delete;
      Strings& operator=(const Strings&) = delete;
      Strings(Strings&& rhs) noexcept;
      Strings& operator=(Strings&& rhs) noexcept;

      // Populates a Strings object from a base::Value& instance. Returns whether
      // |out| was successfully populated.
      static bool Populate(const base::Value& value, Strings& out);

      // Creates a deep copy of Strings.
      Strings Clone() const;

      // Creates a Strings object from a base::Value, or nullopt on failure.
      static std::optional<Strings> FromValue(const base::Value& value);
      // Choices:
      std::optional<std::vector<std::string>> as_strings;
      std::optional<std::string> as_string;
    };

    // One or more tab indices to highlight.
    struct Integers {
      Integers();
      ~Integers();
      Integers(const Integers&) = delete;
      Integers& operator=(const Integers&) = delete;
      Integers(Integers&& rhs) noexcept;
      Integers& operator=(Integers&& rhs) noexcept;

      // Populates a Integers object from a base::Value& instance. Returns whether
      // |out| was successfully populated.
      static bool Populate(const base::Value& value, Integers& out);

      // Creates a deep copy of Integers.
      Integers Clone() const;

      // Creates a Integers object from a base::Value, or nullopt on failure.
      static std::optional<Integers> FromValue(const base::Value& value);
      // Choices:
      std::optional<std::vector<int>> as_integers;
      std::optional<int> as_integer;
    };


    // One or more tab indices to highlight.
    Strings strings;

    // One or more tab indices to highlight.
    std::optional<Integers> integers;

  };


  StringInfo string_info;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace ObjectWithChoices

namespace ReturnChoices {

namespace Results {

// Some integers.
struct Result {
  Result();
  ~Result();
  Result(const Result&) = delete;
  Result& operator=(const Result&) = delete;
  Result(Result&& rhs) noexcept;
  Result& operator=(Result&& rhs) noexcept;

  // Returns a new base::Value representing the serialized form of thisResult
  // object.
  base::Value ToValue() const;
  // Choices:
  std::optional<std::vector<int>> as_integers;
  std::optional<int> as_integer;
};


// Some integers.
base::ListValue Create(const Result& result);
}  // namespace Results

}  // namespace ReturnChoices

namespace ReturnMultipleChoices {

namespace Results {

// Some integers.
struct FirstResult {
  FirstResult();
  ~FirstResult();
  FirstResult(const FirstResult&) = delete;
  FirstResult& operator=(const FirstResult&) = delete;
  FirstResult(FirstResult&& rhs) noexcept;
  FirstResult& operator=(FirstResult&& rhs) noexcept;

  // Returns a new base::Value representing the serialized form of
  // thisFirstResult object.
  base::Value ToValue() const;
  // Choices:
  std::optional<std::vector<int>> as_integers;
  std::optional<int> as_integer;
};

// Some integers.
struct SecondResult {
  SecondResult();
  ~SecondResult();
  SecondResult(const SecondResult&) = delete;
  SecondResult& operator=(const SecondResult&) = delete;
  SecondResult(SecondResult&& rhs) noexcept;
  SecondResult& operator=(SecondResult&& rhs) noexcept;

  // Returns a new base::Value representing the serialized form of
  // thisSecondResult object.
  base::Value ToValue() const;
  // Choices:
  std::optional<std::vector<int>> as_integers;
  std::optional<int> as_integer;
};


// Some integers.
// Some integers.
base::ListValue Create(const FirstResult& first_result, const SecondResult& second_result);
}  // namespace Results

}  // namespace ReturnMultipleChoices

}  // namespace choices
}  // namespace api
}  // namespace test

#endif  // TOOLS_JSON_SCHEMA_COMPILER_TEST_CHOICES_H__
