import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { Empty as mojoBase_mojom_Empty } from '//resources/mojo/mojo/public/mojom/base/empty.mojom-webui.js';
import { Error as mojoBase_mojom_Error } from '//resources/mojo/mojo/public/mojom/base/error.mojom-webui.js';
import { FilePath as mojoBase_mojom_FilePath } from '//resources/mojo/mojo/public/mojom/base/file_path.mojom-webui.js';
import { Origin as url_mojom_Origin } from '//resources/mojo/url/mojom/origin.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export type PageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
export declare class PageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerInterface {
    getInstalledAppsInfo(): Promise<{
        apps: IwaDevModeAppInfo[];
    }>;
    installAppFromDevProxy(url: url_mojom_Url): Promise<mojoBase_mojom_Empty>;
    installAppFromUpdateManifest(webBundleUrl: url_mojom_Url, updateInfo: UpdateInfo): Promise<mojoBase_mojom_Empty>;
    launchApp(appId: string): Promise<{
        success: boolean;
    }>;
    parseUpdateManifestFromUrl(updateManifestUrl: url_mojom_Url): Promise<UpdateManifest>;
    selectAndInstallAppFromLocalWebBundle(): Promise<mojoBase_mojom_Empty>;
    selectAndUpdateAppFromLocalWebBundle(appId: string): Promise<mojoBase_mojom_Empty>;
    setUpdateChannel(appId: string, updateChannel: string): Promise<mojoBase_mojom_Empty>;
    uninstallApp(appId: string): Promise<{
        success: boolean;
    }>;
    updateDevProxyInstalledApp(appId: string): Promise<mojoBase_mojom_Empty>;
    updateManifestInstalledApp(appId: string, options: UpdateManifestOptions): Promise<mojoBase_mojom_Empty>;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    getInstalledAppsInfo(): Promise<{
        apps: IwaDevModeAppInfo[];
    }>;
    installAppFromDevProxy(url: url_mojom_Url): Promise<mojoBase_mojom_Empty>;
    installAppFromUpdateManifest(webBundleUrl: url_mojom_Url, updateInfo: UpdateInfo): Promise<mojoBase_mojom_Empty>;
    launchApp(appId: string): Promise<{
        success: boolean;
    }>;
    parseUpdateManifestFromUrl(updateManifestUrl: url_mojom_Url): Promise<UpdateManifest>;
    selectAndInstallAppFromLocalWebBundle(): Promise<mojoBase_mojom_Empty>;
    selectAndUpdateAppFromLocalWebBundle(appId: string): Promise<mojoBase_mojom_Empty>;
    setUpdateChannel(appId: string, updateChannel: string): Promise<mojoBase_mojom_Empty>;
    uninstallApp(appId: string): Promise<{
        success: boolean;
    }>;
    updateDevProxyInstalledApp(appId: string): Promise<mojoBase_mojom_Empty>;
    updateManifestInstalledApp(appId: string, options: UpdateManifestOptions): Promise<mojoBase_mojom_Empty>;
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
    getInstalledAppsInfo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    installAppFromDevProxy: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url) => any>;
    installAppFromUpdateManifest: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(webBundleUrl: url_mojom_Url, updateInfo: UpdateInfo) => any>;
    launchApp: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string) => any>;
    parseUpdateManifestFromUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(updateManifestUrl: url_mojom_Url) => any>;
    selectAndInstallAppFromLocalWebBundle: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    selectAndUpdateAppFromLocalWebBundle: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string) => any>;
    setUpdateChannel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string, updateChannel: string) => any>;
    uninstallApp: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string) => any>;
    updateDevProxyInstalledApp: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string) => any>;
    updateManifestInstalledApp: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string, options: UpdateManifestOptions) => any>;
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
    onAppInstalled(appInfo: IwaDevModeAppInfo): void;
    onAppUpdated(appInfo: IwaDevModeAppInfo): void;
    onAppUninstalled(appId: string): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    onAppInstalled(appInfo: IwaDevModeAppInfo): void;
    onAppUpdated(appInfo: IwaDevModeAppInfo): void;
    onAppUninstalled(appId: string): void;
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
    onAppInstalled: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appInfo: IwaDevModeAppInfo) => any>;
    onAppUpdated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appInfo: IwaDevModeAppInfo) => any>;
    onAppUninstalled: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(appId: string) => any>;
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
export declare const UpdateInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const UpdateManifestOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SubAppInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const IwaDevModeAppInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const VersionEntrySpec: {
    $: mojo.internal.MojomType;
};
export declare const ChannelMetadataSpec: {
    $: mojo.internal.MojomType;
};
export declare const UpdateManifestSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetInstalledAppsInfo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetInstalledAppsInfo_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_InstallAppFromDevProxy_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_InstallAppFromDevProxy_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_InstallAppFromUpdateManifest_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_InstallAppFromUpdateManifest_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_LaunchApp_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_LaunchApp_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ParseUpdateManifestFromUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ParseUpdateManifestFromUrl_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SelectAndInstallAppFromLocalWebBundle_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SelectAndInstallAppFromLocalWebBundle_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SelectAndUpdateAppFromLocalWebBundle_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SelectAndUpdateAppFromLocalWebBundle_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetUpdateChannel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetUpdateChannel_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UninstallApp_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UninstallApp_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UpdateDevProxyInstalledApp_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UpdateDevProxyInstalledApp_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UpdateManifestInstalledApp_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UpdateManifestInstalledApp_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnAppInstalled_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnAppUpdated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnAppUninstalled_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const IwaDevModeSourceSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_InstallAppFromDevProxy_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_InstallAppFromUpdateManifest_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ParseUpdateManifestFromUrl_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SelectAndInstallAppFromLocalWebBundle_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SelectAndUpdateAppFromLocalWebBundle_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetUpdateChannel_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UpdateDevProxyInstalledApp_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UpdateManifestInstalledApp_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare interface UpdateInfoMojoType {
    updateManifestUrl: url_mojom_Url;
    updateChannel: string;
}
export type UpdateInfo = UpdateInfoMojoType;
export declare interface UpdateManifestOptionsMojoType {
    allowDowngrades: boolean;
    pinnedVersion: (string | null);
}
export type UpdateManifestOptions = UpdateManifestOptionsMojoType;
export declare interface SubAppInfoMojoType {
    appId: string;
    name: string;
}
export type SubAppInfo = SubAppInfoMojoType;
export declare interface IwaDevModeAppInfoMojoType {
    appId: string;
    webBundleId: string;
    name: string;
    source: IwaDevModeSource;
    installedVersion: string;
    subApps: SubAppInfo[];
}
export type IwaDevModeAppInfo = IwaDevModeAppInfoMojoType;
export declare interface VersionEntryMojoType {
    version: string;
    src: url_mojom_Url;
    channels: string[];
}
export type VersionEntry = VersionEntryMojoType;
export declare interface ChannelMetadataMojoType {
    channel: string;
    displayName: string;
}
export type ChannelMetadata = ChannelMetadataMojoType;
export declare interface UpdateManifestMojoType {
    versions: VersionEntry[];
    channels: ChannelMetadata[];
}
export type UpdateManifest = UpdateManifestMojoType;
export declare interface PageHandler_GetInstalledAppsInfo_ParamsMojoType {
}
export type PageHandler_GetInstalledAppsInfo_Params = PageHandler_GetInstalledAppsInfo_ParamsMojoType;
export declare interface PageHandler_GetInstalledAppsInfo_ResponseParamsMojoType {
    apps: IwaDevModeAppInfo[];
}
export type PageHandler_GetInstalledAppsInfo_ResponseParams = PageHandler_GetInstalledAppsInfo_ResponseParamsMojoType;
export declare interface PageHandler_InstallAppFromDevProxy_ParamsMojoType {
    url: url_mojom_Url;
}
export type PageHandler_InstallAppFromDevProxy_Params = PageHandler_InstallAppFromDevProxy_ParamsMojoType;
export declare interface PageHandler_InstallAppFromDevProxy_ResponseParamsMojoType {
    result: PageHandler_InstallAppFromDevProxy_ResponseParam_Result;
}
export type PageHandler_InstallAppFromDevProxy_ResponseParams = PageHandler_InstallAppFromDevProxy_ResponseParamsMojoType;
export declare interface PageHandler_InstallAppFromUpdateManifest_ParamsMojoType {
    webBundleUrl: url_mojom_Url;
    updateInfo: UpdateInfo;
}
export type PageHandler_InstallAppFromUpdateManifest_Params = PageHandler_InstallAppFromUpdateManifest_ParamsMojoType;
export declare interface PageHandler_InstallAppFromUpdateManifest_ResponseParamsMojoType {
    result: PageHandler_InstallAppFromUpdateManifest_ResponseParam_Result;
}
export type PageHandler_InstallAppFromUpdateManifest_ResponseParams = PageHandler_InstallAppFromUpdateManifest_ResponseParamsMojoType;
export declare interface PageHandler_LaunchApp_ParamsMojoType {
    appId: string;
}
export type PageHandler_LaunchApp_Params = PageHandler_LaunchApp_ParamsMojoType;
export declare interface PageHandler_LaunchApp_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_LaunchApp_ResponseParams = PageHandler_LaunchApp_ResponseParamsMojoType;
export declare interface PageHandler_ParseUpdateManifestFromUrl_ParamsMojoType {
    updateManifestUrl: url_mojom_Url;
}
export type PageHandler_ParseUpdateManifestFromUrl_Params = PageHandler_ParseUpdateManifestFromUrl_ParamsMojoType;
export declare interface PageHandler_ParseUpdateManifestFromUrl_ResponseParamsMojoType {
    result: PageHandler_ParseUpdateManifestFromUrl_ResponseParam_Result;
}
export type PageHandler_ParseUpdateManifestFromUrl_ResponseParams = PageHandler_ParseUpdateManifestFromUrl_ResponseParamsMojoType;
export declare interface PageHandler_SelectAndInstallAppFromLocalWebBundle_ParamsMojoType {
}
export type PageHandler_SelectAndInstallAppFromLocalWebBundle_Params = PageHandler_SelectAndInstallAppFromLocalWebBundle_ParamsMojoType;
export declare interface PageHandler_SelectAndInstallAppFromLocalWebBundle_ResponseParamsMojoType {
    result: PageHandler_SelectAndInstallAppFromLocalWebBundle_ResponseParam_Result;
}
export type PageHandler_SelectAndInstallAppFromLocalWebBundle_ResponseParams = PageHandler_SelectAndInstallAppFromLocalWebBundle_ResponseParamsMojoType;
export declare interface PageHandler_SelectAndUpdateAppFromLocalWebBundle_ParamsMojoType {
    appId: string;
}
export type PageHandler_SelectAndUpdateAppFromLocalWebBundle_Params = PageHandler_SelectAndUpdateAppFromLocalWebBundle_ParamsMojoType;
export declare interface PageHandler_SelectAndUpdateAppFromLocalWebBundle_ResponseParamsMojoType {
    result: PageHandler_SelectAndUpdateAppFromLocalWebBundle_ResponseParam_Result;
}
export type PageHandler_SelectAndUpdateAppFromLocalWebBundle_ResponseParams = PageHandler_SelectAndUpdateAppFromLocalWebBundle_ResponseParamsMojoType;
export declare interface PageHandler_SetUpdateChannel_ParamsMojoType {
    appId: string;
    updateChannel: string;
}
export type PageHandler_SetUpdateChannel_Params = PageHandler_SetUpdateChannel_ParamsMojoType;
export declare interface PageHandler_SetUpdateChannel_ResponseParamsMojoType {
    result: PageHandler_SetUpdateChannel_ResponseParam_Result;
}
export type PageHandler_SetUpdateChannel_ResponseParams = PageHandler_SetUpdateChannel_ResponseParamsMojoType;
export declare interface PageHandler_UninstallApp_ParamsMojoType {
    appId: string;
}
export type PageHandler_UninstallApp_Params = PageHandler_UninstallApp_ParamsMojoType;
export declare interface PageHandler_UninstallApp_ResponseParamsMojoType {
    success: boolean;
}
export type PageHandler_UninstallApp_ResponseParams = PageHandler_UninstallApp_ResponseParamsMojoType;
export declare interface PageHandler_UpdateDevProxyInstalledApp_ParamsMojoType {
    appId: string;
}
export type PageHandler_UpdateDevProxyInstalledApp_Params = PageHandler_UpdateDevProxyInstalledApp_ParamsMojoType;
export declare interface PageHandler_UpdateDevProxyInstalledApp_ResponseParamsMojoType {
    result: PageHandler_UpdateDevProxyInstalledApp_ResponseParam_Result;
}
export type PageHandler_UpdateDevProxyInstalledApp_ResponseParams = PageHandler_UpdateDevProxyInstalledApp_ResponseParamsMojoType;
export declare interface PageHandler_UpdateManifestInstalledApp_ParamsMojoType {
    appId: string;
    options: UpdateManifestOptions;
}
export type PageHandler_UpdateManifestInstalledApp_Params = PageHandler_UpdateManifestInstalledApp_ParamsMojoType;
export declare interface PageHandler_UpdateManifestInstalledApp_ResponseParamsMojoType {
    result: PageHandler_UpdateManifestInstalledApp_ResponseParam_Result;
}
export type PageHandler_UpdateManifestInstalledApp_ResponseParams = PageHandler_UpdateManifestInstalledApp_ResponseParamsMojoType;
export declare interface Page_OnAppInstalled_ParamsMojoType {
    appInfo: IwaDevModeAppInfo;
}
export type Page_OnAppInstalled_Params = Page_OnAppInstalled_ParamsMojoType;
export declare interface Page_OnAppUpdated_ParamsMojoType {
    appInfo: IwaDevModeAppInfo;
}
export type Page_OnAppUpdated_Params = Page_OnAppUpdated_ParamsMojoType;
export declare interface Page_OnAppUninstalled_ParamsMojoType {
    appId: string;
}
export type Page_OnAppUninstalled_Params = Page_OnAppUninstalled_ParamsMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: PageRemote;
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface IwaDevModeSource {
    proxyOrigin?: url_mojom_Origin;
    bundlePath?: mojoBase_mojom_FilePath;
    updateInfo?: UpdateInfo;
}
export declare enum IwaDevModeSourceFieldTags {
    PROXY_ORIGIN = 0,
    BUNDLE_PATH = 1,
    UPDATE_INFO = 2
}
export declare function whichIwaDevModeSource(u: IwaDevModeSource): IwaDevModeSourceFieldTags;
export declare interface PageHandler_InstallAppFromDevProxy_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum PageHandler_InstallAppFromDevProxy_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichPageHandler_InstallAppFromDevProxy_ResponseParam_Result(u: PageHandler_InstallAppFromDevProxy_ResponseParam_Result): PageHandler_InstallAppFromDevProxy_ResponseParam_ResultFieldTags;
export declare interface PageHandler_InstallAppFromUpdateManifest_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum PageHandler_InstallAppFromUpdateManifest_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichPageHandler_InstallAppFromUpdateManifest_ResponseParam_Result(u: PageHandler_InstallAppFromUpdateManifest_ResponseParam_Result): PageHandler_InstallAppFromUpdateManifest_ResponseParam_ResultFieldTags;
export declare interface PageHandler_ParseUpdateManifestFromUrl_ResponseParam_Result {
    success?: UpdateManifest;
    failure?: mojoBase_mojom_Error;
}
export declare enum PageHandler_ParseUpdateManifestFromUrl_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichPageHandler_ParseUpdateManifestFromUrl_ResponseParam_Result(u: PageHandler_ParseUpdateManifestFromUrl_ResponseParam_Result): PageHandler_ParseUpdateManifestFromUrl_ResponseParam_ResultFieldTags;
export declare interface PageHandler_SelectAndInstallAppFromLocalWebBundle_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum PageHandler_SelectAndInstallAppFromLocalWebBundle_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichPageHandler_SelectAndInstallAppFromLocalWebBundle_ResponseParam_Result(u: PageHandler_SelectAndInstallAppFromLocalWebBundle_ResponseParam_Result): PageHandler_SelectAndInstallAppFromLocalWebBundle_ResponseParam_ResultFieldTags;
export declare interface PageHandler_SelectAndUpdateAppFromLocalWebBundle_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum PageHandler_SelectAndUpdateAppFromLocalWebBundle_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichPageHandler_SelectAndUpdateAppFromLocalWebBundle_ResponseParam_Result(u: PageHandler_SelectAndUpdateAppFromLocalWebBundle_ResponseParam_Result): PageHandler_SelectAndUpdateAppFromLocalWebBundle_ResponseParam_ResultFieldTags;
export declare interface PageHandler_SetUpdateChannel_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum PageHandler_SetUpdateChannel_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichPageHandler_SetUpdateChannel_ResponseParam_Result(u: PageHandler_SetUpdateChannel_ResponseParam_Result): PageHandler_SetUpdateChannel_ResponseParam_ResultFieldTags;
export declare interface PageHandler_UpdateDevProxyInstalledApp_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum PageHandler_UpdateDevProxyInstalledApp_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichPageHandler_UpdateDevProxyInstalledApp_ResponseParam_Result(u: PageHandler_UpdateDevProxyInstalledApp_ResponseParam_Result): PageHandler_UpdateDevProxyInstalledApp_ResponseParam_ResultFieldTags;
export declare interface PageHandler_UpdateManifestInstalledApp_ResponseParam_Result {
    success?: mojoBase_mojom_Empty;
    failure?: mojoBase_mojom_Error;
}
export declare enum PageHandler_UpdateManifestInstalledApp_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichPageHandler_UpdateManifestInstalledApp_ResponseParam_Result(u: PageHandler_UpdateManifestInstalledApp_ResponseParam_Result): PageHandler_UpdateManifestInstalledApp_ResponseParam_ResultFieldTags;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, PageRemote, PageHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PageHandlerRemote>;
