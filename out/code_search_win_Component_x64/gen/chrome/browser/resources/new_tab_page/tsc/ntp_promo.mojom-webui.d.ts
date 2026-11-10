import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
export declare const ShowNtpPromosResultSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ShowNtpPromosResult {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kShown = 0,
    kNotShownNoPromos = 1,
    kNotShownDueToPolicy = 2
}
export type NtpPromoHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<NtpPromoHandlerPendingReceiver>;
export declare class NtpPromoHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<NtpPromoHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<NtpPromoHandlerPendingReceiver>;
    constructor(handle: MojoHandle | NtpPromoHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface NtpPromoHandlerInterface {
    requestPromos(): void;
    onPromoShown(promoId: string): void;
    onPromoClicked(promoId: string): void;
    onPromoDismissed(promoId: string): void;
}
export declare class NtpPromoHandlerRemote implements NtpPromoHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<NtpPromoHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<NtpPromoHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | NtpPromoHandlerPendingReceiverEndpoint);
    requestPromos(): void;
    onPromoShown(promoId: string): void;
    onPromoClicked(promoId: string): void;
    onPromoDismissed(promoId: string): void;
}
/**
 * An object which receives request messages for the NtpPromoHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class NtpPromoHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<NtpPromoHandlerRemote, NtpPromoHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<NtpPromoHandlerRemote, NtpPromoHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: NtpPromoHandlerInterface);
}
export declare class NtpPromoHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): NtpPromoHandlerRemote;
}
/**
 * An object which receives request messages for the NtpPromoHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class NtpPromoHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<NtpPromoHandlerRemote, NtpPromoHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<NtpPromoHandlerRemote, NtpPromoHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    requestPromos: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onPromoShown: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(promoId: string) => any>;
    onPromoClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(promoId: string) => any>;
    onPromoDismissed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(promoId: string) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type NtpPromoClientPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<NtpPromoClientPendingReceiver>;
export declare class NtpPromoClientPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<NtpPromoClient> {
    handle: mojo.internal.interfaceSupport.Endpoint<NtpPromoClientPendingReceiver>;
    constructor(handle: MojoHandle | NtpPromoClientPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface NtpPromoClientInterface {
    setPromo(promo: (Promo | null)): void;
}
export declare class NtpPromoClientRemote implements NtpPromoClientInterface, mojo.internal.interfaceSupport.InterfaceRemote<NtpPromoClientPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<NtpPromoClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | NtpPromoClientPendingReceiverEndpoint);
    setPromo(promo: (Promo | null)): void;
}
/**
 * An object which receives request messages for the NtpPromoClient
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class NtpPromoClientReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<NtpPromoClientRemote, NtpPromoClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<NtpPromoClientRemote, NtpPromoClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: NtpPromoClientInterface);
}
export declare class NtpPromoClient {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): NtpPromoClientRemote;
}
/**
 * An object which receives request messages for the NtpPromoClient
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class NtpPromoClientCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<NtpPromoClientRemote, NtpPromoClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<NtpPromoClientRemote, NtpPromoClientPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    setPromo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(promo: (Promo | null)) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type NtpPromoHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<NtpPromoHandlerFactoryPendingReceiver>;
export declare class NtpPromoHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<NtpPromoHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<NtpPromoHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | NtpPromoHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface NtpPromoHandlerFactoryInterface {
    createNtpPromoHandler(client: NtpPromoClientRemote, handler: NtpPromoHandlerPendingReceiver): void;
}
export declare class NtpPromoHandlerFactoryRemote implements NtpPromoHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<NtpPromoHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<NtpPromoHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | NtpPromoHandlerFactoryPendingReceiverEndpoint);
    createNtpPromoHandler(client: NtpPromoClientRemote, handler: NtpPromoHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the NtpPromoHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class NtpPromoHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<NtpPromoHandlerFactoryRemote, NtpPromoHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<NtpPromoHandlerFactoryRemote, NtpPromoHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: NtpPromoHandlerFactoryInterface);
}
export declare class NtpPromoHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): NtpPromoHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the NtpPromoHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class NtpPromoHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<NtpPromoHandlerFactoryRemote, NtpPromoHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<NtpPromoHandlerFactoryRemote, NtpPromoHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createNtpPromoHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(client: NtpPromoClientRemote, handler: NtpPromoHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const PromoSpec: {
    $: mojo.internal.MojomType;
};
export declare const NtpPromoHandler_RequestPromos_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const NtpPromoHandler_OnPromoShown_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const NtpPromoHandler_OnPromoClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const NtpPromoHandler_OnPromoDismissed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const NtpPromoClient_SetPromo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const NtpPromoHandlerFactory_CreateNtpPromoHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface PromoMojoType {
    id: string;
    iconName: string;
    bodyText: string;
    buttonText: string;
}
export type Promo = PromoMojoType;
export declare interface NtpPromoHandler_RequestPromos_ParamsMojoType {
}
export type NtpPromoHandler_RequestPromos_Params = NtpPromoHandler_RequestPromos_ParamsMojoType;
export declare interface NtpPromoHandler_OnPromoShown_ParamsMojoType {
    promoId: string;
}
export type NtpPromoHandler_OnPromoShown_Params = NtpPromoHandler_OnPromoShown_ParamsMojoType;
export declare interface NtpPromoHandler_OnPromoClicked_ParamsMojoType {
    promoId: string;
}
export type NtpPromoHandler_OnPromoClicked_Params = NtpPromoHandler_OnPromoClicked_ParamsMojoType;
export declare interface NtpPromoHandler_OnPromoDismissed_ParamsMojoType {
    promoId: string;
}
export type NtpPromoHandler_OnPromoDismissed_Params = NtpPromoHandler_OnPromoDismissed_ParamsMojoType;
export declare interface NtpPromoClient_SetPromo_ParamsMojoType {
    promo: (Promo | null);
}
export type NtpPromoClient_SetPromo_Params = NtpPromoClient_SetPromo_ParamsMojoType;
export declare interface NtpPromoHandlerFactory_CreateNtpPromoHandler_ParamsMojoType {
    client: NtpPromoClientRemote;
    handler: NtpPromoHandlerPendingReceiver;
}
export type NtpPromoHandlerFactory_CreateNtpPromoHandler_Params = NtpPromoHandlerFactory_CreateNtpPromoHandler_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<NtpPromoHandlerInterface, NtpPromoClientCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<NtpPromoHandlerInterface, NtpPromoClientRemote, NtpPromoHandlerPendingReceiver, NtpPromoClientPendingReceiver, NtpPromoClientCallbackRouter, NtpPromoHandlerRemote>;
