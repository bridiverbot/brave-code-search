// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_wallet/browser/swap_responses.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_wallet/browser/swap_responses.idl --root=../../ --destdir=gen --namespace=brave_wallet::%(namespace)s --generator=cpp --include-rules=

#include "brave/components/brave_wallet/browser/swap_responses.h"

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
namespace swap_responses {
//
// Types
//

ZeroExFee::ZeroExFee()
 {}

ZeroExFee::~ZeroExFee() = default;
ZeroExFee::ZeroExFee(ZeroExFee&& rhs) noexcept = default;
ZeroExFee& ZeroExFee::operator=(ZeroExFee&& rhs) noexcept = default;
ZeroExFee ZeroExFee::Clone() const {
  ZeroExFee out;
  out.amount = amount;
  out.token = token;
  out.type = type;
  return out;
}

// static
bool ZeroExFee::Populate(
    const base::DictValue& dict, ZeroExFee& out) {
  const base::Value* amount_value = dict.Find("amount");
  if (!amount_value) {
    return false;
  }
  {
    auto* temp = (*amount_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.amount = *temp;
  }

  const base::Value* token_value = dict.Find("token");
  if (!token_value) {
    return false;
  }
  {
    auto* temp = (*token_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.token = *temp;
  }

  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    auto* temp = (*type_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.type = *temp;
  }

  return true;
}

// static
bool ZeroExFee::Populate(
    const base::Value& value, ZeroExFee& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ZeroExFee> ZeroExFee::FromValue(const base::DictValue& value) {
  ZeroExFee out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ZeroExFee> ZeroExFee::FromValue(const base::Value& value) {
  ZeroExFee out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ZeroExFee::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("amount", this->amount);

  to_value_result.Set("token", this->token);

  to_value_result.Set("type", this->type);


  return to_value_result;
}


ZeroExFees::ZeroExFees()
 {}

ZeroExFees::~ZeroExFees() = default;
ZeroExFees::ZeroExFees(ZeroExFees&& rhs) noexcept = default;
ZeroExFees& ZeroExFees::operator=(ZeroExFees&& rhs) noexcept = default;
ZeroExFees ZeroExFees::Clone() const {
  ZeroExFees out;
  out.zero_ex_fee = zero_ex_fee.Clone();
  return out;
}

// static
bool ZeroExFees::Populate(
    const base::DictValue& dict, ZeroExFees& out) {
  const base::Value* zero_ex_fee_value = dict.Find("zeroExFee");
  if (!zero_ex_fee_value) {
    return false;
  }
  {
    out.zero_ex_fee = (*zero_ex_fee_value).Clone();
  }

  return true;
}

// static
bool ZeroExFees::Populate(
    const base::Value& value, ZeroExFees& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ZeroExFees> ZeroExFees::FromValue(const base::DictValue& value) {
  ZeroExFees out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ZeroExFees> ZeroExFees::FromValue(const base::Value& value) {
  ZeroExFees out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ZeroExFees::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("zeroExFee", (this->zero_ex_fee).Clone());


  return to_value_result;
}


ZeroExTransaction::ZeroExTransaction()
 {}

ZeroExTransaction::~ZeroExTransaction() = default;
ZeroExTransaction::ZeroExTransaction(ZeroExTransaction&& rhs) noexcept = default;
ZeroExTransaction& ZeroExTransaction::operator=(ZeroExTransaction&& rhs) noexcept = default;
ZeroExTransaction ZeroExTransaction::Clone() const {
  ZeroExTransaction out;
  out.to = to;
  out.data = data;
  out.gas = gas;
  out.gas_price = gas_price;
  out.value = value;
  return out;
}

// static
bool ZeroExTransaction::Populate(
    const base::DictValue& dict, ZeroExTransaction& out) {
  const base::Value* to_value = dict.Find("to");
  if (!to_value) {
    return false;
  }
  {
    auto* temp = (*to_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.to = *temp;
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

  const base::Value* gas_value = dict.Find("gas");
  if (!gas_value) {
    return false;
  }
  {
    auto* temp = (*gas_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.gas = *temp;
  }

  const base::Value* gas_price_value = dict.Find("gasPrice");
  if (!gas_price_value) {
    return false;
  }
  {
    auto* temp = (*gas_price_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.gas_price = *temp;
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

  return true;
}

// static
bool ZeroExTransaction::Populate(
    const base::Value& value, ZeroExTransaction& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ZeroExTransaction> ZeroExTransaction::FromValue(const base::DictValue& value) {
  ZeroExTransaction out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ZeroExTransaction> ZeroExTransaction::FromValue(const base::Value& value) {
  ZeroExTransaction out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ZeroExTransaction::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("to", this->to);

  to_value_result.Set("data", this->data);

  to_value_result.Set("gas", this->gas);

  to_value_result.Set("gasPrice", this->gas_price);

  to_value_result.Set("value", this->value);


  return to_value_result;
}


ZeroExRouteFill::ZeroExRouteFill()
 {}

ZeroExRouteFill::~ZeroExRouteFill() = default;
ZeroExRouteFill::ZeroExRouteFill(ZeroExRouteFill&& rhs) noexcept = default;
ZeroExRouteFill& ZeroExRouteFill::operator=(ZeroExRouteFill&& rhs) noexcept = default;
ZeroExRouteFill ZeroExRouteFill::Clone() const {
  ZeroExRouteFill out;
  out.from = from;
  out.to = to;
  out.source = source;
  out.proportion_bps = proportion_bps;
  return out;
}

// static
bool ZeroExRouteFill::Populate(
    const base::DictValue& dict, ZeroExRouteFill& out) {
  const base::Value* from_value = dict.Find("from");
  if (!from_value) {
    return false;
  }
  {
    auto* temp = (*from_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.from = *temp;
  }

  const base::Value* to_value = dict.Find("to");
  if (!to_value) {
    return false;
  }
  {
    auto* temp = (*to_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.to = *temp;
  }

  const base::Value* source_value = dict.Find("source");
  if (!source_value) {
    return false;
  }
  {
    auto* temp = (*source_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.source = *temp;
  }

  const base::Value* proportion_bps_value = dict.Find("proportionBps");
  if (!proportion_bps_value) {
    return false;
  }
  {
    auto* temp = (*proportion_bps_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.proportion_bps = *temp;
  }

  return true;
}

// static
bool ZeroExRouteFill::Populate(
    const base::Value& value, ZeroExRouteFill& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ZeroExRouteFill> ZeroExRouteFill::FromValue(const base::DictValue& value) {
  ZeroExRouteFill out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ZeroExRouteFill> ZeroExRouteFill::FromValue(const base::Value& value) {
  ZeroExRouteFill out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ZeroExRouteFill::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("from", this->from);

  to_value_result.Set("to", this->to);

  to_value_result.Set("source", this->source);

  to_value_result.Set("proportionBps", this->proportion_bps);


  return to_value_result;
}


ZeroExRoute::ZeroExRoute()
 {}

ZeroExRoute::~ZeroExRoute() = default;
ZeroExRoute::ZeroExRoute(ZeroExRoute&& rhs) noexcept = default;
ZeroExRoute& ZeroExRoute::operator=(ZeroExRoute&& rhs) noexcept = default;
ZeroExRoute ZeroExRoute::Clone() const {
  ZeroExRoute out;
  out.fills.reserve(fills.size());
  for (const auto& element : fills) {
    json_schema_compiler::util::AppendToContainer(out.fills, element.Clone());
  }
  return out;
}

// static
bool ZeroExRoute::Populate(
    const base::DictValue& dict, ZeroExRoute& out) {
  const base::Value* fills_value = dict.Find("fills");
  if (!fills_value) {
    return false;
  }
  {
    if (!(*fills_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*fills_value).GetList(), out.fills)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool ZeroExRoute::Populate(
    const base::Value& value, ZeroExRoute& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ZeroExRoute> ZeroExRoute::FromValue(const base::DictValue& value) {
  ZeroExRoute out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ZeroExRoute> ZeroExRoute::FromValue(const base::Value& value) {
  ZeroExRoute out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ZeroExRoute::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("fills", json_schema_compiler::util::CreateValueFromArray(this->fills));


  return to_value_result;
}


ZeroExQuoteResponse::ZeroExQuoteResponse()
: liquidity_available(false) {}

ZeroExQuoteResponse::~ZeroExQuoteResponse() = default;
ZeroExQuoteResponse::ZeroExQuoteResponse(ZeroExQuoteResponse&& rhs) noexcept = default;
ZeroExQuoteResponse& ZeroExQuoteResponse::operator=(ZeroExQuoteResponse&& rhs) noexcept = default;
ZeroExQuoteResponse ZeroExQuoteResponse::Clone() const {
  ZeroExQuoteResponse out;
  out.block_number = block_number;
  out.buy_amount = buy_amount;
  out.buy_token = buy_token;
  if (fees) {
    out.fees = fees->Clone();
  }
  out.gas = gas;
  out.gas_price = gas_price;
  out.liquidity_available = liquidity_available;
  out.min_buy_amount = min_buy_amount;
  if (route) {
    out.route = route->Clone();
  }
  out.sell_amount = sell_amount;
  out.sell_token = sell_token;
  out.total_network_fee = total_network_fee;
  return out;
}

// static
bool ZeroExQuoteResponse::Populate(
    const base::DictValue& dict, ZeroExQuoteResponse& out) {
  const base::Value* block_number_value = dict.Find("blockNumber");
  if (block_number_value) {
    {
      auto* temp = (*block_number_value).GetIfString();
      if (!temp) {
        out.block_number = std::nullopt;
        return false;
      }
      out.block_number = *temp;
    }
  }

  const base::Value* buy_amount_value = dict.Find("buyAmount");
  if (buy_amount_value) {
    {
      auto* temp = (*buy_amount_value).GetIfString();
      if (!temp) {
        out.buy_amount = std::nullopt;
        return false;
      }
      out.buy_amount = *temp;
    }
  }

  const base::Value* buy_token_value = dict.Find("buyToken");
  if (buy_token_value) {
    {
      auto* temp = (*buy_token_value).GetIfString();
      if (!temp) {
        out.buy_token = std::nullopt;
        return false;
      }
      out.buy_token = *temp;
    }
  }

  const base::Value* fees_value = dict.Find("fees");
  if (fees_value) {
    {
      if (!(*fees_value).is_dict()) {
        return false;
      }
      else {
        ZeroExFees temp;
        if (!ZeroExFees::Populate((*fees_value).GetDict(), temp))
          return false;
        out.fees = std::move(temp);
      }
    }
  }

  const base::Value* gas_value = dict.Find("gas");
  if (gas_value) {
    {
      auto* temp = (*gas_value).GetIfString();
      if (!temp) {
        out.gas = std::nullopt;
        return false;
      }
      out.gas = *temp;
    }
  }

  const base::Value* gas_price_value = dict.Find("gasPrice");
  if (gas_price_value) {
    {
      auto* temp = (*gas_price_value).GetIfString();
      if (!temp) {
        out.gas_price = std::nullopt;
        return false;
      }
      out.gas_price = *temp;
    }
  }

  const base::Value* liquidity_available_value = dict.Find("liquidityAvailable");
  if (!liquidity_available_value) {
    return false;
  }
  {
    auto temp = (*liquidity_available_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.liquidity_available = *temp;
  }

  const base::Value* min_buy_amount_value = dict.Find("minBuyAmount");
  if (min_buy_amount_value) {
    {
      auto* temp = (*min_buy_amount_value).GetIfString();
      if (!temp) {
        out.min_buy_amount = std::nullopt;
        return false;
      }
      out.min_buy_amount = *temp;
    }
  }

  const base::Value* route_value = dict.Find("route");
  if (route_value) {
    {
      if (!(*route_value).is_dict()) {
        return false;
      }
      else {
        ZeroExRoute temp;
        if (!ZeroExRoute::Populate((*route_value).GetDict(), temp))
          return false;
        out.route = std::move(temp);
      }
    }
  }

  const base::Value* sell_amount_value = dict.Find("sellAmount");
  if (sell_amount_value) {
    {
      auto* temp = (*sell_amount_value).GetIfString();
      if (!temp) {
        out.sell_amount = std::nullopt;
        return false;
      }
      out.sell_amount = *temp;
    }
  }

  const base::Value* sell_token_value = dict.Find("sellToken");
  if (sell_token_value) {
    {
      auto* temp = (*sell_token_value).GetIfString();
      if (!temp) {
        out.sell_token = std::nullopt;
        return false;
      }
      out.sell_token = *temp;
    }
  }

  const base::Value* total_network_fee_value = dict.Find("totalNetworkFee");
  if (total_network_fee_value) {
    {
      auto* temp = (*total_network_fee_value).GetIfString();
      if (!temp) {
        out.total_network_fee = std::nullopt;
        return false;
      }
      out.total_network_fee = *temp;
    }
  }

  return true;
}

// static
bool ZeroExQuoteResponse::Populate(
    const base::Value& value, ZeroExQuoteResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ZeroExQuoteResponse> ZeroExQuoteResponse::FromValue(const base::DictValue& value) {
  ZeroExQuoteResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ZeroExQuoteResponse> ZeroExQuoteResponse::FromValue(const base::Value& value) {
  ZeroExQuoteResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ZeroExQuoteResponse::ToValue() const {
  base::DictValue to_value_result;

  if (this->block_number) {
    to_value_result.Set("blockNumber", *this->block_number);

  }
  if (this->buy_amount) {
    to_value_result.Set("buyAmount", *this->buy_amount);

  }
  if (this->buy_token) {
    to_value_result.Set("buyToken", *this->buy_token);

  }
  if (this->fees) {
    to_value_result.Set("fees", (this->fees)->ToValue());

  }
  if (this->gas) {
    to_value_result.Set("gas", *this->gas);

  }
  if (this->gas_price) {
    to_value_result.Set("gasPrice", *this->gas_price);

  }
  to_value_result.Set("liquidityAvailable", this->liquidity_available);

  if (this->min_buy_amount) {
    to_value_result.Set("minBuyAmount", *this->min_buy_amount);

  }
  if (this->route) {
    to_value_result.Set("route", (this->route)->ToValue());

  }
  if (this->sell_amount) {
    to_value_result.Set("sellAmount", *this->sell_amount);

  }
  if (this->sell_token) {
    to_value_result.Set("sellToken", *this->sell_token);

  }
  if (this->total_network_fee) {
    to_value_result.Set("totalNetworkFee", *this->total_network_fee);

  }

  return to_value_result;
}


ZeroExTransactionResponse::ZeroExTransactionResponse()
 {}

ZeroExTransactionResponse::~ZeroExTransactionResponse() = default;
ZeroExTransactionResponse::ZeroExTransactionResponse(ZeroExTransactionResponse&& rhs) noexcept = default;
ZeroExTransactionResponse& ZeroExTransactionResponse::operator=(ZeroExTransactionResponse&& rhs) noexcept = default;
ZeroExTransactionResponse ZeroExTransactionResponse::Clone() const {
  ZeroExTransactionResponse out;
  out.transaction = transaction.Clone();
  return out;
}

// static
bool ZeroExTransactionResponse::Populate(
    const base::DictValue& dict, ZeroExTransactionResponse& out) {
  const base::Value* transaction_value = dict.Find("transaction");
  if (!transaction_value) {
    return false;
  }
  {
    if (!(*transaction_value).is_dict()) {
      return false;
    }
    if (!ZeroExTransaction::Populate((*transaction_value).GetDict(), out.transaction)) {
      return false;
    }
  }

  return true;
}

// static
bool ZeroExTransactionResponse::Populate(
    const base::Value& value, ZeroExTransactionResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ZeroExTransactionResponse> ZeroExTransactionResponse::FromValue(const base::DictValue& value) {
  ZeroExTransactionResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ZeroExTransactionResponse> ZeroExTransactionResponse::FromValue(const base::Value& value) {
  ZeroExTransactionResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ZeroExTransactionResponse::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("transaction", (this->transaction).ToValue());


  return to_value_result;
}


ZeroExErrorResponse::ZeroExErrorResponse()
 {}

ZeroExErrorResponse::~ZeroExErrorResponse() = default;
ZeroExErrorResponse::ZeroExErrorResponse(ZeroExErrorResponse&& rhs) noexcept = default;
ZeroExErrorResponse& ZeroExErrorResponse::operator=(ZeroExErrorResponse&& rhs) noexcept = default;
ZeroExErrorResponse ZeroExErrorResponse::Clone() const {
  ZeroExErrorResponse out;
  out.name = name;
  out.message = message;
  return out;
}

// static
bool ZeroExErrorResponse::Populate(
    const base::DictValue& dict, ZeroExErrorResponse& out) {
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
bool ZeroExErrorResponse::Populate(
    const base::Value& value, ZeroExErrorResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ZeroExErrorResponse> ZeroExErrorResponse::FromValue(const base::DictValue& value) {
  ZeroExErrorResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ZeroExErrorResponse> ZeroExErrorResponse::FromValue(const base::Value& value) {
  ZeroExErrorResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ZeroExErrorResponse::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("name", this->name);

  to_value_result.Set("message", this->message);


  return to_value_result;
}


JupiterPlatformFee::JupiterPlatformFee()
 {}

JupiterPlatformFee::~JupiterPlatformFee() = default;
JupiterPlatformFee::JupiterPlatformFee(JupiterPlatformFee&& rhs) noexcept = default;
JupiterPlatformFee& JupiterPlatformFee::operator=(JupiterPlatformFee&& rhs) noexcept = default;
JupiterPlatformFee JupiterPlatformFee::Clone() const {
  JupiterPlatformFee out;
  out.amount = amount;
  out.fee_bps = fee_bps;
  return out;
}

// static
bool JupiterPlatformFee::Populate(
    const base::DictValue& dict, JupiterPlatformFee& out) {
  const base::Value* amount_value = dict.Find("amount");
  if (!amount_value) {
    return false;
  }
  {
    auto* temp = (*amount_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.amount = *temp;
  }

  const base::Value* fee_bps_value = dict.Find("feeBps");
  if (!fee_bps_value) {
    return false;
  }
  {
    auto* temp = (*fee_bps_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.fee_bps = *temp;
  }

  return true;
}

// static
bool JupiterPlatformFee::Populate(
    const base::Value& value, JupiterPlatformFee& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<JupiterPlatformFee> JupiterPlatformFee::FromValue(const base::DictValue& value) {
  JupiterPlatformFee out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<JupiterPlatformFee> JupiterPlatformFee::FromValue(const base::Value& value) {
  JupiterPlatformFee out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue JupiterPlatformFee::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("amount", this->amount);

  to_value_result.Set("feeBps", this->fee_bps);


  return to_value_result;
}


JupiterSwapInfo::JupiterSwapInfo()
 {}

JupiterSwapInfo::~JupiterSwapInfo() = default;
JupiterSwapInfo::JupiterSwapInfo(JupiterSwapInfo&& rhs) noexcept = default;
JupiterSwapInfo& JupiterSwapInfo::operator=(JupiterSwapInfo&& rhs) noexcept = default;
JupiterSwapInfo JupiterSwapInfo::Clone() const {
  JupiterSwapInfo out;
  out.amm_key = amm_key;
  out.label = label;
  out.input_mint = input_mint;
  out.output_mint = output_mint;
  out.in_amount = in_amount;
  out.out_amount = out_amount;
  out.fee_amount = fee_amount;
  out.fee_mint = fee_mint;
  return out;
}

// static
bool JupiterSwapInfo::Populate(
    const base::DictValue& dict, JupiterSwapInfo& out) {
  const base::Value* amm_key_value = dict.Find("ammKey");
  if (!amm_key_value) {
    return false;
  }
  {
    auto* temp = (*amm_key_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.amm_key = *temp;
  }

  const base::Value* label_value = dict.Find("label");
  if (!label_value) {
    return false;
  }
  {
    auto* temp = (*label_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.label = *temp;
  }

  const base::Value* input_mint_value = dict.Find("inputMint");
  if (!input_mint_value) {
    return false;
  }
  {
    auto* temp = (*input_mint_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.input_mint = *temp;
  }

  const base::Value* output_mint_value = dict.Find("outputMint");
  if (!output_mint_value) {
    return false;
  }
  {
    auto* temp = (*output_mint_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.output_mint = *temp;
  }

  const base::Value* in_amount_value = dict.Find("inAmount");
  if (!in_amount_value) {
    return false;
  }
  {
    auto* temp = (*in_amount_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.in_amount = *temp;
  }

  const base::Value* out_amount_value = dict.Find("outAmount");
  if (!out_amount_value) {
    return false;
  }
  {
    auto* temp = (*out_amount_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.out_amount = *temp;
  }

  const base::Value* fee_amount_value = dict.Find("feeAmount");
  if (fee_amount_value) {
    {
      auto* temp = (*fee_amount_value).GetIfString();
      if (!temp) {
        out.fee_amount = std::nullopt;
        return false;
      }
      out.fee_amount = *temp;
    }
  }

  const base::Value* fee_mint_value = dict.Find("feeMint");
  if (fee_mint_value) {
    {
      auto* temp = (*fee_mint_value).GetIfString();
      if (!temp) {
        out.fee_mint = std::nullopt;
        return false;
      }
      out.fee_mint = *temp;
    }
  }

  return true;
}

// static
bool JupiterSwapInfo::Populate(
    const base::Value& value, JupiterSwapInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<JupiterSwapInfo> JupiterSwapInfo::FromValue(const base::DictValue& value) {
  JupiterSwapInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<JupiterSwapInfo> JupiterSwapInfo::FromValue(const base::Value& value) {
  JupiterSwapInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue JupiterSwapInfo::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("ammKey", this->amm_key);

  to_value_result.Set("label", this->label);

  to_value_result.Set("inputMint", this->input_mint);

  to_value_result.Set("outputMint", this->output_mint);

  to_value_result.Set("inAmount", this->in_amount);

  to_value_result.Set("outAmount", this->out_amount);

  if (this->fee_amount) {
    to_value_result.Set("feeAmount", *this->fee_amount);

  }
  if (this->fee_mint) {
    to_value_result.Set("feeMint", *this->fee_mint);

  }

  return to_value_result;
}


JupiterRouteStep::JupiterRouteStep()
 {}

JupiterRouteStep::~JupiterRouteStep() = default;
JupiterRouteStep::JupiterRouteStep(JupiterRouteStep&& rhs) noexcept = default;
JupiterRouteStep& JupiterRouteStep::operator=(JupiterRouteStep&& rhs) noexcept = default;
JupiterRouteStep JupiterRouteStep::Clone() const {
  JupiterRouteStep out;
  out.swap_info = swap_info.Clone();
  out.percent = percent;
  return out;
}

// static
bool JupiterRouteStep::Populate(
    const base::DictValue& dict, JupiterRouteStep& out) {
  const base::Value* swap_info_value = dict.Find("swapInfo");
  if (!swap_info_value) {
    return false;
  }
  {
    if (!(*swap_info_value).is_dict()) {
      return false;
    }
    if (!JupiterSwapInfo::Populate((*swap_info_value).GetDict(), out.swap_info)) {
      return false;
    }
  }

  const base::Value* percent_value = dict.Find("percent");
  if (!percent_value) {
    return false;
  }
  {
    auto* temp = (*percent_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.percent = *temp;
  }

  return true;
}

// static
bool JupiterRouteStep::Populate(
    const base::Value& value, JupiterRouteStep& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<JupiterRouteStep> JupiterRouteStep::FromValue(const base::DictValue& value) {
  JupiterRouteStep out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<JupiterRouteStep> JupiterRouteStep::FromValue(const base::Value& value) {
  JupiterRouteStep out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue JupiterRouteStep::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("swapInfo", (this->swap_info).ToValue());

  to_value_result.Set("percent", this->percent);


  return to_value_result;
}


JupiterQuoteResponse::JupiterQuoteResponse()
 {}

JupiterQuoteResponse::~JupiterQuoteResponse() = default;
JupiterQuoteResponse::JupiterQuoteResponse(JupiterQuoteResponse&& rhs) noexcept = default;
JupiterQuoteResponse& JupiterQuoteResponse::operator=(JupiterQuoteResponse&& rhs) noexcept = default;
JupiterQuoteResponse JupiterQuoteResponse::Clone() const {
  JupiterQuoteResponse out;
  out.input_mint = input_mint;
  out.in_amount = in_amount;
  out.output_mint = output_mint;
  out.out_amount = out_amount;
  out.other_amount_threshold = other_amount_threshold;
  out.swap_mode = swap_mode;
  out.slippage_bps = slippage_bps;
  out.platform_fee = platform_fee.Clone();
  out.price_impact_pct = price_impact_pct;
  out.route_plan.reserve(route_plan.size());
  for (const auto& element : route_plan) {
    json_schema_compiler::util::AppendToContainer(out.route_plan, element.Clone());
  }
  return out;
}

// static
bool JupiterQuoteResponse::Populate(
    const base::DictValue& dict, JupiterQuoteResponse& out) {
  const base::Value* input_mint_value = dict.Find("inputMint");
  if (!input_mint_value) {
    return false;
  }
  {
    auto* temp = (*input_mint_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.input_mint = *temp;
  }

  const base::Value* in_amount_value = dict.Find("inAmount");
  if (!in_amount_value) {
    return false;
  }
  {
    auto* temp = (*in_amount_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.in_amount = *temp;
  }

  const base::Value* output_mint_value = dict.Find("outputMint");
  if (!output_mint_value) {
    return false;
  }
  {
    auto* temp = (*output_mint_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.output_mint = *temp;
  }

  const base::Value* out_amount_value = dict.Find("outAmount");
  if (!out_amount_value) {
    return false;
  }
  {
    auto* temp = (*out_amount_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.out_amount = *temp;
  }

  const base::Value* other_amount_threshold_value = dict.Find("otherAmountThreshold");
  if (!other_amount_threshold_value) {
    return false;
  }
  {
    auto* temp = (*other_amount_threshold_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.other_amount_threshold = *temp;
  }

  const base::Value* swap_mode_value = dict.Find("swapMode");
  if (!swap_mode_value) {
    return false;
  }
  {
    auto* temp = (*swap_mode_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.swap_mode = *temp;
  }

  const base::Value* slippage_bps_value = dict.Find("slippageBps");
  if (!slippage_bps_value) {
    return false;
  }
  {
    auto* temp = (*slippage_bps_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.slippage_bps = *temp;
  }

  const base::Value* platform_fee_value = dict.Find("platformFee");
  if (!platform_fee_value) {
    return false;
  }
  {
    out.platform_fee = (*platform_fee_value).Clone();
  }

  const base::Value* price_impact_pct_value = dict.Find("priceImpactPct");
  if (!price_impact_pct_value) {
    return false;
  }
  {
    auto* temp = (*price_impact_pct_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.price_impact_pct = *temp;
  }

  const base::Value* route_plan_value = dict.Find("routePlan");
  if (!route_plan_value) {
    return false;
  }
  {
    if (!(*route_plan_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*route_plan_value).GetList(), out.route_plan)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool JupiterQuoteResponse::Populate(
    const base::Value& value, JupiterQuoteResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<JupiterQuoteResponse> JupiterQuoteResponse::FromValue(const base::DictValue& value) {
  JupiterQuoteResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<JupiterQuoteResponse> JupiterQuoteResponse::FromValue(const base::Value& value) {
  JupiterQuoteResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue JupiterQuoteResponse::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("inputMint", this->input_mint);

  to_value_result.Set("inAmount", this->in_amount);

  to_value_result.Set("outputMint", this->output_mint);

  to_value_result.Set("outAmount", this->out_amount);

  to_value_result.Set("otherAmountThreshold", this->other_amount_threshold);

  to_value_result.Set("swapMode", this->swap_mode);

  to_value_result.Set("slippageBps", this->slippage_bps);

  to_value_result.Set("platformFee", (this->platform_fee).Clone());

  to_value_result.Set("priceImpactPct", this->price_impact_pct);

  to_value_result.Set("routePlan", json_schema_compiler::util::CreateValueFromArray(this->route_plan));


  return to_value_result;
}


JupiterSwapTransactions::JupiterSwapTransactions()
 {}

JupiterSwapTransactions::~JupiterSwapTransactions() = default;
JupiterSwapTransactions::JupiterSwapTransactions(JupiterSwapTransactions&& rhs) noexcept = default;
JupiterSwapTransactions& JupiterSwapTransactions::operator=(JupiterSwapTransactions&& rhs) noexcept = default;
JupiterSwapTransactions JupiterSwapTransactions::Clone() const {
  JupiterSwapTransactions out;
  out.swap_transaction = swap_transaction;
  return out;
}

// static
bool JupiterSwapTransactions::Populate(
    const base::DictValue& dict, JupiterSwapTransactions& out) {
  const base::Value* swap_transaction_value = dict.Find("swapTransaction");
  if (!swap_transaction_value) {
    return false;
  }
  {
    auto* temp = (*swap_transaction_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.swap_transaction = *temp;
  }

  return true;
}

// static
bool JupiterSwapTransactions::Populate(
    const base::Value& value, JupiterSwapTransactions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<JupiterSwapTransactions> JupiterSwapTransactions::FromValue(const base::DictValue& value) {
  JupiterSwapTransactions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<JupiterSwapTransactions> JupiterSwapTransactions::FromValue(const base::Value& value) {
  JupiterSwapTransactions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue JupiterSwapTransactions::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("swapTransaction", this->swap_transaction);


  return to_value_result;
}


JupiterErrorResponse::JupiterErrorResponse()
 {}

JupiterErrorResponse::~JupiterErrorResponse() = default;
JupiterErrorResponse::JupiterErrorResponse(JupiterErrorResponse&& rhs) noexcept = default;
JupiterErrorResponse& JupiterErrorResponse::operator=(JupiterErrorResponse&& rhs) noexcept = default;
JupiterErrorResponse JupiterErrorResponse::Clone() const {
  JupiterErrorResponse out;
  out.status_code = status_code;
  out.error = error;
  out.message = message;
  return out;
}

// static
bool JupiterErrorResponse::Populate(
    const base::DictValue& dict, JupiterErrorResponse& out) {
  const base::Value* status_code_value = dict.Find("statusCode");
  if (!status_code_value) {
    return false;
  }
  {
    auto* temp = (*status_code_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.status_code = *temp;
  }

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
bool JupiterErrorResponse::Populate(
    const base::Value& value, JupiterErrorResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<JupiterErrorResponse> JupiterErrorResponse::FromValue(const base::DictValue& value) {
  JupiterErrorResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<JupiterErrorResponse> JupiterErrorResponse::FromValue(const base::Value& value) {
  JupiterErrorResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue JupiterErrorResponse::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("statusCode", this->status_code);

  to_value_result.Set("error", this->error);

  to_value_result.Set("message", this->message);


  return to_value_result;
}


const char* ToString(Gate3Provider enum_param) {
  switch (enum_param) {
    case Gate3Provider::kAuto:
      return "AUTO";
    case Gate3Provider::kNearIntents:
      return "NEAR_INTENTS";
    case Gate3Provider::kZeroEx:
      return "ZERO_EX";
    case Gate3Provider::kJupiter:
      return "JUPITER";
    case Gate3Provider::kLifi:
      return "LIFI";
    case Gate3Provider::kSquid:
      return "SQUID";
    case Gate3Provider::kNone:
      return "";
  }
  NOTREACHED();
}

Gate3Provider ParseGate3Provider(std::string_view enum_string) {
  if (enum_string == "AUTO")
    return Gate3Provider::kAuto;
  if (enum_string == "NEAR_INTENTS")
    return Gate3Provider::kNearIntents;
  if (enum_string == "ZERO_EX")
    return Gate3Provider::kZeroEx;
  if (enum_string == "JUPITER")
    return Gate3Provider::kJupiter;
  if (enum_string == "LIFI")
    return Gate3Provider::kLifi;
  if (enum_string == "SQUID")
    return Gate3Provider::kSquid;
  return Gate3Provider::kNone;
}

std::u16string GetGate3ProviderParseError(std::string_view enum_string) {
  return u"expected \"AUTO\" or \"NEAR_INTENTS\" or \"ZERO_EX\" or \"JUPITER\" or \"LIFI\" or \"SQUID\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


Gate3ChainSpec::Gate3ChainSpec()
 {}

Gate3ChainSpec::~Gate3ChainSpec() = default;
Gate3ChainSpec::Gate3ChainSpec(Gate3ChainSpec&& rhs) noexcept = default;
Gate3ChainSpec& Gate3ChainSpec::operator=(Gate3ChainSpec&& rhs) noexcept = default;
Gate3ChainSpec Gate3ChainSpec::Clone() const {
  Gate3ChainSpec out;
  out.coin = coin;
  out.chain_id = chain_id;
  return out;
}

// static
bool Gate3ChainSpec::Populate(
    const base::DictValue& dict, Gate3ChainSpec& out) {
  const base::Value* coin_value = dict.Find("coin");
  if (!coin_value) {
    return false;
  }
  {
    auto* temp = (*coin_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.coin = *temp;
  }

  const base::Value* chain_id_value = dict.Find("chainId");
  if (!chain_id_value) {
    return false;
  }
  {
    auto* temp = (*chain_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.chain_id = *temp;
  }

  return true;
}

// static
bool Gate3ChainSpec::Populate(
    const base::Value& value, Gate3ChainSpec& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Gate3ChainSpec> Gate3ChainSpec::FromValue(const base::DictValue& value) {
  Gate3ChainSpec out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Gate3ChainSpec> Gate3ChainSpec::FromValue(const base::Value& value) {
  Gate3ChainSpec out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Gate3ChainSpec::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("coin", this->coin);

  to_value_result.Set("chainId", this->chain_id);


  return to_value_result;
}


Gate3SwapEvmTransactionParams::Gate3SwapEvmTransactionParams()
 {}

Gate3SwapEvmTransactionParams::~Gate3SwapEvmTransactionParams() = default;
Gate3SwapEvmTransactionParams::Gate3SwapEvmTransactionParams(Gate3SwapEvmTransactionParams&& rhs) noexcept = default;
Gate3SwapEvmTransactionParams& Gate3SwapEvmTransactionParams::operator=(Gate3SwapEvmTransactionParams&& rhs) noexcept = default;
Gate3SwapEvmTransactionParams Gate3SwapEvmTransactionParams::Clone() const {
  Gate3SwapEvmTransactionParams out;
  out.chain = chain.Clone();
  out.from = from;
  out.to = to;
  out.value = value;
  out.data = data;
  out.gas_limit = gas_limit;
  out.gas_price = gas_price.Clone();
  return out;
}

// static
bool Gate3SwapEvmTransactionParams::Populate(
    const base::DictValue& dict, Gate3SwapEvmTransactionParams& out) {
  const base::Value* chain_value = dict.Find("chain");
  if (!chain_value) {
    return false;
  }
  {
    if (!(*chain_value).is_dict()) {
      return false;
    }
    if (!Gate3ChainSpec::Populate((*chain_value).GetDict(), out.chain)) {
      return false;
    }
  }

  const base::Value* from_value = dict.Find("from");
  if (!from_value) {
    return false;
  }
  {
    auto* temp = (*from_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.from = *temp;
  }

  const base::Value* to_value = dict.Find("to");
  if (!to_value) {
    return false;
  }
  {
    auto* temp = (*to_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.to = *temp;
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

  const base::Value* gas_limit_value = dict.Find("gasLimit");
  if (!gas_limit_value) {
    return false;
  }
  {
    auto* temp = (*gas_limit_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.gas_limit = *temp;
  }

  const base::Value* gas_price_value = dict.Find("gasPrice");
  if (!gas_price_value) {
    return false;
  }
  {
    out.gas_price = (*gas_price_value).Clone();
  }

  return true;
}

// static
bool Gate3SwapEvmTransactionParams::Populate(
    const base::Value& value, Gate3SwapEvmTransactionParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Gate3SwapEvmTransactionParams> Gate3SwapEvmTransactionParams::FromValue(const base::DictValue& value) {
  Gate3SwapEvmTransactionParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Gate3SwapEvmTransactionParams> Gate3SwapEvmTransactionParams::FromValue(const base::Value& value) {
  Gate3SwapEvmTransactionParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Gate3SwapEvmTransactionParams::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("chain", (this->chain).ToValue());

  to_value_result.Set("from", this->from);

  to_value_result.Set("to", this->to);

  to_value_result.Set("value", this->value);

  to_value_result.Set("data", this->data);

  to_value_result.Set("gasLimit", this->gas_limit);

  to_value_result.Set("gasPrice", (this->gas_price).Clone());


  return to_value_result;
}


Gate3SwapSolanaTransactionParams::Gate3SwapSolanaTransactionParams()
 {}

Gate3SwapSolanaTransactionParams::~Gate3SwapSolanaTransactionParams() = default;
Gate3SwapSolanaTransactionParams::Gate3SwapSolanaTransactionParams(Gate3SwapSolanaTransactionParams&& rhs) noexcept = default;
Gate3SwapSolanaTransactionParams& Gate3SwapSolanaTransactionParams::operator=(Gate3SwapSolanaTransactionParams&& rhs) noexcept = default;
Gate3SwapSolanaTransactionParams Gate3SwapSolanaTransactionParams::Clone() const {
  Gate3SwapSolanaTransactionParams out;
  out.chain = chain.Clone();
  out.from = from;
  out.to = to;
  out.lamports = lamports;
  out.spl_token_mint = spl_token_mint.Clone();
  out.spl_token_amount = spl_token_amount.Clone();
  out.decimals = decimals.Clone();
  out.versioned_transaction = versioned_transaction.Clone();
  out.compute_unit_limit = compute_unit_limit.Clone();
  out.compute_unit_price = compute_unit_price.Clone();
  return out;
}

// static
bool Gate3SwapSolanaTransactionParams::Populate(
    const base::DictValue& dict, Gate3SwapSolanaTransactionParams& out) {
  const base::Value* chain_value = dict.Find("chain");
  if (!chain_value) {
    return false;
  }
  {
    if (!(*chain_value).is_dict()) {
      return false;
    }
    if (!Gate3ChainSpec::Populate((*chain_value).GetDict(), out.chain)) {
      return false;
    }
  }

  const base::Value* from_value = dict.Find("from");
  if (!from_value) {
    return false;
  }
  {
    auto* temp = (*from_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.from = *temp;
  }

  const base::Value* to_value = dict.Find("to");
  if (!to_value) {
    return false;
  }
  {
    auto* temp = (*to_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.to = *temp;
  }

  const base::Value* lamports_value = dict.Find("lamports");
  if (!lamports_value) {
    return false;
  }
  {
    auto* temp = (*lamports_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.lamports = *temp;
  }

  const base::Value* spl_token_mint_value = dict.Find("splTokenMint");
  if (!spl_token_mint_value) {
    return false;
  }
  {
    out.spl_token_mint = (*spl_token_mint_value).Clone();
  }

  const base::Value* spl_token_amount_value = dict.Find("splTokenAmount");
  if (!spl_token_amount_value) {
    return false;
  }
  {
    out.spl_token_amount = (*spl_token_amount_value).Clone();
  }

  const base::Value* decimals_value = dict.Find("decimals");
  if (!decimals_value) {
    return false;
  }
  {
    out.decimals = (*decimals_value).Clone();
  }

  const base::Value* versioned_transaction_value = dict.Find("versionedTransaction");
  if (!versioned_transaction_value) {
    return false;
  }
  {
    out.versioned_transaction = (*versioned_transaction_value).Clone();
  }

  const base::Value* compute_unit_limit_value = dict.Find("computeUnitLimit");
  if (!compute_unit_limit_value) {
    return false;
  }
  {
    out.compute_unit_limit = (*compute_unit_limit_value).Clone();
  }

  const base::Value* compute_unit_price_value = dict.Find("computeUnitPrice");
  if (!compute_unit_price_value) {
    return false;
  }
  {
    out.compute_unit_price = (*compute_unit_price_value).Clone();
  }

  return true;
}

// static
bool Gate3SwapSolanaTransactionParams::Populate(
    const base::Value& value, Gate3SwapSolanaTransactionParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Gate3SwapSolanaTransactionParams> Gate3SwapSolanaTransactionParams::FromValue(const base::DictValue& value) {
  Gate3SwapSolanaTransactionParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Gate3SwapSolanaTransactionParams> Gate3SwapSolanaTransactionParams::FromValue(const base::Value& value) {
  Gate3SwapSolanaTransactionParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Gate3SwapSolanaTransactionParams::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("chain", (this->chain).ToValue());

  to_value_result.Set("from", this->from);

  to_value_result.Set("to", this->to);

  to_value_result.Set("lamports", this->lamports);

  to_value_result.Set("splTokenMint", (this->spl_token_mint).Clone());

  to_value_result.Set("splTokenAmount", (this->spl_token_amount).Clone());

  to_value_result.Set("decimals", (this->decimals).Clone());

  to_value_result.Set("versionedTransaction", (this->versioned_transaction).Clone());

  to_value_result.Set("computeUnitLimit", (this->compute_unit_limit).Clone());

  to_value_result.Set("computeUnitPrice", (this->compute_unit_price).Clone());


  return to_value_result;
}


Gate3SwapBitcoinTransactionParams::Gate3SwapBitcoinTransactionParams()
 {}

Gate3SwapBitcoinTransactionParams::~Gate3SwapBitcoinTransactionParams() = default;
Gate3SwapBitcoinTransactionParams::Gate3SwapBitcoinTransactionParams(Gate3SwapBitcoinTransactionParams&& rhs) noexcept = default;
Gate3SwapBitcoinTransactionParams& Gate3SwapBitcoinTransactionParams::operator=(Gate3SwapBitcoinTransactionParams&& rhs) noexcept = default;
Gate3SwapBitcoinTransactionParams Gate3SwapBitcoinTransactionParams::Clone() const {
  Gate3SwapBitcoinTransactionParams out;
  out.chain = chain.Clone();
  out.to = to;
  out.value = value;
  out.refund_to = refund_to;
  return out;
}

// static
bool Gate3SwapBitcoinTransactionParams::Populate(
    const base::DictValue& dict, Gate3SwapBitcoinTransactionParams& out) {
  const base::Value* chain_value = dict.Find("chain");
  if (!chain_value) {
    return false;
  }
  {
    if (!(*chain_value).is_dict()) {
      return false;
    }
    if (!Gate3ChainSpec::Populate((*chain_value).GetDict(), out.chain)) {
      return false;
    }
  }

  const base::Value* to_value = dict.Find("to");
  if (!to_value) {
    return false;
  }
  {
    auto* temp = (*to_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.to = *temp;
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

  const base::Value* refund_to_value = dict.Find("refundTo");
  if (!refund_to_value) {
    return false;
  }
  {
    auto* temp = (*refund_to_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.refund_to = *temp;
  }

  return true;
}

// static
bool Gate3SwapBitcoinTransactionParams::Populate(
    const base::Value& value, Gate3SwapBitcoinTransactionParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Gate3SwapBitcoinTransactionParams> Gate3SwapBitcoinTransactionParams::FromValue(const base::DictValue& value) {
  Gate3SwapBitcoinTransactionParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Gate3SwapBitcoinTransactionParams> Gate3SwapBitcoinTransactionParams::FromValue(const base::Value& value) {
  Gate3SwapBitcoinTransactionParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Gate3SwapBitcoinTransactionParams::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("chain", (this->chain).ToValue());

  to_value_result.Set("to", this->to);

  to_value_result.Set("value", this->value);

  to_value_result.Set("refundTo", this->refund_to);


  return to_value_result;
}


Gate3SwapCardanoTransactionParams::Gate3SwapCardanoTransactionParams()
 {}

Gate3SwapCardanoTransactionParams::~Gate3SwapCardanoTransactionParams() = default;
Gate3SwapCardanoTransactionParams::Gate3SwapCardanoTransactionParams(Gate3SwapCardanoTransactionParams&& rhs) noexcept = default;
Gate3SwapCardanoTransactionParams& Gate3SwapCardanoTransactionParams::operator=(Gate3SwapCardanoTransactionParams&& rhs) noexcept = default;
Gate3SwapCardanoTransactionParams Gate3SwapCardanoTransactionParams::Clone() const {
  Gate3SwapCardanoTransactionParams out;
  out.chain = chain.Clone();
  out.to = to;
  out.value = value;
  out.refund_to = refund_to;
  return out;
}

// static
bool Gate3SwapCardanoTransactionParams::Populate(
    const base::DictValue& dict, Gate3SwapCardanoTransactionParams& out) {
  const base::Value* chain_value = dict.Find("chain");
  if (!chain_value) {
    return false;
  }
  {
    if (!(*chain_value).is_dict()) {
      return false;
    }
    if (!Gate3ChainSpec::Populate((*chain_value).GetDict(), out.chain)) {
      return false;
    }
  }

  const base::Value* to_value = dict.Find("to");
  if (!to_value) {
    return false;
  }
  {
    auto* temp = (*to_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.to = *temp;
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

  const base::Value* refund_to_value = dict.Find("refundTo");
  if (!refund_to_value) {
    return false;
  }
  {
    auto* temp = (*refund_to_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.refund_to = *temp;
  }

  return true;
}

// static
bool Gate3SwapCardanoTransactionParams::Populate(
    const base::Value& value, Gate3SwapCardanoTransactionParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Gate3SwapCardanoTransactionParams> Gate3SwapCardanoTransactionParams::FromValue(const base::DictValue& value) {
  Gate3SwapCardanoTransactionParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Gate3SwapCardanoTransactionParams> Gate3SwapCardanoTransactionParams::FromValue(const base::Value& value) {
  Gate3SwapCardanoTransactionParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Gate3SwapCardanoTransactionParams::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("chain", (this->chain).ToValue());

  to_value_result.Set("to", this->to);

  to_value_result.Set("value", this->value);

  to_value_result.Set("refundTo", this->refund_to);


  return to_value_result;
}


Gate3SwapZCashTransactionParams::Gate3SwapZCashTransactionParams()
 {}

Gate3SwapZCashTransactionParams::~Gate3SwapZCashTransactionParams() = default;
Gate3SwapZCashTransactionParams::Gate3SwapZCashTransactionParams(Gate3SwapZCashTransactionParams&& rhs) noexcept = default;
Gate3SwapZCashTransactionParams& Gate3SwapZCashTransactionParams::operator=(Gate3SwapZCashTransactionParams&& rhs) noexcept = default;
Gate3SwapZCashTransactionParams Gate3SwapZCashTransactionParams::Clone() const {
  Gate3SwapZCashTransactionParams out;
  out.chain = chain.Clone();
  out.to = to;
  out.value = value;
  out.refund_to = refund_to;
  return out;
}

// static
bool Gate3SwapZCashTransactionParams::Populate(
    const base::DictValue& dict, Gate3SwapZCashTransactionParams& out) {
  const base::Value* chain_value = dict.Find("chain");
  if (!chain_value) {
    return false;
  }
  {
    if (!(*chain_value).is_dict()) {
      return false;
    }
    if (!Gate3ChainSpec::Populate((*chain_value).GetDict(), out.chain)) {
      return false;
    }
  }

  const base::Value* to_value = dict.Find("to");
  if (!to_value) {
    return false;
  }
  {
    auto* temp = (*to_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.to = *temp;
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

  const base::Value* refund_to_value = dict.Find("refundTo");
  if (!refund_to_value) {
    return false;
  }
  {
    auto* temp = (*refund_to_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.refund_to = *temp;
  }

  return true;
}

// static
bool Gate3SwapZCashTransactionParams::Populate(
    const base::Value& value, Gate3SwapZCashTransactionParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Gate3SwapZCashTransactionParams> Gate3SwapZCashTransactionParams::FromValue(const base::DictValue& value) {
  Gate3SwapZCashTransactionParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Gate3SwapZCashTransactionParams> Gate3SwapZCashTransactionParams::FromValue(const base::Value& value) {
  Gate3SwapZCashTransactionParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Gate3SwapZCashTransactionParams::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("chain", (this->chain).ToValue());

  to_value_result.Set("to", this->to);

  to_value_result.Set("value", this->value);

  to_value_result.Set("refundTo", this->refund_to);


  return to_value_result;
}


Gate3SwapTool::Gate3SwapTool()
 {}

Gate3SwapTool::~Gate3SwapTool() = default;
Gate3SwapTool::Gate3SwapTool(Gate3SwapTool&& rhs) noexcept = default;
Gate3SwapTool& Gate3SwapTool::operator=(Gate3SwapTool&& rhs) noexcept = default;
Gate3SwapTool Gate3SwapTool::Clone() const {
  Gate3SwapTool out;
  out.name = name;
  out.logo = logo.Clone();
  return out;
}

// static
bool Gate3SwapTool::Populate(
    const base::DictValue& dict, Gate3SwapTool& out) {
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

  const base::Value* logo_value = dict.Find("logo");
  if (!logo_value) {
    return false;
  }
  {
    out.logo = (*logo_value).Clone();
  }

  return true;
}

// static
bool Gate3SwapTool::Populate(
    const base::Value& value, Gate3SwapTool& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Gate3SwapTool> Gate3SwapTool::FromValue(const base::DictValue& value) {
  Gate3SwapTool out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Gate3SwapTool> Gate3SwapTool::FromValue(const base::Value& value) {
  Gate3SwapTool out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Gate3SwapTool::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("name", this->name);

  to_value_result.Set("logo", (this->logo).Clone());


  return to_value_result;
}


Gate3SwapStepToken::Gate3SwapStepToken()
 {}

Gate3SwapStepToken::~Gate3SwapStepToken() = default;
Gate3SwapStepToken::Gate3SwapStepToken(Gate3SwapStepToken&& rhs) noexcept = default;
Gate3SwapStepToken& Gate3SwapStepToken::operator=(Gate3SwapStepToken&& rhs) noexcept = default;
Gate3SwapStepToken Gate3SwapStepToken::Clone() const {
  Gate3SwapStepToken out;
  out.coin = coin;
  out.chain_id = chain_id;
  out.contract_address = contract_address.Clone();
  out.symbol = symbol;
  out.logo = logo.Clone();
  return out;
}

// static
bool Gate3SwapStepToken::Populate(
    const base::DictValue& dict, Gate3SwapStepToken& out) {
  const base::Value* coin_value = dict.Find("coin");
  if (!coin_value) {
    return false;
  }
  {
    auto* temp = (*coin_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.coin = *temp;
  }

  const base::Value* chain_id_value = dict.Find("chainId");
  if (!chain_id_value) {
    return false;
  }
  {
    auto* temp = (*chain_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.chain_id = *temp;
  }

  const base::Value* contract_address_value = dict.Find("contractAddress");
  if (!contract_address_value) {
    return false;
  }
  {
    out.contract_address = (*contract_address_value).Clone();
  }

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

  const base::Value* logo_value = dict.Find("logo");
  if (!logo_value) {
    return false;
  }
  {
    out.logo = (*logo_value).Clone();
  }

  return true;
}

// static
bool Gate3SwapStepToken::Populate(
    const base::Value& value, Gate3SwapStepToken& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Gate3SwapStepToken> Gate3SwapStepToken::FromValue(const base::DictValue& value) {
  Gate3SwapStepToken out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Gate3SwapStepToken> Gate3SwapStepToken::FromValue(const base::Value& value) {
  Gate3SwapStepToken out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Gate3SwapStepToken::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("coin", this->coin);

  to_value_result.Set("chainId", this->chain_id);

  to_value_result.Set("contractAddress", (this->contract_address).Clone());

  to_value_result.Set("symbol", this->symbol);

  to_value_result.Set("logo", (this->logo).Clone());


  return to_value_result;
}


Gate3SwapRouteStep::Gate3SwapRouteStep()
 {}

Gate3SwapRouteStep::~Gate3SwapRouteStep() = default;
Gate3SwapRouteStep::Gate3SwapRouteStep(Gate3SwapRouteStep&& rhs) noexcept = default;
Gate3SwapRouteStep& Gate3SwapRouteStep::operator=(Gate3SwapRouteStep&& rhs) noexcept = default;
Gate3SwapRouteStep Gate3SwapRouteStep::Clone() const {
  Gate3SwapRouteStep out;
  out.source_token = source_token.Clone();
  out.source_amount = source_amount;
  out.destination_token = destination_token.Clone();
  out.destination_amount = destination_amount;
  out.tool = tool.Clone();
  out.percent = percent;
  return out;
}

// static
bool Gate3SwapRouteStep::Populate(
    const base::DictValue& dict, Gate3SwapRouteStep& out) {
  const base::Value* source_token_value = dict.Find("sourceToken");
  if (!source_token_value) {
    return false;
  }
  {
    if (!(*source_token_value).is_dict()) {
      return false;
    }
    if (!Gate3SwapStepToken::Populate((*source_token_value).GetDict(), out.source_token)) {
      return false;
    }
  }

  const base::Value* source_amount_value = dict.Find("sourceAmount");
  if (!source_amount_value) {
    return false;
  }
  {
    auto* temp = (*source_amount_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.source_amount = *temp;
  }

  const base::Value* destination_token_value = dict.Find("destinationToken");
  if (!destination_token_value) {
    return false;
  }
  {
    if (!(*destination_token_value).is_dict()) {
      return false;
    }
    if (!Gate3SwapStepToken::Populate((*destination_token_value).GetDict(), out.destination_token)) {
      return false;
    }
  }

  const base::Value* destination_amount_value = dict.Find("destinationAmount");
  if (!destination_amount_value) {
    return false;
  }
  {
    auto* temp = (*destination_amount_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.destination_amount = *temp;
  }

  const base::Value* tool_value = dict.Find("tool");
  if (!tool_value) {
    return false;
  }
  {
    if (!(*tool_value).is_dict()) {
      return false;
    }
    if (!Gate3SwapTool::Populate((*tool_value).GetDict(), out.tool)) {
      return false;
    }
  }

  const base::Value* percent_value = dict.Find("percent");
  if (!percent_value) {
    return false;
  }
  {
    auto* temp = (*percent_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.percent = *temp;
  }

  return true;
}

// static
bool Gate3SwapRouteStep::Populate(
    const base::Value& value, Gate3SwapRouteStep& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Gate3SwapRouteStep> Gate3SwapRouteStep::FromValue(const base::DictValue& value) {
  Gate3SwapRouteStep out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Gate3SwapRouteStep> Gate3SwapRouteStep::FromValue(const base::Value& value) {
  Gate3SwapRouteStep out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Gate3SwapRouteStep::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("sourceToken", (this->source_token).ToValue());

  to_value_result.Set("sourceAmount", this->source_amount);

  to_value_result.Set("destinationToken", (this->destination_token).ToValue());

  to_value_result.Set("destinationAmount", this->destination_amount);

  to_value_result.Set("tool", (this->tool).ToValue());

  to_value_result.Set("percent", this->percent);


  return to_value_result;
}


Gate3SwapNetworkFee::Gate3SwapNetworkFee()
 {}

Gate3SwapNetworkFee::~Gate3SwapNetworkFee() = default;
Gate3SwapNetworkFee::Gate3SwapNetworkFee(Gate3SwapNetworkFee&& rhs) noexcept = default;
Gate3SwapNetworkFee& Gate3SwapNetworkFee::operator=(Gate3SwapNetworkFee&& rhs) noexcept = default;
Gate3SwapNetworkFee Gate3SwapNetworkFee::Clone() const {
  Gate3SwapNetworkFee out;
  out.amount = amount;
  out.decimals = decimals;
  out.symbol = symbol;
  return out;
}

// static
bool Gate3SwapNetworkFee::Populate(
    const base::DictValue& dict, Gate3SwapNetworkFee& out) {
  const base::Value* amount_value = dict.Find("amount");
  if (!amount_value) {
    return false;
  }
  {
    auto* temp = (*amount_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.amount = *temp;
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

  return true;
}

// static
bool Gate3SwapNetworkFee::Populate(
    const base::Value& value, Gate3SwapNetworkFee& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Gate3SwapNetworkFee> Gate3SwapNetworkFee::FromValue(const base::DictValue& value) {
  Gate3SwapNetworkFee out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Gate3SwapNetworkFee> Gate3SwapNetworkFee::FromValue(const base::Value& value) {
  Gate3SwapNetworkFee out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Gate3SwapNetworkFee::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("amount", this->amount);

  to_value_result.Set("decimals", this->decimals);

  to_value_result.Set("symbol", this->symbol);


  return to_value_result;
}


Gate3SwapRoute::Gate3SwapRoute()
: provider(),
gasless(false),
requires_token_allowance(false),
requires_firm_route(false) {}

Gate3SwapRoute::~Gate3SwapRoute() = default;
Gate3SwapRoute::Gate3SwapRoute(Gate3SwapRoute&& rhs) noexcept = default;
Gate3SwapRoute& Gate3SwapRoute::operator=(Gate3SwapRoute&& rhs) noexcept = default;
Gate3SwapRoute Gate3SwapRoute::Clone() const {
  Gate3SwapRoute out;
  out.id = id;
  out.provider = provider;
  out.steps.reserve(steps.size());
  for (const auto& element : steps) {
    json_schema_compiler::util::AppendToContainer(out.steps, element.Clone());
  }
  out.source_amount = source_amount;
  out.destination_amount = destination_amount;
  out.destination_amount_min = destination_amount_min;
  out.estimated_time = estimated_time.Clone();
  out.price_impact = price_impact.Clone();
  out.network_fee = network_fee.Clone();
  out.gasless = gasless;
  out.deposit_address = deposit_address.Clone();
  out.deposit_memo = deposit_memo.Clone();
  out.expires_at = expires_at.Clone();
  out.slippage_percentage = slippage_percentage;
  out.transaction_params = transaction_params.Clone();
  out.requires_token_allowance = requires_token_allowance;
  out.requires_firm_route = requires_firm_route;
  return out;
}

// static
bool Gate3SwapRoute::Populate(
    const base::DictValue& dict, Gate3SwapRoute& out) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto* temp = (*id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* provider_value = dict.Find("provider");
  if (!provider_value) {
    return false;
  }
  {
    const std::string* gate3_provider_as_string = (*provider_value).GetIfString();
    if (!gate3_provider_as_string) {
      return false;
    }
    out.provider = ParseGate3Provider(*gate3_provider_as_string);
    if (out.provider == Gate3Provider()) {
      return false;
    }
  }

  const base::Value* steps_value = dict.Find("steps");
  if (!steps_value) {
    return false;
  }
  {
    if (!(*steps_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*steps_value).GetList(), out.steps)) {
        return false;
      }
    }
  }

  const base::Value* source_amount_value = dict.Find("sourceAmount");
  if (!source_amount_value) {
    return false;
  }
  {
    auto* temp = (*source_amount_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.source_amount = *temp;
  }

  const base::Value* destination_amount_value = dict.Find("destinationAmount");
  if (!destination_amount_value) {
    return false;
  }
  {
    auto* temp = (*destination_amount_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.destination_amount = *temp;
  }

  const base::Value* destination_amount_min_value = dict.Find("destinationAmountMin");
  if (!destination_amount_min_value) {
    return false;
  }
  {
    auto* temp = (*destination_amount_min_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.destination_amount_min = *temp;
  }

  const base::Value* estimated_time_value = dict.Find("estimatedTime");
  if (!estimated_time_value) {
    return false;
  }
  {
    out.estimated_time = (*estimated_time_value).Clone();
  }

  const base::Value* price_impact_value = dict.Find("priceImpact");
  if (!price_impact_value) {
    return false;
  }
  {
    out.price_impact = (*price_impact_value).Clone();
  }

  const base::Value* network_fee_value = dict.Find("networkFee");
  if (!network_fee_value) {
    return false;
  }
  {
    out.network_fee = (*network_fee_value).Clone();
  }

  const base::Value* gasless_value = dict.Find("gasless");
  if (!gasless_value) {
    return false;
  }
  {
    auto temp = (*gasless_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.gasless = *temp;
  }

  const base::Value* deposit_address_value = dict.Find("depositAddress");
  if (!deposit_address_value) {
    return false;
  }
  {
    out.deposit_address = (*deposit_address_value).Clone();
  }

  const base::Value* deposit_memo_value = dict.Find("depositMemo");
  if (!deposit_memo_value) {
    return false;
  }
  {
    out.deposit_memo = (*deposit_memo_value).Clone();
  }

  const base::Value* expires_at_value = dict.Find("expiresAt");
  if (!expires_at_value) {
    return false;
  }
  {
    out.expires_at = (*expires_at_value).Clone();
  }

  const base::Value* slippage_percentage_value = dict.Find("slippagePercentage");
  if (!slippage_percentage_value) {
    return false;
  }
  {
    auto* temp = (*slippage_percentage_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.slippage_percentage = *temp;
  }

  const base::Value* transaction_params_value = dict.Find("transactionParams");
  if (!transaction_params_value) {
    return false;
  }
  {
    out.transaction_params = (*transaction_params_value).Clone();
  }

  const base::Value* requires_token_allowance_value = dict.Find("requiresTokenAllowance");
  if (!requires_token_allowance_value) {
    return false;
  }
  {
    auto temp = (*requires_token_allowance_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.requires_token_allowance = *temp;
  }

  const base::Value* requires_firm_route_value = dict.Find("requiresFirmRoute");
  if (!requires_firm_route_value) {
    return false;
  }
  {
    auto temp = (*requires_firm_route_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.requires_firm_route = *temp;
  }

  return true;
}

// static
bool Gate3SwapRoute::Populate(
    const base::Value& value, Gate3SwapRoute& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Gate3SwapRoute> Gate3SwapRoute::FromValue(const base::DictValue& value) {
  Gate3SwapRoute out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Gate3SwapRoute> Gate3SwapRoute::FromValue(const base::Value& value) {
  Gate3SwapRoute out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Gate3SwapRoute::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("provider", swap_responses::ToString(this->provider));

  to_value_result.Set("steps", json_schema_compiler::util::CreateValueFromArray(this->steps));

  to_value_result.Set("sourceAmount", this->source_amount);

  to_value_result.Set("destinationAmount", this->destination_amount);

  to_value_result.Set("destinationAmountMin", this->destination_amount_min);

  to_value_result.Set("estimatedTime", (this->estimated_time).Clone());

  to_value_result.Set("priceImpact", (this->price_impact).Clone());

  to_value_result.Set("networkFee", (this->network_fee).Clone());

  to_value_result.Set("gasless", this->gasless);

  to_value_result.Set("depositAddress", (this->deposit_address).Clone());

  to_value_result.Set("depositMemo", (this->deposit_memo).Clone());

  to_value_result.Set("expiresAt", (this->expires_at).Clone());

  to_value_result.Set("slippagePercentage", this->slippage_percentage);

  to_value_result.Set("transactionParams", (this->transaction_params).Clone());

  to_value_result.Set("requiresTokenAllowance", this->requires_token_allowance);

  to_value_result.Set("requiresFirmRoute", this->requires_firm_route);


  return to_value_result;
}


Gate3Quote::Gate3Quote()
 {}

Gate3Quote::~Gate3Quote() = default;
Gate3Quote::Gate3Quote(Gate3Quote&& rhs) noexcept = default;
Gate3Quote& Gate3Quote::operator=(Gate3Quote&& rhs) noexcept = default;
Gate3Quote Gate3Quote::Clone() const {
  Gate3Quote out;
  out.routes.reserve(routes.size());
  for (const auto& element : routes) {
    json_schema_compiler::util::AppendToContainer(out.routes, element.Clone());
  }
  return out;
}

// static
bool Gate3Quote::Populate(
    const base::DictValue& dict, Gate3Quote& out) {
  const base::Value* routes_value = dict.Find("routes");
  if (!routes_value) {
    return false;
  }
  {
    if (!(*routes_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*routes_value).GetList(), out.routes)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool Gate3Quote::Populate(
    const base::Value& value, Gate3Quote& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Gate3Quote> Gate3Quote::FromValue(const base::DictValue& value) {
  Gate3Quote out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Gate3Quote> Gate3Quote::FromValue(const base::Value& value) {
  Gate3Quote out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Gate3Quote::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("routes", json_schema_compiler::util::CreateValueFromArray(this->routes));


  return to_value_result;
}


const char* ToString(Gate3StatusCode enum_param) {
  switch (enum_param) {
    case Gate3StatusCode::kPending:
      return "PENDING";
    case Gate3StatusCode::kProcessing:
      return "PROCESSING";
    case Gate3StatusCode::kSuccess:
      return "SUCCESS";
    case Gate3StatusCode::kFailed:
      return "FAILED";
    case Gate3StatusCode::kRefunded:
      return "REFUNDED";
    case Gate3StatusCode::kNone:
      return "";
  }
  NOTREACHED();
}

Gate3StatusCode ParseGate3StatusCode(std::string_view enum_string) {
  if (enum_string == "PENDING")
    return Gate3StatusCode::kPending;
  if (enum_string == "PROCESSING")
    return Gate3StatusCode::kProcessing;
  if (enum_string == "SUCCESS")
    return Gate3StatusCode::kSuccess;
  if (enum_string == "FAILED")
    return Gate3StatusCode::kFailed;
  if (enum_string == "REFUNDED")
    return Gate3StatusCode::kRefunded;
  return Gate3StatusCode::kNone;
}

std::u16string GetGate3StatusCodeParseError(std::string_view enum_string) {
  return u"expected \"PENDING\" or \"PROCESSING\" or \"SUCCESS\" or \"FAILED\" or \"REFUNDED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


Gate3StatusResponse::Gate3StatusResponse()
: status() {}

Gate3StatusResponse::~Gate3StatusResponse() = default;
Gate3StatusResponse::Gate3StatusResponse(Gate3StatusResponse&& rhs) noexcept = default;
Gate3StatusResponse& Gate3StatusResponse::operator=(Gate3StatusResponse&& rhs) noexcept = default;
Gate3StatusResponse Gate3StatusResponse::Clone() const {
  Gate3StatusResponse out;
  out.status = status;
  out.internal_status = internal_status;
  out.explorer_url = explorer_url;
  return out;
}

// static
bool Gate3StatusResponse::Populate(
    const base::DictValue& dict, Gate3StatusResponse& out) {
  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* gate3_status_code_as_string = (*status_value).GetIfString();
    if (!gate3_status_code_as_string) {
      return false;
    }
    out.status = ParseGate3StatusCode(*gate3_status_code_as_string);
    if (out.status == Gate3StatusCode()) {
      return false;
    }
  }

  const base::Value* internal_status_value = dict.Find("internalStatus");
  if (!internal_status_value) {
    return false;
  }
  {
    auto* temp = (*internal_status_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.internal_status = *temp;
  }

  const base::Value* explorer_url_value = dict.Find("explorerUrl");
  if (!explorer_url_value) {
    return false;
  }
  {
    auto* temp = (*explorer_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.explorer_url = *temp;
  }

  return true;
}

// static
bool Gate3StatusResponse::Populate(
    const base::Value& value, Gate3StatusResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Gate3StatusResponse> Gate3StatusResponse::FromValue(const base::DictValue& value) {
  Gate3StatusResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Gate3StatusResponse> Gate3StatusResponse::FromValue(const base::Value& value) {
  Gate3StatusResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Gate3StatusResponse::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("status", swap_responses::ToString(this->status));

  to_value_result.Set("internalStatus", this->internal_status);

  to_value_result.Set("explorerUrl", this->explorer_url);


  return to_value_result;
}


const char* ToString(Gate3ErrorKind enum_param) {
  switch (enum_param) {
    case Gate3ErrorKind::kInsufficientLiquidity:
      return "INSUFFICIENT_LIQUIDITY";
    case Gate3ErrorKind::kAmountTooLow:
      return "AMOUNT_TOO_LOW";
    case Gate3ErrorKind::kUnsupportedNetwork:
      return "UNSUPPORTED_NETWORK";
    case Gate3ErrorKind::kUnsupportedTokens:
      return "UNSUPPORTED_TOKENS";
    case Gate3ErrorKind::kInvalidRequest:
      return "INVALID_REQUEST";
    case Gate3ErrorKind::kUnknown:
      return "UNKNOWN";
    case Gate3ErrorKind::kNone:
      return "";
  }
  NOTREACHED();
}

Gate3ErrorKind ParseGate3ErrorKind(std::string_view enum_string) {
  if (enum_string == "INSUFFICIENT_LIQUIDITY")
    return Gate3ErrorKind::kInsufficientLiquidity;
  if (enum_string == "AMOUNT_TOO_LOW")
    return Gate3ErrorKind::kAmountTooLow;
  if (enum_string == "UNSUPPORTED_NETWORK")
    return Gate3ErrorKind::kUnsupportedNetwork;
  if (enum_string == "UNSUPPORTED_TOKENS")
    return Gate3ErrorKind::kUnsupportedTokens;
  if (enum_string == "INVALID_REQUEST")
    return Gate3ErrorKind::kInvalidRequest;
  if (enum_string == "UNKNOWN")
    return Gate3ErrorKind::kUnknown;
  return Gate3ErrorKind::kNone;
}

std::u16string GetGate3ErrorKindParseError(std::string_view enum_string) {
  return u"expected \"INSUFFICIENT_LIQUIDITY\" or \"AMOUNT_TOO_LOW\" or \"UNSUPPORTED_NETWORK\" or \"UNSUPPORTED_TOKENS\" or \"INVALID_REQUEST\" or \"UNKNOWN\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


Gate3Error::Gate3Error()
: kind() {}

Gate3Error::~Gate3Error() = default;
Gate3Error::Gate3Error(Gate3Error&& rhs) noexcept = default;
Gate3Error& Gate3Error::operator=(Gate3Error&& rhs) noexcept = default;
Gate3Error Gate3Error::Clone() const {
  Gate3Error out;
  out.message = message;
  out.kind = kind;
  return out;
}

// static
bool Gate3Error::Populate(
    const base::DictValue& dict, Gate3Error& out) {
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

  const base::Value* kind_value = dict.Find("kind");
  if (!kind_value) {
    return false;
  }
  {
    const std::string* gate3_error_kind_as_string = (*kind_value).GetIfString();
    if (!gate3_error_kind_as_string) {
      return false;
    }
    out.kind = ParseGate3ErrorKind(*gate3_error_kind_as_string);
    if (out.kind == Gate3ErrorKind()) {
      return false;
    }
  }

  return true;
}

// static
bool Gate3Error::Populate(
    const base::Value& value, Gate3Error& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Gate3Error> Gate3Error::FromValue(const base::DictValue& value) {
  Gate3Error out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Gate3Error> Gate3Error::FromValue(const base::Value& value) {
  Gate3Error out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Gate3Error::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("message", this->message);

  to_value_result.Set("kind", swap_responses::ToString(this->kind));


  return to_value_result;
}



}  // namespace swap_responses
}  // namespace brave_wallet

