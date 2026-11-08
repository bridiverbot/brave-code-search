// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/glic_private.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/glic_private.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#include "chrome/common/extensions/api/glic_private.h"

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
namespace glic_private {
//
// Types
//

const char* ToString(ProfileReadyState enum_param) {
  switch (enum_param) {
    case ProfileReadyState::kError:
      return "error";
    case ProfileReadyState::kSignInRequired:
      return "sign-in-required";
    case ProfileReadyState::kReady:
      return "ready";
    case ProfileReadyState::kDisabledByAdmin:
      return "disabled-by-admin";
    case ProfileReadyState::kIneligible:
      return "ineligible";
    case ProfileReadyState::kLocationMismatch:
      return "location-mismatch";
    case ProfileReadyState::kIneligibleAccount:
      return "ineligible-account";
    case ProfileReadyState::kNone:
      return "";
  }
  NOTREACHED();
}

ProfileReadyState ParseProfileReadyState(std::string_view enum_string) {
  if (enum_string == "error")
    return ProfileReadyState::kError;
  if (enum_string == "sign-in-required")
    return ProfileReadyState::kSignInRequired;
  if (enum_string == "ready")
    return ProfileReadyState::kReady;
  if (enum_string == "disabled-by-admin")
    return ProfileReadyState::kDisabledByAdmin;
  if (enum_string == "ineligible")
    return ProfileReadyState::kIneligible;
  if (enum_string == "location-mismatch")
    return ProfileReadyState::kLocationMismatch;
  if (enum_string == "ineligible-account")
    return ProfileReadyState::kIneligibleAccount;
  return ProfileReadyState::kNone;
}

std::u16string GetProfileReadyStateParseError(std::string_view enum_string) {
  return u"expected \"error\" or \"sign-in-required\" or \"ready\" or \"disabled-by-admin\" or \"ineligible\" or \"location-mismatch\" or \"ineligible-account\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ProfileState::ProfileState()
: is_enabled(false),
is_enabled_and_consented(false),
ready_state(),
live_allowed(false),
share_image_allowed(false),
actuation_allowed(false),
user_enable_actuation_on_web(false),
invocation_source_enabled(false) {}

ProfileState::~ProfileState() = default;
ProfileState::ProfileState(ProfileState&& rhs) noexcept = default;
ProfileState& ProfileState::operator=(ProfileState&& rhs) noexcept = default;
ProfileState ProfileState::Clone() const {
  ProfileState out;
  out.is_enabled = is_enabled;
  out.is_enabled_and_consented = is_enabled_and_consented;
  out.ready_state = ready_state;
  out.live_allowed = live_allowed;
  out.share_image_allowed = share_image_allowed;
  out.actuation_allowed = actuation_allowed;
  out.user_enable_actuation_on_web = user_enable_actuation_on_web;
  out.invocation_source_enabled = invocation_source_enabled;
  return out;
}

// static
bool ProfileState::Populate(
    const base::DictValue& dict, ProfileState& out) {
  const base::Value* is_enabled_value = dict.Find("isEnabled");
  if (!is_enabled_value) {
    return false;
  }
  {
    auto temp = (*is_enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_enabled = *temp;
  }

  const base::Value* is_enabled_and_consented_value = dict.Find("isEnabledAndConsented");
  if (!is_enabled_and_consented_value) {
    return false;
  }
  {
    auto temp = (*is_enabled_and_consented_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_enabled_and_consented = *temp;
  }

  const base::Value* ready_state_value = dict.Find("readyState");
  if (!ready_state_value) {
    return false;
  }
  {
    const std::string* profile_ready_state_as_string = (*ready_state_value).GetIfString();
    if (!profile_ready_state_as_string) {
      return false;
    }
    out.ready_state = ParseProfileReadyState(*profile_ready_state_as_string);
    if (out.ready_state == ProfileReadyState()) {
      return false;
    }
  }

  const base::Value* live_allowed_value = dict.Find("liveAllowed");
  if (!live_allowed_value) {
    return false;
  }
  {
    auto temp = (*live_allowed_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.live_allowed = *temp;
  }

  const base::Value* share_image_allowed_value = dict.Find("shareImageAllowed");
  if (!share_image_allowed_value) {
    return false;
  }
  {
    auto temp = (*share_image_allowed_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.share_image_allowed = *temp;
  }

  const base::Value* actuation_allowed_value = dict.Find("actuationAllowed");
  if (!actuation_allowed_value) {
    return false;
  }
  {
    auto temp = (*actuation_allowed_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.actuation_allowed = *temp;
  }

  const base::Value* user_enable_actuation_on_web_value = dict.Find("userEnableActuationOnWeb");
  if (!user_enable_actuation_on_web_value) {
    return false;
  }
  {
    auto temp = (*user_enable_actuation_on_web_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.user_enable_actuation_on_web = *temp;
  }

  const base::Value* invocation_source_enabled_value = dict.Find("invocationSourceEnabled");
  if (!invocation_source_enabled_value) {
    return false;
  }
  {
    auto temp = (*invocation_source_enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.invocation_source_enabled = *temp;
  }

  return true;
}

// static
bool ProfileState::Populate(
    const base::Value& value, ProfileState& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ProfileState> ProfileState::FromValue(const base::DictValue& value) {
  ProfileState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ProfileState> ProfileState::FromValue(const base::Value& value) {
  ProfileState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ProfileState::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("isEnabled", this->is_enabled);

  to_value_result.Set("isEnabledAndConsented", this->is_enabled_and_consented);

  to_value_result.Set("readyState", glic_private::ToString(this->ready_state));

  to_value_result.Set("liveAllowed", this->live_allowed);

  to_value_result.Set("shareImageAllowed", this->share_image_allowed);

  to_value_result.Set("actuationAllowed", this->actuation_allowed);

  to_value_result.Set("userEnableActuationOnWeb", this->user_enable_actuation_on_web);

  to_value_result.Set("invocationSourceEnabled", this->invocation_source_enabled);


  return to_value_result;
}


const char* ToString(InvocationSource enum_param) {
  switch (enum_param) {
    case InvocationSource::kUnknown:
      return "unknown";
    case InvocationSource::kUniversalCart:
      return "universal-cart";
    case InvocationSource::kPromotionPage:
      return "promotion-page";
    case InvocationSource::kWebContinuity:
      return "web-continuity";
    case InvocationSource::kNone:
      return "";
  }
  NOTREACHED();
}

InvocationSource ParseInvocationSource(std::string_view enum_string) {
  if (enum_string == "unknown")
    return InvocationSource::kUnknown;
  if (enum_string == "universal-cart")
    return InvocationSource::kUniversalCart;
  if (enum_string == "promotion-page")
    return InvocationSource::kPromotionPage;
  if (enum_string == "web-continuity")
    return InvocationSource::kWebContinuity;
  return InvocationSource::kNone;
}

std::u16string GetInvocationSourceParseError(std::string_view enum_string) {
  return u"expected \"unknown\" or \"universal-cart\" or \"promotion-page\" or \"web-continuity\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


GetStateParams::GetStateParams()
: invocation_source() {}

GetStateParams::~GetStateParams() = default;
GetStateParams::GetStateParams(GetStateParams&& rhs) noexcept = default;
GetStateParams& GetStateParams::operator=(GetStateParams&& rhs) noexcept = default;
GetStateParams GetStateParams::Clone() const {
  GetStateParams out;
  out.invocation_source = invocation_source;
  return out;
}

// static
bool GetStateParams::Populate(
    const base::DictValue& dict, GetStateParams& out) {
  out.invocation_source = InvocationSource();
  const base::Value* invocation_source_value = dict.Find("invocationSource");
  if (invocation_source_value) {
    {
      const std::string* invocation_source_as_string = (*invocation_source_value).GetIfString();
      if (!invocation_source_as_string) {
        return false;
      }
      out.invocation_source = ParseInvocationSource(*invocation_source_as_string);
      if (out.invocation_source == InvocationSource()) {
        return false;
      }
    }
    } else {
    out.invocation_source = InvocationSource();
  }

  return true;
}

// static
bool GetStateParams::Populate(
    const base::Value& value, GetStateParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetStateParams> GetStateParams::FromValue(const base::DictValue& value) {
  GetStateParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetStateParams> GetStateParams::FromValue(const base::Value& value) {
  GetStateParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue GetStateParams::ToValue() const {
  base::DictValue to_value_result;

  if (this->invocation_source != InvocationSource()) {
    to_value_result.Set("invocationSource", glic_private::ToString(this->invocation_source));

  }

  return to_value_result;
}


InvokeDetails::InvokeDetails()
: invocation_source() {}

InvokeDetails::~InvokeDetails() = default;
InvokeDetails::InvokeDetails(InvokeDetails&& rhs) noexcept = default;
InvokeDetails& InvokeDetails::operator=(InvokeDetails&& rhs) noexcept = default;
InvokeDetails InvokeDetails::Clone() const {
  InvokeDetails out;
  out.prompt_id = prompt_id;
  out.invocation_source = invocation_source;
  out.document_id = document_id;
  out.in_new_tab = in_new_tab;
  out.conversation_id = conversation_id;
  out.turn_id = turn_id;
  return out;
}

// static
bool InvokeDetails::Populate(
    const base::DictValue& dict, InvokeDetails& out) {
  const base::Value* prompt_id_value = dict.Find("promptId");
  if (prompt_id_value) {
    {
      auto* temp = (*prompt_id_value).GetIfString();
      if (!temp) {
        out.prompt_id = std::nullopt;
        return false;
      }
      out.prompt_id = *temp;
    }
  }

  const base::Value* invocation_source_value = dict.Find("invocationSource");
  if (!invocation_source_value) {
    return false;
  }
  {
    const std::string* invocation_source_as_string = (*invocation_source_value).GetIfString();
    if (!invocation_source_as_string) {
      return false;
    }
    out.invocation_source = ParseInvocationSource(*invocation_source_as_string);
    if (out.invocation_source == InvocationSource()) {
      return false;
    }
  }

  const base::Value* document_id_value = dict.Find("documentId");
  if (!document_id_value) {
    return false;
  }
  {
    auto* temp = (*document_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.document_id = *temp;
  }

  const base::Value* in_new_tab_value = dict.Find("inNewTab");
  if (in_new_tab_value) {
    {
      auto temp = (*in_new_tab_value).GetIfBool();
      if (!temp.has_value()) {
        out.in_new_tab = std::nullopt;
        return false;
      }
      out.in_new_tab = *temp;
    }
  }

  const base::Value* conversation_id_value = dict.Find("conversationId");
  if (conversation_id_value) {
    {
      auto* temp = (*conversation_id_value).GetIfString();
      if (!temp) {
        out.conversation_id = std::nullopt;
        return false;
      }
      out.conversation_id = *temp;
    }
  }

  const base::Value* turn_id_value = dict.Find("turnId");
  if (turn_id_value) {
    {
      auto* temp = (*turn_id_value).GetIfString();
      if (!temp) {
        out.turn_id = std::nullopt;
        return false;
      }
      out.turn_id = *temp;
    }
  }

  return true;
}

// static
bool InvokeDetails::Populate(
    const base::Value& value, InvokeDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<InvokeDetails> InvokeDetails::FromValue(const base::DictValue& value) {
  InvokeDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<InvokeDetails> InvokeDetails::FromValue(const base::Value& value) {
  InvokeDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue InvokeDetails::ToValue() const {
  base::DictValue to_value_result;

  if (this->prompt_id) {
    to_value_result.Set("promptId", *this->prompt_id);

  }
  to_value_result.Set("invocationSource", glic_private::ToString(this->invocation_source));

  to_value_result.Set("documentId", this->document_id);

  if (this->in_new_tab) {
    to_value_result.Set("inNewTab", *this->in_new_tab);

  }
  if (this->conversation_id) {
    to_value_result.Set("conversationId", *this->conversation_id);

  }
  if (this->turn_id) {
    to_value_result.Set("turnId", *this->turn_id);

  }

  return to_value_result;
}


const char* ToString(ErrorCode enum_param) {
  switch (enum_param) {
    case ErrorCode::kLocalInvalidInvocationSource:
      return "local-invalid-invocation-source";
    case ErrorCode::kLocalMissingPromptId:
      return "local-missing-prompt-id";
    case ErrorCode::kServerMissingPrompt:
      return "server-missing-prompt";
    case ErrorCode::kHttpError:
      return "http-error";
    case ErrorCode::kParseError:
      return "parse-error";
    case ErrorCode::kLocalNoActiveTab:
      return "local-no-active-tab";
    case ErrorCode::kLocalGlicNotEnabled:
      return "local-glic-not-enabled";
    case ErrorCode::kLocalGlicNotReady:
      return "local-glic-not-ready";
    case ErrorCode::kLocalGlicActuationNotAllowed:
      return "local-glic-actuation-not-allowed";
    case ErrorCode::kLocalGlicNotEnabledAndConsented:
      return "local-glic-not-enabled-and-consented";
    case ErrorCode::kLocalAccountMismatch:
      return "local-account-mismatch";
    case ErrorCode::kLocalInvalidDocumentId:
      return "local-invalid-document-id";
    case ErrorCode::kLocalConversationNotFound:
      return "local-conversation-not-found";
    case ErrorCode::kLocalNoBoundTabs:
      return "local-no-bound-tabs";
    case ErrorCode::kLocalTabNotInWindow:
      return "local-tab-not-in-window";
    case ErrorCode::kLocalGlicAccessFromPageDisabled:
      return "local-glic-access-from-page-disabled";
    case ErrorCode::kNone:
      return "";
  }
  NOTREACHED();
}

ErrorCode ParseErrorCode(std::string_view enum_string) {
  if (enum_string == "local-invalid-invocation-source")
    return ErrorCode::kLocalInvalidInvocationSource;
  if (enum_string == "local-missing-prompt-id")
    return ErrorCode::kLocalMissingPromptId;
  if (enum_string == "server-missing-prompt")
    return ErrorCode::kServerMissingPrompt;
  if (enum_string == "http-error")
    return ErrorCode::kHttpError;
  if (enum_string == "parse-error")
    return ErrorCode::kParseError;
  if (enum_string == "local-no-active-tab")
    return ErrorCode::kLocalNoActiveTab;
  if (enum_string == "local-glic-not-enabled")
    return ErrorCode::kLocalGlicNotEnabled;
  if (enum_string == "local-glic-not-ready")
    return ErrorCode::kLocalGlicNotReady;
  if (enum_string == "local-glic-actuation-not-allowed")
    return ErrorCode::kLocalGlicActuationNotAllowed;
  if (enum_string == "local-glic-not-enabled-and-consented")
    return ErrorCode::kLocalGlicNotEnabledAndConsented;
  if (enum_string == "local-account-mismatch")
    return ErrorCode::kLocalAccountMismatch;
  if (enum_string == "local-invalid-document-id")
    return ErrorCode::kLocalInvalidDocumentId;
  if (enum_string == "local-conversation-not-found")
    return ErrorCode::kLocalConversationNotFound;
  if (enum_string == "local-no-bound-tabs")
    return ErrorCode::kLocalNoBoundTabs;
  if (enum_string == "local-tab-not-in-window")
    return ErrorCode::kLocalTabNotInWindow;
  if (enum_string == "local-glic-access-from-page-disabled")
    return ErrorCode::kLocalGlicAccessFromPageDisabled;
  return ErrorCode::kNone;
}

std::u16string GetErrorCodeParseError(std::string_view enum_string) {
  return u"expected \"local-invalid-invocation-source\" or \"local-missing-prompt-id\" or \"server-missing-prompt\" or \"http-error\" or \"parse-error\" or \"local-no-active-tab\" or \"local-glic-not-enabled\" or \"local-glic-not-ready\" or \"local-glic-actuation-not-allowed\" or \"local-glic-not-enabled-and-consented\" or \"local-account-mismatch\" or \"local-invalid-document-id\" or \"local-conversation-not-found\" or \"local-no-bound-tabs\" or \"local-tab-not-in-window\" or \"local-glic-access-from-page-disabled\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace GetState {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& document_id_value = args[0];
    {
      auto* temp = document_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.document_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& params_value = args[1];
    {
      if (!params_value.is_dict()) {
        return std::nullopt;
      }
      else {
        GetStateParams temp;
        if (!GetStateParams::Populate(params_value.GetDict(), temp))
          return std::nullopt;
        params.params = std::move(temp);
      }
    }
  }

  return params;
}


base::ListValue Results::Create(const ProfileState& state) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((state).ToValue());

  return create_results;
}
}  // namespace GetState

namespace Invoke {

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
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!InvokeDetails::Populate(details_value.GetDict(), params.details)) {
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
}  // namespace Invoke

namespace HasConversation {

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
    const base::Value& conversation_id_value = args[0];
    {
      auto* temp = conversation_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.conversation_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(bool is_present) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(is_present);

  return create_results;
}
}  // namespace HasConversation

namespace ActivateTabWithConversation {

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
    const base::Value& conversation_id_value = args[0];
    {
      auto* temp = conversation_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.conversation_id = *temp;
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
}  // namespace ActivateTabWithConversation

}  // namespace glic_private
}  // namespace api
}  // namespace extensions

