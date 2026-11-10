import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '//resources/mojo/mojo_browser_proxy.js';
export declare const CommandSpec: {
    $: mojo.internal.MojomType;
};
export declare enum Command {
    MIN_VALUE = 1,
    MAX_VALUE = 4,
    kOpenRewardsOnboarding = 1,
    kOpenWalletOnboarding = 2,
    kOpenVPNOnboarding = 3,
    kOpenAIChat = 4
}
export type BraveBrowserCommandHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<BraveBrowserCommandHandlerFactoryPendingReceiver>;
export declare class BraveBrowserCommandHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<BraveBrowserCommandHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<BraveBrowserCommandHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | BraveBrowserCommandHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface BraveBrowserCommandHandlerFactoryInterface {
    createBrowserCommandHandler(receiver: BraveBrowserCommandHandlerPendingReceiver): void;
}
export declare class BraveBrowserCommandHandlerFactoryRemote implements BraveBrowserCommandHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<BraveBrowserCommandHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<BraveBrowserCommandHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | BraveBrowserCommandHandlerFactoryPendingReceiverEndpoint);
    createBrowserCommandHandler(receiver: BraveBrowserCommandHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the BraveBrowserCommandHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class BraveBrowserCommandHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<BraveBrowserCommandHandlerFactoryRemote, BraveBrowserCommandHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BraveBrowserCommandHandlerFactoryRemote, BraveBrowserCommandHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: BraveBrowserCommandHandlerFactoryInterface);
}
export declare class BraveBrowserCommandHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): BraveBrowserCommandHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the BraveBrowserCommandHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class BraveBrowserCommandHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<BraveBrowserCommandHandlerFactoryRemote, BraveBrowserCommandHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BraveBrowserCommandHandlerFactoryRemote, BraveBrowserCommandHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createBrowserCommandHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(receiver: BraveBrowserCommandHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type BraveBrowserCommandHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<BraveBrowserCommandHandlerPendingReceiver>;
export declare class BraveBrowserCommandHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<BraveBrowserCommandHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<BraveBrowserCommandHandlerPendingReceiver>;
    constructor(handle: MojoHandle | BraveBrowserCommandHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface BraveBrowserCommandHandlerInterface {
    canExecuteCommand(commandId: Command): Promise<{
        canExecute: boolean;
    }>;
    executeCommand(command: Command): Promise<{
        executed: boolean;
    }>;
}
export declare class BraveBrowserCommandHandlerRemote implements BraveBrowserCommandHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<BraveBrowserCommandHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<BraveBrowserCommandHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | BraveBrowserCommandHandlerPendingReceiverEndpoint);
    canExecuteCommand(commandId: Command): Promise<{
        canExecute: boolean;
    }>;
    executeCommand(command: Command): Promise<{
        executed: boolean;
    }>;
}
/**
 * An object which receives request messages for the BraveBrowserCommandHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class BraveBrowserCommandHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<BraveBrowserCommandHandlerRemote, BraveBrowserCommandHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BraveBrowserCommandHandlerRemote, BraveBrowserCommandHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: BraveBrowserCommandHandlerInterface);
}
export declare class BraveBrowserCommandHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): BraveBrowserCommandHandlerRemote;
}
/**
 * An object which receives request messages for the BraveBrowserCommandHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class BraveBrowserCommandHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<BraveBrowserCommandHandlerRemote, BraveBrowserCommandHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BraveBrowserCommandHandlerRemote, BraveBrowserCommandHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    canExecuteCommand: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(commandId: Command) => any>;
    executeCommand: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(command: Command) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const BraveBrowserCommandHandlerFactory_CreateBrowserCommandHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BraveBrowserCommandHandler_CanExecuteCommand_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BraveBrowserCommandHandler_CanExecuteCommand_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BraveBrowserCommandHandler_ExecuteCommand_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BraveBrowserCommandHandler_ExecuteCommand_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface BraveBrowserCommandHandlerFactory_CreateBrowserCommandHandler_ParamsMojoType {
    receiver: BraveBrowserCommandHandlerPendingReceiver;
}
export type BraveBrowserCommandHandlerFactory_CreateBrowserCommandHandler_Params = BraveBrowserCommandHandlerFactory_CreateBrowserCommandHandler_ParamsMojoType;
export declare interface BraveBrowserCommandHandler_CanExecuteCommand_ParamsMojoType {
    commandId: Command;
}
export type BraveBrowserCommandHandler_CanExecuteCommand_Params = BraveBrowserCommandHandler_CanExecuteCommand_ParamsMojoType;
export declare interface BraveBrowserCommandHandler_CanExecuteCommand_ResponseParamsMojoType {
    canExecute: boolean;
}
export type BraveBrowserCommandHandler_CanExecuteCommand_ResponseParams = BraveBrowserCommandHandler_CanExecuteCommand_ResponseParamsMojoType;
export declare interface BraveBrowserCommandHandler_ExecuteCommand_ParamsMojoType {
    command: Command;
}
export type BraveBrowserCommandHandler_ExecuteCommand_Params = BraveBrowserCommandHandler_ExecuteCommand_ParamsMojoType;
export declare interface BraveBrowserCommandHandler_ExecuteCommand_ResponseParamsMojoType {
    executed: boolean;
}
export type BraveBrowserCommandHandler_ExecuteCommand_ResponseParams = BraveBrowserCommandHandler_ExecuteCommand_ResponseParamsMojoType;
export type BrowserProxy = MojoHandlerProxy<BraveBrowserCommandHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<BraveBrowserCommandHandlerInterface, BraveBrowserCommandHandlerPendingReceiver, BraveBrowserCommandHandlerRemote>;
