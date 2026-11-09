import type { LensSidePanelPageHandlerInterface } from '../lens_side_panel.mojom-webui.js';
import { LensSidePanelPageCallbackRouter, LensSidePanelPageHandlerRemote } from '../lens_side_panel.mojom-webui.js';
export interface SidePanelBrowserProxy {
    callbackRouter: LensSidePanelPageCallbackRouter;
    handler: LensSidePanelPageHandlerInterface;
}
export declare class SidePanelBrowserProxyImpl implements SidePanelBrowserProxy {
    callbackRouter: LensSidePanelPageCallbackRouter;
    handler: LensSidePanelPageHandlerRemote;
    constructor();
    static getInstance(): SidePanelBrowserProxy;
    static setInstance(obj: SidePanelBrowserProxy): void;
}
