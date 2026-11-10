// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/permissions.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/permissions.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#ifndef EXTENSIONS_COMMON_API_PERMISSIONS_H__
#define EXTENSIONS_COMMON_API_PERMISSIONS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace permissions {

//
// Types
//

struct Permissions {
  Permissions();
  ~Permissions();
  Permissions(const Permissions&) = delete;
  Permissions& operator=(const Permissions&) = delete;
  Permissions(Permissions&& rhs) noexcept;
  Permissions& operator=(Permissions&& rhs) noexcept;

  // Populates a Permissions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Permissions& out);

  // Populates a Permissions object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, Permissions& out);

  // Creates a deep copy of Permissions.
  Permissions Clone() const;

  // Creates a Permissions object from a base::DictValue, or nullopt on failure.
  static std::optional<Permissions> FromValue(const base::DictValue& value);

  // Creates a Permissions object from a base::Value, or nullopt on failure.
  static std::optional<Permissions> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPermissions object.
  base::DictValue ToValue() const;

  // List of named permissions (does not include hosts or origins).
  std::optional<std::vector<std::string>> permissions;

  // The list of host permissions, including those specified in the
  // <code>optional_permissions</code> or <code>permissions</code> keys in the
  // manifest, and those associated with <a
  // href='/docs/extensions/develop/concepts/content-scripts'>Content Scripts</a>.
  std::optional<std::vector<std::string>> origins;

};


//
// Functions
//

namespace GetAll {

namespace Results {

// The extension's active permissions. Note that the <code>origins</code>
// property will contain granted origins from those specified in the
// <code>permissions</code> and <code>optional_permissions</code> keys in the
// manifest and those associated with <a
// href='/docs/extensions/develop/concepts/content-scripts'>Content Scripts</a>.
base::ListValue Create(const Permissions& permissions);
}  // namespace Results

}  // namespace GetAll

namespace Contains {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  Permissions permissions;


 private:
  Params();
};

namespace Results {

// True if the extension has the specified permissions. If an origin is
// specified as both an optional permission and a content script match pattern,
// this will return <code>false</code> unless both permissions are granted.
base::ListValue Create(bool result);
}  // namespace Results

}  // namespace Contains

namespace Request {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  Permissions permissions;


 private:
  Params();
};

namespace Results {

// True if the user granted the specified permissions.
base::ListValue Create(bool granted);
}  // namespace Results

}  // namespace Request

namespace Remove {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  Permissions permissions;


 private:
  Params();
};

namespace Results {

// True if the permissions were removed.
base::ListValue Create(bool removed);
}  // namespace Results

}  // namespace Remove

namespace AddHostAccessRequest {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Request {
    Request();
    ~Request();
    Request(const Request&) = delete;
    Request& operator=(const Request&) = delete;
    Request(Request&& rhs) noexcept;
    Request& operator=(Request&& rhs) noexcept;

    // Populates a Request object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Request& out);

    // Populates a Request object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::DictValue& value, Request& out);

    // Creates a deep copy of Request.
    Request Clone() const;

    // Creates a Request object from a base::DictValue, or nullopt on failure.
    static std::optional<Request> FromValue(const base::DictValue& value);

    // Creates a Request object from a base::Value, or nullopt on failure.
    static std::optional<Request> FromValue(const base::Value& value);

    // The id of a document where host access requests can be shown. Must be the
    // top-level document within a tab. If provided, the request is shown on the tab
    // of the specified document and is removed when the document navigates to a new
    // origin. Adding a new request will override any existent request for `tabId`.
    // This or `tabId` must be specified.
    std::optional<std::string> document_id;

    // The id of the tab where host access requests can be shown. If provided, the
    // request is shown on the specified tab and is removed when the tab navigates
    // to a new origin. Adding a new request will override an existent request for
    // `documentId`. This or `documentId` must be specified.
    std::optional<double> tab_id;

    // The URL pattern where host access requests can be shown. If provided, host
    // access requests will only be shown on URLs that match this pattern.
    std::optional<std::string> pattern;

  };


  Request request;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace AddHostAccessRequest

namespace RemoveHostAccessRequest {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Request {
    Request();
    ~Request();
    Request(const Request&) = delete;
    Request& operator=(const Request&) = delete;
    Request(Request&& rhs) noexcept;
    Request& operator=(Request&& rhs) noexcept;

    // Populates a Request object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Request& out);

    // Populates a Request object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::DictValue& value, Request& out);

    // Creates a deep copy of Request.
    Request Clone() const;

    // Creates a Request object from a base::DictValue, or nullopt on failure.
    static std::optional<Request> FromValue(const base::DictValue& value);

    // Creates a Request object from a base::Value, or nullopt on failure.
    static std::optional<Request> FromValue(const base::Value& value);

    // The id of a document where host access request will be removed. Must be the
    // top-level document within a tab. This or `tabId` must be specified.
    std::optional<std::string> document_id;

    // The id of the tab where host access request will be removed. This or
    // `documentId` must be specified.
    std::optional<double> tab_id;

    // The URL pattern where host access request will be removed. If provided, this
    // must exactly match the pattern of an existing host access request.
    std::optional<std::string> pattern;

  };


  Request request;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace RemoveHostAccessRequest

//
// Events
//

namespace OnAdded {

extern const char kEventName[];  // "permissions.onAdded"

// The newly acquired permissions.
base::ListValue Create(const Permissions& permissions);
}  // namespace OnAdded

namespace OnRemoved {

extern const char kEventName[];  // "permissions.onRemoved"

// The permissions that have been removed.
base::ListValue Create(const Permissions& permissions);
}  // namespace OnRemoved

}  // namespace permissions
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_PERMISSIONS_H__
