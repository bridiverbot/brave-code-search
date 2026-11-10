export declare enum TimePeriod {
    LAST_HOUR = 0,
    LAST_DAY = 1,
    LAST_WEEK = 2,
    FOUR_WEEKS = 3,
    ALL_TIME = 4,
    LAST_15_MINUTES = 6,
    TIME_PERIOD_LAST = 6
}
export declare enum BrowsingDataType {
    HISTORY = 0,
    CACHE = 1,
    SITE_DATA = 2,
    FORM_DATA = 4,
    SITE_SETTINGS = 5,
    DOWNLOADS = 6,
    HOSTED_APPS_DATA = 7,
    SKILLS = 9,
    BRAVE_AI_CHAT = 10
}
/**
 * ClearBrowsingDataResult contains any possible follow-up notices that should
 * be shown to the user.
 */
export interface ClearBrowsingDataResult {
    showHistoryNotice: boolean;
    showPasswordsNotice: boolean;
}
/**
 * UpdateSyncStateEvent contains relevant information for a summary of a user's
 * updated Sync State.
 */
export interface UpdateSyncStateEvent {
    signedIn: boolean;
    isNonGoogleDse: boolean;
    nonGoogleSearchHistoryString: string;
}
export interface ClearBrowsingDataBrowserProxy {
    /**
     * @return A promise resolved when data clearing has completed. The boolean
     *     indicates whether an additional dialog should be shown, informing the
     *     user about other forms of browsing history.
     */
    clearBrowsingData(dataTypes: string[], timePeriod: number): Promise<ClearBrowsingDataResult>;
    /**
     * Kick off counter updates and return initial state.
     * @return Signal when the setup is complete.
     */
    initialize(): Promise<void>;
    /**
     * @return A promise with the current sync state.
     */
    getSyncState(): Promise<UpdateSyncStateEvent>;
    /**
     * Requests the backend to restart the browsing data counters, instructing
     * them to calculate the data volume for the |timePeriod|. No return value, as
     * the frontend needn't wait for the counting to be completed.
     */
    restartCounters(timePeriod: number): void;
    recordSettingsClearBrowsingDataTimePeriodHistogram(bucket: TimePeriod): void;
}
export declare class ClearBrowsingDataBrowserProxyImpl implements ClearBrowsingDataBrowserProxy {
    clearBrowsingData(dataTypes: string[], timePeriod: number): Promise<ClearBrowsingDataResult>;
    initialize(): Promise<void>;
    getSyncState(): Promise<UpdateSyncStateEvent>;
    restartCounters(timePeriod: number): void;
    recordSettingsClearBrowsingDataTimePeriodHistogram(bucket: TimePeriod): void;
    static getInstance(): ClearBrowsingDataBrowserProxy;
    static setInstance(obj: ClearBrowsingDataBrowserProxy): void;
}
