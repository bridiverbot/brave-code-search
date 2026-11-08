import { PageCallbackRouter } from './slim_web_view.mojom-webui.js';
import type { PageHandlerInterface } from './slim_web_view.mojom-webui.js';
export { PageHandler_PermissionResponseAction as PermissionResponseAction } from './slim_web_view.mojom-webui.js';
export interface BrowserProxy {
    callbackRouter: PageCallbackRouter;
    handler: PageHandlerInterface;
}
export declare class BrowserProxyImpl implements BrowserProxy {
    callbackRouter: PageCallbackRouter;
    handler: PageHandlerInterface;
    private constructor();
    static getInstance(): BrowserProxy;
    static setInstance(proxy: BrowserProxy): void;
}
