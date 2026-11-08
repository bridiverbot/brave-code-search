// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './sp_heading.css.js';
import { getHtml } from './sp_heading.html.js';
export class SpHeadingElement extends CrLitElement {
    static get is() {
        return 'sp-heading';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            compact: {
                type: Boolean,
                reflect: true,
            },
            backButtonAriaLabel: { type: String },
            backButtonTitle: { type: String },
            hideBackButton: {
                type: Boolean,
                reflect: true,
            },
            disableBackButton: { type: Boolean },
        };
    }
    #compact_accessor_storage = false;
    get compact() { return this.#compact_accessor_storage; }
    set compact(value) { this.#compact_accessor_storage = value; }
    #backButtonAriaLabel_accessor_storage = '';
    get backButtonAriaLabel() { return this.#backButtonAriaLabel_accessor_storage; }
    set backButtonAriaLabel(value) { this.#backButtonAriaLabel_accessor_storage = value; }
    #backButtonTitle_accessor_storage = '';
    get backButtonTitle() { return this.#backButtonTitle_accessor_storage; }
    set backButtonTitle(value) { this.#backButtonTitle_accessor_storage = value; }
    #hideBackButton_accessor_storage = false;
    get hideBackButton() { return this.#hideBackButton_accessor_storage; }
    set hideBackButton(value) { this.#hideBackButton_accessor_storage = value; }
    #disableBackButton_accessor_storage = false;
    get disableBackButton() { return this.#disableBackButton_accessor_storage; }
    set disableBackButton(value) { this.#disableBackButton_accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('hideBackButton')) {
            this.onHideBackButtonChanged_();
        }
    }
    onHideBackButtonChanged_() {
        if (!this.hideBackButton) {
            assert(this.backButtonAriaLabel);
        }
    }
    onBackButtonClick_() {
        this.dispatchEvent(new CustomEvent('back-button-click'));
    }
    getBackButton() {
        return this.$.backButton;
    }
}
customElements.define(SpHeadingElement.is, SpHeadingElement);
