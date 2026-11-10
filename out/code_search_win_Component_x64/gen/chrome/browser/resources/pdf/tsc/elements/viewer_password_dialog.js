// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './viewer_password_dialog.css.js';
import { getHtml } from './viewer_password_dialog.html.js';
export class ViewerPasswordDialogElement extends CrLitElement {
    static get is() {
        return 'viewer-password-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            invalid: { type: Boolean },
        };
    }
    #invalid_accessor_storage = false;
    get invalid() { return this.#invalid_accessor_storage; }
    set invalid(value) { this.#invalid_accessor_storage = value; }
    close() {
        this.$.dialog.close();
    }
    deny() {
        const password = this.$.password;
        password.disabled = false;
        this.$.submit.disabled = false;
        this.invalid = true;
        password.select();
        this.dispatchEvent(new CustomEvent('password-denied-for-testing'));
    }
    onSubmitClick_() {
        const password = this.$.password;
        if (password.value.length === 0) {
            return;
        }
        password.disabled = true;
        this.$.submit.disabled = true;
        this.dispatchEvent(new CustomEvent('password-submitted', {
            detail: { password: password.value },
        }));
    }
}
customElements.define(ViewerPasswordDialogElement.is, ViewerPasswordDialogElement);
