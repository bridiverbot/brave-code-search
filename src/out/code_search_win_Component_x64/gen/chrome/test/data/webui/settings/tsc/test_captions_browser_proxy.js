// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestCaptionsBrowserProxy extends TestBrowserProxy {
    availableLanguagePacks_;
    installedLanguagePacks_;
    constructor() {
        super([
            'openSystemCaptionsDialog',
            'liveCaptionSectionReady',
            'getInstalledLanguagePacks',
            'getAvailableLanguagePacks',
            'getTranslatableLanguages',
            'removeLanguagePack',
            'installLanguagePacks',
            'installSpeechRecognitionSmallExpertModel',
            'deleteSpeechRecognitionSmallExpertModel',
        ]);
        this.availableLanguagePacks_ = [
            {
                displayName: 'English',
                nativeDisplayName: 'English',
                code: 'en-US',
                downloadProgress: '0%',
            },
            {
                displayName: 'French',
                nativeDisplayName: 'French',
                code: 'fr-FR',
                downloadProgress: '0%',
            },
        ];
        this.installedLanguagePacks_ = [{
                displayName: 'English',
                nativeDisplayName: 'English',
                code: 'en-US',
                downloadProgress: '0%',
            }];
    }
    openSystemCaptionsDialog() {
        this.methodCalled('openSystemCaptionsDialog');
        return Promise.resolve();
    }
    liveCaptionSectionReady() {
        this.methodCalled('liveCaptionSectionReady');
        return Promise.resolve();
    }
    getInstalledLanguagePacks() {
        this.methodCalled('getInstalledLanguagePacks');
        return Promise.resolve(this.installedLanguagePacks_);
    }
    getAvailableLanguagePacks() {
        this.methodCalled('getAvailableLanguagePacks');
        return Promise.resolve(this.availableLanguagePacks_);
    }
    removeLanguagePack(languageCode) {
        this.methodCalled('removeLanguagePack', languageCode);
    }
    installLanguagePacks(languageCodes) {
        this.methodCalled('installLanguagePacks', languageCodes);
    }
    installSpeechRecognitionSmallExpertModel() {
        this.methodCalled('installSpeechRecognitionSmallExpertModel');
    }
    deleteSpeechRecognitionSmallExpertModel() {
        this.methodCalled('deleteSpeechRecognitionSmallExpertModel');
    }
}
