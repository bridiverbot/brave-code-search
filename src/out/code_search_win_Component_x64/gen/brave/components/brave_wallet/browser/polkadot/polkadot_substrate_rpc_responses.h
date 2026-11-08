// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_wallet/browser/polkadot/polkadot_substrate_rpc_responses.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_wallet/browser/polkadot/polkadot_substrate_rpc_responses.idl --root=../../ --destdir=gen --namespace=brave_wallet::polkadot_substrate_rpc_responses --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_POLKADOT_POLKADOT_SUBSTRATE_RPC_RESPONSES_H__
#define BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_POLKADOT_POLKADOT_SUBSTRATE_RPC_RESPONSES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace brave_wallet {
namespace polkadot_substrate_rpc_responses {

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

struct PolkadotSystemChainResponse {
  PolkadotSystemChainResponse();
  ~PolkadotSystemChainResponse();
  PolkadotSystemChainResponse(const PolkadotSystemChainResponse&) = delete;
  PolkadotSystemChainResponse& operator=(const PolkadotSystemChainResponse&) = delete;
  PolkadotSystemChainResponse(PolkadotSystemChainResponse&& rhs) noexcept;
  PolkadotSystemChainResponse& operator=(PolkadotSystemChainResponse&& rhs) noexcept;

  // Populates a PolkadotSystemChainResponse object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PolkadotSystemChainResponse& out);

  // Populates a PolkadotSystemChainResponse object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PolkadotSystemChainResponse& out);

  // Creates a deep copy of PolkadotSystemChainResponse.
  PolkadotSystemChainResponse Clone() const;

  // Creates a PolkadotSystemChainResponse object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<PolkadotSystemChainResponse> FromValue(const base::DictValue& value);

  // Creates a PolkadotSystemChainResponse object from a base::Value, or nullopt
  // on failure.
  static std::optional<PolkadotSystemChainResponse> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPolkadotSystemChainResponse object.
  base::DictValue ToValue() const;

  std::string jsonrpc;

  int id;

  std::optional<std::string> result;

  std::optional<Error> error;

};

struct AccountInfo {
  AccountInfo();
  ~AccountInfo();
  AccountInfo(const AccountInfo&) = delete;
  AccountInfo& operator=(const AccountInfo&) = delete;
  AccountInfo(AccountInfo&& rhs) noexcept;
  AccountInfo& operator=(AccountInfo&& rhs) noexcept;

  // Populates a AccountInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AccountInfo& out);

  // Populates a AccountInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, AccountInfo& out);

  // Creates a deep copy of AccountInfo.
  AccountInfo Clone() const;

  // Creates a AccountInfo object from a base::DictValue, or nullopt on failure.
  static std::optional<AccountInfo> FromValue(const base::DictValue& value);

  // Creates a AccountInfo object from a base::Value, or nullopt on failure.
  static std::optional<AccountInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAccountInfo object.
  base::DictValue ToValue() const;

  std::string block;

  base::ListValue changes;

};

struct PolkadotAccountBalanceResponse {
  PolkadotAccountBalanceResponse();
  ~PolkadotAccountBalanceResponse();
  PolkadotAccountBalanceResponse(const PolkadotAccountBalanceResponse&) = delete;
  PolkadotAccountBalanceResponse& operator=(const PolkadotAccountBalanceResponse&) = delete;
  PolkadotAccountBalanceResponse(PolkadotAccountBalanceResponse&& rhs) noexcept;
  PolkadotAccountBalanceResponse& operator=(PolkadotAccountBalanceResponse&& rhs) noexcept;

  // Populates a PolkadotAccountBalanceResponse object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PolkadotAccountBalanceResponse& out);

  // Populates a PolkadotAccountBalanceResponse object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PolkadotAccountBalanceResponse& out);

  // Creates a deep copy of PolkadotAccountBalanceResponse.
  PolkadotAccountBalanceResponse Clone() const;

  // Creates a PolkadotAccountBalanceResponse object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<PolkadotAccountBalanceResponse> FromValue(const base::DictValue& value);

  // Creates a PolkadotAccountBalanceResponse object from a base::Value, or
  // nullopt on failure.
  static std::optional<PolkadotAccountBalanceResponse> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPolkadotAccountBalanceResponse object.
  base::DictValue ToValue() const;

  std::string jsonrpc;

