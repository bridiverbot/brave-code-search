import { TrafficControlSettingsUICallbackRouter, TrafficControlSettingsHandlerRemote } from '../traffic_control.mojom-webui.js';
export declare class TrafficControlSettingsHandlerBrowserProxy {
    handler: TrafficControlSettingsHandlerRemote;
    callbackRouter: TrafficControlSettingsUICallbackRouter;
    private constructor();
    static getInstance(): TrafficControlSettingsHandlerBrowserProxy;
}
