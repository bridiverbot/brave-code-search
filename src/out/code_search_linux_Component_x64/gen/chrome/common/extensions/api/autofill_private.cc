// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/autofill_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/autofill_private.idl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#include "chrome/common/extensions/api/autofill_private.h"

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

namespace extensions {
namespace api {
namespace autofill_private {
//
// Types
//

AccountInfo::AccountInfo()
: is_sync_enabled_for_autofill_profiles(false),
is_eligible_for_address_account_storage(false) {}

AccountInfo::~AccountInfo() = default;
AccountInfo::AccountInfo(AccountInfo&& rhs) noexcept = default;
AccountInfo& AccountInfo::operator=(AccountInfo&& rhs) noexcept = default;
AccountInfo AccountInfo::Clone() const {
  AccountInfo out;
  out.email = email;
  out.is_sync_enabled_for_autofill_profiles = is_sync_enabled_for_autofill_profiles;
  out.is_eligible_for_address_account_storage = is_eligible_for_address_account_storage;
  return out;
}

// static
bool AccountInfo::Populate(
    const base::DictValue& dict, AccountInfo& out) {
  const base::Value* email_value = dict.Find("email");
  if (!email_value) {
    return false;
  }
  {
    auto* temp = (*email_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.email = *temp;
  }

  const base::Value* is_sync_enabled_for_autofill_profiles_value = dict.Find("isSyncEnabledForAutofillProfiles");
  if (!is_sync_enabled_for_autofill_profiles_value) {
    return false;
  }
  {
    auto temp = (*is_sync_enabled_for_autofill_profiles_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_sync_enabled_for_autofill_profiles = *temp;
  }

  const base::Value* is_eligible_for_address_account_storage_value = dict.Find("isEligibleForAddressAccountStorage");
  if (!is_eligible_for_address_account_storage_value) {
    return false;
  }
  {
    auto temp = (*is_eligible_for_address_account_storage_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_eligible_for_address_account_storage = *temp;
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

  to_value_result.Set("email", this->email);

  to_value_result.Set("isSyncEnabledForAutofillProfiles", this->is_sync_enabled_for_autofill_profiles);

  to_value_result.Set("isEligibleForAddressAccountStorage", this->is_eligible_for_address_account_storage);


  return to_value_result;
}


const char* ToString(UserDataProcessingConsentState enum_param) {
  switch (enum_param) {
    case UserDataProcessingConsentState::kUndefined:
      return "UNDEFINED";
    case UserDataProcessingConsentState::kUnknown:
      return "UNKNOWN";
    case UserDataProcessingConsentState::kEnabled:
      return "ENABLED";
    case UserDataProcessingConsentState::kDisabled:
      return "DISABLED";
    case UserDataProcessingConsentState::kNone:
      return "";
  }
  NOTREACHED();
}

UserDataProcessingConsentState ParseUserDataProcessingConsentState(std::string_view enum_string) {
  if (enum_string == "UNDEFINED")
    return UserDataProcessingConsentState::kUndefined;
  if (enum_string == "UNKNOWN")
    return UserDataProcessingConsentState::kUnknown;
  if (enum_string == "ENABLED")
    return UserDataProcessingConsentState::kEnabled;
  if (enum_string == "DISABLED")
    return UserDataProcessingConsentState::kDisabled;
  return UserDataProcessingConsentState::kNone;
}

std::u16string GetUserDataProcessingConsentStateParseError(std::string_view enum_string) {
  return u"expected \"UNDEFINED\" or \"UNKNOWN\" or \"ENABLED\" or \"DISABLED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


UserDataProcessingConsentStates::UserDataProcessingConsentStates()
: comms_apps(),
google_apps() {}

UserDataProcessingConsentStates::~UserDataProcessingConsentStates() = default;
UserDataProcessingConsentStates::UserDataProcessingConsentStates(UserDataProcessingConsentStates&& rhs) noexcept = default;
UserDataProcessingConsentStates& UserDataProcessingConsentStates::operator=(UserDataProcessingConsentStates&& rhs) noexcept = default;
UserDataProcessingConsentStates UserDataProcessingConsentStates::Clone() const {
  UserDataProcessingConsentStates out;
  out.comms_apps = comms_apps;
  out.google_apps = google_apps;
  return out;
}

// static
bool UserDataProcessingConsentStates::Populate(
    const base::DictValue& dict, UserDataProcessingConsentStates& out) {
  const base::Value* comms_apps_value = dict.Find("commsApps");
  if (!comms_apps_value) {
    return false;
  }
  {
    const std::string* user_data_processing_consent_state_as_string = (*comms_apps_value).GetIfString();
    if (!user_data_processing_consent_state_as_string) {
      return false;
    }
    out.comms_apps = ParseUserDataProcessingConsentState(*user_data_processing_consent_state_as_string);
    if (out.comms_apps == UserDataProcessingConsentState()) {
      return false;
    }
  }

  const base::Value* google_apps_value = dict.Find("googleApps");
  if (!google_apps_value) {
    return false;
  }
  {
    const std::string* user_data_processing_consent_state_as_string = (*google_apps_value).GetIfString();
    if (!user_data_processing_consent_state_as_string) {
      return false;
    }
    out.google_apps = ParseUserDataProcessingConsentState(*user_data_processing_consent_state_as_string);
    if (out.google_apps == UserDataProcessingConsentState()) {
      return false;
    }
  }

  return true;
}

// static
bool UserDataProcessingConsentStates::Populate(
    const base::Value& value, UserDataProcessingConsentStates& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UserDataProcessingConsentStates> UserDataProcessingConsentStates::FromValue(const base::DictValue& value) {
  UserDataProcessingConsentStates out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UserDataProcessingConsentStates> UserDataProcessingConsentStates::FromValue(const base::Value& value) {
  UserDataProcessingConsentStates out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue UserDataProcessingConsentStates::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("commsApps", autofill_private::ToString(this->comms_apps));

  to_value_result.Set("googleApps", autofill_private::ToString(this->google_apps));


  return to_value_result;
}


const char* ToString(FieldType enum_param) {
  switch (enum_param) {
    case FieldType::kNoServerData:
      return "NO_SERVER_DATA";
    case FieldType::kUnknownType:
      return "UNKNOWN_TYPE";
    case FieldType::kEmptyType:
      return "EMPTY_TYPE";
    case FieldType::kNameFirst:
      return "NAME_FIRST";
    case FieldType::kNameMiddle:
      return "NAME_MIDDLE";
    case FieldType::kNameLast:
      return "NAME_LAST";
    case FieldType::kNameMiddleInitial:
      return "NAME_MIDDLE_INITIAL";
    case FieldType::kNameFull:
      return "NAME_FULL";
    case FieldType::kNameSuffix:
      return "NAME_SUFFIX";
    case FieldType::kAlternativeFullName:
      return "ALTERNATIVE_FULL_NAME";
    case FieldType::kAlternativeGivenName:
      return "ALTERNATIVE_GIVEN_NAME";
    case FieldType::kAlternativeFamilyName:
      return "ALTERNATIVE_FAMILY_NAME";
    case FieldType::kEmailAddress:
      return "EMAIL_ADDRESS";
    case FieldType::kPhoneHomeNumber:
      return "PHONE_HOME_NUMBER";
    case FieldType::kPhoneHomeCityCode:
      return "PHONE_HOME_CITY_CODE";
    case FieldType::kPhoneHomeCountryCode:
      return "PHONE_HOME_COUNTRY_CODE";
    case FieldType::kPhoneHomeCityAndNumber:
      return "PHONE_HOME_CITY_AND_NUMBER";
    case FieldType::kPhoneHomeWholeNumber:
      return "PHONE_HOME_WHOLE_NUMBER";
    case FieldType::kAddressHomeLine1:
      return "ADDRESS_HOME_LINE1";
    case FieldType::kAddressHomeLine2:
      return "ADDRESS_HOME_LINE2";
    case FieldType::kAddressHomeAptNum:
      return "ADDRESS_HOME_APT_NUM";
    case FieldType::kAddressHomeCity:
      return "ADDRESS_HOME_CITY";
    case FieldType::kAddressHomeState:
      return "ADDRESS_HOME_STATE";
    case FieldType::kAddressHomeZip:
      return "ADDRESS_HOME_ZIP";
    case FieldType::kAddressHomeCountry:
      return "ADDRESS_HOME_COUNTRY";
    case FieldType::kCreditCardNameFull:
      return "CREDIT_CARD_NAME_FULL";
    case FieldType::kCreditCardNumber:
      return "CREDIT_CARD_NUMBER";
    case FieldType::kCreditCardExpMonth:
      return "CREDIT_CARD_EXP_MONTH";
    case FieldType::kCreditCardExp2DigitYear:
      return "CREDIT_CARD_EXP_2_DIGIT_YEAR";
    case FieldType::kCreditCardExp4DigitYear:
      return "CREDIT_CARD_EXP_4_DIGIT_YEAR";
    case FieldType::kCreditCardExpDate2DigitYear:
      return "CREDIT_CARD_EXP_DATE_2_DIGIT_YEAR";
    case FieldType::kCreditCardExpDate4DigitYear:
      return "CREDIT_CARD_EXP_DATE_4_DIGIT_YEAR";
    case FieldType::kCreditCardType:
      return "CREDIT_CARD_TYPE";
    case FieldType::kCreditCardVerificationCode:
      return "CREDIT_CARD_VERIFICATION_CODE";
    case FieldType::kCompanyName:
      return "COMPANY_NAME";
    case FieldType::kMerchantEmailSignup:
      return "MERCHANT_EMAIL_SIGNUP";
    case FieldType::kMerchantPromoCode:
      return "MERCHANT_PROMO_CODE";
    case FieldType::kPassword:
      return "PASSWORD";
    case FieldType::kAccountCreationPassword:
      return "ACCOUNT_CREATION_PASSWORD";
    case FieldType::kAddressHomeStreetAddress:
      return "ADDRESS_HOME_STREET_ADDRESS";
    case FieldType::kAddressHomeSortingCode:
      return "ADDRESS_HOME_SORTING_CODE";
    case FieldType::kAddressHomeDependentLocality:
      return "ADDRESS_HOME_DEPENDENT_LOCALITY";
    case FieldType::kAddressHomeLine3:
      return "ADDRESS_HOME_LINE3";
    case FieldType::kNotAccountCreationPassword:
      return "NOT_ACCOUNT_CREATION_PASSWORD";
    case FieldType::kUsername:
      return "USERNAME";
    case FieldType::kUsernameAndEmailAddress:
      return "USERNAME_AND_EMAIL_ADDRESS";
    case FieldType::kNewPassword:
      return "NEW_PASSWORD";
    case FieldType::kProbablyNewPassword:
      return "PROBABLY_NEW_PASSWORD";
    case FieldType::kNotNewPassword:
      return "NOT_NEW_PASSWORD";
    case FieldType::kCreditCardNameFirst:
      return "CREDIT_CARD_NAME_FIRST";
    case FieldType::kCreditCardNameLast:
      return "CREDIT_CARD_NAME_LAST";
    case FieldType::kPhoneHomeExtension:
      return "PHONE_HOME_EXTENSION";
    case FieldType::kConfirmationPassword:
      return "CONFIRMATION_PASSWORD";
    case FieldType::kAmbiguousType:
      return "AMBIGUOUS_TYPE";
    case FieldType::kSearchTerm:
      return "SEARCH_TERM";
    case FieldType::kPrice:
      return "PRICE";
    case FieldType::kNotPassword:
      return "NOT_PASSWORD";
    case FieldType::kSingleUsername:
      return "SINGLE_USERNAME";
    case FieldType::kNotUsername:
      return "NOT_USERNAME";
    case FieldType::kUpiVpa:
      return "UPI_VPA";
    case FieldType::kAddressHomeStreetName:
      return "ADDRESS_HOME_STREET_NAME";
    case FieldType::kAddressHomeHouseNumber:
      return "ADDRESS_HOME_HOUSE_NUMBER";
    case FieldType::kAddressHomeSubpremise:
      return "ADDRESS_HOME_SUBPREMISE";
    case FieldType::kAddressHomeOtherSubunit:
      return "ADDRESS_HOME_OTHER_SUBUNIT";
    case FieldType::kNameLastFirst:
      return "NAME_LAST_FIRST";
    case FieldType::kNameLastConjunction:
      return "NAME_LAST_CONJUNCTION";
    case FieldType::kNameLastSecond:
      return "NAME_LAST_SECOND";
    case FieldType::kNameHonorificPrefix:
      return "NAME_HONORIFIC_PREFIX";
    case FieldType::kAddressHomeAddress:
      return "ADDRESS_HOME_ADDRESS";
    case FieldType::kAddressHomeAddressWithName:
      return "ADDRESS_HOME_ADDRESS_WITH_NAME";
    case FieldType::kAddressHomeFloor:
      return "ADDRESS_HOME_FLOOR";
    case FieldType::kPhoneHomeCityCodeWithTrunkPrefix:
      return "PHONE_HOME_CITY_CODE_WITH_TRUNK_PREFIX";
    case FieldType::kPhoneHomeCityAndNumberWithoutTrunkPrefix:
      return "PHONE_HOME_CITY_AND_NUMBER_WITHOUT_TRUNK_PREFIX";
    case FieldType::kPhoneHomeNumberPrefix:
      return "PHONE_HOME_NUMBER_PREFIX";
    case FieldType::kPhoneHomeNumberSuffix:
      return "PHONE_HOME_NUMBER_SUFFIX";
    case FieldType::kIbanValue:
      return "IBAN_VALUE";
    case FieldType::kCreditCardStandaloneVerificationCode:
      return "CREDIT_CARD_STANDALONE_VERIFICATION_CODE";
    case FieldType::kNumericQuantity:
      return "NUMERIC_QUANTITY";
    case FieldType::kOneTimeCode:
      return "ONE_TIME_CODE";
    case FieldType::kDeliveryInstructions:
      return "DELIVERY_INSTRUCTIONS";
    case FieldType::kAddressHomeOverflow:
      return "ADDRESS_HOME_OVERFLOW";
    case FieldType::kAddressHomeLandmark:
      return "ADDRESS_HOME_LANDMARK";
    case FieldType::kAddressHomeOverflowAndLandmark:
      return "ADDRESS_HOME_OVERFLOW_AND_LANDMARK";
    case FieldType::kAddressHomeAdminLevel2:
      return "ADDRESS_HOME_ADMIN_LEVEL2";
    case FieldType::kAddressHomeStreetLocation:
      return "ADDRESS_HOME_STREET_LOCATION";
    case FieldType::kAddressHomeBetweenStreets:
      return "ADDRESS_HOME_BETWEEN_STREETS";
    case FieldType::kAddressHomeBetweenStreetsOrLandmark:
      return "ADDRESS_HOME_BETWEEN_STREETS_OR_LANDMARK";
    case FieldType::kAddressHomeStreetLocationAndLocality:
      return "ADDRESS_HOME_STREET_LOCATION_AND_LOCALITY";
    case FieldType::kAddressHomeStreetLocationAndLandmark:
      return "ADDRESS_HOME_STREET_LOCATION_AND_LANDMARK";
    case FieldType::kAddressHomeDependentLocalityAndLandmark:
      return "ADDRESS_HOME_DEPENDENT_LOCALITY_AND_LANDMARK";
    case FieldType::kAddressHomeBetweenStreets1:
      return "ADDRESS_HOME_BETWEEN_STREETS_1";
    case FieldType::kAddressHomeBetweenStreets2:
      return "ADDRESS_HOME_BETWEEN_STREETS_2";
    case FieldType::kSingleUsernameForgotPassword:
      return "SINGLE_USERNAME_FORGOT_PASSWORD";
    case FieldType::kAddressHomeApt:
      return "ADDRESS_HOME_APT";
    case FieldType::kAddressHomeAptType:
      return "ADDRESS_HOME_APT_TYPE";
    case FieldType::kAddressHomeHouseNumberAndApt:
      return "ADDRESS_HOME_HOUSE_NUMBER_AND_APT";
    case FieldType::kSingleUsernameWithIntermediateValues:
      return "SINGLE_USERNAME_WITH_INTERMEDIATE_VALUES";
    case FieldType::kPassportNumber:
      return "PASSPORT_NUMBER";
    case FieldType::kPassportIssuingCountry:
      return "PASSPORT_ISSUING_COUNTRY";
    case FieldType::kPassportExpirationDate:
      return "PASSPORT_EXPIRATION_DATE";
    case FieldType::kPassportIssueDate:
      return "PASSPORT_ISSUE_DATE";
    case FieldType::kLoyaltyMembershipProgram:
      return "LOYALTY_MEMBERSHIP_PROGRAM";
    case FieldType::kLoyaltyMembershipProvider:
      return "LOYALTY_MEMBERSHIP_PROVIDER";
    case FieldType::kLoyaltyMembershipId:
      return "LOYALTY_MEMBERSHIP_ID";
    case FieldType::kVehicleLicensePlate:
      return "VEHICLE_LICENSE_PLATE";
    case FieldType::kVehicleVin:
      return "VEHICLE_VIN";
    case FieldType::kVehicleMake:
      return "VEHICLE_MAKE";
    case FieldType::kVehicleModel:
      return "VEHICLE_MODEL";
    case FieldType::kDriversLicenseRegion:
      return "DRIVERS_LICENSE_REGION";
    case FieldType::kDriversLicenseNumber:
      return "DRIVERS_LICENSE_NUMBER";
    case FieldType::kDriversLicenseExpirationDate:
      return "DRIVERS_LICENSE_EXPIRATION_DATE";
    case FieldType::kDriversLicenseIssueDate:
      return "DRIVERS_LICENSE_ISSUE_DATE";
    case FieldType::kVehicleYear:
      return "VEHICLE_YEAR";
    case FieldType::kVehiclePlateState:
      return "VEHICLE_PLATE_STATE";
    case FieldType::kEmailOrLoyaltyMembershipId:
      return "EMAIL_OR_LOYALTY_MEMBERSHIP_ID";
    case FieldType::kNationalIdCardNumber:
      return "NATIONAL_ID_CARD_NUMBER";
    case FieldType::kNationalIdCardExpirationDate:
      return "NATIONAL_ID_CARD_EXPIRATION_DATE";
    case FieldType::kNationalIdCardIssueDate:
      return "NATIONAL_ID_CARD_ISSUE_DATE";
    case FieldType::kNationalIdCardIssuingCountry:
      return "NATIONAL_ID_CARD_ISSUING_COUNTRY";
    case FieldType::kKnownTravelerNumber:
      return "KNOWN_TRAVELER_NUMBER";
    case FieldType::kKnownTravelerNumberExpirationDate:
      return "KNOWN_TRAVELER_NUMBER_EXPIRATION_DATE";
    case FieldType::kRedressNumber:
      return "REDRESS_NUMBER";
    case FieldType::kAddressHomeZipPrefix:
      return "ADDRESS_HOME_ZIP_PREFIX";
    case FieldType::kAddressHomeZipSuffix:
      return "ADDRESS_HOME_ZIP_SUFFIX";
    case FieldType::kFlightReservationFlightNumber:
      return "FLIGHT_RESERVATION_FLIGHT_NUMBER";
    case FieldType::kFlightReservationTicketNumber:
      return "FLIGHT_RESERVATION_TICKET_NUMBER";
    case FieldType::kFlightReservationConfirmationCode:
      return "FLIGHT_RESERVATION_CONFIRMATION_CODE";
    case FieldType::kFlightReservationDepartureAirport:
      return "FLIGHT_RESERVATION_DEPARTURE_AIRPORT";
    case FieldType::kFlightReservationArrivalAirport:
      return "FLIGHT_RESERVATION_ARRIVAL_AIRPORT";
    case FieldType::kFlightReservationPassengerName:
      return "FLIGHT_RESERVATION_PASSENGER_NAME";
    case FieldType::kFlightReservationDepartureDate:
      return "FLIGHT_RESERVATION_DEPARTURE_DATE";
    case FieldType::kAddressHomeZipAndCity:
      return "ADDRESS_HOME_ZIP_AND_CITY";
    case FieldType::kOrderId:
      return "ORDER_ID";
    case FieldType::kOrderDate:
      return "ORDER_DATE";
    case FieldType::kOrderMerchantName:
      return "ORDER_MERCHANT_NAME";
    case FieldType::kShipmentTrackingNumber:
      return "SHIPMENT_TRACKING_NUMBER";
    case FieldType::kMaxValidFieldType:
      return "MAX_VALID_FIELD_TYPE";
    case FieldType::kNone:
      return "";
  }
  NOTREACHED();
}

FieldType ParseFieldType(std::string_view enum_string) {
  if (enum_string == "NO_SERVER_DATA")
    return FieldType::kNoServerData;
  if (enum_string == "UNKNOWN_TYPE")
    return FieldType::kUnknownType;
  if (enum_string == "EMPTY_TYPE")
    return FieldType::kEmptyType;
  if (enum_string == "NAME_FIRST")
    return FieldType::kNameFirst;
  if (enum_string == "NAME_MIDDLE")
    return FieldType::kNameMiddle;
  if (enum_string == "NAME_LAST")
    return FieldType::kNameLast;
  if (enum_string == "NAME_MIDDLE_INITIAL")
    return FieldType::kNameMiddleInitial;
  if (enum_string == "NAME_FULL")
    return FieldType::kNameFull;
  if (enum_string == "NAME_SUFFIX")
    return FieldType::kNameSuffix;
  if (enum_string == "ALTERNATIVE_FULL_NAME")
    return FieldType::kAlternativeFullName;
  if (enum_string == "ALTERNATIVE_GIVEN_NAME")
    return FieldType::kAlternativeGivenName;
  if (enum_string == "ALTERNATIVE_FAMILY_NAME")
    return FieldType::kAlternativeFamilyName;
  if (enum_string == "EMAIL_ADDRESS")
    return FieldType::kEmailAddress;
  if (enum_string == "PHONE_HOME_NUMBER")
    return FieldType::kPhoneHomeNumber;
  if (enum_string == "PHONE_HOME_CITY_CODE")
    return FieldType::kPhoneHomeCityCode;
  if (enum_string == "PHONE_HOME_COUNTRY_CODE")
    return FieldType::kPhoneHomeCountryCode;
  if (enum_string == "PHONE_HOME_CITY_AND_NUMBER")
    return FieldType::kPhoneHomeCityAndNumber;
  if (enum_string == "PHONE_HOME_WHOLE_NUMBER")
    return FieldType::kPhoneHomeWholeNumber;
  if (enum_string == "ADDRESS_HOME_LINE1")
    return FieldType::kAddressHomeLine1;
  if (enum_string == "ADDRESS_HOME_LINE2")
    return FieldType::kAddressHomeLine2;
  if (enum_string == "ADDRESS_HOME_APT_NUM")
    return FieldType::kAddressHomeAptNum;
  if (enum_string == "ADDRESS_HOME_CITY")
    return FieldType::kAddressHomeCity;
  if (enum_string == "ADDRESS_HOME_STATE")
    return FieldType::kAddressHomeState;
  if (enum_string == "ADDRESS_HOME_ZIP")
    return FieldType::kAddressHomeZip;
  if (enum_string == "ADDRESS_HOME_COUNTRY")
    return FieldType::kAddressHomeCountry;
  if (enum_string == "CREDIT_CARD_NAME_FULL")
    return FieldType::kCreditCardNameFull;
  if (enum_string == "CREDIT_CARD_NUMBER")
    return FieldType::kCreditCardNumber;
  if (enum_string == "CREDIT_CARD_EXP_MONTH")
    return FieldType::kCreditCardExpMonth;
  if (enum_string == "CREDIT_CARD_EXP_2_DIGIT_YEAR")
    return FieldType::kCreditCardExp2DigitYear;
  if (enum_string == "CREDIT_CARD_EXP_4_DIGIT_YEAR")
    return FieldType::kCreditCardExp4DigitYear;
  if (enum_string == "CREDIT_CARD_EXP_DATE_2_DIGIT_YEAR")
    return FieldType::kCreditCardExpDate2DigitYear;
  if (enum_string == "CREDIT_CARD_EXP_DATE_4_DIGIT_YEAR")
    return FieldType::kCreditCardExpDate4DigitYear;
  if (enum_string == "CREDIT_CARD_TYPE")
    return FieldType::kCreditCardType;
  if (enum_string == "CREDIT_CARD_VERIFICATION_CODE")
    return FieldType::kCreditCardVerificationCode;
  if (enum_string == "COMPANY_NAME")
    return FieldType::kCompanyName;
  if (enum_string == "MERCHANT_EMAIL_SIGNUP")
    return FieldType::kMerchantEmailSignup;
  if (enum_string == "MERCHANT_PROMO_CODE")
    return FieldType::kMerchantPromoCode;
  if (enum_string == "PASSWORD")
    return FieldType::kPassword;
  if (enum_string == "ACCOUNT_CREATION_PASSWORD")
    return FieldType::kAccountCreationPassword;
  if (enum_string == "ADDRESS_HOME_STREET_ADDRESS")
    return FieldType::kAddressHomeStreetAddress;
  if (enum_string == "ADDRESS_HOME_SORTING_CODE")
    return FieldType::kAddressHomeSortingCode;
  if (enum_string == "ADDRESS_HOME_DEPENDENT_LOCALITY")
    return FieldType::kAddressHomeDependentLocality;
  if (enum_string == "ADDRESS_HOME_LINE3")
    return FieldType::kAddressHomeLine3;
  if (enum_string == "NOT_ACCOUNT_CREATION_PASSWORD")
    return FieldType::kNotAccountCreationPassword;
  if (enum_string == "USERNAME")
    return FieldType::kUsername;
  if (enum_string == "USERNAME_AND_EMAIL_ADDRESS")
    return FieldType::kUsernameAndEmailAddress;
  if (enum_string == "NEW_PASSWORD")
    return FieldType::kNewPassword;
  if (enum_string == "PROBABLY_NEW_PASSWORD")
    return FieldType::kProbablyNewPassword;
  if (enum_string == "NOT_NEW_PASSWORD")
    return FieldType::kNotNewPassword;
  if (enum_string == "CREDIT_CARD_NAME_FIRST")
    return FieldType::kCreditCardNameFirst;
  if (enum_string == "CREDIT_CARD_NAME_LAST")
    return FieldType::kCreditCardNameLast;
  if (enum_string == "PHONE_HOME_EXTENSION")
    return FieldType::kPhoneHomeExtension;
  if (enum_string == "CONFIRMATION_PASSWORD")
    return FieldType::kConfirmationPassword;
  if (enum_string == "AMBIGUOUS_TYPE")
    return FieldType::kAmbiguousType;
  if (enum_string == "SEARCH_TERM")
    return FieldType::kSearchTerm;
  if (enum_string == "PRICE")
    return FieldType::kPrice;
  if (enum_string == "NOT_PASSWORD")
    return FieldType::kNotPassword;
  if (enum_string == "SINGLE_USERNAME")
    return FieldType::kSingleUsername;
  if (enum_string == "NOT_USERNAME")
    return FieldType::kNotUsername;
  if (enum_string == "UPI_VPA")
    return FieldType::kUpiVpa;
  if (enum_string == "ADDRESS_HOME_STREET_NAME")
    return FieldType::kAddressHomeStreetName;
  if (enum_string == "ADDRESS_HOME_HOUSE_NUMBER")
    return FieldType::kAddressHomeHouseNumber;
  if (enum_string == "ADDRESS_HOME_SUBPREMISE")
    return FieldType::kAddressHomeSubpremise;
  if (enum_string == "ADDRESS_HOME_OTHER_SUBUNIT")
    return FieldType::kAddressHomeOtherSubunit;
  if (enum_string == "NAME_LAST_FIRST")
    return FieldType::kNameLastFirst;
  if (enum_string == "NAME_LAST_CONJUNCTION")
    return FieldType::kNameLastConjunction;
  if (enum_string == "NAME_LAST_SECOND")
    return FieldType::kNameLastSecond;
  if (enum_string == "NAME_HONORIFIC_PREFIX")
    return FieldType::kNameHonorificPrefix;
  if (enum_string == "ADDRESS_HOME_ADDRESS")
    return FieldType::kAddressHomeAddress;
  if (enum_string == "ADDRESS_HOME_ADDRESS_WITH_NAME")
    return FieldType::kAddressHomeAddressWithName;
  if (enum_string == "ADDRESS_HOME_FLOOR")
    return FieldType::kAddressHomeFloor;
  if (enum_string == "PHONE_HOME_CITY_CODE_WITH_TRUNK_PREFIX")
    return FieldType::kPhoneHomeCityCodeWithTrunkPrefix;
  if (enum_string == "PHONE_HOME_CITY_AND_NUMBER_WITHOUT_TRUNK_PREFIX")
    return FieldType::kPhoneHomeCityAndNumberWithoutTrunkPrefix;
  if (enum_string == "PHONE_HOME_NUMBER_PREFIX")
    return FieldType::kPhoneHomeNumberPrefix;
  if (enum_string == "PHONE_HOME_NUMBER_SUFFIX")
    return FieldType::kPhoneHomeNumberSuffix;
  if (enum_string == "IBAN_VALUE")
    return FieldType::kIbanValue;
  if (enum_string == "CREDIT_CARD_STANDALONE_VERIFICATION_CODE")
    return FieldType::kCreditCardStandaloneVerificationCode;
  if (enum_string == "NUMERIC_QUANTITY")
    return FieldType::kNumericQuantity;
  if (enum_string == "ONE_TIME_CODE")
    return FieldType::kOneTimeCode;
  if (enum_string == "DELIVERY_INSTRUCTIONS")
    return FieldType::kDeliveryInstructions;
  if (enum_string == "ADDRESS_HOME_OVERFLOW")
    return FieldType::kAddressHomeOverflow;
  if (enum_string == "ADDRESS_HOME_LANDMARK")
    return FieldType::kAddressHomeLandmark;
  if (enum_string == "ADDRESS_HOME_OVERFLOW_AND_LANDMARK")
    return FieldType::kAddressHomeOverflowAndLandmark;
  if (enum_string == "ADDRESS_HOME_ADMIN_LEVEL2")
    return FieldType::kAddressHomeAdminLevel2;
  if (enum_string == "ADDRESS_HOME_STREET_LOCATION")
    return FieldType::kAddressHomeStreetLocation;
  if (enum_string == "ADDRESS_HOME_BETWEEN_STREETS")
    return FieldType::kAddressHomeBetweenStreets;
  if (enum_string == "ADDRESS_HOME_BETWEEN_STREETS_OR_LANDMARK")
    return FieldType::kAddressHomeBetweenStreetsOrLandmark;
  if (enum_string == "ADDRESS_HOME_STREET_LOCATION_AND_LOCALITY")
    return FieldType::kAddressHomeStreetLocationAndLocality;
  if (enum_string == "ADDRESS_HOME_STREET_LOCATION_AND_LANDMARK")
    return FieldType::kAddressHomeStreetLocationAndLandmark;
  if (enum_string == "ADDRESS_HOME_DEPENDENT_LOCALITY_AND_LANDMARK")
    return FieldType::kAddressHomeDependentLocalityAndLandmark;
  if (enum_string == "ADDRESS_HOME_BETWEEN_STREETS_1")
    return FieldType::kAddressHomeBetweenStreets1;
  if (enum_string == "ADDRESS_HOME_BETWEEN_STREETS_2")
    return FieldType::kAddressHomeBetweenStreets2;
  if (enum_string == "SINGLE_USERNAME_FORGOT_PASSWORD")
    return FieldType::kSingleUsernameForgotPassword;
  if (enum_string == "ADDRESS_HOME_APT")
    return FieldType::kAddressHomeApt;
  if (enum_string == "ADDRESS_HOME_APT_TYPE")
    return FieldType::kAddressHomeAptType;
  if (enum_string == "ADDRESS_HOME_HOUSE_NUMBER_AND_APT")
    return FieldType::kAddressHomeHouseNumberAndApt;
  if (enum_string == "SINGLE_USERNAME_WITH_INTERMEDIATE_VALUES")
    return FieldType::kSingleUsernameWithIntermediateValues;
  if (enum_string == "PASSPORT_NUMBER")
    return FieldType::kPassportNumber;
  if (enum_string == "PASSPORT_ISSUING_COUNTRY")
    return FieldType::kPassportIssuingCountry;
  if (enum_string == "PASSPORT_EXPIRATION_DATE")
    return FieldType::kPassportExpirationDate;
  if (enum_string == "PASSPORT_ISSUE_DATE")
    return FieldType::kPassportIssueDate;
  if (enum_string == "LOYALTY_MEMBERSHIP_PROGRAM")
    return FieldType::kLoyaltyMembershipProgram;
  if (enum_string == "LOYALTY_MEMBERSHIP_PROVIDER")
    return FieldType::kLoyaltyMembershipProvider;
  if (enum_string == "LOYALTY_MEMBERSHIP_ID")
    return FieldType::kLoyaltyMembershipId;
  if (enum_string == "VEHICLE_LICENSE_PLATE")
    return FieldType::kVehicleLicensePlate;
  if (enum_string == "VEHICLE_VIN")
    return FieldType::kVehicleVin;
  if (enum_string == "VEHICLE_MAKE")
    return FieldType::kVehicleMake;
  if (enum_string == "VEHICLE_MODEL")
    return FieldType::kVehicleModel;
  if (enum_string == "DRIVERS_LICENSE_REGION")
    return FieldType::kDriversLicenseRegion;
  if (enum_string == "DRIVERS_LICENSE_NUMBER")
    return FieldType::kDriversLicenseNumber;
  if (enum_string == "DRIVERS_LICENSE_EXPIRATION_DATE")
    return FieldType::kDriversLicenseExpirationDate;
  if (enum_string == "DRIVERS_LICENSE_ISSUE_DATE")
    return FieldType::kDriversLicenseIssueDate;
  if (enum_string == "VEHICLE_YEAR")
    return FieldType::kVehicleYear;
  if (enum_string == "VEHICLE_PLATE_STATE")
    return FieldType::kVehiclePlateState;
  if (enum_string == "EMAIL_OR_LOYALTY_MEMBERSHIP_ID")
    return FieldType::kEmailOrLoyaltyMembershipId;
  if (enum_string == "NATIONAL_ID_CARD_NUMBER")
    return FieldType::kNationalIdCardNumber;
  if (enum_string == "NATIONAL_ID_CARD_EXPIRATION_DATE")
    return FieldType::kNationalIdCardExpirationDate;
  if (enum_string == "NATIONAL_ID_CARD_ISSUE_DATE")
    return FieldType::kNationalIdCardIssueDate;
  if (enum_string == "NATIONAL_ID_CARD_ISSUING_COUNTRY")
    return FieldType::kNationalIdCardIssuingCountry;
  if (enum_string == "KNOWN_TRAVELER_NUMBER")
    return FieldType::kKnownTravelerNumber;
  if (enum_string == "KNOWN_TRAVELER_NUMBER_EXPIRATION_DATE")
    return FieldType::kKnownTravelerNumberExpirationDate;
  if (enum_string == "REDRESS_NUMBER")
    return FieldType::kRedressNumber;
  if (enum_string == "ADDRESS_HOME_ZIP_PREFIX")
    return FieldType::kAddressHomeZipPrefix;
  if (enum_string == "ADDRESS_HOME_ZIP_SUFFIX")
    return FieldType::kAddressHomeZipSuffix;
  if (enum_string == "FLIGHT_RESERVATION_FLIGHT_NUMBER")
    return FieldType::kFlightReservationFlightNumber;
  if (enum_string == "FLIGHT_RESERVATION_TICKET_NUMBER")
    return FieldType::kFlightReservationTicketNumber;
  if (enum_string == "FLIGHT_RESERVATION_CONFIRMATION_CODE")
    return FieldType::kFlightReservationConfirmationCode;
  if (enum_string == "FLIGHT_RESERVATION_DEPARTURE_AIRPORT")
    return FieldType::kFlightReservationDepartureAirport;
  if (enum_string == "FLIGHT_RESERVATION_ARRIVAL_AIRPORT")
    return FieldType::kFlightReservationArrivalAirport;
  if (enum_string == "FLIGHT_RESERVATION_PASSENGER_NAME")
    return FieldType::kFlightReservationPassengerName;
  if (enum_string == "FLIGHT_RESERVATION_DEPARTURE_DATE")
    return FieldType::kFlightReservationDepartureDate;
  if (enum_string == "ADDRESS_HOME_ZIP_AND_CITY")
    return FieldType::kAddressHomeZipAndCity;
  if (enum_string == "ORDER_ID")
    return FieldType::kOrderId;
  if (enum_string == "ORDER_DATE")
    return FieldType::kOrderDate;
  if (enum_string == "ORDER_MERCHANT_NAME")
    return FieldType::kOrderMerchantName;
  if (enum_string == "SHIPMENT_TRACKING_NUMBER")
    return FieldType::kShipmentTrackingNumber;
  if (enum_string == "MAX_VALID_FIELD_TYPE")
    return FieldType::kMaxValidFieldType;
  return FieldType::kNone;
}

std::u16string GetFieldTypeParseError(std::string_view enum_string) {
  return u"expected \"NO_SERVER_DATA\" or \"UNKNOWN_TYPE\" or \"EMPTY_TYPE\" or \"NAME_FIRST\" or \"NAME_MIDDLE\" or \"NAME_LAST\" or \"NAME_MIDDLE_INITIAL\" or \"NAME_FULL\" or \"NAME_SUFFIX\" or \"ALTERNATIVE_FULL_NAME\" or \"ALTERNATIVE_GIVEN_NAME\" or \"ALTERNATIVE_FAMILY_NAME\" or \"EMAIL_ADDRESS\" or \"PHONE_HOME_NUMBER\" or \"PHONE_HOME_CITY_CODE\" or \"PHONE_HOME_COUNTRY_CODE\" or \"PHONE_HOME_CITY_AND_NUMBER\" or \"PHONE_HOME_WHOLE_NUMBER\" or \"ADDRESS_HOME_LINE1\" or \"ADDRESS_HOME_LINE2\" or \"ADDRESS_HOME_APT_NUM\" or \"ADDRESS_HOME_CITY\" or \"ADDRESS_HOME_STATE\" or \"ADDRESS_HOME_ZIP\" or \"ADDRESS_HOME_COUNTRY\" or \"CREDIT_CARD_NAME_FULL\" or \"CREDIT_CARD_NUMBER\" or \"CREDIT_CARD_EXP_MONTH\" or \"CREDIT_CARD_EXP_2_DIGIT_YEAR\" or \"CREDIT_CARD_EXP_4_DIGIT_YEAR\" or \"CREDIT_CARD_EXP_DATE_2_DIGIT_YEAR\" or \"CREDIT_CARD_EXP_DATE_4_DIGIT_YEAR\" or \"CREDIT_CARD_TYPE\" or \"CREDIT_CARD_VERIFICATION_CODE\" or \"COMPANY_NAME\" or \"MERCHANT_EMAIL_SIGNUP\" or \"MERCHANT_PROMO_CODE\" or \"PASSWORD\" or \"ACCOUNT_CREATION_PASSWORD\" or \"ADDRESS_HOME_STREET_ADDRESS\" or \"ADDRESS_HOME_SORTING_CODE\" or \"ADDRESS_HOME_DEPENDENT_LOCALITY\" or \"ADDRESS_HOME_LINE3\" or \"NOT_ACCOUNT_CREATION_PASSWORD\" or \"USERNAME\" or \"USERNAME_AND_EMAIL_ADDRESS\" or \"NEW_PASSWORD\" or \"PROBABLY_NEW_PASSWORD\" or \"NOT_NEW_PASSWORD\" or \"CREDIT_CARD_NAME_FIRST\" or \"CREDIT_CARD_NAME_LAST\" or \"PHONE_HOME_EXTENSION\" or \"CONFIRMATION_PASSWORD\" or \"AMBIGUOUS_TYPE\" or \"SEARCH_TERM\" or \"PRICE\" or \"NOT_PASSWORD\" or \"SINGLE_USERNAME\" or \"NOT_USERNAME\" or \"UPI_VPA\" or \"ADDRESS_HOME_STREET_NAME\" or \"ADDRESS_HOME_HOUSE_NUMBER\" or \"ADDRESS_HOME_SUBPREMISE\" or \"ADDRESS_HOME_OTHER_SUBUNIT\" or \"NAME_LAST_FIRST\" or \"NAME_LAST_CONJUNCTION\" or \"NAME_LAST_SECOND\" or \"NAME_HONORIFIC_PREFIX\" or \"ADDRESS_HOME_ADDRESS\" or \"ADDRESS_HOME_ADDRESS_WITH_NAME\" or \"ADDRESS_HOME_FLOOR\" or \"PHONE_HOME_CITY_CODE_WITH_TRUNK_PREFIX\" or \"PHONE_HOME_CITY_AND_NUMBER_WITHOUT_TRUNK_PREFIX\" or \"PHONE_HOME_NUMBER_PREFIX\" or \"PHONE_HOME_NUMBER_SUFFIX\" or \"IBAN_VALUE\" or \"CREDIT_CARD_STANDALONE_VERIFICATION_CODE\" or \"NUMERIC_QUANTITY\" or \"ONE_TIME_CODE\" or \"DELIVERY_INSTRUCTIONS\" or \"ADDRESS_HOME_OVERFLOW\" or \"ADDRESS_HOME_LANDMARK\" or \"ADDRESS_HOME_OVERFLOW_AND_LANDMARK\" or \"ADDRESS_HOME_ADMIN_LEVEL2\" or \"ADDRESS_HOME_STREET_LOCATION\" or \"ADDRESS_HOME_BETWEEN_STREETS\" or \"ADDRESS_HOME_BETWEEN_STREETS_OR_LANDMARK\" or \"ADDRESS_HOME_STREET_LOCATION_AND_LOCALITY\" or \"ADDRESS_HOME_STREET_LOCATION_AND_LANDMARK\" or \"ADDRESS_HOME_DEPENDENT_LOCALITY_AND_LANDMARK\" or \"ADDRESS_HOME_BETWEEN_STREETS_1\" or \"ADDRESS_HOME_BETWEEN_STREETS_2\" or \"SINGLE_USERNAME_FORGOT_PASSWORD\" or \"ADDRESS_HOME_APT\" or \"ADDRESS_HOME_APT_TYPE\" or \"ADDRESS_HOME_HOUSE_NUMBER_AND_APT\" or \"SINGLE_USERNAME_WITH_INTERMEDIATE_VALUES\" or \"PASSPORT_NUMBER\" or \"PASSPORT_ISSUING_COUNTRY\" or \"PASSPORT_EXPIRATION_DATE\" or \"PASSPORT_ISSUE_DATE\" or \"LOYALTY_MEMBERSHIP_PROGRAM\" or \"LOYALTY_MEMBERSHIP_PROVIDER\" or \"LOYALTY_MEMBERSHIP_ID\" or \"VEHICLE_LICENSE_PLATE\" or \"VEHICLE_VIN\" or \"VEHICLE_MAKE\" or \"VEHICLE_MODEL\" or \"DRIVERS_LICENSE_REGION\" or \"DRIVERS_LICENSE_NUMBER\" or \"DRIVERS_LICENSE_EXPIRATION_DATE\" or \"DRIVERS_LICENSE_ISSUE_DATE\" or \"VEHICLE_YEAR\" or \"VEHICLE_PLATE_STATE\" or \"EMAIL_OR_LOYALTY_MEMBERSHIP_ID\" or \"NATIONAL_ID_CARD_NUMBER\" or \"NATIONAL_ID_CARD_EXPIRATION_DATE\" or \"NATIONAL_ID_CARD_ISSUE_DATE\" or \"NATIONAL_ID_CARD_ISSUING_COUNTRY\" or \"KNOWN_TRAVELER_NUMBER\" or \"KNOWN_TRAVELER_NUMBER_EXPIRATION_DATE\" or \"REDRESS_NUMBER\" or \"ADDRESS_HOME_ZIP_PREFIX\" or \"ADDRESS_HOME_ZIP_SUFFIX\" or \"FLIGHT_RESERVATION_FLIGHT_NUMBER\" or \"FLIGHT_RESERVATION_TICKET_NUMBER\" or \"FLIGHT_RESERVATION_CONFIRMATION_CODE\" or \"FLIGHT_RESERVATION_DEPARTURE_AIRPORT\" or \"FLIGHT_RESERVATION_ARRIVAL_AIRPORT\" or \"FLIGHT_RESERVATION_PASSENGER_NAME\" or \"FLIGHT_RESERVATION_DEPARTURE_DATE\" or \"ADDRESS_HOME_ZIP_AND_CITY\" or \"ORDER_ID\" or \"ORDER_DATE\" or \"ORDER_MERCHANT_NAME\" or \"SHIPMENT_TRACKING_NUMBER\" or \"MAX_VALID_FIELD_TYPE\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(AddressRecordType enum_param) {
  switch (enum_param) {
    case AddressRecordType::kLocalOrSyncable:
      return "LOCAL_OR_SYNCABLE";
    case AddressRecordType::kAccount:
      return "ACCOUNT";
    case AddressRecordType::kAccountHome:
      return "ACCOUNT_HOME";
    case AddressRecordType::kAccountWork:
      return "ACCOUNT_WORK";
    case AddressRecordType::kAccountNameEmail:
      return "ACCOUNT_NAME_EMAIL";
    case AddressRecordType::kNone:
      return "";
  }
  NOTREACHED();
}

AddressRecordType ParseAddressRecordType(std::string_view enum_string) {
  if (enum_string == "LOCAL_OR_SYNCABLE")
    return AddressRecordType::kLocalOrSyncable;
  if (enum_string == "ACCOUNT")
    return AddressRecordType::kAccount;
  if (enum_string == "ACCOUNT_HOME")
    return AddressRecordType::kAccountHome;
  if (enum_string == "ACCOUNT_WORK")
    return AddressRecordType::kAccountWork;
  if (enum_string == "ACCOUNT_NAME_EMAIL")
    return AddressRecordType::kAccountNameEmail;
  return AddressRecordType::kNone;
}

std::u16string GetAddressRecordTypeParseError(std::string_view enum_string) {
  return u"expected \"LOCAL_OR_SYNCABLE\" or \"ACCOUNT\" or \"ACCOUNT_HOME\" or \"ACCOUNT_WORK\" or \"ACCOUNT_NAME_EMAIL\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(AttributeTypeDataType enum_param) {
  switch (enum_param) {
    case AttributeTypeDataType::kCountry:
      return "COUNTRY";
    case AttributeTypeDataType::kDate:
      return "DATE";
    case AttributeTypeDataType::kString:
      return "STRING";
    case AttributeTypeDataType::kNone:
      return "";
  }
  NOTREACHED();
}

AttributeTypeDataType ParseAttributeTypeDataType(std::string_view enum_string) {
  if (enum_string == "COUNTRY")
    return AttributeTypeDataType::kCountry;
  if (enum_string == "DATE")
    return AttributeTypeDataType::kDate;
  if (enum_string == "STRING")
    return AttributeTypeDataType::kString;
  return AttributeTypeDataType::kNone;
}

std::u16string GetAttributeTypeDataTypeParseError(std::string_view enum_string) {
  return u"expected \"COUNTRY\" or \"DATE\" or \"STRING\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(EntityPassType enum_param) {
  switch (enum_param) {
    case EntityPassType::kPublicPass:
      return "PUBLIC_PASS";
    case EntityPassType::kPrivatePass:
      return "PRIVATE_PASS";
    case EntityPassType::kNone:
      return "";
  }
  NOTREACHED();
}

EntityPassType ParseEntityPassType(std::string_view enum_string) {
  if (enum_string == "PUBLIC_PASS")
    return EntityPassType::kPublicPass;
  if (enum_string == "PRIVATE_PASS")
    return EntityPassType::kPrivatePass;
  return EntityPassType::kNone;
}

std::u16string GetEntityPassTypeParseError(std::string_view enum_string) {
  return u"expected \"PUBLIC_PASS\" or \"PRIVATE_PASS\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


AutofillMetadata::AutofillMetadata()
: record_type() {}

AutofillMetadata::~AutofillMetadata() = default;
AutofillMetadata::AutofillMetadata(AutofillMetadata&& rhs) noexcept = default;
AutofillMetadata& AutofillMetadata::operator=(AutofillMetadata&& rhs) noexcept = default;
AutofillMetadata AutofillMetadata::Clone() const {
  AutofillMetadata out;
  out.summary_label = summary_label;
  out.summary_sublabel = summary_sublabel;
  out.record_type = record_type;
  out.is_local = is_local;
  out.is_migratable = is_migratable;
  out.is_virtual_card_enrollment_eligible = is_virtual_card_enrollment_eligible;
  out.is_virtual_card_enrolled = is_virtual_card_enrolled;
  return out;
}

// static
bool AutofillMetadata::Populate(
    const base::DictValue& dict, AutofillMetadata& out) {
  out.record_type = AddressRecordType();
  const base::Value* summary_label_value = dict.Find("summaryLabel");
  if (!summary_label_value) {
    return false;
  }
  {
    auto* temp = (*summary_label_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.summary_label = *temp;
  }

  const base::Value* summary_sublabel_value = dict.Find("summarySublabel");
  if (summary_sublabel_value) {
    {
      auto* temp = (*summary_sublabel_value).GetIfString();
      if (!temp) {
        out.summary_sublabel = std::nullopt;
        return false;
      }
      out.summary_sublabel = *temp;
    }
  }

  const base::Value* record_type_value = dict.Find("recordType");
  if (record_type_value) {
    {
      const std::string* address_record_type_as_string = (*record_type_value).GetIfString();
      if (!address_record_type_as_string) {
        return false;
      }
      out.record_type = ParseAddressRecordType(*address_record_type_as_string);
      if (out.record_type == AddressRecordType()) {
        return false;
      }
    }
    } else {
    out.record_type = AddressRecordType();
  }

  const base::Value* is_local_value = dict.Find("isLocal");
  if (is_local_value) {
    {
      auto temp = (*is_local_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_local = std::nullopt;
        return false;
      }
      out.is_local = *temp;
    }
  }

  const base::Value* is_migratable_value = dict.Find("isMigratable");
  if (is_migratable_value) {
    {
      auto temp = (*is_migratable_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_migratable = std::nullopt;
        return false;
      }
      out.is_migratable = *temp;
    }
  }

  const base::Value* is_virtual_card_enrollment_eligible_value = dict.Find("isVirtualCardEnrollmentEligible");
  if (is_virtual_card_enrollment_eligible_value) {
    {
      auto temp = (*is_virtual_card_enrollment_eligible_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_virtual_card_enrollment_eligible = std::nullopt;
        return false;
      }
      out.is_virtual_card_enrollment_eligible = *temp;
    }
  }

  const base::Value* is_virtual_card_enrolled_value = dict.Find("isVirtualCardEnrolled");
  if (is_virtual_card_enrolled_value) {
    {
      auto temp = (*is_virtual_card_enrolled_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_virtual_card_enrolled = std::nullopt;
        return false;
      }
      out.is_virtual_card_enrolled = *temp;
    }
  }

  return true;
}

// static
bool AutofillMetadata::Populate(
    const base::Value& value, AutofillMetadata& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AutofillMetadata> AutofillMetadata::FromValue(const base::DictValue& value) {
  AutofillMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AutofillMetadata> AutofillMetadata::FromValue(const base::Value& value) {
  AutofillMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AutofillMetadata::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("summaryLabel", this->summary_label);

  if (this->summary_sublabel) {
    to_value_result.Set("summarySublabel", *this->summary_sublabel);

  }
  if (this->record_type != AddressRecordType()) {
    to_value_result.Set("recordType", autofill_private::ToString(this->record_type));

  }
  if (this->is_local) {
    to_value_result.Set("isLocal", *this->is_local);

  }
  if (this->is_migratable) {
    to_value_result.Set("isMigratable", *this->is_migratable);

  }
  if (this->is_virtual_card_enrollment_eligible) {
    to_value_result.Set("isVirtualCardEnrollmentEligible", *this->is_virtual_card_enrollment_eligible);

  }
  if (this->is_virtual_card_enrolled) {
    to_value_result.Set("isVirtualCardEnrolled", *this->is_virtual_card_enrolled);

  }

  return to_value_result;
}


AddressField::AddressField()
: type() {}

AddressField::~AddressField() = default;
AddressField::AddressField(AddressField&& rhs) noexcept = default;
AddressField& AddressField::operator=(AddressField&& rhs) noexcept = default;
AddressField AddressField::Clone() const {
  AddressField out;
  out.type = type;
  out.value = value;
  return out;
}

// static
bool AddressField::Populate(
    const base::DictValue& dict, AddressField& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* field_type_as_string = (*type_value).GetIfString();
    if (!field_type_as_string) {
      return false;
    }
    out.type = ParseFieldType(*field_type_as_string);
    if (out.type == FieldType()) {
      return false;
    }
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
bool AddressField::Populate(
    const base::Value& value, AddressField& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AddressField> AddressField::FromValue(const base::DictValue& value) {
  AddressField out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AddressField> AddressField::FromValue(const base::Value& value) {
  AddressField out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AddressField::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("type", autofill_private::ToString(this->type));

  to_value_result.Set("value", this->value);


  return to_value_result;
}


AddressEntry::AddressEntry()
 {}

AddressEntry::~AddressEntry() = default;
AddressEntry::AddressEntry(AddressEntry&& rhs) noexcept = default;
AddressEntry& AddressEntry::operator=(AddressEntry&& rhs) noexcept = default;
AddressEntry AddressEntry::Clone() const {
  AddressEntry out;
  out.guid = guid;
  out.fields.reserve(fields.size());
  for (const auto& element : fields) {
    json_schema_compiler::util::AppendToContainer(out.fields, element.Clone());
  }
  out.language_code = language_code;
  if (metadata) {
    out.metadata = metadata->Clone();
  }
  return out;
}

// static
bool AddressEntry::Populate(
    const base::DictValue& dict, AddressEntry& out) {
  const base::Value* guid_value = dict.Find("guid");
  if (guid_value) {
    {
      auto* temp = (*guid_value).GetIfString();
      if (!temp) {
        out.guid = std::nullopt;
        return false;
      }
      out.guid = *temp;
    }
  }

  const base::Value* fields_value = dict.Find("fields");
  if (!fields_value) {
    return false;
  }
  {
    if (!(*fields_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*fields_value).GetList(), out.fields)) {
        return false;
      }
    }
  }

  const base::Value* language_code_value = dict.Find("languageCode");
  if (language_code_value) {
    {
      auto* temp = (*language_code_value).GetIfString();
      if (!temp) {
        out.language_code = std::nullopt;
        return false;
      }
      out.language_code = *temp;
    }
  }

  const base::Value* metadata_value = dict.Find("metadata");
  if (metadata_value) {
    {
      if (!(*metadata_value).is_dict()) {
        return false;
      }
      else {
        AutofillMetadata temp;
        if (!AutofillMetadata::Populate((*metadata_value).GetDict(), temp))
          return false;
        out.metadata = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool AddressEntry::Populate(
    const base::Value& value, AddressEntry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AddressEntry> AddressEntry::FromValue(const base::DictValue& value) {
  AddressEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AddressEntry> AddressEntry::FromValue(const base::Value& value) {
  AddressEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AddressEntry::ToValue() const {
  base::DictValue to_value_result;

  if (this->guid) {
    to_value_result.Set("guid", *this->guid);

  }
  to_value_result.Set("fields", json_schema_compiler::util::CreateValueFromArray(this->fields));

  if (this->language_code) {
    to_value_result.Set("languageCode", *this->language_code);

  }
  if (this->metadata) {
    to_value_result.Set("metadata", (this->metadata)->ToValue());

  }

  return to_value_result;
}


CountryEntry::CountryEntry()
 {}

CountryEntry::~CountryEntry() = default;
CountryEntry::CountryEntry(CountryEntry&& rhs) noexcept = default;
CountryEntry& CountryEntry::operator=(CountryEntry&& rhs) noexcept = default;
CountryEntry CountryEntry::Clone() const {
  CountryEntry out;
  out.name = name;
  out.country_code = country_code;
  return out;
}

// static
bool CountryEntry::Populate(
    const base::DictValue& dict, CountryEntry& out) {
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

  return true;
}

// static
bool CountryEntry::Populate(
    const base::Value& value, CountryEntry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CountryEntry> CountryEntry::FromValue(const base::DictValue& value) {
  CountryEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CountryEntry> CountryEntry::FromValue(const base::Value& value) {
  CountryEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue CountryEntry::ToValue() const {
  base::DictValue to_value_result;

  if (this->name) {
    to_value_result.Set("name", *this->name);

  }
  if (this->country_code) {
    to_value_result.Set("countryCode", *this->country_code);

  }

  return to_value_result;
}


AddressComponent::AddressComponent()
: field(),
is_long_field(false),
is_required(false) {}

AddressComponent::~AddressComponent() = default;
AddressComponent::AddressComponent(AddressComponent&& rhs) noexcept = default;
AddressComponent& AddressComponent::operator=(AddressComponent&& rhs) noexcept = default;
AddressComponent AddressComponent::Clone() const {
  AddressComponent out;
  out.field = field;
  out.field_name = field_name;
  out.is_long_field = is_long_field;
  out.is_required = is_required;
  out.placeholder = placeholder;
  return out;
}

// static
bool AddressComponent::Populate(
    const base::DictValue& dict, AddressComponent& out) {
  const base::Value* field_value = dict.Find("field");
  if (!field_value) {
    return false;
  }
  {
    const std::string* field_type_as_string = (*field_value).GetIfString();
    if (!field_type_as_string) {
      return false;
    }
    out.field = ParseFieldType(*field_type_as_string);
    if (out.field == FieldType()) {
      return false;
    }
  }

  const base::Value* field_name_value = dict.Find("fieldName");
  if (!field_name_value) {
    return false;
  }
  {
    auto* temp = (*field_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.field_name = *temp;
  }

  const base::Value* is_long_field_value = dict.Find("isLongField");
  if (!is_long_field_value) {
    return false;
  }
  {
    auto temp = (*is_long_field_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_long_field = *temp;
  }

  const base::Value* is_required_value = dict.Find("isRequired");
  if (!is_required_value) {
    return false;
  }
  {
    auto temp = (*is_required_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_required = *temp;
  }

  const base::Value* placeholder_value = dict.Find("placeholder");
  if (placeholder_value) {
    {
      auto* temp = (*placeholder_value).GetIfString();
      if (!temp) {
        out.placeholder = std::nullopt;
        return false;
      }
      out.placeholder = *temp;
    }
  }

  return true;
}

// static
bool AddressComponent::Populate(
    const base::Value& value, AddressComponent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AddressComponent> AddressComponent::FromValue(const base::DictValue& value) {
  AddressComponent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AddressComponent> AddressComponent::FromValue(const base::Value& value) {
  AddressComponent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AddressComponent::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("field", autofill_private::ToString(this->field));

  to_value_result.Set("fieldName", this->field_name);

  to_value_result.Set("isLongField", this->is_long_field);

  to_value_result.Set("isRequired", this->is_required);

  if (this->placeholder) {
    to_value_result.Set("placeholder", *this->placeholder);

  }

  return to_value_result;
}


AddressComponentRow::AddressComponentRow()
 {}

AddressComponentRow::~AddressComponentRow() = default;
AddressComponentRow::AddressComponentRow(AddressComponentRow&& rhs) noexcept = default;
AddressComponentRow& AddressComponentRow::operator=(AddressComponentRow&& rhs) noexcept = default;
AddressComponentRow AddressComponentRow::Clone() const {
  AddressComponentRow out;
  out.row.reserve(row.size());
  for (const auto& element : row) {
    json_schema_compiler::util::AppendToContainer(out.row, element.Clone());
  }
  return out;
}

// static
bool AddressComponentRow::Populate(
    const base::DictValue& dict, AddressComponentRow& out) {
  const base::Value* row_value = dict.Find("row");
  if (!row_value) {
    return false;
  }
  {
    if (!(*row_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*row_value).GetList(), out.row)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool AddressComponentRow::Populate(
    const base::Value& value, AddressComponentRow& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AddressComponentRow> AddressComponentRow::FromValue(const base::DictValue& value) {
  AddressComponentRow out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AddressComponentRow> AddressComponentRow::FromValue(const base::Value& value) {
  AddressComponentRow out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AddressComponentRow::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("row", json_schema_compiler::util::CreateValueFromArray(this->row));


  return to_value_result;
}


AddressComponents::AddressComponents()
 {}

AddressComponents::~AddressComponents() = default;
AddressComponents::AddressComponents(AddressComponents&& rhs) noexcept = default;
AddressComponents& AddressComponents::operator=(AddressComponents&& rhs) noexcept = default;
AddressComponents AddressComponents::Clone() const {
  AddressComponents out;
  out.components.reserve(components.size());
  for (const auto& element : components) {
    json_schema_compiler::util::AppendToContainer(out.components, element.Clone());
  }
  out.language_code = language_code;
  return out;
}

// static
bool AddressComponents::Populate(
    const base::DictValue& dict, AddressComponents& out) {
  const base::Value* components_value = dict.Find("components");
  if (!components_value) {
    return false;
  }
  {
    if (!(*components_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*components_value).GetList(), out.components)) {
        return false;
      }
    }
  }

  const base::Value* language_code_value = dict.Find("languageCode");
  if (!language_code_value) {
    return false;
  }
  {
    auto* temp = (*language_code_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.language_code = *temp;
  }

  return true;
}

// static
bool AddressComponents::Populate(
    const base::Value& value, AddressComponents& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AddressComponents> AddressComponents::FromValue(const base::DictValue& value) {
  AddressComponents out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AddressComponents> AddressComponents::FromValue(const base::Value& value) {
  AddressComponents out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AddressComponents::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("components", json_schema_compiler::util::CreateValueFromArray(this->components));

  to_value_result.Set("languageCode", this->language_code);


  return to_value_result;
}


CreditCardEntry::CreditCardEntry()
 {}

CreditCardEntry::~CreditCardEntry() = default;
CreditCardEntry::CreditCardEntry(CreditCardEntry&& rhs) noexcept = default;
CreditCardEntry& CreditCardEntry::operator=(CreditCardEntry&& rhs) noexcept = default;
CreditCardEntry CreditCardEntry::Clone() const {
  CreditCardEntry out;
  out.guid = guid;
  out.instrument_id = instrument_id;
  out.name = name;
  out.card_number = card_number;
  out.expiration_month = expiration_month;
  out.expiration_year = expiration_year;
  out.nickname = nickname;
  out.network = network;
  out.image_src = image_src;
  out.cvc = cvc;
  out.product_terms_url = product_terms_url;
  if (metadata) {
    out.metadata = metadata->Clone();
  }
  return out;
}

// static
bool CreditCardEntry::Populate(
    const base::DictValue& dict, CreditCardEntry& out) {
  const base::Value* guid_value = dict.Find("guid");
  if (guid_value) {
    {
      auto* temp = (*guid_value).GetIfString();
      if (!temp) {
        out.guid = std::nullopt;
        return false;
      }
      out.guid = *temp;
    }
  }

  const base::Value* instrument_id_value = dict.Find("instrumentId");
  if (instrument_id_value) {
    {
      auto* temp = (*instrument_id_value).GetIfString();
      if (!temp) {
        out.instrument_id = std::nullopt;
        return false;
      }
      out.instrument_id = *temp;
    }
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

  const base::Value* card_number_value = dict.Find("cardNumber");
  if (card_number_value) {
    {
      auto* temp = (*card_number_value).GetIfString();
      if (!temp) {
        out.card_number = std::nullopt;
        return false;
      }
      out.card_number = *temp;
    }
  }

  const base::Value* expiration_month_value = dict.Find("expirationMonth");
  if (expiration_month_value) {
    {
      auto* temp = (*expiration_month_value).GetIfString();
      if (!temp) {
        out.expiration_month = std::nullopt;
        return false;
      }
      out.expiration_month = *temp;
    }
  }

  const base::Value* expiration_year_value = dict.Find("expirationYear");
  if (expiration_year_value) {
    {
      auto* temp = (*expiration_year_value).GetIfString();
      if (!temp) {
        out.expiration_year = std::nullopt;
        return false;
      }
      out.expiration_year = *temp;
    }
  }

  const base::Value* nickname_value = dict.Find("nickname");
  if (nickname_value) {
    {
      auto* temp = (*nickname_value).GetIfString();
      if (!temp) {
        out.nickname = std::nullopt;
        return false;
      }
      out.nickname = *temp;
    }
  }

  const base::Value* network_value = dict.Find("network");
  if (network_value) {
    {
      auto* temp = (*network_value).GetIfString();
      if (!temp) {
        out.network = std::nullopt;
        return false;
      }
      out.network = *temp;
    }
  }

  const base::Value* image_src_value = dict.Find("imageSrc");
  if (image_src_value) {
    {
      auto* temp = (*image_src_value).GetIfString();
      if (!temp) {
        out.image_src = std::nullopt;
        return false;
      }
      out.image_src = *temp;
    }
  }

  const base::Value* cvc_value = dict.Find("cvc");
  if (cvc_value) {
    {
      auto* temp = (*cvc_value).GetIfString();
      if (!temp) {
        out.cvc = std::nullopt;
        return false;
      }
      out.cvc = *temp;
    }
  }

  const base::Value* product_terms_url_value = dict.Find("productTermsUrl");
  if (product_terms_url_value) {
    {
      auto* temp = (*product_terms_url_value).GetIfString();
      if (!temp) {
        out.product_terms_url = std::nullopt;
        return false;
      }
      out.product_terms_url = *temp;
    }
  }

  const base::Value* metadata_value = dict.Find("metadata");
  if (metadata_value) {
    {
      if (!(*metadata_value).is_dict()) {
        return false;
      }
      else {
        AutofillMetadata temp;
        if (!AutofillMetadata::Populate((*metadata_value).GetDict(), temp))
          return false;
        out.metadata = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool CreditCardEntry::Populate(
    const base::Value& value, CreditCardEntry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CreditCardEntry> CreditCardEntry::FromValue(const base::DictValue& value) {
  CreditCardEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CreditCardEntry> CreditCardEntry::FromValue(const base::Value& value) {
  CreditCardEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue CreditCardEntry::ToValue() const {
  base::DictValue to_value_result;

  if (this->guid) {
    to_value_result.Set("guid", *this->guid);

  }
  if (this->instrument_id) {
    to_value_result.Set("instrumentId", *this->instrument_id);

  }
  if (this->name) {
    to_value_result.Set("name", *this->name);

  }
  if (this->card_number) {
    to_value_result.Set("cardNumber", *this->card_number);

  }
  if (this->expiration_month) {
    to_value_result.Set("expirationMonth", *this->expiration_month);

  }
  if (this->expiration_year) {
    to_value_result.Set("expirationYear", *this->expiration_year);

  }
  if (this->nickname) {
    to_value_result.Set("nickname", *this->nickname);

  }
  if (this->network) {
    to_value_result.Set("network", *this->network);

  }
  if (this->image_src) {
    to_value_result.Set("imageSrc", *this->image_src);

  }
  if (this->cvc) {
    to_value_result.Set("cvc", *this->cvc);

  }
  if (this->product_terms_url) {
    to_value_result.Set("productTermsUrl", *this->product_terms_url);

  }
  if (this->metadata) {
    to_value_result.Set("metadata", (this->metadata)->ToValue());

  }

  return to_value_result;
}


IbanEntry::IbanEntry()
 {}

IbanEntry::~IbanEntry() = default;
IbanEntry::IbanEntry(IbanEntry&& rhs) noexcept = default;
IbanEntry& IbanEntry::operator=(IbanEntry&& rhs) noexcept = default;
IbanEntry IbanEntry::Clone() const {
  IbanEntry out;
  out.guid = guid;
  out.instrument_id = instrument_id;
  out.value = value;
  out.nickname = nickname;
  if (metadata) {
    out.metadata = metadata->Clone();
  }
  return out;
}

// static
bool IbanEntry::Populate(
    const base::DictValue& dict, IbanEntry& out) {
  const base::Value* guid_value = dict.Find("guid");
  if (guid_value) {
    {
      auto* temp = (*guid_value).GetIfString();
      if (!temp) {
        out.guid = std::nullopt;
        return false;
      }
      out.guid = *temp;
    }
  }

  const base::Value* instrument_id_value = dict.Find("instrumentId");
  if (instrument_id_value) {
    {
      auto* temp = (*instrument_id_value).GetIfString();
      if (!temp) {
        out.instrument_id = std::nullopt;
        return false;
      }
      out.instrument_id = *temp;
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

  const base::Value* nickname_value = dict.Find("nickname");
  if (nickname_value) {
    {
      auto* temp = (*nickname_value).GetIfString();
      if (!temp) {
        out.nickname = std::nullopt;
        return false;
      }
      out.nickname = *temp;
    }
  }

  const base::Value* metadata_value = dict.Find("metadata");
  if (metadata_value) {
    {
      if (!(*metadata_value).is_dict()) {
        return false;
      }
      else {
        AutofillMetadata temp;
        if (!AutofillMetadata::Populate((*metadata_value).GetDict(), temp))
          return false;
        out.metadata = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool IbanEntry::Populate(
    const base::Value& value, IbanEntry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<IbanEntry> IbanEntry::FromValue(const base::DictValue& value) {
  IbanEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<IbanEntry> IbanEntry::FromValue(const base::Value& value) {
  IbanEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue IbanEntry::ToValue() const {
  base::DictValue to_value_result;

  if (this->guid) {
    to_value_result.Set("guid", *this->guid);

  }
  if (this->instrument_id) {
    to_value_result.Set("instrumentId", *this->instrument_id);

  }
  if (this->value) {
    to_value_result.Set("value", *this->value);

  }
  if (this->nickname) {
    to_value_result.Set("nickname", *this->nickname);

  }
  if (this->metadata) {
    to_value_result.Set("metadata", (this->metadata)->ToValue());

  }

  return to_value_result;
}


AttributeType::AttributeType()
: type_name(0),
data_type() {}

AttributeType::~AttributeType() = default;
AttributeType::AttributeType(AttributeType&& rhs) noexcept = default;
AttributeType& AttributeType::operator=(AttributeType&& rhs) noexcept = default;
AttributeType AttributeType::Clone() const {
  AttributeType out;
  out.type_name = type_name;
  out.type_name_as_string = type_name_as_string;
  out.data_type = data_type;
  return out;
}

// static
bool AttributeType::Populate(
    const base::DictValue& dict, AttributeType& out) {
  const base::Value* type_name_value = dict.Find("typeName");
  if (!type_name_value) {
    return false;
  }
  {
    auto temp = (*type_name_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.type_name = *temp;
  }

  const base::Value* type_name_as_string_value = dict.Find("typeNameAsString");
  if (!type_name_as_string_value) {
    return false;
  }
  {
    auto* temp = (*type_name_as_string_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.type_name_as_string = *temp;
  }

  const base::Value* data_type_value = dict.Find("dataType");
  if (!data_type_value) {
    return false;
  }
  {
    const std::string* attribute_type_data_type_as_string = (*data_type_value).GetIfString();
    if (!attribute_type_data_type_as_string) {
      return false;
    }
    out.data_type = ParseAttributeTypeDataType(*attribute_type_data_type_as_string);
    if (out.data_type == AttributeTypeDataType()) {
      return false;
    }
  }

  return true;
}

// static
bool AttributeType::Populate(
    const base::Value& value, AttributeType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AttributeType> AttributeType::FromValue(const base::DictValue& value) {
  AttributeType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AttributeType> AttributeType::FromValue(const base::Value& value) {
  AttributeType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AttributeType::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("typeName", this->type_name);

  to_value_result.Set("typeNameAsString", this->type_name_as_string);

  to_value_result.Set("dataType", autofill_private::ToString(this->data_type));


  return to_value_result;
}


EntityType::EntityType()
: type_name(0),
supports_wallet_storage(false),
pass_type() {}

EntityType::~EntityType() = default;
EntityType::EntityType(EntityType&& rhs) noexcept = default;
EntityType& EntityType::operator=(EntityType&& rhs) noexcept = default;
EntityType EntityType::Clone() const {
  EntityType out;
  out.type_name = type_name;
  out.type_name_as_string = type_name_as_string;
  out.add_entity_type_string = add_entity_type_string;
  out.edit_entity_type_string = edit_entity_type_string;
  out.delete_entity_type_string = delete_entity_type_string;
  out.supports_wallet_storage = supports_wallet_storage;
  out.pass_type = pass_type;
  return out;
}

// static
bool EntityType::Populate(
    const base::DictValue& dict, EntityType& out) {
  out.pass_type = EntityPassType();
  const base::Value* type_name_value = dict.Find("typeName");
  if (!type_name_value) {
    return false;
  }
  {
    auto temp = (*type_name_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.type_name = *temp;
  }

  const base::Value* type_name_as_string_value = dict.Find("typeNameAsString");
  if (!type_name_as_string_value) {
    return false;
  }
  {
    auto* temp = (*type_name_as_string_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.type_name_as_string = *temp;
  }

  const base::Value* add_entity_type_string_value = dict.Find("addEntityTypeString");
  if (!add_entity_type_string_value) {
    return false;
  }
  {
    auto* temp = (*add_entity_type_string_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.add_entity_type_string = *temp;
  }

  const base::Value* edit_entity_type_string_value = dict.Find("editEntityTypeString");
  if (!edit_entity_type_string_value) {
    return false;
  }
  {
    auto* temp = (*edit_entity_type_string_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.edit_entity_type_string = *temp;
  }

  const base::Value* delete_entity_type_string_value = dict.Find("deleteEntityTypeString");
  if (!delete_entity_type_string_value) {
    return false;
  }
  {
    auto* temp = (*delete_entity_type_string_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.delete_entity_type_string = *temp;
  }

  const base::Value* supports_wallet_storage_value = dict.Find("supportsWalletStorage");
  if (!supports_wallet_storage_value) {
    return false;
  }
  {
    auto temp = (*supports_wallet_storage_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.supports_wallet_storage = *temp;
  }

  const base::Value* pass_type_value = dict.Find("passType");
  if (pass_type_value) {
    {
      const std::string* entity_pass_type_as_string = (*pass_type_value).GetIfString();
      if (!entity_pass_type_as_string) {
        return false;
      }
      out.pass_type = ParseEntityPassType(*entity_pass_type_as_string);
      if (out.pass_type == EntityPassType()) {
        return false;
      }
    }
    } else {
    out.pass_type = EntityPassType();
  }

  return true;
}

// static
bool EntityType::Populate(
    const base::Value& value, EntityType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EntityType> EntityType::FromValue(const base::DictValue& value) {
  EntityType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EntityType> EntityType::FromValue(const base::Value& value) {
  EntityType out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue EntityType::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("typeName", this->type_name);

  to_value_result.Set("typeNameAsString", this->type_name_as_string);

  to_value_result.Set("addEntityTypeString", this->add_entity_type_string);

  to_value_result.Set("editEntityTypeString", this->edit_entity_type_string);

  to_value_result.Set("deleteEntityTypeString", this->delete_entity_type_string);

  to_value_result.Set("supportsWalletStorage", this->supports_wallet_storage);

  if (this->pass_type != EntityPassType()) {
    to_value_result.Set("passType", autofill_private::ToString(this->pass_type));

  }

  return to_value_result;
}


DateValue::DateValue()
 {}

DateValue::~DateValue() = default;
DateValue::DateValue(DateValue&& rhs) noexcept = default;
DateValue& DateValue::operator=(DateValue&& rhs) noexcept = default;
DateValue DateValue::Clone() const {
  DateValue out;
  out.year = year;
  out.month = month;
  out.day = day;
  return out;
}

// static
bool DateValue::Populate(
    const base::DictValue& dict, DateValue& out) {
  const base::Value* year_value = dict.Find("year");
  if (!year_value) {
    return false;
  }
  {
    auto* temp = (*year_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.year = *temp;
  }

  const base::Value* month_value = dict.Find("month");
  if (!month_value) {
    return false;
  }
  {
    auto* temp = (*month_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.month = *temp;
  }

  const base::Value* day_value = dict.Find("day");
  if (!day_value) {
    return false;
  }
  {
    auto* temp = (*day_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.day = *temp;
  }

  return true;
}

// static
bool DateValue::Populate(
    const base::Value& value, DateValue& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DateValue> DateValue::FromValue(const base::DictValue& value) {
  DateValue out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DateValue> DateValue::FromValue(const base::Value& value) {
  DateValue out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue DateValue::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("year", this->year);

  to_value_result.Set("month", this->month);

  to_value_result.Set("day", this->day);


  return to_value_result;
}


AttributeInstance::Value::Value()
 {}

AttributeInstance::Value::~Value() = default;
AttributeInstance::Value::Value(Value&& rhs) noexcept = default;
AttributeInstance::Value& AttributeInstance::Value::operator=(Value&& rhs) noexcept = default;
AttributeInstance::Value AttributeInstance::Value::Clone() const {
  Value out;
  out.as_string = as_string;
  if (as_date_value) {
    out.as_date_value = as_date_value->Clone();
  }
  return out;
}

// static
bool AttributeInstance::Value::Populate(
    const base::Value& value, Value& out) {
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
  if (value.type() == base::Value::Type::DICT) {
    {
      if (!value.is_dict()) {
        return false;
      }
      else {
        DateValue temp;
        if (!DateValue::Populate(value.GetDict(), temp))
          return false;
        out.as_date_value = std::move(temp);
      }
    }
    return true;
  }
  return false;
}

// static
std::optional<AttributeInstance::Value> AttributeInstance::Value::FromValue(const base::Value& value) {
  Value out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value AttributeInstance::Value::ToValue() const {
  base::Value result;
  if (as_string) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for value";
    result = base::Value(*as_string);

  }
  if (as_date_value) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for value";
    result = base::Value((as_date_value)->ToValue());

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for value";
  return result;
}



AttributeInstance::AttributeInstance()
 {}

AttributeInstance::~AttributeInstance() = default;
AttributeInstance::AttributeInstance(AttributeInstance&& rhs) noexcept = default;
AttributeInstance& AttributeInstance::operator=(AttributeInstance&& rhs) noexcept = default;
AttributeInstance AttributeInstance::Clone() const {
  AttributeInstance out;
  out.type = type.Clone();
  out.value = value.Clone();
  return out;
}

// static
bool AttributeInstance::Populate(
    const base::DictValue& dict, AttributeInstance& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    if (!(*type_value).is_dict()) {
      return false;
    }
    if (!AttributeType::Populate((*type_value).GetDict(), out.type)) {
      return false;
    }
  }

  const base::Value* value_value = dict.Find("value");
  if (!value_value) {
    return false;
  }
  {
    if (!Value::Populate((*value_value), out.value))
      return false;
  }

  return true;
}

// static
bool AttributeInstance::Populate(
    const base::Value& value, AttributeInstance& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AttributeInstance> AttributeInstance::FromValue(const base::DictValue& value) {
  AttributeInstance out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AttributeInstance> AttributeInstance::FromValue(const base::Value& value) {
  AttributeInstance out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AttributeInstance::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("type", (this->type).ToValue());

  to_value_result.Set("value", (this->value).ToValue());


  return to_value_result;
}


EntityInstance::EntityInstance()
 {}

EntityInstance::~EntityInstance() = default;
EntityInstance::EntityInstance(EntityInstance&& rhs) noexcept = default;
EntityInstance& EntityInstance::operator=(EntityInstance&& rhs) noexcept = default;
EntityInstance EntityInstance::Clone() const {
  EntityInstance out;
  out.type = type.Clone();
  out.attribute_instances.reserve(attribute_instances.size());
  for (const auto& element : attribute_instances) {
    json_schema_compiler::util::AppendToContainer(out.attribute_instances, element.Clone());
  }
  out.guid = guid;
  out.nickname = nickname;
  out.should_authenticate_to_view = should_authenticate_to_view;
  out.stored_in_wallet = stored_in_wallet;
  out.is_read_only = is_read_only;
  out.context_token = context_token;
  return out;
}

// static
bool EntityInstance::Populate(
    const base::DictValue& dict, EntityInstance& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    if (!(*type_value).is_dict()) {
      return false;
    }
    if (!EntityType::Populate((*type_value).GetDict(), out.type)) {
      return false;
    }
  }

  const base::Value* attribute_instances_value = dict.Find("attributeInstances");
  if (!attribute_instances_value) {
    return false;
  }
  {
    if (!(*attribute_instances_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*attribute_instances_value).GetList(), out.attribute_instances)) {
        return false;
      }
    }
  }

  const base::Value* guid_value = dict.Find("guid");
  if (!guid_value) {
    return false;
  }
  {
    auto* temp = (*guid_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.guid = *temp;
  }

  const base::Value* nickname_value = dict.Find("nickname");
  if (!nickname_value) {
    return false;
  }
  {
    auto* temp = (*nickname_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.nickname = *temp;
  }

  const base::Value* should_authenticate_to_view_value = dict.Find("shouldAuthenticateToView");
  if (should_authenticate_to_view_value) {
    {
      auto temp = (*should_authenticate_to_view_value).GetIfBool();
      if (!temp.has_value()) {
        out.should_authenticate_to_view = std::nullopt;
        return false;
      }
      out.should_authenticate_to_view = *temp;
    }
  }

  const base::Value* stored_in_wallet_value = dict.Find("storedInWallet");
  if (stored_in_wallet_value) {
    {
      auto temp = (*stored_in_wallet_value).GetIfBool();
      if (!temp.has_value()) {
        out.stored_in_wallet = std::nullopt;
        return false;
      }
      out.stored_in_wallet = *temp;
    }
  }

  const base::Value* is_read_only_value = dict.Find("isReadOnly");
  if (is_read_only_value) {
    {
      auto temp = (*is_read_only_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_read_only = std::nullopt;
        return false;
      }
      out.is_read_only = *temp;
    }
  }

  const base::Value* context_token_value = dict.Find("contextToken");
  if (context_token_value) {
    {
      auto* temp = (*context_token_value).GetIfString();
      if (!temp) {
        out.context_token = std::nullopt;
        return false;
      }
      out.context_token = *temp;
    }
  }

  return true;
}

// static
bool EntityInstance::Populate(
    const base::Value& value, EntityInstance& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EntityInstance> EntityInstance::FromValue(const base::DictValue& value) {
  EntityInstance out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EntityInstance> EntityInstance::FromValue(const base::Value& value) {
  EntityInstance out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue EntityInstance::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("type", (this->type).ToValue());

  to_value_result.Set("attributeInstances", json_schema_compiler::util::CreateValueFromArray(this->attribute_instances));

  to_value_result.Set("guid", this->guid);

  to_value_result.Set("nickname", this->nickname);

  if (this->should_authenticate_to_view) {
    to_value_result.Set("shouldAuthenticateToView", *this->should_authenticate_to_view);

  }
  if (this->stored_in_wallet) {
    to_value_result.Set("storedInWallet", *this->stored_in_wallet);

  }
  if (this->is_read_only) {
    to_value_result.Set("isReadOnly", *this->is_read_only);

  }
  if (this->context_token) {
    to_value_result.Set("contextToken", *this->context_token);

  }

  return to_value_result;
}


EntityInstanceWithLabels::EntityInstanceWithLabels()
: stored_in_wallet(false) {}

EntityInstanceWithLabels::~EntityInstanceWithLabels() = default;
EntityInstanceWithLabels::EntityInstanceWithLabels(EntityInstanceWithLabels&& rhs) noexcept = default;
EntityInstanceWithLabels& EntityInstanceWithLabels::operator=(EntityInstanceWithLabels&& rhs) noexcept = default;
EntityInstanceWithLabels EntityInstanceWithLabels::Clone() const {
  EntityInstanceWithLabels out;
  out.guid = guid;
  out.type = type.Clone();
  out.entity_instance_label = entity_instance_label;
  out.entity_instance_sub_label = entity_instance_sub_label;
  out.stored_in_wallet = stored_in_wallet;
  out.wallet_entity_url = wallet_entity_url;
  out.is_read_only = is_read_only;
  return out;
}

// static
bool EntityInstanceWithLabels::Populate(
    const base::DictValue& dict, EntityInstanceWithLabels& out) {
  const base::Value* guid_value = dict.Find("guid");
  if (!guid_value) {
    return false;
  }
  {
    auto* temp = (*guid_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.guid = *temp;
  }

  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    if (!(*type_value).is_dict()) {
      return false;
    }
    if (!EntityType::Populate((*type_value).GetDict(), out.type)) {
      return false;
    }
  }

  const base::Value* entity_instance_label_value = dict.Find("entityInstanceLabel");
  if (!entity_instance_label_value) {
    return false;
  }
  {
    auto* temp = (*entity_instance_label_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.entity_instance_label = *temp;
  }

  const base::Value* entity_instance_sub_label_value = dict.Find("entityInstanceSubLabel");
  if (!entity_instance_sub_label_value) {
    return false;
  }
  {
    auto* temp = (*entity_instance_sub_label_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.entity_instance_sub_label = *temp;
  }

  const base::Value* stored_in_wallet_value = dict.Find("storedInWallet");
  if (!stored_in_wallet_value) {
    return false;
  }
  {
    auto temp = (*stored_in_wallet_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.stored_in_wallet = *temp;
  }

  const base::Value* wallet_entity_url_value = dict.Find("walletEntityUrl");
  if (wallet_entity_url_value) {
    {
      auto* temp = (*wallet_entity_url_value).GetIfString();
      if (!temp) {
        out.wallet_entity_url = std::nullopt;
        return false;
      }
      out.wallet_entity_url = *temp;
    }
  }

  const base::Value* is_read_only_value = dict.Find("isReadOnly");
  if (is_read_only_value) {
    {
      auto temp = (*is_read_only_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_read_only = std::nullopt;
        return false;
      }
      out.is_read_only = *temp;
    }
  }

  return true;
}

// static
bool EntityInstanceWithLabels::Populate(
    const base::Value& value, EntityInstanceWithLabels& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EntityInstanceWithLabels> EntityInstanceWithLabels::FromValue(const base::DictValue& value) {
  EntityInstanceWithLabels out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EntityInstanceWithLabels> EntityInstanceWithLabels::FromValue(const base::Value& value) {
  EntityInstanceWithLabels out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue EntityInstanceWithLabels::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("guid", this->guid);

  to_value_result.Set("type", (this->type).ToValue());

  to_value_result.Set("entityInstanceLabel", this->entity_instance_label);

  to_value_result.Set("entityInstanceSubLabel", this->entity_instance_sub_label);

  to_value_result.Set("storedInWallet", this->stored_in_wallet);

  if (this->wallet_entity_url) {
    to_value_result.Set("walletEntityUrl", *this->wallet_entity_url);

  }
  if (this->is_read_only) {
    to_value_result.Set("isReadOnly", *this->is_read_only);

  }

  return to_value_result;
}


PayOverTimeIssuerEntry::PayOverTimeIssuerEntry()
 {}

PayOverTimeIssuerEntry::~PayOverTimeIssuerEntry() = default;
PayOverTimeIssuerEntry::PayOverTimeIssuerEntry(PayOverTimeIssuerEntry&& rhs) noexcept = default;
PayOverTimeIssuerEntry& PayOverTimeIssuerEntry::operator=(PayOverTimeIssuerEntry&& rhs) noexcept = default;
PayOverTimeIssuerEntry PayOverTimeIssuerEntry::Clone() const {
  PayOverTimeIssuerEntry out;
  out.issuer_id = issuer_id;
  out.instrument_id = instrument_id;
  out.display_name = display_name;
  out.image_src = image_src;
  out.image_src_dark = image_src_dark;
  return out;
}

// static
bool PayOverTimeIssuerEntry::Populate(
    const base::DictValue& dict, PayOverTimeIssuerEntry& out) {
  const base::Value* issuer_id_value = dict.Find("issuerId");
  if (issuer_id_value) {
    {
      auto* temp = (*issuer_id_value).GetIfString();
      if (!temp) {
        out.issuer_id = std::nullopt;
        return false;
      }
      out.issuer_id = *temp;
    }
  }

  const base::Value* instrument_id_value = dict.Find("instrumentId");
  if (instrument_id_value) {
    {
      auto* temp = (*instrument_id_value).GetIfString();
      if (!temp) {
        out.instrument_id = std::nullopt;
        return false;
      }
      out.instrument_id = *temp;
    }
  }

  const base::Value* display_name_value = dict.Find("displayName");
  if (display_name_value) {
    {
      auto* temp = (*display_name_value).GetIfString();
      if (!temp) {
        out.display_name = std::nullopt;
        return false;
      }
      out.display_name = *temp;
    }
  }

  const base::Value* image_src_value = dict.Find("imageSrc");
  if (image_src_value) {
    {
      auto* temp = (*image_src_value).GetIfString();
      if (!temp) {
        out.image_src = std::nullopt;
        return false;
      }
      out.image_src = *temp;
    }
  }

  const base::Value* image_src_dark_value = dict.Find("imageSrcDark");
  if (image_src_dark_value) {
    {
      auto* temp = (*image_src_dark_value).GetIfString();
      if (!temp) {
        out.image_src_dark = std::nullopt;
        return false;
      }
      out.image_src_dark = *temp;
    }
  }

  return true;
}

// static
bool PayOverTimeIssuerEntry::Populate(
    const base::Value& value, PayOverTimeIssuerEntry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PayOverTimeIssuerEntry> PayOverTimeIssuerEntry::FromValue(const base::DictValue& value) {
  PayOverTimeIssuerEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PayOverTimeIssuerEntry> PayOverTimeIssuerEntry::FromValue(const base::Value& value) {
  PayOverTimeIssuerEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PayOverTimeIssuerEntry::ToValue() const {
  base::DictValue to_value_result;

  if (this->issuer_id) {
    to_value_result.Set("issuerId", *this->issuer_id);

  }
  if (this->instrument_id) {
    to_value_result.Set("instrumentId", *this->instrument_id);

  }
  if (this->display_name) {
    to_value_result.Set("displayName", *this->display_name);

  }
  if (this->image_src) {
    to_value_result.Set("imageSrc", *this->image_src);

  }
  if (this->image_src_dark) {
    to_value_result.Set("imageSrcDark", *this->image_src_dark);

  }

  return to_value_result;
}


LegalMessageLink::LegalMessageLink()
: start(0),
end(0) {}

LegalMessageLink::~LegalMessageLink() = default;
LegalMessageLink::LegalMessageLink(LegalMessageLink&& rhs) noexcept = default;
LegalMessageLink& LegalMessageLink::operator=(LegalMessageLink&& rhs) noexcept = default;
LegalMessageLink LegalMessageLink::Clone() const {
  LegalMessageLink out;
  out.start = start;
  out.end = end;
  out.url = url;
  return out;
}

// static
bool LegalMessageLink::Populate(
    const base::DictValue& dict, LegalMessageLink& out) {
  const base::Value* start_value = dict.Find("start");
  if (!start_value) {
    return false;
  }
  {
    auto temp = (*start_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.start = *temp;
  }

  const base::Value* end_value = dict.Find("end");
  if (!end_value) {
    return false;
  }
  {
    auto temp = (*end_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.end = *temp;
  }

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
bool LegalMessageLink::Populate(
    const base::Value& value, LegalMessageLink& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<LegalMessageLink> LegalMessageLink::FromValue(const base::DictValue& value) {
  LegalMessageLink out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<LegalMessageLink> LegalMessageLink::FromValue(const base::Value& value) {
  LegalMessageLink out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue LegalMessageLink::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("start", this->start);

  to_value_result.Set("end", this->end);

  to_value_result.Set("url", this->url);


  return to_value_result;
}


LegalMessageLine::LegalMessageLine()
 {}

LegalMessageLine::~LegalMessageLine() = default;
LegalMessageLine::LegalMessageLine(LegalMessageLine&& rhs) noexcept = default;
LegalMessageLine& LegalMessageLine::operator=(LegalMessageLine&& rhs) noexcept = default;
LegalMessageLine LegalMessageLine::Clone() const {
  LegalMessageLine out;
  out.text = text;
  out.links.reserve(links.size());
  for (const auto& element : links) {
    json_schema_compiler::util::AppendToContainer(out.links, element.Clone());
  }
  return out;
}

// static
bool LegalMessageLine::Populate(
    const base::DictValue& dict, LegalMessageLine& out) {
  const base::Value* text_value = dict.Find("text");
  if (!text_value) {
    return false;
  }
  {
    auto* temp = (*text_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.text = *temp;
  }

  const base::Value* links_value = dict.Find("links");
  if (!links_value) {
    return false;
  }
  {
    if (!(*links_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*links_value).GetList(), out.links)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool LegalMessageLine::Populate(
    const base::Value& value, LegalMessageLine& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<LegalMessageLine> LegalMessageLine::FromValue(const base::DictValue& value) {
  LegalMessageLine out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<LegalMessageLine> LegalMessageLine::FromValue(const base::Value& value) {
  LegalMessageLine out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue LegalMessageLine::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("text", this->text);

  to_value_result.Set("links", json_schema_compiler::util::CreateValueFromArray(this->links));


  return to_value_result;
}


UpsertPassDetails::UpsertPassDetails()
 {}

UpsertPassDetails::~UpsertPassDetails() = default;
UpsertPassDetails::UpsertPassDetails(UpsertPassDetails&& rhs) noexcept = default;
UpsertPassDetails& UpsertPassDetails::operator=(UpsertPassDetails&& rhs) noexcept = default;
UpsertPassDetails UpsertPassDetails::Clone() const {
  UpsertPassDetails out;
  out.legal_message_lines.reserve(legal_message_lines.size());
  for (const auto& element : legal_message_lines) {
    json_schema_compiler::util::AppendToContainer(out.legal_message_lines, element.Clone());
  }
  out.context_token = context_token;
  return out;
}

// static
bool UpsertPassDetails::Populate(
    const base::DictValue& dict, UpsertPassDetails& out) {
  const base::Value* legal_message_lines_value = dict.Find("legalMessageLines");
  if (!legal_message_lines_value) {
    return false;
  }
  {
    if (!(*legal_message_lines_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*legal_message_lines_value).GetList(), out.legal_message_lines)) {
        return false;
      }
    }
  }

  const base::Value* context_token_value = dict.Find("contextToken");
  if (!context_token_value) {
    return false;
  }
  {
    auto* temp = (*context_token_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.context_token = *temp;
  }

  return true;
}

// static
bool UpsertPassDetails::Populate(
    const base::Value& value, UpsertPassDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UpsertPassDetails> UpsertPassDetails::FromValue(const base::DictValue& value) {
  UpsertPassDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UpsertPassDetails> UpsertPassDetails::FromValue(const base::Value& value) {
  UpsertPassDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue UpsertPassDetails::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("legalMessageLines", json_schema_compiler::util::CreateValueFromArray(this->legal_message_lines));

  to_value_result.Set("contextToken", this->context_token);


  return to_value_result;
}



//
// Functions
//

namespace GetAccountInfo {

base::ListValue Results::Create(const AccountInfo& account_info) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((account_info).ToValue());

  return create_results;
}
}  // namespace GetAccountInfo

namespace SaveAddress {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& address_value = args[0];
    {
      if (!address_value.is_dict()) {
        return std::nullopt;
      }
      if (!AddressEntry::Populate(address_value.GetDict(), params.address)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SaveAddress

namespace RemoveAddress {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& guid_value = args[0];
    {
      auto* temp = guid_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.guid = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RemoveAddress

namespace GetCountryList {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& for_account_storage_value = args[0];
    {
      auto temp = for_account_storage_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.for_account_storage = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const std::vector<CountryEntry>& countries) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(countries));

  return create_results;
}
}  // namespace GetCountryList

namespace GetAddressComponents {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& country_code_value = args[0];
    {
      auto* temp = country_code_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.country_code = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const AddressComponents& components) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((components).ToValue());

  return create_results;
}
}  // namespace GetAddressComponents

namespace GetAddressList {

base::ListValue Results::Create(const std::vector<AddressEntry>& entries) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entries));

  return create_results;
}
}  // namespace GetAddressList

namespace SaveCreditCard {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& card_value = args[0];
    {
      if (!card_value.is_dict()) {
        return std::nullopt;
      }
      if (!CreditCardEntry::Populate(card_value.GetDict(), params.card)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SaveCreditCard

namespace SaveIban {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& iban_value = args[0];
    {
      if (!iban_value.is_dict()) {
        return std::nullopt;
      }
      if (!IbanEntry::Populate(iban_value.GetDict(), params.iban)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace SaveIban

namespace RemovePaymentsEntity {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& guid_value = args[0];
    {
      auto* temp = guid_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.guid = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RemovePaymentsEntity

namespace GetCreditCardList {

base::ListValue Results::Create(const std::vector<CreditCardEntry>& entries) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entries));

  return create_results;
}
}  // namespace GetCreditCardList

namespace GetIbanList {

base::ListValue Results::Create(const std::vector<IbanEntry>& entries) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entries));

  return create_results;
}
}  // namespace GetIbanList

namespace IsValidIban {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& iban_value_value = args[0];
    {
      auto* temp = iban_value_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.iban_value = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(bool is_valid) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(is_valid);

  return create_results;
}
}  // namespace IsValidIban

namespace LogServerCardLinkClicked {

}  // namespace LogServerCardLinkClicked

namespace LogServerIbanLinkClicked {

}  // namespace LogServerIbanLinkClicked

namespace AddVirtualCard {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& card_id_value = args[0];
    {
      auto* temp = card_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.card_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace AddVirtualCard

namespace RemoveVirtualCard {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& card_id_value = args[0];
    {
      auto* temp = card_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.card_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace RemoveVirtualCard

namespace GetPayOverTimeIssuerList {

base::ListValue Results::Create(const std::vector<PayOverTimeIssuerEntry>& entries) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entries));

  return create_results;
}
}  // namespace GetPayOverTimeIssuerList

namespace AuthenticateUserAndFlipMandatoryAuthToggle {

}  // namespace AuthenticateUserAndFlipMandatoryAuthToggle

namespace AuthenticateUserBeforeViewingEntityData {

base::ListValue Results::Create(bool success) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace AuthenticateUserBeforeViewingEntityData

namespace ToggleAutofillAiReauthRequirement {

}  // namespace ToggleAutofillAiReauthRequirement

namespace GetLocalCard {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& guid_value = args[0];
    {
      auto* temp = guid_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.guid = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const CreditCardEntry& card) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((card).ToValue());

  return create_results;
}
}  // namespace GetLocalCard

namespace CheckIfDeviceAuthAvailable {

base::ListValue Results::Create(bool is_device_auth_available) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(is_device_auth_available);

  return create_results;
}
}  // namespace CheckIfDeviceAuthAvailable

namespace BulkDeleteAllCvcs {

}  // namespace BulkDeleteAllCvcs

namespace AddOrUpdateEntityInstance {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& entity_instance_value = args[0];
    {
      if (!entity_instance_value.is_dict()) {
        return std::nullopt;
      }
      if (!EntityInstance::Populate(entity_instance_value.GetDict(), params.entity_instance)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace AddOrUpdateEntityInstance

namespace RemoveEntityInstance {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& guid_value = args[0];
    {
      auto* temp = guid_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.guid = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace RemoveEntityInstance

namespace LoadEntityInstances {

base::ListValue Results::Create(const std::vector<EntityInstanceWithLabels>& entries) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entries));

  return create_results;
}
}  // namespace LoadEntityInstances

namespace GetEntityInstanceByGuid {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& guid_value = args[0];
    {
      auto* temp = guid_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.guid = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const EntityInstance& entity_instance) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((entity_instance).ToValue());

  return create_results;
}
}  // namespace GetEntityInstanceByGuid

namespace GetWritableEntityTypes {

base::ListValue Results::Create(const std::vector<EntityType>& entity_types) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entity_types));

  return create_results;
}
}  // namespace GetWritableEntityTypes

namespace GetAllAttributeTypesForEntityTypeName {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& entity_type_name_value = args[0];
    {
      auto temp = entity_type_name_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.entity_type_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const std::vector<AttributeType>& attribute_types) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(attribute_types));

  return create_results;
}
}  // namespace GetAllAttributeTypesForEntityTypeName

namespace GetRequiredAttributeTypesForEntityTypeName {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& entity_type_name_value = args[0];
    {
      auto temp = entity_type_name_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.entity_type_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const std::vector<AttributeType>& attribute_types) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(attribute_types));

  return create_results;
}
}  // namespace GetRequiredAttributeTypesForEntityTypeName

namespace GetAutofillAiOptInStatus {

base::ListValue Results::Create(bool opted_in) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(opted_in);

  return create_results;
}
}  // namespace GetAutofillAiOptInStatus

namespace SetAutofillAiOptInStatus {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& opted_in_value = args[0];
    {
      auto temp = opted_in_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.opted_in = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(bool success) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace SetAutofillAiOptInStatus

namespace GetWalletablePassDetectionOptInStatus {

base::ListValue Results::Create(bool opted_in) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(opted_in);

  return create_results;
}
}  // namespace GetWalletablePassDetectionOptInStatus

namespace SetWalletablePassDetectionOptInStatus {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& opted_in_value = args[0];
    {
      auto temp = opted_in_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.opted_in = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(bool success) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace SetWalletablePassDetectionOptInStatus

namespace FetchUserDataProcessingConsent {

base::ListValue Results::Create(const UserDataProcessingConsentStates& states) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((states).ToValue());

  return create_results;
}
}  // namespace FetchUserDataProcessingConsent

namespace GetDetailsForUpsertPass {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& entity_type_name_value = args[0];
    {
      auto temp = entity_type_name_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.entity_type_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const UpsertPassDetails& details) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}
}  // namespace GetDetailsForUpsertPass

namespace PreloadDetailsForUpsertPass {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& entity_type_name_value = args[0];
    {
      auto temp = entity_type_name_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.entity_type_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace PreloadDetailsForUpsertPass

//
// Events
//

namespace OnPersonalDataChanged {

const char kEventName[] = "autofillPrivate.onPersonalDataChanged";

base::ListValue Create(const std::vector<AddressEntry>& address_entries, const std::vector<CreditCardEntry>& credit_card_entries, const std::vector<IbanEntry>& ibans, const std::vector<PayOverTimeIssuerEntry>& pay_over_time_issuers, const AccountInfo& account_info) {
  base::ListValue create_results;
  create_results.reserve(5);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(address_entries));

  create_results.Append(json_schema_compiler::util::CreateValueFromArray(credit_card_entries));

  create_results.Append(json_schema_compiler::util::CreateValueFromArray(ibans));

  create_results.Append(json_schema_compiler::util::CreateValueFromArray(pay_over_time_issuers));

  create_results.Append((account_info).ToValue());

  return create_results;
}

}  // namespace OnPersonalDataChanged

namespace OnEntityInstancesChanged {

const char kEventName[] = "autofillPrivate.onEntityInstancesChanged";

base::ListValue Create(const std::vector<EntityInstanceWithLabels>& entity_instances_with_labels) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entity_instances_with_labels));

  return create_results;
}

}  // namespace OnEntityInstancesChanged

}  // namespace autofill_private
}  // namespace api
}  // namespace extensions

