// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter, PreloadPageCallbackRouter } from 'chrome://glic/glic.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { assertEquals } from 'chrome://webui-test/chai_assert.js';
/**
 * Configures loadTimeData with default values for tests.
 * @param overrides Optional overrides for specific test cases.
 */
export function configureLoadTimeData(overrides = {}) {
    loadTimeData.resetForTesting(Object.assign({
        glicGuestURL: 'https://cat.fun/',
        devMode: false,
        chromeVersion: '123.0.0.0',
        chromeChannel: 'stable',
        glicSsr: false,
        onboardingCompleted: true,
        onboardingArm: '',
        glicHeaderRequestTypes: '',
        zoomLabel: 'Zoom: $1',
        loggingEnabled: false,
        maxInFlightRequests: 10,
        sendResponsesForAllRequests: false,
        glicGuestAPISource: '',
        enableStructuredYieldMetadata: false,
        glicPopupWindowsEnabled: false,
    }, overrides));
}
export class FakePageHandler {
    createWebClient(_receiver) { }
    webviewCommitted(_url) { }
    onZoomLevelChange(_zoomFactor) { }
    prepareForClient() {
        return Promise.resolve({ result: 0 });
    }
}
export class FakeBrowserProxy {
    pageHandler = new FakePageHandler();
    pageCallbackRouter = new PageCallbackRouter();
    preloadPageCallbackRouter = new PreloadPageCallbackRouter();
}
export class FakeWebviewDelegate {
    webviewError(_reason) { }
    webviewUnresponsive() { }
    webviewPageCommit(_pageType, _isApiAllowed) { }
    webviewDeniedByAdmin() { }
}
export function assertDeepEquals(a, b) {
    assertEquals(JSON.stringify(a), JSON.stringify(b));
}
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export async function assertRejects(promise, options) {
    return promise.then(() => {
        // The promise should have been rejected.
        throw new Error('Promise not rejected.');
    }, (e) => {
        const errorMessage = e.message;
        if (options?.withErrorMessage !== undefined) {
            assertEquals(options.withErrorMessage, errorMessage);
        }
        return errorMessage;
    });
}
export async function waitUntilEqual(getter, value, maxMs = 1000) {
    const startTime = performance.now();
    while (getter() !== value) {
        if (performance.now() - startTime > maxMs) {
            throw new Error('Timed out waiting for ' + JSON.stringify(value) + ' to be returned');
        }
        await sleep(10);
    }
}
