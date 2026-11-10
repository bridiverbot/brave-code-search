import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export type SiteEngagementDetailsProviderPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<SiteEngagementDetailsProviderPendingReceiver>;
export declare class SiteEngagementDetailsProviderPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<SiteEngagementDetailsProvider> {
    handle: mojo.internal.interfaceSupport.Endpoint<SiteEngagementDetailsProviderPendingReceiver>;
    constructor(handle: MojoHandle | SiteEngagementDetailsProviderPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface SiteEngagementDetailsProviderInterface {
    getSiteEngagementDetails(): Promise<{
        info: SiteEngagementDetails[];
    }>;
    setSiteEngagementBaseScoreForUrl(url: url_mojom_Url, score: number): void;
}
export declare class SiteEngagementDetailsProviderRemote implements SiteEngagementDetailsProviderInterface, mojo.internal.interfaceSupport.InterfaceRemote<SiteEngagementDetailsProviderPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<SiteEngagementDetailsProviderPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | SiteEngagementDetailsProviderPendingReceiverEndpoint);
    getSiteEngagementDetails(): Promise<{
        info: SiteEngagementDetails[];
    }>;
    setSiteEngagementBaseScoreForUrl(url: url_mojom_Url, score: number): void;
}
/**
 * An object which receives request messages for the SiteEngagementDetailsProvider
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class SiteEngagementDetailsProviderReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<SiteEngagementDetailsProviderRemote, SiteEngagementDetailsProviderPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SiteEngagementDetailsProviderRemote, SiteEngagementDetailsProviderPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: SiteEngagementDetailsProviderInterface);
}
export declare class SiteEngagementDetailsProvider {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): SiteEngagementDetailsProviderRemote;
}
/**
 * An object which receives request messages for the SiteEngagementDetailsProvider
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class SiteEngagementDetailsProviderCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<SiteEngagementDetailsProviderRemote, SiteEngagementDetailsProviderPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SiteEngagementDetailsProviderRemote, SiteEngagementDetailsProviderPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getSiteEngagementDetails: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setSiteEngagementBaseScoreForUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url, score: number) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const SiteEngagementDetailsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SiteEngagementDetailsProvider_GetSiteEngagementDetails_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface SiteEngagementDetailsMojoType {
    origin: url_mojom_Url;
    totalScore: number;
    baseScore: number;
    installedBonus: number;
}
export type SiteEngagementDetails = SiteEngagementDetailsMojoType;
export declare interface SiteEngagementDetailsProvider_GetSiteEngagementDetails_ParamsMojoType {
}
export type SiteEngagementDetailsProvider_GetSiteEngagementDetails_Params = SiteEngagementDetailsProvider_GetSiteEngagementDetails_ParamsMojoType;
export declare interface SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParamsMojoType {
    info: SiteEngagementDetails[];
}
export type SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParams = SiteEngagementDetailsProvider_GetSiteEngagementDetails_ResponseParamsMojoType;
export declare interface SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_ParamsMojoType {
    url: url_mojom_Url;
    score: number;
}
export type SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_Params = SiteEngagementDetailsProvider_SetSiteEngagementBaseScoreForUrl_ParamsMojoType;
