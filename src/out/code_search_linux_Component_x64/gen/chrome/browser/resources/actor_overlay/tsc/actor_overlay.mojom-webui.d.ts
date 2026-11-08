import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { SkColor as skia_mojom_SkColor } from '//resources/mojo/skia/public/mojom/skcolor.mojom-webui.js';
import { Point as gfx_mojom_Point } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
export type ActorOverlayPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ActorOverlayPageHandlerFactoryPendingReceiver>;
export declare class ActorOverlayPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ActorOverlayPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<ActorOverlayPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | ActorOverlayPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ActorOverlayPageHandlerFactoryInterface {
    createPageHandler(page: ActorOverlayPageRemote, receiver: ActorOverlayPageHandlerPendingReceiver): void;
}
export declare class ActorOverlayPageHandlerFactoryRemote implements ActorOverlayPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<ActorOverlayPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ActorOverlayPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ActorOverlayPageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(page: ActorOverlayPageRemote, receiver: ActorOverlayPageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the ActorOverlayPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ActorOverlayPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ActorOverlayPageHandlerFactoryRemote, ActorOverlayPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ActorOverlayPageHandlerFactoryRemote, ActorOverlayPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ActorOverlayPageHandlerFactoryInterface);
}
export declare class ActorOverlayPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ActorOverlayPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the ActorOverlayPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ActorOverlayPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ActorOverlayPageHandlerFactoryRemote, ActorOverlayPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ActorOverlayPageHandlerFactoryRemote, ActorOverlayPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: ActorOverlayPageRemote, receiver: ActorOverlayPageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ActorOverlayPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ActorOverlayPageHandlerPendingReceiver>;
export declare class ActorOverlayPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ActorOverlayPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<ActorOverlayPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | ActorOverlayPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ActorOverlayPageHandlerInterface {
    onHoverStatusChanged(isHovering: boolean): void;
    getCurrentBorderGlowVisibility(): Promise<{
        isVisible: boolean;
    }>;
}
export declare class ActorOverlayPageHandlerRemote implements ActorOverlayPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<ActorOverlayPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ActorOverlayPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ActorOverlayPageHandlerPendingReceiverEndpoint);
    onHoverStatusChanged(isHovering: boolean): void;
    getCurrentBorderGlowVisibility(): Promise<{
        isVisible: boolean;
    }>;
}
/**
 * An object which receives request messages for the ActorOverlayPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ActorOverlayPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ActorOverlayPageHandlerRemote, ActorOverlayPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ActorOverlayPageHandlerRemote, ActorOverlayPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ActorOverlayPageHandlerInterface);
}
export declare class ActorOverlayPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ActorOverlayPageHandlerRemote;
}
/**
 * An object which receives request messages for the ActorOverlayPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ActorOverlayPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ActorOverlayPageHandlerRemote, ActorOverlayPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ActorOverlayPageHandlerRemote, ActorOverlayPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onHoverStatusChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isHovering: boolean) => any>;
    getCurrentBorderGlowVisibility: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ActorOverlayPagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ActorOverlayPagePendingReceiver>;
export declare class ActorOverlayPagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ActorOverlayPage> {
    handle: mojo.internal.interfaceSupport.Endpoint<ActorOverlayPagePendingReceiver>;
    constructor(handle: MojoHandle | ActorOverlayPagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ActorOverlayPageInterface {
    setScrimBackground(isVisible: boolean): void;
    setBorderGlowVisibility(isVisible: boolean): void;
    setTheme(theme: Theme): void;
    moveCursorTo(point: gfx_mojom_Point): Promise<void>;
    triggerClickAnimation(): Promise<void>;
    setCursorChip(text: string): void;
}
export declare class ActorOverlayPageRemote implements ActorOverlayPageInterface, mojo.internal.interfaceSupport.InterfaceRemote<ActorOverlayPagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ActorOverlayPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ActorOverlayPagePendingReceiverEndpoint);
    setScrimBackground(isVisible: boolean): void;
    setBorderGlowVisibility(isVisible: boolean): void;
    setTheme(theme: Theme): void;
    moveCursorTo(point: gfx_mojom_Point): Promise<void>;
    triggerClickAnimation(): Promise<void>;
    setCursorChip(text: string): void;
}
/**
 * An object which receives request messages for the ActorOverlayPage
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ActorOverlayPageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ActorOverlayPageRemote, ActorOverlayPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ActorOverlayPageRemote, ActorOverlayPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ActorOverlayPageInterface);
}
export declare class ActorOverlayPage {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ActorOverlayPageRemote;
}
/**
 * An object which receives request messages for the ActorOverlayPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ActorOverlayPageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ActorOverlayPageRemote, ActorOverlayPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ActorOverlayPageRemote, ActorOverlayPagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    setScrimBackground: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isVisible: boolean) => any>;
    setBorderGlowVisibility: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isVisible: boolean) => any>;
    setTheme: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(theme: Theme) => any>;
    moveCursorTo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(point: gfx_mojom_Point) => any>;
    triggerClickAnimation: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setCursorChip: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(text: string) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const ThemeSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorOverlayPageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorOverlayPageHandler_OnHoverStatusChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorOverlayPage_SetScrimBackground_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorOverlayPage_SetBorderGlowVisibility_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorOverlayPage_SetTheme_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorOverlayPage_MoveCursorTo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorOverlayPage_MoveCursorTo_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorOverlayPage_TriggerClickAnimation_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorOverlayPage_TriggerClickAnimation_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorOverlayPage_SetCursorChip_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ThemeMojoType {
    borderColor: skia_mojom_SkColor;
    borderGlowColor: skia_mojom_SkColor;
    scrimColors: skia_mojom_SkColor[];
    magicCursorColor: skia_mojom_SkColor;
}
export type Theme = ThemeMojoType;
export declare interface ActorOverlayPageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: ActorOverlayPageRemote;
    receiver: ActorOverlayPageHandlerPendingReceiver;
}
export type ActorOverlayPageHandlerFactory_CreatePageHandler_Params = ActorOverlayPageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface ActorOverlayPageHandler_OnHoverStatusChanged_ParamsMojoType {
    isHovering: boolean;
}
export type ActorOverlayPageHandler_OnHoverStatusChanged_Params = ActorOverlayPageHandler_OnHoverStatusChanged_ParamsMojoType;
export declare interface ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ParamsMojoType {
}
export type ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_Params = ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ParamsMojoType;
export declare interface ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ResponseParamsMojoType {
    isVisible: boolean;
}
export type ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ResponseParams = ActorOverlayPageHandler_GetCurrentBorderGlowVisibility_ResponseParamsMojoType;
export declare interface ActorOverlayPage_SetScrimBackground_ParamsMojoType {
    isVisible: boolean;
}
export type ActorOverlayPage_SetScrimBackground_Params = ActorOverlayPage_SetScrimBackground_ParamsMojoType;
export declare interface ActorOverlayPage_SetBorderGlowVisibility_ParamsMojoType {
    isVisible: boolean;
}
export type ActorOverlayPage_SetBorderGlowVisibility_Params = ActorOverlayPage_SetBorderGlowVisibility_ParamsMojoType;
export declare interface ActorOverlayPage_SetTheme_ParamsMojoType {
    theme: Theme;
}
export type ActorOverlayPage_SetTheme_Params = ActorOverlayPage_SetTheme_ParamsMojoType;
export declare interface ActorOverlayPage_MoveCursorTo_ParamsMojoType {
    point: gfx_mojom_Point;
}
export type ActorOverlayPage_MoveCursorTo_Params = ActorOverlayPage_MoveCursorTo_ParamsMojoType;
export declare interface ActorOverlayPage_MoveCursorTo_ResponseParamsMojoType {
}
export type ActorOverlayPage_MoveCursorTo_ResponseParams = ActorOverlayPage_MoveCursorTo_ResponseParamsMojoType;
export declare interface ActorOverlayPage_TriggerClickAnimation_ParamsMojoType {
}
export type ActorOverlayPage_TriggerClickAnimation_Params = ActorOverlayPage_TriggerClickAnimation_ParamsMojoType;
export declare interface ActorOverlayPage_TriggerClickAnimation_ResponseParamsMojoType {
}
export type ActorOverlayPage_TriggerClickAnimation_ResponseParams = ActorOverlayPage_TriggerClickAnimation_ResponseParamsMojoType;
export declare interface ActorOverlayPage_SetCursorChip_ParamsMojoType {
    text: string;
}
export type ActorOverlayPage_SetCursorChip_Params = ActorOverlayPage_SetCursorChip_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<ActorOverlayPageHandlerInterface, ActorOverlayPageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<ActorOverlayPageHandlerInterface, ActorOverlayPageRemote, ActorOverlayPageHandlerPendingReceiver, ActorOverlayPagePendingReceiver, ActorOverlayPageCallbackRouter, ActorOverlayPageHandlerRemote>;
