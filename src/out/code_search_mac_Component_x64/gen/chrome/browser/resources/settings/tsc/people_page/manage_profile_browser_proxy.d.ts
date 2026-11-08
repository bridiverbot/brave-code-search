/**
 * @fileoverview A helper object used from the "Manage Profile" subpage of
 * the People section to interact with the browser. Chrome Browser only.
 */
import type { AvatarIcon } from 'chrome://resources/cr_elements/cr_profile_avatar_selector/cr_profile_avatar_selector.js';
/**
 * Contains the possible profile shortcut statuses. These strings must be kept
 * in sync with the C++ Manage Profile handler.
 */
export declare enum ProfileShortcutStatus {
    PROFILE_SHORTCUT_SETTING_HIDDEN = "profileShortcutSettingHidden",
    PROFILE_SHORTCUT_NOT_FOUND = "profileShortcutNotFound",
    PROFILE_SHORTCUT_FOUND = "profileShortcutFound"
}
export interface ManageProfileBrowserProxy {
    /**
     * Gets the available profile icons to choose from.
     */
    getAvailableIcons(): Promise<AvatarIcon[]>;
    /**
     * Sets the profile's icon to the GAIA avatar.
     */
    setProfileIconToGaiaAvatar(): void;
    /**
     * Sets the profile's icon to one of the default avatars.
     * @param index The new profile avatar index.
     */
    setProfileIconToDefaultAvatar(index: number): void;
    /**
     * Sets the profile's name.
     */
    setProfileName(name: string): void;
    /**
     * Returns whether the current profile has a shortcut.
     */
    getProfileShortcutStatus(): Promise<ProfileShortcutStatus>;
    /**
     * Adds a shortcut for the current profile.
     */
    addProfileShortcut(): void;
    /**
     * Removes the shortcut of the current profile.
     */
    removeProfileShortcut(): void;
}
export declare class ManageProfileBrowserProxyImpl implements ManageProfileBrowserProxy {
    getAvailableIcons(): Promise<AvatarIcon[]>;
    setProfileIconToGaiaAvatar(): void;
    setProfileIconToDefaultAvatar(index: number): void;
    setProfileName(name: string): void;
    getProfileShortcutStatus(): Promise<ProfileShortcutStatus>;
    addProfileShortcut(): void;
    removeProfileShortcut(): void;
    static getInstance(): ManageProfileBrowserProxy;
    static setInstance(obj: ManageProfileBrowserProxy): void;
}
