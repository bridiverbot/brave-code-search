// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/protocol_handlers.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/protocol_handlers.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#include "extensions/common/api/protocol_handlers.h"

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
namespace protocol_handlers {
//
// Types
//

ProtocolHandler::ProtocolHandler()
 {}

ProtocolHandler::~ProtocolHandler() = default;
ProtocolHandler::ProtocolHandler(ProtocolHandler&& rhs) noexcept = default;
ProtocolHandler& ProtocolHandler::operator=(ProtocolHandler&& rhs) noexcept = default;
// static
constexpr char ProtocolHandler::kProtocol[];
// static
constexpr char ProtocolHandler::kName[];
// static
constexpr char ProtocolHandler::kUriTemplate[];

ProtocolHandler ProtocolHandler::Clone() const {
  ProtocolHandler out;
  out.protocol = protocol;
  out.name = name;
  out.uri_template = uri_template;
  return out;
}

// static
bool ProtocolHandler::Populate(
    const base::DictValue& dict, ProtocolHandler& out, std::u16string& error) {
  const base::Value* protocol_value = dict.Find("protocol");
  if (!protocol_value) {
    DCHECK(error.empty());
    error = u"'protocol' is required";
    return false;
  }
  {
    auto* temp = (*protocol_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'protocol': expected protocol, got " + UTF8ToUTF16(base::Value::GetTypeName((*protocol_value).type()));
      return false;
    }
    out.protocol = *temp;
  }

  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    DCHECK(error.empty());
    error = u"'name' is required";
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'name': expected name, got " + UTF8ToUTF16(base::Value::GetTypeName((*name_value).type()));
      return false;
    }
    out.name = *temp;
  }

  const base::Value* uri_template_value = dict.Find("uriTemplate");
  if (!uri_template_value) {
    DCHECK(error.empty());
    error = u"'uriTemplate' is required";
    return false;
  }
  {
    auto* temp = (*uri_template_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'uriTemplate': expected uriTemplate, got " + UTF8ToUTF16(base::Value::GetTypeName((*uri_template_value).type()));
      return false;
    }
    out.uri_template = *temp;
  }

  return true;
}

// static
bool ProtocolHandler::Populate(
    const base::Value& value, ProtocolHandler& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<ProtocolHandler, std::u16string> ProtocolHandler::FromValue(const base::DictValue& value) {
  std::u16string error;
  ProtocolHandler out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<ProtocolHandler, std::u16string> ProtocolHandler::FromValue(const base::Value& value) {
  std::u16string error;
  ProtocolHandler out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::DictValue ProtocolHandler::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("protocol", this->protocol);

  to_value_result.Set("name", this->name);

  to_value_result.Set("uriTemplate", this->uri_template);


  return to_value_result;
}

//static
bool ProtocolHandler::ParseFromDictionary(
const base::DictValue& root_dict, std::string_view key, ProtocolHandler& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::DictValue& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kProtocol, out.protocol, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kName, out.name, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kUriTemplate, out.uri_template, error, error_path_reversed)) {
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
constexpr char ManifestKeys::kProtocolHandlers[];

//static
bool ManifestKeys::ParseFromDictionary(
const base::DictValue& root_dict, ManifestKeys& out, std::u16string& error) {

  std::vector<std::string_view> error_path_reversed;
  const base::DictValue& dict = root_dict;
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kProtocolHandlers, out.protocol_handlers, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  return true;
}


}  // namespace protocol_handlers
}  // namespace api
}  // namespace extensions

