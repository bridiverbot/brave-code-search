import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
export declare const ColorSchemeModeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ColorSchemeMode {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kSystem = 0,
    kLight = 1,
    kDark = 2
}
export type CustomizeColorSchemeModeHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CustomizeColorSchemeModeHandlerFactoryPendingReceiver>;
export declare class CustomizeColorSchemeModeHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CustomizeColorSchemeModeHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<CustomizeColorSchemeModeHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | CustomizeColorSchemeModeHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CustomizeColorSchemeModeHandlerFactoryInterface {
    createCustomizeColorSchemeModeHandler(pendingClient: CustomizeColorSchemeModeClientRemote, pendingHandler: CustomizeColorSchemeModeHandlerPendingReceiver): void;
}
export declare class CustomizeColorSchemeModeHandlerFactoryRemote implements CustomizeColorSchemeModeHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<CustomizeColorSchemeModeHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CustomizeColorSchemeModeHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CustomizeColorSchemeModeHandlerFactoryPendingReceiverEndpoint);
    createCustomizeColorSchemeModeHandler(pendingClient: CustomizeColorSchemeModeClientRemote, pendingHandler: CustomizeColorSchemeModeHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the CustomizeColorSchemeModeHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CustomizeColorSchemeModeHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CustomizeColorSchemeModeHandlerFactoryRemote, CustomizeColorSchemeModeHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeColorSchemeModeHandlerFactoryRemote, CustomizeColorSchemeModeHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CustomizeColorSchemeModeHandlerFactoryInterface);
}
export declare class CustomizeColorSchemeModeHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CustomizeColorSchemeModeHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the CustomizeColorSchemeModeHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CustomizeColorSchemeModeHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CustomizeColorSchemeModeHandlerFactoryRemote, CustomizeColorSchemeModeHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeColorSchemeModeHandlerFactoryRemote, CustomizeColorSchemeModeHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createCustomizeColorSchemeModeHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(pendingClient: CustomizeColorSchemeModeClientRemote, pendingHandler: CustomizeColorSchemeModeHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type CustomizeColorSchemeModeHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CustomizeColorSchemeModeHandlerPendingReceiver>;
export declare class CustomizeColorSchemeModeHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CustomizeColorSchemeModeHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<CustomizeColorSchemeModeHandlerPendingReceiver>;
    constructor(handle: MojoHandle | CustomizeColorSchemeModeHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CustomizeColorSchemeModeHandlerInterface {
    setColorSchemeMode(colorSchemeMode: ColorSchemeMode): void;
    initializeColorSchemeMode(): void;
}
export declare class CustomizeColorSchemeModeHandlerRemote implements CustomizeColorSchemeModeHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<CustomizeColorSchemeModeHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CustomizeColorSchemeModeHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CustomizeColorSchemeModeHandlerPendingReceiverEndpoint);
    setColorSchemeMode(colorSchemeMode: ColorSchemeMode): void;
    initializeColorSchemeMode(): void;
}
/**
 * An object which receives request messages for the CustomizeColorSchemeModeHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CustomizeColorSchemeModeHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CustomizeColorSchemeModeHandlerRemote, CustomizeColorSchemeModeHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeColorSchemeModeHandlerRemote, CustomizeColorSchemeModeHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CustomizeColorSchemeModeHandlerInterface);
}
export declare class CustomizeColorSchemeModeHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CustomizeColorSchemeModeHandlerRemote;
}
/**
 * An object which receives request messages for the CustomizeColorSchemeModeHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CustomizeColorSchemeModeHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CustomizeColorSchemeModeHandlerRemote, CustomizeColorSchemeModeHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeColorSchemeModeHandlerRemote, CustomizeColorSchemeModeHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    setColorSchemeMode: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(colorSchemeMode: ColorSchemeMode) => any>;
    initializeColorSchemeMode: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type CustomizeColorSchemeModeClientPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CustomizeColorSchemeModeClientPendingReceiver>;
export declare class CustomizeColorSchemeModeClientPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CustomizeColorSchemeModeClient> {
    handle: mojo.internal.interfaceSupport.Endpoint<CustomizeColorSchemeModeClientPendingReceiver>;
    constructor(handle: MojoHandle | CustomizeColorSchemeModeClientPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CustomizeColorSchemeModeClientInterface {
    setColorSchemeMode(colorSchemeMode: ColorSchemeMode): void;
}
export declare class CustomizeColorSchemeModeClientRemote implements CustomizeColorSchemeModeClientInterface, mojo.internal.interfaceSupport.InterfaceRemote<CustomizeColorSchemeModeClientPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CustomizeColorSchemeModeClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CustomizeColorSchemeModeClientPendingReceiverEndpoint);
    setColorSchemeMode(colorSchemeMode: ColorSchemeMode): void;
}
/**
 * An object which receives request messages for the CustomizeColorSchemeModeClient
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CustomizeColorSchemeModeClientReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CustomizeColorSchemeModeClientRemote, CustomizeColorSchemeModeClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeColorSchemeModeClientRemote, CustomizeColorSchemeModeClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CustomizeColorSchemeModeClientInterface);
}
export declare class CustomizeColorSchemeModeClient {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CustomizeColorSchemeModeClientRemote;
}
/**
 * An object which receives request messages for the CustomizeColorSchemeModeClient
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CustomizeColorSchemeModeClientCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CustomizeColorSchemeModeClientRemote, CustomizeColorSchemeModeClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeColorSchemeModeClientRemote, CustomizeColorSchemeModeClientPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    setColorSchemeMode: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(colorSchemeMode: ColorSchemeMode) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const CustomizeColorSchemeModeHandlerFactory_CreateCustomizeColorSchemeModeHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeColorSchemeModeHandler_SetColorSchemeMode_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeColorSchemeModeHandler_InitializeColorSchemeMode_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeColorSchemeModeClient_SetColorSchemeMode_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface CustomizeColorSchemeModeHandlerFactory_CreateCustomizeColorSchemeModeHandler_ParamsMojoType {
    pendingClient: CustomizeColorSchemeModeClientRemote;
    pendingHandler: CustomizeColorSchemeModeHandlerPendingReceiver;
}
export type CustomizeColorSchemeModeHandlerFactory_CreateCustomizeColorSchemeModeHandler_Params = CustomizeColorSchemeModeHandlerFactory_CreateCustomizeColorSchemeModeHandler_ParamsMojoType;
export declare interface CustomizeColorSchemeModeHandler_SetColorSchemeMode_ParamsMojoType {
    colorSchemeMode: ColorSchemeMode;
}
export type CustomizeColorSchemeModeHandler_SetColorSchemeMode_Params = CustomizeColorSchemeModeHandler_SetColorSchemeMode_ParamsMojoType;
export declare interface CustomizeColorSchemeModeHandler_InitializeColorSchemeMode_ParamsMojoType {
}
export type CustomizeColorSchemeModeHandler_InitializeColorSchemeMode_Params = CustomizeColorSchemeModeHandler_InitializeColorSchemeMode_ParamsMojoType;
export declare interface CustomizeColorSchemeModeClient_SetColorSchemeMode_ParamsMojoType {
    colorSchemeMode: ColorSchemeMode;
}
export type CustomizeColorSchemeModeClient_SetColorSchemeMode_Params = CustomizeColorSchemeModeClient_SetColorSchemeMode_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<CustomizeColorSchemeModeHandlerInterface, CustomizeColorSchemeModeClientCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<CustomizeColorSchemeModeHandlerInterface, CustomizeColorSchemeModeClientRemote, CustomizeColorSchemeModeHandlerPendingReceiver, CustomizeColorSchemeModeClientPendingReceiver, CustomizeColorSchemeModeClientCallbackRouter, CustomizeColorSchemeModeHandlerRemote>;
