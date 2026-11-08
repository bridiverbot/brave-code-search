// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export const RESULTS_PER_PAGE = 150;
/**
 * Amount of time between pageviews that we consider a 'break' in browsing,
 * measured in milliseconds.
 */
export const BROWSING_GAP_TIME = 15 * 60 * 1000;
// This enum is used to differentiate all the relevant sign-in/history-sync
// states.
// LINT.IfChange(HistorySignInState)
export var HistorySignInState;
(function (HistorySignInState) {
    HistorySignInState[HistorySignInState["SIGNED_OUT"] = 0] = "SIGNED_OUT";
    // The user is signed in only in web.
    HistorySignInState[HistorySignInState["WEB_ONLY_SIGNED_IN"] = 1] = "WEB_ONLY_SIGNED_IN";
    // The user is signed in.
    HistorySignInState[HistorySignInState["SIGNED_IN"] = 2] = "SIGNED_IN";
    // The user is pending sign-in.
    HistorySignInState[HistorySignInState["SIGN_IN_PENDING"] = 3] = "SIGN_IN_PENDING";
})(HistorySignInState || (HistorySignInState = {}));
// LINT.ThenChange(/chrome/browser/ui/webui/history/history_identity_state_watcher.h:HistoryIdentityState.SignIn)
// Enum below is used to differentiate all the relevant history-sync states.
// LINT.IfChange(SyncState)
export var SyncState;
(function (SyncState) {
    SyncState[SyncState["TURNED_OFF"] = 0] = "TURNED_OFF";
    SyncState[SyncState["TURNED_ON"] = 1] = "TURNED_ON";
    SyncState[SyncState["DISABLED"] = 2] = "DISABLED";
})(SyncState || (SyncState = {}));
// LINT.ThenChange(/chrome/browser/ui/webui/history/history_identity_state_watcher.h:HistoryIdentityState.SyncState)
/**
 * Histogram buckets for UMA tracking of which view is being shown to the user.
 * Keep this in sync with the HistoryPageView enum in histograms.xml.
 * This enum is append-only.
 */
export var HistoryPageViewHistogram;
(function (HistoryPageViewHistogram) {
    HistoryPageViewHistogram[HistoryPageViewHistogram["HISTORY"] = 0] = "HISTORY";
    HistoryPageViewHistogram[HistoryPageViewHistogram["DEPRECATED_GROUPED_WEEK"] = 1] = "DEPRECATED_GROUPED_WEEK";
    HistoryPageViewHistogram[HistoryPageViewHistogram["DEPRECATED_GROUPED_MONTH"] = 2] = "DEPRECATED_GROUPED_MONTH";
    HistoryPageViewHistogram[HistoryPageViewHistogram["SYNCED_TABS"] = 3] = "SYNCED_TABS";
    HistoryPageViewHistogram[HistoryPageViewHistogram["SIGNIN_PROMO"] = 4] = "SIGNIN_PROMO";
    HistoryPageViewHistogram[HistoryPageViewHistogram["JOURNEYS"] = 5] = "JOURNEYS";
    HistoryPageViewHistogram[HistoryPageViewHistogram["PRODUCT_SPECIFICATIONS_LISTS"] = 6] = "PRODUCT_SPECIFICATIONS_LISTS";
    HistoryPageViewHistogram[HistoryPageViewHistogram["END"] = 7] = "END";
})(HistoryPageViewHistogram || (HistoryPageViewHistogram = {}));
export const SYNCED_TABS_HISTOGRAM_NAME = 'HistoryPage.OtherDevicesMenu';
/**
 * Histogram buckets for UMA tracking of synced tabs. Keep in sync with
 * chrome/browser/ui/webui/foreign_session_handler.h. These values are persisted
 * to logs. Entries should not be renumbered and numeric values should never be
 * reused.
 */
export var SyncedTabsHistogram;
(function (SyncedTabsHistogram) {
    SyncedTabsHistogram[SyncedTabsHistogram["INITIALIZED"] = 0] = "INITIALIZED";
    SyncedTabsHistogram[SyncedTabsHistogram["SHOW_MENU_DEPRECATED"] = 1] = "SHOW_MENU_DEPRECATED";
    SyncedTabsHistogram[SyncedTabsHistogram["LINK_CLICKED"] = 2] = "LINK_CLICKED";
    SyncedTabsHistogram[SyncedTabsHistogram["LINK_RIGHT_CLICKED"] = 3] = "LINK_RIGHT_CLICKED";
    SyncedTabsHistogram[SyncedTabsHistogram["SESSION_NAME_RIGHT_CLICKED_DEPRECATED"] = 4] = "SESSION_NAME_RIGHT_CLICKED_DEPRECATED";
    SyncedTabsHistogram[SyncedTabsHistogram["SHOW_SESSION_MENU"] = 5] = "SHOW_SESSION_MENU";
    SyncedTabsHistogram[SyncedTabsHistogram["COLLAPSE_SESSION"] = 6] = "COLLAPSE_SESSION";
    SyncedTabsHistogram[SyncedTabsHistogram["EXPAND_SESSION"] = 7] = "EXPAND_SESSION";
    SyncedTabsHistogram[SyncedTabsHistogram["OPEN_ALL"] = 8] = "OPEN_ALL";
    SyncedTabsHistogram[SyncedTabsHistogram["HAS_FOREIGN_DATA"] = 9] = "HAS_FOREIGN_DATA";
    SyncedTabsHistogram[SyncedTabsHistogram["HIDE_FOR_NOW"] = 10] = "HIDE_FOR_NOW";
    SyncedTabsHistogram[SyncedTabsHistogram["OPENED_LINK_VIA_CONTEXT_MENU"] = 11] = "OPENED_LINK_VIA_CONTEXT_MENU";
    SyncedTabsHistogram[SyncedTabsHistogram["LIMIT"] = 12] = "LIMIT"; // Should always be the last one.
})(SyncedTabsHistogram || (SyncedTabsHistogram = {}));
/**
 * Contains all context menu interactions for a visit in the history page.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the VisitContextMenuAction enum in
 * histograms/metadata/history/enums.xml
 */
// LINT.IfChange(VisitContextMenuAction)
export var VisitContextMenuAction;
(function (VisitContextMenuAction) {
    VisitContextMenuAction[VisitContextMenuAction["MORE_FROM_THIS_SITE_CLICKED"] = 0] = "MORE_FROM_THIS_SITE_CLICKED";
    VisitContextMenuAction[VisitContextMenuAction["REMOVE_FROM_HISTORY_CLICKED"] = 1] = "REMOVE_FROM_HISTORY_CLICKED";
    VisitContextMenuAction[VisitContextMenuAction["REMOVE_BOOKMARK_CLICKED"] = 2] = "REMOVE_BOOKMARK_CLICKED";
    VisitContextMenuAction[VisitContextMenuAction["REVIEW_GEMINI_ACTIVITY_CLICKED"] = 3] = "REVIEW_GEMINI_ACTIVITY_CLICKED";
    VisitContextMenuAction[VisitContextMenuAction["GO_TO_GEMINI_CHAT_CLICKED"] = 4] = "GO_TO_GEMINI_CHAT_CLICKED";
    VisitContextMenuAction[VisitContextMenuAction["MAX_VALUE"] = 5] = "MAX_VALUE";
})(VisitContextMenuAction || (VisitContextMenuAction = {}));
// LINT.ThenChange(/tools/metrics/histograms/metadata/history/enums.xml:VisitContextMenuAction)
