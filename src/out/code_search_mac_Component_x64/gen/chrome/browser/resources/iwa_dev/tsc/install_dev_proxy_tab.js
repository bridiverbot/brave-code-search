// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_input/cr_input.js';
import { getHtml } from './install_dev_proxy_tab.html.js';
import { IwaDevInstallTabElement } from './install_tab.js';
export const PLACEHOLDER_URL = 'http://localhost:5173';
export class IwaDevInstallDevProxyTabElement extends IwaDevInstallTabElement {
    static get is() {
        return 'iwa-dev-install-dev-proxy-tab';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            disabled: { type: Boolean },
            url_: { type: String, state: true },
            urlError_: { type: String, state: true },
        };
    }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #url__accessor_storage = '';
    get url_() { return this.#url__accessor_storage; }
    set url_(value) { this.#url__accessor_storage = value; }
    #urlError__accessor_storage = '';
    get urlError_() { return this.#urlError__accessor_storage; }
    set urlError_(value) { this.#urlError__accessor_storage = value; }
    isValid() {
        return !!this.url_;
    }
    submit() {
        this.urlError_ = '';
        if (!this.url_) {
            return;
        }
        if (!this.isValidUrl_(this.url_)) {
            this.urlError_ = 'Please enter a valid URL.';
            return;
        }
        this.fire('request-install-from-dev-proxy', { url: this.url_ });
    }
    onUrlValueChanged_(e) {
        this.url_ = e.detail.value;
        this.urlError_ = '';
        this.notifyValidChanged();
    }
    onInputKeydown_(e) {
        if (e.key === 'Tab' && !this.url_) {
            e.preventDefault();
            this.url_ = PLACEHOLDER_URL;
            this.notifyValidChanged();
            return;
        }
        if (e.key === 'Enter' && this.isValid()) {
            this.submit();
        }
    }
    isValidUrl_(url) {
        try {
            new URL(url);
            return true;
        }
        catch {
            return false;
        }
    }
}
customElements.define(IwaDevInstallDevProxyTabElement.is, IwaDevInstallDevProxyTabElement);
