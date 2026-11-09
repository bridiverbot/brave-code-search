// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_wallet/browser/simulation_responses.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_wallet/browser/simulation_responses.idl --root=../../ --destdir=gen --namespace=brave_wallet::%(namespace)s --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_SIMULATION_RESPONSES_H__
#define BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_SIMULATION_RESPONSES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include <string_view>


namespace brave_wallet {
namespace simulation_responses {

//
// Types
//

enum class WarningSeverity {
  kNone = 0,
  kCritical,
  kWarning,
  kMaxValue = kWarning,
};


const char* ToString(WarningSeverity as_enum);
WarningSeverity ParseWarningSeverity(std::string_view as_string);
std::u16string GetWarningSeverityParseError(std::string_view as_string);

enum class EVMRawInfoKind {
  kNone = 0,
  kErc20Transfer,
  kErc20Approval,
  kNativeAssetTransfer,
  kErc721Transfer,
  kErc721Approval,
  kErc721ApprovalForAll,
  kErc1155Transfer,
  kErc1155ApprovalForAll,
  kAnyNftFromCollectionTransfer,
  kMaxValue = kAnyNftFromCollectionTransfer,
};


const char* ToString(EVMRawInfoKind as_enum);
EVMRawInfoKind ParseEVMRawInfoKind(std::string_view as_string);
std::u16string GetEVMRawInfoKindParseError(std::string_view as_string);

enum class SolanaRawInfoKind {
  kNone = 0,
  kSolTransfer,
  kSplTransfer,
  kSplApproval,
  kSolStakeAuthorityChange,
  kUserAccountOwnerChange,
  kMaxValue = kUserAccountOwnerChange,
};


const char* ToString(SolanaRawInfoKind as_enum);
SolanaRawInfoKind ParseSolanaRawInfoKind(std::string_view as_string);
std::u16string GetSolanaRawInfoKindParseError(std::string_view as_string);

enum class MetaplexTokenStandardKind {
  kNone = 0,
  kNonFungible,
  kFungibleAsset,
  kFungible,
  kNonFungibleEdition,
  kUnknown,
  kMaxValue = kUnknown,
};


const char* ToString(MetaplexTokenStandardKind as_enum);
MetaplexTokenStandardKind ParseMetaplexTokenStandardKind(std::string_view as_string);
std::u16string GetMetaplexTokenStandardKindParseError(std::string_view as_string);

enum class DiffSign {
  kNone = 0,
  kPlus,
  kMinus,
  kMaxValue = kMinus,
};


const char* ToString(DiffSign as_enum);
DiffSign ParseDiffSign(std::string_view as_string);
std::u16string GetDiffSignParseError(std::string_view as_string);

enum class EVMAddressKind {
  kNone = 0,
  kAccount,
  kMaxValue = kAccount,
};


const char* ToString(EVMAddressKind as_enum);
EVMAddressKind ParseEVMAddressKind(std::string_view as_string);
std::u16string GetEVMAddressKindParseError(std::string_view as_string);

enum class AssetPriceSource {
  kNone = 0,
  kSimplehash,
  kDefillama,
  kCoingecko,
  kMaxValue = kCoingecko,
};


const char* ToString(AssetPriceSource as_enum);
AssetPriceSource ParseAssetPriceSource(std::string_view as_string);
std::u16string GetAssetPriceSourceParseError(std::string_view as_string);

enum class EVMErrorKind {
  kNone = 0,
  kTransactionReverted,
  kTransactionError,
  kSimulationFailed,
  kUnknownError,
  kMaxValue = kUnknownError,
};


const char* ToString(EVMErrorKind as_enum);
EVMErrorKind ParseEVMErrorKind(std::string_view as_string);
std::u16string GetEVMErrorKindParseError(std::string_view as_string);

enum class SuggestedColor {
  kNone = 0,
  kCredit,
  kDebit,
  kInfo,
  kMaxValue = kInfo,
};


const char* ToString(SuggestedColor as_enum);
SuggestedColor ParseSuggestedColor(std::string_view as_string);
std::u16string GetSuggestedColorParseError(std::string_view as_string);

struct Price {
  Price();
  ~Price();
  Price(const Price&) = delete;
  Price& operator=(const Price&) = delete;
  Price(Price&& rhs) noexcept;
  Price& operator=(Price&& rhs) noexcept;

  // Populates a Price object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Price& out);

  // Populates a Price object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, Price& out);

  // Creates a deep copy of Price.
  Price Clone() const;

  // Creates a Price object from a base::DictValue, or nullopt on failure.
  static std::optional<Price> FromValue(const base::DictValue& value);

  // Creates a Price object from a base::Value, or nullopt on failure.
  static std::optional<Price> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of thisPrice
  // object.
  base::DictValue ToValue() const;

  AssetPriceSource source;

  std::string updated_at;

  std::string dollar_value_per_token;

};

struct Warning {
  Warning();
  ~Warning();
  Warning(const Warning&) = delete;
  Warning& operator=(const Warning&) = delete;
  Warning(Warning&& rhs) noexcept;
  Warning& operator=(Warning&& rhs) noexcept;

  // Populates a Warning object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Warning& out);

  // Populates a Warning object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, Warning& out);

  // Creates a deep copy of Warning.
  Warning Clone() const;

  // Creates a Warning object from a base::DictValue, or nullopt on failure.
  static std::optional<Warning> FromValue(const base::DictValue& value);

  // Creates a Warning object from a base::Value, or nullopt on failure.
  static std::optional<Warning> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisWarning object.
  base::DictValue ToValue() const;

  WarningSeverity severity;

  std::string kind;

  std::string message;

};

struct EVMError {
  EVMError();
  ~EVMError();
  EVMError(const EVMError&) = delete;
  EVMError& operator=(const EVMError&) = delete;
  EVMError(EVMError&& rhs) noexcept;
  EVMError& operator=(EVMError&& rhs) noexcept;

  // Populates a EVMError object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, EVMError& out);

  // Populates a EVMError object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, EVMError& out);

  // Creates a deep copy of EVMError.
  EVMError Clone() const;

