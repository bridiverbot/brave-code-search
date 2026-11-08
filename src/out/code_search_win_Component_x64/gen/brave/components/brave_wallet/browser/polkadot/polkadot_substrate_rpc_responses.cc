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

#include "brave/components/brave_wallet/browser/polkadot/polkadot_substrate_rpc_responses.h"

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
namespace polkadot_substrate_rpc_responses {
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
  if (message_value && !message_value->is_none()) {
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


PolkadotSystemChainResponse::PolkadotSystemChainResponse()
: id(0) {}

PolkadotSystemChainResponse::~PolkadotSystemChainResponse() = default;
PolkadotSystemChainResponse::PolkadotSystemChainResponse(PolkadotSystemChainResponse&& rhs) noexcept = default;
PolkadotSystemChainResponse& PolkadotSystemChainResponse::operator=(PolkadotSystemChainResponse&& rhs) noexcept = default;
PolkadotSystemChainResponse PolkadotSystemChainResponse::Clone() const {
  PolkadotSystemChainResponse out;
  out.jsonrpc = jsonrpc;
  out.id = id;
  out.result = result;
  if (error) {
    out.error = error->Clone();
  }
  return out;
}

// static
bool PolkadotSystemChainResponse::Populate(
    const base::DictValue& dict, PolkadotSystemChainResponse& out) {
  const base::Value* jsonrpc_value = dict.Find("jsonrpc");
  if (!jsonrpc_value) {
    return false;
  }
  {
    auto* temp = (*jsonrpc_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.jsonrpc = *temp;
  }

  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* result_value = dict.Find("result");
  if (result_value && !result_value->is_none()) {
    {
      auto* temp = (*result_value).GetIfString();
      if (!temp) {
        out.result = std::nullopt;
        return false;
      }
      out.result = *temp;
    }
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value && !error_value->is_none()) {
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
bool PolkadotSystemChainResponse::Populate(
    const base::Value& value, PolkadotSystemChainResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PolkadotSystemChainResponse> PolkadotSystemChainResponse::FromValue(const base::DictValue& value) {
  PolkadotSystemChainResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PolkadotSystemChainResponse> PolkadotSystemChainResponse::FromValue(const base::Value& value) {
  PolkadotSystemChainResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PolkadotSystemChainResponse::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("jsonrpc", this->jsonrpc);

  to_value_result.Set("id", this->id);

  if (this->result) {
    to_value_result.Set("result", *this->result);

  }
  if (this->error) {
    to_value_result.Set("error", (this->error)->ToValue());

  }

  return to_value_result;
}


AccountInfo::AccountInfo()
 {}

AccountInfo::~AccountInfo() = default;
AccountInfo::AccountInfo(AccountInfo&& rhs) noexcept = default;
AccountInfo& AccountInfo::operator=(AccountInfo&& rhs) noexcept = default;
AccountInfo AccountInfo::Clone() const {
  AccountInfo out;
  out.block = block;
  out.changes.reserve(changes.size());
  for (const auto& element : changes) {
    json_schema_compiler::util::AppendToContainer(out.changes, element.Clone());
  }
  return out;
}

// static
bool AccountInfo::Populate(
    const base::DictValue& dict, AccountInfo& out) {
  const base::Value* block_value = dict.Find("block");
  if (!block_value) {
    return false;
  }
  {
    auto* temp = (*block_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.block = *temp;
  }

  const base::Value* changes_value = dict.Find("changes");
  if (!changes_value) {
    return false;
  }
  {
    if (!(*changes_value).is_list()) {
      return false;
    }
    else {
      out.changes = (*changes_value).GetList().Clone();
    }
  }

  return true;
}

// static
bool AccountInfo::Populate(
    const base::Value& value, AccountInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AccountInfo> AccountInfo::FromValue(const base::DictValue& value) {
  AccountInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AccountInfo> AccountInfo::FromValue(const base::Value& value) {
  AccountInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AccountInfo::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("block", this->block);

  to_value_result.Set("changes", (this->changes).Clone());


  return to_value_result;
}


PolkadotAccountBalanceResponse::PolkadotAccountBalanceResponse()
: id(0) {}

PolkadotAccountBalanceResponse::~PolkadotAccountBalanceResponse() = default;
PolkadotAccountBalanceResponse::PolkadotAccountBalanceResponse(PolkadotAccountBalanceResponse&& rhs) noexcept = default;
PolkadotAccountBalanceResponse& PolkadotAccountBalanceResponse::operator=(PolkadotAccountBalanceResponse&& rhs) noexcept = default;
PolkadotAccountBalanceResponse PolkadotAccountBalanceResponse::Clone() const {
  PolkadotAccountBalanceResponse out;
  out.jsonrpc = jsonrpc;
  out.id = id;
  if (result) {
    out.result.emplace();
    out.result->reserve(result->size());
    for (const auto& element : *result) {
      json_schema_compiler::util::AppendToContainer(*out.result, element.Clone());
    }
  }
  if (error) {
    out.error = error->Clone();
  }
  return out;
}

// static
bool PolkadotAccountBalanceResponse::Populate(
    const base::DictValue& dict, PolkadotAccountBalanceResponse& out) {
  const base::Value* jsonrpc_value = dict.Find("jsonrpc");
  if (!jsonrpc_value) {
    return false;
  }
  {
    auto* temp = (*jsonrpc_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.jsonrpc = *temp;
  }

  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* result_value = dict.Find("result");
  if (result_value && !result_value->is_none()) {
    {
      if (!(*result_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*result_value).GetList(), out.result)) {
          return false;
        }
      }
    }
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value && !error_value->is_none()) {
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
bool PolkadotAccountBalanceResponse::Populate(
    const base::Value& value, PolkadotAccountBalanceResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PolkadotAccountBalanceResponse> PolkadotAccountBalanceResponse::FromValue(const base::DictValue& value) {
  PolkadotAccountBalanceResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PolkadotAccountBalanceResponse> PolkadotAccountBalanceResponse::FromValue(const base::Value& value) {
  PolkadotAccountBalanceResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PolkadotAccountBalanceResponse::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("jsonrpc", this->jsonrpc);

  to_value_result.Set("id", this->id);

  if (this->result) {
    to_value_result.Set("result", json_schema_compiler::util::CreateValueFromArray(*this->result));

  }
  if (this->error) {
    to_value_result.Set("error", (this->error)->ToValue());

  }

  return to_value_result;
}


PolkadotAssetAccountBalanceResponse::PolkadotAssetAccountBalanceResponse()
: id(0) {}

PolkadotAssetAccountBalanceResponse::~PolkadotAssetAccountBalanceResponse() = default;
PolkadotAssetAccountBalanceResponse::PolkadotAssetAccountBalanceResponse(PolkadotAssetAccountBalanceResponse&& rhs) noexcept = default;
PolkadotAssetAccountBalanceResponse& PolkadotAssetAccountBalanceResponse::operator=(PolkadotAssetAccountBalanceResponse&& rhs) noexcept = default;
PolkadotAssetAccountBalanceResponse PolkadotAssetAccountBalanceResponse::Clone() const {
  PolkadotAssetAccountBalanceResponse out;
  out.jsonrpc = jsonrpc;
  out.id = id;
  if (result) {
    out.result.emplace();
    out.result->reserve(result->size());
    for (const auto& element : *result) {
      json_schema_compiler::util::AppendToContainer(*out.result, element.Clone());
    }
  }
  if (error) {
    out.error = error->Clone();
  }
  return out;
}

// static
bool PolkadotAssetAccountBalanceResponse::Populate(
    const base::DictValue& dict, PolkadotAssetAccountBalanceResponse& out) {
  const base::Value* jsonrpc_value = dict.Find("jsonrpc");
  if (!jsonrpc_value) {
    return false;
  }
  {
    auto* temp = (*jsonrpc_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.jsonrpc = *temp;
  }

  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* result_value = dict.Find("result");
  if (result_value && !result_value->is_none()) {
    {
      if (!(*result_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*result_value).GetList(), out.result)) {
          return false;
        }
      }
    }
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value && !error_value->is_none()) {
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
bool PolkadotAssetAccountBalanceResponse::Populate(
    const base::Value& value, PolkadotAssetAccountBalanceResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PolkadotAssetAccountBalanceResponse> PolkadotAssetAccountBalanceResponse::FromValue(const base::DictValue& value) {
  PolkadotAssetAccountBalanceResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PolkadotAssetAccountBalanceResponse> PolkadotAssetAccountBalanceResponse::FromValue(const base::Value& value) {
  PolkadotAssetAccountBalanceResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PolkadotAssetAccountBalanceResponse::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("jsonrpc", this->jsonrpc);

  to_value_result.Set("id", this->id);

  if (this->result) {
    to_value_result.Set("result", json_schema_compiler::util::CreateValueFromArray(*this->result));

  }
  if (this->error) {
    to_value_result.Set("error", (this->error)->ToValue());

  }

  return to_value_result;
}


PolkadotFinalizedHead::PolkadotFinalizedHead()
: id(0) {}

PolkadotFinalizedHead::~PolkadotFinalizedHead() = default;
PolkadotFinalizedHead::PolkadotFinalizedHead(PolkadotFinalizedHead&& rhs) noexcept = default;
PolkadotFinalizedHead& PolkadotFinalizedHead::operator=(PolkadotFinalizedHead&& rhs) noexcept = default;
PolkadotFinalizedHead PolkadotFinalizedHead::Clone() const {
  PolkadotFinalizedHead out;
  out.jsonrpc = jsonrpc;
  out.id = id;
  out.result = result;
  if (error) {
    out.error = error->Clone();
  }
  return out;
}

// static
bool PolkadotFinalizedHead::Populate(
    const base::DictValue& dict, PolkadotFinalizedHead& out) {
  const base::Value* jsonrpc_value = dict.Find("jsonrpc");
  if (!jsonrpc_value) {
    return false;
  }
  {
    auto* temp = (*jsonrpc_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.jsonrpc = *temp;
  }

  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* result_value = dict.Find("result");
  if (result_value && !result_value->is_none()) {
    {
      auto* temp = (*result_value).GetIfString();
      if (!temp) {
        out.result = std::nullopt;
        return false;
      }
      out.result = *temp;
    }
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value && !error_value->is_none()) {
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
bool PolkadotFinalizedHead::Populate(
    const base::Value& value, PolkadotFinalizedHead& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PolkadotFinalizedHead> PolkadotFinalizedHead::FromValue(const base::DictValue& value) {
  PolkadotFinalizedHead out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PolkadotFinalizedHead> PolkadotFinalizedHead::FromValue(const base::Value& value) {
  PolkadotFinalizedHead out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PolkadotFinalizedHead::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("jsonrpc", this->jsonrpc);

  to_value_result.Set("id", this->id);

  if (this->result) {
    to_value_result.Set("result", *this->result);

  }
  if (this->error) {
    to_value_result.Set("error", (this->error)->ToValue());

  }

  return to_value_result;
}


ChainHeaderDigest::ChainHeaderDigest()
 {}

ChainHeaderDigest::~ChainHeaderDigest() = default;
ChainHeaderDigest::ChainHeaderDigest(ChainHeaderDigest&& rhs) noexcept = default;
ChainHeaderDigest& ChainHeaderDigest::operator=(ChainHeaderDigest&& rhs) noexcept = default;
ChainHeaderDigest ChainHeaderDigest::Clone() const {
  ChainHeaderDigest out;
  out.logs = logs;
  return out;
}

// static
bool ChainHeaderDigest::Populate(
    const base::DictValue& dict, ChainHeaderDigest& out) {
  const base::Value* logs_value = dict.Find("logs");
  if (!logs_value) {
    return false;
  }
  {
    if (!(*logs_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*logs_value).GetList(), out.logs)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool ChainHeaderDigest::Populate(
    const base::Value& value, ChainHeaderDigest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ChainHeaderDigest> ChainHeaderDigest::FromValue(const base::DictValue& value) {
  ChainHeaderDigest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ChainHeaderDigest> ChainHeaderDigest::FromValue(const base::Value& value) {
  ChainHeaderDigest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ChainHeaderDigest::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("logs", json_schema_compiler::util::CreateValueFromArray(this->logs));


  return to_value_result;
}


ChainHeader::ChainHeader()
 {}

ChainHeader::~ChainHeader() = default;
ChainHeader::ChainHeader(ChainHeader&& rhs) noexcept = default;
ChainHeader& ChainHeader::operator=(ChainHeader&& rhs) noexcept = default;
ChainHeader ChainHeader::Clone() const {
  ChainHeader out;
  out.parent_hash = parent_hash;
  out.number = number;
  out.state_root = state_root;
  out.extrinsics_root = extrinsics_root;
  out.digest = digest.Clone();
  return out;
}

// static
bool ChainHeader::Populate(
    const base::DictValue& dict, ChainHeader& out) {
  const base::Value* parent_hash_value = dict.Find("parentHash");
  if (!parent_hash_value) {
    return false;
  }
  {
    auto* temp = (*parent_hash_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.parent_hash = *temp;
  }

  const base::Value* number_value = dict.Find("number");
  if (!number_value) {
    return false;
  }
  {
    auto* temp = (*number_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.number = *temp;
  }

  const base::Value* state_root_value = dict.Find("stateRoot");
  if (!state_root_value) {
    return false;
  }
  {
    auto* temp = (*state_root_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.state_root = *temp;
  }

  const base::Value* extrinsics_root_value = dict.Find("extrinsicsRoot");
  if (!extrinsics_root_value) {
    return false;
  }
  {
    auto* temp = (*extrinsics_root_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.extrinsics_root = *temp;
  }

  const base::Value* digest_value = dict.Find("digest");
  if (!digest_value) {
    return false;
  }
  {
    if (!(*digest_value).is_dict()) {
      return false;
    }
    if (!ChainHeaderDigest::Populate((*digest_value).GetDict(), out.digest)) {
      return false;
    }
  }

  return true;
}

// static
bool ChainHeader::Populate(
    const base::Value& value, ChainHeader& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ChainHeader> ChainHeader::FromValue(const base::DictValue& value) {
  ChainHeader out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ChainHeader> ChainHeader::FromValue(const base::Value& value) {
  ChainHeader out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ChainHeader::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("parentHash", this->parent_hash);

  to_value_result.Set("number", this->number);

  to_value_result.Set("stateRoot", this->state_root);

  to_value_result.Set("extrinsicsRoot", this->extrinsics_root);

  to_value_result.Set("digest", (this->digest).ToValue());


  return to_value_result;
}


PolkadotChainHeader::PolkadotChainHeader()
: id(0) {}

PolkadotChainHeader::~PolkadotChainHeader() = default;
PolkadotChainHeader::PolkadotChainHeader(PolkadotChainHeader&& rhs) noexcept = default;
PolkadotChainHeader& PolkadotChainHeader::operator=(PolkadotChainHeader&& rhs) noexcept = default;
PolkadotChainHeader PolkadotChainHeader::Clone() const {
  PolkadotChainHeader out;
  out.jsonrpc = jsonrpc;
  out.id = id;
  if (result) {
    out.result = result->Clone();
  }
  if (error) {
    out.error = error->Clone();
  }
  return out;
}

// static
bool PolkadotChainHeader::Populate(
    const base::DictValue& dict, PolkadotChainHeader& out) {
  const base::Value* jsonrpc_value = dict.Find("jsonrpc");
  if (!jsonrpc_value) {
    return false;
  }
  {
    auto* temp = (*jsonrpc_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.jsonrpc = *temp;
  }

  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* result_value = dict.Find("result");
  if (result_value && !result_value->is_none()) {
    {
      if (!(*result_value).is_dict()) {
        return false;
      }
      else {
        ChainHeader temp;
        if (!ChainHeader::Populate((*result_value).GetDict(), temp))
          return false;
        out.result = std::move(temp);
      }
    }
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value && !error_value->is_none()) {
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
bool PolkadotChainHeader::Populate(
    const base::Value& value, PolkadotChainHeader& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PolkadotChainHeader> PolkadotChainHeader::FromValue(const base::DictValue& value) {
  PolkadotChainHeader out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PolkadotChainHeader> PolkadotChainHeader::FromValue(const base::Value& value) {
  PolkadotChainHeader out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PolkadotChainHeader::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("jsonrpc", this->jsonrpc);

  to_value_result.Set("id", this->id);

  if (this->result) {
    to_value_result.Set("result", (this->result)->ToValue());

  }
  if (this->error) {
    to_value_result.Set("error", (this->error)->ToValue());

  }

  return to_value_result;
}


ChainBlockData::ChainBlockData()
 {}

ChainBlockData::~ChainBlockData() = default;
ChainBlockData::ChainBlockData(ChainBlockData&& rhs) noexcept = default;
ChainBlockData& ChainBlockData::operator=(ChainBlockData&& rhs) noexcept = default;
ChainBlockData ChainBlockData::Clone() const {
  ChainBlockData out;
  out.extrinsics = extrinsics;
  out.header = header.Clone();
  return out;
}

// static
bool ChainBlockData::Populate(
    const base::DictValue& dict, ChainBlockData& out) {
  const base::Value* extrinsics_value = dict.Find("extrinsics");
  if (!extrinsics_value) {
    return false;
  }
  {
    if (!(*extrinsics_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*extrinsics_value).GetList(), out.extrinsics)) {
        return false;
      }
    }
  }

  const base::Value* header_value = dict.Find("header");
  if (!header_value) {
    return false;
  }
  {
    if (!(*header_value).is_dict()) {
      return false;
    }
    if (!ChainHeader::Populate((*header_value).GetDict(), out.header)) {
      return false;
    }
  }

  return true;
}

// static
bool ChainBlockData::Populate(
    const base::Value& value, ChainBlockData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ChainBlockData> ChainBlockData::FromValue(const base::DictValue& value) {
  ChainBlockData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ChainBlockData> ChainBlockData::FromValue(const base::Value& value) {
  ChainBlockData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ChainBlockData::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("extrinsics", json_schema_compiler::util::CreateValueFromArray(this->extrinsics));

  to_value_result.Set("header", (this->header).ToValue());


  return to_value_result;
}


ChainBlock::ChainBlock()
 {}

ChainBlock::~ChainBlock() = default;
ChainBlock::ChainBlock(ChainBlock&& rhs) noexcept = default;
ChainBlock& ChainBlock::operator=(ChainBlock&& rhs) noexcept = default;
ChainBlock ChainBlock::Clone() const {
  ChainBlock out;
  out.block = block.Clone();
  if (justification) {
    out.justification = justification->Clone();
  }
  return out;
}

// static
bool ChainBlock::Populate(
    const base::DictValue& dict, ChainBlock& out) {
  const base::Value* block_value = dict.Find("block");
  if (!block_value) {
    return false;
  }
  {
    if (!(*block_value).is_dict()) {
      return false;
    }
    if (!ChainBlockData::Populate((*block_value).GetDict(), out.block)) {
      return false;
    }
  }

  const base::Value* justification_value = dict.Find("justification");
  if (justification_value && !justification_value->is_none()) {
    {
      out.justification = (*justification_value).Clone();
    }
  }

  return true;
}

// static
bool ChainBlock::Populate(
    const base::Value& value, ChainBlock& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ChainBlock> ChainBlock::FromValue(const base::DictValue& value) {
  ChainBlock out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ChainBlock> ChainBlock::FromValue(const base::Value& value) {
  ChainBlock out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ChainBlock::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("block", (this->block).ToValue());

  if (this->justification) {
    to_value_result.Set("justification", (this->justification)->Clone());

  }

  return to_value_result;
}


PolkadotBlock::PolkadotBlock()
: id(0) {}

PolkadotBlock::~PolkadotBlock() = default;
PolkadotBlock::PolkadotBlock(PolkadotBlock&& rhs) noexcept = default;
PolkadotBlock& PolkadotBlock::operator=(PolkadotBlock&& rhs) noexcept = default;
PolkadotBlock PolkadotBlock::Clone() const {
  PolkadotBlock out;
  out.jsonrpc = jsonrpc;
  out.id = id;
  if (result) {
    out.result = result->Clone();
  }
  if (error) {
    out.error = error->Clone();
  }
  return out;
}

// static
bool PolkadotBlock::Populate(
    const base::DictValue& dict, PolkadotBlock& out) {
  const base::Value* jsonrpc_value = dict.Find("jsonrpc");
  if (!jsonrpc_value) {
    return false;
  }
  {
    auto* temp = (*jsonrpc_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.jsonrpc = *temp;
  }

  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* result_value = dict.Find("result");
  if (result_value && !result_value->is_none()) {
    {
      if (!(*result_value).is_dict()) {
        return false;
      }
      else {
        ChainBlock temp;
        if (!ChainBlock::Populate((*result_value).GetDict(), temp))
          return false;
        out.result = std::move(temp);
      }
    }
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value && !error_value->is_none()) {
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
bool PolkadotBlock::Populate(
    const base::Value& value, PolkadotBlock& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PolkadotBlock> PolkadotBlock::FromValue(const base::DictValue& value) {
  PolkadotBlock out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PolkadotBlock> PolkadotBlock::FromValue(const base::Value& value) {
  PolkadotBlock out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PolkadotBlock::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("jsonrpc", this->jsonrpc);

  to_value_result.Set("id", this->id);

  if (this->result) {
    to_value_result.Set("result", (this->result)->ToValue());

  }
  if (this->error) {
    to_value_result.Set("error", (this->error)->ToValue());

  }

  return to_value_result;
}


PolkadotBlockHash::PolkadotBlockHash()
: id(0) {}

PolkadotBlockHash::~PolkadotBlockHash() = default;
PolkadotBlockHash::PolkadotBlockHash(PolkadotBlockHash&& rhs) noexcept = default;
PolkadotBlockHash& PolkadotBlockHash::operator=(PolkadotBlockHash&& rhs) noexcept = default;
PolkadotBlockHash PolkadotBlockHash::Clone() const {
  PolkadotBlockHash out;
  out.jsonrpc = jsonrpc;
  out.id = id;
  out.result = result;
  if (error) {
    out.error = error->Clone();
  }
  return out;
}

// static
bool PolkadotBlockHash::Populate(
    const base::DictValue& dict, PolkadotBlockHash& out) {
  const base::Value* jsonrpc_value = dict.Find("jsonrpc");
  if (!jsonrpc_value) {
    return false;
  }
  {
    auto* temp = (*jsonrpc_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.jsonrpc = *temp;
  }

  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* result_value = dict.Find("result");
  if (result_value && !result_value->is_none()) {
    {
      auto* temp = (*result_value).GetIfString();
      if (!temp) {
        out.result = std::nullopt;
        return false;
      }
      out.result = *temp;
    }
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value && !error_value->is_none()) {
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
bool PolkadotBlockHash::Populate(
    const base::Value& value, PolkadotBlockHash& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PolkadotBlockHash> PolkadotBlockHash::FromValue(const base::DictValue& value) {
  PolkadotBlockHash out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PolkadotBlockHash> PolkadotBlockHash::FromValue(const base::Value& value) {
  PolkadotBlockHash out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PolkadotBlockHash::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("jsonrpc", this->jsonrpc);

  to_value_result.Set("id", this->id);

  if (this->result) {
    to_value_result.Set("result", *this->result);

  }
  if (this->error) {
    to_value_result.Set("error", (this->error)->ToValue());

  }

  return to_value_result;
}


RuntimeVersion::RuntimeVersion()
: spec_version(0),
transaction_version(0) {}

RuntimeVersion::~RuntimeVersion() = default;
RuntimeVersion::RuntimeVersion(RuntimeVersion&& rhs) noexcept = default;
RuntimeVersion& RuntimeVersion::operator=(RuntimeVersion&& rhs) noexcept = default;
RuntimeVersion RuntimeVersion::Clone() const {
  RuntimeVersion out;
  out.spec_version = spec_version;
  out.transaction_version = transaction_version;
  return out;
}

// static
bool RuntimeVersion::Populate(
    const base::DictValue& dict, RuntimeVersion& out) {
  const base::Value* spec_version_value = dict.Find("specVersion");
  if (!spec_version_value) {
    return false;
  }
  {
    auto temp = (*spec_version_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.spec_version = *temp;
  }

  const base::Value* transaction_version_value = dict.Find("transactionVersion");
  if (!transaction_version_value) {
    return false;
  }
  {
    auto temp = (*transaction_version_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.transaction_version = *temp;
  }

  return true;
}

// static
bool RuntimeVersion::Populate(
    const base::Value& value, RuntimeVersion& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RuntimeVersion> RuntimeVersion::FromValue(const base::DictValue& value) {
  RuntimeVersion out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RuntimeVersion> RuntimeVersion::FromValue(const base::Value& value) {
  RuntimeVersion out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue RuntimeVersion::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("specVersion", this->spec_version);

  to_value_result.Set("transactionVersion", this->transaction_version);


  return to_value_result;
}


PolkadotRuntimeVersion::PolkadotRuntimeVersion()
: id(0) {}

PolkadotRuntimeVersion::~PolkadotRuntimeVersion() = default;
PolkadotRuntimeVersion::PolkadotRuntimeVersion(PolkadotRuntimeVersion&& rhs) noexcept = default;
PolkadotRuntimeVersion& PolkadotRuntimeVersion::operator=(PolkadotRuntimeVersion&& rhs) noexcept = default;
PolkadotRuntimeVersion PolkadotRuntimeVersion::Clone() const {
  PolkadotRuntimeVersion out;
  out.jsonrpc = jsonrpc;
  out.id = id;
  if (result) {
    out.result = result->Clone();
  }
  if (error) {
    out.error = error->Clone();
  }
  return out;
}

// static
bool PolkadotRuntimeVersion::Populate(
    const base::DictValue& dict, PolkadotRuntimeVersion& out) {
  const base::Value* jsonrpc_value = dict.Find("jsonrpc");
  if (!jsonrpc_value) {
    return false;
  }
  {
    auto* temp = (*jsonrpc_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.jsonrpc = *temp;
  }

  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* result_value = dict.Find("result");
  if (result_value && !result_value->is_none()) {
    {
      if (!(*result_value).is_dict()) {
        return false;
      }
      else {
        RuntimeVersion temp;
        if (!RuntimeVersion::Populate((*result_value).GetDict(), temp))
          return false;
        out.result = std::move(temp);
      }
    }
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value && !error_value->is_none()) {
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
bool PolkadotRuntimeVersion::Populate(
    const base::Value& value, PolkadotRuntimeVersion& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PolkadotRuntimeVersion> PolkadotRuntimeVersion::FromValue(const base::DictValue& value) {
  PolkadotRuntimeVersion out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PolkadotRuntimeVersion> PolkadotRuntimeVersion::FromValue(const base::Value& value) {
  PolkadotRuntimeVersion out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PolkadotRuntimeVersion::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("jsonrpc", this->jsonrpc);

  to_value_result.Set("id", this->id);

  if (this->result) {
    to_value_result.Set("result", (this->result)->ToValue());

  }
  if (this->error) {
    to_value_result.Set("error", (this->error)->ToValue());

  }

  return to_value_result;
}


PolkadotMetadataResponse::PolkadotMetadataResponse()
: id(0) {}

PolkadotMetadataResponse::~PolkadotMetadataResponse() = default;
PolkadotMetadataResponse::PolkadotMetadataResponse(PolkadotMetadataResponse&& rhs) noexcept = default;
PolkadotMetadataResponse& PolkadotMetadataResponse::operator=(PolkadotMetadataResponse&& rhs) noexcept = default;
PolkadotMetadataResponse PolkadotMetadataResponse::Clone() const {
  PolkadotMetadataResponse out;
  out.jsonrpc = jsonrpc;
  out.id = id;
  out.result = result;
  if (error) {
    out.error = error->Clone();
  }
  return out;
}

// static
bool PolkadotMetadataResponse::Populate(
    const base::DictValue& dict, PolkadotMetadataResponse& out) {
  const base::Value* jsonrpc_value = dict.Find("jsonrpc");
  if (!jsonrpc_value) {
    return false;
  }
  {
    auto* temp = (*jsonrpc_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.jsonrpc = *temp;
  }

  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* result_value = dict.Find("result");
  if (result_value && !result_value->is_none()) {
    {
      auto* temp = (*result_value).GetIfString();
      if (!temp) {
        out.result = std::nullopt;
        return false;
      }
      out.result = *temp;
    }
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value && !error_value->is_none()) {
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
bool PolkadotMetadataResponse::Populate(
    const base::Value& value, PolkadotMetadataResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PolkadotMetadataResponse> PolkadotMetadataResponse::FromValue(const base::DictValue& value) {
  PolkadotMetadataResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PolkadotMetadataResponse> PolkadotMetadataResponse::FromValue(const base::Value& value) {
  PolkadotMetadataResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PolkadotMetadataResponse::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("jsonrpc", this->jsonrpc);

  to_value_result.Set("id", this->id);

  if (this->result) {
    to_value_result.Set("result", *this->result);

  }
  if (this->error) {
    to_value_result.Set("error", (this->error)->ToValue());

  }

  return to_value_result;
}


SystemProperties::TokenDecimals::TokenDecimals()
 {}

SystemProperties::TokenDecimals::~TokenDecimals() = default;
SystemProperties::TokenDecimals::TokenDecimals(TokenDecimals&& rhs) noexcept = default;
SystemProperties::TokenDecimals& SystemProperties::TokenDecimals::operator=(TokenDecimals&& rhs) noexcept = default;
SystemProperties::TokenDecimals SystemProperties::TokenDecimals::Clone() const {
  TokenDecimals out;
  out.as_integer = as_integer;
  out.as_integers = as_integers;
  return out;
}

// static
bool SystemProperties::TokenDecimals::Populate(
    const base::Value& value, TokenDecimals& out) {
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_integers)) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

// static
std::optional<SystemProperties::TokenDecimals> SystemProperties::TokenDecimals::FromValue(const base::Value& value) {
  TokenDecimals out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value SystemProperties::TokenDecimals::ToValue() const {
  base::Value result;
  if (as_integer) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for token_decimals";
    result = base::Value(*as_integer);

  }
  if (as_integers) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for token_decimals";
    result = base::Value(json_schema_compiler::util::CreateValueFromArray(*as_integers));

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for token_decimals";
  return result;
}


SystemProperties::TokenSymbol::TokenSymbol()
 {}

SystemProperties::TokenSymbol::~TokenSymbol() = default;
SystemProperties::TokenSymbol::TokenSymbol(TokenSymbol&& rhs) noexcept = default;
SystemProperties::TokenSymbol& SystemProperties::TokenSymbol::operator=(TokenSymbol&& rhs) noexcept = default;
SystemProperties::TokenSymbol SystemProperties::TokenSymbol::Clone() const {
  TokenSymbol out;
  out.as_string = as_string;
  out.as_strings = as_strings;
  return out;
}

// static
bool SystemProperties::TokenSymbol::Populate(
    const base::Value& value, TokenSymbol& out) {
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = std::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_strings)) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

// static
std::optional<SystemProperties::TokenSymbol> SystemProperties::TokenSymbol::FromValue(const base::Value& value) {
  TokenSymbol out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value SystemProperties::TokenSymbol::ToValue() const {
  base::Value result;
  if (as_string) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for token_symbol";
    result = base::Value(*as_string);

  }
  if (as_strings) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for token_symbol";
    result = base::Value(json_schema_compiler::util::CreateValueFromArray(*as_strings));

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for token_symbol";
  return result;
}



SystemProperties::SystemProperties()
 {}

SystemProperties::~SystemProperties() = default;
SystemProperties::SystemProperties(SystemProperties&& rhs) noexcept = default;
SystemProperties& SystemProperties::operator=(SystemProperties&& rhs) noexcept = default;
SystemProperties SystemProperties::Clone() const {
  SystemProperties out;
  out.ss58_format = ss58_format;
  out.token_decimals = token_decimals.Clone();
  out.token_symbol = token_symbol.Clone();
  return out;
}

// static
bool SystemProperties::Populate(
    const base::DictValue& dict, SystemProperties& out) {
  const base::Value* ss58_format_value = dict.Find("ss58Format");
  if (ss58_format_value && !ss58_format_value->is_none()) {
    {
      auto temp = (*ss58_format_value).GetIfInt();
      if (!temp.has_value()) {
        out.ss58_format = std::nullopt;
        return false;
      }
      out.ss58_format = *temp;
    }
  }

  const base::Value* token_decimals_value = dict.Find("tokenDecimals");
  if (!token_decimals_value) {
    return false;
  }
  {
    if (!TokenDecimals::Populate((*token_decimals_value), out.token_decimals))
      return false;
  }

  const base::Value* token_symbol_value = dict.Find("tokenSymbol");
  if (!token_symbol_value) {
    return false;
  }
  {
    if (!TokenSymbol::Populate((*token_symbol_value), out.token_symbol))
      return false;
  }

  return true;
}

// static
bool SystemProperties::Populate(
    const base::Value& value, SystemProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SystemProperties> SystemProperties::FromValue(const base::DictValue& value) {
  SystemProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SystemProperties> SystemProperties::FromValue(const base::Value& value) {
  SystemProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue SystemProperties::ToValue() const {
  base::DictValue to_value_result;

  if (this->ss58_format) {
    to_value_result.Set("ss58Format", *this->ss58_format);

  }
  to_value_result.Set("tokenDecimals", (this->token_decimals).ToValue());

  to_value_result.Set("tokenSymbol", (this->token_symbol).ToValue());


  return to_value_result;
}


PolkadotSystemProperties::PolkadotSystemProperties()
: id(0) {}

PolkadotSystemProperties::~PolkadotSystemProperties() = default;
PolkadotSystemProperties::PolkadotSystemProperties(PolkadotSystemProperties&& rhs) noexcept = default;
PolkadotSystemProperties& PolkadotSystemProperties::operator=(PolkadotSystemProperties&& rhs) noexcept = default;
PolkadotSystemProperties PolkadotSystemProperties::Clone() const {
  PolkadotSystemProperties out;
  out.jsonrpc = jsonrpc;
  out.id = id;
  if (result) {
    out.result = result->Clone();
  }
  if (error) {
    out.error = error->Clone();
  }
  return out;
}

// static
bool PolkadotSystemProperties::Populate(
    const base::DictValue& dict, PolkadotSystemProperties& out) {
  const base::Value* jsonrpc_value = dict.Find("jsonrpc");
  if (!jsonrpc_value) {
    return false;
  }
  {
    auto* temp = (*jsonrpc_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.jsonrpc = *temp;
  }

  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* result_value = dict.Find("result");
  if (result_value && !result_value->is_none()) {
    {
      if (!(*result_value).is_dict()) {
        return false;
      }
      else {
        SystemProperties temp;
        if (!SystemProperties::Populate((*result_value).GetDict(), temp))
          return false;
        out.result = std::move(temp);
      }
    }
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value && !error_value->is_none()) {
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
bool PolkadotSystemProperties::Populate(
    const base::Value& value, PolkadotSystemProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PolkadotSystemProperties> PolkadotSystemProperties::FromValue(const base::DictValue& value) {
  PolkadotSystemProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PolkadotSystemProperties> PolkadotSystemProperties::FromValue(const base::Value& value) {
  PolkadotSystemProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PolkadotSystemProperties::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("jsonrpc", this->jsonrpc);

  to_value_result.Set("id", this->id);

  if (this->result) {
    to_value_result.Set("result", (this->result)->ToValue());

  }
  if (this->error) {
    to_value_result.Set("error", (this->error)->ToValue());

  }

  return to_value_result;
}


PolkadotSubmitExtrinsic::PolkadotSubmitExtrinsic()
: id(0) {}

PolkadotSubmitExtrinsic::~PolkadotSubmitExtrinsic() = default;
PolkadotSubmitExtrinsic::PolkadotSubmitExtrinsic(PolkadotSubmitExtrinsic&& rhs) noexcept = default;
PolkadotSubmitExtrinsic& PolkadotSubmitExtrinsic::operator=(PolkadotSubmitExtrinsic&& rhs) noexcept = default;
PolkadotSubmitExtrinsic PolkadotSubmitExtrinsic::Clone() const {
  PolkadotSubmitExtrinsic out;
  out.jsonrpc = jsonrpc;
  out.id = id;
  out.result = result;
  if (error) {
    out.error = error->Clone();
  }
  return out;
}

// static
bool PolkadotSubmitExtrinsic::Populate(
    const base::DictValue& dict, PolkadotSubmitExtrinsic& out) {
  const base::Value* jsonrpc_value = dict.Find("jsonrpc");
  if (!jsonrpc_value) {
    return false;
  }
  {
    auto* temp = (*jsonrpc_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.jsonrpc = *temp;
  }

  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* result_value = dict.Find("result");
  if (result_value && !result_value->is_none()) {
    {
      auto* temp = (*result_value).GetIfString();
      if (!temp) {
        out.result = std::nullopt;
        return false;
      }
      out.result = *temp;
    }
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value && !error_value->is_none()) {
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
bool PolkadotSubmitExtrinsic::Populate(
    const base::Value& value, PolkadotSubmitExtrinsic& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PolkadotSubmitExtrinsic> PolkadotSubmitExtrinsic::FromValue(const base::DictValue& value) {
  PolkadotSubmitExtrinsic out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PolkadotSubmitExtrinsic> PolkadotSubmitExtrinsic::FromValue(const base::Value& value) {
  PolkadotSubmitExtrinsic out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PolkadotSubmitExtrinsic::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("jsonrpc", this->jsonrpc);

  to_value_result.Set("id", this->id);

  if (this->result) {
    to_value_result.Set("result", *this->result);

  }
  if (this->error) {
    to_value_result.Set("error", (this->error)->ToValue());

  }

  return to_value_result;
}


PolkadotPaymentInfo::PolkadotPaymentInfo()
: id(0) {}

PolkadotPaymentInfo::~PolkadotPaymentInfo() = default;
PolkadotPaymentInfo::PolkadotPaymentInfo(PolkadotPaymentInfo&& rhs) noexcept = default;
PolkadotPaymentInfo& PolkadotPaymentInfo::operator=(PolkadotPaymentInfo&& rhs) noexcept = default;
PolkadotPaymentInfo PolkadotPaymentInfo::Clone() const {
  PolkadotPaymentInfo out;
  out.jsonrpc = jsonrpc;
  out.id = id;
  out.result = result;
  if (error) {
    out.error = error->Clone();
  }
  return out;
}

// static
bool PolkadotPaymentInfo::Populate(
    const base::DictValue& dict, PolkadotPaymentInfo& out) {
  const base::Value* jsonrpc_value = dict.Find("jsonrpc");
  if (!jsonrpc_value) {
    return false;
  }
  {
    auto* temp = (*jsonrpc_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.jsonrpc = *temp;
  }

  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* result_value = dict.Find("result");
  if (result_value && !result_value->is_none()) {
    {
      auto* temp = (*result_value).GetIfString();
      if (!temp) {
        out.result = std::nullopt;
        return false;
      }
      out.result = *temp;
    }
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value && !error_value->is_none()) {
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
bool PolkadotPaymentInfo::Populate(
    const base::Value& value, PolkadotPaymentInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PolkadotPaymentInfo> PolkadotPaymentInfo::FromValue(const base::DictValue& value) {
  PolkadotPaymentInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PolkadotPaymentInfo> PolkadotPaymentInfo::FromValue(const base::Value& value) {
  PolkadotPaymentInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PolkadotPaymentInfo::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("jsonrpc", this->jsonrpc);

  to_value_result.Set("id", this->id);

  if (this->result) {
    to_value_result.Set("result", *this->result);

  }
  if (this->error) {
    to_value_result.Set("error", (this->error)->ToValue());

  }

  return to_value_result;
}


PolkadotEvents::PolkadotEvents()
: id(0) {}

PolkadotEvents::~PolkadotEvents() = default;
PolkadotEvents::PolkadotEvents(PolkadotEvents&& rhs) noexcept = default;
PolkadotEvents& PolkadotEvents::operator=(PolkadotEvents&& rhs) noexcept = default;
PolkadotEvents PolkadotEvents::Clone() const {
  PolkadotEvents out;
  out.jsonrpc = jsonrpc;
  out.id = id;
  out.result = result;
  if (error) {
    out.error = error->Clone();
  }
  return out;
}

// static
bool PolkadotEvents::Populate(
    const base::DictValue& dict, PolkadotEvents& out) {
  const base::Value* jsonrpc_value = dict.Find("jsonrpc");
  if (!jsonrpc_value) {
    return false;
  }
  {
    auto* temp = (*jsonrpc_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.jsonrpc = *temp;
  }

  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* result_value = dict.Find("result");
  if (result_value && !result_value->is_none()) {
    {
      auto* temp = (*result_value).GetIfString();
      if (!temp) {
        out.result = std::nullopt;
        return false;
      }
      out.result = *temp;
    }
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value && !error_value->is_none()) {
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
bool PolkadotEvents::Populate(
    const base::Value& value, PolkadotEvents& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PolkadotEvents> PolkadotEvents::FromValue(const base::DictValue& value) {
  PolkadotEvents out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PolkadotEvents> PolkadotEvents::FromValue(const base::Value& value) {
  PolkadotEvents out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PolkadotEvents::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("jsonrpc", this->jsonrpc);

  to_value_result.Set("id", this->id);

  if (this->result) {
    to_value_result.Set("result", *this->result);

  }
  if (this->error) {
    to_value_result.Set("error", (this->error)->ToValue());

  }

  return to_value_result;
}



}  // namespace polkadot_substrate_rpc_responses
}  // namespace brave_wallet

