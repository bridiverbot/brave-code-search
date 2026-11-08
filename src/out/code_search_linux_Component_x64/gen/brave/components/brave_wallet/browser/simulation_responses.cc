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

#include "brave/components/brave_wallet/browser/simulation_responses.h"

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
#include <string_view>


using base::UTF8ToUTF16;

namespace brave_wallet {
namespace simulation_responses {
//
// Types
//

const char* ToString(WarningSeverity enum_param) {
  switch (enum_param) {
    case WarningSeverity::kCritical:
      return "CRITICAL";
    case WarningSeverity::kWarning:
      return "WARNING";
    case WarningSeverity::kNone:
      return "";
  }
  NOTREACHED();
}

WarningSeverity ParseWarningSeverity(std::string_view enum_string) {
  if (enum_string == "CRITICAL")
    return WarningSeverity::kCritical;
  if (enum_string == "WARNING")
    return WarningSeverity::kWarning;
  return WarningSeverity::kNone;
}

std::u16string GetWarningSeverityParseError(std::string_view enum_string) {
  return u"expected \"CRITICAL\" or \"WARNING\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(EVMRawInfoKind enum_param) {
  switch (enum_param) {
    case EVMRawInfoKind::kErc20Transfer:
      return "ERC20_TRANSFER";
    case EVMRawInfoKind::kErc20Approval:
      return "ERC20_APPROVAL";
    case EVMRawInfoKind::kNativeAssetTransfer:
      return "NATIVE_ASSET_TRANSFER";
    case EVMRawInfoKind::kErc721Transfer:
      return "ERC721_TRANSFER";
    case EVMRawInfoKind::kErc721Approval:
      return "ERC721_APPROVAL";
    case EVMRawInfoKind::kErc721ApprovalForAll:
      return "ERC721_APPROVAL_FOR_ALL";
    case EVMRawInfoKind::kErc1155Transfer:
      return "ERC1155_TRANSFER";
    case EVMRawInfoKind::kErc1155ApprovalForAll:
      return "ERC1155_APPROVAL_FOR_ALL";
    case EVMRawInfoKind::kAnyNftFromCollectionTransfer:
      return "ANY_NFT_FROM_COLLECTION_TRANSFER";
    case EVMRawInfoKind::kNone:
      return "";
  }
  NOTREACHED();
}

EVMRawInfoKind ParseEVMRawInfoKind(std::string_view enum_string) {
  if (enum_string == "ERC20_TRANSFER")
    return EVMRawInfoKind::kErc20Transfer;
  if (enum_string == "ERC20_APPROVAL")
    return EVMRawInfoKind::kErc20Approval;
  if (enum_string == "NATIVE_ASSET_TRANSFER")
    return EVMRawInfoKind::kNativeAssetTransfer;
  if (enum_string == "ERC721_TRANSFER")
    return EVMRawInfoKind::kErc721Transfer;
  if (enum_string == "ERC721_APPROVAL")
    return EVMRawInfoKind::kErc721Approval;
  if (enum_string == "ERC721_APPROVAL_FOR_ALL")
    return EVMRawInfoKind::kErc721ApprovalForAll;
  if (enum_string == "ERC1155_TRANSFER")
    return EVMRawInfoKind::kErc1155Transfer;
  if (enum_string == "ERC1155_APPROVAL_FOR_ALL")
    return EVMRawInfoKind::kErc1155ApprovalForAll;
  if (enum_string == "ANY_NFT_FROM_COLLECTION_TRANSFER")
    return EVMRawInfoKind::kAnyNftFromCollectionTransfer;
  return EVMRawInfoKind::kNone;
}

std::u16string GetEVMRawInfoKindParseError(std::string_view enum_string) {
  return u"expected \"ERC20_TRANSFER\" or \"ERC20_APPROVAL\" or \"NATIVE_ASSET_TRANSFER\" or \"ERC721_TRANSFER\" or \"ERC721_APPROVAL\" or \"ERC721_APPROVAL_FOR_ALL\" or \"ERC1155_TRANSFER\" or \"ERC1155_APPROVAL_FOR_ALL\" or \"ANY_NFT_FROM_COLLECTION_TRANSFER\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SolanaRawInfoKind enum_param) {
  switch (enum_param) {
    case SolanaRawInfoKind::kSolTransfer:
      return "SOL_TRANSFER";
    case SolanaRawInfoKind::kSplTransfer:
      return "SPL_TRANSFER";
    case SolanaRawInfoKind::kSplApproval:
      return "SPL_APPROVAL";
    case SolanaRawInfoKind::kSolStakeAuthorityChange:
      return "SOL_STAKE_AUTHORITY_CHANGE";
    case SolanaRawInfoKind::kUserAccountOwnerChange:
      return "USER_ACCOUNT_OWNER_CHANGE";
    case SolanaRawInfoKind::kNone:
      return "";
  }
  NOTREACHED();
}

SolanaRawInfoKind ParseSolanaRawInfoKind(std::string_view enum_string) {
  if (enum_string == "SOL_TRANSFER")
    return SolanaRawInfoKind::kSolTransfer;
  if (enum_string == "SPL_TRANSFER")
    return SolanaRawInfoKind::kSplTransfer;
  if (enum_string == "SPL_APPROVAL")
    return SolanaRawInfoKind::kSplApproval;
  if (enum_string == "SOL_STAKE_AUTHORITY_CHANGE")
    return SolanaRawInfoKind::kSolStakeAuthorityChange;
  if (enum_string == "USER_ACCOUNT_OWNER_CHANGE")
    return SolanaRawInfoKind::kUserAccountOwnerChange;
  return SolanaRawInfoKind::kNone;
}

std::u16string GetSolanaRawInfoKindParseError(std::string_view enum_string) {
  return u"expected \"SOL_TRANSFER\" or \"SPL_TRANSFER\" or \"SPL_APPROVAL\" or \"SOL_STAKE_AUTHORITY_CHANGE\" or \"USER_ACCOUNT_OWNER_CHANGE\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(MetaplexTokenStandardKind enum_param) {
  switch (enum_param) {
    case MetaplexTokenStandardKind::kNonFungible:
      return "non_fungible";
    case MetaplexTokenStandardKind::kFungibleAsset:
      return "fungible_asset";
    case MetaplexTokenStandardKind::kFungible:
      return "fungible";
    case MetaplexTokenStandardKind::kNonFungibleEdition:
      return "non_fungible_edition";
    case MetaplexTokenStandardKind::kUnknown:
      return "unknown";
    case MetaplexTokenStandardKind::kNone:
      return "";
  }
  NOTREACHED();
}

MetaplexTokenStandardKind ParseMetaplexTokenStandardKind(std::string_view enum_string) {
  if (enum_string == "non_fungible")
    return MetaplexTokenStandardKind::kNonFungible;
  if (enum_string == "fungible_asset")
    return MetaplexTokenStandardKind::kFungibleAsset;
  if (enum_string == "fungible")
    return MetaplexTokenStandardKind::kFungible;
  if (enum_string == "non_fungible_edition")
    return MetaplexTokenStandardKind::kNonFungibleEdition;
  if (enum_string == "unknown")
    return MetaplexTokenStandardKind::kUnknown;
  return MetaplexTokenStandardKind::kNone;
}

std::u16string GetMetaplexTokenStandardKindParseError(std::string_view enum_string) {
  return u"expected \"non_fungible\" or \"fungible_asset\" or \"fungible\" or \"non_fungible_edition\" or \"unknown\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DiffSign enum_param) {
  switch (enum_param) {
    case DiffSign::kPlus:
      return "PLUS";
    case DiffSign::kMinus:
      return "MINUS";
    case DiffSign::kNone:
      return "";
  }
  NOTREACHED();
}

DiffSign ParseDiffSign(std::string_view enum_string) {
  if (enum_string == "PLUS")
    return DiffSign::kPlus;
  if (enum_string == "MINUS")
    return DiffSign::kMinus;
  return DiffSign::kNone;
}

std::u16string GetDiffSignParseError(std::string_view enum_string) {
  return u"expected \"PLUS\" or \"MINUS\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(EVMAddressKind enum_param) {
  switch (enum_param) {
    case EVMAddressKind::kAccount:
      return "ACCOUNT";
    case EVMAddressKind::kNone:
      return "";
  }
  NOTREACHED();
}

EVMAddressKind ParseEVMAddressKind(std::string_view enum_string) {
  if (enum_string == "ACCOUNT")
    return EVMAddressKind::kAccount;
  return EVMAddressKind::kNone;
}

std::u16string GetEVMAddressKindParseError(std::string_view enum_string) {
  return u"expected \"ACCOUNT\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(AssetPriceSource enum_param) {
  switch (enum_param) {
    case AssetPriceSource::kSimplehash:
      return "Simplehash";
    case AssetPriceSource::kDefillama:
      return "Defillama";
    case AssetPriceSource::kCoingecko:
      return "Coingecko";
    case AssetPriceSource::kNone:
      return "";
  }
  NOTREACHED();
}

AssetPriceSource ParseAssetPriceSource(std::string_view enum_string) {
  if (enum_string == "Simplehash")
    return AssetPriceSource::kSimplehash;
  if (enum_string == "Defillama")
    return AssetPriceSource::kDefillama;
  if (enum_string == "Coingecko")
    return AssetPriceSource::kCoingecko;
  return AssetPriceSource::kNone;
}

std::u16string GetAssetPriceSourceParseError(std::string_view enum_string) {
  return u"expected \"Simplehash\" or \"Defillama\" or \"Coingecko\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(EVMErrorKind enum_param) {
  switch (enum_param) {
    case EVMErrorKind::kTransactionReverted:
      return "TRANSACTION_REVERTED";
    case EVMErrorKind::kTransactionError:
      return "TRANSACTION_ERROR";
    case EVMErrorKind::kSimulationFailed:
      return "SIMULATION_FAILED";
    case EVMErrorKind::kUnknownError:
      return "UNKNOWN_ERROR";
    case EVMErrorKind::kNone:
      return "";
  }
  NOTREACHED();
}

EVMErrorKind ParseEVMErrorKind(std::string_view enum_string) {
  if (enum_string == "TRANSACTION_REVERTED")
    return EVMErrorKind::kTransactionReverted;
  if (enum_string == "TRANSACTION_ERROR")
    return EVMErrorKind::kTransactionError;
  if (enum_string == "SIMULATION_FAILED")
    return EVMErrorKind::kSimulationFailed;
  if (enum_string == "UNKNOWN_ERROR")
    return EVMErrorKind::kUnknownError;
  return EVMErrorKind::kNone;
}

std::u16string GetEVMErrorKindParseError(std::string_view enum_string) {
  return u"expected \"TRANSACTION_REVERTED\" or \"TRANSACTION_ERROR\" or \"SIMULATION_FAILED\" or \"UNKNOWN_ERROR\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SuggestedColor enum_param) {
  switch (enum_param) {
    case SuggestedColor::kCredit:
      return "CREDIT";
    case SuggestedColor::kDebit:
      return "DEBIT";
    case SuggestedColor::kInfo:
      return "INFO";
    case SuggestedColor::kNone:
      return "";
  }
  NOTREACHED();
}

SuggestedColor ParseSuggestedColor(std::string_view enum_string) {
  if (enum_string == "CREDIT")
    return SuggestedColor::kCredit;
  if (enum_string == "DEBIT")
    return SuggestedColor::kDebit;
  if (enum_string == "INFO")
    return SuggestedColor::kInfo;
  return SuggestedColor::kNone;
}

std::u16string GetSuggestedColorParseError(std::string_view enum_string) {
  return u"expected \"CREDIT\" or \"DEBIT\" or \"INFO\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


Price::Price()
: source() {}

Price::~Price() = default;
Price::Price(Price&& rhs) noexcept = default;
Price& Price::operator=(Price&& rhs) noexcept = default;
Price Price::Clone() const {
  Price out;
  out.source = source;
  out.updated_at = updated_at;
  out.dollar_value_per_token = dollar_value_per_token;
  return out;
}

// static
bool Price::Populate(
    const base::DictValue& dict, Price& out) {
  const base::Value* source_value = dict.Find("source");
  if (!source_value) {
    return false;
  }
  {
    const std::string* asset_price_source_as_string = (*source_value).GetIfString();
    if (!asset_price_source_as_string) {
      return false;
    }
    out.source = ParseAssetPriceSource(*asset_price_source_as_string);
    if (out.source == AssetPriceSource()) {
      return false;
    }
  }

  const base::Value* updated_at_value = dict.Find("updatedAt");
  if (!updated_at_value) {
    return false;
  }
  {
    auto* temp = (*updated_at_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.updated_at = *temp;
  }

  const base::Value* dollar_value_per_token_value = dict.Find("dollarValuePerToken");
  if (!dollar_value_per_token_value) {
    return false;
  }
  {
    auto* temp = (*dollar_value_per_token_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.dollar_value_per_token = *temp;
  }

  return true;
}

// static
bool Price::Populate(
    const base::Value& value, Price& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Price> Price::FromValue(const base::DictValue& value) {
  Price out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Price> Price::FromValue(const base::Value& value) {
  Price out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Price::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("source", simulation_responses::ToString(this->source));

  to_value_result.Set("updatedAt", this->updated_at);

  to_value_result.Set("dollarValuePerToken", this->dollar_value_per_token);


  return to_value_result;
}


Warning::Warning()
: severity() {}

Warning::~Warning() = default;
Warning::Warning(Warning&& rhs) noexcept = default;
Warning& Warning::operator=(Warning&& rhs) noexcept = default;
Warning Warning::Clone() const {
  Warning out;
  out.severity = severity;
  out.kind = kind;
  out.message = message;
  return out;
}

// static
bool Warning::Populate(
    const base::DictValue& dict, Warning& out) {
  const base::Value* severity_value = dict.Find("severity");
  if (!severity_value) {
    return false;
  }
  {
    const std::string* warning_severity_as_string = (*severity_value).GetIfString();
    if (!warning_severity_as_string) {
      return false;
    }
    out.severity = ParseWarningSeverity(*warning_severity_as_string);
    if (out.severity == WarningSeverity()) {
      return false;
    }
  }

  const base::Value* kind_value = dict.Find("kind");
  if (!kind_value) {
    return false;
  }
  {
    auto* temp = (*kind_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.kind = *temp;
  }

  const base::Value* message_value = dict.Find("message");
  if (!message_value) {
    return false;
  }
  {
    auto* temp = (*message_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.message = *temp;
  }

  return true;
}

// static
bool Warning::Populate(
    const base::Value& value, Warning& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Warning> Warning::FromValue(const base::DictValue& value) {
  Warning out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Warning> Warning::FromValue(const base::Value& value) {
  Warning out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Warning::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("severity", simulation_responses::ToString(this->severity));

  to_value_result.Set("kind", this->kind);

  to_value_result.Set("message", this->message);


  return to_value_result;
}


EVMError::EVMError()
: kind() {}

EVMError::~EVMError() = default;
EVMError::EVMError(EVMError&& rhs) noexcept = default;
EVMError& EVMError::operator=(EVMError&& rhs) noexcept = default;
EVMError EVMError::Clone() const {
  EVMError out;
  out.kind = kind;
  out.human_readable_error = human_readable_error;
  return out;
}

// static
bool EVMError::Populate(
    const base::DictValue& dict, EVMError& out) {
  const base::Value* kind_value = dict.Find("kind");
  if (!kind_value) {
    return false;
  }
  {
    const std::string* evm_error_kind_as_string = (*kind_value).GetIfString();
    if (!evm_error_kind_as_string) {
      return false;
    }
    out.kind = ParseEVMErrorKind(*evm_error_kind_as_string);
    if (out.kind == EVMErrorKind()) {
      return false;
    }
  }

  const base::Value* human_readable_error_value = dict.Find("humanReadableError");
  if (!human_readable_error_value) {
    return false;
  }
  {
    auto* temp = (*human_readable_error_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.human_readable_error = *temp;
  }

  return true;
}

// static
bool EVMError::Populate(
    const base::Value& value, EVMError& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EVMError> EVMError::FromValue(const base::DictValue& value) {
  EVMError out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EVMError> EVMError::FromValue(const base::Value& value) {
  EVMError out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue EVMError::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("kind", simulation_responses::ToString(this->kind));

  to_value_result.Set("humanReadableError", this->human_readable_error);


  return to_value_result;
}


EVMCounterparty::EVMCounterparty()
: kind() {}

EVMCounterparty::~EVMCounterparty() = default;
EVMCounterparty::EVMCounterparty(EVMCounterparty&& rhs) noexcept = default;
EVMCounterparty& EVMCounterparty::operator=(EVMCounterparty&& rhs) noexcept = default;
EVMCounterparty EVMCounterparty::Clone() const {
  EVMCounterparty out;
  out.kind = kind;
  out.address = address;
  return out;
}

// static
bool EVMCounterparty::Populate(
    const base::DictValue& dict, EVMCounterparty& out) {
  const base::Value* kind_value = dict.Find("kind");
  if (!kind_value) {
    return false;
  }
  {
    const std::string* evm_address_kind_as_string = (*kind_value).GetIfString();
    if (!evm_address_kind_as_string) {
      return false;
    }
    out.kind = ParseEVMAddressKind(*evm_address_kind_as_string);
    if (out.kind == EVMAddressKind()) {
      return false;
    }
  }

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

  return true;
}

// static
bool EVMCounterparty::Populate(
    const base::Value& value, EVMCounterparty& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EVMCounterparty> EVMCounterparty::FromValue(const base::DictValue& value) {
  EVMCounterparty out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EVMCounterparty> EVMCounterparty::FromValue(const base::Value& value) {
  EVMCounterparty out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue EVMCounterparty::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("kind", simulation_responses::ToString(this->kind));

  to_value_result.Set("address", this->address);


  return to_value_result;
}


EVMAmount::EVMAmount()
 {}

EVMAmount::~EVMAmount() = default;
EVMAmount::EVMAmount(EVMAmount&& rhs) noexcept = default;
EVMAmount& EVMAmount::operator=(EVMAmount&& rhs) noexcept = default;
EVMAmount EVMAmount::Clone() const {
  EVMAmount out;
  out.after = after;
  out.before = before;
  return out;
}

// static
bool EVMAmount::Populate(
    const base::DictValue& dict, EVMAmount& out) {
  const base::Value* after_value = dict.Find("after");
  if (!after_value) {
    return false;
  }
  {
    auto* temp = (*after_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.after = *temp;
  }

  const base::Value* before_value = dict.Find("before");
  if (!before_value) {
    return false;
  }
  {
    auto* temp = (*before_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.before = *temp;
  }

  return true;
}

// static
bool EVMAmount::Populate(
    const base::Value& value, EVMAmount& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EVMAmount> EVMAmount::FromValue(const base::DictValue& value) {
  EVMAmount out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EVMAmount> EVMAmount::FromValue(const base::Value& value) {
  EVMAmount out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue EVMAmount::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("after", this->after);

  to_value_result.Set("before", this->before);


  return to_value_result;
}


EVMAsset::EVMAsset()
 {}

EVMAsset::~EVMAsset() = default;
EVMAsset::EVMAsset(EVMAsset&& rhs) noexcept = default;
EVMAsset& EVMAsset::operator=(EVMAsset&& rhs) noexcept = default;
EVMAsset EVMAsset::Clone() const {
  EVMAsset out;
  out.address = address;
  if (symbol) {
    out.symbol = symbol->Clone();
  }
  if (name) {
    out.name = name->Clone();
  }
  if (collection) {
    out.collection = collection->Clone();
  }
  out.decimals = decimals;
  out.verified = verified;
  out.lists = lists;
  if (image_url) {
    out.image_url = image_url->Clone();
  }
  out.price = price.Clone();
  return out;
}

// static
bool EVMAsset::Populate(
    const base::DictValue& dict, EVMAsset& out) {
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

  const base::Value* symbol_value = dict.Find("symbol");
  if (symbol_value) {
    {
      out.symbol = (*symbol_value).Clone();
    }
  }

  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    {
      out.name = (*name_value).Clone();
    }
  }

  const base::Value* collection_value = dict.Find("collection");
  if (collection_value) {
    {
      out.collection = (*collection_value).Clone();
    }
  }

  const base::Value* decimals_value = dict.Find("decimals");
  if (decimals_value) {
    {
      auto* temp = (*decimals_value).GetIfString();
      if (!temp) {
        out.decimals = std::nullopt;
        return false;
      }
      out.decimals = *temp;
    }
  }

  const base::Value* verified_value = dict.Find("verified");
  if (verified_value) {
    {
      auto temp = (*verified_value).GetIfBool();
      if (!temp.has_value()) {
        out.verified = std::nullopt;
        return false;
      }
      out.verified = *temp;
    }
  }

  const base::Value* lists_value = dict.Find("lists");
  if (lists_value) {
    {
      if (!(*lists_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*lists_value).GetList(), out.lists)) {
          return false;
        }
      }
    }
  }

  const base::Value* image_url_value = dict.Find("imageUrl");
  if (image_url_value) {
    {
      out.image_url = (*image_url_value).Clone();
    }
  }

  const base::Value* price_value = dict.Find("price");
  if (!price_value) {
    return false;
  }
  {
    out.price = (*price_value).Clone();
  }

  return true;
}

// static
bool EVMAsset::Populate(
    const base::Value& value, EVMAsset& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EVMAsset> EVMAsset::FromValue(const base::DictValue& value) {
  EVMAsset out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EVMAsset> EVMAsset::FromValue(const base::Value& value) {
  EVMAsset out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue EVMAsset::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("address", this->address);

  if (this->symbol) {
    to_value_result.Set("symbol", (this->symbol)->Clone());

  }
  if (this->name) {
    to_value_result.Set("name", (this->name)->Clone());

  }
  if (this->collection) {
    to_value_result.Set("collection", (this->collection)->Clone());

  }
  if (this->decimals) {
    to_value_result.Set("decimals", *this->decimals);

  }
  if (this->verified) {
    to_value_result.Set("verified", *this->verified);

  }
  if (this->lists) {
    to_value_result.Set("lists", json_schema_compiler::util::CreateValueFromArray(*this->lists));

  }
  if (this->image_url) {
    to_value_result.Set("imageUrl", (this->image_url)->Clone());

  }
  to_value_result.Set("price", (this->price).Clone());


  return to_value_result;
}


NFTMetadata::NFTMetadata()
 {}

NFTMetadata::~NFTMetadata() = default;
NFTMetadata::NFTMetadata(NFTMetadata&& rhs) noexcept = default;
NFTMetadata& NFTMetadata::operator=(NFTMetadata&& rhs) noexcept = default;
NFTMetadata NFTMetadata::Clone() const {
  NFTMetadata out;
  out.raw_image_url = raw_image_url;
  return out;
}

// static
bool NFTMetadata::Populate(
    const base::DictValue& dict, NFTMetadata& out) {
  const base::Value* raw_image_url_value = dict.Find("rawImageUrl");
  if (!raw_image_url_value) {
    return false;
  }
  {
    auto* temp = (*raw_image_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.raw_image_url = *temp;
  }

  return true;
}

// static
bool NFTMetadata::Populate(
    const base::Value& value, NFTMetadata& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<NFTMetadata> NFTMetadata::FromValue(const base::DictValue& value) {
  NFTMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<NFTMetadata> NFTMetadata::FromValue(const base::Value& value) {
  NFTMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue NFTMetadata::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("rawImageUrl", this->raw_image_url);


  return to_value_result;
}


ERC20TransferData::ERC20TransferData()
 {}

ERC20TransferData::~ERC20TransferData() = default;
ERC20TransferData::ERC20TransferData(ERC20TransferData&& rhs) noexcept = default;
ERC20TransferData& ERC20TransferData::operator=(ERC20TransferData&& rhs) noexcept = default;
ERC20TransferData ERC20TransferData::Clone() const {
  ERC20TransferData out;
  out.counterparty = counterparty.Clone();
  out.amount = amount.Clone();
  out.asset = asset.Clone();
  return out;
}

// static
bool ERC20TransferData::Populate(
    const base::DictValue& dict, ERC20TransferData& out) {
  const base::Value* counterparty_value = dict.Find("counterparty");
  if (!counterparty_value) {
    return false;
  }
  {
    out.counterparty = (*counterparty_value).Clone();
  }

  const base::Value* amount_value = dict.Find("amount");
  if (!amount_value) {
    return false;
  }
  {
    if (!(*amount_value).is_dict()) {
      return false;
    }
    if (!EVMAmount::Populate((*amount_value).GetDict(), out.amount)) {
      return false;
    }
  }

  const base::Value* asset_value = dict.Find("asset");
  if (!asset_value) {
    return false;
  }
  {
    if (!(*asset_value).is_dict()) {
      return false;
    }
    if (!EVMAsset::Populate((*asset_value).GetDict(), out.asset)) {
      return false;
    }
  }

  return true;
}

// static
bool ERC20TransferData::Populate(
    const base::Value& value, ERC20TransferData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ERC20TransferData> ERC20TransferData::FromValue(const base::DictValue& value) {
  ERC20TransferData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ERC20TransferData> ERC20TransferData::FromValue(const base::Value& value) {
  ERC20TransferData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ERC20TransferData::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("counterparty", (this->counterparty).Clone());

  to_value_result.Set("amount", (this->amount).ToValue());

  to_value_result.Set("asset", (this->asset).ToValue());


  return to_value_result;
}


ERC20ApprovalData::ERC20ApprovalData()
 {}

ERC20ApprovalData::~ERC20ApprovalData() = default;
ERC20ApprovalData::ERC20ApprovalData(ERC20ApprovalData&& rhs) noexcept = default;
ERC20ApprovalData& ERC20ApprovalData::operator=(ERC20ApprovalData&& rhs) noexcept = default;
ERC20ApprovalData ERC20ApprovalData::Clone() const {
  ERC20ApprovalData out;
  out.owner = owner.Clone();
  out.spender = spender.Clone();
  out.amount = amount.Clone();
  out.asset = asset.Clone();
  return out;
}

// static
bool ERC20ApprovalData::Populate(
    const base::DictValue& dict, ERC20ApprovalData& out) {
  const base::Value* owner_value = dict.Find("owner");
  if (!owner_value) {
    return false;
  }
  {
    if (!(*owner_value).is_dict()) {
      return false;
    }
    if (!EVMCounterparty::Populate((*owner_value).GetDict(), out.owner)) {
      return false;
    }
  }

  const base::Value* spender_value = dict.Find("spender");
  if (!spender_value) {
    return false;
  }
  {
    if (!(*spender_value).is_dict()) {
      return false;
    }
    if (!EVMCounterparty::Populate((*spender_value).GetDict(), out.spender)) {
      return false;
    }
  }

  const base::Value* amount_value = dict.Find("amount");
  if (!amount_value) {
    return false;
  }
  {
    if (!(*amount_value).is_dict()) {
      return false;
    }
    if (!EVMAmount::Populate((*amount_value).GetDict(), out.amount)) {
      return false;
    }
  }

  const base::Value* asset_value = dict.Find("asset");
  if (!asset_value) {
    return false;
  }
  {
    if (!(*asset_value).is_dict()) {
      return false;
    }
    if (!EVMAsset::Populate((*asset_value).GetDict(), out.asset)) {
      return false;
    }
  }

  return true;
}

// static
bool ERC20ApprovalData::Populate(
    const base::Value& value, ERC20ApprovalData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ERC20ApprovalData> ERC20ApprovalData::FromValue(const base::DictValue& value) {
  ERC20ApprovalData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ERC20ApprovalData> ERC20ApprovalData::FromValue(const base::Value& value) {
  ERC20ApprovalData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ERC20ApprovalData::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("owner", (this->owner).ToValue());

  to_value_result.Set("spender", (this->spender).ToValue());

  to_value_result.Set("amount", (this->amount).ToValue());

  to_value_result.Set("asset", (this->asset).ToValue());


  return to_value_result;
}


NativeAssetTransferData::NativeAssetTransferData()
 {}

NativeAssetTransferData::~NativeAssetTransferData() = default;
NativeAssetTransferData::NativeAssetTransferData(NativeAssetTransferData&& rhs) noexcept = default;
NativeAssetTransferData& NativeAssetTransferData::operator=(NativeAssetTransferData&& rhs) noexcept = default;
NativeAssetTransferData NativeAssetTransferData::Clone() const {
  NativeAssetTransferData out;
  out.amount = amount.Clone();
  out.asset = asset.Clone();
  out.counterparty = counterparty.Clone();
  return out;
}

// static
bool NativeAssetTransferData::Populate(
    const base::DictValue& dict, NativeAssetTransferData& out) {
  const base::Value* amount_value = dict.Find("amount");
  if (!amount_value) {
    return false;
  }
  {
    if (!(*amount_value).is_dict()) {
      return false;
    }
    if (!EVMAmount::Populate((*amount_value).GetDict(), out.amount)) {
      return false;
    }
  }

  const base::Value* asset_value = dict.Find("asset");
  if (!asset_value) {
    return false;
  }
  {
    if (!(*asset_value).is_dict()) {
      return false;
    }
    if (!EVMAsset::Populate((*asset_value).GetDict(), out.asset)) {
      return false;
    }
  }

  const base::Value* counterparty_value = dict.Find("counterparty");
  if (!counterparty_value) {
    return false;
  }
  {
    out.counterparty = (*counterparty_value).Clone();
  }

  return true;
}

// static
bool NativeAssetTransferData::Populate(
    const base::Value& value, NativeAssetTransferData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<NativeAssetTransferData> NativeAssetTransferData::FromValue(const base::DictValue& value) {
  NativeAssetTransferData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<NativeAssetTransferData> NativeAssetTransferData::FromValue(const base::Value& value) {
  NativeAssetTransferData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue NativeAssetTransferData::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("amount", (this->amount).ToValue());

  to_value_result.Set("asset", (this->asset).ToValue());

  to_value_result.Set("counterparty", (this->counterparty).Clone());


  return to_value_result;
}


ERC721TransferData::ERC721TransferData()
 {}

ERC721TransferData::~ERC721TransferData() = default;
ERC721TransferData::ERC721TransferData(ERC721TransferData&& rhs) noexcept = default;
ERC721TransferData& ERC721TransferData::operator=(ERC721TransferData&& rhs) noexcept = default;
ERC721TransferData ERC721TransferData::Clone() const {
  ERC721TransferData out;
  out.amount = amount.Clone();
  out.counterparty = counterparty.Clone();
  out.metadata = metadata.Clone();
  out.token_id = token_id.Clone();
  out.asset = asset.Clone();
  return out;
}

// static
bool ERC721TransferData::Populate(
    const base::DictValue& dict, ERC721TransferData& out) {
  const base::Value* amount_value = dict.Find("amount");
  if (!amount_value) {
    return false;
  }
  {
    if (!(*amount_value).is_dict()) {
      return false;
    }
    if (!EVMAmount::Populate((*amount_value).GetDict(), out.amount)) {
      return false;
    }
  }

  const base::Value* counterparty_value = dict.Find("counterparty");
  if (!counterparty_value) {
    return false;
  }
  {
    out.counterparty = (*counterparty_value).Clone();
  }

  const base::Value* metadata_value = dict.Find("metadata");
  if (!metadata_value) {
    return false;
  }
  {
    if (!(*metadata_value).is_dict()) {
      return false;
    }
    if (!NFTMetadata::Populate((*metadata_value).GetDict(), out.metadata)) {
      return false;
    }
  }

  const base::Value* token_id_value = dict.Find("tokenId");
  if (!token_id_value) {
    return false;
  }
  {
    out.token_id = (*token_id_value).Clone();
  }

  const base::Value* asset_value = dict.Find("asset");
  if (!asset_value) {
    return false;
  }
  {
    if (!(*asset_value).is_dict()) {
      return false;
    }
    if (!EVMAsset::Populate((*asset_value).GetDict(), out.asset)) {
      return false;
    }
  }

  return true;
}

// static
bool ERC721TransferData::Populate(
    const base::Value& value, ERC721TransferData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ERC721TransferData> ERC721TransferData::FromValue(const base::DictValue& value) {
  ERC721TransferData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ERC721TransferData> ERC721TransferData::FromValue(const base::Value& value) {
  ERC721TransferData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ERC721TransferData::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("amount", (this->amount).ToValue());

  to_value_result.Set("counterparty", (this->counterparty).Clone());

  to_value_result.Set("metadata", (this->metadata).ToValue());

  to_value_result.Set("tokenId", (this->token_id).Clone());

  to_value_result.Set("asset", (this->asset).ToValue());


  return to_value_result;
}


ERC721ApprovalData::ERC721ApprovalData()
 {}

ERC721ApprovalData::~ERC721ApprovalData() = default;
ERC721ApprovalData::ERC721ApprovalData(ERC721ApprovalData&& rhs) noexcept = default;
ERC721ApprovalData& ERC721ApprovalData::operator=(ERC721ApprovalData&& rhs) noexcept = default;
ERC721ApprovalData ERC721ApprovalData::Clone() const {
  ERC721ApprovalData out;
  out.amount = amount.Clone();
  out.metadata = metadata.Clone();
  out.owner = owner.Clone();
  out.spender = spender.Clone();
  out.token_id = token_id.Clone();
  out.asset = asset.Clone();
  return out;
}

// static
bool ERC721ApprovalData::Populate(
    const base::DictValue& dict, ERC721ApprovalData& out) {
  const base::Value* amount_value = dict.Find("amount");
  if (!amount_value) {
    return false;
  }
  {
    if (!(*amount_value).is_dict()) {
      return false;
    }
    if (!EVMAmount::Populate((*amount_value).GetDict(), out.amount)) {
      return false;
    }
  }

  const base::Value* metadata_value = dict.Find("metadata");
  if (!metadata_value) {
    return false;
  }
  {
    if (!(*metadata_value).is_dict()) {
      return false;
    }
    if (!NFTMetadata::Populate((*metadata_value).GetDict(), out.metadata)) {
      return false;
    }
  }

  const base::Value* owner_value = dict.Find("owner");
  if (!owner_value) {
    return false;
  }
  {
    if (!(*owner_value).is_dict()) {
      return false;
    }
    if (!EVMCounterparty::Populate((*owner_value).GetDict(), out.owner)) {
      return false;
    }
  }

  const base::Value* spender_value = dict.Find("spender");
  if (!spender_value) {
    return false;
  }
  {
    if (!(*spender_value).is_dict()) {
      return false;
    }
    if (!EVMCounterparty::Populate((*spender_value).GetDict(), out.spender)) {
      return false;
    }
  }

  const base::Value* token_id_value = dict.Find("tokenId");
  if (!token_id_value) {
    return false;
  }
  {
    out.token_id = (*token_id_value).Clone();
  }

  const base::Value* asset_value = dict.Find("asset");
  if (!asset_value) {
    return false;
  }
  {
    if (!(*asset_value).is_dict()) {
      return false;
    }
    if (!EVMAsset::Populate((*asset_value).GetDict(), out.asset)) {
      return false;
    }
  }

  return true;
}

// static
bool ERC721ApprovalData::Populate(
    const base::Value& value, ERC721ApprovalData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ERC721ApprovalData> ERC721ApprovalData::FromValue(const base::DictValue& value) {
  ERC721ApprovalData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ERC721ApprovalData> ERC721ApprovalData::FromValue(const base::Value& value) {
  ERC721ApprovalData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ERC721ApprovalData::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("amount", (this->amount).ToValue());

  to_value_result.Set("metadata", (this->metadata).ToValue());

  to_value_result.Set("owner", (this->owner).ToValue());

  to_value_result.Set("spender", (this->spender).ToValue());

  to_value_result.Set("tokenId", (this->token_id).Clone());

  to_value_result.Set("asset", (this->asset).ToValue());


  return to_value_result;
}


ERC721ApprovalForAllData::ERC721ApprovalForAllData()
 {}

ERC721ApprovalForAllData::~ERC721ApprovalForAllData() = default;
ERC721ApprovalForAllData::ERC721ApprovalForAllData(ERC721ApprovalForAllData&& rhs) noexcept = default;
ERC721ApprovalForAllData& ERC721ApprovalForAllData::operator=(ERC721ApprovalForAllData&& rhs) noexcept = default;
ERC721ApprovalForAllData ERC721ApprovalForAllData::Clone() const {
  ERC721ApprovalForAllData out;
  out.amount = amount.Clone();
  out.owner = owner.Clone();
  out.spender = spender.Clone();
  out.asset = asset.Clone();
  return out;
}

// static
bool ERC721ApprovalForAllData::Populate(
    const base::DictValue& dict, ERC721ApprovalForAllData& out) {
  const base::Value* amount_value = dict.Find("amount");
  if (!amount_value) {
    return false;
  }
  {
    if (!(*amount_value).is_dict()) {
      return false;
    }
    if (!EVMAmount::Populate((*amount_value).GetDict(), out.amount)) {
      return false;
    }
  }

  const base::Value* owner_value = dict.Find("owner");
  if (!owner_value) {
    return false;
  }
  {
    if (!(*owner_value).is_dict()) {
      return false;
    }
    if (!EVMCounterparty::Populate((*owner_value).GetDict(), out.owner)) {
      return false;
    }
  }

  const base::Value* spender_value = dict.Find("spender");
  if (!spender_value) {
    return false;
  }
  {
    if (!(*spender_value).is_dict()) {
      return false;
    }
    if (!EVMCounterparty::Populate((*spender_value).GetDict(), out.spender)) {
      return false;
    }
  }

  const base::Value* asset_value = dict.Find("asset");
  if (!asset_value) {
    return false;
  }
  {
    if (!(*asset_value).is_dict()) {
      return false;
    }
    if (!EVMAsset::Populate((*asset_value).GetDict(), out.asset)) {
      return false;
    }
  }

  return true;
}

// static
bool ERC721ApprovalForAllData::Populate(
    const base::Value& value, ERC721ApprovalForAllData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ERC721ApprovalForAllData> ERC721ApprovalForAllData::FromValue(const base::DictValue& value) {
  ERC721ApprovalForAllData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ERC721ApprovalForAllData> ERC721ApprovalForAllData::FromValue(const base::Value& value) {
  ERC721ApprovalForAllData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ERC721ApprovalForAllData::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("amount", (this->amount).ToValue());

  to_value_result.Set("owner", (this->owner).ToValue());

  to_value_result.Set("spender", (this->spender).ToValue());

  to_value_result.Set("asset", (this->asset).ToValue());


  return to_value_result;
}


ERC1155TransferData::ERC1155TransferData()
 {}

ERC1155TransferData::~ERC1155TransferData() = default;
ERC1155TransferData::ERC1155TransferData(ERC1155TransferData&& rhs) noexcept = default;
ERC1155TransferData& ERC1155TransferData::operator=(ERC1155TransferData&& rhs) noexcept = default;
ERC1155TransferData ERC1155TransferData::Clone() const {
  ERC1155TransferData out;
  out.amount = amount.Clone();
  out.metadata = metadata.Clone();
  out.token_id = token_id.Clone();
  out.counterparty = counterparty.Clone();
  out.asset = asset.Clone();
  return out;
}

// static
bool ERC1155TransferData::Populate(
    const base::DictValue& dict, ERC1155TransferData& out) {
  const base::Value* amount_value = dict.Find("amount");
  if (!amount_value) {
    return false;
  }
  {
    if (!(*amount_value).is_dict()) {
      return false;
    }
    if (!EVMAmount::Populate((*amount_value).GetDict(), out.amount)) {
      return false;
    }
  }

  const base::Value* metadata_value = dict.Find("metadata");
  if (!metadata_value) {
    return false;
  }
  {
    if (!(*metadata_value).is_dict()) {
      return false;
    }
    if (!NFTMetadata::Populate((*metadata_value).GetDict(), out.metadata)) {
      return false;
    }
  }

  const base::Value* token_id_value = dict.Find("tokenId");
  if (!token_id_value) {
    return false;
  }
  {
    out.token_id = (*token_id_value).Clone();
  }

  const base::Value* counterparty_value = dict.Find("counterparty");
  if (!counterparty_value) {
    return false;
  }
  {
    out.counterparty = (*counterparty_value).Clone();
  }

  const base::Value* asset_value = dict.Find("asset");
  if (!asset_value) {
    return false;
  }
  {
    if (!(*asset_value).is_dict()) {
      return false;
    }
    if (!EVMAsset::Populate((*asset_value).GetDict(), out.asset)) {
      return false;
    }
  }

  return true;
}

// static
bool ERC1155TransferData::Populate(
    const base::Value& value, ERC1155TransferData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ERC1155TransferData> ERC1155TransferData::FromValue(const base::DictValue& value) {
  ERC1155TransferData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ERC1155TransferData> ERC1155TransferData::FromValue(const base::Value& value) {
  ERC1155TransferData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ERC1155TransferData::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("amount", (this->amount).ToValue());

  to_value_result.Set("metadata", (this->metadata).ToValue());

  to_value_result.Set("tokenId", (this->token_id).Clone());

  to_value_result.Set("counterparty", (this->counterparty).Clone());

  to_value_result.Set("asset", (this->asset).ToValue());


  return to_value_result;
}


ERC1155ApprovalForAllData::ERC1155ApprovalForAllData()
 {}

ERC1155ApprovalForAllData::~ERC1155ApprovalForAllData() = default;
ERC1155ApprovalForAllData::ERC1155ApprovalForAllData(ERC1155ApprovalForAllData&& rhs) noexcept = default;
ERC1155ApprovalForAllData& ERC1155ApprovalForAllData::operator=(ERC1155ApprovalForAllData&& rhs) noexcept = default;
ERC1155ApprovalForAllData ERC1155ApprovalForAllData::Clone() const {
  ERC1155ApprovalForAllData out;
  out.amount = amount.Clone();
  out.owner = owner.Clone();
  out.spender = spender.Clone();
  out.asset = asset.Clone();
  return out;
}

// static
bool ERC1155ApprovalForAllData::Populate(
    const base::DictValue& dict, ERC1155ApprovalForAllData& out) {
  const base::Value* amount_value = dict.Find("amount");
  if (!amount_value) {
    return false;
  }
  {
    if (!(*amount_value).is_dict()) {
      return false;
    }
    if (!EVMAmount::Populate((*amount_value).GetDict(), out.amount)) {
      return false;
    }
  }

  const base::Value* owner_value = dict.Find("owner");
  if (!owner_value) {
    return false;
  }
  {
    if (!(*owner_value).is_dict()) {
      return false;
    }
    if (!EVMCounterparty::Populate((*owner_value).GetDict(), out.owner)) {
      return false;
    }
  }

  const base::Value* spender_value = dict.Find("spender");
  if (!spender_value) {
    return false;
  }
  {
    if (!(*spender_value).is_dict()) {
      return false;
    }
    if (!EVMCounterparty::Populate((*spender_value).GetDict(), out.spender)) {
      return false;
    }
  }

  const base::Value* asset_value = dict.Find("asset");
  if (!asset_value) {
    return false;
  }
  {
    if (!(*asset_value).is_dict()) {
      return false;
    }
    if (!EVMAsset::Populate((*asset_value).GetDict(), out.asset)) {
      return false;
    }
  }

  return true;
}

// static
bool ERC1155ApprovalForAllData::Populate(
    const base::Value& value, ERC1155ApprovalForAllData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ERC1155ApprovalForAllData> ERC1155ApprovalForAllData::FromValue(const base::DictValue& value) {
  ERC1155ApprovalForAllData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ERC1155ApprovalForAllData> ERC1155ApprovalForAllData::FromValue(const base::Value& value) {
  ERC1155ApprovalForAllData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ERC1155ApprovalForAllData::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("amount", (this->amount).ToValue());

  to_value_result.Set("owner", (this->owner).ToValue());

  to_value_result.Set("spender", (this->spender).ToValue());

  to_value_result.Set("asset", (this->asset).ToValue());


  return to_value_result;
}


EVMStateChangeRawInfo::EVMStateChangeRawInfo()
: kind() {}

EVMStateChangeRawInfo::~EVMStateChangeRawInfo() = default;
EVMStateChangeRawInfo::EVMStateChangeRawInfo(EVMStateChangeRawInfo&& rhs) noexcept = default;
EVMStateChangeRawInfo& EVMStateChangeRawInfo::operator=(EVMStateChangeRawInfo&& rhs) noexcept = default;
EVMStateChangeRawInfo EVMStateChangeRawInfo::Clone() const {
  EVMStateChangeRawInfo out;
  out.kind = kind;
  out.data = data.Clone();
  return out;
}

// static
bool EVMStateChangeRawInfo::Populate(
    const base::DictValue& dict, EVMStateChangeRawInfo& out) {
  const base::Value* kind_value = dict.Find("kind");
  if (!kind_value) {
    return false;
  }
  {
    const std::string* evm_raw_info_kind_as_string = (*kind_value).GetIfString();
    if (!evm_raw_info_kind_as_string) {
      return false;
    }
    out.kind = ParseEVMRawInfoKind(*evm_raw_info_kind_as_string);
    if (out.kind == EVMRawInfoKind()) {
      return false;
    }
  }

  const base::Value* data_value = dict.Find("data");
  if (!data_value) {
    return false;
  }
  {
    out.data = (*data_value).Clone();
  }

  return true;
}

// static
bool EVMStateChangeRawInfo::Populate(
    const base::Value& value, EVMStateChangeRawInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EVMStateChangeRawInfo> EVMStateChangeRawInfo::FromValue(const base::DictValue& value) {
  EVMStateChangeRawInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EVMStateChangeRawInfo> EVMStateChangeRawInfo::FromValue(const base::Value& value) {
  EVMStateChangeRawInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue EVMStateChangeRawInfo::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("kind", simulation_responses::ToString(this->kind));

  to_value_result.Set("data", (this->data).Clone());


  return to_value_result;
}


EVMStateChange::EVMStateChange()
 {}

EVMStateChange::~EVMStateChange() = default;
EVMStateChange::EVMStateChange(EVMStateChange&& rhs) noexcept = default;
EVMStateChange& EVMStateChange::operator=(EVMStateChange&& rhs) noexcept = default;
EVMStateChange EVMStateChange::Clone() const {
  EVMStateChange out;
  out.human_readable_diff = human_readable_diff;
  out.raw_info = raw_info.Clone();
  return out;
}

// static
bool EVMStateChange::Populate(
    const base::DictValue& dict, EVMStateChange& out) {
  const base::Value* human_readable_diff_value = dict.Find("humanReadableDiff");
  if (!human_readable_diff_value) {
    return false;
  }
  {
    auto* temp = (*human_readable_diff_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.human_readable_diff = *temp;
  }

  const base::Value* raw_info_value = dict.Find("rawInfo");
  if (!raw_info_value) {
    return false;
  }
  {
    if (!(*raw_info_value).is_dict()) {
      return false;
    }
    if (!EVMStateChangeRawInfo::Populate((*raw_info_value).GetDict(), out.raw_info)) {
      return false;
    }
  }

  return true;
}

// static
bool EVMStateChange::Populate(
    const base::Value& value, EVMStateChange& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EVMStateChange> EVMStateChange::FromValue(const base::DictValue& value) {
  EVMStateChange out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EVMStateChange> EVMStateChange::FromValue(const base::Value& value) {
  EVMStateChange out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue EVMStateChange::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("humanReadableDiff", this->human_readable_diff);

  to_value_result.Set("rawInfo", (this->raw_info).ToValue());


  return to_value_result;
}


EVMAggregatedSimulationResults::EVMAggregatedSimulationResults()
 {}

EVMAggregatedSimulationResults::~EVMAggregatedSimulationResults() = default;
EVMAggregatedSimulationResults::EVMAggregatedSimulationResults(EVMAggregatedSimulationResults&& rhs) noexcept = default;
EVMAggregatedSimulationResults& EVMAggregatedSimulationResults::operator=(EVMAggregatedSimulationResults&& rhs) noexcept = default;
EVMAggregatedSimulationResults EVMAggregatedSimulationResults::Clone() const {
  EVMAggregatedSimulationResults out;
  out.expected_state_changes = expected_state_changes.Clone();
  out.error = error.Clone();
  return out;
}

// static
bool EVMAggregatedSimulationResults::Populate(
    const base::DictValue& dict, EVMAggregatedSimulationResults& out) {
  const base::Value* expected_state_changes_value = dict.Find("expectedStateChanges");
  if (!expected_state_changes_value) {
    return false;
  }
  {
    out.expected_state_changes = (*expected_state_changes_value).Clone();
  }

  const base::Value* error_value = dict.Find("error");
  if (!error_value) {
    return false;
  }
  {
    out.error = (*error_value).Clone();
  }

  return true;
}

// static
bool EVMAggregatedSimulationResults::Populate(
    const base::Value& value, EVMAggregatedSimulationResults& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EVMAggregatedSimulationResults> EVMAggregatedSimulationResults::FromValue(const base::DictValue& value) {
  EVMAggregatedSimulationResults out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EVMAggregatedSimulationResults> EVMAggregatedSimulationResults::FromValue(const base::Value& value) {
  EVMAggregatedSimulationResults out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue EVMAggregatedSimulationResults::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("expectedStateChanges", (this->expected_state_changes).Clone());

  to_value_result.Set("error", (this->error).Clone());


  return to_value_result;
}


EVMSimulationResults::EVMSimulationResults()
 {}

EVMSimulationResults::~EVMSimulationResults() = default;
EVMSimulationResults::EVMSimulationResults(EVMSimulationResults&& rhs) noexcept = default;
EVMSimulationResults& EVMSimulationResults::operator=(EVMSimulationResults&& rhs) noexcept = default;
EVMSimulationResults EVMSimulationResults::Clone() const {
  EVMSimulationResults out;
  out.aggregated = aggregated.Clone();
  return out;
}

// static
bool EVMSimulationResults::Populate(
    const base::DictValue& dict, EVMSimulationResults& out) {
  const base::Value* aggregated_value = dict.Find("aggregated");
  if (!aggregated_value) {
    return false;
  }
  {
    if (!(*aggregated_value).is_dict()) {
      return false;
    }
    if (!EVMAggregatedSimulationResults::Populate((*aggregated_value).GetDict(), out.aggregated)) {
      return false;
    }
  }

  return true;
}

// static
bool EVMSimulationResults::Populate(
    const base::Value& value, EVMSimulationResults& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EVMSimulationResults> EVMSimulationResults::FromValue(const base::DictValue& value) {
  EVMSimulationResults out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EVMSimulationResults> EVMSimulationResults::FromValue(const base::Value& value) {
  EVMSimulationResults out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue EVMSimulationResults::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("aggregated", (this->aggregated).ToValue());


  return to_value_result;
}


EVMSimulationResponse::EVMSimulationResponse()
 {}

EVMSimulationResponse::~EVMSimulationResponse() = default;
EVMSimulationResponse::EVMSimulationResponse(EVMSimulationResponse&& rhs) noexcept = default;
EVMSimulationResponse& EVMSimulationResponse::operator=(EVMSimulationResponse&& rhs) noexcept = default;
EVMSimulationResponse EVMSimulationResponse::Clone() const {
  EVMSimulationResponse out;
  out.action = action;
  out.warnings.reserve(warnings.size());
  for (const auto& element : warnings) {
    json_schema_compiler::util::AppendToContainer(out.warnings, element.Clone());
  }
  out.simulation_results = simulation_results.Clone();
  return out;
}

// static
bool EVMSimulationResponse::Populate(
    const base::DictValue& dict, EVMSimulationResponse& out) {
  const base::Value* action_value = dict.Find("action");
  if (!action_value) {
    return false;
  }
  {
    auto* temp = (*action_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.action = *temp;
  }

  const base::Value* warnings_value = dict.Find("warnings");
  if (!warnings_value) {
    return false;
  }
  {
    if (!(*warnings_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*warnings_value).GetList(), out.warnings)) {
        return false;
      }
    }
  }

  const base::Value* simulation_results_value = dict.Find("simulationResults");
  if (!simulation_results_value) {
    return false;
  }
  {
    if (!(*simulation_results_value).is_dict()) {
      return false;
    }
    if (!EVMSimulationResults::Populate((*simulation_results_value).GetDict(), out.simulation_results)) {
      return false;
    }
  }

  return true;
}

// static
bool EVMSimulationResponse::Populate(
    const base::Value& value, EVMSimulationResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EVMSimulationResponse> EVMSimulationResponse::FromValue(const base::DictValue& value) {
  EVMSimulationResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EVMSimulationResponse> EVMSimulationResponse::FromValue(const base::Value& value) {
  EVMSimulationResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue EVMSimulationResponse::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("action", this->action);

  to_value_result.Set("warnings", json_schema_compiler::util::CreateValueFromArray(this->warnings));

  to_value_result.Set("simulationResults", (this->simulation_results).ToValue());


  return to_value_result;
}


SolanaDiff::SolanaDiff()
: sign() {}

SolanaDiff::~SolanaDiff() = default;
SolanaDiff::SolanaDiff(SolanaDiff&& rhs) noexcept = default;
SolanaDiff& SolanaDiff::operator=(SolanaDiff&& rhs) noexcept = default;
SolanaDiff SolanaDiff::Clone() const {
  SolanaDiff out;
  out.sign = sign;
  out.digits = digits;
  return out;
}

// static
bool SolanaDiff::Populate(
    const base::DictValue& dict, SolanaDiff& out) {
  const base::Value* sign_value = dict.Find("sign");
  if (!sign_value) {
    return false;
  }
  {
    const std::string* diff_sign_as_string = (*sign_value).GetIfString();
    if (!diff_sign_as_string) {
      return false;
    }
    out.sign = ParseDiffSign(*diff_sign_as_string);
    if (out.sign == DiffSign()) {
      return false;
    }
  }

  const base::Value* digits_value = dict.Find("digits");
  if (!digits_value) {
    return false;
  }
  {
    auto* temp = (*digits_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.digits = *temp;
  }

  return true;
}

// static
bool SolanaDiff::Populate(
    const base::Value& value, SolanaDiff& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SolanaDiff> SolanaDiff::FromValue(const base::DictValue& value) {
  SolanaDiff out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SolanaDiff> SolanaDiff::FromValue(const base::Value& value) {
  SolanaDiff out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue SolanaDiff::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("sign", simulation_responses::ToString(this->sign));

  to_value_result.Set("digits", this->digits);


  return to_value_result;
}


SolanaStakeAuthorities::SolanaStakeAuthorities()
 {}

SolanaStakeAuthorities::~SolanaStakeAuthorities() = default;
SolanaStakeAuthorities::SolanaStakeAuthorities(SolanaStakeAuthorities&& rhs) noexcept = default;
SolanaStakeAuthorities& SolanaStakeAuthorities::operator=(SolanaStakeAuthorities&& rhs) noexcept = default;
SolanaStakeAuthorities SolanaStakeAuthorities::Clone() const {
  SolanaStakeAuthorities out;
  out.staker = staker;
  out.withdrawer = withdrawer;
  return out;
}

// static
bool SolanaStakeAuthorities::Populate(
    const base::DictValue& dict, SolanaStakeAuthorities& out) {
  const base::Value* staker_value = dict.Find("staker");
  if (!staker_value) {
    return false;
  }
  {
    auto* temp = (*staker_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.staker = *temp;
  }

  const base::Value* withdrawer_value = dict.Find("withdrawer");
  if (!withdrawer_value) {
    return false;
  }
  {
    auto* temp = (*withdrawer_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.withdrawer = *temp;
  }

  return true;
}

// static
bool SolanaStakeAuthorities::Populate(
    const base::Value& value, SolanaStakeAuthorities& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SolanaStakeAuthorities> SolanaStakeAuthorities::FromValue(const base::DictValue& value) {
  SolanaStakeAuthorities out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SolanaStakeAuthorities> SolanaStakeAuthorities::FromValue(const base::Value& value) {
  SolanaStakeAuthorities out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue SolanaStakeAuthorities::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("staker", this->staker);

  to_value_result.Set("withdrawer", this->withdrawer);


  return to_value_result;
}


SolanaError::SolanaError()
 {}

SolanaError::~SolanaError() = default;
SolanaError::SolanaError(SolanaError&& rhs) noexcept = default;
SolanaError& SolanaError::operator=(SolanaError&& rhs) noexcept = default;
SolanaError SolanaError::Clone() const {
  SolanaError out;
  out.kind = kind;
  out.human_readable_error = human_readable_error;
  return out;
}

// static
bool SolanaError::Populate(
    const base::DictValue& dict, SolanaError& out) {
  const base::Value* kind_value = dict.Find("kind");
  if (!kind_value) {
    return false;
  }
  {
    auto* temp = (*kind_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.kind = *temp;
  }

  const base::Value* human_readable_error_value = dict.Find("humanReadableError");
  if (!human_readable_error_value) {
    return false;
  }
  {
    auto* temp = (*human_readable_error_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.human_readable_error = *temp;
  }

  return true;
}

// static
bool SolanaError::Populate(
    const base::Value& value, SolanaError& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SolanaError> SolanaError::FromValue(const base::DictValue& value) {
  SolanaError out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SolanaError> SolanaError::FromValue(const base::Value& value) {
  SolanaError out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue SolanaError::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("kind", this->kind);

  to_value_result.Set("humanReadableError", this->human_readable_error);


  return to_value_result;
}


SolanaAsset::SolanaAsset()
 {}

SolanaAsset::~SolanaAsset() = default;
SolanaAsset::SolanaAsset(SolanaAsset&& rhs) noexcept = default;
SolanaAsset& SolanaAsset::operator=(SolanaAsset&& rhs) noexcept = default;
SolanaAsset SolanaAsset::Clone() const {
  SolanaAsset out;
  out.symbol = symbol;
  out.name = name;
  out.mint = mint;
  out.decimals = decimals;
  if (image_url) {
    out.image_url = image_url->Clone();
  }
  out.price = price.Clone();
  if (metaplex_token_standard) {
    out.metaplex_token_standard = metaplex_token_standard->Clone();
  }
  return out;
}

// static
bool SolanaAsset::Populate(
    const base::DictValue& dict, SolanaAsset& out) {
  const base::Value* symbol_value = dict.Find("symbol");
  if (!symbol_value) {
    return false;
  }
  {
    auto* temp = (*symbol_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.symbol = *temp;
  }

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

  const base::Value* mint_value = dict.Find("mint");
  if (mint_value) {
    {
      auto* temp = (*mint_value).GetIfString();
      if (!temp) {
        out.mint = std::nullopt;
        return false;
      }
      out.mint = *temp;
    }
  }

  const base::Value* decimals_value = dict.Find("decimals");
  if (!decimals_value) {
    return false;
  }
  {
    auto* temp = (*decimals_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.decimals = *temp;
  }

  const base::Value* image_url_value = dict.Find("imageUrl");
  if (image_url_value) {
    {
      out.image_url = (*image_url_value).Clone();
    }
  }

  const base::Value* price_value = dict.Find("price");
  if (!price_value) {
    return false;
  }
  {
    out.price = (*price_value).Clone();
  }

  const base::Value* metaplex_token_standard_value = dict.Find("metaplexTokenStandard");
  if (metaplex_token_standard_value) {
    {
      out.metaplex_token_standard = (*metaplex_token_standard_value).Clone();
    }
  }

  return true;
}

// static
bool SolanaAsset::Populate(
    const base::Value& value, SolanaAsset& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SolanaAsset> SolanaAsset::FromValue(const base::DictValue& value) {
  SolanaAsset out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SolanaAsset> SolanaAsset::FromValue(const base::Value& value) {
  SolanaAsset out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue SolanaAsset::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("symbol", this->symbol);

  to_value_result.Set("name", this->name);

  if (this->mint) {
    to_value_result.Set("mint", *this->mint);

  }
  to_value_result.Set("decimals", this->decimals);

  if (this->image_url) {
    to_value_result.Set("imageUrl", (this->image_url)->Clone());

  }
  to_value_result.Set("price", (this->price).Clone());

  if (this->metaplex_token_standard) {
    to_value_result.Set("metaplexTokenStandard", (this->metaplex_token_standard)->Clone());

  }

  return to_value_result;
}


SOLTransferData::SOLTransferData()
 {}

SOLTransferData::~SOLTransferData() = default;
SOLTransferData::SOLTransferData(SOLTransferData&& rhs) noexcept = default;
SOLTransferData& SOLTransferData::operator=(SOLTransferData&& rhs) noexcept = default;
SOLTransferData SOLTransferData::Clone() const {
  SOLTransferData out;
  out.asset = asset.Clone();
  out.diff = diff.Clone();
  return out;
}

// static
bool SOLTransferData::Populate(
    const base::DictValue& dict, SOLTransferData& out) {
  const base::Value* asset_value = dict.Find("asset");
  if (!asset_value) {
    return false;
  }
  {
    if (!(*asset_value).is_dict()) {
      return false;
    }
    if (!SolanaAsset::Populate((*asset_value).GetDict(), out.asset)) {
      return false;
    }
  }

  const base::Value* diff_value = dict.Find("diff");
  if (!diff_value) {
    return false;
  }
  {
    if (!(*diff_value).is_dict()) {
      return false;
    }
    if (!SolanaDiff::Populate((*diff_value).GetDict(), out.diff)) {
      return false;
    }
  }

  return true;
}

// static
bool SOLTransferData::Populate(
    const base::Value& value, SOLTransferData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SOLTransferData> SOLTransferData::FromValue(const base::DictValue& value) {
  SOLTransferData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SOLTransferData> SOLTransferData::FromValue(const base::Value& value) {
  SOLTransferData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue SOLTransferData::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("asset", (this->asset).ToValue());

  to_value_result.Set("diff", (this->diff).ToValue());


  return to_value_result;
}


SPLTransferData::SPLTransferData()
 {}

SPLTransferData::~SPLTransferData() = default;
SPLTransferData::SPLTransferData(SPLTransferData&& rhs) noexcept = default;
SPLTransferData& SPLTransferData::operator=(SPLTransferData&& rhs) noexcept = default;
SPLTransferData SPLTransferData::Clone() const {
  SPLTransferData out;
  out.asset = asset.Clone();
  out.diff = diff.Clone();
  out.counterparty = counterparty.Clone();
  return out;
}

// static
bool SPLTransferData::Populate(
    const base::DictValue& dict, SPLTransferData& out) {
  const base::Value* asset_value = dict.Find("asset");
  if (!asset_value) {
    return false;
  }
  {
    if (!(*asset_value).is_dict()) {
      return false;
    }
    if (!SolanaAsset::Populate((*asset_value).GetDict(), out.asset)) {
      return false;
    }
  }

  const base::Value* diff_value = dict.Find("diff");
  if (!diff_value) {
    return false;
  }
  {
    if (!(*diff_value).is_dict()) {
      return false;
    }
    if (!SolanaDiff::Populate((*diff_value).GetDict(), out.diff)) {
      return false;
    }
  }

  const base::Value* counterparty_value = dict.Find("counterparty");
  if (!counterparty_value) {
    return false;
  }
  {
    out.counterparty = (*counterparty_value).Clone();
  }

  return true;
}

// static
bool SPLTransferData::Populate(
    const base::Value& value, SPLTransferData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SPLTransferData> SPLTransferData::FromValue(const base::DictValue& value) {
  SPLTransferData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SPLTransferData> SPLTransferData::FromValue(const base::Value& value) {
  SPLTransferData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue SPLTransferData::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("asset", (this->asset).ToValue());

  to_value_result.Set("diff", (this->diff).ToValue());

  to_value_result.Set("counterparty", (this->counterparty).Clone());


  return to_value_result;
}


SPLApprovalData::SPLApprovalData()
 {}

SPLApprovalData::~SPLApprovalData() = default;
SPLApprovalData::SPLApprovalData(SPLApprovalData&& rhs) noexcept = default;
SPLApprovalData& SPLApprovalData::operator=(SPLApprovalData&& rhs) noexcept = default;
SPLApprovalData SPLApprovalData::Clone() const {
  SPLApprovalData out;
  out.delegate = delegate;
  out.diff = diff.Clone();
  out.asset = asset.Clone();
  return out;
}

// static
bool SPLApprovalData::Populate(
    const base::DictValue& dict, SPLApprovalData& out) {
  const base::Value* delegate_value = dict.Find("delegate");
  if (!delegate_value) {
    return false;
  }
  {
    auto* temp = (*delegate_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.delegate = *temp;
  }

  const base::Value* diff_value = dict.Find("diff");
  if (!diff_value) {
    return false;
  }
  {
    if (!(*diff_value).is_dict()) {
      return false;
    }
    if (!SolanaDiff::Populate((*diff_value).GetDict(), out.diff)) {
      return false;
    }
  }

  const base::Value* asset_value = dict.Find("asset");
  if (!asset_value) {
    return false;
  }
  {
    if (!(*asset_value).is_dict()) {
      return false;
    }
    if (!SolanaAsset::Populate((*asset_value).GetDict(), out.asset)) {
      return false;
    }
  }

  return true;
}

// static
bool SPLApprovalData::Populate(
    const base::Value& value, SPLApprovalData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SPLApprovalData> SPLApprovalData::FromValue(const base::DictValue& value) {
  SPLApprovalData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SPLApprovalData> SPLApprovalData::FromValue(const base::Value& value) {
  SPLApprovalData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue SPLApprovalData::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("delegate", this->delegate);

  to_value_result.Set("diff", (this->diff).ToValue());

  to_value_result.Set("asset", (this->asset).ToValue());


  return to_value_result;
}


SOLStakeAuthorityChangeData::SOLStakeAuthorityChangeData()
 {}

SOLStakeAuthorityChangeData::~SOLStakeAuthorityChangeData() = default;
SOLStakeAuthorityChangeData::SOLStakeAuthorityChangeData(SOLStakeAuthorityChangeData&& rhs) noexcept = default;
SOLStakeAuthorityChangeData& SOLStakeAuthorityChangeData::operator=(SOLStakeAuthorityChangeData&& rhs) noexcept = default;
SOLStakeAuthorityChangeData SOLStakeAuthorityChangeData::Clone() const {
  SOLStakeAuthorityChangeData out;
  out.stake_account = stake_account;
  out.current_authorities = current_authorities.Clone();
  out.future_authorities = future_authorities.Clone();
  out.asset = asset.Clone();
  out.sol_staked = sol_staked;
  return out;
}

// static
bool SOLStakeAuthorityChangeData::Populate(
    const base::DictValue& dict, SOLStakeAuthorityChangeData& out) {
  const base::Value* stake_account_value = dict.Find("stakeAccount");
  if (!stake_account_value) {
    return false;
  }
  {
    auto* temp = (*stake_account_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.stake_account = *temp;
  }

  const base::Value* current_authorities_value = dict.Find("currentAuthorities");
  if (!current_authorities_value) {
    return false;
  }
  {
    if (!(*current_authorities_value).is_dict()) {
      return false;
    }
    if (!SolanaStakeAuthorities::Populate((*current_authorities_value).GetDict(), out.current_authorities)) {
      return false;
    }
  }

  const base::Value* future_authorities_value = dict.Find("futureAuthorities");
  if (!future_authorities_value) {
    return false;
  }
  {
    if (!(*future_authorities_value).is_dict()) {
      return false;
    }
    if (!SolanaStakeAuthorities::Populate((*future_authorities_value).GetDict(), out.future_authorities)) {
      return false;
    }
  }

  const base::Value* asset_value = dict.Find("asset");
  if (!asset_value) {
    return false;
  }
  {
    if (!(*asset_value).is_dict()) {
      return false;
    }
    if (!SolanaAsset::Populate((*asset_value).GetDict(), out.asset)) {
      return false;
    }
  }

  const base::Value* sol_staked_value = dict.Find("solStaked");
  if (!sol_staked_value) {
    return false;
  }
  {
    auto* temp = (*sol_staked_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.sol_staked = *temp;
  }

  return true;
}

// static
bool SOLStakeAuthorityChangeData::Populate(
    const base::Value& value, SOLStakeAuthorityChangeData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SOLStakeAuthorityChangeData> SOLStakeAuthorityChangeData::FromValue(const base::DictValue& value) {
  SOLStakeAuthorityChangeData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SOLStakeAuthorityChangeData> SOLStakeAuthorityChangeData::FromValue(const base::Value& value) {
  SOLStakeAuthorityChangeData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue SOLStakeAuthorityChangeData::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("stakeAccount", this->stake_account);

  to_value_result.Set("currentAuthorities", (this->current_authorities).ToValue());

  to_value_result.Set("futureAuthorities", (this->future_authorities).ToValue());

  to_value_result.Set("asset", (this->asset).ToValue());

  to_value_result.Set("solStaked", this->sol_staked);


  return to_value_result;
}


SolanaUserAccountOwnerChangeData::SolanaUserAccountOwnerChangeData()
 {}

SolanaUserAccountOwnerChangeData::~SolanaUserAccountOwnerChangeData() = default;
SolanaUserAccountOwnerChangeData::SolanaUserAccountOwnerChangeData(SolanaUserAccountOwnerChangeData&& rhs) noexcept = default;
SolanaUserAccountOwnerChangeData& SolanaUserAccountOwnerChangeData::operator=(SolanaUserAccountOwnerChangeData&& rhs) noexcept = default;
SolanaUserAccountOwnerChangeData SolanaUserAccountOwnerChangeData::Clone() const {
  SolanaUserAccountOwnerChangeData out;
  out.account = account;
  out.current_owner = current_owner;
  out.future_owner = future_owner;
  return out;
}

// static
bool SolanaUserAccountOwnerChangeData::Populate(
    const base::DictValue& dict, SolanaUserAccountOwnerChangeData& out) {
  const base::Value* account_value = dict.Find("account");
  if (!account_value) {
    return false;
  }
  {
    auto* temp = (*account_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.account = *temp;
  }

  const base::Value* current_owner_value = dict.Find("currentOwner");
  if (!current_owner_value) {
    return false;
  }
  {
    auto* temp = (*current_owner_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.current_owner = *temp;
  }

  const base::Value* future_owner_value = dict.Find("futureOwner");
  if (!future_owner_value) {
    return false;
  }
  {
    auto* temp = (*future_owner_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.future_owner = *temp;
  }

  return true;
}

// static
bool SolanaUserAccountOwnerChangeData::Populate(
    const base::Value& value, SolanaUserAccountOwnerChangeData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SolanaUserAccountOwnerChangeData> SolanaUserAccountOwnerChangeData::FromValue(const base::DictValue& value) {
  SolanaUserAccountOwnerChangeData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SolanaUserAccountOwnerChangeData> SolanaUserAccountOwnerChangeData::FromValue(const base::Value& value) {
  SolanaUserAccountOwnerChangeData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue SolanaUserAccountOwnerChangeData::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("account", this->account);

  to_value_result.Set("currentOwner", this->current_owner);

  to_value_result.Set("futureOwner", this->future_owner);


  return to_value_result;
}


SolanaStateChangeRawInfo::SolanaStateChangeRawInfo()
: kind() {}

SolanaStateChangeRawInfo::~SolanaStateChangeRawInfo() = default;
SolanaStateChangeRawInfo::SolanaStateChangeRawInfo(SolanaStateChangeRawInfo&& rhs) noexcept = default;
SolanaStateChangeRawInfo& SolanaStateChangeRawInfo::operator=(SolanaStateChangeRawInfo&& rhs) noexcept = default;
SolanaStateChangeRawInfo SolanaStateChangeRawInfo::Clone() const {
  SolanaStateChangeRawInfo out;
  out.kind = kind;
  out.data = data.Clone();
  return out;
}

// static
bool SolanaStateChangeRawInfo::Populate(
    const base::DictValue& dict, SolanaStateChangeRawInfo& out) {
  const base::Value* kind_value = dict.Find("kind");
  if (!kind_value) {
    return false;
  }
  {
    const std::string* solana_raw_info_kind_as_string = (*kind_value).GetIfString();
    if (!solana_raw_info_kind_as_string) {
      return false;
    }
    out.kind = ParseSolanaRawInfoKind(*solana_raw_info_kind_as_string);
    if (out.kind == SolanaRawInfoKind()) {
      return false;
    }
  }

  const base::Value* data_value = dict.Find("data");
  if (!data_value) {
    return false;
  }
  {
    out.data = (*data_value).Clone();
  }

  return true;
}

// static
bool SolanaStateChangeRawInfo::Populate(
    const base::Value& value, SolanaStateChangeRawInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SolanaStateChangeRawInfo> SolanaStateChangeRawInfo::FromValue(const base::DictValue& value) {
  SolanaStateChangeRawInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SolanaStateChangeRawInfo> SolanaStateChangeRawInfo::FromValue(const base::Value& value) {
  SolanaStateChangeRawInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue SolanaStateChangeRawInfo::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("kind", simulation_responses::ToString(this->kind));

  to_value_result.Set("data", (this->data).Clone());


  return to_value_result;
}


SolanaStateChange::SolanaStateChange()
: suggested_color() {}

SolanaStateChange::~SolanaStateChange() = default;
SolanaStateChange::SolanaStateChange(SolanaStateChange&& rhs) noexcept = default;
SolanaStateChange& SolanaStateChange::operator=(SolanaStateChange&& rhs) noexcept = default;
SolanaStateChange SolanaStateChange::Clone() const {
  SolanaStateChange out;
  out.human_readable_diff = human_readable_diff;
  out.suggested_color = suggested_color;
  out.raw_info = raw_info.Clone();
  return out;
}

// static
bool SolanaStateChange::Populate(
    const base::DictValue& dict, SolanaStateChange& out) {
  const base::Value* human_readable_diff_value = dict.Find("humanReadableDiff");
  if (!human_readable_diff_value) {
    return false;
  }
  {
    auto* temp = (*human_readable_diff_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.human_readable_diff = *temp;
  }

  const base::Value* suggested_color_value = dict.Find("suggestedColor");
  if (!suggested_color_value) {
    return false;
  }
  {
    const std::string* suggested_color_as_string = (*suggested_color_value).GetIfString();
    if (!suggested_color_as_string) {
      return false;
    }
    out.suggested_color = ParseSuggestedColor(*suggested_color_as_string);
    if (out.suggested_color == SuggestedColor()) {
      return false;
    }
  }

  const base::Value* raw_info_value = dict.Find("rawInfo");
  if (!raw_info_value) {
    return false;
  }
  {
    if (!(*raw_info_value).is_dict()) {
      return false;
    }
    if (!SolanaStateChangeRawInfo::Populate((*raw_info_value).GetDict(), out.raw_info)) {
      return false;
    }
  }

  return true;
}

// static
bool SolanaStateChange::Populate(
    const base::Value& value, SolanaStateChange& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SolanaStateChange> SolanaStateChange::FromValue(const base::DictValue& value) {
  SolanaStateChange out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SolanaStateChange> SolanaStateChange::FromValue(const base::Value& value) {
  SolanaStateChange out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue SolanaStateChange::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("humanReadableDiff", this->human_readable_diff);

  to_value_result.Set("suggestedColor", simulation_responses::ToString(this->suggested_color));

  to_value_result.Set("rawInfo", (this->raw_info).ToValue());


  return to_value_result;
}


SolanaAggregatedSimulationResults::SolanaAggregatedSimulationResults()
 {}

SolanaAggregatedSimulationResults::~SolanaAggregatedSimulationResults() = default;
SolanaAggregatedSimulationResults::SolanaAggregatedSimulationResults(SolanaAggregatedSimulationResults&& rhs) noexcept = default;
SolanaAggregatedSimulationResults& SolanaAggregatedSimulationResults::operator=(SolanaAggregatedSimulationResults&& rhs) noexcept = default;
SolanaAggregatedSimulationResults SolanaAggregatedSimulationResults::Clone() const {
  SolanaAggregatedSimulationResults out;
  out.action = action;
  out.warnings.reserve(warnings.size());
  for (const auto& element : warnings) {
    json_schema_compiler::util::AppendToContainer(out.warnings, element.Clone());
  }
  out.expected_state_changes = expected_state_changes.Clone();
  out.error = error.Clone();
  return out;
}

// static
bool SolanaAggregatedSimulationResults::Populate(
    const base::DictValue& dict, SolanaAggregatedSimulationResults& out) {
  const base::Value* action_value = dict.Find("action");
  if (!action_value) {
    return false;
  }
  {
    auto* temp = (*action_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.action = *temp;
  }

  const base::Value* warnings_value = dict.Find("warnings");
  if (!warnings_value) {
    return false;
  }
  {
    if (!(*warnings_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*warnings_value).GetList(), out.warnings)) {
        return false;
      }
    }
  }

  const base::Value* expected_state_changes_value = dict.Find("expectedStateChanges");
  if (!expected_state_changes_value) {
    return false;
  }
  {
    out.expected_state_changes = (*expected_state_changes_value).Clone();
  }

  const base::Value* error_value = dict.Find("error");
  if (!error_value) {
    return false;
  }
  {
    out.error = (*error_value).Clone();
  }

  return true;
}

// static
bool SolanaAggregatedSimulationResults::Populate(
    const base::Value& value, SolanaAggregatedSimulationResults& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SolanaAggregatedSimulationResults> SolanaAggregatedSimulationResults::FromValue(const base::DictValue& value) {
  SolanaAggregatedSimulationResults out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SolanaAggregatedSimulationResults> SolanaAggregatedSimulationResults::FromValue(const base::Value& value) {
  SolanaAggregatedSimulationResults out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue SolanaAggregatedSimulationResults::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("action", this->action);

  to_value_result.Set("warnings", json_schema_compiler::util::CreateValueFromArray(this->warnings));

  to_value_result.Set("expectedStateChanges", (this->expected_state_changes).Clone());

  to_value_result.Set("error", (this->error).Clone());


  return to_value_result;
}


SolanaSimulationResponse::SolanaSimulationResponse()
 {}

SolanaSimulationResponse::~SolanaSimulationResponse() = default;
SolanaSimulationResponse::SolanaSimulationResponse(SolanaSimulationResponse&& rhs) noexcept = default;
SolanaSimulationResponse& SolanaSimulationResponse::operator=(SolanaSimulationResponse&& rhs) noexcept = default;
SolanaSimulationResponse SolanaSimulationResponse::Clone() const {
  SolanaSimulationResponse out;
  out.aggregated = aggregated.Clone();
  return out;
}

// static
bool SolanaSimulationResponse::Populate(
    const base::DictValue& dict, SolanaSimulationResponse& out) {
  const base::Value* aggregated_value = dict.Find("aggregated");
  if (!aggregated_value) {
    return false;
  }
  {
    if (!(*aggregated_value).is_dict()) {
      return false;
    }
    if (!SolanaAggregatedSimulationResults::Populate((*aggregated_value).GetDict(), out.aggregated)) {
      return false;
    }
  }

  return true;
}

// static
bool SolanaSimulationResponse::Populate(
    const base::Value& value, SolanaSimulationResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SolanaSimulationResponse> SolanaSimulationResponse::FromValue(const base::DictValue& value) {
  SolanaSimulationResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SolanaSimulationResponse> SolanaSimulationResponse::FromValue(const base::Value& value) {
  SolanaSimulationResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue SolanaSimulationResponse::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("aggregated", (this->aggregated).ToValue());


  return to_value_result;
}


HTTPError::HTTPError()
 {}

HTTPError::~HTTPError() = default;
HTTPError::HTTPError(HTTPError&& rhs) noexcept = default;
HTTPError& HTTPError::operator=(HTTPError&& rhs) noexcept = default;
HTTPError HTTPError::Clone() const {
  HTTPError out;
  out.error = error;
  return out;
}

// static
bool HTTPError::Populate(
    const base::DictValue& dict, HTTPError& out) {
  const base::Value* error_value = dict.Find("error");
  if (!error_value) {
    return false;
  }
  {
    auto* temp = (*error_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.error = *temp;
  }

  return true;
}

// static
bool HTTPError::Populate(
    const base::Value& value, HTTPError& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<HTTPError> HTTPError::FromValue(const base::DictValue& value) {
  HTTPError out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<HTTPError> HTTPError::FromValue(const base::Value& value) {
  HTTPError out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue HTTPError::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("error", this->error);


  return to_value_result;
}



}  // namespace simulation_responses
}  // namespace brave_wallet

