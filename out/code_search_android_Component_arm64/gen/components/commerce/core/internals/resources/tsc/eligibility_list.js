// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CommerceInternalsApiProxy } from './commerce_internals_api_proxy.js';
import { getCss } from './eligibility_list.css.js';
import { getHtml } from './eligibility_list.html.js';
export class EligibilityListElement extends CrLitElement {
    static get is() {
        return 'commerce-internals-eligibility-list';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            country_: {
                type: String,
            },
            details_: {
                type: Array,
            },
            locale_: {
                type: String,
            },
        };
    }
    #country__accessor_storage = '';
    get country_() { return this.#country__accessor_storage; }
    set country_(value) { this.#country__accessor_storage = value; }
    #details__accessor_storage = [];
    get details_() { return this.#details__accessor_storage; }
    set details_(value) { this.#details__accessor_storage = value; }
    #locale__accessor_storage = '';
    get locale_() { return this.#locale__accessor_storage; }
    set locale_(value) { this.#locale__accessor_storage = value; }
    commerceInternalsApi_ = CommerceInternalsApiProxy.getInstance();
    constructor() {
        super();
        this.commerceInternalsApi_.getCallbackRouter()
            .onShoppingListEligibilityChanged.addListener(() => {
            this.refreshDetails_();
        });
    }
    connectedCallback() {
        super.connectedCallback();
        this.refreshDetails_();
    }
    onRefreshDetailsClick_() {
        this.refreshDetails_();
    }
    async refreshDetails_() {
        const details = (await this.commerceInternalsApi_.getShoppingEligibilityDetails())
            .details;
        this.country_ = details.country;
        this.locale_ = details.locale;
        this.details_ = details.details;
    }
    getColor_(detail) {
        return detail.value === detail.expectedValue ? 'green' : 'red';
    }
    getMark_(detail) {
        return detail.value === detail.expectedValue ? '✔' : '✖';
    }
}
customElements.define(EligibilityListElement.is, EligibilityListElement);
