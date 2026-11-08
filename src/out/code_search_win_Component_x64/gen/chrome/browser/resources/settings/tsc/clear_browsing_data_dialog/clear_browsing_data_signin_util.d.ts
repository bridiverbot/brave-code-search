import type { SyncStatus } from '/shared/settings/people_page/sync_browser_proxy.js';
/**
 * Returns true if the deletion will affect account data. This is only the case
 * if the user is signed in to Chrome with valid credentials. If the user is
 * only signed in to the content area or if they need to re-authenticate (signed
 * in paused state), then account data will not be deleted.
 */
export declare function canDeleteAccountData(syncStatus: SyncStatus | undefined): boolean;
/** Returns true if the user is signed in to a Google account on Chrome. */
export declare function isSignedIn(syncStatus: SyncStatus | undefined): boolean;
