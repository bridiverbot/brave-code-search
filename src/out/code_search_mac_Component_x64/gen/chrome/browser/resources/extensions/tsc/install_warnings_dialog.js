// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './install_warnings_dialog.css.js';
import { getHtml } from './install_warnings_dialog.html.js';
class ExtensionsInstallWarningsDialogElement extends CrLitElement {
    static get is() {
        return 'extensions-install-warnings-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            installWarnings: { type: Array },
        };
    }
    #installWarnings_accessor_storage = [];
    get installWarnings() { return this.#installWarnings_accessor_storage; }
    set installWarnings(value) { this.#installWarnings_accessor_storage = value; }
    onOkClick_() {
        this.$.dialog.close();
    }
}
customElements.define(ExtensionsInstallWarningsDialogElement.is, ExtensionsInstallWarningsDialogElement);
