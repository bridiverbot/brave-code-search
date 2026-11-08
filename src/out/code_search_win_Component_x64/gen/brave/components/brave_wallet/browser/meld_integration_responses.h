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

#ifndef BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_MELD_INTEGRATION_RESPONSES_H__
#define BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_MELD_INTEGRATION_RESPONSES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace brave_wallet {
namespace meld_integration_responses {

//
// Types
//

struct Logos {
  Logos();
  ~Logos();
  Logos(const Logos&) = delete;
  Logos& operator=(const Logos&) = delete;
  Logos(Logos&& rhs) noexcept;
  Logos& operator=(Logos&& rhs) noexcept;

  // Populates a Logos object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Logos& out);

  // Populates a Logos object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, Logos& out);

  // Creates a deep copy of Logos.
  Logos Clone() const;

  // Creates a Logos object from a base::DictValue, or nullopt on failure.
  static std::optional<Logos> FromValue(const base::DictValue& value);

  // Creates a Logos object from a base::Value, or nullopt on failure.
  static std::optional<Logos> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of thisLogos
  // object.
  base::DictValue ToValue() const;

  std::optional<std::string> dark_short;

  std::optional<std::string> light_short;

};

struct Country {
  Country();
  ~Country();
  Country(const Country&) = delete;
  Country& operator=(const Country&) = delete;
  Country(Country&& rhs) noexcept;
  Country& operator=(Country&& rhs) noexcept;

  // Populates a Country object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Country& out);

  // Populates a Country object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, Country& out);

  // Creates a deep copy of Country.
  Country Clone() const;

  // Creates a Country object from a base::DictValue, or nullopt on failure.
  static std::optional<Country> FromValue(const base::DictValue& value);

  // Creates a Country object from a base::Value, or nullopt on failure.
  static std::optional<Country> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCountry object.
  base::DictValue ToValue() const;

  std::string country_code;

  std::optional<std::string> name;

};

struct CountriesResponse {
  CountriesResponse();
  ~CountriesResponse();
  CountriesResponse(const CountriesResponse&) = delete;
  CountriesResponse& operator=(const CountriesResponse&) = delete;
  CountriesResponse(CountriesResponse&& rhs) noexcept;
  CountriesResponse& operator=(CountriesResponse&& rhs) noexcept;

  // Populates a CountriesResponse object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CountriesResponse& out);

  // Populates a CountriesResponse object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, CountriesResponse& out);

  // Creates a deep copy of CountriesResponse.
  CountriesResponse Clone() const;

  // Creates a CountriesResponse object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<CountriesResponse> FromValue(const base::DictValue& value);

  // Creates a CountriesResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<CountriesResponse> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCountriesResponse object.
  base::DictValue ToValue() const;

  std::vector<Country> countries;

};

struct CryptoCurrency {
  CryptoCurrency();
  ~CryptoCurrency();
  CryptoCurrency(const CryptoCurrency&) = delete;
  CryptoCurrency& operator=(const CryptoCurrency&) = delete;
  CryptoCurrency(CryptoCurrency&& rhs) noexcept;
  CryptoCurrency& operator=(CryptoCurrency&& rhs) noexcept;

  // Populates a CryptoCurrency object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CryptoCurrency& out);

  // Populates a CryptoCurrency object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, CryptoCurrency& out);

  // Creates a deep copy of CryptoCurrency.
  CryptoCurrency Clone() const;

  // Creates a CryptoCurrency object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<CryptoCurrency> FromValue(const base::DictValue& value);

  // Creates a CryptoCurrency object from a base::Value, or nullopt on failure.
  static std::optional<CryptoCurrency> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCryptoCurrency object.
  base::DictValue ToValue() const;

  std::string currency_code;

  std::string name;

  std::string chain_code;

  std::optional<std::string> chain_id;

  std::optional<std::string> contract;

