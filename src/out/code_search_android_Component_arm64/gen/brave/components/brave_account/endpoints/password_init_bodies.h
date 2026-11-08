// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/password_init_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/password_init_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_PASSWORD_INIT_BODIES_H__
#define BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_PASSWORD_INIT_BODIES_H__

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

struct PasswordInitRequestBody {
  PasswordInitRequestBody();
  ~PasswordInitRequestBody();
  PasswordInitRequestBody(const PasswordInitRequestBody&) = delete;
  PasswordInitRequestBody& operator=(const PasswordInitRequestBody&) = delete;
  PasswordInitRequestBody(PasswordInitRequestBody&& rhs) noexcept;
  PasswordInitRequestBody& operator=(PasswordInitRequestBody&& rhs) noexcept;

  // Populates a PasswordInitRequestBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PasswordInitRequestBody& out);

  // Populates a PasswordInitRequestBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PasswordInitRequestBody& out);

  // Creates a deep copy of PasswordInitRequestBody.
  PasswordInitRequestBody Clone() const;

  // Creates a PasswordInitRequestBody object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<PasswordInitRequestBody> FromValue(const base::DictValue& value);

  // Creates a PasswordInitRequestBody object from a base::Value, or nullopt on
  // failure.
  static std::optional<PasswordInitRequestBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPasswordInitRequestBody object.
  base::DictValue ToValue() const;

  std::string blinded_message;

  std::optional<std::string> new_account_email;

  bool serialize_response;

};

struct PasswordInitSuccessBody {
  PasswordInitSuccessBody();
  ~PasswordInitSuccessBody();
  PasswordInitSuccessBody(const PasswordInitSuccessBody&) = delete;
  PasswordInitSuccessBody& operator=(const PasswordInitSuccessBody&) = delete;
  PasswordInitSuccessBody(PasswordInitSuccessBody&& rhs) noexcept;
  PasswordInitSuccessBody& operator=(PasswordInitSuccessBody&& rhs) noexcept;

  // Populates a PasswordInitSuccessBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PasswordInitSuccessBody& out);

  // Populates a PasswordInitSuccessBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PasswordInitSuccessBody& out);

  // Creates a deep copy of PasswordInitSuccessBody.
  PasswordInitSuccessBody Clone() const;

  // Creates a PasswordInitSuccessBody object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<PasswordInitSuccessBody> FromValue(const base::DictValue& value);

  // Creates a PasswordInitSuccessBody object from a base::Value, or nullopt on
  // failure.
  static std::optional<PasswordInitSuccessBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPasswordInitSuccessBody object.
  base::DictValue ToValue() const;

  std::string serialized_response;

  std::optional<std::string> verification_token;

};


}  // namespace endpoints
}  // namespace brave_account

#endif  // BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_PASSWORD_INIT_BODIES_H__
