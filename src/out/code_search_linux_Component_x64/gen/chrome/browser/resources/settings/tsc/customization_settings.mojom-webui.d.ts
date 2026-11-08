import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const CustomizationOperationErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare enum CustomizationOperationError {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kInvalidLength = 0,
    kNotFound = 1
}
export type CustomizationSettingsHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CustomizationSettingsHandlerPendingReceiver>;
export declare class CustomizationSettingsHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CustomizationSettingsHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<CustomizationSettingsHandlerPendingReceiver>;
    constructor(handle: MojoHandle | CustomizationSettingsHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CustomizationSettingsHandlerInterface {
    bindUI(ui: CustomizationSettingsUIRemote): void;
    setCustomizations(customizations: Customizations): Promise<{
        error: (CustomizationOperationError | null);
    }>;
    getCustomizations(): Promise<{
        customizations: Customizations;
    }>;
    addMemory(memory: string): Promise<{
        error: (CustomizationOperationError | null);
    }>;
    editMemory(oldMemory: string, newMemory: string): Promise<{
        error: (CustomizationOperationError | null);
    }>;
    getMemories(): Promise<{
        memories: string[];
    }>;
    deleteMemory(memory: string): void;
    deleteAllMemories(): void;
}
export declare class CustomizationSettingsHandlerRemote implements CustomizationSettingsHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<CustomizationSettingsHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CustomizationSettingsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CustomizationSettingsHandlerPendingReceiverEndpoint);
    bindUI(ui: CustomizationSettingsUIRemote): void;
    setCustomizations(customizations: Customizations): Promise<{
        error: (CustomizationOperationError | null);
    }>;
    getCustomizations(): Promise<{
        customizations: Customizations;
    }>;
    addMemory(memory: string): Promise<{
        error: (CustomizationOperationError | null);
    }>;
    editMemory(oldMemory: string, newMemory: string): Promise<{
        error: (CustomizationOperationError | null);
    }>;
    getMemories(): Promise<{
        memories: string[];
    }>;
    deleteMemory(memory: string): void;
    deleteAllMemories(): void;
}
/**
 * An object which receives request messages for the CustomizationSettingsHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CustomizationSettingsHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CustomizationSettingsHandlerRemote, CustomizationSettingsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizationSettingsHandlerRemote, CustomizationSettingsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CustomizationSettingsHandlerInterface);
}
export declare class CustomizationSettingsHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CustomizationSettingsHandlerRemote;
}
/**
 * An object which receives request messages for the CustomizationSettingsHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CustomizationSettingsHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CustomizationSettingsHandlerRemote, CustomizationSettingsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizationSettingsHandlerRemote, CustomizationSettingsHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    bindUI: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(ui: CustomizationSettingsUIRemote) => any>;
    setCustomizations: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(customizations: Customizations) => any>;
    getCustomizations: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    addMemory: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(memory: string) => any>;
    editMemory: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(oldMemory: string, newMemory: string) => any>;
    getMemories: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    deleteMemory: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(memory: string) => any>;
    deleteAllMemories: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type CustomizationSettingsUIPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CustomizationSettingsUIPendingReceiver>;
export declare class CustomizationSettingsUIPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CustomizationSettingsUI> {
    handle: mojo.internal.interfaceSupport.Endpoint<CustomizationSettingsUIPendingReceiver>;
    constructor(handle: MojoHandle | CustomizationSettingsUIPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CustomizationSettingsUIInterface {
    onCustomizationsChanged(customizations: Customizations): void;
    onMemoriesChanged(memories: string[]): void;
}
export declare class CustomizationSettingsUIRemote implements CustomizationSettingsUIInterface, mojo.internal.interfaceSupport.InterfaceRemote<CustomizationSettingsUIPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CustomizationSettingsUIPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CustomizationSettingsUIPendingReceiverEndpoint);
    onCustomizationsChanged(customizations: Customizations): void;
    onMemoriesChanged(memories: string[]): void;
}
/**
 * An object which receives request messages for the CustomizationSettingsUI
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CustomizationSettingsUIReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CustomizationSettingsUIRemote, CustomizationSettingsUIPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizationSettingsUIRemote, CustomizationSettingsUIPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CustomizationSettingsUIInterface);
}
export declare class CustomizationSettingsUI {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CustomizationSettingsUIRemote;
}
/**
 * An object which receives request messages for the CustomizationSettingsUI
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CustomizationSettingsUICallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CustomizationSettingsUIRemote, CustomizationSettingsUIPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CustomizationSettingsUIRemote, CustomizationSettingsUIPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onCustomizationsChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(customizations: Customizations) => any>;
    onMemoriesChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(memories: string[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const CustomizationsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizationSettingsHandler_BindUI_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizationSettingsHandler_SetCustomizations_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizationSettingsHandler_SetCustomizations_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizationSettingsHandler_GetCustomizations_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizationSettingsHandler_GetCustomizations_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizationSettingsHandler_AddMemory_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizationSettingsHandler_AddMemory_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizationSettingsHandler_EditMemory_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizationSettingsHandler_EditMemory_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizationSettingsHandler_GetMemories_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizationSettingsHandler_GetMemories_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizationSettingsHandler_DeleteMemory_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizationSettingsHandler_DeleteAllMemories_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizationSettingsUI_OnCustomizationsChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CustomizationSettingsUI_OnMemoriesChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface CustomizationsMojoType {
    name: string;
    job: string;
    tone: string;
    other: string;
}
export type Customizations = CustomizationsMojoType;
export declare interface CustomizationSettingsHandler_BindUI_ParamsMojoType {
    ui: CustomizationSettingsUIRemote;
}
export type CustomizationSettingsHandler_BindUI_Params = CustomizationSettingsHandler_BindUI_ParamsMojoType;
export declare interface CustomizationSettingsHandler_SetCustomizations_ParamsMojoType {
    customizations: Customizations;
}
export type CustomizationSettingsHandler_SetCustomizations_Params = CustomizationSettingsHandler_SetCustomizations_ParamsMojoType;
export declare interface CustomizationSettingsHandler_SetCustomizations_ResponseParamsMojoType {
    error: (CustomizationOperationError | null);
}
export type CustomizationSettingsHandler_SetCustomizations_ResponseParams = CustomizationSettingsHandler_SetCustomizations_ResponseParamsMojoType;
export declare interface CustomizationSettingsHandler_GetCustomizations_ParamsMojoType {
}
export type CustomizationSettingsHandler_GetCustomizations_Params = CustomizationSettingsHandler_GetCustomizations_ParamsMojoType;
export declare interface CustomizationSettingsHandler_GetCustomizations_ResponseParamsMojoType {
    customizations: Customizations;
}
export type CustomizationSettingsHandler_GetCustomizations_ResponseParams = CustomizationSettingsHandler_GetCustomizations_ResponseParamsMojoType;
export declare interface CustomizationSettingsHandler_AddMemory_ParamsMojoType {
    memory: string;
}
export type CustomizationSettingsHandler_AddMemory_Params = CustomizationSettingsHandler_AddMemory_ParamsMojoType;
export declare interface CustomizationSettingsHandler_AddMemory_ResponseParamsMojoType {
    error: (CustomizationOperationError | null);
}
export type CustomizationSettingsHandler_AddMemory_ResponseParams = CustomizationSettingsHandler_AddMemory_ResponseParamsMojoType;
export declare interface CustomizationSettingsHandler_EditMemory_ParamsMojoType {
    oldMemory: string;
    newMemory: string;
}
export type CustomizationSettingsHandler_EditMemory_Params = CustomizationSettingsHandler_EditMemory_ParamsMojoType;
export declare interface CustomizationSettingsHandler_EditMemory_ResponseParamsMojoType {
    error: (CustomizationOperationError | null);
}
export type CustomizationSettingsHandler_EditMemory_ResponseParams = CustomizationSettingsHandler_EditMemory_ResponseParamsMojoType;
export declare interface CustomizationSettingsHandler_GetMemories_ParamsMojoType {
}
export type CustomizationSettingsHandler_GetMemories_Params = CustomizationSettingsHandler_GetMemories_ParamsMojoType;
export declare interface CustomizationSettingsHandler_GetMemories_ResponseParamsMojoType {
    memories: string[];
}
export type CustomizationSettingsHandler_GetMemories_ResponseParams = CustomizationSettingsHandler_GetMemories_ResponseParamsMojoType;
export declare interface CustomizationSettingsHandler_DeleteMemory_ParamsMojoType {
    memory: string;
}
export type CustomizationSettingsHandler_DeleteMemory_Params = CustomizationSettingsHandler_DeleteMemory_ParamsMojoType;
export declare interface CustomizationSettingsHandler_DeleteAllMemories_ParamsMojoType {
}
export type CustomizationSettingsHandler_DeleteAllMemories_Params = CustomizationSettingsHandler_DeleteAllMemories_ParamsMojoType;
export declare interface CustomizationSettingsUI_OnCustomizationsChanged_ParamsMojoType {
    customizations: Customizations;
}
export type CustomizationSettingsUI_OnCustomizationsChanged_Params = CustomizationSettingsUI_OnCustomizationsChanged_ParamsMojoType;
export declare interface CustomizationSettingsUI_OnMemoriesChanged_ParamsMojoType {
    memories: string[];
}
export type CustomizationSettingsUI_OnMemoriesChanged_Params = CustomizationSettingsUI_OnMemoriesChanged_ParamsMojoType;
