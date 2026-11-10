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

#include "brave/browser/extensions/api/generated_api_registration.h"

#include "build/android_buildflags.h"
#include "build/build_config.h"

#include "brave/browser/extensions/api/brave_theme_api.h"
#include "brave/browser/extensions/api/web_discovery_api.h"
#include "brave/browser/extensions/api/brave_talk_api.h"

#include "extensions/browser/extension_function_registry.h"

namespace extensions {
namespace api {

// static
void BraveGeneratedFunctionRegistry::RegisterAll(ExtensionFunctionRegistry* registry) {
  constexpr ExtensionFunctionRegistry::FactoryEntry kEntries[] = {
    {
      &NewExtensionFunction<BraveThemeSetBraveThemeTypeFunction>,
      BraveThemeSetBraveThemeTypeFunction::static_function_name(),
      BraveThemeSetBraveThemeTypeFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<WebDiscoveryRetrieveBackupResultsFunction>,
      WebDiscoveryRetrieveBackupResultsFunction::static_function_name(),
      WebDiscoveryRetrieveBackupResultsFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<WebDiscoveryIsWebDiscoveryExtensionEnabledFunction>,
      WebDiscoveryIsWebDiscoveryExtensionEnabledFunction::static_function_name(),
      WebDiscoveryIsWebDiscoveryExtensionEnabledFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<BraveTalkIsSupportedFunction>,
      BraveTalkIsSupportedFunction::static_function_name(),
      BraveTalkIsSupportedFunction::static_histogram_value(),
    },
  };
  for (const auto& entry : kEntries) {
      registry->Register(entry);
  }
}

}  // namespace api
}  // namespace extensions
