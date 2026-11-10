import type { //
ExperimentalTriggeringClientInterface, //
ExperimentalTriggeringUpdatesHandlerRemote, //
Screenshot as ScreenshotMojo, //
WebClientHandlerRemote } from '../../glic.mojom-webui.js';
import type { //
ExperimentalTriggeringConfirmationResponseRequest, //
ExperimentalTriggeringUploadScreenshotRequest, //
GlicExperimentalTriggeringBrowserHost, //
GlicWebClient as WebClient, //
Observable } from '../../glic_api/glic_api.js';
export declare class GlicBrowserHostExperimentalTriggering implements ExperimentalTriggeringClientInterface, GlicExperimentalTriggeringBrowserHost {
    private readonly uploadEncryptedScreenshotRequestsSubject;
    private readonly confirmationResponsesSubject;
    private webClient?;
    private clientReceiver?;
    private enableStructuredYieldMetadata;
    private readonly updateHandlers;
    private readonly pendingConfirmationResponses;
    initialize(webClient: WebClient, handler: WebClientHandlerRemote): void;
    destroy(): void;
    getExperimentalTriggeringUpdates(handler: ExperimentalTriggeringUpdatesHandlerRemote): Promise<{
        success: boolean;
    }>;
    uploadEncryptedScreenshotRequests(): Observable<ExperimentalTriggeringUploadScreenshotRequest>;
    confirmationResponses(): Observable<ExperimentalTriggeringConfirmationResponseRequest>;
    submitExperimentalTriggeringConfirmationResponse(response: number[]): Promise<{
        accepted: boolean;
    }>;
    uploadEncryptedScreenshot(screenshot: ScreenshotMojo): Promise<{
        fileToken: string | null;
    }>;
    private uploadEncryptedScreenshotInternal;
}
