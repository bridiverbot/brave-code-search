// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_wallet/browser/meld_integration_responses.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_wallet/browser/meld_integration_responses.idl --root=../../ --destdir=gen --namespace=brave_wallet::%(namespace)s --generator=cpp --include-rules=

#include "brave/components/brave_wallet/browser/meld_integration_responses.h"

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
namespace meld_integration_responses {
//
// Types
//

Logos::Logos()
 {}

Logos::~Logos() = default;
Logos::Logos(Logos&& rhs) noexcept = default;
Logos& Logos::operator=(Logos&& rhs) noexcept = default;
Logos Logos::Clone() const {
  Logos out;
  out.dark_short = dark_short;
  out.light_short = light_short;
  return out;
}

// static
bool Logos::Populate(
    const base::DictValue& dict, Logos& out) {
  const base::Value* dark_short_value = dict.Find("darkShort");
  if (dark_short_value) {
    {
      auto* temp = (*dark_short_value).GetIfString();
      if (!temp) {
        out.dark_short = std::nullopt;
        return false;
      }
      out.dark_short = *temp;
    }
  }

  const base::Value* light_short_value = dict.Find("lightShort");
  if (light_short_value) {
    {
      auto* temp = (*light_short_value).GetIfString();
      if (!temp) {
        out.light_short = std::nullopt;
        return false;
      }
      out.light_short = *temp;
    }
  }

  return true;
}

// static
bool Logos::Populate(
    const base::Value& value, Logos& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Logos> Logos::FromValue(const base::DictValue& value) {
  Logos out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Logos> Logos::FromValue(const base::Value& value) {
  Logos out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Logos::ToValue() const {
  base::DictValue to_value_result;

  if (this->dark_short) {
    to_value_result.Set("darkShort", *this->dark_short);

  }
  if (this->light_short) {
    to_value_result.Set("lightShort", *this->light_short);

  }

  return to_value_result;
}


Country::Country()
 {}

Country::~Country() = default;
Country::Country(Country&& rhs) noexcept = default;
Country& Country::operator=(Country&& rhs) noexcept = default;
Country Country::Clone() const {
  Country out;
  out.country_code = country_code;
  out.name = name;
  return out;
}

// static
bool Country::Populate(
    const base::DictValue& dict, Country& out) {
  const base::Value* country_code_value = dict.Find("countryCode");
  if (!country_code_value) {
    return false;
  }
  {
    auto* temp = (*country_code_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.country_code = *temp;
  }

  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    {
      auto* temp = (*name_value).GetIfString();
      if (!temp) {
        out.name = std::nullopt;
        return false;
      }
      out.name = *temp;
    }
  }

  return true;
}

// static
bool Country::Populate(
    const base::Value& value, Country& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Country> Country::FromValue(const base::DictValue& value) {
  Country out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Country> Country::FromValue(const base::Value& value) {
  Country out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Country::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("countryCode", this->country_code);

  if (this->name) {
    to_value_result.Set("name", *this->name);

  }

  return to_value_result;
}


CountriesResponse::CountriesResponse()
 {}

CountriesResponse::~CountriesResponse() = default;
CountriesResponse::CountriesResponse(CountriesResponse&& rhs) noexcept = default;
CountriesResponse& CountriesResponse::operator=(CountriesResponse&& rhs) noexcept = default;
CountriesResponse CountriesResponse::Clone() const {
  CountriesResponse out;
  out.countries.reserve(countries.size());
  for (const auto& element : countries) {
    json_schema_compiler::util::AppendToContainer(out.countries, element.Clone());
  }
  return out;
}

// static
bool CountriesResponse::Populate(
    const base::DictValue& dict, CountriesResponse& out) {
  const base::Value* countries_value = dict.Find("countries");
  if (!countries_value) {
    return false;
  }
  {
    if (!(*countries_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*countries_value).GetList(), out.countries)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool CountriesResponse::Populate(
    const base::Value& value, CountriesResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CountriesResponse> CountriesResponse::FromValue(const base::DictValue& value) {
  CountriesResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CountriesResponse> CountriesResponse::FromValue(const base::Value& value) {
  CountriesResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue CountriesResponse::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("countries", json_schema_compiler::util::CreateValueFromArray(this->countries));


  return to_value_result;
}


CryptoCurrency::CryptoCurrency()
 {}

CryptoCurrency::~CryptoCurrency() = default;
CryptoCurrency::CryptoCurrency(CryptoCurrency&& rhs) noexcept = default;
CryptoCurrency& CryptoCurrency::operator=(CryptoCurrency&& rhs) noexcept = default;
CryptoCurrency CryptoCurrency::Clone() const {
  CryptoCurrency out;
  out.currency_code = currency_code;
  out.name = name;
  out.chain_code = chain_code;
  out.chain_id = chain_id;
  out.contract = contract;
  out.symbol = symbol;
  return out;
}

// static
bool CryptoCurrency::Populate(
    const base::DictValue& dict, CryptoCurrency& out) {
  const base::Value* currency_code_value = dict.Find("currencyCode");
  if (!currency_code_value) {
    return false;
  }
  {
    auto* temp = (*currency_code_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.currency_code = *temp;
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

  const base::Value* chain_code_value = dict.Find("chainCode");
  if (!chain_code_value) {
    return false;
  }
  {
    auto* temp = (*chain_code_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.chain_code = *temp;
  }

  const base::Value* chain_id_value = dict.Find("chainId");
  if (chain_id_value) {
    {
      auto* temp = (*chain_id_value).GetIfString();
      if (!temp) {
        out.chain_id = std::nullopt;
        return false;
      }
      out.chain_id = *temp;
    }
  }

  const base::Value* contract_value = dict.Find("contract");
  if (contract_value) {
    {
      auto* temp = (*contract_value).GetIfString();
      if (!temp) {
        out.contract = std::nullopt;
        return false;
      }
      out.contract = *temp;
    }
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
bool CryptoCurrency::Populate(
    const base::Value& value, CryptoCurrency& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CryptoCurrency> CryptoCurrency::FromValue(const base::DictValue& value) {
  CryptoCurrency out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CryptoCurrency> CryptoCurrency::FromValue(const base::Value& value) {
  CryptoCurrency out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue CryptoCurrency::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("currencyCode", this->currency_code);

  to_value_result.Set("name", this->name);

  to_value_result.Set("chainCode", this->chain_code);

  if (this->chain_id) {
    to_value_result.Set("chainId", *this->chain_id);

  }
  if (this->contract) {
    to_value_result.Set("contract", *this->contract);

  }
  to_value_result.Set("symbol", this->symbol);


  return to_value_result;
}


CryptoCurrenciesResponse::CryptoCurrenciesResponse()
 {}

CryptoCurrenciesResponse::~CryptoCurrenciesResponse() = default;
CryptoCurrenciesResponse::CryptoCurrenciesResponse(CryptoCurrenciesResponse&& rhs) noexcept = default;
CryptoCurrenciesResponse& CryptoCurrenciesResponse::operator=(CryptoCurrenciesResponse&& rhs) noexcept = default;
CryptoCurrenciesResponse CryptoCurrenciesResponse::Clone() const {
  CryptoCurrenciesResponse out;
  out.currencies.reserve(currencies.size());
  for (const auto& element : currencies) {
    json_schema_compiler::util::AppendToContainer(out.currencies, element.Clone());
  }
  return out;
}

// static
bool CryptoCurrenciesResponse::Populate(
    const base::DictValue& dict, CryptoCurrenciesResponse& out) {
  const base::Value* currencies_value = dict.Find("currencies");
  if (!currencies_value) {
    return false;
  }
  {
    if (!(*currencies_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*currencies_value).GetList(), out.currencies)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool CryptoCurrenciesResponse::Populate(
    const base::Value& value, CryptoCurrenciesResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CryptoCurrenciesResponse> CryptoCurrenciesResponse::FromValue(const base::DictValue& value) {
  CryptoCurrenciesResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CryptoCurrenciesResponse> CryptoCurrenciesResponse::FromValue(const base::Value& value) {
  CryptoCurrenciesResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue CryptoCurrenciesResponse::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("currencies", json_schema_compiler::util::CreateValueFromArray(this->currencies));


  return to_value_result;
}


FiatCurrency::FiatCurrency()
 {}

FiatCurrency::~FiatCurrency() = default;
FiatCurrency::FiatCurrency(FiatCurrency&& rhs) noexcept = default;
FiatCurrency& FiatCurrency::operator=(FiatCurrency&& rhs) noexcept = default;
FiatCurrency FiatCurrency::Clone() const {
  FiatCurrency out;
  out.currency_code = currency_code;
  out.name = name;
  out.symbol = symbol;
  return out;
}

// static
bool FiatCurrency::Populate(
    const base::DictValue& dict, FiatCurrency& out) {
  const base::Value* currency_code_value = dict.Find("currencyCode");
  if (!currency_code_value) {
    return false;
  }
  {
    auto* temp = (*currency_code_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.currency_code = *temp;
  }

  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    {
      auto* temp = (*name_value).GetIfString();
      if (!temp) {
        out.name = std::nullopt;
        return false;
      }
      out.name = *temp;
    }
  }

  const base::Value* symbol_value = dict.Find("symbol");
  if (symbol_value) {
    {
      auto* temp = (*symbol_value).GetIfString();
      if (!temp) {
        out.symbol = std::nullopt;
        return false;
      }
      out.symbol = *temp;
    }
  }

  return true;
}

// static
bool FiatCurrency::Populate(
    const base::Value& value, FiatCurrency& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<FiatCurrency> FiatCurrency::FromValue(const base::DictValue& value) {
  FiatCurrency out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<FiatCurrency> FiatCurrency::FromValue(const base::Value& value) {
  FiatCurrency out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue FiatCurrency::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("currencyCode", this->currency_code);

  if (this->name) {
    to_value_result.Set("name", *this->name);

  }
  if (this->symbol) {
    to_value_result.Set("symbol", *this->symbol);

  }

  return to_value_result;
}


FiatCurrenciesResponse::FiatCurrenciesResponse()
 {}

FiatCurrenciesResponse::~FiatCurrenciesResponse() = default;
FiatCurrenciesResponse::FiatCurrenciesResponse(FiatCurrenciesResponse&& rhs) noexcept = default;
FiatCurrenciesResponse& FiatCurrenciesResponse::operator=(FiatCurrenciesResponse&& rhs) noexcept = default;
FiatCurrenciesResponse FiatCurrenciesResponse::Clone() const {
  FiatCurrenciesResponse out;
  out.currencies.reserve(currencies.size());
  for (const auto& element : currencies) {
    json_schema_compiler::util::AppendToContainer(out.currencies, element.Clone());
  }
  return out;
}

// static
bool FiatCurrenciesResponse::Populate(
    const base::DictValue& dict, FiatCurrenciesResponse& out) {
  const base::Value* currencies_value = dict.Find("currencies");
  if (!currencies_value) {
    return false;
  }
  {
    if (!(*currencies_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*currencies_value).GetList(), out.currencies)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool FiatCurrenciesResponse::Populate(
    const base::Value& value, FiatCurrenciesResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<FiatCurrenciesResponse> FiatCurrenciesResponse::FromValue(const base::DictValue& value) {
  FiatCurrenciesResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<FiatCurrenciesResponse> FiatCurrenciesResponse::FromValue(const base::Value& value) {
  FiatCurrenciesResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue FiatCurrenciesResponse::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("currencies", json_schema_compiler::util::CreateValueFromArray(this->currencies));


  return to_value_result;
}


PaymentMethodLogo::PaymentMethodLogo()
 {}

PaymentMethodLogo::~PaymentMethodLogo() = default;
PaymentMethodLogo::PaymentMethodLogo(PaymentMethodLogo&& rhs) noexcept = default;
PaymentMethodLogo& PaymentMethodLogo::operator=(PaymentMethodLogo&& rhs) noexcept = default;
PaymentMethodLogo PaymentMethodLogo::Clone() const {
  PaymentMethodLogo out;
  out.dark = dark;
  out.light = light;
  return out;
}

// static
bool PaymentMethodLogo::Populate(
    const base::DictValue& dict, PaymentMethodLogo& out) {
  const base::Value* dark_value = dict.Find("dark");
  if (dark_value) {
    {
      auto* temp = (*dark_value).GetIfString();
      if (!temp) {
        out.dark = std::nullopt;
        return false;
      }
      out.dark = *temp;
    }
  }

  const base::Value* light_value = dict.Find("light");
  if (light_value) {
    {
      auto* temp = (*light_value).GetIfString();
      if (!temp) {
        out.light = std::nullopt;
        return false;
      }
      out.light = *temp;
    }
  }

  return true;
}

// static
bool PaymentMethodLogo::Populate(
    const base::Value& value, PaymentMethodLogo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PaymentMethodLogo> PaymentMethodLogo::FromValue(const base::DictValue& value) {
  PaymentMethodLogo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PaymentMethodLogo> PaymentMethodLogo::FromValue(const base::Value& value) {
  PaymentMethodLogo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PaymentMethodLogo::ToValue() const {
  base::DictValue to_value_result;

  if (this->dark) {
    to_value_result.Set("dark", *this->dark);

  }
  if (this->light) {
    to_value_result.Set("light", *this->light);

  }

  return to_value_result;
}


PaymentMethod::PaymentMethod()
 {}

PaymentMethod::~PaymentMethod() = default;
PaymentMethod::PaymentMethod(PaymentMethod&& rhs) noexcept = default;
PaymentMethod& PaymentMethod::operator=(PaymentMethod&& rhs) noexcept = default;
PaymentMethod PaymentMethod::Clone() const {
  PaymentMethod out;
  out.method = method;
  out.name = name;
  out.type = type;
  if (logo) {
    out.logo = logo->Clone();
  }
  return out;
}

// static
bool PaymentMethod::Populate(
    const base::DictValue& dict, PaymentMethod& out) {
  const base::Value* method_value = dict.Find("method");
  if (!method_value) {
    return false;
  }
  {
    auto* temp = (*method_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.method = *temp;
  }

  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    {
      auto* temp = (*name_value).GetIfString();
      if (!temp) {
        out.name = std::nullopt;
        return false;
      }
      out.name = *temp;
    }
  }

  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      auto* temp = (*type_value).GetIfString();
      if (!temp) {
        out.type = std::nullopt;
        return false;
      }
      out.type = *temp;
    }
  }

  const base::Value* logo_value = dict.Find("logo");
  if (logo_value) {
    {
      if (!(*logo_value).is_dict()) {
        return false;
      }
      else {
        PaymentMethodLogo temp;
        if (!PaymentMethodLogo::Populate((*logo_value).GetDict(), temp))
          return false;
        out.logo = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool PaymentMethod::Populate(
    const base::Value& value, PaymentMethod& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PaymentMethod> PaymentMethod::FromValue(const base::DictValue& value) {
  PaymentMethod out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PaymentMethod> PaymentMethod::FromValue(const base::Value& value) {
  PaymentMethod out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PaymentMethod::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("method", this->method);

  if (this->name) {
    to_value_result.Set("name", *this->name);

  }
  if (this->type) {
    to_value_result.Set("type", *this->type);

  }
  if (this->logo) {
    to_value_result.Set("logo", (this->logo)->ToValue());

  }

  return to_value_result;
}


CryptoQuote::CryptoQuote()
 {}

CryptoQuote::~CryptoQuote() = default;
CryptoQuote::CryptoQuote(CryptoQuote&& rhs) noexcept = default;
CryptoQuote& CryptoQuote::operator=(CryptoQuote&& rhs) noexcept = default;
CryptoQuote CryptoQuote::Clone() const {
  CryptoQuote out;
  out.transaction_type = transaction_type;
  out.source_amount = source_amount;
  out.source_amount_without_fees = source_amount_without_fees;
  out.fiat_amount_without_fees = fiat_amount_without_fees;
  out.destination_amount_without_fees = destination_amount_without_fees;
  out.source_currency_code = source_currency_code;
  out.country_code = country_code;
  out.total_fee = total_fee;
  out.network_fee = network_fee;
  out.transaction_fee = transaction_fee;
  out.destination_amount = destination_amount;
  out.destination_currency_code = destination_currency_code;
  out.exchange_rate = exchange_rate;
  out.payment_method_type = payment_method_type;
  out.customer_score = customer_score;
  out.service_provider = service_provider;
  return out;
}

// static
bool CryptoQuote::Populate(
    const base::DictValue& dict, CryptoQuote& out) {
  const base::Value* transaction_type_value = dict.Find("transactionType");
  if (transaction_type_value) {
    {
      auto* temp = (*transaction_type_value).GetIfString();
      if (!temp) {
        out.transaction_type = std::nullopt;
        return false;
      }
      out.transaction_type = *temp;
    }
  }

  const base::Value* source_amount_value = dict.Find("sourceAmount");
  if (source_amount_value) {
    {
      auto* temp = (*source_amount_value).GetIfString();
      if (!temp) {
        out.source_amount = std::nullopt;
        return false;
      }
      out.source_amount = *temp;
    }
  }

  const base::Value* source_amount_without_fees_value = dict.Find("sourceAmountWithoutFees");
  if (source_amount_without_fees_value) {
    {
      auto* temp = (*source_amount_without_fees_value).GetIfString();
      if (!temp) {
        out.source_amount_without_fees = std::nullopt;
        return false;
      }
      out.source_amount_without_fees = *temp;
    }
  }

  const base::Value* fiat_amount_without_fees_value = dict.Find("fiatAmountWithoutFees");
  if (fiat_amount_without_fees_value) {
    {
      auto* temp = (*fiat_amount_without_fees_value).GetIfString();
      if (!temp) {
        out.fiat_amount_without_fees = std::nullopt;
        return false;
      }
      out.fiat_amount_without_fees = *temp;
    }
  }

  const base::Value* destination_amount_without_fees_value = dict.Find("destinationAmountWithoutFees");
  if (destination_amount_without_fees_value) {
    {
      auto* temp = (*destination_amount_without_fees_value).GetIfString();
      if (!temp) {
        out.destination_amount_without_fees = std::nullopt;
        return false;
      }
      out.destination_amount_without_fees = *temp;
    }
  }

  const base::Value* source_currency_code_value = dict.Find("sourceCurrencyCode");
  if (source_currency_code_value) {
    {
      auto* temp = (*source_currency_code_value).GetIfString();
      if (!temp) {
        out.source_currency_code = std::nullopt;
        return false;
      }
      out.source_currency_code = *temp;
    }
  }

  const base::Value* country_code_value = dict.Find("countryCode");
  if (country_code_value) {
    {
      auto* temp = (*country_code_value).GetIfString();
      if (!temp) {
        out.country_code = std::nullopt;
        return false;
      }
      out.country_code = *temp;
    }
  }

  const base::Value* total_fee_value = dict.Find("totalFee");
  if (total_fee_value) {
    {
      auto* temp = (*total_fee_value).GetIfString();
      if (!temp) {
        out.total_fee = std::nullopt;
        return false;
      }
      out.total_fee = *temp;
    }
  }

  const base::Value* network_fee_value = dict.Find("networkFee");
  if (network_fee_value) {
    {
      auto* temp = (*network_fee_value).GetIfString();
      if (!temp) {
        out.network_fee = std::nullopt;
        return false;
      }
      out.network_fee = *temp;
    }
  }

  const base::Value* transaction_fee_value = dict.Find("transactionFee");
  if (transaction_fee_value) {
    {
      auto* temp = (*transaction_fee_value).GetIfString();
      if (!temp) {
        out.transaction_fee = std::nullopt;
        return false;
      }
      out.transaction_fee = *temp;
    }
  }

  const base::Value* destination_amount_value = dict.Find("destinationAmount");
  if (destination_amount_value) {
    {
      auto* temp = (*destination_amount_value).GetIfString();
      if (!temp) {
        out.destination_amount = std::nullopt;
        return false;
      }
      out.destination_amount = *temp;
    }
  }

  const base::Value* destination_currency_code_value = dict.Find("destinationCurrencyCode");
  if (destination_currency_code_value) {
    {
      auto* temp = (*destination_currency_code_value).GetIfString();
      if (!temp) {
        out.destination_currency_code = std::nullopt;
        return false;
      }
      out.destination_currency_code = *temp;
    }
  }

  const base::Value* exchange_rate_value = dict.Find("exchangeRate");
  if (exchange_rate_value) {
    {
      auto* temp = (*exchange_rate_value).GetIfString();
      if (!temp) {
        out.exchange_rate = std::nullopt;
        return false;
      }
      out.exchange_rate = *temp;
    }
  }

  const base::Value* payment_method_type_value = dict.Find("paymentMethodType");
  if (payment_method_type_value) {
    {
      auto* temp = (*payment_method_type_value).GetIfString();
      if (!temp) {
        out.payment_method_type = std::nullopt;
        return false;
      }
      out.payment_method_type = *temp;
    }
  }

  const base::Value* customer_score_value = dict.Find("customerScore");
  if (customer_score_value) {
    {
      auto* temp = (*customer_score_value).GetIfString();
      if (!temp) {
        out.customer_score = std::nullopt;
        return false;
      }
      out.customer_score = *temp;
    }
  }

  const base::Value* service_provider_value = dict.Find("serviceProvider");
  if (service_provider_value) {
    {
      auto* temp = (*service_provider_value).GetIfString();
      if (!temp) {
        out.service_provider = std::nullopt;
        return false;
      }
      out.service_provider = *temp;
    }
  }

  return true;
}

// static
bool CryptoQuote::Populate(
    const base::Value& value, CryptoQuote& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CryptoQuote> CryptoQuote::FromValue(const base::DictValue& value) {
  CryptoQuote out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CryptoQuote> CryptoQuote::FromValue(const base::Value& value) {
  CryptoQuote out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue CryptoQuote::ToValue() const {
  base::DictValue to_value_result;

  if (this->transaction_type) {
    to_value_result.Set("transactionType", *this->transaction_type);

  }
  if (this->source_amount) {
    to_value_result.Set("sourceAmount", *this->source_amount);

  }
  if (this->source_amount_without_fees) {
    to_value_result.Set("sourceAmountWithoutFees", *this->source_amount_without_fees);

  }
  if (this->fiat_amount_without_fees) {
    to_value_result.Set("fiatAmountWithoutFees", *this->fiat_amount_without_fees);

  }
  if (this->destination_amount_without_fees) {
    to_value_result.Set("destinationAmountWithoutFees", *this->destination_amount_without_fees);

  }
  if (this->source_currency_code) {
    to_value_result.Set("sourceCurrencyCode", *this->source_currency_code);

  }
  if (this->country_code) {
    to_value_result.Set("countryCode", *this->country_code);

  }
  if (this->total_fee) {
    to_value_result.Set("totalFee", *this->total_fee);

  }
  if (this->network_fee) {
    to_value_result.Set("networkFee", *this->network_fee);

  }
  if (this->transaction_fee) {
    to_value_result.Set("transactionFee", *this->transaction_fee);

  }
  if (this->destination_amount) {
    to_value_result.Set("destinationAmount", *this->destination_amount);

  }
  if (this->destination_currency_code) {
    to_value_result.Set("destinationCurrencyCode", *this->destination_currency_code);

  }
  if (this->exchange_rate) {
    to_value_result.Set("exchangeRate", *this->exchange_rate);

  }
  if (this->payment_method_type) {
    to_value_result.Set("paymentMethodType", *this->payment_method_type);

  }
  if (this->customer_score) {
    to_value_result.Set("customerScore", *this->customer_score);

  }
  if (this->service_provider) {
    to_value_result.Set("serviceProvider", *this->service_provider);

  }

  return to_value_result;
}


CryptoQuoteResponse::CryptoQuoteResponse()
 {}

CryptoQuoteResponse::~CryptoQuoteResponse() = default;
CryptoQuoteResponse::CryptoQuoteResponse(CryptoQuoteResponse&& rhs) noexcept = default;
CryptoQuoteResponse& CryptoQuoteResponse::operator=(CryptoQuoteResponse&& rhs) noexcept = default;
CryptoQuoteResponse CryptoQuoteResponse::Clone() const {
  CryptoQuoteResponse out;
  if (quotes) {
    out.quotes.emplace();
    out.quotes->reserve(quotes->size());
    for (const auto& element : *quotes) {
      json_schema_compiler::util::AppendToContainer(*out.quotes, element.Clone());
    }
  }
  out.message = message;
  out.error = error;
  return out;
}

// static
bool CryptoQuoteResponse::Populate(
    const base::DictValue& dict, CryptoQuoteResponse& out) {
  const base::Value* quotes_value = dict.Find("quotes");
  if (quotes_value) {
    {
      if (!(*quotes_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*quotes_value).GetList(), out.quotes)) {
          return false;
        }
      }
    }
  }

  const base::Value* message_value = dict.Find("message");
  if (message_value) {
    {
      auto* temp = (*message_value).GetIfString();
      if (!temp) {
        out.message = std::nullopt;
        return false;
      }
      out.message = *temp;
    }
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value) {
    {
      auto* temp = (*error_value).GetIfString();
      if (!temp) {
        out.error = std::nullopt;
        return false;
      }
      out.error = *temp;
    }
  }

  return true;
}

// static
bool CryptoQuoteResponse::Populate(
    const base::Value& value, CryptoQuoteResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CryptoQuoteResponse> CryptoQuoteResponse::FromValue(const base::DictValue& value) {
  CryptoQuoteResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CryptoQuoteResponse> CryptoQuoteResponse::FromValue(const base::Value& value) {
  CryptoQuoteResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue CryptoQuoteResponse::ToValue() const {
  base::DictValue to_value_result;

  if (this->quotes) {
    to_value_result.Set("quotes", json_schema_compiler::util::CreateValueFromArray(*this->quotes));

  }
  if (this->message) {
    to_value_result.Set("message", *this->message);

  }
  if (this->error) {
    to_value_result.Set("error", *this->error);

  }

  return to_value_result;
}


ServiceProvider::ServiceProvider()
 {}

ServiceProvider::~ServiceProvider() = default;
ServiceProvider::ServiceProvider(ServiceProvider&& rhs) noexcept = default;
ServiceProvider& ServiceProvider::operator=(ServiceProvider&& rhs) noexcept = default;
ServiceProvider ServiceProvider::Clone() const {
  ServiceProvider out;
  out.service_provider = service_provider;
  out.name = name;
  out.status = status;
  out.categories = categories;
  out.category_statuses = category_statuses.Clone();
  out.website_url = website_url;
  if (logos) {
    out.logos = logos->Clone();
  }
  return out;
}

// static
bool ServiceProvider::Populate(
    const base::DictValue& dict, ServiceProvider& out) {
  const base::Value* service_provider_value = dict.Find("serviceProvider");
  if (!service_provider_value) {
    return false;
  }
  {
    auto* temp = (*service_provider_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.service_provider = *temp;
  }

  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    {
      auto* temp = (*name_value).GetIfString();
      if (!temp) {
        out.name = std::nullopt;
        return false;
      }
      out.name = *temp;
    }
  }

  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    auto* temp = (*status_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.status = *temp;
  }

  const base::Value* categories_value = dict.Find("categories");
  if (!categories_value) {
    return false;
  }
  {
    if (!(*categories_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*categories_value).GetList(), out.categories)) {
        return false;
      }
    }
  }

  const base::Value* category_statuses_value = dict.Find("categoryStatuses");
  if (!category_statuses_value) {
    return false;
  }
  {
    out.category_statuses = (*category_statuses_value).Clone();
  }

  const base::Value* website_url_value = dict.Find("websiteUrl");
  if (website_url_value) {
    {
      auto* temp = (*website_url_value).GetIfString();
      if (!temp) {
        out.website_url = std::nullopt;
        return false;
      }
      out.website_url = *temp;
    }
  }

  const base::Value* logos_value = dict.Find("logos");
  if (logos_value) {
    {
      if (!(*logos_value).is_dict()) {
        return false;
      }
      else {
        Logos temp;
        if (!Logos::Populate((*logos_value).GetDict(), temp))
          return false;
        out.logos = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ServiceProvider::Populate(
    const base::Value& value, ServiceProvider& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ServiceProvider> ServiceProvider::FromValue(const base::DictValue& value) {
  ServiceProvider out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ServiceProvider> ServiceProvider::FromValue(const base::Value& value) {
  ServiceProvider out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ServiceProvider::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("serviceProvider", this->service_provider);

  if (this->name) {
    to_value_result.Set("name", *this->name);

  }
  to_value_result.Set("status", this->status);

  to_value_result.Set("categories", json_schema_compiler::util::CreateValueFromArray(this->categories));

  to_value_result.Set("categoryStatuses", (this->category_statuses).Clone());

  if (this->website_url) {
    to_value_result.Set("websiteUrl", *this->website_url);

  }
  if (this->logos) {
    to_value_result.Set("logos", (this->logos)->ToValue());

  }

  return to_value_result;
}


MeldError::MeldError()
 {}

MeldError::~MeldError() = default;
MeldError::MeldError(MeldError&& rhs) noexcept = default;
MeldError& MeldError::operator=(MeldError&& rhs) noexcept = default;
MeldError MeldError::Clone() const {
  MeldError out;
  out.code = code;
  out.message = message;
  out.errors = errors;
  out.request_id = request_id;
  out.timestamp = timestamp;
  return out;
}

// static
bool MeldError::Populate(
    const base::DictValue& dict, MeldError& out) {
  const base::Value* code_value = dict.Find("code");
  if (code_value) {
    {
      auto* temp = (*code_value).GetIfString();
      if (!temp) {
        out.code = std::nullopt;
        return false;
      }
      out.code = *temp;
    }
  }

  const base::Value* message_value = dict.Find("message");
  if (message_value) {
    {
      auto* temp = (*message_value).GetIfString();
      if (!temp) {
        out.message = std::nullopt;
        return false;
      }
      out.message = *temp;
    }
  }

  const base::Value* errors_value = dict.Find("errors");
  if (errors_value) {
    {
      if (!(*errors_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*errors_value).GetList(), out.errors)) {
          return false;
        }
      }
    }
  }

  const base::Value* request_id_value = dict.Find("requestId");
  if (request_id_value) {
    {
      auto* temp = (*request_id_value).GetIfString();
      if (!temp) {
        out.request_id = std::nullopt;
        return false;
      }
      out.request_id = *temp;
    }
  }

  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    {
      auto* temp = (*timestamp_value).GetIfString();
      if (!temp) {
        out.timestamp = std::nullopt;
        return false;
      }
      out.timestamp = *temp;
    }
  }

  return true;
}

// static
bool MeldError::Populate(
    const base::Value& value, MeldError& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MeldError> MeldError::FromValue(const base::DictValue& value) {
  MeldError out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MeldError> MeldError::FromValue(const base::Value& value) {
  MeldError out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue MeldError::ToValue() const {
  base::DictValue to_value_result;

  if (this->code) {
    to_value_result.Set("code", *this->code);

  }
  if (this->message) {
    to_value_result.Set("message", *this->message);

  }
  if (this->errors) {
    to_value_result.Set("errors", json_schema_compiler::util::CreateValueFromArray(*this->errors));

  }
  if (this->request_id) {
    to_value_result.Set("requestId", *this->request_id);

  }
  if (this->timestamp) {
    to_value_result.Set("timestamp", *this->timestamp);

  }

  return to_value_result;
}


CryptoWidgetResult::CryptoWidgetResult()
 {}

CryptoWidgetResult::~CryptoWidgetResult() = default;
CryptoWidgetResult::CryptoWidgetResult(CryptoWidgetResult&& rhs) noexcept = default;
CryptoWidgetResult& CryptoWidgetResult::operator=(CryptoWidgetResult&& rhs) noexcept = default;
CryptoWidgetResult CryptoWidgetResult::Clone() const {
  CryptoWidgetResult out;
  out.id = id;
  out.external_session_id = external_session_id;
  out.external_customer_id = external_customer_id;
  out.customer_id = customer_id;
  out.widget_url = widget_url;
  out.token = token;
  return out;
}

// static
bool CryptoWidgetResult::Populate(
    const base::DictValue& dict, CryptoWidgetResult& out) {
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

  const base::Value* external_session_id_value = dict.Find("externalSessionId");
  if (external_session_id_value) {
    {
      auto* temp = (*external_session_id_value).GetIfString();
      if (!temp) {
        out.external_session_id = std::nullopt;
        return false;
      }
      out.external_session_id = *temp;
    }
  }

  const base::Value* external_customer_id_value = dict.Find("externalCustomerId");
  if (external_customer_id_value) {
    {
      auto* temp = (*external_customer_id_value).GetIfString();
      if (!temp) {
        out.external_customer_id = std::nullopt;
        return false;
      }
      out.external_customer_id = *temp;
    }
  }

  const base::Value* customer_id_value = dict.Find("customerId");
  if (!customer_id_value) {
    return false;
  }
  {
    auto* temp = (*customer_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.customer_id = *temp;
  }

  const base::Value* widget_url_value = dict.Find("widgetUrl");
  if (!widget_url_value) {
    return false;
  }
  {
    auto* temp = (*widget_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.widget_url = *temp;
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

  return true;
}

// static
bool CryptoWidgetResult::Populate(
    const base::Value& value, CryptoWidgetResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CryptoWidgetResult> CryptoWidgetResult::FromValue(const base::DictValue& value) {
  CryptoWidgetResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CryptoWidgetResult> CryptoWidgetResult::FromValue(const base::Value& value) {
  CryptoWidgetResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue CryptoWidgetResult::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("id", this->id);

  if (this->external_session_id) {
    to_value_result.Set("externalSessionId", *this->external_session_id);

  }
  if (this->external_customer_id) {
    to_value_result.Set("externalCustomerId", *this->external_customer_id);

  }
  to_value_result.Set("customerId", this->customer_id);

  to_value_result.Set("widgetUrl", this->widget_url);

  to_value_result.Set("token", this->token);


  return to_value_result;
}



}  // namespace meld_integration_responses
}  // namespace brave_wallet

