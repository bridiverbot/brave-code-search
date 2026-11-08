// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { getFaviconForPageURL } from '//resources/js/icon.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './stacked_favicons.css.js';
import { getHtml } from './stacked_favicons.html.js';
export class StackedFaviconsElement extends CrLitElement {
    static get is() {
        return 'stacked-favicons';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            url: { type: String },
            secondaryUrl: { type: String },
            stackVertically: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #url_accessor_storage = '';
    get url() { return this.#url_accessor_storage; }
    set url(value) { this.#url_accessor_storage = value; }
    #secondaryUrl_accessor_storage = '';
    get secondaryUrl() { return this.#secondaryUrl_accessor_storage; }
    set secondaryUrl(value) { this.#secondaryUrl_accessor_storage = value; }
    #stackVertically_accessor_storage = false;
    get stackVertically() { return this.#stackVertically_accessor_storage; }
    set stackVertically(value) { this.#stackVertically_accessor_storage = value; }
    getFavicon_(url) {
        return getFaviconForPageURL(url, false);
    }
}
customElements.define(StackedFaviconsElement.is, StackedFaviconsElement);
