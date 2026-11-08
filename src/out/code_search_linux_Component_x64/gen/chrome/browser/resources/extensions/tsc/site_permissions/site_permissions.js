// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '/strings.m.js';
import './site_permissions_list.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { navigation, Page } from '../navigation_helper.js';
import { getCss } from './site_permissions.css.js';
import { getHtml } from './site_permissions.html.js';
import { SiteSettingsMixin } from './site_settings_mixin.js';
const ExtensionsSitePermissionsElementBase = SiteSettingsMixin(CrLitElement);
export class ExtensionsSitePermissionsElement extends ExtensionsSitePermissionsElementBase {
    static get is() {
        return 'extensions-site-permissions';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            extensions: { type: Array },
            showPermittedSites_: { type: Boolean },
        };
    }
    #extensions_accessor_storage = [];
    get extensions() { return this.#extensions_accessor_storage; }
    set extensions(value) { this.#extensions_accessor_storage = value; }
    #showPermittedSites__accessor_storage = loadTimeData.getBoolean('enableUserPermittedSites');
    get showPermittedSites_() { return this.#showPermittedSites__accessor_storage; }
    set showPermittedSites_(value) { this.#showPermittedSites__accessor_storage = value; }
    onAllSitesLinkClick_() {
        navigation.navigateTo({ page: Page.SITE_PERMISSIONS_ALL_SITES });
    }
}
customElements.define(ExtensionsSitePermissionsElement.is, ExtensionsSitePermissionsElement);
