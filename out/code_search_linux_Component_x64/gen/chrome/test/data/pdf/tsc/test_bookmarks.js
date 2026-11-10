// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrLitElement, html } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export class TestBookmarksElement extends CrLitElement {
    static get is() {
        return 'test-bookmarks';
    }
    render() {
        return this.bookmarks.map(item => {
            return html `
        <viewer-bookmark .bookmark="${item}" depth="0">
        </viewer-bookmark>`;
        });
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
customElements.define(TestBookmarksElement.is, TestBookmarksElement);
