// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './cr_textarea.css.js';
import { getHtml } from './cr_textarea.html.js';
export class CrTextareaElement extends CrLitElement {
    static get is() {
        return 'cr-textarea';
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
             * Whether the text area should automatically get focus when the page
             * loads.
             */
            autofocus: {
                type: Boolean,
                reflect: true,
            },
            /**
             * Whether the text area is disabled. When disabled, the text area loses
             * focus and is not reachable by tabbing.
             */
            disabled: {
                type: Boolean,
                reflect: true,
            },
            /** Whether the text area is required. */
            required: {
                type: Boolean,
                reflect: true,
            },
            /** Maximum length (in characters) of the text area. */
            maxlength: { type: Number },
            /**
             * Whether the text area is read only. If read-only, content cannot be
             * changed.
             */
            readonly: {
                type: Boolean,
                reflect: true,
            },
            /** Number of rows (lines) of the text area. */
            rows: {
                type: Number,
                reflect: true,
            },
            /** Caption of the text area. */
            label: { type: String },
            value: {
                type: String,
                notify: true,
            },
            internalValue_: {
                type: String,
                state: true,
            },
            /**
             * Placeholder text that is shown when no value is present.
             */
            placeholder: { type: String },
            /** Whether the textarea can auto-grow vertically or not. */
            autogrow: {
                type: Boolean,
                reflect: true,
            },
            /** Whether the textarea is invalid or not. */
            invalid: {
                type: Boolean,
                reflect: true,
            },
            /**
             * First footer text below the text area. Can be used to warn user about
             * character limits.
             */
            firstFooter: { type: String },
            /**
             * Second footer text below the text area. Can be used to show current
             * character count.
             */
            secondFooter: { type: String },
        };
    }
    #autofocus_accessor_storage = false;
    get autofocus() { return this.#autofocus_accessor_storage; }
    set autofocus(value) { this.#autofocus_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #readonly_accessor_storage = false;
    get readonly() { return this.#readonly_accessor_storage; }
    set readonly(value) { this.#readonly_accessor_storage = value; }
    #required_accessor_storage = false;
    get required() { return this.#required_accessor_storage; }
    set required(value) { this.#required_accessor_storage = value; }
    #rows_accessor_storage = 3;
    get rows() { return this.#rows_accessor_storage; }
    set rows(value) { this.#rows_accessor_storage = value; }
    #label_accessor_storage = '';
    get label() { return this.#label_accessor_storage; }
    set label(value) { this.#label_accessor_storage = value; }
    #maxlength_accessor_storage;
    get maxlength() { return this.#maxlength_accessor_storage; }
    set maxlength(value) { this.#maxlength_accessor_storage = value; }
    #value_accessor_storage = '';
    get value() { return this.#value_accessor_storage; }
    set value(value) { this.#value_accessor_storage = value; }
    #placeholder_accessor_storage = '';
    get placeholder() { return this.#placeholder_accessor_storage; }
    set placeholder(value) { this.#placeholder_accessor_storage = value; }
    #autogrow_accessor_storage = false;
    get autogrow() { return this.#autogrow_accessor_storage; }
    set autogrow(value) { this.#autogrow_accessor_storage = value; }
    #invalid_accessor_storage = false;
    get invalid() { return this.#invalid_accessor_storage; }
    set invalid(value) { this.#invalid_accessor_storage = value; }
    #firstFooter_accessor_storage = '';
    get firstFooter() { return this.#firstFooter_accessor_storage; }
    set firstFooter(value) { this.#firstFooter_accessor_storage = value; }
    #secondFooter_accessor_storage = '';
    get secondFooter() { return this.#secondFooter_accessor_storage; }
    set secondFooter(value) { this.#secondFooter_accessor_storage = value; }
    #internalValue__accessor_storage = '';
    get internalValue_() { return this.#internalValue__accessor_storage; }
    set internalValue_(value) { this.#internalValue__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('value')) {
            // Don't allow null or undefined as these will render in the input.
            // cr-textarea cannot use Lit's "nothing" in the HTML template; this
            // breaks the underlying native textarea's auto validation if |required|
            // is set.
            this.internalValue_ =
                (this.value === undefined || this.value === null) ? '' : this.value;
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('disabled')) {
            this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        }
    }
    focusInput() {
        this.$.input.focus();
    }
    /**
     * 'change' event fires when <input> value changes and user presses 'Enter'.
     * This function helps propagate it to host since change events don't
     * propagate across Shadow DOM boundary by default.
     */
    async onInputChange_(e) {
        // Ensure that |value| has been updated before re-firing 'change'.
        await this.updateComplete;
        this.fire('change', { sourceEvent: e });
    }
    onInput_(e) {
        this.internalValue_ = e.target.value;
        this.value = this.internalValue_;
    }
    onFocus_() {
        this.onInputFocusChange_();
    }
    onBlur_() {
        this.onInputFocusChange_();
    }
    onInputFocusChange_() {
        // focused_ is used instead of :focus-within, so focus on elements within
        // the suffix slot does not trigger a change in input styles.
        if (this.shadowRoot.activeElement === this.$.input) {
            this.setAttribute('focused_', '');
        }
        else {
            this.removeAttribute('focused_');
        }
    }
    getFooterAria_() {
        return this.invalid ? 'assertive' : 'polite';
    }
}
customElements.define(CrTextareaElement.is, CrTextareaElement);
