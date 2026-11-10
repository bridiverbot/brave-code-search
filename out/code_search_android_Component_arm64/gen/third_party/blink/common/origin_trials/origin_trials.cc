// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/origin_trials.cc.tmpl
// and input files:
//   ../../third_party/blink/renderer/platform/runtime_enabled_features.json5
//   ../../third_party/blink/renderer/platform/runtime_enabled_features.override.json5


#include "third_party/blink/public/common/origin_trials/origin_trials.h"

#include <algorithm>
#include <array>
#include <iterator>
#include <string_view>

#include "build/build_config.h"
#include "build/buildflag.h"
#include "third_party/blink/public/mojom/origin_trials/origin_trial_feature.mojom-shared.h"

// For testing. See OriginTrialsSampleAPIInvalidOS.
#define BUILDFLAG_INTERNAL_IS_INVALID() (0)

namespace blink {

namespace {

static constexpr size_t kMaxFeaturesPerTrial = 2;
static constexpr struct TrialToFeature {
  const char* trial_name;
  unsigned feature_count;
  std::array<mojom::OriginTrialFeature, kMaxFeaturesPerTrial> features;
} kTrialToFeaturesMap[] = {
    { "AdInterestGroupAPI", 1, {mojom::OriginTrialFeature::kAdInterestGroupAPI, } },
    { "AIPromptAPIParams", 1, {mojom::OriginTrialFeature::kAIPromptAPIParams, } },
    { "AIProofreaderAPI", 1, {mojom::OriginTrialFeature::kAIProofreadingAPI, } },
    { "AIRewriterAPI", 1, {mojom::OriginTrialFeature::kAIRewriterAPI, } },
    { "AIWriterAPI", 1, {mojom::OriginTrialFeature::kAIWriterAPI, } },
    { "AppTitle", 1, {mojom::OriginTrialFeature::kAppTitle, } },
    { "AutofillEvent", 1, {mojom::OriginTrialFeature::kAutofillEvent, } },
    { "BackForwardCacheExperimentHTTPHeader", 1, {mojom::OriginTrialFeature::kBackForwardCacheExperimentHTTPHeader, } },
    { "BackForwardCacheNotRestoredReasons", 1, {mojom::OriginTrialFeature::kBackForwardCacheNotRestoredReasons, } },
    { "BackgroundPageFreezeOptOut", 1, {mojom::OriginTrialFeature::kBackgroundPageFreezeOptOut, } },
    { "BlockingFocusWithoutUserActivation", 1, {mojom::OriginTrialFeature::kBlockingFocusWithoutUserActivation, } },
    { "CacheStorageCodeCacheHint", 1, {mojom::OriginTrialFeature::kCacheStorageCodeCacheHint, } },
    { "Canvas2dMesh", 1, {mojom::OriginTrialFeature::kCanvas2dMesh, } },
    { "HTMLInCanvas", 1, {mojom::OriginTrialFeature::kCanvasDrawElement, } },
    { "ConnectionAllowlistEmbeddedEnforcement", 1, {mojom::OriginTrialFeature::kConnectionAllowlistEmbeddedEnforcement, } },
    { "ContainerTiming", 1, {mojom::OriginTrialFeature::kContainerTiming, } },
    { "CoopRestrictProperties", 1, {mojom::OriginTrialFeature::kCoopRestrictProperties, } },
    { "CpuPerformance", 1, {mojom::OriginTrialFeature::kCpuPerformance, } },
    { "CrashReportingStorageAPI", 1, {mojom::OriginTrialFeature::kCrashReportingStorageAPI, } },
    { "CSPExtendedScriptSrcHashes", 1, {mojom::OriginTrialFeature::kCSPHashesV1, } },
    { "DeclarativeCSSModules", 2, {mojom::OriginTrialFeature::kDeclarativeCSSModules,mojom::OriginTrialFeature::kShadowRootAdoptedStyleSheet, } },
    { "DeclarativePerformanceObserver", 1, {mojom::OriginTrialFeature::kDeclarativePerformanceObserver, } },
    { "WebMCP", 2, {mojom::OriginTrialFeature::kDeclarativeWebMCP,mojom::OriginTrialFeature::kWebMCP, } },
    { "DeprecateUnloadOptOut", 1, {mojom::OriginTrialFeature::kDeprecateUnloadOptOut, } },
    { "DigitalGoodsV2", 1, {mojom::OriginTrialFeature::kDigitalGoods, } },
    { "DisableDifferentOriginSubframeDialogSuppression", 1, {mojom::OriginTrialFeature::kDisableDifferentOriginSubframeDialogSuppression, } },
    { "DocumentIsolationPolicy", 1, {mojom::OriginTrialFeature::kDocumentIsolationPolicy, } },
    { "DocumentPolicyNegotiation", 1, {mojom::OriginTrialFeature::kDocumentPolicyNegotiation, } },
    { "EmailVerificationProtocol", 1, {mojom::OriginTrialFeature::kEmailVerificationProtocol, } },
    { "JSSelfProfilingMarkers", 1, {mojom::OriginTrialFeature::kExperimentalJSProfilerMarkers, } },
    { "ExtendedTextMetrics", 1, {mojom::OriginTrialFeature::kExtendedTextMetrics, } },
    { "FedCmMultipleIdentityProviders", 1, {mojom::OriginTrialFeature::kFedCmMultipleIdentityProviders, } },
    { "FetchRetry", 1, {mojom::OriginTrialFeature::kFetchRetry, } },
    { "FledgeBiddingAndAuctionServer", 1, {mojom::OriginTrialFeature::kFledgeBiddingAndAuctionServerAPI, } },
    { "GamepadRawInputChangeEvent", 1, {mojom::OriginTrialFeature::kGamepadRawInputChangeEvent, } },
    { "HrefTranslate", 1, {mojom::OriginTrialFeature::kHrefTranslate, } },
    { "IncomingCallNotifications", 1, {mojom::OriginTrialFeature::kIncomingCallNotifications, } },
    { "JavaScriptCompileHintsPerFunctionMagic", 1, {mojom::OriginTrialFeature::kJavaScriptCompileHintsPerFunctionMagicRuntime, } },
    { "LocalNetworkAccessForWebRTCOptOut", 1, {mojom::OriginTrialFeature::kLocalNetworkAccessForWebRTCOptOut, } },
    { "MediaCaptureBackgroundBlur", 2, {mojom::OriginTrialFeature::kMediaCaptureBackgroundBlur,mojom::OriginTrialFeature::kMediaCaptureConfigurationChange, } },
    { "MediaSourceExtensionsForWebCodecs", 1, {mojom::OriginTrialFeature::kMediaSourceExtensionsForWebCodecs, } },
    { "NotificationTriggers", 1, {mojom::OriginTrialFeature::kNotificationTriggers, } },
    { "Frobulate", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPI, } },
    { "FrobulateBrowserReadWrite", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPIBrowserReadWrite, } },
    { "FrobulateDeprecation", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPIDeprecation, } },
    { "FrobulateExpiryGracePeriod", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPIExpiryGracePeriod, } },
    { "FrobulateExpiryGracePeriodThirdParty", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPIExpiryGracePeriodThirdParty, } },
    { "FrobulateImplied", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPIImplied, } },
    { "FrobulateInvalidOS", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPIInvalidOS, } },
    { "FrobulateNavigation", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPINavigation, } },
    { "FrobulatePersistentExpiryGracePeriod", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPIPersistentExpiryGracePeriod, } },
    { "FrobulatePersistent", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPIPersistentFeature, } },
    { "FrobulatePersistentInvalidOS", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPIPersistentInvalidOS, } },
    { "FrobulatePersistentThirdPartyDeprecation", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPIPersistentThirdPartyDeprecationFeature, } },
    { "FrobulateThirdParty", 1, {mojom::OriginTrialFeature::kOriginTrialsSampleAPIThirdParty, } },
    { "OverscrollAreas", 1, {mojom::OriginTrialFeature::kOverscrollAreas, } },
    { "Parakeet", 1, {mojom::OriginTrialFeature::kParakeet, } },
    { "PerMethodCanMakePaymentQuota", 1, {mojom::OriginTrialFeature::kPerMethodCanMakePaymentQuota, } },
    { "PNaCl", 1, {mojom::OriginTrialFeature::kPNaCl, } },
    { "PreferredAudioOutputDevices", 1, {mojom::OriginTrialFeature::kPreferredAudioOutputDevices, } },
    { "PrefetchAndPrerenderActivationBeacon", 1, {mojom::OriginTrialFeature::kPrefetchAndPrerenderActivationBeacon, } },
    { "Prerender2CrossOriginIframes", 1, {mojom::OriginTrialFeature::kPrerender2CrossOriginIframes, } },
    { "PrerenderActivationByFormSubmission", 1, {mojom::OriginTrialFeature::kPrerenderActivationByFormSubmission, } },
    { "PrerenderUntilScript", 1, {mojom::OriginTrialFeature::kPrerenderUntilScript, } },
    { "RtcAudioJitterBufferMaxPackets", 1, {mojom::OriginTrialFeature::kRtcAudioJitterBufferMaxPackets, } },
    { "RTCDiagnosticLogging", 2, {mojom::OriginTrialFeature::kRTCDiagnosticLogging,mojom::OriginTrialFeature::kRTCLegacyDiagnosticLogging, } },
    { "RTCEncodedFrameSetMetadata", 1, {mojom::OriginTrialFeature::kRTCEncodedFrameSetMetadata, } },
    { "RTCLegacyCallbackBasedGetStats", 1, {mojom::OriginTrialFeature::kRTCLegacyCallbackBasedGetStats, } },
    { "RTCStatsRelativePacketArrivalDelay", 1, {mojom::OriginTrialFeature::kRTCStatsRelativePacketArrivalDelay, } },
    { "SecurePaymentConfirmationOptOut", 1, {mojom::OriginTrialFeature::kSecurePaymentConfirmationOptOut, } },
    { "ShadowRootReferenceTarget", 1, {mojom::OriginTrialFeature::kShadowRootReferenceTarget, } },
    { "SharedWorkerExtendedLifetime", 1, {mojom::OriginTrialFeature::kSharedWorkerExtendedLifetime, } },
    { "SpeculationMeasurement", 1, {mojom::OriginTrialFeature::kSpeculationMeasurement, } },
    { "SpeculationRulesModerateViewportHeuristicsControl", 1, {mojom::OriginTrialFeature::kSpeculationRulesModerateViewportHeuristicsControl, } },
    { "DisableStandardizedBrowserZoom", 1, {mojom::OriginTrialFeature::kStandardizedBrowserZoomOptOut, } },
    { "TestFeatureForBrowserProcessReadWriteAccessOriginTrial", 1, {mojom::OriginTrialFeature::kTestFeatureForBrowserProcessReadWriteAccessOriginTrial, } },
    { "TextFragmentIdentifiers", 1, {mojom::OriginTrialFeature::kTextFragmentIdentifiers, } },
    { "ForceTouchEventFeatureDetectionForInspector", 1, {mojom::OriginTrialFeature::kTouchEventFeatureDetection, } },
    { "UAImageReplacementAPI", 1, {mojom::OriginTrialFeature::kUAImageReplacementAPI, } },
    { "UnrestrictedSharedArrayBuffer", 1, {mojom::OriginTrialFeature::kUnrestrictedSharedArrayBuffer, } },
    { "UserMediaElement", 1, {mojom::OriginTrialFeature::kUserMediaElementLegacy, } },
    { "WebAppScopeExtensions", 1, {mojom::OriginTrialFeature::kWebAppScopeExtensions, } },
    { "WebAssemblyCustomDescriptorsV2", 1, {mojom::OriginTrialFeature::kWebAssemblyCustomDescriptorsV2, } },
    { "WebAssemblyJSPromiseIntegration", 1, {mojom::OriginTrialFeature::kWebAssemblyJSPromiseIntegration, } },
    { "WebAudioConfigurableRenderQuantum", 1, {mojom::OriginTrialFeature::kWebAudioConfigurableRenderQuantum, } },
    { "WebAuthnAttestationFormats", 1, {mojom::OriginTrialFeature::kWebAuthenticationAttestationFormats, } },
    { "WebRtcSctpSnap", 1, {mojom::OriginTrialFeature::kWebRtcSctpSnap, } },
    { "WebTransportCustomCertificates", 1, {mojom::OriginTrialFeature::kWebTransportCustomCertificates, } },
    { "WebXRImageTracking", 1, {mojom::OriginTrialFeature::kWebXRImageTracking, } },
    { "WebXRPlaneDetection", 1, {mojom::OriginTrialFeature::kWebXRPlaneDetection, } },
    { "XSLT", 1, {mojom::OriginTrialFeature::kXSLT, } },
    // For testing
    { "This trial does not exist", 1, { mojom::OriginTrialFeature::kNonExisting } },
};

} // namespace

