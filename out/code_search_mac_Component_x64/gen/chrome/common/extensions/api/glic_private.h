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

#ifndef CHROME_COMMON_EXTENSIONS_API_GLIC_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_GLIC_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include <string_view>


namespace extensions {
namespace api {
namespace glic_private {

//
// Types
//

enum class ProfileReadyState {
  kNone = 0,
  kError,
  kSignInRequired,
  kReady,
  kDisabledByAdmin,
  kIneligible,
  kLocationMismatch,
  kIneligibleAccount,
  kMaxValue = kIneligibleAccount,
};


const char* ToString(ProfileReadyState as_enum);
ProfileReadyState ParseProfileReadyState(std::string_view as_string);
std::u16string GetProfileReadyStateParseError(std::string_view as_string);

struct ProfileState {
  ProfileState();
  ~ProfileState();
  ProfileState(const ProfileState&) = delete;
  ProfileState& operator=(const ProfileState&) = delete;
  ProfileState(ProfileState&& rhs) noexcept;
  ProfileState& operator=(ProfileState&& rhs) noexcept;

  // Populates a ProfileState object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ProfileState& out);

  // Populates a ProfileState object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ProfileState& out);

  // Creates a deep copy of ProfileState.
  ProfileState Clone() const;

  // Creates a ProfileState object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ProfileState> FromValue(const base::DictValue& value);

  // Creates a ProfileState object from a base::Value, or nullopt on failure.
  static std::optional<ProfileState> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisProfileState object.
  base::DictValue ToValue() const;

  bool is_enabled;

  bool is_enabled_and_consented;

  ProfileReadyState ready_state;

  bool live_allowed;

  bool share_image_allowed;

  bool actuation_allowed;

  bool user_enable_actuation_on_web;

  bool invocation_source_enabled;

};

enum class InvocationSource {
  kNone = 0,
  kUnknown,
  kUniversalCart,
  kPromotionPage,
  kWebContinuity,
  kMaxValue = kWebContinuity,
};


const char* ToString(InvocationSource as_enum);
InvocationSource ParseInvocationSource(std::string_view as_string);
std::u16string GetInvocationSourceParseError(std::string_view as_string);

struct GetStateParams {
  GetStateParams();
  ~GetStateParams();
  GetStateParams(const GetStateParams&) = delete;
  GetStateParams& operator=(const GetStateParams&) = delete;
  GetStateParams(GetStateParams&& rhs) noexcept;
  GetStateParams& operator=(GetStateParams&& rhs) noexcept;

  // Populates a GetStateParams object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetStateParams& out);

  // Populates a GetStateParams object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, GetStateParams& out);

  // Creates a deep copy of GetStateParams.
  GetStateParams Clone() const;

  // Creates a GetStateParams object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<GetStateParams> FromValue(const base::DictValue& value);

  // Creates a GetStateParams object from a base::Value, or nullopt on failure.
  static std::optional<GetStateParams> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisGetStateParams object.
  base::DictValue ToValue() const;

  InvocationSource invocation_source;

};

struct InvokeDetails {
  InvokeDetails();
  ~InvokeDetails();
  InvokeDetails(const InvokeDetails&) = delete;
  InvokeDetails& operator=(const InvokeDetails&) = delete;
  InvokeDetails(InvokeDetails&& rhs) noexcept;
  InvokeDetails& operator=(InvokeDetails&& rhs) noexcept;

  // Populates a InvokeDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, InvokeDetails& out);

  // Populates a InvokeDetails object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, InvokeDetails& out);

  // Creates a deep copy of InvokeDetails.
  InvokeDetails Clone() const;

  // Creates a InvokeDetails object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<InvokeDetails> FromValue(const base::DictValue& value);

  // Creates a InvokeDetails object from a base::Value, or nullopt on failure.
  static std::optional<InvokeDetails> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisInvokeDetails object.
  base::DictValue ToValue() const;

  // The prompt ID to lookup from Chrome, required unless called from the
  // promotion page.
  std::optional<std::string> prompt_id;

  // The source of the invocation.
  InvocationSource invocation_source;

  // Document ID of the page that originated the invocation. This is provided by
  // the caller (the extension background page) to specify the context of the
  // user's action, since the API itself is called from the background context.
  std::string document_id;

  // Whether should invoke the task in a new tab. Default to false.
  std::optional<bool> in_new_tab;

  // The conversation ID to focus in Glic, optional.
  std::optional<std::string> conversation_id;

  // The turn ID to focus within the conversation in Glic, optional.
  std::optional<std::string> turn_id;

};

enum class ErrorCode {
  kNone = 0,
  kLocalInvalidInvocationSource,
  kLocalMissingPromptId,
  kServerMissingPrompt,
  kHttpError,
  kParseError,
  kLocalNoActiveTab,
  kLocalGlicNotEnabled,
  kLocalGlicNotReady,
  kLocalGlicActuationNotAllowed,
  kLocalGlicNotEnabledAndConsented,
  kLocalAccountMismatch,
  kLocalInvalidDocumentId,
  kLocalConversationNotFound,
  kLocalNoBoundTabs,
  kLocalTabNotInWindow,
  kLocalGlicAccessFromPageDisabled,
  kMaxValue = kLocalGlicAccessFromPageDisabled,
};


const char* ToString(ErrorCode as_enum);
ErrorCode ParseErrorCode(std::string_view as_string);
std::u16string GetErrorCodeParseError(std::string_view as_string);


//
// Functions
//

namespace GetState {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string document_id;

  std::optional<GetStateParams> params;


 private:
  Params();
};

namespace Results {

// The current Glic state.
base::ListValue Create(const ProfileState& state);
}  // namespace Results

}  // namespace GetState

namespace Invoke {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  InvokeDetails details;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace Invoke

namespace HasConversation {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string conversation_id;


 private:
  Params();
};

namespace Results {

// True if conversation is present, false otherwise.
base::ListValue Create(bool is_present);
}  // namespace Results

}  // namespace HasConversation

namespace ActivateTabWithConversation {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string conversation_id;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace ActivateTabWithConversation

}  // namespace glic_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_GLIC_PRIVATE_H__
