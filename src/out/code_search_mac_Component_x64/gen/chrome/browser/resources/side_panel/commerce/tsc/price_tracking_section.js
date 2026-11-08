// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import { browserProxyFactory as priceTrackingBrowserProxyFactory } from '//resources/cr_components/commerce/price_tracking.mojom-webui.js';
import { PriceInsightsInfo_PriceBucket } from '//resources/cr_components/commerce/shopping_service.mojom-webui.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './price_tracking_section.css.js';
import { getHtml } from './price_tracking_section.html.js';
export class PriceTrackingSectionElement extends CrLitElement {
    static get is() {
        return 'price-tracking-section';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            productInfo: { type: Object },
            isProductTracked: { type: Boolean },
            folderName_: { type: String },
            saveLocationEndText_: { type: String },
            saveLocationStartText_: { type: String },
            showSaveLocationText_: { type: Boolean },
            toggleAnnotationText_: { type: String },
        };
    }
    #productInfo_accessor_storage = {
        title: '',
        clusterTitle: '',
        domain: '',
        imageUrl: '',
        productUrl: '',
        currentPrice: '',
        previousPrice: '',
        clusterId: BigInt(0),
        categoryLabels: [],
        priceSummary: '',
    };
    get productInfo() { return this.#productInfo_accessor_storage; }
    set productInfo(value) { this.#productInfo_accessor_storage = value; }
    #isProductTracked_accessor_storage = false;
    get isProductTracked() { return this.#isProductTracked_accessor_storage; }
    set isProductTracked(value) { this.#isProductTracked_accessor_storage = value; }
    #folderName__accessor_storage = '';
    get folderName_() { return this.#folderName__accessor_storage; }
    set folderName_(value) { this.#folderName__accessor_storage = value; }
    #saveLocationStartText__accessor_storage = '';
    get saveLocationStartText_() { return this.#saveLocationStartText__accessor_storage; }
    set saveLocationStartText_(value) { this.#saveLocationStartText__accessor_storage = value; }
    #saveLocationEndText__accessor_storage = '';
    get saveLocationEndText_() { return this.#saveLocationEndText__accessor_storage; }
    set saveLocationEndText_(value) { this.#saveLocationEndText__accessor_storage = value; }
    #showSaveLocationText__accessor_storage = false;
    get showSaveLocationText_() { return this.#showSaveLocationText__accessor_storage; }
    set showSaveLocationText_(value) { this.#showSaveLocationText__accessor_storage = value; }
    #toggleAnnotationText__accessor_storage = '';
    get toggleAnnotationText_() { return this.#toggleAnnotationText__accessor_storage; }
    set toggleAnnotationText_(value) { this.#toggleAnnotationText__accessor_storage = value; }
    priceInsightsInfo = {
        clusterId: BigInt(0),
        typicalLowPrice: '',
        typicalHighPrice: '',
        catalogAttributes: '',
        jackpot: '',
        bucket: PriceInsightsInfo_PriceBucket.MIN_VALUE,
        hasMultipleCatalogs: false,
        history: [],
        locale: '',
        currencyCode: '',
    };
    listenerIds_ = [];
    priceTrackingProxy_ = priceTrackingBrowserProxyFactory.getInstance();
    connectedCallback() {
        super.connectedCallback();
        const callbackRouter = this.priceTrackingProxy_.callbackRouter;
        this.listenerIds_.push(callbackRouter.priceTrackedForBookmark.addListener((product) => this.onBookmarkPriceTracked(product)), callbackRouter.priceUntrackedForBookmark.addListener((product) => this.onBookmarkPriceUntracked(product)), callbackRouter.operationFailedForBookmark.addListener((product, attemptedTrack) => this.onBookmarkOperationFailed(product, attemptedTrack)), callbackRouter.onProductBookmarkMoved.addListener((product) => this.onProductBookmarkMoved(product)));
        this.updatePriceTrackingSection_(this.isProductTracked);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.listenerIds_.forEach(id => this.priceTrackingProxy_.callbackRouter.removeListener(id));
    }
    async updatePriceTrackingSection_(tracked) {
        if (!tracked) {
            this.folderName_ = '';
            this.toggleAnnotationText_ =
                loadTimeData.getString('trackPriceDescription');
        }
        else {
            this.folderName_ = (await this.priceTrackingProxy_.handler
                .getParentBookmarkFolderNameForCurrentUrl())
                .name;
            this.toggleAnnotationText_ =
                loadTimeData.getString('trackPriceSaveDescription');
        }
        this.updateSaveLocationText(this.folderName_);
        this.isProductTracked = tracked;
    }
    updateSaveLocationText(folderName) {
        if (folderName.length === 0) {
            this.showSaveLocationText_ = false;
            this.saveLocationStartText_ = '';
            this.saveLocationEndText_ = '';
            return;
        }
        const fullText = loadTimeData.getStringF('trackPriceSaveLocation', folderName);
        // TODO(crbug.com/40066115): Find a better way to dynamically add a link to a templated
        //                string and possibly avoid using substring.
        this.saveLocationStartText_ =
            fullText.substring(0, fullText.lastIndexOf(folderName));
        this.saveLocationEndText_ = fullText.substring(fullText.lastIndexOf(folderName) + folderName.length);
        this.showSaveLocationText_ = true;
    }
    onToggleCheckedChanged_(e) {
        this.isProductTracked = e.detail.value;
    }
    onToggleChange_() {
        this.priceTrackingProxy_.handler.setPriceTrackingStatusForCurrentUrl(this.isProductTracked);
        chrome.metricsPrivate.recordEnumerationValue(this.isProductTracked ?
            'Commerce.PriceTracking.PriceInsightsSidePanel.Track' :
            'Commerce.PriceTracking.PriceInsightsSidePanel.Untrack', this.priceInsightsInfo.bucket, PriceInsightsInfo_PriceBucket.MAX_VALUE + 1);
    }
    onBookmarkPriceTracked(product) {
        if (product.info.clusterId !== this.productInfo.clusterId) {
            return;
        }
        this.updatePriceTrackingSection_(true);
    }
    onBookmarkPriceUntracked(product) {
        if (product.info.clusterId !== this.productInfo.clusterId) {
            return;
        }
        this.updatePriceTrackingSection_(false);
    }
    onToggleAnnotationButtonClick_() {
        this.priceTrackingProxy_.handler.showBookmarkEditorForCurrentUrl();
        chrome.metricsPrivate.recordUserAction('Commerce.PriceTracking.' +
            'EditedBookmarkFolderFromPriceInsightsSidePanel');
    }
    onBookmarkOperationFailed(product, attemptedTrack) {
        if (product.info.clusterId !== this.productInfo.clusterId) {
            return;
        }
        this.toggleAnnotationText_ = loadTimeData.getString('trackPriceError');
        this.folderName_ = '';
        this.updateSaveLocationText('');
        this.isProductTracked = !attemptedTrack;
    }
    async onProductBookmarkMoved(product) {
        if (product.info.clusterId === this.productInfo.clusterId &&
            this.isProductTracked) {
            this.folderName_ = (await this.priceTrackingProxy_.handler
                .getParentBookmarkFolderNameForCurrentUrl())
                .name;
        }
    }
}
customElements.define(PriceTrackingSectionElement.is, PriceTrackingSectionElement);