bool origin_trials::IsTrialValid(std::string_view trial_name) {
  return std::ranges::contains(kTrialToFeaturesMap, trial_name,
                               &TrialToFeature::trial_name);
}

bool origin_trials::IsTrialEnabledForInsecureContext(std::string_view trial_name) {
  static const char* const kEnabledForInsecureContext[] = {
      "DeprecateUnloadOptOut",
      "DisableDifferentOriginSubframeDialogSuppression",
      "LocalNetworkAccessForWebRTCOptOut",
      "FrobulateDeprecation",
      "DisableStandardizedBrowserZoom",
      "XSLT",
  };
  return std::ranges::contains(kEnabledForInsecureContext, trial_name);
}

bool origin_trials::IsTrialEnabledForThirdPartyOrigins(std::string_view trial_name) {
  static const char* const kEnabledForThirdPartyOrigins[] = {
      "AIPromptAPIParams",
      "AIProofreaderAPI",
      "AIRewriterAPI",
      "AIWriterAPI",
      "AutofillEvent",
      "Canvas2dMesh",
      "ContainerTiming",
      "CpuPerformance",
      "WebMCP",
      "DeprecateUnloadOptOut",
      "EmailVerificationProtocol",
      "ExtendedTextMetrics",
      "FedCmMultipleIdentityProviders",
      "FetchRetry",
      "FledgeBiddingAndAuctionServer",
      "FrobulateExpiryGracePeriodThirdParty",
      "FrobulatePersistent",
      "FrobulatePersistentInvalidOS",
      "FrobulatePersistentThirdPartyDeprecation",
      "FrobulateThirdParty",
      "PreferredAudioOutputDevices",
      "PrerenderUntilScript",
      "SecurePaymentConfirmationOptOut",
      "SharedWorkerExtendedLifetime",
      "SpeculationMeasurement",
      "SpeculationRulesModerateViewportHeuristicsControl",
      "DisableStandardizedBrowserZoom",
      "WebAuthnAttestationFormats",
      "XSLT",
  };
  return std::ranges::contains(kEnabledForThirdPartyOrigins, trial_name);
}

