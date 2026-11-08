import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { SkColor as skia_mojom_SkColor } from '//resources/mojo/skia/public/mojom/skcolor.mojom-webui.js';
import { BrowserColorVariant as ui_mojom_BrowserColorVariant } from '//resources/mojo/ui/base/mojom/themes.mojom-webui.js';
export type ThemeColorPickerHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ThemeColorPickerHandlerFactoryPendingReceiver>;
export declare class ThemeColorPickerHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ThemeColorPickerHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<ThemeColorPickerHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | ThemeColorPickerHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ThemeColorPickerHandlerFactoryInterface {
    createThemeColorPickerHandler(client: ThemeColorPickerClientRemote, handler: ThemeColorPickerHandlerPendingReceiver): void;
}
export declare class ThemeColorPickerHandlerFactoryRemote implements ThemeColorPickerHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<ThemeColorPickerHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ThemeColorPickerHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ThemeColorPickerHandlerFactoryPendingReceiverEndpoint);
    createThemeColorPickerHandler(client: ThemeColorPickerClientRemote, handler: ThemeColorPickerHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the ThemeColorPickerHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ThemeColorPickerHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ThemeColorPickerHandlerFactoryRemote, ThemeColorPickerHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ThemeColorPickerHandlerFactoryRemote, ThemeColorPickerHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ThemeColorPickerHandlerFactoryInterface);
}
export declare class ThemeColorPickerHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ThemeColorPickerHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the ThemeColorPickerHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ThemeColorPickerHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ThemeColorPickerHandlerFactoryRemote, ThemeColorPickerHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ThemeColorPickerHandlerFactoryRemote, ThemeColorPickerHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createThemeColorPickerHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(client: ThemeColorPickerClientRemote, handler: ThemeColorPickerHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ThemeColorPickerHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ThemeColorPickerHandlerPendingReceiver>;
export declare class ThemeColorPickerHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ThemeColorPickerHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<ThemeColorPickerHandlerPendingReceiver>;
    constructor(handle: MojoHandle | ThemeColorPickerHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ThemeColorPickerHandlerInterface {
    getChromeColors(isDarkMode: boolean): Promise<{
        colors: ChromeColor[];
    }>;
    updateTheme(): void;
    setDefaultColor(): void;
    setGreyDefaultColor(): void;
    setSeedColor(seedColor: skia_mojom_SkColor, variant: ui_mojom_BrowserColorVariant): void;
    setSeedColorFromHue(hue: number): void;
    removeBackgroundImage(): void;
}
export declare class ThemeColorPickerHandlerRemote implements ThemeColorPickerHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<ThemeColorPickerHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ThemeColorPickerHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ThemeColorPickerHandlerPendingReceiverEndpoint);
    getChromeColors(isDarkMode: boolean): Promise<{
        colors: ChromeColor[];
    }>;
    updateTheme(): void;
    setDefaultColor(): void;
    setGreyDefaultColor(): void;
    setSeedColor(seedColor: skia_mojom_SkColor, variant: ui_mojom_BrowserColorVariant): void;
    setSeedColorFromHue(hue: number): void;
    removeBackgroundImage(): void;
}
/**
 * An object which receives request messages for the ThemeColorPickerHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ThemeColorPickerHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ThemeColorPickerHandlerRemote, ThemeColorPickerHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ThemeColorPickerHandlerRemote, ThemeColorPickerHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ThemeColorPickerHandlerInterface);
}
export declare class ThemeColorPickerHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ThemeColorPickerHandlerRemote;
}
/**
 * An object which receives request messages for the ThemeColorPickerHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ThemeColorPickerHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ThemeColorPickerHandlerRemote, ThemeColorPickerHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ThemeColorPickerHandlerRemote, ThemeColorPickerHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getChromeColors: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isDarkMode: boolean) => any>;
    updateTheme: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setDefaultColor: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setGreyDefaultColor: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setSeedColor: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(seedColor: skia_mojom_SkColor, variant: ui_mojom_BrowserColorVariant) => any>;
    setSeedColorFromHue: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(hue: number) => any>;
    removeBackgroundImage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ThemeColorPickerClientPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ThemeColorPickerClientPendingReceiver>;
export declare class ThemeColorPickerClientPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ThemeColorPickerClient> {
    handle: mojo.internal.interfaceSupport.Endpoint<ThemeColorPickerClientPendingReceiver>;
    constructor(handle: MojoHandle | ThemeColorPickerClientPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ThemeColorPickerClientInterface {
    setTheme(theme: Theme): void;
}
export declare class ThemeColorPickerClientRemote implements ThemeColorPickerClientInterface, mojo.internal.interfaceSupport.InterfaceRemote<ThemeColorPickerClientPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ThemeColorPickerClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ThemeColorPickerClientPendingReceiverEndpoint);
    setTheme(theme: Theme): void;
}
/**
 * An object which receives request messages for the ThemeColorPickerClient
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ThemeColorPickerClientReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ThemeColorPickerClientRemote, ThemeColorPickerClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ThemeColorPickerClientRemote, ThemeColorPickerClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ThemeColorPickerClientInterface);
}
export declare class ThemeColorPickerClient {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ThemeColorPickerClientRemote;
}
/**
 * An object which receives request messages for the ThemeColorPickerClient
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ThemeColorPickerClientCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ThemeColorPickerClientRemote, ThemeColorPickerClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ThemeColorPickerClientRemote, ThemeColorPickerClientPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    setTheme: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(theme: Theme) => any>;
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
export declare const ChromeColorSpec: {
    $: mojo.internal.MojomType;
};
export declare const ThemeColorPickerHandlerFactory_CreateThemeColorPickerHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ThemeColorPickerHandler_GetChromeColors_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ThemeColorPickerHandler_GetChromeColors_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ThemeColorPickerHandler_UpdateTheme_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ThemeColorPickerHandler_SetDefaultColor_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ThemeColorPickerHandler_SetGreyDefaultColor_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ThemeColorPickerHandler_SetSeedColor_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ThemeColorPickerHandler_SetSeedColorFromHue_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ThemeColorPickerHandler_RemoveBackgroundImage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ThemeColorPickerClient_SetTheme_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ThemeMojoType {
    hasBackgroundImage: boolean;
    hasThirdPartyTheme: boolean;
    isDarkMode: boolean;
    colorsManagedByPolicy: boolean;
    isGreyBaseline: boolean;
    followDeviceTheme: boolean;
    seedColorHue: number;
    backgroundImageMainColor: (skia_mojom_SkColor | null);
    seedColor: skia_mojom_SkColor;
    backgroundColor: skia_mojom_SkColor;
    foregroundColor: (skia_mojom_SkColor | null);
    colorPickerIconColor: skia_mojom_SkColor;
    browserColorVariant: ui_mojom_BrowserColorVariant;
}
export type Theme = ThemeMojoType;
export declare interface ChromeColorMojoType {
    name: string;
    seed: skia_mojom_SkColor;
    background: skia_mojom_SkColor;
    foreground: skia_mojom_SkColor;
    base: skia_mojom_SkColor;
    variant: ui_mojom_BrowserColorVariant;
}
export type ChromeColor = ChromeColorMojoType;
export declare interface ThemeColorPickerHandlerFactory_CreateThemeColorPickerHandler_ParamsMojoType {
    client: ThemeColorPickerClientRemote;
    handler: ThemeColorPickerHandlerPendingReceiver;
}
export type ThemeColorPickerHandlerFactory_CreateThemeColorPickerHandler_Params = ThemeColorPickerHandlerFactory_CreateThemeColorPickerHandler_ParamsMojoType;
export declare interface ThemeColorPickerHandler_GetChromeColors_ParamsMojoType {
    isDarkMode: boolean;
}
export type ThemeColorPickerHandler_GetChromeColors_Params = ThemeColorPickerHandler_GetChromeColors_ParamsMojoType;
export declare interface ThemeColorPickerHandler_GetChromeColors_ResponseParamsMojoType {
    colors: ChromeColor[];
}
export type ThemeColorPickerHandler_GetChromeColors_ResponseParams = ThemeColorPickerHandler_GetChromeColors_ResponseParamsMojoType;
export declare interface ThemeColorPickerHandler_UpdateTheme_ParamsMojoType {
}
export type ThemeColorPickerHandler_UpdateTheme_Params = ThemeColorPickerHandler_UpdateTheme_ParamsMojoType;
export declare interface ThemeColorPickerHandler_SetDefaultColor_ParamsMojoType {
}
export type ThemeColorPickerHandler_SetDefaultColor_Params = ThemeColorPickerHandler_SetDefaultColor_ParamsMojoType;
export declare interface ThemeColorPickerHandler_SetGreyDefaultColor_ParamsMojoType {
}
export type ThemeColorPickerHandler_SetGreyDefaultColor_Params = ThemeColorPickerHandler_SetGreyDefaultColor_ParamsMojoType;
export declare interface ThemeColorPickerHandler_SetSeedColor_ParamsMojoType {
    seedColor: skia_mojom_SkColor;
    variant: ui_mojom_BrowserColorVariant;
}
export type ThemeColorPickerHandler_SetSeedColor_Params = ThemeColorPickerHandler_SetSeedColor_ParamsMojoType;
export declare interface ThemeColorPickerHandler_SetSeedColorFromHue_ParamsMojoType {
    hue: number;
}
export type ThemeColorPickerHandler_SetSeedColorFromHue_Params = ThemeColorPickerHandler_SetSeedColorFromHue_ParamsMojoType;
export declare interface ThemeColorPickerHandler_RemoveBackgroundImage_ParamsMojoType {
}
export type ThemeColorPickerHandler_RemoveBackgroundImage_Params = ThemeColorPickerHandler_RemoveBackgroundImage_ParamsMojoType;
export declare interface ThemeColorPickerClient_SetTheme_ParamsMojoType {
    theme: Theme;
}
export type ThemeColorPickerClient_SetTheme_Params = ThemeColorPickerClient_SetTheme_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<ThemeColorPickerHandlerInterface, ThemeColorPickerClientCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<ThemeColorPickerHandlerInterface, ThemeColorPickerClientRemote, ThemeColorPickerHandlerPendingReceiver, ThemeColorPickerClientPendingReceiver, ThemeColorPickerClientCallbackRouter, ThemeColorPickerHandlerRemote>;
