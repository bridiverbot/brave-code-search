import type { HelpBubbleHandlerInterface } from './help_bubble.mojom-webui.js';
import { HelpBubbleClientCallbackRouter, HelpBubbleHandlerRemote } from './help_bubble.mojom-webui.js';
export interface PdfHelpBubbleProxy {
    handler: HelpBubbleHandlerInterface;
    callbackRouter: HelpBubbleClientCallbackRouter;
}
export declare class PdfHelpBubbleProxyImpl implements PdfHelpBubbleProxy {
    private trackedElementHandler_;
    callbackRouter: HelpBubbleClientCallbackRouter;
    handler: HelpBubbleHandlerRemote;
    constructor(connectToMojo: boolean);
    static getInstance(): PdfHelpBubbleProxy;
    static createConnectedInstance(): void;
}
