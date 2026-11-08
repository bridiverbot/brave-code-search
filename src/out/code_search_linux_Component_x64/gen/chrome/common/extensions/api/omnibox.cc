// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/omnibox.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/omnibox.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#include "chrome/common/extensions/api/omnibox.h"

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
namespace omnibox {
//
// Types
//

const char* ToString(DescriptionStyleType enum_param) {
  switch (enum_param) {
    case DescriptionStyleType::kUrl:
      return "url";
    case DescriptionStyleType::kMatch:
      return "match";
    case DescriptionStyleType::kDim:
      return "dim";
    case DescriptionStyleType::kNone:
      return "";
  }
  NOTREACHED();
}

DescriptionStyleType ParseDescriptionStyleType(std::string_view enum_string) {
  if (enum_string == "url")
    return DescriptionStyleType::kUrl;
  if (enum_string == "match")
    return DescriptionStyleType::kMatch;
  if (enum_string == "dim")
    return DescriptionStyleType::kDim;
  return DescriptionStyleType::kNone;
}

std::u16string GetDescriptionStyleTypeParseError(std::string_view enum_string) {
  return u"expected \"url\" or \"match\" or \"dim\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(OnInputEnteredDisposition enum_param) {
  switch (enum_param) {
    case OnInputEnteredDisposition::kCurrentTab:
      return "currentTab";
    case OnInputEnteredDisposition::kNewForegroundTab:
      return "newForegroundTab";
    case OnInputEnteredDisposition::kNewBackgroundTab:
      return "newBackgroundTab";
    case OnInputEnteredDisposition::kNone:
      return "";
  }
  NOTREACHED();
}

OnInputEnteredDisposition ParseOnInputEnteredDisposition(std::string_view enum_string) {
  if (enum_string == "currentTab")
    return OnInputEnteredDisposition::kCurrentTab;
  if (enum_string == "newForegroundTab")
    return OnInputEnteredDisposition::kNewForegroundTab;
  if (enum_string == "newBackgroundTab")
    return OnInputEnteredDisposition::kNewBackgroundTab;
  return OnInputEnteredDisposition::kNone;
}

std::u16string GetOnInputEnteredDispositionParseError(std::string_view enum_string) {
  return u"expected \"currentTab\" or \"newForegroundTab\" or \"newBackgroundTab\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


MatchClassification::MatchClassification()
: offset(0),
type() {}

MatchClassification::~MatchClassification() = default;
MatchClassification::MatchClassification(MatchClassification&& rhs) noexcept = default;
MatchClassification& MatchClassification::operator=(MatchClassification&& rhs) noexcept = default;
MatchClassification MatchClassification::Clone() const {
  MatchClassification out;
  out.offset = offset;
  out.type = type;
  out.length = length;
  return out;
}

// static
bool MatchClassification::Populate(
    const base::DictValue& dict, MatchClassification& out) {
  const base::Value* offset_value = dict.Find("offset");
  if (!offset_value) {
    return false;
  }
  {
    auto temp = (*offset_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.offset = *temp;
  }

  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* description_style_type_as_string = (*type_value).GetIfString();
    if (!description_style_type_as_string) {
      return false;
    }
    out.type = ParseDescriptionStyleType(*description_style_type_as_string);
    if (out.type == DescriptionStyleType()) {
      return false;
    }
  }

  const base::Value* length_value = dict.Find("length");
  if (length_value) {
    {
      auto temp = (*length_value).GetIfInt();
      if (!temp.has_value()) {
        out.length = std::nullopt;
        return false;
      }
      out.length = *temp;
    }
  }

  return true;
}

// static
bool MatchClassification::Populate(
    const base::Value& value, MatchClassification& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MatchClassification> MatchClassification::FromValue(const base::DictValue& value) {
  MatchClassification out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MatchClassification> MatchClassification::FromValue(const base::Value& value) {
  MatchClassification out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue MatchClassification::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("offset", this->offset);

  to_value_result.Set("type", omnibox::ToString(this->type));

  if (this->length) {
    to_value_result.Set("length", *this->length);

  }

  return to_value_result;
}


Action::Icon::Icon()
 {}

Action::Icon::~Icon() = default;
Action::Icon::Icon(Icon&& rhs) noexcept = default;
Action::Icon& Action::Icon::operator=(Icon&& rhs) noexcept = default;
Action::Icon Action::Icon::Clone() const {
  Icon out;
  out.additional_properties = additional_properties.Clone();
  return out;
}

// static
bool Action::Icon::Populate(
    const base::DictValue& dict, Icon& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Action::Icon::Populate(
    const base::Value& value, Icon& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Action::Icon> Action::Icon::FromValue(const base::DictValue& value) {
  Icon out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Action::Icon> Action::Icon::FromValue(const base::Value& value) {
  Icon out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Action::Icon::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



Action::Action()
 {}

Action::~Action() = default;
Action::Action(Action&& rhs) noexcept = default;
Action& Action::operator=(Action&& rhs) noexcept = default;
Action Action::Clone() const {
  Action out;
  out.name = name;
  out.label = label;
  out.tooltip_text = tooltip_text;
  if (icon) {
    out.icon = icon->Clone();
  }
  return out;
}

// static
bool Action::Populate(
    const base::DictValue& dict, Action& out) {
  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* label_value = dict.Find("label");
  if (!label_value) {
    return false;
  }
  {
    auto* temp = (*label_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.label = *temp;
  }

  const base::Value* tooltip_text_value = dict.Find("tooltipText");
  if (!tooltip_text_value) {
    return false;
  }
  {
    auto* temp = (*tooltip_text_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.tooltip_text = *temp;
  }

  const base::Value* icon_value = dict.Find("icon");
  if (icon_value) {
    {
      if (!(*icon_value).is_dict()) {
        return false;
      }
      else {
        Icon temp;
        if (!Icon::Populate((*icon_value).GetDict(), temp))
          return false;
        out.icon = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool Action::Populate(
    const base::Value& value, Action& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Action> Action::FromValue(const base::DictValue& value) {
  Action out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Action> Action::FromValue(const base::Value& value) {
  Action out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Action::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("name", this->name);

  to_value_result.Set("label", this->label);

  to_value_result.Set("tooltipText", this->tooltip_text);

  if (this->icon) {
    to_value_result.Set("icon", (this->icon)->ToValue());

  }

  return to_value_result;
}


SuggestResult::SuggestResult()
 {}

SuggestResult::~SuggestResult() = default;
SuggestResult::SuggestResult(SuggestResult&& rhs) noexcept = default;
SuggestResult& SuggestResult::operator=(SuggestResult&& rhs) noexcept = default;
SuggestResult SuggestResult::Clone() const {
  SuggestResult out;
  out.content = content;
  out.description = description;
  out.deletable = deletable;
  if (description_styles) {
    out.description_styles.emplace();
    out.description_styles->reserve(description_styles->size());
    for (const auto& element : *description_styles) {
      json_schema_compiler::util::AppendToContainer(*out.description_styles, element.Clone());
    }
  }
  if (actions) {
    out.actions.emplace();
    out.actions->reserve(actions->size());
    for (const auto& element : *actions) {
      json_schema_compiler::util::AppendToContainer(*out.actions, element.Clone());
    }
  }
  out.icon_url = icon_url;
  return out;
}

// static
bool SuggestResult::Populate(
    const base::DictValue& dict, SuggestResult& out) {
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

  const base::Value* description_value = dict.Find("description");
  if (!description_value) {
    return false;
  }
  {
    auto* temp = (*description_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.description = *temp;
  }

  const base::Value* deletable_value = dict.Find("deletable");
  if (deletable_value) {
    {
      auto temp = (*deletable_value).GetIfBool();
      if (!temp.has_value()) {
        out.deletable = std::nullopt;
        return false;
      }
      out.deletable = *temp;
    }
  }

  const base::Value* description_styles_value = dict.Find("descriptionStyles");
  if (description_styles_value) {
    {
      if (!(*description_styles_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*description_styles_value).GetList(), out.description_styles)) {
          return false;
        }
      }
    }
  }

  const base::Value* actions_value = dict.Find("actions");
  if (actions_value) {
    {
      if (!(*actions_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*actions_value).GetList(), out.actions)) {
          return false;
        }
      }
    }
  }

  const base::Value* icon_url_value = dict.Find("iconUrl");
  if (icon_url_value) {
    {
      auto* temp = (*icon_url_value).GetIfString();
      if (!temp) {
        out.icon_url = std::nullopt;
        return false;
      }
      out.icon_url = *temp;
    }
  }

  return true;
}

// static
bool SuggestResult::Populate(
    const base::Value& value, SuggestResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SuggestResult> SuggestResult::FromValue(const base::DictValue& value) {
  SuggestResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SuggestResult> SuggestResult::FromValue(const base::Value& value) {
  SuggestResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue SuggestResult::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("content", this->content);

  to_value_result.Set("description", this->description);

  if (this->deletable) {
    to_value_result.Set("deletable", *this->deletable);

  }
  if (this->description_styles) {
    to_value_result.Set("descriptionStyles", json_schema_compiler::util::CreateValueFromArray(*this->description_styles));

  }
  if (this->actions) {
    to_value_result.Set("actions", json_schema_compiler::util::CreateValueFromArray(*this->actions));

  }
  if (this->icon_url) {
    to_value_result.Set("iconUrl", *this->icon_url);

  }

  return to_value_result;
}


DefaultSuggestResult::DefaultSuggestResult()
 {}

DefaultSuggestResult::~DefaultSuggestResult() = default;
DefaultSuggestResult::DefaultSuggestResult(DefaultSuggestResult&& rhs) noexcept = default;
DefaultSuggestResult& DefaultSuggestResult::operator=(DefaultSuggestResult&& rhs) noexcept = default;
DefaultSuggestResult DefaultSuggestResult::Clone() const {
  DefaultSuggestResult out;
  out.description = description;
  if (description_styles) {
    out.description_styles.emplace();
    out.description_styles->reserve(description_styles->size());
    for (const auto& element : *description_styles) {
      json_schema_compiler::util::AppendToContainer(*out.description_styles, element.Clone());
    }
  }
  return out;
}

// static
bool DefaultSuggestResult::Populate(
    const base::DictValue& dict, DefaultSuggestResult& out) {
  const base::Value* description_value = dict.Find("description");
  if (!description_value) {
    return false;
  }
  {
    auto* temp = (*description_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.description = *temp;
  }

  const base::Value* description_styles_value = dict.Find("descriptionStyles");
  if (description_styles_value) {
    {
      if (!(*description_styles_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*description_styles_value).GetList(), out.description_styles)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool DefaultSuggestResult::Populate(
    const base::Value& value, DefaultSuggestResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DefaultSuggestResult> DefaultSuggestResult::FromValue(const base::DictValue& value) {
  DefaultSuggestResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DefaultSuggestResult> DefaultSuggestResult::FromValue(const base::Value& value) {
  DefaultSuggestResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue DefaultSuggestResult::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("description", this->description);

  if (this->description_styles) {
    to_value_result.Set("descriptionStyles", json_schema_compiler::util::CreateValueFromArray(*this->description_styles));

  }

  return to_value_result;
}


ActionExecution::ActionExecution()
 {}

ActionExecution::~ActionExecution() = default;
ActionExecution::ActionExecution(ActionExecution&& rhs) noexcept = default;
ActionExecution& ActionExecution::operator=(ActionExecution&& rhs) noexcept = default;
ActionExecution ActionExecution::Clone() const {
  ActionExecution out;
  out.action_name = action_name;
  out.content = content;
  return out;
}

// static
bool ActionExecution::Populate(
    const base::DictValue& dict, ActionExecution& out) {
  const base::Value* action_name_value = dict.Find("actionName");
  if (!action_name_value) {
    return false;
  }
  {
    auto* temp = (*action_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.action_name = *temp;
  }

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

  return true;
}

// static
bool ActionExecution::Populate(
    const base::Value& value, ActionExecution& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ActionExecution> ActionExecution::FromValue(const base::DictValue& value) {
  ActionExecution out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ActionExecution> ActionExecution::FromValue(const base::Value& value) {
  ActionExecution out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ActionExecution::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("actionName", this->action_name);

  to_value_result.Set("content", this->content);


  return to_value_result;
}



//
// Manifest Keys
//

ManifestKeys::Omnibox::Omnibox()
 {}

ManifestKeys::Omnibox::~Omnibox() = default;
ManifestKeys::Omnibox::Omnibox(Omnibox&& rhs) noexcept = default;
ManifestKeys::Omnibox& ManifestKeys::Omnibox::operator=(Omnibox&& rhs) noexcept = default;
// static
constexpr char ManifestKeys::Omnibox::kKeyword[];

//static
bool ManifestKeys::Omnibox::ParseFromDictionary(
const base::DictValue& root_dict, std::string_view key, Omnibox& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::DictValue& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kKeyword, out.keyword, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  return true;
}



ManifestKeys::ManifestKeys()
 {}

ManifestKeys::~ManifestKeys() = default;
ManifestKeys::ManifestKeys(ManifestKeys&& rhs) noexcept = default;
ManifestKeys& ManifestKeys::operator=(ManifestKeys&& rhs) noexcept = default;
// static
constexpr char ManifestKeys::kOmnibox[];

//static
bool ManifestKeys::ParseFromDictionary(
const base::DictValue& root_dict, ManifestKeys& out, std::u16string& error) {

  std::vector<std::string_view> error_path_reversed;
  const base::DictValue& dict = root_dict;
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kOmnibox, out.omnibox, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  return true;
}


//
// Functions
//

namespace SendSuggestions {

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
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& suggest_results_value = args[1];
    {
      if (!suggest_results_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(suggest_results_value.GetList(), params.suggest_results)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SendSuggestions

namespace SetDefaultSuggestion {

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
    const base::Value& suggestion_value = args[0];
    {
      if (!suggestion_value.is_dict()) {
        return std::nullopt;
      }
      if (!DefaultSuggestResult::Populate(suggestion_value.GetDict(), params.suggestion)) {
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
}  // namespace SetDefaultSuggestion

//
// Events
//

namespace OnInputStarted {

const char kEventName[] = "omnibox.onInputStarted";

base::ListValue Create() {
  base::ListValue create_results;

  return create_results;
}

}  // namespace OnInputStarted

namespace OnInputChanged {

const char kEventName[] = "omnibox.onInputChanged";

base::ListValue Create(const std::string& text, base::DictValue suggest) {
  base::ListValue create_results;
  create_results.reserve(2);
  create_results.Append(text);

  create_results.Append((suggest).Clone());

  return create_results;
}

}  // namespace OnInputChanged

namespace OnInputEntered {

const char kEventName[] = "omnibox.onInputEntered";

base::ListValue Create(const std::string& text, const OnInputEnteredDisposition& disposition) {
  base::ListValue create_results;
  create_results.reserve(2);
  create_results.Append(text);

  create_results.Append(omnibox::ToString(disposition));

  return create_results;
}

}  // namespace OnInputEntered

namespace OnInputCancelled {

const char kEventName[] = "omnibox.onInputCancelled";

base::ListValue Create() {
  base::ListValue create_results;

  return create_results;
}

}  // namespace OnInputCancelled

namespace OnDeleteSuggestion {

const char kEventName[] = "omnibox.onDeleteSuggestion";

base::ListValue Create(const std::string& text) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(text);

  return create_results;
}

}  // namespace OnDeleteSuggestion

namespace OnActionExecuted {

const char kEventName[] = "omnibox.onActionExecuted";

base::ListValue Create(const ActionExecution& action_execution) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((action_execution).ToValue());

  return create_results;
}

}  // namespace OnActionExecuted

}  // namespace omnibox
}  // namespace api
}  // namespace extensions

