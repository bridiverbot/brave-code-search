import type { App, Permission } from './app_management.mojom-webui.js';
import { AppType, TriState } from './app_management.mojom-webui.js';
import { AppManagementUserAction } from './constants.js';
import type { PermissionTypeIndex } from './permission_constants.js';
/**
 * @fileoverview Utility functions for the App Management page.
 */
interface AppManagementPageState {
    apps: Record<string, App>;
    selectedAppId: string | null;
    subAppToParentAppId: Record<string, string>;
}
export declare function createEmptyState(): AppManagementPageState;
export declare function createInitialState(apps: App[], subAppToParentAppId: {
    [key: string]: string;
}): AppManagementPageState;
export declare function getAppIcon(app: App): string;
export declare function getPermissionValueBool(app: App, permissionType: PermissionTypeIndex): boolean;
/**
 * Returns the TriState value of a permission. If the permission value is not
 * already a TriState, it will be converted based on the boolean value.
 */
export declare function getPermissionValueAsTriState(app: App, permissionType: PermissionTypeIndex): TriState;
/**
 * Undefined is returned when the app does not request a permission.
 */
export declare function getPermission(app: App, permissionType: PermissionTypeIndex): Permission | undefined;
export declare function getSelectedApp(state: AppManagementPageState): App | null;
/**
 * Returns a list of all apps whose parent's app ID matches the selected app.
 */
export declare function getSubAppsOfSelectedApp(state: AppManagementPageState): App[];
/**
 * Returns the selected app's parent app or null.
 */
export declare function getParentApp(state: AppManagementPageState): App | null;
/**
 * A comparator function to sort strings alphabetically.
 */
export declare function alphabeticalSort(a: string, b: string): number;
export declare function recordAppManagementUserAction(appType: AppType, userAction: AppManagementUserAction): void;
/**
 * @param arg An argument to check for existence.
 * @throws If |arg| is undefined or null.
 */
export declare function assertExists<T>(arg: T, message?: string): asserts arg is NonNullable<T>;
/**
 * @param arg A argument to check for existence.
 * @return |arg| with the type narrowed as non-nullable.
 * @throws If |arg| is undefined or null.
 */
export declare function castExists<T>(arg: T, message?: string): NonNullable<T>;
export {};
