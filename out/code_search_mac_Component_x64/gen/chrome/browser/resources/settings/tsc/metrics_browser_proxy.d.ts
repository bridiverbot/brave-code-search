/** @fileoverview Handles metrics for the settings pages. */
/**
 * Contains all possible recorded interactions across privacy settings pages.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the SettingsPrivacyElementInteractions enum in
 * histograms/metadata/settings/enums.xml
 */
export declare enum PrivacyElementInteractions {
    DO_NOT_TRACK = 2,
    PAYMENT_METHOD = 3,
    MANAGE_CERTIFICATES = 5,
    IMPROVE_SECURITY = 8,
    SITE_DETAILS_CLEAR_DATA = 19,
    THIRD_PARTY_COOKIES_ALLOW = 20,
    THIRD_PARTY_COOKIES_BLOCK_IN_INCOGNITO = 21,
    THIRD_PARTY_COOKIES_BLOCK = 22,
    BLOCK_ALL_THIRD_PARTY_COOKIES = 23,
    COUNT = 26
}
/**
 * Contains all Safety Hub card states.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with SafetyHubCardState in
 * histograms/enums.xml and CardState in safety_hub/safety_hub_browser_proxy.ts.
 */
export declare enum SafetyHubCardState {
    WARNING = 0,
    WEAK = 1,
    INFO = 2,
    SAFE = 3,
    COUNT = 4
}
/**
 * Contains all safety check unused site permissions module interactions.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the
 * SafetyCheckUnusedSitePermissionsModuleInteractions enum in
 * histograms/enums.xml
 */
export declare enum SafetyCheckUnusedSitePermissionsModuleInteractions {
    OPEN_REVIEW_UI = 0,
    ALLOW_AGAIN = 1,
    ACKNOWLEDGE_ALL = 2,
    UNDO_ALLOW_AGAIN = 3,
    UNDO_ACKNOWLEDGE_ALL = 4,
    MINIMIZE = 5,
    GO_TO_SETTINGS = 6,
    COUNT = 7
}
/**
 * Contains all entry points for Safety Hub page.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the SafetyHubEntryPoint enum in
 * histograms/enums.xml and safety_hub/safety_hub_constants.h.
 */
export declare enum SafetyHubEntryPoint {
    PRIVACY_SAFE = 0,
    PRIVACY_WARNING = 1,
    SITE_SETTINGS = 2,
    THREE_DOT_MENU = 3,
    NOTIFICATIONS = 4,
    COUNT = 5
}
/**
 * Contains all Safety Hub modules.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the SafetyHubModuleType enum in
 * histograms/enums.xml and safety_hub/safety_hub_constants.h.
 */
export declare enum SafetyHubModuleType {
    PERMISSIONS = 0,
    NOTIFICATIONS = 1,
    SAFE_BROWSING = 2,
    EXTENSIONS = 3,
    PASSWORDS = 4,
    VERSION = 5,
    COUNT = 6
}
/**
 * Contains all safe browsing interactions.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the UserAction in safe_browsing_settings_metrics.h.
 */
export declare enum SafeBrowsingInteractions {
    SAFE_BROWSING_SHOWED = 0,
    SAFE_BROWSING_ENHANCED_PROTECTION_CLICKED = 1,
    SAFE_BROWSING_STANDARD_PROTECTION_CLICKED = 2,
    SAFE_BROWSING_DISABLE_SAFE_BROWSING_CLICKED = 3,
    SAFE_BROWSING_ENHANCED_PROTECTION_EXPAND_ARROW_CLICKED = 4,
    SAFE_BROWSING_STANDARD_PROTECTION_EXPAND_ARROW_CLICKED = 5,
    SAFE_BROWSING_DISABLE_SAFE_BROWSING_DIALOG_CONFIRMED = 6,
    SAFE_BROWSING_DISABLE_SAFE_BROWSING_DIALOG_DENIED = 7,
    COUNT = 8
}
/**
 * All Privacy guide interactions with metrics.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with SettingsPrivacyGuideInteractions in emus.xml and
 * PrivacyGuideInteractions in privacy_guide/privacy_guide.h.
 */
