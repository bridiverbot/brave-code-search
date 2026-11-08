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

#ifndef CHROME_COMMON_EXTENSIONS_API_BOOKMARKS_H__
#define CHROME_COMMON_EXTENSIONS_API_BOOKMARKS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include <string_view>


namespace extensions {
namespace api {
namespace bookmarks {

//
// Properties
//

//
extern const int MAX_WRITE_OPERATIONS_PER_HOUR;

//
extern const int MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE;

// The <code>id</code> associated with the root level node.
extern const char ROOT_NODE_ID[];

//
// Types
//

// Indicates the type of folder.
enum class FolderType {
  kNone = 0,
  kBookmarksBar,
  kOther,
  kMobile,
  kManaged,
  kMaxValue = kManaged,
};


const char* ToString(FolderType as_enum);
FolderType ParseFolderType(std::string_view as_string);
std::u16string GetFolderTypeParseError(std::string_view as_string);

// Indicates the reason why this node is unmodifiable. The <var>managed</var>
// value indicates that this node was configured by the system administrator.
// Omitted if the node can be modified by the user and the extension (default).
enum class BookmarkTreeNodeUnmodifiable {
  kNone = 0,
  kManaged,
  kMaxValue = kManaged,
};


const char* ToString(BookmarkTreeNodeUnmodifiable as_enum);
BookmarkTreeNodeUnmodifiable ParseBookmarkTreeNodeUnmodifiable(std::string_view as_string);
std::u16string GetBookmarkTreeNodeUnmodifiableParseError(std::string_view as_string);

// A node (either a bookmark or a folder) in the bookmark tree.  Child nodes are
// ordered within their parent folder.
struct BookmarkTreeNode {
  BookmarkTreeNode();
  ~BookmarkTreeNode();
  BookmarkTreeNode(const BookmarkTreeNode&) = delete;
  BookmarkTreeNode& operator=(const BookmarkTreeNode&) = delete;
  BookmarkTreeNode(BookmarkTreeNode&& rhs) noexcept;
  BookmarkTreeNode& operator=(BookmarkTreeNode&& rhs) noexcept;

  // Populates a BookmarkTreeNode object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, BookmarkTreeNode& out);

  // Populates a BookmarkTreeNode object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, BookmarkTreeNode& out);

  // Creates a deep copy of BookmarkTreeNode.
  BookmarkTreeNode Clone() const;

  // Creates a BookmarkTreeNode object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<BookmarkTreeNode> FromValue(const base::DictValue& value);

  // Creates a BookmarkTreeNode object from a base::Value, or nullopt on
  // failure.
  static std::optional<BookmarkTreeNode> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisBookmarkTreeNode object.
  base::DictValue ToValue() const;

  // The unique identifier for the node. IDs are unique within the current
  // profile, and they remain valid even after the browser is restarted.
  std::string id;

  // The <code>id</code> of the parent folder.  Omitted for the root node.
  std::optional<std::string> parent_id;

  // The 0-based position of this node within its parent folder.
  std::optional<int> index;

  // The URL navigated to when a user clicks the bookmark. Omitted for folders.
  std::optional<std::string> url;

  // The text displayed for the node.
  std::string title;

  // When this node was created, in milliseconds since the epoch (<code>new
  // Date(dateAdded)</code>).
  std::optional<double> date_added;

  // When this node was last opened, in milliseconds since the epoch. Not set for
  // folders.
  std::optional<double> date_last_used;

  // When the contents of this folder last changed, in milliseconds since the
  // epoch.
  std::optional<double> date_group_modified;

  // If present, this is a folder that is added by the browser and that cannot be
  // modified by the user or the extension. Child nodes may be modified, if this
  // node does not have the <code>unmodifiable</code> property set. Omitted if the
  // node can be modified by the user and the extension (default).<p>There may be
  // zero, one or multiple nodes of each folder type. A folder may be added or
  // removed by the browser, but not via the extensions API.
  FolderType folder_type;

