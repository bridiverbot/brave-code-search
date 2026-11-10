// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { getCss } from './spinner_page.css.js';
import { getHtml } from './spinner_page.html.js';
import { SupportToolPageMixinLit } from './support_tool_page_mixin_lit.js';
const SpinnerPageElementBase = SupportToolPageMixinLit(CrLitElement);
export class SpinnerPageElement extends SpinnerPageElementBase {
    static get is() {
        return 'spinner-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            pageTitle: { type: String },
        };
    }
    #pageTitle_accessor_storage = '';
    get pageTitle() { return this.#pageTitle_accessor_storage; }
    set pageTitle(value) { this.#pageTitle_accessor_storage = value; }
    browserProxy_ = BrowserProxyImpl.getInstance();
    onCancelClick_() {
        this.browserProxy_.cancelDataCollection();
    }
}
customElements.define(SpinnerPageElement.is, SpinnerPageElement);
