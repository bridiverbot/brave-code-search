export interface DefaultBrowserInfo {
    canBeDefault: boolean;
    canPin: boolean;
    isDefault: boolean;
    isDisabledByPolicy: boolean;
    isUnknownError: boolean;
}
export interface DefaultBrowserBrowserProxy {
    /**
     * Get the initial DefaultBrowserInfo and begin sending updates to
     * 'settings.updateDefaultBrowserState'.
     */
    requestDefaultBrowserState(): Promise<DefaultBrowserInfo>;
    requestUserValueStringsFeatureState(): Promise<boolean>;
    setAsDefaultBrowser(pin: boolean): void;
}
export declare class DefaultBrowserBrowserProxyImpl implements DefaultBrowserBrowserProxy {
    requestDefaultBrowserState(): Promise<DefaultBrowserInfo>;
    requestUserValueStringsFeatureState(): Promise<boolean>;
    setAsDefaultBrowser(pin: boolean): void;
    static getInstance(): DefaultBrowserBrowserProxy;
    static setInstance(obj: DefaultBrowserBrowserProxy): void;
}
