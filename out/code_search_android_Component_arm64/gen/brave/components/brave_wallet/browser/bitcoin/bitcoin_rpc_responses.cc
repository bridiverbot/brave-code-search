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

#include "brave/components/brave_wallet/browser/bitcoin/bitcoin_rpc_responses.h"

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
namespace bitcoin_rpc {
//
// Types
//

TransactionStatus::TransactionStatus()
: confirmed(false) {}

TransactionStatus::~TransactionStatus() = default;
TransactionStatus::TransactionStatus(TransactionStatus&& rhs) noexcept = default;
TransactionStatus& TransactionStatus::operator=(TransactionStatus&& rhs) noexcept = default;
TransactionStatus TransactionStatus::Clone() const {
  TransactionStatus out;
  out.confirmed = confirmed;
  return out;
}

// static
bool TransactionStatus::Populate(
    const base::DictValue& dict, TransactionStatus& out) {
  const base::Value* confirmed_value = dict.Find("confirmed");
  if (!confirmed_value) {
    return false;
  }
  {
    auto temp = (*confirmed_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.confirmed = *temp;
  }

  return true;
}

// static
bool TransactionStatus::Populate(
    const base::Value& value, TransactionStatus& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<TransactionStatus> TransactionStatus::FromValue(const base::DictValue& value) {
  TransactionStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<TransactionStatus> TransactionStatus::FromValue(const base::Value& value) {
  TransactionStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue TransactionStatus::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("confirmed", this->confirmed);


  return to_value_result;
}


Transaction::Transaction()
 {}

Transaction::~Transaction() = default;
Transaction::Transaction(Transaction&& rhs) noexcept = default;
Transaction& Transaction::operator=(Transaction&& rhs) noexcept = default;
Transaction Transaction::Clone() const {
  Transaction out;
  out.txid = txid;
  out.status = status.Clone();
  return out;
}

// static
bool Transaction::Populate(
    const base::DictValue& dict, Transaction& out) {
  const base::Value* txid_value = dict.Find("txid");
  if (!txid_value) {
    return false;
  }
  {
    auto* temp = (*txid_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.txid = *temp;
  }

  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    if (!(*status_value).is_dict()) {
      return false;
    }
    if (!TransactionStatus::Populate((*status_value).GetDict(), out.status)) {
      return false;
    }
  }

  return true;
}

// static
bool Transaction::Populate(
    const base::Value& value, Transaction& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Transaction> Transaction::FromValue(const base::DictValue& value) {
  Transaction out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Transaction> Transaction::FromValue(const base::Value& value) {
  Transaction out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Transaction::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("txid", this->txid);

  to_value_result.Set("status", (this->status).ToValue());


  return to_value_result;
}


AddressChainStats::AddressChainStats()
 {}

AddressChainStats::~AddressChainStats() = default;
AddressChainStats::AddressChainStats(AddressChainStats&& rhs) noexcept = default;
AddressChainStats& AddressChainStats::operator=(AddressChainStats&& rhs) noexcept = default;
AddressChainStats AddressChainStats::Clone() const {
  AddressChainStats out;
  out.tx_count = tx_count;
  out.funded_txo_sum = funded_txo_sum;
  out.spent_txo_sum = spent_txo_sum;
  return out;
}

// static
bool AddressChainStats::Populate(
    const base::DictValue& dict, AddressChainStats& out) {
  const base::Value* tx_count_value = dict.Find("tx_count");
  if (!tx_count_value) {
    return false;
  }
  {
    auto* temp = (*tx_count_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.tx_count = *temp;
  }

  const base::Value* funded_txo_sum_value = dict.Find("funded_txo_sum");
  if (!funded_txo_sum_value) {
    return false;
  }
  {
    auto* temp = (*funded_txo_sum_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.funded_txo_sum = *temp;
  }

  const base::Value* spent_txo_sum_value = dict.Find("spent_txo_sum");
  if (!spent_txo_sum_value) {
    return false;
  }
  {
    auto* temp = (*spent_txo_sum_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.spent_txo_sum = *temp;
  }

  return true;
}

// static
bool AddressChainStats::Populate(
    const base::Value& value, AddressChainStats& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AddressChainStats> AddressChainStats::FromValue(const base::DictValue& value) {
  AddressChainStats out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AddressChainStats> AddressChainStats::FromValue(const base::Value& value) {
  AddressChainStats out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AddressChainStats::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("tx_count", this->tx_count);

  to_value_result.Set("funded_txo_sum", this->funded_txo_sum);

  to_value_result.Set("spent_txo_sum", this->spent_txo_sum);


  return to_value_result;
}


AddressStats::AddressStats()
 {}

AddressStats::~AddressStats() = default;
AddressStats::AddressStats(AddressStats&& rhs) noexcept = default;
AddressStats& AddressStats::operator=(AddressStats&& rhs) noexcept = default;
AddressStats AddressStats::Clone() const {
  AddressStats out;
  out.address = address;
  out.chain_stats = chain_stats.Clone();
  out.mempool_stats = mempool_stats.Clone();
  return out;
}

// static
bool AddressStats::Populate(
    const base::DictValue& dict, AddressStats& out) {
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

  const base::Value* chain_stats_value = dict.Find("chain_stats");
  if (!chain_stats_value) {
    return false;
  }
  {
    if (!(*chain_stats_value).is_dict()) {
      return false;
    }
    if (!AddressChainStats::Populate((*chain_stats_value).GetDict(), out.chain_stats)) {
      return false;
    }
  }

  const base::Value* mempool_stats_value = dict.Find("mempool_stats");
  if (!mempool_stats_value) {
    return false;
  }
  {
    if (!(*mempool_stats_value).is_dict()) {
      return false;
    }
    if (!AddressChainStats::Populate((*mempool_stats_value).GetDict(), out.mempool_stats)) {
      return false;
    }
  }

  return true;
}

// static
bool AddressStats::Populate(
    const base::Value& value, AddressStats& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AddressStats> AddressStats::FromValue(const base::DictValue& value) {
  AddressStats out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AddressStats> AddressStats::FromValue(const base::Value& value) {
  AddressStats out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AddressStats::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("address", this->address);

  to_value_result.Set("chain_stats", (this->chain_stats).ToValue());

  to_value_result.Set("mempool_stats", (this->mempool_stats).ToValue());


  return to_value_result;
}


UnspentOutputStatus::UnspentOutputStatus()
: confirmed(false) {}

UnspentOutputStatus::~UnspentOutputStatus() = default;
UnspentOutputStatus::UnspentOutputStatus(UnspentOutputStatus&& rhs) noexcept = default;
UnspentOutputStatus& UnspentOutputStatus::operator=(UnspentOutputStatus&& rhs) noexcept = default;
UnspentOutputStatus UnspentOutputStatus::Clone() const {
  UnspentOutputStatus out;
  out.confirmed = confirmed;
  return out;
}

// static
bool UnspentOutputStatus::Populate(
    const base::DictValue& dict, UnspentOutputStatus& out) {
  const base::Value* confirmed_value = dict.Find("confirmed");
  if (!confirmed_value) {
    return false;
  }
  {
    auto temp = (*confirmed_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.confirmed = *temp;
  }

  return true;
}

// static
bool UnspentOutputStatus::Populate(
    const base::Value& value, UnspentOutputStatus& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UnspentOutputStatus> UnspentOutputStatus::FromValue(const base::DictValue& value) {
  UnspentOutputStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UnspentOutputStatus> UnspentOutputStatus::FromValue(const base::Value& value) {
  UnspentOutputStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue UnspentOutputStatus::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("confirmed", this->confirmed);


  return to_value_result;
}


UnspentOutput::UnspentOutput()
 {}

UnspentOutput::~UnspentOutput() = default;
UnspentOutput::UnspentOutput(UnspentOutput&& rhs) noexcept = default;
UnspentOutput& UnspentOutput::operator=(UnspentOutput&& rhs) noexcept = default;
UnspentOutput UnspentOutput::Clone() const {
  UnspentOutput out;
  out.txid = txid;
  out.vout = vout;
  out.value = value;
  out.status = status.Clone();
  return out;
}

// static
bool UnspentOutput::Populate(
    const base::DictValue& dict, UnspentOutput& out) {
  const base::Value* txid_value = dict.Find("txid");
  if (!txid_value) {
    return false;
  }
  {
    auto* temp = (*txid_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.txid = *temp;
  }

  const base::Value* vout_value = dict.Find("vout");
  if (!vout_value) {
    return false;
  }
  {
    auto* temp = (*vout_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.vout = *temp;
  }

  const base::Value* value_value = dict.Find("value");
  if (!value_value) {
    return false;
  }
  {
    auto* temp = (*value_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.value = *temp;
  }

  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    if (!(*status_value).is_dict()) {
      return false;
    }
    if (!UnspentOutputStatus::Populate((*status_value).GetDict(), out.status)) {
      return false;
    }
  }

  return true;
}

// static
bool UnspentOutput::Populate(
    const base::Value& value, UnspentOutput& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UnspentOutput> UnspentOutput::FromValue(const base::DictValue& value) {
  UnspentOutput out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UnspentOutput> UnspentOutput::FromValue(const base::Value& value) {
  UnspentOutput out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue UnspentOutput::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("txid", this->txid);

  to_value_result.Set("vout", this->vout);

  to_value_result.Set("value", this->value);

  to_value_result.Set("status", (this->status).ToValue());


  return to_value_result;
}



}  // namespace bitcoin_rpc
}  // namespace brave_wallet

