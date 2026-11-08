export interface BraveVPNBrowserProxy {
    isWireguardServiceInstalled(): Promise<boolean>;
    isBraveVpnConnected(): Promise<boolean>;
    showInSystemTray(): Promise<boolean>;
    setShowInSystemTray: (value: boolean) => void;
}
export declare class BraveVPNBrowserProxyImpl implements BraveVPNBrowserProxy {
    isWireguardServiceInstalled(): Promise<boolean>;
    isBraveVpnConnected(): Promise<boolean>;
    showInSystemTray(): Promise<boolean>;
    setShowInSystemTray(value: boolean): void;
    static getInstance(): BraveVPNBrowserProxy;
}
