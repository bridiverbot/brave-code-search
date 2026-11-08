import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export type GenericAssociatedInterfacePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<GenericAssociatedInterfacePendingReceiver>;
export declare class GenericAssociatedInterfacePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<GenericAssociatedInterface> {
    handle: mojo.internal.interfaceSupport.Endpoint<GenericAssociatedInterfacePendingReceiver>;
    constructor(handle: MojoHandle | GenericAssociatedInterfacePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface GenericAssociatedInterfaceInterface {
}
export declare class GenericAssociatedInterfaceRemote implements GenericAssociatedInterfaceInterface, mojo.internal.interfaceSupport.InterfaceRemote<GenericAssociatedInterfacePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<GenericAssociatedInterfacePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | GenericAssociatedInterfacePendingReceiverEndpoint);
}
/**
 * An object which receives request messages for the GenericAssociatedInterface
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class GenericAssociatedInterfaceReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<GenericAssociatedInterfaceRemote, GenericAssociatedInterfacePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GenericAssociatedInterfaceRemote, GenericAssociatedInterfacePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(_impl: GenericAssociatedInterfaceInterface);
}
export declare class GenericAssociatedInterface {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): GenericAssociatedInterfaceRemote;
}
/**
 * An object which receives request messages for the GenericAssociatedInterface
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class GenericAssociatedInterfaceCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<GenericAssociatedInterfaceRemote, GenericAssociatedInterfacePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GenericAssociatedInterfaceRemote, GenericAssociatedInterfacePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const GenericPendingAssociatedReceiverSpec: {
    $: mojo.internal.MojomType;
};
export declare interface GenericPendingAssociatedReceiverMojoType {
    interfaceName: string;
    receiver: GenericAssociatedInterfacePendingReceiver;
}
export type GenericPendingAssociatedReceiver = GenericPendingAssociatedReceiverMojoType;
