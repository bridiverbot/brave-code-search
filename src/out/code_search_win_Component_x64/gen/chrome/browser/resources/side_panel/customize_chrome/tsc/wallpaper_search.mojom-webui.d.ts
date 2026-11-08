import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { Token as mojoBase_mojom_Token } from '//resources/mojo/mojo/public/mojom/base/token.mojom-webui.js';
import { SkColor as skia_mojom_SkColor } from '//resources/mojo/skia/public/mojom/skcolor.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const DescriptorDNameSpec: {
    $: mojo.internal.MojomType;
};
export declare enum DescriptorDName {
    MIN_VALUE = 0,
    MAX_VALUE = 0,
    kYellow = 0
}
export declare const WallpaperSearchStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare enum WallpaperSearchStatus {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    kOk = 0,
    kError = 1,
    kRequestThrottled = 2,
    kOffline = 3,
    kSignedOut = 4
}
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
export type WallpaperSearchHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<WallpaperSearchHandlerFactoryPendingReceiver>;
export declare class WallpaperSearchHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<WallpaperSearchHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<WallpaperSearchHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | WallpaperSearchHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface WallpaperSearchHandlerFactoryInterface {
    createWallpaperSearchHandler(client: WallpaperSearchClientRemote, handler: WallpaperSearchHandlerPendingReceiver): void;
}
export declare class WallpaperSearchHandlerFactoryRemote implements WallpaperSearchHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<WallpaperSearchHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<WallpaperSearchHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | WallpaperSearchHandlerFactoryPendingReceiverEndpoint);
    createWallpaperSearchHandler(client: WallpaperSearchClientRemote, handler: WallpaperSearchHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the WallpaperSearchHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class WallpaperSearchHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<WallpaperSearchHandlerFactoryRemote, WallpaperSearchHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<WallpaperSearchHandlerFactoryRemote, WallpaperSearchHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: WallpaperSearchHandlerFactoryInterface);
}
export declare class WallpaperSearchHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): WallpaperSearchHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the WallpaperSearchHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class WallpaperSearchHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<WallpaperSearchHandlerFactoryRemote, WallpaperSearchHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<WallpaperSearchHandlerFactoryRemote, WallpaperSearchHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createWallpaperSearchHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(client: WallpaperSearchClientRemote, handler: WallpaperSearchHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type WallpaperSearchHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<WallpaperSearchHandlerPendingReceiver>;
export declare class WallpaperSearchHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<WallpaperSearchHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<WallpaperSearchHandlerPendingReceiver>;
    constructor(handle: MojoHandle | WallpaperSearchHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface WallpaperSearchHandlerInterface {
    getDescriptors(): Promise<{
        descriptors: (Descriptors | null);
    }>;
    getInspirations(): Promise<{
        inspirationGroups: (InspirationGroup[] | null);
    }>;
    getWallpaperSearchResults(resultDescriptors: ResultDescriptors): Promise<{
        status: WallpaperSearchStatus;
        results: WallpaperSearchResult[];
    }>;
    setResultRenderTime(resultIds: mojoBase_mojom_Token[], time: number): void;
    setBackgroundToHistoryImage(resultId: mojoBase_mojom_Token, descriptors: ResultDescriptors): void;
    setBackgroundToInspirationImage(id: mojoBase_mojom_Token, backgroundUrl: url_mojom_Url): void;
    setBackgroundToWallpaperSearchResult(resultId: mojoBase_mojom_Token, time: number, descriptors: ResultDescriptors): void;
    updateHistory(): void;
    setUserFeedback(selectedOption: UserFeedback): void;
    openHelpArticle(): void;
    launchHatsSurvey(): void;
}
export declare class WallpaperSearchHandlerRemote implements WallpaperSearchHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<WallpaperSearchHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<WallpaperSearchHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | WallpaperSearchHandlerPendingReceiverEndpoint);
    getDescriptors(): Promise<{
        descriptors: (Descriptors | null);
    }>;
    getInspirations(): Promise<{
        inspirationGroups: (InspirationGroup[] | null);
    }>;
    getWallpaperSearchResults(resultDescriptors: ResultDescriptors): Promise<{
        status: WallpaperSearchStatus;
        results: WallpaperSearchResult[];
    }>;
    setResultRenderTime(resultIds: mojoBase_mojom_Token[], time: number): void;
    setBackgroundToHistoryImage(resultId: mojoBase_mojom_Token, descriptors: ResultDescriptors): void;
    setBackgroundToInspirationImage(id: mojoBase_mojom_Token, backgroundUrl: url_mojom_Url): void;
    setBackgroundToWallpaperSearchResult(resultId: mojoBase_mojom_Token, time: number, descriptors: ResultDescriptors): void;
    updateHistory(): void;
    setUserFeedback(selectedOption: UserFeedback): void;
    openHelpArticle(): void;
    launchHatsSurvey(): void;
}
/**
 * An object which receives request messages for the WallpaperSearchHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class WallpaperSearchHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<WallpaperSearchHandlerRemote, WallpaperSearchHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<WallpaperSearchHandlerRemote, WallpaperSearchHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: WallpaperSearchHandlerInterface);
}
export declare class WallpaperSearchHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): WallpaperSearchHandlerRemote;
}
/**
 * An object which receives request messages for the WallpaperSearchHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class WallpaperSearchHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<WallpaperSearchHandlerRemote, WallpaperSearchHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<WallpaperSearchHandlerRemote, WallpaperSearchHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getDescriptors: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getInspirations: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getWallpaperSearchResults: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(resultDescriptors: ResultDescriptors) => any>;
    setResultRenderTime: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(resultIds: mojoBase_mojom_Token[], time: number) => any>;
    setBackgroundToHistoryImage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(resultId: mojoBase_mojom_Token, descriptors: ResultDescriptors) => any>;
    setBackgroundToInspirationImage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: mojoBase_mojom_Token, backgroundUrl: url_mojom_Url) => any>;
    setBackgroundToWallpaperSearchResult: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(resultId: mojoBase_mojom_Token, time: number, descriptors: ResultDescriptors) => any>;
    updateHistory: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setUserFeedback: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(selectedOption: UserFeedback) => any>;
    openHelpArticle: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    launchHatsSurvey: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type WallpaperSearchClientPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<WallpaperSearchClientPendingReceiver>;
export declare class WallpaperSearchClientPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<WallpaperSearchClient> {
    handle: mojo.internal.interfaceSupport.Endpoint<WallpaperSearchClientPendingReceiver>;
    constructor(handle: MojoHandle | WallpaperSearchClientPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface WallpaperSearchClientInterface {
    setHistory(history: WallpaperSearchResult[]): void;
}
export declare class WallpaperSearchClientRemote implements WallpaperSearchClientInterface, mojo.internal.interfaceSupport.InterfaceRemote<WallpaperSearchClientPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<WallpaperSearchClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | WallpaperSearchClientPendingReceiverEndpoint);
    setHistory(history: WallpaperSearchResult[]): void;
}
/**
 * An object which receives request messages for the WallpaperSearchClient
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class WallpaperSearchClientReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<WallpaperSearchClientRemote, WallpaperSearchClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<WallpaperSearchClientRemote, WallpaperSearchClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: WallpaperSearchClientInterface);
}
export declare class WallpaperSearchClient {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): WallpaperSearchClientRemote;
}
/**
 * An object which receives request messages for the WallpaperSearchClient
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class WallpaperSearchClientCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<WallpaperSearchClientRemote, WallpaperSearchClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<WallpaperSearchClientRemote, WallpaperSearchClientPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    setHistory: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(history: WallpaperSearchResult[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const KeyLabelSpec: {
    $: mojo.internal.MojomType;
};
export declare const GroupSpec: {
    $: mojo.internal.MojomType;
};
export declare const DescriptorBSpec: {
    $: mojo.internal.MojomType;
};
export declare const DescriptorsSpec: {
    $: mojo.internal.MojomType;
};
export declare const InspirationSpec: {
    $: mojo.internal.MojomType;
};
export declare const InspirationDescriptorsSpec: {
    $: mojo.internal.MojomType;
};
export declare const InspirationGroupSpec: {
    $: mojo.internal.MojomType;
};
export declare const WallpaperSearchResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ResultDescriptorsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WallpaperSearchHandlerFactory_CreateWallpaperSearchHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WallpaperSearchHandler_GetDescriptors_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WallpaperSearchHandler_GetDescriptors_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WallpaperSearchHandler_GetInspirations_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WallpaperSearchHandler_GetInspirations_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WallpaperSearchHandler_GetWallpaperSearchResults_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WallpaperSearchHandler_GetWallpaperSearchResults_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WallpaperSearchHandler_SetResultRenderTime_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WallpaperSearchHandler_SetBackgroundToHistoryImage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WallpaperSearchHandler_SetBackgroundToInspirationImage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WallpaperSearchHandler_SetBackgroundToWallpaperSearchResult_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WallpaperSearchHandler_UpdateHistory_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WallpaperSearchHandler_SetUserFeedback_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WallpaperSearchHandler_OpenHelpArticle_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WallpaperSearchHandler_LaunchHatsSurvey_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WallpaperSearchClient_SetHistory_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const DescriptorDValueSpec: {
    $: mojo.internal.MojomType;
};
export declare interface KeyLabelMojoType {
    key: string;
    label: string;
}
export type KeyLabel = KeyLabelMojoType;
export declare interface GroupMojoType {
    category: string;
    descriptorAs: KeyLabel[];
}
export type Group = GroupMojoType;
export declare interface DescriptorBMojoType {
    key: string;
    label: string;
    imagePath: string;
}
export type DescriptorB = DescriptorBMojoType;
export declare interface DescriptorsMojoType {
    groups: Group[];
    descriptorB: DescriptorB[];
    descriptorC: KeyLabel[];
}
export type Descriptors = DescriptorsMojoType;
export declare interface InspirationMojoType {
    id: mojoBase_mojom_Token;
    description: string;
    backgroundUrl: url_mojom_Url;
    thumbnailUrl: url_mojom_Url;
}
export type Inspiration = InspirationMojoType;
export declare interface InspirationDescriptorsMojoType {
    subject: (KeyLabel | null);
    style: (KeyLabel | null);
    mood: (KeyLabel | null);
    color: (DescriptorDValue | null);
}
export type InspirationDescriptors = InspirationDescriptorsMojoType;
export declare interface InspirationGroupMojoType {
    descriptors: InspirationDescriptors;
    inspirations: Inspiration[];
}
export type InspirationGroup = InspirationGroupMojoType;
export declare interface WallpaperSearchResultMojoType {
    id: mojoBase_mojom_Token;
    image: string;
    descriptors: (ResultDescriptors | null);
}
export type WallpaperSearchResult = WallpaperSearchResultMojoType;
export declare interface ResultDescriptorsMojoType {
    subject: (string | null);
    style: (string | null);
    mood: (string | null);
    color: (DescriptorDValue | null);
}
export type ResultDescriptors = ResultDescriptorsMojoType;
export declare interface WallpaperSearchHandlerFactory_CreateWallpaperSearchHandler_ParamsMojoType {
    client: WallpaperSearchClientRemote;
    handler: WallpaperSearchHandlerPendingReceiver;
}
export type WallpaperSearchHandlerFactory_CreateWallpaperSearchHandler_Params = WallpaperSearchHandlerFactory_CreateWallpaperSearchHandler_ParamsMojoType;
export declare interface WallpaperSearchHandler_GetDescriptors_ParamsMojoType {
}
export type WallpaperSearchHandler_GetDescriptors_Params = WallpaperSearchHandler_GetDescriptors_ParamsMojoType;
export declare interface WallpaperSearchHandler_GetDescriptors_ResponseParamsMojoType {
    descriptors: (Descriptors | null);
}
export type WallpaperSearchHandler_GetDescriptors_ResponseParams = WallpaperSearchHandler_GetDescriptors_ResponseParamsMojoType;
export declare interface WallpaperSearchHandler_GetInspirations_ParamsMojoType {
}
export type WallpaperSearchHandler_GetInspirations_Params = WallpaperSearchHandler_GetInspirations_ParamsMojoType;
export declare interface WallpaperSearchHandler_GetInspirations_ResponseParamsMojoType {
    inspirationGroups: (InspirationGroup[] | null);
}
export type WallpaperSearchHandler_GetInspirations_ResponseParams = WallpaperSearchHandler_GetInspirations_ResponseParamsMojoType;
export declare interface WallpaperSearchHandler_GetWallpaperSearchResults_ParamsMojoType {
    resultDescriptors: ResultDescriptors;
}
export type WallpaperSearchHandler_GetWallpaperSearchResults_Params = WallpaperSearchHandler_GetWallpaperSearchResults_ParamsMojoType;
export declare interface WallpaperSearchHandler_GetWallpaperSearchResults_ResponseParamsMojoType {
    status: WallpaperSearchStatus;
    results: WallpaperSearchResult[];
}
export type WallpaperSearchHandler_GetWallpaperSearchResults_ResponseParams = WallpaperSearchHandler_GetWallpaperSearchResults_ResponseParamsMojoType;
export declare interface WallpaperSearchHandler_SetResultRenderTime_ParamsMojoType {
    resultIds: mojoBase_mojom_Token[];
    time: number;
}
export type WallpaperSearchHandler_SetResultRenderTime_Params = WallpaperSearchHandler_SetResultRenderTime_ParamsMojoType;
export declare interface WallpaperSearchHandler_SetBackgroundToHistoryImage_ParamsMojoType {
    resultId: mojoBase_mojom_Token;
    descriptors: ResultDescriptors;
}
export type WallpaperSearchHandler_SetBackgroundToHistoryImage_Params = WallpaperSearchHandler_SetBackgroundToHistoryImage_ParamsMojoType;
export declare interface WallpaperSearchHandler_SetBackgroundToInspirationImage_ParamsMojoType {
    id: mojoBase_mojom_Token;
    backgroundUrl: url_mojom_Url;
}
export type WallpaperSearchHandler_SetBackgroundToInspirationImage_Params = WallpaperSearchHandler_SetBackgroundToInspirationImage_ParamsMojoType;
export declare interface WallpaperSearchHandler_SetBackgroundToWallpaperSearchResult_ParamsMojoType {
    resultId: mojoBase_mojom_Token;
    time: number;
    descriptors: ResultDescriptors;
}
export type WallpaperSearchHandler_SetBackgroundToWallpaperSearchResult_Params = WallpaperSearchHandler_SetBackgroundToWallpaperSearchResult_ParamsMojoType;
export declare interface WallpaperSearchHandler_UpdateHistory_ParamsMojoType {
}
export type WallpaperSearchHandler_UpdateHistory_Params = WallpaperSearchHandler_UpdateHistory_ParamsMojoType;
export declare interface WallpaperSearchHandler_SetUserFeedback_ParamsMojoType {
    selectedOption: UserFeedback;
}
export type WallpaperSearchHandler_SetUserFeedback_Params = WallpaperSearchHandler_SetUserFeedback_ParamsMojoType;
export declare interface WallpaperSearchHandler_OpenHelpArticle_ParamsMojoType {
}
export type WallpaperSearchHandler_OpenHelpArticle_Params = WallpaperSearchHandler_OpenHelpArticle_ParamsMojoType;
export declare interface WallpaperSearchHandler_LaunchHatsSurvey_ParamsMojoType {
}
export type WallpaperSearchHandler_LaunchHatsSurvey_Params = WallpaperSearchHandler_LaunchHatsSurvey_ParamsMojoType;
export declare interface WallpaperSearchClient_SetHistory_ParamsMojoType {
    history: WallpaperSearchResult[];
}
export type WallpaperSearchClient_SetHistory_Params = WallpaperSearchClient_SetHistory_ParamsMojoType;
export declare interface DescriptorDValue {
    color?: skia_mojom_SkColor;
    hue?: number;
    name?: DescriptorDName;
}
export declare enum DescriptorDValueFieldTags {
    COLOR = 0,
    HUE = 1,
    NAME = 2
}
export declare function whichDescriptorDValue(u: DescriptorDValue): DescriptorDValueFieldTags;
export type BrowserProxy = MojoBrowserProxy<WallpaperSearchHandlerInterface, WallpaperSearchClientCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<WallpaperSearchHandlerInterface, WallpaperSearchClientRemote, WallpaperSearchHandlerPendingReceiver, WallpaperSearchClientPendingReceiver, WallpaperSearchClientCallbackRouter, WallpaperSearchHandlerRemote>;
