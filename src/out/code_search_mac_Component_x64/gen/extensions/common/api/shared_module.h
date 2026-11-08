// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/shared_module.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/shared_module.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#ifndef EXTENSIONS_COMMON_API_SHARED_MODULE_H__
#define EXTENSIONS_COMMON_API_SHARED_MODULE_H__

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
namespace shared_module {

//
// Types
//

struct Import {
  Import();
  ~Import();
  Import(const Import&) = delete;
  Import& operator=(const Import&) = delete;
  Import(Import&& rhs) noexcept;
  Import& operator=(Import&& rhs) noexcept;

  // Manifest key constants.
  static constexpr char kId[] = "id";
  static constexpr char kMinimumVersion[] = "minimum_version";

  // Populates a Import object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Import& out, std::u16string& error);

  // Populates a Import object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, Import& out, std::u16string& error);

  // Creates a deep copy of Import.
  Import Clone() const;

  // Creates a Import object from a base::DictValue, or unexpected on failure.
  static base::expected<Import, std::u16string> FromValue(const base::DictValue& value);

  // Creates a Import object from a base::Value, or unexpected on failure.
  static base::expected<Import, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisImport object.
  base::DictValue ToValue() const;

  // Parses the given |key| from |root_dict|. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // and |error_path_reversed| are populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, std::string_view key, Import& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed);


  // Extension ID of the shared module this extension or app depends on.
  std::string id;

  // Minimum supported version of the shared module.
  std::optional<std::string> minimum_version;

};

struct Export {
  Export();
  ~Export();
  Export(const Export&) = delete;
  Export& operator=(const Export&) = delete;
  Export(Export&& rhs) noexcept;
  Export& operator=(Export&& rhs) noexcept;

  // Manifest key constants.
  static constexpr char kAllowlist[] = "allowlist";

  // Populates a Export object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Export& out, std::u16string& error);

  // Populates a Export object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, Export& out, std::u16string& error);

  // Creates a deep copy of Export.
  Export Clone() const;

  // Creates a Export object from a base::DictValue, or unexpected on failure.
  static base::expected<Export, std::u16string> FromValue(const base::DictValue& value);

  // Creates a Export object from a base::Value, or unexpected on failure.
  static base::expected<Export, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisExport object.
  base::DictValue ToValue() const;

  // Parses the given |key| from |root_dict|. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // and |error_path_reversed| are populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, std::string_view key, Export& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed);


  // Optional list of extension IDs explicitly allowed to import this Shared
  // Module's resources.  If no allowlist is given, all extensions are allowed to
  // import it.
  std::optional<std::vector<std::string>> allowlist;

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
  static constexpr char kImport[] = "import";
  static constexpr char kExport[] = "export";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, ManifestKeys& out, std::u16string& error);


  // The import field is used by extensions and apps to declare that they depend
  // on the resources from particular Shared Modules.
  std::optional<std::vector<Import>> import;

  // The export field indicates an extension is a Shared Module that exports its
  // resources.
  std::optional<Export> export_;

};

}  // namespace shared_module
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_SHARED_MODULE_H__
