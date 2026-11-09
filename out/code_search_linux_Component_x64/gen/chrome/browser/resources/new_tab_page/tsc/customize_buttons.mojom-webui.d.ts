import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { CustomizeChromeSection as sidePanel_mojom_CustomizeChromeSection } from './customize_chrome.mojom-webui.js';
export declare const SidePanelOpenTriggerSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SidePanelOpenTrigger {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kNewTabPage = 0,
    kNewTabFooter = 1
}
export type CustomizeButtonsHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CustomizeButtonsHandlerFactoryPendingReceiver>;
export declare class CustomizeButtonsHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CustomizeButtonsHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<CustomizeButtonsHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | CustomizeButtonsHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CustomizeButtonsHandlerFactoryInterface {
    createCustomizeButtonsHandler(page: CustomizeButtonsDocumentRemote, handler: CustomizeButtonsHandlerPendingReceiver): void;
}
export declare class CustomizeButtonsHandlerFactoryRemote implements CustomizeButtonsHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<CustomizeButtonsHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CustomizeButtonsHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CustomizeButtonsHandlerFactoryPendingReceiverEndpoint);
    createCustomizeButtonsHandler(page: CustomizeButtonsDocumentRemote, handler: CustomizeButtonsHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the CustomizeButtonsHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CustomizeButtonsHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CustomizeButtonsHandlerFactoryRemote, CustomizeButtonsHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeButtonsHandlerFactoryRemote, CustomizeButtonsHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CustomizeButtonsHandlerFactoryInterface);
}
export declare class CustomizeButtonsHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CustomizeButtonsHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the CustomizeButtonsHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CustomizeButtonsHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CustomizeButtonsHandlerFactoryRemote, CustomizeButtonsHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeButtonsHandlerFactoryRemote, CustomizeButtonsHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createCustomizeButtonsHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: CustomizeButtonsDocumentRemote, handler: CustomizeButtonsHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type CustomizeButtonsHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CustomizeButtonsHandlerPendingReceiver>;
export declare class CustomizeButtonsHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CustomizeButtonsHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<CustomizeButtonsHandlerPendingReceiver>;
    constructor(handle: MojoHandle | CustomizeButtonsHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CustomizeButtonsHandlerInterface {
    incrementCustomizeChromeButtonOpenCount(): void;
    incrementWallpaperSearchButtonShownCount(): void;
    setCustomizeChromeSidePanelVisible(visible: boolean, section: sidePanel_mojom_CustomizeChromeSection, trigger: SidePanelOpenTrigger): void;
}
export declare class CustomizeButtonsHandlerRemote implements CustomizeButtonsHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<CustomizeButtonsHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CustomizeButtonsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CustomizeButtonsHandlerPendingReceiverEndpoint);
    incrementCustomizeChromeButtonOpenCount(): void;
    incrementWallpaperSearchButtonShownCount(): void;
    setCustomizeChromeSidePanelVisible(visible: boolean, section: sidePanel_mojom_CustomizeChromeSection, trigger: SidePanelOpenTrigger): void;
}
/**
 * An object which receives request messages for the CustomizeButtonsHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CustomizeButtonsHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CustomizeButtonsHandlerRemote, CustomizeButtonsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeButtonsHandlerRemote, CustomizeButtonsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CustomizeButtonsHandlerInterface);
}
export declare class CustomizeButtonsHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CustomizeButtonsHandlerRemote;
}
/**
 * An object which receives request messages for the CustomizeButtonsHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CustomizeButtonsHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CustomizeButtonsHandlerRemote, CustomizeButtonsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeButtonsHandlerRemote, CustomizeButtonsHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    incrementCustomizeChromeButtonOpenCount: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    incrementWallpaperSearchButtonShownCount: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setCustomizeChromeSidePanelVisible: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(visible: boolean, section: sidePanel_mojom_CustomizeChromeSection, trigger: SidePanelOpenTrigger) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type CustomizeButtonsDocumentPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CustomizeButtonsDocumentPendingReceiver>;
export declare class CustomizeButtonsDocumentPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CustomizeButtonsDocument> {
    handle: mojo.internal.interfaceSupport.Endpoint<CustomizeButtonsDocumentPendingReceiver>;
    constructor(handle: MojoHandle | CustomizeButtonsDocumentPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CustomizeButtonsDocumentInterface {
    setCustomizeChromeSidePanelVisibility(visible: boolean): void;
}
export declare class CustomizeButtonsDocumentRemote implements CustomizeButtonsDocumentInterface, mojo.internal.interfaceSupport.InterfaceRemote<CustomizeButtonsDocumentPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CustomizeButtonsDocumentPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CustomizeButtonsDocumentPendingReceiverEndpoint);
    setCustomizeChromeSidePanelVisibility(visible: boolean): void;
}
/**
 * An object which receives request messages for the CustomizeButtonsDocument
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CustomizeButtonsDocumentReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CustomizeButtonsDocumentRemote, CustomizeButtonsDocumentPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeButtonsDocumentRemote, CustomizeButtonsDocumentPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CustomizeButtonsDocumentInterface);
}
export declare class CustomizeButtonsDocument {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CustomizeButtonsDocumentRemote;
}
/**
 * An object which receives request messages for the CustomizeButtonsDocument
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CustomizeButtonsDocumentCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CustomizeButtonsDocumentRemote, CustomizeButtonsDocumentPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizeButtonsDocumentRemote, CustomizeButtonsDocumentPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    setCustomizeChromeSidePanelVisibility: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(visible: boolean) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const CustomizeButtonsHandlerFactory_CreateCustomizeButtonsHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeButtonsHandler_IncrementCustomizeChromeButtonOpenCount_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeButtonsHandler_IncrementWallpaperSearchButtonShownCount_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeButtonsHandler_SetCustomizeChromeSidePanelVisible_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizeButtonsDocument_SetCustomizeChromeSidePanelVisibility_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface CustomizeButtonsHandlerFactory_CreateCustomizeButtonsHandler_ParamsMojoType {
    page: CustomizeButtonsDocumentRemote;
    handler: CustomizeButtonsHandlerPendingReceiver;
}
export type CustomizeButtonsHandlerFactory_CreateCustomizeButtonsHandler_Params = CustomizeButtonsHandlerFactory_CreateCustomizeButtonsHandler_ParamsMojoType;
export declare interface CustomizeButtonsHandler_IncrementCustomizeChromeButtonOpenCount_ParamsMojoType {
}
export type CustomizeButtonsHandler_IncrementCustomizeChromeButtonOpenCount_Params = CustomizeButtonsHandler_IncrementCustomizeChromeButtonOpenCount_ParamsMojoType;
export declare interface CustomizeButtonsHandler_IncrementWallpaperSearchButtonShownCount_ParamsMojoType {
}
export type CustomizeButtonsHandler_IncrementWallpaperSearchButtonShownCount_Params = CustomizeButtonsHandler_IncrementWallpaperSearchButtonShownCount_ParamsMojoType;
export declare interface CustomizeButtonsHandler_SetCustomizeChromeSidePanelVisible_ParamsMojoType {
    visible: boolean;
    section: sidePanel_mojom_CustomizeChromeSection;
    trigger: SidePanelOpenTrigger;
}
export type CustomizeButtonsHandler_SetCustomizeChromeSidePanelVisible_Params = CustomizeButtonsHandler_SetCustomizeChromeSidePanelVisible_ParamsMojoType;
export declare interface CustomizeButtonsDocument_SetCustomizeChromeSidePanelVisibility_ParamsMojoType {
    visible: boolean;
}
export type CustomizeButtonsDocument_SetCustomizeChromeSidePanelVisibility_Params = CustomizeButtonsDocument_SetCustomizeChromeSidePanelVisibility_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<CustomizeButtonsHandlerInterface, CustomizeButtonsDocumentCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<CustomizeButtonsHandlerInterface, CustomizeButtonsDocumentRemote, CustomizeButtonsHandlerPendingReceiver, CustomizeButtonsDocumentPendingReceiver, CustomizeButtonsDocumentCallbackRouter, CustomizeButtonsHandlerRemote>;
