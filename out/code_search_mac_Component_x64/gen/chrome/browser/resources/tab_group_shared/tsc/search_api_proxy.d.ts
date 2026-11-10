import type { TokenRange } from './tab_search.mojom-webui.js';
import type { SearchHandlerRemote } from './tab_search.mojom-webui.js';
export interface SearchApiProxy {
    getRangesIgnoringCaseAndAccents(searchText: string, targets: string[]): Promise<{
        ranges: TokenRange[][];
    }>;
}
export declare class SearchApiProxyImpl implements SearchApiProxy {
    handler: SearchHandlerRemote;
    constructor();
    getRangesIgnoringCaseAndAccents(searchText: string, targets: string[]): Promise<{
        ranges: TokenRange[][];
    }>;
    static getInstance(): SearchApiProxy;
    static setInstance(obj: SearchApiProxy): void;
}
