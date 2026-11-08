import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { ActionModifiers as searchbox_mojom_ActionModifiers } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { SuggestTemplateInfo as suggestTemplateInfo_mojom_SuggestTemplateInfo } from '//resources/mojo/components/omnibox/browser/suggest_template_info.mojom-webui.js';
import { Time as mojoBase_mojom_Time } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export type ActionChipsHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ActionChipsHandlerPendingReceiver>;
export declare class ActionChipsHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ActionChipsHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<ActionChipsHandlerPendingReceiver>;
    constructor(handle: MojoHandle | ActionChipsHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ActionChipsHandlerInterface {
    startActionChipsRetrieval(): void;
    activateMetricsFunnel(funnelName: string): void;
    setActionChipsVisibility(isVisible: boolean): void;
    navigateToAim(queryText: string, mouseButton: number, modifiers: searchbox_mojom_ActionModifiers): void;
}
export declare class ActionChipsHandlerRemote implements ActionChipsHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<ActionChipsHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ActionChipsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ActionChipsHandlerPendingReceiverEndpoint);
    startActionChipsRetrieval(): void;
    activateMetricsFunnel(funnelName: string): void;
    setActionChipsVisibility(isVisible: boolean): void;
    navigateToAim(queryText: string, mouseButton: number, modifiers: searchbox_mojom_ActionModifiers): void;
}
/**
 * An object which receives request messages for the ActionChipsHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ActionChipsHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ActionChipsHandlerRemote, ActionChipsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ActionChipsHandlerRemote, ActionChipsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ActionChipsHandlerInterface);
}
export declare class ActionChipsHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ActionChipsHandlerRemote;
}
/**
 * An object which receives request messages for the ActionChipsHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ActionChipsHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ActionChipsHandlerRemote, ActionChipsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ActionChipsHandlerRemote, ActionChipsHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    startActionChipsRetrieval: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    activateMetricsFunnel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(funnelName: string) => any>;
    setActionChipsVisibility: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isVisible: boolean) => any>;
    navigateToAim: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(queryText: string, mouseButton: number, modifiers: searchbox_mojom_ActionModifiers) => any>;
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
    onActionChipsChanged(actionChips: ActionChip[]): void;
}
export declare class PageRemote implements PageInterface, mojo.internal.interfaceSupport.InterfaceRemote<PagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PagePendingReceiverEndpoint);
    onActionChipsChanged(actionChips: ActionChip[]): void;
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
    onActionChipsChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(actionChips: ActionChip[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ActionChipsHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ActionChipsHandlerFactoryPendingReceiver>;
export declare class ActionChipsHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ActionChipsHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<ActionChipsHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | ActionChipsHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ActionChipsHandlerFactoryInterface {
    createActionChipsHandler(handler: ActionChipsHandlerPendingReceiver, page: PageRemote): void;
}
export declare class ActionChipsHandlerFactoryRemote implements ActionChipsHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<ActionChipsHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ActionChipsHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ActionChipsHandlerFactoryPendingReceiverEndpoint);
    createActionChipsHandler(handler: ActionChipsHandlerPendingReceiver, page: PageRemote): void;
}
/**
 * An object which receives request messages for the ActionChipsHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ActionChipsHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ActionChipsHandlerFactoryRemote, ActionChipsHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ActionChipsHandlerFactoryRemote, ActionChipsHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ActionChipsHandlerFactoryInterface);
}
export declare class ActionChipsHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ActionChipsHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the ActionChipsHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ActionChipsHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ActionChipsHandlerFactoryRemote, ActionChipsHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ActionChipsHandlerFactoryRemote, ActionChipsHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createActionChipsHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: ActionChipsHandlerPendingReceiver, page: PageRemote) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const TabInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActionChipSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActionChipsHandler_StartActionChipsRetrieval_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActionChipsHandler_ActivateMetricsFunnel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActionChipsHandler_SetActionChipsVisibility_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActionChipsHandler_NavigateToAim_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const Page_OnActionChipsChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActionChipsHandlerFactory_CreateActionChipsHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface TabInfoMojoType {
    tabId: number;
    title: string;
    url: url_mojom_Url;
    lastActiveTime: mojoBase_mojom_Time;
}
export type TabInfo = TabInfoMojoType;
export declare interface ActionChipMojoType {
    suggestion: string;
    suggestTemplateInfo: suggestTemplateInfo_mojom_SuggestTemplateInfo;
    tab: (TabInfo | null);
}
export type ActionChip = ActionChipMojoType;
export declare interface ActionChipsHandler_StartActionChipsRetrieval_ParamsMojoType {
}
export type ActionChipsHandler_StartActionChipsRetrieval_Params = ActionChipsHandler_StartActionChipsRetrieval_ParamsMojoType;
export declare interface ActionChipsHandler_ActivateMetricsFunnel_ParamsMojoType {
    funnelName: string;
}
export type ActionChipsHandler_ActivateMetricsFunnel_Params = ActionChipsHandler_ActivateMetricsFunnel_ParamsMojoType;
export declare interface ActionChipsHandler_SetActionChipsVisibility_ParamsMojoType {
    isVisible: boolean;
}
export type ActionChipsHandler_SetActionChipsVisibility_Params = ActionChipsHandler_SetActionChipsVisibility_ParamsMojoType;
export declare interface ActionChipsHandler_NavigateToAim_ParamsMojoType {
    queryText: string;
    mouseButton: number;
    modifiers: searchbox_mojom_ActionModifiers;
}
export type ActionChipsHandler_NavigateToAim_Params = ActionChipsHandler_NavigateToAim_ParamsMojoType;
export declare interface Page_OnActionChipsChanged_ParamsMojoType {
    actionChips: ActionChip[];
}
export type Page_OnActionChipsChanged_Params = Page_OnActionChipsChanged_ParamsMojoType;
export declare interface ActionChipsHandlerFactory_CreateActionChipsHandler_ParamsMojoType {
    handler: ActionChipsHandlerPendingReceiver;
    page: PageRemote;
}
export type ActionChipsHandlerFactory_CreateActionChipsHandler_Params = ActionChipsHandlerFactory_CreateActionChipsHandler_ParamsMojoType;
