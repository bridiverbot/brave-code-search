// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-signout-dialog' is a dialog that allows the
 * user to turn off sync and sign out of Chromium.
 */
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { sanitizeInnerHtml } from '//resources/js/parse_html_subset.js';
import { htmlEscape } from '//resources/js/util.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { ProfileInfoBrowserProxyImpl } from '/shared/settings/people_page/profile_info_browser_proxy.js';
import { SignedInState, SyncBrowserProxyImpl } from '/shared/settings/people_page/sync_browser_proxy.js';
import { loadTimeData } from '../i18n_setup.js';
import { getCss } from './signout_dialog.css.js';
import { getHtml } from './signout_dialog.html.js';
const SettingsSignoutDialogElementBase = WebUiListenerMixinLit(CrLitElement);
export class SettingsSignoutDialogElement extends SettingsSignoutDialogElementBase {
    static get is() {
        return 'settings-signout-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /**
             * The current sync status, supplied by the parent.
             */
            syncStatus: { type: Object },
            /**
             * True if the checkbox to delete the profile has been checked.
             */
            deleteProfile_: { type: Boolean },
            /**
             * True if the profile deletion warning is visible.
             */
            deleteProfileWarningVisible_: { type: Boolean },
            /**
             * The profile deletion warning. The message indicates the number of
             * profile stats that will be deleted if a non-zero count for the profile
             * stats is returned from the browser.
             */
            deleteProfileWarning_: { type: String },
        };
    }
    #syncStatus_accessor_storage = null;
    get syncStatus() { return this.#syncStatus_accessor_storage; }
    set syncStatus(value) { this.#syncStatus_accessor_storage = value; }
    #deleteProfile__accessor_storage = false;
    get deleteProfile_() { return this.#deleteProfile__accessor_storage; }
    set deleteProfile_(value) { this.#deleteProfile__accessor_storage = value; }
    #deleteProfileWarningVisible__accessor_storage = false;
    get deleteProfileWarningVisible_() { return this.#deleteProfileWarningVisible__accessor_storage; }
    set deleteProfileWarningVisible_(value) { this.#deleteProfileWarningVisible__accessor_storage = value; }
    #deleteProfileWarning__accessor_storage = '';
    get deleteProfileWarning_() { return this.#deleteProfileWarning__accessor_storage; }
    set deleteProfileWarning_(value) { this.#deleteProfileWarning__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('profile-stats-count-ready', (count) => this.handleProfileStatsCount_(count));
        // 
        ProfileInfoBrowserProxyImpl.getInstance().getProfileStatsCount();
        // 
        this.updateComplete.then(() => {
            if (this.isConnected && !this.$.dialog.open) {
                this.$.dialog.showModal();
            }
        });
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('syncStatus')) {
            this.syncStatusChanged_();
        }
    }
    /**
     * @return true when the user selected 'Confirm'.
     */
    wasConfirmed() {
        return this.$.dialog.getNative().returnValue === 'success';
    }
    /**
     * Handler for when the profile stats count is pushed from the browser.
     */
    handleProfileStatsCount_(count) {
        const username = this.syncStatus?.signedInUsername || '';
        if (count === 0) {
            this.deleteProfileWarning_ = loadTimeData.getStringF('deleteProfileWarningWithoutCounts', username);
        }
        else if (count === 1) {
            this.deleteProfileWarning_ = loadTimeData.getStringF('deleteProfileWarningWithCountsSingular', username);
        }
        else {
            this.deleteProfileWarning_ = loadTimeData.getStringF('deleteProfileWarningWithCountsPlural', count, username);
        }
    }
    syncStatusChanged_() {
        if (!!this.syncStatus &&
            this.syncStatus.signedInState !== SignedInState.SYNCING &&
            this.$.dialog.open) {
            this.$.dialog.close();
        }
    }
    // 
    getDisconnectExplanationHtml_() {
        const domain = this.syncStatus?.domain || '';
        if (domain) {
            return sanitizeInnerHtml(loadTimeData.getStringF('syncDisconnectManagedProfileExplanation', `<span>${htmlEscape(domain)}</span>`));
        }
        return sanitizeInnerHtml(loadTimeData.getString('syncDisconnectExplanation'));
    }
    // 
    // 
    onDeleteProfileCheckedChanged_(e) {
        this.deleteProfile_ = e.detail.value;
    }
    onDeleteProfileWarningVisibleExpandedChanged_(e) {
        this.deleteProfileWarningVisible_ = e.detail.value;
    }
    onDisconnectCancelClick_() {
        this.$.dialog.cancel();
    }
    onDisconnectConfirmClick_() {
        this.$.dialog.close();
        // 
        SyncBrowserProxyImpl.getInstance().signOut(this.deleteProfile_);
        // 
        // 
    }
}
customElements.define(SettingsSignoutDialogElement.is, SettingsSignoutDialogElement);
