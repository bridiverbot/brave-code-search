import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export type SiteDataProviderPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<SiteDataProviderPendingReceiver>;
export declare class SiteDataProviderPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<SiteDataProvider> {
    handle: mojo.internal.interfaceSupport.Endpoint<SiteDataProviderPendingReceiver>;
    constructor(handle: MojoHandle | SiteDataProviderPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface SiteDataProviderInterface {
    getSiteDataArray(explicitlyRequestedOrigins: string[]): Promise<{
        result: (SiteDataArray | null);
    }>;
    getSiteDataDatabaseSize(): Promise<{
        dbSize: (SiteDataDatabaseSize | null);
    }>;
}
export declare class SiteDataProviderRemote implements SiteDataProviderInterface, mojo.internal.interfaceSupport.InterfaceRemote<SiteDataProviderPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<SiteDataProviderPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | SiteDataProviderPendingReceiverEndpoint);
    getSiteDataArray(explicitlyRequestedOrigins: string[]): Promise<{
        result: (SiteDataArray | null);
    }>;
    getSiteDataDatabaseSize(): Promise<{
        dbSize: (SiteDataDatabaseSize | null);
    }>;
}
/**
 * An object which receives request messages for the SiteDataProvider
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class SiteDataProviderReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<SiteDataProviderRemote, SiteDataProviderPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SiteDataProviderRemote, SiteDataProviderPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: SiteDataProviderInterface);
}
export declare class SiteDataProvider {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): SiteDataProviderRemote;
}
/**
 * An object which receives request messages for the SiteDataProvider
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class SiteDataProviderCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<SiteDataProviderRemote, SiteDataProviderPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SiteDataProviderRemote, SiteDataProviderPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getSiteDataArray: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(explicitlyRequestedOrigins: string[]) => any>;
    getSiteDataDatabaseSize: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const SiteDataFeatureSpec: {
    $: mojo.internal.MojomType;
};
export declare const SiteDataPerformanceMeasurementSpec: {
    $: mojo.internal.MojomType;
};
export declare const SiteDataDatabaseSizeSpec: {
    $: mojo.internal.MojomType;
};
export declare const SiteDataValueSpec: {
    $: mojo.internal.MojomType;
};
export declare const SiteDataEntrySpec: {
    $: mojo.internal.MojomType;
};
export declare const SiteDataArraySpec: {
    $: mojo.internal.MojomType;
};
export declare const SiteDataProvider_GetSiteDataArray_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SiteDataProvider_GetSiteDataArray_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SiteDataProvider_GetSiteDataDatabaseSize_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SiteDataProvider_GetSiteDataDatabaseSize_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface SiteDataFeatureMojoType {
    observationDuration: bigint;
    useTimestamp: bigint;
}
export type SiteDataFeature = SiteDataFeatureMojoType;
export declare interface SiteDataPerformanceMeasurementMojoType {
    avgCpuUsageUs: number;
    avgFootprintKb: number;
    avgLoadDurationUs: number;
}
export type SiteDataPerformanceMeasurement = SiteDataPerformanceMeasurementMojoType;
export declare interface SiteDataDatabaseSizeMojoType {
    numRows: bigint;
    onDiskSizeKb: bigint;
}
export type SiteDataDatabaseSize = SiteDataDatabaseSizeMojoType;
export declare interface SiteDataValueMojoType {
    lastLoaded: number;
    updatesFaviconInBackground: SiteDataFeature;
    updatesTitleInBackground: SiteDataFeature;
    usesAudioInBackground: SiteDataFeature;
    loadTimeEstimates: (SiteDataPerformanceMeasurement | null);
}
export type SiteDataValue = SiteDataValueMojoType;
export declare interface SiteDataEntryMojoType {
    origin: string;
    isDirty: boolean;
    value: (SiteDataValue | null);
}
export type SiteDataEntry = SiteDataEntryMojoType;
export declare interface SiteDataArrayMojoType {
    dbRows: SiteDataEntry[];
}
export type SiteDataArray = SiteDataArrayMojoType;
export declare interface SiteDataProvider_GetSiteDataArray_ParamsMojoType {
    explicitlyRequestedOrigins: string[];
}
export type SiteDataProvider_GetSiteDataArray_Params = SiteDataProvider_GetSiteDataArray_ParamsMojoType;
export declare interface SiteDataProvider_GetSiteDataArray_ResponseParamsMojoType {
    result: (SiteDataArray | null);
}
export type SiteDataProvider_GetSiteDataArray_ResponseParams = SiteDataProvider_GetSiteDataArray_ResponseParamsMojoType;
export declare interface SiteDataProvider_GetSiteDataDatabaseSize_ParamsMojoType {
}
export type SiteDataProvider_GetSiteDataDatabaseSize_Params = SiteDataProvider_GetSiteDataDatabaseSize_ParamsMojoType;
export declare interface SiteDataProvider_GetSiteDataDatabaseSize_ResponseParamsMojoType {
    dbSize: (SiteDataDatabaseSize | null);
}
export type SiteDataProvider_GetSiteDataDatabaseSize_ResponseParams = SiteDataProvider_GetSiteDataDatabaseSize_ResponseParamsMojoType;
