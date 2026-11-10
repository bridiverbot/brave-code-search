// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/idl_object_types.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/idl_object_types.idl --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#ifndef TOOLS_JSON_SCHEMA_COMPILER_TEST_IDL_OBJECT_TYPES_H__
#define TOOLS_JSON_SCHEMA_COMPILER_TEST_IDL_OBJECT_TYPES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace test {
namespace api {
namespace idl_object_types {

//
// Types
//

struct FooType {
  FooType();
  ~FooType();
  FooType(const FooType&) = delete;
  FooType& operator=(const FooType&) = delete;
  FooType(FooType&& rhs) noexcept;
  FooType& operator=(FooType&& rhs) noexcept;

  // Populates a FooType object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, FooType& out);

  // Populates a FooType object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, FooType& out);

  // Creates a deep copy of FooType.
  FooType Clone() const;

  // Creates a FooType object from a base::DictValue, or nullopt on failure.
  static std::optional<FooType> FromValue(const base::DictValue& value);

  // Creates a FooType object from a base::Value, or nullopt on failure.
  static std::optional<FooType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisFooType object.
  base::DictValue ToValue() const;

  struct Y {
    Y();
    ~Y();
    Y(const Y&) = delete;
    Y& operator=(const Y&) = delete;
    Y(Y&& rhs) noexcept;
    Y& operator=(Y&& rhs) noexcept;

    // Populates a Y object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, Y& out);

    // Populates a Y object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::DictValue& value, Y& out);

    // Creates a deep copy of Y.
    Y Clone() const;

    // Creates a Y object from a base::DictValue, or nullopt on failure.
    static std::optional<Y> FromValue(const base::DictValue& value);

    // Creates a Y object from a base::Value, or nullopt on failure.
    static std::optional<Y> FromValue(const base::Value& value);

    // Returns a new base::DictValue representing the serialized form of thisY
    // object.
    base::DictValue ToValue() const;

    base::DictValue additional_properties;
  };

  struct Z {
    Z();
    ~Z();
    Z(const Z&) = delete;
    Z& operator=(const Z&) = delete;
    Z(Z&& rhs) noexcept;
    Z& operator=(Z&& rhs) noexcept;

    // Populates a Z object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, Z& out);

    // Populates a Z object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::DictValue& value, Z& out);

    // Creates a deep copy of Z.
    Z Clone() const;

    // Creates a Z object from a base::DictValue, or nullopt on failure.
    static std::optional<Z> FromValue(const base::DictValue& value);

    // Creates a Z object from a base::Value, or nullopt on failure.
    static std::optional<Z> FromValue(const base::Value& value);

    // Returns a new base::DictValue representing the serialized form of thisZ
    // object.
    base::DictValue ToValue() const;

    base::DictValue additional_properties;
  };


  int x;

  Y y;

  Z z;

};

struct BarType {
  BarType();
  ~BarType();
  BarType(const BarType&) = delete;
  BarType& operator=(const BarType&) = delete;
  BarType(BarType&& rhs) noexcept;
  BarType& operator=(BarType&& rhs) noexcept;

  // Populates a BarType object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, BarType& out);

  // Populates a BarType object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, BarType& out);

  // Creates a deep copy of BarType.
  BarType Clone() const;

  // Creates a BarType object from a base::DictValue, or nullopt on failure.
  static std::optional<BarType> FromValue(const base::DictValue& value);

  // Creates a BarType object from a base::Value, or nullopt on failure.
  static std::optional<BarType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisBarType object.
  base::DictValue ToValue() const;

  base::Value x;

  std::optional<base::Value> y;

};

struct BazType {
  BazType();
  ~BazType();
  BazType(const BazType&) = delete;
  BazType& operator=(const BazType&) = delete;
  BazType(BazType&& rhs) noexcept;
  BazType& operator=(BazType&& rhs) noexcept;

  // Populates a BazType object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, BazType& out);

  // Populates a BazType object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, BazType& out);

  // Creates a deep copy of BazType.
  BazType Clone() const;

  // Creates a BazType object from a base::DictValue, or nullopt on failure.
  static std::optional<BazType> FromValue(const base::DictValue& value);

  // Creates a BazType object from a base::Value, or nullopt on failure.
  static std::optional<BazType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisBazType object.
  base::DictValue ToValue() const;

  std::optional<int> x;

  std::optional<FooType> foo;

};

struct UnionType {
  UnionType();
  ~UnionType();
  UnionType(const UnionType&) = delete;
  UnionType& operator=(const UnionType&) = delete;
  UnionType(UnionType&& rhs) noexcept;
  UnionType& operator=(UnionType&& rhs) noexcept;

  // Populates a UnionType object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, UnionType& out);

  // Populates a UnionType object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, UnionType& out);

  // Creates a deep copy of UnionType.
  UnionType Clone() const;

  // Creates a UnionType object from a base::DictValue, or nullopt on failure.
  static std::optional<UnionType> FromValue(const base::DictValue& value);

  // Creates a UnionType object from a base::Value, or nullopt on failure.
  static std::optional<UnionType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisUnionType object.
  base::DictValue ToValue() const;

  struct X {
    X();
    ~X();
    X(const X&) = delete;
    X& operator=(const X&) = delete;
    X(X&& rhs) noexcept;
    X& operator=(X&& rhs) noexcept;

    // Populates a X object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, X& out);

    // Creates a deep copy of X.
    X Clone() const;

    // Creates a X object from a base::Value, or nullopt on failure.
    static std::optional<X> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisX object.
    base::Value ToValue() const;
    // Choices:
    std::optional<int> as_integer;
    std::optional<FooType> as_foo_type;
  };

