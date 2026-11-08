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

#ifndef CHROME_COMMON_CONTROLLED_FRAME_API_GENERATED_API_H__
#define CHROME_COMMON_CONTROLLED_FRAME_API_GENERATED_API_H__

#include <string>

class ExtensionFunctionRegistry;

namespace controlled_frame {
namespace api {

class ControlledFrameGeneratedFunctionRegistry {
 public:
  static void RegisterAll(ExtensionFunctionRegistry* registry);
};

}  // namespace api
}  // namespace controlled_frame

#endif  // CHROME_COMMON_CONTROLLED_FRAME_API_GENERATED_API_H__
