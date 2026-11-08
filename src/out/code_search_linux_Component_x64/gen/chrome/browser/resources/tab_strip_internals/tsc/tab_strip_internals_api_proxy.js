// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter, PageHandlerFactory, PageHandlerRemote } from './tab_strip_internals.mojom-webui.js';
/**
 * Implementation of TabStripInternalsApiProxy using Mojo bindings.
 */
export class TabStripInternalsApiProxyImpl {
    // Used to listen to browser-sent events.
    callbackRouter;
    // User to invoke functions browser-side functionality.
    handler;
    constructor() {
        this.callbackRouter = new PageCallbackRouter();
        this.handler = new PageHandlerRemote();
        const factory = PageHandlerFactory.getRemote();
        factory.createPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
    }
    static getInstance() {
        return instance || (instance = new TabStripInternalsApiProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
    /**
     * Fetch data from the browser (C++ backend).
     */
    getTabStripData() {
        return this.handler.getTabStripData();
    }
    /**
     * Listen to updates from the browser (C++ backend).
     */
    getCallbackRouter() {
        return this.callbackRouter;
    }
}
let instance = null;
