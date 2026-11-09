// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE FEATURES FILE:
//   ['../../brave/common/extensions/api/_api_features.json', '../../brave/common/extensions/api/_brave_talk_api_features.json']
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "brave/common/extensions/api/api_features.h"

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

void AddBraveAPIFeatures(FeatureProvider* provider) {
  std::array<const Feature*, 3> static_features{};
  std::size_t static_feature_count = 0;
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"chrome://newtab/*"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "braveTalk",
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
    static constexpr auto kAllowlist0 =
        std::to_array<std::string_view>(
            {"A321D47A2B4CA86898167A55CA8B2E02385EA7CD","46E9817CBF915C0D1F6BCCF916C42CC666FF1D64"});
    static constexpr auto kContexts0 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "braveTheme",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist0),
                .contexts = StaticSpan(kContexts0),
                .channel = version_info::Channel::STABLE,
                .component_extensions_auto_granted = false,
            },
    };
    static constexpr auto kContexts1 =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches1 =
        std::to_array<std::string_view>(
            {"chrome://welcome/*","chrome://settings/*","chrome://newtab/*","chrome://webcompat/*","chrome://wallet/*","chrome://wallet-panel.top-chrome/*","chrome://brave-shields.top-chrome/*","chrome://rewards-panel.top-chrome/*","chrome://playlist/*"});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "braveTheme",
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
                .name = "braveTheme",
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
            {"A321D47A2B4CA86898167A55CA8B2E02385EA7CD","1C66772675E903A8ABF502F539095C4F778A3D31"});
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kPrivilegedExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "webDiscovery",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .contexts = StaticSpan(kContexts),
                .channel = version_info::Channel::STABLE,
                .component_extensions_auto_granted = false,
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