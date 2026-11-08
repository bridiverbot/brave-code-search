// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/webstore_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/webstore_private.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#ifndef EXTENSIONS_COMMON_API_WEBSTORE_PRIVATE_H__
#define EXTENSIONS_COMMON_API_WEBSTORE_PRIVATE_H__

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
namespace webstore_private {

//
// Types
//

// Whether the API call succeeded, or the reason for failure.
enum class Result {
  kNone = 0,
  kEmptyString,
  kSuccess,
  kUserGestureRequired,
  kUnknownError,
  kFeatureDisabled,
  kUnsupportedExtensionType,
  kMissingDependencies,
  kInstallError,
  kUserCancelled,
  kInvalidId,
  kBlacklisted,
  kBlockedByPolicy,
  kInstallInProgress,
  kLaunchInProgress,
  kManifestError,
  kIconError,
  kInvalidIconUrl,
  kAlreadyInstalled,
  kBlockedForChildAccount,
  kMaxValue = kBlockedForChildAccount,
};


const char* ToString(Result as_enum);
Result ParseResult(std::string_view as_string);
std::u16string GetResultParseError(std::string_view as_string);

enum class WebGlStatus {
  kNone = 0,
  kWebglAllowed,
  kWebglBlocked,
  kMaxValue = kWebglBlocked,
};


const char* ToString(WebGlStatus as_enum);
WebGlStatus ParseWebGlStatus(std::string_view as_string);
std::u16string GetWebGlStatusParseError(std::string_view as_string);

enum class ExtensionInstallStatus {
  kNone = 0,
  kCanRequest,
  kRequestPending,
  kBlockedByPolicy,
  kInstallable,
  kEnabled,
  kDisabled,
  kTerminated,
  kBlacklisted,
  kCustodianApprovalRequired,
  kCustodianApprovalRequiredForInstallation,
  kForceInstalled,
  kDeprecatedManifestVersion,
  kCorrupted,
  kMaxValue = kCorrupted,
};


const char* ToString(ExtensionInstallStatus as_enum);
ExtensionInstallStatus ParseExtensionInstallStatus(std::string_view as_string);
std::u16string GetExtensionInstallStatusParseError(std::string_view as_string);

enum class MV2DeprecationStatus {
  kNone = 0,
  kInactive,
  kWarning,
  kSoftDisable,
  kHardDisable,
  kMaxValue = kHardDisable,
};


const char* ToString(MV2DeprecationStatus as_enum);
MV2DeprecationStatus ParseMV2DeprecationStatus(std::string_view as_string);
std::u16string GetMV2DeprecationStatusParseError(std::string_view as_string);

enum class PromotionType {
  kNone = 0,
  kChromeEnterpriseCore,
  kChromeEnterprisePremium,
  kPromotionTypeUnspecified,
  kMaxValue = kPromotionTypeUnspecified,
};


const char* ToString(PromotionType as_enum);
PromotionType ParsePromotionType(std::string_view as_string);
std::u16string GetPromotionTypeParseError(std::string_view as_string);


//
// Functions
//

namespace BeginInstallWithManifest3 {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::DictValue& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::DictValue, or nullopt on failure.
    static std::optional<Details> FromValue(const base::DictValue& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value& value);

    // The id of the extension to be installed.
    std::string id;

    // A string with the contents of the extension's manifest.json file. During the
    // install process, the browser will check that the downloaded extension's
    // manifest matches what was passed in here.
    std::string manifest;

    std::optional<std::string> icon_url;

    // A string to use instead of the raw value of the 'name' key from
    // manifest.json.
    std::optional<std::string> localized_name;

    // The name of the locale used for generating localizedName. This should be the
    // name of one of the directories in the _locales folder of the extension, or
    // the default_locale setting from the manifest.
    std::optional<std::string> locale;

    // A flag to change the UI we show when an app is installed - a value of true
    // means to show a bubble pointing at the new tab button (instead of the default
    // behavior of opening the new tab page and animating the app icon).
    std::optional<bool> app_install_bubble;

    // A flag to cause the app launcher to be installed before installing the
    // extension, if it isn't installed already.
    std::optional<bool> enable_launcher;

