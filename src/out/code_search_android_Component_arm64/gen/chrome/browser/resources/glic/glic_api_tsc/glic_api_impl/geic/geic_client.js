// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from '//resources/js/assert.js';
import { enumFromClient, enumToClient } from '../../enum_conversions.js';
import { AuthTabPurpose as AuthTabPurposeMojo, GeminiEnterpriseHandlerRemote } from '../../gemini_enterprise.mojom-webui.js';
export class GlicBrowserHostGeic {
    handler;
    handlerRemote;
    initialize(_initialState, handler) {
        this.handler = handler;
    }
    destroy() {
        if (this.handlerRemote) {
            this.handlerRemote.$.close();
            this.handlerRemote = undefined;
        }
        this.handler = undefined;
    }
    async openSignInTab(options) {
        const mojoOptions = options ? {
            signinUrl: options.signinUrl ?? null,
        } :
            null;
        const response = await this.getGeicHandler().openSignInTab(mojoOptions);
        return enumToClient(response.result);
    }
    async closeSignInTab(options) {
        const response = await this.getGeicHandler().closeSignInTab(options ?? null);
        return enumToClient(response.result);
    }
    // `options` and `purpose` are typed as required, but untyped JS callers may
    // omit them. Fall back to kUnknown (rejected by the browser) rather than
    // sending null for a non-nullable mojo field, which would close the pipe.
    // Unrecognized numeric purposes (e.g. from a newer web client) are passed
    // through as-is; the browser deserializes them to kUnknown because
    // `AuthTabPurpose` is [Extensible], and rejects them.
    async openAuthTab(options) {
        const { response } = await this.getGeicHandler().openAuthTab({
            purpose: enumFromClient(options?.purpose) ?? AuthTabPurposeMojo.kUnknown,
            url: options?.url ?? null,
        });
        return { result: enumToClient(response.result) };
    }
    async closeAuthTab(options) {
        const { response } = await this.getGeicHandler().closeAuthTab({
            purpose: enumFromClient(options?.purpose) ?? AuthTabPurposeMojo.kUnknown,
        });
        return { result: enumToClient(response.result) };
    }
    getGeicHandler() {
        assert(this.handler);
        if (!this.handlerRemote) {
            this.handlerRemote = new GeminiEnterpriseHandlerRemote();
            this.handler.createGeminiEnterpriseHandler(this.handlerRemote.$.bindNewPipeAndPassReceiver());
        }
        return this.handlerRemote;
    }
}
