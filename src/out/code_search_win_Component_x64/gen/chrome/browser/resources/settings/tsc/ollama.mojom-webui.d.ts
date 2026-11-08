import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const OLLAMA_BASE_URL: string;
export declare const OLLAMA_LIST_MODELS_API_ENDPOINT: string;
export declare const OLLAMA_SHOW_MODEL_INFO_API_ENDPOINT: string;
export declare const OLLAMA_ENDPOINT: string;
export type OllamaServicePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<OllamaServicePendingReceiver>;
export declare class OllamaServicePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<OllamaService> {
    handle: mojo.internal.interfaceSupport.Endpoint<OllamaServicePendingReceiver>;
    constructor(handle: MojoHandle | OllamaServicePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface OllamaServiceInterface {
    isConnected(): Promise<{
        connected: boolean;
    }>;
}
export declare class OllamaServiceRemote implements OllamaServiceInterface, mojo.internal.interfaceSupport.InterfaceRemote<OllamaServicePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<OllamaServicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | OllamaServicePendingReceiverEndpoint);
    isConnected(): Promise<{
        connected: boolean;
    }>;
}
/**
 * An object which receives request messages for the OllamaService
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class OllamaServiceReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<OllamaServiceRemote, OllamaServicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<OllamaServiceRemote, OllamaServicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: OllamaServiceInterface);
}
export declare class OllamaService {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): OllamaServiceRemote;
}
/**
 * An object which receives request messages for the OllamaService
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class OllamaServiceCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<OllamaServiceRemote, OllamaServicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<OllamaServiceRemote, OllamaServicePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    isConnected: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const OllamaService_IsConnected_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const OllamaService_IsConnected_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface OllamaService_IsConnected_ParamsMojoType {
}
export type OllamaService_IsConnected_Params = OllamaService_IsConnected_ParamsMojoType;
export declare interface OllamaService_IsConnected_ResponseParamsMojoType {
    connected: boolean;
}
export type OllamaService_IsConnected_ResponseParams = OllamaService_IsConnected_ResponseParamsMojoType;
