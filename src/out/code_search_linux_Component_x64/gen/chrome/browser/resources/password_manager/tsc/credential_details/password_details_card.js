// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/policy/cr_tooltip_icon.js';
import '../cr_input_style.css.js';
import '../shared_style.css.js';
import './credential_details_card.css.js';
import './credential_field.js';
import './credential_note.js';
import '../dialogs/edit_password_dialog.js';
import '../dialogs/multi_store_delete_password_dialog.js';
import '../sharing/share_password_flow.js';
import '../sharing/metrics_utils.js';
import { PrefServiceObserverMixin } from '/shared/settings/prefs2/pref_service_observer_mixin.js';
import { HelpBubbleMixin } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { htmlEscape } from 'chrome://resources/js/util.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordManagerImpl, PasswordViewPageInteractions } from '../password_manager_proxy.js';
import { Page, Router } from '../router.js';
import { MoveToAccountStoreTrigger, PasswordSharingActions, recordMoveToAccountStoreAccepted, recordPasswordSharingInteraction } from '../sharing/metrics_utils.js';
import { ShowPasswordMixin } from '../show_password_mixin.js';
import { UserUtilMixin } from '../user_utils_mixin.js';
import { getTemplate } from './password_details_card.html.js';
export const PASSWORD_SHARE_BUTTON_BUTTON_ELEMENT_ID = 'PasswordManagerUI::kSharePasswordElementId';
const PasswordDetailsCardElementBase = PrefServiceObserverMixin(HelpBubbleMixin(UserUtilMixin(ShowPasswordMixin(I18nMixin(PolymerElement)))));
export class PasswordDetailsCardElement extends PasswordDetailsCardElementBase {
    static get is() {
        return 'password-details-card';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            password: {
                type: Object,
                observer: 'onPasswordChanged_',
            },
            groupName: String,
            iconUrl: String,
            movePasswordsSubtitle: {
                type: String,
                computed: 'computeMovePasswordsSubtitle_(accountEmail)',
            },
            shouldRegisterSharingPromo: {
                type: Boolean,
                value: false,
            },
            interactionsEnum_: {
                type: Object,
                value: PasswordViewPageInteractions,
            },
            showEditPasswordDialog_: {
                type: Boolean,
                value: false,
            },
            showDeletePasswordDialog_: {
                type: Boolean,
                value: false,
            },
            showShareButton_: {
                type: Boolean,
                value: false,
                // 
            },
            passwordSharingDisabled_: {
                type: Boolean,
                value: false,
            },
            showShareFlow_: {
                type: Boolean,
                value: false,
            },
            isUsingAccountStore: {
                type: Boolean,
                value: false,
            },
            trigger_: {
                type: Object,
                value: () => MoveToAccountStoreTrigger
                    .EXPLICITLY_TRIGGERED_FOR_SINGLE_PASSWORD_IN_DETAILS_IN_SETTINGS,
            },
        };
    }
    static get observers() {
        return [
            'maybeRegisterSharingHelpBubble_(' +
                'shouldRegisterSharingPromo, showShareButton_, ' +
                'passwordSharingDisabled_)',
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.addPrefObserver('password_manager.password_sharing_enabled', pref => {
            this.passwordSharingDisabled_ = pref.enforcement ===
                chrome.settingsPrivate.Enforcement.ENFORCED &&
                !pref.value;
        });
    }
    isFederated_() {
        return !!this.password.federationText;
    }
    getPasswordLabel_() {
        return this.isFederated_() ? this.i18n('federationLabel') :
            this.i18n('passwordLabel');
    }
    getPasswordValue_() {
        if (this.isFederated_()) {
            return this.password.federationText;
        }
        return this.password.password;
    }
    getPasswordType_() {
        return this.isFederated_() ? 'text' : this.getPasswordInputType();
    }
    onCopyPasswordClick_() {
        PasswordManagerImpl.getInstance()
            .requestPlaintextPassword(this.password.id, chrome.passwordsPrivate.PlaintextReason.COPY)
            .then(() => this.showToast_(this.i18n('passwordCopiedToClipboard')))
            .catch(() => { });
        this.extendAuthValidity_();
        PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.PASSWORD_COPY_BUTTON_CLICKED);
    }
    onShowPasswordClick_() {
        this.onShowHidePasswordButtonClick();
        PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.PASSWORD_SHOW_BUTTON_CLICKED);
    }
    onDeleteClick_() {
        PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.PASSWORD_DELETE_BUTTON_CLICKED);
        if (this.password.storedIn ===
            chrome.passwordsPrivate.PasswordStoreSet.DEVICE_AND_ACCOUNT) {
            this.showDeletePasswordDialog_ = true;
            return;
        }
        PasswordManagerImpl.getInstance().removeCredential(this.password.id, this.password.storedIn);
        this.dispatchEvent(new CustomEvent('password-removed', {
            bubbles: true,
            composed: true,
            detail: {
                removedFromStores: this.password.storedIn,
            },
        }));
    }
    showToast_(message) {
        this.dispatchEvent(new CustomEvent('value-copied', {
            bubbles: true,
            composed: true,
            detail: { toastMessage: message },
        }));
    }
    onEditClicked_() {
        this.showEditPasswordDialog_ = true;
        this.extendAuthValidity_();
        PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.PASSWORD_EDIT_BUTTON_CLICKED);
    }
    onEditPasswordDialogClosed_() {
        // Only note is notified because updating username or password triggers
        // recomputing of an id which updates the whole list of displayed passwords.
        this.notifyPath('password.note');
        this.showEditPasswordDialog_ = false;
        this.extendAuthValidity_();
    }
    onDeletePasswordDialogClosed_() {
        this.showDeletePasswordDialog_ = false;
        this.extendAuthValidity_();
    }
    onShareButtonClick_() {
        recordPasswordSharingInteraction(PasswordSharingActions.PASSWORD_DETAILS_SHARE_BUTTON_CLICKED);
        this.hideHelpBubble(PASSWORD_SHARE_BUTTON_BUTTON_ELEMENT_ID);
        this.showShareFlow_ = true;
    }
    onShareFlowDone_() {
        this.showShareFlow_ = false;
        setTimeout(() => {
            this.$.shareButton.focus();
        }, 0);
    }
    extendAuthValidity_() {
        PasswordManagerImpl.getInstance().extendAuthValidity();
    }
    getDomainLabel_() {
        const hasApps = this.password.affiliatedDomains?.some(domain => domain.signonRealm.startsWith('android://'));
        const hasSites = this.password.affiliatedDomains?.some(domain => !domain.signonRealm.startsWith('android://'));
        if (hasApps && hasSites) {
            return this.i18n('sitesAndAppsLabel');
        }
        return hasApps ? this.i18n('appsLabel') : this.i18n('sitesLabel');
    }
    computeMovePasswordsSubtitle_() {
        return this.i18n('movePasswordsToAccountDetailsCardSubtitle', this.accountEmail);
    }
    computeShowShareButton_() {
        return !this.isFederated_() &&
            (this.isSyncingPasswords || this.isAccountStoreUser);
    }
    getCredentialTypeString_() {
        return this.isFederated_() ? this.i18n('federatedCredentialProviderAriaLabel', this.password.federationText) :
            this.i18n('passwordLabel');
    }
    getAriaLabelForPasswordCard_() {
        return this.password.username ?
            this.i18n('passwordDetailsCardAriaLabel', this.getCredentialTypeString_(), htmlEscape(this.password.username)) :
            this.getCredentialTypeString_();
    }
    getAriaLabelForEditButton_() {
        return this.password.username ?
            this.i18n('passwordDetailsCardEditButtonAriaLabel', this.getCredentialTypeString_(), htmlEscape(this.password.username)) :
            this.i18n('passwordDetailsCardEditButtonNoUsernameAriaLabel', this.getCredentialTypeString_());
    }
    getAriaLabelForDeleteButton_() {
        return this.password.username ?
            this.i18n('passwordDetailsCardDeleteButtonAriaLabel', this.getCredentialTypeString_(), htmlEscape(this.password.username)) :
            this.i18n('passwordDetailsCardDeleteButtonNoUsernameAriaLabel', this.getCredentialTypeString_());
    }
    getAriaLabelForShareButton_() {
        return this.password.username ?
            this.i18n('passwordDetailsCardShareButtonAriaLabel', this.getCredentialTypeString_(), htmlEscape(this.password.username)) :
            this.i18n('passwordDetailsCardShareButtonNoUsernameAriaLabel', this.getCredentialTypeString_());
    }
    onMovePasswordClicked_(e) {
        assert(this.isAccountStoreUser);
        e.preventDefault();
        PasswordManagerImpl.getInstance().movePasswordsToAccount([this.password.id]);
        this.dispatchEvent(new CustomEvent('passwords-moved', {
            bubbles: true,
            composed: true,
            detail: { accountEmail: this.accountEmail, numberOfPasswords: 1 },
        }));
        recordMoveToAccountStoreAccepted(this.trigger_);
    }
    showMovePasswordEntry_() {
        return this.isUsingAccountStore &&
            this.password.storedIn ===
                chrome.passwordsPrivate.PasswordStoreSet.DEVICE;
    }
    onPasswordChanged_() {
        this.isPasswordVisible = false;
    }
    maybeRegisterSharingHelpBubble_(shouldRegisterSharingPromo, showShareButton, passwordSharingDisabled) {
        // Register the help bubble only if this is the first card in the list
        // (`shouldRegisterSharingPromo` is true), and the share button is visible
        // and not disabled.
        if (!shouldRegisterSharingPromo || !showShareButton ||
            passwordSharingDisabled) {
            return;
        }
        this.registerHelpBubble(PASSWORD_SHARE_BUTTON_BUTTON_ELEMENT_ID, this.$.shareButtonContainer);
    }
    getCloudUploadIcon_() {
        return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
            'passwords-icon:cloud-upload' :
            'passwords-icon:upload-old';
    }
    showCompromiseWarning_() {
        if (!loadTimeData.getBoolean('showCompromiseWarningInDetailsCard')) {
            return false;
        }
        const info = this.password.compromisedInfo;
        if (!info || info.isMuted) {
            return false;
        }
        const types = info.compromiseTypes;
        return types.includes(chrome.passwordsPrivate.CompromiseType.LEAKED) ||
            types.includes(chrome.passwordsPrivate.CompromiseType.PHISHED);
    }
    onChangePasswordClicked_() {
        assert(this.password.changePasswordUrl);
        OpenWindowProxyImpl.getInstance().openUrl(this.password.changePasswordUrl);
        PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.CHANGE_PASSWORD_CLICKED);
    }
    onCheckupLinkClicked_(e) {
        const target = e.target;
        if (target.tagName === 'A') {
            e.preventDefault();
            Router.getInstance().navigateTo(Page.CHECKUP);
        }
    }
}
customElements.define(PasswordDetailsCardElement.is, PasswordDetailsCardElement);
