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

#ifndef CHROME_COMMON_EXTENSIONS_API_AUTOFILL_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_AUTOFILL_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include <string_view>


namespace extensions {
namespace api {
namespace autofill_private {

//
// Types
//

struct AccountInfo {
  AccountInfo();
  ~AccountInfo();
  AccountInfo(const AccountInfo&) = delete;
  AccountInfo& operator=(const AccountInfo&) = delete;
  AccountInfo(AccountInfo&& rhs) noexcept;
  AccountInfo& operator=(AccountInfo&& rhs) noexcept;

  // Populates a AccountInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AccountInfo& out);

  // Populates a AccountInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, AccountInfo& out);

  // Creates a deep copy of AccountInfo.
  AccountInfo Clone() const;

  // Creates a AccountInfo object from a base::DictValue, or nullopt on failure.
  static std::optional<AccountInfo> FromValue(const base::DictValue& value);

  // Creates a AccountInfo object from a base::Value, or nullopt on failure.
  static std::optional<AccountInfo> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAccountInfo object.
  base::DictValue ToValue() const;

  std::string email;

  bool is_sync_enabled_for_autofill_profiles;

  bool is_eligible_for_address_account_storage;

};

// State of the user data processing consent.
enum class UserDataProcessingConsentState {
  kNone = 0,
  kUndefined,
  kUnknown,
  kEnabled,
  kDisabled,
  kMaxValue = kDisabled,
};


const char* ToString(UserDataProcessingConsentState as_enum);
UserDataProcessingConsentState ParseUserDataProcessingConsentState(std::string_view as_string);
std::u16string GetUserDataProcessingConsentStateParseError(std::string_view as_string);

struct UserDataProcessingConsentStates {
  UserDataProcessingConsentStates();
  ~UserDataProcessingConsentStates();
  UserDataProcessingConsentStates(const UserDataProcessingConsentStates&) = delete;
  UserDataProcessingConsentStates& operator=(const UserDataProcessingConsentStates&) = delete;
  UserDataProcessingConsentStates(UserDataProcessingConsentStates&& rhs) noexcept;
  UserDataProcessingConsentStates& operator=(UserDataProcessingConsentStates&& rhs) noexcept;

  // Populates a UserDataProcessingConsentStates object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UserDataProcessingConsentStates& out);

  // Populates a UserDataProcessingConsentStates object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, UserDataProcessingConsentStates& out);

  // Creates a deep copy of UserDataProcessingConsentStates.
  UserDataProcessingConsentStates Clone() const;

  // Creates a UserDataProcessingConsentStates object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<UserDataProcessingConsentStates> FromValue(const base::DictValue& value);

  // Creates a UserDataProcessingConsentStates object from a base::Value, or
  // nullopt on failure.
  static std::optional<UserDataProcessingConsentStates> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisUserDataProcessingConsentStates object.
  base::DictValue ToValue() const;

  UserDataProcessingConsentState comms_apps;

