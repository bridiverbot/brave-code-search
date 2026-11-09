/* Copyright (c) 2026 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getDeepActiveElement, hasKeyModifiers } from '//resources/js/util.js';
import { focusLeoInput } from './brave_account_common.js';
import { getCss } from './brave_account_otp_input.css.js';
import { getHtml } from './brave_account_otp_input.html.js';
export class BraveAccountOtpInputElement extends CrLitElement {
    static get is() {
        return 'brave-account-otp-input';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            length: { type: Number },
        };
    }
    focus() {
        focusLeoInput(this.shadowRoot?.querySelector('leo-input'));
    }
    get indices() {
        return [...Array(this.length).keys()];
    }
    onPaste(e) {
        e.preventDefault();
        this.distribute(e.clipboardData?.getData('text') || '');
    }
    // Handle direct text input by overwriting the slots.
    // Done in `beforeinput` to bypass native insertion (caret-dependent),
    // ensuring consistent behavior.
    // Real validation happens on the backend, so characters are passed as-is.
    //
    // A single keystroke inserts one character at the focused slot. The Android
    // on-screen keyboard's paste affordance, however, does not dispatch a
    // `paste`/`ClipboardEvent` (unlike long-press paste), it inserts the whole
    // clipboard text as a single `insertText` edit, surfacing here with
    // multi-character `e.data`. Distributing handles both uniformly - one
    // character per slot starting at the focused one.
    onBeforeInput(e, index) {
        if (e.inputType === 'insertText') {
            e.preventDefault();
            this.distribute(e.data ?? '', index);
        }
    }
    // Distribute a multi-character string across the slots, one character per
    // slot, starting at `startIndex` (defaults to the currently focused slot).
    distribute(text, startIndex) {
        const inputs = this.getInputs();
        if (startIndex === undefined) {
            const activeElement = getDeepActiveElement();
            startIndex = Math.max(0, inputs.findIndex((input) => input.shadowRoot?.contains(activeElement)));
        }
        const chars = text.toUpperCase();
        for (const [offset, char] of [...chars].entries()) {
            const input = inputs[startIndex + offset];
            if (!input) {
                break;
            }
            input.value = char;
        }
        this.focusInput(Math.min(startIndex + chars.length, this.length - 1));
        this.emitCode();
    }
    // Collapse selection on focus (caret at end) to avoid the visual highlight.
    onFocus(detail) {
        const target = detail.innerEvent.target;
        target.setSelectionRange(target.value.length, target.value.length);
    }
    // Fallback for native edits not handled in `beforeinput` (non-insertText
    // paths). Normal typing is handled in `beforeinput`, here we only normalize
    // the final value and emit the code.
    onInput(detail, index) {
        const input = this.getInput(index);
        if (!input) {
            return;
        }
        input.value = detail.value.toUpperCase().slice(-1);
        this.emitCode();
    }
    // Handle navigation and editing keys explicitly.
    // Note: `Delete` is handled manually because the caret is always placed at
    // the end, so native delete would otherwise do nothing.
    onKeyDown(detail, index) {
        const e = detail.innerEvent;
        if (hasKeyModifiers(e)) {
            return;
        }
        switch (e.key) {
            case 'ArrowLeft':
            case 'ArrowRight':
                return this.handleArrowKey(e, index);
            case 'Backspace':
                return this.handleBackspaceKey(e, index);
            case 'Delete':
                this.handleDeleteKey(e, index);
        }
    }
    handleArrowKey(e, index) {
        const nextIndex = e.key === 'ArrowLeft'
            ? index - 1
            : e.key === 'ArrowRight'
                ? index + 1
                : null;
        if (nextIndex !== null && nextIndex >= 0 && nextIndex < this.length) {
            e.preventDefault();
            this.focusInput(nextIndex);
        }
    }
    // Handle backspace manually instead of relying on native deletion.
    // Native backspace removes the character to the left of the caret,
    // so it no-ops whenever the caret sits before a character (position 0),
    // a state users can reach themselves by repositioning the caret.
    // Clearing explicitly makes backspace caret-independent.
    handleBackspaceKey(e, index) {
        const input = this.getInput(index);
        if (!input) {
            return;
        }
        if (input.value) {
            // Clear the current slot, keeping focus on it.
            e.preventDefault();
            input.value = '';
        }
        else {
            // Already empty: clear the previous slot and move focus to it.
            const previousInput = this.getInput(index - 1);
            if (!previousInput) {
                return;
            }
            e.preventDefault();
            previousInput.value = '';
            this.focusInput(index - 1);
        }
        this.emitCode();
    }
    handleDeleteKey(e, index) {
        const input = this.getInput(index);
        if (!input || !input.value) {
            return;
        }
        e.preventDefault();
        input.value = '';
        this.emitCode();
    }
    getInputs() {
        return [...this.renderRoot.querySelectorAll('leo-input')];
    }
    getInput(index) {
        return this.getInputs()[index];
    }
    focusInput(index) {
        this.getInput(index)?.focus();
    }
    getCode() {
        return this.getInputs()
            .map((input) => input.value)
            .join('');
    }
    emitCode() {
        const code = this.getCode();
        this.fire('otp-input', {
            code,
            isCodeValid: code.length === this.length,
        });
    }
    #length_accessor_storage = 6;
    get length() { return this.#length_accessor_storage; }
    set length(value) { this.#length_accessor_storage = value; }
}
customElements.define(BraveAccountOtpInputElement.is, BraveAccountOtpInputElement);
