// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export function recordBoolean(metricName, value) {
    const metricsService = chrome.histograms || chrome.metricsPrivate;
    if (metricsService) {
        metricsService.recordBoolean(metricName, value);
    }
}
export function recordAction(actionName) {
    const metricsService = chrome.histograms || chrome.metricsPrivate;
    if (metricsService) {
        metricsService.recordUserAction(actionName);
        metricsService.recordBoolean(actionName, true);
    }
}
export function isGoogleOrigin(origin) {
    // 
    if (origin === 'http://localhost' || origin.startsWith('http://localhost:') ||
        origin === 'null' || origin.startsWith('file://')) {
        return true;
    }
    // 
    // Matches https://*.google.com, https://google.com, https://*.googlers.com,
    // etc. Also matches regional domains like google.co.uk, google.es, etc.
    const googleOriginRegex = /^https:\/\/([a-z0-9-]+\.)*(google|googlers)\.(com|[a-z]{2}|co\.[a-z]{2})(\.[a-z]{2})?$/;
    return googleOriginRegex.test(origin);
}
export function getArrayBufferFromBigBuffer(bigBuffer) {
    if (bigBuffer.bytes !== undefined) {
        return new Uint8Array(bigBuffer.bytes).buffer;
    }
    if (bigBuffer.sharedMemory !== undefined) {
        return bigBuffer.sharedMemory.bufferHandle
            .mapBuffer(0, bigBuffer.sharedMemory.size)
            .buffer;
    }
    throw new Error('Invalid BigBuffer');
}
export const HANDSHAKE_INTERVAL_MS = 10;
export const HANDSHAKE_TIMEOUT_MS = 30000;
export const MAX_HANDSHAKE_ATTEMPTS = HANDSHAKE_TIMEOUT_MS / HANDSHAKE_INTERVAL_MS;
