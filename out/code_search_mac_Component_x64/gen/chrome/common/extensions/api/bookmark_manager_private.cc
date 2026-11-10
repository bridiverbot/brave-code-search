// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/bookmark_manager_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/bookmark_manager_private.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#include "chrome/common/extensions/api/bookmark_manager_private.h"

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
#include "chrome/common/extensions/api/bookmarks.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace bookmark_manager_private {
//
// Types
//

BookmarkNodeDataElement::BookmarkNodeDataElement()
 {}

BookmarkNodeDataElement::~BookmarkNodeDataElement() = default;
BookmarkNodeDataElement::BookmarkNodeDataElement(BookmarkNodeDataElement&& rhs) noexcept = default;
BookmarkNodeDataElement& BookmarkNodeDataElement::operator=(BookmarkNodeDataElement&& rhs) noexcept = default;
BookmarkNodeDataElement BookmarkNodeDataElement::Clone() const {
  BookmarkNodeDataElement out;
  out.id = id;
  out.parent_id = parent_id;
  out.title = title;
  out.url = url;
  out.children.reserve(children.size());
  for (const auto& element : children) {
    json_schema_compiler::util::AppendToContainer(out.children, element.Clone());
  }
  return out;
}

// static
bool BookmarkNodeDataElement::Populate(
    const base::DictValue& dict, BookmarkNodeDataElement& out) {
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    {
      auto* temp = (*id_value).GetIfString();
      if (!temp) {
        out.id = std::nullopt;
        return false;
      }
      out.id = *temp;
    }
  }

  const base::Value* parent_id_value = dict.Find("parentId");
  if (parent_id_value) {
    {
      auto* temp = (*parent_id_value).GetIfString();
      if (!temp) {
        out.parent_id = std::nullopt;
        return false;
      }
      out.parent_id = *temp;
    }
  }

  const base::Value* title_value = dict.Find("title");
  if (!title_value) {
    return false;
  }
  {
    auto* temp = (*title_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.title = *temp;
  }

  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    {
      auto* temp = (*url_value).GetIfString();
      if (!temp) {
        out.url = std::nullopt;
        return false;
      }
      out.url = *temp;
    }
  }

  const base::Value* children_value = dict.Find("children");
  if (!children_value) {
    return false;
  }
  {
    if (!(*children_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*children_value).GetList(), out.children)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool BookmarkNodeDataElement::Populate(
    const base::Value& value, BookmarkNodeDataElement& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<BookmarkNodeDataElement> BookmarkNodeDataElement::FromValue(const base::DictValue& value) {
  BookmarkNodeDataElement out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<BookmarkNodeDataElement> BookmarkNodeDataElement::FromValue(const base::Value& value) {
  BookmarkNodeDataElement out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue BookmarkNodeDataElement::ToValue() const {
  base::DictValue to_value_result;

  if (this->id) {
    to_value_result.Set("id", *this->id);

  }
  if (this->parent_id) {
    to_value_result.Set("parentId", *this->parent_id);

  }
  to_value_result.Set("title", this->title);

  if (this->url) {
    to_value_result.Set("url", *this->url);

  }
  to_value_result.Set("children", json_schema_compiler::util::CreateValueFromArray(this->children));


  return to_value_result;
}


BookmarkNodeData::BookmarkNodeData()
: same_profile(false) {}

BookmarkNodeData::~BookmarkNodeData() = default;
BookmarkNodeData::BookmarkNodeData(BookmarkNodeData&& rhs) noexcept = default;
BookmarkNodeData& BookmarkNodeData::operator=(BookmarkNodeData&& rhs) noexcept = default;
BookmarkNodeData BookmarkNodeData::Clone() const {
  BookmarkNodeData out;
  out.same_profile = same_profile;
  out.elements.reserve(elements.size());
  for (const auto& element : elements) {
    json_schema_compiler::util::AppendToContainer(out.elements, element.Clone());
  }
  return out;
}

// static
bool BookmarkNodeData::Populate(
    const base::DictValue& dict, BookmarkNodeData& out) {
  const base::Value* same_profile_value = dict.Find("sameProfile");
  if (!same_profile_value) {
    return false;
  }
  {
    auto temp = (*same_profile_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.same_profile = *temp;
  }

  const base::Value* elements_value = dict.Find("elements");
  if (!elements_value) {
    return false;
  }
  {
    if (!(*elements_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*elements_value).GetList(), out.elements)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool BookmarkNodeData::Populate(
    const base::Value& value, BookmarkNodeData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<BookmarkNodeData> BookmarkNodeData::FromValue(const base::DictValue& value) {
  BookmarkNodeData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<BookmarkNodeData> BookmarkNodeData::FromValue(const base::Value& value) {
  BookmarkNodeData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue BookmarkNodeData::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("sameProfile", this->same_profile);

  to_value_result.Set("elements", json_schema_compiler::util::CreateValueFromArray(this->elements));


  return to_value_result;
}


OpenInNewTabParams::OpenInNewTabParams()
: active(false),
split(false) {}

OpenInNewTabParams::~OpenInNewTabParams() = default;
OpenInNewTabParams::OpenInNewTabParams(OpenInNewTabParams&& rhs) noexcept = default;
OpenInNewTabParams& OpenInNewTabParams::operator=(OpenInNewTabParams&& rhs) noexcept = default;
OpenInNewTabParams OpenInNewTabParams::Clone() const {
  OpenInNewTabParams out;
  out.active = active;
  out.split = split;
  return out;
}

// static
bool OpenInNewTabParams::Populate(
    const base::DictValue& dict, OpenInNewTabParams& out) {
  const base::Value* active_value = dict.Find("active");
  if (!active_value) {
    return false;
  }
  {
    auto temp = (*active_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.active = *temp;
  }

  const base::Value* split_value = dict.Find("split");
  if (!split_value) {
    return false;
  }
  {
    auto temp = (*split_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.split = *temp;
  }

  return true;
}

// static
bool OpenInNewTabParams::Populate(
    const base::Value& value, OpenInNewTabParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<OpenInNewTabParams> OpenInNewTabParams::FromValue(const base::DictValue& value) {
  OpenInNewTabParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<OpenInNewTabParams> OpenInNewTabParams::FromValue(const base::Value& value) {
  OpenInNewTabParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue OpenInNewTabParams::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("active", this->active);

  to_value_result.Set("split", this->split);


  return to_value_result;
}



//
// Functions
//

namespace Copy {

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
    const base::Value& id_list_value = args[0];
    {
      if (!id_list_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(id_list_value.GetList(), params.id_list)) {
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


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace Copy

namespace Cut {

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
    const base::Value& id_list_value = args[0];
    {
      if (!id_list_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(id_list_value.GetList(), params.id_list)) {
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


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace Cut

namespace Paste {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& parent_id_value = args[0];
    {
      auto* temp = parent_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.parent_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& selected_id_list_value = args[1];
    {
      if (!selected_id_list_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(selected_id_list_value.GetList(), params.selected_id_list)) {
          return std::nullopt;
        }
      }
    }
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace Paste

namespace CanPaste {

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
    const base::Value& parent_id_value = args[0];
    {
      auto* temp = parent_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.parent_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(bool result) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace CanPaste

namespace IsActiveTabInSplit {

base::ListValue Results::Create(bool result) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace IsActiveTabInSplit

namespace SortChildren {

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
    const base::Value& parent_id_value = args[0];
    {
      auto* temp = parent_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.parent_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SortChildren

namespace StartDrag {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 5) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& id_list_value = args[0];
    {
      if (!id_list_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(id_list_value.GetList(), params.id_list)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& drag_node_index_value = args[1];
    {
      auto temp = drag_node_index_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.drag_node_index = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& is_from_touch_value = args[2];
    {
      auto temp = is_from_touch_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.is_from_touch = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& x_value = args[3];
    {
      auto temp = x_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.x = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (4 < args.size() &&
      !args[4].is_none()) {
    const base::Value& y_value = args[4];
    {
      auto temp = y_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.y = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace StartDrag

namespace Drop {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& parent_id_value = args[0];
    {
      auto* temp = parent_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.parent_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& index_value = args[1];
    {
      auto temp = index_value.GetIfInt();
      if (!temp.has_value()) {
        params.index = std::nullopt;
        return std::nullopt;
      }
      params.index = *temp;
    }
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace Drop

namespace GetSubtree {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& folders_only_value = args[1];
    {
      auto temp = folders_only_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.folders_only = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const std::vector<extensions::api::bookmarks::BookmarkTreeNode>& results) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(results));

  return create_results;
}
}  // namespace GetSubtree

namespace RemoveTrees {

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
    const base::Value& id_list_value = args[0];
    {
      if (!id_list_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(id_list_value.GetList(), params.id_list)) {
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


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace RemoveTrees

namespace Undo {

}  // namespace Undo

namespace Redo {

}  // namespace Redo

namespace OpenInNewTab {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& params_value = args[1];
    {
      if (!params_value.is_dict()) {
        return std::nullopt;
      }
      else {
        OpenInNewTabParams temp;
        if (!OpenInNewTabParams::Populate(params_value.GetDict(), temp))
          return std::nullopt;
        params.params = std::move(temp);
      }
    }
  }

  return params;
}


}  // namespace OpenInNewTab

namespace OpenInNewWindow {

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
    const base::Value& id_list_value = args[0];
    {
      if (!id_list_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(id_list_value.GetList(), params.id_list)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& incognito_value = args[1];
    {
      auto temp = incognito_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.incognito = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace OpenInNewWindow

namespace OpenInNewTabGroup {

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
    const base::Value& id_list_value = args[0];
    {
      if (!id_list_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(id_list_value.GetList(), params.id_list)) {
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


}  // namespace OpenInNewTabGroup

namespace Import {

base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace Import

namespace Export {

base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace Export

//
// Events
//

namespace OnDragEnter {

const char kEventName[] = "bookmarkManagerPrivate.onDragEnter";

base::ListValue Create(const BookmarkNodeData& bookmark_node_data) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((bookmark_node_data).ToValue());

  return create_results;
}

}  // namespace OnDragEnter

namespace OnDragLeave {

const char kEventName[] = "bookmarkManagerPrivate.onDragLeave";

base::ListValue Create(const BookmarkNodeData& bookmark_node_data) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((bookmark_node_data).ToValue());

  return create_results;
}

}  // namespace OnDragLeave

namespace OnDrop {

const char kEventName[] = "bookmarkManagerPrivate.onDrop";

base::ListValue Create(const BookmarkNodeData& bookmark_node_data) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((bookmark_node_data).ToValue());

  return create_results;
}

}  // namespace OnDrop

}  // namespace bookmark_manager_private
}  // namespace api
}  // namespace extensions

