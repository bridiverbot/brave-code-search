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

#ifndef BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_SWAP_RESPONSES_H__
#define BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_SWAP_RESPONSES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include <string_view>


namespace brave_wallet {
namespace swap_responses {

//
// Types
//

struct ZeroExFee {
  ZeroExFee();
  ~ZeroExFee();
  ZeroExFee(const ZeroExFee&) = delete;
  ZeroExFee& operator=(const ZeroExFee&) = delete;
  ZeroExFee(ZeroExFee&& rhs) noexcept;
  ZeroExFee& operator=(ZeroExFee&& rhs) noexcept;

  // Populates a ZeroExFee object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, ZeroExFee& out);

  // Populates a ZeroExFee object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, ZeroExFee& out);

  // Creates a deep copy of ZeroExFee.
  ZeroExFee Clone() const;

  // Creates a ZeroExFee object from a base::DictValue, or nullopt on failure.
  static std::optional<ZeroExFee> FromValue(const base::DictValue& value);

  // Creates a ZeroExFee object from a base::Value, or nullopt on failure.
  static std::optional<ZeroExFee> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisZeroExFee object.
  base::DictValue ToValue() const;

  std::string amount;

  std::string token;

  std::string type;

};

struct ZeroExFees {
  ZeroExFees();
  ~ZeroExFees();
  ZeroExFees(const ZeroExFees&) = delete;
  ZeroExFees& operator=(const ZeroExFees&) = delete;
  ZeroExFees(ZeroExFees&& rhs) noexcept;
  ZeroExFees& operator=(ZeroExFees&& rhs) noexcept;

  // Populates a ZeroExFees object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, ZeroExFees& out);

  // Populates a ZeroExFees object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, ZeroExFees& out);

  // Creates a deep copy of ZeroExFees.
  ZeroExFees Clone() const;

  // Creates a ZeroExFees object from a base::DictValue, or nullopt on failure.
  static std::optional<ZeroExFees> FromValue(const base::DictValue& value);

  // Creates a ZeroExFees object from a base::Value, or nullopt on failure.
  static std::optional<ZeroExFees> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisZeroExFees object.
  base::DictValue ToValue() const;

  // nullable field that maps to ZeroExFee
  base::Value zero_ex_fee;

};

struct ZeroExTransaction {
  ZeroExTransaction();
  ~ZeroExTransaction();
  ZeroExTransaction(const ZeroExTransaction&) = delete;
  ZeroExTransaction& operator=(const ZeroExTransaction&) = delete;
  ZeroExTransaction(ZeroExTransaction&& rhs) noexcept;
  ZeroExTransaction& operator=(ZeroExTransaction&& rhs) noexcept;

  // Populates a ZeroExTransaction object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ZeroExTransaction& out);

  // Populates a ZeroExTransaction object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ZeroExTransaction& out);

  // Creates a deep copy of ZeroExTransaction.
  ZeroExTransaction Clone() const;

  // Creates a ZeroExTransaction object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ZeroExTransaction> FromValue(const base::DictValue& value);

  // Creates a ZeroExTransaction object from a base::Value, or nullopt on
  // failure.
  static std::optional<ZeroExTransaction> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisZeroExTransaction object.
  base::DictValue ToValue() const;

  std::string to;

  std::string data;

  std::string gas;

  std::string gas_price;

  std::string value;

};

struct ZeroExRouteFill {
  ZeroExRouteFill();
  ~ZeroExRouteFill();
  ZeroExRouteFill(const ZeroExRouteFill&) = delete;
  ZeroExRouteFill& operator=(const ZeroExRouteFill&) = delete;
  ZeroExRouteFill(ZeroExRouteFill&& rhs) noexcept;
  ZeroExRouteFill& operator=(ZeroExRouteFill&& rhs) noexcept;

  // Populates a ZeroExRouteFill object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ZeroExRouteFill& out);

  // Populates a ZeroExRouteFill object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ZeroExRouteFill& out);

  // Creates a deep copy of ZeroExRouteFill.
  ZeroExRouteFill Clone() const;

  // Creates a ZeroExRouteFill object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ZeroExRouteFill> FromValue(const base::DictValue& value);

  // Creates a ZeroExRouteFill object from a base::Value, or nullopt on failure.
  static std::optional<ZeroExRouteFill> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisZeroExRouteFill object.
  base::DictValue ToValue() const;

  std::string from;

  std::string to;

  std::string source;

