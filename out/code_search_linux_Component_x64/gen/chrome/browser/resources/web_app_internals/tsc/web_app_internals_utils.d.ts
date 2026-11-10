/**
 * Represents the top-level debug info JSON output emitted by
 * BuildDebugInfo() in web_app_internals_handler.cc.
 */
export interface DebugData {
    InstalledWebApps: InstalledWebAppsData;
    LockManager: Record<string, unknown>;
    NavigationCapturing: unknown[];
    CommandManager: Record<string, unknown>;
    IconErrorLog: string[] | string;
    PreinstalledWebAppConfigs: Record<string, unknown> | string;
    UserUninstalledPreinstalledWebAppPrefs: Record<string, unknown>;
    WebAppPreferences: Record<string, unknown>;
    WebAppIphPreferences: Record<string, unknown>;
    WebAppMlPreferences: Record<string, unknown>;
    WebAppIPHLinkCapturingPreferences: Record<string, unknown>;
    ShouldGarbageCollectStoragePartitions: boolean;
    IsolatedWebAppUpdateManager: Record<string, unknown>;
    IsolatedWebAppPolicyManager: Record<string, unknown>;
    IwaKeyDistributionInfoProvider: Record<string, unknown>;
    WebAppDirectoryDiskState: Record<string, unknown>;
    AppShimRegistryLocalStorage?: Record<string, unknown>;
    IwaBundleCacheManager?: Record<string, unknown>;
    DatabaseLog?: unknown[];
}
/**
 * Result of filterToApp(): either the full DebugData (when filtering doesn't
 * apply) or a subset containing only the filtered InstalledWebApps section.
 */
export type FilteredDebugData = DebugData | Pick<DebugData, 'InstalledWebApps'>;
/**
 * Typed representation of the InstalledWebApps section produced by
 * WebAppRegistrar::AsDebugValue().
 */
export interface InstalledWebAppsData {
    '!Index': Record<string, string | string[]>;
    'Details': Array<{
        '!app_id': string;
        [key: string]: unknown;
    }>;
}
/**
 * Represents a single navigation link entry in the installed web apps index.
 */
export interface AppIndexEntry {
    id: string;
    label: string;
    isActive: boolean;
}
/**
 * Gets the app ID query from the URL hash fragment.
 * For example, if the URL is "chrome://web-app-internals/#abc" then the
 * query is "abc".
 */
export declare function getQuery(): string;
/**
 * Extracts and formats the index entries of installed web apps from the parsed
 * debug JSON for declarative rendering in Lit.
 */
export declare function getAppIndexEntries(data: DebugData, query: string): AppIndexEntry[];
/**
 * Filters the debug data to only show the InstalledWebApps section with the
 * matching app's details. The !Index is preserved for navigation. All other
 * sections are removed to reduce clutter.
 */
export declare function filterToApp(data: DebugData, appId: string): FilteredDebugData;
/**
 * A JSON.stringify replacer function (second parameter) that orders top-level
 * DebugData dictionary keys into a logical subsystem sequence matching
 * DebugDataKeyOrder while preserving all nested properties and sections intact.
 */
export declare function debugDataJsonReplacer(key: string, value: unknown): unknown;
