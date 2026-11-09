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

#include "brave/components/brave_wallet/api/asset_ratio.h"

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
namespace api {
namespace asset_ratio {
//
// Types
//

CoinMarketPayload::CoinMarketPayload()
: market_cap(0.0),
market_cap_rank(0),
current_price(0.0),
price_change_24h(0.0),
price_change_percentage_24h(0.0),
total_volume(0.0) {}

CoinMarketPayload::~CoinMarketPayload() = default;
CoinMarketPayload::CoinMarketPayload(CoinMarketPayload&& rhs) noexcept = default;
CoinMarketPayload& CoinMarketPayload::operator=(CoinMarketPayload&& rhs) noexcept = default;
CoinMarketPayload CoinMarketPayload::Clone() const {
  CoinMarketPayload out;
  out.id = id;
  out.symbol = symbol;
  out.name = name;
  out.image = image;
  out.market_cap = market_cap;
  out.market_cap_rank = market_cap_rank;
  out.current_price = current_price;
  out.price_change_24h = price_change_24h;
  out.price_change_percentage_24h = price_change_percentage_24h;
  out.total_volume = total_volume;
  return out;
}

// static
bool CoinMarketPayload::Populate(
    const base::DictValue& dict, CoinMarketPayload& out) {
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

  const base::Value* image_value = dict.Find("image");
  if (!image_value) {
    return false;
  }
  {
    auto* temp = (*image_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.image = *temp;
  }

  const base::Value* market_cap_value = dict.Find("market_cap");
  if (!market_cap_value) {
    return false;
  }
  {
    auto temp = (*market_cap_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.market_cap = *temp;
  }

  const base::Value* market_cap_rank_value = dict.Find("market_cap_rank");
  if (!market_cap_rank_value) {
    return false;
  }
  {
    auto temp = (*market_cap_rank_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.market_cap_rank = *temp;
  }

  const base::Value* current_price_value = dict.Find("current_price");
  if (!current_price_value) {
    return false;
  }
  {
    auto temp = (*current_price_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.current_price = *temp;
  }

  const base::Value* price_change_24h_value = dict.Find("price_change_24h");
  if (!price_change_24h_value) {
    return false;
  }
  {
    auto temp = (*price_change_24h_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.price_change_24h = *temp;
  }

  const base::Value* price_change_percentage_24h_value = dict.Find("price_change_percentage_24h");
  if (!price_change_percentage_24h_value) {
    return false;
  }
  {
    auto temp = (*price_change_percentage_24h_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.price_change_percentage_24h = *temp;
  }

  const base::Value* total_volume_value = dict.Find("total_volume");
  if (!total_volume_value) {
    return false;
  }
  {
    auto temp = (*total_volume_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.total_volume = *temp;
  }

  return true;
}

// static
bool CoinMarketPayload::Populate(
    const base::Value& value, CoinMarketPayload& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CoinMarketPayload> CoinMarketPayload::FromValue(const base::DictValue& value) {
  CoinMarketPayload out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CoinMarketPayload> CoinMarketPayload::FromValue(const base::Value& value) {
  CoinMarketPayload out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue CoinMarketPayload::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("symbol", this->symbol);

  to_value_result.Set("name", this->name);

  to_value_result.Set("image", this->image);

  to_value_result.Set("market_cap", this->market_cap);

  to_value_result.Set("market_cap_rank", this->market_cap_rank);

  to_value_result.Set("current_price", this->current_price);

  to_value_result.Set("price_change_24h", this->price_change_24h);

  to_value_result.Set("price_change_percentage_24h", this->price_change_percentage_24h);

  to_value_result.Set("total_volume", this->total_volume);


  return to_value_result;
}


CoinMarket::CoinMarket()
 {}

CoinMarket::~CoinMarket() = default;
CoinMarket::CoinMarket(CoinMarket&& rhs) noexcept = default;
CoinMarket& CoinMarket::operator=(CoinMarket&& rhs) noexcept = default;
CoinMarket CoinMarket::Clone() const {
  CoinMarket out;
  out.payload.reserve(payload.size());
  for (const auto& element : payload) {
    json_schema_compiler::util::AppendToContainer(out.payload, element.Clone());
  }
  return out;
}

// static
bool CoinMarket::Populate(
    const base::DictValue& dict, CoinMarket& out) {
  const base::Value* payload_value = dict.Find("payload");
  if (!payload_value) {
    return false;
  }
  {
    if (!(*payload_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*payload_value).GetList(), out.payload)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool CoinMarket::Populate(
    const base::Value& value, CoinMarket& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CoinMarket> CoinMarket::FromValue(const base::DictValue& value) {
  CoinMarket out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CoinMarket> CoinMarket::FromValue(const base::Value& value) {
  CoinMarket out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue CoinMarket::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("payload", json_schema_compiler::util::CreateValueFromArray(this->payload));


  return to_value_result;
}


StripeBuyURLResponse::StripeBuyURLResponse()
 {}

StripeBuyURLResponse::~StripeBuyURLResponse() = default;
StripeBuyURLResponse::StripeBuyURLResponse(StripeBuyURLResponse&& rhs) noexcept = default;
StripeBuyURLResponse& StripeBuyURLResponse::operator=(StripeBuyURLResponse&& rhs) noexcept = default;
StripeBuyURLResponse StripeBuyURLResponse::Clone() const {
  StripeBuyURLResponse out;
  out.url = url;
  return out;
}

// static
bool StripeBuyURLResponse::Populate(
    const base::DictValue& dict, StripeBuyURLResponse& out) {
  const base::Value* url_value = dict.Find("url");
  if (!url_value) {
    return false;
  }
  {
    auto* temp = (*url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.url = *temp;
  }

  return true;
}

// static
bool StripeBuyURLResponse::Populate(
    const base::Value& value, StripeBuyURLResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<StripeBuyURLResponse> StripeBuyURLResponse::FromValue(const base::DictValue& value) {
  StripeBuyURLResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StripeBuyURLResponse> StripeBuyURLResponse::FromValue(const base::Value& value) {
  StripeBuyURLResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue StripeBuyURLResponse::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("url", this->url);


  return to_value_result;
}


AssetPricePayload::AssetPricePayload()
 {}

AssetPricePayload::~AssetPricePayload() = default;
AssetPricePayload::AssetPricePayload(AssetPricePayload&& rhs) noexcept = default;
AssetPricePayload& AssetPricePayload::operator=(AssetPricePayload&& rhs) noexcept = default;
AssetPricePayload AssetPricePayload::Clone() const {
  AssetPricePayload out;
  out.coin = coin;
  out.chain_id = chain_id;
  if (address) {
    out.address = address->Clone();
  }
  out.price = price;
  if (percentage_change_24h) {
    out.percentage_change_24h = percentage_change_24h->Clone();
  }
  out.vs_currency = vs_currency;
  out.cache_status = cache_status;
  out.source = source;
  return out;
}

// static
bool AssetPricePayload::Populate(
    const base::DictValue& dict, AssetPricePayload& out) {
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

  const base::Value* chain_id_value = dict.Find("chain_id");
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

  const base::Value* address_value = dict.Find("address");
  if (address_value) {
    {
      out.address = (*address_value).Clone();
    }
  }

  const base::Value* price_value = dict.Find("price");
  if (!price_value) {
    return false;
  }
  {
    auto* temp = (*price_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.price = *temp;
  }

  const base::Value* percentage_change_24h_value = dict.Find("percentage_change_24h");
  if (percentage_change_24h_value) {
    {
      out.percentage_change_24h = (*percentage_change_24h_value).Clone();
    }
  }

  const base::Value* vs_currency_value = dict.Find("vs_currency");
  if (!vs_currency_value) {
    return false;
  }
  {
    auto* temp = (*vs_currency_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.vs_currency = *temp;
  }

  const base::Value* cache_status_value = dict.Find("cache_status");
  if (!cache_status_value) {
    return false;
  }
  {
    auto* temp = (*cache_status_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.cache_status = *temp;
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

  return true;
}

// static
bool AssetPricePayload::Populate(
    const base::Value& value, AssetPricePayload& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AssetPricePayload> AssetPricePayload::FromValue(const base::DictValue& value) {
  AssetPricePayload out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AssetPricePayload> AssetPricePayload::FromValue(const base::Value& value) {
  AssetPricePayload out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AssetPricePayload::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("coin", this->coin);

  to_value_result.Set("chain_id", this->chain_id);

  if (this->address) {
    to_value_result.Set("address", (this->address)->Clone());

  }
  to_value_result.Set("price", this->price);

  if (this->percentage_change_24h) {
    to_value_result.Set("percentage_change_24h", (this->percentage_change_24h)->Clone());

  }
  to_value_result.Set("vs_currency", this->vs_currency);

  to_value_result.Set("cache_status", this->cache_status);

  to_value_result.Set("source", this->source);


  return to_value_result;
}



}  // namespace asset_ratio
}  // namespace api
}  // namespace brave_wallet

