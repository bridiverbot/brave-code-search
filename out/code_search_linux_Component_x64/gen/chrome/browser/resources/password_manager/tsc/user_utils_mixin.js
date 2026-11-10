// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { WebUiListenerMixin } from '/shared/settings/web_ui_listener_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordManagerActionableError } from './password_manager.mojom-webui.js';
import { PasswordManagerImpl, toMojoActionableError } from './password_manager_proxy.js';
import { SyncBrowserProxyImpl } from './sync_browser_proxy.js';
/**
 * This mixin bundles functionality related to syncing, sign in status and
 * account storage.
 */
export const UserUtilMixin = dedupingMixin((superClass) => {
    class UserUtilMixin extends WebUiListenerMixin(superClass) {
        static get properties() {
            return {
                /**
                 * If true, the edit dialog and removal notification show
                 * information about which location(s) a password is stored.
                 */
                isAccountStoreUser: {
                    type: Boolean,
                    value: false,
                },
                isSyncingPasswords: {
                    type: Boolean,
                    value: true,
                    computed: 'computeIsSyncingPasswords_(syncInfo_)',
                },
                actionableError: {
                    type: Number,
                    value: null,
                },
                /* Email of the primary account. */
                accountEmail: {
                    type: String,
                    value: '',
                    computed: 'computeAccountEmail_(accountInfo_)',
                },
                /* Avatar image of the primary account. */
                avatarImage: {
                    type: String,
                    value: '',
                    computed: 'computeAvatarImage_(accountInfo_)',
                },
                syncInfo_: {
                    type: Object,
                    value: null,
                },
                accountInfo_: {
                    type: Object,
                    value: null,
                },
            };
        }
        setIsAccountStorageActiveListener_ = null;
        setPasswordManagerActionableErrorListener_ = null;
        connectedCallback() {
            super.connectedCallback();
            // Create listener functions.
            this.setIsAccountStorageActiveListener_ = (active) => this.isAccountStoreUser = active;
            const syncInfoChanged = (syncInfo) => this.syncInfo_ =
                syncInfo;
            this.setPasswordManagerActionableErrorListener_ = (error) => this.actionableError = toMojoActionableError(error);
            const accountInfoChanged = (accountInfo) => this.accountInfo_ = accountInfo;
            // Request initial data.
            PasswordManagerImpl.getInstance().isAccountStorageActive().then(this.setIsAccountStorageActiveListener_);
            PasswordManagerImpl.getInstance()
                .getPasswordManagerActionableError()
                .then(error => {
                this.actionableError = error;
            });
            SyncBrowserProxyImpl.getInstance().getSyncInfo().then(syncInfoChanged);
            SyncBrowserProxyImpl.getInstance().getAccountInfo().then(accountInfoChanged);
            // Listen for changes.
            PasswordManagerImpl.getInstance()
                .addAccountStorageEnabledStateListener(this.setIsAccountStorageActiveListener_);
            PasswordManagerImpl.getInstance()
                .addPasswordManagerActionableErrorChangedListener(this.setPasswordManagerActionableErrorListener_);
            this.addWebUiListener('sync-info-changed', syncInfoChanged);
            this.addWebUiListener('stored-accounts-changed', accountInfoChanged);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            assert(this.setIsAccountStorageActiveListener_);
            PasswordManagerImpl.getInstance()
                .removeAccountStorageEnabledStateListener(this.setIsAccountStorageActiveListener_);
            this.setIsAccountStorageActiveListener_ = null;
            assert(this.setPasswordManagerActionableErrorListener_);
            PasswordManagerImpl.getInstance()
                .removePasswordManagerActionableErrorChangedListener(this.setPasswordManagerActionableErrorListener_);
            this.setPasswordManagerActionableErrorListener_ = null;
        }
        isTrustedVaultKeyNeeded() {
            return loadTimeData.getBoolean('enableTrustedVaultUnlock') &&
                this.actionableError ===
                    PasswordManagerActionableError.kTrustedVaultKeyNeeded;
        }
        /**
         * Executes `action` if the trusted vault is unlocked. If the vault is
         * locked, dispatches an event to display the unlock/recovery dialog.
         */
        executeIfTrustedVaultUnlocked(action) {
            if (this.isTrustedVaultKeyNeeded()) {
                this.dispatchEvent(new CustomEvent('show-trusted-vault-error-dialog', {
                    bubbles: true,
                    composed: true,
                }));
                return;
            }
            action();
        }
        computeIsSyncingPasswords_() {
            return !!(this.syncInfo_?.isSyncingPasswords);
        }
        computeAccountEmail_() {
            return this.accountInfo_?.email || '';
        }
        computeAvatarImage_() {
            return this.accountInfo_?.avatarImage || '';
        }
    }
    return UserUtilMixin;
});
