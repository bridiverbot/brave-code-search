import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '../../../mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '../../../mojo_browser_proxy.js';
import { BigBuffer as mojoBase_mojom_BigBuffer } from '../../../mojo/public/mojom/base/big_buffer.mojom-webui.js';
import { String16 as mojoBase_mojom_String16 } from '../../../mojo/public/mojom/base/string16.mojom-webui.js';
import { JSTime as mojoBase_mojom_JSTime, TimeDelta as mojoBase_mojom_TimeDelta, TimeTicks as mojoBase_mojom_TimeTicks } from '../../../mojo/public/mojom/base/time.mojom-webui.js';
import { UnguessableToken as mojoBase_mojom_UnguessableToken } from '../../../mojo/public/mojom/base/unguessable_token.mojom-webui.js';
import { WindowOpenDisposition as ui_mojom_WindowOpenDisposition } from '../../../ui/base/mojom/window_open_disposition.mojom-webui.js';
import { Rect as gfx_mojom_Rect, Size as gfx_mojom_Size } from '../../../ui/gfx/geometry/mojom/geometry.mojom-webui.js';
import { Range as gfx_mojom_Range } from '../../../ui/gfx/range/mojom/range.mojom-webui.js';
import { Url as url_mojom_Url } from '../../../url/mojom/url.mojom-webui.js';
import { ContextUploadErrorType as composeboxQuery_mojom_ContextUploadErrorType, ContextUploadStatus as composeboxQuery_mojom_ContextUploadStatus, ModelMode as composeboxQuery_mojom_ModelMode, ToolMode as composeboxQuery_mojom_ToolMode, InputState as composeboxQuery_mojom_InputState } from '../composebox/composebox_query.mojom-webui.js';
import { SuggestInventory as fuseboxAction_mojom_SuggestInventory } from './fusebox_action.mojom-webui.js';
import { NavigationPredictor as omnibox_mojom_NavigationPredictor } from './omnibox.mojom-webui.js';
import { SuggestTemplateInfo as suggestTemplateInfo_mojom_SuggestTemplateInfo } from './suggest_template_info.mojom-webui.js';
export declare const UrlDeemphasisModeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum UrlDeemphasisMode {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kEverything = 0,
    kAllButScheme = 1,
    kAllButHost = 2,
    kNothing = 3
}
export declare const KeywordTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum KeywordType {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kChip = 0,
    kInKeyword = 1,
    kInstant = 2
}
export declare const KeywordActivationMethodSpec: {
    $: mojo.internal.MojomType;
};
export declare enum KeywordActivationMethod {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kClick = 0,
    kTap = 1,
    kKeyboard = 2
}
export declare const TabAttachmentSourceSpec: {
    $: mojo.internal.MojomType;
};
export declare enum TabAttachmentSource {
    MIN_VALUE = 0,
    MAX_VALUE = 5,
    kOther = 0,
    kContextMenu = 1,
    kCurrentTabChip = 2,
    kActionChip = 3,
    kAutoActive = 4,
    kAutoAdded = 5
}
export declare const FreStageSpec: {
    $: mojo.internal.MojomType;
};
export declare enum FreStage {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kNone = 0,
    kIntroModal = 1,
    kShortcutSetupChin = 2,
    kShortcutReminderChin = 3
}
export declare const SideTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SideType {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kDefaultPrimary = 0,
    kSecondary = 1
}
export declare const RenderTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum RenderType {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kDefaultVertical = 0,
    kHorizontal = 1,
    kGrid = 2
}
export declare const SelectionLineStateSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SelectionLineState {
    MIN_VALUE = 1,
    MAX_VALUE = 10,
    kNormal = 1,
    kKeywordMode = 2,
    kFocusedButtonAction = 3,
    kFocusedButtonRemoveSuggestion = 4,
    kFocusedButtonAim = 5,
    kFocusedButtonContextEntrypoint = 6,
    kCtrlEnter = 7,
    kFocusedButtonVoiceSearch = 8,
    kFocusedButtonLensSearch = 9,
    kFocusedButtonContextualChip = 10
}
export declare const SelectionDirectionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SelectionDirection {
    MIN_VALUE = 1,
    MAX_VALUE = 2,
    kForward = 1,
    kBackward = 2
}
export declare const SelectionStepSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SelectionStep {
    MIN_VALUE = 1,
    MAX_VALUE = 3,
    kWholeLine = 1,
    kStateOrLine = 2,
    kAllLines = 3
}
export declare const DriveUploadErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare enum DriveUploadError {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kSizeLimitExceeded = 0,
    kMaxFilesExceeded = 1
}
export declare const DriveDisclaimerStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare enum DriveDisclaimerStatus {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kNotAccepted = 0,
    kAccepted = 1,
    kRestricted = 2
}
export declare const InputMethodSpec: {
    $: mojo.internal.MojomType;
};
export declare enum InputMethod {
    MIN_VALUE = 1,
    MAX_VALUE = 11,
    kKeyboard = 1,
    kPaste = 2,
    kSpeech = 6,
    kTab = 8,
    kLensCamera = 10,
    kSmartCompose = 11
}
export type PageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
export declare class PageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerFactoryInterface {
    createPageHandler(page: PageRemote, handler: PageHandlerPendingReceiver): void;
}
export declare class PageHandlerFactoryRemote implements PageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(page: PageRemote, handler: PageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the PageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PageHandlerFactoryInterface);
}
export declare class PageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the PageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: PageRemote, handler: PageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type PageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
export declare class PageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerInterface {
    onFocusChanged(focused: boolean): void;
    queryAutocomplete(queryId: number, tabId: (number | null), input: mojoBase_mojom_String16, preventInlineAutocomplete: boolean, cursorPosition: number, suggestInventory: fuseboxAction_mojom_SuggestInventory, isOnFocus: boolean, keyword: string, inputMethod: InputMethod): void;
    stopAutocomplete(clearResult: boolean): void;
    openAutocompleteMatch(resultSequenceId: number, line: number, url: url_mojom_Url, areMatchesShowing: boolean, mouseButton: number, modifiers: ActionModifiers, viaKeyboard: boolean): void;
    setSmartComposeStats(smartComposeStats: SmartComposeStats): void;
    setPopupSelection(selection: OmniboxPopupSelection): void;
    openPopupSelection(resultSequenceId: number, selection: OmniboxPopupSelection, disposition: ui_mojom_WindowOpenDisposition): void;
    onNavigationLikely(line: number, url: url_mojom_Url, navigationPredictor: omnibox_mojom_NavigationPredictor): void;
    deleteAutocompleteMatch(line: number, url: url_mojom_Url): void;
    activateKeyword(line: number, url: url_mojom_Url, matchSelectionTimestamp: mojoBase_mojom_TimeTicks, activationMethod: KeywordActivationMethod): void;
    executeAction(line: number, actionIndex: number, url: url_mojom_Url, matchSelectionTimestamp: mojoBase_mojom_TimeTicks, mouseButton: number, altKey: boolean, ctrlKey: boolean, metaKey: boolean, shiftKey: boolean): void;
    onThumbnailRemoved(): void;
    getCyclingPlaceholderConfig(): Promise<{
        config: PlaceholderConfig;
    }>;
    getRecentTabs(): Promise<{
        tabs: TabInfo[];
    }>;
    getTabPreview(tabId: number): Promise<{
        previewDataUrl: (string | null);
    }>;
    waitForTabFaviconLoad(tabId: number): Promise<{
        faviconDataUrl: (url_mojom_Url | null);
    }>;
    getInputState(): Promise<{
        state: (composeboxQuery_mojom_InputState | null);
    }>;
    notifySessionStarted(): void;
    notifySessionAbandoned(): void;
    addFileContext(fileInfo: SelectedFileInfo, fileBytes: mojoBase_mojom_BigBuffer): Promise<mojoBase_mojom_UnguessableToken>;
    addTabContext(tabId: number, delayUpload: boolean, source: TabAttachmentSource): Promise<mojoBase_mojom_UnguessableToken>;
    deleteContext(token: mojoBase_mojom_UnguessableToken, fromAutomaticChip: boolean): void;
    deleteTabContext(tabId: number): void;
    clearFiles(shouldBlockAutoSuggestedTabs: boolean): void;
    submitQuery(queryText: string, mouseButton: number, altKey: boolean, ctrlKey: boolean, metaKey: boolean, shiftKey: boolean, isVoiceSearch: boolean): void;
    openLensSearch(): void;
    setActiveToolMode(tool: composeboxQuery_mojom_ToolMode, isSetByAim: boolean): void;
    setActiveModelMode(model: composeboxQuery_mojom_ModelMode, isSetByAim: boolean): void;
    activateMetricsFunnel(funnelName: string): void;
    recordToolSelectionAction(tool: composeboxQuery_mojom_ToolMode): void;
    recordModelSelectionAction(model: composeboxQuery_mojom_ModelMode): void;
    getDriveDisclaimerStatus(): Promise<{
        status: DriveDisclaimerStatus;
    }>;
    onDriveDisclaimerAccepted(): void;
    onDriveUploadClicked(): Promise<{
        response: DriveUploadResponse;
    }>;
    openProfilePicker(): void;
    showScreenshotMenu(anchorRect: gfx_mojom_Rect): void;
    startScreenshare(preferEntireScreen: boolean): Promise<{
        token: (mojoBase_mojom_UnguessableToken | null);
    }>;
    captureRegionScreenshot(): Promise<{
        token: (mojoBase_mojom_UnguessableToken | null);
    }>;
    getPageClassification(): Promise<{
        metricSource: string;
    }>;
    setSmartTabSharingActive(active: boolean): void;
    getSmartTabSharingActive(): Promise<{
        active: boolean;
    }>;
    resetSmartTabSharing(): Promise<{
        active: boolean;
    }>;
    dismissFre(stage: FreStage): void;
    showHotkeyDropdown(anchorBounds: gfx_mojom_Rect): Promise<void>;
    openHotkeySettings(): void;
    onEscapePressed(): void;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    onFocusChanged(focused: boolean): void;
    queryAutocomplete(queryId: number, tabId: (number | null), input: mojoBase_mojom_String16, preventInlineAutocomplete: boolean, cursorPosition: number, suggestInventory: fuseboxAction_mojom_SuggestInventory, isOnFocus: boolean, keyword: string, inputMethod: InputMethod): void;
    stopAutocomplete(clearResult: boolean): void;
    openAutocompleteMatch(resultSequenceId: number, line: number, url: url_mojom_Url, areMatchesShowing: boolean, mouseButton: number, modifiers: ActionModifiers, viaKeyboard: boolean): void;
    setSmartComposeStats(smartComposeStats: SmartComposeStats): void;
    setPopupSelection(selection: OmniboxPopupSelection): void;
    openPopupSelection(resultSequenceId: number, selection: OmniboxPopupSelection, disposition: ui_mojom_WindowOpenDisposition): void;
    onNavigationLikely(line: number, url: url_mojom_Url, navigationPredictor: omnibox_mojom_NavigationPredictor): void;
    deleteAutocompleteMatch(line: number, url: url_mojom_Url): void;
    activateKeyword(line: number, url: url_mojom_Url, matchSelectionTimestamp: mojoBase_mojom_TimeTicks, activationMethod: KeywordActivationMethod): void;
    executeAction(line: number, actionIndex: number, url: url_mojom_Url, matchSelectionTimestamp: mojoBase_mojom_TimeTicks, mouseButton: number, altKey: boolean, ctrlKey: boolean, metaKey: boolean, shiftKey: boolean): void;
    onThumbnailRemoved(): void;
    getCyclingPlaceholderConfig(): Promise<{
        config: PlaceholderConfig;
    }>;
    getRecentTabs(): Promise<{
        tabs: TabInfo[];
    }>;
    getTabPreview(tabId: number): Promise<{
        previewDataUrl: (string | null);
    }>;
    waitForTabFaviconLoad(tabId: number): Promise<{
        faviconDataUrl: (url_mojom_Url | null);
    }>;
    getInputState(): Promise<{
        state: (composeboxQuery_mojom_InputState | null);
    }>;
    notifySessionStarted(): void;
    notifySessionAbandoned(): void;
    addFileContext(fileInfo: SelectedFileInfo, fileBytes: mojoBase_mojom_BigBuffer): Promise<mojoBase_mojom_UnguessableToken>;
    addTabContext(tabId: number, delayUpload: boolean, source: TabAttachmentSource): Promise<mojoBase_mojom_UnguessableToken>;
    deleteContext(token: mojoBase_mojom_UnguessableToken, fromAutomaticChip: boolean): void;
    deleteTabContext(tabId: number): void;
    clearFiles(shouldBlockAutoSuggestedTabs: boolean): void;
    submitQuery(queryText: string, mouseButton: number, altKey: boolean, ctrlKey: boolean, metaKey: boolean, shiftKey: boolean, isVoiceSearch: boolean): void;
    openLensSearch(): void;
    setActiveToolMode(tool: composeboxQuery_mojom_ToolMode, isSetByAim: boolean): void;
    setActiveModelMode(model: composeboxQuery_mojom_ModelMode, isSetByAim: boolean): void;
    activateMetricsFunnel(funnelName: string): void;
    recordToolSelectionAction(tool: composeboxQuery_mojom_ToolMode): void;
    recordModelSelectionAction(model: composeboxQuery_mojom_ModelMode): void;
    getDriveDisclaimerStatus(): Promise<{
        status: DriveDisclaimerStatus;
    }>;
    onDriveDisclaimerAccepted(): void;
    onDriveUploadClicked(): Promise<{
        response: DriveUploadResponse;
    }>;
    openProfilePicker(): void;
    showScreenshotMenu(anchorRect: gfx_mojom_Rect): void;
    startScreenshare(preferEntireScreen: boolean): Promise<{
        token: (mojoBase_mojom_UnguessableToken | null);
    }>;
    captureRegionScreenshot(): Promise<{
        token: (mojoBase_mojom_UnguessableToken | null);
    }>;
    getPageClassification(): Promise<{
        metricSource: string;
    }>;
    setSmartTabSharingActive(active: boolean): void;
    getSmartTabSharingActive(): Promise<{
        active: boolean;
    }>;
    resetSmartTabSharing(): Promise<{
        active: boolean;
    }>;
    dismissFre(stage: FreStage): void;
    showHotkeyDropdown(anchorBounds: gfx_mojom_Rect): Promise<void>;
    openHotkeySettings(): void;
    onEscapePressed(): void;
}
/**
 * An object which receives request messages for the PageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PageHandlerRemote, PageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerRemote, PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PageHandlerInterface);
}
export declare class PageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PageHandlerRemote;
}
/**
 * An object which receives request messages for the PageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PageHandlerRemote, PageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerRemote, PageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onFocusChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(focused: boolean) => any>;
    queryAutocomplete: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(queryId: number, tabId: (number | null), input: mojoBase_mojom_String16, preventInlineAutocomplete: boolean, cursorPosition: number, suggestInventory: fuseboxAction_mojom_SuggestInventory, isOnFocus: boolean, keyword: string, inputMethod: InputMethod) => any>;
    stopAutocomplete: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(clearResult: boolean) => any>;
    openAutocompleteMatch: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(resultSequenceId: number, line: number, url: url_mojom_Url, areMatchesShowing: boolean, mouseButton: number, modifiers: ActionModifiers, viaKeyboard: boolean) => any>;
    setSmartComposeStats: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(smartComposeStats: SmartComposeStats) => any>;
    setPopupSelection: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(selection: OmniboxPopupSelection) => any>;
    openPopupSelection: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(resultSequenceId: number, selection: OmniboxPopupSelection, disposition: ui_mojom_WindowOpenDisposition) => any>;
    onNavigationLikely: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(line: number, url: url_mojom_Url, navigationPredictor: omnibox_mojom_NavigationPredictor) => any>;
    deleteAutocompleteMatch: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(line: number, url: url_mojom_Url) => any>;
    activateKeyword: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(line: number, url: url_mojom_Url, matchSelectionTimestamp: mojoBase_mojom_TimeTicks, activationMethod: KeywordActivationMethod) => any>;
    executeAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(line: number, actionIndex: number, url: url_mojom_Url, matchSelectionTimestamp: mojoBase_mojom_TimeTicks, mouseButton: number, altKey: boolean, ctrlKey: boolean, metaKey: boolean, shiftKey: boolean) => any>;
    onThumbnailRemoved: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getCyclingPlaceholderConfig: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getRecentTabs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getTabPreview: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number) => any>;
    waitForTabFaviconLoad: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number) => any>;
    getInputState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    notifySessionStarted: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    notifySessionAbandoned: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    addFileContext: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(fileInfo: SelectedFileInfo, fileBytes: mojoBase_mojom_BigBuffer) => any>;
    addTabContext: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number, delayUpload: boolean, source: TabAttachmentSource) => any>;
    deleteContext: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(token: mojoBase_mojom_UnguessableToken, fromAutomaticChip: boolean) => any>;
    deleteTabContext: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number) => any>;
    clearFiles: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(shouldBlockAutoSuggestedTabs: boolean) => any>;
    submitQuery: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(queryText: string, mouseButton: number, altKey: boolean, ctrlKey: boolean, metaKey: boolean, shiftKey: boolean, isVoiceSearch: boolean) => any>;
    openLensSearch: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setActiveToolMode: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tool: composeboxQuery_mojom_ToolMode, isSetByAim: boolean) => any>;
    setActiveModelMode: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(model: composeboxQuery_mojom_ModelMode, isSetByAim: boolean) => any>;
    activateMetricsFunnel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(funnelName: string) => any>;
    recordToolSelectionAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tool: composeboxQuery_mojom_ToolMode) => any>;
    recordModelSelectionAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(model: composeboxQuery_mojom_ModelMode) => any>;
    getDriveDisclaimerStatus: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onDriveDisclaimerAccepted: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onDriveUploadClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openProfilePicker: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    showScreenshotMenu: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(anchorRect: gfx_mojom_Rect) => any>;
    startScreenshare: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(preferEntireScreen: boolean) => any>;
    captureRegionScreenshot: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getPageClassification: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setSmartTabSharingActive: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(active: boolean) => any>;
    getSmartTabSharingActive: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    resetSmartTabSharing: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    dismissFre: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(stage: FreStage) => any>;
    showHotkeyDropdown: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(anchorBounds: gfx_mojom_Rect) => any>;
    openHotkeySettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onEscapePressed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type PagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PagePendingReceiver>;
export declare class PagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<Page> {
    handle: mojo.internal.interfaceSupport.Endpoint<PagePendingReceiver>;
    constructor(handle: MojoHandle | PagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageInterface {
    setFreState(state: FreState): void;
    autocompleteResultChanged(result: AutocompleteResult): void;
    updateSelection(oldSelection: OmniboxPopupSelection, selection: OmniboxPopupSelection): void;
    stepSelection(direction: SelectionDirection, step: SelectionStep): void;
    openCurrentSelection(disposition: ui_mojom_WindowOpenDisposition): void;
    setAimButtonVisible(visible: boolean): void;
    setAimButtonConfig(text: string, tooltip: string, a11yLabel: string, iconUrl: url_mojom_Url): void;
    setInputText(input: string): void;
    setKeywordSpaceTriggeringEnabled(enabled: boolean): void;
    setAvailableKeywordModels(models: InputKeywordModel[], defaultSearchProviderKeyword: string): void;
    setThumbnail(thumbnailUrl: string, isDeletable: boolean): void;
    onContextualInputStatusChanged(token: mojoBase_mojom_UnguessableToken, status: composeboxQuery_mojom_ContextUploadStatus, errorType: (composeboxQuery_mojom_ContextUploadErrorType | null)): void;
    onTabStripChanged(): void;
    onInputStateChanged(inputState: composeboxQuery_mojom_InputState): void;
    addFileContext(token: mojoBase_mojom_UnguessableToken, fileInfo: SelectedFileInfo): void;
    updateAutoSuggestedTabContext(tab: (TabInfo | null), invocationSource: (string | null)): void;
    updateLensSearchEligibility(eligible: boolean): void;
    updateContentSharingPolicy(enabled: boolean): void;
    updateAimPopupEligibility(eligible: boolean): void;
    updateSmartTabSharingActive(active: boolean): void;
    onPermissionPromptChanged(isShowing: boolean, promptSize: gfx_mojom_Size): void;
    setRestoredTabIds(ids: number[]): void;
    setAimThreadRestoredTabs(tabs: TabInfo[]): void;
    onScreenshotMenuClosed(): void;
    updateProfileInfo(avatarUrl: url_mojom_Url, name: string, email: string): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    setFreState(state: FreState): void;
    autocompleteResultChanged(result: AutocompleteResult): void;
    updateSelection(oldSelection: OmniboxPopupSelection, selection: OmniboxPopupSelection): void;
    stepSelection(direction: SelectionDirection, step: SelectionStep): void;
    openCurrentSelection(disposition: ui_mojom_WindowOpenDisposition): void;
    setAimButtonVisible(visible: boolean): void;
    setAimButtonConfig(text: string, tooltip: string, a11yLabel: string, iconUrl: url_mojom_Url): void;
    setInputText(input: string): void;
    setKeywordSpaceTriggeringEnabled(enabled: boolean): void;
    setAvailableKeywordModels(models: InputKeywordModel[], defaultSearchProviderKeyword: string): void;
    setThumbnail(thumbnailUrl: string, isDeletable: boolean): void;
    onContextualInputStatusChanged(token: mojoBase_mojom_UnguessableToken, status: composeboxQuery_mojom_ContextUploadStatus, errorType: (composeboxQuery_mojom_ContextUploadErrorType | null)): void;
    onTabStripChanged(): void;
    onInputStateChanged(inputState: composeboxQuery_mojom_InputState): void;
    addFileContext(token: mojoBase_mojom_UnguessableToken, fileInfo: SelectedFileInfo): void;
    updateAutoSuggestedTabContext(tab: (TabInfo | null), invocationSource: (string | null)): void;
    updateLensSearchEligibility(eligible: boolean): void;
    updateContentSharingPolicy(enabled: boolean): void;
    updateAimPopupEligibility(eligible: boolean): void;
    updateSmartTabSharingActive(active: boolean): void;
    onPermissionPromptChanged(isShowing: boolean, promptSize: gfx_mojom_Size): void;
    setRestoredTabIds(ids: number[]): void;
    setAimThreadRestoredTabs(tabs: TabInfo[]): void;
    onScreenshotMenuClosed(): void;
    updateProfileInfo(avatarUrl: url_mojom_Url, name: string, email: string): void;
}
/**
 * An object which receives request messages for the Page
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PageRemote, PagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageRemote, PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PageInterface);
}
export declare class Page {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PageRemote;
}
/**
 * An object which receives request messages for the Page
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PageRemote, PagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageRemote, PagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    setFreState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(state: FreState) => any>;
    autocompleteResultChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(result: AutocompleteResult) => any>;
    updateSelection: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(oldSelection: OmniboxPopupSelection, selection: OmniboxPopupSelection) => any>;
    stepSelection: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(direction: SelectionDirection, step: SelectionStep) => any>;
    openCurrentSelection: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(disposition: ui_mojom_WindowOpenDisposition) => any>;
    setAimButtonVisible: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(visible: boolean) => any>;
    setAimButtonConfig: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(text: string, tooltip: string, a11yLabel: string, iconUrl: url_mojom_Url) => any>;
    setInputText: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(input: string) => any>;
    setKeywordSpaceTriggeringEnabled: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    setAvailableKeywordModels: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(models: InputKeywordModel[], defaultSearchProviderKeyword: string) => any>;
    setThumbnail: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(thumbnailUrl: string, isDeletable: boolean) => any>;
    onContextualInputStatusChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(token: mojoBase_mojom_UnguessableToken, status: composeboxQuery_mojom_ContextUploadStatus, errorType: (composeboxQuery_mojom_ContextUploadErrorType | null)) => any>;
    onTabStripChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onInputStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(inputState: composeboxQuery_mojom_InputState) => any>;
    addFileContext: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(token: mojoBase_mojom_UnguessableToken, fileInfo: SelectedFileInfo) => any>;
    updateAutoSuggestedTabContext: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tab: (TabInfo | null), invocationSource: (string | null)) => any>;
    updateLensSearchEligibility: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(eligible: boolean) => any>;
    updateContentSharingPolicy: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    updateAimPopupEligibility: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(eligible: boolean) => any>;
    updateSmartTabSharingActive: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(active: boolean) => any>;
    onPermissionPromptChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isShowing: boolean, promptSize: gfx_mojom_Size) => any>;
    setRestoredTabIds: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(ids: number[]) => any>;
    setAimThreadRestoredTabs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabs: TabInfo[]) => any>;
    onScreenshotMenuClosed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    updateProfileInfo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(avatarUrl: url_mojom_Url, name: string, email: string) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const UrlEmphasisSpec: {
    $: mojo.internal.MojomType;
};
export declare const ACMatchClassificationSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActionSpec: {
    $: mojo.internal.MojomType;
};
export declare const InputKeywordModelSpec: {
    $: mojo.internal.MojomType;
};
export declare const MatchKeywordModelSpec: {
    $: mojo.internal.MojomType;
};
export declare const AutocompleteMatchSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const FileAttachmentSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabAttachmentSpec: {
    $: mojo.internal.MojomType;
};
export declare const SearchContextSpec: {
    $: mojo.internal.MojomType;
};
export declare const FreStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const SelectedFileInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const SuggestionGroupSpec: {
    $: mojo.internal.MojomType;
};
export declare const SmartComposeStatsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AutocompleteResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const OmniboxPopupSelectionSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActionModifiersSpec: {
    $: mojo.internal.MojomType;
};
export declare const PlaceholderConfigSpec: {
    $: mojo.internal.MojomType;
};
export declare const DriveFileSpec: {
    $: mojo.internal.MojomType;
};
export declare const DriveUploadResponseSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnFocusChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_QueryAutocomplete_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_StopAutocomplete_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenAutocompleteMatch_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetSmartComposeStats_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetPopupSelection_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenPopupSelection_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnNavigationLikely_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_DeleteAutocompleteMatch_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ActivateKeyword_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ExecuteAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnThumbnailRemoved_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetCyclingPlaceholderConfig_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetCyclingPlaceholderConfig_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetRecentTabs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetRecentTabs_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTabPreview_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetTabPreview_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_WaitForTabFaviconLoad_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_WaitForTabFaviconLoad_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetInputState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetInputState_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_NotifySessionStarted_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_NotifySessionAbandoned_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_AddFileContext_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_AddFileContext_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_AddTabContext_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_AddTabContext_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_DeleteContext_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_DeleteTabContext_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ClearFiles_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SubmitQuery_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenLensSearch_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetActiveToolMode_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetActiveModelMode_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ActivateMetricsFunnel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordToolSelectionAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordModelSelectionAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetDriveDisclaimerStatus_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetDriveDisclaimerStatus_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnDriveDisclaimerAccepted_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnDriveUploadClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnDriveUploadClicked_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenProfilePicker_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShowScreenshotMenu_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_StartScreenshare_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_StartScreenshare_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CaptureRegionScreenshot_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CaptureRegionScreenshot_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetPageClassification_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetPageClassification_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetSmartTabSharingActive_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetSmartTabSharingActive_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetSmartTabSharingActive_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ResetSmartTabSharing_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ResetSmartTabSharing_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_DismissFre_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShowHotkeyDropdown_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShowHotkeyDropdown_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenHotkeySettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnEscapePressed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetFreState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_AutocompleteResultChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_UpdateSelection_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_StepSelection_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OpenCurrentSelection_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetAimButtonVisible_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetAimButtonConfig_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetInputText_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetKeywordSpaceTriggeringEnabled_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetAvailableKeywordModels_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetThumbnail_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnContextualInputStatusChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnTabStripChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnInputStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_AddFileContext_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_UpdateAutoSuggestedTabContext_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_UpdateLensSearchEligibility_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_UpdateContentSharingPolicy_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_UpdateAimPopupEligibility_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_UpdateSmartTabSharingActive_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnPermissionPromptChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetRestoredTabIds_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetAimThreadRestoredTabs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnScreenshotMenuClosed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_UpdateProfileInfo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SearchContextAttachmentSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_AddFileContext_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_AddTabContext_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare interface UrlEmphasisMojoType {
    textIsUrl: boolean;
    schemeStrikeThrough: boolean;
    schemeDangerous: boolean;
    deemphasisMode: UrlDeemphasisMode;
    schemeRange: (gfx_mojom_Range | null);
    hostRange: (gfx_mojom_Range | null);
}
export type UrlEmphasis = UrlEmphasisMojoType;
export declare interface ACMatchClassificationMojoType {
    offset: number;
    style: number;
}
export type ACMatchClassification = ACMatchClassificationMojoType;
export declare interface ActionMojoType {
    hint: string;
    suggestionContents: string;
    iconPath: string;
    a11yLabel: string;
}
export type Action = ActionMojoType;
export declare interface InputKeywordModelMojoType {
    type: KeywordType;
    keyword: string;
    displayText: string;
    iconPath: string;
    placeholder: string;
}
export type InputKeywordModel = InputKeywordModelMojoType;
export declare interface MatchKeywordModelMojoType {
    type: KeywordType;
    chipHint: string;
    chipA11y: string;
    placeholder: string;
    keyword: string;
}
export type MatchKeywordModel = MatchKeywordModelMojoType;
export declare interface AutocompleteMatchMojoType {
    isHidden: boolean;
    allowedToBeDefaultMatch: boolean;
    secondaryTextIsUrl: boolean;
    isSearchType: boolean;
    isEnterpriseSearchAggregatorPeopleType: boolean;
    showSecondaryTextOnlyOnSelection: boolean;
    supportsDeletion: boolean;
    suggestionGroupId: number;
    a11yLabel: mojoBase_mojom_String16;
    actions: Action[];
    destinationUrl: url_mojom_Url;
    inlineAutocompletion: mojoBase_mojom_String16;
    fillIntoEdit: mojoBase_mojom_String16;
    iconPath: string;
    iconUrl: url_mojom_Url;
    suggestTemplate: suggestTemplateInfo_mojom_SuggestTemplateInfo;
    type: string;
    removeButtonA11yLabel: mojoBase_mojom_String16;
    descriptionIconPath: string;
    tailSuggestCommonPrefix: (mojoBase_mojom_String16 | null);
    keywordModel: (MatchKeywordModel | null);
    urlEmphasis: (UrlEmphasis | null);
}
export type AutocompleteMatch = AutocompleteMatchMojoType;
export declare interface TabInfoMojoType {
    tabId: number;
    showInCurrentTabChip: boolean;
    showInPreviousTabChip: boolean;
    isLoading: boolean;
    title: string;
    url: url_mojom_Url;
    lastActive: mojoBase_mojom_TimeTicks;
}
export type TabInfo = TabInfoMojoType;
export declare interface FileAttachmentMojoType {
    uuid: mojoBase_mojom_UnguessableToken;
    name: string;
    mimeType: string;
    imageDataUrl: (string | null);
    errorType: (composeboxQuery_mojom_ContextUploadErrorType | null);
    iconUrl: (url_mojom_Url | null);
    thumbnailUrl: (url_mojom_Url | null);
}
export type FileAttachment = FileAttachmentMojoType;
export declare interface TabAttachmentMojoType {
    tabId: number;
    source: TabAttachmentSource;
    title: string;
    url: url_mojom_Url;
    fromSingleTabMenuItem: boolean;
    isActiveTab: boolean;
}
export type TabAttachment = TabAttachmentMojoType;
export declare interface SearchContextMojoType {
    input: string;
    attachments: SearchContextAttachment[];
    toolMode: composeboxQuery_mojom_ToolMode;
    modelMode: composeboxQuery_mojom_ModelMode;
}
export type SearchContext = SearchContextMojoType;
export declare interface FreStateMojoType {
    stage: FreStage;
    currentHotkeyTokens: string[];
}
export type FreState = FreStateMojoType;
export declare interface SelectedFileInfoMojoType {
    fileName: string;
    mimeType: string;
    imageDataUrl: (string | null);
    isDeletable: boolean;
    selectionTime: mojoBase_mojom_JSTime;
    thumbnailUrl: (url_mojom_Url | null);
}
export type SelectedFileInfo = SelectedFileInfoMojoType;
export declare interface SuggestionGroupMojoType {
    header: mojoBase_mojom_String16;
    renderType: RenderType;
    sideType: SideType;
}
export type SuggestionGroup = SuggestionGroupMojoType;
export declare interface SmartComposeStatsMojoType {
    enabled: boolean;
    shownCount: number;
    acceptedCount: number;
    charactersAccepted: number;
    shownLength: number;
}
export type SmartComposeStats = SmartComposeStatsMojoType;
export declare interface AutocompleteResultMojoType {
    queryId: number;
    sequenceId: number;
    input: mojoBase_mojom_String16;
    suggestionGroupsMap: {
        [key: number]: SuggestionGroup;
    };
    matches: AutocompleteMatch[];
    smartComposeInlineHint: (mojoBase_mojom_String16 | null);
    showAimActivityLink: boolean;
}
export type AutocompleteResult = AutocompleteResultMojoType;
export declare interface OmniboxPopupSelectionMojoType {
    line: number;
    actionIndex: number;
    state: SelectionLineState;
}
export type OmniboxPopupSelection = OmniboxPopupSelectionMojoType;
export declare interface ActionModifiersMojoType {
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
}
export type ActionModifiers = ActionModifiersMojoType;
export declare interface PlaceholderConfigMojoType {
    texts: mojoBase_mojom_String16[];
    changeTextAnimationInterval: mojoBase_mojom_TimeDelta;
    fadeTextAnimationDuration: mojoBase_mojom_TimeDelta;
}
export type PlaceholderConfig = PlaceholderConfigMojoType;
export declare interface DriveFileMojoType {
    token: mojoBase_mojom_UnguessableToken;
    mimeType: string;
    fileName: string;
    thumbnailUrl: (string | null);
    iconUrl: (url_mojom_Url | null);
}
export type DriveFile = DriveFileMojoType;
export declare interface DriveUploadResponseMojoType {
    files: DriveFile[];
    error: (DriveUploadError | null);
}
export type DriveUploadResponse = DriveUploadResponseMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: PageRemote;
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandler_OnFocusChanged_ParamsMojoType {
    focused: boolean;
}
export type PageHandler_OnFocusChanged_Params = PageHandler_OnFocusChanged_ParamsMojoType;
export declare interface PageHandler_QueryAutocomplete_ParamsMojoType {
    queryId: number;
    tabId: (number | null);
    preventInlineAutocomplete: boolean;
    isOnFocus: boolean;
    cursorPosition: number;
    input: mojoBase_mojom_String16;
    suggestInventory: fuseboxAction_mojom_SuggestInventory;
    inputMethod: InputMethod;
    keyword: string;
}
export type PageHandler_QueryAutocomplete_Params = PageHandler_QueryAutocomplete_ParamsMojoType;
export declare interface PageHandler_StopAutocomplete_ParamsMojoType {
    clearResult: boolean;
}
export type PageHandler_StopAutocomplete_Params = PageHandler_StopAutocomplete_ParamsMojoType;
export declare interface PageHandler_OpenAutocompleteMatch_ParamsMojoType {
    resultSequenceId: number;
    line: number;
    areMatchesShowing: boolean;
    viaKeyboard: boolean;
    mouseButton: number;
    url: url_mojom_Url;
    modifiers: ActionModifiers;
}
export type PageHandler_OpenAutocompleteMatch_Params = PageHandler_OpenAutocompleteMatch_ParamsMojoType;
export declare interface PageHandler_SetSmartComposeStats_ParamsMojoType {
    smartComposeStats: SmartComposeStats;
}
export type PageHandler_SetSmartComposeStats_Params = PageHandler_SetSmartComposeStats_ParamsMojoType;
export declare interface PageHandler_SetPopupSelection_ParamsMojoType {
    selection: OmniboxPopupSelection;
}
export type PageHandler_SetPopupSelection_Params = PageHandler_SetPopupSelection_ParamsMojoType;
export declare interface PageHandler_OpenPopupSelection_ParamsMojoType {
    resultSequenceId: number;
    disposition: ui_mojom_WindowOpenDisposition;
    selection: OmniboxPopupSelection;
}
export type PageHandler_OpenPopupSelection_Params = PageHandler_OpenPopupSelection_ParamsMojoType;
export declare interface PageHandler_OnNavigationLikely_ParamsMojoType {
    line: number;
    navigationPredictor: omnibox_mojom_NavigationPredictor;
    url: url_mojom_Url;
}
export type PageHandler_OnNavigationLikely_Params = PageHandler_OnNavigationLikely_ParamsMojoType;
export declare interface PageHandler_DeleteAutocompleteMatch_ParamsMojoType {
    line: number;
    url: url_mojom_Url;
}
export type PageHandler_DeleteAutocompleteMatch_Params = PageHandler_DeleteAutocompleteMatch_ParamsMojoType;
export declare interface PageHandler_ActivateKeyword_ParamsMojoType {
    line: number;
    activationMethod: KeywordActivationMethod;
    url: url_mojom_Url;
    matchSelectionTimestamp: mojoBase_mojom_TimeTicks;
}
export type PageHandler_ActivateKeyword_Params = PageHandler_ActivateKeyword_ParamsMojoType;
export declare interface PageHandler_ExecuteAction_ParamsMojoType {
    line: number;
    actionIndex: number;
    mouseButton: number;
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
    url: url_mojom_Url;
    matchSelectionTimestamp: mojoBase_mojom_TimeTicks;
}
export type PageHandler_ExecuteAction_Params = PageHandler_ExecuteAction_ParamsMojoType;
export declare interface PageHandler_OnThumbnailRemoved_ParamsMojoType {
}
export type PageHandler_OnThumbnailRemoved_Params = PageHandler_OnThumbnailRemoved_ParamsMojoType;
export declare interface PageHandler_GetCyclingPlaceholderConfig_ParamsMojoType {
}
export type PageHandler_GetCyclingPlaceholderConfig_Params = PageHandler_GetCyclingPlaceholderConfig_ParamsMojoType;
export declare interface PageHandler_GetCyclingPlaceholderConfig_ResponseParamsMojoType {
    config: PlaceholderConfig;
}
export type PageHandler_GetCyclingPlaceholderConfig_ResponseParams = PageHandler_GetCyclingPlaceholderConfig_ResponseParamsMojoType;
export declare interface PageHandler_GetRecentTabs_ParamsMojoType {
}
export type PageHandler_GetRecentTabs_Params = PageHandler_GetRecentTabs_ParamsMojoType;
export declare interface PageHandler_GetRecentTabs_ResponseParamsMojoType {
    tabs: TabInfo[];
}
export type PageHandler_GetRecentTabs_ResponseParams = PageHandler_GetRecentTabs_ResponseParamsMojoType;
export declare interface PageHandler_GetTabPreview_ParamsMojoType {
    tabId: number;
}
export type PageHandler_GetTabPreview_Params = PageHandler_GetTabPreview_ParamsMojoType;
export declare interface PageHandler_GetTabPreview_ResponseParamsMojoType {
    previewDataUrl: (string | null);
}
export type PageHandler_GetTabPreview_ResponseParams = PageHandler_GetTabPreview_ResponseParamsMojoType;
export declare interface PageHandler_WaitForTabFaviconLoad_ParamsMojoType {
    tabId: number;
}
export type PageHandler_WaitForTabFaviconLoad_Params = PageHandler_WaitForTabFaviconLoad_ParamsMojoType;
export declare interface PageHandler_WaitForTabFaviconLoad_ResponseParamsMojoType {
    faviconDataUrl: (url_mojom_Url | null);
}
export type PageHandler_WaitForTabFaviconLoad_ResponseParams = PageHandler_WaitForTabFaviconLoad_ResponseParamsMojoType;
export declare interface PageHandler_GetInputState_ParamsMojoType {
}
export type PageHandler_GetInputState_Params = PageHandler_GetInputState_ParamsMojoType;
export declare interface PageHandler_GetInputState_ResponseParamsMojoType {
    state: (composeboxQuery_mojom_InputState | null);
}
export type PageHandler_GetInputState_ResponseParams = PageHandler_GetInputState_ResponseParamsMojoType;
export declare interface PageHandler_NotifySessionStarted_ParamsMojoType {
}
export type PageHandler_NotifySessionStarted_Params = PageHandler_NotifySessionStarted_ParamsMojoType;
export declare interface PageHandler_NotifySessionAbandoned_ParamsMojoType {
}
export type PageHandler_NotifySessionAbandoned_Params = PageHandler_NotifySessionAbandoned_ParamsMojoType;
export declare interface PageHandler_AddFileContext_ParamsMojoType {
    fileInfo: SelectedFileInfo;
    fileBytes: mojoBase_mojom_BigBuffer;
}
export type PageHandler_AddFileContext_Params = PageHandler_AddFileContext_ParamsMojoType;
export declare interface PageHandler_AddFileContext_ResponseParamsMojoType {
    result: PageHandler_AddFileContext_ResponseParam_Result;
}
export type PageHandler_AddFileContext_ResponseParams = PageHandler_AddFileContext_ResponseParamsMojoType;
export declare interface PageHandler_AddTabContext_ParamsMojoType {
    tabId: number;
    delayUpload: boolean;
    source: TabAttachmentSource;
}
export type PageHandler_AddTabContext_Params = PageHandler_AddTabContext_ParamsMojoType;
export declare interface PageHandler_AddTabContext_ResponseParamsMojoType {
    result: PageHandler_AddTabContext_ResponseParam_Result;
}
export type PageHandler_AddTabContext_ResponseParams = PageHandler_AddTabContext_ResponseParamsMojoType;
export declare interface PageHandler_DeleteContext_ParamsMojoType {
    token: mojoBase_mojom_UnguessableToken;
    fromAutomaticChip: boolean;
}
export type PageHandler_DeleteContext_Params = PageHandler_DeleteContext_ParamsMojoType;
export declare interface PageHandler_DeleteTabContext_ParamsMojoType {
    tabId: number;
}
export type PageHandler_DeleteTabContext_Params = PageHandler_DeleteTabContext_ParamsMojoType;
export declare interface PageHandler_ClearFiles_ParamsMojoType {
    shouldBlockAutoSuggestedTabs: boolean;
}
export type PageHandler_ClearFiles_Params = PageHandler_ClearFiles_ParamsMojoType;
export declare interface PageHandler_SubmitQuery_ParamsMojoType {
    queryText: string;
    mouseButton: number;
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
    isVoiceSearch: boolean;
}
export type PageHandler_SubmitQuery_Params = PageHandler_SubmitQuery_ParamsMojoType;
export declare interface PageHandler_OpenLensSearch_ParamsMojoType {
}
export type PageHandler_OpenLensSearch_Params = PageHandler_OpenLensSearch_ParamsMojoType;
export declare interface PageHandler_SetActiveToolMode_ParamsMojoType {
    tool: composeboxQuery_mojom_ToolMode;
    isSetByAim: boolean;
}
export type PageHandler_SetActiveToolMode_Params = PageHandler_SetActiveToolMode_ParamsMojoType;
export declare interface PageHandler_SetActiveModelMode_ParamsMojoType {
    model: composeboxQuery_mojom_ModelMode;
    isSetByAim: boolean;
}
export type PageHandler_SetActiveModelMode_Params = PageHandler_SetActiveModelMode_ParamsMojoType;
export declare interface PageHandler_ActivateMetricsFunnel_ParamsMojoType {
    funnelName: string;
}
export type PageHandler_ActivateMetricsFunnel_Params = PageHandler_ActivateMetricsFunnel_ParamsMojoType;
export declare interface PageHandler_RecordToolSelectionAction_ParamsMojoType {
    tool: composeboxQuery_mojom_ToolMode;
}
export type PageHandler_RecordToolSelectionAction_Params = PageHandler_RecordToolSelectionAction_ParamsMojoType;
export declare interface PageHandler_RecordModelSelectionAction_ParamsMojoType {
    model: composeboxQuery_mojom_ModelMode;
}
export type PageHandler_RecordModelSelectionAction_Params = PageHandler_RecordModelSelectionAction_ParamsMojoType;
export declare interface PageHandler_GetDriveDisclaimerStatus_ParamsMojoType {
}
export type PageHandler_GetDriveDisclaimerStatus_Params = PageHandler_GetDriveDisclaimerStatus_ParamsMojoType;
export declare interface PageHandler_GetDriveDisclaimerStatus_ResponseParamsMojoType {
    status: DriveDisclaimerStatus;
}
export type PageHandler_GetDriveDisclaimerStatus_ResponseParams = PageHandler_GetDriveDisclaimerStatus_ResponseParamsMojoType;
export declare interface PageHandler_OnDriveDisclaimerAccepted_ParamsMojoType {
}
export type PageHandler_OnDriveDisclaimerAccepted_Params = PageHandler_OnDriveDisclaimerAccepted_ParamsMojoType;
export declare interface PageHandler_OnDriveUploadClicked_ParamsMojoType {
}
export type PageHandler_OnDriveUploadClicked_Params = PageHandler_OnDriveUploadClicked_ParamsMojoType;
export declare interface PageHandler_OnDriveUploadClicked_ResponseParamsMojoType {
    response: DriveUploadResponse;
}
export type PageHandler_OnDriveUploadClicked_ResponseParams = PageHandler_OnDriveUploadClicked_ResponseParamsMojoType;
export declare interface PageHandler_OpenProfilePicker_ParamsMojoType {
}
export type PageHandler_OpenProfilePicker_Params = PageHandler_OpenProfilePicker_ParamsMojoType;
export declare interface PageHandler_ShowScreenshotMenu_ParamsMojoType {
    anchorRect: gfx_mojom_Rect;
}
export type PageHandler_ShowScreenshotMenu_Params = PageHandler_ShowScreenshotMenu_ParamsMojoType;
export declare interface PageHandler_StartScreenshare_ParamsMojoType {
    preferEntireScreen: boolean;
}
export type PageHandler_StartScreenshare_Params = PageHandler_StartScreenshare_ParamsMojoType;
export declare interface PageHandler_StartScreenshare_ResponseParamsMojoType {
    token: (mojoBase_mojom_UnguessableToken | null);
}
export type PageHandler_StartScreenshare_ResponseParams = PageHandler_StartScreenshare_ResponseParamsMojoType;
export declare interface PageHandler_CaptureRegionScreenshot_ParamsMojoType {
}
export type PageHandler_CaptureRegionScreenshot_Params = PageHandler_CaptureRegionScreenshot_ParamsMojoType;
export declare interface PageHandler_CaptureRegionScreenshot_ResponseParamsMojoType {
    token: (mojoBase_mojom_UnguessableToken | null);
}
export type PageHandler_CaptureRegionScreenshot_ResponseParams = PageHandler_CaptureRegionScreenshot_ResponseParamsMojoType;
export declare interface PageHandler_GetPageClassification_ParamsMojoType {
}
export type PageHandler_GetPageClassification_Params = PageHandler_GetPageClassification_ParamsMojoType;
export declare interface PageHandler_GetPageClassification_ResponseParamsMojoType {
    metricSource: string;
}
export type PageHandler_GetPageClassification_ResponseParams = PageHandler_GetPageClassification_ResponseParamsMojoType;
export declare interface PageHandler_SetSmartTabSharingActive_ParamsMojoType {
    active: boolean;
}
export type PageHandler_SetSmartTabSharingActive_Params = PageHandler_SetSmartTabSharingActive_ParamsMojoType;
export declare interface PageHandler_GetSmartTabSharingActive_ParamsMojoType {
}
export type PageHandler_GetSmartTabSharingActive_Params = PageHandler_GetSmartTabSharingActive_ParamsMojoType;
export declare interface PageHandler_GetSmartTabSharingActive_ResponseParamsMojoType {
    active: boolean;
}
export type PageHandler_GetSmartTabSharingActive_ResponseParams = PageHandler_GetSmartTabSharingActive_ResponseParamsMojoType;
export declare interface PageHandler_ResetSmartTabSharing_ParamsMojoType {
}
export type PageHandler_ResetSmartTabSharing_Params = PageHandler_ResetSmartTabSharing_ParamsMojoType;
export declare interface PageHandler_ResetSmartTabSharing_ResponseParamsMojoType {
    active: boolean;
}
export type PageHandler_ResetSmartTabSharing_ResponseParams = PageHandler_ResetSmartTabSharing_ResponseParamsMojoType;
export declare interface PageHandler_DismissFre_ParamsMojoType {
    stage: FreStage;
}
export type PageHandler_DismissFre_Params = PageHandler_DismissFre_ParamsMojoType;
export declare interface PageHandler_ShowHotkeyDropdown_ParamsMojoType {
    anchorBounds: gfx_mojom_Rect;
}
export type PageHandler_ShowHotkeyDropdown_Params = PageHandler_ShowHotkeyDropdown_ParamsMojoType;
export declare interface PageHandler_ShowHotkeyDropdown_ResponseParamsMojoType {
}
export type PageHandler_ShowHotkeyDropdown_ResponseParams = PageHandler_ShowHotkeyDropdown_ResponseParamsMojoType;
export declare interface PageHandler_OpenHotkeySettings_ParamsMojoType {
}
export type PageHandler_OpenHotkeySettings_Params = PageHandler_OpenHotkeySettings_ParamsMojoType;
export declare interface PageHandler_OnEscapePressed_ParamsMojoType {
}
export type PageHandler_OnEscapePressed_Params = PageHandler_OnEscapePressed_ParamsMojoType;
export declare interface Page_SetFreState_ParamsMojoType {
    state: FreState;
}
export type Page_SetFreState_Params = Page_SetFreState_ParamsMojoType;
export declare interface Page_AutocompleteResultChanged_ParamsMojoType {
    result: AutocompleteResult;
}
export type Page_AutocompleteResultChanged_Params = Page_AutocompleteResultChanged_ParamsMojoType;
export declare interface Page_UpdateSelection_ParamsMojoType {
    oldSelection: OmniboxPopupSelection;
    selection: OmniboxPopupSelection;
}
export type Page_UpdateSelection_Params = Page_UpdateSelection_ParamsMojoType;
export declare interface Page_StepSelection_ParamsMojoType {
    direction: SelectionDirection;
    step: SelectionStep;
}
export type Page_StepSelection_Params = Page_StepSelection_ParamsMojoType;
export declare interface Page_OpenCurrentSelection_ParamsMojoType {
    disposition: ui_mojom_WindowOpenDisposition;
}
export type Page_OpenCurrentSelection_Params = Page_OpenCurrentSelection_ParamsMojoType;
export declare interface Page_SetAimButtonVisible_ParamsMojoType {
    visible: boolean;
}
export type Page_SetAimButtonVisible_Params = Page_SetAimButtonVisible_ParamsMojoType;
export declare interface Page_SetAimButtonConfig_ParamsMojoType {
    text: string;
    tooltip: string;
    a11yLabel: string;
    iconUrl: url_mojom_Url;
}
export type Page_SetAimButtonConfig_Params = Page_SetAimButtonConfig_ParamsMojoType;
export declare interface Page_SetInputText_ParamsMojoType {
    input: string;
}
export type Page_SetInputText_Params = Page_SetInputText_ParamsMojoType;
export declare interface Page_SetKeywordSpaceTriggeringEnabled_ParamsMojoType {
    enabled: boolean;
}
export type Page_SetKeywordSpaceTriggeringEnabled_Params = Page_SetKeywordSpaceTriggeringEnabled_ParamsMojoType;
export declare interface Page_SetAvailableKeywordModels_ParamsMojoType {
    models: InputKeywordModel[];
    defaultSearchProviderKeyword: string;
}
export type Page_SetAvailableKeywordModels_Params = Page_SetAvailableKeywordModels_ParamsMojoType;
export declare interface Page_SetThumbnail_ParamsMojoType {
    thumbnailUrl: string;
    isDeletable: boolean;
}
export type Page_SetThumbnail_Params = Page_SetThumbnail_ParamsMojoType;
export declare interface Page_OnContextualInputStatusChanged_ParamsMojoType {
    token: mojoBase_mojom_UnguessableToken;
    status: composeboxQuery_mojom_ContextUploadStatus;
    errorType: (composeboxQuery_mojom_ContextUploadErrorType | null);
}
export type Page_OnContextualInputStatusChanged_Params = Page_OnContextualInputStatusChanged_ParamsMojoType;
export declare interface Page_OnTabStripChanged_ParamsMojoType {
}
export type Page_OnTabStripChanged_Params = Page_OnTabStripChanged_ParamsMojoType;
export declare interface Page_OnInputStateChanged_ParamsMojoType {
    inputState: composeboxQuery_mojom_InputState;
}
export type Page_OnInputStateChanged_Params = Page_OnInputStateChanged_ParamsMojoType;
export declare interface Page_AddFileContext_ParamsMojoType {
    token: mojoBase_mojom_UnguessableToken;
    fileInfo: SelectedFileInfo;
}
export type Page_AddFileContext_Params = Page_AddFileContext_ParamsMojoType;
export declare interface Page_UpdateAutoSuggestedTabContext_ParamsMojoType {
    tab: (TabInfo | null);
    invocationSource: (string | null);
}
export type Page_UpdateAutoSuggestedTabContext_Params = Page_UpdateAutoSuggestedTabContext_ParamsMojoType;
export declare interface Page_UpdateLensSearchEligibility_ParamsMojoType {
    eligible: boolean;
}
export type Page_UpdateLensSearchEligibility_Params = Page_UpdateLensSearchEligibility_ParamsMojoType;
export declare interface Page_UpdateContentSharingPolicy_ParamsMojoType {
    enabled: boolean;
}
export type Page_UpdateContentSharingPolicy_Params = Page_UpdateContentSharingPolicy_ParamsMojoType;
export declare interface Page_UpdateAimPopupEligibility_ParamsMojoType {
    eligible: boolean;
}
export type Page_UpdateAimPopupEligibility_Params = Page_UpdateAimPopupEligibility_ParamsMojoType;
export declare interface Page_UpdateSmartTabSharingActive_ParamsMojoType {
    active: boolean;
}
export type Page_UpdateSmartTabSharingActive_Params = Page_UpdateSmartTabSharingActive_ParamsMojoType;
export declare interface Page_OnPermissionPromptChanged_ParamsMojoType {
    isShowing: boolean;
    promptSize: gfx_mojom_Size;
}
export type Page_OnPermissionPromptChanged_Params = Page_OnPermissionPromptChanged_ParamsMojoType;
export declare interface Page_SetRestoredTabIds_ParamsMojoType {
    ids: number[];
}
export type Page_SetRestoredTabIds_Params = Page_SetRestoredTabIds_ParamsMojoType;
export declare interface Page_SetAimThreadRestoredTabs_ParamsMojoType {
    tabs: TabInfo[];
}
export type Page_SetAimThreadRestoredTabs_Params = Page_SetAimThreadRestoredTabs_ParamsMojoType;
export declare interface Page_OnScreenshotMenuClosed_ParamsMojoType {
}
export type Page_OnScreenshotMenuClosed_Params = Page_OnScreenshotMenuClosed_ParamsMojoType;
export declare interface Page_UpdateProfileInfo_ParamsMojoType {
    avatarUrl: url_mojom_Url;
    name: string;
    email: string;
}
export type Page_UpdateProfileInfo_Params = Page_UpdateProfileInfo_ParamsMojoType;
export declare interface SearchContextAttachment {
    fileAttachment?: FileAttachment;
    tabAttachment?: TabAttachment;
}
export declare enum SearchContextAttachmentFieldTags {
    FILE_ATTACHMENT = 0,
    TAB_ATTACHMENT = 1
}
export declare function whichSearchContextAttachment(u: SearchContextAttachment): SearchContextAttachmentFieldTags;
export declare interface PageHandler_AddFileContext_ResponseParam_Result {
    success?: mojoBase_mojom_UnguessableToken;
    failure?: composeboxQuery_mojom_ContextUploadErrorType;
}
export declare enum PageHandler_AddFileContext_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichPageHandler_AddFileContext_ResponseParam_Result(u: PageHandler_AddFileContext_ResponseParam_Result): PageHandler_AddFileContext_ResponseParam_ResultFieldTags;
export declare interface PageHandler_AddTabContext_ResponseParam_Result {
    success?: mojoBase_mojom_UnguessableToken;
    failure?: composeboxQuery_mojom_ContextUploadErrorType;
}
export declare enum PageHandler_AddTabContext_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichPageHandler_AddTabContext_ResponseParam_Result(u: PageHandler_AddTabContext_ResponseParam_Result): PageHandler_AddTabContext_ResponseParam_ResultFieldTags;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, PageRemote, PageHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PageHandlerRemote>;
