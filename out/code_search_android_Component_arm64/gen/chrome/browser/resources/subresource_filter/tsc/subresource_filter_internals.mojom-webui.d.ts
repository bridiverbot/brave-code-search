import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export type SubresourceFilterInternalsHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<SubresourceFilterInternalsHandlerPendingReceiver>;
export declare class SubresourceFilterInternalsHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<SubresourceFilterInternalsHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<SubresourceFilterInternalsHandlerPendingReceiver>;
    constructor(handle: MojoHandle | SubresourceFilterInternalsHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface SubresourceFilterInternalsHandlerInterface {
    getInternalsPageSettings(): Promise<{
        settings: SubresourceFilterInternalsPageSettings;
    }>;
    setInternalsPageSettings(settings: SubresourceFilterInternalsPageSettings): void;
    observeInternalsPageSettings(observer: SubresourceFilterInternalsObserverRemote): void;
}
export declare class SubresourceFilterInternalsHandlerRemote implements SubresourceFilterInternalsHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<SubresourceFilterInternalsHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<SubresourceFilterInternalsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | SubresourceFilterInternalsHandlerPendingReceiverEndpoint);
    getInternalsPageSettings(): Promise<{
        settings: SubresourceFilterInternalsPageSettings;
    }>;
    setInternalsPageSettings(settings: SubresourceFilterInternalsPageSettings): void;
    observeInternalsPageSettings(observer: SubresourceFilterInternalsObserverRemote): void;
}
/**
 * An object which receives request messages for the SubresourceFilterInternalsHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class SubresourceFilterInternalsHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<SubresourceFilterInternalsHandlerRemote, SubresourceFilterInternalsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SubresourceFilterInternalsHandlerRemote, SubresourceFilterInternalsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: SubresourceFilterInternalsHandlerInterface);
}
export declare class SubresourceFilterInternalsHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): SubresourceFilterInternalsHandlerRemote;
}
/**
 * An object which receives request messages for the SubresourceFilterInternalsHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class SubresourceFilterInternalsHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<SubresourceFilterInternalsHandlerRemote, SubresourceFilterInternalsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SubresourceFilterInternalsHandlerRemote, SubresourceFilterInternalsHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getInternalsPageSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setInternalsPageSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(settings: SubresourceFilterInternalsPageSettings) => any>;
    observeInternalsPageSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(observer: SubresourceFilterInternalsObserverRemote) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type SubresourceFilterInternalsObserverPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<SubresourceFilterInternalsObserverPendingReceiver>;
export declare class SubresourceFilterInternalsObserverPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<SubresourceFilterInternalsObserver> {
    handle: mojo.internal.interfaceSupport.Endpoint<SubresourceFilterInternalsObserverPendingReceiver>;
    constructor(handle: MojoHandle | SubresourceFilterInternalsObserverPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface SubresourceFilterInternalsObserverInterface {
    onInternalsPageSettingsChanged(settings: SubresourceFilterInternalsPageSettings): void;
}
export declare class SubresourceFilterInternalsObserverRemote implements SubresourceFilterInternalsObserverInterface, mojo.internal.interfaceSupport.InterfaceRemote<SubresourceFilterInternalsObserverPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<SubresourceFilterInternalsObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | SubresourceFilterInternalsObserverPendingReceiverEndpoint);
    onInternalsPageSettingsChanged(settings: SubresourceFilterInternalsPageSettings): void;
}
/**
 * An object which receives request messages for the SubresourceFilterInternalsObserver
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class SubresourceFilterInternalsObserverReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<SubresourceFilterInternalsObserverRemote, SubresourceFilterInternalsObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SubresourceFilterInternalsObserverRemote, SubresourceFilterInternalsObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: SubresourceFilterInternalsObserverInterface);
}
export declare class SubresourceFilterInternalsObserver {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): SubresourceFilterInternalsObserverRemote;
}
/**
 * An object which receives request messages for the SubresourceFilterInternalsObserver
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class SubresourceFilterInternalsObserverCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<SubresourceFilterInternalsObserverRemote, SubresourceFilterInternalsObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SubresourceFilterInternalsObserverRemote, SubresourceFilterInternalsObserverPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onInternalsPageSettingsChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(settings: SubresourceFilterInternalsPageSettings) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const SubresourceFilterInternalsPageSettingsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SubresourceFilterInternalsHandler_GetInternalsPageSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SubresourceFilterInternalsHandler_GetInternalsPageSettings_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SubresourceFilterInternalsHandler_SetInternalsPageSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SubresourceFilterInternalsHandler_ObserveInternalsPageSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SubresourceFilterInternalsObserver_OnInternalsPageSettingsChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface SubresourceFilterInternalsPageSettingsMojoType {
    shouldHighlightAds: boolean;
}
export type SubresourceFilterInternalsPageSettings = SubresourceFilterInternalsPageSettingsMojoType;
export declare interface SubresourceFilterInternalsHandler_GetInternalsPageSettings_ParamsMojoType {
}
export type SubresourceFilterInternalsHandler_GetInternalsPageSettings_Params = SubresourceFilterInternalsHandler_GetInternalsPageSettings_ParamsMojoType;
export declare interface SubresourceFilterInternalsHandler_GetInternalsPageSettings_ResponseParamsMojoType {
    settings: SubresourceFilterInternalsPageSettings;
}
export type SubresourceFilterInternalsHandler_GetInternalsPageSettings_ResponseParams = SubresourceFilterInternalsHandler_GetInternalsPageSettings_ResponseParamsMojoType;
export declare interface SubresourceFilterInternalsHandler_SetInternalsPageSettings_ParamsMojoType {
    settings: SubresourceFilterInternalsPageSettings;
}
export type SubresourceFilterInternalsHandler_SetInternalsPageSettings_Params = SubresourceFilterInternalsHandler_SetInternalsPageSettings_ParamsMojoType;
export declare interface SubresourceFilterInternalsHandler_ObserveInternalsPageSettings_ParamsMojoType {
    observer: SubresourceFilterInternalsObserverRemote;
}
export type SubresourceFilterInternalsHandler_ObserveInternalsPageSettings_Params = SubresourceFilterInternalsHandler_ObserveInternalsPageSettings_ParamsMojoType;
export declare interface SubresourceFilterInternalsObserver_OnInternalsPageSettingsChanged_ParamsMojoType {
    settings: SubresourceFilterInternalsPageSettings;
}
export type SubresourceFilterInternalsObserver_OnInternalsPageSettingsChanged_Params = SubresourceFilterInternalsObserver_OnInternalsPageSettingsChanged_ParamsMojoType;
