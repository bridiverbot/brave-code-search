// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/auth_validate_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/auth_validate_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_AUTH_VALIDATE_BODIES_H__
#define BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_AUTH_VALIDATE_BODIES_H__

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

struct AuthValidateRequestBody {
  AuthValidateRequestBody();
  ~AuthValidateRequestBody();
  AuthValidateRequestBody(const AuthValidateRequestBody&) = delete;
  AuthValidateRequestBody& operator=(const AuthValidateRequestBody&) = delete;
  AuthValidateRequestBody(AuthValidateRequestBody&& rhs) noexcept;
  AuthValidateRequestBody& operator=(AuthValidateRequestBody&& rhs) noexcept;

  // Populates a AuthValidateRequestBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AuthValidateRequestBody& out);

  // Populates a AuthValidateRequestBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AuthValidateRequestBody& out);

  // Creates a deep copy of AuthValidateRequestBody.
  AuthValidateRequestBody Clone() const;

  // Creates a AuthValidateRequestBody object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<AuthValidateRequestBody> FromValue(const base::DictValue& value);

  // Creates a AuthValidateRequestBody object from a base::Value, or nullopt on
  // failure.
  static std::optional<AuthValidateRequestBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAuthValidateRequestBody object.
  base::DictValue ToValue() const;

};

struct AuthValidateSuccessBody {
  AuthValidateSuccessBody();
  ~AuthValidateSuccessBody();
  AuthValidateSuccessBody(const AuthValidateSuccessBody&) = delete;
  AuthValidateSuccessBody& operator=(const AuthValidateSuccessBody&) = delete;
  AuthValidateSuccessBody(AuthValidateSuccessBody&& rhs) noexcept;
  AuthValidateSuccessBody& operator=(AuthValidateSuccessBody&& rhs) noexcept;

  // Populates a AuthValidateSuccessBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AuthValidateSuccessBody& out);

  // Populates a AuthValidateSuccessBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AuthValidateSuccessBody& out);

  // Creates a deep copy of AuthValidateSuccessBody.
  AuthValidateSuccessBody Clone() const;

  // Creates a AuthValidateSuccessBody object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<AuthValidateSuccessBody> FromValue(const base::DictValue& value);

  // Creates a AuthValidateSuccessBody object from a base::Value, or nullopt on
  // failure.
  static std::optional<AuthValidateSuccessBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAuthValidateSuccessBody object.
  base::DictValue ToValue() const;

  std::string email;

};


}  // namespace endpoints
}  // namespace brave_account

#endif  // BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_AUTH_VALIDATE_BODIES_H__
