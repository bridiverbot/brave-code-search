// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { AxReadAloudNode, ReadAloudNode } from './read_aloud_types.js';
export class V8ModelImpl {
    getHighlightForCurrentSegmentIndex(index, phrases) {
        // Since there's a chance createFromAxNode can return an undefined node,
        // filter out the undefined ones.
        return chrome.readingMode.getHighlightForCurrentSegmentIndex(index, phrases)
            .map(({ nodeId, start, length }) => ({ node: ReadAloudNode.createFromAxNode(nodeId), start, length }))
            .filter((segment) => segment.node !== undefined);
    }
    getCurrentTextSegments() {
        // Since there's a chance createFromAxNode can return an undefined node,
        // filter out the undefined ones.
        return chrome.readingMode.getCurrentTextSegments()
            .map(({ nodeId, start, length }) => ({ node: ReadAloudNode.createFromAxNode(nodeId), start, length }))
            .filter((segment) => segment.node !== undefined);
    }
    getCurrentTextContent() {
        return chrome.readingMode.getCurrentTextContent();
    }
    resetSpeechToBeginning() {
        chrome.readingMode.resetGranularityIndex();
    }
    getAccessibleText(text, maxSpeechLength) {
        const boundary = chrome.readingMode.getAccessibleBoundary(text, maxSpeechLength);
        return text.substring(0, boundary);
    }
    isInitialized() {
        return chrome.readingMode.isSpeechTreeInitialized;
    }
    init(textNode) {
        if (!(textNode instanceof AxReadAloudNode)) {
            return;
        }
        chrome.readingMode.initAxPositionWithNode(textNode.axNodeId);
    }
    moveSpeechForward() {
        chrome.readingMode.movePositionToNextGranularity();
    }
    moveSpeechBackwards() {
        chrome.readingMode.movePositionToPreviousGranularity();
    }
}
