// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_wallet/common/json_rpc_requests.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_wallet/common/json_rpc_requests.idl --root=../../ --destdir=gen --namespace=brave_wallet::%(namespace)s --generator=cpp --include-rules=

#include "brave/components/brave_wallet/common/json_rpc_requests.h"

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
namespace json_rpc_requests {
//
// Types
//

Transaction::Transaction()
 {}

Transaction::~Transaction() = default;
Transaction::Transaction(Transaction&& rhs) noexcept = default;
Transaction& Transaction::operator=(Transaction&& rhs) noexcept = default;
Transaction Transaction::Clone() const {
  Transaction out;
  out.from = from;
  out.to = to;
  out.gas = gas;
  out.gas_price = gas_price;
  out.value = value;
  out.data = data;
  out.nonce = nonce;
  if (max_priority_fee_per_gas) {
    out.max_priority_fee_per_gas = max_priority_fee_per_gas->Clone();
  }
  if (max_fee_per_gas) {
    out.max_fee_per_gas = max_fee_per_gas->Clone();
  }
  return out;
}

// static
bool Transaction::Populate(
    const base::DictValue& dict, Transaction& out) {
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
  if (to_value) {
    {
      auto* temp = (*to_value).GetIfString();
      if (!temp) {
        out.to = std::nullopt;
        return false;
      }
      out.to = *temp;
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

  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    {
      auto* temp = (*value_value).GetIfString();
      if (!temp) {
        out.value = std::nullopt;
        return false;
      }
      out.value = *temp;
    }
  }

  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    {
      auto* temp = (*data_value).GetIfString();
      if (!temp) {
        out.data = std::nullopt;
        return false;
      }
      out.data = *temp;
    }
  }

  const base::Value* nonce_value = dict.Find("nonce");
  if (nonce_value) {
    {
      auto* temp = (*nonce_value).GetIfString();
      if (!temp) {
        out.nonce = std::nullopt;
        return false;
      }
      out.nonce = *temp;
    }
  }

  const base::Value* max_priority_fee_per_gas_value = dict.Find("maxPriorityFeePerGas");
  if (max_priority_fee_per_gas_value) {
    {
      out.max_priority_fee_per_gas = (*max_priority_fee_per_gas_value).Clone();
    }
  }

  const base::Value* max_fee_per_gas_value = dict.Find("maxFeePerGas");
  if (max_fee_per_gas_value) {
    {
      out.max_fee_per_gas = (*max_fee_per_gas_value).Clone();
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

  to_value_result.Set("from", this->from);

  if (this->to) {
    to_value_result.Set("to", *this->to);

  }
  if (this->gas) {
    to_value_result.Set("gas", *this->gas);

  }
  if (this->gas_price) {
    to_value_result.Set("gasPrice", *this->gas_price);

  }
  if (this->value) {
    to_value_result.Set("value", *this->value);

  }
  if (this->data) {
    to_value_result.Set("data", *this->data);

  }
  if (this->nonce) {
    to_value_result.Set("nonce", *this->nonce);

  }
  if (this->max_priority_fee_per_gas) {
    to_value_result.Set("maxPriorityFeePerGas", (this->max_priority_fee_per_gas)->Clone());

  }
  if (this->max_fee_per_gas) {
    to_value_result.Set("maxFeePerGas", (this->max_fee_per_gas)->Clone());

  }

  return to_value_result;
}



}  // namespace json_rpc_requests
}  // namespace brave_wallet

