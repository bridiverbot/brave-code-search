// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at https://mozilla.org/MPL/2.0/.
import { afterNextRender, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from '/shared/settings/web_ui_listener_mixin.js';
import { PrefServiceObserverMixin } from '/shared/settings/prefs2/pref_service_observer_mixin.js';
import { sendWithPromise } from 'chrome://resources/js/cr.js';
import { loadTimeData } from "../i18n_setup.js";
import { getTemplate } from './toolbar.html.js';
import { RouteObserverMixin, Router } from '../router.js';
import { routes } from '../route.js';
// 
import '../settings_shared.css.js';
import '../settings_vars.css.js';
const SettingsBraveAppearanceToolbarElementBase = WebUiListenerMixin(RouteObserverMixin(I18nMixin(PrefServiceObserverMixin(PolymerElement))));
/**
 * 'settings-brave-appearance-toolbar' is the settings page area containing
 * brave's appearance settings related to the toolbar.
 */
class SettingsBraveAppearanceToolbarElement extends SettingsBraveAppearanceToolbarElementBase {
    static get is() {
        return 'settings-brave-appearance-toolbar';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            isShowBraveShieldsInPageInfoEnabled_: {
                type: Boolean,
                value: loadTimeData.getBoolean('isShowBraveShieldsInPageInfoEnabled'),
            },
            compactModeToggleEnabled_: {
                type: Boolean,
                value: true,
            },
            showHomeButtonPref_: Object,
            homepageIsNewTabPagePref_: Object,
            homepagePref_: Object,
            autocompleteEnabledPref_: Object,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        sendWithPromise('getIsCompactModeToggleEnabled').then((enabled) => { this.compactModeToggleEnabled_ = enabled; });
        this.addWebUiListener('compact-mode-toggle-enabled-changed', (enabled) => { this.compactModeToggleEnabled_ = enabled; });
        this.mirrorPrefs({
            'browser.show_home_button': 'showHomeButtonPref_',
            'homepage_is_newtabpage': 'homepageIsNewTabPagePref_',
            'homepage': 'homepagePref_',
            'brave.autocomplete_enabled': 'autocompleteEnabledPref_',
        });
    }
    /**
     * RouteObserverMixin
     */
    currentRouteChanged(route) {
        if (route !== routes.APPEARANCE) {
            return;
        }
        const elemToHighlight = Router.getInstance().getQueryParameters().get('highlight');
        if (!elemToHighlight) {
            return;
        }
        const elem = this.shadowRoot?.querySelector(elemToHighlight);
        if (!elem) {
            return;
        }
        afterNextRender(this, () => elem?.scrollIntoView());
    }
    /**
   * @param showHomepage Whether to show home page.
   * @param isNtp Whether to use the NTP as the home page.
   * @param homepageValue If not using NTP, use this URL.
   */
    getShowHomeSubLabel_(showHomepage, isNtp, homepageValue) {
        if (!showHomepage) {
            return this.i18n('homeButtonDisabled');
        }
        if (isNtp) {
            return this.i18n('homePageNtp');
        }
        return homepageValue || this.i18n('customWebAddress');
    }
    isBraveRewardsSupported_() {
        return loadTimeData.getBoolean('isBraveRewardsSupported');
    }
    showBraveVPNOption_() {
        return loadTimeData.getBoolean('isBraveVPNEnabled');
    }
    // 
    showLeoAssistant_() {
        return loadTimeData.getBoolean('isLeoAssistantAllowed');
    }
    // 
    showCommandsInOmnibox_() {
        return loadTimeData.getBoolean('showCommandsInOmnibox');
    }
}
customElements.define(SettingsBraveAppearanceToolbarElement.is, SettingsBraveAppearanceToolbarElement);