bool origin_trials::IsTrialEnabledForBrowserProcessReadAccess(std::string_view trial_name) {
  // Select all features that represent origin trials and have
  // browser_process_read_write_access enabled. Determine if that list of
  // features contains the  `trial_name` provided.
  static const char* const kEnabledForBrowserProcessReadWriteAccess[] = {
      "EmailVerificationProtocol",
      "FetchRetry",
      "FrobulateBrowserReadWrite",
      "TestFeatureForBrowserProcessReadWriteAccessOriginTrial",
  };
  return std::ranges::contains(kEnabledForBrowserProcessReadWriteAccess, trial_name);
}

bool origin_trials::IsDeprecationTrial(std::string_view trial_name) {
  for (auto feature : FeaturesForTrial(trial_name)) {
    if (GetTrialType(feature) == OriginTrialType::kDeprecation) {
      return true;
    }
  }
  return false;
}

OriginTrialType origin_trials::GetTrialType(mojom::OriginTrialFeature feature) {
  switch (feature) {
    case mojom::OriginTrialFeature::kBackgroundPageFreezeOptOut:
      return OriginTrialType::kDeprecation;
    case mojom::OriginTrialFeature::kDeprecateUnloadOptOut:
      return OriginTrialType::kDeprecation;
    case mojom::OriginTrialFeature::kDisableDifferentOriginSubframeDialogSuppression:
      return OriginTrialType::kDeprecation;
    case mojom::OriginTrialFeature::kLocalNetworkAccessForWebRTCOptOut:
      return OriginTrialType::kDeprecation;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIDeprecation:
      return OriginTrialType::kDeprecation;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIPersistentThirdPartyDeprecationFeature:
      return OriginTrialType::kDeprecation;
    case mojom::OriginTrialFeature::kStandardizedBrowserZoomOptOut:
      return OriginTrialType::kDeprecation;
    case mojom::OriginTrialFeature::kXSLT:
      return OriginTrialType::kDeprecation;
    default:
      return OriginTrialType::kDefault;
  }
}


