import { SignInCelebrationPageCallbackRouter } from '../sign_in_celebration.mojom-webui.js';
import type { SignInCelebrationPageHandlerInterface } from '../sign_in_celebration.mojom-webui.js';
export interface SignInCelebrationBrowserProxy {
    callbackRouter: SignInCelebrationPageCallbackRouter;
    handler: SignInCelebrationPageHandlerInterface;
    matchMedia(query: string): MediaQueryList;
}
export declare class SignInCelebrationBrowserProxyImpl implements SignInCelebrationBrowserProxy {
    callbackRouter: SignInCelebrationPageCallbackRouter;
    handler: SignInCelebrationPageHandlerInterface;
    private constructor();
    static getInstance(): SignInCelebrationBrowserProxy;
    static setInstance(proxy: SignInCelebrationBrowserProxy): void;
    matchMedia(query: string): MediaQueryList;
}
