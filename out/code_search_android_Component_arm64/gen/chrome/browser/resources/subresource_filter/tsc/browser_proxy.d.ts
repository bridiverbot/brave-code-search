import type { SubresourceFilterInternalsHandlerInterface } from './subresource_filter_internals.mojom-webui.js';
import { SubresourceFilterInternalsObserverCallbackRouter } from './subresource_filter_internals.mojom-webui.js';
export declare class BrowserProxy {
    handler: SubresourceFilterInternalsHandlerInterface;
    callbackRouter: SubresourceFilterInternalsObserverCallbackRouter;
    private constructor();
    static getInstance(): BrowserProxy;
    static setInstance(obj: BrowserProxy): void;
}
