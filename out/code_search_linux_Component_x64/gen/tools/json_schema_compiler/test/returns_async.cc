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

#include "tools/json_schema_compiler/test/returns_async.h"

#include <memory>
#include <optional>
#include <ostream>
#include <string>
#include <string_view>
#include <utility>
#include <vector>

#include "base/check.h"
#include "base/check_op.h"
#include "base/notreached.h"
#include "base/strings/string_number_conversions.h"
#include "base/strings/utf_string_conversions.h"
#include "base/values.h"
#include "tools/json_schema_compiler/util.h"
#include <string_view>


using base::UTF8ToUTF16;

namespace test {
namespace api {
namespace returns_async {
//
// Types
//

const char* ToString(Enumeration enum_param) {
  switch (enum_param) {
    case Enumeration::kFoo:
      return "foo";
    case Enumeration::kBar:
      return "bar";
    case Enumeration::kBaz:
      return "baz";
    case Enumeration::kNone:
      return "";
  }
  NOTREACHED();
}

Enumeration ParseEnumeration(std::string_view enum_string) {
  if (enum_string == "foo")
    return Enumeration::kFoo;
  if (enum_string == "bar")
    return Enumeration::kBar;
  if (enum_string == "baz")
    return Enumeration::kBaz;
  return Enumeration::kNone;
}

std::u16string GetEnumerationParseError(std::string_view enum_string) {
  return u"expected \"foo\" or \"bar\" or \"baz\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace SupportsPromises {

Results::SomeObject::SomeObject()
: state() {}

Results::SomeObject::~SomeObject() = default;
Results::SomeObject::SomeObject(SomeObject&& rhs) noexcept = default;
Results::SomeObject& Results::SomeObject::operator=(SomeObject&& rhs) noexcept = default;
base::DictValue Results::SomeObject::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("state", returns_async::ToString(this->state));


  return to_value_result;
}


base::ListValue Results::Create(const SomeObject& some_object) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((some_object).ToValue());

  return create_results;
}
}  // namespace SupportsPromises

namespace DoesNotSupportPromises {

Results::SomeObject::SomeObject()
: state() {}

Results::SomeObject::~SomeObject() = default;
Results::SomeObject::SomeObject(SomeObject&& rhs) noexcept = default;
Results::SomeObject& Results::SomeObject::operator=(SomeObject&& rhs) noexcept = default;
base::DictValue Results::SomeObject::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("state", returns_async::ToString(this->state));


  return to_value_result;
}


base::ListValue Results::Create(const SomeObject& some_object) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((some_object).ToValue());

  return create_results;
}
}  // namespace DoesNotSupportPromises

}  // namespace returns_async
}  // namespace api
}  // namespace test

