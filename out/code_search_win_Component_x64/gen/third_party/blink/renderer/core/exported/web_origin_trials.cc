// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/web_origin_trials.cc.tmpl
// and input files:
//   ../../third_party/blink/renderer/platform/runtime_enabled_features.json5


#include "third_party/blink/public/web/web_origin_trials.h"

#include "third_party/blink/renderer/core/dom/document.h"
#include "third_party/blink/renderer/core/execution_context/execution_context.h"
#include "third_party/blink/public/mojom/origin_trials/origin_trial_feature.mojom-shared.h"
#include "third_party/blink/public/common/origin_trials/origin_trials.h"
#include "third_party/blink/public/platform/web_string.h"
#include "third_party/blink/public/web/web_document.h"
#include "v8/include/v8.h"

namespace blink {

// static
bool WebOriginTrials::IsAdInterestGroupAPIEnabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::AdInterestGroupAPIEnabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsAdInterestGroupAPIEnabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::AdInterestGroupAPIEnabled(ExecutionContext::From(context));
}

// static
bool WebOriginTrials::IsAutofillEventEnabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::AutofillEventEnabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsAutofillEventEnabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::AutofillEventEnabled(ExecutionContext::From(context));
}

// static
bool WebOriginTrials::IsCSPHashesV1Enabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::CSPHashesV1Enabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsCSPHashesV1Enabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::CSPHashesV1Enabled(ExecutionContext::From(context));
}

// static
bool WebOriginTrials::IsDeclarativeWebMCPEnabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::DeclarativeWebMCPEnabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsDeclarativeWebMCPEnabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::DeclarativeWebMCPEnabled(ExecutionContext::From(context));
}

// static
bool WebOriginTrials::IsDigitalGoodsEnabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::DigitalGoodsEnabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsDigitalGoodsEnabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::DigitalGoodsEnabled(ExecutionContext::From(context));
}

// static
bool WebOriginTrials::IsDocumentPolicyNegotiationEnabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::DocumentPolicyNegotiationEnabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsDocumentPolicyNegotiationEnabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::DocumentPolicyNegotiationEnabled(ExecutionContext::From(context));
}

// static
bool WebOriginTrials::IsEmailVerificationProtocolEnabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::EmailVerificationProtocolEnabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsEmailVerificationProtocolEnabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::EmailVerificationProtocolEnabled(ExecutionContext::From(context));
}

// static
bool WebOriginTrials::IsFedCmActiveModeMultipleIdentityProvidersEnabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::FedCmActiveModeMultipleIdentityProvidersEnabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsFedCmActiveModeMultipleIdentityProvidersEnabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::FedCmActiveModeMultipleIdentityProvidersEnabled(ExecutionContext::From(context));
}

// static
bool WebOriginTrials::IsFedCmMultipleIdentityProvidersEnabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::FedCmMultipleIdentityProvidersEnabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsFedCmMultipleIdentityProvidersEnabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::FedCmMultipleIdentityProvidersEnabled(ExecutionContext::From(context));
}

// static
bool WebOriginTrials::IsGamepadRawInputChangeEventEnabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::GamepadRawInputChangeEventEnabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsGamepadRawInputChangeEventEnabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::GamepadRawInputChangeEventEnabled(ExecutionContext::From(context));
}

// static
bool WebOriginTrials::IsIncomingCallNotificationsEnabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::IncomingCallNotificationsEnabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsIncomingCallNotificationsEnabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::IncomingCallNotificationsEnabled(ExecutionContext::From(context));
}

// static
bool WebOriginTrials::IsOriginTrialsSampleAPIEnabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::OriginTrialsSampleAPIEnabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsOriginTrialsSampleAPIEnabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::OriginTrialsSampleAPIEnabled(ExecutionContext::From(context));
}

// static
bool WebOriginTrials::IsOriginTrialsSampleAPIDeprecationEnabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::OriginTrialsSampleAPIDeprecationEnabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsOriginTrialsSampleAPIDeprecationEnabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::OriginTrialsSampleAPIDeprecationEnabled(ExecutionContext::From(context));
}

// static
bool WebOriginTrials::IsPNaClEnabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::PNaClEnabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsPNaClEnabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::PNaClEnabled(ExecutionContext::From(context));
}

// static
bool WebOriginTrials::IsPreferredAudioOutputDevicesEnabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::PreferredAudioOutputDevicesEnabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsPreferredAudioOutputDevicesEnabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::PreferredAudioOutputDevicesEnabled(ExecutionContext::From(context));
}

// static
bool WebOriginTrials::IsPrefetchAndPrerenderActivationBeaconEnabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::PrefetchAndPrerenderActivationBeaconEnabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsPrefetchAndPrerenderActivationBeaconEnabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::PrefetchAndPrerenderActivationBeaconEnabled(ExecutionContext::From(context));
}

// static
bool WebOriginTrials::IsPrerenderUntilScriptEnabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::PrerenderUntilScriptEnabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsPrerenderUntilScriptEnabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::PrerenderUntilScriptEnabled(ExecutionContext::From(context));
}

// static
bool WebOriginTrials::IsTextFragmentIdentifiersEnabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::TextFragmentIdentifiersEnabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsTextFragmentIdentifiersEnabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::TextFragmentIdentifiersEnabled(ExecutionContext::From(context));
}

// static
bool WebOriginTrials::IsTouchEventFeatureDetectionEnabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::TouchEventFeatureDetectionEnabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsTouchEventFeatureDetectionEnabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::TouchEventFeatureDetectionEnabled(ExecutionContext::From(context));
}

// static
bool WebOriginTrials::IsWebMCPEnabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::WebMCPEnabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsWebMCPEnabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::WebMCPEnabled(ExecutionContext::From(context));
}

// static
bool WebOriginTrials::IsWebXRImageTrackingEnabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::WebXRImageTrackingEnabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsWebXRImageTrackingEnabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::WebXRImageTrackingEnabled(ExecutionContext::From(context));
}

// static
bool WebOriginTrials::IsWebXRPlaneDetectionEnabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::WebXRPlaneDetectionEnabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsWebXRPlaneDetectionEnabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::WebXRPlaneDetectionEnabled(ExecutionContext::From(context));
}

// static
bool WebOriginTrials::IsXSLTEnabled(const WebDocument* web_document) {
  if (!web_document) return false;
  Document* document = *web_document;
  return RuntimeEnabledFeatures::XSLTEnabled(document->GetExecutionContext());
}

// static
bool WebOriginTrials::IsXSLTEnabled(const v8::Local<v8::Context> context) {
  return RuntimeEnabledFeatures::XSLTEnabled(ExecutionContext::From(context));
}

} // namespace blink
