// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-ai-page-index' is the settings page containing settings for ai
 * features.
 */
import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import './ai_info_card.js';
import './ai_mode_search_page.js';
import './ai_page.js';
import '../geic_page/geic_page.js';
import '../geic_page/geic_subpage.js';
import '../glic_page/glic_page.js';
import '../glic_page/glic_subpage.js';
import './inline_cue_menu_page.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { routes } from '../route.js';
import { RouteObserverMixinLit } from '../router.js';
import { SearchableViewContainerMixinLit } from '../settings_page/searchable_view_container_mixin_lit.js';
import { getCss } from './ai_page_index.css.js';
import { getHtml } from './ai_page_index.html.js';
const SettingsAiPageIndexElementBase = SearchableViewContainerMixinLit(RouteObserverMixinLit(CrLitElement));
export class SettingsAiPageIndexElement extends SettingsAiPageIndexElementBase {
    static get is() {
        return 'settings-ai-page-index';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            routes_: { type: Object },
            showGlicSettings_: { type: Boolean },
            showGeicSettings_: { type: Boolean },
            showAiPageAiFeatureSection_: { type: Boolean },
            showComposeControl_: { type: Boolean },
            showHistorySearchControl_: { type: Boolean },
            enableAiModeSearchSetting_: { type: Boolean },
            actorLoginFederatedLoginSupportEnabled_: { type: Boolean },
            showAiSuggestionsControl_: { type: Boolean },
            showInlineCueMenuControl_: { type: Boolean },
            showSkillsSettingPage_: { type: Boolean },
            showDictationControl_: { type: Boolean },
        };
    }
    #routes__accessor_storage = routes;
    get routes_() { return this.#routes__accessor_storage; }
    set routes_(value) { this.#routes__accessor_storage = value; }
    #showGlicSettings__accessor_storage = loadTimeData.getBoolean('showGlicSettings');
    get showGlicSettings_() { return this.#showGlicSettings__accessor_storage; }
    set showGlicSettings_(value) { this.#showGlicSettings__accessor_storage = value; }
    #showGeicSettings__accessor_storage = loadTimeData.getBoolean('showGeicSettings');
    get showGeicSettings_() { return this.#showGeicSettings__accessor_storage; }
    set showGeicSettings_(value) { this.#showGeicSettings__accessor_storage = value; }
    #showAiPageAiFeatureSection__accessor_storage = loadTimeData.getBoolean('showAiPageAiFeatureSection');
    get showAiPageAiFeatureSection_() { return this.#showAiPageAiFeatureSection__accessor_storage; }
    set showAiPageAiFeatureSection_(value) { this.#showAiPageAiFeatureSection__accessor_storage = value; }
    #showComposeControl__accessor_storage = loadTimeData.getBoolean('showComposeControl');
    get showComposeControl_() { return this.#showComposeControl__accessor_storage; }
    set showComposeControl_(value) { this.#showComposeControl__accessor_storage = value; }
    #showHistorySearchControl__accessor_storage = loadTimeData.getBoolean('showHistorySearchControl');
    get showHistorySearchControl_() { return this.#showHistorySearchControl__accessor_storage; }
    set showHistorySearchControl_(value) { this.#showHistorySearchControl__accessor_storage = value; }
    #enableAiModeSearchSetting__accessor_storage = loadTimeData.getBoolean('enableAiModeSearchSetting');
    get enableAiModeSearchSetting_() { return this.#enableAiModeSearchSetting__accessor_storage; }
    set enableAiModeSearchSetting_(value) { this.#enableAiModeSearchSetting__accessor_storage = value; }
    #actorLoginFederatedLoginSupportEnabled__accessor_storage = loadTimeData.getBoolean('actorLoginFederatedLoginSupportEnabled');
    get actorLoginFederatedLoginSupportEnabled_() { return this.#actorLoginFederatedLoginSupportEnabled__accessor_storage; }
    set actorLoginFederatedLoginSupportEnabled_(value) { this.#actorLoginFederatedLoginSupportEnabled__accessor_storage = value; }
    #showAiSuggestionsControl__accessor_storage = loadTimeData.getBoolean('showAiSuggestionsControl');
    get showAiSuggestionsControl_() { return this.#showAiSuggestionsControl__accessor_storage; }
    set showAiSuggestionsControl_(value) { this.#showAiSuggestionsControl__accessor_storage = value; }
    #showInlineCueMenuControl__accessor_storage = loadTimeData.getBoolean('showInlineCueMenuControl');
    get showInlineCueMenuControl_() { return this.#showInlineCueMenuControl__accessor_storage; }
    set showInlineCueMenuControl_(value) { this.#showInlineCueMenuControl__accessor_storage = value; }
    #showSkillsSettingPage__accessor_storage = loadTimeData.getBoolean('showSkillsSettingPage');
    get showSkillsSettingPage_() { return this.#showSkillsSettingPage__accessor_storage; }
    set showSkillsSettingPage_(value) { this.#showSkillsSettingPage__accessor_storage = value; }
    #showDictationControl__accessor_storage = loadTimeData.getBoolean('showDictationControl');
    get showDictationControl_() { return this.#showDictationControl__accessor_storage; }
    set showDictationControl_(value) { this.#showDictationControl__accessor_storage = value; }
    showDefaultViews_() {
        const defaultViews = ['aiInfoCard'];
        if (this.showAiPageAiFeatureSection_) {
            defaultViews.push('parent');
        }
        if (this.enableAiModeSearchSetting_) {
            defaultViews.push('aiModeSearch');
        }
        if (this.showGlicSettings_) {
            defaultViews.push('glic');
        }
        if (this.showGeicSettings_) {
            defaultViews.push('geic');
        }
        this.$.viewManager.switchViews(defaultViews, 'no-animation', 'no-animation');
    }
    shouldShowPermissionsPage_() {
        return this.showGlicSettings_ &&
            this.actorLoginFederatedLoginSupportEnabled_;
    }
    currentRouteChanged(newRoute, oldRoute) {
        super.currentRouteChanged(newRoute, oldRoute);
        // Need to wait for currentRouteChanged observers on child views to run
        // first, before switching views.
        queueMicrotask(() => {
            switch (newRoute) {
                case routes.AI:
                    this.showDefaultViews_();
                    break;
                case routes.BASIC:
                    // Switch back to the default view in case they are part of search
                    // results.
                    this.showDefaultViews_();
                    break;
                case routes.HISTORY_SEARCH:
                    assert(this.showHistorySearchControl_);
                    this.$.viewManager.switchView('historySearch', 'no-animation', 'no-animation');
                    break;
                case routes.OFFER_WRITING_HELP:
                    assert(this.showComposeControl_);
                    this.$.viewManager.switchView('compose', 'no-animation', 'no-animation');
                    break;
                case routes.GEMINI:
                    assert(this.showGlicSettings_);
                    this.$.viewManager.switchView('gemini', 'no-animation', 'no-animation');
                    break;
                case routes.GEMINI_LOGIN:
                    assert(this.showGlicSettings_);
                    assert(this.actorLoginFederatedLoginSupportEnabled_);
                    this.$.viewManager.switchView('geminiLoginPermissions', 'no-animation', 'no-animation');
                    break;
                case routes.GEMINI_ENTERPRISE:
                    assert(this.showGeicSettings_);
                    this.$.viewManager.switchView('geminiEnterprise', 'no-animation', 'no-animation');
                    break;
                case routes.AI_SUGGESTIONS:
                    assert(this.showAiSuggestionsControl_);
                    this.$.viewManager.switchView('aiSuggestions', 'no-animation', 'no-animation');
                    break;
                case routes.INLINE_CUE_MENU:
                    assert(this.showInlineCueMenuControl_);
                    this.$.viewManager.switchView('inlineCueMenu', 'no-animation', 'no-animation');
                    break;
                case routes.SKILLS:
                    assert(this.showSkillsSettingPage_);
                    this.$.viewManager.switchView('skills', 'no-animation', 'no-animation');
                    break;
                case routes.DICTATION:
                    assert(this.showDictationControl_);
                    this.$.viewManager.switchView('dictation', 'no-animation', 'no-animation');
                    break;
                default:
                    // Nothing to do. Other parent elements are responsible for updating
                    // the displayed contents.
                    break;
            }
        });
    }
}
customElements.define(SettingsAiPageIndexElement.is, SettingsAiPageIndexElement);
