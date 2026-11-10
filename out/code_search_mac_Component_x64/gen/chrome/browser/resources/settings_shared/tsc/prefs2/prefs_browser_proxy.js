// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class PrefsBrowserProxy {
    getAllPrefs() {
        return chrome.settingsPrivate.getAllPrefs();
    }
    getPref(name) {
        return chrome.settingsPrivate.getPref(name);
    }
    setPref(name, value, pageId) {
        return chrome.settingsPrivate.setPref(name, value, pageId);
    }
    get onPrefsChanged() {
        return chrome.settingsPrivate.onPrefsChanged;
    }
    static getInstance() {
        return instance || (instance = new PrefsBrowserProxy());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
