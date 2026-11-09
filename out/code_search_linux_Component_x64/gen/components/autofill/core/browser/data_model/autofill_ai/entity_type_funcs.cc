// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include <array>
#include <limits>
#include <string>
#include <utility>

#include "base/containers/fixed_flat_map.h"
#include "base/containers/fixed_flat_set.h"
#include "base/containers/span.h"
#include "base/notreached.h"
#include "base/types/optional_ref.h"
#include "base/types/pass_key.h"
#include "components/autofill/core/browser/country_type.h"
#include "components/autofill/core/browser/data_model/autofill_ai/entity_type.h"
#include "components/autofill/core/common/autofill_features.h"
#include "components/autofill/core/common/dense_set.h"

namespace autofill {

namespace {

constexpr std::string_view AttributeTypeNameToString(AttributeTypeName name) {
  switch (name) {
    case AttributeTypeName::kPassportName:
      return "Name";
    case AttributeTypeName::kPassportCountry:
      return "Country";
    case AttributeTypeName::kPassportNumber:
      return "Number";
    case AttributeTypeName::kPassportIssueDate:
      return "Issue date";
    case AttributeTypeName::kPassportExpirationDate:
      return "Expiration date";
    case AttributeTypeName::kDriversLicenseName:
      return "Name";
    case AttributeTypeName::kDriversLicenseState:
      return "State";
    case AttributeTypeName::kDriversLicenseNumber:
      return "Number";
    case AttributeTypeName::kDriversLicenseIssueDate:
      return "Issue date";
    case AttributeTypeName::kDriversLicenseExpirationDate:
      return "Expiration date";
    case AttributeTypeName::kVehicleMake:
      return "Make";
    case AttributeTypeName::kVehicleModel:
      return "Model";
    case AttributeTypeName::kVehicleYear:
      return "Year";
    case AttributeTypeName::kVehicleOwner:
      return "Owner";
    case AttributeTypeName::kVehiclePlateNumber:
      return "Plate number";
    case AttributeTypeName::kVehiclePlateState:
      return "Plate state";
    case AttributeTypeName::kVehicleVin:
      return "VIN";
    case AttributeTypeName::kNationalIdCardName:
      return "Name";
    case AttributeTypeName::kNationalIdCardCountry:
      return "Country";
    case AttributeTypeName::kNationalIdCardNumber:
      return "Number";
    case AttributeTypeName::kNationalIdCardIssueDate:
      return "Issue date";
    case AttributeTypeName::kNationalIdCardExpirationDate:
      return "Expiration date";
    case AttributeTypeName::kKnownTravelerNumberName:
      return "Name";
    case AttributeTypeName::kKnownTravelerNumberNumber:
      return "Number";
    case AttributeTypeName::kKnownTravelerNumberExpirationDate:
      return "Expiration date";
    case AttributeTypeName::kRedressNumberName:
      return "Name";
    case AttributeTypeName::kRedressNumberNumber:
      return "Number";
    case AttributeTypeName::kFlightReservationFlightNumber:
      return "Flight number";
    case AttributeTypeName::kFlightReservationTicketNumber:
      return "Ticket number";
    case AttributeTypeName::kFlightReservationConfirmationCode:
      return "Confirmation code";
    case AttributeTypeName::kFlightReservationPassengerName:
      return "Passenger name";
    case AttributeTypeName::kFlightReservationDepartureAirport:
      return "Departure airport";
    case AttributeTypeName::kFlightReservationArrivalAirport:
      return "Arrival airport";
    case AttributeTypeName::kFlightReservationDepartureDate:
      return "Departure date";
    case AttributeTypeName::kOrderId:
      return "Id";
    case AttributeTypeName::kOrderAccount:
      return "Account";
    case AttributeTypeName::kOrderDate:
      return "Date";
    case AttributeTypeName::kOrderMerchantName:
      return "Merchant name";
    case AttributeTypeName::kOrderMerchantDomain:
      return "Merchant domain";
    case AttributeTypeName::kOrderProductNames:
      return "Product names";
    case AttributeTypeName::kShipmentTrackingNumber:
      return "Tracking number";
    case AttributeTypeName::kShipmentDeliveryZipCode:
      return "Delivery zip code";
    case AttributeTypeName::kShipmentCarrierName:
      return "Carrier name";
    case AttributeTypeName::kShipmentCarrierDomain:
      return "Carrier domain";
    case AttributeTypeName::kShipmentShippedDate:
      return "Shipped date";
    case AttributeTypeName::kShipmentMerchantName:
      return "Merchant name";
    case AttributeTypeName::kShipmentProductNames:
      return "Product names";
  }
  NOTREACHED();
}

constexpr std::string_view EntityTypeNameToString(EntityTypeName name) {
  switch (name) {
    case EntityTypeName::kPassport:
      return "Passport";
    case EntityTypeName::kDriversLicense:
      return "Driver's license";
    case EntityTypeName::kVehicle:
      return "Vehicle";
    case EntityTypeName::kNationalIdCard:
      return "National Id Card";
    case EntityTypeName::kKnownTravelerNumber:
      return "Known Traveler Number";
    case EntityTypeName::kRedressNumber:
      return "Redress Number";
    case EntityTypeName::kFlightReservation:
      return "Flight Reservation";
    case EntityTypeName::kOrder:
      return "Order";
    case EntityTypeName::kShipment:
      return "Shipment";
  }
  NOTREACHED();
}

}  // namespace

std::optional<EntityType> StringToEntityType(std::string_view entity_type_name) {
  static constexpr auto kMap = base::MakeFixedFlatMap<std::string_view, EntityType>({
    {EntityTypeNameToString(EntityTypeName::kPassport), EntityType(EntityTypeName::kPassport)},
    {EntityTypeNameToString(EntityTypeName::kDriversLicense), EntityType(EntityTypeName::kDriversLicense)},
    {EntityTypeNameToString(EntityTypeName::kVehicle), EntityType(EntityTypeName::kVehicle)},
    {EntityTypeNameToString(EntityTypeName::kNationalIdCard), EntityType(EntityTypeName::kNationalIdCard)},
    {EntityTypeNameToString(EntityTypeName::kKnownTravelerNumber), EntityType(EntityTypeName::kKnownTravelerNumber)},
    {EntityTypeNameToString(EntityTypeName::kRedressNumber), EntityType(EntityTypeName::kRedressNumber)},
    {EntityTypeNameToString(EntityTypeName::kFlightReservation), EntityType(EntityTypeName::kFlightReservation)},
    {EntityTypeNameToString(EntityTypeName::kOrder), EntityType(EntityTypeName::kOrder)},
    {EntityTypeNameToString(EntityTypeName::kShipment), EntityType(EntityTypeName::kShipment)}
  });
  auto it = kMap.find(entity_type_name);
  return it != kMap.end() ? std::optional(it->second) : std::nullopt;
}

std::optional<AttributeType> StringToAttributeType(EntityType entity_type, std::string_view attribute_type_name) {
  switch (entity_type.name()) {
    case EntityTypeName::kPassport: {
      static constexpr auto kMap = base::MakeFixedFlatMap<std::string_view, AttributeType>({
        {AttributeTypeNameToString(AttributeTypeName::kPassportName), AttributeType(AttributeTypeName::kPassportName)},
        {AttributeTypeNameToString(AttributeTypeName::kPassportCountry), AttributeType(AttributeTypeName::kPassportCountry)},
        {AttributeTypeNameToString(AttributeTypeName::kPassportNumber), AttributeType(AttributeTypeName::kPassportNumber)},
        {AttributeTypeNameToString(AttributeTypeName::kPassportIssueDate), AttributeType(AttributeTypeName::kPassportIssueDate)},
        {AttributeTypeNameToString(AttributeTypeName::kPassportExpirationDate), AttributeType(AttributeTypeName::kPassportExpirationDate)}
      });
      auto it = kMap.find(attribute_type_name);
      return it != kMap.end() ? std::optional(it->second) : std::nullopt;
    }
    case EntityTypeName::kDriversLicense: {
      static constexpr auto kMap = base::MakeFixedFlatMap<std::string_view, AttributeType>({
        {AttributeTypeNameToString(AttributeTypeName::kDriversLicenseName), AttributeType(AttributeTypeName::kDriversLicenseName)},
        {AttributeTypeNameToString(AttributeTypeName::kDriversLicenseState), AttributeType(AttributeTypeName::kDriversLicenseState)},
        {AttributeTypeNameToString(AttributeTypeName::kDriversLicenseNumber), AttributeType(AttributeTypeName::kDriversLicenseNumber)},
        {AttributeTypeNameToString(AttributeTypeName::kDriversLicenseIssueDate), AttributeType(AttributeTypeName::kDriversLicenseIssueDate)},
        {AttributeTypeNameToString(AttributeTypeName::kDriversLicenseExpirationDate), AttributeType(AttributeTypeName::kDriversLicenseExpirationDate)}
      });
      auto it = kMap.find(attribute_type_name);
      return it != kMap.end() ? std::optional(it->second) : std::nullopt;
    }
    case EntityTypeName::kVehicle: {
      static constexpr auto kMap = base::MakeFixedFlatMap<std::string_view, AttributeType>({
        {AttributeTypeNameToString(AttributeTypeName::kVehicleMake), AttributeType(AttributeTypeName::kVehicleMake)},
        {AttributeTypeNameToString(AttributeTypeName::kVehicleModel), AttributeType(AttributeTypeName::kVehicleModel)},
        {AttributeTypeNameToString(AttributeTypeName::kVehicleYear), AttributeType(AttributeTypeName::kVehicleYear)},
        {AttributeTypeNameToString(AttributeTypeName::kVehicleOwner), AttributeType(AttributeTypeName::kVehicleOwner)},
        {AttributeTypeNameToString(AttributeTypeName::kVehiclePlateNumber), AttributeType(AttributeTypeName::kVehiclePlateNumber)},
        {AttributeTypeNameToString(AttributeTypeName::kVehiclePlateState), AttributeType(AttributeTypeName::kVehiclePlateState)},
        {AttributeTypeNameToString(AttributeTypeName::kVehicleVin), AttributeType(AttributeTypeName::kVehicleVin)}
      });
      auto it = kMap.find(attribute_type_name);
      return it != kMap.end() ? std::optional(it->second) : std::nullopt;
    }
    case EntityTypeName::kNationalIdCard: {
      static constexpr auto kMap = base::MakeFixedFlatMap<std::string_view, AttributeType>({
        {AttributeTypeNameToString(AttributeTypeName::kNationalIdCardName), AttributeType(AttributeTypeName::kNationalIdCardName)},
        {AttributeTypeNameToString(AttributeTypeName::kNationalIdCardCountry), AttributeType(AttributeTypeName::kNationalIdCardCountry)},
        {AttributeTypeNameToString(AttributeTypeName::kNationalIdCardNumber), AttributeType(AttributeTypeName::kNationalIdCardNumber)},
        {AttributeTypeNameToString(AttributeTypeName::kNationalIdCardIssueDate), AttributeType(AttributeTypeName::kNationalIdCardIssueDate)},
        {AttributeTypeNameToString(AttributeTypeName::kNationalIdCardExpirationDate), AttributeType(AttributeTypeName::kNationalIdCardExpirationDate)}
      });
      auto it = kMap.find(attribute_type_name);
      return it != kMap.end() ? std::optional(it->second) : std::nullopt;
    }
    case EntityTypeName::kKnownTravelerNumber: {
      static constexpr auto kMap = base::MakeFixedFlatMap<std::string_view, AttributeType>({
        {AttributeTypeNameToString(AttributeTypeName::kKnownTravelerNumberName), AttributeType(AttributeTypeName::kKnownTravelerNumberName)},
        {AttributeTypeNameToString(AttributeTypeName::kKnownTravelerNumberNumber), AttributeType(AttributeTypeName::kKnownTravelerNumberNumber)},
        {AttributeTypeNameToString(AttributeTypeName::kKnownTravelerNumberExpirationDate), AttributeType(AttributeTypeName::kKnownTravelerNumberExpirationDate)}
      });
      auto it = kMap.find(attribute_type_name);
      return it != kMap.end() ? std::optional(it->second) : std::nullopt;
    }
    case EntityTypeName::kRedressNumber: {
      static constexpr auto kMap = base::MakeFixedFlatMap<std::string_view, AttributeType>({
        {AttributeTypeNameToString(AttributeTypeName::kRedressNumberName), AttributeType(AttributeTypeName::kRedressNumberName)},
        {AttributeTypeNameToString(AttributeTypeName::kRedressNumberNumber), AttributeType(AttributeTypeName::kRedressNumberNumber)}
      });
      auto it = kMap.find(attribute_type_name);
      return it != kMap.end() ? std::optional(it->second) : std::nullopt;
    }
    case EntityTypeName::kFlightReservation: {
      static constexpr auto kMap = base::MakeFixedFlatMap<std::string_view, AttributeType>({
        {AttributeTypeNameToString(AttributeTypeName::kFlightReservationFlightNumber), AttributeType(AttributeTypeName::kFlightReservationFlightNumber)},
        {AttributeTypeNameToString(AttributeTypeName::kFlightReservationTicketNumber), AttributeType(AttributeTypeName::kFlightReservationTicketNumber)},
        {AttributeTypeNameToString(AttributeTypeName::kFlightReservationConfirmationCode), AttributeType(AttributeTypeName::kFlightReservationConfirmationCode)},
        {AttributeTypeNameToString(AttributeTypeName::kFlightReservationPassengerName), AttributeType(AttributeTypeName::kFlightReservationPassengerName)},
        {AttributeTypeNameToString(AttributeTypeName::kFlightReservationDepartureAirport), AttributeType(AttributeTypeName::kFlightReservationDepartureAirport)},
        {AttributeTypeNameToString(AttributeTypeName::kFlightReservationArrivalAirport), AttributeType(AttributeTypeName::kFlightReservationArrivalAirport)},
        {AttributeTypeNameToString(AttributeTypeName::kFlightReservationDepartureDate), AttributeType(AttributeTypeName::kFlightReservationDepartureDate)}
      });
      auto it = kMap.find(attribute_type_name);
      return it != kMap.end() ? std::optional(it->second) : std::nullopt;
    }
    case EntityTypeName::kOrder: {
      static constexpr auto kMap = base::MakeFixedFlatMap<std::string_view, AttributeType>({
        {AttributeTypeNameToString(AttributeTypeName::kOrderId), AttributeType(AttributeTypeName::kOrderId)},
        {AttributeTypeNameToString(AttributeTypeName::kOrderAccount), AttributeType(AttributeTypeName::kOrderAccount)},
        {AttributeTypeNameToString(AttributeTypeName::kOrderDate), AttributeType(AttributeTypeName::kOrderDate)},
        {AttributeTypeNameToString(AttributeTypeName::kOrderMerchantName), AttributeType(AttributeTypeName::kOrderMerchantName)},
        {AttributeTypeNameToString(AttributeTypeName::kOrderMerchantDomain), AttributeType(AttributeTypeName::kOrderMerchantDomain)},
        {AttributeTypeNameToString(AttributeTypeName::kOrderProductNames), AttributeType(AttributeTypeName::kOrderProductNames)}
      });
      auto it = kMap.find(attribute_type_name);
      return it != kMap.end() ? std::optional(it->second) : std::nullopt;
    }
    case EntityTypeName::kShipment: {
      static constexpr auto kMap = base::MakeFixedFlatMap<std::string_view, AttributeType>({
        {AttributeTypeNameToString(AttributeTypeName::kShipmentTrackingNumber), AttributeType(AttributeTypeName::kShipmentTrackingNumber)},
        {AttributeTypeNameToString(AttributeTypeName::kShipmentDeliveryZipCode), AttributeType(AttributeTypeName::kShipmentDeliveryZipCode)},
        {AttributeTypeNameToString(AttributeTypeName::kShipmentCarrierName), AttributeType(AttributeTypeName::kShipmentCarrierName)},
        {AttributeTypeNameToString(AttributeTypeName::kShipmentCarrierDomain), AttributeType(AttributeTypeName::kShipmentCarrierDomain)},
        {AttributeTypeNameToString(AttributeTypeName::kShipmentShippedDate), AttributeType(AttributeTypeName::kShipmentShippedDate)},
        {AttributeTypeNameToString(AttributeTypeName::kShipmentMerchantName), AttributeType(AttributeTypeName::kShipmentMerchantName)},
        {AttributeTypeNameToString(AttributeTypeName::kShipmentProductNames), AttributeType(AttributeTypeName::kShipmentProductNames)}
      });
      auto it = kMap.find(attribute_type_name);
      return it != kMap.end() ? std::optional(it->second) : std::nullopt;
    }
  }
  return std::nullopt;
}

bool AttributeType::is_obfuscated() const {
  switch (name_) {
    case AttributeTypeName::kPassportName:
      return false;
    case AttributeTypeName::kPassportCountry:
      return false;
    case AttributeTypeName::kPassportNumber:
      return true;
    case AttributeTypeName::kPassportIssueDate:
      return false;
    case AttributeTypeName::kPassportExpirationDate:
      return false;
    case AttributeTypeName::kDriversLicenseName:
      return false;
    case AttributeTypeName::kDriversLicenseState:
      return false;
    case AttributeTypeName::kDriversLicenseNumber:
      return true;
    case AttributeTypeName::kDriversLicenseIssueDate:
      return false;
    case AttributeTypeName::kDriversLicenseExpirationDate:
      return false;
    case AttributeTypeName::kVehicleMake:
      return false;
    case AttributeTypeName::kVehicleModel:
      return false;
    case AttributeTypeName::kVehicleYear:
      return false;
    case AttributeTypeName::kVehicleOwner:
      return false;
    case AttributeTypeName::kVehiclePlateNumber:
      return false;
    case AttributeTypeName::kVehiclePlateState:
      return false;
    case AttributeTypeName::kVehicleVin:
      return false;
    case AttributeTypeName::kNationalIdCardName:
      return false;
    case AttributeTypeName::kNationalIdCardCountry:
      return false;
    case AttributeTypeName::kNationalIdCardNumber:
      return true;
    case AttributeTypeName::kNationalIdCardIssueDate:
      return false;
    case AttributeTypeName::kNationalIdCardExpirationDate:
      return false;
    case AttributeTypeName::kKnownTravelerNumberName:
      return false;
    case AttributeTypeName::kKnownTravelerNumberNumber:
      return true;
    case AttributeTypeName::kKnownTravelerNumberExpirationDate:
      return false;
    case AttributeTypeName::kRedressNumberName:
      return false;
    case AttributeTypeName::kRedressNumberNumber:
      return true;
    case AttributeTypeName::kFlightReservationFlightNumber:
      return false;
    case AttributeTypeName::kFlightReservationTicketNumber:
      return false;
    case AttributeTypeName::kFlightReservationConfirmationCode:
      return false;
    case AttributeTypeName::kFlightReservationPassengerName:
      return false;
    case AttributeTypeName::kFlightReservationDepartureAirport:
      return false;
    case AttributeTypeName::kFlightReservationArrivalAirport:
      return false;
    case AttributeTypeName::kFlightReservationDepartureDate:
      return false;
    case AttributeTypeName::kOrderId:
      return false;
    case AttributeTypeName::kOrderAccount:
      return false;
    case AttributeTypeName::kOrderDate:
      return false;
    case AttributeTypeName::kOrderMerchantName:
      return false;
    case AttributeTypeName::kOrderMerchantDomain:
      return false;
    case AttributeTypeName::kOrderProductNames:
      return false;
    case AttributeTypeName::kShipmentTrackingNumber:
      return false;
    case AttributeTypeName::kShipmentDeliveryZipCode:
      return false;
    case AttributeTypeName::kShipmentCarrierName:
      return false;
    case AttributeTypeName::kShipmentCarrierDomain:
      return false;
    case AttributeTypeName::kShipmentShippedDate:
      return false;
    case AttributeTypeName::kShipmentMerchantName:
      return false;
    case AttributeTypeName::kShipmentProductNames:
      return false;
  }
  NOTREACHED();
}

std::string_view AttributeType::name_as_string() const {
  return AttributeTypeNameToString(name_);
}

bool AttributeType::is_disambiguation_type() const {
  switch (name_) {
    case AttributeTypeName::kPassportName:
      return true;
    case AttributeTypeName::kPassportCountry:
      return true;
    case AttributeTypeName::kDriversLicenseName:
      return true;
    case AttributeTypeName::kDriversLicenseState:
      return true;
    case AttributeTypeName::kVehicleMake:
      return true;
    case AttributeTypeName::kVehicleModel:
      return true;
    case AttributeTypeName::kVehicleYear:
      return true;
    case AttributeTypeName::kVehicleOwner:
      return true;
    case AttributeTypeName::kNationalIdCardName:
      return true;
    case AttributeTypeName::kNationalIdCardCountry:
      return true;
    case AttributeTypeName::kKnownTravelerNumberName:
      return true;
    case AttributeTypeName::kRedressNumberName:
      return true;
    case AttributeTypeName::kFlightReservationDepartureAirport:
      return true;
    case AttributeTypeName::kFlightReservationArrivalAirport:
      return true;
    case AttributeTypeName::kFlightReservationDepartureDate:
      return true;
    case AttributeTypeName::kFlightReservationPassengerName:
      return true;
    case AttributeTypeName::kFlightReservationFlightNumber:
      return true;
    case AttributeTypeName::kOrderMerchantName:
      return true;
    case AttributeTypeName::kOrderProductNames:
      return true;
    case AttributeTypeName::kOrderDate:
      return true;
    case AttributeTypeName::kShipmentMerchantName:
      return true;
    case AttributeTypeName::kShipmentProductNames:
      return true;
    default:
      return false;
  }
}

EntityType AttributeType::entity_type() const {
  switch (name_) {
    case AttributeTypeName::kPassportName:
      return EntityType(EntityTypeName::kPassport);
    case AttributeTypeName::kPassportCountry:
      return EntityType(EntityTypeName::kPassport);
    case AttributeTypeName::kPassportNumber:
      return EntityType(EntityTypeName::kPassport);
    case AttributeTypeName::kPassportIssueDate:
      return EntityType(EntityTypeName::kPassport);
    case AttributeTypeName::kPassportExpirationDate:
      return EntityType(EntityTypeName::kPassport);
    case AttributeTypeName::kDriversLicenseName:
      return EntityType(EntityTypeName::kDriversLicense);
    case AttributeTypeName::kDriversLicenseState:
      return EntityType(EntityTypeName::kDriversLicense);
    case AttributeTypeName::kDriversLicenseNumber:
      return EntityType(EntityTypeName::kDriversLicense);
    case AttributeTypeName::kDriversLicenseIssueDate:
      return EntityType(EntityTypeName::kDriversLicense);
    case AttributeTypeName::kDriversLicenseExpirationDate:
      return EntityType(EntityTypeName::kDriversLicense);
    case AttributeTypeName::kVehicleMake:
      return EntityType(EntityTypeName::kVehicle);
    case AttributeTypeName::kVehicleModel:
      return EntityType(EntityTypeName::kVehicle);
    case AttributeTypeName::kVehicleYear:
      return EntityType(EntityTypeName::kVehicle);
    case AttributeTypeName::kVehicleOwner:
      return EntityType(EntityTypeName::kVehicle);
    case AttributeTypeName::kVehiclePlateNumber:
      return EntityType(EntityTypeName::kVehicle);
    case AttributeTypeName::kVehiclePlateState:
      return EntityType(EntityTypeName::kVehicle);
    case AttributeTypeName::kVehicleVin:
      return EntityType(EntityTypeName::kVehicle);
    case AttributeTypeName::kNationalIdCardName:
      return EntityType(EntityTypeName::kNationalIdCard);
    case AttributeTypeName::kNationalIdCardCountry:
      return EntityType(EntityTypeName::kNationalIdCard);
    case AttributeTypeName::kNationalIdCardNumber:
      return EntityType(EntityTypeName::kNationalIdCard);
    case AttributeTypeName::kNationalIdCardIssueDate:
      return EntityType(EntityTypeName::kNationalIdCard);
    case AttributeTypeName::kNationalIdCardExpirationDate:
      return EntityType(EntityTypeName::kNationalIdCard);
    case AttributeTypeName::kKnownTravelerNumberName:
      return EntityType(EntityTypeName::kKnownTravelerNumber);
    case AttributeTypeName::kKnownTravelerNumberNumber:
      return EntityType(EntityTypeName::kKnownTravelerNumber);
    case AttributeTypeName::kKnownTravelerNumberExpirationDate:
      return EntityType(EntityTypeName::kKnownTravelerNumber);
    case AttributeTypeName::kRedressNumberName:
      return EntityType(EntityTypeName::kRedressNumber);
    case AttributeTypeName::kRedressNumberNumber:
      return EntityType(EntityTypeName::kRedressNumber);
    case AttributeTypeName::kFlightReservationFlightNumber:
      return EntityType(EntityTypeName::kFlightReservation);
    case AttributeTypeName::kFlightReservationTicketNumber:
      return EntityType(EntityTypeName::kFlightReservation);
    case AttributeTypeName::kFlightReservationConfirmationCode:
      return EntityType(EntityTypeName::kFlightReservation);
    case AttributeTypeName::kFlightReservationPassengerName:
      return EntityType(EntityTypeName::kFlightReservation);
    case AttributeTypeName::kFlightReservationDepartureAirport:
      return EntityType(EntityTypeName::kFlightReservation);
    case AttributeTypeName::kFlightReservationArrivalAirport:
      return EntityType(EntityTypeName::kFlightReservation);
    case AttributeTypeName::kFlightReservationDepartureDate:
      return EntityType(EntityTypeName::kFlightReservation);
    case AttributeTypeName::kOrderId:
      return EntityType(EntityTypeName::kOrder);
    case AttributeTypeName::kOrderAccount:
      return EntityType(EntityTypeName::kOrder);
    case AttributeTypeName::kOrderDate:
      return EntityType(EntityTypeName::kOrder);
    case AttributeTypeName::kOrderMerchantName:
      return EntityType(EntityTypeName::kOrder);
    case AttributeTypeName::kOrderMerchantDomain:
      return EntityType(EntityTypeName::kOrder);
    case AttributeTypeName::kOrderProductNames:
      return EntityType(EntityTypeName::kOrder);
    case AttributeTypeName::kShipmentTrackingNumber:
      return EntityType(EntityTypeName::kShipment);
    case AttributeTypeName::kShipmentDeliveryZipCode:
      return EntityType(EntityTypeName::kShipment);
    case AttributeTypeName::kShipmentCarrierName:
      return EntityType(EntityTypeName::kShipment);
    case AttributeTypeName::kShipmentCarrierDomain:
      return EntityType(EntityTypeName::kShipment);
    case AttributeTypeName::kShipmentShippedDate:
      return EntityType(EntityTypeName::kShipment);
    case AttributeTypeName::kShipmentMerchantName:
      return EntityType(EntityTypeName::kShipment);
    case AttributeTypeName::kShipmentProductNames:
      return EntityType(EntityTypeName::kShipment);
  }
  NOTREACHED();
}

std::string_view EntityType::name_as_string() const {
  return EntityTypeNameToString(name_);
}

DenseSet<AttributeType> EntityType::attributes() const {
  switch (name_) {
    case EntityTypeName::kPassport: {
      static constexpr auto s = DenseSet<AttributeType>{AttributeType(AttributeTypeName::kPassportName), AttributeType(AttributeTypeName::kPassportCountry), AttributeType(AttributeTypeName::kPassportNumber), AttributeType(AttributeTypeName::kPassportIssueDate), AttributeType(AttributeTypeName::kPassportExpirationDate)};
      return s;
    }
    case EntityTypeName::kDriversLicense: {
      static constexpr auto s = DenseSet<AttributeType>{AttributeType(AttributeTypeName::kDriversLicenseName), AttributeType(AttributeTypeName::kDriversLicenseState), AttributeType(AttributeTypeName::kDriversLicenseNumber), AttributeType(AttributeTypeName::kDriversLicenseIssueDate), AttributeType(AttributeTypeName::kDriversLicenseExpirationDate)};
      return s;
    }
    case EntityTypeName::kVehicle: {
      static constexpr auto s = DenseSet<AttributeType>{AttributeType(AttributeTypeName::kVehicleMake), AttributeType(AttributeTypeName::kVehicleModel), AttributeType(AttributeTypeName::kVehicleYear), AttributeType(AttributeTypeName::kVehicleOwner), AttributeType(AttributeTypeName::kVehiclePlateNumber), AttributeType(AttributeTypeName::kVehiclePlateState), AttributeType(AttributeTypeName::kVehicleVin)};
      return s;
    }
    case EntityTypeName::kNationalIdCard: {
      static constexpr auto s = DenseSet<AttributeType>{AttributeType(AttributeTypeName::kNationalIdCardName), AttributeType(AttributeTypeName::kNationalIdCardCountry), AttributeType(AttributeTypeName::kNationalIdCardNumber), AttributeType(AttributeTypeName::kNationalIdCardIssueDate), AttributeType(AttributeTypeName::kNationalIdCardExpirationDate)};
      return s;
    }
    case EntityTypeName::kKnownTravelerNumber: {
      static constexpr auto s = DenseSet<AttributeType>{AttributeType(AttributeTypeName::kKnownTravelerNumberName), AttributeType(AttributeTypeName::kKnownTravelerNumberNumber), AttributeType(AttributeTypeName::kKnownTravelerNumberExpirationDate)};
      return s;
    }
    case EntityTypeName::kRedressNumber: {
      static constexpr auto s = DenseSet<AttributeType>{AttributeType(AttributeTypeName::kRedressNumberName), AttributeType(AttributeTypeName::kRedressNumberNumber)};
      return s;
    }
    case EntityTypeName::kFlightReservation: {
      static constexpr auto s = DenseSet<AttributeType>{AttributeType(AttributeTypeName::kFlightReservationFlightNumber), AttributeType(AttributeTypeName::kFlightReservationTicketNumber), AttributeType(AttributeTypeName::kFlightReservationConfirmationCode), AttributeType(AttributeTypeName::kFlightReservationPassengerName), AttributeType(AttributeTypeName::kFlightReservationDepartureAirport), AttributeType(AttributeTypeName::kFlightReservationArrivalAirport), AttributeType(AttributeTypeName::kFlightReservationDepartureDate)};
      return s;
    }
    case EntityTypeName::kOrder: {
      static constexpr auto s = DenseSet<AttributeType>{AttributeType(AttributeTypeName::kOrderId), AttributeType(AttributeTypeName::kOrderAccount), AttributeType(AttributeTypeName::kOrderDate), AttributeType(AttributeTypeName::kOrderMerchantName), AttributeType(AttributeTypeName::kOrderMerchantDomain), AttributeType(AttributeTypeName::kOrderProductNames)};
      return s;
    }
    case EntityTypeName::kShipment: {
      static constexpr auto s = DenseSet<AttributeType>{AttributeType(AttributeTypeName::kShipmentTrackingNumber), AttributeType(AttributeTypeName::kShipmentDeliveryZipCode), AttributeType(AttributeTypeName::kShipmentCarrierName), AttributeType(AttributeTypeName::kShipmentCarrierDomain), AttributeType(AttributeTypeName::kShipmentShippedDate), AttributeType(AttributeTypeName::kShipmentMerchantName), AttributeType(AttributeTypeName::kShipmentProductNames)};
      return s;
    }
  }
  NOTREACHED();
}

base::span<const DenseSet<AttributeType>> EntityType::import_constraints() const {
  switch (name_) {
    case EntityTypeName::kPassport: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 1>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kPassportNumber)}};
      return as;
    }
    case EntityTypeName::kDriversLicense: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 1>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kDriversLicenseNumber)}};
      return as;
    }
    case EntityTypeName::kVehicle: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 2>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kVehiclePlateNumber)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kVehicleVin)}};
      return as;
    }
    case EntityTypeName::kNationalIdCard: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 1>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kNationalIdCardNumber)}};
      return as;
    }
    case EntityTypeName::kKnownTravelerNumber: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 1>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kKnownTravelerNumberNumber)}};
      return as;
    }
    case EntityTypeName::kRedressNumber: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 1>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kRedressNumberNumber)}};
      return as;
    }
    case EntityTypeName::kFlightReservation: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 3>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kFlightReservationFlightNumber), AttributeType(AttributeTypeName::kFlightReservationDepartureDate)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kFlightReservationTicketNumber), AttributeType(AttributeTypeName::kFlightReservationDepartureDate)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kFlightReservationConfirmationCode), AttributeType(AttributeTypeName::kFlightReservationDepartureDate)}};
      return as;
    }
    case EntityTypeName::kOrder: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 3>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kOrderId), AttributeType(AttributeTypeName::kOrderMerchantName), AttributeType(AttributeTypeName::kOrderDate)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kOrderId), AttributeType(AttributeTypeName::kOrderMerchantDomain), AttributeType(AttributeTypeName::kOrderDate)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kOrderId), AttributeType(AttributeTypeName::kOrderProductNames), AttributeType(AttributeTypeName::kOrderDate)}};
      return as;
    }
    case EntityTypeName::kShipment: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 2>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kShipmentTrackingNumber), AttributeType(AttributeTypeName::kShipmentMerchantName), AttributeType(AttributeTypeName::kShipmentShippedDate)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kShipmentTrackingNumber), AttributeType(AttributeTypeName::kShipmentProductNames), AttributeType(AttributeTypeName::kShipmentShippedDate)}};
      return as;
    }
  }
  NOTREACHED();
}

