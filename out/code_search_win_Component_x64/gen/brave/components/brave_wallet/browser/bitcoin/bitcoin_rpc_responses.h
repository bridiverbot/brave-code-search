// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_wallet/browser/bitcoin/bitcoin_rpc_responses.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_wallet/browser/bitcoin/bitcoin_rpc_responses.idl --root=../../ --destdir=gen --namespace=brave_wallet::%(namespace)s --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_BITCOIN_BITCOIN_RPC_RESPONSES_H__
#define BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_BITCOIN_BITCOIN_RPC_RESPONSES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace brave_wallet {
namespace bitcoin_rpc {

//
// Types
//

struct TransactionStatus {
  TransactionStatus();
  ~TransactionStatus();
  TransactionStatus(const TransactionStatus&) = delete;
  TransactionStatus& operator=(const TransactionStatus&) = delete;
  TransactionStatus(TransactionStatus&& rhs) noexcept;
  TransactionStatus& operator=(TransactionStatus&& rhs) noexcept;

  // Populates a TransactionStatus object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TransactionStatus& out);

  // Populates a TransactionStatus object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, TransactionStatus& out);

  // Creates a deep copy of TransactionStatus.
  TransactionStatus Clone() const;

  // Creates a TransactionStatus object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<TransactionStatus> FromValue(const base::DictValue& value);

  // Creates a TransactionStatus object from a base::Value, or nullopt on
  // failure.
  static std::optional<TransactionStatus> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisTransactionStatus object.
  base::DictValue ToValue() const;

  bool confirmed;

};

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

  std::string txid;

  TransactionStatus status;

};

struct AddressChainStats {
  AddressChainStats();
  ~AddressChainStats();
  AddressChainStats(const AddressChainStats&) = delete;
  AddressChainStats& operator=(const AddressChainStats&) = delete;
  AddressChainStats(AddressChainStats&& rhs) noexcept;
  AddressChainStats& operator=(AddressChainStats&& rhs) noexcept;

  // Populates a AddressChainStats object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AddressChainStats& out);

  // Populates a AddressChainStats object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AddressChainStats& out);

  // Creates a deep copy of AddressChainStats.
  AddressChainStats Clone() const;

  // Creates a AddressChainStats object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<AddressChainStats> FromValue(const base::DictValue& value);

  // Creates a AddressChainStats object from a base::Value, or nullopt on
  // failure.
  static std::optional<AddressChainStats> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAddressChainStats object.
  base::DictValue ToValue() const;

  // uint32_t
  std::string tx_count;

  // uint64_t
  std::string funded_txo_sum;

  // uint64_t
  std::string spent_txo_sum;

};

struct AddressStats {
  AddressStats();
  ~AddressStats();
  AddressStats(const AddressStats&) = delete;
  AddressStats& operator=(const AddressStats&) = delete;
  AddressStats(AddressStats&& rhs) noexcept;
  AddressStats& operator=(AddressStats&& rhs) noexcept;

  // Populates a AddressStats object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AddressStats& out);

  // Populates a AddressStats object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AddressStats& out);

  // Creates a deep copy of AddressStats.
  AddressStats Clone() const;

  // Creates a AddressStats object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<AddressStats> FromValue(const base::DictValue& value);

  // Creates a AddressStats object from a base::Value, or nullopt on failure.
  static std::optional<AddressStats> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAddressStats object.
  base::DictValue ToValue() const;

  std::string address;

  AddressChainStats chain_stats;

  AddressChainStats mempool_stats;

};

struct UnspentOutputStatus {
  UnspentOutputStatus();
  ~UnspentOutputStatus();
  UnspentOutputStatus(const UnspentOutputStatus&) = delete;
  UnspentOutputStatus& operator=(const UnspentOutputStatus&) = delete;
  UnspentOutputStatus(UnspentOutputStatus&& rhs) noexcept;
  UnspentOutputStatus& operator=(UnspentOutputStatus&& rhs) noexcept;

  // Populates a UnspentOutputStatus object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UnspentOutputStatus& out);

  // Populates a UnspentOutputStatus object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, UnspentOutputStatus& out);

  // Creates a deep copy of UnspentOutputStatus.
  UnspentOutputStatus Clone() const;

  // Creates a UnspentOutputStatus object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<UnspentOutputStatus> FromValue(const base::DictValue& value);

  // Creates a UnspentOutputStatus object from a base::Value, or nullopt on
  // failure.
  static std::optional<UnspentOutputStatus> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisUnspentOutputStatus object.
  base::DictValue ToValue() const;

  bool confirmed;

};

struct UnspentOutput {
  UnspentOutput();
  ~UnspentOutput();
  UnspentOutput(const UnspentOutput&) = delete;
  UnspentOutput& operator=(const UnspentOutput&) = delete;
  UnspentOutput(UnspentOutput&& rhs) noexcept;
  UnspentOutput& operator=(UnspentOutput&& rhs) noexcept;

  // Populates a UnspentOutput object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UnspentOutput& out);

  // Populates a UnspentOutput object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, UnspentOutput& out);

  // Creates a deep copy of UnspentOutput.
  UnspentOutput Clone() const;

  // Creates a UnspentOutput object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<UnspentOutput> FromValue(const base::DictValue& value);

  // Creates a UnspentOutput object from a base::Value, or nullopt on failure.
  static std::optional<UnspentOutput> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisUnspentOutput object.
  base::DictValue ToValue() const;

  std::string txid;

  // uint32_t
  std::string vout;

  // uint64_t
  std::string value;

  UnspentOutputStatus status;

};


}  // namespace bitcoin_rpc
}  // namespace brave_wallet

#endif  // BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_BITCOIN_BITCOIN_RPC_RESPONSES_H__