base::span<const mojom::OriginTrialFeature> origin_trials::FeaturesForTrial(
    std::string_view trial_name) {
  auto it = std::ranges::find(kTrialToFeaturesMap, trial_name,
                               &TrialToFeature::trial_name);
  DCHECK(it != std::end(kTrialToFeaturesMap));
  return {it->features.begin(), it->feature_count};
}

base::span<const mojom::OriginTrialFeature> origin_trials::GetImpliedFeatures(
    mojom::OriginTrialFeature feature) {
  if (feature == mojom::OriginTrialFeature::kParakeet) {
    static constexpr mojom::OriginTrialFeature implied_features[] = {mojom::OriginTrialFeature::kAdInterestGroupAPI,};
    return implied_features;
  }
  if (feature == mojom::OriginTrialFeature::kMediaCaptureBackgroundBlur) {
    static constexpr mojom::OriginTrialFeature implied_features[] = {mojom::OriginTrialFeature::kMediaCaptureConfigurationChange,};
    return implied_features;
  }
  if (feature == mojom::OriginTrialFeature::kOriginTrialsSampleAPI) {
    static constexpr mojom::OriginTrialFeature implied_features[] = {mojom::OriginTrialFeature::kOriginTrialsSampleAPIImplied,};
    return implied_features;
  }
  if (feature == mojom::OriginTrialFeature::kOriginTrialsSampleAPIInvalidOS) {
    static constexpr mojom::OriginTrialFeature implied_features[] = {mojom::OriginTrialFeature::kOriginTrialsSampleAPIImplied,};
    return implied_features;
  }
  if (feature == mojom::OriginTrialFeature::kDeclarativeCSSModules) {
    static constexpr mojom::OriginTrialFeature implied_features[] = {mojom::OriginTrialFeature::kShadowRootAdoptedStyleSheet,};
    return implied_features;
  }
  return {};
}