export declare enum PrivacyGuideInteractions {
    WELCOME_NEXT_BUTTON = 0,
    MSBB_NEXT_BUTTON = 1,
    HISTORY_SYNC_NEXT_BUTTON = 2,
    SAFE_BROWSING_NEXT_BUTTON = 3,
    COOKIES_NEXT_BUTTON = 4,
    COMPLETION_NEXT_BUTTON = 5,
    SETTINGS_LINK_ROW_ENTRY = 6,
    PROMO_ENTRY = 7,
    SWAA_COMPLETION_LINK = 8,
    PRIVACY_SANDBOX_COMPLETION_LINK = 9,
    SEARCH_SUGGESTIONS_NEXT_BUTTON = 10,
    AI_SETTINGS_COMPLETION_LINK = 13,
    COUNT = 14
}
/**
 * This enum covers all possible combinations of the start and end
 * settings states for each Privacy guide fragment, allowing metrics to see if
 * users change their settings inside of Privacy guide or not. The format is
 * settingAtStart-To-settingAtEnd.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with SettingsPrivacyGuideSettingsStates in enums.xml and
 * PrivacyGuideSettingsStates in privacy_guide/privacy_guide.h.
 */
export declare enum PrivacyGuideSettingsStates {
    MSBB_ON_TO_ON = 0,
    MSBB_ON_TO_OFF = 1,
    MSBB_OFF_TO_ON = 2,
    MSBB_OFF_TO_OFF = 3,
    BLOCK_3P_INCOGNITO_TO_3P_INCOGNITO = 4,
    BLOCK_3P_INCOGNITO_TO_3P = 5,
    BLOCK_3P_TO_3P_INCOGNITO = 6,
    BLOCK_3P_TO_3P = 7,
    HISTORY_SYNC_ON_TO_ON = 8,
    HISTORY_SYNC_ON_TO_OFF = 9,
    HISTORY_SYNC_OFF_TO_ON = 10,
    HISTORY_SYNC_OFF_TO_OFF = 11,
    SAFE_BROWSING_ENHANCED_TO_ENHANCED = 12,
    SAFE_BROWSING_ENHANCED_TO_STANDARD = 13,
    SAFE_BROWSING_STANDARD_TO_ENHANCED = 14,
    SAFE_BROWSING_STANDARD_TO_STANDARD = 15,
    SEARCH_SUGGESTIONS_ON_TO_ON = 16,
    SEARCH_SUGGESTIONS_ON_TO_OFF = 17,
    SEARCH_SUGGESTIONS_OFF_TO_ON = 18,
    SEARCH_SUGGESTIONS_OFF_TO_OFF = 19,
    COUNT = 24
}
/**
 * This enum is used with metrics to record when a step in the privacy guide is
 * eligible to be shown and/or reached by the user.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with SettingsPrivacyGuideStepsEligibleAndReached in
 * enums.xml and PrivacyGuideStepsEligibleAndReached in
 * privacy_guide/privacy_guide.h.
 */
export declare enum PrivacyGuideStepsEligibleAndReached {
    MSBB_ELIGIBLE = 0,
    MSBB_REACHED = 1,
    HISTORY_SYNC_ELIGIBLE = 2,
    HISTORY_SYNC_REACHED = 3,
    SAFE_BROWSING_ELIGIBLE = 4,
    SAFE_BROWSING_REACHED = 5,
    COOKIES_ELIGIBLE = 6,
    COOKIES_REACHED = 7,
    COMPLETION_ELIGIBLE = 8,
    COMPLETION_REACHED = 9,
    SEARCH_SUGGESTIONS_ELIGIBLE = 10,
    SEARCH_SUGGESTIONS_REACHED = 11,
    COUNT = 14
}
/**
 * Contains the possible delete browsing data action types.
 * This should be kept in sync with the `DeleteBrowsingDataAction` enum in
 * components/browsing_data/core/browsing_data_utils.h
 */
export declare enum DeleteBrowsingDataAction {
    CLEAR_BROWSING_DATA_DIALOG = 0,
    CLEAR_BROWSING_DATA_ON_EXIT = 1,
    INCOGNITO_CLOSE_TABS = 2,
    COOKIES_IN_USE_DIALOG = 3,
    SITES_SETTINGS_PAGE = 4,
    HISTORY_PAGE_ENTRIES = 5,
    QUICK_DELETE = 6,
    PAGE_INFO_RESET_PERMISSIONS = 7,
    RWS_DELETE_ALL_DATA = 8,
    COUNT = 9
}
/**
 * This enum contains the different surfaces of Safety Hub that users can
 * interact with, or on which they can observe a Safety Hub feature.
 *
 * Must be kept in sync with the `safety_hub::SafetyHubSurfaces` enum in
 * chrome/browser/ui/safety_hub/safety_hub_constants.h and `SafetyHubSurfaces`
 * in enums.xml
 */
