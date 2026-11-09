// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome-untrusted://webui-test/test_browser_proxy.js';
// Test version of the BrowserProxy used in connecting Reading Mode to
// chrome.metricsPrivate or chrome.readingMode for logging purposes.
export class TestMetricsBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'incrementMetricCount',
            'recordEmptyState',
            'recordExtensionState',
            'recordHighlightOff',
            'recordHighlightOn',
            'recordHighlightGranularity',
            'recordLanguage',
            'recordLineFocusSession',
            'recordLineFocusToggled',
            'recordMathMlDistillationStatus',
            'recordNewPage',
            'recordNewPageWithSpeech',
            'recordSpeechError',
            'recordSpeechPlaybackLength',
            'recordSpeechPlaybackLengthLegacy',
            'recordSpeechSettingsChange',
            'recordSpeechStopSource',
            'recordSettingsAction',
            'recordTextSettingsChange',
            'recordTime',
            'recordVoiceSpeed',
            'recordVoiceType',
            'recordVoiceLanguageChange',
            'recordCount',
            'recordBoolean',
            'updateWordsSeen',
            'updateWordsHeard',
            'startLineFocusSession',
            'incrementLineFocusKeyboardLines',
            'incrementLineFocusSpeechLines',
            'addLineFocusScrollDistance',
            'addLineFocusMouseDistance',
        ]);
    }
    incrementMetricCount(umaName) {
        this.methodCalled('incrementMetricCount', umaName);
    }
    recordEmptyState() {
        this.methodCalled('recordEmptyState');
    }
    recordLineFocusSession() {
        this.methodCalled('recordLineFocusSession');
    }
    recordLineFocusToggled(enabled) {
        this.methodCalled('recordLineFocusToggled', enabled);
    }
    recordNewPage() {
        this.methodCalled('recordNewPage');
    }
    recordNewPageWithSpeech() {
        this.methodCalled('recordNewPageWithSpeech');
    }
    recordHighlightOn() {
        this.methodCalled('recordHighlightOn');
    }
    recordHighlightOff() {
        this.methodCalled('recordHighlightOff');
    }
    recordHighlightGranularity(highlight) {
        this.methodCalled('recordHighlightGranularity', highlight);
    }
    recordVoiceType(voiceType) {
        this.methodCalled('recordVoiceType', voiceType);
    }
    recordVoiceLanguageChange() {
        this.methodCalled('recordVoiceLanguageChange');
    }
    recordLanguage(lang) {
        this.methodCalled('recordLanguage', lang);
    }
    recordSettingsAction(settingsAction) {
        this.methodCalled('recordSettingsAction', settingsAction);
    }
    recordTextSettingsChange(settingsChange) {
        this.methodCalled('recordTextSettingsChange', settingsChange);
    }
    recordSpeechSettingsChange(settingsChange) {
        this.methodCalled('recordSpeechSettingsChange', settingsChange);
    }
    recordSpeechStopSource(source) {
        this.methodCalled('recordSpeechStopSource', source);
    }
    recordVoiceSpeed(index) {
        this.methodCalled('recordVoiceSpeed', index);
    }
    recordSpeechError(error) {
        this.methodCalled('recordSpeechError', error);
    }
    recordTime(umaName, time) {
        this.methodCalled('recordTime', umaName, time);
    }
    recordSpeechPlaybackLength(umaName, time) {
        this.methodCalled('recordSpeechPlaybackLength', umaName, time);
    }
    recordSpeechPlaybackLengthLegacy(time) {
        this.methodCalled('recordSpeechPlaybackLengthLegacy', time);
    }
    recordExtensionState() {
        this.methodCalled('recordExtensionState');
    }
    recordCount(umaName, count) {
        this.methodCalled('recordCount', umaName, count);
    }
    recordBoolean(umaName, value) {
        this.methodCalled('recordBoolean', umaName, value);
    }
    recordMathMlDistillationStatus(status) {
        this.methodCalled('recordMathMlDistillationStatus', status);
    }
    updateWordsSeen(wordsSeen) {
        this.methodCalled('updateWordsSeen', wordsSeen);
    }
    updateWordsHeard(wordsHeard) {
        this.methodCalled('updateWordsHeard', wordsHeard);
    }
    startLineFocusSession() {
        this.methodCalled('startLineFocusSession');
    }
    incrementLineFocusKeyboardLines() {
        this.methodCalled('incrementLineFocusKeyboardLines');
    }
    incrementLineFocusSpeechLines() {
        this.methodCalled('incrementLineFocusSpeechLines');
    }
    addLineFocusScrollDistance(distance) {
        this.methodCalled('addLineFocusScrollDistance', distance);
    }
    addLineFocusMouseDistance(distance) {
        this.methodCalled('addLineFocusMouseDistance', distance);
    }
}
