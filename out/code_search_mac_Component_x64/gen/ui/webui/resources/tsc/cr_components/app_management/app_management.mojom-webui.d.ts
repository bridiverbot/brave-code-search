import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const AppTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum AppType {
    MIN_VALUE = 0,
    MAX_VALUE = 10,
    kUnknown = 0,
    kArc = 1,
    kCrostini = 2,
    kChromeApp = 3,
    kWeb = 4,
    kPluginVm = 5,
    kRemote = 6,
    kBorealis = 7,
    kSystemWeb = 8,
    kExtension = 9,
    kBruschetta = 10
}
export declare const PermissionTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PermissionType {
    MIN_VALUE = 0,
    MAX_VALUE = 8,
    kUnknown = 0,
    kCamera = 1,
    kLocation = 2,
    kMicrophone = 3,
    kNotifications = 4,
    kContacts = 5,
    kStorage = 6,
    kPrinting = 7,
    kFileHandling = 8
}
export declare const TriStateSpec: {
    $: mojo.internal.MojomType;
};
export declare enum TriState {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kAllow = 0,
    kBlock = 1,
    kAsk = 2
}
export declare const InstallReasonSpec: {
    $: mojo.internal.MojomType;
};
export declare enum InstallReason {
    MIN_VALUE = 0,
    MAX_VALUE = 9,
    kUnknown = 0,
    kSystem = 1,
    kPolicy = 2,
    kOem = 3,
    kDefault = 4,
    kSync = 5,
    kUser = 6,
    kSubApp = 7,
    kKiosk = 8,
    kCommandLine = 9
}
export declare const InstallSourceSpec: {
    $: mojo.internal.MojomType;
};
export declare enum InstallSource {
    MIN_VALUE = 0,
    MAX_VALUE = 5,
    kUnknown = 0,
    kSystem = 1,
    kSync = 2,
    kPlayStore = 3,
    kChromeWebStore = 4,
    kBrowser = 5
}
export declare const WindowModeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum WindowMode {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kUnknown = 0,
    kWindow = 1,
    kBrowser = 2,
    kTabbedWindow = 3
}
export declare const RunOnOsLoginModeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum RunOnOsLoginMode {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kUnknown = 0,
    kNotRun = 1,
    kWindowed = 2
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
        apps: App[];
    }>;
    getApp(appId: string): Promise<{
        app: (App | null);
    }>;
    getSubAppToParentMap(): Promise<{
        subAppToParentMap: {
            [key: string]: string;
        };
    }>;
    getExtensionAppPermissionMessages(appId: string): Promise<{
        messages: ExtensionAppPermissionMessage[];
    }>;
    setPinned(appId: string, pinned: boolean): void;
    setPermission(appId: string, permission: Permission): void;
    setResizeLocked(appId: string, locked: boolean): void;
    uninstall(appId: string): void;
    openNativeSettings(appId: string): void;
    setPreferredApp(appId: string, isPreferredApp: boolean): void;
    getOverlappingPreferredApps(appId: string): Promise<{
        appIds: string[];
    }>;
    updateAppSize(appId: string): void;
    setWindowMode(appId: string, windowMode: WindowMode): void;
    setRunOnOsLoginMode(appId: string, runOnOsLoginMode: RunOnOsLoginMode): void;
    setFileHandlingEnabled(appId: string, enabled: boolean): void;
    showDefaultAppAssociationsUi(): void;
    openStorePage(appId: string): void;
    setAppLocale(appId: string, localeTag: string): void;
    openSystemNotificationSettings(appId: string): void;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    getApps(): Promise<{
        apps: App[];
    }>;
    getApp(appId: string): Promise<{
        app: (App | null);
    }>;
    getSubAppToParentMap(): Promise<{
        subAppToParentMap: {
            [key: string]: string;
        };
    }>;
    getExtensionAppPermissionMessages(appId: string): Promise<{
        messages: ExtensionAppPermissionMessage[];
    }>;
    setPinned(appId: string, pinned: boolean): void;
    setPermission(appId: string, permission: Permission): void;
    setResizeLocked(appId: string, locked: boolean): void;
    uninstall(appId: string): void;
    openNativeSettings(appId: string): void;
    setPreferredApp(appId: string, isPreferredApp: boolean): void;
    getOverlappingPreferredApps(appId: string): Promise<{
        appIds: string[];
    }>;
    updateAppSize(appId: string): void;
    setWindowMode(appId: string, windowMode: WindowMode): void;
    setRunOnOsLoginMode(appId: string, runOnOsLoginMode: RunOnOsLoginMode): void;
    setFileHandlingEnabled(appId: string, enabled: boolean): void;
    showDefaultAppAssociationsUi(): void;
    openStorePage(appId: string): void;
    setAppLocale(appId: string, localeTag: string): void;
    openSystemNotificationSettings(appId: string): void;
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
    getApp: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string) => any>;
    getSubAppToParentMap: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getExtensionAppPermissionMessages: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string) => any>;
    setPinned: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string, pinned: boolean) => any>;
    setPermission: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string, permission: Permission) => any>;
    setResizeLocked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string, locked: boolean) => any>;
    uninstall: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string) => any>;
    openNativeSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string) => any>;
    setPreferredApp: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string, isPreferredApp: boolean) => any>;
    getOverlappingPreferredApps: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string) => any>;
    updateAppSize: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string) => any>;
    setWindowMode: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string, windowMode: WindowMode) => any>;
    setRunOnOsLoginMode: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string, runOnOsLoginMode: RunOnOsLoginMode) => any>;
    setFileHandlingEnabled: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string, enabled: boolean) => any>;
    showDefaultAppAssociationsUi: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openStorePage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string) => any>;
    setAppLocale: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string, localeTag: string) => any>;
    openSystemNotificationSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string) => any>;
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
    onAppAdded(app: App): void;
    onAppChanged(update: App): void;
    onAppRemoved(appId: string): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    onAppAdded(app: App): void;
    onAppChanged(update: App): void;
    onAppRemoved(appId: string): void;
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
    onAppAdded: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(app: App) => any>;
    onAppChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(update: App) => any>;
    onAppRemoved: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const PermissionSpec: {
    $: mojo.internal.MojomType;
};
export declare const RunOnOsLoginSpec: {
    $: mojo.internal.MojomType;
};
export declare const LocaleSpec: {
    $: mojo.internal.MojomType;
};
export declare const AppSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExtensionAppPermissionMessageSpec: {
    $: mojo.internal.MojomType;
};
export declare const FileHandlingStateSpec: {
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
export declare const PageHandler_GetApp_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetApp_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetSubAppToParentMap_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetSubAppToParentMap_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetExtensionAppPermissionMessages_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetExtensionAppPermissionMessages_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetPinned_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetPermission_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetResizeLocked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_Uninstall_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenNativeSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetPreferredApp_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetOverlappingPreferredApps_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetOverlappingPreferredApps_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UpdateAppSize_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetWindowMode_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetRunOnOsLoginMode_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetFileHandlingEnabled_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ShowDefaultAppAssociationsUi_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenStorePage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetAppLocale_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OpenSystemNotificationSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnAppAdded_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnAppChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnAppRemoved_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PermissionValueSpec: {
    $: mojo.internal.MojomType;
};
export declare interface PermissionMojoType {
    permissionType: PermissionType;
    isManaged: boolean;
    value: PermissionValue;
    details: (string | null);
}
export type Permission = PermissionMojoType;
export declare interface RunOnOsLoginMojoType {
    loginMode: RunOnOsLoginMode;
    isManaged: boolean;
}
export type RunOnOsLogin = RunOnOsLoginMojoType;
export declare interface LocaleMojoType {
    localeTag: string;
    displayName: string;
    nativeDisplayName: string;
}
export type Locale = LocaleMojoType;
export declare interface AppMojoType {
    id: string;
    type: AppType;
    isPinned: (boolean | null);
    isPolicyPinned: (boolean | null);
    hideMoreSettings: boolean;
    hidePinToShelf: boolean;
    isPreferredApp: boolean;
    hideWindowMode: boolean;
    resizeLocked: boolean;
    hideResizeLocked: boolean;
    showSystemNotificationsSettingsLink: boolean;
    allowUninstall: boolean;
    disableUserChoiceNavigationCapturing: boolean;
    title: (string | null);
    description: (string | null);
    version: (string | null);
    size: (string | null);
    permissions: {
        [key in PermissionType]?: Permission;
    };
    installReason: InstallReason;
    installSource: InstallSource;
    windowMode: WindowMode;
    supportedLinks: string[];
    runOnOsLogin: (RunOnOsLogin | null);
    fileHandlingState: (FileHandlingState | null);
    appSize: (string | null);
    dataSize: (string | null);
    publisherId: string;
    formattedOrigin: (string | null);
    scopeExtensions: string[];
    supportedLocales: Locale[];
    selectedLocale: (Locale | null);
}
export type App = AppMojoType;
export declare interface ExtensionAppPermissionMessageMojoType {
    message: string;
    submessages: string[];
}
export type ExtensionAppPermissionMessage = ExtensionAppPermissionMessageMojoType;
export declare interface FileHandlingStateMojoType {
    enabled: boolean;
    isManaged: boolean;
    userVisibleTypes: string;
    userVisibleTypesLabel: string;
    learnMoreUrl: (url_mojom_Url | null);
}
export type FileHandlingState = FileHandlingStateMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: PageRemote;
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandler_GetApps_ParamsMojoType {
}
export type PageHandler_GetApps_Params = PageHandler_GetApps_ParamsMojoType;
export declare interface PageHandler_GetApps_ResponseParamsMojoType {
    apps: App[];
}
export type PageHandler_GetApps_ResponseParams = PageHandler_GetApps_ResponseParamsMojoType;
export declare interface PageHandler_GetApp_ParamsMojoType {
    appId: string;
}
export type PageHandler_GetApp_Params = PageHandler_GetApp_ParamsMojoType;
export declare interface PageHandler_GetApp_ResponseParamsMojoType {
    app: (App | null);
}
export type PageHandler_GetApp_ResponseParams = PageHandler_GetApp_ResponseParamsMojoType;
export declare interface PageHandler_GetSubAppToParentMap_ParamsMojoType {
}
export type PageHandler_GetSubAppToParentMap_Params = PageHandler_GetSubAppToParentMap_ParamsMojoType;
export declare interface PageHandler_GetSubAppToParentMap_ResponseParamsMojoType {
    subAppToParentMap: {
        [key: string]: string;
    };
}
export type PageHandler_GetSubAppToParentMap_ResponseParams = PageHandler_GetSubAppToParentMap_ResponseParamsMojoType;
export declare interface PageHandler_GetExtensionAppPermissionMessages_ParamsMojoType {
    appId: string;
}
export type PageHandler_GetExtensionAppPermissionMessages_Params = PageHandler_GetExtensionAppPermissionMessages_ParamsMojoType;
export declare interface PageHandler_GetExtensionAppPermissionMessages_ResponseParamsMojoType {
    messages: ExtensionAppPermissionMessage[];
}
export type PageHandler_GetExtensionAppPermissionMessages_ResponseParams = PageHandler_GetExtensionAppPermissionMessages_ResponseParamsMojoType;
export declare interface PageHandler_SetPinned_ParamsMojoType {
    appId: string;
    pinned: boolean;
}
export type PageHandler_SetPinned_Params = PageHandler_SetPinned_ParamsMojoType;
export declare interface PageHandler_SetPermission_ParamsMojoType {
    appId: string;
    permission: Permission;
}
export type PageHandler_SetPermission_Params = PageHandler_SetPermission_ParamsMojoType;
export declare interface PageHandler_SetResizeLocked_ParamsMojoType {
    appId: string;
    locked: boolean;
}
export type PageHandler_SetResizeLocked_Params = PageHandler_SetResizeLocked_ParamsMojoType;
export declare interface PageHandler_Uninstall_ParamsMojoType {
    appId: string;
}
export type PageHandler_Uninstall_Params = PageHandler_Uninstall_ParamsMojoType;
export declare interface PageHandler_OpenNativeSettings_ParamsMojoType {
    appId: string;
}
export type PageHandler_OpenNativeSettings_Params = PageHandler_OpenNativeSettings_ParamsMojoType;
export declare interface PageHandler_SetPreferredApp_ParamsMojoType {
    appId: string;
    isPreferredApp: boolean;
}
export type PageHandler_SetPreferredApp_Params = PageHandler_SetPreferredApp_ParamsMojoType;
export declare interface PageHandler_GetOverlappingPreferredApps_ParamsMojoType {
    appId: string;
}
export type PageHandler_GetOverlappingPreferredApps_Params = PageHandler_GetOverlappingPreferredApps_ParamsMojoType;
export declare interface PageHandler_GetOverlappingPreferredApps_ResponseParamsMojoType {
    appIds: string[];
}
export type PageHandler_GetOverlappingPreferredApps_ResponseParams = PageHandler_GetOverlappingPreferredApps_ResponseParamsMojoType;
export declare interface PageHandler_UpdateAppSize_ParamsMojoType {
    appId: string;
}
export type PageHandler_UpdateAppSize_Params = PageHandler_UpdateAppSize_ParamsMojoType;
export declare interface PageHandler_SetWindowMode_ParamsMojoType {
    appId: string;
    windowMode: WindowMode;
}
export type PageHandler_SetWindowMode_Params = PageHandler_SetWindowMode_ParamsMojoType;
export declare interface PageHandler_SetRunOnOsLoginMode_ParamsMojoType {
    appId: string;
    runOnOsLoginMode: RunOnOsLoginMode;
}
export type PageHandler_SetRunOnOsLoginMode_Params = PageHandler_SetRunOnOsLoginMode_ParamsMojoType;
export declare interface PageHandler_SetFileHandlingEnabled_ParamsMojoType {
    appId: string;
    enabled: boolean;
}
export type PageHandler_SetFileHandlingEnabled_Params = PageHandler_SetFileHandlingEnabled_ParamsMojoType;
export declare interface PageHandler_ShowDefaultAppAssociationsUi_ParamsMojoType {
}
export type PageHandler_ShowDefaultAppAssociationsUi_Params = PageHandler_ShowDefaultAppAssociationsUi_ParamsMojoType;
export declare interface PageHandler_OpenStorePage_ParamsMojoType {
    appId: string;
}
export type PageHandler_OpenStorePage_Params = PageHandler_OpenStorePage_ParamsMojoType;
export declare interface PageHandler_SetAppLocale_ParamsMojoType {
    appId: string;
    localeTag: string;
}
export type PageHandler_SetAppLocale_Params = PageHandler_SetAppLocale_ParamsMojoType;
export declare interface PageHandler_OpenSystemNotificationSettings_ParamsMojoType {
    appId: string;
}
export type PageHandler_OpenSystemNotificationSettings_Params = PageHandler_OpenSystemNotificationSettings_ParamsMojoType;
export declare interface Page_OnAppAdded_ParamsMojoType {
    app: App;
}
export type Page_OnAppAdded_Params = Page_OnAppAdded_ParamsMojoType;
export declare interface Page_OnAppChanged_ParamsMojoType {
    update: App;
}
export type Page_OnAppChanged_Params = Page_OnAppChanged_ParamsMojoType;
export declare interface Page_OnAppRemoved_ParamsMojoType {
    appId: string;
}
export type Page_OnAppRemoved_Params = Page_OnAppRemoved_ParamsMojoType;
export declare interface PermissionValue {
    boolValue?: boolean;
    tristateValue?: TriState;
}
export declare enum PermissionValueFieldTags {
    BOOL_VALUE = 0,
    TRISTATE_VALUE = 1
}
export declare function whichPermissionValue(u: PermissionValue): PermissionValueFieldTags;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, PageRemote, PageHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PageHandlerRemote>;
