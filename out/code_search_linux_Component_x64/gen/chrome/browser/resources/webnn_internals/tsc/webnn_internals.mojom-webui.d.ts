import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoBrowserProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoBrowserProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { WebNNContextIntrospectionDetails as webnn_mojom_WebNNContextIntrospectionDetails, WebNNExecutionProviderDetails as webnn_mojom_WebNNExecutionProviderDetails } from './webnn_service_introspection.mojom-webui.js';
import { BigBuffer as mojoBase_mojom_BigBuffer } from '//resources/mojo/mojo/public/mojom/base/big_buffer.mojom-webui.js';
export type PageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
export declare class PageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerInterface {
    setGraphRecordEnabled(enabled: boolean): void;
    isGraphRecording(): Promise<{
        enabled: boolean;
    }>;
    requestExistingContextsDetails(): Promise<{
        contextsInfo: webnn_mojom_WebNNContextIntrospectionDetails[];
    }>;
    requestAvailableExecutionProvidersDetails(): Promise<{
        availableExecutionProviders: webnn_mojom_WebNNExecutionProviderDetails[];
    }>;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    setGraphRecordEnabled(enabled: boolean): void;
    isGraphRecording(): Promise<{
        enabled: boolean;
    }>;
    requestExistingContextsDetails(): Promise<{
        contextsInfo: webnn_mojom_WebNNContextIntrospectionDetails[];
    }>;
    requestAvailableExecutionProvidersDetails(): Promise<{
        availableExecutionProviders: webnn_mojom_WebNNExecutionProviderDetails[];
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
    setGraphRecordEnabled: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    isGraphRecording: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    requestExistingContextsDetails: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    requestAvailableExecutionProvidersDetails: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
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
    exportGraphRecorded(jsonData: mojoBase_mojom_BigBuffer): void;
    onGraphRecordEnabledChanged(isEnabled: boolean): void;
    onUpdateExistingContextDetails(contextsInfo: webnn_mojom_WebNNContextIntrospectionDetails[]): void;
    onUpdateAvailableExecutionProvidersDetails(availableExecutionProviders: webnn_mojom_WebNNExecutionProviderDetails[]): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    exportGraphRecorded(jsonData: mojoBase_mojom_BigBuffer): void;
    onGraphRecordEnabledChanged(isEnabled: boolean): void;
    onUpdateExistingContextDetails(contextsInfo: webnn_mojom_WebNNContextIntrospectionDetails[]): void;
    onUpdateAvailableExecutionProvidersDetails(availableExecutionProviders: webnn_mojom_WebNNExecutionProviderDetails[]): void;
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
    exportGraphRecorded: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(jsonData: mojoBase_mojom_BigBuffer) => any>;
    onGraphRecordEnabledChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isEnabled: boolean) => any>;
    onUpdateExistingContextDetails: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(contextsInfo: webnn_mojom_WebNNContextIntrospectionDetails[]) => any>;
    onUpdateAvailableExecutionProvidersDetails: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(availableExecutionProviders: webnn_mojom_WebNNExecutionProviderDetails[]) => any>;
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
export declare const PageHandler_SetGraphRecordEnabled_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_IsGraphRecording_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_IsGraphRecording_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RequestExistingContextsDetails_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RequestExistingContextsDetails_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RequestAvailableExecutionProvidersDetails_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RequestAvailableExecutionProvidersDetails_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_ExportGraphRecorded_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnGraphRecordEnabledChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnUpdateExistingContextDetails_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnUpdateAvailableExecutionProvidersDetails_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface PageHandler_SetGraphRecordEnabled_ParamsMojoType {
    enabled: boolean;
}
export type PageHandler_SetGraphRecordEnabled_Params = PageHandler_SetGraphRecordEnabled_ParamsMojoType;
export declare interface PageHandler_IsGraphRecording_ParamsMojoType {
}
export type PageHandler_IsGraphRecording_Params = PageHandler_IsGraphRecording_ParamsMojoType;
export declare interface PageHandler_IsGraphRecording_ResponseParamsMojoType {
    enabled: boolean;
}
export type PageHandler_IsGraphRecording_ResponseParams = PageHandler_IsGraphRecording_ResponseParamsMojoType;
export declare interface PageHandler_RequestExistingContextsDetails_ParamsMojoType {
}
export type PageHandler_RequestExistingContextsDetails_Params = PageHandler_RequestExistingContextsDetails_ParamsMojoType;
export declare interface PageHandler_RequestExistingContextsDetails_ResponseParamsMojoType {
    contextsInfo: webnn_mojom_WebNNContextIntrospectionDetails[];
}
export type PageHandler_RequestExistingContextsDetails_ResponseParams = PageHandler_RequestExistingContextsDetails_ResponseParamsMojoType;
export declare interface PageHandler_RequestAvailableExecutionProvidersDetails_ParamsMojoType {
}
export type PageHandler_RequestAvailableExecutionProvidersDetails_Params = PageHandler_RequestAvailableExecutionProvidersDetails_ParamsMojoType;
export declare interface PageHandler_RequestAvailableExecutionProvidersDetails_ResponseParamsMojoType {
    availableExecutionProviders: webnn_mojom_WebNNExecutionProviderDetails[];
}
export type PageHandler_RequestAvailableExecutionProvidersDetails_ResponseParams = PageHandler_RequestAvailableExecutionProvidersDetails_ResponseParamsMojoType;
export declare interface Page_ExportGraphRecorded_ParamsMojoType {
    jsonData: mojoBase_mojom_BigBuffer;
}
export type Page_ExportGraphRecorded_Params = Page_ExportGraphRecorded_ParamsMojoType;
export declare interface Page_OnGraphRecordEnabledChanged_ParamsMojoType {
    isEnabled: boolean;
}
export type Page_OnGraphRecordEnabledChanged_Params = Page_OnGraphRecordEnabledChanged_ParamsMojoType;
export declare interface Page_OnUpdateExistingContextDetails_ParamsMojoType {
    contextsInfo: webnn_mojom_WebNNContextIntrospectionDetails[];
}
export type Page_OnUpdateExistingContextDetails_Params = Page_OnUpdateExistingContextDetails_ParamsMojoType;
export declare interface Page_OnUpdateAvailableExecutionProvidersDetails_ParamsMojoType {
    availableExecutionProviders: webnn_mojom_WebNNExecutionProviderDetails[];
}
export type Page_OnUpdateAvailableExecutionProvidersDetails_Params = Page_OnUpdateAvailableExecutionProvidersDetails_ParamsMojoType;
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    page: PageRemote;
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export type BrowserProxy = MojoBrowserProxy<PageHandlerInterface, PageCallbackRouter>;
export declare const browserProxyFactory: MojoBrowserProxyFactory<PageHandlerInterface, PageRemote, PageHandlerPendingReceiver, PagePendingReceiver, PageCallbackRouter, PageHandlerRemote>;
