// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/protocol_handlers.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/protocol_handlers.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#ifndef EXTENSIONS_COMMON_API_PROTOCOL_HANDLERS_H__
#define EXTENSIONS_COMMON_API_PROTOCOL_HANDLERS_H__

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
namespace protocol_handlers {

//
// Types
//

struct ProtocolHandler {
  ProtocolHandler();
  ~ProtocolHandler();
  ProtocolHandler(const ProtocolHandler&) = delete;
  ProtocolHandler& operator=(const ProtocolHandler&) = delete;
  ProtocolHandler(ProtocolHandler&& rhs) noexcept;
  ProtocolHandler& operator=(ProtocolHandler&& rhs) noexcept;

  // Manifest key constants.
  static constexpr char kProtocol[] = "protocol";
  static constexpr char kName[] = "name";
  static constexpr char kUriTemplate[] = "uriTemplate";

  // Populates a ProtocolHandler object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ProtocolHandler& out, std::u16string& error);

  // Populates a ProtocolHandler object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ProtocolHandler& out, std::u16string& error);

  // Creates a deep copy of ProtocolHandler.
  ProtocolHandler Clone() const;

  // Creates a ProtocolHandler object from a base::DictValue, or unexpected on
  // failure.
  static base::expected<ProtocolHandler, std::u16string> FromValue(const base::DictValue& value);

  // Creates a ProtocolHandler object from a base::Value, or unexpected on
  // failure.
  static base::expected<ProtocolHandler, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisProtocolHandler object.
  base::DictValue ToValue() const;

  // Parses the given |key| from |root_dict|. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // and |error_path_reversed| are populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, std::string_view key, ProtocolHandler& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed);


  // A string definition of the protocol to handle.
  std::string protocol;

  // A string representation of the protocol handlers, displayed to the user when
  // prompting for permissions.
  std::string name;

  // A string representing the URL of the protocol handler (must be a localizable
  // property).
  std::string uri_template;

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
  static constexpr char kProtocolHandlers[] = "protocol_handlers";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, ManifestKeys& out, std::u16string& error);


  std::optional<std::vector<ProtocolHandler>> protocol_handlers;

};

}  // namespace protocol_handlers
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_PROTOCOL_HANDLERS_H__
