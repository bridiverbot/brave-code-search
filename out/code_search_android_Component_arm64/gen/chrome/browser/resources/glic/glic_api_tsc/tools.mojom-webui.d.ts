import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { DOMNodeId as blink_mojom_DOMNodeId } from './dom_node_id.mojom-webui.js';
import { Empty as mojoBase_mojom_Empty } from '//resources/mojo/mojo/public/mojom/base/empty.mojom-webui.js';
import { Value as mojoBase_mojom_Value } from '//resources/mojo/mojo/public/mojom/base/values.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const ScrollGranularitySpec: {
    $: mojo.internal.MojomType;
};
export declare enum ScrollGranularity {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kDocument = 0,
    kPage = 1
}
export type AiOverlayToolsPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<AiOverlayToolsPendingReceiver>;
export declare class AiOverlayToolsPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<AiOverlayTools> {
    handle: mojo.internal.interfaceSupport.Endpoint<AiOverlayToolsPendingReceiver>;
    constructor(handle: MojoHandle | AiOverlayToolsPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface AiOverlayToolsInterface {
    openUrl(url: string, newTab: boolean): Promise<mojoBase_mojom_Empty>;
    followLink(id: string): Promise<mojoBase_mojom_Empty>;
    performSearch(query: string, newTab: boolean): Promise<mojoBase_mojom_Empty>;
    switchTab(query: string): Promise<SwitchTabResult>;
    closeCurrentTab(): Promise<mojoBase_mojom_Empty>;
    goBack(): Promise<mojoBase_mojom_Empty>;
    goForward(): Promise<mojoBase_mojom_Empty>;
    reloadPage(): Promise<mojoBase_mojom_Empty>;
    findAndHighlight(query: string): Promise<mojoBase_mojom_Empty>;
    scroll(granularity: ScrollGranularity, magnitude: number): Promise<mojoBase_mojom_Empty>;
    playVideo(): Promise<mojoBase_mojom_Empty>;
    pauseVideo(): Promise<mojoBase_mojom_Empty>;
    seekToTimestamp(timecode: string): Promise<mojoBase_mojom_Empty>;
    translatePage(targetLanguage: string): Promise<mojoBase_mojom_Empty>;
    addBookmark(): Promise<mojoBase_mojom_Empty>;
    removeBookmark(): Promise<mojoBase_mojom_Empty>;
    openPage(query: string): Promise<string>;
    setText(domNodeId: blink_mojom_DOMNodeId, text: string): Promise<mojoBase_mojom_Empty>;
    clickElement(domNodeId: blink_mojom_DOMNodeId): Promise<mojoBase_mojom_Empty>;
    setFullscreen(fullscreen: boolean): Promise<mojoBase_mojom_Empty>;
    selectOption(domNodeId: blink_mojom_DOMNodeId, value: string): Promise<mojoBase_mojom_Empty>;
    openGeminiPanel(prompt: string): Promise<string>;
    closeGeminiPanel(): Promise<mojoBase_mojom_Empty>;
    analyzeAndManageTabs(request: string): Promise<mojoBase_mojom_Value>;
}
export declare class AiOverlayToolsRemote implements AiOverlayToolsInterface, mojo.internal.interfaceSupport.InterfaceRemote<AiOverlayToolsPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<AiOverlayToolsPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | AiOverlayToolsPendingReceiverEndpoint);
    openUrl(url: string, newTab: boolean): Promise<mojoBase_mojom_Empty>;
    followLink(id: string): Promise<mojoBase_mojom_Empty>;
    performSearch(query: string, newTab: boolean): Promise<mojoBase_mojom_Empty>;
    switchTab(query: string): Promise<SwitchTabResult>;
    closeCurrentTab(): Promise<mojoBase_mojom_Empty>;
    goBack(): Promise<mojoBase_mojom_Empty>;
    goForward(): Promise<mojoBase_mojom_Empty>;
    reloadPage(): Promise<mojoBase_mojom_Empty>;
    findAndHighlight(query: string): Promise<mojoBase_mojom_Empty>;
    scroll(granularity: ScrollGranularity, magnitude: number): Promise<mojoBase_mojom_Empty>;
    playVideo(): Promise<mojoBase_mojom_Empty>;
    pauseVideo(): Promise<mojoBase_mojom_Empty>;
    seekToTimestamp(timecode: string): Promise<mojoBase_mojom_Empty>;
    translatePage(targetLanguage: string): Promise<mojoBase_mojom_Empty>;
    addBookmark(): Promise<mojoBase_mojom_Empty>;
    removeBookmark(): Promise<mojoBase_mojom_Empty>;
    openPage(query: string): Promise<string>;
    setText(domNodeId: blink_mojom_DOMNodeId, text: string): Promise<mojoBase_mojom_Empty>;
    clickElement(domNodeId: blink_mojom_DOMNodeId): Promise<mojoBase_mojom_Empty>;
    setFullscreen(fullscreen: boolean): Promise<mojoBase_mojom_Empty>;
    selectOption(domNodeId: blink_mojom_DOMNodeId, value: string): Promise<mojoBase_mojom_Empty>;
    openGeminiPanel(prompt: string): Promise<string>;
    closeGeminiPanel(): Promise<mojoBase_mojom_Empty>;
    analyzeAndManageTabs(request: string): Promise<mojoBase_mojom_Value>;
}
/**
 * An object which receives request messages for the AiOverlayTools
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class AiOverlayToolsReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<AiOverlayToolsRemote, AiOverlayToolsPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<AiOverlayToolsRemote, AiOverlayToolsPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: AiOverlayToolsInterface);
}
export declare class AiOverlayTools {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): AiOverlayToolsRemote;
}
/**
 * An object which receives request messages for the AiOverlayTools
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class AiOverlayToolsCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<AiOverlayToolsRemote, AiOverlayToolsPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<AiOverlayToolsRemote, AiOverlayToolsPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    openUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: string, newTab: boolean) => any>;
    followLink: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    performSearch: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(query: string, newTab: boolean) => any>;
    switchTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(query: string) => any>;
    closeCurrentTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    goBack: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    goForward: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    reloadPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    findAndHighlight: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(query: string) => any>;
    scroll: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(granularity: ScrollGranularity, magnitude: number) => any>;
    playVideo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    pauseVideo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    seekToTimestamp: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(timecode: string) => any>;
    translatePage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(targetLanguage: string) => any>;
    addBookmark: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    removeBookmark: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(query: string) => any>;
    setText: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(domNodeId: blink_mojom_DOMNodeId, text: string) => any>;
    clickElement: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(domNodeId: blink_mojom_DOMNodeId) => any>;
    setFullscreen: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(fullscreen: boolean) => any>;
    selectOption: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(domNodeId: blink_mojom_DOMNodeId, value: string) => any>;
    openGeminiPanel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(prompt: string) => any>;
    closeGeminiPanel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    analyzeAndManageTabs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(request: string) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type AiOverlayToolRegistryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<AiOverlayToolRegistryPendingReceiver>;
export declare class AiOverlayToolRegistryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<AiOverlayToolRegistry> {
    handle: mojo.internal.interfaceSupport.Endpoint<AiOverlayToolRegistryPendingReceiver>;
    constructor(handle: MojoHandle | AiOverlayToolRegistryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface AiOverlayToolRegistryInterface {
    getToolDefinitions(): Promise<{
        jsonDefinitions: string;
    }>;
}
export declare class AiOverlayToolRegistryRemote implements AiOverlayToolRegistryInterface, mojo.internal.interfaceSupport.InterfaceRemote<AiOverlayToolRegistryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<AiOverlayToolRegistryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | AiOverlayToolRegistryPendingReceiverEndpoint);
    getToolDefinitions(): Promise<{
        jsonDefinitions: string;
    }>;
}
/**
 * An object which receives request messages for the AiOverlayToolRegistry
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class AiOverlayToolRegistryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<AiOverlayToolRegistryRemote, AiOverlayToolRegistryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<AiOverlayToolRegistryRemote, AiOverlayToolRegistryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: AiOverlayToolRegistryInterface);
}
export declare class AiOverlayToolRegistry {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): AiOverlayToolRegistryRemote;
}
/**
 * An object which receives request messages for the AiOverlayToolRegistry
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class AiOverlayToolRegistryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<AiOverlayToolRegistryRemote, AiOverlayToolRegistryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<AiOverlayToolRegistryRemote, AiOverlayToolRegistryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getToolDefinitions: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const SwitchTabResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_OpenUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_OpenUrl_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_FollowLink_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_FollowLink_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_PerformSearch_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_PerformSearch_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_SwitchTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_SwitchTab_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_CloseCurrentTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_CloseCurrentTab_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_GoBack_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_GoBack_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_GoForward_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_GoForward_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_ReloadPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_ReloadPage_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_FindAndHighlight_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_FindAndHighlight_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_Scroll_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_Scroll_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_PlayVideo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_PlayVideo_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_PauseVideo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_PauseVideo_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_SeekToTimestamp_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_SeekToTimestamp_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_TranslatePage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_TranslatePage_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_AddBookmark_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_AddBookmark_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_RemoveBookmark_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_RemoveBookmark_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_OpenPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_OpenPage_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_SetText_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_SetText_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_ClickElement_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_ClickElement_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_SetFullscreen_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_SetFullscreen_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_SelectOption_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_SelectOption_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_OpenGeminiPanel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_OpenGeminiPanel_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_CloseGeminiPanel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_CloseGeminiPanel_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_AnalyzeAndManageTabs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_AnalyzeAndManageTabs_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayToolRegistry_GetToolDefinitions_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayToolRegistry_GetToolDefinitions_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_OpenUrl_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_FollowLink_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_PerformSearch_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_SwitchTab_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_CloseCurrentTab_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_GoBack_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_GoForward_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_ReloadPage_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_FindAndHighlight_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_Scroll_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_PlayVideo_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_PauseVideo_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_SeekToTimestamp_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_TranslatePage_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_AddBookmark_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_RemoveBookmark_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_OpenPage_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_SetText_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_ClickElement_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_SetFullscreen_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_SelectOption_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_OpenGeminiPanel_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_CloseGeminiPanel_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AiOverlayTools_AnalyzeAndManageTabs_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare interface SwitchTabResultMojoType {
    title: string;
    url: url_mojom_Url;
    tabId: number;
}
export type SwitchTabResult = SwitchTabResultMojoType;
export declare interface AiOverlayTools_OpenUrl_ParamsMojoType {
    url: string;
    newTab: boolean;
}
export type AiOverlayTools_OpenUrl_Params = AiOverlayTools_OpenUrl_ParamsMojoType;
export declare interface AiOverlayTools_OpenUrl_ResponseParamsMojoType {
    result: AiOverlayTools_OpenUrl_ResponseParam_Result;
}
export type AiOverlayTools_OpenUrl_ResponseParams = AiOverlayTools_OpenUrl_ResponseParamsMojoType;
export declare interface AiOverlayTools_FollowLink_ParamsMojoType {
    id: string;
}
export type AiOverlayTools_FollowLink_Params = AiOverlayTools_FollowLink_ParamsMojoType;
export declare interface AiOverlayTools_FollowLink_ResponseParamsMojoType {
    result: AiOverlayTools_FollowLink_ResponseParam_Result;
}
export type AiOverlayTools_FollowLink_ResponseParams = AiOverlayTools_FollowLink_ResponseParamsMojoType;
export declare interface AiOverlayTools_PerformSearch_ParamsMojoType {
    query: string;
    newTab: boolean;
}
export type AiOverlayTools_PerformSearch_Params = AiOverlayTools_PerformSearch_ParamsMojoType;
export declare interface AiOverlayTools_PerformSearch_ResponseParamsMojoType {
    result: AiOverlayTools_PerformSearch_ResponseParam_Result;
}
export type AiOverlayTools_PerformSearch_ResponseParams = AiOverlayTools_PerformSearch_ResponseParamsMojoType;
export declare interface AiOverlayTools_SwitchTab_ParamsMojoType {
    query: string;
}
export type AiOverlayTools_SwitchTab_Params = AiOverlayTools_SwitchTab_ParamsMojoType;
export declare interface AiOverlayTools_SwitchTab_ResponseParamsMojoType {
    result: AiOverlayTools_SwitchTab_ResponseParam_Result;
}
export type AiOverlayTools_SwitchTab_ResponseParams = AiOverlayTools_SwitchTab_ResponseParamsMojoType;
export declare interface AiOverlayTools_CloseCurrentTab_ParamsMojoType {
}
export type AiOverlayTools_CloseCurrentTab_Params = AiOverlayTools_CloseCurrentTab_ParamsMojoType;
export declare interface AiOverlayTools_CloseCurrentTab_ResponseParamsMojoType {
    result: AiOverlayTools_CloseCurrentTab_ResponseParam_Result;
}
export type AiOverlayTools_CloseCurrentTab_ResponseParams = AiOverlayTools_CloseCurrentTab_ResponseParamsMojoType;
export declare interface AiOverlayTools_GoBack_ParamsMojoType {
}
export type AiOverlayTools_GoBack_Params = AiOverlayTools_GoBack_ParamsMojoType;
export declare interface AiOverlayTools_GoBack_ResponseParamsMojoType {
    result: AiOverlayTools_GoBack_ResponseParam_Result;
}
export type AiOverlayTools_GoBack_ResponseParams = AiOverlayTools_GoBack_ResponseParamsMojoType;
export declare interface AiOverlayTools_GoForward_ParamsMojoType {
}
export type AiOverlayTools_GoForward_Params = AiOverlayTools_GoForward_ParamsMojoType;
export declare interface AiOverlayTools_GoForward_ResponseParamsMojoType {
    result: AiOverlayTools_GoForward_ResponseParam_Result;
}
export type AiOverlayTools_GoForward_ResponseParams = AiOverlayTools_GoForward_ResponseParamsMojoType;
export declare interface AiOverlayTools_ReloadPage_ParamsMojoType {
}
export type AiOverlayTools_ReloadPage_Params = AiOverlayTools_ReloadPage_ParamsMojoType;
export declare interface AiOverlayTools_ReloadPage_ResponseParamsMojoType {
    result: AiOverlayTools_ReloadPage_ResponseParam_Result;
}
export type AiOverlayTools_ReloadPage_ResponseParams = AiOverlayTools_ReloadPage_ResponseParamsMojoType;
export declare interface AiOverlayTools_FindAndHighlight_ParamsMojoType {
    query: string;
}
export type AiOverlayTools_FindAndHighlight_Params = AiOverlayTools_FindAndHighlight_ParamsMojoType;
export declare interface AiOverlayTools_FindAndHighlight_ResponseParamsMojoType {
    result: AiOverlayTools_FindAndHighlight_ResponseParam_Result;
}
export type AiOverlayTools_FindAndHighlight_ResponseParams = AiOverlayTools_FindAndHighlight_ResponseParamsMojoType;
export declare interface AiOverlayTools_Scroll_ParamsMojoType {
    granularity: ScrollGranularity;
    magnitude: number;
}
export type AiOverlayTools_Scroll_Params = AiOverlayTools_Scroll_ParamsMojoType;
export declare interface AiOverlayTools_Scroll_ResponseParamsMojoType {
    result: AiOverlayTools_Scroll_ResponseParam_Result;
}
export type AiOverlayTools_Scroll_ResponseParams = AiOverlayTools_Scroll_ResponseParamsMojoType;
export declare interface AiOverlayTools_PlayVideo_ParamsMojoType {
}
export type AiOverlayTools_PlayVideo_Params = AiOverlayTools_PlayVideo_ParamsMojoType;
export declare interface AiOverlayTools_PlayVideo_ResponseParamsMojoType {
    result: AiOverlayTools_PlayVideo_ResponseParam_Result;
}
export type AiOverlayTools_PlayVideo_ResponseParams = AiOverlayTools_PlayVideo_ResponseParamsMojoType;
export declare interface AiOverlayTools_PauseVideo_ParamsMojoType {
}
export type AiOverlayTools_PauseVideo_Params = AiOverlayTools_PauseVideo_ParamsMojoType;
export declare interface AiOverlayTools_PauseVideo_ResponseParamsMojoType {
    result: AiOverlayTools_PauseVideo_ResponseParam_Result;
}
export type AiOverlayTools_PauseVideo_ResponseParams = AiOverlayTools_PauseVideo_ResponseParamsMojoType;
export declare interface AiOverlayTools_SeekToTimestamp_ParamsMojoType {
    timecode: string;
}
export type AiOverlayTools_SeekToTimestamp_Params = AiOverlayTools_SeekToTimestamp_ParamsMojoType;
export declare interface AiOverlayTools_SeekToTimestamp_ResponseParamsMojoType {
    result: AiOverlayTools_SeekToTimestamp_ResponseParam_Result;
}
export type AiOverlayTools_SeekToTimestamp_ResponseParams = AiOverlayTools_SeekToTimestamp_ResponseParamsMojoType;
export declare interface AiOverlayTools_TranslatePage_ParamsMojoType {
    targetLanguage: string;
}
export type AiOverlayTools_TranslatePage_Params = AiOverlayTools_TranslatePage_ParamsMojoType;
export declare interface AiOverlayTools_TranslatePage_ResponseParamsMojoType {
    result: AiOverlayTools_TranslatePage_ResponseParam_Result;
}
export type AiOverlayTools_TranslatePage_ResponseParams = AiOverlayTools_TranslatePage_ResponseParamsMojoType;
export declare interface AiOverlayTools_AddBookmark_ParamsMojoType {
}
export type AiOverlayTools_AddBookmark_Params = AiOverlayTools_AddBookmark_ParamsMojoType;
export declare interface AiOverlayTools_AddBookmark_ResponseParamsMojoType {
    result: AiOverlayTools_AddBookmark_ResponseParam_Result;
}
export type AiOverlayTools_AddBookmark_ResponseParams = AiOverlayTools_AddBookmark_ResponseParamsMojoType;
export declare interface AiOverlayTools_RemoveBookmark_ParamsMojoType {
}
export type AiOverlayTools_RemoveBookmark_Params = AiOverlayTools_RemoveBookmark_ParamsMojoType;
export declare interface AiOverlayTools_RemoveBookmark_ResponseParamsMojoType {
    result: AiOverlayTools_RemoveBookmark_ResponseParam_Result;
}
export type AiOverlayTools_RemoveBookmark_ResponseParams = AiOverlayTools_RemoveBookmark_ResponseParamsMojoType;
export declare interface AiOverlayTools_OpenPage_ParamsMojoType {
    query: string;
}
export type AiOverlayTools_OpenPage_Params = AiOverlayTools_OpenPage_ParamsMojoType;
export declare interface AiOverlayTools_OpenPage_ResponseParamsMojoType {
    result: AiOverlayTools_OpenPage_ResponseParam_Result;
}
export type AiOverlayTools_OpenPage_ResponseParams = AiOverlayTools_OpenPage_ResponseParamsMojoType;
export declare interface AiOverlayTools_SetText_ParamsMojoType {
    domNodeId: blink_mojom_DOMNodeId;
    text: string;
}
export type AiOverlayTools_SetText_Params = AiOverlayTools_SetText_ParamsMojoType;
export declare interface AiOverlayTools_SetText_ResponseParamsMojoType {
    result: AiOverlayTools_SetText_ResponseParam_Result;
}
export type AiOverlayTools_SetText_ResponseParams = AiOverlayTools_SetText_ResponseParamsMojoType;
export declare interface AiOverlayTools_ClickElement_ParamsMojoType {
    domNodeId: blink_mojom_DOMNodeId;
}
export type AiOverlayTools_ClickElement_Params = AiOverlayTools_ClickElement_ParamsMojoType;
export declare interface AiOverlayTools_ClickElement_ResponseParamsMojoType {
    result: AiOverlayTools_ClickElement_ResponseParam_Result;
}
export type AiOverlayTools_ClickElement_ResponseParams = AiOverlayTools_ClickElement_ResponseParamsMojoType;
export declare interface AiOverlayTools_SetFullscreen_ParamsMojoType {
    fullscreen: boolean;
}
export type AiOverlayTools_SetFullscreen_Params = AiOverlayTools_SetFullscreen_ParamsMojoType;
export declare interface AiOverlayTools_SetFullscreen_ResponseParamsMojoType {
    result: AiOverlayTools_SetFullscreen_ResponseParam_Result;
}
export type AiOverlayTools_SetFullscreen_ResponseParams = AiOverlayTools_SetFullscreen_ResponseParamsMojoType;
export declare interface AiOverlayTools_SelectOption_ParamsMojoType {
    domNodeId: blink_mojom_DOMNodeId;
    value: string;
}
export type AiOverlayTools_SelectOption_Params = AiOverlayTools_SelectOption_ParamsMojoType;
export declare interface AiOverlayTools_SelectOption_ResponseParamsMojoType {
    result: AiOverlayTools_SelectOption_ResponseParam_Result;
}
export type AiOverlayTools_SelectOption_ResponseParams = AiOverlayTools_SelectOption_ResponseParamsMojoType;
export declare interface AiOverlayTools_OpenGeminiPanel_ParamsMojoType {
    prompt: string;
}
export type AiOverlayTools_OpenGeminiPanel_Params = AiOverlayTools_OpenGeminiPanel_ParamsMojoType;
export declare interface AiOverlayTools_OpenGeminiPanel_ResponseParamsMojoType {
    result: AiOverlayTools_OpenGeminiPanel_ResponseParam_Result;
}
export type AiOverlayTools_OpenGeminiPanel_ResponseParams = AiOverlayTools_OpenGeminiPanel_ResponseParamsMojoType;
export declare interface AiOverlayTools_CloseGeminiPanel_ParamsMojoType {
}
export type AiOverlayTools_CloseGeminiPanel_Params = AiOverlayTools_CloseGeminiPanel_ParamsMojoType;
export declare interface AiOverlayTools_CloseGeminiPanel_ResponseParamsMojoType {
    result: AiOverlayTools_CloseGeminiPanel_ResponseParam_Result;
}
export type AiOverlayTools_CloseGeminiPanel_ResponseParams = AiOverlayTools_CloseGeminiPanel_ResponseParamsMojoType;
export declare interface AiOverlayTools_AnalyzeAndManageTabs_ParamsMojoType {
    request: string;
}
export type AiOverlayTools_AnalyzeAndManageTabs_Params = AiOverlayTools_AnalyzeAndManageTabs_ParamsMojoType;
export declare interface AiOverlayTools_AnalyzeAndManageTabs_ResponseParamsMojoType {
    result: AiOverlayTools_AnalyzeAndManageTabs_ResponseParam_Result;
}
export type AiOverlayTools_AnalyzeAndManageTabs_ResponseParams = AiOverlayTools_AnalyzeAndManageTabs_ResponseParamsMojoType;
export declare interface AiOverlayToolRegistry_GetToolDefinitions_ParamsMojoType {
}
export type AiOverlayToolRegistry_GetToolDefinitions_Params = AiOverlayToolRegistry_GetToolDefinitions_ParamsMojoType;
export declare interface AiOverlayToolRegistry_GetToolDefinitions_ResponseParamsMojoType {
    jsonDefinitions: string;
}
export type AiOverlayToolRegistry_GetToolDefinitions_ResponseParams = AiOverlayToolRegistry_GetToolDefinitions_ResponseParamsMojoType;
export declare interface AiOverlayTools_OpenUrl_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: string;
}
export declare enum AiOverlayTools_OpenUrl_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_OpenUrl_ResponseParam_Result(u: AiOverlayTools_OpenUrl_ResponseParam_Result): AiOverlayTools_OpenUrl_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_FollowLink_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: string;
}
export declare enum AiOverlayTools_FollowLink_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_FollowLink_ResponseParam_Result(u: AiOverlayTools_FollowLink_ResponseParam_Result): AiOverlayTools_FollowLink_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_PerformSearch_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: string;
}
export declare enum AiOverlayTools_PerformSearch_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_PerformSearch_ResponseParam_Result(u: AiOverlayTools_PerformSearch_ResponseParam_Result): AiOverlayTools_PerformSearch_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_SwitchTab_ResponseParam_Result {
    success?: SwitchTabResult;
    failure?: string;
}
export declare enum AiOverlayTools_SwitchTab_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_SwitchTab_ResponseParam_Result(u: AiOverlayTools_SwitchTab_ResponseParam_Result): AiOverlayTools_SwitchTab_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_CloseCurrentTab_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: string;
}
export declare enum AiOverlayTools_CloseCurrentTab_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_CloseCurrentTab_ResponseParam_Result(u: AiOverlayTools_CloseCurrentTab_ResponseParam_Result): AiOverlayTools_CloseCurrentTab_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_GoBack_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: string;
}
export declare enum AiOverlayTools_GoBack_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_GoBack_ResponseParam_Result(u: AiOverlayTools_GoBack_ResponseParam_Result): AiOverlayTools_GoBack_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_GoForward_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: string;
}
export declare enum AiOverlayTools_GoForward_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_GoForward_ResponseParam_Result(u: AiOverlayTools_GoForward_ResponseParam_Result): AiOverlayTools_GoForward_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_ReloadPage_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: string;
}
export declare enum AiOverlayTools_ReloadPage_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_ReloadPage_ResponseParam_Result(u: AiOverlayTools_ReloadPage_ResponseParam_Result): AiOverlayTools_ReloadPage_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_FindAndHighlight_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: string;
}
export declare enum AiOverlayTools_FindAndHighlight_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_FindAndHighlight_ResponseParam_Result(u: AiOverlayTools_FindAndHighlight_ResponseParam_Result): AiOverlayTools_FindAndHighlight_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_Scroll_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: string;
}
export declare enum AiOverlayTools_Scroll_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_Scroll_ResponseParam_Result(u: AiOverlayTools_Scroll_ResponseParam_Result): AiOverlayTools_Scroll_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_PlayVideo_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: string;
}
export declare enum AiOverlayTools_PlayVideo_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_PlayVideo_ResponseParam_Result(u: AiOverlayTools_PlayVideo_ResponseParam_Result): AiOverlayTools_PlayVideo_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_PauseVideo_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: string;
}
export declare enum AiOverlayTools_PauseVideo_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_PauseVideo_ResponseParam_Result(u: AiOverlayTools_PauseVideo_ResponseParam_Result): AiOverlayTools_PauseVideo_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_SeekToTimestamp_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: string;
}
export declare enum AiOverlayTools_SeekToTimestamp_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_SeekToTimestamp_ResponseParam_Result(u: AiOverlayTools_SeekToTimestamp_ResponseParam_Result): AiOverlayTools_SeekToTimestamp_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_TranslatePage_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: string;
}
export declare enum AiOverlayTools_TranslatePage_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_TranslatePage_ResponseParam_Result(u: AiOverlayTools_TranslatePage_ResponseParam_Result): AiOverlayTools_TranslatePage_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_AddBookmark_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: string;
}
export declare enum AiOverlayTools_AddBookmark_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_AddBookmark_ResponseParam_Result(u: AiOverlayTools_AddBookmark_ResponseParam_Result): AiOverlayTools_AddBookmark_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_RemoveBookmark_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: string;
}
export declare enum AiOverlayTools_RemoveBookmark_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_RemoveBookmark_ResponseParam_Result(u: AiOverlayTools_RemoveBookmark_ResponseParam_Result): AiOverlayTools_RemoveBookmark_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_OpenPage_ResponseParam_Result {
    success?: string;
    failure?: string;
}
export declare enum AiOverlayTools_OpenPage_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_OpenPage_ResponseParam_Result(u: AiOverlayTools_OpenPage_ResponseParam_Result): AiOverlayTools_OpenPage_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_SetText_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: string;
}
export declare enum AiOverlayTools_SetText_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_SetText_ResponseParam_Result(u: AiOverlayTools_SetText_ResponseParam_Result): AiOverlayTools_SetText_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_ClickElement_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: string;
}
export declare enum AiOverlayTools_ClickElement_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_ClickElement_ResponseParam_Result(u: AiOverlayTools_ClickElement_ResponseParam_Result): AiOverlayTools_ClickElement_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_SetFullscreen_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: string;
}
export declare enum AiOverlayTools_SetFullscreen_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_SetFullscreen_ResponseParam_Result(u: AiOverlayTools_SetFullscreen_ResponseParam_Result): AiOverlayTools_SetFullscreen_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_SelectOption_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: string;
}
export declare enum AiOverlayTools_SelectOption_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_SelectOption_ResponseParam_Result(u: AiOverlayTools_SelectOption_ResponseParam_Result): AiOverlayTools_SelectOption_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_OpenGeminiPanel_ResponseParam_Result {
    success?: string;
    failure?: string;
}
export declare enum AiOverlayTools_OpenGeminiPanel_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_OpenGeminiPanel_ResponseParam_Result(u: AiOverlayTools_OpenGeminiPanel_ResponseParam_Result): AiOverlayTools_OpenGeminiPanel_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_CloseGeminiPanel_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: string;
}
export declare enum AiOverlayTools_CloseGeminiPanel_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_CloseGeminiPanel_ResponseParam_Result(u: AiOverlayTools_CloseGeminiPanel_ResponseParam_Result): AiOverlayTools_CloseGeminiPanel_ResponseParam_ResultFieldTags;
export declare interface AiOverlayTools_AnalyzeAndManageTabs_ResponseParam_Result {
    success?: mojoBase_mojom_Value;
    failure?: string;
}
export declare enum AiOverlayTools_AnalyzeAndManageTabs_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichAiOverlayTools_AnalyzeAndManageTabs_ResponseParam_Result(u: AiOverlayTools_AnalyzeAndManageTabs_ResponseParam_Result): AiOverlayTools_AnalyzeAndManageTabs_ResponseParam_ResultFieldTags;
