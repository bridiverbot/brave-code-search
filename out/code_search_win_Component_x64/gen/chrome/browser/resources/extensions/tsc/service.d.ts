import type { ChromeEvent } from '/tools/typescript/definitions/chrome_event.js';
import type { ActivityLogDelegate } from './activity_log/activity_log_history.js';
import type { ActivityLogEventDelegate } from './activity_log/activity_log_stream.js';
import type { ErrorPageDelegate } from './error_page.js';
import type { ItemDelegate } from './item.js';
import type { KeyboardShortcutDelegate } from './keyboard_shortcut_delegate.js';
import type { LoadErrorDelegate } from './load_error.js';
import type { Mv2DeprecationDelegate } from './mv2_deprecation_delegate.js';
import type { PackDialogDelegate } from './pack_dialog.js';
import type { SiteSettingsDelegate } from './site_permissions/site_settings_mixin.js';
import type { ToolbarDelegate } from './toolbar.js';
export interface ServiceInterface extends ActivityLogDelegate, ActivityLogEventDelegate, ErrorPageDelegate, ItemDelegate, KeyboardShortcutDelegate, LoadErrorDelegate, Mv2DeprecationDelegate, PackDialogDelegate, SiteSettingsDelegate, ToolbarDelegate {
    notifyDragInstallInProgress(): void;
    loadUnpackedFromDrag(): Promise<boolean>;
    installDroppedFile(): void;
    getProfileStateChangedTarget(): ChromeEvent<(info: chrome.developerPrivate.ProfileInfo) => void>;
    getProfileConfiguration(): Promise<chrome.developerPrivate.ProfileInfo>;
    getExtensionsInfo(): Promise<chrome.developerPrivate.ExtensionInfo[]>;
    getExtensionSize(id: string): Promise<string>;
    dismissSafetyHubExtensionsMenuNotification(): void;
    dismissMv2DeprecationNotice(): void;
    shouldIgnoreUpdate(extensionId: string, eventType: chrome.developerPrivate.EventType): boolean;
    showSiteSettings(extensionId: string): void;
    setProfileExtensionsPinnedByDefault(extensionsPinnedByDefault: boolean): void;
}
export declare class Service implements ServiceInterface {
    private isDeleting_;
    private eventsToIgnoreOnce_;
    getProfileConfiguration(): Promise<chrome.developerPrivate.ProfileInfo>;
    getItemStateChangedTarget(): ChromeEvent<(data: chrome.developerPrivate.EventData) => void>;
    shouldIgnoreUpdate(extensionId: string, eventType: chrome.developerPrivate.EventType): boolean;
    ignoreNextEvent(extensionId: string, eventType: chrome.developerPrivate.EventType): void;
    getProfileStateChangedTarget(): ChromeEvent<(info: chrome.developerPrivate.ProfileInfo) => void>;
    getExtensionsInfo(): Promise<chrome.developerPrivate.ExtensionInfo[]>;
    getExtensionSize(id: string): Promise<string>;
    addRuntimeHostPermission(id: string, host: string): Promise<void>;
    removeRuntimeHostPermission(id: string, host: string): Promise<void>;
    recordUserAction(metricName: string): void;
    /**
     * Opens a file browser dialog for the user to select a file (or directory).
     * @return The promise to be resolved with the selected path.
     */
    private chooseFilePath_;
    updateExtensionCommandKeybinding(extensionId: string, commandName: string, keybinding: string): void;
    updateExtensionCommandScope(extensionId: string, commandName: string, scope: chrome.developerPrivate.CommandScope): void;
    setShortcutHandlingSuspended(isCapturing: boolean): void;
    /**
     * @return A signal that loading finished, rejected if any error occurred.
     */
    private loadUnpackedHelper_;
    deleteItem(id: string): void;
    /**
     * Allows the consumer to call the API asynchronously.
     */
    uninstallItem(id: string): Promise<void>;
    openReviewPage(id: string): Promise<void>;
    deleteItems(ids: string[]): Promise<void>;
    private updateExtensionConfiguration_;
    private openDevTools_;
    setItemSafetyCheckWarningAcknowledged(id: string, reason: chrome.developerPrivate.SafetyCheckWarningReason): Promise<void>;
    setItemEnabled(id: string, isEnabled: boolean): Promise<void>;
    setItemAllowedIncognito(id: string, isAllowedIncognito: boolean): void;
    setItemAllowedUserScripts(id: string, isAllowedUserScripts: boolean): void;
    setItemAllowedOnFileUrls(id: string, isAllowedOnFileUrls: boolean): void;
    setItemHostAccess(id: string, hostAccess: chrome.developerPrivate.HostAccess): void;
    setItemCollectsErrors(id: string, collectsErrors: boolean): void;
    setItemPinnedToToolbar(id: string, pinnedToToolbar: boolean): void;
    inspectItemView(id: string, view: chrome.developerPrivate.ExtensionView): void;
    openDevToolsForError(error: chrome.developerPrivate.RuntimeError): void;
    openUrl(url: string): void;
    reloadItem(id: string): Promise<void>;
    repairItem(id: string): void;
    showItemOptionsPage(extension: chrome.developerPrivate.ExtensionInfo): void;
    setProfileInDevMode(inDevMode: boolean): void;
    loadUnpacked(): Promise<boolean>;
    retryLoadUnpacked(retryGuid?: string): Promise<boolean>;
    choosePackRootDirectory(): Promise<string>;
    choosePrivateKeyPath(): Promise<string>;
    packExtension(rootPath: string, keyPath: string, flag?: number): Promise<chrome.developerPrivate.PackDirectoryResponse>;
    updateAllExtensions(extensions: chrome.developerPrivate.ExtensionInfo[]): Promise<void>;
    deleteErrors(extensionId: string, errorIds?: number[], type?: chrome.developerPrivate.ErrorType): void;
    requestFileSource(args: chrome.developerPrivate.RequestFileSourceProperties): Promise<chrome.developerPrivate.RequestFileSourceResponse>;
    showInFolder(id: string): void;
    getExtensionActivityLog(extensionId: string): Promise<chrome.activityLogPrivate.ActivityResultSet>;
    getFilteredExtensionActivityLog(extensionId: string, searchTerm: string): Promise<{
        activities: any[];
    }>;
    deleteActivitiesById(activityIds: string[]): Promise<void>;
    deleteActivitiesFromExtension(extensionId: string): Promise<void>;
    getOnExtensionActivity(): ChromeEvent<(activity: chrome.activityLogPrivate.ExtensionActivity) => void>;
    downloadActivities(rawActivityData: string, fileName: string): void;
    /**
     * Attempts to load an unpacked extension via a drag-n-drop gesture.
     * @return {!Promise}
     */
    loadUnpackedFromDrag(): Promise<boolean>;
    installDroppedFile(): void;
    notifyDragInstallInProgress(): void;
    getUserSiteSettings(): Promise<chrome.developerPrivate.UserSiteSettings>;
    addUserSpecifiedSites(siteSet: chrome.developerPrivate.SiteSet, hosts: string[]): Promise<void>;
    removeUserSpecifiedSites(siteSet: chrome.developerPrivate.SiteSet, hosts: string[]): Promise<void>;
    getUserAndExtensionSitesByEtld(): Promise<chrome.developerPrivate.SiteGroup[]>;
    getMatchingExtensionsForSite(site: string): Promise<chrome.developerPrivate.MatchingExtensionInfo[]>;
    getUserSiteSettingsChangedTarget(): ChromeEvent<(settings: chrome.developerPrivate.UserSiteSettings) => void>;
    setShowAccessRequestsInToolbar(id: string, showRequests: boolean): void;
    updateSiteAccess(site: string, updates: chrome.developerPrivate.ExtensionSiteAccessUpdate[]): Promise<void>;
    dismissSafetyHubExtensionsMenuNotification(): void;
    dismissMv2DeprecationNotice(): void;
    uploadItemToAccount(id: string): Promise<boolean>;
    showSiteSettings(extensionId: string): void;
    setProfileExtensionsPinnedByDefault(extensionsPinnedByDefault: boolean): void;
    static getInstance(): ServiceInterface;
    static setInstance(obj: ServiceInterface): void;
}
