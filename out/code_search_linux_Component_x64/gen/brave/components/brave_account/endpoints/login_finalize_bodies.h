// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/login_finalize_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/login_finalize_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_LOGIN_FINALIZE_BODIES_H__
#define BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_LOGIN_FINALIZE_BODIES_H__

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

struct LoginFinalizeRequestBody {
  LoginFinalizeRequestBody();
  ~LoginFinalizeRequestBody();
  LoginFinalizeRequestBody(const LoginFinalizeRequestBody&) = delete;
  LoginFinalizeRequestBody& operator=(const LoginFinalizeRequestBody&) = delete;
  LoginFinalizeRequestBody(LoginFinalizeRequestBody&& rhs) noexcept;
  LoginFinalizeRequestBody& operator=(LoginFinalizeRequestBody&& rhs) noexcept;

  // Populates a LoginFinalizeRequestBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, LoginFinalizeRequestBody& out);

  // Populates a LoginFinalizeRequestBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, LoginFinalizeRequestBody& out);

  // Creates a deep copy of LoginFinalizeRequestBody.
  LoginFinalizeRequestBody Clone() const;

  // Creates a LoginFinalizeRequestBody object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<LoginFinalizeRequestBody> FromValue(const base::DictValue& value);

  // Creates a LoginFinalizeRequestBody object from a base::Value, or nullopt on
  // failure.
  static std::optional<LoginFinalizeRequestBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisLoginFinalizeRequestBody object.
  base::DictValue ToValue() const;

  std::string client_mac;

};

struct LoginFinalizeSuccessBody {
  LoginFinalizeSuccessBody();
  ~LoginFinalizeSuccessBody();
  LoginFinalizeSuccessBody(const LoginFinalizeSuccessBody&) = delete;
  LoginFinalizeSuccessBody& operator=(const LoginFinalizeSuccessBody&) = delete;
  LoginFinalizeSuccessBody(LoginFinalizeSuccessBody&& rhs) noexcept;
  LoginFinalizeSuccessBody& operator=(LoginFinalizeSuccessBody&& rhs) noexcept;

  // Populates a LoginFinalizeSuccessBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, LoginFinalizeSuccessBody& out);

  // Populates a LoginFinalizeSuccessBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, LoginFinalizeSuccessBody& out);

  // Creates a deep copy of LoginFinalizeSuccessBody.
  LoginFinalizeSuccessBody Clone() const;

  // Creates a LoginFinalizeSuccessBody object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<LoginFinalizeSuccessBody> FromValue(const base::DictValue& value);

  // Creates a LoginFinalizeSuccessBody object from a base::Value, or nullopt on
  // failure.
  static std::optional<LoginFinalizeSuccessBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisLoginFinalizeSuccessBody object.
  base::DictValue ToValue() const;

  std::string auth_token;

  std::string email;

};


}  // namespace endpoints
}  // namespace brave_account

#endif  // BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_LOGIN_FINALIZE_BODIES_H__
