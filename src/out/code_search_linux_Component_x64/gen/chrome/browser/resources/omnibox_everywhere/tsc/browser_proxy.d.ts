import { PageCallbackRouter, PageHandlerRemote } from './omnibox_everywhere.mojom-webui.js';
export interface OmniboxEverywhereBrowserProxy {
    callbackRouter: PageCallbackRouter;
    handler: PageHandlerRemote;
}
export declare class OmniboxEverywhereBrowserProxyImpl implements OmniboxEverywhereBrowserProxy {
    callbackRouter: PageCallbackRouter;
    handler: PageHandlerRemote;
    constructor();
    static getInstance(): OmniboxEverywhereBrowserProxy;
    static setInstance(proxy: OmniboxEverywhereBrowserProxy): void;
}
