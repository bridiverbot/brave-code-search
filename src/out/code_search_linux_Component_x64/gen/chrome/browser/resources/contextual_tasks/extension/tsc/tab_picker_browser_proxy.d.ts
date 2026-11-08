import type { PageCallbackRouter as SearchboxPageCallbackRouter, TabInfo } from 'chrome://resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { InputState } from 'chrome://resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
export interface TabPickerBrowserProxy {
    getRecentTabs(): Promise<{
        tabs: TabInfo[];
    }>;
    getInputState(): Promise<{
        state: InputState | null;
    }>;
    getSearchboxCallbackRouter(): SearchboxPageCallbackRouter;
    getPluralString(messageName: string, count: number): Promise<string>;
    addTabContext(tabId: number): void;
    deleteTabContext(tabId: number): void;
}
export declare class TabPickerBrowserProxyImpl implements TabPickerBrowserProxy {
    getRecentTabs(): Promise<{
        tabs: TabInfo[];
    }>;
    getInputState(): Promise<{
        state: InputState | null;
    }>;
    getSearchboxCallbackRouter(): SearchboxPageCallbackRouter;
    getPluralString(messageName: string, count: number): Promise<string>;
    addTabContext(tabId: number): void;
    deleteTabContext(tabId: number): void;
    static getInstance(): TabPickerBrowserProxy;
    static setInstance(newInstance: TabPickerBrowserProxy): void;
}
