// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './icons.html.js';
import '/strings.m.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { ComposeTextareaAnimator } from './animations/textarea_animator.js';
import { getCss } from './textarea.css.js';
import { getHtml } from './textarea.html.js';
export class ComposeTextareaElement extends CrLitElement {
    static get is() {
        return 'compose-textarea';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            allowExitingReadonlyMode: {
                type: Boolean,
                reflect: true,
            },
            inputParams: { type: Object },
            readonly: {
                type: Boolean,
                reflect: true,
            },
            invalidInput_: {
                type: Boolean,
                reflect: true,
            },
            tooLong_: { type: Boolean },
            tooShort_: { type: Boolean },
            value: {
                type: String,
                notify: true,
            },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #allowExitingReadonlyMode_accessor_storage = false;
    get allowExitingReadonlyMode() { return this.#allowExitingReadonlyMode_accessor_storage; }
    set allowExitingReadonlyMode(value) { this.#allowExitingReadonlyMode_accessor_storage = value; }
    #inputParams_accessor_storage = {
        minWordLimit: 0,
        maxWordLimit: 0,
        maxCharacterLimit: 0,
    };
    get inputParams() { return this.#inputParams_accessor_storage; }
    set inputParams(value) { this.#inputParams_accessor_storage = value; }
    #readonly_accessor_storage = false;
    get readonly() { return this.#readonly_accessor_storage; }
    set readonly(value) { this.#readonly_accessor_storage = value; }
    #invalidInput__accessor_storage = false;
    get invalidInput_() { return this.#invalidInput__accessor_storage; }
    set invalidInput_(value) { this.#invalidInput__accessor_storage = value; }
    #tooLong__accessor_storage = false;
    get tooLong_() { return this.#tooLong__accessor_storage; }
    set tooLong_(value) { this.#tooLong__accessor_storage = value; }
    #tooShort__accessor_storage = false;
    get tooShort_() { return this.#tooShort__accessor_storage; }
    set tooShort_(value) { this.#tooShort__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    #value_accessor_storage = '';
    get value() { return this.#value_accessor_storage; }
    set value(value) { this.#value_accessor_storage = value; }
    animator_;
    placeholderText_ = '';
    constructor() {
        super();
        this.animator_ = new ComposeTextareaAnimator(this, loadTimeData.getBoolean('enableAnimations'));
    }
    firstUpdated() {
        this.placeholderText_ = this.$.input.placeholder;
    }
    focusInput() {
        this.$.input.focus();
    }
    focusEditButton() {
        this.$.editButton.focus();
    }
    onEditClick_() {
        this.fire('edit-click');
    }
    scrollInputToTop() {
        this.$.input.scrollTop = 0;
    }
    shouldShowEditIcon_() {
        return this.allowExitingReadonlyMode && this.readonly;
    }
    onInput_() {
        this.value = this.$.input.value;
    }
    onTextAreaChange_() {
        if (this.$.input.value === '') {
            this.$.input.placeholder = this.placeholderText_;
        }
        else {
            this.$.input.placeholder = '';
        }
    }
    transitionToEditable() {
        this.animator_.transitionToEditable();
    }
    transitionToReadonly(fromHeight) {
        this.animator_.transitionToReadonly(fromHeight);
    }
    transitionToEditing(bodyHeight) {
        this.animator_.transitionToEditing(bodyHeight);
    }
    transitionToResult(bodyHeight) {
        this.animator_.transitionToResult(bodyHeight);
    }
    validate() {
        // Ensure that any changes to |value| have propagated to the native input.
        this.performUpdate();
        const value = this.$.input.value;
        const wordCount = value.match(/\S+/g)?.length || 0;
        this.tooLong_ = value.length > this.inputParams.maxCharacterLimit ||
            wordCount > this.inputParams.maxWordLimit;
        // If it's too long, then it can't be too short.
        this.tooShort_ =
            wordCount < this.inputParams.minWordLimit && !this.tooLong_;
        this.invalidInput_ = this.tooLong_ || this.tooShort_;
        return !this.invalidInput_;
    }
}
customElements.define(ComposeTextareaElement.is, ComposeTextareaElement);
