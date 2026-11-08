// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_wallet/browser/json_rpc_responses.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_wallet/browser/json_rpc_responses.idl --root=../../ --destdir=gen --namespace=brave_wallet::%(namespace)s --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_JSON_RPC_RESPONSES_H__
#define BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_JSON_RPC_RESPONSES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace brave_wallet {
namespace json_rpc_responses {

//
// Types
//

struct Error {
  Error();
  ~Error();
  Error(const Error&) = delete;
  Error& operator=(const Error&) = delete;
  Error(Error&& rhs) noexcept;
  Error& operator=(Error&& rhs) noexcept;

  // Populates a Error object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Error& out);

  // Populates a Error object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, Error& out);

  // Creates a deep copy of Error.
  Error Clone() const;

  // Creates a Error object from a base::DictValue, or nullopt on failure.
  static std::optional<Error> FromValue(const base::DictValue& value);

  // Creates a Error object from a base::Value, or nullopt on failure.
  static std::optional<Error> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of thisError
  // object.
  base::DictValue ToValue() const;

  int code;

  std::optional<std::string> message;

};

struct RPCResponse {
  RPCResponse();
  ~RPCResponse();
  RPCResponse(const RPCResponse&) = delete;
  RPCResponse& operator=(const RPCResponse&) = delete;
  RPCResponse(RPCResponse&& rhs) noexcept;
  RPCResponse& operator=(RPCResponse&& rhs) noexcept;

  // Populates a RPCResponse object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RPCResponse& out);

  // Populates a RPCResponse object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, RPCResponse& out);

  // Creates a deep copy of RPCResponse.
  RPCResponse Clone() const;

  // Creates a RPCResponse object from a base::DictValue, or nullopt on failure.
  static std::optional<RPCResponse> FromValue(const base::DictValue& value);

  // Creates a RPCResponse object from a base::Value, or nullopt on failure.
  static std::optional<RPCResponse> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisRPCResponse object.
  base::DictValue ToValue() const;

  base::Value jsonrpc;

  base::Value id;

  std::optional<base::Value> result;

  std::optional<Error> error;

};

struct EthGetFeeHistoryResult {
  EthGetFeeHistoryResult();
  ~EthGetFeeHistoryResult();
  EthGetFeeHistoryResult(const EthGetFeeHistoryResult&) = delete;
  EthGetFeeHistoryResult& operator=(const EthGetFeeHistoryResult&) = delete;
  EthGetFeeHistoryResult(EthGetFeeHistoryResult&& rhs) noexcept;
  EthGetFeeHistoryResult& operator=(EthGetFeeHistoryResult&& rhs) noexcept;

  // Populates a EthGetFeeHistoryResult object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EthGetFeeHistoryResult& out);

  // Populates a EthGetFeeHistoryResult object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, EthGetFeeHistoryResult& out);

  // Creates a deep copy of EthGetFeeHistoryResult.
  EthGetFeeHistoryResult Clone() const;

  // Creates a EthGetFeeHistoryResult object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<EthGetFeeHistoryResult> FromValue(const base::DictValue& value);

  // Creates a EthGetFeeHistoryResult object from a base::Value, or nullopt on
  // failure.
  static std::optional<EthGetFeeHistoryResult> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisEthGetFeeHistoryResult object.
  base::DictValue ToValue() const;

  base::ListValue base_fee_per_gas;

  std::vector<std::string> gas_used_ratio;

  std::string oldest_block;

  std::optional<base::Value> reward;

};

struct TransactionReceipt {
  TransactionReceipt();
  ~TransactionReceipt();
  TransactionReceipt(const TransactionReceipt&) = delete;
  TransactionReceipt& operator=(const TransactionReceipt&) = delete;
  TransactionReceipt(TransactionReceipt&& rhs) noexcept;
  TransactionReceipt& operator=(TransactionReceipt&& rhs) noexcept;

  // Populates a TransactionReceipt object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TransactionReceipt& out);

  // Populates a TransactionReceipt object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, TransactionReceipt& out);

  // Creates a deep copy of TransactionReceipt.
  TransactionReceipt Clone() const;

  // Creates a TransactionReceipt object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<TransactionReceipt> FromValue(const base::DictValue& value);

  // Creates a TransactionReceipt object from a base::Value, or nullopt on
  // failure.
  static std::optional<TransactionReceipt> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisTransactionReceipt object.
  base::DictValue ToValue() const;

