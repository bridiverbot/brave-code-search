// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { getNotification, NotificationType } from './voice_language_conversions.js';
// Notifies listeners of language pack status changes.
export class VoiceNotificationManager {
    listeners_ = new Set();
    // Separately keep track of languages in the middle of downloading as we want
    // to always show that notification.
    downloadingLanguages_ = new Set();
    addListener(listener) {
        this.listeners_.add(listener);
        // Tell listeners of all current downloading languages.
        this.downloadingLanguages_.forEach(language => listener.notify(NotificationType.DOWNLOADING, language));
    }
    removeListener(listener) {
        this.listeners_.delete(listener);
    }
    clear() {
        this.listeners_.clear();
        this.downloadingLanguages_.clear();
    }
    onVoiceStatusChange(language, status, availableVoices, onLine = window.navigator.onLine) {
        const notification = getNotification(language, status, availableVoices, onLine);
        if (notification === NotificationType.DOWNLOADING) {
            this.downloadingLanguages_.add(language);
        }
        else if (this.downloadingLanguages_.has(language)) {
            this.downloadingLanguages_.delete(language);
        }
        this.listeners_.forEach(listener => listener.notify(notification, language));
    }
    onCancelDownload(language) {
        if (this.downloadingLanguages_.has(language)) {
            this.downloadingLanguages_.delete(language);
            this.listeners_.forEach(listener => listener.notify(NotificationType.NONE, language));
        }
    }
    onNoEngineConnection() {
        const type = window.navigator.onLine ?
            NotificationType.GOOGLE_VOICES_UNAVAILABLE :
            NotificationType.NO_INTERNET;
        this.listeners_.forEach(listener => listener.notify(type));
    }
    static getInstance() {
        return instance || (instance = new VoiceNotificationManager());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
