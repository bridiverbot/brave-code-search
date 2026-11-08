// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../controls/settings_toggle_button.js';
import '../icons.html.js';
import '../settings_page/settings_section.js';
import '../privacy_icons.html.js';
// 
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { AiPageInteractions, MetricsBrowserProxyImpl } from '../metrics_browser_proxy.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { SettingsViewMixinLit } from '../settings_page/settings_view_mixin_lit.js';
import { getCss } from './ai_page.css.js';
import { getHtml } from './ai_page.html.js';
import { FeatureOptInState, SettingsAiPageFeaturePrefName } from './constants.js';
// 
const SettingsAiPageElementBase = WebUiListenerMixinLit(SettingsViewMixinLit(PrefServiceObserverMixinLit(CrLitElement)));
export class SettingsAiPageElement extends SettingsAiPageElementBase {
    static get is() {
        return 'settings-ai-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            showComposeControl_: { type: Boolean },
            showHistorySearchControl_: { type: Boolean },
            showPasswordChangeControl_: { type: Boolean },
            showAiSuggestionsControl_: { type: Boolean },
            showInlineCueMenuControl_: { type: Boolean },
            showSkillsSettingPage_: { type: Boolean },
            showIndigoControl_: { type: Boolean },
            showGoogleSearchAiModeWorkspaceControl_: { type: Boolean },
            showDictationControl_: { type: Boolean },
            historySearchPref_: { type: Object },
        };
    }
    #historySearchPref__accessor_storage;
    get historySearchPref_() { return this.#historySearchPref__accessor_storage; }
    set historySearchPref_(value) { this.#historySearchPref__accessor_storage = value; }
    #showComposeControl__accessor_storage = loadTimeData.getBoolean('showComposeControl');
    get showComposeControl_() { return this.#showComposeControl__accessor_storage; }
    set showComposeControl_(value) { this.#showComposeControl__accessor_storage = value; }
    #showHistorySearchControl__accessor_storage = loadTimeData.getBoolean('showHistorySearchControl');
    get showHistorySearchControl_() { return this.#showHistorySearchControl__accessor_storage; }
    set showHistorySearchControl_(value) { this.#showHistorySearchControl__accessor_storage = value; }
    #showPasswordChangeControl__accessor_storage = loadTimeData.getBoolean('showPasswordChangeControl');
    get showPasswordChangeControl_() { return this.#showPasswordChangeControl__accessor_storage; }
    set showPasswordChangeControl_(value) { this.#showPasswordChangeControl__accessor_storage = value; }
    #showAiSuggestionsControl__accessor_storage = loadTimeData.getBoolean('showAiSuggestionsControl');
    get showAiSuggestionsControl_() { return this.#showAiSuggestionsControl__accessor_storage; }
    set showAiSuggestionsControl_(value) { this.#showAiSuggestionsControl__accessor_storage = value; }
    #showInlineCueMenuControl__accessor_storage = loadTimeData.getBoolean('showInlineCueMenuControl');
    get showInlineCueMenuControl_() { return this.#showInlineCueMenuControl__accessor_storage; }
    set showInlineCueMenuControl_(value) { this.#showInlineCueMenuControl__accessor_storage = value; }
    #showSkillsSettingPage__accessor_storage = loadTimeData.getBoolean('showSkillsSettingPage');
    get showSkillsSettingPage_() { return this.#showSkillsSettingPage__accessor_storage; }
    set showSkillsSettingPage_(value) { this.#showSkillsSettingPage__accessor_storage = value; }
    #showIndigoControl__accessor_storage = loadTimeData.getBoolean('showIndigoControl');
    get showIndigoControl_() { return this.#showIndigoControl__accessor_storage; }
    set showIndigoControl_(value) { this.#showIndigoControl__accessor_storage = value; }
    #showGoogleSearchAiModeWorkspaceControl__accessor_storage = loadTimeData.getBoolean('showGoogleSearchAiModeWorkspaceControl');
    get showGoogleSearchAiModeWorkspaceControl_() { return this.#showGoogleSearchAiModeWorkspaceControl__accessor_storage; }
    set showGoogleSearchAiModeWorkspaceControl_(value) { this.#showGoogleSearchAiModeWorkspaceControl__accessor_storage = value; }
    #showDictationControl__accessor_storage = loadTimeData.getBoolean('showDictationControl');
    get showDictationControl_() { return this.#showDictationControl__accessor_storage; }
    set showDictationControl_(value) { this.#showDictationControl__accessor_storage = value; }
    shouldRecordMetrics_ = true;
    metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    // 
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPref(SettingsAiPageFeaturePrefName.HISTORY_SEARCH, 'historySearchPref_');
        this.maybeLogVisibilityMetrics_();
        // 
    }
    maybeLogVisibilityMetrics_() {
        // Only record metrics when the user first navigates to the main AI page.
        if (!this.shouldRecordMetrics_ ||
            Router.getInstance().getCurrentRoute() !== routes.AI) {
            return;
        }
        this.shouldRecordMetrics_ = false;
        this.metricsBrowserProxy_.recordBooleanHistogram('Settings.AiPage.ElementVisibility.HistorySearch', this.showHistorySearchControl_);
        this.metricsBrowserProxy_.recordBooleanHistogram('Settings.AiPage.ElementVisibility.Compose', this.showComposeControl_);
        this.metricsBrowserProxy_.recordBooleanHistogram('Settings.AiPage.ElementVisibility.PasswordChange', this.showPasswordChangeControl_);
        this.metricsBrowserProxy_.recordBooleanHistogram('Settings.AiPage.ElementVisibility.AiSuggestions', this.showAiSuggestionsControl_);
        this.metricsBrowserProxy_.recordBooleanHistogram('Settings.AiPage.ElementVisibility.Indigo', this.showIndigoControl_);
        this.metricsBrowserProxy_.recordBooleanHistogram('Settings.AiPage.ElementVisibility.GoogleSearchAiModeWorkspace', this.showGoogleSearchAiModeWorkspaceControl_);
    }
    onHistorySearchRowClick_() {
        this.recordInteractionMetrics_(AiPageInteractions.HISTORY_SEARCH_CLICK, 'Settings.AiPage.HistorySearchEntryPointClick');
        const router = Router.getInstance();
        router.navigateTo(router.getRoutes().HISTORY_SEARCH);
    }
    onComposeRowClick_() {
        this.recordInteractionMetrics_(AiPageInteractions.COMPOSE_CLICK, 'Settings.AiPage.ComposeEntryPointClick');
        const router = Router.getInstance();
        router.navigateTo(router.getRoutes().OFFER_WRITING_HELP);
    }
    onPasswordChangeRowClick_() {
        this.recordInteractionMetrics_(AiPageInteractions.PASSWORD_CHANGE_CLICK, 'Settings.AiPage.PasswordChangeEntryPointClick');
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('passwordChangeSettingsUrl'));
    }
    onAiSuggestionsRowClick_() {
        this.recordInteractionMetrics_(AiPageInteractions.AI_SUGGESTIONS_CLICK, 'Settings.AiPage.AiSuggestionsEntryPointClick');
        const router = Router.getInstance();
        router.navigateTo(router.getRoutes().AI_SUGGESTIONS);
    }
    onInlineCueMenuRowClick_() {
        this.recordInteractionMetrics_(AiPageInteractions.INLINE_CUE_MENU_CLICK, 'Settings.AiPage.InlineCueMenuEntryPointClick');
        const router = Router.getInstance();
        router.navigateTo(router.getRoutes().INLINE_CUE_MENU);
    }
    onSkillsRowClick_() {
        this.recordInteractionMetrics_(AiPageInteractions.SKILLS_CLICK, 'Settings.AiPage.SkillsEntryPointClick');
        const router = Router.getInstance();
        router.navigateTo(router.getRoutes().SKILLS);
    }
    onDictationRowClick_() {
        const router = Router.getInstance();
        router.navigateTo(router.getRoutes().DICTATION);
    }
    getIndigoStartIcon_() {
        // 
        return 'settings20:button-magic';
        // 
        // 
    }
    onIndigoRowClick_() {
        this.recordInteractionMetrics_(AiPageInteractions.INDIGO_CLICK, 'Settings.AiPage.IndigoEntryPointClick');
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('indigoSavedUrl'));
    }
    onGoogleSearchAiModeWorkspaceRowClick_() {
        this.recordInteractionMetrics_(AiPageInteractions.GOOGLE_SEARCH_AI_MODE_WORKSPACE_CLICK, 'Settings.AiPage.GoogleSearchAiModeWorkspaceEntryPointClick');
        let isRestricted = false;
        try {
            const consentState = PrefService.getInstance()
                .getPref('contextual_search.drive_consent_state')
                .value;
            isRestricted = consentState === 1; // DriveConsentState::kRestricted
        }
        catch (e) {
            console.error('Failed to read contextual_search.drive_consent_state pref:', e);
        }
        let url;
        try {
            url = loadTimeData.getString(isRestricted ? 'googleSearchAiModeRestrictedUrl' :
                'googleSearchAiModeWorkspaceUrl');
        }
        catch (e) {
            console.error('Failed to read URL from loadTimeData:', e);
            return;
        }
        OpenWindowProxyImpl.getInstance().openUrl(url);
    }
    recordInteractionMetrics_(interaction, action) {
        this.metricsBrowserProxy_.recordAiPageInteractions(interaction);
        this.metricsBrowserProxy_.recordAction(action);
    }
    getHistorySearchSublabel_() {
        const isAnswersEnabled = loadTimeData.getBoolean('historyEmbeddingsAnswersFeatureEnabled');
        if (this.historySearchPref_?.value === FeatureOptInState.ENABLED) {
            return isAnswersEnabled ?
                loadTimeData.getString('historySearchWithAnswersSublabelOn') :
                loadTimeData.getString('historySearchSublabelOn');
        }
        return isAnswersEnabled ?
            loadTimeData.getString('historySearchWithAnswersSublabelOff') :
            loadTimeData.getString('historySearchSublabelOff');
    }
    // 
    // SettingsViewMixinLit implementation.
    getFocusConfig() {
        const map = new Map();
        if (routes.HISTORY_SEARCH) {
            map.set(routes.HISTORY_SEARCH.path, '#historySearchRowV2');
        }
        if (routes.OFFER_WRITING_HELP) {
            map.set(routes.OFFER_WRITING_HELP.path, '#composeRowV2');
        }
        if (routes.AI_SUGGESTIONS) {
            map.set(routes.AI_SUGGESTIONS.path, '#aiSuggestionsRow');
        }
        if (routes.INLINE_CUE_MENU) {
            map.set(routes.INLINE_CUE_MENU.path, '#inlineCueMenuRow');
        }
        if (routes.SKILLS) {
            map.set(routes.SKILLS.path, '#skillsRow');
        }
        if (routes.DICTATION) {
            map.set(routes.DICTATION.path, '#dictationRow');
        }
        return map;
    }
    // SettingsViewMixinLit implementation.
    getAssociatedControlFor(childViewId) {
        const ids = [
            'compose',
            'dictation',
            'historySearch',
            'aiSuggestions',
            'inlineCueMenu',
            'skills',
        ];
        assert(ids.includes(childViewId));
        let triggerId = null;
        switch (childViewId) {
            case 'compose':
                assert(this.showComposeControl_);
                triggerId = 'composeRowV2';
                break;
            case 'historySearch':
                assert(this.showHistorySearchControl_);
                triggerId = 'historySearchRowV2';
                break;
            case 'aiSuggestions':
                assert(this.showAiSuggestionsControl_);
                triggerId = 'aiSuggestionsRow';
                break;
            case 'inlineCueMenu':
                assert(this.showInlineCueMenuControl_);
                triggerId = 'inlineCueMenuRow';
                break;
            case 'skills':
                assert(this.showSkillsSettingPage_);
                triggerId = 'skillsRow';
                break;
            case 'dictation':
                assert(this.showDictationControl_);
                triggerId = 'dictationRow';
                break;
            default:
                assertNotReached();
        }
        assert(triggerId);
        const control = this.shadowRoot.querySelector(`#${triggerId}`);
        assert(control, `Failed to find associated control for child '${childViewId}'`);
        return control;
    }
}
customElements.define(SettingsAiPageElement.is, SettingsAiPageElement);
