// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE FEATURES FILE:
//   ['../../extensions/common/api/_api_features.json']
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/api_features.h"

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

void AddCoreAPIFeatures(FeatureProvider* provider) {
  std::array<const Feature*, 111> static_features{};
  std::size_t static_feature_count = 0;
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:alarms"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "alarms",
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
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "app.currentWindowInternal",
                .no_parent = true,
            },
        .config =
            {
                .contexts = StaticSpan(kContexts),
                .platforms = StaticSpan(kPlatforms),
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
            {"permission:app.window.shape"});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "app.currentWindowInternal.setShape",
                .no_parent = true,
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::STABLE,
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
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "app.runtime",
                .no_parent = true,
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .contexts = StaticSpan(kContexts0),
                .platforms = StaticSpan(kPlatforms0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"2FC374607C2DF285634B67C64A2E356C607091C3","5F81F9FE1F4F499490466BC3861653FE72DE22E2BA8E4E5769DED9FB2C7EE2D0","3727DD3E564B6055387425027AD74C58784ACC15","04C5C683BDBBDA3120FDD1043E96E551185C57F38BE14EE17B5993F6AD4C592F","12E618C3C6E97495AAECF2AC12DEB082353241C6","0EEEFAA87E292CD986DD0528E90F9128A936B1C4E1C53E7FAA0244594C69DF94"});
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "app.runtime",
                .no_parent = true,
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist1),
                .extension_types = StaticSpan(kExtensionTypes1),
                .contexts = StaticSpan(kContexts1),
                .platforms = StaticSpan(kPlatforms1),
                .channel = version_info::Channel::STABLE,
                .component_extensions_auto_granted = false,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "app.runtime",
                .no_parent = true,
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
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "app.window",
                .no_parent = true,
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .contexts = StaticSpan(kContexts0),
                .platforms = StaticSpan(kPlatforms0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"B9EF10DDFEA11EF77873CC5009809E5037FC4C7A","06BE211D5F014BAB34BC22D9DDA09C63A81D828E","F94EE6AB36D6C6588670B2B01EB65212D9C64E33"});
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "app.window",
                .no_parent = true,
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist1),
                .extension_types = StaticSpan(kExtensionTypes1),
                .contexts = StaticSpan(kContexts1),
                .platforms = StaticSpan(kPlatforms1),
                .channel = version_info::Channel::STABLE,
                .component_extensions_auto_granted = false,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "app.window",
                .no_parent = true,
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
            {"permission:appview"});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "appViewEmbedderInternal",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .platforms = StaticSpan(kPlatforms),
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
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "appViewGuestInternal",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts),
                .platforms = StaticSpan(kPlatforms),
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
            {"permission:audio"});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "audio",
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
            {"manifest:automation"});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "automation",
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
            {"manifest:automation"});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "automationInternal",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .platforms = StaticSpan(kPlatforms),
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
            {"manifest:bluetooth"});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "bluetooth",
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
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://bluetooth-pairing/*","chrome://os-settings/*"});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "bluetooth",
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
                .name = "bluetooth",
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
            {"manifest:bluetooth"});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "bluetoothLowEnergy",
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
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"permission:bluetoothPrivate"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "bluetoothPrivate",
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
            {"chrome://bluetooth-pairing/*","chrome://os-settings/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "bluetoothPrivate",
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
                .name = "bluetoothPrivate",
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
            {"manifest:bluetooth"});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "bluetoothSocket",
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
            {"permission:cecPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "cecPrivate",
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
            {"permission:clipboard"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "clipboard",
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
            {"permission:clipboardRead"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "clipboard.onClipboardDataChanged",
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
            {"permission:clipboardWrite"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "clipboard.setImageData",
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
            {"permission:cookies"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "cookies",
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
            {"permission:declarativeNetRequest"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "declarativeNetRequest",
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
            {"permission:declarativeNetRequestWithHostAccess"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "declarativeNetRequest",
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
                .name = "declarativeNetRequest",
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
            {"permission:declarativeNetRequestFeedback","permission:declarativeNetRequest"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "declarativeNetRequest.onRuleMatchedDebug",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
                .location = SimpleFeature::Location::kUnpacked,
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies1 =
        std::to_array<std::string_view>(
            {"permission:declarativeNetRequestFeedback","permission:declarativeNetRequestWithHostAccess"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "declarativeNetRequest.onRuleMatchedDebug",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies1),
                .contexts = StaticSpan(kContexts1),
                .location = SimpleFeature::Location::kUnpacked,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "declarativeNetRequest.onRuleMatchedDebug",
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
            {"permission:declarativeNetRequest"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "declarativeNetRequest.testMatchOutcome",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
                .location = SimpleFeature::Location::kUnpacked,
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies1 =
        std::to_array<std::string_view>(
            {"permission:declarativeNetRequestWithHostAccess"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "declarativeNetRequest.testMatchOutcome",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies1),
                .contexts = StaticSpan(kContexts1),
                .location = SimpleFeature::Location::kUnpacked,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "declarativeNetRequest.testMatchOutcome",
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
            {"permission:declarativeWebRequest"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "declarativeWebRequest",
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
            {"permission:diagnostics"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "diagnostics",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .extension_types = StaticSpan(kExtensionTypes),
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
            {"permission:dns"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "dns",
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
            {mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kContentScript});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "dom",
            },
        .config =
            {
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
            {mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kPrivilegedWebPage,mojom::ContextType::kContentScript,mojom::ContextType::kOffscreenExtension,mojom::ContextType::kUserScript,mojom::ContextType::kWebPage,mojom::ContextType::kWebUi,mojom::ContextType::kUntrustedWebUi,mojom::ContextType::kUnprivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp,Manifest::Type::kExtension});
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"<all_urls>"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "events",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
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
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "extensionTypes",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .channel = version_info::Channel::STABLE,
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
            {"permission:feedbackPrivate"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "feedbackPrivate",
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
            {"chrome://feedback/*","chrome://cast-feedback/*","chrome://os-feedback/*"});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "feedbackPrivate",
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
                .name = "feedbackPrivate",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"2FC374607C2DF285634B67C64A2E356C607091C3","5F81F9FE1F4F499490466BC3861653FE72DE22E2BA8E4E5769DED9FB2C7EE2D0","3727DD3E564B6055387425027AD74C58784ACC15","04C5C683BDBBDA3120FDD1043E96E551185C57F38BE14EE17B5993F6AD4C592F","12E618C3C6E97495AAECF2AC12DEB082353241C6","0EEEFAA87E292CD986DD0528E90F9128A936B1C4E1C53E7FAA0244594C69DF94"});
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "feedbackPrivate.openFeedback",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
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
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"permission:feedbackPrivate"});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr auto kSessionTypes0 =
        std::to_array<mojom::FeatureSessionType>(
            {mojom::FeatureSessionType::kKiosk});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "feedbackPrivate.readLogSource",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .session_types = StaticSpan(kSessionTypes0),
                .contexts = StaticSpan(kContexts0),
                .platforms = StaticSpan(kPlatforms0),
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kDependencies1 =
        std::to_array<std::string_view>(
            {"permission:feedbackPrivate"});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://feedback/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "feedbackPrivate.readLogSource",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies1),
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
                .name = "feedbackPrivate.readLogSource",
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
            {"permission:fileSystem"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "fileSystem",
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
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "guestViewInternal",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts0),
                .platforms = StaticSpan(kPlatforms0),
                .channel = version_info::Channel::STABLE,
                .is_internal = true,
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://add-supervision/*","chrome://contextual-tasks/*","chrome://extensions/*","chrome://glic/*","chrome://glic-fre/*","chrome://glic-experimental-opt-in/*","chrome://graduation/*","chrome://home/*","chrome://chrome-signin/*","chrome://mobilesetup/*","chrome://oobe/*","chrome://os-settings/*","chrome://parent-access/*","chrome://password-change/*","chrome://lock-reauth/*","chrome://skills/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "guestViewInternal",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
                .is_internal = true,
            },
    };
    static constexpr auto kContexts2 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebPage});
    static constexpr auto kMatches2 =
        std::to_array<std::string_view>(
            {"<all_urls>"});
    static constexpr auto kPlatforms2 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "guestViewInternal",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts2),
                .platforms = StaticSpan(kPlatforms2),
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
                .name = "guestViewInternal",
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
            {"permission:hid"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "hid",
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
            {mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kContentScript});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "i18n",
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
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:idle"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "idle",
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
            {"permission:idle"});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "idle.getAutoLockDelay",
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
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"permission:management"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "management",
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
            {"chrome://extensions/*","chrome://settings/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "management",
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
            {mojom::ContextType::kWebPage});
    static constexpr auto kMatches2 =
        std::to_array<std::string_view>(
            {"https://chromewebstore.google.com/*"});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "management",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts2),
                .match_patterns = StaticSpan(kMatches2),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kContexts3 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebPage});
    static constexpr auto kMatches3 =
        std::to_array<std::string_view>(
            {"<all_urls>"});
    static constexpr SimpleFeatureData kFeature3 = {
        .feature =
            {
                .name = "management",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts3),
                .match_patterns = StaticSpan(kMatches3),
                .channel = version_info::Channel::STABLE,
                .requires_delegated_availability_check = true,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2, kFeature3});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "management",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "management.getPermissionWarningsByManifest",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "management.getSelf",
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
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"manifest:replacement_web_app"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "management.installReplacementWebApp",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .extension_types = StaticSpan(kExtensionTypes),
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
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "management.uninstallSelf",
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
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:mediaPerceptionPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "mediaPerceptionPrivate",
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
            {"permission:metricsPrivate"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "metricsPrivate",
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
            {"chrome://apps/*","chrome://bookmarks/*","chrome://bookmarks-side-panel.top-chrome/*","chrome://certificate-manager/*","chrome://compare/*","chrome://contextual-tasks/*","chrome://customize-chrome-side-panel.top-chrome/*","chrome://shopping-insights-side-panel.top-chrome/*","chrome://eche-app/*","chrome://extensions/*","chrome://extensions-zero-state/*","chrome://file-manager/*","chrome://glic/*","chrome://glic-fre/*","chrome://help-app/*","chrome://history/*","chrome://new-tab-page/*","chrome://newtab-footer/*","chrome://omnibox-popup.top-chrome/*","chrome://oobe/*","chrome://os-settings/*","chrome://password-manager/*","chrome://personalization/*","chrome://profile-picker/*","chrome://read-later.top-chrome/*","chrome://settings/*","chrome://sync-confirmation/*","chrome://tab-search.top-chrome/*","chrome://tab-strip.top-chrome/*","chrome://vc-background/*","chrome://app-settings/*","chrome://search-engine-choice/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "metricsPrivate",
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
            {"chrome-untrusted://boca-app/*","chrome-untrusted://compose/*","chrome-untrusted://help-app/*","chrome-untrusted://lens-overlay/*","chrome-untrusted://media-app/*","chrome-untrusted://mako/*","chrome-untrusted://projector/*","chrome-untrusted://read-anything-side-panel.top-chrome/*","chrome-untrusted://data-sharing/*","chrome-untrusted://class-tools-remote-display/*"});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "metricsPrivate",
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
                .name = "metricsPrivate",
                .alias = StaticCString("metricsPrivateIndividualApis"),
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kSimple,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"0D209B5E4401BB8E7873B5AB5B1346A1CB067015"});
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:metricsPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "metricsPrivate.getHistogram",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
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
            {"2FC374607C2DF285634B67C64A2E356C607091C3","3727DD3E564B6055387425027AD74C58784ACC15","12E618C3C6E97495AAECF2AC12DEB082353241C6","3727DD3E564B6055387425027AD74C58784ACC15","C41AD9DCD670210295614257EF8C9945AD68D86E","D7986543275120831B39EF28D1327552FC343960","A291B26E088FA6BA53FFD72F0916F06EBA7C585A","07BD6A765FFC289FF755D7CAB2893A40EC337FEC","896B85CC7E913E11C34892C1425A093C0701D386","11A01C82EF355E674E4F9728A801F5C3CB40D83F","F410C88469990EE7947450311D24B8AF2ADB2595","B620CF4203315F9F2E046EDED22C7571A935958D","B206D8716769728278D2D300349C6CB7D7DE2EF9","2B6C6A4A5940017146F3E58B7F90116206E84685","B6C2EFAB3EC3BF6EF03701408B6B09A67B2D0069","96FF2FFA5C9173C76D47184B3E86D267B37781DE","0136FCB13DB29FD5CD442F56E59E53B61F1DF96F","46578A13607D38F1DC8E280C4F499FB0A2F9565C","898FB5A39687D210766B8998BA4530B99C9E6586","82F30B65397BC3E4ADE627BBD857AB8A58210648","C74B2AF138F9EDECD04D0965AB36CA66C8290466","754A9CB3C8623093180E10CF4C3AB64837179E68","CF6B19571334F49878327D557597D23B1458AA39"});
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:metricsPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "metricsPrivate.getIsCrashReportingEnabled",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
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
                .name = "metricsPrivateIndividualApis",
                .source = StaticCString("metricsPrivate"),
            },
        .config =
            {
                .contexts = StaticSpan<mojom::ContextType>(),
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
            {mojom::ContextType::kUntrustedWebUi});
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"chrome-untrusted://demo-mode-app/*"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "metricsPrivateIndividualApis.recordEnumerationValue",
                .source = StaticCString("metricsPrivate"),
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
            {mojom::ContextType::kUntrustedWebUi});
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"chrome-untrusted://demo-mode-app/*"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "metricsPrivateIndividualApis.recordMediumTime",
                .source = StaticCString("metricsPrivate"),
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
            {mojom::ContextType::kUntrustedWebUi});
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"chrome://apps/*","chrome-untrusted://demo-mode-app/*"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "metricsPrivateIndividualApis.recordUserAction",
                .source = StaticCString("metricsPrivate"),
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
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"manifest:mime_types_handler"});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "mimeHandler",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .contexts = StaticSpan(kContexts0),
                .platforms = StaticSpan(kPlatforms0),
                .channel = version_info::Channel::DEV,
                .requires_delegated_availability_check = true,
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies1 =
        std::to_array<std::string_view>(
            {"manifest:mime_types_handler"});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "mimeHandler",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies1),
                .contexts = StaticSpan(kContexts1),
                .platforms = StaticSpan(kPlatforms1),
                .feature_flag = StaticCString("ApiMimeHandler"),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "mimeHandler",
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
            {"manifest:mime_types_handler"});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "mimeHandlerPrivate",
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
            {"behavior:imprivata_in_session_extension"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "mojoPrivate",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .platforms = StaticSpan(kPlatforms),
                .location = SimpleFeature::Location::kPolicy,
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
            {"permission:networking.onc"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "networking.onc",
                .source = StaticCString("networkingPrivate"),
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
            {"permission:networkingPrivate"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "networkingPrivate",
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
            {"chrome://network/*","chrome://oobe/*","chrome://internet-config-dialog/*","chrome://internet-detail-dialog/*","chrome://os-settings/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "networkingPrivate",
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
                .name = "networkingPrivate",
                .alias = StaticCString("networking.onc"),
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
            {"permission:offscreen"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "offscreen",
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
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "permissions",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "permissions.addHostAccessRequest",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .min_manifest_version = 3,
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "permissions.removeHostAccessRequest",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .min_manifest_version = 3,
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
            {"permission:power"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "power",
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
            {"permission:power"});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "power.reportActivity",
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
            {"permission:printerProvider"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "printerProvider",
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
            {"permission:printerProvider"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "printerProviderInternal",
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
            {"permission:proxy"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "proxy",
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
            {"permission:publicSuffix"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "publicSuffix",
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
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "runtime",
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
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedWebPage,mojom::ContextType::kContentScript,mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kOffscreenExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kUserScript,mojom::ContextType::kWebPage});
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr auto kMatches0 =
        std::to_array<std::string_view>(
            {"<all_urls>"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "runtime.connect",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .contexts = StaticSpan(kContexts0),
                .match_patterns = StaticSpan(kMatches0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kUntrustedWebUi});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome-untrusted://terminal/html/terminal_ssh.html*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "runtime.connect",
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
                .name = "runtime.connect",
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
            {"permission:nativeMessaging"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "runtime.connectNative",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "runtime.getBackgroundPage",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "runtime.getContexts",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .min_manifest_version = 3,
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "runtime.getManifest",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "runtime.getPackageDirectoryEntry",
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
            {mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kOffscreenExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kContentScript});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "runtime.getURL",
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
            {mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kContentScript});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "runtime.getVersion",
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
            {mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kOffscreenExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kContentScript});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "runtime.id",
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
            {mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kPrivilegedWebPage,mojom::ContextType::kContentScript,mojom::ContextType::kOffscreenExtension,mojom::ContextType::kUserScript,mojom::ContextType::kWebPage,mojom::ContextType::kWebUi,mojom::ContextType::kUntrustedWebUi,mojom::ContextType::kUnprivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kHostedApp,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kSharedModule,Manifest::Type::kTheme,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"<all_urls>"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "runtime.lastError",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
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
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "runtime.markListenerRegistrationComplete",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .min_manifest_version = 3,
                .feature_flag = StaticCString("ExtensionAsyncListenerRegistration"),
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
            {mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kOffscreenExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kUserScript,mojom::ContextType::kContentScript});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "runtime.onConnect",
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
            {mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kOffscreenExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "runtime.onConnectExternal",
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
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:nativeMessaging"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "runtime.onConnectNative",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
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
            {mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kOffscreenExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kUserScript,mojom::ContextType::kContentScript});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "runtime.onMessage",
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
            {mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kOffscreenExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "runtime.onMessageExternal",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "runtime.onUserScriptConnect",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .min_manifest_version = 3,
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "runtime.onUserScriptMessage",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .min_manifest_version = 3,
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
            {mojom::ContextType::kPrivilegedWebPage,mojom::ContextType::kContentScript,mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kOffscreenExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kUserScript,mojom::ContextType::kWebPage});
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr auto kMatches0 =
        std::to_array<std::string_view>(
            {"<all_urls>"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "runtime.sendMessage",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .contexts = StaticSpan(kContexts0),
                .match_patterns = StaticSpan(kMatches0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://file-manager/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "runtime.sendMessage",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes1),
                .contexts = StaticSpan(kContexts1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kContexts2 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kUntrustedWebUi});
    static constexpr auto kExtensionTypes2 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr auto kMatches2 =
        std::to_array<std::string_view>(
            {"chrome-untrusted://terminal/*"});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "runtime.sendMessage",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes2),
                .contexts = StaticSpan(kContexts2),
                .match_patterns = StaticSpan(kMatches2),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kContexts3 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kExtensionTypes3 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr auto kMatches3 =
        std::to_array<std::string_view>(
            {"chrome://newtab/*"});
    static constexpr SimpleFeatureData kFeature3 = {
        .feature =
            {
                .name = "runtime.sendMessage",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes3),
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
                .name = "runtime.sendMessage",
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
            {"permission:nativeMessaging"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "runtime.sendNativeMessage",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
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
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:scripting"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "scripting",
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
            {mojom::ContextType::kContentScript});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:scripting"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "scripting.globalParams",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .channel = version_info::Channel::UNKNOWN,
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
            {"permission:serial"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "serial",
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
            {"permission:socket"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "socket",
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
            {"manifest:sockets"});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "sockets.tcp",
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
            {"chrome-untrusted://terminal/*"});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "sockets.tcp",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .platforms = StaticSpan(kPlatforms1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist2 =
        std::to_array<std::string_view>(
            {"3D9518A72EB02667A773B69DBA9E72E0F4A37423"});
    static constexpr auto kContexts2 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies2 =
        std::to_array<std::string_view>(
            {"manifest:sockets"});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "sockets.tcp",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist2),
                .dependencies = StaticSpan(kDependencies2),
                .contexts = StaticSpan(kContexts2),
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "sockets.tcp",
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
            {"manifest:sockets"});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "sockets.tcpServer",
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
            {"chrome-untrusted://terminal/*"});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "sockets.tcpServer",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .platforms = StaticSpan(kPlatforms1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist2 =
        std::to_array<std::string_view>(
            {"3D9518A72EB02667A773B69DBA9E72E0F4A37423"});
    static constexpr auto kContexts2 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies2 =
        std::to_array<std::string_view>(
            {"manifest:sockets"});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "sockets.tcpServer",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist2),
                .dependencies = StaticSpan(kDependencies2),
                .contexts = StaticSpan(kContexts2),
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "sockets.tcpServer",
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
            {"manifest:sockets"});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "sockets.udp",
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
            {"chrome-untrusted://terminal/*"});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "sockets.udp",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .platforms = StaticSpan(kPlatforms1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist2 =
        std::to_array<std::string_view>(
            {"3D9518A72EB02667A773B69DBA9E72E0F4A37423"});
    static constexpr auto kContexts2 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies2 =
        std::to_array<std::string_view>(
            {"manifest:sockets"});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "sockets.udp",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist2),
                .dependencies = StaticSpan(kDependencies2),
                .contexts = StaticSpan(kContexts2),
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "sockets.udp",
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
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:storage"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "storage",
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
            {mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kContentScript});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:storage"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "storage.session",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .min_manifest_version = 3,
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
            {"permission:system.cpu"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "system.cpu",
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
            {"permission:system.display"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "system.display",
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
            {"chrome://os-settings/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "system.display",
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
                .name = "system.display",
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
            {"permission:system.memory"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "system.memory",
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
            {"permission:system.network"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "system.network",
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
            {"permission:system.storage"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "system.storage",
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
            {"permission:system.storage"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "system.storage.getAvailableCapacity",
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
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kPrivilegedWebPage,mojom::ContextType::kContentScript,mojom::ContextType::kOffscreenExtension,mojom::ContextType::kUnprivilegedExtension,mojom::ContextType::kUserScript});
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kHostedApp,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kSharedModule,Manifest::Type::kTheme,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "test",
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
            {"chrome://extensions/*","chrome://file-manager/*","chrome://webui-test/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "test",
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
            {"chrome-untrusted://api-test/*"});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "test",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts2),
                .match_patterns = StaticSpan(kMatches2),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kContexts3 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebPage});
    static constexpr auto kMatches3 =
        std::to_array<std::string_view>(
            {"<all_urls>"});
    static constexpr SimpleFeatureData kFeature3 = {
        .feature =
            {
                .name = "test",
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
                .name = "test",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "types",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
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
            {"permission:usb"});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "usb",
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
            {"permission:userScripts"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "userScripts",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .requires_delegated_availability_check = true,
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
            {"permission:virtualKeyboard"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "virtualKeyboard",
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
            {"permission:webRequest"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "webRequest",
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
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "webRequestInternal",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts0),
                .channel = version_info::Channel::STABLE,
                .is_internal = true,
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://add-supervision/*","chrome://chrome-signin/*","chrome://contextual-tasks/*","chrome://glic/*","chrome://glic-fre/*","chrome://glic-experimental-opt-in/*","chrome://graduation/*","chrome://home/*","chrome://mobilesetup/*","chrome://oobe/*","chrome://os-settings/*","chrome://parent-access/*","chrome://password-change/*","chrome://lock-reauth/*","chrome://skills/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "webRequestInternal",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
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
                .name = "webRequestInternal",
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
                .name = "webRequestInternal",
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
                .name = "webViewInternal",
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
            {"chrome://add-supervision/*","chrome://chrome-signin/*","chrome://contextual-tasks/*","chrome://glic/*","chrome://glic-fre/*","chrome://glic-experimental-opt-in/*","chrome://graduation/*","chrome://home/*","chrome://mobilesetup/*","chrome://oobe/*","chrome://os-settings/*","chrome://parent-access/*","chrome://password-change/*","chrome://lock-reauth/*","chrome://skills/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "webViewInternal",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
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
                .name = "webViewInternal",
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
                .name = "webViewInternal",
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
                .name = "webViewRequest",
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
            {"chrome://add-supervision/*","chrome://chrome-signin/*","chrome://contextual-tasks/*","chrome://glic/*","chrome://graduation/*","chrome://home/*","chrome://mobilesetup/*","chrome://oobe/*","chrome://os-settings/*","chrome://parent-access/*","chrome://skills/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "webViewRequest",
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
                .name = "webViewRequest",
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
            {mojom::ContextType::kWebPage});
    static constexpr auto kMatches0 =
        std::to_array<std::string_view>(
            {"https://chromewebstore.google.com/*"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "webstorePrivate",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts0),
                .match_patterns = StaticSpan(kMatches0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebPage});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"<all_urls>"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "webstorePrivate",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .match_patterns = StaticSpan(kMatches1),
                .channel = version_info::Channel::STABLE,
                .requires_delegated_availability_check = true,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "webstorePrivate",
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