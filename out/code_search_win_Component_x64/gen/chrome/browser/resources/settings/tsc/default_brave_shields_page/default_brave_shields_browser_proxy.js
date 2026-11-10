// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at https://mozilla.org/MPL/2.0/.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class DefaultBraveShieldsBrowserProxyImpl {
    isAdControlEnabled() {
        return sendWithPromise('isAdControlEnabled');
    }
    setAdControlType(value) {
        chrome.send('setAdControlType', [value]);
    }
    isFirstPartyCosmeticFilteringEnabled() {
        return sendWithPromise('isFirstPartyCosmeticFilteringEnabled');
    }
    setCosmeticFilteringControlType(value) {
        chrome.send('setCosmeticFilteringControlType', [value]);
    }
    getCookieControlType() {
        return sendWithPromise('getCookieControlType');
    }
    setCookieControlType(value) {
        chrome.send('setCookieControlType', [value]);
    }
    getFingerprintingControlType() {
        return sendWithPromise('getFingerprintingControlType');
    }
    setFingerprintingControlType(value) {
        chrome.send('setFingerprintingControlType', [value]);
    }
    getFingerprintingBlockEnabled() {
        return sendWithPromise('getFingerprintingBlockEnabled');
    }
    setFingerprintingBlockEnabled(value) {
        chrome.send('setFingerprintingBlockEnabled', [value]);
    }
    getHttpsUpgradeControlType() {
        return sendWithPromise('getHttpsUpgradeControlType');
    }
    setHttpsUpgradeControlType(value) {
        chrome.send('setHttpsUpgradeControlType', [value]);
    }
    getNoScriptControlType() {
        return sendWithPromise('getNoScriptControlType');
    }
    setNoScriptControlType(value) {
        chrome.send('setNoScriptControlType', [value]);
    }
    getForgetFirstPartyStorageEnabled() {
        return sendWithPromise('getForgetFirstPartyStorageEnabled');
    }
    setForgetFirstPartyStorageEnabled(value) {
        chrome.send('setForgetFirstPartyStorageEnabled', [value]);
    }
    setContactInfoSaveFlag(value) {
        chrome.send('setContactInfoSaveFlag', [value]);
    }
    getContactInfo() {
        return sendWithPromise('getContactInfo');
    }
    getHideBlockAllCookieTogle() {
        return sendWithPromise('getHideBlockAllCookieTogle');
    }
    getAllowElementBlockerInPrivateModeEnabled() {
        return sendWithPromise('getAllowElementBlockerInPrivateModeEnabled');
    }
    setAllowElementBlockerInPrivateModeEnabled(value) {
        chrome.send('setAllowElementBlockerInPrivateModeEnabled', [value]);
    }
    static getInstance() {
        return instance || (instance = new DefaultBraveShieldsBrowserProxyImpl());
    }
}
let instance = null;
