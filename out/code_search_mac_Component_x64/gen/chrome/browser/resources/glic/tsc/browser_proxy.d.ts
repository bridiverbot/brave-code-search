import '/strings.m.js';
import { //
GlicPreloadHandlerRemote, //
PageCallbackRouter, //
PageHandlerRemote, //
PreloadPageCallbackRouter } from './glic_webui.mojom-webui.js';
import type { GlicPreloadHandlerInterface, PageHandlerInterface } from './glic_webui.mojom-webui.js';
import { ObservableValue } from './observable.js';
export interface BrowserProxy {
    pageHandler: PageHandlerInterface;
    pageCallbackRouter: PageCallbackRouter;
    glicPreloadHandler?: GlicPreloadHandlerInterface;
    preloadPageCallbackRouter: PreloadPageCallbackRouter;
}
export declare class BrowserProxyImpl implements BrowserProxy {
    pageHandler: PageHandlerRemote;
    pageCallbackRouter: PageCallbackRouter;
    glicPreloadHandler?: GlicPreloadHandlerRemote;
    preloadPageCallbackRouter: PreloadPageCallbackRouter;
    instanceId: ObservableValue<string>;
    constructor();
}
