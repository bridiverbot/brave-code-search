import type { //
GmailOtpConfirmationRequest as GmailOtpConfirmationRequestMojo, //
GmailOtpConfirmationResult as GmailOtpConfirmationResultMojo, //
GmailOtpOptInRequest as GmailOtpOptInRequestMojo, //
GmailOtpOptInResult as GmailOtpOptInResultMojo, //
NavigationConfirmationRequest as NavigationConfirmationRequestMojo, //
NavigationConfirmationResponse as NavigationConfirmationResponseMojo, //
SelectAutofillSuggestionsDialogRequest as SelectAutofillSuggestionsDialogRequestMojo, //
SelectAutofillSuggestionsDialogResponse as SelectAutofillSuggestionsDialogResponseMojo, //
SelectCredentialDialogRequest as SelectCredentialDialogRequestMojo, //
SelectCredentialDialogResponse as SelectCredentialDialogResponseMojo, //
UserConfirmationDialogRequest as UserConfirmationDialogRequestMojo, //
UserConfirmationDialogResponse as UserConfirmationDialogResponseMojo } from '../../actor_webui.mojom-webui.js';
import { ActorHandlerRemote } from '../../glic.mojom-webui.js';
import type { //
ActorClientInterface, //
ActorTaskState as ActorTaskStateMojo, //
WebClientHandlerRemote, //
WebClientInitialState } from '../../glic.mojom-webui.js';
import type { //
ActorTaskInterruptReason, //
CancelActionsResult, //
CreateActorTabOptions, //
FormFillingResponse, //
GlicBrowserHost, //
GlicBrowserHostJournal, //
GmailOtpConfirmationRequest, //
GmailOtpOptInRequest, //
Journal, //
NavigationConfirmationRequest, //
Observable, //
ObservableValue, //
ResumeActorTaskResult, //
SelectAutofillSuggestionsDialogRequest, //
SelectCredentialDialogRequest, //
TabContextOptions, //
TabContextResult, //
TabData, //
TaskOptions, //
UserConfirmationDialogRequest } from '../../glic_api/glic_api.js';
import { //
ActorTaskPauseReason, //
ActorTaskState, //
ActorTaskStopReason } from '../../glic_api/glic_api.js';
import { ObservableValue as ObservableValueImpl, Subject } from '../../observable.js';
export declare class GlicBrowserHostActor implements ActorClientInterface, Partial<GlicBrowserHost> {
    private actorHandler?;
    private actorClientReceiver?;
    readonly userConfirmationDialogRequestSubject: Subject<UserConfirmationDialogRequest>;
    readonly selectCredentialDialogRequestSubject: Subject<SelectCredentialDialogRequest>;
    readonly navigationConfirmationRequestSubject: Subject<NavigationConfirmationRequest>;
    private actorTaskState;
    readonly selectAutofillSuggestionsDialogRequestSubject: Subject<SelectAutofillSuggestionsDialogRequest>;
    readonly selectGmailOtpOptInRequestSubject: Subject<GmailOtpOptInRequest>;
    readonly selectGmailOtpConfirmationRequestSubject: Subject<GmailOtpConfirmationRequest>;
    private journalHost?;
    actOnWebCapabilityValue: ObservableValueImpl<boolean>;
    readonly actorTaskListRowClickedSubject: Subject<number>;
    actInFocusedTab: undefined;
    initialize(initialState: WebClientInitialState, handler: WebClientHandlerRemote): void;
    destroyActor(): void;
    setActorTaskState(taskId: number, state: ActorTaskState): void;
    selectUserConfirmationDialogRequestHandler?(): Observable<UserConfirmationDialogRequest>;
    selectCredentialDialogRequestHandler?(): Observable<SelectCredentialDialogRequest>;
    selectNavigationConfirmationRequestHandler?(): Observable<NavigationConfirmationRequest>;
    selectGmailOtpOptInRequestHandler?(): Observable<GmailOtpOptInRequest>;
    selectGmailOtpConfirmationRequestHandler?(): Observable<GmailOtpConfirmationRequest>;
    selectAutofillSuggestionsDialogRequestHandler?(): Observable<SelectAutofillSuggestionsDialogRequest>;
    autofillSuggestionDialogOnFormPresented(taskId: number, params: {
        formFillingRequestIndex: number;
    }): void;
    autofillSuggestionDialogOnFormPreviewChanged(taskId: number, params: {
        formFillingRequestIndex: number;
        response?: FormFillingResponse;
    }): void;
    autofillSuggestionDialogOnFormConfirmed(taskId: number, params: {
        formFillingRequestIndex: number;
        response: FormFillingResponse;
    }): void;
    getContextForActorFromTab?(tabId: string, options: TabContextOptions): Promise<TabContextResult>;
    createTask?(taskOptions?: TaskOptions): Promise<number>;
    performActions?(actions: ArrayBuffer): Promise<ArrayBuffer>;
    cancelActions?(taskId: number): Promise<CancelActionsResult>;
    stopActorTask?(taskId?: number, stopReason?: ActorTaskStopReason): void;
    pauseActorTask?(taskId: number, pauseReason?: ActorTaskPauseReason, tabId?: string): void;
    resumeActorTask?(taskId: number, tabContextOptions: TabContextOptions): Promise<ResumeActorTaskResult>;
    interruptActorTask?(taskId: number, interruptReason?: ActorTaskInterruptReason): void;
    uninterruptActorTask?(taskId: number): void;
    updateActorTaskStepProgress?(taskId: number, stepProgress: string): void;
    getActorTaskState?(taskId: number): ObservableValue<ActorTaskState>;
    createActorTab?(taskId: number, options: CreateActorTabOptions): Promise<TabData>;
    getActOnWebCapability?(): ObservableValue<boolean>;
    actorTaskListRowClicked?(): Observable<number>;
    getJournalHost?(): GlicBrowserHostJournal;
    notifyActorTaskStateChanged(taskId: number, state: ActorTaskStateMojo): void;
    requestToShowCredentialSelectionDialog(request: SelectCredentialDialogRequestMojo): Promise<{
        response: SelectCredentialDialogResponseMojo;
    }>;
    requestToShowUserConfirmationDialog(request: UserConfirmationDialogRequestMojo): Promise<{
        response: UserConfirmationDialogResponseMojo;
    }>;
    requestToConfirmNavigation(request: NavigationConfirmationRequestMojo): Promise<{
        response: NavigationConfirmationResponseMojo;
    }>;
    requestToShowAutofillSuggestionsDialog(request: SelectAutofillSuggestionsDialogRequestMojo): Promise<{
        response: SelectAutofillSuggestionsDialogResponseMojo;
    }>;
    requestToShowGmailOtpOptInDialog(request: GmailOtpOptInRequestMojo): Promise<{
        result: GmailOtpOptInResultMojo;
    }>;
    requestToShowGmailOtpConfirmationDialog(request: GmailOtpConfirmationRequestMojo): Promise<{
        result: GmailOtpConfirmationResultMojo;
    }>;
}
export declare class GlicBrowserHostJournalImpl implements GlicBrowserHostJournal {
    private actorHandler;
    constructor(actorHandler: ActorHandlerRemote);
    beginAsyncEvent(asyncEventId: number, taskId: number, event: string, details: string): void;
    clear(): void;
    endAsyncEvent(asyncEventId: number, details: string): void;
    instantEvent(taskId: number, event: string, details: string): void;
    snapshot(clear: boolean): Promise<Journal>;
    start(maxBytes: number, captureScreenshots: boolean): void;
    stop(): void;
    recordFeedback(positive: boolean, reason: string): void;
}
