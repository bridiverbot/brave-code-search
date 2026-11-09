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

#ifndef BRAVE_COMPONENTS_BRAVE_WALLET_COMMON_ETH_REQUESTS_H__
#define BRAVE_COMPONENTS_BRAVE_WALLET_COMMON_ETH_REQUESTS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace brave_wallet {
namespace eth_requests {

//
// Types
//

struct CowSwapOrder {
  CowSwapOrder();
  ~CowSwapOrder();
  CowSwapOrder(const CowSwapOrder&) = delete;
  CowSwapOrder& operator=(const CowSwapOrder&) = delete;
  CowSwapOrder(CowSwapOrder&& rhs) noexcept;
  CowSwapOrder& operator=(CowSwapOrder&& rhs) noexcept;

  // Populates a CowSwapOrder object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CowSwapOrder& out);

  // Populates a CowSwapOrder object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, CowSwapOrder& out);

  // Creates a deep copy of CowSwapOrder.
  CowSwapOrder Clone() const;

  // Creates a CowSwapOrder object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<CowSwapOrder> FromValue(const base::DictValue& value);

  // Creates a CowSwapOrder object from a base::Value, or nullopt on failure.
  static std::optional<CowSwapOrder> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCowSwapOrder object.
  base::DictValue ToValue() const;

  std::string app_data;

  std::string buy_amount;

  std::string buy_token;

  std::string fee_amount;

  std::string kind;

  bool partially_fillable;

  std::string receiver;

  std::string sell_amount;

  std::string sell_token;

  std::string valid_to;

};


}  // namespace eth_requests
}  // namespace brave_wallet

#endif  // BRAVE_COMPONENTS_BRAVE_WALLET_COMMON_ETH_REQUESTS_H__
