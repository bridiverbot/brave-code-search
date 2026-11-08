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

#ifndef CHROME_COMMON_EXTENSIONS_API_BOOKMARK_MANAGER_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_BOOKMARK_MANAGER_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "chrome/common/extensions/api/bookmarks.h"


namespace extensions {
namespace api {
namespace bookmark_manager_private {

//
// Types
//

struct BookmarkNodeDataElement {
  BookmarkNodeDataElement();
  ~BookmarkNodeDataElement();
  BookmarkNodeDataElement(const BookmarkNodeDataElement&) = delete;
  BookmarkNodeDataElement& operator=(const BookmarkNodeDataElement&) = delete;
  BookmarkNodeDataElement(BookmarkNodeDataElement&& rhs) noexcept;
  BookmarkNodeDataElement& operator=(BookmarkNodeDataElement&& rhs) noexcept;

  // Populates a BookmarkNodeDataElement object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, BookmarkNodeDataElement& out);

  // Populates a BookmarkNodeDataElement object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, BookmarkNodeDataElement& out);

  // Creates a deep copy of BookmarkNodeDataElement.
  BookmarkNodeDataElement Clone() const;

  // Creates a BookmarkNodeDataElement object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<BookmarkNodeDataElement> FromValue(const base::DictValue& value);

  // Creates a BookmarkNodeDataElement object from a base::Value, or nullopt on
  // failure.
  static std::optional<BookmarkNodeDataElement> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisBookmarkNodeDataElement object.
  base::DictValue ToValue() const;

  // The ID of the bookmark. This is only provided if the data is from the same
  // profile.
  std::optional<std::string> id;

  // The ID of the parent of the bookmark. This is only provided if the data is
  // from the same profile.
  std::optional<std::string> parent_id;

  std::string title;

  std::optional<std::string> url;

  std::vector<BookmarkNodeDataElement> children;

};

// Information about the drag and drop data for use with drag and drop events.
struct BookmarkNodeData {
  BookmarkNodeData();
  ~BookmarkNodeData();
  BookmarkNodeData(const BookmarkNodeData&) = delete;
  BookmarkNodeData& operator=(const BookmarkNodeData&) = delete;
  BookmarkNodeData(BookmarkNodeData&& rhs) noexcept;
  BookmarkNodeData& operator=(BookmarkNodeData&& rhs) noexcept;

  // Populates a BookmarkNodeData object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, BookmarkNodeData& out);

  // Populates a BookmarkNodeData object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, BookmarkNodeData& out);

  // Creates a deep copy of BookmarkNodeData.
  BookmarkNodeData Clone() const;

  // Creates a BookmarkNodeData object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<BookmarkNodeData> FromValue(const base::DictValue& value);

  // Creates a BookmarkNodeData object from a base::Value, or nullopt on
  // failure.
  static std::optional<BookmarkNodeData> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisBookmarkNodeData object.
  base::DictValue ToValue() const;

  bool same_profile;

  std::vector<BookmarkNodeDataElement> elements;

};

// Parameters for the Open In New Tab method
struct OpenInNewTabParams {
  OpenInNewTabParams();
  ~OpenInNewTabParams();
  OpenInNewTabParams(const OpenInNewTabParams&) = delete;
  OpenInNewTabParams& operator=(const OpenInNewTabParams&) = delete;
  OpenInNewTabParams(OpenInNewTabParams&& rhs) noexcept;
  OpenInNewTabParams& operator=(OpenInNewTabParams&& rhs) noexcept;

  // Populates a OpenInNewTabParams object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OpenInNewTabParams& out);

  // Populates a OpenInNewTabParams object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, OpenInNewTabParams& out);

  // Creates a deep copy of OpenInNewTabParams.
  OpenInNewTabParams Clone() const;

  // Creates a OpenInNewTabParams object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<OpenInNewTabParams> FromValue(const base::DictValue& value);

