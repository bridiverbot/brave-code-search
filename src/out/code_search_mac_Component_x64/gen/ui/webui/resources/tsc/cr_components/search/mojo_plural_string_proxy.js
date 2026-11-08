// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PluralStringProvider } from './plural_string_provider.mojom-webui.js';
let instance = null;
/**
 * PluralStringProxy backed by the plural_string.mojom.PluralStringProvider
 * interface. Unlike PluralStringProxyImpl this does not rely on chrome.send, so
 * it also works in non-WebUI hosts such as extension pages.
 *
 * Used by the shared searchbox and composebox components. Every host that
 * renders components using this (e.g. the composebox contextual action menu or
 * entrypoint button) must bind plural_string.mojom.PluralStringProvider;
 * requesting an unbound interface terminates the renderer. Tests that render
 * such components on a host without the binding should install a fake via
 * `MojoPluralStringProxy.setInstance()`.
 */
export class MojoPluralStringProxy {
    remote_ = null;
    async getPluralString(messageName, itemCount) {
        // Bind lazily so hosts that never need a plural string don't request the
        // interface.
        if (!this.remote_) {
            this.remote_ = PluralStringProvider.getRemote();
        }
        const { text } = await this.remote_.getPluralString(messageName, itemCount);
        return text;
    }
    // The tuple variants are not supported.
    getPluralStringTupleWithComma() {
        return Promise.reject(new Error('Not supported'));
    }
    getPluralStringTupleWithPeriods() {
        return Promise.reject(new Error('Not supported'));
    }
    static getInstance() {
        return instance || (instance = new MojoPluralStringProxy());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
