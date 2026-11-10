// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_auto_img/cr_auto_img.js';
import { getFaviconForPageURL } from '//resources/js/icon.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './page_favicon.css.js';
/**
 * @fileoverview This file provides a custom element displaying a page favicon.
 */
class PageFaviconElement extends CrLitElement {
    static get is() {
        return 'page-favicon';
    }
    static get styles() {
        return getCss();
    }
    static get properties() {
        return {
            /* The URL for which the favicon is shown. */
            url: { type: String },
            /**
             * Whether the favicon should use fallback to host. Used for the purpose
             * of fetching fallback favicons when there is no local exact match.
             */
            fallbackToHost: { type: Boolean },
            /**
             * Whether this visit is known to sync already. Used for the purpose of
             * fetching higher quality favicons in that case.
             */
            isKnownToSync: { type: Boolean },
            size: { type: Number },
        };
    }
    #url_accessor_storage;
    //============================================================================
    // Properties
    //============================================================================
    get url() { return this.#url_accessor_storage; }
    set url(value) { this.#url_accessor_storage = value; }
    #fallbackToHost_accessor_storage = true;
    get fallbackToHost() { return this.#fallbackToHost_accessor_storage; }
    set fallbackToHost(value) { this.#fallbackToHost_accessor_storage = value; }
    #isKnownToSync_accessor_storage = false;
    get isKnownToSync() { return this.#isKnownToSync_accessor_storage; }
    set isKnownToSync(value) { this.#isKnownToSync_accessor_storage = value; }
    #size_accessor_storage = 16;
    get size() { return this.#size_accessor_storage; }
    set size(value) { this.#size_accessor_storage = value; }
    //============================================================================
    // Helper methods
    //============================================================================
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('url')) {
            if (!this.url) {
                // Pages with a pre-set image URL or no favicon URL don't show the
                // favicon.
                this.style.setProperty('background-image', '');
            }
            else {
                this.style.setProperty('background-image', getFaviconForPageURL(this.url, this.isKnownToSync, '', 
                /* --favicon-size */ this.size, 
                /* forceLightMode */ false, 
                /* fallbackToHost */ this.fallbackToHost));
            }
        }
    }
}
customElements.define(PageFaviconElement.is, PageFaviconElement);
