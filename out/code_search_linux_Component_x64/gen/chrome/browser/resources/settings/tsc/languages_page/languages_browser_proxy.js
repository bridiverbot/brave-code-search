// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class LanguagesBrowserProxyImpl {
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
