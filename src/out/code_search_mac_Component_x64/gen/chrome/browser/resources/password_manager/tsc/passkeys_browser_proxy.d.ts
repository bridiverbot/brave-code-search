export interface PasskeysBrowserProxy {
    /**
     * Determines whether any passkeys exist on the local device.
     * May report false positives if the last passkey was recently deleted.
     */
    hasPasskeys(): Promise<boolean>;
    /**
     * Opens the passkey management surface, whether that be native to the
     * operating system, or a Chrome settings tab.
     */
    managePasskeys(): void;
}
export declare class PasskeysBrowserProxyImpl implements PasskeysBrowserProxy {
    hasPasskeys(): Promise<boolean>;
    managePasskeys(): void;
    static getInstance(): PasskeysBrowserProxy;
    static setInstance(obj: PasskeysBrowserProxy): void;
}
