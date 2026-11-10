// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { addWebUiListener } from 'chrome://resources/js/cr.js';
import { CustomElement } from 'chrome://resources/js/custom_element.js';
import { MetricsInternalsBrowserProxyImpl } from './browser_proxy.js';
import { getTemplate } from './private_metrics.html.js';
export class PrivateMetricsAppElement extends CustomElement {
    static get is() {
        return 'private-metrics-app';
    }
    static get template() {
        return getTemplate();
    }
    browserProxy_ = MetricsInternalsBrowserProxyImpl.getInstance();
    onUpdateForTesting = () => { };
    constructor() {
        super();
        this.init_();
    }
    init_() {
        this.onEncryptionPublicKeyChanged_({});
        // Handles changes to the encryption public key and updates the table.
        addWebUiListener('encryption-public-key-changed', (publicKeyInfo) => this.onEncryptionPublicKeyChanged_(publicKeyInfo));
        // Fetches the existing encryption public key.
        this.browserProxy_.fetchEncryptionPublicKey().then((publicKeyInfo) => {
            this.onEncryptionPublicKeyChanged_(publicKeyInfo);
            this.onUpdateForTesting();
        });
    }
    onEncryptionPublicKeyChanged_(publicKeyInfo) {
        const tbody = this.shadowRoot.querySelector('#private-metrics-summary');
        tbody.replaceChildren();
        const addRow = (key, value, isTime = false) => {
            const tr = document.createElement('tr');
            const keyTd = document.createElement('td');
            keyTd.textContent = key;
            const valueTd = document.createElement('td');
            if (value === undefined) {
                valueTd.textContent = 'N/A';
            }
            else if (isTime) {
                valueTd.textContent = new Date(parseInt(value, 10))
                    .toLocaleString(undefined, {
                    dateStyle: 'long',
                    timeStyle: 'long',
                });
            }
            else {
                valueTd.textContent = String(value);
            }
            tr.appendChild(keyTd);
            tr.appendChild(valueTd);
            tbody.appendChild(tr);
        };
        addRow('Issued At', publicKeyInfo.issued_at, true);
        addRow('Expiration Time', publicKeyInfo.expiration_time, true);
        addRow('Algorithm', publicKeyInfo.algorithm);
        addRow('Config Properties', publicKeyInfo.config_properties);
        addRow('Access Policy', publicKeyInfo.access_policy);
        addRow('Signature', publicKeyInfo.signature);
        addRow('Key ID', publicKeyInfo.key_id);
        addRow('Key Algorithm', publicKeyInfo.key_algorithm);
        addRow('Key Curve', publicKeyInfo.key_curve);
        addRow('Key Ops', publicKeyInfo.key_ops);
        addRow('Key X', publicKeyInfo.key_x);
        addRow('Key D', publicKeyInfo.key_d);
    }
}
customElements.define(PrivateMetricsAppElement.is, PrivateMetricsAppElement);
