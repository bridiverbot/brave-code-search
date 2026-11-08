export interface BravePrivacyBrowserProxy {
    wasPushMessagingEnabledAtStartup(): boolean;
    wasWindowsRecallDisabledAtStartup(): boolean;
    isWindowsRecallDisabled: () => Promise<boolean>;
    setWindowsRecallDisabled: (disabled: boolean) => void;
}
export declare class BravePrivacyBrowserProxyImpl implements BravePrivacyBrowserProxy {
    wasPushMessagingEnabledAtStartup(): boolean;
    wasWindowsRecallDisabledAtStartup(): boolean;
    isWindowsRecallDisabled(): Promise<boolean>;
    setWindowsRecallDisabled(disabled: boolean): void;
    static getInstance(): BravePrivacyBrowserProxyImpl;
}