  int id;

  std::optional<std::vector<AccountInfo>> result;

  std::optional<Error> error;

};

struct PolkadotAssetAccountBalanceResponse {
  PolkadotAssetAccountBalanceResponse();
  ~PolkadotAssetAccountBalanceResponse();
  PolkadotAssetAccountBalanceResponse(const PolkadotAssetAccountBalanceResponse&) = delete;
  PolkadotAssetAccountBalanceResponse& operator=(const PolkadotAssetAccountBalanceResponse&) = delete;
  PolkadotAssetAccountBalanceResponse(PolkadotAssetAccountBalanceResponse&& rhs) noexcept;
  PolkadotAssetAccountBalanceResponse& operator=(PolkadotAssetAccountBalanceResponse&& rhs) noexcept;

  // Populates a PolkadotAssetAccountBalanceResponse object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PolkadotAssetAccountBalanceResponse& out);

  // Populates a PolkadotAssetAccountBalanceResponse object from a Dict&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PolkadotAssetAccountBalanceResponse& out);

  // Creates a deep copy of PolkadotAssetAccountBalanceResponse.
  PolkadotAssetAccountBalanceResponse Clone() const;

  // Creates a PolkadotAssetAccountBalanceResponse object from a
  // base::DictValue, or nullopt on failure.
  static std::optional<PolkadotAssetAccountBalanceResponse> FromValue(const base::DictValue& value);

  // Creates a PolkadotAssetAccountBalanceResponse object from a base::Value, or
  // nullopt on failure.
  static std::optional<PolkadotAssetAccountBalanceResponse> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPolkadotAssetAccountBalanceResponse object.
  base::DictValue ToValue() const;

  std::string jsonrpc;

  int id;

  std::optional<std::vector<AccountInfo>> result;

  std::optional<Error> error;

};

struct PolkadotFinalizedHead {
  PolkadotFinalizedHead();
  ~PolkadotFinalizedHead();
  PolkadotFinalizedHead(const PolkadotFinalizedHead&) = delete;
  PolkadotFinalizedHead& operator=(const PolkadotFinalizedHead&) = delete;
  PolkadotFinalizedHead(PolkadotFinalizedHead&& rhs) noexcept;
  PolkadotFinalizedHead& operator=(PolkadotFinalizedHead&& rhs) noexcept;

  // Populates a PolkadotFinalizedHead object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PolkadotFinalizedHead& out);

  // Populates a PolkadotFinalizedHead object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PolkadotFinalizedHead& out);

  // Creates a deep copy of PolkadotFinalizedHead.
  PolkadotFinalizedHead Clone() const;

  // Creates a PolkadotFinalizedHead object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<PolkadotFinalizedHead> FromValue(const base::DictValue& value);

  // Creates a PolkadotFinalizedHead object from a base::Value, or nullopt on
  // failure.
  static std::optional<PolkadotFinalizedHead> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPolkadotFinalizedHead object.
  base::DictValue ToValue() const;

  std::string jsonrpc;

  int id;

  std::optional<std::string> result;

  std::optional<Error> error;

};

struct ChainHeaderDigest {
  ChainHeaderDigest();
  ~ChainHeaderDigest();
  ChainHeaderDigest(const ChainHeaderDigest&) = delete;
  ChainHeaderDigest& operator=(const ChainHeaderDigest&) = delete;
  ChainHeaderDigest(ChainHeaderDigest&& rhs) noexcept;
  ChainHeaderDigest& operator=(ChainHeaderDigest&& rhs) noexcept;

  // Populates a ChainHeaderDigest object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ChainHeaderDigest& out);

  // Populates a ChainHeaderDigest object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ChainHeaderDigest& out);

  // Creates a deep copy of ChainHeaderDigest.
  ChainHeaderDigest Clone() const;

  // Creates a ChainHeaderDigest object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ChainHeaderDigest> FromValue(const base::DictValue& value);

  // Creates a ChainHeaderDigest object from a base::Value, or nullopt on
  // failure.
  static std::optional<ChainHeaderDigest> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisChainHeaderDigest object.
  base::DictValue ToValue() const;

  std::vector<std::string> logs;

};

struct ChainHeader {
  ChainHeader();
  ~ChainHeader();
  ChainHeader(const ChainHeader&) = delete;
  ChainHeader& operator=(const ChainHeader&) = delete;
  ChainHeader(ChainHeader&& rhs) noexcept;
  ChainHeader& operator=(ChainHeader&& rhs) noexcept;

