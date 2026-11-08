// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getHtml } from './viewer_signature_dialog.html.js';
export class ViewerSignatureDialogElement extends CrLitElement {
    static get is() {
        return 'viewer-signature-dialog';
    }
    render() {
        return getHtml.bind(this)();
    }
    onCloseClick_() {
        this.$.dialog.cancel();
    }
}
customElements.define(ViewerSignatureDialogElement.is, ViewerSignatureDialogElement);
