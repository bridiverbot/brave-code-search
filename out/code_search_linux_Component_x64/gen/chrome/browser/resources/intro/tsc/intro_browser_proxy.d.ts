import { IntroPageCallbackRouter } from './intro.mojom-webui.js';
export interface IntroBrowserProxy {
    callbackRouter: IntroPageCallbackRouter;
    matchMedia(query: string): MediaQueryList;
}
export declare class IntroBrowserProxyImpl implements IntroBrowserProxy {
    callbackRouter: IntroPageCallbackRouter;
    private constructor();
    static getInstance(): IntroBrowserProxy;
    static setInstance(proxy: IntroBrowserProxy): void;
    matchMedia(query: string): MediaQueryList;
}
