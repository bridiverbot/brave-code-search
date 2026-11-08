// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/experimental_ai_data.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/experimental_ai_data.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#include "chrome/common/extensions/api/experimental_ai_data.h"

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
namespace experimental_ai_data {
//
// Types
//

const char* ToString(SnapshotType enum_param) {
  switch (enum_param) {
    case SnapshotType::kApc:
      return "apc";
    case SnapshotType::kScreenshot:
      return "screenshot";
    case SnapshotType::kApcAndScreenshot:
      return "apc_and_screenshot";
    case SnapshotType::kNone:
      return "";
  }
  NOTREACHED();
}

SnapshotType ParseSnapshotType(std::string_view enum_string) {
  if (enum_string == "apc")
    return SnapshotType::kApc;
  if (enum_string == "screenshot")
    return SnapshotType::kScreenshot;
  if (enum_string == "apc_and_screenshot")
    return SnapshotType::kApcAndScreenshot;
  return SnapshotType::kNone;
}

std::u16string GetSnapshotTypeParseError(std::string_view enum_string) {
  return u"expected \"apc\" or \"screenshot\" or \"apc_and_screenshot\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ApcOptions::ApcOptions()
: type() {}

ApcOptions::~ApcOptions() = default;
ApcOptions::ApcOptions(ApcOptions&& rhs) noexcept = default;
ApcOptions& ApcOptions::operator=(ApcOptions&& rhs) noexcept = default;
ApcOptions ApcOptions::Clone() const {
  ApcOptions out;
  out.type = type;
  out.exclude_actionable_details = exclude_actionable_details;
  out.exclude_cross_site_frames = exclude_cross_site_frames;
  out.exclude_ad_related = exclude_ad_related;
  out.max_meta_elements = max_meta_elements;
  return out;
}

// static
bool ApcOptions::Populate(
    const base::DictValue& dict, ApcOptions& out) {
  out.type = SnapshotType();
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      const std::string* snapshot_type_as_string = (*type_value).GetIfString();
      if (!snapshot_type_as_string) {
        return false;
      }
      out.type = ParseSnapshotType(*snapshot_type_as_string);
      if (out.type == SnapshotType()) {
        return false;
      }
    }
    } else {
    out.type = SnapshotType();
  }

  const base::Value* exclude_actionable_details_value = dict.Find("excludeActionableDetails");
  if (exclude_actionable_details_value) {
    {
      auto temp = (*exclude_actionable_details_value).GetIfBool();
      if (!temp.has_value()) {
        out.exclude_actionable_details = std::nullopt;
        return false;
      }
      out.exclude_actionable_details = *temp;
    }
  }

  const base::Value* exclude_cross_site_frames_value = dict.Find("excludeCrossSiteFrames");
  if (exclude_cross_site_frames_value) {
    {
      auto temp = (*exclude_cross_site_frames_value).GetIfBool();
      if (!temp.has_value()) {
        out.exclude_cross_site_frames = std::nullopt;
        return false;
      }
      out.exclude_cross_site_frames = *temp;
    }
  }

  const base::Value* exclude_ad_related_value = dict.Find("excludeAdRelated");
  if (exclude_ad_related_value) {
    {
      auto temp = (*exclude_ad_related_value).GetIfBool();
      if (!temp.has_value()) {
        out.exclude_ad_related = std::nullopt;
        return false;
      }
      out.exclude_ad_related = *temp;
    }
  }

  const base::Value* max_meta_elements_value = dict.Find("maxMetaElements");
  if (max_meta_elements_value) {
    {
      auto temp = (*max_meta_elements_value).GetIfInt();
      if (!temp.has_value()) {
        out.max_meta_elements = std::nullopt;
        return false;
      }
      out.max_meta_elements = *temp;
    }
  }

  return true;
}

