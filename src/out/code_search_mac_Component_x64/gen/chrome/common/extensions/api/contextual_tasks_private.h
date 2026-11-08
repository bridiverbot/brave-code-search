// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/contextual_tasks_private.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/contextual_tasks_private.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#ifndef CHROME_COMMON_EXTENSIONS_API_CONTEXTUAL_TASKS_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_CONTEXTUAL_TASKS_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace contextual_tasks_private {

//
// Types
//

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

  // Whether the profile is eligible for Contextual Tasks.
  bool is_eligible;

};

struct AimParams {
  AimParams();
  ~AimParams();
  AimParams(const AimParams&) = delete;
  AimParams& operator=(const AimParams&) = delete;
  AimParams(AimParams&& rhs) noexcept;
  AimParams& operator=(AimParams&& rhs) noexcept;

  // Populates a AimParams object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, AimParams& out);

  // Populates a AimParams object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, AimParams& out);

  // Creates a deep copy of AimParams.
  AimParams Clone() const;

  // Creates a AimParams object from a base::DictValue, or nullopt on failure.
  static std::optional<AimParams> FromValue(const base::DictValue& value);

  // Creates a AimParams object from a base::Value, or nullopt on failure.
  static std::optional<AimParams> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAimParams object.
  base::DictValue ToValue() const;

  // Whether the link click came from a Nitrogen tab. Used for metrics.
  std::optional<std::string> ntc;

  // Magi State Token which contains an opaque encrypted and encoded event ID to
  // keep track of in scope state. Used to restore the AIO response as an AIM
  // thread.
  std::optional<std::string> mstk;

  // Param to indicate how to handle the AIM handover.  * "1" indicates that this
  // is an AIO handover request to AIM.  * "2" indicates that this is a SRP to AIM
  // desktop direct handover    request.  * "3" indicates that this request is
  // part of a session for which we have    previously performed a handover from
  // SRP to AIM.
  std::optional<std::string> aioh;

  // Param to indicate where to restore the AIM thread from:  * 1 - restore a
  // previous conversation turn  * 2 - restore as a follow up from a SRP request
  // * 3 - restore as a Magi response from Memory (server)
  std::optional<std::string> csuir;

  // Visual element data in Base64 proto or text split by ':' and ','. Used for
  // click tracking.
  std::optional<std::string> ved;

  // Query param indicating dark mode (=1) or light mode (=0).
  std::optional<std::string> cs;

  // XSRF token for search requests. See go/gws-xsleaks-proposal.
  std::optional<std::string> sxsrf;

  // Event ID for the query. Used for logging.
  std::optional<std::string> ei;

  // The search query.
  std::optional<std::string> q;

};

struct LaunchPanelInNewTabDetails {
  LaunchPanelInNewTabDetails();
  ~LaunchPanelInNewTabDetails();
  LaunchPanelInNewTabDetails(const LaunchPanelInNewTabDetails&) = delete;
  LaunchPanelInNewTabDetails& operator=(const LaunchPanelInNewTabDetails&) = delete;
  LaunchPanelInNewTabDetails(LaunchPanelInNewTabDetails&& rhs) noexcept;
  LaunchPanelInNewTabDetails& operator=(LaunchPanelInNewTabDetails&& rhs) noexcept;

  // Populates a LaunchPanelInNewTabDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, LaunchPanelInNewTabDetails& out);

  // Populates a LaunchPanelInNewTabDetails object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, LaunchPanelInNewTabDetails& out);

  // Creates a deep copy of LaunchPanelInNewTabDetails.
  LaunchPanelInNewTabDetails Clone() const;

  // Creates a LaunchPanelInNewTabDetails object from a base::DictValue, or
  // nullopt on failure.
  static std::optional<LaunchPanelInNewTabDetails> FromValue(const base::DictValue& value);

  // Creates a LaunchPanelInNewTabDetails object from a base::Value, or nullopt
  // on failure.
  static std::optional<LaunchPanelInNewTabDetails> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisLaunchPanelInNewTabDetails object.
  base::DictValue ToValue() const;

  // The query parameters to construct the AIM URL.
  AimParams aim_params;

  // The URL to load in the new tab.
  std::string target_url;

  std::string document_id;

};


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


 private:
  Params();
};

namespace Results {

// The current ProfileState for Contextual Tasks.
base::ListValue Create(const ProfileState& state);
}  // namespace Results

}  // namespace GetState

namespace LaunchPanelInNewTab {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  LaunchPanelInNewTabDetails details;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace LaunchPanelInNewTab

}  // namespace contextual_tasks_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_CONTEXTUAL_TASKS_PRIVATE_H__
