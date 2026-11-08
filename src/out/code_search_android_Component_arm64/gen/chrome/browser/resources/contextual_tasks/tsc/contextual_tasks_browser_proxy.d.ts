import { ExtensionPageCallbackRouter, PageCallbackRouter } from './contextual_tasks.mojom-webui.js';
import type { ExtensionPageHandlerInterface, PageHandlerInterface } from './contextual_tasks.mojom-webui.js';
export interface BrowserProxy {
    callbackRouter: PageCallbackRouter;
    handler: PageHandlerInterface;
}
export declare class BrowserProxyImpl implements BrowserProxy {
    callbackRouter: PageCallbackRouter;
    handler: PageHandlerInterface;
    constructor();
    static getInstance(): BrowserProxy;
    static setInstance(proxy: BrowserProxy): void;
}
export interface ExtensionBrowserProxy {
    callbackRouter: ExtensionPageCallbackRouter;
    handler: ExtensionPageHandlerInterface;
}
declare global {
    interface Window {
        __extensionBrowserProxyInstance?: ExtensionBrowserProxy;
    }
}
export declare class ExtensionBrowserProxyImpl implements ExtensionBrowserProxy {
    callbackRouter: ExtensionPageCallbackRouter;
    handler: ExtensionPageHandlerInterface;
    constructor();
    static getInstance(): ExtensionBrowserProxy;
    static setInstance(proxy: ExtensionBrowserProxy): void;
}
