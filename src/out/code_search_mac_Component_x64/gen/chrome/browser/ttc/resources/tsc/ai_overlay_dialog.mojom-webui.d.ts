import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { DOMNodeId as blink_mojom_DOMNodeId } from './dom_node_id.mojom-webui.js';
import { AiOverlayToolsPendingReceiver as aiOverlayDialog_mojom_AiOverlayToolsPendingReceiver } from './tools.mojom-webui.js';
import { BigBuffer as mojoBase_mojom_BigBuffer } from '//resources/mojo/mojo/public/mojom/base/big_buffer.mojom-webui.js';
import { Value as mojoBase_mojom_Value } from '//resources/mojo/mojo/public/mojom/base/values.mojom-webui.js';
import { Point as gfx_mojom_Point } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const NodeRoleSpec: {
    $: mojo.internal.MojomType;
};
export declare enum NodeRole {
    MIN_VALUE = 0,
    MAX_VALUE = 7,
    kNone = 0,
    kButton = 1,
    kCheckbox = 2,
    kCombobox = 3,
    kInput = 4,
    kLink = 5,
    kRadio = 6,
    kTextbox = 7
}
export type PageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
export declare class PageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerFactoryInterface {
    createPageHandler(handler: PageHandlerPendingReceiver, page: PageRemote, tools: aiOverlayDialog_mojom_AiOverlayToolsPendingReceiver): void;
}
export declare class PageHandlerFactoryRemote implements PageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(handler: PageHandlerPendingReceiver, page: PageRemote, tools: aiOverlayDialog_mojom_AiOverlayToolsPendingReceiver): void;
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
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: PageHandlerPendingReceiver, page: PageRemote, tools: aiOverlayDialog_mojom_AiOverlayToolsPendingReceiver) => any>;
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
    getMockAudioData(): Promise<{
        jsonData: (string | null);
    }>;
    updateAudioEnergy(energy: number): void;
    close(): void;
    getCursorPosition(): Promise<{
        position: (gfx_mojom_Point | null);
    }>;
    captureRawViewportRegion(x: number, y: number, width: number, height: number): Promise<{
        result: (RawViewportRegionResult | null);
    }>;
    setRememberedNote(note: RememberedNote): Promise<{
        success: boolean;
    }>;
    getRememberedNotes(): Promise<{
        notes: RememberedNote[];
    }>;
    getImageBytes(domNodeId: blink_mojom_DOMNodeId): Promise<{
        result: (ImageBytesResult | null);
    }>;
    startStreamingSession(): void;
    sendAudioChunk(pcmData: mojoBase_mojom_BigBuffer): void;
    sendTextInput(text: string): void;
    reportPlaybackStatus(lastPlayedSequenceNumber: bigint): void;
    stopStreamingSession(): void;
    executeWebMcpTool(toolName: string, args: mojoBase_mojom_Value): Promise<mojoBase_mojom_Value>;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    getMockAudioData(): Promise<{
        jsonData: (string | null);
    }>;
    updateAudioEnergy(energy: number): void;
    close(): void;
    getCursorPosition(): Promise<{
        position: (gfx_mojom_Point | null);
    }>;
    captureRawViewportRegion(x: number, y: number, width: number, height: number): Promise<{
        result: (RawViewportRegionResult | null);
    }>;
    setRememberedNote(note: RememberedNote): Promise<{
        success: boolean;
    }>;
    getRememberedNotes(): Promise<{
        notes: RememberedNote[];
    }>;
    getImageBytes(domNodeId: blink_mojom_DOMNodeId): Promise<{
        result: (ImageBytesResult | null);
    }>;
    startStreamingSession(): void;
    sendAudioChunk(pcmData: mojoBase_mojom_BigBuffer): void;
    sendTextInput(text: string): void;
    reportPlaybackStatus(lastPlayedSequenceNumber: bigint): void;
    stopStreamingSession(): void;
    executeWebMcpTool(toolName: string, args: mojoBase_mojom_Value): Promise<mojoBase_mojom_Value>;
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
    getMockAudioData: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    updateAudioEnergy: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(energy: number) => any>;
    close: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getCursorPosition: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    captureRawViewportRegion: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(x: number, y: number, width: number, height: number) => any>;
    setRememberedNote: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(note: RememberedNote) => any>;
    getRememberedNotes: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getImageBytes: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(domNodeId: blink_mojom_DOMNodeId) => any>;
    startStreamingSession: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    sendAudioChunk: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(pcmData: mojoBase_mojom_BigBuffer) => any>;
    sendTextInput: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(text: string) => any>;
    reportPlaybackStatus: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(lastPlayedSequenceNumber: bigint) => any>;
    stopStreamingSession: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    executeWebMcpTool: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(toolName: string, args: mojoBase_mojom_Value) => any>;
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
    didChangePage(url: string, title: (string | null), content: (string | null)): void;
    updateCurrentPageContext(pageTitle: string, rootNode: (PageContentNode | null), webmcpTools: WebMcpToolDefinition[]): void;
    setInputCaptionsVisible(visible: boolean): void;
    setOutputCaptionsVisible(visible: boolean): void;
    setUsePersona(usePersona: boolean): void;
    onStreamingSessionStateChanged(connected: boolean, sessionId: string, errorMessage: string): void;
    onTranscriptions(inputTranscription: string, outputTranscription: string): void;
    onAudioOutput(audioData: mojoBase_mojom_BigBuffer, sequenceNumber: bigint): void;
    onGenerationStateChanged(started: boolean, completed: boolean, interrupted: boolean): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    didChangePage(url: string, title: (string | null), content: (string | null)): void;
    updateCurrentPageContext(pageTitle: string, rootNode: (PageContentNode | null), webmcpTools: WebMcpToolDefinition[]): void;
    setInputCaptionsVisible(visible: boolean): void;
    setOutputCaptionsVisible(visible: boolean): void;
    setUsePersona(usePersona: boolean): void;
    onStreamingSessionStateChanged(connected: boolean, sessionId: string, errorMessage: string): void;
    onTranscriptions(inputTranscription: string, outputTranscription: string): void;
    onAudioOutput(audioData: mojoBase_mojom_BigBuffer, sequenceNumber: bigint): void;
    onGenerationStateChanged(started: boolean, completed: boolean, interrupted: boolean): void;
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
    didChangePage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: string, title: (string | null), content: (string | null)) => any>;
    updateCurrentPageContext: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(pageTitle: string, rootNode: (PageContentNode | null), webmcpTools: WebMcpToolDefinition[]) => any>;
    setInputCaptionsVisible: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(visible: boolean) => any>;
    setOutputCaptionsVisible: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(visible: boolean) => any>;
    setUsePersona: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(usePersona: boolean) => any>;
    onStreamingSessionStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(connected: boolean, sessionId: string, errorMessage: string) => any>;
    onTranscriptions: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(inputTranscription: string, outputTranscription: string) => any>;
    onAudioOutput: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(audioData: mojoBase_mojom_BigBuffer, sequenceNumber: bigint) => any>;
    onGenerationStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(started: boolean, completed: boolean, interrupted: boolean) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const PageContentNodeSpec: {
    $: mojo.internal.MojomType;
};
export declare const RawViewportRegionResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ImageBytesResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const RememberedNoteSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebMcpToolDefinitionSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetMockAudioData_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetMockAudioData_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UpdateAudioEnergy_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_Close_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetCursorPosition_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetCursorPosition_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CaptureRawViewportRegion_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CaptureRawViewportRegion_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetRememberedNote_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetRememberedNote_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetRememberedNotes_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetRememberedNotes_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetImageBytes_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetImageBytes_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_StartStreamingSession_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SendAudioChunk_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SendTextInput_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ReportPlaybackStatus_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_StopStreamingSession_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ExecuteWebMcpTool_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ExecuteWebMcpTool_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_DidChangePage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_UpdateCurrentPageContext_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetInputCaptionsVisible_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetOutputCaptionsVisible_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetUsePersona_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnStreamingSessionStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnTranscriptions_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnAudioOutput_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnGenerationStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ExecuteWebMcpTool_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare interface PageContentNodeMojoType {
    domNodeId: number;
    role: NodeRole;
    tagName: string;
    text: string;
    value: string;
    placeholder: string;
    isChecked: boolean;
    isInteractive: boolean;
    url: (url_mojom_Url | null);
    children: PageContentNode[];
}
export type PageContentNode = PageContentNodeMojoType;
export declare interface RawViewportRegionResultMojoType {
    jpegBytes: mojoBase_mojom_BigBuffer;
    width: number;
    height: number;
    scaleFactor: number;
}
export type RawViewportRegionResult = RawViewportRegionResultMojoType;
export declare interface ImageBytesResultMojoType {
    imageBytes: mojoBase_mojom_BigBuffer;
    mimeType: string;
}
export type ImageBytesResult = ImageBytesResultMojoType;
export declare interface RememberedNoteMojoType {
    key: string;
    value: string;
}
export type RememberedNote = RememberedNoteMojoType;
export declare interface WebMcpToolDefinitionMojoType {
    name: string;
    description: string;
    inputSchema: mojoBase_mojom_Value;
    readOnly: boolean;
    consequential: boolean;
}
export type WebMcpToolDefinition = WebMcpToolDefinitionMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    handler: PageHandlerPendingReceiver;
    page: PageRemote;
    tools: aiOverlayDialog_mojom_AiOverlayToolsPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandler_GetMockAudioData_ParamsMojoType {
}
export type PageHandler_GetMockAudioData_Params = PageHandler_GetMockAudioData_ParamsMojoType;
export declare interface PageHandler_GetMockAudioData_ResponseParamsMojoType {
    jsonData: (string | null);
}
export type PageHandler_GetMockAudioData_ResponseParams = PageHandler_GetMockAudioData_ResponseParamsMojoType;
export declare interface PageHandler_UpdateAudioEnergy_ParamsMojoType {
    energy: number;
}
export type PageHandler_UpdateAudioEnergy_Params = PageHandler_UpdateAudioEnergy_ParamsMojoType;
export declare interface PageHandler_Close_ParamsMojoType {
}
export type PageHandler_Close_Params = PageHandler_Close_ParamsMojoType;
export declare interface PageHandler_GetCursorPosition_ParamsMojoType {
}
export type PageHandler_GetCursorPosition_Params = PageHandler_GetCursorPosition_ParamsMojoType;
export declare interface PageHandler_GetCursorPosition_ResponseParamsMojoType {
    position: (gfx_mojom_Point | null);
}
export type PageHandler_GetCursorPosition_ResponseParams = PageHandler_GetCursorPosition_ResponseParamsMojoType;
export declare interface PageHandler_CaptureRawViewportRegion_ParamsMojoType {
    x: number;
    y: number;
    width: number;
    height: number;
}
export type PageHandler_CaptureRawViewportRegion_Params = PageHandler_CaptureRawViewportRegion_ParamsMojoType;
export declare interface PageHandler_CaptureRawViewportRegion_ResponseParamsMojoType {
    result: (RawViewportRegionResult | null);
}
export type PageHandler_CaptureRawViewportRegion_ResponseParams = PageHandler_CaptureRawViewportRegion_ResponseParamsMojoType;
export declare interface PageHandler_SetRememberedNote_ParamsMojoType {
    note: RememberedNote;
}
export type PageHandler_SetRememberedNote_Params = PageHandler_SetRememberedNote_ParamsMojoType;
export declare interface PageHandler_SetRememberedNote_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_SetRememberedNote_ResponseParams = PageHandler_SetRememberedNote_ResponseParamsMojoType;
export declare interface PageHandler_GetRememberedNotes_ParamsMojoType {
}
export type PageHandler_GetRememberedNotes_Params = PageHandler_GetRememberedNotes_ParamsMojoType;
export declare interface PageHandler_GetRememberedNotes_ResponseParamsMojoType {
    notes: RememberedNote[];
}
export type PageHandler_GetRememberedNotes_ResponseParams = PageHandler_GetRememberedNotes_ResponseParamsMojoType;
export declare interface PageHandler_GetImageBytes_ParamsMojoType {
    domNodeId: blink_mojom_DOMNodeId;
}
export type PageHandler_GetImageBytes_Params = PageHandler_GetImageBytes_ParamsMojoType;
export declare interface PageHandler_GetImageBytes_ResponseParamsMojoType {
    result: (ImageBytesResult | null);
}
export type PageHandler_GetImageBytes_ResponseParams = PageHandler_GetImageBytes_ResponseParamsMojoType;
export declare interface PageHandler_StartStreamingSession_ParamsMojoType {
}
export type PageHandler_StartStreamingSession_Params = PageHandler_StartStreamingSession_ParamsMojoType;
export declare interface PageHandler_SendAudioChunk_ParamsMojoType {
    pcmData: mojoBase_mojom_BigBuffer;
}
export type PageHandler_SendAudioChunk_Params = PageHandler_SendAudioChunk_ParamsMojoType;
export declare interface PageHandler_SendTextInput_ParamsMojoType {
    text: string;
}
export type PageHandler_SendTextInput_Params = PageHandler_SendTextInput_ParamsMojoType;
export declare interface PageHandler_ReportPlaybackStatus_ParamsMojoType {
    lastPlayedSequenceNumber: bigint;
}
export type PageHandler_ReportPlaybackStatus_Params = PageHandler_ReportPlaybackStatus_ParamsMojoType;
export declare interface PageHandler_StopStreamingSession_ParamsMojoType {
}
export type PageHandler_StopStreamingSession_Params = PageHandler_StopStreamingSession_ParamsMojoType;
export declare interface PageHandler_ExecuteWebMcpTool_ParamsMojoType {
    toolName: string;
    args: mojoBase_mojom_Value;
}
export type PageHandler_ExecuteWebMcpTool_Params = PageHandler_ExecuteWebMcpTool_ParamsMojoType;
export declare interface PageHandler_ExecuteWebMcpTool_ResponseParamsMojoType {
    result: PageHandler_ExecuteWebMcpTool_ResponseParam_Result;
}
export type PageHandler_ExecuteWebMcpTool_ResponseParams = PageHandler_ExecuteWebMcpTool_ResponseParamsMojoType;
export declare interface Page_DidChangePage_ParamsMojoType {
    url: string;
    title: (string | null);
    content: (string | null);
}
export type Page_DidChangePage_Params = Page_DidChangePage_ParamsMojoType;
export declare interface Page_UpdateCurrentPageContext_ParamsMojoType {
    pageTitle: string;
    rootNode: (PageContentNode | null);
    webmcpTools: WebMcpToolDefinition[];
}
export type Page_UpdateCurrentPageContext_Params = Page_UpdateCurrentPageContext_ParamsMojoType;
export declare interface Page_SetInputCaptionsVisible_ParamsMojoType {
    visible: boolean;
}
export type Page_SetInputCaptionsVisible_Params = Page_SetInputCaptionsVisible_ParamsMojoType;
export declare interface Page_SetOutputCaptionsVisible_ParamsMojoType {
    visible: boolean;
}
export type Page_SetOutputCaptionsVisible_Params = Page_SetOutputCaptionsVisible_ParamsMojoType;
export declare interface Page_SetUsePersona_ParamsMojoType {
    usePersona: boolean;
}
export type Page_SetUsePersona_Params = Page_SetUsePersona_ParamsMojoType;
export declare interface Page_OnStreamingSessionStateChanged_ParamsMojoType {
    connected: boolean;
    sessionId: string;
    errorMessage: string;
}
export type Page_OnStreamingSessionStateChanged_Params = Page_OnStreamingSessionStateChanged_ParamsMojoType;
export declare interface Page_OnTranscriptions_ParamsMojoType {
    inputTranscription: string;
    outputTranscription: string;
}
export type Page_OnTranscriptions_Params = Page_OnTranscriptions_ParamsMojoType;
export declare interface Page_OnAudioOutput_ParamsMojoType {
    audioData: mojoBase_mojom_BigBuffer;
    sequenceNumber: bigint;
}
export type Page_OnAudioOutput_Params = Page_OnAudioOutput_ParamsMojoType;
export declare interface Page_OnGenerationStateChanged_ParamsMojoType {
    started: boolean;
    completed: boolean;
    interrupted: boolean;
}
export type Page_OnGenerationStateChanged_Params = Page_OnGenerationStateChanged_ParamsMojoType;
export declare interface PageHandler_ExecuteWebMcpTool_ResponseParam_Result {
    success?: mojoBase_mojom_Value;
    failure?: string;
}
export declare enum PageHandler_ExecuteWebMcpTool_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichPageHandler_ExecuteWebMcpTool_ResponseParam_Result(u: PageHandler_ExecuteWebMcpTool_ResponseParam_Result): PageHandler_ExecuteWebMcpTool_ResponseParam_ResultFieldTags;
