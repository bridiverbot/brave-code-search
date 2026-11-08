// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/psst/core/common/psst_metadata_schema.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/psst/core/common/psst_metadata_schema.idl --root=../../ --destdir=gen --namespace=psst --generator=cpp --include-rules=

#include "brave/components/psst/core/common/psst_metadata_schema.h"

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

namespace psst {
//
// Types
//

const char* ToString(ConsentStatus enum_param) {
  switch (enum_param) {
    case ConsentStatus::kAsk:
      return "kAsk";
    case ConsentStatus::kAllow:
      return "kAllow";
    case ConsentStatus::kBlock:
      return "kBlock";
    case ConsentStatus::kNone:
      return "";
  }
  NOTREACHED();
}

ConsentStatus ParseConsentStatus(std::string_view enum_string) {
  if (enum_string == "kAsk")
    return ConsentStatus::kAsk;
  if (enum_string == "kAllow")
    return ConsentStatus::kAllow;
  if (enum_string == "kBlock")
    return ConsentStatus::kBlock;
  return ConsentStatus::kNone;
}

std::u16string GetConsentStatusParseError(std::string_view enum_string) {
  return u"expected \"kAsk\" or \"kAllow\" or \"kBlock\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


PsstWebsiteSettings::PsstWebsiteSettings()
: consent_status(),
script_version(0) {}

PsstWebsiteSettings::~PsstWebsiteSettings() = default;
PsstWebsiteSettings::PsstWebsiteSettings(PsstWebsiteSettings&& rhs) noexcept = default;
PsstWebsiteSettings& PsstWebsiteSettings::operator=(PsstWebsiteSettings&& rhs) noexcept = default;
PsstWebsiteSettings PsstWebsiteSettings::Clone() const {
  PsstWebsiteSettings out;
  out.consent_status = consent_status;
  out.script_version = script_version;
  out.user_id = user_id;
  out.uids_to_perform = uids_to_perform;
  return out;
}

// static
bool PsstWebsiteSettings::Populate(
    const base::DictValue& dict, PsstWebsiteSettings& out) {
  const base::Value* consent_status_value = dict.Find("consent_status");
  if (!consent_status_value) {
    return false;
  }
  {
    const std::string* consent_status_as_string = (*consent_status_value).GetIfString();
    if (!consent_status_as_string) {
      return false;
    }
    out.consent_status = ParseConsentStatus(*consent_status_as_string);
    if (out.consent_status == ConsentStatus()) {
      return false;
    }
  }

  const base::Value* script_version_value = dict.Find("script_version");
  if (!script_version_value) {
    return false;
  }
  {
    auto temp = (*script_version_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.script_version = *temp;
  }

  const base::Value* user_id_value = dict.Find("user_id");
  if (!user_id_value) {
    return false;
  }
  {
    auto* temp = (*user_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.user_id = *temp;
  }

  const base::Value* uids_to_perform_value = dict.Find("uids_to_perform");
  if (!uids_to_perform_value) {
    return false;
  }
  {
    if (!(*uids_to_perform_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*uids_to_perform_value).GetList(), out.uids_to_perform)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool PsstWebsiteSettings::Populate(
    const base::Value& value, PsstWebsiteSettings& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PsstWebsiteSettings> PsstWebsiteSettings::FromValue(const base::DictValue& value) {
  PsstWebsiteSettings out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PsstWebsiteSettings> PsstWebsiteSettings::FromValue(const base::Value& value) {
  PsstWebsiteSettings out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue PsstWebsiteSettings::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("consent_status", psst::ToString(this->consent_status));

  to_value_result.Set("script_version", this->script_version);

  to_value_result.Set("user_id", this->user_id);

  to_value_result.Set("uids_to_perform", json_schema_compiler::util::CreateValueFromArray(this->uids_to_perform));


  return to_value_result;
}



}  // namespace psst

