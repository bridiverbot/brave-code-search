// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/side_panel.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/side_panel.idl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#ifndef CHROME_COMMON_EXTENSIONS_API_SIDE_PANEL_H__
#define CHROME_COMMON_EXTENSIONS_API_SIDE_PANEL_H__

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
namespace side_panel {

//
// Types
//

struct SidePanel {
  SidePanel();
  ~SidePanel();
  SidePanel(const SidePanel&) = delete;
  SidePanel& operator=(const SidePanel&) = delete;
  SidePanel(SidePanel&& rhs) noexcept;
  SidePanel& operator=(SidePanel&& rhs) noexcept;

  // Manifest key constants.
  static constexpr char kDefaultPath[] = "default_path";

  // Populates a SidePanel object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, SidePanel& out);

  // Populates a SidePanel object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, SidePanel& out);

  // Creates a deep copy of SidePanel.
  SidePanel Clone() const;

  // Creates a SidePanel object from a base::DictValue, or nullopt on failure.
  static std::optional<SidePanel> FromValue(const base::DictValue& value);

  // Creates a SidePanel object from a base::Value, or nullopt on failure.
  static std::optional<SidePanel> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisSidePanel object.
  base::DictValue ToValue() const;

  // Parses the given |key| from |root_dict|. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // and |error_path_reversed| are populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, std::string_view key, SidePanel& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed);


  // Developer specified path for side panel display.
  std::string default_path;

};

// Defines the possible alignment for the side panel in the browser UI.
enum class Side {
  kNone = 0,
  kLeft,
  kRight,
  kMaxValue = kRight,
};


const char* ToString(Side as_enum);
Side ParseSide(std::string_view as_string);
std::u16string GetSideParseError(std::string_view as_string);

struct PanelLayout {
  PanelLayout();
  ~PanelLayout();
  PanelLayout(const PanelLayout&) = delete;
  PanelLayout& operator=(const PanelLayout&) = delete;
  PanelLayout(PanelLayout&& rhs) noexcept;
  PanelLayout& operator=(PanelLayout&& rhs) noexcept;

  // Populates a PanelLayout object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PanelLayout& out);

  // Populates a PanelLayout object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, PanelLayout& out);

  // Creates a deep copy of PanelLayout.
  PanelLayout Clone() const;

  // Creates a PanelLayout object from a base::DictValue, or nullopt on failure.
  static std::optional<PanelLayout> FromValue(const base::DictValue& value);

  // Creates a PanelLayout object from a base::Value, or nullopt on failure.
  static std::optional<PanelLayout> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPanelLayout object.
  base::DictValue ToValue() const;

  Side side;

};

struct PanelOptions {
  PanelOptions();
  ~PanelOptions();
  PanelOptions(const PanelOptions&) = delete;
  PanelOptions& operator=(const PanelOptions&) = delete;
  PanelOptions(PanelOptions&& rhs) noexcept;
  PanelOptions& operator=(PanelOptions&& rhs) noexcept;

  // Populates a PanelOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PanelOptions& out);

  // Populates a PanelOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PanelOptions& out);

  // Creates a deep copy of PanelOptions.
  PanelOptions Clone() const;

  // Creates a PanelOptions object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<PanelOptions> FromValue(const base::DictValue& value);

  // Creates a PanelOptions object from a base::Value, or nullopt on failure.
  static std::optional<PanelOptions> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPanelOptions object.
  base::DictValue ToValue() const;

  // If specified, the side panel options will only apply to the tab with this id.
  // If omitted, these options set the default behavior (used for any tab that
  // doesn't have specific settings). Note: if the same path is set for this tabId
  // and the default tabId, then the panel for this tabId will be a different
  // instance than the panel for the default tabId.
  std::optional<int> tab_id;

  // The path to the side panel HTML file to use. This must be a local resource
  // within the extension package.
  std::optional<std::string> path;

  // Whether the side panel should be enabled. This is optional. The default value
  // is true.
  std::optional<bool> enabled;

};

struct PanelBehavior {
  PanelBehavior();
  ~PanelBehavior();
  PanelBehavior(const PanelBehavior&) = delete;
  PanelBehavior& operator=(const PanelBehavior&) = delete;
  PanelBehavior(PanelBehavior&& rhs) noexcept;
  PanelBehavior& operator=(PanelBehavior&& rhs) noexcept;

  // Populates a PanelBehavior object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PanelBehavior& out);

  // Populates a PanelBehavior object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PanelBehavior& out);

  // Creates a deep copy of PanelBehavior.
  PanelBehavior Clone() const;

