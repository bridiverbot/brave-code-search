// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestDiceWebSigninInterceptBrowserProxy extends TestBrowserProxy {
    interceptionParameters_;
    chromeSigninInterceptionParameters_;
    constructor() {
        super([
            'accept',
            'cancel',
            'pageLoaded',
            'chromeSigninPageLoaded',
            'initializedWithHeight',
        ]);
        this.interceptionParameters_ = {
            headerText: '',
            bodyTitle: '',
            bodyText: '',
            cancelButtonLabel: '',
            confirmButtonLabel: '',
            managedDisclaimerText: '',
            headerTextColor: '',
            interceptedProfileColor: '',
            primaryProfileColor: '',
            interceptedAccount: { pictureUrl: '', avatarBadge: '', userBadgeAltText: '' },
            primaryAccount: { pictureUrl: '', avatarBadge: '', userBadgeAltText: '' },
            useV2Design: false,
            useV2ProfileSwitchDesign: false,
            showManagedDisclaimer: false,
            interceptedProfileBadgeColor: '',
            primaryProfileBadgeColor: '',
        };
        this.chromeSigninInterceptionParameters_ = {
            title: '',
            subtitle: '',
            fullName: '',
            givenName: '',
            email: '',
            pictureUrl: '',
            managedUserBadge: '',
            userBadgeAltText: '',
        };
    }
    setInterceptionParameters(parameters) {
        this.interceptionParameters_ = parameters;
    }
    setChromeSigninInterceptionParameters(parameters) {
        this.chromeSigninInterceptionParameters_ = parameters;
    }
    accept() {
        this.methodCalled('accept');
    }
    cancel() {
        this.methodCalled('cancel');
    }
    pageLoaded() {
        this.methodCalled('pageLoaded');
        return Promise.resolve(this.interceptionParameters_);
    }
    chromeSigninPageLoaded() {
        this.methodCalled('chromeSigninPageLoaded');
        return Promise.resolve(this.chromeSigninInterceptionParameters_);
    }
    initializedWithHeight(height) {
        this.methodCalled('initializedWithHeight', height);
    }
}
