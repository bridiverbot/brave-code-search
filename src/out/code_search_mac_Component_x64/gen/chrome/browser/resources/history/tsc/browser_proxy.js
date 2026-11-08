// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter, PageHandler } from 'chrome://resources/cr_components/history/history.mojom-webui.js';
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class BrowserProxyImpl {
    handler;
    callbackRouter;
    constructor() {
        this.handler = PageHandler.getRemote();
        this.callbackRouter = new PageCallbackRouter();
        this.handler.setPage(this.callbackRouter.$.bindNewPipeAndPassRemote());
    }
    recordHistogram(histogram, value, max) {
        chrome.send('metricsHandler:recordInHistogram', [histogram, value, max]);
    }
    recordBooleanHistogram(histogram, value) {
        chrome.metricsPrivate.recordBoolean(histogram, value);
    }
    recordAction(action) {
        if (action.indexOf('_') === -1) {
            action = `HistoryPage_${action}`;
        }
        chrome.send('metricsHandler:recordAction', [action]);
    }
    recordTime(histogram, time) {
        chrome.send('metricsHandler:recordTime', [histogram, time]);
    }
    recordLongTime(histogram, time) {
        chrome.metricsPrivate.recordLongTime(histogram, time);
    }
    recordSigninPendingOffered(accessPoint) {
        chrome.send('recordSigninPendingOffered', [accessPoint]);
    }
    navigateToUrl(url, target, e) {
        chrome.send('navigateToUrl', [url, target, e.button, e.altKey, e.ctrlKey, e.metaKey, e.shiftKey]);
    }
    otherDevicesInitialized() {
        chrome.send('otherDevicesInitialized');
    }
    getInitialIdentityState() {
        return sendWithPromise('getInitialIdentityState');
    }
    startTurnOnSyncFlow() {
        chrome.send('startTurnOnSyncFlow');
    }
    getSyncedDevicesForFiltering() {
        return this.handler.getSyncedDevicesForFiltering();
    }
    getTimePeriodOptions() {
        return this.handler.getTimePeriodOptions();
    }
    static getInstance() {
        return instance || (instance = new BrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