  std::string symbol;

};

struct CryptoCurrenciesResponse {
  CryptoCurrenciesResponse();
  ~CryptoCurrenciesResponse();
  CryptoCurrenciesResponse(const CryptoCurrenciesResponse&) = delete;
  CryptoCurrenciesResponse& operator=(const CryptoCurrenciesResponse&) = delete;
  CryptoCurrenciesResponse(CryptoCurrenciesResponse&& rhs) noexcept;
  CryptoCurrenciesResponse& operator=(CryptoCurrenciesResponse&& rhs) noexcept;

  // Populates a CryptoCurrenciesResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CryptoCurrenciesResponse& out);

  // Populates a CryptoCurrenciesResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, CryptoCurrenciesResponse& out);

  // Creates a deep copy of CryptoCurrenciesResponse.
  CryptoCurrenciesResponse Clone() const;

  // Creates a CryptoCurrenciesResponse object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<CryptoCurrenciesResponse> FromValue(const base::DictValue& value);

  // Creates a CryptoCurrenciesResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<CryptoCurrenciesResponse> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCryptoCurrenciesResponse object.
  base::DictValue ToValue() const;

  std::vector<CryptoCurrency> currencies;

};

struct FiatCurrency {
  FiatCurrency();
  ~FiatCurrency();
  FiatCurrency(const FiatCurrency&) = delete;
  FiatCurrency& operator=(const FiatCurrency&) = delete;
  FiatCurrency(FiatCurrency&& rhs) noexcept;
  FiatCurrency& operator=(FiatCurrency&& rhs) noexcept;

  // Populates a FiatCurrency object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FiatCurrency& out);

  // Populates a FiatCurrency object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, FiatCurrency& out);

  // Creates a deep copy of FiatCurrency.
  FiatCurrency Clone() const;

  // Creates a FiatCurrency object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<FiatCurrency> FromValue(const base::DictValue& value);

  // Creates a FiatCurrency object from a base::Value, or nullopt on failure.
  static std::optional<FiatCurrency> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisFiatCurrency object.
  base::DictValue ToValue() const;

  std::string currency_code;

  std::optional<std::string> name;

  std::optional<std::string> symbol;

};

struct FiatCurrenciesResponse {
  FiatCurrenciesResponse();
  ~FiatCurrenciesResponse();
  FiatCurrenciesResponse(const FiatCurrenciesResponse&) = delete;
  FiatCurrenciesResponse& operator=(const FiatCurrenciesResponse&) = delete;
  FiatCurrenciesResponse(FiatCurrenciesResponse&& rhs) noexcept;
  FiatCurrenciesResponse& operator=(FiatCurrenciesResponse&& rhs) noexcept;

  // Populates a FiatCurrenciesResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FiatCurrenciesResponse& out);

  // Populates a FiatCurrenciesResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, FiatCurrenciesResponse& out);

  // Creates a deep copy of FiatCurrenciesResponse.
  FiatCurrenciesResponse Clone() const;

  // Creates a FiatCurrenciesResponse object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<FiatCurrenciesResponse> FromValue(const base::DictValue& value);

  // Creates a FiatCurrenciesResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<FiatCurrenciesResponse> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisFiatCurrenciesResponse object.
  base::DictValue ToValue() const;

  std::vector<FiatCurrency> currencies;

};

struct PaymentMethodLogo {
  PaymentMethodLogo();
  ~PaymentMethodLogo();
  PaymentMethodLogo(const PaymentMethodLogo&) = delete;
  PaymentMethodLogo& operator=(const PaymentMethodLogo&) = delete;
  PaymentMethodLogo(PaymentMethodLogo&& rhs) noexcept;
  PaymentMethodLogo& operator=(PaymentMethodLogo&& rhs) noexcept;

  // Populates a PaymentMethodLogo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PaymentMethodLogo& out);

  // Populates a PaymentMethodLogo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PaymentMethodLogo& out);