  std::string transaction_hash;

  std::string transaction_index;

  std::string block_number;

  std::string block_hash;

  std::string cumulative_gas_used;

  std::string gas_used;

  // contractAddress can be null
  base::Value contract_address;

  // TODO(bbondy): logs
  std::string logs_bloom;

  std::string status;

};

struct EthGetLogsResult {
  EthGetLogsResult();
  ~EthGetLogsResult();
  EthGetLogsResult(const EthGetLogsResult&) = delete;
  EthGetLogsResult& operator=(const EthGetLogsResult&) = delete;
  EthGetLogsResult(EthGetLogsResult&& rhs) noexcept;
  EthGetLogsResult& operator=(EthGetLogsResult&& rhs) noexcept;

  // Populates a EthGetLogsResult object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EthGetLogsResult& out);

  // Populates a EthGetLogsResult object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, EthGetLogsResult& out);

  // Creates a deep copy of EthGetLogsResult.
  EthGetLogsResult Clone() const;

  // Creates a EthGetLogsResult object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<EthGetLogsResult> FromValue(const base::DictValue& value);

  // Creates a EthGetLogsResult object from a base::Value, or nullopt on
  // failure.
  static std::optional<EthGetLogsResult> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisEthGetLogsResult object.
  base::DictValue ToValue() const;

  std::string address;

  std::string block_hash;

  std::string block_number;

  std::string data;

  std::string log_index;

  bool removed;

  std::string transaction_hash;

  std::string transaction_index;

  std::vector<std::string> topics;

};

struct AnkrAssetBalance {
  AnkrAssetBalance();
  ~AnkrAssetBalance();
  AnkrAssetBalance(const AnkrAssetBalance&) = delete;
  AnkrAssetBalance& operator=(const AnkrAssetBalance&) = delete;
  AnkrAssetBalance(AnkrAssetBalance&& rhs) noexcept;
  AnkrAssetBalance& operator=(AnkrAssetBalance&& rhs) noexcept;

  // Populates a AnkrAssetBalance object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AnkrAssetBalance& out);

  // Populates a AnkrAssetBalance object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AnkrAssetBalance& out);

  // Creates a deep copy of AnkrAssetBalance.
  AnkrAssetBalance Clone() const;

  // Creates a AnkrAssetBalance object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<AnkrAssetBalance> FromValue(const base::DictValue& value);

  // Creates a AnkrAssetBalance object from a base::Value, or nullopt on
  // failure.
  static std::optional<AnkrAssetBalance> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAnkrAssetBalance object.
  base::DictValue ToValue() const;

  std::string blockchain;

  std::string token_name;

  std::string token_symbol;

  std::string token_decimals;

  std::string token_type;

  std::optional<std::string> contract_address;

  std::string holder_address;

  std::string balance;

  std::string balance_raw_integer;

  std::string balance_usd;

  std::string token_price;

  std::string thumbnail;

};

struct AnkrGetAccountBalancesResult {
  AnkrGetAccountBalancesResult();
  ~AnkrGetAccountBalancesResult();
  AnkrGetAccountBalancesResult(const AnkrGetAccountBalancesResult&) = delete;
  AnkrGetAccountBalancesResult& operator=(const AnkrGetAccountBalancesResult&) = delete;
  AnkrGetAccountBalancesResult(AnkrGetAccountBalancesResult&& rhs) noexcept;
  AnkrGetAccountBalancesResult& operator=(AnkrGetAccountBalancesResult&& rhs) noexcept;

  // Populates a AnkrGetAccountBalancesResult object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AnkrGetAccountBalancesResult& out);

  // Populates a AnkrGetAccountBalancesResult object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AnkrGetAccountBalancesResult& out);

  // Creates a deep copy of AnkrGetAccountBalancesResult.
  AnkrGetAccountBalancesResult Clone() const;

  // Creates a AnkrGetAccountBalancesResult object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<AnkrGetAccountBalancesResult> FromValue(const base::DictValue& value);

  // Creates a AnkrGetAccountBalancesResult object from a base::Value, or
  // nullopt on failure.
  static std::optional<AnkrGetAccountBalancesResult> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAnkrGetAccountBalancesResult object.
  base::DictValue ToValue() const;

  std::string total_balance_usd;

  std::vector<AnkrAssetBalance> assets;

};


}  // namespace json_rpc_responses
}  // namespace brave_wallet

#endif  // BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_JSON_RPC_RESPONSES_H__
