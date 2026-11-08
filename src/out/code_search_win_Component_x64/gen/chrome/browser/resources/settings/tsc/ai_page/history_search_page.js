// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import './ai_logging_info_bullet.js';
import '../controls/settings_toggle_button.js';
import '../settings_page/settings_subpage.js';
import '../icons.html.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { AiPageHistorySearchInteractions, MetricsBrowserProxyImpl } from '../metrics_browser_proxy.js';
import { SettingsViewMixinLit } from '../settings_page/settings_view_mixin_lit.js';
import { getAiLearnMoreUrl } from './ai_learn_more_url_util.js';
import { isFeatureDisabledByPolicy } from './ai_policy_indicator.js';
import { AiEnterpriseFeaturePrefName, AiPageActions, FeatureOptInState } from './constants.js';
import { getCss } from './history_search_page.css.js';
import { getHtml } from './history_search_page.html.js';
const SettingsHistorySearchPageElementBase = SettingsViewMixinLit(PrefServiceObserverMixinLit(CrLitElement));
export class SettingsHistorySearchPageElement extends SettingsHistorySearchPageElementBase {
    static get is() {
        return 'settings-history-search-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            isAnswersFeatureEnabled_: { type: Boolean },
            numericUncheckedValues_: { type: Array },
            toggleSubLabelV2_: { type: String },
            enterprisePref_: { type: Object },
        };
    }
    #isAnswersFeatureEnabled__accessor_storage = loadTimeData.getBoolean('historyEmbeddingsAnswersFeatureEnabled');
    get isAnswersFeatureEnabled_() { return this.#isAnswersFeatureEnabled__accessor_storage; }
    set isAnswersFeatureEnabled_(value) { this.#isAnswersFeatureEnabled__accessor_storage = value; }
    #numericUncheckedValues__accessor_storage = [FeatureOptInState.DISABLED, FeatureOptInState.NOT_INITIALIZED];
    get numericUncheckedValues_() { return this.#numericUncheckedValues__accessor_storage; }
    set numericUncheckedValues_(value) { this.#numericUncheckedValues__accessor_storage = value; }
    #toggleSubLabelV2__accessor_storage = (loadTimeData.getBoolean('historyEmbeddingsAnswersFeatureEnabled') ?
        loadTimeData.getString('historySearchWithAnswersSettingSublabelV2') :
        loadTimeData.getString('historySearchSettingSublabelV2')) +
        loadTimeData.getString('sentenceEnd') +
        ' ';
    // TODO(crbug.com/362225975): Remove V2 suffixes.
    get toggleSubLabelV2_() { return this.#toggleSubLabelV2__accessor_storage; } // Whitespace is needed to separate the sub-label from the
    set toggleSubLabelV2_(value) { this.#toggleSubLabelV2__accessor_storage = value; }
    #enterprisePref__accessor_storage;
    // following Learn More.
    get enterprisePref_() { return this.#enterprisePref__accessor_storage; }
    set enterprisePref_(value) { this.#enterprisePref__accessor_storage = value; }
    metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPref(AiEnterpriseFeaturePrefName.HISTORY_SEARCH, 'enterprisePref_');
    }
    recordInteractionMetrics_(interaction, action) {
        this.metricsBrowserProxy_.recordAiPageHistorySearchInteractions(interaction);
        this.metricsBrowserProxy_.recordAction(action);
    }
    onHistorySearchLinkoutClick_() {
        this.recordInteractionMetrics_(AiPageHistorySearchInteractions.FEATURE_LINK_CLICKED, AiPageActions.HISTORY_SEARCH_FEATURE_LINK_CLICKED);
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('historySearchDataHomeUrl'));
    }
    onLearnMoreClick_(event) {
        // Stop the propagation of events, so that clicking on the 'Learn More' link
        // won't trigger the external linkout action on the parent cr-link-row
        // element.
        event.stopPropagation();
        this.recordInteractionMetrics_(AiPageHistorySearchInteractions.LEARN_MORE_LINK_CLICKED, AiPageActions.HISTORY_SEARCH_LEARN_MORE_CLICKED);
    }
    onHistorySearchToggleSettingsBooleanControlChange_(e) {
        const toggle = e.target;
        if (toggle.checked) {
            this.recordInteractionMetrics_(AiPageHistorySearchInteractions.HISTORY_SEARCH_ENABLED, AiPageActions.HISTORY_SEARCH_ENABLED);
            return;
        }
        this.recordInteractionMetrics_(AiPageHistorySearchInteractions.HISTORY_SEARCH_DISABLED, AiPageActions.HISTORY_SEARCH_DISABLED);
    }
    getLearnMoreUrl_() {
        return getAiLearnMoreUrl(this.enterprisePref_, loadTimeData.getString('historySearchLearnMoreUrl'), loadTimeData.getString('historySearchLearnMoreManagedUrl'));
    }
    isDisabledByPolicy_() {
        return isFeatureDisabledByPolicy(this.enterprisePref_);
    }
    // SettingsViewMixinLit implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(SettingsHistorySearchPageElement.is, SettingsHistorySearchPageElement);