    // The authuser index to be included with CRX download requests in multi-login
    // sessions.
    std::optional<std::string> authuser;

    // A flag to specify if the extension is included in the ESB allowlist.
    std::optional<bool> esb_allowlist;

    base::DictValue additional_properties;
  };


  Details details;


 private:
  Params();
};

namespace Results {

// A string result code, which will be empty upon success. The possible values
// in the case of errors include 'unknown_error', 'user_cancelled',
// 'manifest_error', 'icon_error', 'invalid_id', 'permission_denied',
// 'invalid_icon_url' and 'already_installed'.
base::ListValue Create(const Result& result);
}  // namespace Results

}  // namespace BeginInstallWithManifest3

namespace CompleteInstall {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id of the extension to be installed. This should match a previous call to
  // beginInstallWithManifest3.
  std::string expected_id;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace CompleteInstall

namespace EnableAppLauncher {

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace EnableAppLauncher

namespace GetBrowserLogin {

namespace Results {

struct Info {
  Info();
  ~Info();
  Info(const Info&) = delete;
  Info& operator=(const Info&) = delete;
  Info(Info&& rhs) noexcept;
  Info& operator=(Info&& rhs) noexcept;

  // Returns a new base::DictValue representing the serialized form of thisInfo
  // object.
  base::DictValue ToValue() const;

  std::string login;

};


base::ListValue Create(const Info& info);
}  // namespace Results

}  // namespace GetBrowserLogin

namespace GetStoreLogin {

namespace Results {

base::ListValue Create(const std::string& login);
}  // namespace Results

}  // namespace GetStoreLogin

namespace SetStoreLogin {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string login;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace SetStoreLogin

namespace GetWebGLStatus {

namespace Results {

base::ListValue Create(const WebGlStatus& webgl_status);
}  // namespace Results

}  // namespace GetWebGLStatus

namespace GetIsLauncherEnabled {

namespace Results {

base::ListValue Create(bool is_enabled);
}  // namespace Results

}  // namespace GetIsLauncherEnabled

namespace IsInIncognitoMode {

namespace Results {

base::ListValue Create(bool is_incognito);
}  // namespace Results

}  // namespace IsInIncognitoMode

namespace IsPendingCustodianApproval {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The extension id of the extension to be checked.
  std::string id;


 private:
  Params();
};

namespace Results {

base::ListValue Create(bool is_pending_approval);
}  // namespace Results

}  // namespace IsPendingCustodianApproval

namespace GetReferrerChain {

namespace Results {

base::ListValue Create(const std::string& referrer_chain);
}  // namespace Results

}  // namespace GetReferrerChain

namespace GetExtensionStatus {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id of the extension
  std::string id;

  // The manifest of the extension
  std::optional<std::string> manifest;


 private:
  Params();
};

namespace Results {

base::ListValue Create(const ExtensionInstallStatus& status);
}  // namespace Results

}  // namespace GetExtensionStatus

namespace GetFullChromeVersion {

namespace Results {

struct Info {
  Info();
  ~Info();
  Info(const Info&) = delete;
  Info& operator=(const Info&) = delete;
  Info(Info&& rhs) noexcept;
  Info& operator=(Info&& rhs) noexcept;

  // Returns a new base::DictValue representing the serialized form of thisInfo
  // object.
  base::DictValue ToValue() const;

  std::string version_number;

};


base::ListValue Create(const Info& info);
}  // namespace Results

}  // namespace GetFullChromeVersion

namespace GetMV2DeprecationStatus {

namespace Results {

base::ListValue Create(const MV2DeprecationStatus& status);
}  // namespace Results

}  // namespace GetMV2DeprecationStatus

namespace ShouldShowEnterprisePromotionBanner {

namespace Results {

base::ListValue Create(const PromotionType& should_show);
}  // namespace Results

}  // namespace ShouldShowEnterprisePromotionBanner

namespace LogEnterprisePromoShown {

}  // namespace LogEnterprisePromoShown

namespace OnEnterprisePromoClick {

}  // namespace OnEnterprisePromoClick

}  // namespace webstore_private
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_WEBSTORE_PRIVATE_H__
