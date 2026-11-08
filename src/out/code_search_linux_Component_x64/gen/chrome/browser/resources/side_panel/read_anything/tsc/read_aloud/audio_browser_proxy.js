// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { EventForwarder } from '../content/read_anything_types.js';
export class AudioBrowserProxyImpl {
    languageChanged = new EventForwarder();
    onLockScreen = new EventForwarder();
    onTabMuteStateChange = new EventForwarder();
    onTtsEngineInstalled = new EventForwarder();
    readingModeWillClose = new EventForwarder();
    setPlayOnOpen = new EventForwarder();
    updateVoicePackStatus = new EventForwarder();
    constructor() {
        chrome.readingMode.languageChanged = () => {
            this.languageChanged.forward();
        };
        chrome.readingMode.onLockScreen = () => {
            this.onLockScreen.forward();
        };
        chrome.readingMode.onTabMuteStateChange = (muted) => {
            this.onTabMuteStateChange.forward(muted);
        };
        chrome.readingMode.onTtsEngineInstalled = () => {
            this.onTtsEngineInstalled.forward();
        };
        chrome.readingMode.readingModeWillClose = () => {
            this.readingModeWillClose.forward();
        };
        chrome.readingMode.setPlayOnOpen = (playOnOpen) => {
            this.setPlayOnOpen.forward(playOnOpen);
        };
        chrome.readingMode.updateVoicePackStatus =
            (lang, status) => {
                this.updateVoicePackStatus.forward(lang, status);
            };
    }
    getSpeechRate() {
        return chrome.readingMode.speechRate;
    }
    getHighlightGranularity() {
        return chrome.readingMode.highlightGranularity;
    }
    getAutoHighlighting() {
        return chrome.readingMode.autoHighlighting;
    }
    getWordHighlighting() {
        return chrome.readingMode.wordHighlighting;
    }
    getPhraseHighlighting() {
        return chrome.readingMode.phraseHighlighting;
    }
    getSentenceHighlighting() {
        return chrome.readingMode.sentenceHighlighting;
    }
    getNoHighlighting() {
        return chrome.readingMode.noHighlighting;
    }
    isPhraseHighlightingEnabled() {
        return chrome.readingMode.isPhraseHighlightingEnabled;
    }
    getDisplayNameForLocale(locale, displayLocale) {
        return chrome.readingMode.getDisplayNameForLocale(locale, displayLocale);
    }
    getDefaultLanguageForSpeech() {
        return chrome.readingMode.defaultLanguageForSpeech;
    }
    getBaseLanguageForSpeech() {
        return chrome.readingMode.baseLanguageForSpeech;
    }
    getStoredVoice() {
        return chrome.readingMode.getStoredVoice();
    }
    getLanguagesEnabledInPref() {
        return chrome.readingMode.getLanguagesEnabledInPref();
    }
    isHighlightOn() {
        return chrome.readingMode.isHighlightOn();
    }
    onSpeechRateChange(rate) {
        chrome.readingMode.onSpeechRateChange(rate);
    }
    onHighlightGranularityChanged(granularity) {
        chrome.readingMode.onHighlightGranularityChanged(granularity);
    }
    onVoiceChange(voice, lang) {
        chrome.readingMode.onVoiceChange(voice, lang);
    }
    onLanguagePrefChange(lang, enabled) {
        chrome.readingMode.onLanguagePrefChange(lang, enabled);
    }
    sendGetVoicePackInfoRequest(lang) {
        chrome.readingMode.sendGetVoicePackInfoRequest(lang);
    }
    sendInstallVoicePackRequest(lang) {
        chrome.readingMode.sendInstallVoicePackRequest(lang);
    }
    sendUninstallVoiceRequest(lang) {
        chrome.readingMode.sendUninstallVoiceRequest(lang);
    }
    onIsSpeechActiveChanged(isSpeechActive) {
        chrome.readingMode.onIsSpeechActiveChanged(isSpeechActive);
    }
    onIsAudioCurrentlyPlayingChanged(isAudioCurrentlyPlaying) {
        chrome.readingMode.onIsAudioCurrentlyPlayingChanged(isAudioCurrentlyPlaying);
    }
    onAiPlaybackStateChanged(enabled) {
        chrome.readingMode.onAiPlaybackStateChanged(enabled);
    }
    onSpeechEngineFirstStall() {
        chrome.readingMode.onSpeechEngineFirstStall();
    }
    onSpeechEngineStalled() {
        chrome.readingMode.onSpeechEngineStalled();
    }
    getKeyboardShortcutStopSource() {
        return chrome.readingMode.keyboardShortcutStopSource;
    }
    getEngineErrorStopSource() {
        return chrome.readingMode.engineErrorStopSource;
    }
    getEngineInterruptStopSource() {
        return chrome.readingMode.engineInterruptStopSource;
    }
    getContentFinishedStopSource() {
        return chrome.readingMode.contentFinishedStopSource;
    }
    getPauseButtonStopSource() {
        return chrome.readingMode.pauseButtonStopSource;
    }
    getUnexpectedUpdateContentStopSource() {
        return chrome.readingMode.unexpectedUpdateContentStopSource;
    }
    static getInstance() {
        return instance || (instance = new AudioBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
