import { PageCallbackRouter } from './signout_confirmation.mojom-webui.js';
import type { PageHandlerInterface } from './signout_confirmation.mojom-webui.js';
export interface SignoutConfirmationBrowserProxy {
    callbackRouter: PageCallbackRouter;
    handler: PageHandlerInterface;
}
export declare class SignoutConfirmationBrowserProxyImpl implements SignoutConfirmationBrowserProxy {
    callbackRouter: PageCallbackRouter;
    handler: PageHandlerInterface;
    private constructor();
    static getInstance(): SignoutConfirmationBrowserProxy;
    static setInstance(proxy: SignoutConfirmationBrowserProxy): void;
}
