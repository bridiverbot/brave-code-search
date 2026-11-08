import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { TileSource as ntpTiles_mojom_TileSource } from '//resources/mojo/components/ntp_tiles/tile_source.mojom-webui.js';
import { TextDirection as mojoBase_mojom_TextDirection } from '//resources/mojo/mojo/public/mojom/base/text_direction.mojom-webui.js';
import { SkColor as skia_mojom_SkColor } from '//resources/mojo/skia/public/mojom/skcolor.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export type MostVisitedPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<MostVisitedPageHandlerFactoryPendingReceiver>;
export declare class MostVisitedPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<MostVisitedPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<MostVisitedPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | MostVisitedPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface MostVisitedPageHandlerFactoryInterface {
    createPageHandler(page: MostVisitedPageRemote, handler: MostVisitedPageHandlerPendingReceiver): void;
}
export declare class MostVisitedPageHandlerFactoryRemote implements MostVisitedPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<MostVisitedPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<MostVisitedPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | MostVisitedPageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(page: MostVisitedPageRemote, handler: MostVisitedPageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the MostVisitedPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class MostVisitedPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<MostVisitedPageHandlerFactoryRemote, MostVisitedPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<MostVisitedPageHandlerFactoryRemote, MostVisitedPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: MostVisitedPageHandlerFactoryInterface);
}
export declare class MostVisitedPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): MostVisitedPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the MostVisitedPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class MostVisitedPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<MostVisitedPageHandlerFactoryRemote, MostVisitedPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<MostVisitedPageHandlerFactoryRemote, MostVisitedPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: MostVisitedPageRemote, handler: MostVisitedPageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type MostVisitedPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<MostVisitedPageHandlerPendingReceiver>;
export declare class MostVisitedPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<MostVisitedPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<MostVisitedPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | MostVisitedPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface MostVisitedPageHandlerInterface {
    addMostVisitedTile(url: url_mojom_Url, title: string): Promise<{
        success: boolean;
    }>;
    deleteMostVisitedTile(tile: MostVisitedTile): void;
    reorderMostVisitedTile(tile: MostVisitedTile, newPos: number): void;
    restoreMostVisitedDefaults(source: ntpTiles_mojom_TileSource): void;
    undoMostVisitedAutoRemoval(): void;
    undoMostVisitedTileAction(source: ntpTiles_mojom_TileSource): void;
    updateMostVisitedInfo(): void;
    updateMostVisitedTile(tile: MostVisitedTile, newUrl: url_mojom_Url, newTitle: string): Promise<{
        success: boolean;
    }>;
    prerenderMostVisitedTile(tile: MostVisitedTile): void;
    prefetchMostVisitedTile(tile: MostVisitedTile): void;
    preconnectMostVisitedTile(tile: MostVisitedTile): void;
    cancelPrerender(): void;
    getMostVisitedExpandedState(): Promise<{
        isExpanded: boolean;
    }>;
    setMostVisitedExpandedState(isExpanded: boolean): void;
    onMostVisitedTilesRendered(tiles: MostVisitedTile[], time: number): void;
    onMostVisitedTileNavigation(tile: MostVisitedTile, index: number, mouseButton: number, altKey: boolean, ctrlKey: boolean, metaKey: boolean, shiftKey: boolean): void;
}
export declare class MostVisitedPageHandlerRemote implements MostVisitedPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<MostVisitedPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<MostVisitedPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | MostVisitedPageHandlerPendingReceiverEndpoint);
    addMostVisitedTile(url: url_mojom_Url, title: string): Promise<{
        success: boolean;
    }>;
    deleteMostVisitedTile(tile: MostVisitedTile): void;
    reorderMostVisitedTile(tile: MostVisitedTile, newPos: number): void;
    restoreMostVisitedDefaults(source: ntpTiles_mojom_TileSource): void;
    undoMostVisitedAutoRemoval(): void;
    undoMostVisitedTileAction(source: ntpTiles_mojom_TileSource): void;
    updateMostVisitedInfo(): void;
    updateMostVisitedTile(tile: MostVisitedTile, newUrl: url_mojom_Url, newTitle: string): Promise<{
        success: boolean;
    }>;
    prerenderMostVisitedTile(tile: MostVisitedTile): void;
    prefetchMostVisitedTile(tile: MostVisitedTile): void;
    preconnectMostVisitedTile(tile: MostVisitedTile): void;
    cancelPrerender(): void;
    getMostVisitedExpandedState(): Promise<{
        isExpanded: boolean;
    }>;
    setMostVisitedExpandedState(isExpanded: boolean): void;
    onMostVisitedTilesRendered(tiles: MostVisitedTile[], time: number): void;
    onMostVisitedTileNavigation(tile: MostVisitedTile, index: number, mouseButton: number, altKey: boolean, ctrlKey: boolean, metaKey: boolean, shiftKey: boolean): void;
}
/**
 * An object which receives request messages for the MostVisitedPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class MostVisitedPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<MostVisitedPageHandlerRemote, MostVisitedPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<MostVisitedPageHandlerRemote, MostVisitedPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: MostVisitedPageHandlerInterface);
}
export declare class MostVisitedPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): MostVisitedPageHandlerRemote;
}
/**
 * An object which receives request messages for the MostVisitedPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class MostVisitedPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<MostVisitedPageHandlerRemote, MostVisitedPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<MostVisitedPageHandlerRemote, MostVisitedPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    addMostVisitedTile: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url, title: string) => any>;
    deleteMostVisitedTile: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tile: MostVisitedTile) => any>;
    reorderMostVisitedTile: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tile: MostVisitedTile, newPos: number) => any>;
    restoreMostVisitedDefaults: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(source: ntpTiles_mojom_TileSource) => any>;
    undoMostVisitedAutoRemoval: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    undoMostVisitedTileAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(source: ntpTiles_mojom_TileSource) => any>;
    updateMostVisitedInfo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    updateMostVisitedTile: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tile: MostVisitedTile, newUrl: url_mojom_Url, newTitle: string) => any>;
    prerenderMostVisitedTile: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tile: MostVisitedTile) => any>;
    prefetchMostVisitedTile: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tile: MostVisitedTile) => any>;
    preconnectMostVisitedTile: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tile: MostVisitedTile) => any>;
    cancelPrerender: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getMostVisitedExpandedState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setMostVisitedExpandedState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isExpanded: boolean) => any>;
    onMostVisitedTilesRendered: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tiles: MostVisitedTile[], time: number) => any>;
    onMostVisitedTileNavigation: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tile: MostVisitedTile, index: number, mouseButton: number, altKey: boolean, ctrlKey: boolean, metaKey: boolean, shiftKey: boolean) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type MostVisitedPagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<MostVisitedPagePendingReceiver>;
export declare class MostVisitedPagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<MostVisitedPage> {
    handle: mojo.internal.interfaceSupport.Endpoint<MostVisitedPagePendingReceiver>;
    constructor(handle: MojoHandle | MostVisitedPagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface MostVisitedPageInterface {
    setMostVisitedInfo(info: MostVisitedInfo): void;
    onMostVisitedTilesAutoRemoval(): void;
}
export declare class MostVisitedPageRemote implements MostVisitedPageInterface, mojo.internal.interfaceSupport.InterfaceRemote<MostVisitedPagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<MostVisitedPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | MostVisitedPagePendingReceiverEndpoint);
    setMostVisitedInfo(info: MostVisitedInfo): void;
    onMostVisitedTilesAutoRemoval(): void;
}
/**
 * An object which receives request messages for the MostVisitedPage
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class MostVisitedPageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<MostVisitedPageRemote, MostVisitedPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<MostVisitedPageRemote, MostVisitedPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: MostVisitedPageInterface);
}
export declare class MostVisitedPage {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): MostVisitedPageRemote;
}
/**
 * An object which receives request messages for the MostVisitedPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class MostVisitedPageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<MostVisitedPageRemote, MostVisitedPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<MostVisitedPageRemote, MostVisitedPagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    setMostVisitedInfo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(info: MostVisitedInfo) => any>;
    onMostVisitedTilesAutoRemoval: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const MostVisitedTileSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedThemeSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedPageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedPageHandler_AddMostVisitedTile_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedPageHandler_AddMostVisitedTile_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedPageHandler_DeleteMostVisitedTile_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedPageHandler_ReorderMostVisitedTile_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedPageHandler_RestoreMostVisitedDefaults_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedPageHandler_UndoMostVisitedAutoRemoval_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedPageHandler_UndoMostVisitedTileAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedPageHandler_UpdateMostVisitedInfo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedPageHandler_UpdateMostVisitedTile_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedPageHandler_PrerenderMostVisitedTile_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedPageHandler_PrefetchMostVisitedTile_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedPageHandler_PreconnectMostVisitedTile_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedPageHandler_CancelPrerender_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedPageHandler_GetMostVisitedExpandedState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedPageHandler_SetMostVisitedExpandedState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedPageHandler_OnMostVisitedTilesRendered_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedPageHandler_OnMostVisitedTileNavigation_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedPage_SetMostVisitedInfo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const MostVisitedPage_OnMostVisitedTilesAutoRemoval_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface MostVisitedTileMojoType {
    title: string;
    titleDirection: mojoBase_mojom_TextDirection;
    isQueryTile: boolean;
    allowUserEdit: boolean;
    allowUserDelete: boolean;
    url: url_mojom_Url;
    source: ntpTiles_mojom_TileSource;
    titleSource: number;
}
export type MostVisitedTile = MostVisitedTileMojoType;
export declare interface MostVisitedThemeMojoType {
    backgroundColor: skia_mojom_SkColor;
    useWhiteTileIcon: boolean;
    isDark: boolean;
}
export type MostVisitedTheme = MostVisitedThemeMojoType;
export declare interface MostVisitedInfoMojoType {
    customLinksEnabled: boolean;
    enterpriseShortcutsEnabled: boolean;
    visible: boolean;
    tiles: MostVisitedTile[];
}
export type MostVisitedInfo = MostVisitedInfoMojoType;
export declare interface MostVisitedPageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: MostVisitedPageRemote;
    handler: MostVisitedPageHandlerPendingReceiver;
}
export type MostVisitedPageHandlerFactory_CreatePageHandler_Params = MostVisitedPageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface MostVisitedPageHandler_AddMostVisitedTile_ParamsMojoType {
    url: url_mojom_Url;
    title: string;
}
export type MostVisitedPageHandler_AddMostVisitedTile_Params = MostVisitedPageHandler_AddMostVisitedTile_ParamsMojoType;
export declare interface MostVisitedPageHandler_AddMostVisitedTile_ResponseParamsMojoType {
    success: boolean;
}
export type MostVisitedPageHandler_AddMostVisitedTile_ResponseParams = MostVisitedPageHandler_AddMostVisitedTile_ResponseParamsMojoType;
export declare interface MostVisitedPageHandler_DeleteMostVisitedTile_ParamsMojoType {
    tile: MostVisitedTile;
}
export type MostVisitedPageHandler_DeleteMostVisitedTile_Params = MostVisitedPageHandler_DeleteMostVisitedTile_ParamsMojoType;
export declare interface MostVisitedPageHandler_ReorderMostVisitedTile_ParamsMojoType {
    tile: MostVisitedTile;
    newPos: number;
}
export type MostVisitedPageHandler_ReorderMostVisitedTile_Params = MostVisitedPageHandler_ReorderMostVisitedTile_ParamsMojoType;
export declare interface MostVisitedPageHandler_RestoreMostVisitedDefaults_ParamsMojoType {
    source: ntpTiles_mojom_TileSource;
}
export type MostVisitedPageHandler_RestoreMostVisitedDefaults_Params = MostVisitedPageHandler_RestoreMostVisitedDefaults_ParamsMojoType;
export declare interface MostVisitedPageHandler_UndoMostVisitedAutoRemoval_ParamsMojoType {
}
export type MostVisitedPageHandler_UndoMostVisitedAutoRemoval_Params = MostVisitedPageHandler_UndoMostVisitedAutoRemoval_ParamsMojoType;
export declare interface MostVisitedPageHandler_UndoMostVisitedTileAction_ParamsMojoType {
    source: ntpTiles_mojom_TileSource;
}
export type MostVisitedPageHandler_UndoMostVisitedTileAction_Params = MostVisitedPageHandler_UndoMostVisitedTileAction_ParamsMojoType;
export declare interface MostVisitedPageHandler_UpdateMostVisitedInfo_ParamsMojoType {
}
export type MostVisitedPageHandler_UpdateMostVisitedInfo_Params = MostVisitedPageHandler_UpdateMostVisitedInfo_ParamsMojoType;
export declare interface MostVisitedPageHandler_UpdateMostVisitedTile_ParamsMojoType {
    tile: MostVisitedTile;
    newUrl: url_mojom_Url;
    newTitle: string;
}
export type MostVisitedPageHandler_UpdateMostVisitedTile_Params = MostVisitedPageHandler_UpdateMostVisitedTile_ParamsMojoType;
export declare interface MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParamsMojoType {
    success: boolean;
}
export type MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParams = MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParamsMojoType;
export declare interface MostVisitedPageHandler_PrerenderMostVisitedTile_ParamsMojoType {
    tile: MostVisitedTile;
}
export type MostVisitedPageHandler_PrerenderMostVisitedTile_Params = MostVisitedPageHandler_PrerenderMostVisitedTile_ParamsMojoType;
export declare interface MostVisitedPageHandler_PrefetchMostVisitedTile_ParamsMojoType {
    tile: MostVisitedTile;
}
export type MostVisitedPageHandler_PrefetchMostVisitedTile_Params = MostVisitedPageHandler_PrefetchMostVisitedTile_ParamsMojoType;
export declare interface MostVisitedPageHandler_PreconnectMostVisitedTile_ParamsMojoType {
    tile: MostVisitedTile;
}
export type MostVisitedPageHandler_PreconnectMostVisitedTile_Params = MostVisitedPageHandler_PreconnectMostVisitedTile_ParamsMojoType;
export declare interface MostVisitedPageHandler_CancelPrerender_ParamsMojoType {
}
export type MostVisitedPageHandler_CancelPrerender_Params = MostVisitedPageHandler_CancelPrerender_ParamsMojoType;
export declare interface MostVisitedPageHandler_GetMostVisitedExpandedState_ParamsMojoType {
}
export type MostVisitedPageHandler_GetMostVisitedExpandedState_Params = MostVisitedPageHandler_GetMostVisitedExpandedState_ParamsMojoType;
export declare interface MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParamsMojoType {
    isExpanded: boolean;
}
export type MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParams = MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParamsMojoType;
export declare interface MostVisitedPageHandler_SetMostVisitedExpandedState_ParamsMojoType {
    isExpanded: boolean;
}
export type MostVisitedPageHandler_SetMostVisitedExpandedState_Params = MostVisitedPageHandler_SetMostVisitedExpandedState_ParamsMojoType;
export declare interface MostVisitedPageHandler_OnMostVisitedTilesRendered_ParamsMojoType {
    tiles: MostVisitedTile[];
    time: number;
}
export type MostVisitedPageHandler_OnMostVisitedTilesRendered_Params = MostVisitedPageHandler_OnMostVisitedTilesRendered_ParamsMojoType;
export declare interface MostVisitedPageHandler_OnMostVisitedTileNavigation_ParamsMojoType {
    tile: MostVisitedTile;
    index: number;
    mouseButton: number;
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
}
export type MostVisitedPageHandler_OnMostVisitedTileNavigation_Params = MostVisitedPageHandler_OnMostVisitedTileNavigation_ParamsMojoType;
export declare interface MostVisitedPage_SetMostVisitedInfo_ParamsMojoType {
    info: MostVisitedInfo;
}
export type MostVisitedPage_SetMostVisitedInfo_Params = MostVisitedPage_SetMostVisitedInfo_ParamsMojoType;
export declare interface MostVisitedPage_OnMostVisitedTilesAutoRemoval_ParamsMojoType {
}
export type MostVisitedPage_OnMostVisitedTilesAutoRemoval_Params = MostVisitedPage_OnMostVisitedTilesAutoRemoval_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<MostVisitedPageHandlerInterface, MostVisitedPageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<MostVisitedPageHandlerInterface, MostVisitedPageRemote, MostVisitedPageHandlerPendingReceiver, MostVisitedPagePendingReceiver, MostVisitedPageCallbackRouter, MostVisitedPageHandlerRemote>;