export declare enum SafetyHubSurfaces {
    THREE_DOT_MENU = 0,
    SAFETY_HUB_PAGE = 1,
    COUNT = 2
}
/**
 * This enum contains the possible user actions for the bulk CVC deletion
 * operation on the payments settings page.
 */
export declare enum CvcDeletionUserAction {
    HYPERLINK_CLICKED = "BulkCvcDeletionHyperlinkClicked",
    DIALOG_ACCEPTED = "BulkCvcDeletionConfirmationDialogAccepted",
    DIALOG_CANCELLED = "BulkCvcDeletionConfirmationDialogCancelled"
}
/**
 * This enum contains relevant UserAction log names for card benefits-related
 * functionality on the payment methods settings page.
 */
export declare enum CardBenefitsUserAction {
    CARD_BENEFITS_TERMS_LINK_CLICKED = "CardBenefits_TermsLinkClicked"
}
/**
 * Contains all recorded interactions across AI settings page.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the SettingsAiPageInteractions enum in
 * histograms/metadata/settings/enums.xml
 */
export declare enum AiPageInteractions {
    HISTORY_SEARCH_CLICK = 0,
    COMPOSE_CLICK = 2,
    AUTOFILL_AI_CLICK = 5,
    PASSWORD_CHANGE_CLICK = 6,
    AI_SUGGESTIONS_CLICK = 7,
    SKILLS_CLICK = 8,
    INDIGO_CLICK = 9,
    GOOGLE_SEARCH_AI_MODE_WORKSPACE_CLICK = 10,
    INLINE_CUE_MENU_CLICK = 11,
    COUNT = 12
}
/**
 * Contains all recorded interactions in the AI History Search settings page.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the SettingsAiPageHistorySearchInteractions enum in
 * histograms/metadata/settings/enums.xml
 */
export declare enum AiPageHistorySearchInteractions {
    HISTORY_SEARCH_ENABLED = 0,
    HISTORY_SEARCH_DISABLED = 1,
    FEATURE_LINK_CLICKED = 2,
    LEARN_MORE_LINK_CLICKED = 3,
    COUNT = 4
}
/**
 * Contains all recorded interactions in the AI Compose settings page.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the SettingsAiPageComposeInteractions enum in
 * histograms/metadata/settings/enums.xml
 */
export declare enum AiPageComposeInteractions {
    LEARN_MORE_LINK_CLICKED = 0,
    COMPOSE_PROACTIVE_NUDGE_ENABLED = 1,
    COMPOSE_PROACTIVE_NUDGE_DISABLED = 2,
    COUNT = 3
}
/**
 * Contains all recorded interactions in the AI Suggestions settings page.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the SettingsAiPageSuggestionsInteractions enum in
 * histograms/metadata/settings/enums.xml
 */
export declare enum AiPageSuggestionsInteractions {
    SUGGESTIONS_ENABLED = 0,
    SUGGESTIONS_DISABLED = 1,
    LEARN_MORE_LINK_CLICKED = 2,
    SYNC_SETTINGS_LINK_CLICKED = 3,
    COUNT = 4
}
/**
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the AutofillSettingsReferrer enum in
 * histograms/metadata/autofill/enums.xml
 */
export declare enum AutofillSettingsReferrer {
    SETTINGS_MENU = 1,
    AUTOFILL_AND_PASSWORDS_PAGE = 2,
    COUNT = 5
}
/**
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the YourSavedInfoDataCategory enum in
 * histograms/metadata/autofill/enums.xml
 */
export declare enum YourSavedInfoDataCategory {
    PASSWORD_MANAGER = 0,
    PAYMENTS = 1,
    CONTACT_INFO = 2,
    IDENTITY_DOCS = 3,
    TRAVEL = 4,
    SHOPPING = 5,
    COUNT = 6
}
/**
 * A specific kind of saved user's information.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the YourSavedInfoDataChip enum in
 * histograms/metadata/autofill/enums.xml
 */
