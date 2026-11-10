import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '//resources/mojo/mojo_browser_proxy.js';
export type ThemesAndCustomizationPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ThemesAndCustomizationPageHandlerPendingReceiver>;
export declare class ThemesAndCustomizationPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ThemesAndCustomizationPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<ThemesAndCustomizationPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | ThemesAndCustomizationPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ThemesAndCustomizationPageHandlerInterface {
    snapshotTheme(): void;
    acceptTheme(): void;
    revertTheme(): void;
}
export declare class ThemesAndCustomizationPageHandlerRemote implements ThemesAndCustomizationPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<ThemesAndCustomizationPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ThemesAndCustomizationPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ThemesAndCustomizationPageHandlerPendingReceiverEndpoint);
    snapshotTheme(): void;
    acceptTheme(): void;
    revertTheme(): void;
}
/**
 * An object which receives request messages for the ThemesAndCustomizationPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ThemesAndCustomizationPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ThemesAndCustomizationPageHandlerRemote, ThemesAndCustomizationPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ThemesAndCustomizationPageHandlerRemote, ThemesAndCustomizationPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ThemesAndCustomizationPageHandlerInterface);
}
export declare class ThemesAndCustomizationPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ThemesAndCustomizationPageHandlerRemote;
}
/**
 * An object which receives request messages for the ThemesAndCustomizationPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ThemesAndCustomizationPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ThemesAndCustomizationPageHandlerRemote, ThemesAndCustomizationPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ThemesAndCustomizationPageHandlerRemote, ThemesAndCustomizationPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    snapshotTheme: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    acceptTheme: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    revertTheme: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ThemesAndCustomizationPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ThemesAndCustomizationPageHandlerFactoryPendingReceiver>;
export declare class ThemesAndCustomizationPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ThemesAndCustomizationPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<ThemesAndCustomizationPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | ThemesAndCustomizationPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ThemesAndCustomizationPageHandlerFactoryInterface {
    createThemesAndCustomizationPageHandler(handler: ThemesAndCustomizationPageHandlerPendingReceiver): void;
}
export declare class ThemesAndCustomizationPageHandlerFactoryRemote implements ThemesAndCustomizationPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<ThemesAndCustomizationPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ThemesAndCustomizationPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ThemesAndCustomizationPageHandlerFactoryPendingReceiverEndpoint);
    createThemesAndCustomizationPageHandler(handler: ThemesAndCustomizationPageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the ThemesAndCustomizationPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ThemesAndCustomizationPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ThemesAndCustomizationPageHandlerFactoryRemote, ThemesAndCustomizationPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ThemesAndCustomizationPageHandlerFactoryRemote, ThemesAndCustomizationPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ThemesAndCustomizationPageHandlerFactoryInterface);
}
export declare class ThemesAndCustomizationPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ThemesAndCustomizationPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the ThemesAndCustomizationPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ThemesAndCustomizationPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ThemesAndCustomizationPageHandlerFactoryRemote, ThemesAndCustomizationPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ThemesAndCustomizationPageHandlerFactoryRemote, ThemesAndCustomizationPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createThemesAndCustomizationPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: ThemesAndCustomizationPageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const ThemesAndCustomizationPageHandler_SnapshotTheme_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ThemesAndCustomizationPageHandler_AcceptTheme_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ThemesAndCustomizationPageHandler_RevertTheme_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ThemesAndCustomizationPageHandlerFactory_CreateThemesAndCustomizationPageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ThemesAndCustomizationPageHandler_SnapshotTheme_ParamsMojoType {
}
export type ThemesAndCustomizationPageHandler_SnapshotTheme_Params = ThemesAndCustomizationPageHandler_SnapshotTheme_ParamsMojoType;
export declare interface ThemesAndCustomizationPageHandler_AcceptTheme_ParamsMojoType {
}
export type ThemesAndCustomizationPageHandler_AcceptTheme_Params = ThemesAndCustomizationPageHandler_AcceptTheme_ParamsMojoType;
export declare interface ThemesAndCustomizationPageHandler_RevertTheme_ParamsMojoType {
}
export type ThemesAndCustomizationPageHandler_RevertTheme_Params = ThemesAndCustomizationPageHandler_RevertTheme_ParamsMojoType;
export declare interface ThemesAndCustomizationPageHandlerFactory_CreateThemesAndCustomizationPageHandler_ParamsMojoType {
    handler: ThemesAndCustomizationPageHandlerPendingReceiver;
}
export type ThemesAndCustomizationPageHandlerFactory_CreateThemesAndCustomizationPageHandler_Params = ThemesAndCustomizationPageHandlerFactory_CreateThemesAndCustomizationPageHandler_ParamsMojoType;
export type BrowserProxy = MojoHandlerProxy<ThemesAndCustomizationPageHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<ThemesAndCustomizationPageHandlerInterface, ThemesAndCustomizationPageHandlerPendingReceiver, ThemesAndCustomizationPageHandlerRemote>;
