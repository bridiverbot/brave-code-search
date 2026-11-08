// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/common/extensions/api/brave_theme.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/common/extensions/api/brave_theme.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=//brave/common/extensions/api:extensions::api::%(namespace)s

#ifndef BRAVE_COMMON_EXTENSIONS_API_BRAVE_THEME_H__
#define BRAVE_COMMON_EXTENSIONS_API_BRAVE_THEME_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace brave_theme {

//
// Functions
//

namespace SetBraveThemeType {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // current theme type (Dark or Light)
  std::string type;


 private:
  Params();
};

}  // namespace SetBraveThemeType

}  // namespace brave_theme
}  // namespace api
}  // namespace extensions

#endif  // BRAVE_COMMON_EXTENSIONS_API_BRAVE_THEME_H__
