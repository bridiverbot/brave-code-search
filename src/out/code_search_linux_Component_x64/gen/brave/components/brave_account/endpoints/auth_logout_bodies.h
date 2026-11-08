// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/auth_logout_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/auth_logout_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_AUTH_LOGOUT_BODIES_H__
#define BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_AUTH_LOGOUT_BODIES_H__

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

struct AuthLogoutRequestBody {
  AuthLogoutRequestBody();
  ~AuthLogoutRequestBody();
  AuthLogoutRequestBody(const AuthLogoutRequestBody&) = delete;
  AuthLogoutRequestBody& operator=(const AuthLogoutRequestBody&) = delete;
  AuthLogoutRequestBody(AuthLogoutRequestBody&& rhs) noexcept;
  AuthLogoutRequestBody& operator=(AuthLogoutRequestBody&& rhs) noexcept;

  // Populates a AuthLogoutRequestBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AuthLogoutRequestBody& out);

  // Populates a AuthLogoutRequestBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AuthLogoutRequestBody& out);

  // Creates a deep copy of AuthLogoutRequestBody.
  AuthLogoutRequestBody Clone() const;

  // Creates a AuthLogoutRequestBody object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<AuthLogoutRequestBody> FromValue(const base::DictValue& value);

  // Creates a AuthLogoutRequestBody object from a base::Value, or nullopt on
  // failure.
  static std::optional<AuthLogoutRequestBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAuthLogoutRequestBody object.
  base::DictValue ToValue() const;

};

struct AuthLogoutSuccessBody {
  AuthLogoutSuccessBody();
  ~AuthLogoutSuccessBody();
  AuthLogoutSuccessBody(const AuthLogoutSuccessBody&) = delete;
  AuthLogoutSuccessBody& operator=(const AuthLogoutSuccessBody&) = delete;
  AuthLogoutSuccessBody(AuthLogoutSuccessBody&& rhs) noexcept;
  AuthLogoutSuccessBody& operator=(AuthLogoutSuccessBody&& rhs) noexcept;

  // Populates a AuthLogoutSuccessBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AuthLogoutSuccessBody& out);

  // Populates a AuthLogoutSuccessBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AuthLogoutSuccessBody& out);

  // Creates a deep copy of AuthLogoutSuccessBody.
  AuthLogoutSuccessBody Clone() const;

  // Creates a AuthLogoutSuccessBody object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<AuthLogoutSuccessBody> FromValue(const base::DictValue& value);

  // Creates a AuthLogoutSuccessBody object from a base::Value, or nullopt on
  // failure.
  static std::optional<AuthLogoutSuccessBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAuthLogoutSuccessBody object.
  base::DictValue ToValue() const;

};

struct AuthLogoutErrorBody {
  AuthLogoutErrorBody();
  ~AuthLogoutErrorBody();
  AuthLogoutErrorBody(const AuthLogoutErrorBody&) = delete;
  AuthLogoutErrorBody& operator=(const AuthLogoutErrorBody&) = delete;
  AuthLogoutErrorBody(AuthLogoutErrorBody&& rhs) noexcept;
  AuthLogoutErrorBody& operator=(AuthLogoutErrorBody&& rhs) noexcept;

  // Populates a AuthLogoutErrorBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AuthLogoutErrorBody& out);

  // Populates a AuthLogoutErrorBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, AuthLogoutErrorBody& out);

  // Creates a deep copy of AuthLogoutErrorBody.
  AuthLogoutErrorBody Clone() const;

  // Creates a AuthLogoutErrorBody object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<AuthLogoutErrorBody> FromValue(const base::DictValue& value);

  // Creates a AuthLogoutErrorBody object from a base::Value, or nullopt on
  // failure.
  static std::optional<AuthLogoutErrorBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAuthLogoutErrorBody object.
  base::DictValue ToValue() const;

};


}  // namespace endpoints
}  // namespace brave_account

#endif  // BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_AUTH_LOGOUT_BODIES_H__
