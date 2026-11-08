// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-on-startup-page' is a settings page.
 */
import '../controls/controlled_radio_button.js';
import '/shared/settings/controls/extension_controlled_indicator.js';
import '../controls/settings_radio_group.js';
import '../i18n_setup.js';
import '../settings_page/settings_section.js';
import './startup_urls_page.js';
// 
import '../controls/settings_toggle_button.js';
// 
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { getCss as getCrSharedStyle } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
// 
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
// 
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getSearchManager } from '../search_settings.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
import { OnStartupBrowserProxyImpl } from './on_startup_browser_proxy.js';
import { getHtml } from './on_startup_page.html.js';
/** Enum values for the 'session.restore_on_startup' preference. */
export var PrefValues;
(function (PrefValues) {
    PrefValues[PrefValues["CONTINUE"] = 1] = "CONTINUE";
    PrefValues[PrefValues["OPEN_NEW_TAB"] = 5] = "OPEN_NEW_TAB";
    PrefValues[PrefValues["OPEN_SPECIFIC"] = 4] = "OPEN_SPECIFIC";
    PrefValues[PrefValues["CONTINUE_AND_OPEN_SPECIFIC"] = 6] = "CONTINUE_AND_OPEN_SPECIFIC";
})(PrefValues || (PrefValues = {}));
const SettingsOnStartupPageElementBase = PrefServiceObserverMixinLit(WebUiListenerMixinLit(CrLitElement));
export class SettingsOnStartupPageElement extends SettingsOnStartupPageElementBase {
    static get is() {
        return 'settings-on-startup-page';
    }
    static get styles() {
        return [getCrSharedStyle(), getSettingsSharedLit()];
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            restoreOnStartupPref_: { type: Object },
            // 
            isForegroundLaunchFeatureEnabled_: { type: Boolean },
            // 
            ntpExtension_: { type: Object },
        };
    }
    #restoreOnStartupPref__accessor_storage;
    get restoreOnStartupPref_() { return this.#restoreOnStartupPref__accessor_storage; }
    set restoreOnStartupPref_(value) { this.#restoreOnStartupPref__accessor_storage = value; }
    #isForegroundLaunchFeatureEnabled__accessor_storage = loadTimeData.getBoolean('isForegroundLaunchFeatureEnabled');
    // 
    get isForegroundLaunchFeatureEnabled_() { return this.#isForegroundLaunchFeatureEnabled__accessor_storage; }
    set isForegroundLaunchFeatureEnabled_(value) { this.#isForegroundLaunchFeatureEnabled__accessor_storage = value; }
    #ntpExtension__accessor_storage = null;
    // 
    get ntpExtension_() { return this.#ntpExtension__accessor_storage; }
    set ntpExtension_(value) { this.#ntpExtension__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPref('session.restore_on_startup', 'restoreOnStartupPref_');
        const updateNtpExtension = (ntpExtension) => {
            // Note that |ntpExtension| is empty if there is no NTP extension.
            this.ntpExtension_ = ntpExtension;
        };
        OnStartupBrowserProxyImpl.getInstance().getNtpExtension().then(updateNtpExtension);
        this.addWebUiListener('update-ntp-extension', updateNtpExtension);
    }
    /**
     * Determine whether to show the user defined startup pages.
     * @return Whether the "open specific pages" or "continue and open specific
     *     pages" is selected.
     */
    showStartupUrls_() {
        if (!this.restoreOnStartupPref_) {
            return false;
        }
        const value = this.restoreOnStartupPref_.value;
        return value === PrefValues.OPEN_SPECIFIC ||
            value === PrefValues.CONTINUE_AND_OPEN_SPECIFIC;
    }
    /**
     * Determine whether to show "continue and open specific pages" option.
     * @return Whether the restoreOnStartup pref is recommended or enforced by
     *     policy.
     */
    showContinueAndOpenSpecific_() {
        if (!this.restoreOnStartupPref_) {
            return false;
        }
        return this.restoreOnStartupPref_.enforcement ===
            chrome.settingsPrivate.Enforcement.ENFORCED ||
            this.restoreOnStartupPref_.enforcement ===
                chrome.settingsPrivate.Enforcement.RECOMMENDED;
    }
    // SettingsPlugin implementation
    async searchContents(query) {
        const searchRequest = await getSearchManager().search(query, this);
        return searchRequest.getSearchResult();
    }
}
customElements.define(SettingsOnStartupPageElement.is, SettingsOnStartupPageElement);
