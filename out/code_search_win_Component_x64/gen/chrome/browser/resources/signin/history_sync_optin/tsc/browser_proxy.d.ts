import { PageCallbackRouter } from './history_sync_optin.mojom-webui.js';
import type { PageHandlerInterface } from './history_sync_optin.mojom-webui.js';
export interface HistorySyncOptInBrowserProxy {
    callbackRouter: PageCallbackRouter;
    handler: PageHandlerInterface;
}
export declare class HistorySyncOptInBrowserProxyImpl implements HistorySyncOptInBrowserProxy {
    callbackRouter: PageCallbackRouter;
    handler: PageHandlerInterface;
    private constructor();
    static getInstance(): HistorySyncOptInBrowserProxy;
    static setInstance(proxy: HistorySyncOptInBrowserProxy): void;
}
