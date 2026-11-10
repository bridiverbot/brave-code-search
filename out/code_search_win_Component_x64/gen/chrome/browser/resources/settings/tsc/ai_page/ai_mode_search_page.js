// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import '../controls/settings_toggle_button.js';
import '../settings_page/settings_section.js';
import './ai_site_add_dialog.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './ai_mode_search_page.css.js';
import { getHtml } from './ai_mode_search_page.html.js';
const SettingsAiModeSearchPageElementBase = PrefServiceObserverMixinLit(CrLitElement);
export class SettingsAiModeSearchPageElement extends SettingsAiModeSearchPageElementBase {
    static get is() {
        return 'settings-ai-mode-search-page';
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
            showAddSiteDialog_: { type: Boolean },
            siteToEdit_: { type: String },
            enterprisePref_: { type: Object },
        };
    }
    #siteList__accessor_storage = [];
    get siteList_() { return this.#siteList__accessor_storage; }
    set siteList_(value) { this.#siteList__accessor_storage = value; }
    #showAddSiteDialog__accessor_storage = false;
    get showAddSiteDialog_() { return this.#showAddSiteDialog__accessor_storage; }
    set showAddSiteDialog_(value) { this.#showAddSiteDialog__accessor_storage = value; }
    #siteToEdit__accessor_storage = '';
    get siteToEdit_() { return this.#siteToEdit__accessor_storage; }
    set siteToEdit_(value) { this.#siteToEdit__accessor_storage = value; }
    #enterprisePref__accessor_storage;
    get enterprisePref_() { return this.#enterprisePref__accessor_storage; }
    set enterprisePref_(value) { this.#enterprisePref__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPref('contextual_tasks.smart_tab_sharing_settings', 'enterprisePref_');
        this.addPrefObserver('contextual_tasks.site_exclusions', () => this.onSiteExclusionsChanged_());
    }
    isDisabledByPolicy_() {
        return !!this.enterprisePref_ && this.enterprisePref_.value === 1;
    }
    onSiteExclusionsChanged_() {
        const exclusions = this.getSiteExclusions();
        this.siteList_ = Object.keys(exclusions).sort();
    }
    hasSites_() {
        return this.siteList_.length > 0;
    }
    onAddSiteClick_() {
        this.siteToEdit_ = '';
        this.showAddSiteDialog_ = true;
    }
    onMenuClick_(e) {
        const target = e.currentTarget;
        this.siteToEdit_ = target.dataset['site'];
        this.$.menu.get().showAt(target);
    }
    onEditClick_() {
        this.$.menu.get().close();
        this.showAddSiteDialog_ = true;
    }
    onRemoveSiteClick_() {
        this.$.menu.get().close();
        this.removeSiteExclusion(this.siteToEdit_);
    }
    onAddSiteDialogClose_() {
        this.showAddSiteDialog_ = false;
    }
    onAddSite_(e) {
        if (this.siteToEdit_ && this.siteToEdit_ !== e.detail) {
            this.removeSiteExclusion(this.siteToEdit_);
        }
        this.addSiteExclusion(e.detail, Date.now());
    }
    getSiteExclusions() {
        const pref = PrefService.getInstance().getPref('contextual_tasks.site_exclusions');
        return pref ? pref.value : {};
    }
    addSiteExclusion(domain, timeAddedMs) {
        PrefService.getInstance().setPrefDictEntry('contextual_tasks.site_exclusions', domain, timeAddedMs);
    }
    removeSiteExclusion(domain) {
        PrefService.getInstance().deletePrefDictEntry('contextual_tasks.site_exclusions', domain);
    }
    onLearnMoreRowClick_() {
        OpenWindowProxyImpl.getInstance().openUrl('https://support.google.com/chrome?p=ai_mode_search');
    }
    onLearnMoreClick_(event) {
        event.stopPropagation();
    }
}
customElements.define(SettingsAiModeSearchPageElement.is, SettingsAiModeSearchPageElement);
