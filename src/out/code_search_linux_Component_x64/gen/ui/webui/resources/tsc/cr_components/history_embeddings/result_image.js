// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_auto_img/cr_auto_img.js';
import { PageImageServiceBrowserProxy } from '//resources/cr_components/page_image_service/browser_proxy.js';
import { ClientId as PageImageServiceClientId } from '//resources/cr_components/page_image_service/page_image_service.mojom-webui.js';
import { assert } from '//resources/js/assert.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './result_image.css.js';
import { getHtml } from './result_image.html.js';
export class HistoryEmbeddingsResultImageElement extends CrLitElement {
    static get is() {
        return 'cr-history-embeddings-result-image';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            hasImage: { type: Boolean, reflect: true },
            imageUrl_: { type: String },
            inSidePanel: { type: Boolean, reflect: true },
            searchResult: { type: Object },
        };
    }
    #hasImage_accessor_storage = false;
    get hasImage() { return this.#hasImage_accessor_storage; }
    set hasImage(value) { this.#hasImage_accessor_storage = value; }
    #imageUrl__accessor_storage = null;
    get imageUrl_() { return this.#imageUrl__accessor_storage; }
    set imageUrl_(value) { this.#imageUrl__accessor_storage = value; }
    #inSidePanel_accessor_storage = false;
    get inSidePanel() { return this.#inSidePanel_accessor_storage; }
    set inSidePanel(value) { this.#inSidePanel_accessor_storage = value; }
    #searchResult_accessor_storage = null;
    get searchResult() { return this.#searchResult_accessor_storage; }
    set searchResult(value) { this.#searchResult_accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (!loadTimeData.getBoolean('enableHistoryEmbeddingsImages')) {
            return;
        }
        if (changedProperties.has('searchResult')) {
            // Reset image state while it is being fetched.
            this.imageUrl_ = null;
            this.hasImage = false;
            if (this.searchResult?.isUrlKnownToSync) {
                this.fetchImageForSearchResult_();
            }
        }
    }
    async fetchImageForSearchResult_() {
        assert(this.searchResult);
        const searchResultUrl = this.searchResult.url;
        const { result } = await PageImageServiceBrowserProxy.getInstance()
            .handler.getPageImageUrl(PageImageServiceClientId.HistoryEmbeddings, searchResultUrl, { suggestImages: true, optimizationGuideImages: true });
        if (result && searchResultUrl === this.searchResult.url) {
            this.imageUrl_ = result.imageUrl;
            this.hasImage = true;
        }
    }
}
customElements.define(HistoryEmbeddingsResultImageElement.is, HistoryEmbeddingsResultImageElement);
