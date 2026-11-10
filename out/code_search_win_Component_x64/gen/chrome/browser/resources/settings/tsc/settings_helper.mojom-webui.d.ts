import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { ModelWithSubtitle as aiChat_mojom_ModelWithSubtitle } from './ai_chat.mojom-webui.js';
import { PremiumStatus as aiChat_mojom_PremiumStatus, Model as aiChat_mojom_Model, PremiumInfo as aiChat_mojom_PremiumInfo } from './common.mojom-webui.js';
export declare const OperationResultSpec: {
    $: mojo.internal.MojomType;
};
export declare enum OperationResult {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    Success = 0,
    InvalidUrl = 1,
    InvalidContextSize = 2,
    UrlValidAsPrivateEndpoint = 3
}
export type AIChatSettingsHelperPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<AIChatSettingsHelperPendingReceiver>;
export declare class AIChatSettingsHelperPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<AIChatSettingsHelper> {
    handle: mojo.internal.interfaceSupport.Endpoint<AIChatSettingsHelperPendingReceiver>;
    constructor(handle: MojoHandle | AIChatSettingsHelperPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface AIChatSettingsHelperInterface {
    getPremiumStatus(): Promise<{
        status: aiChat_mojom_PremiumStatus;
        info: (aiChat_mojom_PremiumInfo | null);
    }>;
    getModelsWithSubtitles(): Promise<{
        models: aiChat_mojom_ModelWithSubtitle[];
    }>;
    getManageUrl(): Promise<{
        url: string;
    }>;
    getCustomModels(): Promise<{
        models: aiChat_mojom_Model[];
    }>;
    addCustomModel(model: aiChat_mojom_Model): Promise<{
        result: OperationResult;
    }>;
    saveCustomModel(index: number, model: aiChat_mojom_Model): Promise<{
        result: OperationResult;
    }>;
    deleteCustomModel(index: number): void;
    setDefaultModelKey(key: string): void;
    getDefaultModelKey(): Promise<{
        key: string;
    }>;
    setClientPage(page: SettingsPageRemote): void;
    deleteConversations(timePeriod: number): void;
}
export declare class AIChatSettingsHelperRemote implements AIChatSettingsHelperInterface, mojo.internal.interfaceSupport.InterfaceRemote<AIChatSettingsHelperPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<AIChatSettingsHelperPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | AIChatSettingsHelperPendingReceiverEndpoint);
    getPremiumStatus(): Promise<{
        status: aiChat_mojom_PremiumStatus;
        info: (aiChat_mojom_PremiumInfo | null);
    }>;
    getModelsWithSubtitles(): Promise<{
        models: aiChat_mojom_ModelWithSubtitle[];
    }>;
    getManageUrl(): Promise<{
        url: string;
    }>;
    getCustomModels(): Promise<{
        models: aiChat_mojom_Model[];
    }>;
    addCustomModel(model: aiChat_mojom_Model): Promise<{
        result: OperationResult;
    }>;
    saveCustomModel(index: number, model: aiChat_mojom_Model): Promise<{
        result: OperationResult;
    }>;
    deleteCustomModel(index: number): void;
    setDefaultModelKey(key: string): void;
    getDefaultModelKey(): Promise<{
        key: string;
    }>;
    setClientPage(page: SettingsPageRemote): void;
    deleteConversations(timePeriod: number): void;
}
/**
 * An object which receives request messages for the AIChatSettingsHelper
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class AIChatSettingsHelperReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<AIChatSettingsHelperRemote, AIChatSettingsHelperPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<AIChatSettingsHelperRemote, AIChatSettingsHelperPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: AIChatSettingsHelperInterface);
}
export declare class AIChatSettingsHelper {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): AIChatSettingsHelperRemote;
}
/**
 * An object which receives request messages for the AIChatSettingsHelper
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class AIChatSettingsHelperCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<AIChatSettingsHelperRemote, AIChatSettingsHelperPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<AIChatSettingsHelperRemote, AIChatSettingsHelperPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getPremiumStatus: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getModelsWithSubtitles: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getManageUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getCustomModels: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    addCustomModel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(model: aiChat_mojom_Model) => any>;
    saveCustomModel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(index: number, model: aiChat_mojom_Model) => any>;
    deleteCustomModel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(index: number) => any>;
    setDefaultModelKey: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(key: string) => any>;
    getDefaultModelKey: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setClientPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(page: SettingsPageRemote) => any>;
    deleteConversations: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(timePeriod: number) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type SettingsPagePendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<SettingsPagePendingReceiver>;
export declare class SettingsPagePendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<SettingsPage> {
    handle: mojo.internal.interfaceSupport.Endpoint<SettingsPagePendingReceiver>;
    constructor(handle: MojoHandle | SettingsPagePendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface SettingsPageInterface {
    onModelListChanged(models: aiChat_mojom_Model[]): void;
    onDefaultModelChanged(key: string): void;
}
export declare class SettingsPageRemote implements SettingsPageInterface, mojo.internal.interfaceSupport.InterfaceRemote<SettingsPagePendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<SettingsPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | SettingsPagePendingReceiverEndpoint);
    onModelListChanged(models: aiChat_mojom_Model[]): void;
    onDefaultModelChanged(key: string): void;
}
/**
 * An object which receives request messages for the SettingsPage
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class SettingsPageReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<SettingsPageRemote, SettingsPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SettingsPageRemote, SettingsPagePendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: SettingsPageInterface);
}
export declare class SettingsPage {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): SettingsPageRemote;
}
/**
 * An object which receives request messages for the SettingsPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class SettingsPageCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<SettingsPageRemote, SettingsPagePendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SettingsPageRemote, SettingsPagePendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onModelListChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(models: aiChat_mojom_Model[]) => any>;
    onDefaultModelChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(key: string) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const AIChatSettingsHelper_GetPremiumStatus_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatSettingsHelper_GetPremiumStatus_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatSettingsHelper_GetModelsWithSubtitles_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatSettingsHelper_GetModelsWithSubtitles_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatSettingsHelper_GetManageUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatSettingsHelper_GetManageUrl_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatSettingsHelper_GetCustomModels_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatSettingsHelper_GetCustomModels_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatSettingsHelper_AddCustomModel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatSettingsHelper_AddCustomModel_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatSettingsHelper_SaveCustomModel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatSettingsHelper_SaveCustomModel_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatSettingsHelper_DeleteCustomModel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatSettingsHelper_SetDefaultModelKey_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatSettingsHelper_GetDefaultModelKey_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatSettingsHelper_GetDefaultModelKey_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatSettingsHelper_SetClientPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AIChatSettingsHelper_DeleteConversations_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SettingsPage_OnModelListChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SettingsPage_OnDefaultModelChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface AIChatSettingsHelper_GetPremiumStatus_ParamsMojoType {
}
export type AIChatSettingsHelper_GetPremiumStatus_Params = AIChatSettingsHelper_GetPremiumStatus_ParamsMojoType;
export declare interface AIChatSettingsHelper_GetPremiumStatus_ResponseParamsMojoType {
    status: aiChat_mojom_PremiumStatus;
    info: (aiChat_mojom_PremiumInfo | null);
}
export type AIChatSettingsHelper_GetPremiumStatus_ResponseParams = AIChatSettingsHelper_GetPremiumStatus_ResponseParamsMojoType;
export declare interface AIChatSettingsHelper_GetModelsWithSubtitles_ParamsMojoType {
}
export type AIChatSettingsHelper_GetModelsWithSubtitles_Params = AIChatSettingsHelper_GetModelsWithSubtitles_ParamsMojoType;
export declare interface AIChatSettingsHelper_GetModelsWithSubtitles_ResponseParamsMojoType {
    models: aiChat_mojom_ModelWithSubtitle[];
}
export type AIChatSettingsHelper_GetModelsWithSubtitles_ResponseParams = AIChatSettingsHelper_GetModelsWithSubtitles_ResponseParamsMojoType;
export declare interface AIChatSettingsHelper_GetManageUrl_ParamsMojoType {
}
export type AIChatSettingsHelper_GetManageUrl_Params = AIChatSettingsHelper_GetManageUrl_ParamsMojoType;
export declare interface AIChatSettingsHelper_GetManageUrl_ResponseParamsMojoType {
    url: string;
}
export type AIChatSettingsHelper_GetManageUrl_ResponseParams = AIChatSettingsHelper_GetManageUrl_ResponseParamsMojoType;
export declare interface AIChatSettingsHelper_GetCustomModels_ParamsMojoType {
}
export type AIChatSettingsHelper_GetCustomModels_Params = AIChatSettingsHelper_GetCustomModels_ParamsMojoType;
export declare interface AIChatSettingsHelper_GetCustomModels_ResponseParamsMojoType {
    models: aiChat_mojom_Model[];
}
export type AIChatSettingsHelper_GetCustomModels_ResponseParams = AIChatSettingsHelper_GetCustomModels_ResponseParamsMojoType;
export declare interface AIChatSettingsHelper_AddCustomModel_ParamsMojoType {
    model: aiChat_mojom_Model;
}
export type AIChatSettingsHelper_AddCustomModel_Params = AIChatSettingsHelper_AddCustomModel_ParamsMojoType;
export declare interface AIChatSettingsHelper_AddCustomModel_ResponseParamsMojoType {
    result: OperationResult;
}
export type AIChatSettingsHelper_AddCustomModel_ResponseParams = AIChatSettingsHelper_AddCustomModel_ResponseParamsMojoType;
export declare interface AIChatSettingsHelper_SaveCustomModel_ParamsMojoType {
    index: number;
    model: aiChat_mojom_Model;
}
export type AIChatSettingsHelper_SaveCustomModel_Params = AIChatSettingsHelper_SaveCustomModel_ParamsMojoType;
export declare interface AIChatSettingsHelper_SaveCustomModel_ResponseParamsMojoType {
    result: OperationResult;
}
export type AIChatSettingsHelper_SaveCustomModel_ResponseParams = AIChatSettingsHelper_SaveCustomModel_ResponseParamsMojoType;
export declare interface AIChatSettingsHelper_DeleteCustomModel_ParamsMojoType {
    index: number;
}
export type AIChatSettingsHelper_DeleteCustomModel_Params = AIChatSettingsHelper_DeleteCustomModel_ParamsMojoType;
export declare interface AIChatSettingsHelper_SetDefaultModelKey_ParamsMojoType {
    key: string;
}
export type AIChatSettingsHelper_SetDefaultModelKey_Params = AIChatSettingsHelper_SetDefaultModelKey_ParamsMojoType;
export declare interface AIChatSettingsHelper_GetDefaultModelKey_ParamsMojoType {
}
export type AIChatSettingsHelper_GetDefaultModelKey_Params = AIChatSettingsHelper_GetDefaultModelKey_ParamsMojoType;
export declare interface AIChatSettingsHelper_GetDefaultModelKey_ResponseParamsMojoType {
    key: string;
}
export type AIChatSettingsHelper_GetDefaultModelKey_ResponseParams = AIChatSettingsHelper_GetDefaultModelKey_ResponseParamsMojoType;
export declare interface AIChatSettingsHelper_SetClientPage_ParamsMojoType {
    page: SettingsPageRemote;
}
export type AIChatSettingsHelper_SetClientPage_Params = AIChatSettingsHelper_SetClientPage_ParamsMojoType;
export declare interface AIChatSettingsHelper_DeleteConversations_ParamsMojoType {
    timePeriod: number;
}
export type AIChatSettingsHelper_DeleteConversations_Params = AIChatSettingsHelper_DeleteConversations_ParamsMojoType;
export declare interface SettingsPage_OnModelListChanged_ParamsMojoType {
    models: aiChat_mojom_Model[];
}
export type SettingsPage_OnModelListChanged_Params = SettingsPage_OnModelListChanged_ParamsMojoType;
export declare interface SettingsPage_OnDefaultModelChanged_ParamsMojoType {
    key: string;
}
export type SettingsPage_OnDefaultModelChanged_Params = SettingsPage_OnDefaultModelChanged_ParamsMojoType;
