import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '../../../mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '../../../mojo_browser_proxy.js';
export declare const FeaturePromoFeatureUsedActionSpec: {
    $: mojo.internal.MojomType;
};
export declare enum FeaturePromoFeatureUsedAction {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kClosePromoIfPresent = 0,
    kIgnorePromoIfPresent = 1
}
export type UserEducationMixedTrustHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<UserEducationMixedTrustHandlerFactoryPendingReceiver>;
export declare class UserEducationMixedTrustHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<UserEducationMixedTrustHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<UserEducationMixedTrustHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | UserEducationMixedTrustHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface UserEducationMixedTrustHandlerFactoryInterface {
    createUserEducationMixedTrustHandler(handler: UserEducationMixedTrustHandlerPendingReceiver): void;
}
export declare class UserEducationMixedTrustHandlerFactoryRemote implements UserEducationMixedTrustHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<UserEducationMixedTrustHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<UserEducationMixedTrustHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | UserEducationMixedTrustHandlerFactoryPendingReceiverEndpoint);
    createUserEducationMixedTrustHandler(handler: UserEducationMixedTrustHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the UserEducationMixedTrustHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class UserEducationMixedTrustHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<UserEducationMixedTrustHandlerFactoryRemote, UserEducationMixedTrustHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UserEducationMixedTrustHandlerFactoryRemote, UserEducationMixedTrustHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: UserEducationMixedTrustHandlerFactoryInterface);
}
export declare class UserEducationMixedTrustHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): UserEducationMixedTrustHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the UserEducationMixedTrustHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class UserEducationMixedTrustHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<UserEducationMixedTrustHandlerFactoryRemote, UserEducationMixedTrustHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UserEducationMixedTrustHandlerFactoryRemote, UserEducationMixedTrustHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createUserEducationMixedTrustHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: UserEducationMixedTrustHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type UserEducationMixedTrustHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<UserEducationMixedTrustHandlerPendingReceiver>;
export declare class UserEducationMixedTrustHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<UserEducationMixedTrustHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<UserEducationMixedTrustHandlerPendingReceiver>;
    constructor(handle: MojoHandle | UserEducationMixedTrustHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface UserEducationMixedTrustHandlerInterface {
    maybeShowFeaturePromo(params: FeaturePromoParams): void;
    notifyFeaturePromoFeatureUsed(featureName: string, action: FeaturePromoFeatureUsedAction): void;
    notifyAdditionalConditionEvent(eventName: string): void;
    notifyNewBadgeFeatureUsed(featureName: string): void;
    maybeShowNewBadgeFor(featureName: string): Promise<{
        shouldShow: boolean;
    }>;
}
export declare class UserEducationMixedTrustHandlerRemote implements UserEducationMixedTrustHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<UserEducationMixedTrustHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<UserEducationMixedTrustHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | UserEducationMixedTrustHandlerPendingReceiverEndpoint);
    maybeShowFeaturePromo(params: FeaturePromoParams): void;
    notifyFeaturePromoFeatureUsed(featureName: string, action: FeaturePromoFeatureUsedAction): void;
    notifyAdditionalConditionEvent(eventName: string): void;
    notifyNewBadgeFeatureUsed(featureName: string): void;
    maybeShowNewBadgeFor(featureName: string): Promise<{
        shouldShow: boolean;
    }>;
}
/**
 * An object which receives request messages for the UserEducationMixedTrustHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class UserEducationMixedTrustHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<UserEducationMixedTrustHandlerRemote, UserEducationMixedTrustHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UserEducationMixedTrustHandlerRemote, UserEducationMixedTrustHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: UserEducationMixedTrustHandlerInterface);
}
export declare class UserEducationMixedTrustHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): UserEducationMixedTrustHandlerRemote;
}
/**
 * An object which receives request messages for the UserEducationMixedTrustHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class UserEducationMixedTrustHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<UserEducationMixedTrustHandlerRemote, UserEducationMixedTrustHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<UserEducationMixedTrustHandlerRemote, UserEducationMixedTrustHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    maybeShowFeaturePromo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(params: FeaturePromoParams) => any>;
    notifyFeaturePromoFeatureUsed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(featureName: string, action: FeaturePromoFeatureUsedAction) => any>;
    notifyAdditionalConditionEvent: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(eventName: string) => any>;
    notifyNewBadgeFeatureUsed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(featureName: string) => any>;
    maybeShowNewBadgeFor: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(featureName: string) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const FeaturePromoParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UserEducationMixedTrustHandlerFactory_CreateUserEducationMixedTrustHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UserEducationMixedTrustHandler_MaybeShowFeaturePromo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UserEducationMixedTrustHandler_NotifyFeaturePromoFeatureUsed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UserEducationMixedTrustHandler_NotifyAdditionalConditionEvent_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UserEducationMixedTrustHandler_NotifyNewBadgeFeatureUsed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UserEducationMixedTrustHandler_MaybeShowNewBadgeFor_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UserEducationMixedTrustHandler_MaybeShowNewBadgeFor_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface FeaturePromoParamsMojoType {
    featureName: string;
    key: (string | null);
}
export type FeaturePromoParams = FeaturePromoParamsMojoType;
export declare interface UserEducationMixedTrustHandlerFactory_CreateUserEducationMixedTrustHandler_ParamsMojoType {
    handler: UserEducationMixedTrustHandlerPendingReceiver;
}
export type UserEducationMixedTrustHandlerFactory_CreateUserEducationMixedTrustHandler_Params = UserEducationMixedTrustHandlerFactory_CreateUserEducationMixedTrustHandler_ParamsMojoType;
export declare interface UserEducationMixedTrustHandler_MaybeShowFeaturePromo_ParamsMojoType {
    params: FeaturePromoParams;
}
export type UserEducationMixedTrustHandler_MaybeShowFeaturePromo_Params = UserEducationMixedTrustHandler_MaybeShowFeaturePromo_ParamsMojoType;
export declare interface UserEducationMixedTrustHandler_NotifyFeaturePromoFeatureUsed_ParamsMojoType {
    featureName: string;
    action: FeaturePromoFeatureUsedAction;
}
export type UserEducationMixedTrustHandler_NotifyFeaturePromoFeatureUsed_Params = UserEducationMixedTrustHandler_NotifyFeaturePromoFeatureUsed_ParamsMojoType;
export declare interface UserEducationMixedTrustHandler_NotifyAdditionalConditionEvent_ParamsMojoType {
    eventName: string;
}
export type UserEducationMixedTrustHandler_NotifyAdditionalConditionEvent_Params = UserEducationMixedTrustHandler_NotifyAdditionalConditionEvent_ParamsMojoType;
export declare interface UserEducationMixedTrustHandler_NotifyNewBadgeFeatureUsed_ParamsMojoType {
    featureName: string;
}
export type UserEducationMixedTrustHandler_NotifyNewBadgeFeatureUsed_Params = UserEducationMixedTrustHandler_NotifyNewBadgeFeatureUsed_ParamsMojoType;
export declare interface UserEducationMixedTrustHandler_MaybeShowNewBadgeFor_ParamsMojoType {
    featureName: string;
}
export type UserEducationMixedTrustHandler_MaybeShowNewBadgeFor_Params = UserEducationMixedTrustHandler_MaybeShowNewBadgeFor_ParamsMojoType;
export declare interface UserEducationMixedTrustHandler_MaybeShowNewBadgeFor_ResponseParamsMojoType {
    shouldShow: boolean;
}
export type UserEducationMixedTrustHandler_MaybeShowNewBadgeFor_ResponseParams = UserEducationMixedTrustHandler_MaybeShowNewBadgeFor_ResponseParamsMojoType;
export type BrowserProxy = MojoHandlerProxy<UserEducationMixedTrustHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<UserEducationMixedTrustHandlerInterface, UserEducationMixedTrustHandlerPendingReceiver, UserEducationMixedTrustHandlerRemote>;
