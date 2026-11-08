// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** Tracks metrics calls to verify metric logging in tests. */
export class MetricsTracker {
    histogramMap_ = new Map();
    count(metricName, value) {
        return this.get_(metricName)
            .filter(v => value === undefined || v === value)
            .length;
    }
    record(metricName, value) {
        this.get_(metricName).push(value);
    }
    get_(metricName) {
        if (!this.histogramMap_.has(metricName)) {
            this.histogramMap_.set(metricName, []);
        }
        return this.histogramMap_.get(metricName);
    }
}
/**
 * Installs interceptors to metrics logging calls and forwards them to the
 * returned |MetricsTracker| object.
 * @return {!MetricsTracker}
 */
export function fakeMetricsPrivate() {
    const metrics = new MetricsTracker();
    const metricsPrivate = chrome.metricsPrivate || (chrome.metricsPrivate = {});
    metricsPrivate.recordUserAction = (m) => metrics.record(m, 0);
    metricsPrivate.recordSparseValueWithHashMetricName = (m, v) => metrics.record(m, v);
    metricsPrivate.recordSparseValueWithPersistentHash = (m, v) => metrics.record(m, v);
    metricsPrivate.recordBoolean = (m, v) => metrics.record(m, v);
    metricsPrivate.recordValue = (m, v) => metrics.record(m.metricName, v);
    metricsPrivate.recordEnumerationValue = (m, v) => metrics.record(m, v);
    metricsPrivate.recordSmallCount = (m, v) => metrics.record(m, v);
    metricsPrivate.recordMediumCount = (m, v) => metrics.record(m, v);
    metricsPrivate.recordTime = (m, v) => metrics.record(m, v);
    // Mirror for chrome.histograms callers.
    const histograms = chrome.histograms || (chrome.histograms = {});
    histograms.recordUserAction = (m) => metrics.record(m, 0);
    histograms.recordBoolean = (m, v) => metrics.record(m, v);
    histograms.recordPercentage = (m, v) => metrics.record(m, v);
    histograms.recordSmallCount = (m, v) => metrics.record(m, v);
    histograms.recordMediumCount = (m, v) => metrics.record(m, v);
    histograms.recordCount = (m, v) => metrics.record(m, v);
    histograms.recordTime = (m, v) => metrics.record(m, v);
    histograms.recordMediumTime = (m, v) => metrics.record(m, v);
    histograms.recordLongTime = (m, v) => metrics.record(m, v);
    histograms.recordValue = (metric, v) => metrics.record(metric.metricName, v);
    histograms.recordEnumerationValue = (m, v) => metrics.record(m, v);
    histograms.recordSparseValue = (m, v) => metrics.record(m, v);
    return metrics;
}
