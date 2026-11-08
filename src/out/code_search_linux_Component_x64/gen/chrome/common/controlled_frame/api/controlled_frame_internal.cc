// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/controlled_frame/api/controlled_frame_internal.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/controlled_frame/api/controlled_frame_internal.json --root=../../ --destdir=gen --namespace=controlled_frame::api::%(namespace)s --generator=cpp --include-rules=chrome/common/extensions/api:extensions::api::%(namespace)s

#include "chrome/common/controlled_frame/api/controlled_frame_internal.h"

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
#include "chrome/common/extensions/api/context_menus.h"


using base::UTF8ToUTF16;

namespace controlled_frame {
namespace api {
namespace controlled_frame_internal {
//
// Functions
//

namespace ContextMenusCreate {

Params::CreateProperties::ParentId::ParentId()
 {}

Params::CreateProperties::ParentId::~ParentId() = default;
Params::CreateProperties::ParentId::ParentId(ParentId&& rhs) noexcept = default;
Params::CreateProperties::ParentId& Params::CreateProperties::ParentId::operator=(ParentId&& rhs) noexcept = default;
Params::CreateProperties::ParentId Params::CreateProperties::ParentId::Clone() const {
  ParentId out;
  out.as_integer = as_integer;
  out.as_string = as_string;
  return out;
}

// static
bool Params::CreateProperties::ParentId::Populate(
    const base::Value& value, ParentId& out) {
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = std::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  return false;
}

// static
std::optional<Params::CreateProperties::ParentId> Params::CreateProperties::ParentId::FromValue(const base::Value& value) {
  ParentId out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}



Params::CreateProperties::CreateProperties()
: type() {}

Params::CreateProperties::~CreateProperties() = default;
Params::CreateProperties::CreateProperties(CreateProperties&& rhs) noexcept = default;
Params::CreateProperties& Params::CreateProperties::operator=(CreateProperties&& rhs) noexcept = default;
Params::CreateProperties Params::CreateProperties::Clone() const {
  CreateProperties out;
  out.type = type;
  out.id = id;
  out.title = title;
  out.checked = checked;
  out.contexts = contexts;
  out.visible = visible;
  if (onclick) {
    out.onclick = onclick->Clone();
  }
  if (parent_id) {
    out.parent_id = parent_id->Clone();
  }
  out.document_url_patterns = document_url_patterns;
  out.target_url_patterns = target_url_patterns;
  out.enabled = enabled;
  return out;
}

// static
bool Params::CreateProperties::Populate(
    const base::DictValue& dict, CreateProperties& out) {
  out.type = extensions::api::context_menus::ItemType();
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      const std::string* item_type_as_string = (*type_value).GetIfString();
      if (!item_type_as_string) {
        return false;
      }
      out.type = extensions::api::context_menus::ParseItemType(*item_type_as_string);
      if (out.type == extensions::api::context_menus::ItemType()) {
        return false;
      }
    }
    } else {
    out.type = extensions::api::context_menus::ItemType();
  }

  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto* temp = (*id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* title_value = dict.Find("title");
  if (title_value) {
    {
      auto* temp = (*title_value).GetIfString();
      if (!temp) {
        out.title = std::nullopt;
        return false;
      }
      out.title = *temp;
    }
  }

  const base::Value* checked_value = dict.Find("checked");
  if (checked_value) {
    {
      auto temp = (*checked_value).GetIfBool();
      if (!temp.has_value()) {
        out.checked = std::nullopt;
        return false;
      }
      out.checked = *temp;
    }
  }

  const base::Value* contexts_value = dict.Find("contexts");
  if (contexts_value) {
    {
      if (!(*contexts_value).is_list()) {
        return false;
      }
      else {
        out.contexts.emplace();
        for (const auto& it : ((*contexts_value)).GetList()) {
          extensions::api::context_menus::ContextType tmp;
          const std::string* context_type_as_string = (it).GetIfString();
          if (!context_type_as_string) {
            return false;
          }
          tmp = extensions::api::context_menus::ParseContextType(*context_type_as_string);
          if (tmp == extensions::api::context_menus::ContextType()) {
            return false;
          }
          out.contexts->push_back(tmp);
        }
      }
    }
  }

  const base::Value* visible_value = dict.Find("visible");
  if (visible_value) {
    {
      auto temp = (*visible_value).GetIfBool();
      if (!temp.has_value()) {
        out.visible = std::nullopt;
        return false;
      }
      out.visible = *temp;
    }
  }

  const base::Value* onclick_value = dict.Find("onclick");
  if (onclick_value) {
    {
      out.onclick.emplace();
    }
  }

  const base::Value* parent_id_value = dict.Find("parentId");
  if (parent_id_value) {
    {
      ParentId temp;
      if (!ParentId::Populate((*parent_id_value), temp))
        return false;
      out.parent_id = std::move(temp);
    }
  }

  const base::Value* document_url_patterns_value = dict.Find("documentUrlPatterns");
  if (document_url_patterns_value) {
    {
      if (!(*document_url_patterns_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*document_url_patterns_value).GetList(), out.document_url_patterns)) {
          return false;
        }
      }
    }
  }

