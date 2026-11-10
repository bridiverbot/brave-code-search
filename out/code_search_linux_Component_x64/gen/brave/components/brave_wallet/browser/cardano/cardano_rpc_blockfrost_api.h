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

#ifndef BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_CARDANO_CARDANO_RPC_BLOCKFROST_API_H__
#define BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_CARDANO_CARDANO_RPC_BLOCKFROST_API_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace brave_wallet {
namespace cardano_rpc {
namespace blockfrost_api {

//
// Types
//

struct Block {
  Block();
  ~Block();
  Block(const Block&) = delete;
  Block& operator=(const Block&) = delete;
  Block(Block&& rhs) noexcept;
  Block& operator=(Block&& rhs) noexcept;

  // Populates a Block object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Block& out);

  // Populates a Block object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, Block& out);

  // Creates a deep copy of Block.
  Block Clone() const;

  // Creates a Block object from a base::DictValue, or nullopt on failure.
  static std::optional<Block> FromValue(const base::DictValue& value);

  // Creates a Block object from a base::Value, or nullopt on failure.
  static std::optional<Block> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of thisBlock
  // object.
  base::DictValue ToValue() const;

  // uint32_t
  std::string height;

  // uint64_t
  std::string slot;

  // uint32_t
  std::string epoch;

};

struct EpochParameters {
  EpochParameters();
  ~EpochParameters();
  EpochParameters(const EpochParameters&) = delete;
  EpochParameters& operator=(const EpochParameters&) = delete;
  EpochParameters(EpochParameters&& rhs) noexcept;
  EpochParameters& operator=(EpochParameters&& rhs) noexcept;

  // Populates a EpochParameters object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EpochParameters& out);

  // Populates a EpochParameters object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, EpochParameters& out);

  // Creates a deep copy of EpochParameters.
  EpochParameters Clone() const;

  // Creates a EpochParameters object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<EpochParameters> FromValue(const base::DictValue& value);

  // Creates a EpochParameters object from a base::Value, or nullopt on failure.
  static std::optional<EpochParameters> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisEpochParameters object.
  base::DictValue ToValue() const;

  // uint64_t
  std::string min_fee_a;

  // uint64_t
  std::string min_fee_b;

  // uint64_t
  std::string coins_per_utxo_size;

};

struct UnspentOutputAsset {
  UnspentOutputAsset();
  ~UnspentOutputAsset();
  UnspentOutputAsset(const UnspentOutputAsset&) = delete;
  UnspentOutputAsset& operator=(const UnspentOutputAsset&) = delete;
  UnspentOutputAsset(UnspentOutputAsset&& rhs) noexcept;
  UnspentOutputAsset& operator=(UnspentOutputAsset&& rhs) noexcept;

  // Populates a UnspentOutputAsset object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UnspentOutputAsset& out);

  // Populates a UnspentOutputAsset object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, UnspentOutputAsset& out);

  // Creates a deep copy of UnspentOutputAsset.
  UnspentOutputAsset Clone() const;

  // Creates a UnspentOutputAsset object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<UnspentOutputAsset> FromValue(const base::DictValue& value);

  // Creates a UnspentOutputAsset object from a base::Value, or nullopt on
  // failure.
  static std::optional<UnspentOutputAsset> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisUnspentOutputAsset object.
  base::DictValue ToValue() const;

  std::string unit;

  std::string quantity;

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

  std::string tx_hash;

  // uint32_t
  std::string output_index;

  std::vector<UnspentOutputAsset> amount;

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

  std::string hash;

};

struct AssetMetadata {
  AssetMetadata();
  ~AssetMetadata();
  AssetMetadata(const AssetMetadata&) = delete;
  AssetMetadata& operator=(const AssetMetadata&) = delete;
  AssetMetadata(AssetMetadata&& rhs) noexcept;
  AssetMetadata& operator=(AssetMetadata&& rhs) noexcept;

  // Populates a AssetMetadata object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AssetMetadata& out);

  // Populates a AssetMetadata object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AssetMetadata& out);

  // Creates a deep copy of AssetMetadata.
  AssetMetadata Clone() const;

  // Creates a AssetMetadata object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<AssetMetadata> FromValue(const base::DictValue& value);

  // Creates a AssetMetadata object from a base::Value, or nullopt on failure.
  static std::optional<AssetMetadata> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAssetMetadata object.
  base::DictValue ToValue() const;

  std::string name;

  std::string ticker;

  int decimals;

};

struct Asset {
  Asset();
  ~Asset();
  Asset(const Asset&) = delete;
  Asset& operator=(const Asset&) = delete;
  Asset(Asset&& rhs) noexcept;
  Asset& operator=(Asset&& rhs) noexcept;

  // Populates a Asset object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Asset& out);

  // Populates a Asset object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, Asset& out);

  // Creates a deep copy of Asset.
  Asset Clone() const;

  // Creates a Asset object from a base::DictValue, or nullopt on failure.
  static std::optional<Asset> FromValue(const base::DictValue& value);

  // Creates a Asset object from a base::Value, or nullopt on failure.
  static std::optional<Asset> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of thisAsset
  // object.
  base::DictValue ToValue() const;

  std::string asset;

  AssetMetadata metadata;

};


}  // namespace blockfrost_api
}  // namespace cardano_rpc
}  // namespace brave_wallet

#endif  // BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_CARDANO_CARDANO_RPC_BLOCKFROST_API_H__
