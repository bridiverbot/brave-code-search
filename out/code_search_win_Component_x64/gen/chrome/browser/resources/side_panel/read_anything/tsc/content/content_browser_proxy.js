// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { EventForwarder } from './read_anything_types.js';
export class ContentBrowserProxyImpl {
    onAnchorsReadyForReadability = new EventForwarder();
    onImageDownloaded = new EventForwarder();
    onNodeWillBeDeleted = new EventForwarder();
    onMainFrameSameDocumentNavigation = new EventForwarder();
    onRenderedTextMappingReady = new EventForwarder();
    onTranslationStateChanged = new EventForwarder();
    showEmpty = new EventForwarder();
    showLoading = new EventForwarder();
    updateImages = new EventForwarder();
    updateLinks = new EventForwarder();
    updateSelection = new EventForwarder();
    updateContent = new EventForwarder();
    constructor() {
        chrome.readingMode.onAnchorsReadyForReadability = () => {
            this.onAnchorsReadyForReadability.forward();
        };
        chrome.readingMode.onImageDownloaded = (nodeId) => {
            this.onImageDownloaded.forward(nodeId);
        };
        chrome.readingMode.onNodeWillBeDeleted = (nodeId) => {
            this.onNodeWillBeDeleted.forward(nodeId);
        };
        chrome.readingMode.onMainFrameSameDocumentNavigation = (url) => {
            this.onMainFrameSameDocumentNavigation.forward(url);
        };
        chrome.readingMode.onRenderedTextMappingReady = () => {
            this.onRenderedTextMappingReady.forward();
        };
        chrome.readingMode.onTranslationStateChanged = () => {
            this.onTranslationStateChanged.forward();
        };
        chrome.readingMode.showEmpty = () => {
            this.showEmpty.forward();
        };
        chrome.readingMode.showLoading = () => {
            this.showLoading.forward();
        };
        chrome.readingMode.updateImages = () => {
            this.updateImages.forward();
        };
        chrome.readingMode.updateLinks = () => {
            this.updateLinks.forward();
        };
        chrome.readingMode.updateSelection = () => {
            this.updateSelection.forward();
        };
        chrome.readingMode.updateContent = () => {
            this.updateContent.forward();
        };
    }
    getStartNodeId() {
        return chrome.readingMode.startNodeId;
    }
    getStartOffset() {
        return chrome.readingMode.startOffset;
    }
    getEndNodeId() {
        return chrome.readingMode.endNodeId;
    }
    getEndOffset() {
        return chrome.readingMode.endOffset;
    }
    hasValidSelection() {
        return chrome.readingMode.hasValidSelection;
    }
    isReadabilityEnabled() {
        return chrome.readingMode.isReadabilityEnabled;
    }
    isContentTranslated() {
        return chrome.readingMode.isContentTranslated;
    }
    isTranslatePdfEnabled() {
        return chrome.readingMode.isTranslatePdfEnabled;
    }
    isGoogleDocs() {
        return chrome.readingMode.isGoogleDocs;
    }
    isLeafNode(nodeId) {
        return chrome.readingMode.isLeafNode(nodeId);
    }
    isOverline(nodeId) {
        return chrome.readingMode.isOverline(nodeId);
    }
    isSuperscript(nodeId) {
        return chrome.readingMode.isSuperscript(nodeId);
    }
    isSubscript(nodeId) {
        return chrome.readingMode.isSubscript(nodeId);
    }
    shouldBold(nodeId) {
        return chrome.readingMode.shouldBold(nodeId);
    }
    onConnected() {
        chrome.readingMode.onConnected();
    }
    onCollapseSelection() {
        chrome.readingMode.onCollapseSelection();
    }
    attemptLogEarlySelection(fromSidePanel) {
        chrome.readingMode.attemptLogEarlySelection(fromSidePanel);
    }
    onSelectionChange(anchorNodeId, anchorOffset, focusNodeId, focusOffset) {
        chrome.readingMode.onSelectionChange(anchorNodeId, anchorOffset, focusNodeId, focusOffset);
    }
    onScroll(scrollingOnSelection) {
        chrome.readingMode.onScroll(scrollingOnSelection);
    }
    getTextContent(nodeId) {
        return chrome.readingMode.getTextContent(nodeId);
    }
    getPrefixText(nodeId) {
        return chrome.readingMode.getPrefixText(nodeId);
    }
    onNoTextContent() {
        chrome.readingMode.onNoTextContent();
    }
    onLinkClicked(nodeId) {
        chrome.readingMode.onLinkClicked(nodeId);
    }
    onRenderedTextBlocksAvailable(blocks) {
        chrome.readingMode.onRenderedTextBlocksAvailable(blocks);
    }
    getActiveDistillationMethod() {
        return chrome.readingMode.activeDistillationMethod;
    }
    getDistillationTypeReadability() {
        return chrome.readingMode.distillationTypeReadability;
    }
    getDistillationTypeScreen2x() {
        return chrome.readingMode.distillationTypeScreen2x;
    }
    getRootId() {
        return chrome.readingMode.rootId;
    }
    getHtmlTitle() {
        return chrome.readingMode.htmlTitle;
    }
    getHtmlContent() {
        return chrome.readingMode.htmlContent;
    }
    getDocumentUrl() {
        return chrome.readingMode.documentUrl;
    }
    getUnexpectedUpdateContentStopSource() {
        return chrome.readingMode.unexpectedUpdateContentStopSource;
    }
    getAxMapping(index) {
        return chrome.readingMode.getAxMapping(index);
    }
    getHtmlTag(nodeId) {
        return chrome.readingMode.getHtmlTag(nodeId);
    }
    getUrl(nodeId) {
        return chrome.readingMode.getUrl(nodeId);
    }
    getHtmlId(nodeId) {
        return chrome.readingMode.getHtmlId(nodeId);
    }
    getTextDirection(nodeId) {
        return chrome.readingMode.getTextDirection(nodeId);
    }
    getAltText(nodeId) {
        return chrome.readingMode.getAltText(nodeId);
    }
    getLanguage(nodeId) {
        return chrome.readingMode.getLanguage(nodeId);
    }
    getChildren(nodeId) {
        return chrome.readingMode.getChildren(nodeId);
    }
    getImageBitmap(nodeId) {
        return chrome.readingMode.getImageBitmap(nodeId);
    }
    getAxTreeAnchors() {
        return chrome.readingMode.axTreeAnchors;
    }
    onCopy() {
        chrome.readingMode.onCopy();
    }
    requiresDistillation() {
        return chrome.readingMode.requiresDistillation;
    }
    onDistilled(wordCount) {
        chrome.readingMode.onDistilled(wordCount);
    }
    static getInstance() {
        return instance || (instance = new ContentBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