bool origin_trials::FeatureEnabledForOS(mojom::OriginTrialFeature feature) {
  switch (feature) {
    case mojom::OriginTrialFeature::kAdInterestGroupAPI:
      return true;
    case mojom::OriginTrialFeature::kAIPromptAPIParams:
#if BUILDFLAG(IS_WIN) || BUILDFLAG(IS_MAC) || BUILDFLAG(IS_LINUX) || BUILDFLAG(IS_CHROMEOS)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kAIProofreadingAPI:
#if BUILDFLAG(IS_WIN) || BUILDFLAG(IS_MAC) || BUILDFLAG(IS_LINUX) || BUILDFLAG(IS_CHROMEOS)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kAIRewriterAPI:
#if BUILDFLAG(IS_WIN) || BUILDFLAG(IS_MAC) || BUILDFLAG(IS_LINUX) || BUILDFLAG(IS_CHROMEOS)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kAIWriterAPI:
#if BUILDFLAG(IS_WIN) || BUILDFLAG(IS_MAC) || BUILDFLAG(IS_LINUX) || BUILDFLAG(IS_CHROMEOS)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kAppTitle:
#if BUILDFLAG(IS_WIN) || BUILDFLAG(IS_MAC) || BUILDFLAG(IS_LINUX) || BUILDFLAG(IS_CHROMEOS)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kAutofillEvent:
      return true;
    case mojom::OriginTrialFeature::kBackForwardCacheExperimentHTTPHeader:
      return true;
    case mojom::OriginTrialFeature::kBackForwardCacheNotRestoredReasons:
      return true;
    case mojom::OriginTrialFeature::kBackgroundPageFreezeOptOut:
      return true;
    case mojom::OriginTrialFeature::kBlockingFocusWithoutUserActivation:
      return true;
    case mojom::OriginTrialFeature::kCacheStorageCodeCacheHint:
      return true;
    case mojom::OriginTrialFeature::kCanvas2dMesh:
      return true;
    case mojom::OriginTrialFeature::kCanvasDrawElement:
      return true;
    case mojom::OriginTrialFeature::kConnectionAllowlistEmbeddedEnforcement:
      return true;
    case mojom::OriginTrialFeature::kContainerTiming:
      return true;
    case mojom::OriginTrialFeature::kCoopRestrictProperties:
      return true;
    case mojom::OriginTrialFeature::kCpuPerformance:
      return true;
    case mojom::OriginTrialFeature::kCrashReportingStorageAPI:
      return true;
    case mojom::OriginTrialFeature::kCSPHashesV1:
#if BUILDFLAG(IS_WIN) || BUILDFLAG(IS_LINUX) || BUILDFLAG(IS_MAC) || BUILDFLAG(IS_ANDROID) || BUILDFLAG(IS_CHROMEOS)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kDeclarativeCSSModules:
      return true;
    case mojom::OriginTrialFeature::kDeclarativePerformanceObserver:
      return true;
    case mojom::OriginTrialFeature::kDeclarativeWebMCP:
      return true;
    case mojom::OriginTrialFeature::kDeprecateUnloadOptOut:
      return true;
    case mojom::OriginTrialFeature::kDigitalGoods:
#if BUILDFLAG(IS_ANDROID) || BUILDFLAG(IS_CHROMEOS)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kDisableDifferentOriginSubframeDialogSuppression:
      return true;
    case mojom::OriginTrialFeature::kDocumentIsolationPolicy:
#if BUILDFLAG(IS_WIN) || BUILDFLAG(IS_MAC) || BUILDFLAG(IS_LINUX) || BUILDFLAG(IS_CHROMEOS)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kDocumentPolicyNegotiation:
      return true;
    case mojom::OriginTrialFeature::kEmailVerificationProtocol:
#if BUILDFLAG(IS_WIN) || BUILDFLAG(IS_MAC) || BUILDFLAG(IS_LINUX) || BUILDFLAG(IS_CHROMEOS) || BUILDFLAG(IS_ANDROID)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kExperimentalJSProfilerMarkers:
      return true;
    case mojom::OriginTrialFeature::kExtendedTextMetrics:
      return true;
    case mojom::OriginTrialFeature::kFedCmMultipleIdentityProviders:
#if BUILDFLAG(IS_WIN) || BUILDFLAG(IS_MAC) || BUILDFLAG(IS_LINUX) || BUILDFLAG(IS_CHROMEOS)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kFetchRetry:
      return true;
    case mojom::OriginTrialFeature::kFledgeBiddingAndAuctionServerAPI:
      return true;
    case mojom::OriginTrialFeature::kGamepadRawInputChangeEvent:
      return true;
    case mojom::OriginTrialFeature::kHrefTranslate:
      return true;
    case mojom::OriginTrialFeature::kIncomingCallNotifications:
#if BUILDFLAG(IS_WIN)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kJavaScriptCompileHintsPerFunctionMagicRuntime:
      return true;
    case mojom::OriginTrialFeature::kLocalNetworkAccessForWebRTCOptOut:
      return true;
    case mojom::OriginTrialFeature::kMediaCaptureBackgroundBlur:
      return true;
    case mojom::OriginTrialFeature::kMediaCaptureConfigurationChange:
      return true;
    case mojom::OriginTrialFeature::kMediaSourceExtensionsForWebCodecs:
      return true;
    case mojom::OriginTrialFeature::kNotificationTriggers:
      return true;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPI:
      return true;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIBrowserReadWrite:
      return true;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIDeprecation:
      return true;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIExpiryGracePeriod:
      return true;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIExpiryGracePeriodThirdParty:
      return true;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIImplied:
      return true;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIInvalidOS:
#if BUILDFLAG(IS_INVALID)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPINavigation:
      return true;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIPersistentExpiryGracePeriod:
      return true;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIPersistentFeature:
      return true;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIPersistentInvalidOS:
#if BUILDFLAG(IS_INVALID)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIPersistentThirdPartyDeprecationFeature:
      return true;
    case mojom::OriginTrialFeature::kOriginTrialsSampleAPIThirdParty:
      return true;
    case mojom::OriginTrialFeature::kOverscrollAreas:
      return true;
    case mojom::OriginTrialFeature::kParakeet:
      return true;
    case mojom::OriginTrialFeature::kPerMethodCanMakePaymentQuota:
      return true;
    case mojom::OriginTrialFeature::kPNaCl:
      return true;
    case mojom::OriginTrialFeature::kPreferredAudioOutputDevices:
      return true;
    case mojom::OriginTrialFeature::kPrefetchAndPrerenderActivationBeacon:
      return true;
    case mojom::OriginTrialFeature::kPrerender2CrossOriginIframes:
      return true;
    case mojom::OriginTrialFeature::kPrerenderActivationByFormSubmission:
      return true;
    case mojom::OriginTrialFeature::kPrerenderUntilScript:
      return true;
    case mojom::OriginTrialFeature::kRtcAudioJitterBufferMaxPackets:
      return true;
    case mojom::OriginTrialFeature::kRTCDiagnosticLogging:
      return true;
    case mojom::OriginTrialFeature::kRTCEncodedFrameSetMetadata:
      return true;
    case mojom::OriginTrialFeature::kRTCLegacyCallbackBasedGetStats:
      return true;
    case mojom::OriginTrialFeature::kRTCLegacyDiagnosticLogging:
      return true;
    case mojom::OriginTrialFeature::kRTCStatsRelativePacketArrivalDelay:
      return true;
    case mojom::OriginTrialFeature::kSecurePaymentConfirmationOptOut:
      return true;
    case mojom::OriginTrialFeature::kShadowRootAdoptedStyleSheet:
      return true;
    case mojom::OriginTrialFeature::kShadowRootReferenceTarget:
      return true;
    case mojom::OriginTrialFeature::kSharedWorkerExtendedLifetime:
      return true;
    case mojom::OriginTrialFeature::kSpeculationMeasurement:
      return true;
    case mojom::OriginTrialFeature::kSpeculationRulesModerateViewportHeuristicsControl:
#if BUILDFLAG(IS_ANDROID)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kStandardizedBrowserZoomOptOut:
      return true;
    case mojom::OriginTrialFeature::kTestFeatureForBrowserProcessReadWriteAccessOriginTrial:
      return true;
    case mojom::OriginTrialFeature::kTextFragmentIdentifiers:
      return true;
    case mojom::OriginTrialFeature::kTouchEventFeatureDetection:
      return true;
    case mojom::OriginTrialFeature::kUAImageReplacementAPI:
      return true;
    case mojom::OriginTrialFeature::kUnrestrictedSharedArrayBuffer:
#if BUILDFLAG(IS_WIN) || BUILDFLAG(IS_MAC) || BUILDFLAG(IS_LINUX) || BUILDFLAG(IS_FUCHSIA) || BUILDFLAG(IS_CHROMEOS)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kUserMediaElementLegacy:
      return true;
    case mojom::OriginTrialFeature::kWebAppScopeExtensions:
#if BUILDFLAG(IS_WIN) || BUILDFLAG(IS_MAC) || BUILDFLAG(IS_LINUX) || BUILDFLAG(IS_CHROMEOS)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kWebAssemblyCustomDescriptorsV2:
      return true;
    case mojom::OriginTrialFeature::kWebAssemblyJSPromiseIntegration:
      return true;
    case mojom::OriginTrialFeature::kWebAudioConfigurableRenderQuantum:
      return true;
    case mojom::OriginTrialFeature::kWebAuthenticationAttestationFormats:
#if BUILDFLAG(IS_ANDROID)
      return true;
#else
      return false;
#endif
    case mojom::OriginTrialFeature::kWebMCP:
      return true;
    case mojom::OriginTrialFeature::kWebRtcSctpSnap:
      return true;
    case mojom::OriginTrialFeature::kWebTransportCustomCertificates:
      return true;
    case mojom::OriginTrialFeature::kWebXRImageTracking:
      return true;
    case mojom::OriginTrialFeature::kWebXRPlaneDetection:
      return true;
    case mojom::OriginTrialFeature::kXSLT:
      return true;
    // For testing
    case mojom::OriginTrialFeature::kNonExisting:
      return true;
  }
}

} // namespace blink