base::span<const DenseSet<AttributeType>> EntityType::required_fields() const {
  switch (name_) {
    case EntityTypeName::kPassport: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 3>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kPassportNumber)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kPassportIssueDate)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kPassportExpirationDate)}};
      return as;
    }
    case EntityTypeName::kDriversLicense: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 5>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kDriversLicenseName)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kDriversLicenseState)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kDriversLicenseNumber)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kDriversLicenseIssueDate)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kDriversLicenseExpirationDate)}};
      return as;
    }
    case EntityTypeName::kVehicle: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 7>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kVehicleMake)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kVehicleModel)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kVehicleYear)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kVehicleOwner)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kVehiclePlateNumber)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kVehiclePlateState)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kVehicleVin)}};
      return as;
    }
    case EntityTypeName::kNationalIdCard: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 5>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kNationalIdCardName)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kNationalIdCardCountry)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kNationalIdCardNumber)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kNationalIdCardIssueDate)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kNationalIdCardExpirationDate)}};
      return as;
    }
    case EntityTypeName::kKnownTravelerNumber: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 3>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kKnownTravelerNumberName)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kKnownTravelerNumberNumber)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kKnownTravelerNumberExpirationDate)}};
      return as;
    }
    case EntityTypeName::kRedressNumber: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 2>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kRedressNumberName)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kRedressNumberNumber)}};
      return as;
    }
    case EntityTypeName::kFlightReservation: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 3>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kFlightReservationFlightNumber)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kFlightReservationTicketNumber)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kFlightReservationConfirmationCode)}};
      return as;
    }
    case EntityTypeName::kOrder: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 1>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kOrderId)}};
      return as;
    }
    case EntityTypeName::kShipment: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 1>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kShipmentTrackingNumber)}};
      return as;
    }
  }
  NOTREACHED();
}

