// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITIONS IN
//   brave/common/extensions/api
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --bundle-name=Brave --generator=cpp-bundle-registration --impl-dir=brave/browser/extensions/api/ --include-rules= ../../brave/common/extensions/api/brave_theme.json ../../brave/common/extensions/api/web_discovery.json ../../brave/common/extensions/api/brave_talk.json

#ifndef BRAVE_COMMON_EXTENSIONS_API_GENERATED_API_H__
#define BRAVE_COMMON_EXTENSIONS_API_GENERATED_API_H__

#include <string>

class ExtensionFunctionRegistry;

namespace extensions {
namespace api {

class BraveGeneratedFunctionRegistry {
 public:
  static void RegisterAll(ExtensionFunctionRegistry* registry);
};

}  // namespace api
}  // namespace extensions

#endif  // BRAVE_COMMON_EXTENSIONS_API_GENERATED_API_H__
