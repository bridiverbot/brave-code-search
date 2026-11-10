// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/verify_init_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/verify_init_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_VERIFY_INIT_BODIES_H__
#define BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_VERIFY_INIT_BODIES_H__

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

struct VerifyInitRequestBody {
  VerifyInitRequestBody();
  ~VerifyInitRequestBody();
  VerifyInitRequestBody(const VerifyInitRequestBody&) = delete;
  VerifyInitRequestBody& operator=(const VerifyInitRequestBody&) = delete;
  VerifyInitRequestBody(VerifyInitRequestBody&& rhs) noexcept;
  VerifyInitRequestBody& operator=(VerifyInitRequestBody&& rhs) noexcept;

  // Populates a VerifyInitRequestBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, VerifyInitRequestBody& out);

  // Populates a VerifyInitRequestBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, VerifyInitRequestBody& out);

  // Creates a deep copy of VerifyInitRequestBody.
  VerifyInitRequestBody Clone() const;

  // Creates a VerifyInitRequestBody object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<VerifyInitRequestBody> FromValue(const base::DictValue& value);

  // Creates a VerifyInitRequestBody object from a base::Value, or nullopt on
  // failure.
  static std::optional<VerifyInitRequestBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisVerifyInitRequestBody object.
  base::DictValue ToValue() const;

  std::string email;

  std::string intent;

  std::string locale;

  std::string service;

};

struct VerifyInitSuccessBody {
  VerifyInitSuccessBody();
  ~VerifyInitSuccessBody();
  VerifyInitSuccessBody(const VerifyInitSuccessBody&) = delete;
  VerifyInitSuccessBody& operator=(const VerifyInitSuccessBody&) = delete;
  VerifyInitSuccessBody(VerifyInitSuccessBody&& rhs) noexcept;
  VerifyInitSuccessBody& operator=(VerifyInitSuccessBody&& rhs) noexcept;

  // Populates a VerifyInitSuccessBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, VerifyInitSuccessBody& out);

  // Populates a VerifyInitSuccessBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, VerifyInitSuccessBody& out);

  // Creates a deep copy of VerifyInitSuccessBody.
  VerifyInitSuccessBody Clone() const;

  // Creates a VerifyInitSuccessBody object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<VerifyInitSuccessBody> FromValue(const base::DictValue& value);

  // Creates a VerifyInitSuccessBody object from a base::Value, or nullopt on
  // failure.
  static std::optional<VerifyInitSuccessBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisVerifyInitSuccessBody object.
  base::DictValue ToValue() const;

  std::string verification_token;

};


}  // namespace endpoints
}  // namespace brave_account

#endif  // BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_VERIFY_INIT_BODIES_H__
