// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/endpoint_client/json_test_endpoint_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/endpoint_client/json_test_endpoint_bodies.idl --root=../../ --destdir=gen --namespace=%(namespace)s --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_ENDPOINT_CLIENT_JSON_TEST_ENDPOINT_BODIES_H__
#define BRAVE_COMPONENTS_ENDPOINT_CLIENT_JSON_TEST_ENDPOINT_BODIES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace endpoint_client {

//
// Types
//

struct JSONRequestBody {
  JSONRequestBody();
  ~JSONRequestBody();
  JSONRequestBody(const JSONRequestBody&) = delete;
  JSONRequestBody& operator=(const JSONRequestBody&) = delete;
  JSONRequestBody(JSONRequestBody&& rhs) noexcept;
  JSONRequestBody& operator=(JSONRequestBody&& rhs) noexcept;

  // Populates a JSONRequestBody object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, JSONRequestBody& out);

  // Populates a JSONRequestBody object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, JSONRequestBody& out);

  // Creates a deep copy of JSONRequestBody.
  JSONRequestBody Clone() const;

  // Creates a JSONRequestBody object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<JSONRequestBody> FromValue(const base::DictValue& value);

  // Creates a JSONRequestBody object from a base::Value, or nullopt on failure.
  static std::optional<JSONRequestBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisJSONRequestBody object.
  base::DictValue ToValue() const;

  std::string request;

};

struct JSONSuccessBody {
  JSONSuccessBody();
  ~JSONSuccessBody();
  JSONSuccessBody(const JSONSuccessBody&) = delete;
  JSONSuccessBody& operator=(const JSONSuccessBody&) = delete;
  JSONSuccessBody(JSONSuccessBody&& rhs) noexcept;
  JSONSuccessBody& operator=(JSONSuccessBody&& rhs) noexcept;

  // Populates a JSONSuccessBody object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, JSONSuccessBody& out);

  // Populates a JSONSuccessBody object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, JSONSuccessBody& out);

  // Creates a deep copy of JSONSuccessBody.
  JSONSuccessBody Clone() const;

  // Creates a JSONSuccessBody object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<JSONSuccessBody> FromValue(const base::DictValue& value);

  // Creates a JSONSuccessBody object from a base::Value, or nullopt on failure.
  static std::optional<JSONSuccessBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisJSONSuccessBody object.
  base::DictValue ToValue() const;

  std::string success;

};

struct JSONErrorBody {
  JSONErrorBody();
  ~JSONErrorBody();
  JSONErrorBody(const JSONErrorBody&) = delete;
  JSONErrorBody& operator=(const JSONErrorBody&) = delete;
  JSONErrorBody(JSONErrorBody&& rhs) noexcept;
  JSONErrorBody& operator=(JSONErrorBody&& rhs) noexcept;

  // Populates a JSONErrorBody object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, JSONErrorBody& out);

  // Populates a JSONErrorBody object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, JSONErrorBody& out);

  // Creates a deep copy of JSONErrorBody.
  JSONErrorBody Clone() const;

  // Creates a JSONErrorBody object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<JSONErrorBody> FromValue(const base::DictValue& value);

  // Creates a JSONErrorBody object from a base::Value, or nullopt on failure.
  static std::optional<JSONErrorBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisJSONErrorBody object.
  base::DictValue ToValue() const;

  std::string error;

};


}  // namespace endpoint_client

#endif  // BRAVE_COMPONENTS_ENDPOINT_CLIENT_JSON_TEST_ENDPOINT_BODIES_H__
