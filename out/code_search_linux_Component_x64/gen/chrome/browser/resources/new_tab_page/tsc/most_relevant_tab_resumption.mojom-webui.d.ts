import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { URLVisit as ntp_mostRelevantTabResumption_mojom_URLVisit } from './url_visit_types.mojom-webui.js';
export declare const ScoredURLUserActionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ScoredURLUserAction {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kUnknown = 0,
    kSeen = 1,
    kActivated = 2,
    kDismissed = 3
}
export type PageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
export declare class PageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerInterface {
    getURLVisits(): Promise<{
        urlVisits: ntp_mostRelevantTabResumption_mojom_URLVisit[];
    }>;
    dismissURLVisit(urlVisit: ntp_mostRelevantTabResumption_mojom_URLVisit): void;
    restoreURLVisit(urlVisit: ntp_mostRelevantTabResumption_mojom_URLVisit): void;
    recordAction(action: ScoredURLUserAction, urlKey: string, visitRequestId: bigint): void;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    getURLVisits(): Promise<{
        urlVisits: ntp_mostRelevantTabResumption_mojom_URLVisit[];
    }>;
    dismissURLVisit(urlVisit: ntp_mostRelevantTabResumption_mojom_URLVisit): void;
    restoreURLVisit(urlVisit: ntp_mostRelevantTabResumption_mojom_URLVisit): void;
    recordAction(action: ScoredURLUserAction, urlKey: string, visitRequestId: bigint): void;
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
    getURLVisits: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    dismissURLVisit: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(urlVisit: ntp_mostRelevantTabResumption_mojom_URLVisit) => any>;
    restoreURLVisit: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(urlVisit: ntp_mostRelevantTabResumption_mojom_URLVisit) => any>;
    recordAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(action: ScoredURLUserAction, urlKey: string, visitRequestId: bigint) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const PageHandler_GetURLVisits_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetURLVisits_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_DismissURLVisit_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RestoreURLVisit_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface PageHandler_GetURLVisits_ParamsMojoType {
}
export type PageHandler_GetURLVisits_Params = PageHandler_GetURLVisits_ParamsMojoType;
export declare interface PageHandler_GetURLVisits_ResponseParamsMojoType {
    urlVisits: ntp_mostRelevantTabResumption_mojom_URLVisit[];
}
export type PageHandler_GetURLVisits_ResponseParams = PageHandler_GetURLVisits_ResponseParamsMojoType;
export declare interface PageHandler_DismissURLVisit_ParamsMojoType {
    urlVisit: ntp_mostRelevantTabResumption_mojom_URLVisit;
}
export type PageHandler_DismissURLVisit_Params = PageHandler_DismissURLVisit_ParamsMojoType;
export declare interface PageHandler_RestoreURLVisit_ParamsMojoType {
    urlVisit: ntp_mostRelevantTabResumption_mojom_URLVisit;
}
export type PageHandler_RestoreURLVisit_Params = PageHandler_RestoreURLVisit_ParamsMojoType;
export declare interface PageHandler_RecordAction_ParamsMojoType {
    action: ScoredURLUserAction;
    urlKey: string;
    visitRequestId: bigint;
}
export type PageHandler_RecordAction_Params = PageHandler_RecordAction_ParamsMojoType;
