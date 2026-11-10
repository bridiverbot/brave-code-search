import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { ProductInfo as commerce_shared_mojom_ProductInfo } from './shared.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const UserFeedbackSpec: {
    $: mojo.internal.MojomType;
};
export declare enum UserFeedback {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kUnspecified = 0,
    kThumbsUp = 1,
    kThumbsDown = 2
}
export type ShoppingServiceHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ShoppingServiceHandlerFactoryPendingReceiver>;
export declare class ShoppingServiceHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ShoppingServiceHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<ShoppingServiceHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | ShoppingServiceHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ShoppingServiceHandlerFactoryInterface {
    createShoppingServiceHandler(handler: ShoppingServiceHandlerPendingReceiver): void;
}
export declare class ShoppingServiceHandlerFactoryRemote implements ShoppingServiceHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<ShoppingServiceHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ShoppingServiceHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ShoppingServiceHandlerFactoryPendingReceiverEndpoint);
    createShoppingServiceHandler(handler: ShoppingServiceHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the ShoppingServiceHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ShoppingServiceHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ShoppingServiceHandlerFactoryRemote, ShoppingServiceHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ShoppingServiceHandlerFactoryRemote, ShoppingServiceHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ShoppingServiceHandlerFactoryInterface);
}
export declare class ShoppingServiceHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ShoppingServiceHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the ShoppingServiceHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ShoppingServiceHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ShoppingServiceHandlerFactoryRemote, ShoppingServiceHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ShoppingServiceHandlerFactoryRemote, ShoppingServiceHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createShoppingServiceHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: ShoppingServiceHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ShoppingServiceHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ShoppingServiceHandlerPendingReceiver>;
export declare class ShoppingServiceHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ShoppingServiceHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<ShoppingServiceHandlerPendingReceiver>;
    constructor(handle: MojoHandle | ShoppingServiceHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ShoppingServiceHandlerInterface {
    getProductInfoForCurrentUrl(): Promise<{
        productInfo: commerce_shared_mojom_ProductInfo;
    }>;
    getProductInfoForUrl(url: url_mojom_Url): Promise<{
        url: url_mojom_Url;
        productInfo: commerce_shared_mojom_ProductInfo;
    }>;
    getProductInfoForUrls(urls: url_mojom_Url[]): Promise<{
        productInfos: commerce_shared_mojom_ProductInfo[];
    }>;
    getPriceInsightsInfoForCurrentUrl(): Promise<{
        priceInsightsInfo: PriceInsightsInfo;
    }>;
    getPriceInsightsInfoForUrl(url: url_mojom_Url): Promise<{
        url: url_mojom_Url;
        priceInsightsInfo: PriceInsightsInfo;
    }>;
    getUrlInfosForProductTabs(): Promise<{
        urlInfos: UrlInfo[];
    }>;
    getUrlInfosForRecentlyViewedTabs(): Promise<{
        urlInfos: UrlInfo[];
    }>;
    isShoppingListEligible(): Promise<{
        eligible: boolean;
    }>;
    getPriceTrackingStatusForCurrentUrl(): Promise<{
        tracked: boolean;
    }>;
    openUrlInNewTab(url: url_mojom_Url): void;
    switchToOrOpenTab(url: url_mojom_Url): void;
}
export declare class ShoppingServiceHandlerRemote implements ShoppingServiceHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<ShoppingServiceHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ShoppingServiceHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ShoppingServiceHandlerPendingReceiverEndpoint);
    getProductInfoForCurrentUrl(): Promise<{
        productInfo: commerce_shared_mojom_ProductInfo;
    }>;
    getProductInfoForUrl(url: url_mojom_Url): Promise<{
        url: url_mojom_Url;
        productInfo: commerce_shared_mojom_ProductInfo;
    }>;
    getProductInfoForUrls(urls: url_mojom_Url[]): Promise<{
        productInfos: commerce_shared_mojom_ProductInfo[];
    }>;
    getPriceInsightsInfoForCurrentUrl(): Promise<{
        priceInsightsInfo: PriceInsightsInfo;
    }>;
    getPriceInsightsInfoForUrl(url: url_mojom_Url): Promise<{
        url: url_mojom_Url;
        priceInsightsInfo: PriceInsightsInfo;
    }>;
    getUrlInfosForProductTabs(): Promise<{
        urlInfos: UrlInfo[];
    }>;
    getUrlInfosForRecentlyViewedTabs(): Promise<{
        urlInfos: UrlInfo[];
    }>;
    isShoppingListEligible(): Promise<{
        eligible: boolean;
    }>;
    getPriceTrackingStatusForCurrentUrl(): Promise<{
        tracked: boolean;
    }>;
    openUrlInNewTab(url: url_mojom_Url): void;
    switchToOrOpenTab(url: url_mojom_Url): void;
}
/**
 * An object which receives request messages for the ShoppingServiceHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ShoppingServiceHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ShoppingServiceHandlerRemote, ShoppingServiceHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ShoppingServiceHandlerRemote, ShoppingServiceHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ShoppingServiceHandlerInterface);
}
export declare class ShoppingServiceHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ShoppingServiceHandlerRemote;
}
/**
 * An object which receives request messages for the ShoppingServiceHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ShoppingServiceHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ShoppingServiceHandlerRemote, ShoppingServiceHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ShoppingServiceHandlerRemote, ShoppingServiceHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getProductInfoForCurrentUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getProductInfoForUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url) => any>;
    getProductInfoForUrls: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(urls: url_mojom_Url[]) => any>;
    getPriceInsightsInfoForCurrentUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getPriceInsightsInfoForUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url) => any>;
    getUrlInfosForProductTabs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getUrlInfosForRecentlyViewedTabs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    isShoppingListEligible: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getPriceTrackingStatusForCurrentUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openUrlInNewTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url) => any>;
    switchToOrOpenTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const PricePointSpec: {
    $: mojo.internal.MojomType;
};
export declare const UrlInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const PriceInsightsInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const ShoppingServiceHandlerFactory_CreateShoppingServiceHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ShoppingServiceHandler_GetProductInfoForCurrentUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ShoppingServiceHandler_GetProductInfoForCurrentUrl_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ShoppingServiceHandler_GetProductInfoForUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ShoppingServiceHandler_GetProductInfoForUrl_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ShoppingServiceHandler_GetProductInfoForUrls_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ShoppingServiceHandler_GetProductInfoForUrls_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ShoppingServiceHandler_GetUrlInfosForProductTabs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ShoppingServiceHandler_GetUrlInfosForProductTabs_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ShoppingServiceHandler_IsShoppingListEligible_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ShoppingServiceHandler_IsShoppingListEligible_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ShoppingServiceHandler_OpenUrlInNewTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ShoppingServiceHandler_SwitchToOrOpenTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface PricePointMojoType {
    date: string;
    price: number;
    formattedPrice: string;
}
export type PricePoint = PricePointMojoType;
export declare interface UrlInfoMojoType {
    title: string;
    url: url_mojom_Url;
    faviconUrl: url_mojom_Url;
    thumbnailUrl: url_mojom_Url;
    previewText: string;
}
export type UrlInfo = UrlInfoMojoType;
export declare const PriceInsightsInfo_PriceBucketSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PriceInsightsInfo_PriceBucket {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kUnknown = 0,
    kLow = 1,
    kTypical = 2,
    kHigh = 3
}
export declare interface PriceInsightsInfoMojoType {
    clusterId: bigint;
    typicalLowPrice: string;
    typicalHighPrice: string;
    catalogAttributes: string;
    jackpot: url_mojom_Url;
    bucket: PriceInsightsInfo_PriceBucket;
    hasMultipleCatalogs: boolean;
    history: PricePoint[];
    locale: string;
    currencyCode: string;
}
export type PriceInsightsInfo = PriceInsightsInfoMojoType;
export declare interface ShoppingServiceHandlerFactory_CreateShoppingServiceHandler_ParamsMojoType {
    handler: ShoppingServiceHandlerPendingReceiver;
}
export type ShoppingServiceHandlerFactory_CreateShoppingServiceHandler_Params = ShoppingServiceHandlerFactory_CreateShoppingServiceHandler_ParamsMojoType;
export declare interface ShoppingServiceHandler_GetProductInfoForCurrentUrl_ParamsMojoType {
}
export type ShoppingServiceHandler_GetProductInfoForCurrentUrl_Params = ShoppingServiceHandler_GetProductInfoForCurrentUrl_ParamsMojoType;
export declare interface ShoppingServiceHandler_GetProductInfoForCurrentUrl_ResponseParamsMojoType {
    productInfo: commerce_shared_mojom_ProductInfo;
}
export type ShoppingServiceHandler_GetProductInfoForCurrentUrl_ResponseParams = ShoppingServiceHandler_GetProductInfoForCurrentUrl_ResponseParamsMojoType;
export declare interface ShoppingServiceHandler_GetProductInfoForUrl_ParamsMojoType {
    url: url_mojom_Url;
}
export type ShoppingServiceHandler_GetProductInfoForUrl_Params = ShoppingServiceHandler_GetProductInfoForUrl_ParamsMojoType;
export declare interface ShoppingServiceHandler_GetProductInfoForUrl_ResponseParamsMojoType {
    url: url_mojom_Url;
    productInfo: commerce_shared_mojom_ProductInfo;
}
export type ShoppingServiceHandler_GetProductInfoForUrl_ResponseParams = ShoppingServiceHandler_GetProductInfoForUrl_ResponseParamsMojoType;
export declare interface ShoppingServiceHandler_GetProductInfoForUrls_ParamsMojoType {
    urls: url_mojom_Url[];
}
export type ShoppingServiceHandler_GetProductInfoForUrls_Params = ShoppingServiceHandler_GetProductInfoForUrls_ParamsMojoType;
export declare interface ShoppingServiceHandler_GetProductInfoForUrls_ResponseParamsMojoType {
    productInfos: commerce_shared_mojom_ProductInfo[];
}
export type ShoppingServiceHandler_GetProductInfoForUrls_ResponseParams = ShoppingServiceHandler_GetProductInfoForUrls_ResponseParamsMojoType;
export declare interface ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ParamsMojoType {
}
export type ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_Params = ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ParamsMojoType;
export declare interface ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ResponseParamsMojoType {
    priceInsightsInfo: PriceInsightsInfo;
}
export type ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ResponseParams = ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ResponseParamsMojoType;
export declare interface ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ParamsMojoType {
    url: url_mojom_Url;
}
export type ShoppingServiceHandler_GetPriceInsightsInfoForUrl_Params = ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ParamsMojoType;
export declare interface ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ResponseParamsMojoType {
    url: url_mojom_Url;
    priceInsightsInfo: PriceInsightsInfo;
}
export type ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ResponseParams = ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ResponseParamsMojoType;
export declare interface ShoppingServiceHandler_GetUrlInfosForProductTabs_ParamsMojoType {
}
export type ShoppingServiceHandler_GetUrlInfosForProductTabs_Params = ShoppingServiceHandler_GetUrlInfosForProductTabs_ParamsMojoType;
export declare interface ShoppingServiceHandler_GetUrlInfosForProductTabs_ResponseParamsMojoType {
    urlInfos: UrlInfo[];
}
export type ShoppingServiceHandler_GetUrlInfosForProductTabs_ResponseParams = ShoppingServiceHandler_GetUrlInfosForProductTabs_ResponseParamsMojoType;
export declare interface ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ParamsMojoType {
}
export type ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_Params = ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ParamsMojoType;
export declare interface ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ResponseParamsMojoType {
    urlInfos: UrlInfo[];
}
export type ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ResponseParams = ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ResponseParamsMojoType;
export declare interface ShoppingServiceHandler_IsShoppingListEligible_ParamsMojoType {
}
export type ShoppingServiceHandler_IsShoppingListEligible_Params = ShoppingServiceHandler_IsShoppingListEligible_ParamsMojoType;
export declare interface ShoppingServiceHandler_IsShoppingListEligible_ResponseParamsMojoType {
    eligible: boolean;
}
export type ShoppingServiceHandler_IsShoppingListEligible_ResponseParams = ShoppingServiceHandler_IsShoppingListEligible_ResponseParamsMojoType;
export declare interface ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ParamsMojoType {
}
export type ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_Params = ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ParamsMojoType;
export declare interface ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ResponseParamsMojoType {
    tracked: boolean;
}
export type ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ResponseParams = ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ResponseParamsMojoType;
export declare interface ShoppingServiceHandler_OpenUrlInNewTab_ParamsMojoType {
    url: url_mojom_Url;
}
export type ShoppingServiceHandler_OpenUrlInNewTab_Params = ShoppingServiceHandler_OpenUrlInNewTab_ParamsMojoType;
export declare interface ShoppingServiceHandler_SwitchToOrOpenTab_ParamsMojoType {
    url: url_mojom_Url;
}
export type ShoppingServiceHandler_SwitchToOrOpenTab_Params = ShoppingServiceHandler_SwitchToOrOpenTab_ParamsMojoType;
export type BrowserProxy = MojoHandlerProxy<ShoppingServiceHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<ShoppingServiceHandlerInterface, ShoppingServiceHandlerPendingReceiver, ShoppingServiceHandlerRemote>;
