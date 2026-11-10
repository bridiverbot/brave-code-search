// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_auto_img/cr_auto_img.js';
import { PageImageServiceBrowserProxy } from '//resources/cr_components/page_image_service/browser_proxy.js';
import { ClientId as PageImageServiceClientId } from '//resources/cr_components/page_image_service/page_image_service.mojom-webui.js';
import { getFaviconForPageURL } from '//resources/js/icon.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './page_favicon.css.js';
import { getHtml } from './page_favicon.html.js';
/**
 * @fileoverview This file provides a custom element displaying a page favicon.
 */
/**
 * TODO(tommycli): This element should be renamed to reflect the reality that
 * it's used to both render the visit's "important image" if it exists, and
 * falls back to the favicon if it doesn't exist.
 */
export class PageFaviconElement extends CrLitElement {
    static get is() {
        return 'page-favicon';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /**
             * Whether the cluster is in the side panel.
             */
            inSidePanel_: {
                type: Boolean,
                reflect: true,
            },
            /**
             * The URL for which the favicon is shown.
             */
            url: { type: String },
            /**
             * Whether this visit is known to sync already. Used for the purpose of
             * fetching higher quality favicons in that case.
             */
            isKnownToSync: { type: Boolean },
            /**
             * The URL of the representative image for the page. Not every page has
             * this defined, in which case we fallback to the favicon.
             * Mojo Url type is type mapped to a TS string.
             */
            imageUrl_: { type: String },
            isImageCover_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #isKnownToSync_accessor_storage = false;
    //============================================================================
    // Properties
    //============================================================================
    get isKnownToSync() { return this.#isKnownToSync_accessor_storage; }
    set isKnownToSync(value) { this.#isKnownToSync_accessor_storage = value; }
    #url_accessor_storage = null;
    get url() { return this.#url_accessor_storage; }
    set url(value) { this.#url_accessor_storage = value; }
    #imageUrl__accessor_storage = null;
    get imageUrl_() { return this.#imageUrl__accessor_storage; }
    set imageUrl_(value) { this.#imageUrl__accessor_storage = value; }
    #inSidePanel__accessor_storage = loadTimeData.getBoolean('inSidePanel');
    get inSidePanel_() { return this.#inSidePanel__accessor_storage; }
    set inSidePanel_(value) { this.#inSidePanel__accessor_storage = value; }
    #isImageCover__accessor_storage = loadTimeData.getBoolean('isHistoryClustersImageCover');
    get isImageCover_() { return this.#isImageCover__accessor_storage; }
    set isImageCover_(value) { this.#isImageCover__accessor_storage = value; }
    //============================================================================
    // Helper methods
    //============================================================================
    getImageUrlForTesting() {
        return this.imageUrl_;
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('url') ||
            changedProperties.has('imageUrl_')) {
            if (this.imageUrl_ || !this.url) {
                // Pages with a pre-set image URL or no favicon URL don't show the
                // favicon.
                this.style.setProperty('background-image', '');
            }
            else {
                this.style.setProperty('background-image', getFaviconForPageURL(this.url, this.isKnownToSync, '', 
                /* --favicon-size */ 16));
            }
        }
        if (changedProperties.has('url') ||
            changedProperties.has('isKnownToSync')) {
            this.urlAndIsKnownToSyncChanged_();
        }
    }
    async urlAndIsKnownToSyncChanged_() {
        if (!this.url || !this.isKnownToSync ||
            !loadTimeData.getBoolean('isHistoryClustersImagesEnabled')) {
            this.imageUrl_ = null;
            return;
        }
        // Fetch the representative image for this page, if possible.
        const { result } = await PageImageServiceBrowserProxy.getInstance()
            .handler.getPageImageUrl(PageImageServiceClientId.Journeys, this.url, { suggestImages: true, optimizationGuideImages: true });
        if (result) {
            this.imageUrl_ = result.imageUrl;
        }
        else {
            // We must reset imageUrl_ to null, because sometimes the Virtual DOM will
            // reuse the same element for the infinite scrolling list.
            this.imageUrl_ = null;
        }
    }
}
customElements.define(PageFaviconElement.is, PageFaviconElement);
