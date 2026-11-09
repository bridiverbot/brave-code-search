// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/mime_handler.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/mime_handler.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#include "extensions/common/api/mime_handler.h"

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

using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace mime_handler {
//
// Types
//

StreamInfo::ResponseHeaders::ResponseHeaders()
 {}

StreamInfo::ResponseHeaders::~ResponseHeaders() = default;
StreamInfo::ResponseHeaders::ResponseHeaders(ResponseHeaders&& rhs) noexcept = default;
StreamInfo::ResponseHeaders& StreamInfo::ResponseHeaders::operator=(ResponseHeaders&& rhs) noexcept = default;
StreamInfo::ResponseHeaders StreamInfo::ResponseHeaders::Clone() const {
  ResponseHeaders out;
  out.additional_properties = additional_properties.Clone();
  return out;
}

// static
bool StreamInfo::ResponseHeaders::Populate(
    const base::DictValue& dict, ResponseHeaders& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool StreamInfo::ResponseHeaders::Populate(
    const base::Value& value, ResponseHeaders& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<StreamInfo::ResponseHeaders> StreamInfo::ResponseHeaders::FromValue(const base::DictValue& value) {
  ResponseHeaders out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StreamInfo::ResponseHeaders> StreamInfo::ResponseHeaders::FromValue(const base::Value& value) {
  ResponseHeaders out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue StreamInfo::ResponseHeaders::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



StreamInfo::StreamInfo()
: tab_id(0),
embedded(false) {}

StreamInfo::~StreamInfo() = default;
StreamInfo::StreamInfo(StreamInfo&& rhs) noexcept = default;
StreamInfo& StreamInfo::operator=(StreamInfo&& rhs) noexcept = default;
StreamInfo StreamInfo::Clone() const {
  StreamInfo out;
  out.mime_type = mime_type;
  out.original_url = original_url;
  out.stream_url = stream_url;
  out.tab_id = tab_id;
  out.response_headers = response_headers.Clone();
  out.embedded = embedded;
  return out;
}

// static
bool StreamInfo::Populate(
    const base::DictValue& dict, StreamInfo& out) {
  const base::Value* mime_type_value = dict.Find("mimeType");
  if (!mime_type_value) {
    return false;
  }
  {
    auto* temp = (*mime_type_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.mime_type = *temp;
  }

  const base::Value* original_url_value = dict.Find("originalUrl");
  if (!original_url_value) {
    return false;
  }
  {
    auto* temp = (*original_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.original_url = *temp;
  }

  const base::Value* stream_url_value = dict.Find("streamUrl");
  if (!stream_url_value) {
    return false;
  }
  {
    auto* temp = (*stream_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.stream_url = *temp;
  }

  const base::Value* tab_id_value = dict.Find("tabId");
  if (!tab_id_value) {
    return false;
  }
  {
    auto temp = (*tab_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.tab_id = *temp;
  }

  const base::Value* response_headers_value = dict.Find("responseHeaders");
  if (!response_headers_value) {
    return false;
  }
  {
    if (!(*response_headers_value).is_dict()) {
      return false;
    }
    if (!ResponseHeaders::Populate((*response_headers_value).GetDict(), out.response_headers)) {
      return false;
    }
  }

  const base::Value* embedded_value = dict.Find("embedded");
  if (!embedded_value) {
    return false;
  }
  {
    auto temp = (*embedded_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.embedded = *temp;
  }

  return true;
}

// static
bool StreamInfo::Populate(
    const base::Value& value, StreamInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<StreamInfo> StreamInfo::FromValue(const base::DictValue& value) {
  StreamInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StreamInfo> StreamInfo::FromValue(const base::Value& value) {
  StreamInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue StreamInfo::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("mimeType", this->mime_type);

  to_value_result.Set("originalUrl", this->original_url);

  to_value_result.Set("streamUrl", this->stream_url);

  to_value_result.Set("tabId", this->tab_id);

  to_value_result.Set("responseHeaders", (this->response_headers).ToValue());

  to_value_result.Set("embedded", this->embedded);


  return to_value_result;
}


MimeHandlerOptions::MimeHandlerOptions()
 {}

MimeHandlerOptions::~MimeHandlerOptions() = default;
MimeHandlerOptions::MimeHandlerOptions(MimeHandlerOptions&& rhs) noexcept = default;
MimeHandlerOptions& MimeHandlerOptions::operator=(MimeHandlerOptions&& rhs) noexcept = default;
MimeHandlerOptions MimeHandlerOptions::Clone() const {
  MimeHandlerOptions out;
  out.enabled = enabled;
  out.can_embed = can_embed;
  return out;
}

// static
bool MimeHandlerOptions::Populate(
    const base::DictValue& dict, MimeHandlerOptions& out) {
  const base::Value* enabled_value = dict.Find("enabled");
  if (enabled_value) {
    {
      auto temp = (*enabled_value).GetIfBool();
      if (!temp.has_value()) {
        out.enabled = std::nullopt;
        return false;
      }
      out.enabled = *temp;
    }
  }

  const base::Value* can_embed_value = dict.Find("canEmbed");
  if (can_embed_value) {
    {
      auto temp = (*can_embed_value).GetIfBool();
      if (!temp.has_value()) {
        out.can_embed = std::nullopt;
        return false;
      }
      out.can_embed = *temp;
    }
  }

  return true;
}

// static
bool MimeHandlerOptions::Populate(
    const base::Value& value, MimeHandlerOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MimeHandlerOptions> MimeHandlerOptions::FromValue(const base::DictValue& value) {
  MimeHandlerOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MimeHandlerOptions> MimeHandlerOptions::FromValue(const base::Value& value) {
  MimeHandlerOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue MimeHandlerOptions::ToValue() const {
  base::DictValue to_value_result;

  if (this->enabled) {
    to_value_result.Set("enabled", *this->enabled);

  }
  if (this->can_embed) {
    to_value_result.Set("canEmbed", *this->can_embed);

  }

  return to_value_result;
}



//
// Functions
//

namespace GetStreamInfo {

base::ListValue Results::Create(const StreamInfo& info) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace GetStreamInfo

namespace AbortAndFallbackToNativeHandler {

base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace AbortAndFallbackToNativeHandler

namespace SetMimeHandlerOptions {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& mime_type_value = args[0];
    {
      auto* temp = mime_type_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.mime_type = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& options_value = args[1];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      if (!MimeHandlerOptions::Populate(options_value.GetDict(), params.options)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace SetMimeHandlerOptions

namespace GetMimeHandlerOptions {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& mime_type_value = args[0];
    {
      auto* temp = mime_type_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.mime_type = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const MimeHandlerOptions& options) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((options).ToValue());

  return create_results;
}
}  // namespace GetMimeHandlerOptions

}  // namespace mime_handler
}  // namespace api
}  // namespace extensions

