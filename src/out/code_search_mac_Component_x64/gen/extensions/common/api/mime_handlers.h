// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/mime_handlers.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/mime_handlers.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#ifndef EXTENSIONS_COMMON_API_MIME_HANDLERS_H__
#define EXTENSIONS_COMMON_API_MIME_HANDLERS_H__

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
namespace mime_handlers {

//
// Types
//

struct MimeHandlerMimeTypeConfig {
  MimeHandlerMimeTypeConfig();
  ~MimeHandlerMimeTypeConfig();
  MimeHandlerMimeTypeConfig(const MimeHandlerMimeTypeConfig&) = delete;
  MimeHandlerMimeTypeConfig& operator=(const MimeHandlerMimeTypeConfig&) = delete;
  MimeHandlerMimeTypeConfig(MimeHandlerMimeTypeConfig&& rhs) noexcept;
  MimeHandlerMimeTypeConfig& operator=(MimeHandlerMimeTypeConfig&& rhs) noexcept;

  // Populates a MimeHandlerMimeTypeConfig object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MimeHandlerMimeTypeConfig& out, std::u16string& error);

  // Populates a MimeHandlerMimeTypeConfig object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, MimeHandlerMimeTypeConfig& out, std::u16string& error);

  // Creates a deep copy of MimeHandlerMimeTypeConfig.
  MimeHandlerMimeTypeConfig Clone() const;

  // Creates a MimeHandlerMimeTypeConfig object from a base::DictValue, or
  // unexpected on failure.
  static base::expected<MimeHandlerMimeTypeConfig, std::u16string> FromValue(const base::DictValue& value);

  // Creates a MimeHandlerMimeTypeConfig object from a base::Value, or
  // unexpected on failure.
  static base::expected<MimeHandlerMimeTypeConfig, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisMimeHandlerMimeTypeConfig object.
  base::DictValue ToValue() const;

  // Relative path to the handler page within the extension.
  std::string handler_url;

  // Whether the handler supports being embedded in iframe/embed/object elements.
  // Defaults to false when absent. $(ref:mimeHandler.setMimeHandlerOptions)
  // overrides this value.
  std::optional<bool> can_embed;

  // Whether the handler starts out handling this MIME type. Defaults to true when
  // absent. $(ref:mimeHandler.setMimeHandlerOptions) overrides this value.
  std::optional<bool> enabled;

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
  static constexpr char kMimeTypesHandler[] = "mime_types_handler";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, ManifestKeys& out, std::u16string& error);


  struct MimeTypesHandler {
    MimeTypesHandler();
    ~MimeTypesHandler();
    MimeTypesHandler(const MimeTypesHandler&) = delete;
    MimeTypesHandler& operator=(const MimeTypesHandler&) = delete;
    MimeTypesHandler(MimeTypesHandler&& rhs) noexcept;
    MimeTypesHandler& operator=(MimeTypesHandler&& rhs) noexcept;

    // Manifest key constants.

    // Parses the given |key| from |root_dict|. Any keys not available to the
    // manifest will be ignored. On a parsing error, false is returned and |error|
    // and |error_path_reversed| are populated.
    static bool ParseFromDictionary(const base::DictValue& root_dict, std::string_view key, MimeTypesHandler& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed);


    base::DictValue additional_properties;
  };


  std::optional<MimeTypesHandler> mime_types_handler;

};

}  // namespace mime_handlers
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_MIME_HANDLERS_H__
