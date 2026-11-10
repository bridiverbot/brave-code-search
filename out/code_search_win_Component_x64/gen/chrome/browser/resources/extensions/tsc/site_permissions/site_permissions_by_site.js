// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './site_permissions_site_group.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { navigation, Page } from '../navigation_helper.js';
import { getCss } from './site_permissions_by_site.css.js';
import { getHtml } from './site_permissions_by_site.html.js';
export class ExtensionsSitePermissionsBySiteElement extends CrLitElement {
    static get is() {
        return 'extensions-site-permissions-by-site';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            delegate: { type: Object },
            extensions: { type: Array },
            siteGroups_: { type: Array },
        };
    }
    #delegate_accessor_storage;
    get delegate() { return this.#delegate_accessor_storage; }
    set delegate(value) { this.#delegate_accessor_storage = value; }
    #extensions_accessor_storage = [];
    get extensions() { return this.#extensions_accessor_storage; }
    set extensions(value) { this.#extensions_accessor_storage = value; }
    #siteGroups__accessor_storage = [];
    get siteGroups_() { return this.#siteGroups__accessor_storage; }
    set siteGroups_(value) { this.#siteGroups__accessor_storage = value; }
    firstUpdated() {
        assert(this.delegate);
        this.refreshUserAndExtensionSites_();
        this.delegate.getUserSiteSettingsChangedTarget().addListener(this.refreshUserAndExtensionSites_.bind(this));
        this.delegate.getItemStateChangedTarget().addListener(this.refreshUserAndExtensionSites_.bind(this));
    }
    refreshUserAndExtensionSites_() {
        assert(this.delegate);
        this.delegate.getUserAndExtensionSitesByEtld().then(sites => {
            this.siteGroups_ = sites;
        });
    }
    onCloseButtonClick_() {
        navigation.navigateTo({ page: Page.SITE_PERMISSIONS });
    }
}
customElements.define(ExtensionsSitePermissionsBySiteElement.is, ExtensionsSitePermissionsBySiteElement);