  // Creates a PanelBehavior object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<PanelBehavior> FromValue(const base::DictValue& value);

  // Creates a PanelBehavior object from a base::Value, or nullopt on failure.
  static std::optional<PanelBehavior> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPanelBehavior object.
  base::DictValue ToValue() const;

  // Whether clicking the extension's icon will toggle showing the extension's
  // entry in the side panel. Defaults to false.
  std::optional<bool> open_panel_on_action_click;

};

struct GetPanelOptions {
  GetPanelOptions();
  ~GetPanelOptions();
  GetPanelOptions(const GetPanelOptions&) = delete;
  GetPanelOptions& operator=(const GetPanelOptions&) = delete;
  GetPanelOptions(GetPanelOptions&& rhs) noexcept;
  GetPanelOptions& operator=(GetPanelOptions&& rhs) noexcept;

  // Populates a GetPanelOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetPanelOptions& out);

  // Populates a GetPanelOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, GetPanelOptions& out);

  // Creates a deep copy of GetPanelOptions.
  GetPanelOptions Clone() const;

  // Creates a GetPanelOptions object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<GetPanelOptions> FromValue(const base::DictValue& value);

  // Creates a GetPanelOptions object from a base::Value, or nullopt on failure.
  static std::optional<GetPanelOptions> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisGetPanelOptions object.
  base::DictValue ToValue() const;

  // If specified, the side panel options for the given tab will be returned.
  // Otherwise, returns the default side panel options (used for any tab that
  // doesn't have specific settings).
  std::optional<int> tab_id;

};

struct OpenOptions {
  OpenOptions();
  ~OpenOptions();
  OpenOptions(const OpenOptions&) = delete;
  OpenOptions& operator=(const OpenOptions&) = delete;
  OpenOptions(OpenOptions&& rhs) noexcept;
  OpenOptions& operator=(OpenOptions&& rhs) noexcept;

  // Populates a OpenOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OpenOptions& out);

  // Populates a OpenOptions object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, OpenOptions& out);

  // Creates a deep copy of OpenOptions.
  OpenOptions Clone() const;

  // Creates a OpenOptions object from a base::DictValue, or nullopt on failure.
  static std::optional<OpenOptions> FromValue(const base::DictValue& value);

  // Creates a OpenOptions object from a base::Value, or nullopt on failure.
  static std::optional<OpenOptions> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisOpenOptions object.
  base::DictValue ToValue() const;

  // The window in which to open the side panel. This is only applicable if the
  // extension has a global (non-tab-specific) side panel or <code>tabId</code> is
  // also specified. This will override any currently-active global side panel the
  // user has open in the given window. At least one of this or <code>tabId</code>
  // must be provided.
  std::optional<int> window_id;

  // The tab in which to open the side panel. If the corresponding tab has a
  // tab-specific side panel, the panel will only be open for that tab. If there
  // is not a tab-specific panel, the global panel will be open in the specified
  // tab and any other tabs without a currently-open tab- specific panel. This
  // will override any currently-active side panel (global or tab-specific) in the
  // corresponding tab. At least one of this or <code>windowId</code> must be
  // provided.
  std::optional<int> tab_id;

};

struct CloseOptions {
  CloseOptions();
  ~CloseOptions();
  CloseOptions(const CloseOptions&) = delete;
  CloseOptions& operator=(const CloseOptions&) = delete;
  CloseOptions(CloseOptions&& rhs) noexcept;
  CloseOptions& operator=(CloseOptions&& rhs) noexcept;

  // Populates a CloseOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CloseOptions& out);

  // Populates a CloseOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, CloseOptions& out);

  // Creates a deep copy of CloseOptions.
  CloseOptions Clone() const;

  // Creates a CloseOptions object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<CloseOptions> FromValue(const base::DictValue& value);

  // Creates a CloseOptions object from a base::Value, or nullopt on failure.
  static std::optional<CloseOptions> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCloseOptions object.
  base::DictValue ToValue() const;

  // The window in which to close the side panel. If a global side panel is open
  // in the specified window, it will be closed for all tabs in that window where
  // no tab-specific panel is active. At least one of this or <code>tabId</code>
  // must be provided.
  std::optional<int> window_id;

  // The tab in which to close the side panel. If a tab-specific side panel is
  // open in the specified tab, it will be closed for that tab. If only the global
  // side panel is open, the promise returned by the call to <code>close()</code>
  // will reject with an error. This behavior was changed in Chrome 145, with
  // prior versions falling back to closing the global panel. At least one of this
  // or <code>windowId</code> must be provided.
  std::optional<int> tab_id;

};

struct PanelOpenedInfo {
  PanelOpenedInfo();
  ~PanelOpenedInfo();
  PanelOpenedInfo(const PanelOpenedInfo&) = delete;
  PanelOpenedInfo& operator=(const PanelOpenedInfo&) = delete;
  PanelOpenedInfo(PanelOpenedInfo&& rhs) noexcept;
  PanelOpenedInfo& operator=(PanelOpenedInfo&& rhs) noexcept;

