// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import '//resources/cr_elements/cr_toast/cr_toast_manager.js';
import { getToastManager } from '//resources/cr_elements/cr_toast/cr_toast_manager.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './cr_toast_demo.css.js';
import { getHtml } from './cr_toast_demo.html.js';
export class CrToastDemoElement extends CrLitElement {
    static get is() {
        return 'cr-toast-demo';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            message_: { type: String },
            duration_: { type: Number },
            showDismissButton_: { type: Boolean },
        };
    }
    #duration__accessor_storage = 0;
    get duration_() { return this.#duration__accessor_storage; }
    set duration_(value) { this.#duration__accessor_storage = value; }
    #message__accessor_storage = 'Hello, world';
    get message_() { return this.#message__accessor_storage; }
    set message_(value) { this.#message__accessor_storage = value; }
    #showDismissButton__accessor_storage = false;
    get showDismissButton_() { return this.#showDismissButton__accessor_storage; }
    set showDismissButton_(value) { this.#showDismissButton__accessor_storage = value; }
    onHideToastClick_() {
        this.$.toast.hide();
    }
    onShowToastManagerClick_() {
        getToastManager().showForStringPieces([
            { value: '\'', collapsible: false },
            {
                value: 'This is a really really really really long title that should ' +
                    'you an idea of some dynamic text that can be truncated.',
                collapsible: true,
            },
            { value: '\' ', collapsible: false },
            { value: 'is a message.', collapsible: false },
        ]);
    }
    onShowToastClick_() {
        this.$.toast.show();
    }
    onMessageValueChanged_(e) {
        this.message_ = e.detail.value;
    }
    onShowDismissButtonCheckedChanged_(e) {
        this.showDismissButton_ = e.detail.value;
    }
    onDurationValueChanged_(e) {
        this.duration_ = e.detail.value;
    }
}
export const tagName = CrToastDemoElement.is;
customElements.define(CrToastDemoElement.is, CrToastDemoElement);
