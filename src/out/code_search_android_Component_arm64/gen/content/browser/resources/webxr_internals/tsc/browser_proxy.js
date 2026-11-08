// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { WebXrInternalsHandler, XRInternalsSessionListenerCallbackRouter } from './webxr_internals.mojom-webui.js';
export class BrowserProxy {
    callbackRouter_ = new XRInternalsSessionListenerCallbackRouter();
    handler_ = WebXrInternalsHandler.getRemote();
    constructor() {
        this.handler_.subscribeToEvents(this.callbackRouter_.$.bindNewPipeAndPassRemote());
    }
    getBrowserCallback() {
        return this.callbackRouter_;
    }
    async getDeviceInfo() {
        const response = await this.handler_.getDeviceInfo();
        return response.deviceInfo;
    }
    async getActiveRuntimes() {
        const response = await this.handler_.getActiveRuntimes();
        return response.activeRuntimes;
    }
    static getInstance() {
        return instance || (instance = new BrowserProxy());
    }
}
let instance = null;
