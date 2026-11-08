import { BraveBrowserCommandHandlerRemote } from '../../brave_browser_command.mojom-webui.js';
export declare class BrowserCommandProxy {
    static getInstance(): BrowserCommandProxy;
    static setInstance(newInstance: BrowserCommandProxy): void;
    handler: BraveBrowserCommandHandlerRemote;
    constructor();
}
