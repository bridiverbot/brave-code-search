// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { DriveDisclaimerStatus } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { PageCallbackRouter } from 'chrome-untrusted://resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { MockInputState } from 'chrome-untrusted://webui-test/cr_components/searchbox/searchbox_test_utils.js';
import { TestBrowserProxy } from 'chrome-untrusted://webui-test/test_browser_proxy.js';
/**
 * Helps track realbox browser call arguments. A mocked page handler remote
 * resolves the browser call promises with the arguments as an array making the
 * tests prone to change if the arguments change. This class extends the page
 * handler remote, resolving the browser call promises with named arguments.
 */
class FakePageHandler extends TestBrowserProxy {
    constructor() {
        super([
            'activateKeyword',
            'activateMetricsFunnel',
            'addFileContext',
            'addTabContext',
            'clearFiles',
            'onEscapePressed',
            'deleteAutocompleteMatch',
            'deleteContext',
            'deleteTabContext',
            'dismissFre',
            'executeAction',
            'getCyclingPlaceholderConfig',
            'getDriveDisclaimerStatus',
            'getInputState',
            'getPageClassification',
            'getRecentTabs',
            'getSmartTabSharingActive',
            'getTabPreview',
            'notifySessionAbandoned',
            'notifySessionStarted',
            'onDriveUploadClicked',
            'onFocusChanged',
            'onNavigationLikely',
            'onThumbnailRemoved',
            'openAutocompleteMatch',
            'openHotkeySettings',
            'openLensSearch',
            'openPopupSelection',
            'openProfilePicker',
            'queryAutocomplete',
            'recordModelSelectionAction',
            'recordToolSelectionAction',
            'setActiveModelMode',
            'setActiveToolMode',
            'setPage',
            'setPopupSelection',
            'setSmartComposeStats',
            'setSmartTabSharingActive',
            'resetSmartTabSharing',
            'showContextMenu',
            'showHotkeyDropdown',
            'showScreenshotMenu',
            'startScreenshare',
            'captureRegionScreenshot',
            'stopAutocomplete',
            'submitQuery',
            'toggleSuggestionGroupIdVisibility',
            'waitForTabFaviconLoad',
        ]);
    }
    setPage(page) {
        this.methodCalled('setPage', page);
    }
    onFocusChanged(focused) {
        this.methodCalled('onFocusChanged', { focused });
    }
    deleteAutocompleteMatch(line, url) {
        this.methodCalled('deleteAutocompleteMatch', { line, url });
    }
    activateKeyword(line, url, matchSelectionTimestamp, activationMethod) {
        this.methodCalled('activateKeyword', {
            line,
            url,
            matchSelectionTimestamp,
            activationMethod,
        });
    }
    showContextMenu(point) {
        this.methodCalled('showContextMenu', { point });
    }
    showScreenshotMenu(anchorRect) {
        this.methodCalled('showScreenshotMenu', { anchorRect });
    }
    executeAction(line, actionIndex, url, matchSelectionTimestamp, mouseButton, altKey, ctrlKey, metaKey, shiftKey) {
        this.methodCalled('executeAction', {
            line,
            actionIndex,
            url,
            matchSelectionTimestamp,
            mouseButton,
            altKey,
            ctrlKey,
            metaKey,
            shiftKey,
        });
    }
    openAutocompleteMatch(resultSequenceId, line, url, areMatchesShowing, mouseButton, modifiers, viaKeyboard) {
        this.methodCalled('openAutocompleteMatch', {
            resultSequenceId,
            line,
            url,
            areMatchesShowing,
            mouseButton,
            modifiers,
            viaKeyboard,
        });
    }
    setSmartComposeStats(smartComposeStats) {
        this.methodCalled('setSmartComposeStats', { smartComposeStats });
    }
    onNavigationLikely(line, url, navigationPredictor) {
        this.methodCalled('onNavigationLikely', { line, url, navigationPredictor });
    }
    onThumbnailRemoved() {
        this.methodCalled('onThumbnailRemoved', {});
    }
    queryAutocomplete(queryId, tabId, input, preventInlineAutocomplete, cursorPosition, suggestInventory, isOnFocus, keyword, inputMethod) {
        this.methodCalled('queryAutocomplete', {
            queryId,
            tabId,
            input,
            preventInlineAutocomplete,
            cursorPosition,
            suggestInventory,
            isOnFocus,
            keyword,
            inputMethod,
        });
    }
    stopAutocomplete(clearResult) {
        this.methodCalled('stopAutocomplete', { clearResult });
    }
    toggleSuggestionGroupIdVisibility(suggestionGroupId) {
        this.methodCalled('toggleSuggestionGroupIdVisibility', { suggestionGroupId });
    }
    getCyclingPlaceholderConfig() {
        this.methodCalled('getCyclingPlaceholderConfig');
        return Promise.resolve({
            config: {
                texts: [],
                changeTextAnimationInterval: { microseconds: BigInt(4000) * 1000n },
                fadeTextAnimationDuration: { microseconds: BigInt(250) * 1000n },
            },
        });
    }
    getRecentTabs() {
        this.methodCalled('getRecentTabs');
        return Promise.resolve({ tabs: [] });
    }
    getTabPreview(tabId) {
        this.methodCalled('getTabPreview', { tabId });
        return Promise.resolve({ previewDataUrl: '' });
    }
    waitForTabFaviconLoad(tabId) {
        this.methodCalled('waitForTabFaviconLoad', { tabId });
        return Promise.resolve({ faviconDataUrl: null });
    }
    getInputState() {
        this.methodCalled('getInputState');
        return Promise.resolve({ state: new MockInputState() });
    }
    notifySessionStarted() {
        this.methodCalled('notifySessionStarted');
    }
    notifySessionAbandoned() {
        this.methodCalled('notifySessionAbandoned');
    }
    addFileContext(fileInfo, fileBytes) {
        this.methodCalled('addFileContext', { fileInfo, fileBytes });
        return Promise.resolve('');
    }
    onDriveUploadClicked() {
        this.methodCalled('onDriveUploadClicked');
        return Promise.resolve({ response: { files: [], error: null } });
    }
    addTabContext(tabId, delayUpload) {
        this.methodCalled('addTabContext', { tabId, delayUpload });
        return Promise.resolve('');
    }
    deleteContext(fileToken) {
        this.methodCalled('deleteContext', { fileToken });
    }
    deleteTabContext(tabId) {
        this.methodCalled('deleteTabContext', { tabId });
    }
    clearFiles() {
        this.methodCalled('clearFiles');
    }
    submitQuery(queryText, mouseButton, altKey, ctrlKey, metaKey, shiftKey) {
        this.methodCalled('submitQuery', { queryText, mouseButton, altKey, ctrlKey, metaKey, shiftKey });
    }
    openLensSearch() {
        this.methodCalled('openLensSearch');
    }
    openProfilePicker() {
        this.methodCalled('openProfilePicker');
    }
    setActiveToolMode(tool, isSetByAim = false) {
        this.methodCalled('setActiveToolMode', tool, isSetByAim);
    }
    recordToolSelectionAction(tool) {
        this.methodCalled('recordToolSelectionAction', tool);
    }
    setActiveModelMode(model, isSetByAim) {
        this.methodCalled('setActiveModelMode', model, isSetByAim);
    }
    recordModelSelectionAction(model) {
        this.methodCalled('recordModelSelectionAction', model);
    }
    activateMetricsFunnel(funnelName) {
        this.methodCalled('activateMetricsFunnel', funnelName);
    }
    setPopupSelection(selection) {
        this.methodCalled('setPopupSelection', selection);
    }
    openPopupSelection(resultSequenceId, selection, disposition) {
        this.methodCalled('openPopupSelection', { resultSequenceId, selection, disposition });
    }
    getDriveDisclaimerStatus() {
        this.methodCalled('getDriveDisclaimerStatus');
        return Promise.resolve({ status: DriveDisclaimerStatus.kRestricted });
    }
    onDriveDisclaimerAccepted() { }
    getPageClassification() {
        this.methodCalled('getPageClassification');
        return Promise.resolve({ metricSource: 'LENS_SIDE_PANEL_SEARCHBOX' });
    }
    setSmartTabSharingActive(active) {
        this.methodCalled('setSmartTabSharingActive', active);
    }
    getSmartTabSharingActive() {
        this.methodCalled('getSmartTabSharingActive');
        return Promise.resolve({ active: false });
    }
    resetSmartTabSharing() {
        this.methodCalled('resetSmartTabSharing');
        return Promise.resolve({ active: false });
    }
    startScreenshare(preferEntireScreen) {
        this.methodCalled('startScreenshare', { preferEntireScreen });
        return Promise.resolve({ token: null });
    }
    captureRegionScreenshot() {
        this.methodCalled('captureRegionScreenshot');
        return Promise.resolve({ token: null });
    }
    dismissFre() {
        this.methodCalled('dismissFre');
    }
    showHotkeyDropdown(anchorBounds) {
        this.methodCalled('showHotkeyDropdown', { anchorBounds });
        return Promise.resolve();
    }
    openHotkeySettings() {
        this.methodCalled('openHotkeySettings');
    }
    onEscapePressed() {
        this.methodCalled('onEscapePressed');
    }
}
export class TestSearchboxBrowserProxy {
    callbackRouter;
    callbackRouterRemote;
    handler;
    constructor() {
        this.callbackRouter = new PageCallbackRouter();
        this.callbackRouterRemote =
            this.callbackRouter.$.bindNewPipeAndPassRemote();
        this.handler = new FakePageHandler();
    }
}
