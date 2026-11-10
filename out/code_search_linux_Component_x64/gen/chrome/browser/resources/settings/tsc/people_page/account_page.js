// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-account-page' is the settings subpage containing controls to
 * manage features related to the user's primary account, such as sync
 * controls and advanced sync settings.
 */
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import './sync_account_control.js';
import './sync_controls.js';
import './sync_encryption_options.js';
import '../settings_page/settings_subpage.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { SignedInState, SyncBrowserProxyImpl } from '/shared/settings/people_page/sync_browser_proxy.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { loadTimeData } from '../i18n_setup.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { SettingsViewMixinLit } from '../settings_page/settings_view_mixin_lit.js';
import { getCss } from './account_page.css.js';
import { getHtml } from './account_page.html.js';
const SettingsAccountPageElementBase = SettingsViewMixinLit(WebUiListenerMixinLit(I18nMixinLit(CrLitElement)));
export class SettingsAccountPageElement extends SettingsAccountPageElementBase {
    static get is() {
        return 'settings-account-page';
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
             * The current sync status.
             */
            syncStatus_: { type: Object },
            /**
             * The current sync preferences, supplied by SyncBrowserProxy.
             */
            syncPrefs: { type: Object },
            mayShowLinkedGoogleServicesSetting_: { type: Boolean },
            personalizationCollapseExpanded_: { type: Boolean },
            existingPassphraseLabel_: { type: String },
            dataEncrypted_: { type: Boolean },
            encryptionExpanded_: { type: Boolean },
        };
    }
    syncBrowserProxy_ = SyncBrowserProxyImpl.getInstance();
    #syncStatus__accessor_storage = null;
    get syncStatus_() { return this.#syncStatus__accessor_storage; }
    set syncStatus_(value) { this.#syncStatus__accessor_storage = value; }
    #syncPrefs_accessor_storage = null;
    get syncPrefs() { return this.#syncPrefs_accessor_storage; }
    set syncPrefs(value) { this.#syncPrefs_accessor_storage = value; }
    #mayShowLinkedGoogleServicesSetting__accessor_storage = loadTimeData.getBoolean('mayShowLinkedGoogleServicesSetting');
    get mayShowLinkedGoogleServicesSetting_() { return this.#mayShowLinkedGoogleServicesSetting__accessor_storage; }
    set mayShowLinkedGoogleServicesSetting_(value) { this.#mayShowLinkedGoogleServicesSetting__accessor_storage = value; }
    #personalizationCollapseExpanded__accessor_storage = false;
    get personalizationCollapseExpanded_() { return this.#personalizationCollapseExpanded__accessor_storage; }
    set personalizationCollapseExpanded_(value) { this.#personalizationCollapseExpanded__accessor_storage = value; }
    #dataEncrypted__accessor_storage = false;
    get dataEncrypted_() { return this.#dataEncrypted__accessor_storage; }
    set dataEncrypted_(value) { this.#dataEncrypted__accessor_storage = value; }
    #encryptionExpanded__accessor_storage = false;
    get encryptionExpanded_() { return this.#encryptionExpanded__accessor_storage; }
    set encryptionExpanded_(value) { this.#encryptionExpanded__accessor_storage = value; }
    #existingPassphraseLabel__accessor_storage = '';
    get existingPassphraseLabel_() { return this.#existingPassphraseLabel__accessor_storage; }
    set existingPassphraseLabel_(value) { this.#existingPassphraseLabel__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        assert(loadTimeData.getBoolean('replaceSyncPromosWithSignInPromos'));
        this.syncBrowserProxy_.getSyncStatus().then(this.onSyncStatusChanged_.bind(this));
        this.addWebUiListener('sync-status-changed', this.onSyncStatusChanged_.bind(this));
        this.addWebUiListener('sync-prefs-changed', this.onSyncPrefsChanged_.bind(this));
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('syncPrefs')) {
            const wasDataEncrypted = this.dataEncrypted_;
            this.dataEncrypted_ = this.computeDataEncrypted_();
            this.existingPassphraseLabel_ = this.computeExistingPassphraseLabel_();
            if (wasDataEncrypted !== this.dataEncrypted_) {
                this.expandEncryptionIfNeeded_();
            }
        }
    }
    onSyncStatusChanged_(syncStatus) {
        this.syncStatus_ = syncStatus;
        if (Router.getInstance().getCurrentRoute() !== routes.ACCOUNT) {
            return;
        }
        // Don't show this page if the user is not signed in.
        if (!this.shouldShowPageContents_()) {
            Router.getInstance().navigateTo(routes.PEOPLE);
        }
    }
    /**
     * Handler for when the sync preferences are updated.
     */
    onSyncPrefsChanged_(syncPrefs) {
        this.syncPrefs = syncPrefs;
    }
    onSyncEncryptionOptionsSyncPrefsChanged_(e) {
        this.syncPrefs = e.detail.value;
    }
    onPersonalizationCollapseExpandedChanged_(e) {
        this.personalizationCollapseExpanded_ = e.detail.value;
    }
    onEncryptionExpandedChanged_(e) {
        this.encryptionExpanded_ = e.detail.value;
    }
    onActivityControlsClick_() {
        this.syncBrowserProxy_.openActivityControlsUrl();
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('activityControlsUrl'));
    }
    onLinkedServicesClick_() {
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('linkedServicesUrl'));
    }
    onSyncDashboardLinkClick_() {
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('syncDashboardUrl'));
    }
    onResetSyncClick_(event) {
        if (event.target.tagName === 'A') {
            // Stop the propagation of events as the |cr-expand-button|
            // prevents the default which will prevent the navigation to the link.
            event.stopPropagation();
        }
    }
    onManageGoogleAccountClick_() {
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('googleAccountUrl'));
    }
    // 
    computeExistingPassphraseLabel_() {
        if (!this.syncPrefs || !this.syncPrefs.encryptAllData) {
            return '';
        }
        if (!this.syncPrefs.explicitPassphraseTime) {
            return this.i18n('existingPassphraseLabel');
        }
        return this.i18n('existingPassphraseLabelWithDate', this.syncPrefs.explicitPassphraseTime);
    }
    computeDataEncrypted_() {
        return !!this.syncPrefs && this.syncPrefs.encryptAllData;
    }
    expandEncryptionIfNeeded_() {
        this.encryptionExpanded_ = this.dataEncrypted_;
    }
    shouldShowPageContents_() {
        return this.syncStatus_ &&
            this.syncStatus_.signedInState === SignedInState.SIGNED_IN;
    }
    // SettingsViewMixin implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(SettingsAccountPageElement.is, SettingsAccountPageElement);
