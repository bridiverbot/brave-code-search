// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export var ReportingType;
(function (ReportingType) {
    ReportingType["SECURITY"] = "security";
    ReportingType["DEVICE"] = "device";
    ReportingType["USER"] = "user";
    ReportingType["USER_ACTIVITY"] = "user-activity";
    ReportingType["EXTENSIONS"] = "extensions";
    ReportingType["LEGACY_TECH"] = "legacy-tech";
    ReportingType["URL"] = "url";
})(ReportingType || (ReportingType = {}));
export class ManagementBrowserProxyImpl {
    getExtensions() {
        return sendWithPromise('getExtensions');
    }
    getManagedWebsites() {
        return sendWithPromise('getManagedWebsites');
    }
    getApplications() {
        return sendWithPromise('getApplications');
    }
    // 
    getContextualManagedData() {
        return sendWithPromise('getContextualManagedData');
    }
    getThreatProtectionInfo() {
        return sendWithPromise('getThreatProtectionInfo');
    }
    initBrowserReportingInfo() {
        return sendWithPromise('initBrowserReportingInfo');
    }
    initProfileReportingInfo() {
        return sendWithPromise('initProfileReportingInfo');
    }
    shouldShowPromotion() {
        return sendWithPromise('shouldShowPromotion');
    }
    setBannerDismissed() {
        return sendWithPromise('setBannerDismissed');
    }
    recordBannerRedirected() {
        return sendWithPromise('recordBannerRedirected');
    }
    static getInstance() {
        return instance || (instance = new ManagementBrowserProxyImpl());
    }
}
let instance = null;
// Export |ManagementBrowserProxyImpl| on |window| so that it can be accessed by
// management_ui_browsertest.cc
window.ManagementBrowserProxyImpl = ManagementBrowserProxyImpl;
