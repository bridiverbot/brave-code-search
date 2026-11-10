import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '//resources/mojo/mojo_browser_proxy.js';
export declare const CommandSpec: {
    $: mojo.internal.MojomType;
};
export declare enum Command {
    MIN_VALUE = 0,
    MAX_VALUE = 21,
    kUnknownCommand = 0,
    kOpenSafetyCheck = 1,
    kOpenSafeBrowsingEnhancedProtectionSettings = 2,
    kOpenFeedbackForm = 3,
    kOpenPrivacyGuide = 4,
    kStartTabGroupTutorial = 5,
    kOpenPasswordManager = 6,
    kNoOpCommand = 7,
    kOpenPerformanceSettings = 8,
    kOpenNTPAndStartCustomizeChromeTutorial = 9,
    kStartPasswordManagerTutorial = 10,
    kStartSavedTabGroupTutorial = 11,
    kOpenAISettings = 12,
    kOpenSafetyCheckFromWhatsNew = 13,
    kOpenPaymentsSettings = 14,
    kOpenGlic = 16,
    kOpenGlicSettings = 17,
    kOpenSplitView = 19,
    kEnableVerticalTabs = 21
}
export type CommandHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CommandHandlerFactoryPendingReceiver>;
export declare class CommandHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CommandHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<CommandHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | CommandHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CommandHandlerFactoryInterface {
    createBrowserCommandHandler(handler: CommandHandlerPendingReceiver): void;
}
export declare class CommandHandlerFactoryRemote implements CommandHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<CommandHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CommandHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CommandHandlerFactoryPendingReceiverEndpoint);
    createBrowserCommandHandler(handler: CommandHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the CommandHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CommandHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CommandHandlerFactoryRemote, CommandHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CommandHandlerFactoryRemote, CommandHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CommandHandlerFactoryInterface);
}
export declare class CommandHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CommandHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the CommandHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CommandHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CommandHandlerFactoryRemote, CommandHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CommandHandlerFactoryRemote, CommandHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createBrowserCommandHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: CommandHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type CommandHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CommandHandlerPendingReceiver>;
export declare class CommandHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CommandHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<CommandHandlerPendingReceiver>;
    constructor(handle: MojoHandle | CommandHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CommandHandlerInterface {
    canExecuteCommand(commandId: Command): Promise<{
        canExecute: boolean;
    }>;
    executeCommand(commandId: Command, clickInfo: ClickInfo): Promise<{
        commandExecuted: boolean;
    }>;
}
export declare class CommandHandlerRemote implements CommandHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<CommandHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CommandHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CommandHandlerPendingReceiverEndpoint);
    canExecuteCommand(commandId: Command): Promise<{
        canExecute: boolean;
    }>;
    executeCommand(commandId: Command, clickInfo: ClickInfo): Promise<{
        commandExecuted: boolean;
    }>;
}
/**
 * An object which receives request messages for the CommandHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CommandHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CommandHandlerRemote, CommandHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CommandHandlerRemote, CommandHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CommandHandlerInterface);
}
export declare class CommandHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CommandHandlerRemote;
}
/**
 * An object which receives request messages for the CommandHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CommandHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CommandHandlerRemote, CommandHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CommandHandlerRemote, CommandHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    canExecuteCommand: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(commandId: Command) => any>;
    executeCommand: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(commandId: Command, clickInfo: ClickInfo) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const ClickInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const CommandHandlerFactory_CreateBrowserCommandHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CommandHandler_CanExecuteCommand_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CommandHandler_CanExecuteCommand_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CommandHandler_ExecuteCommand_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CommandHandler_ExecuteCommand_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ClickInfoMojoType {
    middleButton: boolean;
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
}
export type ClickInfo = ClickInfoMojoType;
export declare interface CommandHandlerFactory_CreateBrowserCommandHandler_ParamsMojoType {
    handler: CommandHandlerPendingReceiver;
}
export type CommandHandlerFactory_CreateBrowserCommandHandler_Params = CommandHandlerFactory_CreateBrowserCommandHandler_ParamsMojoType;
export declare interface CommandHandler_CanExecuteCommand_ParamsMojoType {
    commandId: Command;
}
export type CommandHandler_CanExecuteCommand_Params = CommandHandler_CanExecuteCommand_ParamsMojoType;
export declare interface CommandHandler_CanExecuteCommand_ResponseParamsMojoType {
    canExecute: boolean;
}
export type CommandHandler_CanExecuteCommand_ResponseParams = CommandHandler_CanExecuteCommand_ResponseParamsMojoType;
export declare interface CommandHandler_ExecuteCommand_ParamsMojoType {
    commandId: Command;
    clickInfo: ClickInfo;
}
export type CommandHandler_ExecuteCommand_Params = CommandHandler_ExecuteCommand_ParamsMojoType;
export declare interface CommandHandler_ExecuteCommand_ResponseParamsMojoType {
    commandExecuted: boolean;
}
export type CommandHandler_ExecuteCommand_ResponseParams = CommandHandler_ExecuteCommand_ResponseParamsMojoType;
export type BrowserProxy = MojoHandlerProxy<CommandHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<CommandHandlerInterface, CommandHandlerPendingReceiver, CommandHandlerRemote>;