  std::string proportion_bps;

};

struct ZeroExRoute {
  ZeroExRoute();
  ~ZeroExRoute();
  ZeroExRoute(const ZeroExRoute&) = delete;
  ZeroExRoute& operator=(const ZeroExRoute&) = delete;
  ZeroExRoute(ZeroExRoute&& rhs) noexcept;
  ZeroExRoute& operator=(ZeroExRoute&& rhs) noexcept;

  // Populates a ZeroExRoute object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ZeroExRoute& out);

  // Populates a ZeroExRoute object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, ZeroExRoute& out);

  // Creates a deep copy of ZeroExRoute.
  ZeroExRoute Clone() const;

  // Creates a ZeroExRoute object from a base::DictValue, or nullopt on failure.
  static std::optional<ZeroExRoute> FromValue(const base::DictValue& value);

  // Creates a ZeroExRoute object from a base::Value, or nullopt on failure.
  static std::optional<ZeroExRoute> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisZeroExRoute object.
  base::DictValue ToValue() const;

  std::vector<ZeroExRouteFill> fills;

};

struct ZeroExQuoteResponse {
  ZeroExQuoteResponse();
  ~ZeroExQuoteResponse();
  ZeroExQuoteResponse(const ZeroExQuoteResponse&) = delete;
  ZeroExQuoteResponse& operator=(const ZeroExQuoteResponse&) = delete;
  ZeroExQuoteResponse(ZeroExQuoteResponse&& rhs) noexcept;
  ZeroExQuoteResponse& operator=(ZeroExQuoteResponse&& rhs) noexcept;

  // Populates a ZeroExQuoteResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ZeroExQuoteResponse& out);

  // Populates a ZeroExQuoteResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ZeroExQuoteResponse& out);

  // Creates a deep copy of ZeroExQuoteResponse.
  ZeroExQuoteResponse Clone() const;

  // Creates a ZeroExQuoteResponse object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ZeroExQuoteResponse> FromValue(const base::DictValue& value);

  // Creates a ZeroExQuoteResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<ZeroExQuoteResponse> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisZeroExQuoteResponse object.
  base::DictValue ToValue() const;

  std::optional<std::string> block_number;

  std::optional<std::string> buy_amount;

  std::optional<std::string> buy_token;

  std::optional<ZeroExFees> fees;

  std::optional<std::string> gas;

  std::optional<std::string> gas_price;

  bool liquidity_available;

  std::optional<std::string> min_buy_amount;

  std::optional<ZeroExRoute> route;

  std::optional<std::string> sell_amount;

  std::optional<std::string> sell_token;

  std::optional<std::string> total_network_fee;

};

struct ZeroExTransactionResponse {
  ZeroExTransactionResponse();
  ~ZeroExTransactionResponse();
  ZeroExTransactionResponse(const ZeroExTransactionResponse&) = delete;
  ZeroExTransactionResponse& operator=(const ZeroExTransactionResponse&) = delete;
  ZeroExTransactionResponse(ZeroExTransactionResponse&& rhs) noexcept;
  ZeroExTransactionResponse& operator=(ZeroExTransactionResponse&& rhs) noexcept;

  // Populates a ZeroExTransactionResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ZeroExTransactionResponse& out);

  // Populates a ZeroExTransactionResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ZeroExTransactionResponse& out);

  // Creates a deep copy of ZeroExTransactionResponse.
  ZeroExTransactionResponse Clone() const;

  // Creates a ZeroExTransactionResponse object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<ZeroExTransactionResponse> FromValue(const base::DictValue& value);

  // Creates a ZeroExTransactionResponse object from a base::Value, or nullopt
  // on failure.
  static std::optional<ZeroExTransactionResponse> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisZeroExTransactionResponse object.
  base::DictValue ToValue() const;

  ZeroExTransaction transaction;

};

struct ZeroExErrorResponse {
  ZeroExErrorResponse();
  ~ZeroExErrorResponse();
  ZeroExErrorResponse(const ZeroExErrorResponse&) = delete;
  ZeroExErrorResponse& operator=(const ZeroExErrorResponse&) = delete;
  ZeroExErrorResponse(ZeroExErrorResponse&& rhs) noexcept;
  ZeroExErrorResponse& operator=(ZeroExErrorResponse&& rhs) noexcept;

  // Populates a ZeroExErrorResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ZeroExErrorResponse& out);

  // Populates a ZeroExErrorResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ZeroExErrorResponse& out);

  // Creates a deep copy of ZeroExErrorResponse.
  ZeroExErrorResponse Clone() const;

  // Creates a ZeroExErrorResponse object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ZeroExErrorResponse> FromValue(const base::DictValue& value);

  // Creates a ZeroExErrorResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<ZeroExErrorResponse> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisZeroExErrorResponse object.
  base::DictValue ToValue() const;

