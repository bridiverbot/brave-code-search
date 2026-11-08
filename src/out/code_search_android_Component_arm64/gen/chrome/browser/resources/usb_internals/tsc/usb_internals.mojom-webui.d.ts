import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { UsbDeviceManagerPendingReceiver as device_mojom_UsbDeviceManagerPendingReceiver } from './usb_manager.mojom-webui.js';
import { UsbDeviceManagerTestPendingReceiver as device_mojom_UsbDeviceManagerTestPendingReceiver } from './usb_manager_test.mojom-webui.js';
export type UsbInternalsPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<UsbInternalsPageHandlerPendingReceiver>;
export declare class UsbInternalsPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<UsbInternalsPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<UsbInternalsPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | UsbInternalsPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface UsbInternalsPageHandlerInterface {
    bindUsbDeviceManagerInterface(receiver: device_mojom_UsbDeviceManagerPendingReceiver): void;
    bindTestInterface(receiver: device_mojom_UsbDeviceManagerTestPendingReceiver): void;
}
export declare class UsbInternalsPageHandlerRemote implements UsbInternalsPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<UsbInternalsPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<UsbInternalsPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | UsbInternalsPageHandlerPendingReceiverEndpoint);
    bindUsbDeviceManagerInterface(receiver: device_mojom_UsbDeviceManagerPendingReceiver): void;
    bindTestInterface(receiver: device_mojom_UsbDeviceManagerTestPendingReceiver): void;
}
/**
 * An object which receives request messages for the UsbInternalsPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class UsbInternalsPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<UsbInternalsPageHandlerRemote, UsbInternalsPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UsbInternalsPageHandlerRemote, UsbInternalsPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: UsbInternalsPageHandlerInterface);
}
export declare class UsbInternalsPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): UsbInternalsPageHandlerRemote;
}
/**
 * An object which receives request messages for the UsbInternalsPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class UsbInternalsPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<UsbInternalsPageHandlerRemote, UsbInternalsPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UsbInternalsPageHandlerRemote, UsbInternalsPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    bindUsbDeviceManagerInterface: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(receiver: device_mojom_UsbDeviceManagerPendingReceiver) => any>;
    bindTestInterface: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(receiver: device_mojom_UsbDeviceManagerTestPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const UsbInternalsPageHandler_BindUsbDeviceManagerInterface_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbInternalsPageHandler_BindTestInterface_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface UsbInternalsPageHandler_BindUsbDeviceManagerInterface_ParamsMojoType {
    receiver: device_mojom_UsbDeviceManagerPendingReceiver;
}
export type UsbInternalsPageHandler_BindUsbDeviceManagerInterface_Params = UsbInternalsPageHandler_BindUsbDeviceManagerInterface_ParamsMojoType;
export declare interface UsbInternalsPageHandler_BindTestInterface_ParamsMojoType {
    receiver: device_mojom_UsbDeviceManagerTestPendingReceiver;
}
export type UsbInternalsPageHandler_BindTestInterface_Params = UsbInternalsPageHandler_BindTestInterface_ParamsMojoType;
