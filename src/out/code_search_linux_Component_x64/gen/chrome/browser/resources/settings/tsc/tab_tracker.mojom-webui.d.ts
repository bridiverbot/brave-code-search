import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export type TabDataObserverPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<TabDataObserverPendingReceiver>;
export declare class TabDataObserverPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<TabDataObserver> {
    handle: mojo.internal.interfaceSupport.Endpoint<TabDataObserverPendingReceiver>;
    constructor(handle: MojoHandle | TabDataObserverPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface TabDataObserverInterface {
    tabDataChanged(tabs: TabData[]): void;
}
export declare class TabDataObserverRemote implements TabDataObserverInterface, mojo.internal.interfaceSupport.InterfaceRemote<TabDataObserverPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<TabDataObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | TabDataObserverPendingReceiverEndpoint);
    tabDataChanged(tabs: TabData[]): void;
}
/**
 * An object which receives request messages for the TabDataObserver
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class TabDataObserverReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<TabDataObserverRemote, TabDataObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TabDataObserverRemote, TabDataObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: TabDataObserverInterface);
}
export declare class TabDataObserver {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): TabDataObserverRemote;
}
/**
 * An object which receives request messages for the TabDataObserver
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class TabDataObserverCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<TabDataObserverRemote, TabDataObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TabDataObserverRemote, TabDataObserverPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    tabDataChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabs: TabData[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type TabTrackerServicePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<TabTrackerServicePendingReceiver>;
export declare class TabTrackerServicePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<TabTrackerService> {
    handle: mojo.internal.interfaceSupport.Endpoint<TabTrackerServicePendingReceiver>;
    constructor(handle: MojoHandle | TabTrackerServicePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface TabTrackerServiceInterface {
    addObserver(observer: TabDataObserverRemote): void;
}
export declare class TabTrackerServiceRemote implements TabTrackerServiceInterface, mojo.internal.interfaceSupport.InterfaceRemote<TabTrackerServicePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<TabTrackerServicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | TabTrackerServicePendingReceiverEndpoint);
    addObserver(observer: TabDataObserverRemote): void;
}
/**
 * An object which receives request messages for the TabTrackerService
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class TabTrackerServiceReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<TabTrackerServiceRemote, TabTrackerServicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TabTrackerServiceRemote, TabTrackerServicePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: TabTrackerServiceInterface);
}
export declare class TabTrackerService {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): TabTrackerServiceRemote;
}
/**
 * An object which receives request messages for the TabTrackerService
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class TabTrackerServiceCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<TabTrackerServiceRemote, TabTrackerServicePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TabTrackerServiceRemote, TabTrackerServicePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    addObserver: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(observer: TabDataObserverRemote) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const TabDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabDataObserver_TabDataChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabTrackerService_AddObserver_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface TabDataMojoType {
    id: number;
    contentId: number;
    title: string;
    url: url_mojom_Url;
}
export type TabData = TabDataMojoType;
export declare interface TabDataObserver_TabDataChanged_ParamsMojoType {
    tabs: TabData[];
}
export type TabDataObserver_TabDataChanged_Params = TabDataObserver_TabDataChanged_ParamsMojoType;
export declare interface TabTrackerService_AddObserver_ParamsMojoType {
    observer: TabDataObserverRemote;
}
export type TabTrackerService_AddObserver_Params = TabTrackerService_AddObserver_ParamsMojoType;
