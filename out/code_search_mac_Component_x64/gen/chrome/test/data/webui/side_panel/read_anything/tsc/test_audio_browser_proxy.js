// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { FakeChromeEvent } from 'chrome-untrusted://webui-test/fake_chrome_event.js';
import { TestBrowserProxy } from 'chrome-untrusted://webui-test/test_browser_proxy.js';
export class TestAudioBrowserProxy extends TestBrowserProxy {
    languageChanged = new FakeChromeEvent();
    onLockScreen = new FakeChromeEvent();
    onTabMuteStateChange = new FakeChromeEvent();
    onTtsEngineInstalled = new FakeChromeEvent();
    readingModeWillClose = new FakeChromeEvent();
    setPlayOnOpen = new FakeChromeEvent();
    updateVoicePackStatus = new FakeChromeEvent();
    speechRate = 1.0;
    highlightGranularity = 0;
    autoHighlighting = 0;
    wordHighlighting = 1;
    phraseHighlighting = 2;
    sentenceHighlighting = 3;
    noHighlighting = 4;
    isPhraseHighlightingEnabledFlag = false;
    defaultLanguageForSpeech = '';
    baseLanguageForSpeech = '';
    storedVoice = '';
    languagesEnabledInPref = new Set();
    installedLangs = [];
    uninstalledLangs = [];
    requestInfoLangs = [];
    keyboardShortcutStopSource = 0;
    engineErrorStopSource = 1;
    engineInterruptStopSource = 2;
    contentFinishedStopSource = 3;
    pauseButtonStopSource = 4;
    unexpectedUpdateContentStopSource = 5;
    localeToDisplayName = {};
    constructor() {
        super([
            'getSpeechRate',
            'getHighlightGranularity',
            'getAutoHighlighting',
            'getWordHighlighting',
            'getPhraseHighlighting',
            'getSentenceHighlighting',
            'getNoHighlighting',
            'isPhraseHighlightingEnabled',
            'getDisplayNameForLocale',
            'getDefaultLanguageForSpeech',
            'getBaseLanguageForSpeech',
            'getStoredVoice',
            'getLanguagesEnabledInPref',
            'isHighlightOn',
            'onSpeechRateChange',
            'onHighlightGranularityChanged',
            'onVoiceChange',
            'onLanguagePrefChange',
            'sendGetVoicePackInfoRequest',
            'sendInstallVoicePackRequest',
            'sendUninstallVoiceRequest',
            'onIsSpeechActiveChanged',
            'onIsAudioCurrentlyPlayingChanged',
            'onAiPlaybackStateChanged',
            'onSpeechEngineFirstStall',
            'onSpeechEngineStalled',
            'getKeyboardShortcutStopSource',
            'getEngineErrorStopSource',
            'getEngineInterruptStopSource',
            'getContentFinishedStopSource',
            'getPauseButtonStopSource',
            'getUnexpectedUpdateContentStopSource',
        ]);
    }
    getSpeechRate() {
        this.methodCalled('getSpeechRate');
        return this.speechRate;
    }
    getHighlightGranularity() {
        this.methodCalled('getHighlightGranularity');
        return this.highlightGranularity;
    }
    getAutoHighlighting() {
        this.methodCalled('getAutoHighlighting');
        return this.autoHighlighting;
    }
    getWordHighlighting() {
        this.methodCalled('getWordHighlighting');
        return this.wordHighlighting;
    }
    getPhraseHighlighting() {
        this.methodCalled('getPhraseHighlighting');
        return this.phraseHighlighting;
    }
    getSentenceHighlighting() {
        this.methodCalled('getSentenceHighlighting');
        return this.sentenceHighlighting;
    }
    getNoHighlighting() {
        this.methodCalled('getNoHighlighting');
        return this.noHighlighting;
    }
    isPhraseHighlightingEnabled() {
        this.methodCalled('isPhraseHighlightingEnabled');
        return this.isPhraseHighlightingEnabledFlag;
    }
    getDisplayNameForLocale(locale, displayLocale) {
        this.methodCalled('getDisplayNameForLocale', locale, displayLocale);
        return this.localeToDisplayName[locale] || locale;
    }
    getDefaultLanguageForSpeech() {
        this.methodCalled('getDefaultLanguageForSpeech');
        return this.defaultLanguageForSpeech;
    }
    getBaseLanguageForSpeech() {
        this.methodCalled('getBaseLanguageForSpeech');
        return this.baseLanguageForSpeech;
    }
    getStoredVoice() {
        this.methodCalled('getStoredVoice');
        return this.storedVoice;
    }
    getLanguagesEnabledInPref() {
        this.methodCalled('getLanguagesEnabledInPref');
        return Array.from(this.languagesEnabledInPref);
    }
    isHighlightOn() {
        this.methodCalled('isHighlightOn');
        return this.highlightGranularity !== this.noHighlighting;
    }
    onSpeechRateChange(rate) {
        this.methodCalled('onSpeechRateChange', rate);
        this.speechRate = rate;
    }
    onHighlightGranularityChanged(granularity) {
        this.methodCalled('onHighlightGranularityChanged', granularity);
        this.highlightGranularity = granularity;
    }
    onVoiceChange(voice, lang) {
        this.methodCalled('onVoiceChange', voice, lang);
    }
    onLanguagePrefChange(lang, enabled) {
        this.methodCalled('onLanguagePrefChange', lang, enabled);
        if (enabled) {
            this.languagesEnabledInPref.add(lang);
        }
        else {
            this.languagesEnabledInPref.delete(lang);
        }
    }
    sendGetVoicePackInfoRequest(lang) {
        this.methodCalled('sendGetVoicePackInfoRequest', lang);
        this.requestInfoLangs.push(lang);
    }
    sendInstallVoicePackRequest(lang) {
        this.methodCalled('sendInstallVoicePackRequest', lang);
        this.installedLangs.push(lang);
    }
    sendUninstallVoiceRequest(lang) {
        this.methodCalled('sendUninstallVoiceRequest', lang);
        this.uninstalledLangs.push(lang);
    }
    onIsSpeechActiveChanged(isSpeechActive) {
        this.methodCalled('onIsSpeechActiveChanged', isSpeechActive);
    }
    onIsAudioCurrentlyPlayingChanged(isAudioCurrentlyPlaying) {
        this.methodCalled('onIsAudioCurrentlyPlayingChanged', isAudioCurrentlyPlaying);
    }
    onAiPlaybackStateChanged(enabled) {
        this.methodCalled('onAiPlaybackStateChanged', enabled);
    }
    onSpeechEngineFirstStall() {
        this.methodCalled('onSpeechEngineFirstStall');
    }
    onSpeechEngineStalled() {
        this.methodCalled('onSpeechEngineStalled');
    }
    getKeyboardShortcutStopSource() {
        this.methodCalled('getKeyboardShortcutStopSource');
        return this.keyboardShortcutStopSource;
    }
    getEngineErrorStopSource() {
        this.methodCalled('getEngineErrorStopSource');
        return this.engineErrorStopSource;
    }
    getEngineInterruptStopSource() {
        this.methodCalled('getEngineInterruptStopSource');
        return this.engineInterruptStopSource;
    }
    getContentFinishedStopSource() {
        this.methodCalled('getContentFinishedStopSource');
        return this.contentFinishedStopSource;
    }
    getPauseButtonStopSource() {
        this.methodCalled('getPauseButtonStopSource');
        return this.pauseButtonStopSource;
    }
    getUnexpectedUpdateContentStopSource() {
        this.methodCalled('getUnexpectedUpdateContentStopSource');
        return this.unexpectedUpdateContentStopSource;
    }
}
