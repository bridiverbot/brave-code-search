import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { AutocompleteMatch as searchbox_mojom_AutocompleteMatch, InputKeywordModel as searchbox_mojom_InputKeywordModel, UrlEmphasis as searchbox_mojom_UrlEmphasis } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { Point as gfx_mojom_Point } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
import { Range as gfx_mojom_Range } from '//resources/mojo/ui/gfx/range/mojom/range.mojom-webui.js';
export declare const MatchesUpdateSpec: {
    $: mojo.internal.MojomType;
};
export declare enum MatchesUpdate {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kDefault = 0,
    kQueryZps = 1,
    kPreserveMatches = 2
}
export declare const OmniboxEscapeActionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum OmniboxEscapeAction {
    MIN_VALUE = 1,
    MAX_VALUE = 5,
    kRevertTemporaryText = 1,
    kClosePopup = 2,
    kClearUserInput = 3,
    kClosePopupAndClearUserInput = 4,
    kBlur = 5
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
    showContextMenu(point: gfx_mojom_Point): void;
    closeUI(): void;
    onSelectionChanged(selection: gfx_mojom_Range, sequenceNumber: number, showFullUrl: boolean): void;
    revert(sequenceNumber: number): void;
    logEscapeAction(action: OmniboxEscapeAction): void;
    onInputCleared(sequenceNumber: number): void;
    onPaste(text: string, selection: gfx_mojom_Range, sequenceNumber: number): void;
    onCutOrCopy(sequenceNumber: number, isCut: boolean, fullText: string, selection: gfx_mojom_Range): void;
    requestInputState(): void;
    openAimPopup(viaKeyboard: boolean): void;
    setEditHistoryState(canUndo: boolean, canRedo: boolean): void;
    openDevTools(): void;
    openDogfoodFeedback(): void;
    advanceFocus(reverse: boolean): void;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    showContextMenu(point: gfx_mojom_Point): void;
    closeUI(): void;
    onSelectionChanged(selection: gfx_mojom_Range, sequenceNumber: number, showFullUrl: boolean): void;
    revert(sequenceNumber: number): void;
    logEscapeAction(action: OmniboxEscapeAction): void;
    onInputCleared(sequenceNumber: number): void;
    onPaste(text: string, selection: gfx_mojom_Range, sequenceNumber: number): void;
    onCutOrCopy(sequenceNumber: number, isCut: boolean, fullText: string, selection: gfx_mojom_Range): void;
    requestInputState(): void;
    openAimPopup(viaKeyboard: boolean): void;
    setEditHistoryState(canUndo: boolean, canRedo: boolean): void;
    openDevTools(): void;
    openDogfoodFeedback(): void;
    advanceFocus(reverse: boolean): void;
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
    showContextMenu: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(point: gfx_mojom_Point) => any>;
    closeUI: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onSelectionChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(selection: gfx_mojom_Range, sequenceNumber: number, showFullUrl: boolean) => any>;
    revert: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(sequenceNumber: number) => any>;
    logEscapeAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(action: OmniboxEscapeAction) => any>;
    onInputCleared: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(sequenceNumber: number) => any>;
    onPaste: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(text: string, selection: gfx_mojom_Range, sequenceNumber: number) => any>;
    onCutOrCopy: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(sequenceNumber: number, isCut: boolean, fullText: string, selection: gfx_mojom_Range) => any>;
    requestInputState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openAimPopup: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(viaKeyboard: boolean) => any>;
    setEditHistoryState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(canUndo: boolean, canRedo: boolean) => any>;
    openDevTools: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openDogfoodFeedback: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    advanceFocus: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(reverse: boolean) => any>;
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
    onShow(): void;
    onContextMenuClosed(): void;
    setInputState(state: OmniboxInputState): void;
    setFocus(isFocused: boolean, queryZps: boolean, selectAll: boolean, showFullUrl: boolean): void;
    clearAutocompleteMatches(): void;
    clearPopup(): Promise<void>;
    setDefaultSearchProvider(defaultIconPath: string): void;
    focusSearchWithDefaultSearchEngineKeywordMode(): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    onShow(): void;
    onContextMenuClosed(): void;
    setInputState(state: OmniboxInputState): void;
    setFocus(isFocused: boolean, queryZps: boolean, selectAll: boolean, showFullUrl: boolean): void;
    clearAutocompleteMatches(): void;
    clearPopup(): Promise<void>;
    setDefaultSearchProvider(defaultIconPath: string): void;
    focusSearchWithDefaultSearchEngineKeywordMode(): void;
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
    onShow: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onContextMenuClosed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setInputState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(state: OmniboxInputState) => any>;
    setFocus: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isFocused: boolean, queryZps: boolean, selectAll: boolean, showFullUrl: boolean) => any>;
    clearAutocompleteMatches: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    clearPopup: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setDefaultSearchProvider: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(defaultIconPath: string) => any>;
    focusSearchWithDefaultSearchEngineKeywordMode: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const OmniboxInputStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShowContextMenu_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CloseUI_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnSelectionChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_Revert_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_LogEscapeAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnInputCleared_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnPaste_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnCutOrCopy_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RequestInputState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenAimPopup_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetEditHistoryState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenDevTools_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenDogfoodFeedback_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_AdvanceFocus_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnShow_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnContextMenuClosed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetInputState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetFocus_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ClearAutocompleteMatches_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ClearPopup_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ClearPopup_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetDefaultSearchProvider_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_FocusSearchWithDefaultSearchEngineKeywordMode_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface OmniboxInputStateMojoType {
    sequenceNumber: number;
    tabId: number;
    text: string;
    selection: gfx_mojom_Range;
    userInputInProgress: boolean;
    isFocused: boolean;
    showFullUrl: boolean;
    isTabSwitch: boolean;
    matchesUpdate: MatchesUpdate;
    fullUrl: string;
    permanentDisplayText: string;
    keywordModel: (searchbox_mojom_InputKeywordModel | null);
    urlEmphasis: (searchbox_mojom_UrlEmphasis | null);
    unelidedUrlEmphasis: (searchbox_mojom_UrlEmphasis | null);
    currentMatch: (searchbox_mojom_AutocompleteMatch | null);
}
export type OmniboxInputState = OmniboxInputStateMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: PageRemote;
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandler_ShowContextMenu_ParamsMojoType {
    point: gfx_mojom_Point;
}
export type PageHandler_ShowContextMenu_Params = PageHandler_ShowContextMenu_ParamsMojoType;
export declare interface PageHandler_CloseUI_ParamsMojoType {
}
export type PageHandler_CloseUI_Params = PageHandler_CloseUI_ParamsMojoType;
export declare interface PageHandler_OnSelectionChanged_ParamsMojoType {
    selection: gfx_mojom_Range;
    sequenceNumber: number;
    showFullUrl: boolean;
}
export type PageHandler_OnSelectionChanged_Params = PageHandler_OnSelectionChanged_ParamsMojoType;
export declare interface PageHandler_Revert_ParamsMojoType {
    sequenceNumber: number;
}
export type PageHandler_Revert_Params = PageHandler_Revert_ParamsMojoType;
export declare interface PageHandler_LogEscapeAction_ParamsMojoType {
    action: OmniboxEscapeAction;
}
export type PageHandler_LogEscapeAction_Params = PageHandler_LogEscapeAction_ParamsMojoType;
export declare interface PageHandler_OnInputCleared_ParamsMojoType {
    sequenceNumber: number;
}
export type PageHandler_OnInputCleared_Params = PageHandler_OnInputCleared_ParamsMojoType;
export declare interface PageHandler_OnPaste_ParamsMojoType {
    text: string;
    selection: gfx_mojom_Range;
    sequenceNumber: number;
}
export type PageHandler_OnPaste_Params = PageHandler_OnPaste_ParamsMojoType;
export declare interface PageHandler_OnCutOrCopy_ParamsMojoType {
    sequenceNumber: number;
    isCut: boolean;
    fullText: string;
    selection: gfx_mojom_Range;
}
export type PageHandler_OnCutOrCopy_Params = PageHandler_OnCutOrCopy_ParamsMojoType;
export declare interface PageHandler_RequestInputState_ParamsMojoType {
}
export type PageHandler_RequestInputState_Params = PageHandler_RequestInputState_ParamsMojoType;
export declare interface PageHandler_OpenAimPopup_ParamsMojoType {
    viaKeyboard: boolean;
}
export type PageHandler_OpenAimPopup_Params = PageHandler_OpenAimPopup_ParamsMojoType;
export declare interface PageHandler_SetEditHistoryState_ParamsMojoType {
    canUndo: boolean;
    canRedo: boolean;
}
export type PageHandler_SetEditHistoryState_Params = PageHandler_SetEditHistoryState_ParamsMojoType;
export declare interface PageHandler_OpenDevTools_ParamsMojoType {
}
export type PageHandler_OpenDevTools_Params = PageHandler_OpenDevTools_ParamsMojoType;
export declare interface PageHandler_OpenDogfoodFeedback_ParamsMojoType {
}
export type PageHandler_OpenDogfoodFeedback_Params = PageHandler_OpenDogfoodFeedback_ParamsMojoType;
export declare interface PageHandler_AdvanceFocus_ParamsMojoType {
    reverse: boolean;
}
export type PageHandler_AdvanceFocus_Params = PageHandler_AdvanceFocus_ParamsMojoType;
export declare interface Page_OnShow_ParamsMojoType {
}
export type Page_OnShow_Params = Page_OnShow_ParamsMojoType;
export declare interface Page_OnContextMenuClosed_ParamsMojoType {
}
export type Page_OnContextMenuClosed_Params = Page_OnContextMenuClosed_ParamsMojoType;
export declare interface Page_SetInputState_ParamsMojoType {
    state: OmniboxInputState;
}
export type Page_SetInputState_Params = Page_SetInputState_ParamsMojoType;
export declare interface Page_SetFocus_ParamsMojoType {
    isFocused: boolean;
    queryZps: boolean;
    selectAll: boolean;
    showFullUrl: boolean;
}
export type Page_SetFocus_Params = Page_SetFocus_ParamsMojoType;
export declare interface Page_ClearAutocompleteMatches_ParamsMojoType {
}
export type Page_ClearAutocompleteMatches_Params = Page_ClearAutocompleteMatches_ParamsMojoType;
export declare interface Page_ClearPopup_ParamsMojoType {
}
export type Page_ClearPopup_Params = Page_ClearPopup_ParamsMojoType;
export declare interface Page_ClearPopup_ResponseParamsMojoType {
}
export type Page_ClearPopup_ResponseParams = Page_ClearPopup_ResponseParamsMojoType;
export declare interface Page_SetDefaultSearchProvider_ParamsMojoType {
    defaultIconPath: string;
}
export type Page_SetDefaultSearchProvider_Params = Page_SetDefaultSearchProvider_ParamsMojoType;
export declare interface Page_FocusSearchWithDefaultSearchEngineKeywordMode_ParamsMojoType {
}
export type Page_FocusSearchWithDefaultSearchEngineKeywordMode_Params = Page_FocusSearchWithDefaultSearchEngineKeywordMode_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, PageRemote, PageHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PageHandlerRemote>;
