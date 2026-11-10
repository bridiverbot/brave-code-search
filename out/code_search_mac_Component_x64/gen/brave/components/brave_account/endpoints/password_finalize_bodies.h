// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/password_finalize_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/password_finalize_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_PASSWORD_FINALIZE_BODIES_H__
#define BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_PASSWORD_FINALIZE_BODIES_H__

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

struct PasswordFinalizeRequestBody {
  PasswordFinalizeRequestBody();
  ~PasswordFinalizeRequestBody();
  PasswordFinalizeRequestBody(const PasswordFinalizeRequestBody&) = delete;
  PasswordFinalizeRequestBody& operator=(const PasswordFinalizeRequestBody&) = delete;
  PasswordFinalizeRequestBody(PasswordFinalizeRequestBody&& rhs) noexcept;
  PasswordFinalizeRequestBody& operator=(PasswordFinalizeRequestBody&& rhs) noexcept;

  // Populates a PasswordFinalizeRequestBody object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PasswordFinalizeRequestBody& out);

  // Populates a PasswordFinalizeRequestBody object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PasswordFinalizeRequestBody& out);

  // Creates a deep copy of PasswordFinalizeRequestBody.
  PasswordFinalizeRequestBody Clone() const;

  // Creates a PasswordFinalizeRequestBody object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<PasswordFinalizeRequestBody> FromValue(const base::DictValue& value);

  // Creates a PasswordFinalizeRequestBody object from a base::Value, or nullopt
  // on failure.
  static std::optional<PasswordFinalizeRequestBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPasswordFinalizeRequestBody object.
  base::DictValue ToValue() const;

  std::string serialized_record;

};

struct PasswordFinalizeSuccessBody {
  PasswordFinalizeSuccessBody();
  ~PasswordFinalizeSuccessBody();
  PasswordFinalizeSuccessBody(const PasswordFinalizeSuccessBody&) = delete;
  PasswordFinalizeSuccessBody& operator=(const PasswordFinalizeSuccessBody&) = delete;
  PasswordFinalizeSuccessBody(PasswordFinalizeSuccessBody&& rhs) noexcept;
  PasswordFinalizeSuccessBody& operator=(PasswordFinalizeSuccessBody&& rhs) noexcept;

  // Populates a PasswordFinalizeSuccessBody object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PasswordFinalizeSuccessBody& out);

  // Populates a PasswordFinalizeSuccessBody object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, PasswordFinalizeSuccessBody& out);

  // Creates a deep copy of PasswordFinalizeSuccessBody.
  PasswordFinalizeSuccessBody Clone() const;

  // Creates a PasswordFinalizeSuccessBody object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<PasswordFinalizeSuccessBody> FromValue(const base::DictValue& value);

  // Creates a PasswordFinalizeSuccessBody object from a base::Value, or nullopt
  // on failure.
  static std::optional<PasswordFinalizeSuccessBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisPasswordFinalizeSuccessBody object.
  base::DictValue ToValue() const;

  // either DOMString, or null, but must always be present
  base::Value auth_token;

};


}  // namespace endpoints
}  // namespace brave_account

#endif  // BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_PASSWORD_FINALIZE_BODIES_H__
