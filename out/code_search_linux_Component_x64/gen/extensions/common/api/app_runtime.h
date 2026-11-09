// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/app_runtime.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/app_runtime.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#ifndef EXTENSIONS_COMMON_API_APP_RUNTIME_H__
#define EXTENSIONS_COMMON_API_APP_RUNTIME_H__

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
namespace app_runtime {

//
// Types
//

struct LaunchItem {
  LaunchItem();
  ~LaunchItem();
  LaunchItem(const LaunchItem&) = delete;
  LaunchItem& operator=(const LaunchItem&) = delete;
  LaunchItem(LaunchItem&& rhs) noexcept;
  LaunchItem& operator=(LaunchItem&& rhs) noexcept;

  // Populates a LaunchItem object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, LaunchItem& out);

  // Populates a LaunchItem object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, LaunchItem& out);

  // Creates a deep copy of LaunchItem.
  LaunchItem Clone() const;

  // Creates a LaunchItem object from a base::DictValue, or nullopt on failure.
  static std::optional<LaunchItem> FromValue(const base::DictValue& value);

  // Creates a LaunchItem object from a base::Value, or nullopt on failure.
  static std::optional<LaunchItem> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisLaunchItem object.
  base::DictValue ToValue() const;

  // Entry for the item.
  struct Entry {
    Entry();
    ~Entry();
    Entry(const Entry&) = delete;
    Entry& operator=(const Entry&) = delete;
    Entry(Entry&& rhs) noexcept;
    Entry& operator=(Entry&& rhs) noexcept;

    // Populates a Entry object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Entry& out);

    // Populates a Entry object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::DictValue& value, Entry& out);

    // Creates a deep copy of Entry.
    Entry Clone() const;

    // Creates a Entry object from a base::DictValue, or nullopt on failure.
    static std::optional<Entry> FromValue(const base::DictValue& value);

    // Creates a Entry object from a base::Value, or nullopt on failure.
    static std::optional<Entry> FromValue(const base::Value& value);

    // Returns a new base::DictValue representing the serialized form of thisEntry
    // object.
    base::DictValue ToValue() const;

    base::DictValue additional_properties;
  };


  // Entry for the item.
  Entry entry;

  // The MIME type of the file.
  std::optional<std::string> type;

};

// Enumeration of app launch sources. This should be kept in sync with
// AppLaunchSource in components/services/app_service/public/mojom/types.mojom,
// and GetLaunchSourceEnum() in
// extensions/browser/api/app_runtime/app_runtime_api.cc. Note the enumeration
// is used in UMA histogram so entries should not be re-ordered or removed.
enum class LaunchSource {
  kNone = 0,
  kUntracked,
  kAppLauncher,
  kNewTabPage,
  kReload,
  kRestart,
  kLoadAndLaunch,
  kCommandLine,
  kFileHandler,
  kUrlHandler,
  kSystemTray,
  kAboutPage,
  kKeyboard,
  kExtensionsPage,
  kManagementApi,
  kEphemeralApp,
  kBackground,
  kKiosk,
  kChromeInternal,
  kTest,
  kInstalledNotification,
  kContextMenu,
  kArc,
  kIntentUrl,
  kAppHomePage,
  kFocusMode,
  kSparky,
  kMaxValue = kSparky,
};


const char* ToString(LaunchSource as_enum);
LaunchSource ParseLaunchSource(std::string_view as_string);
std::u16string GetLaunchSourceParseError(std::string_view as_string);

struct LaunchData {
  LaunchData();
  ~LaunchData();
  LaunchData(const LaunchData&) = delete;
  LaunchData& operator=(const LaunchData&) = delete;
  LaunchData(LaunchData&& rhs) noexcept;
  LaunchData& operator=(LaunchData&& rhs) noexcept;

  // Populates a LaunchData object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, LaunchData& out);

  // Populates a LaunchData object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, LaunchData& out);

  // Creates a deep copy of LaunchData.
  LaunchData Clone() const;

  // Creates a LaunchData object from a base::DictValue, or nullopt on failure.
  static std::optional<LaunchData> FromValue(const base::DictValue& value);

  // Creates a LaunchData object from a base::Value, or nullopt on failure.
  static std::optional<LaunchData> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisLaunchData object.
  base::DictValue ToValue() const;

  // The ID of the file or URL handler that the app is being invoked with. Handler
  // IDs are the top-level keys in the <code>file_handlers</code> and/or
  // <code>url_handlers</code> dictionaries in the manifest.
  std::optional<std::string> id;

  // The file entries for the <code>onLaunched</code> event triggered by a
  // matching file handler in the <code>file_handlers</code> manifest key.
  std::optional<std::vector<LaunchItem>> items;

  // The URL for the <code>onLaunched</code> event triggered by a matching URL
  // handler in the <code>url_handlers</code> manifest key.
  std::optional<std::string> url;

  // The referrer URL for the <code>onLaunched</code> event triggered by a
  // matching URL handler in the <code>url_handlers</code> manifest key.
  std::optional<std::string> referrer_url;

  // Whether the app is launched in a Chrome OS Demo Mode session. Used for
  // default-installed Demo Mode Chrome apps.
  std::optional<bool> is_demo_session;

  // Whether the app is being launched in a <a
  // href="https://support.google.com/chromebook/answer/3134673">Chrome OS kiosk
  // session</a>.
  std::optional<bool> is_kiosk_session;

  // Whether the app is being launched in a <a
  // href="https://support.google.com/chrome/a/answer/3017014">Chrome OS public
  // session</a>.
  std::optional<bool> is_public_session;

  // Where the app is launched from.
  LaunchSource source;

};

struct EmbedRequest {
  EmbedRequest();
  ~EmbedRequest();
  EmbedRequest(const EmbedRequest&) = delete;
  EmbedRequest& operator=(const EmbedRequest&) = delete;
  EmbedRequest(EmbedRequest&& rhs) noexcept;
  EmbedRequest& operator=(EmbedRequest&& rhs) noexcept;

  // Populates a EmbedRequest object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EmbedRequest& out);

  // Populates a EmbedRequest object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, EmbedRequest& out);

  // Creates a deep copy of EmbedRequest.
  EmbedRequest Clone() const;

  // Creates a EmbedRequest object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<EmbedRequest> FromValue(const base::DictValue& value);

  // Creates a EmbedRequest object from a base::Value, or nullopt on failure.
  static std::optional<EmbedRequest> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisEmbedRequest object.
  base::DictValue ToValue() const;

  std::string embedder_id;

  // Optional developer specified data that the app to be embedded can use when
  // making an embedding decision.
  std::optional<base::Value> data;

};


//
// Events
//

namespace OnEmbedRequested {

extern const char kEventName[];  // "app.runtime.onEmbedRequested"

base::ListValue Create(const EmbedRequest& request);
}  // namespace OnEmbedRequested

namespace OnLaunched {

extern const char kEventName[];  // "app.runtime.onLaunched"

base::ListValue Create(const LaunchData& launch_data);
}  // namespace OnLaunched

namespace OnRestarted {

extern const char kEventName[];  // "app.runtime.onRestarted"

base::ListValue Create();
}  // namespace OnRestarted

}  // namespace app_runtime
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_APP_RUNTIME_H__
