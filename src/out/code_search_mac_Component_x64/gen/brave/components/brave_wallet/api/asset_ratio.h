// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_wallet/api/asset_ratio.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_wallet/api/asset_ratio.idl --root=../../ --destdir=gen --namespace=brave_wallet::api::%(namespace)s --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_BRAVE_WALLET_API_ASSET_RATIO_H__
#define BRAVE_COMPONENTS_BRAVE_WALLET_API_ASSET_RATIO_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace brave_wallet {
namespace api {
namespace asset_ratio {

//
// Types
//

struct CoinMarketPayload {
  CoinMarketPayload();
  ~CoinMarketPayload();
  CoinMarketPayload(const CoinMarketPayload&) = delete;
  CoinMarketPayload& operator=(const CoinMarketPayload&) = delete;
  CoinMarketPayload(CoinMarketPayload&& rhs) noexcept;
  CoinMarketPayload& operator=(CoinMarketPayload&& rhs) noexcept;

  // Populates a CoinMarketPayload object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CoinMarketPayload& out);

  // Populates a CoinMarketPayload object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, CoinMarketPayload& out);

  // Creates a deep copy of CoinMarketPayload.
  CoinMarketPayload Clone() const;

  // Creates a CoinMarketPayload object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<CoinMarketPayload> FromValue(const base::DictValue& value);

  // Creates a CoinMarketPayload object from a base::Value, or nullopt on
  // failure.
  static std::optional<CoinMarketPayload> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCoinMarketPayload object.
  base::DictValue ToValue() const;

  // e.g. "bitcoin"
  std::string id;

  // e.g. "btc"
  std::string symbol;

  // e.g. "Bitcoin"
  std::string name;

  // An url for the coin image.
  std::string image;

  // e.g. 727960800075
  double market_cap;

  // e.g. 1
  int market_cap_rank;

  // e.g 38357
  double current_price;

  // e.g. -1229.64683216549
  double price_change_24h;

  // e.g. -3.10625
  double price_change_percentage_24h;

  // e.g. 17160995925
  double total_volume;

};

struct CoinMarket {
  CoinMarket();
  ~CoinMarket();
  CoinMarket(const CoinMarket&) = delete;
  CoinMarket& operator=(const CoinMarket&) = delete;
  CoinMarket(CoinMarket&& rhs) noexcept;
  CoinMarket& operator=(CoinMarket&& rhs) noexcept;

  // Populates a CoinMarket object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, CoinMarket& out);

  // Populates a CoinMarket object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, CoinMarket& out);

  // Creates a deep copy of CoinMarket.
  CoinMarket Clone() const;

  // Creates a CoinMarket object from a base::DictValue, or nullopt on failure.
  static std::optional<CoinMarket> FromValue(const base::DictValue& value);

  // Creates a CoinMarket object from a base::Value, or nullopt on failure.
  static std::optional<CoinMarket> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCoinMarket object.
  base::DictValue ToValue() const;

  // A payload list.
  std::vector<CoinMarketPayload> payload;

};

struct StripeBuyURLResponse {
  StripeBuyURLResponse();
  ~StripeBuyURLResponse();
  StripeBuyURLResponse(const StripeBuyURLResponse&) = delete;
  StripeBuyURLResponse& operator=(const StripeBuyURLResponse&) = delete;
  StripeBuyURLResponse(StripeBuyURLResponse&& rhs) noexcept;
  StripeBuyURLResponse& operator=(StripeBuyURLResponse&& rhs) noexcept;

  // Populates a StripeBuyURLResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StripeBuyURLResponse& out);

  // Populates a StripeBuyURLResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, StripeBuyURLResponse& out);

  // Creates a deep copy of StripeBuyURLResponse.
  StripeBuyURLResponse Clone() const;

  // Creates a StripeBuyURLResponse object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<StripeBuyURLResponse> FromValue(const base::DictValue& value);

  // Creates a StripeBuyURLResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<StripeBuyURLResponse> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisStripeBuyURLResponse object.
  base::DictValue ToValue() const;

  // e.g "https://crypto.link.com?session_hash=abcdefgh"
  std::string url;

};

struct AssetPricePayload {
  AssetPricePayload();
  ~AssetPricePayload();
  AssetPricePayload(const AssetPricePayload&) = delete;
  AssetPricePayload& operator=(const AssetPricePayload&) = delete;
  AssetPricePayload(AssetPricePayload&& rhs) noexcept;
  AssetPricePayload& operator=(AssetPricePayload&& rhs) noexcept;

  // Populates a AssetPricePayload object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AssetPricePayload& out);

  // Populates a AssetPricePayload object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AssetPricePayload& out);

  // Creates a deep copy of AssetPricePayload.
  AssetPricePayload Clone() const;

  // Creates a AssetPricePayload object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<AssetPricePayload> FromValue(const base::DictValue& value);

  // Creates a AssetPricePayload object from a base::Value, or nullopt on
  // failure.
  static std::optional<AssetPricePayload> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAssetPricePayload object.
  base::DictValue ToValue() const;

  // e.g. "ETH"
  std::string coin;

  // e.g. "0x1"
  std::string chain_id;

  // Nullable optional DOMString field e.g.
  // "0x0D8775F648430679A709E98d2b0Cb6250d2887EF" or null
  std::optional<base::Value> address;

  // e.g. "0.55393"
  std::string price;

  // Nullable optional DOMString field e.g. "0.1" or null
  std::optional<base::Value> percentage_change_24h;

  // e.g. "USD"
  std::string vs_currency;

  // "HIT" or "MISS"
  std::string cache_status;

  // e.g. "coingecko" or "jupiter"
  std::string source;

};


}  // namespace asset_ratio
}  // namespace api
}  // namespace brave_wallet

#endif  // BRAVE_COMPONENTS_BRAVE_WALLET_API_ASSET_RATIO_H__
