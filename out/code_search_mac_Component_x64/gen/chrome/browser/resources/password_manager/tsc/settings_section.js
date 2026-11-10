// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import './cr_spinner_style.css.js';
import './dialogs/disconnect_cloud_authenticator_dialog.js';
import './dialogs/remove_actor_login_permission_dialog.js';
import './full_data_reset.js';
import './passwords_exporter.js';
import './passwords_importer.js';
import './prefs/pref_toggle_button.js';
import '/shared/settings/controls/extension_controlled_indicator.js';
import './shared_style.css.js';
import './site_favicon.js';
import './user_utils_mixin.js';
import { PrefServiceObserverMixin } from '/shared/settings/prefs2/pref_service_observer_mixin.js';
import { WebUiListenerMixin } from '/shared/settings/web_ui_listener_mixin.js';
import { HelpBubbleMixin } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
// 
import { PasskeysBrowserProxyImpl } from './passkeys_browser_proxy.js';
import { PasswordManagerActionableError } from './password_manager.mojom-webui.js';
import { PasswordManagerImpl } from './password_manager_proxy.js';
import { isSavingNewPasswordsBlockedByMandatoryPolicy } from './prefs/policy_utils.js';
import { Page, RouteObserverMixin, Router, UrlParam } from './router.js';
import { getTemplate } from './settings_section.html.js';
import { BatchUploadPasswordsEntryPoint, SyncBrowserProxyImpl, TrustedVaultBannerState } from './sync_browser_proxy.js';
import { UserUtilMixin } from './user_utils_mixin.js';
const PASSWORD_MANAGER_ADD_SHORTCUT_ELEMENT_ID = 'PasswordManagerUI::kAddShortcutElementId';
const PASSWORD_MANAGER_ADD_SHORTCUT_CUSTOM_EVENT_ID = 'PasswordManagerUI::kAddShortcutCustomEventId';
const SettingsSectionElementBase = HelpBubbleMixin(RouteObserverMixin(PrefServiceObserverMixin(UserUtilMixin(WebUiListenerMixin(I18nMixin(PolymerElement))))));
export class SettingsSectionElement extends SettingsSectionElementBase {
    static get is() {
        return 'settings-section';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /** An array of blocked sites to display. */
            blockedSites_: {
                type: Array,
                value: () => [],
            },
            /** An array of sites with permissions for actor login. */
            actorLoginPermissions_: {
                type: Array,
                value: () => [],
            },
            isActorLoginPermissionsEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableActorLoginPermissions');
                },
            },
            isFedCmEmbedderInitiatedLoginEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('fedCmEmbedderInitiatedLoginEnabled');
                },
            },
            shouldShowActorLoginPermissions_: {
                type: Boolean,
                computed: 'computeShouldShowActorLoginPermissions_(' +
                    'actorLoginPermissions_.length, isActorLoginPermissionsEnabled_, ' +
                    'isFedCmEmbedderInitiatedLoginEnabled_)',
            },
            // 
            isBiometricAuthenticationForFillingToggleVisible_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('biometricAuthenticationForFillingToggleVisible');
                },
            },
            // 
            isAutomatedPasswordChangeVisible_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('passwordChangeAvailable');
                },
            },
            hasPasswordsToExport_: {
                type: Boolean,
                value: false,
            },
            hasPasskeys_: {
                type: Boolean,
                value: false,
            },
            credentialsEnableServicePref_: Object,
            passwordSavingBlockedByPolicy_: {
                type: Boolean,
                computed: 'computePasswordSavingBlockedByPolicy_(' +
                    'credentialsEnableServicePref_)',
            },
            /** The visibility state of the trusted vault banner. */
            trustedVaultBannerState_: {
                type: Object,
                value: TrustedVaultBannerState.NOT_SHOWN,
            },
            movePasswordsLabel_: {
                type: String,
                value: '',
            },
            canAddShortcut_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('canAddShortcut');
                },
            },
            isPasswordManagerPinAvailable_: {
                type: Boolean,
                value: false,
            },
            isConnectedToCloudAuthenticator_: {
                type: Boolean,
                value: false,
            },
            isDisconnectCloudAuthenticatorInProgress_: {
                type: Boolean,
                value: false,
            },
            toastMessage_: {
                type: String,
                value: '',
            },
            showDisconnectCloudAuthenticatorDialog_: {
                type: Boolean,
                value: false,
            },
            removeActorLoginPermissionSite_: {
                type: Object,
            },
            localPasswordCount_: {
                type: Number,
                value: 0,
            },
        };
    }
    static get observers() {
        return [
            'updateIsPasswordManagerPinAvailable_(' +
                'isSyncingPasswords, isAccountStoreUser)',
            'updateIsCloudAuthenticatorConnected_(' +
                'isSyncingPasswords, isAccountStoreUser)',
            'updateTrustedVaultBannerState_(actionableError)',
        ];
    }
    setBlockedSitesListListener_ = null;
    setCredentialsChangedListener_ = null;
    ready() {
        super.ready();
        chrome.metricsPrivate.recordBoolean('PasswordManager.OpenedAsShortcut', window.matchMedia('(display-mode: standalone)').matches);
    }
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPref('credentials_enable_service', 'credentialsEnableServicePref_');
        const updateLocalPasswordCount = (localPasswordCount) => {
            this.updateLocalPasswordCount_(localPasswordCount);
        };
        const syncBrowserProxy = SyncBrowserProxyImpl.getInstance();
        syncBrowserProxy.getLocalPasswordCount().then(updateLocalPasswordCount);
        this.setBlockedSitesListListener_ = blockedSites => {
            this.blockedSites_ = blockedSites;
        };
        PasswordManagerImpl.getInstance().getBlockedSitesList().then(blockedSites => this.blockedSites_ = blockedSites);
        PasswordManagerImpl.getInstance().addBlockedSitesListChangedListener(this.setBlockedSitesListListener_);
        this.addWebUiListener('sync-service-local-password-count', updateLocalPasswordCount);
        this.setCredentialsChangedListener_ =
            (passwords) => {
                this.hasPasswordsToExport_ = passwords.length > 0;
                // Update the local password count based on the SyncService API
                // whenever the password list was modified.
                syncBrowserProxy.getLocalPasswordCount().then((localPasswordCount) => {
                    this.updateLocalPasswordCount_(localPasswordCount);
                });
                if (this.isActorLoginPermissionsEnabled_) {
                    PasswordManagerImpl.getInstance().getActorLoginPermissions().then(actorLoginPermissions => this.actorLoginPermissions_ =
                        actorLoginPermissions);
                }
            };
        PasswordManagerImpl.getInstance().getSavedPasswordList().then(this.setCredentialsChangedListener_);
        PasswordManagerImpl.getInstance().addSavedPasswordListChangedListener(this.setCredentialsChangedListener_);
        const trustedVaultStateChanged = (state) => {
            // Set the state provided by the backend.
            this.trustedVaultBannerState_ = state;
            // If we are currently in the error state, override the visual state to
            // OPTED_IN.
            if (this.actionableError ===
                PasswordManagerActionableError.kTrustedVaultKeyNeeded) {
                this.trustedVaultBannerState_ = TrustedVaultBannerState.OPTED_IN;
            }
        };
        syncBrowserProxy.getTrustedVaultBannerState().then(trustedVaultStateChanged);
        this.addWebUiListener('trusted-vault-banner-state-changed', trustedVaultStateChanged);
        // TODO(crbug.com/331611435): add listener for enclave availability and
        // trigger `updateIsPasswordManagerPinAvailable_`.
        this.updateIsPasswordManagerPinAvailable_();
        // Checks if the Chrome client is connected to / registered with the
        // Cloud Authenticator. If the client is connected, then a button to
        // disconnect the client is displayed.
        this.updateIsCloudAuthenticatorConnected_();
        // 
        PasskeysBrowserProxyImpl.getInstance().hasPasskeys().then(hasPasskeys => {
            this.hasPasskeys_ = hasPasskeys;
        });
        // 
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setBlockedSitesListListener_);
        PasswordManagerImpl.getInstance().removeBlockedSitesListChangedListener(this.setBlockedSitesListListener_);
        this.setBlockedSitesListListener_ = null;
        assert(this.setCredentialsChangedListener_);
        PasswordManagerImpl.getInstance().removeSavedPasswordListChangedListener(this.setCredentialsChangedListener_);
        this.setCredentialsChangedListener_ = null;
        this.$.toast.hide();
    }
    currentRouteChanged(newRoute, oldRoute) {
        if (newRoute.page === Page.SETTINGS &&
            oldRoute?.page === Page.PASSWORD_CHANGE &&
            this.isAutomatedPasswordChangeVisible_) {
            setTimeout(() => {
                const automatedPasswordChangeRow = this.shadowRoot.querySelector('#automatedPasswordChange');
                if (automatedPasswordChangeRow) {
                    automatedPasswordChangeRow.focus();
                }
            }, 0);
        }
        const triggerImportParam = newRoute.queryParameters.get(UrlParam.START_IMPORT) || '';
        if (triggerImportParam === 'true') {
            const importer = this.shadowRoot.querySelector('passwords-importer');
            assert(importer);
            importer.launchImport();
            const params = new URLSearchParams();
            Router.getInstance().updateRouterParams(params);
        }
    }
    onShortcutBannerDomChanged_() {
        const addShortcutBanner = this.root.querySelector('#addShortcutBanner');
        if (addShortcutBanner) {
            this.registerHelpBubble(PASSWORD_MANAGER_ADD_SHORTCUT_ELEMENT_ID, addShortcutBanner);
        }
    }
    onAddShortcutClick_() {
        this.notifyHelpBubbleAnchorCustomEvent(PASSWORD_MANAGER_ADD_SHORTCUT_ELEMENT_ID, PASSWORD_MANAGER_ADD_SHORTCUT_CUSTOM_EVENT_ID);
        // TODO(crbug.com/40236982): Record metrics on all entry points usage.
        // TODO(crbug.com/40236982): Hide the button for users after the shortcut is
        // installed.
        PasswordManagerImpl.getInstance().showAddShortcutDialog();
    }
    /**
     * Fires an event that should delete the blocked password entry.
     */
    onRemoveBlockedSiteClick_(event) {
        PasswordManagerImpl.getInstance().removeBlockedSite(event.model.item.id);
    }
    onRemoveActorLoginPermissionClick_(event) {
        this.removeActorLoginPermissionSite_ = event.model.item;
    }
    onCloseRemoveActorLoginPermissionDialog_() {
        this.removeActorLoginPermissionSite_ = undefined;
    }
    onRemoveActorLoginPermission_() {
        assert(this.removeActorLoginPermissionSite_);
        PasswordManagerImpl.getInstance().revokeActorLoginPermission(this.removeActorLoginPermissionSite_);
        this.removeActorLoginPermissionSite_ = undefined;
    }
    // 
    switchBiometricAuthBeforeFillingState_(e) {
        const biometricAuthenticationForFillingToggle = e.target;
        assert(biometricAuthenticationForFillingToggle);
        PasswordManagerImpl.getInstance().switchBiometricAuthBeforeFillingState();
    }
    // 
    onTrustedVaultBannerClick_() {
        switch (this.trustedVaultBannerState_) {
            case TrustedVaultBannerState.OPTED_IN:
                OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('trustedVaultLearnMoreUrl'));
                break;
            case TrustedVaultBannerState.OFFER_OPT_IN:
                OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('trustedVaultOptInUrl'));
                break;
            case TrustedVaultBannerState.NOT_SHOWN:
            default:
                assertNotReached();
        }
    }
    getTrustedVaultBannerTitle_() {
        switch (this.trustedVaultBannerState_) {
            case TrustedVaultBannerState.OPTED_IN:
                return this.i18n('trustedVaultBannerLabelOptedIn');
            case TrustedVaultBannerState.OFFER_OPT_IN:
                return this.i18n('trustedVaultBannerLabelOfferOptIn');
            case TrustedVaultBannerState.NOT_SHOWN:
                return '';
            default:
                assertNotReached();
        }
    }
    getTrustedVaultBannerDescription_() {
        switch (this.trustedVaultBannerState_) {
            case TrustedVaultBannerState.OPTED_IN:
                return this.i18n('trustedVaultBannerSubLabelOptedIn');
            case TrustedVaultBannerState.OFFER_OPT_IN:
                return this.i18n('trustedVaultBannerSubLabelOfferOptIn');
            case TrustedVaultBannerState.NOT_SHOWN:
                return '';
            default:
                assertNotReached();
        }
    }
    shouldHideTrustedVaultBanner_() {
        return this.trustedVaultBannerState_ === TrustedVaultBannerState.NOT_SHOWN;
    }
    getAriaLabelForBlockedSite_(blockedSite) {
        return this.i18n('removeBlockedAriaDescription', blockedSite.urls.shown);
    }
    // 
    onManagePasskeysClick_() {
        PasskeysBrowserProxyImpl.getInstance().managePasskeys();
    }
    // 
    computePasswordSavingBlockedByPolicy_() {
        assert(this.credentialsEnableServicePref_);
        return isSavingNewPasswordsBlockedByMandatoryPolicy(this.credentialsEnableServicePref_);
    }
    computeShouldShowActorLoginPermissions_(actorLoginPermissionsLength, isActorLoginPermissionsEnabled, isFedCmEmbedderInitiatedLoginEnabled) {
        return actorLoginPermissionsLength > 0 && isActorLoginPermissionsEnabled &&
            !isFedCmEmbedderInitiatedLoginEnabled;
    }
    onMovePasswordsClicked_(e) {
        e.preventDefault();
        SyncBrowserProxyImpl.getInstance().openBatchUpload(BatchUploadPasswordsEntryPoint.PASSWORD_MANAGER);
    }
    shouldShowMovePasswordsEntry_() {
        // Only show the move password entry if there are passwords returned from
        // the sync service API. This is needed to be consistent with the
        // availability of data in the dialog which uses the same API.
        return this.localPasswordCount_ > 0;
    }
    getAriaDescriptionMovePasswordsButton_(movePasswordsLabel) {
        return [
            movePasswordsLabel,
            this.i18n('movePasswordsInSettingsSubLabel'),
        ].join('. ');
    }
    // This updates the local password count coming from the Sync Service API.
    async updateLocalPasswordCount_(localPasswordCount) {
        this.localPasswordCount_ = localPasswordCount;
        this.movePasswordsLabel_ =
            await PluralStringProxyImpl.getInstance().getPluralString('deviceOnlyPasswordsIconTooltip', this.localPasswordCount_);
    }
    updateIsPasswordManagerPinAvailable_() {
        PasswordManagerImpl.getInstance().isPasswordManagerPinAvailable().then(available => this.isPasswordManagerPinAvailable_ =
            available && (this.isSyncingPasswords || this.isAccountStoreUser));
    }
    onChangePasswordManagerPinRowClick_() {
        PasswordManagerImpl.getInstance().changePasswordManagerPin().then(this.showToastForPasswordChange_.bind(this));
    }
    updateIsCloudAuthenticatorConnected_() {
        PasswordManagerImpl.getInstance().isConnectedToCloudAuthenticator().then(connected => this.isConnectedToCloudAuthenticator_ =
            connected && (this.isSyncingPasswords || this.isAccountStoreUser));
    }
    updateTrustedVaultBannerState_(error) {
        if (error === PasswordManagerActionableError.kTrustedVaultKeyNeeded) {
            this.trustedVaultBannerState_ = TrustedVaultBannerState.OPTED_IN;
        }
        else if (this.trustedVaultBannerState_ === TrustedVaultBannerState.OPTED_IN) {
            // Re-fetch the state from the browser if we no longer require unlock.
            SyncBrowserProxyImpl.getInstance().getTrustedVaultBannerState().then(state => this.trustedVaultBannerState_ = state);
        }
    }
    onDisconnectCloudAuthenticatorClick_() {
        this.showDisconnectCloudAuthenticatorDialog_ = true;
    }
    onCloseDisconnectCloudAuthenticatorDialog_() {
        this.showDisconnectCloudAuthenticatorDialog_ = false;
    }
    onDisconnectCloudAuthenticator_(e) {
        this.isDisconnectCloudAuthenticatorInProgress_ = false;
        this.updateIsCloudAuthenticatorConnected_();
        this.updateIsPasswordManagerPinAvailable_();
        if (e.detail.success) {
            this.showToastForCloudAuthenticatorDisconnected_();
        }
    }
    showToastForCloudAuthenticatorDisconnected_() {
        this.toastMessage_ = this.i18n('disconnectCloudAuthenticatorToastMessage');
        this.$.toast.show();
    }
    getAriaDescriptionForCloudAuthenticatorButton_() {
        return [
            this.i18n('disconnectCloudAuthenticatorTitle'),
            this.i18n('disconnectCloudAuthenticatorDescription'),
        ].join('. ');
    }
    showToastForPasswordChange_(success) {
        if (!success) {
            return;
        }
        this.toastMessage_ = this.i18n('passwordManagerPinChanged');
        this.$.toast.show();
    }
    onAutomatedPasswordChangeClick_() {
        Router.getInstance().navigateTo(Page.PASSWORD_CHANGE);
    }
    getAriaLabelForAutomatedPasswordChange_() {
        return [
            this.i18n('automatedPasswordChangeTitle'),
            this.i18n('automatedPasswordChangeDescription'),
        ].join('. ');
    }
}
customElements.define(SettingsSectionElement.is, SettingsSectionElement);
