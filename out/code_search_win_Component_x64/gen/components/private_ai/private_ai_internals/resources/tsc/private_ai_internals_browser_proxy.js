// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PrivateAiInternalsPageCallbackRouter, PrivateAiInternalsPageHandler } from './private_ai_internals.mojom-webui.js';
export class PrivateAiInternalsBrowserProxyImpl {
    handler;
    callbackRouter;
    constructor(handler) {
        this.handler = handler;
        this.callbackRouter = new PrivateAiInternalsPageCallbackRouter();
        this.handler.setPage(this.callbackRouter.$.bindNewPipeAndPassRemote());
    }
    connect(url, apiKey, proxyUrl, useTokenAttestation) {
        return this.handler.connect(url, apiKey, proxyUrl, useTokenAttestation);
    }
    close() {
        return this.handler.close();
    }
    async sendRequest(featureName, request) {
        const { response } = await this.handler.sendRequest(featureName, request);
        return response;
    }
    getCallbackRouter() {
        return this.callbackRouter;
    }
    static getInstance() {
        return instance ||
            (instance = new PrivateAiInternalsBrowserProxyImpl(PrivateAiInternalsPageHandler.getRemote()));
    }
    static setInstance(newInstance) {
        instance = newInstance;
    }
}
let instance = null;
