// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import { TrafficControlSettingsUICallbackRouter, TrafficControlSettingsHandler, } from '../traffic_control.mojom-webui.js';
let instance = null;
export class TrafficControlSettingsHandlerBrowserProxy {
    handler;
    callbackRouter;
    constructor(handler, callbackRouter) {
        this.handler = handler;
        this.callbackRouter = callbackRouter;
    }
    static getInstance() {
        if (!instance) {
            const handler = TrafficControlSettingsHandler.getRemote();
            const callbackRouter = new TrafficControlSettingsUICallbackRouter();
            handler.bindUI(callbackRouter.$.bindNewPipeAndPassRemote());
            instance = new TrafficControlSettingsHandlerBrowserProxy(handler, callbackRouter);
        }
        return instance;
    }
}
