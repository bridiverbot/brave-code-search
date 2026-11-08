// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/strings.m.js';
import { PriceInsightsInfo_PriceBucket } from '//resources/cr_components/commerce/shopping_service.mojom-webui.js';
import { ShoppingServiceBrowserProxyImpl } from '//resources/cr_components/commerce/shopping_service_browser_proxy.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './catalog_attributes_row.css.js';
import { getHtml } from './catalog_attributes_row.html.js';
export class CatalogAttributesRowElement extends CrLitElement {
    static get is() {
        return 'catalog-attributes-row';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            priceInsightsInfo: { type: Object },
        };
    }
    #priceInsightsInfo_accessor_storage = {
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
    get priceInsightsInfo() { return this.#priceInsightsInfo_accessor_storage; }
    set priceInsightsInfo(value) { this.#priceInsightsInfo_accessor_storage = value; }
    shoppingApi_ = ShoppingServiceBrowserProxyImpl.getInstance();
    onJackpotClick_() {
        this.shoppingApi_.handler.openUrlInNewTab(this.priceInsightsInfo.jackpot);
        chrome.metricsPrivate.recordEnumerationValue('Commerce.PriceInsights.BuyingOptionsClicked', this.priceInsightsInfo.bucket, PriceInsightsInfo_PriceBucket.MAX_VALUE + 1);
    }
}
customElements.define(CatalogAttributesRowElement.is, CatalogAttributesRowElement);
