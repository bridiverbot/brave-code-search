import { LensGhostLoaderPageCallbackRouter } from './lens_ghost_loader.mojom-webui.js';
export interface BrowserProxy {
    callbackRouter: LensGhostLoaderPageCallbackRouter;
}
export declare class BrowserProxyImpl implements BrowserProxy {
    callbackRouter: LensGhostLoaderPageCallbackRouter;
    constructor();
    static getInstance(): BrowserProxy;
    static setInstance(obj: BrowserProxy): void;
}
