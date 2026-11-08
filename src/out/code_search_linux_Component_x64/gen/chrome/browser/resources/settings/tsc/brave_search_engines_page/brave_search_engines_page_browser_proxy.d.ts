import type { SearchEngine } from '../search_page/search_engines_browser_proxy.js';
export interface BraveSearchEnginesPageBrowserProxy {
    getPrivateSearchEnginesList(): Promise<SearchEngine[]>;
    setDefaultPrivateSearchEngine(id: string): void;
}
export declare class BraveSearchEnginesPageBrowserProxyImpl implements BraveSearchEnginesPageBrowserProxy {
    getPrivateSearchEnginesList(): Promise<SearchEngine[]>;
    setDefaultPrivateSearchEngine(id: string): void;
    static getInstance(): BraveSearchEnginesPageBrowserProxy;
}
