// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
// clang-format on
export class TestPrivacyPageBrowserProxy extends TestBrowserProxy {
    metricsReporting;
    constructor() {
        super([
            'getMetricsReporting',
            'setMetricsReportingEnabled',
        ]);
        this.metricsReporting = {
            enabled: true,
            managed: true,
        };
    }
    getMetricsReporting() {
        this.methodCalled('getMetricsReporting');
        return Promise.resolve(this.metricsReporting);
    }
    setMetricsReportingEnabled(enabled) {
        this.methodCalled('setMetricsReportingEnabled', enabled);
    }
}
