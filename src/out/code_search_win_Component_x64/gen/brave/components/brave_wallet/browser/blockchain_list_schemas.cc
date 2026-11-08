// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/brave_wallet/browser/blockchain_list_schemas.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/brave_wallet/browser/blockchain_list_schemas.idl --root=../../ --destdir=gen --namespace=brave_wallet::%(namespace)s --generator=cpp --include-rules=

#include "brave/components/brave_wallet/browser/blockchain_list_schemas.h"

#include <memory>
#include <optional>
#include <ostream>
#include <string>
#include <string_view>
#include <utility>
#include <vector>

#include "base/check.h"
#include "base/check_op.h"
#include "base/notreached.h"
#include "base/strings/string_number_conversions.h"
#include "base/strings/utf_string_conversions.h"
#include "base/values.h"
#include "tools/json_schema_compiler/util.h"

using base::UTF8ToUTF16;

namespace brave_wallet {
namespace blockchain_lists {
//
// Types
//

RestrictedAddressesList::RestrictedAddressesList()
 {}

RestrictedAddressesList::~RestrictedAddressesList() = default;
RestrictedAddressesList::RestrictedAddressesList(RestrictedAddressesList&& rhs) noexcept = default;
RestrictedAddressesList& RestrictedAddressesList::operator=(RestrictedAddressesList&& rhs) noexcept = default;
RestrictedAddressesList RestrictedAddressesList::Clone() const {
  RestrictedAddressesList out;
  out.addresses = addresses;
  return out;
}

// static
bool RestrictedAddressesList::Populate(
    const base::DictValue& dict, RestrictedAddressesList& out) {
  const base::Value* addresses_value = dict.Find("addresses");
  if (!addresses_value) {
    return false;
  }
  {
    if (!(*addresses_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*addresses_value).GetList(), out.addresses)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool RestrictedAddressesList::Populate(
    const base::Value& value, RestrictedAddressesList& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RestrictedAddressesList> RestrictedAddressesList::FromValue(const base::DictValue& value) {
  RestrictedAddressesList out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RestrictedAddressesList> RestrictedAddressesList::FromValue(const base::Value& value) {
  RestrictedAddressesList out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue RestrictedAddressesList::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("addresses", json_schema_compiler::util::CreateValueFromArray(this->addresses));


  return to_value_result;
}



}  // namespace blockchain_lists
}  // namespace brave_wallet

