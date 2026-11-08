// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://metrics-internals/app.js';
import { MetricsInternalsBrowserProxyImpl } from 'chrome://metrics-internals/browser_proxy.js';
import { assertEquals } from 'chrome://webui-test/chai_assert.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
function wait() {
    return new Promise(resolve => {
        window.setTimeout(() => {
            resolve();
        }, 1);
    });
}
class FakeBrowser extends TestBrowserProxy {
    cwtKeyInfo = {};
    constructor() {
        super([
            'getUmaLogData',
            'fetchVariationsSummary',
            'fetchStoredSeedInfo',
            'fetchUmaSummary',
            'isUsingMetricsServiceObserver',
            'setTrialEnrollState',
            'fetchTrialState',
            'lookupTrialOrGroupName',
            'fetchEncryptionPublicKey',
            'fetchRuntimeMutableFeatures',
            'isSeedFetchingPaused',
            'setSeedFetchingPaused',
            'uploadSeed',
            'restart',
            'fetchUkmSummary',
            'getUkmLogData',
            'isUsingUkmServiceObserver',
        ]);
    }
    // Note: Each browser proxy method uses `wait()` so that the returned
    // promise isn't immediately resolved. This mirrors the actual browser
    // proxy more accurately.
    async getUmaLogData(includeLogProtoData) {
        this.methodCalled('getUmaLogData', includeLogProtoData);
        await wait();
        return '';
    }
    async fetchVariationsSummary() {
        this.methodCalled('fetchVariationsSummary');
        await wait();
        return [];
    }
    async fetchStoredSeedInfo(seedType) {
        this.methodCalled(`fetchStored${seedType}SeedInfo`);
        await wait();
        return [];
    }
    async fetchUmaSummary() {
        this.methodCalled('fetchUmaSummary');
        await wait();
        return [];
    }
    async isUsingMetricsServiceObserver() {
        this.methodCalled('isUsingMetricsServiceObserver');
        await wait();
        return false;
    }
    async setTrialEnrollState(_trialHash, _groupHash, _forceEnable) {
        this.methodCalled('setTrialEnrollState');
        await wait();
        return false;
    }
    async fetchTrialState() {
        this.methodCalled('fetchTrialState');
        await wait();
        return { trials: [], restartRequired: false };
    }
    async lookupTrialOrGroupName(_name) {
        this.methodCalled('lookupTrialOrGroupName');
        await wait();
        return {};
    }
    async fetchEncryptionPublicKey() {
        this.methodCalled('fetchEncryptionPublicKey');
        await wait();
        return this.cwtKeyInfo;
    }
    async fetchRuntimeMutableFeatures() {
        this.methodCalled('fetchRuntimeMutableFeatures');
        await wait();
        return [];
    }
    // Returns the default unpaused state. This stub does not support pausing
    // and resuming seed fetching.
    async isSeedFetchingPaused() {
        this.methodCalled('isSeedFetchingPaused');
        await wait();
        return false;
    }
    async setSeedFetchingPaused(paused) {
        this.methodCalled('setSeedFetchingPaused', paused);
        await wait();
    }
    async uploadSeed(seed) {
        this.methodCalled('uploadSeed', seed);
        await wait();
    }
    async restart() {
        this.methodCalled('restart');
        await wait();
    }
    async fetchUkmSummary() {
        this.methodCalled('fetchUkmSummary');
        await wait();
        return [];
    }
    async getUkmLogData() {
        this.methodCalled('getUkmLogData');
        await wait();
        return '';
    }
    async isUsingUkmServiceObserver() {
        this.methodCalled('isUsingUkmServiceObserver');
        await wait();
        return false;
    }
}
suite('PrivateMetricsTest', function () {
    let app;
    let fakeBrowser;
    async function waitForUpdate() {
        await new Promise(resolve => {
            app.onUpdateForTesting = () => {
                resolve();
            };
        });
    }
    async function makeApp() {
        app = document.createElement('private-metrics-app');
        document.body.replaceChildren(app);
        await waitForUpdate();
    }
    function getDisplayedSummary() {
        const summary = new Map();
        const table = app.shadowRoot.querySelector('#private-metrics-summary');
        for (const row of table.querySelectorAll('tr')) {
            const key = row.querySelector('td:first-child').textContent.trim();
            const value = row.querySelector('td:last-child').textContent.trim();
            summary.set(key, value);
        }
        return summary;
    }
    setup(() => {
        MetricsInternalsBrowserProxyImpl.setInstance(fakeBrowser = new FakeBrowser());
    });
    teardown(() => {
        MetricsInternalsBrowserProxyImpl.setInstance(new MetricsInternalsBrowserProxyImpl());
    });
    test('page loads and populates initial data', async function () {
        fakeBrowser.cwtKeyInfo = {
            issued_at: '1725555555000',
            expiration_time: '1725666666000',
            algorithm: -7,
            config_properties: 'config_properties_value',
            access_policy: 'access_policy_value',
            signature: 'signature_value',
            key_id: 'key_id_value',
            key_algorithm: -65537,
            key_curve: 9,
            key_ops: [1, 2, 3],
            key_x: 'key_x_value',
            key_d: 'key_d_value',
        };
        await makeApp();
        const summary = getDisplayedSummary();
        assertEquals(new Date(1725555555000)
            .toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'long' }), summary.get('Issued At'));
        assertEquals(new Date(1725666666000)
            .toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'long' }), summary.get('Expiration Time'));
        assertEquals('-7', summary.get('Algorithm'));
        assertEquals('config_properties_value', summary.get('Config Properties'));
        assertEquals('access_policy_value', summary.get('Access Policy'));
        assertEquals('signature_value', summary.get('Signature'));
        assertEquals('key_id_value', summary.get('Key ID'));
        assertEquals('-65537', summary.get('Key Algorithm'));
        assertEquals('9', summary.get('Key Curve'));
        assertEquals('1,2,3', summary.get('Key Ops'));
        assertEquals('key_x_value', summary.get('Key X'));
        assertEquals('key_d_value', summary.get('Key D'));
    });
});
