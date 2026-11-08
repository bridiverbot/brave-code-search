// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITIONS IN
//   chrome/common/apps/platform_apps/api
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py --root=../../ --destdir=gen --namespace=chrome_apps::api::%(namespace)s --bundle-name=ChromeApps --generator=cpp-bundle-registration --impl-dir=chrome/browser/apps/platform_apps/api --include-rules= ../../chrome/common/apps/platform_apps/api/sync_file_system.idl

#ifndef CHROME_COMMON_APPS_PLATFORM_APPS_API_GENERATED_API_H__
#define CHROME_COMMON_APPS_PLATFORM_APPS_API_GENERATED_API_H__

#include <string>

class ExtensionFunctionRegistry;

namespace chrome_apps {
namespace api {

class ChromeAppsGeneratedFunctionRegistry {
 public:
  static void RegisterAll(ExtensionFunctionRegistry* registry);
};

}  // namespace api
}  // namespace chrome_apps

#endif  // CHROME_COMMON_APPS_PLATFORM_APPS_API_GENERATED_API_H__
