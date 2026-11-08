/**
 * @fileoverview Shared constants and enums used for logging user actions and
 * histograms in the extensions management page.
 */
export declare enum UserAction {
    ALL_TOGGLED_ON = "Extensions.Settings.HostList.AllHostsToggledOn",
    ALL_TOGGLED_OFF = "Extensions.Settings.HostList.AllHostsToggledOff",
    SPECIFIC_TOGGLED_ON = "Extensions.Settings.HostList.SpecificHostToggledOn",
    SPECIFIC_TOGGLED_OFF = "Extensions.Settings.HostList.SpecificHostToggledOff",
    LEARN_MORE = "Extensions.Settings.HostList.LearnMoreActivated"
}
export declare const SAFETY_HUB_EXTENSION_KEPT_HISTOGRAM_NAME = "SafeBrowsing.ExtensionSafetyHub.Trigger.Kept";
export declare const SAFETY_HUB_EXTENSION_REMOVED_HISTOGRAM_NAME = "SafeBrowsing.ExtensionSafetyHub.Trigger.Removed";
export declare const SAFETY_HUB_EXTENSION_SHOWN_HISTOGRAM_NAME = "SafeBrowsing.ExtensionSafetyHub.Trigger.Shown";
export declare const SAFETY_HUB_WARNING_REASON_MAX_SIZE = 7;
export declare const UPLOAD_EXTENSION_TO_ACCOUNT_ITEMS_LIST_PAGE_HISTOGRAM_NAME = "Extensions.UploadExtensionToAccount.ItemsListPage";
export declare const UPLOAD_EXTENSION_TO_ACCOUNT_DETAILS_VIEW_PAGE_HISTOGRAM_NAME = "Extensions.UploadExtensionToAccount.DetailsViewPage";