base::span<const DenseSet<AttributeType>> EntityType::merge_constraints() const {
  switch (name_) {
    case EntityTypeName::kPassport: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 1>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kPassportNumber)}};
      return as;
    }
    case EntityTypeName::kDriversLicense: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 1>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kDriversLicenseNumber)}};
      return as;
    }
    case EntityTypeName::kVehicle: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 2>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kVehiclePlateNumber)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kVehicleVin)}};
      return as;
    }
    case EntityTypeName::kNationalIdCard: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 1>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kNationalIdCardNumber)}};
      return as;
    }
    case EntityTypeName::kKnownTravelerNumber: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 1>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kKnownTravelerNumberNumber)}};
      return as;
    }
    case EntityTypeName::kRedressNumber: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 1>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kRedressNumberNumber)}};
      return as;
    }
    case EntityTypeName::kFlightReservation: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 2>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kFlightReservationConfirmationCode)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kFlightReservationTicketNumber)}};
      return as;
    }
    case EntityTypeName::kOrder: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 1>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kOrderId)}};
      return as;
    }
    case EntityTypeName::kShipment: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 1>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kShipmentTrackingNumber)}};
      return as;
    }
  }
  NOTREACHED();
}
base::span<const DenseSet<AttributeType>> EntityType::strike_keys() const {
  switch (name_) {
    case EntityTypeName::kPassport: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 1>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kPassportNumber)}};
      return as;
    }
    case EntityTypeName::kDriversLicense: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 1>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kDriversLicenseNumber)}};
      return as;
    }
    case EntityTypeName::kVehicle: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 2>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kVehiclePlateNumber)}, DenseSet<AttributeType>{AttributeType(AttributeTypeName::kVehicleVin)}};
      return as;
    }
    case EntityTypeName::kNationalIdCard: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 1>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kNationalIdCardNumber)}};
      return as;
    }
    case EntityTypeName::kKnownTravelerNumber: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 1>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kKnownTravelerNumberNumber)}};
      return as;
    }
    case EntityTypeName::kRedressNumber: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 1>{DenseSet<AttributeType>{AttributeType(AttributeTypeName::kRedressNumberNumber)}};
      return as;
    }
    case EntityTypeName::kFlightReservation: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 0>{};
      return as;
    }
    case EntityTypeName::kOrder: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 0>{};
      return as;
    }
    case EntityTypeName::kShipment: {
      static constexpr auto as = std::array<DenseSet<AttributeType>, 0>{};
      return as;
    }
  }
  NOTREACHED();
}