  // Creates a deep copy of PaymentMethodLogo.
  PaymentMethodLogo Clone() const;

  // Creates a PaymentMethodLogo object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<PaymentMethodLogo> FromValue(const base::DictValue& value);

  // Creates a PaymentMethodLogo object from a base::Value, or nullopt on
  // failure.
  static std::optional<PaymentMethodLogo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPaymentMethodLogo object.
  base::DictValue ToValue() const;

  std::optional<std::string> dark;

  std::optional<std::string> light;

};

struct PaymentMethod {
  PaymentMethod();
  ~PaymentMethod();
  PaymentMethod(const PaymentMethod&) = delete;
  PaymentMethod& operator=(const PaymentMethod&) = delete;
  PaymentMethod(PaymentMethod&& rhs) noexcept;
  PaymentMethod& operator=(PaymentMethod&& rhs) noexcept;

  // Populates a PaymentMethod object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PaymentMethod& out);

  // Populates a PaymentMethod object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PaymentMethod& out);

  // Creates a deep copy of PaymentMethod.
  PaymentMethod Clone() const;

  // Creates a PaymentMethod object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<PaymentMethod> FromValue(const base::DictValue& value);

  // Creates a PaymentMethod object from a base::Value, or nullopt on failure.
  static std::optional<PaymentMethod> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPaymentMethod object.
  base::DictValue ToValue() const;

  std::string method;

  std::optional<std::string> name;

  std::optional<std::string> type;

  std::optional<PaymentMethodLogo> logo;

};

struct CryptoQuote {
  CryptoQuote();
  ~CryptoQuote();
  CryptoQuote(const CryptoQuote&) = delete;
  CryptoQuote& operator=(const CryptoQuote&) = delete;
  CryptoQuote(CryptoQuote&& rhs) noexcept;
  CryptoQuote& operator=(CryptoQuote&& rhs) noexcept;

  // Populates a CryptoQuote object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CryptoQuote& out);

  // Populates a CryptoQuote object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, CryptoQuote& out);

  // Creates a deep copy of CryptoQuote.
  CryptoQuote Clone() const;

  // Creates a CryptoQuote object from a base::DictValue, or nullopt on failure.
  static std::optional<CryptoQuote> FromValue(const base::DictValue& value);

  // Creates a CryptoQuote object from a base::Value, or nullopt on failure.
  static std::optional<CryptoQuote> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCryptoQuote object.
  base::DictValue ToValue() const;

  std::optional<std::string> transaction_type;

  std::optional<std::string> source_amount;

  std::optional<std::string> source_amount_without_fees;

  std::optional<std::string> fiat_amount_without_fees;

  std::optional<std::string> destination_amount_without_fees;

  std::optional<std::string> source_currency_code;

  std::optional<std::string> country_code;

  std::optional<std::string> total_fee;

  std::optional<std::string> network_fee;

  std::optional<std::string> transaction_fee;

  std::optional<std::string> destination_amount;

  std::optional<std::string> destination_currency_code;

  std::optional<std::string> exchange_rate;

  std::optional<std::string> payment_method_type;

  std::optional<std::string> customer_score;

  std::optional<std::string> service_provider;

};

struct CryptoQuoteResponse {
  CryptoQuoteResponse();
  ~CryptoQuoteResponse();
  CryptoQuoteResponse(const CryptoQuoteResponse&) = delete;
  CryptoQuoteResponse& operator=(const CryptoQuoteResponse&) = delete;
  CryptoQuoteResponse(CryptoQuoteResponse&& rhs) noexcept;
  CryptoQuoteResponse& operator=(CryptoQuoteResponse&& rhs) noexcept;

  // Populates a CryptoQuoteResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CryptoQuoteResponse& out);

  // Populates a CryptoQuoteResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, CryptoQuoteResponse& out);

  // Creates a deep copy of CryptoQuoteResponse.
  CryptoQuoteResponse Clone() const;

