// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/runtime_feature_state_context.cc.tmpl
// and input files:
//   ../../third_party/blink/renderer/platform/runtime_enabled_features.json5
//   ../../third_party/blink/renderer/platform/runtime_enabled_features.override.json5


#include "third_party/blink/public/common/runtime_feature_state/runtime_feature_state_context.h"

#include "base/containers/flat_map.h"
#include "third_party/blink/public/mojom/runtime_feature_state/runtime_feature.mojom-shared.h"
#include "third_party/blink/public/common/runtime_feature_state/runtime_feature_state_read_context.h"

namespace blink {

void RuntimeFeatureStateContext::PopulateInitialValues() {
  // Write access implies read, so we are populating all inital values
  initial_values_.reserve(8);

  initial_values_.insert(
      {blink::mojom::RuntimeFeature::kDirectSockets, false});
  initial_values_.insert(
      {blink::mojom::RuntimeFeature::kEmailVerificationProtocol, false});
  initial_values_.insert(
      {blink::mojom::RuntimeFeature::kFetchRetry, false});
  initial_values_.insert(
      {blink::mojom::RuntimeFeature::kGetDisplayMediaWindowAudioCapture, false});
  initial_values_.insert(
      {blink::mojom::RuntimeFeature::kOriginTrialsSampleAPIBrowserReadWrite, false});
  initial_values_.insert(
      {blink::mojom::RuntimeFeature::kSetShape, false});
  initial_values_.insert(
      {blink::mojom::RuntimeFeature::kTestFeature, false});
  initial_values_.insert(
      {blink::mojom::RuntimeFeature::kTestFeatureForBrowserProcessReadWriteAccessOriginTrial, false});
}

}  // namespace blink
