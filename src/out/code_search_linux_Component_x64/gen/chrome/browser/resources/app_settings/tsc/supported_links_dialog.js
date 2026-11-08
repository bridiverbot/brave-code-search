// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './supported_links_dialog.css.js';
import { getHtml } from './supported_links_dialog.html.js';
import { createDummyApp } from './web_app_settings_utils.js';
export class SupportedLinksDialogElement extends CrLitElement {
    static get is() {
        return 'app-management-supported-links-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            app: { type: Object },
        };
    }
    #app_accessor_storage = createDummyApp();
    get app() { return this.#app_accessor_storage; }
    set app(value) { this.#app_accessor_storage = value; }
    firstUpdated() {
        this.addEventListener('keydown', e => this.trapDialogFocus_(e));
    }
    // The close button is the only tabbable element in the dialog, so focus
    // should stay on it.
    trapDialogFocus_(e) {
        if (e.key === 'Tab') {
            e.preventDefault();
            const dialogElement = this.shadowRoot?.getElementById('dialog');
            const buttonElement = dialogElement?.shadowRoot?.querySelector('#close');
            if (buttonElement) {
                buttonElement.focus();
            }
        }
    }
}
customElements.define(SupportedLinksDialogElement.is, SupportedLinksDialogElement);
