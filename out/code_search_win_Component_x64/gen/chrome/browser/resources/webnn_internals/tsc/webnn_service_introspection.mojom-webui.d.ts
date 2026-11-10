import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export type WebNNServiceIntrospectionClientPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<WebNNServiceIntrospectionClientPendingReceiver>;
export declare class WebNNServiceIntrospectionClientPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<WebNNServiceIntrospectionClient> {
    handle: mojo.internal.interfaceSupport.Endpoint<WebNNServiceIntrospectionClientPendingReceiver>;
    constructor(handle: MojoHandle | WebNNServiceIntrospectionClientPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface WebNNServiceIntrospectionClientInterface {
    onUpdateExistingContextDetails(contextsDetails: WebNNContextIntrospectionDetails[]): void;
    onUpdateAvailableExecutionProvidersDetails(availableExecutionProviders: WebNNExecutionProviderDetails[]): void;
}
export declare class WebNNServiceIntrospectionClientRemote implements WebNNServiceIntrospectionClientInterface, mojo.internal.interfaceSupport.InterfaceRemote<WebNNServiceIntrospectionClientPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<WebNNServiceIntrospectionClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | WebNNServiceIntrospectionClientPendingReceiverEndpoint);
    onUpdateExistingContextDetails(contextsDetails: WebNNContextIntrospectionDetails[]): void;
    onUpdateAvailableExecutionProvidersDetails(availableExecutionProviders: WebNNExecutionProviderDetails[]): void;
}
/**
 * An object which receives request messages for the WebNNServiceIntrospectionClient
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class WebNNServiceIntrospectionClientReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<WebNNServiceIntrospectionClientRemote, WebNNServiceIntrospectionClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<WebNNServiceIntrospectionClientRemote, WebNNServiceIntrospectionClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: WebNNServiceIntrospectionClientInterface);
}
export declare class WebNNServiceIntrospectionClient {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): WebNNServiceIntrospectionClientRemote;
}
/**
 * An object which receives request messages for the WebNNServiceIntrospectionClient
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class WebNNServiceIntrospectionClientCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<WebNNServiceIntrospectionClientRemote, WebNNServiceIntrospectionClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<WebNNServiceIntrospectionClientRemote, WebNNServiceIntrospectionClientPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onUpdateExistingContextDetails: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(contextsDetails: WebNNContextIntrospectionDetails[]) => any>;
    onUpdateAvailableExecutionProvidersDetails: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(availableExecutionProviders: WebNNExecutionProviderDetails[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type WebNNServiceIntrospectionPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<WebNNServiceIntrospectionPendingReceiver>;
export declare class WebNNServiceIntrospectionPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<WebNNServiceIntrospection> {
    handle: mojo.internal.interfaceSupport.Endpoint<WebNNServiceIntrospectionPendingReceiver>;
    constructor(handle: MojoHandle | WebNNServiceIntrospectionPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface WebNNServiceIntrospectionInterface {
    setClient(client: WebNNServiceIntrospectionClientRemote): void;
    getExistingContextsDetails(): Promise<{
        contextsDetails: WebNNContextIntrospectionDetails[];
    }>;
    getAvailableExecutionProvidersDetails(): Promise<{
        executionProviders: WebNNExecutionProviderDetails[];
    }>;
    forceOrtEnvironmentCreationForIntrospection(): Promise<{
        executionProviders: WebNNExecutionProviderDetails[];
    }>;
}
export declare class WebNNServiceIntrospectionRemote implements WebNNServiceIntrospectionInterface, mojo.internal.interfaceSupport.InterfaceRemote<WebNNServiceIntrospectionPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<WebNNServiceIntrospectionPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | WebNNServiceIntrospectionPendingReceiverEndpoint);
    setClient(client: WebNNServiceIntrospectionClientRemote): void;
    getExistingContextsDetails(): Promise<{
        contextsDetails: WebNNContextIntrospectionDetails[];
    }>;
    getAvailableExecutionProvidersDetails(): Promise<{
        executionProviders: WebNNExecutionProviderDetails[];
    }>;
    forceOrtEnvironmentCreationForIntrospection(): Promise<{
        executionProviders: WebNNExecutionProviderDetails[];
    }>;
}
/**
 * An object which receives request messages for the WebNNServiceIntrospection
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class WebNNServiceIntrospectionReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<WebNNServiceIntrospectionRemote, WebNNServiceIntrospectionPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<WebNNServiceIntrospectionRemote, WebNNServiceIntrospectionPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: WebNNServiceIntrospectionInterface);
}
export declare class WebNNServiceIntrospection {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): WebNNServiceIntrospectionRemote;
}
/**
 * An object which receives request messages for the WebNNServiceIntrospection
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class WebNNServiceIntrospectionCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<WebNNServiceIntrospectionRemote, WebNNServiceIntrospectionPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<WebNNServiceIntrospectionRemote, WebNNServiceIntrospectionPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    setClient: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(client: WebNNServiceIntrospectionClientRemote) => any>;
    getExistingContextsDetails: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getAvailableExecutionProvidersDetails: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    forceOrtEnvironmentCreationForIntrospection: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const WebNNExecutionProviderDetailsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebNNContextIntrospectionDetailsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebNNServiceIntrospectionClient_OnUpdateExistingContextDetails_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebNNServiceIntrospectionClient_OnUpdateAvailableExecutionProvidersDetails_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebNNServiceIntrospection_SetClient_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebNNServiceIntrospection_GetExistingContextsDetails_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebNNServiceIntrospection_GetExistingContextsDetails_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebNNServiceIntrospection_GetAvailableExecutionProvidersDetails_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebNNServiceIntrospection_GetAvailableExecutionProvidersDetails_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebNNServiceIntrospection_ForceOrtEnvironmentCreationForIntrospection_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebNNServiceIntrospection_ForceOrtEnvironmentCreationForIntrospection_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface WebNNExecutionProviderDetailsMojoType {
    name: string;
    vendor: string;
    hardwareType: string;
    vendorId: string;
    deviceId: string;
    version: string;
    firstSelected: boolean;
}
export type WebNNExecutionProviderDetails = WebNNExecutionProviderDetailsMojoType;
export declare interface WebNNContextIntrospectionDetailsMojoType {
    contextId: number;
    contextBackend: string;
    executionProviders: WebNNExecutionProviderDetails[];
}
export type WebNNContextIntrospectionDetails = WebNNContextIntrospectionDetailsMojoType;
export declare interface WebNNServiceIntrospectionClient_OnUpdateExistingContextDetails_ParamsMojoType {
    contextsDetails: WebNNContextIntrospectionDetails[];
}
export type WebNNServiceIntrospectionClient_OnUpdateExistingContextDetails_Params = WebNNServiceIntrospectionClient_OnUpdateExistingContextDetails_ParamsMojoType;
export declare interface WebNNServiceIntrospectionClient_OnUpdateAvailableExecutionProvidersDetails_ParamsMojoType {
    availableExecutionProviders: WebNNExecutionProviderDetails[];
}
export type WebNNServiceIntrospectionClient_OnUpdateAvailableExecutionProvidersDetails_Params = WebNNServiceIntrospectionClient_OnUpdateAvailableExecutionProvidersDetails_ParamsMojoType;
export declare interface WebNNServiceIntrospection_SetClient_ParamsMojoType {
    client: WebNNServiceIntrospectionClientRemote;
}
export type WebNNServiceIntrospection_SetClient_Params = WebNNServiceIntrospection_SetClient_ParamsMojoType;
export declare interface WebNNServiceIntrospection_GetExistingContextsDetails_ParamsMojoType {
}
export type WebNNServiceIntrospection_GetExistingContextsDetails_Params = WebNNServiceIntrospection_GetExistingContextsDetails_ParamsMojoType;
export declare interface WebNNServiceIntrospection_GetExistingContextsDetails_ResponseParamsMojoType {
    contextsDetails: WebNNContextIntrospectionDetails[];
}
export type WebNNServiceIntrospection_GetExistingContextsDetails_ResponseParams = WebNNServiceIntrospection_GetExistingContextsDetails_ResponseParamsMojoType;
export declare interface WebNNServiceIntrospection_GetAvailableExecutionProvidersDetails_ParamsMojoType {
}
export type WebNNServiceIntrospection_GetAvailableExecutionProvidersDetails_Params = WebNNServiceIntrospection_GetAvailableExecutionProvidersDetails_ParamsMojoType;
export declare interface WebNNServiceIntrospection_GetAvailableExecutionProvidersDetails_ResponseParamsMojoType {
    executionProviders: WebNNExecutionProviderDetails[];
}
export type WebNNServiceIntrospection_GetAvailableExecutionProvidersDetails_ResponseParams = WebNNServiceIntrospection_GetAvailableExecutionProvidersDetails_ResponseParamsMojoType;
export declare interface WebNNServiceIntrospection_ForceOrtEnvironmentCreationForIntrospection_ParamsMojoType {
}
export type WebNNServiceIntrospection_ForceOrtEnvironmentCreationForIntrospection_Params = WebNNServiceIntrospection_ForceOrtEnvironmentCreationForIntrospection_ParamsMojoType;
export declare interface WebNNServiceIntrospection_ForceOrtEnvironmentCreationForIntrospection_ResponseParamsMojoType {
    executionProviders: WebNNExecutionProviderDetails[];
}
export type WebNNServiceIntrospection_ForceOrtEnvironmentCreationForIntrospection_ResponseParams = WebNNServiceIntrospection_ForceOrtEnvironmentCreationForIntrospection_ResponseParamsMojoType;
