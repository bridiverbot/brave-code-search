import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export type ExplainFulfillmentPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ExplainFulfillmentPendingReceiver>;
export declare class ExplainFulfillmentPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ExplainFulfillment> {
    handle: mojo.internal.interfaceSupport.Endpoint<ExplainFulfillmentPendingReceiver>;
    constructor(handle: MojoHandle | ExplainFulfillmentPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ExplainFulfillmentInterface {
    getExplanation(): Promise<{
        explanation: string;
    }>;
    openTabForSearch(query: string): void;
    askGemini(): void;
}
export declare class ExplainFulfillmentRemote implements ExplainFulfillmentInterface, mojo.internal.interfaceSupport.InterfaceRemote<ExplainFulfillmentPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ExplainFulfillmentPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ExplainFulfillmentPendingReceiverEndpoint);
    getExplanation(): Promise<{
        explanation: string;
    }>;
    openTabForSearch(query: string): void;
    askGemini(): void;
}
/**
 * An object which receives request messages for the ExplainFulfillment
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ExplainFulfillmentReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ExplainFulfillmentRemote, ExplainFulfillmentPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ExplainFulfillmentRemote, ExplainFulfillmentPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ExplainFulfillmentInterface);
}
export declare class ExplainFulfillment {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ExplainFulfillmentRemote;
}
/**
 * An object which receives request messages for the ExplainFulfillment
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ExplainFulfillmentCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ExplainFulfillmentRemote, ExplainFulfillmentPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ExplainFulfillmentRemote, ExplainFulfillmentPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getExplanation: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openTabForSearch: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(query: string) => any>;
    askGemini: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const ExplainFulfillment_GetExplanation_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExplainFulfillment_GetExplanation_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExplainFulfillment_OpenTabForSearch_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExplainFulfillment_AskGemini_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ExplainFulfillment_GetExplanation_ParamsMojoType {
}
export type ExplainFulfillment_GetExplanation_Params = ExplainFulfillment_GetExplanation_ParamsMojoType;
export declare interface ExplainFulfillment_GetExplanation_ResponseParamsMojoType {
    explanation: string;
}
export type ExplainFulfillment_GetExplanation_ResponseParams = ExplainFulfillment_GetExplanation_ResponseParamsMojoType;
export declare interface ExplainFulfillment_OpenTabForSearch_ParamsMojoType {
    query: string;
}
export type ExplainFulfillment_OpenTabForSearch_Params = ExplainFulfillment_OpenTabForSearch_ParamsMojoType;
export declare interface ExplainFulfillment_AskGemini_ParamsMojoType {
}
export type ExplainFulfillment_AskGemini_Params = ExplainFulfillment_AskGemini_ParamsMojoType;