  std::string name;

  std::string message;

};

struct JupiterPlatformFee {
  JupiterPlatformFee();
  ~JupiterPlatformFee();
  JupiterPlatformFee(const JupiterPlatformFee&) = delete;
  JupiterPlatformFee& operator=(const JupiterPlatformFee&) = delete;
  JupiterPlatformFee(JupiterPlatformFee&& rhs) noexcept;
  JupiterPlatformFee& operator=(JupiterPlatformFee&& rhs) noexcept;

  // Populates a JupiterPlatformFee object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, JupiterPlatformFee& out);

  // Populates a JupiterPlatformFee object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, JupiterPlatformFee& out);

  // Creates a deep copy of JupiterPlatformFee.
  JupiterPlatformFee Clone() const;

  // Creates a JupiterPlatformFee object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<JupiterPlatformFee> FromValue(const base::DictValue& value);

  // Creates a JupiterPlatformFee object from a base::Value, or nullopt on
  // failure.
  static std::optional<JupiterPlatformFee> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisJupiterPlatformFee object.
  base::DictValue ToValue() const;

  std::string amount;

  std::string fee_bps;

};

struct JupiterSwapInfo {
  JupiterSwapInfo();
  ~JupiterSwapInfo();
  JupiterSwapInfo(const JupiterSwapInfo&) = delete;
  JupiterSwapInfo& operator=(const JupiterSwapInfo&) = delete;
  JupiterSwapInfo(JupiterSwapInfo&& rhs) noexcept;
  JupiterSwapInfo& operator=(JupiterSwapInfo&& rhs) noexcept;

  // Populates a JupiterSwapInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, JupiterSwapInfo& out);

  // Populates a JupiterSwapInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, JupiterSwapInfo& out);

  // Creates a deep copy of JupiterSwapInfo.
  JupiterSwapInfo Clone() const;

  // Creates a JupiterSwapInfo object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<JupiterSwapInfo> FromValue(const base::DictValue& value);

  // Creates a JupiterSwapInfo object from a base::Value, or nullopt on failure.
  static std::optional<JupiterSwapInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisJupiterSwapInfo object.
  base::DictValue ToValue() const;

  std::string amm_key;

  std::string label;

  std::string input_mint;

  std::string output_mint;

  std::string in_amount;

  std::string out_amount;

  std::optional<std::string> fee_amount;

  std::optional<std::string> fee_mint;

};

struct JupiterRouteStep {
  JupiterRouteStep();
  ~JupiterRouteStep();
  JupiterRouteStep(const JupiterRouteStep&) = delete;
  JupiterRouteStep& operator=(const JupiterRouteStep&) = delete;
  JupiterRouteStep(JupiterRouteStep&& rhs) noexcept;
  JupiterRouteStep& operator=(JupiterRouteStep&& rhs) noexcept;

  // Populates a JupiterRouteStep object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, JupiterRouteStep& out);

  // Populates a JupiterRouteStep object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, JupiterRouteStep& out);

  // Creates a deep copy of JupiterRouteStep.
  JupiterRouteStep Clone() const;

  // Creates a JupiterRouteStep object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<JupiterRouteStep> FromValue(const base::DictValue& value);

  // Creates a JupiterRouteStep object from a base::Value, or nullopt on
  // failure.
  static std::optional<JupiterRouteStep> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisJupiterRouteStep object.
  base::DictValue ToValue() const;

  JupiterSwapInfo swap_info;

  std::string percent;

};

struct JupiterQuoteResponse {
  JupiterQuoteResponse();
  ~JupiterQuoteResponse();
  JupiterQuoteResponse(const JupiterQuoteResponse&) = delete;
  JupiterQuoteResponse& operator=(const JupiterQuoteResponse&) = delete;
  JupiterQuoteResponse(JupiterQuoteResponse&& rhs) noexcept;
  JupiterQuoteResponse& operator=(JupiterQuoteResponse&& rhs) noexcept;

  // Populates a JupiterQuoteResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, JupiterQuoteResponse& out);

  // Populates a JupiterQuoteResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, JupiterQuoteResponse& out);

  // Creates a deep copy of JupiterQuoteResponse.
  JupiterQuoteResponse Clone() const;

  // Creates a JupiterQuoteResponse object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<JupiterQuoteResponse> FromValue(const base::DictValue& value);

  // Creates a JupiterQuoteResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<JupiterQuoteResponse> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisJupiterQuoteResponse object.
  base::DictValue ToValue() const;

  std::string input_mint;

  std::string in_amount;

  std::string output_mint;

  std::string out_amount;

  std::string other_amount_threshold;

