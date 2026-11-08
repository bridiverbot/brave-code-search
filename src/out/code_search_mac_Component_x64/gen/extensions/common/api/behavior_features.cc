// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE FEATURES FILE:
//   ['../../extensions/common/api/_behavior_features.json']
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/behavior_features.h"

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

void AddCoreBehaviorFeatures(FeatureProvider* provider) {
  std::array<const Feature*, 8> static_features{};
  std::size_t static_feature_count = 0;
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "allow_secondary_kiosk_app_enabled_on_launch",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .channel = version_info::Channel::DEV,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr auto kSessionTypes =
        std::to_array<mojom::FeatureSessionType>(
            {mojom::FeatureSessionType::kKiosk});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "allow_usb_devices_permission_interface_class",
            },
        .config =
            {
                .extension_types = StaticSpan(kExtensionTypes),
                .session_types = StaticSpan(kSessionTypes),
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kDependencies0 =
        std::to_array<std::string_view>(
            {"behavior:imprivata_login_screen_extension"});
    static constexpr auto kExtensionTypes0 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "imprivata_extension",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies0),
                .extension_types = StaticSpan(kExtensionTypes0),
                .channel = version_info::Channel::STABLE,
            },
    };
    static constexpr auto kDependencies1 =
        std::to_array<std::string_view>(
            {"behavior:imprivata_in_session_extension"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "imprivata_extension",
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
                .name = "imprivata_extension",
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
            {"A24DE1B21A67E25FB62AC8491642038FE25DA75B","6B25164FFE2BADB5F1DBBD301CC022170267022D","4D15F9AFCF54E56F0A6E06D22DD15F133DCF0882","171F86E3D91235E5FC745282834BB3DA164F14B3","F7BDB4C21BFF955F851C6CF65167373BDEED6218","220ABCF657446B2CBEBDE2DDA09B6FC415E87FB7","B0092A67BFB22960DE49B11E9CA56035BD40BCFA","3899082721C4996840EA4DD3A7B604914FB915CF","0D0EF5C81661E90BAFD606EADD68D8BB5EDC7E9A","D53DFC9E0D738159557959ABCA61BDDC97470C87","579D5666AB7B27A2E9EA0B13FB7F70CA7D864F72","FC3BBFAD9D7E711BBBD8235E7640348A9B98EB5F"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "imprivata_in_session_extension",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .location = SimpleFeature::Location::kPolicy,
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
            {"E219EE36A3B40612FD2A8CD6937B03EF0C97D3FE","4DBFC1C52D6660DD90791976DF7FEF7B3D360509","CDA6A10BE50CE65C59B766D0CE6A27E8E0A1533F","D85454743B32D9F5ABF3E5F18DF78809F3A0ABD4","04569B963251EB28C0906099668D98EE65ECA2D8","7BF5B69C3ACA9E6ACA5C480661B8073EB9FA32A9","5F2EF8E9F7E975090278D6A0AD039860430C5684","97A4DC8AFC1FCF665C71B624A55675C297AB256C","A00EB72B456C374F1EA86C09833C7DBB6CD95CAE","51DDBADA37EF4D25AD03CB1BB6451799456FE183","DD97CAE4D8658003658140109BC119188A19A5B8","320857126E2180A5751AA384B7B7332A4964BD8C"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "imprivata_login_screen_extension",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .location = SimpleFeature::Location::kPolicy,
                .channel = version_info::Channel::STABLE,
            },
    };
    [[clang::no_destroy]] static constinit const SimpleFeature kFeature{
        StaticFeatureData(kData)};
    static_features[static_feature_count++] = &kFeature;
  }
  {
    static constexpr auto kDependencies =
        std::to_array<std::string_view>(
            {"behavior:imprivata_login_screen_extension"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr auto kPlatforms =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "key_permissions_in_login_screen",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies),
                .extension_types = StaticSpan(kExtensionTypes),
                .platforms = StaticSpan(kPlatforms),
                .location = SimpleFeature::Location::kPolicy,
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
            {"05D1DBD6E8B9C4690FFA7D50E6F60C5290DC662A","A4CD0198C243D9FC2FD94136CC66BA6DC2027920E64CEB299085B53D8D7B87CC"});
    static constexpr auto kPlatforms0 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature0 = {
        .feature =
            {
                .name = "signin_screen",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist0),
                .platforms = StaticSpan(kPlatforms0),
                .location = SimpleFeature::Location::kUnpacked,
                .channel = version_info::Channel::CANARY,
                .component_extensions_auto_granted = false,
            },
    };
    static constexpr auto kAllowlist1 =
        std::to_array<std::string_view>(
            {"85DA1AC24AF23CDA9F5A19858EB9C6E9E1BA57F6","C741C4DD1DD08AE2CB2C1B5FD8C3B5AB213AD2BCC18F61769FE4EB597A2E7C20","EC3DE21E048B67319893889529354DFBFA96FD23","1F4D08BD4FBDAAD15E4EAD73E4ED9966E4276C636F9898810B30E614EED4AB03","A19608AC34215B127FF9D7C006D67F5C8ED8146D","168BEAE720DEAFA08E9369F5D3D1DFF43DC9B00723AAA65F8F2B170147D60676","6B748A5C005F21B7CBCF4170C2F883E435DEB511","F1B2CF2E3EE82CCEDF0B9C004A0F40763C8BDFBFFCB4FEEB8126CF9BB50D24EF","D95D50CDFE6F14769DA2D1E59DF853BFA56BFC3C","11CC264DCEACD1911688B6585148F900C26590782E73C9B59FEB8D4BEA206B30"});
    static constexpr auto kExtensionTypes1 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kPlatformApp});
    static constexpr auto kPlatforms1 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature1 = {
        .feature =
            {
                .name = "signin_screen",
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
    static constexpr auto kAllowlist2 =
        std::to_array<std::string_view>(
            {"93B7178E8C275515C38D4F43D9DF4648F0EA9B03","BABE7AD8BDBAFCD146D50861BF6981DA7AC2961C1982E5F78EDBD7A5FAA62259","EC3DE21E048B67319893889529354DFBFA96FD23","1F4D08BD4FBDAAD15E4EAD73E4ED9966E4276C636F9898810B30E614EED4AB03","A19608AC34215B127FF9D7C006D67F5C8ED8146D","168BEAE720DEAFA08E9369F5D3D1DFF43DC9B00723AAA65F8F2B170147D60676","6B748A5C005F21B7CBCF4170C2F883E435DEB511","F1B2CF2E3EE82CCEDF0B9C004A0F40763C8BDFBFFCB4FEEB8126CF9BB50D24EF","075FF17D52ED6E3C2E5EC4D99F188E7A25AF47EA","510E0C76D368F445731C223EFD9EFC97C27507DC6696EC3545F9A5A396BD9838","D95D50CDFE6F14769DA2D1E59DF853BFA56BFC3C","11CC264DCEACD1911688B6585148F900C26590782E73C9B59FEB8D4BEA206B30","5C825E850034490380BCB756D43ABB2CF537AA91","BAC4ABAB5445D64536BDE1C030C68961E820086FFE450DE13C3F83B2E830B123","1FC31C9D42DF1B51EA7648F73DF26400322999A8","C42CACC20C2A7F53A6F8DD2EE85F1FC2333DD6EB030BEA91B9CA9D9DDD6D570D","4B7E9789426EBD1BB3F99D72690DAE303FC042DF","728AA38F805D9F046321CA8CFE30621958B2F45C1920F3172B64A9A459DABFF5"});
    static constexpr auto kExtensionTypes2 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr auto kPlatforms2 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature2 = {
        .feature =
            {
                .name = "signin_screen",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist2),
                .extension_types = StaticSpan(kExtensionTypes2),
                .platforms = StaticSpan(kPlatforms2),
                .location = SimpleFeature::Location::kPolicy,
                .channel = version_info::Channel::STABLE,
                .component_extensions_auto_granted = false,
            },
    };
    static constexpr auto kAllowlist3 =
        std::to_array<std::string_view>(
            {"E24F1786D842E91E74C27929B0B3715A4689A473","FCE3552DB7971D9A2003B5BAE26D4B156A7308E04A997F1503C9BF54DF5A33DB","6F9E349A0561C78A0D3F41496FE521C5151C7F71","78578251B1309A5E256FD8CC60C538C958FAA1BC285486236A9D75A0994F0AF4","8EBDF73405D0B84CEABB8C7513C9B9FA9F1DC2CE","EE9CC86A9C05427A9C1403AA62FE264720F1F340D1AC0E0CB2CF780AFA180023","06BE211D5F014BAB34BC22D9DDA09C63A81D828E","61823797C4EEBFFADEA03397E8FB61F09092F10D3223A2BDC7428159C47F0199","3F50C3A83839D9C76334BCE81CDEC06174F266AF","94258E7037909EA26C3BB6F0183A0BD126469795D5BB70DF2E4F2D725FDBD4F3","2F47B526FA71F44816618C41EC55E5EE9543FDCC","8BA42F8465689319BC18E81D3F0029ABEF8EE162147B8740AC206AB3AB140811","86672C8D7A04E24EFB244BF96FE518C4C4809F73","E0369D3619CEABC15BFEA6E33F85637C26E1E13D5CE45B83E8A7E963008E556D","1CF709D51B2B96CF79D00447300BD3BFBE401D21","1C1514FFE21EDD8FEADF0A5F0CABBCDD94C36A58CB085D8A17AE069BEFDB88FE","40FF1103292F40C34066E023B8BE8CAE18306EAE","7C852E22253B325BDEEEF1E00343D301F0620FCFC324919236A44C554F8AAC4B","3C654B3B6682CA194E75AD044CEDE927675DDEE8","1BAD9E99D2B8A183AD981DCDD68F297E54D4A743AAC395BCFAFE8A471BE328E9","2FCBCE08B34CCA1728A85F1EFBD9A34DD2558B2E","551DEDF7F25F11862C755E0D12928B15D6172DEAE38A9E1CA1605FA75DE57EA1","7910EAFDAF64B947E1CB31B333A9BD14CA556B6C","B5482360549FDCC723DC28C48205F1FB764789AF83073A502DD136AAEDA1E81A","75C7F4B720314B6CB1B5817CD86089DB95CD2461","5C436709A74404D3816118160F896544B352CF1696FB387B4FC37258AD75C4B2","0681F449CC5742B51148D9968C2C38B7396184A7","F587F27EDBD661E56D80443311BA17C0B2347268DF221A63C8DC5AE3D1DE61A4","DDF36D85CB9C1646841F433F8ABAA2798F47D849","3189CC596B1BA8F9987AA62F1F2C5E31BC06C2F27CD4A0A4719C8517C600D736","D715AF563195BCD1B11CD5764B3B1CEAF8929D73","24578E07F497551DE0F76DC1766B210989E710341981EB717CE77F34C05D617E","371AC6869D2138CE58123741E69F67469206909F","0631CFBB5FF0C5C3C62B6E82C8C0C86B391B031FE482106338E94A68E160CCAA"});
    static constexpr auto kPlatforms3 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature3 = {
        .feature =
            {
                .name = "signin_screen",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist3),
                .platforms = StaticSpan(kPlatforms3),
                .channel = version_info::Channel::STABLE,
                .component_extensions_auto_granted = false,
            },
    };
    static constexpr auto kAllowlist4 =
        std::to_array<std::string_view>(
            {"FA84F98B32AFC3013F5711F8711F8F38DB210AB7","CF5737D827D9745295C4868B6140F02436FCC259EB9C884A5D0EC1B9829040DE","7FE4A999359A456C4B0FB7B7AD85CEA29CA50519","9C98730E21CB6AC1A7EA3CE3D528F8CD68BDBDA5BFCD008965F9AB1C1B0C82ED"});
    static constexpr auto kExtensionTypes4 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr auto kPlatforms4 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature4 = {
        .feature =
            {
                .name = "signin_screen",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist4),
                .extension_types = StaticSpan(kExtensionTypes4),
                .platforms = StaticSpan(kPlatforms4),
                .location = SimpleFeature::Location::kPolicy,
                .channel = version_info::Channel::STABLE,
                .component_extensions_auto_granted = false,
            },
    };
    static constexpr auto kDependencies5 =
        std::to_array<std::string_view>(
            {"behavior:imprivata_login_screen_extension"});
    static constexpr auto kExtensionTypes5 =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kLoginScreenExtension});
    static constexpr auto kPlatforms5 =
        std::to_array<Feature::Platform>(
            {Feature::CHROMEOS_PLATFORM});
    static constexpr SimpleFeatureData kFeature5 = {
        .feature =
            {
                .name = "signin_screen",
            },
        .config =
            {
                .dependencies = StaticSpan(kDependencies5),
                .extension_types = StaticSpan(kExtensionTypes5),
                .platforms = StaticSpan(kPlatforms5),
                .location = SimpleFeature::Location::kPolicy,
                .channel = version_info::Channel::STABLE,
                .component_extensions_auto_granted = false,
            },
    };
    static constexpr auto kFeatures =
        std::to_array<SimpleFeatureData>({kFeature0, kFeature1, kFeature2, kFeature3, kFeature4, kFeature5});
    static constexpr ComplexFeatureData kData = {
        .feature =
            {
                .name = "signin_screen",
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
            {"CBCC42ABED43A4B58FE3810E62AFFA010EB0349F","CDF9DD8503F39D9609C6C191E04450FCCEB41BCF9712F361A9013DEF8B9C7552"});
    static constexpr auto kExtensionTypes =
        std::to_array<Manifest::Type>(
            {Manifest::Type::kExtension});
    static constexpr SimpleFeatureData kData = {
        .feature =
            {
                .name = "zoom_without_bubble",
            },
        .config =
            {
                .allowlist = StaticSpan(kAllowlist),
                .extension_types = StaticSpan(kExtensionTypes),
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