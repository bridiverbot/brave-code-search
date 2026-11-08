// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/runtime_feature_state_override_context.cc.tmpl
// and input files:
//   ../../third_party/blink/renderer/platform/runtime_enabled_features.json5
//   ../../third_party/blink/renderer/platform/runtime_enabled_features.override.json5


#include "third_party/blink/public/common/features.h"
#include "third_party/blink/public/mojom/origin_trials/origin_trial_feature.mojom-shared.h"
#include "third_party/blink/public/common/thread_safe_browser_interface_broker_proxy.h"
#include "third_party/blink/public/mojom/origin_trials/origin_trial_state_host.mojom-blink.h"
#include "third_party/blink/public/platform/browser_interface_broker_proxy.h"
#include "third_party/blink/public/platform/platform.h"
#include "third_party/blink/renderer/core/frame/web_feature.h"
#include "third_party/blink/renderer/platform/wtf/text/wtf_string.h"
#include "third_party/blink/renderer/platform/wtf/vector.h"
#include "third_party/blink/renderer/platform/runtime_feature_state/runtime_feature_state_override_context.h"

namespace blink {

void RuntimeFeatureStateOverrideContext::ApplyOverrideValuesFromParams(
    const base::flat_map<mojom::RuntimeFeature, bool>&
        values_from_params) {
  for(const auto& override_value : values_from_params) {
    override_values_[override_value.first] = override_value.second;
  }
}

bool RuntimeFeatureStateOverrideContext::
    IsDirectSocketsForceDisabled() const {
  auto it = override_values_.find(
      mojom::RuntimeFeature::kDirectSockets);
  if (it != override_values_.end() && it->second == false)
    return true;

  return false;
}

bool RuntimeFeatureStateOverrideContext::
    IsDirectSocketsForceEnabled() const {
  auto it = override_values_.find(mojom::RuntimeFeature::kDirectSockets);
  if(it != override_values_.end() && it->second == true)
    return true;

  return false;
}

void RuntimeFeatureStateOverrideContext::SetDirectSocketsForceDisabled() {
  override_values_[mojom::RuntimeFeature::kDirectSockets] = false;
}

void RuntimeFeatureStateOverrideContext::SetDirectSocketsForceEnabled() {
  override_values_[mojom::RuntimeFeature::kDirectSockets] = true;
}

bool RuntimeFeatureStateOverrideContext::
    IsEmailVerificationProtocolForceDisabled() const {
  auto it = override_values_.find(
      mojom::RuntimeFeature::kEmailVerificationProtocol);
  if (it != override_values_.end() && it->second == false)
    return true;

  return false;
}

bool RuntimeFeatureStateOverrideContext::
    IsEmailVerificationProtocolForceEnabled() const {
  auto it = override_values_.find(mojom::RuntimeFeature::kEmailVerificationProtocol);
  if(it != override_values_.end() && it->second == true)
    return true;

  return false;
}

void RuntimeFeatureStateOverrideContext::SetEmailVerificationProtocolForceDisabled() {
  override_values_[mojom::RuntimeFeature::kEmailVerificationProtocol] = false;
}

void RuntimeFeatureStateOverrideContext::SetEmailVerificationProtocolForceEnabled() {
  override_values_[mojom::RuntimeFeature::kEmailVerificationProtocol] = true;
}

bool RuntimeFeatureStateOverrideContext::
    SetEmailVerificationProtocolEnabled(const Vector<String>& tokens) {
  // Origin Trial feature values should not override any sent from
  // the browser, so we only add a value if has not already been set
  // in the override_values_ map with an identical token set. Return
  // whether the override was successful.
  auto value = mojom::blink::OriginTrialFeatureState::New(true, tokens);
  if(!override_values_.contains(
      mojom::RuntimeFeature::kEmailVerificationProtocol) ||
     origin_trial_overrides_[
      mojom::RuntimeFeature::kEmailVerificationProtocol] != value) {
    // Update the state of all feature overrides in this class.
    override_values_
      [mojom::RuntimeFeature::kEmailVerificationProtocol] = true;
    // Add successful overrides to the list of features we sent back
    // to the browser process.
    origin_trial_overrides_[
      mojom::RuntimeFeature::kEmailVerificationProtocol] = std::move(value);
    return true;
  }
  return false;
}
bool RuntimeFeatureStateOverrideContext::
    IsFetchRetryForceDisabled() const {
  auto it = override_values_.find(
      mojom::RuntimeFeature::kFetchRetry);
  if (it != override_values_.end() && it->second == false)
    return true;

  return false;
}

bool RuntimeFeatureStateOverrideContext::
    IsFetchRetryForceEnabled() const {
  auto it = override_values_.find(mojom::RuntimeFeature::kFetchRetry);
  if(it != override_values_.end() && it->second == true)
    return true;

  return false;
}

void RuntimeFeatureStateOverrideContext::SetFetchRetryForceDisabled() {
  override_values_[mojom::RuntimeFeature::kFetchRetry] = false;
}

void RuntimeFeatureStateOverrideContext::SetFetchRetryForceEnabled() {
  override_values_[mojom::RuntimeFeature::kFetchRetry] = true;
}

bool RuntimeFeatureStateOverrideContext::
    SetFetchRetryEnabled(const Vector<String>& tokens) {
  // Origin Trial feature values should not override any sent from
  // the browser, so we only add a value if has not already been set
  // in the override_values_ map with an identical token set. Return
  // whether the override was successful.
  auto value = mojom::blink::OriginTrialFeatureState::New(true, tokens);
  if(!override_values_.contains(
      mojom::RuntimeFeature::kFetchRetry) ||
     origin_trial_overrides_[
      mojom::RuntimeFeature::kFetchRetry] != value) {
    // Update the state of all feature overrides in this class.
    override_values_
      [mojom::RuntimeFeature::kFetchRetry] = true;
    // Add successful overrides to the list of features we sent back
    // to the browser process.
    origin_trial_overrides_[
      mojom::RuntimeFeature::kFetchRetry] = std::move(value);
    return true;
  }
  return false;
}
bool RuntimeFeatureStateOverrideContext::
    IsGetDisplayMediaWindowAudioCaptureForceDisabled() const {
  auto it = override_values_.find(
      mojom::RuntimeFeature::kGetDisplayMediaWindowAudioCapture);
  if (it != override_values_.end() && it->second == false)
    return true;

  return false;
}

bool RuntimeFeatureStateOverrideContext::
    IsGetDisplayMediaWindowAudioCaptureForceEnabled() const {
  auto it = override_values_.find(mojom::RuntimeFeature::kGetDisplayMediaWindowAudioCapture);
  if(it != override_values_.end() && it->second == true)
    return true;

  return false;
}

void RuntimeFeatureStateOverrideContext::SetGetDisplayMediaWindowAudioCaptureForceDisabled() {
  override_values_[mojom::RuntimeFeature::kGetDisplayMediaWindowAudioCapture] = false;
}

void RuntimeFeatureStateOverrideContext::SetGetDisplayMediaWindowAudioCaptureForceEnabled() {
  override_values_[mojom::RuntimeFeature::kGetDisplayMediaWindowAudioCapture] = true;
}

bool RuntimeFeatureStateOverrideContext::
    IsOriginTrialsSampleAPIBrowserReadWriteForceDisabled() const {
  auto it = override_values_.find(
      mojom::RuntimeFeature::kOriginTrialsSampleAPIBrowserReadWrite);
  if (it != override_values_.end() && it->second == false)
    return true;

  return false;
}

bool RuntimeFeatureStateOverrideContext::
    IsOriginTrialsSampleAPIBrowserReadWriteForceEnabled() const {
  auto it = override_values_.find(mojom::RuntimeFeature::kOriginTrialsSampleAPIBrowserReadWrite);
  if(it != override_values_.end() && it->second == true)
    return true;

  return false;
}

void RuntimeFeatureStateOverrideContext::SetOriginTrialsSampleAPIBrowserReadWriteForceDisabled() {
  override_values_[mojom::RuntimeFeature::kOriginTrialsSampleAPIBrowserReadWrite] = false;
}

void RuntimeFeatureStateOverrideContext::SetOriginTrialsSampleAPIBrowserReadWriteForceEnabled() {
  override_values_[mojom::RuntimeFeature::kOriginTrialsSampleAPIBrowserReadWrite] = true;
}

bool RuntimeFeatureStateOverrideContext::
    SetOriginTrialsSampleAPIBrowserReadWriteEnabled(const Vector<String>& tokens) {
  // Origin Trial feature values should not override any sent from
  // the browser, so we only add a value if has not already been set
  // in the override_values_ map with an identical token set. Return
  // whether the override was successful.
  auto value = mojom::blink::OriginTrialFeatureState::New(true, tokens);
  if(!override_values_.contains(
      mojom::RuntimeFeature::kOriginTrialsSampleAPIBrowserReadWrite) ||
     origin_trial_overrides_[
      mojom::RuntimeFeature::kOriginTrialsSampleAPIBrowserReadWrite] != value) {
    // Update the state of all feature overrides in this class.
    override_values_
      [mojom::RuntimeFeature::kOriginTrialsSampleAPIBrowserReadWrite] = true;
    // Add successful overrides to the list of features we sent back
    // to the browser process.
    origin_trial_overrides_[
      mojom::RuntimeFeature::kOriginTrialsSampleAPIBrowserReadWrite] = std::move(value);
    return true;
  }
  return false;
}
bool RuntimeFeatureStateOverrideContext::
    IsSetShapeForceDisabled() const {
  auto it = override_values_.find(
      mojom::RuntimeFeature::kSetShape);
  if (it != override_values_.end() && it->second == false)
    return true;

  return false;
}

bool RuntimeFeatureStateOverrideContext::
    IsSetShapeForceEnabled() const {
  auto it = override_values_.find(mojom::RuntimeFeature::kSetShape);
  if(it != override_values_.end() && it->second == true)
    return true;

  return false;
}

void RuntimeFeatureStateOverrideContext::SetSetShapeForceDisabled() {
  override_values_[mojom::RuntimeFeature::kSetShape] = false;
}

void RuntimeFeatureStateOverrideContext::SetSetShapeForceEnabled() {
  override_values_[mojom::RuntimeFeature::kSetShape] = true;
}

bool RuntimeFeatureStateOverrideContext::
    IsTestFeatureForceDisabled() const {
  auto it = override_values_.find(
      mojom::RuntimeFeature::kTestFeature);
  if (it != override_values_.end() && it->second == false)
    return true;

  return false;
}

bool RuntimeFeatureStateOverrideContext::
    IsTestFeatureForceEnabled() const {
  auto it = override_values_.find(mojom::RuntimeFeature::kTestFeature);
  if(it != override_values_.end() && it->second == true)
    return true;

  return false;
}

void RuntimeFeatureStateOverrideContext::SetTestFeatureForceDisabled() {
  override_values_[mojom::RuntimeFeature::kTestFeature] = false;
}

void RuntimeFeatureStateOverrideContext::SetTestFeatureForceEnabled() {
  override_values_[mojom::RuntimeFeature::kTestFeature] = true;
}

bool RuntimeFeatureStateOverrideContext::
    IsTestFeatureForBrowserProcessReadWriteAccessOriginTrialForceDisabled() const {
  auto it = override_values_.find(
      mojom::RuntimeFeature::kTestFeatureForBrowserProcessReadWriteAccessOriginTrial);
  if (it != override_values_.end() && it->second == false)
    return true;

  return false;
}

bool RuntimeFeatureStateOverrideContext::
    IsTestFeatureForBrowserProcessReadWriteAccessOriginTrialForceEnabled() const {
  auto it = override_values_.find(mojom::RuntimeFeature::kTestFeatureForBrowserProcessReadWriteAccessOriginTrial);
  if(it != override_values_.end() && it->second == true)
    return true;

  return false;
}

void RuntimeFeatureStateOverrideContext::SetTestFeatureForBrowserProcessReadWriteAccessOriginTrialForceDisabled() {
  override_values_[mojom::RuntimeFeature::kTestFeatureForBrowserProcessReadWriteAccessOriginTrial] = false;
}

void RuntimeFeatureStateOverrideContext::SetTestFeatureForBrowserProcessReadWriteAccessOriginTrialForceEnabled() {
  override_values_[mojom::RuntimeFeature::kTestFeatureForBrowserProcessReadWriteAccessOriginTrial] = true;
}

bool RuntimeFeatureStateOverrideContext::
    SetTestFeatureForBrowserProcessReadWriteAccessOriginTrialEnabled(const Vector<String>& tokens) {
  // Origin Trial feature values should not override any sent from
  // the browser, so we only add a value if has not already been set
  // in the override_values_ map with an identical token set. Return
  // whether the override was successful.
  auto value = mojom::blink::OriginTrialFeatureState::New(true, tokens);
  if(!override_values_.contains(
      mojom::RuntimeFeature::kTestFeatureForBrowserProcessReadWriteAccessOriginTrial) ||
     origin_trial_overrides_[
      mojom::RuntimeFeature::kTestFeatureForBrowserProcessReadWriteAccessOriginTrial] != value) {
    // Update the state of all feature overrides in this class.
    override_values_
      [mojom::RuntimeFeature::kTestFeatureForBrowserProcessReadWriteAccessOriginTrial] = true;
    // Add successful overrides to the list of features we sent back
    // to the browser process.
    origin_trial_overrides_[
      mojom::RuntimeFeature::kTestFeatureForBrowserProcessReadWriteAccessOriginTrial] = std::move(value);
    return true;
  }
  return false;
}

void RuntimeFeatureStateOverrideContext::ApplyOriginTrialOverride(
    const blink::mojom::blink::OriginTrialFeature& origin_trial_feature,
    const Vector<String>& tokens) {
  // Determine which of the overrideable features has been set
  // via Origin Trial.
  bool overridden = false;
  if(origin_trial_feature == blink::mojom::blink::OriginTrialFeature::kEmailVerificationProtocol) {
    overridden = SetEmailVerificationProtocolEnabled(tokens);
  }
  if(origin_trial_feature == blink::mojom::blink::OriginTrialFeature::kFetchRetry) {
    overridden = SetFetchRetryEnabled(tokens);
  }
  if(origin_trial_feature == blink::mojom::blink::OriginTrialFeature::kOriginTrialsSampleAPIBrowserReadWrite) {
    overridden = SetOriginTrialsSampleAPIBrowserReadWriteEnabled(tokens);
  }
  if(origin_trial_feature == blink::mojom::blink::OriginTrialFeature::kTestFeatureForBrowserProcessReadWriteAccessOriginTrial) {
    overridden = SetTestFeatureForBrowserProcessReadWriteAccessOriginTrialEnabled(tokens);
  }
  // Send the newly overriden values to the browser via IPC.
  if(overridden){
    // We must convert from std:: types to WTF types.
    // TODO(https://crbug.com/1377000): make origin_trial_overrides_ a
    // WTF type in a follow-up CL.
    HashMap<mojom::blink::RuntimeFeature,
            mojom::blink::OriginTrialFeatureStatePtr>
        blink_overrides;
    for (auto& o : origin_trial_overrides_){
      blink_overrides.insert(o.first, std::move(o.second));
    }
    // Feature overrides and origin trial information should only be
    // sent to the browser process if the corresponding base::Feature
    // is enabled.
    GetOrBindOriginTrialStateHost()->ApplyFeatureDiffForOriginTrial(
        std::move(blink_overrides));
    // TODO(https://crbug.com/1377000): when we convert to WTF types,
    // we use std::move, so we have to do some cleanup.
    origin_trial_overrides_.clear();
  }
}

void RuntimeFeatureStateOverrideContext::EnablePersistentTrial(
      const String& raw_token,
      const Vector<scoped_refptr<const blink::SecurityOrigin>>&
          script_origins) {
    GetOrBindOriginTrialStateHost()->EnablePersistentTrial(
        raw_token, script_origins);
  }

mojom::blink::OriginTrialStateHost*
RuntimeFeatureStateOverrideContext::GetOrBindOriginTrialStateHost(){
  // It's possible that the prior interface we bound is no longer available
  // in which case we should reset the connection and re-bind a new one.
  if (origin_trial_state_host_remote_.is_bound() &&
      !origin_trial_state_host_remote_.is_connected()) {
    origin_trial_state_host_remote_.reset();
  }
  // TODO(https://crbug.com/1410817): add support for workers/non-frames that
  // are enabling origin trials to send their information to the browser too.
  if (!origin_trial_state_host_remote_.is_bound()) {
      CHECK(send_runtime_features_to_browser_);
      binding_context_->GetBrowserInterfaceBroker().GetInterface(
          origin_trial_state_host_remote_.BindNewPipeAndPassReceiver(
              binding_context_->GetTaskRunner(TaskType::kInternalDefault)));
    }
  return origin_trial_state_host_remote_.get();
}

void RuntimeFeatureStateOverrideContext::Trace(Visitor* visitor) const{
  visitor->Trace(binding_context_);
  visitor->Trace(use_counter_);
  visitor->Trace(origin_trial_state_host_remote_);
}

}  // namespace blink
