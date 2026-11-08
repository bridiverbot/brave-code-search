import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { ComposeStatus as compose_mojom_ComposeStatus } from './compose_enums.mojom-webui.js';
export declare const InputModeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum InputMode {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kUnset = 0,
    kPolish = 1,
    kElaborate = 2,
    kFormalize = 3
}
export declare const StyleModifierSpec: {
    $: mojo.internal.MojomType;
};
export declare enum StyleModifier {
    MIN_VALUE = 0,
    MAX_VALUE = 5,
    kUnset = 0,
    kFormal = 1,
    kCasual = 2,
    kLonger = 3,
    kShorter = 4,
    kRetry = 5
}
export declare const CloseReasonSpec: {
    $: mojo.internal.MojomType;
};
export declare enum CloseReason {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kFirstRunCloseButton = 0,
    kCloseButton = 1,
    kInsertButton = 2,
    kMSBBCloseButton = 3
}
export declare const UserFeedbackSpec: {
    $: mojo.internal.MojomType;
};
export declare enum UserFeedback {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kUserFeedbackUnspecified = 0,
    kUserFeedbackNegative = 1,
    kUserFeedbackPositive = 2
}
export type ComposeSessionUntrustedPageHandlerFactoryPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ComposeSessionUntrustedPageHandlerFactoryPendingReceiver>;
export declare class ComposeSessionUntrustedPageHandlerFactoryPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ComposeSessionUntrustedPageHandlerFactory> {
    handle: mojo.internal.interfaceSupport.Endpoint<ComposeSessionUntrustedPageHandlerFactoryPendingReceiver>;
    constructor(handle: MojoHandle | ComposeSessionUntrustedPageHandlerFactoryPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ComposeSessionUntrustedPageHandlerFactoryInterface {
    createComposeSessionUntrustedPageHandler(clientHandler: ComposeClientUntrustedPageHandlerPendingReceiver, handler: ComposeSessionUntrustedPageHandlerPendingReceiver, dialog: ComposeUntrustedDialogRemote): void;
}
export declare class ComposeSessionUntrustedPageHandlerFactoryRemote implements ComposeSessionUntrustedPageHandlerFactoryInterface, mojo.internal.interfaceSupport.InterfaceRemote<ComposeSessionUntrustedPageHandlerFactoryPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ComposeSessionUntrustedPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ComposeSessionUntrustedPageHandlerFactoryPendingReceiverEndpoint);
    createComposeSessionUntrustedPageHandler(clientHandler: ComposeClientUntrustedPageHandlerPendingReceiver, handler: ComposeSessionUntrustedPageHandlerPendingReceiver, dialog: ComposeUntrustedDialogRemote): void;
}
/**
 * An object which receives request messages for the ComposeSessionUntrustedPageHandlerFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ComposeSessionUntrustedPageHandlerFactoryReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ComposeSessionUntrustedPageHandlerFactoryRemote, ComposeSessionUntrustedPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ComposeSessionUntrustedPageHandlerFactoryRemote, ComposeSessionUntrustedPageHandlerFactoryPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ComposeSessionUntrustedPageHandlerFactoryInterface);
}
export declare class ComposeSessionUntrustedPageHandlerFactory {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ComposeSessionUntrustedPageHandlerFactoryRemote;
}
/**
 * An object which receives request messages for the ComposeSessionUntrustedPageHandlerFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ComposeSessionUntrustedPageHandlerFactoryCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ComposeSessionUntrustedPageHandlerFactoryRemote, ComposeSessionUntrustedPageHandlerFactoryPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ComposeSessionUntrustedPageHandlerFactoryRemote, ComposeSessionUntrustedPageHandlerFactoryPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createComposeSessionUntrustedPageHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(clientHandler: ComposeClientUntrustedPageHandlerPendingReceiver, handler: ComposeSessionUntrustedPageHandlerPendingReceiver, dialog: ComposeUntrustedDialogRemote) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ComposeSessionUntrustedPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ComposeSessionUntrustedPageHandlerPendingReceiver>;
export declare class ComposeSessionUntrustedPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ComposeSessionUntrustedPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<ComposeSessionUntrustedPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | ComposeSessionUntrustedPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ComposeSessionUntrustedPageHandlerInterface {
    logCancelEdit(): void;
    compose(input: string, mode: InputMode, edited: boolean): void;
    rewrite(style: StyleModifier): void;
    logEditInput(): void;
    saveWebUIState(webuiState: string): void;
    acceptComposeResult(): Promise<{
        success: boolean;
    }>;
    requestInitialState(): Promise<{
        initialState: OpenMetadata;
    }>;
    undo(): Promise<{
        lastState: (ComposeState | null);
    }>;
    recoverFromErrorState(): Promise<{
        stateBeforeError: (ComposeState | null);
    }>;
    redo(): Promise<{
        nextState: (ComposeState | null);
    }>;
    openBugReportingLink(): void;
    openComposeLearnMorePage(): void;
    openEnterpriseComposeLearnMorePage(): void;
    openFeedbackSurveyLink(): void;
    openSignInPage(): void;
    setUserFeedback(feedback: UserFeedback): void;
    editResult(newResult: string): Promise<{
        isEdited: boolean;
    }>;
}
export declare class ComposeSessionUntrustedPageHandlerRemote implements ComposeSessionUntrustedPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<ComposeSessionUntrustedPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ComposeSessionUntrustedPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ComposeSessionUntrustedPageHandlerPendingReceiverEndpoint);
    logCancelEdit(): void;
    compose(input: string, mode: InputMode, edited: boolean): void;
    rewrite(style: StyleModifier): void;
    logEditInput(): void;
    saveWebUIState(webuiState: string): void;
    acceptComposeResult(): Promise<{
        success: boolean;
    }>;
    requestInitialState(): Promise<{
        initialState: OpenMetadata;
    }>;
    undo(): Promise<{
        lastState: (ComposeState | null);
    }>;
    recoverFromErrorState(): Promise<{
        stateBeforeError: (ComposeState | null);
    }>;
    redo(): Promise<{
        nextState: (ComposeState | null);
    }>;
    openBugReportingLink(): void;
    openComposeLearnMorePage(): void;
    openEnterpriseComposeLearnMorePage(): void;
    openFeedbackSurveyLink(): void;
    openSignInPage(): void;
    setUserFeedback(feedback: UserFeedback): void;
    editResult(newResult: string): Promise<{
        isEdited: boolean;
    }>;
}
/**
 * An object which receives request messages for the ComposeSessionUntrustedPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ComposeSessionUntrustedPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ComposeSessionUntrustedPageHandlerRemote, ComposeSessionUntrustedPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ComposeSessionUntrustedPageHandlerRemote, ComposeSessionUntrustedPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ComposeSessionUntrustedPageHandlerInterface);
}
export declare class ComposeSessionUntrustedPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ComposeSessionUntrustedPageHandlerRemote;
}
/**
 * An object which receives request messages for the ComposeSessionUntrustedPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ComposeSessionUntrustedPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ComposeSessionUntrustedPageHandlerRemote, ComposeSessionUntrustedPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ComposeSessionUntrustedPageHandlerRemote, ComposeSessionUntrustedPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    logCancelEdit: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    compose: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(input: string, mode: InputMode, edited: boolean) => any>;
    rewrite: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(style: StyleModifier) => any>;
    logEditInput: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    saveWebUIState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(webuiState: string) => any>;
    acceptComposeResult: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    requestInitialState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    undo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    recoverFromErrorState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    redo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openBugReportingLink: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openComposeLearnMorePage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openEnterpriseComposeLearnMorePage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openFeedbackSurveyLink: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openSignInPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setUserFeedback: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(feedback: UserFeedback) => any>;
    editResult: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(newResult: string) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ComposeClientUntrustedPageHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ComposeClientUntrustedPageHandlerPendingReceiver>;
export declare class ComposeClientUntrustedPageHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ComposeClientUntrustedPageHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<ComposeClientUntrustedPageHandlerPendingReceiver>;
    constructor(handle: MojoHandle | ComposeClientUntrustedPageHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ComposeClientUntrustedPageHandlerInterface {
    showUI(): void;
    closeUI(reason: CloseReason): void;
    completeFirstRun(): void;
    openComposeSettings(): void;
}
export declare class ComposeClientUntrustedPageHandlerRemote implements ComposeClientUntrustedPageHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<ComposeClientUntrustedPageHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ComposeClientUntrustedPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ComposeClientUntrustedPageHandlerPendingReceiverEndpoint);
    showUI(): void;
    closeUI(reason: CloseReason): void;
    completeFirstRun(): void;
    openComposeSettings(): void;
}
/**
 * An object which receives request messages for the ComposeClientUntrustedPageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ComposeClientUntrustedPageHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ComposeClientUntrustedPageHandlerRemote, ComposeClientUntrustedPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ComposeClientUntrustedPageHandlerRemote, ComposeClientUntrustedPageHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ComposeClientUntrustedPageHandlerInterface);
}
export declare class ComposeClientUntrustedPageHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ComposeClientUntrustedPageHandlerRemote;
}
/**
 * An object which receives request messages for the ComposeClientUntrustedPageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ComposeClientUntrustedPageHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ComposeClientUntrustedPageHandlerRemote, ComposeClientUntrustedPageHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ComposeClientUntrustedPageHandlerRemote, ComposeClientUntrustedPageHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    showUI: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    closeUI: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(reason: CloseReason) => any>;
    completeFirstRun: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openComposeSettings: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ComposeUntrustedDialogPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ComposeUntrustedDialogPendingReceiver>;
export declare class ComposeUntrustedDialogPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ComposeUntrustedDialog> {
    handle: mojo.internal.interfaceSupport.Endpoint<ComposeUntrustedDialogPendingReceiver>;
    constructor(handle: MojoHandle | ComposeUntrustedDialogPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ComposeUntrustedDialogInterface {
    responseReceived(response: ComposeResponse): void;
    partialResponseReceived(partialResponse: PartialComposeResponse): void;
}
export declare class ComposeUntrustedDialogRemote implements ComposeUntrustedDialogInterface, mojo.internal.interfaceSupport.InterfaceRemote<ComposeUntrustedDialogPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ComposeUntrustedDialogPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ComposeUntrustedDialogPendingReceiverEndpoint);
    responseReceived(response: ComposeResponse): void;
    partialResponseReceived(partialResponse: PartialComposeResponse): void;
}
/**
 * An object which receives request messages for the ComposeUntrustedDialog
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ComposeUntrustedDialogReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ComposeUntrustedDialogRemote, ComposeUntrustedDialogPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ComposeUntrustedDialogRemote, ComposeUntrustedDialogPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ComposeUntrustedDialogInterface);
}
export declare class ComposeUntrustedDialog {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ComposeUntrustedDialogRemote;
}
/**
 * An object which receives request messages for the ComposeUntrustedDialog
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ComposeUntrustedDialogCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ComposeUntrustedDialogRemote, ComposeUntrustedDialogPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ComposeUntrustedDialogRemote, ComposeUntrustedDialogPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    responseReceived: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(response: ComposeResponse) => any>;
    partialResponseReceived: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(partialResponse: PartialComposeResponse) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const ComposeResponseSpec: {
    $: mojo.internal.MojomType;
};
export declare const PartialComposeResponseSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConfigurableParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const OpenMetadataSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandlerFactory_CreateComposeSessionUntrustedPageHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_LogCancelEdit_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_Compose_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_Rewrite_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_LogEditInput_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_SaveWebUIState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_AcceptComposeResult_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_AcceptComposeResult_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_RequestInitialState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_RequestInitialState_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_Undo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_Undo_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_Redo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_Redo_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_OpenBugReportingLink_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_OpenComposeLearnMorePage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_OpenEnterpriseComposeLearnMorePage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_OpenFeedbackSurveyLink_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_OpenSignInPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_SetUserFeedback_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_EditResult_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeSessionUntrustedPageHandler_EditResult_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeClientUntrustedPageHandler_ShowUI_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeClientUntrustedPageHandler_CloseUI_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeClientUntrustedPageHandler_CompleteFirstRun_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeClientUntrustedPageHandler_OpenComposeSettings_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeUntrustedDialog_ResponseReceived_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ComposeUntrustedDialog_PartialResponseReceived_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ComposeResponseMojoType {
    status: compose_mojom_ComposeStatus;
    undoAvailable: boolean;
    redoAvailable: boolean;
    providedByUser: boolean;
    onDeviceEvaluationUsed: boolean;
    triggeredFromModifier: boolean;
    result: string;
}
export type ComposeResponse = ComposeResponseMojoType;
export declare interface PartialComposeResponseMojoType {
    result: string;
}
export type PartialComposeResponse = PartialComposeResponseMojoType;
export declare interface ComposeStateMojoType {
    webuiState: string;
    response: (ComposeResponse | null);
    hasPendingRequest: boolean;
    feedback: UserFeedback;
}
export type ComposeState = ComposeStateMojoType;
export declare interface ConfigurableParamsMojoType {
    minWordLimit: number;
    maxWordLimit: number;
    maxCharacterLimit: number;
}
export type ConfigurableParams = ConfigurableParamsMojoType;
export declare interface OpenMetadataMojoType {
    freComplete: boolean;
    msbbState: boolean;
    textSelected: boolean;
    initialInput: string;
    composeState: ComposeState;
    configurableParams: ConfigurableParams;
}
export type OpenMetadata = OpenMetadataMojoType;
export declare interface ComposeSessionUntrustedPageHandlerFactory_CreateComposeSessionUntrustedPageHandler_ParamsMojoType {
    clientHandler: ComposeClientUntrustedPageHandlerPendingReceiver;
    handler: ComposeSessionUntrustedPageHandlerPendingReceiver;
    dialog: ComposeUntrustedDialogRemote;
}
export type ComposeSessionUntrustedPageHandlerFactory_CreateComposeSessionUntrustedPageHandler_Params = ComposeSessionUntrustedPageHandlerFactory_CreateComposeSessionUntrustedPageHandler_ParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_LogCancelEdit_ParamsMojoType {
}
export type ComposeSessionUntrustedPageHandler_LogCancelEdit_Params = ComposeSessionUntrustedPageHandler_LogCancelEdit_ParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_Compose_ParamsMojoType {
    input: string;
    mode: InputMode;
    edited: boolean;
}
export type ComposeSessionUntrustedPageHandler_Compose_Params = ComposeSessionUntrustedPageHandler_Compose_ParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_Rewrite_ParamsMojoType {
    style: StyleModifier;
}
export type ComposeSessionUntrustedPageHandler_Rewrite_Params = ComposeSessionUntrustedPageHandler_Rewrite_ParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_LogEditInput_ParamsMojoType {
}
export type ComposeSessionUntrustedPageHandler_LogEditInput_Params = ComposeSessionUntrustedPageHandler_LogEditInput_ParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_SaveWebUIState_ParamsMojoType {
    webuiState: string;
}
export type ComposeSessionUntrustedPageHandler_SaveWebUIState_Params = ComposeSessionUntrustedPageHandler_SaveWebUIState_ParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_AcceptComposeResult_ParamsMojoType {
}
export type ComposeSessionUntrustedPageHandler_AcceptComposeResult_Params = ComposeSessionUntrustedPageHandler_AcceptComposeResult_ParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_AcceptComposeResult_ResponseParamsMojoType {
    success: boolean;
}
export type ComposeSessionUntrustedPageHandler_AcceptComposeResult_ResponseParams = ComposeSessionUntrustedPageHandler_AcceptComposeResult_ResponseParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_RequestInitialState_ParamsMojoType {
}
export type ComposeSessionUntrustedPageHandler_RequestInitialState_Params = ComposeSessionUntrustedPageHandler_RequestInitialState_ParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_RequestInitialState_ResponseParamsMojoType {
    initialState: OpenMetadata;
}
export type ComposeSessionUntrustedPageHandler_RequestInitialState_ResponseParams = ComposeSessionUntrustedPageHandler_RequestInitialState_ResponseParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_Undo_ParamsMojoType {
}
export type ComposeSessionUntrustedPageHandler_Undo_Params = ComposeSessionUntrustedPageHandler_Undo_ParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_Undo_ResponseParamsMojoType {
    lastState: (ComposeState | null);
}
export type ComposeSessionUntrustedPageHandler_Undo_ResponseParams = ComposeSessionUntrustedPageHandler_Undo_ResponseParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ParamsMojoType {
}
export type ComposeSessionUntrustedPageHandler_RecoverFromErrorState_Params = ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ResponseParamsMojoType {
    stateBeforeError: (ComposeState | null);
}
export type ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ResponseParams = ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ResponseParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_Redo_ParamsMojoType {
}
export type ComposeSessionUntrustedPageHandler_Redo_Params = ComposeSessionUntrustedPageHandler_Redo_ParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_Redo_ResponseParamsMojoType {
    nextState: (ComposeState | null);
}
export type ComposeSessionUntrustedPageHandler_Redo_ResponseParams = ComposeSessionUntrustedPageHandler_Redo_ResponseParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_OpenBugReportingLink_ParamsMojoType {
}
export type ComposeSessionUntrustedPageHandler_OpenBugReportingLink_Params = ComposeSessionUntrustedPageHandler_OpenBugReportingLink_ParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_OpenComposeLearnMorePage_ParamsMojoType {
}
export type ComposeSessionUntrustedPageHandler_OpenComposeLearnMorePage_Params = ComposeSessionUntrustedPageHandler_OpenComposeLearnMorePage_ParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_OpenEnterpriseComposeLearnMorePage_ParamsMojoType {
}
export type ComposeSessionUntrustedPageHandler_OpenEnterpriseComposeLearnMorePage_Params = ComposeSessionUntrustedPageHandler_OpenEnterpriseComposeLearnMorePage_ParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_OpenFeedbackSurveyLink_ParamsMojoType {
}
export type ComposeSessionUntrustedPageHandler_OpenFeedbackSurveyLink_Params = ComposeSessionUntrustedPageHandler_OpenFeedbackSurveyLink_ParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_OpenSignInPage_ParamsMojoType {
}
export type ComposeSessionUntrustedPageHandler_OpenSignInPage_Params = ComposeSessionUntrustedPageHandler_OpenSignInPage_ParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_SetUserFeedback_ParamsMojoType {
    feedback: UserFeedback;
}
export type ComposeSessionUntrustedPageHandler_SetUserFeedback_Params = ComposeSessionUntrustedPageHandler_SetUserFeedback_ParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_EditResult_ParamsMojoType {
    newResult: string;
}
export type ComposeSessionUntrustedPageHandler_EditResult_Params = ComposeSessionUntrustedPageHandler_EditResult_ParamsMojoType;
export declare interface ComposeSessionUntrustedPageHandler_EditResult_ResponseParamsMojoType {
    isEdited: boolean;
}
export type ComposeSessionUntrustedPageHandler_EditResult_ResponseParams = ComposeSessionUntrustedPageHandler_EditResult_ResponseParamsMojoType;
export declare interface ComposeClientUntrustedPageHandler_ShowUI_ParamsMojoType {
}
export type ComposeClientUntrustedPageHandler_ShowUI_Params = ComposeClientUntrustedPageHandler_ShowUI_ParamsMojoType;
export declare interface ComposeClientUntrustedPageHandler_CloseUI_ParamsMojoType {
    reason: CloseReason;
}
export type ComposeClientUntrustedPageHandler_CloseUI_Params = ComposeClientUntrustedPageHandler_CloseUI_ParamsMojoType;
export declare interface ComposeClientUntrustedPageHandler_CompleteFirstRun_ParamsMojoType {
}
export type ComposeClientUntrustedPageHandler_CompleteFirstRun_Params = ComposeClientUntrustedPageHandler_CompleteFirstRun_ParamsMojoType;
export declare interface ComposeClientUntrustedPageHandler_OpenComposeSettings_ParamsMojoType {
}
export type ComposeClientUntrustedPageHandler_OpenComposeSettings_Params = ComposeClientUntrustedPageHandler_OpenComposeSettings_ParamsMojoType;
export declare interface ComposeUntrustedDialog_ResponseReceived_ParamsMojoType {
    response: ComposeResponse;
}
export type ComposeUntrustedDialog_ResponseReceived_Params = ComposeUntrustedDialog_ResponseReceived_ParamsMojoType;
export declare interface ComposeUntrustedDialog_PartialResponseReceived_ParamsMojoType {
    partialResponse: PartialComposeResponse;
}
export type ComposeUntrustedDialog_PartialResponseReceived_Params = ComposeUntrustedDialog_PartialResponseReceived_ParamsMojoType;
