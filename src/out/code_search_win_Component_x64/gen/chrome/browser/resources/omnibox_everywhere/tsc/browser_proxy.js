// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter, PageHandlerFactory, PageHandlerRemote } from './omnibox_everywhere.mojom-webui.js';
export class OmniboxEverywhereBrowserProxyImpl {
    callbackRouter = new PageCallbackRouter();
    handler = new PageHandlerRemote();
    constructor() {
        const factory = PageHandlerFactory.getRemote();
        factory.createPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
    }
    static getInstance() {
        return instance || (instance = new OmniboxEverywhereBrowserProxyImpl());
    }
    static setInstance(proxy) {
        instance = proxy;
    }
}
let instance = null;
