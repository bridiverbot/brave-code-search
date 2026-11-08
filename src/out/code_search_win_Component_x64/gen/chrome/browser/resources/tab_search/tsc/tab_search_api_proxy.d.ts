import { TabSearchApiProxy, TabSearchApiProxyImpl } from './tab_search_api_proxy-chromium.js';
import type { Error } from './tab_search.mojom-webui.js';
export interface BraveTabSearchApiProxy extends TabSearchApiProxy {
    getSuggestedTopics: () => Promise<{
        topics: string[];
        error: Error | null;
    }>;
    getFocusTabs: (topic: string) => Promise<{
        windowCreated: boolean;
        error: Error | null;
    }>;
    undoFocusTabs: () => Promise<void>;
    openLeoGoPremiumPage: () => void;
    openLearnMorePage: () => void;
    setTabFocusEnabled: () => void;
    getTabFocusShowFRE: () => Promise<{
        showFRE: boolean;
    }>;
    searchTabsByContent: (query: string) => Promise<{
        tabIds: number[];
    }>;
}
export declare class BraveTabSearchApiProxyImpl extends TabSearchApiProxyImpl implements BraveTabSearchApiProxy {
    static getInstance(): BraveTabSearchApiProxy;
    getSuggestedTopics(): Promise<{
        topics: string[];
        error: (Error | null);
    }>;
    getFocusTabs(topic: string): Promise<{
        windowCreated: boolean;
        error: (Error | null);
    }>;
    undoFocusTabs(): Promise<void>;
    openLeoGoPremiumPage(): void;
    openLearnMorePage(): void;
    setTabFocusEnabled(): void;
    getTabFocusShowFRE(): Promise<{
        showFRE: boolean;
    }>;
    searchTabsByContent(query: string): Promise<{
        tabIds: number[];
    }>;
}
export * from './tab_search_api_proxy-chromium.js';
