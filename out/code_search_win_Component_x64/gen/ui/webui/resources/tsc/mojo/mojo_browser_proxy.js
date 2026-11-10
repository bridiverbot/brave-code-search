// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Reusable factory that encapsulates singleton management, production Mojo pipe
 * binding, and test mock creation for WebUI browser proxies with precise Mojo
 * pipe types.
 */
// Disable clang-format to avoid mangling of long type list.
// clang-format off
export class MojoBrowserProxyFactory {
    handlerRemoteCtor_;
    callbackRouterCtor_;
    bindFn_;
    //clang-format on
    instance_ = null;
    /**
     * @param handlerRemoteCtor Constructor for the production Mojo remote (e.g.,
     *     PageHandlerRemote).
     * @param callbackRouterCtor Constructor for the Mojo callback router (e.g.,
     *     PageCallbackRouter).
     * @param bindFn Callback invoked in production to bind the pipes via the
     *     factory.
     */
    constructor(handlerRemoteCtor_, callbackRouterCtor_, bindFn_) {
        this.handlerRemoteCtor_ = handlerRemoteCtor_;
        this.callbackRouterCtor_ = callbackRouterCtor_;
        this.bindFn_ = bindFn_;
    }
    /**
     * Retrieves or creates the production singleton instance.
     */
    getInstance() {
        if (!this.instance_) {
            const handler = new this.handlerRemoteCtor_();
            const callbackRouter = new this.callbackRouterCtor_();
            this.bindFn_(callbackRouter.$.bindNewPipeAndPassRemote(), handler.$.bindNewPipeAndPassReceiver());
            this.instance_ = { handler, callbackRouter };
        }
        return this.instance_;
    }
    /**
     * Sets the singleton instance directly (used during test setup).
     */
    setInstance(proxy) {
        this.instance_ = proxy;
    }
    /**
     * Creates a test proxy instance wrapped with a mock handler and a real
     * callback router.
     */
    createForTest(handler) {
        const callbackRouter = new this.callbackRouterCtor_();
        return {
            instance: { handler, callbackRouter },
            remote: callbackRouter.$.bindNewPipeAndPassRemote(),
        };
    }
}
/**
 * Reusable factory that encapsulates singleton management, production Mojo pipe
 * binding, and test mock creation for WebUI browser proxies without callback
 * routers.
 */
export class MojoHandlerProxyFactory {
    handlerRemoteCtor_;
    bindFn_;
    instance_ = null;
    /**
     * @param handlerRemoteCtor Constructor for the production Mojo remote (e.g.,
     *     PageHandlerRemote).
     * @param bindFn Callback invoked in production to bind the pipes via the
     *     factory.
     */
    constructor(handlerRemoteCtor_, bindFn_) {
        this.handlerRemoteCtor_ = handlerRemoteCtor_;
        this.bindFn_ = bindFn_;
    }
    /**
     * Retrieves or creates the production singleton instance.
     */
    getInstance() {
        if (!this.instance_) {
            const handler = new this.handlerRemoteCtor_();
            this.bindFn_(handler.$.bindNewPipeAndPassReceiver());
            this.instance_ = { handler };
        }
        return this.instance_;
    }
    /**
     * Sets the singleton instance directly (used during test setup).
     */
    setInstance(proxy) {
        this.instance_ = proxy;
    }
}
