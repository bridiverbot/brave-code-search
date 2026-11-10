import type { PrivateAiInternalsPageHandlerRemote, PrivateAiResponseMojoType } from './private_ai_internals.mojom-webui.js';
import { PrivateAiInternalsPageCallbackRouter } from './private_ai_internals.mojom-webui.js';
/**
 * @fileoverview A browser proxy for the PrivateAi Internals page.
 */
export interface PrivateAiInternalsBrowserProxy {
    connect(url: string, apiKey: string, proxyUrl: string, useTokenAttestation: boolean): Promise<void>;
    close(): Promise<void>;
    sendRequest(featureName: string, request: string): Promise<PrivateAiResponseMojoType>;
    getCallbackRouter(): PrivateAiInternalsPageCallbackRouter;
}
export declare class PrivateAiInternalsBrowserProxyImpl implements PrivateAiInternalsBrowserProxy {
    handler: PrivateAiInternalsPageHandlerRemote;
    callbackRouter: PrivateAiInternalsPageCallbackRouter;
    constructor(handler: PrivateAiInternalsPageHandlerRemote);
    connect(url: string, apiKey: string, proxyUrl: string, useTokenAttestation: boolean): Promise<void>;
    close(): Promise<void>;
    sendRequest(featureName: string, request: string): Promise<PrivateAiResponseMojoType>;
    getCallbackRouter(): PrivateAiInternalsPageCallbackRouter;
    static getInstance(): PrivateAiInternalsBrowserProxy;
    static setInstance(newInstance: PrivateAiInternalsBrowserProxy): void;
}
