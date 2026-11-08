/**
 * Enumeration of valid drop locations relative to an element. These are
 * bit masks to allow combining multiple locations in a single value.
 */
export declare enum DropPosition {
    NONE = 0,
    ABOVE = 1,
    ON = 2,
    BELOW = 4
}
/**
 * Commands which can be handled by the CommandManager. This enum is also used
 * for metrics and should be kept in sync with BookmarkManagerCommand in
 * enums.xml. Values must never be renumbered or reused.
 */
export declare enum Command {
    EDIT = 0,
    SHOW_IN_FOLDER = 2,
    DELETE = 3,
    OPEN_NEW_TAB = 4,
    OPEN_NEW_WINDOW = 5,
    OPEN_INCOGNITO = 6,
    UNDO = 7,
    REDO = 8,
    OPEN = 9,
    SELECT_ALL = 10,
    DESELECT_ALL = 11,
    COPY = 12,
    CUT = 13,
    PASTE = 14,
    SORT = 15,
    ADD_BOOKMARK = 16,
    ADD_FOLDER = 17,
    IMPORT = 18,
    EXPORT = 19,
    HELP_CENTER = 20,
    OPEN_BOOKMARK = 21,
    OPEN_FOLDER = 22,
    OPEN_SPLIT_VIEW = 23,
    OPEN_NEW_GROUP = 24,
    OPEN_ISOLATED = 25,
    MAX_VALUE = 26
}
/**
 * Where the menu was opened from. Values must never be renumbered or reused.
 */
export declare enum MenuSource {
    NONE = 0,
    ITEM = 1,
    TREE = 2,
    TOOLBAR = 3,
    LIST = 4,
    NUM_VALUES = 5
}
/**
 * Mirrors the C++ enum from IncognitoModePrefs.
 */
export declare enum IncognitoAvailability {
    ENABLED = 0,
    DISABLED = 1,
    FORCED = 2
}
/**
 * Mirrors the C++ BookmarkPromoType enum.
 */
export declare enum BookmarkPromoType {
    NONE = 0,
    BATCH_UPLOAD = 1,
    ACCOUNT_AWARE_SIGNIN = 2
}
export declare const LOCAL_STORAGE_FOLDER_STATE_KEY: string;
export declare const LOCAL_STORAGE_TREE_WIDTH_KEY: string;
export declare const ROOT_NODE_ID: string;
export declare const ACCOUNT_HEADING_NODE_ID: string;
export declare const LOCAL_HEADING_NODE_ID: string;
export declare const OPEN_CONFIRMATION_LIMIT: number;
export declare const MAX_BOOKMARK_INPUT_LENGTH: number;
