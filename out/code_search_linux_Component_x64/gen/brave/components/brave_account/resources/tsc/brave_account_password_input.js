/* Copyright (c) 2026 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { focusLeoInput } from './brave_account_common.js';
import { getCss } from './brave_account_common.css.js';
import { getHtml } from './brave_account_password_input.html.js';
// maxlength is based on UTF-16 code units (where surrogate pairs count as
// 2 code units). maxlength=8192 allows up to 8192 code units (16kB for BMP,
// up to 32kB with characters outside the BMP, e.g. emojis). This limits
// length in code units, not bytes.
export const MAX_PASSWORD_LENGTH = 8192;
export class BraveAccountPasswordInputElement extends CrLitElement {
    static get is() {
        return 'brave-account-password-input';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            config: { type: Object },
            isCapsLockOn: { type: Boolean },
            isInputFocused: { type: Boolean, state: true },
            isStrongEnough: { type: Boolean, state: true },
            label: { type: String },
            password: { type: String, state: true },
            placeholder: { type: String },
        };
    }
    focus() {
        focusLeoInput(this.shadowRoot?.querySelector('leo-input'));
    }
    focusHandler(detail) {
        this.isInputFocused = detail.innerEvent.type === 'focus';
    }
    onInput(detail) {
        this.password = detail.value;
        this.fire('password-input', {
            password: this.password,
            isValid: this.isValid(),
        });
    }
    onToggleVisibility(e) {
        ;
        e.currentTarget.setAttribute('type', e.detail.show ? 'text' : 'password');
    }
    onPasswordStrengthChanged(e) {
        if (this.config.mode === 'strength') {
            this.isStrongEnough = e.detail.isStrongEnough;
            this.config.onPasswordStrengthChanged(e.detail);
        }
    }
    confirmPassword() {
        return this.config.mode === 'confirmation'
            ? this.config.confirmPassword
            : '';
    }
    shouldStyleAsError() {
        if (this.password.length === 0) {
            return false;
        }
        switch (this.config.mode) {
            case 'confirmation':
                return this.password !== this.confirmPassword();
            case 'regular':
                return this.password !== this.password.trim();
            case 'strength':
                return this.password !== this.password.trim() || !this.isStrongEnough;
        }
    }
    shouldShowDropdown() {
        return (this.password.length !== 0
            && (this.config.mode !== 'regular' || !this.isValid()));
    }
    isValid() {
        return this.password.length !== 0 && this.password === this.password.trim();
    }
    #config_accessor_storage = { mode: 'regular' };
    get config() { return this.#config_accessor_storage; }
    set config(value) { this.#config_accessor_storage = value; }
    #isCapsLockOn_accessor_storage = false;
    get isCapsLockOn() { return this.#isCapsLockOn_accessor_storage; }
    set isCapsLockOn(value) { this.#isCapsLockOn_accessor_storage = value; }
    #isInputFocused_accessor_storage = false;
    get isInputFocused() { return this.#isInputFocused_accessor_storage; }
    set isInputFocused(value) { this.#isInputFocused_accessor_storage = value; }
    #isStrongEnough_accessor_storage = false;
    get isStrongEnough() { return this.#isStrongEnough_accessor_storage; }
    set isStrongEnough(value) { this.#isStrongEnough_accessor_storage = value; }
    #label_accessor_storage = '';
    get label() { return this.#label_accessor_storage; }
    set label(value) { this.#label_accessor_storage = value; }
    #password_accessor_storage = '';
    get password() { return this.#password_accessor_storage; }
    set password(value) { this.#password_accessor_storage = value; }
    #placeholder_accessor_storage = '';
    get placeholder() { return this.#placeholder_accessor_storage; }
    set placeholder(value) { this.#placeholder_accessor_storage = value; }
}
customElements.define(BraveAccountPasswordInputElement.is, BraveAccountPasswordInputElement);
