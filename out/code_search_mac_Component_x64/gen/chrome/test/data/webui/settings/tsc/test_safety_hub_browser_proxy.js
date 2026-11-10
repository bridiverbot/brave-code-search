// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CardState } from 'chrome://settings/lazy_load.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
// clang-format on
/**
 * A test version of SafetyHubBrowserProxy. Provides helper
 * methods for allowing tests to know when a method was called, as well as
 * specifying mock responses.
 */
export class TestSafetyHubBrowserProxy extends TestBrowserProxy {
    dummyCardInfo = {
        header: 'Dummy Header',
        subheader: 'Dummy Subheader',
        state: CardState.INFO,
    };
    dummyEntryPointInfo = {
        hasRecommendations: false,
        header: 'Dummy Header',
        subheader: 'Dummy Subheader',
    };
    unusedSitePermissions_ = [];
    numberOfExtensionsThatNeedReview_ = 0;
    passwordCardData_ = this.dummyCardInfo;
    safeBrowsingCardData_ = this.dummyCardInfo;
    versionCardData_ = this.dummyCardInfo;
    entryPointData_ = this.dummyEntryPointInfo;
    constructor() {
        super([
            'acknowledgeRevokedUnusedSitePermissionsList',
            'allowPermissionsAgainForUnusedSite',
            'getRevokedUnusedSitePermissionsList',
            'getNumberOfExtensionsThatNeedReview',
            'undoAcknowledgeRevokedUnusedSitePermissionsList',
            'undoAllowPermissionsAgainForUnusedSite',
            'getPasswordCardData',
            'getSafeBrowsingCardData',
            'getVersionCardData',
            'getSafetyHubEntryPointData',
            'dismissActiveMenuNotification',
            'recordSafetyHubPageVisit',
            'recordSafetyHubInteraction',
        ]);
    }
    acknowledgeRevokedUnusedSitePermissionsList() {
        this.methodCalled('acknowledgeRevokedUnusedSitePermissionsList');
    }
    allowPermissionsAgainForUnusedSite(origin) {
        this.methodCalled('allowPermissionsAgainForUnusedSite', [origin]);
    }
    setUnusedSitePermissions(unusedSitePermissionsList) {
        this.unusedSitePermissions_ = unusedSitePermissionsList;
    }
    getRevokedUnusedSitePermissionsList() {
        this.methodCalled('getRevokedUnusedSitePermissionsList');
        return Promise.resolve(this.unusedSitePermissions_.slice());
    }
    undoAcknowledgeRevokedUnusedSitePermissionsList(unusedSitePermissionList) {
        this.methodCalled('undoAcknowledgeRevokedUnusedSitePermissionsList', [unusedSitePermissionList]);
    }
    undoAllowPermissionsAgainForUnusedSite(unusedSitePermissions) {
        this.methodCalled('undoAllowPermissionsAgainForUnusedSite', [unusedSitePermissions]);
    }
    setNumberOfExtensionsThatNeedReview(numberExtensions) {
        this.numberOfExtensionsThatNeedReview_ = numberExtensions;
    }
    getNumberOfExtensionsThatNeedReview() {
        this.methodCalled('getNumberOfExtensionsThatNeedReview');
        return Promise.resolve(this.numberOfExtensionsThatNeedReview_);
    }
    getPasswordCardData() {
        this.methodCalled('getPasswordCardData');
        return Promise.resolve(this.passwordCardData_);
    }
    setPasswordCardData(data) {
        this.passwordCardData_ = data;
    }
    getSafeBrowsingCardData() {
        this.methodCalled('getSafeBrowsingCardData');
        return Promise.resolve(this.safeBrowsingCardData_);
    }
    setSafeBrowsingCardData(data) {
        this.safeBrowsingCardData_ = data;
    }
    getVersionCardData() {
        this.methodCalled('getVersionCardData');
        return Promise.resolve(this.versionCardData_);
    }
    setVersionCardData(data) {
        this.versionCardData_ = data;
    }
    getSafetyHubEntryPointData() {
        this.methodCalled('getSafetyHubEntryPointData');
        return Promise.resolve(this.entryPointData_);
    }
    setSafetyHubEntryPointData(value) {
        this.entryPointData_ = value;
    }
    dismissActiveMenuNotification() {
        this.methodCalled('dismissActiveMenuNotification');
    }
    recordSafetyHubPageVisit() {
        this.methodCalled('recordSafetyHubPageVisit');
    }
    recordSafetyHubInteraction() {
        this.methodCalled('recordSafetyHubInteraction');
    }
}
