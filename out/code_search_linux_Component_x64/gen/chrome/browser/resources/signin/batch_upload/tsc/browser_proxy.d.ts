import { PageCallbackRouter } from './batch_upload.mojom-webui.js';
import type { PageHandlerInterface } from './batch_upload.mojom-webui.js';
export interface BatchUploadBrowserProxy {
    callbackRouter: PageCallbackRouter;
    handler: PageHandlerInterface;
}
export declare class BatchUploadBrowserProxyImpl implements BatchUploadBrowserProxy {
    callbackRouter: PageCallbackRouter;
    handler: PageHandlerInterface;
    private constructor();
    static getInstance(): BatchUploadBrowserProxy;
    static setInstance(proxy: BatchUploadBrowserProxy): void;
}