  // Creates a CryptoQuoteResponse object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<CryptoQuoteResponse> FromValue(const base::DictValue& value);

  // Creates a CryptoQuoteResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<CryptoQuoteResponse> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCryptoQuoteResponse object.
  base::DictValue ToValue() const;

  std::optional<std::vector<CryptoQuote>> quotes;

  std::optional<std::string> message;

  std::optional<std::string> error;

};

struct ServiceProvider {
  ServiceProvider();
  ~ServiceProvider();
  ServiceProvider(const ServiceProvider&) = delete;
  ServiceProvider& operator=(const ServiceProvider&) = delete;
  ServiceProvider(ServiceProvider&& rhs) noexcept;
  ServiceProvider& operator=(ServiceProvider&& rhs) noexcept;

  // Populates a ServiceProvider object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ServiceProvider& out);

  // Populates a ServiceProvider object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ServiceProvider& out);

  // Creates a deep copy of ServiceProvider.
  ServiceProvider Clone() const;

  // Creates a ServiceProvider object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ServiceProvider> FromValue(const base::DictValue& value);

  // Creates a ServiceProvider object from a base::Value, or nullopt on failure.
  static std::optional<ServiceProvider> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisServiceProvider object.
  base::DictValue ToValue() const;

  std::string service_provider;

  std::optional<std::string> name;

  std::string status;

  std::vector<std::string> categories;

  base::Value category_statuses;

  std::optional<std::string> website_url;

  std::optional<Logos> logos;

};

struct MeldError {
  MeldError();
  ~MeldError();
  MeldError(const MeldError&) = delete;
  MeldError& operator=(const MeldError&) = delete;
  MeldError(MeldError&& rhs) noexcept;
  MeldError& operator=(MeldError&& rhs) noexcept;

  // Populates a MeldError object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, MeldError& out);

  // Populates a MeldError object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, MeldError& out);

  // Creates a deep copy of MeldError.
  MeldError Clone() const;

  // Creates a MeldError object from a base::DictValue, or nullopt on failure.
  static std::optional<MeldError> FromValue(const base::DictValue& value);

  // Creates a MeldError object from a base::Value, or nullopt on failure.
  static std::optional<MeldError> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisMeldError object.
  base::DictValue ToValue() const;

  std::optional<std::string> code;

  std::optional<std::string> message;

  std::optional<std::vector<std::string>> errors;

  std::optional<std::string> request_id;

  std::optional<std::string> timestamp;

};

struct CryptoWidgetResult {
  CryptoWidgetResult();
  ~CryptoWidgetResult();
  CryptoWidgetResult(const CryptoWidgetResult&) = delete;
  CryptoWidgetResult& operator=(const CryptoWidgetResult&) = delete;
  CryptoWidgetResult(CryptoWidgetResult&& rhs) noexcept;
  CryptoWidgetResult& operator=(CryptoWidgetResult&& rhs) noexcept;

  // Populates a CryptoWidgetResult object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CryptoWidgetResult& out);

  // Populates a CryptoWidgetResult object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, CryptoWidgetResult& out);

  // Creates a deep copy of CryptoWidgetResult.
  CryptoWidgetResult Clone() const;

  // Creates a CryptoWidgetResult object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<CryptoWidgetResult> FromValue(const base::DictValue& value);

  // Creates a CryptoWidgetResult object from a base::Value, or nullopt on
  // failure.
  static std::optional<CryptoWidgetResult> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCryptoWidgetResult object.
  base::DictValue ToValue() const;

  std::string id;

  std::optional<std::string> external_session_id;

  std::optional<std::string> external_customer_id;

  std::string customer_id;

  std::string widget_url;

  std::string token;

};


}  // namespace meld_integration_responses
}  // namespace brave_wallet

#endif  // BRAVE_COMPONENTS_BRAVE_WALLET_BROWSER_MELD_INTEGRATION_RESPONSES_H__
