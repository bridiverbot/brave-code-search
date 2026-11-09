import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { DeviceRemote as bluetooth_mojom_DeviceRemote, DeviceInfo as bluetooth_mojom_DeviceInfo } from './device.mojom-webui.js';
import { GattCharacteristicPermissions as bluetooth_mojom_GattCharacteristicPermissions } from './gatt_characteristic_permissions.mojom-webui.js';
import { GattCharacteristicProperties as bluetooth_mojom_GattCharacteristicProperties } from './gatt_characteristic_properties.mojom-webui.js';
import { GattServiceErrorCode as bluetooth_mojom_GattServiceErrorCode } from './gatt_service_error_code.mojom-webui.js';
import { UUID as bluetooth_mojom_UUID } from './uuid.mojom-webui.js';
export declare const ConnectResultSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ConnectResult {
    MIN_VALUE = 0,
    MAX_VALUE = 22,
    SUCCESS = 0,
    AUTH_CANCELED = 1,
    AUTH_FAILED = 2,
    AUTH_REJECTED = 3,
    AUTH_TIMEOUT = 4,
    FAILED = 5,
    INPROGRESS = 6,
    UNKNOWN = 7,
    UNSUPPORTED_DEVICE = 8,
    DEVICE_NO_LONGER_IN_RANGE = 9,
    NOT_READY = 10,
    ALREADY_CONNECTED = 11,
    ALREADY_EXISTS = 12,
    NOT_CONNECTED = 13,
    DOES_NOT_EXIST = 14,
    INVALID_ARGS = 15,
    NON_AUTH_TIMEOUT = 16,
    NO_MEMORY = 17,
    JNI_ENVIRONMENT = 18,
    JNI_THREAD_ATTACH = 19,
    WAKELOCK = 20,
    UNEXPECTED_STATE = 21,
    SOCKET = 22
}
export type AdvertisementPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<AdvertisementPendingReceiver>;
export declare class AdvertisementPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<Advertisement> {
    handle: mojo.internal.interfaceSupport.Endpoint<AdvertisementPendingReceiver>;
    constructor(handle: MojoHandle | AdvertisementPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface AdvertisementInterface {
    unregister(): Promise<void>;
}
export declare class AdvertisementRemote implements AdvertisementInterface, mojo.internal.interfaceSupport.InterfaceRemote<AdvertisementPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<AdvertisementPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | AdvertisementPendingReceiverEndpoint);
    unregister(): Promise<void>;
}
/**
 * An object which receives request messages for the Advertisement
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class AdvertisementReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<AdvertisementRemote, AdvertisementPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<AdvertisementRemote, AdvertisementPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: AdvertisementInterface);
}
export declare class Advertisement {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): AdvertisementRemote;
}
/**
 * An object which receives request messages for the Advertisement
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class AdvertisementCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<AdvertisementRemote, AdvertisementPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<AdvertisementRemote, AdvertisementPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    unregister: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type DiscoverySessionPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<DiscoverySessionPendingReceiver>;
export declare class DiscoverySessionPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<DiscoverySession> {
    handle: mojo.internal.interfaceSupport.Endpoint<DiscoverySessionPendingReceiver>;
    constructor(handle: MojoHandle | DiscoverySessionPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface DiscoverySessionInterface {
    isActive(): Promise<{
        active: boolean;
    }>;
    stop(): Promise<{
        success: boolean;
    }>;
}
export declare class DiscoverySessionRemote implements DiscoverySessionInterface, mojo.internal.interfaceSupport.InterfaceRemote<DiscoverySessionPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<DiscoverySessionPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | DiscoverySessionPendingReceiverEndpoint);
    isActive(): Promise<{
        active: boolean;
    }>;
    stop(): Promise<{
        success: boolean;
    }>;
}
/**
 * An object which receives request messages for the DiscoverySession
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class DiscoverySessionReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<DiscoverySessionRemote, DiscoverySessionPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DiscoverySessionRemote, DiscoverySessionPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: DiscoverySessionInterface);
}
export declare class DiscoverySession {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): DiscoverySessionRemote;
}
/**
 * An object which receives request messages for the DiscoverySession
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class DiscoverySessionCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<DiscoverySessionRemote, DiscoverySessionPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DiscoverySessionRemote, DiscoverySessionPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    isActive: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    stop: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type SocketPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<SocketPendingReceiver>;
export declare class SocketPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<Socket> {
    handle: mojo.internal.interfaceSupport.Endpoint<SocketPendingReceiver>;
    constructor(handle: MojoHandle | SocketPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface SocketInterface {
    disconnect(): Promise<void>;
}
export declare class SocketRemote implements SocketInterface, mojo.internal.interfaceSupport.InterfaceRemote<SocketPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<SocketPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | SocketPendingReceiverEndpoint);
    disconnect(): Promise<void>;
}
/**
 * An object which receives request messages for the Socket
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class SocketReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<SocketRemote, SocketPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SocketRemote, SocketPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: SocketInterface);
}
export declare class Socket {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): SocketRemote;
}
/**
 * An object which receives request messages for the Socket
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class SocketCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<SocketRemote, SocketPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SocketRemote, SocketPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    disconnect: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ServerSocketPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ServerSocketPendingReceiver>;
export declare class ServerSocketPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ServerSocket> {
    handle: mojo.internal.interfaceSupport.Endpoint<ServerSocketPendingReceiver>;
    constructor(handle: MojoHandle | ServerSocketPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ServerSocketInterface {
    accept(): Promise<{
        result: (AcceptConnectionResult | null);
    }>;
    disconnect(): Promise<void>;
}
export declare class ServerSocketRemote implements ServerSocketInterface, mojo.internal.interfaceSupport.InterfaceRemote<ServerSocketPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ServerSocketPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ServerSocketPendingReceiverEndpoint);
    accept(): Promise<{
        result: (AcceptConnectionResult | null);
    }>;
    disconnect(): Promise<void>;
}
/**
 * An object which receives request messages for the ServerSocket
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ServerSocketReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ServerSocketRemote, ServerSocketPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ServerSocketRemote, ServerSocketPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ServerSocketInterface);
}
export declare class ServerSocket {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ServerSocketRemote;
}
/**
 * An object which receives request messages for the ServerSocket
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ServerSocketCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ServerSocketRemote, ServerSocketPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ServerSocketRemote, ServerSocketPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    accept: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    disconnect: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type GattServicePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<GattServicePendingReceiver>;
export declare class GattServicePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<GattService> {
    handle: mojo.internal.interfaceSupport.Endpoint<GattServicePendingReceiver>;
    constructor(handle: MojoHandle | GattServicePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface GattServiceInterface {
    createCharacteristic(characteristicUuid: bluetooth_mojom_UUID, permissions: bluetooth_mojom_GattCharacteristicPermissions, properties: bluetooth_mojom_GattCharacteristicProperties): Promise<{
        success: boolean;
    }>;
    register(): Promise<{
        errorCode: (bluetooth_mojom_GattServiceErrorCode | null);
    }>;
}
export declare class GattServiceRemote implements GattServiceInterface, mojo.internal.interfaceSupport.InterfaceRemote<GattServicePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<GattServicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | GattServicePendingReceiverEndpoint);
    createCharacteristic(characteristicUuid: bluetooth_mojom_UUID, permissions: bluetooth_mojom_GattCharacteristicPermissions, properties: bluetooth_mojom_GattCharacteristicProperties): Promise<{
        success: boolean;
    }>;
    register(): Promise<{
        errorCode: (bluetooth_mojom_GattServiceErrorCode | null);
    }>;
}
/**
 * An object which receives request messages for the GattService
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class GattServiceReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<GattServiceRemote, GattServicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GattServiceRemote, GattServicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: GattServiceInterface);
}
export declare class GattService {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): GattServiceRemote;
}
/**
 * An object which receives request messages for the GattService
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class GattServiceCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<GattServiceRemote, GattServicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GattServiceRemote, GattServicePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createCharacteristic: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(characteristicUuid: bluetooth_mojom_UUID, permissions: bluetooth_mojom_GattCharacteristicPermissions, properties: bluetooth_mojom_GattCharacteristicProperties) => any>;
    register: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type GattServiceObserverPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<GattServiceObserverPendingReceiver>;
export declare class GattServiceObserverPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<GattServiceObserver> {
    handle: mojo.internal.interfaceSupport.Endpoint<GattServiceObserverPendingReceiver>;
    constructor(handle: MojoHandle | GattServiceObserverPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface GattServiceObserverInterface {
    onLocalCharacteristicRead(remoteDevice: bluetooth_mojom_DeviceInfo, characteristicUuid: bluetooth_mojom_UUID, serviceUuid: bluetooth_mojom_UUID, offset: number): Promise<{
        readResult: LocalCharacteristicReadResult;
    }>;
}
export declare class GattServiceObserverRemote implements GattServiceObserverInterface, mojo.internal.interfaceSupport.InterfaceRemote<GattServiceObserverPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<GattServiceObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | GattServiceObserverPendingReceiverEndpoint);
    onLocalCharacteristicRead(remoteDevice: bluetooth_mojom_DeviceInfo, characteristicUuid: bluetooth_mojom_UUID, serviceUuid: bluetooth_mojom_UUID, offset: number): Promise<{
        readResult: LocalCharacteristicReadResult;
    }>;
}
/**
 * An object which receives request messages for the GattServiceObserver
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class GattServiceObserverReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<GattServiceObserverRemote, GattServiceObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GattServiceObserverRemote, GattServiceObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: GattServiceObserverInterface);
}
export declare class GattServiceObserver {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): GattServiceObserverRemote;
}
/**
 * An object which receives request messages for the GattServiceObserver
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class GattServiceObserverCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<GattServiceObserverRemote, GattServiceObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GattServiceObserverRemote, GattServiceObserverPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onLocalCharacteristicRead: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(remoteDevice: bluetooth_mojom_DeviceInfo, characteristicUuid: bluetooth_mojom_UUID, serviceUuid: bluetooth_mojom_UUID, offset: number) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type AdapterPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<AdapterPendingReceiver>;
export declare class AdapterPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<Adapter> {
    handle: mojo.internal.interfaceSupport.Endpoint<AdapterPendingReceiver>;
    constructor(handle: MojoHandle | AdapterPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface AdapterInterface {
    connectToDevice(address: string): Promise<{
        result: ConnectResult;
        device: (bluetooth_mojom_DeviceRemote | null);
    }>;
    getDevices(): Promise<{
        devices: bluetooth_mojom_DeviceInfo[];
    }>;
    getInfo(): Promise<{
        info: AdapterInfo;
    }>;
    addObserver(observer: AdapterObserverRemote): Promise<void>;
    registerAdvertisement(serviceId: bluetooth_mojom_UUID, serviceData: number[], useScanResponse: boolean, connectable: boolean): Promise<{
        advertisement: (AdvertisementRemote | null);
    }>;
    setDiscoverable(discoverable: boolean): Promise<{
        success: boolean;
    }>;
    setName(name: string): Promise<{
        success: boolean;
    }>;
    startDiscoverySession(clientName: string): Promise<{
        session: (DiscoverySessionRemote | null);
    }>;
    connectToServiceInsecurely(address: string, serviceUuid: bluetooth_mojom_UUID, shouldUnbondOnError: boolean): Promise<{
        result: (ConnectToServiceResult | null);
    }>;
    createRfcommServiceInsecurely(serviceName: string, serviceUuid: bluetooth_mojom_UUID): Promise<{
        serverSocket: (ServerSocketRemote | null);
    }>;
    createLocalGattService(serviceId: bluetooth_mojom_UUID, observer: GattServiceObserverRemote): Promise<{
        gattService: GattServiceRemote;
    }>;
    isLeScatternetDualRoleSupported(): Promise<{
        isSupported: boolean;
    }>;
}
export declare class AdapterRemote implements AdapterInterface, mojo.internal.interfaceSupport.InterfaceRemote<AdapterPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<AdapterPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | AdapterPendingReceiverEndpoint);
    connectToDevice(address: string): Promise<{
        result: ConnectResult;
        device: (bluetooth_mojom_DeviceRemote | null);
    }>;
    getDevices(): Promise<{
        devices: bluetooth_mojom_DeviceInfo[];
    }>;
    getInfo(): Promise<{
        info: AdapterInfo;
    }>;
    addObserver(observer: AdapterObserverRemote): Promise<void>;
    registerAdvertisement(serviceId: bluetooth_mojom_UUID, serviceData: number[], useScanResponse: boolean, connectable: boolean): Promise<{
        advertisement: (AdvertisementRemote | null);
    }>;
    setDiscoverable(discoverable: boolean): Promise<{
        success: boolean;
    }>;
    setName(name: string): Promise<{
        success: boolean;
    }>;
    startDiscoverySession(clientName: string): Promise<{
        session: (DiscoverySessionRemote | null);
    }>;
    connectToServiceInsecurely(address: string, serviceUuid: bluetooth_mojom_UUID, shouldUnbondOnError: boolean): Promise<{
        result: (ConnectToServiceResult | null);
    }>;
    createRfcommServiceInsecurely(serviceName: string, serviceUuid: bluetooth_mojom_UUID): Promise<{
        serverSocket: (ServerSocketRemote | null);
    }>;
    createLocalGattService(serviceId: bluetooth_mojom_UUID, observer: GattServiceObserverRemote): Promise<{
        gattService: GattServiceRemote;
    }>;
    isLeScatternetDualRoleSupported(): Promise<{
        isSupported: boolean;
    }>;
}
/**
 * An object which receives request messages for the Adapter
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class AdapterReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<AdapterRemote, AdapterPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<AdapterRemote, AdapterPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: AdapterInterface);
}
export declare class Adapter {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): AdapterRemote;
}
/**
 * An object which receives request messages for the Adapter
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class AdapterCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<AdapterRemote, AdapterPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<AdapterRemote, AdapterPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    connectToDevice: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(address: string) => any>;
    getDevices: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getInfo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    addObserver: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(observer: AdapterObserverRemote) => any>;
    registerAdvertisement: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(serviceId: bluetooth_mojom_UUID, serviceData: number[], useScanResponse: boolean, connectable: boolean) => any>;
    setDiscoverable: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(discoverable: boolean) => any>;
    setName: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(name: string) => any>;
    startDiscoverySession: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(clientName: string) => any>;
    connectToServiceInsecurely: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(address: string, serviceUuid: bluetooth_mojom_UUID, shouldUnbondOnError: boolean) => any>;
    createRfcommServiceInsecurely: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(serviceName: string, serviceUuid: bluetooth_mojom_UUID) => any>;
    createLocalGattService: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(serviceId: bluetooth_mojom_UUID, observer: GattServiceObserverRemote) => any>;
    isLeScatternetDualRoleSupported: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type AdapterObserverPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<AdapterObserverPendingReceiver>;
export declare class AdapterObserverPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<AdapterObserver> {
    handle: mojo.internal.interfaceSupport.Endpoint<AdapterObserverPendingReceiver>;
    constructor(handle: MojoHandle | AdapterObserverPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface AdapterObserverInterface {
    presentChanged(present: boolean): void;
    poweredChanged(powered: boolean): void;
    discoverableChanged(discoverable: boolean): void;
    discoveringChanged(discovering: boolean): void;
    deviceAdded(device: bluetooth_mojom_DeviceInfo): void;
    deviceChanged(device: bluetooth_mojom_DeviceInfo): void;
    deviceRemoved(device: bluetooth_mojom_DeviceInfo): void;
}
export declare class AdapterObserverRemote implements AdapterObserverInterface, mojo.internal.interfaceSupport.InterfaceRemote<AdapterObserverPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<AdapterObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | AdapterObserverPendingReceiverEndpoint);
    presentChanged(present: boolean): void;
    poweredChanged(powered: boolean): void;
    discoverableChanged(discoverable: boolean): void;
    discoveringChanged(discovering: boolean): void;
    deviceAdded(device: bluetooth_mojom_DeviceInfo): void;
    deviceChanged(device: bluetooth_mojom_DeviceInfo): void;
    deviceRemoved(device: bluetooth_mojom_DeviceInfo): void;
}
/**
 * An object which receives request messages for the AdapterObserver
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class AdapterObserverReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<AdapterObserverRemote, AdapterObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<AdapterObserverRemote, AdapterObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: AdapterObserverInterface);
}
export declare class AdapterObserver {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): AdapterObserverRemote;
}
/**
 * An object which receives request messages for the AdapterObserver
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class AdapterObserverCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<AdapterObserverRemote, AdapterObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<AdapterObserverRemote, AdapterObserverPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    presentChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(present: boolean) => any>;
    poweredChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(powered: boolean) => any>;
    discoverableChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(discoverable: boolean) => any>;
    discoveringChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(discovering: boolean) => any>;
    deviceAdded: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(device: bluetooth_mojom_DeviceInfo) => any>;
    deviceChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(device: bluetooth_mojom_DeviceInfo) => any>;
    deviceRemoved: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(device: bluetooth_mojom_DeviceInfo) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const ConnectToServiceResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AcceptConnectionResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const AdapterInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const Advertisement_Unregister_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Advertisement_Unregister_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DiscoverySession_IsActive_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DiscoverySession_IsActive_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DiscoverySession_Stop_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DiscoverySession_Stop_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Socket_Disconnect_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Socket_Disconnect_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ServerSocket_Accept_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ServerSocket_Accept_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ServerSocket_Disconnect_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ServerSocket_Disconnect_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GattService_CreateCharacteristic_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GattService_CreateCharacteristic_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GattService_Register_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GattService_Register_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GattServiceObserver_OnLocalCharacteristicRead_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GattServiceObserver_OnLocalCharacteristicRead_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_ConnectToDevice_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_ConnectToDevice_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_GetDevices_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_GetDevices_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_GetInfo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_GetInfo_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_AddObserver_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_AddObserver_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_RegisterAdvertisement_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_RegisterAdvertisement_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_SetDiscoverable_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_SetDiscoverable_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_SetName_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_SetName_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_StartDiscoverySession_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_StartDiscoverySession_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_ConnectToServiceInsecurely_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_ConnectToServiceInsecurely_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_CreateRfcommServiceInsecurely_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_CreateRfcommServiceInsecurely_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_CreateLocalGattService_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_CreateLocalGattService_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_IsLeScatternetDualRoleSupported_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Adapter_IsLeScatternetDualRoleSupported_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AdapterObserver_PresentChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AdapterObserver_PoweredChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AdapterObserver_DiscoverableChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AdapterObserver_DiscoveringChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AdapterObserver_DeviceAdded_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AdapterObserver_DeviceChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AdapterObserver_DeviceRemoved_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const LocalCharacteristicReadResultSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ConnectToServiceResultMojoType {
    socket: SocketRemote;
    receiveStream: MojoHandle;
    sendStream: MojoHandle;
}
export type ConnectToServiceResult = ConnectToServiceResultMojoType;
export declare interface AcceptConnectionResultMojoType {
    device: bluetooth_mojom_DeviceInfo;
    socket: SocketRemote;
    receiveStream: MojoHandle;
    sendStream: MojoHandle;
}
export type AcceptConnectionResult = AcceptConnectionResultMojoType;
export declare interface AdapterInfoMojoType {
    address: string;
    name: string;
    systemName: string;
    floss: boolean;
    extendedAdvertisementSupport: boolean;
    initialized: boolean;
    present: boolean;
    powered: boolean;
    discoverable: boolean;
    discovering: boolean;
}
export type AdapterInfo = AdapterInfoMojoType;
export declare interface Advertisement_Unregister_ParamsMojoType {
}
export type Advertisement_Unregister_Params = Advertisement_Unregister_ParamsMojoType;
export declare interface Advertisement_Unregister_ResponseParamsMojoType {
}
export type Advertisement_Unregister_ResponseParams = Advertisement_Unregister_ResponseParamsMojoType;
export declare interface DiscoverySession_IsActive_ParamsMojoType {
}
export type DiscoverySession_IsActive_Params = DiscoverySession_IsActive_ParamsMojoType;
export declare interface DiscoverySession_IsActive_ResponseParamsMojoType {
    active: boolean;
}
export type DiscoverySession_IsActive_ResponseParams = DiscoverySession_IsActive_ResponseParamsMojoType;
export declare interface DiscoverySession_Stop_ParamsMojoType {
}
export type DiscoverySession_Stop_Params = DiscoverySession_Stop_ParamsMojoType;
export declare interface DiscoverySession_Stop_ResponseParamsMojoType {
    success: boolean;
}
export type DiscoverySession_Stop_ResponseParams = DiscoverySession_Stop_ResponseParamsMojoType;
export declare interface Socket_Disconnect_ParamsMojoType {
}
export type Socket_Disconnect_Params = Socket_Disconnect_ParamsMojoType;
export declare interface Socket_Disconnect_ResponseParamsMojoType {
}
export type Socket_Disconnect_ResponseParams = Socket_Disconnect_ResponseParamsMojoType;
export declare interface ServerSocket_Accept_ParamsMojoType {
}
export type ServerSocket_Accept_Params = ServerSocket_Accept_ParamsMojoType;
export declare interface ServerSocket_Accept_ResponseParamsMojoType {
    result: (AcceptConnectionResult | null);
}
export type ServerSocket_Accept_ResponseParams = ServerSocket_Accept_ResponseParamsMojoType;
export declare interface ServerSocket_Disconnect_ParamsMojoType {
}
export type ServerSocket_Disconnect_Params = ServerSocket_Disconnect_ParamsMojoType;
export declare interface ServerSocket_Disconnect_ResponseParamsMojoType {
}
export type ServerSocket_Disconnect_ResponseParams = ServerSocket_Disconnect_ResponseParamsMojoType;
export declare interface GattService_CreateCharacteristic_ParamsMojoType {
    characteristicUuid: bluetooth_mojom_UUID;
    permissions: bluetooth_mojom_GattCharacteristicPermissions;
    properties: bluetooth_mojom_GattCharacteristicProperties;
}
export type GattService_CreateCharacteristic_Params = GattService_CreateCharacteristic_ParamsMojoType;
export declare interface GattService_CreateCharacteristic_ResponseParamsMojoType {
    success: boolean;
}
export type GattService_CreateCharacteristic_ResponseParams = GattService_CreateCharacteristic_ResponseParamsMojoType;
export declare interface GattService_Register_ParamsMojoType {
}
export type GattService_Register_Params = GattService_Register_ParamsMojoType;
export declare interface GattService_Register_ResponseParamsMojoType {
    errorCode: (bluetooth_mojom_GattServiceErrorCode | null);
}
export type GattService_Register_ResponseParams = GattService_Register_ResponseParamsMojoType;
export declare interface GattServiceObserver_OnLocalCharacteristicRead_ParamsMojoType {
    remoteDevice: bluetooth_mojom_DeviceInfo;
    characteristicUuid: bluetooth_mojom_UUID;
    serviceUuid: bluetooth_mojom_UUID;
    offset: number;
}
export type GattServiceObserver_OnLocalCharacteristicRead_Params = GattServiceObserver_OnLocalCharacteristicRead_ParamsMojoType;
export declare interface GattServiceObserver_OnLocalCharacteristicRead_ResponseParamsMojoType {
    readResult: LocalCharacteristicReadResult;
}
export type GattServiceObserver_OnLocalCharacteristicRead_ResponseParams = GattServiceObserver_OnLocalCharacteristicRead_ResponseParamsMojoType;
export declare interface Adapter_ConnectToDevice_ParamsMojoType {
    address: string;
}
export type Adapter_ConnectToDevice_Params = Adapter_ConnectToDevice_ParamsMojoType;
export declare interface Adapter_ConnectToDevice_ResponseParamsMojoType {
    result: ConnectResult;
    device: (bluetooth_mojom_DeviceRemote | null);
}
export type Adapter_ConnectToDevice_ResponseParams = Adapter_ConnectToDevice_ResponseParamsMojoType;
export declare interface Adapter_GetDevices_ParamsMojoType {
}
export type Adapter_GetDevices_Params = Adapter_GetDevices_ParamsMojoType;
export declare interface Adapter_GetDevices_ResponseParamsMojoType {
    devices: bluetooth_mojom_DeviceInfo[];
}
export type Adapter_GetDevices_ResponseParams = Adapter_GetDevices_ResponseParamsMojoType;
export declare interface Adapter_GetInfo_ParamsMojoType {
}
export type Adapter_GetInfo_Params = Adapter_GetInfo_ParamsMojoType;
export declare interface Adapter_GetInfo_ResponseParamsMojoType {
    info: AdapterInfo;
}
export type Adapter_GetInfo_ResponseParams = Adapter_GetInfo_ResponseParamsMojoType;
export declare interface Adapter_AddObserver_ParamsMojoType {
    observer: AdapterObserverRemote;
}
export type Adapter_AddObserver_Params = Adapter_AddObserver_ParamsMojoType;
export declare interface Adapter_AddObserver_ResponseParamsMojoType {
}
export type Adapter_AddObserver_ResponseParams = Adapter_AddObserver_ResponseParamsMojoType;
export declare interface Adapter_RegisterAdvertisement_ParamsMojoType {
    serviceId: bluetooth_mojom_UUID;
    serviceData: number[];
    useScanResponse: boolean;
    connectable: boolean;
}
export type Adapter_RegisterAdvertisement_Params = Adapter_RegisterAdvertisement_ParamsMojoType;
export declare interface Adapter_RegisterAdvertisement_ResponseParamsMojoType {
    advertisement: (AdvertisementRemote | null);
}
export type Adapter_RegisterAdvertisement_ResponseParams = Adapter_RegisterAdvertisement_ResponseParamsMojoType;
export declare interface Adapter_SetDiscoverable_ParamsMojoType {
    discoverable: boolean;
}
export type Adapter_SetDiscoverable_Params = Adapter_SetDiscoverable_ParamsMojoType;
export declare interface Adapter_SetDiscoverable_ResponseParamsMojoType {
    success: boolean;
}
export type Adapter_SetDiscoverable_ResponseParams = Adapter_SetDiscoverable_ResponseParamsMojoType;
export declare interface Adapter_SetName_ParamsMojoType {
    name: string;
}
export type Adapter_SetName_Params = Adapter_SetName_ParamsMojoType;
export declare interface Adapter_SetName_ResponseParamsMojoType {
    success: boolean;
}
export type Adapter_SetName_ResponseParams = Adapter_SetName_ResponseParamsMojoType;
export declare interface Adapter_StartDiscoverySession_ParamsMojoType {
    clientName: string;
}
export type Adapter_StartDiscoverySession_Params = Adapter_StartDiscoverySession_ParamsMojoType;
export declare interface Adapter_StartDiscoverySession_ResponseParamsMojoType {
    session: (DiscoverySessionRemote | null);
}
export type Adapter_StartDiscoverySession_ResponseParams = Adapter_StartDiscoverySession_ResponseParamsMojoType;
export declare interface Adapter_ConnectToServiceInsecurely_ParamsMojoType {
    address: string;
    serviceUuid: bluetooth_mojom_UUID;
    shouldUnbondOnError: boolean;
}
export type Adapter_ConnectToServiceInsecurely_Params = Adapter_ConnectToServiceInsecurely_ParamsMojoType;
export declare interface Adapter_ConnectToServiceInsecurely_ResponseParamsMojoType {
    result: (ConnectToServiceResult | null);
}
export type Adapter_ConnectToServiceInsecurely_ResponseParams = Adapter_ConnectToServiceInsecurely_ResponseParamsMojoType;
export declare interface Adapter_CreateRfcommServiceInsecurely_ParamsMojoType {
    serviceName: string;
    serviceUuid: bluetooth_mojom_UUID;
}
export type Adapter_CreateRfcommServiceInsecurely_Params = Adapter_CreateRfcommServiceInsecurely_ParamsMojoType;
export declare interface Adapter_CreateRfcommServiceInsecurely_ResponseParamsMojoType {
    serverSocket: (ServerSocketRemote | null);
}
export type Adapter_CreateRfcommServiceInsecurely_ResponseParams = Adapter_CreateRfcommServiceInsecurely_ResponseParamsMojoType;
export declare interface Adapter_CreateLocalGattService_ParamsMojoType {
    serviceId: bluetooth_mojom_UUID;
    observer: GattServiceObserverRemote;
}
export type Adapter_CreateLocalGattService_Params = Adapter_CreateLocalGattService_ParamsMojoType;
export declare interface Adapter_CreateLocalGattService_ResponseParamsMojoType {
    gattService: GattServiceRemote;
}
export type Adapter_CreateLocalGattService_ResponseParams = Adapter_CreateLocalGattService_ResponseParamsMojoType;
export declare interface Adapter_IsLeScatternetDualRoleSupported_ParamsMojoType {
}
export type Adapter_IsLeScatternetDualRoleSupported_Params = Adapter_IsLeScatternetDualRoleSupported_ParamsMojoType;
export declare interface Adapter_IsLeScatternetDualRoleSupported_ResponseParamsMojoType {
    isSupported: boolean;
}
export type Adapter_IsLeScatternetDualRoleSupported_ResponseParams = Adapter_IsLeScatternetDualRoleSupported_ResponseParamsMojoType;
export declare interface AdapterObserver_PresentChanged_ParamsMojoType {
    present: boolean;
}
export type AdapterObserver_PresentChanged_Params = AdapterObserver_PresentChanged_ParamsMojoType;
export declare interface AdapterObserver_PoweredChanged_ParamsMojoType {
    powered: boolean;
}
export type AdapterObserver_PoweredChanged_Params = AdapterObserver_PoweredChanged_ParamsMojoType;
export declare interface AdapterObserver_DiscoverableChanged_ParamsMojoType {
    discoverable: boolean;
}
export type AdapterObserver_DiscoverableChanged_Params = AdapterObserver_DiscoverableChanged_ParamsMojoType;
export declare interface AdapterObserver_DiscoveringChanged_ParamsMojoType {
    discovering: boolean;
}
export type AdapterObserver_DiscoveringChanged_Params = AdapterObserver_DiscoveringChanged_ParamsMojoType;
export declare interface AdapterObserver_DeviceAdded_ParamsMojoType {
    device: bluetooth_mojom_DeviceInfo;
}
export type AdapterObserver_DeviceAdded_Params = AdapterObserver_DeviceAdded_ParamsMojoType;
export declare interface AdapterObserver_DeviceChanged_ParamsMojoType {
    device: bluetooth_mojom_DeviceInfo;
}
export type AdapterObserver_DeviceChanged_Params = AdapterObserver_DeviceChanged_ParamsMojoType;
export declare interface AdapterObserver_DeviceRemoved_ParamsMojoType {
    device: bluetooth_mojom_DeviceInfo;
}
export type AdapterObserver_DeviceRemoved_Params = AdapterObserver_DeviceRemoved_ParamsMojoType;
export declare interface LocalCharacteristicReadResult {
    errorCode?: bluetooth_mojom_GattServiceErrorCode;
    data?: number[];
}
export declare enum LocalCharacteristicReadResultFieldTags {
    ERROR_CODE = 0,
    DATA = 1
}
export declare function whichLocalCharacteristicReadResult(u: LocalCharacteristicReadResult): LocalCharacteristicReadResultFieldTags;
