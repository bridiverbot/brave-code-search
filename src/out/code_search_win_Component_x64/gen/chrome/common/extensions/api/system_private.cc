// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/system_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/system_private.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#include "chrome/common/extensions/api/system_private.h"

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
namespace system_private {
//
// Types
//

const char* ToString(UpdateStatusState enum_param) {
  switch (enum_param) {
    case UpdateStatusState::kNotAvailable:
      return "NotAvailable";
    case UpdateStatusState::kUpdating:
      return "Updating";
    case UpdateStatusState::kNeedRestart:
      return "NeedRestart";
    case UpdateStatusState::kNone:
      return "";
  }
  NOTREACHED();
}

UpdateStatusState ParseUpdateStatusState(std::string_view enum_string) {
  if (enum_string == "NotAvailable")
    return UpdateStatusState::kNotAvailable;
  if (enum_string == "Updating")
    return UpdateStatusState::kUpdating;
  if (enum_string == "NeedRestart")
    return UpdateStatusState::kNeedRestart;
  return UpdateStatusState::kNone;
}

std::u16string GetUpdateStatusStateParseError(std::string_view enum_string) {
  return u"expected \"NotAvailable\" or \"Updating\" or \"NeedRestart\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(GetIncognitoModeAvailabilityValue enum_param) {
  switch (enum_param) {
    case GetIncognitoModeAvailabilityValue::kEnabled:
      return "enabled";
    case GetIncognitoModeAvailabilityValue::kDisabled:
      return "disabled";
    case GetIncognitoModeAvailabilityValue::kForced:
      return "forced";
    case GetIncognitoModeAvailabilityValue::kNone:
      return "";
  }
  NOTREACHED();
}

GetIncognitoModeAvailabilityValue ParseGetIncognitoModeAvailabilityValue(std::string_view enum_string) {
  if (enum_string == "enabled")
    return GetIncognitoModeAvailabilityValue::kEnabled;
  if (enum_string == "disabled")
    return GetIncognitoModeAvailabilityValue::kDisabled;
  if (enum_string == "forced")
    return GetIncognitoModeAvailabilityValue::kForced;
  return GetIncognitoModeAvailabilityValue::kNone;
}

std::u16string GetGetIncognitoModeAvailabilityValueParseError(std::string_view enum_string) {
  return u"expected \"enabled\" or \"disabled\" or \"forced\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


UpdateStatus::UpdateStatus()
: state(),
download_progress(0.0) {}

UpdateStatus::~UpdateStatus() = default;
UpdateStatus::UpdateStatus(UpdateStatus&& rhs) noexcept = default;
UpdateStatus& UpdateStatus::operator=(UpdateStatus&& rhs) noexcept = default;
UpdateStatus UpdateStatus::Clone() const {
  UpdateStatus out;
  out.state = state;
  out.download_progress = download_progress;
  return out;
}

// static
bool UpdateStatus::Populate(
    const base::DictValue& dict, UpdateStatus& out) {
  const base::Value* state_value = dict.Find("state");
  if (!state_value) {
    return false;
  }
  {
    const std::string* update_status_state_as_string = (*state_value).GetIfString();
    if (!update_status_state_as_string) {
      return false;
    }
    out.state = ParseUpdateStatusState(*update_status_state_as_string);
    if (out.state == UpdateStatusState()) {
      return false;
    }
  }

  const base::Value* download_progress_value = dict.Find("downloadProgress");
  if (!download_progress_value) {
    return false;
  }
  {
    auto temp = (*download_progress_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.download_progress = *temp;
  }

  return true;
}

// static
bool UpdateStatus::Populate(
    const base::Value& value, UpdateStatus& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UpdateStatus> UpdateStatus::FromValue(const base::DictValue& value) {
  UpdateStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UpdateStatus> UpdateStatus::FromValue(const base::Value& value) {
  UpdateStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue UpdateStatus::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("state", system_private::ToString(this->state));

  to_value_result.Set("downloadProgress", this->download_progress);


  return to_value_result;
}



//
// Functions
//

namespace GetIncognitoModeAvailability {

base::ListValue Results::Create(const GetIncognitoModeAvailabilityValue& value) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(system_private::ToString(value));

  return create_results;
}
}  // namespace GetIncognitoModeAvailability

namespace GetUpdateStatus {

base::ListValue Results::Create(const UpdateStatus& status) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((status).ToValue());

  return create_results;
}
}  // namespace GetUpdateStatus

namespace GetApiKey {

base::ListValue Results::Create(const std::string& key) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(key);

  return create_results;
}
}  // namespace GetApiKey

}  // namespace system_private
}  // namespace api
}  // namespace extensions

