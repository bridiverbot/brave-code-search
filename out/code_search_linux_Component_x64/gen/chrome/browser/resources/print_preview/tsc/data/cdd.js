// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Same as cloud_devices::printer::TypedValueVendorCapability::ValueType.
 */
export var VendorCapabilityValueType;
(function (VendorCapabilityValueType) {
    VendorCapabilityValueType["BOOLEAN"] = "BOOLEAN";
    VendorCapabilityValueType["FLOAT"] = "FLOAT";
    VendorCapabilityValueType["INTEGER"] = "INTEGER";
    VendorCapabilityValueType["STRING"] = "STRING";
})(VendorCapabilityValueType || (VendorCapabilityValueType = {}));
/**
 * Values matching the types of duplex in a CDD.
 */
export var DuplexType;
(function (DuplexType) {
    DuplexType["NO_DUPLEX"] = "NO_DUPLEX";
    DuplexType["LONG_EDGE"] = "LONG_EDGE";
    DuplexType["SHORT_EDGE"] = "SHORT_EDGE";
})(DuplexType || (DuplexType = {}));
export var VendorCapabilityType;
(function (VendorCapabilityType) {
    VendorCapabilityType["RANGE"] = "RANGE";
    VendorCapabilityType["SELECT"] = "SELECT";
    VendorCapabilityType["TYPED_VALUE"] = "TYPED_VALUE";
    VendorCapabilityType["UNKNOWN"] = "UNKNOWN";
})(VendorCapabilityType || (VendorCapabilityType = {}));
