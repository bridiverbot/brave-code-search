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

#include "chrome/browser/apps/platform_apps/api/generated_api_registration.h"

#include "build/android_buildflags.h"
#include "build/build_config.h"

#include "chrome/browser/apps/platform_apps/api/sync_file_system/sync_file_system_api.h"

#include "extensions/browser/extension_function_registry.h"

namespace chrome_apps {
namespace api {

// static
void ChromeAppsGeneratedFunctionRegistry::RegisterAll(ExtensionFunctionRegistry* registry) {
  constexpr ExtensionFunctionRegistry::FactoryEntry kEntries[] = {
    {
      &NewExtensionFunction<SyncFileSystemRequestFileSystemFunction>,
      SyncFileSystemRequestFileSystemFunction::static_function_name(),
      SyncFileSystemRequestFileSystemFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<SyncFileSystemSetConflictResolutionPolicyFunction>,
      SyncFileSystemSetConflictResolutionPolicyFunction::static_function_name(),
      SyncFileSystemSetConflictResolutionPolicyFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<SyncFileSystemGetConflictResolutionPolicyFunction>,
      SyncFileSystemGetConflictResolutionPolicyFunction::static_function_name(),
      SyncFileSystemGetConflictResolutionPolicyFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<SyncFileSystemGetUsageAndQuotaFunction>,
      SyncFileSystemGetUsageAndQuotaFunction::static_function_name(),
      SyncFileSystemGetUsageAndQuotaFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<SyncFileSystemGetFileStatusFunction>,
      SyncFileSystemGetFileStatusFunction::static_function_name(),
      SyncFileSystemGetFileStatusFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<SyncFileSystemGetFileStatusesFunction>,
      SyncFileSystemGetFileStatusesFunction::static_function_name(),
      SyncFileSystemGetFileStatusesFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<SyncFileSystemGetServiceStatusFunction>,
      SyncFileSystemGetServiceStatusFunction::static_function_name(),
      SyncFileSystemGetServiceStatusFunction::static_histogram_value(),
    },
  };
  for (const auto& entry : kEntries) {
      registry->Register(entry);
  }
}

}  // namespace api
}  // namespace chrome_apps