  UserDataProcessingConsentState google_apps;

};

// A copy of FieldType from components/autofill/core/browser/field_types.h.
enum class FieldType {
  kNone = 0,
  kNoServerData,
  kUnknownType,
  kEmptyType,
  kNameFirst,
  kNameMiddle,
  kNameLast,
  kNameMiddleInitial,
  kNameFull,
  kNameSuffix,
  kAlternativeFullName,
  kAlternativeGivenName,
  kAlternativeFamilyName,
  kEmailAddress,
  kPhoneHomeNumber,
  kPhoneHomeCityCode,
  kPhoneHomeCountryCode,
  kPhoneHomeCityAndNumber,
  kPhoneHomeWholeNumber,
  kAddressHomeLine1,
  kAddressHomeLine2,
  kAddressHomeAptNum,
  kAddressHomeCity,
  kAddressHomeState,
  kAddressHomeZip,
  kAddressHomeCountry,
  kCreditCardNameFull,
  kCreditCardNumber,
  kCreditCardExpMonth,
  kCreditCardExp2DigitYear,
  kCreditCardExp4DigitYear,
  kCreditCardExpDate2DigitYear,
  kCreditCardExpDate4DigitYear,
  kCreditCardType,
  kCreditCardVerificationCode,
  kCompanyName,
  kMerchantEmailSignup,
  kMerchantPromoCode,
  kPassword,
  kAccountCreationPassword,
  kAddressHomeStreetAddress,
  kAddressHomeSortingCode,
  kAddressHomeDependentLocality,
  kAddressHomeLine3,
  kNotAccountCreationPassword,
  kUsername,
  kUsernameAndEmailAddress,
  kNewPassword,
  kProbablyNewPassword,
  kNotNewPassword,
  kCreditCardNameFirst,
  kCreditCardNameLast,
  kPhoneHomeExtension,
  kConfirmationPassword,
  kAmbiguousType,
  kSearchTerm,
  kPrice,
  kNotPassword,
  kSingleUsername,
  kNotUsername,
  kUpiVpa,
  kAddressHomeStreetName,
  kAddressHomeHouseNumber,
  kAddressHomeSubpremise,
  kAddressHomeOtherSubunit,
  kNameLastFirst,
  kNameLastConjunction,
  kNameLastSecond,
  kNameHonorificPrefix,
  kAddressHomeAddress,
  kAddressHomeAddressWithName,
  kAddressHomeFloor,
  kPhoneHomeCityCodeWithTrunkPrefix,
  kPhoneHomeCityAndNumberWithoutTrunkPrefix,
  kPhoneHomeNumberPrefix,
  kPhoneHomeNumberSuffix,
  kIbanValue,
  kCreditCardStandaloneVerificationCode,
  kNumericQuantity,
  kOneTimeCode,
  kDeliveryInstructions,
  kAddressHomeOverflow,
  kAddressHomeLandmark,
  kAddressHomeOverflowAndLandmark,
  kAddressHomeAdminLevel2,
  kAddressHomeStreetLocation,
  kAddressHomeBetweenStreets,
  kAddressHomeBetweenStreetsOrLandmark,
  kAddressHomeStreetLocationAndLocality,
  kAddressHomeStreetLocationAndLandmark,
  kAddressHomeDependentLocalityAndLandmark,
  kAddressHomeBetweenStreets1,
  kAddressHomeBetweenStreets2,
  kSingleUsernameForgotPassword,
  kAddressHomeApt,
  kAddressHomeAptType,
  kAddressHomeHouseNumberAndApt,
  kSingleUsernameWithIntermediateValues,
  kPassportNumber,
  kPassportIssuingCountry,
  kPassportExpirationDate,
  kPassportIssueDate,
  kLoyaltyMembershipProgram,
  kLoyaltyMembershipProvider,
  kLoyaltyMembershipId,
  kVehicleLicensePlate,
  kVehicleVin,
  kVehicleMake,
  kVehicleModel,
  kDriversLicenseRegion,
  kDriversLicenseNumber,
  kDriversLicenseExpirationDate,
  kDriversLicenseIssueDate,
  kVehicleYear,
  kVehiclePlateState,
  kEmailOrLoyaltyMembershipId,
  kNationalIdCardNumber,
  kNationalIdCardExpirationDate,
  kNationalIdCardIssueDate,
  kNationalIdCardIssuingCountry,
  kKnownTravelerNumber,
  kKnownTravelerNumberExpirationDate,
  kRedressNumber,
  kAddressHomeZipPrefix,
  kAddressHomeZipSuffix,
  kFlightReservationFlightNumber,
  kFlightReservationTicketNumber,
  kFlightReservationConfirmationCode,
  kFlightReservationDepartureAirport,
  kFlightReservationArrivalAirport,
  kFlightReservationPassengerName,
  kFlightReservationDepartureDate,
  kAddressHomeZipAndCity,
  kOrderId,
  kOrderDate,
  kOrderMerchantName,
  kShipmentTrackingNumber,
  kMaxValidFieldType,
  kMaxValue = kMaxValidFieldType,
};


const char* ToString(FieldType as_enum);
FieldType ParseFieldType(std::string_view as_string);
std::u16string GetFieldTypeParseError(std::string_view as_string);

// The address record type. Describes where the address is stored.
enum class AddressRecordType {
  kNone = 0,
  kLocalOrSyncable,
  kAccount,
  kAccountHome,
  kAccountWork,
  kAccountNameEmail,
  kMaxValue = kAccountNameEmail,
};


const char* ToString(AddressRecordType as_enum);
AddressRecordType ParseAddressRecordType(std::string_view as_string);
std::u16string GetAddressRecordTypeParseError(std::string_view as_string);

// The type of data that can be stored for an attribute type.
enum class AttributeTypeDataType {
  kNone = 0,
  kCountry,
  kDate,
  kString,
  kMaxValue = kString,
};


const char* ToString(AttributeTypeDataType as_enum);
AttributeTypeDataType ParseAttributeTypeDataType(std::string_view as_string);
std::u16string GetAttributeTypeDataTypeParseError(std::string_view as_string);

// Entity types that have an equivalent in Wallet are referred to as "passes".
// This enum represents what kind of pass (if any) an entity type represents.
// Note that having a pass type doesn't imply that the entity is stored in
// Wallet. Local passes are supported by AutofillAi as well.
enum class EntityPassType {
  kNone = 0,
  kPublicPass,
  kPrivatePass,
  kMaxValue = kPrivatePass,
};


const char* ToString(EntityPassType as_enum);
EntityPassType ParseEntityPassType(std::string_view as_string);
std::u16string GetEntityPassTypeParseError(std::string_view as_string);

struct AutofillMetadata {
  AutofillMetadata();
  ~AutofillMetadata();
  AutofillMetadata(const AutofillMetadata&) = delete;
  AutofillMetadata& operator=(const AutofillMetadata&) = delete;
  AutofillMetadata(AutofillMetadata&& rhs) noexcept;
  AutofillMetadata& operator=(AutofillMetadata&& rhs) noexcept;

  // Populates a AutofillMetadata object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AutofillMetadata& out);

  // Populates a AutofillMetadata object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AutofillMetadata& out);

  // Creates a deep copy of AutofillMetadata.
  AutofillMetadata Clone() const;

  // Creates a AutofillMetadata object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<AutofillMetadata> FromValue(const base::DictValue& value);

