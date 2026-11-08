import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const RuleOperationErrorSpec: {
    $: mojo.internal.MojomType;
};
export declare enum RuleOperationError {
    MIN_VALUE = 1,
    MAX_VALUE = 6,
    kIdShouldBeEmpty = 1,
    kIdShouldBeSet = 2,
    kInvalidCondition = 3,
    kInvalidUrlFilter = 4,
    kInvalidTarget = 5,
    kNotFound = 6
}
export type TrafficControlSettingsHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<TrafficControlSettingsHandlerPendingReceiver>;
export declare class TrafficControlSettingsHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<TrafficControlSettingsHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<TrafficControlSettingsHandlerPendingReceiver>;
    constructor(handle: MojoHandle | TrafficControlSettingsHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface TrafficControlSettingsHandlerInterface {
    bindUI(ui: TrafficControlSettingsUIRemote): void;
    getRules(): Promise<{
        rules: TrafficRule[];
    }>;
    addRule(rule: TrafficRule): Promise<{
        error: (RuleOperationError | null);
    }>;
    updateRule(rule: TrafficRule): Promise<{
        error: (RuleOperationError | null);
    }>;
    removeRule(id: string): Promise<{
        error: (RuleOperationError | null);
    }>;
    reorderRules(orderedIds: string[]): Promise<{
        error: (RuleOperationError | null);
    }>;
}
export declare class TrafficControlSettingsHandlerRemote implements TrafficControlSettingsHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<TrafficControlSettingsHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<TrafficControlSettingsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | TrafficControlSettingsHandlerPendingReceiverEndpoint);
    bindUI(ui: TrafficControlSettingsUIRemote): void;
    getRules(): Promise<{
        rules: TrafficRule[];
    }>;
    addRule(rule: TrafficRule): Promise<{
        error: (RuleOperationError | null);
    }>;
    updateRule(rule: TrafficRule): Promise<{
        error: (RuleOperationError | null);
    }>;
    removeRule(id: string): Promise<{
        error: (RuleOperationError | null);
    }>;
    reorderRules(orderedIds: string[]): Promise<{
        error: (RuleOperationError | null);
    }>;
}
/**
 * An object which receives request messages for the TrafficControlSettingsHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class TrafficControlSettingsHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<TrafficControlSettingsHandlerRemote, TrafficControlSettingsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TrafficControlSettingsHandlerRemote, TrafficControlSettingsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: TrafficControlSettingsHandlerInterface);
}
export declare class TrafficControlSettingsHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): TrafficControlSettingsHandlerRemote;
}
/**
 * An object which receives request messages for the TrafficControlSettingsHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class TrafficControlSettingsHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<TrafficControlSettingsHandlerRemote, TrafficControlSettingsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TrafficControlSettingsHandlerRemote, TrafficControlSettingsHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    bindUI: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(ui: TrafficControlSettingsUIRemote) => any>;
    getRules: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    addRule: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(rule: TrafficRule) => any>;
    updateRule: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(rule: TrafficRule) => any>;
    removeRule: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    reorderRules: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(orderedIds: string[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type TrafficControlSettingsUIPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<TrafficControlSettingsUIPendingReceiver>;
export declare class TrafficControlSettingsUIPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<TrafficControlSettingsUI> {
    handle: mojo.internal.interfaceSupport.Endpoint<TrafficControlSettingsUIPendingReceiver>;
    constructor(handle: MojoHandle | TrafficControlSettingsUIPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface TrafficControlSettingsUIInterface {
    onRulesChanged(rules: TrafficRule[]): void;
}
export declare class TrafficControlSettingsUIRemote implements TrafficControlSettingsUIInterface, mojo.internal.interfaceSupport.InterfaceRemote<TrafficControlSettingsUIPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<TrafficControlSettingsUIPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | TrafficControlSettingsUIPendingReceiverEndpoint);
    onRulesChanged(rules: TrafficRule[]): void;
}
/**
 * An object which receives request messages for the TrafficControlSettingsUI
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class TrafficControlSettingsUIReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<TrafficControlSettingsUIRemote, TrafficControlSettingsUIPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TrafficControlSettingsUIRemote, TrafficControlSettingsUIPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: TrafficControlSettingsUIInterface);
}
export declare class TrafficControlSettingsUI {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): TrafficControlSettingsUIRemote;
}
/**
 * An object which receives request messages for the TrafficControlSettingsUI
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class TrafficControlSettingsUICallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<TrafficControlSettingsUIRemote, TrafficControlSettingsUIPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TrafficControlSettingsUIRemote, TrafficControlSettingsUIPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onRulesChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(rules: TrafficRule[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const ConditionSpec: {
    $: mojo.internal.MojomType;
};
export declare const TargetSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrafficRuleSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrafficControlSettingsHandler_BindUI_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrafficControlSettingsHandler_GetRules_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrafficControlSettingsHandler_GetRules_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrafficControlSettingsHandler_AddRule_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrafficControlSettingsHandler_AddRule_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrafficControlSettingsHandler_UpdateRule_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrafficControlSettingsHandler_UpdateRule_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrafficControlSettingsHandler_RemoveRule_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrafficControlSettingsHandler_RemoveRule_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrafficControlSettingsHandler_ReorderRules_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrafficControlSettingsHandler_ReorderRules_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TrafficControlSettingsUI_OnRulesChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ConditionMojoType {
    urlFilter: (string | null);
}
export type Condition = ConditionMojoType;
export declare interface TargetMojoType {
    containerId: (string | null);
    temporaryContainer: boolean;
}
export type Target = TargetMojoType;
export declare interface TrafficRuleMojoType {
    id: string;
    enabled: boolean;
    condition: Condition;
    target: Target;
}
export type TrafficRule = TrafficRuleMojoType;
export declare interface TrafficControlSettingsHandler_BindUI_ParamsMojoType {
    ui: TrafficControlSettingsUIRemote;
}
export type TrafficControlSettingsHandler_BindUI_Params = TrafficControlSettingsHandler_BindUI_ParamsMojoType;
export declare interface TrafficControlSettingsHandler_GetRules_ParamsMojoType {
}
export type TrafficControlSettingsHandler_GetRules_Params = TrafficControlSettingsHandler_GetRules_ParamsMojoType;
export declare interface TrafficControlSettingsHandler_GetRules_ResponseParamsMojoType {
    rules: TrafficRule[];
}
export type TrafficControlSettingsHandler_GetRules_ResponseParams = TrafficControlSettingsHandler_GetRules_ResponseParamsMojoType;
export declare interface TrafficControlSettingsHandler_AddRule_ParamsMojoType {
    rule: TrafficRule;
}
export type TrafficControlSettingsHandler_AddRule_Params = TrafficControlSettingsHandler_AddRule_ParamsMojoType;
export declare interface TrafficControlSettingsHandler_AddRule_ResponseParamsMojoType {
    error: (RuleOperationError | null);
}
export type TrafficControlSettingsHandler_AddRule_ResponseParams = TrafficControlSettingsHandler_AddRule_ResponseParamsMojoType;
export declare interface TrafficControlSettingsHandler_UpdateRule_ParamsMojoType {
    rule: TrafficRule;
}
export type TrafficControlSettingsHandler_UpdateRule_Params = TrafficControlSettingsHandler_UpdateRule_ParamsMojoType;
export declare interface TrafficControlSettingsHandler_UpdateRule_ResponseParamsMojoType {
    error: (RuleOperationError | null);
}
export type TrafficControlSettingsHandler_UpdateRule_ResponseParams = TrafficControlSettingsHandler_UpdateRule_ResponseParamsMojoType;
export declare interface TrafficControlSettingsHandler_RemoveRule_ParamsMojoType {
    id: string;
}
export type TrafficControlSettingsHandler_RemoveRule_Params = TrafficControlSettingsHandler_RemoveRule_ParamsMojoType;
export declare interface TrafficControlSettingsHandler_RemoveRule_ResponseParamsMojoType {
    error: (RuleOperationError | null);
}
export type TrafficControlSettingsHandler_RemoveRule_ResponseParams = TrafficControlSettingsHandler_RemoveRule_ResponseParamsMojoType;
export declare interface TrafficControlSettingsHandler_ReorderRules_ParamsMojoType {
    orderedIds: string[];
}
export type TrafficControlSettingsHandler_ReorderRules_Params = TrafficControlSettingsHandler_ReorderRules_ParamsMojoType;
export declare interface TrafficControlSettingsHandler_ReorderRules_ResponseParamsMojoType {
    error: (RuleOperationError | null);
}
export type TrafficControlSettingsHandler_ReorderRules_ResponseParams = TrafficControlSettingsHandler_ReorderRules_ResponseParamsMojoType;
export declare interface TrafficControlSettingsUI_OnRulesChanged_ParamsMojoType {
    rules: TrafficRule[];
}
export type TrafficControlSettingsUI_OnRulesChanged_Params = TrafficControlSettingsUI_OnRulesChanged_ParamsMojoType;
