// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-ai-policy-indicator' is an indicator that informs the user if the
 * feature is controlled by policy.
 */
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import { PrefKeyObserverMixinLit } from '/shared/settings/prefs2/pref_key_observer_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './ai_policy_indicator.css.js';
import { getHtml } from './ai_policy_indicator.html.js';
import { AiEnterpriseFeaturePrefName, ChromeSuggestionsSettingsValue, ModelExecutionEnterprisePolicyValue } from './constants.js';
export function isFeatureDisabledByPolicy(enterprisePref) {
    if (!enterprisePref) {
        return false;
    }
    if (enterprisePref.key === AiEnterpriseFeaturePrefName.CONTEXTUAL_CUEING) {
        return enterprisePref.value === ChromeSuggestionsSettingsValue.DISABLED;
    }
    return enterprisePref.value === ModelExecutionEnterprisePolicyValue.DISABLE;
}
const SettingsAiPolicyIndicatorElementBase = PrefKeyObserverMixinLit(CrLitElement);
export class SettingsAiPolicyIndicatorElement extends SettingsAiPolicyIndicatorElementBase {
    static get is() {
        return 'settings-ai-policy-indicator';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    isFeatureDisabledByPolicy_() {
        return isFeatureDisabledByPolicy(this.pref);
    }
}
customElements.define(SettingsAiPolicyIndicatorElement.is, SettingsAiPolicyIndicatorElement);
