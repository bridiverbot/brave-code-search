import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { ContentSettingPatternSource as contentSettings_mojom_ContentSettingPatternSource, ContentSettingsPattern as contentSettings_mojom_ContentSettingsPattern } from './content_settings.mojom-webui.js';
import { ContentSettingsType as contentSettings_mojom_ContentSettingsType } from './content_settings_types.mojom-webui.js';
export type PageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
export declare class PageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerInterface {
    readContentSettings(type: contentSettings_mojom_ContentSettingsType): Promise<{
        contentSettings: contentSettings_mojom_ContentSettingPatternSource[];
    }>;
    contentSettingsPatternToString(pattern: contentSettings_mojom_ContentSettingsPattern): Promise<{
        s: string;
    }>;
    stringToContentSettingsPattern(s: string): Promise<{
        pattern: contentSettings_mojom_ContentSettingsPattern;
    }>;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    readContentSettings(type: contentSettings_mojom_ContentSettingsType): Promise<{
        contentSettings: contentSettings_mojom_ContentSettingPatternSource[];
    }>;
    contentSettingsPatternToString(pattern: contentSettings_mojom_ContentSettingsPattern): Promise<{
        s: string;
    }>;
    stringToContentSettingsPattern(s: string): Promise<{
        pattern: contentSettings_mojom_ContentSettingsPattern;
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
    readContentSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(type: contentSettings_mojom_ContentSettingsType) => any>;
    contentSettingsPatternToString: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(pattern: contentSettings_mojom_ContentSettingsPattern) => any>;
    stringToContentSettingsPattern: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(s: string) => any>;
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
    createPageHandler(handler: PageHandlerPendingReceiver): void;
}
export declare class PageHandlerFactoryRemote implements PageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerFactoryPendingReceiverEndpoint);
    createPageHandler(handler: PageHandlerPendingReceiver): void;
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
    createPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: PageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const PageHandler_ReadContentSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ReadContentSettings_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ContentSettingsPatternToString_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_ContentSettingsPatternToString_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_StringToContentSettingsPattern_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_StringToContentSettingsPattern_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface PageHandler_ReadContentSettings_ParamsMojoType {
    type: contentSettings_mojom_ContentSettingsType;
}
export type PageHandler_ReadContentSettings_Params = PageHandler_ReadContentSettings_ParamsMojoType;
export declare interface PageHandler_ReadContentSettings_ResponseParamsMojoType {
    contentSettings: contentSettings_mojom_ContentSettingPatternSource[];
}
export type PageHandler_ReadContentSettings_ResponseParams = PageHandler_ReadContentSettings_ResponseParamsMojoType;
export declare interface PageHandler_ContentSettingsPatternToString_ParamsMojoType {
    pattern: contentSettings_mojom_ContentSettingsPattern;
}
export type PageHandler_ContentSettingsPatternToString_Params = PageHandler_ContentSettingsPatternToString_ParamsMojoType;
export declare interface PageHandler_ContentSettingsPatternToString_ResponseParamsMojoType {
    s: string;
}
export type PageHandler_ContentSettingsPatternToString_ResponseParams = PageHandler_ContentSettingsPatternToString_ResponseParamsMojoType;
export declare interface PageHandler_StringToContentSettingsPattern_ParamsMojoType {
    s: string;
}
export type PageHandler_StringToContentSettingsPattern_Params = PageHandler_StringToContentSettingsPattern_ParamsMojoType;
export declare interface PageHandler_StringToContentSettingsPattern_ResponseParamsMojoType {
    pattern: contentSettings_mojom_ContentSettingsPattern;
}
export type PageHandler_StringToContentSettingsPattern_ResponseParams = PageHandler_StringToContentSettingsPattern_ResponseParamsMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export type BrowserProxy = MojoHandlerProxy<PageHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<PageHandlerInterface, PageHandlerPendingReceiver, PageHandlerRemote>;
