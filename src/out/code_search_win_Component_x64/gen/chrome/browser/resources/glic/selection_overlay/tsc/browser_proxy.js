// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { //
SelectionOverlayPageCallbackRouter, //
SelectionOverlayPageHandlerFactory, //
SelectionOverlayPageHandlerRemote, //
 } from './selection_overlay.mojom-webui.js';
let instance = null;
export class BrowserProxyImpl {
    callbackRouter = new SelectionOverlayPageCallbackRouter();
    handler = new SelectionOverlayPageHandlerRemote();
    constructor() {
        const factory = SelectionOverlayPageHandlerFactory.getRemote();
        factory.createPageHandler(this.handler.$.bindNewPipeAndPassReceiver(), this.callbackRouter.$.bindNewPipeAndPassRemote());
    }
    static getInstance() {
        return instance || (instance = new BrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
