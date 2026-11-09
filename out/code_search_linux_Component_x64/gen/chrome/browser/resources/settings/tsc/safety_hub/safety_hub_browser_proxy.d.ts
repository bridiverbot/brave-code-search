import type { ContentSettingsTypes } from '../site_settings/constants.js';
/**
 * Constants used in safety hub C++ to JS communication.
 * Their values need be kept in sync with their counterparts in
 * chrome/browser/ui/webui/settings/safety_hub_handler.h and
 * chrome/browser/ui/webui/settings/safety_hub_handler.cc
 */
export declare enum SafetyHubEvent {
    UNUSED_PERMISSIONS_MAYBE_CHANGED = "unused-permission-review-list-maybe-changed",
    EXTENSIONS_CHANGED = "extensions-review-list-maybe-changed"
}
export declare enum PermissionsRevocationType {
    UNUSED_PERMISSIONS = 0,
    ABUSIVE_NOTIFICATION_PERMISSIONS = 1,
    DISRUPTIVE_NOTIFICATION_PERMISSIONS = 2,
    UNUSED_PERMISSIONS_AND_ABUSIVE_NOTIFICATIONS = 3,
    UNUSED_PERMISSIONS_AND_DISRUPTIVE_NOTIFICATIONS = 4,
    SUSPICIOUS_NOTIFICATION_PERMISSIONS = 5,
    UNUSED_PERMISSIONS_AND_SUSPICIOUS_NOTIFICATIONS = 6
}
export interface UnusedSitePermission {
    type: ContentSettingsTypes;
    settingValue: unknown;
}
export interface UnusedSitePermissions {
    origin: string;
    permissions: UnusedSitePermission[];
    expiration: string;
    revocationType: PermissionsRevocationType;
}
export interface CardInfo {
    header: string;
    subheader: string;
    state: CardState;
}
/**
 * A Safety Hub card has 4 different states as represented below. Depending on
 * the card state, the card will be updated.
 */
export declare enum CardState {
    WARNING = 0,
    WEAK = 1,
    INFO = 2,
    SAFE = 3
}
export interface EntryPointInfo {
    hasRecommendations: boolean;
    header: string;
    subheader: string;
}
export interface SafetyHubBrowserProxy {
    /**
     * Mark revoked permissions of unused sites as reviewed by the user so they
     * will not be shown again.
     */
    acknowledgeRevokedUnusedSitePermissionsList(): void;
    /**
     * Allow permissions again for an unused site where permissions were
     * auto-revoked. The origin will not appear again for the user to review and
     * permissions will not be auto-revoked for this origin in the future.
     */
    allowPermissionsAgainForUnusedSite(origin: string): void;
    /**
     * Gets the unused origins along with the permissions they have been granted.
     */
    getRevokedUnusedSitePermissionsList(): Promise<UnusedSitePermissions[]>;
    /**
     * Reverse the changes made by |acknowledgeRevokedUnusedSitePermissionsList|.
     * The list of sites will be presented again to the user for review.
     */
    undoAcknowledgeRevokedUnusedSitePermissionsList(unusedSitePermissionsList: UnusedSitePermissions[]): void;
    /**
     * Reverse the changes made by |allowPermissionsAgainForUnusedSite|. This will
     * revoke the origin's permissions, re-enable auto-revocation for this origin,
     * and the entry will be visible again in the UI.
     */
    undoAllowPermissionsAgainForUnusedSite(unusedSitePermissions: UnusedSitePermissions): void;
    /**
     * When Safety Hub is visited, the active three-dot menu notification is
     * dismissed, if there is any.
     */
    dismissActiveMenuNotification(): void;
    /** Gets data for the password top card. */
    getPasswordCardData(): Promise<CardInfo>;
    /** Gets data for the Safe Browsing top card. */
    getSafeBrowsingCardData(): Promise<CardInfo>;
    /** Gets data for the version top card. */
    getVersionCardData(): Promise<CardInfo>;
    /** Get the number of extensions that should be reviewed by the user. */
    getNumberOfExtensionsThatNeedReview(): Promise<number>;
    /** Get the subheader for Safety Hub entry point in settings. */
    getSafetyHubEntryPointData(): Promise<EntryPointInfo>;
    recordSafetyHubPageVisit(): void;
    recordSafetyHubInteraction(): void;
}
export declare class SafetyHubBrowserProxyImpl implements SafetyHubBrowserProxy {
    acknowledgeRevokedUnusedSitePermissionsList(): void;
    allowPermissionsAgainForUnusedSite(origin: string): void;
    getRevokedUnusedSitePermissionsList(): Promise<UnusedSitePermissions[]>;
    undoAcknowledgeRevokedUnusedSitePermissionsList(unusedSitePermissionsList: UnusedSitePermissions[]): void;
    undoAllowPermissionsAgainForUnusedSite(unusedSitePermissions: UnusedSitePermissions): void;
    dismissActiveMenuNotification(): void;
    getPasswordCardData(): Promise<CardInfo>;
    getSafeBrowsingCardData(): Promise<CardInfo>;
    getVersionCardData(): Promise<CardInfo>;
    getNumberOfExtensionsThatNeedReview(): Promise<number>;
    getSafetyHubEntryPointData(): Promise<EntryPointInfo>;
    recordSafetyHubPageVisit(): Promise<void>;
    recordSafetyHubInteraction(): Promise<void>;
    static getInstance(): SafetyHubBrowserProxy;
    static setInstance(obj: SafetyHubBrowserProxy): void;
}
