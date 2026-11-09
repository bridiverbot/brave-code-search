import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { GeopositionResult as device_mojom_GeopositionResult } from './geoposition.mojom-webui.js';
import { Time as mojoBase_mojom_Time, TimeDelta as mojoBase_mojom_TimeDelta } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
export declare const INVALID_RADIO_SIGNAL_STRENGTH: number;
export declare const INVALID_CHANNEL: number;
export declare const INVALID_SIGNAL_TO_NOISE: number;
export declare const LocationProviderManagerModeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum LocationProviderManagerMode {
    MIN_VALUE = 0,
    MAX_VALUE = 5,
    kNetworkOnly = 0,
    kPlatformOnly = 1,
    kCustomOnly = 2,
    kHybridPlatform = 3,
    kHybridFallbackNetwork = 4,
    kHybridPlatform2 = 5
}
export type GeolocationInternalsObserverPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<GeolocationInternalsObserverPendingReceiver>;
export declare class GeolocationInternalsObserverPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<GeolocationInternalsObserver> {
    handle: mojo.internal.interfaceSupport.Endpoint<GeolocationInternalsObserverPendingReceiver>;
    constructor(handle: MojoHandle | GeolocationInternalsObserverPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface GeolocationInternalsObserverInterface {
    onDiagnosticsChanged(diagnostics: GeolocationDiagnostics): void;
    onNetworkLocationRequested(accessPointData: AccessPointData[]): void;
    onNetworkLocationReceived(response: (NetworkLocationResponse | null)): void;
}
export declare class GeolocationInternalsObserverRemote implements GeolocationInternalsObserverInterface, mojo.internal.interfaceSupport.InterfaceRemote<GeolocationInternalsObserverPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<GeolocationInternalsObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | GeolocationInternalsObserverPendingReceiverEndpoint);
    onDiagnosticsChanged(diagnostics: GeolocationDiagnostics): void;
    onNetworkLocationRequested(accessPointData: AccessPointData[]): void;
    onNetworkLocationReceived(response: (NetworkLocationResponse | null)): void;
}
/**
 * An object which receives request messages for the GeolocationInternalsObserver
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class GeolocationInternalsObserverReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<GeolocationInternalsObserverRemote, GeolocationInternalsObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GeolocationInternalsObserverRemote, GeolocationInternalsObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: GeolocationInternalsObserverInterface);
}
export declare class GeolocationInternalsObserver {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): GeolocationInternalsObserverRemote;
}
/**
 * An object which receives request messages for the GeolocationInternalsObserver
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class GeolocationInternalsObserverCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<GeolocationInternalsObserverRemote, GeolocationInternalsObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GeolocationInternalsObserverRemote, GeolocationInternalsObserverPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onDiagnosticsChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(diagnostics: GeolocationDiagnostics) => any>;
    onNetworkLocationRequested: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(accessPointData: AccessPointData[]) => any>;
    onNetworkLocationReceived: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(response: (NetworkLocationResponse | null)) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type GeolocationInternalsPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<GeolocationInternalsPendingReceiver>;
export declare class GeolocationInternalsPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<GeolocationInternals> {
    handle: mojo.internal.interfaceSupport.Endpoint<GeolocationInternalsPendingReceiver>;
    constructor(handle: MojoHandle | GeolocationInternalsPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface GeolocationInternalsInterface {
    addInternalsObserver(observer: GeolocationInternalsObserverRemote): Promise<{
        diagnostics: (GeolocationDiagnostics | null);
    }>;
}
export declare class GeolocationInternalsRemote implements GeolocationInternalsInterface, mojo.internal.interfaceSupport.InterfaceRemote<GeolocationInternalsPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<GeolocationInternalsPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | GeolocationInternalsPendingReceiverEndpoint);
    addInternalsObserver(observer: GeolocationInternalsObserverRemote): Promise<{
        diagnostics: (GeolocationDiagnostics | null);
    }>;
}
/**
 * An object which receives request messages for the GeolocationInternals
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class GeolocationInternalsReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<GeolocationInternalsRemote, GeolocationInternalsPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GeolocationInternalsRemote, GeolocationInternalsPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: GeolocationInternalsInterface);
}
export declare class GeolocationInternals {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): GeolocationInternalsRemote;
}
/**
 * An object which receives request messages for the GeolocationInternals
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class GeolocationInternalsCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<GeolocationInternalsRemote, GeolocationInternalsPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<GeolocationInternalsRemote, GeolocationInternalsPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    addInternalsObserver: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(observer: GeolocationInternalsObserverRemote) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const AccessPointDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const NetworkLocationDiagnosticsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PositionCacheDiagnosticsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WifiPollingPolicyDiagnosticsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GeolocationDiagnosticsSpec: {
    $: mojo.internal.MojomType;
};
export declare const NetworkLocationResponseSpec: {
    $: mojo.internal.MojomType;
};
export declare const GeolocationInternalsObserver_OnDiagnosticsChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GeolocationInternalsObserver_OnNetworkLocationRequested_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GeolocationInternalsObserver_OnNetworkLocationReceived_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GeolocationInternals_AddInternalsObserver_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GeolocationInternals_AddInternalsObserver_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface AccessPointDataMojoType {
    macAddress: string;
    radioSignalStrength: number;
    channel: number;
    signalToNoise: number;
    timestamp: (mojoBase_mojom_Time | null);
}
export type AccessPointData = AccessPointDataMojoType;
export declare interface NetworkLocationDiagnosticsMojoType {
    accessPointData: AccessPointData[];
    wifiTimestamp: (mojoBase_mojom_Time | null);
}
export type NetworkLocationDiagnostics = NetworkLocationDiagnosticsMojoType;
export declare interface PositionCacheDiagnosticsMojoType {
    cacheSize: number;
    hitRate: (number | null);
    lastHit: (mojoBase_mojom_Time | null);
    lastMiss: (mojoBase_mojom_Time | null);
    lastNetworkResult: (device_mojom_GeopositionResult | null);
}
export type PositionCacheDiagnostics = PositionCacheDiagnosticsMojoType;
export declare interface WifiPollingPolicyDiagnosticsMojoType {
    intervalStart: (mojoBase_mojom_Time | null);
    intervalDuration: mojoBase_mojom_TimeDelta;
    pollingInterval: mojoBase_mojom_TimeDelta;
    defaultInterval: mojoBase_mojom_TimeDelta;
    noChangeInterval: mojoBase_mojom_TimeDelta;
    twoNoChangeInterval: mojoBase_mojom_TimeDelta;
    noWifiInterval: mojoBase_mojom_TimeDelta;
}
export type WifiPollingPolicyDiagnostics = WifiPollingPolicyDiagnosticsMojoType;
export declare const GeolocationDiagnostics_ProviderStateSpec: {
    $: mojo.internal.MojomType;
};
export declare enum GeolocationDiagnostics_ProviderState {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kStopped = 0,
    kHighAccuracy = 1,
    kLowAccuracy = 2,
    kBlockedBySystemPermission = 3
}
export declare interface GeolocationDiagnosticsMojoType {
    providerState: GeolocationDiagnostics_ProviderState;
    locationProviderManagerMode: (LocationProviderManagerMode | null);
    networkLocationDiagnostics: (NetworkLocationDiagnostics | null);
    positionCacheDiagnostics: (PositionCacheDiagnostics | null);
    wifiPollingPolicyDiagnostics: (WifiPollingPolicyDiagnostics | null);
}
export type GeolocationDiagnostics = GeolocationDiagnosticsMojoType;
export declare interface NetworkLocationResponseMojoType {
    latitude: number;
    longitude: number;
    accuracy: (number | null);
}
export type NetworkLocationResponse = NetworkLocationResponseMojoType;
export declare interface GeolocationInternalsObserver_OnDiagnosticsChanged_ParamsMojoType {
    diagnostics: GeolocationDiagnostics;
}
export type GeolocationInternalsObserver_OnDiagnosticsChanged_Params = GeolocationInternalsObserver_OnDiagnosticsChanged_ParamsMojoType;
export declare interface GeolocationInternalsObserver_OnNetworkLocationRequested_ParamsMojoType {
    accessPointData: AccessPointData[];
}
export type GeolocationInternalsObserver_OnNetworkLocationRequested_Params = GeolocationInternalsObserver_OnNetworkLocationRequested_ParamsMojoType;
export declare interface GeolocationInternalsObserver_OnNetworkLocationReceived_ParamsMojoType {
    response: (NetworkLocationResponse | null);
}
export type GeolocationInternalsObserver_OnNetworkLocationReceived_Params = GeolocationInternalsObserver_OnNetworkLocationReceived_ParamsMojoType;
export declare interface GeolocationInternals_AddInternalsObserver_ParamsMojoType {
    observer: GeolocationInternalsObserverRemote;
}
export type GeolocationInternals_AddInternalsObserver_Params = GeolocationInternals_AddInternalsObserver_ParamsMojoType;
export declare interface GeolocationInternals_AddInternalsObserver_ResponseParamsMojoType {
    diagnostics: (GeolocationDiagnostics | null);
}
export type GeolocationInternals_AddInternalsObserver_ResponseParams = GeolocationInternals_AddInternalsObserver_ResponseParamsMojoType;