  // Populates a PanelOpenedInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PanelOpenedInfo& out);

  // Populates a PanelOpenedInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PanelOpenedInfo& out);

  // Creates a deep copy of PanelOpenedInfo.
  PanelOpenedInfo Clone() const;

  // Creates a PanelOpenedInfo object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<PanelOpenedInfo> FromValue(const base::DictValue& value);

  // Creates a PanelOpenedInfo object from a base::Value, or nullopt on failure.
  static std::optional<PanelOpenedInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPanelOpenedInfo object.
  base::DictValue ToValue() const;

  // The ID of the window where the side panel is opened. This is available for
  // both global and tab-specific panels.
  int window_id;

  // The optional ID of the tab where the side panel is opened. This is provided
  // only when the panel is tab-specific.
  std::optional<int> tab_id;

  // The path of the local resource within the extension package whose content is
  // displayed in the panel.
  std::string path;

};

struct PanelClosedInfo {
  PanelClosedInfo();
  ~PanelClosedInfo();
  PanelClosedInfo(const PanelClosedInfo&) = delete;
  PanelClosedInfo& operator=(const PanelClosedInfo&) = delete;
  PanelClosedInfo(PanelClosedInfo&& rhs) noexcept;
  PanelClosedInfo& operator=(PanelClosedInfo&& rhs) noexcept;

  // Populates a PanelClosedInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PanelClosedInfo& out);

  // Populates a PanelClosedInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PanelClosedInfo& out);

  // Creates a deep copy of PanelClosedInfo.
  PanelClosedInfo Clone() const;

  // Creates a PanelClosedInfo object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<PanelClosedInfo> FromValue(const base::DictValue& value);

  // Creates a PanelClosedInfo object from a base::Value, or nullopt on failure.
  static std::optional<PanelClosedInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPanelClosedInfo object.
  base::DictValue ToValue() const;

  // The ID of the window where the side panel was closed. This is available for
  // both global and tab-specific panels.
  int window_id;

  // The optional ID of the tab where the side panel was closed. This is provided
  // only when the panel is tab-specific.
  std::optional<int> tab_id;

  // The path of the local resource within the extension package whose content is
  // displayed in the panel.
  std::string path;

};


//
// Manifest Keys
//

struct ManifestKeys {
  ManifestKeys();
  ~ManifestKeys();
  ManifestKeys(const ManifestKeys&) = delete;
  ManifestKeys& operator=(const ManifestKeys&) = delete;
  ManifestKeys(ManifestKeys&& rhs) noexcept;
  ManifestKeys& operator=(ManifestKeys&& rhs) noexcept;

  // Manifest key constants.
  static constexpr char kSidePanel[] = "side_panel";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, ManifestKeys& out, std::u16string& error);


  std::optional<SidePanel> side_panel;

};

//
// Functions
//

namespace SetOptions {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The configuration options to apply to the panel.
  PanelOptions options;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace SetOptions

namespace GetOptions {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Specifies the context to return the configuration for.
  GetPanelOptions options;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const PanelOptions& options);
}  // namespace Results

}  // namespace GetOptions

namespace SetPanelBehavior {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The new behavior to be set.
  PanelBehavior behavior;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace SetPanelBehavior

namespace GetPanelBehavior {

namespace Results {

base::ListValue Create(const PanelBehavior& behavior);
}  // namespace Results

}  // namespace GetPanelBehavior

namespace Open {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Specifies the context in which to open the side panel.
  OpenOptions options;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace Open

namespace GetLayout {

namespace Results {

base::ListValue Create(const PanelLayout& layout);
}  // namespace Results

}  // namespace GetLayout

namespace Close {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Specifies the context in which to close the side panel.
  CloseOptions options;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace Close

//
// Events
//

namespace OnOpened {

extern const char kEventName[];  // "sidePanel.onOpened"

base::ListValue Create(const PanelOpenedInfo& info);
}  // namespace OnOpened

namespace OnClosed {

extern const char kEventName[];  // "sidePanel.onClosed"

base::ListValue Create(const PanelClosedInfo& info);
}  // namespace OnClosed

}  // namespace side_panel
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_SIDE_PANEL_H__
