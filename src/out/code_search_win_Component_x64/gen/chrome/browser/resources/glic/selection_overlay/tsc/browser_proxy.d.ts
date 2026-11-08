import { //
SelectionOverlayPageCallbackRouter, //
SelectionOverlayPageHandlerRemote } from './selection_overlay.mojom-webui.js';
export interface BrowserProxy {
    callbackRouter: SelectionOverlayPageCallbackRouter;
    handler: SelectionOverlayPageHandlerRemote;
}
export declare class BrowserProxyImpl implements BrowserProxy {
    callbackRouter: SelectionOverlayPageCallbackRouter;
    handler: SelectionOverlayPageHandlerRemote;
    constructor();
    static getInstance(): BrowserProxy;
    static setInstance(obj: BrowserProxy): void;
}
