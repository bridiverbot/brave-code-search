// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE FEATURES FILE:
//   ['../../chrome/common/apps/platform_apps/api/_api_features.json']
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/apps/platform_apps/api/api_features.h"

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

void AddChromeAppsAPIFeatures(FeatureProvider* provider) {
  std::array<const Feature*, 7> static_features{};
  std::size_t static_feature_count = 0;
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"permission:arcAppsPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "arcAppsPrivate",
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
            {"permission:browser"});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "browser",
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
            {"permission:enterprise.remoteApps"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.remoteApps",
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
            {"permission:enterprise.remoteApps","behavior:imprivata_extension"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.remoteApps.setPinnedApps",
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
            {"permission:firstRunPrivate"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "firstRunPrivate",
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
            {"permission:mediaGalleries"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "mediaGalleries",
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
            {"permission:syncFileSystem"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "syncFileSystem",
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
  provider->AddStaticFeatures(
      base::span(static_features).first(static_feature_count));

}

}  // namespace extensions