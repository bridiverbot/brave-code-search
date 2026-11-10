import { SaveToDriveBubbleRequestType, SaveToDriveState } from './constants.js';
declare const SaveRequestType: typeof chrome.pdfViewerPrivate.SaveRequestType;
type SaveRequestType = chrome.pdfViewerPrivate.SaveRequestType;
/**
 * `SaveToDriveBubbleAction` is used for metrics. Entries should not be
 * renumbered, removed or reused.
 */
export declare enum SaveToDriveBubbleAction {
    ACTION = 0,
    CANCEL_UPLOAD = 1,
    MANAGE_STORAGE = 2,
    OPEN_IN_DRIVE = 3,
    RETRY = 4,
    CLOSE = 5,
    COUNT = 6
}
/**
 * `SaveToDriveBubbleState` is used for metrics. Entries should not be
 * renumbered, removed or reused.
 */
export declare enum SaveToDriveBubbleState {
    SHOW_BUBBLE = 0,
    SHOW_BUBBLE_UPLOADING_STATE = 1,
    SHOW_BUBBLE_SUCCESS_STATE = 2,
    SHOW_BUBBLE_CONNECTION_ERROR_STATE = 3,
    SHOW_BUBBLE_STORAGE_FULL_ERROR_STATE = 4,
    SHOW_BUBBLE_SESSION_TIMEOUT_ERROR_STATE = 5,
    SHOW_BUBBLE_UNKNOWN_ERROR_STATE = 6,
    COUNT = 7
}
/**
 * `SaveToDriveSaveType` is used for metrics. Entries should not be renumbered,
 * removed or reused.
 */
export declare enum SaveToDriveSaveType {
    SAVE = 0,
    SAVE_ORIGINAL_ONLY = 1,
    SAVE_ORIGINAL = 2,
    SAVE_EDITED = 3,
    SAVE_WITH_ANNOTATION = 4,
    COUNT = 5
}
export declare function recordSaveToDriveBubbleActionMetrics(requestType: SaveToDriveBubbleRequestType): void;
export declare function recordSaveToDriveBubbleRetryMetrics(requestType: SaveRequestType, hasCommittedEdits: boolean): void;
export declare function recordShowSaveToDriveBubbleMetrics(saveToDriveState: SaveToDriveState): void;
export declare function recordSaveToDriveMetrics(requestType: SaveRequestType, hasCommittedEdits: boolean, pdfInk2Enabled: boolean): void;
export {};
