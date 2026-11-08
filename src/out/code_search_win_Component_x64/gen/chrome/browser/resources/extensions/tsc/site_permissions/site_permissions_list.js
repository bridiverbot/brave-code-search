// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '/strings.m.js';
import './site_permissions_edit_permissions_dialog.js';
import './site_permissions_edit_url_dialog.js';
import { assert } from 'chrome://resources/js/assert.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getFaviconUrl } from '../url_util.js';
import { getCss } from './site_permissions_list.css.js';
import { getHtml } from './site_permissions_list.html.js';
import { DummySiteSettingsDelegate } from './site_settings_mixin.js';
export class ExtensionsSitePermissionsListElement extends CrLitElement {
    static get is() {
        return 'site-permissions-list';
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
            header: { type: String },
            siteSet: { type: String },
            sites: { type: Array },
            showEditSiteUrlDialog_: { type: Boolean },
            showEditSitePermissionsDialog_: { type: Boolean },
            /**
             * The site currently being edited if the user has opened the action menu
             * for a given site.
             */
            siteToEdit_: { type: String },
        };
    }
    #delegate_accessor_storage = new DummySiteSettingsDelegate();
    get delegate() { return this.#delegate_accessor_storage; }
    set delegate(value) { this.#delegate_accessor_storage = value; }
    #extensions_accessor_storage = [];
    get extensions() { return this.#extensions_accessor_storage; }
    set extensions(value) { this.#extensions_accessor_storage = value; }
    #header_accessor_storage = '';
    get header() { return this.#header_accessor_storage; }
    set header(value) { this.#header_accessor_storage = value; }
    #siteSet_accessor_storage = chrome.developerPrivate.SiteSet.USER_PERMITTED;
    get siteSet() { return this.#siteSet_accessor_storage; }
    set siteSet(value) { this.#siteSet_accessor_storage = value; }
    #sites_accessor_storage = [];
    get sites() { return this.#sites_accessor_storage; }
    set sites(value) { this.#sites_accessor_storage = value; }
    #showEditSiteUrlDialog__accessor_storage = false;
    get showEditSiteUrlDialog_() { return this.#showEditSiteUrlDialog__accessor_storage; }
    set showEditSiteUrlDialog_(value) { this.#showEditSiteUrlDialog__accessor_storage = value; }
    #showEditSitePermissionsDialog__accessor_storage = false;
    get showEditSitePermissionsDialog_() { return this.#showEditSitePermissionsDialog__accessor_storage; }
    set showEditSitePermissionsDialog_(value) { this.#showEditSitePermissionsDialog__accessor_storage = value; }
    #siteToEdit__accessor_storage = null;
    get siteToEdit_() { return this.#siteToEdit__accessor_storage; }
    set siteToEdit_(value) { this.#siteToEdit__accessor_storage = value; }
    // The element to return focus to once the site input dialog closes. If
    // specified, this is the 3 dots menu for the site just edited, otherwise it's
    // the add site button.
    siteToEditAnchorElement_ = null;
    hasSites_() {
        return !!this.sites.length;
    }
    getFaviconUrl_(url) {
        return getFaviconUrl(url);
    }
    focusOnAnchor_() {
        // Return focus to the three dots menu once a site has been edited.
        // TODO(crbug.com/40215499): If the edited site is the only site in the
        // list, focus is not on the three dots menu.
        assert(this.siteToEditAnchorElement_, 'Site Anchor');
        focusWithoutInk(this.siteToEditAnchorElement_);
        this.siteToEditAnchorElement_ = null;
    }
    onAddSiteClick_() {
        assert(!this.showEditSitePermissionsDialog_);
        this.siteToEdit_ = null;
        this.showEditSiteUrlDialog_ = true;
    }
    onEditSiteUrlDialogClose_() {
        this.showEditSiteUrlDialog_ = false;
        if (this.siteToEdit_ !== null) {
            this.focusOnAnchor_();
        }
        this.siteToEdit_ = null;
    }
    onEditSitePermissionsDialogClose_() {
        this.showEditSitePermissionsDialog_ = false;
        assert(this.siteToEdit_, 'Site To Edit');
        this.focusOnAnchor_();
        this.siteToEdit_ = null;
    }
    onDotsClick_(e) {
        const target = e.target;
        this.siteToEdit_ = target.dataset['site'];
        assert(!this.showEditSitePermissionsDialog_);
        this.$.siteActionMenu.showAt(target);
        this.siteToEditAnchorElement_ = target;
    }
    onEditSitePermissionsClick_() {
        this.closeActionMenu_();
        assert(this.siteToEdit_ !== null);
        this.showEditSitePermissionsDialog_ = true;
    }
    onEditSiteUrlClick_() {
        this.closeActionMenu_();
        assert(this.siteToEdit_ !== null);
        this.showEditSiteUrlDialog_ = true;
    }
    onRemoveSiteClick_() {
        assert(this.siteToEdit_, 'Site To Edit');
        this.delegate.removeUserSpecifiedSites(this.siteSet, [this.siteToEdit_])
            .then(() => {
            this.closeActionMenu_();
            this.siteToEdit_ = null;
        });
    }
    closeActionMenu_() {
        const menu = this.$.siteActionMenu;
        assert(menu.open);
        menu.close();
    }
}
customElements.define(ExtensionsSitePermissionsListElement.is, ExtensionsSitePermissionsListElement);
