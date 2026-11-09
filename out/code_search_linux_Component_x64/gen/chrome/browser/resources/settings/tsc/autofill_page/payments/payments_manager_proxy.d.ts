import type { PersonalDataChangedListener } from '../autofill_manager_proxy.js';
/**
 * Interface for all callbacks to the payments autofill API.
 */
export interface PaymentsManagerProxy {
    /**
     * Add an observer to the list of personal data.
     */
    setPersonalDataManagerListener(listener: PersonalDataChangedListener): void;
    /**
     * Remove an observer from the list of personal data.
     */
    removePersonalDataManagerListener(listener: PersonalDataChangedListener): void;
    /**
     * Request the list of credit cards.
     */
    getCreditCardList(): Promise<chrome.autofillPrivate.CreditCardEntry[]>;
    /**
     * Request the list of IBANs.
     */
    getIbanList(): Promise<chrome.autofillPrivate.IbanEntry[]>;
    /** @param ibanValue Returns true if the given ibanValue is valid. */
    isValidIban(ibanValue: string): Promise<boolean>;
    /** @param guid The GUID of the credit card to remove. */
    removeCreditCard(guid: string): void;
    /**
     * Saves the given credit card.
     */
    saveCreditCard(creditCard: chrome.autofillPrivate.CreditCardEntry): void;
    /** @param guid The GUID of the IBAN to remove. */
    removeIban(guid: string): void;
    /**
     * Saves the given IBAN.
     */
    saveIban(iban: chrome.autofillPrivate.IbanEntry): void;
    /**
     * Logs that the server cards edit link was clicked.
     */
    logServerCardLinkClicked(): void;
    /**
     * Logs that the server IBAN's "Edit in Google Pay" link was clicked.
     */
    logServerIbanLinkClicked(): void;
    /**
     * Enrolls the card into virtual cards.
     */
    addVirtualCard(cardId: string): void;
    /**
     * Unenrolls the card from virtual cards.
     */
    removeVirtualCard(cardId: string): void;
    /**
     * Request the list of pay over time issuers.
     */
    getPayOverTimeIssuerList(): Promise<chrome.autofillPrivate.PayOverTimeIssuerEntry[]>;
    /**
     * A null response means that there is no platform authenticator.
     */
    isUserVerifyingPlatformAuthenticatorAvailable(): Promise<boolean | null>;
    /**
     * Authenticate the user via device authentication and flip the mandatory auth
     * toggle is successful.
     */
    authenticateUserAndFlipMandatoryAuthToggle(): void;
    /**
     * Returns the local card based on the `guid` provided. The user could
     * also be challenged with a reauth if that is enabled. For a
     * successful auth, the local card is returned otherwise return a null object.
     */
    getLocalCard(guid: string): Promise<chrome.autofillPrivate.CreditCardEntry | null>;
    /**
     * Bulk delete all the CVCs (server and local) from the local webdata
     * database. For server CVCs, this will also clear them from the Chrome
     * sync server and thus other devices.
     */
    bulkDeleteAllCvcs(): void;
}
/**
 * Implementation that accesses the private API.
 */
export declare class PaymentsManagerImpl implements PaymentsManagerProxy {
    setPersonalDataManagerListener(listener: PersonalDataChangedListener): void;
    removePersonalDataManagerListener(listener: PersonalDataChangedListener): void;
    getCreditCardList(): Promise<chrome.autofillPrivate.CreditCardEntry[]>;
    getIbanList(): Promise<chrome.autofillPrivate.IbanEntry[]>;
    isValidIban(ibanValue: string): Promise<boolean>;
    removeCreditCard(guid: string): void;
    saveCreditCard(creditCard: chrome.autofillPrivate.CreditCardEntry): void;
    saveIban(iban: chrome.autofillPrivate.IbanEntry): void;
    removeIban(guid: string): void;
    logServerCardLinkClicked(): void;
    logServerIbanLinkClicked(): void;
    addVirtualCard(cardId: string): void;
    removeVirtualCard(serverId: string): void;
    getPayOverTimeIssuerList(): Promise<chrome.autofillPrivate.PayOverTimeIssuerEntry[]>;
    isUserVerifyingPlatformAuthenticatorAvailable(): Promise<null> | Promise<boolean>;
    authenticateUserAndFlipMandatoryAuthToggle(): void;
    getLocalCard(guid: string): Promise<chrome.autofillPrivate.CreditCardEntry | null>;
    bulkDeleteAllCvcs(): void;
    static getInstance(): PaymentsManagerProxy;
    static setInstance(obj: PaymentsManagerProxy): void;
}
