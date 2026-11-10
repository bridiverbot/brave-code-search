// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/web_origin_trials.h.tmpl
// and input files:
//   ../../third_party/blink/renderer/platform/runtime_enabled_features.json5
//   ../../third_party/blink/renderer/platform/runtime_enabled_features.override.json5


#ifndef THIRD_PARTY_BLINK_PUBLIC_WEB_WEB_ORIGIN_TRIALS_H_
#define THIRD_PARTY_BLINK_PUBLIC_WEB_WEB_ORIGIN_TRIALS_H_

#include "third_party/blink/public/platform/web_common.h"
#include "v8/include/v8.h"

namespace blink {

class WebDocument;

class BLINK_EXPORT WebOriginTrials {
 public:
  static bool IsAdInterestGroupAPIEnabled(const WebDocument* web_document);
  static bool IsAdInterestGroupAPIEnabled(const v8::Local<v8::Context> context);
  static bool IsAutofillEventEnabled(const WebDocument* web_document);
  static bool IsAutofillEventEnabled(const v8::Local<v8::Context> context);
  static bool IsCSPHashesV1Enabled(const WebDocument* web_document);
  static bool IsCSPHashesV1Enabled(const v8::Local<v8::Context> context);
  static bool IsDeclarativeWebMCPEnabled(const WebDocument* web_document);
  static bool IsDeclarativeWebMCPEnabled(const v8::Local<v8::Context> context);
  static bool IsDigitalGoodsEnabled(const WebDocument* web_document);
  static bool IsDigitalGoodsEnabled(const v8::Local<v8::Context> context);
  static bool IsDocumentPolicyNegotiationEnabled(const WebDocument* web_document);
  static bool IsDocumentPolicyNegotiationEnabled(const v8::Local<v8::Context> context);
  static bool IsEmailVerificationProtocolEnabled(const WebDocument* web_document);
  static bool IsEmailVerificationProtocolEnabled(const v8::Local<v8::Context> context);
  static bool IsFedCmActiveModeMultipleIdentityProvidersEnabled(const WebDocument* web_document);
  static bool IsFedCmActiveModeMultipleIdentityProvidersEnabled(const v8::Local<v8::Context> context);
  static bool IsFedCmMultipleIdentityProvidersEnabled(const WebDocument* web_document);
  static bool IsFedCmMultipleIdentityProvidersEnabled(const v8::Local<v8::Context> context);
  static bool IsGamepadRawInputChangeEventEnabled(const WebDocument* web_document);
  static bool IsGamepadRawInputChangeEventEnabled(const v8::Local<v8::Context> context);
  static bool IsIncomingCallNotificationsEnabled(const WebDocument* web_document);
  static bool IsIncomingCallNotificationsEnabled(const v8::Local<v8::Context> context);
  static bool IsOriginTrialsSampleAPIEnabled(const WebDocument* web_document);
  static bool IsOriginTrialsSampleAPIEnabled(const v8::Local<v8::Context> context);
  static bool IsOriginTrialsSampleAPIDeprecationEnabled(const WebDocument* web_document);
  static bool IsOriginTrialsSampleAPIDeprecationEnabled(const v8::Local<v8::Context> context);
  static bool IsPNaClEnabled(const WebDocument* web_document);
  static bool IsPNaClEnabled(const v8::Local<v8::Context> context);
  static bool IsPreferredAudioOutputDevicesEnabled(const WebDocument* web_document);
  static bool IsPreferredAudioOutputDevicesEnabled(const v8::Local<v8::Context> context);
  static bool IsPrefetchAndPrerenderActivationBeaconEnabled(const WebDocument* web_document);
  static bool IsPrefetchAndPrerenderActivationBeaconEnabled(const v8::Local<v8::Context> context);
  static bool IsPrerenderUntilScriptEnabled(const WebDocument* web_document);
  static bool IsPrerenderUntilScriptEnabled(const v8::Local<v8::Context> context);
  static bool IsTextFragmentIdentifiersEnabled(const WebDocument* web_document);
  static bool IsTextFragmentIdentifiersEnabled(const v8::Local<v8::Context> context);
  static bool IsTouchEventFeatureDetectionEnabled(const WebDocument* web_document);
  static bool IsTouchEventFeatureDetectionEnabled(const v8::Local<v8::Context> context);
  static bool IsWebMCPEnabled(const WebDocument* web_document);
  static bool IsWebMCPEnabled(const v8::Local<v8::Context> context);
  static bool IsWebXRImageTrackingEnabled(const WebDocument* web_document);
  static bool IsWebXRImageTrackingEnabled(const v8::Local<v8::Context> context);
  static bool IsWebXRPlaneDetectionEnabled(const WebDocument* web_document);
  static bool IsWebXRPlaneDetectionEnabled(const v8::Local<v8::Context> context);
  static bool IsXSLTEnabled(const WebDocument* web_document);
  static bool IsXSLTEnabled(const v8::Local<v8::Context> context);

  WebOriginTrials() = delete;
};

}  // namespace blink

#endif  // THIRD_PARTY_BLINK_PUBLIC_WEB_WEB_ORIGIN_TRIALS_H_
