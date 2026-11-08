// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE FEATURES FILE:
//   ['../../tools/json_schema_compiler/test/features_test.json', '../../tools/json_schema_compiler/test/features_test2.json']
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "tools/json_schema_compiler/test/features_compiler_test.h"

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

void CompilerTestAddFeaturesMethod(FeatureProvider* provider) {
  std::array<const Feature*, 26> static_features{};
  std::size_t static_feature_count = 0;
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "alias",
                .source = StaticCString("alias_source"),
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
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "alias_parent",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts),
                .channel = version_info::Channel::BETA,
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
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "alias_parent.child",
                .source = StaticCString("child_source"),
            },
        .config =
            {
                .contexts = StaticSpan(kContexts),
                .channel = version_info::Channel::BETA,
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
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "alias_source",
                .alias = StaticCString("alias"),
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
            {Manifest::Type::kExtension,Manifest::Type::kHostedApp,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp,Manifest::Type::kSharedModule,Manifest::Type::kTheme,Manifest::Type::kLoginScreenExtension,Manifest::Type::kChromeOSSystemExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "allEnum",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .channel = version_info::Channel::BETA,
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
            {"permission:alpha"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "alpha",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .contexts = StaticSpan(kContexts),
                .max_manifest_version = 1,
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"ABCDEF0123456789ABCDEF0123456789ABCDEF01","10FEDCBA9876543210FEDCBA9876543210FEDCBA"});
    static constexpr auto kBlocklist =
        std::to_array<std::string_view>(
            {"0123456789ABCDEF0123456789ABCDEF01234567","76543210FEDCBA9876543210FEDCBA9876543210"});
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "beta",
            },
        .config =
            {
                .blocklist = StaticSpan(kBlocklist),
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .location = SimpleFeature::Location::kComponent,
                .channel = version_info::Channel::DEV,
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
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "child_source",
                .alias = StaticCString("alias_parent.child"),
            },
        .config =
            {
                .contexts = StaticSpan(kContexts),
                .channel = version_info::Channel::BETA,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist0 =
        std::to_array<std::string_view>(
            {"0123456789ABCDEF0123456789ABCDEF01234567"});
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "complex",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist0),
                .extension_types = StaticSpan(kExtensionTypes0),
                .contexts = StaticSpan(kContexts0),
                .channel = version_info::Channel::BETA,
                .developer_mode_only = false,
                .disallow_for_service_workers = false,
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "complex",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes1),
                .contexts = StaticSpan(kContexts1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "complex",
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
            {"permission:complex.child"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "complex.child",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .platforms = StaticSpan(kPlatforms),
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
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "complex_alias",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts0),
                .channel = version_info::Channel::BETA,
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "complex_alias",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .channel = version_info::Channel::DEV,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "complex_alias",
                .source = StaticCString("complex_alias_source"),
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
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "complex_alias_source",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts0),
                .channel = version_info::Channel::BETA,
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "complex_alias_source",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts1),
                .channel = version_info::Channel::DEV,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "complex_alias_source",
                .alias = StaticCString("complex_alias"),
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
            {mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kWebUi});
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"*://example.com/*"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "delta",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts),
                .match_patterns = StaticSpan(kMatches),
                .min_manifest_version = 2,
                .channel = version_info::Channel::DEV,
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
                .name = "empty_contexts",
            },
        .config =
            {
                .contexts = StaticSpan<mojom::ContextType>(),
                .channel = version_info::Channel::BETA,
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
            {"permission:gamma"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::WIN_PLATFORM,Feature::MACOSX_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "gamma",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::BETA,
                .is_internal = true,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"0123456789ABCDEF0123456789ABCDEF01234567"});
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::LINUX_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "gamma.child",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
                .contexts = StaticSpan(kContexts),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::BETA,
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
            {mojom::ContextType::kUnprivilegedExtension});
    static constexpr auto kMatches0 =
        std::to_array<std::string_view>(
            {"*://complex.example/*"});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "gamma.complex_unparented",
                .no_parent = true,
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
            {mojom::ContextType::kUnprivilegedExtension});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"*://complex.example/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "gamma.complex_unparented",
                .no_parent = true,
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
                .name = "gamma.complex_unparented",
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
    static constexpr auto kBlocklist =
        std::to_array<std::string_view>(
            {"0123456789ABCDEF0123456789ABCDEF01234567"});
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kUnprivilegedExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "gamma.unparented",
                .no_parent = true,
            },
        .config =
            {
                .blocklist = StaticSpan(kBlocklist),
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
            {mojom::ContextType::kWebPage});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "omega",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts),
                .min_manifest_version = 2,
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
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "parent_source",
                .alias = StaticCString("parent_source_alias"),
            },
        .config =
            {
                .contexts = StaticSpan(kContexts),
                .channel = version_info::Channel::BETA,
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
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "parent_source.child",
                .alias = StaticCString("parent_source_alias"),
            },
        .config =
            {
                .contexts = StaticSpan(kContexts),
                .channel = version_info::Channel::BETA,
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
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "parent_source.child_source",
                .alias = StaticCString("parent_source_child_alias"),
            },
        .config =
            {
                .contexts = StaticSpan(kContexts),
                .channel = version_info::Channel::BETA,
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
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "parent_source_alias",
                .source = StaticCString("parent_source"),
            },
        .config =
            {
                .contexts = StaticSpan(kContexts),
                .channel = version_info::Channel::BETA,
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
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "parent_source_child_alias",
                .source = StaticCString("parent_source.child_source"),
            },
        .config =
            {
                .contexts = StaticSpan(kContexts),
                .channel = version_info::Channel::BETA,
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
            {"chrome-untrusted://foo/*"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "pi",
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
            {mojom::ContextType::kWebPage});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "requires_delegated_availability_check",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts),
                .channel = version_info::Channel::BETA,
                .requires_delegated_availability_check = true,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  provider->AddStaticFeatures(
      base::span(static_features).first(static_feature_count));

}

}  // namespace extensions