  // Creates a EVMError object from a base::DictValue, or nullopt on failure.
  static std::optional<EVMError> FromValue(const base::DictValue& value);

  // Creates a EVMError object from a base::Value, or nullopt on failure.
  static std::optional<EVMError> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisEVMError object.
  base::DictValue ToValue() const;

  EVMErrorKind kind;

  std::string human_readable_error;

};

struct EVMCounterparty {
  EVMCounterparty();
  ~EVMCounterparty();
  EVMCounterparty(const EVMCounterparty&) = delete;
  EVMCounterparty& operator=(const EVMCounterparty&) = delete;
  EVMCounterparty(EVMCounterparty&& rhs) noexcept;
  EVMCounterparty& operator=(EVMCounterparty&& rhs) noexcept;

  // Populates a EVMCounterparty object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EVMCounterparty& out);

  // Populates a EVMCounterparty object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, EVMCounterparty& out);

  // Creates a deep copy of EVMCounterparty.
  EVMCounterparty Clone() const;

  // Creates a EVMCounterparty object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<EVMCounterparty> FromValue(const base::DictValue& value);

  // Creates a EVMCounterparty object from a base::Value, or nullopt on failure.
  static std::optional<EVMCounterparty> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisEVMCounterparty object.
  base::DictValue ToValue() const;

  EVMAddressKind kind;

  std::string address;

};

struct EVMAmount {
  EVMAmount();
  ~EVMAmount();
  EVMAmount(const EVMAmount&) = delete;
  EVMAmount& operator=(const EVMAmount&) = delete;
  EVMAmount(EVMAmount&& rhs) noexcept;
  EVMAmount& operator=(EVMAmount&& rhs) noexcept;

  // Populates a EVMAmount object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, EVMAmount& out);

  // Populates a EVMAmount object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, EVMAmount& out);

  // Creates a deep copy of EVMAmount.
  EVMAmount Clone() const;

  // Creates a EVMAmount object from a base::DictValue, or nullopt on failure.
  static std::optional<EVMAmount> FromValue(const base::DictValue& value);

  // Creates a EVMAmount object from a base::Value, or nullopt on failure.
  static std::optional<EVMAmount> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisEVMAmount object.
  base::DictValue ToValue() const;

  std::string after;

  std::string before;

};

struct EVMAsset {
  EVMAsset();
  ~EVMAsset();
  EVMAsset(const EVMAsset&) = delete;
  EVMAsset& operator=(const EVMAsset&) = delete;
  EVMAsset(EVMAsset&& rhs) noexcept;
  EVMAsset& operator=(EVMAsset&& rhs) noexcept;

  // Populates a EVMAsset object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, EVMAsset& out);

  // Populates a EVMAsset object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, EVMAsset& out);

  // Creates a deep copy of EVMAsset.
  EVMAsset Clone() const;

  // Creates a EVMAsset object from a base::DictValue, or nullopt on failure.
  static std::optional<EVMAsset> FromValue(const base::DictValue& value);

  // Creates a EVMAsset object from a base::Value, or nullopt on failure.
  static std::optional<EVMAsset> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisEVMAsset object.
  base::DictValue ToValue() const;

  std::string address;

  std::optional<base::Value> symbol;

  std::optional<base::Value> name;

  std::optional<base::Value> collection;

  std::optional<std::string> decimals;

  std::optional<bool> verified;

  // This field is not be present in case of a native asset.
  std::optional<std::vector<std::string>> lists;

  // nullable field of type DOMString
  std::optional<base::Value> image_url;

  // nullable field of type Price
  base::Value price;

};

struct NFTMetadata {
  NFTMetadata();
  ~NFTMetadata();
  NFTMetadata(const NFTMetadata&) = delete;
  NFTMetadata& operator=(const NFTMetadata&) = delete;
  NFTMetadata(NFTMetadata&& rhs) noexcept;
  NFTMetadata& operator=(NFTMetadata&& rhs) noexcept;

  // Populates a NFTMetadata object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NFTMetadata& out);

  // Populates a NFTMetadata object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, NFTMetadata& out);

  // Creates a deep copy of NFTMetadata.
  NFTMetadata Clone() const;

  // Creates a NFTMetadata object from a base::DictValue, or nullopt on failure.
  static std::optional<NFTMetadata> FromValue(const base::DictValue& value);

  // Creates a NFTMetadata object from a base::Value, or nullopt on failure.
  static std::optional<NFTMetadata> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisNFTMetadata object.
  base::DictValue ToValue() const;

  std::string raw_image_url;

};

struct ERC20TransferData {
  ERC20TransferData();
  ~ERC20TransferData();
  ERC20TransferData(const ERC20TransferData&) = delete;
  ERC20TransferData& operator=(const ERC20TransferData&) = delete;
  ERC20TransferData(ERC20TransferData&& rhs) noexcept;
  ERC20TransferData& operator=(ERC20TransferData&& rhs) noexcept;

  // Populates a ERC20TransferData object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ERC20TransferData& out);

  // Populates a ERC20TransferData object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ERC20TransferData& out);

  // Creates a deep copy of ERC20TransferData.
  ERC20TransferData Clone() const;

  // Creates a ERC20TransferData object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ERC20TransferData> FromValue(const base::DictValue& value);

  // Creates a ERC20TransferData object from a base::Value, or nullopt on
  // failure.
  static std::optional<ERC20TransferData> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisERC20TransferData object.
  base::DictValue ToValue() const;

  // nullable field of type EVMCounterparty
  base::Value counterparty;

  EVMAmount amount;

  EVMAsset asset;

};

struct ERC20ApprovalData {
  ERC20ApprovalData();
  ~ERC20ApprovalData();
  ERC20ApprovalData(const ERC20ApprovalData&) = delete;
  ERC20ApprovalData& operator=(const ERC20ApprovalData&) = delete;
  ERC20ApprovalData(ERC20ApprovalData&& rhs) noexcept;
  ERC20ApprovalData& operator=(ERC20ApprovalData&& rhs) noexcept;

  // Populates a ERC20ApprovalData object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ERC20ApprovalData& out);

  // Populates a ERC20ApprovalData object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ERC20ApprovalData& out);

