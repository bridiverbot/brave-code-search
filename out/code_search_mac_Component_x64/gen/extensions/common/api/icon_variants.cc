// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/icon_variants.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/icon_variants.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#include "extensions/common/api/icon_variants.h"

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
#include "base/types/expected.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace icon_variants {
//
// Types
//

const char* ToString(ColorScheme enum_param) {
  switch (enum_param) {
    case ColorScheme::kDark:
      return "dark";
    case ColorScheme::kLight:
      return "light";
    case ColorScheme::kNone:
      return "";
  }
  NOTREACHED();
}

ColorScheme ParseColorScheme(std::string_view enum_string) {
  if (enum_string == "dark")
    return ColorScheme::kDark;
  if (enum_string == "light")
    return ColorScheme::kLight;
  return ColorScheme::kNone;
}

std::u16string GetColorSchemeParseError(std::string_view enum_string) {
  return u"expected \"dark\" or \"light\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


IconVariant::IconVariant()
 {}

IconVariant::~IconVariant() = default;
IconVariant::IconVariant(IconVariant&& rhs) noexcept = default;
IconVariant& IconVariant::operator=(IconVariant&& rhs) noexcept = default;
// static
constexpr char IconVariant::kAny[];
// static
constexpr char IconVariant::kColorSchemes[];

IconVariant IconVariant::Clone() const {
  IconVariant out;
  out.any = any;
  out.color_schemes = color_schemes;
  return out;
}

// static
bool IconVariant::Populate(
    const base::DictValue& dict, IconVariant& out, std::u16string& error) {
  const base::Value* any_value = dict.Find("any");
  if (any_value) {
    {
      auto* temp = (*any_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'any': expected any, got " + UTF8ToUTF16(base::Value::GetTypeName((*any_value).type()));
        out.any = std::nullopt;
        return false;
      }
      out.any = *temp;
    }
  }

  const base::Value* color_schemes_value = dict.Find("color_schemes");
  if (color_schemes_value) {
    {
      if (!(*color_schemes_value).is_list()) {
        DCHECK(error.empty());
        error = u"'color_schemes': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*color_schemes_value).type()));
        return false;
      }
      else {
        out.color_schemes.emplace();
        for (const auto& it : ((*color_schemes_value)).GetList()) {
          ColorScheme tmp;
          const std::string* color_scheme_as_string = (it).GetIfString();
          if (!color_scheme_as_string) {
            DCHECK(error.empty());
            error = u"'ColorScheme': expected string, got " + UTF8ToUTF16(base::Value::GetTypeName((it).type()));
            return false;
          }
          tmp = ParseColorScheme(*color_scheme_as_string);
          if (tmp == ColorScheme()) {
            DCHECK(error.empty());
            error = u"'ColorScheme': " + GetColorSchemeParseError(*color_scheme_as_string);
            return false;
          }
          out.color_schemes->push_back(tmp);
        }
      }
    }
  }

  return true;
}

// static
bool IconVariant::Populate(
    const base::Value& value, IconVariant& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<IconVariant, std::u16string> IconVariant::FromValue(const base::DictValue& value) {
  std::u16string error;
  IconVariant out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<IconVariant, std::u16string> IconVariant::FromValue(const base::Value& value) {
  std::u16string error;
  IconVariant out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::DictValue IconVariant::ToValue() const {
  base::DictValue to_value_result;

  if (this->any) {
    to_value_result.Set("any", *this->any);

  }
  if (this->color_schemes) {
    {
      std::vector<std::string> color_schemes_list;
      for (const auto& it : *(this->color_schemes)) {
        color_schemes_list.emplace_back(icon_variants::ToString(it));
      }
      to_value_result.Set("color_schemes", json_schema_compiler::util::CreateValueFromArray(color_schemes_list));
    }

  }

  return to_value_result;
}

//static
bool IconVariant::ParseFromDictionary(
const base::DictValue& root_dict, std::string_view key, IconVariant& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::DictValue& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kAny, out.any, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseEnumArrayFromDictionary(dict, kColorSchemes, &ParseColorScheme, ColorScheme(), out.color_schemes, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  return true;
}



//
// Manifest Keys
//

ManifestKeys::ManifestKeys()
 {}

ManifestKeys::~ManifestKeys() = default;
ManifestKeys::ManifestKeys(ManifestKeys&& rhs) noexcept = default;
ManifestKeys& ManifestKeys::operator=(ManifestKeys&& rhs) noexcept = default;
// static
constexpr char ManifestKeys::kIconVariants[];

//static
bool ManifestKeys::ParseFromDictionary(
const base::DictValue& root_dict, ManifestKeys& out, std::u16string& error) {

  std::vector<std::string_view> error_path_reversed;
  const base::DictValue& dict = root_dict;
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kIconVariants, out.icon_variants, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  return true;
}


}  // namespace icon_variants
}  // namespace api
}  // namespace extensions

