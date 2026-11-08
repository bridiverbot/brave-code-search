import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { UserDisplayMode as webApp_mojom_UserDisplayMode } from './user_display_mode.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const RunOnOsLoginModeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum RunOnOsLoginMode {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kNotRun = 0,
    kWindowed = 1,
    kMinimized = 2
}
export declare const AppTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum AppType {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kWebApp = 0,
    kIsolatedWebApp = 1,
    kDeprecatedChromeApp = 2
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
    getApps(): Promise<{
        appList: AppInfo[];
    }>;
    getDeprecationLinkString(): Promise<{
        linkString: string;
    }>;
    uninstallApp(appId: string): void;
    showAppSettings(appId: string): void;
    createAppShortcut(appId: string): Promise<void>;
    launchApp(appId: string, clickEvent: (ClickEvent | null)): void;
    setRunOnOsLoginMode(appId: string, runOnOsLoginMode: RunOnOsLoginMode): void;
    launchDeprecatedAppDialog(): void;
    installAppLocally(appId: string): void;
    setUserDisplayMode(appId: string, displayMode: webApp_mojom_UserDisplayMode): void;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    getApps(): Promise<{
        appList: AppInfo[];
    }>;
    getDeprecationLinkString(): Promise<{
        linkString: string;
    }>;
    uninstallApp(appId: string): void;
    showAppSettings(appId: string): void;
    createAppShortcut(appId: string): Promise<void>;
    launchApp(appId: string, clickEvent: (ClickEvent | null)): void;
    setRunOnOsLoginMode(appId: string, runOnOsLoginMode: RunOnOsLoginMode): void;
    launchDeprecatedAppDialog(): void;
    installAppLocally(appId: string): void;
    setUserDisplayMode(appId: string, displayMode: webApp_mojom_UserDisplayMode): void;
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
    getApps: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getDeprecationLinkString: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    uninstallApp: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string) => any>;
    showAppSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string) => any>;
    createAppShortcut: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string) => any>;
    launchApp: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string, clickEvent: (ClickEvent | null)) => any>;
    setRunOnOsLoginMode: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string, runOnOsLoginMode: RunOnOsLoginMode) => any>;
    launchDeprecatedAppDialog: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    installAppLocally: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string) => any>;
    setUserDisplayMode: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string, displayMode: webApp_mojom_UserDisplayMode) => any>;
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
    addApp(appInfo: AppInfo): void;
    removeApp(appInfo: AppInfo): void;
    updateApp(appInfo: AppInfo): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    addApp(appInfo: AppInfo): void;
    removeApp(appInfo: AppInfo): void;
    updateApp(appInfo: AppInfo): void;
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
    addApp: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appInfo: AppInfo) => any>;
    removeApp: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appInfo: AppInfo) => any>;
    updateApp: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appInfo: AppInfo) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const AppInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const ClickEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetApps_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetApps_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetDeprecationLinkString_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetDeprecationLinkString_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UninstallApp_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShowAppSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CreateAppShortcut_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CreateAppShortcut_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_LaunchApp_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetRunOnOsLoginMode_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_LaunchDeprecatedAppDialog_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_InstallAppLocally_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetUserDisplayMode_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_AddApp_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_RemoveApp_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_UpdateApp_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface AppInfoMojoType {
    appType: AppType;
    mayShowRunOnOsLoginMode: boolean;
    mayToggleRunOnOsLoginMode: boolean;
    isLocallyInstalled: boolean;
    openInWindow: boolean;
    mayUninstall: boolean;
    id: string;
    startUrl: url_mojom_Url;
    name: string;
    iconUrl: url_mojom_Url;
    runOnOsLoginMode: RunOnOsLoginMode;
    storePageUrl: (url_mojom_Url | null);
}
export type AppInfo = AppInfoMojoType;
export declare interface ClickEventMojoType {
    button: number;
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
}
export type ClickEvent = ClickEventMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: PageRemote;
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandler_GetApps_ParamsMojoType {
}
export type PageHandler_GetApps_Params = PageHandler_GetApps_ParamsMojoType;
export declare interface PageHandler_GetApps_ResponseParamsMojoType {
    appList: AppInfo[];
}
export type PageHandler_GetApps_ResponseParams = PageHandler_GetApps_ResponseParamsMojoType;
export declare interface PageHandler_GetDeprecationLinkString_ParamsMojoType {
}
export type PageHandler_GetDeprecationLinkString_Params = PageHandler_GetDeprecationLinkString_ParamsMojoType;
export declare interface PageHandler_GetDeprecationLinkString_ResponseParamsMojoType {
    linkString: string;
}
export type PageHandler_GetDeprecationLinkString_ResponseParams = PageHandler_GetDeprecationLinkString_ResponseParamsMojoType;
export declare interface PageHandler_UninstallApp_ParamsMojoType {
    appId: string;
}
export type PageHandler_UninstallApp_Params = PageHandler_UninstallApp_ParamsMojoType;
export declare interface PageHandler_ShowAppSettings_ParamsMojoType {
    appId: string;
}
export type PageHandler_ShowAppSettings_Params = PageHandler_ShowAppSettings_ParamsMojoType;
export declare interface PageHandler_CreateAppShortcut_ParamsMojoType {
    appId: string;
}
export type PageHandler_CreateAppShortcut_Params = PageHandler_CreateAppShortcut_ParamsMojoType;
export declare interface PageHandler_CreateAppShortcut_ResponseParamsMojoType {
}
export type PageHandler_CreateAppShortcut_ResponseParams = PageHandler_CreateAppShortcut_ResponseParamsMojoType;
export declare interface PageHandler_LaunchApp_ParamsMojoType {
    appId: string;
    clickEvent: (ClickEvent | null);
}
export type PageHandler_LaunchApp_Params = PageHandler_LaunchApp_ParamsMojoType;
export declare interface PageHandler_SetRunOnOsLoginMode_ParamsMojoType {
    appId: string;
    runOnOsLoginMode: RunOnOsLoginMode;
}
export type PageHandler_SetRunOnOsLoginMode_Params = PageHandler_SetRunOnOsLoginMode_ParamsMojoType;
export declare interface PageHandler_LaunchDeprecatedAppDialog_ParamsMojoType {
}
export type PageHandler_LaunchDeprecatedAppDialog_Params = PageHandler_LaunchDeprecatedAppDialog_ParamsMojoType;
export declare interface PageHandler_InstallAppLocally_ParamsMojoType {
    appId: string;
}
export type PageHandler_InstallAppLocally_Params = PageHandler_InstallAppLocally_ParamsMojoType;
export declare interface PageHandler_SetUserDisplayMode_ParamsMojoType {
    appId: string;
    displayMode: webApp_mojom_UserDisplayMode;
}
export type PageHandler_SetUserDisplayMode_Params = PageHandler_SetUserDisplayMode_ParamsMojoType;
export declare interface Page_AddApp_ParamsMojoType {
    appInfo: AppInfo;
}
export type Page_AddApp_Params = Page_AddApp_ParamsMojoType;
export declare interface Page_RemoveApp_ParamsMojoType {
    appInfo: AppInfo;
}
export type Page_RemoveApp_Params = Page_RemoveApp_ParamsMojoType;
export declare interface Page_UpdateApp_ParamsMojoType {
    appInfo: AppInfo;
}
export type Page_UpdateApp_Params = Page_UpdateApp_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, PageRemote, PageHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PageHandlerRemote>;
