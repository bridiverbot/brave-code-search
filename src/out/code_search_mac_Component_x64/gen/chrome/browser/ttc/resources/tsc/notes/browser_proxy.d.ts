import { PageHandlerRemote } from '../ai_overlay_dialog.mojom-webui.js';
export declare class BrowserProxy {
    handler: PageHandlerRemote;
    constructor();
    static getInstance(): BrowserProxy;
    static setInstance(obj: BrowserProxy): void;
}
