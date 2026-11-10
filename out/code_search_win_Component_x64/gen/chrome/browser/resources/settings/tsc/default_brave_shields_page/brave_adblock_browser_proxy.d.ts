export declare class Scriptlet {
    name: string;
    kind: object;
    content: string;
}
export interface FilterList {
    uuid: string;
    url: string;
    title: string;
    desc: string;
    support_url: string;
    component_id: string;
    enabled: boolean;
}
export interface SubscriptionInfo {
    subscription_url: string;
    last_update_attempt: number;
    last_successful_update_attempt: number;
    enabled: boolean;
    title?: string;
    homepage?: string;
}
export declare enum ErrorCode {
    kOK = 0,
    kInvalidName = 1,
    kAlreadyExists = 2,
    kNotFound = 3
}
export interface BraveAdblockBrowserProxy {
    getRegionalLists: () => Promise<FilterList[]>;
    enableFilterList: (uuid: string, enabled: boolean) => void;
    updateFilterLists: () => Promise<boolean>;
    getCustomFilters: () => Promise<string>;
    updateCustomFilters: (value: string) => void;
    getListSubscriptions: () => Promise<SubscriptionInfo[]>;
    setSubscriptionEnabled: (url: string, enabled: boolean) => void;
    addSubscription: (url: string) => void;
    updateSubscription: (url: string) => void;
    deleteSubscription: (url: string) => void;
    viewSubscription: (url: string) => void;
    getCustomScriptlets: () => Promise<Scriptlet[]>;
    addCustomScriptlet: (scriptlet: Scriptlet) => Promise<ErrorCode>;
    updateCustomScriptlet: (name: string, scriptlet: Scriptlet) => Promise<ErrorCode>;
    removeCustomScriptlet: (name: string) => Promise<ErrorCode>;
    addWebUiListener: (eventName: string, callback: Function) => void;
}
export declare class BraveAdblockBrowserProxyImpl implements BraveAdblockBrowserProxy {
    static getInstance(): BraveAdblockBrowserProxy;
    getRegionalLists(): Promise<FilterList[]>;
    enableFilterList(uuid: string, enabled: boolean): void;
    updateFilterLists(): Promise<boolean>;
    getCustomFilters(): Promise<string>;
    updateCustomFilters(value: string): void;
    getListSubscriptions(): Promise<SubscriptionInfo[]>;
    setSubscriptionEnabled(url: string, enabled: boolean): void;
    addSubscription(url: string): void;
    updateSubscription(url: string): void;
    deleteSubscription(url: string): void;
    viewSubscription(url: string): void;
    getCustomScriptlets(): Promise<Scriptlet[]>;
    addCustomScriptlet(scriptlet: Scriptlet): Promise<ErrorCode>;
    updateCustomScriptlet(name: string, scriptlet: Scriptlet): Promise<ErrorCode>;
    removeCustomScriptlet(name: string): Promise<ErrorCode>;
    addWebUiListener(eventName: string, callback: Function): void;
    private utf8ToBase64_;
    private base64ToUtf8_;
}