  // Indicates the reason why this node is unmodifiable. The <var>managed</var>
  // value indicates that this node was configured by the system administrator or
  // by the custodian of a supervised user. Omitted if the node can be modified by
  // the user and the extension (default).
  BookmarkTreeNodeUnmodifiable unmodifiable;

  // Whether this node is synced with the user's remote account storage by the
  // browser. This can be used to distinguish between account and local-only
  // versions of the same $(ref:FolderType). The value of this property may change
  // for an existing node, for example as a result of user action.<p>Note: this
  // reflects whether the node is saved to the browser's built-in account
  // provider. It is possible that a node could be synced via a third-party, even
  // if this value is false.</p><p>For managed nodes (nodes where
  // <code>unmodifiable</code> is set to <code>true</code>), this property will
  // always be <code>false</code>.</p>
  bool syncing;

  // An ordered list of children of this node.
  std::optional<std::vector<BookmarkTreeNode>> children;

};

// Object passed to the create() function.
struct CreateDetails {
  CreateDetails();
  ~CreateDetails();
  CreateDetails(const CreateDetails&) = delete;
  CreateDetails& operator=(const CreateDetails&) = delete;
  CreateDetails(CreateDetails&& rhs) noexcept;
  CreateDetails& operator=(CreateDetails&& rhs) noexcept;

  // Populates a CreateDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CreateDetails& out);

  // Populates a CreateDetails object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, CreateDetails& out);

  // Creates a deep copy of CreateDetails.
  CreateDetails Clone() const;

  // Creates a CreateDetails object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<CreateDetails> FromValue(const base::DictValue& value);

  // Creates a CreateDetails object from a base::Value, or nullopt on failure.
  static std::optional<CreateDetails> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCreateDetails object.
  base::DictValue ToValue() const;

  // Defaults to the Other Bookmarks folder.
  std::optional<std::string> parent_id;

  std::optional<int> index;

  std::optional<std::string> title;

  std::optional<std::string> url;

};


//
// Functions
//

namespace Get {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // A single string-valued id, or an array of string-valued ids
  struct IdOrIdList {
    IdOrIdList();
    ~IdOrIdList();
    IdOrIdList(const IdOrIdList&) = delete;
    IdOrIdList& operator=(const IdOrIdList&) = delete;
    IdOrIdList(IdOrIdList&& rhs) noexcept;
    IdOrIdList& operator=(IdOrIdList&& rhs) noexcept;

    // Populates a IdOrIdList object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, IdOrIdList& out);

    // Creates a deep copy of IdOrIdList.
    IdOrIdList Clone() const;

    // Creates a IdOrIdList object from a base::Value, or nullopt on failure.
    static std::optional<IdOrIdList> FromValue(const base::Value& value);
    // Choices:
    std::optional<std::string> as_string;
    std::optional<std::vector<std::string>> as_strings;
  };


  // A single string-valued id, or an array of string-valued ids
  IdOrIdList id_or_id_list;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const std::vector<BookmarkTreeNode>& results);
}  // namespace Results

}  // namespace Get

namespace GetChildren {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string id;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const std::vector<BookmarkTreeNode>& results);
}  // namespace Results

}  // namespace GetChildren

namespace GetRecent {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The maximum number of items to return.
  int number_of_items;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const std::vector<BookmarkTreeNode>& results);
}  // namespace Results

}  // namespace GetRecent

namespace GetTree {

namespace Results {

base::ListValue Create(const std::vector<BookmarkTreeNode>& results);
}  // namespace Results

}  // namespace GetTree

namespace GetSubTree {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The ID of the root of the subtree to retrieve.
  std::string id;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const std::vector<BookmarkTreeNode>& results);
}  // namespace Results

}  // namespace GetSubTree

