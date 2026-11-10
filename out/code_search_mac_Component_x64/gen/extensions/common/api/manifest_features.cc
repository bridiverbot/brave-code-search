// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE FEATURES FILE:
//   ['../../extensions/common/api/_manifest_features.json']
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/manifest_features.h"

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

void AddCoreManifestFeatures(FeatureProvider* provider) {
  std::array<const Feature*, 81> static_features{};
  std::size_t static_feature_count = 0;
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kSharedModule});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "about_page",
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
                .name = "action",
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
            {Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "action_handlers",
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
            {Manifest::Type::kLegacyPackagedApp,Manifest::Type::kHostedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "app",
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
                .name = "app.background",
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
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"5107DE9024C329EEA9C9A72D94C16723790C6422"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "app.content_security_policy",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
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
                .name = "author",
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
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"2FCBCE08B34CCA1728A85F1EFBD9A34DD2558B2E","05D1DBD6E8B9C4690FFA7D50E6F60C5290DC662A","0D209B5E4401BB8E7873B5AB5B1346A1CB067015","93CFDA3681E923AD7AB291CEDD98248396B5496C"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "automation",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
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
                .name = "back_forward_cache",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .location = SimpleFeature::Location::kComponent,
                .feature_flag = StaticCString("BackForwardCacheForComponentExtensionFrames"),
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kHostedApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "background",
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
                .name = "background.async_listener_registration",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .min_manifest_version = 3,
                .feature_flag = StaticCString("ExtensionAsyncListenerRegistration"),
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kHostedApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "background.page",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .max_manifest_version = 2,
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kLoginScreenExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "background.persistent",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .max_manifest_version = 2,
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kHostedApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "background.scripts",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .max_manifest_version = 2,
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
            {Manifest::Type::kExtension,Manifest::Type::kChromeOSSystemExtension,Manifest::Type::kLoginScreenExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "background.service_worker",
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
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
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
                .extension_types = StaticSpan(kExtensionTypes0),
                .platforms = StaticSpan(kPlatforms0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"75C7F4B720314B6CB1B5817CD86089DB95CD2461"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
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
                .allowlist = StaticSpan(kAllowlist1),
                .extension_types = StaticSpan(kExtensionTypes1),
                .platforms = StaticSpan(kPlatforms1),
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
        .feature_type = ComplexFeatureType::kManifest,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
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
                .name = "browser_action",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .max_manifest_version = 2,
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "chrome_url_overrides",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "chrome_url_overrides.activationmessage",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "chrome_url_overrides.keyboard",
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
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "commands",
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
    static constexpr auto kAllowlist0 =
        std::to_array<std::string_view>(
            {"950D13BB9B4794F4CA2A68D3597E5DFAA47C88AE","0EEB39B7A9A52CAAE6A072F83320435749B184A4","99717FF3BE1AFB5B343CDD024E53873C1783521B","4895B1DBB92D52488F8D9FFDF9CC7B95C7258C9A","A3880AA78DB0004DE841CC980959D8443F3A8E40","C8B53B3C2CC39CB504B19D990165684FF0CE880C"});
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "content_capabilities",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist0),
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "content_capabilities",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes1),
                .channel = version_info::Channel::CANARY,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "content_capabilities",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kManifest,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "content_scripts",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kDependencies1 =
        std::to_array<std::string_view>(
            {"behavior:imprivata_login_screen_extension"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "content_scripts",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies1),
                .extension_types = StaticSpan(kExtensionTypes1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "content_scripts",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kManifest,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kLoginScreenExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "content_security_policy",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kHostedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "converted_from_user_script",
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
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "cross_origin_embedder_policy",
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
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "cross_origin_opener_policy",
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
                .name = "current_locale",
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
                .name = "declarative_net_request",
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
                .name = "default_locale",
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
                .name = "description",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "devtools_page",
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
                .name = "differential_fingerprint",
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
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kHostedApp});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "display_in_launcher",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .location = SimpleFeature::Location::kComponent,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"64291898C201DAF15B090EC4B9EC270BEB6BE6FF","07BD6A765FFC289FF755D7CAB2893A40EC337FEC","896B85CC7E913E11C34892C1425A093C0701D386","11A01C82EF355E674E4F9728A801F5C3CB40D83F","F410C88469990EE7947450311D24B8AF2ADB2595"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "display_in_launcher",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist1),
                .extension_types = StaticSpan(kExtensionTypes1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "display_in_launcher",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kManifest,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kHostedApp});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "display_in_new_tab_page",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .location = SimpleFeature::Location::kComponent,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"64291898C201DAF15B090EC4B9EC270BEB6BE6FF","07BD6A765FFC289FF755D7CAB2893A40EC337FEC","896B85CC7E913E11C34892C1425A093C0701D386","11A01C82EF355E674E4F9728A801F5C3CB40D83F","F410C88469990EE7947450311D24B8AF2ADB2595"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "display_in_new_tab_page",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist1),
                .extension_types = StaticSpan(kExtensionTypes1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "display_in_new_tab_page",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kManifest,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kHostedApp,Manifest::Type::kSharedModule,Manifest::Type::kTheme});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "event_rules",
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
            {Manifest::Type::kSharedModule});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "export",
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
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kHostedApp,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "externally_connectable",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"93B7178E8C275515C38D4F43D9DF4648F0EA9B03","BABE7AD8BDBAFCD146D50861BF6981DA7AC2961C1982E5F78EDBD7A5FAA62259","1FC31C9D42DF1B51EA7648F73DF26400322999A8","C42CACC20C2A7F53A6F8DD2EE85F1FC2333DD6EB030BEA91B9CA9D9DDD6D570D"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "externally_connectable",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist1),
                .extension_types = StaticSpan(kExtensionTypes1),
                .platforms = StaticSpan(kPlatforms1),
                .location = SimpleFeature::Location::kPolicy,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "externally_connectable",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kManifest,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "file_handlers",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"2FC374607C2DF285634B67C64A2E356C607091C3","5F81F9FE1F4F499490466BC3861653FE72DE22E2BA8E4E5769DED9FB2C7EE2D0","3727DD3E564B6055387425027AD74C58784ACC15","04C5C683BDBBDA3120FDD1043E96E551185C57F38BE14EE17B5993F6AD4C592F","12E618C3C6E97495AAECF2AC12DEB082353241C6","0EEEFAA87E292CD986DD0528E90F9128A936B1C4E1C53E7FAA0244594C69DF94"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "file_handlers",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist1),
                .extension_types = StaticSpan(kExtensionTypes1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kExtensionTypes2 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms2 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "file_handlers",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes2),
                .platforms = StaticSpan(kPlatforms2),
                .min_manifest_version = 3,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "file_handlers",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kManifest,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
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
                .name = "homepage_url",
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
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "host_permissions",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .min_manifest_version = 3,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kDependencies1 =
        std::to_array<std::string_view>(
            {"behavior:imprivata_login_screen_extension"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "host_permissions",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies1),
                .extension_types = StaticSpan(kExtensionTypes1),
                .min_manifest_version = 3,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "host_permissions",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kManifest,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
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
                .name = "icon_variants",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .min_manifest_version = 3,
                .feature_flag = StaticCString("ExtensionIconVariants"),
                .channel = version_info::Channel::CANARY,
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
                .name = "icons",
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
                .name = "import",
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
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "incognito",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "incognito",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes1),
                .location = SimpleFeature::Location::kComponent,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "incognito",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kManifest,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
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
                .name = "input_components",
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
                .name = "key",
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
                .name = "kiosk",
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
                .name = "kiosk.always_update",
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
                .name = "kiosk.required_platform_version",
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
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "kiosk_enabled",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kSessionTypes1 =
        std::to_array<mojom::FeatureSessionType>(
            {mojom::FeatureSessionType::kKiosk});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "kiosk_enabled",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes1),
                .session_types = StaticSpan(kSessionTypes1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "kiosk_enabled",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kManifest,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "kiosk_only",
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
            {Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "kiosk_secondary_apps",
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
                .name = "manifest_version",
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
                .name = "message_serialization",
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
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"787000072C6FBB934AF5A42275CDE73FC977D995","E2ECC66FF61D50855BDCE96E37D84AF3727F9384AB4FD8A51354DFD51B05C8DF","2FC374607C2DF285634B67C64A2E356C607091C3","5F81F9FE1F4F499490466BC3861653FE72DE22E2BA8E4E5769DED9FB2C7EE2D0","5D3851BEFF680AB6D954B76678EFCCE834465C23","2FD69D0990FB2CF7ABF119ACB8B5405E1E9D5108ACC8EE60F8AEEC10EA3DB6C5","12E618C3C6E97495AAECF2AC12DEB082353241C6","0EEEFAA87E292CD986DD0528E90F9128A936B1C4E1C53E7FAA0244594C69DF94","3727DD3E564B6055387425027AD74C58784ACC15","04C5C683BDBBDA3120FDD1043E96E551185C57F38BE14EE17B5993F6AD4C592F","CBCC42ABED43A4B58FE3810E62AFFA010EB0349F","CDF9DD8503F39D9609C6C191E04450FCCEB41BCF9712F361A9013DEF8B9C7552"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "mime_types",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const ManifestFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist0 =
        std::to_array<std::string_view>(
            {"787000072C6FBB934AF5A42275CDE73FC977D995","E2ECC66FF61D50855BDCE96E37D84AF3727F9384AB4FD8A51354DFD51B05C8DF","2FC374607C2DF285634B67C64A2E356C607091C3","5F81F9FE1F4F499490466BC3861653FE72DE22E2BA8E4E5769DED9FB2C7EE2D0","12E618C3C6E97495AAECF2AC12DEB082353241C6","0EEEFAA87E292CD986DD0528E90F9128A936B1C4E1C53E7FAA0244594C69DF94","3727DD3E564B6055387425027AD74C58784ACC15","04C5C683BDBBDA3120FDD1043E96E551185C57F38BE14EE17B5993F6AD4C592F","CBCC42ABED43A4B58FE3810E62AFFA010EB0349F","CDF9DD8503F39D9609C6C191E04450FCCEB41BCF9712F361A9013DEF8B9C7552"});
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "mime_types_handler",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist0),
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "mime_types_handler",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes1),
                .channel = version_info::Channel::DEV,
            },
    };
    static constexpr auto kExtensionTypes2 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "mime_types_handler",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes2),
                .feature_flag = StaticCString("ApiMimeHandler"),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "mime_types_handler",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kManifest,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
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
                .name = "name",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "oauth2",
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
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"F57FDBA2822F21B82A4C417405ABC51241CC6426","C41AD9DCD670210295614257EF8C9945AD68D86E","64291898C201DAF15B090EC4B9EC270BEB6BE6FF","4B1D0E19C6C43C008C44A8278C8B5BFE15ABEB3C","F7FA7ABC1ECB89BA8EE6656847EFABBF43BB9BCA","07BD6A765FFC289FF755D7CAB2893A40EC337FEC","896B85CC7E913E11C34892C1425A093C0701D386","11A01C82EF355E674E4F9728A801F5C3CB40D83F","F410C88469990EE7947450311D24B8AF2ADB2595","A8208CCC87F8261AFAEB6B85D5E8D47372DDEA6B","A4577D8C2AF4CF26F40CBCA83FFA4251D6F6C8F8","EFCF5358672FEE04789FD2EC3638A67ADEDB6C8C"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "oauth2.auto_approve",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kHostedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "offline_enabled",
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
                .name = "optional_host_permissions",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kHostedApp,Manifest::Type::kPlatformApp,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "optional_permissions",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kHostedApp,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "options_page",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "options_ui",
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
                .name = "page_action",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .max_manifest_version = 2,
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kHostedApp,Manifest::Type::kPlatformApp,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "permissions",
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
                .name = "protocol_handlers",
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
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "replacement_web_app",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kHostedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "requirements",
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
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "sandbox",
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
                .name = "short_name",
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
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "sockets",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"3BC1ED0B3E6EFDC7BD4D3D1D75D44B52DEE0A226","016C557CDCA68B397FF4A18FC90127C08FCA46663BFB82C301F58734482E37E8","38C361D4A0726CE45D3572D65071B6BDB3092371","EF9B72731592D220DACCE1EA67179A9F4CB0B8AAD0BBDC87D3C4815E16461C81"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "sockets",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist1),
                .extension_types = StaticSpan(kExtensionTypes1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kExtensionTypes2 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms2 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr auto kSessionTypes2 =
        std::to_array<mojom::FeatureSessionType>(
            {mojom::FeatureSessionType::kKiosk});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "sockets",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes2),
                .session_types = StaticSpan(kSessionTypes2),
                .platforms = StaticSpan(kPlatforms2),
                .channel = version_info::Channel::DEV,
            },
    };
    static constexpr auto kAllowlist3 =
        std::to_array<std::string_view>(
            {"3D9518A72EB02667A773B69DBA9E72E0F4A37423"});
    static constexpr auto kExtensionTypes3 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kFeature3 = {
        .feature =
            {
                .name = "sockets",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist3),
                .extension_types = StaticSpan(kExtensionTypes3),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2, kFeature3});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "sockets",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kManifest,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
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
                .name = "trial_tokens",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "tts_engine",
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
                .name = "update_url",
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
                .name = "usb_printers",
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
                .name = "version",
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
                .name = "version_name",
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
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kHostedApp});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "web_accessible_resources",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "web_accessible_resources",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes1),
                .location = SimpleFeature::Location::kComponent,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kDependencies2 =
        std::to_array<std::string_view>(
            {"behavior:imprivata_login_screen_extension"});
    static constexpr auto kExtensionTypes2 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "web_accessible_resources",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies2),
                .extension_types = StaticSpan(kExtensionTypes2),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist3 =
        std::to_array<std::string_view>(
            {"1FC31C9D42DF1B51EA7648F73DF26400322999A8","C42CACC20C2A7F53A6F8DD2EE85F1FC2333DD6EB030BEA91B9CA9D9DDD6D570D"});
    static constexpr auto kExtensionTypes3 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr auto kPlatforms3 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature3 = {
        .feature =
            {
                .name = "web_accessible_resources",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist3),
                .extension_types = StaticSpan(kExtensionTypes3),
                .platforms = StaticSpan(kPlatforms3),
                .location = SimpleFeature::Location::kPolicy,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2, kFeature3});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "web_accessible_resources",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kManifest,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
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
                .name = "webview",
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