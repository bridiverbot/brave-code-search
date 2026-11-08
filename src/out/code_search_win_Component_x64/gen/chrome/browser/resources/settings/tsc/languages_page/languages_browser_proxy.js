// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used from the languages section
 * to interact with the browser.
 */
// 
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class LanguagesBrowserProxyImpl {
    // 
    setProspectiveUiLanguage(languageCode) {
        chrome.send('setProspectiveUILanguage', [languageCode]);
    }
    getProspectiveUiLanguage() {
        return sendWithPromise('getProspectiveUILanguage');
    }
    // 
    getLanguageSettingsPrivate() {
        return chrome.languageSettingsPrivate;
    }
    static getInstance() {
        return instance || (instance = new LanguagesBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
