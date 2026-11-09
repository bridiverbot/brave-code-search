// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/mime_handlers.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/mime_handlers.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#include "extensions/common/api/mime_handlers.h"

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
namespace mime_handlers {
//
// Types
//

MimeHandlerMimeTypeConfig::MimeHandlerMimeTypeConfig()
 {}

MimeHandlerMimeTypeConfig::~MimeHandlerMimeTypeConfig() = default;
MimeHandlerMimeTypeConfig::MimeHandlerMimeTypeConfig(MimeHandlerMimeTypeConfig&& rhs) noexcept = default;
MimeHandlerMimeTypeConfig& MimeHandlerMimeTypeConfig::operator=(MimeHandlerMimeTypeConfig&& rhs) noexcept = default;
MimeHandlerMimeTypeConfig MimeHandlerMimeTypeConfig::Clone() const {
  MimeHandlerMimeTypeConfig out;
  out.handler_url = handler_url;
  out.can_embed = can_embed;
  out.enabled = enabled;
  return out;
}

// static
bool MimeHandlerMimeTypeConfig::Populate(
    const base::DictValue& dict, MimeHandlerMimeTypeConfig& out, std::u16string& error) {
  const base::Value* handler_url_value = dict.Find("handler_url");
  if (!handler_url_value) {
    DCHECK(error.empty());
    error = u"'handler_url' is required";
    return false;
  }
  {
    auto* temp = (*handler_url_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'handler_url': expected handler_url, got " + UTF8ToUTF16(base::Value::GetTypeName((*handler_url_value).type()));
      return false;
    }
    out.handler_url = *temp;
  }

  const base::Value* can_embed_value = dict.Find("can_embed");
  if (can_embed_value) {
    {
      auto temp = (*can_embed_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'can_embed': expected can_embed, got " + UTF8ToUTF16(base::Value::GetTypeName((*can_embed_value).type()));
        out.can_embed = std::nullopt;
        return false;
      }
      out.can_embed = *temp;
    }
  }

  const base::Value* enabled_value = dict.Find("enabled");
  if (enabled_value) {
    {
      auto temp = (*enabled_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'enabled': expected enabled, got " + UTF8ToUTF16(base::Value::GetTypeName((*enabled_value).type()));
        out.enabled = std::nullopt;
        return false;
      }
      out.enabled = *temp;
    }
  }

  return true;
}

// static
bool MimeHandlerMimeTypeConfig::Populate(
    const base::Value& value, MimeHandlerMimeTypeConfig& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<MimeHandlerMimeTypeConfig, std::u16string> MimeHandlerMimeTypeConfig::FromValue(const base::DictValue& value) {
  std::u16string error;
  MimeHandlerMimeTypeConfig out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<MimeHandlerMimeTypeConfig, std::u16string> MimeHandlerMimeTypeConfig::FromValue(const base::Value& value) {
  std::u16string error;
  MimeHandlerMimeTypeConfig out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::DictValue MimeHandlerMimeTypeConfig::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("handler_url", this->handler_url);

  if (this->can_embed) {
    to_value_result.Set("can_embed", *this->can_embed);

  }
  if (this->enabled) {
    to_value_result.Set("enabled", *this->enabled);

  }

  return to_value_result;
}



//
// Manifest Keys
//

ManifestKeys::MimeTypesHandler::MimeTypesHandler()
 {}

ManifestKeys::MimeTypesHandler::~MimeTypesHandler() = default;
ManifestKeys::MimeTypesHandler::MimeTypesHandler(MimeTypesHandler&& rhs) noexcept = default;
ManifestKeys::MimeTypesHandler& ManifestKeys::MimeTypesHandler::operator=(MimeTypesHandler&& rhs) noexcept = default;
//static
bool ManifestKeys::MimeTypesHandler::ParseFromDictionary(
const base::DictValue& root_dict, std::string_view key, MimeTypesHandler& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;

  return true;
}



ManifestKeys::ManifestKeys()
 {}

ManifestKeys::~ManifestKeys() = default;
ManifestKeys::ManifestKeys(ManifestKeys&& rhs) noexcept = default;
ManifestKeys& ManifestKeys::operator=(ManifestKeys&& rhs) noexcept = default;
// static
constexpr char ManifestKeys::kMimeTypesHandler[];

//static
bool ManifestKeys::ParseFromDictionary(
const base::DictValue& root_dict, ManifestKeys& out, std::u16string& error) {

  std::vector<std::string_view> error_path_reversed;
  const base::DictValue& dict = root_dict;
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kMimeTypesHandler, out.mime_types_handler, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  return true;
}


}  // namespace mime_handlers
}  // namespace api
}  // namespace extensions

