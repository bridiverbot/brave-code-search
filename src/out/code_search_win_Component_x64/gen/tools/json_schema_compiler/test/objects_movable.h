// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/objects_movable.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/objects_movable.idl --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#ifndef TOOLS_JSON_SCHEMA_COMPILER_TEST_OBJECTS_MOVABLE_H__
#define TOOLS_JSON_SCHEMA_COMPILER_TEST_OBJECTS_MOVABLE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include <string_view>


namespace test {
namespace api {
namespace objects_movable {

//
// Types
//

enum class Foo {
  kNone = 0,
  kBar,
  kBaz,
  kMaxValue = kBaz,
};


const char* ToString(Foo as_enum);
Foo ParseFoo(std::string_view as_string);
std::u16string GetFooParseError(std::string_view as_string);

struct MovablePod {
  MovablePod();
  ~MovablePod();
  MovablePod(const MovablePod&) = delete;
  MovablePod& operator=(const MovablePod&) = delete;
  MovablePod(MovablePod&& rhs) noexcept;
  MovablePod& operator=(MovablePod&& rhs) noexcept;

  // Populates a MovablePod object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, MovablePod& out);

  // Populates a MovablePod object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, MovablePod& out);

  // Creates a deep copy of MovablePod.
  MovablePod Clone() const;

  // Creates a MovablePod object from a base::DictValue, or nullopt on failure.
  static std::optional<MovablePod> FromValue(const base::DictValue& value);

  // Creates a MovablePod object from a base::Value, or nullopt on failure.
  static std::optional<MovablePod> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisMovablePod object.
  base::DictValue ToValue() const;

  Foo foo;

  std::string str;

  int num;

  bool b;

};

struct MovableParent {
  MovableParent();
  ~MovableParent();
  MovableParent(const MovableParent&) = delete;
  MovableParent& operator=(const MovableParent&) = delete;
  MovableParent(MovableParent&& rhs) noexcept;
  MovableParent& operator=(MovableParent&& rhs) noexcept;

  // Populates a MovableParent object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MovableParent& out);

  // Populates a MovableParent object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, MovableParent& out);

  // Creates a deep copy of MovableParent.
  MovableParent Clone() const;

  // Creates a MovableParent object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<MovableParent> FromValue(const base::DictValue& value);

  // Creates a MovableParent object from a base::Value, or nullopt on failure.
  static std::optional<MovableParent> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisMovableParent object.
  base::DictValue ToValue() const;

  struct Blob {
    Blob();
    ~Blob();
    Blob(const Blob&) = delete;
    Blob& operator=(const Blob&) = delete;
    Blob(Blob&& rhs) noexcept;
    Blob& operator=(Blob&& rhs) noexcept;

    // Populates a Blob object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, Blob& out);

    // Populates a Blob object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::DictValue& value, Blob& out);

    // Creates a deep copy of Blob.
    Blob Clone() const;

    // Creates a Blob object from a base::DictValue, or nullopt on failure.
    static std::optional<Blob> FromValue(const base::DictValue& value);

    // Creates a Blob object from a base::Value, or nullopt on failure.
    static std::optional<Blob> FromValue(const base::Value& value);

    // Returns a new base::DictValue representing the serialized form of thisBlob
    // object.
    base::DictValue ToValue() const;

    base::DictValue additional_properties;
  };

  struct Choice {
    Choice();
    ~Choice();
    Choice(const Choice&) = delete;
    Choice& operator=(const Choice&) = delete;
    Choice(Choice&& rhs) noexcept;
    Choice& operator=(Choice&& rhs) noexcept;

    // Populates a Choice object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Choice& out);

    // Creates a deep copy of Choice.
    Choice Clone() const;

    // Creates a Choice object from a base::Value, or nullopt on failure.
    static std::optional<Choice> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisChoice
    // object.
    base::Value ToValue() const;
    // Choices:
    std::optional<std::string> as_string;
    std::optional<MovablePod> as_movable_pod;
  };


  std::vector<MovablePod> pods;

  std::vector<std::string> strs;

  Blob blob;

  Choice choice;

};


}  // namespace objects_movable
}  // namespace api
}  // namespace test

#endif  // TOOLS_JSON_SCHEMA_COMPILER_TEST_OBJECTS_MOVABLE_H__
