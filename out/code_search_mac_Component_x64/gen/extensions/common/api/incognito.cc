// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/incognito.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/incognito.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#include "extensions/common/api/incognito.h"

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
#include "tools/json_schema_compiler/manifest_parse_util.h"

#include <string_view>


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace incognito {
//
// Types
//

const char* ToString(IncognitoMode enum_param) {
  switch (enum_param) {
    case IncognitoMode::kSplit:
      return "split";
    case IncognitoMode::kSpanning:
      return "spanning";
    case IncognitoMode::kNotAllowed:
      return "not_allowed";
    case IncognitoMode::kNone:
      return "";
  }
  NOTREACHED();
}

IncognitoMode ParseIncognitoMode(std::string_view enum_string) {
  if (enum_string == "split")
    return IncognitoMode::kSplit;
  if (enum_string == "spanning")
    return IncognitoMode::kSpanning;
  if (enum_string == "not_allowed")
    return IncognitoMode::kNotAllowed;
  return IncognitoMode::kNone;
}

std::u16string GetIncognitoModeParseError(std::string_view enum_string) {
  return u"expected \"split\" or \"spanning\" or \"not_allowed\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Manifest Keys
//

ManifestKeys::ManifestKeys()
: incognito() {}

ManifestKeys::~ManifestKeys() = default;
ManifestKeys::ManifestKeys(ManifestKeys&& rhs) noexcept = default;
ManifestKeys& ManifestKeys::operator=(ManifestKeys&& rhs) noexcept = default;
// static
constexpr char ManifestKeys::kIncognito[];

//static
bool ManifestKeys::ParseFromDictionary(
const base::DictValue& root_dict, ManifestKeys& out, std::u16string& error) {

  std::vector<std::string_view> error_path_reversed;
  const base::DictValue& dict = root_dict;
  out.incognito = IncognitoMode();
  if (!::json_schema_compiler::manifest_parse_util::ParseEnumFromDictionary(dict, kIncognito, &ParseIncognitoMode, true, IncognitoMode(), out.incognito, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  return true;
}


}  // namespace incognito
}  // namespace api
}  // namespace extensions

