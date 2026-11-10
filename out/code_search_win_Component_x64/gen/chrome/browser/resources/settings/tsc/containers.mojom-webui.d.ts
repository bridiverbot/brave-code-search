import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { SkColor as skia_mojom_SkColor } from '//resources/mojo/skia/public/mojom/skcolor.mojom-webui.js';
export declare const IconSpec: {
    $: mojo.internal.MojomType;
};
export declare enum Icon {
    MIN_VALUE = 0,
    MAX_VALUE = 10,
    kPersonal = 0,
    kWork = 1,
    kShopping = 2,
    kSocial = 3,
    kEvents = 4,
    kBanking = 5,
    kStar = 6,
    kTravel = 7,
    kSchool = 8,
    kPrivate = 9,
    kMessaging = 10,
    kDefault = 0
}
export declare const ContainerOperationErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ContainerOperationError {
    MIN_VALUE = 1,
    MAX_VALUE = 6,
    kIdShouldBeEmpty = 1,
    kIdShouldBeSet = 2,
    kInvalidName = 3,
    kInvalidIcon = 4,
    kInvalidBackgroundColor = 5,
    kNotFound = 6
}
export type ContainersSettingsHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ContainersSettingsHandlerPendingReceiver>;
export declare class ContainersSettingsHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ContainersSettingsHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<ContainersSettingsHandlerPendingReceiver>;
    constructor(handle: MojoHandle | ContainersSettingsHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ContainersSettingsHandlerInterface {
    bindUI(ui: ContainersSettingsUIRemote): void;
    getContainers(): Promise<{
        containers: Container[];
    }>;
    addContainer(container: Container): Promise<{
        error: (ContainerOperationError | null);
    }>;
    updateContainer(container: Container): Promise<{
        error: (ContainerOperationError | null);
    }>;
    removeContainer(id: string): Promise<{
        error: (ContainerOperationError | null);
    }>;
    reorderContainers(orderedIds: string[]): Promise<{
        error: (ContainerOperationError | null);
    }>;
}
export declare class ContainersSettingsHandlerRemote implements ContainersSettingsHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<ContainersSettingsHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ContainersSettingsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ContainersSettingsHandlerPendingReceiverEndpoint);
    bindUI(ui: ContainersSettingsUIRemote): void;
    getContainers(): Promise<{
        containers: Container[];
    }>;
    addContainer(container: Container): Promise<{
        error: (ContainerOperationError | null);
    }>;
    updateContainer(container: Container): Promise<{
        error: (ContainerOperationError | null);
    }>;
    removeContainer(id: string): Promise<{
        error: (ContainerOperationError | null);
    }>;
    reorderContainers(orderedIds: string[]): Promise<{
        error: (ContainerOperationError | null);
    }>;
}
/**
 * An object which receives request messages for the ContainersSettingsHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ContainersSettingsHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ContainersSettingsHandlerRemote, ContainersSettingsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ContainersSettingsHandlerRemote, ContainersSettingsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ContainersSettingsHandlerInterface);
}
export declare class ContainersSettingsHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ContainersSettingsHandlerRemote;
}
/**
 * An object which receives request messages for the ContainersSettingsHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ContainersSettingsHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ContainersSettingsHandlerRemote, ContainersSettingsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ContainersSettingsHandlerRemote, ContainersSettingsHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    bindUI: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(ui: ContainersSettingsUIRemote) => any>;
    getContainers: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    addContainer: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(container: Container) => any>;
    updateContainer: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(container: Container) => any>;
    removeContainer: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    reorderContainers: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(orderedIds: string[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ContainersSettingsUIPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ContainersSettingsUIPendingReceiver>;
export declare class ContainersSettingsUIPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ContainersSettingsUI> {
    handle: mojo.internal.interfaceSupport.Endpoint<ContainersSettingsUIPendingReceiver>;
    constructor(handle: MojoHandle | ContainersSettingsUIPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ContainersSettingsUIInterface {
    onContainersChanged(containers: Container[]): void;
}
export declare class ContainersSettingsUIRemote implements ContainersSettingsUIInterface, mojo.internal.interfaceSupport.InterfaceRemote<ContainersSettingsUIPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ContainersSettingsUIPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ContainersSettingsUIPendingReceiverEndpoint);
    onContainersChanged(containers: Container[]): void;
}
/**
 * An object which receives request messages for the ContainersSettingsUI
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ContainersSettingsUIReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ContainersSettingsUIRemote, ContainersSettingsUIPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ContainersSettingsUIRemote, ContainersSettingsUIPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ContainersSettingsUIInterface);
}
export declare class ContainersSettingsUI {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ContainersSettingsUIRemote;
}
/**
 * An object which receives request messages for the ContainersSettingsUI
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ContainersSettingsUICallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ContainersSettingsUIRemote, ContainersSettingsUIPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ContainersSettingsUIRemote, ContainersSettingsUIPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onContainersChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(containers: Container[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const ContainerSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContainersSettingsHandler_BindUI_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContainersSettingsHandler_GetContainers_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContainersSettingsHandler_GetContainers_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContainersSettingsHandler_AddContainer_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContainersSettingsHandler_AddContainer_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContainersSettingsHandler_UpdateContainer_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContainersSettingsHandler_UpdateContainer_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContainersSettingsHandler_RemoveContainer_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContainersSettingsHandler_RemoveContainer_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContainersSettingsHandler_ReorderContainers_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContainersSettingsHandler_ReorderContainers_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContainersSettingsUI_OnContainersChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ContainerMojoType {
    id: string;
    name: string;
    icon: Icon;
    backgroundColor: skia_mojom_SkColor;
}
export type Container = ContainerMojoType;
export declare interface ContainersSettingsHandler_BindUI_ParamsMojoType {
    ui: ContainersSettingsUIRemote;
}
export type ContainersSettingsHandler_BindUI_Params = ContainersSettingsHandler_BindUI_ParamsMojoType;
export declare interface ContainersSettingsHandler_GetContainers_ParamsMojoType {
}
export type ContainersSettingsHandler_GetContainers_Params = ContainersSettingsHandler_GetContainers_ParamsMojoType;
export declare interface ContainersSettingsHandler_GetContainers_ResponseParamsMojoType {
    containers: Container[];
}
export type ContainersSettingsHandler_GetContainers_ResponseParams = ContainersSettingsHandler_GetContainers_ResponseParamsMojoType;
export declare interface ContainersSettingsHandler_AddContainer_ParamsMojoType {
    container: Container;
}
export type ContainersSettingsHandler_AddContainer_Params = ContainersSettingsHandler_AddContainer_ParamsMojoType;
export declare interface ContainersSettingsHandler_AddContainer_ResponseParamsMojoType {
    error: (ContainerOperationError | null);
}
export type ContainersSettingsHandler_AddContainer_ResponseParams = ContainersSettingsHandler_AddContainer_ResponseParamsMojoType;
export declare interface ContainersSettingsHandler_UpdateContainer_ParamsMojoType {
    container: Container;
}
export type ContainersSettingsHandler_UpdateContainer_Params = ContainersSettingsHandler_UpdateContainer_ParamsMojoType;
export declare interface ContainersSettingsHandler_UpdateContainer_ResponseParamsMojoType {
    error: (ContainerOperationError | null);
}
export type ContainersSettingsHandler_UpdateContainer_ResponseParams = ContainersSettingsHandler_UpdateContainer_ResponseParamsMojoType;
export declare interface ContainersSettingsHandler_RemoveContainer_ParamsMojoType {
    id: string;
}
export type ContainersSettingsHandler_RemoveContainer_Params = ContainersSettingsHandler_RemoveContainer_ParamsMojoType;
export declare interface ContainersSettingsHandler_RemoveContainer_ResponseParamsMojoType {
    error: (ContainerOperationError | null);
}
export type ContainersSettingsHandler_RemoveContainer_ResponseParams = ContainersSettingsHandler_RemoveContainer_ResponseParamsMojoType;
export declare interface ContainersSettingsHandler_ReorderContainers_ParamsMojoType {
    orderedIds: string[];
}
export type ContainersSettingsHandler_ReorderContainers_Params = ContainersSettingsHandler_ReorderContainers_ParamsMojoType;
export declare interface ContainersSettingsHandler_ReorderContainers_ResponseParamsMojoType {
    error: (ContainerOperationError | null);
}
export type ContainersSettingsHandler_ReorderContainers_ResponseParams = ContainersSettingsHandler_ReorderContainers_ResponseParamsMojoType;
export declare interface ContainersSettingsUI_OnContainersChanged_ParamsMojoType {
    containers: Container[];
}
export type ContainersSettingsUI_OnContainersChanged_Params = ContainersSettingsUI_OnContainersChanged_ParamsMojoType;