  struct Y {
    Y();
    ~Y();
    Y(const Y&) = delete;
    Y& operator=(const Y&) = delete;
    Y(Y&& rhs) noexcept;
    Y& operator=(Y&& rhs) noexcept;

    // Populates a Y object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, Y& out);

    // Creates a deep copy of Y.
    Y Clone() const;

    // Creates a Y object from a base::Value, or nullopt on failure.
    static std::optional<Y> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisY object.
    base::Value ToValue() const;
    struct Object {
      Object();
      ~Object();
      Object(const Object&) = delete;
      Object& operator=(const Object&) = delete;
      Object(Object&& rhs) noexcept;
      Object& operator=(Object&& rhs) noexcept;

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

      base::DictValue additional_properties;
    };


    // Choices:
    std::optional<std::string> as_string;
    std::optional<Object> as_object;
  };

  struct Z {
    Z();
    ~Z();
    Z(const Z&) = delete;
    Z& operator=(const Z&) = delete;
    Z(Z&& rhs) noexcept;
    Z& operator=(Z&& rhs) noexcept;

    // Populates a Z object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, Z& out);

    // Creates a deep copy of Z.
    Z Clone() const;

    // Creates a Z object from a base::Value, or nullopt on failure.
    static std::optional<Z> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisZ object.
    base::Value ToValue() const;
    struct Object {
      Object();
      ~Object();
      Object(const Object&) = delete;
      Object& operator=(const Object&) = delete;
      Object(Object&& rhs) noexcept;
      Object& operator=(Object&& rhs) noexcept;

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

      base::DictValue additional_properties;
    };


    // Choices:
    std::optional<Object> as_object;
    std::optional<int> as_integer;
  };


  std::optional<X> x;

  Y y;

  Z z;

};

struct ModifiedUnionType {
  ModifiedUnionType();
  ~ModifiedUnionType();
  ModifiedUnionType(const ModifiedUnionType&) = delete;
  ModifiedUnionType& operator=(const ModifiedUnionType&) = delete;
  ModifiedUnionType(ModifiedUnionType&& rhs) noexcept;
  ModifiedUnionType& operator=(ModifiedUnionType&& rhs) noexcept;

  // Populates a ModifiedUnionType object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ModifiedUnionType& out);

  // Populates a ModifiedUnionType object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ModifiedUnionType& out);

  // Creates a deep copy of ModifiedUnionType.
  ModifiedUnionType Clone() const;

  // Creates a ModifiedUnionType object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ModifiedUnionType> FromValue(const base::DictValue& value);

  // Creates a ModifiedUnionType object from a base::Value, or nullopt on
  // failure.
  static std::optional<ModifiedUnionType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisModifiedUnionType object.
  base::DictValue ToValue() const;

  struct X {
    X();
    ~X();
    X(const X&) = delete;
    X& operator=(const X&) = delete;
    X(X&& rhs) noexcept;
    X& operator=(X&& rhs) noexcept;

    // Populates a X object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, X& out);

    // Creates a deep copy of X.
    X Clone() const;

    // Creates a X object from a base::Value, or nullopt on failure.
    static std::optional<X> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisX object.
    base::Value ToValue() const;
    // Choices:
    std::optional<int> as_integer;
    std::optional<std::string> as_string;
  };


  X x;

};

struct SerializableFunctionObject {
  SerializableFunctionObject();
  ~SerializableFunctionObject();
  SerializableFunctionObject(const SerializableFunctionObject&) = delete;
  SerializableFunctionObject& operator=(const SerializableFunctionObject&) = delete;
  SerializableFunctionObject(SerializableFunctionObject&& rhs) noexcept;
  SerializableFunctionObject& operator=(SerializableFunctionObject&& rhs) noexcept;

  // Populates a SerializableFunctionObject object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SerializableFunctionObject& out);

  // Populates a SerializableFunctionObject object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, SerializableFunctionObject& out);

  // Creates a deep copy of SerializableFunctionObject.
  SerializableFunctionObject Clone() const;

  // Creates a SerializableFunctionObject object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<SerializableFunctionObject> FromValue(const base::DictValue& value);

  // Creates a SerializableFunctionObject object from a base::Value, or nullopt
  // on failure.
  static std::optional<SerializableFunctionObject> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisSerializableFunctionObject object.
  base::DictValue ToValue() const;

  std::string func;

};


//
// Functions
//

namespace ObjectFunction1 {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Icon {
    Icon();
    ~Icon();
    Icon(const Icon&) = delete;
    Icon& operator=(const Icon&) = delete;
    Icon(Icon&& rhs) noexcept;
    Icon& operator=(Icon&& rhs) noexcept;

    // Populates a Icon object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, Icon& out);

    // Populates a Icon object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::DictValue& value, Icon& out);

    // Creates a deep copy of Icon.
    Icon Clone() const;

    // Creates a Icon object from a base::DictValue, or nullopt on failure.
    static std::optional<Icon> FromValue(const base::DictValue& value);

    // Creates a Icon object from a base::Value, or nullopt on failure.
    static std::optional<Icon> FromValue(const base::Value& value);

    base::DictValue additional_properties;
  };


  Icon icon;


 private:
  Params();
};

}  // namespace ObjectFunction1

namespace ObjectFunction2 {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  base::Value some_arg;


 private:
  Params();
};

}  // namespace ObjectFunction2

}  // namespace idl_object_types
}  // namespace api
}  // namespace test

#endif  // TOOLS_JSON_SCHEMA_COMPILER_TEST_IDL_OBJECT_TYPES_H__
