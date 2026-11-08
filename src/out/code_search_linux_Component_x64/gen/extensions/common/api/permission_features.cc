// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE FEATURES FILE:
//   ['../../extensions/common/api/_permission_features.json']
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/permission_features.h"

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

void AddCorePermissionFeatures(FeatureProvider* provider) {
  std::array<const Feature*, 63> static_features{};
  std::size_t static_feature_count = 0;
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "activeTab",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "alarms",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "app.window.alpha",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::DEV,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"0F42756099D914A026DADFA182871C015735DD95","2D22CDB6583FD0A13758AEBE8B15E45208B4E9A7","A07A5B743CD82A1C2579DB77D353C98A23201EEF","F16F23C83C5F6DAD9B65A120448B34056DD80691","0F585FB1D0FDFBEBCE1FEB5E9DFFB6DA476B8C9B"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "app.window.alpha",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist1),
                .extension_types = StaticSpan(kExtensionTypes1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist2 =
        std::to_array<std::string_view>(
            {"06BE211D5F014BAB34BC22D9DDA09C63A81D828E","F94EE6AB36D6C6588670B2B01EB65212D9C64E33","B9EF10DDFEA11EF77873CC5009809E5037FC4C7A"});
    static constexpr auto kExtensionTypes2 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "app.window.alpha",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist2),
                .extension_types = StaticSpan(kExtensionTypes2),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "app.window.alpha",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kPermission,
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
                .name = "app.window.alwaysOnTop",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "app.window.fullscreen",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "app.window.fullscreen.overrideEsc",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"06BE211D5F014BAB34BC22D9DDA09C63A81D828E","F94EE6AB36D6C6588670B2B01EB65212D9C64E33","B9EF10DDFEA11EF77873CC5009809E5037FC4C7A"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "app.window.ime",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "app.window.shape",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "appview",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr auto kSessionTypes0 =
        std::to_array<mojom::FeatureSessionType>(
            {mojom::FeatureSessionType::kKiosk});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "audio",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .session_types = StaticSpan(kSessionTypes0),
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
                .name = "audio",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist1),
                .extension_types = StaticSpan(kExtensionTypes1),
                .platforms = StaticSpan(kPlatforms1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kExtensionTypes2 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms2 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "audio",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes2),
                .platforms = StaticSpan(kPlatforms2),
                .channel = version_info::Channel::DEV,
            },
    };
    static constexpr auto kAllowlist3 =
        std::to_array<std::string_view>(
            {"8C3741E3AF0B93B6E8E0DDD499BB0B74839EA578","E703483CEF33DEC18B4B6DD84B5C776FB9182BDB","A3BC37E2148AC4E99BE4B16AF9D42DD1E592BBBE","1C93BD3CF875F4A73C0B2A163BB8FBDA8B8B3D80","307E96539209F95A1A8740C713E6998A73657D96","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB"});
    static constexpr auto kExtensionTypes3 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms3 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature3 = {
        .feature =
            {
                .name = "audio",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist3),
                .extension_types = StaticSpan(kExtensionTypes3),
                .platforms = StaticSpan(kPlatforms3),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2, kFeature3});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "audio",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kPermission,
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
                .name = "audioCapture",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"3F50C3A83839D9C76334BCE81CDEC06174F266AF","39BE69F11F68E4EED080DA3DC2394F7885B7AFF9","FF78670081967CE21DB86A04AD94A0498F01E20A","0C0426C12F94156F330FFAF346A976BA8878DE78","AC4538682FCECD28587C7A0F80849F78F4872BC2","CCA4D85A67ADD65DA6C02E49EE3C080C54A8211C","05EBA3051DFCA6AF17070AEE5FE8C66322FF4738"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "audioCapture",
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
                .name = "audioCapture",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kPermission,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist0 =
        std::to_array<std::string_view>(
            {"1C93BD3CF875F4A73C0B2A163BB8FBDA8B8B3D80","A3BC37E2148AC4E99BE4B16AF9D42DD1E592BBBE","E703483CEF33DEC18B4B6DD84B5C776FB9182BDB","307E96539209F95A1A8740C713E6998A73657D96","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB","89715614FAA2B4C2853802D70261D2A9D0756FC8","61FF4757F9420B62B19BA5C96084649339DB31F5","F3013F58BED982D1BC75943792FF877E5D458672","1B7734733E207CCE5C33BFAA544CA89634BF881F","23EEC2E3B4F6A62F5E6C8556364F7B749F9A809C","D238B3D5DB5836AEC1733DA4237CF93B7F96F495","B2FEB5422C0F105AED7027E363886F1FE29F13F6","2F6F6FDB84E0290ABAB7A9D7571EB344821E5F12","5B9E39EA374B136CBE7AED2D872003107642EAD5","E0E94FB0C01FFB9CDC7A5F098C99B5A8D2F95902","52E0557059A7A28F74ED1D92DDD997E0CCD37806","A9A9FC0228ADF541F0334F22BEFB8F9C245B21D7"});
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::WIN_PLATFORM,Feature::MACOSX_PLATFORM,Feature::LINUX_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "bluetoothPrivate",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist0),
                .extension_types = StaticSpan(kExtensionTypes0),
                .platforms = StaticSpan(kPlatforms0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"75C7F4B720314B6CB1B5817CD86089DB95CD2461","A430CF8BD146137B32764433F69685A53BF11F03","F9AEB1FBFD91AFB39A16798763FB4707E5EB71C2","A547E19FA29B6371C507EFF218B4948AF7B8597B"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "bluetoothPrivate",
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
                .name = "bluetoothPrivate",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kPermission,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"1C93BD3CF875F4A73C0B2A163BB8FBDA8B8B3D80","A3BC37E2148AC4E99BE4B16AF9D42DD1E592BBBE","307E96539209F95A1A8740C713E6998A73657D96","E703483CEF33DEC18B4B6DD84B5C776FB9182BDB","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB","A9A9FC0228ADF541F0334F22BEFB8F9C245B21D7"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr auto kSessionTypes =
        std::to_array<mojom::FeatureSessionType>(
            {mojom::FeatureSessionType::kKiosk});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "cecPrivate",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
                .session_types = StaticSpan(kSessionTypes),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "clipboard",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::DEV,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "cookies",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "declarativeNetRequest",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "declarativeNetRequestFeedback",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "declarativeNetRequestWithHostAccess",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "declarativeWebRequest",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .max_manifest_version = 2,
                .channel = version_info::Channel::BETA,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "devtools",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "diagnostics",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::DEV,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"7AE714FFD394E073F0294CFA134C9F91DB5FBAA4","C7DA3A55C2355F994D3FDDAD120B426A0DF63843","75E3CFFFC530582C583E4690EF97C70B9C8423B7"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "diagnostics",
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
                .name = "diagnostics",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kPermission,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "dns",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::DEV,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"7AE714FFD394E073F0294CFA134C9F91DB5FBAA4","C7DA3A55C2355F994D3FDDAD120B426A0DF63843","75E3CFFFC530582C583E4690EF97C70B9C8423B7"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "dns",
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
                .name = "dns",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kPermission,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"54ECAB4579BDE8FDAF9B29ED335F9946EE504A52","D48C0036AF27646507019C471A3D7E3E3569B62E22140DDCA743629D7E29C396","E24F1786D842E91E74C27929B0B3715A4689A473","FCE3552DB7971D9A2003B5BAE26D4B156A7308E04A997F1503C9BF54DF5A33DB","A28C9619C4C41306FA5236FB4D94DA812F504DE8","1EF2013E750AAC5615BDC3D32E2D22279AD9A7FE732A9814B49DE8DFD3CE1B26"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "externally_connectable.all_urls",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"7910EAFDAF64B947E1CB31B333A9BD14CA556B6C","1C93BD3CF875F4A73C0B2A163BB8FBDA8B8B3D80","A3BC37E2148AC4E99BE4B16AF9D42DD1E592BBBE","8C3741E3AF0B93B6E8E0DDD499BB0B74839EA578","E703483CEF33DEC18B4B6DD84B5C776FB9182BDB","307E96539209F95A1A8740C713E6998A73657D96","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB","A9A9FC0228ADF541F0334F22BEFB8F9C245B21D7","D7986543275120831B39EF28D1327552FC343960","A291B26E088FA6BA53FFD72F0916F06EBA7C585A"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "feedbackPrivate",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "fileSystem",
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
            {"2FC374607C2DF285634B67C64A2E356C607091C3","5F81F9FE1F4F499490466BC3861653FE72DE22E2BA8E4E5769DED9FB2C7EE2D0","3727DD3E564B6055387425027AD74C58784ACC15","04C5C683BDBBDA3120FDD1043E96E551185C57F38BE14EE17B5993F6AD4C592F","12E618C3C6E97495AAECF2AC12DEB082353241C6","0EEEFAA87E292CD986DD0528E90F9128A936B1C4E1C53E7FAA0244594C69DF94","2B6C6A4A5940017146F3E58B7F90116206E84685","B6C2EFAB3EC3BF6EF03701408B6B09A67B2D0069","96FF2FFA5C9173C76D47184B3E86D267B37781DE","0136FCB13DB29FD5CD442F56E59E53B61F1DF96F","CBCC42ABED43A4B58FE3810E62AFFA010EB0349F","CDF9DD8503F39D9609C6C191E04450FCCEB41BCF9712F361A9013DEF8B9C7552"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "fileSystem",
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
                .name = "fileSystem",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kPermission,
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
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "fileSystem.directory",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "fileSystem.requestFileSystem",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "fileSystem.retainEntries",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "fileSystem.write",
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
            {"2FC374607C2DF285634B67C64A2E356C607091C3","5F81F9FE1F4F499490466BC3861653FE72DE22E2BA8E4E5769DED9FB2C7EE2D0","3727DD3E564B6055387425027AD74C58784ACC15","04C5C683BDBBDA3120FDD1043E96E551185C57F38BE14EE17B5993F6AD4C592F","12E618C3C6E97495AAECF2AC12DEB082353241C6","0EEEFAA87E292CD986DD0528E90F9128A936B1C4E1C53E7FAA0244594C69DF94"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "fileSystem.write",
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
                .name = "fileSystem.write",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kPermission,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "hid",
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
            {"D7CD4B3956B1F6E970E4AFCBCD4094B1EF4D07B9","D4EFCCC0CC612380762758BB96C7997224BD6395","4839A26B29CD1BD021B2E126EF6D28C9CB84018B","8F44FBB4474CCDF23450B166C9E83E85BD03AE24"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "hid",
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
                .name = "hid",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kPermission,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
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
                .name = "idle",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist0 =
        std::to_array<std::string_view>(
            {"E703483CEF33DEC18B4B6DD84B5C776FB9182BDB","A3BC37E2148AC4E99BE4B16AF9D42DD1E592BBBE","1C93BD3CF875F4A73C0B2A163BB8FBDA8B8B3D80","307E96539209F95A1A8740C713E6998A73657D96","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB","A9A9FC0228ADF541F0334F22BEFB8F9C245B21D7"});
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr auto kSessionTypes0 =
        std::to_array<mojom::FeatureSessionType>(
            {mojom::FeatureSessionType::kKiosk});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "mediaPerceptionPrivate",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist0),
                .extension_types = StaticSpan(kExtensionTypes0),
                .session_types = StaticSpan(kSessionTypes0),
                .platforms = StaticSpan(kPlatforms0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"3970B660353CA07962DAD1A5C1B75A7B87835943","E0DEFFD4518AF92D2DB1F575FF390EE35F58200C","B7B5CF88FE1AAE4B84B81B949A69AD18E512A33A"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "mediaPerceptionPrivate",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist1),
                .extension_types = StaticSpan(kExtensionTypes1),
                .platforms = StaticSpan(kPlatforms1),
                .channel = version_info::Channel::DEV,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "mediaPerceptionPrivate",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kPermission,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"2FC374607C2DF285634B67C64A2E356C607091C3","3727DD3E564B6055387425027AD74C58784ACC15","12E618C3C6E97495AAECF2AC12DEB082353241C6","3727DD3E564B6055387425027AD74C58784ACC15","C41AD9DCD670210295614257EF8C9945AD68D86E","7AE714FFD394E073F0294CFA134C9F91DB5FBAA4","C7DA3A55C2355F994D3FDDAD120B426A0DF63843","75E3CFFFC530582C583E4690EF97C70B9C8423B7","06BE211D5F014BAB34BC22D9DDA09C63A81D828E","CFBF7EE448FA48960FFDA7CEB30F7A21B26AA981","B9EF10DDFEA11EF77873CC5009809E5037FC4C7A","D2DAA9362153E8A5E3CF593E6DF4666421ABAD21","D7986543275120831B39EF28D1327552FC343960","A291B26E088FA6BA53FFD72F0916F06EBA7C585A","07BD6A765FFC289FF755D7CAB2893A40EC337FEC","896B85CC7E913E11C34892C1425A093C0701D386","11A01C82EF355E674E4F9728A801F5C3CB40D83F","F410C88469990EE7947450311D24B8AF2ADB2595","9E527CDA9D7C50844E8A5DB964A54A640AE48F98","DF52618D0B040D8A054D8348D2E84DDEEE5974E7","269D721F163E587BC53C6F83553BF9CE2BB143CD","6B55A5329E3F1F30F6032BDB20B2EB4378DBF767","C449A798C495E6CF7D6AF10162113D564E67AD12","01E9FFA9A8F3C18271FE91BEE46207F3B81755CC","97B23E01B2AA064E8332EE43A7A85C628AADC3F2","0EA6B717932AD64C469C1CCB6911457733295907","64444C82CD0FC7251F3F9839E164AC5E312F094351E438AC4941C88FEDBE4203","58B0C2968C335964D5433E89CA4D86628A0E3D4B","5F13EB3D4C8E5A012DF6F03BB4766532C41A07E23CC9F7963FEEB77BBBC7334D","3BC1ED0B3E6EFDC7BD4D3D1D75D44B52DEE0A226","016C557CDCA68B397FF4A18FC90127C08FCA46663BFB82C301F58734482E37E8","38C361D4A0726CE45D3572D65071B6BDB3092371","EF9B72731592D220DACCE1EA67179A9F4CB0B8AAD0BBDC87D3C4815E16461C81","B620CF4203315F9F2E046EDED22C7571A935958D","B206D8716769728278D2D300349C6CB7D7DE2EF9","2B6C6A4A5940017146F3E58B7F90116206E84685","B6C2EFAB3EC3BF6EF03701408B6B09A67B2D0069","96FF2FFA5C9173C76D47184B3E86D267B37781DE","0136FCB13DB29FD5CD442F56E59E53B61F1DF96F","CBCC42ABED43A4B58FE3810E62AFFA010EB0349F","75C7F4B720314B6CB1B5817CD86089DB95CD2461","46578A13607D38F1DC8E280C4F499FB0A2F9565C","898FB5A39687D210766B8998BA4530B99C9E6586","82F30B65397BC3E4ADE627BBD857AB8A58210648","C74B2AF138F9EDECD04D0965AB36CA66C8290466","1B1388598AC9A5608F43DE38316D6FB5FAD3574A","EC8EA268128FECE14CEC68B90686D87755D87083","AA1C88257F51F7A9AFB947720AACE8CA7E9CF85C"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "metricsPrivate",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "nativeMessaging",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .platforms = StaticSpan(kPlatforms0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::DESKTOP_ANDROID_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "nativeMessaging",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes1),
                .platforms = StaticSpan(kPlatforms1),
                .feature_flag = StaticCString("ApiDesktopAndroidNativeMessaging"),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "nativeMessaging",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kPermission,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
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
    static constexpr auto kSessionTypes0 =
        std::to_array<mojom::FeatureSessionType>(
            {mojom::FeatureSessionType::kAutolaunchedKiosk});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "networking.onc",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .session_types = StaticSpan(kSessionTypes0),
                .platforms = StaticSpan(kPlatforms0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"0DE0F05680A4A056BCEC864ED8DDA84296F82B40","1C93BD3CF875F4A73C0B2A163BB8FBDA8B8B3D80","A3BC37E2148AC4E99BE4B16AF9D42DD1E592BBBE","8C3741E3AF0B93B6E8E0DDD499BB0B74839EA578","E703483CEF33DEC18B4B6DD84B5C776FB9182BDB","307E96539209F95A1A8740C713E6998A73657D96","7AE714FFD394E073F0294CFA134C9F91DB5FBAA4","C7DA3A55C2355F994D3FDDAD120B426A0DF63843","75E3CFFFC530582C583E4690EF97C70B9C8423B7","23D8847AE3EE90122AA34657360AFEEC8B3E611B","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB","2F6F6FDB84E0290ABAB7A9D7571EB344821E5F12","5B9E39EA374B136CBE7AED2D872003107642EAD5","E0E94FB0C01FFB9CDC7A5F098C99B5A8D2F95902","52E0557059A7A28F74ED1D92DDD997E0CCD37806","61FF4757F9420B62B19BA5C96084649339DB31F5","6FB7E1B6C0247B687AC14772E87A117F5F5E4497","9834387FDA1F66A1B5CA06CB442137B556F12F2A","A9A9FC0228ADF541F0334F22BEFB8F9C245B21D7","F2BCE012B9B7E2D57902B5A4F954EB01A7E548FD","D467F51D3846ED6D137F9FD403AE11CE416CD995","3823525AD445E0025E449F964C20922996B0F97F","827B5D482FADCE120F4694AD0FA0680E3717C6EC","A430CF8BD146137B32764433F69685A53BF11F03","F9AEB1FBFD91AFB39A16798763FB4707E5EB71C2","A547E19FA29B6371C507EFF218B4948AF7B8597B","A4CC6F00ACF41015AF38F1D5C98E97C2B8B3B320","4E09F1C1EEC4D27F1F7DF18BA3643307107A7C41"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM,Feature::LINUX_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "networking.onc",
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
                .name = "networking.onc",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kPermission,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"0DE0F05680A4A056BCEC864ED8DDA84296F82B40","1C93BD3CF875F4A73C0B2A163BB8FBDA8B8B3D80","A3BC37E2148AC4E99BE4B16AF9D42DD1E592BBBE","8C3741E3AF0B93B6E8E0DDD499BB0B74839EA578","E703483CEF33DEC18B4B6DD84B5C776FB9182BDB","307E96539209F95A1A8740C713E6998A73657D96","7AE714FFD394E073F0294CFA134C9F91DB5FBAA4","C7DA3A55C2355F994D3FDDAD120B426A0DF63843","75E3CFFFC530582C583E4690EF97C70B9C8423B7","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB","2F6F6FDB84E0290ABAB7A9D7571EB344821E5F12","5B9E39EA374B136CBE7AED2D872003107642EAD5","E0E94FB0C01FFB9CDC7A5F098C99B5A8D2F95902","52E0557059A7A28F74ED1D92DDD997E0CCD37806","A9A9FC0228ADF541F0334F22BEFB8F9C245B21D7","A4CC6F00ACF41015AF38F1D5C98E97C2B8B3B320","4E09F1C1EEC4D27F1F7DF18BA3643307107A7C41"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM,Feature::LINUX_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "networkingPrivate",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "offscreen",
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
                .name = "offscreen",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies1),
                .extension_types = StaticSpan(kExtensionTypes1),
                .min_manifest_version = 3,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist2 =
        std::to_array<std::string_view>(
            {"5C825E850034490380BCB756D43ABB2CF537AA91","BAC4ABAB5445D64536BDE1C030C68961E820086FFE450DE13C3F83B2E830B123","EC3DE21E048B67319893889529354DFBFA96FD23","1F4D08BD4FBDAAD15E4EAD73E4ED9966E4276C636F9898810B30E614EED4AB03","A19608AC34215B127FF9D7C006D67F5C8ED8146D","168BEAE720DEAFA08E9369F5D3D1DFF43DC9B00723AAA65F8F2B170147D60676","6B748A5C005F21B7CBCF4170C2F883E435DEB511","F1B2CF2E3EE82CCEDF0B9C004A0F40763C8BDFBFFCB4FEEB8126CF9BB50D24EF","075FF17D52ED6E3C2E5EC4D99F188E7A25AF47EA","510E0C76D368F445731C223EFD9EFC97C27507DC6696EC3545F9A5A396BD9838"});
    static constexpr auto kExtensionTypes2 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr auto kPlatforms2 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "offscreen",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist2),
                .extension_types = StaticSpan(kExtensionTypes2),
                .platforms = StaticSpan(kPlatforms2),
                .location = SimpleFeature::Location::kPolicy,
                .min_manifest_version = 3,
                .channel = version_info::Channel::STABLE,
                .component_extensions_auto_granted = false,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "offscreen",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kPermission,
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
                .name = "omnibox.directInput",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .feature_flag = StaticCString("ExperimentalOmniboxLabs"),
                .channel = version_info::Channel::DEV,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "power",
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
                .name = "power",
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
                .name = "power",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kPermission,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "printerProvider",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "proxy",
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
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "proxy",
            },
        .config =
            {
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
                .name = "proxy",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kPermission,
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
                .name = "publicSuffix",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "runtime",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "serial",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "socket",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "storage",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"93B7178E8C275515C38D4F43D9DF4648F0EA9B03","BABE7AD8BDBAFCD146D50861BF6981DA7AC2961C1982E5F78EDBD7A5FAA62259","EC3DE21E048B67319893889529354DFBFA96FD23","1F4D08BD4FBDAAD15E4EAD73E4ED9966E4276C636F9898810B30E614EED4AB03","A19608AC34215B127FF9D7C006D67F5C8ED8146D","168BEAE720DEAFA08E9369F5D3D1DFF43DC9B00723AAA65F8F2B170147D60676","1FC31C9D42DF1B51EA7648F73DF26400322999A8","C42CACC20C2A7F53A6F8DD2EE85F1FC2333DD6EB030BEA91B9CA9D9DDD6D570D","6B748A5C005F21B7CBCF4170C2F883E435DEB511","F1B2CF2E3EE82CCEDF0B9C004A0F40763C8BDFBFFCB4FEEB8126CF9BB50D24EF","075FF17D52ED6E3C2E5EC4D99F188E7A25AF47EA","510E0C76D368F445731C223EFD9EFC97C27507DC6696EC3545F9A5A396BD9838","5C825E850034490380BCB756D43ABB2CF537AA91","BAC4ABAB5445D64536BDE1C030C68961E820086FFE450DE13C3F83B2E830B123","4B7E9789426EBD1BB3F99D72690DAE303FC042DF","728AA38F805D9F046321CA8CFE30621958B2F45C1920F3172B64A9A459DABFF5"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "storage",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist1),
                .extension_types = StaticSpan(kExtensionTypes1),
                .platforms = StaticSpan(kPlatforms1),
                .location = SimpleFeature::Location::kPolicy,
                .channel = version_info::Channel::STABLE,
                .component_extensions_auto_granted = false,
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
                .name = "storage",
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
            {"7FE4A999359A456C4B0FB7B7AD85CEA29CA50519","9C98730E21CB6AC1A7EA3CE3D528F8CD68BDBDA5BFCD008965F9AB1C1B0C82ED"});
    static constexpr auto kExtensionTypes3 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr SimpleFeatureData kFeature3 = {
        .feature =
            {
                .name = "storage",
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
                .name = "storage",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kPermission,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
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
                .name = "system.cpu",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "system.display",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "system.memory",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "system.network",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"DD87C93131FF8D3DE4E483DC1EB298D73C7223A6","13E3107CEF097680EF38F4C405F0014ECC2428C6","F14B6BF9F5B9205222E568B3C838D9E99C3F5032"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "system.network",
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
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "system.network",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes2),
                .channel = version_info::Channel::DEV,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "system.network",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kPermission,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "system.storage",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"6F9E349A0561C78A0D3F41496FE521C5151C7F71","C06709A259378015404ED20F75C7D08547E0F10B"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "u2fDevices",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "unlimitedStorage",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "usb",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "usbDevices",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"D7CD4B3956B1F6E970E4AFCBCD4094B1EF4D07B9","D4EFCCC0CC612380762758BB96C7997224BD6395","4839A26B29CD1BD021B2E126EF6D28C9CB84018B","8F44FBB4474CCDF23450B166C9E83E85BD03AE24"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "usbDevices",
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
                .name = "usbDevices",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kPermission,
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
                .name = "userScripts",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .min_manifest_version = 3,
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "videoCapture",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"A434B90223C3C52F2B69DB494736B63C612C774D"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "videoCapture",
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
                .name = "videoCapture",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kPermission,
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
    static constexpr auto kSessionTypes =
        std::to_array<mojom::FeatureSessionType>(
            {mojom::FeatureSessionType::kKiosk});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "virtualKeyboard",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .session_types = StaticSpan(kSessionTypes),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"3F50C3A83839D9C76334BCE81CDEC06174F266AF","06BE211D5F014BAB34BC22D9DDA09C63A81D828E","CFBF7EE448FA48960FFDA7CEB30F7A21B26AA981","F94EE6AB36D6C6588670B2B01EB65212D9C64E33","3E03D9B67FDD31B2438D1CF5070573415DCB3CBA","E703483CEF33DEC18B4B6DD84B5C776FB9182BDB","A3BC37E2148AC4E99BE4B16AF9D42DD1E592BBBE","1C93BD3CF875F4A73C0B2A163BB8FBDA8B8B3D80","307E96539209F95A1A8740C713E6998A73657D96","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB","A9A9FC0228ADF541F0334F22BEFB8F9C245B21D7"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "virtualKeyboardPrivate",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "webRequest",
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
                .name = "webRequest",
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
                .name = "webRequest",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kPermission,
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
                .name = "webRequestAuthProvider",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
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
                .name = "webRequestBlocking",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .max_manifest_version = 2,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "webRequestBlocking",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes1),
                .location = SimpleFeature::Location::kPolicy,
                .min_manifest_version = 3,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "webRequestBlocking",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kPermission,
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
                .name = "webview",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  provider->AddStaticFeatures(
      base::span(static_features).first(static_feature_count));

}

}  // namespace extensions