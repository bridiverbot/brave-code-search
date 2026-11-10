import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export type FooHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<FooHandlerPendingReceiver>;
export declare class FooHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<FooHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<FooHandlerPendingReceiver>;
    constructor(handle: MojoHandle | FooHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface FooHandlerInterface {
    getData(): Promise<{
        data: FooDataItem[];
    }>;
}
export declare class FooHandlerRemote implements FooHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<FooHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<FooHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | FooHandlerPendingReceiverEndpoint);
    getData(): Promise<{
        data: FooDataItem[];
    }>;
}
/**
 * An object which receives request messages for the FooHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class FooHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<FooHandlerRemote, FooHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<FooHandlerRemote, FooHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: FooHandlerInterface);
}
export declare class FooHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): FooHandlerRemote;
}
/**
 * An object which receives request messages for the FooHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class FooHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<FooHandlerRemote, FooHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<FooHandlerRemote, FooHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getData: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const FooDataItemSpec: {
    $: mojo.internal.MojomType;
};
export declare const FooHandler_GetData_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const FooHandler_GetData_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface FooDataItemMojoType {
    label: string;
    value: string;
    imageUrl: string;
}
export type FooDataItem = FooDataItemMojoType;
export declare interface FooHandler_GetData_ParamsMojoType {
}
export type FooHandler_GetData_Params = FooHandler_GetData_ParamsMojoType;
export declare interface FooHandler_GetData_ResponseParamsMojoType {
    data: FooDataItem[];
}
export type FooHandler_GetData_ResponseParams = FooHandler_GetData_ResponseParamsMojoType;
