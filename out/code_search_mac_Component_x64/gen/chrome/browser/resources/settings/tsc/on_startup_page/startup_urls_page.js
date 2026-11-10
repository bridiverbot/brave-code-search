// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-startup-urls-page' is the settings page
 * containing the urls that will be opened when chrome is started.
 */
import 'chrome://resources/js/action_link.js';
import 'chrome://resources/cr_elements/action_link_lit.css.js';
import '/shared/settings/controls/extension_controlled_indicator.js';
import './startup_url_dialog.js';
import './startup_url_entry.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { EDIT_STARTUP_URL_EVENT } from './startup_url_entry.js';
import { getCss } from './startup_urls_page.css.js';
import { getHtml } from './startup_urls_page.html.js';
import { StartupUrlsPageBrowserProxyImpl } from './startup_urls_page_browser_proxy.js';
const SettingsStartupUrlsPageElementBase = PrefServiceObserverMixinLit(WebUiListenerMixinLit(CrLitElement));
export class SettingsStartupUrlsPageElement extends SettingsStartupUrlsPageElementBase {
    static get is() {
        return 'settings-startup-urls-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            startupUrlsPref_: { type: Object },
            startupPages_: { type: Array },
            showStartupUrlDialog_: { type: Boolean },
            startupUrlDialogModel_: { type: Object },
        };
    }
    #startupUrlsPref__accessor_storage;
    get startupUrlsPref_() { return this.#startupUrlsPref__accessor_storage; }
    set startupUrlsPref_(value) { this.#startupUrlsPref__accessor_storage = value; }
    #startupPages__accessor_storage = [];
    get startupPages_() { return this.#startupPages__accessor_storage; }
    set startupPages_(value) { this.#startupPages__accessor_storage = value; }
    #showStartupUrlDialog__accessor_storage = false;
    get showStartupUrlDialog_() { return this.#showStartupUrlDialog__accessor_storage; }
    set showStartupUrlDialog_(value) { this.#showStartupUrlDialog__accessor_storage = value; }
    #startupUrlDialogModel__accessor_storage = null;
    get startupUrlDialogModel_() { return this.#startupUrlDialogModel__accessor_storage; }
    set startupUrlDialogModel_(value) { this.#startupUrlDialogModel__accessor_storage = value; }
    browserProxy_ = StartupUrlsPageBrowserProxyImpl.getInstance();
    startupUrlDialogAnchor_ = null;
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPref('session.startup_urls', 'startupUrlsPref_');
        this.addWebUiListener('update-startup-pages', (startupPages) => {
            // If an "edit" URL dialog was open, close it, because the underlying
            // page might have just been removed (and model indices have changed
            // anyway).
            if (this.startupUrlDialogModel_) {
                this.onDialogClose_();
            }
            this.startupPages_ = startupPages;
        });
        this.browserProxy_.loadStartupPages();
        this.addEventListener(EDIT_STARTUP_URL_EVENT, (event) => {
            const e = event;
            this.startupUrlDialogModel_ = e.detail.model;
            this.startupUrlDialogAnchor_ = e.detail.anchor;
            this.showStartupUrlDialog_ = true;
            e.stopPropagation();
        });
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        // Restore focus to the last element if the previous last element was
        // deleted while it was focused.
        if (changedPrivateProperties.has('startupPages_')) {
            const previousPages = changedPrivateProperties.get('startupPages_');
            if (previousPages && this.startupPages_.length < previousPages.length) {
                const focused = this.shadowRoot.querySelector('settings-startup-url-entry:focus-within');
                if (!focused) {
                    const toFocus = this.shadowRoot.querySelector('settings-startup-url-entry:last-of-type');
                    toFocus?.focus();
                }
            }
        }
    }
    onAddPageClick_(e) {
        e.preventDefault();
        this.showStartupUrlDialog_ = true;
        this.startupUrlDialogAnchor_ =
            this.shadowRoot.querySelector('#addPage a[is=action-link]');
    }
    onDialogClose_() {
        this.showStartupUrlDialog_ = false;
        this.startupUrlDialogModel_ = null;
        if (this.startupUrlDialogAnchor_) {
            focusWithoutInk(this.startupUrlDialogAnchor_);
            this.startupUrlDialogAnchor_ = null;
        }
    }
    onUseCurrentPagesClick_() {
        this.browserProxy_.useCurrentPages();
    }
    /**
     * @return Whether "Add new page" and "Use current pages" are allowed.
     */
    shouldAllowUrlsEdit_() {
        return this.startupUrlsPref_?.enforcement !==
            chrome.settingsPrivate.Enforcement.ENFORCED;
    }
}
customElements.define(SettingsStartupUrlsPageElement.is, SettingsStartupUrlsPageElement);