export declare enum YourSavedInfoDataChip {
    PASSWORDS = 0,
    PASSKEYS = 1,
    CREDIT_CARDS = 2,
    PAY_OVER_TIME = 3,
    IBANS = 4,
    LOYALTY_CARDS = 5,
    ADDRESSES = 6,
    DRIVERS_LICENSES = 7,
    NATIONAL_ID_CARDS = 8,
    PASSPORTS = 9,
    FLIGHT_RESERVATIONS = 10,
    TRAVEL_INFO = 11,
    VEHICLES = 12,
    SHIPMENTS = 13,
    ORDERS = 14,
    COUNT = 15
}
/**
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the YourSavedInfoDataCategory enum in
 * histograms/metadata/autofill/enums.xml
 */
export declare enum YourSavedInfoRelatedService {
    GOOGLE_PASSWORD_MANAGER = 0,
    GOOGLE_WALLET = 1,
    GOOGLE_ACCOUNT = 2,
    COUNT = 3
}
export declare enum SuggestionsFromGeminiEntryPoint {
    YOUR_SAVED_INFO = 0,
    TRAVEL = 1,
    SHOPPING = 2,
    IDENTITY_DOCS = 3,
    COUNT = 4
}
export declare enum SuggestionsFromGeminiAction {
    MANAGE_CONNECTED_APPS_CLICK = 0,
    TOGGLE_ON = 1,
    TOGGLE_OFF = 2,
    COUNT = 3
}
/**
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the SettingsSearchExitReasonDesktop enum in
 * histograms/metadata/settings/enums.xml
 */
