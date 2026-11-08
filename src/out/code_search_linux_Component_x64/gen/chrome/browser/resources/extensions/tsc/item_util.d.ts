import '/strings.m.js';
export declare enum SafetyCheckWarningReason {
    UNPUBLISHED = 1,
    POLICY = 2,
    MALWARE = 3,
    OFFSTORE = 4,
    UNWANTED = 5,
    NO_PRIVACY_PRACTICE = 6
}
export declare enum SourceType {
    WEBSTORE = "webstore",
    POLICY = "policy",
    SIDELOADED = "sideloaded",
    UNPACKED = "unpacked",
    INSTALLED_BY_DEFAULT = "installed-by-default",
    UNKNOWN = "unknown"
}
export declare enum EnableControl {
    RELOAD = "RELOAD",
    REPAIR = "REPAIR",
    ENABLE_TOGGLE = "ENABLE_TOGGLE"
}
export declare const TOAST_DURATION_MS = 3000;
/**
 * Returns true if the extension is enabled, including terminated
 * extensions.
 */
export declare function isEnabled(state: chrome.developerPrivate.ExtensionState): boolean;
/**
 * @return Whether the user can change whether or not the extension is
 *     enabled.
 */
export declare function userCanChangeEnablement(item: chrome.developerPrivate.ExtensionInfo): boolean;
export declare function getItemSource(item: chrome.developerPrivate.ExtensionInfo): SourceType;
export declare function getItemSourceString(source: SourceType): string;
export declare function convertSafetyCheckReason(reason: chrome.developerPrivate.SafetyCheckWarningReason): SafetyCheckWarningReason;
/**
 * Computes the human-facing label for the given inspectable view.
 */
export declare function computeInspectableViewLabel(view: chrome.developerPrivate.ExtensionView): string;
/**
 * Computes the accessible human-facing aria label for an extension toggle item.
 */
export declare function getEnableToggleAriaLabel(toggleEnabled: boolean, extensionsDataType: chrome.developerPrivate.ExtensionType, appEnabled: string, extensionEnabled: string, itemOff: string): string;
/**
 * Clones the array and returns a new array with background pages and service
 * workers sorted before other views.
 * @returns Sorted array.
 */
export declare function sortViews(views: chrome.developerPrivate.ExtensionView[]): chrome.developerPrivate.ExtensionView[];
/**
 * Determines which enable control to display for a given extension.
 */
export declare function getEnableControl(data: chrome.developerPrivate.ExtensionInfo): EnableControl;
export declare function createDummyExtensionInfo(): chrome.developerPrivate.ExtensionInfo;
