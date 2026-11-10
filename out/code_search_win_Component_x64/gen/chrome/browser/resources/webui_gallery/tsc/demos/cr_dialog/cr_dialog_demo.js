// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import '../demo.css.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './cr_dialog_demo.css.js';
import { getHtml } from './cr_dialog_demo.html.js';
export class CrDialogDemoElement extends CrLitElement {
    static get is() {
        return 'cr-dialog-demo';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            autofocusInput_: { type: Boolean },
            isDialogOpen_: { type: Boolean },
            noCancel_: { type: Boolean },
            showHeader_: { type: Boolean },
            showFooter_: { type: Boolean },
            showInputs_: { type: Boolean },
            showScrollingBody_: { type: Boolean },
            statusTexts_: { type: Array },
        };
    }
    #autofocusInput__accessor_storage = false;
    get autofocusInput_() { return this.#autofocusInput__accessor_storage; }
    set autofocusInput_(value) { this.#autofocusInput__accessor_storage = value; }
    #isDialogOpen__accessor_storage = false;
    get isDialogOpen_() { return this.#isDialogOpen__accessor_storage; }
    set isDialogOpen_(value) { this.#isDialogOpen__accessor_storage = value; }
    #noCancel__accessor_storage = false;
    get noCancel_() { return this.#noCancel__accessor_storage; }
    set noCancel_(value) { this.#noCancel__accessor_storage = value; }
    #showHeader__accessor_storage = false;
    get showHeader_() { return this.#showHeader__accessor_storage; }
    set showHeader_(value) { this.#showHeader__accessor_storage = value; }
    #showFooter__accessor_storage = false;
    get showFooter_() { return this.#showFooter__accessor_storage; }
    set showFooter_(value) { this.#showFooter__accessor_storage = value; }
    #showInputs__accessor_storage = false;
    get showInputs_() { return this.#showInputs__accessor_storage; }
    set showInputs_(value) { this.#showInputs__accessor_storage = value; }
    #showScrollingBody__accessor_storage = false;
    get showScrollingBody_() { return this.#showScrollingBody__accessor_storage; }
    set showScrollingBody_(value) { this.#showScrollingBody__accessor_storage = value; }
    #statusTexts__accessor_storage = [];
    get statusTexts_() { return this.#statusTexts__accessor_storage; }
    set statusTexts_(value) { this.#statusTexts__accessor_storage = value; }
    getDialog_() {
        return this.shadowRoot.querySelector('cr-dialog');
    }
    onOpenDialogClick_() {
        this.isDialogOpen_ = true;
    }
    onCancelClick_() {
        const dialog = this.getDialog_();
        if (dialog) {
            dialog.cancel();
        }
    }
    onConfirmClick_() {
        const dialog = this.getDialog_();
        if (dialog) {
            dialog.close();
        }
    }
    onDialogCrDialogOpen_() {
        this.statusTexts_ =
            ['Dialog was opened and fired a `cr-dialog-open` event.'];
    }
    onDialogCancel_() {
        this.statusTexts_.push('Dialog was canceled and fired a `cancel` event.');
        this.requestUpdate();
    }
    onDialogClose_() {
        this.isDialogOpen_ = false;
        this.statusTexts_.push('Dialog was closed and fired a `close` event.');
    }
    onShowHeaderCheckedChanged_(e) {
        this.showHeader_ = e.detail.value;
    }
    onShowFooterCheckedChanged_(e) {
        this.showFooter_ = e.detail.value;
    }
    onShowScrollingBodyCheckedChanged_(e) {
        this.showScrollingBody_ = e.detail.value;
    }
    onShowInputsCheckedChanged_(e) {
        this.showInputs_ = e.detail.value;
    }
    onAutofocusInputCheckedChanged_(e) {
        this.autofocusInput_ = e.detail.value;
    }
    onNoCancelCheckedChanged_(e) {
        this.noCancel_ = e.detail.value;
    }
}
export const tagName = CrDialogDemoElement.is;
customElements.define(CrDialogDemoElement.is, CrDialogDemoElement);
