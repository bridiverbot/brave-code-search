import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { ReadOnlyBuffer as mojoBase_mojom_ReadOnlyBuffer } from '//resources/mojo/mojo/public/mojom/base/read_only_buffer.mojom-webui.js';
import { String16 as mojoBase_mojom_String16 } from '//resources/mojo/mojo/public/mojom/base/string16.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const USB_AUDIO_CLASS: number;
export declare const USB_COMM_CLASS: number;
export declare const USB_HID_CLASS: number;
export declare const USB_MASS_STORAGE_CLASS: number;
export declare const USB_SMART_CARD_CLASS: number;
export declare const USB_VIDEO_CLASS: number;
export declare const USB_AUDIO_VIDEO_CLASS: number;
export declare const USB_WIRELESS_CLASS: number;
export declare const UsbOpenDeviceSuccessSpec: {
    $: mojo.internal.MojomType;
};
export declare enum UsbOpenDeviceSuccess {
    MIN_VALUE = 0,
    MAX_VALUE = 0,
    OK = 0
}
export declare const UsbOpenDeviceErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare enum UsbOpenDeviceError {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    ACCESS_DENIED = 0,
    ALREADY_OPEN = 1
}
export declare const UsbClaimInterfaceResultSpec: {
    $: mojo.internal.MojomType;
};
export declare enum UsbClaimInterfaceResult {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kSuccess = 0,
    kProtectedClass = 1,
    kFailure = 2
}
export declare const UsbTransferDirectionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum UsbTransferDirection {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    INBOUND = 0,
    OUTBOUND = 1
}
export declare const UsbControlTransferTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum UsbControlTransferType {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    STANDARD = 0,
    CLASS = 1,
    VENDOR = 2,
    RESERVED = 3
}
export declare const UsbControlTransferRecipientSpec: {
    $: mojo.internal.MojomType;
};
export declare enum UsbControlTransferRecipient {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    DEVICE = 0,
    INTERFACE = 1,
    ENDPOINT = 2,
    OTHER = 3
}
export declare const UsbTransferTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum UsbTransferType {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    CONTROL = 0,
    ISOCHRONOUS = 1,
    BULK = 2,
    INTERRUPT = 3
}
export declare const UsbSynchronizationTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum UsbSynchronizationType {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    NONE = 0,
    ASYNCHRONOUS = 1,
    ADAPTIVE = 2,
    SYNCHRONOUS = 3
}
export declare const UsbUsageTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum UsbUsageType {
    MIN_VALUE = 0,
    MAX_VALUE = 5,
    DATA = 0,
    FEEDBACK = 1,
    EXPLICIT_FEEDBACK = 2,
    PERIODIC = 3,
    NOTIFICATION = 4,
    RESERVED = 5
}
export declare const UsbTransferStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare enum UsbTransferStatus {
    MIN_VALUE = 0,
    MAX_VALUE = 8,
    COMPLETED = 0,
    TRANSFER_ERROR = 1,
    TIMEOUT = 2,
    CANCELLED = 3,
    STALLED = 4,
    DISCONNECT = 5,
    BABBLE = 6,
    SHORT_PACKET = 7,
    PERMISSION_DENIED = 8
}
export type UsbDevicePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<UsbDevicePendingReceiver>;
export declare class UsbDevicePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<UsbDevice> {
    handle: mojo.internal.interfaceSupport.Endpoint<UsbDevicePendingReceiver>;
    constructor(handle: MojoHandle | UsbDevicePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface UsbDeviceInterface {
    open(): Promise<{
        result: UsbOpenDeviceResult;
    }>;
    close(): Promise<void>;
    setConfiguration(value: number): Promise<{
        success: boolean;
    }>;
    claimInterface(interfaceNumber: number): Promise<{
        result: UsbClaimInterfaceResult;
    }>;
    releaseInterface(interfaceNumber: number): Promise<{
        success: boolean;
    }>;
    setInterfaceAlternateSetting(interfaceNumber: number, alternateSetting: number): Promise<{
        success: boolean;
    }>;
    reset(): Promise<{
        success: boolean;
    }>;
    clearHalt(direction: UsbTransferDirection, endpointNumber: number): Promise<{
        success: boolean;
    }>;
    controlTransferIn(params: UsbControlTransferParams, length: number, timeout: number): Promise<{
        status: UsbTransferStatus;
        data: mojoBase_mojom_ReadOnlyBuffer;
    }>;
    controlTransferOut(params: UsbControlTransferParams, data: mojoBase_mojom_ReadOnlyBuffer, timeout: number): Promise<{
        status: UsbTransferStatus;
    }>;
    genericTransferIn(endpointNumber: number, length: number, timeout: number): Promise<{
        status: UsbTransferStatus;
        data: mojoBase_mojom_ReadOnlyBuffer;
    }>;
    genericTransferOut(endpointNumber: number, data: mojoBase_mojom_ReadOnlyBuffer, timeout: number): Promise<{
        status: UsbTransferStatus;
    }>;
    isochronousTransferIn(endpointNumber: number, packetLengths: number[], timeout: number): Promise<{
        data: mojoBase_mojom_ReadOnlyBuffer;
        packets: UsbIsochronousPacket[];
    }>;
    isochronousTransferOut(endpointNumber: number, data: mojoBase_mojom_ReadOnlyBuffer, packetLengths: number[], timeout: number): Promise<{
        packets: UsbIsochronousPacket[];
    }>;
}
export declare class UsbDeviceRemote implements UsbDeviceInterface, mojo.internal.interfaceSupport.InterfaceRemote<UsbDevicePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<UsbDevicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | UsbDevicePendingReceiverEndpoint);
    open(): Promise<{
        result: UsbOpenDeviceResult;
    }>;
    close(): Promise<void>;
    setConfiguration(value: number): Promise<{
        success: boolean;
    }>;
    claimInterface(interfaceNumber: number): Promise<{
        result: UsbClaimInterfaceResult;
    }>;
    releaseInterface(interfaceNumber: number): Promise<{
        success: boolean;
    }>;
    setInterfaceAlternateSetting(interfaceNumber: number, alternateSetting: number): Promise<{
        success: boolean;
    }>;
    reset(): Promise<{
        success: boolean;
    }>;
    clearHalt(direction: UsbTransferDirection, endpointNumber: number): Promise<{
        success: boolean;
    }>;
    controlTransferIn(params: UsbControlTransferParams, length: number, timeout: number): Promise<{
        status: UsbTransferStatus;
        data: mojoBase_mojom_ReadOnlyBuffer;
    }>;
    controlTransferOut(params: UsbControlTransferParams, data: mojoBase_mojom_ReadOnlyBuffer, timeout: number): Promise<{
        status: UsbTransferStatus;
    }>;
    genericTransferIn(endpointNumber: number, length: number, timeout: number): Promise<{
        status: UsbTransferStatus;
        data: mojoBase_mojom_ReadOnlyBuffer;
    }>;
    genericTransferOut(endpointNumber: number, data: mojoBase_mojom_ReadOnlyBuffer, timeout: number): Promise<{
        status: UsbTransferStatus;
    }>;
    isochronousTransferIn(endpointNumber: number, packetLengths: number[], timeout: number): Promise<{
        data: mojoBase_mojom_ReadOnlyBuffer;
        packets: UsbIsochronousPacket[];
    }>;
    isochronousTransferOut(endpointNumber: number, data: mojoBase_mojom_ReadOnlyBuffer, packetLengths: number[], timeout: number): Promise<{
        packets: UsbIsochronousPacket[];
    }>;
}
/**
 * An object which receives request messages for the UsbDevice
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class UsbDeviceReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<UsbDeviceRemote, UsbDevicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UsbDeviceRemote, UsbDevicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: UsbDeviceInterface);
}
export declare class UsbDevice {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): UsbDeviceRemote;
}
/**
 * An object which receives request messages for the UsbDevice
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class UsbDeviceCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<UsbDeviceRemote, UsbDevicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UsbDeviceRemote, UsbDevicePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    open: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    close: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setConfiguration: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(value: number) => any>;
    claimInterface: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(interfaceNumber: number) => any>;
    releaseInterface: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(interfaceNumber: number) => any>;
    setInterfaceAlternateSetting: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(interfaceNumber: number, alternateSetting: number) => any>;
    reset: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    clearHalt: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(direction: UsbTransferDirection, endpointNumber: number) => any>;
    controlTransferIn: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(params: UsbControlTransferParams, length: number, timeout: number) => any>;
    controlTransferOut: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(params: UsbControlTransferParams, data: mojoBase_mojom_ReadOnlyBuffer, timeout: number) => any>;
    genericTransferIn: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(endpointNumber: number, length: number, timeout: number) => any>;
    genericTransferOut: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(endpointNumber: number, data: mojoBase_mojom_ReadOnlyBuffer, timeout: number) => any>;
    isochronousTransferIn: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(endpointNumber: number, packetLengths: number[], timeout: number) => any>;
    isochronousTransferOut: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(endpointNumber: number, data: mojoBase_mojom_ReadOnlyBuffer, packetLengths: number[], timeout: number) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type UsbDeviceClientPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<UsbDeviceClientPendingReceiver>;
export declare class UsbDeviceClientPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<UsbDeviceClient> {
    handle: mojo.internal.interfaceSupport.Endpoint<UsbDeviceClientPendingReceiver>;
    constructor(handle: MojoHandle | UsbDeviceClientPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface UsbDeviceClientInterface {
    onDeviceOpened(): void;
    onDeviceClosed(): void;
}
export declare class UsbDeviceClientRemote implements UsbDeviceClientInterface, mojo.internal.interfaceSupport.InterfaceRemote<UsbDeviceClientPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<UsbDeviceClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | UsbDeviceClientPendingReceiverEndpoint);
    onDeviceOpened(): void;
    onDeviceClosed(): void;
}
/**
 * An object which receives request messages for the UsbDeviceClient
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class UsbDeviceClientReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<UsbDeviceClientRemote, UsbDeviceClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UsbDeviceClientRemote, UsbDeviceClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: UsbDeviceClientInterface);
}
export declare class UsbDeviceClient {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): UsbDeviceClientRemote;
}
/**
 * An object which receives request messages for the UsbDeviceClient
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class UsbDeviceClientCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<UsbDeviceClientRemote, UsbDeviceClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UsbDeviceClientRemote, UsbDeviceClientPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onDeviceOpened: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onDeviceClosed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const UsbEndpointInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbAlternateInterfaceInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbInterfaceInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbConfigurationInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDeviceInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbControlTransferParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbIsochronousPacketSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_Open_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_Open_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_Close_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_Close_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_SetConfiguration_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_SetConfiguration_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_ClaimInterface_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_ClaimInterface_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_ReleaseInterface_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_ReleaseInterface_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_SetInterfaceAlternateSetting_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_SetInterfaceAlternateSetting_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_Reset_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_Reset_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_ClearHalt_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_ClearHalt_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_ControlTransferIn_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_ControlTransferIn_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_ControlTransferOut_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_ControlTransferOut_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_GenericTransferIn_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_GenericTransferIn_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_GenericTransferOut_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_GenericTransferOut_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_IsochronousTransferIn_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_IsochronousTransferIn_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_IsochronousTransferOut_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDevice_IsochronousTransferOut_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDeviceClient_OnDeviceOpened_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbDeviceClient_OnDeviceClosed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UsbOpenDeviceResultSpec: {
    $: mojo.internal.MojomType;
};
export declare interface UsbEndpointInfoMojoType {
    endpointNumber: number;
    pollingInterval: number;
    direction: UsbTransferDirection;
    type: UsbTransferType;
    packetSize: number;
    synchronizationType: UsbSynchronizationType;
    usageType: UsbUsageType;
    extraData: number[];
}
export type UsbEndpointInfo = UsbEndpointInfoMojoType;
export declare interface UsbAlternateInterfaceInfoMojoType {
    alternateSetting: number;
    classCode: number;
    subclassCode: number;
    protocolCode: number;
    interfaceName: (mojoBase_mojom_String16 | null);
    endpoints: UsbEndpointInfo[];
    extraData: number[];
}
export type UsbAlternateInterfaceInfo = UsbAlternateInterfaceInfoMojoType;
export declare interface UsbInterfaceInfoMojoType {
    interfaceNumber: number;
    firstInterface: number;
    alternates: UsbAlternateInterfaceInfo[];
}
export type UsbInterfaceInfo = UsbInterfaceInfoMojoType;
export declare interface UsbConfigurationInfoMojoType {
    configurationValue: number;
    selfPowered: boolean;
    remoteWakeup: boolean;
    maximumPower: number;
    configurationName: (mojoBase_mojom_String16 | null);
    interfaces: UsbInterfaceInfo[];
    extraData: number[];
}
export type UsbConfigurationInfo = UsbConfigurationInfoMojoType;
export declare interface UsbDeviceInfoMojoType {
    guid: string;
    usbVersionMajor: number;
    usbVersionMinor: number;
    usbVersionSubminor: number;
    classCode: number;
    subclassCode: number;
    protocolCode: number;
    vendorId: number;
    busNumber: number;
    portNumber: number;
    productId: number;
    deviceVersionMajor: number;
    deviceVersionMinor: number;
    deviceVersionSubminor: number;
    activeConfiguration: number;
    manufacturerName: (mojoBase_mojom_String16 | null);
    productName: (mojoBase_mojom_String16 | null);
    serialNumber: (mojoBase_mojom_String16 | null);
    webusbLandingPage: (url_mojom_Url | null);
    configurations: UsbConfigurationInfo[];
}
export type UsbDeviceInfo = UsbDeviceInfoMojoType;
export declare const UsbControlTransferParams_SECURITY_KEY_AOA_MODEL: string;
export declare interface UsbControlTransferParamsMojoType {
    type: UsbControlTransferType;
    recipient: UsbControlTransferRecipient;
    request: number;
    value: number;
    index: number;
}
export type UsbControlTransferParams = UsbControlTransferParamsMojoType;
export declare interface UsbIsochronousPacketMojoType {
    length: number;
    transferredLength: number;
    status: UsbTransferStatus;
}
export type UsbIsochronousPacket = UsbIsochronousPacketMojoType;
export declare interface UsbDevice_Open_ParamsMojoType {
}
export type UsbDevice_Open_Params = UsbDevice_Open_ParamsMojoType;
export declare interface UsbDevice_Open_ResponseParamsMojoType {
    result: UsbOpenDeviceResult;
}
export type UsbDevice_Open_ResponseParams = UsbDevice_Open_ResponseParamsMojoType;
export declare interface UsbDevice_Close_ParamsMojoType {
}
export type UsbDevice_Close_Params = UsbDevice_Close_ParamsMojoType;
export declare interface UsbDevice_Close_ResponseParamsMojoType {
}
export type UsbDevice_Close_ResponseParams = UsbDevice_Close_ResponseParamsMojoType;
export declare interface UsbDevice_SetConfiguration_ParamsMojoType {
    value: number;
}
export type UsbDevice_SetConfiguration_Params = UsbDevice_SetConfiguration_ParamsMojoType;
export declare interface UsbDevice_SetConfiguration_ResponseParamsMojoType {
    success: boolean;
}
export type UsbDevice_SetConfiguration_ResponseParams = UsbDevice_SetConfiguration_ResponseParamsMojoType;
export declare interface UsbDevice_ClaimInterface_ParamsMojoType {
    interfaceNumber: number;
}
export type UsbDevice_ClaimInterface_Params = UsbDevice_ClaimInterface_ParamsMojoType;
export declare interface UsbDevice_ClaimInterface_ResponseParamsMojoType {
    result: UsbClaimInterfaceResult;
}
export type UsbDevice_ClaimInterface_ResponseParams = UsbDevice_ClaimInterface_ResponseParamsMojoType;
export declare interface UsbDevice_ReleaseInterface_ParamsMojoType {
    interfaceNumber: number;
}
export type UsbDevice_ReleaseInterface_Params = UsbDevice_ReleaseInterface_ParamsMojoType;
export declare interface UsbDevice_ReleaseInterface_ResponseParamsMojoType {
    success: boolean;
}
export type UsbDevice_ReleaseInterface_ResponseParams = UsbDevice_ReleaseInterface_ResponseParamsMojoType;
export declare interface UsbDevice_SetInterfaceAlternateSetting_ParamsMojoType {
    interfaceNumber: number;
    alternateSetting: number;
}
export type UsbDevice_SetInterfaceAlternateSetting_Params = UsbDevice_SetInterfaceAlternateSetting_ParamsMojoType;
export declare interface UsbDevice_SetInterfaceAlternateSetting_ResponseParamsMojoType {
    success: boolean;
}
export type UsbDevice_SetInterfaceAlternateSetting_ResponseParams = UsbDevice_SetInterfaceAlternateSetting_ResponseParamsMojoType;
export declare interface UsbDevice_Reset_ParamsMojoType {
}
export type UsbDevice_Reset_Params = UsbDevice_Reset_ParamsMojoType;
export declare interface UsbDevice_Reset_ResponseParamsMojoType {
    success: boolean;
}
export type UsbDevice_Reset_ResponseParams = UsbDevice_Reset_ResponseParamsMojoType;
export declare interface UsbDevice_ClearHalt_ParamsMojoType {
    direction: UsbTransferDirection;
    endpointNumber: number;
}
export type UsbDevice_ClearHalt_Params = UsbDevice_ClearHalt_ParamsMojoType;
export declare interface UsbDevice_ClearHalt_ResponseParamsMojoType {
    success: boolean;
}
export type UsbDevice_ClearHalt_ResponseParams = UsbDevice_ClearHalt_ResponseParamsMojoType;
export declare interface UsbDevice_ControlTransferIn_ParamsMojoType {
    params: UsbControlTransferParams;
    length: number;
    timeout: number;
}
export type UsbDevice_ControlTransferIn_Params = UsbDevice_ControlTransferIn_ParamsMojoType;
export declare interface UsbDevice_ControlTransferIn_ResponseParamsMojoType {
    status: UsbTransferStatus;
    data: mojoBase_mojom_ReadOnlyBuffer;
}
export type UsbDevice_ControlTransferIn_ResponseParams = UsbDevice_ControlTransferIn_ResponseParamsMojoType;
export declare interface UsbDevice_ControlTransferOut_ParamsMojoType {
    params: UsbControlTransferParams;
    data: mojoBase_mojom_ReadOnlyBuffer;
    timeout: number;
}
export type UsbDevice_ControlTransferOut_Params = UsbDevice_ControlTransferOut_ParamsMojoType;
export declare interface UsbDevice_ControlTransferOut_ResponseParamsMojoType {
    status: UsbTransferStatus;
}
export type UsbDevice_ControlTransferOut_ResponseParams = UsbDevice_ControlTransferOut_ResponseParamsMojoType;
export declare interface UsbDevice_GenericTransferIn_ParamsMojoType {
    endpointNumber: number;
    length: number;
    timeout: number;
}
export type UsbDevice_GenericTransferIn_Params = UsbDevice_GenericTransferIn_ParamsMojoType;
export declare interface UsbDevice_GenericTransferIn_ResponseParamsMojoType {
    status: UsbTransferStatus;
    data: mojoBase_mojom_ReadOnlyBuffer;
}
export type UsbDevice_GenericTransferIn_ResponseParams = UsbDevice_GenericTransferIn_ResponseParamsMojoType;
export declare interface UsbDevice_GenericTransferOut_ParamsMojoType {
    endpointNumber: number;
    timeout: number;
    data: mojoBase_mojom_ReadOnlyBuffer;
}
export type UsbDevice_GenericTransferOut_Params = UsbDevice_GenericTransferOut_ParamsMojoType;
export declare interface UsbDevice_GenericTransferOut_ResponseParamsMojoType {
    status: UsbTransferStatus;
}
export type UsbDevice_GenericTransferOut_ResponseParams = UsbDevice_GenericTransferOut_ResponseParamsMojoType;
export declare interface UsbDevice_IsochronousTransferIn_ParamsMojoType {
    endpointNumber: number;
    timeout: number;
    packetLengths: number[];
}
export type UsbDevice_IsochronousTransferIn_Params = UsbDevice_IsochronousTransferIn_ParamsMojoType;
export declare interface UsbDevice_IsochronousTransferIn_ResponseParamsMojoType {
    data: mojoBase_mojom_ReadOnlyBuffer;
    packets: UsbIsochronousPacket[];
}
export type UsbDevice_IsochronousTransferIn_ResponseParams = UsbDevice_IsochronousTransferIn_ResponseParamsMojoType;
export declare interface UsbDevice_IsochronousTransferOut_ParamsMojoType {
    endpointNumber: number;
    timeout: number;
    data: mojoBase_mojom_ReadOnlyBuffer;
    packetLengths: number[];
}
export type UsbDevice_IsochronousTransferOut_Params = UsbDevice_IsochronousTransferOut_ParamsMojoType;
export declare interface UsbDevice_IsochronousTransferOut_ResponseParamsMojoType {
    packets: UsbIsochronousPacket[];
}
export type UsbDevice_IsochronousTransferOut_ResponseParams = UsbDevice_IsochronousTransferOut_ResponseParamsMojoType;
export declare interface UsbDeviceClient_OnDeviceOpened_ParamsMojoType {
}
export type UsbDeviceClient_OnDeviceOpened_Params = UsbDeviceClient_OnDeviceOpened_ParamsMojoType;
export declare interface UsbDeviceClient_OnDeviceClosed_ParamsMojoType {
}
export type UsbDeviceClient_OnDeviceClosed_Params = UsbDeviceClient_OnDeviceClosed_ParamsMojoType;
export declare interface UsbOpenDeviceResult {
    success?: UsbOpenDeviceSuccess;
    error?: UsbOpenDeviceError;
}
export declare enum UsbOpenDeviceResultFieldTags {
    SUCCESS = 0,
    ERROR = 1
}
export declare function whichUsbOpenDeviceResult(u: UsbOpenDeviceResult): UsbOpenDeviceResultFieldTags;
