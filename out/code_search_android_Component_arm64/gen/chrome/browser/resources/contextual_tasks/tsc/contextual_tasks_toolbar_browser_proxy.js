// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ContextualTasksToolbarUIObserverCallbackRouter, ContextualTasksToolbarUIService, PageCallbackRouter, PageHandlerFactory, PageHandlerRemote } from './contextual_tasks_toolbar.mojom-webui.js';
let instance = null;
export class ToolbarBrowserProxyImpl {
    callbackRouter;
    handler;
    toolbarUiService;
    toolbarUiObserverCallbackRouter;
    constructor() {
        this.callbackRouter = new PageCallbackRouter();
        this.handler = new PageHandlerRemote();
        const factory = PageHandlerFactory.getRemote();
        factory.createPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
        this.toolbarUiService = ContextualTasksToolbarUIService.getRemote();
        this.toolbarUiObserverCallbackRouter =
            new ContextualTasksToolbarUIObserverCallbackRouter();
    }
    static getInstance() {
        return instance || (instance = new ToolbarBrowserProxyImpl());
    }
    static setInstance(proxy) {
        instance = proxy;
    }
}
