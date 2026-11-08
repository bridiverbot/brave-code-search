/** Account information sent from C++. */
export interface AccountInfo {
    pictureUrl: string;
    avatarBadge: string;
    userBadgeAltText: string;
}
export interface InterceptionParameters {
    headerText: string;
    bodyTitle: string;
    bodyText: string;
    confirmButtonLabel: string;
    cancelButtonLabel: string;
    managedDisclaimerText: string;
    headerTextColor: string;
    interceptedProfileColor: string;
    primaryProfileColor: string;
    interceptedAccount: AccountInfo;
    primaryAccount: AccountInfo;
    useV2Design: boolean;
    useV2ProfileSwitchDesign: boolean;
    showManagedDisclaimer: boolean;
    interceptedProfileBadgeColor: string;
    primaryProfileBadgeColor: string;
}
export interface ChromeSigninInterceptionParameters {
    title: string;
    subtitle: string;
    fullName: string;
    givenName: string;
    email: string;
    pictureUrl: string;
    managedUserBadge: string;
    userBadgeAltText: string;
}
export interface DiceWebSigninInterceptBrowserProxy {
    accept(): void;
    cancel(): void;
    pageLoaded(): Promise<InterceptionParameters>;
    chromeSigninPageLoaded(): Promise<ChromeSigninInterceptionParameters>;
    initializedWithHeight(height: number): void;
}
export declare class DiceWebSigninInterceptBrowserProxyImpl implements DiceWebSigninInterceptBrowserProxy {
    accept(): void;
    cancel(): void;
    pageLoaded(): Promise<InterceptionParameters>;
    chromeSigninPageLoaded(): Promise<ChromeSigninInterceptionParameters>;
    initializedWithHeight(height: number): void;
    static getInstance(): DiceWebSigninInterceptBrowserProxy;
    static setInstance(obj: DiceWebSigninInterceptBrowserProxy): void;
}