namespace Search {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Either a string of words and quoted phrases that are matched against bookmark
  // URLs and titles, or an object. If an object, the properties
  // <code>query</code>, <code>url</code>, and <code>title</code> may be specified
  // and bookmarks matching all specified properties will be produced.
  struct Query {
    Query();
    ~Query();
    Query(const Query&) = delete;
    Query& operator=(const Query&) = delete;
    Query(Query&& rhs) noexcept;
    Query& operator=(Query&& rhs) noexcept;

    // Populates a Query object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Query& out);

    // Creates a deep copy of Query.
    Query Clone() const;

    // Creates a Query object from a base::Value, or nullopt on failure.
    static std::optional<Query> FromValue(const base::Value& value);
    // An object specifying properties and values to match when searching. Produces
    // bookmarks matching all properties.
    struct Object {
      Object();
      ~Object();
      Object(const Object&) = delete;
      Object& operator=(const Object&) = delete;
      Object(Object&& rhs) noexcept;
      Object& operator=(Object&& rhs) noexcept;

      // Populates a Object object from a base::Value& instance. Returns whether
      // |out| was successfully populated.
      static bool Populate(const base::Value& value, Object& out);

      // Populates a Object object from a Dict& instance. Returns whether |out| was
      // successfully populated.
      static bool Populate(const base::DictValue& value, Object& out);

      // Creates a deep copy of Object.
      Object Clone() const;

      // Creates a Object object from a base::DictValue, or nullopt on failure.
      static std::optional<Object> FromValue(const base::DictValue& value);

      // Creates a Object object from a base::Value, or nullopt on failure.
      static std::optional<Object> FromValue(const base::Value& value);

      // A string of words and quoted phrases that are matched against bookmark URLs
      // and titles.
      std::optional<std::string> query;

      // The URL of the bookmark; matches verbatim. Note that folders have no URL.
      std::optional<std::string> url;

      // The title of the bookmark; matches verbatim.
      std::optional<std::string> title;

    };


    // Choices:
    std::optional<std::string> as_string;
    std::optional<Object> as_object;
  };


  // Either a string of words and quoted phrases that are matched against bookmark
  // URLs and titles, or an object. If an object, the properties
  // <code>query</code>, <code>url</code>, and <code>title</code> may be specified
  // and bookmarks matching all specified properties will be produced.
  Query query;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const std::vector<BookmarkTreeNode>& results);
}  // namespace Results

}  // namespace Search

namespace Create {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  CreateDetails bookmark;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const BookmarkTreeNode& result);
}  // namespace Results

}  // namespace Create

namespace Move {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Destination {
    Destination();
    ~Destination();
    Destination(const Destination&) = delete;
    Destination& operator=(const Destination&) = delete;
    Destination(Destination&& rhs) noexcept;
    Destination& operator=(Destination&& rhs) noexcept;

    // Populates a Destination object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, Destination& out);

    // Populates a Destination object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::DictValue& value, Destination& out);

    // Creates a deep copy of Destination.
    Destination Clone() const;

    // Creates a Destination object from a base::DictValue, or nullopt on failure.
    static std::optional<Destination> FromValue(const base::DictValue& value);

    // Creates a Destination object from a base::Value, or nullopt on failure.
    static std::optional<Destination> FromValue(const base::Value& value);

    std::optional<std::string> parent_id;

    std::optional<int> index;

  };


  std::string id;

  Destination destination;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const BookmarkTreeNode& result);
}  // namespace Results

}  // namespace Move

namespace Update {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Changes {
    Changes();
    ~Changes();
    Changes(const Changes&) = delete;
    Changes& operator=(const Changes&) = delete;
    Changes(Changes&& rhs) noexcept;
    Changes& operator=(Changes&& rhs) noexcept;

    // Populates a Changes object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Changes& out);

    // Populates a Changes object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::DictValue& value, Changes& out);

    // Creates a deep copy of Changes.
    Changes Clone() const;

    // Creates a Changes object from a base::DictValue, or nullopt on failure.
    static std::optional<Changes> FromValue(const base::DictValue& value);

    // Creates a Changes object from a base::Value, or nullopt on failure.
    static std::optional<Changes> FromValue(const base::Value& value);

