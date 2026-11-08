// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITIONS IN
//   chrome/common/apps/platform_apps/api
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py --root=../../ --destdir=gen --namespace=chrome_apps::api::%(namespace)s --bundle-name=ChromeApps --generator=cpp-bundle-schema --include-rules= ../../chrome/common/apps/platform_apps/api/sync_file_system.idl

#include "chrome/common/apps/platform_apps/api/generated_schemas.h"

#include <algorithm>
#include <iterator>
#include <string_view>

#include "base/containers/fixed_flat_map.h"

namespace {
constexpr char kSyncFileSystem[] = R"R({"namespace":"syncFileSystem","types":[{"id":"syncFileSystem.SyncAction","type":"string","enum":[{"name":"added"},{"name":"updated"},{"name":"deleted"}]},{"id":"syncFileSystem.ServiceStatus","type":"string","enum":[{"name":"initializing"},{"name":"running"},{"name":"authentication_required"},{"name":"temporary_unavailable"},{"name":"disabled"}]},{"id":"syncFileSystem.FileStatus","type":"string","enum":[{"name":"synced"},{"name":"pending"},{"name":"conflicting"}]},{"id":"syncFileSystem.SyncDirection","type":"string","enum":[{"name":"local_to_remote"},{"name":"remote_to_local"}]},{"id":"syncFileSystem.ConflictResolutionPolicy","type":"string","enum":[{"name":"last_write_win"},{"name":"manual"}]},{"id":"syncFileSystem.FileInfo","properties":{"fileEntry":{"name":"fileEntry","type":"object","additionalProperties":{"type":"any"},"isInstanceOf":"Entry"},"status":{"name":"status","$ref":"syncFileSystem.FileStatus"},"action":{"optional":true,"name":"action","$ref":"syncFileSystem.SyncAction"},"direction":{"optional":true,"name":"direction","$ref":"syncFileSystem.SyncDirection"}},"type":"object"},{"id":"syncFileSystem.FileStatusInfo","properties":{"fileEntry":{"name":"fileEntry","type":"object","additionalProperties":{"type":"any"},"isInstanceOf":"Entry"},"status":{"name":"status","$ref":"syncFileSystem.FileStatus"},"error":{"optional":true,"name":"error","type":"string"}},"type":"object"},{"id":"syncFileSystem.StorageInfo","properties":{"usageBytes":{"name":"usageBytes","type":"integer"},"quotaBytes":{"name":"quotaBytes","type":"integer"}},"type":"object"},{"id":"syncFileSystem.ServiceInfo","properties":{"state":{"name":"state","$ref":"syncFileSystem.ServiceStatus"},"description":{"name":"description","type":"string"}},"type":"object"}],"functions":[{"parameters":[],"returns_async":{"name":"callback","parameters":[{"name":"fileSystem","type":"object","additionalProperties":{"type":"any"},"isInstanceOf":"DOMFileSystem"}]},"name":"requestFileSystem","type":"function"},{"parameters":[{"name":"policy","$ref":"syncFileSystem.ConflictResolutionPolicy"}],"returns_async":{"name":"callback","parameters":[]},"name":"setConflictResolutionPolicy","type":"function"},{"parameters":[],"returns_async":{"name":"callback","parameters":[{"name":"policy","$ref":"syncFileSystem.ConflictResolutionPolicy"}]},"name":"getConflictResolutionPolicy","type":"function"},{"parameters":[{"name":"fileSystem","type":"object","additionalProperties":{"type":"any"},"isInstanceOf":"DOMFileSystem"}],"returns_async":{"name":"callback","parameters":[{"name":"info","$ref":"syncFileSystem.StorageInfo"}]},"name":"getUsageAndQuota","type":"function"},{"parameters":[{"name":"fileEntry","type":"object","additionalProperties":{"type":"any"},"isInstanceOf":"Entry"}],"returns_async":{"name":"callback","parameters":[{"name":"status","$ref":"syncFileSystem.FileStatus"}]},"name":"getFileStatus","type":"function"},{"parameters":[{"name":"fileEntries","type":"array","items":{"type":"object","additionalProperties":{"type":"any"}}}],"returns_async":{"name":"callback","parameters":[{"name":"status","type":"array","items":{"$ref":"syncFileSystem.FileStatusInfo"}}]},"name":"getFileStatuses","type":"function"},{"parameters":[],"returns_async":{"name":"callback","parameters":[{"name":"status","$ref":"syncFileSystem.ServiceStatus"}]},"name":"getServiceStatus","type":"function"}],"properties":{},"events":[{"parameters":[{"name":"detail","$ref":"syncFileSystem.ServiceInfo"}],"name":"onServiceStatusChanged","type":"function"},{"parameters":[{"name":"detail","$ref":"syncFileSystem.FileInfo"}],"name":"onFileStatusChanged","type":"function"}],"platforms":null,"deprecated":null})R";
}  // namespace

namespace chrome_apps {
namespace api {

// static
bool ChromeAppsGeneratedSchemas::IsGenerated(std::string_view name) {
  return !Get(name).empty();
}

// static
std::string_view ChromeAppsGeneratedSchemas::Get(std::string_view name) {
  static constexpr auto kSchemas = base::MakeFixedFlatMap<std::string_view, std::string_view>({
    {"syncFileSystem", kSyncFileSystem},
  });
  auto it = kSchemas.find(name);
  return it != kSchemas.end() ? it->second : std::string_view();
}

}  // namespace api
}  // namespace chrome_apps
