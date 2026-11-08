// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/returns_async.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/returns_async.json --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#ifndef TOOLS_JSON_SCHEMA_COMPILER_TEST_RETURNS_ASYNC_H__
#define TOOLS_JSON_SCHEMA_COMPILER_TEST_RETURNS_ASYNC_H__

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
namespace returns_async {

//
// Types
//

enum class Enumeration {
  kNone = 0,
  kFoo,
  kBar,
  kBaz,
  kMaxValue = kBaz,
};


const char* ToString(Enumeration as_enum);
Enumeration ParseEnumeration(std::string_view as_string);
std::u16string GetEnumerationParseError(std::string_view as_string);


//
// Functions
//

namespace SupportsPromises {

namespace Results {

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

  Enumeration state;

};


base::ListValue Create(const SomeObject& some_object);
}  // namespace Results

}  // namespace SupportsPromises

namespace DoesNotSupportPromises {

namespace Results {

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

  Enumeration state;

};


base::ListValue Create(const SomeObject& some_object);
}  // namespace Results

}  // namespace DoesNotSupportPromises

}  // namespace returns_async
}  // namespace api
}  // namespace test

#endif  // TOOLS_JSON_SCHEMA_COMPILER_TEST_RETURNS_ASYNC_H__
