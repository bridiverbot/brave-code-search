// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter, PageHandlerFactory, PageHandlerRemote } from './slim_web_view.mojom-webui.js';
export { PageHandler_PermissionResponseAction as PermissionResponseAction } from './slim_web_view.mojom-webui.js';
export class BrowserProxyImpl {
    callbackRouter;
    handler;
    constructor() {
        this.callbackRouter = new PageCallbackRouter();
        this.handler = new PageHandlerRemote();
        PageHandlerFactory.getRemote().createPageHandler(this.handler.$.bindNewPipeAndPassReceiver(), this.callbackRouter.$.bindNewPipeAndPassRemote());
    }
    static getInstance() {
        return instance || (instance = new BrowserProxyImpl());
    }
    static setInstance(proxy) {
        instance = proxy;
    }
}
let instance = null;
