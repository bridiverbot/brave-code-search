// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class MetricsBrowserProxy {
    recordEnumerationValue(metricName, value, enumSize) {
        chrome.metricsPrivate.recordEnumerationValue(metricName, value, enumSize);
    }
    static getInstance() {
        return instance || (instance = new MetricsBrowserProxy());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
