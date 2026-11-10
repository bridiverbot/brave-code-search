/* Copyright (c) 2026 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { focusLeoInput } from './brave_account_common.js';
import { getCss } from './brave_account_common.css.js';
import { getHtml } from './brave_account_email_input.html.js';
import { maybeSuggestEmailCorrection } from './brave_account_email_typo.js';
// HTML5 type="email" validation accepts a bare domain with no dot (e.g.
// `user@localhost`), which the backend rejects. This pattern additionally
// requires the domain to contain a dot followed by at least one more
// character, rejecting those addresses inline rather than after a failed
// round trip. It intentionally stays a strict superset of type="email"'s own
// rules: it only constrains the domain, so the browser's built-in checks
// still run.
export const EMAIL_PATTERN = '.+@.+\\..+';
// Maximum email address length according to this RFC3696 errata:
// https://www.rfc-editor.org/errata/eid1690.
// While maxlength is based on UTF-16 code units (where surrogate pairs count as
// 2 code units), type="email"'s built-in validation filters out non-ASCII
// characters, so maxlength="254" effectively means 254 ASCII characters/254
// bytes. Platform behaviors: desktop and iOS invalidate the value if non-ASCII
// is typed, while Android prevents typing non-ASCII entirely.
export const MAX_EMAIL_LENGTH = 254;
export class BraveAccountEmailInputElement extends CrLitElement {
    static get is() {
        return 'brave-account-email-input';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            blockBraveAlias: { type: Boolean },
            email: { type: String, state: true },
            isFormatValid: { type: Boolean, state: true },
            suggestion: { type: String, state: true },
        };
    }
    focus() {
        focusLeoInput(this.shadowRoot?.querySelector('leo-input'));
    }
    onInput(detail) {
        this.email = detail.value.trim();
        this.isFormatValid =
            this.email.length > 0 && detail.innerEvent.target.validity.valid;
        this.suggestion = this.isFormatValid
            ? maybeSuggestEmailCorrection(this.email)
            : '';
        this.fire('email-input', {
            email: this.email,
            isValid: this.isValid(),
        });
    }
    #blockBraveAlias_accessor_storage = false;
    get blockBraveAlias() { return this.#blockBraveAlias_accessor_storage; }
    set blockBraveAlias(value) { this.#blockBraveAlias_accessor_storage = value; }
    #email_accessor_storage = '';
    get email() { return this.#email_accessor_storage; }
    set email(value) { this.#email_accessor_storage = value; }
    #isFormatValid_accessor_storage = false;
    get isFormatValid() { return this.#isFormatValid_accessor_storage; }
    set isFormatValid(value) { this.#isFormatValid_accessor_storage = value; }
    #suggestion_accessor_storage = '';
    get suggestion() { return this.#suggestion_accessor_storage; }
    set suggestion(value) { this.#suggestion_accessor_storage = value; }
    isBraveAlias() {
        return this.isFormatValid && /@bravealias\.com$/i.test(this.email);
    }
    severity() {
        if ((this.email.length !== 0 && !this.isFormatValid)
            || (this.blockBraveAlias && this.isBraveAlias())) {
            return 'error';
        }
        if (this.suggestion) {
            return 'warning';
        }
        return '';
    }
    shouldShowDropdown() {
        return (this.blockBraveAlias && this.isBraveAlias()) || !!this.suggestion;
    }
    isValid() {
        return this.isFormatValid && (!this.blockBraveAlias || !this.isBraveAlias());
    }
}
customElements.define(BraveAccountEmailInputElement.is, BraveAccountEmailInputElement);
