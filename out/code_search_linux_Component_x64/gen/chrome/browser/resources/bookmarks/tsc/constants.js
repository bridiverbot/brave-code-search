// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Enumeration of valid drop locations relative to an element. These are
 * bit masks to allow combining multiple locations in a single value.
 */
export var DropPosition;
(function (DropPosition) {
    DropPosition[DropPosition["NONE"] = 0] = "NONE";
    DropPosition[DropPosition["ABOVE"] = 1] = "ABOVE";
    DropPosition[DropPosition["ON"] = 2] = "ON";
    DropPosition[DropPosition["BELOW"] = 4] = "BELOW";
})(DropPosition || (DropPosition = {}));
// LINT.IfChange(Command)
/**
 * Commands which can be handled by the CommandManager. This enum is also used
 * for metrics and should be kept in sync with BookmarkManagerCommand in
 * enums.xml. Values must never be renumbered or reused.
 */
export var Command;
(function (Command) {
    Command[Command["EDIT"] = 0] = "EDIT";
    // REMOVED_COPY_URL = 1  // Removed as being redundant with COPY
    Command[Command["SHOW_IN_FOLDER"] = 2] = "SHOW_IN_FOLDER";
    Command[Command["DELETE"] = 3] = "DELETE";
    Command[Command["OPEN_NEW_TAB"] = 4] = "OPEN_NEW_TAB";
    Command[Command["OPEN_NEW_WINDOW"] = 5] = "OPEN_NEW_WINDOW";
    Command[Command["OPEN_INCOGNITO"] = 6] = "OPEN_INCOGNITO";
    Command[Command["UNDO"] = 7] = "UNDO";
    Command[Command["REDO"] = 8] = "REDO";
    // OPEN triggers when you double-click an item. NOT USED FOR METRICS.
    Command[Command["OPEN"] = 9] = "OPEN";
    Command[Command["SELECT_ALL"] = 10] = "SELECT_ALL";
    Command[Command["DESELECT_ALL"] = 11] = "DESELECT_ALL";
    Command[Command["COPY"] = 12] = "COPY";
    Command[Command["CUT"] = 13] = "CUT";
    Command[Command["PASTE"] = 14] = "PASTE";
    Command[Command["SORT"] = 15] = "SORT";
    Command[Command["ADD_BOOKMARK"] = 16] = "ADD_BOOKMARK";
    Command[Command["ADD_FOLDER"] = 17] = "ADD_FOLDER";
    Command[Command["IMPORT"] = 18] = "IMPORT";
    Command[Command["EXPORT"] = 19] = "EXPORT";
    Command[Command["HELP_CENTER"] = 20] = "HELP_CENTER";
    // Added for more precise metrics purposes. OPEN is re-mapped to one of these.
    Command[Command["OPEN_BOOKMARK"] = 21] = "OPEN_BOOKMARK";
    Command[Command["OPEN_FOLDER"] = 22] = "OPEN_FOLDER";
    Command[Command["OPEN_SPLIT_VIEW"] = 23] = "OPEN_SPLIT_VIEW";
    Command[Command["OPEN_NEW_GROUP"] = 24] = "OPEN_NEW_GROUP";
    Command[Command["OPEN_ISOLATED"] = 25] = "OPEN_ISOLATED";
    // Append new values to the end of the enum.
    Command[Command["MAX_VALUE"] = 26] = "MAX_VALUE";
})(Command || (Command = {}));
// LINT.ThenChange(//tools/metrics/histograms/metadata/bookmarks/enums.xml:BookmarkManagerCommand)
/**
 * Where the menu was opened from. Values must never be renumbered or reused.
 */
export var MenuSource;
(function (MenuSource) {
    MenuSource[MenuSource["NONE"] = 0] = "NONE";
    MenuSource[MenuSource["ITEM"] = 1] = "ITEM";
    MenuSource[MenuSource["TREE"] = 2] = "TREE";
    MenuSource[MenuSource["TOOLBAR"] = 3] = "TOOLBAR";
    MenuSource[MenuSource["LIST"] = 4] = "LIST";
    // Append new values to the end of the enum.
    MenuSource[MenuSource["NUM_VALUES"] = 5] = "NUM_VALUES";
})(MenuSource || (MenuSource = {}));
/**
 * Mirrors the C++ enum from IncognitoModePrefs.
 */
export var IncognitoAvailability;
(function (IncognitoAvailability) {
    IncognitoAvailability[IncognitoAvailability["ENABLED"] = 0] = "ENABLED";
    IncognitoAvailability[IncognitoAvailability["DISABLED"] = 1] = "DISABLED";
    IncognitoAvailability[IncognitoAvailability["FORCED"] = 2] = "FORCED";
})(IncognitoAvailability || (IncognitoAvailability = {}));
// LINT.IfChange(BookmarkPromoType)
/**
 * Mirrors the C++ BookmarkPromoType enum.
 */
export var BookmarkPromoType;
(function (BookmarkPromoType) {
    BookmarkPromoType[BookmarkPromoType["NONE"] = 0] = "NONE";
    BookmarkPromoType[BookmarkPromoType["BATCH_UPLOAD"] = 1] = "BATCH_UPLOAD";
    BookmarkPromoType[BookmarkPromoType["ACCOUNT_AWARE_SIGNIN"] = 2] = "ACCOUNT_AWARE_SIGNIN";
})(BookmarkPromoType || (BookmarkPromoType = {}));
// LINT.ThenChange(//chrome/browser/ui/webui/bookmarks/bookmark_promo_delegate.h:BookmarkPromoType)
export const LOCAL_STORAGE_FOLDER_STATE_KEY = 'folderOpenState';
export const LOCAL_STORAGE_TREE_WIDTH_KEY = 'treeWidth';
export const ROOT_NODE_ID = '0';
// The IDs of the heading nodes that may be inserted into the tree.
export const ACCOUNT_HEADING_NODE_ID = 'account_heading';
export const LOCAL_HEADING_NODE_ID = 'local_heading';
export const OPEN_CONFIRMATION_LIMIT = 15;
// Maximum allowed length for a bookmark URL and title.
// Limit to 500KB to match Chrome address bar (Omnibox) behavior.
export const MAX_BOOKMARK_INPUT_LENGTH = 500 * 1024;
