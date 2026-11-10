import { PageCallbackRouter } from './default_browser_modal.mojom-webui.js';
import type { PageHandlerInterface } from './default_browser_modal.mojom-webui.js';
export declare class BrowserProxy {
    callbackRouter: PageCallbackRouter;
    handler: PageHandlerInterface;
    private constructor();
    static getInstance(): BrowserProxy;
    static setInstance(proxy: BrowserProxy): void;
}