  // Populates a ChainHeader object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ChainHeader& out);

  // Populates a ChainHeader object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, ChainHeader& out);

  // Creates a deep copy of ChainHeader.
  ChainHeader Clone() const;

  // Creates a ChainHeader object from a base::DictValue, or nullopt on failure.
  static std::optional<ChainHeader> FromValue(const base::DictValue& value);

  // Creates a ChainHeader object from a base::Value, or nullopt on failure.
  static std::optional<ChainHeader> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisChainHeader object.
  base::DictValue ToValue() const;

  // The hex-encoded hash of the parent block's header.
  std::string parent_hash;

  // The number of the block in the current chain.
  std::string number;

  std::string state_root;

  std::string extrinsics_root;

  ChainHeaderDigest digest;

};

struct PolkadotChainHeader {
  PolkadotChainHeader();
  ~PolkadotChainHeader();
  PolkadotChainHeader(const PolkadotChainHeader&) = delete;
  PolkadotChainHeader& operator=(const PolkadotChainHeader&) = delete;
  PolkadotChainHeader(PolkadotChainHeader&& rhs) noexcept;
  PolkadotChainHeader& operator=(PolkadotChainHeader&& rhs) noexcept;

  // Populates a PolkadotChainHeader object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PolkadotChainHeader& out);

  // Populates a PolkadotChainHeader object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PolkadotChainHeader& out);

  // Creates a deep copy of PolkadotChainHeader.
  PolkadotChainHeader Clone() const;

  // Creates a PolkadotChainHeader object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<PolkadotChainHeader> FromValue(const base::DictValue& value);

  // Creates a PolkadotChainHeader object from a base::Value, or nullopt on
  // failure.
  static std::optional<PolkadotChainHeader> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPolkadotChainHeader object.
  base::DictValue ToValue() const;

  std::string jsonrpc;

  int id;

  std::optional<ChainHeader> result;

  std::optional<Error> error;

};

struct ChainBlockData {
  ChainBlockData();
  ~ChainBlockData();
  ChainBlockData(const ChainBlockData&) = delete;
  ChainBlockData& operator=(const ChainBlockData&) = delete;
  ChainBlockData(ChainBlockData&& rhs) noexcept;
  ChainBlockData& operator=(ChainBlockData&& rhs) noexcept;

  // Populates a ChainBlockData object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ChainBlockData& out);

  // Populates a ChainBlockData object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ChainBlockData& out);

  // Creates a deep copy of ChainBlockData.
  ChainBlockData Clone() const;

  // Creates a ChainBlockData object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ChainBlockData> FromValue(const base::DictValue& value);

  // Creates a ChainBlockData object from a base::Value, or nullopt on failure.
  static std::optional<ChainBlockData> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisChainBlockData object.
  base::DictValue ToValue() const;

  std::vector<std::string> extrinsics;

  ChainHeader header;

};

struct ChainBlock {
  ChainBlock();
  ~ChainBlock();
  ChainBlock(const ChainBlock&) = delete;
  ChainBlock& operator=(const ChainBlock&) = delete;
  ChainBlock(ChainBlock&& rhs) noexcept;
  ChainBlock& operator=(ChainBlock&& rhs) noexcept;

  // Populates a ChainBlock object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, ChainBlock& out);

  // Populates a ChainBlock object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, ChainBlock& out);

  // Creates a deep copy of ChainBlock.
  ChainBlock Clone() const;

  // Creates a ChainBlock object from a base::DictValue, or nullopt on failure.
  static std::optional<ChainBlock> FromValue(const base::DictValue& value);

  // Creates a ChainBlock object from a base::Value, or nullopt on failure.
  static std::optional<ChainBlock> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisChainBlock object.
  base::DictValue ToValue() const;

  ChainBlockData block;

  std::optional<base::Value> justification;

};

struct PolkadotBlock {
  PolkadotBlock();
  ~PolkadotBlock();
  PolkadotBlock(const PolkadotBlock&) = delete;
  PolkadotBlock& operator=(const PolkadotBlock&) = delete;
  PolkadotBlock(PolkadotBlock&& rhs) noexcept;
  PolkadotBlock& operator=(PolkadotBlock&& rhs) noexcept;

