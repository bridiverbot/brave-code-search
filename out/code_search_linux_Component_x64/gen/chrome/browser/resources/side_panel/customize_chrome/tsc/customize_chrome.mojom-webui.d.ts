import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { TileType as ntpTiles_mojom_TileType } from '//resources/mojo/components/ntp_tiles/tile_type.mojom-webui.js';
import { Token as mojoBase_mojom_Token } from '//resources/mojo/mojo/public/mojom/base/token.mojom-webui.js';
import { SkColor as skia_mojom_SkColor } from '//resources/mojo/skia/public/mojom/skcolor.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const CustomizeChromeSectionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum CustomizeChromeSection {
    MIN_VALUE = 0,
    MAX_VALUE = 6,
    kUnspecified = 0,
    kAppearance = 1,
    kShortcuts = 2,
    kModules = 3,
    kWallpaperSearch = 4,
    kToolbar = 5,
    kFooter = 6
}
export declare const ChromeWebStoreCollectionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ChromeWebStoreCollection {
    MIN_VALUE = 0,
    MAX_VALUE = 0,
    kWritingEssentials = 0
}
export declare const ChromeWebStoreCategorySpec: {
    $: mojo.internal.MojomType;
};
export declare enum ChromeWebStoreCategory {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kWorkflowPlanning = 0,
    kShopping = 1
}
export declare const NewTabPageTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum NewTabPageType {
    MIN_VALUE = 0,
    MAX_VALUE = 6,
    kFirstPartyWebUI = 0,
    kThirdPartyWebUI = 1,
    kThirdPartyRemote = 2,
    kExtension = 3,
    kIncognito = 4,
    kGuestMode = 5,
    kNone = 6
}
export type CustomizeChromePageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CustomizeChromePageHandlerFactoryPendingReceiver>;
export declare class CustomizeChromePageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CustomizeChromePageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<CustomizeChromePageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | CustomizeChromePageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CustomizeChromePageHandlerFactoryInterface {
    createPageHandler(page: CustomizeChromePageRemote, handler: CustomizeChromePageHandlerPendingReceiver): void;
}
export declare class CustomizeChromePageHandlerFactoryRemote implements CustomizeChromePageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<CustomizeChromePageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CustomizeChromePageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CustomizeChromePageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(page: CustomizeChromePageRemote, handler: CustomizeChromePageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the CustomizeChromePageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CustomizeChromePageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CustomizeChromePageHandlerFactoryRemote, CustomizeChromePageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeChromePageHandlerFactoryRemote, CustomizeChromePageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CustomizeChromePageHandlerFactoryInterface);
}
export declare class CustomizeChromePageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CustomizeChromePageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the CustomizeChromePageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CustomizeChromePageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CustomizeChromePageHandlerFactoryRemote, CustomizeChromePageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeChromePageHandlerFactoryRemote, CustomizeChromePageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: CustomizeChromePageRemote, handler: CustomizeChromePageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type CustomizeChromePageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CustomizeChromePageHandlerPendingReceiver>;
export declare class CustomizeChromePageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CustomizeChromePageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<CustomizeChromePageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | CustomizeChromePageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CustomizeChromePageHandlerInterface {
    setMostVisitedSettings(shortcutsTypes: ntpTiles_mojom_TileType[], shortcutsVisible: boolean, personalShortcutsVisible: boolean): void;
    updateMostVisitedSettings(): void;
    getBackgroundCollections(): Promise<{
        collections: BackgroundCollection[];
    }>;
    getReplacementCollectionPreviewImage(collectionId: string): Promise<{
        previewImageUrl: (url_mojom_Url | null);
    }>;
    getBackgroundImages(collectionId: string): Promise<{
        images: CollectionImage[];
    }>;
    updateModulesSettings(): void;
    updateTheme(): void;
    updateThemeEditable(isThemeEditable: boolean): void;
    setDefaultColor(): void;
    setFollowDeviceTheme(follow: boolean): void;
    removeBackgroundImage(): void;
    chooseLocalCustomBackground(): Promise<{
        success: boolean;
    }>;
    setBackgroundImage(attribution1: string, attribution2: string, attributionUrl: url_mojom_Url, imageUrl: url_mojom_Url, thumbnailUrl: url_mojom_Url, collectionId: string): void;
    setDailyRefreshCollectionId(collectionId: string): void;
    openChromeWebStore(): void;
    openChromeWebStoreHomePage(): void;
    openThirdPartyThemePage(themeId: string): void;
    openChromeWebStoreCategoryPage(category: ChromeWebStoreCategory): void;
    openChromeWebStoreCollectionPage(collection: ChromeWebStoreCollection): void;
    openNtpManagedByPage(): void;
    setModulesVisible(visible: boolean): void;
    setModuleDisabled(moduleId: string, disabled: boolean): void;
    setToolChipsVisible(visible: boolean): void;
    updateToolChipsSettings(): void;
    updateScrollToSection(): void;
    updateAttachedTabState(): void;
    updateNtpManagedByName(): void;
    setFooterVisible(visible: boolean): void;
    updateFooterSettings(): void;
    closePanel(): void;
    getUseDarkerTheme(): Promise<{
        useDarkerTheme: boolean;
    }>;
    setUseDarkerTheme(useDarkerTheme: boolean): void;
}
export declare class CustomizeChromePageHandlerRemote implements CustomizeChromePageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<CustomizeChromePageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CustomizeChromePageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CustomizeChromePageHandlerPendingReceiverEndpoint);
    setMostVisitedSettings(shortcutsTypes: ntpTiles_mojom_TileType[], shortcutsVisible: boolean, personalShortcutsVisible: boolean): void;
    updateMostVisitedSettings(): void;
    getBackgroundCollections(): Promise<{
        collections: BackgroundCollection[];
    }>;
    getReplacementCollectionPreviewImage(collectionId: string): Promise<{
        previewImageUrl: (url_mojom_Url | null);
    }>;
    getBackgroundImages(collectionId: string): Promise<{
        images: CollectionImage[];
    }>;
    updateModulesSettings(): void;
    updateTheme(): void;
    updateThemeEditable(isThemeEditable: boolean): void;
    setDefaultColor(): void;
    setFollowDeviceTheme(follow: boolean): void;
    removeBackgroundImage(): void;
    chooseLocalCustomBackground(): Promise<{
        success: boolean;
    }>;
    setBackgroundImage(attribution1: string, attribution2: string, attributionUrl: url_mojom_Url, imageUrl: url_mojom_Url, thumbnailUrl: url_mojom_Url, collectionId: string): void;
    setDailyRefreshCollectionId(collectionId: string): void;
    openChromeWebStore(): void;
    openChromeWebStoreHomePage(): void;
    openThirdPartyThemePage(themeId: string): void;
    openChromeWebStoreCategoryPage(category: ChromeWebStoreCategory): void;
    openChromeWebStoreCollectionPage(collection: ChromeWebStoreCollection): void;
    openNtpManagedByPage(): void;
    setModulesVisible(visible: boolean): void;
    setModuleDisabled(moduleId: string, disabled: boolean): void;
    setToolChipsVisible(visible: boolean): void;
    updateToolChipsSettings(): void;
    updateScrollToSection(): void;
    updateAttachedTabState(): void;
    updateNtpManagedByName(): void;
    setFooterVisible(visible: boolean): void;
    updateFooterSettings(): void;
    closePanel(): void;
    getUseDarkerTheme(): Promise<{
        useDarkerTheme: boolean;
    }>;
    setUseDarkerTheme(useDarkerTheme: boolean): void;
}
/**
 * An object which receives request messages for the CustomizeChromePageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CustomizeChromePageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CustomizeChromePageHandlerRemote, CustomizeChromePageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeChromePageHandlerRemote, CustomizeChromePageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CustomizeChromePageHandlerInterface);
}
export declare class CustomizeChromePageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CustomizeChromePageHandlerRemote;
}
/**
 * An object which receives request messages for the CustomizeChromePageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CustomizeChromePageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CustomizeChromePageHandlerRemote, CustomizeChromePageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeChromePageHandlerRemote, CustomizeChromePageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    setMostVisitedSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(shortcutsTypes: ntpTiles_mojom_TileType[], shortcutsVisible: boolean, personalShortcutsVisible: boolean) => any>;
    updateMostVisitedSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getBackgroundCollections: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getReplacementCollectionPreviewImage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(collectionId: string) => any>;
    getBackgroundImages: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(collectionId: string) => any>;
    updateModulesSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    updateTheme: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    updateThemeEditable: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isThemeEditable: boolean) => any>;
    setDefaultColor: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setFollowDeviceTheme: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(follow: boolean) => any>;
    removeBackgroundImage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    chooseLocalCustomBackground: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setBackgroundImage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(attribution1: string, attribution2: string, attributionUrl: url_mojom_Url, imageUrl: url_mojom_Url, thumbnailUrl: url_mojom_Url, collectionId: string) => any>;
    setDailyRefreshCollectionId: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(collectionId: string) => any>;
    openChromeWebStore: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openChromeWebStoreHomePage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openThirdPartyThemePage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(themeId: string) => any>;
    openChromeWebStoreCategoryPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(category: ChromeWebStoreCategory) => any>;
    openChromeWebStoreCollectionPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(collection: ChromeWebStoreCollection) => any>;
    openNtpManagedByPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setModulesVisible: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(visible: boolean) => any>;
    setModuleDisabled: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(moduleId: string, disabled: boolean) => any>;
    setToolChipsVisible: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(visible: boolean) => any>;
    updateToolChipsSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    updateScrollToSection: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    updateAttachedTabState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    updateNtpManagedByName: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setFooterVisible: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(visible: boolean) => any>;
    updateFooterSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    closePanel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getUseDarkerTheme: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setUseDarkerTheme: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(useDarkerTheme: boolean) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type CustomizeChromePagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CustomizeChromePagePendingReceiver>;
export declare class CustomizeChromePagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CustomizeChromePage> {
    handle: mojo.internal.interfaceSupport.Endpoint<CustomizeChromePagePendingReceiver>;
    constructor(handle: MojoHandle | CustomizeChromePagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CustomizeChromePageInterface {
    setModulesSettings(modulesSettings: ModuleSettings[], managed: boolean, visible: boolean): void;
    setMostVisitedSettings(shortcutsTypes: ntpTiles_mojom_TileType[], visible: boolean, personalShortcutsVisible: boolean, disabledShortcuts: ntpTiles_mojom_TileType[]): void;
    setToolsSettings(visible: boolean): void;
    setFooterSettings(visible: boolean, extensionPolicyEnabled: boolean, managementNoticeState: ManagementNoticeState): void;
    setTheme(theme: Theme): void;
    setThemeEditable(isThemeEditable: boolean): void;
    scrollToSection(section: CustomizeChromeSection): void;
    attachedTabStateUpdated(ntpType: NewTabPageType): void;
    ntpManagedByNameUpdated(name: string, description: string): void;
    onUseDarkerThemeChanged(useDarkerTheme: boolean): void;
}
export declare class CustomizeChromePageRemote implements CustomizeChromePageInterface, mojo.internal.interfaceSupport.InterfaceRemote<CustomizeChromePagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CustomizeChromePagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CustomizeChromePagePendingReceiverEndpoint);
    setModulesSettings(modulesSettings: ModuleSettings[], managed: boolean, visible: boolean): void;
    setMostVisitedSettings(shortcutsTypes: ntpTiles_mojom_TileType[], visible: boolean, personalShortcutsVisible: boolean, disabledShortcuts: ntpTiles_mojom_TileType[]): void;
    setToolsSettings(visible: boolean): void;
    setFooterSettings(visible: boolean, extensionPolicyEnabled: boolean, managementNoticeState: ManagementNoticeState): void;
    setTheme(theme: Theme): void;
    setThemeEditable(isThemeEditable: boolean): void;
    scrollToSection(section: CustomizeChromeSection): void;
    attachedTabStateUpdated(ntpType: NewTabPageType): void;
    ntpManagedByNameUpdated(name: string, description: string): void;
    onUseDarkerThemeChanged(useDarkerTheme: boolean): void;
}
/**
 * An object which receives request messages for the CustomizeChromePage
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CustomizeChromePageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CustomizeChromePageRemote, CustomizeChromePagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeChromePageRemote, CustomizeChromePagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CustomizeChromePageInterface);
}
export declare class CustomizeChromePage {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CustomizeChromePageRemote;
}
/**
 * An object which receives request messages for the CustomizeChromePage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CustomizeChromePageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CustomizeChromePageRemote, CustomizeChromePagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeChromePageRemote, CustomizeChromePagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    setModulesSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(modulesSettings: ModuleSettings[], managed: boolean, visible: boolean) => any>;
    setMostVisitedSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(shortcutsTypes: ntpTiles_mojom_TileType[], visible: boolean, personalShortcutsVisible: boolean, disabledShortcuts: ntpTiles_mojom_TileType[]) => any>;
    setToolsSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(visible: boolean) => any>;
    setFooterSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(visible: boolean, extensionPolicyEnabled: boolean, managementNoticeState: ManagementNoticeState) => any>;
    setTheme: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(theme: Theme) => any>;
    setThemeEditable: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isThemeEditable: boolean) => any>;
    scrollToSection: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(section: CustomizeChromeSection) => any>;
    attachedTabStateUpdated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(ntpType: NewTabPageType) => any>;
    ntpManagedByNameUpdated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(name: string, description: string) => any>;
    onUseDarkerThemeChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(useDarkerTheme: boolean) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const BackgroundImageSpec: {
    $: mojo.internal.MojomType;
};
export declare const ThirdPartyThemeInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const ThemeSpec: {
    $: mojo.internal.MojomType;
};
export declare const BackgroundCollectionSpec: {
    $: mojo.internal.MojomType;
};
export declare const CollectionImageSpec: {
    $: mojo.internal.MojomType;
};
export declare const ModuleSettingsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ManagementNoticeStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_SetMostVisitedSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_UpdateMostVisitedSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_GetBackgroundCollections_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_GetBackgroundCollections_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_GetBackgroundImages_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_GetBackgroundImages_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_UpdateModulesSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_UpdateTheme_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_UpdateThemeEditable_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_SetDefaultColor_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_SetFollowDeviceTheme_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_RemoveBackgroundImage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_ChooseLocalCustomBackground_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_ChooseLocalCustomBackground_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_SetBackgroundImage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_SetDailyRefreshCollectionId_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_OpenChromeWebStore_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_OpenChromeWebStoreHomePage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_OpenThirdPartyThemePage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_OpenChromeWebStoreCategoryPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_OpenChromeWebStoreCollectionPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_OpenNtpManagedByPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_SetModulesVisible_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_SetModuleDisabled_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_SetToolChipsVisible_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_UpdateToolChipsSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_UpdateScrollToSection_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_UpdateAttachedTabState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_UpdateNtpManagedByName_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_SetFooterVisible_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_UpdateFooterSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_ClosePanel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_GetUseDarkerTheme_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_GetUseDarkerTheme_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePageHandler_SetUseDarkerTheme_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePage_SetModulesSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePage_SetMostVisitedSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePage_SetToolsSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePage_SetFooterSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePage_SetTheme_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePage_SetThemeEditable_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePage_ScrollToSection_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePage_AttachedTabStateUpdated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePage_NtpManagedByNameUpdated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeChromePage_OnUseDarkerThemeChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface BackgroundImageMojoType {
    url: url_mojom_Url;
    snapshotUrl: url_mojom_Url;
    isUploadedImage: boolean;
    dailyRefreshEnabled: boolean;
    localBackgroundId: (mojoBase_mojom_Token | null);
    title: string;
    collectionId: string;
}
export type BackgroundImage = BackgroundImageMojoType;
export declare interface ThirdPartyThemeInfoMojoType {
    id: string;
    name: string;
}
export type ThirdPartyThemeInfo = ThirdPartyThemeInfoMojoType;
export declare interface ThemeMojoType {
    backgroundImage: (BackgroundImage | null);
    thirdPartyThemeInfo: (ThirdPartyThemeInfo | null);
    backgroundColor: skia_mojom_SkColor;
    foregroundColor: (skia_mojom_SkColor | null);
    backgroundManagedByPolicy: boolean;
    followDeviceTheme: boolean;
}
export type Theme = ThemeMojoType;
export declare interface BackgroundCollectionMojoType {
    id: string;
    label: string;
    previewImageUrl: url_mojom_Url;
    imageVerified: boolean;
}
export type BackgroundCollection = BackgroundCollectionMojoType;
export declare interface CollectionImageMojoType {
    attribution1: string;
    attribution2: string;
    attributionUrl: url_mojom_Url;
    imageUrl: url_mojom_Url;
    previewImageUrl: url_mojom_Url;
    collectionId: string;
    imageVerified: boolean;
}
export type CollectionImage = CollectionImageMojoType;
export declare interface ModuleSettingsMojoType {
    id: string;
    name: string;
    description: (string | null);
    enabled: boolean;
    visible: boolean;
}
export type ModuleSettings = ModuleSettingsMojoType;
export declare interface ManagementNoticeStateMojoType {
    canBeShown: boolean;
    enabledByPolicy: boolean;
}
export type ManagementNoticeState = ManagementNoticeStateMojoType;
export declare interface CustomizeChromePageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: CustomizeChromePageRemote;
    handler: CustomizeChromePageHandlerPendingReceiver;
}
export type CustomizeChromePageHandlerFactory_CreatePageHandler_Params = CustomizeChromePageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface CustomizeChromePageHandler_SetMostVisitedSettings_ParamsMojoType {
    shortcutsTypes: ntpTiles_mojom_TileType[];
    shortcutsVisible: boolean;
    personalShortcutsVisible: boolean;
}
export type CustomizeChromePageHandler_SetMostVisitedSettings_Params = CustomizeChromePageHandler_SetMostVisitedSettings_ParamsMojoType;
export declare interface CustomizeChromePageHandler_UpdateMostVisitedSettings_ParamsMojoType {
}
export type CustomizeChromePageHandler_UpdateMostVisitedSettings_Params = CustomizeChromePageHandler_UpdateMostVisitedSettings_ParamsMojoType;
export declare interface CustomizeChromePageHandler_GetBackgroundCollections_ParamsMojoType {
}
export type CustomizeChromePageHandler_GetBackgroundCollections_Params = CustomizeChromePageHandler_GetBackgroundCollections_ParamsMojoType;
export declare interface CustomizeChromePageHandler_GetBackgroundCollections_ResponseParamsMojoType {
    collections: BackgroundCollection[];
}
export type CustomizeChromePageHandler_GetBackgroundCollections_ResponseParams = CustomizeChromePageHandler_GetBackgroundCollections_ResponseParamsMojoType;
export declare interface CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ParamsMojoType {
    collectionId: string;
}
export type CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_Params = CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ParamsMojoType;
export declare interface CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ResponseParamsMojoType {
    previewImageUrl: (url_mojom_Url | null);
}
export type CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ResponseParams = CustomizeChromePageHandler_GetReplacementCollectionPreviewImage_ResponseParamsMojoType;
export declare interface CustomizeChromePageHandler_GetBackgroundImages_ParamsMojoType {
    collectionId: string;
}
export type CustomizeChromePageHandler_GetBackgroundImages_Params = CustomizeChromePageHandler_GetBackgroundImages_ParamsMojoType;
export declare interface CustomizeChromePageHandler_GetBackgroundImages_ResponseParamsMojoType {
    images: CollectionImage[];
}
export type CustomizeChromePageHandler_GetBackgroundImages_ResponseParams = CustomizeChromePageHandler_GetBackgroundImages_ResponseParamsMojoType;
export declare interface CustomizeChromePageHandler_UpdateModulesSettings_ParamsMojoType {
}
export type CustomizeChromePageHandler_UpdateModulesSettings_Params = CustomizeChromePageHandler_UpdateModulesSettings_ParamsMojoType;
export declare interface CustomizeChromePageHandler_UpdateTheme_ParamsMojoType {
}
export type CustomizeChromePageHandler_UpdateTheme_Params = CustomizeChromePageHandler_UpdateTheme_ParamsMojoType;
export declare interface CustomizeChromePageHandler_UpdateThemeEditable_ParamsMojoType {
    isThemeEditable: boolean;
}
export type CustomizeChromePageHandler_UpdateThemeEditable_Params = CustomizeChromePageHandler_UpdateThemeEditable_ParamsMojoType;
export declare interface CustomizeChromePageHandler_SetDefaultColor_ParamsMojoType {
}
export type CustomizeChromePageHandler_SetDefaultColor_Params = CustomizeChromePageHandler_SetDefaultColor_ParamsMojoType;
export declare interface CustomizeChromePageHandler_SetFollowDeviceTheme_ParamsMojoType {
    follow: boolean;
}
export type CustomizeChromePageHandler_SetFollowDeviceTheme_Params = CustomizeChromePageHandler_SetFollowDeviceTheme_ParamsMojoType;
export declare interface CustomizeChromePageHandler_RemoveBackgroundImage_ParamsMojoType {
}
export type CustomizeChromePageHandler_RemoveBackgroundImage_Params = CustomizeChromePageHandler_RemoveBackgroundImage_ParamsMojoType;
export declare interface CustomizeChromePageHandler_ChooseLocalCustomBackground_ParamsMojoType {
}
export type CustomizeChromePageHandler_ChooseLocalCustomBackground_Params = CustomizeChromePageHandler_ChooseLocalCustomBackground_ParamsMojoType;
export declare interface CustomizeChromePageHandler_ChooseLocalCustomBackground_ResponseParamsMojoType {
    success: boolean;
}
export type CustomizeChromePageHandler_ChooseLocalCustomBackground_ResponseParams = CustomizeChromePageHandler_ChooseLocalCustomBackground_ResponseParamsMojoType;
export declare interface CustomizeChromePageHandler_SetBackgroundImage_ParamsMojoType {
    attribution1: string;
    attribution2: string;
    attributionUrl: url_mojom_Url;
    imageUrl: url_mojom_Url;
    thumbnailUrl: url_mojom_Url;
    collectionId: string;
}
export type CustomizeChromePageHandler_SetBackgroundImage_Params = CustomizeChromePageHandler_SetBackgroundImage_ParamsMojoType;
export declare interface CustomizeChromePageHandler_SetDailyRefreshCollectionId_ParamsMojoType {
    collectionId: string;
}
export type CustomizeChromePageHandler_SetDailyRefreshCollectionId_Params = CustomizeChromePageHandler_SetDailyRefreshCollectionId_ParamsMojoType;
export declare interface CustomizeChromePageHandler_OpenChromeWebStore_ParamsMojoType {
}
export type CustomizeChromePageHandler_OpenChromeWebStore_Params = CustomizeChromePageHandler_OpenChromeWebStore_ParamsMojoType;
export declare interface CustomizeChromePageHandler_OpenChromeWebStoreHomePage_ParamsMojoType {
}
export type CustomizeChromePageHandler_OpenChromeWebStoreHomePage_Params = CustomizeChromePageHandler_OpenChromeWebStoreHomePage_ParamsMojoType;
export declare interface CustomizeChromePageHandler_OpenThirdPartyThemePage_ParamsMojoType {
    themeId: string;
}
export type CustomizeChromePageHandler_OpenThirdPartyThemePage_Params = CustomizeChromePageHandler_OpenThirdPartyThemePage_ParamsMojoType;
export declare interface CustomizeChromePageHandler_OpenChromeWebStoreCategoryPage_ParamsMojoType {
    category: ChromeWebStoreCategory;
}
export type CustomizeChromePageHandler_OpenChromeWebStoreCategoryPage_Params = CustomizeChromePageHandler_OpenChromeWebStoreCategoryPage_ParamsMojoType;
export declare interface CustomizeChromePageHandler_OpenChromeWebStoreCollectionPage_ParamsMojoType {
    collection: ChromeWebStoreCollection;
}
export type CustomizeChromePageHandler_OpenChromeWebStoreCollectionPage_Params = CustomizeChromePageHandler_OpenChromeWebStoreCollectionPage_ParamsMojoType;
export declare interface CustomizeChromePageHandler_OpenNtpManagedByPage_ParamsMojoType {
}
export type CustomizeChromePageHandler_OpenNtpManagedByPage_Params = CustomizeChromePageHandler_OpenNtpManagedByPage_ParamsMojoType;
export declare interface CustomizeChromePageHandler_SetModulesVisible_ParamsMojoType {
    visible: boolean;
}
export type CustomizeChromePageHandler_SetModulesVisible_Params = CustomizeChromePageHandler_SetModulesVisible_ParamsMojoType;
export declare interface CustomizeChromePageHandler_SetModuleDisabled_ParamsMojoType {
    moduleId: string;
    disabled: boolean;
}
export type CustomizeChromePageHandler_SetModuleDisabled_Params = CustomizeChromePageHandler_SetModuleDisabled_ParamsMojoType;
export declare interface CustomizeChromePageHandler_SetToolChipsVisible_ParamsMojoType {
    visible: boolean;
}
export type CustomizeChromePageHandler_SetToolChipsVisible_Params = CustomizeChromePageHandler_SetToolChipsVisible_ParamsMojoType;
export declare interface CustomizeChromePageHandler_UpdateToolChipsSettings_ParamsMojoType {
}
export type CustomizeChromePageHandler_UpdateToolChipsSettings_Params = CustomizeChromePageHandler_UpdateToolChipsSettings_ParamsMojoType;
export declare interface CustomizeChromePageHandler_UpdateScrollToSection_ParamsMojoType {
}
export type CustomizeChromePageHandler_UpdateScrollToSection_Params = CustomizeChromePageHandler_UpdateScrollToSection_ParamsMojoType;
export declare interface CustomizeChromePageHandler_UpdateAttachedTabState_ParamsMojoType {
}
export type CustomizeChromePageHandler_UpdateAttachedTabState_Params = CustomizeChromePageHandler_UpdateAttachedTabState_ParamsMojoType;
export declare interface CustomizeChromePageHandler_UpdateNtpManagedByName_ParamsMojoType {
}
export type CustomizeChromePageHandler_UpdateNtpManagedByName_Params = CustomizeChromePageHandler_UpdateNtpManagedByName_ParamsMojoType;
export declare interface CustomizeChromePageHandler_SetFooterVisible_ParamsMojoType {
    visible: boolean;
}
export type CustomizeChromePageHandler_SetFooterVisible_Params = CustomizeChromePageHandler_SetFooterVisible_ParamsMojoType;
export declare interface CustomizeChromePageHandler_UpdateFooterSettings_ParamsMojoType {
}
export type CustomizeChromePageHandler_UpdateFooterSettings_Params = CustomizeChromePageHandler_UpdateFooterSettings_ParamsMojoType;
export declare interface CustomizeChromePageHandler_ClosePanel_ParamsMojoType {
}
export type CustomizeChromePageHandler_ClosePanel_Params = CustomizeChromePageHandler_ClosePanel_ParamsMojoType;
export declare interface CustomizeChromePageHandler_GetUseDarkerTheme_ParamsMojoType {
}
export type CustomizeChromePageHandler_GetUseDarkerTheme_Params = CustomizeChromePageHandler_GetUseDarkerTheme_ParamsMojoType;
export declare interface CustomizeChromePageHandler_GetUseDarkerTheme_ResponseParamsMojoType {
    useDarkerTheme: boolean;
}
export type CustomizeChromePageHandler_GetUseDarkerTheme_ResponseParams = CustomizeChromePageHandler_GetUseDarkerTheme_ResponseParamsMojoType;
export declare interface CustomizeChromePageHandler_SetUseDarkerTheme_ParamsMojoType {
    useDarkerTheme: boolean;
}
export type CustomizeChromePageHandler_SetUseDarkerTheme_Params = CustomizeChromePageHandler_SetUseDarkerTheme_ParamsMojoType;
export declare interface CustomizeChromePage_SetModulesSettings_ParamsMojoType {
    modulesSettings: ModuleSettings[];
    managed: boolean;
    visible: boolean;
}
export type CustomizeChromePage_SetModulesSettings_Params = CustomizeChromePage_SetModulesSettings_ParamsMojoType;
export declare interface CustomizeChromePage_SetMostVisitedSettings_ParamsMojoType {
    shortcutsTypes: ntpTiles_mojom_TileType[];
    visible: boolean;
    personalShortcutsVisible: boolean;
    disabledShortcuts: ntpTiles_mojom_TileType[];
}
export type CustomizeChromePage_SetMostVisitedSettings_Params = CustomizeChromePage_SetMostVisitedSettings_ParamsMojoType;
export declare interface CustomizeChromePage_SetToolsSettings_ParamsMojoType {
    visible: boolean;
}
export type CustomizeChromePage_SetToolsSettings_Params = CustomizeChromePage_SetToolsSettings_ParamsMojoType;
export declare interface CustomizeChromePage_SetFooterSettings_ParamsMojoType {
    visible: boolean;
    extensionPolicyEnabled: boolean;
    managementNoticeState: ManagementNoticeState;
}
export type CustomizeChromePage_SetFooterSettings_Params = CustomizeChromePage_SetFooterSettings_ParamsMojoType;
export declare interface CustomizeChromePage_SetTheme_ParamsMojoType {
    theme: Theme;
}
export type CustomizeChromePage_SetTheme_Params = CustomizeChromePage_SetTheme_ParamsMojoType;
export declare interface CustomizeChromePage_SetThemeEditable_ParamsMojoType {
    isThemeEditable: boolean;
}
export type CustomizeChromePage_SetThemeEditable_Params = CustomizeChromePage_SetThemeEditable_ParamsMojoType;
export declare interface CustomizeChromePage_ScrollToSection_ParamsMojoType {
    section: CustomizeChromeSection;
}
export type CustomizeChromePage_ScrollToSection_Params = CustomizeChromePage_ScrollToSection_ParamsMojoType;
export declare interface CustomizeChromePage_AttachedTabStateUpdated_ParamsMojoType {
    ntpType: NewTabPageType;
}
export type CustomizeChromePage_AttachedTabStateUpdated_Params = CustomizeChromePage_AttachedTabStateUpdated_ParamsMojoType;
export declare interface CustomizeChromePage_NtpManagedByNameUpdated_ParamsMojoType {
    name: string;
    description: string;
}
export type CustomizeChromePage_NtpManagedByNameUpdated_Params = CustomizeChromePage_NtpManagedByNameUpdated_ParamsMojoType;
export declare interface CustomizeChromePage_OnUseDarkerThemeChanged_ParamsMojoType {
    useDarkerTheme: boolean;
}
export type CustomizeChromePage_OnUseDarkerThemeChanged_Params = CustomizeChromePage_OnUseDarkerThemeChanged_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<CustomizeChromePageHandlerInterface, CustomizeChromePageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<CustomizeChromePageHandlerInterface, CustomizeChromePageRemote, CustomizeChromePageHandlerPendingReceiver, CustomizeChromePagePendingReceiver, CustomizeChromePageCallbackRouter, CustomizeChromePageHandlerRemote>;
