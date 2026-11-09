// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITIONS IN
//   tools/json_schema_compiler/test
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py --root=../../ --destdir=gen --namespace=test::api::%(namespace)s --bundle-name= --generator=cpp-bundle-schema --include-rules= ../../tools/json_schema_compiler/test/additional_properties.json ../../tools/json_schema_compiler/test/any.json ../../tools/json_schema_compiler/test/arrays.json ../../tools/json_schema_compiler/test/callbacks.json ../../tools/json_schema_compiler/test/choices.json ../../tools/json_schema_compiler/test/crossref.json ../../tools/json_schema_compiler/test/enums.json ../../tools/json_schema_compiler/test/error_generation.json ../../tools/json_schema_compiler/test/functions_as_parameters.json ../../tools/json_schema_compiler/test/functions_on_types.json ../../tools/json_schema_compiler/test/idl_basics.idl ../../tools/json_schema_compiler/test/idl_object_types.idl ../../tools/json_schema_compiler/test/idl_other_namespace.idl ../../tools/json_schema_compiler/test/idl_other_namespace_sub_namespace.idl ../../tools/json_schema_compiler/test/idl_properties.idl ../../tools/json_schema_compiler/test/ignore_additional_properties.json ../../tools/json_schema_compiler/test/objects.json ../../tools/json_schema_compiler/test/objects_movable.idl ../../tools/json_schema_compiler/test/objects_movable_json.json ../../tools/json_schema_compiler/test/returns_async.json ../../tools/json_schema_compiler/test/simple_api.json

#ifndef TOOLS_JSON_SCHEMA_COMPILER_TEST_GENERATED_SCHEMAS_H__
#define TOOLS_JSON_SCHEMA_COMPILER_TEST_GENERATED_SCHEMAS_H__

#include <string_view>

namespace test {
namespace api {

class GeneratedSchemas {
 public:
  // Determines if schema named |name| is generated.
  static bool IsGenerated(std::string_view name);

  // Gets the API schema named |name|.
  static std::string_view Get(std::string_view name);
};

}  // namespace api
}  // namespace test

#endif  // TOOLS_JSON_SCHEMA_COMPILER_TEST_GENERATED_SCHEMAS_H__