  // Creates a deep copy of ERC20ApprovalData.
  ERC20ApprovalData Clone() const;

  // Creates a ERC20ApprovalData object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ERC20ApprovalData> FromValue(const base::DictValue& value);

  // Creates a ERC20ApprovalData object from a base::Value, or nullopt on
  // failure.
  static std::optional<ERC20ApprovalData> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisERC20ApprovalData object.
  base::DictValue ToValue() const;

  EVMCounterparty owner;

  EVMCounterparty spender;

  EVMAmount amount;

  EVMAsset asset;

};

struct NativeAssetTransferData {
  NativeAssetTransferData();
  ~NativeAssetTransferData();
  NativeAssetTransferData(const NativeAssetTransferData&) = delete;
  NativeAssetTransferData& operator=(const NativeAssetTransferData&) = delete;
  NativeAssetTransferData(NativeAssetTransferData&& rhs) noexcept;
  NativeAssetTransferData& operator=(NativeAssetTransferData&& rhs) noexcept;

  // Populates a NativeAssetTransferData object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NativeAssetTransferData& out);

  // Populates a NativeAssetTransferData object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, NativeAssetTransferData& out);

  // Creates a deep copy of NativeAssetTransferData.
  NativeAssetTransferData Clone() const;

  // Creates a NativeAssetTransferData object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<NativeAssetTransferData> FromValue(const base::DictValue& value);

  // Creates a NativeAssetTransferData object from a base::Value, or nullopt on
  // failure.
  static std::optional<NativeAssetTransferData> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisNativeAssetTransferData object.
  base::DictValue ToValue() const;

  EVMAmount amount;

  EVMAsset asset;

  // nullable field of type EVMCounterparty
  base::Value counterparty;

};

struct ERC721TransferData {
  ERC721TransferData();
  ~ERC721TransferData();
  ERC721TransferData(const ERC721TransferData&) = delete;
  ERC721TransferData& operator=(const ERC721TransferData&) = delete;
  ERC721TransferData(ERC721TransferData&& rhs) noexcept;
  ERC721TransferData& operator=(ERC721TransferData&& rhs) noexcept;

  // Populates a ERC721TransferData object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ERC721TransferData& out);

  // Populates a ERC721TransferData object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ERC721TransferData& out);

  // Creates a deep copy of ERC721TransferData.
  ERC721TransferData Clone() const;

  // Creates a ERC721TransferData object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ERC721TransferData> FromValue(const base::DictValue& value);

  // Creates a ERC721TransferData object from a base::Value, or nullopt on
  // failure.
  static std::optional<ERC721TransferData> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisERC721TransferData object.
  base::DictValue ToValue() const;

  EVMAmount amount;

  // nullable field of type EVMCounterparty
  base::Value counterparty;

  NFTMetadata metadata;

  // nullable field of type DOMString
  base::Value token_id;

  EVMAsset asset;

};

struct ERC721ApprovalData {
  ERC721ApprovalData();
  ~ERC721ApprovalData();
  ERC721ApprovalData(const ERC721ApprovalData&) = delete;
  ERC721ApprovalData& operator=(const ERC721ApprovalData&) = delete;
  ERC721ApprovalData(ERC721ApprovalData&& rhs) noexcept;
  ERC721ApprovalData& operator=(ERC721ApprovalData&& rhs) noexcept;

  // Populates a ERC721ApprovalData object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ERC721ApprovalData& out);

  // Populates a ERC721ApprovalData object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ERC721ApprovalData& out);

  // Creates a deep copy of ERC721ApprovalData.
  ERC721ApprovalData Clone() const;

  // Creates a ERC721ApprovalData object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ERC721ApprovalData> FromValue(const base::DictValue& value);

  // Creates a ERC721ApprovalData object from a base::Value, or nullopt on
  // failure.
  static std::optional<ERC721ApprovalData> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisERC721ApprovalData object.
  base::DictValue ToValue() const;

  EVMAmount amount;

  NFTMetadata metadata;

  EVMCounterparty owner;

  EVMCounterparty spender;

  // nullable field of type DOMString
  base::Value token_id;

  EVMAsset asset;

};

struct ERC721ApprovalForAllData {
  ERC721ApprovalForAllData();
  ~ERC721ApprovalForAllData();
  ERC721ApprovalForAllData(const ERC721ApprovalForAllData&) = delete;
  ERC721ApprovalForAllData& operator=(const ERC721ApprovalForAllData&) = delete;
  ERC721ApprovalForAllData(ERC721ApprovalForAllData&& rhs) noexcept;
  ERC721ApprovalForAllData& operator=(ERC721ApprovalForAllData&& rhs) noexcept;

  // Populates a ERC721ApprovalForAllData object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ERC721ApprovalForAllData& out);

  // Populates a ERC721ApprovalForAllData object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ERC721ApprovalForAllData& out);

  // Creates a deep copy of ERC721ApprovalForAllData.
  ERC721ApprovalForAllData Clone() const;

  // Creates a ERC721ApprovalForAllData object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<ERC721ApprovalForAllData> FromValue(const base::DictValue& value);

  // Creates a ERC721ApprovalForAllData object from a base::Value, or nullopt on
  // failure.
  static std::optional<ERC721ApprovalForAllData> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisERC721ApprovalForAllData object.
  base::DictValue ToValue() const;

  EVMAmount amount;

  EVMCounterparty owner;

  EVMCounterparty spender;

  EVMAsset asset;

};

struct ERC1155TransferData {
  ERC1155TransferData();
  ~ERC1155TransferData();
  ERC1155TransferData(const ERC1155TransferData&) = delete;
  ERC1155TransferData& operator=(const ERC1155TransferData&) = delete;
  ERC1155TransferData(ERC1155TransferData&& rhs) noexcept;
  ERC1155TransferData& operator=(ERC1155TransferData&& rhs) noexcept;

  // Populates a ERC1155TransferData object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ERC1155TransferData& out);

  // Populates a ERC1155TransferData object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ERC1155TransferData& out);

  // Creates a deep copy of ERC1155TransferData.
  ERC1155TransferData Clone() const;

