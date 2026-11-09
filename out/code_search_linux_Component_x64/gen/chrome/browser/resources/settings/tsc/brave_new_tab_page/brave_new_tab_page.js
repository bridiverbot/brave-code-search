// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at https://mozilla.org/MPL/2.0/.
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { WebUiListenerMixin } from '/shared/settings/web_ui_listener_mixin.js';
import { BaseMixin } from '../base_mixin.js';
import { BraveNewTabBrowserProxyImpl } from './brave_new_tab_browser_proxy.js';
import '/shared/settings/md_select.css.js';
import { getTemplate } from './brave_new_tab_page.html.js';
/**
 * 'settings-brave-new-tab-page' is the settings page containing
 * brave's new tab features.
 */
const SettingsBraveNewTabPageElementBase = WebUiListenerMixin(BaseMixin(PolymerElement));
export class SettingsBraveNewTabPageElement extends SettingsBraveNewTabPageElementBase {
    static get is() {
        return 'settings-brave-new-tab-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            newTabShowOptions_: Array,
            showNewTabDashboardSettings_: Boolean,
        };
    }
    browserProxy_ = BraveNewTabBrowserProxyImpl.getInstance();
    ready() {
        super.ready();
        this.openNewTabPage_ = this.openNewTabPage_.bind(this);
        this.browserProxy_.getNewTabShowsOptionsList().then((list) => {
            this.newTabShowOptions_ = list;
        });
        this.browserProxy_.shouldShowNewTabDashboardSettings().then((show) => {
            this.showNewTabDashboardSettings_ = show;
        });
        this.addWebUiListener('show-new-tab-dashboard-settings-changed', (show) => {
            this.showNewTabDashboardSettings_ = show;
        });
    }
    openNewTabPage_() {
        window.open("chrome://newTab?openSettings=1", "_self");
    }
}
customElements.define(SettingsBraveNewTabPageElement.is, SettingsBraveNewTabPageElement);
