// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PriceInsightsInfo_PriceBucket } from 'chrome://resources/cr_components/commerce/shopping_service.mojom-webui.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestPageHandler extends TestBrowserProxy {
    product_ = {
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
    priceInsights_ = {
        clusterId: BigInt(0),
        typicalLowPrice: '',
        typicalHighPrice: '',
        catalogAttributes: '',
        jackpot: '',
        bucket: PriceInsightsInfo_PriceBucket.kUnknown,
        hasMultipleCatalogs: false,
        history: [],
        locale: '',
        currencyCode: '',
    };
    constructor() {
        super([
            'getProductInfoForCurrentUrl',
            'getPriceInsightsInfoForCurrentUrl',
            'getUrlInfosForProductTabs',
            'getUrlInfosForRecentlyViewedTabs',
            'openUrlInNewTab',
            'switchToOrOpenTab',
            'isShoppingListEligible',
            'getPriceTrackingStatusForCurrentUrl',
            'getPriceInsightsInfoForUrl',
            'getProductInfoForUrl',
            'getProductInfoForUrls',
        ]);
    }
    getPriceInsightsInfoForUrl(url) {
        this.methodCalled('getPriceInsightsInfoForUrl', url);
        return Promise.resolve({ url, priceInsightsInfo: this.priceInsights_ });
    }
    getProductInfoForUrl(url) {
        this.methodCalled('getProductInfoForUrl', url);
        return Promise.resolve({ url, productInfo: this.product_ });
    }
    getProductInfoForUrls(urls) {
        this.methodCalled('getProductInfoForUrls', urls);
        return Promise.resolve({ productInfos: [this.product_] });
    }
    getProductInfoForCurrentUrl() {
        this.methodCalled('getProductInfoForCurrentUrl');
        return Promise.resolve({ productInfo: this.product_ });
    }
    getPriceInsightsInfoForCurrentUrl() {
        this.methodCalled('getPriceInsightsInfoForCurrentUrl');
        return Promise.resolve({ priceInsightsInfo: this.priceInsights_ });
    }
    getUrlInfosForProductTabs() {
        this.methodCalled('getUrlInfosForProductTabs');
        return Promise.resolve({ urlInfos: [] });
    }
    getUrlInfosForRecentlyViewedTabs() {
        this.methodCalled('getUrlInfosForRecentlyViewedTabs');
        return Promise.resolve({ urlInfos: [] });
    }
    openUrlInNewTab(url) {
        this.methodCalled('openUrlInNewTab', url);
    }
    switchToOrOpenTab(url) {
        this.methodCalled('switchToOrOpenTab', url);
    }
    isShoppingListEligible() {
        this.methodCalled('isShoppingListEligible');
        return Promise.resolve({ eligible: false });
    }
    getPriceTrackingStatusForCurrentUrl() {
        this.methodCalled('getPriceTrackingStatusForCurrentUrl');
        return Promise.resolve({ tracked: false });
    }
}
