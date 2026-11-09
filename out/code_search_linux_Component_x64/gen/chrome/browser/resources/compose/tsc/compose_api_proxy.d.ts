import type { CloseReason, ComposeState, InputMode, OpenMetadata, StyleModifier, UserFeedback } from './compose.mojom-webui.js';
import { ComposeClientUntrustedPageHandlerRemote, ComposeSessionUntrustedPageHandlerRemote, ComposeUntrustedDialogCallbackRouter } from './compose.mojom-webui.js';
/** @interface */
export interface ComposeApiProxy {
    acceptComposeResult(): Promise<boolean>;
    logCancelEdit(): void;
    completeFirstRun(): void;
    closeUi(reason: CloseReason): void;
    compose(input: string, mode: InputMode, edited: boolean): void;
    rewrite(style: StyleModifier | null): void;
    logEditInput(): void;
    getRouter(): ComposeUntrustedDialogCallbackRouter;
    openBugReportingLink(): void;
    openComposeLearnMorePage(): void;
    openEnterpriseComposeLearnMorePage(): void;
    openComposeSettings(): void;
    openFeedbackSurveyLink(): void;
    openSignInPage(): void;
    setUserFeedback(reason: UserFeedback): void;
    requestInitialState(): Promise<OpenMetadata>;
    saveWebuiState(state: string): void;
    showUi(): void;
    recoverFromErrorState(): Promise<(ComposeState | null)>;
    undo(): Promise<(ComposeState | null)>;
    redo(): Promise<(ComposeState | null)>;
    editResult(newText: string): Promise<boolean>;
}
export declare class ComposeApiProxyImpl implements ComposeApiProxy {
    static instance: ComposeApiProxy | null;
    composeSessionPageHandler: ComposeSessionUntrustedPageHandlerRemote;
    composeClientPageHandler: ComposeClientUntrustedPageHandlerRemote;
    router: ComposeUntrustedDialogCallbackRouter;
    constructor();
    static getInstance(): ComposeApiProxy;
    static setInstance(newInstance: ComposeApiProxy): void;
    acceptComposeResult(): Promise<boolean>;
    logCancelEdit(): void;
    completeFirstRun(): void;
    closeUi(reason: CloseReason): void;
    openComposeSettings(): void;
    compose(input: string, mode: InputMode, edited: boolean): void;
    rewrite(style: StyleModifier): void;
    logEditInput(): void;
    getRouter(): ComposeUntrustedDialogCallbackRouter;
    openBugReportingLink(): void;
    openComposeLearnMorePage(): void;
    openEnterpriseComposeLearnMorePage(): void;
    openFeedbackSurveyLink(): void;
    openSignInPage(): void;
    requestInitialState(): Promise<OpenMetadata>;
    saveWebuiState(state: string): void;
    showUi(): void;
    setUserFeedback(reason: UserFeedback): void;
    undo(): Promise<(ComposeState | null)>;
    recoverFromErrorState(): Promise<(ComposeState | null)>;
    editResult(newResult: string): Promise<boolean>;
    redo(): Promise<(ComposeState | null)>;
}