  const base::Value* target_url_patterns_value = dict.Find("targetUrlPatterns");
  if (target_url_patterns_value) {
    {
      if (!(*target_url_patterns_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*target_url_patterns_value).GetList(), out.target_url_patterns)) {
          return false;
        }
      }
    }
  }

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

  return true;
}

// static
bool Params::CreateProperties::Populate(
    const base::Value& value, CreateProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::CreateProperties> Params::CreateProperties::FromValue(const base::DictValue& value) {
  CreateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::CreateProperties> Params::CreateProperties::FromValue(const base::Value& value) {
  CreateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


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
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& create_properties_value = args[1];
    {
      if (!create_properties_value.is_dict()) {
        return std::nullopt;
      }
      if (!CreateProperties::Populate(create_properties_value.GetDict(), params.create_properties)) {
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
}  // namespace ContextMenusCreate

namespace ContextMenusUpdate {

Params::Id::Id()
 {}

Params::Id::~Id() = default;
Params::Id::Id(Id&& rhs) noexcept = default;
Params::Id& Params::Id::operator=(Id&& rhs) noexcept = default;
Params::Id Params::Id::Clone() const {
  Id out;
  out.as_integer = as_integer;
  out.as_string = as_string;
  return out;
}

// static
bool Params::Id::Populate(
    const base::Value& value, Id& out) {
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = std::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  return false;
}

// static
std::optional<Params::Id> Params::Id::FromValue(const base::Value& value) {
  Id out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::UpdateProperties::ParentId::ParentId()
 {}

Params::UpdateProperties::ParentId::~ParentId() = default;
Params::UpdateProperties::ParentId::ParentId(ParentId&& rhs) noexcept = default;
Params::UpdateProperties::ParentId& Params::UpdateProperties::ParentId::operator=(ParentId&& rhs) noexcept = default;
Params::UpdateProperties::ParentId Params::UpdateProperties::ParentId::Clone() const {
  ParentId out;
  out.as_integer = as_integer;
  out.as_string = as_string;
  return out;
}

// static
bool Params::UpdateProperties::ParentId::Populate(
    const base::Value& value, ParentId& out) {
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = std::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  return false;
}

// static
std::optional<Params::UpdateProperties::ParentId> Params::UpdateProperties::ParentId::FromValue(const base::Value& value) {
  ParentId out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}



Params::UpdateProperties::UpdateProperties()
: type() {}

Params::UpdateProperties::~UpdateProperties() = default;
Params::UpdateProperties::UpdateProperties(UpdateProperties&& rhs) noexcept = default;
Params::UpdateProperties& Params::UpdateProperties::operator=(UpdateProperties&& rhs) noexcept = default;
Params::UpdateProperties Params::UpdateProperties::Clone() const {
  UpdateProperties out;
  out.type = type;
  out.title = title;
  out.checked = checked;
  out.contexts = contexts;
  out.visible = visible;
  if (onclick) {
    out.onclick = onclick->Clone();
  }
  if (parent_id) {
    out.parent_id = parent_id->Clone();
  }
  out.document_url_patterns = document_url_patterns;
  out.target_url_patterns = target_url_patterns;
  out.enabled = enabled;
  return out;
}

// static
bool Params::UpdateProperties::Populate(
    const base::DictValue& dict, UpdateProperties& out) {
  out.type = extensions::api::context_menus::ItemType();
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      const std::string* item_type_as_string = (*type_value).GetIfString();
      if (!item_type_as_string) {
        return false;
      }
      out.type = extensions::api::context_menus::ParseItemType(*item_type_as_string);
      if (out.type == extensions::api::context_menus::ItemType()) {
        return false;
      }
    }
    } else {
    out.type = extensions::api::context_menus::ItemType();
  }

  const base::Value* title_value = dict.Find("title");
  if (title_value) {
    {
      auto* temp = (*title_value).GetIfString();
      if (!temp) {
        out.title = std::nullopt;
        return false;
      }
      out.title = *temp;
    }
  }

  const base::Value* checked_value = dict.Find("checked");
  if (checked_value) {
    {
      auto temp = (*checked_value).GetIfBool();
      if (!temp.has_value()) {
        out.checked = std::nullopt;
        return false;
      }
      out.checked = *temp;
    }
  }

  const base::Value* contexts_value = dict.Find("contexts");
  if (contexts_value) {
    {
      if (!(*contexts_value).is_list()) {
        return false;
      }
      else {
        out.contexts.emplace();
        for (const auto& it : ((*contexts_value)).GetList()) {
          extensions::api::context_menus::ContextType tmp;
          const std::string* context_type_as_string = (it).GetIfString();
          if (!context_type_as_string) {
            return false;
          }
          tmp = extensions::api::context_menus::ParseContextType(*context_type_as_string);
          if (tmp == extensions::api::context_menus::ContextType()) {
            return false;
          }
          out.contexts->push_back(tmp);
        }
      }
    }
  }

  const base::Value* visible_value = dict.Find("visible");
  if (visible_value) {
    {
      auto temp = (*visible_value).GetIfBool();
      if (!temp.has_value()) {
        out.visible = std::nullopt;
        return false;
      }
      out.visible = *temp;
    }
  }

  const base::Value* onclick_value = dict.Find("onclick");
  if (onclick_value) {
    {
      out.onclick.emplace();
    }
  }

  const base::Value* parent_id_value = dict.Find("parentId");
  if (parent_id_value) {
    {
      ParentId temp;
      if (!ParentId::Populate((*parent_id_value), temp))
        return false;
      out.parent_id = std::move(temp);
    }
  }

  const base::Value* document_url_patterns_value = dict.Find("documentUrlPatterns");
  if (document_url_patterns_value) {
    {
      if (!(*document_url_patterns_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*document_url_patterns_value).GetList(), out.document_url_patterns)) {
          return false;
        }
      }
    }
  }

  const base::Value* target_url_patterns_value = dict.Find("targetUrlPatterns");
  if (target_url_patterns_value) {
    {
      if (!(*target_url_patterns_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*target_url_patterns_value).GetList(), out.target_url_patterns)) {
          return false;
        }
      }
    }
  }

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

  return true;
}

// static
bool Params::UpdateProperties::Populate(
    const base::Value& value, UpdateProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::UpdateProperties> Params::UpdateProperties::FromValue(const base::DictValue& value) {
  UpdateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::UpdateProperties> Params::UpdateProperties::FromValue(const base::Value& value) {
  UpdateProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& id_value = args[1];
    {
      if (!Id::Populate(id_value, params.id))
        return std::nullopt;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& update_properties_value = args[2];
    {
      if (!update_properties_value.is_dict()) {
        return std::nullopt;
      }
      if (!UpdateProperties::Populate(update_properties_value.GetDict(), params.update_properties)) {
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
}  // namespace ContextMenusUpdate

namespace SetClientHintsEnabled {

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
    const base::Value& instance_id_value = args[0];
    {
      auto temp = instance_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.instance_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& enabled_value = args[1];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SetClientHintsEnabled

}  // namespace controlled_frame_internal
}  // namespace api
}  // namespace controlled_frame