export declare enum SettingsSearchExitReasonDesktop {
    INTERACTED_WITH_RESULT = 0,
    CLEAR_QUERY = 1,
    NAVIGATE_SIDEBAR = 2,
    EXIT_SETTINGS = 3,
    BACK_NAVIGATION = 4,
    COUNT = 5
}
export interface MetricsBrowserProxy {
    /**
     * Helper function that calls recordHistogram for the
     * Settings.Search.ExitReasonDesktop histogram
     */
    recordSettingsSearchExitReason(reason: SettingsSearchExitReasonDesktop): void;
    /**
     * Helper function that records the Settings.Search.ResultDwellTime
     * histogram, using a bucket range of up to one hour. Named rather than
     * generic so that callers do not need to know which bucket range the
     * histogram uses.
     */
    recordSettingsSearchResultDwellTime(time: number): void;
    /**
     * Helper function that triggers the C++ CUJ interaction sequence step when
     * a navigation category in the settings menu is clicked.
     */
    recordSettingsNavCategoryClicked(): void;
    /**
     * Helper function that triggers the C++ CUJ interaction sequence step when
     * a settings search query is submitted.
     */
    recordSettingsSearchQueryEntered(): void;
    /**
     * Helper function that calls recordAction with one action from
     * tools/metrics/actions/actions.xml.
     */
    recordAction(action: string): void;
    /**
     * Helper function that calls recordBooleanHistogram with the histogramName.
     */
    recordBooleanHistogram(histogramName: string, visible: boolean): void;
    /**
     * Helper function that calls recordHistogram for the
     * Settings.SafetyHub.EntryPointShown histogram
     */
    recordSafetyHubEntryPointShown(page: SafetyHubEntryPoint): void;
    /**
     * Helper function that calls recordHistogram for the
     *Settings.SafetyHub.EntryPointClicked histogram
     */
    recordSafetyHubEntryPointClicked(page: SafetyHubEntryPoint): void;
    /**
     * Helper function that calls recordHistogram for the
     * Settings.SafetyHub.DashboardWarning histogram
     */
    recordSafetyHubModuleWarningImpression(module: SafetyHubModuleType): void;
    /**
     * Helper function that calls recordHistogram for the
     * Settings.SafetyHub.HasDashboardShowAnyWarning histogram
     */
    recordSafetyHubDashboardAnyWarning(visible: boolean): void;
    /**
     * Helper function that calls recordHistogram for the
     * Settings.SafetyHub.[card_name].StatusOnClick histogram
     */
    recordSafetyHubCardStateClicked(histogramName: string, state: SafetyHubCardState): void;
    /**
     * Helper function that calls recordHistogram for the
     * Settings.SafetyHub.UnusedSitePermissionsModule.Interactions histogram
     */
    recordSafetyHubUnusedSitePermissionsModuleInteractionsHistogram(interaction: SafetyCheckUnusedSitePermissionsModuleInteractions): void;
    /**
     * Helper function that calls recordHistogram for the
     * Settings.SafetyHub.AbusiveNotificationPermissionRevocation.Interactions
     * histogram
     */
    recordSafetyHubAbusiveNotificationPermissionRevocationInteractionsHistogram(interaction: SafetyCheckUnusedSitePermissionsModuleInteractions): void;
    /**
     * Helper function that calls recordHistogram for
     * Settings.SafetyHub.UnusedSitePermissionsModule.ListCount histogram
     */
    recordSafetyHubUnusedSitePermissionsModuleListCountHistogram(suggestions: number): void;
    /**
     * Helper function that calls recordHistogram for the
     * SettingsPage.PrivacyElementInteractions histogram
     */
    recordSettingsPageHistogram(interaction: PrivacyElementInteractions): void;
    /**
     * Helper function that calls recordHistogram for the
     * SafeBrowsing.Settings.UserAction histogram
     */
    recordSafeBrowsingInteractionHistogram(interaction: SafeBrowsingInteractions): void;
    /**
     * Records a click on the Suggestions from Gemini link across Your saved info
     * and category subpages with a corresponding metric and user action.
     */
    recordSuggestionsFromGeminiEntryPointClick(entryPoint: SuggestionsFromGeminiEntryPoint): void;
    /**
     * Records an action triggered inside the Suggestions from Gemini subpage
     * with a corresponding metric and user action.
     */
    recordSuggestionsFromGeminiAction(action: SuggestionsFromGeminiAction): void;
    /**
     * Helper function that calls recordHistogram for the
     * Settings.PrivacyGuide.NextNavigation histogram
     */
    recordPrivacyGuideNextNavigationHistogram(interaction: PrivacyGuideInteractions): void;
    /**
     * Helper function that calls recordHistogram for the
     * Settings.PrivacyGuide.EntryExit histogram
     */
    recordPrivacyGuideEntryExitHistogram(interaction: PrivacyGuideInteractions): void;
    /**
     * Helper function that calls recordHistogram for the
     * Settings.PrivacyGuide.SettingsStates histogram
     */
    recordPrivacyGuideSettingsStatesHistogram(state: PrivacyGuideSettingsStates): void;
    /**
     * Helper function that calls recordHistogram for the
     * Settings.PrivacyGuide.FlowLength histogram
     */
    recordPrivacyGuideFlowLengthHistogram(steps: number): void;
    /**
     * Helper function that calls recordHistogram for the
     * Settings.PrivacyGuide.StepsEligibleAndReached histogram
     */
    recordPrivacyGuideStepsEligibleAndReachedHistogram(status: PrivacyGuideStepsEligibleAndReached): void;
    /**
     * Helper function that delegates the metric recording to the
     * recordDeleteBrowsingDataAction backend function.
     */
    recordDeleteBrowsingDataAction(action: DeleteBrowsingDataAction): void;
    /**
     * Notifies Chrome that the Clear Browsing Data dialog was cancelled or
     * dismissed without clearing browsing data.
     */
    recordClearBrowsingDataCancelled(): void;
    /**
     * Helper function that calls records an impression of the provided Safety Hub
     * surface.
     */
    recordSafetyHubImpression(surface: SafetyHubSurfaces): void;
    /**
     * Helper function that calls records an interaction of the provided Safety
     * Hub surface.
     */
    recordSafetyHubInteraction(surface: SafetyHubSurfaces): void;
    /**
     * Helper function that calls recordHistogram for the
     * Settings.AiPage.Interactions histogram
     */
    recordAiPageInteractions(interaction: AiPageInteractions): void;
    /**
     * Helper function that calls recordHistogram for the
     * Settings.AiPage.HistorySearch.Interactions histogram
     */
    recordAiPageHistorySearchInteractions(interaction: AiPageHistorySearchInteractions): void;
    /**
     * Helper function that calls recordHistogram for the
     * Settings.AiPage.Compose.Interactions histogram
     */
    recordAiPageComposeInteractions(interaction: AiPageComposeInteractions): void;
    /**
     * Helper function that calls recordHistogram for the
     * Settings.AiPage.Suggestions.Interactions histogram
     */
    recordAiPageSuggestionsInteractions(interaction: AiPageSuggestionsInteractions): void;
    /**
     * Records a referrer to one of Autofill settings pages.
     */
    recordAutofillSettingsReferrer(histogramName: string, referrer: AutofillSettingsReferrer): void;
    /**
     * Records a click on a category link on the Your saved info page with
     * a corresponding metric and user action.
     */
    recordYourSavedInfoCategoryClick(category: YourSavedInfoDataCategory): void;
    /**
     * Records a click on a data chip on the Your saved info page with
     * a corresponding metric and user action.
     */
    recordYourSavedInfoDataChipClick(chip: YourSavedInfoDataChip): void;
    /**
     * Records a click on a related service link on the Your saved info page with
     * a corresponding metric and user action.
     */
    recordYourSavedInfoRelatedServiceClick(service: YourSavedInfoRelatedService): void;
}
export declare const SAFETY_HUB_SUGGESTIONS_MAX_VALUE = 98;
export declare class MetricsBrowserProxyImpl implements MetricsBrowserProxy {
    recordSettingsSearchExitReason(reason: SettingsSearchExitReasonDesktop): void;
    recordSettingsSearchResultDwellTime(time: number): void;
    recordSettingsNavCategoryClicked(): void;
    recordSettingsSearchQueryEntered(): void;
    recordAction(action: string): void;
    recordBooleanHistogram(histogramName: string, visible: boolean): void;
    recordSafetyHubCardStateClicked(histogramName: string, state: SafetyHubCardState): void;
    recordSafetyHubEntryPointShown(page: SafetyHubEntryPoint): void;
    recordSafetyHubEntryPointClicked(page: SafetyHubEntryPoint): void;
    recordSafetyHubModuleWarningImpression(module: SafetyHubModuleType): void;
    recordSafetyHubDashboardAnyWarning(visible: boolean): void;
    recordSafetyHubUnusedSitePermissionsModuleInteractionsHistogram(interaction: SafetyCheckUnusedSitePermissionsModuleInteractions): void;
    recordSafetyHubAbusiveNotificationPermissionRevocationInteractionsHistogram(interaction: SafetyCheckUnusedSitePermissionsModuleInteractions): void;
    recordSafetyHubUnusedSitePermissionsModuleListCountHistogram(suggestions: number): void;
    recordSettingsPageHistogram(interaction: PrivacyElementInteractions): void;
    recordSafeBrowsingInteractionHistogram(interaction: SafeBrowsingInteractions): void;
    recordPrivacyGuideNextNavigationHistogram(interaction: PrivacyGuideInteractions): void;
    recordPrivacyGuideEntryExitHistogram(interaction: PrivacyGuideInteractions): void;
    recordPrivacyGuideSettingsStatesHistogram(state: PrivacyGuideSettingsStates): void;
    recordPrivacyGuideFlowLengthHistogram(steps: number): void;
    recordPrivacyGuideStepsEligibleAndReachedHistogram(status: PrivacyGuideStepsEligibleAndReached): void;
    recordDeleteBrowsingDataAction(action: DeleteBrowsingDataAction): void;
    recordClearBrowsingDataCancelled(): void;
    recordSafetyHubImpression(surface: SafetyHubSurfaces): void;
    recordSafetyHubInteraction(surface: SafetyHubSurfaces): void;
    recordAiPageInteractions(interaction: AiPageInteractions): void;
    recordAiPageHistorySearchInteractions(interaction: AiPageHistorySearchInteractions): void;
    recordAiPageComposeInteractions(interaction: AiPageComposeInteractions): void;
    recordAiPageSuggestionsInteractions(interaction: AiPageSuggestionsInteractions): void;
    recordAutofillSettingsReferrer(histogramName: string, referrer: AutofillSettingsReferrer): void;
    recordYourSavedInfoCategoryClick(category: YourSavedInfoDataCategory): void;
    recordYourSavedInfoDataChipClick(chip: YourSavedInfoDataChip): void;
    recordYourSavedInfoRelatedServiceClick(service: YourSavedInfoRelatedService): void;
    recordSuggestionsFromGeminiEntryPointClick(entryPoint: SuggestionsFromGeminiEntryPoint): void;
    recordSuggestionsFromGeminiAction(action: SuggestionsFromGeminiAction): void;
    static getInstance(): MetricsBrowserProxy;
    static setInstance(obj: MetricsBrowserProxy): void;
}