  // Creates a AutofillMetadata object from a base::Value, or nullopt on
  // failure.
  static std::optional<AutofillMetadata> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAutofillMetadata object.
  base::DictValue ToValue() const;

  // Short summary of the address/credit card which is displayed in the UI; an
  // undefined value means that this entry has just been created on the client and
  // has not yet been given a summary.
  std::string summary_label;

  // Short, secondary summary of the address/credit card which is displayed in the
  // UI; an undefined value means that this entry has just been created on the
  // client and has not yet been given a summary.
  std::optional<std::string> summary_sublabel;

  // For addresses. Describes where the address is stored.
  AddressRecordType record_type;

  // For credit cards, whether the entry is locally owned by Chrome (as opposed to
  // being synced down from the server). Non-local entries may not be editable.
  std::optional<bool> is_local;

  // For credit cards, whether this is migratable (both the card number and
  // expiration date valid and does not have the duplicated server card).
  std::optional<bool> is_migratable;

  // For credit cards. Indicates whether a card is eligible for virtual cards
  // enrollment.
  std::optional<bool> is_virtual_card_enrollment_eligible;

  // For credit cards. Indicates whether a card has been enrolled in virtual cards
  // if it is eligible.
  std::optional<bool> is_virtual_card_enrolled;

};

struct AddressField {
  AddressField();
  ~AddressField();
  AddressField(const AddressField&) = delete;
  AddressField& operator=(const AddressField&) = delete;
  AddressField(AddressField&& rhs) noexcept;
  AddressField& operator=(AddressField&& rhs) noexcept;

  // Populates a AddressField object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AddressField& out);

  // Populates a AddressField object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AddressField& out);

  // Creates a deep copy of AddressField.
  AddressField Clone() const;

  // Creates a AddressField object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<AddressField> FromValue(const base::DictValue& value);

  // Creates a AddressField object from a base::Value, or nullopt on failure.
  static std::optional<AddressField> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAddressField object.
  base::DictValue ToValue() const;

  FieldType type;

  std::string value;

};

struct AddressEntry {
  AddressEntry();
  ~AddressEntry();
  AddressEntry(const AddressEntry&) = delete;
  AddressEntry& operator=(const AddressEntry&) = delete;
  AddressEntry(AddressEntry&& rhs) noexcept;
  AddressEntry& operator=(AddressEntry&& rhs) noexcept;

  // Populates a AddressEntry object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AddressEntry& out);

  // Populates a AddressEntry object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AddressEntry& out);

  // Creates a deep copy of AddressEntry.
  AddressEntry Clone() const;

  // Creates a AddressEntry object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<AddressEntry> FromValue(const base::DictValue& value);

  // Creates a AddressEntry object from a base::Value, or nullopt on failure.
  static std::optional<AddressEntry> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAddressEntry object.
  base::DictValue ToValue() const;

  // Globally unique identifier for this entry.
  std::optional<std::string> guid;

  // Fields have to be stored in the array with every field style stored only
  // once.
  std::vector<AddressField> fields;

  std::optional<std::string> language_code;

  std::optional<AutofillMetadata> metadata;

};

struct CountryEntry {
  CountryEntry();
  ~CountryEntry();
  CountryEntry(const CountryEntry&) = delete;
  CountryEntry& operator=(const CountryEntry&) = delete;
  CountryEntry(CountryEntry&& rhs) noexcept;
  CountryEntry& operator=(CountryEntry&& rhs) noexcept;

  // Populates a CountryEntry object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CountryEntry& out);

  // Populates a CountryEntry object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, CountryEntry& out);

  // Creates a deep copy of CountryEntry.
  CountryEntry Clone() const;

  // Creates a CountryEntry object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<CountryEntry> FromValue(const base::DictValue& value);

  // Creates a CountryEntry object from a base::Value, or nullopt on failure.
  static std::optional<CountryEntry> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCountryEntry object.
  base::DictValue ToValue() const;

  // The internationalized name of the country.
  std::optional<std::string> name;

  // A two-character string representing the country.
  std::optional<std::string> country_code;

};

struct AddressComponent {
  AddressComponent();
  ~AddressComponent();
  AddressComponent(const AddressComponent&) = delete;
  AddressComponent& operator=(const AddressComponent&) = delete;
  AddressComponent(AddressComponent&& rhs) noexcept;
  AddressComponent& operator=(AddressComponent&& rhs) noexcept;

  // Populates a AddressComponent object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AddressComponent& out);

  // Populates a AddressComponent object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AddressComponent& out);

  // Creates a deep copy of AddressComponent.
  AddressComponent Clone() const;

  // Creates a AddressComponent object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<AddressComponent> FromValue(const base::DictValue& value);

  // Creates a AddressComponent object from a base::Value, or nullopt on
  // failure.
  static std::optional<AddressComponent> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAddressComponent object.
  base::DictValue ToValue() const;

  // The field type.
  FieldType field;

  // The name of the field.
  std::string field_name;

  // A hint for the UI regarding whether the input is likely to be long.
  bool is_long_field;

  // Whether this component is required or not.
  bool is_required;

