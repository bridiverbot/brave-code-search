// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { SignInCelebrationPageCallbackRouter, SignInCelebrationPageHandlerFactory, SignInCelebrationPageHandlerRemote } from '../sign_in_celebration.mojom-webui.js';
export class SignInCelebrationBrowserProxyImpl {
    callbackRouter;
    handler;
    constructor() {
        this.callbackRouter = new SignInCelebrationPageCallbackRouter();
        this.handler = new SignInCelebrationPageHandlerRemote();
        const factory = SignInCelebrationPageHandlerFactory.getRemote();
        factory.createSignInCelebrationPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), this.handler
            .$.bindNewPipeAndPassReceiver());
    }
    static getInstance() {
        return instance || (instance = new SignInCelebrationBrowserProxyImpl());
    }
    static setInstance(proxy) {
        instance = proxy;
    }
    matchMedia(query) {
        return window.matchMedia(query);
    }
}
let instance = null;
