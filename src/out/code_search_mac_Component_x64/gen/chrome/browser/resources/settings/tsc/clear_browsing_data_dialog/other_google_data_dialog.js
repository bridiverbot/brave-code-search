// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-other-google-data-dialog' is a subpage
 * shown within the Clear Browsing Data dialog to provide links
 * for managing other Google data like passwords and activity.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import { SyncBrowserProxyImpl } from '/shared/settings/people_page/sync_browser_proxy.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { PasswordManagerImpl, PasswordManagerPage } from '../autofill_page/passwords/password_manager_proxy.js';
import { MetricsBrowserProxyImpl } from '../metrics_browser_proxy.js';
import { ClearBrowsingDataBrowserProxyImpl } from './clear_browsing_data_browser_proxy.js';
import { isSignedIn } from './clear_browsing_data_signin_util.js';
import { getCss } from './other_google_data_dialog.css.js';
import { getHtml } from './other_google_data_dialog.html.js';
const SettingsOtherGoogleDataDialogElementBase = WebUiListenerMixinLit(CrLitElement);
export class SettingsOtherGoogleDataDialogElement extends SettingsOtherGoogleDataDialogElementBase {
    static get is() {
        return 'settings-other-google-data-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            isGoogleDse_: { type: Boolean },
            nonGoogleSearchHistorySubLabel_: { type: String },
            syncStatus_: { type: Object },
        };
    }
    #isGoogleDse__accessor_storage = false;
    get isGoogleDse_() { return this.#isGoogleDse__accessor_storage; }
    set isGoogleDse_(value) { this.#isGoogleDse__accessor_storage = value; }
    #nonGoogleSearchHistorySubLabel__accessor_storage = window.trustedTypes.emptyHTML;
    get nonGoogleSearchHistorySubLabel_() { return this.#nonGoogleSearchHistorySubLabel__accessor_storage; }
    set nonGoogleSearchHistorySubLabel_(value) { this.#nonGoogleSearchHistorySubLabel__accessor_storage = value; }
    #syncStatus__accessor_storage = undefined;
    get syncStatus_() { return this.#syncStatus__accessor_storage; }
    set syncStatus_(value) { this.#syncStatus__accessor_storage = value; }
    clearBrowsingDataBrowserProxy_ = ClearBrowsingDataBrowserProxyImpl.getInstance();
    syncBrowserProxy_ = SyncBrowserProxyImpl.getInstance();
    metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('sync-status-changed', this.handleSyncStatus_.bind(this));
        this.syncBrowserProxy_.getSyncStatus().then(this.handleSyncStatus_.bind(this));
        this.addWebUiListener('update-sync-state', this.updateDseStatus_.bind(this));
        this.clearBrowsingDataBrowserProxy_.getSyncState().then(this.updateDseStatus_.bind(this));
    }
    updateDseStatus_(event) {
        this.isGoogleDse_ = !event.isNonGoogleDse;
        this.nonGoogleSearchHistorySubLabel_ =
            sanitizeInnerHtml(event.nonGoogleSearchHistoryString);
    }
    handleSyncStatus_(syncStatus) {
        this.syncStatus_ = syncStatus;
    }
    computeDialogTitle_() {
        return this.isGoogleDse_ ? loadTimeData.getString('otherGoogleDataTitle') :
            loadTimeData.getString('otherDataTitle');
    }
    onBackOrCancelClick_() {
        this.$.dialog.cancel();
    }
    onPasswordManagerClick_() {
        PasswordManagerImpl.getInstance().showPasswordManager(PasswordManagerPage.PASSWORDS);
        this.metricsBrowserProxy_.recordAction('Settings.DeleteBrowsingData.PasswordManagerLinkClick');
    }
    onMyActivityLinkClick_() {
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('deleteBrowsingDataMyActivityUrl'));
        this.metricsBrowserProxy_.recordAction('Settings.DeleteBrowsingData.MyActivityLinkClick');
    }
    onGoogleSearchHistoryLinkClick_() {
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('deleteBrowsingDataSearchHistoryUrl'));
        this.metricsBrowserProxy_.recordAction('Settings.DeleteBrowsingData.GoogleSearchHistoryLinkClick');
    }
    onGeminiAppsActivityClick_() {
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('myActivityGeminiAppsUrl'));
        this.metricsBrowserProxy_.recordAction('Settings.DeleteBrowsingData.GeminiAppsActivityLinkClick');
    }
    shouldShowMyActivityLink_() {
        return isSignedIn(this.syncStatus_);
    }
    shouldShowGoogleSearchHistoryLink_() {
        return isSignedIn(this.syncStatus_) && this.isGoogleDse_;
    }
    shouldShowGeminiAppsActivityLink_() {
        return isSignedIn(this.syncStatus_) &&
            loadTimeData.getBoolean('showGlicSettings');
    }
}
customElements.define(SettingsOtherGoogleDataDialogElement.is, SettingsOtherGoogleDataDialogElement);
