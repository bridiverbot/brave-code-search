// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/storage.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/storage.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#include "extensions/common/api/storage.h"

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
#include <string_view>


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace storage {
//
// Properties
//

namespace sync {
  const int QUOTA_BYTES = 102400;
  const int QUOTA_BYTES_PER_ITEM = 8192;
  const int MAX_ITEMS = 512;
  const int MAX_WRITE_OPERATIONS_PER_HOUR = 1800;
  const int MAX_WRITE_OPERATIONS_PER_MINUTE = 120;
  const int MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE = 1000000;
}  // namespace sync

namespace local {
  const int QUOTA_BYTES = 10485760;
}  // namespace local

namespace session {
  const int QUOTA_BYTES = 10485760;
}  // namespace session

//
// Types
//

const char* ToString(AccessLevel enum_param) {
  switch (enum_param) {
    case AccessLevel::kTrustedContexts:
      return "TRUSTED_CONTEXTS";
    case AccessLevel::kTrustedAndUntrustedContexts:
      return "TRUSTED_AND_UNTRUSTED_CONTEXTS";
    case AccessLevel::kNone:
      return "";
  }
  NOTREACHED();
}

AccessLevel ParseAccessLevel(std::string_view enum_string) {
  if (enum_string == "TRUSTED_CONTEXTS")
    return AccessLevel::kTrustedContexts;
  if (enum_string == "TRUSTED_AND_UNTRUSTED_CONTEXTS")
    return AccessLevel::kTrustedAndUntrustedContexts;
  return AccessLevel::kNone;
}

std::u16string GetAccessLevelParseError(std::string_view enum_string) {
  return u"expected \"TRUSTED_CONTEXTS\" or \"TRUSTED_AND_UNTRUSTED_CONTEXTS\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


StorageChange::StorageChange()
 {}

StorageChange::~StorageChange() = default;
StorageChange::StorageChange(StorageChange&& rhs) noexcept = default;
StorageChange& StorageChange::operator=(StorageChange&& rhs) noexcept = default;
StorageChange StorageChange::Clone() const {
  StorageChange out;
  if (old_value) {
    out.old_value = old_value->Clone();
  }
  if (new_value) {
    out.new_value = new_value->Clone();
  }
  return out;
}

// static
bool StorageChange::Populate(
    const base::DictValue& dict, StorageChange& out) {
  const base::Value* old_value_value = dict.Find("oldValue");
  if (old_value_value) {
    {
      out.old_value = (*old_value_value).Clone();
    }
  }

  const base::Value* new_value_value = dict.Find("newValue");
  if (new_value_value) {
    {
      out.new_value = (*new_value_value).Clone();
    }
  }

  return true;
}

// static
bool StorageChange::Populate(
    const base::Value& value, StorageChange& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<StorageChange> StorageChange::FromValue(const base::DictValue& value) {
  StorageChange out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StorageChange> StorageChange::FromValue(const base::Value& value) {
  StorageChange out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue StorageChange::ToValue() const {
  base::DictValue to_value_result;

  if (this->old_value) {
    to_value_result.Set("oldValue", (this->old_value)->Clone());

  }
  if (this->new_value) {
    to_value_result.Set("newValue", (this->new_value)->Clone());

  }

  return to_value_result;
}


namespace StorageArea {

namespace Get {

Params::Keys::Object::Object()
 {}

Params::Keys::Object::~Object() = default;
Params::Keys::Object::Object(Object&& rhs) noexcept = default;
Params::Keys::Object& Params::Keys::Object::operator=(Object&& rhs) noexcept = default;
Params::Keys::Object Params::Keys::Object::Clone() const {
  Object out;
  out.additional_properties = additional_properties.Clone();
  return out;
}

// static
bool Params::Keys::Object::Populate(
    const base::DictValue& dict, Object& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::Keys::Object::Populate(
    const base::Value& value, Object& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Keys::Object> Params::Keys::Object::FromValue(const base::DictValue& value) {
  Object out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Keys::Object> Params::Keys::Object::FromValue(const base::Value& value) {
  Object out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}



Params::Keys::Keys()
 {}

Params::Keys::~Keys() = default;
Params::Keys::Keys(Keys&& rhs) noexcept = default;
Params::Keys& Params::Keys::operator=(Keys&& rhs) noexcept = default;
Params::Keys Params::Keys::Clone() const {
  Keys out;
  out.as_string = as_string;
  out.as_strings = as_strings;
  if (as_object) {
    out.as_object = as_object->Clone();
  }
  return out;
}

// static
bool Params::Keys::Populate(
    const base::Value& value, Keys& out) {
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = std::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_strings)) {
          return false;
        }
      }
    }
    return true;
  }
  if (value.type() == base::Value::Type::DICT) {
    {
      if (!value.is_dict()) {
        return false;
      }
      else {
        Object temp;
        if (!Object::Populate(value.GetDict(), temp))
          return false;
        out.as_object = std::move(temp);
      }
    }
    return true;
  }
  return false;
}

// static
std::optional<Params::Keys> Params::Keys::FromValue(const base::Value& value) {
  Keys out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& keys_value = args[0];
    {
      Keys temp;
      if (!Keys::Populate(keys_value, temp))
        return std::nullopt;
      params.keys = std::move(temp);
    }
  }

  return params;
}


Results::Items::Items()
 {}

Results::Items::~Items() = default;
Results::Items::Items(Items&& rhs) noexcept = default;
Results::Items& Results::Items::operator=(Items&& rhs) noexcept = default;
base::DictValue Results::Items::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::ListValue Results::Create(const Items& items) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((items).ToValue());

  return create_results;
}
}  // namespace Get

namespace GetKeys {

base::ListValue Results::Create(const std::vector<std::string>& keys) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(keys));

  return create_results;
}
}  // namespace GetKeys

