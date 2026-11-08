// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_account/endpoints/error_body.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_account/endpoints/error_body.idl --root=../../ --destdir=gen --namespace=brave_account::%(namespace)s --generator=cpp --include-rules=

#ifndef BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_ERROR_BODY_H__
#define BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_ERROR_BODY_H__

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

struct ErrorBody {
  ErrorBody();
  ~ErrorBody();
  ErrorBody(const ErrorBody&) = delete;
  ErrorBody& operator=(const ErrorBody&) = delete;
  ErrorBody(ErrorBody&& rhs) noexcept;
  ErrorBody& operator=(ErrorBody&& rhs) noexcept;

  // Populates a ErrorBody object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, ErrorBody& out);

  // Populates a ErrorBody object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, ErrorBody& out);

  // Creates a deep copy of ErrorBody.
  ErrorBody Clone() const;

  // Creates a ErrorBody object from a base::DictValue, or nullopt on failure.
  static std::optional<ErrorBody> FromValue(const base::DictValue& value);

  // Creates a ErrorBody object from a base::Value, or nullopt on failure.
  static std::optional<ErrorBody> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisErrorBody object.
  base::DictValue ToValue() const;

  // either long, or null, but must always be present
  base::Value code;

};


}  // namespace endpoints
}  // namespace brave_account

#endif  // BRAVE_COMPONENTS_BRAVE_ACCOUNT_ENDPOINTS_ERROR_BODY_H__
