// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITIONS IN
//   chrome/common/controlled_frame/api
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py --root=../../ --destdir=gen --namespace=controlled_frame::api::%(namespace)s --bundle-name=ControlledFrame --generator=cpp-bundle-schema --include-rules=chrome/common/extensions/api:extensions::api::%(namespace)s ../../chrome/common/controlled_frame/api/controlled_frame_internal.json

#include "chrome/common/controlled_frame/api/generated_schemas.h"

#include <algorithm>
#include <iterator>
#include <string_view>

#include "base/containers/fixed_flat_map.h"

namespace {
constexpr char kControlledFrameInternal[] = R"R({"namespace":"controlledFrameInternal","dependencies":["contextMenus"],"functions":[{"name":"contextMenusCreate","type":"function","returns":{"choices":[{"type":"integer"},{"type":"string"}]},"parameters":[{"type":"integer","name":"instanceId"},{"type":"object","name":"createProperties","properties":{"type":{"$ref":"contextMenus.ItemType","optional":true},"id":{"type":"string"},"title":{"type":"string","optional":true},"checked":{"type":"boolean","optional":true},"contexts":{"type":"array","items":{"$ref":"contextMenus.ContextType"},"minItems":1,"optional":true},"visible":{"type":"boolean","optional":true},"onclick":{"type":"function","optional":true,"parameters":[{"name":"info","$ref":"contextMenus.OnClickData"}]},"parentId":{"choices":[{"type":"integer"},{"type":"string"}],"optional":true},"documentUrlPatterns":{"type":"array","items":{"type":"string"},"optional":true},"targetUrlPatterns":{"type":"array","items":{"type":"string"},"optional":true},"enabled":{"type":"boolean","optional":true}}}],"returns_async":{"name":"callback","optional":true,"parameters":[],"does_not_support_promises":"Synchronous return and callback crbug.com/40154924"}},{"name":"contextMenusUpdate","type":"function","parameters":[{"type":"integer","name":"instanceId"},{"choices":[{"type":"integer"},{"type":"string"}],"name":"id"},{"type":"object","name":"updateProperties","properties":{"type":{"$ref":"contextMenus.ItemType","optional":true},"title":{"type":"string","optional":true},"checked":{"type":"boolean","optional":true},"contexts":{"type":"array","items":{"$ref":"contextMenus.ContextType"},"minItems":1,"optional":true},"visible":{"type":"boolean","optional":true},"onclick":{"type":"function","optional":true},"parentId":{"choices":[{"type":"integer"},{"type":"string"}],"optional":true},"documentUrlPatterns":{"type":"array","items":{"type":"string"},"optional":true},"targetUrlPatterns":{"type":"array","items":{"type":"string"},"optional":true},"enabled":{"type":"boolean","optional":true}}}],"returns_async":{"name":"callback","optional":true,"parameters":[]}},{"name":"setClientHintsEnabled","type":"function","parameters":[{"type":"integer","name":"instanceId"},{"type":"boolean","name":"enabled"}]}]})R";
}  // namespace

namespace controlled_frame {
namespace api {

// static
bool ControlledFrameGeneratedSchemas::IsGenerated(std::string_view name) {
  return !Get(name).empty();
}

// static
std::string_view ControlledFrameGeneratedSchemas::Get(std::string_view name) {
  static constexpr auto kSchemas = base::MakeFixedFlatMap<std::string_view, std::string_view>({
    {"controlledFrameInternal", kControlledFrameInternal},
  });
  auto it = kSchemas.find(name);
  return it != kSchemas.end() ? it->second : std::string_view();
}

}  // namespace api
}  // namespace controlled_frame
