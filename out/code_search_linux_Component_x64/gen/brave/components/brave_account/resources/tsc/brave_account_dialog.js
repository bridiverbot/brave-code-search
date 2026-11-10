/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import { CrLitElement, } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './brave_account_dialog.css.js';
import { getHtml } from './brave_account_dialog.html.js';
export class BraveAccountDialogElement extends CrLitElement {
    static get is() {
        return 'brave-account-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            dialogDescription: { type: String },
            dialogTitle: { type: String },
            isFooterSlotted: { type: Boolean },
            showBackButton: { type: Boolean },
        };
    }
    #dialogDescription_accessor_storage = '';
    get dialogDescription() { return this.#dialogDescription_accessor_storage; }
    set dialogDescription(value) { this.#dialogDescription_accessor_storage = value; }
    #dialogTitle_accessor_storage = '';
    get dialogTitle() { return this.#dialogTitle_accessor_storage; }
    set dialogTitle(value) { this.#dialogTitle_accessor_storage = value; }
    #isFooterSlotted_accessor_storage = false;
    get isFooterSlotted() { return this.#isFooterSlotted_accessor_storage; }
    set isFooterSlotted(value) { this.#isFooterSlotted_accessor_storage = value; }
    #showBackButton_accessor_storage = false;
    get showBackButton() { return this.#showBackButton_accessor_storage; }
    set showBackButton(value) { this.#showBackButton_accessor_storage = value; }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        const footer = this.shadowRoot?.querySelector('slot[name="footer"]');
        if (footer) {
            footer.addEventListener('slotchange', () => {
                this.isFooterSlotted = footer.assignedNodes().length > 0;
            });
        }
        // Deferred until our own render settles: the inputs are slotted in by the
        // dialog around us, and <leo-input> only mounts the native <input> it
        // delegates focus to once it renders.
        //
        // Focus through the element's own `focus()`: our wrappers override it to
        // reach the <leo-input> they hold, while a bare <leo-input> delegates to
        // its <input> natively.
        this.updateComplete.then(() => {
            this.shadowRoot
                ?.querySelector('slot[name="inputs"]')
                ?.assignedElements()[0]
                ?.querySelector('brave-account-email-input, brave-account-otp-input,'
                + ' brave-account-password-input, leo-input')
                ?.focus();
        });
    }
}
customElements.define(BraveAccountDialogElement.is, BraveAccountDialogElement);
