// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '/strings.m.js';
import './site_permissions_edit_permissions_dialog.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getFaviconUrl, matchesSubdomains, SUBDOMAIN_SPECIFIER } from '../url_util.js';
import { getCss } from './site_permissions_site_group.css.js';
import { getHtml } from './site_permissions_site_group.html.js';
import { DummySiteSettingsDelegate } from './site_settings_mixin.js';
export class SitePermissionsSiteGroupElement extends CrLitElement {
    static get is() {
        return 'site-permissions-site-group';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            data: { type: Object },
            delegate: { type: Object },
            extensions: { type: Array },
            listIndex: { type: Number },
            expanded_: { type: Boolean },
            showEditSitePermissionsDialog_: { type: Boolean },
            siteToEdit_: { type: Object },
        };
    }
    #data_accessor_storage = {
        etldPlusOne: '',
        numExtensions: 0,
        sites: [],
    };
    get data() { return this.#data_accessor_storage; }
    set data(value) { this.#data_accessor_storage = value; }
    #delegate_accessor_storage = new DummySiteSettingsDelegate();
    get delegate() { return this.#delegate_accessor_storage; }
    set delegate(value) { this.#delegate_accessor_storage = value; }
    #extensions_accessor_storage = [];
    get extensions() { return this.#extensions_accessor_storage; }
    set extensions(value) { this.#extensions_accessor_storage = value; }
    #listIndex_accessor_storage = -1;
    get listIndex() { return this.#listIndex_accessor_storage; }
    set listIndex(value) { this.#listIndex_accessor_storage = value; }
    #expanded__accessor_storage = false;
    get expanded_() { return this.#expanded__accessor_storage; }
    set expanded_(value) { this.#expanded__accessor_storage = value; }
    #showEditSitePermissionsDialog__accessor_storage = false;
    get showEditSitePermissionsDialog_() { return this.#showEditSitePermissionsDialog__accessor_storage; }
    set showEditSitePermissionsDialog_(value) { this.#showEditSitePermissionsDialog__accessor_storage = value; }
    #siteToEdit__accessor_storage = null;
    get siteToEdit_() { return this.#siteToEdit__accessor_storage; }
    set siteToEdit_(value) { this.#siteToEdit__accessor_storage = value; }
    getEtldOrSiteFaviconUrl_() {
        return getFaviconUrl(this.getDisplayUrl_());
    }
    getFaviconUrl_(url) {
        return getFaviconUrl(url);
    }
    isExpandable_() {
        return this.data.sites.length > 1;
    }
    getClassForIndex_() {
        return this.listIndex > 0 ? 'hr' : '';
    }
    getDisplayUrl_() {
        return this.data.sites.length === 1 ?
            this.getSiteWithoutSubdomainSpecifier_(this.data.sites[0].site) :
            this.data.etldPlusOne;
    }
    getEtldOrSiteSubText_() {
        // TODO(crbug.com/40199251): Revisit what to show for this eTLD+1 group's
        // subtext. For now, default to showing no text if there is any mix of sites
        // under the group (i.e. user permitted/restricted/specified by extensions).
        if (this.data.sites.length === 0) {
            return '';
        }
        const siteSet = this.data.sites[0].siteSet;
        const isSiteSetConsistent = this.data.sites.every(site => site.siteSet === siteSet);
        if (!isSiteSetConsistent) {
            return '';
        }
        if (siteSet === chrome.developerPrivate.SiteSet.USER_PERMITTED) {
            return loadTimeData.getString('permittedSites');
        }
        return siteSet === chrome.developerPrivate.SiteSet.USER_RESTRICTED ?
            loadTimeData.getString('restrictedSites') :
            this.getExtensionCountText_(this.data.numExtensions);
    }
    getSiteWithoutSubdomainSpecifier_(site) {
        return site.replace(SUBDOMAIN_SPECIFIER, '');
    }
    etldOrFirstSiteMatchesSubdomains_() {
        const site = this.data.sites.length === 1 ? this.data.sites[0].site :
            this.data.etldPlusOne;
        return matchesSubdomains(site);
    }
    matchesSubdomains_(site) {
        return matchesSubdomains(site);
    }
    getSiteSubtext_(siteInfo) {
        if (siteInfo.numExtensions > 0) {
            return this.getExtensionCountText_(siteInfo.numExtensions);
        }
        return loadTimeData.getString(siteInfo.siteSet === chrome.developerPrivate.SiteSet.USER_PERMITTED ?
            'permittedSites' :
            'restrictedSites');
    }
    // TODO(crbug.com/40251278): Use PluralStringProxyImpl to retrieve the
    // extension count text. However, this is non-trivial in this component as
    // some of the strings are nestled inside dom-repeats and plural strings are
    // currently retrieved asynchronously, and would need to be set directly on a
    // property when retrieved.
    getExtensionCountText_(numExtensions) {
        return numExtensions === 1 ?
            loadTimeData.getString('sitePermissionsAllSitesOneExtension') :
            loadTimeData.getStringF('sitePermissionsAllSitesExtensionCount', numExtensions);
    }
    onEditSiteClick_() {
        this.siteToEdit_ = this.data.sites[0] || null;
        this.showEditSitePermissionsDialog_ = true;
    }
    onEditSiteInListClick_(e) {
        const index = Number(e.target.dataset['index']);
        this.siteToEdit_ = this.data.sites[index] || null;
        this.showEditSitePermissionsDialog_ = true;
    }
    onEditSitePermissionsDialogClose_() {
        this.showEditSitePermissionsDialog_ = false;
        assert(this.siteToEdit_, 'Site To Edit');
        this.siteToEdit_ = null;
    }
    onExpandedChanged_(e) {
        this.expanded_ = e.detail.value;
    }
}
customElements.define(SitePermissionsSiteGroupElement.is, SitePermissionsSiteGroupElement);