  // Populates a PolkadotBlock object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PolkadotBlock& out);

  // Populates a PolkadotBlock object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PolkadotBlock& out);

  // Creates a deep copy of PolkadotBlock.
  PolkadotBlock Clone() const;

  // Creates a PolkadotBlock object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<PolkadotBlock> FromValue(const base::DictValue& value);

  // Creates a PolkadotBlock object from a base::Value, or nullopt on failure.
  static std::optional<PolkadotBlock> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPolkadotBlock object.
  base::DictValue ToValue() const;

  std::string jsonrpc;

  int id;

  std::optional<ChainBlock> result;

  std::optional<Error> error;

};

struct PolkadotBlockHash {
  PolkadotBlockHash();
  ~PolkadotBlockHash();
  PolkadotBlockHash(const PolkadotBlockHash&) = delete;
  PolkadotBlockHash& operator=(const PolkadotBlockHash&) = delete;
  PolkadotBlockHash(PolkadotBlockHash&& rhs) noexcept;
  PolkadotBlockHash& operator=(PolkadotBlockHash&& rhs) noexcept;

  // Populates a PolkadotBlockHash object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PolkadotBlockHash& out);

  // Populates a PolkadotBlockHash object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PolkadotBlockHash& out);

  // Creates a deep copy of PolkadotBlockHash.
  PolkadotBlockHash Clone() const;

  // Creates a PolkadotBlockHash object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<PolkadotBlockHash> FromValue(const base::DictValue& value);

  // Creates a PolkadotBlockHash object from a base::Value, or nullopt on
  // failure.
  static std::optional<PolkadotBlockHash> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPolkadotBlockHash object.
  base::DictValue ToValue() const;

  std::string jsonrpc;

  int id;

  // A hex string containing the block's hash.
  std::optional<std::string> result;

  std::optional<Error> error;

};

struct RuntimeVersion {
  RuntimeVersion();
  ~RuntimeVersion();
  RuntimeVersion(const RuntimeVersion&) = delete;
  RuntimeVersion& operator=(const RuntimeVersion&) = delete;
  RuntimeVersion(RuntimeVersion&& rhs) noexcept;
  RuntimeVersion& operator=(RuntimeVersion&& rhs) noexcept;

  // Populates a RuntimeVersion object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RuntimeVersion& out);

  // Populates a RuntimeVersion object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, RuntimeVersion& out);

  // Creates a deep copy of RuntimeVersion.
  RuntimeVersion Clone() const;

  // Creates a RuntimeVersion object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<RuntimeVersion> FromValue(const base::DictValue& value);

  // Creates a RuntimeVersion object from a base::Value, or nullopt on failure.
  static std::optional<RuntimeVersion> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisRuntimeVersion object.
  base::DictValue ToValue() const;

  // The current version of the running chain specification.
  int spec_version;

  // The current version of the transaction format.
  int transaction_version;

};

struct PolkadotRuntimeVersion {
  PolkadotRuntimeVersion();
  ~PolkadotRuntimeVersion();
  PolkadotRuntimeVersion(const PolkadotRuntimeVersion&) = delete;
  PolkadotRuntimeVersion& operator=(const PolkadotRuntimeVersion&) = delete;
  PolkadotRuntimeVersion(PolkadotRuntimeVersion&& rhs) noexcept;
  PolkadotRuntimeVersion& operator=(PolkadotRuntimeVersion&& rhs) noexcept;

  // Populates a PolkadotRuntimeVersion object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PolkadotRuntimeVersion& out);

  // Populates a PolkadotRuntimeVersion object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PolkadotRuntimeVersion& out);

  // Creates a deep copy of PolkadotRuntimeVersion.
  PolkadotRuntimeVersion Clone() const;

  // Creates a PolkadotRuntimeVersion object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<PolkadotRuntimeVersion> FromValue(const base::DictValue& value);

  // Creates a PolkadotRuntimeVersion object from a base::Value, or nullopt on
  // failure.
  static std::optional<PolkadotRuntimeVersion> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPolkadotRuntimeVersion object.
  base::DictValue ToValue() const;

  std::string jsonrpc;

  int id;

  std::optional<RuntimeVersion> result;

