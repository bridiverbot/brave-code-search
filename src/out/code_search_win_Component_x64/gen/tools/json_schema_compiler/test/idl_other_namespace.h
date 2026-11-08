// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/idl_other_namespace.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/idl_other_namespace.idl --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#ifndef TOOLS_JSON_SCHEMA_COMPILER_TEST_IDL_OTHER_NAMESPACE_H__
#define TOOLS_JSON_SCHEMA_COMPILER_TEST_IDL_OTHER_NAMESPACE_H__

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
namespace idl_other_namespace {

//
// Types
//

enum class SomeType {
  kNone = 0,
  kHello,
  kWorld,
  kMaxValue = kWorld,
};


const char* ToString(SomeType as_enum);
SomeType ParseSomeType(std::string_view as_string);
std::u16string GetSomeTypeParseError(std::string_view as_string);


}  // namespace idl_other_namespace
}  // namespace api
}  // namespace test

#endif  // TOOLS_JSON_SCHEMA_COMPILER_TEST_IDL_OTHER_NAMESPACE_H__
