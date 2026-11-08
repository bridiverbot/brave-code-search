// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { DangerType, SafeBrowsingState, State, TailoredWarningType } from 'chrome://downloads/downloads.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class FakePageHandler extends TestBrowserProxy {
    eligibleForEsbPromo_ = false;
    constructor() {
        super([
            'discardDangerous',
            'isEligibleForEsbPromo',
            'logEsbPromotionRowViewed',
            'openEsbSettings',
            'recordCancelBypassWarningDialog',
            'recordOpenBypassWarningDialog',
            'remove',
            'saveDangerousFromDialogRequiringGesture',
            'saveSuspiciousRequiringGesture',
        ]);
    }
    recordCancelBypassWarningDialog(id) {
        this.methodCalled('recordCancelBypassWarningDialog', id);
    }
    recordOpenBypassWarningDialog(id) {
        this.methodCalled('recordOpenBypassWarningDialog', id);
    }
    remove(id) {
        this.methodCalled('remove', id);
    }
    discardDangerous(id) {
        this.methodCalled('discardDangerous', id);
    }
    saveDangerousFromDialogRequiringGesture(id) {
        this.methodCalled('saveDangerousFromDialogRequiringGesture', id);
    }
    saveSuspiciousRequiringGesture(id) {
        this.methodCalled('saveSuspiciousRequiringGesture', id);
    }
    openEsbSettings() {
        this.methodCalled('openEsbSettings');
    }
    logEsbPromotionRowViewed() {
        this.methodCalled('logEsbPromotionRowViewed');
    }
    getDownloads(_searchTerms) { }
    openFileRequiringGesture(_id) { }
    drag(_id) { }
    retryDownload(_id) { }
    show(_id) { }
    pause(_id) { }
    resume(_id) { }
    undo() { }
    cancel(_id) { }
    clearAll() { }
    openDownloadsFolderRequiringGesture() { }
    openDuringScanningRequiringGesture(_id) { }
    reviewDangerousRequiringGesture(_id) { }
    deepScan(_id) { }
    bypassDeepScanRequiringGesture(_id) { }
    isEligibleForEsbPromo() {
        this.methodCalled('isEligibleForEsbPromo');
        return Promise.resolve({ result: this.eligibleForEsbPromo_ });
    }
    setEligbleForEsbPromo(eligible) {
        this.eligibleForEsbPromo_ = eligible;
    }
}
export class TestIconLoader extends TestBrowserProxy {
    shouldIconsLoad_ = true;
    constructor() {
        super(['loadIcon']);
    }
    setShouldIconsLoad(shouldIconsLoad) {
        this.shouldIconsLoad_ = shouldIconsLoad;
    }
    loadIcon(_imageEl, filePath) {
        this.methodCalled('loadIcon', filePath);
        return Promise.resolve(this.shouldIconsLoad_);
    }
}
export function createDownload(config) {
    return Object.assign({
        byExtId: '',
        byExtName: '',
        dangerType: DangerType.kNoApplicableDangerType,
        dateString: '',
        fileExternallyRemoved: false,
        fileName: 'download 1',
        filePath: '/some/file/path',
        fileUrl: 'file:///some/file/path',
        hideDate: false,
        id: '123',
        isDangerous: false,
        isInsecure: false,
        isReviewable: false,
        lastReasonText: '',
        otr: false,
        percent: 100,
        progressStatusText: '',
        resume: false,
        retry: false,
        return: false,
        shouldShowIncognitoWarning: false,
        showInFolderText: '',
        sinceString: 'Today',
        started: Date.now() - 10000,
        state: State.kComplete,
        tailoredWarningType: TailoredWarningType.kNoApplicableTailoredWarningType,
        total: -1,
        url: 'http://permission.site',
        displayInitiatorOrigin: 'http://permission.site',
        safeBrowsingState: SafeBrowsingState.kStandardProtection,
        hasSafeBrowsingVerdict: true,
    }, config || {});
}
