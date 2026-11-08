// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/login_init_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/login_init_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_LOGIN_INIT_BODIES_H__
#define BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_LOGIN_INIT_BODIES_H__

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

struct LoginInitRequestBody {
  LoginInitRequestBody();
  ~LoginInitRequestBody();
  LoginInitRequestBody(const LoginInitRequestBody&) = delete;
  LoginInitRequestBody& operator=(const LoginInitRequestBody&) = delete;
  LoginInitRequestBody(LoginInitRequestBody&& rhs) noexcept;
  LoginInitRequestBody& operator=(LoginInitRequestBody&& rhs) noexcept;

  // Populates a LoginInitRequestBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, LoginInitRequestBody& out);

  // Populates a LoginInitRequestBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, LoginInitRequestBody& out);

  // Creates a deep copy of LoginInitRequestBody.
  LoginInitRequestBody Clone() const;

  // Creates a LoginInitRequestBody object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<LoginInitRequestBody> FromValue(const base::DictValue& value);

  // Creates a LoginInitRequestBody object from a base::Value, or nullopt on
  // failure.
  static std::optional<LoginInitRequestBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisLoginInitRequestBody object.
  base::DictValue ToValue() const;

  std::string email;

  std::string serialized_ke1;

};

struct LoginInitSuccessBody {
  LoginInitSuccessBody();
  ~LoginInitSuccessBody();
  LoginInitSuccessBody(const LoginInitSuccessBody&) = delete;
  LoginInitSuccessBody& operator=(const LoginInitSuccessBody&) = delete;
  LoginInitSuccessBody(LoginInitSuccessBody&& rhs) noexcept;
  LoginInitSuccessBody& operator=(LoginInitSuccessBody&& rhs) noexcept;

  // Populates a LoginInitSuccessBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, LoginInitSuccessBody& out);

  // Populates a LoginInitSuccessBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, LoginInitSuccessBody& out);

  // Creates a deep copy of LoginInitSuccessBody.
  LoginInitSuccessBody Clone() const;

  // Creates a LoginInitSuccessBody object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<LoginInitSuccessBody> FromValue(const base::DictValue& value);

  // Creates a LoginInitSuccessBody object from a base::Value, or nullopt on
  // failure.
  static std::optional<LoginInitSuccessBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisLoginInitSuccessBody object.
  base::DictValue ToValue() const;

  std::string login_token;

  std::string serialized_ke2;

};


}  // namespace endpoints
}  // namespace brave_account

#endif  // BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_LOGIN_INIT_BODIES_H__
