export interface GetUserMediaParams {
    video: {
        mandatory: {
            chromeMediaSource: 'screen';
            maxWidth: number;
            maxHeight: number;
        };
    };
}
declare global {
    type GetUserMediaError = Error & {
        constraintName: string;
    };
    interface Navigator {
        getUserMedia(params: GetUserMediaParams, callback: (stream?: MediaStream) => void, errorCallback: (error: GetUserMediaError) => void): void;
    }
}
export interface FeedbackBrowserProxy {
    getSystemInformation(): Promise<chrome.feedbackPrivate.LogsMapEntry[]>;
    getUserEmail(): Promise<string>;
    getDialogArguments(): string;
    getUserMedia(params: GetUserMediaParams): Promise<MediaStream | undefined>;
    sendFeedback(feedback: chrome.feedbackPrivate.FeedbackInfo, loadSystemInfo?: boolean, formOpenTime?: number): Promise<chrome.feedbackPrivate.SendFeedbackResult>;
    showDialog(): void;
    closeDialog(): void;
    showSystemInfo(): void;
    showMetrics(): void;
    showAutofillMetadataInfo(autofillMetadata: string): void;
}
export declare class FeedbackBrowserProxyImpl implements FeedbackBrowserProxy {
    getSystemInformation(): Promise<chrome.feedbackPrivate.LogsMapEntry[]>;
    getUserEmail(): Promise<string>;
    getDialogArguments(): string;
    getUserMedia(params: GetUserMediaParams): Promise<MediaStream | undefined>;
    sendFeedback(feedback: chrome.feedbackPrivate.FeedbackInfo, loadSystemInfo?: boolean, formOpenTime?: number): Promise<chrome.feedbackPrivate.SendFeedbackResult>;
    showDialog(): void;
    closeDialog(): void;
    showSystemInfo(): void;
    showMetrics(): void;
    showAutofillMetadataInfo(autofillMetadata: string): void;
    static getInstance(): FeedbackBrowserProxy;
    static setInstance(obj: FeedbackBrowserProxy): void;
}
