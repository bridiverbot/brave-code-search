// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter, PageHandlerFactory, PageHandlerRemote } from './batch_upload.mojom-webui.js';
export class BatchUploadBrowserProxyImpl {
    callbackRouter;
    handler;
    constructor() {
        this.callbackRouter = new PageCallbackRouter();
        this.handler = new PageHandlerRemote();
        PageHandlerFactory.getRemote().createBatchUploadHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
    }
    static getInstance() {
        return instance || (instance = new BatchUploadBrowserProxyImpl());
    }
    static setInstance(proxy) {
        instance = proxy;
    }
}
let instance = null;
