import { ComposeboxContextAddedMethod } from '//resources/cr_components/search/constants.js';
import type { FuseboxAction, SuggestInventory } from '//resources/mojo/components/omnibox/browser/fusebox_action.mojom-webui.js';
import { TabAttachmentSource } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { DriveUploadError, SelectedFileInfo, TabInfo } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { UnguessableToken } from '//resources/mojo/mojo/public/mojom/base/unguessable_token.mojom-webui.js';
import type { Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
import { ContextUploadErrorType, ContextUploadStatus, InputType, ModelMode, ToolMode } from './composebox_query.mojom-webui.js';
import type { InputState } from './composebox_query.mojom-webui.js';
export declare enum ComposeboxFileValidationError {
    NONE = 0,
    TOO_MANY_FILES = 1,
    FILE_EMPTY = 2,
    FILE_SIZE_TOO_LARGE = 3,
    MAX_VALUE = 3
}
export declare enum ContextType {
    TAB = 0,
    FILE = 1,
    IMAGE = 2,
    IMAGE_GEN = 3,
    DEEP_RESEARCH = 4,
    CANVAS = 5,
    AUTO_MODEL = 6,
    THINKING_MODEL = 7,
    REGULAR_MODEL = 8,
    PRO_NO_GEN_UI_MODEL = 9,
    UNKNOWN = 10,
    DRIVE = 11,
    MAX_VALUE = 11
}
export declare enum ProcessFilesError {
    NONE = 0,
    INVALID_TYPE = 1,
    FILE_TOO_LARGE = 2,
    FILE_EMPTY = 3,
    MAX_FILES_EXCEEDED = 4,
    MAX_IMAGES_EXCEEDED = 5,
    MAX_PDFS_EXCEEDED = 6,
    FILE_UPLOAD_NOT_ALLOWED = 7
}
export declare enum TabSuggestionsState {
    NOT_STARTED = 0,
    LOADING = 1,
    LOADED = 2
}
export declare const FILE_VALIDATION_ERRORS_MAP: Map<ContextUploadErrorType, string>;
export declare class ComposeboxFile {
    uuid: UnguessableToken;
    name: string;
    objectUrl: string | null;
    dataUrl: string | null;
    type: string;
    inputType: InputType;
    status: ContextUploadStatus;
    url: Url | null;
    tabId: number | null;
    isDeletable: boolean;
    iconName: string | null;
    supportsUnimodal: boolean;
    thumbnailUrl?: string | null;
    iconUrl?: Url | null;
    origin?: TabAttachmentSource;
    delayUpload?: boolean;
    singleTabType?: SingleTabType;
    isGhost?: boolean;
    constructor(uuid: UnguessableToken, name: string, type: string, inputType: InputType, options?: Partial<ComposeboxFile>);
    static createFromFile(uuid: UnguessableToken, file: File | {
        name: string;
        type: string;
    }, status?: ContextUploadStatus, options?: Partial<ComposeboxFile>): ComposeboxFile;
    static createFromTab(uuid: UnguessableToken, tabId: number, title: string, url: Url, options?: Partial<ComposeboxFile>): ComposeboxFile;
    static createFromInjectedInput(uuid: UnguessableToken, dataUrl: string, name?: string, iconName?: string | null): ComposeboxFile;
}
export interface ComposeboxState {
    text: string;
    files: ContextualUpload[];
    error?: DriveUploadError;
    mode: ToolMode;
    model: ModelMode;
    suggestInventory?: SuggestInventory;
}
export interface FileUpload {
    file: File;
}
export interface DriveUpload {
    token: UnguessableToken;
    mimeType: string;
    fileName: string;
    thumbnailUrl: string | null;
    iconUrl: Url | null;
}
export declare function isAutoAddedOrigin(origin?: TabAttachmentSource): boolean;
export declare function hasOnlyAutoAddedTabs(files: Map<UnguessableToken, ComposeboxFile>): boolean;
export interface ComposeboxInputModelParams {
    files?: Map<UnguessableToken, ComposeboxFile>;
    attachedContext?: Map<UnguessableToken, ComposeboxFile>;
    smartTabSharingActive?: boolean;
    tabFaviconChipsToCoinsEnabled?: boolean;
    input?: string;
    selectedMatchIndex?: number;
    hasResult?: boolean;
    activeTool?: ToolMode;
}
export declare class ComposeboxInputModel {
    readonly attachedContext: Map<UnguessableToken, ComposeboxFile>;
    readonly smartTabSharingActive: boolean;
    readonly tabFaviconChipsToCoinsEnabled: boolean;
    readonly input: string;
    readonly selectedMatchIndex: number;
    readonly hasResult: boolean;
    readonly activeTool?: ToolMode;
    get files(): Map<UnguessableToken, ComposeboxFile>;
    constructor(params?: ComposeboxInputModelParams);
    hasTabs(): boolean;
    hasNonTabFiles(): boolean;
    getNonTabFileNum(): number;
    getSharedTabs(): TabInfo[];
    hasFiles(): boolean;
    hasMultipleFiles(): boolean;
    hasOnlyAutoAddedTabs(): boolean;
    hasUnimodalFile(): boolean;
    hasValidQuery(): boolean;
    hasContent(ignoreAutoAddedTabs?: boolean): boolean;
    canSubmit(): boolean;
}
export declare enum SingleTabType {
    RECENT_TAB = "RecentTab",
    CURRENT_TAB = "CurrentTab"
}
export interface TabUpload {
    tabId: number;
    url: Url;
    title: string;
    delayUpload: boolean;
    origin: TabAttachmentSource;
    singleTabType?: SingleTabType;
}
export interface BrowserFileUpload {
    token: UnguessableToken;
    fileInfo: SelectedFileInfo;
}
export type ContextualUpload = TabUpload | FileUpload | DriveUpload | BrowserFileUpload;
export interface ComposeboxFuseboxActionRequest {
    suggestion: string;
    files: ContextualUpload[];
    fuseboxAction?: FuseboxAction;
}
export declare enum GlifAnimationState {
    INELIGIBLE = "ineligible",
    SPINNER_ONLY = "spinner-only",
    STARTED = "started",
    FINISHED = "finished"
}
export declare enum VoiceSearchAction {
    ACTIVATE = 0,
    QUERY_SUBMITTED = 1
}
export declare enum SubmitButtonIconType {
    FORWARD = "forward",
    UPWARD = "upward"
}
export declare enum ContextualSearchInputStateDeletionType {
    FILE = 0,
    TAB = 1,
    TOOL = 2,
    MAX_VALUE = 2
}
export declare enum SingleTabMenuItemAction {
    RECENT_TAB_SELECTED = 0,
    RECENT_TAB_DESELECTED = 1,
    RECENT_TAB_SUBMITTED = 2,
    CURRENT_TAB_SELECTED = 3,
    CURRENT_TAB_DESELECTED = 4,
    CURRENT_TAB_SUBMITTED = 5,
    MAX_VALUE = 5
}
export declare function recordSingleTabMenuItemAction(action: SingleTabMenuItemAction, composeboxSource: string): void;
export declare enum RichImageSuggestBatchLoadStatus {
    CACHED = 0,
    LOADED = 1,
    TIMED_OUT = 2,
    SUPERSEDED = 3,
    MAX_VALUE = 3
}
export declare function recordEnumerationValue(metricName: string, value: number, enumSize: number): void;
export declare function recordUserAction(metricName: string): void;
export declare function recordBoolean(metricName: string, value: boolean): void;
export declare function recordCount(metricName: string, value: number): void;
export declare function recordTime(metricName: string, value: number): void;
export declare function recordRichImageSuggestBatchLoadStatus(status: RichImageSuggestBatchLoadStatus, composeboxSource: string): void;
export declare function recordRichImageSuggestBatchLoadLatency(latencyMs: number, composeboxSource: string): void;
export declare function recordRichImageSuggestClicked(composeboxSource: string): void;
export declare function recordRichImageSuggestShown(composeboxSource: string): void;
export declare function recordContextAdditionMethod(additionMethod: ComposeboxContextAddedMethod, composeboxSource: string): void;
export declare function recordContextualElementClickedMetric(composeboxSource: string, popupType: string, contextType: ContextType): void;
export declare function recordContextualElementShownMetric(composeboxSource: string, popupType: string, contextType: ContextType): void;
export declare function recordToolModeSelection(mode: ToolMode, composeboxSource: string, popupType: string): void;
export declare function recordToolModeShown(mode: ToolMode, composeboxSource: string, popupType: string): void;
export declare function recordModelModeSelection(model: ModelMode, composeboxSource: string, popupType: string): void;
export declare function recordModelModeShown(model: ModelMode, composeboxSource: string, popupType: string): void;
export declare function recordInputTypeShown(type: InputType, composeboxSource: string, popupType: string): void;
export declare function hasAllowedInputs(inputState: InputState | null, usePecApi: boolean): boolean;
/**
 * Helper to retrieve a boolean from loadTimeData with a fallback if the
 * value hasn't been set.
 */
export declare function getLoadTimeBoolean(id: string, defaultValue: boolean): boolean;
export declare function isContextUploadStatusTerminal(status: ContextUploadStatus): boolean;
export declare function mapUploadErrorToProcessFilesError(errorType: ContextUploadErrorType): ProcessFilesError;
/**
 * Returns whether a given tab ID represents a valid browser tab.
 */
export declare function isValidTabId(tabId: number | undefined | null): boolean;
export declare enum SmartTabSharingSurface {
    OMNIBOX_COMPOSEBOX = 0,
    CONTEXTUAL_SEARCHBOX = 1,
    MAX_VALUE = 1
}
export declare enum TabPickerSurface {
    CONTEXTUAL_TASKS_EXTENSION = "ContextualTasksExtension",
    CONTEXTUAL_TASKS_WEB_UI = "ContextualTasksWebUi",
    NEW_TAB_PAGE = "NewTabPage",
    OMNIBOX = "Omnibox"
}
export declare function mapMetricsSourceToTabPickerSurface(metricsSource: string): TabPickerSurface | null;
/**
 * Records which tab the user attached from the tab picker, along two
 * independent axes.
 *
 * These are deliberately separate histograms rather than one enum, because the
 * two properties are orthogonal and frequently co-occur:
 *  - `isActiveTab` comes from TabInfo.showInCurrentTabChip, which the browser
 *    computes by comparing the tab's URL against the active tab's URL.
 *  - `index` is the tab's position in the suggestion list, which the browser
 *    sorts by descending recency. Index 0 is the most recently active eligible
 *    tab, and is the entry the UI badges as "Recent".
 *
 * `SelectedTabIsActive` is only recorded when an active tab candidate is
 * present in the suggestion list (`hasActiveTabCandidate` is true, or
 * `isActiveTab` is true). In full tab mode or on the New Tab Page, the active
 * tab is an internal chrome:// page and is excluded from the list, so no sample
 * is recorded to avoid skewing the metric.
 */
export declare function recordTabPickerTabSelected(surface: TabPickerSurface, isActiveTab: boolean, index: number, hasActiveTabCandidate?: boolean): void;
export declare function computeImageUrl(url: string | undefined): string;