  // A placeholder for the text field to be used when the user has not yet input a
  // value for the field.
  std::optional<std::string> placeholder;

};

struct AddressComponentRow {
  AddressComponentRow();
  ~AddressComponentRow();
  AddressComponentRow(const AddressComponentRow&) = delete;
  AddressComponentRow& operator=(const AddressComponentRow&) = delete;
  AddressComponentRow(AddressComponentRow&& rhs) noexcept;
  AddressComponentRow& operator=(AddressComponentRow&& rhs) noexcept;

  // Populates a AddressComponentRow object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AddressComponentRow& out);

  // Populates a AddressComponentRow object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AddressComponentRow& out);

  // Creates a deep copy of AddressComponentRow.
  AddressComponentRow Clone() const;

  // Creates a AddressComponentRow object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<AddressComponentRow> FromValue(const base::DictValue& value);

  // Creates a AddressComponentRow object from a base::Value, or nullopt on
  // failure.
  static std::optional<AddressComponentRow> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAddressComponentRow object.
  base::DictValue ToValue() const;

  std::vector<AddressComponent> row;

};

struct AddressComponents {
  AddressComponents();
  ~AddressComponents();
  AddressComponents(const AddressComponents&) = delete;
  AddressComponents& operator=(const AddressComponents&) = delete;
  AddressComponents(AddressComponents&& rhs) noexcept;
  AddressComponents& operator=(AddressComponents&& rhs) noexcept;

  // Populates a AddressComponents object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AddressComponents& out);

  // Populates a AddressComponents object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AddressComponents& out);

  // Creates a deep copy of AddressComponents.
  AddressComponents Clone() const;

  // Creates a AddressComponents object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<AddressComponents> FromValue(const base::DictValue& value);

  // Creates a AddressComponents object from a base::Value, or nullopt on
  // failure.
  static std::optional<AddressComponents> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAddressComponents object.
  base::DictValue ToValue() const;

  // The components.
  std::vector<AddressComponentRow> components;

  // The language code.
  std::string language_code;

};

struct CreditCardEntry {
  CreditCardEntry();
  ~CreditCardEntry();
  CreditCardEntry(const CreditCardEntry&) = delete;
  CreditCardEntry& operator=(const CreditCardEntry&) = delete;
  CreditCardEntry(CreditCardEntry&& rhs) noexcept;
  CreditCardEntry& operator=(CreditCardEntry&& rhs) noexcept;

  // Populates a CreditCardEntry object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CreditCardEntry& out);

  // Populates a CreditCardEntry object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, CreditCardEntry& out);

  // Creates a deep copy of CreditCardEntry.
  CreditCardEntry Clone() const;

  // Creates a CreditCardEntry object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<CreditCardEntry> FromValue(const base::DictValue& value);

  // Creates a CreditCardEntry object from a base::Value, or nullopt on failure.
  static std::optional<CreditCardEntry> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCreditCardEntry object.
  base::DictValue ToValue() const;

  // Globally unique identifier for this entry.
  std::optional<std::string> guid;

  // The card's instrument ID from the GPay server, if applicable.
  std::optional<std::string> instrument_id;

  // Name of the person who owns the credit card.
  std::optional<std::string> name;

  // Credit card number.
  std::optional<std::string> card_number;

  // Month as 2-character string ("01" = January, "12" = December).
  std::optional<std::string> expiration_month;

  // Year as a 4-character string (as in "2015").
  std::optional<std::string> expiration_year;

  // Credit card's nickname.
  std::optional<std::string> nickname;

  // Credit card's network.
  std::optional<std::string> network;

  // Credit card's image source.
  std::optional<std::string> image_src;

  // Credit card's masked cvc.
  std::optional<std::string> cvc;

  // Credit card's product terms URL.
  std::optional<std::string> product_terms_url;

  std::optional<AutofillMetadata> metadata;

};

struct IbanEntry {
  IbanEntry();
  ~IbanEntry();
  IbanEntry(const IbanEntry&) = delete;
  IbanEntry& operator=(const IbanEntry&) = delete;
  IbanEntry(IbanEntry&& rhs) noexcept;
  IbanEntry& operator=(IbanEntry&& rhs) noexcept;

  // Populates a IbanEntry object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, IbanEntry& out);

  // Populates a IbanEntry object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, IbanEntry& out);

  // Creates a deep copy of IbanEntry.
  IbanEntry Clone() const;

  // Creates a IbanEntry object from a base::DictValue, or nullopt on failure.
  static std::optional<IbanEntry> FromValue(const base::DictValue& value);

  // Creates a IbanEntry object from a base::Value, or nullopt on failure.
  static std::optional<IbanEntry> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisIbanEntry object.
  base::DictValue ToValue() const;

  // Globally unique identifier for this entry.
  std::optional<std::string> guid;

  // The IBAN's instrument ID from the GPay server, if applicable.
  std::optional<std::string> instrument_id;

  // IBAN value.
  std::optional<std::string> value;

  // IBAN's nickname.
  std::optional<std::string> nickname;

  std::optional<AutofillMetadata> metadata;

};

struct AttributeType {
  AttributeType();
  ~AttributeType();
  AttributeType(const AttributeType&) = delete;
  AttributeType& operator=(const AttributeType&) = delete;
  AttributeType(AttributeType&& rhs) noexcept;
  AttributeType& operator=(AttributeType&& rhs) noexcept;

  // Populates a AttributeType object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AttributeType& out);

