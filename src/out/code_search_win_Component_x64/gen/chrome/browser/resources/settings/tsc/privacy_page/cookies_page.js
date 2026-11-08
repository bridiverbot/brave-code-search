// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-cookies-page' is the settings page containing cookies
 * settings.
 */
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../controls/collapse_radio_button.js';
import '../controls/controlled_radio_button.js';
import '../controls/settings_radio_group.js';
import '../controls/settings_toggle_button.js';
import '../icons.html.js';
import '../privacy_icons.html.js';
import '../settings_page/settings_subpage.js';
import '../site_settings/site_list.js';
import './do_not_track_toggle.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { MetricsBrowserProxyImpl, PrivacyElementInteractions } from '../metrics_browser_proxy.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { SettingsViewMixinLit } from '../settings_page/settings_view_mixin_lit.js';
import { ThirdPartyCookieBlockingSetting } from '../site_settings/site_settings_browser_proxy.js';
import { getCss } from './cookies_page.css.js';
import { getHtml } from './cookies_page.html.js';
const SettingsCookiesPageElementBase = SettingsViewMixinLit(WebUiListenerMixinLit(I18nMixinLit(CrLitElement)));
export class SettingsCookiesPageElement extends SettingsCookiesPageElementBase {
    static get is() {
        return 'settings-cookies-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /**
             * Current search term.
             */
            searchTerm: {
                type: String,
                notify: true,
            },
            showUniversalOptOutSettings_: { type: Boolean },
            pageTitle_: { type: String },
            isSettingsRefresh2026_: { type: Boolean },
        };
    }
    #searchTerm_accessor_storage = '';
    get searchTerm() { return this.#searchTerm_accessor_storage; }
    set searchTerm(value) { this.#searchTerm_accessor_storage = value; }
    #pageTitle__accessor_storage = '';
    get pageTitle_() { return this.#pageTitle__accessor_storage; }
    set pageTitle_(value) { this.#pageTitle__accessor_storage = value; }
    #showUniversalOptOutSettings__accessor_storage = loadTimeData.getBoolean('showUniversalOptOutSettings');
    get showUniversalOptOutSettings_() { return this.#showUniversalOptOutSettings__accessor_storage; }
    set showUniversalOptOutSettings_(value) { this.#showUniversalOptOutSettings__accessor_storage = value; }
    #isSettingsRefresh2026__accessor_storage = loadTimeData.getString('settingsRefresh2026') !== '';
    get isSettingsRefresh2026_() { return this.#isSettingsRefresh2026__accessor_storage; }
    set isSettingsRefresh2026_(value) { this.#isSettingsRefresh2026__accessor_storage = value; }
    metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('showUniversalOptOutSettings_')) {
            this.pageTitle_ = this.computePageTitle_();
        }
    }
    onSearchTermChanged_(e) {
        this.searchTerm = e.detail.value;
    }
    onSiteDataClick_() {
        Router.getInstance().navigateTo(routes.SITE_SETTINGS_ALL);
    }
    onThirdPartyCookieBlockingSettingGroupChange_() {
        const thirdPartyCookieBlockingSettingGroup = this.shadowRoot.querySelector('#thirdPartyCookieBlockingSettingGroup');
        const selection = Number(thirdPartyCookieBlockingSettingGroup.selected);
        if (selection === ThirdPartyCookieBlockingSetting.INCOGNITO_ONLY) {
            this.metricsBrowserProxy_.recordSettingsPageHistogram(PrivacyElementInteractions.THIRD_PARTY_COOKIES_BLOCK_IN_INCOGNITO);
            this.metricsBrowserProxy_.recordAction('Settings.ThirdPartyCookies.Allow');
        }
        else {
            assert(selection === ThirdPartyCookieBlockingSetting.BLOCK_THIRD_PARTY);
            this.metricsBrowserProxy_.recordSettingsPageHistogram(PrivacyElementInteractions.THIRD_PARTY_COOKIES_BLOCK);
            this.metricsBrowserProxy_.recordAction('Settings.ThirdPartyCookies.Block');
        }
        thirdPartyCookieBlockingSettingGroup.sendPrefChange();
    }
    onUniversalOptOutToggleSettingsBooleanControlChange_(event) {
        const toggle = event.target;
        this.metricsBrowserProxy_.recordAction(toggle.checked ? 'Privacy.UniversalOptOut.SettingsToggleOn' :
            'Privacy.UniversalOptOut.SettingsToggleOff');
    }
    computePageTitle_() {
        return this.i18n(this.showUniversalOptOutSettings_ ?
            'thirdPartyCookiesAndSiteDataPageTitle' :
            'thirdPartyCookiesPageTitle');
    }
    currentRouteChanged(currentRoute, oldRoute) {
        super.currentRouteChanged(currentRoute, oldRoute);
        if (currentRoute === routes.COOKIES) {
            this.metricsBrowserProxy_.recordBooleanHistogram('Privacy.UniversalOptOut.SettingsVisibility', this.showUniversalOptOutSettings_);
        }
    }
    // SettingsViewMixinLit implementation.
    getFocusConfig() {
        return new Map([
            [
                `${routes.SITE_SETTINGS_ALL.path}_${routes.COOKIES.path}`,
                '#siteDataTrigger',
            ],
        ]);
    }
    // SettingsViewMixinLit implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(SettingsCookiesPageElement.is, SettingsCookiesPageElement);
