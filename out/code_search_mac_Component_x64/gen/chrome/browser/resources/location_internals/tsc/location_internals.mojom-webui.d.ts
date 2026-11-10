import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { GeolocationInternalsPendingReceiver as device_mojom_GeolocationInternalsPendingReceiver } from './geolocation_internals.mojom-webui.js';
export type LocationInternalsHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<LocationInternalsHandlerPendingReceiver>;
export declare class LocationInternalsHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<LocationInternalsHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<LocationInternalsHandlerPendingReceiver>;
    constructor(handle: MojoHandle | LocationInternalsHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface LocationInternalsHandlerInterface {
    bindInternalsInterface(receiver: device_mojom_GeolocationInternalsPendingReceiver): void;
}
export declare class LocationInternalsHandlerRemote implements LocationInternalsHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<LocationInternalsHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<LocationInternalsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | LocationInternalsHandlerPendingReceiverEndpoint);
    bindInternalsInterface(receiver: device_mojom_GeolocationInternalsPendingReceiver): void;
}
/**
 * An object which receives request messages for the LocationInternalsHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class LocationInternalsHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<LocationInternalsHandlerRemote, LocationInternalsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<LocationInternalsHandlerRemote, LocationInternalsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: LocationInternalsHandlerInterface);
}
export declare class LocationInternalsHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): LocationInternalsHandlerRemote;
}
/**
 * An object which receives request messages for the LocationInternalsHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class LocationInternalsHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<LocationInternalsHandlerRemote, LocationInternalsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<LocationInternalsHandlerRemote, LocationInternalsHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    bindInternalsInterface: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(receiver: device_mojom_GeolocationInternalsPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const LocationInternalsHandler_BindInternalsInterface_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface LocationInternalsHandler_BindInternalsInterface_ParamsMojoType {
    receiver: device_mojom_GeolocationInternalsPendingReceiver;
}
export type LocationInternalsHandler_BindInternalsInterface_Params = LocationInternalsHandler_BindInternalsInterface_ParamsMojoType;
