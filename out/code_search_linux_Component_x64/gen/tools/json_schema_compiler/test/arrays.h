// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/arrays.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/arrays.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#ifndef TOOLS_JSON_SCHEMA_COMPILER_TEST_ARRAYS_H__
#define TOOLS_JSON_SCHEMA_COMPILER_TEST_ARRAYS_H__

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
namespace arrays {

//
// Types
//

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

struct EnumArrayReference {
  EnumArrayReference();
  ~EnumArrayReference();
  EnumArrayReference(const EnumArrayReference&) = delete;
  EnumArrayReference& operator=(const EnumArrayReference&) = delete;
  EnumArrayReference(EnumArrayReference&& rhs) noexcept;
  EnumArrayReference& operator=(EnumArrayReference&& rhs) noexcept;

  // Populates a EnumArrayReference object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EnumArrayReference& out);

  // Populates a EnumArrayReference object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, EnumArrayReference& out);

  // Creates a deep copy of EnumArrayReference.
  EnumArrayReference Clone() const;

  // Creates a EnumArrayReference object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<EnumArrayReference> FromValue(const base::DictValue& value);

  // Creates a EnumArrayReference object from a base::Value, or nullopt on
  // failure.
  static std::optional<EnumArrayReference> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisEnumArrayReference object.
  base::DictValue ToValue() const;

  std::vector<Enumeration> types;

};

struct EnumArrayMixed {
  EnumArrayMixed();
  ~EnumArrayMixed();
  EnumArrayMixed(const EnumArrayMixed&) = delete;
  EnumArrayMixed& operator=(const EnumArrayMixed&) = delete;
  EnumArrayMixed(EnumArrayMixed&& rhs) noexcept;
  EnumArrayMixed& operator=(EnumArrayMixed&& rhs) noexcept;

  // Populates a EnumArrayMixed object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EnumArrayMixed& out);

  // Populates a EnumArrayMixed object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, EnumArrayMixed& out);

  // Creates a deep copy of EnumArrayMixed.
  EnumArrayMixed Clone() const;

  // Creates a EnumArrayMixed object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<EnumArrayMixed> FromValue(const base::DictValue& value);

  // Creates a EnumArrayMixed object from a base::Value, or nullopt on failure.
  static std::optional<EnumArrayMixed> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisEnumArrayMixed object.
  base::DictValue ToValue() const;

  std::vector<Enumeration> infile_enums;

  std::vector<test::api::enums::Enumeration> external_enums;

};

struct OptionalEnumArrayType {
  OptionalEnumArrayType();
  ~OptionalEnumArrayType();
  OptionalEnumArrayType(const OptionalEnumArrayType&) = delete;
  OptionalEnumArrayType& operator=(const OptionalEnumArrayType&) = delete;
  OptionalEnumArrayType(OptionalEnumArrayType&& rhs) noexcept;
  OptionalEnumArrayType& operator=(OptionalEnumArrayType&& rhs) noexcept;

  // Populates a OptionalEnumArrayType object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OptionalEnumArrayType& out);

  // Populates a OptionalEnumArrayType object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, OptionalEnumArrayType& out);

  // Creates a deep copy of OptionalEnumArrayType.
  OptionalEnumArrayType Clone() const;

  // Creates a OptionalEnumArrayType object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<OptionalEnumArrayType> FromValue(const base::DictValue& value);

  // Creates a OptionalEnumArrayType object from a base::Value, or nullopt on
  // failure.
  static std::optional<OptionalEnumArrayType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisOptionalEnumArrayType object.
  base::DictValue ToValue() const;

  std::optional<std::vector<Enumeration>> types;

};

struct BasicArrayType {
  BasicArrayType();
  ~BasicArrayType();
  BasicArrayType(const BasicArrayType&) = delete;
  BasicArrayType& operator=(const BasicArrayType&) = delete;
  BasicArrayType(BasicArrayType&& rhs) noexcept;
  BasicArrayType& operator=(BasicArrayType&& rhs) noexcept;

  // Populates a BasicArrayType object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, BasicArrayType& out);

  // Populates a BasicArrayType object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, BasicArrayType& out);

  // Creates a deep copy of BasicArrayType.
  BasicArrayType Clone() const;

  // Creates a BasicArrayType object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<BasicArrayType> FromValue(const base::DictValue& value);

  // Creates a BasicArrayType object from a base::Value, or nullopt on failure.
  static std::optional<BasicArrayType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisBasicArrayType object.
  base::DictValue ToValue() const;

  std::vector<std::string> strings;

  std::vector<bool> booleans;

  std::vector<double> numbers;

  std::vector<int> integers;

};

struct Item {
  Item();
  ~Item();
  Item(const Item&) = delete;
  Item& operator=(const Item&) = delete;
  Item(Item&& rhs) noexcept;
  Item& operator=(Item&& rhs) noexcept;

