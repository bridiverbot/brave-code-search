// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { LanguageBrowserProxyImpl } from 'chrome-untrusted://lens-overlay/language_browser_proxy.js';
/**
 * Test version of the LanguageBrowserProxy used in connecting Lens Overlay to
 * the language settings API.
 */
export class TestLanguageBrowserProxy extends LanguageBrowserProxyImpl {
    storedLocale = '';
    storedSourceLanguages = [];
    storedTargetLanguages = [];
    getClientLanguageList() {
        return Promise.resolve(structuredClone([
            {
                // English language.
                languageCode: 'en',
                name: 'English',
            },
            {
                // A standalone language.
                languageCode: 'sw',
                name: 'Swahili',
            },
        ]));
    }
    getTranslateTargetLanguage() {
        return Promise.resolve('en');
    }
    storeLanguages(locale, sourceLanguages, targetLanguages) {
        this.storedLocale = locale;
        this.storedSourceLanguages = sourceLanguages;
        this.storedTargetLanguages = targetLanguages;
        // We need to call the original function so that the timestamp is properly
        // set.
        super.storeLanguages(locale, sourceLanguages, targetLanguages);
    }
    getStoredLocale() {
        return this.storedLocale;
    }
    getStoredSourceLanguages() {
        return this.storedSourceLanguages;
    }
    getStoredTargetLanguages() {
        return this.storedTargetLanguages;
    }
}
