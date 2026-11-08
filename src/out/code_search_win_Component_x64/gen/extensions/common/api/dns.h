// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/dns.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/dns.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#ifndef EXTENSIONS_COMMON_API_DNS_H__
#define EXTENSIONS_COMMON_API_DNS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace dns {

//
// Types
//

struct ResolveCallbackResolveInfo {
  ResolveCallbackResolveInfo();
  ~ResolveCallbackResolveInfo();
  ResolveCallbackResolveInfo(const ResolveCallbackResolveInfo&) = delete;
  ResolveCallbackResolveInfo& operator=(const ResolveCallbackResolveInfo&) = delete;
  ResolveCallbackResolveInfo(ResolveCallbackResolveInfo&& rhs) noexcept;
  ResolveCallbackResolveInfo& operator=(ResolveCallbackResolveInfo&& rhs) noexcept;

  // Populates a ResolveCallbackResolveInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ResolveCallbackResolveInfo& out);

  // Populates a ResolveCallbackResolveInfo object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ResolveCallbackResolveInfo& out);

  // Creates a deep copy of ResolveCallbackResolveInfo.
  ResolveCallbackResolveInfo Clone() const;

  // Creates a ResolveCallbackResolveInfo object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<ResolveCallbackResolveInfo> FromValue(const base::DictValue& value);

  // Creates a ResolveCallbackResolveInfo object from a base::Value, or nullopt
  // on failure.
  static std::optional<ResolveCallbackResolveInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisResolveCallbackResolveInfo object.
  base::DictValue ToValue() const;

  // The result code. Zero indicates success.
  int result_code;

  // A string representing the IP address literal. Supplied only if resultCode
  // indicates success.
  std::optional<std::string> address;

};


//
// Functions
//

namespace Resolve {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The hostname to resolve.
  std::string hostname;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const ResolveCallbackResolveInfo& resolve_info);
}  // namespace Results

}  // namespace Resolve

}  // namespace dns
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_DNS_H__
