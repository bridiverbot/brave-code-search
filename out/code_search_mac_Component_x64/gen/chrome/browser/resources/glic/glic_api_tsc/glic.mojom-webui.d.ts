import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { AutofillSuggestionDialogOnFormConfirmedParams as actor_webui_mojom_AutofillSuggestionDialogOnFormConfirmedParams, AutofillSuggestionDialogOnFormPresentedParams as actor_webui_mojom_AutofillSuggestionDialogOnFormPresentedParams, AutofillSuggestionDialogOnFormPreviewChangedParams as actor_webui_mojom_AutofillSuggestionDialogOnFormPreviewChangedParams, GmailOtpConfirmationRequest as actor_webui_mojom_GmailOtpConfirmationRequest, GmailOtpOptInRequest as actor_webui_mojom_GmailOtpOptInRequest, NavigationConfirmationRequest as actor_webui_mojom_NavigationConfirmationRequest, NavigationConfirmationResponse as actor_webui_mojom_NavigationConfirmationResponse, SelectAutofillSuggestionsDialogRequest as actor_webui_mojom_SelectAutofillSuggestionsDialogRequest, SelectAutofillSuggestionsDialogResponse as actor_webui_mojom_SelectAutofillSuggestionsDialogResponse, SelectCredentialDialogRequest as actor_webui_mojom_SelectCredentialDialogRequest, SelectCredentialDialogResponse as actor_webui_mojom_SelectCredentialDialogResponse, TaskOptions as actor_webui_mojom_TaskOptions, UserConfirmationDialogRequest as actor_webui_mojom_UserConfirmationDialogRequest, UserConfirmationDialogResponse as actor_webui_mojom_UserConfirmationDialogResponse, GmailOtpConfirmationResult as actor_webui_mojom_GmailOtpConfirmationResult, GmailOtpOptInResult as actor_webui_mojom_GmailOtpOptInResult } from './actor_webui.mojom-webui.js';
import { PageMetadata as blink_mojom_PageMetadata } from './ai_page_content_metadata.mojom-webui.js';
import { ContentSettingsType as contentSettings_mojom_ContentSettingsType } from './content_settings_types.mojom-webui.js';
import { GeminiEnterpriseHandlerPendingReceiver as glic_mojom_GeminiEnterpriseHandlerPendingReceiver } from './gemini_enterprise.mojom-webui.js';
import { ActuationTarget as glic_mojom_ActuationTarget, FeatureMode as glic_mojom_FeatureMode, FormFactor as glic_mojom_FormFactor, FreOverride as glic_mojom_FreOverride, InvocationSource as glic_mojom_InvocationSource, PanelStateKind as glic_mojom_PanelStateKind, Platform as glic_mojom_Platform } from './glic_enums.mojom-webui.js';
import { AiOverlayToolsPendingReceiver as aiOverlayDialog_mojom_AiOverlayToolsPendingReceiver } from './tools.mojom-webui.js';
import { AbslStatusCode as mojoBase_mojom_AbslStatusCode } from '//resources/mojo/mojo/public/mojom/base/absl_status.mojom-webui.js';
import { BigBuffer as mojoBase_mojom_BigBuffer } from '//resources/mojo/mojo/public/mojom/base/big_buffer.mojom-webui.js';
import { ByteString as mojoBase_mojom_ByteString } from '//resources/mojo/mojo/public/mojom/base/byte_string.mojom-webui.js';
import { ProtoWrapper as mojoBase_mojom_ProtoWrapper } from '//resources/mojo/mojo/public/mojom/base/proto_wrapper.mojom-webui.js';
import { Time as mojoBase_mojom_Time, TimeDelta as mojoBase_mojom_TimeDelta } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { UnguessableToken as mojoBase_mojom_UnguessableToken } from '//resources/mojo/mojo/public/mojom/base/unguessable_token.mojom-webui.js';
import { Version as mojoBase_mojom_Version } from '//resources/mojo/mojo/public/mojom/base/version.mojom-webui.js';
import { BitmapN32 as skia_mojom_BitmapN32 } from '//resources/mojo/skia/public/mojom/bitmap.mojom-webui.js';
import { Point as gfx_mojom_Point, Rect as gfx_mojom_Rect, Size as gfx_mojom_Size } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
import { Origin as url_mojom_Origin } from '//resources/mojo/url/mojom/origin.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const FileUploadPolicyStateSpec: {
    $: mojo.internal.MojomType;
};
export declare enum FileUploadPolicyState {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kEnabled = 0,
    kDisabled = 1
}
export declare const MetricUserInputReactionTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum MetricUserInputReactionType {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kUnknown = 0,
    kCanned = 1,
    kModel = 2
}
export declare const PerformActionsErrorReasonSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PerformActionsErrorReason {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kUnknown = 0,
    kInvalidProto = 1,
    kMissingTaskId = 2
}
export declare const CreateTaskErrorReasonSpec: {
    $: mojo.internal.MojomType;
};
export declare enum CreateTaskErrorReason {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    kUnknown = 0,
    kTaskSystemUnavailable = 1,
    kExistingActiveTask = 2,
    kBlockedByPolicy = 3,
    kConversationNotRegistered = 4
}
export declare const ActorTaskStateSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ActorTaskState {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    kUnknown = 0,
    kIdle = 1,
    kActing = 2,
    kPaused = 3,
    kStopped = 4
}
export declare const ActorTaskPauseReasonSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ActorTaskPauseReason {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kPausedByModel = 0,
    kPausedByUser = 1
}
export declare const ActorTaskStopReasonSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ActorTaskStopReason {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    kTaskComplete = 0,
    kStoppedByUser = 1,
    kModelError = 2,
    kUserStartedNewChat = 3,
    kUserLoadedPreviousChat = 4
}
export declare const ActorTaskInterruptReasonSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ActorTaskInterruptReason {
    MIN_VALUE = 0,
    MAX_VALUE = 8,
    kUnknownReason = 0,
    kTaskComplete = 1,
    kWaitingUserInput = 2,
    kWaitingUserClarification = 3,
    kWaitingUserConfirmation = 4,
    kWaitingUserTakeOver = 5,
    kWaitingIrrelevantUserInput = 6,
    kWaitingUnsafeCounterAbuseVerdict = 7,
    kWaitingForExperimentalTriggeringConsent = 8
}
export declare const SbThreatTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SbThreatType {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kUnspecified = 0,
    kSocialEngineering = 1,
    kMalware = 2,
    kUnwantedSoftware = 3
}
export declare const ScreenshotImageFormatSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ScreenshotImageFormat {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kJpeg = 0,
    kPng = 1,
    kWebp = 2
}
export declare const ScreenshotCompressionQualitySpec: {
    $: mojo.internal.MojomType;
};
export declare enum ScreenshotCompressionQuality {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kNone = 0,
    kLow = 1,
    kMedium = 2,
    kHigh = 3
}
export declare const ScrollToErrorReasonSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ScrollToErrorReason {
    MIN_VALUE = 0,
    MAX_VALUE = 8,
    kNotSupported = 0,
    kNewerScrollToCall = 1,
    kNoFocusedTab = 2,
    kNoMatchFound = 3,
    kFocusedTabChangedOrNavigated = 4,
    kNoMatchingDocument = 5,
    kSearchRangeInvalid = 6,
    kTabContextPermissionDisabled = 7,
    kDroppedByWebClient = 8
}
export declare const SkillSourceSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SkillSource {
    MIN_VALUE = 0,
    MAX_VALUE = 5,
    kUnknown = 0,
    kFirstParty = 1,
    kUserCreated = 2,
    kDerivedFromFirstParty = 3,
    kEnterprise = 4,
    kDerivedFromEnterprise = 5
}
export declare const SkillsWebClientEventSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SkillsWebClientEvent {
    MIN_VALUE = 0,
    MAX_VALUE = 22,
    kUnknown = 0,
    kUsedFirstPartySkill = 1,
    kUsedUserCreatedSkill = 2,
    kUsedDerivedFirstPartySkill = 3,
    kOpenedMenu = 4,
    kClickedManageFromMenu = 5,
    kClickedAddFromMenu = 6,
    kClickedEditFromMenu = 7,
    kClickedAddOn1pSkill = 8,
    kClickedSaveAsSkillHoverChip = 9,
    kClickedEditSkillHoverChip = 10,
    kClickedBrowseSkillFromPlusMenu = 11,
    kClickedSkillFromPlusMenu = 12,
    kClickedManageSkillFromPlusMenu = 13,
    kClickedMoreFromMenu = 14,
    kClickedManageSkillFromMenu = 15,
    kClickedSkillFromMenu = 16,
    kClickedBrowseSkillsFromMenu = 17,
    kSkillBuilderClickedPromoChip = 20,
    kSkillBuilderPromptGenerated = 21,
    kSkillBuilderClickedSaveAsSkill = 22
}
export declare const PinTriggerSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PinTrigger {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kWebClientUnknown = 0,
    kCandidatesToggle = 1,
    kAtMention = 2,
    kActuation = 3
}
export declare const UnpinTriggerSpec: {
    $: mojo.internal.MojomType;
};
export declare enum UnpinTrigger {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kWebClientUnknown = 0,
    kCandidatesToggle = 1,
    kChip = 2,
    kActuation = 3
}
export declare const CancelActionsResultSpec: {
    $: mojo.internal.MojomType;
};
export declare enum CancelActionsResult {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kUnknown = 0,
    kSuccess = 1,
    kTaskNotFound = 2,
    kFailed = 3
}
export declare const GlicRequestEventSpec: {
    $: mojo.internal.MojomType;
};
export declare enum GlicRequestEvent {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    kRequestReceived = 0,
    kResponseSent = 1,
    kRequestHandlerException = 2,
    kRequestReceivedWhileInactive = 4
}
export declare const SwitchConversationErrorReasonSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SwitchConversationErrorReason {
    MIN_VALUE = 0,
    MAX_VALUE = 0,
    kUnknown = 0
}
export declare const RegisterConversationErrorReasonSpec: {
    $: mojo.internal.MojomType;
};
export declare enum RegisterConversationErrorReason {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kUnknown = 0,
    kInstanceAlreadyHasConversationId = 1
}
export declare const WebClientModeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum WebClientMode {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kUnknown = 2,
    kText = 0,
    kAudio = 1
}
export declare const PromptTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum PromptType {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    kUnspecified = 0,
    kTypedText = 1,
    kZeroStateSuggestions = 2,
    kAutoPrompt = 3,
    kAudio = 4
}
export declare const MicrophoneStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare enum MicrophoneStatus {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kNotListening = 0,
    kListening = 1,
    kUnknown = 2
}
export declare const WebClientModelSpec: {
    $: mojo.internal.MojomType;
};
export declare enum WebClientModel {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kDefault = 0,
    kActor = 1
}
export declare const WebUseCounterSpec: {
    $: mojo.internal.MojomType;
};
export declare enum WebUseCounter {
    MIN_VALUE = 0,
    MAX_VALUE = 6,
    kDefault = 0,
    kSubmitPromptWithAutoMode = 1,
    kTaskInterruptedForUserConfirmation = 2,
    kTaskInterruptedForUserClarification = 3,
    kSelectionToggledViaSharedMenu = 4,
    kSelectionToggledViaHotKey = 5,
    kSubmitPromptWithTextSelectionCue = 6
}
export declare const ClientErrorDialogTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ClientErrorDialogType {
    MIN_VALUE = 0,
    MAX_VALUE = 5,
    kUnknown = 0,
    kDisabledByOrganization = 1,
    kGenericAvailability = 2,
    kIneligibleAccount = 3,
    kSignout = 4,
    kUnsupportedLocation = 5
}
export declare const ResponseStopCauseSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ResponseStopCause {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kUnknown = 0,
    kUser = 1,
    kOther = 2
}
export declare const AdditionalContextSourceSpec: {
    $: mojo.internal.MojomType;
};
export declare enum AdditionalContextSource {
    MIN_VALUE = 0,
    MAX_VALUE = 5,
    kUnknown = 2,
    kShareContextMenu = 0,
    kRegionSelection = 1,
    kTextSelection = 3,
    kWebDragDrop = 4,
    kExperimentalTriggering = 5
}
export declare const ExperimentalTriggeringUpdateTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ExperimentalTriggeringUpdateType {
    MIN_VALUE = 0,
    MAX_VALUE = 7,
    kUnknown = 0,
    kWorklog = 1,
    kPaused = 2,
    kTerminalCompletion = 3,
    kTerminalStopped = 4,
    kTerminalFailed = 5,
    kYieldToUser = 6,
    kResumed = 7
}
export declare const SubscriberObservationTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SubscriberObservationType {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kUpdate = 0,
    kComplete = 1,
    kError = 2
}
export declare const LightweightPageFeatureSpec: {
    $: mojo.internal.MojomType;
};
export declare enum LightweightPageFeature {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kUnknown = 0,
    kYtAskButtonPresent = 1
}
export declare const CaptureRegionErrorReasonSpec: {
    $: mojo.internal.MojomType;
};
export declare enum CaptureRegionErrorReason {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kUnknown = 0,
    kNoFocusableTab = 1
}
export declare const ScreenshotEncryptionSchemeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ScreenshotEncryptionScheme {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kUnknown = 0,
    kNone = 1,
    kRfc8291 = 2
}
export declare const SettingsPageFieldSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SettingsPageField {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kNone = 0,
    kOsHotkey = 1,
    kOsEntrypointToggle = 2,
    kLocationPermission = 3
}
export declare const HostCapabilitySpec: {
    $: mojo.internal.MojomType;
};
export declare enum HostCapability {
    MIN_VALUE = 0,
    MAX_VALUE = 20,
    kScrollToPdf = 0,
    kResetSizeAndLocationOnOpen = 1,
    kGetModelQualityClientId = 2,
    kMultiInstance = 3,
    kTrustFirstOnboardingArm1 = 4,
    kTrustFirstOnboardingArm2 = 5,
    kShareAdditionalImageContext = 6,
    kPdfZeroState = 7,
    kInvoke = 8,
    kNoLiveMode = 9,
    kAutoLoginSignInWithGoogle = 10,
    kShareImageViaInvoke = 11,
    kImgWebDragDrop = 12,
    kNoWebUiLoader = 13,
    kEnforcesPasteEligibility = 14,
    kAttemptOtpFilling = 15,
    kChromeTools = 16,
    kSkillsV2 = 17,
    kEmbeddedPdfBytesExtraction = 18,
    kNoWebview = 19,
    kSendTabToSelf = 20
}
export declare const ClientCapabilitiesSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ClientCapabilities {
    MIN_VALUE = 0,
    MAX_VALUE = 0,
    kIgnoresTabDataFavicons = 0
}
export type PinCandidatesObserverPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<PinCandidatesObserverPendingReceiver>;
export declare class PinCandidatesObserverPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<PinCandidatesObserver> {
    handle: mojo.internal.interfaceSupport.Endpoint<PinCandidatesObserverPendingReceiver>;
    constructor(handle: MojoHandle | PinCandidatesObserverPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface PinCandidatesObserverInterface {
    onPinCandidatesChanged(candidates: PinCandidate[]): void;
}
export declare class PinCandidatesObserverRemote implements PinCandidatesObserverInterface, mojo.internal.interfaceSupport.InterfaceRemote<PinCandidatesObserverPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<PinCandidatesObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | PinCandidatesObserverPendingReceiverEndpoint);
    onPinCandidatesChanged(candidates: PinCandidate[]): void;
}
/**
 * An object which receives request messages for the PinCandidatesObserver
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class PinCandidatesObserverReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<PinCandidatesObserverRemote, PinCandidatesObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PinCandidatesObserverRemote, PinCandidatesObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: PinCandidatesObserverInterface);
}
export declare class PinCandidatesObserver {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): PinCandidatesObserverRemote;
}
/**
 * An object which receives request messages for the PinCandidatesObserver
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class PinCandidatesObserverCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<PinCandidatesObserverRemote, PinCandidatesObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<PinCandidatesObserverRemote, PinCandidatesObserverPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onPinCandidatesChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(candidates: PinCandidate[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ActorClientPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ActorClientPendingReceiver>;
export declare class ActorClientPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ActorClient> {
    handle: mojo.internal.interfaceSupport.Endpoint<ActorClientPendingReceiver>;
    constructor(handle: MojoHandle | ActorClientPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ActorClientInterface {
    requestToShowCredentialSelectionDialog(request: actor_webui_mojom_SelectCredentialDialogRequest): Promise<{
        response: actor_webui_mojom_SelectCredentialDialogResponse;
    }>;
    requestToShowAutofillSuggestionsDialog(request: actor_webui_mojom_SelectAutofillSuggestionsDialogRequest): Promise<{
        response: actor_webui_mojom_SelectAutofillSuggestionsDialogResponse;
    }>;
    requestToShowUserConfirmationDialog(request: actor_webui_mojom_UserConfirmationDialogRequest): Promise<{
        response: actor_webui_mojom_UserConfirmationDialogResponse;
    }>;
    requestToConfirmNavigation(request: actor_webui_mojom_NavigationConfirmationRequest): Promise<{
        response: actor_webui_mojom_NavigationConfirmationResponse;
    }>;
    notifyActorTaskStateChanged(taskId: number, state: ActorTaskState): void;
    requestToShowGmailOtpOptInDialog(request: actor_webui_mojom_GmailOtpOptInRequest): Promise<{
        result: actor_webui_mojom_GmailOtpOptInResult;
    }>;
    requestToShowGmailOtpConfirmationDialog(request: actor_webui_mojom_GmailOtpConfirmationRequest): Promise<{
        result: actor_webui_mojom_GmailOtpConfirmationResult;
    }>;
}
export declare class ActorClientRemote implements ActorClientInterface, mojo.internal.interfaceSupport.InterfaceRemote<ActorClientPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ActorClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ActorClientPendingReceiverEndpoint);
    requestToShowCredentialSelectionDialog(request: actor_webui_mojom_SelectCredentialDialogRequest): Promise<{
        response: actor_webui_mojom_SelectCredentialDialogResponse;
    }>;
    requestToShowAutofillSuggestionsDialog(request: actor_webui_mojom_SelectAutofillSuggestionsDialogRequest): Promise<{
        response: actor_webui_mojom_SelectAutofillSuggestionsDialogResponse;
    }>;
    requestToShowUserConfirmationDialog(request: actor_webui_mojom_UserConfirmationDialogRequest): Promise<{
        response: actor_webui_mojom_UserConfirmationDialogResponse;
    }>;
    requestToConfirmNavigation(request: actor_webui_mojom_NavigationConfirmationRequest): Promise<{
        response: actor_webui_mojom_NavigationConfirmationResponse;
    }>;
    notifyActorTaskStateChanged(taskId: number, state: ActorTaskState): void;
    requestToShowGmailOtpOptInDialog(request: actor_webui_mojom_GmailOtpOptInRequest): Promise<{
        result: actor_webui_mojom_GmailOtpOptInResult;
    }>;
    requestToShowGmailOtpConfirmationDialog(request: actor_webui_mojom_GmailOtpConfirmationRequest): Promise<{
        result: actor_webui_mojom_GmailOtpConfirmationResult;
    }>;
}
/**
 * An object which receives request messages for the ActorClient
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ActorClientReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ActorClientRemote, ActorClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ActorClientRemote, ActorClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ActorClientInterface);
}
export declare class ActorClient {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ActorClientRemote;
}
/**
 * An object which receives request messages for the ActorClient
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ActorClientCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ActorClientRemote, ActorClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ActorClientRemote, ActorClientPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    requestToShowCredentialSelectionDialog: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(request: actor_webui_mojom_SelectCredentialDialogRequest) => any>;
    requestToShowAutofillSuggestionsDialog: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(request: actor_webui_mojom_SelectAutofillSuggestionsDialogRequest) => any>;
    requestToShowUserConfirmationDialog: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(request: actor_webui_mojom_UserConfirmationDialogRequest) => any>;
    requestToConfirmNavigation: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(request: actor_webui_mojom_NavigationConfirmationRequest) => any>;
    notifyActorTaskStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(taskId: number, state: ActorTaskState) => any>;
    requestToShowGmailOtpOptInDialog: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(request: actor_webui_mojom_GmailOtpOptInRequest) => any>;
    requestToShowGmailOtpConfirmationDialog: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(request: actor_webui_mojom_GmailOtpConfirmationRequest) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ActorHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ActorHandlerPendingReceiver>;
export declare class ActorHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ActorHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<ActorHandlerPendingReceiver>;
    constructor(handle: MojoHandle | ActorHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ActorHandlerInterface {
    autofillSuggestionDialogOnFormPresented(taskId: number, params: actor_webui_mojom_AutofillSuggestionDialogOnFormPresentedParams): void;
    autofillSuggestionDialogOnFormPreviewChanged(taskId: number, params: actor_webui_mojom_AutofillSuggestionDialogOnFormPreviewChangedParams): void;
    autofillSuggestionDialogOnFormConfirmed(taskId: number, params: actor_webui_mojom_AutofillSuggestionDialogOnFormConfirmedParams): void;
    getContextForActorFromTab(tabId: number, options: TabContextOptions): Promise<{
        result: GetContextResult;
    }>;
    createTask(taskOptions: (actor_webui_mojom_TaskOptions | null)): Promise<number>;
    performActions(actionsProto: number[]): Promise<mojoBase_mojom_ProtoWrapper>;
    cancelActions(taskId: number): Promise<{
        result: CancelActionsResult;
    }>;
    stopActorTask(taskId: number, stopReason: ActorTaskStopReason): void;
    pauseActorTask(taskId: number, pauseReason: ActorTaskPauseReason, tabId: (number | null)): void;
    resumeActorTask(taskId: number, contextOptions: TabContextOptions): Promise<{
        result: GetContextResultWithActionResultCode;
    }>;
    interruptActorTask(taskId: number, interruptReason: (ActorTaskInterruptReason | null)): void;
    uninterruptActorTask(taskId: number): void;
    updateActorTaskStepProgress(taskId: number, stepProgress: string): void;
    createActorTab(taskId: number, options: CreateActorTabOptions): Promise<{
        tabData: (TabData | null);
    }>;
    logBeginAsyncEvent(eventAsyncId: bigint, taskId: number, event: string, details: string): void;
    logEndAsyncEvent(eventAsyncId: bigint, details: string): void;
    logInstantEvent(taskId: number, event: string, details: string): void;
    journalClear(): void;
    journalSnapshot(clearJournal: boolean): Promise<{
        journal: Journal;
    }>;
    journalStart(maxBytes: bigint, captureScreenshots: boolean): void;
    journalStop(): void;
    journalRecordFeedback(positive: boolean, reason: string): void;
}
export declare class ActorHandlerRemote implements ActorHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<ActorHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ActorHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ActorHandlerPendingReceiverEndpoint);
    autofillSuggestionDialogOnFormPresented(taskId: number, params: actor_webui_mojom_AutofillSuggestionDialogOnFormPresentedParams): void;
    autofillSuggestionDialogOnFormPreviewChanged(taskId: number, params: actor_webui_mojom_AutofillSuggestionDialogOnFormPreviewChangedParams): void;
    autofillSuggestionDialogOnFormConfirmed(taskId: number, params: actor_webui_mojom_AutofillSuggestionDialogOnFormConfirmedParams): void;
    getContextForActorFromTab(tabId: number, options: TabContextOptions): Promise<{
        result: GetContextResult;
    }>;
    createTask(taskOptions: (actor_webui_mojom_TaskOptions | null)): Promise<number>;
    performActions(actionsProto: number[]): Promise<mojoBase_mojom_ProtoWrapper>;
    cancelActions(taskId: number): Promise<{
        result: CancelActionsResult;
    }>;
    stopActorTask(taskId: number, stopReason: ActorTaskStopReason): void;
    pauseActorTask(taskId: number, pauseReason: ActorTaskPauseReason, tabId: (number | null)): void;
    resumeActorTask(taskId: number, contextOptions: TabContextOptions): Promise<{
        result: GetContextResultWithActionResultCode;
    }>;
    interruptActorTask(taskId: number, interruptReason: (ActorTaskInterruptReason | null)): void;
    uninterruptActorTask(taskId: number): void;
    updateActorTaskStepProgress(taskId: number, stepProgress: string): void;
    createActorTab(taskId: number, options: CreateActorTabOptions): Promise<{
        tabData: (TabData | null);
    }>;
    logBeginAsyncEvent(eventAsyncId: bigint, taskId: number, event: string, details: string): void;
    logEndAsyncEvent(eventAsyncId: bigint, details: string): void;
    logInstantEvent(taskId: number, event: string, details: string): void;
    journalClear(): void;
    journalSnapshot(clearJournal: boolean): Promise<{
        journal: Journal;
    }>;
    journalStart(maxBytes: bigint, captureScreenshots: boolean): void;
    journalStop(): void;
    journalRecordFeedback(positive: boolean, reason: string): void;
}
/**
 * An object which receives request messages for the ActorHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ActorHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ActorHandlerRemote, ActorHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ActorHandlerRemote, ActorHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ActorHandlerInterface);
}
export declare class ActorHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ActorHandlerRemote;
}
/**
 * An object which receives request messages for the ActorHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ActorHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ActorHandlerRemote, ActorHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ActorHandlerRemote, ActorHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    autofillSuggestionDialogOnFormPresented: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(taskId: number, params: actor_webui_mojom_AutofillSuggestionDialogOnFormPresentedParams) => any>;
    autofillSuggestionDialogOnFormPreviewChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(taskId: number, params: actor_webui_mojom_AutofillSuggestionDialogOnFormPreviewChangedParams) => any>;
    autofillSuggestionDialogOnFormConfirmed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(taskId: number, params: actor_webui_mojom_AutofillSuggestionDialogOnFormConfirmedParams) => any>;
    getContextForActorFromTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number, options: TabContextOptions) => any>;
    createTask: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(taskOptions: (actor_webui_mojom_TaskOptions | null)) => any>;
    performActions: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(actionsProto: number[]) => any>;
    cancelActions: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(taskId: number) => any>;
    stopActorTask: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(taskId: number, stopReason: ActorTaskStopReason) => any>;
    pauseActorTask: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(taskId: number, pauseReason: ActorTaskPauseReason, tabId: (number | null)) => any>;
    resumeActorTask: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(taskId: number, contextOptions: TabContextOptions) => any>;
    interruptActorTask: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(taskId: number, interruptReason: (ActorTaskInterruptReason | null)) => any>;
    uninterruptActorTask: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(taskId: number) => any>;
    updateActorTaskStepProgress: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(taskId: number, stepProgress: string) => any>;
    createActorTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(taskId: number, options: CreateActorTabOptions) => any>;
    logBeginAsyncEvent: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(eventAsyncId: bigint, taskId: number, event: string, details: string) => any>;
    logEndAsyncEvent: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(eventAsyncId: bigint, details: string) => any>;
    logInstantEvent: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(taskId: number, event: string, details: string) => any>;
    journalClear: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    journalSnapshot: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(clearJournal: boolean) => any>;
    journalStart: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(maxBytes: bigint, captureScreenshots: boolean) => any>;
    journalStop: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    journalRecordFeedback: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(positive: boolean, reason: string) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type AnnotationHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<AnnotationHandlerPendingReceiver>;
export declare class AnnotationHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<AnnotationHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<AnnotationHandlerPendingReceiver>;
    constructor(handle: MojoHandle | AnnotationHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface AnnotationHandlerInterface {
    scrollTo(params: ScrollToParams): Promise<{
        errorReason: (ScrollToErrorReason | null);
    }>;
    dropScrollToHighlight(): void;
}
export declare class AnnotationHandlerRemote implements AnnotationHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<AnnotationHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<AnnotationHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | AnnotationHandlerPendingReceiverEndpoint);
    scrollTo(params: ScrollToParams): Promise<{
        errorReason: (ScrollToErrorReason | null);
    }>;
    dropScrollToHighlight(): void;
}
/**
 * An object which receives request messages for the AnnotationHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class AnnotationHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<AnnotationHandlerRemote, AnnotationHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<AnnotationHandlerRemote, AnnotationHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: AnnotationHandlerInterface);
}
export declare class AnnotationHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): AnnotationHandlerRemote;
}
/**
 * An object which receives request messages for the AnnotationHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class AnnotationHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<AnnotationHandlerRemote, AnnotationHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<AnnotationHandlerRemote, AnnotationHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    scrollTo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(params: ScrollToParams) => any>;
    dropScrollToHighlight: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type SkillsHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<SkillsHandlerPendingReceiver>;
export declare class SkillsHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<SkillsHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<SkillsHandlerPendingReceiver>;
    constructor(handle: MojoHandle | SkillsHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface SkillsHandlerInterface {
    createSkill(request: CreateSkillRequest): Promise<{
        modalOpened: boolean;
    }>;
    updateSkill(request: UpdateSkillRequest): Promise<{
        modalOpened: boolean;
    }>;
    showManageSkillsUi(): void;
    showBrowseSkillsUi(): void;
    getSkill(id: string): Promise<{
        skill: (Skill | null);
    }>;
    recordSkillsWebClientEvent(event: SkillsWebClientEvent): void;
}
export declare class SkillsHandlerRemote implements SkillsHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<SkillsHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<SkillsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | SkillsHandlerPendingReceiverEndpoint);
    createSkill(request: CreateSkillRequest): Promise<{
        modalOpened: boolean;
    }>;
    updateSkill(request: UpdateSkillRequest): Promise<{
        modalOpened: boolean;
    }>;
    showManageSkillsUi(): void;
    showBrowseSkillsUi(): void;
    getSkill(id: string): Promise<{
        skill: (Skill | null);
    }>;
    recordSkillsWebClientEvent(event: SkillsWebClientEvent): void;
}
/**
 * An object which receives request messages for the SkillsHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class SkillsHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<SkillsHandlerRemote, SkillsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SkillsHandlerRemote, SkillsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: SkillsHandlerInterface);
}
export declare class SkillsHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): SkillsHandlerRemote;
}
/**
 * An object which receives request messages for the SkillsHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class SkillsHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<SkillsHandlerRemote, SkillsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SkillsHandlerRemote, SkillsHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    createSkill: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(request: CreateSkillRequest) => any>;
    updateSkill: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(request: UpdateSkillRequest) => any>;
    showManageSkillsUi: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    showBrowseSkillsUi: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getSkill: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(id: string) => any>;
    recordSkillsWebClientEvent: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(event: SkillsWebClientEvent) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type SkillsClientPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<SkillsClientPendingReceiver>;
export declare class SkillsClientPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<SkillsClient> {
    handle: mojo.internal.interfaceSupport.Endpoint<SkillsClientPendingReceiver>;
    constructor(handle: MojoHandle | SkillsClientPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface SkillsClientInterface {
    notifySkillPreviewsChanged(skillPreviews: SkillPreview[]): void;
    notifyContextualSkillPreviewsChanged(skillPreviews: SkillPreview[]): void;
    notifySkillPreviewChanged(skillPreview: SkillPreview): void;
    notifySkillDeleted(skillId: string): void;
    notifySkillsEnabledChanged(enabled: boolean): void;
}
export declare class SkillsClientRemote implements SkillsClientInterface, mojo.internal.interfaceSupport.InterfaceRemote<SkillsClientPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<SkillsClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | SkillsClientPendingReceiverEndpoint);
    notifySkillPreviewsChanged(skillPreviews: SkillPreview[]): void;
    notifyContextualSkillPreviewsChanged(skillPreviews: SkillPreview[]): void;
    notifySkillPreviewChanged(skillPreview: SkillPreview): void;
    notifySkillDeleted(skillId: string): void;
    notifySkillsEnabledChanged(enabled: boolean): void;
}
/**
 * An object which receives request messages for the SkillsClient
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class SkillsClientReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<SkillsClientRemote, SkillsClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SkillsClientRemote, SkillsClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: SkillsClientInterface);
}
export declare class SkillsClient {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): SkillsClientRemote;
}
/**
 * An object which receives request messages for the SkillsClient
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class SkillsClientCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<SkillsClientRemote, SkillsClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<SkillsClientRemote, SkillsClientPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    notifySkillPreviewsChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(skillPreviews: SkillPreview[]) => any>;
    notifyContextualSkillPreviewsChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(skillPreviews: SkillPreview[]) => any>;
    notifySkillPreviewChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(skillPreview: SkillPreview) => any>;
    notifySkillDeleted: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(skillId: string) => any>;
    notifySkillsEnabledChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type WebClientHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<WebClientHandlerPendingReceiver>;
export declare class WebClientHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<WebClientHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<WebClientHandlerPendingReceiver>;
    constructor(handle: MojoHandle | WebClientHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface WebClientHandlerInterface {
    reportApiRequestCount(requestTypeId: number, event: GlicRequestEvent): void;
    reportApiRequestLatency(requestType: string, latency: mojoBase_mojom_TimeDelta): void;
    recordSparseValue(name: string, value: number): void;
    webClientCreated(webClient: WebClientRemote): Promise<{
        initialState: WebClientInitialState;
    }>;
    webClientInitialized(): void;
    webClientInitializeFailed(): void;
    createActorHandler(receiver: ActorHandlerPendingReceiver, client: ActorClientRemote): void;
    createExperimentalTriggeringClient(client: ExperimentalTriggeringClientRemote): void;
    createAnnotationHandler(receiver: AnnotationHandlerPendingReceiver): void;
    createSkillsHandler(receiver: SkillsHandlerPendingReceiver, client: SkillsClientRemote): void;
    createZeroStateSuggestionsHandler(receiver: ZeroStateSuggestionsHandlerPendingReceiver): void;
    createAiOverlayTools(receiver: aiOverlayDialog_mojom_AiOverlayToolsPendingReceiver): void;
    createTab(url: url_mojom_Url, createOptions: CreateTabOptions): Promise<{
        tabData: (TabData | null);
    }>;
    activateTabWithUrl(exactUrl: url_mojom_Url, options: (ActivateTabOptions | null)): Promise<{
        tabData: (TabData | null);
    }>;
    openLinkInPopup(url: url_mojom_Url, popupWidth: number, popupHeight: number): void;
    openGlicSettingsPage(options: OpenSettingsOptions): void;
    openPasswordManagerSettingsPage(): void;
    openContactInfoSettingsPage(): void;
    enableDragResize(enabled: boolean): void;
    closePanel(): void;
    closePanelAndShutdown(): void;
    attachPanel(): void;
    detachPanel(): void;
    onModeChange(newMode: WebClientMode): void;
    onMicrophoneStatusChange(status: MicrophoneStatus): void;
    showProfilePicker(): void;
    getModelQualityClientId(): Promise<{
        modelQualityClientId: string;
    }>;
    getContextFromFocusedTab(options: TabContextOptions): Promise<{
        result: GetContextResult;
    }>;
    getContextFromTab(tabId: number, options: TabContextOptions): Promise<{
        result: GetContextResult;
    }>;
    getImageBytesFromTab(tabId: number, documentId: string, domNodeId: number): Promise<{
        result: GetImageBytesResult;
    }>;
    setMaximumNumberOfPinnedTabs(requestedMax: number): Promise<{
        effectiveMax: number;
    }>;
    pinTabs(tabIds: number[], options: (PinTabsOptions | null)): Promise<{
        pinnedAll: boolean;
    }>;
    unpinTabs(tabIds: number[], options: (UnpinTabsOptions | null)): Promise<{
        unpinnedAll: boolean;
    }>;
    unpinAllTabs(options: (UnpinTabsOptions | null)): void;
    subscribeToPinCandidates(options: GetPinCandidatesOptions, observer: PinCandidatesObserverRemote): void;
    openPinnedTabPicker(options: (OpenPinnedTabPickerOptions | null)): Promise<void>;
    activateTab(taskId: number): void;
    resizeWidget(size: gfx_mojom_Size, duration: mojoBase_mojom_TimeDelta): Promise<void>;
    captureRegion(observer: CaptureRegionObserverRemote, params: (CaptureRegionParams | null)): void;
    deleteCapturedRegion(tabId: number, id: mojoBase_mojom_UnguessableToken): void;
    setAudioDucking(enable: boolean): Promise<{
        result: boolean;
    }>;
    setMinimumPanelSize(size: gfx_mojom_Size): void;
    setMicrophonePermissionState(enabled: boolean): Promise<void>;
    setLocationPermissionState(enabled: boolean): Promise<void>;
    setTabContextPermissionState(enabled: boolean): Promise<void>;
    setClosedCaptioningSetting(enabled: boolean): Promise<void>;
    setActuationOnWebSetting(enabled: boolean): Promise<void>;
    shouldAllowMediaPermissionRequest(): Promise<{
        isAllowed: boolean;
    }>;
    shouldAllowGeolocationPermissionRequest(): Promise<{
        isAllowed: boolean;
    }>;
    setContextAccessIndicator(enabled: boolean): void;
    getUserProfileInfo(): Promise<{
        profileInfo: (UserProfileInfo | null);
    }>;
    syncCookies(): Promise<{
        success: boolean;
    }>;
    clientErrorDialogStateChanged(shownDialogType: (ClientErrorDialogType | null)): void;
    reportClientTransientError(statusCode: mojoBase_mojom_AbslStatusCode): void;
    processCounterAbuseVerdict(tabId: number, verdict: (CounterAbuseVerdict | null)): void;
    onOptinImpression(): void;
    onUserInputSubmitted(mode: WebClientMode, promptType: PromptType): void;
    onContextUploadStarted(): void;
    onContextUploadCompleted(): void;
    onReaction(reactionType: MetricUserInputReactionType): void;
    onResponseStarted(): void;
    onResponseStopped(details: OnResponseStoppedDetails): void;
    onSessionTerminated(): void;
    onTurnCompleted(model: WebClientModel, duration: mojoBase_mojom_TimeDelta): void;
    onResponseRated(positive: boolean): void;
    onClosedCaptionsShown(): void;
    onActionSubmitted(isRetry: boolean): void;
    setSyntheticExperimentState(trialName: string, groupName: string): void;
    openOsPermissionSettingsMenu(type: contentSettings_mojom_ContentSettingsType): void;
    getOsMicrophonePermissionStatus(): Promise<{
        enabled: boolean;
    }>;
    getZeroStateSuggestionsForFocusedTab(isFirstRun: (boolean | null)): Promise<{
        suggestions: (ZeroStateSuggestions | null);
    }>;
    maybeRefreshUserStatus(): void;
    isDebuggerAttached(): Promise<{
        isAttachedToWebview: boolean;
    }>;
    subscribeToPageMetadata(tabId: number, names: string[]): Promise<{
        success: boolean;
    }>;
    switchConversation(info: ConversationInfo): Promise<{
        errorReason: (SwitchConversationErrorReason | null);
    }>;
    registerConversation(info: ConversationInfo): Promise<{
        errorReason: (RegisterConversationErrorReason | null);
    }>;
    setOnboardingCompleted(): void;
    subscribeToTabData(tabId: number, receiver: TabDataHandlerRemote): void;
    subscribeToTabFavicon(tabId: number, receiver: TabFaviconHandlerRemote): void;
    createGeminiEnterpriseHandler(receiver: glic_mojom_GeminiEnterpriseHandlerPendingReceiver): void;
    setClientStorageItem(key: string, value: (string | null)): Promise<void>;
    clearClientStorage(): Promise<void>;
    getSendTabToSelfDevices(): Promise<{
        devices: SendTabToSelfDevice[];
    }>;
}
export declare class WebClientHandlerRemote implements WebClientHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<WebClientHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<WebClientHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | WebClientHandlerPendingReceiverEndpoint);
    reportApiRequestCount(requestTypeId: number, event: GlicRequestEvent): void;
    reportApiRequestLatency(requestType: string, latency: mojoBase_mojom_TimeDelta): void;
    recordSparseValue(name: string, value: number): void;
    webClientCreated(webClient: WebClientRemote): Promise<{
        initialState: WebClientInitialState;
    }>;
    webClientInitialized(): void;
    webClientInitializeFailed(): void;
    createActorHandler(receiver: ActorHandlerPendingReceiver, client: ActorClientRemote): void;
    createExperimentalTriggeringClient(client: ExperimentalTriggeringClientRemote): void;
    createAnnotationHandler(receiver: AnnotationHandlerPendingReceiver): void;
    createSkillsHandler(receiver: SkillsHandlerPendingReceiver, client: SkillsClientRemote): void;
    createZeroStateSuggestionsHandler(receiver: ZeroStateSuggestionsHandlerPendingReceiver): void;
    createAiOverlayTools(receiver: aiOverlayDialog_mojom_AiOverlayToolsPendingReceiver): void;
    createTab(url: url_mojom_Url, createOptions: CreateTabOptions): Promise<{
        tabData: (TabData | null);
    }>;
    activateTabWithUrl(exactUrl: url_mojom_Url, options: (ActivateTabOptions | null)): Promise<{
        tabData: (TabData | null);
    }>;
    openLinkInPopup(url: url_mojom_Url, popupWidth: number, popupHeight: number): void;
    openGlicSettingsPage(options: OpenSettingsOptions): void;
    openPasswordManagerSettingsPage(): void;
    openContactInfoSettingsPage(): void;
    enableDragResize(enabled: boolean): void;
    closePanel(): void;
    closePanelAndShutdown(): void;
    attachPanel(): void;
    detachPanel(): void;
    onModeChange(newMode: WebClientMode): void;
    onMicrophoneStatusChange(status: MicrophoneStatus): void;
    showProfilePicker(): void;
    getModelQualityClientId(): Promise<{
        modelQualityClientId: string;
    }>;
    getContextFromFocusedTab(options: TabContextOptions): Promise<{
        result: GetContextResult;
    }>;
    getContextFromTab(tabId: number, options: TabContextOptions): Promise<{
        result: GetContextResult;
    }>;
    getImageBytesFromTab(tabId: number, documentId: string, domNodeId: number): Promise<{
        result: GetImageBytesResult;
    }>;
    setMaximumNumberOfPinnedTabs(requestedMax: number): Promise<{
        effectiveMax: number;
    }>;
    pinTabs(tabIds: number[], options: (PinTabsOptions | null)): Promise<{
        pinnedAll: boolean;
    }>;
    unpinTabs(tabIds: number[], options: (UnpinTabsOptions | null)): Promise<{
        unpinnedAll: boolean;
    }>;
    unpinAllTabs(options: (UnpinTabsOptions | null)): void;
    subscribeToPinCandidates(options: GetPinCandidatesOptions, observer: PinCandidatesObserverRemote): void;
    openPinnedTabPicker(options: (OpenPinnedTabPickerOptions | null)): Promise<void>;
    activateTab(taskId: number): void;
    resizeWidget(size: gfx_mojom_Size, duration: mojoBase_mojom_TimeDelta): Promise<void>;
    captureRegion(observer: CaptureRegionObserverRemote, params: (CaptureRegionParams | null)): void;
    deleteCapturedRegion(tabId: number, id: mojoBase_mojom_UnguessableToken): void;
    setAudioDucking(enable: boolean): Promise<{
        result: boolean;
    }>;
    setMinimumPanelSize(size: gfx_mojom_Size): void;
    setMicrophonePermissionState(enabled: boolean): Promise<void>;
    setLocationPermissionState(enabled: boolean): Promise<void>;
    setTabContextPermissionState(enabled: boolean): Promise<void>;
    setClosedCaptioningSetting(enabled: boolean): Promise<void>;
    setActuationOnWebSetting(enabled: boolean): Promise<void>;
    shouldAllowMediaPermissionRequest(): Promise<{
        isAllowed: boolean;
    }>;
    shouldAllowGeolocationPermissionRequest(): Promise<{
        isAllowed: boolean;
    }>;
    setContextAccessIndicator(enabled: boolean): void;
    getUserProfileInfo(): Promise<{
        profileInfo: (UserProfileInfo | null);
    }>;
    syncCookies(): Promise<{
        success: boolean;
    }>;
    clientErrorDialogStateChanged(shownDialogType: (ClientErrorDialogType | null)): void;
    reportClientTransientError(statusCode: mojoBase_mojom_AbslStatusCode): void;
    processCounterAbuseVerdict(tabId: number, verdict: (CounterAbuseVerdict | null)): void;
    onOptinImpression(): void;
    onUserInputSubmitted(mode: WebClientMode, promptType: PromptType): void;
    onContextUploadStarted(): void;
    onContextUploadCompleted(): void;
    onReaction(reactionType: MetricUserInputReactionType): void;
    onResponseStarted(): void;
    onResponseStopped(details: OnResponseStoppedDetails): void;
    onSessionTerminated(): void;
    onTurnCompleted(model: WebClientModel, duration: mojoBase_mojom_TimeDelta): void;
    onResponseRated(positive: boolean): void;
    onClosedCaptionsShown(): void;
    onActionSubmitted(isRetry: boolean): void;
    setSyntheticExperimentState(trialName: string, groupName: string): void;
    openOsPermissionSettingsMenu(type: contentSettings_mojom_ContentSettingsType): void;
    getOsMicrophonePermissionStatus(): Promise<{
        enabled: boolean;
    }>;
    getZeroStateSuggestionsForFocusedTab(isFirstRun: (boolean | null)): Promise<{
        suggestions: (ZeroStateSuggestions | null);
    }>;
    maybeRefreshUserStatus(): void;
    isDebuggerAttached(): Promise<{
        isAttachedToWebview: boolean;
    }>;
    subscribeToPageMetadata(tabId: number, names: string[]): Promise<{
        success: boolean;
    }>;
    switchConversation(info: ConversationInfo): Promise<{
        errorReason: (SwitchConversationErrorReason | null);
    }>;
    registerConversation(info: ConversationInfo): Promise<{
        errorReason: (RegisterConversationErrorReason | null);
    }>;
    setOnboardingCompleted(): void;
    subscribeToTabData(tabId: number, receiver: TabDataHandlerRemote): void;
    subscribeToTabFavicon(tabId: number, receiver: TabFaviconHandlerRemote): void;
    createGeminiEnterpriseHandler(receiver: glic_mojom_GeminiEnterpriseHandlerPendingReceiver): void;
    setClientStorageItem(key: string, value: (string | null)): Promise<void>;
    clearClientStorage(): Promise<void>;
    getSendTabToSelfDevices(): Promise<{
        devices: SendTabToSelfDevice[];
    }>;
}
/**
 * An object which receives request messages for the WebClientHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class WebClientHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<WebClientHandlerRemote, WebClientHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<WebClientHandlerRemote, WebClientHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: WebClientHandlerInterface);
}
export declare class WebClientHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): WebClientHandlerRemote;
}
/**
 * An object which receives request messages for the WebClientHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class WebClientHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<WebClientHandlerRemote, WebClientHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<WebClientHandlerRemote, WebClientHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    reportApiRequestCount: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(requestTypeId: number, event: GlicRequestEvent) => any>;
    reportApiRequestLatency: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(requestType: string, latency: mojoBase_mojom_TimeDelta) => any>;
    recordSparseValue: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(name: string, value: number) => any>;
    webClientCreated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(webClient: WebClientRemote) => any>;
    webClientInitialized: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    webClientInitializeFailed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    createActorHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(receiver: ActorHandlerPendingReceiver, client: ActorClientRemote) => any>;
    createExperimentalTriggeringClient: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(client: ExperimentalTriggeringClientRemote) => any>;
    createAnnotationHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(receiver: AnnotationHandlerPendingReceiver) => any>;
    createSkillsHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(receiver: SkillsHandlerPendingReceiver, client: SkillsClientRemote) => any>;
    createZeroStateSuggestionsHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(receiver: ZeroStateSuggestionsHandlerPendingReceiver) => any>;
    createAiOverlayTools: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(receiver: aiOverlayDialog_mojom_AiOverlayToolsPendingReceiver) => any>;
    createTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url, createOptions: CreateTabOptions) => any>;
    activateTabWithUrl: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(exactUrl: url_mojom_Url, options: (ActivateTabOptions | null)) => any>;
    openLinkInPopup: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(url: url_mojom_Url, popupWidth: number, popupHeight: number) => any>;
    openGlicSettingsPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(options: OpenSettingsOptions) => any>;
    openPasswordManagerSettingsPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    openContactInfoSettingsPage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    enableDragResize: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    closePanel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    closePanelAndShutdown: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    attachPanel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    detachPanel: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onModeChange: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(newMode: WebClientMode) => any>;
    onMicrophoneStatusChange: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(status: MicrophoneStatus) => any>;
    showProfilePicker: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getModelQualityClientId: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getContextFromFocusedTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(options: TabContextOptions) => any>;
    getContextFromTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number, options: TabContextOptions) => any>;
    getImageBytesFromTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number, documentId: string, domNodeId: number) => any>;
    setMaximumNumberOfPinnedTabs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(requestedMax: number) => any>;
    pinTabs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabIds: number[], options: (PinTabsOptions | null)) => any>;
    unpinTabs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabIds: number[], options: (UnpinTabsOptions | null)) => any>;
    unpinAllTabs: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(options: (UnpinTabsOptions | null)) => any>;
    subscribeToPinCandidates: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(options: GetPinCandidatesOptions, observer: PinCandidatesObserverRemote) => any>;
    openPinnedTabPicker: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(options: (OpenPinnedTabPickerOptions | null)) => any>;
    activateTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(taskId: number) => any>;
    resizeWidget: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(size: gfx_mojom_Size, duration: mojoBase_mojom_TimeDelta) => any>;
    captureRegion: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(observer: CaptureRegionObserverRemote, params: (CaptureRegionParams | null)) => any>;
    deleteCapturedRegion: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number, id: mojoBase_mojom_UnguessableToken) => any>;
    setAudioDucking: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enable: boolean) => any>;
    setMinimumPanelSize: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(size: gfx_mojom_Size) => any>;
    setMicrophonePermissionState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    setLocationPermissionState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    setTabContextPermissionState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    setClosedCaptioningSetting: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    setActuationOnWebSetting: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    shouldAllowMediaPermissionRequest: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    shouldAllowGeolocationPermissionRequest: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    setContextAccessIndicator: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    getUserProfileInfo: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    syncCookies: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    clientErrorDialogStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(shownDialogType: (ClientErrorDialogType | null)) => any>;
    reportClientTransientError: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(statusCode: mojoBase_mojom_AbslStatusCode) => any>;
    processCounterAbuseVerdict: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number, verdict: (CounterAbuseVerdict | null)) => any>;
    onOptinImpression: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onUserInputSubmitted: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(mode: WebClientMode, promptType: PromptType) => any>;
    onContextUploadStarted: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onContextUploadCompleted: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onReaction: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(reactionType: MetricUserInputReactionType) => any>;
    onResponseStarted: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onResponseStopped: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(details: OnResponseStoppedDetails) => any>;
    onSessionTerminated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onTurnCompleted: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(model: WebClientModel, duration: mojoBase_mojom_TimeDelta) => any>;
    onResponseRated: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(positive: boolean) => any>;
    onClosedCaptionsShown: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onActionSubmitted: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isRetry: boolean) => any>;
    setSyntheticExperimentState: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(trialName: string, groupName: string) => any>;
    openOsPermissionSettingsMenu: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(type: contentSettings_mojom_ContentSettingsType) => any>;
    getOsMicrophonePermissionStatus: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getZeroStateSuggestionsForFocusedTab: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(isFirstRun: (boolean | null)) => any>;
    maybeRefreshUserStatus: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    isDebuggerAttached: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    subscribeToPageMetadata: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number, names: string[]) => any>;
    switchConversation: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(info: ConversationInfo) => any>;
    registerConversation: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(info: ConversationInfo) => any>;
    setOnboardingCompleted: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    subscribeToTabData: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number, receiver: TabDataHandlerRemote) => any>;
    subscribeToTabFavicon: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number, receiver: TabFaviconHandlerRemote) => any>;
    createGeminiEnterpriseHandler: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(receiver: glic_mojom_GeminiEnterpriseHandlerPendingReceiver) => any>;
    setClientStorageItem: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(key: string, value: (string | null)) => any>;
    clearClientStorage: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    getSendTabToSelfDevices: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ZeroStateSuggestionsHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ZeroStateSuggestionsHandlerPendingReceiver>;
export declare class ZeroStateSuggestionsHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ZeroStateSuggestionsHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<ZeroStateSuggestionsHandlerPendingReceiver>;
    constructor(handle: MojoHandle | ZeroStateSuggestionsHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ZeroStateSuggestionsHandlerInterface {
    getZeroStateSuggestionsAndSubscribe(client: (ZeroStateSuggestionsClientRemote | null), options: ZeroStateSuggestionsOptions): Promise<{
        zeroStateSuggestions: (ZeroStateSuggestionsV2 | null);
    }>;
}
export declare class ZeroStateSuggestionsHandlerRemote implements ZeroStateSuggestionsHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<ZeroStateSuggestionsHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ZeroStateSuggestionsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ZeroStateSuggestionsHandlerPendingReceiverEndpoint);
    getZeroStateSuggestionsAndSubscribe(client: (ZeroStateSuggestionsClientRemote | null), options: ZeroStateSuggestionsOptions): Promise<{
        zeroStateSuggestions: (ZeroStateSuggestionsV2 | null);
    }>;
}
/**
 * An object which receives request messages for the ZeroStateSuggestionsHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ZeroStateSuggestionsHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ZeroStateSuggestionsHandlerRemote, ZeroStateSuggestionsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ZeroStateSuggestionsHandlerRemote, ZeroStateSuggestionsHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ZeroStateSuggestionsHandlerInterface);
}
export declare class ZeroStateSuggestionsHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ZeroStateSuggestionsHandlerRemote;
}
/**
 * An object which receives request messages for the ZeroStateSuggestionsHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ZeroStateSuggestionsHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ZeroStateSuggestionsHandlerRemote, ZeroStateSuggestionsHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ZeroStateSuggestionsHandlerRemote, ZeroStateSuggestionsHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    getZeroStateSuggestionsAndSubscribe: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(client: (ZeroStateSuggestionsClientRemote | null), options: ZeroStateSuggestionsOptions) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ZeroStateSuggestionsClientPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ZeroStateSuggestionsClientPendingReceiver>;
export declare class ZeroStateSuggestionsClientPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ZeroStateSuggestionsClient> {
    handle: mojo.internal.interfaceSupport.Endpoint<ZeroStateSuggestionsClientPendingReceiver>;
    constructor(handle: MojoHandle | ZeroStateSuggestionsClientPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ZeroStateSuggestionsClientInterface {
    notifyZeroStateSuggestionsChanged(suggestions: ZeroStateSuggestionsV2, options: ZeroStateSuggestionsOptions): void;
}
export declare class ZeroStateSuggestionsClientRemote implements ZeroStateSuggestionsClientInterface, mojo.internal.interfaceSupport.InterfaceRemote<ZeroStateSuggestionsClientPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ZeroStateSuggestionsClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ZeroStateSuggestionsClientPendingReceiverEndpoint);
    notifyZeroStateSuggestionsChanged(suggestions: ZeroStateSuggestionsV2, options: ZeroStateSuggestionsOptions): void;
}
/**
 * An object which receives request messages for the ZeroStateSuggestionsClient
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ZeroStateSuggestionsClientReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ZeroStateSuggestionsClientRemote, ZeroStateSuggestionsClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ZeroStateSuggestionsClientRemote, ZeroStateSuggestionsClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ZeroStateSuggestionsClientInterface);
}
export declare class ZeroStateSuggestionsClient {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ZeroStateSuggestionsClientRemote;
}
/**
 * An object which receives request messages for the ZeroStateSuggestionsClient
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ZeroStateSuggestionsClientCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ZeroStateSuggestionsClientRemote, ZeroStateSuggestionsClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ZeroStateSuggestionsClientRemote, ZeroStateSuggestionsClientPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    notifyZeroStateSuggestionsChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(suggestions: ZeroStateSuggestionsV2, options: ZeroStateSuggestionsOptions) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type TabDataHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<TabDataHandlerPendingReceiver>;
export declare class TabDataHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<TabDataHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<TabDataHandlerPendingReceiver>;
    constructor(handle: MojoHandle | TabDataHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface TabDataHandlerInterface {
    onTabDataChanged(tabData: TabData): void;
}
export declare class TabDataHandlerRemote implements TabDataHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<TabDataHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<TabDataHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | TabDataHandlerPendingReceiverEndpoint);
    onTabDataChanged(tabData: TabData): void;
}
/**
 * An object which receives request messages for the TabDataHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class TabDataHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<TabDataHandlerRemote, TabDataHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TabDataHandlerRemote, TabDataHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: TabDataHandlerInterface);
}
export declare class TabDataHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): TabDataHandlerRemote;
}
/**
 * An object which receives request messages for the TabDataHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class TabDataHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<TabDataHandlerRemote, TabDataHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TabDataHandlerRemote, TabDataHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onTabDataChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabData: TabData) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type TabFaviconHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<TabFaviconHandlerPendingReceiver>;
export declare class TabFaviconHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<TabFaviconHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<TabFaviconHandlerPendingReceiver>;
    constructor(handle: MojoHandle | TabFaviconHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface TabFaviconHandlerInterface {
    onTabFaviconChanged(favicon: (skia_mojom_BitmapN32 | null)): void;
}
export declare class TabFaviconHandlerRemote implements TabFaviconHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<TabFaviconHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<TabFaviconHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | TabFaviconHandlerPendingReceiverEndpoint);
    onTabFaviconChanged(favicon: (skia_mojom_BitmapN32 | null)): void;
}
/**
 * An object which receives request messages for the TabFaviconHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class TabFaviconHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<TabFaviconHandlerRemote, TabFaviconHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TabFaviconHandlerRemote, TabFaviconHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: TabFaviconHandlerInterface);
}
export declare class TabFaviconHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): TabFaviconHandlerRemote;
}
/**
 * An object which receives request messages for the TabFaviconHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class TabFaviconHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<TabFaviconHandlerRemote, TabFaviconHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<TabFaviconHandlerRemote, TabFaviconHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onTabFaviconChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(favicon: (skia_mojom_BitmapN32 | null)) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ExperimentalTriggeringUpdatesHandlerPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ExperimentalTriggeringUpdatesHandlerPendingReceiver>;
export declare class ExperimentalTriggeringUpdatesHandlerPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ExperimentalTriggeringUpdatesHandler> {
    handle: mojo.internal.interfaceSupport.Endpoint<ExperimentalTriggeringUpdatesHandlerPendingReceiver>;
    constructor(handle: MojoHandle | ExperimentalTriggeringUpdatesHandlerPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ExperimentalTriggeringUpdatesHandlerInterface {
    onUpdate(update: (ExperimentalTriggeringUpdate | null), observation: SubscriberObservationType): void;
}
export declare class ExperimentalTriggeringUpdatesHandlerRemote implements ExperimentalTriggeringUpdatesHandlerInterface, mojo.internal.interfaceSupport.InterfaceRemote<ExperimentalTriggeringUpdatesHandlerPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ExperimentalTriggeringUpdatesHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ExperimentalTriggeringUpdatesHandlerPendingReceiverEndpoint);
    onUpdate(update: (ExperimentalTriggeringUpdate | null), observation: SubscriberObservationType): void;
}
/**
 * An object which receives request messages for the ExperimentalTriggeringUpdatesHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ExperimentalTriggeringUpdatesHandlerReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ExperimentalTriggeringUpdatesHandlerRemote, ExperimentalTriggeringUpdatesHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ExperimentalTriggeringUpdatesHandlerRemote, ExperimentalTriggeringUpdatesHandlerPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ExperimentalTriggeringUpdatesHandlerInterface);
}
export declare class ExperimentalTriggeringUpdatesHandler {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ExperimentalTriggeringUpdatesHandlerRemote;
}
/**
 * An object which receives request messages for the ExperimentalTriggeringUpdatesHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ExperimentalTriggeringUpdatesHandlerCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ExperimentalTriggeringUpdatesHandlerRemote, ExperimentalTriggeringUpdatesHandlerPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ExperimentalTriggeringUpdatesHandlerRemote, ExperimentalTriggeringUpdatesHandlerPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onUpdate: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(update: (ExperimentalTriggeringUpdate | null), observation: SubscriberObservationType) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type ExperimentalTriggeringClientPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<ExperimentalTriggeringClientPendingReceiver>;
export declare class ExperimentalTriggeringClientPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<ExperimentalTriggeringClient> {
    handle: mojo.internal.interfaceSupport.Endpoint<ExperimentalTriggeringClientPendingReceiver>;
    constructor(handle: MojoHandle | ExperimentalTriggeringClientPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface ExperimentalTriggeringClientInterface {
    uploadEncryptedScreenshot(screenshot: Screenshot): Promise<{
        fileToken: (string | null);
    }>;
    getExperimentalTriggeringUpdates(handler: ExperimentalTriggeringUpdatesHandlerRemote): Promise<{
        success: boolean;
    }>;
    submitExperimentalTriggeringConfirmationResponse(response: number[]): Promise<{
        accepted: boolean;
    }>;
}
export declare class ExperimentalTriggeringClientRemote implements ExperimentalTriggeringClientInterface, mojo.internal.interfaceSupport.InterfaceRemote<ExperimentalTriggeringClientPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<ExperimentalTriggeringClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | ExperimentalTriggeringClientPendingReceiverEndpoint);
    uploadEncryptedScreenshot(screenshot: Screenshot): Promise<{
        fileToken: (string | null);
    }>;
    getExperimentalTriggeringUpdates(handler: ExperimentalTriggeringUpdatesHandlerRemote): Promise<{
        success: boolean;
    }>;
    submitExperimentalTriggeringConfirmationResponse(response: number[]): Promise<{
        accepted: boolean;
    }>;
}
/**
 * An object which receives request messages for the ExperimentalTriggeringClient
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class ExperimentalTriggeringClientReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<ExperimentalTriggeringClientRemote, ExperimentalTriggeringClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ExperimentalTriggeringClientRemote, ExperimentalTriggeringClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: ExperimentalTriggeringClientInterface);
}
export declare class ExperimentalTriggeringClient {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): ExperimentalTriggeringClientRemote;
}
/**
 * An object which receives request messages for the ExperimentalTriggeringClient
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class ExperimentalTriggeringClientCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<ExperimentalTriggeringClientRemote, ExperimentalTriggeringClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<ExperimentalTriggeringClientRemote, ExperimentalTriggeringClientPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    uploadEncryptedScreenshot: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(screenshot: Screenshot) => any>;
    getExperimentalTriggeringUpdates: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(handler: ExperimentalTriggeringUpdatesHandlerRemote) => any>;
    submitExperimentalTriggeringConfirmationResponse: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(response: number[]) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type WebClientPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<WebClientPendingReceiver>;
export declare class WebClientPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<WebClient> {
    handle: mojo.internal.interfaceSupport.Endpoint<WebClientPendingReceiver>;
    constructor(handle: MojoHandle | WebClientPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface WebClientInterface {
    checkResponsive(): Promise<void>;
    notifyPanelWillOpen(panelOpeningData: PanelOpeningData): Promise<{
        openPanelInfo: OpenPanelInfo;
    }>;
    notifyPanelWasClosed(): Promise<void>;
    notifyPanelStateChange(panelState: PanelState): void;
    notifyPanelActiveChange(panelActive: boolean): void;
    notifyPanelCanAttachChange(canAttach: boolean): void;
    notifyMicrophonePermissionStateChanged(enabled: boolean): void;
    notifyFileUploadStateChanged(state: FileUploadPolicyState): void;
    stopMicrophone(): Promise<void>;
    notifyLocationPermissionStateChanged(enabled: boolean): void;
    notifyTabContextPermissionStateChanged(enabled: boolean): void;
    notifyOsLocationPermissionStateChanged(enabled: boolean): void;
    notifyFocusedTabChanged(focusedTabData: FocusedTabData): void;
    notifyManualResizeChanged(resizing: boolean): void;
    notifyOsHotkeyStateChanged(hotkey: string): void;
    notifyBrowserIsOpenChanged(browserIsOpen: boolean): void;
    notifyZoomLevelChanged(zoomFactor: number): void;
    notifyInstanceActivationChanged(instanceActive: boolean): void;
    notifyClosedCaptioningSettingChanged(enabled: boolean): void;
    notifyPinnedTabsChanged(tabData: TabData[]): void;
    notifyPinnedTabDataChanged(tabData: TabData): void;
    notifyPageMetadataChanged(tabId: number, metadata: (blink_mojom_PageMetadata | null)): void;
    notifyDefaultTabContextPermissionStateChanged(enabled: boolean): void;
    notifyAdditionalContext(context: AdditionalContext): void;
    notifyActuationOnWebSettingChanged(enabled: boolean): void;
    notifyActOnWebCapabilityChanged(canActOnWeb: boolean): void;
    notifyOnboardingCompletedChanged(completed: boolean): void;
    notifyGeminiEnterpriseSettingsChanged(settings: (GeminiEnterpriseSettings | null)): void;
    notifyActorTaskListRowClicked(taskId: number): void;
    invoke(options: InvokeOptions): Promise<void>;
    notifyClientStorageItemChanged(key: string, value: (string | null)): void;
    notifyClientStorageCleared(): void;
}
export declare class WebClientRemote implements WebClientInterface, mojo.internal.interfaceSupport.InterfaceRemote<WebClientPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<WebClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | WebClientPendingReceiverEndpoint);
    checkResponsive(): Promise<void>;
    notifyPanelWillOpen(panelOpeningData: PanelOpeningData): Promise<{
        openPanelInfo: OpenPanelInfo;
    }>;
    notifyPanelWasClosed(): Promise<void>;
    notifyPanelStateChange(panelState: PanelState): void;
    notifyPanelActiveChange(panelActive: boolean): void;
    notifyPanelCanAttachChange(canAttach: boolean): void;
    notifyMicrophonePermissionStateChanged(enabled: boolean): void;
    notifyFileUploadStateChanged(state: FileUploadPolicyState): void;
    stopMicrophone(): Promise<void>;
    notifyLocationPermissionStateChanged(enabled: boolean): void;
    notifyTabContextPermissionStateChanged(enabled: boolean): void;
    notifyOsLocationPermissionStateChanged(enabled: boolean): void;
    notifyFocusedTabChanged(focusedTabData: FocusedTabData): void;
    notifyManualResizeChanged(resizing: boolean): void;
    notifyOsHotkeyStateChanged(hotkey: string): void;
    notifyBrowserIsOpenChanged(browserIsOpen: boolean): void;
    notifyZoomLevelChanged(zoomFactor: number): void;
    notifyInstanceActivationChanged(instanceActive: boolean): void;
    notifyClosedCaptioningSettingChanged(enabled: boolean): void;
    notifyPinnedTabsChanged(tabData: TabData[]): void;
    notifyPinnedTabDataChanged(tabData: TabData): void;
    notifyPageMetadataChanged(tabId: number, metadata: (blink_mojom_PageMetadata | null)): void;
    notifyDefaultTabContextPermissionStateChanged(enabled: boolean): void;
    notifyAdditionalContext(context: AdditionalContext): void;
    notifyActuationOnWebSettingChanged(enabled: boolean): void;
    notifyActOnWebCapabilityChanged(canActOnWeb: boolean): void;
    notifyOnboardingCompletedChanged(completed: boolean): void;
    notifyGeminiEnterpriseSettingsChanged(settings: (GeminiEnterpriseSettings | null)): void;
    notifyActorTaskListRowClicked(taskId: number): void;
    invoke(options: InvokeOptions): Promise<void>;
    notifyClientStorageItemChanged(key: string, value: (string | null)): void;
    notifyClientStorageCleared(): void;
}
/**
 * An object which receives request messages for the WebClient
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class WebClientReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<WebClientRemote, WebClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<WebClientRemote, WebClientPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: WebClientInterface);
}
export declare class WebClient {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): WebClientRemote;
}
/**
 * An object which receives request messages for the WebClient
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class WebClientCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<WebClientRemote, WebClientPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<WebClientRemote, WebClientPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    checkResponsive: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    notifyPanelWillOpen: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(panelOpeningData: PanelOpeningData) => any>;
    notifyPanelWasClosed: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    notifyPanelStateChange: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(panelState: PanelState) => any>;
    notifyPanelActiveChange: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(panelActive: boolean) => any>;
    notifyPanelCanAttachChange: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(canAttach: boolean) => any>;
    notifyMicrophonePermissionStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    notifyFileUploadStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(state: FileUploadPolicyState) => any>;
    stopMicrophone: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    notifyLocationPermissionStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    notifyTabContextPermissionStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    notifyOsLocationPermissionStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    notifyFocusedTabChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(focusedTabData: FocusedTabData) => any>;
    notifyManualResizeChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(resizing: boolean) => any>;
    notifyOsHotkeyStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(hotkey: string) => any>;
    notifyBrowserIsOpenChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(browserIsOpen: boolean) => any>;
    notifyZoomLevelChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(zoomFactor: number) => any>;
    notifyInstanceActivationChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(instanceActive: boolean) => any>;
    notifyClosedCaptioningSettingChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    notifyPinnedTabsChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabData: TabData[]) => any>;
    notifyPinnedTabDataChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabData: TabData) => any>;
    notifyPageMetadataChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(tabId: number, metadata: (blink_mojom_PageMetadata | null)) => any>;
    notifyDefaultTabContextPermissionStateChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    notifyAdditionalContext: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(context: AdditionalContext) => any>;
    notifyActuationOnWebSettingChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(enabled: boolean) => any>;
    notifyActOnWebCapabilityChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(canActOnWeb: boolean) => any>;
    notifyOnboardingCompletedChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(completed: boolean) => any>;
    notifyGeminiEnterpriseSettingsChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(settings: (GeminiEnterpriseSettings | null)) => any>;
    notifyActorTaskListRowClicked: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(taskId: number) => any>;
    invoke: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(options: InvokeOptions) => any>;
    notifyClientStorageItemChanged: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(key: string, value: (string | null)) => any>;
    notifyClientStorageCleared: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<() => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export type CaptureRegionObserverPendingReceiverEndpoint = mojo.internal.interfaceSupport.Endpoint<CaptureRegionObserverPendingReceiver>;
export declare class CaptureRegionObserverPendingReceiver implements mojo.internal.interfaceSupport.PendingReceiver<CaptureRegionObserver> {
    handle: mojo.internal.interfaceSupport.Endpoint<CaptureRegionObserverPendingReceiver>;
    constructor(handle: MojoHandle | CaptureRegionObserverPendingReceiverEndpoint);
    bindInBrowser(scope?: string): void;
}
export interface CaptureRegionObserverInterface {
    onUpdate(result: (CaptureRegionResult | null), reason: (CaptureRegionErrorReason | null)): void;
}
export declare class CaptureRegionObserverRemote implements CaptureRegionObserverInterface, mojo.internal.interfaceSupport.InterfaceRemote<CaptureRegionObserverPendingReceiver> {
    private proxy;
    $: mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<CaptureRegionObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(handle?: MojoHandle | CaptureRegionObserverPendingReceiverEndpoint);
    onUpdate(result: (CaptureRegionResult | null), reason: (CaptureRegionErrorReason | null)): void;
}
/**
 * An object which receives request messages for the CaptureRegionObserver
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export declare class CaptureRegionObserverReceiver implements mojo.internal.interfaceSupport.InterfaceReceiver<CaptureRegionObserverRemote, CaptureRegionObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CaptureRegionObserverRemote, CaptureRegionObserverPendingReceiver>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor(impl: CaptureRegionObserverInterface);
}
export declare class CaptureRegionObserver {
    static get $interfaceName(): string;
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote(): CaptureRegionObserverRemote;
}
/**
 * An object which receives request messages for the CaptureRegionObserver
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export declare class CaptureRegionObserverCallbackRouter implements mojo.internal.interfaceSupport.InterfaceCallbackRouter<CaptureRegionObserverRemote, CaptureRegionObserverPendingReceiver> {
    private helper_internal_;
    $: mojo.internal.interfaceSupport.InterfaceReceiverHelper<CaptureRegionObserverRemote, CaptureRegionObserverPendingReceiver>;
    router_: mojo.internal.interfaceSupport.CallbackRouter;
    onUpdate: mojo.internal.interfaceSupport.InterfaceCallbackReceiver<(result: (CaptureRegionResult | null), reason: (CaptureRegionErrorReason | null)) => any>;
    onConnectionError: mojo.internal.interfaceSupport.ConnectionErrorEventRouter;
    constructor();
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id: number): boolean;
}
export declare const GeminiEnterpriseSettingsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ZssConfigSpec: {
    $: mojo.internal.MojomType;
};
export declare const GetContextResultWithActionResultCodeSpec: {
    $: mojo.internal.MojomType;
};
export declare const UserProfileInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const SafeBrowsingVerdictSpec: {
    $: mojo.internal.MojomType;
};
export declare const CounterAbuseVerdictSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientInitialStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const ScreenshotCollectionOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabContextOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GetPinCandidatesOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ScrollToParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ScrollToTextSelectorSpec: {
    $: mojo.internal.MojomType;
};
export declare const ScrollToTextFragmentSelectorSpec: {
    $: mojo.internal.MojomType;
};
export declare const ScrollToNodeSelectorSpec: {
    $: mojo.internal.MojomType;
};
export declare const SuggestionContentSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillPreviewSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillSpec: {
    $: mojo.internal.MojomType;
};
export declare const CreateSkillRequestSpec: {
    $: mojo.internal.MojomType;
};
export declare const UpdateSkillRequestSpec: {
    $: mojo.internal.MojomType;
};
export declare const ZeroStateSuggestionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ZeroStateSuggestionsV2Spec: {
    $: mojo.internal.MojomType;
};
export declare const ZeroStateSuggestionsOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PinCandidateSpec: {
    $: mojo.internal.MojomType;
};
export declare const PinTabsOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UnpinTabsOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const OpenPinnedTabPickerOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CreateActorTabOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CaptureRegionParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActivateTabOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CreateTabOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SendTabToSelfDeviceSpec: {
    $: mojo.internal.MojomType;
};
export declare const ConversationInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const PanelOpeningDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const PanelStateSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsPayloadSpec: {
    $: mojo.internal.MojomType;
};
export declare const UniversalCartPayloadSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExperimentalTriggeringPayloadSpec: {
    $: mojo.internal.MojomType;
};
export declare const InvokeOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const OnResponseStoppedDetailsSpec: {
    $: mojo.internal.MojomType;
};
export declare const OpenPanelInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContextDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const ParentConversationMetadataSpec: {
    $: mojo.internal.MojomType;
};
export declare const AdditionalContextSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExperimentalTriggeringUpdateSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabContextResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebPageDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const DocumentDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const PdfDocumentDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const NoFocusedTabDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const AnnotatedPageDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const ImageOriginAnnotationsSpec: {
    $: mojo.internal.MojomType;
};
export declare const JournalSpec: {
    $: mojo.internal.MojomType;
};
export declare const PendingCapturedRegionSpec: {
    $: mojo.internal.MojomType;
};
export declare const CaptureRegionResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ScreenshotSpec: {
    $: mojo.internal.MojomType;
};
export declare const ImageInfoSpec: {
    $: mojo.internal.MojomType;
};
export declare const ImageBytesResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const OpenSettingsOptionsSpec: {
    $: mojo.internal.MojomType;
};
export declare const PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorClient_RequestToShowCredentialSelectionDialog_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorClient_RequestToShowCredentialSelectionDialog_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorClient_RequestToShowUserConfirmationDialog_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorClient_RequestToShowUserConfirmationDialog_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorClient_RequestToConfirmNavigation_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorClient_RequestToConfirmNavigation_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorClient_NotifyActorTaskStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorClient_RequestToShowGmailOtpOptInDialog_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorClient_RequestToShowGmailOtpOptInDialog_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorClient_RequestToShowGmailOtpConfirmationDialog_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorClient_RequestToShowGmailOtpConfirmationDialog_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_AutofillSuggestionDialogOnFormPresented_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_AutofillSuggestionDialogOnFormPreviewChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_AutofillSuggestionDialogOnFormConfirmed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_GetContextForActorFromTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_GetContextForActorFromTab_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_CreateTask_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_CreateTask_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_PerformActions_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_PerformActions_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_CancelActions_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_CancelActions_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_StopActorTask_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_PauseActorTask_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_ResumeActorTask_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_ResumeActorTask_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_InterruptActorTask_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_UninterruptActorTask_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_UpdateActorTaskStepProgress_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_CreateActorTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_CreateActorTab_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_LogBeginAsyncEvent_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_LogEndAsyncEvent_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_LogInstantEvent_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_JournalClear_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_JournalSnapshot_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_JournalSnapshot_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_JournalStart_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_JournalStop_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_JournalRecordFeedback_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AnnotationHandler_ScrollTo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AnnotationHandler_ScrollTo_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const AnnotationHandler_DropScrollToHighlight_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsHandler_CreateSkill_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsHandler_CreateSkill_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsHandler_UpdateSkill_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsHandler_UpdateSkill_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsHandler_ShowManageSkillsUi_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsHandler_ShowBrowseSkillsUi_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsHandler_GetSkill_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsHandler_GetSkill_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsHandler_RecordSkillsWebClientEvent_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsClient_NotifySkillPreviewsChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsClient_NotifyContextualSkillPreviewsChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsClient_NotifySkillPreviewChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsClient_NotifySkillDeleted_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const SkillsClient_NotifySkillsEnabledChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_ReportApiRequestCount_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_ReportApiRequestLatency_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_RecordSparseValue_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_WebClientCreated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_WebClientCreated_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_WebClientInitialized_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_WebClientInitializeFailed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_CreateActorHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_CreateExperimentalTriggeringClient_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_CreateAnnotationHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_CreateSkillsHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_CreateZeroStateSuggestionsHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_CreateAiOverlayTools_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_CreateTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_CreateTab_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_ActivateTabWithUrl_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_ActivateTabWithUrl_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_OpenLinkInPopup_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_OpenGlicSettingsPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_OpenContactInfoSettingsPage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_EnableDragResize_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_ClosePanel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_ClosePanelAndShutdown_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_AttachPanel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_DetachPanel_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_OnModeChange_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_OnMicrophoneStatusChange_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_ShowProfilePicker_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_GetModelQualityClientId_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_GetModelQualityClientId_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_GetContextFromFocusedTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_GetContextFromFocusedTab_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_GetContextFromTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_GetContextFromTab_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_GetImageBytesFromTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_GetImageBytesFromTab_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_PinTabs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_PinTabs_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_UnpinTabs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_UnpinTabs_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_UnpinAllTabs_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SubscribeToPinCandidates_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_OpenPinnedTabPicker_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_OpenPinnedTabPicker_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_ActivateTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_ResizeWidget_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_ResizeWidget_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_CaptureRegion_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_DeleteCapturedRegion_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SetAudioDucking_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SetAudioDucking_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SetMinimumPanelSize_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SetMicrophonePermissionState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SetMicrophonePermissionState_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SetLocationPermissionState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SetLocationPermissionState_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SetTabContextPermissionState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SetTabContextPermissionState_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SetClosedCaptioningSetting_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SetClosedCaptioningSetting_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SetActuationOnWebSetting_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SetActuationOnWebSetting_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SetContextAccessIndicator_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_GetUserProfileInfo_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_GetUserProfileInfo_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SyncCookies_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SyncCookies_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_ClientErrorDialogStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_ReportClientTransientError_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_ProcessCounterAbuseVerdict_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_OnOptinImpression_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_OnUserInputSubmitted_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_OnContextUploadStarted_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_OnContextUploadCompleted_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_OnReaction_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_OnResponseStarted_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_OnResponseStopped_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_OnSessionTerminated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_OnTurnCompleted_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_OnResponseRated_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_OnClosedCaptionsShown_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_OnActionSubmitted_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SetSyntheticExperimentState_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_MaybeRefreshUserStatus_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_IsDebuggerAttached_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_IsDebuggerAttached_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SubscribeToPageMetadata_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SubscribeToPageMetadata_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SwitchConversation_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SwitchConversation_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_RegisterConversation_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_RegisterConversation_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SetOnboardingCompleted_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SubscribeToTabData_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SubscribeToTabFavicon_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_CreateGeminiEnterpriseHandler_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SetClientStorageItem_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_SetClientStorageItem_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_ClearClientStorage_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_ClearClientStorage_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_GetSendTabToSelfDevices_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClientHandler_GetSendTabToSelfDevices_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ZeroStateSuggestionsHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ZeroStateSuggestionsHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ZeroStateSuggestionsClient_NotifyZeroStateSuggestionsChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabDataHandler_OnTabDataChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabFaviconHandler_OnTabFaviconChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExperimentalTriggeringUpdatesHandler_OnUpdate_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExperimentalTriggeringClient_UploadEncryptedScreenshot_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExperimentalTriggeringClient_UploadEncryptedScreenshot_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExperimentalTriggeringClient_GetExperimentalTriggeringUpdates_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExperimentalTriggeringClient_GetExperimentalTriggeringUpdates_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExperimentalTriggeringClient_SubmitExperimentalTriggeringConfirmationResponse_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const ExperimentalTriggeringClient_SubmitExperimentalTriggeringConfirmationResponse_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_CheckResponsive_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_CheckResponsive_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyPanelWillOpen_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyPanelWillOpen_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyPanelWasClosed_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyPanelWasClosed_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyPanelStateChange_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyPanelActiveChange_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyPanelCanAttachChange_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyFileUploadStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_StopMicrophone_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_StopMicrophone_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyLocationPermissionStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyFocusedTabChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyManualResizeChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyOsHotkeyStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyBrowserIsOpenChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyZoomLevelChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyInstanceActivationChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyPinnedTabsChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyPinnedTabDataChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyPageMetadataChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyAdditionalContext_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyOnboardingCompletedChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyGeminiEnterpriseSettingsChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyActorTaskListRowClicked_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_Invoke_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_Invoke_ResponseParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyClientStorageItemChanged_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const WebClient_NotifyClientStorageCleared_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const CaptureRegionObserver_OnUpdate_ParamsSpec: {
    $: mojo.internal.MojomType;
};
export declare const GetContextResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ScrollToSelectorSpec: {
    $: mojo.internal.MojomType;
};
export declare const InvocationPayloadSpec: {
    $: mojo.internal.MojomType;
};
export declare const AdditionalContextPartSpec: {
    $: mojo.internal.MojomType;
};
export declare const FocusedTabDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const CapturedRegionSpec: {
    $: mojo.internal.MojomType;
};
export declare const GetImageBytesResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_CreateTask_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare const ActorHandler_PerformActions_ResponseParam_ResultSpec: {
    $: mojo.internal.MojomType;
};
export declare interface GeminiEnterpriseSettingsMojoType {
    projectId: string;
    appId: string;
    location: string;
}
export type GeminiEnterpriseSettings = GeminiEnterpriseSettingsMojoType;
export declare interface ZssConfigMojoType {
    additionalContent: (string | null);
}
export type ZssConfig = ZssConfigMojoType;
export declare interface GetContextResultWithActionResultCodeMojoType {
    getContextResult: GetContextResult;
    actionResult: (number | null);
}
export type GetContextResultWithActionResultCode = GetContextResultWithActionResultCodeMojoType;
export declare interface UserProfileInfoMojoType {
    avatarIcon: (skia_mojom_BitmapN32 | null);
    displayName: string;
    givenName: string;
    localProfileName: string;
    email: string;
    isManaged: boolean;
    hasAvatarRing: boolean;
}
export type UserProfileInfo = UserProfileInfoMojoType;
export declare interface SafeBrowsingVerdictMojoType {
    url: string;
    threatType: SbThreatType;
    showInterstitial: boolean;
}
export type SafeBrowsingVerdict = SafeBrowsingVerdictMojoType;
export declare interface CounterAbuseVerdictMojoType {
    sbVerdictResult: SafeBrowsingVerdict;
}
export type CounterAbuseVerdict = CounterAbuseVerdictMojoType;
export declare interface WebClientInitialStateMojoType {
    panelState: PanelState;
    focusedTabData: FocusedTabData;
    microphonePermissionEnabled: boolean;
    locationPermissionEnabled: boolean;
    tabContextPermissionEnabled: boolean;
    osLocationPermissionEnabled: boolean;
    canAttach: boolean;
    panelIsActive: boolean;
    browserIsOpen: boolean;
    instanceIsActive: boolean;
    enableZeroStateSuggestions: boolean;
    enableCachedGetUserProfileInfo: boolean;
    enableActInFocusedTab: boolean;
    enableScrollTo: boolean;
    enableDefaultTabContextSettingFeature: boolean;
    defaultTabContextSettingEnabled: boolean;
    closedCaptioningSettingEnabled: boolean;
    enableMaybeRefreshUserStatus: boolean;
    enableMultiTab: boolean;
    enableGetContextActor: boolean;
    enableGetPageMetadata: boolean;
    enableCaptureRegion: boolean;
    enableWebActuationSettingFeature: boolean;
    actuationOnWebSettingEnabled: boolean;
    canActOnWeb: boolean;
    enableActivateTab: boolean;
    enableGetTabById: boolean;
    enableOpenPasswordManagerSettingsPage: boolean;
    enableOpenContactInfoSettingsPage: boolean;
    enableTrustFirstOnboarding: boolean;
    onboardingCompleted: boolean;
    enableSkills: boolean;
    enableGetTabFaviconById: boolean;
    enableProcessCounterAbuseVerdict: boolean;
    platform: glic_mojom_Platform;
    zoomFactor: number;
    hotkey: string;
    chromeVersion: mojoBase_mojom_Version;
    formFactor: glic_mojom_FormFactor;
    enableGmailOtpOptIn: boolean;
    enableGmailOtpConfirmation: boolean;
    enableClientStorage: boolean;
    hostCapabilities: HostCapability[];
    geminiEnterpriseSettings: (GeminiEnterpriseSettings | null);
    fileUploadPolicyState: FileUploadPolicyState;
    clientStorage: {
        [key: string]: string;
    };
}
export type WebClientInitialState = WebClientInitialStateMojoType;
export declare interface ScreenshotCollectionOptionsMojoType {
    maxWidth: number;
    maxHeight: number;
    screenshotImageFormat: ScreenshotImageFormat;
    screenshotCompressionQuality: ScreenshotCompressionQuality;
}
export type ScreenshotCollectionOptions = ScreenshotCollectionOptionsMojoType;
export declare interface TabContextOptionsMojoType {
    innerText: boolean;
    viewportScreenshot: boolean;
    annotatedPageContent: boolean;
    pdfData: boolean;
    innerTextBytesLimit: number;
    maxMetaTags: number;
    pdfSizeLimit: number;
    annotatedPageContentMode: number;
    screenshotCollectionOptions: ScreenshotCollectionOptions;
}
export type TabContextOptions = TabContextOptionsMojoType;
export declare interface GetPinCandidatesOptionsMojoType {
    maxCandidates: number;
    query: (string | null);
}
export type GetPinCandidatesOptions = GetPinCandidatesOptionsMojoType;
export declare interface ScrollToParamsMojoType {
    selector: ScrollToSelector;
    highlight: boolean;
    documentId: (mojoBase_mojom_UnguessableToken | null);
    url: (url_mojom_Url | null);
}
export type ScrollToParams = ScrollToParamsMojoType;
export declare interface ScrollToTextSelectorMojoType {
    text: string;
    searchRangeStartNodeId: (number | null);
}
export type ScrollToTextSelector = ScrollToTextSelectorMojoType;
export declare interface ScrollToTextFragmentSelectorMojoType {
    textStart: string;
    textEnd: string;
    searchRangeStartNodeId: (number | null);
}
export type ScrollToTextFragmentSelector = ScrollToTextFragmentSelectorMojoType;
export declare interface ScrollToNodeSelectorMojoType {
    nodeId: number;
}
export type ScrollToNodeSelector = ScrollToNodeSelectorMojoType;
export declare interface SuggestionContentMojoType {
    suggestion: string;
}
export type SuggestionContent = SuggestionContentMojoType;
export declare interface SkillPreviewMojoType {
    id: string;
    name: string;
    icon: string;
    source: SkillSource;
    enabled: boolean;
    description: string;
    curatedBy: (string | null);
    imageUrl: (url_mojom_Url | null);
    category: (string | null);
    creationTime: (mojoBase_mojom_Time | null);
}
export type SkillPreview = SkillPreviewMojoType;
export declare interface SkillMojoType {
    preview: SkillPreview;
    prompt: string;
    sourceSkillId: (string | null);
}
export type Skill = SkillMojoType;
export declare interface CreateSkillRequestMojoType {
    id: string;
    name: string;
    icon: string;
    source: SkillSource;
    prompt: string;
    description: string;
}
export type CreateSkillRequest = CreateSkillRequestMojoType;
export declare interface UpdateSkillRequestMojoType {
    id: string;
}
export type UpdateSkillRequest = UpdateSkillRequestMojoType;
export declare interface ZeroStateSuggestionsMojoType {
    suggestions: SuggestionContent[];
    tabId: number;
    url: url_mojom_Url;
}
export type ZeroStateSuggestions = ZeroStateSuggestionsMojoType;
export declare interface ZeroStateSuggestionsV2MojoType {
    suggestions: SuggestionContent[];
    isPending: boolean;
    invocationSource: glic_mojom_InvocationSource;
}
export type ZeroStateSuggestionsV2 = ZeroStateSuggestionsV2MojoType;
export declare interface ZeroStateSuggestionsOptionsMojoType {
    isFirstRun: boolean;
    supportedTools: string[];
}
export type ZeroStateSuggestionsOptions = ZeroStateSuggestionsOptionsMojoType;
export declare interface PinCandidateMojoType {
    tabData: TabData;
}
export type PinCandidate = PinCandidateMojoType;
export declare interface PinTabsOptionsMojoType {
    pinTrigger: PinTrigger;
}
export type PinTabsOptions = PinTabsOptionsMojoType;
export declare interface UnpinTabsOptionsMojoType {
    unpinTrigger: UnpinTrigger;
}
export type UnpinTabsOptions = UnpinTabsOptionsMojoType;
export declare interface OpenPinnedTabPickerOptionsMojoType {
}
export type OpenPinnedTabPickerOptions = OpenPinnedTabPickerOptionsMojoType;
export declare interface CreateActorTabOptionsMojoType {
    initiatorTabId: (number | null);
    initiatorWindowId: (number | null);
    openInBackground: boolean;
}
export type CreateActorTabOptions = CreateActorTabOptionsMojoType;
export declare interface CaptureRegionParamsMojoType {
    tabId: number;
    options: TabContextOptions;
}
export type CaptureRegionParams = CaptureRegionParamsMojoType;
export declare interface ActivateTabOptionsMojoType {
    pattern: string;
    fallbackWindowId: (number | null);
}
export type ActivateTabOptions = ActivateTabOptionsMojoType;
export declare interface CreateTabOptionsMojoType {
    openInBackground: boolean;
    windowId: (number | null);
}
export type CreateTabOptions = CreateTabOptionsMojoType;
export declare interface SendTabToSelfDeviceMojoType {
    deviceGuid: string;
    deviceName: string;
    formFactor: glic_mojom_FormFactor;
    lastUpdatedTime: (mojoBase_mojom_Time | null);
}
export type SendTabToSelfDevice = SendTabToSelfDeviceMojoType;
export declare interface ConversationInfoMojoType {
    conversationId: string;
    conversationTitle: string;
    clientData: (mojoBase_mojom_ByteString | null);
    turnId: (string | null);
}
export type ConversationInfo = ConversationInfoMojoType;
export declare interface PanelOpeningDataMojoType {
    panelState: PanelState;
    invocationSource: glic_mojom_InvocationSource;
    autoSend: boolean;
    promptSuggestion: (string | null);
    skillToInvoke: (Skill | null);
    recentlyActiveConversations: (ConversationInfo[] | null);
    conversationInfo: ConversationInfo;
    freOverride: glic_mojom_FreOverride;
}
export type PanelOpeningData = PanelOpeningDataMojoType;
export declare interface PanelStateMojoType {
    kind: glic_mojom_PanelStateKind;
    windowId: (number | null);
}
export type PanelState = PanelStateMojoType;
export declare interface SkillsPayloadMojoType {
    skillId: string;
    skillName: string;
    skillIcon: string;
}
export type SkillsPayload = SkillsPayloadMojoType;
export declare interface UniversalCartPayloadMojoType {
    serializedMetadata: number[];
}
export type UniversalCartPayload = UniversalCartPayloadMojoType;
export declare interface ExperimentalTriggeringPayloadMojoType {
    paymentMetadata: number[];
}
export type ExperimentalTriggeringPayload = ExperimentalTriggeringPayloadMojoType;
export declare interface InvokeOptionsMojoType {
    invocationSource: glic_mojom_InvocationSource;
    autoSubmit: boolean;
    disableZeroStateSuggestions: boolean;
    actuationTabId: (number | null);
    prompts: (string[] | null);
    context: (AdditionalContext | null);
    featureMode: glic_mojom_FeatureMode;
    actuationTarget: glic_mojom_ActuationTarget;
    skillId: (string | null);
    zssConfig: (ZssConfig | null);
    payload: (InvocationPayload | null);
}
export type InvokeOptions = InvokeOptionsMojoType;
export declare interface OnResponseStoppedDetailsMojoType {
    cause: ResponseStopCause;
}
export type OnResponseStoppedDetails = OnResponseStoppedDetailsMojoType;
export declare interface OpenPanelInfoMojoType {
    webClientMode: WebClientMode;
    canUserResize: boolean;
    panelSize: (gfx_mojom_Size | null);
    resizeDuration: mojoBase_mojom_TimeDelta;
}
export type OpenPanelInfo = OpenPanelInfoMojoType;
export declare interface ContextDataMojoType {
    mimeType: string;
    data: mojoBase_mojom_BigBuffer;
    filename: (string | null);
}
export type ContextData = ContextDataMojoType;
export declare interface ParentConversationMetadataMojoType {
    conversationId: (string | null);
    conversationTitle: (string | null);
}
export type ParentConversationMetadata = ParentConversationMetadataMojoType;
export declare interface AdditionalContextMojoType {
    source: AdditionalContextSource;
    tabId: (number | null);
    name: (string | null);
    origin: (url_mojom_Origin | null);
    frameUrl: (url_mojom_Url | null);
    parts: AdditionalContextPart[];
}
export type AdditionalContext = AdditionalContextMojoType;
export declare interface ExperimentalTriggeringUpdateMojoType {
    type: ExperimentalTriggeringUpdateType;
    data: string;
    metadata: ({
        [key: string]: string;
    } | null);
}
export type ExperimentalTriggeringUpdate = ExperimentalTriggeringUpdateMojoType;
export declare interface TabContextResultMojoType {
    tabData: TabData;
    webPageData: (WebPageData | null);
    viewportScreenshot: (Screenshot | null);
    screenshotInfo: (mojoBase_mojom_ProtoWrapper | null);
    pdfDocumentData: (PdfDocumentData | null);
    annotatedPageData: (AnnotatedPageData | null);
}
export type TabContextResult = TabContextResultMojoType;
export declare interface WebPageDataMojoType {
    mainDocument: DocumentData;
}
export type WebPageData = WebPageDataMojoType;
export declare interface DocumentDataMojoType {
    origin: url_mojom_Origin;
    innerText: string;
    innerTextTruncated: boolean;
}
export type DocumentData = DocumentDataMojoType;
export declare interface PdfDocumentDataMojoType {
    origin: url_mojom_Origin;
    pdfData: (number[] | null);
    pdfSizeLimitExceeded: boolean;
}
export type PdfDocumentData = PdfDocumentDataMojoType;
export declare interface TabDataMojoType {
    tabId: number;
    windowId: number;
    url: url_mojom_Url;
    title: (string | null);
    favicon: (skia_mojom_BitmapN32 | null);
    faviconUrl: (url_mojom_Url | null);
    documentMimeType: string;
    isObservable: (boolean | null);
    isMediaActive: (boolean | null);
    isTabContentCaptured: (boolean | null);
    isActiveInWindow: (boolean | null);
    isWindowActive: (boolean | null);
    lightweightPageFeatures: (LightweightPageFeature[] | null);
}
export type TabData = TabDataMojoType;
export declare interface NoFocusedTabDataMojoType {
    activeTabData: (TabData | null);
    noFocusReason: string;
}
export type NoFocusedTabData = NoFocusedTabDataMojoType;
export declare interface AnnotatedPageDataMojoType {
    annotatedPageContent: (mojoBase_mojom_ProtoWrapper | null);
    metadata: (blink_mojom_PageMetadata | null);
}
export type AnnotatedPageData = AnnotatedPageDataMojoType;
export declare interface ImageOriginAnnotationsMojoType {
}
export type ImageOriginAnnotations = ImageOriginAnnotationsMojoType;
export declare interface JournalMojoType {
    data: number[];
}
export type Journal = JournalMojoType;
export declare interface PendingCapturedRegionMojoType {
    id: mojoBase_mojom_UnguessableToken;
    region: CapturedRegion;
}
export type PendingCapturedRegion = PendingCapturedRegionMojoType;
export declare interface CaptureRegionResultMojoType {
    tabId: number;
    region: CapturedRegion;
}
export type CaptureRegionResult = CaptureRegionResultMojoType;
export declare interface ScreenshotMojoType {
    widthPixels: number;
    heightPixels: number;
    data: number[];
    mimeType: string;
    originAnnotations: ImageOriginAnnotations;
    encryptionScheme: ScreenshotEncryptionScheme;
}
export type Screenshot = ScreenshotMojoType;
export declare interface ImageInfoMojoType {
    caption: (string | null);
    sourceOrigin: (url_mojom_Origin | null);
    url: url_mojom_Url;
    mimeType: (string | null);
}
export type ImageInfo = ImageInfoMojoType;
export declare interface ImageBytesResultMojoType {
    bytes: mojoBase_mojom_BigBuffer;
    imageInfo: ImageInfo;
}
export type ImageBytesResult = ImageBytesResultMojoType;
export declare interface OpenSettingsOptionsMojoType {
    highlightField: SettingsPageField;
}
export type OpenSettingsOptions = OpenSettingsOptionsMojoType;
export declare interface PinCandidatesObserver_OnPinCandidatesChanged_ParamsMojoType {
    candidates: PinCandidate[];
}
export type PinCandidatesObserver_OnPinCandidatesChanged_Params = PinCandidatesObserver_OnPinCandidatesChanged_ParamsMojoType;
export declare interface ActorClient_RequestToShowCredentialSelectionDialog_ParamsMojoType {
    request: actor_webui_mojom_SelectCredentialDialogRequest;
}
export type ActorClient_RequestToShowCredentialSelectionDialog_Params = ActorClient_RequestToShowCredentialSelectionDialog_ParamsMojoType;
export declare interface ActorClient_RequestToShowCredentialSelectionDialog_ResponseParamsMojoType {
    response: actor_webui_mojom_SelectCredentialDialogResponse;
}
export type ActorClient_RequestToShowCredentialSelectionDialog_ResponseParams = ActorClient_RequestToShowCredentialSelectionDialog_ResponseParamsMojoType;
export declare interface ActorClient_RequestToShowAutofillSuggestionsDialog_ParamsMojoType {
    request: actor_webui_mojom_SelectAutofillSuggestionsDialogRequest;
}
export type ActorClient_RequestToShowAutofillSuggestionsDialog_Params = ActorClient_RequestToShowAutofillSuggestionsDialog_ParamsMojoType;
export declare interface ActorClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsMojoType {
    response: actor_webui_mojom_SelectAutofillSuggestionsDialogResponse;
}
export type ActorClient_RequestToShowAutofillSuggestionsDialog_ResponseParams = ActorClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsMojoType;
export declare interface ActorClient_RequestToShowUserConfirmationDialog_ParamsMojoType {
    request: actor_webui_mojom_UserConfirmationDialogRequest;
}
export type ActorClient_RequestToShowUserConfirmationDialog_Params = ActorClient_RequestToShowUserConfirmationDialog_ParamsMojoType;
export declare interface ActorClient_RequestToShowUserConfirmationDialog_ResponseParamsMojoType {
    response: actor_webui_mojom_UserConfirmationDialogResponse;
}
export type ActorClient_RequestToShowUserConfirmationDialog_ResponseParams = ActorClient_RequestToShowUserConfirmationDialog_ResponseParamsMojoType;
export declare interface ActorClient_RequestToConfirmNavigation_ParamsMojoType {
    request: actor_webui_mojom_NavigationConfirmationRequest;
}
export type ActorClient_RequestToConfirmNavigation_Params = ActorClient_RequestToConfirmNavigation_ParamsMojoType;
export declare interface ActorClient_RequestToConfirmNavigation_ResponseParamsMojoType {
    response: actor_webui_mojom_NavigationConfirmationResponse;
}
export type ActorClient_RequestToConfirmNavigation_ResponseParams = ActorClient_RequestToConfirmNavigation_ResponseParamsMojoType;
export declare interface ActorClient_NotifyActorTaskStateChanged_ParamsMojoType {
    taskId: number;
    state: ActorTaskState;
}
export type ActorClient_NotifyActorTaskStateChanged_Params = ActorClient_NotifyActorTaskStateChanged_ParamsMojoType;
export declare interface ActorClient_RequestToShowGmailOtpOptInDialog_ParamsMojoType {
    request: actor_webui_mojom_GmailOtpOptInRequest;
}
export type ActorClient_RequestToShowGmailOtpOptInDialog_Params = ActorClient_RequestToShowGmailOtpOptInDialog_ParamsMojoType;
export declare interface ActorClient_RequestToShowGmailOtpOptInDialog_ResponseParamsMojoType {
    result: actor_webui_mojom_GmailOtpOptInResult;
}
export type ActorClient_RequestToShowGmailOtpOptInDialog_ResponseParams = ActorClient_RequestToShowGmailOtpOptInDialog_ResponseParamsMojoType;
export declare interface ActorClient_RequestToShowGmailOtpConfirmationDialog_ParamsMojoType {
    request: actor_webui_mojom_GmailOtpConfirmationRequest;
}
export type ActorClient_RequestToShowGmailOtpConfirmationDialog_Params = ActorClient_RequestToShowGmailOtpConfirmationDialog_ParamsMojoType;
export declare interface ActorClient_RequestToShowGmailOtpConfirmationDialog_ResponseParamsMojoType {
    result: actor_webui_mojom_GmailOtpConfirmationResult;
}
export type ActorClient_RequestToShowGmailOtpConfirmationDialog_ResponseParams = ActorClient_RequestToShowGmailOtpConfirmationDialog_ResponseParamsMojoType;
export declare interface ActorHandler_AutofillSuggestionDialogOnFormPresented_ParamsMojoType {
    taskId: number;
    params: actor_webui_mojom_AutofillSuggestionDialogOnFormPresentedParams;
}
export type ActorHandler_AutofillSuggestionDialogOnFormPresented_Params = ActorHandler_AutofillSuggestionDialogOnFormPresented_ParamsMojoType;
export declare interface ActorHandler_AutofillSuggestionDialogOnFormPreviewChanged_ParamsMojoType {
    taskId: number;
    params: actor_webui_mojom_AutofillSuggestionDialogOnFormPreviewChangedParams;
}
export type ActorHandler_AutofillSuggestionDialogOnFormPreviewChanged_Params = ActorHandler_AutofillSuggestionDialogOnFormPreviewChanged_ParamsMojoType;
export declare interface ActorHandler_AutofillSuggestionDialogOnFormConfirmed_ParamsMojoType {
    taskId: number;
    params: actor_webui_mojom_AutofillSuggestionDialogOnFormConfirmedParams;
}
export type ActorHandler_AutofillSuggestionDialogOnFormConfirmed_Params = ActorHandler_AutofillSuggestionDialogOnFormConfirmed_ParamsMojoType;
export declare interface ActorHandler_GetContextForActorFromTab_ParamsMojoType {
    tabId: number;
    options: TabContextOptions;
}
export type ActorHandler_GetContextForActorFromTab_Params = ActorHandler_GetContextForActorFromTab_ParamsMojoType;
export declare interface ActorHandler_GetContextForActorFromTab_ResponseParamsMojoType {
    result: GetContextResult;
}
export type ActorHandler_GetContextForActorFromTab_ResponseParams = ActorHandler_GetContextForActorFromTab_ResponseParamsMojoType;
export declare interface ActorHandler_CreateTask_ParamsMojoType {
    taskOptions: (actor_webui_mojom_TaskOptions | null);
}
export type ActorHandler_CreateTask_Params = ActorHandler_CreateTask_ParamsMojoType;
export declare interface ActorHandler_CreateTask_ResponseParamsMojoType {
    result: ActorHandler_CreateTask_ResponseParam_Result;
}
export type ActorHandler_CreateTask_ResponseParams = ActorHandler_CreateTask_ResponseParamsMojoType;
export declare interface ActorHandler_PerformActions_ParamsMojoType {
    actionsProto: number[];
}
export type ActorHandler_PerformActions_Params = ActorHandler_PerformActions_ParamsMojoType;
export declare interface ActorHandler_PerformActions_ResponseParamsMojoType {
    result: ActorHandler_PerformActions_ResponseParam_Result;
}
export type ActorHandler_PerformActions_ResponseParams = ActorHandler_PerformActions_ResponseParamsMojoType;
export declare interface ActorHandler_CancelActions_ParamsMojoType {
    taskId: number;
}
export type ActorHandler_CancelActions_Params = ActorHandler_CancelActions_ParamsMojoType;
export declare interface ActorHandler_CancelActions_ResponseParamsMojoType {
    result: CancelActionsResult;
}
export type ActorHandler_CancelActions_ResponseParams = ActorHandler_CancelActions_ResponseParamsMojoType;
export declare interface ActorHandler_StopActorTask_ParamsMojoType {
    taskId: number;
    stopReason: ActorTaskStopReason;
}
export type ActorHandler_StopActorTask_Params = ActorHandler_StopActorTask_ParamsMojoType;
export declare interface ActorHandler_PauseActorTask_ParamsMojoType {
    taskId: number;
    pauseReason: ActorTaskPauseReason;
    tabId: (number | null);
}
export type ActorHandler_PauseActorTask_Params = ActorHandler_PauseActorTask_ParamsMojoType;
export declare interface ActorHandler_ResumeActorTask_ParamsMojoType {
    taskId: number;
    contextOptions: TabContextOptions;
}
export type ActorHandler_ResumeActorTask_Params = ActorHandler_ResumeActorTask_ParamsMojoType;
export declare interface ActorHandler_ResumeActorTask_ResponseParamsMojoType {
    result: GetContextResultWithActionResultCode;
}
export type ActorHandler_ResumeActorTask_ResponseParams = ActorHandler_ResumeActorTask_ResponseParamsMojoType;
export declare interface ActorHandler_InterruptActorTask_ParamsMojoType {
    taskId: number;
    interruptReason: (ActorTaskInterruptReason | null);
}
export type ActorHandler_InterruptActorTask_Params = ActorHandler_InterruptActorTask_ParamsMojoType;
export declare interface ActorHandler_UninterruptActorTask_ParamsMojoType {
    taskId: number;
}
export type ActorHandler_UninterruptActorTask_Params = ActorHandler_UninterruptActorTask_ParamsMojoType;
export declare interface ActorHandler_UpdateActorTaskStepProgress_ParamsMojoType {
    taskId: number;
    stepProgress: string;
}
export type ActorHandler_UpdateActorTaskStepProgress_Params = ActorHandler_UpdateActorTaskStepProgress_ParamsMojoType;
export declare interface ActorHandler_CreateActorTab_ParamsMojoType {
    taskId: number;
    options: CreateActorTabOptions;
}
export type ActorHandler_CreateActorTab_Params = ActorHandler_CreateActorTab_ParamsMojoType;
export declare interface ActorHandler_CreateActorTab_ResponseParamsMojoType {
    tabData: (TabData | null);
}
export type ActorHandler_CreateActorTab_ResponseParams = ActorHandler_CreateActorTab_ResponseParamsMojoType;
export declare interface ActorHandler_LogBeginAsyncEvent_ParamsMojoType {
    eventAsyncId: bigint;
    taskId: number;
    event: string;
    details: string;
}
export type ActorHandler_LogBeginAsyncEvent_Params = ActorHandler_LogBeginAsyncEvent_ParamsMojoType;
export declare interface ActorHandler_LogEndAsyncEvent_ParamsMojoType {
    eventAsyncId: bigint;
    details: string;
}
export type ActorHandler_LogEndAsyncEvent_Params = ActorHandler_LogEndAsyncEvent_ParamsMojoType;
export declare interface ActorHandler_LogInstantEvent_ParamsMojoType {
    taskId: number;
    event: string;
    details: string;
}
export type ActorHandler_LogInstantEvent_Params = ActorHandler_LogInstantEvent_ParamsMojoType;
export declare interface ActorHandler_JournalClear_ParamsMojoType {
}
export type ActorHandler_JournalClear_Params = ActorHandler_JournalClear_ParamsMojoType;
export declare interface ActorHandler_JournalSnapshot_ParamsMojoType {
    clearJournal: boolean;
}
export type ActorHandler_JournalSnapshot_Params = ActorHandler_JournalSnapshot_ParamsMojoType;
export declare interface ActorHandler_JournalSnapshot_ResponseParamsMojoType {
    journal: Journal;
}
export type ActorHandler_JournalSnapshot_ResponseParams = ActorHandler_JournalSnapshot_ResponseParamsMojoType;
export declare interface ActorHandler_JournalStart_ParamsMojoType {
    maxBytes: bigint;
    captureScreenshots: boolean;
}
export type ActorHandler_JournalStart_Params = ActorHandler_JournalStart_ParamsMojoType;
export declare interface ActorHandler_JournalStop_ParamsMojoType {
}
export type ActorHandler_JournalStop_Params = ActorHandler_JournalStop_ParamsMojoType;
export declare interface ActorHandler_JournalRecordFeedback_ParamsMojoType {
    positive: boolean;
    reason: string;
}
export type ActorHandler_JournalRecordFeedback_Params = ActorHandler_JournalRecordFeedback_ParamsMojoType;
export declare interface AnnotationHandler_ScrollTo_ParamsMojoType {
    params: ScrollToParams;
}
export type AnnotationHandler_ScrollTo_Params = AnnotationHandler_ScrollTo_ParamsMojoType;
export declare interface AnnotationHandler_ScrollTo_ResponseParamsMojoType {
    errorReason: (ScrollToErrorReason | null);
}
export type AnnotationHandler_ScrollTo_ResponseParams = AnnotationHandler_ScrollTo_ResponseParamsMojoType;
export declare interface AnnotationHandler_DropScrollToHighlight_ParamsMojoType {
}
export type AnnotationHandler_DropScrollToHighlight_Params = AnnotationHandler_DropScrollToHighlight_ParamsMojoType;
export declare interface SkillsHandler_CreateSkill_ParamsMojoType {
    request: CreateSkillRequest;
}
export type SkillsHandler_CreateSkill_Params = SkillsHandler_CreateSkill_ParamsMojoType;
export declare interface SkillsHandler_CreateSkill_ResponseParamsMojoType {
    modalOpened: boolean;
}
export type SkillsHandler_CreateSkill_ResponseParams = SkillsHandler_CreateSkill_ResponseParamsMojoType;
export declare interface SkillsHandler_UpdateSkill_ParamsMojoType {
    request: UpdateSkillRequest;
}
export type SkillsHandler_UpdateSkill_Params = SkillsHandler_UpdateSkill_ParamsMojoType;
export declare interface SkillsHandler_UpdateSkill_ResponseParamsMojoType {
    modalOpened: boolean;
}
export type SkillsHandler_UpdateSkill_ResponseParams = SkillsHandler_UpdateSkill_ResponseParamsMojoType;
export declare interface SkillsHandler_ShowManageSkillsUi_ParamsMojoType {
}
export type SkillsHandler_ShowManageSkillsUi_Params = SkillsHandler_ShowManageSkillsUi_ParamsMojoType;
export declare interface SkillsHandler_ShowBrowseSkillsUi_ParamsMojoType {
}
export type SkillsHandler_ShowBrowseSkillsUi_Params = SkillsHandler_ShowBrowseSkillsUi_ParamsMojoType;
export declare interface SkillsHandler_GetSkill_ParamsMojoType {
    id: string;
}
export type SkillsHandler_GetSkill_Params = SkillsHandler_GetSkill_ParamsMojoType;
export declare interface SkillsHandler_GetSkill_ResponseParamsMojoType {
    skill: (Skill | null);
}
export type SkillsHandler_GetSkill_ResponseParams = SkillsHandler_GetSkill_ResponseParamsMojoType;
export declare interface SkillsHandler_RecordSkillsWebClientEvent_ParamsMojoType {
    event: SkillsWebClientEvent;
}
export type SkillsHandler_RecordSkillsWebClientEvent_Params = SkillsHandler_RecordSkillsWebClientEvent_ParamsMojoType;
export declare interface SkillsClient_NotifySkillPreviewsChanged_ParamsMojoType {
    skillPreviews: SkillPreview[];
}
export type SkillsClient_NotifySkillPreviewsChanged_Params = SkillsClient_NotifySkillPreviewsChanged_ParamsMojoType;
export declare interface SkillsClient_NotifyContextualSkillPreviewsChanged_ParamsMojoType {
    skillPreviews: SkillPreview[];
}
export type SkillsClient_NotifyContextualSkillPreviewsChanged_Params = SkillsClient_NotifyContextualSkillPreviewsChanged_ParamsMojoType;
export declare interface SkillsClient_NotifySkillPreviewChanged_ParamsMojoType {
    skillPreview: SkillPreview;
}
export type SkillsClient_NotifySkillPreviewChanged_Params = SkillsClient_NotifySkillPreviewChanged_ParamsMojoType;
export declare interface SkillsClient_NotifySkillDeleted_ParamsMojoType {
    skillId: string;
}
export type SkillsClient_NotifySkillDeleted_Params = SkillsClient_NotifySkillDeleted_ParamsMojoType;
export declare interface SkillsClient_NotifySkillsEnabledChanged_ParamsMojoType {
    enabled: boolean;
}
export type SkillsClient_NotifySkillsEnabledChanged_Params = SkillsClient_NotifySkillsEnabledChanged_ParamsMojoType;
export declare interface WebClientHandler_ReportApiRequestCount_ParamsMojoType {
    requestTypeId: number;
    event: GlicRequestEvent;
}
export type WebClientHandler_ReportApiRequestCount_Params = WebClientHandler_ReportApiRequestCount_ParamsMojoType;
export declare interface WebClientHandler_ReportApiRequestLatency_ParamsMojoType {
    requestType: string;
    latency: mojoBase_mojom_TimeDelta;
}
export type WebClientHandler_ReportApiRequestLatency_Params = WebClientHandler_ReportApiRequestLatency_ParamsMojoType;
export declare interface WebClientHandler_RecordSparseValue_ParamsMojoType {
    name: string;
    value: number;
}
export type WebClientHandler_RecordSparseValue_Params = WebClientHandler_RecordSparseValue_ParamsMojoType;
export declare interface WebClientHandler_WebClientCreated_ParamsMojoType {
    webClient: WebClientRemote;
}
export type WebClientHandler_WebClientCreated_Params = WebClientHandler_WebClientCreated_ParamsMojoType;
export declare interface WebClientHandler_WebClientCreated_ResponseParamsMojoType {
    initialState: WebClientInitialState;
}
export type WebClientHandler_WebClientCreated_ResponseParams = WebClientHandler_WebClientCreated_ResponseParamsMojoType;
export declare interface WebClientHandler_WebClientInitialized_ParamsMojoType {
}
export type WebClientHandler_WebClientInitialized_Params = WebClientHandler_WebClientInitialized_ParamsMojoType;
export declare interface WebClientHandler_WebClientInitializeFailed_ParamsMojoType {
}
export type WebClientHandler_WebClientInitializeFailed_Params = WebClientHandler_WebClientInitializeFailed_ParamsMojoType;
export declare interface WebClientHandler_CreateActorHandler_ParamsMojoType {
    receiver: ActorHandlerPendingReceiver;
    client: ActorClientRemote;
}
export type WebClientHandler_CreateActorHandler_Params = WebClientHandler_CreateActorHandler_ParamsMojoType;
export declare interface WebClientHandler_CreateExperimentalTriggeringClient_ParamsMojoType {
    client: ExperimentalTriggeringClientRemote;
}
export type WebClientHandler_CreateExperimentalTriggeringClient_Params = WebClientHandler_CreateExperimentalTriggeringClient_ParamsMojoType;
export declare interface WebClientHandler_CreateAnnotationHandler_ParamsMojoType {
    receiver: AnnotationHandlerPendingReceiver;
}
export type WebClientHandler_CreateAnnotationHandler_Params = WebClientHandler_CreateAnnotationHandler_ParamsMojoType;
export declare interface WebClientHandler_CreateSkillsHandler_ParamsMojoType {
    receiver: SkillsHandlerPendingReceiver;
    client: SkillsClientRemote;
}
export type WebClientHandler_CreateSkillsHandler_Params = WebClientHandler_CreateSkillsHandler_ParamsMojoType;
export declare interface WebClientHandler_CreateZeroStateSuggestionsHandler_ParamsMojoType {
    receiver: ZeroStateSuggestionsHandlerPendingReceiver;
}
export type WebClientHandler_CreateZeroStateSuggestionsHandler_Params = WebClientHandler_CreateZeroStateSuggestionsHandler_ParamsMojoType;
export declare interface WebClientHandler_CreateAiOverlayTools_ParamsMojoType {
    receiver: aiOverlayDialog_mojom_AiOverlayToolsPendingReceiver;
}
export type WebClientHandler_CreateAiOverlayTools_Params = WebClientHandler_CreateAiOverlayTools_ParamsMojoType;
export declare interface WebClientHandler_CreateTab_ParamsMojoType {
    url: url_mojom_Url;
    createOptions: CreateTabOptions;
}
export type WebClientHandler_CreateTab_Params = WebClientHandler_CreateTab_ParamsMojoType;
export declare interface WebClientHandler_CreateTab_ResponseParamsMojoType {
    tabData: (TabData | null);
}
export type WebClientHandler_CreateTab_ResponseParams = WebClientHandler_CreateTab_ResponseParamsMojoType;
export declare interface WebClientHandler_ActivateTabWithUrl_ParamsMojoType {
    exactUrl: url_mojom_Url;
    options: (ActivateTabOptions | null);
}
export type WebClientHandler_ActivateTabWithUrl_Params = WebClientHandler_ActivateTabWithUrl_ParamsMojoType;
export declare interface WebClientHandler_ActivateTabWithUrl_ResponseParamsMojoType {
    tabData: (TabData | null);
}
export type WebClientHandler_ActivateTabWithUrl_ResponseParams = WebClientHandler_ActivateTabWithUrl_ResponseParamsMojoType;
export declare interface WebClientHandler_OpenLinkInPopup_ParamsMojoType {
    url: url_mojom_Url;
    popupWidth: number;
    popupHeight: number;
}
export type WebClientHandler_OpenLinkInPopup_Params = WebClientHandler_OpenLinkInPopup_ParamsMojoType;
export declare interface WebClientHandler_OpenGlicSettingsPage_ParamsMojoType {
    options: OpenSettingsOptions;
}
export type WebClientHandler_OpenGlicSettingsPage_Params = WebClientHandler_OpenGlicSettingsPage_ParamsMojoType;
export declare interface WebClientHandler_OpenPasswordManagerSettingsPage_ParamsMojoType {
}
export type WebClientHandler_OpenPasswordManagerSettingsPage_Params = WebClientHandler_OpenPasswordManagerSettingsPage_ParamsMojoType;
export declare interface WebClientHandler_OpenContactInfoSettingsPage_ParamsMojoType {
}
export type WebClientHandler_OpenContactInfoSettingsPage_Params = WebClientHandler_OpenContactInfoSettingsPage_ParamsMojoType;
export declare interface WebClientHandler_EnableDragResize_ParamsMojoType {
    enabled: boolean;
}
export type WebClientHandler_EnableDragResize_Params = WebClientHandler_EnableDragResize_ParamsMojoType;
export declare interface WebClientHandler_ClosePanel_ParamsMojoType {
}
export type WebClientHandler_ClosePanel_Params = WebClientHandler_ClosePanel_ParamsMojoType;
export declare interface WebClientHandler_ClosePanelAndShutdown_ParamsMojoType {
}
export type WebClientHandler_ClosePanelAndShutdown_Params = WebClientHandler_ClosePanelAndShutdown_ParamsMojoType;
export declare interface WebClientHandler_AttachPanel_ParamsMojoType {
}
export type WebClientHandler_AttachPanel_Params = WebClientHandler_AttachPanel_ParamsMojoType;
export declare interface WebClientHandler_DetachPanel_ParamsMojoType {
}
export type WebClientHandler_DetachPanel_Params = WebClientHandler_DetachPanel_ParamsMojoType;
export declare interface WebClientHandler_OnModeChange_ParamsMojoType {
    newMode: WebClientMode;
}
export type WebClientHandler_OnModeChange_Params = WebClientHandler_OnModeChange_ParamsMojoType;
export declare interface WebClientHandler_OnMicrophoneStatusChange_ParamsMojoType {
    status: MicrophoneStatus;
}
export type WebClientHandler_OnMicrophoneStatusChange_Params = WebClientHandler_OnMicrophoneStatusChange_ParamsMojoType;
export declare interface WebClientHandler_ShowProfilePicker_ParamsMojoType {
}
export type WebClientHandler_ShowProfilePicker_Params = WebClientHandler_ShowProfilePicker_ParamsMojoType;
export declare interface WebClientHandler_GetModelQualityClientId_ParamsMojoType {
}
export type WebClientHandler_GetModelQualityClientId_Params = WebClientHandler_GetModelQualityClientId_ParamsMojoType;
export declare interface WebClientHandler_GetModelQualityClientId_ResponseParamsMojoType {
    modelQualityClientId: string;
}
export type WebClientHandler_GetModelQualityClientId_ResponseParams = WebClientHandler_GetModelQualityClientId_ResponseParamsMojoType;
export declare interface WebClientHandler_GetContextFromFocusedTab_ParamsMojoType {
    options: TabContextOptions;
}
export type WebClientHandler_GetContextFromFocusedTab_Params = WebClientHandler_GetContextFromFocusedTab_ParamsMojoType;
export declare interface WebClientHandler_GetContextFromFocusedTab_ResponseParamsMojoType {
    result: GetContextResult;
}
export type WebClientHandler_GetContextFromFocusedTab_ResponseParams = WebClientHandler_GetContextFromFocusedTab_ResponseParamsMojoType;
export declare interface WebClientHandler_GetContextFromTab_ParamsMojoType {
    tabId: number;
    options: TabContextOptions;
}
export type WebClientHandler_GetContextFromTab_Params = WebClientHandler_GetContextFromTab_ParamsMojoType;
export declare interface WebClientHandler_GetContextFromTab_ResponseParamsMojoType {
    result: GetContextResult;
}
export type WebClientHandler_GetContextFromTab_ResponseParams = WebClientHandler_GetContextFromTab_ResponseParamsMojoType;
export declare interface WebClientHandler_GetImageBytesFromTab_ParamsMojoType {
    tabId: number;
    domNodeId: number;
    documentId: string;
}
export type WebClientHandler_GetImageBytesFromTab_Params = WebClientHandler_GetImageBytesFromTab_ParamsMojoType;
export declare interface WebClientHandler_GetImageBytesFromTab_ResponseParamsMojoType {
    result: GetImageBytesResult;
}
export type WebClientHandler_GetImageBytesFromTab_ResponseParams = WebClientHandler_GetImageBytesFromTab_ResponseParamsMojoType;
export declare interface WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsMojoType {
    requestedMax: number;
}
export type WebClientHandler_SetMaximumNumberOfPinnedTabs_Params = WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsMojoType;
export declare interface WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsMojoType {
    effectiveMax: number;
}
export type WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParams = WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsMojoType;
export declare interface WebClientHandler_PinTabs_ParamsMojoType {
    tabIds: number[];
    options: (PinTabsOptions | null);
}
export type WebClientHandler_PinTabs_Params = WebClientHandler_PinTabs_ParamsMojoType;
export declare interface WebClientHandler_PinTabs_ResponseParamsMojoType {
    pinnedAll: boolean;
}
export type WebClientHandler_PinTabs_ResponseParams = WebClientHandler_PinTabs_ResponseParamsMojoType;
export declare interface WebClientHandler_UnpinTabs_ParamsMojoType {
    tabIds: number[];
    options: (UnpinTabsOptions | null);
}
export type WebClientHandler_UnpinTabs_Params = WebClientHandler_UnpinTabs_ParamsMojoType;
export declare interface WebClientHandler_UnpinTabs_ResponseParamsMojoType {
    unpinnedAll: boolean;
}
export type WebClientHandler_UnpinTabs_ResponseParams = WebClientHandler_UnpinTabs_ResponseParamsMojoType;
export declare interface WebClientHandler_UnpinAllTabs_ParamsMojoType {
    options: (UnpinTabsOptions | null);
}
export type WebClientHandler_UnpinAllTabs_Params = WebClientHandler_UnpinAllTabs_ParamsMojoType;
export declare interface WebClientHandler_SubscribeToPinCandidates_ParamsMojoType {
    options: GetPinCandidatesOptions;
    observer: PinCandidatesObserverRemote;
}
export type WebClientHandler_SubscribeToPinCandidates_Params = WebClientHandler_SubscribeToPinCandidates_ParamsMojoType;
export declare interface WebClientHandler_OpenPinnedTabPicker_ParamsMojoType {
    options: (OpenPinnedTabPickerOptions | null);
}
export type WebClientHandler_OpenPinnedTabPicker_Params = WebClientHandler_OpenPinnedTabPicker_ParamsMojoType;
export declare interface WebClientHandler_OpenPinnedTabPicker_ResponseParamsMojoType {
}
export type WebClientHandler_OpenPinnedTabPicker_ResponseParams = WebClientHandler_OpenPinnedTabPicker_ResponseParamsMojoType;
export declare interface WebClientHandler_ActivateTab_ParamsMojoType {
    taskId: number;
}
export type WebClientHandler_ActivateTab_Params = WebClientHandler_ActivateTab_ParamsMojoType;
export declare interface WebClientHandler_ResizeWidget_ParamsMojoType {
    size: gfx_mojom_Size;
    duration: mojoBase_mojom_TimeDelta;
}
export type WebClientHandler_ResizeWidget_Params = WebClientHandler_ResizeWidget_ParamsMojoType;
export declare interface WebClientHandler_ResizeWidget_ResponseParamsMojoType {
}
export type WebClientHandler_ResizeWidget_ResponseParams = WebClientHandler_ResizeWidget_ResponseParamsMojoType;
export declare interface WebClientHandler_CaptureRegion_ParamsMojoType {
    observer: CaptureRegionObserverRemote;
    params: (CaptureRegionParams | null);
}
export type WebClientHandler_CaptureRegion_Params = WebClientHandler_CaptureRegion_ParamsMojoType;
export declare interface WebClientHandler_DeleteCapturedRegion_ParamsMojoType {
    tabId: number;
    id: mojoBase_mojom_UnguessableToken;
}
export type WebClientHandler_DeleteCapturedRegion_Params = WebClientHandler_DeleteCapturedRegion_ParamsMojoType;
export declare interface WebClientHandler_SetAudioDucking_ParamsMojoType {
    enable: boolean;
}
export type WebClientHandler_SetAudioDucking_Params = WebClientHandler_SetAudioDucking_ParamsMojoType;
export declare interface WebClientHandler_SetAudioDucking_ResponseParamsMojoType {
    result: boolean;
}
export type WebClientHandler_SetAudioDucking_ResponseParams = WebClientHandler_SetAudioDucking_ResponseParamsMojoType;
export declare interface WebClientHandler_SetMinimumPanelSize_ParamsMojoType {
    size: gfx_mojom_Size;
}
export type WebClientHandler_SetMinimumPanelSize_Params = WebClientHandler_SetMinimumPanelSize_ParamsMojoType;
export declare interface WebClientHandler_SetMicrophonePermissionState_ParamsMojoType {
    enabled: boolean;
}
export type WebClientHandler_SetMicrophonePermissionState_Params = WebClientHandler_SetMicrophonePermissionState_ParamsMojoType;
export declare interface WebClientHandler_SetMicrophonePermissionState_ResponseParamsMojoType {
}
export type WebClientHandler_SetMicrophonePermissionState_ResponseParams = WebClientHandler_SetMicrophonePermissionState_ResponseParamsMojoType;
export declare interface WebClientHandler_SetLocationPermissionState_ParamsMojoType {
    enabled: boolean;
}
export type WebClientHandler_SetLocationPermissionState_Params = WebClientHandler_SetLocationPermissionState_ParamsMojoType;
export declare interface WebClientHandler_SetLocationPermissionState_ResponseParamsMojoType {
}
export type WebClientHandler_SetLocationPermissionState_ResponseParams = WebClientHandler_SetLocationPermissionState_ResponseParamsMojoType;
export declare interface WebClientHandler_SetTabContextPermissionState_ParamsMojoType {
    enabled: boolean;
}
export type WebClientHandler_SetTabContextPermissionState_Params = WebClientHandler_SetTabContextPermissionState_ParamsMojoType;
export declare interface WebClientHandler_SetTabContextPermissionState_ResponseParamsMojoType {
}
export type WebClientHandler_SetTabContextPermissionState_ResponseParams = WebClientHandler_SetTabContextPermissionState_ResponseParamsMojoType;
export declare interface WebClientHandler_SetClosedCaptioningSetting_ParamsMojoType {
    enabled: boolean;
}
export type WebClientHandler_SetClosedCaptioningSetting_Params = WebClientHandler_SetClosedCaptioningSetting_ParamsMojoType;
export declare interface WebClientHandler_SetClosedCaptioningSetting_ResponseParamsMojoType {
}
export type WebClientHandler_SetClosedCaptioningSetting_ResponseParams = WebClientHandler_SetClosedCaptioningSetting_ResponseParamsMojoType;
export declare interface WebClientHandler_SetActuationOnWebSetting_ParamsMojoType {
    enabled: boolean;
}
export type WebClientHandler_SetActuationOnWebSetting_Params = WebClientHandler_SetActuationOnWebSetting_ParamsMojoType;
export declare interface WebClientHandler_SetActuationOnWebSetting_ResponseParamsMojoType {
}
export type WebClientHandler_SetActuationOnWebSetting_ResponseParams = WebClientHandler_SetActuationOnWebSetting_ResponseParamsMojoType;
export declare interface WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsMojoType {
}
export type WebClientHandler_ShouldAllowMediaPermissionRequest_Params = WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsMojoType;
export declare interface WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsMojoType {
    isAllowed: boolean;
}
export type WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParams = WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsMojoType;
export declare interface WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsMojoType {
}
export type WebClientHandler_ShouldAllowGeolocationPermissionRequest_Params = WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsMojoType;
export declare interface WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsMojoType {
    isAllowed: boolean;
}
export type WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParams = WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsMojoType;
export declare interface WebClientHandler_SetContextAccessIndicator_ParamsMojoType {
    enabled: boolean;
}
export type WebClientHandler_SetContextAccessIndicator_Params = WebClientHandler_SetContextAccessIndicator_ParamsMojoType;
export declare interface WebClientHandler_GetUserProfileInfo_ParamsMojoType {
}
export type WebClientHandler_GetUserProfileInfo_Params = WebClientHandler_GetUserProfileInfo_ParamsMojoType;
export declare interface WebClientHandler_GetUserProfileInfo_ResponseParamsMojoType {
    profileInfo: (UserProfileInfo | null);
}
export type WebClientHandler_GetUserProfileInfo_ResponseParams = WebClientHandler_GetUserProfileInfo_ResponseParamsMojoType;
export declare interface WebClientHandler_SyncCookies_ParamsMojoType {
}
export type WebClientHandler_SyncCookies_Params = WebClientHandler_SyncCookies_ParamsMojoType;
export declare interface WebClientHandler_SyncCookies_ResponseParamsMojoType {
    success: boolean;
}
export type WebClientHandler_SyncCookies_ResponseParams = WebClientHandler_SyncCookies_ResponseParamsMojoType;
export declare interface WebClientHandler_ClientErrorDialogStateChanged_ParamsMojoType {
    shownDialogType: (ClientErrorDialogType | null);
}
export type WebClientHandler_ClientErrorDialogStateChanged_Params = WebClientHandler_ClientErrorDialogStateChanged_ParamsMojoType;
export declare interface WebClientHandler_ReportClientTransientError_ParamsMojoType {
    statusCode: mojoBase_mojom_AbslStatusCode;
}
export type WebClientHandler_ReportClientTransientError_Params = WebClientHandler_ReportClientTransientError_ParamsMojoType;
export declare interface WebClientHandler_ProcessCounterAbuseVerdict_ParamsMojoType {
    tabId: number;
    verdict: (CounterAbuseVerdict | null);
}
export type WebClientHandler_ProcessCounterAbuseVerdict_Params = WebClientHandler_ProcessCounterAbuseVerdict_ParamsMojoType;
export declare interface WebClientHandler_OnOptinImpression_ParamsMojoType {
}
export type WebClientHandler_OnOptinImpression_Params = WebClientHandler_OnOptinImpression_ParamsMojoType;
export declare interface WebClientHandler_OnUserInputSubmitted_ParamsMojoType {
    mode: WebClientMode;
    promptType: PromptType;
}
export type WebClientHandler_OnUserInputSubmitted_Params = WebClientHandler_OnUserInputSubmitted_ParamsMojoType;
export declare interface WebClientHandler_OnContextUploadStarted_ParamsMojoType {
}
export type WebClientHandler_OnContextUploadStarted_Params = WebClientHandler_OnContextUploadStarted_ParamsMojoType;
export declare interface WebClientHandler_OnContextUploadCompleted_ParamsMojoType {
}
export type WebClientHandler_OnContextUploadCompleted_Params = WebClientHandler_OnContextUploadCompleted_ParamsMojoType;
export declare interface WebClientHandler_OnReaction_ParamsMojoType {
    reactionType: MetricUserInputReactionType;
}
export type WebClientHandler_OnReaction_Params = WebClientHandler_OnReaction_ParamsMojoType;
export declare interface WebClientHandler_OnResponseStarted_ParamsMojoType {
}
export type WebClientHandler_OnResponseStarted_Params = WebClientHandler_OnResponseStarted_ParamsMojoType;
export declare interface WebClientHandler_OnResponseStopped_ParamsMojoType {
    details: OnResponseStoppedDetails;
}
export type WebClientHandler_OnResponseStopped_Params = WebClientHandler_OnResponseStopped_ParamsMojoType;
export declare interface WebClientHandler_OnSessionTerminated_ParamsMojoType {
}
export type WebClientHandler_OnSessionTerminated_Params = WebClientHandler_OnSessionTerminated_ParamsMojoType;
export declare interface WebClientHandler_OnTurnCompleted_ParamsMojoType {
    model: WebClientModel;
    duration: mojoBase_mojom_TimeDelta;
}
export type WebClientHandler_OnTurnCompleted_Params = WebClientHandler_OnTurnCompleted_ParamsMojoType;
export declare interface WebClientHandler_OnResponseRated_ParamsMojoType {
    positive: boolean;
}
export type WebClientHandler_OnResponseRated_Params = WebClientHandler_OnResponseRated_ParamsMojoType;
export declare interface WebClientHandler_OnClosedCaptionsShown_ParamsMojoType {
}
export type WebClientHandler_OnClosedCaptionsShown_Params = WebClientHandler_OnClosedCaptionsShown_ParamsMojoType;
export declare interface WebClientHandler_OnActionSubmitted_ParamsMojoType {
    isRetry: boolean;
}
export type WebClientHandler_OnActionSubmitted_Params = WebClientHandler_OnActionSubmitted_ParamsMojoType;
export declare interface WebClientHandler_SetSyntheticExperimentState_ParamsMojoType {
    trialName: string;
    groupName: string;
}
export type WebClientHandler_SetSyntheticExperimentState_Params = WebClientHandler_SetSyntheticExperimentState_ParamsMojoType;
export declare interface WebClientHandler_OpenOsPermissionSettingsMenu_ParamsMojoType {
    type: contentSettings_mojom_ContentSettingsType;
}
export type WebClientHandler_OpenOsPermissionSettingsMenu_Params = WebClientHandler_OpenOsPermissionSettingsMenu_ParamsMojoType;
export declare interface WebClientHandler_GetOsMicrophonePermissionStatus_ParamsMojoType {
}
export type WebClientHandler_GetOsMicrophonePermissionStatus_Params = WebClientHandler_GetOsMicrophonePermissionStatus_ParamsMojoType;
export declare interface WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsMojoType {
    enabled: boolean;
}
export type WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParams = WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsMojoType;
export declare interface WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsMojoType {
    isFirstRun: (boolean | null);
}
export type WebClientHandler_GetZeroStateSuggestionsForFocusedTab_Params = WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsMojoType;
export declare interface WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsMojoType {
    suggestions: (ZeroStateSuggestions | null);
}
export type WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParams = WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsMojoType;
export declare interface WebClientHandler_MaybeRefreshUserStatus_ParamsMojoType {
}
export type WebClientHandler_MaybeRefreshUserStatus_Params = WebClientHandler_MaybeRefreshUserStatus_ParamsMojoType;
export declare interface WebClientHandler_IsDebuggerAttached_ParamsMojoType {
}
export type WebClientHandler_IsDebuggerAttached_Params = WebClientHandler_IsDebuggerAttached_ParamsMojoType;
export declare interface WebClientHandler_IsDebuggerAttached_ResponseParamsMojoType {
    isAttachedToWebview: boolean;
}
export type WebClientHandler_IsDebuggerAttached_ResponseParams = WebClientHandler_IsDebuggerAttached_ResponseParamsMojoType;
export declare interface WebClientHandler_SubscribeToPageMetadata_ParamsMojoType {
    tabId: number;
    names: string[];
}
export type WebClientHandler_SubscribeToPageMetadata_Params = WebClientHandler_SubscribeToPageMetadata_ParamsMojoType;
export declare interface WebClientHandler_SubscribeToPageMetadata_ResponseParamsMojoType {
    success: boolean;
}
export type WebClientHandler_SubscribeToPageMetadata_ResponseParams = WebClientHandler_SubscribeToPageMetadata_ResponseParamsMojoType;
export declare interface WebClientHandler_SwitchConversation_ParamsMojoType {
    info: ConversationInfo;
}
export type WebClientHandler_SwitchConversation_Params = WebClientHandler_SwitchConversation_ParamsMojoType;
export declare interface WebClientHandler_SwitchConversation_ResponseParamsMojoType {
    errorReason: (SwitchConversationErrorReason | null);
}
export type WebClientHandler_SwitchConversation_ResponseParams = WebClientHandler_SwitchConversation_ResponseParamsMojoType;
export declare interface WebClientHandler_RegisterConversation_ParamsMojoType {
    info: ConversationInfo;
}
export type WebClientHandler_RegisterConversation_Params = WebClientHandler_RegisterConversation_ParamsMojoType;
export declare interface WebClientHandler_RegisterConversation_ResponseParamsMojoType {
    errorReason: (RegisterConversationErrorReason | null);
}
export type WebClientHandler_RegisterConversation_ResponseParams = WebClientHandler_RegisterConversation_ResponseParamsMojoType;
export declare interface WebClientHandler_SetOnboardingCompleted_ParamsMojoType {
}
export type WebClientHandler_SetOnboardingCompleted_Params = WebClientHandler_SetOnboardingCompleted_ParamsMojoType;
export declare interface WebClientHandler_SubscribeToTabData_ParamsMojoType {
    tabId: number;
    receiver: TabDataHandlerRemote;
}
export type WebClientHandler_SubscribeToTabData_Params = WebClientHandler_SubscribeToTabData_ParamsMojoType;
export declare interface WebClientHandler_SubscribeToTabFavicon_ParamsMojoType {
    tabId: number;
    receiver: TabFaviconHandlerRemote;
}
export type WebClientHandler_SubscribeToTabFavicon_Params = WebClientHandler_SubscribeToTabFavicon_ParamsMojoType;
export declare interface WebClientHandler_CreateGeminiEnterpriseHandler_ParamsMojoType {
    receiver: glic_mojom_GeminiEnterpriseHandlerPendingReceiver;
}
export type WebClientHandler_CreateGeminiEnterpriseHandler_Params = WebClientHandler_CreateGeminiEnterpriseHandler_ParamsMojoType;
export declare interface WebClientHandler_SetClientStorageItem_ParamsMojoType {
    key: string;
    value: (string | null);
}
export type WebClientHandler_SetClientStorageItem_Params = WebClientHandler_SetClientStorageItem_ParamsMojoType;
export declare interface WebClientHandler_SetClientStorageItem_ResponseParamsMojoType {
}
export type WebClientHandler_SetClientStorageItem_ResponseParams = WebClientHandler_SetClientStorageItem_ResponseParamsMojoType;
export declare interface WebClientHandler_ClearClientStorage_ParamsMojoType {
}
export type WebClientHandler_ClearClientStorage_Params = WebClientHandler_ClearClientStorage_ParamsMojoType;
export declare interface WebClientHandler_ClearClientStorage_ResponseParamsMojoType {
}
export type WebClientHandler_ClearClientStorage_ResponseParams = WebClientHandler_ClearClientStorage_ResponseParamsMojoType;
export declare interface WebClientHandler_GetSendTabToSelfDevices_ParamsMojoType {
}
export type WebClientHandler_GetSendTabToSelfDevices_Params = WebClientHandler_GetSendTabToSelfDevices_ParamsMojoType;
export declare interface WebClientHandler_GetSendTabToSelfDevices_ResponseParamsMojoType {
    devices: SendTabToSelfDevice[];
}
export type WebClientHandler_GetSendTabToSelfDevices_ResponseParams = WebClientHandler_GetSendTabToSelfDevices_ResponseParamsMojoType;
export declare interface ZeroStateSuggestionsHandler_GetZeroStateSuggestionsAndSubscribe_ParamsMojoType {
    client: (ZeroStateSuggestionsClientRemote | null);
    options: ZeroStateSuggestionsOptions;
}
export type ZeroStateSuggestionsHandler_GetZeroStateSuggestionsAndSubscribe_Params = ZeroStateSuggestionsHandler_GetZeroStateSuggestionsAndSubscribe_ParamsMojoType;
export declare interface ZeroStateSuggestionsHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsMojoType {
    zeroStateSuggestions: (ZeroStateSuggestionsV2 | null);
}
export type ZeroStateSuggestionsHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParams = ZeroStateSuggestionsHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsMojoType;
export declare interface ZeroStateSuggestionsClient_NotifyZeroStateSuggestionsChanged_ParamsMojoType {
    suggestions: ZeroStateSuggestionsV2;
    options: ZeroStateSuggestionsOptions;
}
export type ZeroStateSuggestionsClient_NotifyZeroStateSuggestionsChanged_Params = ZeroStateSuggestionsClient_NotifyZeroStateSuggestionsChanged_ParamsMojoType;
export declare interface TabDataHandler_OnTabDataChanged_ParamsMojoType {
    tabData: TabData;
}
export type TabDataHandler_OnTabDataChanged_Params = TabDataHandler_OnTabDataChanged_ParamsMojoType;
export declare interface TabFaviconHandler_OnTabFaviconChanged_ParamsMojoType {
    favicon: (skia_mojom_BitmapN32 | null);
}
export type TabFaviconHandler_OnTabFaviconChanged_Params = TabFaviconHandler_OnTabFaviconChanged_ParamsMojoType;
export declare interface ExperimentalTriggeringUpdatesHandler_OnUpdate_ParamsMojoType {
    update: (ExperimentalTriggeringUpdate | null);
    observation: SubscriberObservationType;
}
export type ExperimentalTriggeringUpdatesHandler_OnUpdate_Params = ExperimentalTriggeringUpdatesHandler_OnUpdate_ParamsMojoType;
export declare interface ExperimentalTriggeringClient_UploadEncryptedScreenshot_ParamsMojoType {
    screenshot: Screenshot;
}
export type ExperimentalTriggeringClient_UploadEncryptedScreenshot_Params = ExperimentalTriggeringClient_UploadEncryptedScreenshot_ParamsMojoType;
export declare interface ExperimentalTriggeringClient_UploadEncryptedScreenshot_ResponseParamsMojoType {
    fileToken: (string | null);
}
export type ExperimentalTriggeringClient_UploadEncryptedScreenshot_ResponseParams = ExperimentalTriggeringClient_UploadEncryptedScreenshot_ResponseParamsMojoType;
export declare interface ExperimentalTriggeringClient_GetExperimentalTriggeringUpdates_ParamsMojoType {
    handler: ExperimentalTriggeringUpdatesHandlerRemote;
}
export type ExperimentalTriggeringClient_GetExperimentalTriggeringUpdates_Params = ExperimentalTriggeringClient_GetExperimentalTriggeringUpdates_ParamsMojoType;
export declare interface ExperimentalTriggeringClient_GetExperimentalTriggeringUpdates_ResponseParamsMojoType {
    success: boolean;
}
export type ExperimentalTriggeringClient_GetExperimentalTriggeringUpdates_ResponseParams = ExperimentalTriggeringClient_GetExperimentalTriggeringUpdates_ResponseParamsMojoType;
export declare interface ExperimentalTriggeringClient_SubmitExperimentalTriggeringConfirmationResponse_ParamsMojoType {
    response: number[];
}
export type ExperimentalTriggeringClient_SubmitExperimentalTriggeringConfirmationResponse_Params = ExperimentalTriggeringClient_SubmitExperimentalTriggeringConfirmationResponse_ParamsMojoType;
export declare interface ExperimentalTriggeringClient_SubmitExperimentalTriggeringConfirmationResponse_ResponseParamsMojoType {
    accepted: boolean;
}
export type ExperimentalTriggeringClient_SubmitExperimentalTriggeringConfirmationResponse_ResponseParams = ExperimentalTriggeringClient_SubmitExperimentalTriggeringConfirmationResponse_ResponseParamsMojoType;
export declare interface WebClient_CheckResponsive_ParamsMojoType {
}
export type WebClient_CheckResponsive_Params = WebClient_CheckResponsive_ParamsMojoType;
export declare interface WebClient_CheckResponsive_ResponseParamsMojoType {
}
export type WebClient_CheckResponsive_ResponseParams = WebClient_CheckResponsive_ResponseParamsMojoType;
export declare interface WebClient_NotifyPanelWillOpen_ParamsMojoType {
    panelOpeningData: PanelOpeningData;
}
export type WebClient_NotifyPanelWillOpen_Params = WebClient_NotifyPanelWillOpen_ParamsMojoType;
export declare interface WebClient_NotifyPanelWillOpen_ResponseParamsMojoType {
    openPanelInfo: OpenPanelInfo;
}
export type WebClient_NotifyPanelWillOpen_ResponseParams = WebClient_NotifyPanelWillOpen_ResponseParamsMojoType;
export declare interface WebClient_NotifyPanelWasClosed_ParamsMojoType {
}
export type WebClient_NotifyPanelWasClosed_Params = WebClient_NotifyPanelWasClosed_ParamsMojoType;
export declare interface WebClient_NotifyPanelWasClosed_ResponseParamsMojoType {
}
export type WebClient_NotifyPanelWasClosed_ResponseParams = WebClient_NotifyPanelWasClosed_ResponseParamsMojoType;
export declare interface WebClient_NotifyPanelStateChange_ParamsMojoType {
    panelState: PanelState;
}
export type WebClient_NotifyPanelStateChange_Params = WebClient_NotifyPanelStateChange_ParamsMojoType;
export declare interface WebClient_NotifyPanelActiveChange_ParamsMojoType {
    panelActive: boolean;
}
export type WebClient_NotifyPanelActiveChange_Params = WebClient_NotifyPanelActiveChange_ParamsMojoType;
export declare interface WebClient_NotifyPanelCanAttachChange_ParamsMojoType {
    canAttach: boolean;
}
export type WebClient_NotifyPanelCanAttachChange_Params = WebClient_NotifyPanelCanAttachChange_ParamsMojoType;
export declare interface WebClient_NotifyMicrophonePermissionStateChanged_ParamsMojoType {
    enabled: boolean;
}
export type WebClient_NotifyMicrophonePermissionStateChanged_Params = WebClient_NotifyMicrophonePermissionStateChanged_ParamsMojoType;
export declare interface WebClient_NotifyFileUploadStateChanged_ParamsMojoType {
    state: FileUploadPolicyState;
}
export type WebClient_NotifyFileUploadStateChanged_Params = WebClient_NotifyFileUploadStateChanged_ParamsMojoType;
export declare interface WebClient_StopMicrophone_ParamsMojoType {
}
export type WebClient_StopMicrophone_Params = WebClient_StopMicrophone_ParamsMojoType;
export declare interface WebClient_StopMicrophone_ResponseParamsMojoType {
}
export type WebClient_StopMicrophone_ResponseParams = WebClient_StopMicrophone_ResponseParamsMojoType;
export declare interface WebClient_NotifyLocationPermissionStateChanged_ParamsMojoType {
    enabled: boolean;
}
export type WebClient_NotifyLocationPermissionStateChanged_Params = WebClient_NotifyLocationPermissionStateChanged_ParamsMojoType;
export declare interface WebClient_NotifyTabContextPermissionStateChanged_ParamsMojoType {
    enabled: boolean;
}
export type WebClient_NotifyTabContextPermissionStateChanged_Params = WebClient_NotifyTabContextPermissionStateChanged_ParamsMojoType;
export declare interface WebClient_NotifyOsLocationPermissionStateChanged_ParamsMojoType {
    enabled: boolean;
}
export type WebClient_NotifyOsLocationPermissionStateChanged_Params = WebClient_NotifyOsLocationPermissionStateChanged_ParamsMojoType;
export declare interface WebClient_NotifyFocusedTabChanged_ParamsMojoType {
    focusedTabData: FocusedTabData;
}
export type WebClient_NotifyFocusedTabChanged_Params = WebClient_NotifyFocusedTabChanged_ParamsMojoType;
export declare interface WebClient_NotifyManualResizeChanged_ParamsMojoType {
    resizing: boolean;
}
export type WebClient_NotifyManualResizeChanged_Params = WebClient_NotifyManualResizeChanged_ParamsMojoType;
export declare interface WebClient_NotifyOsHotkeyStateChanged_ParamsMojoType {
    hotkey: string;
}
export type WebClient_NotifyOsHotkeyStateChanged_Params = WebClient_NotifyOsHotkeyStateChanged_ParamsMojoType;
export declare interface WebClient_NotifyBrowserIsOpenChanged_ParamsMojoType {
    browserIsOpen: boolean;
}
export type WebClient_NotifyBrowserIsOpenChanged_Params = WebClient_NotifyBrowserIsOpenChanged_ParamsMojoType;
export declare interface WebClient_NotifyZoomLevelChanged_ParamsMojoType {
    zoomFactor: number;
}
export type WebClient_NotifyZoomLevelChanged_Params = WebClient_NotifyZoomLevelChanged_ParamsMojoType;
export declare interface WebClient_NotifyInstanceActivationChanged_ParamsMojoType {
    instanceActive: boolean;
}
export type WebClient_NotifyInstanceActivationChanged_Params = WebClient_NotifyInstanceActivationChanged_ParamsMojoType;
export declare interface WebClient_NotifyClosedCaptioningSettingChanged_ParamsMojoType {
    enabled: boolean;
}
export type WebClient_NotifyClosedCaptioningSettingChanged_Params = WebClient_NotifyClosedCaptioningSettingChanged_ParamsMojoType;
export declare interface WebClient_NotifyPinnedTabsChanged_ParamsMojoType {
    tabData: TabData[];
}
export type WebClient_NotifyPinnedTabsChanged_Params = WebClient_NotifyPinnedTabsChanged_ParamsMojoType;
export declare interface WebClient_NotifyPinnedTabDataChanged_ParamsMojoType {
    tabData: TabData;
}
export type WebClient_NotifyPinnedTabDataChanged_Params = WebClient_NotifyPinnedTabDataChanged_ParamsMojoType;
export declare interface WebClient_NotifyPageMetadataChanged_ParamsMojoType {
    tabId: number;
    metadata: (blink_mojom_PageMetadata | null);
}
export type WebClient_NotifyPageMetadataChanged_Params = WebClient_NotifyPageMetadataChanged_ParamsMojoType;
export declare interface WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsMojoType {
    enabled: boolean;
}
export type WebClient_NotifyDefaultTabContextPermissionStateChanged_Params = WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsMojoType;
export declare interface WebClient_NotifyAdditionalContext_ParamsMojoType {
    context: AdditionalContext;
}
export type WebClient_NotifyAdditionalContext_Params = WebClient_NotifyAdditionalContext_ParamsMojoType;
export declare interface WebClient_NotifyActuationOnWebSettingChanged_ParamsMojoType {
    enabled: boolean;
}
export type WebClient_NotifyActuationOnWebSettingChanged_Params = WebClient_NotifyActuationOnWebSettingChanged_ParamsMojoType;
export declare interface WebClient_NotifyActOnWebCapabilityChanged_ParamsMojoType {
    canActOnWeb: boolean;
}
export type WebClient_NotifyActOnWebCapabilityChanged_Params = WebClient_NotifyActOnWebCapabilityChanged_ParamsMojoType;
export declare interface WebClient_NotifyOnboardingCompletedChanged_ParamsMojoType {
    completed: boolean;
}
export type WebClient_NotifyOnboardingCompletedChanged_Params = WebClient_NotifyOnboardingCompletedChanged_ParamsMojoType;
export declare interface WebClient_NotifyGeminiEnterpriseSettingsChanged_ParamsMojoType {
    settings: (GeminiEnterpriseSettings | null);
}
export type WebClient_NotifyGeminiEnterpriseSettingsChanged_Params = WebClient_NotifyGeminiEnterpriseSettingsChanged_ParamsMojoType;
export declare interface WebClient_NotifyActorTaskListRowClicked_ParamsMojoType {
    taskId: number;
}
export type WebClient_NotifyActorTaskListRowClicked_Params = WebClient_NotifyActorTaskListRowClicked_ParamsMojoType;
export declare interface WebClient_Invoke_ParamsMojoType {
    options: InvokeOptions;
}
export type WebClient_Invoke_Params = WebClient_Invoke_ParamsMojoType;
export declare interface WebClient_Invoke_ResponseParamsMojoType {
}
export type WebClient_Invoke_ResponseParams = WebClient_Invoke_ResponseParamsMojoType;
export declare interface WebClient_NotifyClientStorageItemChanged_ParamsMojoType {
    key: string;
    value: (string | null);
}
export type WebClient_NotifyClientStorageItemChanged_Params = WebClient_NotifyClientStorageItemChanged_ParamsMojoType;
export declare interface WebClient_NotifyClientStorageCleared_ParamsMojoType {
}
export type WebClient_NotifyClientStorageCleared_Params = WebClient_NotifyClientStorageCleared_ParamsMojoType;
export declare interface CaptureRegionObserver_OnUpdate_ParamsMojoType {
    result: (CaptureRegionResult | null);
    reason: (CaptureRegionErrorReason | null);
}
export type CaptureRegionObserver_OnUpdate_Params = CaptureRegionObserver_OnUpdate_ParamsMojoType;
export declare interface GetContextResult {
    errorReason?: string;
    tabContext?: TabContextResult;
}
export declare enum GetContextResultFieldTags {
    ERROR_REASON = 0,
    TAB_CONTEXT = 1
}
export declare function whichGetContextResult(u: GetContextResult): GetContextResultFieldTags;
export declare interface ScrollToSelector {
    exactText?: ScrollToTextSelector;
    textFragment?: ScrollToTextFragmentSelector;
    node?: ScrollToNodeSelector;
}
export declare enum ScrollToSelectorFieldTags {
    EXACT_TEXT = 0,
    TEXT_FRAGMENT = 1,
    NODE = 2
}
export declare function whichScrollToSelector(u: ScrollToSelector): ScrollToSelectorFieldTags;
export declare interface InvocationPayload {
    universalCart?: UniversalCartPayload;
    skillsPayload?: SkillsPayload;
    experimentalTriggering?: ExperimentalTriggeringPayload;
}
export declare enum InvocationPayloadFieldTags {
    UNIVERSAL_CART = 0,
    SKILLS_PAYLOAD = 1,
    EXPERIMENTAL_TRIGGERING = 2
}
export declare function whichInvocationPayload(u: InvocationPayload): InvocationPayloadFieldTags;
export declare interface AdditionalContextPart {
    data?: ContextData;
    screenshot?: Screenshot;
    webPageData?: WebPageData;
    annotatedPageData?: AnnotatedPageData;
    pdfDocumentData?: PdfDocumentData;
    tabContext?: TabContextResult;
    region?: CapturedRegion;
    pendingRegion?: PendingCapturedRegion;
    parentConversationMetadata?: ParentConversationMetadata;
}
export declare enum AdditionalContextPartFieldTags {
    DATA = 0,
    SCREENSHOT = 1,
    WEB_PAGE_DATA = 2,
    ANNOTATED_PAGE_DATA = 3,
    PDF_DOCUMENT_DATA = 4,
    TAB_CONTEXT = 5,
    REGION = 6,
    PENDING_REGION = 7,
    PARENT_CONVERSATION_METADATA = 8
}
export declare function whichAdditionalContextPart(u: AdditionalContextPart): AdditionalContextPartFieldTags;
export declare interface FocusedTabData {
    focusedTab?: TabData;
    noFocusedTabData?: NoFocusedTabData;
}
export declare enum FocusedTabDataFieldTags {
    FOCUSED_TAB = 0,
    NO_FOCUSED_TAB_DATA = 1
}
export declare function whichFocusedTabData(u: FocusedTabData): FocusedTabDataFieldTags;
export declare interface CapturedRegion {
    rect?: gfx_mojom_Rect;
    polyline?: gfx_mojom_Point[];
}
export declare enum CapturedRegionFieldTags {
    RECT = 0,
    POLYLINE = 1
}
export declare function whichCapturedRegion(u: CapturedRegion): CapturedRegionFieldTags;
export declare interface GetImageBytesResult {
    imageBytes?: ImageBytesResult;
    errorReason?: string;
}
export declare enum GetImageBytesResultFieldTags {
    IMAGE_BYTES = 0,
    ERROR_REASON = 1
}
export declare function whichGetImageBytesResult(u: GetImageBytesResult): GetImageBytesResultFieldTags;
export declare interface ActorHandler_CreateTask_ResponseParam_Result {
    success?: number;
    failure?: CreateTaskErrorReason;
}
export declare enum ActorHandler_CreateTask_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichActorHandler_CreateTask_ResponseParam_Result(u: ActorHandler_CreateTask_ResponseParam_Result): ActorHandler_CreateTask_ResponseParam_ResultFieldTags;
export declare interface ActorHandler_PerformActions_ResponseParam_Result {
    success?: mojoBase_mojom_ProtoWrapper;
    failure?: PerformActionsErrorReason;
}
export declare enum ActorHandler_PerformActions_ResponseParam_ResultFieldTags {
    SUCCESS = 0,
    FAILURE = 1
}
export declare function whichActorHandler_PerformActions_ResponseParam_Result(u: ActorHandler_PerformActions_ResponseParam_Result): ActorHandler_PerformActions_ResponseParam_ResultFieldTags;