  std::string swap_mode;

  std::string slippage_bps;

  base::Value platform_fee;

  // nullable
  std::string price_impact_pct;

  std::vector<JupiterRouteStep> route_plan;

};

struct JupiterSwapTransactions {
  JupiterSwapTransactions();
  ~JupiterSwapTransactions();
  JupiterSwapTransactions(const JupiterSwapTransactions&) = delete;
  JupiterSwapTransactions& operator=(const JupiterSwapTransactions&) = delete;
  JupiterSwapTransactions(JupiterSwapTransactions&& rhs) noexcept;
  JupiterSwapTransactions& operator=(JupiterSwapTransactions&& rhs) noexcept;

  // Populates a JupiterSwapTransactions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, JupiterSwapTransactions& out);

  // Populates a JupiterSwapTransactions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, JupiterSwapTransactions& out);

  // Creates a deep copy of JupiterSwapTransactions.
  JupiterSwapTransactions Clone() const;

  // Creates a JupiterSwapTransactions object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<JupiterSwapTransactions> FromValue(const base::DictValue& value);

  // Creates a JupiterSwapTransactions object from a base::Value, or nullopt on
  // failure.
  static std::optional<JupiterSwapTransactions> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisJupiterSwapTransactions object.
  base::DictValue ToValue() const;

  std::string swap_transaction;

};

struct JupiterErrorResponse {
  JupiterErrorResponse();
  ~JupiterErrorResponse();
  JupiterErrorResponse(const JupiterErrorResponse&) = delete;
  JupiterErrorResponse& operator=(const JupiterErrorResponse&) = delete;
  JupiterErrorResponse(JupiterErrorResponse&& rhs) noexcept;
  JupiterErrorResponse& operator=(JupiterErrorResponse&& rhs) noexcept;

  // Populates a JupiterErrorResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, JupiterErrorResponse& out);

  // Populates a JupiterErrorResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, JupiterErrorResponse& out);

  // Creates a deep copy of JupiterErrorResponse.
  JupiterErrorResponse Clone() const;

  // Creates a JupiterErrorResponse object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<JupiterErrorResponse> FromValue(const base::DictValue& value);

  // Creates a JupiterErrorResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<JupiterErrorResponse> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisJupiterErrorResponse object.
  base::DictValue ToValue() const;

  std::string status_code;

  std::string error;

  std::string message;

};

// Gate3 swap response types
enum class Gate3Provider {
  kNone = 0,
  kAuto,
  kNearIntents,
  kZeroEx,
  kJupiter,
  kLifi,
  kSquid,
  kMaxValue = kSquid,
};


const char* ToString(Gate3Provider as_enum);
Gate3Provider ParseGate3Provider(std::string_view as_string);
std::u16string GetGate3ProviderParseError(std::string_view as_string);

struct Gate3ChainSpec {
  Gate3ChainSpec();
  ~Gate3ChainSpec();
  Gate3ChainSpec(const Gate3ChainSpec&) = delete;
  Gate3ChainSpec& operator=(const Gate3ChainSpec&) = delete;
  Gate3ChainSpec(Gate3ChainSpec&& rhs) noexcept;
  Gate3ChainSpec& operator=(Gate3ChainSpec&& rhs) noexcept;

  // Populates a Gate3ChainSpec object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Gate3ChainSpec& out);

  // Populates a Gate3ChainSpec object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, Gate3ChainSpec& out);

  // Creates a deep copy of Gate3ChainSpec.
  Gate3ChainSpec Clone() const;

  // Creates a Gate3ChainSpec object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<Gate3ChainSpec> FromValue(const base::DictValue& value);

  // Creates a Gate3ChainSpec object from a base::Value, or nullopt on failure.
  static std::optional<Gate3ChainSpec> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisGate3ChainSpec object.
  base::DictValue ToValue() const;

  std::string coin;

  std::string chain_id;

};

struct Gate3SwapEvmTransactionParams {
  Gate3SwapEvmTransactionParams();
  ~Gate3SwapEvmTransactionParams();
  Gate3SwapEvmTransactionParams(const Gate3SwapEvmTransactionParams&) = delete;
  Gate3SwapEvmTransactionParams& operator=(const Gate3SwapEvmTransactionParams&) = delete;
  Gate3SwapEvmTransactionParams(Gate3SwapEvmTransactionParams&& rhs) noexcept;
  Gate3SwapEvmTransactionParams& operator=(Gate3SwapEvmTransactionParams&& rhs) noexcept;

  // Populates a Gate3SwapEvmTransactionParams object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Gate3SwapEvmTransactionParams& out);

