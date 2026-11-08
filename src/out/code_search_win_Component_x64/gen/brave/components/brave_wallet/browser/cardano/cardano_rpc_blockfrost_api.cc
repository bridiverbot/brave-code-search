// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_wallet/browser/cardano/cardano_rpc_blockfrost_api.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_wallet/browser/cardano/cardano_rpc_blockfrost_api.idl --root=../../ --destdir=gen --namespace=brave_wallet::cardano_rpc::blockfrost_api --generator=cpp --include-rules=

#include "brave/components/brave_wallet/browser/cardano/cardano_rpc_blockfrost_api.h"

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
namespace cardano_rpc {
namespace blockfrost_api {
//
// Types
//

Block::Block()
 {}

Block::~Block() = default;
Block::Block(Block&& rhs) noexcept = default;
Block& Block::operator=(Block&& rhs) noexcept = default;
Block Block::Clone() const {
  Block out;
  out.height = height;
  out.slot = slot;
  out.epoch = epoch;
  return out;
}

// static
bool Block::Populate(
    const base::DictValue& dict, Block& out) {
  const base::Value* height_value = dict.Find("height");
  if (!height_value) {
    return false;
  }
  {
    auto* temp = (*height_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.height = *temp;
  }

  const base::Value* slot_value = dict.Find("slot");
  if (!slot_value) {
    return false;
  }
  {
    auto* temp = (*slot_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.slot = *temp;
  }

  const base::Value* epoch_value = dict.Find("epoch");
  if (!epoch_value) {
    return false;
  }
  {
    auto* temp = (*epoch_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.epoch = *temp;
  }

  return true;
}

// static
bool Block::Populate(
    const base::Value& value, Block& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Block> Block::FromValue(const base::DictValue& value) {
  Block out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Block> Block::FromValue(const base::Value& value) {
  Block out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Block::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("height", this->height);

  to_value_result.Set("slot", this->slot);

  to_value_result.Set("epoch", this->epoch);


  return to_value_result;
}


EpochParameters::EpochParameters()
 {}

EpochParameters::~EpochParameters() = default;
EpochParameters::EpochParameters(EpochParameters&& rhs) noexcept = default;
EpochParameters& EpochParameters::operator=(EpochParameters&& rhs) noexcept = default;
EpochParameters EpochParameters::Clone() const {
  EpochParameters out;
  out.min_fee_a = min_fee_a;
  out.min_fee_b = min_fee_b;
  out.coins_per_utxo_size = coins_per_utxo_size;
  return out;
}

// static
bool EpochParameters::Populate(
    const base::DictValue& dict, EpochParameters& out) {
  const base::Value* min_fee_a_value = dict.Find("min_fee_a");
  if (!min_fee_a_value) {
    return false;
  }
  {
    auto* temp = (*min_fee_a_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.min_fee_a = *temp;
  }

  const base::Value* min_fee_b_value = dict.Find("min_fee_b");
  if (!min_fee_b_value) {
    return false;
  }
  {
    auto* temp = (*min_fee_b_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.min_fee_b = *temp;
  }

  const base::Value* coins_per_utxo_size_value = dict.Find("coins_per_utxo_size");
  if (!coins_per_utxo_size_value) {
    return false;
  }
  {
    auto* temp = (*coins_per_utxo_size_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.coins_per_utxo_size = *temp;
  }

  return true;
}

// static
bool EpochParameters::Populate(
    const base::Value& value, EpochParameters& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EpochParameters> EpochParameters::FromValue(const base::DictValue& value) {
  EpochParameters out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EpochParameters> EpochParameters::FromValue(const base::Value& value) {
  EpochParameters out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue EpochParameters::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("min_fee_a", this->min_fee_a);

  to_value_result.Set("min_fee_b", this->min_fee_b);

  to_value_result.Set("coins_per_utxo_size", this->coins_per_utxo_size);


  return to_value_result;
}


UnspentOutputAsset::UnspentOutputAsset()
 {}

UnspentOutputAsset::~UnspentOutputAsset() = default;
UnspentOutputAsset::UnspentOutputAsset(UnspentOutputAsset&& rhs) noexcept = default;
UnspentOutputAsset& UnspentOutputAsset::operator=(UnspentOutputAsset&& rhs) noexcept = default;
UnspentOutputAsset UnspentOutputAsset::Clone() const {
  UnspentOutputAsset out;
  out.unit = unit;
  out.quantity = quantity;
  return out;
}

// static
bool UnspentOutputAsset::Populate(
    const base::DictValue& dict, UnspentOutputAsset& out) {
  const base::Value* unit_value = dict.Find("unit");
  if (!unit_value) {
    return false;
  }
  {
    auto* temp = (*unit_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.unit = *temp;
  }

  const base::Value* quantity_value = dict.Find("quantity");
  if (!quantity_value) {
    return false;
  }
  {
    auto* temp = (*quantity_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.quantity = *temp;
  }

  return true;
}

// static
bool UnspentOutputAsset::Populate(
    const base::Value& value, UnspentOutputAsset& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UnspentOutputAsset> UnspentOutputAsset::FromValue(const base::DictValue& value) {
  UnspentOutputAsset out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UnspentOutputAsset> UnspentOutputAsset::FromValue(const base::Value& value) {
  UnspentOutputAsset out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue UnspentOutputAsset::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("unit", this->unit);

  to_value_result.Set("quantity", this->quantity);


  return to_value_result;
}


UnspentOutput::UnspentOutput()
 {}

UnspentOutput::~UnspentOutput() = default;
UnspentOutput::UnspentOutput(UnspentOutput&& rhs) noexcept = default;
UnspentOutput& UnspentOutput::operator=(UnspentOutput&& rhs) noexcept = default;
UnspentOutput UnspentOutput::Clone() const {
  UnspentOutput out;
  out.tx_hash = tx_hash;
  out.output_index = output_index;
  out.amount.reserve(amount.size());
  for (const auto& element : amount) {
    json_schema_compiler::util::AppendToContainer(out.amount, element.Clone());
  }
  return out;
}

// static
bool UnspentOutput::Populate(
    const base::DictValue& dict, UnspentOutput& out) {
  const base::Value* tx_hash_value = dict.Find("tx_hash");
  if (!tx_hash_value) {
    return false;
  }
  {
    auto* temp = (*tx_hash_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.tx_hash = *temp;
  }

  const base::Value* output_index_value = dict.Find("output_index");
  if (!output_index_value) {
    return false;
  }
  {
    auto* temp = (*output_index_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.output_index = *temp;
  }

  const base::Value* amount_value = dict.Find("amount");
  if (!amount_value) {
    return false;
  }
  {
    if (!(*amount_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*amount_value).GetList(), out.amount)) {
        return false;
      }
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

  to_value_result.Set("tx_hash", this->tx_hash);

  to_value_result.Set("output_index", this->output_index);

  to_value_result.Set("amount", json_schema_compiler::util::CreateValueFromArray(this->amount));


  return to_value_result;
}


Transaction::Transaction()
 {}

Transaction::~Transaction() = default;
Transaction::Transaction(Transaction&& rhs) noexcept = default;
Transaction& Transaction::operator=(Transaction&& rhs) noexcept = default;
Transaction Transaction::Clone() const {
  Transaction out;
  out.hash = hash;
  return out;
}

// static
bool Transaction::Populate(
    const base::DictValue& dict, Transaction& out) {
  const base::Value* hash_value = dict.Find("hash");
  if (!hash_value) {
    return false;
  }
  {
    auto* temp = (*hash_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.hash = *temp;
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

  to_value_result.Set("hash", this->hash);


  return to_value_result;
}


AssetMetadata::AssetMetadata()
: decimals(0) {}

AssetMetadata::~AssetMetadata() = default;
AssetMetadata::AssetMetadata(AssetMetadata&& rhs) noexcept = default;
AssetMetadata& AssetMetadata::operator=(AssetMetadata&& rhs) noexcept = default;
AssetMetadata AssetMetadata::Clone() const {
  AssetMetadata out;
  out.name = name;
  out.ticker = ticker;
  out.decimals = decimals;
  return out;
}

// static
bool AssetMetadata::Populate(
    const base::DictValue& dict, AssetMetadata& out) {
  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* ticker_value = dict.Find("ticker");
  if (!ticker_value) {
    return false;
  }
  {
    auto* temp = (*ticker_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.ticker = *temp;
  }

  const base::Value* decimals_value = dict.Find("decimals");
  if (!decimals_value) {
    return false;
  }
  {
    auto temp = (*decimals_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.decimals = *temp;
  }

  return true;
}

// static
bool AssetMetadata::Populate(
    const base::Value& value, AssetMetadata& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AssetMetadata> AssetMetadata::FromValue(const base::DictValue& value) {
  AssetMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AssetMetadata> AssetMetadata::FromValue(const base::Value& value) {
  AssetMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AssetMetadata::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("name", this->name);

  to_value_result.Set("ticker", this->ticker);

  to_value_result.Set("decimals", this->decimals);


  return to_value_result;
}


Asset::Asset()
 {}

Asset::~Asset() = default;
Asset::Asset(Asset&& rhs) noexcept = default;
Asset& Asset::operator=(Asset&& rhs) noexcept = default;
Asset Asset::Clone() const {
  Asset out;
  out.asset = asset;
  out.metadata = metadata.Clone();
  return out;
}

// static
bool Asset::Populate(
    const base::DictValue& dict, Asset& out) {
  const base::Value* asset_value = dict.Find("asset");
  if (!asset_value) {
    return false;
  }
  {
    auto* temp = (*asset_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.asset = *temp;
  }

  const base::Value* metadata_value = dict.Find("metadata");
  if (!metadata_value) {
    return false;
  }
  {
    if (!(*metadata_value).is_dict()) {
      return false;
    }
    if (!AssetMetadata::Populate((*metadata_value).GetDict(), out.metadata)) {
      return false;
    }
  }

  return true;
}

// static
bool Asset::Populate(
    const base::Value& value, Asset& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Asset> Asset::FromValue(const base::DictValue& value) {
  Asset out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Asset> Asset::FromValue(const base::Value& value) {
  Asset out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Asset::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("asset", this->asset);

  to_value_result.Set("metadata", (this->metadata).ToValue());


  return to_value_result;
}



}  // namespace blockfrost_api
}  // namespace cardano_rpc
}  // namespace brave_wallet

