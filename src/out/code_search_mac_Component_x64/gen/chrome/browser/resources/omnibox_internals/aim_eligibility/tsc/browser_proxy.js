// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter, PageHandlerFactory, PageHandlerRemote } from './aim_eligibility.mojom-webui.js';
export class BrowserProxy {
    handler;
    callbackRouter;
    constructor() {
        this.handler = new PageHandlerRemote();
        this.callbackRouter = new PageCallbackRouter();
        PageHandlerFactory.getRemote().createPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
    }
    getCallbackRouter() {
        return this.callbackRouter;
    }
    getPageHandler() {
        return this.handler;
    }
    static getInstance() {
        return instance || (instance = new BrowserProxy());
    }
}
let instance = null;
