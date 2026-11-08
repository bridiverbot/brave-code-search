export declare enum BrowsingDataHandling {
    MERGE = "merge",
    SEPARATE = "separate"
}
export declare enum State {
    DISCLOSURE = 0,
    PROCESSING = 1,
    SUCCESS = 2,
    TIMEOUT = 3,
    ERROR = 4,
    VALUE_PROPOSITION = 5,
    USER_DATA_HANDLING = 6,
    SIGNALS_DISCLAIMER = 7
}
export declare enum ScreenType {
    ENTERPRISE_ACCOUNT_SYNC_ENABLED = 0,
    ENTERPRISE_ACCOUNT_SYNC_DISABLED = 1,
    CONSUMER_ACCOUNT_SYNC_DISABLED = 2,
    ENTERPRISE_ACCOUNT_CREATION = 3,
    ENTERPRISE_OIDC = 4,
    PROFILE_PICKER = 5,
    FIRST_RUN = 6,
    DEVICE_SIGNALS_DISCLAIMER = 7,
    MAX_VALUE = 7
}
export declare enum AppMode {
    FIRST_RUN = "first-run",
    PROFILE_PICKER = "profile-picker"
}
export interface ManagedUserProfileInfo {
    accountName: string;
    continueAs: string;
    email: string;
    pictureUrl: string;
    showEnterpriseBadge: boolean;
    title: string;
    subtitle: string;
    checkLinkDataCheckboxByDefault: boolean;
}
export interface ManagedUserProfileNoticeBrowserProxy {
    initialized(): Promise<ManagedUserProfileInfo>;
    initializedWithSize(height: number): void;
    /**
     * Called when the user clicks the proceed button.
     */
    proceed(state: State, linkData: boolean): void;
    /**
     * Called when the user clicks the cancel button.
     */
    cancel(): void;
    /**
     * Called when the user clicks `Learn more` link on the signals disclaimer
     * screen.
     */
    learnMoreClicked(): void;
    matchMedia(query: string): MediaQueryList;
}
export declare class ManagedUserProfileNoticeBrowserProxyImpl implements ManagedUserProfileNoticeBrowserProxy {
    initialized(): Promise<ManagedUserProfileInfo>;
    initializedWithSize(height: number): void;
    proceed(state: State, linkData: boolean): void;
    cancel(): void;
    static getInstance(): ManagedUserProfileNoticeBrowserProxy;
    static setInstance(obj: ManagedUserProfileNoticeBrowserProxy): void;
    matchMedia(query: string): MediaQueryList;
    learnMoreClicked(): void;
}
