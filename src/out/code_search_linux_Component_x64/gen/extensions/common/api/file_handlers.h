// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/file_handlers.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/file_handlers.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#ifndef EXTENSIONS_COMMON_API_FILE_HANDLERS_H__
#define EXTENSIONS_COMMON_API_FILE_HANDLERS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include <string_view>
#include "base/types/expected.h"


namespace extensions {
namespace api {
namespace file_handlers {

//
// Types
//

struct Icon {
  Icon();
  ~Icon();
  Icon(const Icon&) = delete;
  Icon& operator=(const Icon&) = delete;
  Icon(Icon&& rhs) noexcept;
  Icon& operator=(Icon&& rhs) noexcept;

  // Populates a Icon object from a base::Value& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value& value, Icon& out, std::u16string& error);

  // Populates a Icon object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, Icon& out, std::u16string& error);

  // Creates a deep copy of Icon.
  Icon Clone() const;

  // Creates a Icon object from a base::DictValue, or unexpected on failure.
  static base::expected<Icon, std::u16string> FromValue(const base::DictValue& value);

  // Creates a Icon object from a base::Value, or unexpected on failure.
  static base::expected<Icon, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of thisIcon
  // object.
  base::DictValue ToValue() const;

  // URL from which a user agent can fetch image data.
  std::string src;

  // Multiple space-separated size values to also accommodate image formats that
  // can act as containers for multiple images of varying dimensions: e.g.
  // "16x16", "16x16 32x32".
  std::optional<std::string> sizes;

  // MIME type is purely advisory with no default value.
  std::optional<std::string> type;

};

struct FileHandler {
  FileHandler();
  ~FileHandler();
  FileHandler(const FileHandler&) = delete;
  FileHandler& operator=(const FileHandler&) = delete;
  FileHandler(FileHandler&& rhs) noexcept;
  FileHandler& operator=(FileHandler&& rhs) noexcept;

  // Manifest key constants.
  static constexpr char kAccept[] = "accept";
  static constexpr char kAction[] = "action";
  static constexpr char kName[] = "name";
  static constexpr char kIcons[] = "icons";
  static constexpr char kLaunchType[] = "launch_type";

  // Populates a FileHandler object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FileHandler& out, std::u16string& error);

  // Populates a FileHandler object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, FileHandler& out, std::u16string& error);

  // Creates a deep copy of FileHandler.
  FileHandler Clone() const;

  // Creates a FileHandler object from a base::DictValue, or unexpected on
  // failure.
  static base::expected<FileHandler, std::u16string> FromValue(const base::DictValue& value);

  // Creates a FileHandler object from a base::Value, or unexpected on failure.
  static base::expected<FileHandler, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisFileHandler object.
  base::DictValue ToValue() const;

  // Parses the given |key| from |root_dict|. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // and |error_path_reversed| are populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, std::string_view key, FileHandler& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed);


  // A mapping of one or more MIME types to one or more file extensions. e.g.
  // "accept": {"text/csv": ".csv"} or {"text/csv": [".csv", ".txt"]}.
  struct Accept {
    Accept();
    ~Accept();
    Accept(const Accept&) = delete;
    Accept& operator=(const Accept&) = delete;
    Accept(Accept&& rhs) noexcept;
    Accept& operator=(Accept&& rhs) noexcept;

    // Manifest key constants.

    // Populates a Accept object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Accept& out, std::u16string& error);

    // Populates a Accept object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::DictValue& value, Accept& out, std::u16string& error);

    // Creates a deep copy of Accept.
    Accept Clone() const;

    // Creates a Accept object from a base::DictValue, or unexpected on failure.
    static base::expected<Accept, std::u16string> FromValue(const base::DictValue& value);

    // Creates a Accept object from a base::Value, or unexpected on failure.
    static base::expected<Accept, std::u16string> FromValue(const base::Value& value);

    // Returns a new base::DictValue representing the serialized form of
    // thisAccept object.
    base::DictValue ToValue() const;

    // Parses the given |key| from |root_dict|. Any keys not available to the
    // manifest will be ignored. On a parsing error, false is returned and |error|
    // and |error_path_reversed| are populated.
    static bool ParseFromDictionary(const base::DictValue& root_dict, std::string_view key, Accept& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed);


    base::DictValue additional_properties;
  };


  // A mapping of one or more MIME types to one or more file extensions. e.g.
  // "accept": {"text/csv": ".csv"} or {"text/csv": [".csv", ".txt"]}.
  Accept accept;

  // Specifies the url after the origin that is the navigation destination for
  // file handling launches.
  std::string action;

  // Description of the file type.
  std::string name;

  // Array of ImageResources. Only icons declared at the manifest level are
  // currently supported. The icon for the extension will appear in the "Open"
  // menu.
  std::optional<std::vector<Icon>> icons;

  // Whether multiple files should be opened in a single client or multiple.
  // Defaults to `single-client`, which makes all files available in only one tab.
  // `multiple-client` opens a new tab for each file.
  std::optional<std::string> launch_type;

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
  static constexpr char kFileHandlers[] = "file_handlers";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, ManifestKeys& out, std::u16string& error);


  // File Handlers to register onto the target system.
  std::optional<std::vector<FileHandler>> file_handlers;

};

}  // namespace file_handlers
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_FILE_HANDLERS_H__
