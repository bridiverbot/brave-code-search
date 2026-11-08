// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestFeedbackBrowserProxy extends TestBrowserProxy {
    dialogArugments_ = '';
    systemLogs_ = [];
    userEmail_ = '';
    userMedia_ = Promise.resolve(undefined);
    constructor() {
        super([
            'closeDialog', 'getSystemInformation', 'getUserEmail',
            'getDialogArguments', 'getUserMedia', 'sendFeedback',
            'showAutofillMetadataInfo', 'showDialog', 'showMetrics', 'showSystemInfo',
        ]);
    }
    getSystemInformation() {
        this.methodCalled('getSystemInformation');
        return Promise.resolve(this.systemLogs_);
    }
    setSystemInfomation(value) {
        this.systemLogs_ = value;
    }
    getUserEmail() {
        this.methodCalled('getUserEmail');
        return Promise.resolve(this.userEmail_);
    }
    setUserEmail(value) {
        this.userEmail_ = value;
    }
    getDialogArguments() {
        this.methodCalled('getDialogArguments');
        return this.dialogArugments_;
    }
    setDialogArguments(value) {
        this.dialogArugments_ = value;
    }
    getUserMedia(_params) {
        this.methodCalled('getUserMedia');
        return this.userMedia_;
    }
    setUserMedia(value) {
        this.userMedia_ = value;
    }
    sendFeedback(feedback, _loadSystemInfo, _formOpenTime) {
        this.methodCalled('sendFeedback', feedback);
        return Promise.resolve({
            status: chrome.feedbackPrivate.Status.SUCCESS,
            landingPageType: chrome.feedbackPrivate.LandingPageType.NORMAL,
        });
    }
    showDialog() {
        this.methodCalled('showDialog');
    }
    closeDialog() {
        this.methodCalled('closeDialog');
    }
    showSystemInfo() {
        this.methodCalled('showSystemInfo');
    }
    showMetrics() {
        this.methodCalled('showMetrics');
    }
    showAutofillMetadataInfo(autofillMetadata) {
        this.methodCalled('showAutofillMetadataInfo', autofillMetadata);
    }
}
