import { SignInPromoPageCallbackRouter } from './sign_in_promo.mojom-webui.js';
import type { SignInPromoPageHandlerInterface } from './sign_in_promo.mojom-webui.js';
export interface SignInPromoBrowserProxy {
    callbackRouter: SignInPromoPageCallbackRouter;
    handler: SignInPromoPageHandlerInterface;
    matchMedia(query: string): MediaQueryList;
}
export declare class SignInPromoBrowserProxyImpl implements SignInPromoBrowserProxy {
    callbackRouter: SignInPromoPageCallbackRouter;
    handler: SignInPromoPageHandlerInterface;
    private constructor();
    static getInstance(): SignInPromoBrowserProxy;
    static setInstance(proxy: SignInPromoBrowserProxy): void;
    matchMedia(query: string): MediaQueryList;
}
