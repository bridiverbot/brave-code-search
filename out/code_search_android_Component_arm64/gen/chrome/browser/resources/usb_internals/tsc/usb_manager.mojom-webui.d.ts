import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { UsbDevicePendingReceiver as device_mojom_UsbDevicePendingReceiver, UsbDeviceClientRemote as device_mojom_UsbDeviceClientRemote, UsbDeviceInfo as device_mojom_UsbDeviceInfo } from './usb_device.mojom-webui.js';
import { UsbEnumerationOptions as device_mojom_UsbEnumerationOptions } from './usb_enumeration_options.mojom-webui.js';
export type UsbDeviceManagerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<UsbDeviceManagerPendingReceiver>;
export declare class UsbDeviceManagerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<UsbDeviceManager> {
    handle: mojo.internal.interfaceSupport.Endpoint<UsbDeviceManagerPendingReceiver>;
    constructor(handle: MojoHandle | UsbDeviceManagerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface UsbDeviceManagerInterface {
    enumerateDevicesAndSetClient(client: object): Promise<{
        results: device_mojom_UsbDeviceInfo[];
    }>;
    getDevices(options: (device_mojom_UsbEnumerationOptions | null)): Promise<{
        results: device_mojom_UsbDeviceInfo[];
    }>;
    getDevice(guid: string, blockedInterfaceClasses: number[], deviceReceiver: device_mojom_UsbDevicePendingReceiver, deviceClient: (device_mojom_UsbDeviceClientRemote | null)): void;
    getUnrestrictedDevice(guid: string, blockedInterfaceClasses: number[], deviceReceiver: device_mojom_UsbDevicePendingReceiver, deviceClient: (device_mojom_UsbDeviceClientRemote | null)): void;
    getSecurityKeyDevice(guid: string, deviceReceiver: device_mojom_UsbDevicePendingReceiver, deviceClient: (device_mojom_UsbDeviceClientRemote | null)): void;
    refreshDeviceInfo(guid: string): Promise<{
        deviceInfo: (device_mojom_UsbDeviceInfo | null);
    }>;
    setClient(client: object): void;
}
export declare class UsbDeviceManagerRemote implements UsbDeviceManagerInterface, mojo.internal.interfaceSupport.InterfaceRemote<UsbDeviceManagerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<UsbDeviceManagerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | UsbDeviceManagerPendingReceiverEndpoint);
    enumerateDevicesAndSetClient(client: object): Promise<{
        results: device_mojom_UsbDeviceInfo[];
    }>;
    getDevices(options: (device_mojom_UsbEnumerationOptions | null)): Promise<{
        results: device_mojom_UsbDeviceInfo[];
    }>;
    getDevice(guid: string, blockedInterfaceClasses: number[], deviceReceiver: device_mojom_UsbDevicePendingReceiver, deviceClient: (device_mojom_UsbDeviceClientRemote | null)): void;
    getUnrestrictedDevice(guid: string, blockedInterfaceClasses: number[], deviceReceiver: device_mojom_UsbDevicePendingReceiver, deviceClient: (device_mojom_UsbDeviceClientRemote | null)): void;
    getSecurityKeyDevice(guid: string, deviceReceiver: device_mojom_UsbDevicePendingReceiver, deviceClient: (device_mojom_UsbDeviceClientRemote | null)): void;
    refreshDeviceInfo(guid: string): Promise<{
        deviceInfo: (device_mojom_UsbDeviceInfo | null);
    }>;
    setClient(client: object): void;
}
/**
 * An object which receives request messages for the UsbDeviceManager
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class UsbDeviceManagerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<UsbDeviceManagerRemote, UsbDeviceManagerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UsbDeviceManagerRemote, UsbDeviceManagerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: UsbDeviceManagerInterface);
}
export declare class UsbDeviceManager {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): UsbDeviceManagerRemote;
}
/**
 * An object which receives request messages for the UsbDeviceManager
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class UsbDeviceManagerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<UsbDeviceManagerRemote, UsbDeviceManagerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UsbDeviceManagerRemote, UsbDeviceManagerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    enumerateDevicesAndSetClient: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(client: object) => any>;
    getDevices: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(options: (device_mojom_UsbEnumerationOptions | null)) => any>;
    getDevice: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(guid: string, blockedInterfaceClasses: number[], deviceReceiver: device_mojom_UsbDevicePendingReceiver, deviceClient: (device_mojom_UsbDeviceClientRemote | null)) => any>;
    getUnrestrictedDevice: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(guid: string, blockedInterfaceClasses: number[], deviceReceiver: device_mojom_UsbDevicePendingReceiver, deviceClient: (device_mojom_UsbDeviceClientRemote | null)) => any>;
    getSecurityKeyDevice: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(guid: string, deviceReceiver: device_mojom_UsbDevicePendingReceiver, deviceClient: (device_mojom_UsbDeviceClientRemote | null)) => any>;
    refreshDeviceInfo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(guid: string) => any>;
    setClient: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(client: object) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const UsbDeviceManager_EnumerateDevicesAndSetClient_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDeviceManager_GetDevices_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDeviceManager_GetDevices_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDeviceManager_GetDevice_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDeviceManager_GetUnrestrictedDevice_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDeviceManager_GetSecurityKeyDevice_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDeviceManager_RefreshDeviceInfo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDeviceManager_RefreshDeviceInfo_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDeviceManager_SetClient_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface UsbDeviceManager_EnumerateDevicesAndSetClient_ParamsMojoType {
    client: object;
}
export type UsbDeviceManager_EnumerateDevicesAndSetClient_Params = UsbDeviceManager_EnumerateDevicesAndSetClient_ParamsMojoType;
export declare interface UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParamsMojoType {
    results: device_mojom_UsbDeviceInfo[];
}
export type UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams = UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParamsMojoType;
export declare interface UsbDeviceManager_GetDevices_ParamsMojoType {
    options: (device_mojom_UsbEnumerationOptions | null);
}
export type UsbDeviceManager_GetDevices_Params = UsbDeviceManager_GetDevices_ParamsMojoType;
export declare interface UsbDeviceManager_GetDevices_ResponseParamsMojoType {
    results: device_mojom_UsbDeviceInfo[];
}
export type UsbDeviceManager_GetDevices_ResponseParams = UsbDeviceManager_GetDevices_ResponseParamsMojoType;
export declare interface UsbDeviceManager_GetDevice_ParamsMojoType {
    guid: string;
    blockedInterfaceClasses: number[];
    deviceReceiver: device_mojom_UsbDevicePendingReceiver;
    deviceClient: (device_mojom_UsbDeviceClientRemote | null);
}
export type UsbDeviceManager_GetDevice_Params = UsbDeviceManager_GetDevice_ParamsMojoType;
export declare interface UsbDeviceManager_GetUnrestrictedDevice_ParamsMojoType {
    guid: string;
    blockedInterfaceClasses: number[];
    deviceReceiver: device_mojom_UsbDevicePendingReceiver;
    deviceClient: (device_mojom_UsbDeviceClientRemote | null);
}
export type UsbDeviceManager_GetUnrestrictedDevice_Params = UsbDeviceManager_GetUnrestrictedDevice_ParamsMojoType;
export declare interface UsbDeviceManager_GetSecurityKeyDevice_ParamsMojoType {
    guid: string;
    deviceReceiver: device_mojom_UsbDevicePendingReceiver;
    deviceClient: (device_mojom_UsbDeviceClientRemote | null);
}
export type UsbDeviceManager_GetSecurityKeyDevice_Params = UsbDeviceManager_GetSecurityKeyDevice_ParamsMojoType;
export declare interface UsbDeviceManager_RefreshDeviceInfo_ParamsMojoType {
    guid: string;
}
export type UsbDeviceManager_RefreshDeviceInfo_Params = UsbDeviceManager_RefreshDeviceInfo_ParamsMojoType;
export declare interface UsbDeviceManager_RefreshDeviceInfo_ResponseParamsMojoType {
    deviceInfo: (device_mojom_UsbDeviceInfo | null);
}
export type UsbDeviceManager_RefreshDeviceInfo_ResponseParams = UsbDeviceManager_RefreshDeviceInfo_ResponseParamsMojoType;
export declare interface UsbDeviceManager_SetClient_ParamsMojoType {
    client: object;
}
export type UsbDeviceManager_SetClient_Params = UsbDeviceManager_SetClient_ParamsMojoType;