  // Populates a AttributeType object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AttributeType& out);

  // Creates a deep copy of AttributeType.
  AttributeType Clone() const;

  // Creates a AttributeType object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<AttributeType> FromValue(const base::DictValue& value);

  // Creates a AttributeType object from a base::Value, or nullopt on failure.
  static std::optional<AttributeType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAttributeType object.
  base::DictValue ToValue() const;

  // Contains the value of an `AttributeTypeName` on the C++ side.
  int type_name;

  // The type name as a human readable string.
  std::string type_name_as_string;

  // The type of data stored for this attribute type.
  AttributeTypeDataType data_type;

};

struct EntityType {
  EntityType();
  ~EntityType();
  EntityType(const EntityType&) = delete;
  EntityType& operator=(const EntityType&) = delete;
  EntityType(EntityType&& rhs) noexcept;
  EntityType& operator=(EntityType&& rhs) noexcept;

  // Populates a EntityType object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, EntityType& out);

  // Populates a EntityType object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, EntityType& out);

  // Creates a deep copy of EntityType.
  EntityType Clone() const;

  // Creates a EntityType object from a base::DictValue, or nullopt on failure.
  static std::optional<EntityType> FromValue(const base::DictValue& value);

  // Creates a EntityType object from a base::Value, or nullopt on failure.
  static std::optional<EntityType> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisEntityType object.
  base::DictValue ToValue() const;

  // Contains the value of an `EntityTypeName` on the C++ side.
  int type_name;

  // The type name as a human readable string.
  std::string type_name_as_string;

  // The i18n string representation of "Add <entity type>". Used in the entity
  // instance adding settings UI. The string cannot be constructed dynamically,
  // because the "<entity type>" string might need declension in some languages.
  std::string add_entity_type_string;

  // The i18n string representation of "Edit <entity type>". Used in the entity
  // instance editing settings UI. The string cannot be constructed dynamically,
  // because the "<entity type>" string might need declension in some languages.
  std::string edit_entity_type_string;

  // The i18n string representation of "Delete <entity type>". Used in the entity
  // instance deletion settings UI. The string cannot be constructed dynamically,
  // because the "<entity type>" string might need declension in some languages.
  std::string delete_entity_type_string;

  // Whether the entity type can be stored on Google Wallet servers. Note that an
  // entity type might support Wallet and local storage as well. (e.g. Vehicle).
  bool supports_wallet_storage;

  // What kind of pass the entity type represents, if any. This field is not set
  // for non-pass entities.
  EntityPassType pass_type;

};

struct DateValue {
  DateValue();
  ~DateValue();
  DateValue(const DateValue&) = delete;
  DateValue& operator=(const DateValue&) = delete;
  DateValue(DateValue&& rhs) noexcept;
  DateValue& operator=(DateValue&& rhs) noexcept;

  // Populates a DateValue object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, DateValue& out);

  // Populates a DateValue object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, DateValue& out);

  // Creates a deep copy of DateValue.
  DateValue Clone() const;

  // Creates a DateValue object from a base::DictValue, or nullopt on failure.
  static std::optional<DateValue> FromValue(const base::DictValue& value);

  // Creates a DateValue object from a base::Value, or nullopt on failure.
  static std::optional<DateValue> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisDateValue object.
  base::DictValue ToValue() const;

  // The year of the date valure, repesented as "YYYY". Example: "2016".
  std::string year;

  // The month of the date value, without leading zeros. Example: "3" for March,
  // "10" for October.
  std::string month;

  // The day of the date value, without leading zeros. Example: "3", "30".
  std::string day;

};

struct AttributeInstance {
  AttributeInstance();
  ~AttributeInstance();
  AttributeInstance(const AttributeInstance&) = delete;
  AttributeInstance& operator=(const AttributeInstance&) = delete;
  AttributeInstance(AttributeInstance&& rhs) noexcept;
  AttributeInstance& operator=(AttributeInstance&& rhs) noexcept;

  // Populates a AttributeInstance object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AttributeInstance& out);

  // Populates a AttributeInstance object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AttributeInstance& out);

  // Creates a deep copy of AttributeInstance.
  AttributeInstance Clone() const;

  // Creates a AttributeInstance object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<AttributeInstance> FromValue(const base::DictValue& value);

  // Creates a AttributeInstance object from a base::Value, or nullopt on
  // failure.
  static std::optional<AttributeInstance> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAttributeInstance object.
  base::DictValue ToValue() const;

  // The attribute instance value. If the `AttributeTypeDataType` is a `DATE`,
  // then `value` is a `DateValue`. Otherwise, `value` is a `DOMString`.
  struct Value {
    Value();
    ~Value();
    Value(const Value&) = delete;
    Value& operator=(const Value&) = delete;
    Value(Value&& rhs) noexcept;
    Value& operator=(Value&& rhs) noexcept;

    // Populates a Value object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Value& out);

    // Creates a deep copy of Value.
    Value Clone() const;

    // Creates a Value object from a base::Value, or nullopt on failure.
    static std::optional<Value> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisValue
    // object.
    base::Value ToValue() const;
    // Choices:
    std::optional<std::string> as_string;
    std::optional<DateValue> as_date_value;
  };


