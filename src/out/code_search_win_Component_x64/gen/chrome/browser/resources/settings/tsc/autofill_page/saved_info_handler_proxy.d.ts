/**
 * @fileoverview A helper object used by the "Your saved info" page
 * to interact with the browser to obtain data types counters
 */
export interface PasswordCount {
    passwordCount: number;
    passkeyCount: number;
}
/**
 * Type of HaTS survey, used to gauge user perception on a data management
 * surface.
 */
export declare enum DataManagementSurvey {
    YOUR_SAVED_INFO = 0,
    PASSWORDS = 1,
    PAYMENTS = 2,
    CONTACT_INFO = 3,
    IDENTITY_DOCS = 4,
    TRAVEL = 5
}
export interface SavedInfoHandlerProxy {
    /**
     * Get the number of passwords and passkeys.
     */
    getPasswordCount(): Promise<PasswordCount>;
    /**
     * Get the number of loyalty cards.
     */
    getLoyaltyCardsCount(): Promise<number | undefined>;
    /**
     * Request launching Happiness Tracking Survey for Your saved info management
     * surface. This will check the user's eligibility to see the survey
     * before displaying it.
     * @param survey category of data management survey for a specific page
     * @param isFromHomePage true if the current page has been visited from main
     * Your saved info page (Home of Transactions)
     */
    requestDataManagementSurvey(survey: DataManagementSurvey, isFromHomePage: boolean): void;
}
export declare class SavedInfoHandlerImpl implements SavedInfoHandlerProxy {
    getPasswordCount(): Promise<PasswordCount>;
    getLoyaltyCardsCount(): Promise<number | undefined>;
    requestDataManagementSurvey(survey: DataManagementSurvey, isFromHomePage: boolean): void;
    static getInstance(): SavedInfoHandlerProxy;
    static setInstance(obj: SavedInfoHandlerProxy): void;
}