// static
bool ApcOptions::Populate(
    const base::Value& value, ApcOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ApcOptions> ApcOptions::FromValue(const base::DictValue& value) {
  ApcOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ApcOptions> ApcOptions::FromValue(const base::Value& value) {
  ApcOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ApcOptions::ToValue() const {
  base::DictValue to_value_result;

  if (this->type != SnapshotType()) {
    to_value_result.Set("type", experimental_ai_data::ToString(this->type));

  }
  if (this->exclude_actionable_details) {
    to_value_result.Set("excludeActionableDetails", *this->exclude_actionable_details);

  }
  if (this->exclude_cross_site_frames) {
    to_value_result.Set("excludeCrossSiteFrames", *this->exclude_cross_site_frames);

  }
  if (this->exclude_ad_related) {
    to_value_result.Set("excludeAdRelated", *this->exclude_ad_related);

  }
  if (this->max_meta_elements) {
    to_value_result.Set("maxMetaElements", *this->max_meta_elements);

  }

  return to_value_result;
}


ApcSnapshot::ApcSnapshot()
 {}

ApcSnapshot::~ApcSnapshot() = default;
ApcSnapshot::ApcSnapshot(ApcSnapshot&& rhs) noexcept = default;
ApcSnapshot& ApcSnapshot::operator=(ApcSnapshot&& rhs) noexcept = default;
ApcSnapshot ApcSnapshot::Clone() const {
  ApcSnapshot out;
  out.apc_base64 = apc_base64;
  out.screenshot_base64 = screenshot_base64;
  return out;
}

// static
bool ApcSnapshot::Populate(
    const base::DictValue& dict, ApcSnapshot& out) {
  const base::Value* apc_base64_value = dict.Find("apcBase64");
  if (apc_base64_value) {
    {
      auto* temp = (*apc_base64_value).GetIfString();
      if (!temp) {
        out.apc_base64 = std::nullopt;
        return false;
      }
      out.apc_base64 = *temp;
    }
  }

  const base::Value* screenshot_base64_value = dict.Find("screenshotBase64");
  if (screenshot_base64_value) {
    {
      auto* temp = (*screenshot_base64_value).GetIfString();
      if (!temp) {
        out.screenshot_base64 = std::nullopt;
        return false;
      }
      out.screenshot_base64 = *temp;
    }
  }

  return true;
}

// static
bool ApcSnapshot::Populate(
    const base::Value& value, ApcSnapshot& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ApcSnapshot> ApcSnapshot::FromValue(const base::DictValue& value) {
  ApcSnapshot out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ApcSnapshot> ApcSnapshot::FromValue(const base::Value& value) {
  ApcSnapshot out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ApcSnapshot::ToValue() const {
  base::DictValue to_value_result;

  if (this->apc_base64) {
    to_value_result.Set("apcBase64", *this->apc_base64);

  }
  if (this->screenshot_base64) {
    to_value_result.Set("screenshotBase64", *this->screenshot_base64);

  }

  return to_value_result;
}


TextSurroundingSelection::TextSurroundingSelection()
: start_offset(0),
end_offset(0) {}

TextSurroundingSelection::~TextSurroundingSelection() = default;
TextSurroundingSelection::TextSurroundingSelection(TextSurroundingSelection&& rhs) noexcept = default;
TextSurroundingSelection& TextSurroundingSelection::operator=(TextSurroundingSelection&& rhs) noexcept = default;
TextSurroundingSelection TextSurroundingSelection::Clone() const {
  TextSurroundingSelection out;
  out.content = content;
  out.start_offset = start_offset;
  out.end_offset = end_offset;
  return out;
}

// static
bool TextSurroundingSelection::Populate(
    const base::DictValue& dict, TextSurroundingSelection& out) {
  const base::Value* content_value = dict.Find("content");
  if (!content_value) {
    return false;
  }
  {
    auto* temp = (*content_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.content = *temp;
  }

  const base::Value* start_offset_value = dict.Find("startOffset");
  if (!start_offset_value) {
    return false;
  }
  {
    auto temp = (*start_offset_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.start_offset = *temp;
  }

  const base::Value* end_offset_value = dict.Find("endOffset");
  if (!end_offset_value) {
    return false;
  }
  {
    auto temp = (*end_offset_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.end_offset = *temp;
  }

  return true;
}

// static
bool TextSurroundingSelection::Populate(
    const base::Value& value, TextSurroundingSelection& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<TextSurroundingSelection> TextSurroundingSelection::FromValue(const base::DictValue& value) {
  TextSurroundingSelection out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<TextSurroundingSelection> TextSurroundingSelection::FromValue(const base::Value& value) {
  TextSurroundingSelection out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue TextSurroundingSelection::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("content", this->content);

  to_value_result.Set("startOffset", this->start_offset);

  to_value_result.Set("endOffset", this->end_offset);


  return to_value_result;
}



//
// Functions
//

namespace GetAiData {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 4) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& dom_node_id_value = args[0];
    {
      auto temp = dom_node_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.dom_node_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& frame_id_value = args[1];
    {
      auto* temp = frame_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.frame_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& user_input_value = args[2];
    {
      auto* temp = user_input_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.user_input = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& tab_id_value = args[3];
    {
      auto temp = tab_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.tab_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const std::vector<uint8_t>& data) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(base::Value(data));

  return create_results;
}
}  // namespace GetAiData

namespace GetAiDataWithSpecifier {

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
    const base::Value& tab_id_value = args[0];
    {
      auto temp = tab_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.tab_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& ai_data_specifier_value = args[1];
    {
      if (!ai_data_specifier_value.is_blob()) {
        return std::nullopt;
      }
      else {
        params.ai_data_specifier = ai_data_specifier_value.GetBlob();
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const std::vector<uint8_t>& data) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(base::Value(data));

  return create_results;
}
}  // namespace GetAiDataWithSpecifier

namespace GetApcSnapshot {

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
    const base::Value& tab_id_value = args[0];
    {
      auto temp = tab_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.tab_id = *temp;
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
      if (!ApcOptions::Populate(options_value.GetDict(), params.options)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const ApcSnapshot& snapshot) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((snapshot).ToValue());

  return create_results;
}
}  // namespace GetApcSnapshot

namespace GetTextSurroundingSelection {

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
    const base::Value& tab_id_value = args[0];
    {
      auto temp = tab_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.tab_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& max_length_value = args[1];
    {
      auto temp = max_length_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.max_length = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const TextSurroundingSelection& result) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetTextSurroundingSelection

}  // namespace experimental_ai_data
}  // namespace api
}  // namespace extensions

