import type { CustomHelpBubbleHandlerInterface } from './custom_help_bubble.mojom-webui.js';
import { CustomHelpBubbleHandlerRemote } from './custom_help_bubble.mojom-webui.js';
export interface CustomHelpBubbleProxy {
    getHandler(): CustomHelpBubbleHandlerInterface;
}
export declare class CustomHelpBubbleProxyImpl implements CustomHelpBubbleProxy {
    private handler_;
    constructor();
    static getInstance(): CustomHelpBubbleProxy;
    static setInstance(obj: CustomHelpBubbleProxy): void;
    getHandler(): CustomHelpBubbleHandlerRemote;
}
