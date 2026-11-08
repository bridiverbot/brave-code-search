// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_wallet/browser/blockchain_list_schemas.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_wallet/browser/blockchain_list_schemas.idl --root=../../ --destdir=gen --namespace=brave_wallet::%(namespace)s --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_BLOCKCHAIN_LIST_SCHEMAS_H__
#define BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_BLOCKCHAIN_LIST_SCHEMAS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace brave_wallet {
namespace blockchain_lists {

//
// Types
//

struct RestrictedAddressesList {
  RestrictedAddressesList();
  ~RestrictedAddressesList();
  RestrictedAddressesList(const RestrictedAddressesList&) = delete;
  RestrictedAddressesList& operator=(const RestrictedAddressesList&) = delete;
  RestrictedAddressesList(RestrictedAddressesList&& rhs) noexcept;
  RestrictedAddressesList& operator=(RestrictedAddressesList&& rhs) noexcept;

  // Populates a RestrictedAddressesList object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RestrictedAddressesList& out);

  // Populates a RestrictedAddressesList object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, RestrictedAddressesList& out);

  // Creates a deep copy of RestrictedAddressesList.
  RestrictedAddressesList Clone() const;

  // Creates a RestrictedAddressesList object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<RestrictedAddressesList> FromValue(const base::DictValue& value);

  // Creates a RestrictedAddressesList object from a base::Value, or nullopt on
  // failure.
  static std::optional<RestrictedAddressesList> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisRestrictedAddressesList object.
  base::DictValue ToValue() const;

  std::vector<std::string> addresses;

};


}  // namespace blockchain_lists
}  // namespace brave_wallet

#endif  // BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_BLOCKCHAIN_LIST_SCHEMAS_H__
