import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { MojoHandlerProxyFactory } from '//resources/mojo/mojo_browser_proxy.js';
import type { MojoHandlerProxy } from '//resources/mojo/mojo_browser_proxy.js';
import { ActuationTarget as glic_mojom_ActuationTarget, FeatureMode as glic_mojom_FeatureMode, FormFactor as glic_mojom_FormFactor, FreOverride as glic_mojom_FreOverride, InvocationSource as glic_mojom_InvocationSource, Platform as glic_mojom_Platform } from './glic_enums.mojom-webui.js';
import { TimeDelta as mojoBase_mojom_TimeDelta } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const GlicExperimentalTriggeringStateSpec: {
    $: mojo.internal.MojomType;
};
export declare enum GlicExperimentalTriggeringState {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kUnavailable = 0,
    kNeedsOptIn = 1,
    kReady = 2
}
export declare const ActuationEligibilitySpec: {
    $: mojo.internal.MojomType;
};
export declare enum ActuationEligibility {
    MIN_VALUE = 0,
    MAX_VALUE = 5,
    kEligible = 0,
    kMissingAccountCapability = 1,
    kMissingChromeBenefits = 2,
    kDisabledByPolicy = 3,
    kEnterpriseWithoutManagement = 4,
    kPlatformUnsupported = 5
}
export declare const FreCompletionWaitModeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum FreCompletionWaitMode {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kDefault = 0,
    kNever = 1,
    kAlways = 2
}
export type InternalsPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<InternalsPageHandlerPendingReceiver>;
export declare class InternalsPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<InternalsPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<InternalsPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | InternalsPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface InternalsPageHandlerInterface {
    getInternalsDataPayload(): Promise<{
        internalsData: InternalsDataPayload;
    }>;
    setGuestUrlPresets(autopush: url_mojom_Url, staging: url_mojom_Url, preprod: url_mojom_Url, prod: url_mojom_Url): void;
    triggerInvokeFromInternalsAction(options: TriggerInvokeFromInternalsOptions): Promise<{
        success: boolean;
        errorMessage: string;
    }>;
    getOpenTabs(): Promise<{
        tabTitles: string[];
    }>;
    setWebContinuityOriginatingHostUrlPreset(webContinuityOriginatingHostUrl: url_mojom_Url): void;
    setShowErrorAllowed(allowed: boolean): void;
    showExperimentalOptIn(): void;
    revokeExperimentalTriggeringConsent(): void;
    revokeGlicConsent(): void;
    revokeActuationConsent(): void;
    setHotkeyGlobalScopeMigratedV2(migrated: boolean): void;
}
export declare class InternalsPageHandlerRemote implements InternalsPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<InternalsPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<InternalsPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | InternalsPageHandlerPendingReceiverEndpoint);
    getInternalsDataPayload(): Promise<{
        internalsData: InternalsDataPayload;
    }>;
    setGuestUrlPresets(autopush: url_mojom_Url, staging: url_mojom_Url, preprod: url_mojom_Url, prod: url_mojom_Url): void;
    triggerInvokeFromInternalsAction(options: TriggerInvokeFromInternalsOptions): Promise<{
        success: boolean;
        errorMessage: string;
    }>;
    getOpenTabs(): Promise<{
        tabTitles: string[];
    }>;
    setWebContinuityOriginatingHostUrlPreset(webContinuityOriginatingHostUrl: url_mojom_Url): void;
    setShowErrorAllowed(allowed: boolean): void;
    showExperimentalOptIn(): void;
    revokeExperimentalTriggeringConsent(): void;
    revokeGlicConsent(): void;
    revokeActuationConsent(): void;
    setHotkeyGlobalScopeMigratedV2(migrated: boolean): void;
}
/**
 * An object which receives request messages for the InternalsPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class InternalsPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<InternalsPageHandlerRemote, InternalsPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<InternalsPageHandlerRemote, InternalsPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: InternalsPageHandlerInterface);
}
export declare class InternalsPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): InternalsPageHandlerRemote;
}
/**
 * An object which receives request messages for the InternalsPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class InternalsPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<InternalsPageHandlerRemote, InternalsPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<InternalsPageHandlerRemote, InternalsPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getInternalsDataPayload: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setGuestUrlPresets: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(autopush: url_mojom_Url, staging: url_mojom_Url, preprod: url_mojom_Url, prod: url_mojom_Url) => any>;
    triggerInvokeFromInternalsAction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(options: TriggerInvokeFromInternalsOptions) => any>;
    getOpenTabs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setWebContinuityOriginatingHostUrlPreset: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(webContinuityOriginatingHostUrl: url_mojom_Url) => any>;
    setShowErrorAllowed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(allowed: boolean) => any>;
    showExperimentalOptIn: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    revokeExperimentalTriggeringConsent: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    revokeGlicConsent: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    revokeActuationConsent: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setHotkeyGlobalScopeMigratedV2: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(migrated: boolean) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type InternalsPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<InternalsPageHandlerFactoryPendingReceiver>;
export declare class InternalsPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<InternalsPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<InternalsPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | InternalsPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface InternalsPageHandlerFactoryInterface {
    createInternalsPageHandler(receiver: InternalsPageHandlerPendingReceiver): void;
}
export declare class InternalsPageHandlerFactoryRemote implements InternalsPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<InternalsPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<InternalsPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | InternalsPageHandlerFactoryPendingReceiverEndpoint);
    createInternalsPageHandler(receiver: InternalsPageHandlerPendingReceiver): void;
}
/**
 * An object which receives request messages for the InternalsPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class InternalsPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<InternalsPageHandlerFactoryRemote, InternalsPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<InternalsPageHandlerFactoryRemote, InternalsPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: InternalsPageHandlerFactoryInterface);
}
export declare class InternalsPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): InternalsPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the InternalsPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class InternalsPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<InternalsPageHandlerFactoryRemote, InternalsPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<InternalsPageHandlerFactoryRemote, InternalsPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createInternalsPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(receiver: InternalsPageHandlerPendingReceiver) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const ProfileEnablementSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConfigInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const TieredRolloutInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const InternalsDataPayloadSpec: {
    $: mojo.internal.MojomType;
};
export declare const InternalsDebugInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const ScreenshotTestKeyConfigurationSpec: {
    $: mojo.internal.MojomType;
};
export declare const DefaultConversationSpec: {
    $: mojo.internal.MojomType;
};
export declare const NewConversationSpec: {
    $: mojo.internal.MojomType;
};
export declare const DefaultSurfaceMojoSpec: {
    $: mojo.internal.MojomType;
};
export declare const NewTabMojoSpec: {
    $: mojo.internal.MojomType;
};
export declare const UniversalCartPayloadMojoSpec: {
    $: mojo.internal.MojomType;
};
export declare const TriggerInvokeFromInternalsOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const InternalsPageHandler_GetInternalsDataPayload_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const InternalsPageHandler_GetInternalsDataPayload_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const InternalsPageHandler_SetGuestUrlPresets_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const InternalsPageHandler_TriggerInvokeFromInternalsAction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const InternalsPageHandler_TriggerInvokeFromInternalsAction_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const InternalsPageHandler_GetOpenTabs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const InternalsPageHandler_GetOpenTabs_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const InternalsPageHandler_SetWebContinuityOriginatingHostUrlPreset_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const InternalsPageHandler_SetShowErrorAllowed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const InternalsPageHandler_ShowExperimentalOptIn_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const InternalsPageHandler_RevokeExperimentalTriggeringConsent_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const InternalsPageHandler_RevokeGlicConsent_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const InternalsPageHandler_RevokeActuationConsent_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const InternalsPageHandler_SetHotkeyGlobalScopeMigratedV2_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const InternalsPageHandlerFactory_CreateInternalsPageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const InvokeConversationSelectionSpec: {
    $: mojo.internal.MojomType;
};
export declare const InvokeTargetSurfaceSpec: {
    $: mojo.internal.MojomType;
};
export declare const TriggerInvokePayloadSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ProfileEnablementMojoType {
    featureEnabled: boolean;
    isRegularProfile: boolean;
    isRolledOut: boolean;
    primaryAccountIsCapable: boolean;
    primaryAccountIsFullySignedIn: boolean;
    allowedByChromePolicy: boolean;
    allowedByRemoteAdmin: boolean;
    allowedByRemoteOther: boolean;
    freIsConsented: boolean;
    allowedByCountryFilter: boolean;
    allowedByLocaleFilter: boolean;
    actuationIsConsented: boolean;
    liveAllowed: boolean;
    shareImageAllowed: boolean;
    actuationEligibility: ActuationEligibility;
    glicApiActuationEligibility: ActuationEligibility;
    glicExperimentalTriggeringState: GlicExperimentalTriggeringState;
}
export type ProfileEnablement = ProfileEnablementMojoType;
export declare interface ConfigInfoMojoType {
    guestUrl: url_mojom_Url;
    autopushGuestUrl: url_mojom_Url;
    stagingGuestUrl: url_mojom_Url;
    preprodGuestUrl: url_mojom_Url;
    prodGuestUrl: url_mojom_Url;
    webContinuityOriginatingHostUrl: url_mojom_Url;
}
export type ConfigInfo = ConfigInfoMojoType;
export declare interface TieredRolloutInfoMojoType {
    aiSubscriptionTier: (number | null);
    isEligibleForTieredRolloutV1: boolean;
    isEligibleForTieredRolloutV2: boolean;
    isEligibleForBenefitBasedRollout: boolean;
    isEligibleOverall: boolean;
    glicRolloutEligibilityPref: boolean;
    tieredRolloutV2EligibleTiers: string;
    subscriptionBenefits: string[];
    eligibleBenefits: string;
    actorEligibleBenefits: string;
    preferenceSyncStatus: string;
}
export type TieredRolloutInfo = TieredRolloutInfoMojoType;
export declare interface InternalsDataPayloadMojoType {
    enablement: ProfileEnablement;
    config: ConfigInfo;
    showErrorAllowed: boolean;
    experimentalTriggeringEnabled: boolean;
    hotkeyGlobalScopeMigratedV2: boolean;
    debugInfo: InternalsDebugInfo;
    tieredRolloutInfo: TieredRolloutInfo;
}
export type InternalsDataPayload = InternalsDataPayloadMojoType;
export declare interface InternalsDebugInfoMojoType {
    glicActorFeatureEnabled: boolean;
    glicRolloutFeatureEnabled: boolean;
    glicTieredRolloutFeatureEnabled: boolean;
    glicTieredRolloutV2FeatureEnabled: boolean;
    glicSubscriptionBenefitsEligibilityFeatureEnabled: boolean;
    systemRequirementMet: boolean;
    osVersionSupported: boolean;
    anchorEntrypointOverrideActive: boolean;
    primaryAccountNeedsSignedIn: boolean;
    platform: glic_mojom_Platform;
    formFactor: glic_mojom_FormFactor;
    booleanSettings: {
        [key: string]: boolean;
    };
    hotkey: string;
    locale: string;
    permanentCountryCode: string;
    sessionCountryCode: string;
    dogfoodStatus: string;
}
export type InternalsDebugInfo = InternalsDebugInfoMojoType;
export declare interface ScreenshotTestKeyConfigurationMojoType {
    publicKey: string;
    authSecret: string;
}
export type ScreenshotTestKeyConfiguration = ScreenshotTestKeyConfigurationMojoType;
export declare interface DefaultConversationMojoType {
}
export type DefaultConversation = DefaultConversationMojoType;
export declare interface NewConversationMojoType {
}
export type NewConversation = NewConversationMojoType;
export declare interface DefaultSurfaceMojoMojoType {
}
export type DefaultSurfaceMojo = DefaultSurfaceMojoMojoType;
export declare interface NewTabMojoMojoType {
    openInForeground: boolean;
}
export type NewTabMojo = NewTabMojoMojoType;
export declare interface UniversalCartPayloadMojoMojoType {
    serializedMetadata: number[];
}
export type UniversalCartPayloadMojo = UniversalCartPayloadMojoMojoType;
export declare interface TriggerInvokeFromInternalsOptionsMojoType {
    invocationSource: glic_mojom_InvocationSource;
    featureMode: (glic_mojom_FeatureMode | null);
    disableZss: boolean;
    autoSubmit: boolean;
    waitForPanelOpen: boolean;
    focusOnShow: (boolean | null);
    showPanel: (boolean | null);
    specificTabIndex: (number | null);
    takeScreenshot: boolean;
    supersedeIfInProgress: boolean;
    prompts: string[];
    conversation: InvokeConversationSelection;
    freOverride: glic_mojom_FreOverride;
    zssAdditionalContent: (string | null);
    skillId: (string | null);
    errorMessage: (string | null);
    timeout: (mojoBase_mojom_TimeDelta | null);
    freCompletionWaitMode: FreCompletionWaitMode;
    surface: InvokeTargetSurface;
    specificTabsToShareIndices: (number[] | null);
    actuationTarget: glic_mojom_ActuationTarget;
    payload: (TriggerInvokePayload | null);
    keyConfig: (ScreenshotTestKeyConfiguration | null);
}
export type TriggerInvokeFromInternalsOptions = TriggerInvokeFromInternalsOptionsMojoType;
export declare interface InternalsPageHandler_GetInternalsDataPayload_ParamsMojoType {
}
export type InternalsPageHandler_GetInternalsDataPayload_Params = InternalsPageHandler_GetInternalsDataPayload_ParamsMojoType;
export declare interface InternalsPageHandler_GetInternalsDataPayload_ResponseParamsMojoType {
    internalsData: InternalsDataPayload;
}
export type InternalsPageHandler_GetInternalsDataPayload_ResponseParams = InternalsPageHandler_GetInternalsDataPayload_ResponseParamsMojoType;
export declare interface InternalsPageHandler_SetGuestUrlPresets_ParamsMojoType {
    autopush: url_mojom_Url;
    staging: url_mojom_Url;
    preprod: url_mojom_Url;
    prod: url_mojom_Url;
}
export type InternalsPageHandler_SetGuestUrlPresets_Params = InternalsPageHandler_SetGuestUrlPresets_ParamsMojoType;
export declare interface InternalsPageHandler_TriggerInvokeFromInternalsAction_ParamsMojoType {
    options: TriggerInvokeFromInternalsOptions;
}
export type InternalsPageHandler_TriggerInvokeFromInternalsAction_Params = InternalsPageHandler_TriggerInvokeFromInternalsAction_ParamsMojoType;
export declare interface InternalsPageHandler_TriggerInvokeFromInternalsAction_ResponseParamsMojoType {
    success: boolean;
    errorMessage: string;
}
export type InternalsPageHandler_TriggerInvokeFromInternalsAction_ResponseParams = InternalsPageHandler_TriggerInvokeFromInternalsAction_ResponseParamsMojoType;
export declare interface InternalsPageHandler_GetOpenTabs_ParamsMojoType {
}
export type InternalsPageHandler_GetOpenTabs_Params = InternalsPageHandler_GetOpenTabs_ParamsMojoType;
export declare interface InternalsPageHandler_GetOpenTabs_ResponseParamsMojoType {
    tabTitles: string[];
}
export type InternalsPageHandler_GetOpenTabs_ResponseParams = InternalsPageHandler_GetOpenTabs_ResponseParamsMojoType;
export declare interface InternalsPageHandler_SetWebContinuityOriginatingHostUrlPreset_ParamsMojoType {
    webContinuityOriginatingHostUrl: url_mojom_Url;
}
export type InternalsPageHandler_SetWebContinuityOriginatingHostUrlPreset_Params = InternalsPageHandler_SetWebContinuityOriginatingHostUrlPreset_ParamsMojoType;
export declare interface InternalsPageHandler_SetShowErrorAllowed_ParamsMojoType {
    allowed: boolean;
}
export type InternalsPageHandler_SetShowErrorAllowed_Params = InternalsPageHandler_SetShowErrorAllowed_ParamsMojoType;
export declare interface InternalsPageHandler_ShowExperimentalOptIn_ParamsMojoType {
}
export type InternalsPageHandler_ShowExperimentalOptIn_Params = InternalsPageHandler_ShowExperimentalOptIn_ParamsMojoType;
export declare interface InternalsPageHandler_RevokeExperimentalTriggeringConsent_ParamsMojoType {
}
export type InternalsPageHandler_RevokeExperimentalTriggeringConsent_Params = InternalsPageHandler_RevokeExperimentalTriggeringConsent_ParamsMojoType;
export declare interface InternalsPageHandler_RevokeGlicConsent_ParamsMojoType {
}
export type InternalsPageHandler_RevokeGlicConsent_Params = InternalsPageHandler_RevokeGlicConsent_ParamsMojoType;
export declare interface InternalsPageHandler_RevokeActuationConsent_ParamsMojoType {
}
export type InternalsPageHandler_RevokeActuationConsent_Params = InternalsPageHandler_RevokeActuationConsent_ParamsMojoType;
export declare interface InternalsPageHandler_SetHotkeyGlobalScopeMigratedV2_ParamsMojoType {
    migrated: boolean;
}
export type InternalsPageHandler_SetHotkeyGlobalScopeMigratedV2_Params = InternalsPageHandler_SetHotkeyGlobalScopeMigratedV2_ParamsMojoType;
export declare interface InternalsPageHandlerFactory_CreateInternalsPageHandler_ParamsMojoType {
    receiver: InternalsPageHandlerPendingReceiver;
}
export type InternalsPageHandlerFactory_CreateInternalsPageHandler_Params = InternalsPageHandlerFactory_CreateInternalsPageHandler_ParamsMojoType;
export declare interface InvokeConversationSelection {
    defaultConversation?: DefaultConversation;
    newConversation?: NewConversation;
    conversationId?: string;
}
export declare enum InvokeConversationSelectionFieldTags {
    DEFAULT_CONVERSATION = 0,
    NEW_CONVERSATION = 1,
    CONVERSATION_ID = 2
}
export declare function whichInvokeConversationSelection(u: InvokeConversationSelection): InvokeConversationSelectionFieldTags;
export declare interface InvokeTargetSurface {
    defaultSurface?: DefaultSurfaceMojo;
    newTab?: NewTabMojo;
}
export declare enum InvokeTargetSurfaceFieldTags {
    DEFAULT_SURFACE = 0,
    NEW_TAB = 1
}
export declare function whichInvokeTargetSurface(u: InvokeTargetSurface): InvokeTargetSurfaceFieldTags;
export declare interface TriggerInvokePayload {
    universalCart?: UniversalCartPayloadMojo;
}
export declare enum TriggerInvokePayloadFieldTags {
    UNIVERSAL_CART = 0
}
export declare function whichTriggerInvokePayload(u: TriggerInvokePayload): TriggerInvokePayloadFieldTags;
export type BrowserProxy = MojoHandlerProxy<InternalsPageHandlerInterface>;
export declare const browserProxyFactory: MojoHandlerProxyFactory<InternalsPageHandlerInterface, InternalsPageHandlerPendingReceiver, InternalsPageHandlerRemote>;
