// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class BraveWeb3DomainsBrowserProxyImpl {
    getDecentralizedDnsResolveMethodList() {
        return sendWithPromise('getDecentralizedDnsResolveMethodList');
    }
    getEnsOffchainResolveMethodList() {
        return sendWithPromise('getEnsOffchainResolveMethodList');
    }
    static getInstance() {
        return instance || (instance = new BraveWeb3DomainsBrowserProxyImpl());
    }
}
let instance = null;
