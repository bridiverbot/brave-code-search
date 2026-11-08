// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class PasskeysBrowserProxyImpl {
    hasPasskeys() {
        return sendWithPromise('passkeysHasPasskeys');
    }
    enumerate() {
        return sendWithPromise('passkeysEnumerate');
    }
    delete(credentialId) {
        return sendWithPromise('passkeysDelete', credentialId);
    }
    edit(credentialId, newUsername) {
        return sendWithPromise('passkeysEdit', credentialId, newUsername);
    }
    static getInstance() {
        return passkeysProxyInstance ||
            (passkeysProxyInstance = new PasskeysBrowserProxyImpl());
    }
    static setInstance(obj) {
        passkeysProxyInstance = obj;
    }
}
let passkeysProxyInstance = null;
