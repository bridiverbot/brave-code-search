// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-security-keys-credential-management-dialog' is a
 * dialog for viewing and erasing credentials stored on a security key.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '../../site_favicon.js';
import '../../i18n_setup.js';
import './security_keys_pin_field.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { SecurityKeysCredentialBrowserProxyImpl } from './security_keys_browser_proxy.js';
import { getCss } from './security_keys_credential_management_dialog.css.js';
import { getHtml } from './security_keys_credential_management_dialog.html.js';
export var CredentialManagementDialogPage;
(function (CredentialManagementDialogPage) {
    CredentialManagementDialogPage["INITIAL"] = "initial";
    CredentialManagementDialogPage["PIN_PROMPT"] = "pinPrompt";
    CredentialManagementDialogPage["PIN_ERROR"] = "pinError";
    CredentialManagementDialogPage["CREDENTIALS"] = "credentials";
    CredentialManagementDialogPage["EDIT"] = "edit";
    CredentialManagementDialogPage["ERROR"] = "error";
    CredentialManagementDialogPage["CONFIRM"] = "confirm";
})(CredentialManagementDialogPage || (CredentialManagementDialogPage = {}));
const SettingsSecurityKeysCredentialManagementDialogElementBase = WebUiListenerMixinLit(I18nMixinLit(CrLitElement));
const MAX_INPUT_LENGTH = 62;
export class SettingsSecurityKeysCredentialManagementDialogElement extends SettingsSecurityKeysCredentialManagementDialogElementBase {
    static get is() {
        return 'settings-security-keys-credential-management-dialog';
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
             * The ID of the element currently shown in the dialog.
             */
            dialogPage_: { type: String },
            dialogTitle_: { type: String },
            /**
             * The list of credentials displayed in the dialog.
             */
            credentials_: { type: Array },
            /**
             * The message displayed on the "error" dialog page.
             */
            errorMsg_: { type: String },
            cancelButtonVisible_: { type: Boolean },
            closeButtonVisible_: { type: Boolean },
            confirmButtonDisabled_: { type: Boolean },
            confirmButtonLabel_: { type: String },
            confirmButtonVisible_: { type: Boolean },
            confirmMsg_: { type: String },
            displayNameInputError_: { type: String },
            editButtonVisible_: { type: Boolean },
            minPinLength_: { type: Number },
            newDisplayName_: { type: String },
            newUsername_: { type: String },
            userNameInputError_: { type: String },
        };
    }
    #dialogPage__accessor_storage = CredentialManagementDialogPage.INITIAL;
    get dialogPage_() { return this.#dialogPage__accessor_storage; }
    set dialogPage_(value) { this.#dialogPage__accessor_storage = value; }
    #dialogTitle__accessor_storage = '';
    get dialogTitle_() { return this.#dialogTitle__accessor_storage; }
    set dialogTitle_(value) { this.#dialogTitle__accessor_storage = value; }
    #credentials__accessor_storage = [];
    get credentials_() { return this.#credentials__accessor_storage; }
    set credentials_(value) { this.#credentials__accessor_storage = value; }
    #errorMsg__accessor_storage = '';
    get errorMsg_() { return this.#errorMsg__accessor_storage; }
    set errorMsg_(value) { this.#errorMsg__accessor_storage = value; }
    #cancelButtonVisible__accessor_storage = true;
    get cancelButtonVisible_() { return this.#cancelButtonVisible__accessor_storage; }
    set cancelButtonVisible_(value) { this.#cancelButtonVisible__accessor_storage = value; }
    #closeButtonVisible__accessor_storage = false;
    get closeButtonVisible_() { return this.#closeButtonVisible__accessor_storage; }
    set closeButtonVisible_(value) { this.#closeButtonVisible__accessor_storage = value; }
    #confirmButtonDisabled__accessor_storage = false;
    get confirmButtonDisabled_() { return this.#confirmButtonDisabled__accessor_storage; }
    set confirmButtonDisabled_(value) { this.#confirmButtonDisabled__accessor_storage = value; }
    #confirmButtonLabel__accessor_storage = '';
    get confirmButtonLabel_() { return this.#confirmButtonLabel__accessor_storage; }
    set confirmButtonLabel_(value) { this.#confirmButtonLabel__accessor_storage = value; }
    #confirmButtonVisible__accessor_storage = false;
    get confirmButtonVisible_() { return this.#confirmButtonVisible__accessor_storage; }
    set confirmButtonVisible_(value) { this.#confirmButtonVisible__accessor_storage = value; }
    #confirmMsg__accessor_storage = '';
    get confirmMsg_() { return this.#confirmMsg__accessor_storage; }
    set confirmMsg_(value) { this.#confirmMsg__accessor_storage = value; }
    #displayNameInputError__accessor_storage = '';
    get displayNameInputError_() { return this.#displayNameInputError__accessor_storage; }
    set displayNameInputError_(value) { this.#displayNameInputError__accessor_storage = value; }
    #editButtonVisible__accessor_storage = false;
    get editButtonVisible_() { return this.#editButtonVisible__accessor_storage; }
    set editButtonVisible_(value) { this.#editButtonVisible__accessor_storage = value; }
    #minPinLength__accessor_storage = 0;
    get minPinLength_() { return this.#minPinLength__accessor_storage; }
    set minPinLength_(value) { this.#minPinLength__accessor_storage = value; }
    #newDisplayName__accessor_storage = '';
    get newDisplayName_() { return this.#newDisplayName__accessor_storage; }
    set newDisplayName_(value) { this.#newDisplayName__accessor_storage = value; }
    #newUsername__accessor_storage = '';
    get newUsername_() { return this.#newUsername__accessor_storage; }
    set newUsername_(value) { this.#newUsername__accessor_storage = value; }
    #userNameInputError__accessor_storage = '';
    get userNameInputError_() { return this.#userNameInputError__accessor_storage; }
    set userNameInputError_(value) { this.#userNameInputError__accessor_storage = value; }
    browserProxy_ = SecurityKeysCredentialBrowserProxyImpl.getInstance();
    credentialIdToDelete_ = '';
    editingCredential_ = null;
    showSetPINButton_ = false;
    connectedCallback() {
        super.connectedCallback();
        this.$.dialog.showModal();
        this.addWebUiListener('security-keys-credential-management-finished', (error, requiresPINChange = false) => this.onPinError_(error, requiresPINChange));
        this.browserProxy_.startCredentialManagement().then((response) => {
            this.minPinLength_ = response.minPinLength;
            this.editButtonVisible_ = response.supportsUpdateUserInformation;
            this.dialogPage_ = CredentialManagementDialogPage.PIN_PROMPT;
        });
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('dialogPage_')) {
            this.updateDialogPageState_();
        }
        if (changedPrivateProperties.has('newDisplayName_') ||
            changedPrivateProperties.has('newUsername_')) {
            this.validateInput_();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('dialogPage_')) {
            if (this.dialogPage_ === CredentialManagementDialogPage.PIN_PROMPT) {
                this.$.pin.focus();
            }
            this.fire('credential-management-dialog-ready-for-testing');
        }
    }
    onPinError_(error, requiresPINChange = false) {
        this.errorMsg_ = error;
        this.showSetPINButton_ = requiresPINChange;
        this.dialogPage_ = CredentialManagementDialogPage.PIN_ERROR;
    }
    onError_(error) {
        this.errorMsg_ = error;
        this.dialogPage_ = CredentialManagementDialogPage.ERROR;
    }
    submitPin_() {
        // Disable the confirm button to prevent concurrent submissions.
        this.confirmButtonDisabled_ = true;
        this.$.pin.trySubmit(pin => this.browserProxy_.providePin(pin))
            .then(() => {
            // Leave confirm button disabled while enumerating credentials.
            this.browserProxy_.enumerateCredentials().then((credentials) => this.onCredentials_(credentials));
        }, () => {
            // Wrong PIN.
            this.confirmButtonDisabled_ = false;
        });
    }
    onCredentials_(credentials) {
        this.credentials_ = credentials;
        this.dialogPage_ = CredentialManagementDialogPage.CREDENTIALS;
    }
    updateDialogPageState_() {
        switch (this.dialogPage_) {
            case CredentialManagementDialogPage.INITIAL:
                this.cancelButtonVisible_ = true;
                this.confirmButtonVisible_ = false;
                this.closeButtonVisible_ = false;
                this.dialogTitle_ =
                    this.i18n('securityKeysCredentialManagementDialogTitle');
                break;
            case CredentialManagementDialogPage.PIN_PROMPT:
                this.cancelButtonVisible_ = false;
                this.confirmButtonLabel_ = this.i18n('continue');
                this.confirmButtonDisabled_ = false;
                this.confirmButtonVisible_ = true;
                this.closeButtonVisible_ = false;
                this.dialogTitle_ =
                    this.i18n('securityKeysCredentialManagementDialogTitle');
                break;
            case CredentialManagementDialogPage.PIN_ERROR:
                this.cancelButtonVisible_ = true;
                this.confirmButtonLabel_ = this.i18n('securityKeysSetPinButton');
                this.confirmButtonVisible_ = this.showSetPINButton_;
                this.confirmButtonDisabled_ = false;
                this.closeButtonVisible_ = false;
                this.dialogTitle_ =
                    this.i18n('securityKeysCredentialManagementDialogTitle');
                break;
            case CredentialManagementDialogPage.CREDENTIALS:
                this.cancelButtonVisible_ = false;
                this.confirmButtonLabel_ = this.i18n('done');
                this.confirmButtonDisabled_ = false;
                this.confirmButtonVisible_ = true;
                this.closeButtonVisible_ = false;
                this.dialogTitle_ =
                    this.i18n('securityKeysCredentialManagementDialogTitle');
                break;
            case CredentialManagementDialogPage.EDIT:
                this.cancelButtonVisible_ = true;
                this.confirmButtonLabel_ = this.i18n('save');
                this.confirmButtonDisabled_ = false;
                this.confirmButtonVisible_ = true;
                this.closeButtonVisible_ = false;
                this.dialogTitle_ =
                    this.i18n('securityKeysUpdateCredentialDialogTitle');
                break;
            case CredentialManagementDialogPage.ERROR:
                this.cancelButtonVisible_ = false;
                this.confirmButtonLabel_ = this.i18n('continue');
                this.confirmButtonDisabled_ = false;
                this.confirmButtonVisible_ = true;
                this.closeButtonVisible_ = false;
                this.dialogTitle_ =
                    this.i18n('securityKeysCredentialManagementDialogTitle');
                break;
            case CredentialManagementDialogPage.CONFIRM:
                this.cancelButtonVisible_ = true;
                this.confirmButtonLabel_ = this.i18n('delete');
                this.confirmButtonVisible_ = true;
                this.closeButtonVisible_ = false;
                this.dialogTitle_ =
                    this.i18n('securityKeysCredentialManagementConfirmDeleteTitle');
                break;
            default:
                assertNotReached();
        }
    }
    onConfirmButtonClick_() {
        switch (this.dialogPage_) {
            case CredentialManagementDialogPage.PIN_PROMPT:
                this.submitPin_();
                break;
            case CredentialManagementDialogPage.PIN_ERROR:
                this.$.dialog.close();
                this.fire('credential-management-set-pin');
                break;
            case CredentialManagementDialogPage.CREDENTIALS:
                this.$.dialog.close();
                break;
            case CredentialManagementDialogPage.EDIT:
                this.updateUserInformation_();
                break;
            case CredentialManagementDialogPage.ERROR:
                this.dialogPage_ = CredentialManagementDialogPage.CREDENTIALS;
                break;
            case CredentialManagementDialogPage.CONFIRM:
                this.deleteCredential_();
                break;
            default:
                assertNotReached();
        }
    }
    onCancelButtonClick_() {
        switch (this.dialogPage_) {
            case CredentialManagementDialogPage.INITIAL:
            case CredentialManagementDialogPage.PIN_PROMPT:
            case CredentialManagementDialogPage.PIN_ERROR:
            case CredentialManagementDialogPage.CREDENTIALS:
                this.$.dialog.close();
                break;
            case CredentialManagementDialogPage.EDIT:
            case CredentialManagementDialogPage.ERROR:
            case CredentialManagementDialogPage.CONFIRM:
                this.dialogPage_ = CredentialManagementDialogPage.CREDENTIALS;
                break;
            default:
                assertNotReached();
        }
    }
    onDialogClose_() {
        this.browserProxy_.close();
    }
    onCloseButtonClick_() {
        this.$.dialog.close();
    }
    isEmpty_(str) {
        return !str || str.length === 0;
    }
    onIronSelect_(e) {
        // Prevent this event from bubbling since it is unnecessarily triggering
        // the listener within settings-animated-pages.
        e.stopPropagation();
    }
    onDeleteButtonClick_(e) {
        const target = e.currentTarget;
        this.credentialIdToDelete_ = target.dataset['credentialid'];
        assert(!this.isEmpty_(this.credentialIdToDelete_));
        this.confirmMsg_ =
            this.i18n('securityKeysCredentialManagementConfirmDeleteCredential');
        this.dialogPage_ = CredentialManagementDialogPage.CONFIRM;
    }
    deleteCredential_() {
        this.browserProxy_.deleteCredentials([this.credentialIdToDelete_])
            .then((response) => {
            if (!response.success) {
                this.onError_(response.message);
                return;
            }
            this.credentials_ = this.credentials_.filter(c => c.credentialId !== this.credentialIdToDelete_);
            this.dialogPage_ = CredentialManagementDialogPage.CREDENTIALS;
        });
    }
    validateInput_() {
        this.displayNameInputError_ =
            this.newDisplayName_.length > MAX_INPUT_LENGTH ?
                this.i18n('securityKeysInputTooLong') :
                '';
        this.userNameInputError_ = this.newUsername_.length > MAX_INPUT_LENGTH ?
            this.i18n('securityKeysInputTooLong') :
            '';
        this.confirmButtonDisabled_ =
            !this.isEmpty_(this.displayNameInputError_ + this.userNameInputError_);
    }
    onUpdateButtonClick_(e) {
        const target = e.currentTarget;
        const credentialId = target.dataset['credentialid'];
        for (const credential of this.credentials_) {
            if (credential.credentialId === credentialId) {
                this.editingCredential_ = credential;
                break;
            }
        }
        assert(this.editingCredential_);
        this.newDisplayName_ = this.editingCredential_.userDisplayName;
        this.newUsername_ = this.editingCredential_.userName;
        this.dialogPage_ = CredentialManagementDialogPage.EDIT;
    }
    onNewDisplayNameValueChanged_(e) {
        this.newDisplayName_ = e.detail.value;
    }
    onNewUsernameValueChanged_(e) {
        this.newUsername_ = e.detail.value;
    }
    updateUserInformation_() {
        assert(this.dialogPage_ === CredentialManagementDialogPage.EDIT);
        assert(this.editingCredential_);
        if (this.isEmpty_(this.newUsername_)) {
            this.newUsername_ = this.editingCredential_.userName;
        }
        if (this.isEmpty_(this.newDisplayName_)) {
            this.newDisplayName_ = this.editingCredential_.userDisplayName;
        }
        this.browserProxy_
            .updateUserInformation(this.editingCredential_.credentialId, this.editingCredential_.userHandle, this.newUsername_, this.newDisplayName_)
            .then((response) => {
            if (!response.success) {
                this.onError_(response.message);
                return;
            }
            this.credentials_ = this.credentials_.map(c => {
                if (c.credentialId === this.editingCredential_.credentialId) {
                    return {
                        ...c,
                        userName: this.newUsername_,
                        userDisplayName: this.newDisplayName_,
                    };
                }
                return c;
            });
        });
        this.dialogPage_ = CredentialManagementDialogPage.CREDENTIALS;
    }
}
customElements.define(SettingsSecurityKeysCredentialManagementDialogElement.is, SettingsSecurityKeysCredentialManagementDialogElement);
