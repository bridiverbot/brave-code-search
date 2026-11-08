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

#include "brave/common/extensions/api/generated_schemas.h"

#include <algorithm>
#include <iterator>
#include <string_view>

#include "base/containers/fixed_flat_map.h"

namespace {
constexpr char kBraveTheme[] = R"R({"namespace":"braveTheme","functions":[{"name":"setBraveThemeType","type":"function","parameters":[{"name":"type","type":"string"}]}]})R";
constexpr char kWebDiscovery[] = R"R({"namespace":"webDiscovery","functions":[{"name":"retrieveBackupResults","type":"function","parameters":[{"name":"url","type":"string"}],"returns_async":{"name":"callback","parameters":[{"name":"result","type":"object","properties":{"responseCode":{"type":"integer"},"html":{"type":"string"}}}]}},{"name":"isWebDiscoveryExtensionEnabled","type":"function","parameters":[],"returns_async":{"name":"callback","parameters":[{"name":"enabled","type":"boolean"}]}}]})R";
constexpr char kBraveTalk[] = R"R({"namespace":"braveTalk","events":[],"functions":[{"name":"isSupported","type":"function","parameters":[],"returns_async":{"name":"callback","parameters":[{"name":"supported","type":"boolean"}],"does_not_support_promises":"Requires refactoring"}}],"types":[],"properties":{}})R";
}  // namespace

namespace extensions {
namespace api {

// static
bool BraveGeneratedSchemas::IsGenerated(std::string_view name) {
  return !Get(name).empty();
}

// static
std::string_view BraveGeneratedSchemas::Get(std::string_view name) {
  static constexpr auto kSchemas = base::MakeFixedFlatMap<std::string_view, std::string_view>({
    {"braveTalk", kBraveTalk},
    {"braveTheme", kBraveTheme},
    {"webDiscovery", kWebDiscovery},
  });
  auto it = kSchemas.find(name);
  return it != kSchemas.end() ? it->second : std::string_view();
}

}  // namespace api
}  // namespace extensions