bool EntityType::enabled(base::optional_ref<const GeoIpCountryCode> country_code) const {
  switch (name_) {
    case EntityTypeName::kPassport: {
      return true;
    }
    case EntityTypeName::kDriversLicense: {
      return true;
    }
    case EntityTypeName::kVehicle: {
      return true;
    }
    case EntityTypeName::kNationalIdCard: {
      static constexpr auto banned_ips = base::MakeFixedFlatSet<std::string_view>({
          "IN"
      });
      return !country_code || !banned_ips.contains(**country_code);
    }
    case EntityTypeName::kKnownTravelerNumber: {
      return true;
    }
    case EntityTypeName::kRedressNumber: {
      return true;
    }
    case EntityTypeName::kFlightReservation: {
      if (!base::FeatureList::IsEnabled(features::kAutofillAiWalletFlightReservation)) {
        return false;
      }
      return true;
    }
    case EntityTypeName::kOrder: {
      if (!base::FeatureList::IsEnabled(features::kAutofillAiOrder)) {
        return false;
      }
      return true;
    }
    case EntityTypeName::kShipment: {
      if (!base::FeatureList::IsEnabled(features::kAutofillAiShipment)) {
        return false;
      }
      return true;
    }
  }
  NOTREACHED();
}

bool EntityType::read_only() const {
  switch (name_) {
    case EntityTypeName::kPassport:
      return false;
    case EntityTypeName::kDriversLicense:
      return false;
    case EntityTypeName::kVehicle:
      return false;
    case EntityTypeName::kNationalIdCard:
      return false;
    case EntityTypeName::kKnownTravelerNumber:
      return false;
    case EntityTypeName::kRedressNumber:
      return false;
    case EntityTypeName::kFlightReservation:
      return true;
    case EntityTypeName::kOrder:
      return true;
    case EntityTypeName::kShipment:
      return true;
  }
  NOTREACHED();
}

