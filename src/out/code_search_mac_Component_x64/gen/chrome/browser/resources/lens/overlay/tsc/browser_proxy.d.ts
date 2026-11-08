import type { LensPageHandlerInterface } from './lens.mojom-webui.js';
import { LensPageCallbackRouter, LensPageHandlerRemote } from './lens.mojom-webui.js';
export interface BrowserProxy {
    callbackRouter: LensPageCallbackRouter;
    handler: LensPageHandlerInterface;
}
export declare class BrowserProxyImpl implements BrowserProxy {
    callbackRouter: LensPageCallbackRouter;
    handler: LensPageHandlerRemote;
    constructor();
    static getInstance(): BrowserProxy;
    static setInstance(obj: BrowserProxy): void;
}
