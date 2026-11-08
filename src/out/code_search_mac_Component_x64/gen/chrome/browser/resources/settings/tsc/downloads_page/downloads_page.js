// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-downloads-page' is the settings page containing downloads
 * settings.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import '../controls/controlled_button.js';
import '../controls/settings_toggle_button.js';
import '../settings_page/settings_section.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { getSearchManager } from '../search_settings.js';
import { PrefServiceObserverMixinLit } from '../settings.js';
import { DownloadsBrowserProxyImpl } from './downloads_browser_proxy.js';
import { getCss } from './downloads_page.css.js';
import { getHtml } from './downloads_page.html.js';
const SettingsDownloadsPageElementBase = PrefServiceObserverMixinLit(WebUiListenerMixinLit(CrLitElement));
export class SettingsDownloadsPageElement extends SettingsDownloadsPageElementBase {
    static get is() {
        return 'settings-downloads-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            autoOpenDownloads_: { type: Boolean },
            downloadDefaultDirectoryPref_: { type: Object },
            // 
            /**
             * Whether the user can toggle the option to display downloads when
             * they're done.
             */
            downloadBubblePartialViewControlledByPref_: { type: Boolean },
        };
    }
    #autoOpenDownloads__accessor_storage = false;
    get autoOpenDownloads_() { return this.#autoOpenDownloads__accessor_storage; }
    set autoOpenDownloads_(value) { this.#autoOpenDownloads__accessor_storage = value; }
    #downloadDefaultDirectoryPref__accessor_storage = undefined;
    get downloadDefaultDirectoryPref_() { return this.#downloadDefaultDirectoryPref__accessor_storage; }
    set downloadDefaultDirectoryPref_(value) { this.#downloadDefaultDirectoryPref__accessor_storage = value; }
    #downloadBubblePartialViewControlledByPref__accessor_storage = loadTimeData.getBoolean('downloadBubblePartialViewControlledByPref');
    // 
    get downloadBubblePartialViewControlledByPref_() { return this.#downloadBubblePartialViewControlledByPref__accessor_storage; }
    set downloadBubblePartialViewControlledByPref_(value) { this.#downloadBubblePartialViewControlledByPref__accessor_storage = value; }
    browserProxy_ = DownloadsBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPref('download.default_directory', 'downloadDefaultDirectoryPref_');
        // 
    }
    firstUpdated() {
        this.addWebUiListener('auto-open-downloads-changed', (autoOpen) => {
            this.autoOpenDownloads_ = autoOpen;
        });
        this.browserProxy_.initializeDownloads();
    }
    onChangeDownloadsPathClick_() {
        this.browserProxy_.selectDownloadLocation();
    }
    onClearAutoOpenFileTypesClick_() {
        this.browserProxy_.resetAutoOpenFileTypes();
    }
    // SettingsPlugin implementation
    async searchContents(query) {
        const searchRequest = await getSearchManager().search(query, this);
        return searchRequest.getSearchResult();
    }
}
customElements.define(SettingsDownloadsPageElement.is, SettingsDownloadsPageElement);
