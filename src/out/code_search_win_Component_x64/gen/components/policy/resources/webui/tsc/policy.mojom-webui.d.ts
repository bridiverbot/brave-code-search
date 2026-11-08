import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Value as mojoBase_mojom_Value } from '//resources/mojo/mojo/public/mojom/base/values.mojom-webui.js';
export declare const GetPoliciesReasonSpec: {
    $: mojo.internal.MojomType;
};
export declare enum GetPoliciesReason {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kCopy = 0,
    kExport = 1
}
export declare const PolicyLevelSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PolicyLevel {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kRecommended = 0,
    kMandatory = 1
}
export declare const PolicyScopeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PolicyScope {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kUser = 0,
    kMachine = 1
}
export type PolicyPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PolicyPageHandlerPendingReceiver>;
export declare class PolicyPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PolicyPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<PolicyPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | PolicyPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PolicyPageHandlerInterface {
    getDebugString(): Promise<{
        message: string;
    }>;
    restartBrowser(policies: string): void;
    setUserAffiliated(affiliated: boolean): Promise<void>;
    getAppliedTestPolicies(): Promise<{
        policies: string;
    }>;
    revertLocalTestPolicies(): void;
    setLocalTestPolicies(policies: string, profileSeparationResponse: string): Promise<void>;
    getPolicyLogs(): Promise<{
        policyLogs: Log[];
    }>;
    checkPromotionEligibility(): Promise<{
        shouldShowPromotion: boolean;
    }>;
    setBannerDismissed(): void;
    recordBannerRedirected(): void;
    getPoliciesJson(reason: GetPoliciesReason): Promise<{
        policiesJson: string;
    }>;
}
export declare class PolicyPageHandlerRemote implements PolicyPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<PolicyPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PolicyPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PolicyPageHandlerPendingReceiverEndpoint);
    getDebugString(): Promise<{
        message: string;
    }>;
    restartBrowser(policies: string): void;
    setUserAffiliated(affiliated: boolean): Promise<void>;
    getAppliedTestPolicies(): Promise<{
        policies: string;
    }>;
    revertLocalTestPolicies(): void;
    setLocalTestPolicies(policies: string, profileSeparationResponse: string): Promise<void>;
    getPolicyLogs(): Promise<{
        policyLogs: Log[];
    }>;
    checkPromotionEligibility(): Promise<{
        shouldShowPromotion: boolean;
    }>;
    setBannerDismissed(): void;
    recordBannerRedirected(): void;
    getPoliciesJson(reason: GetPoliciesReason): Promise<{
        policiesJson: string;
    }>;
}
/**
 * An object which receives request messages for the PolicyPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PolicyPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PolicyPageHandlerRemote, PolicyPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PolicyPageHandlerRemote, PolicyPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PolicyPageHandlerInterface);
}
export declare class PolicyPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PolicyPageHandlerRemote;
}
/**
 * An object which receives request messages for the PolicyPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PolicyPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PolicyPageHandlerRemote, PolicyPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PolicyPageHandlerRemote, PolicyPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getDebugString: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    restartBrowser: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(policies: string) => any>;
    setUserAffiliated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(affiliated: boolean) => any>;
    getAppliedTestPolicies: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    revertLocalTestPolicies: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setLocalTestPolicies: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(policies: string, profileSeparationResponse: string) => any>;
    getPolicyLogs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    checkPromotionEligibility: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setBannerDismissed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    recordBannerRedirected: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getPoliciesJson: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(reason: GetPoliciesReason) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type PolicyPageClientPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PolicyPageClientPendingReceiver>;
export declare class PolicyPageClientPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PolicyPageClient> {
    handle: mojo.internal.interfaceSupport.Endpoint<PolicyPageClientPendingReceiver>;
    constructor(handle: MojoHandle | PolicyPageClientPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PolicyPageClientInterface {
    statusUpdated(status: {
        [key: string]: Status;
    }): void;
    policiesUpdated(policyNames: {
        [key: string]: PolicyGroupNames;
    }, policyValues: PolicyGroupsResponse): void;
}
export declare class PolicyPageClientRemote implements PolicyPageClientInterface, mojo.internal.interfaceSupport.InterfaceRemote<PolicyPageClientPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PolicyPageClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PolicyPageClientPendingReceiverEndpoint);
    statusUpdated(status: {
        [key: string]: Status;
    }): void;
    policiesUpdated(policyNames: {
        [key: string]: PolicyGroupNames;
    }, policyValues: PolicyGroupsResponse): void;
}
/**
 * An object which receives request messages for the PolicyPageClient
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PolicyPageClientReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PolicyPageClientRemote, PolicyPageClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PolicyPageClientRemote, PolicyPageClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PolicyPageClientInterface);
}
export declare class PolicyPageClient {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PolicyPageClientRemote;
}
/**
 * An object which receives request messages for the PolicyPageClient
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PolicyPageClientCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PolicyPageClientRemote, PolicyPageClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PolicyPageClientRemote, PolicyPageClientPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    statusUpdated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(status: {
        [key: string]: Status;
    }) => any>;
    policiesUpdated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(policyNames: {
        [key: string]: PolicyGroupNames;
    }, policyValues: PolicyGroupsResponse) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type PolicyPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PolicyPageHandlerFactoryPendingReceiver>;
export declare class PolicyPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PolicyPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<PolicyPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | PolicyPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PolicyPageHandlerFactoryInterface {
    createHandler(handler: PolicyPageHandlerPendingReceiver, client: PolicyPageClientRemote): void;
}
export declare class PolicyPageHandlerFactoryRemote implements PolicyPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<PolicyPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PolicyPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PolicyPageHandlerFactoryPendingReceiverEndpoint);
    createHandler(handler: PolicyPageHandlerPendingReceiver, client: PolicyPageClientRemote): void;
}
/**
 * An object which receives request messages for the PolicyPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PolicyPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PolicyPageHandlerFactoryRemote, PolicyPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PolicyPageHandlerFactoryRemote, PolicyPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PolicyPageHandlerFactoryInterface);
}
export declare class PolicyPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PolicyPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the PolicyPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PolicyPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PolicyPageHandlerFactoryRemote, PolicyPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PolicyPageHandlerFactoryRemote, PolicyPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: PolicyPageHandlerPendingReceiver, client: PolicyPageClientRemote) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const LogSpec: {
    $: mojo.internal.MojomType;
};
export declare const StatusSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConflictSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicySpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyGroupSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyGroupsResponseSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyGroupNamesSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyPageHandler_GetDebugString_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyPageHandler_GetDebugString_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyPageHandler_RestartBrowser_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyPageHandler_SetUserAffiliated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyPageHandler_SetUserAffiliated_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyPageHandler_GetAppliedTestPolicies_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyPageHandler_GetAppliedTestPolicies_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyPageHandler_RevertLocalTestPolicies_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyPageHandler_SetLocalTestPolicies_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyPageHandler_SetLocalTestPolicies_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyPageHandler_GetPolicyLogs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyPageHandler_GetPolicyLogs_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyPageHandler_CheckPromotionEligibility_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyPageHandler_CheckPromotionEligibility_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyPageHandler_SetBannerDismissed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyPageHandler_RecordBannerRedirected_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyPageHandler_GetPoliciesJson_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyPageHandler_GetPoliciesJson_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyPageClient_StatusUpdated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyPageClient_PoliciesUpdated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PolicyPageHandlerFactory_CreateHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface LogMojoType {
    message: string;
    logSeverity: string;
    logSource: string;
    fileAndLine: string;
    location: string;
    timestamp: string;
}
export type Log = LogMojoType;
export declare interface StatusMojoType {
    policyDescriptionKey: string;
    flexOrgWarning: boolean;
    isOffHoursActive: (boolean | null);
    isAffiliated: (boolean | null);
    policiesPushAvailable: boolean;
    error: boolean;
    extensionInstallError: boolean;
    assetId: (string | null);
    location: (string | null);
    directoryApiId: (string | null);
    clientId: string;
    deviceId: string;
    enrollmentToken: string;
    domain: string;
    machine: (string | null);
    version: (string | null);
    username: (string | null);
    gaiaId: (string | null);
    profileId: (string | null);
    status: string;
    extensionInstallStatus: string;
    refreshInterval: (string | null);
    timeSinceLastRefresh: (string | null);
    timeSinceLastFetchAttempt: (string | null);
    extensionInstallTimeSinceLastRefresh: (string | null);
    extensionInstallTimeSinceLastFetchAttempt: (string | null);
    lastCloudReportSentTimestamp: (string | null);
    timeSinceLastCloudReportSent: (string | null);
    enterpriseDomainManager: (string | null);
}
export type Status = StatusMojoType;
export declare interface ConflictMojoType {
    level: PolicyLevel;
    scope: PolicyScope;
    source: string;
    value: (mojoBase_mojom_Value | null);
}
export type Conflict = ConflictMojoType;
export declare interface PolicyMojoType {
    ignored: boolean;
    restartRequired: boolean;
    deprecated: boolean;
    future: boolean;
    allSourcesMerged: (boolean | null);
    level: PolicyLevel;
    name: string;
    scope: PolicyScope;
    source: string;
    value: mojoBase_mojom_Value;
    conflicts: Conflict[];
    superseded: Conflict[];
    error: string;
    warning: string;
    info: string;
}
export type Policy = PolicyMojoType;
export declare interface PolicyGroupMojoType {
    name: string;
    id: (string | null);
    policies: {
        [key: string]: Policy;
    };
    precedenceOrder: (string[] | null);
    isExtension: boolean;
    isWebApp: boolean;
    forSigninScreen: boolean;
}
export type PolicyGroup = PolicyGroupMojoType;
export declare interface PolicyGroupsResponseMojoType {
    policyIdsPresentationOrder: string[];
    policyGroups: {
        [key: string]: PolicyGroup;
    };
}
export type PolicyGroupsResponse = PolicyGroupsResponseMojoType;
export declare interface PolicyGroupNamesMojoType {
    name: string;
    policyNames: string[];
}
export type PolicyGroupNames = PolicyGroupNamesMojoType;
export declare interface PolicyPageHandler_GetDebugString_ParamsMojoType {
}
export type PolicyPageHandler_GetDebugString_Params = PolicyPageHandler_GetDebugString_ParamsMojoType;
export declare interface PolicyPageHandler_GetDebugString_ResponseParamsMojoType {
    message: string;
}
export type PolicyPageHandler_GetDebugString_ResponseParams = PolicyPageHandler_GetDebugString_ResponseParamsMojoType;
export declare interface PolicyPageHandler_RestartBrowser_ParamsMojoType {
    policies: string;
}
export type PolicyPageHandler_RestartBrowser_Params = PolicyPageHandler_RestartBrowser_ParamsMojoType;
export declare interface PolicyPageHandler_SetUserAffiliated_ParamsMojoType {
    affiliated: boolean;
}
export type PolicyPageHandler_SetUserAffiliated_Params = PolicyPageHandler_SetUserAffiliated_ParamsMojoType;
export declare interface PolicyPageHandler_SetUserAffiliated_ResponseParamsMojoType {
}
export type PolicyPageHandler_SetUserAffiliated_ResponseParams = PolicyPageHandler_SetUserAffiliated_ResponseParamsMojoType;
export declare interface PolicyPageHandler_GetAppliedTestPolicies_ParamsMojoType {
}
export type PolicyPageHandler_GetAppliedTestPolicies_Params = PolicyPageHandler_GetAppliedTestPolicies_ParamsMojoType;
export declare interface PolicyPageHandler_GetAppliedTestPolicies_ResponseParamsMojoType {
    policies: string;
}
export type PolicyPageHandler_GetAppliedTestPolicies_ResponseParams = PolicyPageHandler_GetAppliedTestPolicies_ResponseParamsMojoType;
export declare interface PolicyPageHandler_RevertLocalTestPolicies_ParamsMojoType {
}
export type PolicyPageHandler_RevertLocalTestPolicies_Params = PolicyPageHandler_RevertLocalTestPolicies_ParamsMojoType;
export declare interface PolicyPageHandler_SetLocalTestPolicies_ParamsMojoType {
    policies: string;
    profileSeparationResponse: string;
}
export type PolicyPageHandler_SetLocalTestPolicies_Params = PolicyPageHandler_SetLocalTestPolicies_ParamsMojoType;
export declare interface PolicyPageHandler_SetLocalTestPolicies_ResponseParamsMojoType {
}
export type PolicyPageHandler_SetLocalTestPolicies_ResponseParams = PolicyPageHandler_SetLocalTestPolicies_ResponseParamsMojoType;
export declare interface PolicyPageHandler_GetPolicyLogs_ParamsMojoType {
}
export type PolicyPageHandler_GetPolicyLogs_Params = PolicyPageHandler_GetPolicyLogs_ParamsMojoType;
export declare interface PolicyPageHandler_GetPolicyLogs_ResponseParamsMojoType {
    policyLogs: Log[];
}
export type PolicyPageHandler_GetPolicyLogs_ResponseParams = PolicyPageHandler_GetPolicyLogs_ResponseParamsMojoType;
export declare interface PolicyPageHandler_CheckPromotionEligibility_ParamsMojoType {
}
export type PolicyPageHandler_CheckPromotionEligibility_Params = PolicyPageHandler_CheckPromotionEligibility_ParamsMojoType;
export declare interface PolicyPageHandler_CheckPromotionEligibility_ResponseParamsMojoType {
    shouldShowPromotion: boolean;
}
export type PolicyPageHandler_CheckPromotionEligibility_ResponseParams = PolicyPageHandler_CheckPromotionEligibility_ResponseParamsMojoType;
export declare interface PolicyPageHandler_SetBannerDismissed_ParamsMojoType {
}
export type PolicyPageHandler_SetBannerDismissed_Params = PolicyPageHandler_SetBannerDismissed_ParamsMojoType;
export declare interface PolicyPageHandler_RecordBannerRedirected_ParamsMojoType {
}
export type PolicyPageHandler_RecordBannerRedirected_Params = PolicyPageHandler_RecordBannerRedirected_ParamsMojoType;
export declare interface PolicyPageHandler_GetPoliciesJson_ParamsMojoType {
    reason: GetPoliciesReason;
}
export type PolicyPageHandler_GetPoliciesJson_Params = PolicyPageHandler_GetPoliciesJson_ParamsMojoType;
export declare interface PolicyPageHandler_GetPoliciesJson_ResponseParamsMojoType {
    policiesJson: string;
}
export type PolicyPageHandler_GetPoliciesJson_ResponseParams = PolicyPageHandler_GetPoliciesJson_ResponseParamsMojoType;
export declare interface PolicyPageClient_StatusUpdated_ParamsMojoType {
    status: {
        [key: string]: Status;
    };
}
export type PolicyPageClient_StatusUpdated_Params = PolicyPageClient_StatusUpdated_ParamsMojoType;
export declare interface PolicyPageClient_PoliciesUpdated_ParamsMojoType {
    policyNames: {
        [key: string]: PolicyGroupNames;
    };
    policyValues: PolicyGroupsResponse;
}
export type PolicyPageClient_PoliciesUpdated_Params = PolicyPageClient_PoliciesUpdated_ParamsMojoType;
export declare interface PolicyPageHandlerFactory_CreateHandler_ParamsMojoType {
    handler: PolicyPageHandlerPendingReceiver;
    client: PolicyPageClientRemote;
}
export type PolicyPageHandlerFactory_CreateHandler_Params = PolicyPageHandlerFactory_CreateHandler_ParamsMojoType;
