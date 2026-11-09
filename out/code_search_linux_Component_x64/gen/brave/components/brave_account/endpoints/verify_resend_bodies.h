// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/verify_resend_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/verify_resend_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_VERIFY_RESEND_BODIES_H__
#define BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_VERIFY_RESEND_BODIES_H__

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

struct VerifyResendRequestBody {
  VerifyResendRequestBody();
  ~VerifyResendRequestBody();
  VerifyResendRequestBody(const VerifyResendRequestBody&) = delete;
  VerifyResendRequestBody& operator=(const VerifyResendRequestBody&) = delete;
  VerifyResendRequestBody(VerifyResendRequestBody&& rhs) noexcept;
  VerifyResendRequestBody& operator=(VerifyResendRequestBody&& rhs) noexcept;

  // Populates a VerifyResendRequestBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, VerifyResendRequestBody& out);

  // Populates a VerifyResendRequestBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, VerifyResendRequestBody& out);

  // Creates a deep copy of VerifyResendRequestBody.
  VerifyResendRequestBody Clone() const;

  // Creates a VerifyResendRequestBody object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<VerifyResendRequestBody> FromValue(const base::DictValue& value);

  // Creates a VerifyResendRequestBody object from a base::Value, or nullopt on
  // failure.
  static std::optional<VerifyResendRequestBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisVerifyResendRequestBody object.
  base::DictValue ToValue() const;

  std::string locale;

};

struct VerifyResendSuccessBody {
  VerifyResendSuccessBody();
  ~VerifyResendSuccessBody();
  VerifyResendSuccessBody(const VerifyResendSuccessBody&) = delete;
  VerifyResendSuccessBody& operator=(const VerifyResendSuccessBody&) = delete;
  VerifyResendSuccessBody(VerifyResendSuccessBody&& rhs) noexcept;
  VerifyResendSuccessBody& operator=(VerifyResendSuccessBody&& rhs) noexcept;

  // Populates a VerifyResendSuccessBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, VerifyResendSuccessBody& out);

  // Populates a VerifyResendSuccessBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, VerifyResendSuccessBody& out);

  // Creates a deep copy of VerifyResendSuccessBody.
  VerifyResendSuccessBody Clone() const;

  // Creates a VerifyResendSuccessBody object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<VerifyResendSuccessBody> FromValue(const base::DictValue& value);

  // Creates a VerifyResendSuccessBody object from a base::Value, or nullopt on
  // failure.
  static std::optional<VerifyResendSuccessBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisVerifyResendSuccessBody object.
  base::DictValue ToValue() const;

};


}  // namespace endpoints
}  // namespace brave_account

#endif  // BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_VERIFY_RESEND_BODIES_H__
