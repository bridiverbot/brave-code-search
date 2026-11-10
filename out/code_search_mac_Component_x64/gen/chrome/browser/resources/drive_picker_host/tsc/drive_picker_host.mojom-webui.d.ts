import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export type DrivePickerHostHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<DrivePickerHostHandlerPendingReceiver>;
export declare class DrivePickerHostHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<DrivePickerHostHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<DrivePickerHostHandlerPendingReceiver>;
    constructor(handle: MojoHandle | DrivePickerHostHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface DrivePickerHostHandlerInterface {
}
export declare class DrivePickerHostHandlerRemote implements DrivePickerHostHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<DrivePickerHostHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<DrivePickerHostHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | DrivePickerHostHandlerPendingReceiverEndpoint);
}
/**
 * An object which receives request messages for the DrivePickerHostHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class DrivePickerHostHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<DrivePickerHostHandlerRemote, DrivePickerHostHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DrivePickerHostHandlerRemote, DrivePickerHostHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(_impl: DrivePickerHostHandlerInterface);
}
export declare class DrivePickerHostHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): DrivePickerHostHandlerRemote;
}
/**
 * An object which receives request messages for the DrivePickerHostHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class DrivePickerHostHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<DrivePickerHostHandlerRemote, DrivePickerHostHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DrivePickerHostHandlerRemote, DrivePickerHostHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