  // Contains the attribute type name and other relevant information about the
  // attribute type.
  AttributeType type;

  // The attribute instance value. If the `AttributeTypeDataType` is a `DATE`,
  // then `value` is a `DateValue`. Otherwise, `value` is a `DOMString`.
  Value value;

};

struct EntityInstance {
  EntityInstance();
  ~EntityInstance();
  EntityInstance(const EntityInstance&) = delete;
  EntityInstance& operator=(const EntityInstance&) = delete;
  EntityInstance(EntityInstance&& rhs) noexcept;
  EntityInstance& operator=(EntityInstance&& rhs) noexcept;

  // Populates a EntityInstance object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EntityInstance& out);

  // Populates a EntityInstance object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, EntityInstance& out);

  // Creates a deep copy of EntityInstance.
  EntityInstance Clone() const;

  // Creates a EntityInstance object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<EntityInstance> FromValue(const base::DictValue& value);

  // Creates a EntityInstance object from a base::Value, or nullopt on failure.
  static std::optional<EntityInstance> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisEntityInstance object.
  base::DictValue ToValue() const;

  // Contains the entity type name and other relevant information about the entity
  // type.
  EntityType type;

  // The attribute instances of this entity instance.
  std::vector<AttributeInstance> attribute_instances;

  // The guid of the entity instance.
  std::string guid;

  // The nickname of the entity instance.
  std::string nickname;

  // Whether the user should be authenticated to view the entity instance.
  std::optional<bool> should_authenticate_to_view;

  // Whether the entity is (or should be) stored in Google Wallet servers.
  std::optional<bool> stored_in_wallet;

  // Whether the entity is read only.
  std::optional<bool> is_read_only;

  // The context token for upserting a pass to Google Wallet.
  std::optional<std::string> context_token;

};

struct EntityInstanceWithLabels {
  EntityInstanceWithLabels();
  ~EntityInstanceWithLabels();
  EntityInstanceWithLabels(const EntityInstanceWithLabels&) = delete;
  EntityInstanceWithLabels& operator=(const EntityInstanceWithLabels&) = delete;
  EntityInstanceWithLabels(EntityInstanceWithLabels&& rhs) noexcept;
  EntityInstanceWithLabels& operator=(EntityInstanceWithLabels&& rhs) noexcept;

  // Populates a EntityInstanceWithLabels object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EntityInstanceWithLabels& out);

  // Populates a EntityInstanceWithLabels object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, EntityInstanceWithLabels& out);

  // Creates a deep copy of EntityInstanceWithLabels.
  EntityInstanceWithLabels Clone() const;

  // Creates a EntityInstanceWithLabels object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<EntityInstanceWithLabels> FromValue(const base::DictValue& value);

  // Creates a EntityInstanceWithLabels object from a base::Value, or nullopt on
  // failure.
  static std::optional<EntityInstanceWithLabels> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisEntityInstanceWithLabels object.
  base::DictValue ToValue() const;

  // The guid of the entity instance.
  std::string guid;

  // Contains the entity type name and other relevant information about the entity
  // type.
  EntityType type;

  // The entity instance label.
  std::string entity_instance_label;

  // The entity instance sublabel.
  std::string entity_instance_sub_label;

  // Whether the entity is stored on Google Wallet servers.
  bool stored_in_wallet;

  // If the entity is `storedInWallet`, this string contains the URL to the
  // management page of the pass on the Wallet website.
  std::optional<std::string> wallet_entity_url;

  // Whether the entity is read only.
  std::optional<bool> is_read_only;

};

struct PayOverTimeIssuerEntry {
  PayOverTimeIssuerEntry();
  ~PayOverTimeIssuerEntry();
  PayOverTimeIssuerEntry(const PayOverTimeIssuerEntry&) = delete;
  PayOverTimeIssuerEntry& operator=(const PayOverTimeIssuerEntry&) = delete;
  PayOverTimeIssuerEntry(PayOverTimeIssuerEntry&& rhs) noexcept;
  PayOverTimeIssuerEntry& operator=(PayOverTimeIssuerEntry&& rhs) noexcept;

  // Populates a PayOverTimeIssuerEntry object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PayOverTimeIssuerEntry& out);

  // Populates a PayOverTimeIssuerEntry object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PayOverTimeIssuerEntry& out);

  // Creates a deep copy of PayOverTimeIssuerEntry.
  PayOverTimeIssuerEntry Clone() const;

  // Creates a PayOverTimeIssuerEntry object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<PayOverTimeIssuerEntry> FromValue(const base::DictValue& value);

  // Creates a PayOverTimeIssuerEntry object from a base::Value, or nullopt on
  // failure.
  static std::optional<PayOverTimeIssuerEntry> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPayOverTimeIssuerEntry object.
  base::DictValue ToValue() const;

  // Unique identifier for the Pay Over Time issuer.
  std::optional<std::string> issuer_id;

  // The Pay Over Time issuer's instrument ID from the GPay server, if applicable.
  std::optional<std::string> instrument_id;

  // The Pay Over Time issuer's display name.
  std::optional<std::string> display_name;

  // The Pay Over Time issuer image source.
  std::optional<std::string> image_src;

