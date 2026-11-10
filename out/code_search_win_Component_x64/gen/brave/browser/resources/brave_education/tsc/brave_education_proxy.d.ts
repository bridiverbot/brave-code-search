import { PageCallbackRouter } from './brave_education.mojom-webui.js';
import type { PageHandlerInterface } from './brave_education.mojom-webui.js';
export interface BraveEducationProxy {
    callbackRouter: PageCallbackRouter;
    handler: PageHandlerInterface;
}
export declare class BraveEducationProxyImpl implements BraveEducationProxy {
    handler: PageHandlerInterface;
    callbackRouter: PageCallbackRouter;
    private constructor();
    static getInstance(): BraveEducationProxy;
    static setInstance(proxy: BraveEducationProxy): void;
}
