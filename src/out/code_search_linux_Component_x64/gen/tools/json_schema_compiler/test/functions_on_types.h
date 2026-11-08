// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/functions_on_types.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/functions_on_types.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#ifndef TOOLS_JSON_SCHEMA_COMPILER_TEST_FUNCTIONS_ON_TYPES_H__
#define TOOLS_JSON_SCHEMA_COMPILER_TEST_FUNCTIONS_ON_TYPES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace test {
namespace api {
namespace functions_on_types {

//
// Types
//

namespace StorageArea {

namespace Get {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // A single key to get, list of keys to get, or a dictionary specifying default
  // values (see description of the object).  An empty list or object will return
  // an empty result object.  Pass in <code>null</code> to get the entire contents
  // of storage.
  struct Keys {
    Keys();
    ~Keys();
    Keys(const Keys&) = delete;
    Keys& operator=(const Keys&) = delete;
    Keys(Keys&& rhs) noexcept;
    Keys& operator=(Keys&& rhs) noexcept;

    // Populates a Keys object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, Keys& out);

    // Creates a deep copy of Keys.
    Keys Clone() const;

    // Creates a Keys object from a base::Value, or nullopt on failure.
    static std::optional<Keys> FromValue(const base::Value& value);
    // Storage items to return in the callback, where the values are replaced with
    // those from storage if they exist.
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

      base::DictValue additional_properties;
    };


    // Choices:
    std::optional<std::string> as_string;
    std::optional<Object> as_object;
  };


  // A single key to get, list of keys to get, or a dictionary specifying default
  // values (see description of the object).  An empty list or object will return
  // an empty result object.  Pass in <code>null</code> to get the entire contents
  // of storage.
  std::optional<Keys> keys;


 private:
  Params();
};

namespace Results {

// Object with items in their key-value mappings.
struct Items {
  Items();
  ~Items();
  Items(const Items&) = delete;
  Items& operator=(const Items&) = delete;
  Items(Items&& rhs) noexcept;
  Items& operator=(Items&& rhs) noexcept;

  // Returns a new base::DictValue representing the serialized form of thisItems
  // object.
  base::DictValue ToValue() const;

  base::DictValue additional_properties;
};


// Object with items in their key-value mappings.
base::ListValue Create(const Items& items);
}  // namespace Results

}  // namespace Get

}  // namespace StorageArea

namespace ChromeSetting {

namespace Get {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // What setting to consider.
  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::DictValue& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::DictValue, or nullopt on failure.
    static std::optional<Details> FromValue(const base::DictValue& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value& value);

    // Whether to return the setting that applies to the incognito session (default
    // false).
    std::optional<bool> incognito;

  };


  // What setting to consider.
  Details details;


 private:
  Params();
};

}  // namespace Get

}  // namespace ChromeSetting


}  // namespace functions_on_types
}  // namespace api
}  // namespace test

#endif  // TOOLS_JSON_SCHEMA_COMPILER_TEST_FUNCTIONS_ON_TYPES_H__
