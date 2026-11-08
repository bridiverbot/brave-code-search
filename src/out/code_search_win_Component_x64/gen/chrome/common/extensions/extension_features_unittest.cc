// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE FEATURES FILE:
//   ['../../chrome/test/data/extensions/extension_api_unittest/api_features.json']
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/extension_features_unittest.h"

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

void AddUnittestAPIFeatures(FeatureProvider* provider) {
  std::array<const Feature*, 36> static_features{};
  std::size_t static_feature_count = 0;
  {
    static constexpr auto kContexts =
        std::to_array<mojom::ContextType>(
            {mojom::ContextType::kContentScript,mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "alias_api",
                .source = StaticCString("alias_api_source"),
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
                .name = "alias_api.foo",
                .source = StaticCString("alias_api_source"),
            },
        .config =
            {
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
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "alias_api_source",
                .alias = StaticCString("alias_api"),
            },
        .config =
            {
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
    static constexpr auto kSessionTypes =
        std::to_array<mojom::FeatureSessionType>(
            {mojom::FeatureSessionType::kAutolaunchedKiosk});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "autolaunched_kiosk",
            },
        .config =
            {
                .session_types = StaticSpan(kSessionTypes),
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
            {mojom::ContextType::kContentScript,mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension});
    static constexpr auto kSessionTypes =
        std::to_array<mojom::FeatureSessionType>(
            {mojom::FeatureSessionType::kKiosk});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "kiosk_only",
            },
        .config =
            {
                .session_types = StaticSpan(kSessionTypes),
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
            {mojom::ContextType::kContentScript,mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension});
    static constexpr auto kSessionTypes =
        std::to_array<mojom::FeatureSessionType>(
            {mojom::FeatureSessionType::kKiosk,mojom::FeatureSessionType::kRegular});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "multiple_session_types",
            },
        .config =
            {
                .session_types = StaticSpan(kSessionTypes),
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
            {mojom::ContextType::kContentScript,mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension});
    static constexpr auto kSessionTypes =
        std::to_array<mojom::FeatureSessionType>(
            {mojom::FeatureSessionType::kRegular});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "non_kiosk",
            },
        .config =
            {
                .session_types = StaticSpan(kSessionTypes),
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
            {mojom::ContextType::kContentScript});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "parent1",
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
            {mojom::ContextType::kWebPage});
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"<all_urls>"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "parent1.child1",
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
            {mojom::ContextType::kContentScript});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "parent1.child2",
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
            {mojom::ContextType::kContentScript,mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "parent2",
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
                .name = "parent2.child3",
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
            {mojom::ContextType::kContentScript,mojom::ContextType::kUnprivilegedExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "parent2.child3.child.child",
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
            {mojom::ContextType::kContentScript,mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"api:parent1"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "parent3",
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
            {mojom::ContextType::kContentScript,mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "parent3.noparent",
                .no_parent = true,
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
            {mojom::ContextType::kContentScript,mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "parent3.noparent.child",
                .no_parent = true,
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
            {mojom::ContextType::kContentScript,mojom::ContextType::kPrivilegedExtension,mojom::ContextType::kUnprivilegedExtension});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "test1",
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
            {mojom::ContextType::kWebUi});
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"chrome://test/*"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "test10",
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
            {"chrome://other-test/*"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "test10.foo",
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
            {"chrome-untrusted://test/*"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "test11",
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
            {"chrome-untrusted://other-test/*"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "test11.foo",
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
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"<all_urls>"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "test2",
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
            {mojom::ContextType::kContentScript});
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"<all_urls>"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "test2.foo",
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
            {mojom::ContextType::kContentScript});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "test3",
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
            {mojom::ContextType::kWebPage,mojom::ContextType::kPrivilegedExtension});
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"<all_urls>"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "test3.foo",
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
            {"api:test3.foo"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "test4",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
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
            {mojom::ContextType::kUnprivilegedExtension});
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"api:test4"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "test4.foo",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
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
            {mojom::ContextType::kContentScript});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "test4.foo.foo",
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
            {mojom::ContextType::kWebPage});
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"http://foo.com/*"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "test5",
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
            {mojom::ContextType::kContentScript});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "test6",
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
                .name = "test6.foo",
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
            {mojom::ContextType::kWebPage});
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"http://foo.com/*"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "test7",
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
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"test7.foo"});
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"http://bar.com/*"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "test7.bar",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
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
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"test7"});
    static constexpr auto kMatches =
        std::to_array<std::string_view>(
            {"<all_urls>"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "test7.foo",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
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
            {"chrome://test/*","chrome://other-test/*"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "test8",
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
            {"chrome-untrusted://test/*","chrome-untrusted://other-test/*"});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "test9",
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
  provider->AddStaticFeatures(
      base::span(static_features).first(static_feature_count));

}

}  // namespace extensions