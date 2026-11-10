// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/public_suffix.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/public_suffix.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#ifndef EXTENSIONS_COMMON_API_PUBLIC_SUFFIX_H__
#define EXTENSIONS_COMMON_API_PUBLIC_SUFFIX_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include <string_view>


namespace extensions {
namespace api {
namespace public_suffix {

//
// Types
//

// The encoding to use for returned domains.
enum class DomainEncoding {
  kNone = 0,
  kPunycode,
  kDisplay,
  kMaxValue = kDisplay,
};


const char* ToString(DomainEncoding as_enum);
DomainEncoding ParseDomainEncoding(std::string_view as_string);
std::u16string GetDomainEncodingParseError(std::string_view as_string);

struct DomainOptions {
  DomainOptions();
  ~DomainOptions();
  DomainOptions(const DomainOptions&) = delete;
  DomainOptions& operator=(const DomainOptions&) = delete;
  DomainOptions(DomainOptions&& rhs) noexcept;
  DomainOptions& operator=(DomainOptions&& rhs) noexcept;

  // Populates a DomainOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DomainOptions& out);

  // Populates a DomainOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, DomainOptions& out);

  // Creates a deep copy of DomainOptions.
  DomainOptions Clone() const;

  // Creates a DomainOptions object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<DomainOptions> FromValue(const base::DictValue& value);

  // Creates a DomainOptions object from a base::Value, or nullopt on failure.
  static std::optional<DomainOptions> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisDomainOptions object.
  base::DictValue ToValue() const;

  // The encoding to use for the returned domain. Defaults to "punycode", but pass
  // "display" if displaying the domain to the user. Generally, "display" will use
  // Unicode, except in cases where that would be unsafe due to <a
  // href="https://www.unicode.org/reports/tr39/#Confusable_Detection"> "Unicode
  // confusables"</a>.
  DomainEncoding encoding;

  // Whether IP addresses may be returned as domains. Defaults to false. Note:
  // When allowed, IP addresses are returned without being looked up in the Public
  // Suffix List.
  std::optional<bool> allow_ip_address;

  // Whether known public suffixes may be returned as domains. Defaults to false.
  std::optional<bool> allow_plain_suffix;

  // Whether unknown TLDs should be considered as a public suffix. For example,
  // for non-public hostnames like <code>printer.internal-network</code>. Defaults
  // to false.
  std::optional<bool> allow_unknown_suffix;

};


}  // namespace public_suffix
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_PUBLIC_SUFFIX_H__
