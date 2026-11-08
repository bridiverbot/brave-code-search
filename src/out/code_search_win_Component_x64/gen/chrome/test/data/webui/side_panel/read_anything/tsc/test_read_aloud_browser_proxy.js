// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome-untrusted://webui-test/test_browser_proxy.js';
export class TestReadAloudModelBrowserProxy extends TestBrowserProxy {
    currentTextSegments_ = [];
    highlightsForCurrentSegmentIndex_ = [];
    currentTextContent_ = '';
    isInitialized_ = false;
    constructor() {
        super([
            'getHighlightForCurrentSegmentIndex',
            'getCurrentTextSegments',
            'getCurrentTextContent',
            'getAccessibleText',
            'resetSpeechToBeginning',
            'moveSpeechForward',
            'moveSpeechBackwards',
            'isInitialized',
            'init',
            'resetModel',
        ]);
    }
    setHighlightForCurrentSegmentIndex(highlights) {
        this.highlightsForCurrentSegmentIndex_ = highlights;
    }
    getHighlightForCurrentSegmentIndex(index, phrases) {
        this.methodCalled('getHighlightForCurrentSegmentIndex', index, phrases);
        return this.highlightsForCurrentSegmentIndex_;
    }
    setCurrentTextSegments(segments) {
        this.currentTextSegments_ = segments;
    }
    getCurrentTextSegments() {
        this.methodCalled('getCurrentTextSegments');
        return this.currentTextSegments_;
    }
    getCurrentTextContent() {
        this.methodCalled('getCurrentTextContent');
        return this.currentTextContent_;
    }
    getAccessibleText(text, maxSpeechLength) {
        this.methodCalled('getAccessibleText', text, maxSpeechLength);
        return text.substring(0, maxSpeechLength);
    }
    resetSpeechToBeginning() {
        this.methodCalled('resetSpeechToBeginning');
    }
    moveSpeechForward() {
        this.methodCalled('moveSpeechForward');
    }
    moveSpeechBackwards() {
        this.methodCalled('moveSpeechBackwards');
    }
    isInitialized() {
        this.methodCalled('isInitialized');
        return this.isInitialized_;
    }
    init(context) {
        this.methodCalled('init', context);
        this.isInitialized_ = true;
    }
    resetModel() {
        this.methodCalled('resetModel');
    }
    setCurrentTextContent(content) {
        this.currentTextContent_ = content;
    }
    setInitialized(isInitialized) {
        this.isInitialized_ = isInitialized;
    }
}
