// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/service_token_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/service_token_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_SERVICE_TOKEN_BODIES_H__
#define BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_SERVICE_TOKEN_BODIES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace brave_account {
namespace endpoints {

//
// Types
//

struct ServiceTokenRequestBody {
  ServiceTokenRequestBody();
  ~ServiceTokenRequestBody();
  ServiceTokenRequestBody(const ServiceTokenRequestBody&) = delete;
  ServiceTokenRequestBody& operator=(const ServiceTokenRequestBody&) = delete;
  ServiceTokenRequestBody(ServiceTokenRequestBody&& rhs) noexcept;
  ServiceTokenRequestBody& operator=(ServiceTokenRequestBody&& rhs) noexcept;

  // Populates a ServiceTokenRequestBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ServiceTokenRequestBody& out);

  // Populates a ServiceTokenRequestBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ServiceTokenRequestBody& out);

  // Creates a deep copy of ServiceTokenRequestBody.
  ServiceTokenRequestBody Clone() const;

  // Creates a ServiceTokenRequestBody object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<ServiceTokenRequestBody> FromValue(const base::DictValue& value);

  // Creates a ServiceTokenRequestBody object from a base::Value, or nullopt on
  // failure.
  static std::optional<ServiceTokenRequestBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisServiceTokenRequestBody object.
  base::DictValue ToValue() const;

  std::string service;

};

struct ServiceTokenSuccessBody {
  ServiceTokenSuccessBody();
  ~ServiceTokenSuccessBody();
  ServiceTokenSuccessBody(const ServiceTokenSuccessBody&) = delete;
  ServiceTokenSuccessBody& operator=(const ServiceTokenSuccessBody&) = delete;
  ServiceTokenSuccessBody(ServiceTokenSuccessBody&& rhs) noexcept;
  ServiceTokenSuccessBody& operator=(ServiceTokenSuccessBody&& rhs) noexcept;

  // Populates a ServiceTokenSuccessBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ServiceTokenSuccessBody& out);

  // Populates a ServiceTokenSuccessBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ServiceTokenSuccessBody& out);

  // Creates a deep copy of ServiceTokenSuccessBody.
  ServiceTokenSuccessBody Clone() const;

  // Creates a ServiceTokenSuccessBody object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<ServiceTokenSuccessBody> FromValue(const base::DictValue& value);

  // Creates a ServiceTokenSuccessBody object from a base::Value, or nullopt on
  // failure.
  static std::optional<ServiceTokenSuccessBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisServiceTokenSuccessBody object.
  base::DictValue ToValue() const;

  std::string auth_token;

};


}  // namespace endpoints
}  // namespace brave_account

#endif  // BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_SERVICE_TOKEN_BODIES_H__
