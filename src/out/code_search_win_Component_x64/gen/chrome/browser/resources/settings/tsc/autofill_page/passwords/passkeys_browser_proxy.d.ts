export interface Passkey {
    credentialId: string;
    relyingPartyId: string;
    userName: string;
    userDisplayName: string;
}
export interface PasskeysBrowserProxy {
    /**
     * Determines whether any passkeys exist on the local device. Should be
     * significantly more efficient than calling `enumerate` and checking for a
     * non-empty list, but may report false positives if the last passkey was
     * recently deleted.
     */
    hasPasskeys(): Promise<boolean>;
    /**
     * Enumerates passkeys from the local device. Result is null if management
     * is not supported on this platform.
     */
    enumerate(): Promise<Passkey[] | null>;
    /**
     * Deletes a passkey as specified by credentialId then performs an `enumerate`
     * operation.
     */
    delete(credentialId: string): Promise<Passkey[] | null>;
    /**
     * Edits a passkey's credential metadata username then performs an `enumerate`
     * operation.
     */
    edit(credentialId: string, newUsername: string): Promise<Passkey[] | null>;
}
export declare class PasskeysBrowserProxyImpl implements PasskeysBrowserProxy {
    hasPasskeys(): Promise<boolean>;
    enumerate(): Promise<Passkey[] | null>;
    delete(credentialId: string): Promise<Passkey[] | null>;
    edit(credentialId: string, newUsername: string): Promise<Passkey[] | null>;
    static getInstance(): PasskeysBrowserProxy;
    static setInstance(obj: PasskeysBrowserProxy): void;
}