  // Creates a ERC1155TransferData object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ERC1155TransferData> FromValue(const base::DictValue& value);

  // Creates a ERC1155TransferData object from a base::Value, or nullopt on
  // failure.
  static std::optional<ERC1155TransferData> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisERC1155TransferData object.
  base::DictValue ToValue() const;

  EVMAmount amount;

  NFTMetadata metadata;

  // nullable field of type DOMString
  base::Value token_id;

  // nullable field of type EVMCounterparty
  base::Value counterparty;

  EVMAsset asset;

};

struct ERC1155ApprovalForAllData {
  ERC1155ApprovalForAllData();
  ~ERC1155ApprovalForAllData();
  ERC1155ApprovalForAllData(const ERC1155ApprovalForAllData&) = delete;
  ERC1155ApprovalForAllData& operator=(const ERC1155ApprovalForAllData&) = delete;
  ERC1155ApprovalForAllData(ERC1155ApprovalForAllData&& rhs) noexcept;
  ERC1155ApprovalForAllData& operator=(ERC1155ApprovalForAllData&& rhs) noexcept;

  // Populates a ERC1155ApprovalForAllData object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ERC1155ApprovalForAllData& out);

  // Populates a ERC1155ApprovalForAllData object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ERC1155ApprovalForAllData& out);

  // Creates a deep copy of ERC1155ApprovalForAllData.
  ERC1155ApprovalForAllData Clone() const;

  // Creates a ERC1155ApprovalForAllData object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<ERC1155ApprovalForAllData> FromValue(const base::DictValue& value);

  // Creates a ERC1155ApprovalForAllData object from a base::Value, or nullopt
  // on failure.
  static std::optional<ERC1155ApprovalForAllData> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisERC1155ApprovalForAllData object.
  base::DictValue ToValue() const;

  EVMAmount amount;

  EVMCounterparty owner;

  EVMCounterparty spender;

  EVMAsset asset;

};

struct EVMStateChangeRawInfo {
  EVMStateChangeRawInfo();
  ~EVMStateChangeRawInfo();
  EVMStateChangeRawInfo(const EVMStateChangeRawInfo&) = delete;
  EVMStateChangeRawInfo& operator=(const EVMStateChangeRawInfo&) = delete;
  EVMStateChangeRawInfo(EVMStateChangeRawInfo&& rhs) noexcept;
  EVMStateChangeRawInfo& operator=(EVMStateChangeRawInfo&& rhs) noexcept;

  // Populates a EVMStateChangeRawInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EVMStateChangeRawInfo& out);

  // Populates a EVMStateChangeRawInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, EVMStateChangeRawInfo& out);

  // Creates a deep copy of EVMStateChangeRawInfo.
  EVMStateChangeRawInfo Clone() const;

  // Creates a EVMStateChangeRawInfo object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<EVMStateChangeRawInfo> FromValue(const base::DictValue& value);

  // Creates a EVMStateChangeRawInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<EVMStateChangeRawInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisEVMStateChangeRawInfo object.
  base::DictValue ToValue() const;

  EVMRawInfoKind kind;

  // data is a non-nullable union of the following types:   - ERC20TransferData
  // - ERC20ApprovalData   - NativeAssetTransferData   - ERC721TransferData   -
  // ERC721ApprovalData   - ERC721ApprovalForAllData   - ERC1155TransferData   -
  // ERC1155ApprovalForAllData
  base::Value data;

};

struct EVMStateChange {
  EVMStateChange();
  ~EVMStateChange();
  EVMStateChange(const EVMStateChange&) = delete;
  EVMStateChange& operator=(const EVMStateChange&) = delete;
  EVMStateChange(EVMStateChange&& rhs) noexcept;
  EVMStateChange& operator=(EVMStateChange&& rhs) noexcept;

  // Populates a EVMStateChange object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EVMStateChange& out);

  // Populates a EVMStateChange object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, EVMStateChange& out);

  // Creates a deep copy of EVMStateChange.
  EVMStateChange Clone() const;

  // Creates a EVMStateChange object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<EVMStateChange> FromValue(const base::DictValue& value);

  // Creates a EVMStateChange object from a base::Value, or nullopt on failure.
  static std::optional<EVMStateChange> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisEVMStateChange object.
  base::DictValue ToValue() const;

  std::string human_readable_diff;

  EVMStateChangeRawInfo raw_info;

};

struct EVMAggregatedSimulationResults {
  EVMAggregatedSimulationResults();
  ~EVMAggregatedSimulationResults();
  EVMAggregatedSimulationResults(const EVMAggregatedSimulationResults&) = delete;
  EVMAggregatedSimulationResults& operator=(const EVMAggregatedSimulationResults&) = delete;
  EVMAggregatedSimulationResults(EVMAggregatedSimulationResults&& rhs) noexcept;
  EVMAggregatedSimulationResults& operator=(EVMAggregatedSimulationResults&& rhs) noexcept;

  // Populates a EVMAggregatedSimulationResults object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EVMAggregatedSimulationResults& out);

  // Populates a EVMAggregatedSimulationResults object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, EVMAggregatedSimulationResults& out);

  // Creates a deep copy of EVMAggregatedSimulationResults.
  EVMAggregatedSimulationResults Clone() const;

  // Creates a EVMAggregatedSimulationResults object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<EVMAggregatedSimulationResults> FromValue(const base::DictValue& value);

  // Creates a EVMAggregatedSimulationResults object from a base::Value, or
  // nullopt on failure.
  static std::optional<EVMAggregatedSimulationResults> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisEVMAggregatedSimulationResults object.
  base::DictValue ToValue() const;

  // object with key being the account address and value being of type
  // EVMStateChange[].
  base::Value expected_state_changes;

  // nullable field of type EVMError
  base::Value error;

};

struct EVMSimulationResults {
  EVMSimulationResults();
  ~EVMSimulationResults();
  EVMSimulationResults(const EVMSimulationResults&) = delete;
  EVMSimulationResults& operator=(const EVMSimulationResults&) = delete;
  EVMSimulationResults(EVMSimulationResults&& rhs) noexcept;
  EVMSimulationResults& operator=(EVMSimulationResults&& rhs) noexcept;

