// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import './settings_section.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { InputMixin } from './input_mixin.js';
import { getCss } from './number_settings_section.css.js';
import { getHtml } from './number_settings_section.html.js';
const PrintPreviewNumberSettingsSectionElementBase = WebUiListenerMixinLit(InputMixin(CrLitElement));
export class PrintPreviewNumberSettingsSectionElement extends PrintPreviewNumberSettingsSectionElementBase {
    static get is() {
        return 'print-preview-number-settings-section';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            inputValid: {
                type: Boolean,
                notify: true,
                reflect: true,
            },
            currentValue: {
                type: String,
                notify: true,
            },
            defaultValue: { type: String },
            maxValue: { type: Number },
            minValue: { type: Number },
            inputLabel: { type: String },
            inputAriaLabel: { type: String },
            hintMessage: { type: String },
            disabled: { type: Boolean },
            errorMessage_: { type: String },
        };
    }
    #currentValue_accessor_storage = '';
    get currentValue() { return this.#currentValue_accessor_storage; }
    set currentValue(value) { this.#currentValue_accessor_storage = value; }
    #defaultValue_accessor_storage = '';
    get defaultValue() { return this.#defaultValue_accessor_storage; }
    set defaultValue(value) { this.#defaultValue_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #hintMessage_accessor_storage = '';
    get hintMessage() { return this.#hintMessage_accessor_storage; }
    set hintMessage(value) { this.#hintMessage_accessor_storage = value; }
    #inputAriaLabel_accessor_storage = '';
    get inputAriaLabel() { return this.#inputAriaLabel_accessor_storage; }
    set inputAriaLabel(value) { this.#inputAriaLabel_accessor_storage = value; }
    #inputLabel_accessor_storage = '';
    get inputLabel() { return this.#inputLabel_accessor_storage; }
    set inputLabel(value) { this.#inputLabel_accessor_storage = value; }
    #inputValid_accessor_storage = true;
    get inputValid() { return this.#inputValid_accessor_storage; }
    set inputValid(value) { this.#inputValid_accessor_storage = value; }
    #minValue_accessor_storage;
    get minValue() { return this.#minValue_accessor_storage; }
    set minValue(value) { this.#minValue_accessor_storage = value; }
    #maxValue_accessor_storage;
    get maxValue() { return this.#maxValue_accessor_storage; }
    set maxValue(value) { this.#maxValue_accessor_storage = value; }
    #errorMessage__accessor_storage = '';
    get errorMessage_() { return this.#errorMessage__accessor_storage; }
    set errorMessage_(value) { this.#errorMessage__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('hintMessage') ||
            changedProperties.has('inputValid')) {
            this.errorMessage_ = this.inputValid ? '' : this.hintMessage;
        }
    }
    firstUpdated() {
        this.addEventListener('input-change', e => this.onInputChangeEvent_(e));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('currentValue')) {
            this.onCurrentValueChanged_();
        }
    }
    /** @return The cr-input field element for InputBehavior. */
    getInput() {
        return this.$.userValue;
    }
    /**
     * @param e Contains the new input value.
     */
    onInputChangeEvent_(e) {
        if (e.detail === '') {
            // Set current value first in this case, because if the input was
            // previously invalid, it will become valid in the line below but
            // we do not want to set the setting to the invalid value.
            this.currentValue = '';
        }
        this.inputValid = this.$.userValue.validate();
        this.currentValue = e.detail;
    }
    /**
     * @return Whether the input should be disabled.
     */
    getDisabled_() {
        return this.disabled && this.inputValid;
    }
    onKeydown_(e) {
        if (['.', 'e', 'E', '-', '+'].includes(e.key)) {
            e.preventDefault();
            return;
        }
        if (e.key === 'Enter') {
            this.onBlur_();
        }
    }
    onBlur_() {
        if (this.currentValue === '') {
            this.currentValue = this.defaultValue;
            this.inputValid = this.$.userValue.validate();
        }
        if (this.$.userValue.value === '') {
            this.$.userValue.value = this.defaultValue;
        }
    }
    onCurrentValueChanged_() {
        if (this.currentValue !== this.$.userValue.value) {
            this.$.userValue.value = this.currentValue;
            this.inputValid = this.$.userValue.validate();
        }
        this.resetString();
    }
}
customElements.define(PrintPreviewNumberSettingsSectionElement.is, PrintPreviewNumberSettingsSectionElement);
