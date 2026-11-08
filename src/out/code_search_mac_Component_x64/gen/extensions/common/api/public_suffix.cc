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

#include "extensions/common/api/public_suffix.h"

#include <memory>
#include <optional>
#include <ostream>
#include <string>
#include <string_view>
#include <utility>
#include <vector>

#include "base/check.h"
#include "base/check_op.h"
#include "base/notreached.h"
#include "base/strings/string_number_conversions.h"
#include "base/strings/utf_string_conversions.h"
#include "base/values.h"
#include "tools/json_schema_compiler/util.h"
#include <string_view>


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace public_suffix {
//
// Types
//

const char* ToString(DomainEncoding enum_param) {
  switch (enum_param) {
    case DomainEncoding::kPunycode:
      return "punycode";
    case DomainEncoding::kDisplay:
      return "display";
    case DomainEncoding::kNone:
      return "";
  }
  NOTREACHED();
}

DomainEncoding ParseDomainEncoding(std::string_view enum_string) {
  if (enum_string == "punycode")
    return DomainEncoding::kPunycode;
  if (enum_string == "display")
    return DomainEncoding::kDisplay;
  return DomainEncoding::kNone;
}

std::u16string GetDomainEncodingParseError(std::string_view enum_string) {
  return u"expected \"punycode\" or \"display\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


DomainOptions::DomainOptions()
: encoding() {}

DomainOptions::~DomainOptions() = default;
DomainOptions::DomainOptions(DomainOptions&& rhs) noexcept = default;
DomainOptions& DomainOptions::operator=(DomainOptions&& rhs) noexcept = default;
DomainOptions DomainOptions::Clone() const {
  DomainOptions out;
  out.encoding = encoding;
  out.allow_ip_address = allow_ip_address;
  out.allow_plain_suffix = allow_plain_suffix;
  out.allow_unknown_suffix = allow_unknown_suffix;
  return out;
}

// static
bool DomainOptions::Populate(
    const base::DictValue& dict, DomainOptions& out) {
  out.encoding = DomainEncoding();
  const base::Value* encoding_value = dict.Find("encoding");
  if (encoding_value) {
    {
      const std::string* domain_encoding_as_string = (*encoding_value).GetIfString();
      if (!domain_encoding_as_string) {
        return false;
      }
      out.encoding = ParseDomainEncoding(*domain_encoding_as_string);
      if (out.encoding == DomainEncoding()) {
        return false;
      }
    }
    } else {
    out.encoding = DomainEncoding();
  }

  const base::Value* allow_ip_address_value = dict.Find("allowIPAddress");
  if (allow_ip_address_value) {
    {
      auto temp = (*allow_ip_address_value).GetIfBool();
      if (!temp.has_value()) {
        out.allow_ip_address = std::nullopt;
        return false;
      }
      out.allow_ip_address = *temp;
    }
  }

  const base::Value* allow_plain_suffix_value = dict.Find("allowPlainSuffix");
  if (allow_plain_suffix_value) {
    {
      auto temp = (*allow_plain_suffix_value).GetIfBool();
      if (!temp.has_value()) {
        out.allow_plain_suffix = std::nullopt;
        return false;
      }
      out.allow_plain_suffix = *temp;
    }
  }

  const base::Value* allow_unknown_suffix_value = dict.Find("allowUnknownSuffix");
  if (allow_unknown_suffix_value) {
    {
      auto temp = (*allow_unknown_suffix_value).GetIfBool();
      if (!temp.has_value()) {
        out.allow_unknown_suffix = std::nullopt;
        return false;
      }
      out.allow_unknown_suffix = *temp;
    }
  }

  return true;
}

// static
bool DomainOptions::Populate(
    const base::Value& value, DomainOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DomainOptions> DomainOptions::FromValue(const base::DictValue& value) {
  DomainOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DomainOptions> DomainOptions::FromValue(const base::Value& value) {
  DomainOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue DomainOptions::ToValue() const {
  base::DictValue to_value_result;

  if (this->encoding != DomainEncoding()) {
    to_value_result.Set("encoding", public_suffix::ToString(this->encoding));

  }
  if (this->allow_ip_address) {
    to_value_result.Set("allowIPAddress", *this->allow_ip_address);

  }
  if (this->allow_plain_suffix) {
    to_value_result.Set("allowPlainSuffix", *this->allow_plain_suffix);

  }
  if (this->allow_unknown_suffix) {
    to_value_result.Set("allowUnknownSuffix", *this->allow_unknown_suffix);

  }

  return to_value_result;
}



}  // namespace public_suffix
}  // namespace api
}  // namespace extensions