  // Populates a EVMSimulationResults object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EVMSimulationResults& out);

  // Populates a EVMSimulationResults object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, EVMSimulationResults& out);

  // Creates a deep copy of EVMSimulationResults.
  EVMSimulationResults Clone() const;

  // Creates a EVMSimulationResults object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<EVMSimulationResults> FromValue(const base::DictValue& value);

  // Creates a EVMSimulationResults object from a base::Value, or nullopt on
  // failure.
  static std::optional<EVMSimulationResults> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisEVMSimulationResults object.
  base::DictValue ToValue() const;

  EVMAggregatedSimulationResults aggregated;

};

struct EVMSimulationResponse {
  EVMSimulationResponse();
  ~EVMSimulationResponse();
  EVMSimulationResponse(const EVMSimulationResponse&) = delete;
  EVMSimulationResponse& operator=(const EVMSimulationResponse&) = delete;
  EVMSimulationResponse(EVMSimulationResponse&& rhs) noexcept;
  EVMSimulationResponse& operator=(EVMSimulationResponse&& rhs) noexcept;

  // Populates a EVMSimulationResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EVMSimulationResponse& out);

  // Populates a EVMSimulationResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, EVMSimulationResponse& out);

  // Creates a deep copy of EVMSimulationResponse.
  EVMSimulationResponse Clone() const;

  // Creates a EVMSimulationResponse object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<EVMSimulationResponse> FromValue(const base::DictValue& value);

  // Creates a EVMSimulationResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<EVMSimulationResponse> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisEVMSimulationResponse object.
  base::DictValue ToValue() const;

  std::string action;

  // BLOCK | WARN | NONE
  std::vector<Warning> warnings;

  EVMSimulationResults simulation_results;

};

struct SolanaDiff {
  SolanaDiff();
  ~SolanaDiff();
  SolanaDiff(const SolanaDiff&) = delete;
  SolanaDiff& operator=(const SolanaDiff&) = delete;
  SolanaDiff(SolanaDiff&& rhs) noexcept;
  SolanaDiff& operator=(SolanaDiff&& rhs) noexcept;

  // Populates a SolanaDiff object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, SolanaDiff& out);

  // Populates a SolanaDiff object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, SolanaDiff& out);

  // Creates a deep copy of SolanaDiff.
  SolanaDiff Clone() const;

  // Creates a SolanaDiff object from a base::DictValue, or nullopt on failure.
  static std::optional<SolanaDiff> FromValue(const base::DictValue& value);

  // Creates a SolanaDiff object from a base::Value, or nullopt on failure.
  static std::optional<SolanaDiff> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisSolanaDiff object.
  base::DictValue ToValue() const;

  DiffSign sign;

  std::string digits;

};

struct SolanaStakeAuthorities {
  SolanaStakeAuthorities();
  ~SolanaStakeAuthorities();
  SolanaStakeAuthorities(const SolanaStakeAuthorities&) = delete;
  SolanaStakeAuthorities& operator=(const SolanaStakeAuthorities&) = delete;
  SolanaStakeAuthorities(SolanaStakeAuthorities&& rhs) noexcept;
  SolanaStakeAuthorities& operator=(SolanaStakeAuthorities&& rhs) noexcept;

  // Populates a SolanaStakeAuthorities object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SolanaStakeAuthorities& out);

  // Populates a SolanaStakeAuthorities object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, SolanaStakeAuthorities& out);

  // Creates a deep copy of SolanaStakeAuthorities.
  SolanaStakeAuthorities Clone() const;

  // Creates a SolanaStakeAuthorities object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<SolanaStakeAuthorities> FromValue(const base::DictValue& value);

  // Creates a SolanaStakeAuthorities object from a base::Value, or nullopt on
  // failure.
  static std::optional<SolanaStakeAuthorities> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisSolanaStakeAuthorities object.
  base::DictValue ToValue() const;

  std::string staker;

  std::string withdrawer;

};

struct SolanaError {
  SolanaError();
  ~SolanaError();
  SolanaError(const SolanaError&) = delete;
  SolanaError& operator=(const SolanaError&) = delete;
  SolanaError(SolanaError&& rhs) noexcept;
  SolanaError& operator=(SolanaError&& rhs) noexcept;

  // Populates a SolanaError object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SolanaError& out);

  // Populates a SolanaError object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, SolanaError& out);

  // Creates a deep copy of SolanaError.
  SolanaError Clone() const;

  // Creates a SolanaError object from a base::DictValue, or nullopt on failure.
  static std::optional<SolanaError> FromValue(const base::DictValue& value);

  // Creates a SolanaError object from a base::Value, or nullopt on failure.
  static std::optional<SolanaError> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisSolanaError object.
  base::DictValue ToValue() const;

