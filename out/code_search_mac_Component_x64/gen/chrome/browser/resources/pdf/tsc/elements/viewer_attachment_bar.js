// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './viewer_attachment.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './viewer_attachment_bar.css.js';
import { getHtml } from './viewer_attachment_bar.html.js';
export class ViewerAttachmentBarElement extends CrLitElement {
    static get is() {
        return 'viewer-attachment-bar';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            attachments: { type: Array },
        };
    }
    #attachments_accessor_storage = [];
    get attachments() { return this.#attachments_accessor_storage; }
    set attachments(value) { this.#attachments_accessor_storage = value; }
    /* Indicates whether any oversized attachments exist */
    exceedSizeLimit_() {
        return this.attachments.some(attachment => attachment.size === -1);
    }
}
customElements.define(ViewerAttachmentBarElement.is, ViewerAttachmentBarElement);