  // Populates a Gate3SwapEvmTransactionParams object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, Gate3SwapEvmTransactionParams& out);

  // Creates a deep copy of Gate3SwapEvmTransactionParams.
  Gate3SwapEvmTransactionParams Clone() const;

  // Creates a Gate3SwapEvmTransactionParams object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<Gate3SwapEvmTransactionParams> FromValue(const base::DictValue& value);

  // Creates a Gate3SwapEvmTransactionParams object from a base::Value, or
  // nullopt on failure.
  static std::optional<Gate3SwapEvmTransactionParams> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisGate3SwapEvmTransactionParams object.
  base::DictValue ToValue() const;

  Gate3ChainSpec chain;

  std::string from;

  std::string to;

  std::string value;

  std::string data;

  std::string gas_limit;

  base::Value gas_price;

};

struct Gate3SwapSolanaTransactionParams {
  Gate3SwapSolanaTransactionParams();
  ~Gate3SwapSolanaTransactionParams();
  Gate3SwapSolanaTransactionParams(const Gate3SwapSolanaTransactionParams&) = delete;
  Gate3SwapSolanaTransactionParams& operator=(const Gate3SwapSolanaTransactionParams&) = delete;
  Gate3SwapSolanaTransactionParams(Gate3SwapSolanaTransactionParams&& rhs) noexcept;
  Gate3SwapSolanaTransactionParams& operator=(Gate3SwapSolanaTransactionParams&& rhs) noexcept;

  // Populates a Gate3SwapSolanaTransactionParams object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Gate3SwapSolanaTransactionParams& out);

  // Populates a Gate3SwapSolanaTransactionParams object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, Gate3SwapSolanaTransactionParams& out);

  // Creates a deep copy of Gate3SwapSolanaTransactionParams.
  Gate3SwapSolanaTransactionParams Clone() const;

  // Creates a Gate3SwapSolanaTransactionParams object from a base::DictValue,
  // or nullopt on failure.
  static std::optional<Gate3SwapSolanaTransactionParams> FromValue(const base::DictValue& value);

  // Creates a Gate3SwapSolanaTransactionParams object from a base::Value, or
  // nullopt on failure.
  static std::optional<Gate3SwapSolanaTransactionParams> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisGate3SwapSolanaTransactionParams object.
  base::DictValue ToValue() const;

  Gate3ChainSpec chain;

  std::string from;

  std::string to;

  std::string lamports;

  base::Value spl_token_mint;

  base::Value spl_token_amount;

  base::Value decimals;

  base::Value versioned_transaction;

  base::Value compute_unit_limit;

  base::Value compute_unit_price;

};

struct Gate3SwapBitcoinTransactionParams {
  Gate3SwapBitcoinTransactionParams();
  ~Gate3SwapBitcoinTransactionParams();
  Gate3SwapBitcoinTransactionParams(const Gate3SwapBitcoinTransactionParams&) = delete;
  Gate3SwapBitcoinTransactionParams& operator=(const Gate3SwapBitcoinTransactionParams&) = delete;
  Gate3SwapBitcoinTransactionParams(Gate3SwapBitcoinTransactionParams&& rhs) noexcept;
  Gate3SwapBitcoinTransactionParams& operator=(Gate3SwapBitcoinTransactionParams&& rhs) noexcept;

  // Populates a Gate3SwapBitcoinTransactionParams object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Gate3SwapBitcoinTransactionParams& out);

  // Populates a Gate3SwapBitcoinTransactionParams object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, Gate3SwapBitcoinTransactionParams& out);

  // Creates a deep copy of Gate3SwapBitcoinTransactionParams.
  Gate3SwapBitcoinTransactionParams Clone() const;

  // Creates a Gate3SwapBitcoinTransactionParams object from a base::DictValue,
  // or nullopt on failure.
  static std::optional<Gate3SwapBitcoinTransactionParams> FromValue(const base::DictValue& value);

  // Creates a Gate3SwapBitcoinTransactionParams object from a base::Value, or
  // nullopt on failure.
  static std::optional<Gate3SwapBitcoinTransactionParams> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisGate3SwapBitcoinTransactionParams object.
  base::DictValue ToValue() const;

  Gate3ChainSpec chain;

  std::string to;

  std::string value;

  std::string refund_to;

};

struct Gate3SwapCardanoTransactionParams {
  Gate3SwapCardanoTransactionParams();
  ~Gate3SwapCardanoTransactionParams();
  Gate3SwapCardanoTransactionParams(const Gate3SwapCardanoTransactionParams&) = delete;
  Gate3SwapCardanoTransactionParams& operator=(const Gate3SwapCardanoTransactionParams&) = delete;
  Gate3SwapCardanoTransactionParams(Gate3SwapCardanoTransactionParams&& rhs) noexcept;
  Gate3SwapCardanoTransactionParams& operator=(Gate3SwapCardanoTransactionParams&& rhs) noexcept;

