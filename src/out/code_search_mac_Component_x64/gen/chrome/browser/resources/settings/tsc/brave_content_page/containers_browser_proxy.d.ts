import { ContainersSettingsUICallbackRouter, ContainersSettingsHandlerRemote } from '../containers.mojom-webui.js';
export declare class ContainersSettingsHandlerBrowserProxy {
    handler: ContainersSettingsHandlerRemote;
    callbackRouter: ContainersSettingsUICallbackRouter;
    private constructor();
    static getInstance(): ContainersSettingsHandlerBrowserProxy;
}
