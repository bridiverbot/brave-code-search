// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './iframe.css.js';
import { getHtml } from './iframe.html.js';
import { strictQuery } from './utils.js';
import { WindowProxy } from './window_proxy.js';
/**
 * @fileoverview Wrapper around <iframe> element that lets us mock out loading
 * and postMessaging in tests.
 */
export class IframeElement extends CrLitElement {
    static get is() {
        return 'ntp-iframe';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            allow: {
                reflect: true,
                type: String,
            },
            src: {
                reflect: true,
                type: String,
            },
        };
    }
    #allow_accessor_storage = '';
    get allow() { return this.#allow_accessor_storage; }
    set allow(value) { this.#allow_accessor_storage = value; }
    #src_accessor_storage = '';
    get src() { return this.#src_accessor_storage; }
    set src(value) { this.#src_accessor_storage = value; }
    // Sends message to iframe.
    postMessage(message) {
        assert(this.shadowRoot);
        WindowProxy.getInstance().postMessage(strictQuery(this.shadowRoot, '#iframe', HTMLIFrameElement), message, new URL(this.src).origin);
    }
    getSrc_() {
        return WindowProxy.getInstance().createIframeSrc(this.src);
    }
}
customElements.define(IframeElement.is, IframeElement);