  // Populates a Gate3SwapCardanoTransactionParams object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Gate3SwapCardanoTransactionParams& out);

  // Populates a Gate3SwapCardanoTransactionParams object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, Gate3SwapCardanoTransactionParams& out);

  // Creates a deep copy of Gate3SwapCardanoTransactionParams.
  Gate3SwapCardanoTransactionParams Clone() const;

  // Creates a Gate3SwapCardanoTransactionParams object from a base::DictValue,
  // or nullopt on failure.
  static std::optional<Gate3SwapCardanoTransactionParams> FromValue(const base::DictValue& value);

  // Creates a Gate3SwapCardanoTransactionParams object from a base::Value, or
  // nullopt on failure.
  static std::optional<Gate3SwapCardanoTransactionParams> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisGate3SwapCardanoTransactionParams object.
  base::DictValue ToValue() const;

  Gate3ChainSpec chain;

  std::string to;

  std::string value;

  std::string refund_to;

};

struct Gate3SwapZCashTransactionParams {
  Gate3SwapZCashTransactionParams();
  ~Gate3SwapZCashTransactionParams();
  Gate3SwapZCashTransactionParams(const Gate3SwapZCashTransactionParams&) = delete;
  Gate3SwapZCashTransactionParams& operator=(const Gate3SwapZCashTransactionParams&) = delete;
  Gate3SwapZCashTransactionParams(Gate3SwapZCashTransactionParams&& rhs) noexcept;
  Gate3SwapZCashTransactionParams& operator=(Gate3SwapZCashTransactionParams&& rhs) noexcept;

  // Populates a Gate3SwapZCashTransactionParams object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Gate3SwapZCashTransactionParams& out);

  // Populates a Gate3SwapZCashTransactionParams object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, Gate3SwapZCashTransactionParams& out);

  // Creates a deep copy of Gate3SwapZCashTransactionParams.
  Gate3SwapZCashTransactionParams Clone() const;

  // Creates a Gate3SwapZCashTransactionParams object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<Gate3SwapZCashTransactionParams> FromValue(const base::DictValue& value);

  // Creates a Gate3SwapZCashTransactionParams object from a base::Value, or
  // nullopt on failure.
  static std::optional<Gate3SwapZCashTransactionParams> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisGate3SwapZCashTransactionParams object.
  base::DictValue ToValue() const;

  Gate3ChainSpec chain;

  std::string to;

  std::string value;

  std::string refund_to;

};

struct Gate3SwapTool {
  Gate3SwapTool();
  ~Gate3SwapTool();
  Gate3SwapTool(const Gate3SwapTool&) = delete;
  Gate3SwapTool& operator=(const Gate3SwapTool&) = delete;
  Gate3SwapTool(Gate3SwapTool&& rhs) noexcept;
  Gate3SwapTool& operator=(Gate3SwapTool&& rhs) noexcept;

  // Populates a Gate3SwapTool object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Gate3SwapTool& out);

  // Populates a Gate3SwapTool object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, Gate3SwapTool& out);

  // Creates a deep copy of Gate3SwapTool.
  Gate3SwapTool Clone() const;

  // Creates a Gate3SwapTool object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<Gate3SwapTool> FromValue(const base::DictValue& value);

  // Creates a Gate3SwapTool object from a base::Value, or nullopt on failure.
  static std::optional<Gate3SwapTool> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisGate3SwapTool object.
  base::DictValue ToValue() const;

  std::string name;

  base::Value logo;

};

struct Gate3SwapStepToken {
  Gate3SwapStepToken();
  ~Gate3SwapStepToken();
  Gate3SwapStepToken(const Gate3SwapStepToken&) = delete;
  Gate3SwapStepToken& operator=(const Gate3SwapStepToken&) = delete;
  Gate3SwapStepToken(Gate3SwapStepToken&& rhs) noexcept;
  Gate3SwapStepToken& operator=(Gate3SwapStepToken&& rhs) noexcept;

  // Populates a Gate3SwapStepToken object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Gate3SwapStepToken& out);

  // Populates a Gate3SwapStepToken object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, Gate3SwapStepToken& out);

  // Creates a deep copy of Gate3SwapStepToken.
  Gate3SwapStepToken Clone() const;

  // Creates a Gate3SwapStepToken object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<Gate3SwapStepToken> FromValue(const base::DictValue& value);

