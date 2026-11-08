// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/objects.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/objects.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#ifndef TOOLS_JSON_SCHEMA_COMPILER_TEST_OBJECTS_H__
#define TOOLS_JSON_SCHEMA_COMPILER_TEST_OBJECTS_H__

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
namespace objects {

//
// Types
//

enum class FirstState {
  kNone = 0,
  kFoo,
  kBar,
  kBaz,
  kMaxValue = kBaz,
};


const char* ToString(FirstState as_enum);
FirstState ParseFirstState(std::string_view as_string);
std::u16string GetFirstStateParseError(std::string_view as_string);

enum class SecondState {
  kNone = 0,
  kSpam,
  kHam,
  kEggs,
  kMaxValue = kEggs,
};


const char* ToString(SecondState as_enum);
SecondState ParseSecondState(std::string_view as_string);
std::u16string GetSecondStateParseError(std::string_view as_string);


//
// Functions
//

namespace ObjectParam {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Info {
    Info();
    ~Info();
    Info(const Info&) = delete;
    Info& operator=(const Info&) = delete;
    Info(Info&& rhs) noexcept;
    Info& operator=(Info&& rhs) noexcept;

    // Populates a Info object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, Info& out);

    // Populates a Info object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::DictValue& value, Info& out);

    // Creates a deep copy of Info.
    Info Clone() const;

    // Creates a Info object from a base::DictValue, or nullopt on failure.
    static std::optional<Info> FromValue(const base::DictValue& value);

    // Creates a Info object from a base::Value, or nullopt on failure.
    static std::optional<Info> FromValue(const base::Value& value);

    std::vector<std::string> strings;

    int integer;

    bool boolean;

  };


  Info info;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace ObjectParam

namespace ReturnsObject {

namespace Results {

struct Info {
  Info();
  ~Info();
  Info(const Info&) = delete;
  Info& operator=(const Info&) = delete;
  Info(Info&& rhs) noexcept;
  Info& operator=(Info&& rhs) noexcept;

  // Returns a new base::DictValue representing the serialized form of thisInfo
  // object.
  base::DictValue ToValue() const;

  FirstState state;

};


base::ListValue Create(const Info& info);
}  // namespace Results

}  // namespace ReturnsObject

namespace ReturnsTwoObjects {

namespace Results {

struct FirstInfo {
  FirstInfo();
  ~FirstInfo();
  FirstInfo(const FirstInfo&) = delete;
  FirstInfo& operator=(const FirstInfo&) = delete;
  FirstInfo(FirstInfo&& rhs) noexcept;
  FirstInfo& operator=(FirstInfo&& rhs) noexcept;

  // Returns a new base::DictValue representing the serialized form of
  // thisFirstInfo object.
  base::DictValue ToValue() const;

  FirstState state;

};

struct SecondInfo {
  SecondInfo();
  ~SecondInfo();
  SecondInfo(const SecondInfo&) = delete;
  SecondInfo& operator=(const SecondInfo&) = delete;
  SecondInfo(SecondInfo&& rhs) noexcept;
  SecondInfo& operator=(SecondInfo&& rhs) noexcept;

  // Returns a new base::DictValue representing the serialized form of
  // thisSecondInfo object.
  base::DictValue ToValue() const;

  SecondState state;

};


base::ListValue Create(const FirstInfo& first_info, const SecondInfo& second_info);
}  // namespace Results

}  // namespace ReturnsTwoObjects

//
// Events
//

namespace OnObjectFired {

extern const char kEventName[];  // "objects.onObjectFired"

struct SomeObject {
  SomeObject();
  ~SomeObject();
  SomeObject(const SomeObject&) = delete;
  SomeObject& operator=(const SomeObject&) = delete;
  SomeObject(SomeObject&& rhs) noexcept;
  SomeObject& operator=(SomeObject&& rhs) noexcept;

  // Returns a new base::DictValue representing the serialized form of
  // thisSomeObject object.
  base::DictValue ToValue() const;

  FirstState state;

};


base::ListValue Create(const SomeObject& some_object);
}  // namespace OnObjectFired

namespace OnTwoObjectsFired {

extern const char kEventName[];  // "objects.onTwoObjectsFired"

struct FirstObject {
  FirstObject();
  ~FirstObject();
  FirstObject(const FirstObject&) = delete;
  FirstObject& operator=(const FirstObject&) = delete;
  FirstObject(FirstObject&& rhs) noexcept;
  FirstObject& operator=(FirstObject&& rhs) noexcept;

  // Returns a new base::DictValue representing the serialized form of
  // thisFirstObject object.
  base::DictValue ToValue() const;

  FirstState state;

};

struct SecondObject {
  SecondObject();
  ~SecondObject();
  SecondObject(const SecondObject&) = delete;
  SecondObject& operator=(const SecondObject&) = delete;
  SecondObject(SecondObject&& rhs) noexcept;
  SecondObject& operator=(SecondObject&& rhs) noexcept;

  // Returns a new base::DictValue representing the serialized form of
  // thisSecondObject object.
  base::DictValue ToValue() const;

  SecondState state;

};


base::ListValue Create(const FirstObject& first_object, const SecondObject& second_object);
}  // namespace OnTwoObjectsFired

}  // namespace objects
}  // namespace api
}  // namespace test

#endif  // TOOLS_JSON_SCHEMA_COMPILER_TEST_OBJECTS_H__
