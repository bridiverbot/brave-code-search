import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { AdapterRemote as bluetooth_mojom_AdapterRemote } from './adapter.mojom-webui.js';
export type DebugLogsChangeHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<DebugLogsChangeHandlerPendingReceiver>;
export declare class DebugLogsChangeHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<DebugLogsChangeHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<DebugLogsChangeHandlerPendingReceiver>;
    constructor(handle: MojoHandle | DebugLogsChangeHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface DebugLogsChangeHandlerInterface {
    changeDebugLogsState(shouldDebugLogsBeEnabled: boolean): void;
}
export declare class DebugLogsChangeHandlerRemote implements DebugLogsChangeHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<DebugLogsChangeHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<DebugLogsChangeHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | DebugLogsChangeHandlerPendingReceiverEndpoint);
    changeDebugLogsState(shouldDebugLogsBeEnabled: boolean): void;
}
/**
 * An object which receives request messages for the DebugLogsChangeHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class DebugLogsChangeHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<DebugLogsChangeHandlerRemote, DebugLogsChangeHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DebugLogsChangeHandlerRemote, DebugLogsChangeHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: DebugLogsChangeHandlerInterface);
}
export declare class DebugLogsChangeHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): DebugLogsChangeHandlerRemote;
}
/**
 * An object which receives request messages for the DebugLogsChangeHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class DebugLogsChangeHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<DebugLogsChangeHandlerRemote, DebugLogsChangeHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<DebugLogsChangeHandlerRemote, DebugLogsChangeHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    changeDebugLogsState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(shouldDebugLogsBeEnabled: boolean) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type BluetoothInternalsHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<BluetoothInternalsHandlerPendingReceiver>;
export declare class BluetoothInternalsHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<BluetoothInternalsHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<BluetoothInternalsHandlerPendingReceiver>;
    constructor(handle: MojoHandle | BluetoothInternalsHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface BluetoothInternalsHandlerInterface {
    getAdapter(): Promise<{
        adapter: (bluetooth_mojom_AdapterRemote | null);
    }>;
    getDebugLogsChangeHandler(): Promise<{
        handler: (DebugLogsChangeHandlerRemote | null);
        initialToggleValue: boolean;
    }>;
    checkSystemPermissions(): Promise<{
        needLocationPermission: boolean;
        needNearbyDevicesPermission: boolean;
        needLocationServices: boolean;
        canRequestPermissions: boolean;
    }>;
    requestSystemPermissions(): Promise<void>;
    requestLocationServices(): Promise<void>;
    startBtsnoop(): Promise<{
        btsnoop: (BluetoothBtsnoopRemote | null);
    }>;
    isBtsnoopFeatureEnabled(): Promise<{
        enabled: boolean;
    }>;
}
export declare class BluetoothInternalsHandlerRemote implements BluetoothInternalsHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<BluetoothInternalsHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<BluetoothInternalsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | BluetoothInternalsHandlerPendingReceiverEndpoint);
    getAdapter(): Promise<{
        adapter: (bluetooth_mojom_AdapterRemote | null);
    }>;
    getDebugLogsChangeHandler(): Promise<{
        handler: (DebugLogsChangeHandlerRemote | null);
        initialToggleValue: boolean;
    }>;
    checkSystemPermissions(): Promise<{
        needLocationPermission: boolean;
        needNearbyDevicesPermission: boolean;
        needLocationServices: boolean;
        canRequestPermissions: boolean;
    }>;
    requestSystemPermissions(): Promise<void>;
    requestLocationServices(): Promise<void>;
    startBtsnoop(): Promise<{
        btsnoop: (BluetoothBtsnoopRemote | null);
    }>;
    isBtsnoopFeatureEnabled(): Promise<{
        enabled: boolean;
    }>;
}
/**
 * An object which receives request messages for the BluetoothInternalsHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class BluetoothInternalsHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<BluetoothInternalsHandlerRemote, BluetoothInternalsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BluetoothInternalsHandlerRemote, BluetoothInternalsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: BluetoothInternalsHandlerInterface);
}
export declare class BluetoothInternalsHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): BluetoothInternalsHandlerRemote;
}
/**
 * An object which receives request messages for the BluetoothInternalsHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class BluetoothInternalsHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<BluetoothInternalsHandlerRemote, BluetoothInternalsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BluetoothInternalsHandlerRemote, BluetoothInternalsHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getAdapter: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getDebugLogsChangeHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    checkSystemPermissions: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    requestSystemPermissions: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    requestLocationServices: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    startBtsnoop: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    isBtsnoopFeatureEnabled: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type BluetoothBtsnoopPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<BluetoothBtsnoopPendingReceiver>;
export declare class BluetoothBtsnoopPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<BluetoothBtsnoop> {
    handle: mojo.internal.interfaceSupport.Endpoint<BluetoothBtsnoopPendingReceiver>;
    constructor(handle: MojoHandle | BluetoothBtsnoopPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface BluetoothBtsnoopInterface {
    stop(): Promise<{
        success: boolean;
    }>;
}
export declare class BluetoothBtsnoopRemote implements BluetoothBtsnoopInterface, mojo.internal.interfaceSupport.InterfaceRemote<BluetoothBtsnoopPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<BluetoothBtsnoopPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | BluetoothBtsnoopPendingReceiverEndpoint);
    stop(): Promise<{
        success: boolean;
    }>;
}
/**
 * An object which receives request messages for the BluetoothBtsnoop
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class BluetoothBtsnoopReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<BluetoothBtsnoopRemote, BluetoothBtsnoopPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BluetoothBtsnoopRemote, BluetoothBtsnoopPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: BluetoothBtsnoopInterface);
}
export declare class BluetoothBtsnoop {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): BluetoothBtsnoopRemote;
}
/**
 * An object which receives request messages for the BluetoothBtsnoop
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class BluetoothBtsnoopCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<BluetoothBtsnoopRemote, BluetoothBtsnoopPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BluetoothBtsnoopRemote, BluetoothBtsnoopPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    stop: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const DebugLogsChangeHandler_ChangeDebugLogsState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BluetoothInternalsHandler_GetAdapter_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BluetoothInternalsHandler_GetAdapter_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BluetoothInternalsHandler_GetDebugLogsChangeHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BluetoothInternalsHandler_GetDebugLogsChangeHandler_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BluetoothInternalsHandler_CheckSystemPermissions_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BluetoothInternalsHandler_CheckSystemPermissions_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BluetoothInternalsHandler_RequestSystemPermissions_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BluetoothInternalsHandler_RequestSystemPermissions_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BluetoothInternalsHandler_RequestLocationServices_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BluetoothInternalsHandler_RequestLocationServices_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BluetoothInternalsHandler_StartBtsnoop_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BluetoothInternalsHandler_StartBtsnoop_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BluetoothBtsnoop_Stop_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BluetoothBtsnoop_Stop_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface DebugLogsChangeHandler_ChangeDebugLogsState_ParamsMojoType {
    shouldDebugLogsBeEnabled: boolean;
}
export type DebugLogsChangeHandler_ChangeDebugLogsState_Params = DebugLogsChangeHandler_ChangeDebugLogsState_ParamsMojoType;
export declare interface BluetoothInternalsHandler_GetAdapter_ParamsMojoType {
}
export type BluetoothInternalsHandler_GetAdapter_Params = BluetoothInternalsHandler_GetAdapter_ParamsMojoType;
export declare interface BluetoothInternalsHandler_GetAdapter_ResponseParamsMojoType {
    adapter: (bluetooth_mojom_AdapterRemote | null);
}
export type BluetoothInternalsHandler_GetAdapter_ResponseParams = BluetoothInternalsHandler_GetAdapter_ResponseParamsMojoType;
export declare interface BluetoothInternalsHandler_GetDebugLogsChangeHandler_ParamsMojoType {
}
export type BluetoothInternalsHandler_GetDebugLogsChangeHandler_Params = BluetoothInternalsHandler_GetDebugLogsChangeHandler_ParamsMojoType;
export declare interface BluetoothInternalsHandler_GetDebugLogsChangeHandler_ResponseParamsMojoType {
    handler: (DebugLogsChangeHandlerRemote | null);
    initialToggleValue: boolean;
}
export type BluetoothInternalsHandler_GetDebugLogsChangeHandler_ResponseParams = BluetoothInternalsHandler_GetDebugLogsChangeHandler_ResponseParamsMojoType;
export declare interface BluetoothInternalsHandler_CheckSystemPermissions_ParamsMojoType {
}
export type BluetoothInternalsHandler_CheckSystemPermissions_Params = BluetoothInternalsHandler_CheckSystemPermissions_ParamsMojoType;
export declare interface BluetoothInternalsHandler_CheckSystemPermissions_ResponseParamsMojoType {
    needLocationPermission: boolean;
    needNearbyDevicesPermission: boolean;
    needLocationServices: boolean;
    canRequestPermissions: boolean;
}
export type BluetoothInternalsHandler_CheckSystemPermissions_ResponseParams = BluetoothInternalsHandler_CheckSystemPermissions_ResponseParamsMojoType;
export declare interface BluetoothInternalsHandler_RequestSystemPermissions_ParamsMojoType {
}
export type BluetoothInternalsHandler_RequestSystemPermissions_Params = BluetoothInternalsHandler_RequestSystemPermissions_ParamsMojoType;
export declare interface BluetoothInternalsHandler_RequestSystemPermissions_ResponseParamsMojoType {
}
export type BluetoothInternalsHandler_RequestSystemPermissions_ResponseParams = BluetoothInternalsHandler_RequestSystemPermissions_ResponseParamsMojoType;
export declare interface BluetoothInternalsHandler_RequestLocationServices_ParamsMojoType {
}
export type BluetoothInternalsHandler_RequestLocationServices_Params = BluetoothInternalsHandler_RequestLocationServices_ParamsMojoType;
export declare interface BluetoothInternalsHandler_RequestLocationServices_ResponseParamsMojoType {
}
export type BluetoothInternalsHandler_RequestLocationServices_ResponseParams = BluetoothInternalsHandler_RequestLocationServices_ResponseParamsMojoType;
export declare interface BluetoothInternalsHandler_StartBtsnoop_ParamsMojoType {
}
export type BluetoothInternalsHandler_StartBtsnoop_Params = BluetoothInternalsHandler_StartBtsnoop_ParamsMojoType;
export declare interface BluetoothInternalsHandler_StartBtsnoop_ResponseParamsMojoType {
    btsnoop: (BluetoothBtsnoopRemote | null);
}
export type BluetoothInternalsHandler_StartBtsnoop_ResponseParams = BluetoothInternalsHandler_StartBtsnoop_ResponseParamsMojoType;
export declare interface BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_ParamsMojoType {
}
export type BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_Params = BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_ParamsMojoType;
export declare interface BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_ResponseParamsMojoType {
    enabled: boolean;
}
export type BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_ResponseParams = BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_ResponseParamsMojoType;
export declare interface BluetoothBtsnoop_Stop_ParamsMojoType {
}
export type BluetoothBtsnoop_Stop_Params = BluetoothBtsnoop_Stop_ParamsMojoType;
export declare interface BluetoothBtsnoop_Stop_ResponseParamsMojoType {
    success: boolean;
}
export type BluetoothBtsnoop_Stop_ResponseParams = BluetoothBtsnoop_Stop_ResponseParamsMojoType;