    std::optional<std::string> title;

    std::optional<std::string> url;

  };


  std::string id;

  Changes changes;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const BookmarkTreeNode& result);
}  // namespace Results

}  // namespace Update

namespace Remove {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string id;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace Remove

namespace RemoveTree {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string id;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace RemoveTree

//
// Events
//

namespace OnCreated {

extern const char kEventName[];  // "bookmarks.onCreated"

base::ListValue Create(const std::string& id, const BookmarkTreeNode& bookmark);
}  // namespace OnCreated

namespace OnRemoved {

extern const char kEventName[];  // "bookmarks.onRemoved"

struct RemoveInfo {
  RemoveInfo();
  ~RemoveInfo();
  RemoveInfo(const RemoveInfo&) = delete;
  RemoveInfo& operator=(const RemoveInfo&) = delete;
  RemoveInfo(RemoveInfo&& rhs) noexcept;
  RemoveInfo& operator=(RemoveInfo&& rhs) noexcept;

  // Returns a new base::DictValue representing the serialized form of
  // thisRemoveInfo object.
  base::DictValue ToValue() const;

  std::string parent_id;

  int index;

  BookmarkTreeNode node;

};


base::ListValue Create(const std::string& id, const RemoveInfo& remove_info);
}  // namespace OnRemoved

namespace OnChanged {

extern const char kEventName[];  // "bookmarks.onChanged"

struct ChangeInfo {
  ChangeInfo();
  ~ChangeInfo();
  ChangeInfo(const ChangeInfo&) = delete;
  ChangeInfo& operator=(const ChangeInfo&) = delete;
  ChangeInfo(ChangeInfo&& rhs) noexcept;
  ChangeInfo& operator=(ChangeInfo&& rhs) noexcept;

  // Returns a new base::DictValue representing the serialized form of
  // thisChangeInfo object.
  base::DictValue ToValue() const;

  std::string title;

  std::optional<std::string> url;

};


base::ListValue Create(const std::string& id, const ChangeInfo& change_info);
}  // namespace OnChanged

namespace OnMoved {

extern const char kEventName[];  // "bookmarks.onMoved"

struct MoveInfo {
  MoveInfo();
  ~MoveInfo();
  MoveInfo(const MoveInfo&) = delete;
  MoveInfo& operator=(const MoveInfo&) = delete;
  MoveInfo(MoveInfo&& rhs) noexcept;
  MoveInfo& operator=(MoveInfo&& rhs) noexcept;

  // Returns a new base::DictValue representing the serialized form of
  // thisMoveInfo object.
  base::DictValue ToValue() const;

  std::string parent_id;

  int index;

  std::string old_parent_id;

  int old_index;

};


base::ListValue Create(const std::string& id, const MoveInfo& move_info);
}  // namespace OnMoved

namespace OnChildrenReordered {

extern const char kEventName[];  // "bookmarks.onChildrenReordered"

struct ReorderInfo {
  ReorderInfo();
  ~ReorderInfo();
  ReorderInfo(const ReorderInfo&) = delete;
  ReorderInfo& operator=(const ReorderInfo&) = delete;
  ReorderInfo(ReorderInfo&& rhs) noexcept;
  ReorderInfo& operator=(ReorderInfo&& rhs) noexcept;

  // Returns a new base::DictValue representing the serialized form of
  // thisReorderInfo object.
  base::DictValue ToValue() const;

  std::vector<std::string> child_ids;

};


base::ListValue Create(const std::string& id, const ReorderInfo& reorder_info);
}  // namespace OnChildrenReordered

namespace OnImportBegan {

extern const char kEventName[];  // "bookmarks.onImportBegan"

base::ListValue Create();
}  // namespace OnImportBegan

namespace OnImportEnded {

extern const char kEventName[];  // "bookmarks.onImportEnded"

base::ListValue Create();
}  // namespace OnImportEnded

}  // namespace bookmarks
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_BOOKMARKS_H__
