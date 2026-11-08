import type { WebClientHandlerRemote, WebClientInitialState } from '../../glic.mojom-webui.js';
import type { //
CloseAuthTabOptions, //
CloseAuthTabResponse, //
CloseSignInTabOptions, //
CloseSignInTabResult, //
GeicBrowserHost, //
OpenAuthTabOptions, //
OpenAuthTabResponse, //
OpenSignInTabOptions, //
OpenSignInTabResult } from '../../glic_api/glic_api.js';
export declare class GlicBrowserHostGeic implements GeicBrowserHost {
    private handler?;
    private handlerRemote?;
    initialize(_initialState: WebClientInitialState, handler?: WebClientHandlerRemote): void;
    destroy(): void;
    openSignInTab(options?: OpenSignInTabOptions): Promise<OpenSignInTabResult>;
    closeSignInTab(options?: CloseSignInTabOptions): Promise<CloseSignInTabResult>;
    openAuthTab(options: OpenAuthTabOptions): Promise<OpenAuthTabResponse>;
    closeAuthTab(options: CloseAuthTabOptions): Promise<CloseAuthTabResponse>;
    private getGeicHandler;
}
