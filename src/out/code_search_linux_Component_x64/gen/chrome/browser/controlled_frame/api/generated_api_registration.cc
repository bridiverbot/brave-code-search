// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITIONS IN
//   chrome/common/controlled_frame/api
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py --root=../../ --destdir=gen --namespace=controlled_frame::api::%(namespace)s --bundle-name=ControlledFrame --generator=cpp-bundle-registration --impl-dir=chrome/browser/controlled_frame/api --include-rules=chrome/common/extensions/api:extensions::api::%(namespace)s ../../chrome/common/controlled_frame/api/controlled_frame_internal.json

#include "chrome/browser/controlled_frame/api/generated_api_registration.h"

#include "build/android_buildflags.h"
#include "build/build_config.h"

#include "chrome/browser/controlled_frame/api/controlled_frame_internal_api.h"

#include "extensions/browser/extension_function_registry.h"

namespace controlled_frame {
namespace api {

// static
void ControlledFrameGeneratedFunctionRegistry::RegisterAll(ExtensionFunctionRegistry* registry) {
  constexpr ExtensionFunctionRegistry::FactoryEntry kEntries[] = {
    {
      &NewExtensionFunction<ControlledFrameInternalContextMenusCreateFunction>,
      ControlledFrameInternalContextMenusCreateFunction::static_function_name(),
      ControlledFrameInternalContextMenusCreateFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<ControlledFrameInternalContextMenusUpdateFunction>,
      ControlledFrameInternalContextMenusUpdateFunction::static_function_name(),
      ControlledFrameInternalContextMenusUpdateFunction::static_histogram_value(),
    },
    {
      &NewExtensionFunction<ControlledFrameInternalSetClientHintsEnabledFunction>,
      ControlledFrameInternalSetClientHintsEnabledFunction::static_function_name(),
      ControlledFrameInternalSetClientHintsEnabledFunction::static_histogram_value(),
    },
  };
  for (const auto& entry : kEntries) {
      registry->Register(entry);
  }
}

}  // namespace api
}  // namespace controlled_frame
