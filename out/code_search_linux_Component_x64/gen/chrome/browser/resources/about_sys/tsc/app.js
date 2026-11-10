// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/shared/key_value_pair_viewer/key_value_pair_viewer.js';
import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { BrowserProxyImpl } from './browser_proxy.js';
export class AppElement extends CrLitElement {
    static get is() {
        return 'system-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            entries_: { type: Array },
            loading_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #entries__accessor_storage = [];
    get entries_() { return this.#entries__accessor_storage; }
    set entries_(value) { this.#entries__accessor_storage = value; }
    #loading__accessor_storage = false;
    get loading_() { return this.#loading__accessor_storage; }
    set loading_(value) { this.#loading__accessor_storage = value; }
    async connectedCallback() {
        super.connectedCallback();
        this.loading_ = true;
        const logs = await BrowserProxyImpl.getInstance().requestSystemInfo();
        this.entries_ = logs.map((log) => {
            return {
                key: log.statName,
                value: log.statValue,
            };
        });
        this.loading_ = false;
        // Dispatch event used by tests.
        this.dispatchEvent(new CustomEvent('ready-for-testing'));
    }
}
customElements.define(AppElement.is, AppElement);
