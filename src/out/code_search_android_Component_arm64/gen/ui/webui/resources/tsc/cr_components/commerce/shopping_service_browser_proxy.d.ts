import type { ShoppingServiceHandlerInterface } from './shopping_service.mojom-webui.js';
import { ShoppingServiceHandlerRemote } from './shopping_service.mojom-webui.js';
export interface ShoppingServiceBrowserProxy {
    handler: ShoppingServiceHandlerInterface;
}
export declare class ShoppingServiceBrowserProxyImpl implements ShoppingServiceBrowserProxy {
    handler: ShoppingServiceHandlerRemote;
    constructor();
    static getInstance(): ShoppingServiceBrowserProxy;
    static setInstance(obj: ShoppingServiceBrowserProxy): void;
}
