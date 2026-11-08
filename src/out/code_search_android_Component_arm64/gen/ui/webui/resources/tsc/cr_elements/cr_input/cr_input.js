// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './cr_input.css.js';
import { getHtml } from './cr_input.html.js';
/**
 * Input types supported by cr-input.
 */
const SUPPORTED_INPUT_TYPES = new Set([
    'number',
    'password',
    'search',
    'text',
    'url',
]);
export class CrInputElement extends CrLitElement {
    static get is() {
        return 'cr-input';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            ariaDescription: { type: String },
            ariaLabel: { type: String },
            autofocus: {
                type: Boolean,
                reflect: true,
            },
            autoValidate: { type: Boolean },
            disabled: {
                type: Boolean,
                reflect: true,
            },
            errorMessage: { type: String },
            /**
             * This is strictly used internally for styling, do not attempt to use
             * this to set focus.
             */
            focused_: {
                type: Boolean,
                reflect: true,
            },
            invalid: {
                type: Boolean,
                notify: true,
                reflect: true,
            },
            max: {
                type: Number,
                reflect: true,
            },
            min: {
                type: Number,
                reflect: true,
            },
            maxlength: {
                type: Number,
                reflect: true,
            },
            minlength: {
                type: Number,
                reflect: true,
            },
            pattern: {
                type: String,
                reflect: true,
            },
            inputmode: { type: String },
            label: { type: String },
            placeholder: { type: String },
            readonly: {
                type: Boolean,
                reflect: true,
            },
            required: {
                type: Boolean,
                reflect: true,
            },
            inputTabindex: { type: Number },
            type: { type: String },
            value: {
                type: String,
                notify: true,
            },
            internalValue_: {
                type: String,
                state: true,
            },
        };
    }
    #ariaDescription_accessor_storage = null;
    get ariaDescription() { return this.#ariaDescription_accessor_storage; }
    set ariaDescription(value) { this.#ariaDescription_accessor_storage = value; }
    #ariaLabel_accessor_storage = '';
    get ariaLabel() { return this.#ariaLabel_accessor_storage; }
    set ariaLabel(value) { this.#ariaLabel_accessor_storage = value; }
    #autofocus_accessor_storage = false;
    get autofocus() { return this.#autofocus_accessor_storage; }
    set autofocus(value) { this.#autofocus_accessor_storage = value; }
    #autoValidate_accessor_storage = false;
    get autoValidate() { return this.#autoValidate_accessor_storage; }
    set autoValidate(value) { this.#autoValidate_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #errorMessage_accessor_storage = '';
    get errorMessage() { return this.#errorMessage_accessor_storage; }
    set errorMessage(value) { this.#errorMessage_accessor_storage = value; }
    #inputmode_accessor_storage;
    get inputmode() { return this.#inputmode_accessor_storage; }
    set inputmode(value) { this.#inputmode_accessor_storage = value; }
    #inputTabindex_accessor_storage = 0;
    get inputTabindex() { return this.#inputTabindex_accessor_storage; }
    set inputTabindex(value) { this.#inputTabindex_accessor_storage = value; }
    #invalid_accessor_storage = false;
    get invalid() { return this.#invalid_accessor_storage; }
    set invalid(value) { this.#invalid_accessor_storage = value; }
    #label_accessor_storage = '';
    get label() { return this.#label_accessor_storage; }
    set label(value) { this.#label_accessor_storage = value; }
    #max_accessor_storage;
    get max() { return this.#max_accessor_storage; }
    set max(value) { this.#max_accessor_storage = value; }
    #min_accessor_storage;
    get min() { return this.#min_accessor_storage; }
    set min(value) { this.#min_accessor_storage = value; }
    #maxlength_accessor_storage;
    get maxlength() { return this.#maxlength_accessor_storage; }
    set maxlength(value) { this.#maxlength_accessor_storage = value; }
    #minlength_accessor_storage;
    get minlength() { return this.#minlength_accessor_storage; }
    set minlength(value) { this.#minlength_accessor_storage = value; }
    #pattern_accessor_storage;
    get pattern() { return this.#pattern_accessor_storage; }
    set pattern(value) { this.#pattern_accessor_storage = value; }
    #placeholder_accessor_storage = null;
    get placeholder() { return this.#placeholder_accessor_storage; }
    set placeholder(value) { this.#placeholder_accessor_storage = value; }
    #readonly_accessor_storage = false;
    get readonly() { return this.#readonly_accessor_storage; }
    set readonly(value) { this.#readonly_accessor_storage = value; }
    #required_accessor_storage = false;
    get required() { return this.#required_accessor_storage; }
    set required(value) { this.#required_accessor_storage = value; }
    #type_accessor_storage = 'text';
    get type() { return this.#type_accessor_storage; }
    set type(value) { this.#type_accessor_storage = value; }
    #value_accessor_storage = '';
    get value() { return this.#value_accessor_storage; }
    set value(value) { this.#value_accessor_storage = value; }
    #internalValue__accessor_storage = '';
    get internalValue_() { return this.#internalValue__accessor_storage; }
    set internalValue_(value) { this.#internalValue__accessor_storage = value; }
    #focused__accessor_storage = false;
    get focused_() { return this.#focused__accessor_storage; }
    set focused_(value) { this.#focused__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('value')) {
            // Don't allow null or undefined as these will render in the input.
            // cr-input cannot use Lit's "nothing" in the HTML template; this breaks
            // the underlying native input's auto validation if |required| is set.
            this.internalValue_ =
                (this.value === undefined || this.value === null) ? '' : this.value;
        }
        if (changedProperties.has('inputTabindex')) {
            // CrInput only supports 0 or -1 values for the input's tabindex to allow
            // having the input in tab order or not. Values greater than 0 will not
            // work as the shadow root encapsulates tabindices.
            assert(this.inputTabindex === 0 || this.inputTabindex === -1);
        }
        if (changedProperties.has('type')) {
            // Check that the 'type' is one of the supported types.
            assert(SUPPORTED_INPUT_TYPES.has(this.type));
        }
    }
    firstUpdated() {
        // Use inputTabindex instead.
        assert(!this.hasAttribute('tabindex'));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('value')) {
            const previous = changedProperties.get('value');
            if ((!!this.value || !!previous) && this.autoValidate) {
                this.invalid = !this.inputElement.checkValidity();
            }
        }
        if (changedProperties.has('placeholder')) {
            if (this.placeholder === null || this.placeholder === undefined) {
                this.inputElement.removeAttribute('placeholder');
            }
            else {
                this.inputElement.setAttribute('placeholder', this.placeholder);
            }
        }
    }
    get inputElement() {
        return this.$.input;
    }
    focus() {
        this.focusInput();
    }
    /**
     * Focuses the input element.
     * TODO(crbug.com/40593040): Replace this with focus() after resolving the text
     * selection issue described in onFocus_().
     * @return Whether the <input> element was focused.
     */
    focusInput() {
        if (this.shadowRoot.activeElement === this.inputElement) {
            return false;
        }
        this.inputElement.focus();
        return true;
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
    onInputFocus_() {
        this.focused_ = true;
    }
    onInputBlur_() {
        this.focused_ = false;
    }
    getAriaLabel_() {
        return this.ariaLabel || this.label || this.placeholder;
    }
    // Returns the id of the visible label element when aria-labelledby
    // should reference it, or null otherwise. Some accessibility frameworks
    // (notably ATK/AT-SPI used by Orca on Linux) do not reliably surface
    // the input's accessible name from aria-label alone in this layout.
    // Skipped when the host sets its own aria-label, so that takes
    // precedence as before.
    getAriaLabelledBy_() {
        if (this.label && !this.ariaLabel) {
            return 'label';
        }
        return null;
    }
    // The visible label is exposed to a11y only when referenced via
    // aria-labelledby; otherwise it stays aria-hidden to avoid duplicating
    // the inner input's aria-label.
    getLabelAriaHidden_() {
        return this.getAriaLabelledBy_() ? null : 'true';
    }
    getAriaInvalid_() {
        return this.invalid ? 'true' : 'false';
    }
    getErrorMessage_() {
        return this.invalid ? this.errorMessage : '';
    }
    getErrorRole_() {
        // On VoiceOver role="alert" is not consistently announced when its
        // content changes. Adding and removing the |role| attribute every time
        // there is an error, triggers VoiceOver to consistently announce.
        return this.invalid ? 'alert' : '';
    }
    getAriaErrorMessage_() {
        return this.invalid ? 'error' : '';
    }
    /**
     * Selects the text within the input. If no parameters are passed, it will
     * select the entire string. Either no params or both params should be passed.
     * Publicly, this function should be used instead of inputElement.select() or
     * manipulating inputElement.selectionStart/selectionEnd because the order of
     * execution between focus() and select() is sensitive.
     */
    select(start, end) {
        this.inputElement.focus();
        if (start !== undefined && end !== undefined) {
            this.inputElement.setSelectionRange(start, end);
        }
        else {
            // Can't just pass one param.
            assert(start === undefined && end === undefined);
            this.inputElement.select();
        }
    }
    // Note: In order to preserve it as a synchronous API, validate() forces 2
    // rendering updates to cr-input. This allows this function to be used to
    // synchronously determine the validity of a <cr-input>, however, as a result
    // of these 2 forced updates it may result in slower performance. validate()
    // should not be called internally from within cr_input.ts, and should only
    // be called where necessary from clients.
    validate() {
        // Ensure that any changes to |value| have propagated to the native <input>.
        this.performUpdate();
        this.invalid = !this.inputElement.checkValidity();
        // Perform update again to ensure change propagates via 2 way binding to
        // Polymer parent before returning.
        this.performUpdate();
        return !this.invalid;
    }
}
customElements.define(CrInputElement.is, CrInputElement);
