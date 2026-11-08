// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
/** Records `durationMs` in the `metricName` histogram. */
export function recordDuration(metricName, durationMs) {
    // In rare cases, chrome.metricsPrivate is not available.
    // TODO(crbug.com/40162029): Remove this check once the bug is fixed.
    if (!chrome.metricsPrivate) {
        return;
    }
    chrome.metricsPrivate.recordValue({
        metricName,
        type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LOG,
        min: 1,
        max: 60000, // 60 seconds.
        buckets: 100,
    }, Math.floor(durationMs));
}
/**
 * Records the duration between navigation start and `msSinceEpoch` in the
 * `metricName` histogram.
 */
export function recordLoadDuration(metricName, msSinceEpoch) {
    recordDuration(metricName, msSinceEpoch - loadTimeData.getValue('navigationStartTime'));
}
/**
 * Records `value` (expected to be between 0 and 10) into the ten-bucket
 * `metricName` histogram.
 */
export function recordPerdecage(metricName, value) {
    // In rare cases, chrome.metricsPrivate is not available.
    // TODO(crbug.com/40162029): Remove this check once the bug is fixed.
    if (!chrome.metricsPrivate) {
        return;
    }
    chrome.metricsPrivate.recordValue({
        metricName,
        type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
        min: 1, // Choose 1 if real min is 0.
        max: 11, // Exclusive.
        buckets: 12, // Numbers 0-10 and unused overflow bucket of 11.
    }, value);
}
/**
 * Records that an event has happened rather than a value in the `metricName`
 * histogram.
 */
export function recordOccurrence(metricName) {
    // In rare cases, chrome.metricsPrivate is not available.
    // TODO(crbug.com/40162029): Remove this check once the bug is fixed.
    if (!chrome.metricsPrivate) {
        return;
    }
    chrome.metricsPrivate.recordValue({
        metricName,
        type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
        min: 1,
        max: 1,
        buckets: 1,
    }, 1);
}
export function recordEnumeration(metricName, value, enumSize) {
    // In rare cases, chrome.metricsPrivate is not available.
    // TODO(crbug.com/40162029): Remove this check once the bug is fixed.
    if (!chrome.metricsPrivate) {
        return;
    }
    chrome.metricsPrivate.recordEnumerationValue(metricName, value, enumSize);
}
export function recordBoolean(metricName, value) {
    // In rare cases, chrome.metricsPrivate is not available.
    // TODO(crbug.com/40162029): Remove this check once the bug is fixed.
    if (!chrome.metricsPrivate) {
        return;
    }
    chrome.metricsPrivate.recordBoolean(metricName, value);
}
export function recordSparseValueWithPersistentHash(metricName, value) {
    // In rare cases, chrome.metricsPrivate is not available.
    // TODO(crbug.com/40162029): Remove this check once the bug is fixed.
    if (!chrome.metricsPrivate) {
        return;
    }
    chrome.metricsPrivate.recordSparseValueWithPersistentHash(metricName, value);
}
export function recordSmallCount(metricName, value) {
    // In rare cases, chrome.metricsPrivate is not available.
    // TODO(crbug.com/40162029): Remove this check once the bug is fixed.
    if (!chrome.metricsPrivate) {
        return;
    }
    chrome.metricsPrivate.recordSmallCount(metricName, value);
}
export function recordLogValue(metricName, min, max, buckets, value) {
    // In rare cases, chrome.metricsPrivate is not available.
    // TODO(crbug.com/40162029): Remove this check once the bug is fixed.
    if (!chrome.metricsPrivate) {
        return;
    }
    chrome.metricsPrivate.recordValue({
        metricName,
        type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LOG,
        min,
        max,
        buckets,
    }, value);
}
export function recordLinearValue(metricName, min, max, buckets, value) {
    // In rare cases, chrome.metricsPrivate is not available.
    // TODO(crbug.com/40162029): Remove this check once the bug is fixed.
    if (!chrome.metricsPrivate) {
        return;
    }
    chrome.metricsPrivate.recordValue({
        metricName,
        type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
        min,
        max,
        buckets,
    }, value);
}
/**
 * Action the user can perform while using voice search. This enum must match
 * the numbering for NewTabPageVoiceAction in enums.xml. These values are
 * persisted to logs. Entries should not be renumbered, removed or reused.
 */
export var VoiceAction;
(function (VoiceAction) {
    VoiceAction[VoiceAction["ACTIVATE"] = 0] = "ACTIVATE";
    VoiceAction[VoiceAction["ACTIVATE_KEYBOARD"] = 1] = "ACTIVATE_KEYBOARD";
    VoiceAction[VoiceAction["CLOSE_OVERLAY"] = 2] = "CLOSE_OVERLAY";
    VoiceAction[VoiceAction["QUERY_SUBMITTED"] = 3] = "QUERY_SUBMITTED";
    VoiceAction[VoiceAction["SUPPORT_LINK_CLICKED"] = 4] = "SUPPORT_LINK_CLICKED";
    VoiceAction[VoiceAction["TRY_AGAIN_LINK"] = 5] = "TRY_AGAIN_LINK";
    VoiceAction[VoiceAction["TRY_AGAIN_MIC_BUTTON"] = 6] = "TRY_AGAIN_MIC_BUTTON";
    VoiceAction[VoiceAction["MAX_VALUE"] = 6] = "MAX_VALUE";
})(VoiceAction || (VoiceAction = {}));
/**
 * Errors than can occur while using voice search. This enum must match the
 * numbering for NewTabPageVoiceError in enums.xml. These values are persisted
 * to logs. Entries should not be renumbered, removed or reused.
 */
export var VoiceError;
(function (VoiceError) {
    VoiceError[VoiceError["ABORTED"] = 0] = "ABORTED";
    VoiceError[VoiceError["AUDIO_CAPTURE"] = 1] = "AUDIO_CAPTURE";
    VoiceError[VoiceError["BAD_GRAMMAR"] = 2] = "BAD_GRAMMAR";
    VoiceError[VoiceError["LANGUAGE_NOT_SUPPORTED"] = 3] = "LANGUAGE_NOT_SUPPORTED";
    VoiceError[VoiceError["NETWORK"] = 4] = "NETWORK";
    VoiceError[VoiceError["NO_MATCH"] = 5] = "NO_MATCH";
    VoiceError[VoiceError["NO_SPEECH"] = 6] = "NO_SPEECH";
    VoiceError[VoiceError["NOT_ALLOWED"] = 7] = "NOT_ALLOWED";
    VoiceError[VoiceError["OTHER"] = 8] = "OTHER";
    VoiceError[VoiceError["SERVICE_NOT_ALLOWED"] = 9] = "SERVICE_NOT_ALLOWED";
    VoiceError[VoiceError["MAX_VALUE"] = 9] = "MAX_VALUE";
})(VoiceError || (VoiceError = {}));
export function recordVoiceAction(action) {
    recordEnumeration('NewTabPage.VoiceActions', action, VoiceAction.MAX_VALUE + 1);
}
