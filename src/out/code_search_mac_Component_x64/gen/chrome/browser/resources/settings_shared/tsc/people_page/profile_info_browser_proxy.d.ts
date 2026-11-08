/**
 * An object describing the profile.
 */
export interface ProfileInfo {
    name: string;
    iconUrl: string;
}
export interface ProfileInfoBrowserProxy {
    /**
     * Returns a Promise for the profile info.
     */
    getProfileInfo(): Promise<ProfileInfo>;
    /**
     * Requests the profile stats count. The result is returned by the
     * 'profile-stats-count-ready' WebUI listener event.
     */
    getProfileStatsCount(): void;
}
export declare class ProfileInfoBrowserProxyImpl implements ProfileInfoBrowserProxy {
    getProfileInfo(): Promise<ProfileInfo>;
    getProfileStatsCount(): void;
    static getInstance(): ProfileInfoBrowserProxy;
    static setInstance(obj: ProfileInfoBrowserProxy): void;
}
