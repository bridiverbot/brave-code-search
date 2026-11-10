// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_menu_selector/cr_menu_selector.js';
import 'chrome://resources/cr_elements/cr_ripple/cr_ripple.js';
import './icons.html.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { navigation, Page } from './navigation_helper.js';
import { getCss } from './sidebar.css.js';
import { getHtml } from './sidebar.html.js';
const ExtensionsSidebarElementBase = I18nMixinLit(CrLitElement);
export class ExtensionsSidebarElement extends ExtensionsSidebarElementBase {
    static get is() {
        return 'extensions-sidebar';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            enableEnhancedSiteControls: { type: Boolean },
            inDevMode: { type: Boolean },
            /**
             * The data path/page that identifies the entry to be selected in the
             * sidebar. Note that this may not match the page that's actually
             * displayed.
             */
            selectedPath_: { type: String },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #enableEnhancedSiteControls_accessor_storage = false;
    get enableEnhancedSiteControls() { return this.#enableEnhancedSiteControls_accessor_storage; }
    set enableEnhancedSiteControls(value) { this.#enableEnhancedSiteControls_accessor_storage = value; }
    #selectedPath__accessor_storage = Page.LIST;
    get selectedPath_() { return this.#selectedPath__accessor_storage; }
    set selectedPath_(value) { this.#selectedPath__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    #inDevMode_accessor_storage = false;
    get inDevMode() { return this.#inDevMode_accessor_storage; }
    set inDevMode(value) { this.#inDevMode_accessor_storage = value; }
    /**
     * The ID of the listener on |navigation|. Stored so that the
     * listener can be removed when this element is detached (happens in tests).
     */
    navigationListener_ = null;
    connectedCallback() {
        super.connectedCallback();
        this.navigationListener_ = navigation.addListener(newPage => {
            this.computeSelectedPath_(newPage.page);
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.navigationListener_);
        assert(navigation.removeListener(this.navigationListener_));
        this.navigationListener_ = null;
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.setAttribute('role', 'navigation');
        this.computeSelectedPath_(navigation.getCurrentPage().page);
    }
    computeSelectedPath_(page) {
        switch (page) {
            case Page.SITE_PERMISSIONS:
            case Page.SITE_PERMISSIONS_ALL_SITES:
                this.selectedPath_ = Page.SITE_PERMISSIONS;
                break;
            case Page.SHORTCUTS:
                this.selectedPath_ = Page.SHORTCUTS;
                break;
            default:
                this.selectedPath_ = Page.LIST;
        }
    }
    onLinkClick_(e) {
        e.preventDefault();
        navigation.navigateTo({ page: e.currentTarget.dataset['path'] });
        this.fire('close-drawer');
    }
    onMoreExtensionsClick_(e) {
        if (e.target.tagName === 'A') {
            chrome.metricsPrivate.recordUserAction('Options_GetMoreExtensions');
        }
    }
    computeDiscoverMoreText_() {
        return this.i18nAdvanced('sidebarDiscoverMore', {
            tags: ['a'],
            attrs: ['target'],
            substitutions: [loadTimeData.getString('getMoreExtensionsUrl')],
        });
    }
    showDeveloperPromo_() {
        return this.inDevMode &&
            loadTimeData.getString('sidebarDeveloperPromo') !== '';
    }
    computeDeveloperPromoText_() {
        return this.i18nAdvanced('sidebarDeveloperPromo', {
            tags: ['a'],
            attrs: ['target'],
            substitutions: [loadTimeData.getString('sidebarDeveloperPromoUrl')],
        });
    }
}
customElements.define(ExtensionsSidebarElement.is, ExtensionsSidebarElement);
