// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { LensPageCallbackRouter } from 'chrome-untrusted://lens-overlay/lens.mojom-webui.js';
import { TestBrowserProxy } from 'chrome-untrusted://webui-test/test_browser_proxy.js';
/**
 * Test version of the LensPageHandler used to verify calls to the browser from
 * WebUI.
 */
export class TestLensOverlayPageHandler extends TestBrowserProxy {
    browserLocale = '';
    sourceLanguagesToFetch = [];
    targetLanguagesToFetch = [];
    constructor() {
        super([
            'activityRequestedByOverlay',
            'closeRequestedByOverlayCloseButton',
            'closeRequestedByOverlayBackgroundClick',
            'addBackgroundBlur',
            'setLiveBlur',
            'closePreselectionBubble',
            'feedbackRequestedByOverlay',
            'getOverlayInvocationSource',
            'infoRequestedByOverlay',
            'issueLensRegionRequest',
            'issueLensObjectRequest',
            'issueMathSelectionRequest',
            'issueTextSelectionRequest',
            'issueTranslateSelectionRequest',
            'issueTranslateFullPageRequest',
            'issueEndTranslateModeRequest',
            'notifyOverlayInitialized',
            'copyText',
            'copyImage',
            'saveAsImage',
            'recordUkmAndTaskCompletionForLensOverlayInteraction',
            'recordLensOverlaySemanticEvent',
            'fetchSupportedLanguages',
            'finishReshowOverlay',
            'acceptPrivacyNotice',
            'dismissPrivacyNotice',
        ]);
    }
    activityRequestedByOverlay(clickModifiers) {
        this.methodCalled('activityRequestedByOverlay', clickModifiers);
    }
    closeRequestedByOverlayCloseButton() {
        this.methodCalled('closeRequestedByOverlayCloseButton');
    }
    closeRequestedByOverlayBackgroundClick() {
        this.methodCalled('closeRequestedByOverlayBackgroundClick');
    }
    addBackgroundBlur() {
        this.methodCalled('addBackgroundBlur');
    }
    setLiveBlur() {
        this.methodCalled('setLiveBlur');
    }
    closePreselectionBubble() {
        this.methodCalled('closePreselectionBubble');
    }
    feedbackRequestedByOverlay() {
        this.methodCalled('feedbackRequestedByOverlay');
    }
    getOverlayInvocationSource() {
        this.methodCalled('getOverlayInvocationSource');
        return Promise.resolve({ invocationSource: 'AppMenu' });
    }
    infoRequestedByOverlay(clickModifiers) {
        this.methodCalled('infoRequestedByOverlay', clickModifiers);
    }
    issueLensRegionRequest(rect, isClick) {
        this.methodCalled('issueLensRegionRequest', rect, isClick);
    }
    issueLensObjectRequest(rect, isMaskClick) {
        this.methodCalled('issueLensObjectRequest', rect, isMaskClick);
    }
    issueTextSelectionRequest(query) {
        this.methodCalled('issueTextSelectionRequest', query);
    }
    issueTranslateSelectionRequest(query) {
        this.methodCalled('issueTranslateSelectionRequest', query);
    }
    issueMathSelectionRequest(query, formula) {
        this.methodCalled('issueMathSelectionRequest', query, formula);
    }
    issueTranslateFullPageRequest(sourceLanguage, targetLanguage) {
        this.methodCalled('issueTranslateFullPageRequest', sourceLanguage, targetLanguage);
    }
    issueEndTranslateModeRequest() {
        this.methodCalled('issueEndTranslateModeRequest');
    }
    notifyOverlayInitialized() {
        this.methodCalled('notifyOverlayInitialized');
    }
    copyText(text) {
        this.methodCalled('copyText', text);
    }
    copyImage(region) {
        this.methodCalled('copyImage', region);
    }
    saveAsImage(region) {
        this.methodCalled('saveAsImage', region);
    }
    recordUkmAndTaskCompletionForLensOverlayInteraction(userAction) {
        this.methodCalled('recordUkmAndTaskCompletionForLensOverlayInteraction', userAction);
    }
    recordLensOverlaySemanticEvent(semanticEvent) {
        this.methodCalled('recordLensOverlaySemanticEvent', semanticEvent);
    }
    fetchSupportedLanguages() {
        this.methodCalled('fetchSupportedLanguages');
        return Promise.resolve({
            browserLocale: this.browserLocale,
            sourceLanguages: structuredClone(this.sourceLanguagesToFetch),
            targetLanguages: structuredClone(this.targetLanguagesToFetch),
        });
    }
    finishReshowOverlay() {
        this.methodCalled('finishReshowOverlay');
    }
    setLanguagesToFetchForTesting(locale, sourceLanguages, targetLanguages) {
        this.browserLocale = locale;
        this.sourceLanguagesToFetch = sourceLanguages;
        this.targetLanguagesToFetch = targetLanguages;
    }
    acceptPrivacyNotice() {
        this.methodCalled('acceptPrivacyNotice');
    }
    dismissPrivacyNotice() {
        this.methodCalled('dismissPrivacyNotice');
    }
}
/**
 * Test version of the BrowserProxy used in connecting Lens Overlay to the
 * browser on start up.
 */
export class TestLensOverlayBrowserProxy {
    callbackRouter = new LensPageCallbackRouter();
    handler = new TestLensOverlayPageHandler();
    page = this.callbackRouter.$.bindNewPipeAndPassRemote();
}
