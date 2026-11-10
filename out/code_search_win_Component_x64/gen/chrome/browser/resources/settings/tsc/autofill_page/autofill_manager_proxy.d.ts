export type PersonalDataChangedListener = (addresses: chrome.autofillPrivate.AddressEntry[], creditCards: chrome.autofillPrivate.CreditCardEntry[], ibans: chrome.autofillPrivate.IbanEntry[], payOverTimeIssuers: chrome.autofillPrivate.PayOverTimeIssuerEntry[], accountInfo?: chrome.autofillPrivate.AccountInfo) => void;
/**
 * Interface for all callbacks to the autofill API.
 */
export interface AutofillManagerProxy {
    /**
     * Gets currently signed-in user account info, or undefined if not signed-in.
     */
    getAccountInfo(): Promise<chrome.autofillPrivate.AccountInfo | undefined>;
    /**
     * Add an observer to the list of personal data.
     */
    setPersonalDataManagerListener(listener: PersonalDataChangedListener): void;
    /**
     * Remove an observer from the list of personal data.
     */
    removePersonalDataManagerListener(listener: PersonalDataChangedListener): void;
    /**
     * Request the list of addresses.
     */
    getAddressList(): Promise<chrome.autofillPrivate.AddressEntry[]>;
    /**
     * Saves the given address.
     */
    saveAddress(address: chrome.autofillPrivate.AddressEntry): void;
    /** @param guid The guid of the address to remove.  */
    removeAddress(guid: string): void;
    /**
     * Fetches user data processing consent states.
     */
    fetchUserDataProcessingConsent(): Promise<chrome.autofillPrivate.UserDataProcessingConsentStates>;
}
/**
 * Implementation that accesses the private API.
 */
export declare class AutofillManagerImpl implements AutofillManagerProxy {
    getAccountInfo(): Promise<chrome.autofillPrivate.AccountInfo | undefined>;
    setPersonalDataManagerListener(listener: PersonalDataChangedListener): void;
    removePersonalDataManagerListener(listener: PersonalDataChangedListener): void;
    getAddressList(): Promise<chrome.autofillPrivate.AddressEntry[]>;
    saveAddress(address: chrome.autofillPrivate.AddressEntry): void;
    removeAddress(guid: string): void;
    fetchUserDataProcessingConsent(): Promise<chrome.autofillPrivate.UserDataProcessingConsentStates>;
    static getInstance(): AutofillManagerProxy;
    static setInstance(obj: AutofillManagerProxy): void;
}
