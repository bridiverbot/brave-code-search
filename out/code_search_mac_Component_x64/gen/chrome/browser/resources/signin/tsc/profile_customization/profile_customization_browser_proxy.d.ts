/**
 * @fileoverview A helper object used by the profilecustomization bubble to
 * interact with the browser.
 */
import type { AvatarIcon } from 'chrome://resources/cr_elements/cr_profile_avatar_selector/cr_profile_avatar_selector.js';
export interface ProfileInfo {
    backgroundColor: string;
    pictureUrl: string;
    isManaged: boolean;
    hasEnterpriseLabel: boolean;
    welcomeTitle: string;
}
export interface ProfileCustomizationBrowserProxy {
    initialized(): Promise<ProfileInfo>;
    getAvailableIcons(): Promise<AvatarIcon[]>;
    done(profileName: string): void;
    skip(): void;
    deleteProfile(): void;
    setAvatarIcon(avatarIndex: number): void;
}
export declare class ProfileCustomizationBrowserProxyImpl implements ProfileCustomizationBrowserProxy {
    initialized(): Promise<ProfileInfo>;
    getAvailableIcons(): Promise<AvatarIcon[]>;
    done(profileName: string): void;
    skip(): void;
    deleteProfile(): void;
    setAvatarIcon(avatarIndex: number): void;
    static getInstance(): ProfileCustomizationBrowserProxy;
    static setInstance(obj: ProfileCustomizationBrowserProxy): void;
}
