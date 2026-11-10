// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './ai_policy_indicator.js';
import '../settings_page/settings_subpage.js';
import '../controls/settings_toggle_button.js';
import '../icons.html.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { AiPageSuggestionsInteractions, MetricsBrowserProxyImpl } from '../metrics_browser_proxy.js';
import { SettingsViewMixinLit } from '../settings_page/settings_view_mixin_lit.js';
import { isFeatureDisabledByPolicy } from './ai_policy_indicator.js';
import { getCss } from './ai_suggestions_page.css.js';
import { getHtml } from './ai_suggestions_page.html.js';
import { AiEnterpriseFeaturePrefName, AiPageActions, FeatureOptInState } from './constants.js';
const SettingsAiSuggestionsPageElementBase = SettingsViewMixinLit(PrefServiceObserverMixinLit(CrLitElement));
export class SettingsAiSuggestionsPageElement extends SettingsAiSuggestionsPageElementBase {
    static get is() {
        return 'settings-ai-suggestions-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            enterprisePref_: { type: Object },
        };
    }
    #enterprisePref__accessor_storage;
    get enterprisePref_() { return this.#enterprisePref__accessor_storage; }
    set enterprisePref_(value) { this.#enterprisePref__accessor_storage = value; }
    metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPref(AiEnterpriseFeaturePrefName.CONTEXTUAL_CUEING, 'enterprisePref_');
    }
    recordInteractionMetrics_(interaction, action) {
        this.metricsBrowserProxy_.recordAiPageSuggestionsInteractions(interaction);
        this.metricsBrowserProxy_.recordAction(action);
    }
    computeNumericUncheckedValues_() {
        if (this.isDisabledByPolicy_()) {
            return [FeatureOptInState.DISABLED, FeatureOptInState.NOT_INITIALIZED];
        }
        return [FeatureOptInState.DISABLED];
    }
    onLearnMoreLinkClick_(event) {
        event.stopPropagation();
        this.recordInteractionMetrics_(AiPageSuggestionsInteractions.LEARN_MORE_LINK_CLICKED, AiPageActions.AI_SUGGESTIONS_LEARN_MORE_CLICKED);
    }
    onSyncSettingsLinkClick_(event) {
        event.stopPropagation();
        this.recordInteractionMetrics_(AiPageSuggestionsInteractions.SYNC_SETTINGS_LINK_CLICKED, AiPageActions.AI_SUGGESTIONS_SYNC_SETTINGS_CLICKED);
    }
    onShowSuggestionsToggleSettingsBooleanControlChange_(e) {
        const toggle = e.target;
        if (toggle.checked) {
            this.recordInteractionMetrics_(AiPageSuggestionsInteractions.SUGGESTIONS_ENABLED, AiPageActions.AI_SUGGESTIONS_ENABLED);
            return;
        }
        this.recordInteractionMetrics_(AiPageSuggestionsInteractions.SUGGESTIONS_DISABLED, AiPageActions.AI_SUGGESTIONS_DISABLED);
    }
    isDisabledByPolicy_() {
        return isFeatureDisabledByPolicy(this.enterprisePref_);
    }
    // SettingsViewMixinLit implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(SettingsAiSuggestionsPageElement.is, SettingsAiSuggestionsPageElement);
