// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class ProfileCustomizationBrowserProxyImpl {
    initialized() {
        return sendWithPromise('initialized');
    }
    getAvailableIcons() {
        return sendWithPromise('getAvailableIcons');
    }
    done(profileName) {
        chrome.send('done', [profileName]);
    }
    skip() {
        chrome.send('skip');
    }
    deleteProfile() {
        chrome.send('deleteProfile');
    }
    setAvatarIcon(avatarIndex) {
        chrome.send('setAvatarIcon', [avatarIndex]);
    }
    static getInstance() {
        return instance || (instance = new ProfileCustomizationBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
