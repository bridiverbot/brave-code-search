// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/verify_delete_bodies.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/verify_delete_bodies.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_VERIFY_DELETE_BODIES_H__
#define BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_VERIFY_DELETE_BODIES_H__

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

struct VerifyDeleteRequestBody {
  VerifyDeleteRequestBody();
  ~VerifyDeleteRequestBody();
  VerifyDeleteRequestBody(const VerifyDeleteRequestBody&) = delete;
  VerifyDeleteRequestBody& operator=(const VerifyDeleteRequestBody&) = delete;
  VerifyDeleteRequestBody(VerifyDeleteRequestBody&& rhs) noexcept;
  VerifyDeleteRequestBody& operator=(VerifyDeleteRequestBody&& rhs) noexcept;

  // Populates a VerifyDeleteRequestBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, VerifyDeleteRequestBody& out);

  // Populates a VerifyDeleteRequestBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, VerifyDeleteRequestBody& out);

  // Creates a deep copy of VerifyDeleteRequestBody.
  VerifyDeleteRequestBody Clone() const;

  // Creates a VerifyDeleteRequestBody object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<VerifyDeleteRequestBody> FromValue(const base::DictValue& value);

  // Creates a VerifyDeleteRequestBody object from a base::Value, or nullopt on
  // failure.
  static std::optional<VerifyDeleteRequestBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisVerifyDeleteRequestBody object.
  base::DictValue ToValue() const;

};

struct VerifyDeleteSuccessBody {
  VerifyDeleteSuccessBody();
  ~VerifyDeleteSuccessBody();
  VerifyDeleteSuccessBody(const VerifyDeleteSuccessBody&) = delete;
  VerifyDeleteSuccessBody& operator=(const VerifyDeleteSuccessBody&) = delete;
  VerifyDeleteSuccessBody(VerifyDeleteSuccessBody&& rhs) noexcept;
  VerifyDeleteSuccessBody& operator=(VerifyDeleteSuccessBody&& rhs) noexcept;

  // Populates a VerifyDeleteSuccessBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, VerifyDeleteSuccessBody& out);

  // Populates a VerifyDeleteSuccessBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, VerifyDeleteSuccessBody& out);

  // Creates a deep copy of VerifyDeleteSuccessBody.
  VerifyDeleteSuccessBody Clone() const;

  // Creates a VerifyDeleteSuccessBody object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<VerifyDeleteSuccessBody> FromValue(const base::DictValue& value);

  // Creates a VerifyDeleteSuccessBody object from a base::Value, or nullopt on
  // failure.
  static std::optional<VerifyDeleteSuccessBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisVerifyDeleteSuccessBody object.
  base::DictValue ToValue() const;

};

struct VerifyDeleteErrorBody {
  VerifyDeleteErrorBody();
  ~VerifyDeleteErrorBody();
  VerifyDeleteErrorBody(const VerifyDeleteErrorBody&) = delete;
  VerifyDeleteErrorBody& operator=(const VerifyDeleteErrorBody&) = delete;
  VerifyDeleteErrorBody(VerifyDeleteErrorBody&& rhs) noexcept;
  VerifyDeleteErrorBody& operator=(VerifyDeleteErrorBody&& rhs) noexcept;

  // Populates a VerifyDeleteErrorBody object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, VerifyDeleteErrorBody& out);

  // Populates a VerifyDeleteErrorBody object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, VerifyDeleteErrorBody& out);

  // Creates a deep copy of VerifyDeleteErrorBody.
  VerifyDeleteErrorBody Clone() const;

  // Creates a VerifyDeleteErrorBody object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<VerifyDeleteErrorBody> FromValue(const base::DictValue& value);

  // Creates a VerifyDeleteErrorBody object from a base::Value, or nullopt on
  // failure.
  static std::optional<VerifyDeleteErrorBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisVerifyDeleteErrorBody object.
  base::DictValue ToValue() const;

};


}  // namespace endpoints
}  // namespace brave_account

#endif  // BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_VERIFY_DELETE_BODIES_H__
