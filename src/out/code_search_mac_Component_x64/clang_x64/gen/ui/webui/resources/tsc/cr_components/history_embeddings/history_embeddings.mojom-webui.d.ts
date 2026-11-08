import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { Time as mojoBase_mojom_Time } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const AnswerStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare enum AnswerStatus {
    MIN_VALUE = 0,
    MAX_VALUE = 7,
    kUnspecified = 0,
    kLoading = 1,
    kSuccess = 2,
    kUnanswerable = 3,
    kModelUnavailable = 4,
    kExecutionFailure = 5,
    kExecutionCanceled = 6,
    kFiltered = 7
}
export declare const UserFeedbackSpec: {
    $: mojo.internal.MojomType;
};
export declare enum UserFeedback {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kUserFeedbackUnspecified = 0,
    kUserFeedbackNegative = 1,
    kUserFeedbackPositive = 2
}
export type PageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
export declare class PageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerFactoryInterface {
    createPageHandler(page: PageRemote, handler: PageHandlerPendingReceiver): void;
}
export declare class PageHandlerFactoryRemote implements PageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(page: PageRemote, handler: PageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the PageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PageHandlerFactoryInterface);
}
export declare class PageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the PageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerFactoryRemote, PageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: PageRemote, handler: PageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type PageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
export declare class PageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerInterface {
    search(query: SearchQuery): void;
    sendQualityLog(selectedIndices: number[], numEnteredChars: number): void;
    recordSearchResultsMetrics(nonEmptyResults: boolean, userClickedResult: boolean, answerShown: boolean, answerCitationClicked: boolean, otherHistoryResultClicked: boolean, queryWordCount: number): void;
    setUserFeedback(feedback: UserFeedback): void;
    openSettingsPage(): void;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    search(query: SearchQuery): void;
    sendQualityLog(selectedIndices: number[], numEnteredChars: number): void;
    recordSearchResultsMetrics(nonEmptyResults: boolean, userClickedResult: boolean, answerShown: boolean, answerCitationClicked: boolean, otherHistoryResultClicked: boolean, queryWordCount: number): void;
    setUserFeedback(feedback: UserFeedback): void;
    openSettingsPage(): void;
}
/**
 * An object which receives request messages for the PageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PageHandlerRemote, PageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerRemote, PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PageHandlerInterface);
}
export declare class PageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PageHandlerRemote;
}
/**
 * An object which receives request messages for the PageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PageHandlerRemote, PageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageHandlerRemote, PageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    search: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(query: SearchQuery) => any>;
    sendQualityLog: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(selectedIndices: number[], numEnteredChars: number) => any>;
    recordSearchResultsMetrics: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(nonEmptyResults: boolean, userClickedResult: boolean, answerShown: boolean, answerCitationClicked: boolean, otherHistoryResultClicked: boolean, queryWordCount: number) => any>;
    setUserFeedback: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(feedback: UserFeedback) => any>;
    openSettingsPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type PagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PagePendingReceiver>;
export declare class PagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<Page> {
    handle: mojo.internal.interfaceSupport.Endpoint<PagePendingReceiver>;
    constructor(handle: MojoHandle | PagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageInterface {
    searchResultChanged(result: SearchResult): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    searchResultChanged(result: SearchResult): void;
}
/**
 * An object which receives request messages for the Page
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PageRemote, PagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageRemote, PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PageInterface);
}
export declare class Page {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PageRemote;
}
/**
 * An object which receives request messages for the Page
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PageRemote, PagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PageRemote, PagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    searchResultChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(result: SearchResult) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const AnswerDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const SearchResultItemSpec: {
    $: mojo.internal.MojomType;
};
export declare const SearchQuerySpec: {
    $: mojo.internal.MojomType;
};
export declare const SearchResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_Search_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SendQualityLog_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordSearchResultsMetrics_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetUserFeedback_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenSettingsPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SearchResultChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface AnswerDataMojoType {
    answerTextDirectives: string[];
}
export type AnswerData = AnswerDataMojoType;
export declare interface SearchResultItemMojoType {
    title: string;
    url: url_mojom_Url;
    urlForDisplay: string;
    relativeTime: string;
    shortDateTime: string;
    lastUrlVisitTimestamp: number;
    sourcePassage: string;
    answerData: (AnswerData | null);
    isUrlKnownToSync: boolean;
}
export type SearchResultItem = SearchResultItemMojoType;
export declare interface SearchQueryMojoType {
    query: string;
    timeRangeStart: (mojoBase_mojom_Time | null);
}
export type SearchQuery = SearchQueryMojoType;
export declare interface SearchResultMojoType {
    query: string;
    answerStatus: AnswerStatus;
    answer: string;
    items: SearchResultItem[];
}
export type SearchResult = SearchResultMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: PageRemote;
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandler_Search_ParamsMojoType {
    query: SearchQuery;
}
export type PageHandler_Search_Params = PageHandler_Search_ParamsMojoType;
export declare interface PageHandler_SendQualityLog_ParamsMojoType {
    selectedIndices: number[];
    numEnteredChars: number;
}
export type PageHandler_SendQualityLog_Params = PageHandler_SendQualityLog_ParamsMojoType;
export declare interface PageHandler_RecordSearchResultsMetrics_ParamsMojoType {
    nonEmptyResults: boolean;
    userClickedResult: boolean;
    answerShown: boolean;
    answerCitationClicked: boolean;
    otherHistoryResultClicked: boolean;
    queryWordCount: number;
}
export type PageHandler_RecordSearchResultsMetrics_Params = PageHandler_RecordSearchResultsMetrics_ParamsMojoType;
export declare interface PageHandler_SetUserFeedback_ParamsMojoType {
    feedback: UserFeedback;
}
export type PageHandler_SetUserFeedback_Params = PageHandler_SetUserFeedback_ParamsMojoType;
export declare interface PageHandler_OpenSettingsPage_ParamsMojoType {
}
export type PageHandler_OpenSettingsPage_Params = PageHandler_OpenSettingsPage_ParamsMojoType;
export declare interface Page_SearchResultChanged_ParamsMojoType {
    result: SearchResult;
}
export type Page_SearchResultChanged_Params = Page_SearchResultChanged_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, PageRemote, PageHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PageHandlerRemote>;
