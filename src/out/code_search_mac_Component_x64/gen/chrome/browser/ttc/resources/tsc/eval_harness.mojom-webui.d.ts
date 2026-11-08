import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { Value as mojoBase_mojom_Value } from '//resources/mojo/mojo/public/mojom/base/values.mojom-webui.js';
export declare const TurnStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare enum TurnStatus {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kComplete = 0,
    kError = 1,
    kTimeout = 2
}
export type HarnessPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<HarnessPageHandlerFactoryPendingReceiver>;
export declare class HarnessPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<HarnessPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<HarnessPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | HarnessPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface HarnessPageHandlerFactoryInterface {
    createPageHandler(handler: HarnessPageHandlerPendingReceiver): void;
}
export declare class HarnessPageHandlerFactoryRemote implements HarnessPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<HarnessPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<HarnessPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | HarnessPageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(handler: HarnessPageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the HarnessPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class HarnessPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<HarnessPageHandlerFactoryRemote, HarnessPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<HarnessPageHandlerFactoryRemote, HarnessPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: HarnessPageHandlerFactoryInterface);
}
export declare class HarnessPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): HarnessPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the HarnessPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class HarnessPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<HarnessPageHandlerFactoryRemote, HarnessPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<HarnessPageHandlerFactoryRemote, HarnessPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: HarnessPageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type HarnessPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<HarnessPageHandlerPendingReceiver>;
export declare class HarnessPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<HarnessPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<HarnessPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | HarnessPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface HarnessPageHandlerInterface {
    startSession(): Promise<{
        success: boolean;
    }>;
    closeSession(): void;
    sendText(text: string): Promise<{
        result: TurnResult;
    }>;
    sendAudio(pcm16Bytes: number[]): Promise<{
        result: TurnResult;
    }>;
}
export declare class HarnessPageHandlerRemote implements HarnessPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<HarnessPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<HarnessPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | HarnessPageHandlerPendingReceiverEndpoint);
    startSession(): Promise<{
        success: boolean;
    }>;
    closeSession(): void;
    sendText(text: string): Promise<{
        result: TurnResult;
    }>;
    sendAudio(pcm16Bytes: number[]): Promise<{
        result: TurnResult;
    }>;
}
/**
 * An object which receives request messages for the HarnessPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class HarnessPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<HarnessPageHandlerRemote, HarnessPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<HarnessPageHandlerRemote, HarnessPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: HarnessPageHandlerInterface);
}
export declare class HarnessPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): HarnessPageHandlerRemote;
}
/**
 * An object which receives request messages for the HarnessPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class HarnessPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<HarnessPageHandlerRemote, HarnessPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<HarnessPageHandlerRemote, HarnessPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    startSession: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    closeSession: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    sendText: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(text: string) => any>;
    sendAudio: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(pcm16Bytes: number[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const TurnToolCallSpec: {
    $: mojo.internal.MojomType;
};
export declare const TurnResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const HarnessPageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const HarnessPageHandler_StartSession_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const HarnessPageHandler_StartSession_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const HarnessPageHandler_CloseSession_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const HarnessPageHandler_SendText_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const HarnessPageHandler_SendText_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const HarnessPageHandler_SendAudio_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const HarnessPageHandler_SendAudio_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface TurnToolCallMojoType {
    name: string;
    arguments: mojoBase_mojom_Value;
}
export type TurnToolCall = TurnToolCallMojoType;
export declare interface TurnResultMojoType {
    status: TurnStatus;
    errorCode: number;
    toolCalls: TurnToolCall[];
    transcription: string;
    inputTranscription: string;
    errorMessage: (string | null);
}
export type TurnResult = TurnResultMojoType;
export declare interface HarnessPageHandlerFactory_CreatePageHandler_ParamsMojoType {
    handler: HarnessPageHandlerPendingReceiver;
}
export type HarnessPageHandlerFactory_CreatePageHandler_Params = HarnessPageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface HarnessPageHandler_StartSession_ParamsMojoType {
}
export type HarnessPageHandler_StartSession_Params = HarnessPageHandler_StartSession_ParamsMojoType;
export declare interface HarnessPageHandler_StartSession_ResponseParamsMojoType {
    success: boolean;
}
export type HarnessPageHandler_StartSession_ResponseParams = HarnessPageHandler_StartSession_ResponseParamsMojoType;
export declare interface HarnessPageHandler_CloseSession_ParamsMojoType {
}
export type HarnessPageHandler_CloseSession_Params = HarnessPageHandler_CloseSession_ParamsMojoType;
export declare interface HarnessPageHandler_SendText_ParamsMojoType {
    text: string;
}
export type HarnessPageHandler_SendText_Params = HarnessPageHandler_SendText_ParamsMojoType;
export declare interface HarnessPageHandler_SendText_ResponseParamsMojoType {
    result: TurnResult;
}
export type HarnessPageHandler_SendText_ResponseParams = HarnessPageHandler_SendText_ResponseParamsMojoType;
export declare interface HarnessPageHandler_SendAudio_ParamsMojoType {
    pcm16Bytes: number[];
}
export type HarnessPageHandler_SendAudio_Params = HarnessPageHandler_SendAudio_ParamsMojoType;
export declare interface HarnessPageHandler_SendAudio_ResponseParamsMojoType {
    result: TurnResult;
}
export type HarnessPageHandler_SendAudio_ResponseParams = HarnessPageHandler_SendAudio_ResponseParamsMojoType;
export type BrowserProxy = MojoHandlerProxy<HarnessPageHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<HarnessPageHandlerInterface, HarnessPageHandlerPendingReceiver, HarnessPageHandlerRemote>;
