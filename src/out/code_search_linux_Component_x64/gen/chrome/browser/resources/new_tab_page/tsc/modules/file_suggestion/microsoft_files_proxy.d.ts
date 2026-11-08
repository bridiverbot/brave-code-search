import type { MicrosoftFilesPageHandlerRemote } from '../../microsoft_files.mojom-webui.js';
export interface MicrosoftFilesProxy {
    handler: MicrosoftFilesPageHandlerRemote;
}
export declare class MicrosoftFilesProxyImpl implements MicrosoftFilesProxy {
    handler: MicrosoftFilesPageHandlerRemote;
    constructor(handler: MicrosoftFilesPageHandlerRemote);
    static getInstance(): MicrosoftFilesProxy;
    static setInstance(newInstance: MicrosoftFilesProxy): void;
}