  // Creates a Gate3SwapStepToken object from a base::Value, or nullopt on
  // failure.
  static std::optional<Gate3SwapStepToken> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisGate3SwapStepToken object.
  base::DictValue ToValue() const;

  std::string coin;

  std::string chain_id;

  base::Value contract_address;

  std::string symbol;

  // DOMString decimals;  // Unused in parsing; kept for reference.
  base::Value logo;

};

struct Gate3SwapRouteStep {
  Gate3SwapRouteStep();
  ~Gate3SwapRouteStep();
  Gate3SwapRouteStep(const Gate3SwapRouteStep&) = delete;
  Gate3SwapRouteStep& operator=(const Gate3SwapRouteStep&) = delete;
  Gate3SwapRouteStep(Gate3SwapRouteStep&& rhs) noexcept;
  Gate3SwapRouteStep& operator=(Gate3SwapRouteStep&& rhs) noexcept;

  // Populates a Gate3SwapRouteStep object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Gate3SwapRouteStep& out);

  // Populates a Gate3SwapRouteStep object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, Gate3SwapRouteStep& out);

  // Creates a deep copy of Gate3SwapRouteStep.
  Gate3SwapRouteStep Clone() const;

  // Creates a Gate3SwapRouteStep object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<Gate3SwapRouteStep> FromValue(const base::DictValue& value);

  // Creates a Gate3SwapRouteStep object from a base::Value, or nullopt on
  // failure.
  static std::optional<Gate3SwapRouteStep> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisGate3SwapRouteStep object.
  base::DictValue ToValue() const;

  Gate3SwapStepToken source_token;

  std::string source_amount;

  Gate3SwapStepToken destination_token;

  std::string destination_amount;

  Gate3SwapTool tool;

  std::string percent;

};

struct Gate3SwapNetworkFee {
  Gate3SwapNetworkFee();
  ~Gate3SwapNetworkFee();
  Gate3SwapNetworkFee(const Gate3SwapNetworkFee&) = delete;
  Gate3SwapNetworkFee& operator=(const Gate3SwapNetworkFee&) = delete;
  Gate3SwapNetworkFee(Gate3SwapNetworkFee&& rhs) noexcept;
  Gate3SwapNetworkFee& operator=(Gate3SwapNetworkFee&& rhs) noexcept;

  // Populates a Gate3SwapNetworkFee object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Gate3SwapNetworkFee& out);

  // Populates a Gate3SwapNetworkFee object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, Gate3SwapNetworkFee& out);

  // Creates a deep copy of Gate3SwapNetworkFee.
  Gate3SwapNetworkFee Clone() const;

  // Creates a Gate3SwapNetworkFee object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<Gate3SwapNetworkFee> FromValue(const base::DictValue& value);

  // Creates a Gate3SwapNetworkFee object from a base::Value, or nullopt on
  // failure.
  static std::optional<Gate3SwapNetworkFee> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisGate3SwapNetworkFee object.
  base::DictValue ToValue() const;

  std::string amount;

  std::string decimals;

  std::string symbol;

};

struct Gate3SwapRoute {
  Gate3SwapRoute();
  ~Gate3SwapRoute();
  Gate3SwapRoute(const Gate3SwapRoute&) = delete;
  Gate3SwapRoute& operator=(const Gate3SwapRoute&) = delete;
  Gate3SwapRoute(Gate3SwapRoute&& rhs) noexcept;
  Gate3SwapRoute& operator=(Gate3SwapRoute&& rhs) noexcept;

  // Populates a Gate3SwapRoute object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Gate3SwapRoute& out);

  // Populates a Gate3SwapRoute object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, Gate3SwapRoute& out);

  // Creates a deep copy of Gate3SwapRoute.
  Gate3SwapRoute Clone() const;

  // Creates a Gate3SwapRoute object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<Gate3SwapRoute> FromValue(const base::DictValue& value);

  // Creates a Gate3SwapRoute object from a base::Value, or nullopt on failure.
  static std::optional<Gate3SwapRoute> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisGate3SwapRoute object.
  base::DictValue ToValue() const;

  std::string id;

  Gate3Provider provider;

  std::vector<Gate3SwapRouteStep> steps;

  std::string source_amount;

  std::string destination_amount;

  std::string destination_amount_min;

  base::Value estimated_time;

  base::Value price_impact;

  base::Value network_fee;

  bool gasless;

  base::Value deposit_address;

  base::Value deposit_memo;

  base::Value expires_at;

  std::string slippage_percentage;

