// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-security-keys-reset-dialog' is a dialog for
 * triggering factory resets of security keys.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import '../../i18n_setup.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { SecurityKeysResetBrowserProxyImpl } from './security_keys_browser_proxy.js';
import { getCss } from './security_keys_reset_dialog.css.js';
import { getHtml } from './security_keys_reset_dialog.html.js';
export var ResetDialogPage;
(function (ResetDialogPage) {
    ResetDialogPage["INITIAL"] = "initial";
    ResetDialogPage["NO_RESET"] = "noReset";
    ResetDialogPage["RESET_FAILED"] = "resetFailed";
    ResetDialogPage["RESET_CONFIRM"] = "resetConfirm";
    ResetDialogPage["RESET_SUCCESS"] = "resetSuccess";
    ResetDialogPage["RESET_NOT_ALLOWED"] = "resetNotAllowed";
})(ResetDialogPage || (ResetDialogPage = {}));
const SettingsSecurityKeysResetDialogElementBase = I18nMixinLit(CrLitElement);
export class SettingsSecurityKeysResetDialogElement extends SettingsSecurityKeysResetDialogElementBase {
    static get is() {
        return 'settings-security-keys-reset-dialog';
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
             * A CTAP error code for when the specific error was not recognised.
             */
            errorCode_: { type: Number },
            /**
             * True iff the process has completed, successfully or otherwise.
             */
            complete_: { type: Boolean },
            /**
             * The id of an element on the page that is currently shown.
             */
            shown_: { type: String },
            title_: { type: String },
        };
    }
    #errorCode__accessor_storage = null;
    get errorCode_() { return this.#errorCode__accessor_storage; }
    set errorCode_(value) { this.#errorCode__accessor_storage = value; }
    #complete__accessor_storage = false;
    get complete_() { return this.#complete__accessor_storage; }
    set complete_(value) { this.#complete__accessor_storage = value; }
    #shown__accessor_storage = ResetDialogPage.INITIAL;
    get shown_() { return this.#shown__accessor_storage; }
    set shown_(value) { this.#shown__accessor_storage = value; }
    #title__accessor_storage = '';
    get title_() { return this.#title__accessor_storage; }
    set title_(value) { this.#title__accessor_storage = value; }
    browserProxy_ = SecurityKeysResetBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.title_ = this.i18n('securityKeysResetTitle');
        this.$.dialog.showModal();
        this.browserProxy_.reset().then(code => {
            // code is a CTAP error code. See
            // https://fidoalliance.org/specs/fido-v2.0-rd-20180702/fido-client-to-authenticator-protocol-v2.0-rd-20180702.html#error-responses
            if (code === 1 /* INVALID_COMMAND */) {
                this.shown_ = ResetDialogPage.NO_RESET;
                this.finish_();
            }
            else if (code !== 0 /* unknown error */) {
                this.errorCode_ = code;
                this.shown_ = ResetDialogPage.RESET_FAILED;
                this.finish_();
            }
            else {
                this.title_ = this.i18n('securityKeysResetConfirmTitle');
                this.shown_ = ResetDialogPage.RESET_CONFIRM;
                this.browserProxy_.completeReset().then(code => {
                    this.title_ = this.i18n('securityKeysResetTitle');
                    if (code === 0 /* SUCCESS */) {
                        this.shown_ = ResetDialogPage.RESET_SUCCESS;
                    }
                    else if (code === 48 /* NOT_ALLOWED */) {
                        this.shown_ = ResetDialogPage.RESET_NOT_ALLOWED;
                    }
                    else /* unknown error */ {
                        this.errorCode_ = code;
                        this.shown_ = ResetDialogPage.RESET_FAILED;
                    }
                    this.finish_();
                });
            }
        });
    }
    onDialogClose_() {
        this.closeDialog_();
    }
    onButtonClick_() {
        this.closeDialog_();
    }
    closeDialog_() {
        this.$.dialog.close();
        this.finish_();
    }
    finish_() {
        if (this.complete_) {
            return;
        }
        this.complete_ = true;
        this.browserProxy_.close();
    }
    onIronSelect_(e) {
        // Prevent this event from bubbling since it is unnecessarily triggering
        // the listener within settings-animated-pages.
        e.stopPropagation();
    }
    /**
     * @return Contents of the error string that may be displayed to the user.
     */
    resetFailed_() {
        if (this.errorCode_ === null) {
            return '';
        }
        return this.i18n('securityKeysResetError', this.errorCode_.toString());
    }
    /**
     * @return The label of the dialog button.
     */
    closeText_() {
        return this.i18n(this.complete_ ? 'ok' : 'cancel');
    }
    /**
     * @return The class of the dialog button.
     */
    maybeActionButton_() {
        return this.complete_ ? 'action-button' : 'cancel-button';
    }
}
customElements.define(SettingsSecurityKeysResetDialogElement.is, SettingsSecurityKeysResetDialogElement);
