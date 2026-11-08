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

#include "brave/components/brave_wallet/browser/json_rpc_responses.h"

#include <memory>
#include <optional>
#include <ostream>
#include <string>
#include <string_view>
#include <utility>
#include <vector>

#include "base/check.h"
#include "base/check_op.h"
#include "base/notreached.h"
#include "base/strings/string_number_conversions.h"
#include "base/strings/utf_string_conversions.h"
#include "base/values.h"
#include "tools/json_schema_compiler/util.h"

using base::UTF8ToUTF16;

namespace brave_wallet {
namespace json_rpc_responses {
//
// Types
//

Error::Error()
: code(0) {}

Error::~Error() = default;
Error::Error(Error&& rhs) noexcept = default;
Error& Error::operator=(Error&& rhs) noexcept = default;
Error Error::Clone() const {
  Error out;
  out.code = code;
  out.message = message;
  return out;
}

// static
bool Error::Populate(
    const base::DictValue& dict, Error& out) {
  const base::Value* code_value = dict.Find("code");
  if (!code_value) {
    return false;
  }
  {
    auto temp = (*code_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.code = *temp;
  }

  const base::Value* message_value = dict.Find("message");
  if (message_value) {
    {
      auto* temp = (*message_value).GetIfString();
      if (!temp) {
        out.message = std::nullopt;
        return false;
      }
      out.message = *temp;
    }
  }

  return true;
}

// static
bool Error::Populate(
    const base::Value& value, Error& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Error> Error::FromValue(const base::DictValue& value) {
  Error out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Error> Error::FromValue(const base::Value& value) {
  Error out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Error::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("code", this->code);

  if (this->message) {
    to_value_result.Set("message", *this->message);

  }

  return to_value_result;
}


RPCResponse::RPCResponse()
 {}

RPCResponse::~RPCResponse() = default;
RPCResponse::RPCResponse(RPCResponse&& rhs) noexcept = default;
RPCResponse& RPCResponse::operator=(RPCResponse&& rhs) noexcept = default;
RPCResponse RPCResponse::Clone() const {
  RPCResponse out;
  out.jsonrpc = jsonrpc.Clone();
  out.id = id.Clone();
  if (result) {
    out.result = result->Clone();
  }
  if (error) {
    out.error = error->Clone();
  }
  return out;
}

// static
bool RPCResponse::Populate(
    const base::DictValue& dict, RPCResponse& out) {
  const base::Value* jsonrpc_value = dict.Find("jsonrpc");
  if (!jsonrpc_value) {
    return false;
  }
  {
    out.jsonrpc = (*jsonrpc_value).Clone();
  }

  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    out.id = (*id_value).Clone();
  }

  const base::Value* result_value = dict.Find("result");
  if (result_value) {
    {
      out.result = (*result_value).Clone();
    }
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value) {
    {
      if (!(*error_value).is_dict()) {
        return false;
      }
      else {
        Error temp;
        if (!Error::Populate((*error_value).GetDict(), temp))
          return false;
        out.error = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool RPCResponse::Populate(
    const base::Value& value, RPCResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RPCResponse> RPCResponse::FromValue(const base::DictValue& value) {
  RPCResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RPCResponse> RPCResponse::FromValue(const base::Value& value) {
  RPCResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue RPCResponse::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("jsonrpc", (this->jsonrpc).Clone());

  to_value_result.Set("id", (this->id).Clone());

  if (this->result) {
    to_value_result.Set("result", (this->result)->Clone());

  }
  if (this->error) {
    to_value_result.Set("error", (this->error)->ToValue());

  }

  return to_value_result;
}


EthGetFeeHistoryResult::EthGetFeeHistoryResult()
 {}

EthGetFeeHistoryResult::~EthGetFeeHistoryResult() = default;
EthGetFeeHistoryResult::EthGetFeeHistoryResult(EthGetFeeHistoryResult&& rhs) noexcept = default;
EthGetFeeHistoryResult& EthGetFeeHistoryResult::operator=(EthGetFeeHistoryResult&& rhs) noexcept = default;
EthGetFeeHistoryResult EthGetFeeHistoryResult::Clone() const {
  EthGetFeeHistoryResult out;
  out.base_fee_per_gas.reserve(base_fee_per_gas.size());
  for (const auto& element : base_fee_per_gas) {
    json_schema_compiler::util::AppendToContainer(out.base_fee_per_gas, element.Clone());
  }
  out.gas_used_ratio = gas_used_ratio;
  out.oldest_block = oldest_block;
  if (reward) {
    out.reward = reward->Clone();
  }
  return out;
}

// static
bool EthGetFeeHistoryResult::Populate(
    const base::DictValue& dict, EthGetFeeHistoryResult& out) {
  const base::Value* base_fee_per_gas_value = dict.Find("baseFeePerGas");
  if (!base_fee_per_gas_value) {
    return false;
  }
  {
    if (!(*base_fee_per_gas_value).is_list()) {
      return false;
    }
    else {
      out.base_fee_per_gas = (*base_fee_per_gas_value).GetList().Clone();
    }
  }

  const base::Value* gas_used_ratio_value = dict.Find("gasUsedRatio");
  if (!gas_used_ratio_value) {
    return false;
  }
  {
    if (!(*gas_used_ratio_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*gas_used_ratio_value).GetList(), out.gas_used_ratio)) {
        return false;
      }
    }
  }

  const base::Value* oldest_block_value = dict.Find("oldestBlock");
  if (!oldest_block_value) {
    return false;
  }
  {
    auto* temp = (*oldest_block_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.oldest_block = *temp;
  }

  const base::Value* reward_value = dict.Find("reward");
  if (reward_value) {
    {
      out.reward = (*reward_value).Clone();
    }
  }

  return true;
}

// static
bool EthGetFeeHistoryResult::Populate(
    const base::Value& value, EthGetFeeHistoryResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EthGetFeeHistoryResult> EthGetFeeHistoryResult::FromValue(const base::DictValue& value) {
  EthGetFeeHistoryResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EthGetFeeHistoryResult> EthGetFeeHistoryResult::FromValue(const base::Value& value) {
  EthGetFeeHistoryResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue EthGetFeeHistoryResult::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("baseFeePerGas", (this->base_fee_per_gas).Clone());

  to_value_result.Set("gasUsedRatio", json_schema_compiler::util::CreateValueFromArray(this->gas_used_ratio));

  to_value_result.Set("oldestBlock", this->oldest_block);

  if (this->reward) {
    to_value_result.Set("reward", (this->reward)->Clone());

  }

  return to_value_result;
}


TransactionReceipt::TransactionReceipt()
 {}

TransactionReceipt::~TransactionReceipt() = default;
TransactionReceipt::TransactionReceipt(TransactionReceipt&& rhs) noexcept = default;
TransactionReceipt& TransactionReceipt::operator=(TransactionReceipt&& rhs) noexcept = default;
TransactionReceipt TransactionReceipt::Clone() const {
  TransactionReceipt out;
  out.transaction_hash = transaction_hash;
  out.transaction_index = transaction_index;
  out.block_number = block_number;
  out.block_hash = block_hash;
  out.cumulative_gas_used = cumulative_gas_used;
  out.gas_used = gas_used;
  out.contract_address = contract_address.Clone();
  out.logs_bloom = logs_bloom;
  out.status = status;
  return out;
}

// static
bool TransactionReceipt::Populate(
    const base::DictValue& dict, TransactionReceipt& out) {
  const base::Value* transaction_hash_value = dict.Find("transactionHash");
  if (!transaction_hash_value) {
    return false;
  }
  {
    auto* temp = (*transaction_hash_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.transaction_hash = *temp;
  }

  const base::Value* transaction_index_value = dict.Find("transactionIndex");
  if (!transaction_index_value) {
    return false;
  }
  {
    auto* temp = (*transaction_index_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.transaction_index = *temp;
  }

  const base::Value* block_number_value = dict.Find("blockNumber");
  if (!block_number_value) {
    return false;
  }
  {
    auto* temp = (*block_number_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.block_number = *temp;
  }

  const base::Value* block_hash_value = dict.Find("blockHash");
  if (!block_hash_value) {
    return false;
  }
  {
    auto* temp = (*block_hash_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.block_hash = *temp;
  }

  const base::Value* cumulative_gas_used_value = dict.Find("cumulativeGasUsed");
  if (!cumulative_gas_used_value) {
    return false;
  }
  {
    auto* temp = (*cumulative_gas_used_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.cumulative_gas_used = *temp;
  }

  const base::Value* gas_used_value = dict.Find("gasUsed");
  if (!gas_used_value) {
    return false;
  }
  {
    auto* temp = (*gas_used_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.gas_used = *temp;
  }

  const base::Value* contract_address_value = dict.Find("contractAddress");
  if (!contract_address_value) {
    return false;
  }
  {
    out.contract_address = (*contract_address_value).Clone();
  }

  const base::Value* logs_bloom_value = dict.Find("logsBloom");
  if (!logs_bloom_value) {
    return false;
  }
  {
    auto* temp = (*logs_bloom_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.logs_bloom = *temp;
  }

  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    auto* temp = (*status_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.status = *temp;
  }

  return true;
}

// static
bool TransactionReceipt::Populate(
    const base::Value& value, TransactionReceipt& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<TransactionReceipt> TransactionReceipt::FromValue(const base::DictValue& value) {
  TransactionReceipt out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<TransactionReceipt> TransactionReceipt::FromValue(const base::Value& value) {
  TransactionReceipt out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue TransactionReceipt::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("transactionHash", this->transaction_hash);

  to_value_result.Set("transactionIndex", this->transaction_index);

  to_value_result.Set("blockNumber", this->block_number);

  to_value_result.Set("blockHash", this->block_hash);

  to_value_result.Set("cumulativeGasUsed", this->cumulative_gas_used);

  to_value_result.Set("gasUsed", this->gas_used);

  to_value_result.Set("contractAddress", (this->contract_address).Clone());

  to_value_result.Set("logsBloom", this->logs_bloom);

  to_value_result.Set("status", this->status);


  return to_value_result;
}


EthGetLogsResult::EthGetLogsResult()
: removed(false) {}

EthGetLogsResult::~EthGetLogsResult() = default;
EthGetLogsResult::EthGetLogsResult(EthGetLogsResult&& rhs) noexcept = default;
EthGetLogsResult& EthGetLogsResult::operator=(EthGetLogsResult&& rhs) noexcept = default;
EthGetLogsResult EthGetLogsResult::Clone() const {
  EthGetLogsResult out;
  out.address = address;
  out.block_hash = block_hash;
  out.block_number = block_number;
  out.data = data;
  out.log_index = log_index;
  out.removed = removed;
  out.transaction_hash = transaction_hash;
  out.transaction_index = transaction_index;
  out.topics = topics;
  return out;
}

// static
bool EthGetLogsResult::Populate(
    const base::DictValue& dict, EthGetLogsResult& out) {
  const base::Value* address_value = dict.Find("address");
  if (!address_value) {
    return false;
  }
  {
    auto* temp = (*address_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.address = *temp;
  }

  const base::Value* block_hash_value = dict.Find("blockHash");
  if (!block_hash_value) {
    return false;
  }
  {
    auto* temp = (*block_hash_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.block_hash = *temp;
  }

  const base::Value* block_number_value = dict.Find("blockNumber");
  if (!block_number_value) {
    return false;
  }
  {
    auto* temp = (*block_number_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.block_number = *temp;
  }

  const base::Value* data_value = dict.Find("data");
  if (!data_value) {
    return false;
  }
  {
    auto* temp = (*data_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.data = *temp;
  }

  const base::Value* log_index_value = dict.Find("logIndex");
  if (!log_index_value) {
    return false;
  }
  {
    auto* temp = (*log_index_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.log_index = *temp;
  }

  const base::Value* removed_value = dict.Find("removed");
  if (!removed_value) {
    return false;
  }
  {
    auto temp = (*removed_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.removed = *temp;
  }

  const base::Value* transaction_hash_value = dict.Find("transactionHash");
  if (!transaction_hash_value) {
    return false;
  }
  {
    auto* temp = (*transaction_hash_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.transaction_hash = *temp;
  }

  const base::Value* transaction_index_value = dict.Find("transactionIndex");
  if (!transaction_index_value) {
    return false;
  }
  {
    auto* temp = (*transaction_index_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.transaction_index = *temp;
  }

  const base::Value* topics_value = dict.Find("topics");
  if (!topics_value) {
    return false;
  }
  {
    if (!(*topics_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*topics_value).GetList(), out.topics)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool EthGetLogsResult::Populate(
    const base::Value& value, EthGetLogsResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EthGetLogsResult> EthGetLogsResult::FromValue(const base::DictValue& value) {
  EthGetLogsResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EthGetLogsResult> EthGetLogsResult::FromValue(const base::Value& value) {
  EthGetLogsResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue EthGetLogsResult::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("address", this->address);

  to_value_result.Set("blockHash", this->block_hash);

  to_value_result.Set("blockNumber", this->block_number);

  to_value_result.Set("data", this->data);

  to_value_result.Set("logIndex", this->log_index);

  to_value_result.Set("removed", this->removed);

  to_value_result.Set("transactionHash", this->transaction_hash);

  to_value_result.Set("transactionIndex", this->transaction_index);

  to_value_result.Set("topics", json_schema_compiler::util::CreateValueFromArray(this->topics));


  return to_value_result;
}


AnkrAssetBalance::AnkrAssetBalance()
 {}

AnkrAssetBalance::~AnkrAssetBalance() = default;
AnkrAssetBalance::AnkrAssetBalance(AnkrAssetBalance&& rhs) noexcept = default;
AnkrAssetBalance& AnkrAssetBalance::operator=(AnkrAssetBalance&& rhs) noexcept = default;
AnkrAssetBalance AnkrAssetBalance::Clone() const {
  AnkrAssetBalance out;
  out.blockchain = blockchain;
  out.token_name = token_name;
  out.token_symbol = token_symbol;
  out.token_decimals = token_decimals;
  out.token_type = token_type;
  out.contract_address = contract_address;
  out.holder_address = holder_address;
  out.balance = balance;
  out.balance_raw_integer = balance_raw_integer;
  out.balance_usd = balance_usd;
  out.token_price = token_price;
  out.thumbnail = thumbnail;
  return out;
}

// static
bool AnkrAssetBalance::Populate(
    const base::DictValue& dict, AnkrAssetBalance& out) {
  const base::Value* blockchain_value = dict.Find("blockchain");
  if (!blockchain_value) {
    return false;
  }
  {
    auto* temp = (*blockchain_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.blockchain = *temp;
  }

  const base::Value* token_name_value = dict.Find("tokenName");
  if (!token_name_value) {
    return false;
  }
  {
    auto* temp = (*token_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.token_name = *temp;
  }

  const base::Value* token_symbol_value = dict.Find("tokenSymbol");
  if (!token_symbol_value) {
    return false;
  }
  {
    auto* temp = (*token_symbol_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.token_symbol = *temp;
  }

  const base::Value* token_decimals_value = dict.Find("tokenDecimals");
  if (!token_decimals_value) {
    return false;
  }
  {
    auto* temp = (*token_decimals_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.token_decimals = *temp;
  }

  const base::Value* token_type_value = dict.Find("tokenType");
  if (!token_type_value) {
    return false;
  }
  {
    auto* temp = (*token_type_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.token_type = *temp;
  }

  const base::Value* contract_address_value = dict.Find("contractAddress");
  if (contract_address_value) {
    {
      auto* temp = (*contract_address_value).GetIfString();
      if (!temp) {
        out.contract_address = std::nullopt;
        return false;
      }
      out.contract_address = *temp;
    }
  }

  const base::Value* holder_address_value = dict.Find("holderAddress");
  if (!holder_address_value) {
    return false;
  }
  {
    auto* temp = (*holder_address_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.holder_address = *temp;
  }

  const base::Value* balance_value = dict.Find("balance");
  if (!balance_value) {
    return false;
  }
  {
    auto* temp = (*balance_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.balance = *temp;
  }

  const base::Value* balance_raw_integer_value = dict.Find("balanceRawInteger");
  if (!balance_raw_integer_value) {
    return false;
  }
  {
    auto* temp = (*balance_raw_integer_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.balance_raw_integer = *temp;
  }

  const base::Value* balance_usd_value = dict.Find("balanceUsd");
  if (!balance_usd_value) {
    return false;
  }
  {
    auto* temp = (*balance_usd_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.balance_usd = *temp;
  }

  const base::Value* token_price_value = dict.Find("tokenPrice");
  if (!token_price_value) {
    return false;
  }
  {
    auto* temp = (*token_price_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.token_price = *temp;
  }

  const base::Value* thumbnail_value = dict.Find("thumbnail");
  if (!thumbnail_value) {
    return false;
  }
  {
    auto* temp = (*thumbnail_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.thumbnail = *temp;
  }

  return true;
}

// static
bool AnkrAssetBalance::Populate(
    const base::Value& value, AnkrAssetBalance& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AnkrAssetBalance> AnkrAssetBalance::FromValue(const base::DictValue& value) {
  AnkrAssetBalance out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AnkrAssetBalance> AnkrAssetBalance::FromValue(const base::Value& value) {
  AnkrAssetBalance out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AnkrAssetBalance::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("blockchain", this->blockchain);

  to_value_result.Set("tokenName", this->token_name);

  to_value_result.Set("tokenSymbol", this->token_symbol);

  to_value_result.Set("tokenDecimals", this->token_decimals);

  to_value_result.Set("tokenType", this->token_type);

  if (this->contract_address) {
    to_value_result.Set("contractAddress", *this->contract_address);

  }
  to_value_result.Set("holderAddress", this->holder_address);

  to_value_result.Set("balance", this->balance);

  to_value_result.Set("balanceRawInteger", this->balance_raw_integer);

  to_value_result.Set("balanceUsd", this->balance_usd);

  to_value_result.Set("tokenPrice", this->token_price);

  to_value_result.Set("thumbnail", this->thumbnail);


  return to_value_result;
}


AnkrGetAccountBalancesResult::AnkrGetAccountBalancesResult()
 {}

AnkrGetAccountBalancesResult::~AnkrGetAccountBalancesResult() = default;
AnkrGetAccountBalancesResult::AnkrGetAccountBalancesResult(AnkrGetAccountBalancesResult&& rhs) noexcept = default;
AnkrGetAccountBalancesResult& AnkrGetAccountBalancesResult::operator=(AnkrGetAccountBalancesResult&& rhs) noexcept = default;
AnkrGetAccountBalancesResult AnkrGetAccountBalancesResult::Clone() const {
  AnkrGetAccountBalancesResult out;
  out.total_balance_usd = total_balance_usd;
  out.assets.reserve(assets.size());
  for (const auto& element : assets) {
    json_schema_compiler::util::AppendToContainer(out.assets, element.Clone());
  }
  return out;
}

// static
bool AnkrGetAccountBalancesResult::Populate(
    const base::DictValue& dict, AnkrGetAccountBalancesResult& out) {
  const base::Value* total_balance_usd_value = dict.Find("totalBalanceUsd");
  if (!total_balance_usd_value) {
    return false;
  }
  {
    auto* temp = (*total_balance_usd_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.total_balance_usd = *temp;
  }

  const base::Value* assets_value = dict.Find("assets");
  if (!assets_value) {
    return false;
  }
  {
    if (!(*assets_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*assets_value).GetList(), out.assets)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool AnkrGetAccountBalancesResult::Populate(
    const base::Value& value, AnkrGetAccountBalancesResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AnkrGetAccountBalancesResult> AnkrGetAccountBalancesResult::FromValue(const base::DictValue& value) {
  AnkrGetAccountBalancesResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AnkrGetAccountBalancesResult> AnkrGetAccountBalancesResult::FromValue(const base::Value& value) {
  AnkrGetAccountBalancesResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AnkrGetAccountBalancesResult::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("totalBalanceUsd", this->total_balance_usd);

  to_value_result.Set("assets", json_schema_compiler::util::CreateValueFromArray(this->assets));


  return to_value_result;
}



}  // namespace json_rpc_responses
}  // namespace brave_wallet

