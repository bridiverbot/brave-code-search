// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/accounts_delete_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/accounts_delete_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_ACCOUNTS_DELETE_BODIES_H__
#define BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_ACCOUNTS_DELETE_BODIES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace brave_account {
namespace endpoints {

//
// Types
//

struct AccountsDeleteRequestBody {
  AccountsDeleteRequestBody();
  ~AccountsDeleteRequestBody();
  AccountsDeleteRequestBody(const AccountsDeleteRequestBody&) = delete;
  AccountsDeleteRequestBody& operator=(const AccountsDeleteRequestBody&) = delete;
  AccountsDeleteRequestBody(AccountsDeleteRequestBody&& rhs) noexcept;
  AccountsDeleteRequestBody& operator=(AccountsDeleteRequestBody&& rhs) noexcept;

  // Populates a AccountsDeleteRequestBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AccountsDeleteRequestBody& out);

  // Populates a AccountsDeleteRequestBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AccountsDeleteRequestBody& out);

  // Creates a deep copy of AccountsDeleteRequestBody.
  AccountsDeleteRequestBody Clone() const;

  // Creates a AccountsDeleteRequestBody object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<AccountsDeleteRequestBody> FromValue(const base::DictValue& value);

  // Creates a AccountsDeleteRequestBody object from a base::Value, or nullopt
  // on failure.
  static std::optional<AccountsDeleteRequestBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAccountsDeleteRequestBody object.
  base::DictValue ToValue() const;

};

struct AccountsDeleteSuccessBody {
  AccountsDeleteSuccessBody();
  ~AccountsDeleteSuccessBody();
  AccountsDeleteSuccessBody(const AccountsDeleteSuccessBody&) = delete;
  AccountsDeleteSuccessBody& operator=(const AccountsDeleteSuccessBody&) = delete;
  AccountsDeleteSuccessBody(AccountsDeleteSuccessBody&& rhs) noexcept;
  AccountsDeleteSuccessBody& operator=(AccountsDeleteSuccessBody&& rhs) noexcept;

  // Populates a AccountsDeleteSuccessBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AccountsDeleteSuccessBody& out);

  // Populates a AccountsDeleteSuccessBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AccountsDeleteSuccessBody& out);

  // Creates a deep copy of AccountsDeleteSuccessBody.
  AccountsDeleteSuccessBody Clone() const;

  // Creates a AccountsDeleteSuccessBody object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<AccountsDeleteSuccessBody> FromValue(const base::DictValue& value);

  // Creates a AccountsDeleteSuccessBody object from a base::Value, or nullopt
  // on failure.
  static std::optional<AccountsDeleteSuccessBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAccountsDeleteSuccessBody object.
  base::DictValue ToValue() const;

};


}  // namespace endpoints
}  // namespace brave_account

#endif  // BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_ACCOUNTS_DELETE_BODIES_H__