// static
bool AttributeType::DisambiguationOrder(const AttributeType& lhs, const AttributeType& rhs) {
  constexpr auto rank = [](const AttributeType& a) {
    static constexpr auto ranks = [] {
      std::array<int, std::to_underlying(AttributeTypeName::kMaxValue) + 1> ranks{};
      for (int& rank : ranks) {
        rank = std::numeric_limits<int>::max();
      }
      ranks[std::to_underlying(AttributeTypeName::kPassportName)] = 1;
      ranks[std::to_underlying(AttributeTypeName::kPassportCountry)] = 2;
      ranks[std::to_underlying(AttributeTypeName::kDriversLicenseName)] = 1;
      ranks[std::to_underlying(AttributeTypeName::kDriversLicenseState)] = 2;
      ranks[std::to_underlying(AttributeTypeName::kVehicleMake)] = 1;
      ranks[std::to_underlying(AttributeTypeName::kVehicleModel)] = 2;
      ranks[std::to_underlying(AttributeTypeName::kVehicleYear)] = 3;
      ranks[std::to_underlying(AttributeTypeName::kVehicleOwner)] = 4;
      ranks[std::to_underlying(AttributeTypeName::kNationalIdCardName)] = 1;
      ranks[std::to_underlying(AttributeTypeName::kNationalIdCardCountry)] = 2;
      ranks[std::to_underlying(AttributeTypeName::kKnownTravelerNumberName)] = 1;
      ranks[std::to_underlying(AttributeTypeName::kRedressNumberName)] = 1;
      ranks[std::to_underlying(AttributeTypeName::kFlightReservationDepartureAirport)] = 1;
      ranks[std::to_underlying(AttributeTypeName::kFlightReservationArrivalAirport)] = 2;
      ranks[std::to_underlying(AttributeTypeName::kFlightReservationDepartureDate)] = 3;
      ranks[std::to_underlying(AttributeTypeName::kFlightReservationPassengerName)] = 4;
      ranks[std::to_underlying(AttributeTypeName::kFlightReservationFlightNumber)] = 5;
      ranks[std::to_underlying(AttributeTypeName::kOrderMerchantName)] = 1;
      ranks[std::to_underlying(AttributeTypeName::kOrderProductNames)] = 2;
      ranks[std::to_underlying(AttributeTypeName::kOrderDate)] = 3;
      ranks[std::to_underlying(AttributeTypeName::kShipmentMerchantName)] = 1;
      ranks[std::to_underlying(AttributeTypeName::kShipmentProductNames)] = 2;
      return ranks;
    }();
    return ranks[std::to_underlying(a.name())];
  };
  return rank(lhs) < rank(rhs);
}

}  // namespace autofill
