/* Copyright (c) 2022 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import { sendWithPromise, addWebUiListener } from 'chrome://resources/js/cr.js';
export class Scriptlet {
    name;
    kind = {
        mime: 'application/javascript'
    };
    content;
}
export var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["kOK"] = 0] = "kOK";
    ErrorCode[ErrorCode["kInvalidName"] = 1] = "kInvalidName";
    ErrorCode[ErrorCode["kAlreadyExists"] = 2] = "kAlreadyExists";
    ErrorCode[ErrorCode["kNotFound"] = 3] = "kNotFound";
})(ErrorCode || (ErrorCode = {}));
export class BraveAdblockBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new BraveAdblockBrowserProxyImpl());
    }
    getRegionalLists() {
        return sendWithPromise('brave_adblock.getRegionalLists');
    }
    enableFilterList(uuid, enabled) {
        chrome.send('brave_adblock.enableFilterList', [uuid, enabled]);
    }
    updateFilterLists() {
        return sendWithPromise('brave_adblock.updateFilterLists');
    }
    getCustomFilters() {
        return sendWithPromise('brave_adblock.getCustomFilters');
    }
    updateCustomFilters(value) {
        chrome.send('brave_adblock.updateCustomFilters', [value]);
    }
    getListSubscriptions() {
        return sendWithPromise('brave_adblock.getListSubscriptions');
    }
    setSubscriptionEnabled(url, enabled) {
        chrome.send('brave_adblock.setSubscriptionEnabled', [url, enabled]);
    }
    addSubscription(url) {
        chrome.send('brave_adblock.addSubscription', [url]);
    }
    updateSubscription(url) {
        chrome.send('brave_adblock.updateSubscription', [url]);
    }
    deleteSubscription(url) {
        chrome.send('brave_adblock.deleteSubscription', [url]);
    }
    viewSubscription(url) {
        chrome.send('brave_adblock.viewSubscription', [url]);
    }
    getCustomScriptlets() {
        return sendWithPromise('brave_adblock.getCustomScriptlets')
            .then((scriptlets) => {
            for (const scriptlet of scriptlets) {
                scriptlet.content = this.base64ToUtf8_(scriptlet.content);
            }
            return scriptlets;
        })
            .catch((error) => {
            throw error;
        });
    }
    addCustomScriptlet(scriptlet) {
        scriptlet.content = this.utf8ToBase64_(scriptlet.content);
        return sendWithPromise('brave_adblock.addCustomScriptlet', scriptlet);
    }
    updateCustomScriptlet(name, scriptlet) {
        scriptlet.content = this.utf8ToBase64_(scriptlet.content);
        return sendWithPromise('brave_adblock.updateCustomScriptlet', name, scriptlet);
    }
    removeCustomScriptlet(name) {
        return sendWithPromise('brave_adblock.removeCustomScriptlet', name);
    }
    addWebUiListener(eventName, callback) {
        addWebUiListener(eventName, callback);
    }
    utf8ToBase64_(str) {
        const uint8Array = new TextEncoder().encode(str);
        let binaryString = '';
        const chunkSize = 1024;
        for (let i = 0; i < uint8Array.length; i += chunkSize) {
            const chunk = uint8Array.slice(i, i + chunkSize);
            binaryString += String.fromCharCode(...chunk);
        }
        const base64String = btoa(binaryString);
        // Replace with uint8Array.toBase64() when TypeScript adds support for 
        // toBase64 method.
        return base64String;
    }
    base64ToUtf8_(base64) {
        const binaryString = atob(base64);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return new TextDecoder().decode(bytes);
    }
}
let instance = null;
