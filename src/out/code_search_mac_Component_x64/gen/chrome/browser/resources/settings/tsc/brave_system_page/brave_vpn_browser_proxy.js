// Copyright (c) 2023 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class BraveVPNBrowserProxyImpl {
    isWireguardServiceInstalled() {
        return sendWithPromise('isWireguardServiceInstalled');
    }
    isBraveVpnConnected() {
        return sendWithPromise('isBraveVpnConnected');
    }
    showInSystemTray() {
        return sendWithPromise('showInSystemTray');
    }
    setShowInSystemTray(value) {
        chrome.send('setShowInSystemTray', [value]);
    }
    static getInstance() {
        return instance || (instance = new BraveVPNBrowserProxyImpl());
    }
}
let instance = null;