  // Populates a Item object from a base::Value& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value& value, Item& out);

  // Populates a Item object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, Item& out);

  // Creates a deep copy of Item.
  Item Clone() const;

  // Creates a Item object from a base::DictValue, or nullopt on failure.
  static std::optional<Item> FromValue(const base::DictValue& value);

  // Creates a Item object from a base::Value, or nullopt on failure.
  static std::optional<Item> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of thisItem
  // object.
  base::DictValue ToValue() const;

  int val;

};

struct RefArrayType {
  RefArrayType();
  ~RefArrayType();
  RefArrayType(const RefArrayType&) = delete;
  RefArrayType& operator=(const RefArrayType&) = delete;
  RefArrayType(RefArrayType&& rhs) noexcept;
  RefArrayType& operator=(RefArrayType&& rhs) noexcept;

  // Populates a RefArrayType object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RefArrayType& out);

  // Populates a RefArrayType object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, RefArrayType& out);

  // Creates a deep copy of RefArrayType.
  RefArrayType Clone() const;

  // Creates a RefArrayType object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<RefArrayType> FromValue(const base::DictValue& value);

  // Creates a RefArrayType object from a base::Value, or nullopt on failure.
  static std::optional<RefArrayType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisRefArrayType object.
  base::DictValue ToValue() const;

  std::vector<Item> refs;

};


//
// Functions
//

namespace IntegerArray {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<int> nums;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace IntegerArray

namespace AnyArray {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  base::ListValue anys;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace AnyArray

namespace ObjectArray {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct ObjectsType {
    ObjectsType();
    ~ObjectsType();
    ObjectsType(const ObjectsType&) = delete;
    ObjectsType& operator=(const ObjectsType&) = delete;
    ObjectsType(ObjectsType&& rhs) noexcept;
    ObjectsType& operator=(ObjectsType&& rhs) noexcept;

    // Populates a ObjectsType object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, ObjectsType& out);

    // Populates a ObjectsType object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::DictValue& value, ObjectsType& out);

    // Creates a deep copy of ObjectsType.
    ObjectsType Clone() const;

    // Creates a ObjectsType object from a base::DictValue, or nullopt on failure.
    static std::optional<ObjectsType> FromValue(const base::DictValue& value);

    // Creates a ObjectsType object from a base::Value, or nullopt on failure.
    static std::optional<ObjectsType> FromValue(const base::Value& value);

    std::map<std::string, int> additional_properties;
  };



  std::vector<ObjectsType> objects;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace ObjectArray

namespace RefArray {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<Item> refs;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace RefArray

namespace JustChoices {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Choices {
    Choices();
    ~Choices();
    Choices(const Choices&) = delete;
    Choices& operator=(const Choices&) = delete;
    Choices(Choices&& rhs) noexcept;
    Choices& operator=(Choices&& rhs) noexcept;

    // Populates a Choices object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Choices& out);

    // Creates a deep copy of Choices.
    Choices Clone() const;

    // Creates a Choices object from a base::Value, or nullopt on failure.
    static std::optional<Choices> FromValue(const base::Value& value);
    // Choices:
    std::optional<int> as_integer;
    std::optional<bool> as_boolean;
    std::optional<std::vector<Item>> as_items;
  };


  Choices choices;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace JustChoices

namespace ChoicesArray {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct ChoicesType {
    ChoicesType();
    ~ChoicesType();
    ChoicesType(const ChoicesType&) = delete;
    ChoicesType& operator=(const ChoicesType&) = delete;
    ChoicesType(ChoicesType&& rhs) noexcept;
    ChoicesType& operator=(ChoicesType&& rhs) noexcept;

    // Populates a ChoicesType object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, ChoicesType& out);

    // Creates a deep copy of ChoicesType.
    ChoicesType Clone() const;

    // Creates a ChoicesType object from a base::Value, or nullopt on failure.
    static std::optional<ChoicesType> FromValue(const base::Value& value);
    // Choices:
    std::optional<int> as_integer;
    std::optional<bool> as_boolean;
    std::optional<std::vector<Item>> as_items;
  };



  std::vector<ChoicesType> choices;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace ChoicesArray

namespace ReturnIntegerArray {

namespace Results {

base::ListValue Create(const std::vector<int>& integers);
}  // namespace Results

}  // namespace ReturnIntegerArray

namespace ReturnRefArray {

namespace Results {

base::ListValue Create(const std::vector<Item>& refs);
}  // namespace Results

}  // namespace ReturnRefArray

}  // namespace arrays
}  // namespace api
}  // namespace test

#endif  // TOOLS_JSON_SCHEMA_COMPILER_TEST_ARRAYS_H__
