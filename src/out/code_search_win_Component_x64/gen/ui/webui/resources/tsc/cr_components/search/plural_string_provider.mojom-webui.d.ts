import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export type PluralStringProviderPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PluralStringProviderPendingReceiver>;
export declare class PluralStringProviderPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PluralStringProvider> {
    handle: mojo.internal.interfaceSupport.Endpoint<PluralStringProviderPendingReceiver>;
    constructor(handle: MojoHandle | PluralStringProviderPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PluralStringProviderInterface {
    getPluralString(messageName: string, count: number): Promise<{
        text: string;
    }>;
}
export declare class PluralStringProviderRemote implements PluralStringProviderInterface, mojo.internal.interfaceSupport.InterfaceRemote<PluralStringProviderPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PluralStringProviderPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PluralStringProviderPendingReceiverEndpoint);
    getPluralString(messageName: string, count: number): Promise<{
        text: string;
    }>;
}
/**
 * An object which receives request messages for the PluralStringProvider
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PluralStringProviderReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PluralStringProviderRemote, PluralStringProviderPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PluralStringProviderRemote, PluralStringProviderPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PluralStringProviderInterface);
}
export declare class PluralStringProvider {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PluralStringProviderRemote;
}
/**
 * An object which receives request messages for the PluralStringProvider
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PluralStringProviderCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PluralStringProviderRemote, PluralStringProviderPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PluralStringProviderRemote, PluralStringProviderPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getPluralString: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(messageName: string, count: number) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const PluralStringProvider_GetPluralString_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PluralStringProvider_GetPluralString_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface PluralStringProvider_GetPluralString_ParamsMojoType {
    messageName: string;
    count: number;
}
export type PluralStringProvider_GetPluralString_Params = PluralStringProvider_GetPluralString_ParamsMojoType;
export declare interface PluralStringProvider_GetPluralString_ResponseParamsMojoType {
    text: string;
}
export type PluralStringProvider_GetPluralString_ResponseParams = PluralStringProvider_GetPluralString_ResponseParamsMojoType;
