// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   tools/json_schema_compiler/test/idl_properties.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../tools/json_schema_compiler/test/idl_properties.idl --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --generator=cpp --include-rules=

#ifndef TOOLS_JSON_SCHEMA_COMPILER_TEST_IDL_PROPERTIES_H__
#define TOOLS_JSON_SCHEMA_COMPILER_TEST_IDL_PROPERTIES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace test {
namespace api {
namespace idl_properties {

//
// Properties
//

// Integer property.
extern const int first;

// Double property.
extern const double second;

// String property.
extern const char third[];

}  // namespace idl_properties
}  // namespace api
}  // namespace test

#endif  // TOOLS_JSON_SCHEMA_COMPILER_TEST_IDL_PROPERTIES_H__
