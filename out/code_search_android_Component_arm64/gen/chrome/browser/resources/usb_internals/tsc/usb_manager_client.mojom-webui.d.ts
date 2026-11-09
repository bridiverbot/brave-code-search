import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { UsbDeviceInfo as device_mojom_UsbDeviceInfo } from './usb_device.mojom-webui.js';
export type UsbDeviceManagerClientPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<UsbDeviceManagerClientPendingReceiver>;
export declare class UsbDeviceManagerClientPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<UsbDeviceManagerClient> {
    handle: mojo.internal.interfaceSupport.Endpoint<UsbDeviceManagerClientPendingReceiver>;
    constructor(handle: MojoHandle | UsbDeviceManagerClientPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface UsbDeviceManagerClientInterface {
    onDeviceAdded(deviceInfo: device_mojom_UsbDeviceInfo): void;
    onDeviceRemoved(deviceInfo: device_mojom_UsbDeviceInfo): void;
}
export declare class UsbDeviceManagerClientRemote implements UsbDeviceManagerClientInterface, mojo.internal.interfaceSupport.InterfaceRemote<UsbDeviceManagerClientPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<UsbDeviceManagerClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | UsbDeviceManagerClientPendingReceiverEndpoint);
    onDeviceAdded(deviceInfo: device_mojom_UsbDeviceInfo): void;
    onDeviceRemoved(deviceInfo: device_mojom_UsbDeviceInfo): void;
}
/**
 * An object which receives request messages for the UsbDeviceManagerClient
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class UsbDeviceManagerClientReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<UsbDeviceManagerClientRemote, UsbDeviceManagerClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UsbDeviceManagerClientRemote, UsbDeviceManagerClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: UsbDeviceManagerClientInterface);
}
export declare class UsbDeviceManagerClient {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): UsbDeviceManagerClientRemote;
}
/**
 * An object which receives request messages for the UsbDeviceManagerClient
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class UsbDeviceManagerClientCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<UsbDeviceManagerClientRemote, UsbDeviceManagerClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UsbDeviceManagerClientRemote, UsbDeviceManagerClientPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onDeviceAdded: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(deviceInfo: device_mojom_UsbDeviceInfo) => any>;
    onDeviceRemoved: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(deviceInfo: device_mojom_UsbDeviceInfo) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const UsbDeviceManagerClient_OnDeviceAdded_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDeviceManagerClient_OnDeviceRemoved_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface UsbDeviceManagerClient_OnDeviceAdded_ParamsMojoType {
    deviceInfo: device_mojom_UsbDeviceInfo;
}
export type UsbDeviceManagerClient_OnDeviceAdded_Params = UsbDeviceManagerClient_OnDeviceAdded_ParamsMojoType;
export declare interface UsbDeviceManagerClient_OnDeviceRemoved_ParamsMojoType {
    deviceInfo: device_mojom_UsbDeviceInfo;
}
export type UsbDeviceManagerClient_OnDeviceRemoved_Params = UsbDeviceManagerClient_OnDeviceRemoved_ParamsMojoType;
