import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { MicrosoftAuthUntrustedDocumentRemote as newTabPage_mojom_MicrosoftAuthUntrustedDocumentRemote } from './ntp_microsoft_auth_shared_ui.mojom-webui.js';
import { MostVisitedTheme as mostVisited_mojom_MostVisitedTheme } from '//resources/cr_components/most_visited/most_visited.mojom-webui.js';
import { TileType as ntpTiles_mojom_TileType } from '//resources/mojo/components/ntp_tiles/tile_type.mojom-webui.js';
import { SkColor as skia_mojom_SkColor } from '//resources/mojo/skia/public/mojom/skcolor.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const NtpBackgroundImageSourceSpec: {
    $: mojo.internal.MojomType;
};
export declare enum NtpBackgroundImageSource {
    MIN_VALUE = 0,
    MAX_VALUE = 6,
    kNoImage = 0,
    kFirstPartyThemeWithoutDailyRefresh = 1,
    kFirstPartyThemeWithDailyRefresh = 2,
    kThirdPartyTheme = 3,
    kUploadedImage = 4,
    kWallpaperSearch = 5,
    kWallpaperSearchInspiration = 6
}
export declare const DoodleImageTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum DoodleImageType {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kAnimation = 0,
    kStatic = 1
}
export declare const DoodleShareChannelSpec: {
    $: mojo.internal.MojomType;
};
export declare enum DoodleShareChannel {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kFacebook = 0,
    kTwitter = 1,
    kEmail = 2,
    kLinkCopy = 3
}
export declare const CustomizeDialogActionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum CustomizeDialogAction {
    MIN_VALUE = 0,
    MAX_VALUE = 11,
    kCancelClicked = 0,
    kDoneClicked = 1,
    kOpenClicked = 2,
    kBackgroundsBackClicked = 3,
    kBackgroundsNoBackgroundSelected = 4,
    kBackgroundsCollectionOpened = 5,
    kBackgroundsRefreshToggleClicked = 6,
    kBackgroundsImageSelected = 7,
    kBackgroundsUploadFromDeviceClicked = 8,
    kShortcutsCustomLinksClicked = 9,
    kShortcutsMostVisitedClicked = 10,
    kShortcutsVisibilityToggleClicked = 11
}
export declare const OptInStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare enum OptInStatus {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kExplicitOptIn = 0,
    kImplicitOptIn = 1,
    kOptOut = 2
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
    setMostVisitedSettings(shortcutsType: ntpTiles_mojom_TileType, shortcutsVisible: boolean): void;
    getMostVisitedSettings(): Promise<{
        shortcutsType: ntpTiles_mojom_TileType;
        shortcutsVisible: boolean;
    }>;
    getDoodle(): Promise<{
        doodle: (Doodle | null);
    }>;
    onDismissModule(moduleId: string): void;
    setModulesVisible(visible: boolean): void;
    updateDisabledModules(): void;
    onModulesLoadedWithData(moduleIds: string[]): void;
    onModuleUsed(moduleId: string): void;
    getModulesIdNames(): Promise<{
        data: ModuleIdName[];
    }>;
    getModulesEligibleForRemoval(): Promise<{
        moduleIds: string[];
    }>;
    setModulesOrder(moduleIds: string[]): void;
    getModulesOrder(): Promise<{
        moduleIds: string[];
    }>;
    updateModulesLoadable(): void;
    setModulesDisabled(moduleIds: string[], disabled: boolean, isUserAction: boolean): void;
    updateActionChipsVisibility(): void;
    updateFooterVisibility(): void;
    incrementComposeButtonShownCount(): void;
    maybeTriggerAutomaticCustomizeChromePromo(): void;
    onOneGoogleBarRendered(time: number): void;
    onCustomizeDialogAction(action: CustomizeDialogAction): void;
    onDoodleImageClicked(type: DoodleImageType, logUrl: (url_mojom_Url | null)): void;
    onDoodleImageRendered(type: DoodleImageType, time: number, logUrl: url_mojom_Url): Promise<{
        imageClickParams: (string | null);
        interactionLogUrl: (url_mojom_Url | null);
        shareId: (string | null);
    }>;
    onDoodleShared(channel: DoodleShareChannel, doodleId: string, shareId: (string | null)): void;
    onAppRendered(time: number): void;
    canShowRealboxContextMenuAnimation(): Promise<{
        canShow: boolean;
    }>;
    recordRealboxContextMenuAnimationImpression(shown: boolean): void;
    onContextualSearchIPHEngaged(): void;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    setMostVisitedSettings(shortcutsType: ntpTiles_mojom_TileType, shortcutsVisible: boolean): void;
    getMostVisitedSettings(): Promise<{
        shortcutsType: ntpTiles_mojom_TileType;
        shortcutsVisible: boolean;
    }>;
    getDoodle(): Promise<{
        doodle: (Doodle | null);
    }>;
    onDismissModule(moduleId: string): void;
    setModulesVisible(visible: boolean): void;
    updateDisabledModules(): void;
    onModulesLoadedWithData(moduleIds: string[]): void;
    onModuleUsed(moduleId: string): void;
    getModulesIdNames(): Promise<{
        data: ModuleIdName[];
    }>;
    getModulesEligibleForRemoval(): Promise<{
        moduleIds: string[];
    }>;
    setModulesOrder(moduleIds: string[]): void;
    getModulesOrder(): Promise<{
        moduleIds: string[];
    }>;
    updateModulesLoadable(): void;
    setModulesDisabled(moduleIds: string[], disabled: boolean, isUserAction: boolean): void;
    updateActionChipsVisibility(): void;
    updateFooterVisibility(): void;
    incrementComposeButtonShownCount(): void;
    maybeTriggerAutomaticCustomizeChromePromo(): void;
    onOneGoogleBarRendered(time: number): void;
    onCustomizeDialogAction(action: CustomizeDialogAction): void;
    onDoodleImageClicked(type: DoodleImageType, logUrl: (url_mojom_Url | null)): void;
    onDoodleImageRendered(type: DoodleImageType, time: number, logUrl: url_mojom_Url): Promise<{
        imageClickParams: (string | null);
        interactionLogUrl: (url_mojom_Url | null);
        shareId: (string | null);
    }>;
    onDoodleShared(channel: DoodleShareChannel, doodleId: string, shareId: (string | null)): void;
    onAppRendered(time: number): void;
    canShowRealboxContextMenuAnimation(): Promise<{
        canShow: boolean;
    }>;
    recordRealboxContextMenuAnimationImpression(shown: boolean): void;
    onContextualSearchIPHEngaged(): void;
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
    setMostVisitedSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(shortcutsType: ntpTiles_mojom_TileType, shortcutsVisible: boolean) => any>;
    getMostVisitedSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getDoodle: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onDismissModule: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(moduleId: string) => any>;
    setModulesVisible: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(visible: boolean) => any>;
    updateDisabledModules: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onModulesLoadedWithData: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(moduleIds: string[]) => any>;
    onModuleUsed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(moduleId: string) => any>;
    getModulesIdNames: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getModulesEligibleForRemoval: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setModulesOrder: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(moduleIds: string[]) => any>;
    getModulesOrder: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    updateModulesLoadable: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setModulesDisabled: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(moduleIds: string[], disabled: boolean, isUserAction: boolean) => any>;
    updateActionChipsVisibility: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    updateFooterVisibility: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    incrementComposeButtonShownCount: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    maybeTriggerAutomaticCustomizeChromePromo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onOneGoogleBarRendered: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(time: number) => any>;
    onCustomizeDialogAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(action: CustomizeDialogAction) => any>;
    onDoodleImageClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(type: DoodleImageType, logUrl: (url_mojom_Url | null)) => any>;
    onDoodleImageRendered: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(type: DoodleImageType, time: number, logUrl: url_mojom_Url) => any>;
    onDoodleShared: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(channel: DoodleShareChannel, doodleId: string, shareId: (string | null)) => any>;
    onAppRendered: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(time: number) => any>;
    canShowRealboxContextMenuAnimation: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    recordRealboxContextMenuAnimationImpression: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(shown: boolean) => any>;
    onContextualSearchIPHEngaged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
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
    setTheme(theme: Theme): void;
    setDisabledModules(all: boolean, ids: string[]): void;
    setModulesLoadable(): void;
    setActionChipsVisibility(visible: boolean): void;
    showWebstoreToast(): void;
    setWallpaperSearchButtonVisibility(visible: boolean): void;
    footerVisibilityUpdated(visible: boolean): void;
    connectToParentDocument(childUntrustedDocumentRemote: newTabPage_mojom_MicrosoftAuthUntrustedDocumentRemote): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    setTheme(theme: Theme): void;
    setDisabledModules(all: boolean, ids: string[]): void;
    setModulesLoadable(): void;
    setActionChipsVisibility(visible: boolean): void;
    showWebstoreToast(): void;
    setWallpaperSearchButtonVisibility(visible: boolean): void;
    footerVisibilityUpdated(visible: boolean): void;
    connectToParentDocument(childUntrustedDocumentRemote: newTabPage_mojom_MicrosoftAuthUntrustedDocumentRemote): void;
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
    setTheme: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(theme: Theme) => any>;
    setDisabledModules: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(all: boolean, ids: string[]) => any>;
    setModulesLoadable: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setActionChipsVisibility: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(visible: boolean) => any>;
    showWebstoreToast: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setWallpaperSearchButtonVisibility: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(visible: boolean) => any>;
    footerVisibilityUpdated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(visible: boolean) => any>;
    connectToParentDocument: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(childUntrustedDocumentRemote: newTabPage_mojom_MicrosoftAuthUntrustedDocumentRemote) => any>;
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
export declare const ThemeSpec: {
    $: mojo.internal.MojomType;
};
export declare const ImageDoodleSpec: {
    $: mojo.internal.MojomType;
};
export declare const AllModeImageDoodleSpec: {
    $: mojo.internal.MojomType;
};
export declare const DoodleSpec: {
    $: mojo.internal.MojomType;
};
export declare const ModuleIdNameSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetMostVisitedSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetMostVisitedSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetMostVisitedSettings_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetDoodle_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetDoodle_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnDismissModule_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetModulesVisible_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UpdateDisabledModules_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnModulesLoadedWithData_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnModuleUsed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetModulesIdNames_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetModulesIdNames_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetModulesEligibleForRemoval_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetModulesEligibleForRemoval_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetModulesOrder_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetModulesOrder_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_GetModulesOrder_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UpdateModulesLoadable_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_SetModulesDisabled_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UpdateActionChipsVisibility_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_UpdateFooterVisibility_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_IncrementComposeButtonShownCount_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnOneGoogleBarRendered_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnCustomizeDialogAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnDoodleImageClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnDoodleImageRendered_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnDoodleImageRendered_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnDoodleShared_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnAppRendered_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CanShowRealboxContextMenuAnimation_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_CanShowRealboxContextMenuAnimation_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordRealboxContextMenuAnimationImpression_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_OnContextualSearchIPHEngaged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetTheme_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetDisabledModules_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetModulesLoadable_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetActionChipsVisibility_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ShowWebstoreToast_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_SetWallpaperSearchButtonVisibility_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_FooterVisibilityUpdated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ConnectToParentDocument_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface BackgroundImageMojoType {
    url: url_mojom_Url;
    url2x: (url_mojom_Url | null);
    attributionUrl: (url_mojom_Url | null);
    size: (string | null);
    repeatX: (string | null);
    repeatY: (string | null);
    positionX: (string | null);
    positionY: (string | null);
    imageSource: NtpBackgroundImageSource;
}
export type BackgroundImage = BackgroundImageMojoType;
export declare interface ThemeMojoType {
    textColor: skia_mojom_SkColor;
    backgroundColor: skia_mojom_SkColor;
    isBaseline: boolean;
    isGm3: boolean;
    isCustomBackground: boolean;
    dailyRefreshEnabled: boolean;
    isDark: boolean;
    logoColor: (skia_mojom_SkColor | null);
    backgroundImageCollectionId: (string | null);
    backgroundImage: (BackgroundImage | null);
    backgroundImageAttribution1: (string | null);
    backgroundImageAttribution2: (string | null);
    backgroundImageAttributionUrl: (url_mojom_Url | null);
    mostVisited: mostVisited_mojom_MostVisitedTheme;
}
export type Theme = ThemeMojoType;
export declare interface ImageDoodleMojoType {
    imageUrl: url_mojom_Url;
    animationUrl: (url_mojom_Url | null);
    width: number;
    height: number;
    backgroundColor: skia_mojom_SkColor;
    imageImpressionLogUrl: url_mojom_Url;
    animationImpressionLogUrl: (url_mojom_Url | null);
}
export type ImageDoodle = ImageDoodleMojoType;
export declare interface AllModeImageDoodleMojoType {
    light: ImageDoodle;
    dark: (ImageDoodle | null);
    onClickUrl: (url_mojom_Url | null);
    shareUrl: url_mojom_Url;
}
export type AllModeImageDoodle = AllModeImageDoodleMojoType;
export declare interface DoodleMojoType {
    image: (AllModeImageDoodle | null);
    description: string;
}
export type Doodle = DoodleMojoType;
export declare interface ModuleIdNameMojoType {
    id: string;
    name: string;
}
export type ModuleIdName = ModuleIdNameMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: PageRemote;
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandler_SetMostVisitedSettings_ParamsMojoType {
    shortcutsType: ntpTiles_mojom_TileType;
    shortcutsVisible: boolean;
}
export type PageHandler_SetMostVisitedSettings_Params = PageHandler_SetMostVisitedSettings_ParamsMojoType;
export declare interface PageHandler_GetMostVisitedSettings_ParamsMojoType {
}
export type PageHandler_GetMostVisitedSettings_Params = PageHandler_GetMostVisitedSettings_ParamsMojoType;
export declare interface PageHandler_GetMostVisitedSettings_ResponseParamsMojoType {
    shortcutsType: ntpTiles_mojom_TileType;
    shortcutsVisible: boolean;
}
export type PageHandler_GetMostVisitedSettings_ResponseParams = PageHandler_GetMostVisitedSettings_ResponseParamsMojoType;
export declare interface PageHandler_GetDoodle_ParamsMojoType {
}
export type PageHandler_GetDoodle_Params = PageHandler_GetDoodle_ParamsMojoType;
export declare interface PageHandler_GetDoodle_ResponseParamsMojoType {
    doodle: (Doodle | null);
}
export type PageHandler_GetDoodle_ResponseParams = PageHandler_GetDoodle_ResponseParamsMojoType;
export declare interface PageHandler_OnDismissModule_ParamsMojoType {
    moduleId: string;
}
export type PageHandler_OnDismissModule_Params = PageHandler_OnDismissModule_ParamsMojoType;
export declare interface PageHandler_SetModulesVisible_ParamsMojoType {
    visible: boolean;
}
export type PageHandler_SetModulesVisible_Params = PageHandler_SetModulesVisible_ParamsMojoType;
export declare interface PageHandler_UpdateDisabledModules_ParamsMojoType {
}
export type PageHandler_UpdateDisabledModules_Params = PageHandler_UpdateDisabledModules_ParamsMojoType;
export declare interface PageHandler_OnModulesLoadedWithData_ParamsMojoType {
    moduleIds: string[];
}
export type PageHandler_OnModulesLoadedWithData_Params = PageHandler_OnModulesLoadedWithData_ParamsMojoType;
export declare interface PageHandler_OnModuleUsed_ParamsMojoType {
    moduleId: string;
}
export type PageHandler_OnModuleUsed_Params = PageHandler_OnModuleUsed_ParamsMojoType;
export declare interface PageHandler_GetModulesIdNames_ParamsMojoType {
}
export type PageHandler_GetModulesIdNames_Params = PageHandler_GetModulesIdNames_ParamsMojoType;
export declare interface PageHandler_GetModulesIdNames_ResponseParamsMojoType {
    data: ModuleIdName[];
}
export type PageHandler_GetModulesIdNames_ResponseParams = PageHandler_GetModulesIdNames_ResponseParamsMojoType;
export declare interface PageHandler_GetModulesEligibleForRemoval_ParamsMojoType {
}
export type PageHandler_GetModulesEligibleForRemoval_Params = PageHandler_GetModulesEligibleForRemoval_ParamsMojoType;
export declare interface PageHandler_GetModulesEligibleForRemoval_ResponseParamsMojoType {
    moduleIds: string[];
}
export type PageHandler_GetModulesEligibleForRemoval_ResponseParams = PageHandler_GetModulesEligibleForRemoval_ResponseParamsMojoType;
export declare interface PageHandler_SetModulesOrder_ParamsMojoType {
    moduleIds: string[];
}
export type PageHandler_SetModulesOrder_Params = PageHandler_SetModulesOrder_ParamsMojoType;
export declare interface PageHandler_GetModulesOrder_ParamsMojoType {
}
export type PageHandler_GetModulesOrder_Params = PageHandler_GetModulesOrder_ParamsMojoType;
export declare interface PageHandler_GetModulesOrder_ResponseParamsMojoType {
    moduleIds: string[];
}
export type PageHandler_GetModulesOrder_ResponseParams = PageHandler_GetModulesOrder_ResponseParamsMojoType;
export declare interface PageHandler_UpdateModulesLoadable_ParamsMojoType {
}
export type PageHandler_UpdateModulesLoadable_Params = PageHandler_UpdateModulesLoadable_ParamsMojoType;
export declare interface PageHandler_SetModulesDisabled_ParamsMojoType {
    moduleIds: string[];
    disabled: boolean;
    isUserAction: boolean;
}
export type PageHandler_SetModulesDisabled_Params = PageHandler_SetModulesDisabled_ParamsMojoType;
export declare interface PageHandler_UpdateActionChipsVisibility_ParamsMojoType {
}
export type PageHandler_UpdateActionChipsVisibility_Params = PageHandler_UpdateActionChipsVisibility_ParamsMojoType;
export declare interface PageHandler_UpdateFooterVisibility_ParamsMojoType {
}
export type PageHandler_UpdateFooterVisibility_Params = PageHandler_UpdateFooterVisibility_ParamsMojoType;
export declare interface PageHandler_IncrementComposeButtonShownCount_ParamsMojoType {
}
export type PageHandler_IncrementComposeButtonShownCount_Params = PageHandler_IncrementComposeButtonShownCount_ParamsMojoType;
export declare interface PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsMojoType {
}
export type PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_Params = PageHandler_MaybeTriggerAutomaticCustomizeChromePromo_ParamsMojoType;
export declare interface PageHandler_OnOneGoogleBarRendered_ParamsMojoType {
    time: number;
}
export type PageHandler_OnOneGoogleBarRendered_Params = PageHandler_OnOneGoogleBarRendered_ParamsMojoType;
export declare interface PageHandler_OnCustomizeDialogAction_ParamsMojoType {
    action: CustomizeDialogAction;
}
export type PageHandler_OnCustomizeDialogAction_Params = PageHandler_OnCustomizeDialogAction_ParamsMojoType;
export declare interface PageHandler_OnDoodleImageClicked_ParamsMojoType {
    type: DoodleImageType;
    logUrl: (url_mojom_Url | null);
}
export type PageHandler_OnDoodleImageClicked_Params = PageHandler_OnDoodleImageClicked_ParamsMojoType;
export declare interface PageHandler_OnDoodleImageRendered_ParamsMojoType {
    type: DoodleImageType;
    time: number;
    logUrl: url_mojom_Url;
}
export type PageHandler_OnDoodleImageRendered_Params = PageHandler_OnDoodleImageRendered_ParamsMojoType;
export declare interface PageHandler_OnDoodleImageRendered_ResponseParamsMojoType {
    imageClickParams: (string | null);
    interactionLogUrl: (url_mojom_Url | null);
    shareId: (string | null);
}
export type PageHandler_OnDoodleImageRendered_ResponseParams = PageHandler_OnDoodleImageRendered_ResponseParamsMojoType;
export declare interface PageHandler_OnDoodleShared_ParamsMojoType {
    channel: DoodleShareChannel;
    doodleId: string;
    shareId: (string | null);
}
export type PageHandler_OnDoodleShared_Params = PageHandler_OnDoodleShared_ParamsMojoType;
export declare interface PageHandler_OnAppRendered_ParamsMojoType {
    time: number;
}
export type PageHandler_OnAppRendered_Params = PageHandler_OnAppRendered_ParamsMojoType;
export declare interface PageHandler_CanShowRealboxContextMenuAnimation_ParamsMojoType {
}
export type PageHandler_CanShowRealboxContextMenuAnimation_Params = PageHandler_CanShowRealboxContextMenuAnimation_ParamsMojoType;
export declare interface PageHandler_CanShowRealboxContextMenuAnimation_ResponseParamsMojoType {
    canShow: boolean;
}
export type PageHandler_CanShowRealboxContextMenuAnimation_ResponseParams = PageHandler_CanShowRealboxContextMenuAnimation_ResponseParamsMojoType;
export declare interface PageHandler_RecordRealboxContextMenuAnimationImpression_ParamsMojoType {
    shown: boolean;
}
export type PageHandler_RecordRealboxContextMenuAnimationImpression_Params = PageHandler_RecordRealboxContextMenuAnimationImpression_ParamsMojoType;
export declare interface PageHandler_OnContextualSearchIPHEngaged_ParamsMojoType {
}
export type PageHandler_OnContextualSearchIPHEngaged_Params = PageHandler_OnContextualSearchIPHEngaged_ParamsMojoType;
export declare interface Page_SetTheme_ParamsMojoType {
    theme: Theme;
}
export type Page_SetTheme_Params = Page_SetTheme_ParamsMojoType;
export declare interface Page_SetDisabledModules_ParamsMojoType {
    all: boolean;
    ids: string[];
}
export type Page_SetDisabledModules_Params = Page_SetDisabledModules_ParamsMojoType;
export declare interface Page_SetModulesLoadable_ParamsMojoType {
}
export type Page_SetModulesLoadable_Params = Page_SetModulesLoadable_ParamsMojoType;
export declare interface Page_SetActionChipsVisibility_ParamsMojoType {
    visible: boolean;
}
export type Page_SetActionChipsVisibility_Params = Page_SetActionChipsVisibility_ParamsMojoType;
export declare interface Page_ShowWebstoreToast_ParamsMojoType {
}
export type Page_ShowWebstoreToast_Params = Page_ShowWebstoreToast_ParamsMojoType;
export declare interface Page_SetWallpaperSearchButtonVisibility_ParamsMojoType {
    visible: boolean;
}
export type Page_SetWallpaperSearchButtonVisibility_Params = Page_SetWallpaperSearchButtonVisibility_ParamsMojoType;
export declare interface Page_FooterVisibilityUpdated_ParamsMojoType {
    visible: boolean;
}
export type Page_FooterVisibilityUpdated_Params = Page_FooterVisibilityUpdated_ParamsMojoType;
export declare interface Page_ConnectToParentDocument_ParamsMojoType {
    childUntrustedDocumentRemote: newTabPage_mojom_MicrosoftAuthUntrustedDocumentRemote;
}
export type Page_ConnectToParentDocument_Params = Page_ConnectToParentDocument_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, PageRemote, PageHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PageHandlerRemote>;