  std::optional<Error> error;

};

struct PolkadotMetadataResponse {
  PolkadotMetadataResponse();
  ~PolkadotMetadataResponse();
  PolkadotMetadataResponse(const PolkadotMetadataResponse&) = delete;
  PolkadotMetadataResponse& operator=(const PolkadotMetadataResponse&) = delete;
  PolkadotMetadataResponse(PolkadotMetadataResponse&& rhs) noexcept;
  PolkadotMetadataResponse& operator=(PolkadotMetadataResponse&& rhs) noexcept;

  // Populates a PolkadotMetadataResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PolkadotMetadataResponse& out);

  // Populates a PolkadotMetadataResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PolkadotMetadataResponse& out);

  // Creates a deep copy of PolkadotMetadataResponse.
  PolkadotMetadataResponse Clone() const;

  // Creates a PolkadotMetadataResponse object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<PolkadotMetadataResponse> FromValue(const base::DictValue& value);

  // Creates a PolkadotMetadataResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<PolkadotMetadataResponse> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPolkadotMetadataResponse object.
  base::DictValue ToValue() const;

  std::string jsonrpc;

  int id;

  std::optional<std::string> result;

  std::optional<Error> error;

};

struct SystemProperties {
  SystemProperties();
  ~SystemProperties();
  SystemProperties(const SystemProperties&) = delete;
  SystemProperties& operator=(const SystemProperties&) = delete;
  SystemProperties(SystemProperties&& rhs) noexcept;
  SystemProperties& operator=(SystemProperties&& rhs) noexcept;

  // Populates a SystemProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SystemProperties& out);

  // Populates a SystemProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, SystemProperties& out);

  // Creates a deep copy of SystemProperties.
  SystemProperties Clone() const;

  // Creates a SystemProperties object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<SystemProperties> FromValue(const base::DictValue& value);

  // Creates a SystemProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<SystemProperties> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisSystemProperties object.
  base::DictValue ToValue() const;

  struct TokenDecimals {
    TokenDecimals();
    ~TokenDecimals();
    TokenDecimals(const TokenDecimals&) = delete;
    TokenDecimals& operator=(const TokenDecimals&) = delete;
    TokenDecimals(TokenDecimals&& rhs) noexcept;
    TokenDecimals& operator=(TokenDecimals&& rhs) noexcept;

    // Populates a TokenDecimals object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, TokenDecimals& out);

    // Creates a deep copy of TokenDecimals.
    TokenDecimals Clone() const;

    // Creates a TokenDecimals object from a base::Value, or nullopt on failure.
    static std::optional<TokenDecimals> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of
    // thisTokenDecimals object.
    base::Value ToValue() const;
    // Choices:
    std::optional<int> as_integer;
    std::optional<std::vector<int>> as_integers;
  };

  struct TokenSymbol {
    TokenSymbol();
    ~TokenSymbol();
    TokenSymbol(const TokenSymbol&) = delete;
    TokenSymbol& operator=(const TokenSymbol&) = delete;
    TokenSymbol(TokenSymbol&& rhs) noexcept;
    TokenSymbol& operator=(TokenSymbol&& rhs) noexcept;

    // Populates a TokenSymbol object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, TokenSymbol& out);

    // Creates a deep copy of TokenSymbol.
    TokenSymbol Clone() const;

    // Creates a TokenSymbol object from a base::Value, or nullopt on failure.
    static std::optional<TokenSymbol> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of
    // thisTokenSymbol object.
    base::Value ToValue() const;
    // Choices:
    std::optional<std::string> as_string;
    std::optional<std::vector<std::string>> as_strings;
  };


  std::optional<int> ss58_format;

  TokenDecimals token_decimals;

  TokenSymbol token_symbol;

};

struct PolkadotSystemProperties {
  PolkadotSystemProperties();
  ~PolkadotSystemProperties();
  PolkadotSystemProperties(const PolkadotSystemProperties&) = delete;
  PolkadotSystemProperties& operator=(const PolkadotSystemProperties&) = delete;
  PolkadotSystemProperties(PolkadotSystemProperties&& rhs) noexcept;
  PolkadotSystemProperties& operator=(PolkadotSystemProperties&& rhs) noexcept;

  // Populates a PolkadotSystemProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PolkadotSystemProperties& out);

  // Populates a PolkadotSystemProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PolkadotSystemProperties& out);

