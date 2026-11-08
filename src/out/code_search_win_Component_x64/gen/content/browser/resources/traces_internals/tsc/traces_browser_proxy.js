/* Copyright 2023 The Chromium Authors
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */
import { PageCallbackRouter, PageHandlerRemote, TracesInternalsHandlerFactory } from './traces_internals.mojom-webui.js';
/** Holds Mojo interfaces for communication with the browser process. */
export class TracesBrowserProxy {
    callbackRouter = new PageCallbackRouter();
    handler = new PageHandlerRemote();
    constructor() {
        const factory = TracesInternalsHandlerFactory.getRemote();
        factory.createPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
    }
    static getInstance() {
        return instance || (instance = new TracesBrowserProxy());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
