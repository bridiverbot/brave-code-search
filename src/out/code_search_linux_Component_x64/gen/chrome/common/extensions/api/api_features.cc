// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE FEATURES FILE:
//   ['../../chrome/common/extensions/api/_api_features.json']
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/api_features.h"

#include <array>
#include <cstddef>
#include <string_view>

#include "base/containers/span.h"
#include "extensions/common/features/complex_feature.h"
#include "extensions/common/features/feature_provider.h"
#include "extensions/common/features/manifest_feature.h"
#include "extensions/common/features/permission_feature.h"
#include "extensions/common/mojom/context_type.mojom.h"
#include "extensions/common/mojom/feature_session_type.mojom.h"
#include "printing/buildflags/buildflags.h"

namespace extensions {

void AddChromeAPIFeatures(FeatureProvider* provider) {
  std::array<const Feature*, 136> static_features{};
  std::size_t static_feature_count = 0;
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"permission:accessibilityFeatures.modify"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "accessibilityFeatures",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies1 =
        std::to_array<std::string_view>(
            {"permission:accessibilityFeatures.read"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "accessibilityFeatures",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies1),
                .contexts = StaticSpan(kContexts1),
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "accessibilityFeatures",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:accessibilityServicePrivate"});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "accessibilityServicePrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .platforms = StaticSpan(kPlatforms),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"manifest:action"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "action",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"permission:activityLogPrivate"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "activityLogPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://extensions/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "activityLogPrivate",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "activityLogPrivate",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kBlocklist =
        std::to_array<std::string_view>(
            {"2FC374607C2DF285634B67C64A2E356C607091C3","5F81F9FE1F4F499490466BC3861653FE72DE22E2BA8E4E5769DED9FB2C7EE2D0","3727DD3E564B6055387425027AD74C58784ACC15","04C5C683BDBBDA3120FDD1043E96E551185C57F38BE14EE17B5993F6AD4C592F","12E618C3C6E97495AAECF2AC12DEB082353241C6","0EEEFAA87E292CD986DD0528E90F9128A936B1C4E1C53E7FAA0244594C69DF94","06BE211D5F014BAB34BC22D9DDA09C63A81D828E","F94EE6AB36D6C6588670B2B01EB65212D9C64E33","B9EF10DDFEA11EF77873CC5009809E5037FC4C7A"});
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kContentScript,mojom::ContextType::kWebPage,mojom::ContextType::kPrivilegedWebPage});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kHostedApp,Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"<all_urls>"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "app",
            },
        .config =
            {
                .blocklist = StaticSpan(kBlocklist),
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .match_patterns = StaticSpan(kMatches),
                .max_manifest_version = 2,
                .channel = version_info::Channel::STABLE,
                .disallow_for_service_workers = true,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:appview"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "appviewTag",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .is_internal = true,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"permission:autofillPrivate"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "autofillPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://settings/*"});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "autofillPrivate",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .platforms = StaticSpan(kPlatforms1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "autofillPrivate",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:autotestPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "autotestPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"chrome://bookmarks/*","chrome://bookmarks-side-panel.top-chrome/*","chrome://read-later.top-chrome/*"});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "bookmarkManagerPrivate",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts),
                .platforms = StaticSpan(kPlatforms),
                .match_patterns = StaticSpan(kMatches),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"permission:bookmarks"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "bookmarks",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://bookmarks/*","chrome://bookmarks-side-panel.top-chrome/*","chrome://read-later.top-chrome/*","chrome://welcome/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "bookmarks",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kContexts2 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches2 =
        std::to_array<std::string_view>(
            {"chrome://newtab/*"});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "bookmarks",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts2),
                .match_patterns = StaticSpan(kMatches2),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "bookmarks",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"chrome://bookmarks/*"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "bookmarks.export",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts),
                .match_patterns = StaticSpan(kMatches),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"chrome://bookmarks/*"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "bookmarks.import",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts),
                .match_patterns = StaticSpan(kMatches),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:brailleDisplayPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "brailleDisplayPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"manifest:browser_action"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "browserAction",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"manifest:browser_action"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "browserAction.openPopup",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
                .channel = version_info::Channel::DEV,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"A4577D8C2AF4CF26F40CBCA83FFA4251D6F6C8F8","A8208CCC87F8261AFAEB6B85D5E8D47372DDEA6B","EFCF5358672FEE04789FD2EC3638A67ADEDB6C8C"});
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies1 =
        std::to_array<std::string_view>(
            {"manifest:browser_action"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "browserAction.openPopup",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist1),
                .dependencies = StaticSpan(kDependencies1),
                .contexts = StaticSpan(kContexts1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "browserAction.openPopup",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:browsingData"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "browsingData",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"api:chromeWebViewTag"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "chromeWebViewInternal",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
                .is_internal = true,
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kDependencies1 =
        std::to_array<std::string_view>(
            {"api:chromeWebViewTag"});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://*/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "chromeWebViewInternal",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies1),
                .contexts = StaticSpan(kContexts1),
                .match_patterns = StaticSpan(kMatches1),
                .is_internal = true,
            },
    };
    static constexpr auto kContexts2 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebPage});
    static constexpr auto kMatches2 =
        std::to_array<std::string_view>(
            {"<all_urls>"});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "chromeWebViewInternal",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts2),
                .match_patterns = StaticSpan(kMatches2),
                .channel = version_info::Channel::STABLE,
                .is_internal = true,
                .requires_delegated_availability_check = true,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "chromeWebViewInternal",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"permission:webview"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "chromeWebViewTag",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
                .is_internal = true,
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://add-supervision/*","chrome://chrome-signin/*","chrome://contextual-tasks/*","chrome://glic/*","chrome://glic-fre/*","chrome://glic-experimental-opt-in/*","chrome://graduation/*","chrome://mobilesetup/*","chrome://oobe/*","chrome://os-settings/*","chrome://parent-access/*","chrome://password-change/*","chrome://lock-reauth/*","chrome://skills/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "chromeWebViewTag",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
                .is_internal = true,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "chromeWebViewTag",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"permission:chromeosInfoPrivate"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "chromeosInfoPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://version/*"});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "chromeosInfoPrivate",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .platforms = StaticSpan(kPlatforms1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "chromeosInfoPrivate",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:commandLinePrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "commandLinePrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"manifest:commands"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "commands",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:contentSettings"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "contentSettings",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:contentSettings"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "contentSettings.clipboard",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .feature_flag = StaticCString("ApiContentSettingsClipboard"),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:contextMenus"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "contextMenus",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:contextualTasksPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "contextualTasksPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .feature_flag = StaticCString("ApiContextualTasksPrivate"),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"permission:crashReportPrivate"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "crashReportPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://camera-app/*","chrome://media-app/*","chrome://recorder-app/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "crashReportPrivate",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kContexts2 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kUntrustedWebUi});
    static constexpr auto kMatches2 =
        std::to_array<std::string_view>(
            {"chrome-untrusted://boca-app/*","chrome-untrusted://camera-app/*","chrome-untrusted://help-app/*","chrome-untrusted://media-app/*","chrome-untrusted://projector/*","chrome-untrusted://projector-annotator/*"});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "crashReportPrivate",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts2),
                .match_patterns = StaticSpan(kMatches2),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "crashReportPrivate",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:debugger"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "debugger",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .developer_mode_only = true,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:declarativeContent"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "declarativeContent",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:desktopCapture"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "desktopCapture",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"permission:developerPrivate","permission:management"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "developerPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://extensions/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "developerPrivate",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "developerPrivate",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:dictationPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "dictationPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:documentScan"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "documentScan",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:downloads"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "downloads",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:downloads"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "downloadsInternal",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .is_internal = true,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:enterprise.deviceAttributes"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.deviceAttributes",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:enterprise.hardwarePlatform"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.hardwarePlatform",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:enterprise.kioskInput"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.kioskInput",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:enterprise.login"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.login",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:enterprise.networkingAttributes"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.networkingAttributes",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:enterprise.platformKeys"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.platformKeys",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:enterprise.platformKeys"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.platformKeysInternal",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .is_internal = true,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:enterprise.platformKeysPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.platformKeysPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:enterprise.reportingPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.reportingPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:enterprise.reportingPrivate"});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.reportingPrivate.getAvInfo",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .platforms = StaticSpan(kPlatforms),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:enterprise.reportingPrivate"});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::WIN_PLATFORM,Feature::MACOSX_PLATFORM,Feature::LINUX_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.reportingPrivate.getFileSystemInfo",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .platforms = StaticSpan(kPlatforms),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:enterprise.reportingPrivate"});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.reportingPrivate.getHotfixes",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .platforms = StaticSpan(kPlatforms),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:enterprise.reportingPrivate"});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::WIN_PLATFORM,Feature::MACOSX_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.reportingPrivate.getSettings",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .platforms = StaticSpan(kPlatforms),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:enterprise.reportingPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.reportingPrivate.onDataMaskingRulesTriggered",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .feature_flag = StaticCString("ApiEnterpriseReportingPrivateOnDataMaskingRulesTriggered"),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:enterprise.reportingPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.reportingPrivate.reportForceSaveToCloudEventHandled",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .feature_flag = StaticCString("ApiEnterpriseReportingPrivateReportForceSaveToCloudEventHandled"),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:enterprise.webrtc"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.webrtc",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:experimentalActor"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "experimentalActor",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:experimentalAiData"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "experimentalAiData",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"C01350F1D6603DCC4F1340831ABBB089BF7E56E0"});
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kContentScript});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:experimentalAiData"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "experimentalAiData.getDomNodeId",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .component_extensions_auto_granted = false,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"C01350F1D6603DCC4F1340831ABBB089BF7E56E0"});
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kContentScript});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:experimentalAiData"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "experimentalAiData.getNodeForDomNodeId",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .component_extensions_auto_granted = false,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "extension",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "extension.getBackgroundPage",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .channel = version_info::Channel::STABLE,
                .disallow_for_service_workers = true,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "extension.getExtensionTabs",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .max_manifest_version = 2,
                .channel = version_info::Channel::STABLE,
                .disallow_for_service_workers = true,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kContentScript});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "extension.getURL",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .max_manifest_version = 2,
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "extension.getViews",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .channel = version_info::Channel::STABLE,
                .disallow_for_service_workers = true,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kContentScript});
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "extension.inIncognitoContext",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .contexts = StaticSpan(kContexts0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://newtab/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "extension.inIncognitoContext",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes1),
                .contexts = StaticSpan(kContexts1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "extension.inIncognitoContext",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kContentScript});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "extension.lastError",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .max_manifest_version = 2,
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kContentScript});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "extension.onRequest",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .max_manifest_version = 2,
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "extension.onRequestExternal",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .max_manifest_version = 2,
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kContentScript});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "extension.sendRequest",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .max_manifest_version = 2,
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"chrome://extensions/*"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "extensionOptionsInternal",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts),
                .match_patterns = StaticSpan(kMatches),
                .channel = version_info::Channel::STABLE,
                .is_internal = true,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "extensionsManifestTypes",
            },
        .config =
            {
                .contexts = StaticSpan<mojom::ContextType>(),
                .channel = version_info::Channel::STABLE,
                .is_internal = true,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:fontSettings"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "fontSettings",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:gcm"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "gcm",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:glicPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "glicPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .feature_flag = StaticCString("ApiGlicPrivate"),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:glicPrivate.invoke"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "glicPrivate.invoke",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .feature_flag = StaticCString("ApiGlicPrivate"),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:history"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "history",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:identity"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "identity",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:identity"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "identity.getAccounts",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .channel = version_info::Channel::DEV,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:imageWriterPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "imageWriterPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:indigoPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "indigoPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .disallow_for_service_workers = true,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:input"});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "input.ime",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .platforms = StaticSpan(kPlatforms),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:gcm"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "instanceID",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"permission:languageSettingsPrivate"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "languageSettingsPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://os-settings/*","chrome://settings/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "languageSettingsPrivate",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "languageSettingsPrivate",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"permission:languageSettingsPrivate"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "languageSettingsPrivate.getLanguageList",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://os-settings/*","chrome://settings/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "languageSettingsPrivate.getLanguageList",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kContexts2 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kUntrustedWebUi});
    static constexpr auto kMatches2 =
        std::to_array<std::string_view>(
            {"chrome-untrusted://lens-overlay/*"});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "languageSettingsPrivate.getLanguageList",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts2),
                .match_patterns = StaticSpan(kMatches2),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "languageSettingsPrivate.getLanguageList",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"permission:languageSettingsPrivate"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "languageSettingsPrivate.getTranslateTargetLanguage",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://os-settings/*","chrome://settings/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "languageSettingsPrivate.getTranslateTargetLanguage",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kContexts2 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kUntrustedWebUi});
    static constexpr auto kMatches2 =
        std::to_array<std::string_view>(
            {"chrome-untrusted://lens-overlay/*"});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "languageSettingsPrivate.getTranslateTargetLanguage",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts2),
                .match_patterns = StaticSpan(kMatches2),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "languageSettingsPrivate.getTranslateTargetLanguage",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"behavior:imprivata_extension","permission:login"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "login",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"93B7178E8C275515C38D4F43D9DF4648F0EA9B03","BABE7AD8BDBAFCD146D50861BF6981DA7AC2961C1982E5F78EDBD7A5FAA62259","7FE4A999359A456C4B0FB7B7AD85CEA29CA50519","9C98730E21CB6AC1A7EA3CE3D528F8CD68BDBDA5BFCD008965F9AB1C1B0C82ED","3F5995FE79A861F019C6F093BEF98D73FA9D3A5F","4B7E9789426EBD1BB3F99D72690DAE303FC042DF","728AA38F805D9F046321CA8CFE30621958B2F45C1920F3172B64A9A459DABFF5","36F5326E7683E204CE9CE1532093D8BB9CD5D280"});
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies1 =
        std::to_array<std::string_view>(
            {"permission:login"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "login",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist1),
                .dependencies = StaticSpan(kDependencies1),
                .contexts = StaticSpan(kContexts1),
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "login",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"behavior:imprivata_extension","permission:login"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "login.exitCurrentSession",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"93B7178E8C275515C38D4F43D9DF4648F0EA9B03","BABE7AD8BDBAFCD146D50861BF6981DA7AC2961C1982E5F78EDBD7A5FAA62259","7FE4A999359A456C4B0FB7B7AD85CEA29CA50519","9C98730E21CB6AC1A7EA3CE3D528F8CD68BDBDA5BFCD008965F9AB1C1B0C82ED","3F5995FE79A861F019C6F093BEF98D73FA9D3A5F","4B7E9789426EBD1BB3F99D72690DAE303FC042DF","728AA38F805D9F046321CA8CFE30621958B2F45C1920F3172B64A9A459DABFF5","36F5326E7683E204CE9CE1532093D8BB9CD5D280","8ECFC754A70BE499325FA4BB705E62EFEEC1BC80","ECD28F2B60BDB3B4E566D6C60BD88BE0774044C1","C03440D5E6161ED58738ABA11586B1DB4B4DCA8A"});
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies1 =
        std::to_array<std::string_view>(
            {"permission:login"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "login.exitCurrentSession",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist1),
                .dependencies = StaticSpan(kDependencies1),
                .contexts = StaticSpan(kContexts1),
            },
    };
    static constexpr auto kContexts2 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kUntrustedWebUi});
    static constexpr auto kMatches2 =
        std::to_array<std::string_view>(
            {"chrome-untrusted://class-tools-remote-display/*"});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "login.exitCurrentSession",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts2),
                .match_patterns = StaticSpan(kMatches2),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "login.exitCurrentSession",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:loginScreenStorage"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "loginScreenStorage",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:loginState"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "loginState",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "manifestTypes",
            },
        .config =
            {
                .contexts = StaticSpan<mojom::ContextType>(),
                .channel = version_info::Channel::STABLE,
                .is_internal = true,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:mdns"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "mdns",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:mediaPlayerPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "mediaPlayerPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:notifications"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "notifications",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"manifest:omnibox"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "omnibox",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"manifest:page_action"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "pageAction",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:pageCapture"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "pageCapture",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"permission:passwordsPrivate"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "passwordsPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://password-manager/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "passwordsPrivate",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "passwordsPrivate",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:pdfViewerPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "pdfViewerPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:platformKeys"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "platformKeys",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"permission:platformKeys"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "platformKeysInternal",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
                .is_internal = true,
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies1 =
        std::to_array<std::string_view>(
            {"permission:enterprise.platformKeys"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "platformKeysInternal",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies1),
                .contexts = StaticSpan(kContexts1),
                .is_internal = true,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "platformKeysInternal",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:privacy"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "privacy",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:processes"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "processes",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:proxyOverrideRulesPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "proxyOverrideRulesPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .feature_flag = StaticCString("ApiProxyOverrideRulesPrivate"),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"chrome://multidevice-setup/*","chrome://os-settings/*","chrome://settings/*","chrome://oobe/*"});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "quickUnlockPrivate",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts),
                .platforms = StaticSpan(kPlatforms),
                .match_patterns = StaticSpan(kMatches),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:readingList"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "readingList",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"permission:resourcesPrivate"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "resourcesPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://print/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "resourcesPrivate",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "resourcesPrivate",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:safeBrowsingPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "safeBrowsingPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:search"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "search",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:sessions"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "sessions",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"permission:settingsPrivate"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "settingsPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://os-settings/*","chrome://settings/*","chrome://password-manager/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "settingsPrivate",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "settingsPrivate",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:sidePanel"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "sidePanel",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:systemPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "systemPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:tabCapture"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "tabCapture",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:tabCapture"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "tabCapture.capture",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .disallow_for_service_workers = true,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:tabGroups"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "tabGroups",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "tabs",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .contexts = StaticSpan(kContexts0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://bookmarks/*","chrome://bookmarks-side-panel.top-chrome/*","chrome://read-later.top-chrome/*","chrome://tab-strip.top-chrome/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "tabs",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kContexts2 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kUntrustedWebUi});
    static constexpr auto kMatches2 =
        std::to_array<std::string_view>(
            {"chrome-untrusted://crosh/*","chrome-untrusted://terminal/*","chrome-untrusted://boca-app/*"});
    static constexpr auto kPlatforms2 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "tabs",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts2),
                .platforms = StaticSpan(kPlatforms2),
                .match_patterns = StaticSpan(kMatches2),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kContexts3 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches3 =
        std::to_array<std::string_view>(
            {"chrome://brave-shields.top-chrome/*","chrome://rewards-panel.top-chrome/*","chrome://wallet-panel.top-chrome/*","chrome://wallet/*"});
    static constexpr SimpleFeatureData kFeature3 = {
        .feature =
            {
                .name = "tabs",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts3),
                .match_patterns = StaticSpan(kMatches3),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2, kFeature3});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "tabs",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "tabs.createSplit",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .feature_flag = StaticCString("ApiTabsSplitView"),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "tabs.executeScript",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .max_manifest_version = 2,
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "tabs.getAllInWindow",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .max_manifest_version = 2,
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "tabs.getSelected",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .max_manifest_version = 2,
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "tabs.insertCSS",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .max_manifest_version = 2,
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "tabs.onActiveChanged",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .max_manifest_version = 2,
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "tabs.onHighlightChanged",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .max_manifest_version = 2,
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "tabs.onSelectionChanged",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .max_manifest_version = 2,
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "tabs.removeCSS",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .max_manifest_version = 2,
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "tabs.sendRequest",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .max_manifest_version = 2,
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "tabs.unsplit",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .feature_flag = StaticCString("ApiTabsSplitView"),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"permission:terminalPrivate"});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "terminalPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
                .platforms = StaticSpan(kPlatforms0),
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kUntrustedWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome-untrusted://crosh/*","chrome-untrusted://terminal/*"});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "terminalPrivate",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .platforms = StaticSpan(kPlatforms1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "terminalPrivate",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"permission:terminalPrivate"});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "terminalPrivate.openTerminalProcess",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
                .platforms = StaticSpan(kPlatforms0),
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kUntrustedWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome-untrusted://crosh/*"});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "terminalPrivate.openTerminalProcess",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .platforms = StaticSpan(kPlatforms1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "terminalPrivate.openTerminalProcess",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"permission:topSites"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "topSites",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://newtab/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "topSites",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "topSites",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"permission:tts"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "tts",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://oobe/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "tts",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "tts",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:ttsEngine"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "ttsEngine",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:virtualKeyboardPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "virtualKeyboardPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:webAuthenticationProxy"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "webAuthenticationProxy",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:webNavigation"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "webNavigation",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:webcamPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "webcamPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:webrtcDesktopCapturePrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "webrtcDesktopCapturePrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:webrtcLoggingPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "webrtcLoggingPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"ADFA45434ABA2F1A4647E673F53FF37F8F6047A3","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB"});
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:webrtcLoggingPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "webrtcLoggingPrivate.getLogsDirectory",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .component_extensions_auto_granted = false,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:webview"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "webviewTag",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .is_internal = true,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"api:tabs"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "windows",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://bookmarks/*","chrome://tab-strip.top-chrome/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "windows",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kContexts2 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kUntrustedWebUi});
    static constexpr auto kMatches2 =
        std::to_array<std::string_view>(
            {"chrome-untrusted://crosh/*","chrome-untrusted://terminal/*","chrome-untrusted://boca-app/*"});
    static constexpr auto kPlatforms2 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "windows",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts2),
                .platforms = StaticSpan(kPlatforms2),
                .match_patterns = StaticSpan(kMatches2),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "windows",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  provider->AddStaticFeatures(
      base::span(static_features).first(static_feature_count));

}

}  // namespace extensions