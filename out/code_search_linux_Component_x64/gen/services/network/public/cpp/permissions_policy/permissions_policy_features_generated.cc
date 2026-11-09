// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


#include "services/network/public/cpp/permissions_policy/permissions_policy_features_generated.h"

#include "base/command_line.h"
#include "base/containers/fixed_flat_set.h"
#include "base/no_destructor.h"
#include "base/feature_list.h"
#include "services/network/public/cpp/features.h"
#include "services/network/public/cpp/network_switches.h"
#include "services/network/public/mojom/permissions_policy/permissions_policy_feature.mojom-shared.h"

namespace network {

// Applies new defaults based on flags.
void UpdatePermissionsPolicyFeatureListFlagDefaults(PermissionsPolicyFeatureList& mutable_feature_list) {
  if (base::CommandLine::InitializedForCurrentProcess() &&
      base::CommandLine::ForCurrentProcess()->HasSwitch(network::switches::kLocalNetworkAccessPermissionsPolicyDefaultEnabled)) {
    mutable_feature_list.find(network::mojom::PermissionsPolicyFeature::kLocalNetwork)->second =
      PermissionsPolicyFeatureDefault::EnableForAll;
  }
  if (base::CommandLine::InitializedForCurrentProcess() &&
      base::CommandLine::ForCurrentProcess()->HasSwitch(network::switches::kLocalNetworkAccessPermissionsPolicyDefaultEnabled)) {
    mutable_feature_list.find(network::mojom::PermissionsPolicyFeature::kLocalNetworkAccess)->second =
      PermissionsPolicyFeatureDefault::EnableForAll;
  }
  if (base::CommandLine::InitializedForCurrentProcess() &&
      base::CommandLine::ForCurrentProcess()->HasSwitch(network::switches::kLocalNetworkAccessPermissionsPolicyDefaultEnabled)) {
    mutable_feature_list.find(network::mojom::PermissionsPolicyFeature::kLoopbackNetwork)->second =
      PermissionsPolicyFeatureDefault::EnableForAll;
  }
}

// The base list with no flags or special cases.
PermissionsPolicyFeatureList GetBasePermissionsPolicyFeatureList() {
  static const base::NoDestructor<PermissionsPolicyFeatureList> feature_list({        {
          network::mojom::PermissionsPolicyFeature::kAccelerometer,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kAllScreensCapture,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kAmbientLightSensor,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kAriaNotify,
          PermissionsPolicyFeatureDefault::EnableForAll
        },        {
          network::mojom::PermissionsPolicyFeature::kAutofill,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kAutoplay,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kBluetooth,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kBrowsingTopics,
          PermissionsPolicyFeatureDefault::EnableForAll
        },        {
          network::mojom::PermissionsPolicyFeature::kBrowsingTopicsBackwardCompatible,
          PermissionsPolicyFeatureDefault::EnableForAll
        },        {
          network::mojom::PermissionsPolicyFeature::kCamera,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kCapturedSurfaceControl,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintDPR,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintDeviceMemory,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintDownlink,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintECT,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintPrefersColorScheme,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintPrefersReducedMotion,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintPrefersReducedTransparency,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintRTT,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintSaveData,
          PermissionsPolicyFeatureDefault::EnableForAll
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintUA,
          PermissionsPolicyFeatureDefault::EnableForAll
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintUAArch,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintUABitness,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintUAFormFactors,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintUAHighEntropyValues,
          PermissionsPolicyFeatureDefault::EnableForAll
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintUAPlatform,
          PermissionsPolicyFeatureDefault::EnableForAll
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintUAModel,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintUAMobile,
          PermissionsPolicyFeatureDefault::EnableForAll
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintUAFullVersion,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintUAFullVersionList,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintUAPlatformVersion,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintUAWoW64,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintViewportHeight,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintViewportWidth,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kClientHintWidth,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kClipboardRead,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kClipboardWrite,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kComputePressure,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kControlledFrame,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kCrossOriginIsolated,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kDeferredFetch,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kDeferredFetchMinimal,
          PermissionsPolicyFeatureDefault::EnableForAll
        },        {
          network::mojom::PermissionsPolicyFeature::kDeviceAttributes,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kDigitalCredentialsCreate,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kDigitalCredentialsGet,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kDirectSockets,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kDisplayCapture,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kEncryptedMedia,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kExecutionWhileOutOfViewport,
          PermissionsPolicyFeatureDefault::EnableForAll
        },        {
          network::mojom::PermissionsPolicyFeature::kExecutionWhileNotRendered,
          PermissionsPolicyFeatureDefault::EnableForAll
        },        {
          network::mojom::PermissionsPolicyFeature::kFocusWithoutUserActivation,
          PermissionsPolicyFeatureDefault::EnableForAll
        },        {
          network::mojom::PermissionsPolicyFeature::kFullscreen,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kFrobulate,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kGamepad,
          PermissionsPolicyFeatureDefault::EnableForAll
        },        {
          network::mojom::PermissionsPolicyFeature::kGeolocation,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kGyroscope,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kHaptics,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kHid,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kIdentityCredentialsGet,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kIdleDetection,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kKeyboardMap,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kLanguageDetector,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kLanguageModel,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kLocalFonts,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kLocalNetwork,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kLocalNetworkAccess,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kLoopbackNetwork,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kMagnetometer,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kManualText,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kMediaPlaybackWhileNotVisible,
          PermissionsPolicyFeatureDefault::EnableForAll
        },        {
          network::mojom::PermissionsPolicyFeature::kMicrophone,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kMidiFeature,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kMulticastInDirectSockets,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kOnDeviceSpeechRecognition,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kOTPCredentials,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kPayment,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kPictureInPicture,
          PermissionsPolicyFeatureDefault::EnableForAll
        },        {
          network::mojom::PermissionsPolicyFeature::kPrivateStateTokenIssuance,
          PermissionsPolicyFeatureDefault::EnableForAll
        },        {
          network::mojom::PermissionsPolicyFeature::kPublicKeyCredentialsCreate,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kPublicKeyCredentialsGet,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kPublicKeyCredentialsRemoteClientDataJson,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kRewriter,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kScreenWakeLock,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kSerial,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kSmartCard,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kSpeakerSelection,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kStorageAccessAPI,
          PermissionsPolicyFeatureDefault::EnableForAll
        },        {
          network::mojom::PermissionsPolicyFeature::kSubApps,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kSummarizer,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kSyncXHR,
          PermissionsPolicyFeatureDefault::EnableForAll
        },        {
          network::mojom::PermissionsPolicyFeature::kTranslator,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kTrustTokenRedemption,
          PermissionsPolicyFeatureDefault::EnableForAll
        },        {
          network::mojom::PermissionsPolicyFeature::kUsb,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kUsbUnrestricted,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kUnboundedElement,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kUnload,
          PermissionsPolicyFeatureDefault::EnableForAll
        },        {
          network::mojom::PermissionsPolicyFeature::kVerticalScroll,
          PermissionsPolicyFeatureDefault::EnableForAll
        },        {
          network::mojom::PermissionsPolicyFeature::kWebAppInstallation,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kTools,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kWebNN,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kWebPrinting,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kWebShare,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kWebXr,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kWindowManagement,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },        {
          network::mojom::PermissionsPolicyFeature::kWriter,
          PermissionsPolicyFeatureDefault::EnableForSelf
        },    });
  return *feature_list;
}

// Defaults with "unload" using EnabledForNone.
PermissionsPolicyFeatureList& GetPermissionsPolicyFeatureListUnloadNone() {
  static base::NoDestructor<PermissionsPolicyFeatureList> feature_list([] {
    PermissionsPolicyFeatureList map = GetBasePermissionsPolicyFeatureList();
    UpdatePermissionsPolicyFeatureListFlagDefaults(map);

    map.find(network::mojom::PermissionsPolicyFeature::kUnload)->second =
        PermissionsPolicyFeatureDefault::EnableForNone;

    return map;
  }());
  return *feature_list;
}

// Defaults with "unload" using EnabledForAll.
PermissionsPolicyFeatureList& GetPermissionsPolicyFeatureListUnloadAll() {
  static base::NoDestructor<PermissionsPolicyFeatureList> feature_list([] {
    PermissionsPolicyFeatureList map = GetBasePermissionsPolicyFeatureList();
    UpdatePermissionsPolicyFeatureListFlagDefaults(map);

    map.find(network::mojom::PermissionsPolicyFeature::kUnload)->second =
        PermissionsPolicyFeatureDefault::EnableForAll;

    return map;
  }());
  return *feature_list;
}

bool IsPermissionsPolicyFeatureGuardedByIsolatedContext(
    std::string_view feature_name) {
  static constexpr auto kIsolatedContextFeatures = base::MakeFixedFlatSet<std::string_view>({          "all-screens-capture",          "controlled-frame",          "direct-sockets",          "direct-sockets-multicast",          "smart-card",          "sub-apps",          "usb-unrestricted",          "web-printing",  });
  return kIsolatedContextFeatures.contains(feature_name);
}

} // namespace network