  // The Pay Over Time issuer image source for dark theme.
  std::optional<std::string> image_src_dark;

};

struct LegalMessageLink {
  LegalMessageLink();
  ~LegalMessageLink();
  LegalMessageLink(const LegalMessageLink&) = delete;
  LegalMessageLink& operator=(const LegalMessageLink&) = delete;
  LegalMessageLink(LegalMessageLink&& rhs) noexcept;
  LegalMessageLink& operator=(LegalMessageLink&& rhs) noexcept;

  // Populates a LegalMessageLink object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, LegalMessageLink& out);

  // Populates a LegalMessageLink object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, LegalMessageLink& out);

  // Creates a deep copy of LegalMessageLink.
  LegalMessageLink Clone() const;

  // Creates a LegalMessageLink object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<LegalMessageLink> FromValue(const base::DictValue& value);

  // Creates a LegalMessageLink object from a base::Value, or nullopt on
  // failure.
  static std::optional<LegalMessageLink> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisLegalMessageLink object.
  base::DictValue ToValue() const;

  int start;

  int end;

  std::string url;

};

struct LegalMessageLine {
  LegalMessageLine();
  ~LegalMessageLine();
  LegalMessageLine(const LegalMessageLine&) = delete;
  LegalMessageLine& operator=(const LegalMessageLine&) = delete;
  LegalMessageLine(LegalMessageLine&& rhs) noexcept;
  LegalMessageLine& operator=(LegalMessageLine&& rhs) noexcept;

  // Populates a LegalMessageLine object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, LegalMessageLine& out);

  // Populates a LegalMessageLine object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, LegalMessageLine& out);

  // Creates a deep copy of LegalMessageLine.
  LegalMessageLine Clone() const;

  // Creates a LegalMessageLine object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<LegalMessageLine> FromValue(const base::DictValue& value);

  // Creates a LegalMessageLine object from a base::Value, or nullopt on
  // failure.
  static std::optional<LegalMessageLine> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisLegalMessageLine object.
  base::DictValue ToValue() const;

  std::string text;

  std::vector<LegalMessageLink> links;

};

struct UpsertPassDetails {
  UpsertPassDetails();
  ~UpsertPassDetails();
  UpsertPassDetails(const UpsertPassDetails&) = delete;
  UpsertPassDetails& operator=(const UpsertPassDetails&) = delete;
  UpsertPassDetails(UpsertPassDetails&& rhs) noexcept;
  UpsertPassDetails& operator=(UpsertPassDetails&& rhs) noexcept;

  // Populates a UpsertPassDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UpsertPassDetails& out);

  // Populates a UpsertPassDetails object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, UpsertPassDetails& out);

  // Creates a deep copy of UpsertPassDetails.
  UpsertPassDetails Clone() const;

  // Creates a UpsertPassDetails object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<UpsertPassDetails> FromValue(const base::DictValue& value);

  // Creates a UpsertPassDetails object from a base::Value, or nullopt on
  // failure.
  static std::optional<UpsertPassDetails> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisUpsertPassDetails object.
  base::DictValue ToValue() const;

  std::vector<LegalMessageLine> legal_message_lines;

  std::string context_token;

};


//
// Functions
//

namespace GetAccountInfo {

namespace Results {

base::ListValue Create(const AccountInfo& account_info);
}  // namespace Results

}  // namespace GetAccountInfo

namespace SaveAddress {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The address entry to save.
  AddressEntry address;


 private:
  Params();
};

}  // namespace SaveAddress

namespace RemoveAddress {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // ID of the address to remove.
  std::string guid;


 private:
  Params();
};

}  // namespace RemoveAddress

namespace GetCountryList {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // whether the address profile opened in the editor originates in the user's
  // profile.
  bool for_account_storage;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const std::vector<CountryEntry>& countries);
}  // namespace Results

}  // namespace GetCountryList

namespace GetAddressComponents {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // A two-character string representing the address' country     whose components
  // should be returned. See autofill_country.cc for a     list of valid codes.
  std::string country_code;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const AddressComponents& components);
}  // namespace Results

}  // namespace GetAddressComponents

namespace GetAddressList {

namespace Results {

base::ListValue Create(const std::vector<AddressEntry>& entries);
}  // namespace Results

}  // namespace GetAddressList

namespace SaveCreditCard {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The card entry to save.
  CreditCardEntry card;


 private:
  Params();
};

}  // namespace SaveCreditCard

namespace SaveIban {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The IBAN entry to save.
  IbanEntry iban;


 private:
  Params();
};

}  // namespace SaveIban

namespace RemovePaymentsEntity {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // ID of the entity to remove.
  std::string guid;


 private:
  Params();
};

}  // namespace RemovePaymentsEntity

namespace GetCreditCardList {

namespace Results {

base::ListValue Create(const std::vector<CreditCardEntry>& entries);
}  // namespace Results

}  // namespace GetCreditCardList

namespace GetIbanList {

namespace Results {

base::ListValue Create(const std::vector<IbanEntry>& entries);
}  // namespace Results

}  // namespace GetIbanList

namespace IsValidIban {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string iban_value;


 private:
  Params();
};

namespace Results {

base::ListValue Create(bool is_valid);
}  // namespace Results

}  // namespace IsValidIban