  // ACCOUNT_DOES_NOT_HAVE_ENOUGH_SOL_TO_PERFORM_THE_OPERATION
  // ACCOUNT_DOES_NOT_SUPPORT_SPECIFIED_AUTHORITY_TYPE ACCOUNT_IN_USE
  // ACCOUNT_IS_FROZEN ACCOUNT_LOADED_TWICE ACCOUNT_NOT_ASSOCIATED_WITH_THIS_MINT
  // ADVANCING_STORED_NONCE_REQUIRES_A_POPULATED_RECENTBLOCKHASHES_SYSVAR
  // ALREADY_IN_USE AN_ACCOUNT_WITH_THE_SAME_ADDRESS_ALREADY_EXISTS
  // ATTEMPT_TO_DEBIT_AN_ACCOUNT_BUT_FOUND_NO_RECORD_OF_A_PRIOR_CREDIT
  // ATTEMPT_TO_LOAD_A_PROGRAM_THAT_DOES_NOT_EXIST BAD_REQUEST BLOCKHASH_NOT_FOUND
  // CANNOT_ALLOCATE_ACCOUNT_DATA_OF_THIS_LENGTH
  // CANNOT_ASSIGN_ACCOUNT_TO_THIS_PROGRAM_ID
  // ERROR_PROCESSING_INSTRUCTION_{0}:_{1} FIXED_SUPPLY
  // INSTRUCTION_DOES_NOT_SUPPORT_NATIVE_TOKENS
  // INSTRUCTION_DOES_NOT_SUPPORT_NON-NATIVE_TOKENS INSUFFICIENT_FUNDS
  // INSUFFICIENT_FUNDS_FOR_FEE INVALID_INSTRUCTION INVALID_MINT
  // INVALID_NUMBER_OF_PROVIDED_SIGNERS INVALID_NUMBER_OF_REQUIRED_SIGNERS
  // LAMPORT_BALANCE_BELOW_RENT-EXEMPT_THRESHOLD
  // LENGTH_OF_REQUESTED_SEED_IS_TOO_LONG LOADER_CALL_CHAIN_IS_TOO_DEEP
  // NON-NATIVE_ACCOUNT_CAN_ONLY_BE_CLOSED_IF_ITS_BALANCE_IS_ZERO
  // OPERATION_OVERFLOWED OWNER_DOES_NOT_MATCH
  // PROVIDED_ADDRESS_DOES_NOT_MATCH_ADDRESSED_DERIVED_FROM_SEED SIMULATION_FAILED
  // SIMULATION_TIMED_OUT SPECIFIED_NONCE_DOES_NOT_MATCH_STORED_NONCE
  // STATE_IS_INVALID_FOR_REQUESTED_OPERATION STATE_IS_UNINITIALIZED
  // STORED_NONCE_IS_STILL_IN_RECENT_BLOCKHASHES
  // THE_PROVIDED_DECIMALS_VALUE_DIFFERENT_FROM_THE_MINT_DECIMALS
  // THIS_ACCOUNT_MAY_NOT_BE_USED_TO_PAY_TRANSACTION_FEES
  // THIS_PROGRAM_MAY_NOT_BE_USED_FOR_EXECUTING_INSTRUCTIONS
  // THIS_TOKEN_MINT_CANNOT_FREEZE_ACCOUNTS
  // THIS_TRANSACTION_HAS_ALREADY_BEEN_PROCESSED TOO_MANY_TRANSACTIONS
  // TRANSACTION_ADDRESS_TABLE_LOOKUP_USES_AN_INVALID_INDEX
  // TRANSACTION_CONTAINS_A_DUPLICATE_INSTRUCTION_({0})_THAT_IS_NOT_ALLOWED
  // TRANSACTION_CONTAINS_AN_INVALID_ACCOUNT_REFERENCE
  // TRANSACTION_DID_NOT_PASS_SIGNATURE_VERIFICATION
  // TRANSACTION_FAILED_TO_SANITIZE_ACCOUNTS_OFFSETS_CORRECTLY
  // TRANSACTION_LEAVES_AN_ACCOUNT_WITH_A_LOWER_BALANCE_THAN_RENT-EXEMPT_MINIMUM
  // TRANSACTION_LOADS_A_WRITABLE_ACCOUNT_THAT_CANNOT_BE_WRITTEN
  // TRANSACTION_LOADS_AN_ADDRESS_TABLE_ACCOUNT_THAT_DOESN'T_EXIST
  // TRANSACTION_LOADS_AN_ADDRESS_TABLE_ACCOUNT_WITH_AN_INVALID_OWNER
  // TRANSACTION_LOADS_AN_ADDRESS_TABLE_ACCOUNT_WITH_INVALID_DATA
  // TRANSACTION_LOCKED_TOO_MANY_ACCOUNTS
  // TRANSACTION_PROCESSING_LEFT_AN_ACCOUNT_WITH_AN_OUTSTANDING_BORROWED_REFERENCE
  // TRANSACTION_REQUIRES_A_FEE_BUT_HAS_NO_SIGNATURE_PRESENT
  // TRANSACTION_VERSION_IS_UNSUPPORTED
  // TRANSACTION_WOULD_EXCEED_ACCOUNT_DATA_LIMIT_WITHIN_THE_BLOCK
  // TRANSACTION_WOULD_EXCEED_MAX_ACCOUNT_LIMIT_WITHIN_THE_BLOCK
  // TRANSACTION_WOULD_EXCEED_MAX_BLOCK_COST_LIMIT
  // TRANSACTION_WOULD_EXCEED_MAX_VOTE_COST_LIMIT
  // TRANSACTION_WOULD_EXCEED_TOTAL_ACCOUNT_DATA_LIMIT
  // TRANSACTIONS_ARE_CURRENTLY_DISABLED_DUE_TO_CLUSTER_MAINTENANCE UNKNOWN_ERROR
  std::string kind;

  std::string human_readable_error;

};

struct SolanaAsset {
  SolanaAsset();
  ~SolanaAsset();
  SolanaAsset(const SolanaAsset&) = delete;
  SolanaAsset& operator=(const SolanaAsset&) = delete;
  SolanaAsset(SolanaAsset&& rhs) noexcept;
  SolanaAsset& operator=(SolanaAsset&& rhs) noexcept;

  // Populates a SolanaAsset object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SolanaAsset& out);

  // Populates a SolanaAsset object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, SolanaAsset& out);

  // Creates a deep copy of SolanaAsset.
  SolanaAsset Clone() const;

  // Creates a SolanaAsset object from a base::DictValue, or nullopt on failure.
  static std::optional<SolanaAsset> FromValue(const base::DictValue& value);

  // Creates a SolanaAsset object from a base::Value, or nullopt on failure.
  static std::optional<SolanaAsset> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisSolanaAsset object.
  base::DictValue ToValue() const;

  std::string symbol;

  std::string name;

  std::optional<std::string> mint;

  std::string decimals;

  std::optional<base::Value> image_url;

  base::Value price;

  // Optional field of type MetaplexTokenStandardKind. We set the type to any
  // because optional enums are not yet supported by the IDL compiler.
  std::optional<base::Value> metaplex_token_standard;

};

struct SOLTransferData {
  SOLTransferData();
  ~SOLTransferData();
  SOLTransferData(const SOLTransferData&) = delete;
  SOLTransferData& operator=(const SOLTransferData&) = delete;
  SOLTransferData(SOLTransferData&& rhs) noexcept;
  SOLTransferData& operator=(SOLTransferData&& rhs) noexcept;

