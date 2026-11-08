// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { getHtml } from './install_local_bundle_tab.html.js';
import { IwaDevInstallTabElement } from './install_tab.js';
export class IwaDevInstallLocalBundleTabElement extends IwaDevInstallTabElement {
    static get is() {
        return 'iwa-dev-install-local-bundle-tab';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            disabled: { type: Boolean },
        };
    }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.notifyValidChanged();
    }
    isValid() {
        return true;
    }
    submit() {
        this.fire('request-install-from-local-bundle');
    }
}
customElements.define(IwaDevInstallLocalBundleTabElement.is, IwaDevInstallLocalBundleTabElement);
