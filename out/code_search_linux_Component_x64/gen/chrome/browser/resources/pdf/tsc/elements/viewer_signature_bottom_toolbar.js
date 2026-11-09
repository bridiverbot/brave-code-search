// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './viewer_signature_bottom_toolbar.css.js';
import { getHtml } from './viewer_signature_bottom_toolbar.html.js';
export class ViewerSignatureBottomToolbarElement extends CrLitElement {
    static get is() {
        return 'viewer-signature-bottom-toolbar';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
}
customElements.define(ViewerSignatureBottomToolbarElement.is, ViewerSignatureBottomToolbarElement);
