// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CertificateManagerPageCallbackRouter, CertificateManagerPageHandlerFactory, CertificateManagerPageHandlerRemote } from './certificate_manager.mojom-webui.js';
export class CertificatesBrowserProxy {
    callbackRouter;
    handler;
    constructor() {
        this.callbackRouter = new CertificateManagerPageCallbackRouter();
        this.handler = new CertificateManagerPageHandlerRemote();
        const factory = CertificateManagerPageHandlerFactory.getRemote();
        factory.createCertificateManagerPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), this.handler
            .$.bindNewPipeAndPassReceiver());
    }
    static getInstance() {
        return instance || (instance = new CertificatesBrowserProxy());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
// The singleton instance_ is replaced with a test version of this wrapper
// during testing.
let instance = null;
