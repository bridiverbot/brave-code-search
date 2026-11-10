import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { UUID as bluetooth_mojom_UUID } from './uuid.mojom-webui.js';
export declare const PropertySpec: {
    $: mojo.internal.MojomType;
};
export declare enum Property {
    MIN_VALUE = 0,
    MAX_VALUE = 8192,
    NONE = 0,
    BROADCAST = 1,
    READ = 2,
    WRITE_WITHOUT_RESPONSE = 4,
    WRITE = 8,
    NOTIFY = 16,
    INDICATE = 32,
    AUTHENTICATED_SIGNED_WRITES = 64,
    EXTENDED_PROPERTIES = 128,
    RELIABLE_WRITE = 256,
    WRITABLE_AUXILIARIES = 512,
    READ_ENCRYPTED = 1024,
    WRITE_ENCRYPTED = 2048,
    READ_ENCRYPTED_AUTHENTICATED = 4096,
    WRITE_ENCRYPTED_AUTHENTICATED = 8192
}
export declare const GattResultSpec: {
    $: mojo.internal.MojomType;
};
export declare enum GattResult {
    MIN_VALUE = 0,
    MAX_VALUE = 11,
    SUCCESS = 0,
    UNKNOWN = 1,
    FAILED = 2,
    IN_PROGRESS = 3,
    INVALID_LENGTH = 4,
    NOT_PERMITTED = 5,
    NOT_AUTHORIZED = 6,
    NOT_PAIRED = 7,
    NOT_SUPPORTED = 8,
    SERVICE_NOT_FOUND = 9,
    CHARACTERISTIC_NOT_FOUND = 10,
    DESCRIPTOR_NOT_FOUND = 11
}
export type DevicePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<DevicePendingReceiver>;
export declare class DevicePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<Device> {
    handle: mojo.internal.interfaceSupport.Endpoint<DevicePendingReceiver>;
    constructor(handle: MojoHandle | DevicePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface DeviceInterface {
    disconnect(): void;
    getInfo(): Promise<{
        info: (DeviceInfo | null);
    }>;
    getServices(): Promise<{
        services: ServiceInfo[];
    }>;
    getCharacteristics(serviceId: string): Promise<{
        characteristics: (CharacteristicInfo[] | null);
    }>;
    readValueForCharacteristic(serviceId: string, characteristicId: string): Promise<{
        result: GattResult;
        value: (number[] | null);
    }>;
    writeValueForCharacteristic(serviceId: string, characteristicId: string, value: number[]): Promise<{
        result: GattResult;
    }>;
    getDescriptors(serviceId: string, characteristicId: string): Promise<{
        descriptors: (DescriptorInfo[] | null);
    }>;
    readValueForDescriptor(serviceId: string, characteristicId: string, descriptorId: string): Promise<{
        result: GattResult;
        value: (number[] | null);
    }>;
    writeValueForDescriptor(serviceId: string, characteristicId: string, descriptorId: string, value: number[]): Promise<{
        result: GattResult;
    }>;
}
export declare class DeviceRemote implements DeviceInterface, mojo.internal.interfaceSupport.InterfaceRemote<DevicePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<DevicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | DevicePendingReceiverEndpoint);
    disconnect(): void;
    getInfo(): Promise<{
        info: (DeviceInfo | null);
    }>;
    getServices(): Promise<{
        services: ServiceInfo[];
    }>;
    getCharacteristics(serviceId: string): Promise<{
        characteristics: (CharacteristicInfo[] | null);
    }>;
    readValueForCharacteristic(serviceId: string, characteristicId: string): Promise<{
        result: GattResult;
        value: (number[] | null);
    }>;
    writeValueForCharacteristic(serviceId: string, characteristicId: string, value: number[]): Promise<{
        result: GattResult;
    }>;
    getDescriptors(serviceId: string, characteristicId: string): Promise<{
        descriptors: (DescriptorInfo[] | null);
    }>;
    readValueForDescriptor(serviceId: string, characteristicId: string, descriptorId: string): Promise<{
        result: GattResult;
        value: (number[] | null);
    }>;
    writeValueForDescriptor(serviceId: string, characteristicId: string, descriptorId: string, value: number[]): Promise<{
        result: GattResult;
    }>;
}
/**
 * An object which receives request messages for the Device
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class DeviceReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<DeviceRemote, DevicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DeviceRemote, DevicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: DeviceInterface);
}
export declare class Device {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): DeviceRemote;
}
/**
 * An object which receives request messages for the Device
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class DeviceCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<DeviceRemote, DevicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DeviceRemote, DevicePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    disconnect: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getInfo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getServices: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getCharacteristics: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(serviceId: string) => any>;
    readValueForCharacteristic: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(serviceId: string, characteristicId: string) => any>;
    writeValueForCharacteristic: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(serviceId: string, characteristicId: string, value: number[]) => any>;
    getDescriptors: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(serviceId: string, characteristicId: string) => any>;
    readValueForDescriptor: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(serviceId: string, characteristicId: string, descriptorId: string) => any>;
    writeValueForDescriptor: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(serviceId: string, characteristicId: string, descriptorId: string, value: number[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const DeviceInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const ServiceInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const CharacteristicInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const DescriptorInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const Device_Disconnect_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Device_GetInfo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Device_GetInfo_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Device_GetServices_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Device_GetServices_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Device_GetCharacteristics_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Device_GetCharacteristics_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Device_ReadValueForCharacteristic_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Device_ReadValueForCharacteristic_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Device_WriteValueForCharacteristic_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Device_WriteValueForCharacteristic_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Device_GetDescriptors_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Device_GetDescriptors_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Device_ReadValueForDescriptor_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Device_ReadValueForDescriptor_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Device_WriteValueForDescriptor_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Device_WriteValueForDescriptor_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface DeviceInfoMojoType {
    name: (string | null);
    nameForDisplay: string;
    address: string;
    isGattConnected: boolean;
    rssi: (number | null);
    serviceUuids: bluetooth_mojom_UUID[];
    manufacturerDataMap: {
        [key: number]: number[];
    };
    serviceDataMap: Map<bluetooth_mojom_UUID, number[]>;
}
export type DeviceInfo = DeviceInfoMojoType;
export declare interface ServiceInfoMojoType {
    id: string;
    uuid: bluetooth_mojom_UUID;
    isPrimary: boolean;
}
export type ServiceInfo = ServiceInfoMojoType;
export declare interface CharacteristicInfoMojoType {
    id: string;
    uuid: bluetooth_mojom_UUID;
    properties: number;
    permissions: number;
    lastKnownValue: number[];
}
export type CharacteristicInfo = CharacteristicInfoMojoType;
export declare interface DescriptorInfoMojoType {
    id: string;
    uuid: bluetooth_mojom_UUID;
    lastKnownValue: number[];
}
export type DescriptorInfo = DescriptorInfoMojoType;
export declare interface Device_Disconnect_ParamsMojoType {
}
export type Device_Disconnect_Params = Device_Disconnect_ParamsMojoType;
export declare interface Device_GetInfo_ParamsMojoType {
}
export type Device_GetInfo_Params = Device_GetInfo_ParamsMojoType;
export declare interface Device_GetInfo_ResponseParamsMojoType {
    info: (DeviceInfo | null);
}
export type Device_GetInfo_ResponseParams = Device_GetInfo_ResponseParamsMojoType;
export declare interface Device_GetServices_ParamsMojoType {
}
export type Device_GetServices_Params = Device_GetServices_ParamsMojoType;
export declare interface Device_GetServices_ResponseParamsMojoType {
    services: ServiceInfo[];
}
export type Device_GetServices_ResponseParams = Device_GetServices_ResponseParamsMojoType;
export declare interface Device_GetCharacteristics_ParamsMojoType {
    serviceId: string;
}
export type Device_GetCharacteristics_Params = Device_GetCharacteristics_ParamsMojoType;
export declare interface Device_GetCharacteristics_ResponseParamsMojoType {
    characteristics: (CharacteristicInfo[] | null);
}
export type Device_GetCharacteristics_ResponseParams = Device_GetCharacteristics_ResponseParamsMojoType;
export declare interface Device_ReadValueForCharacteristic_ParamsMojoType {
    serviceId: string;
    characteristicId: string;
}
export type Device_ReadValueForCharacteristic_Params = Device_ReadValueForCharacteristic_ParamsMojoType;
export declare interface Device_ReadValueForCharacteristic_ResponseParamsMojoType {
    result: GattResult;
    value: (number[] | null);
}
export type Device_ReadValueForCharacteristic_ResponseParams = Device_ReadValueForCharacteristic_ResponseParamsMojoType;
export declare interface Device_WriteValueForCharacteristic_ParamsMojoType {
    serviceId: string;
    characteristicId: string;
    value: number[];
}
export type Device_WriteValueForCharacteristic_Params = Device_WriteValueForCharacteristic_ParamsMojoType;
export declare interface Device_WriteValueForCharacteristic_ResponseParamsMojoType {
    result: GattResult;
}
export type Device_WriteValueForCharacteristic_ResponseParams = Device_WriteValueForCharacteristic_ResponseParamsMojoType;
export declare interface Device_GetDescriptors_ParamsMojoType {
    serviceId: string;
    characteristicId: string;
}
export type Device_GetDescriptors_Params = Device_GetDescriptors_ParamsMojoType;
export declare interface Device_GetDescriptors_ResponseParamsMojoType {
    descriptors: (DescriptorInfo[] | null);
}
export type Device_GetDescriptors_ResponseParams = Device_GetDescriptors_ResponseParamsMojoType;
export declare interface Device_ReadValueForDescriptor_ParamsMojoType {
    serviceId: string;
    characteristicId: string;
    descriptorId: string;
}
export type Device_ReadValueForDescriptor_Params = Device_ReadValueForDescriptor_ParamsMojoType;
export declare interface Device_ReadValueForDescriptor_ResponseParamsMojoType {
    result: GattResult;
    value: (number[] | null);
}
export type Device_ReadValueForDescriptor_ResponseParams = Device_ReadValueForDescriptor_ResponseParamsMojoType;
export declare interface Device_WriteValueForDescriptor_ParamsMojoType {
    serviceId: string;
    characteristicId: string;
    descriptorId: string;
    value: number[];
}
export type Device_WriteValueForDescriptor_Params = Device_WriteValueForDescriptor_ParamsMojoType;
export declare interface Device_WriteValueForDescriptor_ResponseParamsMojoType {
    result: GattResult;
}
export type Device_WriteValueForDescriptor_ResponseParams = Device_WriteValueForDescriptor_ResponseParamsMojoType;
