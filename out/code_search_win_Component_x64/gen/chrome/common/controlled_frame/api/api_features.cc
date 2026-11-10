// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE FEATURES FILE:
//   ['../../chrome/common/controlled_frame/api/_api_features.json']
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/controlled_frame/api/api_features.h"

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

void AddControlledFrameAPIFeatures(FeatureProvider* provider) {
  std::array<const Feature*, 1> static_features{};
  std::size_t static_feature_count = 0;
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kWebPage});
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"<all_urls>"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "controlledFrameInternal",
            },
        .config =
            {
                .contexts = StaticSpan(kContexts),
                .match_patterns = StaticSpan(kMatches),
                .channel = version_info::Channel::STABLE,
                .is_internal = true,
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