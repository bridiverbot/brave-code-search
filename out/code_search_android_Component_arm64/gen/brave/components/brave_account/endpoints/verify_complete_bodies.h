// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/verify_complete_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/verify_complete_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_VERIFY_COMPLETE_BODIES_H__
#define BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_VERIFY_COMPLETE_BODIES_H__

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

struct VerifyCompleteRequestBody {
  VerifyCompleteRequestBody();
  ~VerifyCompleteRequestBody();
  VerifyCompleteRequestBody(const VerifyCompleteRequestBody&) = delete;
  VerifyCompleteRequestBody& operator=(const VerifyCompleteRequestBody&) = delete;
  VerifyCompleteRequestBody(VerifyCompleteRequestBody&& rhs) noexcept;
  VerifyCompleteRequestBody& operator=(VerifyCompleteRequestBody&& rhs) noexcept;

  // Populates a VerifyCompleteRequestBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, VerifyCompleteRequestBody& out);

  // Populates a VerifyCompleteRequestBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, VerifyCompleteRequestBody& out);

  // Creates a deep copy of VerifyCompleteRequestBody.
  VerifyCompleteRequestBody Clone() const;

  // Creates a VerifyCompleteRequestBody object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<VerifyCompleteRequestBody> FromValue(const base::DictValue& value);

  // Creates a VerifyCompleteRequestBody object from a base::Value, or nullopt
  // on failure.
  static std::optional<VerifyCompleteRequestBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisVerifyCompleteRequestBody object.
  base::DictValue ToValue() const;

  std::string code;

};

struct VerifyCompleteSuccessBody {
  VerifyCompleteSuccessBody();
  ~VerifyCompleteSuccessBody();
  VerifyCompleteSuccessBody(const VerifyCompleteSuccessBody&) = delete;
  VerifyCompleteSuccessBody& operator=(const VerifyCompleteSuccessBody&) = delete;
  VerifyCompleteSuccessBody(VerifyCompleteSuccessBody&& rhs) noexcept;
  VerifyCompleteSuccessBody& operator=(VerifyCompleteSuccessBody&& rhs) noexcept;

  // Populates a VerifyCompleteSuccessBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, VerifyCompleteSuccessBody& out);

  // Populates a VerifyCompleteSuccessBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, VerifyCompleteSuccessBody& out);

  // Creates a deep copy of VerifyCompleteSuccessBody.
  VerifyCompleteSuccessBody Clone() const;

  // Creates a VerifyCompleteSuccessBody object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<VerifyCompleteSuccessBody> FromValue(const base::DictValue& value);

  // Creates a VerifyCompleteSuccessBody object from a base::Value, or nullopt
  // on failure.
  static std::optional<VerifyCompleteSuccessBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisVerifyCompleteSuccessBody object.
  base::DictValue ToValue() const;

  // either DOMString, or null, but must always be present
  base::Value auth_token;

  std::string email;

};


}  // namespace endpoints
}  // namespace brave_account

#endif  // BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_VERIFY_COMPLETE_BODIES_H__
