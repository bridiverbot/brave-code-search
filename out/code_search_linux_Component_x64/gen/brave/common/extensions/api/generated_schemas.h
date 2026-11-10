// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITIONS IN
//   brave/common/extensions/api
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --bundle-name=Brave --generator=cpp-bundle-schema --include-rules=//brave/common/extensions/api:extensions::api::%(namespace)s ../../brave/common/extensions/api/brave_theme.json ../../brave/common/extensions/api/web_discovery.json ../../brave/common/extensions/api/brave_talk.json

#ifndef BRAVE_COMMON_EXTENSIONS_API_GENERATED_SCHEMAS_H__
#define BRAVE_COMMON_EXTENSIONS_API_GENERATED_SCHEMAS_H__

#include <string_view>

namespace extensions {
namespace api {

class BraveGeneratedSchemas {
 public:
  // Determines if schema named |name| is generated.
  static bool IsGenerated(std::string_view name);

  // Gets the API schema named |name|.
  static std::string_view Get(std::string_view name);
};

}  // namespace api
}  // namespace extensions

#endif  // BRAVE_COMMON_EXTENSIONS_API_GENERATED_SCHEMAS_H__