namespace LogServerCardLinkClicked {

}  // namespace LogServerCardLinkClicked

namespace LogServerIbanLinkClicked {

}  // namespace LogServerIbanLinkClicked

namespace AddVirtualCard {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The server side id of the credit card to be enrolled. Note it refers to the
  // legacy server id of credit cards, not the instrument ids.
  std::string card_id;


 private:
  Params();
};

}  // namespace AddVirtualCard

namespace RemoveVirtualCard {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The server side id of the credit card to be unenrolled. Note it refers to the
  // legacy server id of credit cards, not the instrument ids.
  std::string card_id;


 private:
  Params();
};

}  // namespace RemoveVirtualCard

namespace GetPayOverTimeIssuerList {

namespace Results {

base::ListValue Create(const std::vector<PayOverTimeIssuerEntry>& entries);
}  // namespace Results

}  // namespace GetPayOverTimeIssuerList

namespace AuthenticateUserAndFlipMandatoryAuthToggle {

}  // namespace AuthenticateUserAndFlipMandatoryAuthToggle

namespace AuthenticateUserBeforeViewingEntityData {

namespace Results {

base::ListValue Create(bool success);
}  // namespace Results

}  // namespace AuthenticateUserBeforeViewingEntityData

namespace ToggleAutofillAiReauthRequirement {

}  // namespace ToggleAutofillAiReauthRequirement

namespace GetLocalCard {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string guid;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const CreditCardEntry& card);
}  // namespace Results

}  // namespace GetLocalCard

namespace CheckIfDeviceAuthAvailable {

namespace Results {

base::ListValue Create(bool is_device_auth_available);
}  // namespace Results

}  // namespace CheckIfDeviceAuthAvailable

namespace BulkDeleteAllCvcs {

}  // namespace BulkDeleteAllCvcs

namespace AddOrUpdateEntityInstance {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  EntityInstance entity_instance;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace AddOrUpdateEntityInstance

namespace RemoveEntityInstance {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string guid;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace RemoveEntityInstance

namespace LoadEntityInstances {

namespace Results {

base::ListValue Create(const std::vector<EntityInstanceWithLabels>& entries);
}  // namespace Results

}  // namespace LoadEntityInstances

namespace GetEntityInstanceByGuid {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string guid;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const EntityInstance& entity_instance);
}  // namespace Results

}  // namespace GetEntityInstanceByGuid

namespace GetWritableEntityTypes {

namespace Results {

base::ListValue Create(const std::vector<EntityType>& entity_types);
}  // namespace Results

}  // namespace GetWritableEntityTypes

namespace GetAllAttributeTypesForEntityTypeName {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int entity_type_name;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const std::vector<AttributeType>& attribute_types);
}  // namespace Results

}  // namespace GetAllAttributeTypesForEntityTypeName

namespace GetRequiredAttributeTypesForEntityTypeName {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int entity_type_name;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const std::vector<AttributeType>& attribute_types);
}  // namespace Results

}  // namespace GetRequiredAttributeTypesForEntityTypeName

namespace GetAutofillAiOptInStatus {

namespace Results {

base::ListValue Create(bool opted_in);
}  // namespace Results

}  // namespace GetAutofillAiOptInStatus

namespace SetAutofillAiOptInStatus {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  bool opted_in;


 private:
  Params();
};

namespace Results {

base::ListValue Create(bool success);
}  // namespace Results

}  // namespace SetAutofillAiOptInStatus

namespace GetWalletablePassDetectionOptInStatus {

namespace Results {

base::ListValue Create(bool opted_in);
}  // namespace Results

}  // namespace GetWalletablePassDetectionOptInStatus

namespace SetWalletablePassDetectionOptInStatus {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  bool opted_in;


 private:
  Params();
};

namespace Results {

base::ListValue Create(bool success);
}  // namespace Results

}  // namespace SetWalletablePassDetectionOptInStatus

namespace FetchUserDataProcessingConsent {

namespace Results {

base::ListValue Create(const UserDataProcessingConsentStates& states);
}  // namespace Results

}  // namespace FetchUserDataProcessingConsent

namespace GetDetailsForUpsertPass {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int entity_type_name;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const UpsertPassDetails& details);
}  // namespace Results

}  // namespace GetDetailsForUpsertPass

namespace PreloadDetailsForUpsertPass {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int entity_type_name;


 private:
  Params();
};

}  // namespace PreloadDetailsForUpsertPass

//
// Events
//

namespace OnPersonalDataChanged {

extern const char kEventName[];  // "autofillPrivate.onPersonalDataChanged"

base::ListValue Create(const std::vector<AddressEntry>& address_entries, const std::vector<CreditCardEntry>& credit_card_entries, const std::vector<IbanEntry>& ibans, const std::vector<PayOverTimeIssuerEntry>& pay_over_time_issuers, const AccountInfo& account_info);
}  // namespace OnPersonalDataChanged

namespace OnEntityInstancesChanged {

extern const char kEventName[];  // "autofillPrivate.onEntityInstancesChanged"

base::ListValue Create(const std::vector<EntityInstanceWithLabels>& entity_instances_with_labels);
}  // namespace OnEntityInstancesChanged

}  // namespace autofill_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_AUTOFILL_PRIVATE_H__