  // Populates a SOLTransferData object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SOLTransferData& out);

  // Populates a SOLTransferData object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, SOLTransferData& out);

  // Creates a deep copy of SOLTransferData.
  SOLTransferData Clone() const;

  // Creates a SOLTransferData object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<SOLTransferData> FromValue(const base::DictValue& value);

  // Creates a SOLTransferData object from a base::Value, or nullopt on failure.
  static std::optional<SOLTransferData> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisSOLTransferData object.
  base::DictValue ToValue() const;

  SolanaAsset asset;

  SolanaDiff diff;

};

struct SPLTransferData {
  SPLTransferData();
  ~SPLTransferData();
  SPLTransferData(const SPLTransferData&) = delete;
  SPLTransferData& operator=(const SPLTransferData&) = delete;
  SPLTransferData(SPLTransferData&& rhs) noexcept;
  SPLTransferData& operator=(SPLTransferData&& rhs) noexcept;

  // Populates a SPLTransferData object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SPLTransferData& out);

  // Populates a SPLTransferData object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, SPLTransferData& out);

  // Creates a deep copy of SPLTransferData.
  SPLTransferData Clone() const;

  // Creates a SPLTransferData object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<SPLTransferData> FromValue(const base::DictValue& value);

  // Creates a SPLTransferData object from a base::Value, or nullopt on failure.
  static std::optional<SPLTransferData> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisSPLTransferData object.
  base::DictValue ToValue() const;

  SolanaAsset asset;

  SolanaDiff diff;

  // nullable field of type DOMString
  base::Value counterparty;

};

struct SPLApprovalData {
  SPLApprovalData();
  ~SPLApprovalData();
  SPLApprovalData(const SPLApprovalData&) = delete;
  SPLApprovalData& operator=(const SPLApprovalData&) = delete;
  SPLApprovalData(SPLApprovalData&& rhs) noexcept;
  SPLApprovalData& operator=(SPLApprovalData&& rhs) noexcept;

  // Populates a SPLApprovalData object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SPLApprovalData& out);

  // Populates a SPLApprovalData object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, SPLApprovalData& out);

  // Creates a deep copy of SPLApprovalData.
  SPLApprovalData Clone() const;

  // Creates a SPLApprovalData object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<SPLApprovalData> FromValue(const base::DictValue& value);

  // Creates a SPLApprovalData object from a base::Value, or nullopt on failure.
  static std::optional<SPLApprovalData> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisSPLApprovalData object.
  base::DictValue ToValue() const;

  std::string delegate;

  SolanaDiff diff;

  SolanaAsset asset;

};

struct SOLStakeAuthorityChangeData {
  SOLStakeAuthorityChangeData();
  ~SOLStakeAuthorityChangeData();
  SOLStakeAuthorityChangeData(const SOLStakeAuthorityChangeData&) = delete;
  SOLStakeAuthorityChangeData& operator=(const SOLStakeAuthorityChangeData&) = delete;
  SOLStakeAuthorityChangeData(SOLStakeAuthorityChangeData&& rhs) noexcept;
  SOLStakeAuthorityChangeData& operator=(SOLStakeAuthorityChangeData&& rhs) noexcept;

  // Populates a SOLStakeAuthorityChangeData object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SOLStakeAuthorityChangeData& out);

  // Populates a SOLStakeAuthorityChangeData object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, SOLStakeAuthorityChangeData& out);

  // Creates a deep copy of SOLStakeAuthorityChangeData.
  SOLStakeAuthorityChangeData Clone() const;

  // Creates a SOLStakeAuthorityChangeData object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<SOLStakeAuthorityChangeData> FromValue(const base::DictValue& value);

  // Creates a SOLStakeAuthorityChangeData object from a base::Value, or nullopt
  // on failure.
  static std::optional<SOLStakeAuthorityChangeData> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisSOLStakeAuthorityChangeData object.
  base::DictValue ToValue() const;

  std::string stake_account;

  SolanaStakeAuthorities current_authorities;

  SolanaStakeAuthorities future_authorities;

  SolanaAsset asset;

  std::string sol_staked;

};

struct SolanaUserAccountOwnerChangeData {
  SolanaUserAccountOwnerChangeData();
  ~SolanaUserAccountOwnerChangeData();
  SolanaUserAccountOwnerChangeData(const SolanaUserAccountOwnerChangeData&) = delete;
  SolanaUserAccountOwnerChangeData& operator=(const SolanaUserAccountOwnerChangeData&) = delete;
  SolanaUserAccountOwnerChangeData(SolanaUserAccountOwnerChangeData&& rhs) noexcept;
  SolanaUserAccountOwnerChangeData& operator=(SolanaUserAccountOwnerChangeData&& rhs) noexcept;

  // Populates a SolanaUserAccountOwnerChangeData object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SolanaUserAccountOwnerChangeData& out);

  // Populates a SolanaUserAccountOwnerChangeData object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, SolanaUserAccountOwnerChangeData& out);

  // Creates a deep copy of SolanaUserAccountOwnerChangeData.
  SolanaUserAccountOwnerChangeData Clone() const;

  // Creates a SolanaUserAccountOwnerChangeData object from a base::DictValue,
  // or nullopt on failure.
  static std::optional<SolanaUserAccountOwnerChangeData> FromValue(const base::DictValue& value);

  // Creates a SolanaUserAccountOwnerChangeData object from a base::Value, or
  // nullopt on failure.
  static std::optional<SolanaUserAccountOwnerChangeData> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisSolanaUserAccountOwnerChangeData object.
  base::DictValue ToValue() const;

  std::string account;

  std::string current_owner;

  std::string future_owner;

};

struct SolanaStateChangeRawInfo {
  SolanaStateChangeRawInfo();
  ~SolanaStateChangeRawInfo();
  SolanaStateChangeRawInfo(const SolanaStateChangeRawInfo&) = delete;
  SolanaStateChangeRawInfo& operator=(const SolanaStateChangeRawInfo&) = delete;
  SolanaStateChangeRawInfo(SolanaStateChangeRawInfo&& rhs) noexcept;
  SolanaStateChangeRawInfo& operator=(SolanaStateChangeRawInfo&& rhs) noexcept;

