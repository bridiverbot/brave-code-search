// Copyright (c) 2025 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import { ContainersSettingsUICallbackRouter, ContainersSettingsHandler, } from '../containers.mojom-webui.js';
let instance = null;
export class ContainersSettingsHandlerBrowserProxy {
    handler;
    callbackRouter;
    constructor(handler, callbackRouter) {
        this.handler = handler;
        this.callbackRouter = callbackRouter;
    }
    static getInstance() {
        if (!instance) {
            const handler = ContainersSettingsHandler.getRemote();
            const callbackRouter = new ContainersSettingsUICallbackRouter();
            handler.bindUI(callbackRouter.$.bindNewPipeAndPassRemote());
            instance = new ContainersSettingsHandlerBrowserProxy(handler, callbackRouter);
        }
        return instance;
    }
}
