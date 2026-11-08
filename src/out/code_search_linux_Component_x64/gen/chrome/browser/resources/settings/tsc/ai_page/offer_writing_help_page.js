// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './ai_logging_info_bullet.js';
import './ai_policy_indicator.js';
import '../controls/settings_toggle_button.js';
import '../icons.html.js';
import '../settings_page/settings_subpage.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { AiPageComposeInteractions, MetricsBrowserProxyImpl } from '../metrics_browser_proxy.js';
import { SettingsViewMixinLit } from '../settings_page/settings_view_mixin_lit.js';
import { getAiLearnMoreUrl } from './ai_learn_more_url_util.js';
import { AiEnterpriseFeaturePrefName, AiPageActions } from './constants.js';
import { getCss } from './offer_writing_help_page.css.js';
import { getHtml } from './offer_writing_help_page.html.js';
export const COMPOSE_PROACTIVE_NUDGE_PREF = 'compose.proactive_nudge_enabled';
export const COMPOSE_PROACTIVE_NUDGE_DISABLED_SITES_PREF = 'compose.proactive_nudge_disabled_sites_with_time';
const SettingsOfferWritingHelpPageElementBase = SettingsViewMixinLit(I18nMixinLit(PrefServiceObserverMixinLit(CrLitElement)));
export class SettingsOfferWritingHelpPageElement extends SettingsOfferWritingHelpPageElementBase {
    static get is() {
        return 'settings-offer-writing-help-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            siteList_: { type: Array },
            enableComposeProactiveNudge_: { type: Boolean },
            enterprisePref_: { type: Object },
        };
    }
    #siteList__accessor_storage = [];
    get siteList_() { return this.#siteList__accessor_storage; }
    set siteList_(value) { this.#siteList__accessor_storage = value; }
    #enableComposeProactiveNudge__accessor_storage = loadTimeData.getBoolean('enableComposeProactiveNudge');
    get enableComposeProactiveNudge_() { return this.#enableComposeProactiveNudge__accessor_storage; }
    set enableComposeProactiveNudge_(value) { this.#enableComposeProactiveNudge__accessor_storage = value; }
    #enterprisePref__accessor_storage;
    get enterprisePref_() { return this.#enterprisePref__accessor_storage; }
    set enterprisePref_(value) { this.#enterprisePref__accessor_storage = value; }
    metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPref(AiEnterpriseFeaturePrefName.COMPOSE, 'enterprisePref_');
        this.addPrefObserver(COMPOSE_PROACTIVE_NUDGE_DISABLED_SITES_PREF, () => this.onPrefsChanged_());
    }
    recordInteractionMetrics_(interaction, action) {
        this.metricsBrowserProxy_.recordAiPageComposeInteractions(interaction);
        this.metricsBrowserProxy_.recordAction(action);
    }
    onLearnMoreClick_() {
        this.recordInteractionMetrics_(AiPageComposeInteractions.LEARN_MORE_LINK_CLICKED, AiPageActions.COMPOSE_LEARN_MORE_CLICKED);
    }
    onComposeProactiveNudgeToggleSettingsBooleanControlChange_(e) {
        const toggle = e.target;
        if (toggle.checked) {
            this.recordInteractionMetrics_(AiPageComposeInteractions.COMPOSE_PROACTIVE_NUDGE_ENABLED, AiPageActions.COMPOSE_PROACTIVE_NUDGE_ENABLED);
            return;
        }
        this.recordInteractionMetrics_(AiPageComposeInteractions.COMPOSE_PROACTIVE_NUDGE_DISABLED, AiPageActions.COMPOSE_PROACTIVE_NUDGE_DISABLED);
    }
    hasSites_() {
        return this.siteList_.length > 0;
    }
    onDeleteClick_(e) {
        const target = e.currentTarget;
        PrefService.getInstance().deletePrefDictEntry(COMPOSE_PROACTIVE_NUDGE_DISABLED_SITES_PREF, target.dataset['site']);
    }
    onPrefsChanged_() {
        const prefDict = PrefService.getInstance()
            .getPref(COMPOSE_PROACTIVE_NUDGE_DISABLED_SITES_PREF)
            .value;
        this.siteList_ = Object.keys(prefDict);
    }
    getLearnMoreUrl_() {
        return getAiLearnMoreUrl(this.enterprisePref_, loadTimeData.getString('composeLearnMorePageURL'), loadTimeData.getString('composeLearnMorePageManagedURL'));
    }
    // SettingsViewMixinLit implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(SettingsOfferWritingHelpPageElement.is, SettingsOfferWritingHelpPageElement);
