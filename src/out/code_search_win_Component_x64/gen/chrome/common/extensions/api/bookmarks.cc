// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/bookmarks.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/bookmarks.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#include "chrome/common/extensions/api/bookmarks.h"

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
namespace bookmarks {
//
// Properties
//

const int MAX_WRITE_OPERATIONS_PER_HOUR = 1000000;

const int MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE = 1000000;

const char ROOT_NODE_ID[] = "0";

//
// Types
//

const char* ToString(FolderType enum_param) {
  switch (enum_param) {
    case FolderType::kBookmarksBar:
      return "bookmarks-bar";
    case FolderType::kOther:
      return "other";
    case FolderType::kMobile:
      return "mobile";
    case FolderType::kManaged:
      return "managed";
    case FolderType::kNone:
      return "";
  }
  NOTREACHED();
}

FolderType ParseFolderType(std::string_view enum_string) {
  if (enum_string == "bookmarks-bar")
    return FolderType::kBookmarksBar;
  if (enum_string == "other")
    return FolderType::kOther;
  if (enum_string == "mobile")
    return FolderType::kMobile;
  if (enum_string == "managed")
    return FolderType::kManaged;
  return FolderType::kNone;
}

std::u16string GetFolderTypeParseError(std::string_view enum_string) {
  return u"expected \"bookmarks-bar\" or \"other\" or \"mobile\" or \"managed\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(BookmarkTreeNodeUnmodifiable enum_param) {
  switch (enum_param) {
    case BookmarkTreeNodeUnmodifiable::kManaged:
      return "managed";
    case BookmarkTreeNodeUnmodifiable::kNone:
      return "";
  }
  NOTREACHED();
}

BookmarkTreeNodeUnmodifiable ParseBookmarkTreeNodeUnmodifiable(std::string_view enum_string) {
  if (enum_string == "managed")
    return BookmarkTreeNodeUnmodifiable::kManaged;
  return BookmarkTreeNodeUnmodifiable::kNone;
}

std::u16string GetBookmarkTreeNodeUnmodifiableParseError(std::string_view enum_string) {
  return u"expected \"managed\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


BookmarkTreeNode::BookmarkTreeNode()
: folder_type(),
unmodifiable(),
syncing(false) {}

BookmarkTreeNode::~BookmarkTreeNode() = default;
BookmarkTreeNode::BookmarkTreeNode(BookmarkTreeNode&& rhs) noexcept = default;
BookmarkTreeNode& BookmarkTreeNode::operator=(BookmarkTreeNode&& rhs) noexcept = default;
BookmarkTreeNode BookmarkTreeNode::Clone() const {
  BookmarkTreeNode out;
  out.id = id;
  out.parent_id = parent_id;
  out.index = index;
  out.url = url;
  out.title = title;
  out.date_added = date_added;
  out.date_last_used = date_last_used;
  out.date_group_modified = date_group_modified;
  out.folder_type = folder_type;
  out.unmodifiable = unmodifiable;
  out.syncing = syncing;
  if (children) {
    out.children.emplace();
    out.children->reserve(children->size());
    for (const auto& element : *children) {
      json_schema_compiler::util::AppendToContainer(*out.children, element.Clone());
    }
  }
  return out;
}

// static
bool BookmarkTreeNode::Populate(
    const base::DictValue& dict, BookmarkTreeNode& out) {
  out.folder_type = FolderType();
  out.unmodifiable = BookmarkTreeNodeUnmodifiable();
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

  const base::Value* index_value = dict.Find("index");
  if (index_value) {
    {
      auto temp = (*index_value).GetIfInt();
      if (!temp.has_value()) {
        out.index = std::nullopt;
        return false;
      }
      out.index = *temp;
    }
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

  const base::Value* date_added_value = dict.Find("dateAdded");
  if (date_added_value) {
    {
      auto temp = (*date_added_value).GetIfDouble();
      if (!temp.has_value()) {
        out.date_added = std::nullopt;
        return false;
      }
      out.date_added = *temp;
    }
  }

  const base::Value* date_last_used_value = dict.Find("dateLastUsed");
  if (date_last_used_value) {
    {
      auto temp = (*date_last_used_value).GetIfDouble();
      if (!temp.has_value()) {
        out.date_last_used = std::nullopt;
        return false;
      }
      out.date_last_used = *temp;
    }
  }

  const base::Value* date_group_modified_value = dict.Find("dateGroupModified");
  if (date_group_modified_value) {
    {
      auto temp = (*date_group_modified_value).GetIfDouble();
      if (!temp.has_value()) {
        out.date_group_modified = std::nullopt;
        return false;
      }
      out.date_group_modified = *temp;
    }
  }

  const base::Value* folder_type_value = dict.Find("folderType");
  if (folder_type_value) {
    {
      const std::string* folder_type_as_string = (*folder_type_value).GetIfString();
      if (!folder_type_as_string) {
        return false;
      }
      out.folder_type = ParseFolderType(*folder_type_as_string);
      if (out.folder_type == FolderType()) {
        return false;
      }
    }
    } else {
    out.folder_type = FolderType();
  }

  const base::Value* unmodifiable_value = dict.Find("unmodifiable");
  if (unmodifiable_value) {
    {
      const std::string* bookmark_tree_node_unmodifiable_as_string = (*unmodifiable_value).GetIfString();
      if (!bookmark_tree_node_unmodifiable_as_string) {
        return false;
      }
      out.unmodifiable = ParseBookmarkTreeNodeUnmodifiable(*bookmark_tree_node_unmodifiable_as_string);
      if (out.unmodifiable == BookmarkTreeNodeUnmodifiable()) {
        return false;
      }
    }
    } else {
    out.unmodifiable = BookmarkTreeNodeUnmodifiable();
  }

  const base::Value* syncing_value = dict.Find("syncing");
  if (!syncing_value) {
    return false;
  }
  {
    auto temp = (*syncing_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.syncing = *temp;
  }

  const base::Value* children_value = dict.Find("children");
  if (children_value) {
    {
      if (!(*children_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*children_value).GetList(), out.children)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool BookmarkTreeNode::Populate(
    const base::Value& value, BookmarkTreeNode& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<BookmarkTreeNode> BookmarkTreeNode::FromValue(const base::DictValue& value) {
  BookmarkTreeNode out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<BookmarkTreeNode> BookmarkTreeNode::FromValue(const base::Value& value) {
  BookmarkTreeNode out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue BookmarkTreeNode::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("id", this->id);

  if (this->parent_id) {
    to_value_result.Set("parentId", *this->parent_id);

  }
  if (this->index) {
    to_value_result.Set("index", *this->index);

  }
  if (this->url) {
    to_value_result.Set("url", *this->url);

  }
  to_value_result.Set("title", this->title);

  if (this->date_added) {
    to_value_result.Set("dateAdded", *this->date_added);

  }
  if (this->date_last_used) {
    to_value_result.Set("dateLastUsed", *this->date_last_used);

  }
  if (this->date_group_modified) {
    to_value_result.Set("dateGroupModified", *this->date_group_modified);

  }
  if (this->folder_type != FolderType()) {
    to_value_result.Set("folderType", bookmarks::ToString(this->folder_type));

  }
  if (this->unmodifiable != BookmarkTreeNodeUnmodifiable()) {
    to_value_result.Set("unmodifiable", bookmarks::ToString(this->unmodifiable));

  }
  to_value_result.Set("syncing", this->syncing);

  if (this->children) {
    to_value_result.Set("children", json_schema_compiler::util::CreateValueFromArray(*this->children));

  }

  return to_value_result;
}


CreateDetails::CreateDetails()
 {}

CreateDetails::~CreateDetails() = default;
CreateDetails::CreateDetails(CreateDetails&& rhs) noexcept = default;
CreateDetails& CreateDetails::operator=(CreateDetails&& rhs) noexcept = default;
CreateDetails CreateDetails::Clone() const {
  CreateDetails out;
  out.parent_id = parent_id;
  out.index = index;
  out.title = title;
  out.url = url;
  return out;
}

// static
bool CreateDetails::Populate(
    const base::DictValue& dict, CreateDetails& out) {
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

  const base::Value* index_value = dict.Find("index");
  if (index_value) {
    {
      auto temp = (*index_value).GetIfInt();
      if (!temp.has_value()) {
        out.index = std::nullopt;
        return false;
      }
      out.index = *temp;
    }
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

  return true;
}

// static
bool CreateDetails::Populate(
    const base::Value& value, CreateDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CreateDetails> CreateDetails::FromValue(const base::DictValue& value) {
  CreateDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CreateDetails> CreateDetails::FromValue(const base::Value& value) {
  CreateDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue CreateDetails::ToValue() const {
  base::DictValue to_value_result;

  if (this->parent_id) {
    to_value_result.Set("parentId", *this->parent_id);

  }
  if (this->index) {
    to_value_result.Set("index", *this->index);

  }
  if (this->title) {
    to_value_result.Set("title", *this->title);

  }
  if (this->url) {
    to_value_result.Set("url", *this->url);

  }

  return to_value_result;
}



//
// Functions
//

namespace Get {

Params::IdOrIdList::IdOrIdList()
 {}

Params::IdOrIdList::~IdOrIdList() = default;
Params::IdOrIdList::IdOrIdList(IdOrIdList&& rhs) noexcept = default;
Params::IdOrIdList& Params::IdOrIdList::operator=(IdOrIdList&& rhs) noexcept = default;
Params::IdOrIdList Params::IdOrIdList::Clone() const {
  IdOrIdList out;
  out.as_string = as_string;
  out.as_strings = as_strings;
  return out;
}

// static
bool Params::IdOrIdList::Populate(
    const base::Value& value, IdOrIdList& out) {
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
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_strings)) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

// static
std::optional<Params::IdOrIdList> Params::IdOrIdList::FromValue(const base::Value& value) {
  IdOrIdList out;
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
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& id_or_id_list_value = args[0];
    {
      if (!IdOrIdList::Populate(id_or_id_list_value, params.id_or_id_list))
        return std::nullopt;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const std::vector<BookmarkTreeNode>& results) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(results));

  return create_results;
}
}  // namespace Get

namespace GetChildren {

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

  return params;
}


base::ListValue Results::Create(const std::vector<BookmarkTreeNode>& results) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(results));

  return create_results;
}
}  // namespace GetChildren

namespace GetRecent {

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
    const base::Value& number_of_items_value = args[0];
    {
      auto temp = number_of_items_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.number_of_items = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const std::vector<BookmarkTreeNode>& results) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(results));

  return create_results;
}
}  // namespace GetRecent

namespace GetTree {

base::ListValue Results::Create(const std::vector<BookmarkTreeNode>& results) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(results));

  return create_results;
}
}  // namespace GetTree

namespace GetSubTree {

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

  return params;
}


base::ListValue Results::Create(const std::vector<BookmarkTreeNode>& results) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(results));

  return create_results;
}
}  // namespace GetSubTree

namespace Search {

Params::Query::Object::Object()
 {}

Params::Query::Object::~Object() = default;
Params::Query::Object::Object(Object&& rhs) noexcept = default;
Params::Query::Object& Params::Query::Object::operator=(Object&& rhs) noexcept = default;
Params::Query::Object Params::Query::Object::Clone() const {
  Object out;
  out.query = query;
  out.url = url;
  out.title = title;
  return out;
}

// static
bool Params::Query::Object::Populate(
    const base::DictValue& dict, Object& out) {
  const base::Value* query_value = dict.Find("query");
  if (query_value) {
    {
      auto* temp = (*query_value).GetIfString();
      if (!temp) {
        out.query = std::nullopt;
        return false;
      }
      out.query = *temp;
    }
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

  return true;
}

// static
bool Params::Query::Object::Populate(
    const base::Value& value, Object& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Query::Object> Params::Query::Object::FromValue(const base::DictValue& value) {
  Object out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Query::Object> Params::Query::Object::FromValue(const base::Value& value) {
  Object out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}



Params::Query::Query()
 {}

Params::Query::~Query() = default;
Params::Query::Query(Query&& rhs) noexcept = default;
Params::Query& Params::Query::operator=(Query&& rhs) noexcept = default;
Params::Query Params::Query::Clone() const {
  Query out;
  out.as_string = as_string;
  if (as_object) {
    out.as_object = as_object->Clone();
  }
  return out;
}

// static
bool Params::Query::Populate(
    const base::Value& value, Query& out) {
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
  if (value.type() == base::Value::Type::DICT) {
    {
      if (!value.is_dict()) {
        return false;
      }
      else {
        Object temp;
        if (!Object::Populate(value.GetDict(), temp))
          return false;
        out.as_object = std::move(temp);
      }
    }
    return true;
  }
  return false;
}

// static
std::optional<Params::Query> Params::Query::FromValue(const base::Value& value) {
  Query out;
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
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& query_value = args[0];
    {
      if (!Query::Populate(query_value, params.query))
        return std::nullopt;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const std::vector<BookmarkTreeNode>& results) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(results));

  return create_results;
}
}  // namespace Search

namespace Create {

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
    const base::Value& bookmark_value = args[0];
    {
      if (!bookmark_value.is_dict()) {
        return std::nullopt;
      }
      if (!CreateDetails::Populate(bookmark_value.GetDict(), params.bookmark)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const BookmarkTreeNode& result) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace Create

namespace Move {

Params::Destination::Destination()
 {}

Params::Destination::~Destination() = default;
Params::Destination::Destination(Destination&& rhs) noexcept = default;
Params::Destination& Params::Destination::operator=(Destination&& rhs) noexcept = default;
Params::Destination Params::Destination::Clone() const {
  Destination out;
  out.parent_id = parent_id;
  out.index = index;
  return out;
}

// static
bool Params::Destination::Populate(
    const base::DictValue& dict, Destination& out) {
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

  const base::Value* index_value = dict.Find("index");
  if (index_value) {
    {
      auto temp = (*index_value).GetIfInt();
      if (!temp.has_value()) {
        out.index = std::nullopt;
        return false;
      }
      out.index = *temp;
    }
  }

  return true;
}

// static
bool Params::Destination::Populate(
    const base::Value& value, Destination& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Destination> Params::Destination::FromValue(const base::DictValue& value) {
  Destination out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Destination> Params::Destination::FromValue(const base::Value& value) {
  Destination out;
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
    const base::Value& destination_value = args[1];
    {
      if (!destination_value.is_dict()) {
        return std::nullopt;
      }
      if (!Destination::Populate(destination_value.GetDict(), params.destination)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const BookmarkTreeNode& result) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace Move

namespace Update {

Params::Changes::Changes()
 {}

Params::Changes::~Changes() = default;
Params::Changes::Changes(Changes&& rhs) noexcept = default;
Params::Changes& Params::Changes::operator=(Changes&& rhs) noexcept = default;
Params::Changes Params::Changes::Clone() const {
  Changes out;
  out.title = title;
  out.url = url;
  return out;
}

// static
bool Params::Changes::Populate(
    const base::DictValue& dict, Changes& out) {
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

  return true;
}

// static
bool Params::Changes::Populate(
    const base::Value& value, Changes& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Changes> Params::Changes::FromValue(const base::DictValue& value) {
  Changes out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Changes> Params::Changes::FromValue(const base::Value& value) {
  Changes out;
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
    const base::Value& changes_value = args[1];
    {
      if (!changes_value.is_dict()) {
        return std::nullopt;
      }
      if (!Changes::Populate(changes_value.GetDict(), params.changes)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const BookmarkTreeNode& result) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace Update

namespace Remove {

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

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace Remove

namespace RemoveTree {

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

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace RemoveTree

//
// Events
//

namespace OnCreated {

const char kEventName[] = "bookmarks.onCreated";

base::ListValue Create(const std::string& id, const BookmarkTreeNode& bookmark) {
  base::ListValue create_results;
  create_results.reserve(2);
  create_results.Append(id);

  create_results.Append((bookmark).ToValue());

  return create_results;
}

}  // namespace OnCreated

namespace OnRemoved {

const char kEventName[] = "bookmarks.onRemoved";

RemoveInfo::RemoveInfo()
: index(0) {}

RemoveInfo::~RemoveInfo() = default;
RemoveInfo::RemoveInfo(RemoveInfo&& rhs) noexcept = default;
RemoveInfo& RemoveInfo::operator=(RemoveInfo&& rhs) noexcept = default;
base::DictValue RemoveInfo::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("parentId", this->parent_id);

  to_value_result.Set("index", this->index);

  to_value_result.Set("node", (this->node).ToValue());


  return to_value_result;
}


base::ListValue Create(const std::string& id, const RemoveInfo& remove_info) {
  base::ListValue create_results;
  create_results.reserve(2);
  create_results.Append(id);

  create_results.Append((remove_info).ToValue());

  return create_results;
}

}  // namespace OnRemoved

namespace OnChanged {

const char kEventName[] = "bookmarks.onChanged";

ChangeInfo::ChangeInfo()
 {}

ChangeInfo::~ChangeInfo() = default;
ChangeInfo::ChangeInfo(ChangeInfo&& rhs) noexcept = default;
ChangeInfo& ChangeInfo::operator=(ChangeInfo&& rhs) noexcept = default;
base::DictValue ChangeInfo::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("title", this->title);

  if (this->url) {
    to_value_result.Set("url", *this->url);

  }

  return to_value_result;
}


base::ListValue Create(const std::string& id, const ChangeInfo& change_info) {
  base::ListValue create_results;
  create_results.reserve(2);
  create_results.Append(id);

  create_results.Append((change_info).ToValue());

  return create_results;
}

}  // namespace OnChanged

namespace OnMoved {

const char kEventName[] = "bookmarks.onMoved";

MoveInfo::MoveInfo()
: index(0),
old_index(0) {}

MoveInfo::~MoveInfo() = default;
MoveInfo::MoveInfo(MoveInfo&& rhs) noexcept = default;
MoveInfo& MoveInfo::operator=(MoveInfo&& rhs) noexcept = default;
base::DictValue MoveInfo::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("parentId", this->parent_id);

  to_value_result.Set("index", this->index);

  to_value_result.Set("oldParentId", this->old_parent_id);

  to_value_result.Set("oldIndex", this->old_index);


  return to_value_result;
}


base::ListValue Create(const std::string& id, const MoveInfo& move_info) {
  base::ListValue create_results;
  create_results.reserve(2);
  create_results.Append(id);

  create_results.Append((move_info).ToValue());

  return create_results;
}

}  // namespace OnMoved

namespace OnChildrenReordered {

const char kEventName[] = "bookmarks.onChildrenReordered";

ReorderInfo::ReorderInfo()
 {}

ReorderInfo::~ReorderInfo() = default;
ReorderInfo::ReorderInfo(ReorderInfo&& rhs) noexcept = default;
ReorderInfo& ReorderInfo::operator=(ReorderInfo&& rhs) noexcept = default;
base::DictValue ReorderInfo::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("childIds", json_schema_compiler::util::CreateValueFromArray(this->child_ids));


  return to_value_result;
}


base::ListValue Create(const std::string& id, const ReorderInfo& reorder_info) {
  base::ListValue create_results;
  create_results.reserve(2);
  create_results.Append(id);

  create_results.Append((reorder_info).ToValue());

  return create_results;
}

}  // namespace OnChildrenReordered

namespace OnImportBegan {

const char kEventName[] = "bookmarks.onImportBegan";

base::ListValue Create() {
  base::ListValue create_results;

  return create_results;
}

}  // namespace OnImportBegan

namespace OnImportEnded {

const char kEventName[] = "bookmarks.onImportEnded";

base::ListValue Create() {
  base::ListValue create_results;

  return create_results;
}

}  // namespace OnImportEnded

}  // namespace bookmarks
}  // namespace api
}  // namespace extensions

