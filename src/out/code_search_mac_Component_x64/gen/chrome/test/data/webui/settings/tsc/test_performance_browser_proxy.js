// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestPerformanceBrowserProxy extends TestBrowserProxy {
    currentSites_ = [];
    validationResults_ = {};
    cpuPerformanceInfo_ = {
        hardwareTier: 0,
        model: '',
        cores: 0,
    };
    constructor() {
        super([
            'getCpuPerformanceInfo',
            'getCurrentOpenSites',
            'getDeviceHasBattery',
            'openFeedbackDialog',
            'validateTabDiscardExceptionRule',
        ]);
    }
    setCpuPerformanceInfo(info) {
        this.cpuPerformanceInfo_ = info;
    }
    getCpuPerformanceInfo() {
        this.methodCalled('getCpuPerformanceInfo');
        return Promise.resolve(this.cpuPerformanceInfo_);
    }
    setCurrentOpenSites(currentSites) {
        this.currentSites_ = currentSites;
    }
    getCurrentOpenSites() {
        this.methodCalled('getCurrentOpenSites');
        return Promise.resolve(this.currentSites_);
    }
    getDeviceHasBattery() {
        this.methodCalled('getDeviceHasBattery');
        return Promise.resolve(false);
    }
    openFeedbackDialog(categoryTag) {
        this.methodCalled('openFeedbackDialog', categoryTag);
    }
    setValidationResults(results) {
        this.validationResults_ = results;
    }
    validateTabDiscardExceptionRule(rule) {
        this.methodCalled('validateTabDiscardExceptionRule', rule);
        return Promise.resolve(this.validationResults_[rule] ?? true);
    }
}
