/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import { AccountStateFieldTags, DialogMode, whichAccountState, } from './brave_account.mojom-webui.js';
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { EventTracker } from '//resources/js/event_tracker.js';
// 
import { getDeepActiveElement, hasKeyModifiers } from '//resources/js/util.js';
// 
import { BraveAccountBrowserProxyImpl, } from './brave_account_browser_proxy.js';
import { getHtml } from './brave_account_dialogs.html.js';
export class BraveAccountDialogsElement extends CrLitElement {
    static get is() {
        return 'brave-account-dialogs';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            dialog: { type: Object },
            isCapsLockOn: { type: Boolean, state: true },
        };
    }
    onBackButtonClicked() {
        assert(this.dialog);
        this.dialog = {
            type: this.dialog.type === 'PASSWORD_RESET' ? 'SIGN_IN' : 'ENTRY',
        };
    }
    onCloseDialog() {
        this.browserProxy.closeDialog();
    }
    browserProxy = BraveAccountBrowserProxyImpl.getInstance();
    #dialog_accessor_storage = undefined;
    get dialog() { return this.#dialog_accessor_storage; }
    set dialog(value) { this.#dialog_accessor_storage = value; }
    #isCapsLockOn_accessor_storage = false;
    get isCapsLockOn() { return this.#isCapsLockOn_accessor_storage; }
    set isCapsLockOn(value) { this.#isCapsLockOn_accessor_storage = value; }
    accountStateListenerId = null;
    eventTracker = new EventTracker();
    connectedCallback() {
        super.connectedCallback();
        this.eventTracker.add(this, 'back-button-clicked', this.onBackButtonClicked);
        this.eventTracker.add(this, 'close-dialog', this.onCloseDialog);
        // 
        this.eventTracker.add(document, 'keydown', this.onKeyDown);
        this.eventTracker.add(document, 'keyup', this.onKeyUp);
        // 
        // Handle account state changes.
        // LOGGED_OUT (no verification): show the ENTRY dialog
        // LOGGED_OUT (with verification, email not yet verified): show OTP
        // LOGGED_OUT (with verification, email verified): show CREDENTIALS
        // LOGGED_IN (no verification): close the native dialog
        // LOGGED_IN (with verification, email not yet verified): show OTP
        // LOGGED_IN (with verification, email verified): show CREDENTIALS
        //
        // Since account state is profile-wide, this automatically updates dialogs
        // across all tabs.
        this.accountStateListenerId =
            this.browserProxy.authenticationObserverCallbackRouter.onAccountStateChanged.addListener(async (state) => {
                // Handled on its own, ahead of the state mapping: such a page only
                // ever shows the deletion dialog, so the mapping never has to know
                // the mode exists.
                if ((await this.browserProxy.getDialogMode())
                    === DialogMode.kAccountDeletion) {
                    if (whichAccountState(state) === AccountStateFieldTags.LOGGED_IN
                        && !state.loggedIn.verification) {
                        this.dialog = { type: 'ACCOUNT_DELETION' };
                    }
                    else {
                        this.onCloseDialog();
                    }
                    return;
                }
                switch (whichAccountState(state)) {
                    case AccountStateFieldTags.LOGGED_OUT: {
                        const verification = state.loggedOut.verification;
                        if (verification) {
                            const intent = {
                                loggedOutIntent: verification.intent,
                            };
                            this.dialog = verification.verifiedEmail
                                ? {
                                    type: 'CREDENTIALS',
                                    verification: {
                                        intent,
                                        verifiedEmail: verification.verifiedEmail,
                                    },
                                }
                                : { type: 'OTP', intent };
                        }
                        else {
                            this.dialog = { type: 'ENTRY' };
                        }
                        break;
                    }
                    case AccountStateFieldTags.LOGGED_IN: {
                        const verification = state.loggedIn.verification;
                        if (verification) {
                            const intent = {
                                loggedInIntent: verification.intent,
                            };
                            this.dialog = verification.verifiedEmail
                                ? {
                                    type: 'CREDENTIALS',
                                    verification: {
                                        intent,
                                        verifiedEmail: verification.verifiedEmail,
                                    },
                                }
                                : { type: 'OTP', intent };
                        }
                        else {
                            this.onCloseDialog();
                        }
                        break;
                    }
                }
            });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.accountStateListenerId);
        this.browserProxy.authenticationObserverCallbackRouter.removeListener(this.accountStateListenerId);
        this.eventTracker.removeAll();
    }
    // 
    onKeyDown = (e) => {
        this.isCapsLockOn = e.getModifierState('CapsLock');
        // Ignore keys pressed with modifiers (Ctrl, Shift, etc.).
        if (hasKeyModifiers(e)) {
            return;
        }
        switch (e.key) {
            // Clicks the dialog's action button.
            case 'Enter': {
                // Only clicks it when a text field is focused: any other focused
                // element (e.g. the "Forgot your password?" link) keeps its own Enter
                // behavior.
                if (!getDeepActiveElement()?.closest('input')) {
                    break;
                }
                const dialog = [...(this.shadowRoot?.children ?? [])].find((el) => el instanceof HTMLElement && el.shadowRoot);
                // The action button is the first one slotted; anything after it is
                // secondary (cancel, resend, ...) and must never be triggered by
                // Enter, however the action's own disabled state leaves them.
                const actionButton = dialog?.shadowRoot?.querySelector('leo-button[slot="buttons"]');
                if (actionButton?.matches(':not([isDisabled])')) {
                    actionButton.click();
                    e.preventDefault();
                }
                break;
            }
            // Closes the dialog.
            case 'Escape':
                this.onCloseDialog();
                e.preventDefault();
                break;
        }
    };
    onKeyUp = (e) => {
        this.isCapsLockOn = e.getModifierState('CapsLock');
    };
}
customElements.define(BraveAccountDialogsElement.is, BraveAccountDialogsElement);