  // Populates a SolanaStateChangeRawInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SolanaStateChangeRawInfo& out);

  // Populates a SolanaStateChangeRawInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, SolanaStateChangeRawInfo& out);

  // Creates a deep copy of SolanaStateChangeRawInfo.
  SolanaStateChangeRawInfo Clone() const;

  // Creates a SolanaStateChangeRawInfo object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<SolanaStateChangeRawInfo> FromValue(const base::DictValue& value);

  // Creates a SolanaStateChangeRawInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<SolanaStateChangeRawInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisSolanaStateChangeRawInfo object.
  base::DictValue ToValue() const;

  SolanaRawInfoKind kind;

  // data is a non-nullable union of the following types:   - SOLTransferData   -
  // SPLTransferData   - SPLApprovalData   - SOLStakeAuthorityChangeData   -
  // SolanaUserAccountOwnerChangeData   - TODO(onyb): add
  // BFPLoaderAuthorityChangeData   - TODO(onyb): add CompressedNFTTransferData
  // - TODO(onyb): add SOLStakeAccountDeposit   - TODO(onyb): add
  // SOLStakeAccountWithdrawal
  base::Value data;

};

struct SolanaStateChange {
  SolanaStateChange();
  ~SolanaStateChange();
  SolanaStateChange(const SolanaStateChange&) = delete;
  SolanaStateChange& operator=(const SolanaStateChange&) = delete;
  SolanaStateChange(SolanaStateChange&& rhs) noexcept;
  SolanaStateChange& operator=(SolanaStateChange&& rhs) noexcept;

  // Populates a SolanaStateChange object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SolanaStateChange& out);

  // Populates a SolanaStateChange object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, SolanaStateChange& out);

  // Creates a deep copy of SolanaStateChange.
  SolanaStateChange Clone() const;

  // Creates a SolanaStateChange object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<SolanaStateChange> FromValue(const base::DictValue& value);

  // Creates a SolanaStateChange object from a base::Value, or nullopt on
  // failure.
  static std::optional<SolanaStateChange> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisSolanaStateChange object.
  base::DictValue ToValue() const;

  std::string human_readable_diff;

  SuggestedColor suggested_color;

  SolanaStateChangeRawInfo raw_info;

};

struct SolanaAggregatedSimulationResults {
  SolanaAggregatedSimulationResults();
  ~SolanaAggregatedSimulationResults();
  SolanaAggregatedSimulationResults(const SolanaAggregatedSimulationResults&) = delete;
  SolanaAggregatedSimulationResults& operator=(const SolanaAggregatedSimulationResults&) = delete;
  SolanaAggregatedSimulationResults(SolanaAggregatedSimulationResults&& rhs) noexcept;
  SolanaAggregatedSimulationResults& operator=(SolanaAggregatedSimulationResults&& rhs) noexcept;

  // Populates a SolanaAggregatedSimulationResults object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SolanaAggregatedSimulationResults& out);

  // Populates a SolanaAggregatedSimulationResults object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, SolanaAggregatedSimulationResults& out);

  // Creates a deep copy of SolanaAggregatedSimulationResults.
  SolanaAggregatedSimulationResults Clone() const;

  // Creates a SolanaAggregatedSimulationResults object from a base::DictValue,
  // or nullopt on failure.
  static std::optional<SolanaAggregatedSimulationResults> FromValue(const base::DictValue& value);

  // Creates a SolanaAggregatedSimulationResults object from a base::Value, or
  // nullopt on failure.
  static std::optional<SolanaAggregatedSimulationResults> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisSolanaAggregatedSimulationResults object.
  base::DictValue ToValue() const;

  std::string action;

  // BLOCK | WARN | NONE
  std::vector<Warning> warnings;

  // object with key being the account address and value being of type
  // SolanaStateChange[].
  base::Value expected_state_changes;

  // nullable field of type SolanaError
  base::Value error;

};

struct SolanaSimulationResponse {
  SolanaSimulationResponse();
  ~SolanaSimulationResponse();
  SolanaSimulationResponse(const SolanaSimulationResponse&) = delete;
  SolanaSimulationResponse& operator=(const SolanaSimulationResponse&) = delete;
  SolanaSimulationResponse(SolanaSimulationResponse&& rhs) noexcept;
  SolanaSimulationResponse& operator=(SolanaSimulationResponse&& rhs) noexcept;

  // Populates a SolanaSimulationResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SolanaSimulationResponse& out);

  // Populates a SolanaSimulationResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, SolanaSimulationResponse& out);

  // Creates a deep copy of SolanaSimulationResponse.
  SolanaSimulationResponse Clone() const;

  // Creates a SolanaSimulationResponse object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<SolanaSimulationResponse> FromValue(const base::DictValue& value);

  // Creates a SolanaSimulationResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<SolanaSimulationResponse> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisSolanaSimulationResponse object.
  base::DictValue ToValue() const;

  SolanaAggregatedSimulationResults aggregated;

};

struct HTTPError {
  HTTPError();
  ~HTTPError();
  HTTPError(const HTTPError&) = delete;
  HTTPError& operator=(const HTTPError&) = delete;
  HTTPError(HTTPError&& rhs) noexcept;
  HTTPError& operator=(HTTPError&& rhs) noexcept;

  // Populates a HTTPError object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, HTTPError& out);

  // Populates a HTTPError object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, HTTPError& out);

  // Creates a deep copy of HTTPError.
  HTTPError Clone() const;

  // Creates a HTTPError object from a base::DictValue, or nullopt on failure.
  static std::optional<HTTPError> FromValue(const base::DictValue& value);

  // Creates a HTTPError object from a base::Value, or nullopt on failure.
  static std::optional<HTTPError> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisHTTPError object.
  base::DictValue ToValue() const;

  std::string error;

};


}  // namespace simulation_responses
}  // namespace brave_wallet

#endif  // BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_SIMULATION_RESPONSES_H__
