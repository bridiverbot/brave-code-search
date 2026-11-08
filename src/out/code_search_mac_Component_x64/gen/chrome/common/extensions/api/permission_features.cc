// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE FEATURES FILE:
//   ['../../chrome/common/extensions/api/_permission_features.json']
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/permission_features.h"

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

void AddChromePermissionFeatures(FeatureProvider* provider) {
  std::array<const Feature*, 95> static_features{};
  std::size_t static_feature_count = 0;
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
                .name = "accessibilityFeatures.modify",
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
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "accessibilityFeatures.read",
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
            {"0EA6B717932AD64C469C1CCB6911457733295907","64444C82CD0FC7251F3F9839E164AC5E312F094351E438AC4941C88FEDBE4203","58B0C2968C335964D5433E89CA4D86628A0E3D4B","5F13EB3D4C8E5A012DF6F03BB4766532C41A07E23CC9F7963FEEB77BBBC7334D"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLegacyPackagedApp});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "accessibilityFeatures.read",
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
                .name = "accessibilityFeatures.read",
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
            {"3CD7D4ABEB04E8C4D20552C60B8B20983DD10A2F"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
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
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .location = SimpleFeature::Location::kComponent,
                .channel = version_info::Channel::STABLE,
                .component_extensions_auto_granted = false,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"EE17C698905F7F2E6DDC87C9C30F11E164C829F4","C50DC2AC31D826BC977032AF12DE4694CC8467DC","AE27D69DBE571F4B1694F05C89B710C646792231","5107DE9024C329EEA9C9A72D94C16723790C6422"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "activityLogPrivate",
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
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "autofillPrivate",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .location = SimpleFeature::Location::kComponent,
                .channel = version_info::Channel::UNKNOWN,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"05D1DBD6E8B9C4690FFA7D50E6F60C5290DC662A","0D209B5E4401BB8E7873B5AB5B1346A1CB067015","93CFDA3681E923AD7AB291CEDD98248396B5496C"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "autotestPrivate",
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
            {Manifest::Type::kPlatformApp,Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kHostedApp});
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
                .name = "bookmarks",
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
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "brailleDisplayPrivate",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .location = SimpleFeature::Location::kComponent,
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
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "browsingData",
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
            {"2462D64ACB971A7E708757159C2B17761D4FF54A","3010EF507AFEF487EEA9CDE2930EC94867C60936","ABAABC5F49E022A76CBB12972A53B58354C04AC6"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "chromePrivate",
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
            {"1C93BD3CF875F4A73C0B2A163BB8FBDA8B8B3D80","A3BC37E2148AC4E99BE4B16AF9D42DD1E592BBBE","8C3741E3AF0B93B6E8E0DDD499BB0B74839EA578","E703483CEF33DEC18B4B6DD84B5C776FB9182BDB","307E96539209F95A1A8740C713E6998A73657D96","A291B26E088FA6BA53FFD72F0916F06EBA7C585A","D7986543275120831B39EF28D1327552FC343960","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB","B620CF4203315F9F2E046EDED22C7571A935958D","B206D8716769728278D2D300349C6CB7D7DE2EF9","8EBDF73405D0B84CEABB8C7513C9B9FA9F1DC2CE","72445193EB86716465275D4E2E84DACF47558FCF","51E46A03961884A4BA74CE7CA30A75CC6F360D74","6844C0E4DF3034BD3ED04E7BD957C7DE0EA83443","2B6C6A4A5940017146F3E58B7F90116206E84685","B6C2EFAB3EC3BF6EF03701408B6B09A67B2D0069","96FF2FFA5C9173C76D47184B3E86D267B37781DE","0136FCB13DB29FD5CD442F56E59E53B61F1DF96F","9834387FDA1F66A1B5CA06CB442137B556F12F2A","930F7D9989A5FBCDCCD7D85BB5C3B7006C24D91D","A9A9FC0228ADF541F0334F22BEFB8F9C245B21D7","46578A13607D38F1DC8E280C4F499FB0A2F9565C","898FB5A39687D210766B8998BA4530B99C9E6586","82F30B65397BC3E4ADE627BBD857AB8A58210648","C74B2AF138F9EDECD04D0965AB36CA66C8290466","754A9CB3C8623093180E10CF4C3AB64837179E68","CF6B19571334F49878327D557597D23B1458AA39"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "chromeosInfoPrivate",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kHostedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "clipboardRead",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kHostedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "clipboardWrite",
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
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "commandLinePrivate",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .location = SimpleFeature::Location::kComponent,
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
            {"2FCBCE08B34CCA1728A85F1EFBD9A34DD2558B2E","75C7F4B720314B6CB1B5817CD86089DB95CD2461"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "commands.accessibility",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "contentSettings",
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
                .name = "contextMenus",
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
            {"37358CF0945B962A2F3783C2F8DB929B169818A4"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "contextualTasksPrivate",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .location = SimpleFeature::Location::kComponent,
                .feature_flag = StaticCString("ApiContextualTasksPrivate"),
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
            {"0EA6B717932AD64C469C1CCB6911457733295907","64444C82CD0FC7251F3F9839E164AC5E312F094351E438AC4941C88FEDBE4203","58B0C2968C335964D5433E89CA4D86628A0E3D4B","5F13EB3D4C8E5A012DF6F03BB4766532C41A07E23CC9F7963FEEB77BBBC7334D","3BC1ED0B3E6EFDC7BD4D3D1D75D44B52DEE0A226","016C557CDCA68B397FF4A18FC90127C08FCA46663BFB82C301F58734482E37E8","38C361D4A0726CE45D3572D65071B6BDB3092371","EF9B72731592D220DACCE1EA67179A9F4CB0B8AAD0BBDC87D3C4815E16461C81","06BE211D5F014BAB34BC22D9DDA09C63A81D828E","1B1388598AC9A5608F43DE38316D6FB5FAD3574A"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "crashReportPrivate",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "debugger",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"AE27D69DBE571F4B1694F05C89B710C646792231"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "debugger",
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
                .name = "debugger",
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
                .name = "declarativeContent",
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
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "desktopCapture",
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
            {"AE27D69DBE571F4B1694F05C89B710C646792231","FA0501B579070BB9CBD4FCAEC8CB0EDF22BA2F04","4A4EA121622FCA3D78ED2AB534197F43D7189EE0","9FDE6E7F06FCFA11D9A05041C7FF6D8AE662F5D1","50B4A905D522C06E27CA6D099E3E54BDA1F152C5","BA0C8BB92084C9741312D90D3EA882526853455F","5F57A9AE8DFF5D6BB09DF8606270402612E871E5"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "developerPrivate",
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
            {"C811DB5C295612ABA7EBB8380EAE8380E30800D9"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "dictationPrivate",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .location = SimpleFeature::Location::kComponent,
                .channel = version_info::Channel::STABLE,
                .component_extensions_auto_granted = false,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "documentScan",
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
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "downloads",
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
                .name = "downloads.open",
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
                .name = "downloads.shelf",
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
                .name = "downloads.ui",
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
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "enterprise.deviceAttributes",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .platforms = StaticSpan(kPlatforms0),
                .location = SimpleFeature::Location::kPolicy,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kDependencies1 =
        std::to_array<std::string_view>(
            {"behavior:imprivata_login_screen_extension"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "enterprise.deviceAttributes",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies1),
                .extension_types = StaticSpan(kExtensionTypes1),
                .platforms = StaticSpan(kPlatforms1),
                .location = SimpleFeature::Location::kPolicy,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist2 =
        std::to_array<std::string_view>(
            {"4B7E9789426EBD1BB3F99D72690DAE303FC042DF"});
    static constexpr auto kExtensionTypes2 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr auto kPlatforms2 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "enterprise.deviceAttributes",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist2),
                .extension_types = StaticSpan(kExtensionTypes2),
                .platforms = StaticSpan(kPlatforms2),
                .location = SimpleFeature::Location::kPolicy,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "enterprise.deviceAttributes",
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
                .name = "enterprise.hardwarePlatform",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .location = SimpleFeature::Location::kPolicy,
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
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr auto kSessionTypes =
        std::to_array<mojom::FeatureSessionType>(
            {mojom::FeatureSessionType::kKiosk});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.kioskInput",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .session_types = StaticSpan(kSessionTypes),
                .platforms = StaticSpan(kPlatforms),
                .location = SimpleFeature::Location::kPolicy,
                .feature_flag = StaticCString("ApiEnterpriseKioskInput"),
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
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.login",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .location = SimpleFeature::Location::kPolicy,
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
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "enterprise.networkingAttributes",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .platforms = StaticSpan(kPlatforms0),
                .location = SimpleFeature::Location::kPolicy,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kDependencies1 =
        std::to_array<std::string_view>(
            {"behavior:imprivata_login_screen_extension"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "enterprise.networkingAttributes",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies1),
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
                .name = "enterprise.networkingAttributes",
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
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp,Manifest::Type::kLegacyPackagedApp});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "enterprise.platformKeys",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .platforms = StaticSpan(kPlatforms0),
                .location = SimpleFeature::Location::kPolicy,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kDependencies1 =
        std::to_array<std::string_view>(
            {"behavior:imprivata_login_screen_extension"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "enterprise.platformKeys",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies1),
                .extension_types = StaticSpan(kExtensionTypes1),
                .platforms = StaticSpan(kPlatforms1),
                .location = SimpleFeature::Location::kPolicy,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist2 =
        std::to_array<std::string_view>(
            {"EC8EA268128FECE14CEC68B90686D87755D87083"});
    static constexpr auto kExtensionTypes2 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms2 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "enterprise.platformKeys",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist2),
                .extension_types = StaticSpan(kExtensionTypes2),
                .platforms = StaticSpan(kPlatforms2),
                .location = SimpleFeature::Location::kExternalComponent,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist3 =
        std::to_array<std::string_view>(
            {"A4CC6F00ACF41015AF38F1D5C98E97C2B8B3B320","4E09F1C1EEC4D27F1F7DF18BA3643307107A7C41"});
    static constexpr auto kExtensionTypes3 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms3 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature3 = {
        .feature =
            {
                .name = "enterprise.platformKeys",
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
                .name = "enterprise.platformKeys",
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
            {"657FEC7E77355CA205B0E226586621F86B33F611","5894126C625EF31852F215ED301A5FF1F9B7D026","8DAE23A10703C926B21862B2F318FB4E110B17BD","34412790FC81BC9B563CBE599ED10ABF26B209F7","7F782E724FF51789B54DA82C7363DAB5043C1677","2C18988BCDC297196D5D6893005175DA1BC1E893"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.platformKeysPrivate",
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
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"031E5E4A54C39E4F46E11CE643584E9187915908","349E89FE0296161007623C0B4096B617D7CECD54","18B761AA5B58FA89E596EB7996B4C92C86775C7F","2012C0122892D332325339998251D1CC3CAE396A","31367E6C4D69B90D866289492A307C205AF8A32F","50B8ECD18A36937668D1FCA9CEEE668BC25C39CC","86D63D90308742AA65B8B29AE2D39FED2D6DC310"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.reportingPrivate",
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
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"31367E6C4D69B90D866289492A307C205AF8A32F","50B8ECD18A36937668D1FCA9CEEE668BC25C39CC","86D63D90308742AA65B8B29AE2D39FED2D6DC310"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.reportingPrivate.onDataMaskingRulesTriggered",
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
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "enterprise.webrtc",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .location = SimpleFeature::Location::kPolicy,
                .feature_flag = StaticCString("ApiEnterpriseWebrtc"),
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
                .name = "experimental",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .command_line_switch = StaticCString("experimental-extension-apis"),
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
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "experimentalActor",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .command_line_switch = StaticCString("extension-actor-api"),
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
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "experimentalAiData",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .command_line_switch = StaticCString("extension-ai-data-collection"),
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
                .name = "favicon",
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
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "fontSettings",
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
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "gcm",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kHostedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "geolocation",
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
            {"56D158B3E10A304CB840CD4C28C7AF74A4B11433"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::DESKTOP_ANDROID_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "glicPrivate",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .location = SimpleFeature::Location::kComponent,
                .feature_flag = StaticCString("ApiGlicPrivate"),
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
            {"56D158B3E10A304CB840CD4C28C7AF74A4B11433"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "glicPrivate.invoke",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .location = SimpleFeature::Location::kComponent,
                .feature_flag = StaticCString("ApiGlicPrivate"),
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
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "history",
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
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "identity",
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
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "identity.email",
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
            {"A291B26E088FA6BA53FFD72F0916F06EBA7C585A","D7986543275120831B39EF28D1327552FC343960","BCC85C0D7F85897F2699974421EA402144C35C0C","B620CF4203315F9F2E046EDED22C7571A935958D","B206D8716769728278D2D300349C6CB7D7DE2EF9","2B6C6A4A5940017146F3E58B7F90116206E84685","B6C2EFAB3EC3BF6EF03701408B6B09A67B2D0069","96FF2FFA5C9173C76D47184B3E86D267B37781DE","0136FCB13DB29FD5CD442F56E59E53B61F1DF96F","754A9CB3C8623093180E10CF4C3AB64837179E68","CF6B19571334F49878327D557597D23B1458AA39"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "imageWriterPrivate",
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
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"632DD33AD22AD33ED4197BB6F191F3841C52A9D6"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "indigoPrivate",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
                .location = SimpleFeature::Location::kComponent,
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
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "input",
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
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "languageSettingsPrivate",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .platforms = StaticSpan(kPlatforms0),
                .location = SimpleFeature::Location::kComponent,
                .channel = version_info::Channel::UNKNOWN,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"371AC6869D2138CE58123741E69F67469206909F"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "languageSettingsPrivate",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist1),
                .extension_types = StaticSpan(kExtensionTypes1),
                .platforms = StaticSpan(kPlatforms1),
                .location = SimpleFeature::Location::kComponent,
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
        .feature_type = ComplexFeatureType::kPermission,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"6A4A0389E8D47118E96E6221B0B7221CA3715801","EC8EA268128FECE14CEC68B90686D87755D87083","AA1C88257F51F7A9AFB947720AACE8CA7E9CF85C","A4577D8C2AF4CF26F40CBCA83FFA4251D6F6C8F8","EFCF5358672FEE04789FD2EC3638A67ADEDB6C8C","A8208CCC87F8261AFAEB6B85D5E8D47372DDEA6B"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "lockWindowFullscreenPrivate",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .channel = version_info::Channel::STABLE,
                .component_extensions_auto_granted = false,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"behavior:imprivata_extension"});
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLoginScreenExtension});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "login",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .extension_types = StaticSpan(kExtensionTypes0),
                .platforms = StaticSpan(kPlatforms0),
                .location = SimpleFeature::Location::kPolicy,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"93B7178E8C275515C38D4F43D9DF4648F0EA9B03","7FE4A999359A456C4B0FB7B7AD85CEA29CA50519","3F5995FE79A861F019C6F093BEF98D73FA9D3A5F","8ECFC754A70BE499325FA4BB705E62EFEEC1BC80","C03440D5E6161ED58738ABA11586B1DB4B4DCA8A","4B7E9789426EBD1BB3F99D72690DAE303FC042DF"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLoginScreenExtension});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "login",
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
    static constexpr auto kAllowlist2 =
        std::to_array<std::string_view>(
            {"ECD28F2B60BDB3B4E566D6C60BD88BE0774044C1"});
    static constexpr auto kExtensionTypes2 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms2 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "login",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist2),
                .extension_types = StaticSpan(kExtensionTypes2),
                .platforms = StaticSpan(kPlatforms2),
                .location = SimpleFeature::Location::kPolicy,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "login",
            },
        .features = StaticSpan(kFeatures),
        .feature_type = ComplexFeatureType::kPermission,
    };
    [[clang::no_destroy]] static constinit const ComplexFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"behavior:imprivata_extension"});
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLoginScreenExtension});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "loginScreenStorage",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .extension_types = StaticSpan(kExtensionTypes0),
                .platforms = StaticSpan(kPlatforms0),
                .location = SimpleFeature::Location::kPolicy,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"7FE4A999359A456C4B0FB7B7AD85CEA29CA50519","3F5995FE79A861F019C6F093BEF98D73FA9D3A5F"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLoginScreenExtension});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "loginScreenStorage",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist1),
                .extension_types = StaticSpan(kExtensionTypes1),
                .platforms = StaticSpan(kPlatforms1),
                .location = SimpleFeature::Location::kPolicy,
                .channel = version_info::Channel::CANARY,
            },
    };
    static constexpr auto kAllowlist2 =
        std::to_array<std::string_view>(
            {"93B7178E8C275515C38D4F43D9DF4648F0EA9B03","4B7E9789426EBD1BB3F99D72690DAE303FC042DF","36F5326E7683E204CE9CE1532093D8BB9CD5D280"});
    static constexpr auto kExtensionTypes2 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLoginScreenExtension});
    static constexpr auto kPlatforms2 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "loginScreenStorage",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist2),
                .extension_types = StaticSpan(kExtensionTypes2),
                .platforms = StaticSpan(kPlatforms2),
                .location = SimpleFeature::Location::kPolicy,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "loginScreenStorage",
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
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "loginState",
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
            {"93B7178E8C275515C38D4F43D9DF4648F0EA9B03","BABE7AD8BDBAFCD146D50861BF6981DA7AC2961C1982E5F78EDBD7A5FAA62259","EC3DE21E048B67319893889529354DFBFA96FD23","1F4D08BD4FBDAAD15E4EAD73E4ED9966E4276C636F9898810B30E614EED4AB03","A19608AC34215B127FF9D7C006D67F5C8ED8146D","168BEAE720DEAFA08E9369F5D3D1DFF43DC9B00723AAA65F8F2B170147D60676","6B748A5C005F21B7CBCF4170C2F883E435DEB511","F1B2CF2E3EE82CCEDF0B9C004A0F40763C8BDFBFFCB4FEEB8126CF9BB50D24EF","075FF17D52ED6E3C2E5EC4D99F188E7A25AF47EA","510E0C76D368F445731C223EFD9EFC97C27507DC6696EC3545F9A5A396BD9838","5C825E850034490380BCB756D43ABB2CF537AA91","BAC4ABAB5445D64536BDE1C030C68961E820086FFE450DE13C3F83B2E830B123","4B7E9789426EBD1BB3F99D72690DAE303FC042DF","728AA38F805D9F046321CA8CFE30621958B2F45C1920F3172B64A9A459DABFF5"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "loginState",
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
    static constexpr auto kPlatforms2 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "loginState",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies2),
                .extension_types = StaticSpan(kExtensionTypes2),
                .platforms = StaticSpan(kPlatforms2),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist3 =
        std::to_array<std::string_view>(
            {"EC3DE21E048B67319893889529354DFBFA96FD23","1F4D08BD4FBDAAD15E4EAD73E4ED9966E4276C636F9898810B30E614EED4AB03","A19608AC34215B127FF9D7C006D67F5C8ED8146D","168BEAE720DEAFA08E9369F5D3D1DFF43DC9B00723AAA65F8F2B170147D60676"});
    static constexpr auto kExtensionTypes3 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms3 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature3 = {
        .feature =
            {
                .name = "loginState",
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
                .name = "loginState",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "management",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"AE27D69DBE571F4B1694F05C89B710C646792231","5107DE9024C329EEA9C9A72D94C16723790C6422","8C0B1873FFFB65E4D0F4D772879F7304CEF125C2","FA0501B579070BB9CBD4FCAEC8CB0EDF22BA2F04","EE17C698905F7F2E6DDC87C9C30F11E164C829F4","90113DA9516526D24DAF156C629CC41C049E8882","4A4EA121622FCA3D78ED2AB534197F43D7189EE0","9FDE6E7F06FCFA11D9A05041C7FF6D8AE662F5D1","50B4A905D522C06E27CA6D099E3E54BDA1F152C5","BA0C8BB92084C9741312D90D3EA882526853455F","5F57A9AE8DFF5D6BB09DF8606270402612E871E5","46578A13607D38F1DC8E280C4F499FB0A2F9565C","898FB5A39687D210766B8998BA4530B99C9E6586","82F30B65397BC3E4ADE627BBD857AB8A58210648","C74B2AF138F9EDECD04D0965AB36CA66C8290466"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "management",
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
            {Manifest::Type::kPlatformApp});
    static constexpr auto kSessionTypes2 =
        std::to_array<mojom::FeatureSessionType>(
            {mojom::FeatureSessionType::kKiosk});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "management",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes2),
                .session_types = StaticSpan(kSessionTypes2),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kDependencies3 =
        std::to_array<std::string_view>(
            {"behavior:imprivata_login_screen_extension"});
    static constexpr auto kExtensionTypes3 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr SimpleFeatureData kFeature3 = {
        .feature =
            {
                .name = "management",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies3),
                .extension_types = StaticSpan(kExtensionTypes3),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist4 =
        std::to_array<std::string_view>(
            {"93B7178E8C275515C38D4F43D9DF4648F0EA9B03","BABE7AD8BDBAFCD146D50861BF6981DA7AC2961C1982E5F78EDBD7A5FAA62259","1FC31C9D42DF1B51EA7648F73DF26400322999A8","C42CACC20C2A7F53A6F8DD2EE85F1FC2333DD6EB030BEA91B9CA9D9DDD6D570D"});
    static constexpr auto kExtensionTypes4 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr auto kPlatforms4 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature4 = {
        .feature =
            {
                .name = "management",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist4),
                .extension_types = StaticSpan(kExtensionTypes4),
                .platforms = StaticSpan(kPlatforms4),
                .location = SimpleFeature::Location::kPolicy,
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2, kFeature3, kFeature4});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "management",
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
            {"1BFB3A47AA4A1E1C4714D919217602685CDD0FA7","DD87C93131FF8D3DE4E483DC1EB298D73C7223A6","13E3107CEF097680EF38F4C405F0014ECC2428C6","F14B6BF9F5B9205222E568B3C838D9E99C3F5032"});
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "mdns",
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
            {Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "mdns",
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
                .name = "mdns",
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
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "mediaPlayerPrivate",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .location = SimpleFeature::Location::kComponent,
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kHostedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "notifications",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"6B748A5C005F21B7CBCF4170C2F883E435DEB511","075FF17D52ED6E3C2E5EC4D99F188E7A25AF47EA","5C825E850034490380BCB756D43ABB2CF537AA91"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "notifications",
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
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "notifications",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "pageCapture",
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
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "passwordsPrivate",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .location = SimpleFeature::Location::kComponent,
                .channel = version_info::Channel::UNKNOWN,
            },
    };
    [[clang::no_destroy]] static constinit const PermissionFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"CBCC42ABED43A4B58FE3810E62AFFA010EB0349F"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "pdfViewerPrivate",
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
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "platformKeys",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .platforms = StaticSpan(kPlatforms0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kDependencies1 =
        std::to_array<std::string_view>(
            {"behavior:imprivata_login_screen_extension"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "platformKeys",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies1),
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
                .name = "platformKeys",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "plugin",
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
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "privacy",
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
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "processes",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::DEV,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"7D7A4B147FE39908A5AF13F85E38989C54BBE41C","0EEDFC0EED87871237213F34EBC7B4982A195C95"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "processes",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist1),
                .extension_types = StaticSpan(kExtensionTypes1),
                .channel = version_info::Channel::BETA,
            },
    };
    static constexpr auto kAllowlist2 =
        std::to_array<std::string_view>(
            {"DF84F03F9B960409CCDE0D895B9650EBE81C0A8E","80B9DC58E5210749F052F5B4DB239C50CF72AEB6","7D7A4B147FE39908A5AF13F85E38989C54BBE41C","0EEDFC0EED87871237213F34EBC7B4982A195C95"});
    static constexpr auto kExtensionTypes2 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "processes",
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
                .name = "processes",
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
            {"031E5E4A54C39E4F46E11CE643584E9187915908","349E89FE0296161007623C0B4096B617D7CECD54","18B761AA5B58FA89E596EB7996B4C92C86775C7F","2012C0122892D332325339998251D1CC3CAE396A","86D63D90308742AA65B8B29AE2D39FED2D6DC310","50B8ECD18A36937668D1FCA9CEEE668BC25C39CC","31367E6C4D69B90D866289492A307C205AF8A32F"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "proxyOverrideRulesPrivate",
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
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "readingList",
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
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "resourcesPrivate",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .location = SimpleFeature::Location::kComponent,
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
            {"B281B98DDD6A379EF50D59BB1135419536C1C353","FD15C63ABA854733FDCBC1D4D34A71E963A12ABD","08455FA7CB8734168378F731B00B354CEEE0088F"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "safeBrowsingPrivate",
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
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "scripting",
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
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "search",
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
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "sessions",
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
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "settingsPrivate",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .platforms = StaticSpan(kPlatforms0),
                .location = SimpleFeature::Location::kComponent,
                .channel = version_info::Channel::UNKNOWN,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"63ED55E43214C211F82122ED56407FF1A807F2A3","226CF815E39A363090A1E547D53063472B8279FA"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "settingsPrivate",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist1),
                .extension_types = StaticSpan(kExtensionTypes1),
                .platforms = StaticSpan(kPlatforms1),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist2 =
        std::to_array<std::string_view>(
            {"E703483CEF33DEC18B4B6DD84B5C776FB9182BDB","A3BC37E2148AC4E99BE4B16AF9D42DD1E592BBBE","1C93BD3CF875F4A73C0B2A163BB8FBDA8B8B3D80","307E96539209F95A1A8740C713E6998A73657D96","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB","A9A9FC0228ADF541F0334F22BEFB8F9C245B21D7"});
    static constexpr auto kExtensionTypes2 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms2 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr auto kSessionTypes2 =
        std::to_array<mojom::FeatureSessionType>(
            {mojom::FeatureSessionType::kKiosk});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "settingsPrivate",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist2),
                .extension_types = StaticSpan(kExtensionTypes2),
                .session_types = StaticSpan(kSessionTypes2),
                .platforms = StaticSpan(kPlatforms2),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist3 =
        std::to_array<std::string_view>(
            {"A321D47A2B4CA86898167A55CA8B2E02385EA7CD"});
    static constexpr auto kExtensionTypes3 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kFeature3 = {
        .feature =
            {
                .name = "settingsPrivate",
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
                .name = "settingsPrivate",
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
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::DESKTOP_ANDROID_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "sidePanel",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .min_manifest_version = 3,
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
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "systemPrivate",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .location = SimpleFeature::Location::kComponent,
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
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "tabCapture",
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
                .name = "tabGroups",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "tabs",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"AE27D69DBE571F4B1694F05C89B710C646792231","5107DE9024C329EEA9C9A72D94C16723790C6422"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "tabs",
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
                .name = "tabs",
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
            {"0EA6B717932AD64C469C1CCB6911457733295907","64444C82CD0FC7251F3F9839E164AC5E312F094351E438AC4941C88FEDBE4203","58B0C2968C335964D5433E89CA4D86628A0E3D4B","5F13EB3D4C8E5A012DF6F03BB4766532C41A07E23CC9F7963FEEB77BBBC7334D","3BC1ED0B3E6EFDC7BD4D3D1D75D44B52DEE0A226","016C557CDCA68B397FF4A18FC90127C08FCA46663BFB82C301F58734482E37E8","38C361D4A0726CE45D3572D65071B6BDB3092371","EF9B72731592D220DACCE1EA67179A9F4CB0B8AAD0BBDC87D3C4815E16461C81"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "terminalPrivate",
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "topSites",
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
                .name = "transientBackground",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
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
            {Manifest::Type::kExtension,Manifest::Type::kLegacyPackagedApp,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "tts",
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
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "ttsEngine",
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
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "webAuthenticationProxy",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .min_manifest_version = 3,
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
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "webNavigation",
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
            {"E703483CEF33DEC18B4B6DD84B5C776FB9182BDB","A3BC37E2148AC4E99BE4B16AF9D42DD1E592BBBE","1C93BD3CF875F4A73C0B2A163BB8FBDA8B8B3D80","307E96539209F95A1A8740C713E6998A73657D96","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB","A9A9FC0228ADF541F0334F22BEFB8F9C245B21D7"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "webcamPrivate",
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
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"80B9DC58E5210749F052F5B4DB239C50CF72AEB6","DF84F03F9B960409CCDE0D895B9650EBE81C0A8E","ADFA45434ABA2F1A4647E673F53FF37F8F6047A3"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM,Feature::LINUX_PLATFORM,Feature::MACOSX_PLATFORM,Feature::WIN_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "webrtcDesktopCapturePrivate",
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
    static constexpr auto kAllowlist =
        std::to_array<std::string_view>(
            {"80B9DC58E5210749F052F5B4DB239C50CF72AEB6","DF84F03F9B960409CCDE0D895B9650EBE81C0A8E","ADFA45434ABA2F1A4647E673F53FF37F8F6047A3","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension,Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "webrtcLoggingPrivate",
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
            {"ADFA45434ABA2F1A4647E673F53FF37F8F6047A3","4F25792AF1AA7483936DE29C07806F203C7170A0","BD8781D757D830FC2E85470A1B6E8A718B7EE0D9","4AC2B6C63C6480D150DFDA13E4A5956EB1D0DDBB","81986D4F846CEDDDB962643FA501D1780DD441BB"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "webrtcLoggingPrivate.audioDebug",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::STABLE,
                .component_extensions_auto_granted = false,
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