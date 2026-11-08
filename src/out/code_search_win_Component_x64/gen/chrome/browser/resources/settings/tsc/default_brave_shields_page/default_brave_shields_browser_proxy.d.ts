export type ContactInfo = {
    contactInfo: string | null;
    contactInfoSaveFlag: boolean;
};
export interface DefaultBraveShieldsBrowserProxy {
    isAdControlEnabled: () => Promise<boolean>;
    setAdControlType: (value: boolean) => void;
    isFirstPartyCosmeticFilteringEnabled: () => Promise<boolean>;
    setCosmeticFilteringControlType: (value: string) => void;
    getCookieControlType: () => Promise<string>;
    setCookieControlType: (value: string) => void;
    getFingerprintingControlType: () => Promise<string>;
    setFingerprintingControlType: (value: string) => void;
    getFingerprintingBlockEnabled: () => Promise<boolean>;
    setFingerprintingBlockEnabled: (value: boolean) => void;
    getHttpsUpgradeControlType: () => Promise<string>;
    setHttpsUpgradeControlType: (value: string) => void;
    getNoScriptControlType: () => Promise<boolean>;
    setNoScriptControlType: (value: boolean) => void;
    getForgetFirstPartyStorageEnabled: () => Promise<boolean>;
    setForgetFirstPartyStorageEnabled: (value: boolean) => void;
    setContactInfoSaveFlag: (value: boolean) => void;
    getContactInfo: () => Promise<ContactInfo>;
    getAllowElementBlockerInPrivateModeEnabled: () => Promise<boolean>;
    setAllowElementBlockerInPrivateModeEnabled: (value: boolean) => void;
    getHideBlockAllCookieTogle: () => Promise<boolean>;
}
export declare class DefaultBraveShieldsBrowserProxyImpl implements DefaultBraveShieldsBrowserProxy {
    isAdControlEnabled(): Promise<boolean>;
    setAdControlType(value: boolean): void;
    isFirstPartyCosmeticFilteringEnabled(): Promise<boolean>;
    setCosmeticFilteringControlType(value: string): void;
    getCookieControlType(): Promise<string>;
    setCookieControlType(value: string): void;
    getFingerprintingControlType(): Promise<string>;
    setFingerprintingControlType(value: string): void;
    getFingerprintingBlockEnabled(): Promise<boolean>;
    setFingerprintingBlockEnabled(value: boolean): void;
    getHttpsUpgradeControlType(): Promise<string>;
    setHttpsUpgradeControlType(value: string): void;
    getNoScriptControlType(): Promise<boolean>;
    setNoScriptControlType(value: boolean): void;
    getForgetFirstPartyStorageEnabled(): Promise<boolean>;
    setForgetFirstPartyStorageEnabled(value: boolean): void;
    setContactInfoSaveFlag(value: boolean): void;
    getContactInfo(): Promise<ContactInfo>;
    getHideBlockAllCookieTogle(): Promise<boolean>;
    getAllowElementBlockerInPrivateModeEnabled(): Promise<boolean>;
    setAllowElementBlockerInPrivateModeEnabled(value: boolean): void;
    static getInstance(): DefaultBraveShieldsBrowserProxy;
}
