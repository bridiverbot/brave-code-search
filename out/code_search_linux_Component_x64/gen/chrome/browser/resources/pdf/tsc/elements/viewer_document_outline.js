// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './viewer_bookmark.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './viewer_document_outline.css.js';
import { getHtml } from './viewer_document_outline.html.js';
export class ViewerDocumentOutlineElement extends CrLitElement {
    static get is() {
        return 'viewer-document-outline';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            bookmarks: { type: Array },
        };
    }
    #bookmarks_accessor_storage = [];
    get bookmarks() { return this.#bookmarks_accessor_storage; }
    set bookmarks(value) { this.#bookmarks_accessor_storage = value; }
}
customElements.define(ViewerDocumentOutlineElement.is, ViewerDocumentOutlineElement);
