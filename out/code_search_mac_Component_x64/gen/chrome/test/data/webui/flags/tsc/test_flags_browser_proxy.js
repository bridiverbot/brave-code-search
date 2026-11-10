// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestFlagsBrowserProxy extends TestBrowserProxy {
    featureData = {
        // Default feature data
        'supportedFeatures': [],
        'unsupportedFeatures': [],
        'needsRestart': false,
        'showBetaChannelPromotion': false,
        'showDevChannelPromotion': false,
        // 
    };
    exportData = {
        enabled_flags: [],
        customized_flags: {},
    };
    constructor() {
        super([
            'restartBrowser',
            'resetAllFlags',
            'exportFlags',
            'importFlags',
            'requestDeprecatedFeatures',
            'requestExperimentalFeatures',
            'enableExperimentalFeature',
            'selectExperimentalFeature',
            'setOriginListFlag',
            'setStringFlag',
        ]);
    }
    setFeatureData(data) {
        this.featureData = data;
    }
    restartBrowser() {
        this.methodCalled('restartBrowser');
    }
    resetAllFlags() {
        this.methodCalled('resetAllFlags');
    }
    setExportData(data) {
        this.exportData = data;
    }
    exportFlags() {
        this.methodCalled('exportFlags');
        return Promise.resolve(structuredClone(this.exportData));
    }
    importFlags(data) {
        this.methodCalled('importFlags', data);
        return Promise.resolve(true);
    }
    requestDeprecatedFeatures() {
        this.methodCalled('requestDeprecatedFeatures');
        return Promise.resolve(structuredClone(this.featureData));
    }
    requestExperimentalFeatures() {
        this.methodCalled('requestExperimentalFeatures');
        return Promise.resolve(structuredClone(this.featureData));
    }
    enableExperimentalFeature(internalName, enable) {
        this.methodCalled('enableExperimentalFeature', internalName, enable);
    }
    selectExperimentalFeature(internalName, index) {
        this.methodCalled('selectExperimentalFeature', internalName, index);
    }
    setOriginListFlag(internalName, value) {
        this.methodCalled('setOriginListFlag', internalName, value);
    }
    setStringFlag(internalName, value) {
        this.methodCalled('setStringFlag', internalName, value);
    }
}
