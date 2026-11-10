export interface SystemPageBrowserProxy {
    /** Shows the native system proxy settings. */
    showProxySettings(): void;
    /**
     * @return Whether hardware acceleration was enabled when the user
     *     started Chrome.
     */
    wasHardwareAccelerationEnabledAtStartup(): boolean;
}
export declare class SystemPageBrowserProxyImpl implements SystemPageBrowserProxy {
    showProxySettings(): void;
    wasHardwareAccelerationEnabledAtStartup(): boolean;
    static getInstance(): SystemPageBrowserProxy;
    static setInstance(obj: SystemPageBrowserProxy): void;
}