  // <p>Nullable union field of the following structs:  -
  // Gate3SwapEvmTransactionParams  - Gate3SwapSolanaTransactionParams  -
  // Gate3SwapBitcoinTransactionParams  - Gate3SwapCardanoTransactionParams  -
  // Gate3SwapZCashTransactionParams</p><p>Schema:  {    evm:
  // Gate3SwapEvmTransactionParams  or null    solana:
  // Gate3SwapSolanaTransactionParams or null    bitcoin:
  // Gate3SwapBitcoinTransactionParams or null    cardano:
  // Gate3SwapCardanoTransactionParams or null    zcash:
  // Gate3SwapZCashTransactionParams or null  }</p>
  base::Value transaction_params;

  // Provider-specific requirements
  bool requires_token_allowance;

  bool requires_firm_route;

};

struct Gate3Quote {
  Gate3Quote();
  ~Gate3Quote();
  Gate3Quote(const Gate3Quote&) = delete;
  Gate3Quote& operator=(const Gate3Quote&) = delete;
  Gate3Quote(Gate3Quote&& rhs) noexcept;
  Gate3Quote& operator=(Gate3Quote&& rhs) noexcept;

  // Populates a Gate3Quote object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Gate3Quote& out);

  // Populates a Gate3Quote object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, Gate3Quote& out);

  // Creates a deep copy of Gate3Quote.
  Gate3Quote Clone() const;

  // Creates a Gate3Quote object from a base::DictValue, or nullopt on failure.
  static std::optional<Gate3Quote> FromValue(const base::DictValue& value);

  // Creates a Gate3Quote object from a base::Value, or nullopt on failure.
  static std::optional<Gate3Quote> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisGate3Quote object.
  base::DictValue ToValue() const;

  std::vector<Gate3SwapRoute> routes;

};

enum class Gate3StatusCode {
  kNone = 0,
  kPending,
  kProcessing,
  kSuccess,
  kFailed,
  kRefunded,
  kMaxValue = kRefunded,
};


const char* ToString(Gate3StatusCode as_enum);
Gate3StatusCode ParseGate3StatusCode(std::string_view as_string);
std::u16string GetGate3StatusCodeParseError(std::string_view as_string);

struct Gate3StatusResponse {
  Gate3StatusResponse();
  ~Gate3StatusResponse();
  Gate3StatusResponse(const Gate3StatusResponse&) = delete;
  Gate3StatusResponse& operator=(const Gate3StatusResponse&) = delete;
  Gate3StatusResponse(Gate3StatusResponse&& rhs) noexcept;
  Gate3StatusResponse& operator=(Gate3StatusResponse&& rhs) noexcept;

  // Populates a Gate3StatusResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Gate3StatusResponse& out);

  // Populates a Gate3StatusResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, Gate3StatusResponse& out);

  // Creates a deep copy of Gate3StatusResponse.
  Gate3StatusResponse Clone() const;

  // Creates a Gate3StatusResponse object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<Gate3StatusResponse> FromValue(const base::DictValue& value);

  // Creates a Gate3StatusResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<Gate3StatusResponse> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisGate3StatusResponse object.
  base::DictValue ToValue() const;

  Gate3StatusCode status;

  std::string internal_status;

  std::string explorer_url;

};

enum class Gate3ErrorKind {
  kNone = 0,
  kInsufficientLiquidity,
  kAmountTooLow,
  kUnsupportedNetwork,
  kUnsupportedTokens,
  kInvalidRequest,
  kUnknown,
  kMaxValue = kUnknown,
};


const char* ToString(Gate3ErrorKind as_enum);
Gate3ErrorKind ParseGate3ErrorKind(std::string_view as_string);
std::u16string GetGate3ErrorKindParseError(std::string_view as_string);

struct Gate3Error {
  Gate3Error();
  ~Gate3Error();
  Gate3Error(const Gate3Error&) = delete;
  Gate3Error& operator=(const Gate3Error&) = delete;
  Gate3Error(Gate3Error&& rhs) noexcept;
  Gate3Error& operator=(Gate3Error&& rhs) noexcept;

  // Populates a Gate3Error object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Gate3Error& out);

  // Populates a Gate3Error object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, Gate3Error& out);

  // Creates a deep copy of Gate3Error.
  Gate3Error Clone() const;

  // Creates a Gate3Error object from a base::DictValue, or nullopt on failure.
  static std::optional<Gate3Error> FromValue(const base::DictValue& value);

  // Creates a Gate3Error object from a base::Value, or nullopt on failure.
  static std::optional<Gate3Error> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisGate3Error object.
  base::DictValue ToValue() const;

  std::string message;

  Gate3ErrorKind kind;

};


}  // namespace swap_responses
}  // namespace brave_wallet

#endif  // BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_SWAP_RESPONSES_H__
