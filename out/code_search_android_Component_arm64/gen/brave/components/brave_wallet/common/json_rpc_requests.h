// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_wallet/common/json_rpc_requests.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_wallet/common/json_rpc_requests.idl --root=../../ --destdir=gen --namespace=brave_wallet::%(namespace)s --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_BRAVE_WALLET_COMMON_JSON_RPC_REQUESTS_H__
#define BRAVE_COMPONENTS_BRAVE_WALLET_COMMON_JSON_RPC_REQUESTS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace brave_wallet {
namespace json_rpc_requests {

//
// Types
//

struct Transaction {
  Transaction();
  ~Transaction();
  Transaction(const Transaction&) = delete;
  Transaction& operator=(const Transaction&) = delete;
  Transaction(Transaction&& rhs) noexcept;
  Transaction& operator=(Transaction&& rhs) noexcept;

  // Populates a Transaction object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Transaction& out);

  // Populates a Transaction object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, Transaction& out);

  // Creates a deep copy of Transaction.
  Transaction Clone() const;

  // Creates a Transaction object from a base::DictValue, or nullopt on failure.
  static std::optional<Transaction> FromValue(const base::DictValue& value);

  // Creates a Transaction object from a base::Value, or nullopt on failure.
  static std::optional<Transaction> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisTransaction object.
  base::DictValue ToValue() const;

  std::string from;

  std::optional<std::string> to;

  std::optional<std::string> gas;

  std::optional<std::string> gas_price;

  std::optional<std::string> value;

  std::optional<std::string> data;

  std::optional<std::string> nonce;

  std::optional<base::Value> max_priority_fee_per_gas;

  std::optional<base::Value> max_fee_per_gas;

};


}  // namespace json_rpc_requests
}  // namespace brave_wallet

#endif  // BRAVE_COMPONENTS_BRAVE_WALLET_COMMON_JSON_RPC_REQUESTS_H__
