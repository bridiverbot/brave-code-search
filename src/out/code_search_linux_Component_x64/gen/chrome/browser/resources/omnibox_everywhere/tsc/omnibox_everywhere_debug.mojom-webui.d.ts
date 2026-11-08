import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
export declare const InvocationSourceSpec: {
    $: mojo.internal.MojomType;
};
export declare enum InvocationSource {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kGlobalHotkey = 0,
    kProfilePicker = 1
}
export type PagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PagePendingReceiver>;
export declare class PagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<Page> {
    handle: mojo.internal.interfaceSupport.Endpoint<PagePendingReceiver>;
    constructor(handle: MojoHandle | PagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageInterface {
    onBackgroundModeChanged(enabled: boolean): void;
    onHotkeyChanged(enabled: boolean): void;
    onEphemeralModelChanged(enabled: boolean): void;
    onLaunchOnStartupChanged(enabled: boolean): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    onBackgroundModeChanged(enabled: boolean): void;
    onHotkeyChanged(enabled: boolean): void;
    onEphemeralModelChanged(enabled: boolean): void;
    onLaunchOnStartupChanged(enabled: boolean): void;
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
    onBackgroundModeChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    onHotkeyChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    onEphemeralModelChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    onLaunchOnStartupChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
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
    setBackgroundModeEnabled(enabled: boolean): void;
    getBackgroundModeEnabled(): Promise<{
        enabled: boolean;
    }>;
    setLaunchOnStartupEnabled(enabled: boolean): void;
    getLaunchOnStartupEnabled(): Promise<{
        enabled: boolean;
    }>;
    setHotkeyEnabled(enabled: boolean): void;
    getHotkeyEnabled(): Promise<{
        enabled: boolean;
    }>;
    setEphemeralModelEnabled(enabled: boolean): void;
    getEphemeralModelEnabled(): Promise<{
        enabled: boolean;
    }>;
    invokeOmniboxEverywhere(source: InvocationSource): void;
    showLensIph(): void;
    createStartMenuShortcut(): Promise<{
        success: boolean;
    }>;
    pinToTaskbar(): Promise<{
        success: boolean;
    }>;
    resetProfilePrefs(): Promise<{
        success: boolean;
    }>;
    resetAllPrefs(): Promise<{
        success: boolean;
    }>;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    setBackgroundModeEnabled(enabled: boolean): void;
    getBackgroundModeEnabled(): Promise<{
        enabled: boolean;
    }>;
    setLaunchOnStartupEnabled(enabled: boolean): void;
    getLaunchOnStartupEnabled(): Promise<{
        enabled: boolean;
    }>;
    setHotkeyEnabled(enabled: boolean): void;
    getHotkeyEnabled(): Promise<{
        enabled: boolean;
    }>;
    setEphemeralModelEnabled(enabled: boolean): void;
    getEphemeralModelEnabled(): Promise<{
        enabled: boolean;
    }>;
    invokeOmniboxEverywhere(source: InvocationSource): void;
    showLensIph(): void;
    createStartMenuShortcut(): Promise<{
        success: boolean;
    }>;
    pinToTaskbar(): Promise<{
        success: boolean;
    }>;
    resetProfilePrefs(): Promise<{
        success: boolean;
    }>;
    resetAllPrefs(): Promise<{
        success: boolean;
    }>;
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
    setBackgroundModeEnabled: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    getBackgroundModeEnabled: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setLaunchOnStartupEnabled: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    getLaunchOnStartupEnabled: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setHotkeyEnabled: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    getHotkeyEnabled: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setEphemeralModelEnabled: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    getEphemeralModelEnabled: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    invokeOmniboxEverywhere: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(source: InvocationSource) => any>;
    showLensIph: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    createStartMenuShortcut: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    pinToTaskbar: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    resetProfilePrefs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    resetAllPrefs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
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
export declare const Page_OnBackgroundModeChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnHotkeyChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnEphemeralModelChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnLaunchOnStartupChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetBackgroundModeEnabled_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetBackgroundModeEnabled_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetBackgroundModeEnabled_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetLaunchOnStartupEnabled_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetLaunchOnStartupEnabled_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetLaunchOnStartupEnabled_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetHotkeyEnabled_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetHotkeyEnabled_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetHotkeyEnabled_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetEphemeralModelEnabled_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetEphemeralModelEnabled_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetEphemeralModelEnabled_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_InvokeOmniboxEverywhere_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShowLensIph_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CreateStartMenuShortcut_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CreateStartMenuShortcut_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_PinToTaskbar_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_PinToTaskbar_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ResetProfilePrefs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ResetProfilePrefs_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ResetAllPrefs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ResetAllPrefs_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface Page_OnBackgroundModeChanged_ParamsMojoType {
    enabled: boolean;
}
export type Page_OnBackgroundModeChanged_Params = Page_OnBackgroundModeChanged_ParamsMojoType;
export declare interface Page_OnHotkeyChanged_ParamsMojoType {
    enabled: boolean;
}
export type Page_OnHotkeyChanged_Params = Page_OnHotkeyChanged_ParamsMojoType;
export declare interface Page_OnEphemeralModelChanged_ParamsMojoType {
    enabled: boolean;
}
export type Page_OnEphemeralModelChanged_Params = Page_OnEphemeralModelChanged_ParamsMojoType;
export declare interface Page_OnLaunchOnStartupChanged_ParamsMojoType {
    enabled: boolean;
}
export type Page_OnLaunchOnStartupChanged_Params = Page_OnLaunchOnStartupChanged_ParamsMojoType;
export declare interface PageHandler_SetBackgroundModeEnabled_ParamsMojoType {
    enabled: boolean;
}
export type PageHandler_SetBackgroundModeEnabled_Params = PageHandler_SetBackgroundModeEnabled_ParamsMojoType;
export declare interface PageHandler_GetBackgroundModeEnabled_ParamsMojoType {
}
export type PageHandler_GetBackgroundModeEnabled_Params = PageHandler_GetBackgroundModeEnabled_ParamsMojoType;
export declare interface PageHandler_GetBackgroundModeEnabled_ResponseParamsMojoType {
    enabled: boolean;
}
export type PageHandler_GetBackgroundModeEnabled_ResponseParams = PageHandler_GetBackgroundModeEnabled_ResponseParamsMojoType;
export declare interface PageHandler_SetLaunchOnStartupEnabled_ParamsMojoType {
    enabled: boolean;
}
export type PageHandler_SetLaunchOnStartupEnabled_Params = PageHandler_SetLaunchOnStartupEnabled_ParamsMojoType;
export declare interface PageHandler_GetLaunchOnStartupEnabled_ParamsMojoType {
}
export type PageHandler_GetLaunchOnStartupEnabled_Params = PageHandler_GetLaunchOnStartupEnabled_ParamsMojoType;
export declare interface PageHandler_GetLaunchOnStartupEnabled_ResponseParamsMojoType {
    enabled: boolean;
}
export type PageHandler_GetLaunchOnStartupEnabled_ResponseParams = PageHandler_GetLaunchOnStartupEnabled_ResponseParamsMojoType;
export declare interface PageHandler_SetHotkeyEnabled_ParamsMojoType {
    enabled: boolean;
}
export type PageHandler_SetHotkeyEnabled_Params = PageHandler_SetHotkeyEnabled_ParamsMojoType;
export declare interface PageHandler_GetHotkeyEnabled_ParamsMojoType {
}
export type PageHandler_GetHotkeyEnabled_Params = PageHandler_GetHotkeyEnabled_ParamsMojoType;
export declare interface PageHandler_GetHotkeyEnabled_ResponseParamsMojoType {
    enabled: boolean;
}
export type PageHandler_GetHotkeyEnabled_ResponseParams = PageHandler_GetHotkeyEnabled_ResponseParamsMojoType;
export declare interface PageHandler_SetEphemeralModelEnabled_ParamsMojoType {
    enabled: boolean;
}
export type PageHandler_SetEphemeralModelEnabled_Params = PageHandler_SetEphemeralModelEnabled_ParamsMojoType;
export declare interface PageHandler_GetEphemeralModelEnabled_ParamsMojoType {
}
export type PageHandler_GetEphemeralModelEnabled_Params = PageHandler_GetEphemeralModelEnabled_ParamsMojoType;
export declare interface PageHandler_GetEphemeralModelEnabled_ResponseParamsMojoType {
    enabled: boolean;
}
export type PageHandler_GetEphemeralModelEnabled_ResponseParams = PageHandler_GetEphemeralModelEnabled_ResponseParamsMojoType;
export declare interface PageHandler_InvokeOmniboxEverywhere_ParamsMojoType {
    source: InvocationSource;
}
export type PageHandler_InvokeOmniboxEverywhere_Params = PageHandler_InvokeOmniboxEverywhere_ParamsMojoType;
export declare interface PageHandler_ShowLensIph_ParamsMojoType {
}
export type PageHandler_ShowLensIph_Params = PageHandler_ShowLensIph_ParamsMojoType;
export declare interface PageHandler_CreateStartMenuShortcut_ParamsMojoType {
}
export type PageHandler_CreateStartMenuShortcut_Params = PageHandler_CreateStartMenuShortcut_ParamsMojoType;
export declare interface PageHandler_CreateStartMenuShortcut_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_CreateStartMenuShortcut_ResponseParams = PageHandler_CreateStartMenuShortcut_ResponseParamsMojoType;
export declare interface PageHandler_PinToTaskbar_ParamsMojoType {
}
export type PageHandler_PinToTaskbar_Params = PageHandler_PinToTaskbar_ParamsMojoType;
export declare interface PageHandler_PinToTaskbar_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_PinToTaskbar_ResponseParams = PageHandler_PinToTaskbar_ResponseParamsMojoType;
export declare interface PageHandler_ResetProfilePrefs_ParamsMojoType {
}
export type PageHandler_ResetProfilePrefs_Params = PageHandler_ResetProfilePrefs_ParamsMojoType;
export declare interface PageHandler_ResetProfilePrefs_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_ResetProfilePrefs_ResponseParams = PageHandler_ResetProfilePrefs_ResponseParamsMojoType;
export declare interface PageHandler_ResetAllPrefs_ParamsMojoType {
}
export type PageHandler_ResetAllPrefs_Params = PageHandler_ResetAllPrefs_ParamsMojoType;
export declare interface PageHandler_ResetAllPrefs_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_ResetAllPrefs_ResponseParams = PageHandler_ResetAllPrefs_ResponseParamsMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: PageRemote;
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, PageRemote, PageHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PageHandlerRemote>;
