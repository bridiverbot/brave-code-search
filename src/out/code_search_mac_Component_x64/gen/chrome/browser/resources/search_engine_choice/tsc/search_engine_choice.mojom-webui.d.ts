import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '//resources/mojo/mojo_browser_proxy.js';
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
export type PageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
export declare class PageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<PageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | PageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PageHandlerInterface {
    displayDialog(): void;
    handleSearchEngineChoiceSelected(prepopulateId: number, saveGuestModeSelection: boolean): void;
    handleLearnMoreLinkClicked(): void;
    handleMoreButtonClicked(): void;
    recordScrollState(scrollState: PageHandler_ScrollState): void;
}
export declare class PageHandlerRemote implements PageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PageHandlerPendingReceiverEndpoint);
    displayDialog(): void;
    handleSearchEngineChoiceSelected(prepopulateId: number, saveGuestModeSelection: boolean): void;
    handleLearnMoreLinkClicked(): void;
    handleMoreButtonClicked(): void;
    recordScrollState(scrollState: PageHandler_ScrollState): void;
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
export declare const PageHandler_ScrollStateSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PageHandler_ScrollState {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kAtTheBottom = 0,
    kAtTheBottomWithErrorMargin = 1,
    kNotAtTheBottom = 2
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
    displayDialog: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    handleSearchEngineChoiceSelected: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(prepopulateId: number, saveGuestModeSelection: boolean) => any>;
    handleLearnMoreLinkClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    handleMoreButtonClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    recordScrollState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(scrollState: PageHandler_ScrollState) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const PageHandlerFactory_CreatePageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_DisplayDialog_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_HandleSearchEngineChoiceSelected_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_HandleLearnMoreLinkClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_HandleMoreButtonClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PageHandler_RecordScrollState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface PageHandlerFactory_CreatePageHandler_ParamsMojoType {
    handler: PageHandlerPendingReceiver;
}
export type PageHandlerFactory_CreatePageHandler_Params = PageHandlerFactory_CreatePageHandler_ParamsMojoType;
export declare interface PageHandler_DisplayDialog_ParamsMojoType {
}
export type PageHandler_DisplayDialog_Params = PageHandler_DisplayDialog_ParamsMojoType;
export declare interface PageHandler_HandleSearchEngineChoiceSelected_ParamsMojoType {
    prepopulateId: number;
    saveGuestModeSelection: boolean;
}
export type PageHandler_HandleSearchEngineChoiceSelected_Params = PageHandler_HandleSearchEngineChoiceSelected_ParamsMojoType;
export declare interface PageHandler_HandleLearnMoreLinkClicked_ParamsMojoType {
}
export type PageHandler_HandleLearnMoreLinkClicked_Params = PageHandler_HandleLearnMoreLinkClicked_ParamsMojoType;
export declare interface PageHandler_HandleMoreButtonClicked_ParamsMojoType {
}
export type PageHandler_HandleMoreButtonClicked_Params = PageHandler_HandleMoreButtonClicked_ParamsMojoType;
export declare interface PageHandler_RecordScrollState_ParamsMojoType {
    scrollState: PageHandler_ScrollState;
}
export type PageHandler_RecordScrollState_Params = PageHandler_RecordScrollState_ParamsMojoType;
export type BrowserProxy = MojoHandlerProxy<PageHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<PageHandlerInterface, PageHandlerPendingReceiver, PageHandlerRemote>;