  // Creates a deep copy of PolkadotSystemProperties.
  PolkadotSystemProperties Clone() const;

  // Creates a PolkadotSystemProperties object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<PolkadotSystemProperties> FromValue(const base::DictValue& value);

  // Creates a PolkadotSystemProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<PolkadotSystemProperties> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPolkadotSystemProperties object.
  base::DictValue ToValue() const;

  std::string jsonrpc;

  int id;

  std::optional<SystemProperties> result;

  std::optional<Error> error;

};

struct PolkadotSubmitExtrinsic {
  PolkadotSubmitExtrinsic();
  ~PolkadotSubmitExtrinsic();
  PolkadotSubmitExtrinsic(const PolkadotSubmitExtrinsic&) = delete;
  PolkadotSubmitExtrinsic& operator=(const PolkadotSubmitExtrinsic&) = delete;
  PolkadotSubmitExtrinsic(PolkadotSubmitExtrinsic&& rhs) noexcept;
  PolkadotSubmitExtrinsic& operator=(PolkadotSubmitExtrinsic&& rhs) noexcept;

  // Populates a PolkadotSubmitExtrinsic object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PolkadotSubmitExtrinsic& out);

  // Populates a PolkadotSubmitExtrinsic object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PolkadotSubmitExtrinsic& out);

  // Creates a deep copy of PolkadotSubmitExtrinsic.
  PolkadotSubmitExtrinsic Clone() const;

  // Creates a PolkadotSubmitExtrinsic object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<PolkadotSubmitExtrinsic> FromValue(const base::DictValue& value);

  // Creates a PolkadotSubmitExtrinsic object from a base::Value, or nullopt on
  // failure.
  static std::optional<PolkadotSubmitExtrinsic> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPolkadotSubmitExtrinsic object.
  base::DictValue ToValue() const;

  std::string jsonrpc;

  int id;

  std::optional<std::string> result;

  std::optional<Error> error;

};

struct PolkadotPaymentInfo {
  PolkadotPaymentInfo();
  ~PolkadotPaymentInfo();
  PolkadotPaymentInfo(const PolkadotPaymentInfo&) = delete;
  PolkadotPaymentInfo& operator=(const PolkadotPaymentInfo&) = delete;
  PolkadotPaymentInfo(PolkadotPaymentInfo&& rhs) noexcept;
  PolkadotPaymentInfo& operator=(PolkadotPaymentInfo&& rhs) noexcept;

  // Populates a PolkadotPaymentInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PolkadotPaymentInfo& out);

  // Populates a PolkadotPaymentInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PolkadotPaymentInfo& out);

  // Creates a deep copy of PolkadotPaymentInfo.
  PolkadotPaymentInfo Clone() const;

  // Creates a PolkadotPaymentInfo object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<PolkadotPaymentInfo> FromValue(const base::DictValue& value);

  // Creates a PolkadotPaymentInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<PolkadotPaymentInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPolkadotPaymentInfo object.
  base::DictValue ToValue() const;

  std::string jsonrpc;

  int id;

  std::optional<std::string> result;

  std::optional<Error> error;

};

struct PolkadotEvents {
  PolkadotEvents();
  ~PolkadotEvents();
  PolkadotEvents(const PolkadotEvents&) = delete;
  PolkadotEvents& operator=(const PolkadotEvents&) = delete;
  PolkadotEvents(PolkadotEvents&& rhs) noexcept;
  PolkadotEvents& operator=(PolkadotEvents&& rhs) noexcept;

  // Populates a PolkadotEvents object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PolkadotEvents& out);

  // Populates a PolkadotEvents object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PolkadotEvents& out);

  // Creates a deep copy of PolkadotEvents.
  PolkadotEvents Clone() const;

  // Creates a PolkadotEvents object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<PolkadotEvents> FromValue(const base::DictValue& value);

  // Creates a PolkadotEvents object from a base::Value, or nullopt on failure.
  static std::optional<PolkadotEvents> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPolkadotEvents object.
  base::DictValue ToValue() const;

  std::string jsonrpc;

  int id;

  std::optional<std::string> result;

  std::optional<Error> error;

};


}  // namespace polkadot_substrate_rpc_responses
}  // namespace brave_wallet

#endif  // BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_POLKADOT_POLKADOT_SUBSTRATE_RPC_RESPONSES_H__
