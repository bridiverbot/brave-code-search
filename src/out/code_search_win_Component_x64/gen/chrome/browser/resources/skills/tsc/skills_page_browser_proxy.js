// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageHandlerFactory, PageHandlerRemote, SkillsPageCallbackRouter } from './skills.mojom-webui.js';
export class SkillsPageBrowserProxy {
    handler;
    callbackRouter;
    constructor() {
        this.handler = new PageHandlerRemote();
        this.callbackRouter = new SkillsPageCallbackRouter();
        PageHandlerFactory.getRemote().createPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
    }
    static getInstance() {
        return instance || (instance = new SkillsPageBrowserProxy());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
