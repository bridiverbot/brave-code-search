import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export type BraveOriginSettingsHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<BraveOriginSettingsHandlerPendingReceiver>;
export declare class BraveOriginSettingsHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<BraveOriginSettingsHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<BraveOriginSettingsHandlerPendingReceiver>;
    constructor(handle: MojoHandle | BraveOriginSettingsHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface BraveOriginSettingsHandlerInterface {
    isBraveOriginUser(): Promise<{
        isBraveOriginUser: boolean;
    }>;
    refreshPurchaseState(): Promise<{
        isPurchased: boolean;
    }>;
    isPolicyControlledByBraveOrigin(policyKey: string): Promise<{
        isControlled: boolean;
    }>;
    getPolicyValue(policyKey: string): Promise<{
        value: (boolean | null);
    }>;
    setPolicyValue(policyKey: string, value: boolean): Promise<{
        success: boolean;
    }>;
    getNeedsRestart(): Promise<{
        needsRestart: boolean;
    }>;
    proceedFree(): Promise<{
        success: boolean;
    }>;
}
export declare class BraveOriginSettingsHandlerRemote implements BraveOriginSettingsHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<BraveOriginSettingsHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<BraveOriginSettingsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | BraveOriginSettingsHandlerPendingReceiverEndpoint);
    isBraveOriginUser(): Promise<{
        isBraveOriginUser: boolean;
    }>;
    refreshPurchaseState(): Promise<{
        isPurchased: boolean;
    }>;
    isPolicyControlledByBraveOrigin(policyKey: string): Promise<{
        isControlled: boolean;
    }>;
    getPolicyValue(policyKey: string): Promise<{
        value: (boolean | null);
    }>;
    setPolicyValue(policyKey: string, value: boolean): Promise<{
        success: boolean;
    }>;
    getNeedsRestart(): Promise<{
        needsRestart: boolean;
    }>;
    proceedFree(): Promise<{
        success: boolean;
    }>;
}
/**
 * An object which receives request messages for the BraveOriginSettingsHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class BraveOriginSettingsHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<BraveOriginSettingsHandlerRemote, BraveOriginSettingsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BraveOriginSettingsHandlerRemote, BraveOriginSettingsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: BraveOriginSettingsHandlerInterface);
}
export declare class BraveOriginSettingsHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): BraveOriginSettingsHandlerRemote;
}
/**
 * An object which receives request messages for the BraveOriginSettingsHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class BraveOriginSettingsHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<BraveOriginSettingsHandlerRemote, BraveOriginSettingsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<BraveOriginSettingsHandlerRemote, BraveOriginSettingsHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    isBraveOriginUser: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    refreshPurchaseState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    isPolicyControlledByBraveOrigin: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(policyKey: string) => any>;
    getPolicyValue: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(policyKey: string) => any>;
    setPolicyValue: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(policyKey: string, value: boolean) => any>;
    getNeedsRestart: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    proceedFree: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const BraveOriginSettingsHandler_IsBraveOriginUser_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BraveOriginSettingsHandler_IsBraveOriginUser_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BraveOriginSettingsHandler_RefreshPurchaseState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BraveOriginSettingsHandler_RefreshPurchaseState_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BraveOriginSettingsHandler_IsPolicyControlledByBraveOrigin_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BraveOriginSettingsHandler_IsPolicyControlledByBraveOrigin_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BraveOriginSettingsHandler_GetPolicyValue_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BraveOriginSettingsHandler_GetPolicyValue_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BraveOriginSettingsHandler_SetPolicyValue_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BraveOriginSettingsHandler_SetPolicyValue_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BraveOriginSettingsHandler_GetNeedsRestart_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BraveOriginSettingsHandler_GetNeedsRestart_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BraveOriginSettingsHandler_ProceedFree_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const BraveOriginSettingsHandler_ProceedFree_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface BraveOriginSettingsHandler_IsBraveOriginUser_ParamsMojoType {
}
export type BraveOriginSettingsHandler_IsBraveOriginUser_Params = BraveOriginSettingsHandler_IsBraveOriginUser_ParamsMojoType;
export declare interface BraveOriginSettingsHandler_IsBraveOriginUser_ResponseParamsMojoType {
    isBraveOriginUser: boolean;
}
export type BraveOriginSettingsHandler_IsBraveOriginUser_ResponseParams = BraveOriginSettingsHandler_IsBraveOriginUser_ResponseParamsMojoType;
export declare interface BraveOriginSettingsHandler_RefreshPurchaseState_ParamsMojoType {
}
export type BraveOriginSettingsHandler_RefreshPurchaseState_Params = BraveOriginSettingsHandler_RefreshPurchaseState_ParamsMojoType;
export declare interface BraveOriginSettingsHandler_RefreshPurchaseState_ResponseParamsMojoType {
    isPurchased: boolean;
}
export type BraveOriginSettingsHandler_RefreshPurchaseState_ResponseParams = BraveOriginSettingsHandler_RefreshPurchaseState_ResponseParamsMojoType;
export declare interface BraveOriginSettingsHandler_IsPolicyControlledByBraveOrigin_ParamsMojoType {
    policyKey: string;
}
export type BraveOriginSettingsHandler_IsPolicyControlledByBraveOrigin_Params = BraveOriginSettingsHandler_IsPolicyControlledByBraveOrigin_ParamsMojoType;
export declare interface BraveOriginSettingsHandler_IsPolicyControlledByBraveOrigin_ResponseParamsMojoType {
    isControlled: boolean;
}
export type BraveOriginSettingsHandler_IsPolicyControlledByBraveOrigin_ResponseParams = BraveOriginSettingsHandler_IsPolicyControlledByBraveOrigin_ResponseParamsMojoType;
export declare interface BraveOriginSettingsHandler_GetPolicyValue_ParamsMojoType {
    policyKey: string;
}
export type BraveOriginSettingsHandler_GetPolicyValue_Params = BraveOriginSettingsHandler_GetPolicyValue_ParamsMojoType;
export declare interface BraveOriginSettingsHandler_GetPolicyValue_ResponseParamsMojoType {
    value: (boolean | null);
}
export type BraveOriginSettingsHandler_GetPolicyValue_ResponseParams = BraveOriginSettingsHandler_GetPolicyValue_ResponseParamsMojoType;
export declare interface BraveOriginSettingsHandler_SetPolicyValue_ParamsMojoType {
    policyKey: string;
    value: boolean;
}
export type BraveOriginSettingsHandler_SetPolicyValue_Params = BraveOriginSettingsHandler_SetPolicyValue_ParamsMojoType;
export declare interface BraveOriginSettingsHandler_SetPolicyValue_ResponseParamsMojoType {
    success: boolean;
}
export type BraveOriginSettingsHandler_SetPolicyValue_ResponseParams = BraveOriginSettingsHandler_SetPolicyValue_ResponseParamsMojoType;
export declare interface BraveOriginSettingsHandler_GetNeedsRestart_ParamsMojoType {
}
export type BraveOriginSettingsHandler_GetNeedsRestart_Params = BraveOriginSettingsHandler_GetNeedsRestart_ParamsMojoType;
export declare interface BraveOriginSettingsHandler_GetNeedsRestart_ResponseParamsMojoType {
    needsRestart: boolean;
}
export type BraveOriginSettingsHandler_GetNeedsRestart_ResponseParams = BraveOriginSettingsHandler_GetNeedsRestart_ResponseParamsMojoType;
export declare interface BraveOriginSettingsHandler_ProceedFree_ParamsMojoType {
}
export type BraveOriginSettingsHandler_ProceedFree_Params = BraveOriginSettingsHandler_ProceedFree_ParamsMojoType;
export declare interface BraveOriginSettingsHandler_ProceedFree_ResponseParamsMojoType {
    success: boolean;
}
export type BraveOriginSettingsHandler_ProceedFree_ResponseParams = BraveOriginSettingsHandler_ProceedFree_ResponseParamsMojoType;
