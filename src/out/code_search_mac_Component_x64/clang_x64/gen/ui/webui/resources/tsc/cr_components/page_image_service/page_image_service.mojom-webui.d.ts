import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const ClientIdSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ClientId {
    MIN_VALUE = 0,
    MAX_VALUE = 7,
    Journeys = 0,
    JourneysSidePanel = 1,
    NtpRealbox = 2,
    NtpQuests = 3,
    Bookmarks = 4,
    NtpTabResumption = 5,
    HistoryEmbeddings = 6,
    ContextHubTopics = 7
}
export type PageImageServiceHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageImageServiceHandlerPendingReceiver>;
export declare class PageImageServiceHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageImageServiceHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageImageServiceHandlerPendingReceiver>;
    constructor(handle: MojoHandle | PageImageServiceHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageImageServiceHandlerInterface {
    getPageImageUrl(clientId: ClientId, pageUrl: url_mojom_Url, options: Options): Promise<{
        result: (ImageResult | null);
    }>;
}
export declare class PageImageServiceHandlerRemote implements PageImageServiceHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageImageServiceHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageImageServiceHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageImageServiceHandlerPendingReceiverEndpoint);
    getPageImageUrl(clientId: ClientId, pageUrl: url_mojom_Url, options: Options): Promise<{
        result: (ImageResult | null);
    }>;
}
/**
 * An object which receives request messages for the PageImageServiceHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PageImageServiceHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PageImageServiceHandlerRemote, PageImageServiceHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageImageServiceHandlerRemote, PageImageServiceHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PageImageServiceHandlerInterface);
}
export declare class PageImageServiceHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PageImageServiceHandlerRemote;
}
/**
 * An object which receives request messages for the PageImageServiceHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PageImageServiceHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PageImageServiceHandlerRemote, PageImageServiceHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageImageServiceHandlerRemote, PageImageServiceHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getPageImageUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(clientId: ClientId, pageUrl: url_mojom_Url, options: Options) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const OptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ImageResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageImageServiceHandler_GetPageImageUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageImageServiceHandler_GetPageImageUrl_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface OptionsMojoType {
    suggestImages: boolean;
    optimizationGuideImages: boolean;
}
export type Options = OptionsMojoType;
export declare interface ImageResultMojoType {
    imageUrl: url_mojom_Url;
}
export type ImageResult = ImageResultMojoType;
export declare interface PageImageServiceHandler_GetPageImageUrl_ParamsMojoType {
    clientId: ClientId;
    pageUrl: url_mojom_Url;
    options: Options;
}
export type PageImageServiceHandler_GetPageImageUrl_Params = PageImageServiceHandler_GetPageImageUrl_ParamsMojoType;
export declare interface PageImageServiceHandler_GetPageImageUrl_ResponseParamsMojoType {
    result: (ImageResult | null);
}
export type PageImageServiceHandler_GetPageImageUrl_ResponseParams = PageImageServiceHandler_GetPageImageUrl_ResponseParamsMojoType;
