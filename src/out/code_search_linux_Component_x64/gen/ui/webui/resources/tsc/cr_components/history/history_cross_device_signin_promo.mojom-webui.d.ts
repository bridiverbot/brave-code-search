import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export type HistoryCrossDeviceSigninPromoHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<HistoryCrossDeviceSigninPromoHandlerPendingReceiver>;
export declare class HistoryCrossDeviceSigninPromoHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<HistoryCrossDeviceSigninPromoHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<HistoryCrossDeviceSigninPromoHandlerPendingReceiver>;
    constructor(handle: MojoHandle | HistoryCrossDeviceSigninPromoHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface HistoryCrossDeviceSigninPromoHandlerInterface {
    shouldShowPromoCard(): Promise<{
        shouldShow: boolean;
    }>;
    onPromoCardShown(): void;
    onPromoCardDismissed(): void;
    onPromoCardActionClicked(): Promise<void>;
    setPage(page: HistoryCrossDeviceSigninPromoPageRemote): void;
}
export declare class HistoryCrossDeviceSigninPromoHandlerRemote implements HistoryCrossDeviceSigninPromoHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<HistoryCrossDeviceSigninPromoHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<HistoryCrossDeviceSigninPromoHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | HistoryCrossDeviceSigninPromoHandlerPendingReceiverEndpoint);
    shouldShowPromoCard(): Promise<{
        shouldShow: boolean;
    }>;
    onPromoCardShown(): void;
    onPromoCardDismissed(): void;
    onPromoCardActionClicked(): Promise<void>;
    setPage(page: HistoryCrossDeviceSigninPromoPageRemote): void;
}
/**
 * An object which receives request messages for the HistoryCrossDeviceSigninPromoHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class HistoryCrossDeviceSigninPromoHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<HistoryCrossDeviceSigninPromoHandlerRemote, HistoryCrossDeviceSigninPromoHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<HistoryCrossDeviceSigninPromoHandlerRemote, HistoryCrossDeviceSigninPromoHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: HistoryCrossDeviceSigninPromoHandlerInterface);
}
export declare class HistoryCrossDeviceSigninPromoHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): HistoryCrossDeviceSigninPromoHandlerRemote;
}
/**
 * An object which receives request messages for the HistoryCrossDeviceSigninPromoHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class HistoryCrossDeviceSigninPromoHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<HistoryCrossDeviceSigninPromoHandlerRemote, HistoryCrossDeviceSigninPromoHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<HistoryCrossDeviceSigninPromoHandlerRemote, HistoryCrossDeviceSigninPromoHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    shouldShowPromoCard: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onPromoCardShown: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onPromoCardDismissed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onPromoCardActionClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: HistoryCrossDeviceSigninPromoPageRemote) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type HistoryCrossDeviceSigninPromoPagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<HistoryCrossDeviceSigninPromoPagePendingReceiver>;
export declare class HistoryCrossDeviceSigninPromoPagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<HistoryCrossDeviceSigninPromoPage> {
    handle: mojo.internal.interfaceSupport.Endpoint<HistoryCrossDeviceSigninPromoPagePendingReceiver>;
    constructor(handle: MojoHandle | HistoryCrossDeviceSigninPromoPagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface HistoryCrossDeviceSigninPromoPageInterface {
    onPromoBubbleStateChanged(isOpen: boolean): void;
    hidePromoCard(): void;
}
export declare class HistoryCrossDeviceSigninPromoPageRemote implements HistoryCrossDeviceSigninPromoPageInterface, mojo.internal.interfaceSupport.InterfaceRemote<HistoryCrossDeviceSigninPromoPagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<HistoryCrossDeviceSigninPromoPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | HistoryCrossDeviceSigninPromoPagePendingReceiverEndpoint);
    onPromoBubbleStateChanged(isOpen: boolean): void;
    hidePromoCard(): void;
}
/**
 * An object which receives request messages for the HistoryCrossDeviceSigninPromoPage
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class HistoryCrossDeviceSigninPromoPageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<HistoryCrossDeviceSigninPromoPageRemote, HistoryCrossDeviceSigninPromoPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<HistoryCrossDeviceSigninPromoPageRemote, HistoryCrossDeviceSigninPromoPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: HistoryCrossDeviceSigninPromoPageInterface);
}
export declare class HistoryCrossDeviceSigninPromoPage {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): HistoryCrossDeviceSigninPromoPageRemote;
}
/**
 * An object which receives request messages for the HistoryCrossDeviceSigninPromoPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class HistoryCrossDeviceSigninPromoPageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<HistoryCrossDeviceSigninPromoPageRemote, HistoryCrossDeviceSigninPromoPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<HistoryCrossDeviceSigninPromoPageRemote, HistoryCrossDeviceSigninPromoPagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onPromoBubbleStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isOpen: boolean) => any>;
    hidePromoCard: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const HistoryCrossDeviceSigninPromoHandler_ShouldShowPromoCard_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const HistoryCrossDeviceSigninPromoHandler_ShouldShowPromoCard_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const HistoryCrossDeviceSigninPromoHandler_OnPromoCardShown_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const HistoryCrossDeviceSigninPromoHandler_OnPromoCardDismissed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const HistoryCrossDeviceSigninPromoHandler_OnPromoCardActionClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const HistoryCrossDeviceSigninPromoHandler_OnPromoCardActionClicked_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const HistoryCrossDeviceSigninPromoHandler_SetPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const HistoryCrossDeviceSigninPromoPage_OnPromoBubbleStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const HistoryCrossDeviceSigninPromoPage_HidePromoCard_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface HistoryCrossDeviceSigninPromoHandler_ShouldShowPromoCard_ParamsMojoType {
}
export type HistoryCrossDeviceSigninPromoHandler_ShouldShowPromoCard_Params = HistoryCrossDeviceSigninPromoHandler_ShouldShowPromoCard_ParamsMojoType;
export declare interface HistoryCrossDeviceSigninPromoHandler_ShouldShowPromoCard_ResponseParamsMojoType {
    shouldShow: boolean;
}
export type HistoryCrossDeviceSigninPromoHandler_ShouldShowPromoCard_ResponseParams = HistoryCrossDeviceSigninPromoHandler_ShouldShowPromoCard_ResponseParamsMojoType;
export declare interface HistoryCrossDeviceSigninPromoHandler_OnPromoCardShown_ParamsMojoType {
}
export type HistoryCrossDeviceSigninPromoHandler_OnPromoCardShown_Params = HistoryCrossDeviceSigninPromoHandler_OnPromoCardShown_ParamsMojoType;
export declare interface HistoryCrossDeviceSigninPromoHandler_OnPromoCardDismissed_ParamsMojoType {
}
export type HistoryCrossDeviceSigninPromoHandler_OnPromoCardDismissed_Params = HistoryCrossDeviceSigninPromoHandler_OnPromoCardDismissed_ParamsMojoType;
export declare interface HistoryCrossDeviceSigninPromoHandler_OnPromoCardActionClicked_ParamsMojoType {
}
export type HistoryCrossDeviceSigninPromoHandler_OnPromoCardActionClicked_Params = HistoryCrossDeviceSigninPromoHandler_OnPromoCardActionClicked_ParamsMojoType;
export declare interface HistoryCrossDeviceSigninPromoHandler_OnPromoCardActionClicked_ResponseParamsMojoType {
}
export type HistoryCrossDeviceSigninPromoHandler_OnPromoCardActionClicked_ResponseParams = HistoryCrossDeviceSigninPromoHandler_OnPromoCardActionClicked_ResponseParamsMojoType;
export declare interface HistoryCrossDeviceSigninPromoHandler_SetPage_ParamsMojoType {
    page: HistoryCrossDeviceSigninPromoPageRemote;
}
export type HistoryCrossDeviceSigninPromoHandler_SetPage_Params = HistoryCrossDeviceSigninPromoHandler_SetPage_ParamsMojoType;
export declare interface HistoryCrossDeviceSigninPromoPage_OnPromoBubbleStateChanged_ParamsMojoType {
    isOpen: boolean;
}
export type HistoryCrossDeviceSigninPromoPage_OnPromoBubbleStateChanged_Params = HistoryCrossDeviceSigninPromoPage_OnPromoBubbleStateChanged_ParamsMojoType;
export declare interface HistoryCrossDeviceSigninPromoPage_HidePromoCard_ParamsMojoType {
}
export type HistoryCrossDeviceSigninPromoPage_HidePromoCard_Params = HistoryCrossDeviceSigninPromoPage_HidePromoCard_ParamsMojoType;
