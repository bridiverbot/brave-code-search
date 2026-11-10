// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export var PerformanceFeedbackCategory;
(function (PerformanceFeedbackCategory) {
    PerformanceFeedbackCategory["NOTIFICATIONS"] = "performance_notifications";
    PerformanceFeedbackCategory["TABS"] = "performance_tabs";
    PerformanceFeedbackCategory["BATTERY"] = "performance_battery";
    PerformanceFeedbackCategory["SPEED"] = "performance_speed";
})(PerformanceFeedbackCategory || (PerformanceFeedbackCategory = {}));
export class PerformanceBrowserProxyImpl {
    getCpuPerformanceInfo() {
        return sendWithPromise('getCpuPerformanceInfo');
    }
    getCurrentOpenSites() {
        return sendWithPromise('getCurrentOpenSites');
    }
    getDeviceHasBattery() {
        return sendWithPromise('getDeviceHasBattery');
    }
    openFeedbackDialog(categoryTag) {
        chrome.send('openPerformanceFeedbackDialog', [categoryTag]);
    }
    validateTabDiscardExceptionRule(rule) {
        return sendWithPromise('validateTabDiscardExceptionRule', rule);
    }
    static getInstance() {
        return instance || (instance = new PerformanceBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
