/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { BraveAccountRowBrowserProxyImpl, } from './brave_account_row_browser_proxy.js';
import { getHtml } from './brave_account_row.html.js';
export class BraveAccountRowElement extends CrLitElement {
    static get is() {
        return 'brave-account-row';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            browserProxy: { type: Object },
            state: { type: Object },
        };
    }
    #browserProxy_accessor_storage;
    get browserProxy() { return this.#browserProxy_accessor_storage; }
    set browserProxy(value) { this.#browserProxy_accessor_storage = value; }
    #state_accessor_storage = undefined;
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    accountStateListenerId = null;
    connectedCallback() {
        super.connectedCallback();
        this.browserProxy = new BraveAccountRowBrowserProxyImpl();
        this.accountStateListenerId =
            this.browserProxy.authenticationObserverCallbackRouter.onAccountStateChanged.addListener((state) => {
                this.state = state;
            });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.accountStateListenerId);
        this.browserProxy.authenticationObserverCallbackRouter.removeListener(this.accountStateListenerId);
        this.browserProxy.authenticationObserverCallbackRouter.$.close();
    }
}
customElements.define(BraveAccountRowElement.is, BraveAccountRowElement);
