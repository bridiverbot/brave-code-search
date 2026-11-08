// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Holds state around languages and associated voices used by read aloud.
export class VoiceLanguageModel {
    // Local representation of the status of language downloads and availability.
    localInstallState_ = new Map();
    // Cache of responses from the tts engine.
    cachedServerInstallState_ = new Map();
    // All possible available voices for the current speech engine.
    availableVoices_ = [];
    // The set of languages found in availableVoices_.
    availableLangs_ = new Set();
    // The set of languages currently enabled for use by Read Aloud. This
    // includes user-enabled languages and auto-downloaded languages. The former
    // are stored in preferences. The latter are not.
    enabledLangs_ = new Set();
    // These are languages that don't exist when restoreEnabledLanguagesFromPref()
    // is first called when the engine is getting set up. We need to disable
    // unavailable languages, but since it's possible that these languages may
    // become available once the TTS engine finishes setting up, we want to save
    // them so they can be used as soon as they are available. This can happen
    // when a natural voice is installed (e.g. Danish) when there isn't an
    // equivalent system voice.
    // 
    possiblyDisabledLangs_ = new Set();
    // 
    // Set of languages of the browser and/or of the pages navigated to that we
    // need to download Natural voices for automatically
    languagesForVoiceDownloads_ = new Set();
    // When a new TTS Engine extension is loaded into reading mode, we want to try
    // to install new natural voices from it. However, the new engine may not be
    // ready until it calls onvoiceschanged, so set this and
    // request the install when that's called.
    waitingForNewEngine_ = false;
    currentVoice_ = null;
    currentLanguage_ = '';
    // In-flight language download requested by single-selection UI.
    pendingTargetLanguage_ = null;
    // Set of languages with in-flight voice pack info requests.
    pendingLanguageRequests_ = new Set();
    getWaitingForNewEngine() {
        return this.waitingForNewEngine_;
    }
    setWaitingForNewEngine(waitingForNewEngine) {
        this.waitingForNewEngine_ = waitingForNewEngine;
    }
    addLanguageForDownload(lang) {
        this.languagesForVoiceDownloads_.add(lang);
    }
    removeLanguageForDownload(lang) {
        this.languagesForVoiceDownloads_.delete(lang);
    }
    hasLanguageForDownload(lang) {
        return this.languagesForVoiceDownloads_.has(lang);
    }
    getEnabledLangs() {
        return this.enabledLangs_;
    }
    enableLang(lang) {
        this.enabledLangs_.add(lang);
    }
    disableLang(lang) {
        this.enabledLangs_.delete(lang);
    }
    getAvailableLangs() {
        return this.availableLangs_;
    }
    setAvailableLangs(langs) {
        this.availableLangs_ = new Set(langs);
    }
    getAvailableVoices() {
        return this.availableVoices_;
    }
    setAvailableVoices(voices) {
        this.availableVoices_ = voices;
    }
    // 
    getPossiblyDisabledLangs() {
        return this.possiblyDisabledLangs_;
    }
    addPossiblyDisabledLang(lang) {
        this.possiblyDisabledLangs_.add(lang);
    }
    removePossiblyDisabledLang(lang) {
        this.possiblyDisabledLangs_.delete(lang);
    }
    // 
    getServerStatus(lang) {
        const status = this.cachedServerInstallState_.get(lang);
        return (status === undefined) ? null : status;
    }
    setServerStatus(lang, status) {
        this.cachedServerInstallState_.set(lang, status);
    }
    getLocalStatus(lang) {
        const status = this.localInstallState_.get(lang);
        return (status === undefined) ? null : status;
    }
    setLocalStatus(lang, status) {
        this.localInstallState_.set(lang, status);
    }
    getServerLanguages() {
        return Array.from(this.cachedServerInstallState_.keys());
    }
    getCurrentVoice() {
        return this.currentVoice_ || null;
    }
    setCurrentVoice(voice) {
        this.currentVoice_ = voice;
    }
    getCurrentLanguage() {
        return this.currentLanguage_;
    }
    setCurrentLanguage(language) {
        this.currentLanguage_ = language;
    }
    getPendingTargetLanguage() {
        return this.pendingTargetLanguage_;
    }
    setPendingTargetLanguage(lang) {
        this.pendingTargetLanguage_ = lang;
    }
    getPendingLanguageRequests() {
        return this.pendingLanguageRequests_;
    }
    addPendingLanguageRequest(lang) {
        this.pendingLanguageRequests_.add(lang);
    }
    removePendingLanguageRequest(lang) {
        this.pendingLanguageRequests_.delete(lang);
    }
    hasPendingLanguageRequest(lang) {
        return this.pendingLanguageRequests_.has(lang);
    }
    clearPendingLanguageRequests() {
        this.pendingLanguageRequests_.clear();
    }
}
