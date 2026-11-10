// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_wallet/common/eth_requests.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_wallet/common/eth_requests.idl --root=../../ --destdir=gen --namespace=brave_wallet::%(namespace)s --generator=cpp --include-rules=

#include "brave/components/brave_wallet/common/eth_requests.h"

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
namespace eth_requests {
//
// Types
//

CowSwapOrder::CowSwapOrder()
: partially_fillable(false) {}

CowSwapOrder::~CowSwapOrder() = default;
CowSwapOrder::CowSwapOrder(CowSwapOrder&& rhs) noexcept = default;
CowSwapOrder& CowSwapOrder::operator=(CowSwapOrder&& rhs) noexcept = default;
CowSwapOrder CowSwapOrder::Clone() const {
  CowSwapOrder out;
  out.app_data = app_data;
  out.buy_amount = buy_amount;
  out.buy_token = buy_token;
  out.fee_amount = fee_amount;
  out.kind = kind;
  out.partially_fillable = partially_fillable;
  out.receiver = receiver;
  out.sell_amount = sell_amount;
  out.sell_token = sell_token;
  out.valid_to = valid_to;
  return out;
}

// static
bool CowSwapOrder::Populate(
    const base::DictValue& dict, CowSwapOrder& out) {
  const base::Value* app_data_value = dict.Find("appData");
  if (!app_data_value) {
    return false;
  }
  {
    auto* temp = (*app_data_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.app_data = *temp;
  }

  const base::Value* buy_amount_value = dict.Find("buyAmount");
  if (!buy_amount_value) {
    return false;
  }
  {
    auto* temp = (*buy_amount_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.buy_amount = *temp;
  }

  const base::Value* buy_token_value = dict.Find("buyToken");
  if (!buy_token_value) {
    return false;
  }
  {
    auto* temp = (*buy_token_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.buy_token = *temp;
  }

  const base::Value* fee_amount_value = dict.Find("feeAmount");
  if (!fee_amount_value) {
    return false;
  }
  {
    auto* temp = (*fee_amount_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.fee_amount = *temp;
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

  const base::Value* partially_fillable_value = dict.Find("partiallyFillable");
  if (!partially_fillable_value) {
    return false;
  }
  {
    auto temp = (*partially_fillable_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.partially_fillable = *temp;
  }

  const base::Value* receiver_value = dict.Find("receiver");
  if (!receiver_value) {
    return false;
  }
  {
    auto* temp = (*receiver_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.receiver = *temp;
  }

  const base::Value* sell_amount_value = dict.Find("sellAmount");
  if (!sell_amount_value) {
    return false;
  }
  {
    auto* temp = (*sell_amount_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.sell_amount = *temp;
  }

  const base::Value* sell_token_value = dict.Find("sellToken");
  if (!sell_token_value) {
    return false;
  }
  {
    auto* temp = (*sell_token_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.sell_token = *temp;
  }

  const base::Value* valid_to_value = dict.Find("validTo");
  if (!valid_to_value) {
    return false;
  }
  {
    auto* temp = (*valid_to_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.valid_to = *temp;
  }

  return true;
}

// static
bool CowSwapOrder::Populate(
    const base::Value& value, CowSwapOrder& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CowSwapOrder> CowSwapOrder::FromValue(const base::DictValue& value) {
  CowSwapOrder out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CowSwapOrder> CowSwapOrder::FromValue(const base::Value& value) {
  CowSwapOrder out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue CowSwapOrder::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("appData", this->app_data);

  to_value_result.Set("buyAmount", this->buy_amount);

  to_value_result.Set("buyToken", this->buy_token);

  to_value_result.Set("feeAmount", this->fee_amount);

  to_value_result.Set("kind", this->kind);

  to_value_result.Set("partiallyFillable", this->partially_fillable);

  to_value_result.Set("receiver", this->receiver);

  to_value_result.Set("sellAmount", this->sell_amount);

  to_value_result.Set("sellToken", this->sell_token);

  to_value_result.Set("validTo", this->valid_to);


  return to_value_result;
}



}  // namespace eth_requests
}  // namespace brave_wallet

