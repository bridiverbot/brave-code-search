// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './loading_page.css.js';
import { getHtml } from './loading_page.html.js';
export class LoadingPageElement extends CrLitElement {
    static get is() {
        return 'loading-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            dialog: { type: Boolean },
            editor: { type: Boolean },
        };
    }
    #dialog_accessor_storage = false;
    get dialog() { return this.#dialog_accessor_storage; }
    set dialog(value) { this.#dialog_accessor_storage = value; }
    #editor_accessor_storage = false;
    get editor() { return this.#editor_accessor_storage; }
    set editor(value) { this.#editor_accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        if (!this.dialog && window.location.pathname === '/editor') {
            this.editor = true;
        }
    }
}
customElements.define(LoadingPageElement.is, LoadingPageElement);
