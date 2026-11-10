// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { FakeChromeEvent } from 'chrome-untrusted://webui-test/fake_chrome_event.js';
import { TestBrowserProxy } from 'chrome-untrusted://webui-test/test_browser_proxy.js';
export class TestContentBrowserProxy extends TestBrowserProxy {
    onAnchorsReadyForReadability = new FakeChromeEvent();
    onNodeWillBeDeleted = new FakeChromeEvent();
    onImageDownloaded = new FakeChromeEvent();
    onMainFrameSameDocumentNavigation = new FakeChromeEvent();
    onRenderedTextMappingReady = new FakeChromeEvent();
    onTranslationStateChanged = new FakeChromeEvent();
    showEmpty = new FakeChromeEvent();
    showLoading = new FakeChromeEvent();
    updateImages = new FakeChromeEvent();
    updateLinks = new FakeChromeEvent();
    updateSelection = new FakeChromeEvent();
    updateContent = new FakeChromeEvent();
    startNodeId = -1;
    startOffset = -1;
    endNodeId = -1;
    endOffset = -1;
    hasValidSelectionVal = true;
    readabilityEnabled = true;
    contentTranslated = false;
    translatePdfEnabled = false;
    textContentMap = { 2: 'some text content' };
    prefixText = '';
    rootId = 1;
    htmlTitle = '';
    htmlContent = '';
    documentUrl = '';
    googleDocs = false;
    unexpectedUpdateContentStopSource = 0;
    axMapping = [];
    htmlTagMap = { 1: 'div' };
    leafNodeSet = new Set();
    urlMap = {};
    htmlIdMap = {};
    textDirectionMap = {};
    altText = '';
    languageMap = {};
    childrenMap = { 1: [2] };
    isOverlineMap = {};
    isSuperscriptMap = {};
    isSubscriptMap = {};
    shouldBoldMap = {};
    imageBitmap = null;
    axTreeAnchorsVal = {};
    activeDistillationMethod = 0;
    distillationTypeReadability = 1;
    distillationTypeScreen2x = 0;
    requiresDistillationVal = false;
    constructor() {
        super([
            'getStartNodeId',
            'getStartOffset',
            'getEndNodeId',
            'getEndOffset',
            'hasValidSelection',
            'isReadabilityEnabled',
            'isContentTranslated',
            'isTranslatePdfEnabled',
            'getActiveDistillationMethod',
            'getDistillationTypeReadability',
            'getDistillationTypeScreen2x',
            'onConnected',
            'onCollapseSelection',
            'attemptLogEarlySelection',
            'onSelectionChange',
            'onScroll',
            'getTextContent',
            'getPrefixText',
            'getRootId',
            'getHtmlTitle',
            'getHtmlContent',
            'getDocumentUrl',
            'isGoogleDocs',
            'getUnexpectedUpdateContentStopSource',
            'getAxMapping',
            'getHtmlTag',
            'isLeafNode',
            'getUrl',
            'getHtmlId',
            'getTextDirection',
            'getAltText',
            'getLanguage',
            'getChildren',
            'isOverline',
            'isSuperscript',
            'isSubscript',
            'shouldBold',
            'getImageBitmap',
            'getAxTreeAnchors',
            'onNoTextContent',
            'onCopy',
            'requiresDistillation',
            'onDistilled',
            'onLinkClicked',
            'onRenderedTextBlocksAvailable',
        ]);
    }
    getStartNodeId() {
        this.methodCalled('getStartNodeId');
        return this.startNodeId;
    }
    getStartOffset() {
        this.methodCalled('getStartOffset');
        return this.startOffset;
    }
    getEndNodeId() {
        this.methodCalled('getEndNodeId');
        return this.endNodeId;
    }
    getEndOffset() {
        this.methodCalled('getEndOffset');
        return this.endOffset;
    }
    hasValidSelection() {
        this.methodCalled('hasValidSelection');
        return this.hasValidSelectionVal;
    }
    isReadabilityEnabled() {
        this.methodCalled('isReadabilityEnabled');
        return this.readabilityEnabled;
    }
    isContentTranslated() {
        this.methodCalled('isContentTranslated');
        return this.contentTranslated;
    }
    isTranslatePdfEnabled() {
        this.methodCalled('isTranslatePdfEnabled');
        return this.translatePdfEnabled;
    }
    onConnected() {
        this.methodCalled('onConnected');
    }
    onCollapseSelection() {
        this.methodCalled('onCollapseSelection');
    }
    attemptLogEarlySelection(fromSidePanel) {
        this.methodCalled('attemptLogEarlySelection', fromSidePanel);
    }
    onSelectionChange(anchorNodeId, anchorOffset, focusNodeId, focusOffset) {
        this.methodCalled('onSelectionChange', anchorNodeId, anchorOffset, focusNodeId, focusOffset);
    }
    onScroll(scrollingOnSelection) {
        this.methodCalled('onScroll', scrollingOnSelection);
    }
    getTextContent(nodeId) {
        this.methodCalled('getTextContent', nodeId);
        return this.textContentMap[nodeId] || '';
    }
    getPrefixText(nodeId) {
        this.methodCalled('getPrefixText', nodeId);
        return this.prefixText;
    }
    getRootId() {
        this.methodCalled('getRootId');
        return this.rootId;
    }
    getHtmlTitle() {
        this.methodCalled('getHtmlTitle');
        return this.htmlTitle;
    }
    getHtmlContent() {
        this.methodCalled('getHtmlContent');
        return this.htmlContent;
    }
    getDocumentUrl() {
        this.methodCalled('getDocumentUrl');
        return this.documentUrl;
    }
    isGoogleDocs() {
        this.methodCalled('isGoogleDocs');
        return this.googleDocs;
    }
    getUnexpectedUpdateContentStopSource() {
        this.methodCalled('getUnexpectedUpdateContentStopSource');
        return this.unexpectedUpdateContentStopSource;
    }
    getAxMapping(index) {
        this.methodCalled('getAxMapping', index);
        return this.axMapping;
    }
    getHtmlTag(nodeId) {
        this.methodCalled('getHtmlTag', nodeId);
        return this.htmlTagMap[nodeId] || '';
    }
    isLeafNode(nodeId) {
        this.methodCalled('isLeafNode', nodeId);
        return this.leafNodeSet.has(nodeId);
    }
    getUrl(nodeId) {
        this.methodCalled('getUrl', nodeId);
        return this.urlMap[nodeId] || '';
    }
    getHtmlId(nodeId) {
        this.methodCalled('getHtmlId', nodeId);
        return this.htmlIdMap[nodeId] || '';
    }
    getTextDirection(nodeId) {
        this.methodCalled('getTextDirection', nodeId);
        return this.textDirectionMap[nodeId] || '';
    }
    getAltText(nodeId) {
        this.methodCalled('getAltText', nodeId);
        return this.altText;
    }
    getLanguage(nodeId) {
        this.methodCalled('getLanguage', nodeId);
        return this.languageMap[nodeId] || '';
    }
    getChildren(nodeId) {
        this.methodCalled('getChildren', nodeId);
        return this.childrenMap[nodeId] || [];
    }
    isOverline(nodeId) {
        this.methodCalled('isOverline', nodeId);
        return this.isOverlineMap[nodeId] || false;
    }
    isSuperscript(nodeId) {
        this.methodCalled('isSuperscript', nodeId);
        return this.isSuperscriptMap[nodeId] || false;
    }
    isSubscript(nodeId) {
        this.methodCalled('isSubscript', nodeId);
        return this.isSubscriptMap[nodeId] || false;
    }
    shouldBold(nodeId) {
        this.methodCalled('shouldBold', nodeId);
        return this.shouldBoldMap[nodeId] || false;
    }
    getImageBitmap(nodeId) {
        this.methodCalled('getImageBitmap', nodeId);
        return this.imageBitmap;
    }
    getAxTreeAnchors() {
        this.methodCalled('getAxTreeAnchors');
        return this.axTreeAnchorsVal;
    }
    onNoTextContent() {
        this.methodCalled('onNoTextContent');
    }
    onLinkClicked(nodeId) {
        this.methodCalled('onLinkClicked', nodeId);
    }
    onRenderedTextBlocksAvailable(blocks) {
        this.methodCalled('onRenderedTextBlocksAvailable', blocks);
    }
    getActiveDistillationMethod() {
        this.methodCalled('getActiveDistillationMethod');
        return this.activeDistillationMethod;
    }
    getDistillationTypeReadability() {
        this.methodCalled('getDistillationTypeReadability');
        return this.distillationTypeReadability;
    }
    getDistillationTypeScreen2x() {
        this.methodCalled('getDistillationTypeScreen2x');
        return this.distillationTypeScreen2x;
    }
    onCopy() {
        this.methodCalled('onCopy');
    }
    requiresDistillation() {
        this.methodCalled('requiresDistillation');
        return this.requiresDistillationVal;
    }
    onDistilled(wordCount) {
        this.methodCalled('onDistilled', wordCount);
    }
}
