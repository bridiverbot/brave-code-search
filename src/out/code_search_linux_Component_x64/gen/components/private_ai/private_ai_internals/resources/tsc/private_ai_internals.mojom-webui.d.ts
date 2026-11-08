import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const LogLevelSpec: {
    $: mojo.internal.MojomType;
};
export declare enum LogLevel {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kInfo = 0,
    kError = 1
}
export type PrivateAiInternalsPagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PrivateAiInternalsPagePendingReceiver>;
export declare class PrivateAiInternalsPagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PrivateAiInternalsPage> {
    handle: mojo.internal.interfaceSupport.Endpoint<PrivateAiInternalsPagePendingReceiver>;
    constructor(handle: MojoHandle | PrivateAiInternalsPagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PrivateAiInternalsPageInterface {
    onLogMessage(level: LogLevel, message: string): void;
}
export declare class PrivateAiInternalsPageRemote implements PrivateAiInternalsPageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PrivateAiInternalsPagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PrivateAiInternalsPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PrivateAiInternalsPagePendingReceiverEndpoint);
    onLogMessage(level: LogLevel, message: string): void;
}
/**
 * An object which receives request messages for the PrivateAiInternalsPage
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PrivateAiInternalsPageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PrivateAiInternalsPageRemote, PrivateAiInternalsPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PrivateAiInternalsPageRemote, PrivateAiInternalsPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PrivateAiInternalsPageInterface);
}
export declare class PrivateAiInternalsPage {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PrivateAiInternalsPageRemote;
}
/**
 * An object which receives request messages for the PrivateAiInternalsPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PrivateAiInternalsPageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PrivateAiInternalsPageRemote, PrivateAiInternalsPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PrivateAiInternalsPageRemote, PrivateAiInternalsPagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onLogMessage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(level: LogLevel, message: string) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type PrivateAiInternalsPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PrivateAiInternalsPageHandlerPendingReceiver>;
export declare class PrivateAiInternalsPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PrivateAiInternalsPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<PrivateAiInternalsPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | PrivateAiInternalsPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PrivateAiInternalsPageHandlerInterface {
    setPage(page: PrivateAiInternalsPageRemote): void;
    connect(url: string, apiKey: string, proxyUrl: string, useTokenAttestation: boolean): Promise<void>;
    close(): Promise<void>;
    sendRequest(featureName: string, request: string): Promise<{
        response: PrivateAiResponse;
    }>;
}
export declare class PrivateAiInternalsPageHandlerRemote implements PrivateAiInternalsPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PrivateAiInternalsPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PrivateAiInternalsPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PrivateAiInternalsPageHandlerPendingReceiverEndpoint);
    setPage(page: PrivateAiInternalsPageRemote): void;
    connect(url: string, apiKey: string, proxyUrl: string, useTokenAttestation: boolean): Promise<void>;
    close(): Promise<void>;
    sendRequest(featureName: string, request: string): Promise<{
        response: PrivateAiResponse;
    }>;
}
/**
 * An object which receives request messages for the PrivateAiInternalsPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PrivateAiInternalsPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PrivateAiInternalsPageHandlerRemote, PrivateAiInternalsPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PrivateAiInternalsPageHandlerRemote, PrivateAiInternalsPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PrivateAiInternalsPageHandlerInterface);
}
export declare class PrivateAiInternalsPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PrivateAiInternalsPageHandlerRemote;
}
/**
 * An object which receives request messages for the PrivateAiInternalsPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PrivateAiInternalsPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PrivateAiInternalsPageHandlerRemote, PrivateAiInternalsPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PrivateAiInternalsPageHandlerRemote, PrivateAiInternalsPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    setPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: PrivateAiInternalsPageRemote) => any>;
    connect: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: string, apiKey: string, proxyUrl: string, useTokenAttestation: boolean) => any>;
    close: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    sendRequest: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(featureName: string, request: string) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const PrivateAiResponseSpec: {
    $: mojo.internal.MojomType;
};
export declare const PrivateAiInternalsPage_OnLogMessage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PrivateAiInternalsPageHandler_SetPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PrivateAiInternalsPageHandler_Connect_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PrivateAiInternalsPageHandler_Connect_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PrivateAiInternalsPageHandler_Close_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PrivateAiInternalsPageHandler_Close_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PrivateAiInternalsPageHandler_SendRequest_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PrivateAiInternalsPageHandler_SendRequest_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface PrivateAiResponseMojoType {
    response: (string | null);
    error: (string | null);
}
export type PrivateAiResponse = PrivateAiResponseMojoType;
export declare interface PrivateAiInternalsPage_OnLogMessage_ParamsMojoType {
    level: LogLevel;
    message: string;
}
export type PrivateAiInternalsPage_OnLogMessage_Params = PrivateAiInternalsPage_OnLogMessage_ParamsMojoType;
export declare interface PrivateAiInternalsPageHandler_SetPage_ParamsMojoType {
    page: PrivateAiInternalsPageRemote;
}
export type PrivateAiInternalsPageHandler_SetPage_Params = PrivateAiInternalsPageHandler_SetPage_ParamsMojoType;
export declare interface PrivateAiInternalsPageHandler_Connect_ParamsMojoType {
    url: string;
    apiKey: string;
    proxyUrl: string;
    useTokenAttestation: boolean;
}
export type PrivateAiInternalsPageHandler_Connect_Params = PrivateAiInternalsPageHandler_Connect_ParamsMojoType;
export declare interface PrivateAiInternalsPageHandler_Connect_ResponseParamsMojoType {
}
export type PrivateAiInternalsPageHandler_Connect_ResponseParams = PrivateAiInternalsPageHandler_Connect_ResponseParamsMojoType;
export declare interface PrivateAiInternalsPageHandler_Close_ParamsMojoType {
}
export type PrivateAiInternalsPageHandler_Close_Params = PrivateAiInternalsPageHandler_Close_ParamsMojoType;
export declare interface PrivateAiInternalsPageHandler_Close_ResponseParamsMojoType {
}
export type PrivateAiInternalsPageHandler_Close_ResponseParams = PrivateAiInternalsPageHandler_Close_ResponseParamsMojoType;
export declare interface PrivateAiInternalsPageHandler_SendRequest_ParamsMojoType {
    featureName: string;
    request: string;
}
export type PrivateAiInternalsPageHandler_SendRequest_Params = PrivateAiInternalsPageHandler_SendRequest_ParamsMojoType;
export declare interface PrivateAiInternalsPageHandler_SendRequest_ResponseParamsMojoType {
    response: PrivateAiResponse;
}
export type PrivateAiInternalsPageHandler_SendRequest_ResponseParams = PrivateAiInternalsPageHandler_SendRequest_ResponseParamsMojoType;
