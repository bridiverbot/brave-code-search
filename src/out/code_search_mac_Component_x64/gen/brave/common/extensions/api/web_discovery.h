// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/common/extensions/api/web_discovery.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/common/extensions/api/web_discovery.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=//brave/common/extensions/api:extensions::api::%(namespace)s

#ifndef BRAVE_COMMON_EXTENSIONS_API_WEB_DISCOVERY_H__
#define BRAVE_COMMON_EXTENSIONS_API_WEB_DISCOVERY_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace web_discovery {

//
// Functions
//

namespace RetrieveBackupResults {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string url;


 private:
  Params();
};

namespace Results {

struct Result {
  Result();
  ~Result();
  Result(const Result&) = delete;
  Result& operator=(const Result&) = delete;
  Result(Result&& rhs) noexcept;
  Result& operator=(Result&& rhs) noexcept;

  // Returns a new base::DictValue representing the serialized form of
  // thisResult object.
  base::DictValue ToValue() const;

  // The last response code while fetching SERP
  int response_code;

  // The HTML contents of the SERP
  std::string html;

};


base::ListValue Create(const Result& result);
}  // namespace Results

}  // namespace RetrieveBackupResults

namespace IsWebDiscoveryExtensionEnabled {

namespace Results {

base::ListValue Create(bool enabled);
}  // namespace Results

}  // namespace IsWebDiscoveryExtensionEnabled

}  // namespace web_discovery
}  // namespace api
}  // namespace extensions

#endif  // BRAVE_COMMON_EXTENSIONS_API_WEB_DISCOVERY_H__
