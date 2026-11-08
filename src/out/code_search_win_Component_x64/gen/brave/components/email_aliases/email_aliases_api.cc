// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   brave/components/email_aliases/email_aliases_api.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../brave/components/email_aliases/email_aliases_api.idl --root=../../ --destdir=gen --namespace=email_aliases --generator=cpp --include-rules=

#include "brave/components/email_aliases/email_aliases_api.h"

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

namespace email_aliases {
//
// Types
//

GenerateAliasRequest::GenerateAliasRequest()
 {}

GenerateAliasRequest::~GenerateAliasRequest() = default;
GenerateAliasRequest::GenerateAliasRequest(GenerateAliasRequest&& rhs) noexcept = default;
GenerateAliasRequest& GenerateAliasRequest::operator=(GenerateAliasRequest&& rhs) noexcept = default;
GenerateAliasRequest GenerateAliasRequest::Clone() const {
  GenerateAliasRequest out;
  return out;
}

// static
bool GenerateAliasRequest::Populate(
    const base::DictValue& dict, GenerateAliasRequest& out) {
  return true;
}

// static
bool GenerateAliasRequest::Populate(
    const base::Value& value, GenerateAliasRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GenerateAliasRequest> GenerateAliasRequest::FromValue(const base::DictValue& value) {
  GenerateAliasRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GenerateAliasRequest> GenerateAliasRequest::FromValue(const base::Value& value) {
  GenerateAliasRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue GenerateAliasRequest::ToValue() const {
  base::DictValue to_value_result;


  return to_value_result;
}


GenerateAliasResponse::GenerateAliasResponse()
 {}

GenerateAliasResponse::~GenerateAliasResponse() = default;
GenerateAliasResponse::GenerateAliasResponse(GenerateAliasResponse&& rhs) noexcept = default;
GenerateAliasResponse& GenerateAliasResponse::operator=(GenerateAliasResponse&& rhs) noexcept = default;
GenerateAliasResponse GenerateAliasResponse::Clone() const {
  GenerateAliasResponse out;
  out.message = message;
  out.alias = alias;
  return out;
}

// static
bool GenerateAliasResponse::Populate(
    const base::DictValue& dict, GenerateAliasResponse& out) {
  const base::Value* message_value = dict.Find("message");
  if (!message_value) {
    return false;
  }
  {
    auto* temp = (*message_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.message = *temp;
  }

  const base::Value* alias_value = dict.Find("alias");
  if (!alias_value) {
    return false;
  }
  {
    auto* temp = (*alias_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.alias = *temp;
  }

  return true;
}

// static
bool GenerateAliasResponse::Populate(
    const base::Value& value, GenerateAliasResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GenerateAliasResponse> GenerateAliasResponse::FromValue(const base::DictValue& value) {
  GenerateAliasResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GenerateAliasResponse> GenerateAliasResponse::FromValue(const base::Value& value) {
  GenerateAliasResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue GenerateAliasResponse::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("message", this->message);

  to_value_result.Set("alias", this->alias);


  return to_value_result;
}


UpdateAliasRequest::UpdateAliasRequest()
 {}

UpdateAliasRequest::~UpdateAliasRequest() = default;
UpdateAliasRequest::UpdateAliasRequest(UpdateAliasRequest&& rhs) noexcept = default;
UpdateAliasRequest& UpdateAliasRequest::operator=(UpdateAliasRequest&& rhs) noexcept = default;
UpdateAliasRequest UpdateAliasRequest::Clone() const {
  UpdateAliasRequest out;
  out.alias = alias;
  out.status = status;
  return out;
}

// static
bool UpdateAliasRequest::Populate(
    const base::DictValue& dict, UpdateAliasRequest& out) {
  const base::Value* alias_value = dict.Find("alias");
  if (!alias_value) {
    return false;
  }
  {
    auto* temp = (*alias_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.alias = *temp;
  }

  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    auto* temp = (*status_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.status = *temp;
  }

  return true;
}

// static
bool UpdateAliasRequest::Populate(
    const base::Value& value, UpdateAliasRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UpdateAliasRequest> UpdateAliasRequest::FromValue(const base::DictValue& value) {
  UpdateAliasRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UpdateAliasRequest> UpdateAliasRequest::FromValue(const base::Value& value) {
  UpdateAliasRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue UpdateAliasRequest::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("alias", this->alias);

  to_value_result.Set("status", this->status);


  return to_value_result;
}


DeleteAliasRequest::DeleteAliasRequest()
 {}

DeleteAliasRequest::~DeleteAliasRequest() = default;
DeleteAliasRequest::DeleteAliasRequest(DeleteAliasRequest&& rhs) noexcept = default;
DeleteAliasRequest& DeleteAliasRequest::operator=(DeleteAliasRequest&& rhs) noexcept = default;
DeleteAliasRequest DeleteAliasRequest::Clone() const {
  DeleteAliasRequest out;
  out.alias = alias;
  return out;
}

// static
bool DeleteAliasRequest::Populate(
    const base::DictValue& dict, DeleteAliasRequest& out) {
  const base::Value* alias_value = dict.Find("alias");
  if (!alias_value) {
    return false;
  }
  {
    auto* temp = (*alias_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.alias = *temp;
  }

  return true;
}

// static
bool DeleteAliasRequest::Populate(
    const base::Value& value, DeleteAliasRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DeleteAliasRequest> DeleteAliasRequest::FromValue(const base::DictValue& value) {
  DeleteAliasRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DeleteAliasRequest> DeleteAliasRequest::FromValue(const base::Value& value) {
  DeleteAliasRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue DeleteAliasRequest::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("alias", this->alias);


  return to_value_result;
}


AliasEditedResponse::AliasEditedResponse()
 {}

AliasEditedResponse::~AliasEditedResponse() = default;
AliasEditedResponse::AliasEditedResponse(AliasEditedResponse&& rhs) noexcept = default;
AliasEditedResponse& AliasEditedResponse::operator=(AliasEditedResponse&& rhs) noexcept = default;
AliasEditedResponse AliasEditedResponse::Clone() const {
  AliasEditedResponse out;
  out.message = message;
  return out;
}

// static
bool AliasEditedResponse::Populate(
    const base::DictValue& dict, AliasEditedResponse& out) {
  const base::Value* message_value = dict.Find("message");
  if (!message_value) {
    return false;
  }
  {
    auto* temp = (*message_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.message = *temp;
  }

  return true;
}

// static
bool AliasEditedResponse::Populate(
    const base::Value& value, AliasEditedResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AliasEditedResponse> AliasEditedResponse::FromValue(const base::DictValue& value) {
  AliasEditedResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AliasEditedResponse> AliasEditedResponse::FromValue(const base::Value& value) {
  AliasEditedResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AliasEditedResponse::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("message", this->message);


  return to_value_result;
}


AliasListEntry::AliasListEntry()
 {}

AliasListEntry::~AliasListEntry() = default;
AliasListEntry::AliasListEntry(AliasListEntry&& rhs) noexcept = default;
AliasListEntry& AliasListEntry::operator=(AliasListEntry&& rhs) noexcept = default;
AliasListEntry AliasListEntry::Clone() const {
  AliasListEntry out;
  out.email = email;
  out.alias = alias;
  out.created_at = created_at;
  out.last_used = last_used;
  out.status = status;
  return out;
}

// static
bool AliasListEntry::Populate(
    const base::DictValue& dict, AliasListEntry& out) {
  const base::Value* email_value = dict.Find("email");
  if (!email_value) {
    return false;
  }
  {
    auto* temp = (*email_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.email = *temp;
  }

  const base::Value* alias_value = dict.Find("alias");
  if (!alias_value) {
    return false;
  }
  {
    auto* temp = (*alias_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.alias = *temp;
  }

  const base::Value* created_at_value = dict.Find("created_at");
  if (!created_at_value) {
    return false;
  }
  {
    auto* temp = (*created_at_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.created_at = *temp;
  }

  const base::Value* last_used_value = dict.Find("last_used");
  if (!last_used_value) {
    return false;
  }
  {
    auto* temp = (*last_used_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.last_used = *temp;
  }

  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    auto* temp = (*status_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.status = *temp;
  }

  return true;
}

// static
bool AliasListEntry::Populate(
    const base::Value& value, AliasListEntry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AliasListEntry> AliasListEntry::FromValue(const base::DictValue& value) {
  AliasListEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AliasListEntry> AliasListEntry::FromValue(const base::Value& value) {
  AliasListEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AliasListEntry::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("email", this->email);

  to_value_result.Set("alias", this->alias);

  to_value_result.Set("created_at", this->created_at);

  to_value_result.Set("last_used", this->last_used);

  to_value_result.Set("status", this->status);


  return to_value_result;
}


AliasListRequest::AliasListRequest()
 {}

AliasListRequest::~AliasListRequest() = default;
AliasListRequest::AliasListRequest(AliasListRequest&& rhs) noexcept = default;
AliasListRequest& AliasListRequest::operator=(AliasListRequest&& rhs) noexcept = default;
AliasListRequest AliasListRequest::Clone() const {
  AliasListRequest out;
  return out;
}

// static
bool AliasListRequest::Populate(
    const base::DictValue& dict, AliasListRequest& out) {
  return true;
}

// static
bool AliasListRequest::Populate(
    const base::Value& value, AliasListRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AliasListRequest> AliasListRequest::FromValue(const base::DictValue& value) {
  AliasListRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AliasListRequest> AliasListRequest::FromValue(const base::Value& value) {
  AliasListRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AliasListRequest::ToValue() const {
  base::DictValue to_value_result;


  return to_value_result;
}


AliasesAccountInfo::AliasesAccountInfo()
: max_aliases_count(0) {}

AliasesAccountInfo::~AliasesAccountInfo() = default;
AliasesAccountInfo::AliasesAccountInfo(AliasesAccountInfo&& rhs) noexcept = default;
AliasesAccountInfo& AliasesAccountInfo::operator=(AliasesAccountInfo&& rhs) noexcept = default;
AliasesAccountInfo AliasesAccountInfo::Clone() const {
  AliasesAccountInfo out;
  out.max_aliases_count = max_aliases_count;
  return out;
}

// static
bool AliasesAccountInfo::Populate(
    const base::DictValue& dict, AliasesAccountInfo& out) {
  const base::Value* max_aliases_count_value = dict.Find("max_aliases_count");
  if (!max_aliases_count_value) {
    return false;
  }
  {
    auto temp = (*max_aliases_count_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.max_aliases_count = *temp;
  }

  return true;
}

// static
bool AliasesAccountInfo::Populate(
    const base::Value& value, AliasesAccountInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AliasesAccountInfo> AliasesAccountInfo::FromValue(const base::DictValue& value) {
  AliasesAccountInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AliasesAccountInfo> AliasesAccountInfo::FromValue(const base::Value& value) {
  AliasesAccountInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AliasesAccountInfo::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("max_aliases_count", this->max_aliases_count);


  return to_value_result;
}


AliasListResponse::AliasListResponse()
 {}

AliasListResponse::~AliasListResponse() = default;
AliasListResponse::AliasListResponse(AliasListResponse&& rhs) noexcept = default;
AliasListResponse& AliasListResponse::operator=(AliasListResponse&& rhs) noexcept = default;
AliasListResponse AliasListResponse::Clone() const {
  AliasListResponse out;
  out.info = info.Clone();
  out.result.reserve(result.size());
  for (const auto& element : result) {
    json_schema_compiler::util::AppendToContainer(out.result, element.Clone());
  }
  return out;
}

// static
bool AliasListResponse::Populate(
    const base::DictValue& dict, AliasListResponse& out) {
  const base::Value* info_value = dict.Find("info");
  if (!info_value) {
    return false;
  }
  {
    if (!(*info_value).is_dict()) {
      return false;
    }
    if (!AliasesAccountInfo::Populate((*info_value).GetDict(), out.info)) {
      return false;
    }
  }

  const base::Value* result_value = dict.Find("result");
  if (!result_value) {
    return false;
  }
  {
    if (!(*result_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*result_value).GetList(), out.result)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool AliasListResponse::Populate(
    const base::Value& value, AliasListResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AliasListResponse> AliasListResponse::FromValue(const base::DictValue& value) {
  AliasListResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AliasListResponse> AliasListResponse::FromValue(const base::Value& value) {
  AliasListResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AliasListResponse::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("info", (this->info).ToValue());

  to_value_result.Set("result", json_schema_compiler::util::CreateValueFromArray(this->result));


  return to_value_result;
}


ErrorMessage::ErrorMessage()
 {}

ErrorMessage::~ErrorMessage() = default;
ErrorMessage::ErrorMessage(ErrorMessage&& rhs) noexcept = default;
ErrorMessage& ErrorMessage::operator=(ErrorMessage&& rhs) noexcept = default;
ErrorMessage ErrorMessage::Clone() const {
  ErrorMessage out;
  out.message = message;
  return out;
}

// static
bool ErrorMessage::Populate(
    const base::DictValue& dict, ErrorMessage& out) {
  const base::Value* message_value = dict.Find("message");
  if (!message_value) {
    return false;
  }
  {
    auto* temp = (*message_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.message = *temp;
  }

  return true;
}

// static
bool ErrorMessage::Populate(
    const base::Value& value, ErrorMessage& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ErrorMessage> ErrorMessage::FromValue(const base::DictValue& value) {
  ErrorMessage out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ErrorMessage> ErrorMessage::FromValue(const base::Value& value) {
  ErrorMessage out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ErrorMessage::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("message", this->message);


  return to_value_result;
}



}  // namespace email_aliases