  // Creates a OpenInNewTabParams object from a base::Value, or nullopt on
  // failure.
  static std::optional<OpenInNewTabParams> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisOpenInNewTabParams object.
  base::DictValue ToValue() const;

  // Whether this tab should be active.
  bool active;

  // Whether this tab should enter into a split view alongside the active tab.
  bool split;

};


//
// Functions
//

namespace Copy {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // An array of string-valued ids
  std::vector<std::string> id_list;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace Copy

namespace Cut {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // An array of string-valued ids
  std::vector<std::string> id_list;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace Cut

namespace Paste {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string parent_id;

  // An array of string-valued ids for selected bookmarks.
  std::optional<std::vector<std::string>> selected_id_list;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace Paste

namespace CanPaste {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The ID of the folder to paste into.
  std::string parent_id;


 private:
  Params();
};

namespace Results {

base::ListValue Create(bool result);
}  // namespace Results

}  // namespace CanPaste

namespace IsActiveTabInSplit {

namespace Results {

base::ListValue Create(bool result);
}  // namespace Results

}  // namespace IsActiveTabInSplit

namespace SortChildren {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The ID of the folder to sort the children of.
  std::string parent_id;


 private:
  Params();
};

}  // namespace SortChildren

namespace StartDrag {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // An array of string-valued ids.
  std::vector<std::string> id_list;

  // The index of the dragged node in |idList|
  int drag_node_index;

  // True if the drag was initiated from touch.
  bool is_from_touch;

  // The clientX of the dragStart event
  int x;

  // The clientY of the dragStart event
  int y;


 private:
  Params();
};

}  // namespace StartDrag

namespace Drop {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The ID of the folder that the drop was made.
  std::string parent_id;

  // The index of the position to drop at. If left out the dropped items will be
  // placed at the end of the existing children.
  std::optional<int> index;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace Drop

namespace GetSubtree {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // ID of the root of the tree to pull.  If empty, the entire tree will be
  // returned.
  std::string id;

  // Pass true to only return folders.
  bool folders_only;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const std::vector<extensions::api::bookmarks::BookmarkTreeNode>& results);
}  // namespace Results

}  // namespace GetSubtree

namespace RemoveTrees {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // An array of string-valued ids.
  std::vector<std::string> id_list;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace RemoveTrees

namespace Undo {

}  // namespace Undo

namespace Redo {

}  // namespace Redo

namespace OpenInNewTab {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // One string-valued id.
  std::string id;

  // Parameters for the new tab the given bookmark is opened into.
  std::optional<OpenInNewTabParams> params;


 private:
  Params();
};

}  // namespace OpenInNewTab

namespace OpenInNewWindow {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // An array of string-valued ids.
  std::vector<std::string> id_list;

  // Whether the new window should be an incognito window.
  bool incognito;


 private:
  Params();
};

}  // namespace OpenInNewWindow

namespace OpenInNewTabGroup {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // An array of string-valued ids.
  std::vector<std::string> id_list;


 private:
  Params();
};

}  // namespace OpenInNewTabGroup

namespace Import {

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace Import

namespace Export {

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace Export

//
// Events
//

namespace OnDragEnter {

extern const char kEventName[];  // "bookmarkManagerPrivate.onDragEnter"

base::ListValue Create(const BookmarkNodeData& bookmark_node_data);
}  // namespace OnDragEnter

namespace OnDragLeave {

extern const char kEventName[];  // "bookmarkManagerPrivate.onDragLeave"

base::ListValue Create(const BookmarkNodeData& bookmark_node_data);
}  // namespace OnDragLeave

namespace OnDrop {

extern const char kEventName[];  // "bookmarkManagerPrivate.onDrop"

base::ListValue Create(const BookmarkNodeData& bookmark_node_data);
}  // namespace OnDrop

}  // namespace bookmark_manager_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_BOOKMARK_MANAGER_PRIVATE_H__