namespace GetBytesInUse {

Params::Keys::Keys()
 {}

Params::Keys::~Keys() = default;
Params::Keys::Keys(Keys&& rhs) noexcept = default;
Params::Keys& Params::Keys::operator=(Keys&& rhs) noexcept = default;
Params::Keys Params::Keys::Clone() const {
  Keys out;
  out.as_string = as_string;
  out.as_strings = as_strings;
  return out;
}

// static
bool Params::Keys::Populate(
    const base::Value& value, Keys& out) {
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = std::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_strings)) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

// static
std::optional<Params::Keys> Params::Keys::FromValue(const base::Value& value) {
  Keys out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& keys_value = args[0];
    {
      Keys temp;
      if (!Keys::Populate(keys_value, temp))
        return std::nullopt;
      params.keys = std::move(temp);
    }
  }

  return params;
}


base::ListValue Results::Create(double bytes_in_use) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(bytes_in_use);

  return create_results;
}
}  // namespace GetBytesInUse

namespace Set {

Params::Items::Items()
 {}

Params::Items::~Items() = default;
Params::Items::Items(Items&& rhs) noexcept = default;
Params::Items& Params::Items::operator=(Items&& rhs) noexcept = default;
Params::Items Params::Items::Clone() const {
  Items out;
  out.additional_properties = additional_properties.Clone();
  return out;
}

// static
bool Params::Items::Populate(
    const base::DictValue& dict, Items& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::Items::Populate(
    const base::Value& value, Items& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Items> Params::Items::FromValue(const base::DictValue& value) {
  Items out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Items> Params::Items::FromValue(const base::Value& value) {
  Items out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& items_value = args[0];
    {
      if (!items_value.is_dict()) {
        return std::nullopt;
      }
      if (!Items::Populate(items_value.GetDict(), params.items)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace Set

namespace Remove {

Params::Keys::Keys()
 {}

Params::Keys::~Keys() = default;
Params::Keys::Keys(Keys&& rhs) noexcept = default;
Params::Keys& Params::Keys::operator=(Keys&& rhs) noexcept = default;
Params::Keys Params::Keys::Clone() const {
  Keys out;
  out.as_string = as_string;
  out.as_strings = as_strings;
  return out;
}

// static
bool Params::Keys::Populate(
    const base::Value& value, Keys& out) {
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = std::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_strings)) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

// static
std::optional<Params::Keys> Params::Keys::FromValue(const base::Value& value) {
  Keys out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& keys_value = args[0];
    {
      if (!Keys::Populate(keys_value, params.keys))
        return std::nullopt;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace Remove

namespace Clear {

base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace Clear

namespace SetAccessLevel {

Params::AccessOptions::AccessOptions()
: access_level() {}

Params::AccessOptions::~AccessOptions() = default;
Params::AccessOptions::AccessOptions(AccessOptions&& rhs) noexcept = default;
Params::AccessOptions& Params::AccessOptions::operator=(AccessOptions&& rhs) noexcept = default;
Params::AccessOptions Params::AccessOptions::Clone() const {
  AccessOptions out;
  out.access_level = access_level;
  return out;
}

// static
bool Params::AccessOptions::Populate(
    const base::DictValue& dict, AccessOptions& out) {
  const base::Value* access_level_value = dict.Find("accessLevel");
  if (!access_level_value) {
    return false;
  }
  {
    const std::string* access_level_as_string = (*access_level_value).GetIfString();
    if (!access_level_as_string) {
      return false;
    }
    out.access_level = ParseAccessLevel(*access_level_as_string);
    if (out.access_level == AccessLevel()) {
      return false;
    }
  }

  return true;
}

// static
bool Params::AccessOptions::Populate(
    const base::Value& value, AccessOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::AccessOptions> Params::AccessOptions::FromValue(const base::DictValue& value) {
  AccessOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::AccessOptions> Params::AccessOptions::FromValue(const base::Value& value) {
  AccessOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& access_options_value = args[0];
    {
      if (!access_options_value.is_dict()) {
        return std::nullopt;
      }
      if (!AccessOptions::Populate(access_options_value.GetDict(), params.access_options)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace SetAccessLevel

}  // namespace StorageArea


//
// Events
//

namespace OnChanged {

const char kEventName[] = "storage.onChanged";

Changes::Changes()
 {}

Changes::~Changes() = default;
Changes::Changes(Changes&& rhs) noexcept = default;
Changes& Changes::operator=(Changes&& rhs) noexcept = default;
base::DictValue Changes::ToValue() const {
  base::DictValue to_value_result;

  for (const auto& it : additional_properties) {
    to_value_result.Set(it.first, (it.second).ToValue());

  }

  return to_value_result;
}


base::ListValue Create(const Changes& changes, const std::string& area_name) {
  base::ListValue create_results;
  create_results.reserve(2);
  create_results.Append((changes).ToValue());

  create_results.Append(area_name);

  return create_results;
}

}  // namespace OnChanged

}  // namespace storage
}  // namespace api
}  // namespace extensions

