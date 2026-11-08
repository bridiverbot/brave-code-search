import type { PageHandlerRemote } from '../../tab_groups.mojom-webui.js';
export interface TabGroupsProxy {
    handler: PageHandlerRemote;
}
export declare class TabGroupsProxyImpl implements TabGroupsProxy {
    handler: PageHandlerRemote;
    constructor(handler: PageHandlerRemote);
    static getInstance(): TabGroupsProxy;
    static setInstance(newInstance: TabGroupsProxy): void;
}
