import { AuthenticationObserverCallbackRouter, AuthenticationRemote, DialogOpenerRemote } from './brave_account.mojom-webui.js';
export interface BraveAccountRowBrowserProxy {
    authentication: AuthenticationRemote;
    authenticationObserverCallbackRouter: AuthenticationObserverCallbackRouter;
    dialogOpener: DialogOpenerRemote;
}
export declare class BraveAccountRowBrowserProxyImpl implements BraveAccountRowBrowserProxy {
    authentication: AuthenticationRemote;
    authenticationObserverCallbackRouter: AuthenticationObserverCallbackRouter;
    dialogOpener: DialogOpenerRemote;
    constructor();
}
