// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/common/extensions/api/brave_talk.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/common/extensions/api/brave_talk.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=//brave/common/extensions/api:extensions::api::%(namespace)s

#ifndef BRAVE_COMMON_EXTENSIONS_API_BRAVE_TALK_H__
#define BRAVE_COMMON_EXTENSIONS_API_BRAVE_TALK_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace brave_talk {

//
// Functions
//

namespace IsSupported {

namespace Results {

base::ListValue Create(bool supported);
}  // namespace Results

}  // namespace IsSupported

}  // namespace brave_talk
}  // namespace api
}  // namespace extensions

#endif  // BRAVE_COMMON_EXTENSIONS_API_BRAVE_TALK_H__
