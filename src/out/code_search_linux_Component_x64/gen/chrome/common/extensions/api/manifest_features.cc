// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE FEATURES FILE:
//   ['../../chrome/common/extensions/api/_manifest_features.json']
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/manifest_features.h"

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

void AddChromeManifestFeatures(FeatureProvider* provider) {
  std::array<const Feature*, 11> static_features{};
  std::size_t static_feature_count = 0;
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLegacyPackagedApp,Manifest::Type::kHostedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "app.launch",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const ManifestFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kHostedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "app.linked_icons",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const ManifestFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::WIN_PLATFORM,Feature::MACOSX_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "chrome_settings_overrides",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const ManifestFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kHostedApp,Manifest::Type::kPlatformApp,Manifest::Type::kTheme});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "minimum_chrome_version",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const ManifestFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "natively_connectable",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::DEV,
            },
    };
    [[clang::no_destroy]] static constinit const ManifestFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "omnibox",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const ManifestFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kHostedApp,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kSharedModule,Manifest::Type::kTheme,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "platforms",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const ManifestFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "side_panel",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .min_manifest_version = 3,
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const ManifestFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "storage",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const ManifestFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kTheme});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "theme",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const ManifestFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "url_handlers",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const ManifestFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  provider->AddStaticFeatures(
      base::span(static_features).first(static_feature_count));

}

}  // namespace extensions