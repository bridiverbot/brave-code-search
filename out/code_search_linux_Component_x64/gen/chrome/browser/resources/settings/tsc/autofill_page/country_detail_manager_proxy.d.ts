type AddressComponents = chrome.autofillPrivate.AddressComponents;
type CountryEntry = chrome.autofillPrivate.CountryEntry;
/**
 * This interface defines the autofill API wrapper that combines country related
 * methods.
 */
export interface CountryDetailManagerProxy {
    /**
     * Gets the list of available countries.
     * The default country will be first, followed by a separator, followed by
     * an alphabetized list of countries available.
     */
    getCountryList(forAccountStorage: boolean): Promise<CountryEntry[]>;
    /**
     * Gets the address format for a given country code.
     */
    getAddressFormat(countryCode: string): Promise<AddressComponents>;
}
export declare class CountryDetailManagerProxyImpl implements CountryDetailManagerProxy {
    getCountryList(forAccountStorage: boolean): Promise<chrome.autofillPrivate.CountryEntry[]>;
    getAddressFormat(countryCode: string): Promise<chrome.autofillPrivate.AddressComponents>;
    static getInstance(): CountryDetailManagerProxy;
    static setInstance(obj: CountryDetailManagerProxy): void;
}
export {};
