import { PageCallbackRouter } from '../batch_upload_promo.mojom-webui.js';
import type { PageHandlerInterface } from '../batch_upload_promo.mojom-webui.js';
export interface BatchUploadPromoProxy {
    callbackRouter: PageCallbackRouter;
    handler: PageHandlerInterface;
}
export declare class BatchUploadPromoProxyImpl implements BatchUploadPromoProxy {
    callbackRouter: PageCallbackRouter;
    handler: PageHandlerInterface;
    private constructor();
    static setInstance(obj: BatchUploadPromoProxy): void;
    static getInstance(): BatchUploadPromoProxy;
}
